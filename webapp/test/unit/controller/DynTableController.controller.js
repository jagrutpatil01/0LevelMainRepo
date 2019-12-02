/*global QUnit*/

sap.ui.define([
	"nDynTable/DynTable/controller/DynTableController.controller"
], function (Controller) {
	"use strict";

	QUnit.module("DynTableController Controller");

	QUnit.test("I should test the DynTableController controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});