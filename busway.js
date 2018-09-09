// 모듈을 추출합니다.
var request = require('request');
var cheerio = require('cheerio');

var url = 'http://ws.bus.go.kr/api/rest/stationinfo/getStationByUid';
var queryParams = '?' + encodeURIComponent('ServiceKey') + '=Koi4jjffX6jz2pKJOpDQpxFLqsgwyt%2FPWPODyha%2Bc6D5J4RfejM2Z7YJIqWbYC9xexkoZ09KXZ1IuBpstmzLYg%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('arsId') + '=' + encodeURIComponent('05012'); /* 정류소고유번호 */

// 요청합니다.
request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    if (error) { console.log("Error:", err); 
    return; 
}
    var $ = cheerio.load(body);
    $("itemList").each(function (idx, el) {
        var rtnm = $(el).find("rtnm").text();
        var arrmsg1 = $(el).find("arrmsg1").text();
        var arrmsg2 = $(el).find("arrmsg2").text();
        var stationNm1 = $(el).find("stationNm1").text();
        var stationNm2 = $(el).find("stationNm2").text();

    console.log(rtnm);
    console.log(arrmsg1);
    console.log(arrmsg2);
    console.log(stationNm1);
    console.log(stationNm2);

    })
});