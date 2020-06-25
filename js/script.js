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