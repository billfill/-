$(function(){
	// 讀取進度動畫
	var progress1 = 0;
	var progress2 = 0;
	var progress3 = 0;
	var progress4 = 0;
	var timer1 = setInterval(add1,1);
	var timer2 = setInterval(add2,50);
	var timer3 = setInterval(add3,100);
	var timer4 = setInterval(add4,500);
	function add1 (){
		progress1 <= 99 ? progress1++ : 100+clearInterval(timer1);
		$("#mem1>.loading").css("width",progress1+"%")
		$("#mem1>b").text(progress1+ "%")
		// console.log(progress)
	}
	function add2 (){
		progress2 <= 99 ? progress2++ : 100+clearInterval(timer2);
		$("#mem2>.loading").css("width",progress2+"%")
		$("#mem2>b").text(progress2+ "%")
		// console.log(progress)
	}
	function add3 (){
		progress3 <= 99 ? progress3++ : 100+clearInterval(timer3);
		$("#mem3>.loading").css("width",progress3+"%")
		$("#mem3>b").text(progress3+ "%")
		// console.log(progress)
	}
	function add4 (){
		progress4 <= 98 ? progress4++ : 99+clearInterval(timer4)+ alert("非洲線是不會100%的");
		$("#mem4>.loading").css("width",progress4+"%")
		$("#mem4>b").text(progress4+ "%")
	}			
	console.log("非洲線很厭世不會100%")
})