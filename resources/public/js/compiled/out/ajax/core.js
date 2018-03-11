// Compiled by ClojureScript 1.8.51 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('ajax.json');
goog.require('ajax.formats');
goog.require('ajax.protocols');
goog.require('ajax.interceptors');
goog.require('ajax.xml_http_request');
goog.require('ajax.util');
goog.require('ajax.transit');
goog.require('ajax.url');
goog.require('ajax.ring');
goog.require('ajax.easy');
goog.require('ajax.simple');
goog.require('clojure.string');
goog.require('ajax.xhrio');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
ajax.core.abort = (function ajax$core$abort(this$){

return ajax.protocols._abort.call(null,this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__7671__auto__ = [];
var len__7664__auto___8564 = arguments.length;
var i__7665__auto___8565 = (0);
while(true){
if((i__7665__auto___8565 < len__7664__auto___8564)){
args__7671__auto__.push((arguments[i__7665__auto___8565]));

var G__8566 = (i__7665__auto___8565 + (1));
i__7665__auto___8565 = G__8566;
continue;
} else {
}
break;
}

var argseq__7672__auto__ = ((((1) < args__7671__auto__.length))?(new cljs.core.IndexedSeq(args__7671__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7672__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7959__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__7959__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__7959__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq8562){
var G__8563 = cljs.core.first.call(null,seq8562);
var seq8562__$1 = cljs.core.next.call(null,seq8562);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__8563,seq8562__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__7671__auto__ = [];
var len__7664__auto___8569 = arguments.length;
var i__7665__auto___8570 = (0);
while(true){
if((i__7665__auto___8570 < len__7664__auto___8569)){
args__7671__auto__.push((arguments[i__7665__auto___8570]));

var G__8571 = (i__7665__auto___8570 + (1));
i__7665__auto___8570 = G__8571;
continue;
} else {
}
break;
}

var argseq__7672__auto__ = ((((1) < args__7671__auto__.length))?(new cljs.core.IndexedSeq(args__7671__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7672__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7959__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__7959__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__7959__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq8567){
var G__8568 = cljs.core.first.call(null,seq8567);
var seq8567__$1 = cljs.core.next.call(null,seq8567);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__8568,seq8567__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__7671__auto__ = [];
var len__7664__auto___8574 = arguments.length;
var i__7665__auto___8575 = (0);
while(true){
if((i__7665__auto___8575 < len__7664__auto___8574)){
args__7671__auto__.push((arguments[i__7665__auto___8575]));

var G__8576 = (i__7665__auto___8575 + (1));
i__7665__auto___8575 = G__8576;
continue;
} else {
}
break;
}

var argseq__7672__auto__ = ((((1) < args__7671__auto__.length))?(new cljs.core.IndexedSeq(args__7671__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7672__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7959__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__7959__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__7959__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq8572){
var G__8573 = cljs.core.first.call(null,seq8572);
var seq8572__$1 = cljs.core.next.call(null,seq8572);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__8573,seq8572__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__7671__auto__ = [];
var len__7664__auto___8579 = arguments.length;
var i__7665__auto___8580 = (0);
while(true){
if((i__7665__auto___8580 < len__7664__auto___8579)){
args__7671__auto__.push((arguments[i__7665__auto___8580]));

var G__8581 = (i__7665__auto___8580 + (1));
i__7665__auto___8580 = G__8581;
continue;
} else {
}
break;
}

var argseq__7672__auto__ = ((((1) < args__7671__auto__.length))?(new cljs.core.IndexedSeq(args__7671__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7672__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7959__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__7959__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__7959__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq8577){
var G__8578 = cljs.core.first.call(null,seq8577);
var seq8577__$1 = cljs.core.next.call(null,seq8577);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__8578,seq8577__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__7671__auto__ = [];
var len__7664__auto___8584 = arguments.length;
var i__7665__auto___8585 = (0);
while(true){
if((i__7665__auto___8585 < len__7664__auto___8584)){
args__7671__auto__.push((arguments[i__7665__auto___8585]));

var G__8586 = (i__7665__auto___8585 + (1));
i__7665__auto___8585 = G__8586;
continue;
} else {
}
break;
}

var argseq__7672__auto__ = ((((1) < args__7671__auto__.length))?(new cljs.core.IndexedSeq(args__7671__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7672__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7959__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__7959__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__7959__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq8582){
var G__8583 = cljs.core.first.call(null,seq8582);
var seq8582__$1 = cljs.core.next.call(null,seq8582);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__8583,seq8582__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__7671__auto__ = [];
var len__7664__auto___8589 = arguments.length;
var i__7665__auto___8590 = (0);
while(true){
if((i__7665__auto___8590 < len__7664__auto___8589)){
args__7671__auto__.push((arguments[i__7665__auto___8590]));

var G__8591 = (i__7665__auto___8590 + (1));
i__7665__auto___8590 = G__8591;
continue;
} else {
}
break;
}

var argseq__7672__auto__ = ((((1) < args__7671__auto__.length))?(new cljs.core.IndexedSeq(args__7671__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7672__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7959__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__7959__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__7959__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq8587){
var G__8588 = cljs.core.first.call(null,seq8587);
var seq8587__$1 = cljs.core.next.call(null,seq8587);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__8588,seq8587__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__7671__auto__ = [];
var len__7664__auto___8594 = arguments.length;
var i__7665__auto___8595 = (0);
while(true){
if((i__7665__auto___8595 < len__7664__auto___8594)){
args__7671__auto__.push((arguments[i__7665__auto___8595]));

var G__8596 = (i__7665__auto___8595 + (1));
i__7665__auto___8595 = G__8596;
continue;
} else {
}
break;
}

var argseq__7672__auto__ = ((((1) < args__7671__auto__.length))?(new cljs.core.IndexedSeq(args__7671__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7672__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7959__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__7959__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__7959__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq8592){
var G__8593 = cljs.core.first.call(null,seq8592);
var seq8592__$1 = cljs.core.next.call(null,seq8592);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__8593,seq8592__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__7671__auto__ = [];
var len__7664__auto___8599 = arguments.length;
var i__7665__auto___8600 = (0);
while(true){
if((i__7665__auto___8600 < len__7664__auto___8599)){
args__7671__auto__.push((arguments[i__7665__auto___8600]));

var G__8601 = (i__7665__auto___8600 + (1));
i__7665__auto___8600 = G__8601;
continue;
} else {
}
break;
}

var argseq__7672__auto__ = ((((1) < args__7671__auto__.length))?(new cljs.core.IndexedSeq(args__7671__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7672__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7959__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__7959__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__7959__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq8597){
var G__8598 = cljs.core.first.call(null,seq8597);
var seq8597__$1 = cljs.core.next.call(null,seq8597);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__8598,seq8597__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__7671__auto__ = [];
var len__7664__auto___8604 = arguments.length;
var i__7665__auto___8605 = (0);
while(true){
if((i__7665__auto___8605 < len__7664__auto___8604)){
args__7671__auto__.push((arguments[i__7665__auto___8605]));

var G__8606 = (i__7665__auto___8605 + (1));
i__7665__auto___8605 = G__8606;
continue;
} else {
}
break;
}

var argseq__7672__auto__ = ((((1) < args__7671__auto__.length))?(new cljs.core.IndexedSeq(args__7671__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7672__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7959__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__7959__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__7959__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq8602){
var G__8603 = cljs.core.first.call(null,seq8602);
var seq8602__$1 = cljs.core.next.call(null,seq8602);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__8603,seq8602__$1);
});

//# sourceMappingURL=core.js.map