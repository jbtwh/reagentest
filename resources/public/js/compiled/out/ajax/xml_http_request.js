// Compiled by ClojureScript 1.8.51 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str(current),cljs.core.str(", "),cljs.core.str(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.call(null,(function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.call(null,headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = true;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__8257,handler){
var map__8258 = p__8257;
var map__8258__$1 = ((((!((map__8258 == null)))?((((map__8258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8258):map__8258);
var uri = cljs.core.get.call(null,map__8258__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__8258__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__8258__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__8258__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__8258__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__8258__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__8258__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__8258,map__8258__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__8256_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__8256_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__8258,map__8258__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___8266 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___8266)){
var response_type_8267 = temp__4657__auto___8266;
this$__$1.responseType = cljs.core.name.call(null,response_type_8267);
} else {
}

var seq__8260_8268 = cljs.core.seq.call(null,headers);
var chunk__8261_8269 = null;
var count__8262_8270 = (0);
var i__8263_8271 = (0);
while(true){
if((i__8263_8271 < count__8262_8270)){
var vec__8264_8272 = cljs.core._nth.call(null,chunk__8261_8269,i__8263_8271);
var k_8273 = cljs.core.nth.call(null,vec__8264_8272,(0),null);
var v_8274 = cljs.core.nth.call(null,vec__8264_8272,(1),null);
this$__$1.setRequestHeader(k_8273,v_8274);

var G__8275 = seq__8260_8268;
var G__8276 = chunk__8261_8269;
var G__8277 = count__8262_8270;
var G__8278 = (i__8263_8271 + (1));
seq__8260_8268 = G__8275;
chunk__8261_8269 = G__8276;
count__8262_8270 = G__8277;
i__8263_8271 = G__8278;
continue;
} else {
var temp__4657__auto___8279 = cljs.core.seq.call(null,seq__8260_8268);
if(temp__4657__auto___8279){
var seq__8260_8280__$1 = temp__4657__auto___8279;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8260_8280__$1)){
var c__7405__auto___8281 = cljs.core.chunk_first.call(null,seq__8260_8280__$1);
var G__8282 = cljs.core.chunk_rest.call(null,seq__8260_8280__$1);
var G__8283 = c__7405__auto___8281;
var G__8284 = cljs.core.count.call(null,c__7405__auto___8281);
var G__8285 = (0);
seq__8260_8268 = G__8282;
chunk__8261_8269 = G__8283;
count__8262_8270 = G__8284;
i__8263_8271 = G__8285;
continue;
} else {
var vec__8265_8286 = cljs.core.first.call(null,seq__8260_8280__$1);
var k_8287 = cljs.core.nth.call(null,vec__8265_8286,(0),null);
var v_8288 = cljs.core.nth.call(null,vec__8265_8286,(1),null);
this$__$1.setRequestHeader(k_8287,v_8288);

var G__8289 = cljs.core.next.call(null,seq__8260_8280__$1);
var G__8290 = null;
var G__8291 = (0);
var G__8292 = (0);
seq__8260_8268 = G__8289;
chunk__8261_8269 = G__8290;
count__8262_8270 = G__8291;
i__8263_8271 = G__8292;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__6594__auto__ = body;
if(cljs.core.truth_(or__6594__auto__)){
return or__6594__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = true;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = true;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map