!function(t,e){"use strict";"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(function(t){return e()}):t.DatePicker=e()}(this,function(){"use strict";var t=!!window.addEventListener,e=window.document,i=window.setTimeout,n=function(e,i,n,s){t?e.addEventListener(i,n,!!s):e.attachEvent("on"+i,n)},s=function(e,i,n,s){t?e.removeEventListener(i,n,!!s):e.detachEvent("on"+i,n)},a=function(t,i,n){var s;e.createEvent?(s=e.createEvent("HTMLEvents"),s.initEvent(i,!0,!1),s=g(s,n),t.dispatchEvent(s)):e.createEventObject&&(s=e.createEventObject(),s=g(s,n),t.fireEvent("on"+i,s))},o=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},r=function(t,e){return-1!==(" "+t.className+" ").indexOf(" "+e+" ")},h=function(t,e){r(t,e)||(t.className=""===t.className?e:t.className+" "+e)},l=function(t,e){t.className=o((" "+t.className+" ").replace(" "+e+" "," "))},u=function(t){return/Array/.test(Object.prototype.toString.call(t))},f=function(t){return/Date/.test(Object.prototype.toString.call(t))&&!isNaN(t.getTime())},c=function(t){var e=t.getDay();return 0===e||6===e},d=function(t){return t%4===0&&t%100!==0||t%400===0},p=function(t,e){return[31,d(t)?29:28,31,30,31,30,31,31,30,31,30,31][e]},_=function(t){f(t)&&t.setHours(0,0,0,0)},m=function(t,e){return t.getTime()===e.getTime()},g=function(t,e,i){var n,s;for(n in e)s=void 0!==t[n],s&&"object"==typeof e[n]&&null!==e[n]&&void 0===e[n].nodeName?f(e[n])?i&&(t[n]=new Date(e[n].getTime())):u(e[n])?i&&(t[n]=e[n].slice(0)):t[n]=g({},e[n],i):(i||!s)&&(t[n]=e[n]);return t},v=function(t){return t.month<0&&(t.year-=Math.ceil(Math.abs(t.month)/12),t.month+=12),t.month>11&&(t.year+=Math.floor(Math.abs(t.month)/12),t.month-=12),t},y=function(t){var e,i,n=t.getFullYear();return(e=t.getDate())<10?e="0"+e:"",(i=t.getMonth()+1)<10?i="0"+i:"",n+"-"+i+"-"+e},D={fields:[],position:"bottom left",bounded:!1,reposition:!0,format:"dd/MM/yyyy",parser:null,firstDay:0,minDate:null,maxDate:null,yearRange:10,minYear:0,maxYear:9999,minMonth:void 0,maxMonth:void 0,isRTL:!1,yearSuffix:"",showMonthAfterYear:!1,i18n:{previousMonth:"<",nextMonth:">",weekdays:["星期天","星期一","星期二","星期三","星期四","星期五","星期六"],weekdaysShort:["日","一","二","三","四","五","六"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},theme:null,onSelect:null,onOpen:null,onClose:null,onDraw:null},w=function(t,e,i){for(e+=t.firstDay;e>=7;)e-=7;return i?t.i18n.weekdaysShort[e]:t.i18n.weekdays[e]},b=function(t,e,i,n,s,a,o,r,h,l){if(o)return'<td class="is-empty"></td>';var u=[];return a&&u.push("is-disabled"),s&&u.push("is-today"),n&&u.push("is-selected"),r&&u.push("is-between"),h&&u.push("is-selected-in"),l&&u.push("is-selected-out"),'<td data-day="'+t+'" class="'+u.join(" ")+'"><button class="pika-button pika-day" type="button" data-pika-year="'+i+'" data-pika-month="'+e+'" data-pika-day="'+t+'">'+t+"</button></td>"},k=function(t,e){return"<tr>"+(e?t.reverse():t).join("")+"</tr>"},x=function(t){return"<tbody>"+t.join("")+"</tbody>"},M=function(t){var e,i=[];for(e=0;7>e;e++)i.push('<th scope="col"><abbr title="'+w(t,e)+'">'+w(t,e,!0)+"</abbr></th>");return"<thead>"+(t.isRTL?i.reverse():i).join("")+"</thead>"},T=function(t,e,i,n,s){var a,o,r,h,l,f=t._o,c=i===f.minYear,d=i===f.maxYear,p='<div class="pika-title">',_=!0,m=!0;for(r=[],a=0;12>a;a++)r.push('<option value="'+(i===s?a-e:12+a-e)+'"'+(a===n?" selected":"")+(c&&a<f.minMonth||d&&a>f.maxMonth?"disabled":"")+">"+f.i18n.months[a]+"</option>");for(h='<div class="pika-label">'+f.i18n.months[n]+'<select class="pika-select pika-select-month" tabindex="-1">'+r.join("")+"</select></div>",u(f.yearRange)?(a=f.yearRange[0],o=f.yearRange[1]+1):(a=i-f.yearRange,o=1+i+f.yearRange),r=[];o>a&&a<=f.maxYear;a++)a>=f.minYear&&r.push('<option value="'+a+'"'+(a===i?" selected":"")+">"+a+"</option>");return l='<div class="pika-label">'+i+f.yearSuffix+'<select class="pika-select pika-select-year" tabindex="-1">'+r.join("")+"</select></div>",p+=f.showMonthAfterYear?l+h:h+l,c&&(0===n||f.minMonth>=n)&&(_=!1),d&&(11===n||f.maxMonth<=n)&&(m=!1),0===e&&(p+='<button class="pika-prev'+(_?"":" is-disabled")+'" type="button">'+f.i18n.previousMonth+"</button>"),0===e&&(p+='<button class="pika-next'+(m?"":" is-disabled")+'" type="button">'+f.i18n.nextMonth+"</button>"),p+="</div>"},C=function(t,e){return'<table cellpadding="0" cellspacing="0" class="pika-table">'+M(t)+x(e)+"</table>"},N=function(t,e){var i;for(i=0;i<t.length;i++)e(t[i],i)},R=function(t){for(var e=[t];t;t=t.parentNode)e.unshift(t);return e},Y=function(t,e){var i=R(t),n=R(e);if(i[0]!=n[0])throw"No common ancestor!";for(var s=0;s<i.length;s++)if(i[s]!=n[s])return i[s-1]},j=function(s){var a=this,o=a.config(s);if(a._onMouseDown=function(t){if(a._v){t=t||window.event;var e=t.target||t.srcElement;if(e){if(!r(e.parentNode,"is-disabled")){if(r(e,"pika-button")&&!r(e,"is-empty"))return a.setDate(new Date(e.getAttribute("data-pika-year"),e.getAttribute("data-pika-month"),e.getAttribute("data-pika-day"))),void(null==a._e&&o.multiple||i(function(){a.hide(),N(o.fields,function(t){t.blur()})},100));r(e,"pika-prev")?a.prevMonth():r(e,"pika-next")&&a.nextMonth()}if(r(e,"pika-select"))a._c=!0;else{if(!t.preventDefault)return t.returnValue=!1,!1;t.preventDefault()}}}},a._onChange=function(t){t=t||window.event;var e=t.target||t.srcElement;e&&(r(e,"pika-select-month")?a.gotoMonth(e.value):r(e,"pika-select-year")&&a.gotoYear(e.value))},a._onInputChange=function(t){var e,i;i=t.target,t.firedBy!==a&&(e=this.hasParser?this._p.parse(i.value,o.format):new Date(Date.parse(i.value)),f(e)&&a.setDate(e),a._v||a.show(i))},a._onInputFocus=function(t){var e=t.target;null!=a._f&&a._f!==e&&(a._v=!1),a._f=e,a.show(e)},a._onInputClick=function(t){var e=t.target;a.show(e)},a._onClick=function(e){e=e||window.event;var i=e.target||e.srcElement,s=i;if(i){!t&&r(i,"pika-select")&&(i.onchange||(i.setAttribute("onchange","return;"),n(i,"change",a._onChange)));do if(r(s,"pika-single")||-1!==o.fields.indexOf(s))return;while(s=s.parentNode);a._v&&-1===o.fields.indexOf(i)&&-1===o.fields.indexOf(s)&&a.hide()}},a.el=e.createElement("div"),a.el.className="pika-single"+(o.isRTL?" is-rtl":"")+(o.theme?" "+o.theme:"")+(o.multiple?" is-multiple":" is-single"),n(a.el,"mousedown",a._onMouseDown,!0),n(a.el,"change",a._onChange),o.bounded===!0){var h;h=2===o.fields.length?Y(o.fields[0],o.fields[1]):o.fields[0].parentNode,h.appendChild(a.el)}else e.body.appendChild(a.el);a.hasParser=null!=o.parser,N(o.fields,function(t,e){var i;n(t,"change",a._onInputChange),n(t,"click",a._onInputClick),n(t,"focus",a._onInputFocus),i=a.hasParser&&t.value?a._p.parse(t.value,o.format):new Date(Date.parse(t.value)),f(i)?(_(i),e>0?a._e=i:a._s=i,a._f=t,a.gotoDate(i)):a.gotoDate(new Date)}),this.hide()};return j.prototype={config:function(t){this._o||(this._o=g({},D,!0)),this._s=null,this._e=null,this._i=null;var e=g(this._o,t,!0);if(e.isRTL=!!e.isRTL,!u(e.fields)||0===e.fields.length)throw"You must include one or two fields as options";if(e.multiple=e.fields.length>1,this._p=e.parser,N(e.fields,function(t,e){h(t,"pika-trigger"),h(t,"pika-"+(0===e?"in":"out"))}),e.theme="string"==typeof e.theme&&e.theme?e.theme:null,e.disableWeekends=!!e.disableWeekends,e.disableDayFn="function"==typeof e.disableDayFn?e.disableDayFn:null,f(e.minDate)||(e.minDate=!1),f(e.maxDate)||(e.maxDate=!1),e.minDate&&e.maxDate&&e.maxDate<e.minDate&&(e.maxDate=e.minDate=!1),e.minDate&&this.setMinDate(e.minDate),e.maxDate&&(_(e.maxDate),e.maxYear=e.maxDate.getFullYear(),e.maxMonth=e.maxDate.getMonth()),u(e.yearRange)){var i=(new Date).getFullYear()-10;e.yearRange[0]=parseInt(e.yearRange[0],10)||i,e.yearRange[1]=parseInt(e.yearRange[1],10)||i}else e.yearRange=Math.abs(parseInt(e.yearRange,10))||D.yearRange,e.yearRange>100&&(e.yearRange=100);return e},toString:function(t,e){var i=this._s;return t&&(i=r(t,"pika-in")?this._s:this._e),console.log("this.date",i.getDate()),f(i)?this.hasParser?this._p.format(i,e||this._o.format):y(i):""},getDate:function(t){var e=this._s;return t&&"out"===t&&(e=this._e),f(e)?new Date(e.getTime()):null},setDate:function(t,e){if(!t)return"in"===this._w?this._s=null:this._e=null,this._f&&(this._f.value="",a(this._f,"change",{firedBy:this})),this.draw();if("string"==typeof t&&(t=new Date(Date.parse(t))),f(t)){var i,n=this._o.minDate,s=this._o.maxDate,o=this;f(n)&&n>t?t=n:f(s)&&t>s&&(t=s),i=new Date(t.getTime()),"in"===this._w?(this._s=i,_(this._s),this.gotoDate(this._s)):"out"===this._w&&(this._e=i,_(this._e),this.gotoDate(this._e)),this._f&&(this._f.value=this.toString(this._f),a(this._f,"change",{firedBy:this})),this._s&&this._e&&(this._s.getTime()>this._e.getTime()&&(this._e=new Date(this._s),this._e.setDate(this._e.getDate()+this._i)),this._s.getTime()==this._e.getTime()&&(this._e=new Date(this._s),this._e.setDate(this._e.getDate()+1)),N(this._o.fields,function(t){t.value=o.toString(t),a(t,"change",{firedBy:o})}),this._i=Math.round(Math.abs((this._e.getTime()-this._s.getTime())/864e5))),e||"function"!=typeof this._o.onSelect||this._o.onSelect.call(this,this.getDate(this._w)),"in"===this._w&&null==this._e&&N(this._o.fields,function(t,e){r(t,"pika-out")&&(a(t,"focus"),_(o._s),o.gotoDate(o._s))})}},getDiff:function(){var t;return t=this._o.multiple&&this._e&&this._s?(this._e-this._s)/864e5:0},gotoDate:function(t){var e=!0;if(f(t)){if(this.calendars){var i=new Date(this.calendars[0].year,this.calendars[0].month,1),n=new Date(this.calendars[this.calendars.length-1].year,this.calendars[this.calendars.length-1].month,1),s=t.getTime();n.setMonth(n.getMonth()+1),n.setDate(n.getDate()-1),e=s<i.getTime()||n.getTime()<s}e&&(this.calendars=[{month:t.getMonth(),year:t.getFullYear()}]),this.adjustCalendars()}},adjustCalendars:function(){this.calendars[0]=v(this.calendars[0]),this.draw()},gotoToday:function(){this.gotoDate(new Date)},gotoMonth:function(t){isNaN(t)||(this.calendars[0].month=parseInt(t,10),this.adjustCalendars())},nextMonth:function(){this.calendars[0].month++,this.adjustCalendars()},prevMonth:function(){this.calendars[0].month--,this.adjustCalendars()},gotoYear:function(t){isNaN(t)||(this.calendars[0].year=parseInt(t,10),this.adjustCalendars())},setMinDate:function(t){_(t),this._o.minDate=t,this._o.minYear=t.getFullYear(),this._o.minMonth=t.getMonth()},setMaxDate:function(t){this._o.maxDate=t},draw:function(t){if(this._v||t){var e=this._o,n=e.minYear,s=e.maxYear,a=e.minMonth,o=e.maxMonth,r="";this._y<=n&&(this._y=n,!isNaN(a)&&this._m<a&&(this._m=a)),this._y>=s&&(this._y=s,!isNaN(o)&&this._m>o&&(this._m=o)),r+='<div class="pika-lendar">'+T(this,0,this.calendars[0].year,this.calendars[0].month,this.calendars[0].year)+this.render(this.calendars[0].year,this.calendars[0].month)+"</div>",this.el.innerHTML=r;var h=this;null!=this._f&&"hidden"!==this._f.type&&i(function(){h._f&&h._f.focus()},1),"function"==typeof this._o.onDraw&&i(function(){h._o.onDraw.call(h)},0)}},adjustPosition:function(t){var i,n,s,a=t,o=this.el.offsetWidth,r=this.el.offsetHeight,h=window.innerWidth||e.documentElement.clientWidth,l=window.innerHeight||e.documentElement.clientHeight,u=window.pageYOffset||e.body.scrollTop||e.documentElement.scrollTop;if(this._o.bounded===!0)i=a.offsetLeft,n=a.offsetTop+a.offsetHeight;else{if("function"==typeof t.getBoundingClientRect)s=t.getBoundingClientRect(),i=s.left+window.pageXOffset,n=s.bottom+window.pageYOffset;else for(i=a.offsetLeft,n=a.offsetTop+a.offsetHeight;a=a.offsetParent;)i+=a.offsetLeft,n+=a.offsetTop;(this._o.reposition&&i+o>h||this._o.position.indexOf("right")>-1&&i-o+t.offsetWidth>0)&&(i=i-o+t.offsetWidth),(this._o.reposition&&n+r>l+u||this._o.position.indexOf("top")>-1&&n-r-t.offsetHeight>0)&&(n=n-r-t.offsetHeight)}this.el.style.position="absolute",this.el.style.left=i+"px",this.el.style.top=n+"px"},render:function(t,e){var i=this._o,n=new Date,s=p(t,e),a=new Date(t,e,1).getDay(),o=[],h=[];_(n),i.firstDay>0&&(a-=i.firstDay,0>a&&(a+=7));for(var l=s+a,u=l;u>7;)u-=7;l+=7-u;for(var d=0,g=0;l>d;d++){var v=new Date(t,e,1+(d-a)),y=!1,D=!1,w=!1,x=!1,M=m(v,n),T=a>d||d>=s+a,N=i.minDate&&v<i.minDate||i.maxDate&&v>i.maxDate||i.disableWeekends&&c(v)||i.disableDayFn&&i.disableDayFn(v);f(this._s)&&(D=m(v,this._s),w=!0),!N&&f(this._s)&&r(this._f,"pika-out")&&(N=v<this._s),f(this._e)&&!D&&(D=m(v,this._e),x=!0),f(this._s)&&f(this._e)&&(y=v>this._s&&v<this._e),D||(w=!1,x=!1),h.push(b(1+(d-a),e,t,D,M,N,T,y,w,x)),7===++g&&(o.push(k(h,i.isRTL)),h=[],g=0)}return C(i,o)},isVisible:function(){return this._v},setCallback:function(t,e){e=e||"onSelect",this._o[e]=t},show:function(t){var i;t||(t=this._o.fields[0]),this._f=t,this._v||(l(this.el,"is-hidden"),this._v=!0,this._w=r(t,"pika-in")?"in":"out",i=this.hasParser&&t.value?this._p.parse(t.value,this._o.format):new Date(Date.parse(t.value)),this.gotoDate(f(i)?i:r(t,"pika-out")&&null!=this._s?this._s:new Date),n(e,"click",this._onClick),this.adjustPosition(t),"function"==typeof this._o.onOpen&&this._o.onOpen.call(this))},which:function(){return this._w},hide:function(){var t=this._v;t!==!1&&(s(e,"click",this._onClick),this.el.style.position="absolute",this.el.style.left="auto",this.el.style.top="auto",h(this.el,"is-hidden"),this._v=!1,this._f=null,void 0!==t&&"function"==typeof this._o.onClose&&this._o.onClose.call(this))},destroy:function(){var t=this;this.hide(),s(this.el,"mousedown",this._onMouseDown,!0),s(this.el,"change",this._onChange),N(this._o.fields,function(e){e.blur(),l(e,"pika-trigger"),l(e,"pika-in"),l(e,"pika-out"),s(e,"change",t._onInputChange),s(e,"click",t._onInputClick),s(e,"focus",t._onInputFocus)}),this.el.parentNode&&this.el.parentNode.removeChild(this.el)}},j});