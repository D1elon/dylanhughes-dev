var gm=Object.defineProperty;var xm=(i,t)=>{for(var e in t)gm(i,e,{get:t[e],enumerable:!0})};var Wd=0,Ah=1,Xd=2;var vs=1,qd=2,Mr=3,ns=0,xn=1,_n=2,Xe=0,Sr=1,Ms=2,Rh=3,Ch=4,pl=5;var Gn=100,Yd=101,Zd=102,$d=103,Jd=104,Ss=200,Kd=201,jd=202,Qd=203,Ph=204,Ih=205,Aa=206,tf=207,Ra=208,ef=209,nf=210,sf=211,rf=212,af=213,of=214,Lo=0,Uo=1,No=2,sr=3,Fo=4,Oo=5,Bo=6,ko=7,Dh=0,lf=1,cf=2,Qn=0,Lh=1,Uh=2,Nh=3,Fh=4,Ca=5,Oh=6,Bh=7;var kh=300,is=301,bs=302,ml=303,gl=304,Pa=306,wn=1e3,oi=1001,zo=1002,Ne=1003,hf=1004;var Ia=1005;var sn=1006,xl=1007;var ss=1008;var nn=1009,zh=1010,Hh=1011,br=1012,_l=1013,ti=1014,ei=1015,He=1016,yl=1017,vl=1018,rs=1020,Vh=35902,Gh=35899,Wh=1021,Xh=1022,Tn=1023,ci=1026,gi=1027,qh=1028,Ml=1029,as=1030,Sl=1031;var bl=1033,Da=33776,La=33777,Ua=33778,Na=33779,wl=35840,Tl=35841,El=35842,Al=35843,Rl=36196,Cl=37492,Pl=37496,Il=37488,Dl=37489,Fa=37490,Ll=37491,Ul=37808,Nl=37809,Fl=37810,Ol=37811,Bl=37812,kl=37813,zl=37814,Hl=37815,Vl=37816,Gl=37817,Wl=37818,Xl=37819,ql=37820,Yl=37821,Zl=36492,$l=36494,Jl=36495,Kl=36283,jl=36284,Oa=36285,Ql=36286;var Kr=2300,Ho=2301,Io=2302,ph=2303,mh=2400,gh=2401,xh=2402;var uf=3200,Yh=3201;var Ba=0,df=1,Ni="",$e="srgb",jr="srgb-linear",Qr="linear",Se="srgb";var Do=7680;var ff=519,pf=512,mf=513,gf=514,tc=515,xf=516,_f=517,ec=518,yf=519,vf=35044;var Zh="300 es",Kn=2e3,rr=2001;function _m(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ym(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ta(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mf(){let i=ta("canvas");return i.style.display="block",i}var fd={},ar=null;function $h(...i){let t="THREE."+i.shift();ar?ar("log",t,...i):console.log(t,...i)}function Sf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Kt(...i){i=Sf(i);let t="THREE."+i.shift();if(ar)ar("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function jt(...i){i=Sf(i);let t="THREE."+i.shift();if(ar)ar("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function gs(...i){let t=i.join(" ");t in fd||(fd[t]=!0,Kt(...i))}function bf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var wf={[Lo]:Uo,[No]:Bo,[Fo]:ko,[sr]:Oo,[Uo]:Lo,[Bo]:No,[ko]:Fo,[Oo]:sr},hi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Hc=Math.PI/180,ea=180/Math.PI;function wr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function le(i,t,e){return Math.max(t,Math.min(e,i))}function vm(i,t){return(i%t+t)%t}function Vc(i,t,e){return(1-e)*i+e*t}function Vr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Sn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var eu=class eu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};eu.prototype.isVector2=!0;var ot=eu,ui=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(d!==x||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*x;m<0&&(u=-u,f=-f,p=-p,x=-x,m=-m);let g=1-o;if(m<.9995){let b=Math.acos(m),E=Math.sin(b);g=Math.sin(g*b)/E,o=Math.sin(o*b)/E,l=l*g+u*o,c=c*g+f*o,h=h*g+p*o,d=d*g+x*o}else{l=l*g+u*o,c=c*g+f*o,h=h*g+p*o,d=d*g+x*o;let b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-o*f,t[e+2]=c*p+h*f+o*u-l*d,t[e+3]=h*p-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Kt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},nu=class nu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gc.copy(this).projectOnVector(t),this.sub(Gc)}reflect(t){return this.sub(Gc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};nu.prototype.isVector3=!0;var O=nu,Gc=new O,pd=new ui,iu=class iu{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=s[0],m=s[3],g=s[6],b=s[1],E=s[4],y=s[7],v=s[2],w=s[5],M=s[8];return r[0]=a*x+o*b+l*v,r[3]=a*m+o*E+l*w,r[6]=a*g+o*y+l*M,r[1]=c*x+h*b+d*v,r[4]=c*m+h*E+d*w,r[7]=c*g+h*y+d*M,r[2]=u*x+f*b+p*v,r[5]=u*m+f*E+p*w,r[8]=u*g+f*y+p*M,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,p=e*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wc.makeScale(t,e)),this}rotate(t){return gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wc.makeRotation(-t)),this}translate(t,e){return gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};iu.prototype.isMatrix3=!0;var te=iu,Wc=new te,md=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gd=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mm(){let i={enabled:!0,workingColorSpace:jr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Se&&(s.r=Di(s.r),s.g=Di(s.g),s.b=Di(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Se&&(s.r=ir(s.r),s.g=ir(s.g),s.b=ir(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?Qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[jr]:{primaries:t,whitePoint:n,transfer:Qr,toXYZ:md,fromXYZ:gd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:md,fromXYZ:gd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),i}var de=Mm();function Di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ws,Vo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ws===void 0&&(Ws=ta("canvas")),Ws.width=t.width,Ws.height=t.height;let s=Ws.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ws}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ta("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Di(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Di(e[n]/255)*255):e[n]=Di(e[n]);return{data:e,width:t.width,height:t.height}}else return Kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Sm=0,or=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=wr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xc(s[a].image)):r.push(Xc(s[a]))}else r=Xc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Xc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Kt("Texture: Unable to serialize Texture."),{})}var bm=0,qc=new O,pn=class i extends hi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=oi,s=oi,r=sn,a=ss,o=Tn,l=nn,c=i.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=wr(),this.name="",this.source=new or(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qc).x}get height(){return this.source.getSize(qc).y}get depth(){return this.source.getSize(qc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wn:t.x=t.x-Math.floor(t.x);break;case oi:t.x=t.x<0?0:1;break;case zo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wn:t.y=t.y-Math.floor(t.y);break;case oi:t.y=t.y<0?0:1;break;case zo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=kh;pn.DEFAULT_ANISOTROPY=1;var su=class su{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,y=(f+1)/2,v=(g+1)/2,w=(h+u)/4,M=(d+x)/4,_=(p+m)/4;return E>y&&E>v?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=M/n):y>v?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=_/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=M/r,s=_/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-p)/b,this.y=(d-x)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};su.prototype.isVector4=!0;var Fe=su,Go=class extends hi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new pn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new or(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ke=class extends Go{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},na=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wo=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var fl=class fl{constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,p,x,m)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Xs.setFromMatrixColumn(t,0).length(),r=1/Xs.setFromMatrixColumn(t,1).length(),a=1/Xs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,p=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u+x*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u-x*o,e[4]=-a*d,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,p=o*h,x=o*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=x-u*d,e[8]=p*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-x*d}else if(t.order==="XZY"){let u=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=a*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wm,t,Tm)}lookAt(t,e,n){let s=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Xi.crossVectors(n,Pn),Xi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Xi.crossVectors(n,Pn)),Xi.normalize(),oo.crossVectors(Pn,Xi),s[0]=Xi.x,s[4]=oo.x,s[8]=Pn.x,s[1]=Xi.y,s[5]=oo.y,s[9]=Pn.y,s[2]=Xi.z,s[6]=oo.z,s[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],b=n[3],E=n[7],y=n[11],v=n[15],w=s[0],M=s[4],_=s[8],T=s[12],R=s[1],C=s[5],L=s[9],F=s[13],D=s[2],B=s[6],G=s[10],Z=s[14],rt=s[3],$=s[7],nt=s[11],et=s[15];return r[0]=a*w+o*R+l*D+c*rt,r[4]=a*M+o*C+l*B+c*$,r[8]=a*_+o*L+l*G+c*nt,r[12]=a*T+o*F+l*Z+c*et,r[1]=h*w+d*R+u*D+f*rt,r[5]=h*M+d*C+u*B+f*$,r[9]=h*_+d*L+u*G+f*nt,r[13]=h*T+d*F+u*Z+f*et,r[2]=p*w+x*R+m*D+g*rt,r[6]=p*M+x*C+m*B+g*$,r[10]=p*_+x*L+m*G+g*nt,r[14]=p*T+x*F+m*Z+g*et,r[3]=b*w+E*R+y*D+v*rt,r[7]=b*M+E*C+y*B+v*$,r[11]=b*_+E*L+y*G+v*nt,r[15]=b*T+E*F+y*Z+v*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15],b=l*f-c*u,E=o*f-c*d,y=o*u-l*d,v=a*f-c*h,w=a*u-l*h,M=a*d-o*h;return e*(x*b-m*E+g*y)-n*(p*b-m*v+g*w)+s*(p*E-x*v+g*M)-r*(p*y-x*w+m*M)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],b=e*o-n*a,E=e*l-s*a,y=e*c-r*a,v=n*l-s*o,w=n*c-r*o,M=s*c-r*l,_=h*x-d*p,T=h*m-u*p,R=h*g-f*p,C=d*m-u*x,L=d*g-f*x,F=u*g-f*m,D=b*F-E*L+y*C+v*R-w*T+M*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/D;return t[0]=(o*F-l*L+c*C)*B,t[1]=(s*L-n*F-r*C)*B,t[2]=(x*M-m*w+g*v)*B,t[3]=(u*w-d*M-f*v)*B,t[4]=(l*R-a*F-c*T)*B,t[5]=(e*F-s*R+r*T)*B,t[6]=(m*y-p*M-g*E)*B,t[7]=(h*M-u*y+f*E)*B,t[8]=(a*L-o*R+c*_)*B,t[9]=(n*R-e*L-r*_)*B,t[10]=(p*w-x*y+g*b)*B,t[11]=(d*y-h*w-f*b)*B,t[12]=(o*T-a*C-l*_)*B,t[13]=(e*C-n*T+s*_)*B,t[14]=(x*E-p*v-m*b)*B,t[15]=(h*v-d*E+u*b)*B,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,p=r*d,x=a*h,m=a*d,g=o*d,b=l*c,E=l*h,y=l*d,v=n.x,w=n.y,M=n.z;return s[0]=(1-(x+g))*v,s[1]=(f+y)*v,s[2]=(p-E)*v,s[3]=0,s[4]=(f-y)*w,s[5]=(1-(u+g))*w,s[6]=(m+b)*w,s[7]=0,s[8]=(p+E)*M,s[9]=(m-b)*M,s[10]=(1-(u+x))*M,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Xs.set(s[0],s[1],s[2]).length(),o=Xs.set(s[4],s[5],s[6]).length(),l=Xs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Yn.copy(this);let c=1/a,h=1/o,d=1/l;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=h,Yn.elements[5]*=h,Yn.elements[6]*=h,Yn.elements[8]*=d,Yn.elements[9]*=d,Yn.elements[10]*=d,e.setFromRotationMatrix(Yn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Kn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===Kn)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===rr)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Kn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===Kn)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===rr)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};fl.prototype.isMatrix4=!0;var he=fl,Xs=new O,Yn=new he,wm=new O(0,0,0),Tm=new O(1,1,1),Xi=new O,oo=new O,Pn=new O,xd=new he,_d=new ui,Li=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _d.setFromEuler(this),this.setFromQuaternion(_d,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Li.DEFAULT_ORDER="XYZ";var lr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Em=0,yd=new O,qs=new ui,Ai=new he,lo=new O,Gr=new O,Am=new O,Rm=new ui,vd=new O(1,0,0),Md=new O(0,1,0),Sd=new O(0,0,1),bd={type:"added"},Cm={type:"removed"},Ys={type:"childadded",child:null},Yc={type:"childremoved",child:null},Je=class i extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new Li,n=new ui,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new te}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qs.setFromAxisAngle(t,e),this.quaternion.multiply(qs),this}rotateOnWorldAxis(t,e){return qs.setFromAxisAngle(t,e),this.quaternion.premultiply(qs),this}rotateX(t){return this.rotateOnAxis(vd,t)}rotateY(t){return this.rotateOnAxis(Md,t)}rotateZ(t){return this.rotateOnAxis(Sd,t)}translateOnAxis(t,e){return yd.copy(t).applyQuaternion(this.quaternion),this.position.add(yd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vd,t)}translateY(t){return this.translateOnAxis(Md,t)}translateZ(t){return this.translateOnAxis(Sd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lo.copy(t):lo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Gr,lo,this.up):Ai.lookAt(lo,Gr,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),qs.setFromRotationMatrix(Ai),this.quaternion.premultiply(qs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bd),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cm),Yc.child=t,this.dispatchEvent(Yc),Yc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bd),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,t,Am),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,Rm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Je.DEFAULT_UP=new O(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pe=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pm={type:"move"},cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Tf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},co={h:0,s:0,l:0};function Zc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=vm(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Zc(a,r,t+1/3),this.g=Zc(a,r,t),this.b=Zc(a,r,t-1/3)}return de.colorSpaceToWorking(this,s),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&Kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){let n=Tf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}copyLinearToSRGB(t){return this.r=ir(t.r),this.g=ir(t.g),this.b=ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return de.workingToColorSpace(cn.copy(this),t),Math.round(le(cn.r*255,0,255))*65536+Math.round(le(cn.g*255,0,255))*256+Math.round(le(cn.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(cn.copy(this),e);let n=cn.r,s=cn.g,r=cn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=$e){de.workingToColorSpace(cn.copy(this),t);let e=cn.r,n=cn.g,s=cn.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(qi),this.setHSL(qi.h+t,qi.s+e,qi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qi),t.getHSL(co);let n=Vc(qi.h,co.h,e),s=Vc(qi.s,co.s,e),r=Vc(qi.l,co.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new Vt;Vt.NAMES=Tf;var ia=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},hr=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Zn=new O,Ri=new O,$c=new O,Ci=new O,Zs=new O,$s=new O,wd=new O,Jc=new O,Kc=new O,jc=new O,Qc=new Fe,th=new Fe,eh=new Fe,Ji=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Zn.subVectors(t,e),s.cross(Zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Zn.subVectors(s,e),Ri.subVectors(n,e),$c.subVectors(t,e);let a=Zn.dot(Zn),o=Zn.dot(Ri),l=Zn.dot($c),c=Ri.dot(Ri),h=Ri.dot($c),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ci.x),l.addScaledVector(a,Ci.y),l.addScaledVector(o,Ci.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Qc.setScalar(0),th.setScalar(0),eh.setScalar(0),Qc.fromBufferAttribute(t,e),th.fromBufferAttribute(t,n),eh.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Qc,r.x),a.addScaledVector(th,r.y),a.addScaledVector(eh,r.z),a}static isFrontFacing(t,e,n,s){return Zn.subVectors(n,e),Ri.subVectors(t,e),Zn.cross(Ri).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Zn.cross(Ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Zs.subVectors(s,n),$s.subVectors(r,n),Jc.subVectors(t,n);let l=Zs.dot(Jc),c=$s.dot(Jc);if(l<=0&&c<=0)return e.copy(n);Kc.subVectors(t,s);let h=Zs.dot(Kc),d=$s.dot(Kc);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Zs,a);jc.subVectors(t,r);let f=Zs.dot(jc),p=$s.dot(jc);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector($s,o);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return wd.subVectors(r,s),o=(d-h)/(d-h+(f-p)),e.copy(s).addScaledVector(wd,o);let g=1/(m+x+u);return a=x*g,o=u*g,e.copy(n).addScaledVector(Zs,a).addScaledVector($s,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hn=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=$n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,$n):$n.fromBufferAttribute(r,a),$n.applyMatrix4(t.matrixWorld),this.expandByPoint($n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ho.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ho.copy(n.boundingBox)),ho.applyMatrix4(t.matrixWorld),this.union(ho)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$n),$n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wr),uo.subVectors(this.max,Wr),Js.subVectors(t.a,Wr),Ks.subVectors(t.b,Wr),js.subVectors(t.c,Wr),Yi.subVectors(Ks,Js),Zi.subVectors(js,Ks),ds.subVectors(Js,js);let e=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-ds.z,ds.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,ds.z,0,-ds.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-ds.y,ds.x,0];return!nh(e,Js,Ks,js,uo)||(e=[1,0,0,0,1,0,0,0,1],!nh(e,Js,Ks,js,uo))?!1:(fo.crossVectors(Yi,Zi),e=[fo.x,fo.y,fo.z],nh(e,Js,Ks,js,uo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Pi=[new O,new O,new O,new O,new O,new O,new O,new O],$n=new O,ho=new Hn,Js=new O,Ks=new O,js=new O,Yi=new O,Zi=new O,ds=new O,Wr=new O,uo=new O,fo=new O,fs=new O;function nh(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){fs.fromArray(i,r);let o=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),l=t.dot(fs),c=e.dot(fs),h=n.dot(fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ze=new O,po=new ot,Im=0,bn=class extends hi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Im++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vf,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)po.fromBufferAttribute(this,e),po.applyMatrix3(t),this.setXY(e,po.x,po.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),n=Sn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),n=Sn(n,this.array),s=Sn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),n=Sn(n,this.array),s=Sn(s,this.array),r=Sn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var sa=class extends bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ra=class extends bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ie=class extends bn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Dm=new Hn,Xr=new O,ih=new O,xs=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Dm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xr.subVectors(t,this.center);let e=Xr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ih.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xr.copy(t.center).add(ih)),this.expandByPoint(Xr.copy(t.center).sub(ih))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Lm=0,zn=new he,sh=new Je,Qs=new O,In=new Hn,qr=new Hn,tn=new O,be=class i extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_m(t)?ra:sa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,e,n){return zn.makeTranslation(t,e,n),this.applyMatrix4(zn),this}scale(t,e,n){return zn.makeScale(t,e,n),this.applyMatrix4(zn),this}lookAt(t){return sh.lookAt(t),sh.updateMatrix(),this.applyMatrix4(sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ie(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];qr.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(In.min,qr.min),In.expandByPoint(tn),tn.addVectors(In.max,qr.max),In.expandByPoint(tn)):(In.expandByPoint(qr.min),In.expandByPoint(qr.max))}In.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)tn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(tn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)tn.fromBufferAttribute(o,c),l&&(Qs.fromBufferAttribute(t,c),tn.add(Qs)),s=Math.max(s,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new bn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new O,l[_]=new O;let c=new O,h=new O,d=new O,u=new ot,f=new ot,p=new ot,x=new O,m=new O;function g(_,T,R){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,R),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,R),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let C=1/(f.x*p.y-p.x*f.y);isFinite(C)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(C),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(C),o[_].add(x),o[T].add(x),o[R].add(x),l[_].add(m),l[T].add(m),l[R].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let _=0,T=b.length;_<T;++_){let R=b[_],C=R.start,L=R.count;for(let F=C,D=C+L;F<D;F+=3)g(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let E=new O,y=new O,v=new O,w=new O;function M(_){v.fromBufferAttribute(s,_),w.copy(v);let T=o[_];E.copy(T),E.sub(v.multiplyScalar(v.dot(T))).normalize(),y.crossVectors(w,T);let C=y.dot(l[_])<0?-1:1;a.setXYZW(_,E.x,E.y,E.z,C)}for(let _=0,T=b.length;_<T;++_){let R=b[_],C=R.start,L=R.count;for(let F=C,D=C+L;F<D;F+=3)M(t.getX(F+0)),M(t.getX(F+1)),M(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new bn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,d=new O;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)tn.fromBufferAttribute(t,e),tn.normalize(),t.setXYZ(e,tn.x,tn.y,tn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new bn(u,h,d)}if(this.index===null)return Kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var rh=new O,Um=new O,Nm=new te,Jn=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=rh.subVectors(n,e).cross(Um.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(rh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Nm.getNormalMatrix(t),s=this.coplanarPoint(rh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Fm=0,di=class extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=wr(),this.name="",this.type="Material",this.blending=Sr,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ph,this.blendDst=Ih,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ff,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Do,this.stencilZFail=Do,this.stencilZPass=Do,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Vt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Jn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ot().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ii=new O,ah=new O,mo=new O,go=new O,ur=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ii.copy(this.origin).addScaledVector(this.direction,e),Ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ah.copy(t).add(e).multiplyScalar(.5),mo.copy(e).sub(t).normalize(),go.copy(this.origin).sub(ah);let r=t.distanceTo(e)*.5,a=-this.direction.dot(mo),o=go.dot(this.direction),l=-go.dot(mo),c=go.lengthSq(),h=Math.abs(1-a*a),d,u,f,p;if(h>0)if(d=a*l-o,u=a*o-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ah).addScaledVector(mo,u),f}intersectSphere(t,e){if(t.radius<0)return null;Ii.subVectors(t.center,this.origin);let n=Ii.dot(this.direction),s=Ii.dot(Ii)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ii)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,p=e.x-a.x,x=e.y-a.y,m=e.z-a.z,g=n.x-a.x,b=n.y-a.y,E=n.z-a.z,y=Math.abs(l),v=Math.abs(c),w=Math.abs(h),M,_,T,R,C,L,F,D,B,G,Z,rt;if(y>=v&&y>=w?(T=l,L=d,B=p,rt=g,l>=0?(M=c,_=h,R=u,C=f,F=x,D=m,G=b,Z=E):(M=h,_=c,R=f,C=u,F=m,D=x,G=E,Z=b)):v>=w?(T=c,L=u,B=x,rt=b,c>=0?(M=h,_=l,R=f,C=d,F=m,D=p,G=E,Z=g):(M=l,_=h,R=d,C=f,F=p,D=m,G=g,Z=E)):(T=h,L=f,B=m,rt=E,h>=0?(M=l,_=c,R=d,C=u,F=p,D=x,G=g,Z=b):(M=c,_=l,R=u,C=d,F=x,D=p,G=b,Z=g)),T===0)return null;let $=M/T,nt=_/T,et=1/T,Tt=R-$*L,At=C-nt*L,re=F-$*B,Zt=D-nt*B,lt=G-$*rt,V=Z-nt*rt,Q=lt*Zt-V*re,_t=Tt*V-At*lt,It=re*At-Zt*Tt;if(s){if(Q<0||_t<0||It<0)return null}else if((Q<0||_t<0||It<0)&&(Q>0||_t>0||It>0))return null;let wt=Q+_t+It;if(wt===0)return null;let Gt=et*(Q*L+_t*B+It*rt);return(wt>0?Gt<0:Gt>0)?null:this.at(Gt/wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mn=class extends di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Td=new he,ps=new ur,xo=new xs,Ed=new O,_o=new O,yo=new O,vo=new O,oh=new O,Mo=new O,Ad=new O,So=new O,xe=class extends Je{constructor(t=new be,e=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Mo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(oh.fromBufferAttribute(d,t),a?Mo.addScaledVector(oh,h):Mo.addScaledVector(oh.sub(e),h))}e.add(Mo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(r),ps.copy(t.ray).recast(t.near),!(xo.containsPoint(ps.origin)===!1&&(ps.intersectSphere(xo,Ed)===null||ps.origin.distanceToSquared(Ed)>(t.far-t.near)**2))&&(Td.copy(r).invert(),ps.copy(t.ray).applyMatrix4(Td),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ps)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=a[m.materialIndex],b=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,v=E;y<v;y+=3){let w=o.getX(y),M=o.getX(y+1),_=o.getX(y+2);s=bo(this,g,t,n,c,h,d,w,M,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let b=o.getX(m),E=o.getX(m+1),y=o.getX(m+2);s=bo(this,a,t,n,c,h,d,b,E,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=a[m.materialIndex],b=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,v=E;y<v;y+=3){let w=y,M=y+1,_=y+2;s=bo(this,g,t,n,c,h,d,w,M,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let b=m,E=m+1,y=m+2;s=bo(this,a,t,n,c,h,d,b,E,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Om(i,t,e,n,s,r,a,o){let l;if(t.side===xn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ns,o),l===null)return null;So.copy(o),So.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(So);return c<e.near||c>e.far?null:{distance:c,point:So.clone(),object:i}}function bo(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,_o),i.getVertexPosition(l,yo),i.getVertexPosition(c,vo);let h=Om(i,t,e,n,_o,yo,vo,Ad);if(h){let d=new O;Ji.getBarycoord(Ad,_o,yo,vo,d),s&&(h.uv=Ji.getInterpolatedAttribute(s,o,l,c,d,new ot)),r&&(h.uv1=Ji.getInterpolatedAttribute(r,o,l,c,d,new ot)),a&&(h.normal=Ji.getInterpolatedAttribute(a,o,l,c,d,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new O,materialIndex:0};Ji.getNormal(_o,yo,vo,u.normal),h.face=u,h.barycoord=d}return h}var Ki=class extends pn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ne,h=Ne,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ms=new xs,Bm=new ot(.5,.5),wo=new O,dr=class{constructor(t=new Jn,e=new Jn,n=new Jn,s=new Jn,r=new Jn,a=new Jn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Kn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],b=r[12],E=r[13],y=r[14],v=r[15];if(s[0].setComponents(c-a,f-h,g-p,v-b).normalize(),s[1].setComponents(c+a,f+h,g+p,v+b).normalize(),s[2].setComponents(c+o,f+d,g+x,v+E).normalize(),s[3].setComponents(c-o,f-d,g-x,v-E).normalize(),n)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,f-u,g-m,v-y).normalize();else if(s[4].setComponents(c-l,f-u,g-m,v-y).normalize(),e===Kn)s[5].setComponents(c+l,f+u,g+m,v+y).normalize();else if(e===rr)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(t){ms.center.set(0,0,0);let e=Bm.distanceTo(t.center);return ms.radius=.7071067811865476+e,ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(wo.x=s.normal.x>0?t.max.x:t.min.x,wo.y=s.normal.y>0?t.max.y:t.min.y,wo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(wo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var aa=class extends di{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Xo=new O,qo=new O,Rd=new he,Yr=new ur,To=new xs,lh=new O,Cd=new O,oa=class extends Je{constructor(t=new be,e=new aa){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Xo.fromBufferAttribute(e,s-1),qo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Xo.distanceTo(qo);t.setAttribute("lineDistance",new ie(n,1))}else Kt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(s),To.radius+=r,t.ray.intersectsSphere(To)===!1)return;Rd.copy(s).invert(),Yr.copy(t.ray).applyMatrix4(Rd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=f,m=p-1;x<m;x+=c){let g=h.getX(x),b=h.getX(x+1),E=Eo(this,t,Yr,l,g,b,x);E&&e.push(E)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(f),g=Eo(this,t,Yr,l,x,m,p-1);g&&e.push(g)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=f,m=p-1;x<m;x+=c){let g=Eo(this,t,Yr,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){let x=Eo(this,t,Yr,l,p-1,f,p-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Eo(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Xo.fromBufferAttribute(o,s),qo.fromBufferAttribute(o,r),e.distanceSqToSegment(Xo,qo,lh,Cd)>n)return;lh.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(lh);if(!(c<t.near||c>t.far))return{distance:c,point:Cd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var la=class extends pn{constructor(t=[],e=is,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},jn=class extends pn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fi=class extends pn{constructor(t,e,n=ti,s,r,a,o=Ne,l=Ne,c,h=ci,d=1){if(h!==ci&&h!==gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new or(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Yo=class extends fi{constructor(t,e=ti,n=is,s,r,a=Ne,o=Ne,l,c=ci){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ca=class extends pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},me=class i extends be{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(d,2));function p(x,m,g,b,E,y,v,w,M,_,T){let R=y/M,C=v/_,L=y/2,F=v/2,D=w/2,B=M+1,G=_+1,Z=0,rt=0,$=new O;for(let nt=0;nt<G;nt++){let et=nt*C-F;for(let Tt=0;Tt<B;Tt++){let At=Tt*R-L;$[x]=At*b,$[m]=et*E,$[g]=D,c.push($.x,$.y,$.z),$[x]=0,$[m]=0,$[g]=w>0?1:-1,h.push($.x,$.y,$.z),d.push(Tt/M),d.push(1-nt/_),Z+=1}}for(let nt=0;nt<_;nt++)for(let et=0;et<M;et++){let Tt=u+et+B*nt,At=u+et+B*(nt+1),re=u+(et+1)+B*(nt+1),Zt=u+(et+1)+B*nt;l.push(Tt,At,Zt),l.push(At,re,Zt),rt+=6}o.addGroup(f,rt,T),f+=rt,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ha=class i extends be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new O,h=new ot;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(o,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},De=class i extends be{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,x=[],m=n/2,g=0;b(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ie(d,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(f,2));function b(){let y=new O,v=new O,w=0,M=(e-t)/n;for(let _=0;_<=r;_++){let T=[],R=_/r,C=R*(e-t)+t;for(let L=0;L<=s;L++){let F=L/s,D=F*l+o,B=Math.sin(D),G=Math.cos(D);v.x=C*B,v.y=-R*n+m,v.z=C*G,d.push(v.x,v.y,v.z),y.set(B,M,G).normalize(),u.push(y.x,y.y,y.z),f.push(F,1-R),T.push(p++)}x.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){let R=x[T][_],C=x[T+1][_],L=x[T+1][_+1],F=x[T][_+1];(t>0||T!==0)&&(h.push(R,C,F),w+=3),(e>0||T!==r-1)&&(h.push(C,L,F),w+=3)}c.addGroup(g,w,0),g+=w}function E(y){let v=p,w=new ot,M=new O,_=0,T=y===!0?t:e,R=y===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),p++;let C=p;for(let L=0;L<=s;L++){let D=L/s*l+o,B=Math.cos(D),G=Math.sin(D);M.x=T*G,M.y=m*R,M.z=T*B,d.push(M.x,M.y,M.z),u.push(0,R,0),w.x=B*.5+.5,w.y=G*.5*R+.5,f.push(w.x,w.y),p++}for(let L=0;L<s;L++){let F=v+L,D=C+L;y===!0?h.push(D,D+1,F):h.push(D+1,D,F),_+=3}c.addGroup(g,_,y===!0?1:2),g+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ot:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new O,s=[],r=[],a=[],o=new O,l=new he;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new O)}r[0]=new O,a[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(le(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(le(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},fr=class extends Dn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ot){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Zo=class extends fr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Jh(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Pd=new O,Id=new O,ch=new Jh,hh=new Jh,uh=new Jh,Vn=class extends Dn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Id.subVectors(s[0],s[1]).add(s[0]),c=Id);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Pd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Pd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),ch.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,m),hh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,m),uh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(ch.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),hh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),uh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(ch.calc(l),hh.calc(l),uh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Dd(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function km(i,t){let e=1-i;return e*e*t}function zm(i,t){return 2*(1-i)*i*t}function Hm(i,t){return i*i*t}function $r(i,t,e,n){return km(i,t)+zm(i,e)+Hm(i,n)}function Vm(i,t){let e=1-i;return e*e*e*t}function Gm(i,t){let e=1-i;return 3*e*e*i*t}function Wm(i,t){return 3*(1-i)*i*i*t}function Xm(i,t){return i*i*i*t}function Jr(i,t,e,n,s){return Vm(i,t)+Gm(i,e)+Wm(i,n)+Xm(i,s)}var ua=class extends Dn{constructor(t=new ot,e=new ot,n=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Jr(t,s.x,r.x,a.x,o.x),Jr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$o=class extends Dn{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Jr(t,s.x,r.x,a.x,o.x),Jr(t,s.y,r.y,a.y,o.y),Jr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},da=class extends Dn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jo=class extends Dn{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fa=class extends Dn{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set($r(t,s.x,r.x,a.x),$r(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pa=class extends Dn{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set($r(t,s.x,r.x,a.x),$r(t,s.y,r.y,a.y),$r(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ma=class extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Dd(o,l.x,c.x,h.x,d.x),Dd(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ot().fromArray(s))}return this}},Ko=Object.freeze({__proto__:null,ArcCurve:Zo,CatmullRomCurve3:Vn,CubicBezierCurve:ua,CubicBezierCurve3:$o,EllipseCurve:fr,LineCurve:da,LineCurve3:Jo,QuadraticBezierCurve:fa,QuadraticBezierCurve3:pa,SplineCurve:ma}),jo=class extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ko[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ko[s.type]().fromJSON(s))}return this}},pi=class extends jo{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new da(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new fa(this.currentPoint.clone(),new ot(t,e),new ot(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new ua(this.currentPoint.clone(),new ot(t,e),new ot(n,s),new ot(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ma(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new fr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},gn=class extends pi{constructor(t){super(t),this.uuid=wr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new pi().fromJSON(s))}return this}};function qm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Ef(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Km(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=i[u],p=i[u+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return ga(r,a,e,o,l,c,0),a}function Ef(i,t,e,n,s){let r;if(s===l0(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Ld(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Ld(a/n|0,i[a],i[a+1],r);return r&&pr(r,r.next)&&(_a(r),r=r.next),r}function _s(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(pr(e,e.next)||Be(e.prev,e,e.next)===0)){if(_a(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ga(i,t,e,n,s,r,a){if(!i)return;!a&&r&&n0(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Zm(i,n,s,r):Ym(i)){t.push(l.i,i.i,c.i),_a(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=$m(_s(i),t),ga(i,t,e,n,s,r,2)):a===2&&Jm(i,t,e,n,s,r):ga(_s(i),t,e,n,s,r,1);break}}}function Ym(i){let t=i.prev,e=i,n=i.next;if(Be(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Zr(s,o,r,l,a,c,p.x,p.y)&&Be(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Zm(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Be(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),p=Math.min(h,d,u),x=Math.max(o,l,c),m=Math.max(h,d,u),g=_h(f,p,t,e,n),b=_h(x,m,t,e,n),E=i.prevZ,y=i.nextZ;for(;E&&E.z>=g&&y&&y.z<=b;){if(E.x>=f&&E.x<=x&&E.y>=p&&E.y<=m&&E!==s&&E!==a&&Zr(o,h,l,d,c,u,E.x,E.y)&&Be(E.prev,E,E.next)>=0||(E=E.prevZ,y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==s&&y!==a&&Zr(o,h,l,d,c,u,y.x,y.y)&&Be(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;E&&E.z>=g;){if(E.x>=f&&E.x<=x&&E.y>=p&&E.y<=m&&E!==s&&E!==a&&Zr(o,h,l,d,c,u,E.x,E.y)&&Be(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;y&&y.z<=b;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==s&&y!==a&&Zr(o,h,l,d,c,u,y.x,y.y)&&Be(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function $m(i,t){let e=i;do{let n=e.prev,s=e.next.next;!pr(n,s)&&Rf(n,e,e.next,s)&&xa(n,s)&&xa(s,n)&&(t.push(n.i,e.i,s.i),_a(e),_a(e.next),e=i=s),e=e.next}while(e!==i);return _s(e)}function Jm(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&r0(a,o)){let l=Cf(a,o);a=_s(a,a.next),l=_s(l,l.next),ga(a,t,e,n,s,r,0),ga(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Km(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Ef(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(s0(c))}s.sort(jm);for(let r=0;r<s.length;r++)e=Qm(s[r],e);return e}function jm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Qm(i,t){let e=t0(i,t);if(!e)return t;let n=Cf(e,i);return _s(n,n.next),_s(e,e.next)}function t0(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(pr(i,e))return e;do{if(pr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Af(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);xa(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&e0(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function e0(i,t){return Be(i.prev,i,t.prev)<0&&Be(t.next,i,i.next)<0}function n0(i,t,e,n){let s=i;do s.z===0&&(s.z=_h(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,i0(s)}function i0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function _h(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function s0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Af(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Zr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Af(i,t,e,n,s,r,a,o)}function r0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!a0(i,t)&&(xa(i,t)&&xa(t,i)&&o0(i,t)&&(Be(i.prev,i,t.prev)||Be(i,t.prev,t))||pr(i,t)&&Be(i.prev,i,i.next)>0&&Be(t.prev,t,t.next)>0)}function Be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function pr(i,t){return i.x===t.x&&i.y===t.y}function Rf(i,t,e,n){let s=Ro(Be(i,t,e)),r=Ro(Be(i,t,n)),a=Ro(Be(e,n,i)),o=Ro(Be(e,n,t));return!!(s!==r&&a!==o||s===0&&Ao(i,e,t)||r===0&&Ao(i,n,t)||a===0&&Ao(e,i,n)||o===0&&Ao(e,t,n))}function Ao(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ro(i){return i>0?1:i<0?-1:0}function a0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Rf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function xa(i,t){return Be(i.prev,i,i.next)<0?Be(i,t,i.next)>=0&&Be(i,i.prev,t)>=0:Be(i,t,i.prev)<0||Be(i,i.next,t)<0}function o0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Cf(i,t){let e=yh(i.i,i.x,i.y),n=yh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ld(i,t,e,n){let s=yh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function _a(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function yh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function l0(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var vh=class{static triangulate(t,e,n=2){return qm(t,e,n)}},li=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Ud(t),Nd(n,t);let a=t.length;e.forEach(Ud);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Nd(n,e[l]);let o=vh.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Ud(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Nd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var mi=class i extends be{constructor(t=new gn([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ie(s,3)),this.setAttribute("uv",new ie(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:c0,E,y=!1,v,w,M,_;if(g){E=g.getSpacedPoints(h),y=!0,u=!1;let it=g.isCatmullRomCurve3?g.closed:!1;v=g.computeFrenetFrames(h,it),w=new O,M=new O,_=new O}u||(m=0,f=0,p=0,x=0);let T=o.extractPoints(c),R=T.shape,C=T.holes;if(!li.isClockWise(R)){R=R.reverse();for(let it=0,ht=C.length;it<ht;it++){let dt=C[it];li.isClockWise(dt)&&(C[it]=dt.reverse())}}function F(it){let dt=10000000000000001e-36,gt=it[0];for(let vt=1;vt<=it.length;vt++){let Wt=vt%it.length,zt=it[Wt],qt=zt.x-gt.x,Jt=zt.y-gt.y,k=qt*qt+Jt*Jt,ue=Math.max(Math.abs(zt.x),Math.abs(zt.y),Math.abs(gt.x),Math.abs(gt.y)),ee=dt*ue*ue;if(k<=ee){it.splice(Wt,1),vt--;continue}gt=zt}}F(R),C.forEach(F);let D=C.length,B=R;for(let it=0;it<D;it++){let ht=C[it];R=R.concat(ht)}function G(it,ht,dt){return ht||jt("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(ht,dt)}let Z=R.length;function rt(it,ht,dt){let gt,vt,Wt,zt=it.x-ht.x,qt=it.y-ht.y,Jt=dt.x-it.x,k=dt.y-it.y,ue=zt*zt+qt*qt,ee=zt*k-qt*Jt;if(Math.abs(ee)>Number.EPSILON){let I=Math.sqrt(ue),S=Math.sqrt(Jt*Jt+k*k),H=ht.x-qt/I,W=ht.y+zt/I,j=dt.x-k/S,xt=dt.y+Jt/S,Mt=((j-H)*k-(xt-W)*Jt)/(zt*k-qt*Jt);gt=H+zt*Mt-it.x,vt=W+qt*Mt-it.y;let tt=gt*gt+vt*vt;if(tt<=2)return new ot(gt,vt);Wt=Math.sqrt(tt/2)}else{let I=!1;zt>Number.EPSILON?Jt>Number.EPSILON&&(I=!0):zt<-Number.EPSILON?Jt<-Number.EPSILON&&(I=!0):Math.sign(qt)===Math.sign(k)&&(I=!0),I?(gt=-qt,vt=zt,Wt=Math.sqrt(ue)):(gt=zt,vt=qt,Wt=Math.sqrt(ue/2))}return new ot(gt/Wt,vt/Wt)}let $=[];for(let it=0,ht=B.length,dt=ht-1,gt=it+1;it<ht;it++,dt++,gt++)dt===ht&&(dt=0),gt===ht&&(gt=0),$[it]=rt(B[it],B[dt],B[gt]);let nt=[],et,Tt=$.concat();for(let it=0,ht=D;it<ht;it++){let dt=C[it];et=[];for(let gt=0,vt=dt.length,Wt=vt-1,zt=gt+1;gt<vt;gt++,Wt++,zt++)Wt===vt&&(Wt=0),zt===vt&&(zt=0),et[gt]=rt(dt[gt],dt[Wt],dt[zt]);nt.push(et),Tt=Tt.concat(et)}let At;if(m===0)At=li.triangulateShape(B,C);else{let it=[],ht=[];for(let dt=0;dt<m;dt++){let gt=dt/m,vt=f*Math.cos(gt*Math.PI/2),Wt=p*Math.sin(gt*Math.PI/2)+x;for(let zt=0,qt=B.length;zt<qt;zt++){let Jt=G(B[zt],$[zt],Wt);_t(Jt.x,Jt.y,-vt),gt===0&&it.push(Jt)}for(let zt=0,qt=D;zt<qt;zt++){let Jt=C[zt];et=nt[zt];let k=[];for(let ue=0,ee=Jt.length;ue<ee;ue++){let I=G(Jt[ue],et[ue],Wt);_t(I.x,I.y,-vt),gt===0&&k.push(I)}gt===0&&ht.push(k)}}At=li.triangulateShape(it,ht)}let re=At.length,Zt=p+x;for(let it=0;it<Z;it++){let ht=u?G(R[it],Tt[it],Zt):R[it];y?(M.copy(v.normals[0]).multiplyScalar(ht.x),w.copy(v.binormals[0]).multiplyScalar(ht.y),_.copy(E[0]).add(M).add(w),_t(_.x,_.y,_.z)):_t(ht.x,ht.y,0)}for(let it=1;it<=h;it++)for(let ht=0;ht<Z;ht++){let dt=u?G(R[ht],Tt[ht],Zt):R[ht];y?(M.copy(v.normals[it]).multiplyScalar(dt.x),w.copy(v.binormals[it]).multiplyScalar(dt.y),_.copy(E[it]).add(M).add(w),_t(_.x,_.y,_.z)):_t(dt.x,dt.y,d/h*it)}for(let it=m-1;it>=0;it--){let ht=it/m,dt=f*Math.cos(ht*Math.PI/2),gt=p*Math.sin(ht*Math.PI/2)+x;for(let vt=0,Wt=B.length;vt<Wt;vt++){let zt=G(B[vt],$[vt],gt);_t(zt.x,zt.y,d+dt)}for(let vt=0,Wt=C.length;vt<Wt;vt++){let zt=C[vt];et=nt[vt];for(let qt=0,Jt=zt.length;qt<Jt;qt++){let k=G(zt[qt],et[qt],gt);y?_t(k.x,k.y+E[h-1].y,E[h-1].x+dt):_t(k.x,k.y,d+dt)}}}lt(),V();function lt(){let it=s.length/3;if(u){let ht=0,dt=Z*ht;for(let gt=0;gt<re;gt++){let vt=At[gt];It(vt[2]+dt,vt[1]+dt,vt[0]+dt)}ht=h+m*2,dt=Z*ht;for(let gt=0;gt<re;gt++){let vt=At[gt];It(vt[0]+dt,vt[1]+dt,vt[2]+dt)}}else{for(let ht=0;ht<re;ht++){let dt=At[ht];It(dt[2],dt[1],dt[0])}for(let ht=0;ht<re;ht++){let dt=At[ht];It(dt[0]+Z*h,dt[1]+Z*h,dt[2]+Z*h)}}n.addGroup(it,s.length/3-it,0)}function V(){let it=s.length/3,ht=0;Q(B,ht),ht+=B.length;for(let dt=0,gt=C.length;dt<gt;dt++){let vt=C[dt];Q(vt,ht),ht+=vt.length}n.addGroup(it,s.length/3-it,1)}function Q(it,ht){let dt=it.length;for(;--dt>=0;){let gt=dt,vt=dt-1;vt<0&&(vt=it.length-1);for(let Wt=0,zt=h+m*2;Wt<zt;Wt++){let qt=Z*Wt,Jt=Z*(Wt+1),k=ht+gt+qt,ue=ht+vt+qt,ee=ht+vt+Jt,I=ht+gt+Jt;wt(k,ue,ee,I)}}}function _t(it,ht,dt){l.push(it),l.push(ht),l.push(dt)}function It(it,ht,dt){Gt(it),Gt(ht),Gt(dt);let gt=s.length/3,vt=b.generateTopUV(n,s,gt-3,gt-2,gt-1);se(vt[0]),se(vt[1]),se(vt[2])}function wt(it,ht,dt,gt){Gt(it),Gt(ht),Gt(gt),Gt(ht),Gt(dt),Gt(gt);let vt=s.length/3,Wt=b.generateSideWallUV(n,s,vt-6,vt-3,vt-2,vt-1);se(Wt[0]),se(Wt[1]),se(Wt[3]),se(Wt[1]),se(Wt[2]),se(Wt[3])}function Gt(it){s.push(l[it*3+0]),s.push(l[it*3+1]),s.push(l[it*3+2])}function se(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return h0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ko[s.type]().fromJSON(s)),new i(n,t.options)}},c0={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ot(r,a),new ot(o,l),new ot(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],p=t[s*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ot(a,1-l),new ot(c,1-d),new ot(u,1-p),new ot(x,1-g)]:[new ot(o,1-l),new ot(h,1-d),new ot(f,1-p),new ot(m,1-g)]}};function h0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ya=class i extends be{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=le(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new O,u=new ot,f=new O,p=new O,x=new O,m=0,g=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,g=t[b+1].y-t[b].y,f.x=g*1,f.y=-m,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[b+1].x-t[b].x,g=t[b+1].y-t[b].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let b=0;b<=e;b++){let E=n+b*h*s,y=Math.sin(E),v=Math.cos(E);for(let w=0;w<=t.length-1;w++){d.x=t[w].x*y,d.y=t[w].y,d.z=t[w].x*v,a.push(d.x,d.y,d.z),u.x=b/e,u.y=w/(t.length-1),o.push(u.x,u.y);let M=l[3*w+0]*y,_=l[3*w+1],T=l[3*w+0]*v;c.push(M,_,T)}}for(let b=0;b<e;b++)for(let E=0;E<t.length-1;E++){let y=E+b*t.length,v=y,w=y+t.length,M=y+t.length+1,_=y+1;r.push(v,w,_),r.push(M,_,w)}this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("uv",new ie(o,2)),this.setAttribute("normal",new ie(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var hn=class i extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let b=g*u-a;for(let E=0;E<c;E++){let y=E*d-r;p.push(y,-b,0),x.push(0,0,1),m.push(E/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<o;b++){let E=b+c*g,y=b+c*(g+1),v=b+1+c*(g+1),w=b+1+c*g;f.push(E,y,w),f.push(y,v,w)}this.setIndex(f),this.setAttribute("position",new ie(p,3)),this.setAttribute("normal",new ie(x,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ys=class i extends be{constructor(t=new gn([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ie(s,3)),this.setAttribute("normal",new ie(r,3)),this.setAttribute("uv",new ie(a,2));function c(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,p=u.holes;li.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let b=p[m];li.isClockWise(b)===!0&&(p[m]=b.reverse())}let x=li.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let b=p[m];f=f.concat(b)}for(let m=0,g=f.length;m<g;m++){let b=f[m];s.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let m=0,g=x.length;m<g;m++){let b=x[m],E=b[0]+d,y=b[1]+d,v=b[2]+d;n.push(E,y,v),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return u0(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function u0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var va=class i extends be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new O,u=new O,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let b=[],E=g/n,y=a+E*o,v=t*Math.cos(y),w=Math.sqrt(t*t-v*v),M=0;g===0&&a===0?M=.5/e:g===n&&l===Math.PI&&(M=-.5/e);for(let _=0;_<=e;_++){let T=_/e,R=s+T*r;d.x=-w*Math.cos(R),d.y=v,d.z=w*Math.sin(R),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(T+M,1-E),b.push(c++)}h.push(b)}for(let g=0;g<n;g++)for(let b=0;b<e;b++){let E=h[g][b+1],y=h[g][b],v=h[g+1][b],w=h[g+1][b+1];(g!==0||a>0)&&f.push(E,y,w),(g!==n-1||l<Math.PI)&&f.push(y,v,w)}this.setIndex(f),this.setAttribute("position",new ie(p,3)),this.setAttribute("normal",new ie(x,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var mr=class i extends be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new O,f=new O,p=new O;for(let x=0;x<=n;x++){let m=a+x/n*o;for(let g=0;g<=s;g++){let b=g/s*r;f.x=(t+e*Math.cos(m))*Math.cos(b),f.y=(t+e*Math.cos(m))*Math.sin(b),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(b),u.y=t*Math.sin(b),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(g/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,b=(s+1)*(x-1)+m-1,E=(s+1)*(x-1)+m,y=(s+1)*x+m;l.push(g,b,y),l.push(b,E,y)}this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Ui=class i extends be{constructor(t=new pa(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new O,l=new O,c=new ot,h=new O,d=[],u=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new ie(d,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(f,2));function x(){for(let E=0;E<e;E++)m(E);m(r===!1?e:0),b(),g()}function m(E){h=t.getPointAt(E/e,h);let y=a.normals[E],v=a.binormals[E];for(let w=0;w<=s;w++){let M=w/s*Math.PI*2,_=Math.sin(M),T=-Math.cos(M);l.x=T*y.x+_*v.x,l.y=T*y.y+_*v.y,l.z=T*y.z+_*v.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function g(){for(let E=1;E<=e;E++)for(let y=1;y<=s;y++){let v=(s+1)*(E-1)+(y-1),w=(s+1)*E+(y-1),M=(s+1)*E+y,_=(s+1)*(E-1)+y;p.push(v,w,_),p.push(w,M,_)}}function b(){for(let E=0;E<=e;E++)for(let y=0;y<=s;y++)c.x=E/e,c.y=y/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Ko[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function ws(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Fd(s))s.isRenderTargetTexture?(Kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Fd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function un(i){let t={};for(let e=0;e<i.length;e++){let n=ws(i[e]);for(let s in n)t[s]=n[s]}return t}function Fd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function d0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Kh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var yn={clone:ws,merge:un},f0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,we=class extends di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f0,this.fragmentShader=p0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=d0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Vt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ot().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Fe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new te().fromArray(s.value);break;case"m4":this.uniforms[n].value=new he().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Qo=class extends we{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},_e=class extends di{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ke=class extends _e{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ma=class extends di{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};var gr=class extends di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},tl=class extends di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var Sa=class extends aa{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function tr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function dh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ji=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},el=class extends ji{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mh,endingEnd:mh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case gh:r=t,o=2*e-n;break;case xh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gh:a=t,l=2*n-e;break;case xh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),x=p*p,m=x*p,g=-u*m+2*u*x-u*p,b=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*p+1,E=(-1-f)*m+(1.5+f)*x+.5*p,y=f*m-f*x;for(let v=0;v!==o;++v)r[v]=g*a[h+v]+b*a[c+v]+E*a[l+v]+y*a[d+v];return r}},nl=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},il=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},sl=class extends ji{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(s-e),x=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*x+a[l+m]*p;return r}let u=o*2,f=t-1;for(let p=0;p!==o;++p){let x=a[c+p],m=a[l+p],g=f*u+p*2,b=d[g],E=d[g+1],y=t*u+p*2,v=h[y],w=h[y+1],M=g0(n,e,b,v,s);r[p]=Pf(M,x,E,w,m)}return r}};function Pf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function m0(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function g0(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Pf(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=m0(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Ln=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=tr(e,this.TimeBufferType),this.values=tr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:tr(t.times,Array),values:tr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),dh(t.settings)&&(n.settings={inTangents:tr(t.settings.inTangents,Array),outTangents:tr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new el(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new sl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Kr:e=this.InterpolantFactoryMethodDiscrete;break;case Ho:e=this.InterpolantFactoryMethodLinear;break;case Io:e=this.InterpolantFactoryMethodSmooth;break;case ph:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kr;case this.InterpolantFactoryMethodLinear:return Ho;case this.InterpolantFactoryMethodSmooth:return Io;case this.InterpolantFactoryMethodBezier:return ph}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;dh(this.settings)&&(Od(this.settings.inTangents,t),Od(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(jt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){jt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){jt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&ym(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){jt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Io,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let x=e[d+p];if(x!==e[u+p]||x!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,dh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Od(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=Ho;var Qi=class extends Ln{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Kr;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends Ln{constructor(t,e,n,s){super(t,e,n,s)}};rl.prototype.ValueTypeName="color";var al=class extends Ln{constructor(t,e,n,s){super(t,e,n,s)}};al.prototype.ValueTypeName="number";var ol=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)ui.slerpFlat(r,0,a,c-o,a,c,l);return r}},ba=class extends Ln{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ol(this.times,this.values,this.getValueSize(),t)}};ba.prototype.ValueTypeName="quaternion";ba.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends Ln{constructor(t,e,n){super(t,e,n)}};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Kr;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var ll=class extends Ln{constructor(t,e,n,s){super(t,e,n,s)}};ll.prototype.ValueTypeName="vector";var cl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},If=new cl,hl=class{constructor(t){this.manager=t!==void 0?t:If,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};hl.DEFAULT_MATERIAL_NAME="__DEFAULT";var xr=class extends Je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var fh=new he,Bd=new O,kd=new O,_r=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dr,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Bd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bd),kd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(kd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){fh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(fh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===rr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(fh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Co=new O,Po=new ui,ai=new O,wa=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Co,Po,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Co,Po,ai.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Co,Po,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Co,Po,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$i=new O,zd=new ot,Hd=new ot,en=class extends wa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ea*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Hc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ea*2*Math.atan(Math.tan(Hc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,zd,Hd),e.subVectors(Hd,zd)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Hc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Mh=class extends _r{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=ea*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},yr=class extends xr{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Mh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Sh=class extends _r{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}},Ta=class extends xr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Sh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},es=class extends wa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},bh=class extends _r{constructor(){super(new es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vr=class extends xr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new bh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var er=-90,nr=1,ul=class extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(er,nr,t,e);s.layers=this.layers,this.add(s);let r=new en(er,nr,t,e);r.layers=this.layers,this.add(r);let a=new en(er,nr,t,e);a.layers=this.layers,this.add(a);let o=new en(er,nr,t,e);o.layers=this.layers,this.add(o);let l=new en(er,nr,t,e);l.layers=this.layers,this.add(l);let c=new en(er,nr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},dl=class extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var jh="\\[\\]\\.:\\/",x0=new RegExp("["+jh+"]","g"),Qh="[^"+jh+"]",_0="[^"+jh.replace("\\.","")+"]",y0=/((?:WC+[\/:])*)/.source.replace("WC",Qh),v0=/(WCOD+)?/.source.replace("WCOD",_0),M0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qh),S0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qh),b0=new RegExp("^"+y0+v0+M0+S0+"$"),w0=["material","materials","bones","map"],wh=class{constructor(t,e,n){let s=n||Ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ie=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(x0,"")}static parseTrackName(t){let e=b0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);w0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;jt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=wh;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gv=new Float32Array(1);var Vd=new he,Ea=class{constructor(t,e,n=0,s=1/0){this.ray=new ur(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new lr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Vd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vd),this}intersectObject(t,e=!0,n=[]){return Th(t,this,n,e),n.sort(Gd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Th(t[s],this,n,e);return n.sort(Gd),n}};function Gd(i,t){return i.distance-t.distance}function Th(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Th(r[a],t,e,!0)}}var ru=class ru{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};ru.prototype.isMatrix2=!0;var Eh=ru;function tu(i,t,e,n){let s=T0(n);switch(e){case Wh:return i*t;case qh:return i*t/s.components*s.byteLength;case Ml:return i*t/s.components*s.byteLength;case as:return i*t*2/s.components*s.byteLength;case Sl:return i*t*2/s.components*s.byteLength;case Xh:return i*t*3/s.components*s.byteLength;case Tn:return i*t*4/s.components*s.byteLength;case bl:return i*t*4/s.components*s.byteLength;case Da:case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ua:case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tl:case Al:return Math.max(i,16)*Math.max(t,8)/4;case wl:case El:return Math.max(i,8)*Math.max(t,8)/2;case Rl:case Cl:case Il:case Dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pl:case Fa:case Ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case kl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case zl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Yl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Zl:case $l:case Jl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Kl:case jl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Oa:case Ql:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function T0(i){switch(i){case nn:case zh:return{byteLength:1,components:1};case br:case Hh:case He:return{byteLength:2,components:1};case yl:case vl:return{byteLength:2,components:4};case ti:case _l:case ei:return{byteLength:4,components:1};case Vh:case Gh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Qf(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function L0(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var U0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,F0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,O0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,k0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,z0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,H0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,G0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,W0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,X0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,q0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Y0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Z0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ig=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ag=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,og=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ug=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,fg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_g=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Eg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ig=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Dg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ug=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ng=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Og=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Kg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ix=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ax=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ox=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,hx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ux=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,px=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,xx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_x=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ex=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ax=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ux=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ox=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$x=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,e1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,n1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,r1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,c1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ne={alphahash_fragment:U0,alphahash_pars_fragment:N0,alphamap_fragment:F0,alphamap_pars_fragment:O0,alphatest_fragment:B0,alphatest_pars_fragment:k0,aomap_fragment:z0,aomap_pars_fragment:H0,batching_pars_vertex:V0,batching_vertex:G0,begin_vertex:W0,beginnormal_vertex:X0,bsdfs:q0,iridescence_fragment:Y0,bumpmap_pars_fragment:Z0,clipping_planes_fragment:$0,clipping_planes_pars_fragment:J0,clipping_planes_pars_vertex:K0,clipping_planes_vertex:j0,color_fragment:Q0,color_pars_fragment:tg,color_pars_vertex:eg,color_vertex:ng,common:ig,cube_uv_reflection_fragment:sg,defaultnormal_vertex:rg,displacementmap_pars_vertex:ag,displacementmap_vertex:og,emissivemap_fragment:lg,emissivemap_pars_fragment:cg,colorspace_fragment:hg,colorspace_pars_fragment:ug,envmap_fragment:dg,envmap_common_pars_fragment:fg,envmap_pars_fragment:pg,envmap_pars_vertex:mg,envmap_physical_pars_fragment:Eg,envmap_vertex:gg,fog_vertex:xg,fog_pars_vertex:_g,fog_fragment:yg,fog_pars_fragment:vg,gradientmap_pars_fragment:Mg,lightmap_pars_fragment:Sg,lights_lambert_fragment:bg,lights_lambert_pars_fragment:wg,lights_pars_begin:Tg,lights_toon_fragment:Ag,lights_toon_pars_fragment:Rg,lights_phong_fragment:Cg,lights_phong_pars_fragment:Pg,lights_physical_fragment:Ig,lights_physical_pars_fragment:Dg,lights_fragment_begin:Lg,lights_fragment_maps:Ug,lights_fragment_end:Ng,lightprobes_pars_fragment:Fg,logdepthbuf_fragment:Og,logdepthbuf_pars_fragment:Bg,logdepthbuf_pars_vertex:kg,logdepthbuf_vertex:zg,map_fragment:Hg,map_pars_fragment:Vg,map_particle_fragment:Gg,map_particle_pars_fragment:Wg,metalnessmap_fragment:Xg,metalnessmap_pars_fragment:qg,morphinstance_vertex:Yg,morphcolor_vertex:Zg,morphnormal_vertex:$g,morphtarget_pars_vertex:Jg,morphtarget_vertex:Kg,normal_fragment_begin:jg,normal_fragment_maps:Qg,normal_pars_fragment:tx,normal_pars_vertex:ex,normal_vertex:nx,normalmap_pars_fragment:ix,clearcoat_normal_fragment_begin:sx,clearcoat_normal_fragment_maps:rx,clearcoat_pars_fragment:ax,iridescence_pars_fragment:ox,opaque_fragment:lx,packing:cx,premultiplied_alpha_fragment:hx,project_vertex:ux,dithering_fragment:dx,dithering_pars_fragment:fx,roughnessmap_fragment:px,roughnessmap_pars_fragment:mx,shadowmap_pars_fragment:gx,shadowmap_pars_vertex:xx,shadowmap_vertex:_x,shadowmask_pars_fragment:yx,skinbase_vertex:vx,skinning_pars_vertex:Mx,skinning_vertex:Sx,skinnormal_vertex:bx,specularmap_fragment:wx,specularmap_pars_fragment:Tx,tonemapping_fragment:Ex,tonemapping_pars_fragment:Ax,transmission_fragment:Rx,transmission_pars_fragment:Cx,uv_pars_fragment:Px,uv_pars_vertex:Ix,uv_vertex:Dx,worldpos_vertex:Lx,background_vert:Ux,background_frag:Nx,backgroundCube_vert:Fx,backgroundCube_frag:Ox,cube_vert:Bx,cube_frag:kx,depth_vert:zx,depth_frag:Hx,distance_vert:Vx,distance_frag:Gx,equirect_vert:Wx,equirect_frag:Xx,linedashed_vert:qx,linedashed_frag:Yx,meshbasic_vert:Zx,meshbasic_frag:$x,meshlambert_vert:Jx,meshlambert_frag:Kx,meshmatcap_vert:jx,meshmatcap_frag:Qx,meshnormal_vert:t1,meshnormal_frag:e1,meshphong_vert:n1,meshphong_frag:i1,meshphysical_vert:s1,meshphysical_frag:r1,meshtoon_vert:a1,meshtoon_frag:o1,points_vert:l1,points_frag:c1,shadow_vert:h1,shadow_frag:u1,sprite_vert:d1,sprite_frag:f1},Rt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},_i={basic:{uniforms:un([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:un([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Vt(0)},envMapIntensity:{value:1}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:un([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:un([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:un([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:un([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:un([Rt.points,Rt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:un([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:un([Rt.common,Rt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:un([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:un([Rt.sprite,Rt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:un([Rt.common,Rt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:un([Rt.lights,Rt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};_i.physical={uniforms:un([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var nc={r:0,b:0,g:0},p1=new he,tp=new te;tp.set(-1,0,0,0,1,0,0,0,1);function m1(i,t,e,n,s,r){let a=new Vt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(b){let E=b.isScene===!0?b.background:null;if(E&&E.isTexture){let y=b.backgroundBlurriness>0;E=t.get(E,y)}return E}function p(b){let E=!1,y=f(b);y===null?m(a,o):y&&y.isColor&&(m(y,1),E=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?e.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(b,E){let y=f(E);y&&(y.isCubeTexture||y.mapping===Pa)?(c===void 0&&(c=new xe(new me(1,1,1),new we({name:"BackgroundCubeMaterial",uniforms:ws(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(p1.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(tp),c.material.toneMapped=de.getTransfer(y.colorSpace)!==Se,(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new xe(new hn(2,2),new we({name:"BackgroundMaterial",uniforms:ws(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=de.getTransfer(y.colorSpace)!==Se,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,E){b.getRGB(nc,Kh(i)),e.buffers.color.setClear(nc.r,nc.g,nc.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:p,addToRenderList:x,dispose:g}}function g1(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(C,L,F,D,B){let G=!1,Z=d(C,D,F,L);r!==Z&&(r=Z,c(r.object)),G=f(C,D,F,B),G&&p(C,D,F,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,y(C,L,F,D),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function d(C,L,F,D){let B=D.wireframe===!0,G=n[L.id];G===void 0&&(G={},n[L.id]=G);let Z=C.isInstancedMesh===!0?C.id:0,rt=G[Z];rt===void 0&&(rt={},G[Z]=rt);let $=rt[F.id];$===void 0&&($={},rt[F.id]=$);let nt=$[B];return nt===void 0&&(nt=u(l()),$[B]=nt),nt}function u(C){let L=[],F=[],D=[];for(let B=0;B<e;B++)L[B]=0,F[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:D,object:C,attributes:{},index:null}}function f(C,L,F,D){let B=r.attributes,G=L.attributes,Z=0,rt=F.getAttributes();for(let $ in rt)if(rt[$].location>=0){let et=B[$],Tt=G[$];if(Tt===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(Tt=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(Tt=C.instanceColor)),et===void 0||et.attribute!==Tt||Tt&&et.data!==Tt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==D}function p(C,L,F,D){let B={},G=L.attributes,Z=0,rt=F.getAttributes();for(let $ in rt)if(rt[$].location>=0){let et=G[$];et===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(et=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(et=C.instanceColor));let Tt={};Tt.attribute=et,et&&et.data&&(Tt.data=et.data),B[$]=Tt,Z++}r.attributes=B,r.attributesNum=Z,r.index=D}function x(){let C=r.newAttributes;for(let L=0,F=C.length;L<F;L++)C[L]=0}function m(C){g(C,0)}function g(C,L){let F=r.newAttributes,D=r.enabledAttributes,B=r.attributeDivisors;F[C]=1,D[C]===0&&(i.enableVertexAttribArray(C),D[C]=1),B[C]!==L&&(i.vertexAttribDivisor(C,L),B[C]=L)}function b(){let C=r.newAttributes,L=r.enabledAttributes;for(let F=0,D=L.length;F<D;F++)L[F]!==C[F]&&(i.disableVertexAttribArray(F),L[F]=0)}function E(C,L,F,D,B,G,Z){Z===!0?i.vertexAttribIPointer(C,L,F,B,G):i.vertexAttribPointer(C,L,F,D,B,G)}function y(C,L,F,D){x();let B=D.attributes,G=F.getAttributes(),Z=L.defaultAttributeValues;for(let rt in G){let $=G[rt];if($.location>=0){let nt=B[rt];if(nt===void 0&&(rt==="instanceMatrix"&&C.instanceMatrix&&(nt=C.instanceMatrix),rt==="instanceColor"&&C.instanceColor&&(nt=C.instanceColor)),nt!==void 0){let et=nt.normalized,Tt=nt.itemSize,At=t.get(nt);if(At===void 0)continue;let re=At.buffer,Zt=At.type,lt=At.bytesPerElement,V=Zt===i.INT||Zt===i.UNSIGNED_INT||nt.gpuType===_l;if(nt.isInterleavedBufferAttribute){let Q=nt.data,_t=Q.stride,It=nt.offset;if(Q.isInstancedInterleavedBuffer){for(let wt=0;wt<$.locationSize;wt++)g($.location+wt,Q.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let wt=0;wt<$.locationSize;wt++)m($.location+wt);i.bindBuffer(i.ARRAY_BUFFER,re);for(let wt=0;wt<$.locationSize;wt++)E($.location+wt,Tt/$.locationSize,Zt,et,_t*lt,(It+Tt/$.locationSize*wt)*lt,V)}else{if(nt.isInstancedBufferAttribute){for(let Q=0;Q<$.locationSize;Q++)g($.location+Q,nt.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Q=0;Q<$.locationSize;Q++)m($.location+Q);i.bindBuffer(i.ARRAY_BUFFER,re);for(let Q=0;Q<$.locationSize;Q++)E($.location+Q,Tt/$.locationSize,Zt,et,Tt*lt,Tt/$.locationSize*Q*lt,V)}}else if(Z!==void 0){let et=Z[rt];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv($.location,et);break;case 3:i.vertexAttrib3fv($.location,et);break;case 4:i.vertexAttrib4fv($.location,et);break;default:i.vertexAttrib1fv($.location,et)}}}}b()}function v(){T();for(let C in n){let L=n[C];for(let F in L){let D=L[F];for(let B in D){let G=D[B];for(let Z in G)h(G[Z].object),delete G[Z];delete D[B]}}delete n[C]}}function w(C){if(n[C.id]===void 0)return;let L=n[C.id];for(let F in L){let D=L[F];for(let B in D){let G=D[B];for(let Z in G)h(G[Z].object),delete G[Z];delete D[B]}}delete n[C.id]}function M(C){for(let L in n){let F=n[L];for(let D in F){let B=F[D];if(B[C.id]===void 0)continue;let G=B[C.id];for(let Z in G)h(G[Z].object),delete G[Z];delete B[C.id]}}}function _(C){for(let L in n){let F=n[L],D=C.isInstancedMesh===!0?C.id:0,B=F[D];if(B!==void 0){for(let G in B){let Z=B[G];for(let rt in Z)h(Z[rt].object),delete Z[rt];delete B[G]}delete F[D],Object.keys(F).length===0&&delete n[L]}}}function T(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:M,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function x1(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function _1(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let M=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(M){return!(M!==Tn&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){let _=M===He&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==nn&&M!==ei&&!_&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Kt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:y,maxSamples:v,samples:w}}function y1(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Jn,o=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,E=b*4,y=g.clippingState||null;l.value=y,y=h(p,u,E,f);for(let v=0;v!==E;++v)y[v]=e[v];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<g)&&(m=new Float32Array(g));for(let E=0,y=f;E!==x;++E,y+=4)a.copy(d[E]).applyMatrix4(b,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var Er=4,v1=6,M1=20,S1=256,ka=new es,Df=new Vt,au=null,ou=0,lu=0,cu=!1,b1=new O,Ts=new O,Rr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=b1}=r;au=this._renderer.getRenderTarget(),ou=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(au,ou,lu),this._renderer.xr.enabled=cu,t.scissorTest=!1,Tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),au=this._renderer.getRenderTarget(),ou=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:He,format:Tn,colorSpace:jr,depthBuffer:!1},s=Lf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=w1(r)),this._blurMaterial=E1(r,t,e),this._ggxMaterial=T1(r,t,e)}return s}_compileMaterial(t){let e=new xe(new be,t);this._renderer.compile(e,ka)}_sceneToCubeUV(t,e,n,s,r){let l=new en(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Df),d.toneMapping=Qn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xe(new me,new mn({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,g=!0):(m.color.copy(Df),g=!0);for(let E=0;E<6;E++){let y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let v=this._cubeSize;Tr(s,y*v,E>2?v:0,v,v),d.setRenderTarget(s),g&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===is||t.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Tr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ka)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,x=this._sizeLods[n],m=3*x*(n>p-Er?n-p+Er:0),g=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,Tr(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(o,ka),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Tr(t,m,g,3*x,2*x),s.setRenderTarget(t),s.render(o,ka)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Er?s-this._lodMax+Er:0),u=4*(this._cubeSize-h);Tr(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,ka)}};function w1(i){let t=[],e=[],n=i,s=i-Er+1+v1;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let g=0;g<d;g++){let b=g%3*2/3-1,E=g>2?0:-1,y=[b,E,0,b+2/3,E,0,b+2/3,E+1,0,b,E,0,b+2/3,E+1,0,b,E+1,0];p.set(y,f*u*g);for(let v=0;v<u;v++){let w=h[v*2]*2-1,M=h[v*2+1]*2-1;g===0?Ts.set(1,M,w):g===1?Ts.set(-w,1,-M):g===2?Ts.set(-w,M,1):g===3?Ts.set(-1,M,-w):g===4?Ts.set(-w,-1,M):Ts.set(w,M,-1),Ts.toArray(x,(g*u+v)*f)}}let m=new be;m.setAttribute("position",new bn(p,f)),m.setAttribute("outputDirection",new bn(x,f)),e.push(new xe(m,null)),n>Er&&n--}return{lodMeshes:e,sizeLods:t}}function Lf(i,t,e){let n=new ke(i,t,e);return n.texture.mapping=Pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function T1(i,t,e){return new we({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:S1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ac(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Xe,depthTest:!1,depthWrite:!1})}function E1(i,t,e){return new we({name:"SphericalGaussianBlur",defines:{SAMPLES:M1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ac(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Xe,depthTest:!1,depthWrite:!1})}function Uf(){return new we({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xe,depthTest:!1,depthWrite:!1})}function Nf(){return new we({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xe,depthTest:!1,depthWrite:!1})}function ac(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var sc=class extends ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new la(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new me(5,5,5),r=new we({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:Xe});r.uniforms.tEquirect.value=e;let a=new xe(s,r),o=e.minFilter;return e.minFilter===ss&&(e.minFilter=sn),new ul(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function A1(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===ml||f===gl)if(t.has(u)){let p=t.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new sc(p.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,p=f===ml||f===gl,x=f===is||f===bs;if(p||x){let m=e.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Rr(i)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return p&&b&&b.height>0||x&&b&&l(b)?(n===null&&(n=new Rr(i)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===ml?u.mapping=is:f===gl&&(u.mapping=bs),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function R1(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&gs("WebGLRenderer: "+n+" extension not supported."),s}}}function C1(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,x=0;if(p===void 0)return;if(f!==null){let b=f.array;x=f.version;for(let E=0,y=b.length;E<y;E+=3){let v=b[E+0],w=b[E+1],M=b[E+2];u.push(v,w,w,M,M,v)}}else{let b=p.array;x=p.version;for(let E=0,y=b.length/3-1;E<y;E+=3){let v=E+0,w=E+1,M=E+2;u.push(v,w,w,M,M,v)}}let m=new(p.count>=65535?ra:sa)(u,1);m.version=x;let g=r.get(d);g&&t.remove(g),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function P1(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function I1(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:jt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function D1(i,t,e){let n=new WeakMap,s=new Fe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let T=function(){M.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],E=0;f===!0&&(E=1),p===!0&&(E=2),x===!0&&(E=3);let y=o.attributes.position.count*E,v=1;y>t.maxTextureSize&&(v=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*v*4*d),M=new na(w,y,v,d);M.type=ei,M.needsUpdate=!0;let _=E*4;for(let R=0;R<d;R++){let C=m[R],L=g[R],F=b[R],D=y*v*4*R;for(let B=0;B<C.count;B++){let G=B*_;f===!0&&(s.fromBufferAttribute(C,B),w[D+G+0]=s.x,w[D+G+1]=s.y,w[D+G+2]=s.z,w[D+G+3]=0),p===!0&&(s.fromBufferAttribute(L,B),w[D+G+4]=s.x,w[D+G+5]=s.y,w[D+G+6]=s.z,w[D+G+7]=0),x===!0&&(s.fromBufferAttribute(F,B),w[D+G+8]=s.x,w[D+G+9]=s.y,w[D+G+10]=s.z,w[D+G+11]=F.itemSize===4?s.w:1)}}u={count:d,texture:M,size:new ot(y,v)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function L1(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var U1={[Lh]:"LINEAR_TONE_MAPPING",[Uh]:"REINHARD_TONE_MAPPING",[Nh]:"CINEON_TONE_MAPPING",[Fh]:"ACES_FILMIC_TONE_MAPPING",[Oh]:"AGX_TONE_MAPPING",[Bh]:"NEUTRAL_TONE_MAPPING",[Ca]:"CUSTOM_TONE_MAPPING"};function N1(i,t,e,n,s,r){let a=new ke(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new be;c.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ie([0,2,0,0,2,0],2));let h=new Qo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new xe(c,h),u=new es(-1,1,1,-1,0,1),f=null,p=null,x=!1,m,g=null,b=[],E=!1;this.setSize=function(y,v){a.setSize(y,v),o!==null&&o.setSize(y,v),l!==null&&l.setSize(y,v);for(let w=0;w<b.length;w++){let M=b[w];M.setSize&&M.setSize(y,v)}},this.setEffects=function(y){b=y,E=b.length>0&&b[0].isRenderPass===!0;let v=a.width,w=a.height;b.length>0&&o===null&&(o=new ke(v,w,{type:He,depthBuffer:!1,stencilBuffer:!1}),l=new ke(v,w,{type:He,depthBuffer:!1,stencilBuffer:!1}));for(let M=0;M<b.length;M++){let _=b[M];_.setSize&&_.setSize(v,w)}},this.begin=function(y,v){if(x||y.toneMapping===Qn&&b.length===0)return!1;if(g=v,v!==null){let w=v.width,M=v.height;(a.width!==w||a.height!==M)&&this.setSize(w,M)}return E===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=Qn,!0},this.hasRenderPass=function(){return E},this.end=function(y,v){y.toneMapping=m,x=!0;let w=a,M=o;for(let _=0;_<b.length;_++){let T=b[_];T.enabled!==!1&&(T.render(y,M,w,v),T.needsSwap!==!1&&(w=M,M=M===o?l:o))}if(f!==y.outputColorSpace||p!==y.toneMapping){f=y.outputColorSpace,p=y.toneMapping,h.defines={},de.getTransfer(f)===Se&&(h.defines.SRGB_TRANSFER="");let _=U1[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(g),y.render(d,u),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var ep=new pn,du=new fi(1,1),np=new na,ip=new Wo,sp=new la,Ff=[],Of=[],Bf=new Float32Array(16),kf=new Float32Array(9),zf=new Float32Array(4);function Cr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ff[s];if(r===void 0&&(r=new Float32Array(s),Ff[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function oc(i,t){let e=Of[t];e===void 0&&(e=new Int32Array(t),Of[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function F1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function O1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2fv(this.addr,t),Qe(e,t)}}function B1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;i.uniform3fv(this.addr,t),Qe(e,t)}}function k1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4fv(this.addr,t),Qe(e,t)}}function z1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;zf.set(n),i.uniformMatrix2fv(this.addr,!1,zf),Qe(e,n)}}function H1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;kf.set(n),i.uniformMatrix3fv(this.addr,!1,kf),Qe(e,n)}}function V1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;Bf.set(n),i.uniformMatrix4fv(this.addr,!1,Bf),Qe(e,n)}}function G1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function W1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2iv(this.addr,t),Qe(e,t)}}function X1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;i.uniform3iv(this.addr,t),Qe(e,t)}}function q1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4iv(this.addr,t),Qe(e,t)}}function Y1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Z1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2uiv(this.addr,t),Qe(e,t)}}function $1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;i.uniform3uiv(this.addr,t),Qe(e,t)}}function J1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4uiv(this.addr,t),Qe(e,t)}}function K1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(du.compareFunction=e.isReversedDepthBuffer()?ec:tc,r=du):r=ep,e.setTexture2D(t||r,s)}function j1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ip,s)}function Q1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||sp,s)}function t_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||np,s)}function e_(i){switch(i){case 5126:return F1;case 35664:return O1;case 35665:return B1;case 35666:return k1;case 35674:return z1;case 35675:return H1;case 35676:return V1;case 5124:case 35670:return G1;case 35667:case 35671:return W1;case 35668:case 35672:return X1;case 35669:case 35673:return q1;case 5125:return Y1;case 36294:return Z1;case 36295:return $1;case 36296:return J1;case 35678:case 36198:case 36298:case 36306:case 35682:return K1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return Q1;case 36289:case 36303:case 36311:case 36292:return t_}}function n_(i,t){i.uniform1fv(this.addr,t)}function i_(i,t){let e=Cr(t,this.size,2);i.uniform2fv(this.addr,e)}function s_(i,t){let e=Cr(t,this.size,3);i.uniform3fv(this.addr,e)}function r_(i,t){let e=Cr(t,this.size,4);i.uniform4fv(this.addr,e)}function a_(i,t){let e=Cr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function o_(i,t){let e=Cr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function l_(i,t){let e=Cr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function c_(i,t){i.uniform1iv(this.addr,t)}function h_(i,t){i.uniform2iv(this.addr,t)}function u_(i,t){i.uniform3iv(this.addr,t)}function d_(i,t){i.uniform4iv(this.addr,t)}function f_(i,t){i.uniform1uiv(this.addr,t)}function p_(i,t){i.uniform2uiv(this.addr,t)}function m_(i,t){i.uniform3uiv(this.addr,t)}function g_(i,t){i.uniform4uiv(this.addr,t)}function x_(i,t,e){let n=this.cache,s=t.length,r=oc(e,s);je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=du:a=ep;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function __(i,t,e){let n=this.cache,s=t.length,r=oc(e,s);je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ip,r[a])}function y_(i,t,e){let n=this.cache,s=t.length,r=oc(e,s);je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||sp,r[a])}function v_(i,t,e){let n=this.cache,s=t.length,r=oc(e,s);je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||np,r[a])}function M_(i){switch(i){case 5126:return n_;case 35664:return i_;case 35665:return s_;case 35666:return r_;case 35674:return a_;case 35675:return o_;case 35676:return l_;case 5124:case 35670:return c_;case 35667:case 35671:return h_;case 35668:case 35672:return u_;case 35669:case 35673:return d_;case 5125:return f_;case 36294:return p_;case 36295:return m_;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return __;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return v_}}var fu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=e_(e.type)}},pu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=M_(e.type)}},mu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},hu=/(\w+)(\])?(\[|\.)?/g;function Hf(i,t){i.seq.push(t),i.map[t.id]=t}function S_(i,t,e){let n=i.name,s=n.length;for(hu.lastIndex=0;;){let r=hu.exec(n),a=hu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Hf(e,c===void 0?new fu(o,i,t):new pu(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new mu(o),Hf(e,d)),e=d}}}var Ar=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);S_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Vf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var b_=37297,w_=0;function T_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Gf=new te;function E_(i){de._getMatrix(Gf,de.workingColorSpace,i);let t=`mat3( ${Gf.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case Qr:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return Kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Wf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+T_(i.getShaderSource(t),o)}else return r}function A_(i,t){let e=E_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var R_={[Lh]:"Linear",[Uh]:"Reinhard",[Nh]:"Cineon",[Fh]:"ACESFilmic",[Oh]:"AgX",[Bh]:"Neutral",[Ca]:"Custom"};function C_(i,t){let e=R_[t];return e===void 0?(Kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ic=new O;function P_(){de.getLuminanceCoefficients(ic);let i=ic.x.toFixed(4),t=ic.y.toFixed(4),e=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ha).join(`
`)}function D_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function L_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ha(i){return i!==""}function Xf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var U_=/^[ \t]*#include +<([\w\d./]+)>/gm;function gu(i){return i.replace(U_,F_)}var N_=new Map;function F_(i,t){let e=ne[t];if(e===void 0){let n=N_.get(t);if(n!==void 0)e=ne[n],Kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return gu(e)}var O_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yf(i){return i.replace(O_,B_)}function B_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var k_={[vs]:"SHADOWMAP_TYPE_PCF",[Mr]:"SHADOWMAP_TYPE_VSM"};function z_(i){return k_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var H_={[is]:"ENVMAP_TYPE_CUBE",[bs]:"ENVMAP_TYPE_CUBE",[Pa]:"ENVMAP_TYPE_CUBE_UV"};function V_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":H_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var G_={[bs]:"ENVMAP_MODE_REFRACTION"};function W_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":G_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var X_={[Dh]:"ENVMAP_BLENDING_MULTIPLY",[lf]:"ENVMAP_BLENDING_MIX",[cf]:"ENVMAP_BLENDING_ADD"};function q_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":X_[i.combine]||"ENVMAP_BLENDING_NONE"}function Y_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Z_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=z_(e),c=V_(e),h=W_(e),d=q_(e),u=Y_(e),f=I_(e),p=D_(r),x=s.createProgram(),m,g,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ha).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ha).join(`
`),g.length>0&&(g+=`
`)):(m=[Zf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ha).join(`
`),g=[Zf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?ne.tonemapping_pars_fragment:"",e.toneMapping!==Qn?C_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,A_("linearToOutputTexel",e.outputColorSpace),P_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ha).join(`
`)),a=gu(a),a=Xf(a,e),a=qf(a,e),o=gu(o),o=Xf(o,e),o=qf(o,e),a=Yf(a),o=Yf(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let E=b+m+a,y=b+g+o,v=Vf(s,s.VERTEX_SHADER,E),w=Vf(s,s.FRAGMENT_SHADER,y);s.attachShader(x,v),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function M(C){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(v)||"",D=s.getShaderInfoLog(w)||"",B=L.trim(),G=F.trim(),Z=D.trim(),rt=!0,$=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(rt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,v,w);else{let nt=Wf(s,v,"vertex"),et=Wf(s,w,"fragment");jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+nt+`
`+et)}else B!==""?Kt("WebGLProgram: Program Info Log:",B):(G===""||Z==="")&&($=!1);$&&(C.diagnostics={runnable:rt,programLog:B,vertexShader:{log:G,prefix:m},fragmentShader:{log:Z,prefix:g}})}s.deleteShader(v),s.deleteShader(w),_=new Ar(s,x),T=L_(s,x)}let _;this.getUniforms=function(){return _===void 0&&M(this),_};let T;this.getAttributes=function(){return T===void 0&&M(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,b_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=w_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=v,this.fragmentShader=w,this}var $_=0,xu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new _u(t),e.set(t,n)),n}},_u=class{constructor(t){this.id=$_++,this.code=t,this.usedTimes=0}};function J_(i){return i===as||i===Fa||i===Oa}function K_(i,t,e,n,s,r){let a=new lr,o=new xu,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,T,R,C,L,F){let D=C.fog,B=L.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,rt=t.get(_.envMap||G,Z),$=rt&&rt.mapping===Pa?rt.image.height:null,nt=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Kt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let et=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Tt=et!==void 0?et.length:0,At=0;B.morphAttributes.position!==void 0&&(At=1),B.morphAttributes.normal!==void 0&&(At=2),B.morphAttributes.color!==void 0&&(At=3);let re,Zt,lt,V;if(nt){let Ot=_i[nt];re=Ot.vertexShader,Zt=Ot.fragmentShader}else{re=_.vertexShader,Zt=_.fragmentShader;let Ot=o.getVertexShaderStage(_),Yt=o.getFragmentShaderStage(_);o.update(_,Ot,Yt),lt=Ot.id,V=Yt.id}let Q=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),It=L.isInstancedMesh===!0,wt=L.isBatchedMesh===!0,Gt=!!_.map,se=!!_.matcap,it=!!rt,ht=!!_.aoMap,dt=!!_.lightMap,gt=!!_.bumpMap&&_.wireframe===!1,vt=!!_.normalMap,Wt=!!_.displacementMap,zt=!!_.emissiveMap,qt=!!_.metalnessMap,Jt=!!_.roughnessMap,k=_.anisotropy>0,ue=_.clearcoat>0,ee=_.dispersion>0,I=_.retroreflectivity>0,S=_.iridescence>0,H=_.sheen>0,W=_.transmission>0,j=k&&!!_.anisotropyMap,xt=ue&&!!_.clearcoatMap,Mt=ue&&!!_.clearcoatNormalMap,tt=ue&&!!_.clearcoatRoughnessMap,at=S&&!!_.iridescenceMap,bt=S&&!!_.iridescenceThicknessMap,Nt=H&&!!_.sheenColorMap,St=H&&!!_.sheenRoughnessMap,yt=!!_.specularMap,Dt=!!_.specularColorMap,Ht=!!_.specularIntensityMap,$t=W&&!!_.transmissionMap,P=W&&!!_.thicknessMap,J=!!_.gradientMap,X=!!_.alphaMap,ct=_.alphaTest>0,ft=!!_.alphaHash,st=!!_.extensions,Et=Qn;_.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Et=i.toneMapping);let pt={shaderID:nt,shaderType:_.type,shaderName:_.name,vertexShader:re,fragmentShader:Zt,defines:_.defines,customVertexShaderID:lt,customFragmentShaderID:V,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:wt,batchingColor:wt&&L._colorsTexture!==null,instancing:It,instancingColor:It&&L.instanceColor!==null,instancingMorph:It&&L.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:de.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Gt,matcap:se,envMap:it,envMapMode:it&&rt.mapping,envMapCubeUVHeight:$,aoMap:ht,lightMap:dt,bumpMap:gt,normalMap:vt,displacementMap:Wt,emissiveMap:zt,normalMapObjectSpace:vt&&_.normalMapType===df,normalMapTangentSpace:vt&&_.normalMapType===Ba,packedNormalMap:vt&&_.normalMapType===Ba&&J_(_.normalMap.format),metalnessMap:qt,roughnessMap:Jt,anisotropy:k,anisotropyMap:j,clearcoat:ue,clearcoatMap:xt,clearcoatNormalMap:Mt,clearcoatRoughnessMap:tt,dispersion:ee,retroreflection:I,iridescence:S,iridescenceMap:at,iridescenceThicknessMap:bt,sheen:H,sheenColorMap:Nt,sheenRoughnessMap:St,specularMap:yt,specularColorMap:Dt,specularIntensityMap:Ht,transmission:W,transmissionMap:$t,thicknessMap:P,gradientMap:J,opaque:_.transparent===!1&&_.blending===Sr&&_.alphaToCoverage===!1,alphaMap:X,alphaTest:ct,alphaHash:ft,combine:_.combine,mapUv:Gt&&p(_.map.channel),aoMapUv:ht&&p(_.aoMap.channel),lightMapUv:dt&&p(_.lightMap.channel),bumpMapUv:gt&&p(_.bumpMap.channel),normalMapUv:vt&&p(_.normalMap.channel),displacementMapUv:Wt&&p(_.displacementMap.channel),emissiveMapUv:zt&&p(_.emissiveMap.channel),metalnessMapUv:qt&&p(_.metalnessMap.channel),roughnessMapUv:Jt&&p(_.roughnessMap.channel),anisotropyMapUv:j&&p(_.anisotropyMap.channel),clearcoatMapUv:xt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:St&&p(_.sheenRoughnessMap.channel),specularMapUv:yt&&p(_.specularMap.channel),specularColorMapUv:Dt&&p(_.specularColorMap.channel),specularIntensityMapUv:Ht&&p(_.specularIntensityMap.channel),transmissionMapUv:$t&&p(_.transmissionMap.channel),thicknessMapUv:P&&p(_.thicknessMap.channel),alphaMapUv:X&&p(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(vt||k),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(Gt||X),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&vt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:At,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,decodeVideoTexture:Gt&&_.map.isVideoTexture===!0&&de.getTransfer(_.map.colorSpace)===Se,decodeVideoTextureEmissive:zt&&_.emissiveMap.isVideoTexture===!0&&de.getTransfer(_.emissiveMap.colorSpace)===Se,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===_n,flipSided:_.side===xn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:st&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&_.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return pt.vertexUv1s=l.has(1),pt.vertexUv2s=l.has(2),pt.vertexUv3s=l.has(3),l.clear(),pt}function m(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)T.push(R),T.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(g(T,_),b(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function g(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function b(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function E(_){let T=f[_.type],R;if(T){let C=_i[T];R=yn.clone(C.uniforms)}else R=_.uniforms;return R}function y(_,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new Z_(i,T,_,s),c.push(R),h.set(T,R)),R}function v(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function M(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:E,acquireProgram:y,releaseProgram:v,releaseShaderCache:w,programs:c,dispose:M}}function j_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Q_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function $f(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Jf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,x,m,g){let b=i[t];return b===void 0?(b={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},i[t]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=p,b.materialVariant=a(u),b.groupOrder=x,b.renderOrder=u.renderOrder,b.z=m,b.group=g),t++,b}function l(u,f,p,x,m,g,b){b.reversedDepth===!0&&(m=-m);let E=o(u,f,p,x,m,g);p.transmission>0?n.push(E):p.transparent===!0?s.push(E):e.push(E)}function c(u,f,p,x,m,g){let b=o(u,f,p,x,m,g);p.transmission>0?n.unshift(b):p.transparent===!0?s.unshift(b):e.unshift(b)}function h(u,f){e.length>1&&e.sort(u||Q_),n.length>1&&n.sort(f||$f),s.length>1&&s.sort(f||$f)}function d(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function ty(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Jf,i.set(n,[a])):s>=r.length?(a=new Jf,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ey(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new Vt};break;case"SpotLight":e={position:new O,direction:new O,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function ny(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var iy=0;function sy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ry(i){let t=new ey,e=ny(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let s=new O,r=new he,a=new he;function o(c){let h=0,d=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,b=0,E=0,y=0,v=0,w=0,M=0,_=0,T=0,R=0;c.sort(sy);for(let L=0,F=c.length;L<F;L++){let D=c[L],B=D.color,G=D.intensity,Z=D.distance,rt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===as?rt=D.shadow.map.texture:rt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=B.r*G,d+=B.g*G,u+=B.b*G;else if(D.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(D.sh.coefficients[$],G);R++}else if(D.isSunLight){let $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let nt=D.shadow,et=e.get(D);et.shadowIntensity=nt.intensity,et.shadowBias=nt.bias,et.shadowNormalBias=nt.normalBias,et.shadowRadius=nt.radius,et.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),n.sunShadow[p]=et,n.sunShadowMap[p]=rt;let Tt=nt.getViewportCount();for(let At=0;At<Tt;At++)n.sunShadowMatrix[x+At]=nt.getMatrix(At),n.sunShadowCascade[x+At]=nt._cascadeData[At];x+=Tt,p++}n.sun[f]=$,f++}else if(D.isDirectionalLight){let $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let nt=D.shadow,et=e.get(D);et.shadowIntensity=nt.intensity,et.shadowBias=nt.bias,et.shadowNormalBias=nt.normalBias,et.shadowRadius=nt.radius,et.shadowMapSize=nt.mapSize,n.directionalShadow[m]=et,n.directionalShadowMap[m]=rt,n.directionalShadowMatrix[m]=D.shadow.matrix,v++}n.directional[m]=$,m++}else if(D.isSpotLight){let $=t.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(B).multiplyScalar(G),$.distance=Z,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,n.spot[b]=$;let nt=D.shadow;if(D.map&&(n.spotLightMap[_]=D.map,_++,nt.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[b]=nt.matrix,D.castShadow){let et=e.get(D);et.shadowIntensity=nt.intensity,et.shadowBias=nt.bias,et.shadowNormalBias=nt.normalBias,et.shadowRadius=nt.radius,et.shadowMapSize=nt.mapSize,n.spotShadow[b]=et,n.spotShadowMap[b]=rt,M++}b++}else if(D.isRectAreaLight){let $=t.get(D);$.color.copy(B).multiplyScalar(G),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),n.rectArea[E]=$,E++}else if(D.isPointLight){let $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){let nt=D.shadow,et=e.get(D);et.shadowIntensity=nt.intensity,et.shadowBias=nt.bias,et.shadowNormalBias=nt.normalBias,et.shadowRadius=nt.radius,et.shadowMapSize=nt.mapSize,et.shadowCameraNear=nt.camera.near,et.shadowCameraFar=nt.camera.far,n.pointShadow[g]=et,n.pointShadowMap[g]=rt,n.pointShadowMatrix[g]=D.shadow.matrix,w++}n.point[g]=$,g++}else if(D.isHemisphereLight){let $=t.get(D);$.skyColor.copy(D.color).multiplyScalar(G),$.groundColor.copy(D.groundColor).multiplyScalar(G),n.hemi[y]=$,y++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let C=n.hash;(C.sunLength!==f||C.directionalLength!==m||C.pointLength!==g||C.spotLength!==b||C.rectAreaLength!==E||C.hemiLength!==y||C.numSunShadows!==p||C.numDirectionalShadows!==v||C.numPointShadows!==w||C.numSpotShadows!==M||C.numSpotMaps!==_||C.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=b,n.rectArea.length=E,n.point.length=g,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=M,n.spotShadowMap.length=M,n.spotLightMatrix.length=M+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,C.sunLength=f,C.directionalLength=m,C.pointLength=g,C.spotLength=b,C.rectAreaLength=E,C.hemiLength=y,C.numSunShadows=p,C.numDirectionalShadows=v,C.numPointShadows=w,C.numSpotShadows=M,C.numSpotMaps=_,C.numLightProbes=R,n.version=iy++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let b=0,E=c.length;b<E;b++){let y=c[b];if(y.isSunLight){let v=n.sun[d];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(y.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let v=n.rectArea[x];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let v=n.hemi[m];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function Kf(i){let t=new ry(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ay(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Kf(i),t.set(s,[o])):r>=a.length?(o=new Kf(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var oy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ly=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,cy=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],hy=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],jf=new he,za=new O,uu=new O;function uy(i,t,e){let n=new dr,s=new ot,r=new ot,a=new Fe,o=new gr,l=new tl,c={},h=e.maxTextureSize,d={[ns]:xn,[xn]:ns,[_n]:_n},u=new we({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:oy,fragmentShader:ly}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new be;p.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new xe(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vs;let g=this.type;this.render=function(w,M,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===qd&&(Kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=vs);let T=i.getRenderTarget(),R=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Xe),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let F=g!==this.type;F&&M.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(B=>B.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,B=w.length;D<B;D++){let G=w[D],Z=G.shadow;if(Z===void 0){Kt("WebGLShadowMap:",G,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let rt=Z.getFrameExtents();s.multiply(rt),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,Z.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=$,Z.map===null||F===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Mr){if(G.isPointLight){Kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new ke(s.x,s.y,{format:as,type:He,minFilter:sn,magFilter:sn,generateMipmaps:!1}),Z.map.texture.name=G.name+".shadowMap",Z.map.depthTexture=new fi(s.x,s.y,ei),Z.map.depthTexture.name=G.name+".shadowMapDepth",Z.map.depthTexture.format=ci,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Ne,Z.map.depthTexture.magFilter=Ne}else G.isPointLight?(Z.map=new sc(s.x),Z.map.depthTexture=new Yo(s.x,ti)):(Z.map=new ke(s.x,s.y),Z.map.depthTexture=new fi(s.x,s.y,ti)),Z.map.depthTexture.name=G.name+".shadowMap",Z.map.depthTexture.format=ci,this.type===vs?(Z.map.depthTexture.compareFunction=$?ec:tc,Z.map.depthTexture.minFilter=sn,Z.map.depthTexture.magFilter=sn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Ne,Z.map.depthTexture.magFilter=Ne);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let nt=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();G.isPointLight!==!0&&Z.updateMatrices(G,_);for(let et=0;et<nt;et++){let Tt=Z.getCamera(et);if(G.isPointLight){let At=Z.camera,re=Z.matrix,Zt=G.distance||At.far;Zt!==At.far&&(At.far=Zt,At.updateProjectionMatrix()),za.setFromMatrixPosition(G.matrixWorld),At.position.copy(za),uu.copy(At.position),uu.add(cy[et]),At.up.copy(hy[et]),At.lookAt(uu),At.updateMatrixWorld(),re.makeTranslation(-za.x,-za.y,-za.z),jf.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(jf,At.coordinateSystem,At.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,et),i.clear();else{et===0&&(i.setRenderTarget(Z.map),i.clear());let At=Z.getViewport(et);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),L.viewport(a)}n=Z.getFrustum(et),y(M,_,Tt,G,this.type)}Z.isPointLightShadow!==!0&&this.type===Mr&&b(Z,_),Z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(T,R,C)};function b(w,M){let _=t.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new ke(s.x,s.y,{format:as,type:He}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(M,null,_,u,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(M,null,_,f,x,null)}function E(w,M,_,T){let R=null,C=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)R=C;else if(R=_.isPointLight===!0?l:o,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){let L=R.uuid,F=M.uuid,D=c[L];D===void 0&&(D={},c[L]=D);let B=D[F];B===void 0&&(B=R.clone(),D[F]=B,M.addEventListener("dispose",v)),R=B}if(R.visible=M.visible,R.wireframe=M.wireframe,T===Mr?R.side=M.shadowSide!==null?M.shadowSide:M.side:R.side=M.shadowSide!==null?M.shadowSide:d[M.side],R.alphaMap=M.alphaMap,R.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,R.map=M.map,R.clipShadows=M.clipShadows,R.clippingPlanes=M.clippingPlanes,R.clipIntersection=M.clipIntersection,R.displacementMap=M.displacementMap,R.displacementScale=M.displacementScale,R.displacementBias=M.displacementBias,R.wireframeLinewidth=M.wireframeLinewidth,R.linewidth=M.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=i.properties.get(R);L.light=_}return R}function y(w,M,_,T,R){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===Mr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let F=t.update(w),D=w.material;if(Array.isArray(D)){let B=F.groups;for(let G=0,Z=B.length;G<Z;G++){let rt=B[G],$=D[rt.materialIndex];if($&&$.visible){let nt=E(w,$,T,R);w.onBeforeShadow(i,w,M,_,F,nt,rt),i.renderBufferDirect(_,null,F,nt,w,rt),w.onAfterShadow(i,w,M,_,F,nt,rt)}}}else if(D.visible){let B=E(w,D,T,R);w.onBeforeShadow(i,w,M,_,F,B,null),i.renderBufferDirect(_,null,F,B,w,null),w.onAfterShadow(i,w,M,_,F,B,null)}}let L=w.children;for(let F=0,D=L.length;F<D;F++)y(L[F],M,_,T,R)}function v(w){w.target.removeEventListener("dispose",v);for(let _ in c){let T=c[_],R=w.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function dy(i,t){function e(){let P=!1,J=new Fe,X=null,ct=new Fe(0,0,0,0);return{setMask:function(ft){X!==ft&&!P&&(i.colorMask(ft,ft,ft,ft),X=ft)},setLocked:function(ft){P=ft},setClear:function(ft,st,Et,pt,Ot){Ot===!0&&(ft*=pt,st*=pt,Et*=pt),J.set(ft,st,Et,pt),ct.equals(J)===!1&&(i.clearColor(ft,st,Et,pt),ct.copy(J))},reset:function(){P=!1,X=null,ct.set(-1,0,0,0)}}}function n(){let P=!1,J=!1,X=null,ct=null,ft=null;return{setReversed:function(st){if(J!==st){let Et=t.get("EXT_clip_control");st?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),J=st;let pt=ft;ft=null,this.setClear(pt)}},getReversed:function(){return J},setTest:function(st){st?Q(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(st){X!==st&&!P&&(i.depthMask(st),X=st)},setFunc:function(st){if(J&&(st=wf[st]),ct!==st){switch(st){case Lo:i.depthFunc(i.NEVER);break;case Uo:i.depthFunc(i.ALWAYS);break;case No:i.depthFunc(i.LESS);break;case sr:i.depthFunc(i.LEQUAL);break;case Fo:i.depthFunc(i.EQUAL);break;case Oo:i.depthFunc(i.GEQUAL);break;case Bo:i.depthFunc(i.GREATER);break;case ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=st}},setLocked:function(st){P=st},setClear:function(st){ft!==st&&(ft=st,J&&(st=1-st),i.clearDepth(st))},reset:function(){P=!1,X=null,ct=null,ft=null,J=!1}}}function s(){let P=!1,J=null,X=null,ct=null,ft=null,st=null,Et=null,pt=null,Ot=null;return{setTest:function(Yt){P||(Yt?Q(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(Yt){J!==Yt&&!P&&(i.stencilMask(Yt),J=Yt)},setFunc:function(Yt,qe,Cn){(X!==Yt||ct!==qe||ft!==Cn)&&(i.stencilFunc(Yt,qe,Cn),X=Yt,ct=qe,ft=Cn)},setOp:function(Yt,qe,Cn){(st!==Yt||Et!==qe||pt!==Cn)&&(i.stencilOp(Yt,qe,Cn),st=Yt,Et=qe,pt=Cn)},setLocked:function(Yt){P=Yt},setClear:function(Yt){Ot!==Yt&&(i.clearStencil(Yt),Ot=Yt)},reset:function(){P=!1,J=null,X=null,ct=null,ft=null,st=null,Et=null,pt=null,Ot=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,m=!1,g=null,b=null,E=null,y=null,v=null,w=null,M=null,_=new Vt(0,0,0),T=0,R=!1,C=null,L=null,F=null,D=null,B=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,rt=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec($)[1]),Z=rt>=1):$.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Z=rt>=2);let nt=null,et={},Tt=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),re=new Fe().fromArray(Tt),Zt=new Fe().fromArray(At);function lt(P,J,X,ct){let ft=new Uint8Array(4),st=i.createTexture();i.bindTexture(P,st),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<X;Et++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(J+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return st}let V={};V[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(sr),gt(!1),vt(Ah),Q(i.CULL_FACE),ht(Xe);function Q(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function _t(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function It(P,J){return u[P]!==J?(i.bindFramebuffer(P,J),u[P]=J,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=J),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=J),!0):!1}function wt(P,J){let X=p,ct=!1;if(P){X=f.get(J),X===void 0&&(X=[],f.set(J,X));let ft=P.textures;if(X.length!==ft.length||X[0]!==i.COLOR_ATTACHMENT0){for(let st=0,Et=ft.length;st<Et;st++)X[st]=i.COLOR_ATTACHMENT0+st;X.length=ft.length,ct=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,ct=!0);ct&&i.drawBuffers(X)}function Gt(P){return x!==P?(i.useProgram(P),x=P,!0):!1}let se={[Gn]:i.FUNC_ADD,[Yd]:i.FUNC_SUBTRACT,[Zd]:i.FUNC_REVERSE_SUBTRACT};se[$d]=i.MIN,se[Jd]=i.MAX;let it={[Ss]:i.ZERO,[Kd]:i.ONE,[jd]:i.SRC_COLOR,[Ph]:i.SRC_ALPHA,[nf]:i.SRC_ALPHA_SATURATE,[Ra]:i.DST_COLOR,[Aa]:i.DST_ALPHA,[Qd]:i.ONE_MINUS_SRC_COLOR,[Ih]:i.ONE_MINUS_SRC_ALPHA,[ef]:i.ONE_MINUS_DST_COLOR,[tf]:i.ONE_MINUS_DST_ALPHA,[sf]:i.CONSTANT_COLOR,[rf]:i.ONE_MINUS_CONSTANT_COLOR,[af]:i.CONSTANT_ALPHA,[of]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(P,J,X,ct,ft,st,Et,pt,Ot,Yt){if(P===Xe){m===!0&&(_t(i.BLEND),m=!1);return}if(m===!1&&(Q(i.BLEND),m=!0),P!==pl){if(P!==g||Yt!==R){if((b!==Gn||v!==Gn)&&(i.blendEquation(i.FUNC_ADD),b=Gn,v=Gn),Yt)switch(P){case Sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ms:i.blendFunc(i.ONE,i.ONE);break;case Rh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ch:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:jt("WebGLState: Invalid blending: ",P);break}else switch(P){case Sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Rh:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ch:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",P);break}E=null,y=null,w=null,M=null,_.set(0,0,0),T=0,g=P,R=Yt}return}ft=ft||J,st=st||X,Et=Et||ct,(J!==b||ft!==v)&&(i.blendEquationSeparate(se[J],se[ft]),b=J,v=ft),(X!==E||ct!==y||st!==w||Et!==M)&&(i.blendFuncSeparate(it[X],it[ct],it[st],it[Et]),E=X,y=ct,w=st,M=Et),(pt.equals(_)===!1||Ot!==T)&&(i.blendColor(pt.r,pt.g,pt.b,Ot),_.copy(pt),T=Ot),g=P,R=!1}function dt(P,J){P.side===_n?_t(i.CULL_FACE):Q(i.CULL_FACE);let X=P.side===xn;J&&(X=!X),gt(X),P.blending===Sr&&P.transparent===!1?ht(Xe):ht(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let ct=P.stencilWrite;o.setTest(ct),ct&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),zt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(P){C!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),C=P)}function vt(P){P!==Wd?(Q(i.CULL_FACE),P!==L&&(P===Ah?i.cullFace(i.BACK):P===Xd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),L=P}function Wt(P){P!==F&&(Z&&i.lineWidth(P),F=P)}function zt(P,J,X){P?(Q(i.POLYGON_OFFSET_FILL),(D!==J||B!==X)&&(D=J,B=X,a.getReversed()&&(J=-J),i.polygonOffset(J,X))):_t(i.POLYGON_OFFSET_FILL)}function qt(P){P?Q(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function Jt(P){P===void 0&&(P=i.TEXTURE0+G-1),nt!==P&&(i.activeTexture(P),nt=P)}function k(P,J,X){X===void 0&&(nt===null?X=i.TEXTURE0+G-1:X=nt);let ct=et[X];ct===void 0&&(ct={type:void 0,texture:void 0},et[X]=ct),(ct.type!==P||ct.texture!==J)&&(nt!==X&&(i.activeTexture(X),nt=X),i.bindTexture(P,J||V[P]),ct.type=P,ct.texture=J)}function ue(){let P=et[nt];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ee(){try{i.compressedTexImage2D(...arguments)}catch(P){jt("WebGLState:",P)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(P){jt("WebGLState:",P)}}function S(){try{i.texSubImage2D(...arguments)}catch(P){jt("WebGLState:",P)}}function H(){try{i.texSubImage3D(...arguments)}catch(P){jt("WebGLState:",P)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(P){jt("WebGLState:",P)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(P){jt("WebGLState:",P)}}function xt(){try{i.texStorage2D(...arguments)}catch(P){jt("WebGLState:",P)}}function Mt(){try{i.texStorage3D(...arguments)}catch(P){jt("WebGLState:",P)}}function tt(){try{i.texImage2D(...arguments)}catch(P){jt("WebGLState:",P)}}function at(){try{i.texImage3D(...arguments)}catch(P){jt("WebGLState:",P)}}function bt(P){return d[P]!==void 0?d[P]:i.getParameter(P)}function Nt(P,J){d[P]!==J&&(i.pixelStorei(P,J),d[P]=J)}function St(P){re.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),re.copy(P))}function yt(P){Zt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Zt.copy(P))}function Dt(P,J){let X=c.get(J);X===void 0&&(X=new WeakMap,c.set(J,X));let ct=X.get(P);ct===void 0&&(ct=i.getUniformBlockIndex(J,P.name),X.set(P,ct))}function Ht(P,J){let ct=c.get(J).get(P);l.get(J)!==ct&&(i.uniformBlockBinding(J,ct,P.__bindingPointIndex),l.set(J,ct))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},nt=null,et={},u={},f=new WeakMap,p=[],x=null,m=!1,g=null,b=null,E=null,y=null,v=null,w=null,M=null,_=new Vt(0,0,0),T=0,R=!1,C=null,L=null,F=null,D=null,B=null,re.set(0,0,i.canvas.width,i.canvas.height),Zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:_t,bindFramebuffer:It,drawBuffers:wt,useProgram:Gt,setBlending:ht,setMaterial:dt,setFlipSided:gt,setCullFace:vt,setLineWidth:Wt,setPolygonOffset:zt,setScissorTest:qt,activeTexture:Jt,bindTexture:k,unbindTexture:ue,compressedTexImage2D:ee,compressedTexImage3D:I,texImage2D:tt,texImage3D:at,pixelStorei:Nt,getParameter:bt,updateUBOMapping:Dt,uniformBlockBinding:Ht,texStorage2D:xt,texStorage3D:Mt,texSubImage2D:S,texSubImage3D:H,compressedTexSubImage2D:W,compressedTexSubImage3D:j,scissor:St,viewport:yt,reset:$t}}function fy(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,S){return p?new OffscreenCanvas(I,S):ta("canvas")}function m(I,S,H){let W=1,j=ee(I);if((j.width>H||j.height>H)&&(W=H/Math.max(j.width,j.height)),W<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let xt=Math.floor(W*j.width),Mt=Math.floor(W*j.height);u===void 0&&(u=x(xt,Mt));let tt=S?x(xt,Mt):u;return tt.width=xt,tt.height=Mt,tt.getContext("2d").drawImage(I,0,0,xt,Mt),Kt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+xt+"x"+Mt+")."),tt}else return"data"in I&&Kt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),I;return I}function g(I){return I.generateMipmaps}function b(I){i.generateMipmap(I)}function E(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(I,S,H,W,j,xt=!1){if(I!==null){if(i[I]!==void 0)return i[I];Kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Mt;W&&(Mt=t.get("EXT_texture_norm16"),Mt||Kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=S;if(S===i.RED&&(H===i.FLOAT&&(tt=i.R32F),H===i.HALF_FLOAT&&(tt=i.R16F),H===i.UNSIGNED_BYTE&&(tt=i.R8),H===i.UNSIGNED_SHORT&&Mt&&(tt=Mt.R16_EXT),H===i.SHORT&&Mt&&(tt=Mt.R16_SNORM_EXT)),S===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.R8UI),H===i.UNSIGNED_SHORT&&(tt=i.R16UI),H===i.UNSIGNED_INT&&(tt=i.R32UI),H===i.BYTE&&(tt=i.R8I),H===i.SHORT&&(tt=i.R16I),H===i.INT&&(tt=i.R32I)),S===i.RG&&(H===i.FLOAT&&(tt=i.RG32F),H===i.HALF_FLOAT&&(tt=i.RG16F),H===i.UNSIGNED_BYTE&&(tt=i.RG8),H===i.UNSIGNED_SHORT&&Mt&&(tt=Mt.RG16_EXT),H===i.SHORT&&Mt&&(tt=Mt.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RG8UI),H===i.UNSIGNED_SHORT&&(tt=i.RG16UI),H===i.UNSIGNED_INT&&(tt=i.RG32UI),H===i.BYTE&&(tt=i.RG8I),H===i.SHORT&&(tt=i.RG16I),H===i.INT&&(tt=i.RG32I)),S===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),H===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),H===i.UNSIGNED_INT&&(tt=i.RGB32UI),H===i.BYTE&&(tt=i.RGB8I),H===i.SHORT&&(tt=i.RGB16I),H===i.INT&&(tt=i.RGB32I)),S===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),H===i.UNSIGNED_INT&&(tt=i.RGBA32UI),H===i.BYTE&&(tt=i.RGBA8I),H===i.SHORT&&(tt=i.RGBA16I),H===i.INT&&(tt=i.RGBA32I)),S===i.RGB&&(H===i.UNSIGNED_SHORT&&Mt&&(tt=Mt.RGB16_EXT),H===i.SHORT&&Mt&&(tt=Mt.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),S===i.RGBA){let at=xt?Qr:de.getTransfer(j);H===i.FLOAT&&(tt=i.RGBA32F),H===i.HALF_FLOAT&&(tt=i.RGBA16F),H===i.UNSIGNED_BYTE&&(tt=at===Se?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&Mt&&(tt=Mt.RGBA16_EXT),H===i.SHORT&&Mt&&(tt=Mt.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function v(I,S){let H;return I?S===null||S===ti||S===rs?H=i.DEPTH24_STENCIL8:S===ei?H=i.DEPTH32F_STENCIL8:S===br&&(H=i.DEPTH24_STENCIL8,Kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ti||S===rs?H=i.DEPTH_COMPONENT24:S===ei?H=i.DEPTH_COMPONENT32F:S===br&&(H=i.DEPTH_COMPONENT16),H}function w(I,S){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ne&&I.minFilter!==sn?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function M(I){let S=I.target;S.removeEventListener("dispose",M),T(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&d.delete(S)}function _(I){let S=I.target;S.removeEventListener("dispose",_),C(S)}function T(I){let S=n.get(I);if(S.__webglInit===void 0)return;let H=I.source,W=f.get(H);if(W){let j=W[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&R(I),Object.keys(W).length===0&&f.delete(H)}n.remove(I)}function R(I){let S=n.get(I);i.deleteTexture(S.__webglTexture);let H=I.source,W=f.get(H);delete W[S.__cacheKey],a.memory.textures--}function C(I){let S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(S.__webglFramebuffer[W]))for(let j=0;j<S.__webglFramebuffer[W].length;j++)i.deleteFramebuffer(S.__webglFramebuffer[W][j]);else i.deleteFramebuffer(S.__webglFramebuffer[W]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[W])}else{if(Array.isArray(S.__webglFramebuffer))for(let W=0;W<S.__webglFramebuffer.length;W++)i.deleteFramebuffer(S.__webglFramebuffer[W]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let W=0;W<S.__webglColorRenderbuffer.length;W++)S.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[W]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let H=I.textures;for(let W=0,j=H.length;W<j;W++){let xt=n.get(H[W]);xt.__webglTexture&&(i.deleteTexture(xt.__webglTexture),a.memory.textures--),n.remove(H[W])}n.remove(I)}let L=0;function F(){L=0}function D(){return L}function B(I){L=I}function G(){let I=L;return I>=s.maxTextures&&Kt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,I}function Z(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function rt(I,S){let H=n.get(I);if(I.isVideoTexture&&k(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&H.__version!==I.version){let W=I.image;if(W===null)Kt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Kt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(H,I,S);return}}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+S)}function $(I,S){let H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){_t(H,I,S);return}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+S)}function nt(I,S){let H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){_t(H,I,S);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+S)}function et(I,S){let H=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&H.__version!==I.version){It(H,I,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+S)}let Tt={[wn]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[zo]:i.MIRRORED_REPEAT},At={[Ne]:i.NEAREST,[hf]:i.NEAREST_MIPMAP_NEAREST,[Ia]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[xl]:i.LINEAR_MIPMAP_NEAREST,[ss]:i.LINEAR_MIPMAP_LINEAR},re={[pf]:i.NEVER,[yf]:i.ALWAYS,[mf]:i.LESS,[tc]:i.LEQUAL,[gf]:i.EQUAL,[ec]:i.GEQUAL,[xf]:i.GREATER,[_f]:i.NOTEQUAL};function Zt(I,S){if(S.type===ei&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===sn||S.magFilter===xl||S.magFilter===Ia||S.magFilter===ss||S.minFilter===sn||S.minFilter===xl||S.minFilter===Ia||S.minFilter===ss)&&Kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Tt[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Tt[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Tt[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,At[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,At[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,re[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ne||S.minFilter!==Ia&&S.minFilter!==ss||S.type===ei&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function lt(I,S){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",M));let W=S.source,j=f.get(W);j===void 0&&(j={},f.set(W,j));let xt=Z(S);if(xt!==I.__cacheKey){j[xt]===void 0&&(j[xt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),j[xt].usedTimes++;let Mt=j[I.__cacheKey];Mt!==void 0&&(j[I.__cacheKey].usedTimes--,Mt.usedTimes===0&&R(S)),I.__cacheKey=xt,I.__webglTexture=j[xt].texture}return H}function V(I,S,H){return Math.floor(Math.floor(I/H)/S)}function Q(I,S,H,W){let xt=I.updateRanges;if(xt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,H,W,S.data);else{xt.sort((Nt,St)=>Nt.start-St.start);let Mt=0;for(let Nt=1;Nt<xt.length;Nt++){let St=xt[Mt],yt=xt[Nt],Dt=St.start+St.count,Ht=V(yt.start,S.width,4),$t=V(St.start,S.width,4);yt.start<=Dt+1&&Ht===$t&&V(yt.start+yt.count-1,S.width,4)===Ht?St.count=Math.max(St.count,yt.start+yt.count-St.start):(++Mt,xt[Mt]=yt)}xt.length=Mt+1;let tt=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),bt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let Nt=0,St=xt.length;Nt<St;Nt++){let yt=xt[Nt],Dt=Math.floor(yt.start/4),Ht=Math.ceil(yt.count/4),$t=Dt%S.width,P=Math.floor(Dt/S.width),J=Ht,X=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(i.UNPACK_SKIP_ROWS,P),e.texSubImage2D(i.TEXTURE_2D,0,$t,P,J,X,H,W,S.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,tt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function _t(I,S,H){let W=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(W=i.TEXTURE_3D);let j=lt(I,S),xt=S.source;e.bindTexture(W,I.__webglTexture,i.TEXTURE0+H);let Mt=n.get(xt);if(xt.version!==Mt.__version||j===!0){if(e.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let X=de.getPrimaries(de.workingColorSpace),ct=S.colorSpace===Ni?null:de.getPrimaries(S.colorSpace),ft=S.colorSpace===Ni||X===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft)}e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let at=m(S.image,!1,s.maxTextureSize);at=ue(S,at);let bt=r.convert(S.format,S.colorSpace),Nt=r.convert(S.type),St=y(S.internalFormat,bt,Nt,S.normalized,S.colorSpace,S.isVideoTexture);Zt(W,S);let yt,Dt=S.mipmaps,Ht=S.isVideoTexture!==!0,$t=Mt.__version===void 0||j===!0,P=xt.dataReady,J=w(S,at);if(S.isDepthTexture)St=v(S.format===gi,S.type),$t&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,St,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,St,at.width,at.height,0,bt,Nt,null));else if(S.isDataTexture)if(Dt.length>0){Ht&&$t&&e.texStorage2D(i.TEXTURE_2D,J,St,Dt[0].width,Dt[0].height);for(let X=0,ct=Dt.length;X<ct;X++)yt=Dt[X],Ht?P&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,yt.width,yt.height,bt,Nt,yt.data):e.texImage2D(i.TEXTURE_2D,X,St,yt.width,yt.height,0,bt,Nt,yt.data);S.generateMipmaps=!1}else Ht?($t&&e.texStorage2D(i.TEXTURE_2D,J,St,at.width,at.height),P&&Q(S,at,bt,Nt)):e.texImage2D(i.TEXTURE_2D,0,St,at.width,at.height,0,bt,Nt,at.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ht&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,J,St,Dt[0].width,Dt[0].height,at.depth);for(let X=0,ct=Dt.length;X<ct;X++)if(yt=Dt[X],S.format!==Tn)if(bt!==null)if(Ht){if(P)if(S.layerUpdates.size>0){let ft=tu(yt.width,yt.height,S.format,S.type);for(let st of S.layerUpdates){let Et=yt.data.subarray(st*ft/yt.data.BYTES_PER_ELEMENT,(st+1)*ft/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,st,yt.width,yt.height,1,bt,Et)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,yt.width,yt.height,at.depth,bt,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,St,yt.width,yt.height,at.depth,0,yt.data,0,0);else Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,yt.width,yt.height,at.depth,bt,Nt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,St,yt.width,yt.height,at.depth,0,bt,Nt,yt.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Ht&&$t&&e.texStorage2D(i.TEXTURE_2D,J,St,Dt[0].width,Dt[0].height);for(let X=0,ct=Dt.length;X<ct;X++)yt=Dt[X],S.format!==Tn?bt!==null?Ht?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,yt.width,yt.height,bt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,St,yt.width,yt.height,0,yt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?P&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,yt.width,yt.height,bt,Nt,yt.data):e.texImage2D(i.TEXTURE_2D,X,St,yt.width,yt.height,0,bt,Nt,yt.data)}else if(S.isDataArrayTexture)if(Ht){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,J,St,at.width,at.height,at.depth),P)if(S.layerUpdates.size>0){let X=tu(at.width,at.height,S.format,S.type);for(let ct of S.layerUpdates){let ft=at.data.subarray(ct*X/at.data.BYTES_PER_ELEMENT,(ct+1)*X/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,at.width,at.height,1,bt,Nt,ft)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,bt,Nt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,at.width,at.height,at.depth,0,bt,Nt,at.data);else if(S.isData3DTexture)Ht?($t&&e.texStorage3D(i.TEXTURE_3D,J,St,at.width,at.height,at.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,bt,Nt,at.data)):e.texImage3D(i.TEXTURE_3D,0,St,at.width,at.height,at.depth,0,bt,Nt,at.data);else if(S.isFramebufferTexture){if($t)if(Ht)e.texStorage2D(i.TEXTURE_2D,J,St,at.width,at.height);else{let X=at.width,ct=at.height;for(let ft=0;ft<J;ft++)e.texImage2D(i.TEXTURE_2D,ft,St,X,ct,0,bt,Nt,null),X>>=1,ct>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let X=i.canvas;if(X.hasAttribute("layoutsubtree")||X.setAttribute("layoutsubtree","true"),at.parentNode!==X){X.appendChild(at),d.add(S),X.onpaint=ct=>{let ft=ct.changedElements;for(let st of d)ft.includes(st.image)&&(st.needsUpdate=!0)},X.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{let ft=i.RGBA,st=i.RGBA,Et=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ft,st,Et,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(Ht&&$t){let X=ee(Dt[0]);e.texStorage2D(i.TEXTURE_2D,J,St,X.width,X.height)}for(let X=0,ct=Dt.length;X<ct;X++)yt=Dt[X],Ht?P&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,bt,Nt,yt):e.texImage2D(i.TEXTURE_2D,X,St,bt,Nt,yt);S.generateMipmaps=!1}else if(Ht){if($t){let X=ee(at);e.texStorage2D(i.TEXTURE_2D,J,St,X.width,X.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Nt,at)}else e.texImage2D(i.TEXTURE_2D,0,St,bt,Nt,at);g(S)&&b(W),Mt.__version=xt.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function It(I,S,H){if(S.image.length!==6)return;let W=lt(I,S),j=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+H);let xt=n.get(j);if(j.version!==xt.__version||W===!0){e.activeTexture(i.TEXTURE0+H);let Mt=de.getPrimaries(de.workingColorSpace),tt=S.colorSpace===Ni?null:de.getPrimaries(S.colorSpace),at=S.colorSpace===Ni||Mt===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let bt=S.isCompressedTexture||S.image[0].isCompressedTexture,Nt=S.image[0]&&S.image[0].isDataTexture,St=[];for(let st=0;st<6;st++)!bt&&!Nt?St[st]=m(S.image[st],!0,s.maxCubemapSize):St[st]=Nt?S.image[st].image:S.image[st],St[st]=ue(S,St[st]);let yt=St[0],Dt=r.convert(S.format,S.colorSpace),Ht=r.convert(S.type),$t=y(S.internalFormat,Dt,Ht,S.normalized,S.colorSpace),P=S.isVideoTexture!==!0,J=xt.__version===void 0||W===!0,X=j.dataReady,ct=w(S,yt);Zt(i.TEXTURE_CUBE_MAP,S);let ft;if(bt){P&&J&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,$t,yt.width,yt.height);for(let st=0;st<6;st++){ft=St[st].mipmaps;for(let Et=0;Et<ft.length;Et++){let pt=ft[Et];S.format!==Tn?Dt!==null?P?X&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et,0,0,pt.width,pt.height,Dt,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et,$t,pt.width,pt.height,0,pt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et,0,0,pt.width,pt.height,Dt,Ht,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et,$t,pt.width,pt.height,0,Dt,Ht,pt.data)}}}else{if(ft=S.mipmaps,P&&J){ft.length>0&&ct++;let st=ee(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,$t,st.width,st.height)}for(let st=0;st<6;st++)if(Nt){P?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,St[st].width,St[st].height,Dt,Ht,St[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,$t,St[st].width,St[st].height,0,Dt,Ht,St[st].data);for(let Et=0;Et<ft.length;Et++){let Ot=ft[Et].image[st].image;P?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et+1,0,0,Ot.width,Ot.height,Dt,Ht,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et+1,$t,Ot.width,Ot.height,0,Dt,Ht,Ot.data)}}else{P?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Dt,Ht,St[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,$t,Dt,Ht,St[st]);for(let Et=0;Et<ft.length;Et++){let pt=ft[Et];P?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et+1,0,0,Dt,Ht,pt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et+1,$t,Dt,Ht,pt.image[st])}}}g(S)&&b(i.TEXTURE_CUBE_MAP),xt.__version=j.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function wt(I,S,H,W,j,xt){let Mt=r.convert(H.format,H.colorSpace),tt=r.convert(H.type),at=y(H.internalFormat,Mt,tt,H.normalized,H.colorSpace),bt=n.get(S),Nt=n.get(H);if(Nt.__renderTarget=S,!bt.__hasExternalTextures){let St=Math.max(1,S.width>>xt),yt=Math.max(1,S.height>>xt);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,xt,at,St,yt,S.depth,0,Mt,tt,null):e.texImage2D(j,xt,at,St,yt,0,Mt,tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),Jt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,j,Nt.__webglTexture,0,qt(S)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,j,Nt.__webglTexture,xt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(I,S,H){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){let W=S.depthTexture,j=W&&W.isDepthTexture?W.type:null,xt=v(S.stencilBuffer,j),Mt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Jt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(S),xt,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(S),xt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,xt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,I)}else{let W=S.textures;for(let j=0;j<W.length;j++){let xt=W[j],Mt=r.convert(xt.format,xt.colorSpace),tt=r.convert(xt.type),at=y(xt.internalFormat,Mt,tt,xt.normalized,xt.colorSpace);Jt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(S),at,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(S),at,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,at,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function se(I,S,H){let W=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(S.depthTexture);if(j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W){if(j.__webglInit===void 0&&(j.__webglInit=!0,S.depthTexture.addEventListener("dispose",M)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Zt(i.TEXTURE_CUBE_MAP,S.depthTexture);let bt=r.convert(S.depthTexture.format),Nt=r.convert(S.depthTexture.type),St;S.depthTexture.format===ci?St=i.DEPTH_COMPONENT24:S.depthTexture.format===gi&&(St=i.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,St,S.width,S.height,0,bt,Nt,null)}}else rt(S.depthTexture,0);let xt=j.__webglTexture,Mt=qt(S),tt=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,at=S.depthTexture.format===gi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===ci)Jt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,tt,xt,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,at,tt,xt,0);else if(S.depthTexture.format===gi)Jt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,tt,xt,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,at,tt,xt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(I){let S=n.get(I),H=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let W=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),W){let j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,W.removeEventListener("dispose",j)};W.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=W}if(I.depthTexture&&!S.__autoAllocateDepthBuffer)if(H)for(let W=0;W<6;W++)se(S.__webglFramebuffer[W],I,W);else{let W=I.texture.mipmaps;W&&W.length>0?se(S.__webglFramebuffer[0],I,0):se(S.__webglFramebuffer,I,0)}else if(H){S.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[W]),S.__webglDepthbuffer[W]===void 0)S.__webglDepthbuffer[W]=i.createRenderbuffer(),Gt(S.__webglDepthbuffer[W],I,!1);else{let j=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=S.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,xt)}}else{let W=I.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Gt(S.__webglDepthbuffer,I,!1);else{let j=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,xt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(I,S,H){let W=n.get(I);S!==void 0&&wt(W.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&it(I)}function dt(I){let S=I.texture,H=n.get(I),W=n.get(S);I.addEventListener("dispose",_);let j=I.textures,xt=I.isWebGLCubeRenderTarget===!0,Mt=j.length>1;if(Mt||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=S.version,a.memory.textures++),xt){H.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[tt]=[];for(let at=0;at<S.mipmaps.length;at++)H.__webglFramebuffer[tt][at]=i.createFramebuffer()}else H.__webglFramebuffer[tt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let tt=0;tt<S.mipmaps.length;tt++)H.__webglFramebuffer[tt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let tt=0,at=j.length;tt<at;tt++){let bt=n.get(j[tt]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&Jt(I)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let tt=0;tt<j.length;tt++){let at=j[tt];H.__webglColorRenderbuffer[tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[tt]);let bt=r.convert(at.format,at.colorSpace),Nt=r.convert(at.type),St=y(at.internalFormat,bt,Nt,at.normalized,at.colorSpace,I.isXRRenderTarget===!0),yt=qt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,St,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,H.__webglColorRenderbuffer[tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Gt(H.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xt){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Zt(i.TEXTURE_CUBE_MAP,S);for(let tt=0;tt<6;tt++)if(S.mipmaps&&S.mipmaps.length>0)for(let at=0;at<S.mipmaps.length;at++)wt(H.__webglFramebuffer[tt][at],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at);else wt(H.__webglFramebuffer[tt],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);g(S)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let tt=0,at=j.length;tt<at;tt++){let bt=j[tt],Nt=n.get(bt),St=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(St=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,Nt.__webglTexture),Zt(St,bt),wt(H.__webglFramebuffer,I,bt,i.COLOR_ATTACHMENT0+tt,St,0),g(bt)&&b(St)}e.unbindTexture()}else{let tt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(tt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,W.__webglTexture),Zt(tt,S),S.mipmaps&&S.mipmaps.length>0)for(let at=0;at<S.mipmaps.length;at++)wt(H.__webglFramebuffer[at],I,S,i.COLOR_ATTACHMENT0,tt,at);else wt(H.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,tt,0);g(S)&&b(tt),e.unbindTexture()}I.depthBuffer&&it(I)}function gt(I){let S=I.textures;for(let H=0,W=S.length;H<W;H++){let j=S[H];if(g(j)){let xt=E(I),Mt=n.get(j).__webglTexture;e.bindTexture(xt,Mt),b(xt),e.unbindTexture()}}}let vt=[],Wt=[];function zt(I){if(I.samples>0){if(Jt(I)===!1){let S=I.textures,H=I.width,W=I.height,j=i.COLOR_BUFFER_BIT,xt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(I),tt=S.length>1;if(tt)for(let bt=0;bt<S.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);let at=I.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let bt=0;bt<S.length;bt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[bt]);let Nt=n.get(S[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Nt,0)}i.blitFramebuffer(0,0,H,W,0,0,H,W,j,i.NEAREST),l===!0&&(vt.length=0,Wt.length=0,vt.push(i.COLOR_ATTACHMENT0+bt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(vt.push(xt),Wt.push(xt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Wt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,vt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),tt)for(let bt=0;bt<S.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[bt]);let Nt=n.get(S[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,Nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function qt(I){return Math.min(s.maxSamples,I.samples)}function Jt(I){let S=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function k(I){let S=a.render.frame;h.get(I)!==S&&(h.set(I,S),I.update())}function ue(I,S){let H=I.colorSpace,W=I.format,j=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==jr&&H!==Ni&&(de.getTransfer(H)===Se?(W!==Tn||j!==nn)&&Kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",H)),S}function ee(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=F,this.getTextureUnits=D,this.setTextureUnits=B,this.setTexture2D=rt,this.setTexture2DArray=$,this.setTexture3D=nt,this.setTextureCube=et,this.rebindTextures=ht,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function py(i,t){function e(n,s=Ni){let r,a=de.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===yl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===zh)return i.BYTE;if(n===Hh)return i.SHORT;if(n===br)return i.UNSIGNED_SHORT;if(n===_l)return i.INT;if(n===ti)return i.UNSIGNED_INT;if(n===ei)return i.FLOAT;if(n===He)return i.HALF_FLOAT;if(n===Wh)return i.ALPHA;if(n===Xh)return i.RGB;if(n===Tn)return i.RGBA;if(n===ci)return i.DEPTH_COMPONENT;if(n===gi)return i.DEPTH_STENCIL;if(n===qh)return i.RED;if(n===Ml)return i.RED_INTEGER;if(n===as)return i.RG;if(n===Sl)return i.RG_INTEGER;if(n===bl)return i.RGBA_INTEGER;if(n===Da||n===La||n===Ua||n===Na)if(a===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wl||n===Tl||n===El||n===Al)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===El)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rl||n===Cl||n===Pl||n===Il||n===Dl||n===Fa||n===Ll)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Rl||n===Cl)return a===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Il)return r.COMPRESSED_R11_EAC;if(n===Dl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Fa)return r.COMPRESSED_RG11_EAC;if(n===Ll)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ul||n===Nl||n===Fl||n===Ol||n===Bl||n===kl||n===zl||n===Hl||n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ul)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ol)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ql)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zl||n===$l||n===Jl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Zl)return a===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kl||n===jl||n===Oa||n===Ql)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Kl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var my=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,yu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ca(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new we({vertexShader:my,fragmentShader:gy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vu=class extends hi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new yu,g={},b=e.getContextAttributes(),E=null,y=null,v=[],w=[],M=new ot,_=null,T=null,R=new en;R.viewport=new Fe;let C=new en;C.viewport=new Fe;let L=[R,C],F=new dl,D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Q=v[V];return Q===void 0&&(Q=new cr,v[V]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(V){let Q=v[V];return Q===void 0&&(Q=new cr,v[V]=Q),Q.getGripSpace()},this.getHand=function(V){let Q=v[V];return Q===void 0&&(Q=new cr,v[V]=Q),Q.getHandSpace()};function G(V){let Q=w.indexOf(V.inputSource);if(Q===-1)return;let _t=v[Q];_t!==void 0&&(_t.update(V.inputSource,V.frame,c||a),_t.dispatchEvent({type:V.type,data:V.inputSource}))}function Z(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",rt);for(let V=0;V<v.length;V++){let Q=w[V];Q!==null&&(w[V]=null,v[V].disconnect(Q))}D=null,B=null,m.reset();for(let V in g)delete g[V];if(t.setRenderTarget(E),f=null,u=null,d=null,s=null,y=null,lt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(M.width,M.height,!1),T!==null){let V=T.camera;V.fov=T.fov,V.zoom=T.zoom,V.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&Kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&Kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",rt),b.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(M),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,It=null,wt=null;b.depth&&(wt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=b.stencil?gi:ci,It=b.stencil?rs:ti);let Gt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Gt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new ke(u.textureWidth,u.textureHeight,{format:Tn,type:nn,depthTexture:new fi(u.textureWidth,u.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let _t={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ke(f.framebufferWidth,f.framebufferHeight,{format:Tn,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),lt.setContext(s),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function rt(V){for(let Q=0;Q<V.removed.length;Q++){let _t=V.removed[Q],It=w.indexOf(_t);It>=0&&(w[It]=null,v[It].disconnect(_t))}for(let Q=0;Q<V.added.length;Q++){let _t=V.added[Q],It=w.indexOf(_t);if(It===-1){for(let Gt=0;Gt<v.length;Gt++)if(Gt>=w.length){w.push(_t),It=Gt;break}else if(w[Gt]===null){w[Gt]=_t,It=Gt;break}if(It===-1)break}let wt=v[It];wt&&wt.connect(_t)}}let $=new O,nt=new O;function et(V,Q,_t){$.setFromMatrixPosition(Q.matrixWorld),nt.setFromMatrixPosition(_t.matrixWorld);let It=$.distanceTo(nt),wt=Q.projectionMatrix.elements,Gt=_t.projectionMatrix.elements,se=wt[14]/(wt[10]-1),it=wt[14]/(wt[10]+1),ht=(wt[9]+1)/wt[5],dt=(wt[9]-1)/wt[5],gt=(wt[8]-1)/wt[0],vt=(Gt[8]+1)/Gt[0],Wt=se*gt,zt=se*vt,qt=It/(-gt+vt),Jt=qt*-gt;if(Q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Jt),V.translateZ(qt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),wt[10]===-1)V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let k=se+qt,ue=it+qt,ee=Wt-Jt,I=zt+(It-Jt),S=ht*it/ue*k,H=dt*it/ue*k;V.projectionMatrix.makePerspective(ee,I,S,H,k,ue),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function Tt(V,Q){Q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let Q=V.near,_t=V.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),F.near=C.near=R.near=Q,F.far=C.far=R.far=_t,(D!==F.near||B!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),D=F.near,B=F.far),F.layers.mask=V.layers.mask|6,R.layers.mask=F.layers.mask&-5,C.layers.mask=F.layers.mask&-3;let It=V.parent,wt=F.cameras;Tt(F,It);for(let Gt=0;Gt<wt.length;Gt++)Tt(wt[Gt],It);wt.length===2?et(F,R,C):F.projectionMatrix.copy(R.projectionMatrix),T===null&&V.isPerspectiveCamera&&(T={camera:V,fov:V.fov,zoom:V.zoom}),At(V,F,It)};function At(V,Q,_t){_t===null?V.matrix.copy(Q.matrixWorld):(V.matrix.copy(_t.matrixWorld),V.matrix.invert(),V.matrix.multiply(Q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ea*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(V){l=V,u!==null&&(u.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(V){return g[V]};let re=null;function Zt(V,Q){if(h=Q.getViewerPose(c||a),p=Q,h!==null){let _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let It=!1;_t.length!==F.cameras.length&&(F.cameras.length=0,It=!0);for(let it=0;it<_t.length;it++){let ht=_t[it],dt=null;if(f!==null)dt=f.getViewport(ht);else{let vt=d.getViewSubImage(u,ht);dt=vt.viewport,it===0&&(t.setRenderTargetTextures(y,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(y))}let gt=L[it];gt===void 0&&(gt=new en,gt.layers.enable(it),gt.viewport=new Fe,L[it]=gt),gt.matrix.fromArray(ht.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(ht.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(dt.x,dt.y,dt.width,dt.height),it===0&&(F.matrix.copy(gt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),It===!0&&F.cameras.push(gt)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let it=d.getDepthInformation(_t[0]);it&&it.isValid&&it.texture&&m.init(it,s.renderState)}if(wt&&wt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let it=0;it<_t.length;it++){let ht=_t[it].camera;if(ht){let dt=g[ht];dt||(dt=new ca,g[ht]=dt);let gt=d.getCameraImage(ht);dt.sourceTexture=gt}}}}for(let _t=0;_t<v.length;_t++){let It=w[_t],wt=v[_t];It!==null&&wt!==void 0&&wt.update(It,Q,c||a)}re&&re(V,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),p=null}let lt=new Qf;lt.setAnimationLoop(Zt),this.setAnimationLoop=function(V){re=V},this.dispose=function(){}}},xy=new he,rp=new te;rp.set(-1,0,0,0,1,0,0,0,1);function _y(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Kh(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,b,E,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,b,E):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===xn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===xn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let b=t.get(g),E=b.envMap,y=b.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(xy.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(rp),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,b,E){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*b,m.scale.value=E*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,b){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===xn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let b=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function yy(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let w=v.program;n.uniformBlockBinding(y,w)}function c(y,v){let w=s[y.id];w===void 0&&(m(y),w=h(y),s[y.id]=w,y.addEventListener("dispose",b));let M=v.program;n.updateUBOMapping(y,M);let _=t.render.frame;r[y.id]!==_&&(u(y),r[y.id]=_)}function h(y){let v=d();y.__bindingPointIndex=v;let w=i.createBuffer(),M=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,M,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,w),w}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let v=s[y.id],w=y.uniforms,M=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let _=0,T=w.length;_<T;_++){let R=w[_];if(Array.isArray(R))for(let C=0,L=R.length;C<L;C++)f(R[C],_,C,M);else f(R,_,0,M)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,v,w,M){if(x(y,v,w,M)===!0){let _=y.__offset,T=y.value;if(Array.isArray(T)){let R=0;for(let C=0;C<T.length;C++){let L=T[C],F=g(L);p(L,y.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function p(y,v,w){typeof y=="number"||typeof y=="boolean"?v[0]=y:y.isMatrix3?(v[0]=y.elements[0],v[1]=y.elements[1],v[2]=y.elements[2],v[3]=0,v[4]=y.elements[3],v[5]=y.elements[4],v[6]=y.elements[5],v[7]=0,v[8]=y.elements[6],v[9]=y.elements[7],v[10]=y.elements[8],v[11]=0):ArrayBuffer.isView(y)?v.set(new y.constructor(y.buffer,y.byteOffset,v.length)):y.toArray(v,w)}function x(y,v,w,M){let _=y.value,T=v+"_"+w;if(M[T]===void 0)return typeof _=="number"||typeof _=="boolean"?M[T]=_:ArrayBuffer.isView(_)?M[T]=_.slice():M[T]=_.clone(),!0;{let R=M[T];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return M[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function m(y){let v=y.uniforms,w=0,M=16;for(let T=0,R=v.length;T<R;T++){let C=Array.isArray(v[T])?v[T]:[v[T]];for(let L=0,F=C.length;L<F;L++){let D=C[L],B=Array.isArray(D.value)?D.value:[D.value];for(let G=0,Z=B.length;G<Z;G++){let rt=B[G],$=g(rt),nt=w%M,et=nt%$.boundary,Tt=nt+et;w+=et,Tt!==0&&M-Tt<$.storage&&(w+=M-Tt),D.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=w,w+=$.storage}}}let _=w%M;return _>0&&(w+=M-_),y.__size=w,y.__cache={},this}function g(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?Kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Kt("WebGLRenderer: Unsupported uniform value type.",y),v}function b(y){let v=y.target;v.removeEventListener("dispose",b);let w=a.indexOf(v.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function E(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:E}}var vy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xi=null;function My(){return xi===null&&(xi=new Ki(vy,16,16,as,He),xi.name="DFG_LUT",xi.minFilter=sn,xi.magFilter=sn,xi.wrapS=oi,xi.wrapT=oi,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}var rc=class{constructor(t={}){let{canvas:e=Mf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=nn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=f,m=new Set([bl,Sl,Ml]),g=new Set([nn,ti,br,rs,yl,vl]),b=new Uint32Array(4),E=new Int32Array(4),y=new O,v=null,w=null,M=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,C=!1,L=null,F=null,D=null,B=null;this._outputColorSpace=$e;let G=0,Z=0,rt=null,$=-1,nt=null,et=new Fe,Tt=new Fe,At=null,re=new Vt(0),Zt=0,lt=e.width,V=e.height,Q=1,_t=null,It=null,wt=new Fe(0,0,lt,V),Gt=new Fe(0,0,lt,V),se=!1,it=new dr,ht=!1,dt=!1,gt=new he,vt=new O,Wt=new Fe,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function Jt(){return rt===null?Q:1}let k=n;function ue(A,z){return e.getContext(A,z)}let ee,I,S,H,W,j,xt,Mt,tt,at,bt,Nt,St,yt,Dt,Ht,$t,P,J,X,ct,ft,st;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ot,!1),e.addEventListener("webglcontextrestored",Yt,!1),e.addEventListener("webglcontextcreationerror",qe,!1),k===null){let z="webgl2";if(k=ue(z,A),k===null)throw ue(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Et()}catch(A){throw e.removeEventListener("webglcontextlost",Ot,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",qe,!1),jt("WebGLRenderer: "+A.message),A}function Et(){ee=new R1(k),ee.init(),ct=new py(k,ee),I=new _1(k,ee,t,ct),S=new dy(k,ee),I.reversedDepthBuffer&&u&&S.buffers.depth.setReversed(!0),F=k.createFramebuffer(),D=k.createFramebuffer(),B=k.createFramebuffer(),H=new I1(k),W=new j_,j=new fy(k,ee,S,W,I,ct,H),xt=new A1(R),Mt=new L0(k),ft=new g1(k,Mt),tt=new C1(k,Mt,H,ft),at=new L1(k,tt,Mt,ft,H),P=new D1(k,I,j),Dt=new y1(W),bt=new K_(R,xt,ee,I,ft,Dt),Nt=new _y(R,W),St=new ty,yt=new ay(ee),$t=new m1(R,xt,S,at,p,l),Ht=new uy(R,at,I),st=new yy(k,H,I,S),J=new x1(k,ee,H),X=new P1(k,ee,H),H.programs=bt.programs,R.capabilities=I,R.extensions=ee,R.properties=W,R.renderLists=St,R.shadowMap=Ht,R.state=S,R.info=H}x!==nn&&(T=new N1(x,e.width,e.height,o,s,r));let pt=new vu(R,k);this.xr=pt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let A=ee.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ee.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(A){A!==void 0&&(Q=A,this.setSize(lt,V,!1))},this.getSize=function(A){return A.set(lt,V)},this.setSize=function(A,z,K=!0){if(pt.isPresenting){Kt("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=A,V=z,e.width=Math.floor(A*Q),e.height=Math.floor(z*Q),K===!0&&(e.style.width=A+"px",e.style.height=z+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(lt*Q,V*Q).floor()},this.setDrawingBufferSize=function(A,z,K){lt=A,V=z,Q=K,e.width=Math.floor(A*K),e.height=Math.floor(z*K),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(x===nn){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){Kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(et)},this.getViewport=function(A){return A.copy(wt)},this.setViewport=function(A,z,K,q){A.isVector4?wt.set(A.x,A.y,A.z,A.w):wt.set(A,z,K,q),S.viewport(et.copy(wt).multiplyScalar(Q).round())},this.getScissor=function(A){return A.copy(Gt)},this.setScissor=function(A,z,K,q){A.isVector4?Gt.set(A.x,A.y,A.z,A.w):Gt.set(A,z,K,q),S.scissor(Tt.copy(Gt).multiplyScalar(Q).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(A){S.setScissorTest(se=A)},this.setOpaqueSort=function(A){_t=A},this.setTransparentSort=function(A){It=A},this.getClearColor=function(A){return A.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,K=!0){let q=0;if(A){let Y=!1;if(rt!==null){let Pt=rt.texture.format;Y=m.has(Pt)}if(Y){let Pt=rt.texture.type,Ft=g.has(Pt),Ct=$t.getClearColor(),Bt=$t.getClearAlpha(),Xt=Ct.r,ae=Ct.g,ce=Ct.b;Ft?(b[0]=Xt,b[1]=ae,b[2]=ce,b[3]=Bt,k.clearBufferuiv(k.COLOR,0,b)):(E[0]=Xt,E[1]=ae,E[2]=ce,E[3]=Bt,k.clearBufferiv(k.COLOR,0,E))}else q|=k.COLOR_BUFFER_BIT}z&&(q|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),L=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Ot,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",qe,!1),$t.dispose(),St.dispose(),yt.dispose(),W.dispose(),xt.dispose(),at.dispose(),ft.dispose(),st.dispose(),bt.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",us),pt.removeEventListener("sessionend",zr),Ei.stop()};function Ot(A){A.preventDefault(),$h("WebGLRenderer: Context Lost."),C=!0}function Yt(){$h("WebGLRenderer: Context Restored."),C=!1;let A=H.autoReset,z=Ht.enabled,K=Ht.autoUpdate,q=Ht.needsUpdate,Y=Ht.type;Et(),H.autoReset=A,Ht.enabled=z,Ht.autoUpdate=K,Ht.needsUpdate=q,Ht.type=Y}function qe(A){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Cn(A){let z=A.target;z.removeEventListener("dispose",Cn),no(z)}function no(A){io(A),W.remove(A)}function io(A){let z=W.get(A).programs;z!==void 0&&(z.forEach(function(K){bt.releaseProgram(K)}),A.isShaderMaterial&&bt.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,K,q,Y,Pt){z===null&&(z=zt);let Ft=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Ct=fm(A,z,K,q,Y);S.setMaterial(q,Ft);let Bt=K.index,Xt=1;if(q.wireframe===!0){if(Bt=tt.getWireframeAttribute(K),Bt===void 0)return;Xt=2}let ae=K.drawRange,ce=K.attributes.position,kt=ae.start*Xt,Me=(ae.start+ae.count)*Xt;Pt!==null&&(kt=Math.max(kt,Pt.start*Xt),Me=Math.min(Me,(Pt.start+Pt.count)*Xt)),Bt!==null?(kt=Math.max(kt,0),Me=Math.min(Me,Bt.count)):ce!=null&&(kt=Math.max(kt,0),Me=Math.min(Me,ce.count));let Ye=Me-kt;if(Ye<0||Ye===1/0)return;ft.setup(Y,q,Ct,K,Bt);let Pe,Ee=J;if(Bt!==null&&(Pe=Mt.get(Bt),Ee=X,Ee.setIndex(Pe)),Y.isMesh)q.wireframe===!0?(S.setLineWidth(q.wireframeLinewidth*Jt()),Ee.setMode(k.LINES)):Ee.setMode(k.TRIANGLES);else if(Y.isLine){let on=q.linewidth;on===void 0&&(on=1),S.setLineWidth(on*Jt()),Y.isLineSegments?Ee.setMode(k.LINES):Y.isLineLoop?Ee.setMode(k.LINE_LOOP):Ee.setMode(k.LINE_STRIP)}else Y.isPoints?Ee.setMode(k.POINTS):Y.isSprite&&Ee.setMode(k.TRIANGLES);if(Y.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))Ee.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let on=Y._multiDrawStarts,Ut=Y._multiDrawCounts,fn=Y._multiDrawCount,ge=Bt?Mt.get(Bt).bytesPerElement:1,kn=W.get(q).currentProgram.getUniforms();for(let ri=0;ri<fn;ri++)kn.setValue(k,"_gl_DrawID",ri),Ee.render(on[ri]/ge,Ut[ri])}else if(Y.isInstancedMesh)Ee.renderInstances(kt,Ye,Y.count);else if(K.isInstancedBufferGeometry){let on=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ut=Math.min(K.instanceCount,on);Ee.renderInstances(kt,Ye,Ut)}else Ee.render(kt,Ye)};function Ge(A,z,K,q){L!==null&&A.isNodeMaterial&&L.setObject(q,A),ht===!0&&Dt.setState(A,K,!1),A.transparent===!0&&A.side===_n&&A.forceSinglePass===!1?(A.side=xn,A.needsUpdate=!0,ao(A,z,q),A.side=ns,A.needsUpdate=!0,ao(A,z,q),A.side=_n):ao(A,z,q)}this.compile=function(A,z,K=null){K===null&&(K=A),L!==null&&L.renderStart(A,z,K),w=yt.get(K),w.init(z),_.push(w),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),A!==K&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),w.setupLights(),L!==null&&L.updateLights(w.state.lightsArray),dt=this.localClippingEnabled,ht=Dt.init(this.clippingPlanes,dt),ht===!0&&Dt.setGlobalState(this.clippingPlanes,z),L!==null&&Ht.render(w.state.shadowsArray,K,z);let q=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Pt=Y.material;if(Pt)if(Array.isArray(Pt))for(let Ft=0;Ft<Pt.length;Ft++){let Ct=Pt[Ft];Ge(Ct,K,z,Y),q.add(Ct)}else Ge(Pt,K,z,Y),q.add(Pt)}),w=_.pop(),L!==null&&L.renderEnd(),q},this.compileAsync=function(A,z,K=null){let q=this.compile(A,z,K);return new Promise(Y=>{function Pt(){if(q.forEach(function(Ft){let Bt=W.get(Ft).currentProgram;(Bt===void 0||Bt.isReady())&&q.delete(Ft)}),q.size===0){Y(A);return}setTimeout(Pt,10)}ee.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let si=null;function so(A){si&&si(A)}function us(){Ei.stop()}function zr(){Ei.start()}let Ei=new Qf;Ei.setAnimationLoop(so),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(A){si=A,pt.setAnimationLoop(A),A===null?Ei.stop():Ei.start()},pt.addEventListener("sessionstart",us),pt.addEventListener("sessionend",zr),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;L!==null&&L.renderStart(A,z);let K=pt.enabled===!0&&pt.isPresenting===!0,q=T!==null&&(rt===null||K)&&T.begin(R,rt);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(z),z=pt.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,z,rt),w=yt.get(A,_.length),w.init(z),w.state.textureUnits=j.getTextureUnits(),_.push(w),gt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),it.setFromProjectionMatrix(gt,Kn,z.reversedDepth),dt=this.localClippingEnabled,ht=Dt.init(this.clippingPlanes,dt),v=St.get(A,M.length),v.init(),M.push(v),pt.enabled===!0&&pt.isPresenting===!0){let Ft=R.xr.getDepthSensingMesh();Ft!==null&&Hr(Ft,z,-1/0,R.sortObjects)}Hr(A,z,0,R.sortObjects),v.finish(),L!==null&&L.updateLights(w.state.lightsArray),R.sortObjects===!0&&v.sort(_t,It),qt=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,qt&&$t.addToRenderList(v,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ht===!0&&Dt.beginShadows();let Y=w.state.shadowsArray;if(Ht.render(Y,A,z),ht===!0&&Dt.endShadows(),(q&&T.hasRenderPass())===!1){let Ft=v.opaque,Ct=v.transmissive;if(w.setupLights(),z.isArrayCamera){let Bt=z.cameras;if(Ct.length>0)for(let Xt=0,ae=Bt.length;Xt<ae;Xt++){let ce=Bt[Xt];od(Ft,Ct,A,ce)}qt&&$t.render(A);for(let Xt=0,ae=Bt.length;Xt<ae;Xt++){let ce=Bt[Xt];ad(v,A,ce,ce.viewport)}}else Ct.length>0&&od(Ft,Ct,A,z),qt&&$t.render(A),ad(v,A,z)}rt!==null&&Z===0&&(j.updateMultisampleRenderTarget(rt),j.updateRenderTargetMipmap(rt)),q&&T.end(R),A.isScene===!0&&A.onAfterRender(R,A,z),ft.resetDefaultState(),$=-1,nt=null,_.pop(),_.length>0?(w=_[_.length-1],j.setTextureUnits(w.state.textureUnits),ht===!0&&Dt.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,M.pop(),M.length>0?v=M[M.length-1]:v=null,L!==null&&L.renderEnd()};function Hr(A,z,K,q){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLightProbeGrid)w.pushLightProbeGrid(A);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(it)){q&&Wt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(gt);let Ft=at.update(A),Ct=A.material;Ct.visible&&v.push(A,Ft,Ct,K,Wt.z,null,z)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(it))){let Ft=at.update(A),Ct=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Wt.copy(A.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),Wt.copy(Ft.boundingSphere.center)),Wt.applyMatrix4(A.matrixWorld).applyMatrix4(gt)),Array.isArray(Ct)){let Bt=Ft.groups;for(let Xt=0,ae=Bt.length;Xt<ae;Xt++){let ce=Bt[Xt],kt=Ct[ce.materialIndex];kt&&kt.visible&&v.push(A,Ft,kt,K,Wt.z,ce,z)}}else Ct.visible&&v.push(A,Ft,Ct,K,Wt.z,null,z)}}let Pt=A.children;for(let Ft=0,Ct=Pt.length;Ft<Ct;Ft++)Hr(Pt[Ft],z,K,q)}function ad(A,z,K,q){let{opaque:Y,transmissive:Pt,transparent:Ft}=A;w.setupLightsView(K),ht===!0&&Dt.setGlobalState(R.clippingPlanes,K),q&&S.viewport(et.copy(q)),Y.length>0&&ro(Y,z,K),Pt.length>0&&ro(Pt,z,K),Ft.length>0&&ro(Ft,z,K),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function od(A,z,K,q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[q.id]===void 0){let kt=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[q.id]=new ke(1,1,{generateMipmaps:!0,type:kt?He:nn,minFilter:ss,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:de.workingColorSpace})}let Pt=w.state.transmissionRenderTarget[q.id],Ft=q.viewport||et;Pt.setSize(Ft.z*R.transmissionResolutionScale,Ft.w*R.transmissionResolutionScale);let Ct=R.getRenderTarget(),Bt=R.getActiveCubeFace(),Xt=R.getActiveMipmapLevel();R.setRenderTarget(Pt),R.getClearColor(re),Zt=R.getClearAlpha(),Zt<1&&R.setClearColor(16777215,.5),R.clear(),qt&&$t.render(K);let ae=R.toneMapping;R.toneMapping=Qn;let ce=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),w.setupLightsView(q),ht===!0&&Dt.setGlobalState(R.clippingPlanes,q),ro(A,K,q),j.updateMultisampleRenderTarget(Pt),j.updateRenderTargetMipmap(Pt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Me=0,Ye=z.length;Me<Ye;Me++){let Pe=z[Me],{object:Ee,geometry:on,material:Ut,group:fn}=Pe;if(Ut.side===_n&&Ee.layers.test(q.layers)){let ge=Ut.side;Ut.side=xn,Ut.needsUpdate=!0,ld(Ee,K,q,on,Ut,fn),Ut.side=ge,Ut.needsUpdate=!0,kt=!0}}kt===!0&&(j.updateMultisampleRenderTarget(Pt),j.updateRenderTargetMipmap(Pt))}R.setRenderTarget(Ct,Bt,Xt),R.setClearColor(re,Zt),ce!==void 0&&(q.viewport=ce),R.toneMapping=ae}function ro(A,z,K){let q=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,Pt=A.length;Y<Pt;Y++){let Ft=A[Y],{object:Ct,geometry:Bt,group:Xt}=Ft,ae=Ft.material;ae.allowOverride===!0&&q!==null&&(ae=q),Ct.layers.test(K.layers)&&ld(Ct,z,K,Bt,ae,Xt)}}function ld(A,z,K,q,Y,Pt){L!==null&&Y.isNodeMaterial&&L.setObject(A,Y),A.onBeforeRender(R,z,K,q,Y,Pt),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(R,z,K,q,A,Pt),Y.transparent===!0&&Y.side===_n&&Y.forceSinglePass===!1?(Y.side=xn,Y.needsUpdate=!0,R.renderBufferDirect(K,z,q,Y,A,Pt),Y.side=ns,Y.needsUpdate=!0,R.renderBufferDirect(K,z,q,Y,A,Pt),Y.side=_n):R.renderBufferDirect(K,z,q,Y,A,Pt),A.onAfterRender(R,z,K,q,Y,Pt)}function ao(A,z,K){z.isScene!==!0&&(z=zt);let q=W.get(A),Y=w.state.lights,Pt=w.state.shadowsArray,Ft=Y.state.version,Ct=bt.getParameters(A,Y.state,Pt,z,K,w.state.lightProbeGridArray),Bt=bt.getProgramCacheKey(Ct),Xt=q.programs;q.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,q.fog=z.fog;let ae=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;q.envMap=xt.get(A.envMap||q.environment,ae),q.envMapRotation=q.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Xt===void 0&&(A.addEventListener("dispose",Cn),Xt=new Map,q.programs=Xt);let ce=Xt.get(Bt);if(ce!==void 0){if(q.currentProgram===ce&&q.lightsStateVersion===Ft)return hd(A,Ct),ce}else Ct.uniforms=bt.getUniforms(A),L!==null&&A.isNodeMaterial&&L.build(A,K,Ct),A.onBeforeCompile(Ct,R),ce=bt.acquireProgram(Ct,Bt),Xt.set(Bt,ce),q.uniforms=Ct.uniforms;let kt=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=Dt.uniform),hd(A,Ct),q.needsLights=mm(A),q.lightsStateVersion=Ft,q.needsLights&&(kt.ambientLightColor.value=Y.state.ambient,kt.lightProbe.value=Y.state.probe,kt.sunLights.value=Y.state.sun,kt.sunLightShadows.value=Y.state.sunShadow,kt.directionalLights.value=Y.state.directional,kt.directionalLightShadows.value=Y.state.directionalShadow,kt.spotLights.value=Y.state.spot,kt.spotLightShadows.value=Y.state.spotShadow,kt.rectAreaLights.value=Y.state.rectArea,kt.ltc_1.value=Y.state.rectAreaLTC1,kt.ltc_2.value=Y.state.rectAreaLTC2,kt.pointLights.value=Y.state.point,kt.pointLightShadows.value=Y.state.pointShadow,kt.hemisphereLights.value=Y.state.hemi,kt.sunShadowMatrix.value=Y.state.sunShadowMatrix,kt.sunShadowCascade.value=Y.state.sunShadowCascade,kt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,kt.spotLightMatrix.value=Y.state.spotLightMatrix,kt.spotLightMap.value=Y.state.spotLightMap,kt.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=w.state.lightProbeGridArray.length>0,q.currentProgram=ce,q.uniformsList=null,ce}function cd(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=Ar.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function hd(A,z){let K=W.get(A);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.batchingColor=z.batchingColor,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function dm(A,z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;y.setFromMatrixPosition(z.matrixWorld);for(let K=0,q=A.length;K<q;K++){let Y=A[K];if(Y.texture!==null&&Y.boundingBox.containsPoint(y))return Y}return null}function fm(A,z,K,q,Y){z.isScene!==!0&&(z=zt),j.resetTextureUnits();let Pt=z.fog,Ft=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?z.environment:null,Ct=rt===null?R.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:de.workingColorSpace,Bt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Xt=xt.get(q.envMap||Ft,Bt),ae=q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ce=!!K.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),kt=!!K.morphAttributes.position,Me=!!K.morphAttributes.normal,Ye=!!K.morphAttributes.color,Pe=Qn;q.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Pe=R.toneMapping);let Ee=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,on=Ee!==void 0?Ee.length:0,Ut=W.get(q),fn=w.state.lights;if(ht===!0&&(dt===!0||A!==nt)){let Re=A===nt&&q.id===$;Dt.setState(q,A,Re)}let ge=!1;q.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==fn.state.version||Ut.outputColorSpace!==Ct||Y.isBatchedMesh&&Ut.batching===!1||!Y.isBatchedMesh&&Ut.batching===!0||Y.isBatchedMesh&&Ut.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Ut.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Ut.instancing===!1||!Y.isInstancedMesh&&Ut.instancing===!0||Y.isSkinnedMesh&&Ut.skinning===!1||!Y.isSkinnedMesh&&Ut.skinning===!0||Y.isInstancedMesh&&Ut.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ut.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ut.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ut.instancingMorph===!1&&Y.morphTexture!==null||Ut.envMap!==Xt||q.fog===!0&&Ut.fog!==Pt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==Dt.numPlanes||Ut.numIntersection!==Dt.numIntersection)||Ut.vertexAlphas!==ae||Ut.vertexTangents!==ce||Ut.morphTargets!==kt||Ut.morphNormals!==Me||Ut.morphColors!==Ye||Ut.toneMapping!==Pe||Ut.morphTargetsCount!==on||!!Ut.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ge=!0):(ge=!0,Ut.__version=q.version);let kn=Ut.currentProgram;ge===!0&&(kn=ao(q,z,Y),L&&q.isNodeMaterial&&L.onUpdateProgram(q,kn,Ut));let ri=!1,Vi=!1,Vs=!1,Te=kn.getUniforms(),We=Ut.uniforms;if(S.useProgram(kn.program)&&(ri=!0,Vi=!0,Vs=!0),q.id!==$&&($=q.id,Vi=!0),Ut.needsLights){let Re=dm(w.state.lightProbeGridArray,Y);Ut.lightProbeGrid!==Re&&(Ut.lightProbeGrid=Re,Vi=!0)}if(ri||nt!==A){S.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Te.setValue(k,"projectionMatrix",A.projectionMatrix),Te.setValue(k,"viewMatrix",A.matrixWorldInverse);let Wi=Te.map.cameraPosition;Wi!==void 0&&Wi.setValue(k,vt.setFromMatrixPosition(A.matrixWorld)),I.logarithmicDepthBuffer&&Te.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Te.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),nt!==A&&(nt=A,Vi=!0,Vs=!0)}if(Ut.needsLights&&(fn.state.sunShadowMap.length>0&&Te.setValue(k,"sunShadowMap",fn.state.sunShadowMap,j),fn.state.directionalShadowMap.length>0&&Te.setValue(k,"directionalShadowMap",fn.state.directionalShadowMap,j),fn.state.spotShadowMap.length>0&&Te.setValue(k,"spotShadowMap",fn.state.spotShadowMap,j),fn.state.pointShadowMap.length>0&&Te.setValue(k,"pointShadowMap",fn.state.pointShadowMap,j)),Y.isSkinnedMesh){Te.setOptional(k,Y,"bindMatrix"),Te.setOptional(k,Y,"bindMatrixInverse");let Re=Y.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),Te.setValue(k,"boneTexture",Re.boneTexture,j))}Y.isBatchedMesh&&(Te.setOptional(k,Y,"batchingTexture"),Te.setValue(k,"batchingTexture",Y._matricesTexture,j),Te.setOptional(k,Y,"batchingIdTexture"),Te.setValue(k,"batchingIdTexture",Y._indirectTexture,j),Te.setOptional(k,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Te.setValue(k,"batchingColorTexture",Y._colorsTexture,j));let Gi=K.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&P.update(Y,K,kn),(Vi||Ut.receiveShadow!==Y.receiveShadow)&&(Ut.receiveShadow=Y.receiveShadow,Te.setValue(k,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&z.environment!==null&&(We.envMapIntensity.value=z.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=My()),Vi){if(Te.setValue(k,"toneMappingExposure",R.toneMappingExposure),Ut.needsLights&&pm(We,Vs),Pt&&q.fog===!0&&Nt.refreshFogUniforms(We,Pt),Nt.refreshMaterialUniforms(We,q,Q,V,w.state.transmissionRenderTarget[A.id]),Ut.needsLights&&Ut.lightProbeGrid){let Re=Ut.lightProbeGrid;We.probesSH.value=Re.texture,We.probesMin.value.copy(Re.boundingBox.min),We.probesMax.value.copy(Re.boundingBox.max),We.probesResolution.value.copy(Re.resolution)}Ar.upload(k,cd(Ut),We,j)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ar.upload(k,cd(Ut),We,j),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Te.setValue(k,"center",Y.center),Te.setValue(k,"modelViewMatrix",Y.modelViewMatrix),Te.setValue(k,"normalMatrix",Y.normalMatrix),Te.setValue(k,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let Re=q.uniformsGroups;for(let Wi=0,Gs=Re.length;Wi<Gs;Wi++){let dd=Re[Wi];st.update(dd,kn),st.bind(dd,kn)}}return kn}function pm(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.sunLights.needsUpdate=z,A.sunLightShadows.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function mm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(A,z,K){let q=W.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),W.get(A.texture).__webglTexture=z,W.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:K,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){let K=W.get(A);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,K=0){rt=A,G=z,Z=K;let q=null,Y=!1,Pt=!1;if(A){let Ct=W.get(A);if(Ct.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(k.FRAMEBUFFER,Ct.__webglFramebuffer),et.copy(A.viewport),Tt.copy(A.scissor),At=A.scissorTest,S.viewport(et),S.scissor(Tt),S.setScissorTest(At),$=-1;return}else if(Ct.__webglFramebuffer===void 0)j.setupRenderTarget(A);else if(Ct.__hasExternalTextures)j.rebindTextures(A,W.get(A.texture).__webglTexture,W.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let ae=A.depthTexture;if(Ct.__boundDepthTexture!==ae){if(ae!==null&&W.has(ae)&&(A.width!==ae.image.width||A.height!==ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(A)}}let Bt=A.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Pt=!0);let Xt=W.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xt[z])?q=Xt[z][K]:q=Xt[z],Y=!0):A.samples>0&&j.useMultisampledRTT(A)===!1?q=W.get(A).__webglMultisampledFramebuffer:Array.isArray(Xt)?q=Xt[K]:q=Xt,et.copy(A.viewport),Tt.copy(A.scissor),At=A.scissorTest}else et.copy(wt).multiplyScalar(Q).floor(),Tt.copy(Gt).multiplyScalar(Q).floor(),At=se;if(K!==0&&(q=F),S.bindFramebuffer(k.FRAMEBUFFER,q)&&S.drawBuffers(A,q),S.viewport(et),S.scissor(Tt),S.setScissorTest(At),Y){let Ct=W.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ct.__webglTexture,K)}else if(Pt){let Ct=z;for(let Bt=0;Bt<A.textures.length;Bt++){let Xt=W.get(A.textures[Bt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Bt,Xt.__webglTexture,K,Ct)}}else if(A!==null&&K!==0){let Ct=W.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ct.__webglTexture,K)}$=-1};function ud(A){let z=W.get(A);return(z.__readFormat!==A.format||z.__readType!==A.type)&&(z.__readFormat=A.format,z.__readType=A.type,z.__formatReadable=I.textureFormatReadable(A.format),z.__typeReadable=I.textureTypeReadable(A.type)),z}this.readRenderTargetPixels=function(A,z,K,q,Y,Pt,Ft,Ct=0){if(!(A&&A.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ft!==void 0&&(Bt=Bt[Ft]),Bt){S.bindFramebuffer(k.FRAMEBUFFER,Bt);try{let Xt=A.textures[Ct],ae=Xt.format,ce=Xt.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ct);let kt=ud(Xt);if(kt.__formatReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-q&&K>=0&&K<=A.height-Y&&k.readPixels(z,K,q,Y,ct.convert(ae),ct.convert(ce),Pt)}finally{let Xt=rt!==null?W.get(rt).__webglFramebuffer:null;S.bindFramebuffer(k.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(A,z,K,q,Y,Pt,Ft,Ct=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ft!==void 0&&(Bt=Bt[Ft]),Bt)if(z>=0&&z<=A.width-q&&K>=0&&K<=A.height-Y){S.bindFramebuffer(k.FRAMEBUFFER,Bt);let Xt=A.textures[Ct],ae=Xt.format,ce=Xt.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ct);let kt=ud(Xt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Me=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Me),k.bufferData(k.PIXEL_PACK_BUFFER,Pt.byteLength,k.STREAM_READ),k.readPixels(z,K,q,Y,ct.convert(ae),ct.convert(ce),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Ye=rt!==null?W.get(rt).__webglFramebuffer:null;S.bindFramebuffer(k.FRAMEBUFFER,Ye);let Pe=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await bf(k,Pe,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Me),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Pt),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Me),k.deleteSync(Pe),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,K=0){let q=Math.pow(2,-K),Y=Math.floor(A.image.width*q),Pt=Math.floor(A.image.height*q),Ft=z!==null?z.x:0,Ct=z!==null?z.y:0;j.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,K,0,0,Ft,Ct,Y,Pt),S.unbindTexture()},this.copyTextureToTexture=function(A,z,K=null,q=null,Y=0,Pt=0){let Ft,Ct,Bt,Xt,ae,ce,kt,Me,Ye,Pe=A.isCompressedTexture?A.mipmaps[Pt]:A.image;if(K!==null)Ft=K.max.x-K.min.x,Ct=K.max.y-K.min.y,Bt=K.isBox3?K.max.z-K.min.z:1,Xt=K.min.x,ae=K.min.y,ce=K.isBox3?K.min.z:0;else{let We=Math.pow(2,-Y);Ft=Math.floor(Pe.width*We),Ct=Math.floor(Pe.height*We),A.isDataArrayTexture?Bt=Pe.depth:A.isData3DTexture?Bt=Math.floor(Pe.depth*We):Bt=1,Xt=0,ae=0,ce=0}q!==null?(kt=q.x,Me=q.y,Ye=q.z):(kt=0,Me=0,Ye=0);let Ee=ct.convert(z.format),on=ct.convert(z.type),Ut;z.isData3DTexture?(j.setTexture3D(z,0),Ut=k.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(j.setTexture2DArray(z,0),Ut=k.TEXTURE_2D_ARRAY):(j.setTexture2D(z,0),Ut=k.TEXTURE_2D),S.activeTexture(k.TEXTURE0),S.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,z.flipY),S.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),S.pixelStorei(k.UNPACK_ALIGNMENT,z.unpackAlignment);let fn=S.getParameter(k.UNPACK_ROW_LENGTH),ge=S.getParameter(k.UNPACK_IMAGE_HEIGHT),kn=S.getParameter(k.UNPACK_SKIP_PIXELS),ri=S.getParameter(k.UNPACK_SKIP_ROWS),Vi=S.getParameter(k.UNPACK_SKIP_IMAGES);S.pixelStorei(k.UNPACK_ROW_LENGTH,Pe.width),S.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Pe.height),S.pixelStorei(k.UNPACK_SKIP_PIXELS,Xt),S.pixelStorei(k.UNPACK_SKIP_ROWS,ae),S.pixelStorei(k.UNPACK_SKIP_IMAGES,ce);let Vs=A.isDataArrayTexture||A.isData3DTexture,Te=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){let We=W.get(A),Gi=W.get(z),Re=W.get(We.__renderTarget),Wi=W.get(Gi.__renderTarget);S.bindFramebuffer(k.READ_FRAMEBUFFER,Re.__webglFramebuffer),S.bindFramebuffer(k.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Gs=0;Gs<Bt;Gs++)Vs&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,W.get(A).__webglTexture,Y,ce+Gs),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,W.get(z).__webglTexture,Pt,Ye+Gs)),k.blitFramebuffer(Xt,ae,Ft,Ct,kt,Me,Ft,Ct,k.DEPTH_BUFFER_BIT,k.NEAREST);S.bindFramebuffer(k.READ_FRAMEBUFFER,null),S.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||W.has(A)){let We=W.get(A),Gi=W.get(z);S.bindFramebuffer(k.READ_FRAMEBUFFER,D),S.bindFramebuffer(k.DRAW_FRAMEBUFFER,B);for(let Re=0;Re<Bt;Re++)Vs?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,We.__webglTexture,Y,ce+Re):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,We.__webglTexture,Y),Te?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Gi.__webglTexture,Pt,Ye+Re):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Gi.__webglTexture,Pt),Y!==0?k.blitFramebuffer(Xt,ae,Ft,Ct,kt,Me,Ft,Ct,k.COLOR_BUFFER_BIT,k.NEAREST):Te?k.copyTexSubImage3D(Ut,Pt,kt,Me,Ye+Re,Xt,ae,Ft,Ct):k.copyTexSubImage2D(Ut,Pt,kt,Me,Xt,ae,Ft,Ct);S.bindFramebuffer(k.READ_FRAMEBUFFER,null),S.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Te?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Ut,Pt,kt,Me,Ye,Ft,Ct,Bt,Ee,on,Pe.data):z.isCompressedArrayTexture?k.compressedTexSubImage3D(Ut,Pt,kt,Me,Ye,Ft,Ct,Bt,Ee,Pe.data):k.texSubImage3D(Ut,Pt,kt,Me,Ye,Ft,Ct,Bt,Ee,on,Pe):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Pt,kt,Me,Ft,Ct,Ee,on,Pe.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Pt,kt,Me,Pe.width,Pe.height,Ee,Pe.data):k.texSubImage2D(k.TEXTURE_2D,Pt,kt,Me,Ft,Ct,Ee,on,Pe);S.pixelStorei(k.UNPACK_ROW_LENGTH,fn),S.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ge),S.pixelStorei(k.UNPACK_SKIP_PIXELS,kn),S.pixelStorei(k.UNPACK_SKIP_ROWS,ri),S.pixelStorei(k.UNPACK_SKIP_IMAGES,Vi),Pt===0&&z.generateMipmaps&&k.generateMipmap(Ut),S.unbindTexture()},this.initRenderTarget=function(A){W.get(A).__webglFramebuffer===void 0&&j.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?j.setTextureCube(A,0):A.isData3DTexture?j.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?j.setTexture2DArray(A,0):j.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){G=0,Z=0,rt=null,S.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}};var yi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Sy=new es(-1,1,1,-1,0,1),Mu=class extends be{constructor(){super(),this.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ie([0,2,0,0,2,0],2))}},by=new Mu,vi=class{constructor(t){this._mesh=new xe(by,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Sy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Va={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ot},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new he},cameraProjectionMatrixInverse:{value:new he},cameraWorldMatrix:{value:new he},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new O(-1,-1,-1)},sceneBoxMax:{value:new O(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Ga={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},lc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function ap(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=wy(t),n=e.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=e[a],l=2*Math.PI*o/n,c=new O(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Ki(s,t,t);return r.wrapS=wn,r.wrapT=wn,r.needsUpdate=!0,r}function wy(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),s=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=a++;r++,s--}return n}var Wa={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Su(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ot},cameraProjectionMatrixInverse:{value:new he},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Su(i,t,e){let n=Ty(i,t,e),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function Ty(i,t,e){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*t*s/i,a=Math.pow(s/(i-1),e);n.push(new O(Math.cos(r),Math.sin(r),a))}return n}var os={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var cc=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,f=c-d,p=t-u,x=e-f,m,g;p>x?(m=1,g=0):(m=0,g=1);let b=p-m+h,E=x-g+h,y=p-1+2*h,v=x-1+2*h,w=l&255,M=c&255,_=this.perm[w+this.perm[M]]%12,T=this.perm[w+m+this.perm[M+g]]%12,R=this.perm[w+1+this.perm[M+1]]%12,C=.5-p*p-x*x;C<0?n=0:(C*=C,n=C*C*this._dot(this.grad3[_],p,x));let L=.5-b*b-E*E;L<0?s=0:(L*=L,s=L*L*this._dot(this.grad3[T],b,E));let F=.5-y*y-v*v;return F<0?r=0:(F*=F,r=F*F*this._dot(this.grad3[R],y,v)),70*(n+s+r)}noise3d(t,e,n){let s,r,a,o,c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),d=Math.floor(e+c),u=Math.floor(n+c),f=1/6,p=(h+d+u)*f,x=h-p,m=d-p,g=u-p,b=t-x,E=e-m,y=n-g,v,w,M,_,T,R;b>=E?E>=y?(v=1,w=0,M=0,_=1,T=1,R=0):b>=y?(v=1,w=0,M=0,_=1,T=0,R=1):(v=0,w=0,M=1,_=1,T=0,R=1):E<y?(v=0,w=0,M=1,_=0,T=1,R=1):b<y?(v=0,w=1,M=0,_=0,T=1,R=1):(v=0,w=1,M=0,_=1,T=1,R=0);let C=b-v+f,L=E-w+f,F=y-M+f,D=b-_+2*f,B=E-T+2*f,G=y-R+2*f,Z=b-1+3*f,rt=E-1+3*f,$=y-1+3*f,nt=h&255,et=d&255,Tt=u&255,At=this.perm[nt+this.perm[et+this.perm[Tt]]]%12,re=this.perm[nt+v+this.perm[et+w+this.perm[Tt+M]]]%12,Zt=this.perm[nt+_+this.perm[et+T+this.perm[Tt+R]]]%12,lt=this.perm[nt+1+this.perm[et+1+this.perm[Tt+1]]]%12,V=.6-b*b-E*E-y*y;V<0?s=0:(V*=V,s=V*V*this._dot3(this.grad3[At],b,E,y));let Q=.6-C*C-L*L-F*F;Q<0?r=0:(Q*=Q,r=Q*Q*this._dot3(this.grad3[re],C,L,F));let _t=.6-D*D-B*B-G*G;_t<0?a=0:(_t*=_t,a=_t*_t*this._dot3(this.grad3[Zt],D,B,G));let It=.6-Z*Z-rt*rt-$*$;return It<0?o=0:(It*=It,o=It*It*this._dot3(this.grad3[lt],Z,rt,$)),32*(s+r+a+o)}noise4d(t,e,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,u,f,p,x=(t+e+n+s)*l,m=Math.floor(t+x),g=Math.floor(e+x),b=Math.floor(n+x),E=Math.floor(s+x),y=(m+g+b+E)*c,v=m-y,w=g-y,M=b-y,_=E-y,T=t-v,R=e-w,C=n-M,L=s-_,F=T>R?32:0,D=T>C?16:0,B=R>C?8:0,G=T>L?4:0,Z=R>L?2:0,rt=C>L?1:0,$=F+D+B+G+Z+rt,nt=a[$][0]>=3?1:0,et=a[$][1]>=3?1:0,Tt=a[$][2]>=3?1:0,At=a[$][3]>=3?1:0,re=a[$][0]>=2?1:0,Zt=a[$][1]>=2?1:0,lt=a[$][2]>=2?1:0,V=a[$][3]>=2?1:0,Q=a[$][0]>=1?1:0,_t=a[$][1]>=1?1:0,It=a[$][2]>=1?1:0,wt=a[$][3]>=1?1:0,Gt=T-nt+c,se=R-et+c,it=C-Tt+c,ht=L-At+c,dt=T-re+2*c,gt=R-Zt+2*c,vt=C-lt+2*c,Wt=L-V+2*c,zt=T-Q+3*c,qt=R-_t+3*c,Jt=C-It+3*c,k=L-wt+3*c,ue=T-1+4*c,ee=R-1+4*c,I=C-1+4*c,S=L-1+4*c,H=m&255,W=g&255,j=b&255,xt=E&255,Mt=o[H+o[W+o[j+o[xt]]]]%32,tt=o[H+nt+o[W+et+o[j+Tt+o[xt+At]]]]%32,at=o[H+re+o[W+Zt+o[j+lt+o[xt+V]]]]%32,bt=o[H+Q+o[W+_t+o[j+It+o[xt+wt]]]]%32,Nt=o[H+1+o[W+1+o[j+1+o[xt+1]]]]%32,St=.6-T*T-R*R-C*C-L*L;St<0?h=0:(St*=St,h=St*St*this._dot4(r[Mt],T,R,C,L));let yt=.6-Gt*Gt-se*se-it*it-ht*ht;yt<0?d=0:(yt*=yt,d=yt*yt*this._dot4(r[tt],Gt,se,it,ht));let Dt=.6-dt*dt-gt*gt-vt*vt-Wt*Wt;Dt<0?u=0:(Dt*=Dt,u=Dt*Dt*this._dot4(r[at],dt,gt,vt,Wt));let Ht=.6-zt*zt-qt*qt-Jt*Jt-k*k;Ht<0?f=0:(Ht*=Ht,f=Ht*Ht*this._dot4(r[bt],zt,qt,Jt,k));let $t=.6-ue*ue-ee*ee-I*I-S*S;return $t<0?p=0:($t*=$t,p=$t*$t*this._dot4(r[Nt],ue,ee,I,S)),27*(h+d+u+f+p)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}_dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}};var Xa=class i extends yi{constructor(t,e,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=ap(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new ke(this.width,this.height,{type:He,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new we({defines:Object.assign({},Va.defines),uniforms:yn.clone(Va.uniforms),vertexShader:Va.vertexShader,fragmentShader:Va.fragmentShader,blending:Xe,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ma,this.normalMaterial.blending=Xe,this.pdMaterial=new we({defines:Object.assign({},Wa.defines),uniforms:yn.clone(Wa.uniforms),vertexShader:Wa.vertexShader,fragmentShader:Wa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new we({defines:Object.assign({},Ga.defines),uniforms:yn.clone(Ga.uniforms),vertexShader:Ga.vertexShader,fragmentShader:Ga.fragmentShader,blending:Xe}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new we({uniforms:yn.clone(os.uniforms),vertexShader:os.vertexShader,fragmentShader:os.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ra,blendDst:Ss,blendEquation:Gn,blendSrcAlpha:Aa,blendDstAlpha:Ss,blendEquationAlpha:Gn}),this.blendMaterial=new we({uniforms:yn.clone(lc.uniforms),vertexShader:lc.vertexShader,fragmentShader:lc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:pl,blendSrc:Ra,blendDst:Ss,blendEquation:Gn,blendSrcAlpha:Aa,blendDstAlpha:Ss,blendEquationAlpha:Gn}),this._fsQuad=new vi(null),this._originalClearColor=new Vt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new fi,this.depthTexture.format=gi,this.depthTexture.type=rs,this.normalRenderTarget=new ke(this.width,this.height,{minFilter:Ne,magFilter:Ne,type:He,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Su(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Xe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Xe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Xe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Xe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Xe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,s,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=o,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_renderOverride(t,e,n,s,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new cc,n=t*t*4,s=new Uint8Array(n);for(let a=0;a<t;a++)for(let o=0;o<t;o++){let l=a,c=o;s[(a*t+o)*4]=(e.noise(l,c)*.5+.5)*255,s[(a*t+o)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(a*t+o)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(a*t+o)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let r=new Ki(s,t,t,Tn,nn);return r.wrapS=wn,r.wrapT=wn,r.needsUpdate=!0,r}};Xa.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var op={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Vt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Pr=class i extends yi{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ot(t.x,t.y):new ot(256,256),this.clearColor=new Vt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ke(r,a,{type:He,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new ke(r,a,{type:He,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new ke(r,a,{type:He,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=op;this.highPassUniforms=yn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new we({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ot(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=yn.clone(os.uniforms),this.blendMaterial=new we({uniforms:this.copyUniforms,vertexShader:os.vertexShader,fragmentShader:os.fragmentShader,premultipliedAlpha:!0,blending:Ms,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Vt,this._oldClearAlpha=1,this._basic=new mn,this._fsQuad=new vi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ot(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new we({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ot(.5,.5)},direction:{value:new ot(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new we({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Pr.BlurDirectionX=new ot(1,0);Pr.BlurDirectionY=new ot(0,1);var hc=class extends yi{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof we?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=yn.clone(t.uniforms),this.material=new we({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new vi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var lp={name:"VignetteShader",uniforms:{tDiffuse:{value:null},offset:{value:1},darkness:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float offset;
		uniform float darkness;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			// Eskil's vignette

			vec4 texel = texture2D( tDiffuse, vUv );
			vec2 uv = ( vUv - vec2( 0.5 ) ) * vec2( offset );
			gl_FragColor = vec4( mix( texel.rgb, vec3( 1.0 - darkness ), dot( uv, uv ) ), texel.a );

		}`};var qa={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};var uc=class extends yi{constructor(t,e,n){super(),this.scene=t,this.camera=e;let s=n.focus!==void 0?n.focus:1,r=n.aperture!==void 0?n.aperture:.025,a=n.maxblur!==void 0?n.maxblur:1;this._renderTargetDepth=new ke(1,1,{minFilter:Ne,magFilter:Ne,type:He}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new gr,this._materialDepth.depthPacking=Yh,this._materialDepth.blending=Xe;let o=yn.clone(qa.uniforms);o.tDepth.value=this._renderTargetDepth.texture,o.focus.value=s,o.aspect.value=e.aspect,o.aperture.value=r,o.maxblur.value=a,o.nearClip.value=e.near,o.farClip.value=e.far,this.materialBokeh=new we({defines:Object.assign({},qa.defines),uniforms:o,vertexShader:qa.vertexShader,fragmentShader:qa.fragmentShader}),this.uniforms=o,this._fsQuad=new vi(this.materialBokeh),this._oldClearColor=new Vt}render(t,e,n){this.scene.overrideMaterial=this._materialDepth,t.getClearColor(this._oldClearColor);let s=t.getClearAlpha(),r=t.autoClear;t.autoClear=!1,t.setClearColor(16777215),t.setClearAlpha(1),t.setRenderTarget(this._renderTargetDepth),t.clear(),t.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),t.clear(),this._fsQuad.render(t)),this.scene.overrideMaterial=null,t.setClearColor(this._oldClearColor),t.setClearAlpha(s),t.autoClear=r}setSize(t,e){this.materialBokeh.uniforms.aspect.value=t/e,this._renderTargetDepth.setSize(t,e)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}};var Pu={};xm(Pu,{APRON:()=>Qt,ARCH:()=>Oi,BALL_R:()=>vn,DRAIN_GUIDES:()=>wu,FLIPPER:()=>Ay,FLIPPERS:()=>En,GATE:()=>Cs,GI_SPOTS_UPPER:()=>yc,INLANE_GUIDES:()=>Dr,INSERTS:()=>Cu,ORBIT:()=>Ry,ORBIT_GUIDES:()=>mc,ORBIT_POST:()=>gc,ORBIT_POSTS:()=>Eu,ORBIT_ROLLOVERS:()=>Au,ORBIT_WEDGES:()=>Tu,PF:()=>Lt,POP:()=>Lr,POPS:()=>Si,RAMP:()=>Ur,RAMPS:()=>Is,RETURN_LANES:()=>Bi,SAUCER:()=>Mi,SHOOTER:()=>fe,SLINGS:()=>Ir,STAR_POSTS:()=>pc,TARGETS:()=>Wn,TARGET_GUIDES:()=>xc,TARGET_POSTS:()=>Ru,TARGET_RUBBER:()=>bi,TOP_LANES:()=>Ps,WIRE:()=>_c,batParts:()=>fc});var Fi={width:514.35,length:1066.8,thickness:12.7,slope:6.5,ball:27,centreX:237.175,orbitLane:40,throat:54},mt={left_flipper:{id:"left_flipper",type:"flipper",name:"Left flipper",x:177.141,y:164.34,rotation:-25,side:"left",pivot:[148.275,177.8],rest:-25,stroke:52,baseR:12.5,tipR:7.75,reach:68.45,width:88.7,length:25,height:24},right_flipper:{id:"right_flipper",type:"flipper",name:"Right flipper",x:297.209,y:164.34,rotation:205,side:"right",pivot:[326.075,177.8],rest:205,stroke:52,baseR:12.5,tipR:7.75,reach:68.45,width:88.7,length:25,height:24},left_sling:{id:"left_sling",type:"sling",name:"Left slingshot",x:116.838,y:305.327,side:"left",posts:[[98.5,355],[135.177,255.654],[98.5,278.1]],roles:["upper_inner","lower","upper_outer"],postRadius:4.75,contactRadius:11.1},left_inlane_guide:{id:"left_inlane_guide",type:"plastic",name:"Left inlane guide \xB7 contact plate",x:91.979,y:280.268,z:12,thickness:3,holes:[[62.669,238.124,4.5],[113.521,202.549,4.5]],collidable:!0,assembly:"blank_left_inlane_guide",notes:"Original authored adaptation inspired by pinball flipper ball guide, Tinkot, CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/); no source mesh copied.",outline:[[51.4,375.097],[51.379,375.436],[51.315,375.769],[51.21,376.091],[51.066,376.398],[50.884,376.684],[50.668,376.945],[50.421,377.178],[50.147,377.377],[49.85,377.54],[49.534,377.665],[49.206,377.749],[48.87,377.792],[48.531,377.792],[48.194,377.749],[47.866,377.665],[47.55,377.54],[47.253,377.377],[46.979,377.178],[46.732,376.945],[46.516,376.684],[46.334,376.398],[46.19,376.091],[46.085,375.769],[46.021,375.436],[46,375.097],[46,229.217],[118.937,184.579],[120.385,183.818],[121.919,183.253],[123.514,182.894],[125.142,182.745],[126.776,182.81],[128.387,183.088],[129.949,183.574],[131.433,184.259],[132.816,185.132],[134.072,186.179],[135.181,187.38],[136.124,188.716],[136.885,190.163],[137.45,191.698],[137.81,193.293],[137.958,194.921],[137.893,196.555],[137.615,198.166],[137.13,199.727],[136.444,201.212],[135.571,202.594],[134.525,203.85],[133.323,204.96],[131.987,205.903],[64.784,247.031],[61.862,249.087],[59.225,251.498],[56.916,254.226],[54.974,257.225],[53.43,260.447],[52.308,263.84],[51.628,267.347],[51.4,270.913]]},left_inlane_guide_cover:{id:"left_inlane_guide_cover",type:"plastic",name:"Left inlane guide \xB7 cover plate",x:87.264,y:291.085,z:30.8,thickness:3,holes:[[62.669,238.124,4.5],[113.521,202.549,4.5],[46,390,4.5]],collidable:!0,assembly:"blank_left_inlane_guide",notes:"Original authored adaptation inspired by pinball flipper ball guide, Tinkot, CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/); no source mesh copied.",outline:[[54,380.995],[55.102,382.11],[56.049,383.359],[56.827,384.72],[57.421,386.171],[57.821,387.686],[58.022,389.241],[58.018,390.808],[57.812,392.362],[57.405,393.876],[56.805,395.324],[56.022,396.682],[55.07,397.927],[53.963,399.038],[52.722,399.995],[51.368,400.784],[49.922,401.389],[48.41,401.802],[46.857,402.015],[45.289,402.025],[43.734,401.83],[42.217,401.436],[40.764,400.848],[39.399,400.076],[38.147,399.133],[37.027,398.036],[36.06,396.803],[35.26,395.455],[34.643,394.014],[34.218,392.505],[33.992,390.954],[33.97,389.386],[34.152,387.829],[34.534,386.309],[35.11,384.851],[35.871,383.481],[36.804,382.221],[37.892,381.092],[39.117,380.115],[40.459,379.305],[41.895,378.676],[43.4,378.238],[43.4,227.759],[117.58,182.361],[119.329,181.443],[121.182,180.76],[123.109,180.325],[125.076,180.146],[127.05,180.224],[128.996,180.56],[130.882,181.147],[132.675,181.975],[134.345,183.03],[135.863,184.294],[137.203,185.745],[138.342,187.359],[139.261,189.107],[139.943,190.961],[140.378,192.887],[140.557,194.854],[140.479,196.828],[140.143,198.774],[139.556,200.66],[138.728,202.454],[137.673,204.123],[136.409,205.641],[134.958,206.981],[133.345,208.12],[66.141,249.249],[63.49,251.114],[61.098,253.301],[59.004,255.775],[57.242,258.496],[55.841,261.419],[54.824,264.497],[54.207,267.679],[54,270.913]]},left_inlane_guide_stack_1:{id:"left_inlane_guide_stack_1",type:"post",name:"Left inlane guide \xB7 spacer stack 1",x:62.669,y:238.124,width:8,length:8,height:30,postType:"pin",profile:"stacked_return_spacer_v1"},left_inlane_guide_stack_2:{id:"left_inlane_guide_stack_2",type:"post",name:"Left inlane guide \xB7 spacer stack 2",x:113.521,y:202.549,width:8,length:8,height:30,postType:"pin",profile:"stacked_return_spacer_v1"},left_outlane_post:{id:"left_outlane_post",type:"post",name:"Left outlane post",x:46,y:390,width:18.891,length:18.891,height:26.987,postType:"rubber"},left_inlane:{id:"left_inlane",type:"rollover",name:"Left inlane rollover",x:69.4,y:315,rotation:90},left_outlane:{id:"left_outlane",type:"rollover",name:"Left outlane rollover",x:26,y:315,rotation:90},right_sling:{id:"right_sling",type:"sling",name:"Right slingshot",x:357.512,y:305.327,side:"right",posts:[[375.85,355],[339.173,255.654],[375.85,278.1]],roles:["upper_inner","lower","upper_outer"],postRadius:4.75,contactRadius:11.1},right_inlane_guide:{id:"right_inlane_guide",type:"plastic",name:"Right inlane guide \xB7 contact plate",x:382.371,y:280.268,z:12,thickness:3,holes:[[411.681,238.124,4.5],[360.829,202.549,4.5]],collidable:!0,assembly:"blank_right_inlane_guide",notes:"Original authored adaptation inspired by pinball flipper ball guide, Tinkot, CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/); no source mesh copied.",outline:[[422.95,270.913],[422.722,267.347],[422.042,263.84],[420.92,260.447],[419.376,257.225],[417.434,254.226],[415.125,251.498],[412.489,249.087],[409.566,247.031],[342.363,205.903],[341.027,204.96],[339.826,203.85],[338.779,202.594],[337.906,201.212],[337.221,199.727],[336.735,198.166],[336.457,196.555],[336.392,194.921],[336.54,193.293],[336.9,191.698],[337.465,190.163],[338.226,188.716],[339.169,187.38],[340.278,186.179],[341.534,185.132],[342.917,184.259],[344.401,183.574],[345.963,183.088],[347.574,182.81],[349.208,182.745],[350.836,182.894],[352.431,183.253],[353.965,183.818],[355.413,184.579],[428.35,229.217],[428.35,375.097],[428.329,375.436],[428.265,375.769],[428.16,376.091],[428.016,376.398],[427.834,376.684],[427.618,376.945],[427.371,377.178],[427.097,377.377],[426.8,377.54],[426.484,377.665],[426.156,377.749],[425.82,377.792],[425.481,377.792],[425.144,377.749],[424.816,377.665],[424.5,377.54],[424.203,377.377],[423.929,377.178],[423.682,376.945],[423.466,376.684],[423.284,376.398],[423.14,376.091],[423.035,375.769],[422.971,375.436],[422.95,375.097]]},right_inlane_guide_cover:{id:"right_inlane_guide_cover",type:"plastic",name:"Right inlane guide \xB7 cover plate",x:387.086,y:291.085,z:30.8,thickness:3,holes:[[411.681,238.124,4.5],[360.829,202.549,4.5],[428.35,390,4.5]],collidable:!0,assembly:"blank_right_inlane_guide",notes:"Original authored adaptation inspired by pinball flipper ball guide, Tinkot, CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/); no source mesh copied.",outline:[[420.35,270.913],[420.143,267.679],[419.526,264.497],[418.509,261.419],[417.108,258.496],[415.346,255.775],[413.252,253.301],[410.86,251.114],[408.209,249.249],[341.005,208.12],[339.392,206.981],[337.941,205.641],[336.677,204.123],[335.622,202.454],[334.794,200.66],[334.207,198.774],[333.871,196.828],[333.793,194.854],[333.972,192.887],[334.407,190.961],[335.09,189.107],[336.008,187.359],[337.147,185.745],[338.487,184.294],[340.005,183.03],[341.675,181.975],[343.468,181.147],[345.354,180.56],[347.301,180.224],[349.274,180.146],[351.241,180.325],[353.168,180.76],[355.021,181.443],[356.77,182.361],[430.95,227.759],[430.95,378.238],[432.455,378.676],[433.891,379.305],[435.233,380.115],[436.459,381.092],[437.547,382.221],[438.479,383.481],[439.24,384.851],[439.816,386.309],[440.198,387.829],[440.38,389.386],[440.358,390.954],[440.132,392.505],[439.707,394.014],[439.09,395.455],[438.291,396.803],[437.323,398.036],[436.203,399.133],[434.951,400.076],[433.587,400.848],[432.133,401.436],[430.616,401.83],[429.061,402.025],[427.494,402.015],[425.941,401.802],[424.428,401.389],[422.983,400.784],[421.628,399.995],[420.387,399.038],[419.28,397.927],[418.328,396.682],[417.545,395.324],[416.945,393.876],[416.538,392.362],[416.332,390.808],[416.329,389.241],[416.529,387.686],[416.93,386.171],[417.524,384.72],[418.301,383.359],[419.248,382.11],[420.35,380.995]]},right_inlane_guide_stack_1:{id:"right_inlane_guide_stack_1",type:"post",name:"Right inlane guide \xB7 spacer stack 1",x:411.681,y:238.124,width:8,length:8,height:30,postType:"pin",profile:"stacked_return_spacer_v1"},right_inlane_guide_stack_2:{id:"right_inlane_guide_stack_2",type:"post",name:"Right inlane guide \xB7 spacer stack 2",x:360.829,y:202.549,width:8,length:8,height:30,postType:"pin",profile:"stacked_return_spacer_v1"},right_outlane_post:{id:"right_outlane_post",type:"post",name:"Right outlane post",x:428.35,y:390,width:18.891,length:18.891,height:26.987,postType:"rubber"},right_inlane:{id:"right_inlane",type:"rollover",name:"Right inlane rollover",x:404.95,y:315,rotation:90},right_outlane:{id:"right_outlane",type:"rollover",name:"Right outlane rollover",x:448.35,y:315,rotation:90},apron:{id:"apron",type:"apron",name:"Apron",x:240.175,y:110.562,width:468.35,length:221.123,height:47.6,lip:{centre:[237.175,238.705],radius:149.8,from:[303.525,104.4],to:[170.825,104.4]},outline:[[6,0],[474.35,0],[474.35,221.123],[303.525,105.9],[303.525,104.4],[295.717,100.817],[287.716,97.688],[279.549,95.023],[271.243,92.83],[262.824,91.117],[254.322,89.889],[245.762,89.151],[237.175,88.905],[228.588,89.151],[220.029,89.889],[211.526,91.117],[203.107,92.83],[194.801,95.023],[186.634,97.688],[178.633,100.817],[170.825,104.4],[170.825,105.9],[6,217.076]]},left_drain_guide:{id:"left_drain_guide",type:"guide",name:"Left drain guide (under apron)",x:147.5,y:88,rotation:-236.31,thickness:1.6,height:28.575,from:[167,101],to:[128,75]},right_drain_guide:{id:"right_drain_guide",type:"guide",name:"Right drain guide (under apron)",x:269.5,y:87.5,rotation:-250.201,thickness:1.6,height:28.575,from:[307,101],to:[232,74]},shooter:{id:"shooter",type:"plunger",name:"Shooter lane",x:491.35,y:52.2,width:34,length:104.4,height:30},boundary_left:{id:"boundary_left",type:"guide",name:"Left side rail",x:3,y:468.4,thickness:6,height:28.575,from:[3,6],to:[3,930.8]},boundary_right:{id:"boundary_right",type:"guide",name:"Right side rail",x:511.35,y:458.4,thickness:6,height:28.575,from:[511.35,6],to:[511.35,910.8]},boundary_top:{id:"boundary_top",type:"guide",name:"Top rail",x:247.175,y:1063.8,rotation:-90,thickness:6,height:28.575,from:[136,1063.8],to:[358.35,1063.8]},top_arch_left:{id:"top_arch_left",type:"guide",name:"Top arch (left)",x:69.5,y:997.3,thickness:6,height:28.575,smooth:!1,points:[[3,930.8],[3.506,942.392],[5.021,953.895],[7.532,965.223],[11.021,976.289],[15.461,987.008],[20.819,997.3],[27.053,1007.086],[34.116,1016.291],[41.955,1024.845],[50.509,1032.684],[59.714,1039.747],[69.5,1045.981],[79.792,1051.339],[90.511,1055.779],[101.577,1059.268],[112.905,1061.779],[124.408,1063.294],[136,1063.8]],line:[[3,930.8],[3.506,942.392],[5.021,953.895],[7.532,965.223],[11.021,976.289],[15.461,987.008],[20.819,997.3],[27.053,1007.086],[34.116,1016.291],[41.955,1024.845],[50.509,1032.684],[59.714,1039.747],[69.5,1045.981],[79.792,1051.339],[90.511,1055.779],[101.577,1059.268],[112.905,1061.779],[124.408,1063.294],[136,1063.8]]},top_arch_right:{id:"top_arch_right",type:"guide",name:"Top arch (right)",x:434.85,y:987.3,thickness:6,height:28.575,smooth:!1,points:[[358.35,1063.8],[371.685,1063.218],[384.918,1061.476],[397.949,1058.587],[410.679,1054.573],[423.011,1049.465],[434.85,1043.302],[446.107,1036.13],[456.697,1028.005],[466.537,1018.987],[475.555,1009.147],[483.68,998.557],[490.852,987.3],[497.015,975.461],[502.123,963.129],[506.137,950.399],[509.026,937.368],[510.768,924.135],[511.35,910.8]],line:[[358.35,1063.8],[371.685,1063.218],[384.918,1061.476],[397.949,1058.587],[410.679,1054.573],[423.011,1049.465],[434.85,1043.302],[446.107,1036.13],[456.697,1028.005],[466.537,1018.987],[475.555,1009.147],[483.68,998.557],[490.852,987.3],[497.015,975.461],[502.123,963.129],[506.137,950.399],[509.026,937.368],[510.768,924.135],[511.35,910.8]]},shooter_divider:{id:"shooter_divider",type:"guide",name:"Shooter lane divider",x:471.35,y:530.562,thickness:6,height:28.575,from:[471.35,221.123],to:[471.35,840]},shooter_gate:{id:"shooter_gate",type:"gate",name:"Shooter lane gate",x:485.675,y:857.509,rotation:40,width:51.368,length:8,height:28.575,from:[466,841],to:[505.35,874.019],oneWay:!0},left_orbit_guide:{id:"left_orbit_guide",type:"guide",name:"Left orbit guide",x:87.721,y:801.144,thickness:1.6,height:28.575,smooth:!1,points:[[109.535,588.118],[56.071,680.721],[53.284,686.075],[50.973,691.653],[49.158,697.41],[47.851,703.304],[47.063,709.289],[46.8,715.321],[46.8,921.665],[47.138,929.597],[48.15,937.471],[49.829,945.231],[52.162,952.82],[55.132,960.183],[58.719,967.267],[69,980],[79,987],[90,993]],line:[[109.535,588.118],[56.071,680.721],[53.284,686.075],[50.973,691.653],[49.158,697.41],[47.851,703.304],[47.063,709.289],[46.8,715.321],[46.8,921.665],[47.138,929.597],[48.15,937.471],[49.829,945.231],[52.162,952.82],[55.132,960.183],[58.719,967.267],[69,980],[79,987],[90,993]],mounts:[{postId:"left_orbit_post"},{at:.24,side:-1},{at:.5659,side:-1},{at:.9493,side:-1}]},right_orbit_guide:{id:"right_orbit_guide",type:"guide",name:"Right orbit guide",x:396.182,y:747.813,thickness:1.6,height:28.575,smooth:!0,points:[[384,991],[426,937],[427.55,715.321],[427.287,709.289],[426.499,703.304],[425.192,697.41],[423.377,691.653],[421.066,686.075],[418.279,680.721],[364.815,588.118]],line:[[384,991],[387.07,987.26],[390.257,983.718],[393.53,980.32],[396.857,977.012],[400.205,973.739],[403.542,970.449],[406.837,967.087],[410.056,963.599],[413.169,959.931],[416.142,956.029],[418.944,951.839],[421.542,947.306],[423.905,942.378],[426,937],[427.048,933.698],[428.006,930.095],[428.88,926.21],[429.671,922.056],[430.382,917.651],[431.017,913.009],[431.578,908.146],[432.068,903.079],[432.491,897.822],[432.849,892.392],[433.145,886.804],[433.382,881.074],[433.563,875.219],[433.692,869.252],[433.77,863.191],[433.802,857.051],[433.789,850.847],[433.735,844.596],[433.643,838.313],[433.516,832.014],[433.357,825.715],[433.168,819.431],[432.953,813.178],[432.715,806.972],[432.456,800.828],[432.18,794.763],[431.889,788.792],[431.587,782.93],[431.276,777.194],[430.96,771.599],[430.641,766.161],[430.322,760.896],[430.007,755.819],[429.697,750.947],[429.397,746.294],[429.109,741.877],[428.836,737.711],[428.581,733.812],[428.347,730.196],[428.137,726.879],[427.954,723.876],[427.801,721.203],[427.681,718.875],[427.596,716.909],[427.55,715.321],[427.46,711.761],[427.287,709.289],[426.958,706.288],[426.499,703.304],[425.91,700.343],[425.192,697.41],[424.347,694.512],[423.377,691.653],[422.282,688.839],[421.066,686.075],[419.941,683.784],[418.279,680.721],[417.245,678.856],[415.952,676.556],[414.418,673.851],[412.662,670.774],[410.704,667.357],[408.562,663.632],[406.255,659.63],[403.803,655.384],[401.224,650.925],[398.537,646.285],[395.762,641.496],[392.917,636.59],[390.021,631.6],[387.094,626.556],[384.154,621.49],[381.22,616.436],[378.312,611.424],[375.448,606.486],[372.647,601.655],[369.929,596.962],[367.312,592.439],[364.815,588.118]]},left_orbit_wedge:{id:"left_orbit_wedge",type:"guide",name:"Left orbit throat wedge",x:33.292,y:577.195,thickness:1.6,height:28.575,smooth:!0,points:[[5.2,690],[5.66,679.472],[7.035,669.023],[9.316,658.735],[12.485,648.684],[16.518,638.948],[21.384,629.6],[67,553],[58,546],[52,534],[5.2,464.39]],line:[[5.2,690],[5.319,686.488],[5.439,682.975],[5.66,679.472],[6.017,675.977],[6.476,672.491],[7.035,669.023],[7.696,665.573],[8.457,662.141],[9.316,658.735],[10.275,655.355],[11.332,652.002],[12.485,648.684],[13.735,645.401],[15.08,642.153],[16.518,638.948],[17.873,636.125],[19.321,633.345],[21.384,629.6],[22.91,627.044],[24.969,623.856],[27.484,620.117],[30.376,615.907],[33.568,611.309],[36.983,606.403],[40.542,601.269],[44.168,595.99],[47.783,590.646],[51.309,585.318],[54.669,580.087],[57.785,575.034],[60.578,570.241],[62.973,565.788],[64.89,561.756],[66.252,558.227],[66.981,555.281],[67,553],[64.865,550.015],[61.248,548.224],[58,546],[55.979,542.675],[54.393,538.84],[52,534],[50.431,531.379],[48.575,528.402],[46.46,525.102],[44.114,521.514],[41.564,517.672],[38.839,513.612],[35.966,509.368],[32.972,504.974],[29.887,500.464],[26.736,495.874],[23.548,491.238],[20.352,486.591],[17.173,481.966],[14.041,477.399],[10.983,472.925],[8.027,468.577],[5.2,464.39]]},left_orbit_post:{id:"left_orbit_post",type:"post",name:"Left orbit post",x:110.91,y:585.736,width:11,length:11,height:30},right_orbit_post:{id:"right_orbit_post",type:"post",name:"Right orbit post",x:363.44,y:585.736,width:11,length:11,height:30},left_orbit:{id:"left_orbit",type:"rollover",name:"Left orbit rollover",x:26,y:800,rotation:90},right_orbit:{id:"right_orbit",type:"rollover",name:"Right orbit rollover",x:448.35,y:800,rotation:90},left_ramp:{id:"left_ramp",type:"ramp",name:"Left ramp",x:176,y:520,rampType:"plastic",rampWidth:42,widthStart:52,mouthLength:60,wallHeight:28,switches:[.82],entry:"flap",exit:"wireform",points:[[141,602,0],[105,670,14],[95,764,38],[121,833,58],[124,862,66],[123.212,869.999,66.688],[120.879,877.69,67.375],[117.09,884.778,68.063],[111.991,890.991,68.75],[105.778,896.09,69.438],[98.69,899.879,70.125],[90.999,902.212,70.813],[83,903,71.5],[75,903,72]],profile:[[141,602,0,52],[138.368,606.821,.983,51.764],[135.634,611.581,1.938,51.118],[132.825,616.296,2.872,50.153],[129.969,620.983,3.794,48.962],[127.095,625.659,4.71,47.637],[124.23,630.341,5.629,46.268],[121.403,635.045,6.558,44.949],[118.641,639.788,7.505,43.771],[115.971,644.587,8.478,42.825],[113.423,649.458,9.484,42.204],[111.024,654.418,10.532,42],[108.802,659.484,11.629,42],[106.785,664.672,12.782,42],[105,670,14,42],[103.513,675.061,15.184,42],[102.109,680.29,16.428,42],[100.793,685.666,17.726,42],[99.57,691.167,19.071,42],[98.448,696.77,20.457,42],[97.432,702.454,21.878,42],[96.529,708.197,23.328,42],[95.744,713.976,24.799,42],[95.083,719.77,26.287,42],[94.552,725.556,27.784,42],[94.158,731.313,29.284,42],[93.907,737.018,30.781,42],[93.804,742.65,32.268,42],[93.856,748.186,33.741,42],[94.069,753.604,35.191,42],[94.448,758.883,36.613,42],[95,764,38,42],[95.999,769.821,39.601,42],[97.459,775.631,41.231,42],[99.3,781.409,42.878,42],[101.441,787.135,44.533,42],[103.803,792.789,46.184,42],[106.305,798.35,47.822,42],[108.867,803.799,49.434,42],[111.409,809.116,51.012,42],[113.849,814.279,52.544,42],[116.109,819.269,54.019,42],[118.108,824.066,55.427,42],[119.765,828.65,56.758,42],[121,833,58,42],[122.166,838.683,59.64,42],[122.985,844.151,61.254,42],[123.518,849.309,62.771,42],[123.824,854.066,64.116,42],[123.965,858.327,65.217,42],[124,862,66,42],[123.802,866.316,66.49,42],[123.212,869.999,66.688,42],[122.233,873.901,67.031,42],[120.879,877.69,67.375,42],[119.158,881.327,67.719,42],[117.09,884.778,68.063,42],[114.692,888.009,68.406,42],[111.991,890.991,68.75,42],[109.009,893.692,69.094,42],[105.778,896.09,69.438,42],[102.327,898.158,69.781,42],[98.69,899.879,70.125,42],[94.901,901.233,70.469,42],[90.999,902.212,70.813,42],[87.02,902.752,71.168,42],[83,903,71.5,42],[79.002,903.049,71.762,42],[75,903,72,42]],supports:[{at:.3,side:1,x:69.197,y:690.563,z:20.374},{at:.24,side:-1,x:132.109,y:683.861,z:15.433},{at:.66,side:1,x:88.011,y:829.704,z:53.457},{at:.96,side:-1,x:92.91,y:932.127,z:71.001}]},left_wireform:{id:"left_wireform",type:"ramp",name:"Left wireform",x:75,y:903,rampType:"wire_2",rampWidth:36,sideRails:[{side:-1,from:0,to:.2032}],entry:"ramp",exit:"drop",points:[[75,903,67],[63,903,66.6],[56.757,902.385,66.4],[50.754,900.564,66.2],[45.222,897.607,66],[40.373,893.627,65.8],[36.393,888.778,65.6],[33.436,883.246,65.4],[31.615,877.243,65.2],[31,871,65],[31,760,59],[31,690,54.5],[37,620,50.5],[46,560,47],[56,500,44.5],[64,455,43],[69,334,42]],profile:[[75,903,67,36],[70.855,903.037,66.861,36],[66.711,903.073,66.723,36],[63,903,66.6,36],[59.736,902.8,66.495,36],[56.757,902.385,66.4,36],[53.711,901.621,66.3,36],[50.754,900.564,66.2,36],[47.916,899.22,66.1,36],[45.222,897.607,66,36],[42.7,895.735,65.9,36],[40.373,893.627,65.8,36],[38.265,891.3,65.7,36],[36.393,888.778,65.6,36],[34.78,886.084,65.5,36],[33.436,883.246,65.4,36],[32.379,880.289,65.3,36],[31.615,877.243,65.2,36],[31.217,874.62,65.129,36],[31,871,65,36],[30.901,868.358,64.881,36],[30.824,864.958,64.718,36],[30.766,860.871,64.515,36],[30.726,856.168,64.277,36],[30.701,850.92,64.007,36],[30.691,845.198,63.709,36],[30.693,839.073,63.386,36],[30.705,832.616,63.043,36],[30.726,825.898,62.683,36],[30.753,818.991,62.31,36],[30.785,811.964,61.928,36],[30.821,804.89,61.54,36],[30.857,797.839,61.152,36],[30.893,790.882,60.765,36],[30.927,784.091,60.384,36],[30.956,777.536,60.014,36],[30.979,771.288,59.657,36],[30.995,765.419,59.318,36],[31,760,59,36],[30.981,753.603,58.615,36],[30.931,747.401,58.231,36],[30.86,741.366,57.847,36],[30.778,735.471,57.464,36],[30.697,729.687,57.083,36],[30.626,723.987,56.704,36],[30.576,718.344,56.327,36],[30.557,712.729,55.954,36],[30.579,707.115,55.584,36],[30.654,701.474,55.218,36],[30.79,695.778,54.857,36],[31,690,54.5,36],[31.278,684.145,54.148,36],[31.608,678.262,53.801,36],[31.988,672.36,53.459,36],[32.414,666.45,53.12,36],[32.881,660.54,52.785,36],[33.386,654.641,52.453,36],[33.925,648.762,52.124,36],[34.495,642.912,51.797,36],[35.091,637.101,51.471,36],[35.709,631.339,51.147,36],[36.347,625.636,50.823,36],[37,620,50.5,36],[37.691,614.362,50.17,36],[38.422,608.794,49.837,36],[39.19,603.284,49.503,36],[39.988,597.821,49.17,36],[40.812,592.395,48.838,36],[41.656,586.995,48.511,36],[42.516,581.61,48.19,36],[43.385,576.228,47.877,36],[44.259,570.84,47.573,36],[45.132,565.434,47.28,36],[46,560,47,36],[46.875,554.511,46.732,36],[47.769,548.971,46.473,36],[48.678,543.398,46.224,36],[49.598,537.814,45.982,36],[50.525,532.236,45.749,36],[51.454,526.684,45.524,36],[52.383,521.179,45.306,36],[53.305,515.738,45.095,36],[54.219,510.382,44.891,36],[55.118,505.129,44.693,36],[56,500,44.5,36],[57.055,494.217,44.278,36],[58.131,488.817,44.066,36],[59.21,483.631,43.863,36],[60.273,478.49,43.669,36],[61.302,473.226,43.486,36],[62.278,467.669,43.313,36],[63.184,461.65,43.151,36],[64,455,43,36],[64.453,450.516,42.914,36],[64.863,445.783,42.835,36],[65.236,440.82,42.763,36],[65.572,435.646,42.698,36],[65.877,430.28,42.639,36],[66.153,424.742,42.584,36],[66.402,419.05,42.534,36],[66.63,413.224,42.489,36],[66.838,407.283,42.447,36],[67.03,401.247,42.407,36],[67.209,395.133,42.37,36],[67.378,388.963,42.335,36],[67.541,382.753,42.301,36],[67.701,376.525,42.267,36],[67.861,370.297,42.234,36],[68.024,364.087,42.2,36],[68.193,357.917,42.164,36],[68.373,351.803,42.127,36],[68.565,345.767,42.088,36],[68.773,339.826,42.046,36],[69,334,42,36]],supports:[{at:.05,side:1,x:58.016,y:877.69,z:66.024},{at:.39,side:1,x:54.378,y:699.08,z:55.03},{at:.6197,side:-1,x:22.444,y:557.469,z:47.062},{at:.9,side:-1,x:43.169,y:407.139,z:42.452}]},right_ramp:{id:"right_ramp",type:"ramp",name:"Right ramp",x:298.35,y:520,rampType:"plastic",rampWidth:42,widthStart:52,mouthLength:60,wallHeight:28,switches:[.82],entry:null,exit:"wireform",points:[[333,601,0],[374,678,14],[376,770,38],[352,823,58],[350.35,862,66],[351.138,869.999,66.688],[353.471,877.69,67.375],[357.26,884.778,68.063],[362.359,890.991,68.75],[368.572,896.09,69.438],[375.66,899.879,70.125],[383.351,902.212,70.813],[391.35,903,71.5],[399.35,903,72]],profile:[[333,601,0,52],[335.813,606.11,.915,51.735],[338.762,611.178,1.798,51.008],[341.814,616.217,2.657,49.926],[344.933,621.235,3.5,48.601],[348.087,626.242,4.335,47.146],[351.241,631.25,5.17,45.681],[354.361,636.268,6.013,44.321],[357.412,641.306,6.872,43.183],[360.361,646.375,7.755,42.377],[363.174,651.484,8.669,42.011],[365.817,656.645,9.624,42],[368.255,661.867,10.626,42],[370.454,667.159,11.684,42],[372.38,672.534,12.806,42],[374,678,14,42],[375.323,683.464,15.233,42],[376.467,689.107,16.532,42],[377.434,694.9,17.889,42],[378.23,700.811,19.299,42],[378.859,706.81,20.755,42],[379.325,712.868,22.251,42],[379.632,718.954,23.78,42],[379.786,725.038,25.337,42],[379.79,731.089,26.914,42],[379.649,737.077,28.506,42],[379.367,742.973,30.105,42],[378.949,748.745,31.706,42],[378.399,754.365,33.303,42],[377.721,759.8,34.888,42],[376.92,765.022,36.456,42],[376,770,38,42],[374.584,775.54,39.837,42],[372.697,780.844,41.749,42],[370.443,785.941,43.711,42],[367.93,790.863,45.696,42],[365.264,795.64,47.677,42],[362.551,800.304,49.628,42],[359.897,804.885,51.522,42],[357.409,809.415,53.333,42],[355.192,813.923,55.034,42],[353.354,818.441,56.598,42],[352,823,58,42],[350.897,828.998,59.6,42],[350.244,835.234,61.072,42],[349.944,841.479,62.402,42],[349.902,847.505,63.575,42],[350.02,853.086,64.575,42],[350.202,857.993,65.389,42],[350.35,862,66,42],[350.588,866.389,66.457,42],[351.138,869.999,66.688,42],[352.117,873.901,67.031,42],[353.471,877.69,67.375,42],[355.192,881.327,67.719,42],[357.26,884.778,68.063,42],[359.658,888.009,68.406,42],[362.359,890.991,68.75,42],[365.341,893.692,69.094,42],[368.572,896.09,69.438,42],[372.023,898.158,69.781,42],[375.66,899.879,70.125,42],[379.449,901.233,70.469,42],[383.351,902.212,70.813,42],[387.33,902.752,71.168,42],[391.35,903,71.5,42],[395.348,903.049,71.762,42],[399.35,903,72,42]],supports:[{at:.3,side:-1,x:407.103,y:691.181,z:17.954},{at:.24,side:1,x:344.342,y:683.155,z:13.27},{at:.66,side:-1,x:382.1,y:827.126,z:55.704},{at:.96,side:1,x:381.348,y:932.114,z:70.993}]},right_wireform:{id:"right_wireform",type:"ramp",name:"Right wireform",x:399.35,y:903,rampType:"wire_2",rampWidth:36,sideRails:[{side:1,from:0,to:.2032}],entry:"ramp",exit:"drop",points:[[399.35,903,67],[411.35,903,66.6],[417.593,902.385,66.4],[423.596,900.564,66.2],[429.128,897.607,66],[433.977,893.627,65.8],[437.957,888.778,65.6],[440.914,883.246,65.4],[442.735,877.243,65.2],[443.35,871,65],[443.35,760,59],[443.35,690,54.5],[437.35,620,50.5],[428.35,560,47],[418.35,500,44.5],[409,411,43],[403,336,42]],profile:[[399.35,903,67,36],[403.495,903.037,66.861,36],[407.639,903.073,66.723,36],[411.35,903,66.6,36],[414.614,902.8,66.495,36],[417.593,902.385,66.4,36],[420.639,901.621,66.3,36],[423.596,900.564,66.2,36],[426.434,899.22,66.1,36],[429.128,897.607,66,36],[431.65,895.735,65.9,36],[433.977,893.627,65.8,36],[436.085,891.3,65.7,36],[437.957,888.778,65.6,36],[439.57,886.084,65.5,36],[440.914,883.246,65.4,36],[441.971,880.289,65.3,36],[442.735,877.243,65.2,36],[443.133,874.62,65.129,36],[443.35,871,65,36],[443.449,868.358,64.881,36],[443.526,864.958,64.718,36],[443.584,860.871,64.515,36],[443.624,856.168,64.277,36],[443.649,850.92,64.007,36],[443.659,845.198,63.709,36],[443.657,839.073,63.386,36],[443.645,832.616,63.043,36],[443.624,825.898,62.683,36],[443.597,818.991,62.31,36],[443.565,811.964,61.928,36],[443.529,804.89,61.54,36],[443.493,797.839,61.152,36],[443.457,790.882,60.765,36],[443.423,784.091,60.384,36],[443.394,777.536,60.014,36],[443.371,771.288,59.657,36],[443.355,765.419,59.318,36],[443.35,760,59,36],[443.369,753.603,58.615,36],[443.419,747.401,58.231,36],[443.49,741.366,57.847,36],[443.572,735.471,57.464,36],[443.653,729.687,57.083,36],[443.724,723.987,56.704,36],[443.774,718.344,56.327,36],[443.793,712.729,55.954,36],[443.771,707.115,55.584,36],[443.696,701.474,55.218,36],[443.56,695.778,54.857,36],[443.35,690,54.5,36],[443.072,684.145,54.148,36],[442.742,678.262,53.801,36],[442.362,672.36,53.459,36],[441.936,666.45,53.12,36],[441.469,660.54,52.785,36],[440.964,654.641,52.453,36],[440.425,648.762,52.124,36],[439.855,642.912,51.797,36],[439.259,637.101,51.471,36],[438.641,631.339,51.147,36],[438.003,625.636,50.823,36],[437.35,620,50.5,36],[436.659,614.362,50.17,36],[435.928,608.794,49.837,36],[435.16,603.284,49.503,36],[434.362,597.821,49.17,36],[433.538,592.395,48.838,36],[432.694,586.995,48.511,36],[431.834,581.61,48.19,36],[430.965,576.228,47.877,36],[430.091,570.84,47.573,36],[429.218,565.434,47.28,36],[428.35,560,47,36],[427.47,554.589,46.731,36],[426.564,549.252,46.469,36],[425.638,543.96,46.215,36],[424.7,538.688,45.969,36],[423.755,533.406,45.731,36],[422.811,528.089,45.503,36],[421.876,522.708,45.283,36],[420.955,517.236,45.072,36],[420.056,511.646,44.872,36],[419.185,505.909,44.681,36],[418.35,500,44.5,36],[417.632,494.568,44.35,36],[416.928,488.967,44.213,36],[416.238,483.22,44.086,36],[415.562,477.348,43.969,36],[414.9,471.374,43.86,36],[414.25,465.322,43.759,36],[413.615,459.212,43.664,36],[412.992,453.069,43.574,36],[412.383,446.914,43.489,36],[411.787,440.77,43.406,36],[411.204,434.659,43.326,36],[410.634,428.604,43.246,36],[410.077,422.628,43.166,36],[409.532,416.752,43.084,36],[409,411,43,36],[408.458,405.024,42.911,36],[407.941,399.114,42.826,36],[407.447,393.261,42.745,36],[406.972,387.457,42.666,36],[406.513,381.694,42.589,36],[406.066,375.962,42.514,36],[405.628,370.253,42.441,36],[405.196,364.559,42.368,36],[404.765,358.87,42.296,36],[404.334,353.178,42.223,36],[403.898,347.475,42.15,36],[403.455,341.752,42.076,36],[403,336,42,36]],supports:[{at:.05,side:-1,x:416.244,y:877.745,z:66.027},{at:.2851,side:-1,x:419.692,y:762.272,z:59.132},{at:.6386,side:1,x:450.239,y:547.347,z:46.57},{at:.9,side:1,x:432.451,y:407.628,z:42.982}]},pop_1:{id:"pop_1",type:"bumper",name:"Left pop bumper",x:235,y:849.33,width:60,length:60,height:44},pop_2:{id:"pop_2",type:"bumper",name:"Right pop bumper",x:271,y:771.33,width:60,length:60,height:44},pop_3:{id:"pop_3",type:"bumper",name:"Lower pop bumper",x:199,y:773.33,width:60,length:60,height:44},target_a:{id:"target_a",type:"target",name:"Centre target A",x:199.075,y:690,width:25.4,length:10,height:35},target_a_insert:{id:"target_a_insert",type:"insert",name:"Centre target A insert",x:199.9,y:668,width:19,length:19,height:3,shape:"circle",color:"f4f3f8"},target_b:{id:"target_b",type:"target",name:"Centre target B",x:237.175,y:690,width:25.4,length:10,height:35},target_b_insert:{id:"target_b_insert",type:"insert",name:"Centre target B insert",x:238,y:668,width:19,length:19,height:3,shape:"circle",color:"f4f3f8"},target_c:{id:"target_c",type:"target",name:"Centre target C",x:275.275,y:690,width:25.4,length:10,height:35},target_c_insert:{id:"target_c_insert",type:"insert",name:"Centre target C insert",x:276.1,y:668,width:19,length:19,height:3,shape:"circle",color:"f4f3f8"},left_ramp_arrow:{id:"left_ramp_arrow",type:"insert",name:"Left ramp arrow",x:157.3,y:545.5,rotation:16.67,width:24,length:46,height:3,shape:"arrow",color:"a99cff"},left_orbit_arrow:{id:"left_orbit_arrow",type:"insert",name:"Left orbit arrow",x:71,y:590,rotation:30,width:21,length:40,height:3,shape:"arrow",color:"8f7dff"},extra_ball_insert:{id:"extra_ball_insert",type:"insert",name:"Extra ball insert",x:237.175,y:450,width:24,length:24,height:3,shape:"circle",color:"a99cff",icon:"ball"},lock_insert:{id:"lock_insert",type:"insert",name:"Lock insert",x:237.175,y:487,width:29,length:26,height:3,shape:"hexagon",color:"f4f3f8",icon:"lock"},shoot_again:{id:"shoot_again",type:"insert",name:"Shoot again insert",x:237.18,y:139,width:26,length:26,height:3,shape:"shield",color:"a99cff"},left_outlane_insert:{id:"left_outlane_insert",type:"insert",name:"Left outlane insert",x:26,y:386,width:16,length:16,height:3,shape:"circle",color:"f4f3f8"},left_inlane_insert:{id:"left_inlane_insert",type:"insert",name:"Left inlane insert",x:69.4,y:386,width:16,length:16,height:3,shape:"circle",color:"f4f3f8"},right_inlane_insert:{id:"right_inlane_insert",type:"insert",name:"Right inlane insert",x:404.95,y:386,width:16,length:16,height:3,shape:"circle",color:"f4f3f8"},right_outlane_insert:{id:"right_outlane_insert",type:"insert",name:"Right outlane insert",x:448.35,y:386,width:16,length:16,height:3,shape:"circle",color:"f4f3f8"},right_orbit_arrow:{id:"right_orbit_arrow",type:"insert",name:"Right orbit arrow",x:402,y:590,rotation:-30,width:21,length:40,height:3,shape:"arrow",color:"8f7dff"},right_ramp_arrow:{id:"right_ramp_arrow",type:"insert",name:"Right ramp arrow",x:317,y:545.5,rotation:-16.67,width:24,length:46,height:3,shape:"arrow",color:"a99cff"},wizard_insert:{id:"wizard_insert",type:"insert",name:"Wizard insert",x:237.175,y:528,width:36,length:36,height:3,shape:"star",color:"c9c0ff",icon:"crown"},target_guide_left:{id:"target_guide_left",type:"guide",name:"Target bank guide (left)",x:166,y:686,thickness:1.6,height:28.575,smooth:!0,points:[[166,616],[128,684],[118,756],[156,861],[127,911],[102,924],[92,952],[90,993]],mounts:[{at:.7111,side:1}],line:[[166,616],[163.573,620.238],[161.058,624.455],[158.473,628.655],[155.841,632.844],[153.181,637.027],[150.514,641.208],[147.861,645.392],[145.242,649.585],[142.678,653.79],[140.19,658.013],[137.798,662.259],[135.522,666.533],[133.384,670.839],[131.404,675.182],[129.602,679.567],[128,684],[126.496,688.596],[125.073,693.202],[123.739,697.821],[122.505,702.459],[121.378,707.12],[120.367,711.808],[119.483,716.529],[118.732,721.286],[118.126,726.085],[117.671,730.929],[117.379,735.824],[117.256,740.774],[117.313,745.783],[117.558,750.857],[118,756],[118.625,760.256],[119.597,764.641],[120.879,769.141],[122.436,773.741],[124.232,778.428],[126.229,783.187],[128.392,788.002],[130.685,792.86],[133.071,797.747],[135.514,802.647],[137.978,807.546],[140.427,812.43],[142.824,817.284],[145.134,822.094],[147.319,826.845],[149.345,831.523],[151.175,836.113],[152.771,840.601],[154.099,844.972],[155.123,849.212],[155.804,853.306],[156.109,857.24],[156,861],[155.26,866.033],[153.988,870.998],[152.253,875.869],[150.123,880.619],[147.665,885.22],[144.948,889.646],[142.039,893.869],[139.007,897.863],[135.919,901.6],[132.843,905.053],[129.847,908.195],[127,911],[122.885,914.046],[118.398,916.147],[113.803,917.747],[109.362,919.292],[105.34,921.228],[102,924],[99.325,927.734],[97.207,931.999],[95.53,936.676],[94.18,941.647],[93.041,946.795],[92,952],[91.315,956.171],[90.847,960.523],[90.553,965.018],[90.389,969.622],[90.311,974.298],[90.277,979.009],[90.242,983.721],[90.164,988.396],[90,993]]},target_guide_right:{id:"target_guide_right",type:"guide",name:"Target bank guide (right)",x:308.35,y:686,thickness:1.6,height:28.575,smooth:!0,points:[[308.35,616],[349,688],[353.35,759],[321,865],[383,949],[384,991]],mounts:[{at:.7111,side:-1}],line:[[308.35,616],[310.802,620.228],[313.36,624.442],[316.002,628.645],[318.705,632.841],[321.445,637.032],[324.201,641.222],[326.949,645.412],[329.667,649.606],[332.331,653.806],[334.92,658.017],[337.41,662.24],[339.778,666.478],[342.002,670.734],[344.059,675.012],[345.926,679.313],[347.581,683.642],[349,688],[350.278,692.59],[351.395,697.168],[352.355,701.742],[353.164,706.319],[353.825,710.907],[354.344,715.513],[354.724,720.145],[354.971,724.809],[355.089,729.513],[355.083,734.266],[354.958,739.073],[354.717,743.942],[354.366,748.882],[353.908,753.899],[353.35,759],[352.69,763.243],[351.72,767.586],[350.477,772.021],[348.993,776.536],[347.304,781.124],[345.444,785.774],[343.447,790.476],[341.348,795.221],[339.181,800],[336.981,804.802],[334.781,809.618],[332.617,814.438],[330.523,819.253],[328.534,824.054],[326.683,828.83],[325.005,833.571],[323.535,838.27],[322.306,842.914],[321.355,847.496],[320.714,852.005],[320.418,856.432],[320.502,860.767],[321,865],[322.045,869.425],[323.622,873.814],[325.676,878.167],[328.153,882.481],[331.001,886.756],[334.164,890.99],[337.59,895.184],[341.225,899.336],[345.014,903.444],[348.905,907.508],[352.843,911.527],[356.774,915.499],[360.645,919.425],[364.403,923.302],[367.993,927.129],[371.361,930.906],[374.454,934.632],[377.218,938.305],[379.6,941.925],[381.545,945.49],[383,949],[384.417,954.051],[385.222,958.922],[385.537,963.649],[385.485,968.268],[385.188,972.814],[384.769,977.324],[384.349,981.835],[384.052,986.381],[384,991]]},target_post_left:{id:"target_post_left",type:"post",name:"Target bank post (left)",x:184,y:704,width:18,length:18,height:30,ring:!1},target_post_right:{id:"target_post_right",type:"post",name:"Target bank post (right)",x:289,y:704,width:18,length:18,height:30,ring:!1},target_post_centre:{id:"target_post_centre",type:"post",name:"Target bank post (centre)",x:236,y:724,width:18,length:18,height:30,ring:!1},target_rubber:{id:"target_rubber",type:"rubber",name:"Target bank rubber",x:236.333,y:708.667,posts:[[184,702],[289,702],[236,722]],postDiameter:18,cord:4.302,rubberHeight:14.058,postDiameters:[9.72,9.72,9.72],postIds:["target_post_left","target_post_right","target_post_centre"]},upper_left_flipper:{id:"upper_left_flipper",type:"flipper",name:"Upper left flipper",x:79,y:520,rotation:-55,side:"left",pivot:[68.762,534.622],rest:-55,stroke:52,baseR:13,tipR:8.06,reach:40.64,width:61.7,length:26,height:24,sharedSwitch:"s_left_flipper",mechanismAngle:-66},upper_right_flipper:{id:"upper_right_flipper",type:"flipper",name:"Upper right flipper",x:398,y:517,rotation:245,side:"right",pivot:[405.544,533.178],rest:245,stroke:52,baseR:13,tipR:8.06,reach:40.64,width:61.7,length:26,height:24,sharedSwitch:"s_right_flipper",mechanismAngle:-114},right_orbit_wedge:{id:"right_orbit_wedge",type:"guide",name:"Right orbit throat wedge",x:441.058,y:577.195,thickness:1.6,height:28.575,smooth:!0,points:[[469.15,690],[468.69,679.472],[467.315,669.023],[465.034,658.735],[461.865,648.684],[457.832,638.948],[452.966,629.6],[407.35,553],[416.35,546],[422.35,534],[469.15,464.39]],line:[[469.15,690],[469.031,686.488],[468.911,682.975],[468.69,679.472],[468.333,675.977],[467.874,672.491],[467.315,669.023],[466.655,665.573],[465.894,662.141],[465.034,658.735],[464.075,655.355],[463.018,652.002],[461.865,648.684],[460.616,645.401],[459.27,642.153],[457.832,638.948],[456.477,636.125],[455.029,633.346],[452.966,629.6],[451.44,627.044],[449.381,623.856],[446.866,620.117],[443.974,615.907],[440.782,611.309],[437.367,606.403],[433.808,601.269],[430.182,595.99],[426.567,590.646],[423.041,585.318],[419.681,580.087],[416.566,575.034],[413.772,570.241],[411.377,565.788],[409.46,561.756],[408.098,558.227],[407.369,555.281],[407.35,553],[409.485,550.015],[413.103,548.224],[416.35,546],[418.371,542.675],[419.957,538.84],[422.35,534],[423.919,531.379],[425.775,528.402],[427.89,525.102],[430.237,521.514],[432.786,517.672],[435.511,513.612],[438.384,509.368],[441.378,504.974],[444.464,500.464],[447.614,495.874],[450.802,491.238],[453.998,486.591],[457.177,481.966],[460.309,477.4],[463.367,472.925],[466.323,468.577],[469.15,464.39]]},top_lane_rubber_1:{id:"top_lane_rubber_1",type:"rubber",name:"Top lane rubber 1",x:105,y:954,posts:[[104,957],[104,984]],postDiameter:9.5,cord:4.76,rubberHeight:13.5},top_lane_rubber_2:{id:"top_lane_rubber_2",type:"rubber",name:"Top lane rubber 2",x:152,y:963,posts:[[153,966],[153,993]],postDiameter:9.5,cord:4.76,rubberHeight:13.5},top_lane_1:{id:"top_lane_1",type:"rollover",name:"Top lane 1",x:128,y:970,rotation:90},top_lane_rubber_6:{id:"top_lane_rubber_6",type:"rubber",name:"Top lane rubber 6",x:369.35,y:954,posts:[[370.35,957],[370.35,984]],postDiameter:9.5,cord:4.76,rubberHeight:13.5},top_lane_rubber_5:{id:"top_lane_rubber_5",type:"rubber",name:"Top lane rubber 5",x:322.35,y:963,posts:[[321.35,966],[321.35,993]],postDiameter:9.5,cord:4.76,rubberHeight:13.5},top_lane_5:{id:"top_lane_5",type:"rollover",name:"Top lane 5",x:346.35,y:970,rotation:-90},top_lane_1_insert:{id:"top_lane_1_insert",type:"insert",name:"Top lane 1 insert",x:127,y:1011,width:19.05,length:19.05,height:3,shape:"circle",color:"f4f3f8"},top_lane_5_insert:{id:"top_lane_5_insert",type:"insert",name:"Top lane 5 insert",x:347,y:1009,width:19.05,length:19.05,height:3,shape:"circle",color:"f4f3f8"},top_lane_2_insert:{id:"top_lane_2_insert",type:"insert",name:"Top lane 2 insert",x:177,y:1024,width:19.05,length:19.05,height:3,shape:"circle",color:"f4f3f8"},top_lane_3_insert:{id:"top_lane_3_insert",type:"insert",name:"Top lane 3 insert",x:234,y:1033,width:19.05,length:19.05,height:3,shape:"circle",color:"f4f3f8"},top_lane_4_insert:{id:"top_lane_4_insert",type:"insert",name:"Top lane 4 insert",x:294,y:1024,width:19.05,length:19.05,height:3,shape:"circle",color:"f4f3f8"},saucer_arrow:{id:"saucer_arrow",type:"insert",name:"Saucer arrow",x:235,y:912,width:20,length:36,height:3,shape:"arrow",color:"c9c0ff"},top_lane_rubber_3:{id:"top_lane_rubber_3",type:"rubber",name:"Top lane rubber 3",x:205,y:973,posts:[[206,976],[206,1003]],postDiameter:9.5,cord:4.76,rubberHeight:13.5},top_lane_rubber_4:{id:"top_lane_rubber_4",type:"rubber",name:"Top lane rubber 4",x:266,y:972,posts:[[265,975],[265,1002]],postDiameter:9.5,cord:4.76,rubberHeight:13.5},top_lane_2:{id:"top_lane_2",type:"rollover",name:"Top lane 2",x:177,y:983,rotation:90},top_lane_4:{id:"top_lane_4",type:"rollover",name:"Top lane 4",x:294,y:983,rotation:-90},saucer:{id:"saucer",type:"kicker",name:"Saucer",x:235,y:949,width:30,length:30,height:15,kickerType:"saucer",kickAngle:-120,kickSpeed:30,kick:1619.25,pulseMs:30},top_lane_3:{id:"top_lane_3",type:"rollover",name:"Top lane 3",x:234,y:992,rotation:90}};var Lt={w:Fi.width,l:Fi.length,thick:Fi.thickness,cx:Fi.centreX,pitch:Fi.slope,rail:mt.boundary_left.x+mt.boundary_left.thickness/2},vn=Fi.ball/2,ni=i=>Math.round(i*100)/100,Ey=(i,t)=>i.map((e,n)=>{let s=i[Math.max(0,n-1)],r=i[Math.min(i.length-1,n+1)],a=r[0]-s[0],o=r[1]-s[1],l=Math.hypot(a,o)||1;return[ni(e[0]-o/l*t),ni(e[1]+a/l*t)]}),dc=(i,t)=>({id:t,side:i.side,upper:!!i.sharedSwitch,x:i.pivot[0],y:i.pivot[1],rest:i.rest,up:i.rest+(i.side==="left"?1:-1)*i.stroke,baseR:i.baseR,tipR:i.tipR,length:i.reach,height:i.height}),En=[dc(mt.left_flipper,"left"),dc(mt.right_flipper,"right"),dc(mt.upper_left_flipper,"upper-left"),dc(mt.upper_right_flipper,"upper-right")],As={base:11.28,tip:6.64,flange:[9.21,4.45],groove:[8.05,3.68],cap:[8.2,3.4],rubberFrom:8.6,rubberTo:20};function fc(i){let t=([e,n])=>[ni(e/As.base*i.baseR),ni(n/As.tip*i.tipR)];return{flange:t(As.flange),groove:t(As.groove),cap:t(As.cap),rubberFrom:As.rubberFrom,rubberTo:As.rubberTo}}var Ay={baseR:En[0].baseR,tipR:En[0].tipR,length:En[0].length,height:En[0].height,...fc(En[0])},Ir=[mt.left_sling,mt.right_sling].map(i=>({side:i.side,posts:i.posts,postR:i.postRadius,reach:i.contactRadius})),cp=mt.apron.outline,Qt={deck:mt.apron.height,lipR:mt.apron.lip.radius,lipCy:mt.apron.lip.centre[1],lipEndY:mt.apron.lip.from[1],leftShoulder:cp.at(-1),rightShoulder:cp[2]};Qt.lipHalf=Math.sqrt(Qt.lipR**2-(Qt.lipCy-Qt.lipEndY)**2);Qt.lipLeft=[Lt.cx-Qt.lipHalf,Qt.lipEndY];Qt.lipRight=[Lt.cx+Qt.lipHalf,Qt.lipEndY];var wu=[mt.left_drain_guide,mt.right_drain_guide].map(i=>[i.from,i.to]),fe={laneLeft:mt.shooter_divider.x+mt.shooter_divider.thickness/2,laneRight:mt.boundary_right.x-mt.boundary_right.thickness/2,dividerFace:mt.shooter_divider.x-mt.shooter_divider.thickness/2,dividerTop:mt.shooter_divider.to[1],apronTop:ni(mt.shooter_divider.from[1]),ballRest:[mt.shooter.x,mt.shooter.y+mt.shooter.length/2+vn]},hp=(i,t)=>{let e=i.points[0],n=i.points.at(-1),s=i.thickness/2;return t?{cx:n[0],cy:e[1],r:ni(n[0]-e[0]-s)}:{cx:e[0],cy:n[1],r:ni(n[0]-e[0]-s)}},Oi={top:Lt.l-Lt.rail,left:hp(mt.top_arch_left,!0),right:hp(mt.top_arch_right,!1)},Dr=["left","right"].map(i=>{let t=mt[`${i}_inlane_guide`],e=mt[`${i}_inlane_guide_cover`];return{side:i,thickness:t.thickness,plate:{id:t.id,z:t.z,outline:t.outline},cover:{id:e.id,z:e.z,outline:e.outline},stacks:[mt[`${i}_inlane_guide_stack_1`],mt[`${i}_inlane_guide_stack_2`]].map(n=>[n.x,n.y]),post:[mt[`${i}_outlane_post`].x,mt[`${i}_outlane_post`].y]}}),pc=Dr.map(i=>i.post),Bi=["left_outlane","left_inlane","right_inlane","right_outlane"].map(i=>({id:i,kind:i.endsWith("outlane")?"outlane":"inlane",x:mt[i].x,y:mt[i].y,insert:mt[`${i}_insert`].id,insertY:mt[`${i}_insert`].y})),Ry={lane:Fi.orbitLane,throat:Fi.throat,steel:mt.left_orbit_guide.thickness,height:mt.left_orbit_guide.height},mc=[mt.left_orbit_guide,mt.right_orbit_guide].map((i,t)=>({side:t?"right":"left",line:i.line,face:Ey(i.line,i.thickness/2),mounts:i.mounts||[]})),Tu=[mt.left_orbit_wedge,mt.right_orbit_wedge].map((i,t)=>({side:t?"right":"left",line:i.line})),Eu=[mt.left_orbit_post,mt.right_orbit_post].map(i=>[i.x,i.y]),gc={d:mt.left_orbit_post.width,height:mt.left_orbit_post.height},Au=[mt.left_orbit,mt.right_orbit].map((i,t)=>({side:t?"right":"left",x:i.x,y:i.y})),Cs={from:mt.shooter_gate.from,to:mt.shooter_gate.to,height:28.6},Ps={lanes:[1,2,3,4,5].map(i=>{let t=mt[`top_lane_${i}`],e=mt[`top_lane_${i}_insert`];return{x:t.x,y:t.y,insert:e.id,insertX:e.x,insertY:e.y}}),rubbers:[1,2,3,4,5,6].map(i=>{let t=mt[`top_lane_rubber_${i}`];return{posts:t.posts,postR:t.postDiameter/2,cord:t.cord,h:t.rubberHeight}})},Mi={x:mt.saucer.x,y:mt.saucer.y,r:mt.saucer.width/2,depth:mt.saucer.height,kickAngle:mt.saucer.kickAngle,kick:Math.round(mt.saucer.kick),reach:mt.saucer.width/2*.7,maxSpeed:900,hold:1},Si=["pop_1","pop_2","pop_3"].map(i=>({id:i,x:mt[i].x,y:mt[i].y})),Lr={cap:mt.pop_1.width,height:mt.pop_1.height,ringRest:29.5,ringTravel:9,reach:34},Wn={list:["target_a","target_b","target_c"].map(i=>({id:i,x:mt[i].x,y:mt[i].y,insert:mt[`${i}_insert`].id})),width:mt.target_a.width,depth:mt.target_a.length,height:mt.target_a.height},xc=[mt.target_guide_left,mt.target_guide_right].map((i,t)=>({side:t?"right":"left",line:i.line,mounts:i.mounts||[],thickness:i.thickness,height:i.height})),Ru=["target_post_left","target_post_right","target_post_centre"].map(i=>({x:mt[i].x,y:mt[i].y,d:mt[i].width,height:mt[i].height})),bi={posts:mt.target_rubber.postIds.map(i=>[mt[i].x,mt[i].y]),grooves:mt.target_rubber.postDiameters.map(i=>i/2),cord:mt.target_rubber.cord,h:mt.target_rubber.rubberHeight},Ur={width:mt.left_ramp.rampWidth,mouth:mt.left_ramp.widthStart,flare:mt.left_ramp.mouthLength,wall:mt.left_ramp.wallHeight,floor:3,side:2.4},bu=mt.left_wireform.rampWidth*.31,Rs=2.5,up=Math.sqrt((vn+Rs)**2-bu**2),_c={rod:Rs,rail:ni(bu),ride:ni(Rs+up),sideRail:{u:ni(Math.max(bu,(vn+Rs+1.5)*Math.cos(25*Math.PI/180))),v:ni(Rs+up+(vn+Rs+1.5)*Math.sin(25*Math.PI/180))},dropRadius:vn+Rs+3,spread:40},dp=(i,t,e,n,s)=>({side:i,id:t,profile:e.profile,supports:e.supports.map(r=>[r.x,r.y,r.z]),switchAt:e.switches?.[0],wire:n.profile,wireSupports:n.supports.map(r=>[r.x,r.y,r.z]),sideRails:n.sideRails||[],arrow:{x:mt[s].x,y:mt[s].y,angle:mt[s].rotation},post:pc[i==="left"?0:1]}),Is=[dp("left","deadbounce",mt.left_ramp,mt.left_wireform,"left_ramp_arrow"),dp("right","tiptop",mt.right_ramp,mt.right_wireform,"right_ramp_arrow")],Cy={a99cff:"royal","8f7dff":"deep",c9c0ff:"light",f4f3f8:"white"},Cu=Object.values(mt).filter(i=>i.type==="insert").map(i=>({id:i.id,x:i.x,y:i.y,angle:i.rotation||0,width:i.width,length:i.length,shape:i.shape,color:Cy[i.color]||"white",icon:i.icon})),yc=[[18,520],[2*Lt.cx-18,520]];function rn(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new be,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=fp(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][u]);let p=fp(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function fp(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new bn(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<e;p++){let x=h.getComponent(u,p);o.setComponent(u+d,p,x)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var U=.001;function Ae(i,t,e=0){return new O((i-Lt.w/2)*U,e*U,(Lt.l/2-t)*U)}function ki(i,t,e,{bevel:n=0,curveSegments:s=12,holes:r=[]}={}){let a=new gn(i.map(([l,c])=>new ot((l-Lt.w/2)*U,(c-Lt.l/2)*U)));for(let l of r)a.holes.push(new pi(l.map(([c,h])=>new ot((c-Lt.w/2)*U,(h-Lt.l/2)*U))));let o=new mi(a,{depth:Math.max(e-n*2,1e-4)*U,bevelEnabled:n>0,bevelThickness:n*U,bevelSize:n*U,bevelSegments:3,curveSegments:s});return o.rotateX(-Math.PI/2),o.translate(0,(t+n)*U,0),o}function ls(i,t,{bevel:e=0,curveSegments:n=12}={}){let s=new gn(i.map(([a,o])=>new ot(a*U,o*U))),r=new mi(s,{depth:Math.max(t-e*2,1e-4)*U,bevelEnabled:e>0,bevelThickness:e*U,bevelSize:e*U,bevelSegments:3,curveSegments:n});return r.rotateX(-Math.PI/2),r.translate(0,e*U,0),r}function Le(i,t,e,n=0,s=0){return i.position.copy(Ae(t,e,n)),i.rotation.y=s*Math.PI/180,i}function ze(i,t=48){return new ya(i.map(([e,n])=>new ot(e*U,n*U)),t)}function Ya(i,t,{tension:e=.5,segments:n,radial:s=10,closed:r=!1}={}){let a=new Vn(i.map(([l,c,h])=>Ae(l,c,h)),r,"catmullrom",e),o=a.getLength();return new Ui(a,n||Math.max(12,Math.round(o/.006)),t*U,s,r)}function vc(i,t,{tension:e=.5,segments:n,radial:s=10,closed:r=!1}={}){let a=new Vn(i.map(([o,l,c])=>new O(o*U,c*U,-l*U)),r,"catmullrom",e);return new Ui(a,n||Math.max(12,Math.round(a.getLength()/.002)),t*U,s,r)}function Mc(i,t){let e=[];for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],a=Math.max(1,Math.ceil(Math.hypot(r[0]-s[0],r[1]-s[1])/t));for(let o=0;o<a;o++)e.push([s[0]+(r[0]-s[0])*(o/a),s[1]+(r[1]-s[1])*(o/a)])}return e}function Nr(i,t,e=10){let n=[],s=i.length;for(let r=0;r<s;r++){let a=i[r],o=i[(r-1+s)%s],l=i[(r+1)%s],c=Math.atan2(a[1]-o[1],a[0]-o[0])-Math.PI/2,h=Math.atan2(l[1]-a[1],l[0]-a[0])-Math.PI/2;for(;h<c;)h+=Math.PI*2;for(let d=0;d<=e;d++){let u=c+(h-c)*(d/e);n.push([a[0]+Math.cos(u)*t,a[1]+Math.sin(u)*t])}}return n}function Py(i){let t=0;for(let e=0;e<i.length;e++){let[n,s]=i[e],[r,a]=i[(e+1)%i.length];t+=n*a-r*s}return t/2}var Un=i=>Py(i)<0?[...i].reverse():i;function An(i,t,e,n=0){let s=[],r=[];for(let a=0;a<i.length;a++){let o=i[a],l=i[Math.max(0,a-1)],c=i[Math.min(i.length-1,a+1)],h=c[0]-l[0],d=c[1]-l[1],u=Math.hypot(h,d)||1;h/=u,d/=u,s.push([o[0]-d*t/2,o[1]+h*t/2]),r.push([o[0]+d*t/2,o[1]-h*t/2])}return ki(Un([...s,...r.reverse()]),n,e)}function Za(i,t,e,n,s,r=24){return Array.from({length:r+1},(a,o)=>{let l=(n+(s-n)*(o/r))*Math.PI/180;return[i+Math.cos(l)*e,t+Math.sin(l)*e]})}var Oe={royal:"#2B59FF",light:"#6E8CFF",deep:"#1F46E0",navy:"#0F1B55",ice:"#A9BFFF",black:"#06070A",black1:"#0B0C0F",black2:"#14161A",black3:"#262A31",white:"#FFFFFF",paper:"#F5F6F8",paper2:"#F4F5F7",grey:"#9AA1AB"},Xn=i=>parseInt(Oe[i].slice(1),16),$a=i=>{let t=Xn(i),e=t>>16,n=t>>8&255,s=t&255;return r=>`rgba(${e}, ${n}, ${s}, ${r})`};var Iy=i=>{let t=new Vt(i);return .2126*t.r+.7152*t.g+.0722*t.b},Ja=(i,t)=>t/Iy(i),Sc=i=>Ja(i,1.15),Nn=Xn("royal"),bc=Xn("light"),gp=Xn("deep"),Ds=15659775,pp=(i,t,e)=>new _e({color:0,metalness:0,roughness:e,envMap:i,envMapIntensity:t,transparent:!0,depthWrite:!1,blending:Ms,side:_n});function xp(i){let t={};return t.cabinet=new Ke({color:Xn("black1"),roughness:.45,metalness:0,clearcoat:1,clearcoatRoughness:.07}),t.cabinetInner=new _e({color:Xn("black"),roughness:.95,envMap:i,envMapIntensity:.2}),t.aluminium=new _e({color:13028045,roughness:.42,metalness:1,roughnessMap:Iu()}),t.armour=new _e({color:3159100,roughness:.5,metalness:.85,roughnessMap:Iu()}),t.trim=new _e({color:Xn("black3"),roughness:.38,metalness:.9}),t.chrome=new _e({color:14475234,roughness:.06,metalness:1}),t.ball=new _e({color:14080733,roughness:.05,metalness:1,envMap:i,envMapIntensity:1.15}),t.steel=new _e({color:11844031,roughness:.48,metalness:1,roughnessMap:Iu()}),t.zinc=new _e({color:12764873,roughness:.5,metalness:1}),t.darkSteel=new _e({color:3422269,roughness:.4,metalness:1}),t.rubber=new _e({color:723983,roughness:.6}),t.rubberRoyal=new _e({color:Nn,roughness:.5}),t.whitePlastic=new _e({color:Xn("paper"),roughness:.3}),t.graphitePlastic=new _e({color:Xn("black2"),roughness:.35}),t.postPlastic=new Ke({color:gp,roughness:.16,clearcoat:1,clearcoatRoughness:.04,emissive:Nn,emissiveIntensity:Ja(Nn,.035),sheen:.6,sheenColor:bc,sheenRoughness:.4}),t.clearPlastic=new Ke({color:14542578,roughness:.05,metalness:0,envMap:i,envMapIntensity:.8,clearcoat:1,clearcoatRoughness:.03,transparent:!0,opacity:.1,side:_n,depthWrite:!1}),t.glass=pp(i,.45,.02),t.screenGlass=pp(i,.2,.03),t.wood=new _e({color:12886388,roughness:.78}),t.cardPaper=new _e({color:16777215,roughness:.75}),t.popCap=new Ke({color:Nn,roughness:.16,clearcoat:1,clearcoatRoughness:.04,emissive:Nn,emissiveIntensity:.25}),t.popCap.userData.gain=Sc(Nn)*.5,t.popBody=new _e({color:Xn("paper"),roughness:.3,emissive:Ds,emissiveIntensity:.06}),t.popBody.userData.gain=Sc(Ds)*.5,t.bulb=new _e({color:16251391,roughness:.1,emissive:Ds,emissiveIntensity:0}),t.bulb.userData.gain=Sc(Ds),t.speaker=new _e({color:Xn("black1"),roughness:.65,metalness:.4}),t}function _p(i){return new Ke({map:i,roughness:.6,metalness:0,clearcoat:1,clearcoatRoughness:.06})}var mp={royal:Nn,deep:gp,light:bc,white:Ds};function Du(i){let t=new Vt(mp[i]??mp.white),e=new Ke({color:t.clone().multiplyScalar(.3),roughness:.3,clearcoat:1,clearcoatRoughness:.03,emissive:t,emissiveIntensity:.06,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2});return e.userData.gain=Sc(t),e}function Iu(i=256){let t=document.createElement("canvas");t.width=t.height=i;let e=t.getContext("2d");e.fillStyle="#fff",e.fillRect(0,0,i,i);for(let s=0;s<1400;s++){let r=Math.round(200+Math.random()*55);e.fillStyle=`rgb(${r},${r},${r})`,e.fillRect(0,Math.random()*i,i,.6+Math.random())}let n=new jn(t);return n.wrapS=n.wrapT=wn,n.repeat.set(4,4),n}var vp={field:Oe.black2,white:Oe.paper,grey:Oe.grey,royal:Oe.royal,light:Oe.light,deep:Oe.deep,ink:Oe.black2,cab:Oe.black1},Ou=$a("paper"),Nu=$a("royal"),Mp=$a("light"),Dy=$a("grey"),N={k:Oe.black,field:Oe.black1,navy:Oe.navy,deep:Oe.deep,royal:Oe.royal,light:Oe.light,ice:Oe.ice,white:Oe.paper},ve=Math.PI*2,Ce=Math.PI/180,wc={display:(i,t=650)=>`${t} ${i}px Archivo`,mono:(i,t=500)=>`${t} ${i}px "Martian Mono"`,body:(i,t=500)=>`${t} ${i}px "Instrument Sans"`};function cs(i,t,e,n){t==="poster"?(i.font=wc.display(e,n||900),i.fontStretch="extra-expanded",i.letterSpacing=`${e*.015}px`):t==="display"?(i.font=wc.display(e,n),i.fontStretch="semi-expanded",i.letterSpacing=`${-e*.03}px`):t==="mono"?(i.font=wc.mono(e,n),i.fontStretch="semi-condensed",i.letterSpacing=`${e*.08}px`):(i.font=wc.body(e,n),i.fontStretch="normal",i.letterSpacing="0px")}async function Sp(){await Promise.all([document.fonts.load("900 40px Archivo"),document.fonts.load("700 40px Archivo"),document.fonts.load('500 20px "Martian Mono"'),document.fonts.load('500 20px "Instrument Sans"')]).catch(()=>{})}function Mn(i,t){let e=document.createElement("canvas");return e.width=Math.round(i),e.height=Math.round(t),e}var ye=(i,t,e,n)=>[i+e*Math.cos(n),t+e*Math.sin(n)],an=i=>{let t=new Path2D;return i.forEach(([e,n],s)=>s?t.lineTo(e,n):t.moveTo(e,n)),t.closePath(),t},Ue=(i,t,e)=>{let n=new Path2D;return n.arc(i,t,e,0,ve),n},Lu=(i,t,e,n=0)=>{let s=new Path2D;return s.addPath(i,new DOMMatrix().translate(t,e).rotate(n)),s};function wi(i,t,e,n,s,r=0){return an(Array.from({length:s*2},(a,o)=>ye(i,t,o%2?e:n,r+o*Math.PI/s)))}function Tc(i,t,e,n,s){let r=new Path2D,a=ve/n;r.moveTo(i+e,t);for(let o=0;o<n;o++)r.quadraticCurveTo(...ye(i,t,e+s*2,(o+.5)*a),...ye(i,t,e,(o+1)*a));return r.closePath(),r}function bp(i,t,e,n,s,{phase:r=0,lean:a=.22}={}){let o=new Path2D,l=ve/s,c=(h,d)=>ye(i,t,h,r+d*l);o.moveTo(...c(e,0));for(let h=0;h<s;h++)o.bezierCurveTo(...c(e+n*.02,h+.4),...c(e+n*.5,h+.34+a),...c(e+n,h+.56+a)),o.bezierCurveTo(...c(e+n*.52,h+.74+a*.5),...c(e+n*.16,h+.7),...c(e,h+1));return o.closePath(),o}function On(i,t,e,{pinch:n=.16,rot:s=Math.PI/2,points:r=4}={}){let a=new Path2D;a.moveTo(...ye(i,t,e,s));for(let o=0;o<r;o++)a.quadraticCurveTo(...ye(i,t,e*n,s+(o+.5)*ve/r),...ye(i,t,e,s+(o+1)*ve/r));return a.closePath(),a}function Ec(i,t,{neck:e=.44,spread:n=1,sway:s=.12}={}){let r=new Path2D,a=n,o=-t*e,l=[-.98*i*a,-.74*t],c=[-.36*i*a,o],h=[s*i,-t],d=[.4*i*a,o*1.05],u=[.92*i*a,-.66*t];return r.moveTo(i,0),r.arc(0,0,i,0,Math.PI,!1),r.bezierCurveTo(-i,-.5*i,-1.32*i*a,-.42*t,...l),r.bezierCurveTo(l[0]+.14*i,l[1]+.12*t,c[0]-.12*i,c[1]-.16*t,...c),r.bezierCurveTo(c[0]+.12*i,c[1]-.2*t,h[0]-.24*i,h[1]+.2*t,...h),r.bezierCurveTo(h[0]+.2*i,h[1]+.22*t,d[0]-.1*i,d[1]-.18*t,...d),r.bezierCurveTo(d[0]+.1*i,d[1]-.14*t,u[0]-.16*i,u[1]+.1*t,...u),r.bezierCurveTo(1.28*i*a,-.4*t,i,-.5*i,i,0),r.closePath(),r}function Uu(i,t){let e=new Path2D;return e.moveTo(-i,0),e.arc(0,0,i,Math.PI,ve,!1),e.bezierCurveTo(i,i*.9,i*.16,t*.56,0,t),e.bezierCurveTo(-i*.16,t*.56,-i,i*.9,-i,0),e.closePath(),e}function oe(i,t,{fill:e,rim:n=null,rimW:s=0,key:r=1,keyInk:a=N.k}){if(t=[].concat(t),i.lineJoin="round",i.lineCap="round",r){i.strokeStyle=a,i.lineWidth=(s+r)*2;for(let o of t)i.stroke(o)}if(s){i.strokeStyle=n||e,i.lineWidth=s*2;for(let o of t)i.stroke(o)}i.fillStyle=e;for(let o of t)i.fill(o)}function Ls(i,t,e,n,s,r,a=0){for(let[o,l,c]of r){let h=Ue(...ye(t,e,n*l,s),n*o);i.fillStyle=c,i.fill(h),a&&(i.strokeStyle=N.k,i.lineWidth=a,i.stroke(h))}}function Fu(i,t,e,n,s=n*.14){i.save();let r=Ue(t,e,n);i.fillStyle=N.ice,i.fill(r),i.save(),i.clip(r),i.fillStyle=N.royal,i.fill(Ue(t+n*.34,e-n*.4,n*1.02)),i.fillStyle=N.navy,i.fill(Ue(t+n*.62,e-n*.74,n*.98)),i.restore(),i.fillStyle=N.white,i.fill(Ue(t-n*.36,e+n*.38,n*.2)),i.strokeStyle=N.k,i.lineWidth=s,i.stroke(r),i.restore()}function qn(i,t,e,n,s,{fill:r=N.white,stroke:a=N.k,weight:o=.15,shadow:l=N.royal,drop:c=.09,align:h="center",kind:d="poster",fontWeight:u}={}){i.save(),cs(i,d,s,u),i.textAlign=h,i.textBaseline="middle",i.lineJoin="round",t=t.toUpperCase();let f=s*c;l&&(a&&(i.strokeStyle=a,i.lineWidth=s*o,i.strokeText(t,e+f,n+f)),i.fillStyle=l,i.fillText(t,e+f,n+f)),a&&(i.strokeStyle=a,i.lineWidth=s*o,i.strokeText(t,e,n)),i.fillStyle=r,i.fillText(t,e,n),i.restore()}function Fn(i,t,e,n,s,r,a,{fill:o=N.white,stroke:l=N.k,weight:c=.15,shadow:h=N.royal,drop:d=.09,kind:u="poster",fontWeight:f,under:p=!1,maxSpan:x=1/0,fills:m=null,track:g=.04}={}){i.save(),t=t.toUpperCase();let b=()=>(cs(i,u,a,f),i.letterSpacing="0px",[...t].map(F=>i.measureText(F).width+a*g)),E=b(),y=E.reduce((F,D)=>F+D,0);y/s>x&&(a*=x*s/y,E=b(),y=E.reduce((F,D)=>F+D,0)),i.textAlign="center",i.textBaseline="middle",i.lineJoin="round";let v=[];if(m)for(let[F,D]of m)for(let B=0;B<F;B++)v.push(D);let w=p?-1:1,M=-r-w*y/(2*s),_=[],T=0;[...t].forEach((F,D)=>{let B=M+w*(T+E[D]/2)/s;T+=E[D],_.push([F,B,v[D]||o])});let R=a*d,C=F=>_.forEach(([D,B,G])=>{i.save(),i.translate(e+s*Math.cos(B),n+s*Math.sin(B)),i.rotate(B+(p?-Math.PI/2:Math.PI/2)),F(D,G,-B-(p?-Math.PI/2:Math.PI/2)),i.restore()}),L=F=>[R*(Math.cos(F)-Math.sin(F)),R*(Math.sin(F)+Math.cos(F))];return h&&(l&&(i.strokeStyle=l,i.lineWidth=a*c,C((F,D,B)=>i.strokeText(F,...L(B)))),i.fillStyle=h,C((F,D,B)=>i.fillText(F,...L(B)))),l&&(i.strokeStyle=l,i.lineWidth=a*c,C(F=>i.strokeText(F,0,0))),C((F,D)=>{i.fillStyle=D,i.fillText(F,0,0)}),i.restore(),a}function Ly(i,t=40){return Array.from({length:t},(e,n)=>{let s=n/t*Math.PI*2;return[Math.cos(s)*i/2,Math.sin(s)*i/2]})}function Uy(i,t){let e=i*.4,n=t*.44,s=e*.42;return[[-e/2,-t/2],[0,-t/2+s],[e/2,-t/2],[e/2,t/2-n],[i/2,t/2-n],[0,t/2],[-i/2,t/2-n],[-e/2,t/2-n]]}function Ny(i,t){return Array.from({length:6},(e,n)=>[Math.cos(n*Math.PI/3)*i/2,Math.sin(n*Math.PI/3)*t/2])}function Fy(i,t){return Array.from({length:10},(e,n)=>{let s=n%2?.45:1,r=Math.PI/2+n*Math.PI/5;return[Math.cos(r)*(i/2)*s,Math.sin(r)*(t/2)*s]})}function Oy(i,t){let e=-t/2+t*.45,n=[[0,-t/2]];for(let s=1;s<=8;s++){let r=s/8;n.push([i/2*Math.sin(r*Math.PI/2),-t/2+(e+t/2)*(1-Math.cos(r*Math.PI/2))])}n.push([i/2,t/2-t*.08],[i*.3,t/2],[-i*.3,t/2],[-i/2,t/2-t*.08]);for(let s=8;s>=1;s--){let r=s/8;n.push([-i/2*Math.sin(r*Math.PI/2),-t/2+(e+t/2)*(1-Math.cos(r*Math.PI/2))])}return n}var By={circle:(i,t)=>Ly(Math.min(i,t)),arrow:Uy,hexagon:Ny,star:Fy,shield:Oy},ky=["Web","Game","Media","Fab"],zy=[["2025","Freelance"],["2023","Glaser Group"],["2021","Origin Beer Lab"],["2018","T&B Equipment"],["2018","Atlee High"]],Hy=["Design","Build","Ship"];function Bu(){let i=new Map;return Ps.lanes.forEach((t,e)=>i.set(t.insert,{group:"years",index:e,legend:zy[e][0]})),Bi.forEach((t,e)=>i.set(t.insert,{group:"skills",index:e,legend:ky[e]})),Is.forEach((t,e)=>i.set(`${t.side}_ramp_arrow`,{group:"ramp"+e,index:e})),["left_orbit_arrow","right_orbit_arrow"].forEach((t,e)=>i.set(t,{group:"orbit",index:e})),Wn.list.forEach((t,e)=>i.set(t.insert,{group:"targets",index:e})),["extra_ball_insert","lock_insert","wizard_insert"].forEach((t,e)=>i.set(t,{group:"ladder",index:e})),i.set("saucer_arrow",{group:"saucer",index:0}),i.set("shoot_again",{group:"again",index:0}),Cu.map(t=>({...t,...i.get(t.id)||{group:"other",index:0},w:t.width,l:t.length,kind:t.shape,shape:By[t.shape](t.width,t.length)}))}function Us(i){let t=Number(i.replace(/\D+/g,""));return i.startsWith("lane")?Ps.lanes[t]?.insert:i.startsWith("return")?Bi[t]?.insert:i.startsWith("orbit")?["left_orbit_arrow","right_orbit_arrow"][t]:null}function wp(i,t=128){let e=Mn(t,Math.round(t*i.l/i.w)),n=e.getContext("2d"),s=t/i.w,r=e.width/2,a=e.height/2;n.fillStyle="#fff",n.fillRect(0,0,e.width,e.height);let o="rgba(11, 12, 15, 0.94)",l=Math.min(i.w,i.l)*s,c=Math.max(e.width,e.height);if(i.kind==="arrow"){n.strokeStyle="rgba(11, 12, 15, 0.2)",n.lineWidth=s*1.5,n.lineJoin="miter";for(let h=e.height+s*6;h>-s*8;h-=s*4.6)n.beginPath(),n.moveTo(r-c,h+c*.8),n.lineTo(r,h),n.lineTo(r+c,h+c*.8),n.stroke()}else{let h=i.kind==="star"?20:i.kind==="hexagon"?24:32,d=!!(i.legend||i.icon);for(let u=0;u<h;u+=2)n.fillStyle=`rgba(11, 12, 15, ${d?.12:.17})`,n.beginPath(),n.moveTo(r,a),n.arc(r,a,c,u/h*ve+Math.PI/2,(u+1)/h*ve+Math.PI/2),n.closePath(),n.fill();n.strokeStyle="rgba(11, 12, 15, 0.24)",n.lineWidth=l*.03,n.beginPath(),n.arc(r,a,l*.415,0,ve),n.stroke(),d||(n.beginPath(),n.arc(r,a,l*.16,0,ve),n.stroke())}if(n.fillStyle=o,n.strokeStyle=o,n.lineCap="round",n.lineJoin="round",i.legend){let h=i.legend.toUpperCase(),d=/^\d+$/.test(h),u=(d?Math.min(i.w*.3,5.4):4.4)*s;cs(n,"poster",u,800),n.fontStretch=d?"expanded":"semi-expanded";let f=i.w*.8*s/n.measureText(h).width;f<1&&(u*=f,cs(n,"poster",u,800),n.fontStretch=d?"expanded":"semi-expanded"),n.textAlign="center",n.textBaseline="middle",n.strokeStyle="#fff",n.lineWidth=u*.5,n.strokeText(h,r,a+u*.04),n.fillText(h,r,a+u*.04),n.strokeStyle=o}if(i.icon&&(n.fillStyle="#fff",n.beginPath(),n.arc(r,a,l*.3,0,ve),n.fill(),n.fillStyle=o),i.icon==="ball")n.lineWidth=l*.07,n.beginPath(),n.arc(r,a,l*.23,0,Math.PI*2),n.stroke(),n.beginPath(),n.arc(r-l*.07,a-l*.07,l*.06,0,Math.PI*2),n.fill();else if(i.icon==="lock")n.lineWidth=l*.07,n.beginPath(),n.moveTo(r-l*.13,a+l*.02),n.arc(r,a-l*.06,l*.13,Math.PI,0),n.lineTo(r+l*.13,a+l*.02),n.stroke(),n.beginPath(),n.roundRect(r-l*.21,a,l*.42,l*.3,l*.04),n.fill();else if(i.icon==="crown"){let h=l*.4,d=l*.26,u=a+l*.12;n.beginPath(),n.moveTo(r-h/2,u),n.lineTo(r-h/2,u-d),n.lineTo(r-h/4,u-d*.45),n.lineTo(r,u-d*1.15),n.lineTo(r+h/4,u-d*.45),n.lineTo(r+h/2,u-d),n.lineTo(r+h/2,u),n.closePath(),n.fill()}return e}function Tp(i){let t=Mn(Lt.w*i,Lt.l*i),e=t.getContext("2d"),n=M=>M*i,s=M=>(Lt.l-M)*i,r=M=>M*i,a=1,o=M=>{e.save(),e.setTransform(i,0,0,-i,0,Lt.l*i),e.lineJoin="round",e.lineCap="round",M(),e.restore()},l=(M,_,T,R)=>o(()=>{e.translate(M,_),e.rotate(T*Ce),R()}),c=Bu(),h=Object.fromEntries(c.map(M=>[M.id,M])),d=Lt.cx,[u,f]=Si.reduce((M,_)=>[M[0]+_.x/Si.length,M[1]+_.y/Si.length],[0,0]),p=["extra_ball_insert","lock_insert","wizard_insert"].map(M=>h[M]),x={x:d,y:(p[0].y-p[0].l/2+p[2].y+p[2].l/2)/2,core:60,band:75,body:134,amp:19},m=M=>an(M.shape);e.fillStyle=N.field,e.fillRect(0,0,t.width,t.height),o(()=>{for(let M=x.body+x.amp+8,_=0;_<9;M+=6.2,_++){let T=Math.round(ve*M/6.4),R=2.1*(1-_/9.6);e.fillStyle=_<3?N.royal:_<6?N.deep:N.navy;for(let C=0;C<T;C++)e.fill(Ue(...ye(x.x,x.y,M,(C+_%2/2)/T*ve),R))}}),o(()=>{let M=[[278,N.navy],[246,N.field],[216,N.deep],[188,N.field],[162,N.navy],[138,N.field]];for(let[_,T]of M){let R=f+(_-112)*.93,C=Tc(u,R,_,Math.round(_/7.2),3.4);e.fillStyle=T,e.fill(C),T!==N.field&&(e.strokeStyle=N.k,e.lineWidth=a,e.stroke(C),e.strokeStyle=T===N.deep?N.ice:N.light,e.lineWidth=.7,e.stroke(Tc(u,R,_-5,Math.round(_/7.2),3.4)))}}),o(()=>{let M=Tc(u,f,112,28,3.6);oe(e,M,{fill:N.royal,rim:N.white,rimW:2.2,key:a}),e.save(),e.clip(M),e.fillStyle=N.deep;for(let _=0;_<14;_++)e.fill(an([[u,f],ye(u,f,130,_*ve/14),ye(u,f,130,(_+.5)*ve/14)]));e.restore(),oe(e,wi(u,f,70,97,14,Math.PI/2),{fill:N.white,key:a}),oe(e,wi(u,f,62,86,14,Math.PI/2+Math.PI/14),{fill:N.ice,key:a}),oe(e,Ue(u,f,68),{fill:N.navy,key:a});for(let _ of Si)oe(e,wi(_.x,_.y,35.5,43,18,Math.PI/2),{fill:N.white,key:a});for(let _ of Si)oe(e,Ue(_.x,_.y,35.5),{fill:N.k,key:0});for(let _ of Si)e.strokeStyle=N.royal,e.lineWidth=1.4,e.stroke(Ue(_.x,_.y,33))}),o(()=>{for(let T of["left_orbit_arrow","right_orbit_arrow"]){let R=h[T],C=R.angle*Ce,L=[-Math.sin(C),Math.cos(C)],F=R.x<d?26:2*d-26,D=new Path2D;D.moveTo(R.x-L[0]*6,R.y-L[1]*6),D.bezierCurveTo(R.x+L[0]*48,R.y+L[1]*48,F,652,F,700),D.lineTo(F,948),e.lineCap="butt";for(let[B,G]of[[25.5,N.k],[23.5,N.navy],[17,N.deep],[11,N.royal],[5.4,N.light],[1.6,N.white]])e.strokeStyle=G,e.lineWidth=B,e.stroke(D)}let M=(fe.laneLeft+fe.laneRight)/2,_=[N.navy,N.navy,N.navy,N.deep,N.deep,N.deep,N.royal,N.royal,N.royal,N.light,N.light,N.light,N.ice,N.ice,N.ice,N.white,N.white,N.white,N.white,N.white,N.white];for(let T=132,R=0;T<790;T+=33,R++)oe(e,an([[M-11.5,T],[M,T+11.5],[M+11.5,T],[M+11.5,T+9.5],[M,T+21],[M-11.5,T+9.5]]),{fill:_[R],key:a*.8})});let g=(M,_)=>M+.34*((_-x.band)/(x.body-x.band))**2,b=(M,_,T,R,C=0,L=10)=>{let F=[];for(let D=0;D<=L;D++){let B=D/L,G=T+(R-T)*B;F.push(ye(x.x,x.y,G,g(M+(_-M)*.5*C*B,G)))}for(let D=L;D>=0;D--){let B=D/L,G=T+(R-T)*B;F.push(ye(x.x,x.y,G,g(_-(_-M)*.5*C*B,G)))}return an(F)};o(()=>{let M=bp(x.x,x.y,x.body,x.amp,24,{phase:Math.PI/24,lean:.2});oe(e,M,{fill:N.royal,rim:N.white,rimW:2.6,key:a}),e.save(),e.clip(M),e.fillStyle=N.deep;for(let _=0;_<24;_+=2)e.fill(b(_*ve/24,(_+1)*ve/24,x.band,x.body+x.amp+4));e.restore(),e.strokeStyle=N.k,e.lineWidth=a,e.stroke(M);for(let _=0;_<24;_++){let T=_*ve/24,R=_%2===0,C=(R?3.4:2.2)*Ce;oe(e,b(T-C,T+C,x.band+2,R?x.body-6:x.body-30,1),{fill:R?N.white:N.ice,key:a*.7})}oe(e,Ue(x.x,x.y,x.band),{fill:N.white,key:a}),oe(e,Ue(x.x,x.y,x.core),{fill:N.k,key:0});for(let[_,T,R,C]of[[30,7,N.royal,.5],[30,10.5,N.ice,0]])for(let L=0;L<_;L++){let F=(L+C)*ve/_;Math.abs(Math.cos(F))<.42||(e.fillStyle=R,e.fill(an([ye(x.x,x.y,x.core+.3,F-.085),ye(x.x,x.y,x.core-T,F+.03),ye(x.x,x.y,x.core+.3,F+.085)])))}e.strokeStyle=N.k,e.lineWidth=a,e.stroke(Ue(x.x,x.y,x.core))});{let M=r((x.core+x.band)/2),_=n(x.x),T=s(x.y),R=r(8.2),C={fill:N.k,stroke:null,shadow:null,track:.07};Fn(e,"01 Deadbounce",_,T,M,119*Ce,R,{...C,fills:[[2,N.royal]],maxSpan:50*Ce}),Fn(e,"02 Tip Top",_,T,M,62*Ce,R,{...C,fills:[[2,N.royal]],maxSpan:44*Ce}),Fn(e,"dylanhughes.dev",_,T,M,270*Ce,r(7.2),{...C,under:!0,maxSpan:72*Ce}),o(()=>{e.fillStyle=N.royal;for(let[L,F]of[[89,4.4],[205,5.6],[335,5.6]])e.fill(On(...ye(x.x,x.y,(x.core+x.band)/2,L*Ce),F));e.fillStyle=N.k;for(let L of[180,0,222,318])e.fill(Ue(...ye(x.x,x.y,(x.core+x.band)/2,L*Ce),1.5))})}let E=(M,_,T,R={})=>l(M.x,M.y,R.turn||0,()=>{let C=Ec(_,T,R);oe(e,C,{fill:R.fill||N.royal,rim:N.white,rimW:1.7,key:a}),e.save(),e.clip(C),e.translate(0,-T*.3),e.scale(.56,.72),e.fillStyle=R.core||N.light,e.fill(Ec(_,T,R)),e.restore(),e.strokeStyle=N.k,e.lineWidth=a*.8,e.stroke(C)});for(let M of c)M.group==="years"?E(M,M.w/2+5.6,42,{sway:M.index%2?-.2:.2}):M.group==="skills"?E(M,M.w/2+5,56,{spread:.92,sway:M.x<d?.2:-.2}):M.group==="targets"&&E(M,M.w/2+5,60,{neck:.64,spread:.9,sway:(M.index-1)*.3});let y=(M,_,T)=>l(M.x,M.y,M.angle,()=>{let R=m(M),C=Lu(Ec(M.w*.2,T,{spread:1.5}),0,-M.l/2+5);oe(e,[C,R],{fill:N.white,rimW:_,key:a}),e.fillStyle=N.ice,e.fill(Lu(Ec(M.w*.14,T*.86,{spread:1.5}),0,-M.l/2+2))});y(h.left_ramp_arrow,5.6,34),y(h.right_ramp_arrow,5.6,34),y(h.left_orbit_arrow,3.8,26),y(h.right_orbit_arrow,3.8,26),y(h.saucer_arrow,3.6,.01);let v=h.shoot_again;o(()=>{let M=d,_=92,T=134,R=Tc(M,_,T,26,3.4);oe(e,R,{fill:N.navy,rim:N.royal,rimW:1.6,key:a}),e.save(),e.clip(R),e.fillStyle=N.deep;for(let C=0;C<13;C++)e.fill(an([[M,_],ye(M,_,T+8,C*Math.PI/13),ye(M,_,T+8,(C+.5)*Math.PI/13)]));for(let[C,L]of[[62,N.royal],[50,N.light],[38,N.white]])oe(e,Ue(M,_,C),{fill:L,key:a});e.restore()}),l(v.x,v.y,0,()=>{let M=Uu(25,88);oe(e,M,{fill:N.royal,rim:N.white,rimW:2,key:a}),e.save(),e.clip(M),e.fillStyle=N.deep,e.fill(Uu(17,70)),e.fillStyle=N.navy,e.fill(Lu(Uu(9,46),0,6)),e.restore()});for(let M of c)l(M.x,M.y,M.angle,()=>{let _=m(M);e.strokeStyle=N.k,e.lineWidth=4.4,e.stroke(_),e.fillStyle=N.k,e.fill(_),M.group==="ladder"&&(e.strokeStyle=N.ice,e.lineWidth=5.6,e.stroke(_),e.strokeStyle=N.k,e.lineWidth=4.2,e.stroke(_))});let w={weight:.24,shadow:null};Wn.list.forEach((M,_)=>{let T=h[M.insert];qn(e,Hy[_],n(T.x),s(T.y-26.5),r(3.5),w)}),["Extra ball","Lock","Wizard"].forEach((M,_)=>{let T=p[_];qn(e,M,n(T.x-T.w/2-6),s(T.y),r(3.5),{...w,fill:N.ice,align:"right"}),o(()=>{e.fillStyle=N.white,e.fill(On(T.x+T.w/2+12,T.y,5-_*.6)),e.fillStyle=N.light,e.fill(On(T.x+T.w/2+23,T.y+(_-1)*3,2.6))})}),Fn(e,"03 About",n(u),s(f),r(104.5),124*Ce,r(7),{fills:[[2,N.ice]],weight:.2,track:.08}),Fn(e,"Player one",n(u),s(f),r(104.5),56*Ce,r(7),{weight:.2,track:.08});{let M=Bi[0].insertY+1,_=58;o(()=>{for(let C of[-1,1])oe(e,an([[d+C*(_-10),M+3.5],[d+C*(_+20),M+1.5],[d+C*(_+13),M-5],[d+C*(_+20),M-11.5],[d+C*(_-10),M-9.5]]),{fill:N.light,key:a}),oe(e,an([[d+C*_,M-7.6],[d+C*(_-10),M-9.5],[d+C*(_-10),M-3]]),{fill:N.navy,key:a*.7});let R=new Path2D;R.moveTo(d-_,M+6.4),R.quadraticCurveTo(d,M+12.4,d+_,M+6.4),R.lineTo(d+_,M-7.6),R.quadraticCurveTo(d,M-1.6,d-_,M-7.6),R.closePath(),oe(e,R,{fill:N.white,key:a})});let T=(_*_+9)/6;Fn(e,"04 Skills",n(d),s(M+2.2-T),r(T),90*Ce,r(9.4),{fill:N.k,stroke:null,shadow:null,fills:[[2,N.royal]],track:.08})}Fn(e,"05 Experience",n(236),s(760),r(291.5),90*Ce,r(7.4),{fills:[[2,N.ice]],track:.12}),qn(e,"06 Contact",n(v.x),s(v.y-v.l/2-6),r(3.3),{...w,fill:N.white}),qn(e,"Shoot",n(v.x),s(v.y+26),r(3.4),{...w,fill:N.ice}),qn(e,"again",n(v.x),s(v.y+21),r(3.4),{...w,fill:N.ice}),e.save(),e.translate(n((fe.laneLeft+fe.laneRight)/2),s(872)),e.rotate(-Math.PI/2),qn(e,"Launch",0,0,r(6),{weight:.2,drop:.1}),e.restore();{let M=n(d),_=s(126);Fn(e,"Dylan Hughes",M,_,r(166),90*Ce,r(18),{maxSpan:61*Ce,weight:.15,drop:.1,track:.03}),Fn(e,"The portfolio of",M,_,r(184.5),90*Ce,r(3.6),{fill:N.ice,stroke:null,shadow:null,kind:"mono",track:.22,fontWeight:600}),Fr(e,M,s(263),r(2.4),N.royal,Ou(.07)),zi(e,M,s(246.5),"Creative technologist",r(2.9),N.white,"mono"),zi(e,M,s(240.5),"Richmond \xB7 Virginia",r(2.5),Mp(1),"mono"),o(()=>{for(let T of[-1,1])e.fillStyle=N.white,e.fill(On(d+T*26,263,6.4)),[[46,262,5.2],[59,268,4],[70,276,3],[79,285,2.2]].forEach(([R,C,L])=>Fu(e,d+T*R,C,L))})}return o(()=>{let M=[[64,452,7,N.white],[52,425,3.4,N.light],[78,478,3,N.ice],[410,452,7,N.white],[422,425,3.4,N.light],[396,478,3,N.ice],[150,322,4,N.light],[324,322,4,N.light],[22,262,4.5,N.white],[452,262,4.5,N.white],[28,236,2.4,N.light],[446,236,2.4,N.light],[92,1034,6,N.white],[72,1012,3,N.light],[382,1034,6,N.white],[402,1012,3,N.light],[110,1050,2.4,N.ice],[364,1050,2.4,N.ice],[156,708,4.4,N.white],[318,708,4.4,N.white]];for(let[_,T,R,C]of M)e.fillStyle=C,e.fill(On(_,T,R))}),t}var Vy=[["1110","1001","1001","1001","1110"],["1001","1001","1111","1001","1001"]];function Fr(i,t,e,n,s,r){let a=t-9*n/2,o=e-5*n/2;Vy.forEach((l,c)=>l.forEach((h,d)=>[...h].forEach((u,f)=>{i.fillStyle=u==="1"?s:r,i.beginPath(),i.arc(a+(c*5+f+.5)*n,o+(d+.5)*n,n*.36,0,Math.PI*2),i.fill()})))}function zi(i,t,e,n,s,r,a,o="center"){i.save(),i.fillStyle=r,i.textAlign=o,i.textBaseline="middle",cs(i,a==="display"?"display":"mono",s),a!=="display"&&(n=n.toUpperCase()),i.fillText(n,t,e),i.restore()}var Or=[[1,0,N.white],[.9,.06,N.royal],[.66,.2,N.field],[.58,.25,N.white],[.5,.3,N.deep],[.3,.42,N.field]],yp=Or.map(([i,t,e])=>[i,t,e===N.field?N.navy:e]);function Ep(i){let t=Math.round(i/1.32),e=Mn(i,t),n=e.getContext("2d"),s=i/1320,r=5*s,a=i/2,o=590*s;n.fillStyle=N.field,n.fillRect(0,0,i,t),n.lineJoin="round";let l=(u,f)=>u+.5*(f/(1100*s))**1.5,c=(u,f,p,x,m=0,g=14)=>{let b=[];for(let E=0;E<=g;E++){let y=E/g,v=p+(x-p)*y;b.push(ye(a,o,v,l(u+(f-u)*.5*m*y,v)))}for(let E=g;E>=0;E--){let y=E/g,v=p+(x-p)*y;b.push(ye(a,o,v,l(f-(f-u)*.5*m*y,v)))}return an(b)};n.fillStyle=N.navy;for(let u=0;u<28;u+=2)n.fill(c(u*ve/28,(u+1)*ve/28,0,1100*s));for(let u=372*s,f=0;f<8;u+=17*s,f++){let p=Math.round(ve*u/(17.5*s));n.fillStyle=f<3?N.royal:N.deep;for(let x=0;x<p;x++)n.fill(Ue(...ye(a,o,u,(x+f%2/2)/p*ve),5.6*s*(1-f/9)))}for(let u of[-1,1])Ls(n,a+u*700*s,t+40*s,330*s,u>0?-2.2:-.94,Or,r*.8),Ls(n,a+u*470*s,t+150*s,250*s,u>0?-2.2:-.94,Or,r*.8);let h=bp(a,o,262*s,44*s,24,{phase:Math.PI/24,lean:.2});oe(n,h,{fill:N.royal,rim:N.white,rimW:9*s,key:r}),n.save(),n.clip(h),n.fillStyle=N.deep;for(let u=0;u<24;u+=2)n.fill(c(u*ve/24,(u+1)*ve/24,0,330*s));n.restore(),n.strokeStyle=N.k,n.lineWidth=r,n.stroke(h);for(let u=0;u<24;u++){let f=u*ve/24,p=u%2===0,x=(p?3.6:2.4)*Ce;oe(n,c(f-x,f+x,150*s,(p?250:205)*s,1),{fill:p?N.white:N.ice,key:r*.7})}oe(n,Ue(a,o,158*s),{fill:N.white,key:r}),oe(n,Ue(a,o,136*s),{fill:N.k,key:0});for(let[u,f,p]of[[17,N.royal,.5],[26,N.ice,0]]){n.fillStyle=f;for(let x=0;x<30;x++){let m=(x+p)*ve/30;n.fill(an([ye(a,o,137*s,m-.085),ye(a,o,(136-u)*s,m+.03),ye(a,o,137*s,m+.085)]))}}n.strokeStyle=N.k,n.lineWidth=r,n.stroke(Ue(a,o,136*s));let d=19*s;n.save(),n.shadowColor=Nu(1),n.shadowBlur=26*s,Fr(n,a,o,d,Nu(1),"rgba(0,0,0,0)"),n.restore(),Fr(n,a,o,d,Oe.ice,Ou(.07)),Fn(n,"Dylan Hughes",a,o,432*s,90*Ce,112*s,{maxSpan:150*Ce,weight:.15,drop:.085,track:.04,shadow:N.royal});{let u=884*s,f=250*s;for(let m of[-1,1])oe(n,an([[a+m*(f-40*s),u-20*s],[a+m*(f+78*s),u-12*s],[a+m*(f+52*s),u+16*s],[a+m*(f+78*s),u+46*s],[a+m*(f-40*s),u+38*s]]),{fill:N.light,key:r}),oe(n,an([[a+m*f,u+30*s],[a+m*(f-40*s),u+38*s],[a+m*(f-40*s),u+8*s]]),{fill:N.navy,key:r*.7});let p=new Path2D;p.moveTo(a-f,u-30*s),p.quadraticCurveTo(a,u-52*s,a+f,u-30*s),p.lineTo(a+f,u+30*s),p.quadraticCurveTo(a,u+8*s,a-f,u+30*s),p.closePath(),oe(n,p,{fill:N.white,key:r});let x=(f*f+(22*s)**2)/(44*s);Fn(n,"The portfolio",a,u-11*s+x,x,90*Ce,40*s,{fill:N.k,stroke:null,shadow:null,track:.1})}zi(n,a,941*s,"Model DH-26 \xB7 Richmond, Virginia",14*s,Oe.ice,"mono");for(let[u,f,p,x]of[[150,120,34,N.white],[226,204,14,N.light],[1170,120,34,N.white],[1094,204,14,N.light],[110,470,18,N.ice],[1210,470,18,N.ice]])n.fillStyle=x,n.fill(On(u*s,f*s,p*s,{rot:0}));return n.strokeStyle=N.k,n.lineWidth=16*s,n.beginPath(),n.roundRect(26*s,26*s,i-52*s,t-52*s,34*s),n.stroke(),n.strokeStyle=N.white,n.lineWidth=7*s,n.beginPath(),n.roundRect(26*s,26*s,i-52*s,t-52*s,34*s),n.stroke(),n.strokeStyle=Oe.light,n.lineWidth=2*s,n.beginPath(),n.roundRect(42*s,42*s,i-84*s,t-84*s,22*s),n.stroke(),e}function Ap(i,t,e=[.5,.5]){let n=Mn(t,t/1.32),s=n.getContext("2d");s.fillStyle=Oe.black,s.fillRect(0,0,n.width,n.height);let r=Math.max(n.width/i.naturalWidth,n.height/i.naturalHeight),a=i.naturalWidth*r,o=i.naturalHeight*r;return s.imageSmoothingQuality="high",s.drawImage(i,(n.width-a)*e[0],(n.height-o)*e[1],a,o),n}function Rp(i,t){let e=Math.round(t/1.32),n=Mn(t,e),s=n.getContext("2d"),r=t/1320;s.fillStyle=N.field,s.fillRect(0,0,t,e);let a=t*.74,o=e*.46;s.fillStyle=N.navy;for(let x=0;x<28;x+=2)s.fill(an([[a,o],ye(a,o,t*1.2,x*ve/28),ye(a,o,t*1.2,(x+1)*ve/28)]));let l=e,c=Math.round(i.naturalWidth/i.naturalHeight*l),h=t-c,d=Mn(c,l),u=d.getContext("2d");u.imageSmoothingQuality="high",u.drawImage(i,0,0,c,l),u.globalCompositeOperation="destination-in";let f=u.createLinearGradient(0,0,c*.45,0);f.addColorStop(0,"rgba(0, 0, 0, 0)"),f.addColorStop(.5,"rgba(0, 0, 0, 0.6)"),f.addColorStop(1,"rgba(0, 0, 0, 1)"),u.fillStyle=f,u.fillRect(0,0,c,l),s.drawImage(d,h,0);let p=96*r;return s.fillStyle=Ou(.18),s.fillRect(p,e*.3,420*r,1.5*r),s.fillStyle=Nu(1),s.fillRect(p,e*.3-1.5*r,44*r,4.5*r),zi(s,p,e*.3+40*r,"Player 1",22*r,Mp(1),"mono","left"),qn(s,"Dylan",p,e*.48,112*r,{align:"left",weight:.1,drop:.07}),qn(s,"Hughes",p,e*.48+118*r,112*r,{align:"left",weight:.1,drop:.07}),zi(s,p,e*.48+214*r,"Richmond, Virginia",22*r,Dy(.95),"mono","left"),s.fillStyle=N.white,s.fill(On(p+14*r,e*.16,22*r,{rot:0})),s.fillStyle=N.light,s.fill(On(p+58*r,e*.205,9*r,{rot:0})),n}function Cp(i,t,{frontBottom:e=.77}={}){let n=Mn(i,t),s=n.getContext("2d"),r=t/768,a=c=>t-(t-e*t)*(c/i);s.fillStyle=N.field,s.fillRect(0,0,i,t),s.lineJoin="round";for(let c=i+40*r;c>-260*r;){let h=t*(.2+.17*(1-Math.max(0,c)/i));Ls(s,c,a(c)-h*.5,h,Math.PI-.42,Or,4*r),c-=h*.84}s.fillStyle=N.royal,s.fillRect(0,t*.034,i,t*.026),s.fillStyle=N.white,s.fillRect(0,t*.072,i,t*.007);let o=i*.6,l=Math.min(t*.15,i*.056);qn(s,"Dylan Hughes",o,t*.235,l,{weight:.1,drop:.075}),zi(s,o,t*.235+l*.86,"Creative technologist \xB7 Richmond, Virginia",l*.2,Oe.ice,"mono");for(let[c,h,d,u]of[[.262,.19,.05,N.white],[.284,.3,.02,N.light],[.938,.19,.05,N.white],[.916,.3,.02,N.light]])s.fillStyle=u,s.fill(On(i*c,t*h,t*d,{rot:0}));{let c=i*.115,h=t*.265,d=t*.125;oe(s,wi(c,h,d*.86,d*1.12,28,0),{fill:N.white,key:4*r}),oe(s,Ue(c,h,d*.8),{fill:N.royal,key:4*r}),Fr(s,c,h,d*.135,N.white,"rgba(6, 7, 10, 0.2)")}return n}function Pp(i,t){let e=Mn(i,t),n=e.getContext("2d"),s=t/512;n.fillStyle=N.field,n.fillRect(0,0,i,t),n.lineJoin="round";for(let r of[-1,1]){let a=i/2+r*i/2;for(let[o,l,c]of[[.02,.86,.5],[.2,.98,.4],[.36,1.08,.32]])Ls(n,a-r*o*i,t*l,t*c,r>0?-.5:Math.PI+.5,Or,3*s)}return n.fillStyle=N.royal,n.fillRect(0,t*.03,i,t*.03),n.fillStyle=N.white,n.fillRect(0,t*.075,i,t*.008),qn(n,"Dylan Hughes",i*.52,t*.168,t*.092,{weight:.12,drop:.08}),e}function Ip(i,t){let e=Mn(i,t),n=e.getContext("2d"),s=i/256;n.fillStyle=N.field,n.fillRect(0,0,i,t);let r=i*.4;for(let a=t+r*.1;a>-r;a-=r*.92)Ls(n,i/2,a,r,-Math.PI/2,Or,2.6*s);for(let a of[.045,.955])n.fillStyle=N.royal,n.fillRect(i*a-i*.02,0,i*.04,t);for(let a of[.105,.895])n.fillStyle=N.white,n.fillRect(i*a-i*.006,0,i*.012,t);return e}function ku(i,t){let e=Math.round(t*.56),n=Mn(t,e),s=n.getContext("2d"),r=t/625;s.fillStyle=Oe.paper,s.fillRect(0,0,t,e),s.lineJoin="round",s.strokeStyle=N.k,s.lineWidth=4*r,s.beginPath(),s.roundRect(13*r,13*r,t-26*r,e-26*r,12*r),s.stroke(),s.strokeStyle=N.royal,s.lineWidth=2*r,s.beginPath(),s.roundRect(21*r,21*r,t-42*r,e-42*r,7*r),s.stroke();let a=(o,l,c)=>{for(let h=0;h<l;h++)s.fillStyle=h%2?N.k:N.royal,s.fill(On(t/2+(h-(l-1)/2)*c*r,o*r,8*r,{rot:0}))};if(i==="instructions"){s.fillStyle=N.royal,s.beginPath(),s.roundRect(30*r,30*r,t-60*r,62*r,5*r),s.fill(),s.strokeStyle=N.k,s.lineWidth=3*r,s.stroke(),qn(s,"How to play",t/2,62*r,34*r,{weight:.14,shadow:N.navy,drop:.08}),[["1","Send the problem to dyl.harrell@gmail.com"],["2","Get a straight answer on whether"],["","I\u2019m the right person for it"],["3","Build something useful together"]].forEach(([l,c],h)=>{let d=(132+h*40)*r;l&&(oe(s,Ue(62*r,d,14*r),{fill:N.royal,key:2.5*r}),s.fillStyle=N.white,s.textAlign="center",s.textBaseline="middle",cs(s,"poster",16*r,800),s.fillText(l,62*r,d+r)),s.fillStyle=N.k,s.textAlign="left",s.textBaseline="middle",cs(s,"body",20.5*r,600),s.fillText(c,88*r,d+r)}),zi(s,t/2,306*r,"dylanhughes.dev",14*r,N.deep,"mono");for(let l of[-1,1])s.fillStyle=N.royal,s.fill(On(t/2+l*108*r,305*r,9*r,{rot:0}))}else qn(s,"Free play",t/2,102*r,64*r,{fill:N.royal,weight:.1,shadow:N.ice,drop:.07}),a(168,7,34),zi(s,t/2,208*r,"Richmond, Virginia \xB7 Eastern time",15*r,N.deep,"mono"),s.fillStyle=N.k,s.textAlign="center",s.textBaseline="middle",cs(s,"body",21*r,600),s.fillText("Websites \xB7 Game software \xB7 Printed parts",t/2,252*r),zi(s,t/2,300*r,"One player \xB7 Three balls",13*r,N.k,"mono");return n}function Dp(i){let t=Lt.rail,e=fe.laneLeft,n=-4,s=Qt.rightShoulder[1],r=i/(e-t),a=Mn(i,(s-n)*r),o=a.getContext("2d"),l=b=>(b-t)*r,c=b=>(s-b)*r;o.fillStyle=N.field,o.fillRect(0,0,a.width,a.height),o.lineJoin="round",o.lineCap="round";let h=l(Lt.cx),d=c(92),u=i;for(let b=0;b<52;b++)o.fillStyle=b%2?N.navy:N.deep,o.fill(an([[h,d],ye(h,d,u,b*ve/52),ye(h,d,u,(b+1)*ve/52)]));for(let b of[-1,1]){let E=b<0?t:e,y=b<0?Math.PI+.6:-.6;Ls(o,l(E-b*30),c(142),44*r,y,yp,1*r),Ls(o,l(E-b*92),c(120),30*r,y,yp,1*r)}let f=new Path2D;f.moveTo(l(Qt.leftShoulder[0]+2),c(Qt.leftShoulder[1]-9)),f.lineTo(l(Qt.lipLeft[0]-3),c(Qt.lipLeft[1]-7.5)),f.arc(l(Lt.cx),c(Qt.lipCy),(Qt.lipR+7)*r,Math.atan2(Qt.lipCy-Qt.lipEndY,-Qt.lipHalf),Math.atan2(Qt.lipCy-Qt.lipEndY,Qt.lipHalf),!0),f.lineTo(l(Qt.rightShoulder[0]-2),c(Qt.rightShoulder[1]-9)),o.strokeStyle=N.k,o.lineWidth=4.2*r,o.stroke(f),o.strokeStyle=N.white,o.lineWidth=2.2*r,o.stroke(f);let p=l(Lt.cx),x=c(41),m=39*r;oe(o,wi(p,x,m*.9,m*1.06,36,0),{fill:N.white,key:1*r}),oe(o,Ue(p,x,m*.86),{fill:N.white,key:.8*r}),oe(o,Ue(p,x,m*.56),{fill:N.royal,key:1*r}),Fr(o,p,x,3.6*r,N.white,"rgba(6, 7, 10, 0.22)");let g={fill:N.k,stroke:null,shadow:null,track:.1};Fn(o,"Dylan Hughes",p,x,m*.71,90*Ce,7.4*r,{...g,maxSpan:150*Ce}),Fn(o,"Richmond \xB7 VA",p,x,m*.71,270*Ce,5.6*r,{...g,under:!0,fill:N.deep,maxSpan:120*Ce});for(let b of[0,Math.PI])o.fillStyle=N.royal,o.fill(On(...ye(p,x,m*.71,b),3.4*r,{rot:0}));return a}function Lp(i){let t=Math.round(i*(Wn.height/Wn.width)),e=Mn(i,t),n=e.getContext("2d");n.fillStyle=vp.white,n.fillRect(0,0,i,t);let s=i/2,r=t*(1-13.5/Wn.height),a=i/Wn.width;return oe(n,wi(s,r,7.4*a,9.6*a,16,0),{fill:N.royal,key:.5*a}),oe(n,Ue(s,r,6.6*a),{fill:N.white,key:.5*a}),oe(n,wi(s,r,2.3*a,5.4*a,5,-Math.PI/2),{fill:N.royal,key:.5*a}),n.fillStyle=N.royal,n.fillRect(0,2*a,i,2.4*a),n.fillStyle=N.k,n.fillRect(0,5.2*a,i,.8*a),n.fillStyle="rgba(20, 22, 26, 0.18)",n.fillRect(0,t-1.5*a,i,1.5*a),e}function Up(i){let t=Mn(i,i),e=t.getContext("2d"),n=i/2,s=i*.012;return e.fillStyle=vp.white,e.beginPath(),e.arc(n,n,n,0,Math.PI*2),e.fill(),oe(e,wi(n,n,n*.5,n*.93,18,0),{fill:N.royal,key:s}),oe(e,wi(n,n,n*.5,n*.7,18,Math.PI/18),{fill:N.navy,key:s*.7}),oe(e,Ue(n,n,n*.52),{fill:N.white,key:s}),Fr(e,n,n,i*.05,N.k,"rgba(20, 22, 26, 0.1)"),t}function Np(i,t,e,n,s){i.save(),i.clip(t),i.fillStyle=s,i.fill(t),i.lineJoin="round";let r=n.reduce((a,[o])=>a+o,0);for(let a=n.length-1;a>=0;a--)i.strokeStyle=n[a][1],i.lineWidth=r*2*e,i.stroke(t),r-=n[a][0];i.restore()}function Fp(i,t=8,e=12){let n=Un(i.posts),s=Nr(n,e,10),r=s.map(y=>y[0]),a=s.map(y=>y[1]),o=[Math.min(...r),Math.min(...a),Math.max(...r),Math.max(...a)],l=Mn((o[2]-o[0])*t,(o[3]-o[1])*t),c=l.getContext("2d"),h=y=>(y-o[0])*t,d=y=>(o[3]-y)*t;c.fillStyle=N.white,c.fillRect(0,0,l.width,l.height);let u=an(s.map(([y,v])=>[h(y),d(v)]));Np(c,u,t,[[2.6,N.white],[.9,N.k],[3,N.royal],[.7,N.k],[1.5,N.ice],[.7,N.k]],N.navy);let[f,p,x]=i.posts,m=[(f[0]+x[0])/2,(f[1]+x[1])/2],g=y=>[h(m[0]+(p[0]-m[0])*y),d(m[1]+(p[1]-m[1])*y)];c.save(),c.clip(u);let[b,E]=g(.3);return oe(c,wi(b,E,5.4*t,10.5*t,12,.2),{fill:N.white,key:.7*t}),Fu(c,b,E,4.4*t),[[.56,3],[.7,2.2],[.8,1.5]].forEach(([y,v])=>Fu(c,...g(y),v*t)),c.restore(),{canvas:l,box:o}}function zu(i,{ppm:t=8,pad:e=1.5,mark:n=!1}={}){let s=i.map(u=>u[0]),r=i.map(u=>u[1]),a=[Math.min(...s)-e,Math.min(...r)-e,Math.max(...s)+e,Math.max(...r)+e],o=Mn((a[2]-a[0])*t,(a[3]-a[1])*t),l=o.getContext("2d"),c=u=>(u-a[0])*t,h=u=>(a[3]-u)*t,d=an(i.map(([u,f])=>[c(u),h(f)]));if(l.fillStyle=N.white,l.fillRect(0,0,o.width,o.height),Np(l,d,t,[[1.3,N.white],[.6,N.k],[2.2,N.royal],[.5,N.k],[1.2,N.ice],[.5,N.k]],N.royal),n){let u=i.reduce((m,g)=>g[1]>m[1]?g:m),f=12,p=c(u[0]),x=h(u[1]-f);oe(l,Ue(p,x,(f-3.4)*t),{fill:N.royal,key:.6*t}),l.fillStyle=N.white,l.fill(On(p,x,7.2*t,{rot:0}))}return{canvas:o,box:a}}var Os=Math.PI/180,Pc=Lt.pitch*Os,Ve={inner:(Lt.w+22)*U,wallT:.019,front:.585,back:-.565,top:.116,bottom:-.32,floor:-.93},Op=i=>Ve.bottom+(i-Ve.front)*Math.tan(Pc),hs={w:.64,h:.76,d:.25,glassW:.58,glassH:.58/1.32,glassY:.255,dmdW:.384,dmdH:.096,dmdY:.118};function ut(i,t,{cast:e=!0,receive:n=!0}={}){let s=new xe(i,t);return s.castShadow=e,s.receiveShadow=n,s}function ii(i,t=8){let e=new jn(i);return e.colorSpace=$e,e.anisotropy=t,e}function Vu({canvas:i,box:t}){let e=ii(i),[n,s,r,a]=[(t[0]-Lt.w/2)*U,(t[1]-Lt.l/2)*U,(t[2]-Lt.w/2)*U,(t[3]-Lt.l/2)*U];return e.repeat.set(1/(r-n),1/(a-s)),e.offset.set(-n/(r-n),-s/(a-s)),new Ke({map:e,roughness:.3,clearcoat:1,clearcoatRoughness:.05})}var Bp,Gu=()=>Bp||(Bp=new _e({color:660016,roughness:.3,emissive:Nn,emissiveIntensity:Ja(Nn,.16)})),Wu=new Ke({color:15264494,roughness:.45,clearcoat:.2});function Vp({M:i,art:t,dmdCanvas:e,anisotropy:n,maxAnisotropy:s=n}){let r=new pe,a=new pe;a.rotation.x=Pc,r.add(a);let o=new pe;a.add(o);let l={root:r,body:a,playfield:o,inserts:new Map,pops:[],targets:[],flippers:[],slings:[],interactive:[],gi:[],bulbs:[],rollovers:[]};return l.toWorld=(c,h,d=0)=>(a.updateMatrixWorld(!0),Ae(c,h,d).applyMatrix4(o.matrixWorld)),Wy(o,i,t,n),Xy(o,i),Yy(o,i,t,l),Jy(o,i,t,l),Ky(o,i,l),jy(o,i,t,n),Qy(o,i,l),tv(o,i,l),ev(o,i,t,n,l),nv(o,i,t,n,l),sv(o,i,l),dv(o,i,l),fv(o,l),pv(o,i,l),mv(o,i,l),gv(o,i,l),xv(a,r,i,t,n,l),_v(r,i,t,e,n,l,s),Gy(r,l),l}function Gy(i,t){let e=new Set,n=c=>{c&&e.add(c)};t.pops.forEach(c=>n(c.group)),t.slings.forEach(c=>{n(c.rubber),n(c.arm)}),t.flippers.forEach(c=>n(c.pivot)),t.targets.forEach(c=>n(c.holder)),t.rollovers.forEach(c=>n(c.wire)),t.saucer&&n(t.saucer.group),t.gate&&n(t.gate.flap),t.plunger&&(n(t.plunger.group),n(t.plunger.spring)),n(t.ball),n(t.shooterBall),n(t.startButton);let s=new Set(t.interactive);i.updateMatrixWorld(!0);let r=new he().copy(i.matrixWorld).invert(),a=new Map,o=[],l=c=>{if(!e.has(c)){if(c.isMesh&&!s.has(c)&&!Array.isArray(c.material)&&!c.material.transparent&&!c.morphTargetInfluences&&c.visible){let h=new he().multiplyMatrices(r,c.matrixWorld);if(h.determinant()>0){let d=c.geometry,u=Object.keys(d.attributes).sort().join(","),f=[c.material.uuid,c.castShadow,c.receiveShadow,c.renderOrder,!!c.userData.noAO,u,!!d.index].join("|");a.has(f)||a.set(f,{material:c.material,cast:c.castShadow,receive:c.receiveShadow,order:c.renderOrder,noAO:!!c.userData.noAO,geos:[]}),a.get(f).geos.push(d.clone().applyMatrix4(h)),o.push(c)}}for(let h of c.children)l(h)}};l(i);for(let c of o)c.removeFromParent(),c.geometry.dispose();for(let c of a.values()){let h=c.geos.length===1?c.geos[0]:rn(c.geos);if(!h)continue;c.geos.length>1&&c.geos.forEach(u=>u.dispose());let d=new xe(h,c.material);d.castShadow=c.cast,d.receiveShadow=c.receive,d.renderOrder=c.order,c.noAO&&(d.userData.noAO=!0),d.matrixAutoUpdate=!1,i.add(d)}}var kp=[[0,0],[fe.laneLeft,0],[fe.laneLeft,105.8],[Lt.w,105.8],[Lt.w,Lt.l],[0,Lt.l]],zp=Array.from({length:40},(i,t)=>{let e=-(t/40)*Math.PI*2;return[Mi.x+Math.cos(e)*(Mi.r+.6),Mi.y+Math.sin(e)*(Mi.r+.6)]});function Wy(i,t,e,n){let s=_p(ii(e.playfield,n)),r=([c,h])=>new ot(c/Lt.w,h/Lt.l),a=new gn(kp.map(r));a.holes.push(new pi(zp.map(r)));let o=new ys(a,24).scale(Lt.w*U,Lt.l*U,1).translate(-Lt.w/2*U,-Lt.l/2*U,0).rotateX(-Math.PI/2),l=ut(o,s,{cast:!1});return i.add(l),i.add(ut(ki(kp,-Lt.thick-.05,Lt.thick,{holes:[zp]}),t.wood,{cast:!1})),l}var Fs={t:1.6,h:28.6};function Xy(i,t){let e=Fs.t/2,n=[[Lt.rail-e,-2],[Lt.rail-e,Oi.left.cy],...Za(Oi.left.cx,Oi.left.cy,Oi.left.r+e,180,90,24).slice(1),...Za(Oi.right.cx,Oi.right.cy,Oi.right.r+e,90,0,28),[fe.laneRight+e,105.8]];i.add(ut(An(n,Fs.t,Fs.h),t.steel)),qy(i,t,n,1);let s=fe.laneLeft-fe.dividerFace,r=[[fe.dividerFace+s/2,fe.apronTop],[fe.dividerFace+s/2,fe.dividerTop]];i.add(ut(An(r,s,Fs.h),t.steel))}function qy(i,t,e,n,s=120){let r=[],a=s/2;for(let o=1;o<e.length;o++){let[l,c]=e[o-1],[h,d]=e[o],u=Math.hypot(h-l,d-c);if(!u)continue;let f=a;for(;f<=u;f+=s)r.push({x:l+(h-l)*f/u,y:c+(d-c)*f/u,dx:(h-l)/u,dy:(d-c)/u,side:n});a=f-u}Wp(i,t,r)}function Gp(i,t,e,n){let s=[0];for(let a=1;a<e.length;a++)s.push(s[a-1]+Math.hypot(e[a][0]-e[a-1][0],e[a][1]-e[a-1][1]));let r=n.filter(a=>Number.isFinite(a.at)).map(a=>{let o=a.at*s.at(-1),l=1;for(;l<e.length-1&&s[l]<o;)l++;let c=e[l-1],h=e[l],d=s[l]-s[l-1]||1,u=(o-s[l-1])/d;return{x:c[0]+(h[0]-c[0])*u,y:c[1]+(h[1]-c[1])*u,dx:(h[0]-c[0])/d,dy:(h[1]-c[1])/d,side:a.side}});Wp(i,t,r)}function Wp(i,t,e){let n=[],s=[];for(let{x:r,y:a,dx:o,dy:l,side:c}of e){let h=-l*c,d=o*c,u=r+h*4.6,f=a+d*4.6,p=Math.atan2(l,o);n.push(new me(9*U,1.2*U,6*U).rotateY(p).translate(...Ae(u,f,.6).toArray())),s.push(new De(2.3*U,2.3*U,1.1*U,12).translate(...Ae(u+h*.6,f+d*.6,1.75).toArray()))}n.length&&i.add(ut(rn(n),t.steel,{cast:!1}),ut(rn(s),t.darkSteel,{cast:!1}))}function Yy(i,t,e,n){Dr.forEach((s,r)=>{let a=e.inlane[r];i.add(ut(ki(Un(s.plate.outline),s.plate.z,s.thickness,{bevel:.3}),[Vu(a.plate),Gu()])),i.add(ut(ki(Un(s.cover.outline),s.cover.z,s.thickness,{bevel:.4}),[Vu(a.cover),Gu()]));let o=s.cover.z+s.thickness;for(let[l,c]of s.stacks)i.add(Le(ut(new De(4*U,4*U,(s.plate.z-.8)*U,16).translate(0,(s.plate.z-.8)/2*U,0),Wu),l,c)),i.add(Le(ut(new De(4*U,4*U,15*U,16).translate(0,7.5*U,0),Wu),l,c,s.plate.z+s.thickness));for(let[l,c]of[...s.stacks,s.post])i.add(Le(ut(new De(4.5*U,4.5*U,.8*U,16).translate(0,.4*U,0),t.steel,{cast:!1}),l,c,o)),i.add(Le(ut(ze([[0,0],[3.6,0],[3.6,1.2],[2.6,2.6],[0,2.8]],16),t.darkSteel,{cast:!1}),l,c,o+.8));i.add(Le(ut(new De(3.6*U,3.6*U,(s.cover.z-29.8)*U,6).translate(0,(s.cover.z-29.8)/2*U,0),t.steel,{cast:!1}),...s.post,29.8))});for(let[s,r]of pc)i.add(Zy(t,s,r));i.add(ut(rn([...mc,...Tu].map(s=>An(s.line,Fs.t,Fs.h))),t.steel));for(let s of mc)Gp(i,t,s.line,s.mounts);for(let[s,r]of Eu)i.add($y(t,s,r,gc.d,gc.height));for(let[s,r]of Au.entries())n.rollovers.push(Xu(i,t,r.x,r.y,Us("orbit"+s)));for(let[s,r]of Bi.entries())n.rollovers.push(Xu(i,t,r.x,r.y,Us("return"+s)))}var Hp=(()=>{let i=[];for(let t=0;t<16;t++){let e=t/16*Math.PI*2,n=t%2?7.6:9.5;i.push([Math.cos(e)*n,Math.sin(e)*n])}return i})(),Ka;function Zy(i,t,e,{ring:n=!0}={}){if(!Ka){let r=ls(Hp,9,{bevel:.5,curveSegments:1}),a=ls(Hp,9,{bevel:.5,curveSegments:1}).translate(0,18*U,0),o=new De(4.75*U,4.75*U,9*U,16).translate(0,13.5*U,0);Ka={body:rn([r,a,o.toNonIndexed()]),ring:new mr(7.13*U,2.38*U,10,28).rotateX(Math.PI/2).translate(0,13.5*U,0),nut:new De(3.67*U,3.67*U,2.8*U,6).translate(0,28.4*U,0)}}let s=new pe;return s.add(ut(Ka.body,i.postPlastic)),n&&s.add(ut(Ka.ring,i.rubber)),s.add(ut(Ka.nut,i.steel,{cast:!1})),Le(s,t,e)}function $y(i,t,e,n,s){let r=new pe,a=n/2;return r.add(ut(ze([[0,0],[a-.6,0],[a-.6,6],[0,6]],20),i.postPlastic)),r.add(ut(ze([[a-2.4,6],[a,6.6],[a,20.4],[a-2.4,21]],24),i.rubber)),r.add(ut(ze([[0,6],[a-2.4,6],[a-2.4,21],[a-.6,21],[a-.6,s-1],[a-1.6,s],[0,s]],20),i.postPlastic)),Le(r,t,e)}function Xp(i,t,e,{height:n=30}={}){return Le(ut(ze([[0,0],[5.6,0],[5.6,1.4],[4.76,2.2],[4.76,9],[3.9,10.5],[3.9,16.5],[4.76,18],[4.76,n],[0,n]],20),i.postPlastic),t,e)}var Yu=new mn({color:328966});function Xu(i,t,e,n,s){let r=new pe,a=new gn,o=44.45/2-2.38,l=2.38;a.absarc(0,o,l,0,Math.PI,!1),a.absarc(0,-o,l,Math.PI,Math.PI*2,!1);let c=new ys(a,6).scale(U,U,U).rotateX(-Math.PI/2),h=new xe(c,Yu);h.position.y=.06*U,r.add(h);let d=[[0,-21.2,-3],[0,-19.05,0]];for(let f=1;f<12;f++){let p=-1+2*f/12;d.push([0,p*19.05,6.35*Math.sqrt(1-p*p)])}d.push([0,19.05,0],[0,21.2,-3]);let u=ut(vc(d,.8,{tension:.2,radial:8}),t.chrome,{receive:!1});return r.add(u),Le(r,e,n),i.add(r),{wire:u,x:e,y:n,insert:s,press:0}}var Ns={postR:4.76,cord:6.35,travel:9};function Jy(i,t,e,n){for(let s of Ir){let r=new pe,a=s.posts;for(let[D,B]of a)r.add(Xp(t,D,B,{height:30.5}));let[o,l,c]=a,h=Math.hypot(l[0]-o[0],l[1]-o[1]),d=(l[0]-o[0])/h,u=(l[1]-o[1])/h,f=-u,p=d;(c[0]-o[0])*f+(c[1]-o[1])*p>0&&(f=-f,p=-p);let x=Ns.postR+Ns.cord/2,m=Mc(Nr(Un(a),x,8),3),g=m.map(([D,B])=>{let G=((D-o[0])*d+(B-o[1])*u)/h;return(D-o[0])*f+(B-o[1])*p>x*.5&&G>0&&G<1?Math.sin(Math.PI*G):0}),b=D=>Ya(m.map(([B,G],Z)=>[B+f*D*g[Z],G+p*D*g[Z],13.5]),Ns.cord/2,{closed:!0,tension:.1,radial:8,segments:m.length*2}),E=ut(b(0),t.rubber);E.userData.action="sling-"+s.side,n.interactive.push(E),r.add(E);let y=Nr(Un(a),12,8);r.add(ut(ki(y,30.5,2.2,{bevel:.4}),[Vu(e.plastics[Ir.indexOf(s)]),Gu()]));for(let[D,B]of a)r.add(Le(ut(new De(3.5*U,3.5*U,.55*U,16).translate(0,.275*U,0),t.steel),D,B,32.7)),r.add(Le(ut(new De(3.67*U,3.67*U,2.8*U,6).translate(0,1.4*U,0),t.steel),D,B,33.25));let v=Math.atan2(u,d)/Os,w=Math.sign(-u*f+d*p),M=-w*(x-Ns.cord/2-.15-2),_=[(o[0]+l[0])/2,(o[1]+l[1])/2],T=new pe,R=ut(new me(18*U,10*U,4*U),Wu);R.position.set(0,13.5*U,M*U),T.add(R),T.add(ut(new me(7.5*U,9*U,1.5*U).translate(0,4*U,(M+w*1.2)*U),t.steel)),Le(T,_[0],_[1],0,v),r.add(T);let C=new xe(new hn(10*U,3*U).rotateX(-Math.PI/2),Yu);C.position.set(0,.06*U,(M+w*1.2)*U);let L=Le(new pe,_[0],_[1],0,v);L.add(C);for(let D of[-1,1]){let B=ut(new me(7*U,12*U,.35*U).translate(D*26*U,10*U,-w*(x-Ns.cord/2-1.2)*U),t.steel),G=ut(new me(9*U,5*U,6*U).translate(D*26*U,2.5*U,-w*(x-Ns.cord/2-5.5)*U),t.graphitePlastic);L.add(B,G)}r.add(L),i.add(r);let F=new O(f*U,0,-p*U).multiplyScalar(Ns.travel+.15);n.slings.push({side:s.side,rubber:E,rubberGeo:b,arm:T,rest:T.position.clone(),push:F,kicked:-1,shown:0})}}function Ac(i,t,e){let n=Math.asin((i-t)/e),s=[],r=18,a=Math.PI/2-n,o=Math.PI*1.5+n;for(let h=0;h<=r;h++){let d=a+(o-a)*(h/r);s.push([Math.cos(d)*i,Math.sin(d)*i])}let l=-Math.PI/2+n,c=Math.PI/2-n;for(let h=0;h<=r;h++){let d=l+(c-l)*(h/r);s.push([e+Math.cos(d)*t,Math.sin(d)*t])}return s}function Ky(i,t,e){for(let n of En){let s=fc(n),r=s.rubberTo-s.rubberFrom,a=n.length,o=ls(Ac(...s.flange,a),s.rubberFrom-.6,{bevel:.5}),l=ls(Ac(...s.groove,a),r),c=ls(Ac(n.baseR-2.6,n.tipR-2.6,a),r,{bevel:2.6}),h=ls(Ac(...s.cap,a),n.height-s.rubberTo,{bevel:.9}),d=new pe,u=[[o,t.whitePlastic,.6],[l,t.whitePlastic,s.rubberFrom],[c,t.rubberRoyal,s.rubberFrom],[h,t.whitePlastic,s.rubberTo]];for(let[f,p,x]of u){let m=ut(f,p);m.position.y=x*U,m.userData.action="flip-"+n.side,d.add(m),e.interactive.push(m)}d.add(ut(new De(3.2*U,3.2*U,1*U,6).translate(0,(n.height+.5)*U,0),t.steel,{cast:!1})),Le(d,n.x,n.y,0,n.rest),i.add(d),e.flippers.push({...n,pivot:d})}}function jy(i,t,e,n){let s=Math.atan2(Qt.lipEndY-Qt.lipCy,Qt.lipLeft[0]-Lt.cx)/Os,r=Math.atan2(Qt.lipEndY-Qt.lipCy,Qt.lipRight[0]-Lt.cx)/Os,a=Za(Lt.cx,Qt.lipCy,Qt.lipR,s,r,36),o=[[Lt.rail,-4],[fe.laneLeft,-4],Qt.rightShoulder,...[...a].reverse(),Qt.leftShoulder],l=1.3,c=Qt.deck,h=new Ke({color:1316378,roughness:.4,metalness:.3,clearcoat:.8,clearcoatRoughness:.1}),d=ii(e.apron,n),u=(Lt.rail-Lt.w/2)*U,f=(fe.laneLeft-Lt.w/2)*U,p=(-4-Lt.l/2)*U,x=(Qt.rightShoulder[1]-Lt.l/2)*U;d.repeat.set(1/(f-u),1/(x-p)),d.offset.set(-u/(f-u),-p/(x-p));let m=new Ke({map:d,roughness:.55,metalness:0,clearcoat:.8,clearcoatRoughness:.1});i.add(ut(ki(Un(o),c-l,l,{bevel:.4}),[m,h]));let g=c-l,b=155.5/2,E=[An([Qt.leftShoulder,Qt.lipLeft],l,g),An([Qt.lipRight,Qt.rightShoulder],l,g),An([[fe.laneLeft-.65,-4],[fe.laneLeft-.65,Qt.rightShoulder[1]]],l,g),An([[Lt.rail+.65,-4],[Lt.rail+.65,Qt.leftShoulder[1]]],l,14,g-14),An([[Lt.rail,-3.35],[Lt.cx-b,-3.35]],l,g),An([[Lt.cx+b,-3.35],[fe.laneLeft,-3.35]],l,g),An([[Lt.cx-b,-3.35],[Lt.cx+b,-3.35]],l,g-38.1,38.1)];i.add(ut(rn(E),h)),i.add(ut(ki(Un(o),.08,.1),t.cabinetInner,{cast:!1})),i.add(ut(rn(wu.map(v=>An(v,1.6,20))),t.steel));let y=Za(Lt.cx,Qt.lipCy,Qt.lipR+.6,s,r,36).map(([v,w])=>[v,w,c-.6]);i.add(ut(Ya(y,.8,{tension:0}),t.aluminium,{cast:!1}));for(let[v,w]of[["instructions",Lt.cx-147.65],["free",Lt.cx+147.65]]){let M=ii(e.cards[v],n),_=ut(new hn(158.8*U,88.9*U).rotateX(-Math.PI/2),new _e({map:M,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),{cast:!1});_.position.copy(Ae(w,61.55,c+.3)),i.add(_);let T=79.4+1.2,R=61.55-44.45-1.2,C=61.55+44.45+1.2;i.add(ut(An([[w-T,R],[w+T,R],[w+T,C],[w-T,C],[w-T,R]],2.4,1.2,c),t.aluminium,{cast:!1}))}}function Qy(i,t,e){let n=[];for(let s of Ps.rubbers){for(let[a,o]of s.posts)i.add(Xp(t,a,o,{height:26}));let r=Mc(Nr(Un(s.posts),s.postR+s.cord/2,10),3);n.push(Ya(r.map(([a,o])=>[a,o,s.h]),s.cord/2,{closed:!0,tension:.1,radial:8,segments:r.length*2}))}i.add(ut(rn(n),t.rubber));for(let[s,r]of Ps.lanes.entries())e.rollovers.push(Xu(i,t,r.x,r.y,Us("lane"+s)))}function tv(i,t,e){let{r:n}=Mi,s=new pe,r=(u,f,p=0)=>new O(u*U,p*U,-f*U),a=[];for(let u=0;u<=8;u++){let f=u/8*10.5;a.push([f,8.5-Math.sqrt(14.1**2-f*f)])}let o=a.map(([u,f])=>[u,f-.9]),l=ze([...o,[n-.4,-.9],[n,-.1],[n+4.4,.05],[n+4.4,.85],[n+3.8,.95],[n-.3,.95],[n-1,.2],...[...a].reverse()],48);s.add(ut(l,t.steel,{cast:!1}));let c=(Mi.kickAngle+180)*Os,h=new xe(new me(3.6*U,.2*U,9*U),Yu);h.position.copy(r(Math.cos(c)*(n-1),Math.sin(c)*(n-1),1.05)),h.rotation.y=c+Math.PI/2,s.add(h);let d=new pe;d.add(ut(new me(2*U,8*U,6*U).translate(0,-3*U,0),t.darkSteel,{cast:!1})),d.position.copy(r(Math.cos(c)*(n-2),Math.sin(c)*(n-2),0)),d.rotation.y=c+Math.PI/2,s.add(d);for(let u of[-1,1]){let f=c+u*(Math.PI/2),p=ut(ze([[0,0],[2.7,0],[2.7,.6],[1.8,1.4],[0,1.6]],16),t.chrome,{cast:!1});p.position.copy(r(Math.cos(f)*(n+2.2),Math.sin(f)*(n+2.2),.95)),s.add(p)}Le(s,Mi.x,Mi.y),i.add(s),e.saucer={group:s,finger:d,rest:d.position.clone(),out:r(-Math.cos(c),-Math.sin(c)).normalize(),kicked:-1}}function ev(i,t,e,n,s){let r=ze([[0,0],[17,0],[17,2.7],[0,2.7]],40),a=ze([[11,2.7],[23.15,2.7],[23.4,3.4],[23.15,4.7],[22.2,5.4],[11,5.4]],56),o=ze([[0,5.4],[15.5,5.4],[15.5,31.6],[0,31.6]],40),l=ze([[15.8,-9],[16.8,-9],[16.8,0],[22.6,0],[23.2,.5],[23.2,1.5],[22.6,2],[15.8,2],[15.8,-9]],56),c=new De(1.6*U,1.6*U,42*U,10).translate(0,-21*U,0),h=ze([[0,31.6],[25,31.6],[29.4,32],[30,33],[30,36.5],[29.3,37.8],[25.5,41.6],[21,43.1],[10,43.45],[0,43.5]],72),d=new _e({map:ii(e.popDecal,n),roughness:.3,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),u=new ha(20.5*U,48).rotateX(-Math.PI/2).translate(0,43.56*U,0),f=new me(9*U,6*U,6*U).translate(0,3*U,0),p=ze([[0,6],[2.6,6],[3.4,7],[5,10],[5,18.5],[3.8,21.5],[0,22.4]],20);for(let[x,m]of Si.entries()){let g=new pe,b=[],E=(L,F,...D)=>{let B=new pe;return B.add(...D),B.userData={label:L,lift:F},g.add(B),b.push(B),B};E("Base",0,ut(r,t.graphitePlastic));let y=ut(a,t.whitePlastic);E("Skirt",26,y);let v=t.bulb.clone();s.bulbs.push(v),E("Lamp \xB7 #555",56,ut(f,t.darkSteel,{cast:!1}),ut(p,v,{cast:!1}));let w=t.popBody.clone(),M=ut(o,w);E("Body",86,M);let _=new pe;_.add(ut(l,t.chrome));for(let L of[-1,1])_.add(ut(c,t.chrome).translateX(L*19.5*U));_.position.y=Lr.ringRest*U,E("Ring & rods",128,_);let T=t.popCap.clone(),R=ut(h,T,{receive:!1});E("Cap \xB7 \xD860",172,R),E("Decal",206,ut(u,d,{cast:!1}));let C=[-1,1].map(L=>ut(new De(2.6*U,2.6*U,.9*U,16).translate(L*17.46*U,43.75*U,0),t.chrome,{cast:!1}));E("Cap screws \xD72",232,...C),Le(g,m.x,m.y),i.add(g),g.traverse(L=>{L.userData.action="pop-"+x}),s.interactive.push(R,M,y),s.pops.push({group:g,parts:b,ring:_,skirt:y,cap:R,capMat:T,bodyMat:w,fired:-1,axis:new O(1,0,0),x:m.x,y:m.y,id:m.id})}}function nv(i,t,e,n,s){let r=Wn,a=2.4,o=-r.depth/2,l=new _e({map:ii(e.target,n),roughness:.42}),c=t.whitePlastic;for(let[d,u]of r.list.entries()){let f=new pe,p=ut(new me(r.width*U,r.height*U,a*U),[c,c,c,c,l,c]);p.position.set(0,(r.height/2+1.5)*U,-(o+a/2)*U),f.add(p),f.add(ut(new me(18*U,22*U,(r.depth-a)*U).translate(0,12.5*U,-(o+a+(r.depth-a)/2)*U),t.graphitePlastic)),f.add(ut(new me(.4*U,24*U,5*U).translate(-4*U,14*U,-(r.depth/2+1)*U),t.steel,{cast:!1})),Le(f,u.x,u.y),i.add(f),i.add(Le(ut(new me(22*U,1.5*U,(r.depth+4)*U).translate(0,.75*U,0),t.darkSteel,{cast:!1}),u.x,u.y+1)),p.userData.action="target-"+d,s.interactive.push(p),s.targets.push({holder:f,face:p,rest:f.position.clone(),back:new O(0,0,-U),hit:-1,index:d})}for(let[d,u]of Ru.entries()){let f=u.d/2,p=bi.grooves[d],x=bi.h,m=bi.cord;i.add(Le(ut(ze([[0,0],[f,0],[f,x-m/2-1.5],[p,x-m/2-.5],[p,x+m/2+.5],[f,x+m/2+1.5],[f,u.height-1.2],[f-1.2,u.height],[0,u.height]],28),t.postPlastic),u.x,u.y)),i.add(Le(ut(new De(3.67*U,3.67*U,2.8*U,6).translate(0,1.4*U,0),t.steel,{cast:!1}),u.x,u.y,u.height))}let h=iv(bi.posts.map(([d,u],f)=>({x:d,y:u,r:bi.grooves[f]+bi.cord/2})));i.add(ut(Ya(Mc(h,3).map(([d,u])=>[d,u,bi.h]),bi.cord/2,{closed:!0,tension:.1,radial:8}),t.rubber)),i.add(ut(rn(xc.map(d=>An(d.line,d.thickness,Fs.h))),t.steel));for(let d of xc)Gp(i,t,d.line,d.mounts)}function iv(i){let t=Un(i.map(r=>[r.x,r.y])).map(([r,a])=>i.find(o=>o.x===r&&o.y===a)),e=t.length,n=[],s=(r,a)=>{let o=a.x-r.x,l=a.y-r.y,c=Math.hypot(o,l);return Math.atan2(l,o)-Math.acos((r.r-a.r)/c)};for(let r=0;r<e;r++){let a=t[r],o=s(t[(r-1+e)%e],a),c=s(a,t[(r+1)%e])-o;for(;c<0;)c+=Math.PI*2;let h=Math.max(2,Math.ceil(c/(8*Os)));for(let d=0;d<=h;d++){let u=o+c*d/h;n.push([a.x+Math.cos(u)*a.r,a.y+Math.sin(u)*a.r])}}return n}function sv(i,t,e){e.ramps=[];let n=t.clearPlastic,s=new qu;for(let r of Is){let a=new Vn(r.profile.map(([d,u,f])=>Ae(d,u,f)),!1,"centripetal"),o=rv(r.profile),l=new pe,c=ut(av(a,o),n,{cast:!1,receive:!1});c.renderOrder=2,l.add(c),l.add(ov(a,o,t)),l.add(lv(r,t,n,s));for(let d of l.children)d.traverse(u=>{u.userData.action="ramp-"+r.id});i.add(l),e.interactive.push(c);let h=new Vn(r.wire.map(([d,u,f])=>Ae(d,u,f)),!1,"centripetal");i.add(ut(cv(h,r),t.chrome)),i.add(hv(r,t,s)),e.ramps.push({id:r.id,side:r.side,curve:a,wireCurve:h,group:l})}i.add(...s.meshes(t))}function rv(i){let t=[0];for(let e=1;e<i.length;e++)t.push(t[e-1]+Math.hypot(...[0,1,2].map(n=>i[e][n]-i[e-1][n])));return e=>{let n=e*t.at(-1),s=1;for(;s<t.length-1&&t[s]<n;)s++;let r=Math.max(0,Math.min(1,(n-t[s-1])/(t[s]-t[s-1]||1)));return i[s-1][3]+(i[s][3]-i[s-1][3])*r}}var Rc=.9,Cc=.35;function av(i,t){let e=Ur,n=240,s=new O(0,1,0),r=[];for(let c=0;c<=n;c++){let h=c/n,d=i.getPointAt(h),u=i.getTangentAt(h);r.push({p:d,side:new O().crossVectors(u,s).normalize(),w:t(h),floor:d.y/U})}let a=({w:c,floor:h})=>{let d=c/2,u=d+e.side,f=e.wall,p=e.wall,x=Math.max(0,Rc-h),m=Math.max(-e.floor,Cc-h),g=h<30?Math.min(m,Cc-h):m;return[[[-u,m],[u,m],[u,f],[d,f],[d,x],[-d,x],[-d,p],[-u,p]],[[d,g],[u,g],[u,m],[d,m]],[[-u,g],[-d,g],[-d,m],[-u,m]]]},o=r.map(a),l=[];return o[0].forEach((c,h)=>{for(let d=0;d<c.length;d++){let u=[],f=[],p=[];for(let m=0;m<=n;m++){let g=r[m],b=o[m][h];for(let[E,y]of[b[d],b[(d+1)%b.length]]){let v=g.p.clone().addScaledVector(g.side,E*U).addScaledVector(s,y*U);u.push(v.x,v.y,v.z),p.push(v.y/U)}}for(let m=0;m<n*2;m+=2)Math.max(p[m],p[m+1],p[m+2],p[m+3])<Cc+.05||f.push(m,m+2,m+1,m+1,m+2,m+3);let x=new be;x.setAttribute("position",new ie(u,3)),x.setIndex(f),x.computeVertexNormals(),l.push(x)}}),rn(l.map(c=>c.toNonIndexed()))}function ov(i,t,e){let n=Ur,s=t(0)/2+n.side,r=24,a=18,o=new O(0,1,0),l=i.getPointAt(0),c=i.getTangentAt(0).setY(0).normalize().negate(),h=new O().crossVectors(c,o).normalize(),d=new gn([[0,0],[r,0],[r,Cc-.1],[a,Rc],[0,Rc]].map(([g,b])=>new ot(g*U,b*U))),u=new mi(d,{depth:2*s*U,bevelEnabled:!1});u.translate(0,0,-s*U);let f=new he().makeBasis(c,o,h).setPosition(l.x,0,l.z);u.applyMatrix4(f);let p=new pe;p.add(ut(u,e.steel,{cast:!1}));let x=[],m=[];for(let g of[-1,1]){let b=new O(a-5,Rc,g*(s-4.5)).multiplyScalar(U).applyMatrix4(f);x.push(new De(2.6*U,2.6*U,.16*U,20).translate(b.x,b.y+.08*U,b.z)),m.push(...Yp(b.x,b.y+.17*U,b.z,1.7))}return p.add(ut(rn(x),e.darkSteel,{cast:!1}),ut(rn(m),e.rubber,{cast:!1})),p}function qp(i,t,e){let n=null;for(let s=1;s<i.length;s++){let r=i[s-1],a=i[s],o=a[0]-r[0],l=a[1]-r[1],c=o*o+l*l||1,h=Math.max(0,Math.min(1,((t-r[0])*o+(e-r[1])*l)/c)),d=r.map((f,p)=>f+(a[p]-f)*h),u=Math.hypot(d[0]-t,d[1]-e);(!n||u<n.d)&&(n={q:d,d:u})}return{...n,dx:(n.q[0]-t)/(n.d||1),dy:(n.q[1]-e)/(n.d||1)}}var Hu={af:9.5,chamfer:.6},qu=class{constructor(){this.zinc=[],this.steel=[],this.black=[],this.recess=[]}standoff(t,e,n){let s=Hu.af/Math.sqrt(3),r=Hu.af/2-.05,a=Hu.chamfer,o=ze([[0,0],[r,0],[s,a],[s,n-a],[r,n],[0,n]],6).rotateY(Math.PI/6).toNonIndexed();o.computeVertexNormals(),this.zinc.push(o.translate(...Ae(t,e,.8).toArray())),this.washer(t,e,0,6.6,.8)}washer(t,e,n,s=5.2,r=.8,a=2.2){this.steel.push(ze([[a,0],[s,0],[s,r],[a,r],[a,0]],28).toNonIndexed().translate(...Ae(t,e,n).toArray()))}screw(t,e,n){this.washer(t,e,n);let s=ze([[0,0],[3.5,0],[3.5,.9],[3.15,1.85],[2.3,2.35],[0,2.5]],24).toNonIndexed();this.black.push(s.translate(...Ae(t,e,n+.8).toArray()));let r=Ae(t,e,n+.8+2.42);this.recess.push(...Yp(r.x,r.y,r.z,2.4))}meshes(t){let e=[],n=(s,r,a)=>{s.length&&e.push(ut(rn(s.map(ja)),r,{cast:a}))};return n(this.zinc,t.zinc,!0),n(this.steel,t.steel,!1),n(this.black,t.darkSteel,!1),n(this.recess,t.rubber,!1),e}},ja=i=>{let t=i.index?i.toNonIndexed():i;return t.deleteAttribute("uv"),t};function Yp(i,t,e,n){return[0,Math.PI/2].map(s=>ja(new me(n*U,.12*U,.45*U).rotateY(s+Math.PI/4).translate(i,t,e)))}function lv(i,t,e,n){let s=[];for(let[l,c]of i.supports){let h=qp(i.profile,l,c),d=h.q[2],u=d-Ur.floor,f=u-3,p=h.d-h.q[3]/2-Ur.side+1,x=h.dx,m=h.dy,g=-m,b=x,E=[];for(let y=0;y<=14;y++){let v=Math.PI/2+y/14*Math.PI;E.push([l+(Math.cos(v)*x+Math.sin(v)*g)*7,c+(Math.cos(v)*m+Math.sin(v)*b)*7])}E.push([l+x*p-g*7,c+m*p-b*7],[l+x*p+g*7,c+m*p+b*7]),s.push(ki(Un(E),f,3,{bevel:.35,curveSegments:4})),n.standoff(l,c,f-.8),n.screw(l,c,u)}let o=new pe;if(s.length){let l=ut(rn(s.map(ja)),e,{cast:!1,receive:!1});l.renderOrder=2,o.add(l)}return o}function cv(i,t){let e=i.getLength()/U,n=Math.ceil(e/3),s=new O(0,1,0),r=v=>{let w=i.getPointAt(Math.min(1,Math.max(0,v))),M=i.getTangentAt(Math.min(1,Math.max(0,v)));return{p:w,t:M,s:new O().crossVectors(M,s).normalize()}},a=(v,w,M,_=0)=>v.p.clone().addScaledVector(v.s,w*U).addScaledVector(s,M*U).addScaledVector(v.t,_*U),o=_c,l=o.rail,c=o.rod,h=o.dropRadius,d=e-h-o.spread,u=v=>{let w=Math.max(0,Math.min(1,v));return w*w*(3-2*w)},f=[],p=(v,w=c,M)=>f.push(new Ui(new Vn(v),M||v.length*2,w*U,8));for(let v of[-1,1]){let w=[];for(let M=0;M<=n;M++){let _=M/n*(e-h);w.push(a(r(_/e),v*(l+(h-l)*u((_-d)/o.spread)),c))}p(w,c,n)}let x=r((e-h)/e),m=[];for(let v=0;v<=16;v++){let w=v/16*Math.PI;m.push(a(x,-h*Math.cos(w),c,h*Math.sin(w)))}p(m);let{u:g,v:b}=o.sideRail;for(let v of t.sideRails){let w=[],M=Math.max(4,Math.ceil((v.to-v.from)*e/3));for(let _=0;_<=M;_++)w.push(a(r(v.from+(v.to-v.from)*_/M),-v.side*g,b));p(w,c,M)}let E=[];for(let v=0;v<=16;v++){let w=v/16*Math.PI;E.push(a(x,-(h+1)*Math.cos(w),b,(h+1)*Math.sin(w)))}p(E);for(let v of[-1,1])p([a(x,v*(h+1),c),a(x,v*(h+1),b)],c,4);let y=[[-l-4,c+3],[-l-2.5,-.5],[-l+1,-2.8],[0,-4.2],[l-1,-2.8],[l+2.5,-.5],[l+4,c+3]];for(let v=20;v<d;v+=55){let w=r(v/e);p(y.map(([M,_])=>a(w,M,_)),1.75,24)}return rn(f)}function hv(i,t,e){let n=[];for(let[o,l]of i.wireSupports){let c=qp(i.wire,o,l),h=c.q[2],d=c.d-_c.rail,u=h-5,f=Math.min(6.5,d-5),p=[[0,u-1.6/2],[f,u-1.6/2],[d-1.2,h+.4]];n.push(uv(p,o,l,c.dx,c.dy,11,1.6)),n.push(ja(new De(11/2*U,11/2*U,1.6*U,28).translate(...Ae(o,l,u-1.6/2).toArray())));let x=new De(1.5*U,1.5*U,10*U,10).rotateX(Math.PI/2).rotateY(Math.atan2(c.dy,c.dx));n.push(ja(x.translate(...Ae(o+c.dx*(d-1.6),l+c.dy*(d-1.6),h-.2).toArray()))),e.standoff(o,l,u-1.6-.8),e.screw(o,l,u)}let a=new pe;return n.length&&a.add(ut(rn(n),t.steel)),a}function uv(i,t,e,n,s,r,a){let o=i.map(([x,m])=>[x,m]),l=o.length,c=[],h=x=>{let m=o[Math.max(0,x-1)],g=o[Math.min(l-1,x+1)],b=g[0]-m[0],E=g[1]-m[1],y=Math.hypot(b,E),v=-E/y,w=b/y;if(x>0&&x<l-1){let M=o[x-1],_=o[x],T=o[x+1],R=[-(_[1]-M[1]),_[0]-M[0]],C=[-(T[1]-_[1]),T[0]-_[0]],L=Math.hypot(...R),F=Math.hypot(...C),D=[R[0]/L+C[0]/F,R[1]/L+C[1]/F],B=Math.hypot(...D),G=1/Math.max(.3,D[0]/B*(R[0]/L)+D[1]/B*(R[1]/L));v=D[0]/B*G,w=D[1]/B*G}return[v,w]},d=(x,m,g)=>{let[b,E]=h(x),y=o[x][0]+b*g*a/2,v=o[x][1]+E*g*a/2;return Ae(t+n*y-s*m*r/2,e+s*y+n*m*r/2,v)},u=(x,m,g,b)=>{for(let E of[x,g,m,x,b,g])c.push(E.x,E.y,E.z)};for(let x=0;x<l-1;x++){let m=[[-1,1],[1,1],[1,-1],[-1,-1]];for(let g=0;g<4;g++){let[b,E]=m[g],[y,v]=m[(g+1)%4];u(d(x,b,E),d(x,y,v),d(x+1,y,v),d(x+1,b,E))}}(x=>{let m=[[-1,1],[1,1],[1,-1],[-1,-1]].map(([g,b])=>d(x,g,b));u(m[0],m[1],m[2],m[3])})(l-1);let p=new be;return p.setAttribute("position",new ie(c,3)),p.computeVertexNormals(),p}function dv(i,t,e){let[n,s]=Cs.from,[r,a]=Cs.to,o=Math.hypot(r-n,a-s),l=Math.atan2(a-s,r-n)/Os,c=Le(new pe,(n+r)/2,(s+a)/2,0,l),h=Cs.height-3;for(let p of[-1,1])c.add(ut(new me(1.6*U,Cs.height*U,10*U).translate(p*(o/2)*U,Cs.height/2*U,0),t.steel));c.add(ut(new De(1.2*U,1.2*U,o*U,10).rotateZ(Math.PI/2).translate(0,h*U,0),t.steel,{cast:!1}));let d=o/2-5,u=h-5,f=new pe;f.add(ut(vc([[-d,0,0],[-d,0,-u],[d,0,-u],[d,0,0]],.9,{tension:.02,radial:6}),t.chrome,{cast:!1})),f.add(ut(vc([[-d,0,-u/2],[d,0,-u/2]],.7,{tension:0,radial:6}),t.chrome,{cast:!1})),f.position.y=h*U,c.add(f),i.add(c),e.gate={flap:f,open:0,velocity:0,at:Ae((n+r)/2,(s+a)/2,vn)}}function fv(i,t){for(let e of Bu()){let n=Du(e.color),s=ii(wp(e,192));s.repeat.set(1/(e.w*U),1/(e.l*U)),s.offset.set(.5,.5),n.map=s,n.emissiveMap=s;let r=new xe(ls(e.shape,.4,{curveSegments:6}),[n,Du(e.color)]);Le(r,e.x,e.y,-.34,e.angle),r.renderOrder=1,i.add(r),t.inserts.set(e.id,{mesh:r,mat:n,side:r.material[1],group:e.group,index:e.index,x:e.x,y:e.y,level:.06,goal:.06,flash:0})}}function pv(i,t,e){let[n,s]=fe.ballRest,r=s-vn,a=Lt.l/2-(Ve.front-Ve.wallT)/U,o=new pe;o.add(ut(ze([[0,0],[5.5,.4],[8.4,1.8],[9.5,4.5],[9.5,25.4],[0,25.4]],24).rotateX(Math.PI/2),t.rubber)),o.add(ut(new De(4.76*U,4.76*U,194*U,16).rotateX(Math.PI/2).translate(0,0,(6.4+97)*U),t.chrome));let l=ut(ze([[0,0],[6,0],[10.5,5],[14.3,16],[13.6,30],[8,33],[0,33.5]],28).rotateX(Math.PI/2).translate(0,0,196*U),t.rubberRoyal);o.add(l),o.position.copy(Ae(n,r,10)),i.add(o);for(let f of o.children)f.userData.action="plunger";e.interactive.push(l);let c=r-25.4-a,h=24,d=[];for(let f=0;f<=h*16;f++){let p=f/16*Math.PI*2;d.push(new O(Math.cos(p)*5.55*U,Math.sin(p)*5.55*U,-(f/(h*16))*c*U))}let u=ut(new Ui(new Vn(d),h*16,.4*U,5),t.steel);u.position.copy(Ae(n,a,10)),i.add(u),i.add(Le(ut(new me(28*U,34*U,5*U).translate(0,10*U,-2.5*U),t.darkSteel),n,a+5,0)),e.plunger={group:o,spring:u,springLen:c,rest:o.position.clone(),pull:0,offset:0}}function mv(i,t,e){let n=new va(vn*U,40,28);e.ball=ut(n,t.ball),e.ball.position.copy(Ae(fe.ballRest[0],fe.ballRest[1],vn)),i.add(e.ball),e.shooterBall=ut(n,t.ball),e.shooterBall.position.copy(Ae(fe.ballRest[0],fe.ballRest[1],vn)),i.add(e.shooterBall)}function gv(i,t,e){let n=[[106,300],[368.35,300],[112,332],[362.35,332],...yc],s=ze([[0,0],[3.2,0],[4.6,3],[5.1,7],[5.1,12],[4.2,15.5],[2.4,17],[0,17.3]],16),r=new De(4.2*U,4.6*U,6*U,12).translate(0,3*U,0);for(let[o,l]of n){let c=t.bulb.clone(),h=new pe;h.add(ut(r,t.darkSteel));let d=new xe(s,c);d.position.y=5*U,h.add(d),i.add(Le(h,o,l)),e.bulbs.push(c)}let a=[[109,316,24,.9],[365.35,316,24,.9],...yc.map(([o,l])=>[o+(o<Lt.cx?6:-6),l,20,.55])];for(let[o,l,c,h]of a){let d=new Ta(Ds,0,.4,2);d.position.copy(Ae(o,l,c)),d.userData.base=h*.02,i.add(d),e.gi.push(d)}}function xv(i,t,e,n,s,r){let a=Ve,o=a.front-a.back,l=Op(a.back),c=a.top-l,h=a.inner+a.wallT*2,d=ii(n.cabinetSide,s),u=new Ke({map:d,roughness:.4,clearcoat:.7,clearcoatRoughness:.2}),f=u.clone();f.map=d.clone(),f.map.wrapS=wn,f.map.repeat.x=-1,f.map.needsUpdate=!0;let p=new gn([[1,(a.top-l)/c],[0,(a.top-l)/c],[0,0],[1,(a.bottom-l)/c]].map(([L,F])=>new ot(L,F))),x=(L,F)=>{let D=new ys(p).applyMatrix4(new he().set(0,0,1,L,0,c,0,l,o,0,0,a.back,0,0,0,1));return F>0&&(D.scale(-1,1,1),D.translate(2*L,0,0)),D.computeVertexNormals(),D};for(let L of[-1,1]){let F=L*(a.inner/2+a.wallT+25e-5),D=L*(a.inner/2);i.add(ut(x(F,L),L>0?f:u)),i.add(ut(x(D,-L),e.cabinetInner));let B=ut(new me(a.wallT+.012,.012,o+.004),e.armour);B.position.set(L*(a.inner/2+a.wallT/2-.002),a.top+.006,(a.front+a.back)/2),i.add(B)}let m=a.top-a.bottom-.04,g=ut(new me(h,m,a.wallT),e.cabinet);g.position.set(0,a.bottom+m/2,a.front-a.wallT/2),i.add(g);let b=ut(new hn(h,m),new Ke({map:ii(n.cabinetFront,s),roughness:.4,clearcoat:.7,clearcoatRoughness:.2}),{cast:!1});b.position.set(0,a.bottom+m/2,a.front+4e-4),i.add(b);let E=a.top-l,y=ut(new me(h,E,a.wallT),e.cabinet);y.position.set(0,l+E/2,a.back+a.wallT/2),i.add(y);let v=ut(new me(h,a.wallT,o/Math.cos(Pc)),e.cabinet);v.rotation.x=-Pc,v.position.set(0,(a.bottom+l)/2+a.wallT/2,(a.front+a.back)/2),i.add(v);let w=ut(new Ic(h+.006,.026,.072,.006),e.trim);w.position.set(0,a.top+.004,a.front-.03),i.add(w);let M=a.bottom+m*.5,_=ut(new Ic(.25,.012,.28,.012),e.trim);_.rotation.x=Math.PI/2,_.position.set(0,M-.02,a.front+.004),i.add(_);let T=ut(new me(.21,.24,.004),e.darkSteel);T.position.set(0,M-.02,a.front+.011),i.add(T);for(let L of[-.048,.048]){let F=ut(new me(.06,.085,.006),e.aluminium);F.position.set(L,M+.045,a.front+.014),i.add(F);let D=new xe(new me(.004,.026,.002),new mn({color:bc}));D.position.set(L,M+.055,a.front+.0175),i.add(D);let B=ut(new De(.008,.008,.004,16).rotateX(Math.PI/2),e.trim);B.position.set(L,M+.02,a.front+.018),i.add(B)}let R=new Ke({color:Nn,emissive:Nn,emissiveIntensity:.5,roughness:.25,clearcoat:1,clearcoatRoughness:.05});R.userData.gain=Ja(Nn,1)*.32;let C=ut(ze([[0,0],[15,0],[15,4],[13,9],[0,10]],28).rotateX(Math.PI/2),R);C.position.set(-.205,a.top-.07,a.front),i.add(C),r.startButton=C,i.updateMatrixWorld(!0);for(let[L,F]of[[-1,a.front-.06],[1,a.front-.06],[-1,a.back+.06],[1,a.back+.06]]){let D=new O(L*(h/2-.035),Op(F),F).applyMatrix4(i.matrixWorld),B=D.y-a.floor,G=new pe;G.add(ut(new me(.06,B,.06),e.armour)),G.add(ut(new De(.022,.026,.02,16).translate(0,-B/2-.01,0),e.rubber)),G.position.set(D.x,a.floor+B/2+.02,D.z),t.add(G)}}var Ic=class extends be{constructor(t,e,n,s){super();let r=new me(t-2*s,e,n-2*s),a=new gn,o=t/2,l=n/2;a.moveTo(-o+s,-l),a.lineTo(o-s,-l),a.quadraticCurveTo(o,-l,o,-l+s),a.lineTo(o,l-s),a.quadraticCurveTo(o,l,o-s,l),a.lineTo(-o+s,l),a.quadraticCurveTo(-o,l,-o,l-s),a.lineTo(-o,-l+s),a.quadraticCurveTo(-o,-l,-o+s,-l);let c=new mi(a,{depth:e,bevelEnabled:!1,curveSegments:6});c.rotateX(Math.PI/2),c.translate(0,e/2,0),r.dispose(),this.copy(c)}};function _v(i,t,e,n,s,r,a=s){let o=hs,l=new pe;r.body.updateMatrixWorld(!0);let c=new O(0,Ve.top,Ve.back+.02).applyMatrix4(r.body.matrixWorld);l.position.set(0,c.y+.004,c.z+.02),i.add(l),r.backbox=l;let h=new Ke({map:ii(e.backboxSide,s),roughness:.4,clearcoat:.7,clearcoatRoughness:.2}),d=ut(new me(o.w,o.h,o.d),[h,h,t.cabinet,t.cabinet,t.cabinet,t.cabinet]);d.position.set(0,o.h/2,-o.d/2),l.add(d);let u=new gn;u.moveTo(-o.w/2,0),u.lineTo(o.w/2,0),u.lineTo(o.w/2,o.h),u.lineTo(-o.w/2,o.h),u.lineTo(-o.w/2,0);let f=new pi,p=o.w/2-.022;f.moveTo(-p,.018),f.lineTo(-p,o.h-.02),f.lineTo(p,o.h-.02),f.lineTo(p,.018),f.lineTo(-p,.018),u.holes.push(f);let x=ut(new mi(u,{depth:.012,bevelEnabled:!0,bevelSize:.002,bevelThickness:.002,bevelSegments:2}),t.trim);x.position.z=-.004,l.add(x);let m=o.glassY-.03,g=ut(new me(o.w-.044,m,.006),t.speaker);g.position.set(0,.018+m/2,.001),l.add(g);for(let C of[-1,1]){let L=new pe,F=ut(ze([[0,0],[48,0],[52,1.5],[55,4],[0,4]],40).rotateX(Math.PI/2),t.darkSteel);L.add(F);for(let D=10;D<=44;D+=8.5){let B=new xe(new mr(D*U,1.1*U,6,40),t.speaker);B.position.z=4.2*U,L.add(B)}L.position.set(C*(o.dmdW/2+.072),o.dmdY,.004),l.add(L)}let b=new jn(n);b.colorSpace=$e,b.anisotropy=s;let E=new xe(new hn(o.dmdW,o.dmdH),new mn({map:b,toneMapped:!1}));E.position.set(0,o.dmdY,.0052),E.userData.action="dmd",l.add(E);let y=ut(new me(o.dmdW+.024,o.dmdH+.024,.004),t.cabinetInner);y.position.set(0,o.dmdY,.0025),l.add(y),r.dmd={mesh:E,texture:b},r.interactive.push(E);let v=ii(e.backglass,s),w=o.glassY+o.glassH/2,M=yv(v,a),_=new xe(new hn(o.glassW,o.glassH),M.material);_.position.set(0,w,.002),l.add(_),M.mesh=_,r.interactive.push(_);let T=new xe(new hn(o.glassW,o.glassH),t.screenGlass);T.position.set(0,w,.006),l.add(T),r.backglass={mesh:_,material:M.material,lcd:M,level:0};let R=new Je;R.position.set(0,w,.0065),l.add(R),r.heroAnchor=R,r.backglassSize=[o.glassW,o.glassH]}function yv(i,t){let e={tA:{value:i},tB:{value:i},uSeq:{value:1},uTime:{value:0},uLive:{value:new ot(1,1)}},n=new mn({map:i,toneMapped:!1,color:new Vt(0,0,0)});n.onBeforeCompile=r=>{Object.assign(r.uniforms,e),r.fragmentShader=`uniform sampler2D tA;
uniform sampler2D tB;
uniform float uSeq;
uniform float uTime;
uniform vec2 uLive;
`+r.fragmentShader.replace("#include <map_fragment>",`
      {
        float down = 1.0 - vMapUv.y;
        float scan = uSeq * 1.08;
        float shown = smoothstep( down - 0.008, down + 0.008, scan );
        // A negative LOD bias picks the sharper mip: the screen is seen at an angle and somewhat smaller than its
        // pictures, where plain trilinear filtering goes soft.
        vec3 col = mix( texture2D( tA, vMapUv, -0.65 ).rgb, texture2D( tB, vMapUv, -0.65 ).rgb, shown );
        // The translite's rays (art.js drawBackglass: 14 pairs from the sun at 0.59 of the way down, swirling by
        // 0.5 (r / 1.1)^1.5): a wave of light running round them, outside the sun.
        vec2 q = ( vMapUv - vec2( 0.5, 0.41 ) ) * vec2( 1.32, 1.0 );
        float rr = length( q );
        float beam = sin( 14.0 * ( -atan( q.y, q.x ) - 0.5 * pow( rr / 1.1, 1.5 ) ) + uTime * 0.8 );
        col *= 1.0 + mix( uLive.x, uLive.y, shown ) * 0.2 * beam * smoothstep( 0.3, 0.42, rr );
        float live = step( 0.0005, uSeq ) * ( 1.0 - smoothstep( 0.92, 1.08, scan ) );
        col *= 1.0 - 0.18 * live * ( 1.0 - smoothstep( 0.0, 0.25, uSeq ) );
        col += vec3( 0.36, 0.48, 1.0 ) * exp( -pow( ( down - scan ) * 90.0, 2.0 ) ) * 0.7 * live;
        diffuseColor.rgb *= col;
      }`)};let s={material:n,mesh:null,showing:"art",seq:1,still:!1,pictures:{art:{texture:i,action:null,live:1}}};return s.add=(r,a,o)=>{let l=new jn(a);l.colorSpace=$e,l.anisotropy=t,s.pictures[r]={texture:l,action:o}},s.show=(r,a=!1)=>{let o=s.pictures[r];!o||r===s.showing||(s.seq<1&&s.seq>.5&&(e.tA.value=e.tB.value,e.uLive.value.x=e.uLive.value.y),e.tB.value=o.texture,e.uLive.value.y=o.live||0,s.seq=a?1:0,s.showing=r)},s.update=r=>{s.seq<1&&(s.seq=Math.min(1,s.seq+r/.85)),s.seq>=1&&(e.tA.value=e.tB.value,e.uLive.value.x=e.uLive.value.y),e.uSeq.value=s.seq,s.still||(e.uTime.value+=r),s.mesh&&(s.mesh.userData.action=s.seq>.6?s.pictures[s.showing].action:null)},s}ne.tonemapping_pars_fragment=ne.tonemapping_pars_fragment.replace("vec3 CustomToneMapping( vec3 color ) { return color; }",`vec3 CustomToneMapping( vec3 color ) {
    color = NeutralToneMapping( color );
    vec3 s = mix( color * 12.92, 1.055 * pow( color, vec3( 0.41667 ) ) - 0.055, step( 0.0031308, color ) );
    s = max( s + ( fract( 52.9829189 * fract( dot( gl_FragCoord.xy, vec2( 0.06711056, 0.00583715 ) ) ) ) - 0.5 ) / 255.0, 0.0 );
    return mix( s / 12.92, pow( ( s + 0.055 ) / 1.055, vec3( 2.4 ) ), step( 0.04045, s ) );
  }`);var Zp="1.35";ne.lights_fragment_end+=`
#if defined( STANDARD )
	{
		vec3 s = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
		float k = min( 1.0, ${Zp} / max( max( max( s.r, s.g ), s.b ), 1e-4 ) );
		reflectedLight.directSpecular *= k;
		reflectedLight.indirectSpecular *= k;
		#ifdef USE_CLEARCOAT
			vec3 c = clearcoatSpecularDirect + clearcoatSpecularIndirect;
			float kc = min( 1.0, ${Zp} / max( max( max( c.r, c.g ), c.b ), 1e-4 ) );
			clearcoatSpecularDirect *= kc;
			clearcoatSpecularIndirect *= kc;
		#endif
	}
#endif
`;var Zu=class extends Xa{setSize(t,e){super.setSize(Math.ceil(t/2),Math.ceil(e/2))}_overrideVisibility(){super._overrideVisibility(),this.scene.traverseVisible(t=>{t.isMesh&&(t.userData.noAO||[].concat(t.material).some(e=>e.transparent))&&(t.visible=!1,this._visibilityCache.push(t))})}},$u=class extends uc{constructor(t,e,n,s){super(t,e,n),this.ao=s,this._renderTargetDepth.dispose(),this.materialBokeh.defines.DEPTH_PACKING=0,this.uniforms.tDepth.value=s.depthTexture}setSize(t,e){this.uniforms.aspect.value=t/e}render(t,e,n){this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,t.setRenderTarget(e),t.clear(),this._fsQuad.render(t)}},Ju=class extends Pr{setSize(t,e){super.setSize(Math.ceil(t/2),Math.ceil(e/2))}};function vv(i,t){let e=new hr;e.background=new Vt(.0036,.0042,.0058);let n=new xe(new hn(40,40).rotateX(-Math.PI/2),new mn({color:new Vt(.016,.017,.021)}));n.position.y=-2,e.add(n);let s=(o,l,c,h,d,u,f)=>{let p=new xe(new hn(o,l),new mn({color:new Vt(h).multiplyScalar(c),side:_n}));p.position.set(d,u,f),p.lookAt(0,0,0),e.add(p)};s(12,12,.22,15856631,0,7,0),s(6,3,3,16185338,0,5,-3.5),s(.7,5,2.4,16777215,-5,2,-1),s(.7,5,2.5,15002367,5,2,-1.5),s(1.6,1.6,5,16775409,2,6,3.5),s(6,2,1.2,15987959,0,1.2,6),s(9,.4,.32,2841087,0,.35,-5);let r=new Rr(i),a=r.fromScene(e,.015,.1,50,{size:t});return r.dispose(),e.traverse(o=>{o.geometry?.dispose(),o.material?.dispose()}),a.texture}function $p(i,t){let e=new rc({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance",outputBufferType:t.effects?He:nn}),n=t.pixelRatio;e.setPixelRatio(n),e.outputColorSpace=$e,e.toneMapping=Ca,e.toneMappingExposure=1.1,e.shadowMap.enabled=t.shadows,e.shadowMap.type=vs,e.shadowMap.autoUpdate=!1;let s=new hr;s.background=new Vt(395018),s.fog=new ia(395018,3.2,7.5);let r=vv(e,t.low?256:512);s.environment=r,s.environmentIntensity=.6;let a=new en(32,1,.02,20),o={};o.key=new yr(16775151,14,0,.45,.7,2),o.key.position.set(.55,2.3,1.1),o.key.target.position.set(0,-.1,0),o.key.castShadow=t.shadows,o.key.shadow.mapSize.set(t.shadowSize,t.shadowSize),Object.assign(o.key.shadow,{bias:-4e-4,normalBias:.003,radius:t.low?2:3,focus:.7}),o.key.shadow.camera.near=1.2,o.key.shadow.camera.far=4.2,s.add(o.key,o.key.target),o.rim=new vr(12833023,1.25),o.rim.position.set(-1.2,1.6,-2.4),s.add(o.rim),o.fill=[-1,1].map(M=>{let _=new vr(15133695,.42);return _.position.set(M*2.2,.5,2.4),s.add(_),_}),o.focus=new yr(16775410,0,0,.42,1,2),s.add(o.focus,o.focus.target);let l=Mv(t),c=new xe(new hn(12,12).rotateX(-Math.PI/2),new _e({map:l.map,emissiveMap:l.glow,emissive:16777215,emissiveIntensity:.5,roughness:.85}));c.position.y=Ve.floor,c.receiveShadow=t.shadows,s.add(c);let h=null,d=null,u=null;if(t.effects){h=new Zu(s,a,1,1,void 0,{radius:.035,distanceExponent:1.5,thickness:.04,distanceFallOff:1,scale:1.1,samples:12},{lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),h.blendIntensity=.7,d=new Ju(new ot(1,1),.22,.2,1.6),d.highPassUniforms.smoothWidth.value=.5;let M=new hc(lp);M.uniforms.offset.value=.85,M.uniforms.darkness.value=1,u=new $u(s,a,{focus:1,aperture:0,maxblur:.005},h),u.uniforms.range={value:0},u.materialBokeh.fragmentShader=u.materialBokeh.fragmentShader.replace("uniform float focus;",`uniform float focus;
		uniform float range;`).replace("float factor = ( focus + viewZ );",`float factor = ( focus + viewZ );
			factor = sign( factor ) * max( 0.0, abs( factor ) - range );`),e.setEffects([h,u,d,M])}let f=1,p=1;function x(M,_){f=M,p=_,e.setSize(M,_,!1),a.aspect=M/_,a.updateProjectionMatrix()}function m(){e.shadowMap.needsUpdate=!0,e.render(s,a)}let g=16.7,b=0,E=performance.now()+4e3;function y(M){b&&(g+=(Math.min(100,M-b)-g)*.05),b=M,!(M<E||g<21)&&(u&&u.enabled?u.enabled=!1:h&&h.enabled?h.enabled=!1:n>1&&(n=Math.max(1,n-.25),e.setPixelRatio(n),x(f,p)),E=M+2500,g=16.7)}let v=new O;function w(M,_,T,R=0){v.copy(a.position).sub(M).setY(0).normalize(),o.focus.position.copy(M).addScaledVector(v,.28).add(new O(0,.62,0)),o.focus.target.position.copy(M),o.focus.intensity=.55*T,u&&(u.uniforms.focus.value=_,u.uniforms.aperture.value=.012*T,u.uniforms.range.value=.012+.3*R)}return{renderer:e,scene:s,camera:a,lights:o,ao:h,bloom:d,dof:u,envMap:r,resize:x,render:m,govern:y,focusOn:w,floor:c}}function Mv(i){let t=i.low?1024:2048,e=t/40,n=e*.085,s=()=>{let x=document.createElement("canvas");return x.width=x.height=t,x},r=(x,m)=>{x.strokeStyle=`rgba(244, 245, 247, ${m})`,x.lineWidth=Math.max(1,t/1400),x.beginPath();for(let g=e/2;g<t;g+=e)for(let b=e/2;b<t;b+=e)x.moveTo(b-n,g),x.lineTo(b+n,g),x.moveTo(b,g-n),x.lineTo(b,g+n);x.stroke()},a=s(),o=a.getContext("2d");o.fillStyle="#363a42",o.fillRect(0,0,t,t),r(o,.08);let l=s(),c=l.getContext("2d");c.fillStyle="#000",c.fillRect(0,0,t,t);let h=c.createRadialGradient(t/2,t/2,0,t/2,t/2,t*.2);h.addColorStop(0,"rgba(43, 89, 255, 0.5)"),h.addColorStop(.5,"rgba(43, 89, 255, 0.16)"),h.addColorStop(1,"rgba(43, 89, 255, 0)"),c.fillStyle=h,c.fillRect(0,0,t,t);let d=s(),u=d.getContext("2d");r(u,1),u.globalCompositeOperation="source-in";let f=u.createRadialGradient(t/2,t/2,0,t/2,t/2,t*.26);f.addColorStop(0,"rgba(110, 140, 255, 0.7)"),f.addColorStop(1,"rgba(110, 140, 255, 0)"),u.fillStyle=f,u.fillRect(0,0,t,t),c.drawImage(d,0,0);let p=x=>{let m=new jn(x);return m.colorSpace=$e,m.anisotropy=i.anisotropy,m};return{map:p(a),glow:p(l)}}function Jp(){let i=Math.min(innerWidth,innerHeight)<700,t=matchMedia("(pointer: coarse)").matches,e=i||t;return{low:e,effects:!e,pixelRatio:Math.min(devicePixelRatio||1,1.5),shadows:!0,shadowSize:e?1024:2048,playfieldScale:e?2.4:3.6,anisotropy:e?4:8}}var Br=Math.PI/180,Kp=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Sv=i=>i*i*i*(i*(i*6-15)+10),Dc=class{constructor(t){this.camera=t,this.poses=[],this.anchors=[],this.holds=[],this.current=null,this.parallax={x:0,y:0,tx:0,ty:0},this.view={width:1,height:1,header:64,layout:"wide",panelTop:0,panelLeft:0}}setPoses(t){this.poses=t}measure(t,e){let n=scrollY,s=a=>a.getBoundingClientRect().top+n,r=a=>+a.dataset.hold||1;this.anchors=t.map(a=>s(a)+a.offsetHeight/2-e/2),this.anchors[0]=0,this.holds=t.map((a,o)=>{let l=o>0?this.anchors[o]-this.anchors[o-1]:1/0,c=o<t.length-1?this.anchors[o+1]-this.anchors[o]:1/0;return Math.min(Math.min(l,c,a.offsetHeight)*.42*r(a),Math.min(l,c)*.75)})}setStops(t,e){let n=scrollY;this.holds=e.slice(),this.anchors=t.map((s,r)=>s.getBoundingClientRect().top+n+e[r]/2)}floatAt(t){let e=this.anchors,n=this.holds,s=e.length;if(!s||t<=e[0]+n[0]/2)return 0;for(let r=0;r<s-1;r++){let a=e[r]+n[r]/2,o=e[r+1]-n[r+1]/2;if(t<a)return r;if(t<=o)return r+Sv(Kp((t-a)/Math.max(1,o-a)))}return s-1}holdProgress(t,e){let n=this.anchors[t]-this.holds[t]/2;return Kp((e-n)/Math.max(1,this.holds[t]))}setView(t,e,n){this.view.width=t,this.view.height=e,this.view.header=n;let s=t/e>1.05;this.view.layout=s?t>=900&&e>=540?"wide":"side":"tall",this.view.panelTop=Math.round(Math.max(e*.47,e-460)),this.view.panelLeft=Math.round(t*.54)}frame(t){let{width:e,height:n,header:s,layout:r}=this.view,a=s/n;if(t.side==="center")return{cx:.5,cy:.5,fx:.9,fy:.9};if(r==="wide"){if(t.side==="hero")return{cx:.5,cy:a/2+.5,fx:.96,fy:(1-a)*.97};let l=Math.min(.42,(Math.min(560,e*.4)+80)/e);return{cx:t.side==="left"?l+(1-l)/2:(1-l)/2,cy:a/2+.5,fx:(1-l)*.98,fy:(1-a)*.98}}if(r==="side"){let l=this.view.panelLeft/e;return{cx:l/2,cy:(a+1)/2,fx:l*.94,fy:(1-a)*.92}}let o=this.view.panelTop/n;return{cx:.5,cy:(a+o)/2,fx:.96,fy:(o-a)*.92}}resolve(t){this.view.layout==="tall"&&t.tall&&(t={...t,...t.tall});let e=this.frame(t),n=(t.fov||32)*Br,s=this.view.width/this.view.height,r=Math.tan(n/2),a=Math.max(t.fit[1]/(2*r*e.fy),t.fit[0]/(2*r*s*e.fx))*(t.zoom||1);return{target:t.target.clone(),az:t.az*Br,el:t.el*Br,d:a,fov:t.fov||32,cx:e.cx,cy:e.cy,sharp:t.sharp||0}}blend(t,e,n,s=0){return{target:t.target.clone().lerp(e.target,n),az:t.az+(e.az-t.az)*n,el:t.el+(e.el-t.el)*n+Math.sin(Math.PI*n)*s*Br,d:Math.exp(Math.log(t.d)+(Math.log(e.d)-Math.log(t.d))*n),fov:t.fov+(e.fov-t.fov)*n,cx:t.cx+(e.cx-t.cx)*n,cy:t.cy+(e.cy-t.cy)*n,sharp:t.sharp+(e.sharp-t.sharp)*n}}at(t){let e=this.poses.length,n=Math.min(e-1,Math.floor(t)),s=t-n,r=this.resolve(this.poses[n]);if(s<=0||n>=e-1)return r;let a=this.resolve(this.poses[n+1]);return this.blend(r,a,s,this.poses[n+1].lift||0)}pointer(t,e){this.parallax.tx=t,this.parallax.ty=e}apply(t,e,{damping:n=9,instant:s=!1}={}){let r=s?1:1-Math.exp(-e*n);(!this.current||s)&&(this.current={...t,target:t.target.clone()});let a=this.current;a.target.lerp(t.target,r),a.az+=(t.az-a.az)*r,a.el+=(t.el-a.el)*r,a.d+=(t.d-a.d)*r,a.fov+=(t.fov-a.fov)*r,a.cx+=(t.cx-a.cx)*r,a.cy+=(t.cy-a.cy)*r,a.sharp+=(t.sharp-a.sharp)*r;let o=this.parallax,l=s?1:1-Math.exp(-e*3);o.x+=(o.tx-o.x)*l,o.y+=(o.ty-o.y)*l;let c=a.az+o.x*1.6*Br,h=a.el-o.y*1*Br,d=this.camera;d.position.set(a.target.x+Math.sin(c)*Math.cos(h)*a.d,a.target.y+Math.sin(h)*a.d,a.target.z+Math.cos(c)*Math.cos(h)*a.d),d.lookAt(a.target),d.fov=a.fov;let{width:u,height:f}=this.view;d.setViewOffset(u,f,u*(.5-a.cx),f*(.5-a.cy),u,f),d.updateProjectionMatrix()}};var Ti=Math.PI/180,bv=24,jp=40,wv=1e3,Qp=60*Ti,tm=Object.freeze({rubber:{e:.9,falloff:.1,f:.9,scatter:1},band:{e:.85,falloff:.13,f:.9,scatter:0},sling:{e:.85,falloff:0,f:.8,scatter:1},metal:{e:.4,falloff:0,f:.2,scatter:0},pop:{e:.4,falloff:0,f:.2,scatter:2},plastic:{e:.42,falloff:0,f:.3,scatter:0},drop:{e:.625,falloff:.05,f:.3,scatter:1},ramp:{e:.5,falloff:.2,f:.15,scatter:0},wire:{e:.4,falloff:0,f:.15,scatter:0},flipper:{e:.88,falloff:.15,f:.9,scatter:0}}),kr=(i,t,e)=>i<t?t:i>e?e:i;function Ku(i,t){let e=(typeof i.mat=="string"?tm[i.mat]:i.mat)||tm[t];return{e:i.e??e.e,falloff:i.falloff??e.falloff,f:i.f??e.f,scatter:i.scatter??e.scatter??0}}function Tv(i){let t=i.seed=i.seed+1831565813>>>0;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}var Ev=(i,t)=>i.layer==="*"||i.layer===t;function Av(i,t,e){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){let[a,o]=i[s],[l,c]=i[r];o>e!=c>e&&t<(l-a)*(e-o)/(c-o)+a&&(n=!n)}return n}function Rv(i,t,e,n){let s=i.len2>0?kr(((t-i.ax)*i.ex+(e-i.ay)*i.ey)/i.len2,0,1):0,r=i.ax+i.ex*s,a=i.ay+i.ey*s,o=t-r,l=e-a,c=Math.hypot(o,l),h=n+i.r;if(c>=h)return null;let d,u;if(c>1e-9)d=o/c,u=l/c;else{let f=Math.sqrt(i.len2)||1;d=-i.ey/f,u=i.ex/f}return{nx:d,ny:u,depth:h-c,px:r+d*i.r,py:a+u*i.r,t:s}}function Cv(i,t,e,n){let s=t-i.x,r=e-i.y,a=Math.hypot(s,r),o=n+i.r;if(a>=o)return null;let l=a>1e-9?s/a:0,c=a>1e-9?r/a:1;return{nx:l,ny:c,depth:o-a,px:i.x+l*i.r,py:i.y+c*i.r}}var ju=class{constructor(t){this.p=t,Object.assign(this,{x:0,y:0,z:t.R,vx:0,vy:0,vz:0,wx:0,wy:0,wz:0,layer:0,active:!1,serial:0}),this.q=[0,0,0,1],this.view={x:0,y:0,z:t.R},this.ox=0,this.oy=0,this.oz=t.R}get spin(){return{x:this.wx,y:this.wy,z:this.wz}}get speed(){return Math.hypot(this.vx,this.vy)}place(t,e,n=0,s=0,{layer:r=0}={}){let a=this.p,o=a.R;Object.assign(this,{x:t,y:e,vx:n,vy:s,vz:0,wx:-s/o,wy:n/o,wz:0,layer:r,active:!0}),this.serial++;let l=r!==0?a.trackOf(r):null;l?(l.cursor=-1,this.z=a.locate(l,t,e).z):this.z=o,this.ox=t,this.oy=e,this.oz=this.z,Object.assign(this.view,{x:t,y:e,z:this.z});for(let c of a.triggers)c.inside=!1;for(let c of a.saucers)c.holding=!1;return this}remove(){this.active=!1,this.serial++;for(let t of this.p.triggers)t.inside=!1;for(let t of this.p.saucers)t.holding=!1}},Lc=class{constructor(t){Object.assign(this,{baseR:11.28,tipR:6.64,length:62.8,strokeTime:.028,hold:.375,holdAngle:6,ret:.055,eosBounce:.2,restBounce:.1,inertia:2200},t),this.id=t.id||"flipper-"+t.side,this.kind="flipper",this.dir=Math.sign(t.up-t.rest)||1,this.restRad=t.rest*Ti,this.stroke=Math.abs(t.up-t.rest)*Ti,this.holdAngle*=Ti,this.alpha=2*this.stroke/this.strokeTime**2,this.mat=Ku(t,"flipper");let e=(this.baseR-this.tipR)/this.length;this.cotPhi=e/Math.sqrt(1-e*e),this.a=0,this.w=0,this.oa=0,this.on=!1,this.queue=[]}get theta(){return this.restRad+this.dir*this.a}get omega(){return this.w*this.dir}surfaceSpeed(){return Math.abs(this.w)*(this.length+this.tipR)}update(t){let e=this.on?this.alpha*(this.a>this.stroke-this.holdAngle?this.hold:1):-this.alpha*this.ret;this.w+=e*t,this.a+=this.w*t,this.a>=this.stroke?(this.a=this.stroke,this.w>0&&(this.w=this.w>Qp?-this.eosBounce*this.w:0)):this.a<=0&&(this.a=0,this.w<0&&(this.w=this.w<-Qp?-this.restBounce*this.w:0))}test(t,e,n){let s=this.theta,r=Math.cos(s),a=Math.sin(s),o=t-this.x,l=e-this.y,c=o*r+l*a,h=-o*a+l*r,d=Math.abs(h);if(c<-this.baseR-n||c>this.length+this.tipR+n||d>this.baseR+n)return null;let u=kr(c-d*this.cotPhi,0,this.length),f=this.baseR+(this.tipR-this.baseR)*u/this.length,p=c-u,x=Math.hypot(p,d);if(x>=f+n)return null;let m=h<0?-1:1,g=x>1e-9?p/x:0,b=x>1e-9?d/x*m:m,E=g*r-b*a,y=g*a+b*r,v=this.x+u*r+E*f,w=this.y+u*a+y*f,M=this.omega;return{nx:E,ny:y,depth:f+n-x,px:v,py:w,u,svx:-M*(w-this.y),svy:M*(v-this.x),body:this}}locked(t){let e=-Math.sign(t)*this.dir;return e<0&&this.a<=1e-9||e>0&&this.a>=this.stroke-1e-9}push(t){this.w+=t*this.dir}},Uc=class{constructor(t={}){let e={pitch:6.5,g:9810,radius:13.5,mass:.0806,step:.001,floorFriction:.2,rolling:.0035,spinDecay:1.5,hitMin:50,cell:32,seed:1,...t};this.o=e,this.seed=e.seed>>>0||1,this.R=e.radius,this.mass=e.mass,this.dt=e.step,this.gy=-e.g*Math.sin(e.pitch*Ti),this.gN=e.g*Math.cos(e.pitch*Ti),this.maxTravel=.2*this.R,this.bounds=e.bounds||null,this.colliders=[],this.flippers=[],this.saucers=[],this.triggers=[],this.tracks=[],this.handlers={},this.muted=!1,this.grid=null,this.steps=0,this.time=0,this.acc=0,this.ball=new ju(this)}collider(t,e,n){return Object.assign(t,{id:e.id??null,kind:e.kind||t.kind,layer:e.layer??0,enabled:!0,mat:Ku(e,n),lastKick:-1e9,solid:!0}),this.colliders.push(t),this.grid=null,t.id}addWall(t,e,n,s,r={}){let a=r.r||0,o=n-t,l=s-e,c={type:"seg",kind:"wall",ax:t,ay:e,bx:n,by:s,r:a,ex:o,ey:l,len2:o*o+l*l,box:[Math.min(t,n)-a,Math.min(e,s)-a,Math.max(t,n)+a,Math.max(e,s)+a]};if(r.oneWay){let h=Math.hypot(...r.oneWay);c.oneWay=[r.oneWay[0]/h,r.oneWay[1]/h]}return r.kick&&Object.assign(c,{kick:r.kick,minSpeed:r.minSpeed??120,recycle:r.recycle??.06,normal:r.normal}),this.collider(c,r,"metal")}addCircle(t,e,n,s={}){let r={type:"circle",kind:s.kick?"pop":"post",x:t,y:e,r:n,box:[t-n,e-n,t+n,e+n]};return s.kick&&Object.assign(r,{kick:s.kick,minSpeed:s.minSpeed??50,recycle:s.recycle??.03}),this.collider(r,s,s.kick?"pop":"rubber")}addKicker(t,e,n,s,r={}){let a=Math.hypot(n-t,s-e),o=r.normal||[-(s-e)/a,(n-t)/a];return r.away&&(r.away[0]-t)*o[0]+(r.away[1]-e)*o[1]>0&&(o=[-o[0],-o[1]]),this.addWall(t,e,n,s,{kind:"sling",mat:"sling",kick:2200,minSpeed:120,recycle:.06,...r,normal:o})}addFlipper(t){let e=new Lc(t);return this.flippers.push(e),e.id}addSaucer(t,e,n={}){let s={id:n.id||"saucer"+this.saucers.length,kind:"saucer",x:t,y:e,reach:n.reach??10.5,maxSpeed:n.maxSpeed??900,hold:n.hold??1,kick:n.kick??1600,angle:(n.angle??-90)*Ti,sink:n.sink??5,rearm:n.rearm??.3,holding:!1,releaseAt:0,armedAt:0,enabled:!0};return this.saucers.push(s),s.id}addTrigger(t,e,n={}){let s={id:e,kind:n.kind||(n.drain?"drain":"trigger"),layer:n.layer??0,drain:!!n.drain,enabled:!0,inside:!1};if(Array.isArray(t)){s.poly=t.map(o=>[o[0],o[1]]);let r=s.poly.map(o=>o[0]),a=s.poly.map(o=>o[1]);s.box=[Math.min(...r),Math.min(...a),Math.max(...r),Math.max(...a)]}else Object.assign(s,{x:t.x,y:t.y,r:t.r}),s.box=[t.x-t.r,t.y-t.r,t.x+t.r,t.y+t.r];return this.triggers.push(s),e}addTrack(t,e={}){let n=e.id||"track"+this.tracks.length,s={id:n,layer:e.layer??n,kind:e.kind||"ramp",mat:Ku(e,"ramp"),entry:e.entry||[0,0],exit:e.exit??1/0,exitDamp:e.exitDamp??1,cursor:-1};s.pts=t.map(c=>({x:c[0],y:c[1],z:c[2],hw:c[3]??21})),s.seg=[];let r=0;for(let c=0;c+1<s.pts.length;c++){let h=s.pts[c],d=s.pts[c+1],u=d.x-h.x,f=d.y-h.y,p=Math.hypot(u,f)||1e-6;s.seg.push({a:h,b:d,ex:u,ey:f,len:p,len2:p*p,s:r,tx:u/p,ty:f/p,slope:(d.z-h.z)/p}),r+=p}s.length=r;let a=s.seg.findIndex(c=>c.s+c.len>=s.entry[1]);s.entrySegs=a<0?s.seg.length:a+1;let o=s.pts.slice(0,s.entrySegs+1),l=Math.max(...o.map(c=>c.hw))+40;return s.entryBox=[Math.min(...o.map(c=>c.x))-l,Math.min(...o.map(c=>c.y))-l,Math.max(...o.map(c=>c.x))+l,Math.max(...o.map(c=>c.y))+l],s.wall={test:(c,h,d)=>this.trackWall(s,c,h,d),mat:s.mat,id:n,kind:s.kind},this.tracks.push(s),n}setEnabled(t,e){for(let n of this.colliders)n.id===t&&(n.enabled=!!e);for(let n of this.triggers)n.id===t&&(n.enabled=!!e)}isEnabled(t){let e=this.colliders.find(n=>n.id===t)||this.triggers.find(n=>n.id===t);return e?e.enabled:!1}flipper(t){return this.flippers.find(e=>e.id===t)||this.flippers.find(e=>e.side===t)}flippersFor(t){let e=this.flippers.filter(n=>n.side===t);return e.length?e:this.flippers.filter(n=>n.id===t)}setFlipper(t,e,n=0){for(let s of this.flippersFor(t))n>0?(s.queue.push({at:this.time+n,on:!!e}),s.queue.sort((r,a)=>r.at-a.at)):(s.queue.length=0,s.on=!!e)}flipperAngle(t){let e=this.flipper(t);if(!e)return 0;let n=this.acc/this.dt,s=e.oa+(e.a-e.oa)*n;return e.rest+e.dir*s/Ti}on(t,e){var n;return((n=this.handlers)[t]||(n[t]=[])).push(e),()=>{this.handlers[t]=this.handlers[t].filter(s=>s!==e)}}emit(t,e){if(this.muted)return;let n=this.handlers[t];if(n)for(let s of n)s(e)}step(t){for(this.acc+=kr(t||0,0,.1);this.acc>=this.dt;)this.acc-=this.dt,this.fixedStep();let e=this.ball,n=this.acc/this.dt;e.view.x=e.ox+(e.x-e.ox)*n,e.view.y=e.oy+(e.y-e.oy)*n,e.view.z=e.oz+(e.z-e.oz)*n}run(t){for(let e=Math.round(t/this.dt);e>0;e--)this.fixedStep()}fixedStep(){this.grid||this.buildGrid();let t=this.ball;for(let r of this.flippers){for(;r.queue.length&&r.queue[0].at<=this.time+1e-9;)r.on=r.queue.shift().on;r.oa=r.a}t.ox=t.x,t.oy=t.y,t.oz=t.z;let e=t.active?Math.hypot(t.vx,t.vy):0;for(let r of this.flippers)e=Math.max(e,r.surfaceSpeed());let n=Math.min(bv,Math.max(1,Math.ceil(e*this.dt/this.maxTravel))),s=this.dt/n;for(let r=0;r<n;r++)this.substep(s,this.time+r*s);this.steps++,this.time=this.steps*this.dt}substep(t,e){for(let f of this.flippers)f.update(t);let n=this.ball;if(!n.active||this.saucers.length&&this.saucer(n,e))return;let s=n.serial,r=this.R,a=n.layer!==0?this.trackOf(n.layer):null,o=this.gy,l=0;if(a){let f=this.locate(a,n.x,n.y),p=-this.gN*f.slope/(1+f.slope*f.slope);l+=p*f.tx,o+=p*f.ty}if(n.vx+=l*t,n.vy+=o*t,(a||n.z<=r+.5)&&this.roll(n,t),n.x+=n.vx*t,n.y+=n.vy*t,this.turn(n,t),this.collide(n,e,a),n.serial!==s||(this.layers(n,t,a),this.sense(n),n.serial!==s||!this.bounds))return;let[c,h,d,u]=this.bounds;(n.x<c||n.x>d||n.y<h||n.y>u)&&(n.remove(),this.emit("drain",{id:"out"}))}roll(t,e){this.floorImpulse(t,this.o.floorFriction*this.gN*e);let n=Math.hypot(t.vx,t.vy);if(n>1e-9){let s=(n-Math.min(n,this.o.rolling*this.gN*e))/n;t.vx*=s,t.vy*=s,t.wx*=s,t.wy*=s}t.wz*=Math.exp(-this.o.spinDecay*e)}floorImpulse(t,e){let n=this.R,s=t.vx-t.wy*n,r=t.vy+t.wx*n,a=Math.hypot(s,r);if(a<=1e-9)return;let o=Math.min(a*2/7,e),l=-o*s/a,c=-o*r/a;t.vx+=l,t.vy+=c,t.wx+=c*2.5/n,t.wy-=l*2.5/n}turn(t,e){let[n,s,r,a]=t.q,o=t.wx*e/2,l=t.wy*e/2,c=t.wz*e/2,h=n+o*a+l*r-c*s,d=s+l*a+c*n-o*r,u=r+c*a+o*s-l*n,f=a-o*n-l*s-c*r,p=Math.hypot(h,d,u,f)||1;t.q[0]=h/p,t.q[1]=d/p,t.q[2]=u/p,t.q[3]=f/p}testCollider(t,e,n,s){let r=t.type==="seg"?Rv(t,e,n,s):Cv(t,e,n,s);if(t.oneWay){if(!r)return t.solid=(e-t.ax)*t.oneWay[0]+(n-t.ay)*t.oneWay[1]>0,null;if(!t.solid)return null}return r}collide(t,e,n){let s=this.R,r=[];for(let a of this.cellAt(t.x,t.y)){if(!a.enabled||!Ev(a,t.layer))continue;let o=this.testCollider(a,t.x,t.y,s);o&&(o.src=a,r.push(o))}if(t.layer===0)for(let a of this.flippers){let o=a.test(t.x,t.y,s);o&&(o.src=a,r.push(o))}if(n){let a=n.wall.test(t.x,t.y,s);a&&(a.src=n.wall,r.push(a))}if(r.length){r.length>1&&r.sort((a,o)=>o.depth-a.depth);for(let a=0;a<r.length;a++){let o=r[a].src,l=a===0?r[0]:o instanceof Lc?o.test(t.x,t.y,s):o.type?this.testCollider(o,t.x,t.y,s):o.test(t.x,t.y,s);if(!l)continue;let c=this.resolve(t,l,o.mat);c<=0||(o.kick&&this.kick(t,o,l,c,e),c>=this.o.hitMin&&this.emit("hit",{id:o.id,kind:o.kind,speed:c,x:l.px,y:l.py,nx:l.nx,ny:l.ny}))}}}resolve(t,e,n){let s=this.R,r=e.nx,a=e.ny;t.x+=r*e.depth,t.y+=a*e.depth;let o=t.vx+t.wz*s*a-(e.svx||0),l=t.vy-t.wz*s*r-(e.svy||0),c=o*r+l*a;if(c>=0)return 0;let h=-c,d=h<jp?0:n.e/(1+n.falloff*h/wv),u=e.body,f=1,p=0;u&&(p=(e.px-u.x)*a-(e.py-u.y)*r,u.locked(p)?p=0:f+=this.mass*p*p/u.inertia);let x=(1+d)*h/f;t.vx+=x*r,t.vy+=x*a,p&&u.push(-x*this.mass*p/u.inertia),o-=c*r,l-=c*a;let m=s*(t.wy*r-t.wx*a),g=Math.hypot(o,l,m);if(g>1e-9&&n.f>0){let b=Math.min(g/3.5,n.f*x),E=-b*o/g,y=-b*l/g,v=-b*m/g;t.vx+=E,t.vy+=y,t.wz+=(a*E-r*y)/(.4*s),t.wx-=a*v/(.4*s),t.wy+=r*v/(.4*s),v&&t.z<=s+.5&&this.floorImpulse(t,this.o.floorFriction*1.25*Math.abs(v))}return n.scatter&&h>4*jp&&this.scatter(t,n.scatter,e.svx||0,e.svy||0),h}scatter(t,e,n=0,s=0){let r=(Tv(this)*2-1)*e*Ti,a=Math.cos(r),o=Math.sin(r),l=t.vx-n,c=t.vy-s;t.vx=n+l*a-c*o,t.vy=s+l*o+c*a}kick(t,e,n,s,r){if(s<e.minSpeed||r-e.lastKick<e.recycle)return;let a=n.nx,o=n.ny;if(e.normal){if(n.t<.08||n.t>.92||a*e.normal[0]+o*e.normal[1]<.5)return;[a,o]=e.normal}let l=t.vx*a+t.vy*o;l<e.kick&&(t.vx+=(e.kick-l)*a,t.vy+=(e.kick-l)*o),e.mat.scatter&&this.scatter(t,e.mat.scatter),e.lastKick=r,this.emit("kick",{id:e.id,kind:e.kind,speed:Math.hypot(t.vx,t.vy),x:n.px,y:n.py,nx:a,ny:o})}trackOf(t){return this.tracks.find(e=>e.layer===t)||null}locate(t,e,n,s){let r=t.seg,a=s??r.length,o=t.cursor<0||s!==void 0,l=o?0:Math.max(0,t.cursor-6),c=o?a-1:Math.min(a-1,t.cursor+6),h=1/0,d=0;for(let b=l;b<=c;b++){let E=r[b],y=kr(((e-E.a.x)*E.ex+(n-E.a.y)*E.ey)/E.len2,0,1),v=(e-E.a.x-E.ex*y)**2+(n-E.a.y-E.ey*y)**2;v<h&&(h=v,d=b)}s===void 0&&(t.cursor=d);let u=r[d],f=((e-u.a.x)*u.ex+(n-u.a.y)*u.ey)/u.len2,p=d===0&&f<0||d===r.length-1&&f>1?f:kr(f,0,1),x=kr(p,0,1),m=u.a.x+u.ex*x,g=u.a.y+u.ey*x;return{s:u.s+p*u.len,z:u.a.z+(u.b.z-u.a.z)*x,hw:u.a.hw+(u.b.hw-u.a.hw)*x,tx:u.tx,ty:u.ty,slope:u.slope,qx:m,qy:g,d:Math.hypot(e-m,n-g)}}trackWall(t,e,n,s){let r=this.locate(t,e,n),a=r.hw-s;if(r.d<=a||r.d<1e-9)return null;let o=(r.qx-e)/r.d,l=(r.qy-n)/r.d;return{nx:o,ny:l,depth:r.d-a,px:e-o*s,py:n-l*s}}layers(t,e,n){let s=this.R;if(n){let r=this.locate(n,t.x,t.y);if(r.s<n.entry[0]||r.s>n.exit)t.layer=0,r.s>n.exit&&(t.vx*=n.exitDamp,t.vy*=n.exitDamp,t.wx*=n.exitDamp,t.wy*=n.exitDamp),this.emit("exit",{id:n.id,kind:"track",end:r.s>n.exit?"end":"mouth",x:t.x,y:t.y,vx:t.vx,vy:t.vy,speed:t.speed});else{t.vz=(r.z-t.z)/e,t.z=r.z;return}}else if(t.layer===0&&t.z<=s+.5)for(let r of this.tracks){let a=r.entryBox;if(r.entry[1]<=r.entry[0]||t.x<a[0]||t.x>a[2]||t.y<a[1]||t.y>a[3])continue;let o=this.locate(r,t.x,t.y,r.entrySegs);if(o.s>r.entry[0]&&o.s<r.entry[1]&&o.d<o.hw){t.layer=r.layer,r.cursor=-1,t.z=this.locate(r,t.x,t.y).z,this.emit("enter",{id:r.id,kind:"track",x:t.x,y:t.y,vx:t.vx,vy:t.vy,speed:t.speed});return}}(t.z>s||t.vz)&&(t.vz-=this.gN*e,t.z+=t.vz*e,t.z<=s&&(t.z=s,t.vz=t.vz<-300?-.3*t.vz:0))}saucer(t,e){for(let n of this.saucers){if(n.holding)return e<n.releaseAt?(t.vx=t.vy=t.wx=t.wy=t.wz=0,!0):(n.holding=!1,n.armedAt=e+n.rearm,t.z=this.R,t.vx=Math.cos(n.angle)*n.kick,t.vy=Math.sin(n.angle)*n.kick,t.wx=-t.vy/this.R,t.wy=t.vx/this.R,this.emit("kick",{id:n.id,kind:"saucer",speed:n.kick,x:n.x,y:n.y,nx:Math.cos(n.angle),ny:Math.sin(n.angle)}),!1);if(!(!n.enabled||e<n.armedAt||t.layer!==0||t.z>this.R+.5)&&!(Math.hypot(t.x-n.x,t.y-n.y)>n.reach||Math.hypot(t.vx,t.vy)>n.maxSpeed))return n.holding=!0,n.releaseAt=e+n.hold,Object.assign(t,{x:n.x,y:n.y,z:this.R-n.sink,vx:0,vy:0,vz:0,wx:0,wy:0,wz:0}),this.emit("enter",{id:n.id,kind:"saucer",x:n.x,y:n.y,vx:0,vy:0,speed:0}),!0}return!1}get held(){return this.saucers.find(t=>t.holding)||null}sense(t){let e=t.serial;for(let n of this.triggers){let[s,r,a,o]=n.box,l=t.active&&n.enabled&&(n.layer==="*"||n.layer===t.layer)&&t.x>=s&&t.x<=a&&t.y>=r&&t.y<=o&&(n.poly?Av(n.poly,t.x,t.y):(t.x-n.x)**2+(t.y-n.y)**2<n.r*n.r);if(l!==n.inside){if(n.inside=l,this.emit(l?"enter":"exit",{id:n.id,kind:n.kind,x:t.x,y:t.y,vx:t.vx,vy:t.vy,speed:t.speed}),t.serial!==e)return;if(l&&n.drain){t.remove(),this.emit("drain",{id:n.id});return}}}}buildGrid(){let t=this.o.cell,e=this.R+4,n=1/0,s=1/0,r=-1/0,a=-1/0;for(let o of this.colliders)n=Math.min(n,o.box[0]),s=Math.min(s,o.box[1]),r=Math.max(r,o.box[2]),a=Math.max(a,o.box[3]);this.colliders.length||(n=s=0,r=a=t),this.gx0=Math.floor((n-e)/t),this.gy0=Math.floor((s-e)/t),this.gnx=Math.floor((r+e)/t)-this.gx0+1,this.gny=Math.floor((a+e)/t)-this.gy0+1,this.grid=Array.from({length:this.gnx*this.gny},()=>[]);for(let o of this.colliders){let l=Math.floor((o.box[0]-e)/t)-this.gx0,c=Math.floor((o.box[2]+e)/t)-this.gx0,h=Math.floor((o.box[1]-e)/t)-this.gy0,d=Math.floor((o.box[3]+e)/t)-this.gy0;for(let u=l;u<=c;u++)for(let f=h;f<=d;f++)this.grid[f*this.gnx+u].push(o)}}cellAt(t,e){let n=Math.floor(t/this.o.cell)-this.gx0,s=Math.floor(e/this.o.cell)-this.gy0;return n<0||s<0||n>=this.gnx||s>=this.gny?[]:this.grid[s*this.gnx+n]}saveState(){let t=this.ball;return{steps:this.steps,acc:this.acc,seed:this.seed,ball:[t.x,t.y,t.z,t.vx,t.vy,t.vz,t.wx,t.wy,t.wz,t.layer,t.active,t.serial,t.ox,t.oy,t.oz,...t.q],flippers:this.flippers.map(e=>[e.a,e.w,e.oa,e.on,e.queue.map(n=>({...n}))]),colliders:this.colliders.map(e=>[e.enabled,e.lastKick,e.solid]),triggers:this.triggers.map(e=>[e.enabled,e.inside]),tracks:this.tracks.map(e=>e.cursor),saucers:this.saucers.map(e=>[e.holding,e.releaseAt,e.armedAt])}}loadState(t){let e=this.ball;this.steps=t.steps,this.time=t.steps*this.dt,this.acc=t.acc,this.seed=t.seed,[e.x,e.y,e.z,e.vx,e.vy,e.vz,e.wx,e.wy,e.wz,e.layer,e.active,e.serial,e.ox,e.oy,e.oz]=t.ball,e.q=t.ball.slice(15,19),t.flippers.forEach(([n,s,r,a,o],l)=>Object.assign(this.flippers[l],{a:n,w:s,oa:r,on:a,queue:o.map(c=>({...c}))})),t.colliders.forEach(([n,s,r],a)=>Object.assign(this.colliders[a],{enabled:n,lastKick:s,solid:r})),t.triggers.forEach(([n,s],r)=>Object.assign(this.triggers[r],{enabled:n,inside:s})),t.tracks.forEach((n,s)=>{this.tracks[s].cursor=n}),(t.saucers||[]).forEach(([n,s,r],a)=>Object.assign(this.saucers[a],{holding:n,releaseAt:s,armedAt:r}))}aimFlip(t,e,n,{horizon:s=1.2,coarse:r=.008,follow:a=.6,hold:o=.3,reach:l=12,minArrive:c=0}={}){let h=this.flipper(t),d=this.ball;if(!h||!d.active||d.layer!==0||this.held)return null;let u=this.saveState(),f=this.muted;this.muted=!0;let p=this.flippers.indexOf(h),x=Math.max(1,Math.round(r/this.dt)),m=this.flippersFor(t).map(v=>this.flippers.indexOf(v)),g=()=>d.active&&d.layer===0&&!!this.flippers[p].test(d.x,d.y,this.R+l);for(let v of m)this.flippers[v].queue=[],this.flippers[v].on=!1;let b=[];for(let v=0;v*x*this.dt<=s+1e-9&&d.active;v++)g()&&b.push({st:this.saveState(),delay:v*x*this.dt,k:v}),this.run(x*this.dt);let E=(v,w)=>{this.loadState(v);let M=this.flippers[p],_=Math.cos(M.theta),T=Math.sin(M.theta),R={delay:w,miss:Math.hypot(d.x-e,d.y-n),arrive:d.speed,speed:0,angle:0,x:d.x,y:d.y,u:(d.x-M.x)*_+(d.y-M.y)*T};for(let L of m)this.flippers[L].queue=[{at:this.time+o,on:!1}],this.flippers[L].on=!0;let C=!1;for(let L=Math.round(a/this.dt);L>0&&d.active;L--){this.fixedStep();let F=Math.hypot(d.x-e,d.y-n);if(F<R.miss)R.miss=F,R.arrive=d.speed;else if(C&&F>R.miss+40)break;!C&&Math.hypot(d.x-M.x,d.y-M.y)>M.length+M.tipR+this.R+12&&(C=!0,R.speed=d.speed,R.angle=Math.atan2(d.vy,d.vx)/Ti)}return R.score=R.miss+Math.max(0,c-R.arrive)*.1,R},y=null;for(let v of b){let w=E(v.st,v.delay);(!y||w.score<y.score)&&(y=w,y.k=v.k)}if(y&&x>1)for(let v of b.filter(w=>w.k===y.k-1||w.k===y.k)){let w=v.st;for(let M=1;M<x&&(this.loadState(w),this.fixedStep(),!!g());M++){w=this.saveState();let _=E(w,v.delay+M*this.dt);_.score<y.score&&(y={..._,k:y.k})}}return this.loadState(u),this.muted=f,y&&(delete y.k,delete y.score),y}};var Qa=Math.PI/180,Fc=1.6,Pv=7.13+2.38,Qu=4.76+6.35,Iv=6.5,Dv=30,ed=[9,21],Oc={pop:1400,sling:2200};function td(i,t,e,n,s,r=3){let a=Math.max(1,Math.ceil(Math.abs(s-n)/r));return Array.from({length:a+1},(o,l)=>{let c=(n+(s-n)*l/a)*Qa;return[i+Math.cos(c)*e,t+Math.sin(c)*e]})}function Lv(i,t){return i.map((e,n)=>{let s=i[Math.max(0,n-1)],r=i[Math.min(i.length-1,n+1)],a=r[0]-s[0],o=r[1]-s[1],l=Math.hypot(a,o)||1;return[e[0]-o/l*t,e[1]+a/l*t]})}function Bs(i,t,e=0,n={}){let{closed:s,...r}=n,a=s?[...t,t[0]]:t;for(let o=0;o+1<a.length;o++){let[l,c]=a[o],[h,d]=a[o+1];Math.hypot(h-l,d-c)<1e-6||i.addWall(l,c,h,d,{r:e/2,...r})}return r.id??null}function Uv(i,t,e,n=4,s={}){return Bs(i,Lv(t,-e*n),2*n,s)}var Nc=(i,t,e,n)=>[[i-e,t-n],[i+e,t-n],[i+e,t+n],[i-e,t+n]];function Nv(i,t){let{ORBIT_GUIDES:e=[],ORBIT_WEDGES:n=[],ORBIT_POSTS:s=[],ORBIT_POST:r={d:11},ORBIT_ROLLOVERS:a=[]}=t;for(let l of e)Bs(i,l.line,Fc,{id:"orbit-"+l.side,kind:"guide",mat:"metal"});for(let l of n)Bs(i,l.line,Fc,{id:"wedge-"+l.side,kind:"guide",mat:"metal"});return s.forEach(([l,c],h)=>i.addCircle(l,c,r.d/2,{id:"orbit-post"+h,kind:"post",mat:"rubber"})),{rollovers:a.map((l,c)=>i.addTrigger(Nc(l.x,l.y,...ed),"orbit"+c,{kind:"orbit"}))}}function em(i){let t=0;return i.map((e,n)=>(n&&(t+=Math.hypot(e[0]-i[n-1][0],e[1]-i[n-1][1])),{p:[e[0],e[1],e[2]],w:e[3],s2:t}))}function nd(i,t){let e=1;for(;e<i.length-1&&i[e].s2<t;)e++;let n=i[e-1],s=i[e],r=s.s2-n.s2||1,a=(t-n.s2)/r;return{x:n.p[0]+(s.p[0]-n.p[0])*a,y:n.p[1]+(s.p[1]-n.p[1])*a,tx:(s.p[0]-n.p[0])/r,ty:(s.p[1]-n.p[1])/r}}function nm(i,t,e,n){let s=nd(i,t-e),r=nd(i,t+e);return[[s.x-s.ty*n,s.y+s.tx*n],[r.x-r.ty*n,r.y+r.tx*n],[r.x+r.ty*n,r.y-r.tx*n],[s.x+s.ty*n,s.y-s.tx*n]]}function Fv(i,t){let e=i.dropRadius,n=i.rail,s=r=>r*r*(3-2*r);for(let r=0;r<=i.spread;r+=.25)if(n+(e-n)*s(r/i.spread)>=t+i.rod-.5)return e+i.spread-r;return e}function Ov(i,t,e){let{RAMP:n,WIRE:s,BALL_R:r}=t,a=em(e.profile),o=em(e.wire),l=a.at(-1).s2,c=r+2.6,h=40,d=[];for(let w of a){let M=Math.max(0,Math.min(1,(l-w.s2)/h));d.push([w.p[0],w.p[1],w.p[2]+r,c+(w.w/2-c)*M])}for(let w of o.slice(1))d.push([w.p[0],w.p[1],w.p[2]+s.ride,c]);let u=a.filter(w=>w.p[2]<Dv),f=u.at(-1).s2,p=w=>u.map((M,_)=>{let T=u[Math.max(0,_-1)].p,R=u[Math.min(u.length-1,_+1)].p,C=Math.hypot(R[0]-T[0],R[1]-T[1])||1,L=w*(M.w/2+n.side/2);return[M.p[0]-(R[1]-T[1])/C*L,M.p[1]+(R[0]-T[0])/C*L]}),[x,m]=[p(1),p(-1)],g=`ramp-${e.id}-wall`;for(let w of[x,m])Bs(i,w,n.side,{id:g,kind:"ramp",mat:"ramp",layer:"*"});i.addWall(...x.at(-1),...m.at(-1),{r:n.floor/2,id:g,kind:"ramp",mat:"ramp"});let b=0;for(let w=1;w<d.length;w++)b+=Math.hypot(d[w][0]-d[w-1][0],d[w][1]-d[w-1][1]);i.addTrack(d,{id:e.id,layer:e.id,mat:"ramp",entry:[0,f-4],exit:b-Fv(s,r),exitDamp:.4});for(let[w,M]of[...e.supports,...e.wireSupports])i.addCircle(w,M,Iv,{kind:"post",mat:"plastic"});let E=`ramp-${e.id}-mouth`,y=`ramp-${e.id}-made`;i.addTrigger(nm(a,2,10,n.mouth/2),E,{kind:"mouth",layer:"*"}),i.addTrigger(nm(a,l*(e.switchAt??.82),10,n.width/2+4),y,{kind:"ramp",layer:e.id});let v=nd(a,0);return{id:e.id,side:e.side,layer:e.id,mouth:E,made:y,at:[v.x,v.y],heading:Math.atan2(v.ty,v.tx)/Qa}}function im(i,t){let{PF:e,BALL_R:n,FLIPPERS:s,SLINGS:r,APRON:a,SHOOTER:o,ARCH:l,INLANE_GUIDES:c,STAR_POSTS:h,GATE:d,TOP_LANES:u,POPS:f,POP:p,RAMPS:x,RETURN_LANES:m,TARGETS:g,TARGET_GUIDES:b,TARGET_RUBBER:E,SAUCER:y}=t,v={};i.bounds=[-20,-80,e.w+20,e.l+20];let w=[[e.rail,-10],[e.rail,l.left.cy],...td(l.left.cx,l.left.cy,l.left.r,180,90).slice(1),...td(l.right.cx,l.right.cy,l.right.r,90,0),[o.laneRight,90]];Uv(i,w,-1,4,{id:"rail",kind:"rail",mat:"metal"});let M=o.dividerFace??o.laneLeft-Fc,_=o.laneLeft-M;i.addWall(o.laneLeft-.65,90,o.laneLeft-.65,o.apronTop,{r:.65,id:"divider",kind:"rail",mat:"metal"}),i.addWall(M+_/2,o.apronTop,M+_/2,o.dividerTop,{r:_/2,id:"divider",kind:"rail",mat:"metal"});let T=o.ballRest[1]-n;i.addWall(o.laneLeft,T-3,o.laneRight,T-3,{r:3,id:"plunger",kind:"plunger",e:.3,f:.3});let[R,C]=d.from,[L,F]=d.to,D=Math.hypot(L-R,F-C),B=[(L-R)/D,(F-C)/D],G=[-B[1],B[0]];i.addWall(R,C,L,F,{r:1,oneWay:G,id:"gate",kind:"gate",mat:"metal"});let Z=(lt,V,Q)=>[lt[0]+G[0]*V*6+B[0]*Q*4,lt[1]+G[1]*V*6+B[1]*Q*4];i.addTrigger([Z(d.from,-1,-1),Z(d.to,-1,1),Z(d.to,1,1),Z(d.from,1,-1)],"gate",{kind:"gate"}),i.addTrigger(Nc((o.laneLeft+o.laneRight)/2,o.ballRest[1]+10,(o.laneRight-o.laneLeft)/2,30),"shooter",{kind:"shooter"}),Object.assign(v,{gate:"gate",shooter:"shooter",plunger:{id:"plunger",rest:[...o.ballRest]}});for(let lt of[[a.leftShoulder,a.lipLeft],[a.lipRight,a.rightShoulder]])Bs(i,lt,1.3,{id:"apron",kind:"apron",mat:"metal"});let rt=Math.atan2(a.lipEndY-a.lipCy,a.lipRight[0]-e.cx)/Qa,$=Math.atan2(a.lipEndY-a.lipCy,a.lipLeft[0]-e.cx)/Qa,nt=td(e.cx,a.lipCy,a.lipR,rt,$,4).map(([lt,V])=>[lt,V-n]);v.drain=i.addTrigger([[e.rail,-60],[o.laneLeft,-60],[o.laneLeft,a.lipEndY-n],...nt,[e.rail,a.lipEndY-n]],"drain",{drain:!0});for(let lt of c)Bs(i,lt.plate.outline,0,{id:"inlane-"+lt.side,kind:"guide",mat:"plastic",closed:!0});for(let[lt,V]of h)i.addCircle(lt,V,Pv,{kind:"post",mat:"rubber"});v.orbits=Nv(i,t).rollovers,v.slings={};for(let lt of r){let[V,Q,_t]=lt.posts,It="sling-"+lt.side;i.addKicker(...V,...Q,{r:Qu,away:_t,id:It,kind:"sling",mat:"sling",kick:Oc.sling,minSpeed:120}),i.addWall(...Q,..._t,{r:Qu,id:It+"-rubber",kind:"rubber",mat:"sling"}),i.addWall(..._t,...V,{r:Qu,id:It+"-rubber",kind:"rubber",mat:"sling"}),v.slings[lt.side]=It}v.flippers={};for(let lt of s)v.flippers[lt.id]=i.addFlipper({id:lt.id,side:lt.side,x:lt.x,y:lt.y,rest:lt.rest,up:lt.up,baseR:lt.baseR,tipR:lt.tipR,length:lt.length});for(let lt of u.rubbers)i.addWall(...lt.posts[0],...lt.posts[1],{r:lt.postR+lt.cord,kind:"rubber",mat:"band"});v.lanes=u.lanes.map((lt,V)=>i.addTrigger(Nc(lt.x,lt.y,...ed),"lane"+V,{kind:"rollover"})),v.returns=m.map((lt,V)=>i.addTrigger(Nc(lt.x,lt.y,...ed),"return"+V,{kind:lt.kind})),v.saucer=i.addSaucer(y.x,y.y,{id:"saucer",reach:y.reach,maxSpeed:y.maxSpeed,hold:y.hold,kick:y.kick,angle:y.kickAngle}),v.pops=f.map((lt,V)=>i.addCircle(lt.x,lt.y,p.reach-n,{id:"pop"+V,kind:"pop",mat:"pop",kick:Oc.pop,minSpeed:50,recycle:.03}));let et=g,Tt=et.depth/2;v.targets=et.list.map((lt,V)=>i.addWall(lt.x-et.width/2+Tt,lt.y,lt.x+et.width/2-Tt,lt.y,{r:Tt,id:"target"+V,kind:"target",mat:"drop"}));let At=E.posts;At.forEach((lt,V)=>{let Q=At[(V+1)%At.length],_t=Math.max(9,E.grooves[V]+E.cord);i.addWall(...lt,...Q,{r:_t,id:"target-rubber",kind:"rubber",mat:"band"})});for(let lt of b)Bs(i,lt.line,Fc,{id:"target-guide-"+lt.side,kind:"guide",mat:"metal"});v.ramps=x.map(lt=>Ov(i,t,lt));let re=et.list[1],Zt=lt=>{let V=t.ORBIT_POSTS[lt],Q=t.ORBIT_WEDGES[lt].line,_t=t.INSERTS.find(se=>se.id===["left_orbit_arrow","right_orbit_arrow"][lt]),It=Q.reduce((se,it)=>Math.hypot(it[0]-V[0],it[1]-V[1])<Math.hypot(se[0]-V[0],se[1]-V[1])?it:se),wt=_t.angle*Qa,Gt=[(V[0]+It[0])/2,(V[1]+It[1])/2];return[Gt[0]-Math.sin(wt)*90,Gt[1]+Math.cos(wt)*90]};return v.aim={...Object.fromEntries(v.ramps.map(lt=>[lt.id,lt.at])),targets:[re.x,re.y-Tt-n-2],saucer:[y.x,y.y],"orbit-left":Zt(0),"orbit-right":Zt(1)},v}var sm=Math.PI/180,Bv=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),rm=44.45,am=99,ks={soft:1300,full:2600},kv={hero:"play",deadbounce:"ramp-deadbounce",tiptop:"ramp-tiptop",about:"pops",skills:"hold",experience:"hold",contact:"hold"},om=["ramp-deadbounce","orbit-left","ramp-tiptop","orbit-right"],Bc=class{constructor(t,{reduced:e}){this.h=t,this.reduced=e,this.time=0,this.power=0,this.skillsLit=[0,0,0,0],this.skillFocus=-1,this.rung=-1,this.explodedPop=0,this.station=null,this.play="play",this.exploded=0;for(let n of t.rollovers)n.pos=Ae(n.x,n.y,vn);t.shooterBall.visible=!1,t.ball.material=t.ball.material.clone(),this.physics=new Uc({seed:7}),this.ids=im(this.physics,Pu),this.popColliders=this.physics.colliders.filter(n=>n.kind==="pop"),this.events(),this.auto={state:"serve",at:0,side:null,still:0,shotUntil:0,next:0,user:-1e9,cache:new Map},t.plunger.releasedAt=-1,this.serveAt=.2,this.plungeSpeed=ks.full,this.aim=new O,e&&this.settleForStill()}settleForStill(){let t=this.physics,e=En.find(n=>n.id==="left");t.setFlipper("left",!0),t.ball.place(e.x+20,e.y+70,0,-200),t.run(2.5),this.auto.state="still"}events(){let t=this.physics;t.on("kick",e=>{e.kind==="pop"?this.firePop(+String(e.id).slice(3),Ae(e.x,e.y)):e.kind==="sling"?this.kickSling(String(e.id).replace("sling-","")):e.kind==="saucer"&&this.kickSaucer()}),t.on("hit",e=>{e.kind==="target"&&this.hitTarget(+String(e.id).slice(6),e.speed)}),t.on("enter",e=>{let n=String(e.id);if(/^(lane|return)\d$/.test(n))this.flash(Us(n),.8);else if(/^orbit\d$/.test(n))this.flash(Us(n),1.4);else if(n==="saucer")this.flash("saucer_arrow",1.6),this.saucerAt=this.time;else if(n==="gate")this.swingGate();else if(n.endsWith("-made")){let s=Is.find(r=>n===`ramp-${r.id}-made`);s&&this.flash(`${s.side}_ramp_arrow`,1.4)}}),t.on("drain",()=>{this.auto.state="serve",this.serveAt=this.time+.9;for(let e of En)t.setFlipper(e.side,!1)})}setStation(t){t!==this.station&&(this.station=t,this.play=kv[t]||this.play,this.play==="pops"&&this.auto.state==="cradled"&&this.letGo())}flip(t,e=.16){let n=this.physics;this.auto.user=this.time,n.setFlipper(t,!0),n.setFlipper(t,!1,e)}hold(t,e){this.auto.user=this.time,this.physics.setFlipper(t,e)}shoot(){return this.auto.state!=="cradled"?!1:(this.auto.forceShot=!0,!0)}firePop(t,e){let n=this.h.pops[t];if(!n)return;n.fired=this.time;let s=n.group.position,r=this.time*7.3,a=e?e.x-s.x:Math.cos(r),o=e?e.z-s.z:Math.sin(r);n.axis.set(o,0,-a).normalize()}kickSling(t){let e=this.h.slings.find(n=>n.side===t);e&&(e.kicked=this.time)}flash(t,e=1){let n=this.h.inserts.get(t);n&&(n.flash=Math.max(n.flash,e))}swingGate(){let t=this.h.gate;t.open=Math.max(t.open,1.25),t.velocity=0}hitTarget(t,e=1500){let n=this.h.targets[t];if(!n)return;n.hit=this.time,n.kick=Math.min(1,.35+e/2500);let s=this.h.inserts.get(Wn.list[t].insert);s&&(s.flash=Math.max(s.flash,1.3))}kickSaucer(){this.h.saucer&&(this.h.saucer.kicked=this.time),this.flash("saucer_arrow",1)}pressStart(){this.startAt=this.time;let t=this.h.plunger;this.auto.state==="shooter"&&!t.pulling&&t.releasedAt<0&&(t.pull=.7,t.pulling=!0,this.release(ks.full))}pull(){let t=this.h.plunger;t.pulling=!0,t.releasedAt=-1,this.auto.user=this.time}release(t){let e=this.h.plunger;e.pulling&&(e.pulling=!1,e.releasedAt=this.time,e.from=e.pull,e.limit=1,this.plungeSpeed=t??ks.soft+(ks.full-ks.soft)*e.from)}near(t){let e=this.physics.ball,n=En.find(r=>r.id===t);return!e.active||e.layer!==0?!1:(t==="left"?e.x<Lt.cx+8:e.x>Lt.cx-8)&&e.y<n.y+95&&Math.hypot(e.x-n.x,e.y-n.y)<n.length+70}letGo(){for(let t of En)this.physics.setFlipper(t.side,!1);this.auto.state="play",this.auto.side=null}shotFor(t,e){let n=t+":"+e;if(this.auto.cache.has(n))return this.auto.cache.get(n);let s=this.ids.aim[e.replace(/^ramp-/,"")];if(e==="pass"){let a=En.find(o=>o.id===(t==="left"?"right":"left"));s=[a.x+(t==="left"?14:-14),a.y+150]}let r=s?this.physics.aimFlip(t,s[0],s[1],{minArrive:e.startsWith("ramp")?2e3:0}):null;return this.auto.cache.set(n,r),r}autopilot(t){let e=this.physics,n=e.ball,s=this.auto,r=this.time;if(s.state==="still"||r-s.user<4)return;if(s.state==="serve"){if(r<this.serveAt)return;s.state="serving",s.at=r;return}if(s.state==="serving"){if(r-s.at<.38)return;e.ball.place(fe.ballRest[0],fe.ballRest[1],0,0),s.state="shooter",s.at=r;return}if(s.state==="shooter"){let o=this.h.plunger;!o.pulling&&o.releasedAt<0&&r-s.at>.8&&(this.pull(),s.user=-1e9,o.limit=this.play==="pops"?.25:1),o.pulling&&o.pull>=o.limit-.001&&r-s.at>1.4&&(this.release(this.play==="pops"?ks.soft:ks.full),s.user=-1e9);return}if(!n.active||e.held)return;let a=n.speed<30;for(let o of["left","right"]){let l=this.near(o);s.state==="play"&&l&&this.play!=="pops"&&r>s.shotUntil&&n.vy<40&&(e.setFlipper(o,!0),s.state="catching",s.side=o,s.at=r)}if(s.state==="catching"){if(!this.near(s.side)){r-s.at>.4&&this.letGo();return}s.still=a?s.still+t:0,s.still>.25?(s.state="cradled",s.at=r):r-s.at>2.5&&this.letGo();return}if(s.state==="cradled"){if(!this.near(s.side)){this.letGo();return}if(this.play==="pops"){this.letGo();return}let o=s.forceShot?0:this.play==="hold"?1/0:.7;if(r-s.at<o)return;s.forceShot=!1;let l=this.play;(l==="play"||l==="hold")&&(l=om[s.next%om.length],s.next++);let c=this.shotFor(s.side,l);if((!c||c.miss>14)&&(l="pass",c=this.shotFor(s.side,"pass")),!c){this.letGo();return}e.setFlipper(s.side,!1),e.setFlipper(s.side,!0,c.delay),e.setFlipper(s.side,!1,c.delay+.25),s.shotUntil=r+c.delay+.5,s.state="play",s.side=null}}update(t,e){this.time+=t;let n=this.time,s=this.h,r=this.power,a=this.physics,o=this.popColliders[this.explodedPop];o&&(o.kick=this.exploded>.05?0:Oc.pop),this.reduced||(this.autopilot(t),a.step(t));for(let h of s.flippers)h.pivot.rotation.y=a.flipperAngle(h.id)*sm;for(let h of s.pops){let d=h.fired<0?9:n-h.fired,u=d<.004?0:d<.014?((d-.004)/.01)**2:d<.03?1:d<.075?.5+.5*Math.cos(Math.PI*(d-.03)/.045):0;h.ring.position.y=(Lr.ringRest-Lr.ringTravel*(this.reduced?0:u))*U;let f=d<.006?d/.006:Math.max(0,1-(d-.006)/.035);h.skirt.quaternion.setFromAxisAngle(h.axis,this.reduced?0:f*2.5*sm);let p=d<.5?Math.exp(-d/.07):0;h.capMat.emissiveIntensity=(.22+2.6*p)*r*h.capMat.userData.gain,h.bodyMat.emissiveIntensity=(.06+1.4*p)*r*h.bodyMat.userData.gain}for(let h of s.slings){let d=h.kicked<0?9:n-h.kicked,u=0;d<.008?u=Math.sin(d/.008*(Math.PI/2)):d<.025?u=1:d<.065&&(u=.5+.5*Math.cos(Math.PI*(d-.025)/.04));let f=d>=.065&&d<.35?-.16*Math.sin((d-.065)*Math.PI*2*22)*Math.exp(-(d-.065)*14):0;this.reduced&&(u=0),h.arm.position.copy(h.rest).addScaledVector(h.push,u);let p=this.reduced?0:u+f;(Math.abs(p-h.shown)>.015||p===0&&h.shown!==0)&&(h.rubber.geometry.dispose(),h.rubber.geometry=h.rubberGeo(p*9),h.shown=p)}for(let h of s.targets){let d=h.hit<0?9:n-h.hit,u=0;d<.004?u=d/.004:d<.09&&(u=Math.cos((d-.004)/.086*Math.PI*1.5)*Math.exp(-(d-.004)*30)),h.holder.position.copy(h.rest).addScaledVector(h.back,this.reduced?0:2*(h.kick||1)*u)}if(s.saucer){let h=s.saucer,d=h.kicked<0?9:n-h.kicked,u=d<.008?d/.008:d<.06?1-(d-.008)/.052:0;h.finger.position.copy(h.rest).addScaledVector(h.out,this.reduced?0:6*U*u)}this.updateShooter(t),this.updateBall(),this.updateRollovers(t),this.updateInserts(t,e),s.backglass.material.color.setScalar(r*(s.backglass.lcd.showing==="art"?.92+.08*Math.sin(n*1.3):.94));for(let h of s.gi)h.intensity=h.userData.base*r;for(let h of s.bulbs)h.emissiveIntensity=2.2*r*h.userData.gain;let l=this.startAt===void 0?9:n-this.startAt,c=this.auto.state==="shooter"&&Math.sin(n*5)>0;s.startButton.material.emissiveIntensity=(.3+(c?.5:0)+3*Math.exp(-l*5))*r*(s.startButton.material.userData.gain||1)}updateBall(){let t=this.physics.ball,e=this.h.ball,n=this.auto;if(n.state==="serving"){let r=Bv((this.time-n.at)/.38),a=1-(1-r)**2;e.visible=!0,e.position.copy(Ae(fe.laneLeft-24+(fe.ballRest[0]-fe.laneLeft+24)*a,fe.ballRest[1]+4*(1-a),vn));return}if(e.visible=t.active,!t.active)return;let s=n.state==="shooter"&&this.h.plunger.shown||0;e.position.copy(Ae(t.view.x,t.view.y-s,t.view.z)),e.quaternion.set(t.q[0],t.q[2],-t.q[1],t.q[3])}updateShooter(t){let e=this.h,n=e.plunger,s=this.time,r=this.auto,a=0;if(n.pulling)n.pull=Math.min(n.limit??1,n.pull+t/.5),a=n.pull*rm;else if(n.releasedAt>=0){let l=s-n.releasedAt,c=Math.PI/2/am;if(l<c)a=n.from*rm*Math.cos(am*l);else{r.state==="shooter"&&(this.physics.ball.place(fe.ballRest[0],fe.ballRest[1]+1,0,this.plungeSpeed),r.state="play");let h=(l-c)/.12;a=h<1?-5*n.from*Math.sin(Math.PI*h):0,h>=1&&(n.releasedAt=-1,n.pull=0)}}this.reduced&&(a=0),n.shown=Math.max(0,a),n.group.position.copy(n.rest),n.group.position.z+=a*U,n.spring.scale.z=(n.springLen-a)/n.springLen;let o=e.gate;o.velocity+=(-Math.sin(o.open)*820-o.velocity*6)*t,o.open+=o.velocity*t,o.open<0&&(o.open=0,o.velocity=Math.abs(o.velocity)>.5?-o.velocity*.3:0),o.flap.rotation.x=this.reduced?0:o.open}updateRollovers(t){let e=[this.h.ball];for(let n of this.h.rollovers){let s=!1;for(let r of e)r.visible&&Math.abs(r.position.x-n.pos.x)<9*U&&Math.abs(r.position.z-n.pos.z)<21*U&&r.position.y<20*U&&(s=!0);s&&!n.on&&this.flash(n.insert,.8),n.on=s,n.press=s?Math.min(1,n.press+t/.01):Math.max(0,n.press-t/.03),n.wire.scale.y=1-.75*n.press}}updateInserts(t,e){let n=this.time,s=this.power,r=this.station,a=.05;s>.02&&this.litAt===void 0&&(this.litAt=n);let o=this.litAt===void 0||this.reduced?9:n-this.litAt,l=!this.reduced&&r!=="skills"&&r!=="experience"&&r!=="contact",c=n%6.5,h=l&&c<1.5?c/1.5*660:-1;for(let[d,u]of this.h.inserts){let f=a;switch(u.group){case"years":{if(r==="experience")f=u.index<this.rung?.85:u.index===this.rung?Math.floor(n*5)%2?1.15:.7:.08;else{let x=Math.floor(n*3)%7;f=x===u.index||x===5?.85:.12}break}case"skills":{r==="skills"?f=this.skillsLit[u.index]>.5?u.index===this.skillFocus?.78+.1*Math.sin(n*5):.6:.06:f=(Math.floor(n*1.5)+u.index)%4===0?.75:.14;break}case"ramp0":f=r==="deadbounce"?Math.floor(n*4)%2?1.2:.3:.3+.14*Math.sin(n*2.2);break;case"ramp1":f=r==="tiptop"?Math.floor(n*4)%2?1.2:.3:.3+.14*Math.sin(n*2.2+Math.PI);break;case"ladder":{let x=Math.floor(n*2.5)%5;f=x===u.index||x===3?.9:.14;break}case"targets":f=Math.floor(n*1.6)%4===u.index?.7:.16;break;case"saucer":f=this.physics.held?Math.floor(n*8)%2?1.2:.4:r==="about"?.6:.25;break;case"again":f=r==="contact"?Math.floor(n*2.5)%2?1.2:.35:.12;break;case"orbit":f=Math.floor(n*1.2)%2===u.index?.5:.14;break}let p=0;h>=0&&(p=Math.max(0,1-Math.abs(Math.hypot(u.x-Lt.cx,u.y-492)-h)/80)*.45),o<2&&(p=Math.max(p,Math.max(0,1-Math.abs(u.y-o/1.4*1100)/130)*.8)),u.flash=Math.max(0,u.flash-t*3),u.level+=(f-u.level)*(1-Math.exp(-t*18)),u.mat.emissiveIntensity=(u.level+u.flash*1.1+p)*s*u.mat.userData.gain,u.side.emissiveIntensity=u.mat.emissiveIntensity}}setSkills(t){this.skillsLit.forEach((e,n)=>{let s=t>.12+n*.2?1:0;s&&!e&&this.flash(Bi[n].insert,.6),this.skillsLit[n]=s})}setTimeline(t){this.rung=Math.min(4,Math.floor(t*5.2))}};var to="http://www.w3.org/2000/svg",kc=class{constructor(t,e,n){this.svg=t,this.links=[],e.forEach((s,r)=>{for(let a of s.querySelectorAll("[data-anchor]")){let[o,l,c]=a.dataset.anchor.split(",").map(Number),h=document.createElementNS(to,"g");h.setAttribute("class","hud-link");let d=document.createElementNS(to,"path");d.setAttribute("pathLength","1"),d.setAttribute("class","hud-line");let u=document.createElementNS(to,"circle");u.setAttribute("r","9"),u.setAttribute("class","hud-ring");let f=document.createElementNS(to,"circle");f.setAttribute("r","3"),f.setAttribute("class","hud-dot");let p=document.createElementNS(to,"circle");p.setAttribute("r","2"),p.setAttribute("class","hud-tick"),h.append(d,u,f,p),t.append(h),this.links.push({index:r,el:a,world:n(o,l,c),g:h,path:d,ring:u,dot:f,tick:p,primary:!a.closest("li"),shown:-1,d:""})}}),this.p=null}update(t,e,n,s,r){let a=r.layout,o=a==="tall",l=a==="side";for(let c of this.links){let h=s[c.index]||0;if(!c.primary&&(a!=="wide"||!c.el.classList.contains("current"))&&(h=0),h<.01){c.shown!==0&&(c.g.style.display="none",c.shown=0);continue}let d=c.world.clone().project(t),u=c.el.getBoundingClientRect();if(d.z>1||u.height===0){c.g.style.display="none",c.shown=0;continue}c.shown===0&&(c.g.style.display="");let f=(d.x+1)/2*e,p=(1-d.y)/2*n;if(!(!(o||l)||f>24&&p>r.header+24&&(o?f<e-24&&p<r.panelTop-40:f<r.panelLeft-40&&p<n-24))){c.shown!==0&&(c.g.style.display="none",c.shown=0);continue}let m=l||u.left>f,g=l?r.panelLeft-14:m?u.left-14:u.right+14,b=l?Math.min(n-24,Math.max(r.header+24,u.top+Math.min(u.height/2,16))):u.top+Math.min(u.height/2,16),E=m?g-36:g+36,y=r.panelTop-14,v=o?`M${f.toFixed(1)},${p.toFixed(1)}L${f.toFixed(1)},${y.toFixed(1)}`:`M${f.toFixed(1)},${p.toFixed(1)}L${E.toFixed(1)},${b.toFixed(1)}L${g.toFixed(1)},${b.toFixed(1)}`;v!==c.d&&(c.path.setAttribute("d",v),c.d=v);let w=o?[f,y]:[g,b];if(c.ring.setAttribute("cx",f.toFixed(1)),c.ring.setAttribute("cy",p.toFixed(1)),c.dot.setAttribute("cx",f.toFixed(1)),c.dot.setAttribute("cy",p.toFixed(1)),c.tick.setAttribute("cx",w[0].toFixed(1)),c.tick.setAttribute("cy",w[1].toFixed(1)),Math.abs(h-c.shown)>.003){let M=h*h*(3-2*h);c.path.style.strokeDashoffset=(1-M).toFixed(3),c.ring.style.transform=`scale(${M.toFixed(3)})`,c.ring.style.transformOrigin=`${f.toFixed(1)}px ${p.toFixed(1)}px`,c.g.style.opacity=Math.min(1,h*1.6).toFixed(3),c.shown=h}else c.ring.style.transformOrigin=`${f.toFixed(1)}px ${p.toFixed(1)}px`;c.g.classList.toggle("lit",c.el.classList.contains("lit")||c.primary)}}};var id=i=>i*i*(3-2*i),sd=i=>Math.min(1,Math.max(0,i)),zc=class{constructor(t,e){this.pop=t;let n=t.group;n.updateMatrixWorld(!0);let s=new Hn;this.parts=t.parts.map((l,c)=>{s.setFromObject(l);let h=n.worldToLocal(s.getCenter(new O)),d=s.getSize(new O);return{holder:l,k:c,lift:l.userData.lift,label:l.userData.label,mid:h,reach:Math.max(d.x,d.z)/2}});let r=this.parts.length,a=this.parts[r-1],o=new be().setFromPoints([new O(0,-8*U,0),new O(0,a.mid.y+(a.lift+18)*U,0)]);this.axis=new oa(o,new Sa({color:7245055,dashSize:7*U,gapSize:2*U,transparent:!0,opacity:0,depthWrite:!1})),this.axis.computeLineDistances(),this.axis.visible=!1,n.add(this.axis),this.el=document.createElement("div"),this.el.className="cad",this.el.setAttribute("aria-hidden","true");for(let l of this.parts){l.tag=document.createElement("span"),l.tag.className="cad-tag";let c=document.createElement("i");c.textContent=String(l.k+1).padStart(2,"0"),l.tag.append(c,document.createTextNode(l.label)),this.el.append(l.tag)}e.append(this.el),this.shown=-1,this.v=new O}amountFor(t,e){let n=this.parts.length,s=.06;return id(sd(e*(1+s*(n-1))-(n-1-t.k)*s))}update(t,e,n,s,r){if(t<.001&&this.shown===0)return;for(let l of this.parts)l.holder.position.y=l.lift*this.amountFor(l,t)*U;let a=r==="tall"?0:id(sd((t-.2)/.35));if(this.axis.visible=t>.01,this.axis.material.opacity=.85*id(sd(t/.3)),this.el.style.opacity=a.toFixed(3),this.el.classList.toggle("left",r!=="left"),this.shown=t<.001?0:t,a<.01)return;let o=r!=="left"?-1:1;for(let l of this.parts){let c=l.lift*this.amountFor(l,t);this.v.set(o*(l.reach+14*U),l.mid.y+c*U,0).applyMatrix4(this.pop.group.matrixWorld).project(e);let h=(this.v.x+1)/2*n,d=(1-this.v.y)/2*s;l.tag.style.transform=`translate(${h.toFixed(1)}px, ${d.toFixed(1)}px)`}}};var Bn=document.documentElement,dn=matchMedia("(prefers-reduced-motion: reduce)").matches,lm=matchMedia("(hover: hover) and (pointer: fine)").matches,Rn=(i,t=document)=>t.querySelector(i),zs=(i,t=document)=>[...t.querySelectorAll(i)],Hi=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),eo=i=>i*i*(3-2*i),cm=Math.PI/180,rd={"ramp-deadbounce":{label:"Read the Deadbounce case study",href:"/work/deadbounce.html"},"ramp-tiptop":{label:"Read the Tip Top case study",href:"/work/tip-top-pinball.html"},"pop-0":{label:"Fire the pop bumper"},"pop-1":{label:"Fire the pop bumper"},"pop-2":{label:"Fire the pop bumper"},"target-0":{label:"Hit the target"},"target-1":{label:"Hit the target"},"target-2":{label:"Hit the target"},"sling-left":{label:"Kick the slingshot"},"sling-right":{label:"Kick the slingshot"},"flip-left":{label:"Flip"},"flip-right":{label:"Flip"},plunger:{label:"Launch a ball back to the top"},dmd:{label:"Next display scene"},portrait:{label:"Fire the pops"}},hm={hero:{az:-18,el:5,fit:[.84,1.02],side:"left",fov:30},deadbounce:{glass:[-.05,-.25],az:-18,el:18,fit:[.7,.96],side:"right",lift:6,sharp:1,tall:{glass:[0,-.03],az:-12,el:8,fit:[.64,.5]}},tiptop:{glass:[.05,-.25],az:18,el:18,fit:[.7,.96],side:"left",lift:6,sharp:1,tall:{glass:[0,-.03],az:12,el:8,fit:[.64,.5]}},about:{at:[236,935,350],az:14,el:13,fit:[.62,.92],fov:22,side:"right",lift:10,sharp:1,tall:{at:[236,960,400],fit:[.56,.74]}},skills:{at:[237,384,0],az:0,el:50,fit:[.47,.13],side:"left",lift:6},experience:{at:[235,988,8],az:-4,el:52,fit:[.38,.17],side:"right",lift:12},contact:{at:[237,165,22],az:-8,el:47,fit:[.27,.17],side:"left",lift:8}},Hs={stops:[.1,.3,.5,.7].map(i=>[i,i+.1]),inserts:[[26,386],[69.4,386],[404.95,386],[448.35,386]],close:{el:58,fit:[.13,.07],side:"left",fov:30},swing:7};function zv(i){let t=Hs.stops,e=t.length-1,n=eo(Hi(i/t[0][0]))*(1-eo(Hi((i-t[e][1])/(1-t[e][1])))),s=0,r=0;for(let a=0;a<e;a++){let o=Hi((i-t[a][1])/(t[a+1][0]-t[a][1]));o>0&&(s=a+eo(o),r=Math.sin(Math.PI*o))}return{k:s,zoom:n,cross:r}}var um={deadbounce:{url:"/assets/img/deadbounce-origin.jpg",focus:[.5,.5],action:"ramp-deadbounce"},tiptop:{url:"/assets/img/tiptop.jpg",focus:[.5,0],action:"ramp-tiptop"},about:{url:"/assets/img/dylan.jpg",card:!0,action:"portrait"}};async function Hv(){if(!Bn.classList.contains("machine"))return;document.readyState==="loading"&&await new Promise(P=>addEventListener("DOMContentLoaded",P,{once:!0}));let i=Rn("[data-stage]"),t=zs("[data-station]");if(!i||!t.length)throw new Error("No stage on this page");let e=Jp(),n=Rn("[data-boot-label]"),s=async P=>{n&&(n.textContent=P),await new Promise(J=>requestAnimationFrame(()=>setTimeout(J,0)))};await s("Printing the playfield"),await Sp(),performance.mark("machine:fonts");let r={playfield:Tp(e.playfieldScale),backglass:Ep(e.low?1320:2048),cabinetSide:Cp(2048,Math.round(2048*(Ve.top-Ve.bottom+(Ve.front-Ve.back)*Math.tan(6.5*cm))/(Ve.front-Ve.back)),{frontBottom:(Ve.top-Ve.bottom)/(Ve.top-Ve.bottom+(Ve.front-Ve.back)*Math.tan(6.5*cm))}),cabinetFront:Pp(1024,706),backboxSide:Ip(256,778),plastics:Ir.map(P=>Fp(P)),inlane:Dr.map(P=>({plate:zu(P.plate.outline),cover:zu(P.cover.outline,{mark:!0})})),apron:Dp(e.low?1024:2048),popDecal:Up(256),cards:{instructions:ku("instructions",625),free:ku("free",625)},target:Lp(160)},a=document.createElement("canvas"),o=Rn("[data-dmd-label]"),l=Rn("[data-dmd-count]"),c=new window.DMD(a,{reduced:dn,width:e.low?640:896,onScene:(P,J,X)=>{o&&(o.textContent=P),l&&X>1&&(l.textContent=`${J} / ${X}`)}});performance.mark("machine:art"),await s("Assembling the machine");let h=$p(i,e),d=xp(h.envMap),u=Math.min(e.anisotropy,h.renderer.capabilities.getMaxAnisotropy()),f=Vp({M:d,art:r,dmdCanvas:a,anisotropy:u,maxAnisotropy:h.renderer.capabilities.getMaxAnisotropy()});performance.mark("machine:built"),h.scene.add(f.root),h.ao&&h.ao.setSceneClipBox(new Hn().setFromObject(f.root).expandByScalar(.03)),c.onPaint=()=>{f.dmd.texture.needsUpdate=!0};let p=new Bc(f,{reduced:dn}),x=(P,J,X=0)=>f.toWorld(P,J,X);f.backbox.updateMatrixWorld(!0);let m=f.backbox.localToWorld(new O(0,(hs.dmdY-hs.dmdH/2+hs.glassY+hs.glassH)/2,0)),g=([P,J])=>f.backbox.localToWorld(new O(P,hs.glassY+hs.glassH/2+J,0)),b=P=>{let J=hm[P],X=ct=>ct.at?x(...ct.at):ct.glass?g(ct.glass):m;return{...J,target:X(J),...J.tall&&{tall:{...J.tall,target:X({...J,...J.tall})}}}},E=t.map(P=>P.dataset.station),y=new Dc(h.camera);y.setPoses(E.map(b));let v={target:x(237,470,60),az:-34,el:15,fit:[1.5,1.6],side:"center",fov:30},w=Hs.inserts.map(([P,J])=>({...Hs.close,target:x(P,J+6,0),az:P<237?Hs.swing:-Hs.swing})),M=-1,_=f.backglass.lcd;_.still=dn;for(let[P,J]of Object.entries(um)){let X=new Image;X.decoding="async",X.src=J.url,X.decode().then(()=>_.add(P,J.card?Rp(X,1600):Ap(X,e.low?1280:1600,J.focus),J.action)).catch(()=>{})}let T=new kc(Rn("[data-hud]"),t,x),R=E.indexOf("about"),C=R>=0?new zc(f.pops[p.explodedPop],document.body):null,L=P=>{let J=y.holds[R]*1.6,X=Hi((P-(y.anchors[R]-J/2))/J);return X<.5?eo(Hi(X/.36)):eo(Hi((1-X)/.36))},F=null;!dn&&window.Lenis&&(F=new window.Lenis({lerp:.085,wheelMultiplier:.9}));let D=()=>F?F.animatedScroll:window.scrollY,B=(P,J={})=>{F?F.scrollTo(P,{duration:J.duration||1.6,easing:X=>1-Math.pow(1-X,4)}):window.scrollTo({top:P,behavior:"auto"})},G=P=>{let J=Rn("#"+P);if(!J)return-1;let X=J.closest("[data-station]")||J.querySelector("[data-station]");return t.indexOf(X)};for(let P of zs('a[href^="#"]'))P.hasAttribute("data-launch")||P.addEventListener("click",J=>{let X=P.getAttribute("href").slice(1),ct=X==="main"||X==="top"?0:G(X);if(ct<0)return;J.preventDefault(),B(y.anchors[ct],{duration:1.8}),history.replaceState(null,"","#"+X);let ft=t[ct].querySelector("h1, h2, h3");ft&&(ft.setAttribute("tabindex","-1"),ft.focus({preventScroll:!0}))});t.forEach((P,J)=>P.addEventListener("focusin",()=>{Math.abs(y.floatAt(D())-J)>.2&&B(y.anchors[J],{duration:1.1})}));let Z=Rn("[data-header]"),rt=t.map(P=>P.querySelector(".placard")),$=t.map(P=>P.dataset.side||"hero"),nt=rt.map(()=>0),et=rt.map(()=>0),Tt=Rn(".dmd-strip"),At=Tt&&Tt.parentElement,re=Tt&&Tt.nextElementSibling,Zt=0,lt=0,V=!1;function Q(P=!1){let J=innerWidth,X=innerHeight,ct=!P&&V&&J===Zt&&Math.abs(X-lt)<150;if(Zt=J,lt=X,h.resize(Zt,lt),ct)return;y.setView(Zt,lt,Z?Z.offsetHeight:64);let ft=y.view.layout;if(V=ft!=="wide",Bn.classList.toggle("tall",ft==="tall"),Bn.classList.toggle("side",ft==="side"),Bn.classList.toggle("panel",V),Bn.style.setProperty("--panel-top",y.view.panelTop+"px"),Bn.style.setProperty("--panel-left",y.view.panelLeft+"px"),Tt&&rt[0]&&(V?rt[0].append(Tt):At.insertBefore(Tt,re)),!V){t.forEach((pt,Ot)=>{pt.style.height="",rt[Ot]&&pt.style.setProperty("--ph",rt[Ot].offsetHeight+"px")}),y.measure(t,lt);return}let st=t.map((pt,Ot)=>{let Yt=rt[Ot];if(!Yt)return lt*.45;Yt.style.setProperty("--scroll","0px"),et[Ot]=0;let qe=Yt.scrollHeight-Yt.clientHeight;return nt[Ot]=qe>2?Math.ceil(qe+16):0,nt[Ot]+lt*.45*(+pt.dataset.hold||1)}),Et=lt*.8;t.forEach((pt,Ot)=>{pt.style.height=`${Math.round(st[Ot]+(Ot<t.length-1?Et:lt*.25))}px`}),y.setStops(t,st)}Q();let _t=0;addEventListener("resize",()=>{clearTimeout(_t),_t=setTimeout(Q,120)}),document.fonts.ready.then(()=>Q(!0));let It=new Ea,wt=new ot(9,9),Gt=null,se=!1,it=Rn("[data-cursor-label]"),ht=P=>P.closest("a, button, input, label, .placard, [data-glass], .site-header, .dmd-strip, .site-footer"),dt=!1,gt=0;addEventListener("pointermove",P=>{dt=!0,wt.set(P.clientX/Zt*2-1,-(P.clientY/lt)*2+1),lm&&y.pointer(wt.x,wt.y),it&&(it.style.transform=`translate(${P.clientX}px, ${P.clientY}px) translate(-50%, -50%) scale(${Gt?1:0})`),se=!!ht(P.target)},{passive:!0});function vt(){if(se||Math.abs(wt.x)>1)return null;It.setFromCamera(wt,h.camera);let P=It.intersectObjects(f.interactive,!1).find(J=>J.object.visible&&(!J.object.parent||J.object.parent.visible!==!1));return P&&P.object.userData.action||null}addEventListener("click",P=>{if(ht(P.target))return;let J=vt();if(!J)return;let X=rd[J];if(X&&X.href){window.pixelsTo?window.pixelsTo(X.href,{x:P.clientX,y:P.clientY}):location.href=X.href;return}J.startsWith("pop-")?p.firePop(+J.slice(4)):J==="portrait"?[0,1,2].forEach((ct,ft)=>setTimeout(()=>p.firePop(ct),ft*140)):J.startsWith("target-")?p.hitTarget(+J.slice(7)):J.startsWith("sling-")?p.kickSling(J.slice(6)):J==="flip-left"||J==="flip-right"?Wt(J.slice(5)):J==="plunger"?zt():J==="dmd"&&c.next()}),addEventListener("keydown",P=>{P.repeat||P.target.closest&&P.target.closest("input, textarea")||(P.code==="ShiftLeft"&&Wt("left",!0),P.code==="ShiftRight"&&Wt("right",!0))}),addEventListener("keyup",P=>{P.code==="ShiftLeft"&&p.hold("left",!1),P.code==="ShiftRight"&&p.hold("right",!1)});function Wt(P,J=!1){J?p.hold(P,!0):p.flip(P)}function zt(){p.pull(),setTimeout(()=>{p.release(),B(0,{duration:2.8})},dn?0:520)}for(let P of zs("[data-launch]"))P.addEventListener("click",J=>{J.preventDefault(),zt()});for(let P of zs('.station-hero a[href="#work"]'))P.addEventListener("click",()=>p.pressStart());for(let P of zs("[data-flip]"))P.addEventListener("pointerenter",()=>p.flip(P.dataset.flip)),P.addEventListener("focus",()=>p.flip(P.dataset.flip));let qt=Rn("[data-dmd-pause]"),Jt=Rn("[data-dmd-next]"),k=dn;qt&&(dn&&(qt.hidden=!0),qt.addEventListener("click",()=>{k=!k,qt.setAttribute("aria-pressed",String(k)),qt.textContent=k?"Play":"Pause",k?c.stop():c.start()})),Jt&&Jt.addEventListener("click",()=>{c.next(),(k||dn)&&c.still()});let ue=Rn("[data-shade]"),ee={l:-1,r:-1,b:-1},I=rt.map(()=>-1),S=rt.map(()=>0),H=Rn("[data-lens]"),W=0,j=Rn(".site-footer");function xt(P,J){let X=1;V&&j&&P>rt.length-1.6&&(X=Hi((j.getBoundingClientRect().top-lt*.55)/(lt*.35))),rt.forEach((pt,Ot)=>{let Yt=Hi(1-Math.abs(P-Ot)*2.4);if(dn&&(Yt=Math.abs(P-Ot)<.5?1:0),Ot===rt.length-1&&(Yt*=X),S[Ot]=Yt,!!pt){if(V){let qe=nt[Ot]?Math.round(-nt[Ot]*y.holdProgress(Ot,J)*2)/2:0;qe!==et[Ot]&&(et[Ot]=qe,pt.style.setProperty("--scroll",qe+"px"))}Math.abs(Yt-I[Ot])<.003||(I[Ot]=Yt,pt.style.opacity=Yt.toFixed(3),pt.style.transform=`translate3d(0, ${((1-Yt)*22).toFixed(1)}px, 0)`,pt.classList.toggle("is-here",Yt>.55))}});let ct=0;S.forEach((pt,Ot)=>{Ot>0&&pt>S[ct]&&(ct=Ot)});let ft=ct>0?S[ct]:0;if(H&&!V&&(ft>.01||W>.01)){if(ft>.01){let pt=rt[ct].getBoundingClientRect(),Ot=90,Yt=80;H.style.transform=`translate(${(pt.left-Ot).toFixed(0)}px, ${(pt.top-Yt).toFixed(0)}px)`,H.style.width=`${(pt.width+Ot*2).toFixed(0)}px`,H.style.height=`${(pt.height+Yt*2).toFixed(0)}px`}H.style.opacity=ft.toFixed(3),W=ft}let st=pt=>Math.max(0,...S.map((Ot,Yt)=>$[Yt]===pt?Ot:0)),Et=V?{l:0,r:0,b:0}:{l:st("left"),r:st("right"),b:0};for(let pt of["l","r","b"])Math.abs(Et[pt]-ee[pt])<.004||(ee[pt]=Et[pt],ue.style.setProperty("--"+pt,Et[pt].toFixed(3)))}let Mt=zs("[data-skill]"),tt=zs("[data-rung]"),at="";function bt(P){let J=p.skillsLit.join("")+"|"+(P==="experience"?p.rung:-1)+"|"+M;if(J===at)return;at=J,Mt.forEach((st,Et)=>st.classList.toggle("lit",p.skillsLit[Et]>.5)),tt.forEach((st,Et)=>st.classList.toggle("lit",P==="experience"&&Et<=p.rung));let X=p.skillsLit.filter(st=>st>.5).length,ct=P!=="skills"?-1:dn?X>0&&X<Mt.length?p.skillsLit.lastIndexOf(1):-1:M,ft=P==="experience"?p.rung:-1;for(let[st,Et]of[[Mt,ct],[tt,ft]])st.forEach((pt,Ot)=>pt.classList.toggle("current",Ot===Et)),st[0]&&st[0].parentElement.classList.toggle("has-current",Et>=0)}let Nt={blend:dn?1:0};function St(){if(Bn.classList.remove("booting"),Bn.classList.add("machine-ready"),dn||!window.gsap){p.power=1,Nt.blend=1,c.boot();return}window.gsap.timeline().to(p,{power:.75,duration:.08,ease:"none"},.35).to(p,{power:.08,duration:.07,ease:"none"},.45).to(p,{power:.9,duration:.06,ease:"none"},.6).to(p,{power:.3,duration:.05,ease:"none"},.68).to(p,{power:1,duration:.5,ease:"power2.out"},.78).call(()=>c.boot(),null,.85).to(Nt,{blend:1,duration:2.6,ease:"power3.inOut"},.2)}let yt=!0,Dt=performance.now();document.addEventListener("visibilitychange",()=>{yt=!document.hidden,yt&&(Dt=performance.now(),requestAnimationFrame($t)),document.hidden?c.stop():k||c.start()}),addEventListener("pixels:leave",()=>setTimeout(()=>{yt=!1,c.stop()},320)),addEventListener("pixels:reset",()=>{yt||document.hidden||(yt=!0,Dt=performance.now(),requestAnimationFrame($t),k||c.start())});let Ht=null;function $t(P){if(!yt)return;let J=Math.min(.5,Math.max(0,(P-Dt)/1e3)),X=Math.min(.05,J);Dt=P,F&&F.raf(P);let ct=D(),ft=y.floatAt(ct),st=Math.round(ft),Et=Math.abs(ft-st)<.36?E[st]:null;Et!==Ht&&(Ht=Et,p.setStation(Et||p.station),Bn.dataset.station=Et||"");let pt=E.indexOf("skills"),Ot=E.indexOf("experience");pt>=0&&p.setSkills(Et==="skills"?y.holdProgress(pt,ct):ft>pt?1:0),Ot>=0&&p.setTimeline(y.holdProgress(Ot,ct));let Yt=y.at(dn?st:ft);if(M=-1,pt>=0&&!dn&&Math.abs(ft-pt)<.001){let{k:Ge,zoom:si,cross:so}=zv(y.holdProgress(pt,ct));if(si>.001){let us=Math.floor(Ge),zr=Math.min(w.length-1,us+1),Ei=y.blend(y.resolve(w[us]),y.resolve(w[zr]),Ge-us,0),Hr=Math.abs(Hs.inserts[zr][0]-Hs.inserts[us][0])/340;Yt=y.blend(Yt,Ei,si*(1-.6*so*Hr),0),si>.6&&so<.5&&(M=Math.round(Ge))}}Nt.blend<1&&(Yt=y.blend(y.resolve(v),Yt,Nt.blend,0)),y.apply(Yt,X,{instant:dn,damping:6.5});let qe=st>0?Hi(1-Math.abs(ft-st)*2.4):0;h.focusOn(y.current.target,y.current.d,qe*Nt.blend,y.current.sharp),p.skillFocus=M,p.update(X,{f:ft}),T.update(h.camera,Zt,lt,S,y.view),xt(ft,ct),bt(Et);let Cn="art",no=_.showing==="art"?.46:.54;for(let Ge of Object.keys(um)){let si=Math.abs(ft-E.indexOf(Ge))-(Ge===_.showing?.06:0);E.includes(Ge)&&si<no&&(no=si,Cn=Ge)}if(_.show(Cn,dn),_.update(J),C){let Ge=L(ct);C.update(Ge,h.camera,Zt,lt,y.view.layout==="tall"?"tall":hm.about.side),p.exploded=Ge}let io=ct>40;if(io!==Bn.classList.contains("scrolled")&&Bn.classList.toggle("scrolled",io),lm&&(dt||++gt%6===0)){dt=!1;let Ge=vt();Ge!==Gt&&(Gt=Ge,document.body.style.cursor=Ge?"pointer":"",it&&(it.textContent=Ge&&rd[Ge]?rd[Ge].label:""))}h.render(),h.govern(P),requestAnimationFrame($t)}y.apply(y.at(0),0,{instant:!0}),await s("Warming up the lamps");try{await h.renderer.compileAsync(h.scene,h.camera)}catch{}h.render(),performance.mark("machine:first-frame"),n&&(n.textContent="Powering on"),requestAnimationFrame(P=>{Dt=P,$t(P),St()}),window.__machine={stage:h,h:f,show:p,director:y,dmd:c,lenis:F,scrollTo:B,intro:Nt,lcd:_,exploded:C}}Hv().catch(i=>{console.error(i),Bn.classList.remove("machine","booting","tall","side","panel"),Bn.classList.add("machine-failed"),window.dispatchEvent(new Event("machine:failed"))});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
