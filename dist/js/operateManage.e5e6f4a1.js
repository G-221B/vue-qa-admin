(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["operateManage"],{"17f5":function(t,n,e){},"397f":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"operate-manage"},[e("h2",{staticClass:"user-title"},[t._v("近七日的用户注册量")]),e("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"user"}}),e("h2",{staticClass:"question-title"},[t._v("近七日用户提问量")]),e("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"question"}})])}],u=(e("96cf"),e("1da1")),o=e("6f05"),a=e("ed08"),c=e("3eba"),s={data:function(){return{charts:"",userData:[],questionData:[]}},components:{},created:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(o["i"])();case 2:e=n.sent,0===e.status&&(t.userData=Object(a["b"])(e.data.userData),t.questionData=Object(a["b"])(e.data.questionData)),t.$nextTick((function(){console.log(e),console.log(this.userData),console.log(this.questionData),this.drawLine("user","注册量",this.userData),this.drawLine("question","提问量",this.questionData)}));case 5:case"end":return n.stop()}}),n)})))()},methods:{drawLine:function(t,n,e){this.charts=c.init(document.getElementById(t)),this.charts.setOption({tooltip:{trigger:"axis"},legend:{data:[n]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["周一","周二","周三","周三","周四","周五","周六","周日"]},yAxis:{type:"value"},series:[{name:n,type:"line",stack:"总量",data:e}]})}}},d=s,f=(e("8739"),e("2877")),l=Object(f["a"])(d,r,i,!1,null,"bd5b4afc",null);n["default"]=l.exports},"3eba":function(t,n,e){"use strict";e.r(n);var r=e("aa74");e.d(n,"version",(function(){return r["ab"]})),e.d(n,"dependencies",(function(){return r["l"]})),e.d(n,"PRIORITY",(function(){return r["g"]})),e.d(n,"init",(function(){return r["B"]})),e.d(n,"connect",(function(){return r["j"]})),e.d(n,"disConnect",(function(){return r["m"]})),e.d(n,"disconnect",(function(){return r["n"]})),e.d(n,"dispose",(function(){return r["o"]})),e.d(n,"getInstanceByDom",(function(){return r["w"]})),e.d(n,"getInstanceById",(function(){return r["x"]})),e.d(n,"registerTheme",(function(){return r["R"]})),e.d(n,"registerPreprocessor",(function(){return r["P"]})),e.d(n,"registerProcessor",(function(){return r["Q"]})),e.d(n,"registerPostInit",(function(){return r["N"]})),e.d(n,"registerPostUpdate",(function(){return r["O"]})),e.d(n,"registerAction",(function(){return r["H"]})),e.d(n,"registerCoordinateSystem",(function(){return r["I"]})),e.d(n,"getCoordinateSystemDimensions",(function(){return r["v"]})),e.d(n,"registerLocale",(function(){return r["L"]})),e.d(n,"registerLayout",(function(){return r["J"]})),e.d(n,"registerVisual",(function(){return r["T"]})),e.d(n,"registerLoading",(function(){return r["K"]})),e.d(n,"setCanvasCreator",(function(){return r["U"]})),e.d(n,"registerMap",(function(){return r["M"]})),e.d(n,"getMap",(function(){return r["y"]})),e.d(n,"registerTransform",(function(){return r["S"]})),e.d(n,"dataTool",(function(){return r["k"]})),e.d(n,"zrender",(function(){return r["cb"]})),e.d(n,"matrix",(function(){return r["D"]})),e.d(n,"vector",(function(){return r["Z"]})),e.d(n,"zrUtil",(function(){return r["bb"]})),e.d(n,"color",(function(){return r["i"]})),e.d(n,"throttle",(function(){return r["V"]})),e.d(n,"helper",(function(){return r["A"]})),e.d(n,"use",(function(){return r["X"]})),e.d(n,"parseGeoJSON",(function(){return r["F"]})),e.d(n,"parseGeoJson",(function(){return r["G"]})),e.d(n,"number",(function(){return r["E"]})),e.d(n,"time",(function(){return r["W"]})),e.d(n,"graphic",(function(){return r["z"]})),e.d(n,"format",(function(){return r["u"]})),e.d(n,"util",(function(){return r["Y"]})),e.d(n,"env",(function(){return r["p"]})),e.d(n,"List",(function(){return r["e"]})),e.d(n,"Model",(function(){return r["f"]})),e.d(n,"Axis",(function(){return r["a"]})),e.d(n,"ComponentModel",(function(){return r["c"]})),e.d(n,"ComponentView",(function(){return r["d"]})),e.d(n,"SeriesModel",(function(){return r["h"]})),e.d(n,"ChartView",(function(){return r["b"]})),e.d(n,"innerDrawElementOnCanvas",(function(){return r["C"]})),e.d(n,"extendComponentModel",(function(){return r["r"]})),e.d(n,"extendComponentView",(function(){return r["s"]})),e.d(n,"extendSeriesModel",(function(){return r["t"]})),e.d(n,"extendChartView",(function(){return r["q"]}));var i=e("22b4"),u=e("1be7"),o=e("f95e"),a=e("5e81");Object(i["a"])([o["a"],a["a"]]),n["default"]={init:function(){return u["l"].apply(null,arguments)}}},8739:function(t,n,e){"use strict";e("17f5")}}]);