/*global QUnit*/

sap.ui.define([
	"project1/controller/DemoFiori.controller"
], function (Controller) {
	"use strict";

	QUnit.module("DemoFiori Controller");

	QUnit.test("I should test the DemoFiori controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
