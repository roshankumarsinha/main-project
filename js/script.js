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

var cost1 = 0;
var cost2 = 0;
var cost3 = 0;
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


var cost = 0;
cost = cost1 + cost2 + cost3;