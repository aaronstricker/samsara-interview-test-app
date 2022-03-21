//call Air Inlet (Ambient Air) Temp from api
//       ambientAirTemperatureMilliC  -> Celcius

//call Engine Coolant Temp from api
//       engineCoolantTemperatureMilliC    -> Celcius

/*
    curl --request GET 'https://api.samsara.com/fleet/vehicles/stats/feed' \
    -d types='ambientAirTemperatureMilliC,engineCoolantTemperatureMilliC' \
    -d startTime='2020-07-05T00:00:00Z' \
    -d endTime='2020-07-06T00:00:00Z' \
    --header 'Authorization: Bearer TOKEN' \
    -G
*/

//all gateways: https://developers.samsara.com/reference/getgateways
// { "data": [ { "serial": "GRDG-CER-F87", "model": "VG54NA", "asset": { "id": "281474980550881", "externalIds": { "samsara.serial": "GRDGCERF87", "samsara.vin": "JN1BJ1CR0HW141281" } }, "connectionStatus": { "healthStatus": "Connected", "lastConnected": "2022-03-20T21:04:51.171Z" }, "dataUsageLast30Days": { "cellularDataUsageBytes": 1875461, "hotspotUsageBytes": 0 }, "accessoryDevices": [ { "serial": "WRXP-N3H-JYT", "model": "ACC-DM11" }, { "serial": "WVNS-52C-B47", "model": "EM21" } ] } ], "pagination": { "endCursor": "", "hasNextPage": false } }
