(this["webpackJsonpreg-auth"]=this["webpackJsonpreg-auth"]||[]).push([[0],{196:function(e,t,r){e.exports=r(305)},202:function(e,t,r){},206:function(e,t,r){},226:function(e,t,r){},282:function(e,t,r){},283:function(e,t,r){},284:function(e,t,r){},285:function(e,t,r){},302:function(e,t,r){},303:function(e,t,r){},304:function(e,t,r){},305:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(18),o=r.n(c),i=(r(201),r(202),r(55)),s=r(7),u=r(172),l=r(19),m=r(4),p={token:null,username:"",email:"",id:null,errors:"",isProcessing:!1,isLogIn:!1},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_REQUEST":var r=t.payload.isProcessing;return Object(m.a)(Object(m.a)({},e),{},{isProcessing:r});case"AUTH_SUCCES":var a=t.payload;return Object(m.a)(Object(m.a)({},e),a);case"AUTH_FAILURE":var n=t.payload,c=n.errors,o=n.isProcessing;return Object(m.a)(Object(m.a)({},e),{},{errors:c,isProcessing:o});case"LOG_OUT":case"RESET_ERRORS":return p;default:return e}},E={isProcessing:!1,errors:""},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_ARTICLE_REQUEST":return Object(m.a)(Object(m.a)({},e),{},{isProcessing:!0});case"CREATE_ARTICLE_SUCCES":return Object(m.a)(Object(m.a)({},e),{},{isProcessing:!1});case"CREATE_ARTICLE_FAILURE":var r=t.payload;return Object(m.a)(Object(m.a)({},e),{},{errors:r,isProcessing:!1});default:return e}},g={articles:[],isLoading:!1,errors:"",articlesCount:0,currentPage:1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ARTICLES_REQUEST":return Object(m.a)(Object(m.a)({},e),{},{isLoading:!0});case"GET_ARTICLES_SUCCES":var r=t.payload,a=r.articles,n=r.articlesCount;return Object(m.a)(Object(m.a)({},e),{},{isLoading:!1,articles:a,articlesCount:n});case"GET_ARTICLES_FAILURE":var c=t.payload.errors;return Object(m.a)(Object(m.a)({},e),{},{errors:c,isLoading:!1});case"ARTICLE_FAVORITED":case"ARTICLE_UNFAVORITED":var o=t.payload.article,i=e.articles;return Object(m.a)(Object(m.a)({},e),{},{articles:i.map((function(e){return e.slug===o.slug?Object(m.a)(Object(m.a)({},o),{},{favorited:o.favorited,favoritesCount:o.favoritesCount}):e}))});case"ARTICLES_PAGINATION":var s=t.payload.currentPage;return Object(m.a)(Object(m.a)({},e),{},{currentPage:s});default:return e}},h={isProcessing:!1,errors:""},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_ARTICLE_REQUEST":return Object(m.a)(Object(m.a)({},e),{},{isProcessing:!0});case"UPDATE_ARTICLE_SUCCES":return Object(m.a)(Object(m.a)({},e),{},{isProcessing:!1});case"UPDATE_ARTICLE_FAILURE":var r=t.payload;return Object(m.a)(Object(m.a)({},e),{},{errors:r,isProcessing:!1});default:return e}},A={isProcessing:!1,errors:""},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DELETE_ARTICLE_REQUEST":return Object(m.a)(Object(m.a)({},e),{},{isProcessing:!0});case"DELETE_ARTICLE_SUCCES":return Object(m.a)(Object(m.a)({},e),{},{isProcessing:!1});case"DELETE_ARTICLE_FAILURE":var r=t.payload;return Object(m.a)(Object(m.a)({},e),{},{errors:r,isProcessing:!1});default:return e}},R=Object(i.c)({auth:d,createArticle:f,getArticles:v,updateArticle:b,deleteArticle:O});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r(206);var T=r(59),y=r(307),C=r(147),S=r(33),L=r(3),F=r.n(L),j=r(6),w=r(14),k=r.n(w),N="https://conduit.productionready.io/api",_=function(){var e=Object(j.a)(F.a.mark((function e(t){var r,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(N,"/users/login"),e.next=3,k.a.post(r,{user:t});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(j.a)(F.a.mark((function e(t){var r,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(N,"/users"),e.next=3,k.a.post(r,{user:t});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(j.a)(F.a.mark((function e(t){var r,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(N,"/user"),e.next=3,k.a.get(r,{headers:t});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(e){return{type:"AUTH_REQUEST",payload:{isProcessing:e}}},U=function(e,t,r,a){var n=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],c=arguments.length>5&&void 0!==arguments[5]&&arguments[5];return localStorage.setItem("token",r),localStorage.setItem("userId",a),{type:"AUTH_SUCCES",payload:{username:e,email:t,token:r,id:a,isLogIn:n,isProcessing:c}}},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:"AUTH_FAILURE",payload:{errors:e,isProcessing:t}}},B=function(){return localStorage.removeItem("token"),localStorage.removeItem("userId"),{type:"LOG_OUT"}},q=r(17),z=q.a().shape({username:q.b().max(20,"Must be shorter").required("Required"),email:q.b().email("Invalid email address").required("Required"),password:q.b().min(8,"Must be longer than 8 characters").max(40,"Must be shorter").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,"Must have one Big or more letter and one or more number").required("Required")}),G=r(309),H=r(176),M=r.n(H),Q=(r(226),Object(s.b)((function(e){return{serverErrors:e.auth.errors}}))((function(e){var t=e.serverErrors;if(!t)return null;var r=n.a.createElement("ul",{className:"ServerErrors"},Object.keys(t).map((function(e,r){return n.a.createElement("li",{key:M.a.uniqueId(r),className:"ServerErrors-Item"},n.a.createElement(G.a,{twoToneColor:"#cf1322"}),n.a.createElement("span",{className:"ServerErrors-ItemText"},"".concat(e,": ").concat(t[e])))})));return n.a.createElement("div",{className:"ServerErrorsWrap"},r)}))),V={username:"",email:"",password:""},W=Object(s.b)((function(e){return{isAuth:!!e.auth.token,isProcessing:e.auth.isProcessing}}),(function(e){return{regFunc:function(t,r,a){return e(function(e,t,r){return function(){var a=Object(j.a)(F.a.mark((function a(n){var c,o,i,s,u,l;return F.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(P(!0)),a.prev=1,a.next=4,I({username:r,email:e,password:t});case 4:c=a.sent,o=c.data.user,i=o.username,s=o.email,u=o.token,l=o.id,n(U(i,s,u,l)),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),n(D(a.t0.response.data.errors));case 12:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}()}(t,r,a))},resetErrorsFunc:function(){return e({type:"RESET_ERRORS"})}}}))((function(e){var t=e.isAuth,r=e.regFunc,a=e.resetErrorsFunc,c=e.isProcessing,o=function(e,t,r,a,c,o,i,s){return n.a.createElement("label",{className:"Form-Label",htmlFor:e},"".concat(r),n.a.createElement(y.a,{className:"Form-Field",type:t,name:e,placeholder:r,id:e,onChange:c,onBlur:o,value:a[e],style:s[e]&&i[e]?{borderColor:"red"}:{}}),s[e]&&i[e]&&n.a.createElement("div",{className:"Form-RequredField"},i[e]))};return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Signup Page"),n.a.createElement("div",{className:"FormWrapper"},n.a.createElement(S.b,{initialValues:V,validationSchema:z,onSubmit:function(e,a){var n=e.email,c=e.password,o=e.username;r(n,c,o),t&&a.resetForm(V)}},(function(e){var t=e.values,r=e.handleChange,a=e.errors,i=e.touched,s=e.handleBlur,u=e.handleSubmit;return n.a.createElement(S.a,{className:"Form",onSubmit:u},o("username","text","User Name",t,r,s,a,i),o("email","email","Email",t,r,s,a,i),o("password","password","Password",t,r,s,a,i),n.a.createElement(C.a,{loading:c,className:"SubmitBtn Btn",type:"primary",htmlType:"submit"},"Sign up"),n.a.createElement(Q,null))})),n.a.createElement(l.b,{to:"".concat("/Reg-Auth-Forms","/login"),onClick:a},"Log in")))})),X={email:"",password:""},J=Object(s.b)((function(e){return{isAuth:!!e.auth.token,isProcessing:e.auth.isProcessing}}),(function(e){return{authFunc:function(t,r){return e(function(e,t){return function(){var r=Object(j.a)(F.a.mark((function r(a){var n,c,o,i,s,u;return F.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(P(!0)),r.prev=1,r.next=4,_({email:e,password:t});case 4:n=r.sent,c=n.data.user,o=c.username,i=c.email,s=c.token,u=c.id,a(U(o,i,s,u)),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),a(D(r.t0.response.data.errors));case 12:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}()}(t,r))},resetErrorsFunc:function(){return e({type:"RESET_ERRORS"})}}}))((function(e){var t=e.isAuth,r=e.authFunc,a=e.resetErrorsFunc,c=e.isProcessing,o=function(e,t,r,a,c,o,i,s){return n.a.createElement("label",{className:"Form-Label",htmlFor:e},"".concat(r),n.a.createElement(y.a,{className:"Form-Field",type:t,name:e,placeholder:r,id:e,onChange:c,onBlur:o,value:a[e],style:s[e]&&i[e]?{borderColor:"red"}:{}}),s[e]&&i[e]&&n.a.createElement("div",{className:"Form-RequredField"},i[e]))};return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Login Page"),n.a.createElement("div",{className:"FormWrapper"},n.a.createElement(S.b,{initialValues:X,onSubmit:function(e,a){var n=e.email,c=e.password;r(n,c),t&&a.resetForm(X)}},(function(e){var t=e.values,r=e.handleChange,a=e.errors,i=e.touched,s=e.handleBlur,u=e.handleSubmit;return n.a.createElement(S.a,{className:"Form",onSubmit:u},o("email","email","Email",t,r,s,a,i),o("password","password","Password",t,r,s,a,i),n.a.createElement(C.a,{loading:c,className:"SubmitBtn Btn",type:"primary",htmlType:"submit"},"Log in"),n.a.createElement(Q,null))})),n.a.createElement(l.b,{to:"".concat("/Reg-Auth-Forms","/signup"),onClick:a},"Signup")))})),Z=(r(282),Object(s.b)((function(e){return{username:e.auth.username}}),(function(e){return{logOutFunc:function(){return e(B())}}}))((function(e){var t=e.username,r=e.logOutFunc,a=function(){r(),localStorage.removeItem("token"),localStorage.removeItem("userId")};return n.a.createElement("div",{className:"UserBioWrap"},n.a.createElement("div",{className:"UserBio"},t),n.a.createElement(C.a,{className:"Btn",type:"primary",onClick:a},"Log out"))}))),$=r(67),K=(r(283),"".concat(N,"/articles")),Y=function(){var e=Object(j.a)(F.a.mark((function e(t){var r,a,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),a={Authorization:"Token ".concat(r)},e.next=4,k.a.post(K,{article:t},{headers:a});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(e){return{type:"CREATE_ARTICLE_FAILURE",payload:e}},te=q.a().shape({title:q.b().required("Required"),description:q.b().required("Required"),content:q.b().required("Required"),tags:q.b()}),re=y.a.TextArea,ae={title:"",description:"",content:"",tags:""},ne=Object(s.b)((function(e){return{isProcessing:e.createArticle.isProcessing}}),(function(e){return{createArticleFunc:function(t){return e(function(e){return function(){var t=Object(j.a)(F.a.mark((function t(r){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"CREATE_ARTICLE_REQUEST"}),t.prev=1,t.next=4,Y(e);case 4:r({type:"CREATE_ARTICLE_SUCCES",payload:void 0}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),r(ee(t.t0.response.data.errors));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=e.createArticleFunc,r=e.isProcessing,c=Object(a.useState)(""),o=Object($.a)(c,2),i=o[0],s=o[1],u=function(e,t,r,a,c,o,i,s,u){return n.a.createElement("label",{className:"CreateArticle-Label",htmlFor:e},"".concat(r),n.a.createElement(u,{className:"CreateArticle-Field",type:t,name:e,placeholder:r,id:e,onChange:c,onBlur:o,value:a[e],style:s[e]&&i[e]?{borderColor:"red"}:{}}),s[e]&&i[e]&&n.a.createElement("div",{className:"CreateArticle-RequiredField"},i[e]))};return n.a.createElement("div",{className:"CreateArticle"},n.a.createElement("h1",null,"New article"),n.a.createElement("div",{className:"CreateArticle-FormWrapper"},n.a.createElement(S.b,{initialValues:ae,validationSchema:te,onSubmit:function(e,r){var a=e.title,n=e.description,c=e.content,o=e.tags,i=""===o?[]:o.split(",");try{t({title:a,description:n,body:c,tagList:i}),s((function(){return"Article was created succssesfully !"}))}catch(u){s((function(){return"Ooops somthing going wrong ".concat(u)}))}r.resetForm()}},(function(e){var t=e.values,a=e.handleChange,c=e.errors,o=e.touched,i=e.handleBlur,s=e.handleSubmit;return n.a.createElement(S.a,{className:"CreateArticle-Form",onSubmit:s},u("title","text","Title",t,a,i,c,o,y.a),u("description","text","Description",t,a,i,c,o,y.a),u("content","text","Article content",t,a,i,c,o,re),u("tags","text","Tags",t,a,i,c,o,y.a),n.a.createElement(C.a,{loading:r,className:"SubmitBtn Btn",type:"primary",htmlType:"submit"},"create article"))})),n.a.createElement("div",{className:"CreateArticle-Response"},i)))})),ce=function(e){var t=e.children;return n.a.createElement("main",null,t)},oe=(r(284),r(310)),ie=function(){var e=Object(j.a)(F.a.mark((function e(t){var r,a,n,c,o;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=localStorage.getItem("token"),a={Authorization:"Token ".concat(r)},n="".concat(N,"/articles?limit=10&offset=").concat(t),r){e.next=8;break}return e.next=6,k.a.get(n);case 6:return c=e.sent,e.abrupt("return",c);case 8:return e.next=10,k.a.get(n,{headers:a});case 10:return o=e.sent,e.abrupt("return",o);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(j.a)(F.a.mark((function e(t){var r,a,n,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),a={Authorization:"Token ".concat(r)},n="".concat(N,"/articles/").concat(t,"/favorite"),e.next=5,k.a.post(n,null,{headers:a});case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=Object(j.a)(F.a.mark((function e(t){var r,a,n,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),a={Authorization:"Token ".concat(r)},n="".concat(N,"/articles/").concat(t,"/favorite"),e.next=5,k.a.delete(n,{headers:a});case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le=function(e){return{type:"GET_ARTICLES_FAILURE",payload:e}},me=function(e){return{type:"ARTICLE_FAVORITED",payload:e}},pe=function(e){return function(){var t=Object(j.a)(F.a.mark((function t(r){var a;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,se(e);case 3:a=t.sent,r(me(a.data)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),r(le(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},de=function(e){return function(){var t=Object(j.a)(F.a.mark((function t(r){var a;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ue(e);case 3:a=t.sent,r(me(a.data)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),r(le(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},Ee=function(){var e=Object(j.a)(F.a.mark((function e(t){var r,a,n,c,o;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=localStorage.getItem("token"),a={Authorization:"Token ".concat(r)},n="".concat(N,"/articles/").concat(t),r){e.next=8;break}return e.next=6,k.a.get(n);case 6:return c=e.sent,e.abrupt("return",c);case 8:return e.next=10,k.a.get(n,{headers:a});case 10:return o=e.sent,e.abrupt("return",o);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fe=function(){var e=Object(j.a)(F.a.mark((function e(t){var r,a,n,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(N,"/articles/").concat(t),a=localStorage.getItem("token"),n={Authorization:"Token ".concat(a)},e.next=5,k.a.delete(r,{headers:n});case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ge=Object(s.b)((function(e){return{username:e.auth.username,deleteProcessing:e.deleteArticle.isProcessing}}),(function(e){return{favoriteArticleFunc:function(t){return e(pe(t))},unfavoriteArticleFunc:function(t){return e(de(t))},deleteArticleFunc:function(t){return e(function(e){return function(){var t=Object(j.a)(F.a.mark((function t(r){var a;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"DELETE_ARTICLE_REQUEST"}),t.prev=1,t.next=4,fe(e);case 4:return a=t.sent,r({type:"DELETE_ARTICLE_SUCCES"}),t.abrupt("return",a);case 9:return t.prev=9,t.t0=t.catch(1),r({type:"DELETE_ARTICLE_FAILURE",payload:t.t0.response.data.errors}),t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(Object(T.h)((function(e){var t=e.match.params.slug,r=e.favoriteArticleFunc,c=e.unfavoriteArticleFunc,o=e.username,i=e.deleteProcessing,s=e.deleteArticleFunc,u=Object(a.useState)(null),l=Object($.a)(u,2),p=l[0],d=l[1],E=Object(T.g)();if(Object(a.useEffect)((function(){Ee(t).then((function(e){return e.data})).then((function(e){return e.article})).then((function(e){return d((function(){return e}))}))}),[t]),null===p)return n.a.createElement("div",null,"Article is loading...");var f=p.favorited,g=p.favoritesCount,v="LikeButton";return f&&(v="LikeButton LikeButton__Liked"),n.a.createElement("div",{className:"Article"},n.a.createElement("div",{className:"Article-Meta"},n.a.createElement("div",{className:"Meta-Date"},new Date(p.createdAt).toDateString()),n.a.createElement("div",{className:"Meta-Author"},p.author.username)),n.a.createElement("h1",{className:"Article-Header"},p.title),n.a.createElement("div",{className:"Article-Description"},p.description),n.a.createElement("div",{className:"Article-Body"},p.body),n.a.createElement("ul",{className:"Article-TagsList"},p.tagList.map((function(e){return n.a.createElement("li",{key:e,className:"TagList-Item"},e)}))),n.a.createElement("div",{className:"Likes"},n.a.createElement("button",{className:v,type:"button",onClick:function(e){e.preventDefault(),e.stopPropagation(),f?(c(t),d((function(){return Object(m.a)(Object(m.a)({},p),{},{favorited:!f,favoritesCount:g-1})}))):(r(t),d((function(){return Object(m.a)(Object(m.a)({},p),{},{favorited:!f,favoritesCount:g+1})})))}},n.a.createElement(oe.a,null),g)),p.author.username===o?n.a.createElement("div",{className:"Article-Buttons"},n.a.createElement(C.a,{className:"Buttons-UpdateBtn",onClick:function(){E.push("".concat("/Reg-Auth-Forms","/articles/").concat(t,"/edit"))}},"Update article"),n.a.createElement(C.a,{danger:!0,loading:i,className:"Buttons-UpdateBtn",onClick:function(){s(t).then((function(e){200===e.status&&E.push("".concat("/Reg-Auth-Forms","/"))}))}},"Delete article"),n.a.createElement("div",{className:"Article-DeliteError"})):null)}))),ve=(r(285),Object(s.b)(null,(function(e){return{favoriteArticleFunc:function(t){return e(pe(t))},unfavoriteArticleFunc:function(t){return e(de(t))}}}))((function(e){var t=e.article,r=t.slug,a=t.title,c=t.description,o=t.tagList,i=t.favorited,s=t.favoritesCount,u=t.createdAt,l=t.author.username,m=e.favoriteArticleFunc,p=e.unfavoriteArticleFunc,d=Object(T.g)(),E=function(e){e.preventDefault(),d.push("".concat("/Reg-Auth-Forms","/articles/").concat(r))},f="LikeButton";return i&&(f="LikeButton LikeButton__Liked"),n.a.createElement("div",{className:"ArticlePreview",onClick:E,onKeyDown:E,role:"button",tabIndex:"0"},n.a.createElement("div",{className:"ArticlePreview-AuthorDateLikesRow"},n.a.createElement("div",{className:"AuthorDate"},n.a.createElement("span",{className:"Author"},l),n.a.createElement("span",{className:"Date"},new Date(u).toDateString())),n.a.createElement("div",{className:"Likes"},n.a.createElement("button",{className:f,type:"button",onClick:function(e){e.preventDefault(),e.stopPropagation(),i?p(r):m(r)}},n.a.createElement(oe.a,null),s))),n.a.createElement("div",{className:"ArticlePreview-HeaderDescriptionRow"},n.a.createElement("h1",null,a),n.a.createElement("span",null,c)),n.a.createElement("div",{className:"ArticlePreview-TagsRow"},n.a.createElement("ul",{className:"TagList"},o.map((function(e){return n.a.createElement("li",{className:"TagList-Item",key:e},e)})))))}))),he=r(306),be=Object(s.b)((function(e){return{articlesCount:e.getArticles.articlesCount,currentPage:e.getArticles.currentPage}}),(function(e){return{switchPage:function(t){return e({type:"ARTICLES_PAGINATION",payload:t})}}}))((function(e){var t=e.articlesCount,r=e.currentPage,a=e.switchPage;return n.a.createElement(he.a,{showSizeChanger:!1,current:r,total:t,onChange:function(e){a({currentPage:e})}})})),Ae=(r(302),Object(s.b)((function(e){return{articles:e.getArticles.articles,isLoading:e.getArticles.isLoading,errors:e.getArticles.errors,offset:1===e.getArticles.currentPage?0:Math.floor(10*(e.getArticles.currentPage-1))}}),(function(e){return{getArticlesFunc:function(t){return e(function(e){return function(){var t=Object(j.a)(F.a.mark((function t(r){var a;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"GET_ARTICLES_REQUEST"}),t.prev=1,t.next=4,ie(e);case 4:a=t.sent,r({type:"GET_ARTICLES_SUCCES",payload:a.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r(le(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=e.articles,r=e.isLoading,c=e.errors,o=e.getArticlesFunc,i=e.offset;return Object(a.useEffect)((function(){o(i)}),[o,i]),r?n.a.createElement("div",null,"Articles is loading..."):c?n.a.createElement("div",null,"Something went wrong ",c):n.a.createElement("div",{className:"ArticleList"},t.map((function(e){return n.a.createElement(ve,{key:e.slug,article:e})})),n.a.createElement(be,null))}))),Oe=(r(303),function(e){var t=e.isLogIn,r=n.a.createElement("nav",{className:"Navigation"},n.a.createElement(l.b,{exact:!0,className:"Navigation-Link",to:"".concat("/Reg-Auth-Forms","/")},"Home page"),n.a.createElement(l.b,{className:"Navigation-Link",to:"".concat("/Reg-Auth-Forms","/login")},"Log in"),n.a.createElement(l.b,{className:"Navigation-Link",to:"".concat("/Reg-Auth-Forms","/signup")},"Signup"));return t&&(r=n.a.createElement("nav",{className:"Navigation"},n.a.createElement(l.b,{className:"Navigation-Link",to:"".concat("/Reg-Auth-Forms","/"),exact:!0},"Home page"),n.a.createElement(l.b,{className:"Navigation-Link",to:"".concat("/Reg-Auth-Forms","/add")},"Create article"))),r}),Re=(r(304),q.a().shape({title:q.b().required("Required"),description:q.b().required("Required"),content:q.b().required("Required"),tags:q.b()})),Te=function(){var e=Object(j.a)(F.a.mark((function e(t,r){var a,n,c,o;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(N,"/articles/").concat(r),n=localStorage.getItem("token"),c={Authorization:"Token ".concat(n)},e.next=5,k.a.put(a,{article:t},{headers:c});case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),ye=y.a.TextArea,Ce=Object(s.b)((function(e){return{isProcessing:e.updateArticle.isProcessing}}),(function(e){return{updateArticleFunc:function(t,r){return e(function(e,t){return function(){var r=Object(j.a)(F.a.mark((function r(a){var n;return F.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a({type:"UPDATE_ARTICLE_REQUEST"}),r.prev=1,r.next=4,Te(e,t);case 4:return n=r.sent,a({type:"UPDATE_ARTICLE_SUCCES"}),r.abrupt("return",n.data.article);case 9:return r.prev=9,r.t0=r.catch(1),a({type:"UPDATE_ARTICLE_FAILURE",payload:r.t0.response.data.errors}),r.abrupt("return",r.t0);case 13:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}()}(t,r))}}}))(Object(T.h)((function(e){var t=e.match.params.slug,r=e.updateArticleFunc,c=e.isProcessing,o=Object(a.useState)(null),i=Object($.a)(o,2),s=i[0],u=i[1],l=Object(a.useState)(""),m=Object($.a)(l,2),p=m[0],d=m[1],E=Object(T.g)();if(Object(a.useEffect)((function(){Ee(t).then((function(e){return e.data})).then((function(e){return e.article})).then((function(e){return u((function(){return e}))}))}),[t]),null===s)return n.a.createElement("div",null,"Article is loading...");var f=function(e,t,r,a,c,o,i,s,u){return n.a.createElement("label",{className:"ArticleEditor-Label",htmlFor:e},"".concat(r),n.a.createElement(u,{className:"ArticleEditor-Field",type:t,name:e,placeholder:r,id:e,onChange:c,onBlur:o,value:a[e],style:s[e]&&i[e]?{borderColor:"red"}:{}}),s[e]&&i[e]&&n.a.createElement("div",{className:"ArticleEditor-RequiredField"},i[e]))},g={title:s.title,description:s.description,content:s.body,tags:s.tagList.length>0?s.tagList.join(", "):""};return n.a.createElement("div",{className:"ArticleEditor"},n.a.createElement("h1",null,"Update article"),n.a.createElement("div",{className:"ArticleEditor-FormWrapper"},n.a.createElement(S.b,{initialValues:g,validationSchema:Re,onSubmit:function(e){var t=e.title,a=e.description,n=e.content,c=e.tags,o=""===c?[]:c.split(",");try{r({title:t,description:a,body:n,tagList:o},s.slug).then((function(e){E.push("".concat("/Reg-Auth-Forms","/articles/").concat(e.slug))}))}catch(i){d((function(){return"Somthing going wrong: ".concat(i)}))}}},(function(e){var t=e.values,r=e.handleChange,a=e.errors,o=e.touched,i=e.handleBlur,s=e.handleSubmit;return n.a.createElement(S.a,{className:"ArticleEditor-Form",onSubmit:s},f("title","text","Title",t,r,i,a,o,y.a),f("description","text","Description",t,r,i,a,o,y.a),f("content","text","Article content",t,r,i,a,o,ye),f("tags","text","Tags",t,r,i,a,o,y.a),n.a.createElement(C.a,{loading:c,className:"SubmitBtn Btn",type:"primary",htmlType:"submit"},"Update article"))})),n.a.createElement("div",{className:"ArticleEditor-Response"},p)))})));var Se=Object(s.b)((function(e){return{isAuth:!!e.auth.token}}),(function(e){return{autoLogInFunc:function(){return e(function(){var e=Object(j.a)(F.a.mark((function e(t){var r,a,n,c,o,i,s,u;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t(P(!0)),e.prev=1,r=localStorage.getItem("token")){e.next=6;break}return t(B()),e.abrupt("return");case 6:return a={Authorization:"Token ".concat(r)},e.next=9,x(a);case 9:n=e.sent,c=n.data.user,o=c.username,i=c.email,s=c.token,u=c.id,t(U(o,i,s,u)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),t(D(e.t0.response.data.errors));case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.isAuth,r=e.autoLogInFunc;Object(a.useEffect)((function(){r()}));var c=n.a.createElement("div",{className:"App"},n.a.createElement(Oe,{isLogIn:!1}),n.a.createElement(T.d,null,n.a.createElement(T.b,{exact:!0,path:"".concat("/Reg-Auth-Forms","/"),component:Ae}),n.a.createElement(T.b,{path:"".concat("/Reg-Auth-Forms","/articles/:slug"),component:ge}),n.a.createElement(T.b,{exact:!0,path:"".concat("/Reg-Auth-Forms","/signup"),component:W}),n.a.createElement(T.b,{exact:!0,path:"".concat("/Reg-Auth-Forms","/login"),component:J}),n.a.createElement(T.b,{exact:!0,path:"".concat("/Reg-Auth-Forms","/add"),component:ne}),n.a.createElement(T.a,{to:"".concat("/Reg-Auth-Forms","/")})));return t&&(c=n.a.createElement("div",{className:"App"},n.a.createElement(Oe,{isLogIn:!0}),n.a.createElement(Z,null),n.a.createElement(T.d,null,n.a.createElement(T.b,{exact:!0,path:"".concat("/Reg-Auth-Forms","/"),component:Ae}),n.a.createElement(T.b,{exact:!0,path:"".concat("/Reg-Auth-Forms","/articles/:slug"),component:ge}),n.a.createElement(T.b,{exact:!0,path:"".concat("/Reg-Auth-Forms","/articles/:slug/edit"),component:Ce}),n.a.createElement(T.b,{exact:!0,path:"".concat("/Reg-Auth-Forms","/add"),component:ne}),n.a.createElement(T.a,{to:"".concat("/Reg-Auth-Forms","/")})))),n.a.createElement(ce,null,c)})),Le="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):i.d,Fe=Object(i.e)(R,Le(Object(i.a)(u.a))),je=n.a.createElement(l.a,null,n.a.createElement(s.a,{store:Fe},n.a.createElement(Se,null)));o.a.render(je,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[196,1,2]]]);
//# sourceMappingURL=main.f5029be4.chunk.js.map