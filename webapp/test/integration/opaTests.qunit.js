/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"nDynTable/DynTable/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});