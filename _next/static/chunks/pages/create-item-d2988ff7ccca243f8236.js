(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[779],{2025:function(e,t,n){"use strict";n.d(t,{A:function(){return r},k:function(){return c}});var r="0x3CA1E6843Fc90E3822deE3d66bb76A4EDd6098bE",c="0x6347e95fE2205f7101d53BF578cC8aDf7f683126"},2605:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r=n(809),c=n.n(r),a=n(5893),s=n(6265),i=n(2447),o=n(7294),u=n(241),p=n(387),f=n(7616),l=n(5241),d=n(1163),h=n(2484),g=n.n(h),b=n(2025),m=n(3334),v=n(6127);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=(0,l.create)("https://ipfs.infura.io:5001/api/v0");function O(){var e=(0,o.useState)(null),t=e[0],n=e[1],r=(0,o.useState)({price:"",name:"",description:""}),s=r[0],l=r[1],h=(0,d.useRouter)();function x(){return(x=(0,i.Z)(c().mark((function e(t){var r,a,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.target.files[0],e.prev=1,e.next=4,y.add(r,{progress:function(e){return console.log("received: ".concat(e))}});case 4:a=e.sent,s="https://ipfs.infura.io/ipfs/".concat(a.path),n(s),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("Error uploading file: ",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function O(){return(O=(0,i.Z)(c().mark((function e(){var n,r,a,i,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=s.name,r=s.description,a=s.price,n&&r&&a&&t){e.next=3;break}return e.abrupt("return");case 3:return i=JSON.stringify({name:n,description:r,image:t}),e.prev=4,e.next=7,y.add(i);case 7:o=e.sent,j("https://ipfs.infura.io/ipfs/".concat(o.path)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log("Error uploading file: ",e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})))).apply(this,arguments)}function j(e){return k.apply(this,arguments)}function k(){return(k=(0,i.Z)(c().mark((function e(t){var n,r,a,i,o,l,d,x,w,y,O,j;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new(g()),e.next=3,n.connect();case 3:return r=e.sent,a=new u.Q(r),i=a.getSigner(),o=new p.CH(b.k,m.Mt,i),e.next=9,o.createToken(t);case 9:return l=e.sent,e.next=12,l.wait();case 12:return d=e.sent,x=d.events[0],w=x.args[2],y=w.toNumber(),O=f.vz(s.price,"ether"),o=new p.CH(b.A,v.Mt,i),e.next=20,o.getListingPrice();case 20:return j=(j=e.sent).toString(),e.next=24,o.createMarketItem(b.k,y,O,{value:j});case 24:return l=e.sent,e.next=27,l.wait();case 27:h.push("/");case 28:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsxs)("div",{className:"w-1/2 flex flex-col pb-12",children:[(0,a.jsx)("input",{placeholder:"Asset Name",className:"mt-8 border rounded p-4",onChange:function(e){return l(w(w({},s),{},{name:e.target.value}))}}),(0,a.jsx)("textarea",{placeholder:"Asset Description",className:"mt-2 border rounded p-4",onChange:function(e){return l(w(w({},s),{},{description:e.target.value}))}}),(0,a.jsx)("input",{placeholder:"Asset Price in MIOTA",className:"mt-2 border rounded p-4",onChange:function(e){return l(w(w({},s),{},{price:e.target.value}))}}),(0,a.jsx)("input",{type:"file",name:"Asset",className:"my-4",onChange:function(e){return x.apply(this,arguments)}}),t&&(0,a.jsx)("img",{className:"rounded mt-4",width:"350",src:t}),(0,a.jsx)("button",{onClick:function(){return O.apply(this,arguments)},className:"font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg",children:"Create Digital Asset"})]})})}},1932:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create-item",function(){return n(2605)}])},7005:function(){},6937:function(){},6784:function(){},8795:function(){}},function(e){e.O(0,[277,235,968,465,774,888,179],(function(){return t=1932,e(e.s=t);var t}));var t=e.O();_N_E=t}]);