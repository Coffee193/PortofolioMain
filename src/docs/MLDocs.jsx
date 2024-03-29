export let ret_list = [
    {'header':'Automated Sampling | from Binance.data',
    'note':'Binance.data.com was chosen because of its free distribution of data. The sampling is done by creating a Binance_Sample Object',
    'key':'ml_auto_sampl',
    'url':'automated_sampling'},

    {'header': 'Multiprocessing with Ray | Build RayCatcher library',
    'note':'Why use Ray& building a library on top of it to manage all our data, processes& finding optimal ARMA params faster',
    'url':'multiproc_ray'},

    {'header':'Volume Dollar Tick& Custom Bars',
    'note': 'transforming millions of fetched data rows to volume, dollar, tick bars while using all CPU Cores',
    'url':'bars'},

    {'header':'EWMA | Speed Up',
    'note': 'Using caching to increase recursive EWMA function& developing a custom method to increase it to O(1) time without sacrificing accuracy',
    'url':'ewma'},

    {'header':'ARMA, Dickey-Fuller& Cointegration',
    'note':'Talking about 3 different forecasting methods (some are meant for short-term forecasting while others for long-term)',
    'url':'forecasting'}
]

//'url':'docs/machine_learning/automated_sampling'