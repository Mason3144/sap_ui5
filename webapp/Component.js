sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "./controller/HelloDialog"
], function(UIComponent, JSONModel, HelloDialog){
    "use strict";
    return UIComponent.extend("sap.ui.walkthrough.component", {
        metadata : {
            manifest: "json"
        },
        init : function(){
            UIComponent.prototype.init.apply(this, arguments);
            var oData={
                recipient:{
                    name: "UI5"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            // 앱 시작시 dialog 객체 생성하여 _helloDialog에 저장
            // 자주 사용되는 정적 컴포넌트의 경우 앱 시작시 발동되도록하여 속도와 리소스관리에 효과를 줌
            this._helloDialog = new HelloDialog(this.getRootControl());
        },

        exit : function(){
            this._helloDialog.destroy();
            delete this._helloDialog;
        },

        openHelloDialog : function(){
            this._helloDialog.open();
        }
    })

})