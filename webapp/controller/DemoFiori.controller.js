sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller , JSONModel ) {
        "use strict";

        return Controller.extend("project1.controller.DemoFiori", {
            onInit: function () {
               alert("heey dostum.  controlller demofioricontroller.js on init yerindesin");

  var JsonData = {   
       Welcometitletxt : "hoşgeldiniz kardeş JsonData" ,
       Products : [ { MalzemeNo: "12344" ,
                    MalzemeText = "kalem"   } ,
                  { MalzemeNo: "12345" ,
                    MalzemeText = "kalem45"   }

  ]
     } ;

var onVeiwModel = new JSONModel(JsonData);
 
this.getView().setModel( onVeiwModel , "ViewModel"  ); 



            },

            onBeforeRendering: function() {
                // Do something here...
             //   alert("heey dostum. onBeforeRendering ");
              },

            onAfterRendering: function() {
                // Do something here...
               // alert("heey dostum. onAfterRendering ");
              },
 

        });
    });
