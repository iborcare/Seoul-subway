// 모듈을 추출합니다.
var request = require('request');
var cheerio = require('cheerio');

var url = 'http://swopenapi.seoul.go.kr/api/subway/6d4267736b636c753330425a724147/xml/realtimeStationArrival/0/5/';
var queryParams = + encodeURIComponent('학동'); 


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
        var arvlMsg2 = $(el).find("arvlMsg2").text();
        var arvlMsg3 = $(el).find("arvlMsg3").text();
        var statnNm = $(el).find("statnNm").text();
        var trainLineNm = $(el).find("trainLineNm").text();
        //var stationNm2 = $(el).find("stationNm2").text();

    console.log(arvlMsg2);
    console.log(arvlMsg3);
    console.log(statnNm);
    console.log(trainLineNm);
    //console.log();

    })
});