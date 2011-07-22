/*
Example 6:

$.widget("ui.customwidget", {
	options: {
		listData:null
	},
	_create: function (){
		this.element.addClass("ui-customwidget");
		
		$("<span></span>")
		.text(this.options.listData.data.name + " is $" + this.options.listData.data.price)
		.appendTo(this.element);
		
		$("<button>+ Add to Cart</button>")
		.appendTo(this.element)
		.click($.proxy(this._addToCart_clickHandler, this));
	},
	
	_addToCart_clickHandler: function(e){
		alert("do something here..");
	},	
	
	destroy: function(){
		$.Widget.prototype.destroy.apply(this, arguments);
		this.element.removeClass("ui-customwidget");
	}	
});

$(function () {
	
	var itemrendererOptions = {
		itemRenderer: "customwidget",
		dataProvider: [ 
			{
				name: "lorem",
				price: 123.34
			}, 
			{
				name: "lipsum",
				price: 33.34
			},
			{
				name: "dolor",
				price: 23.34
			},
			{
				name: "sit",
				price: 623.34
			}
		]
	};
	$("#itemrenderer").itemrenderer(itemrendererOptions);
});
*/


/*
Example 5:

$(function () {
	var itemrendererOptions = {
		labelField: "name",
		rendererFunction: function (container, listData) {
			if(listData.data.price > 100) {
				container.css("color","red");
			}
			container.html(listData.label);
		},
		dataProvider: [ 
			{
				name: "lorem",
				price: 123.34
			}, 
			{
				name: "lipsum",
				price: 33.34
			},
			{
				name: "dolor",
				price: 23.34
			},
			{
				name: "sit",
				price: 623.34
			}
		]
	};
	$("#itemrenderer").itemrenderer(itemrendererOptions);
});
*/


/*
Example 4.2:

$(function () {
	var itemrendererOptions = {
		labelField: "name",
		labelFunction: function (data, options) {
			return data[options.labelField] + " is $ " + data.price;
		},
		dataProvider: [ 
			{
				name: "lorem",
				price: 123.34
			}, 
			{
				name: "lipsum",
				price: 33.34
			},
			{
				name: "dolor",
				price: 23.34
			},
			{
				name: "sit",
				price: 623.34
			}
		]
	};
	$("#itemrenderer").itemrenderer(itemrendererOptions);
});

*/


/*
Example 4.1:

$(function () {
	var itemrendererOptions = {
		labelFunction: function (data, options) {
			return "$ " + data.price;
		},
		dataProvider: [ 
			{
				name: "lorem",
				price: 123.34
			}, 
			{
				name: "lipsum",
				price: 33.34
			},
			{
				name: "dolor",
				price: 23.34
			},
			{
				name: "sit",
				price: 623.34
			}
		]
	};
	$("#itemrenderer").itemrenderer(itemrendererOptions);
});
*/



/*
Example 3:

$(function () {
	var itemrendererOptions = {
		labelField: "name",
		dataProvider: [ 
			{
				name: "lorem"
			}, 
			{
				name: "lipsum"
			},
			{
				name: "dolor"
			},
			{
				name: "sit"
			}
		]
	};
	$("#itemrenderer").itemrenderer(itemrendererOptions);
});
*/
		
/*
Example 2:

$(function () {
	var itemrendererOptions = {
		dataProvider: [ 
			{
				label: "lorem"
			}, 
			{
				label: "lipsum"
			},
			{
				label: "dolor"
			},
			{
				label: "sit"
			}
		]
	};
	$("#itemrenderer").itemrenderer(itemrendererOptions);
});
*/



//Example 1:

$(function () {
	var itemrendererOptions = {
		dataProvider: ["lorem", "lipsum", "dolor", "sit"]
	};
	$("#itemrenderer").itemrenderer(itemrendererOptions);
});
