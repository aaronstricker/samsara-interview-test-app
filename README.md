# samsara-interview-test-app

Link to github: https://github.com/aaronstricker/samsara-interview-test-app

Graphs real time data from the Samsara API using plotly to plot the data. 

Samsara: https://developers.samsara.com/reference/overview

Plotly: https://github.com/plotly/plotly.js/tree/master/dist

Requires a proxy to handshake the API request, due to CORS
Run in cmd before starting local server
```
lcp --proxyUrl https://api.samsara.com
```
See https://github.com/garmeeh/local-cors-proxy for more information

Preview of graph:
![image](https://user-images.githubusercontent.com/29259191/160053094-fd3e4a00-a6c7-472d-a039-ce84bf9f1ff4.png)
