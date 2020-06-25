(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){


var xfnv1 = 0;
var xhnv1 = 0;
var xfnv2 = 0;
var xhnv2 = 0;
var xfnv3 = 0;
var xhnv3 = 0;
var xfnv4 = 0;
var xhnv4 = 0;
var xfnv5 = 0;
var xhnv5 = 0;
var xfnv6 = 0;
var xhnv6 = 0;
var xfnv7 = 0;
var xhnv7 = 0;
var xfnv8 = 0;
var xhnv8 = 0;
var xfnv9 = 0;
var xhnv9 = 0;
var xfnv10 = 0;
var xhnv10 = 0;
var xfnv11 = 0;
var xhnv11 = 0;
var xfnv12 = 0;
var xhnv12 = 0;
var xfnv13 = 0;
var xhnv13 = 0;
var xfnv14 = 0;
var xhnv14 = 0;
var xfnv15 = 0;
var xhnv15 = 0;
var xfnv16 = 0;
var xhnv16 = 0;
var xfnv17 = 0;
var xfnv18 = 0;
var xfnv19 = 0;
var xfnv20 = 0;
var xfnv21 = 0;
var xhnv21 = 0;
var xfnv22 = 0;
var xhnv22 = 0;
var xfnv23 = 0;
var xhnv23 = 0;
var xfnv24 = 0;
var xhnv24 = 0;
var xfnv25 = 0;
var xfnv26 = 0;
var xfnv27 = 0;
var xfnv28 = 0;
var xfnv29 = 0;
var xfnv30 = 0;
var xfnv31 = 0;
var xfnv32 = 0;


var cost1 = 0;
var cost2 = 0;
var cost3 = 0;
var cost4 = 0;
var cost5 = 0;
var cost6 = 0;
var cost7 = 0;
var cost8 = 0;

$("span.tb1").text(" "+xfnv1+" ");
$("span.tb2").text(" "+xhnv1+" ");
$("span.tb3").text(" "+xfnv2+" ");
$("span.tb4").text(" "+xhnv2+" ");
$("span.tb5").text(" "+xfnv3+" ");
$("span.tb6").text(" "+xhnv3+" ");
$("span.tb7").text(" "+xfnv4+" ");
$("span.tb8").text(" "+xhnv4+" ");
$("span.tb9").text(" "+xfnv5+" ");
$("span.tb10").text(" "+xhnv5+" ");
$("span.tb11").text(" "+xfnv6+" ");
$("span.tb12").text(" "+xhnv6+" ");
$("span.tb13").text(" "+xfnv7+" ");
$("span.tb14").text(" "+xhnv7+" ");
$("span.tb15").text(" "+xfnv8+" ");
$("span.tb16").text(" "+xhnv8+" ");
$("span.tb17").text(" "+xfnv9+" ");
$("span.tb18").text(" "+xhnv9+" ");
$("span.tb19").text(" "+xfnv10+" ");
$("span.tb20").text(" "+xhnv10+" ");
$("span.tb21").text(" "+xfnv11+" ");
$("span.tb22").text(" "+xhnv11+" ");
$("span.tb23").text(" "+xfnv12+" ");
$("span.tb24").text(" "+xhnv12+" ");
$("span.tb25").text(" "+xfnv13+" ");
$("span.tb26").text(" "+xhnv13+" ");
$("span.tb27").text(" "+xfnv14+" ");
$("span.tb28").text(" "+xhnv14+" ");
$("span.tb29").text(" "+xfnv15+" ");
$("span.tb30").text(" "+xhnv15+" ");
$("span.tb31").text(" "+xfnv16+" ");
$("span.tb32").text(" "+xhnv16+" ");
$("span.tb33").text(" "+xfnv17+" ");
$("span.tb34").text(" "+xfnv18+" ");
$("span.tb35").text(" "+xfnv19+" ");
$("span.tb36").text(" "+xfnv20+" ");
$("span.tb37").text(" "+xfnv21+" ");
$("span.tb38").text(" "+xhnv21+" ");
$("span.tb39").text(" "+xfnv22+" ");
$("span.tb40").text(" "+xhnv22+" ");
$("span.tb41").text(" "+xfnv23+" ");
$("span.tb42").text(" "+xhnv23+" ");
$("span.tb43").text(" "+xfnv24+" ");
$("span.tb44").text(" "+xhnv24+" ");
$("span.tb45").text(" "+xfnv25+" ");
$("span.tb46").text(" "+xfnv26+" ");
$("span.tb47").text(" "+xfnv27+" ");
$("span.tb48").text(" "+xfnv28+" ");
$("span.tb49").text(" "+xfnv29+" ");
$("span.tb50").text(" "+xfnv30+" ");
$("span.tb51").text(" "+xfnv31+" ");
$("span.tb52").text(" "+xfnv32+" ");



$(".menu-item-details1 button").click(function () {
//********************** 	
	if($(this).attr("class")=="1") {
	    xfnv1 = xfnv1 + 1;
	    $("span.tb1").text(" "+xfnv1+" ");
	}
	else if($(this).attr("class")=="2") {
	    xfnv1 = xfnv1 - 1;
	    if(xfnv1<0) {
	        xfnv1 = 0;
	    }
	    $("span.tb1").text(" "+xfnv1+" ");
	}
	if($(this).attr("class")=="3") {
	    xhnv1 = xhnv1 + 1;
	    $("span.tb2").text(" "+xhnv1+" ");
	}
	else if($(this).attr("class")=="4") {
	    xhnv1 = xhnv1 - 1;
	    if(xhnv1<0) {
	        xhnv1 = 0;
	    }
	    $("span.tb2").text(" "+xhnv1+" ");
	}
	const fs = require("fs");
	fs.writeFile("words.txt",xfnv1, function (err) {
  		if (err) return console.log(err);
  		console.log('Hello World > helloworld.txt');
	});
//END Of 1st non-veg 

//***********************
	if($(this).attr("class")=="5") {
	    xfnv2 = xfnv2 + 1;
	    $("span.tb3").text(" "+xfnv2+" ");
	}
	else if($(this).attr("class")=="6") {
	    xfnv2 = xfnv2 - 1;
	    if(xfnv2<0) {
	        xfnv2 = 0;
	    }
	    $("span.tb3").text(" "+xfnv2+" ");
	}
	if($(this).attr("class")=="7") {
	    xhnv2 = xhnv2 + 1;
	    $("span.tb4").text(" "+xhnv2+" ");
	}
	else if($(this).attr("class")=="8") {
	    xhnv2 = xhnv2 - 1;
	    if(xhnv2<0) {
	        xhnv2 = 0;
	    }
	    $("span.tb4").text(" "+xhnv2+" ");
	}
//End of 2nd non-veg

//***********************
	if($(this).attr("class")=="9") {
	    xfnv3 = xfnv3 + 1;
	    $("span.tb5").text(" "+xfnv3+" ");
	}
	else if($(this).attr("class")=="10") {
	    xfnv3 = xfnv3 - 1;
	    if(xfnv3<0) {
	        xfnv3 = 0;
	    }
	    $("span.tb5").text(" "+xfnv3+" ");
	}
	if($(this).attr("class")=="11") {
	    xhnv3 = xhnv3 + 1;
	    $("span.tb6").text(" "+xhnv3+" ");
	}
	else if($(this).attr("class")=="12") {
	    xhnv3 = xhnv3 - 1;
	    if(xhnv3<0) {
	        xhnv3 = 0;
	    }
	    $("span.tb6").text(" "+xhnv3+" ");
	}
//End of 3rd non-veg

//***********************
	if($(this).attr("class")=="13") {
	    xfnv4 = xfnv4 + 1;
	    $("span.tb7").text(" "+xfnv4+" ");
	}
	else if($(this).attr("class")=="14") {
	    xfnv4 = xfnv4 - 1;
	    if(xfnv4<0) {
	        xfnv4 = 0;
	    }
	    $("span.tb7").text(" "+xfnv4+" ");
	}
	if($(this).attr("class")=="15") {
	    xhnv4 = xhnv4 + 1;
	    $("span.tb8").text(" "+xhnv4+" ");
	}
	else if($(this).attr("class")=="16") {
	    xhnv4 = xhnv4 - 1;
	    if(xhnv4<0) {
	        xhnv4 = 0;
	    }
	    $("span.tb8").text(" "+xhnv4+" ");
	}
//End of 4th non-veg


cost1 = (xfnv1*parseInt($(".cost1").html())) + (xhnv1*parseInt($(".cost2").html())) 
	 + (xfnv2*parseInt($(".cost3").html())) + (xhnv2*parseInt($(".cost4").html()))
	 + (xfnv3*parseInt($(".cost5").html())) + (xhnv3*parseInt($(".cost6").html()))
	 + (xfnv4*parseInt($(".cost7").html())) + (xhnv4*parseInt($(".cost8").html()))
	 ;
	 alert(cost1);
});



$(".menu-item-details2 button").click(function () {
//***********************
	if($(this).attr("class")=="17") {
	    xfnv5 = xfnv5 + 1;
	    $("span.tb9").text(" "+xfnv5+" ");
	}
	else if($(this).attr("class")=="18") {
	    xfnv5 = xfnv5 - 1;
	    if(xfnv5<0) {
	        xfnv5 = 0;
	    }
	    $("span.tb9").text(" "+xfnv5+" ");
	}
	if($(this).attr("class")=="19") {
	    xhnv5 = xhnv5 + 1;
	    $("span.tb10").text(" "+xhnv5+" ");
	}
	else if($(this).attr("class")=="20") {
	    xhnv5 = xhnv5 - 1;
	    if(xhnv5<0) {
	        xhnv5 = 0;
	    }
	    $("span.tb10").text(" "+xhnv5+" ");
	}
//End of 1st veg

//***********************
	if($(this).attr("class")=="21") {
	    xfnv6 = xfnv6 + 1;
	    $("span.tb11").text(" "+xfnv6+" ");
	}
	else if($(this).attr("class")=="22") {
	    xfnv6 = xfnv6 - 1;
	    if(xfnv6<0) {
	        xfnv6 = 0;
	    }
	    $("span.tb11").text(" "+xfnv6+" ");
	}
	if($(this).attr("class")=="23") {
	    xhnv6 = xhnv6 + 1;
	    $("span.tb12").text(" "+xhnv6+" ");
	}
	else if($(this).attr("class")=="24") {
	    xhnv6 = xhnv6 - 1;
	    if(xhnv6<0) {
	        xhnv6 = 0;
	    }
	    $("span.tb12").text(" "+xhnv6+" ");
	}
//End of 2nd veg

//***********************
	if($(this).attr("class")=="25") {
	    xfnv7 = xfnv7 + 1;
	    $("span.tb13").text(" "+xfnv7+" ");
	}
	else if($(this).attr("class")=="26") {
	    xfnv7 = xfnv7 - 1;
	    if(xfnv7<0) {
	        xfnv7 = 0;
	    }
	    $("span.tb13").text(" "+xfnv7+" ");
	}
	if($(this).attr("class")=="27") {
	    xhnv7 = xhnv7 + 1;
	    $("span.tb14").text(" "+xhnv7+" ");
	}
	else if($(this).attr("class")=="28") {
	    xhnv7 = xhnv7 - 1;
	    if(xhnv7<0) {
	        xhnv7 = 0;
	    }
	    $("span.tb14").text(" "+xhnv7+" ");
	}
//End of 3rd veg

//***********************
	if($(this).attr("class")=="29") {
	    xfnv8 = xfnv8 + 1;
	    $("span.tb15").text(" "+xfnv8+" ");
	}
	else if($(this).attr("class")=="30") {
	    xfnv8 = xfnv8 - 1;
	    if(xfnv8<0) {
	        xfnv8 = 0;
	    }
	    $("span.tb15").text(" "+xfnv8+" ");
	}
	if($(this).attr("class")=="31") {
	    xhnv8 = xhnv8 + 1;
	    $("span.tb16").text(" "+xhnv8+" ");
	}
	else if($(this).attr("class")=="32") {
	    xhnv8 = xhnv8 - 1;
	    if(xhnv8<0) {
	        xhnv8 = 0;
	    }
	    $("span.tb16").text(" "+xhnv8+" ");
	}
//End of 4th veg

cost2 = (xfnv5*parseInt($(".cost9").html())) + (xhnv5*parseInt($(".cost10").html()))
	 + (xfnv6*parseInt($(".cost11").html())) + (xhnv6*parseInt($(".cost12").html()))
	 + (xfnv7*parseInt($(".cost13").html())) + (xhnv7*parseInt($(".cost14").html()))
	 + (xfnv8*parseInt($(".cost15").html())) + (xhnv8*parseInt($(".cost16").html()))
	 ;
	 alert(cost2);
});



$(".menu-item-details3 button").click(function () {
//***********************
	if($(this).attr("class")=="33") {
	    xfnv9 = xfnv9 + 1;
	    $("span.tb17").text(" "+xfnv9+" ");
	}
	else if($(this).attr("class")=="34") {
	    xfnv9 = xfnv9 - 1;
	    if(xfnv9<0) {
	        xfnv9 = 0;
	    }
	    $("span.tb17").text(" "+xfnv9+" ");
	}
	if($(this).attr("class")=="35") {
	    xhnv9 = xhnv9 + 1;
	    $("span.tb18").text(" "+xhnv9+" ");
	}
	else if($(this).attr("class")=="36") {
	    xhnv9 = xhnv9 - 1;
	    if(xhnv9<0) {
	        xhnv9 = 0;
	    }
	    $("span.tb18").text(" "+xhnv9+" ");
	}
//End of 1st fast-food	

//***********************
	if($(this).attr("class")=="37") {
	    xfnv10 = xfnv10 + 1;
	    $("span.tb19").text(" "+xfnv10+" ");
	}
	else if($(this).attr("class")=="38") {
	    xfnv10 = xfnv10 - 1;
	    if(xfnv10<0) {
	        xfnv10 = 0;
	    }
	    $("span.tb19").text(" "+xfnv10+" ");
	}
	if($(this).attr("class")=="39") {
	    xhnv10 = xhnv10 + 1;
	    $("span.tb20").text(" "+xhnv10+" ");
	}
	else if($(this).attr("class")=="40") {
	    xhnv10 = xhnv10 - 1;
	    if(xhnv10<0) {
	        xhnv10 = 0;
	    }
	    $("span.tb20").text(" "+xhnv10+" ");
	}
//End of 2nd fast-food	

//***********************
	if($(this).attr("class")=="41") {
	    xfnv11 = xfnv11 + 1;
	    $("span.tb21").text(" "+xfnv11+" ");
	}
	else if($(this).attr("class")=="42") {
	    xfnv11 = xfnv11 - 1;
	    if(xfnv11<0) {
	        xfnv11 = 0;
	    }
	    $("span.tb21").text(" "+xfnv11+" ");
	}
	if($(this).attr("class")=="43") {
	    xhnv11 = xhnv11 + 1;
	    $("span.tb22").text(" "+xhnv11+" ");
	}
	else if($(this).attr("class")=="44") {
	    xhnv11 = xhnv11 - 1;
	    if(xhnv11<0) {
	        xhnv11 = 0;
	    }
	    $("span.tb22").text(" "+xhnv11+" ");
	}
//End of 3rd fast-food	

//***********************
	if($(this).attr("class")=="45") {
	    xfnv12 = xfnv12 + 1;
	    $("span.tb23").text(" "+xfnv12+" ");
	}
	else if($(this).attr("class")=="46") {
	    xfnv12 = xfnv12 - 1;
	    if(xfnv12<0) {
	        xfnv12 = 0;
	    }
	    $("span.tb23").text(" "+xfnv12+" ");
	}
	if($(this).attr("class")=="47") {
	    xhnv12 = xhnv12 + 1;
	    $("span.tb24").text(" "+xhnv12+" ");
	}
	else if($(this).attr("class")=="48") {
	    xhnv12 = xhnv12 - 1;
	    if(xhnv12<0) {
	        xhnv12 = 0;
	    }
	    $("span.tb24").text(" "+xhnv12+" ");
	}
//End of 4th fast-food	

cost3 = (xfnv9*parseInt($(".cost17").html())) + (xhnv9*parseInt($(".cost18").html()))
	 + (xfnv10*parseInt($(".cost19").html())) + (xhnv10*parseInt($(".cost20").html()))
	 + (xfnv11*parseInt($(".cost21").html())) + (xhnv11*parseInt($(".cost22").html()))
	 + (xfnv12*parseInt($(".cost23").html())) + (xhnv12*parseInt($(".cost24").html()))
	 ;
	 alert(cost3);
});


$(".menu-item-details4 button").click(function () {
//***********************
	if($(this).attr("class")=="49") {
	    xfnv13 = xfnv13 + 1;
	    $("span.tb25").text(" "+xfnv13+" ");
	}
	else if($(this).attr("class")=="50") {
	    xfnv13 = xfnv13 - 1;
	    if(xfnv13<0) {
	        xfnv13 = 0;
	    }
	    $("span.tb25").text(" "+xfnv13+" ");
	}
	if($(this).attr("class")=="51") {
	    xhnv13 = xhnv13 + 1;
	    $("span.tb26").text(" "+xhnv13+" ");
	}
	else if($(this).attr("class")=="52") {
	    xhnv13 = xhnv13 - 1;
	    if(xhnv13<0) {
	        xhnv13 = 0;
	    }
	    $("span.tb26").text(" "+xhnv13+" ");
	}
//End of 1st beverage	

//***********************
	if($(this).attr("class")=="53") {
	    xfnv14 = xfnv14 + 1;
	    $("span.tb27").text(" "+xfnv14+" ");
	}
	else if($(this).attr("class")=="54") {
	    xfnv14 = xfnv14 - 1;
	    if(xfnv14<0) {
	        xfnv14 = 0;
	    }
	    $("span.tb27").text(" "+xfnv14+" ");
	}
	if($(this).attr("class")=="55") {
	    xhnv14 = xhnv14 + 1;
	    $("span.tb28").text(" "+xhnv14+" ");
	}
	else if($(this).attr("class")=="56") {
	    xhnv14 = xhnv14 - 1;
	    if(xhnv14<0) {
	        xhnv14 = 0;
	    }
	    $("span.tb28").text(" "+xhnv14+" ");
	}
//End of 2nd beverage	

//***********************
	if($(this).attr("class")=="57") {
	    xfnv15 = xfnv15 + 1;
	    $("span.tb29").text(" "+xfnv15+" ");
	}
	else if($(this).attr("class")=="58") {
	    xfnv15 = xfnv15 - 1;
	    if(xfnv15<0) {
	        xfnv15 = 0;
	    }
	    $("span.tb29").text(" "+xfnv15+" ");
	}
	if($(this).attr("class")=="59") {
	    xhnv15 = xhnv15 + 1;
	    $("span.tb30").text(" "+xhnv15+" ");
	}
	else if($(this).attr("class")=="60") {
	    xhnv15 = xhnv15 - 1;
	    if(xhnv15<0) {
	        xhnv15 = 0;
	    }
	    $("span.tb30").text(" "+xhnv15+" ");
	}
//End of 3rd beverage	

//***********************
	if($(this).attr("class")=="61") {
	    xfnv16 = xfnv16 + 1;
	    $("span.tb31").text(" "+xfnv16+" ");
	}
	else if($(this).attr("class")=="62") {
	    xfnv16 = xfnv16 - 1;
	    if(xfnv16<0) {
	        xfnv16 = 0;
	    }
	    $("span.tb31").text(" "+xfnv16+" ");
	}
	if($(this).attr("class")=="63") {
	    xhnv16 = xhnv16 + 1;
	    $("span.tb32").text(" "+xhnv16+" ");
	}
	else if($(this).attr("class")=="64") {
	    xhnv16 = xhnv16 - 1;
	    if(xhnv16<0) {
	        xhnv16 = 0;
	    }
	    $("span.tb32").text(" "+xhnv16+" ");
	}
//End of 4th beverage	

cost4 = (xfnv13*parseInt($(".cost25").html())) + (xhnv13*parseInt($(".cost26").html()))
	 + (xfnv14*parseInt($(".cost27").html())) + (xhnv14*parseInt($(".cost28").html()))
	 + (xfnv15*parseInt($(".cost29").html())) + (xhnv15*parseInt($(".cost30").html()))
	 + (xfnv16*parseInt($(".cost31").html())) + (xhnv16*parseInt($(".cost32").html()))
	 ;
	 alert(cost4);
});


$(".menu-item-details5 button").click(function () {
//***********************
	if($(this).attr("class")=="65") {
	    xfnv17 = xfnv17 + 1;
	    $("span.tb33").text(" "+xfnv17+" ");
	}
	else if($(this).attr("class")=="66") {
	    xfnv17 = xfnv17 - 1;
	    if(xfnv17<0) {
	        xfnv17 = 0;
	    }
	    $("span.tb33").text(" "+xfnv17+" ");
	}
//End of 1st roti	

//***********************
	if($(this).attr("class")=="67") {
	    xfnv18 = xfnv18 + 1;
	    $("span.tb34").text(" "+xfnv18+" ");
	}
	else if($(this).attr("class")=="68") {
	    xfnv18 = xfnv18 - 1;
	    if(xfnv18<0) {
	        xfnv18 = 0;
	    }
	    $("span.tb34").text(" "+xfnv18+" ");
	}
//End of 2nd roti	

//***********************
	if($(this).attr("class")=="69") {
	    xfnv19 = xfnv19 + 1;
	    $("span.tb35").text(" "+xfnv19+" ");
	}
	else if($(this).attr("class")=="70") {
	    xfnv19 = xfnv19 - 1;
	    if(xfnv19<0) {
	        xfnv19 = 0;
	    }
	    $("span.tb35").text(" "+xfnv19+" ");
	}
//End of 3rd roti	

//***********************
	if($(this).attr("class")=="71") {
	    xfnv20 = xfnv20 + 1;
	    $("span.tb35").text(" "+xfnv19+" ");
	}
	else if($(this).attr("class")=="72") {
	    xfnv20 = xfnv20 - 1;
	    if(xfnv20<0) {
	        xfnv20 = 0;
	    }
	    $("span.tb36").text(" "+xfnv20+" ");
	}
//End of 4th roti

cost5 = (xfnv17*parseInt($(".cost33").html()))
	 + (xfnv18*parseInt($(".cost34").html()))
	 + (xfnv19*parseInt($(".cost35").html()))
	 + (xfnv20*parseInt($(".cost36").html()))
	 ;
	 alert(cost5);
});


$(".menu-item-details6 button").click(function () {
//***********************
	if($(this).attr("class")=="73") {
	    xfnv21 = xfnv21 + 1;
	    $("span.tb37").text(" "+xfnv21+" ");
	}
	else if($(this).attr("class")=="74") {
	    xfnv21 = xfnv21 - 1;
	    if(xfnv21<0) {
	        xfnv21 = 0;
	    }
	    $("span.tb37").text(" "+xfnv21+" ");
	}
	if($(this).attr("class")=="75") {
	    xhnv21 = xhnv21 + 1;
	    $("span.tb38").text(" "+xhnv21+" ");
	}
	else if($(this).attr("class")=="76") {
	    xhnv21 = xhnv21 - 1;
	    if(xhnv21<0) {
	        xhnv21 = 0;
	    }
	    $("span.tb38").text(" "+xhnv21+" ");
	}
//End of 1st rice	

//***********************
	if($(this).attr("class")=="77") {
	    xfnv22 = xfnv22 + 1;
	    $("span.tb39").text(" "+xfnv22+" ");
	}
	else if($(this).attr("class")=="78") {
	    xfnv22 = xfnv22 - 1;
	    if(xfnv22<0) {
	        xfnv22 = 0;
	    }
	    $("span.tb39").text(" "+xfnv22+" ");
	}
	if($(this).attr("class")=="79") {
	    xhnv22 = xhnv22 + 1;
	    $("span.tb40").text(" "+xhnv22+" ");
	}
	else if($(this).attr("class")=="80") {
	    xhnv22 = xhnv22 - 1;
	    if(xhnv22<0) {
	        xhnv22 = 0;
	    }
	    $("span.tb40").text(" "+xhnv22+" ");
	}
//End of 2nd rice

//***********************
	if($(this).attr("class")=="81") {
	    xfnv23 = xfnv23 + 1;
	    $("span.tb41").text(" "+xfnv23+" ");
	}
	else if($(this).attr("class")=="82") {
	    xfnv23 = xfnv23 - 1;
	    if(xfnv23<0) {
	        xfnv23 = 0;
	    }
	    $("span.tb41").text(" "+xfnv23+" ");
	}
	if($(this).attr("class")=="83") {
	    xhnv23 = xhnv23 + 1;
	    $("span.tb42").text(" "+xhnv23+" ");
	}
	else if($(this).attr("class")=="84") {
	    xhnv23 = xhnv23 - 1;
	    if(xhnv23<0) {
	        xhnv23 = 0;
	    }
	    $("span.tb42").text(" "+xhnv23+" ");
	}
//End of 3rd rice

//***********************
	if($(this).attr("class")=="85") {
	    xfnv24 = xfnv24 + 1;
	    $("span.tb43").text(" "+xfnv24+" ");
	}
	else if($(this).attr("class")=="86") {
	    xfnv24 = xfnv24 - 1;
	    if(xfnv24<0) {
	        xfnv24 = 0;
	    }
	    $("span.tb43").text(" "+xfnv24+" ");
	}
	if($(this).attr("class")=="87") {
	    xhnv24 = xhnv24 + 1;
	    $("span.tb44").text(" "+xhnv24+" ");
	}
	else if($(this).attr("class")=="88") {
	    xhnv24 = xhnv24 - 1;
	    if(xhnv24<0) {
	        xhnv24 = 0;
	    }
	    $("span.tb44").text(" "+xhnv24+" ");
	}
//End of 4th rice

cost6 = (xfnv21*parseInt($(".cost37").html())) + (xhnv21*parseInt($(".cost38").html()))
	 + (xfnv22*parseInt($(".cost39").html())) + (xhnv22*parseInt($(".cost40").html()))
	 + (xfnv23*parseInt($(".cost41").html())) + (xhnv23*parseInt($(".cost42").html()))
	 + (xfnv24*parseInt($(".cost43").html())) + (xhnv24*parseInt($(".cost44").html()))
	 ;
	 alert(cost6);
});

$(".menu-item-details7 button").click(function () {
//***********************
	if($(this).attr("class")=="89") {
	    xfnv25 = xfnv25 + 1;
	    $("span.tb45").text(" "+xfnv25+" ");
	}
	else if($(this).attr("class")=="90") {
	    xfnv25 = xfnv25 - 1;
	    if(xfnv25<0) {
	        xfnv25 = 0;
	    }
	    $("span.tb45").text(" "+xfnv25+" ");
	}
//End of 1st sweet	

//***********************
	if($(this).attr("class")=="91") {
	    xfnv26 = xfnv26 + 1;
	    $("span.tb46").text(" "+xfnv26+" ");
	}
	else if($(this).attr("class")=="92") {
	    xfnv26 = xfnv26 - 1;
	    if(xfnv26<0) {
	        xfnv26 = 0;
	    }
	    $("span.tb46").text(" "+xfnv26+" ");
	}
//End of 2nd sweet

//***********************
	if($(this).attr("class")=="93") {
	    xfnv27 = xfnv27 + 1;
	    $("span.tb47").text(" "+xfnv27+" ");
	}
	else if($(this).attr("class")=="94") {
	    xfnv27 = xfnv27 - 1;
	    if(xfnv27<0) {
	        xfnv27 = 0;
	    }
	    $("span.tb47").text(" "+xfnv27+" ");
	}
//End of 3rd sweet

//***********************
	if($(this).attr("class")=="95") {
	    xfnv28 = xfnv28 + 1;
	    $("span.tb48").text(" "+xfnv28+" ");
	}
	else if($(this).attr("class")=="96") {
	    xfnv28 = xfnv28 - 1;
	    if(xfnv28<0) {
	        xfnv28 = 0;
	    }
	    $("span.tb48").text(" "+xfnv28+" ");
	}
//End of 4th sweet

cost7 = (xfnv25*parseInt($(".cost45").html()))
	 + (xfnv26*parseInt($(".cost46").html()))
	 + (xfnv27*parseInt($(".cost47").html()))
	 + (xfnv28*parseInt($(".cost48").html()))
	 ;
	 alert(cost7);
});

$(".menu-item-details8 button").click(function () {
//***********************
	if($(this).attr("class")=="97") {
	    xfnv29 = xfnv29 + 1;
	    $("span.tb49").text(" "+xfnv29+" ");
	}
	else if($(this).attr("class")=="98") {
	    xfnv29 = xfnv29 - 1;
	    if(xfnv29<0) {
	        xfnv29 = 0;
	    }
	    $("span.tb49").text(" "+xfnv29+" ");
	}
//End of 1st south-indian	

//***********************
	if($(this).attr("class")=="99") {
	    xfnv30 = xfnv30 + 1;
	    $("span.tb50").text(" "+xfnv30+" ");
	}
	else if($(this).attr("class")=="100") {
	    xfnv30 = xfnv30 - 1;
	    if(xfnv30<0) {
	        xfnv30 = 0;
	    }
	    $("span.tb50").text(" "+xfnv30+" ");
	}
//End of 2nd south-indian

//***********************
	if($(this).attr("class")=="101") {
	    xfnv31 = xfnv31 + 1;
	    $("span.tb51").text(" "+xfnv31+" ");
	}
	else if($(this).attr("class")=="102") {
	    xfnv31 = xfnv31 - 1;
	    if(xfnv31<0) {
	        xfnv31 = 0;
	    }
	    $("span.tb51").text(" "+xfnv31+" ");
	}
//End of 3rd south-indian

//***********************
	if($(this).attr("class")=="103") {
	    xfnv32 = xfnv32 + 1;
	    $("span.tb52").text(" "+xfnv32+" ");
	}
	else if($(this).attr("class")=="104") {
	    xfnv32 = xfnv32 - 1;
	    if(xfnv32<0) {
	        xfnv32 = 0;
	    }
	    $("span.tb52").text(" "+xfnv32+" ");
	}
//End of 4th south-indian

cost8 = (xfnv29*parseInt($(".cost49").html()))
	 + (xfnv30*parseInt($(".cost50").html()))
	 + (xfnv31*parseInt($(".cost51").html()))
	 + (xfnv32*parseInt($(".cost52").html()))
	 ;
	 alert(cost8);
});

var cost = 0;
cost = cost1 + cost2 + cost3 + cost4 + cost5 + cost6 + cost7 + cost8;
},{"fs":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbGliL19lbXB0eS5qcyIsImpzL3NjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIiLCJcclxuXHJcbnZhciB4Zm52MSA9IDA7XHJcbnZhciB4aG52MSA9IDA7XHJcbnZhciB4Zm52MiA9IDA7XHJcbnZhciB4aG52MiA9IDA7XHJcbnZhciB4Zm52MyA9IDA7XHJcbnZhciB4aG52MyA9IDA7XHJcbnZhciB4Zm52NCA9IDA7XHJcbnZhciB4aG52NCA9IDA7XHJcbnZhciB4Zm52NSA9IDA7XHJcbnZhciB4aG52NSA9IDA7XHJcbnZhciB4Zm52NiA9IDA7XHJcbnZhciB4aG52NiA9IDA7XHJcbnZhciB4Zm52NyA9IDA7XHJcbnZhciB4aG52NyA9IDA7XHJcbnZhciB4Zm52OCA9IDA7XHJcbnZhciB4aG52OCA9IDA7XHJcbnZhciB4Zm52OSA9IDA7XHJcbnZhciB4aG52OSA9IDA7XHJcbnZhciB4Zm52MTAgPSAwO1xyXG52YXIgeGhudjEwID0gMDtcclxudmFyIHhmbnYxMSA9IDA7XHJcbnZhciB4aG52MTEgPSAwO1xyXG52YXIgeGZudjEyID0gMDtcclxudmFyIHhobnYxMiA9IDA7XHJcbnZhciB4Zm52MTMgPSAwO1xyXG52YXIgeGhudjEzID0gMDtcclxudmFyIHhmbnYxNCA9IDA7XHJcbnZhciB4aG52MTQgPSAwO1xyXG52YXIgeGZudjE1ID0gMDtcclxudmFyIHhobnYxNSA9IDA7XHJcbnZhciB4Zm52MTYgPSAwO1xyXG52YXIgeGhudjE2ID0gMDtcclxudmFyIHhmbnYxNyA9IDA7XHJcbnZhciB4Zm52MTggPSAwO1xyXG52YXIgeGZudjE5ID0gMDtcclxudmFyIHhmbnYyMCA9IDA7XHJcbnZhciB4Zm52MjEgPSAwO1xyXG52YXIgeGhudjIxID0gMDtcclxudmFyIHhmbnYyMiA9IDA7XHJcbnZhciB4aG52MjIgPSAwO1xyXG52YXIgeGZudjIzID0gMDtcclxudmFyIHhobnYyMyA9IDA7XHJcbnZhciB4Zm52MjQgPSAwO1xyXG52YXIgeGhudjI0ID0gMDtcclxudmFyIHhmbnYyNSA9IDA7XHJcbnZhciB4Zm52MjYgPSAwO1xyXG52YXIgeGZudjI3ID0gMDtcclxudmFyIHhmbnYyOCA9IDA7XHJcbnZhciB4Zm52MjkgPSAwO1xyXG52YXIgeGZudjMwID0gMDtcclxudmFyIHhmbnYzMSA9IDA7XHJcbnZhciB4Zm52MzIgPSAwO1xyXG5cclxuXHJcbnZhciBjb3N0MSA9IDA7XHJcbnZhciBjb3N0MiA9IDA7XHJcbnZhciBjb3N0MyA9IDA7XHJcbnZhciBjb3N0NCA9IDA7XHJcbnZhciBjb3N0NSA9IDA7XHJcbnZhciBjb3N0NiA9IDA7XHJcbnZhciBjb3N0NyA9IDA7XHJcbnZhciBjb3N0OCA9IDA7XHJcblxyXG4kKFwic3Bhbi50YjFcIikudGV4dChcIiBcIit4Zm52MStcIiBcIik7XHJcbiQoXCJzcGFuLnRiMlwiKS50ZXh0KFwiIFwiK3hobnYxK1wiIFwiKTtcclxuJChcInNwYW4udGIzXCIpLnRleHQoXCIgXCIreGZudjIrXCIgXCIpO1xyXG4kKFwic3Bhbi50YjRcIikudGV4dChcIiBcIit4aG52MitcIiBcIik7XHJcbiQoXCJzcGFuLnRiNVwiKS50ZXh0KFwiIFwiK3hmbnYzK1wiIFwiKTtcclxuJChcInNwYW4udGI2XCIpLnRleHQoXCIgXCIreGhudjMrXCIgXCIpO1xyXG4kKFwic3Bhbi50YjdcIikudGV4dChcIiBcIit4Zm52NCtcIiBcIik7XHJcbiQoXCJzcGFuLnRiOFwiKS50ZXh0KFwiIFwiK3hobnY0K1wiIFwiKTtcclxuJChcInNwYW4udGI5XCIpLnRleHQoXCIgXCIreGZudjUrXCIgXCIpO1xyXG4kKFwic3Bhbi50YjEwXCIpLnRleHQoXCIgXCIreGhudjUrXCIgXCIpO1xyXG4kKFwic3Bhbi50YjExXCIpLnRleHQoXCIgXCIreGZudjYrXCIgXCIpO1xyXG4kKFwic3Bhbi50YjEyXCIpLnRleHQoXCIgXCIreGhudjYrXCIgXCIpO1xyXG4kKFwic3Bhbi50YjEzXCIpLnRleHQoXCIgXCIreGZudjcrXCIgXCIpO1xyXG4kKFwic3Bhbi50YjE0XCIpLnRleHQoXCIgXCIreGhudjcrXCIgXCIpO1xyXG4kKFwic3Bhbi50YjE1XCIpLnRleHQoXCIgXCIreGZudjgrXCIgXCIpO1xyXG4kKFwic3Bhbi50YjE2XCIpLnRleHQoXCIgXCIreGhudjgrXCIgXCIpO1xyXG4kKFwic3Bhbi50YjE3XCIpLnRleHQoXCIgXCIreGZudjkrXCIgXCIpO1xyXG4kKFwic3Bhbi50YjE4XCIpLnRleHQoXCIgXCIreGhudjkrXCIgXCIpO1xyXG4kKFwic3Bhbi50YjE5XCIpLnRleHQoXCIgXCIreGZudjEwK1wiIFwiKTtcclxuJChcInNwYW4udGIyMFwiKS50ZXh0KFwiIFwiK3hobnYxMCtcIiBcIik7XHJcbiQoXCJzcGFuLnRiMjFcIikudGV4dChcIiBcIit4Zm52MTErXCIgXCIpO1xyXG4kKFwic3Bhbi50YjIyXCIpLnRleHQoXCIgXCIreGhudjExK1wiIFwiKTtcclxuJChcInNwYW4udGIyM1wiKS50ZXh0KFwiIFwiK3hmbnYxMitcIiBcIik7XHJcbiQoXCJzcGFuLnRiMjRcIikudGV4dChcIiBcIit4aG52MTIrXCIgXCIpO1xyXG4kKFwic3Bhbi50YjI1XCIpLnRleHQoXCIgXCIreGZudjEzK1wiIFwiKTtcclxuJChcInNwYW4udGIyNlwiKS50ZXh0KFwiIFwiK3hobnYxMytcIiBcIik7XHJcbiQoXCJzcGFuLnRiMjdcIikudGV4dChcIiBcIit4Zm52MTQrXCIgXCIpO1xyXG4kKFwic3Bhbi50YjI4XCIpLnRleHQoXCIgXCIreGhudjE0K1wiIFwiKTtcclxuJChcInNwYW4udGIyOVwiKS50ZXh0KFwiIFwiK3hmbnYxNStcIiBcIik7XHJcbiQoXCJzcGFuLnRiMzBcIikudGV4dChcIiBcIit4aG52MTUrXCIgXCIpO1xyXG4kKFwic3Bhbi50YjMxXCIpLnRleHQoXCIgXCIreGZudjE2K1wiIFwiKTtcclxuJChcInNwYW4udGIzMlwiKS50ZXh0KFwiIFwiK3hobnYxNitcIiBcIik7XHJcbiQoXCJzcGFuLnRiMzNcIikudGV4dChcIiBcIit4Zm52MTcrXCIgXCIpO1xyXG4kKFwic3Bhbi50YjM0XCIpLnRleHQoXCIgXCIreGZudjE4K1wiIFwiKTtcclxuJChcInNwYW4udGIzNVwiKS50ZXh0KFwiIFwiK3hmbnYxOStcIiBcIik7XHJcbiQoXCJzcGFuLnRiMzZcIikudGV4dChcIiBcIit4Zm52MjArXCIgXCIpO1xyXG4kKFwic3Bhbi50YjM3XCIpLnRleHQoXCIgXCIreGZudjIxK1wiIFwiKTtcclxuJChcInNwYW4udGIzOFwiKS50ZXh0KFwiIFwiK3hobnYyMStcIiBcIik7XHJcbiQoXCJzcGFuLnRiMzlcIikudGV4dChcIiBcIit4Zm52MjIrXCIgXCIpO1xyXG4kKFwic3Bhbi50YjQwXCIpLnRleHQoXCIgXCIreGhudjIyK1wiIFwiKTtcclxuJChcInNwYW4udGI0MVwiKS50ZXh0KFwiIFwiK3hmbnYyMytcIiBcIik7XHJcbiQoXCJzcGFuLnRiNDJcIikudGV4dChcIiBcIit4aG52MjMrXCIgXCIpO1xyXG4kKFwic3Bhbi50YjQzXCIpLnRleHQoXCIgXCIreGZudjI0K1wiIFwiKTtcclxuJChcInNwYW4udGI0NFwiKS50ZXh0KFwiIFwiK3hobnYyNCtcIiBcIik7XHJcbiQoXCJzcGFuLnRiNDVcIikudGV4dChcIiBcIit4Zm52MjUrXCIgXCIpO1xyXG4kKFwic3Bhbi50YjQ2XCIpLnRleHQoXCIgXCIreGZudjI2K1wiIFwiKTtcclxuJChcInNwYW4udGI0N1wiKS50ZXh0KFwiIFwiK3hmbnYyNytcIiBcIik7XHJcbiQoXCJzcGFuLnRiNDhcIikudGV4dChcIiBcIit4Zm52MjgrXCIgXCIpO1xyXG4kKFwic3Bhbi50YjQ5XCIpLnRleHQoXCIgXCIreGZudjI5K1wiIFwiKTtcclxuJChcInNwYW4udGI1MFwiKS50ZXh0KFwiIFwiK3hmbnYzMCtcIiBcIik7XHJcbiQoXCJzcGFuLnRiNTFcIikudGV4dChcIiBcIit4Zm52MzErXCIgXCIpO1xyXG4kKFwic3Bhbi50YjUyXCIpLnRleHQoXCIgXCIreGZudjMyK1wiIFwiKTtcclxuXHJcblxyXG5cclxuJChcIi5tZW51LWl0ZW0tZGV0YWlsczEgYnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuLy8qKioqKioqKioqKioqKioqKioqKioqIFx0XHJcblx0aWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiMVwiKSB7XHJcblx0ICAgIHhmbnYxID0geGZudjEgKyAxO1xyXG5cdCAgICAkKFwic3Bhbi50YjFcIikudGV4dChcIiBcIit4Zm52MStcIiBcIik7XHJcblx0fVxyXG5cdGVsc2UgaWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiMlwiKSB7XHJcblx0ICAgIHhmbnYxID0geGZudjEgLSAxO1xyXG5cdCAgICBpZih4Zm52MTwwKSB7XHJcblx0ICAgICAgICB4Zm52MSA9IDA7XHJcblx0ICAgIH1cclxuXHQgICAgJChcInNwYW4udGIxXCIpLnRleHQoXCIgXCIreGZudjErXCIgXCIpO1xyXG5cdH1cclxuXHRpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCIzXCIpIHtcclxuXHQgICAgeGhudjEgPSB4aG52MSArIDE7XHJcblx0ICAgICQoXCJzcGFuLnRiMlwiKS50ZXh0KFwiIFwiK3hobnYxK1wiIFwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCI0XCIpIHtcclxuXHQgICAgeGhudjEgPSB4aG52MSAtIDE7XHJcblx0ICAgIGlmKHhobnYxPDApIHtcclxuXHQgICAgICAgIHhobnYxID0gMDtcclxuXHQgICAgfVxyXG5cdCAgICAkKFwic3Bhbi50YjJcIikudGV4dChcIiBcIit4aG52MStcIiBcIik7XHJcblx0fVxyXG5cdGNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xyXG5cdGZzLndyaXRlRmlsZShcIndvcmRzLnR4dFwiLHhmbnYxLCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgXHRcdGlmIChlcnIpIHJldHVybiBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIFx0XHRjb25zb2xlLmxvZygnSGVsbG8gV29ybGQgPiBoZWxsb3dvcmxkLnR4dCcpO1xyXG5cdH0pO1xyXG4vL0VORCBPZiAxc3Qgbm9uLXZlZyBcclxuXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCI1XCIpIHtcclxuXHQgICAgeGZudjIgPSB4Zm52MiArIDE7XHJcblx0ICAgICQoXCJzcGFuLnRiM1wiKS50ZXh0KFwiIFwiK3hmbnYyK1wiIFwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCI2XCIpIHtcclxuXHQgICAgeGZudjIgPSB4Zm52MiAtIDE7XHJcblx0ICAgIGlmKHhmbnYyPDApIHtcclxuXHQgICAgICAgIHhmbnYyID0gMDtcclxuXHQgICAgfVxyXG5cdCAgICAkKFwic3Bhbi50YjNcIikudGV4dChcIiBcIit4Zm52MitcIiBcIik7XHJcblx0fVxyXG5cdGlmKCQodGhpcykuYXR0cihcImNsYXNzXCIpPT1cIjdcIikge1xyXG5cdCAgICB4aG52MiA9IHhobnYyICsgMTtcclxuXHQgICAgJChcInNwYW4udGI0XCIpLnRleHQoXCIgXCIreGhudjIrXCIgXCIpO1xyXG5cdH1cclxuXHRlbHNlIGlmKCQodGhpcykuYXR0cihcImNsYXNzXCIpPT1cIjhcIikge1xyXG5cdCAgICB4aG52MiA9IHhobnYyIC0gMTtcclxuXHQgICAgaWYoeGhudjI8MCkge1xyXG5cdCAgICAgICAgeGhudjIgPSAwO1xyXG5cdCAgICB9XHJcblx0ICAgICQoXCJzcGFuLnRiNFwiKS50ZXh0KFwiIFwiK3hobnYyK1wiIFwiKTtcclxuXHR9XHJcbi8vRW5kIG9mIDJuZCBub24tdmVnXHJcblxyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqXHJcblx0aWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiOVwiKSB7XHJcblx0ICAgIHhmbnYzID0geGZudjMgKyAxO1xyXG5cdCAgICAkKFwic3Bhbi50YjVcIikudGV4dChcIiBcIit4Zm52MytcIiBcIik7XHJcblx0fVxyXG5cdGVsc2UgaWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiMTBcIikge1xyXG5cdCAgICB4Zm52MyA9IHhmbnYzIC0gMTtcclxuXHQgICAgaWYoeGZudjM8MCkge1xyXG5cdCAgICAgICAgeGZudjMgPSAwO1xyXG5cdCAgICB9XHJcblx0ICAgICQoXCJzcGFuLnRiNVwiKS50ZXh0KFwiIFwiK3hmbnYzK1wiIFwiKTtcclxuXHR9XHJcblx0aWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiMTFcIikge1xyXG5cdCAgICB4aG52MyA9IHhobnYzICsgMTtcclxuXHQgICAgJChcInNwYW4udGI2XCIpLnRleHQoXCIgXCIreGhudjMrXCIgXCIpO1xyXG5cdH1cclxuXHRlbHNlIGlmKCQodGhpcykuYXR0cihcImNsYXNzXCIpPT1cIjEyXCIpIHtcclxuXHQgICAgeGhudjMgPSB4aG52MyAtIDE7XHJcblx0ICAgIGlmKHhobnYzPDApIHtcclxuXHQgICAgICAgIHhobnYzID0gMDtcclxuXHQgICAgfVxyXG5cdCAgICAkKFwic3Bhbi50YjZcIikudGV4dChcIiBcIit4aG52MytcIiBcIik7XHJcblx0fVxyXG4vL0VuZCBvZiAzcmQgbm9uLXZlZ1xyXG5cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdGlmKCQodGhpcykuYXR0cihcImNsYXNzXCIpPT1cIjEzXCIpIHtcclxuXHQgICAgeGZudjQgPSB4Zm52NCArIDE7XHJcblx0ICAgICQoXCJzcGFuLnRiN1wiKS50ZXh0KFwiIFwiK3hmbnY0K1wiIFwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCIxNFwiKSB7XHJcblx0ICAgIHhmbnY0ID0geGZudjQgLSAxO1xyXG5cdCAgICBpZih4Zm52NDwwKSB7XHJcblx0ICAgICAgICB4Zm52NCA9IDA7XHJcblx0ICAgIH1cclxuXHQgICAgJChcInNwYW4udGI3XCIpLnRleHQoXCIgXCIreGZudjQrXCIgXCIpO1xyXG5cdH1cclxuXHRpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCIxNVwiKSB7XHJcblx0ICAgIHhobnY0ID0geGhudjQgKyAxO1xyXG5cdCAgICAkKFwic3Bhbi50YjhcIikudGV4dChcIiBcIit4aG52NCtcIiBcIik7XHJcblx0fVxyXG5cdGVsc2UgaWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiMTZcIikge1xyXG5cdCAgICB4aG52NCA9IHhobnY0IC0gMTtcclxuXHQgICAgaWYoeGhudjQ8MCkge1xyXG5cdCAgICAgICAgeGhudjQgPSAwO1xyXG5cdCAgICB9XHJcblx0ICAgICQoXCJzcGFuLnRiOFwiKS50ZXh0KFwiIFwiK3hobnY0K1wiIFwiKTtcclxuXHR9XHJcbi8vRW5kIG9mIDR0aCBub24tdmVnXHJcblxyXG5cclxuY29zdDEgPSAoeGZudjEqcGFyc2VJbnQoJChcIi5jb3N0MVwiKS5odG1sKCkpKSArICh4aG52MSpwYXJzZUludCgkKFwiLmNvc3QyXCIpLmh0bWwoKSkpIFxyXG5cdCArICh4Zm52MipwYXJzZUludCgkKFwiLmNvc3QzXCIpLmh0bWwoKSkpICsgKHhobnYyKnBhcnNlSW50KCQoXCIuY29zdDRcIikuaHRtbCgpKSlcclxuXHQgKyAoeGZudjMqcGFyc2VJbnQoJChcIi5jb3N0NVwiKS5odG1sKCkpKSArICh4aG52MypwYXJzZUludCgkKFwiLmNvc3Q2XCIpLmh0bWwoKSkpXHJcblx0ICsgKHhmbnY0KnBhcnNlSW50KCQoXCIuY29zdDdcIikuaHRtbCgpKSkgKyAoeGhudjQqcGFyc2VJbnQoJChcIi5jb3N0OFwiKS5odG1sKCkpKVxyXG5cdCA7XHJcblx0IGFsZXJ0KGNvc3QxKTtcclxufSk7XHJcblxyXG5cclxuXHJcbiQoXCIubWVudS1pdGVtLWRldGFpbHMyIGJ1dHRvblwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbi8vKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCIxN1wiKSB7XHJcblx0ICAgIHhmbnY1ID0geGZudjUgKyAxO1xyXG5cdCAgICAkKFwic3Bhbi50YjlcIikudGV4dChcIiBcIit4Zm52NStcIiBcIik7XHJcblx0fVxyXG5cdGVsc2UgaWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiMThcIikge1xyXG5cdCAgICB4Zm52NSA9IHhmbnY1IC0gMTtcclxuXHQgICAgaWYoeGZudjU8MCkge1xyXG5cdCAgICAgICAgeGZudjUgPSAwO1xyXG5cdCAgICB9XHJcblx0ICAgICQoXCJzcGFuLnRiOVwiKS50ZXh0KFwiIFwiK3hmbnY1K1wiIFwiKTtcclxuXHR9XHJcblx0aWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiMTlcIikge1xyXG5cdCAgICB4aG52NSA9IHhobnY1ICsgMTtcclxuXHQgICAgJChcInNwYW4udGIxMFwiKS50ZXh0KFwiIFwiK3hobnY1K1wiIFwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCIyMFwiKSB7XHJcblx0ICAgIHhobnY1ID0geGhudjUgLSAxO1xyXG5cdCAgICBpZih4aG52NTwwKSB7XHJcblx0ICAgICAgICB4aG52NSA9IDA7XHJcblx0ICAgIH1cclxuXHQgICAgJChcInNwYW4udGIxMFwiKS50ZXh0KFwiIFwiK3hobnY1K1wiIFwiKTtcclxuXHR9XHJcbi8vRW5kIG9mIDFzdCB2ZWdcclxuXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCIyMVwiKSB7XHJcblx0ICAgIHhmbnY2ID0geGZudjYgKyAxO1xyXG5cdCAgICAkKFwic3Bhbi50YjExXCIpLnRleHQoXCIgXCIreGZudjYrXCIgXCIpO1xyXG5cdH1cclxuXHRlbHNlIGlmKCQodGhpcykuYXR0cihcImNsYXNzXCIpPT1cIjIyXCIpIHtcclxuXHQgICAgeGZudjYgPSB4Zm52NiAtIDE7XHJcblx0ICAgIGlmKHhmbnY2PDApIHtcclxuXHQgICAgICAgIHhmbnY2ID0gMDtcclxuXHQgICAgfVxyXG5cdCAgICAkKFwic3Bhbi50YjExXCIpLnRleHQoXCIgXCIreGZudjYrXCIgXCIpO1xyXG5cdH1cclxuXHRpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCIyM1wiKSB7XHJcblx0ICAgIHhobnY2ID0geGhudjYgKyAxO1xyXG5cdCAgICAkKFwic3Bhbi50YjEyXCIpLnRleHQoXCIgXCIreGhudjYrXCIgXCIpO1xyXG5cdH1cclxuXHRlbHNlIGlmKCQodGhpcykuYXR0cihcImNsYXNzXCIpPT1cIjI0XCIpIHtcclxuXHQgICAgeGhudjYgPSB4aG52NiAtIDE7XHJcblx0ICAgIGlmKHhobnY2PDApIHtcclxuXHQgICAgICAgIHhobnY2ID0gMDtcclxuXHQgICAgfVxyXG5cdCAgICAkKFwic3Bhbi50YjEyXCIpLnRleHQoXCIgXCIreGhudjYrXCIgXCIpO1xyXG5cdH1cclxuLy9FbmQgb2YgMm5kIHZlZ1xyXG5cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdGlmKCQodGhpcykuYXR0cihcImNsYXNzXCIpPT1cIjI1XCIpIHtcclxuXHQgICAgeGZudjcgPSB4Zm52NyArIDE7XHJcblx0ICAgICQoXCJzcGFuLnRiMTNcIikudGV4dChcIiBcIit4Zm52NytcIiBcIik7XHJcblx0fVxyXG5cdGVsc2UgaWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiMjZcIikge1xyXG5cdCAgICB4Zm52NyA9IHhmbnY3IC0gMTtcclxuXHQgICAgaWYoeGZudjc8MCkge1xyXG5cdCAgICAgICAgeGZudjcgPSAwO1xyXG5cdCAgICB9XHJcblx0ICAgICQoXCJzcGFuLnRiMTNcIikudGV4dChcIiBcIit4Zm52NytcIiBcIik7XHJcblx0fVxyXG5cdGlmKCQodGhpcykuYXR0cihcImNsYXNzXCIpPT1cIjI3XCIpIHtcclxuXHQgICAgeGhudjcgPSB4aG52NyArIDE7XHJcblx0ICAgICQoXCJzcGFuLnRiMTRcIikudGV4dChcIiBcIit4aG52NytcIiBcIik7XHJcblx0fVxyXG5cdGVsc2UgaWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiMjhcIikge1xyXG5cdCAgICB4aG52NyA9IHhobnY3IC0gMTtcclxuXHQgICAgaWYoeGhudjc8MCkge1xyXG5cdCAgICAgICAgeGhudjcgPSAwO1xyXG5cdCAgICB9XHJcblx0ICAgICQoXCJzcGFuLnRiMTRcIikudGV4dChcIiBcIit4aG52NytcIiBcIik7XHJcblx0fVxyXG4vL0VuZCBvZiAzcmQgdmVnXHJcblxyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqXHJcblx0aWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiMjlcIikge1xyXG5cdCAgICB4Zm52OCA9IHhmbnY4ICsgMTtcclxuXHQgICAgJChcInNwYW4udGIxNVwiKS50ZXh0KFwiIFwiK3hmbnY4K1wiIFwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCIzMFwiKSB7XHJcblx0ICAgIHhmbnY4ID0geGZudjggLSAxO1xyXG5cdCAgICBpZih4Zm52ODwwKSB7XHJcblx0ICAgICAgICB4Zm52OCA9IDA7XHJcblx0ICAgIH1cclxuXHQgICAgJChcInNwYW4udGIxNVwiKS50ZXh0KFwiIFwiK3hmbnY4K1wiIFwiKTtcclxuXHR9XHJcblx0aWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiMzFcIikge1xyXG5cdCAgICB4aG52OCA9IHhobnY4ICsgMTtcclxuXHQgICAgJChcInNwYW4udGIxNlwiKS50ZXh0KFwiIFwiK3hobnY4K1wiIFwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCIzMlwiKSB7XHJcblx0ICAgIHhobnY4ID0geGhudjggLSAxO1xyXG5cdCAgICBpZih4aG52ODwwKSB7XHJcblx0ICAgICAgICB4aG52OCA9IDA7XHJcblx0ICAgIH1cclxuXHQgICAgJChcInNwYW4udGIxNlwiKS50ZXh0KFwiIFwiK3hobnY4K1wiIFwiKTtcclxuXHR9XHJcbi8vRW5kIG9mIDR0aCB2ZWdcclxuXHJcbmNvc3QyID0gKHhmbnY1KnBhcnNlSW50KCQoXCIuY29zdDlcIikuaHRtbCgpKSkgKyAoeGhudjUqcGFyc2VJbnQoJChcIi5jb3N0MTBcIikuaHRtbCgpKSlcclxuXHQgKyAoeGZudjYqcGFyc2VJbnQoJChcIi5jb3N0MTFcIikuaHRtbCgpKSkgKyAoeGhudjYqcGFyc2VJbnQoJChcIi5jb3N0MTJcIikuaHRtbCgpKSlcclxuXHQgKyAoeGZudjcqcGFyc2VJbnQoJChcIi5jb3N0MTNcIikuaHRtbCgpKSkgKyAoeGhudjcqcGFyc2VJbnQoJChcIi5jb3N0MTRcIikuaHRtbCgpKSlcclxuXHQgKyAoeGZudjgqcGFyc2VJbnQoJChcIi5jb3N0MTVcIikuaHRtbCgpKSkgKyAoeGhudjgqcGFyc2VJbnQoJChcIi5jb3N0MTZcIikuaHRtbCgpKSlcclxuXHQgO1xyXG5cdCBhbGVydChjb3N0Mik7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKFwiLm1lbnUtaXRlbS1kZXRhaWxzMyBidXR0b25cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqXHJcblx0aWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiMzNcIikge1xyXG5cdCAgICB4Zm52OSA9IHhmbnY5ICsgMTtcclxuXHQgICAgJChcInNwYW4udGIxN1wiKS50ZXh0KFwiIFwiK3hmbnY5K1wiIFwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCIzNFwiKSB7XHJcblx0ICAgIHhmbnY5ID0geGZudjkgLSAxO1xyXG5cdCAgICBpZih4Zm52OTwwKSB7XHJcblx0ICAgICAgICB4Zm52OSA9IDA7XHJcblx0ICAgIH1cclxuXHQgICAgJChcInNwYW4udGIxN1wiKS50ZXh0KFwiIFwiK3hmbnY5K1wiIFwiKTtcclxuXHR9XHJcblx0aWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiMzVcIikge1xyXG5cdCAgICB4aG52OSA9IHhobnY5ICsgMTtcclxuXHQgICAgJChcInNwYW4udGIxOFwiKS50ZXh0KFwiIFwiK3hobnY5K1wiIFwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCIzNlwiKSB7XHJcblx0ICAgIHhobnY5ID0geGhudjkgLSAxO1xyXG5cdCAgICBpZih4aG52OTwwKSB7XHJcblx0ICAgICAgICB4aG52OSA9IDA7XHJcblx0ICAgIH1cclxuXHQgICAgJChcInNwYW4udGIxOFwiKS50ZXh0KFwiIFwiK3hobnY5K1wiIFwiKTtcclxuXHR9XHJcbi8vRW5kIG9mIDFzdCBmYXN0LWZvb2RcdFxyXG5cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdGlmKCQodGhpcykuYXR0cihcImNsYXNzXCIpPT1cIjM3XCIpIHtcclxuXHQgICAgeGZudjEwID0geGZudjEwICsgMTtcclxuXHQgICAgJChcInNwYW4udGIxOVwiKS50ZXh0KFwiIFwiK3hmbnYxMCtcIiBcIik7XHJcblx0fVxyXG5cdGVsc2UgaWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiMzhcIikge1xyXG5cdCAgICB4Zm52MTAgPSB4Zm52MTAgLSAxO1xyXG5cdCAgICBpZih4Zm52MTA8MCkge1xyXG5cdCAgICAgICAgeGZudjEwID0gMDtcclxuXHQgICAgfVxyXG5cdCAgICAkKFwic3Bhbi50YjE5XCIpLnRleHQoXCIgXCIreGZudjEwK1wiIFwiKTtcclxuXHR9XHJcblx0aWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiMzlcIikge1xyXG5cdCAgICB4aG52MTAgPSB4aG52MTAgKyAxO1xyXG5cdCAgICAkKFwic3Bhbi50YjIwXCIpLnRleHQoXCIgXCIreGhudjEwK1wiIFwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCI0MFwiKSB7XHJcblx0ICAgIHhobnYxMCA9IHhobnYxMCAtIDE7XHJcblx0ICAgIGlmKHhobnYxMDwwKSB7XHJcblx0ICAgICAgICB4aG52MTAgPSAwO1xyXG5cdCAgICB9XHJcblx0ICAgICQoXCJzcGFuLnRiMjBcIikudGV4dChcIiBcIit4aG52MTArXCIgXCIpO1xyXG5cdH1cclxuLy9FbmQgb2YgMm5kIGZhc3QtZm9vZFx0XHJcblxyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqXHJcblx0aWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiNDFcIikge1xyXG5cdCAgICB4Zm52MTEgPSB4Zm52MTEgKyAxO1xyXG5cdCAgICAkKFwic3Bhbi50YjIxXCIpLnRleHQoXCIgXCIreGZudjExK1wiIFwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCI0MlwiKSB7XHJcblx0ICAgIHhmbnYxMSA9IHhmbnYxMSAtIDE7XHJcblx0ICAgIGlmKHhmbnYxMTwwKSB7XHJcblx0ICAgICAgICB4Zm52MTEgPSAwO1xyXG5cdCAgICB9XHJcblx0ICAgICQoXCJzcGFuLnRiMjFcIikudGV4dChcIiBcIit4Zm52MTErXCIgXCIpO1xyXG5cdH1cclxuXHRpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCI0M1wiKSB7XHJcblx0ICAgIHhobnYxMSA9IHhobnYxMSArIDE7XHJcblx0ICAgICQoXCJzcGFuLnRiMjJcIikudGV4dChcIiBcIit4aG52MTErXCIgXCIpO1xyXG5cdH1cclxuXHRlbHNlIGlmKCQodGhpcykuYXR0cihcImNsYXNzXCIpPT1cIjQ0XCIpIHtcclxuXHQgICAgeGhudjExID0geGhudjExIC0gMTtcclxuXHQgICAgaWYoeGhudjExPDApIHtcclxuXHQgICAgICAgIHhobnYxMSA9IDA7XHJcblx0ICAgIH1cclxuXHQgICAgJChcInNwYW4udGIyMlwiKS50ZXh0KFwiIFwiK3hobnYxMStcIiBcIik7XHJcblx0fVxyXG4vL0VuZCBvZiAzcmQgZmFzdC1mb29kXHRcclxuXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCI0NVwiKSB7XHJcblx0ICAgIHhmbnYxMiA9IHhmbnYxMiArIDE7XHJcblx0ICAgICQoXCJzcGFuLnRiMjNcIikudGV4dChcIiBcIit4Zm52MTIrXCIgXCIpO1xyXG5cdH1cclxuXHRlbHNlIGlmKCQodGhpcykuYXR0cihcImNsYXNzXCIpPT1cIjQ2XCIpIHtcclxuXHQgICAgeGZudjEyID0geGZudjEyIC0gMTtcclxuXHQgICAgaWYoeGZudjEyPDApIHtcclxuXHQgICAgICAgIHhmbnYxMiA9IDA7XHJcblx0ICAgIH1cclxuXHQgICAgJChcInNwYW4udGIyM1wiKS50ZXh0KFwiIFwiK3hmbnYxMitcIiBcIik7XHJcblx0fVxyXG5cdGlmKCQodGhpcykuYXR0cihcImNsYXNzXCIpPT1cIjQ3XCIpIHtcclxuXHQgICAgeGhudjEyID0geGhudjEyICsgMTtcclxuXHQgICAgJChcInNwYW4udGIyNFwiKS50ZXh0KFwiIFwiK3hobnYxMitcIiBcIik7XHJcblx0fVxyXG5cdGVsc2UgaWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiNDhcIikge1xyXG5cdCAgICB4aG52MTIgPSB4aG52MTIgLSAxO1xyXG5cdCAgICBpZih4aG52MTI8MCkge1xyXG5cdCAgICAgICAgeGhudjEyID0gMDtcclxuXHQgICAgfVxyXG5cdCAgICAkKFwic3Bhbi50YjI0XCIpLnRleHQoXCIgXCIreGhudjEyK1wiIFwiKTtcclxuXHR9XHJcbi8vRW5kIG9mIDR0aCBmYXN0LWZvb2RcdFxyXG5cclxuY29zdDMgPSAoeGZudjkqcGFyc2VJbnQoJChcIi5jb3N0MTdcIikuaHRtbCgpKSkgKyAoeGhudjkqcGFyc2VJbnQoJChcIi5jb3N0MThcIikuaHRtbCgpKSlcclxuXHQgKyAoeGZudjEwKnBhcnNlSW50KCQoXCIuY29zdDE5XCIpLmh0bWwoKSkpICsgKHhobnYxMCpwYXJzZUludCgkKFwiLmNvc3QyMFwiKS5odG1sKCkpKVxyXG5cdCArICh4Zm52MTEqcGFyc2VJbnQoJChcIi5jb3N0MjFcIikuaHRtbCgpKSkgKyAoeGhudjExKnBhcnNlSW50KCQoXCIuY29zdDIyXCIpLmh0bWwoKSkpXHJcblx0ICsgKHhmbnYxMipwYXJzZUludCgkKFwiLmNvc3QyM1wiKS5odG1sKCkpKSArICh4aG52MTIqcGFyc2VJbnQoJChcIi5jb3N0MjRcIikuaHRtbCgpKSlcclxuXHQgO1xyXG5cdCBhbGVydChjb3N0Myk7XHJcbn0pO1xyXG5cclxuXHJcbiQoXCIubWVudS1pdGVtLWRldGFpbHM0IGJ1dHRvblwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbi8vKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCI0OVwiKSB7XHJcblx0ICAgIHhmbnYxMyA9IHhmbnYxMyArIDE7XHJcblx0ICAgICQoXCJzcGFuLnRiMjVcIikudGV4dChcIiBcIit4Zm52MTMrXCIgXCIpO1xyXG5cdH1cclxuXHRlbHNlIGlmKCQodGhpcykuYXR0cihcImNsYXNzXCIpPT1cIjUwXCIpIHtcclxuXHQgICAgeGZudjEzID0geGZudjEzIC0gMTtcclxuXHQgICAgaWYoeGZudjEzPDApIHtcclxuXHQgICAgICAgIHhmbnYxMyA9IDA7XHJcblx0ICAgIH1cclxuXHQgICAgJChcInNwYW4udGIyNVwiKS50ZXh0KFwiIFwiK3hmbnYxMytcIiBcIik7XHJcblx0fVxyXG5cdGlmKCQodGhpcykuYXR0cihcImNsYXNzXCIpPT1cIjUxXCIpIHtcclxuXHQgICAgeGhudjEzID0geGhudjEzICsgMTtcclxuXHQgICAgJChcInNwYW4udGIyNlwiKS50ZXh0KFwiIFwiK3hobnYxMytcIiBcIik7XHJcblx0fVxyXG5cdGVsc2UgaWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiNTJcIikge1xyXG5cdCAgICB4aG52MTMgPSB4aG52MTMgLSAxO1xyXG5cdCAgICBpZih4aG52MTM8MCkge1xyXG5cdCAgICAgICAgeGhudjEzID0gMDtcclxuXHQgICAgfVxyXG5cdCAgICAkKFwic3Bhbi50YjI2XCIpLnRleHQoXCIgXCIreGhudjEzK1wiIFwiKTtcclxuXHR9XHJcbi8vRW5kIG9mIDFzdCBiZXZlcmFnZVx0XHJcblxyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqXHJcblx0aWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiNTNcIikge1xyXG5cdCAgICB4Zm52MTQgPSB4Zm52MTQgKyAxO1xyXG5cdCAgICAkKFwic3Bhbi50YjI3XCIpLnRleHQoXCIgXCIreGZudjE0K1wiIFwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCI1NFwiKSB7XHJcblx0ICAgIHhmbnYxNCA9IHhmbnYxNCAtIDE7XHJcblx0ICAgIGlmKHhmbnYxNDwwKSB7XHJcblx0ICAgICAgICB4Zm52MTQgPSAwO1xyXG5cdCAgICB9XHJcblx0ICAgICQoXCJzcGFuLnRiMjdcIikudGV4dChcIiBcIit4Zm52MTQrXCIgXCIpO1xyXG5cdH1cclxuXHRpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCI1NVwiKSB7XHJcblx0ICAgIHhobnYxNCA9IHhobnYxNCArIDE7XHJcblx0ICAgICQoXCJzcGFuLnRiMjhcIikudGV4dChcIiBcIit4aG52MTQrXCIgXCIpO1xyXG5cdH1cclxuXHRlbHNlIGlmKCQodGhpcykuYXR0cihcImNsYXNzXCIpPT1cIjU2XCIpIHtcclxuXHQgICAgeGhudjE0ID0geGhudjE0IC0gMTtcclxuXHQgICAgaWYoeGhudjE0PDApIHtcclxuXHQgICAgICAgIHhobnYxNCA9IDA7XHJcblx0ICAgIH1cclxuXHQgICAgJChcInNwYW4udGIyOFwiKS50ZXh0KFwiIFwiK3hobnYxNCtcIiBcIik7XHJcblx0fVxyXG4vL0VuZCBvZiAybmQgYmV2ZXJhZ2VcdFxyXG5cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdGlmKCQodGhpcykuYXR0cihcImNsYXNzXCIpPT1cIjU3XCIpIHtcclxuXHQgICAgeGZudjE1ID0geGZudjE1ICsgMTtcclxuXHQgICAgJChcInNwYW4udGIyOVwiKS50ZXh0KFwiIFwiK3hmbnYxNStcIiBcIik7XHJcblx0fVxyXG5cdGVsc2UgaWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiNThcIikge1xyXG5cdCAgICB4Zm52MTUgPSB4Zm52MTUgLSAxO1xyXG5cdCAgICBpZih4Zm52MTU8MCkge1xyXG5cdCAgICAgICAgeGZudjE1ID0gMDtcclxuXHQgICAgfVxyXG5cdCAgICAkKFwic3Bhbi50YjI5XCIpLnRleHQoXCIgXCIreGZudjE1K1wiIFwiKTtcclxuXHR9XHJcblx0aWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiNTlcIikge1xyXG5cdCAgICB4aG52MTUgPSB4aG52MTUgKyAxO1xyXG5cdCAgICAkKFwic3Bhbi50YjMwXCIpLnRleHQoXCIgXCIreGhudjE1K1wiIFwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCI2MFwiKSB7XHJcblx0ICAgIHhobnYxNSA9IHhobnYxNSAtIDE7XHJcblx0ICAgIGlmKHhobnYxNTwwKSB7XHJcblx0ICAgICAgICB4aG52MTUgPSAwO1xyXG5cdCAgICB9XHJcblx0ICAgICQoXCJzcGFuLnRiMzBcIikudGV4dChcIiBcIit4aG52MTUrXCIgXCIpO1xyXG5cdH1cclxuLy9FbmQgb2YgM3JkIGJldmVyYWdlXHRcclxuXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCI2MVwiKSB7XHJcblx0ICAgIHhmbnYxNiA9IHhmbnYxNiArIDE7XHJcblx0ICAgICQoXCJzcGFuLnRiMzFcIikudGV4dChcIiBcIit4Zm52MTYrXCIgXCIpO1xyXG5cdH1cclxuXHRlbHNlIGlmKCQodGhpcykuYXR0cihcImNsYXNzXCIpPT1cIjYyXCIpIHtcclxuXHQgICAgeGZudjE2ID0geGZudjE2IC0gMTtcclxuXHQgICAgaWYoeGZudjE2PDApIHtcclxuXHQgICAgICAgIHhmbnYxNiA9IDA7XHJcblx0ICAgIH1cclxuXHQgICAgJChcInNwYW4udGIzMVwiKS50ZXh0KFwiIFwiK3hmbnYxNitcIiBcIik7XHJcblx0fVxyXG5cdGlmKCQodGhpcykuYXR0cihcImNsYXNzXCIpPT1cIjYzXCIpIHtcclxuXHQgICAgeGhudjE2ID0geGhudjE2ICsgMTtcclxuXHQgICAgJChcInNwYW4udGIzMlwiKS50ZXh0KFwiIFwiK3hobnYxNitcIiBcIik7XHJcblx0fVxyXG5cdGVsc2UgaWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiNjRcIikge1xyXG5cdCAgICB4aG52MTYgPSB4aG52MTYgLSAxO1xyXG5cdCAgICBpZih4aG52MTY8MCkge1xyXG5cdCAgICAgICAgeGhudjE2ID0gMDtcclxuXHQgICAgfVxyXG5cdCAgICAkKFwic3Bhbi50YjMyXCIpLnRleHQoXCIgXCIreGhudjE2K1wiIFwiKTtcclxuXHR9XHJcbi8vRW5kIG9mIDR0aCBiZXZlcmFnZVx0XHJcblxyXG5jb3N0NCA9ICh4Zm52MTMqcGFyc2VJbnQoJChcIi5jb3N0MjVcIikuaHRtbCgpKSkgKyAoeGhudjEzKnBhcnNlSW50KCQoXCIuY29zdDI2XCIpLmh0bWwoKSkpXHJcblx0ICsgKHhmbnYxNCpwYXJzZUludCgkKFwiLmNvc3QyN1wiKS5odG1sKCkpKSArICh4aG52MTQqcGFyc2VJbnQoJChcIi5jb3N0MjhcIikuaHRtbCgpKSlcclxuXHQgKyAoeGZudjE1KnBhcnNlSW50KCQoXCIuY29zdDI5XCIpLmh0bWwoKSkpICsgKHhobnYxNSpwYXJzZUludCgkKFwiLmNvc3QzMFwiKS5odG1sKCkpKVxyXG5cdCArICh4Zm52MTYqcGFyc2VJbnQoJChcIi5jb3N0MzFcIikuaHRtbCgpKSkgKyAoeGhudjE2KnBhcnNlSW50KCQoXCIuY29zdDMyXCIpLmh0bWwoKSkpXHJcblx0IDtcclxuXHQgYWxlcnQoY29zdDQpO1xyXG59KTtcclxuXHJcblxyXG4kKFwiLm1lbnUtaXRlbS1kZXRhaWxzNSBidXR0b25cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqXHJcblx0aWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiNjVcIikge1xyXG5cdCAgICB4Zm52MTcgPSB4Zm52MTcgKyAxO1xyXG5cdCAgICAkKFwic3Bhbi50YjMzXCIpLnRleHQoXCIgXCIreGZudjE3K1wiIFwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCI2NlwiKSB7XHJcblx0ICAgIHhmbnYxNyA9IHhmbnYxNyAtIDE7XHJcblx0ICAgIGlmKHhmbnYxNzwwKSB7XHJcblx0ICAgICAgICB4Zm52MTcgPSAwO1xyXG5cdCAgICB9XHJcblx0ICAgICQoXCJzcGFuLnRiMzNcIikudGV4dChcIiBcIit4Zm52MTcrXCIgXCIpO1xyXG5cdH1cclxuLy9FbmQgb2YgMXN0IHJvdGlcdFxyXG5cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdGlmKCQodGhpcykuYXR0cihcImNsYXNzXCIpPT1cIjY3XCIpIHtcclxuXHQgICAgeGZudjE4ID0geGZudjE4ICsgMTtcclxuXHQgICAgJChcInNwYW4udGIzNFwiKS50ZXh0KFwiIFwiK3hmbnYxOCtcIiBcIik7XHJcblx0fVxyXG5cdGVsc2UgaWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiNjhcIikge1xyXG5cdCAgICB4Zm52MTggPSB4Zm52MTggLSAxO1xyXG5cdCAgICBpZih4Zm52MTg8MCkge1xyXG5cdCAgICAgICAgeGZudjE4ID0gMDtcclxuXHQgICAgfVxyXG5cdCAgICAkKFwic3Bhbi50YjM0XCIpLnRleHQoXCIgXCIreGZudjE4K1wiIFwiKTtcclxuXHR9XHJcbi8vRW5kIG9mIDJuZCByb3RpXHRcclxuXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCI2OVwiKSB7XHJcblx0ICAgIHhmbnYxOSA9IHhmbnYxOSArIDE7XHJcblx0ICAgICQoXCJzcGFuLnRiMzVcIikudGV4dChcIiBcIit4Zm52MTkrXCIgXCIpO1xyXG5cdH1cclxuXHRlbHNlIGlmKCQodGhpcykuYXR0cihcImNsYXNzXCIpPT1cIjcwXCIpIHtcclxuXHQgICAgeGZudjE5ID0geGZudjE5IC0gMTtcclxuXHQgICAgaWYoeGZudjE5PDApIHtcclxuXHQgICAgICAgIHhmbnYxOSA9IDA7XHJcblx0ICAgIH1cclxuXHQgICAgJChcInNwYW4udGIzNVwiKS50ZXh0KFwiIFwiK3hmbnYxOStcIiBcIik7XHJcblx0fVxyXG4vL0VuZCBvZiAzcmQgcm90aVx0XHJcblxyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqXHJcblx0aWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiNzFcIikge1xyXG5cdCAgICB4Zm52MjAgPSB4Zm52MjAgKyAxO1xyXG5cdCAgICAkKFwic3Bhbi50YjM1XCIpLnRleHQoXCIgXCIreGZudjE5K1wiIFwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCI3MlwiKSB7XHJcblx0ICAgIHhmbnYyMCA9IHhmbnYyMCAtIDE7XHJcblx0ICAgIGlmKHhmbnYyMDwwKSB7XHJcblx0ICAgICAgICB4Zm52MjAgPSAwO1xyXG5cdCAgICB9XHJcblx0ICAgICQoXCJzcGFuLnRiMzZcIikudGV4dChcIiBcIit4Zm52MjArXCIgXCIpO1xyXG5cdH1cclxuLy9FbmQgb2YgNHRoIHJvdGlcclxuXHJcbmNvc3Q1ID0gKHhmbnYxNypwYXJzZUludCgkKFwiLmNvc3QzM1wiKS5odG1sKCkpKVxyXG5cdCArICh4Zm52MTgqcGFyc2VJbnQoJChcIi5jb3N0MzRcIikuaHRtbCgpKSlcclxuXHQgKyAoeGZudjE5KnBhcnNlSW50KCQoXCIuY29zdDM1XCIpLmh0bWwoKSkpXHJcblx0ICsgKHhmbnYyMCpwYXJzZUludCgkKFwiLmNvc3QzNlwiKS5odG1sKCkpKVxyXG5cdCA7XHJcblx0IGFsZXJ0KGNvc3Q1KTtcclxufSk7XHJcblxyXG5cclxuJChcIi5tZW51LWl0ZW0tZGV0YWlsczYgYnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuLy8qKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdGlmKCQodGhpcykuYXR0cihcImNsYXNzXCIpPT1cIjczXCIpIHtcclxuXHQgICAgeGZudjIxID0geGZudjIxICsgMTtcclxuXHQgICAgJChcInNwYW4udGIzN1wiKS50ZXh0KFwiIFwiK3hmbnYyMStcIiBcIik7XHJcblx0fVxyXG5cdGVsc2UgaWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiNzRcIikge1xyXG5cdCAgICB4Zm52MjEgPSB4Zm52MjEgLSAxO1xyXG5cdCAgICBpZih4Zm52MjE8MCkge1xyXG5cdCAgICAgICAgeGZudjIxID0gMDtcclxuXHQgICAgfVxyXG5cdCAgICAkKFwic3Bhbi50YjM3XCIpLnRleHQoXCIgXCIreGZudjIxK1wiIFwiKTtcclxuXHR9XHJcblx0aWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiNzVcIikge1xyXG5cdCAgICB4aG52MjEgPSB4aG52MjEgKyAxO1xyXG5cdCAgICAkKFwic3Bhbi50YjM4XCIpLnRleHQoXCIgXCIreGhudjIxK1wiIFwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCI3NlwiKSB7XHJcblx0ICAgIHhobnYyMSA9IHhobnYyMSAtIDE7XHJcblx0ICAgIGlmKHhobnYyMTwwKSB7XHJcblx0ICAgICAgICB4aG52MjEgPSAwO1xyXG5cdCAgICB9XHJcblx0ICAgICQoXCJzcGFuLnRiMzhcIikudGV4dChcIiBcIit4aG52MjErXCIgXCIpO1xyXG5cdH1cclxuLy9FbmQgb2YgMXN0IHJpY2VcdFxyXG5cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdGlmKCQodGhpcykuYXR0cihcImNsYXNzXCIpPT1cIjc3XCIpIHtcclxuXHQgICAgeGZudjIyID0geGZudjIyICsgMTtcclxuXHQgICAgJChcInNwYW4udGIzOVwiKS50ZXh0KFwiIFwiK3hmbnYyMitcIiBcIik7XHJcblx0fVxyXG5cdGVsc2UgaWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiNzhcIikge1xyXG5cdCAgICB4Zm52MjIgPSB4Zm52MjIgLSAxO1xyXG5cdCAgICBpZih4Zm52MjI8MCkge1xyXG5cdCAgICAgICAgeGZudjIyID0gMDtcclxuXHQgICAgfVxyXG5cdCAgICAkKFwic3Bhbi50YjM5XCIpLnRleHQoXCIgXCIreGZudjIyK1wiIFwiKTtcclxuXHR9XHJcblx0aWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiNzlcIikge1xyXG5cdCAgICB4aG52MjIgPSB4aG52MjIgKyAxO1xyXG5cdCAgICAkKFwic3Bhbi50YjQwXCIpLnRleHQoXCIgXCIreGhudjIyK1wiIFwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCI4MFwiKSB7XHJcblx0ICAgIHhobnYyMiA9IHhobnYyMiAtIDE7XHJcblx0ICAgIGlmKHhobnYyMjwwKSB7XHJcblx0ICAgICAgICB4aG52MjIgPSAwO1xyXG5cdCAgICB9XHJcblx0ICAgICQoXCJzcGFuLnRiNDBcIikudGV4dChcIiBcIit4aG52MjIrXCIgXCIpO1xyXG5cdH1cclxuLy9FbmQgb2YgMm5kIHJpY2VcclxuXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCI4MVwiKSB7XHJcblx0ICAgIHhmbnYyMyA9IHhmbnYyMyArIDE7XHJcblx0ICAgICQoXCJzcGFuLnRiNDFcIikudGV4dChcIiBcIit4Zm52MjMrXCIgXCIpO1xyXG5cdH1cclxuXHRlbHNlIGlmKCQodGhpcykuYXR0cihcImNsYXNzXCIpPT1cIjgyXCIpIHtcclxuXHQgICAgeGZudjIzID0geGZudjIzIC0gMTtcclxuXHQgICAgaWYoeGZudjIzPDApIHtcclxuXHQgICAgICAgIHhmbnYyMyA9IDA7XHJcblx0ICAgIH1cclxuXHQgICAgJChcInNwYW4udGI0MVwiKS50ZXh0KFwiIFwiK3hmbnYyMytcIiBcIik7XHJcblx0fVxyXG5cdGlmKCQodGhpcykuYXR0cihcImNsYXNzXCIpPT1cIjgzXCIpIHtcclxuXHQgICAgeGhudjIzID0geGhudjIzICsgMTtcclxuXHQgICAgJChcInNwYW4udGI0MlwiKS50ZXh0KFwiIFwiK3hobnYyMytcIiBcIik7XHJcblx0fVxyXG5cdGVsc2UgaWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiODRcIikge1xyXG5cdCAgICB4aG52MjMgPSB4aG52MjMgLSAxO1xyXG5cdCAgICBpZih4aG52MjM8MCkge1xyXG5cdCAgICAgICAgeGhudjIzID0gMDtcclxuXHQgICAgfVxyXG5cdCAgICAkKFwic3Bhbi50YjQyXCIpLnRleHQoXCIgXCIreGhudjIzK1wiIFwiKTtcclxuXHR9XHJcbi8vRW5kIG9mIDNyZCByaWNlXHJcblxyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqXHJcblx0aWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiODVcIikge1xyXG5cdCAgICB4Zm52MjQgPSB4Zm52MjQgKyAxO1xyXG5cdCAgICAkKFwic3Bhbi50YjQzXCIpLnRleHQoXCIgXCIreGZudjI0K1wiIFwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCI4NlwiKSB7XHJcblx0ICAgIHhmbnYyNCA9IHhmbnYyNCAtIDE7XHJcblx0ICAgIGlmKHhmbnYyNDwwKSB7XHJcblx0ICAgICAgICB4Zm52MjQgPSAwO1xyXG5cdCAgICB9XHJcblx0ICAgICQoXCJzcGFuLnRiNDNcIikudGV4dChcIiBcIit4Zm52MjQrXCIgXCIpO1xyXG5cdH1cclxuXHRpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCI4N1wiKSB7XHJcblx0ICAgIHhobnYyNCA9IHhobnYyNCArIDE7XHJcblx0ICAgICQoXCJzcGFuLnRiNDRcIikudGV4dChcIiBcIit4aG52MjQrXCIgXCIpO1xyXG5cdH1cclxuXHRlbHNlIGlmKCQodGhpcykuYXR0cihcImNsYXNzXCIpPT1cIjg4XCIpIHtcclxuXHQgICAgeGhudjI0ID0geGhudjI0IC0gMTtcclxuXHQgICAgaWYoeGhudjI0PDApIHtcclxuXHQgICAgICAgIHhobnYyNCA9IDA7XHJcblx0ICAgIH1cclxuXHQgICAgJChcInNwYW4udGI0NFwiKS50ZXh0KFwiIFwiK3hobnYyNCtcIiBcIik7XHJcblx0fVxyXG4vL0VuZCBvZiA0dGggcmljZVxyXG5cclxuY29zdDYgPSAoeGZudjIxKnBhcnNlSW50KCQoXCIuY29zdDM3XCIpLmh0bWwoKSkpICsgKHhobnYyMSpwYXJzZUludCgkKFwiLmNvc3QzOFwiKS5odG1sKCkpKVxyXG5cdCArICh4Zm52MjIqcGFyc2VJbnQoJChcIi5jb3N0MzlcIikuaHRtbCgpKSkgKyAoeGhudjIyKnBhcnNlSW50KCQoXCIuY29zdDQwXCIpLmh0bWwoKSkpXHJcblx0ICsgKHhmbnYyMypwYXJzZUludCgkKFwiLmNvc3Q0MVwiKS5odG1sKCkpKSArICh4aG52MjMqcGFyc2VJbnQoJChcIi5jb3N0NDJcIikuaHRtbCgpKSlcclxuXHQgKyAoeGZudjI0KnBhcnNlSW50KCQoXCIuY29zdDQzXCIpLmh0bWwoKSkpICsgKHhobnYyNCpwYXJzZUludCgkKFwiLmNvc3Q0NFwiKS5odG1sKCkpKVxyXG5cdCA7XHJcblx0IGFsZXJ0KGNvc3Q2KTtcclxufSk7XHJcblxyXG4kKFwiLm1lbnUtaXRlbS1kZXRhaWxzNyBidXR0b25cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqXHJcblx0aWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiODlcIikge1xyXG5cdCAgICB4Zm52MjUgPSB4Zm52MjUgKyAxO1xyXG5cdCAgICAkKFwic3Bhbi50YjQ1XCIpLnRleHQoXCIgXCIreGZudjI1K1wiIFwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCI5MFwiKSB7XHJcblx0ICAgIHhmbnYyNSA9IHhmbnYyNSAtIDE7XHJcblx0ICAgIGlmKHhmbnYyNTwwKSB7XHJcblx0ICAgICAgICB4Zm52MjUgPSAwO1xyXG5cdCAgICB9XHJcblx0ICAgICQoXCJzcGFuLnRiNDVcIikudGV4dChcIiBcIit4Zm52MjUrXCIgXCIpO1xyXG5cdH1cclxuLy9FbmQgb2YgMXN0IHN3ZWV0XHRcclxuXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCI5MVwiKSB7XHJcblx0ICAgIHhmbnYyNiA9IHhmbnYyNiArIDE7XHJcblx0ICAgICQoXCJzcGFuLnRiNDZcIikudGV4dChcIiBcIit4Zm52MjYrXCIgXCIpO1xyXG5cdH1cclxuXHRlbHNlIGlmKCQodGhpcykuYXR0cihcImNsYXNzXCIpPT1cIjkyXCIpIHtcclxuXHQgICAgeGZudjI2ID0geGZudjI2IC0gMTtcclxuXHQgICAgaWYoeGZudjI2PDApIHtcclxuXHQgICAgICAgIHhmbnYyNiA9IDA7XHJcblx0ICAgIH1cclxuXHQgICAgJChcInNwYW4udGI0NlwiKS50ZXh0KFwiIFwiK3hmbnYyNitcIiBcIik7XHJcblx0fVxyXG4vL0VuZCBvZiAybmQgc3dlZXRcclxuXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCI5M1wiKSB7XHJcblx0ICAgIHhmbnYyNyA9IHhmbnYyNyArIDE7XHJcblx0ICAgICQoXCJzcGFuLnRiNDdcIikudGV4dChcIiBcIit4Zm52MjcrXCIgXCIpO1xyXG5cdH1cclxuXHRlbHNlIGlmKCQodGhpcykuYXR0cihcImNsYXNzXCIpPT1cIjk0XCIpIHtcclxuXHQgICAgeGZudjI3ID0geGZudjI3IC0gMTtcclxuXHQgICAgaWYoeGZudjI3PDApIHtcclxuXHQgICAgICAgIHhmbnYyNyA9IDA7XHJcblx0ICAgIH1cclxuXHQgICAgJChcInNwYW4udGI0N1wiKS50ZXh0KFwiIFwiK3hmbnYyNytcIiBcIik7XHJcblx0fVxyXG4vL0VuZCBvZiAzcmQgc3dlZXRcclxuXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCI5NVwiKSB7XHJcblx0ICAgIHhmbnYyOCA9IHhmbnYyOCArIDE7XHJcblx0ICAgICQoXCJzcGFuLnRiNDhcIikudGV4dChcIiBcIit4Zm52MjgrXCIgXCIpO1xyXG5cdH1cclxuXHRlbHNlIGlmKCQodGhpcykuYXR0cihcImNsYXNzXCIpPT1cIjk2XCIpIHtcclxuXHQgICAgeGZudjI4ID0geGZudjI4IC0gMTtcclxuXHQgICAgaWYoeGZudjI4PDApIHtcclxuXHQgICAgICAgIHhmbnYyOCA9IDA7XHJcblx0ICAgIH1cclxuXHQgICAgJChcInNwYW4udGI0OFwiKS50ZXh0KFwiIFwiK3hmbnYyOCtcIiBcIik7XHJcblx0fVxyXG4vL0VuZCBvZiA0dGggc3dlZXRcclxuXHJcbmNvc3Q3ID0gKHhmbnYyNSpwYXJzZUludCgkKFwiLmNvc3Q0NVwiKS5odG1sKCkpKVxyXG5cdCArICh4Zm52MjYqcGFyc2VJbnQoJChcIi5jb3N0NDZcIikuaHRtbCgpKSlcclxuXHQgKyAoeGZudjI3KnBhcnNlSW50KCQoXCIuY29zdDQ3XCIpLmh0bWwoKSkpXHJcblx0ICsgKHhmbnYyOCpwYXJzZUludCgkKFwiLmNvc3Q0OFwiKS5odG1sKCkpKVxyXG5cdCA7XHJcblx0IGFsZXJ0KGNvc3Q3KTtcclxufSk7XHJcblxyXG4kKFwiLm1lbnUtaXRlbS1kZXRhaWxzOCBidXR0b25cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqXHJcblx0aWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiOTdcIikge1xyXG5cdCAgICB4Zm52MjkgPSB4Zm52MjkgKyAxO1xyXG5cdCAgICAkKFwic3Bhbi50YjQ5XCIpLnRleHQoXCIgXCIreGZudjI5K1wiIFwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCI5OFwiKSB7XHJcblx0ICAgIHhmbnYyOSA9IHhmbnYyOSAtIDE7XHJcblx0ICAgIGlmKHhmbnYyOTwwKSB7XHJcblx0ICAgICAgICB4Zm52MjkgPSAwO1xyXG5cdCAgICB9XHJcblx0ICAgICQoXCJzcGFuLnRiNDlcIikudGV4dChcIiBcIit4Zm52MjkrXCIgXCIpO1xyXG5cdH1cclxuLy9FbmQgb2YgMXN0IHNvdXRoLWluZGlhblx0XHJcblxyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqXHJcblx0aWYoJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik9PVwiOTlcIikge1xyXG5cdCAgICB4Zm52MzAgPSB4Zm52MzAgKyAxO1xyXG5cdCAgICAkKFwic3Bhbi50YjUwXCIpLnRleHQoXCIgXCIreGZudjMwK1wiIFwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCIxMDBcIikge1xyXG5cdCAgICB4Zm52MzAgPSB4Zm52MzAgLSAxO1xyXG5cdCAgICBpZih4Zm52MzA8MCkge1xyXG5cdCAgICAgICAgeGZudjMwID0gMDtcclxuXHQgICAgfVxyXG5cdCAgICAkKFwic3Bhbi50YjUwXCIpLnRleHQoXCIgXCIreGZudjMwK1wiIFwiKTtcclxuXHR9XHJcbi8vRW5kIG9mIDJuZCBzb3V0aC1pbmRpYW5cclxuXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCIxMDFcIikge1xyXG5cdCAgICB4Zm52MzEgPSB4Zm52MzEgKyAxO1xyXG5cdCAgICAkKFwic3Bhbi50YjUxXCIpLnRleHQoXCIgXCIreGZudjMxK1wiIFwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCIxMDJcIikge1xyXG5cdCAgICB4Zm52MzEgPSB4Zm52MzEgLSAxO1xyXG5cdCAgICBpZih4Zm52MzE8MCkge1xyXG5cdCAgICAgICAgeGZudjMxID0gMDtcclxuXHQgICAgfVxyXG5cdCAgICAkKFwic3Bhbi50YjUxXCIpLnRleHQoXCIgXCIreGZudjMxK1wiIFwiKTtcclxuXHR9XHJcbi8vRW5kIG9mIDNyZCBzb3V0aC1pbmRpYW5cclxuXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCIxMDNcIikge1xyXG5cdCAgICB4Zm52MzIgPSB4Zm52MzIgKyAxO1xyXG5cdCAgICAkKFwic3Bhbi50YjUyXCIpLnRleHQoXCIgXCIreGZudjMyK1wiIFwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZigkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKT09XCIxMDRcIikge1xyXG5cdCAgICB4Zm52MzIgPSB4Zm52MzIgLSAxO1xyXG5cdCAgICBpZih4Zm52MzI8MCkge1xyXG5cdCAgICAgICAgeGZudjMyID0gMDtcclxuXHQgICAgfVxyXG5cdCAgICAkKFwic3Bhbi50YjUyXCIpLnRleHQoXCIgXCIreGZudjMyK1wiIFwiKTtcclxuXHR9XHJcbi8vRW5kIG9mIDR0aCBzb3V0aC1pbmRpYW5cclxuXHJcbmNvc3Q4ID0gKHhmbnYyOSpwYXJzZUludCgkKFwiLmNvc3Q0OVwiKS5odG1sKCkpKVxyXG5cdCArICh4Zm52MzAqcGFyc2VJbnQoJChcIi5jb3N0NTBcIikuaHRtbCgpKSlcclxuXHQgKyAoeGZudjMxKnBhcnNlSW50KCQoXCIuY29zdDUxXCIpLmh0bWwoKSkpXHJcblx0ICsgKHhmbnYzMipwYXJzZUludCgkKFwiLmNvc3Q1MlwiKS5odG1sKCkpKVxyXG5cdCA7XHJcblx0IGFsZXJ0KGNvc3Q4KTtcclxufSk7XHJcblxyXG52YXIgY29zdCA9IDA7XHJcbmNvc3QgPSBjb3N0MSArIGNvc3QyICsgY29zdDMgKyBjb3N0NCArIGNvc3Q1ICsgY29zdDYgKyBjb3N0NyArIGNvc3Q4OyJdfQ==
