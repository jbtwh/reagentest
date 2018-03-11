// Compiled by ClojureScript 1.8.51 {}
goog.provide('ajax.ring');
goog.require('cljs.core');
goog.require('ajax.interceptors');
goog.require('ajax.protocols');
goog.require('ajax.formats');
ajax.ring.make_ring_read = (function ajax$ring$make_ring_read(body_read){
return (function ajax$ring$make_ring_read_$_ring_read(response){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),ajax.protocols._status.call(null,response),new cljs.core.Keyword(null,"headers","headers",-835030129),ajax.protocols._get_all_headers.call(null,response),new cljs.core.Keyword(null,"body","body",-2049205669),body_read.call(null,response)], null);
});
});
/**
 * Returns a Ring-compatible response map.
 * 
 * Optionally can be passed a :format option. This should be another
 * response-format map. If format is provided it will be used to
 * specify the content-type, and the read method will be used to
 * populate the :body key in the response map.
 */
ajax.ring.ring_response_format = (function ajax$ring$ring_response_format(var_args){
var args8482 = [];
var len__7664__auto___8490 = arguments.length;
var i__7665__auto___8491 = (0);
while(true){
if((i__7665__auto___8491 < len__7664__auto___8490)){
args8482.push((arguments[i__7665__auto___8491]));

var G__8492 = (i__7665__auto___8491 + (1));
i__7665__auto___8491 = G__8492;
continue;
} else {
}
break;
}

var G__8484 = args8482.length;
switch (G__8484) {
case 0:
return ajax.ring.ring_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.ring.ring_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8482.length)].join('')));

}
});

ajax.ring.ring_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.ring.ring_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),ajax.formats.raw_response_format.call(null)], null));
});

ajax.ring.ring_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__8485){
var map__8486 = p__8485;
var map__8486__$1 = ((((!((map__8486 == null)))?((((map__8486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8486):map__8486);
var map__8487 = cljs.core.get.call(null,map__8486__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var map__8487__$1 = ((((!((map__8487 == null)))?((((map__8487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8487):map__8487);
var read = cljs.core.get.call(null,map__8487__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var description = cljs.core.get.call(null,map__8487__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var content_type = cljs.core.get.call(null,map__8487__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
return ajax.interceptors.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.ring.make_ring_read.call(null,read),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("ring/"),cljs.core.str(description)].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),content_type], null));
});

ajax.ring.ring_response_format.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=ring.js.map