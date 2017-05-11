"use strict";

//array of products starts here				
var cart = [];
	
function foodMenu(name, price){
	this.name = name;
	this.price = price;
};
			
	addMenuItem("burger",18.99);
	addMenuItem("pancakes",15.99);
	addMenuItem("eggs",8.99);
	addMenuItem("coffee",6.99);
	addMenuItem("wine",12.99);
	addMenuItem("parfait",7.99);
	
function addMenuItem(name, price){
	var menuItems = new foodMenu(name, price); 
	cart.push(menuItems);
}
		
$(document).ready(function(){
			
//brunch link animation starts
$("a").on("click", function(){
	$("html body").animate({"scrollTop":$("#brunchMenu").offset().top},1000);
});

		
//slider function starts here
$(function (){ 
	setInterval(function(){
				
		$("#caroussel ul").animate({marginLeft: "-1200px"}, 800, function(){
		$("#caroussel ul li:last").after($("#caroussel ul li:first"));
		$(this).css("margin-left", "0");
		});
		
		}, 4000);
});
	
	
//display cart on click
$("#shoppingCart").on("click", function(){	
		$("#shoppingCartCheck").fadeIn(600);
});
	
//hide cart on click
$("#hideMe").on("click", function(){
		$("#shoppingCartCheck").fadeOut(600);
});	
	
//selected values are calculated and displayed in apropriate rows
$("#selectBurger, #selectPancakes, #selectEggs, #selectCoffee, #selectWine, #selectParfait").on("change", function(){
		
		var quantity = $(this).val(); // selectedIndex
		var counter = 0; // calcualte quantity for counter
		var index = $("select").index(this); //select tag index
		var itemTotal = quantity * cart[index].price; //total price
		var price = 0;//stores total price	
		var tax = 0; //calcualtes and stores tax amount
		
		//calculate the price from all the select inputs
		price =  parseFloat($("#selectBurger").val() * cart[0].price) 
			    +parseFloat($("#selectPancakes").val() * cart[1].price) 
				+parseFloat($("#selectEggs").val() * cart[2].price) 
				+parseFloat($("#selectCoffee").val() * cart[3].price) 
				+parseFloat($("#selectWine").val() * cart[4].price) 
				+parseFloat($("#selectParfait").val() * cart[5].price);
				
		tax = price * 0.0887;
		
		//calculate the quantity from all the select inputs
		counter = parseFloat($("#selectBurger").val()) 
			     +parseFloat($("#selectPancakes").val()) 
				 +parseFloat($("#selectEggs").val()) 
				 +parseFloat($("#selectCoffee").val()) 
				 +parseFloat($("#selectWine").val()) 
				 +parseFloat($("#selectParfait").val());
				 
				 	 
		//***************Display Values **********************************//
		//displays values in appropriate row if quantity greater than zero
	
		$("#shoppingCart").fadeIn(600);
		$("#counter").text(counter);
		$(".firstTd").eq(index).text(cart[index].name).show();
		$(".secTd").eq(index).text(quantity).show();
		$(".thirdTd").eq(index).text(itemTotal.toFixed(2)).show();
		$("#popTable tr .first").eq(index).text(cart[index].name).show();
		$("#popTable tr .sec").eq(index).text(quantity).show();
		$("#popTable tr .third").eq(index).text(itemTotal.toFixed(2)).show();
		
		// display total price in selection container
		$(".itemTotal").eq(index).text(itemTotal.toFixed(2)).show();
		
		//display subtotal on table on small popup
		$(".subtotalSales").text("$" + price.toFixed(2)).show(); 
		//display tax on large popup
		$(".tax").text(tax.toFixed(2)).show();
		//display total sales on large popup
		$(".totalSales").text((price + tax).toFixed(2)).show(); 
		
		//*********** Display Values end *********************//
		
		
		
		//place the order
		$("#sendOrder").on("click", function(){	
			
				$(".blurrme").css({
								'filter': 'blur(5px)',
								'-webkit-filter': 'blur(5px)',
								'-moz-filter': 'blur(5px)',
								'-o-filter': 'blur(5px)',
								'-ms-filter': 'blur(5px)'
								});
								
				$("#popup").fadeIn(300);
				setInterval(timer, 1000);
				
		});
		

		//close popup window
		$("#closePop").on("click", function(){
			quantity = 0;
			itemTotal = 0;
			counter = 0;
			price = 0;
			tax = 0;
			
			//reset all the forms
			$(".orderAmount").trigger("reset");
			
			//delete values in appropriate row if quantity equals zero
			
			$(".firstTd").eq(index).text("").hide();
			$(".secTd").eq(index).text(quantity).hide();
			$(".thirdTd").eq(index).text(itemTotal).hide();
			$("#popTable tr .first").eq(index).text("").hide();
			$("#popTable tr .sec").eq(index).text(quantity).hide();
			$("#popTable tr .third").eq(index).text(itemTotal).hide();
			
			//delete value from selection container
			$(".itemTotal").eq(index).html(itemTotal).hide();
			
			//zero out subtotal and remove from table
			$(".subtotalSales").text(price).hide(); 
			//zero out tax amount and remove from table
			$(".tax").text(tax).hide();
			//zero out subtotal and remove from table
			$(".totalSales").text(price + tax).hide();
				
			//zero out counter
			$("#counter").text(counter);			
			//hide small popup
			$("#shoppingCartCheck").hide();
			//hide shopping cart icon
			$("#shoppingCart").hide();
			//remove the screen blur
			$(".blurrme").css("filter", "blur(0)");
			//hide large popup
			$("#popup").hide();
			
			
		});				
	});	
});
