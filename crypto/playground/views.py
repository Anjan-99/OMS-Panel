from django.shortcuts import render
import json
from binance.client import Client
from util import *

def index(request):
    if request.method == 'POST':
        print(request.POST)
        if 'selected_symbols' not in request.POST:
            try:
                print(request.POST)
                
                exchange = str(request.POST.get('exchange'))
                symbol = str(request.POST.get('symbol'))
                stopLoss = float(request.POST.get('stopLoss'))
                types = str(request.POST.get('type'))
                lotsize = float(request.POST.get('lot_size'))
                
                symbol = symbol.replace('/','')

                if exchange == 'Binance':

                    if stopLoss > 0.0:
                            
                        #read the json
                        with open('tracked.json', 'r') as f:
                            tracked = json.load(f)

                        if symbol not in tracked:
                            
                            client = Client(api_key=binance_api_key, api_secret=binance_api_secret, tld='com')
                            price = client.get_symbol_ticker(symbol=symbol)
                            lot = client.get_symbol_info(symbol)
                            lot = lotsize
                            price = price['price']
                            
                            if types == 'Market':
                                if stopLoss < float(price):
                                    try:
                                        order = client.create_test_order(
                                            symbol=symbol,
                                            side='BUY',
                                            type='MARKET',
                                            quantity= lot
                                            )
                                        print(order)
                                        tracked[symbol] = {'exchange': exchange,'type': types ,'side': 'LONG', 'price': price, 'lotsize': lot, 'stopLoss': stopLoss}
                                        #make json name tracked.json
                                        with open('tracked.json', 'w') as f:
                                            json.dump(tracked, f)
                                    except Exception as e:
                                        #use rejex to get the error message
                                        e = str(e).split(':')
                                        e = e[1]
                                        return render(request, 'hello.html', {'error': e,'order_history': tracked})
                                elif stopLoss > float(price):
                                    #place test order for short position
                                    try:
                                        order = client.create_test_order(
                                            symbol=symbol,
                                            side='SELL',
                                            type='MARKET',
                                            quantity= lot
                                        )
                                        print(order)
                                        tracked[symbol] = {'exchange': exchange,'type': types ,'side': 'SHORT', 'price': price, 'lotsize': lot, 'stopLoss': stopLoss}
                                        #make json name tracked.json
                                        with open('tracked.json', 'w') as f:
                                            json.dump(tracked, f)
                                    except Exception as e:
                                        e = str(e).split(':')
                                        e = e[1]
                                        return render(request, 'hello.html', {'error': e,'order_history': tracked})       
                        else:
                            e = 'Order for this symbol is already placed.'
                            return  render(request, 'hello.html', {'error': e,'order_history': tracked})
                        
                    
                else:
                    e = 'Please select a valid exchange.'
                    return  render(request, 'hello.html', {'error': e,'order_history': tracked})
            except Exception as e:
                e = 'please try again with valid inputs.'
                return  render(request, 'hello.html', {'error': e,'order_history': tracked} )
        else:
            #read the json
            with open('tracked.json', 'r') as f:
                tracked = json.load(f)
            seleted = request.POST.getlist('selected_symbols')
            for symbol in json.loads(seleted[0]):
                client = Client(api_key=binance_api_key, api_secret=binance_api_secret, tld='com')
                del tracked[symbol]
                with open('tracked.json', 'w') as f:
                    json.dump(tracked, f)
   
    with open('tracked.json', 'r') as f:
        tracked = json.load(f)
    return render(request, 'hello.html',{'order_history': tracked})

