(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],[,,,,function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2AV7s",SearchForm:"Searchbar_SearchForm___ia8g",SearchForm_button:"Searchbar_SearchForm_button__1SA4i",SearchForm_button_label:"Searchbar_SearchForm_button_label__2xlRk",SearchForm_input:"Searchbar_SearchForm_input__1ss_h"}},,,,,,function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3xV4O",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__buy16"}},function(e,t,a){e.exports={Overlay:"Modal_Overlay__1GIgH",Modal:"Modal_Modal__3ZlTf"}},function(e,t,a){e.exports={Button:"Button_Button__c93mN",container:"Button_container__2xy75"}},,,function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2vLvO"}},function(e,t,a){e.exports={container:"Loader_container__Ty8VQ"}},,,,,,,function(e,t,a){},,function(e,t,a){},,,,,,,,function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),r=a.n(n),o=a(3),i=a.n(o),s=(a(23),a(13)),l=a(2),u=a(8);a(24);var m=function(e,t){var a=encodeURIComponent(e),c="https://pixabay.com/api/?key=".concat("19471965-37c13a0c7cc27691c95ac1581","&q=").concat(a,"&image_type=photo&page=").concat(t,"&per_page=").concat(12,"&orientation=").concat("horizontal");return fetch(c).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445"))}))},b={PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"},j=(a(25),a(4)),h=a.n(j);var g=function(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(l.a)(a,2),o=r[0],i=r[1];return Object(c.jsx)("header",{className:h.a.Searchbar,children:Object(c.jsxs)("form",{className:h.a.SearchForm,onSubmit:function(e){e.preventDefault(),""!==o?(t(o),i("")):u.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0440\u043e\u043a\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0430.",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},children:[Object(c.jsx)("button",{type:"submit",className:h.a.SearchForm_button,children:Object(c.jsx)("span",{className:h.a.SearchForm_button_label,children:"Search"})}),Object(c.jsx)("input",{className:h.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){i(e.target.value.trim())},value:o})]})})},d=a(10),O=a.n(d);var _=function(e){var t=e.images,a=e.onClickImage;return Object(c.jsx)(c.Fragment,{children:t.map((function(e){return Object(c.jsx)("li",{className:O.a.ImageGalleryItem,children:Object(c.jsx)("img",{src:e.webformatURL,alt:e.tags,className:O.a.ImageGalleryItem_image,"data-big_img":e.largeImageURL,onClick:a})},e.id)}))})},f=a(11),p=a.n(f),S=document.querySelector("#modal-root");function x(e){var t=e.onClose,a=e.children;Object(n.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);return Object(o.createPortal)(Object(c.jsx)("div",{className:p.a.Overlay,onClick:function(e){e.target===e.currentTarget&&t()},children:Object(c.jsx)("div",{className:p.a.Modal,children:a})}),S)}var v=a(15),I=a.n(v),E={alt:"",src:""};var y=function(e){var t=e.images,a=Object(n.useState)(!1),r=Object(l.a)(a,2),o=r[0],i=r[1],s=Object(n.useState)(E),u=Object(l.a)(s,2),m=u[0],b=u[1],j=function(){o&&b(E),i((function(e){return!e}))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("ul",{className:I.a.ImageGallery,children:Object(c.jsx)(_,{images:t,onClickImage:function(e){b({alt:e.target.alt,src:e.target.dataset.big_img}),j()}})}),o&&Object(c.jsx)(x,{onClose:j,children:Object(c.jsx)("img",{src:m.src,alt:m.alt})})]})},N=a(12),k=a.n(N);function w(e){var t=e.onClick;return Object(c.jsx)("div",{className:k.a.container,children:Object(c.jsx)("button",{type:"button",className:k.a.Button,onClick:t,children:"Load more"})})}var C=a(17),G=a.n(C),F=a(16),L=a.n(F);function R(){return Object(c.jsx)("div",{className:L.a.container,children:Object(c.jsx)(G.a,{color:"#3f51b5"})})}var D=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),i=Object(l.a)(o,2),j=i[0],h=i[1],d=Object(n.useState)(0),O=Object(l.a)(d,2),_=O[0],f=O[1],p=Object(n.useState)(""),S=Object(l.a)(p,2),x=S[0],v=S[1],I=Object(n.useState)([]),E=Object(l.a)(I,2),N=E[0],k=E[1];return Object(n.useEffect)((function(){x&&_&&(h(b.PENDING),m(x,_).then((function(e){var t=[];return 0===e.hits.length?Promise.reject(new Error("\u0414\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043d\u0435\u0442")):(e.hits.forEach((function(e){var a=e.id,c=e.webformatURL,n=e.largeImageURL,r=e.tags;t.push({id:a,webformatURL:c,largeImageURL:n,tags:r})})),t)})).then((function(e){k((function(t){return[].concat(Object(s.a)(t),Object(s.a)(e))})),h(b.RESOLVED),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){r(e),h(b.REJECTED)})))}),[x,_]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(g,{onSubmit:function(e){k([]),f(1),v(e)}}),j===b.REJECTED&&Object(c.jsx)("h1",{children:a.message}),(j===b.RESOLVED||j===b.PENDING)&&Object(c.jsx)(y,{images:N}),j===b.RESOLVED&&Object(c.jsx)(w,{onClick:function(){f((function(e){return e+1}))}}),j===b.PENDING&&Object(c.jsx)(R,{}),Object(c.jsx)(u.a,{})]})};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(D,{})}),document.getElementById("root"))}],[[33,1,2]]]);
//# sourceMappingURL=main.e40b1654.chunk.js.map