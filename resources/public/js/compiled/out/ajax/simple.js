// Compiled by ClojureScript 1.8.51 {}
goog.provide('ajax.simple');
goog.require('cljs.core');
goog.require('ajax.formats');
goog.require('ajax.protocols');
goog.require('ajax.interceptors');
goog.require('goog.net.XhrIo');
goog.require('ajax.util');
goog.require('clojure.string');
ajax.simple.normalize_method = (function ajax$simple$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.simple.process_response = (function ajax$simple$process_response(response,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response);
});
ajax.simple.js_handler = (function ajax$simple$js_handler(var_args){
var args8496 = [];
var len__7664__auto___8499 = arguments.length;
var i__7665__auto___8500 = (0);
while(true){
if((i__7665__auto___8500 < len__7664__auto___8499)){
args8496.push((arguments[i__7665__auto___8500]));

var G__8501 = (i__7665__auto___8500 + (1));
i__7665__auto___8500 = G__8501;
continue;
} else {
}
break;
}

var G__8498 = args8496.length;
switch (G__8498) {
case 3:
return ajax.simple.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.simple.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.simple.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8496.length)].join('')));

}
});

ajax.simple.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (handler,interceptors,response){
var processed = cljs.core.reduce.call(null,ajax.simple.process_response,response,interceptors);
return handler.call(null,processed);
});

ajax.simple.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (handler,interceptors){
return (function (response){
var processed = cljs.core.reduce.call(null,ajax.simple.process_response,response,interceptors);
return handler.call(null,processed);
});
});

ajax.simple.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return (function (interceptors,response){
var processed = cljs.core.reduce.call(null,ajax.simple.process_response,response,interceptors);
return handler.call(null,processed);
});
});

ajax.simple.js_handler.cljs$lang$maxFixedArity = 3;
ajax.simple.base_handler = (function ajax$simple$base_handler(interceptors,p__8503){
var map__8506 = p__8503;
var map__8506__$1 = ((((!((map__8506 == null)))?((((map__8506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8506):map__8506);
var handler = cljs.core.get.call(null,map__8506__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.simple.js_handler.call(null,handler,interceptors);
} else {
return ajax.util.throw_error.call(null,"No ajax handler provided.");
}
});
ajax.simple.default_interceptors = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
ajax.simple.normalize_request = (function ajax$simple$normalize_request(request){
var response_format = ajax.interceptors.get_response_format.call(null,ajax.formats.detect_response_format,request);
return cljs.core.update.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"method","method",55703592),ajax.simple.normalize_method),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),((function (response_format){
return (function (p1__8508_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__6594__auto__ = p1__8508_SHARP_;
if(cljs.core.truth_(or__6594__auto__)){
return or__6594__auto__;
} else {
return cljs.core.deref.call(null,ajax.simple.default_interceptors);
}
})(),ajax.interceptors.request_interceptors);
});})(response_format))
);
});
ajax.simple.new_default_api = (function ajax$simple$new_default_api(){
return (new goog.net.XhrIo());
});
ajax.simple.process_request = (function ajax$simple$process_request(request,interceptor){

return ajax.protocols._process_request.call(null,interceptor,request);
});
ajax.simple.raw_ajax_request = (function ajax$simple$raw_ajax_request(p__8509){
var map__8512 = p__8509;
var map__8512__$1 = ((((!((map__8512 == null)))?((((map__8512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8512):map__8512);
var request = map__8512__$1;
var interceptors = cljs.core.get.call(null,map__8512__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));

var request__$1 = cljs.core.reduce.call(null,ajax.simple.process_request,request,interceptors);
var handler = ajax.simple.base_handler.call(null,cljs.core.reverse.call(null,interceptors),request__$1);
var api = (function (){var or__6594__auto__ = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__6594__auto__)){
return or__6594__auto__;
} else {
return ajax.simple.new_default_api.call(null);
}
})();
return ajax.protocols._js_ajax_request.call(null,api,request__$1,handler);
});
ajax.simple.ajax_request = (function ajax$simple$ajax_request(request){
return ajax.simple.raw_ajax_request.call(null,ajax.simple.normalize_request.call(null,request));
});

//# sourceMappingURL=simple.js.map