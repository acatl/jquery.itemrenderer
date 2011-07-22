$.widget("ir.itemrenderer", {
	options: {
		/** type string, name of widget to use as renderer */
		itemRenderer:null,
		/** type function, function that will be executed on each iteration*/
		rendererFunction:null,
		/** type function, function to process the label that will be used */
		labelFunction:null,
		/** type string, name of the field to use as the label */
		labelField:null,
		/** type Object, data source for the widget */
		dataProvider:null
	}, 
	
	_create: function() {
		this.element.addClass("ir-itemrenderer");
		this._updateDisplayList();
	},
	
	_updateDisplayList: function(){
		this.element.children().remove();
		
		if(this.options.dataProvider == null) {
			return;
		}
		
		for (var i in this.options.dataProvider){
			var item = this.options.dataProvider[i];
			var label = this._processlabel(item, this.options);
			var container = $("<div></div>");
			var listData = this._createListData(this, label, item, this.options, i);
			if(this.options.itemRenderer != null) {
				container[this.options.itemRenderer]({listData:listData});
			} else if(this.options.rendererFunction != null) {
				this.options.rendererFunction(container, listData);
			} else {
				container.html(label);
			}
			this.element.append(container);
		};
	},
	
	_createListData: function (owner, label, data, options, index) {
		var listData = {
			owner : owner,
			label: label,
			data : data,
			options : options,
			index : index
		};
		
		return listData;
	},
	
	_processlabel : function(data, options) {
		if (options.labelFunction != null) {
			return options.labelFunction(data, options);
		}

		if (options.labelField != null) {
			return data[options.labelField];
		}

		if (data[options.field] != null) {
			return data[options.field];
		} else if (data.hasOwnProperty("label")) {
			return data.label;
		}

		return data;
	},
	
	_setOption : function(key, value) {
		switch (key) {
			case "dataProvider":
				this.options.dataProvider = value;
				this._updateDisplayList();
				break;
		}

		$.Widget.prototype._setOption.apply(this, arguments);

	},
	
	destroy: function(){
		$.Widget.prototype.destroy.apply(this, arguments);
		this.element.removeClass("ir-itemrenderer");
	},
});