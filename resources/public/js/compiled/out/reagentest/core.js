// Compiled by ClojureScript 1.8.51 {}
goog.provide('reagentest.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent_modals.modals');
goog.require('ajax.core');
cljs.core.enable_console_print_BANG_.call(null);
reagentest.core.by_id = (function reagentest$core$by_id(elem_id){
return document.getElementById(elem_id);
});
reagentest.core.val = reagent.core.atom.call(null,"foo");
reagentest.core.atom_input = (function reagentest$core$atom_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__8910_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__8910_SHARP_.target.value);
})], null)], null);
});
reagentest.core.employees = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, ["id",(1),"name","backend 1","age",(11),"years",(111)], null),new cljs.core.PersistentArrayMap(null, 4, ["id",(2),"name","clojure items","age",(22),"years",(222)], null),new cljs.core.PersistentArrayMap(null, 4, ["id",(3),"name","HTTP Kit","age",(33),"years",(333)], null)], null));
reagentest.core.init_emp = new cljs.core.PersistentArrayMap(null, 3, ["name","name","age",(0),"years",(0)], null);
reagentest.core.current_emp = reagent.core.atom.call(null,reagentest.core.init_emp);
reagentest.core.modaldiv = (function reagentest$core$modaldiv(save_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-body.form-group","div.modal-body.form-group",-999558549),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Name: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,reagentest.core.current_emp).call(null,"name"),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_.call(null,reagentest.core.current_emp,cljs.core.assoc.call(null,cljs.core.deref.call(null,reagentest.core.current_emp),"name",e.target.value));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Age: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#new-age.form-control","input#new-age.form-control",-1096067889),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,reagentest.core.current_emp).call(null,"age"),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_.call(null,reagentest.core.current_emp,cljs.core.assoc.call(null,cljs.core.deref.call(null,reagentest.core.current_emp),"age",e.target.value));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Years: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#new-years.form-control","input#new-years.form-control",-382121809),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,reagentest.core.current_emp).call(null,"years"),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_.call(null,reagentest.core.current_emp,cljs.core.assoc.call(null,cljs.core.deref.call(null,reagentest.core.current_emp),"years",e.target.value));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-footer","div.modal-footer",1309572241),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn.btn-primary","div.btn.btn-primary",221100635),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
save_fn.call(null);

return reagent_modals.modals.close_modal_BANG_.call(null);
})], null),"Save"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn.btn-primary","div.btn.btn-primary",221100635),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return reagent_modals.modals.close_modal_BANG_.call(null);
})], null),"Close"], null)], null)], null);
});
reagentest.core.error_handler = (function reagentest$core$error_handler(response){
return console.log([cljs.core.str("ERROR: "),cljs.core.str(response)].join(''));
});
reagentest.core.get_all = (function reagentest$core$get_all(){
return ajax.core.GET.call(null,"/employees",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (data){
return cljs.core.reset_BANG_.call(null,reagentest.core.employees,data);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),reagentest.core.error_handler], null));
});
reagentest.core.delete$ = (function reagentest$core$delete(id){
if(cljs.core.truth_(confirm("Sure?"))){
return ajax.core.DELETE.call(null,[cljs.core.str("/delete?id="),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),reagentest.core.get_all,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),reagentest.core.error_handler], null));
} else {
return null;
}
});
reagentest.core.add = (function reagentest$core$add(emp){
return ajax.core.POST.call(null,"/create",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",710516235),emp,new cljs.core.Keyword(null,"handler","handler",-195596612),reagentest.core.get_all,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),reagentest.core.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null)], null));
});
reagentest.core.update = (function reagentest$core$update(emp){
return ajax.core.PUT.call(null,[cljs.core.str("/update?id="),cljs.core.str(emp.call(null,"id"))].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",710516235),emp,new cljs.core.Keyword(null,"handler","handler",-195596612),reagentest.core.get_all,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),reagentest.core.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null)], null));
});
reagentest.core.get_one = (function reagentest$core$get_one(id,callback){
return ajax.core.GET.call(null,[cljs.core.str("/get-one?id="),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (data){
return cljs.core.reset_BANG_.call(null,reagentest.core.current_emp,data).call(null,callback.call(null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),reagentest.core.error_handler], null));
});
reagentest.core.modal_window_button = (function reagentest$core$modal_window_button(var_args){
var args__7671__auto__ = [];
var len__7664__auto___8915 = arguments.length;
var i__7665__auto___8916 = (0);
while(true){
if((i__7665__auto___8916 < len__7664__auto___8915)){
args__7671__auto__.push((arguments[i__7665__auto___8916]));

var G__8917 = (i__7665__auto___8916 + (1));
i__7665__auto___8916 = G__8917;
continue;
} else {
}
break;
}

var argseq__7672__auto__ = ((((1) < args__7671__auto__.length))?(new cljs.core.IndexedSeq(args__7671__auto__.slice((1)),(0),null)):null);
return reagentest.core.modal_window_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7672__auto__);
});

reagentest.core.modal_window_button.cljs$core$IFn$_invoke$arity$variadic = (function (btn_title,p__8913){
var vec__8914 = p__8913;
var emp_id = cljs.core.nth.call(null,vec__8914,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((emp_id == null))?new cljs.core.Keyword(null,"div.btn.btn-primary","div.btn.btn-primary",221100635):new cljs.core.Keyword(null,"a.btn.btn-default.btn-sm","a.btn.btn-default.btn-sm",-444052946)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__8914,emp_id){
return (function (){
if((emp_id == null)){
cljs.core.reset_BANG_.call(null,reagentest.core.current_emp,reagentest.core.init_emp);

return reagent_modals.modals.modal_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagentest.core.modaldiv,((function (vec__8914,emp_id){
return (function (){
reagentest.core.add.call(null,cljs.core.deref.call(null,reagentest.core.current_emp));

return reagentest.core.get_all.call(null);
});})(vec__8914,emp_id))
], null));
} else {
return reagentest.core.get_one.call(null,emp_id,((function (vec__8914,emp_id){
return (function (){
return reagent_modals.modals.modal_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagentest.core.modaldiv,((function (vec__8914,emp_id){
return (function (){
reagentest.core.update.call(null,cljs.core.deref.call(null,reagentest.core.current_emp));

return reagentest.core.get_all.call(null);
});})(vec__8914,emp_id))
], null));
});})(vec__8914,emp_id))
);
}
});})(vec__8914,emp_id))
], null),btn_title], null);
});

