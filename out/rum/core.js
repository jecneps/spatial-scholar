// Compiled by ClojureScript 1.10.339 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.object');
goog.require('goog.functions');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it.
 */
rum.core.state = (function rum$core$state(comp){
return goog.object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__2975 = cljs.core.seq.call(null,props);
var chunk__2977 = null;
var count__2978 = (0);
var i__2979 = (0);
while(true){
if((i__2979 < count__2978)){
var vec__2981 = cljs.core._nth.call(null,chunk__2977,i__2979);
var k = cljs.core.nth.call(null,vec__2981,(0),null);
var v = cljs.core.nth.call(null,vec__2981,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__2987 = seq__2975;
var G__2988 = chunk__2977;
var G__2989 = count__2978;
var G__2990 = (i__2979 + (1));
seq__2975 = G__2987;
chunk__2977 = G__2988;
count__2978 = G__2989;
i__2979 = G__2990;
continue;
} else {
var G__2991 = seq__2975;
var G__2992 = chunk__2977;
var G__2993 = count__2978;
var G__2994 = (i__2979 + (1));
seq__2975 = G__2991;
chunk__2977 = G__2992;
count__2978 = G__2993;
i__2979 = G__2994;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__2975);
if(temp__5457__auto__){
var seq__2975__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2975__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__2975__$1);
var G__2995 = cljs.core.chunk_rest.call(null,seq__2975__$1);
var G__2996 = c__4351__auto__;
var G__2997 = cljs.core.count.call(null,c__4351__auto__);
var G__2998 = (0);
seq__2975 = G__2995;
chunk__2977 = G__2996;
count__2978 = G__2997;
i__2979 = G__2998;
continue;
} else {
var vec__2984 = cljs.core.first.call(null,seq__2975__$1);
var k = cljs.core.nth.call(null,vec__2984,(0),null);
var v = cljs.core.nth.call(null,vec__2984,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__2999 = cljs.core.next.call(null,seq__2975__$1);
var G__3000 = null;
var G__3001 = (0);
var G__3002 = (0);
seq__2975 = G__2999;
chunk__2977 = G__3000;
count__2978 = G__3001;
i__2979 = G__3002;
continue;
} else {
var G__3003 = cljs.core.next.call(null,seq__2975__$1);
var G__3004 = null;
var G__3005 = (0);
var G__3006 = (0);
seq__2975 = G__3003;
chunk__2977 = G__3004;
count__2978 = G__3005;
i__2979 = G__3006;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__3008_SHARP_,p2__3007_SHARP_){
return p2__3007_SHARP_.call(null,p1__3008_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_catch = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
var static_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"static-properties","static-properties",-577838503),mixins));
var ctor = ((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props){
return (function (props){
var this$ = this;
goog.object.set(this$,"state",({":rum/state": cljs.core.volatile_BANG_.call(null,rum.util.call_all.call(null,cljs.core.assoc.call(null,goog.object.get(props,":rum/initial-state"),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props))}));

return React.Component.call(this$,props);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props))
;
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_.call(null,will_mount)){
} else {
goog.object.set(prototype,"componentWillMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_mount)){
} else {
goog.object.set(prototype,"componentDidMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillReceiveProps",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,goog.object.get(next_props,":rum/initial-state"));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__3010_SHARP_,p2__3009_SHARP_){
return p2__3009_SHARP_.call(null,old_state,p1__3010_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,goog.object.get(next_state,":rum/state"));
var or__3949__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__3011_SHARP_){
return p1__3011_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,should_update);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,will_update)){
} else {
goog.object.set(prototype,"componentWillUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"render",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__3013 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__3013,(0),null);
var next_state = cljs.core.nth.call(null,vec__3013,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,did_update)){
} else {
goog.object.set(prototype,"componentDidUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_catch)){
} else {
goog.object.set(prototype,"componentDidCatch",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (error,info){
var this$ = this;
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_catch,error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","component-stack","rum/component-stack",2037541138),goog.object.get(info,"componentStack")], null)));

return this$.forceUpdate();
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillUnmount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
if(cljs.core.empty_QMARK_.call(null,will_unmount)){
} else {
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,child_context)){
} else {
goog.object.set(prototype,"getChildContext",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__3012_SHARP_){
return p1__3012_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

rum.core.extend_BANG_.call(null,prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_.call(null,ctor,static_props);

return ctor;
});
rum.core.set_meta_BANG_ = (function rum$core$set_meta_BANG_(c){
var f = (function (){
var ctr = c.call(null);
return ctr.apply(ctr,arguments);
});
var x3016_3017 = f;
x3016_3017.cljs$core$IMeta$ = cljs.core.PROTOCOL_SENTINEL;

x3016_3017.cljs$core$IMeta$_meta$arity$1 = ((function (x3016_3017,f){
return (function (_){
var ___$1 = this;
return cljs.core.meta.call(null,c.call(null));
});})(x3016_3017,f))
;


return f;
});
/**
 * Wraps component construction in a way so that Google Closure Compiler
 * can properly recognize and elide unused components. The extra `set-meta`
 * fn is needed so that the compiler can properly detect that all functions
 * are side effect free.
 */
rum.core.lazy_build = (function rum$core$lazy_build(ctor,render,mixins,display_name){
var bf = (function (){
return ctor.call(null,render,mixins,display_name);
});
var c = goog.functions.cacheReturnValue(bf);
return rum.core.set_meta_BANG_.call(null,c);
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__3018__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__3018 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3019__i = 0, G__3019__a = new Array(arguments.length -  0);
while (G__3019__i < G__3019__a.length) {G__3019__a[G__3019__i] = arguments[G__3019__i + 0]; ++G__3019__i;}
  args = new cljs.core.IndexedSeq(G__3019__a,0,null);
} 
return G__3018__delegate.call(this,args);};
G__3018.cljs$lang$maxFixedArity = 0;
G__3018.cljs$lang$applyTo = (function (arglist__3020){
var args = cljs.core.seq(arglist__3020);
return G__3018__delegate(args);
});
G__3018.cljs$core$IFn$_invoke$arity$variadic = G__3018__delegate;
return G__3018;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__3021__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__3021 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3022__i = 0, G__3022__a = new Array(arguments.length -  0);
while (G__3022__i < G__3022__a.length) {G__3022__a[G__3022__i] = arguments[G__3022__i + 0]; ++G__3022__i;}
  args = new cljs.core.IndexedSeq(G__3022__a,0,null);
} 
return G__3021__delegate.call(this,args);};
G__3021.cljs$lang$maxFixedArity = 0;
G__3021.cljs$lang$applyTo = (function (arglist__3023){
var args = cljs.core.seq(arglist__3023);
return G__3021__delegate(args);
});
G__3021.cljs$core$IFn$_invoke$arity$variadic = G__3021__delegate;
return G__3021;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.memo_compare_props = (function rum$core$memo_compare_props(prev_props,next_props){
return cljs.core._EQ_.call(null,(prev_props[":rum/args"]),(next_props[":rum/args"]));
});
rum.core.react_memo = (function rum$core$react_memo(f){
var temp__5459__auto__ = React.memo;
if((temp__5459__auto__ == null)){
return f;
} else {
var memo = temp__5459__auto__;
return memo.call(null,f,rum.core.memo_compare_props);
}
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core._EQ_.call(null,mixins,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null))){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var memo_class = rum.core.react_memo.call(null,class$);
var ctor = ((function (class$,_,memo_class){
return (function() { 
var G__3024__delegate = function (args){
return React.createElement(memo_class,({":rum/args": args}));
};
var G__3024 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3025__i = 0, G__3025__a = new Array(arguments.length -  0);
while (G__3025__i < G__3025__a.length) {G__3025__a[G__3025__i] = arguments[G__3025__i + 0]; ++G__3025__i;}
  args = new cljs.core.IndexedSeq(G__3025__a,0,null);
} 
return G__3024__delegate.call(this,args);};
G__3024.cljs$lang$maxFixedArity = 0;
G__3024.cljs$lang$applyTo = (function (arglist__3026){
var args = cljs.core.seq(arglist__3026);
return G__3024__delegate(args);
});
G__3024.cljs$core$IFn$_invoke$arity$variadic = G__3024__delegate;
return G__3024;
})()
;})(class$,_,memo_class))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),memo_class], null));
} else {
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__3027__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__3027 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3028__i = 0, G__3028__a = new Array(arguments.length -  0);
while (G__3028__i < G__3028__a.length) {G__3028__a[G__3028__i] = arguments[G__3028__i + 0]; ++G__3028__i;}
  args = new cljs.core.IndexedSeq(G__3028__a,0,null);
} 
return G__3027__delegate.call(this,args);};
G__3027.cljs$lang$maxFixedArity = 0;
G__3027.cljs$lang$applyTo = (function (arglist__3029){
var args = cljs.core.seq(arglist__3029);
return G__3027__delegate(args);
});
G__3027.cljs$core$IFn$_invoke$arity$variadic = G__3027__delegate;
return G__3027;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);

}
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__3949__auto__ = (function (){var and__3938__auto__ = (typeof window !== 'undefined');
if(and__3938__auto__){
var or__3949__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ((function (or__3949__auto__){
return (function (p1__3030_SHARP_){
return setTimeout(p1__3030_SHARP_,(16));
});
;})(or__3949__auto__))
}
})();
rum.core.batch = (function (){var or__3949__auto__ = (((typeof ReactNative !== 'undefined'))?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = (((typeof ReactDOM !== 'undefined'))?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return ((function (or__3949__auto____$1,or__3949__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__3949__auto____$1,or__3949__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__3031 = cljs.core.seq.call(null,queue);
var chunk__3033 = null;
var count__3034 = (0);
var i__3035 = (0);
while(true){
if((i__3035 < count__3034)){
var comp = cljs.core._nth.call(null,chunk__3033,i__3035);
if(((!((comp == null))) && (cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))))){
comp.forceUpdate();


var G__3037 = seq__3031;
var G__3038 = chunk__3033;
var G__3039 = count__3034;
var G__3040 = (i__3035 + (1));
seq__3031 = G__3037;
chunk__3033 = G__3038;
count__3034 = G__3039;
i__3035 = G__3040;
continue;
} else {
var G__3041 = seq__3031;
var G__3042 = chunk__3033;
var G__3043 = count__3034;
var G__3044 = (i__3035 + (1));
seq__3031 = G__3041;
chunk__3033 = G__3042;
count__3034 = G__3043;
i__3035 = G__3044;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__3031);
if(temp__5457__auto__){
var seq__3031__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3031__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__3031__$1);
var G__3045 = cljs.core.chunk_rest.call(null,seq__3031__$1);
var G__3046 = c__4351__auto__;
var G__3047 = cljs.core.count.call(null,c__4351__auto__);
var G__3048 = (0);
seq__3031 = G__3045;
chunk__3033 = G__3046;
count__3034 = G__3047;
i__3035 = G__3048;
continue;
} else {
var comp = cljs.core.first.call(null,seq__3031__$1);
if(((!((comp == null))) && (cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))))){
comp.forceUpdate();


var G__3049 = cljs.core.next.call(null,seq__3031__$1);
var G__3050 = null;
var G__3051 = (0);
var G__3052 = (0);
seq__3031 = G__3049;
chunk__3033 = G__3050;
count__3034 = G__3051;
i__3035 = G__3052;
continue;
} else {
var G__3053 = cljs.core.next.call(null,seq__3031__$1);
var G__3054 = null;
var G__3055 = (0);
var G__3056 = (0);
seq__3031 = G__3053;
chunk__3033 = G__3054;
count__3034 = G__3055;
i__3035 = G__3056;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame.
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add element to the DOM tree. Idempotent. Subsequent mounts will just update element.
 */
rum.core.mount = (function rum$core$mount(element,node){
ReactDOM.render(element,node);

return null;
});
/**
 * Removes component from the DOM tree.
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Same as [[mount]] but must be called on DOM tree already rendered by a server via [[render-html]].
 */
rum.core.hydrate = (function rum$core$hydrate(element,node){
return ReactDOM.hydrate(element,node);
});
/**
 * Render `element` in a DOM `node` that is ouside of current DOM hierarchy.
 */
rum.core.portal = (function rum$core$portal(element,node){
return ReactDOM.createPortal(element,node);
});
rum.core.create_context = (function rum$core$create_context(default_value){
return React.createContext(default_value);
});
/**
 * Adds React key to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-key "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_key = (function rum$core$with_key(element,key){
return React.cloneElement(element,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-ref "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_ref = (function rum$core$with_ref(element,ref){
return React.cloneElement(element,({"ref": ref}),null);
});
/**
 * Usage of this function is discouraged. Use :ref callback instead.
 *   Given state, returns top-level DOM node of component. Call it during lifecycle callbacks. Can’t be called during render.
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * DEPRECATED: Use :ref (fn [dom-or-nil]) callback instead. See rum issue #124
 *   Given state and ref handle, returns React component.
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * DEPRECATED: Use :ref (fn [dom-or-nil]) callback instead. See rum issue #124
 *   Given state and ref handle, returns DOM node associated with ref.
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed. Does equality check (`=`) on all arguments.
 *   
 * ```
 * (rum/defc label < rum/static
 *   [text]
 *   [:div text])
 *   
 * (rum/mount (label "abc") js/document.body)
 * 
 * ;; def != abc, will re-render
 * (rum/mount (label "def") js/document.body)
 * 
 * ;; def == def, won’t re-render
 * (rum/mount (label "def") js/document.body)
 * ```
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff during component’s lifecycle. Component will be re-rendered if atom’s value changes. Atom is stored under user-provided key or under `:rum/local` by default.
 *   
 * ```
 * (rum/defcs counter < (rum/local 0 :cnt)
 *   [state label]
 *   (let [*cnt (:cnt state)]
 *     [:div {:on-click (fn [_] (swap! *cnt inc))}
 *       label @*cnt]))
 * 
 * (rum/mount (counter "Click count: "))
 * ```
 */
rum.core.local = (function rum$core$local(var_args){
var G__3058 = arguments.length;
switch (G__3058) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with [[react]].
 *   
 * ```
 * (rum/defc comp < rum/reactive
 *   [*counter]
 *   [:div (rum/react counter)])
 * 
 * (def *counter (atom 0))
 * (rum/mount (comp *counter) js/document.body)
 * (swap! *counter inc) ;; will force comp to re-render
 * ```
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_3060 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__3061 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__3061,(0),null);
var next_state = cljs.core.nth.call(null,vec__3061,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__3064_3076 = cljs.core.seq.call(null,old_reactions);
var chunk__3065_3077 = null;
var count__3066_3078 = (0);
var i__3067_3079 = (0);
while(true){
if((i__3067_3079 < count__3066_3078)){
var ref_3080 = cljs.core._nth.call(null,chunk__3065_3077,i__3067_3079);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_3080)){
} else {
cljs.core.remove_watch.call(null,ref_3080,key);
}


var G__3081 = seq__3064_3076;
var G__3082 = chunk__3065_3077;
var G__3083 = count__3066_3078;
var G__3084 = (i__3067_3079 + (1));
seq__3064_3076 = G__3081;
chunk__3065_3077 = G__3082;
count__3066_3078 = G__3083;
i__3067_3079 = G__3084;
continue;
} else {
var temp__5457__auto___3085 = cljs.core.seq.call(null,seq__3064_3076);
if(temp__5457__auto___3085){
var seq__3064_3086__$1 = temp__5457__auto___3085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3064_3086__$1)){
var c__4351__auto___3087 = cljs.core.chunk_first.call(null,seq__3064_3086__$1);
var G__3088 = cljs.core.chunk_rest.call(null,seq__3064_3086__$1);
var G__3089 = c__4351__auto___3087;
var G__3090 = cljs.core.count.call(null,c__4351__auto___3087);
var G__3091 = (0);
seq__3064_3076 = G__3088;
chunk__3065_3077 = G__3089;
count__3066_3078 = G__3090;
i__3067_3079 = G__3091;
continue;
} else {
var ref_3092 = cljs.core.first.call(null,seq__3064_3086__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_3092)){
} else {
cljs.core.remove_watch.call(null,ref_3092,key);
}


var G__3093 = cljs.core.next.call(null,seq__3064_3086__$1);
var G__3094 = null;
var G__3095 = (0);
var G__3096 = (0);
seq__3064_3076 = G__3093;
chunk__3065_3077 = G__3094;
count__3066_3078 = G__3095;
i__3067_3079 = G__3096;
continue;
}
} else {
}
}
break;
}

var seq__3068_3097 = cljs.core.seq.call(null,new_reactions);
var chunk__3069_3098 = null;
var count__3070_3099 = (0);
var i__3071_3100 = (0);
while(true){
if((i__3071_3100 < count__3070_3099)){
var ref_3101 = cljs.core._nth.call(null,chunk__3069_3098,i__3071_3100);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_3101)){
} else {
cljs.core.add_watch.call(null,ref_3101,key,((function (seq__3068_3097,chunk__3069_3098,count__3070_3099,i__3071_3100,ref_3101,comp,old_reactions,vec__3061,dom,next_state,new_reactions,key,_STAR_reactions_STAR_3060){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__3068_3097,chunk__3069_3098,count__3070_3099,i__3071_3100,ref_3101,comp,old_reactions,vec__3061,dom,next_state,new_reactions,key,_STAR_reactions_STAR_3060))
);
}


var G__3102 = seq__3068_3097;
var G__3103 = chunk__3069_3098;
var G__3104 = count__3070_3099;
var G__3105 = (i__3071_3100 + (1));
seq__3068_3097 = G__3102;
chunk__3069_3098 = G__3103;
count__3070_3099 = G__3104;
i__3071_3100 = G__3105;
continue;
} else {
var temp__5457__auto___3106 = cljs.core.seq.call(null,seq__3068_3097);
if(temp__5457__auto___3106){
var seq__3068_3107__$1 = temp__5457__auto___3106;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3068_3107__$1)){
var c__4351__auto___3108 = cljs.core.chunk_first.call(null,seq__3068_3107__$1);
var G__3109 = cljs.core.chunk_rest.call(null,seq__3068_3107__$1);
var G__3110 = c__4351__auto___3108;
var G__3111 = cljs.core.count.call(null,c__4351__auto___3108);
var G__3112 = (0);
seq__3068_3097 = G__3109;
chunk__3069_3098 = G__3110;
count__3070_3099 = G__3111;
i__3071_3100 = G__3112;
continue;
} else {
var ref_3113 = cljs.core.first.call(null,seq__3068_3107__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_3113)){
} else {
cljs.core.add_watch.call(null,ref_3113,key,((function (seq__3068_3097,chunk__3069_3098,count__3070_3099,i__3071_3100,ref_3113,seq__3068_3107__$1,temp__5457__auto___3106,comp,old_reactions,vec__3061,dom,next_state,new_reactions,key,_STAR_reactions_STAR_3060){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__3068_3097,chunk__3069_3098,count__3070_3099,i__3071_3100,ref_3113,seq__3068_3107__$1,temp__5457__auto___3106,comp,old_reactions,vec__3061,dom,next_state,new_reactions,key,_STAR_reactions_STAR_3060))
);
}


var G__3114 = cljs.core.next.call(null,seq__3068_3107__$1);
var G__3115 = null;
var G__3116 = (0);
var G__3117 = (0);
seq__3068_3097 = G__3114;
chunk__3069_3098 = G__3115;
count__3070_3099 = G__3116;
i__3071_3100 = G__3117;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_3060;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_3118 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__3072_3119 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__3073_3120 = null;
var count__3074_3121 = (0);
var i__3075_3122 = (0);
while(true){
if((i__3075_3122 < count__3074_3121)){
var ref_3123 = cljs.core._nth.call(null,chunk__3073_3120,i__3075_3122);
cljs.core.remove_watch.call(null,ref_3123,key_3118);


var G__3124 = seq__3072_3119;
var G__3125 = chunk__3073_3120;
var G__3126 = count__3074_3121;
var G__3127 = (i__3075_3122 + (1));
seq__3072_3119 = G__3124;
chunk__3073_3120 = G__3125;
count__3074_3121 = G__3126;
i__3075_3122 = G__3127;
continue;
} else {
var temp__5457__auto___3128 = cljs.core.seq.call(null,seq__3072_3119);
if(temp__5457__auto___3128){
var seq__3072_3129__$1 = temp__5457__auto___3128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3072_3129__$1)){
var c__4351__auto___3130 = cljs.core.chunk_first.call(null,seq__3072_3129__$1);
var G__3131 = cljs.core.chunk_rest.call(null,seq__3072_3129__$1);
var G__3132 = c__4351__auto___3130;
var G__3133 = cljs.core.count.call(null,c__4351__auto___3130);
var G__3134 = (0);
seq__3072_3119 = G__3131;
chunk__3073_3120 = G__3132;
count__3074_3121 = G__3133;
i__3075_3122 = G__3134;
continue;
} else {
var ref_3135 = cljs.core.first.call(null,seq__3072_3129__$1);
cljs.core.remove_watch.call(null,ref_3135,key_3118);


var G__3136 = cljs.core.next.call(null,seq__3072_3129__$1);
var G__3137 = null;
var G__3138 = (0);
var G__3139 = (0);
seq__3072_3119 = G__3136;
chunk__3073_3120 = G__3137;
count__3074_3121 = G__3138;
i__3075_3122 = G__3139;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with [[reactive]] mixin. Use this function instead of `deref` inside render, and your component will subscribe to changes happening to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * 
 *           [[derived-atom]] will:
 *        
 *           - Take N “source” refs.
 *           - Set up a watch on each of them.
 *           - Create “sink” atom.
 *           - When any of source refs changes:
 *              - re-run function `f`, passing N dereferenced values of source refs.
 *              - `reset!` result of `f` to the sink atom.
 *           - Return sink atom.
 * 
 *           Example:
 * 
 *           ```
 *           (def *a (atom 0))
 *           (def *b (atom 1))
 *           (def *x (derived-atom [*a *b] ::key
 *                     (fn [a b]
 *                       (str a ":" b))))
 *           
 *           (type *x)  ;; => clojure.lang.Atom
 *           (deref *x) ;; => "0:1"
 *           
 *           (swap! *a inc)
 *           (deref *x) ;; => "1:1"
 *           
 *           (reset! *b 7)
 *           (deref *x) ;; => "1:7"
 *           ```
 * 
 *           Arguments:
 *        
 *           - `refs` - sequence of source refs,
 *           - `key`  - unique key to register watcher, same as in `clojure.core/add-watch`,
 *           - `f`    - function that must accept N arguments (same as number of source refs) and return a value to be written to the sink ref. Note: `f` will be called with already dereferenced values,
 *           - `opts` - optional. Map of:
 *             - `:ref` - use this as sink ref. By default creates new atom,
 *             - `:check-equals?` - Defaults to `true`. If equality check should be run on each source update: `(= @sink (f new-vals))`. When result of recalculating `f` equals to the old value, `reset!` won’t be called. Set to `false` if checking for equality can be expensive.
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 * ```
 * (def db (atom { :users { "Ivan" { :age 30 }}}))
 * 
 * (def ivan (rum/cursor db [:users "Ivan"]))
 * (deref ivan) ;; => { :age 30 }
 * 
 * (swap! ivan update :age inc) ;; => { :age 31 }
 * (deref db) ;; => { :users { "Ivan" { :age 31 }}}
 * 
 * (swap! db update-in [:users "Ivan" :age] inc)
 * ;; => { :users { "Ivan" { :age 32 }}}
 * 
 * (deref ivan) ;; => { :age 32 }
 * ```
 *   
 * Returned value supports `deref`, `swap!`, `reset!`, watches and metadata.
 *   
 * The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__4534__auto__ = [];
var len__4531__auto___3146 = arguments.length;
var i__4532__auto___3147 = (0);
while(true){
if((i__4532__auto___3147 < len__4531__auto___3146)){
args__4534__auto__.push((arguments[i__4532__auto___3147]));

var G__3148 = (i__4532__auto___3147 + (1));
i__4532__auto___3147 = G__3148;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__3143){
var map__3144 = p__3143;
var map__3144__$1 = ((((!((map__3144 == null)))?(((((map__3144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3144):map__3144);
var options = map__3144__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor_in.cljs$lang$applyTo = (function (seq3140){
var G__3141 = cljs.core.first.call(null,seq3140);
var seq3140__$1 = cljs.core.next.call(null,seq3140);
var G__3142 = cljs.core.first.call(null,seq3140__$1);
var seq3140__$2 = cljs.core.next.call(null,seq3140__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3141,G__3142,seq3140__$2);
});

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4534__auto__ = [];
var len__4531__auto___3152 = arguments.length;
var i__4532__auto___3153 = (0);
while(true){
if((i__4532__auto___3153 < len__4531__auto___3152)){
args__4534__auto__.push((arguments[i__4532__auto___3153]));

var G__3154 = (i__4532__auto___3153 + (1));
i__4532__auto___3153 = G__3154;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor.cljs$lang$applyTo = (function (seq3149){
var G__3150 = cljs.core.first.call(null,seq3149);
var seq3149__$1 = cljs.core.next.call(null,seq3149);
var G__3151 = cljs.core.first.call(null,seq3149__$1);
var seq3149__$2 = cljs.core.next.call(null,seq3149__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3150,G__3151,seq3149__$2);
});

/**
 * Takes initial value or value returning fn and returns a tuple of [value set-value!],
 *   where `value` is current state value and `set-value!` is a function that schedules re-render.
 * 
 *   (let [[value set-state!] (rum/use-state 0)]
 *  [:button {:on-click #(set-state! (inc value))}
 *    value])
 */
rum.core.use_state = (function rum$core$use_state(value_or_fn){
return React.useState(value_or_fn);
});
/**
 * Takes reducing function and initial state value.
 *   Returns a tuple of [value dispatch!], where `value` is current state value and `dispatch` is a function that schedules re-render.
 * 
 *   (defmulti value-reducer (fn [event value] event))
 * 
 *   (defmethod value-reducer :inc [_ value]
 *  (inc value))
 * 
 *   (let [[value dispatch!] (rum/use-reducer value-reducer 0)]
 *  [:button {:on-click #(dispatch! :inc)}
 *    value])
 * 
 *   Read more at https://reactjs.org/docs/hooks-reference.html#usereducer
 */
rum.core.use_reducer = (function rum$core$use_reducer(reducer_fn,initial_value){
return React.useReducer((function (p1__3156_SHARP_,p2__3155_SHARP_){
return reducer_fn.call(null,p2__3155_SHARP_,p1__3156_SHARP_);
}),initial_value,cljs.core.identity);
});
/**
 * Takes setup-fn that executes either on the first render or after every update.
 *   The function may return cleanup-fn to cleanup the effect, either before unmount or before every next update.
 *   Calling behavior is controlled by deps argument.
 * 
 *   (rum/use-effect!
 *  (fn []
 *    (.addEventListener js/window "load" handler)
 *    #(.removeEventListener js/window "load" handler))
 *  []) ;; empty deps collection instructs React to run setup-fn only once on initial render
 *      ;; and cleanup-fn only once before unmounting
 * 
 *   Read more at https://reactjs.org/docs/hooks-effect.html
 */
rum.core.use_effect_BANG_ = (function rum$core$use_effect_BANG_(var_args){
var G__3158 = arguments.length;
switch (G__3158) {
case 1:
return rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (setup_fn){
return React.useEffect((function (){
var or__3949__auto__ = setup_fn.call(null);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
}));
});

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (setup_fn,deps){
return React.useEffect((function (){
var or__3949__auto__ = setup_fn.call(null);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
}),((cljs.core.array_QMARK_.call(null,deps))?deps:cljs.core.into_array.call(null,deps)));
});

rum.core.use_effect_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Takes callback function and returns memoized variant, memoization is done based on provided deps collection.
 * 
 *   (rum/defc button < rum/static
 *  [{:keys [on-click]} text]
 *  [:button {:on-click on-click}
 *    text])
 * 
 *   (rum/defc app [v]
 *  (let [on-click (rum/use-callback #(do-stuff v) [v])]
 *    ;; because on-click callback is memoized here based on v argument
 *    ;; the callback won't be re-created on every render, unless v changes
 *    ;; which means that underlying `button` component won't re-render wastefully
 *    [button {:on-click on-click}
 *      "press me"]))
 * 
 *   Read more at https://reactjs.org/docs/hooks-reference.html#usecallback
 */
rum.core.use_callback = (function rum$core$use_callback(var_args){
var G__3161 = arguments.length;
switch (G__3161) {
case 1:
return rum.core.use_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.use_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.use_callback.cljs$core$IFn$_invoke$arity$1 = (function (callback){
return React.useCallback(callback);
});

rum.core.use_callback.cljs$core$IFn$_invoke$arity$2 = (function (callback,deps){
return React.useCallback(callback,((cljs.core.array_QMARK_.call(null,deps))?deps:cljs.core.into_array.call(null,deps)));
});

rum.core.use_callback.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function, memoizes it based on provided deps collection and executes immediately returning a result.
 *   Read more at https://reactjs.org/docs/hooks-reference.html#usememo
 */
rum.core.use_memo = (function rum$core$use_memo(var_args){
var G__3164 = arguments.length;
switch (G__3164) {
case 1:
return rum.core.use_memo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.use_memo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.use_memo.cljs$core$IFn$_invoke$arity$1 = (function (f){
return React.useMemo(f);
});

rum.core.use_memo.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
return React.useMemo(f,((cljs.core.array_QMARK_.call(null,deps))?deps:cljs.core.into_array.call(null,deps)));
});

rum.core.use_memo.cljs$lang$maxFixedArity = 2;

/**
 * Takes a value and puts it into a mutable container which is persisted for the full lifetime of the component.
 *   https://reactjs.org/docs/hooks-reference.html#useref
 */
rum.core.use_ref = (function rum$core$use_ref(initial_value){
return React.useRef(initial_value);
});
rum.core.create_ref = (function rum$core$create_ref(){
return React.createRef();
});
/**
 * Takes a ref returned from use-ref and returns its current value.
 */
rum.core.deref = (function rum$core$deref(ref){
return ref.current;
});
rum.core.set_ref_BANG_ = (function rum$core$set_ref_BANG_(ref,value){
return ref.current = value;
});
/**
 * Main server-side rendering method. Given component, returns HTML string with static markup of that component.
 *   Serve that string to the browser and [[hydrate]] same Rum component over it. React will be able to reuse already existing DOM and will initialize much faster.
 *   No opts are supported at the moment.
 */
rum.core.render_html = (function rum$core$render_html(var_args){
var G__3167 = arguments.length;
switch (G__3167) {
case 1:
return rum.core.render_html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.render_html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.render_html.cljs$core$IFn$_invoke$arity$1 = (function (element){
return rum.core.render_html.call(null,element,null);
});

rum.core.render_html.cljs$core$IFn$_invoke$arity$2 = (function (element,opts){
if(!((cljs.core._STAR_target_STAR_ === "nodejs"))){
return ReactDOMServer.renderToString(element);
} else {
var react_dom_server = require("react-dom/server");
return react_dom_server.renderToString(element);
}
});

rum.core.render_html.cljs$lang$maxFixedArity = 2;

/**
 * Same as [[render-html]] but returned string has nothing React-specific.
 *   This allows Rum to be used as traditional server-side templating engine.
 */
rum.core.render_static_markup = (function rum$core$render_static_markup(src){
if(!((cljs.core._STAR_target_STAR_ === "nodejs"))){
return ReactDOMServer.renderToStaticMarkup(src);
} else {
var react_dom_server = require("react-dom/server");
return react_dom_server.renderToStaticMarkup(src);
}
});
rum.core.adapt_class_helper = (function rum$core$adapt_class_helper(type,attrs,children){
var args = [type,attrs].concat(children);
return React.createElement.apply(React,args);
});

//# sourceMappingURL=core.js.map
