(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],[,,,function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2AV7s",SearchForm:"Searchbar_SearchForm___ia8g",SearchForm_button:"Searchbar_SearchForm_button__1SA4i",SearchForm_button_label:"Searchbar_SearchForm_button_label__2xlRk",SearchForm_input:"Searchbar_SearchForm_input__1ss_h"}},,,,,function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3xV4O",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__buy16"}},function(e,t,a){e.exports={Overlay:"Modal_Overlay__1GIgH",Modal:"Modal_Modal__3ZlTf"}},function(e,t,a){e.exports={Button:"Button_Button__c93mN",container:"Button_container__2xy75"}},,function(e,t,a){e.exports={container:"Loader_container__Ty8VQ"}},,function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2vLvO"}},,,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),r=a.n(c),o=a(5),i=a.n(o),s=(a(20),a(2)),l=(a(21),a(3)),u=a.n(l);var m=function(e){var t=e.onSubmit,a=Object(c.useState)(""),r=Object(s.a)(a,2),o=r[0],i=r[1];return Object(n.jsx)("header",{className:u.a.Searchbar,children:Object(n.jsxs)("form",{className:u.a.SearchForm,onSubmit:function(e){e.preventDefault(),""!==o?(t(o),i("")):console.log("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0440\u043e\u043a\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0430.")},children:[Object(n.jsx)("button",{type:"submit",className:u.a.SearchForm_button,children:Object(n.jsx)("span",{className:u.a.SearchForm_button_label,children:"Search"})}),Object(n.jsx)("input",{className:u.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){i(e.target.value.trim())},value:o})]})})},b=a(11);var j=function(e,t){var a=encodeURIComponent(e),n="https://pixabay.com/api/?key=".concat("19471965-37c13a0c7cc27691c95ac1581","&q=").concat(a,"&image_type=photo&page=").concat(t,"&per_page=").concat(12,"&orientation=").concat("horizontal");return fetch(n).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445"))}))},h=a(8),g=a.n(h);var _=function(e){var t=e.images,a=e.onClickImage;return Object(n.jsx)(n.Fragment,{children:t.map((function(e){return Object(n.jsx)("li",{className:g.a.ImageGalleryItem,children:Object(n.jsx)("img",{src:e.webformatURL,alt:e.tags,className:g.a.ImageGalleryItem_image,"data-big_img":e.largeImageURL,onClick:a})},e.id)}))})},d=a(9),f=a.n(d),O=document.querySelector("#modal-root");function p(e){var t=e.onClose,a=e.children;Object(c.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);return Object(o.createPortal)(Object(n.jsx)("div",{className:f.a.Overlay,onClick:function(e){e.target===e.currentTarget&&t()},children:Object(n.jsx)("div",{className:f.a.Modal,children:a})}),O)}var v=a(10),x=a.n(v);function S(e){var t=e.onClick;return Object(n.jsx)("div",{className:x.a.container,children:Object(n.jsx)("button",{type:"button",className:x.a.Button,onClick:t,children:"Load more"})})}var y=a(13),I=a.n(y),k=a(12),w=a.n(k);function F(){return Object(n.jsx)("div",{className:w.a.container,children:Object(n.jsx)(I.a,{color:"#3f51b5"})})}var N=a(14),C=a.n(N),G="pending",L="resolved",E="rejected",R={alt:"",src:""};var U=function(e){var t=e.queryString,a=e.page,r=e.onClick,o=Object(c.useState)([]),i=Object(s.a)(o,2),l=i[0],u=i[1],m=Object(c.useState)(""),h=Object(s.a)(m,2),g=h[0],d=h[1],f=Object(c.useState)(null),O=Object(s.a)(f,2),v=O[0],x=O[1],y=Object(c.useState)(!1),I=Object(s.a)(y,2),k=I[0],w=I[1];Object(c.useEffect)((function(){t&&a&&(d(G),j(t,a).then((function(e){var t=[];return 0===e.hits.length?Promise.reject(new Error("\u0414\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043d\u0435\u0442")):(e.hits.forEach((function(e){var a=e.id,n=e.webformatURL,c=e.largeImageURL,r=e.tags;t.push({id:a,webformatURL:n,largeImageURL:c,tags:r})})),t)})).then((function(e){u((function(t){return[].concat(Object(b.a)(t),Object(b.a)(e))})),d(L),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){x(e),d(E)})))}),[t,a]);var N=function(){w((function(e){return!e}))};return g===E?Object(n.jsx)("h1",{children:v.message}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("ul",{className:C.a.ImageGallery,children:Object(n.jsx)(_,{images:l,onClickImage:function(e){R.alt=e.target.alt,R.src=e.target.dataset.big_img,N()}})}),g===L&&Object(n.jsx)(S,{onClick:r}),g===G&&Object(n.jsx)(F,{}),k&&Object(n.jsx)(p,{onClose:N,children:Object(n.jsx)("img",{src:R.src,alt:R.alt})})]})};var B=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(c.useState)(""),i=Object(s.a)(o,2),l=i[0],u=i[1];return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(m,{onSubmit:function(e){r(1),u(e)}}),Object(n.jsx)(U,{queryString:l,page:a,onClick:function(){r((function(e){return e+1}))}})]})};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(B,{})}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.06e4f9d1.chunk.js.map