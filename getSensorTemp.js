//call sensor temperature api from api
//format sensor temperature data from api
// https://developers.samsara.com/reference/v1getsensorstemperature
    // need to divide "ambientTemperature" by 1000 to get C
// listed all sensors to get IDs for sensors
    // https://developers.samsara.com/reference/v1getsensors: "sensors": [ { "id": 278018084469703, "name": "Door Sensor1", "macAddress": "fc:db:21:2a:7b:c7" }, { "id": 278018084739875, "name": "temp sensor 1", "macAddress": "fc:db:21:2e:9b:23" }
        //{ "id": 278018084739875, "name": "temp sensor 1", "macAddress": "fc:db:21:2e:9b:23" }

/* example api response:
        {
            "groupId": 101688,
            "sensors": [
                {
                "id": 278018084739875,
                "name": "temp sensor 1",
                "ambientTemperature": 9644,
                "ambientTemperatureTime": "2022-03-21T02:46:50Z",
                "vehicleId": 281474980550881
                }
            ]
        }
*/

var myHeaders = new Headers(
    {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer samsara_api_lvEk1YOK3UDtQmPKIObOF5Le4vvsZC'
    }
);

const options = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow',
    body: JSON.stringify({sensors: [278018084739875]})
  };

var sensorTemp = 0;

fetch('http://localhost:8010/proxy/v1/sensors/temperature', options)
    .then(response => response.json())
    .then(data => {
        sensorTemp = (data.ambientTemperature / 1000) * (9 / 5) + 32; //extracts just the temp from response
    })
    .catch(err => console.error(err));

export {sensorTemp};