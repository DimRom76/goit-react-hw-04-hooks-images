(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2AV7s",SearchForm:"Searchbar_SearchForm___ia8g",SearchForm_button:"Searchbar_SearchForm_button__1SA4i",SearchForm_button_label:"Searchbar_SearchForm_button_label__2xlRk",SearchForm_input:"Searchbar_SearchForm_input__1ss_h"}},,,,,function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3xV4O",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__buy16"}},function(e,t,a){e.exports={Overlay:"Modal_Overlay__1GIgH",Modal:"Modal_Modal__3ZlTf"}},function(e,t,a){e.exports={Button:"Button_Button__c93mN",container:"Button_container__2xy75"}},function(e,t,a){e.exports={container:"Loader_container__Ty8VQ"}},,function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2vLvO"}},,,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),o=a.n(r),c=a(8),i=a.n(c),s=(a(22),a(2)),l=a(3),u=a(5),h=a(4),m=(a(23),a(7)),b=a(6),g=a.n(b),d=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={value:""},e.handleOnChange=e.handleOnChange.bind(Object(m.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(m.a)(e)),e}return Object(l.a)(a,[{key:"handleOnChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),""!==this.state.value.trim()?(this.props.onSubmit(this.state.value),this.setState({value:""})):console.log("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0440\u043e\u043a\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0430.")}},{key:"render",value:function(){var e=this.state.value;return Object(n.jsx)("header",{className:g.a.Searchbar,children:Object(n.jsxs)("form",{className:g.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:g.a.SearchForm_button,children:Object(n.jsx)("span",{className:g.a.SearchForm_button_label,children:"Search"})}),Object(n.jsx)("input",{className:g.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleOnChange,value:e})]})})}}]),a}(r.Component),j=a(9);var p=function(e,t){var a=encodeURIComponent(e),n="https://pixabay.com/api/?key=".concat("19471965-37c13a0c7cc27691c95ac1581","&q=").concat(a,"&image_type=photo&page=").concat(t,"&per_page=").concat(12,"&orientation=").concat("horizontal");return fetch(n).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445"))}))},O=a(11),v=a.n(O),_=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.images,a=e.onClickImage;return Object(n.jsx)(n.Fragment,{children:t.map((function(e){return Object(n.jsx)("li",{className:v.a.ImageGalleryItem,children:Object(n.jsx)("img",{src:e.webformatURL,alt:e.tags,className:v.a.ImageGalleryItem_image,"data-big_img":e.largeImageURL,onClick:a})},e.id)}))})}}]),a}(r.Component),f=a(12),y=a.n(f),S=document.querySelector("#modal-root"),x=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackDropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(n.jsx)("div",{className:y.a.Overlay,onClick:this.handleBackDropClick,children:Object(n.jsx)("div",{className:y.a.Modal,children:this.props.children})}),S)}}]),a}(r.Component),k=a(13),C=a.n(k);function I(e){var t=e.onClick;return Object(n.jsx)("div",{className:C.a.container,children:Object(n.jsx)("button",{type:"button",className:C.a.Button,onClick:t,children:"Load more"})})}var w=a(15),N=a.n(w),M=a(14),F=a.n(M);function E(){return Object(n.jsx)("div",{className:F.a.container,children:Object(n.jsx)(N.a,{color:"#3f51b5"})})}var G=a(16),L=a.n(G),D="pending",B="resolved",R="rejected",U={alt:"",src:""},q=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onClickImage=function(t){U.alt=t.target.alt,U.src=t.target.dataset.big_img,e.toggleModal()},e.state={images:[],status:"",error:null,showModal:!1},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=e.queryString,n=this.props.queryString,r=e.page,o=this.props.page;a===n&&r===o||(this.setState({status:D}),this.getPhoto(a,n,o))}},{key:"getPhoto",value:function(e,t,a){var n=this;p(t,a).then((function(e){var t=[];return 0===e.hits.length?Promise.reject(new Error("\u0414\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043d\u0435\u0442")):(e.hits.forEach((function(e){var a=e.id,n=e.webformatURL,r=e.largeImageURL,o=e.tags;t.push({id:a,webformatURL:n,largeImageURL:r,tags:o})})),t)})).then((function(a){var r;r=e===t?[].concat(Object(j.a)(n.state.images),Object(j.a)(a)):Object(j.a)(a),n.setState({images:r,status:B}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){return n.setState({error:e,status:R})}))}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.status,r=e.error,o=e.showModal;return a===a.REJECTED?Object(n.jsx)("h1",{children:r.message}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("ul",{className:L.a.ImageGallery,children:Object(n.jsx)(_,{images:t,onClickImage:this.onClickImage})}),a===a.RESOLVED&&Object(n.jsx)(I,{onClick:this.props.onClick}),a===a.PENDING&&Object(n.jsx)(E,{}),o&&Object(n.jsx)(x,{onClose:this.toggleModal,children:Object(n.jsx)("img",{src:U.src,alt:U.alt})})]})}}]),a}(r.Component),P=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onSubmit=function(t){e.setState({page:1,queryString:t})},e.onClickButtomLoadMore=function(t){e.setState((function(e){return{page:e.page+1}}))},e.state={page:0,queryString:""},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.queryString,a=e.page;return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(d,{onSubmit:this.onSubmit}),Object(n.jsx)(q,{queryString:t,page:a,onClick:this.onClickButtomLoadMore})]})}}]),a}(r.Component);i.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(P,{})}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.b256824f.chunk.js.map