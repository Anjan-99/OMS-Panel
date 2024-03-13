from django.shortcuts import render,redirect
import json
from binance.client import Client
from util import *
from binance.enums import *

def fetch_data():
    with open('tracked.json', 'r') as f:
        tracked = json.load(f)
    return tracked

def index(request):
    if request.method == 'POST':
        try:
            print(request.POST)
            exchange = str(request.POST.get('exchange'))
            symbol = str(request.POST.get('symbol'))
            types = str(request.POST.get('type'))
            stopLoss = float(request.POST.get('stopLoss'))
            risk = float(request.POST.get('risk'))
            #calculate lot size based on risk
            
            symbol = symbol.replace('/','')
            if exchange == 'Binance':

                if stopLoss > 0.0:
                        
                    #read the json
                    tracked = fetch_data()

                    if symbol not in tracked:
                        
                        client = Client(api_key=binance_api_key, api_secret=binance_api_secret, tld='com')
                        info = client.get_symbol_info(symbol)
                        price = client.get_symbol_ticker(symbol=symbol)
                        price = float(price['price'])
                        # get the tickSize from info
                        tickSize = float(info['filters'][0]['tickSize'])
                        print(tickSize)
                        
                        buylimitprice = float(price - tickSize)
                        selllimitprice = float(price + tickSize)
                        print(buylimitprice)
                        print(selllimitprice)
                        if types == 'Limit':
                            if stopLoss < price:
                                try:
                                    lot = int(risk//(abs(buylimitprice - stopLoss)))
                                    print(lot)
                                    order = client.create_test_order(
                                        symbol=symbol,
                                        side= Client.SIDE_BUY,
                                        type= Client.ORDER_TYPE_STOP_LOSS_LIMIT,
                                        price= str(buylimitprice),
                                        quantity= lot,
                                        timeInForce = TIME_IN_FORCE_GTC,
                                        stopPrice = stopLoss
                                        )
                                    # order = client.create_order(
                                    #     symbol=symbol,
                                    #     side= Client.SIDE_BUY, 
                                    #     type= Client.ORDER_TYPE_STOP_LOSS_LIMIT,
                                    #     price= str(buylimitprice),
                                    #     quantity= lot,
                                    #     timeInForce = TIME_IN_FORCE_GTC,
                                    #     stopPrice = stopLoss
                                    # )
                                    # orderid = order['orderId']
                                    print(order)
                                    tracked[symbol] = {'exchange': exchange,'orderID': 1 ,'type': types ,'side': 'LONG', 'price': str(buylimitprice), 'lotsize': lot, 'stopLoss': stopLoss}
                                    #make json name tracked.json
                                    with open('tracked.json', 'w') as f:
                                        json.dump(tracked, f)
                                except Exception as e:
                                    #use rejex to get the error message
                                    print(e)
                                    return render(request, 'hello.html')
                            elif stopLoss > price:
                                #place test order for short position
                                try:
                                    lot = int(risk//(abs(selllimitprice - stopLoss)))
                                    print(lot)
                                    order = client.create_test_order(
                                        symbol=symbol,
                                        side=Client.SIDE_SELL,
                                        type=Client.ORDER_TYPE_STOP_LOSS_LIMIT,
                                        price= str(selllimitprice),
                                        quantity= lot,
                                        timeInForce = TIME_IN_FORCE_GTC,
                                        stopPrice = stopLoss
                                    )
                                    # order = client.create_order(
                                    #     symbol=symbol,
                                    #     side=Client.SIDE_SELL,
                                    #     type=Client.ORDER_TYPE_STOP_LOSS_LIMIT,
                                    #     price= str(selllimitprice),
                                    #     quantity= lot,
                                    #     timeInForce = TIME_IN_FORCE_GTC,
                                    #     stopPrice = stopLoss
                                    # )
                                    # orderid = order['orderId']
                                    print(order)
                                    tracked[symbol] = {'exchange': exchange,'orderID': 1,'type': types ,'side': 'SHORT', 'price': str(selllimitprice), 'lotsize': lot, 'stopLoss': stopLoss}
                                    #make json name tracked.json
                                    with open('tracked.json', 'w') as f:
                                        json.dump(tracked, f)
                                except Exception as e:
                                    print(e)
                                    return render(request, 'hello.html')       
                    else:
                        return  render(request, 'hello.html')
            else:
                return  render(request, 'hello.html')
        except Exception as e:
            print(e)
            return  render(request, 'hello.html' )

    return render(request, 'hello.html')

def close_position(request):
    if request.method == 'POST':
        print(request.POST)
        try:
            #read the json
            tracked = fetch_data()
            print(tracked)
            # check if the json is empty
            if not tracked:
                e = 'No position to close.'
                return  render(request, 'hello.html' )
            else:
                # make a list of symbols from the json
                symbollist = [symbol for symbol in tracked]
                for symbol in symbollist:
                    print(symbol)
                    client = Client(api_key=binance_api_key, api_secret=binance_api_secret, tld='com')
                    if tracked[symbol]['side'] == 'LONG':
                        try:
                            order = client.create_test_order(
                                symbol=symbol,
                                side='SELL',
                                type='MARKET',
                                quantity= tracked[symbol]['lotsize']
                            )
                            # order = client.cancel_order(
                            #     symbol=symbol,
                            #     orderId=tracked[symbol]['orderID']
                            # )
                            print(order)
                            del tracked[symbol]
                            with open('tracked.json', 'w') as f:
                                json.dump(tracked, f)
                        except Exception as e:
                            print(e)
                            return render(request, 'hello.html')
                    elif tracked[symbol]['side'] == 'SHORT':
                        print(symbol)
                        try:
                            order = client.create_test_order(
                                symbol=symbol,
                                side=Client.SIDE_BUY,
                                type='MARKET',
                                quantity= tracked[symbol]['lotsize']
                            )
                            # order = client.cancel_order(
                            #     symbol=symbol,
                            #     orderId=tracked[symbol]['orderID']
                            # )
                            print(order)
                            del tracked[symbol]
                            with open('tracked.json', 'w') as f:
                                json.dump(tracked, f)
                            
                        except Exception as e:
                            print(e)
                            return render(request, 'hello.html')
                    
        except Exception as e:
            return  render(request, 'hello.html' )

    return  render(request ,'hello.html' )


def b_e_pos(request):
    # break even position modify stoploss and move it to entry price and modifiy the order
    if request.method == 'POST':
        try:
            #read the json
            tracked = fetch_data()
            print(tracked)
            #get the first symbol from the json
            symbol = list(tracked.keys())[0]
            print(symbol)
            # check if the json is empty
            if not tracked:
                return  render(request, 'hello.html' )
            else:
                # make a list of symbols from the json
                #modify the order
                client = Client(api_key=binance_api_key, api_secret=binance_api_secret, tld='com')
                
                stoploss = tracked[symbol]['price']
                tracked[symbol]['stopLoss'] = stoploss
                try:
                    print("order modified successfully.")
                    with open('tracked.json', 'w') as f:
                        json.dump(tracked, f)
                except Exception as e:
                    print(e)
                    return render(request, 'hello.html')
                
                    
        except Exception as e:
            print(e)
            return  render(request, 'hello.html', {'error1': e} )

    return  render(request ,'hello.html' )

def modify_sl(request):
    if request.method == 'POST':
        try:
            #read the json
            tracked = fetch_data()
            print(tracked)
            #get the first symbol from the json
            print(request.POST)
            
            exchange = str(request.POST.get('exchange'))
            symbol = str(request.POST.get('symbol'))
            modify_stopLoss = float(request.POST.get('modifysl'))
            
            symbol = symbol.replace('/','')
            if exchange == 'Binance':
                if modify_stopLoss > 0.0:
                    if symbol in tracked:
                        client = Client(api_key=binance_api_key, api_secret=binance_api_secret, tld='com')
                        
                        tracked[symbol]['stopLoss'] = modify_stopLoss
                        try:
                            print("order modified successfully.")
                            with open('tracked.json', 'w') as f:
                                json.dump(tracked, f)
                        except Exception as e:
                            print(e)
                            return render(request, 'hello.html')
                    else:
                        e = 'No position to modify.'
                        print(e)
                        return  render(request, 'hello.html' )
                else:
                    e = 'Please enter a valid stoploss.'
                    print(e)
                    return  render(request, 'hello.html')
                
            # elif exchange == 'Bybit':
            #     e = 'Please select a valid exchange.'
            #     tracked = fetch_data()
            #     return  render(request, 'hello.html')
            
        except Exception as e:
            print(e)
            return  render(request, 'hello.html' )
        
    return  render(request ,'hello.html' )
            
                        
                        
                        
            