reagentest.core.modal_window_button.cljs$lang$maxFixedArity = (1);

reagentest.core.modal_window_button.cljs$lang$applyTo = (function (seq8911){
var G__8912 = cljs.core.first.call(null,seq8911);
var seq8911__$1 = cljs.core.next.call(null,seq8911);
return reagentest.core.modal_window_button.cljs$core$IFn$_invoke$arity$variadic(G__8912,seq8911__$1);
});
reagentest.core.employees_table = (function reagentest$core$employees_table(){
if(cljs.core.truth_(cljs.core.deref.call(null,reagentest.core.employees))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-hover.table-condensed","table.table.table-hover.table-condensed",1582147149),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"id"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Age"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Years"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Actions"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__7374__auto__ = (function reagentest$core$employees_table_$_iter__8922(s__8923){
return (new cljs.core.LazySeq(null,(function (){
var s__8923__$1 = s__8923;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__8923__$1);
if(temp__4657__auto__){
var s__8923__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8923__$2)){
var c__7372__auto__ = cljs.core.chunk_first.call(null,s__8923__$2);
var size__7373__auto__ = cljs.core.count.call(null,c__7372__auto__);
var b__8925 = cljs.core.chunk_buffer.call(null,size__7373__auto__);
if((function (){var i__8924 = (0);
while(true){
if((i__8924 < size__7373__auto__)){
var emp = cljs.core._nth.call(null,c__7372__auto__,i__8924);
cljs.core.chunk_append.call(null,b__8925,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),emp.call(null,"id")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),emp.call(null,"name")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),emp.call(null,"age")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),emp.call(null,"years")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagentest.core.modal_window_button,"update",emp.call(null,"id")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-default.btn-sm","a.btn.btn-default.btn-sm",-444052946),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__8924,emp,c__7372__auto__,size__7373__auto__,b__8925,s__8923__$2,temp__4657__auto__){
return (function (){
return reagentest.core.delete$.call(null,emp.call(null,"id"));
});})(i__8924,emp,c__7372__auto__,size__7373__auto__,b__8925,s__8923__$2,temp__4657__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-remove","span.glyphicon.glyphicon-remove",-176133890)], null)," delete"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),emp.call(null,"id")], null)));

var G__8926 = (i__8924 + (1));
i__8924 = G__8926;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8925),reagentest$core$employees_table_$_iter__8922.call(null,cljs.core.chunk_rest.call(null,s__8923__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8925),null);
}
} else {
var emp = cljs.core.first.call(null,s__8923__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),emp.call(null,"id")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),emp.call(null,"name")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),emp.call(null,"age")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),emp.call(null,"years")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagentest.core.modal_window_button,"update",emp.call(null,"id")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-default.btn-sm","a.btn.btn-default.btn-sm",-444052946),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (emp,s__8923__$2,temp__4657__auto__){
return (function (){
return reagentest.core.delete$.call(null,emp.call(null,"id"));
});})(emp,s__8923__$2,temp__4657__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-remove","span.glyphicon.glyphicon-remove",-176133890)], null)," delete"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),emp.call(null,"id")], null)),reagentest$core$employees_table_$_iter__8922.call(null,cljs.core.rest.call(null,s__8923__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7374__auto__.call(null,cljs.core.deref.call(null,reagentest.core.employees));
})()], null)], null)], null);
} else {
return null;
}
});
reagentest.core.home = (function reagentest$core$home(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_modals.modals.modal_window], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagentest.core.modal_window_button,"Add employee"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagentest.core.employees_table], null)], null);
});
reagentest.core.main = (function reagentest$core$main(){
reagentest.core.get_all.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagentest.core.home], null),document.getElementById("app"));
});
goog.exportSymbol('reagentest.core.main', reagentest.core.main);

//# sourceMappingURL=core.js.map