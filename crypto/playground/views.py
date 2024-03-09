from django.shortcuts import render
from django.http import HttpResponse
import requests
import json
import pandas as pd
from django.shortcuts import redirect
#import binance module in try block
from binance.client import Client
from util import *
#from ks_api_client import ks_api


# Create your views here.


def index(request):
    if request.method == 'POST':
        try:
            print(request.POST, 'post')
            exchange = str(request.POST.get('exchange'))
            symbol = str(request.POST.get('symbol'))
            stopLoss = float(request.POST.get('stopLoss'))
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
                        lot = float(lot['filters'][1]['stepSize'])
                        lot = str(10)
                        price = price['price']

                        if stopLoss < float(price):
                            try:
                                order = client.create_test_order(
                                    symbol=symbol,
                                    side='BUY',
                                    type='MARKET',
                                    quantity= lot
                                    )
                                print(order)
                                tracked[symbol] = {'exchange': exchange, 'side': 'LONG', 'stopLoss': stopLoss, 'price': price}
                                #make json name tracked.json
                                with open('tracked.json', 'w') as f:
                                    json.dump(tracked, f)
                            except Exception as e:
                                return HttpResponse(f'Order Failed {e}')
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
                                tracked[symbol] = {'exchange': exchange, 'side': 'SHORT', 'stopLoss': stopLoss, 'price': price}
                                #make json name tracked.json
                                with open('tracked.json', 'w') as f:
                                    json.dump(tracked, f)
                            except Exception as e:
                                return HttpResponse(f'Order Failed {e}')        
                    else:
                        e = 'Order for this symbol is already placed.'
                        return  render(request, 'hello.html', {'error': e})
                    
                else:
                    #read the json
                    with open('tracked.json', 'r') as f:
                        tracked = json.load(f)

                    if symbol in tracked:
                        #cancel the order
                        client = Client(api_key=binance_api_key, api_secret=binance_api_secret, tld='com')
                        del tracked[symbol]
                        with open('tracked.json', 'w') as f:
                            json.dump(tracked, f) 
                    else:
                        e = 'No order found for this symbol.'
                        return  render(request, 'hello.html', {'error': e})
            else:
                e = 'Please select a valid exchange.'
                return  render(request, 'hello.html', {'error': e})
        except Exception as e:
            e = 'please try again with valid inputs.'
            return  render(request, 'hello.html', {'error': e})
        
                
        # elif exchange == 'Kotak Securities':
        #     ks = ks_api.KSTradeApi(access_token=, userid=,consumer_key=,ip=,app_id=,host='')
        #     ks.login(password=)

    #read the json
    with open('tracked.json', 'r') as f:
        tracked = json.load(f)
    print(tracked)

    return render(request, 'hello.html ',{'order_history': tracked})

