(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{RNiq:function(t,e,n){"use strict";n.r(e);var a=n("o0o1"),r=n.n(a),c=n("1OyB"),i=n("vuIU"),o=n("JX7q"),u=n("md7G"),s=n("foSv"),l=n("Ji7U"),f=n("q1tI"),d=n.n(f),h=n("X+Rt"),p=n("vDqi"),v=n.n(p),w=d.a.createElement;function g(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var m={title:"Index title",description:"Index description"},y=function(t){Object(l.a)(a,t);var e,n=(e=a,function(){var t,n=Object(s.a)(e);if(g()){var a=Object(s.a)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(u.a)(this,t)});function a(t){var e;return Object(c.a)(this,a),(e=n.call(this,t)).state={loading:!0,dog:{}},e.fetchData=e.fetchData.bind(Object(o.a)(e)),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.awrap(this.fetchData());case 2:case"end":return t.stop()}}),null,this,null,Promise)}},{key:"fetchData",value:function(){var t,e;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return this.setState({loading:!0}),n.next=3,r.a.awrap(v.a.get("https://api.thedogapi.com/v1/images/search?limit=1"));case 3:t=n.sent,e=t.data,this.setState({dog:e[0],loading:!1});case 6:case"end":return n.stop()}}),null,this,null,Promise)}},{key:"render",value:function(){return w(h.a,{meta:m},w("div",null,w("h1",null,"This is the Front Page."),w("h3",null,"Random dog of the day:"),w("img",{src:this.state.dog.url,alt:""})))}}]),a}(d.a.Component);e.default=y},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1,3]]]);