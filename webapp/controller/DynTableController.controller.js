/*eslint-disable no-console, no-alert */
var template;
var arrItems = [];      // THE ARRAY TO STORE JSON ITEMS.;
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	return Controller.extend("nDynTable.DynTable.controller.DynTableController", {
		onInit: function () {
			var rd1 = this.byId("RB-1");
			rd1.setSelected(false);
			template = $.getJSON("template.json");
			
			$.getJSON("data.json", function (data) {
	            $.each(data, function (index, value) {
	                arrItems.push(value);       // PUSH THE VALUES INSIDE THE ARRAY.
	            });
			});
			//opData = $.getJSON("data.json");
			/*oTable = this.getView().byId("idTable");
			this.oTable = oTable;*/
		},
		onRadioButtonSelect: function () {
			var oModel = new sap.ui.model.json.JSONModel();
			//oModel.destroy();
			var selectedButtonIdx = this.byId("RBG").getProperty("selectedIndex");
			var oTemp = "oTemp";
			var idx = oTemp.concat(selectedButtonIdx);
			var oColumn;
			var oTempData = new sap.m.ColumnListItem();
			var templateDisplay = [];
			var oTable = this.getView().byId("idTable");
			oTable.destroyColumns();
			templateDisplay = template.responseJSON[idx];
			var field = "field";
			var oTemplate = new sap.m.ColumnListItem();
			var colItems = new sap.m.ColumnListItem({type:"Active"});
				//colItems.destroyCells();
			//var col = "col";
			var b = "Name";
			var a = arrItems(1,"Name");
			//eval("a = arrItems[1]."+ b +"");
			
			alert(a);
			var path = "/";
			var text = "Category";
			for (var r in arrItems[1]){
				if(r === text){
					var bhjbjhfd;
				}
			}
			for(var a = 1; a < 10; a++){
				if(templateDisplay[field.concat(a)] !== undefined){
					
					var col = new sap.m.Column("col" + a ,{
								header: new sap.m.Label({ text: templateDisplay[field.concat(a)] }),
								width: "auto",
								minScreenWidth: "Tablet"});
											
    				oTable.addColumn(col);  
    				var txtNAME = new sap.m.Text({text:"{" + templateDisplay[field.concat(a)] + "}"});
					colItems.addCell(txtNAME); 
    				/*oTable.bindAggregation("items", "/rows", function(index, context) {
						//var roa = XLSX.utils.sheet_to_json(worksheet);
						if(roa.length > 0){
							result[worksheet] = roa;
						}
						var knfkljf = [];
						//for(var i = 0; i < roa.length; i++){
							return new sap.m.ColumnListItem({
								cells: [
									new Text({ text :templateDisplay[field.concat(a)] })
									]
							});
						//};
					});*/
				}else{
					break;
				}
			}
			oTable.bindAggregation("items","/",colItems);
			oModel.setData(arrItems);
			//oTable.bindItems(path, oTemplate);
			oTable.setModel(oModel);
			/*var oTemp = new sap.m.ColumnListItem({
					cells: [
						new sap.m.ObjectIdentifier({
							title: "{ProductId}"
						}),
						new sap.m.Text({
							text: "{Name}"
						}),
						new sap.m.Text({
							text: "{Category}"
						}),
						new sap.m.Text({
							text: "{SupplierName}"
						}),
						new sap.m.Text({
							text: "{Description}"
						}),
						new sap.m.Text({
							text: "{WeightMeasure}"
						}),
						new sap.m.Text({
							text: "{WeightUnit}"
						}),
						new sap.m.Text({
							text: "{Price}"
						}),
						new sap.m.Text({
							text: "{CurrencyCode}"
						})
					]
				});*/
			
			
			
			
			
			
			var asnkjf = [];
			
		}
	});
});