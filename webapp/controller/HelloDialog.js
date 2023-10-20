sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
], function (ManagedObject, Fragment) {
    "use strict"
    return ManagedObject.extend("sap.ui.demo.walkthrough.controller.HelloDialog", {
            constructor: function(oView){
                this._oView = oView;
            },
            
            exit: function(){
                delete this._oView;
            },

            open :function(){
                var oView = this._oView;

                    // dialog가 이미 만들어져 있을경우 기존의 다이얼로그를 닫는다.
                if(!oView.byId("helloDialog")){
                    var oFragmentController = {
                        onCloseDialog : function(){
                            oView.byId("helloDialog").close();
                        }
                    }
                    //이 작성된 다이얼로그 로드 한뒤 오픈
                    Fragment.load({
                        id: oView.getId(),
                        name: "sap.ui.demo.walkthrough.view.HelloDialog",
                        controller: oFragmentController
                    }).then(function(oDialog){
                        oView.addDependent(oDialog);
                        oDialog.open();
                    })
                } else {
                    oView.byId("helloDialog").open();
                }
                

            } 
    });
});


