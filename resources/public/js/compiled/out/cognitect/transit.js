// Compiled by ClojureScript 1.8.51 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__8299_8303 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__8300_8304 = null;
var count__8301_8305 = (0);
var i__8302_8306 = (0);
while(true){
if((i__8302_8306 < count__8301_8305)){
var k_8307 = cljs.core._nth.call(null,chunk__8300_8304,i__8302_8306);
var v_8308 = (b[k_8307]);
(a[k_8307] = v_8308);

var G__8309 = seq__8299_8303;
var G__8310 = chunk__8300_8304;
var G__8311 = count__8301_8305;
var G__8312 = (i__8302_8306 + (1));
seq__8299_8303 = G__8309;
chunk__8300_8304 = G__8310;
count__8301_8305 = G__8311;
i__8302_8306 = G__8312;
continue;
} else {
var temp__4657__auto___8313 = cljs.core.seq.call(null,seq__8299_8303);
if(temp__4657__auto___8313){
var seq__8299_8314__$1 = temp__4657__auto___8313;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8299_8314__$1)){
var c__7405__auto___8315 = cljs.core.chunk_first.call(null,seq__8299_8314__$1);
var G__8316 = cljs.core.chunk_rest.call(null,seq__8299_8314__$1);
var G__8317 = c__7405__auto___8315;
var G__8318 = cljs.core.count.call(null,c__7405__auto___8315);
var G__8319 = (0);
seq__8299_8303 = G__8316;
chunk__8300_8304 = G__8317;
count__8301_8305 = G__8318;
i__8302_8306 = G__8319;
continue;
} else {
var k_8320 = cljs.core.first.call(null,seq__8299_8314__$1);
var v_8321 = (b[k_8320]);
(a[k_8320] = v_8321);

var G__8322 = cljs.core.next.call(null,seq__8299_8314__$1);
var G__8323 = null;
var G__8324 = (0);
var G__8325 = (0);
seq__8299_8303 = G__8322;
chunk__8300_8304 = G__8323;
count__8301_8305 = G__8324;
i__8302_8306 = G__8325;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__7200__auto__,writer__7201__auto__,opt__7202__auto__){
return cljs.core._write.call(null,writer__7201__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__7200__auto__,writer__7201__auto__,opt__7202__auto__){
return cljs.core._write.call(null,writer__7201__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args8326 = [];
var len__7664__auto___8329 = arguments.length;
var i__7665__auto___8330 = (0);
while(true){
if((i__7665__auto___8330 < len__7664__auto___8329)){
args8326.push((arguments[i__7665__auto___8330]));

var G__8331 = (i__7665__auto___8330 + (1));
i__7665__auto___8330 = G__8331;
continue;
} else {
}
break;
}

var G__8328 = args8326.length;
switch (G__8328) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8326.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__8333 = (i + (2));
var G__8334 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__8333;
ret = G__8334;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__7200__auto__,writer__7201__auto__,opt__7202__auto__){
return cljs.core._write.call(null,writer__7201__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__7200__auto__,writer__7201__auto__,opt__7202__auto__){
return cljs.core._write.call(null,writer__7201__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__8335_8339 = cljs.core.seq.call(null,v);
var chunk__8336_8340 = null;
var count__8337_8341 = (0);
var i__8338_8342 = (0);
while(true){
if((i__8338_8342 < count__8337_8341)){
var x_8343 = cljs.core._nth.call(null,chunk__8336_8340,i__8338_8342);
ret.push(x_8343);

var G__8344 = seq__8335_8339;
var G__8345 = chunk__8336_8340;
var G__8346 = count__8337_8341;
var G__8347 = (i__8338_8342 + (1));
seq__8335_8339 = G__8344;
chunk__8336_8340 = G__8345;
count__8337_8341 = G__8346;
i__8338_8342 = G__8347;
continue;
} else {
var temp__4657__auto___8348 = cljs.core.seq.call(null,seq__8335_8339);
if(temp__4657__auto___8348){
var seq__8335_8349__$1 = temp__4657__auto___8348;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8335_8349__$1)){
var c__7405__auto___8350 = cljs.core.chunk_first.call(null,seq__8335_8349__$1);
var G__8351 = cljs.core.chunk_rest.call(null,seq__8335_8349__$1);
var G__8352 = c__7405__auto___8350;
var G__8353 = cljs.core.count.call(null,c__7405__auto___8350);
var G__8354 = (0);
seq__8335_8339 = G__8351;
chunk__8336_8340 = G__8352;
count__8337_8341 = G__8353;
i__8338_8342 = G__8354;
continue;
} else {
var x_8355 = cljs.core.first.call(null,seq__8335_8349__$1);
ret.push(x_8355);

var G__8356 = cljs.core.next.call(null,seq__8335_8349__$1);
var G__8357 = null;
var G__8358 = (0);
var G__8359 = (0);
seq__8335_8339 = G__8356;
chunk__8336_8340 = G__8357;
count__8337_8341 = G__8358;
i__8338_8342 = G__8359;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__7200__auto__,writer__7201__auto__,opt__7202__auto__){
return cljs.core._write.call(null,writer__7201__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__7200__auto__,writer__7201__auto__,opt__7202__auto__){
return cljs.core._write.call(null,writer__7201__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__8360_8364 = cljs.core.seq.call(null,v);
var chunk__8361_8365 = null;
var count__8362_8366 = (0);
var i__8363_8367 = (0);
while(true){
if((i__8363_8367 < count__8362_8366)){
var x_8368 = cljs.core._nth.call(null,chunk__8361_8365,i__8363_8367);
ret.push(x_8368);

var G__8369 = seq__8360_8364;
var G__8370 = chunk__8361_8365;
var G__8371 = count__8362_8366;
var G__8372 = (i__8363_8367 + (1));
seq__8360_8364 = G__8369;
chunk__8361_8365 = G__8370;
count__8362_8366 = G__8371;
i__8363_8367 = G__8372;
continue;
} else {
var temp__4657__auto___8373 = cljs.core.seq.call(null,seq__8360_8364);
if(temp__4657__auto___8373){
var seq__8360_8374__$1 = temp__4657__auto___8373;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8360_8374__$1)){
var c__7405__auto___8375 = cljs.core.chunk_first.call(null,seq__8360_8374__$1);
var G__8376 = cljs.core.chunk_rest.call(null,seq__8360_8374__$1);
var G__8377 = c__7405__auto___8375;
var G__8378 = cljs.core.count.call(null,c__7405__auto___8375);
var G__8379 = (0);
seq__8360_8364 = G__8376;
chunk__8361_8365 = G__8377;
count__8362_8366 = G__8378;
i__8363_8367 = G__8379;
continue;
} else {
var x_8380 = cljs.core.first.call(null,seq__8360_8374__$1);
ret.push(x_8380);

var G__8381 = cljs.core.next.call(null,seq__8360_8374__$1);
var G__8382 = null;
var G__8383 = (0);
var G__8384 = (0);
seq__8360_8364 = G__8381;
chunk__8361_8365 = G__8382;
count__8362_8366 = G__8383;
i__8363_8367 = G__8384;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__7200__auto__,writer__7201__auto__,opt__7202__auto__){
return cljs.core._write.call(null,writer__7201__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__8385_8389 = cljs.core.seq.call(null,v);
var chunk__8386_8390 = null;
var count__8387_8391 = (0);
var i__8388_8392 = (0);
while(true){
if((i__8388_8392 < count__8387_8391)){
var x_8393 = cljs.core._nth.call(null,chunk__8386_8390,i__8388_8392);
ret.push(x_8393);

var G__8394 = seq__8385_8389;
var G__8395 = chunk__8386_8390;
var G__8396 = count__8387_8391;
var G__8397 = (i__8388_8392 + (1));
seq__8385_8389 = G__8394;
chunk__8386_8390 = G__8395;
count__8387_8391 = G__8396;
i__8388_8392 = G__8397;
continue;
} else {
var temp__4657__auto___8398 = cljs.core.seq.call(null,seq__8385_8389);
if(temp__4657__auto___8398){
var seq__8385_8399__$1 = temp__4657__auto___8398;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8385_8399__$1)){
var c__7405__auto___8400 = cljs.core.chunk_first.call(null,seq__8385_8399__$1);
var G__8401 = cljs.core.chunk_rest.call(null,seq__8385_8399__$1);
var G__8402 = c__7405__auto___8400;
var G__8403 = cljs.core.count.call(null,c__7405__auto___8400);
var G__8404 = (0);
seq__8385_8389 = G__8401;
chunk__8386_8390 = G__8402;
count__8387_8391 = G__8403;
i__8388_8392 = G__8404;
continue;
} else {
var x_8405 = cljs.core.first.call(null,seq__8385_8399__$1);
ret.push(x_8405);

var G__8406 = cljs.core.next.call(null,seq__8385_8399__$1);
var G__8407 = null;
var G__8408 = (0);
var G__8409 = (0);
seq__8385_8389 = G__8406;
chunk__8386_8390 = G__8407;
count__8387_8391 = G__8408;
i__8388_8392 = G__8409;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__7200__auto__,writer__7201__auto__,opt__7202__auto__){
return cljs.core._write.call(null,writer__7201__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__7200__auto__,writer__7201__auto__,opt__7202__auto__){
return cljs.core._write.call(null,writer__7201__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args8410 = [];
var len__7664__auto___8421 = arguments.length;
var i__7665__auto___8422 = (0);
while(true){
if((i__7665__auto___8422 < len__7664__auto___8421)){
args8410.push((arguments[i__7665__auto___8422]));

var G__8423 = (i__7665__auto___8422 + (1));
i__7665__auto___8422 = G__8423;
continue;
} else {
}
break;
}

var G__8412 = args8410.length;
switch (G__8412) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8410.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__8413 = obj;
G__8413.push(kfn.call(null,k),vfn.call(null,v));

return G__8413;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x8414 = cljs.core.clone.call(null,handlers);
x8414.forEach = ((function (x8414,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__8415 = cljs.core.seq.call(null,coll);
var chunk__8416 = null;
var count__8417 = (0);
var i__8418 = (0);
while(true){
if((i__8418 < count__8417)){
var vec__8419 = cljs.core._nth.call(null,chunk__8416,i__8418);
var k = cljs.core.nth.call(null,vec__8419,(0),null);
var v = cljs.core.nth.call(null,vec__8419,(1),null);
f.call(null,v,k);

var G__8425 = seq__8415;
var G__8426 = chunk__8416;
var G__8427 = count__8417;
var G__8428 = (i__8418 + (1));
seq__8415 = G__8425;
chunk__8416 = G__8426;
count__8417 = G__8427;
i__8418 = G__8428;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8415);
if(temp__4657__auto__){
var seq__8415__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8415__$1)){
var c__7405__auto__ = cljs.core.chunk_first.call(null,seq__8415__$1);
var G__8429 = cljs.core.chunk_rest.call(null,seq__8415__$1);
var G__8430 = c__7405__auto__;
var G__8431 = cljs.core.count.call(null,c__7405__auto__);
var G__8432 = (0);
seq__8415 = G__8429;
chunk__8416 = G__8430;
count__8417 = G__8431;
i__8418 = G__8432;
continue;
} else {
var vec__8420 = cljs.core.first.call(null,seq__8415__$1);
var k = cljs.core.nth.call(null,vec__8420,(0),null);
var v = cljs.core.nth.call(null,vec__8420,(1),null);
f.call(null,v,k);

var G__8433 = cljs.core.next.call(null,seq__8415__$1);
var G__8434 = null;
var G__8435 = (0);
var G__8436 = (0);
seq__8415 = G__8433;
chunk__8416 = G__8434;
count__8417 = G__8435;
i__8418 = G__8436;
continue;
}
} else {
return null;
}
}
break;
}
});})(x8414,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x8414;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args8437 = [];
var len__7664__auto___8443 = arguments.length;
var i__7665__auto___8444 = (0);
while(true){
if((i__7665__auto___8444 < len__7664__auto___8443)){
args8437.push((arguments[i__7665__auto___8444]));

var G__8445 = (i__7665__auto___8444 + (1));
i__7665__auto___8444 = G__8445;
continue;
} else {
}
break;
}

var G__8439 = args8437.length;
switch (G__8439) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8437.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit8440 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit8440 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta8441){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta8441 = meta8441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit8440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8442,meta8441__$1){
var self__ = this;
var _8442__$1 = this;
return (new cognitect.transit.t_cognitect$transit8440(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta8441__$1));
});

cognitect.transit.t_cognitect$transit8440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8442){
var self__ = this;
var _8442__$1 = this;
return self__.meta8441;
});

cognitect.transit.t_cognitect$transit8440.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit8440.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit8440.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit8440.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit8440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta8441","meta8441",1142816580,null)], null);
});

cognitect.transit.t_cognitect$transit8440.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit8440.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit8440";

cognitect.transit.t_cognitect$transit8440.cljs$lang$ctorPrWriter = (function (this__7200__auto__,writer__7201__auto__,opt__7202__auto__){
return cljs.core._write.call(null,writer__7201__auto__,"cognitect.transit/t_cognitect$transit8440");
});

cognitect.transit.__GT_t_cognitect$transit8440 = (function cognitect$transit$__GT_t_cognitect$transit8440(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta8441){
return (new cognitect.transit.t_cognitect$transit8440(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta8441));
});

}

return (new cognitect.transit.t_cognitect$transit8440(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__6594__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__6594__auto__)){
return or__6594__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map