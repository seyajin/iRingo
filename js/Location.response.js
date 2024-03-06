class e{static name="Lodash";static version="1.2.2";static about(){return console.log(`\n🟧 ${this.name} v${this.version}\n`)}static get(e={},t="",s=void 0){Array.isArray(t)||(t=this.toPath(t));const a=t.reduce(((e,t)=>Object(e)[t]),e);return void 0===a?s:a}static set(e={},t="",s){return Array.isArray(t)||(t=this.toPath(t)),t.slice(0,-1).reduce(((e,s,a)=>Object(e[s])===e[s]?e[s]:e[s]=/^\d+$/.test(t[a+1])?[]:{}),e)[t[t.length-1]]=s,e}static unset(e={},t=""){return Array.isArray(t)||(t=this.toPath(t)),t.reduce(((e,s,a)=>a===t.length-1?(delete e[s],!0):Object(e)[s]),e)}static toPath(e){return e.replace(/\[(\d+)\]/g,".$1").split(".").filter(Boolean)}static escape(e){const t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};return e.replace(/[&<>"']/g,(e=>t[e]))}static unescape(e){const t={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"};return e.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g,(e=>t[e]))}}class t{static name="$Storage";static version="1.0.9";static about(){return console.log(`\n🟧 ${this.name} v${this.version}\n`)}static data=null;static dataFile="box.dat";static#e=/^@(?<key>[^.]+)(?:\.(?<path>.*))?$/;static#t(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":"undefined"!=typeof Egern?"Egern":void 0}static getItem(t=new String,s=null){let a=s;if(!0===t.startsWith("@")){const{key:s,path:o}=t.match(this.#e)?.groups;t=s;let i=this.getItem(t,{});"object"!=typeof i&&(i={}),a=e.get(i,o);try{a=JSON.parse(a)}catch(e){}}else{switch(this.#t()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":a=$persistentStore.read(t);break;case"Quantumult X":a=$prefs.valueForKey(t);break;case"Node.js":this.data=this.#s(this.dataFile),a=this.data?.[t];break;default:a=this.data?.[t]||null}try{a=JSON.parse(a)}catch(e){}}return a??s}static setItem(t=new String,s=new String){let a=!1;if("object"==typeof s)s=JSON.stringify(s);else s=String(s);if(!0===t.startsWith("@")){const{key:o,path:i}=t.match(this.#e)?.groups;t=o;let n=this.getItem(t,{});"object"!=typeof n&&(n={}),e.set(n,i,s),a=this.setItem(t,n)}else switch(this.#t()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":a=$persistentStore.write(s,t);break;case"Quantumult X":a=$prefs.setValueForKey(s,t);break;case"Node.js":this.data=this.#s(this.dataFile),this.data[t]=s,this.#a(this.dataFile),a=!0;break;default:a=this.data?.[t]||null}return a}static removeItem(t){let s=!1;if(!0===t.startsWith("@")){const{key:a,path:o}=t.match(this.#e)?.groups;t=a;let i=this.getItem(t);"object"!=typeof i&&(i={}),keyValue=e.unset(i,o),s=this.setItem(t,i)}else switch(this.#t()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":case"Node.js":default:s=!1;break;case"Quantumult X":s=$prefs.removeValueForKey(t)}return s}static clear(){let e=!1;switch(this.#t()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":case"Node.js":default:e=!1;break;case"Quantumult X":e=$prefs.removeAllValues()}return e}static#s(e){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(e),s=this.path.resolve(process.cwd(),e),a=this.fs.existsSync(t),o=!a&&this.fs.existsSync(s);if(!a&&!o)return{};{const e=a?t:s;try{return JSON.parse(this.fs.readFileSync(e))}catch(e){return{}}}}}static#a(e=this.dataFile){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(e),s=this.path.resolve(process.cwd(),e),a=this.fs.existsSync(t),o=!a&&this.fs.existsSync(s),i=JSON.stringify(this.data);a?this.fs.writeFileSync(t,i):o?this.fs.writeFileSync(s,i):this.fs.writeFileSync(t,i)}}}class s{static name="ENV";static version="1.7.1";static about(){return console.log(`\n🟧 ${this.name} v${this.version}\n`)}constructor(e,t){console.log(`\n🟧 ${s.name} v${s.version}\n`),this.name=e,this.logs=[],this.isMute=!1,this.isMuteLog=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,t),this.log(`\n🚩 开始!\n${e}\n`)}platform(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":"undefined"!=typeof Egern?"Egern":void 0}isNode(){return"Node.js"===this.platform()}isQuanX(){return"Quantumult X"===this.platform()}isSurge(){return"Surge"===this.platform()}isLoon(){return"Loon"===this.platform()}isShadowrocket(){return"Shadowrocket"===this.platform()}isStash(){return"Stash"===this.platform()}isEgern(){return"Egern"===this.platform()}async getScript(e){return await this.fetch(e).then((e=>e.body))}async runScript(e,s){let a=t.getItem("@chavy_boxjs_userCfgs.httpapi");a=a?.replace?.(/\n/g,"")?.trim();let o=t.getItem("@chavy_boxjs_userCfgs.httpapi_timeout");o=1*o??20,o=s?.timeout??o;const[i,n]=a.split("@"),r={url:`http://${n}/v1/scripting/evaluate`,body:{script_text:e,mock_type:"cron",timeout:o},headers:{"X-Key":i,Accept:"*/*"},timeout:o};await this.fetch(r).then((e=>e.body),(e=>this.logErr(e)))}initGotEnv(e){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,e&&(e.headers=e.headers?e.headers:{},void 0===e.headers.Cookie&&void 0===e.cookieJar&&(e.cookieJar=this.ckjar))}async fetch(t={}||"",s={}){switch(t.constructor){case Object:t={...t,...s};break;case String:t={url:t,...s}}t.method||(t.method="GET",(t.body??t.bodyBytes)&&(t.method="POST")),delete t.headers?.["Content-Length"],delete t.headers?.["content-length"];const a=t.method.toLocaleLowerCase();switch(this.platform()){case"Loon":case"Surge":case"Stash":case"Egern":case"Shadowrocket":default:return delete t.id,t.policy&&(this.isLoon()&&(t.node=t.policy),this.isStash()&&e.set(t,"headers.X-Stash-Selected-Proxy",encodeURI(t.policy))),ArrayBuffer.isView(t.body)&&(t["binary-mode"]=!0),await new Promise(((e,s)=>{$httpClient[a](t,((a,o,i)=>{a?s(a):(o.ok=/^2\d\d$/.test(o.status),o.statusCode=o.status,i&&(o.body=i,1==t["binary-mode"]&&(o.bodyBytes=i)),e(o))}))}));case"Quantumult X":return t.policy&&e.set(t,"opts.policy",t.policy),delete t.charset,delete t.host,delete t.path,delete t.policy,delete t.scheme,delete t.sessionIndex,delete t.statusCode,t.body instanceof ArrayBuffer?(t.bodyBytes=t.body,delete t.body):ArrayBuffer.isView(t.body)?(t.bodyBytes=t.body.buffer.slice(t.body.byteOffset,t.body.byteLength+t.body.byteOffset),delete object.body):t.body&&delete t.bodyBytes,await $task.fetch(t).then((e=>(e.ok=/^2\d\d$/.test(e.statusCode),e.status=e.statusCode,e)),(e=>Promise.reject(e.error)));case"Node.js":let s=require("iconv-lite");this.initGotEnv(t);const{url:o,...i}=t;return await this.got[a](o,i).on("redirect",((e,t)=>{try{if(e.headers["set-cookie"]){const s=e.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),t.cookieJar=this.ckjar}}catch(e){this.logErr(e)}})).then((e=>(e.statusCode=e.status,e.body=s.decode(e.rawBody,this.encoding),e.bodyBytes=e.rawBody,e)),(e=>Promise.reject(e.message)))}}time(e,t=null){const s=t?new Date(t):new Date;let a={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let t in a)new RegExp("("+t+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?a[t]:("00"+a[t]).substr((""+a[t]).length)));return e}msg(e=name,t="",s="",a){const o=e=>{switch(typeof e){case void 0:return e;case"string":switch(this.platform()){case"Surge":case"Stash":case"Egern":default:return{url:e};case"Loon":case"Shadowrocket":return e;case"Quantumult X":return{"open-url":e};case"Node.js":return}case"object":switch(this.platform()){case"Surge":case"Stash":case"Egern":case"Shadowrocket":default:return{url:e.url||e.openUrl||e["open-url"]};case"Loon":return{openUrl:e.openUrl||e.url||e["open-url"],mediaUrl:e.mediaUrl||e["media-url"]};case"Quantumult X":return{"open-url":e["open-url"]||e.url||e.openUrl,"media-url":e["media-url"]||e.mediaUrl,"update-pasteboard":e["update-pasteboard"]||e.updatePasteboard};case"Node.js":return}default:return}};if(!this.isMute)switch(this.platform()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":default:$notification.post(e,t,s,o(a));break;case"Quantumult X":$notify(e,t,s,o(a));case"Node.js":}if(!this.isMuteLog){let a=["","==============📣系统通知📣=============="];a.push(e),t&&a.push(t),s&&a.push(s),console.log(a.join("\n")),this.logs=this.logs.concat(a)}}log(...e){e.length>0&&(this.logs=[...this.logs,...e]),console.log(e.join(this.logSeparator))}logErr(e){switch(this.platform()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":case"Quantumult X":default:this.log("",`❗️ ${this.name}, 错误!`,e);break;case"Node.js":this.log("",`❗️${this.name}, 错误!`,e.stack)}}wait(e){return new Promise((t=>setTimeout(t,e)))}done(t={}){const s=((new Date).getTime()-this.startTime)/1e3;switch(this.log("",`🚩 ${this.name}, 结束! 🕛 ${s} 秒`,""),this.platform()){case"Surge":t.policy&&e.set(t,"headers.X-Surge-Policy",t.policy),$done(t);break;case"Loon":t.policy&&(t.node=t.policy),$done(t);break;case"Stash":t.policy&&e.set(t,"headers.X-Stash-Selected-Proxy",encodeURI(t.policy)),$done(t);break;case"Egern":case"Shadowrocket":default:$done(t);break;case"Quantumult X":t.policy&&e.set(t,"opts.policy",t.policy),delete t.charset,delete t.host,delete t.method,delete t.opt,delete t.path,delete t.policy,delete t.scheme,delete t.sessionIndex,delete t.statusCode,t.body instanceof ArrayBuffer?(t.bodyBytes=t.body,delete t.body):ArrayBuffer.isView(t.body)?(t.bodyBytes=t.body.buffer.slice(t.body.byteOffset,t.body.byteLength+t.body.byteOffset),delete t.body):t.body&&delete t.bodyBytes,$done(t);break;case"Node.js":process.exit(1)}}}class a{static name="XML";static version="0.4.1";static about=()=>console.log(`\n🟧 ${this.name} v${this.version}\n`);static#o="@";static#i="#";static#n={"&amp;":"&","&lt;":"<","&gt;":">","&apos;":"'","&quot;":'"'};static#r={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&apos;",'"':"&quot;"};static parse(e=new String,t=""){const s=this.#n,a=this.#o,o=this.#i;let i=function e(t,s){let i;switch(typeof t){case"string":case"undefined":i=t;break;case"object":const l=t.raw,p=t.name,u=t.tag,h=t.children;i=l||(u?function(e,t){if(!e)return;const s=e.split(/([^\s='"]+(?:\s*=\s*(?:'[\S\s]*?'|"[\S\s]*?"|[^\s'"]*))?)/),o=s.length;let i,n;for(let e=0;e<o;e++){let o=l(s[e]);if(!o)continue;i||(i={});const p=o.indexOf("=");if(p<0)o=a+o,n=null;else{n=o.substr(p+1).replace(/^\s+/,""),o=a+o.substr(0,p).replace(/\s+$/,"");const e=n[0];e!==n[n.length-1]||"'"!==e&&'"'!==e||(n=n.substr(1,n.length-2)),n=r(n)}t&&(n=t(o,n)),c(i,o,n)}return i;function l(e){return e?.trim?.()}}(u,s):h?{}:{[p]:void 0}),"plist"===p?i=Object.assign(i,n(h[0],s)):h?.forEach?.(((t,a)=>{"string"==typeof t?c(i,o,e(t,s),void 0):t.tag||t.children||t.raw?c(i,t.name,e(t,s),void 0):c(i,t.name,e(t,s),h?.[a-1]?.name)})),h&&0===h.length&&c(i,o,null,void 0),s&&(i=s(p||"",i))}return i;function c(e,t,s,a=t){if(void 0!==s){const o=e[a];Array.isArray(o)?o.push(s):o?e[a]=[o,s]:e[t]=s}}}(function(e){const t=e.replace(/^[ \t]+/gm,"").split(/<([^!<>?](?:'[\S\s]*?'|"[\S\s]*?"|[^'"<>])*|!(?:--[\S\s]*?--|\[[^\[\]'"<>]+\[[\S\s]*?]]|DOCTYPE[^\[<>]*?\[[\S\s]*?]|(?:ENTITY[^"<>]*?"[\S\s]*?")?[\S\s]*?)|\?[\S\s]*?\?)>/),s=t.length,a={children:[]};let o=a;const i=[];for(let e=0;e<s;){const s=t[e++];s&&c(s);const a=t[e++];a&&n(a)}return a;function n(e){const t=e.split(" "),s=t.shift(),a=t.length;let n={};switch(s[0]){case"/":const r=e.replace(/^\/|[\s\/].*$/g,"").toLowerCase();for(;i.length;){const e=o?.name?.toLowerCase?.();if(o=i.pop(),e===r)break}break;case"?":n.name=s,n.raw=t.join(" "),l(n);break;case"!":/!\[CDATA\[(.+)\]\]/.test(e)?(n.name="!CDATA",n.raw=e.match(/!\[CDATA\[(.+)\]\]/)):(n.name=s,n.raw=t.join(" ")),l(n);break;default:if(n=function(e){const t={children:[]};e=e.replace(/\s*\/?$/,"");const s=e.search(/[\s='"\/]/);s<0?t.name=e:(t.name=e.substr(0,s),t.tag=e.substr(s));return t}(e),l(n),"/"===(t?.[a-1]??s).slice(-1))delete n.children;else if("link"===s)delete n.children;else i.push(o),o=n}}function c(e){(e=function(e){return e?.replace?.(/^(\r\n|\r|\n|\t)+|(\r\n|\r|\n|\t)+$/g,"")}(e))&&l(r(e))}function l(e){o.children.push(e)}}(e),t);return i;function n(e,t){let s;switch(typeof e){case"string":case"undefined":s=e;break;case"object":const a=e.name,o=e.children;switch(s={},a){case"plist":let e=n(o[0],t);s=Object.assign(s,e);break;case"dict":let i=o.map((e=>n(e,t)));i=function(e,t){var s=0,a=[];for(;s<e.length;)a.push(e.slice(s,s+=t));return a}(i,2),s=Object.fromEntries(i);break;case"array":Array.isArray(s)||(s=[]),s=o.map((e=>n(e,t)));break;case"key":s=o[0];break;case"true":case"false":const r=a;s=JSON.parse(r);break;case"integer":const c=o[0];s=BigInt(c);break;case"real":const l=o[0];s=parseFloat(l);break;case"string":s=o[0]}t&&(s=t(a||"",s))}return s}function r(e){return e.replace(/(&(?:lt|gt|amp|apos|quot|#(?:\d{1,6}|x[0-9a-fA-F]{1,5}));)/g,(function(e){if("#"===e[1]){const t="x"===e[2]?parseInt(e.substr(3),16):parseInt(e.substr(2),10);if(t>-1)return String.fromCharCode(t)}return s[e]||e}))}}static stringify(e=new Object,t=""){this.#r;const s=this.#o,a=this.#i;let o="";for(let t in e)o+=i(e[t],t,"");return o=t?o.replace(/\t/g,t):o.replace(/\t|\n/g,""),o;function i(e,t,o){let r="";switch(typeof e){case"object":if(Array.isArray(e))r=e.reduce(((e,s)=>e+`${o}${i(s,t,`${o}\t`)}\n`),"");else{let c="",l=!1;for(let a in e)a[0]===s?(c+=` ${a.substring(1)}="${e[a].toString()}"`,delete e[a]):void 0===e[a]?t=a:l=!0;if(r+=`${o}<${t}${c}${l||"link"===t?"":"/"}>`,l){if("plist"===t)r+=n(e,t,`${o}\t`);else for(let t in e)if(t===a)r+=e[t]??"";else r+=i(e[t],t,`${o}\t`);r+=("\n"===r.slice(-1)?o:"")+`</${t}>`}}break;case"string":switch(t){case"?xml":r+=`${o}<${t} ${e.toString()}>`;break;case"?":r+=`${o}<${t}${e.toString()}${t}>`;break;case"!":r+=`${o}\x3c!--${e.toString()}--\x3e`;break;case"!DOCTYPE":r+=`${o}<${t} ${e.toString()}>`;break;case"!CDATA":r+=`${o}<![CDATA[${e.toString()}]]>`;break;case a:r+=e;break;default:r+=`${o}<${t}>${e.toString()}</${t}>`}break;case"undefined":r+=o+`<${t.toString()}/>`}return r}function n(e,t,s){let a="";switch(typeof e){case"boolean":a=`${s}<${e.toString()}/>`;break;case"number":a=`${s}<real>${e.toString()}</real>`;break;case"bigint":a=`${s}<integer>${e.toString()}</integer>`;break;case"string":a=`${s}<string>${e.toString()}</string>`;break;case"object":let r="";if(Array.isArray(e)){for(var o=0,i=e.length;o<i;o++)r+=`${s}${n(e[o],t,`${s}\t`)}`;a=`${s}<array>${r}${s}</array>`}else{let t="";Object.entries(e).forEach((([e,a])=>{t+=`${s}<key>${e}</key>`,t+=n(a,e,s)})),a=`${s}<dict>${t}${s}</dict>`}}return a}}}var o={Switch:!0},i={Storefront:[["AE","143481"],["AF","143610"],["AG","143540"],["AI","143538"],["AL","143575"],["AM","143524"],["AO","143564"],["AR","143505"],["AT","143445"],["AU","143460"],["AZ","143568"],["BA","143612"],["BB","143541"],["BD","143490"],["BE","143446"],["BF","143578"],["BG","143526"],["BH","143559"],["BJ","143576"],["BM","143542"],["BN","143560"],["BO","143556"],["BR","143503"],["BS","143539"],["BT","143577"],["BW","143525"],["BY","143565"],["BZ","143555"],["CA","143455"],["CD","143613"],["CG","143582"],["CH","143459"],["CI","143527"],["CL","143483"],["CM","143574"],["CN","143465"],["CO","143501"],["CR","143495"],["CV","143580"],["CY","143557"],["CZ","143489"],["DE","143443"],["DK","143458"],["DM","143545"],["DO","143508"],["DZ","143563"],["EC","143509"],["EE","143518"],["EG","143516"],["ES","143454"],["FI","143447"],["FJ","143583"],["FM","143591"],["FR","143442"],["GA","143614"],["GB","143444"],["GD","143546"],["GF","143615"],["GH","143573"],["GM","143584"],["GR","143448"],["GT","143504"],["GW","143585"],["GY","143553"],["HK","143463"],["HN","143510"],["HR","143494"],["HU","143482"],["ID","143476"],["IE","143449"],["IL","143491"],["IN","143467"],["IQ","143617"],["IS","143558"],["IT","143450"],["JM","143511"],["JO","143528"],["JP","143462"],["KE","143529"],["KG","143586"],["KH","143579"],["KN","143548"],["KP","143466"],["KR","143466"],["KW","143493"],["KY","143544"],["KZ","143517"],["TC","143552"],["TD","143581"],["TJ","143603"],["TH","143475"],["TM","143604"],["TN","143536"],["TO","143608"],["TR","143480"],["TT","143551"],["TW","143470"],["TZ","143572"],["LA","143587"],["LB","143497"],["LC","143549"],["LI","143522"],["LK","143486"],["LR","143588"],["LT","143520"],["LU","143451"],["LV","143519"],["LY","143567"],["MA","143620"],["MD","143523"],["ME","143619"],["MG","143531"],["MK","143530"],["ML","143532"],["MM","143570"],["MN","143592"],["MO","143515"],["MR","143590"],["MS","143547"],["MT","143521"],["MU","143533"],["MV","143488"],["MW","143589"],["MX","143468"],["MY","143473"],["MZ","143593"],["NA","143594"],["NE","143534"],["NG","143561"],["NI","143512"],["NL","143452"],["NO","143457"],["NP","143484"],["NR","143606"],["NZ","143461"],["OM","143562"],["PA","143485"],["PE","143507"],["PG","143597"],["PH","143474"],["PK","143477"],["PL","143478"],["PT","143453"],["PW","143595"],["PY","143513"],["QA","143498"],["RO","143487"],["RS","143500"],["RU","143469"],["RW","143621"],["SA","143479"],["SB","143601"],["SC","143599"],["SE","143456"],["SG","143464"],["SI","143499"],["SK","143496"],["SL","143600"],["SN","143535"],["SR","143554"],["ST","143598"],["SV","143506"],["SZ","143602"],["UA","143492"],["UG","143537"],["US","143441"],["UY","143514"],["UZ","143566"],["VC","143550"],["VE","143502"],["VG","143543"],["VN","143471"],["VU","143609"],["XK","143624"],["YE","143571"],["ZA","143472"],["ZM","143622"],["ZW","143605"]]},n={Settings:o,Configs:i},r={Switch:!0,PEP:{GCC:"US"},Services:{PlaceData:"CN",Directions:"AUTO",Traffic:"AUTO",RAP:"XX",Tiles:"AUTO"},Geo_manifest:{Dynamic:{Config:{Country_code:{default:"AUTO",iOS:"CN",iPadOS:"CN",watchOS:"US",macOS:"CN"}}}},Config:{Announcements:{"Environment:":{default:"AUTO",iOS:"CN",iPadOS:"CN",watchOS:"XX",macOS:"CN"}},Defaults:{LagunaBeach:!0,DrivingMultiWaypointRoutesEnabled:!0,GEOAddressCorrection:!0,LookupMaxParametersCount:!0,LocalitiesAndLandmarks:!0,POIBusyness:!0,PedestrianAR:!0,"6694982d2b14e95815e44e970235e230":!0,OpticalHeading:!0,UseCLPedestrianMapMatchedLocations:!0,TransitPayEnabled:!0,SupportsOffline:!0,SupportsCarIntegration:!0,WiFiQualityNetworkDisabled:!1,WiFiQualityTileDisabled:!1}}},c={Settings:r},l={Switch:!0,CountryCode:"US",newsPlusUser:!0},p={Settings:l},u={Switch:!0,CountryCode:"US",canUse:!0},h={Settings:u},d={Switch:!0,CountryCode:"SG",Domains:["web","itunes","app_store","movies","restaurants","maps"],Functions:["flightutilities","lookup","mail","messages","news","safari","siri","spotlight","visualintelligence"],Safari_Smart_History:!0},g={VisualIntelligence:{enabled_domains:["pets","media","books","art","nature","landmarks"],supported_domains:["ART","BOOK","MEDIA","LANDMARK","ANIMALS","BIRDS","FOOD","SIGN_SYMBOL","AUTO_SYMBOL","DOGS","NATURE","NATURAL_LANDMARK","INSECTS","REPTILES","ALBUM","STOREFRONT","LAUNDRY_CARE_SYMBOL","CATS","OBJECT_2D","SCULPTURE","SKYLINE","MAMMALS"]}},f={Settings:d,Configs:g},y={Switch:"true",CountryCode:"US",MultiAccount:"false",Universal:"true"},m={Settings:y},S={Switch:!0,"Third-Party":!1,HLSUrl:"play-edge.itunes.apple.com",ServerUrl:"play.itunes.apple.com",Tabs:["WatchNow","Originals","MLS","Sports","Kids","Store","Movies","TV","ChannelsAndApps","Library","Search"],CountryCode:{Configs:"AUTO",Settings:"AUTO",View:["SG","TW"],WatchNow:"AUTO",Channels:"AUTO",Originals:"AUTO",Sports:"US",Kids:"US",Store:"AUTO",Movies:"AUTO",TV:"AUTO",Persons:"SG",Search:"AUTO",Others:"AUTO"}},b={Locale:[["AU","en-AU"],["CA","en-CA"],["GB","en-GB"],["KR","ko-KR"],["HK","yue-Hant"],["JP","ja-JP"],["MO","zh-Hant"],["TW","zh-Hant"],["US","en-US"],["SG","zh-Hans"]],Tabs:[{title:"主页",type:"WatchNow",universalLinks:["https://tv.apple.com/watch-now","https://tv.apple.com/home"],destinationType:"Target",target:{id:"tahoma_watchnow",type:"Root",url:"https://tv.apple.com/watch-now"},isSelected:!0},{title:"Apple TV+",type:"Originals",universalLinks:["https://tv.apple.com/channel/tvs.sbd.4000","https://tv.apple.com/atv"],destinationType:"Target",target:{id:"tvs.sbd.4000",type:"Brand",url:"https://tv.apple.com/us/channel/tvs.sbd.4000"}},{title:"MLS Season Pass",type:"MLS",universalLinks:["https://tv.apple.com/mls"],destinationType:"Target",target:{id:"tvs.sbd.7000",type:"Brand",url:"https://tv.apple.com/us/channel/tvs.sbd.7000"}},{title:"体育节目",type:"Sports",universalLinks:["https://tv.apple.com/sports"],destinationType:"Target",target:{id:"tahoma_sports",type:"Root",url:"https://tv.apple.com/sports"}},{title:"儿童",type:"Kids",universalLinks:["https://tv.apple.com/kids"],destinationType:"Target",target:{id:"tahoma_kids",type:"Root",url:"https://tv.apple.com/kids"}},{title:"电影",type:"Movies",universalLinks:["https://tv.apple.com/movies"],destinationType:"Target",target:{id:"tahoma_movies",type:"Root",url:"https://tv.apple.com/movies"}},{title:"电视节目",type:"TV",universalLinks:["https://tv.apple.com/tv-shows"],destinationType:"Target",target:{id:"tahoma_tvshows",type:"Root",url:"https://tv.apple.com/tv-shows"}},{title:"商店",type:"Store",universalLinks:["https://tv.apple.com/store"],destinationType:"SubTabs",subTabs:[{title:"电影",type:"Movies",universalLinks:["https://tv.apple.com/movies"],destinationType:"Target",target:{id:"tahoma_movies",type:"Root",url:"https://tv.apple.com/movies"}},{title:"电视节目",type:"TV",universalLinks:["https://tv.apple.com/tv-shows"],destinationType:"Target",target:{id:"tahoma_tvshows",type:"Root",url:"https://tv.apple.com/tv-shows"}}]},{title:"频道和 App",destinationType:"SubTabs",subTabsPlacementType:"ExpandedList",type:"ChannelsAndApps",subTabs:[]},{title:"资料库",type:"Library",destinationType:"Client"},{title:"搜索",type:"Search",universalLinks:["https://tv.apple.com/search"],destinationType:"Target",target:{id:"tahoma_search",type:"Root",url:"https://tv.apple.com/search"}}],i18n:{WatchNow:[["en","Home"],["zh","主页"],["zh-Hans","主頁"],["zh-Hant","主頁"]],Movies:[["en","Movies"],["zh","电影"],["zh-Hans","电影"],["zh-Hant","電影"]],TV:[["en","TV"],["zh","电视节目"],["zh-Hans","电视节目"],["zh-Hant","電視節目"]],Store:[["en","Store"],["zh","商店"],["zh-Hans","商店"],["zh-Hant","商店"]],Sports:[["en","Sports"],["zh","体育节目"],["zh-Hans","体育节目"],["zh-Hant","體育節目"]],Kids:[["en","Kids"],["zh","儿童"],["zh-Hans","儿童"],["zh-Hant","兒童"]],Library:[["en","Library"],["zh","资料库"],["zh-Hans","资料库"],["zh-Hant","資料庫"]],Search:[["en","Search"],["zh","搜索"],["zh-Hans","搜索"],["zh-Hant","蒐索"]]}},C={Settings:S,Configs:b},v=Database={Default:Object.freeze({__proto__:null,Configs:i,Settings:o,default:n}),Location:Object.freeze({__proto__:null,Settings:r,default:c}),News:Object.freeze({__proto__:null,Settings:l,default:p}),PrivateRelay:Object.freeze({__proto__:null,Settings:u,default:h}),Siri:Object.freeze({__proto__:null,Configs:g,Settings:d,default:f}),TestFlight:Object.freeze({__proto__:null,Settings:y,default:m}),TV:Object.freeze({__proto__:null,Configs:b,Settings:S,default:C})};function T(s,a,o){console.log("☑️ Set Environment Variables","");let{Settings:i,Caches:n,Configs:r}=function(s,a,o){let i=t.getItem(s,o),n={};if("undefined"!=typeof $argument&&Boolean($argument)){let t=Object.fromEntries($argument.split("&").map((e=>e.split("=").map((e=>e.replace(/\"/g,""))))));for(let s in t)e.set(n,s,t[s])}const r={Settings:o?.Default?.Settings||{},Configs:o?.Default?.Configs||{},Caches:{}};Array.isArray(a)||(a=[a]);for(let e of a)r.Settings={...r.Settings,...o?.[e]?.Settings,...n,...i?.[e]?.Settings},r.Configs={...r.Configs,...o?.[e]?.Configs},i?.[e]?.Caches&&"string"==typeof i?.[e]?.Caches&&(i[e].Caches=JSON.parse(i?.[e]?.Caches)),r.Caches={...r.Caches,...i?.[e]?.Caches};return function e(t,s){for(var a in t){var o=t[a];t[a]="object"==typeof o&&null!==o?e(o,s):s(a,o)}return t}(r.Settings,((e,t)=>("true"===t||"false"===t?t=JSON.parse(t):"string"==typeof t&&(t=t.includes(",")?t.split(",").map((e=>c(e))):c(t)),t))),r;function c(e){return e&&!isNaN(e)&&(e=parseInt(e,10)),e}}(s,a,o);if(i?.Tabs&&!Array.isArray(i?.Tabs)&&$.lodash_set(i,"Tabs",i?.Tabs?[i.Tabs.toString()]:[]),i?.Domains&&!Array.isArray(i?.Domains)&&$.lodash_set(i,"Domains",i?.Domains?[i.Domains.toString()]:[]),i?.Functions&&!Array.isArray(i?.Functions)&&$.lodash_set(i,"Functions",i?.Functions?[i.Functions.toString()]:[]),console.log(`✅ Set Environment Variables, Settings: ${typeof i}, Settings内容: ${JSON.stringify(i)}`,""),r.Storefront=new Map(r.Storefront),r.Locale&&(r.Locale=new Map(r.Locale)),r.i18n)for(let e in r.i18n)r.i18n[e]=new Map(r.i18n[e]);return{Settings:i,Caches:n,Configs:r}}const A=new s(" iRingo: 📍 Location v3.1.6(3) response"),O=class{static name="URI";static version="1.2.7";static about(){return console.log(`\n🟧 ${this.name} v${this.version}\n`)}static#c={scheme:"",host:"",path:"",query:{}};static parse(e){let t=e.match(/(?:(?<scheme>.+):\/\/(?<host>[^/]+))?\/?(?<path>[^?]+)?\??(?<query>[^?]+)?/)?.groups??null;if(t?.path?t.paths=t.path.split("/"):t.path="",t?.paths){const e=t.paths[t.paths.length-1];if(e?.includes(".")){const s=e.split(".");t.format=s[s.length-1]}}return t?.query&&(t.query=Object.fromEntries(t.query.split("&").map((e=>e.split("="))))),t}static stringify(e=this.#c){let t="";return e?.scheme&&e?.host&&(t+=e.scheme+"://"+e.host),e?.path&&(t+=e?.host?"/"+e.path:e.path),e?.query&&(t+="?"+Object.entries(e.query).map((e=>e.join("="))).join("&")),t}}.parse($request.url);A.log(`⚠ URL: ${JSON.stringify(O)}`,"");const k=$request.method,E=O.host,w=O.path;O.paths,A.log(`⚠ METHOD: ${k}`,"");const L=($response.headers?.["Content-Type"]??$response.headers?.["content-type"])?.split(";")?.[0];A.log(`⚠ FORMAT: ${L}`,""),(async()=>{const{Settings:e,Caches:s,Configs:o}=T("iRingo","Location",v);switch(A.log(`⚠ Settings.Switch: ${e?.Switch}`,""),e.Switch){case!0:default:let o={};switch(L){case void 0:case"application/x-www-form-urlencoded":case"text/plain":default:case"application/x-mpegURL":case"application/x-mpegurl":case"application/vnd.apple.mpegurl":case"audio/mpegurl":break;case"text/xml":case"text/html":case"text/plist":case"application/xml":case"application/plist":case"application/x-plist":switch(E){case"gspe1-ssl.ls.apple.com":if("pep/gcc"===w)if(await async function(e,s){if(A.log("⚠ Set GCC",`caches.${e}.gcc = ${s?.[e]?.gcc}`,""),$response.body!==s?.[e]?.gcc){let a=s;a[e]={gcc:$response.body},t.setItem("@iRingo.Location.Caches",a)}return A.log("🎉 Set GCC",`caches.${e}.gcc = ${s?.[e]?.gcc}`,"")}("pep",s),"AUTO"===e.PEP.GCC);else $response.body=e.PEP.GCC;break;case"configuration.ls.apple.com":if(o=a.parse($response.body),"config/defaults"===w){const t=o.plist;t&&(t["com.apple.GEO"].CountryProviders.CN.ShouldEnableLagunaBeach=e?.Config?.Defaults?.LagunaBeach??!0,t["com.apple.GEO"].CountryProviders.CN.DrivingMultiWaypointRoutesEnabled=e?.Config?.Defaults?.DrivingMultiWaypointRoutesEnabled??!0,t["com.apple.GEO"].CountryProviders.CN.GEOAddressCorrectionEnabled=e?.Config?.Defaults?.GEOAddressCorrection??!0,(e?.Config?.Defaults?.LookupMaxParametersCount??1)&&(delete t["com.apple.GEO"].CountryProviders.CN.GEOBatchSpatialEventLookupMaxParametersCount,delete t["com.apple.GEO"].CountryProviders.CN.GEOBatchSpatialPlaceLookupMaxParametersCount),t["com.apple.GEO"].CountryProviders.CN.LocalitiesAndLandmarksSupported=e?.Config?.Defaults?.LocalitiesAndLandmarks??!0,t["com.apple.GEO"].CountryProviders.CN.POIBusynessDifferentialPrivacy=e?.Config?.Defaults?.POIBusyness??!0,t["com.apple.GEO"].CountryProviders.CN.POIBusynessRealTime=e?.Config?.Defaults?.POIBusyness??!0,t["com.apple.GEO"].CountryProviders.CN.TransitPayEnabled=e?.Config?.Defaults?.TransitPayEnabled??!0,t["com.apple.GEO"].CountryProviders.CN.SupportsOffline=e?.Config?.Defaults?.SupportsOffline??!0,t["com.apple.GEO"].CountryProviders.CN.SupportsCarIntegration=e?.Config?.Defaults?.SupportsCarIntegration??!0,t["com.apple.GEO"].CountryProviders.CN["6694982d2b14e95815e44e970235e230"]=e?.Config?.Defaults?.["6694982d2b14e95815e44e970235e230"]??!0,t["com.apple.GEO"].CountryProviders.CN.PedestrianAREnabled=e?.Config?.Defaults?.PedestrianAR??!0,t["com.apple.GEO"].CountryProviders.CN.OpticalHeadingEnabled=e?.Config?.Defaults?.OpticalHeading??!0,t["com.apple.GEO"].CountryProviders.CN.UseCLPedestrianMapMatchedLocations=e?.Config?.Defaults?.UseCLPedestrianMapMatchedLocations??!0)}$response.body=a.stringify(o)}case"text/vtt":case"application/vtt":case"text/json":case"application/json":case"application/protobuf":case"application/x-protobuf":case"application/vnd.google.protobuf":case"application/grpc":case"application/grpc+proto":case"application/octet-stream":}case!1:}})().catch((e=>A.logErr(e))).finally((()=>A.done($response)));
