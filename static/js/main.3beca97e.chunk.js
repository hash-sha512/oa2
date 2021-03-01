(this.webpackJsonpoa2=this.webpackJsonpoa2||[]).push([[0],{103:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),c=n(20),r=n.n(c),a=(n(97),n(38)),l=n(40),s=n(76),j={country:""};var d=n(26),u="FETCH_INFO_BEGIN",b="FETCH_INFO_SUCCESS",O="FETCH_INFO_FAILURE",p={info:{},loading:!1,error:null};var x=Object(l.c)({region:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_COUNTRY":return{country:t.payload};default:return e}},regionalInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(d.a)(Object(d.a)({},e),{},{loading:!0,error:null});case b:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,info:t.payload});case O:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,error:t.payload.error,info:{}});default:return e}}}),h=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,f=Object(l.e)(x,h(Object(l.a)(s.a))),g=(n(103),n(56)),y=n(29),v=n(114),m=n(117),I=n(120),C=n(121),S=n(122),F=n(123),w=n(124),E=n(125),T=(n(74),n(110)),_=n(111),N=n(119),U=n(112),k=n(113),z=n(77),L=n(78),M=n(28),H=n.n(M),A=(n(104),n(115)),P=n(6);var B=Object(a.b)((function(e){return{loading:e.regionalInfo.loading,error:e.regionalInfo.error,info:e.regionalInfo.info,country:e.region.country}}))((function(e){var t,n,i,o,c,r,a,l,s,j,d,u,b=A.a.Meta;return Object(P.jsx)("div",{children:e.country?Object(P.jsxs)(A.a,{style:{width:300,marginTop:16},loading:e.loading,children:[Object(P.jsx)(b,{title:null===(t=e.info)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.name}),"Capital : ",null===(i=e.info)||void 0===i||null===(o=i[0])||void 0===o?void 0:o.capital," ",Object(P.jsx)("br",{}),"Population : ",null===(c=e.info)||void 0===c||null===(r=c[0])||void 0===r?void 0:r.population," ",Object(P.jsx)("br",{}),"Timezones : ",null===(a=e.info)||void 0===a||null===(l=a[0])||void 0===l?void 0:l.timezones[0]," ",Object(P.jsx)("br",{}),"Currency : ",null===(s=e.info)||void 0===s||null===(j=s[0])||void 0===j?void 0:j.currencies[0].symbol," ",Object(P.jsx)("br",{}),"Primary Language Spoken : ",null===(d=e.info)||void 0===d||null===(u=d[0])||void 0===u?void 0:u.languages[0].name," ",Object(P.jsx)("br",{})]}):Object(P.jsx)(P.Fragment,{})})})),R=n(116),D=n(118);function K(e){return function(t,n){return t({type:u}),fetch("https://restcountries.eu/rest/v2/name/".concat(e,"?fullText=true")).then(W).then((function(e){return e.json()})).then((function(e){return t({type:b,payload:e}),e})).catch((function(e){return t(function(e){return{type:O,payload:{error:e}}}(e))}))}}function W(e){if(!e.ok)throw new Error(e.error);return e}var J=Object(a.b)()((function(e){var t=R.a.Option,n=o.a.useState("india"),i=Object(y.a)(n,2),c=i[0],r=i[1];return Object(P.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly"},children:[Object(P.jsxs)(R.a,{showSearch:!0,style:{width:200},placeholder:"Select a Country",optionFilterProp:"children",onChange:function(e){r(e)},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:[Object(P.jsx)(t,{value:"india",children:"India"}),Object(P.jsx)(t,{value:"usa",children:"United States"}),Object(P.jsx)(t,{value:"uk",children:"United Kingdom"})]}),Object(P.jsx)(D.a,{onClick:function(){e.dispatch(function(e){return{type:"NEW_COUNTRY",payload:e}}(c)),e.dispatch(K(c))},type:"primary",children:"Load"})]})}));var V=Object(a.b)((function(e){return{country:e.region.country}}))((function(e){var t={india:{lat:20.5937,lng:78.9629},usa:{lat:37.0902,lng:-95.7129},uk:{lat:55.3781,lng:-3.436}};Object.freeze(t);var n=o.a.useState({lat:0,lng:0}),i=Object(y.a)(n,2),c=i[0],r=i[1];function a(e){var t=e.coords,n=Object(T.a)();return n.setView([t.lat,t.lng],n.getZoom()),null}o.a.useEffect((function(){r(t[e.country])}),[e.country]);var l=H.a.icon({iconUrl:z.a,shadowUrl:L.a});return H.a.Marker.prototype.options.icon=l,Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)("div",{style:{position:"absolute"},children:[Object(P.jsx)("div",{style:{position:"relative",top:"13px",zIndex:"999"},children:Object(P.jsx)(J,{})}),Object(P.jsx)("div",{style:{position:"relative",top:"198px",left:"13px",zIndex:"999"},children:Object(P.jsx)(B,{})})]}),Object(P.jsxs)(_.a,{style:{height:"70vh",width:"100%"},center:c,zoom:4.2,zoomControl:!1,scrollWheelZoom:!1,children:[Object(P.jsx)(N.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),c&&Object(P.jsx)(a,{coords:c}),Object(P.jsx)(U.a,{position:"topright"}),c&&Object(P.jsx)(k.a,{position:c})]})]})}));var X=function(e){var t,n=v.a.Header,o=v.a.Sider,c=v.a.Content,r=v.a.Footer,a=m.a.SubMenu,l=Object(i.useState)({collapsed:!1}),s=Object(y.a)(l,2),j=s[0],d=s[1];return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(v.a,{children:Object(P.jsxs)(n,{children:[Object(P.jsx)("div",{className:"logo"}),Object(P.jsxs)(m.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],style:{display:"flex",justifyContent:"flex-end",alignItems:"center"},children:[Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(I.a,{style:{fontSize:"42px",position:"absolute",top:"auto",left:"14px"},children:"MapUp AI"}),Object(P.jsx)("span",{style:{position:"absolute",fontSize:"1.4em",left:"69px"},children:"MapUp AI"})]}),Object(P.jsx)(m.a.Item,{style:{padding:"0 45px"},children:"nav 1"},"1"),Object(P.jsx)(m.a.Item,{style:{padding:"0 45px"},children:"nav 2"},"2"),Object(P.jsx)(m.a.Item,{style:{padding:"0 45px"},children:"nav 3"},"3"),Object(P.jsx)(C.a,{style:{fontSize:"18px",padding:"0 14px",marginLeft:"50px"}})]})]})}),Object(P.jsxs)(v.a,{children:[Object(P.jsxs)(o,(t={style:{backgroundClip:"white"},collapsible:!0,collapsed:j.collapsed,onCollapse:function(){d({collapsed:!j.collapsed})}},Object(g.a)(t,"style",{minHeight:"100%"}),Object(g.a)(t,"children",[Object(P.jsx)("div",{className:"logo"}),Object(P.jsxs)(m.a,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline",children:[Object(P.jsx)(m.a.Item,{icon:Object(P.jsx)(S.a,{}),children:"Option 1"},"1"),Object(P.jsx)(m.a.Item,{icon:Object(P.jsx)(F.a,{}),children:"Option 2"},"2"),Object(P.jsxs)(a,{icon:Object(P.jsx)(C.a,{}),title:"User",children:[Object(P.jsx)(m.a.Item,{children:"Tom"},"3"),Object(P.jsx)(m.a.Item,{children:"Bill"},"4"),Object(P.jsx)(m.a.Item,{children:"Alex"},"5")]},"sub1"),Object(P.jsxs)(a,{icon:Object(P.jsx)(w.a,{}),title:"Team",children:[Object(P.jsx)(m.a.Item,{children:"Team 1"},"6"),Object(P.jsx)(m.a.Item,{children:"Team 2"},"8")]},"sub2"),Object(P.jsx)(m.a.Item,{icon:Object(P.jsx)(E.a,{}),children:"Files"},"9")]})]),t)),Object(P.jsx)(v.a,{className:"site-layout",children:Object(P.jsx)(c,{className:"site-layout-background",style:{margin:"24px 16px",padding:24,minHeight:280},children:Object(P.jsx)(V,{})})})]}),Object(P.jsx)(v.a,{children:Object(P.jsx)(r,{style:{textAlign:"center"},children:"MapUp AI \xa92021 Created by Harsha"})})]})};var Y=function(){return Object(P.jsx)(a.a,{store:f,children:Object(P.jsx)(X,{})})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,126)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),o(e),c(e),r(e)}))};r.a.render(Object(P.jsx)(o.a.StrictMode,{children:Object(P.jsx)(Y,{})}),document.getElementById("root")),Z()},97:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.3beca97e.chunk.js.map