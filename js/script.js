var xfnv1 = 0;
var xhnv1 = 0;
var xfnv2 = 0;
var xhnv2 = 0;

var cost = 0;
$("span.tb1").text(" "+xfnv1+" ");
$("span.tb2").text(" "+xhnv1+" ");
$("span.tb3").text(" "+xfnv2+" ");
$("span.tb4").text(" "+xhnv2+" ");


$(".menu-item-details button").click(function () {
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


});

cost = (xfnv1*parseInt($(".cost1").html())) + (xhnv1*parseInt($(".cost2").html())) 
	 + (xfnv2*parseInt($(".cost3").html())) + (xhnv2*parseInt($(".cost4").html()))

	   ;