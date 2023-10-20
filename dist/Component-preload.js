//@ui5-bundle sap/ui/demo/walkthrough/Component-preload.js
sap.ui.require.preload({
	"sap/ui/demo/walkthrough/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/model/json/JSONModel","sap/ui/model/resource/ResourceModel"],function(e,o,i){"use strict";return e.extend("sap.ui.walkthrough.component",{metadata:{rootView:{viewName:"sap.ui.demo.walkthrough.view.App",type:"XML",async:true,id:"app"}},init:function(){e.prototype.init.apply(this,arguments);var t={recipient:{name:"UI5"}};var a=new o(t);this.setModel(a);var n=new i({bundleName:"sap.ui.demo.walkthrough.i18n.i18n",supportedLocales:[""],fallbackLocale:""});this.setModel(n,"i18n")}})});
},
	"sap/ui/demo/walkthrough/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast","sap/ui/model/json/JSONModel","sap/ui/model/resource/ResourceModel"],function(e,o,t,s){"use strict";return e.extend("sap.ui.demo.walkthrough.App",{onShowHello:function(){var e=this.getView().getModel("i18n").getResourceBundle();var t=this.getView().getModel().getProperty("/recipient/name");var s=e.getText("helloMsg",[t]);o.show(s)}})});
},
	"sap/ui/demo/walkthrough/i18n/i18n.properties":'showHelloButtonText=Say Hello\nhelloMsg=Hello {0}',
	"sap/ui/demo/walkthrough/index.js":function(){
sap.ui.define(["sap/ui/core/ComponentContainer"],function(e){"use strict";new e({name:"sap.ui.demo.walkthrough",settings:{id:"walkthrough"},async:true}).placeAt("content")});
},
	"sap/ui/demo/walkthrough/manifest.json":'{"_version":"1.1.0","start_url":"<startUrl>","sap.app":{"_version":"1.1.0","id":"sap.ui.demo.walkthrough","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","tags":{"keywords":["{{<keyword1>}}","{{<keyword2>}}"]},"dataSources":{"<dataSourceAlias>":{"uri":"<uri>","settings":{"localUri":"<localUri>"}}}},"sap.ui":{"_version":"1.1.0","icons":{"icon":"<icon>","favIcon":"<favIcon>","phone":"<phone>","phone@2":"<phone@2>","tablet":"<tablet>","tablet@2":"<tablet@2>"},"deviceTypes":{"desktop":true,"tablet":true,"phone":true},"supportedThemes":["sap_hcb","sap_bluecrystal"]},"sap.ui5":{"_version":"1.1.0","resources":{"js":[{"uri":"<uri>"}],"css":[{"uri":"<uri>","id":"<id>"}]},"dependencies":{"minUI5Version":"<minUI5Version>","libs":{"<ui5lib1>":{"minVersion":"<minVersion1>"},"<ui5lib2>":{"minVersion":"<minVersion2>"}},"components":{"<ui5component1>":{"minVersion":"<minComp1Version>"}}},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"<uriRelativeToManifest>"},"":{"dataSource":"<dataSourceAlias>","settings":{}}},"rootView":"<rootView>","handleValidation":false,"config":{},"routing":{},"extends":{"component":"<extendedComponentId>","minVersion":"<minComp1Version>","extensions":{}},"contentDensities":{"compact":false,"cozy":false}},"sap.platform.abap":{"_version":"1.1.0","uri":"<uri>"},"sap.platform.hcp":{"_version":"1.1.0","uri":"<uri>"}}',
	"sap/ui/demo/walkthrough/view/App.view.xml":'<mvc:View controllerName="sap.ui.demo.walkthrough.controller.App"\n    xmlns="sap.m"\n    xmlns:mvc="sap.ui.core.mvc"><Button text="{i18n>showHelloButtonText}" press=".onShowHello"/><Input\n        value="{/recipient/name}"\n        description="Hello {/recipient/name }"\n        valueLiveUpdate="true"\n        width="60%"/></mvc:View>'
});
//# sourceMappingURL=Component-preload.js.map