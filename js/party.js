$(function () {
	party =[
		{	
			"id": 1,
			"name": "霜蓋豆奶",
			"lv": "LV 72",
			"job": "正式隊員",
			"time": 1,
		},
		{
			"id": 2,
			"name": "一杯豆奶",
			"lv": "LV 48",
			"job": "正式早餐",
			"time": 50,
		},
		{
			"id": 3,
			"name": "兩杯豆奶",
			"lv": "LV 32",
			"job": "正式飲料",
			"time": 100,
		},
		{
			"id": 4,
			"name": "我是非洲線",
			"lv": "LV 1",
			"job": "其實我是咖啡豆",
			"time": 500,
		},						
	]
	let partyHtml = ""
	party.map((party)=>{
		partyHtml += "<li id=\"mem"+ party.id +"\">"
		partyHtml +=	"<h4>"+ party.name +"</h4>"
		partyHtml +=	"<p>"+ party.lv +"</p>"
		partyHtml +=	"<p>"+ party.job +"</p>"
		partyHtml +=	"<b></b>"
		partyHtml +=	"<div class=\"loading\"></div>"
		partyHtml += "</li>"			
	})

	$("#team").html(partyHtml)
})