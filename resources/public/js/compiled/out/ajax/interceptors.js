// Compiled by ClojureScript 1.8.51 {}
goog.provide('ajax.interceptors');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.util');
goog.require('ajax.url');
goog.require('ajax.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7216__auto__,k__7217__auto__){
var self__ = this;
var this__7216__auto____$1 = this;
return cljs.core._lookup.call(null,this__7216__auto____$1,k__7217__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7218__auto__,k7968,else__7219__auto__){
var self__ = this;
var this__7218__auto____$1 = this;
var G__7970 = (((k7968 instanceof cljs.core.Keyword))?k7968.fqn:null);
switch (G__7970) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k7968,else__7219__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = true;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__7971,opts){
var self__ = this;
var map__7972 = p__7971;
var map__7972__$1 = ((((!((map__7972 == null)))?((((map__7972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7972):map__7972);
var request__$1 = cljs.core.get.call(null,map__7972__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__7974 = this;
var map__7974__$1 = ((((!((map__7974 == null)))?((((map__7974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7974):map__7974);
var request__$2 = cljs.core.get.call(null,map__7974__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__7976,xhrio){
var self__ = this;
var map__7977 = p__7976;
var map__7977__$1 = ((((!((map__7977 == null)))?((((map__7977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7977):map__7977);
var response__$1 = cljs.core.get.call(null,map__7977__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__7979 = this;
var map__7979__$1 = ((((!((map__7979 == null)))?((((map__7979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7979):map__7979);
var response__$2 = cljs.core.get.call(null,map__7979__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7230__auto__,writer__7231__auto__,opts__7232__auto__){
var self__ = this;
var this__7230__auto____$1 = this;
var pr_pair__7233__auto__ = ((function (this__7230__auto____$1){
return (function (keyval__7234__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7231__auto__,cljs.core.pr_writer,""," ","",opts__7232__auto__,keyval__7234__auto__);
});})(this__7230__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7231__auto__,pr_pair__7233__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__7232__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$ = true;

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7967){
var self__ = this;
var G__7967__$1 = this;
return (new cljs.core.RecordIter((0),G__7967__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7214__auto__){
var self__ = this;
var this__7214__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7210__auto__){
var self__ = this;
var this__7210__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7220__auto__){
var self__ = this;
var this__7220__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7211__auto__){
var self__ = this;
var this__7211__auto____$1 = this;
var h__7029__auto__ = self__.__hash;
if(!((h__7029__auto__ == null))){
return h__7029__auto__;
} else {
var h__7029__auto____$1 = cljs.core.hash_imap.call(null,this__7211__auto____$1);
self__.__hash = h__7029__auto____$1;

return h__7029__auto____$1;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7212__auto__,other__7213__auto__){
var self__ = this;
var this__7212__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6582__auto__ = other__7213__auto__;
if(cljs.core.truth_(and__6582__auto__)){
var and__6582__auto____$1 = (this__7212__auto____$1.constructor === other__7213__auto__.constructor);
if(and__6582__auto____$1){
return cljs.core.equiv_map.call(null,this__7212__auto____$1,other__7213__auto__);
} else {
return and__6582__auto____$1;
}
} else {
return and__6582__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7225__auto__,k__7226__auto__){
var self__ = this;
var this__7225__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__7226__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7225__auto____$1),self__.__meta),k__7226__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7226__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7223__auto__,k__7224__auto__,G__7967){
var self__ = this;
var this__7223__auto____$1 = this;
var pred__7981 = cljs.core.keyword_identical_QMARK_;
var expr__7982 = k__7224__auto__;
if(cljs.core.truth_(pred__7981.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__7982))){
return (new ajax.interceptors.StandardInterceptor(G__7967,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7981.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__7982))){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__7967,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7981.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__7982))){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__7967,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7224__auto__,G__7967),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7228__auto__){
var self__ = this;
var this__7228__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7215__auto__,G__7967){
var self__ = this;
var this__7215__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__7967,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7221__auto__,entry__7222__auto__){
var self__ = this;
var this__7221__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7222__auto__)){
return cljs.core._assoc.call(null,this__7221__auto____$1,cljs.core._nth.call(null,entry__7222__auto__,(0)),cljs.core._nth.call(null,entry__7222__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7221__auto____$1,entry__7222__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__7250__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__7250__auto__,writer__7251__auto__){
return cljs.core._write.call(null,writer__7251__auto__,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__7969){
return (new ajax.interceptors.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__7969),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__7969),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__7969),null,cljs.core.dissoc.call(null,G__7969,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)),null));
});

ajax.interceptors.to_interceptor = (function ajax$interceptors$to_interceptor(m){

return ajax.interceptors.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.interceptors.success_QMARK_ = (function ajax$interceptors$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.interceptors.exception_message = (function ajax$interceptors$exception_message(e){
return e.message;
});
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__7985,xhrio){
var map__7988 = p__7985;
var map__7988__$1 = ((((!((map__7988 == null)))?((((map__7988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7988):map__7988);
var description = cljs.core.get.call(null,map__7988__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(ajax.interceptors.exception_message.call(null,e)),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.interceptors.fail = (function ajax$interceptors$fail(var_args){
var args__7671__auto__ = [];
var len__7664__auto___7994 = arguments.length;
var i__7665__auto___7995 = (0);
while(true){
if((i__7665__auto___7995 < len__7664__auto___7994)){
args__7671__auto__.push((arguments[i__7665__auto___7995]));

var G__7996 = (i__7665__auto___7995 + (1));
i__7665__auto___7995 = G__7996;
continue;
} else {
}
break;
}

var argseq__7672__auto__ = ((((3) < args__7671__auto__.length))?(new cljs.core.IndexedSeq(args__7671__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7672__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq7990){
var G__7991 = cljs.core.first.call(null,seq7990);
var seq7990__$1 = cljs.core.next.call(null,seq7990);
var G__7992 = cljs.core.first.call(null,seq7990__$1);
var seq7990__$2 = cljs.core.next.call(null,seq7990__$1);
var G__7993 = cljs.core.first.call(null,seq7990__$2);
var seq7990__$3 = cljs.core.next.call(null,seq7990__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__7991,G__7992,G__7993,seq7990__$3);
});
ajax.interceptors.content_type_to_request_header = (function ajax$interceptors$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7216__auto__,k__7217__auto__){
var self__ = this;
var this__7216__auto____$1 = this;
return cljs.core._lookup.call(null,this__7216__auto____$1,k__7217__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7218__auto__,k7999,else__7219__auto__){
var self__ = this;
var this__7218__auto____$1 = this;
var G__8001 = (((k7999 instanceof cljs.core.Keyword))?k7999.fqn:null);
switch (G__8001) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k7999,else__7219__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__8002,request){
var self__ = this;
var map__8003 = p__8002;
var map__8003__$1 = ((((!((map__8003 == null)))?((((map__8003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8003):map__8003);
var content_type__$1 = cljs.core.get.call(null,map__8003__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__8005 = this;
var map__8005__$1 = ((((!((map__8005 == null)))?((((map__8005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8005):map__8005);
var content_type__$2 = cljs.core.get.call(null,map__8005__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__8005,map__8005__$1,content_type__$2,map__8003,map__8003__$1,content_type__$1){
return (function (p1__7997_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__6594__auto__ = p1__7997_SHARP_;
if(cljs.core.truth_(or__6594__auto__)){
return or__6594__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__8005,map__8005__$1,content_type__$2,map__8003,map__8003__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__8007,xhrio){
var self__ = this;
var map__8008 = p__8007;
var map__8008__$1 = ((((!((map__8008 == null)))?((((map__8008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8008):map__8008);
var format = map__8008__$1;
var read__$1 = cljs.core.get.call(null,map__8008__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__8010 = this;
var map__8010__$1 = ((((!((map__8010 == null)))?((((map__8010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8010):map__8010);
var format__$1 = map__8010__$1;
var read__$2 = cljs.core.get.call(null,map__8010__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.interceptors.fail,status);
var G__8013 = status;
switch (G__8013) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e8014){if((e8014 instanceof Object)){
var e = e8014;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e8014;

}
}
}
}catch (e8012){if((e8012 instanceof Object)){
var e = e8012;
var message = e.message;
return ajax.interceptors.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e8012;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7230__auto__,writer__7231__auto__,opts__7232__auto__){
var self__ = this;
var this__7230__auto____$1 = this;
var pr_pair__7233__auto__ = ((function (this__7230__auto____$1){
return (function (keyval__7234__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7231__auto__,cljs.core.pr_writer,""," ","",opts__7232__auto__,keyval__7234__auto__);
});})(this__7230__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7231__auto__,pr_pair__7233__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__7232__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$ = true;

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7998){
var self__ = this;
var G__7998__$1 = this;
return (new cljs.core.RecordIter((0),G__7998__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7214__auto__){
var self__ = this;
var this__7214__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7210__auto__){
var self__ = this;
var this__7210__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7220__auto__){
var self__ = this;
var this__7220__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7211__auto__){
var self__ = this;
var this__7211__auto____$1 = this;
var h__7029__auto__ = self__.__hash;
if(!((h__7029__auto__ == null))){
return h__7029__auto__;
} else {
var h__7029__auto____$1 = cljs.core.hash_imap.call(null,this__7211__auto____$1);
self__.__hash = h__7029__auto____$1;

return h__7029__auto____$1;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7212__auto__,other__7213__auto__){
var self__ = this;
var this__7212__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6582__auto__ = other__7213__auto__;
if(cljs.core.truth_(and__6582__auto__)){
var and__6582__auto____$1 = (this__7212__auto____$1.constructor === other__7213__auto__.constructor);
if(and__6582__auto____$1){
return cljs.core.equiv_map.call(null,this__7212__auto____$1,other__7213__auto__);
} else {
return and__6582__auto____$1;
}
} else {
return and__6582__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7225__auto__,k__7226__auto__){
var self__ = this;
var this__7225__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__7226__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7225__auto____$1),self__.__meta),k__7226__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7226__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7223__auto__,k__7224__auto__,G__7998){
var self__ = this;
var this__7223__auto____$1 = this;
var pred__8015 = cljs.core.keyword_identical_QMARK_;
var expr__8016 = k__7224__auto__;
if(cljs.core.truth_(pred__8015.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__8016))){
return (new ajax.interceptors.ResponseFormat(G__7998,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8015.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__8016))){
return (new ajax.interceptors.ResponseFormat(self__.read,G__7998,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8015.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__8016))){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__7998,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7224__auto__,G__7998),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7228__auto__){
var self__ = this;
var this__7228__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7215__auto__,G__7998){
var self__ = this;
var this__7215__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__7998,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7221__auto__,entry__7222__auto__){
var self__ = this;
var this__7221__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7222__auto__)){
return cljs.core._assoc.call(null,this__7221__auto____$1,cljs.core._nth.call(null,entry__7222__auto__,(0)),cljs.core._nth.call(null,entry__7222__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7221__auto____$1,entry__7222__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__7250__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__7250__auto__,writer__7251__auto__){
return cljs.core._write.call(null,writer__7251__auto__,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__8000){
return (new ajax.interceptors.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__8000),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__8000),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__8000),null,cljs.core.dissoc.call(null,G__8000,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)),null));
});

ajax.interceptors.get_request_format = (function ajax$interceptors$get_request_format(format){

if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
ajax.interceptors.apply_request_format = (function ajax$interceptors$apply_request_format(write,params){
return write.call(null,params);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7216__auto__,k__7217__auto__){
var self__ = this;
var this__7216__auto____$1 = this;
return cljs.core._lookup.call(null,this__7216__auto____$1,k__7217__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7218__auto__,k8021,else__7219__auto__){
var self__ = this;
var this__7218__auto____$1 = this;
var G__8023 = k8021;
switch (G__8023) {
default:
return cljs.core.get.call(null,self__.__extmap,k8021,else__7219__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__8024){
var self__ = this;
var map__8025 = p__8024;
var map__8025__$1 = ((((!((map__8025 == null)))?((((map__8025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8025):map__8025);
var request = map__8025__$1;
var uri = cljs.core.get.call(null,map__8025__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__8025__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__8025__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__8025__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__8025__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__8027 = ajax.interceptors.get_request_format.call(null,format);
var map__8027__$1 = ((((!((map__8027 == null)))?((((map__8027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8027):map__8027);
var write = cljs.core.get.call(null,map__8027__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__8027__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.interceptors.apply_request_format.call(null,write,params):ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__6594__auto__ = headers;
if(cljs.core.truth_(or__6594__auto__)){
return or__6594__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.interceptors.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7230__auto__,writer__7231__auto__,opts__7232__auto__){
var self__ = this;
var this__7230__auto____$1 = this;
var pr_pair__7233__auto__ = ((function (this__7230__auto____$1){
return (function (keyval__7234__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7231__auto__,cljs.core.pr_writer,""," ","",opts__7232__auto__,keyval__7234__auto__);
});})(this__7230__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7231__auto__,pr_pair__7233__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__7232__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$ = true;

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8020){
var self__ = this;
var G__8020__$1 = this;
return (new cljs.core.RecordIter((0),G__8020__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7214__auto__){
var self__ = this;
var this__7214__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7210__auto__){
var self__ = this;
var this__7210__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7220__auto__){
var self__ = this;
var this__7220__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7211__auto__){
var self__ = this;
var this__7211__auto____$1 = this;
var h__7029__auto__ = self__.__hash;
if(!((h__7029__auto__ == null))){
return h__7029__auto__;
} else {
var h__7029__auto____$1 = cljs.core.hash_imap.call(null,this__7211__auto____$1);
self__.__hash = h__7029__auto____$1;

return h__7029__auto____$1;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7212__auto__,other__7213__auto__){
var self__ = this;
var this__7212__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6582__auto__ = other__7213__auto__;
if(cljs.core.truth_(and__6582__auto__)){
var and__6582__auto____$1 = (this__7212__auto____$1.constructor === other__7213__auto__.constructor);
if(and__6582__auto____$1){
return cljs.core.equiv_map.call(null,this__7212__auto____$1,other__7213__auto__);
} else {
return and__6582__auto____$1;
}
} else {
return and__6582__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7225__auto__,k__7226__auto__){
var self__ = this;
var this__7225__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__7226__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7225__auto____$1),self__.__meta),k__7226__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7226__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7223__auto__,k__7224__auto__,G__8020){
var self__ = this;
var this__7223__auto____$1 = this;
var pred__8029 = cljs.core.keyword_identical_QMARK_;
var expr__8030 = k__7224__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7224__auto__,G__8020),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7228__auto__){
var self__ = this;
var this__7228__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7215__auto__,G__8020){
var self__ = this;
var this__7215__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__8020,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7221__auto__,entry__7222__auto__){
var self__ = this;
var this__7221__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7222__auto__)){
return cljs.core._assoc.call(null,this__7221__auto____$1,cljs.core._nth.call(null,entry__7222__auto__,(0)),cljs.core._nth.call(null,entry__7222__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7221__auto____$1,entry__7222__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__7250__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__7250__auto__,writer__7251__auto__){
return cljs.core._write.call(null,writer__7251__auto__,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__8022){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.dissoc.call(null,G__8022),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var args8033 = [];
var len__7664__auto___8042 = arguments.length;
var i__7665__auto___8043 = (0);
while(true){
if((i__7665__auto___8043 < len__7664__auto___8042)){
args8033.push((arguments[i__7665__auto___8043]));

var G__8044 = (i__7665__auto___8043 + (1));
i__7665__auto___8043 = G__8044;
continue;
} else {
}
break;
}

var G__8035 = args8033.length;
switch (G__8035) {
case 2:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8033.length)].join('')));

}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__8036,uri){
var map__8037 = p__8036;
var map__8037__$1 = ((((!((map__8037 == null)))?((((map__8037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8037):map__8037);
var vec_strategy = cljs.core.get.call(null,map__8037__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__8037__$1,new cljs.core.Keyword(null,"params","params",710516235));

if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__8039){
var map__8040 = p__8039;
var map__8040__$1 = ((((!((map__8040 == null)))?((((map__8040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8040):map__8040);
var vec_strategy = cljs.core.get.call(null,map__8040__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__8040__$1,new cljs.core.Keyword(null,"params","params",710516235));
return ((function (map__8040,map__8040__$1,vec_strategy,params){
return (function (uri){

if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});
;})(map__8040,map__8040__$1,vec_strategy,params))
});

ajax.interceptors.uri_with_params.cljs$lang$maxFixedArity = 2;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7216__auto__,k__7217__auto__){
var self__ = this;
var this__7216__auto____$1 = this;
return cljs.core._lookup.call(null,this__7216__auto____$1,k__7217__auto__,null);
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7218__auto__,k8047,else__7219__auto__){
var self__ = this;
var this__7218__auto____$1 = this;
var G__8049 = k8047;
switch (G__8049) {
default:
return cljs.core.get.call(null,self__.__extmap,k8047,else__7219__auto__);

}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$ = true;

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__8050){
var self__ = this;
var map__8051 = p__8050;
var map__8051__$1 = ((((!((map__8051 == null)))?((((map__8051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8051):map__8051);
var request = map__8051__$1;
var method = cljs.core.get.call(null,map__8051__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),ajax.interceptors.uri_with_params.call(null,request)));
} else {
return request;
}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7230__auto__,writer__7231__auto__,opts__7232__auto__){
var self__ = this;
var this__7230__auto____$1 = this;
var pr_pair__7233__auto__ = ((function (this__7230__auto____$1){
return (function (keyval__7234__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7231__auto__,cljs.core.pr_writer,""," ","",opts__7232__auto__,keyval__7234__auto__);
});})(this__7230__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7231__auto__,pr_pair__7233__auto__,"#ajax.interceptors.ProcessGet{",", ","}",opts__7232__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$ = true;

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8046){
var self__ = this;
var G__8046__$1 = this;
return (new cljs.core.RecordIter((0),G__8046__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7214__auto__){
var self__ = this;
var this__7214__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7210__auto__){
var self__ = this;
var this__7210__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7220__auto__){
var self__ = this;
var this__7220__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7211__auto__){
var self__ = this;
var this__7211__auto____$1 = this;
var h__7029__auto__ = self__.__hash;
if(!((h__7029__auto__ == null))){
return h__7029__auto__;
} else {
var h__7029__auto____$1 = cljs.core.hash_imap.call(null,this__7211__auto____$1);
self__.__hash = h__7029__auto____$1;

return h__7029__auto____$1;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7212__auto__,other__7213__auto__){
var self__ = this;
var this__7212__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6582__auto__ = other__7213__auto__;
if(cljs.core.truth_(and__6582__auto__)){
var and__6582__auto____$1 = (this__7212__auto____$1.constructor === other__7213__auto__.constructor);
if(and__6582__auto____$1){
return cljs.core.equiv_map.call(null,this__7212__auto____$1,other__7213__auto__);
} else {
return and__6582__auto____$1;
}
} else {
return and__6582__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7225__auto__,k__7226__auto__){
var self__ = this;
var this__7225__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__7226__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7225__auto____$1),self__.__meta),k__7226__auto__);
} else {
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7226__auto__)),null));
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7223__auto__,k__7224__auto__,G__8046){
var self__ = this;
var this__7223__auto____$1 = this;
var pred__8053 = cljs.core.keyword_identical_QMARK_;
var expr__8054 = k__7224__auto__;
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7224__auto__,G__8046),null));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7228__auto__){
var self__ = this;
var this__7228__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7215__auto__,G__8046){
var self__ = this;
var this__7215__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(G__8046,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7221__auto__,entry__7222__auto__){
var self__ = this;
var this__7221__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7222__auto__)){
return cljs.core._assoc.call(null,this__7221__auto____$1,cljs.core._nth.call(null,entry__7222__auto__,(0)),cljs.core._nth.call(null,entry__7222__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7221__auto____$1,entry__7222__auto__);
}
});

ajax.interceptors.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessGet.cljs$lang$type = true;

ajax.interceptors.ProcessGet.cljs$lang$ctorPrSeq = (function (this__7250__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.ProcessGet.cljs$lang$ctorPrWriter = (function (this__7250__auto__,writer__7251__auto__){
return cljs.core._write.call(null,writer__7251__auto__,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.__GT_ProcessGet = (function ajax$interceptors$__GT_ProcessGet(){
return (new ajax.interceptors.ProcessGet(null,null,null));
});

ajax.interceptors.map__GT_ProcessGet = (function ajax$interceptors$map__GT_ProcessGet(G__8048){
return (new ajax.interceptors.ProcessGet(null,cljs.core.dissoc.call(null,G__8048),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7216__auto__,k__7217__auto__){
var self__ = this;
var this__7216__auto____$1 = this;
return cljs.core._lookup.call(null,this__7216__auto____$1,k__7217__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7218__auto__,k8058,else__7219__auto__){
var self__ = this;
var this__7218__auto____$1 = this;
var G__8060 = k8058;
switch (G__8060) {
default:
return cljs.core.get.call(null,self__.__extmap,k8058,else__7219__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = true;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__8061){
var self__ = this;
var map__8062 = p__8061;
var map__8062__$1 = ((((!((map__8062 == null)))?((((map__8062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8062):map__8062);
var request = map__8062__$1;
var body = cljs.core.get.call(null,map__8062__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7230__auto__,writer__7231__auto__,opts__7232__auto__){
var self__ = this;
var this__7230__auto____$1 = this;
var pr_pair__7233__auto__ = ((function (this__7230__auto____$1){
return (function (keyval__7234__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7231__auto__,cljs.core.pr_writer,""," ","",opts__7232__auto__,keyval__7234__auto__);
});})(this__7230__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7231__auto__,pr_pair__7233__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__7232__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$ = true;

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8057){
var self__ = this;
var G__8057__$1 = this;
return (new cljs.core.RecordIter((0),G__8057__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7214__auto__){
var self__ = this;
var this__7214__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7210__auto__){
var self__ = this;
var this__7210__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7220__auto__){
var self__ = this;
var this__7220__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7211__auto__){
var self__ = this;
var this__7211__auto____$1 = this;
var h__7029__auto__ = self__.__hash;
if(!((h__7029__auto__ == null))){
return h__7029__auto__;
} else {
var h__7029__auto____$1 = cljs.core.hash_imap.call(null,this__7211__auto____$1);
self__.__hash = h__7029__auto____$1;

return h__7029__auto____$1;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7212__auto__,other__7213__auto__){
var self__ = this;
var this__7212__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6582__auto__ = other__7213__auto__;
if(cljs.core.truth_(and__6582__auto__)){
var and__6582__auto____$1 = (this__7212__auto____$1.constructor === other__7213__auto__.constructor);
if(and__6582__auto____$1){
return cljs.core.equiv_map.call(null,this__7212__auto____$1,other__7213__auto__);
} else {
return and__6582__auto____$1;
}
} else {
return and__6582__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7225__auto__,k__7226__auto__){
var self__ = this;
var this__7225__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__7226__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7225__auto____$1),self__.__meta),k__7226__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7226__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7223__auto__,k__7224__auto__,G__8057){
var self__ = this;
var this__7223__auto____$1 = this;
var pred__8064 = cljs.core.keyword_identical_QMARK_;
var expr__8065 = k__7224__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7224__auto__,G__8057),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7228__auto__){
var self__ = this;
var this__7228__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7215__auto__,G__8057){
var self__ = this;
var this__7215__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__8057,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7221__auto__,entry__7222__auto__){
var self__ = this;
var this__7221__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7222__auto__)){
return cljs.core._assoc.call(null,this__7221__auto____$1,cljs.core._nth.call(null,entry__7222__auto__,(0)),cljs.core._nth.call(null,entry__7222__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7221__auto____$1,entry__7222__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__7250__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__7250__auto__,writer__7251__auto__){
return cljs.core._write.call(null,writer__7251__auto__,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__8059){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.dissoc.call(null,G__8059),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessGet(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__8068){
var map__8071 = p__8068;
var map__8071__$1 = ((((!((map__8071 == null)))?((((map__8071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8071):map__8071);
var opts = map__8071__$1;
var response_format = cljs.core.get.call(null,map__8071__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.truth_(ajax.interceptors.is_response_format_QMARK_.call(null,response_format))){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return interpret_vector.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
});

//# sourceMappingURL=interceptors.js.map