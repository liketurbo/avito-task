(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,a,t){e.exports={grid:"Grid_grid__2245Y"}},42:function(e,a,t){e.exports={header:"Header_header__MbTxY"}},44:function(e,a,t){e.exports=t(72)},49:function(e,a,t){},6:function(e,a,t){e.exports={card:"Card_card__3rpIc",img:"Card_img__3jbA_",title:"Card_title__1cpd-",price:"Card_price__1DVSA",seller:"Card_seller__3H-tn",star:"Card_star__3rt6h",camera:"Card_camera__2K8Zz",heart:"Card_heart__3gQ3v",heart_active:"Card_heart_active__JJJK0"}},72:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(10),c=t.n(l),o=(t(49),function(e){var a=e.children;return n.a.createElement(n.a.Fragment,null,a)}),i=t(12),s=t(11),u=t(2),d=t(9),p=t(28),m=Object(r.createContext)(null),f=t(15),_=t.n(f),E=t(23),b=t(24),v=t.n(b),y=t(13),g=t(25),h=t(43),D=t(16),O=t(39),S=t.n(O),T=t(40),R=t(6),A=t.n(R),N=function(e){var a=e.title,t=e.price,l=e.pictures,c=e.id,o=e.seller,i=e.category,u=Object(r.useState)(JSON.parse(localStorage.getItem("favorites")||"[]")),d=Object(s.a)(u,2),p=d[0],m=d[1];return Object(r.useEffect)(function(){localStorage.setItem("favorites",JSON.stringify(p))},[p]),n.a.createElement("article",{className:A.a.card},n.a.createElement("img",{className:A.a.img,src:l[0],alt:i}),n.a.createElement("a",{className:A.a.title,href:"https://avito.dump.academy/products/".concat(c)},n.a.createElement("h1",null,a)),n.a.createElement("span",{className:A.a.price},t?"".concat(t.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1\u2009")," \u20bd"):"\u0426\u0435\u043d\u0430 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430"),n.a.createElement("a",{className:A.a.seller,href:"https://avito.dump.academy/sellers/".concat(o.id)},n.a.createElement("span",null,o.name)),n.a.createElement(T.a,{readonly:!0,initialRating:o.rating,emptySymbol:n.a.createElement("span",{className:A.a.star},"\u2606"),fullSymbol:n.a.createElement("span",{className:A.a.star},"\u2605")}),l.length>1&&n.a.createElement("span",{className:A.a.camera,role:"img","aria-label":"camera"},"\ud83d\udcf7 ",l.length-1),n.a.createElement("button",{className:S()(A.a.heart,Object(D.a)({},A.a.heart_active,p.includes(c))),onClick:function(){var e=JSON.parse(localStorage.getItem("favorites")||"[]");p.includes(c)?m(e.filter(function(e){return e!==c})):m([].concat(Object(h.a)(e),[c]))}},"\u2764"))},j=t(41),x=t.n(j),C=function(e){var a=e.children;return n.a.createElement("div",{className:x.a.grid},a)},k=t(42),w=t.n(k),Y=function(e){var a=e.children;return n.a.createElement("header",{className:w.a.header},a)},J=function(e,a){switch(a.type){case"SET_LOADING":return Object(y.a)(e,function(e){e.loading=a.payload});case"SET_ERROR":return Object(y.a)(e,function(e){e.error=a.payload});case"SET_ALL_DATA":return Object(y.a)(e,function(e){e.allData=a.payload.products.map(function(e){var t=e.relationships.seller,r=a.payload.sellers.find(function(e){return e.id===t});return Object(i.a)({},e,{seller:r})}),e.renderData=e.allData});case"SET_RENDER_DATA_BY_SORT":return Object(y.a)(e,function(t){switch(t.sorted=a.payload[0],a.payload[0]){case"default":t.renderData=t.allData.filter(function(e){return e.category===t.categorized||"all"===t.categorized});break;case"favorite":t.renderData=e.renderData.filter(function(e){return a.payload[1].includes(e.id)});break;case"cheap":t.renderData=t.renderData.sort(function(e,a){return e.price-a.price});break;case"expensive":t.renderData=t.renderData.sort(function(e,a){return a.price-e.price})}});case"SET_RENDER_DATA_BY_CATEGORY":return Object(y.a)(e,function(e){switch(e.categorized=a.payload[0],a.payload[0]){case"all":e.renderData=e.allData;break;case"immovable":e.renderData=e.allData.filter(function(e){return"immovable"===e.category});break;case"cameras":e.renderData=e.allData.filter(function(e){return"cameras"===e.category});break;case"auto":e.renderData=e.allData.filter(function(e){return"auto"===e.category});break;case"laptops":e.renderData=e.allData.filter(function(e){return"laptops"===e.category})}});default:return e}};c.a.render(n.a.createElement(o,null,n.a.createElement(function(e){var a=e.children,t=Object(u.a)({basename:"/avito-test"});return n.a.createElement(m.Provider,{value:t},n.a.createElement(d.b,{history:t},a))},null,n.a.createElement(p.a,{exact:!0,path:"/",component:function(){var e=Object(r.useReducer)(J,{loading:!0,error:!1,sorted:"default",categorized:"all",allData:[],renderData:[]}),a=Object(s.a)(e,2),t=a[0],l=a[1];return Object(r.useEffect)(function(){try{var e=[];e.push(v()("https://avito.dump.academy/products").then(function(e){return e.data.data})),e.push(v()("https://avito.dump.academy/sellers").then(function(e){return e.data.data})),Promise.all(e).then(function(e){var a=Object(s.a)(e,2),t=a[0],r=a[1];l({type:"SET_ALL_DATA",payload:{products:t,sellers:r}})})}catch(a){l({type:"SET_ERROR",payload:!0})}l({type:"SET_LOADING",payload:!1})},[]),console.log(t),n.a.createElement(n.a.Fragment,null,n.a.createElement(Y,null,n.a.createElement(g.a,{styles:{container:function(e){return Object(i.a)({},e,{flexBasis:170})}},defaultValue:{value:"default",label:"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"},options:[{value:"default",label:"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"},{value:"favorite",label:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435"},{value:"cheap",label:"\u0414\u0435\u0448\u0435\u0432\u043b\u0435"},{value:"expensive",label:"\u0414\u043e\u0440\u043e\u0436\u0435"}],onChange:function(){var e=Object(E.a)(_.a.mark(function e(a){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l({type:"SET_RENDER_DATA_BY_CATEGORY",payload:[t.categorized]});case 2:return e.next=4,l({type:"SET_RENDER_DATA_BY_SORT",payload:[a.value,JSON.parse(localStorage.getItem("favorites")||"[]")]});case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()}),n.a.createElement(g.a,{onChange:function(){var e=Object(E.a)(_.a.mark(function e(a){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l({type:"SET_RENDER_DATA_BY_CATEGORY",payload:[a.value]});case 2:return e.next=4,l({type:"SET_RENDER_DATA_BY_SORT",payload:[t.sorted,JSON.parse(localStorage.getItem("favorites")||"[]")]});case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),styles:{container:function(e){return Object(i.a)({},e,{flexBasis:170})}},defaultValue:{value:"all",label:"\u0412\u0441\u0435"},options:[{value:"all",label:"\u0412\u0441\u0435"},{value:"immovable",label:"\u041d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u044c"},{value:"cameras",label:"\u0424\u043e\u0442\u043e\u0430\u043f\u043f\u0430\u0440\u0430\u0442\u044b"},{value:"auto",label:"\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0438"},{value:"laptops",label:"\u041d\u043e\u0443\u0442\u0431\u0443\u043a\u0438"}]})),n.a.createElement(C,null,t.renderData.length>0&&t.renderData.map(function(e){return n.a.createElement(N,Object.assign({key:e.id},e))})))}}))),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.bd9b245b.chunk.js.map