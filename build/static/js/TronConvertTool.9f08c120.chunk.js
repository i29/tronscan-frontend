(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{3469:function(e,t,n){"use strict";n.r(t);var o=n(15),a=n(16),c=n(22),r=n(21),i=n(23),l=n(0),d=n.n(l),s=(n(3),n(33)),m=(n(19),n(9),n(83)),u=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={loader:!1},n}return Object(i.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("convertTool"),t=this;e.onload=function(){t.setState({loader:!0})}}},{key:"componentDidUpdate",value:function(e,t){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return d.a.createElement("div",{className:"container header-overlap"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"row",style:{justifyContent:"center"}},d.a.createElement("div",{className:this.state.loader?"loader-hidden col-md-12":"show col-md-12"},d.a.createElement(m.b,null)),d.a.createElement("div",{className:this.state.loader?"show col-md-12":"hidden col-md-12",style:{width:"100%",height:"100%",minHeight:"750px",paddingTop:"15px",border:0}},d.a.createElement("iframe",{id:"convertTool",title:"TronConvertTool",style:{width:"100%",height:"100%",minHeight:"750px",paddingTop:"15px",border:0},src:"https://tronscan.org/TronConvertTool/"})))))}}]),t}(l.Component);t.default=Object(s.connect)(function(e){return{}},{})(u)}}]);