var Jp=Object.defineProperty;var Kp=(i,t)=>{for(var e in t)Jp(i,e,{get:t[e],enumerable:!0})};var Id=0,xh=1,Ld=2;var ms=1,Dd=2,fr=3,Ji=0,fn=1,pn=2,He=0,pr=1,gs=2,_h=3,vh=4,al=5;var Bn=100,Ud=101,Nd=102,Fd=103,Od=104,xs=200,Bd=201,kd=202,zd=203,yh=204,Mh=205,_a=206,Hd=207,va=208,Gd=209,Vd=210,Wd=211,Xd=212,qd=213,Yd=214,Eo=0,wo=1,Ao=2,Ks=3,Ro=4,Co=5,Po=6,Io=7,Sh=0,Zd=1,$d=2,qn=0,bh=1,Th=2,Eh=3,wh=4,ya=5,Ah=6,Rh=7;var Ch=300,Ki=301,_s=302,ol=303,ll=304,Ma=306,yn=1e3,ei=1001,Lo=1002,Le=1003,Jd=1004;var Sa=1005;var tn=1006,cl=1007;var ji=1008;var Qe=1009,Ph=1010,Ih=1011,mr=1012,hl=1013,Yn=1014,Zn=1015,Oe=1016,ul=1017,dl=1018,Qi=1020,Lh=35902,Dh=35899,Uh=1021,Nh=1022,Mn=1023,ii=1026,hi=1027,Fh=1028,fl=1029,ts=1030,pl=1031;var ml=1033,ba=33776,Ta=33777,Ea=33778,wa=33779,gl=35840,xl=35841,_l=35842,vl=35843,yl=36196,Ml=37492,Sl=37496,bl=37488,Tl=37489,Aa=37490,El=37491,wl=37808,Al=37809,Rl=37810,Cl=37811,Pl=37812,Il=37813,Ll=37814,Dl=37815,Ul=37816,Nl=37817,Fl=37818,Ol=37819,Bl=37820,kl=37821,zl=36492,Hl=36494,Gl=36495,Vl=36283,Wl=36284,Ra=36285,Xl=36286;var Hr=2300,Do=2301,bo=2302,sh=2303,rh=2400,ah=2401,oh=2402;var Kd=3200,Oh=3201;var Ca=0,jd=1,Ci="",qe="srgb",Gr="srgb-linear",Vr="linear",ye="srgb";var To=7680;var Qd=519,tf=512,ef=513,nf=514,ql=515,sf=516,rf=517,Yl=518,af=519,of=35044;var Bh="300 es",Xn=2e3,js=2001;function jp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lf(){let i=Wr("canvas");return i.style.display="block",i}var td={},Qs=null;function kh(...i){let t="THREE."+i.shift();Qs?Qs("log",t,...i):console.log(t,...i)}function cf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Jt(...i){i=cf(i);let t="THREE."+i.shift();if(Qs)Qs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Kt(...i){i=cf(i);let t="THREE."+i.shift();if(Qs)Qs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function us(...i){let t=i.join(" ");t in td||(td[t]=!0,Jt(...i))}function hf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var uf={[Eo]:wo,[Ao]:Po,[Ro]:Io,[Ks]:Co,[wo]:Eo,[Po]:Ao,[Io]:Ro,[Co]:Ks},si=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ic=Math.PI/180,Xr=180/Math.PI;function gr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function ae(i,t,e){return Math.max(t,Math.min(e,i))}function tm(i,t){return(i%t+t)%t}function Lc(i,t,e){return(1-e)*i+e*t}function Lr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Xh=class Xh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xh.prototype.isVector2=!0;var ot=Xh,ri=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],p=r[a+2],y=r[a+3];if(u!==y||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*y;m<0&&(d=-d,f=-f,p=-p,y=-y,m=-m);let g=1-o;if(m<.9995){let T=Math.acos(m),w=Math.sin(T);g=Math.sin(g*T)/w,o=Math.sin(o*T)/w,l=l*g+d*o,c=c*g+f*o,h=h*g+p*o,u=u*g+y*o}else{l=l*g+d*o,c=c*g+f*o,h=h*g+p*o,u=u*g+y*o;let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-o*f,t[e+2]=c*p+h*f+o*d-l*u,t[e+3]=h*p-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},qh=class qh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ed.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ed.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dc.copy(this).projectOnVector(t),this.sub(Dc)}reflect(t){return this.sub(Dc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qh.prototype.isVector3=!0;var N=qh,Dc=new N,ed=new ri,Yh=class Yh{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],y=s[0],m=s[3],g=s[6],T=s[1],w=s[4],v=s[7],M=s[2],x=s[5],E=s[8];return r[0]=a*y+o*T+l*M,r[3]=a*m+o*w+l*x,r[6]=a*g+o*v+l*E,r[1]=c*y+h*T+u*M,r[4]=c*m+h*w+u*x,r[7]=c*g+h*v+u*E,r[2]=d*y+f*T+p*M,r[5]=d*m+f*w+p*x,r[8]=d*g+f*v+p*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,p=e*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return t[0]=u*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=d*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Uc.makeScale(t,e)),this}rotate(t){return us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Uc.makeRotation(-t)),this}translate(t,e){return us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Uc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Yh.prototype.isMatrix3=!0;var jt=Yh,Uc=new jt,nd=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),id=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function em(){let i={enabled:!0,workingColorSpace:Gr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ye&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ye&&(s.r=Js(s.r),s.g=Js(s.g),s.b=Js(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ci?Vr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return us("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return us("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gr]:{primaries:t,whitePoint:n,transfer:Vr,toXYZ:nd,fromXYZ:id,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:nd,fromXYZ:id,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}}),i}var de=em();function Ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Os,Uo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Os===void 0&&(Os=Wr("canvas")),Os.width=t.width,Os.height=t.height;let s=Os.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Os}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Wr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ei(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ei(e[n]/255)*255):e[n]=Ei(e[n]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},nm=0,tr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=gr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Nc(s[a].image)):r.push(Nc(s[a]))}else r=Nc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}var im=0,Fc=new N,hn=class i extends si{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ei,s=ei,r=tn,a=ji,o=Mn,l=Qe,c=i.DEFAULT_ANISOTROPY,h=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=gr(),this.name="",this.source=new tr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fc).x}get height(){return this.source.getSize(Fc).y}get depth(){return this.source.getSize(Fc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yn:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case Lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yn:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case Lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Ch;hn.DEFAULT_ANISOTROPY=1;var Zh=class Zh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],y=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,v=(f+1)/2,M=(g+1)/2,x=(h+d)/4,E=(u+y)/4,_=(p+m)/4;return w>v&&w>M?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=x/n,r=E/n):v>M?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=x/s,r=_/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=E/r,s=_/r),this.set(n,s,r,e),this}let T=Math.sqrt((m-p)*(m-p)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-p)/T,this.y=(u-y)/T,this.z=(d-h)/T,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zh.prototype.isVector4=!0;var De=Zh,No=class extends si{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new hn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new tr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ne=class extends No{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},qr=class extends hn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fo=class extends hn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var rl=class rl{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,p,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,p,y,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,p,y,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=y,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Bs.setFromMatrixColumn(t,0).length(),r=1/Bs.setFromMatrixColumn(t,1).length(),a=1/Bs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,p=o*h,y=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-y*c,e[9]=-o*l,e[2]=y-d*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,y=c*u;e[0]=d+y*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=y+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,y=c*u;e[0]=d-y*o,e[4]=-a*u,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=y-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,p=o*h,y=o*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,p=o*l,y=o*c;e[0]=l*h,e[4]=y-d*u,e[8]=p*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-y*u}else if(t.order==="XZY"){let d=a*l,f=a*c,p=o*l,y=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=a*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=o*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sm,t,rm)}lookAt(t,e,n){let s=this.elements;return wn.subVectors(t,e),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),ki.crossVectors(n,wn),ki.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),ki.crossVectors(n,wn)),ki.normalize(),Qa.crossVectors(wn,ki),s[0]=ki.x,s[4]=Qa.x,s[8]=wn.x,s[1]=ki.y,s[5]=Qa.y,s[9]=wn.y,s[2]=ki.z,s[6]=Qa.z,s[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],y=n[6],m=n[10],g=n[14],T=n[3],w=n[7],v=n[11],M=n[15],x=s[0],E=s[4],_=s[8],b=s[12],A=s[1],C=s[5],D=s[9],O=s[13],L=s[2],F=s[6],z=s[10],V=s[14],Q=s[3],q=s[7],nt=s[11],et=s[15];return r[0]=a*x+o*A+l*L+c*Q,r[4]=a*E+o*C+l*F+c*q,r[8]=a*_+o*D+l*z+c*nt,r[12]=a*b+o*O+l*V+c*et,r[1]=h*x+u*A+d*L+f*Q,r[5]=h*E+u*C+d*F+f*q,r[9]=h*_+u*D+d*z+f*nt,r[13]=h*b+u*O+d*V+f*et,r[2]=p*x+y*A+m*L+g*Q,r[6]=p*E+y*C+m*F+g*q,r[10]=p*_+y*D+m*z+g*nt,r[14]=p*b+y*O+m*V+g*et,r[3]=T*x+w*A+v*L+M*Q,r[7]=T*E+w*C+v*F+M*q,r[11]=T*_+w*D+v*z+M*nt,r[15]=T*b+w*O+v*V+M*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],y=t[7],m=t[11],g=t[15],T=l*f-c*d,w=o*f-c*u,v=o*d-l*u,M=a*f-c*h,x=a*d-l*h,E=a*u-o*h;return e*(y*T-m*w+g*v)-n*(p*T-m*M+g*x)+s*(p*w-y*M+g*E)-r*(p*v-y*x+m*E)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],y=t[13],m=t[14],g=t[15],T=e*o-n*a,w=e*l-s*a,v=e*c-r*a,M=n*l-s*o,x=n*c-r*o,E=s*c-r*l,_=h*y-u*p,b=h*m-d*p,A=h*g-f*p,C=u*m-d*y,D=u*g-f*y,O=d*g-f*m,L=T*O-w*D+v*C+M*A-x*b+E*_;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/L;return t[0]=(o*O-l*D+c*C)*F,t[1]=(s*D-n*O-r*C)*F,t[2]=(y*E-m*x+g*M)*F,t[3]=(d*x-u*E-f*M)*F,t[4]=(l*A-a*O-c*b)*F,t[5]=(e*O-s*A+r*b)*F,t[6]=(m*v-p*E-g*w)*F,t[7]=(h*E-d*v+f*w)*F,t[8]=(a*D-o*A+c*_)*F,t[9]=(n*A-e*D-r*_)*F,t[10]=(p*x-y*v+g*T)*F,t[11]=(u*v-h*x-f*T)*F,t[12]=(o*b-a*C-l*_)*F,t[13]=(e*C-n*b+s*_)*F,t[14]=(y*w-p*M-m*T)*F,t[15]=(h*M-u*w+d*T)*F,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,p=r*u,y=a*h,m=a*u,g=o*u,T=l*c,w=l*h,v=l*u,M=n.x,x=n.y,E=n.z;return s[0]=(1-(y+g))*M,s[1]=(f+v)*M,s[2]=(p-w)*M,s[3]=0,s[4]=(f-v)*x,s[5]=(1-(d+g))*x,s[6]=(m+T)*x,s[7]=0,s[8]=(p+w)*E,s[9]=(m-T)*E,s[10]=(1-(d+y))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Bs.set(s[0],s[1],s[2]).length(),o=Bs.set(s[4],s[5],s[6]).length(),l=Bs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Hn.copy(this);let c=1/a,h=1/o,u=1/l;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=u,Hn.elements[9]*=u,Hn.elements[10]*=u,e.setFromRotationMatrix(Hn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Xn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),p,y;if(l)p=r/(a-r),y=a*r/(a-r);else if(o===Xn)p=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===js)p=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Xn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),p,y;if(l)p=1/(a-r),y=a/(a-r);else if(o===Xn)p=-2/(a-r),y=-(a+r)/(a-r);else if(o===js)p=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};rl.prototype.isMatrix4=!0;var ce=rl,Bs=new N,Hn=new ce,sm=new N(0,0,0),rm=new N(1,1,1),ki=new N,Qa=new N,wn=new N,sd=new ce,rd=new ri,wi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rd.setFromEuler(this),this.setFromQuaternion(rd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wi.DEFAULT_ORDER="XYZ";var er=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},am=0,ad=new N,ks=new ri,yi=new ce,to=new N,Dr=new N,om=new N,lm=new ri,od=new N(1,0,0),ld=new N(0,1,0),cd=new N(0,0,1),hd={type:"added"},cm={type:"removed"},zs={type:"childadded",child:null},Oc={type:"childremoved",child:null},Xe=class i extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new wi,n=new ri,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new jt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(od,t)}rotateY(t){return this.rotateOnAxis(ld,t)}rotateZ(t){return this.rotateOnAxis(cd,t)}translateOnAxis(t,e){return ad.copy(t).applyQuaternion(this.quaternion),this.position.add(ad.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(od,t)}translateY(t){return this.translateOnAxis(ld,t)}translateZ(t){return this.translateOnAxis(cd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?to.copy(t):to.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Dr,to,this.up):yi.lookAt(to,Dr,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(yi),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hd),zs.child=t,this.dispatchEvent(zs),zs.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cm),Oc.child=t,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hd),zs.child=t,this.dispatchEvent(zs),zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,t,om),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,lm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Xe.DEFAULT_UP=new N(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fe=class extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},hm={type:"move"},nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),g=this._getHandJoint(c,y);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},eo={h:0,s:0,l:0};function Bc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=tm(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Bc(a,r,t+1/3),this.g=Bc(a,r,t),this.b=Bc(a,r,t-1/3)}return de.colorSpaceToWorking(this,s),this}setStyle(t,e=qe){function n(r){r!==void 0&&parseFloat(r)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){let n=df[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}copyLinearToSRGB(t){return this.r=Js(t.r),this.g=Js(t.g),this.b=Js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return de.workingToColorSpace(an.copy(this),t),Math.round(ae(an.r*255,0,255))*65536+Math.round(ae(an.g*255,0,255))*256+Math.round(ae(an.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(an.copy(this),e);let n=an.r,s=an.g,r=an.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=qe){de.workingToColorSpace(an.copy(this),t);let e=an.r,n=an.g,s=an.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(zi),this.setHSL(zi.h+t,zi.s+e,zi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zi),t.getHSL(eo);let n=Lc(zi.h,eo.h,e),s=Lc(zi.s,eo.s,e),r=Lc(zi.l,eo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new Ht;Ht.NAMES=df;var Yr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ir=class extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Gn=new N,Mi=new N,kc=new N,Si=new N,Hs=new N,Gs=new N,ud=new N,zc=new N,Hc=new N,Gc=new N,Vc=new De,Wc=new De,Xc=new De,Wi=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Gn.subVectors(t,e),s.cross(Gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Gn.subVectors(s,e),Mi.subVectors(n,e),kc.subVectors(t,e);let a=Gn.dot(Gn),o=Gn.dot(Mi),l=Gn.dot(kc),c=Mi.dot(Mi),h=Mi.dot(kc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(a,Si.y),l.addScaledVector(o,Si.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Vc.setScalar(0),Wc.setScalar(0),Xc.setScalar(0),Vc.fromBufferAttribute(t,e),Wc.fromBufferAttribute(t,n),Xc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Vc,r.x),a.addScaledVector(Wc,r.y),a.addScaledVector(Xc,r.z),a}static isFrontFacing(t,e,n,s){return Gn.subVectors(n,e),Mi.subVectors(t,e),Gn.cross(Mi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Gn.cross(Mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Hs.subVectors(s,n),Gs.subVectors(r,n),zc.subVectors(t,n);let l=Hs.dot(zc),c=Gs.dot(zc);if(l<=0&&c<=0)return e.copy(n);Hc.subVectors(t,s);let h=Hs.dot(Hc),u=Gs.dot(Hc);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Hs,a);Gc.subVectors(t,r);let f=Hs.dot(Gc),p=Gs.dot(Gc);if(p>=0&&f<=p)return e.copy(r);let y=f*c-l*p;if(y<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(Gs,o);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return ud.subVectors(r,s),o=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(ud,o);let g=1/(m+y+d);return a=y*g,o=d*g,e.copy(n).addScaledVector(Hs,a).addScaledVector(Gs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Fn=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Vn):Vn.fromBufferAttribute(r,a),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),no.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),no.copy(n.boundingBox)),no.applyMatrix4(t.matrixWorld),this.union(no)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ur),io.subVectors(this.max,Ur),Vs.subVectors(t.a,Ur),Ws.subVectors(t.b,Ur),Xs.subVectors(t.c,Ur),Hi.subVectors(Ws,Vs),Gi.subVectors(Xs,Ws),os.subVectors(Vs,Xs);let e=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-os.z,os.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,os.z,0,-os.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-os.y,os.x,0];return!qc(e,Vs,Ws,Xs,io)||(e=[1,0,0,0,1,0,0,0,1],!qc(e,Vs,Ws,Xs,io))?!1:(so.crossVectors(Hi,Gi),e=[so.x,so.y,so.z],qc(e,Vs,Ws,Xs,io))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},bi=[new N,new N,new N,new N,new N,new N,new N,new N],Vn=new N,no=new Fn,Vs=new N,Ws=new N,Xs=new N,Hi=new N,Gi=new N,os=new N,Ur=new N,io=new N,so=new N,ls=new N;function qc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ls.fromArray(i,r);let o=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),l=t.dot(ls),c=e.dot(ls),h=n.dot(ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var We=new N,ro=new ot,um=0,vn=class extends si{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:um++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=of,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ro.fromBufferAttribute(this,e),ro.applyMatrix3(t),this.setXY(e,ro.x,ro.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Lr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_n(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Lr(e,this.array)),e}setX(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Lr(e,this.array)),e}setY(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Lr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Lr(e,this.array)),e}setW(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array),s=_n(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array),s=_n(s,this.array),r=_n(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Zr=class extends vn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var $r=class extends vn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ee=class extends vn{constructor(t,e,n){super(new Float32Array(t),e,n)}},dm=new Fn,Nr=new N,Yc=new N,ds=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):dm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Nr.subVectors(t,this.center);let e=Nr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Nr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Nr.copy(t.center).add(Yc)),this.expandByPoint(Nr.copy(t.center).sub(Yc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},fm=0,Nn=new ce,Zc=new Xe,qs=new N,An=new Fn,Fr=new Fn,Je=new N,Me=class i extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jp(t)?$r:Zr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,e,n){return Nn.makeTranslation(t,e,n),this.applyMatrix4(Nn),this}scale(t,e,n){return Nn.makeScale(t,e,n),this.applyMatrix4(Nn),this}lookAt(t){return Zc.lookAt(t),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ee(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ds);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Je.addVectors(An.min,Fr.min),An.expandByPoint(Je),Je.addVectors(An.max,Fr.max),An.expandByPoint(Je)):(An.expandByPoint(Fr.min),An.expandByPoint(Fr.max))}An.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Je));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Je.fromBufferAttribute(o,c),l&&(qs.fromBufferAttribute(t,c),Je.add(qs)),s=Math.max(s,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new vn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new N,l[_]=new N;let c=new N,h=new N,u=new N,d=new ot,f=new ot,p=new ot,y=new N,m=new N;function g(_,b,A){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,A),d.fromBufferAttribute(r,_),f.fromBufferAttribute(r,b),p.fromBufferAttribute(r,A),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let C=1/(f.x*p.y-p.x*f.y);isFinite(C)&&(y.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(C),o[_].add(y),o[b].add(y),o[A].add(y),l[_].add(m),l[b].add(m),l[A].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let _=0,b=T.length;_<b;++_){let A=T[_],C=A.start,D=A.count;for(let O=C,L=C+D;O<L;O+=3)g(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let w=new N,v=new N,M=new N,x=new N;function E(_){M.fromBufferAttribute(s,_),x.copy(M);let b=o[_];w.copy(b),w.sub(M.multiplyScalar(M.dot(b))).normalize(),v.crossVectors(x,b);let C=v.dot(l[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,C)}for(let _=0,b=T.length;_<b;++_){let A=T[_],C=A.start,D=A.count;for(let O=C,L=C+D;O<L;O+=3)E(t.getX(O+0)),E(t.getX(O+1)),E(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new vn(d,h,u)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var $c=new N,pm=new N,mm=new jt,Wn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=$c.subVectors(n,e).cross(pm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta($c),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||mm.getNormalMatrix(t),s=this.coplanarPoint($c).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},gm=0,ai=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=gr(),this.name="",this.type="Material",this.blending=pr,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yh,this.blendDst=Mh,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=To,this.stencilZFail=To,this.stencilZPass=To,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Wn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ot().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ti=new N,Jc=new N,ao=new N,oo=new N,sr=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ti.copy(this.origin).addScaledVector(this.direction,e),Ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Jc.copy(t).add(e).multiplyScalar(.5),ao.copy(e).sub(t).normalize(),oo.copy(this.origin).sub(Jc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ao),o=oo.dot(this.direction),l=-oo.dot(ao),c=oo.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Jc).addScaledVector(ao,d),f}intersectSphere(t,e){if(t.radius<0)return null;Ti.subVectors(t.center,this.origin);let n=Ti.dot(this.direction),s=Ti.dot(Ti)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ti)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,p=e.x-a.x,y=e.y-a.y,m=e.z-a.z,g=n.x-a.x,T=n.y-a.y,w=n.z-a.z,v=Math.abs(l),M=Math.abs(c),x=Math.abs(h),E,_,b,A,C,D,O,L,F,z,V,Q;if(v>=M&&v>=x?(b=l,D=u,F=p,Q=g,l>=0?(E=c,_=h,A=d,C=f,O=y,L=m,z=T,V=w):(E=h,_=c,A=f,C=d,O=m,L=y,z=w,V=T)):M>=x?(b=c,D=d,F=y,Q=T,c>=0?(E=h,_=l,A=f,C=u,O=m,L=p,z=w,V=g):(E=l,_=h,A=u,C=f,O=p,L=m,z=g,V=w)):(b=h,D=f,F=m,Q=w,h>=0?(E=l,_=c,A=u,C=d,O=p,L=y,z=g,V=T):(E=c,_=l,A=d,C=u,O=y,L=p,z=T,V=g)),b===0)return null;let q=E/b,nt=_/b,et=1/b,Et=A-q*D,At=C-nt*D,se=O-q*F,Yt=L-nt*F,at=z-q*Q,G=V-nt*Q,j=at*Yt-G*se,xt=Et*G-At*at,It=se*At-Yt*Et;if(s){if(j<0||xt<0||It<0)return null}else if((j<0||xt<0||It<0)&&(j>0||xt>0||It>0))return null;let Tt=j+xt+It;if(Tt===0)return null;let Gt=et*(j*D+xt*F+It*Q);return(Tt>0?Gt<0:Gt>0)?null:this.at(Gt/Tt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},un=class extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},dd=new ce,cs=new sr,lo=new ds,fd=new N,co=new N,ho=new N,uo=new N,Kc=new N,fo=new N,pd=new N,po=new N,_e=class extends Xe{constructor(t=new Me,e=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){fo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Kc.fromBufferAttribute(u,t),a?fo.addScaledVector(Kc,h):fo.addScaledVector(Kc.sub(e),h))}e.add(fo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(r),cs.copy(t.ray).recast(t.near),!(lo.containsPoint(cs.origin)===!1&&(cs.intersectSphere(lo,fd)===null||cs.origin.distanceToSquared(fd)>(t.far-t.near)**2))&&(dd.copy(r).invert(),cs.copy(t.ray).applyMatrix4(dd),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,cs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,y=d.length;p<y;p++){let m=d[p],g=a[m.materialIndex],T=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=T,M=w;v<M;v+=3){let x=o.getX(v),E=o.getX(v+1),_=o.getX(v+2);s=mo(this,g,t,n,c,h,u,x,E,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=p,g=y;m<g;m+=3){let T=o.getX(m),w=o.getX(m+1),v=o.getX(m+2);s=mo(this,a,t,n,c,h,u,T,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,y=d.length;p<y;p++){let m=d[p],g=a[m.materialIndex],T=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=T,M=w;v<M;v+=3){let x=v,E=v+1,_=v+2;s=mo(this,g,t,n,c,h,u,x,E,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=p,g=y;m<g;m+=3){let T=m,w=m+1,v=m+2;s=mo(this,a,t,n,c,h,u,T,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function xm(i,t,e,n,s,r,a,o){let l;if(t.side===fn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ji,o),l===null)return null;po.copy(o),po.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(po);return c<e.near||c>e.far?null:{distance:c,point:po.clone(),object:i}}function mo(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,co),i.getVertexPosition(l,ho),i.getVertexPosition(c,uo);let h=xm(i,t,e,n,co,ho,uo,pd);if(h){let u=new N;Wi.getBarycoord(pd,co,ho,uo,u),s&&(h.uv=Wi.getInterpolatedAttribute(s,o,l,c,u,new ot)),r&&(h.uv1=Wi.getInterpolatedAttribute(r,o,l,c,u,new ot)),a&&(h.normal=Wi.getInterpolatedAttribute(a,o,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new N,materialIndex:0};Wi.getNormal(co,ho,uo,d.normal),h.face=d,h.barycoord=u}return h}var Xi=class extends hn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Le,h=Le,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hs=new ds,_m=new ot(.5,.5),go=new N,rr=class{constructor(t=new Wn,e=new Wn,n=new Wn,s=new Wn,r=new Wn,a=new Wn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],y=r[9],m=r[10],g=r[11],T=r[12],w=r[13],v=r[14],M=r[15];if(s[0].setComponents(c-a,f-h,g-p,M-T).normalize(),s[1].setComponents(c+a,f+h,g+p,M+T).normalize(),s[2].setComponents(c+o,f+u,g+y,M+w).normalize(),s[3].setComponents(c-o,f-u,g-y,M-w).normalize(),n)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,f-d,g-m,M-v).normalize();else if(s[4].setComponents(c-l,f-d,g-m,M-v).normalize(),e===Xn)s[5].setComponents(c+l,f+d,g+m,M+v).normalize();else if(e===js)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(t){hs.center.set(0,0,0);let e=_m.distanceTo(t.center);return hs.radius=.7071067811865476+e,hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(go.x=s.normal.x>0?t.max.x:t.min.x,go.y=s.normal.y>0?t.max.y:t.min.y,go.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(go)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Jr=class extends ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Oo=new N,Bo=new N,md=new ce,Or=new sr,xo=new ds,jc=new N,gd=new N,Kr=class extends Xe{constructor(t=new Me,e=new Jr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Oo.fromBufferAttribute(e,s-1),Bo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Oo.distanceTo(Bo);t.setAttribute("lineDistance",new ee(n,1))}else Jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(s),xo.radius+=r,t.ray.intersectsSphere(xo)===!1)return;md.copy(s).invert(),Or.copy(t.ray).applyMatrix4(md);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let y=f,m=p-1;y<m;y+=c){let g=h.getX(y),T=h.getX(y+1),w=_o(this,t,Or,l,g,T,y);w&&e.push(w)}if(this.isLineLoop){let y=h.getX(p-1),m=h.getX(f),g=_o(this,t,Or,l,y,m,p-1);g&&e.push(g)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let y=f,m=p-1;y<m;y+=c){let g=_o(this,t,Or,l,y,y+1,y);g&&e.push(g)}if(this.isLineLoop){let y=_o(this,t,Or,l,p-1,f,p-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function _o(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Oo.fromBufferAttribute(o,s),Bo.fromBufferAttribute(o,r),e.distanceSqToSegment(Oo,Bo,jc,gd)>n)return;jc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(jc);if(!(c<t.near||c>t.far))return{distance:c,point:gd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var jr=class extends hn{constructor(t=[],e=Ki,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ai=class extends hn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var oi=class extends hn{constructor(t,e,n=Yn,s,r,a,o=Le,l=Le,c,h=ii,u=1){if(h!==ii&&h!==hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new tr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ko=class extends oi{constructor(t,e=Yn,n=Ki,s,r,a=Le,o=Le,l,c=ii){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Qr=class extends hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},pe=class i extends Me{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(u,2));function p(y,m,g,T,w,v,M,x,E,_,b){let A=v/E,C=M/_,D=v/2,O=M/2,L=x/2,F=E+1,z=_+1,V=0,Q=0,q=new N;for(let nt=0;nt<z;nt++){let et=nt*C-O;for(let Et=0;Et<F;Et++){let At=Et*A-D;q[y]=At*T,q[m]=et*w,q[g]=L,c.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[g]=x>0?1:-1,h.push(q.x,q.y,q.z),u.push(Et/E),u.push(1-nt/_),V+=1}}for(let nt=0;nt<_;nt++)for(let et=0;et<E;et++){let Et=d+et+F*nt,At=d+et+F*(nt+1),se=d+(et+1)+F*(nt+1),Yt=d+(et+1)+F*nt;l.push(Et,At,Yt),l.push(At,se,Yt),Q+=6}o.addGroup(f,Q,b),f+=Q,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ta=class i extends Me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new N,h=new ot;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(o,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Pe=class i extends Me{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,y=[],m=n/2,g=0;T(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ee(u,3)),this.setAttribute("normal",new ee(d,3)),this.setAttribute("uv",new ee(f,2));function T(){let v=new N,M=new N,x=0,E=(e-t)/n;for(let _=0;_<=r;_++){let b=[],A=_/r,C=A*(e-t)+t;for(let D=0;D<=s;D++){let O=D/s,L=O*l+o,F=Math.sin(L),z=Math.cos(L);M.x=C*F,M.y=-A*n+m,M.z=C*z,u.push(M.x,M.y,M.z),v.set(F,E,z).normalize(),d.push(v.x,v.y,v.z),f.push(O,1-A),b.push(p++)}y.push(b)}for(let _=0;_<s;_++)for(let b=0;b<r;b++){let A=y[b][_],C=y[b+1][_],D=y[b+1][_+1],O=y[b][_+1];(t>0||b!==0)&&(h.push(A,C,O),x+=3),(e>0||b!==r-1)&&(h.push(C,D,O),x+=3)}c.addGroup(g,x,0),g+=x}function w(v){let M=p,x=new ot,E=new N,_=0,b=v===!0?t:e,A=v===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*A,0),d.push(0,A,0),f.push(.5,.5),p++;let C=p;for(let D=0;D<=s;D++){let L=D/s*l+o,F=Math.cos(L),z=Math.sin(L);E.x=b*z,E.y=m*A,E.z=b*F,u.push(E.x,E.y,E.z),d.push(0,A,0),x.x=F*.5+.5,x.y=z*.5*A+.5,f.push(x.x,x.y),p++}for(let D=0;D<s;D++){let O=M+D,L=C+D;v===!0?h.push(L,L+1,O):h.push(L+1,L,O),_+=3}c.addGroup(g,_,v===!0?1:2),g+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ot:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new N,s=[],r=[],a=[],o=new N,l=new ce;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new N)}r[0]=new N,a[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(ae(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ae(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ar=class extends Rn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ot){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},zo=class extends ar{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function zh(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var xd=new N,_d=new N,Qc=new zh,th=new zh,eh=new zh,On=class extends Rn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(_d.subVectors(s[0],s[1]).add(s[0]),c=_d);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(xd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=xd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),p<1e-4&&(p=y),m<1e-4&&(m=y),Qc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,y,m),th.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,y,m),eh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,y,m)}else this.curveType==="catmullrom"&&(Qc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),th.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),eh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Qc.calc(l),th.calc(l),eh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function vd(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function vm(i,t){let e=1-i;return e*e*t}function ym(i,t){return 2*(1-i)*i*t}function Mm(i,t){return i*i*t}function kr(i,t,e,n){return vm(i,t)+ym(i,e)+Mm(i,n)}function Sm(i,t){let e=1-i;return e*e*e*t}function bm(i,t){let e=1-i;return 3*e*e*i*t}function Tm(i,t){return 3*(1-i)*i*i*t}function Em(i,t){return i*i*i*t}function zr(i,t,e,n,s){return Sm(i,t)+bm(i,e)+Tm(i,n)+Em(i,s)}var ea=class extends Rn{constructor(t=new ot,e=new ot,n=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zr(t,s.x,r.x,a.x,o.x),zr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ho=class extends Rn{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zr(t,s.x,r.x,a.x,o.x),zr(t,s.y,r.y,a.y,o.y),zr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},na=class extends Rn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Go=class extends Rn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ia=class extends Rn{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(kr(t,s.x,r.x,a.x),kr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sa=class extends Rn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(kr(t,s.x,r.x,a.x),kr(t,s.y,r.y,a.y),kr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ra=class extends Rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(vd(o,l.x,c.x,h.x,u.x),vd(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ot().fromArray(s))}return this}},Vo=Object.freeze({__proto__:null,ArcCurve:zo,CatmullRomCurve3:On,CubicBezierCurve:ea,CubicBezierCurve3:Ho,EllipseCurve:ar,LineCurve:na,LineCurve3:Go,QuadraticBezierCurve:ia,QuadraticBezierCurve3:sa,SplineCurve:ra}),Wo=class extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Vo[s.type]().fromJSON(s))}return this}},li=class extends Wo{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new na(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ia(this.currentPoint.clone(),new ot(t,e),new ot(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new ea(this.currentPoint.clone(),new ot(t,e),new ot(n,s),new ot(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ra(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new ar(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},dn=class extends li{constructor(t){super(t),this.uuid=gr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new li().fromJSON(s))}return this}};function wm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=ff(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Im(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,u=l;for(let d=e;d<s;d+=e){let f=i[d],p=i[d+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return aa(r,a,e,o,l,c,0),a}function ff(i,t,e,n,s){let r;if(s===Gm(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=yd(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=yd(a/n|0,i[a],i[a+1],r);return r&&or(r,r.next)&&(la(r),r=r.next),r}function fs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(or(e,e.next)||Ue(e.prev,e,e.next)===0)){if(la(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function aa(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Fm(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Rm(i,n,s,r):Am(i)){t.push(l.i,i.i,c.i),la(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Cm(fs(i),t),aa(i,t,e,n,s,r,2)):a===2&&Pm(i,t,e,n,s,r):aa(fs(i),t,e,n,s,r,1);break}}}function Am(i){let t=i.prev,e=i,n=i.next;if(Ue(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Br(s,o,r,l,a,c,p.x,p.y)&&Ue(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Rm(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ue(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),p=Math.min(h,u,d),y=Math.max(o,l,c),m=Math.max(h,u,d),g=lh(f,p,t,e,n),T=lh(y,m,t,e,n),w=i.prevZ,v=i.nextZ;for(;w&&w.z>=g&&v&&v.z<=T;){if(w.x>=f&&w.x<=y&&w.y>=p&&w.y<=m&&w!==s&&w!==a&&Br(o,h,l,u,c,d,w.x,w.y)&&Ue(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=f&&v.x<=y&&v.y>=p&&v.y<=m&&v!==s&&v!==a&&Br(o,h,l,u,c,d,v.x,v.y)&&Ue(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=g;){if(w.x>=f&&w.x<=y&&w.y>=p&&w.y<=m&&w!==s&&w!==a&&Br(o,h,l,u,c,d,w.x,w.y)&&Ue(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=T;){if(v.x>=f&&v.x<=y&&v.y>=p&&v.y<=m&&v!==s&&v!==a&&Br(o,h,l,u,c,d,v.x,v.y)&&Ue(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Cm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!or(n,s)&&mf(n,e,e.next,s)&&oa(n,s)&&oa(s,n)&&(t.push(n.i,e.i,s.i),la(e),la(e.next),e=i=s),e=e.next}while(e!==i);return fs(e)}function Pm(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&km(a,o)){let l=gf(a,o);a=fs(a,a.next),l=fs(l,l.next),aa(a,t,e,n,s,r,0),aa(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Im(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=ff(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Bm(c))}s.sort(Lm);for(let r=0;r<s.length;r++)e=Dm(s[r],e);return e}function Lm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Dm(i,t){let e=Um(i,t);if(!e)return t;let n=gf(e,i);return fs(n,n.next),fs(e,e.next)}function Um(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(or(i,e))return e;do{if(or(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&pf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);oa(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Nm(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Nm(i,t){return Ue(i.prev,i,t.prev)<0&&Ue(t.next,i,i.next)<0}function Fm(i,t,e,n){let s=i;do s.z===0&&(s.z=lh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Om(s)}function Om(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function lh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Bm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function pf(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Br(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&pf(i,t,e,n,s,r,a,o)}function km(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!zm(i,t)&&(oa(i,t)&&oa(t,i)&&Hm(i,t)&&(Ue(i.prev,i,t.prev)||Ue(i,t.prev,t))||or(i,t)&&Ue(i.prev,i,i.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function or(i,t){return i.x===t.x&&i.y===t.y}function mf(i,t,e,n){let s=yo(Ue(i,t,e)),r=yo(Ue(i,t,n)),a=yo(Ue(e,n,i)),o=yo(Ue(e,n,t));return!!(s!==r&&a!==o||s===0&&vo(i,e,t)||r===0&&vo(i,n,t)||a===0&&vo(e,i,n)||o===0&&vo(e,t,n))}function vo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function yo(i){return i>0?1:i<0?-1:0}function zm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&mf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function oa(i,t){return Ue(i.prev,i,i.next)<0?Ue(i,t,i.next)>=0&&Ue(i,i.prev,t)>=0:Ue(i,t,i.prev)<0||Ue(i,i.next,t)<0}function Hm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function gf(i,t){let e=ch(i.i,i.x,i.y),n=ch(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function yd(i,t,e,n){let s=ch(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function la(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ch(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gm(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var hh=class{static triangulate(t,e,n=2){return wm(t,e,n)}},ni=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Md(t),Sd(n,t);let a=t.length;e.forEach(Md);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Sd(n,e[l]);let o=hh.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Md(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Sd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ci=class i extends Me{constructor(t=new dn([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ee(s,3)),this.setAttribute("uv",new ee(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:Vm,w,v=!1,M,x,E,_;if(g){w=g.getSpacedPoints(h),v=!0,d=!1;let it=g.isCatmullRomCurve3?g.closed:!1;M=g.computeFrenetFrames(h,it),x=new N,E=new N,_=new N}d||(m=0,f=0,p=0,y=0);let b=o.extractPoints(c),A=b.shape,C=b.holes;if(!ni.isClockWise(A)){A=A.reverse();for(let it=0,ct=C.length;it<ct;it++){let ut=C[it];ni.isClockWise(ut)&&(C[it]=ut.reverse())}}function O(it){let ut=10000000000000001e-36,mt=it[0];for(let yt=1;yt<=it.length;yt++){let Vt=yt%it.length,kt=it[Vt],Xt=kt.x-mt.x,$t=kt.y-mt.y,B=Xt*Xt+$t*$t,ue=Math.max(Math.abs(kt.x),Math.abs(kt.y),Math.abs(mt.x),Math.abs(mt.y)),Qt=ut*ue*ue;if(B<=Qt){it.splice(Vt,1),yt--;continue}mt=kt}}O(A),C.forEach(O);let L=C.length,F=A;for(let it=0;it<L;it++){let ct=C[it];A=A.concat(ct)}function z(it,ct,ut){return ct||Kt("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(ct,ut)}let V=A.length;function Q(it,ct,ut){let mt,yt,Vt,kt=it.x-ct.x,Xt=it.y-ct.y,$t=ut.x-it.x,B=ut.y-it.y,ue=kt*kt+Xt*Xt,Qt=kt*B-Xt*$t;if(Math.abs(Qt)>Number.EPSILON){let I=Math.sqrt(ue),S=Math.sqrt($t*$t+B*B),H=ct.x-Xt/I,W=ct.y+kt/I,K=ut.x-B/S,gt=ut.y+$t/S,Mt=((K-H)*B-(gt-W)*$t)/(kt*B-Xt*$t);mt=H+kt*Mt-it.x,yt=W+Xt*Mt-it.y;let tt=mt*mt+yt*yt;if(tt<=2)return new ot(mt,yt);Vt=Math.sqrt(tt/2)}else{let I=!1;kt>Number.EPSILON?$t>Number.EPSILON&&(I=!0):kt<-Number.EPSILON?$t<-Number.EPSILON&&(I=!0):Math.sign(Xt)===Math.sign(B)&&(I=!0),I?(mt=-Xt,yt=kt,Vt=Math.sqrt(ue)):(mt=kt,yt=Xt,Vt=Math.sqrt(ue/2))}return new ot(mt/Vt,yt/Vt)}let q=[];for(let it=0,ct=F.length,ut=ct-1,mt=it+1;it<ct;it++,ut++,mt++)ut===ct&&(ut=0),mt===ct&&(mt=0),q[it]=Q(F[it],F[ut],F[mt]);let nt=[],et,Et=q.concat();for(let it=0,ct=L;it<ct;it++){let ut=C[it];et=[];for(let mt=0,yt=ut.length,Vt=yt-1,kt=mt+1;mt<yt;mt++,Vt++,kt++)Vt===yt&&(Vt=0),kt===yt&&(kt=0),et[mt]=Q(ut[mt],ut[Vt],ut[kt]);nt.push(et),Et=Et.concat(et)}let At;if(m===0)At=ni.triangulateShape(F,C);else{let it=[],ct=[];for(let ut=0;ut<m;ut++){let mt=ut/m,yt=f*Math.cos(mt*Math.PI/2),Vt=p*Math.sin(mt*Math.PI/2)+y;for(let kt=0,Xt=F.length;kt<Xt;kt++){let $t=z(F[kt],q[kt],Vt);xt($t.x,$t.y,-yt),mt===0&&it.push($t)}for(let kt=0,Xt=L;kt<Xt;kt++){let $t=C[kt];et=nt[kt];let B=[];for(let ue=0,Qt=$t.length;ue<Qt;ue++){let I=z($t[ue],et[ue],Vt);xt(I.x,I.y,-yt),mt===0&&B.push(I)}mt===0&&ct.push(B)}}At=ni.triangulateShape(it,ct)}let se=At.length,Yt=p+y;for(let it=0;it<V;it++){let ct=d?z(A[it],Et[it],Yt):A[it];v?(E.copy(M.normals[0]).multiplyScalar(ct.x),x.copy(M.binormals[0]).multiplyScalar(ct.y),_.copy(w[0]).add(E).add(x),xt(_.x,_.y,_.z)):xt(ct.x,ct.y,0)}for(let it=1;it<=h;it++)for(let ct=0;ct<V;ct++){let ut=d?z(A[ct],Et[ct],Yt):A[ct];v?(E.copy(M.normals[it]).multiplyScalar(ut.x),x.copy(M.binormals[it]).multiplyScalar(ut.y),_.copy(w[it]).add(E).add(x),xt(_.x,_.y,_.z)):xt(ut.x,ut.y,u/h*it)}for(let it=m-1;it>=0;it--){let ct=it/m,ut=f*Math.cos(ct*Math.PI/2),mt=p*Math.sin(ct*Math.PI/2)+y;for(let yt=0,Vt=F.length;yt<Vt;yt++){let kt=z(F[yt],q[yt],mt);xt(kt.x,kt.y,u+ut)}for(let yt=0,Vt=C.length;yt<Vt;yt++){let kt=C[yt];et=nt[yt];for(let Xt=0,$t=kt.length;Xt<$t;Xt++){let B=z(kt[Xt],et[Xt],mt);v?xt(B.x,B.y+w[h-1].y,w[h-1].x+ut):xt(B.x,B.y,u+ut)}}}at(),G();function at(){let it=s.length/3;if(d){let ct=0,ut=V*ct;for(let mt=0;mt<se;mt++){let yt=At[mt];It(yt[2]+ut,yt[1]+ut,yt[0]+ut)}ct=h+m*2,ut=V*ct;for(let mt=0;mt<se;mt++){let yt=At[mt];It(yt[0]+ut,yt[1]+ut,yt[2]+ut)}}else{for(let ct=0;ct<se;ct++){let ut=At[ct];It(ut[2],ut[1],ut[0])}for(let ct=0;ct<se;ct++){let ut=At[ct];It(ut[0]+V*h,ut[1]+V*h,ut[2]+V*h)}}n.addGroup(it,s.length/3-it,0)}function G(){let it=s.length/3,ct=0;j(F,ct),ct+=F.length;for(let ut=0,mt=C.length;ut<mt;ut++){let yt=C[ut];j(yt,ct),ct+=yt.length}n.addGroup(it,s.length/3-it,1)}function j(it,ct){let ut=it.length;for(;--ut>=0;){let mt=ut,yt=ut-1;yt<0&&(yt=it.length-1);for(let Vt=0,kt=h+m*2;Vt<kt;Vt++){let Xt=V*Vt,$t=V*(Vt+1),B=ct+mt+Xt,ue=ct+yt+Xt,Qt=ct+yt+$t,I=ct+mt+$t;Tt(B,ue,Qt,I)}}}function xt(it,ct,ut){l.push(it),l.push(ct),l.push(ut)}function It(it,ct,ut){Gt(it),Gt(ct),Gt(ut);let mt=s.length/3,yt=T.generateTopUV(n,s,mt-3,mt-2,mt-1);ne(yt[0]),ne(yt[1]),ne(yt[2])}function Tt(it,ct,ut,mt){Gt(it),Gt(ct),Gt(mt),Gt(ct),Gt(ut),Gt(mt);let yt=s.length/3,Vt=T.generateSideWallUV(n,s,yt-6,yt-3,yt-2,yt-1);ne(Vt[0]),ne(Vt[1]),ne(Vt[3]),ne(Vt[1]),ne(Vt[2]),ne(Vt[3])}function Gt(it){s.push(l[it*3+0]),s.push(l[it*3+1]),s.push(l[it*3+2])}function ne(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Wm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Vo[s.type]().fromJSON(s)),new i(n,t.options)}},Vm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ot(r,a),new ot(o,l),new ot(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],p=t[s*3+2],y=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ot(a,1-l),new ot(c,1-u),new ot(d,1-p),new ot(y,1-g)]:[new ot(o,1-l),new ot(h,1-u),new ot(f,1-p),new ot(m,1-g)]}};function Wm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ca=class i extends Me{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ae(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new N,d=new ot,f=new N,p=new N,y=new N,m=0,g=0;for(let T=0;T<=t.length-1;T++)switch(T){case 0:m=t[T+1].x-t[T].x,g=t[T+1].y-t[T].y,f.x=g*1,f.y=-m,f.z=g*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[T+1].x-t[T].x,g=t[T+1].y-t[T].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(p)}for(let T=0;T<=e;T++){let w=n+T*h*s,v=Math.sin(w),M=Math.cos(w);for(let x=0;x<=t.length-1;x++){u.x=t[x].x*v,u.y=t[x].y,u.z=t[x].x*M,a.push(u.x,u.y,u.z),d.x=T/e,d.y=x/(t.length-1),o.push(d.x,d.y);let E=l[3*x+0]*v,_=l[3*x+1],b=l[3*x+0]*M;c.push(E,_,b)}}for(let T=0;T<e;T++)for(let w=0;w<t.length-1;w++){let v=w+T*t.length,M=v,x=v+t.length,E=v+t.length+1,_=v+1;r.push(M,x,_),r.push(E,_,x)}this.setIndex(r),this.setAttribute("position",new ee(a,3)),this.setAttribute("uv",new ee(o,2)),this.setAttribute("normal",new ee(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var en=class i extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],p=[],y=[],m=[];for(let g=0;g<h;g++){let T=g*d-a;for(let w=0;w<c;w++){let v=w*u-r;p.push(v,-T,0),y.push(0,0,1),m.push(w/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let T=0;T<o;T++){let w=T+c*g,v=T+c*(g+1),M=T+1+c*(g+1),x=T+1+c*g;f.push(w,v,x),f.push(v,M,x)}this.setIndex(f),this.setAttribute("position",new ee(p,3)),this.setAttribute("normal",new ee(y,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ps=class i extends Me{constructor(t=new dn([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ee(s,3)),this.setAttribute("normal",new ee(r,3)),this.setAttribute("uv",new ee(a,2));function c(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,p=d.holes;ni.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let T=p[m];ni.isClockWise(T)===!0&&(p[m]=T.reverse())}let y=ni.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let T=p[m];f=f.concat(T)}for(let m=0,g=f.length;m<g;m++){let T=f[m];s.push(T.x,T.y,0),r.push(0,0,1),a.push(T.x,T.y)}for(let m=0,g=y.length;m<g;m++){let T=y[m],w=T[0]+u,v=T[1]+u,M=T[2]+u;n.push(w,v,M),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Xm(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function Xm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var ha=class i extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new N,d=new N,f=[],p=[],y=[],m=[];for(let g=0;g<=n;g++){let T=[],w=g/n,v=a+w*o,M=t*Math.cos(v),x=Math.sqrt(t*t-M*M),E=0;g===0&&a===0?E=.5/e:g===n&&l===Math.PI&&(E=-.5/e);for(let _=0;_<=e;_++){let b=_/e,A=s+b*r;u.x=-x*Math.cos(A),u.y=M,u.z=x*Math.sin(A),p.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(b+E,1-w),T.push(c++)}h.push(T)}for(let g=0;g<n;g++)for(let T=0;T<e;T++){let w=h[g][T+1],v=h[g][T],M=h[g+1][T],x=h[g+1][T+1];(g!==0||a>0)&&f.push(w,v,x),(g!==n-1||l<Math.PI)&&f.push(v,M,x)}this.setIndex(f),this.setAttribute("position",new ee(p,3)),this.setAttribute("normal",new ee(y,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var lr=class i extends Me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new N,f=new N,p=new N;for(let y=0;y<=n;y++){let m=a+y/n*o;for(let g=0;g<=s;g++){let T=g/s*r;f.x=(t+e*Math.cos(m))*Math.cos(T),f.y=(t+e*Math.cos(m))*Math.sin(T),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),d.x=t*Math.cos(T),d.y=t*Math.sin(T),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(g/s),u.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let g=(s+1)*y+m-1,T=(s+1)*(y-1)+m-1,w=(s+1)*(y-1)+m,v=(s+1)*y+m;l.push(g,T,v),l.push(T,w,v)}this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Ri=class i extends Me{constructor(t=new sa(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new N,l=new N,c=new ot,h=new N,u=[],d=[],f=[],p=[];y(),this.setIndex(p),this.setAttribute("position",new ee(u,3)),this.setAttribute("normal",new ee(d,3)),this.setAttribute("uv",new ee(f,2));function y(){for(let w=0;w<e;w++)m(w);m(r===!1?e:0),T(),g()}function m(w){h=t.getPointAt(w/e,h);let v=a.normals[w],M=a.binormals[w];for(let x=0;x<=s;x++){let E=x/s*Math.PI*2,_=Math.sin(E),b=-Math.cos(E);l.x=b*v.x+_*M.x,l.y=b*v.y+_*M.y,l.z=b*v.z+_*M.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function g(){for(let w=1;w<=e;w++)for(let v=1;v<=s;v++){let M=(s+1)*(w-1)+(v-1),x=(s+1)*w+(v-1),E=(s+1)*w+v,_=(s+1)*(w-1)+v;p.push(M,x,_),p.push(x,E,_)}}function T(){for(let w=0;w<=e;w++)for(let v=0;v<=s;v++)c.x=w/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Vo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function vs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(bd(s))s.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(bd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function on(i){let t={};for(let e=0;e<i.length;e++){let n=vs(i[e]);for(let s in n)t[s]=n[s]}return t}function bd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function qm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var mn={clone:vs,merge:on},Ym=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Se=class extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ym,this.fragmentShader=Zm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vs(t.uniforms),this.uniformsGroups=qm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ht().setHex(s.value);break;case"v2":this.uniforms[n].value=new ot().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new De().fromArray(s.value);break;case"m3":this.uniforms[n].value=new jt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ce().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Xo=class extends Se{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ge=class extends ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ca,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},je=class extends ge{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ae(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var ua=class extends ai{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ca,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};var cr=class extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qo=class extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var da=class extends Jr{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function Ys(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function nh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var qi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Yo=class extends qi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rh,endingEnd:rh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ah:r=t,o=2*e-n;break;case oh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ah:a=t,l=2*n-e;break;case oh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),y=p*p,m=y*p,g=-d*m+2*d*y-d*p,T=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*p+1,w=(-1-f)*m+(1.5+f)*y+.5*p,v=f*m-f*y;for(let M=0;M!==o;++M)r[M]=g*a[h+M]+T*a[c+M]+w*a[l+M]+v*a[u+M];return r}},Zo=class extends qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},$o=class extends qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Jo=class extends qi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(s-e),y=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*p;return r}let d=o*2,f=t-1;for(let p=0;p!==o;++p){let y=a[c+p],m=a[l+p],g=f*d+p*2,T=u[g],w=u[g+1],v=t*d+p*2,M=h[v],x=h[v+1],E=Jm(n,e,T,M,s);r[p]=xf(E,y,w,x,m)}return r}};function xf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function $m(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Jm(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=xf(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=$m(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ys(e,this.TimeBufferType),this.values=Ys(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ys(t.times,Array),values:Ys(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),nh(t.settings)&&(n.settings={inTangents:Ys(t.settings.inTangents,Array),outTangents:Ys(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new $o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Zo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Jo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Hr:e=this.InterpolantFactoryMethodDiscrete;break;case Do:e=this.InterpolantFactoryMethodLinear;break;case bo:e=this.InterpolantFactoryMethodSmooth;break;case sh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hr;case this.InterpolantFactoryMethodLinear:return Do;case this.InterpolantFactoryMethodSmooth:return bo;case this.InterpolantFactoryMethodBezier:return sh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;nh(this.settings)&&(Td(this.settings.inTangents,t),Td(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Kt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Kt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Kt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Qp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Kt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===bo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let y=e[u+p];if(y!==e[d+p]||y!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,nh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Td(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Do;var Yi=class extends Cn{constructor(t,e,n){super(t,e,n)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Hr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ko=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};Ko.prototype.ValueTypeName="color";var jo=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};jo.prototype.ValueTypeName="number";var Qo=class extends qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)ri.slerpFlat(r,0,a,c-o,a,c,l);return r}},fa=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Qo(this.times,this.values,this.getValueSize(),t)}};fa.prototype.ValueTypeName="quaternion";fa.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends Cn{constructor(t,e,n){super(t,e,n)}};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Hr;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var tl=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};tl.prototype.ValueTypeName="vector";var el=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_f=new el,nl=class{constructor(t){this.manager=t!==void 0?t:_f,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};nl.DEFAULT_MATERIAL_NAME="__DEFAULT";var hr=class extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var ih=new ce,Ed=new N,wd=new N,ur=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Qe,this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rr,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ed.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ed),wd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ih.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ih,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===js||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(ih)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Mo=new N,So=new ri,ti=new N,pa=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Mo,So,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mo,So,ti.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Mo,So,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mo,So,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vi=new N,Ad=new ot,Rd=new ot,Ke=class extends pa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ic*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(Ic*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z)}getViewSize(t,e){return this.getViewBounds(t,Ad,Rd),e.subVectors(Rd,Ad)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ic*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},uh=class extends ur{constructor(){super(new Ke(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Xr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},dr=class extends hr{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new uh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},dh=class extends ur{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0}},ma=class extends hr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new dh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},$i=class extends pa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},fh=class extends ur{constructor(){super(new $i(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ga=class extends hr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new fh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Zs=-90,$s=1,il=class extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ke(Zs,$s,t,e);s.layers=this.layers,this.add(s);let r=new Ke(Zs,$s,t,e);r.layers=this.layers,this.add(r);let a=new Ke(Zs,$s,t,e);a.layers=this.layers,this.add(a);let o=new Ke(Zs,$s,t,e);o.layers=this.layers,this.add(o);let l=new Ke(Zs,$s,t,e);l.layers=this.layers,this.add(l);let c=new Ke(Zs,$s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},sl=class extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Gh="\\[\\]\\.:\\/",Km=new RegExp("["+Gh+"]","g"),Vh="[^"+Gh+"]",jm="[^"+Gh.replace("\\.","")+"]",Qm=/((?:WC+[\/:])*)/.source.replace("WC",Vh),t0=/(WCOD+)?/.source.replace("WCOD",jm),e0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vh),n0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vh),i0=new RegExp("^"+Qm+t0+e0+n0+"$"),s0=["material","materials","bones","map"],ph=class{constructor(t,e,n){let s=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Km,"")}static parseTrackName(t){let e=i0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);s0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Kt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=ph;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yy=new Float32Array(1);var Cd=new ce,xa=class{constructor(t,e,n=0,s=1/0){this.ray=new sr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Kt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Cd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cd),this}intersectObject(t,e=!0,n=[]){return mh(t,this,n,e),n.sort(Pd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)mh(t[s],this,n,e);return n.sort(Pd),n}};function Pd(i,t){return i.distance-t.distance}function mh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)mh(r[a],t,e,!0)}}var $h=class $h{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};$h.prototype.isMatrix2=!0;var gh=$h;function Wh(i,t,e,n){let s=r0(n);switch(e){case Uh:return i*t;case Fh:return i*t/s.components*s.byteLength;case fl:return i*t/s.components*s.byteLength;case ts:return i*t*2/s.components*s.byteLength;case pl:return i*t*2/s.components*s.byteLength;case Nh:return i*t*3/s.components*s.byteLength;case Mn:return i*t*4/s.components*s.byteLength;case ml:return i*t*4/s.components*s.byteLength;case ba:case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ea:case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xl:case vl:return Math.max(i,16)*Math.max(t,8)/4;case gl:case _l:return Math.max(i,8)*Math.max(t,8)/2;case yl:case Ml:case bl:case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sl:case Aa:case El:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Il:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Bl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case kl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zl:case Hl:case Gl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vl:case Wl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ra:case Xl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function r0(i){switch(i){case Qe:case Ph:return{byteLength:1,components:1};case mr:case Ih:case Oe:return{byteLength:2,components:1};case ul:case dl:return{byteLength:2,components:4};case Yn:case hl:case Zn:return{byteLength:4,components:1};case Lh:case Dh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function zf(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function f0(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],y=u[f];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let y=u[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var p0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,m0=`#ifdef USE_ALPHAHASH
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
#endif`,g0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y0=`#ifdef USE_AOMAP
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
#endif`,M0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S0=`#ifdef USE_BATCHING
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
#endif`,b0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,T0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,A0=`#ifdef USE_IRIDESCENCE
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
#endif`,R0=`#ifdef USE_BUMPMAP
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
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,U0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,N0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,F0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,O0=`#define PI 3.141592653589793
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
} // validated`,B0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,k0=`vec3 transformedNormal = objectNormal;
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
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W0="gl_FragColor = linearToOutputTexel( gl_FragColor );",X0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,q0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Z0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,K0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eg=`#ifdef USE_GRADIENTMAP
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
}`,ng=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ig=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ag=`#ifdef USE_ENVMAP
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
#endif`,og=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ug=`PhysicalMaterial material;
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
#endif`,dg=`uniform sampler2D dfgLUT;
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
}`,fg=`
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
#endif`,pg=`#if defined( RE_IndirectDiffuse )
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
#endif`,mg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,xg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_g=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tg=`#if defined( USE_POINTS_UV )
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
#endif`,Eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ag=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pg=`#ifdef USE_MORPHTARGETS
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
#endif`,Ig=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Og=`#ifdef USE_NORMALMAP
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
#endif`,Bg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$g=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qg=`float getShadowMask() {
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
}`,tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ex=`#ifdef USE_SKINNING
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
#endif`,nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ix=`#ifdef USE_SKINNING
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
#endif`,sx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ox=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lx=`#ifdef USE_TRANSMISSION
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
#endif`,cx=`#ifdef USE_TRANSMISSION
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
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,px=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mx=`uniform sampler2D t2D;
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
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`#include <common>
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
}`,Mx=`#if DEPTH_PACKING == 3200
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
}`,Sx=`#define DISTANCE
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
}`,bx=`#define DISTANCE
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
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ex=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`uniform float scale;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,Rx=`#include <common>
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
}`,Cx=`uniform vec3 diffuse;
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
}`,Px=`#define LAMBERT
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
}`,Ix=`#define LAMBERT
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
}`,Lx=`#define MATCAP
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
}`,Dx=`#define MATCAP
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
}`,Ux=`#define NORMAL
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
}`,Nx=`#define NORMAL
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
}`,Fx=`#define PHONG
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
}`,Ox=`#define PHONG
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
}`,Bx=`#define STANDARD
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
}`,kx=`#define STANDARD
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
}`,zx=`#define TOON
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
}`,Hx=`#define TOON
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
}`,Gx=`uniform float size;
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
}`,Vx=`uniform vec3 diffuse;
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
}`,Wx=`#include <common>
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
}`,Xx=`uniform vec3 color;
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
}`,qx=`uniform float rotation;
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
}`,Yx=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:p0,alphahash_pars_fragment:m0,alphamap_fragment:g0,alphamap_pars_fragment:x0,alphatest_fragment:_0,alphatest_pars_fragment:v0,aomap_fragment:y0,aomap_pars_fragment:M0,batching_pars_vertex:S0,batching_vertex:b0,begin_vertex:T0,beginnormal_vertex:E0,bsdfs:w0,iridescence_fragment:A0,bumpmap_pars_fragment:R0,clipping_planes_fragment:C0,clipping_planes_pars_fragment:P0,clipping_planes_pars_vertex:I0,clipping_planes_vertex:L0,color_fragment:D0,color_pars_fragment:U0,color_pars_vertex:N0,color_vertex:F0,common:O0,cube_uv_reflection_fragment:B0,defaultnormal_vertex:k0,displacementmap_pars_vertex:z0,displacementmap_vertex:H0,emissivemap_fragment:G0,emissivemap_pars_fragment:V0,colorspace_fragment:W0,colorspace_pars_fragment:X0,envmap_fragment:q0,envmap_common_pars_fragment:Y0,envmap_pars_fragment:Z0,envmap_pars_vertex:$0,envmap_physical_pars_fragment:ag,envmap_vertex:J0,fog_vertex:K0,fog_pars_vertex:j0,fog_fragment:Q0,fog_pars_fragment:tg,gradientmap_pars_fragment:eg,lightmap_pars_fragment:ng,lights_lambert_fragment:ig,lights_lambert_pars_fragment:sg,lights_pars_begin:rg,lights_toon_fragment:og,lights_toon_pars_fragment:lg,lights_phong_fragment:cg,lights_phong_pars_fragment:hg,lights_physical_fragment:ug,lights_physical_pars_fragment:dg,lights_fragment_begin:fg,lights_fragment_maps:pg,lights_fragment_end:mg,lightprobes_pars_fragment:gg,logdepthbuf_fragment:xg,logdepthbuf_pars_fragment:_g,logdepthbuf_pars_vertex:vg,logdepthbuf_vertex:yg,map_fragment:Mg,map_pars_fragment:Sg,map_particle_fragment:bg,map_particle_pars_fragment:Tg,metalnessmap_fragment:Eg,metalnessmap_pars_fragment:wg,morphinstance_vertex:Ag,morphcolor_vertex:Rg,morphnormal_vertex:Cg,morphtarget_pars_vertex:Pg,morphtarget_vertex:Ig,normal_fragment_begin:Lg,normal_fragment_maps:Dg,normal_pars_fragment:Ug,normal_pars_vertex:Ng,normal_vertex:Fg,normalmap_pars_fragment:Og,clearcoat_normal_fragment_begin:Bg,clearcoat_normal_fragment_maps:kg,clearcoat_pars_fragment:zg,iridescence_pars_fragment:Hg,opaque_fragment:Gg,packing:Vg,premultiplied_alpha_fragment:Wg,project_vertex:Xg,dithering_fragment:qg,dithering_pars_fragment:Yg,roughnessmap_fragment:Zg,roughnessmap_pars_fragment:$g,shadowmap_pars_fragment:Jg,shadowmap_pars_vertex:Kg,shadowmap_vertex:jg,shadowmask_pars_fragment:Qg,skinbase_vertex:tx,skinning_pars_vertex:ex,skinning_vertex:nx,skinnormal_vertex:ix,specularmap_fragment:sx,specularmap_pars_fragment:rx,tonemapping_fragment:ax,tonemapping_pars_fragment:ox,transmission_fragment:lx,transmission_pars_fragment:cx,uv_pars_fragment:hx,uv_pars_vertex:ux,uv_vertex:dx,worldpos_vertex:fx,background_vert:px,background_frag:mx,backgroundCube_vert:gx,backgroundCube_frag:xx,cube_vert:_x,cube_frag:vx,depth_vert:yx,depth_frag:Mx,distance_vert:Sx,distance_frag:bx,equirect_vert:Tx,equirect_frag:Ex,linedashed_vert:wx,linedashed_frag:Ax,meshbasic_vert:Rx,meshbasic_frag:Cx,meshlambert_vert:Px,meshlambert_frag:Ix,meshmatcap_vert:Lx,meshmatcap_frag:Dx,meshnormal_vert:Ux,meshnormal_frag:Nx,meshphong_vert:Fx,meshphong_frag:Ox,meshphysical_vert:Bx,meshphysical_frag:kx,meshtoon_vert:zx,meshtoon_frag:Hx,points_vert:Gx,points_frag:Vx,shadow_vert:Wx,shadow_frag:Xx,sprite_vert:qx,sprite_frag:Yx},Rt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},di={basic:{uniforms:on([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:on([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:on([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:on([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:on([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:on([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:on([Rt.points,Rt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:on([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:on([Rt.common,Rt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:on([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:on([Rt.sprite,Rt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:on([Rt.common,Rt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:on([Rt.lights,Rt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};di.physical={uniforms:on([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var Zl={r:0,b:0,g:0},Zx=new ce,Hf=new jt;Hf.set(-1,0,0,0,1,0,0,0,1);function $x(i,t,e,n,s,r){let a=new Ht(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(T){let w=T.isScene===!0?T.background:null;if(w&&w.isTexture){let v=T.backgroundBlurriness>0;w=t.get(w,v)}return w}function p(T){let w=!1,v=f(T);v===null?m(a,o):v&&v.isColor&&(m(v,1),w=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(T,w){let v=f(w);v&&(v.isCubeTexture||v.mapping===Ma)?(c===void 0&&(c=new _e(new pe(1,1,1),new Se({name:"BackgroundCubeMaterial",uniforms:vs(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,x,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Zx.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hf),c.material.toneMapped=de.getTransfer(v.colorSpace)!==ye,(h!==v||u!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new _e(new en(2,2),new Se({name:"BackgroundMaterial",uniforms:vs(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=de.getTransfer(v.colorSpace)!==ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,w){T.getRGB(Zl,Hh(i)),e.buffers.color.setClear(Zl.r,Zl.g,Zl.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,w=1){a.set(T),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:p,addToRenderList:y,dispose:g}}function Jx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(C,D,O,L,F){let z=!1,V=u(C,L,O,D);r!==V&&(r=V,c(r.object)),z=f(C,L,O,F),z&&p(C,L,O,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,v(C,D,O,L),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function u(C,D,O,L){let F=L.wireframe===!0,z=n[D.id];z===void 0&&(z={},n[D.id]=z);let V=C.isInstancedMesh===!0?C.id:0,Q=z[V];Q===void 0&&(Q={},z[V]=Q);let q=Q[O.id];q===void 0&&(q={},Q[O.id]=q);let nt=q[F];return nt===void 0&&(nt=d(l()),q[F]=nt),nt}function d(C){let D=[],O=[],L=[];for(let F=0;F<e;F++)D[F]=0,O[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:L,object:C,attributes:{},index:null}}function f(C,D,O,L){let F=r.attributes,z=D.attributes,V=0,Q=O.getAttributes();for(let q in Q)if(Q[q].location>=0){let et=F[q],Et=z[q];if(Et===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(Et=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(Et=C.instanceColor)),et===void 0||et.attribute!==Et||Et&&et.data!==Et.data)return!0;V++}return r.attributesNum!==V||r.index!==L}function p(C,D,O,L){let F={},z=D.attributes,V=0,Q=O.getAttributes();for(let q in Q)if(Q[q].location>=0){let et=z[q];et===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(et=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(et=C.instanceColor));let Et={};Et.attribute=et,et&&et.data&&(Et.data=et.data),F[q]=Et,V++}r.attributes=F,r.attributesNum=V,r.index=L}function y(){let C=r.newAttributes;for(let D=0,O=C.length;D<O;D++)C[D]=0}function m(C){g(C,0)}function g(C,D){let O=r.newAttributes,L=r.enabledAttributes,F=r.attributeDivisors;O[C]=1,L[C]===0&&(i.enableVertexAttribArray(C),L[C]=1),F[C]!==D&&(i.vertexAttribDivisor(C,D),F[C]=D)}function T(){let C=r.newAttributes,D=r.enabledAttributes;for(let O=0,L=D.length;O<L;O++)D[O]!==C[O]&&(i.disableVertexAttribArray(O),D[O]=0)}function w(C,D,O,L,F,z,V){V===!0?i.vertexAttribIPointer(C,D,O,F,z):i.vertexAttribPointer(C,D,O,L,F,z)}function v(C,D,O,L){y();let F=L.attributes,z=O.getAttributes(),V=D.defaultAttributeValues;for(let Q in z){let q=z[Q];if(q.location>=0){let nt=F[Q];if(nt===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(nt=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(nt=C.instanceColor)),nt!==void 0){let et=nt.normalized,Et=nt.itemSize,At=t.get(nt);if(At===void 0)continue;let se=At.buffer,Yt=At.type,at=At.bytesPerElement,G=Yt===i.INT||Yt===i.UNSIGNED_INT||nt.gpuType===hl;if(nt.isInterleavedBufferAttribute){let j=nt.data,xt=j.stride,It=nt.offset;if(j.isInstancedInterleavedBuffer){for(let Tt=0;Tt<q.locationSize;Tt++)g(q.location+Tt,j.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Tt=0;Tt<q.locationSize;Tt++)m(q.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,se);for(let Tt=0;Tt<q.locationSize;Tt++)w(q.location+Tt,Et/q.locationSize,Yt,et,xt*at,(It+Et/q.locationSize*Tt)*at,G)}else{if(nt.isInstancedBufferAttribute){for(let j=0;j<q.locationSize;j++)g(q.location+j,nt.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let j=0;j<q.locationSize;j++)m(q.location+j);i.bindBuffer(i.ARRAY_BUFFER,se);for(let j=0;j<q.locationSize;j++)w(q.location+j,Et/q.locationSize,Yt,et,Et*at,Et/q.locationSize*j*at,G)}}else if(V!==void 0){let et=V[Q];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(q.location,et);break;case 3:i.vertexAttrib3fv(q.location,et);break;case 4:i.vertexAttrib4fv(q.location,et);break;default:i.vertexAttrib1fv(q.location,et)}}}}T()}function M(){b();for(let C in n){let D=n[C];for(let O in D){let L=D[O];for(let F in L){let z=L[F];for(let V in z)h(z[V].object),delete z[V];delete L[F]}}delete n[C]}}function x(C){if(n[C.id]===void 0)return;let D=n[C.id];for(let O in D){let L=D[O];for(let F in L){let z=L[F];for(let V in z)h(z[V].object),delete z[V];delete L[F]}}delete n[C.id]}function E(C){for(let D in n){let O=n[D];for(let L in O){let F=O[L];if(F[C.id]===void 0)continue;let z=F[C.id];for(let V in z)h(z[V].object),delete z[V];delete F[C.id]}}}function _(C){for(let D in n){let O=n[D],L=C.isInstancedMesh===!0?C.id:0,F=O[L];if(F!==void 0){for(let z in F){let V=F[z];for(let Q in V)h(V[Q].object),delete V[Q];delete F[z]}delete O[L],Object.keys(O).length===0&&delete n[D]}}}function b(){A(),a=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:A,dispose:M,releaseStatesOfGeometry:x,releaseStatesOfObject:_,releaseStatesOfProgram:E,initAttributes:y,enableAttribute:m,disableUnusedAttributes:T}}function Kx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function jx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==Mn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let _=E===Oe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Qe&&E!==Zn&&!_&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),x=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:v,maxSamples:M,samples:x}}function Qx(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Wn,o=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let T=r?0:n,w=T*4,v=g.clippingState||null;l.value=v,v=h(p,d,w,f);for(let M=0;M!==w;++M)v[M]=e[M];g.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,p!==!0||m===null){let g=f+y*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,v=f;w!==y;++w,v+=4)a.copy(u[w]).applyMatrix4(T,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var _r=4,t1=6,e1=20,n1=256,Pa=new $i,vf=new Ht,Jh=null,Kh=0,jh=0,Qh=!1,i1=new N,ys=new N,yr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=i1}=r;Jh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Jh,Kh,jh),this._renderer.xr.enabled=Qh,t.scissorTest=!1,xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Oe,format:Mn,colorSpace:Gr,depthBuffer:!1},s=yf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=s1(r)),this._blurMaterial=a1(r,t,e),this._ggxMaterial=r1(r,t,e)}return s}_compileMaterial(t){let e=new _e(new Me,t);this._renderer.compile(e,Pa)}_sceneToCubeUV(t,e,n,s,r){let l=new Ke(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(vf),u.toneMapping=qn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _e(new pe,new un({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,g=!1,T=t.background;T?T.isColor&&(m.color.copy(T),t.background=null,g=!0):(m.color.copy(vf),g=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let M=this._cubeSize;xr(s,v*M,w>2?M:0,M,M),u.setRenderTarget(s),g&&u.render(y,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=T}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ki||t.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;xr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Pa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:p}=this,y=this._sizeLods[n],m=3*y*(n>p-_r?n-p+_r:0),g=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,xr(r,m,g,3*y,2*y),s.setRenderTarget(r),s.render(o,Pa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,xr(t,m,g,3*y,2*y),s.setRenderTarget(t),s.render(o,Pa)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-_r?s-this._lodMax+_r:0),d=4*(this._cubeSize-h);xr(e,u,d,3*h,2*h),a.setRenderTarget(e),a.render(l,Pa)}};function s1(i){let t=[],e=[],n=i,s=i-_r+1+t1;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,p=new Float32Array(f*d*u),y=new Float32Array(f*d*u);for(let g=0;g<u;g++){let T=g%3*2/3-1,w=g>2?0:-1,v=[T,w,0,T+2/3,w,0,T+2/3,w+1,0,T,w,0,T+2/3,w+1,0,T,w+1,0];p.set(v,f*d*g);for(let M=0;M<d;M++){let x=h[M*2]*2-1,E=h[M*2+1]*2-1;g===0?ys.set(1,E,x):g===1?ys.set(-x,1,-E):g===2?ys.set(-x,E,1):g===3?ys.set(-1,E,-x):g===4?ys.set(-x,-1,E):ys.set(x,E,-1),ys.toArray(y,(g*d+M)*f)}}let m=new Me;m.setAttribute("position",new vn(p,f)),m.setAttribute("outputDirection",new vn(y,f)),e.push(new _e(m,null)),n>_r&&n--}return{lodMeshes:e,sizeLods:t}}function yf(i,t,e){let n=new Ne(i,t,e);return n.texture.mapping=Ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function r1(i,t,e){return new Se({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:n1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jl(),fragmentShader:`

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
		`,blending:He,depthTest:!1,depthWrite:!1})}function a1(i,t,e){return new Se({name:"SphericalGaussianBlur",defines:{SAMPLES:e1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:jl(),fragmentShader:`

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
		`,blending:He,depthTest:!1,depthWrite:!1})}function Mf(){return new Se({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jl(),fragmentShader:`

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
		`,blending:He,depthTest:!1,depthWrite:!1})}function Sf(){return new Se({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:He,depthTest:!1,depthWrite:!1})}function jl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Jl=class extends Ne{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new jr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pe(5,5,5),r=new Se({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:He});r.uniforms.tEquirect.value=e;let a=new _e(s,r),o=e.minFilter;return e.minFilter===ji&&(e.minFilter=tn),new il(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function o1(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===ol||f===ll)if(t.has(d)){let p=t.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let y=new Jl(p.height);return y.fromEquirectangularTexture(i,d),t.set(d,y),d.addEventListener("dispose",c),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,p=f===ol||f===ll,y=f===Ki||f===_s;if(p||y){let m=e.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new yr(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let T=d.image;return p&&T&&T.height>0||y&&T&&l(T)?(n===null&&(n=new yr(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===ol?d.mapping=Ki:f===ll&&(d.mapping=_s),d}function l(d){let f=0,p=6;for(let y=0;y<p;y++)d[y]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function l1(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&us("WebGLRenderer: "+n+" extension not supported."),s}}}function c1(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,p=u.attributes.position,y=0;if(p===void 0)return;if(f!==null){let T=f.array;y=f.version;for(let w=0,v=T.length;w<v;w+=3){let M=T[w+0],x=T[w+1],E=T[w+2];d.push(M,x,x,E,E,M)}}else{let T=p.array;y=p.version;for(let w=0,v=T.length/3-1;w<v;w+=3){let M=w+0,x=w+1,E=w+2;d.push(M,x,x,E,E,M)}}let m=new(p.count>=65535?$r:Zr)(d,1);m.version=y;let g=r.get(u);g&&t.remove(g),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function h1(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),e.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let y=0;for(let m=0;m<f;m++)y+=d[m];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function u1(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Kt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function d1(i,t,e){let n=new WeakMap,s=new De;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let b=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),y===!0&&(w=3);let v=o.attributes.position.count*w,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let x=new Float32Array(v*M*4*u),E=new qr(x,v,M,u);E.type=Zn,E.needsUpdate=!0;let _=w*4;for(let A=0;A<u;A++){let C=m[A],D=g[A],O=T[A],L=v*M*4*A;for(let F=0;F<C.count;F++){let z=F*_;f===!0&&(s.fromBufferAttribute(C,F),x[L+z+0]=s.x,x[L+z+1]=s.y,x[L+z+2]=s.z,x[L+z+3]=0),p===!0&&(s.fromBufferAttribute(D,F),x[L+z+4]=s.x,x[L+z+5]=s.y,x[L+z+6]=s.z,x[L+z+7]=0),y===!0&&(s.fromBufferAttribute(O,F),x[L+z+8]=s.x,x[L+z+9]=s.y,x[L+z+10]=s.z,x[L+z+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new ot(v,M)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function f1(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var p1={[bh]:"LINEAR_TONE_MAPPING",[Th]:"REINHARD_TONE_MAPPING",[Eh]:"CINEON_TONE_MAPPING",[wh]:"ACES_FILMIC_TONE_MAPPING",[Ah]:"AGX_TONE_MAPPING",[Rh]:"NEUTRAL_TONE_MAPPING",[ya]:"CUSTOM_TONE_MAPPING"};function m1(i,t,e,n,s,r){let a=new Ne(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Me;c.setAttribute("position",new ee([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ee([0,2,0,0,2,0],2));let h=new Xo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new _e(c,h),d=new $i(-1,1,1,-1,0,1),f=null,p=null,y=!1,m,g=null,T=[],w=!1;this.setSize=function(v,M){a.setSize(v,M),o!==null&&o.setSize(v,M),l!==null&&l.setSize(v,M);for(let x=0;x<T.length;x++){let E=T[x];E.setSize&&E.setSize(v,M)}},this.setEffects=function(v){T=v,w=T.length>0&&T[0].isRenderPass===!0;let M=a.width,x=a.height;T.length>0&&o===null&&(o=new Ne(M,x,{type:Oe,depthBuffer:!1,stencilBuffer:!1}),l=new Ne(M,x,{type:Oe,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<T.length;E++){let _=T[E];_.setSize&&_.setSize(M,x)}},this.begin=function(v,M){if(y||v.toneMapping===qn&&T.length===0)return!1;if(g=M,M!==null){let x=M.width,E=M.height;(a.width!==x||a.height!==E)&&this.setSize(x,E)}return w===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=qn,!0},this.hasRenderPass=function(){return w},this.end=function(v,M){v.toneMapping=m,y=!0;let x=a,E=o;for(let _=0;_<T.length;_++){let b=T[_];b.enabled!==!1&&(b.render(v,E,x,M),b.needsSwap!==!1&&(x=E,E=E===o?l:o))}if(f!==v.outputColorSpace||p!==v.toneMapping){f=v.outputColorSpace,p=v.toneMapping,h.defines={},de.getTransfer(f)===ye&&(h.defines.SRGB_TRANSFER="");let _=p1[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,v.setRenderTarget(g),v.render(u,d),g=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Gf=new hn,nu=new oi(1,1),Vf=new qr,Wf=new Fo,Xf=new jr,bf=[],Tf=[],Ef=new Float32Array(16),wf=new Float32Array(9),Af=new Float32Array(4);function Mr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=bf[s];if(r===void 0&&(r=new Float32Array(s),bf[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ql(i,t){let e=Tf[t];e===void 0&&(e=new Int32Array(t),Tf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function g1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function x1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2fv(this.addr,t),Ze(e,t)}}function _1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;i.uniform3fv(this.addr,t),Ze(e,t)}}function v1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4fv(this.addr,t),Ze(e,t)}}function y1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;Af.set(n),i.uniformMatrix2fv(this.addr,!1,Af),Ze(e,n)}}function M1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;wf.set(n),i.uniformMatrix3fv(this.addr,!1,wf),Ze(e,n)}}function S1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;Ef.set(n),i.uniformMatrix4fv(this.addr,!1,Ef),Ze(e,n)}}function b1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function T1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2iv(this.addr,t),Ze(e,t)}}function E1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3iv(this.addr,t),Ze(e,t)}}function w1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4iv(this.addr,t),Ze(e,t)}}function A1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function R1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2uiv(this.addr,t),Ze(e,t)}}function C1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3uiv(this.addr,t),Ze(e,t)}}function P1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4uiv(this.addr,t),Ze(e,t)}}function I1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nu.compareFunction=e.isReversedDepthBuffer()?Yl:ql,r=nu):r=Gf,e.setTexture2D(t||r,s)}function L1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Wf,s)}function D1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Xf,s)}function U1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Vf,s)}function N1(i){switch(i){case 5126:return g1;case 35664:return x1;case 35665:return _1;case 35666:return v1;case 35674:return y1;case 35675:return M1;case 35676:return S1;case 5124:case 35670:return b1;case 35667:case 35671:return T1;case 35668:case 35672:return E1;case 35669:case 35673:return w1;case 5125:return A1;case 36294:return R1;case 36295:return C1;case 36296:return P1;case 35678:case 36198:case 36298:case 36306:case 35682:return I1;case 35679:case 36299:case 36307:return L1;case 35680:case 36300:case 36308:case 36293:return D1;case 36289:case 36303:case 36311:case 36292:return U1}}function F1(i,t){i.uniform1fv(this.addr,t)}function O1(i,t){let e=Mr(t,this.size,2);i.uniform2fv(this.addr,e)}function B1(i,t){let e=Mr(t,this.size,3);i.uniform3fv(this.addr,e)}function k1(i,t){let e=Mr(t,this.size,4);i.uniform4fv(this.addr,e)}function z1(i,t){let e=Mr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function H1(i,t){let e=Mr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function G1(i,t){let e=Mr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function V1(i,t){i.uniform1iv(this.addr,t)}function W1(i,t){i.uniform2iv(this.addr,t)}function X1(i,t){i.uniform3iv(this.addr,t)}function q1(i,t){i.uniform4iv(this.addr,t)}function Y1(i,t){i.uniform1uiv(this.addr,t)}function Z1(i,t){i.uniform2uiv(this.addr,t)}function $1(i,t){i.uniform3uiv(this.addr,t)}function J1(i,t){i.uniform4uiv(this.addr,t)}function K1(i,t,e){let n=this.cache,s=t.length,r=Ql(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=nu:a=Gf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function j1(i,t,e){let n=this.cache,s=t.length,r=Ql(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Wf,r[a])}function Q1(i,t,e){let n=this.cache,s=t.length,r=Ql(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Xf,r[a])}function t_(i,t,e){let n=this.cache,s=t.length,r=Ql(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Vf,r[a])}function e_(i){switch(i){case 5126:return F1;case 35664:return O1;case 35665:return B1;case 35666:return k1;case 35674:return z1;case 35675:return H1;case 35676:return G1;case 5124:case 35670:return V1;case 35667:case 35671:return W1;case 35668:case 35672:return X1;case 35669:case 35673:return q1;case 5125:return Y1;case 36294:return Z1;case 36295:return $1;case 36296:return J1;case 35678:case 36198:case 36298:case 36306:case 35682:return K1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return Q1;case 36289:case 36303:case 36311:case 36292:return t_}}var iu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=N1(e.type)}},su=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=e_(e.type)}},ru=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},tu=/(\w+)(\])?(\[|\.)?/g;function Rf(i,t){i.seq.push(t),i.map[t.id]=t}function n_(i,t,e){let n=i.name,s=n.length;for(tu.lastIndex=0;;){let r=tu.exec(n),a=tu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Rf(e,c===void 0?new iu(o,i,t):new su(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new ru(o),Rf(e,u)),e=u}}}var vr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);n_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Cf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var i_=37297,s_=0;function r_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Pf=new jt;function a_(i){de._getMatrix(Pf,de.workingColorSpace,i);let t=`mat3( ${Pf.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case Vr:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function If(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+r_(i.getShaderSource(t),o)}else return r}function o_(i,t){let e=a_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var l_={[bh]:"Linear",[Th]:"Reinhard",[Eh]:"Cineon",[wh]:"ACESFilmic",[Ah]:"AgX",[Rh]:"Neutral",[ya]:"Custom"};function c_(i,t){let e=l_[t];return e===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var $l=new N;function h_(){de.getLuminanceCoefficients($l);let i=$l.x.toFixed(4),t=$l.y.toFixed(4),e=$l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(La).join(`
`)}function d_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function f_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function La(i){return i!==""}function Lf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Df(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var p_=/^[ \t]*#include +<([\w\d./]+)>/gm;function au(i){return i.replace(p_,g_)}var m_=new Map;function g_(i,t){let e=te[t];if(e===void 0){let n=m_.get(t);if(n!==void 0)e=te[n],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return au(e)}var x_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uf(i){return i.replace(x_,__)}function __(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var v_={[ms]:"SHADOWMAP_TYPE_PCF",[fr]:"SHADOWMAP_TYPE_VSM"};function y_(i){return v_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var M_={[Ki]:"ENVMAP_TYPE_CUBE",[_s]:"ENVMAP_TYPE_CUBE",[Ma]:"ENVMAP_TYPE_CUBE_UV"};function S_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":M_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var b_={[_s]:"ENVMAP_MODE_REFRACTION"};function T_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":b_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var E_={[Sh]:"ENVMAP_BLENDING_MULTIPLY",[Zd]:"ENVMAP_BLENDING_MIX",[$d]:"ENVMAP_BLENDING_ADD"};function w_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":E_[i.combine]||"ENVMAP_BLENDING_NONE"}function A_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function R_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=y_(e),c=S_(e),h=T_(e),u=w_(e),d=A_(e),f=u_(e),p=d_(r),y=s.createProgram(),m,g,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(La).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(La).join(`
`),g.length>0&&(g+=`
`)):(m=[Nf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),g=[Nf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?te.tonemapping_pars_fragment:"",e.toneMapping!==qn?c_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,o_("linearToOutputTexel",e.outputColorSpace),h_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(La).join(`
`)),a=au(a),a=Lf(a,e),a=Df(a,e),o=au(o),o=Lf(o,e),o=Df(o,e),a=Uf(a),o=Uf(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let w=T+m+a,v=T+g+o,M=Cf(s,s.VERTEX_SHADER,w),x=Cf(s,s.FRAGMENT_SHADER,v);s.attachShader(y,M),s.attachShader(y,x),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function E(C){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(y)||"",O=s.getShaderInfoLog(M)||"",L=s.getShaderInfoLog(x)||"",F=D.trim(),z=O.trim(),V=L.trim(),Q=!0,q=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,M,x);else{let nt=If(s,M,"vertex"),et=If(s,x,"fragment");Kt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+nt+`
`+et)}else F!==""?Jt("WebGLProgram: Program Info Log:",F):(z===""||V==="")&&(q=!1);q&&(C.diagnostics={runnable:Q,programLog:F,vertexShader:{log:z,prefix:m},fragmentShader:{log:V,prefix:g}})}s.deleteShader(M),s.deleteShader(x),_=new vr(s,y),b=f_(s,y)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(y,i_)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=s_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=x,this}var C_=0,ou=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new lu(t),e.set(t,n)),n}},lu=class{constructor(t){this.id=C_++,this.code=t,this.usedTimes=0}};function P_(i){return i===ts||i===Aa||i===Ra}function I_(i,t,e,n,s,r){let a=new er,o=new ou,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,b,A,C,D,O){let L=C.fog,F=D.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Q=t.get(_.envMap||z,V),q=Q&&Q.mapping===Ma?Q.image.height:null,nt=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Jt("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let et=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Et=et!==void 0?et.length:0,At=0;F.morphAttributes.position!==void 0&&(At=1),F.morphAttributes.normal!==void 0&&(At=2),F.morphAttributes.color!==void 0&&(At=3);let se,Yt,at,G;if(nt){let Ft=di[nt];se=Ft.vertexShader,Yt=Ft.fragmentShader}else{se=_.vertexShader,Yt=_.fragmentShader;let Ft=o.getVertexShaderStage(_),qt=o.getFragmentShaderStage(_);o.update(_,Ft,qt),at=Ft.id,G=qt.id}let j=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),It=D.isInstancedMesh===!0,Tt=D.isBatchedMesh===!0,Gt=!!_.map,ne=!!_.matcap,it=!!Q,ct=!!_.aoMap,ut=!!_.lightMap,mt=!!_.bumpMap&&_.wireframe===!1,yt=!!_.normalMap,Vt=!!_.displacementMap,kt=!!_.emissiveMap,Xt=!!_.metalnessMap,$t=!!_.roughnessMap,B=_.anisotropy>0,ue=_.clearcoat>0,Qt=_.dispersion>0,I=_.retroreflectivity>0,S=_.iridescence>0,H=_.sheen>0,W=_.transmission>0,K=B&&!!_.anisotropyMap,gt=ue&&!!_.clearcoatMap,Mt=ue&&!!_.clearcoatNormalMap,tt=ue&&!!_.clearcoatRoughnessMap,rt=S&&!!_.iridescenceMap,bt=S&&!!_.iridescenceThicknessMap,Ut=H&&!!_.sheenColorMap,St=H&&!!_.sheenRoughnessMap,vt=!!_.specularMap,Lt=!!_.specularColorMap,zt=!!_.specularIntensityMap,Zt=W&&!!_.transmissionMap,P=W&&!!_.thicknessMap,$=!!_.gradientMap,X=!!_.alphaMap,lt=_.alphaTest>0,dt=!!_.alphaHash,st=!!_.extensions,wt=qn;_.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(wt=i.toneMapping);let ft={shaderID:nt,shaderType:_.type,shaderName:_.name,vertexShader:se,fragmentShader:Yt,defines:_.defines,customVertexShaderID:at,customFragmentShaderID:G,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Tt,batchingColor:Tt&&D._colorsTexture!==null,instancing:It,instancingColor:It&&D.instanceColor!==null,instancingMorph:It&&D.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:de.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Gt,matcap:ne,envMap:it,envMapMode:it&&Q.mapping,envMapCubeUVHeight:q,aoMap:ct,lightMap:ut,bumpMap:mt,normalMap:yt,displacementMap:Vt,emissiveMap:kt,normalMapObjectSpace:yt&&_.normalMapType===jd,normalMapTangentSpace:yt&&_.normalMapType===Ca,packedNormalMap:yt&&_.normalMapType===Ca&&P_(_.normalMap.format),metalnessMap:Xt,roughnessMap:$t,anisotropy:B,anisotropyMap:K,clearcoat:ue,clearcoatMap:gt,clearcoatNormalMap:Mt,clearcoatRoughnessMap:tt,dispersion:Qt,retroreflection:I,iridescence:S,iridescenceMap:rt,iridescenceThicknessMap:bt,sheen:H,sheenColorMap:Ut,sheenRoughnessMap:St,specularMap:vt,specularColorMap:Lt,specularIntensityMap:zt,transmission:W,transmissionMap:Zt,thicknessMap:P,gradientMap:$,opaque:_.transparent===!1&&_.blending===pr&&_.alphaToCoverage===!1,alphaMap:X,alphaTest:lt,alphaHash:dt,combine:_.combine,mapUv:Gt&&p(_.map.channel),aoMapUv:ct&&p(_.aoMap.channel),lightMapUv:ut&&p(_.lightMap.channel),bumpMapUv:mt&&p(_.bumpMap.channel),normalMapUv:yt&&p(_.normalMap.channel),displacementMapUv:Vt&&p(_.displacementMap.channel),emissiveMapUv:kt&&p(_.emissiveMap.channel),metalnessMapUv:Xt&&p(_.metalnessMap.channel),roughnessMapUv:$t&&p(_.roughnessMap.channel),anisotropyMapUv:K&&p(_.anisotropyMap.channel),clearcoatMapUv:gt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:St&&p(_.sheenRoughnessMap.channel),specularMapUv:vt&&p(_.specularMap.channel),specularColorMapUv:Lt&&p(_.specularColorMap.channel),specularIntensityMapUv:zt&&p(_.specularIntensityMap.channel),transmissionMapUv:Zt&&p(_.transmissionMap.channel),thicknessMapUv:P&&p(_.thicknessMap.channel),alphaMapUv:X&&p(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(yt||B),vertexNormals:!!F.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(Gt||X),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||F.attributes.normal===void 0&&yt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:At,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:wt,decodeVideoTexture:Gt&&_.map.isVideoTexture===!0&&de.getTransfer(_.map.colorSpace)===ye,decodeVideoTextureEmissive:kt&&_.emissiveMap.isVideoTexture===!0&&de.getTransfer(_.emissiveMap.colorSpace)===ye,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===pn,flipSided:_.side===fn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:st&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&_.extensions.multiDraw===!0||Tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function m(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let A in _.defines)b.push(A),b.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(g(b,_),T(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function g(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function T(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){let b=f[_.type],A;if(b){let C=di[b];A=mn.clone(C.uniforms)}else A=_.uniforms;return A}function v(_,b){let A=h.get(b);return A!==void 0?++A.usedTimes:(A=new R_(i,b,_,s),c.push(A),h.set(b,A)),A}function M(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function x(_){o.remove(_)}function E(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:w,acquireProgram:v,releaseProgram:M,releaseShaderCache:x,programs:c,dispose:E}}function L_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function D_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ff(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Of(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,y,m,g){let T=i[t];return T===void 0?(T={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:g},i[t]=T):(T.id=d.id,T.object=d,T.geometry=f,T.material=p,T.materialVariant=a(d),T.groupOrder=y,T.renderOrder=d.renderOrder,T.z=m,T.group=g),t++,T}function l(d,f,p,y,m,g,T){T.reversedDepth===!0&&(m=-m);let w=o(d,f,p,y,m,g);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):e.push(w)}function c(d,f,p,y,m,g){let T=o(d,f,p,y,m,g);p.transmission>0?n.unshift(T):p.transparent===!0?s.unshift(T):e.unshift(T)}function h(d,f){e.length>1&&e.sort(d||D_),n.length>1&&n.sort(f||Ff),s.length>1&&s.sort(f||Ff)}function u(){for(let d=t,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function U_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Of,i.set(n,[a])):s>=r.length?(a=new Of,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function N_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new Ht};break;case"SpotLight":e={position:new N,direction:new N,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function F_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var O_=0;function B_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function k_(i){let t=new N_,e=F_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new ce,a=new ce;function o(c){let h=0,u=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,p=0,y=0,m=0,g=0,T=0,w=0,v=0,M=0,x=0,E=0,_=0,b=0,A=0;c.sort(B_);for(let D=0,O=c.length;D<O;D++){let L=c[D],F=L.color,z=L.intensity,V=L.distance,Q=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ts?Q=L.shadow.map.texture:Q=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=F.r*z,u+=F.g*z,d+=F.b*z;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],z);A++}else if(L.isSunLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let nt=L.shadow,et=e.get(L);et.shadowIntensity=nt.intensity,et.shadowBias=nt.bias,et.shadowNormalBias=nt.normalBias,et.shadowRadius=nt.radius,et.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),n.sunShadow[p]=et,n.sunShadowMap[p]=Q;let Et=nt.getViewportCount();for(let At=0;At<Et;At++)n.sunShadowMatrix[y+At]=nt.getMatrix(At),n.sunShadowCascade[y+At]=nt._cascadeData[At];y+=Et,p++}n.sun[f]=q,f++}else if(L.isDirectionalLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let nt=L.shadow,et=e.get(L);et.shadowIntensity=nt.intensity,et.shadowBias=nt.bias,et.shadowNormalBias=nt.normalBias,et.shadowRadius=nt.radius,et.shadowMapSize=nt.mapSize,n.directionalShadow[m]=et,n.directionalShadowMap[m]=Q,n.directionalShadowMatrix[m]=L.shadow.matrix,M++}n.directional[m]=q,m++}else if(L.isSpotLight){let q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(F).multiplyScalar(z),q.distance=V,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[T]=q;let nt=L.shadow;if(L.map&&(n.spotLightMap[_]=L.map,_++,nt.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[T]=nt.matrix,L.castShadow){let et=e.get(L);et.shadowIntensity=nt.intensity,et.shadowBias=nt.bias,et.shadowNormalBias=nt.normalBias,et.shadowRadius=nt.radius,et.shadowMapSize=nt.mapSize,n.spotShadow[T]=et,n.spotShadowMap[T]=Q,E++}T++}else if(L.isRectAreaLight){let q=t.get(L);q.color.copy(F).multiplyScalar(z),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=q,w++}else if(L.isPointLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let nt=L.shadow,et=e.get(L);et.shadowIntensity=nt.intensity,et.shadowBias=nt.bias,et.shadowNormalBias=nt.normalBias,et.shadowRadius=nt.radius,et.shadowMapSize=nt.mapSize,et.shadowCameraNear=nt.camera.near,et.shadowCameraFar=nt.camera.far,n.pointShadow[g]=et,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=L.shadow.matrix,x++}n.point[g]=q,g++}else if(L.isHemisphereLight){let q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(z),q.groundColor.copy(L.groundColor).multiplyScalar(z),n.hemi[v]=q,v++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.sunLength!==f||C.directionalLength!==m||C.pointLength!==g||C.spotLength!==T||C.rectAreaLength!==w||C.hemiLength!==v||C.numSunShadows!==p||C.numDirectionalShadows!==M||C.numPointShadows!==x||C.numSpotShadows!==E||C.numSpotMaps!==_||C.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=m,n.spot.length=T,n.rectArea.length=w,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.pointShadowMatrix.length=x,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+_-b,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,C.sunLength=f,C.directionalLength=m,C.pointLength=g,C.spotLength=T,C.rectAreaLength=w,C.hemiLength=v,C.numSunShadows=p,C.numDirectionalShadows=M,C.numPointShadows=x,C.numSpotShadows=E,C.numSpotMaps=_,C.numLightProbes=A,n.version=O_++)}function l(c,h){let u=0,d=0,f=0,p=0,y=0,m=0,g=h.matrixWorldInverse;for(let T=0,w=c.length;T<w;T++){let v=c[T];if(v.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(g),u++}else if(v.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),d++}else if(v.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let M=n.rectArea[y];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function Bf(i){let t=new k_(i),e=[],n=[],s=[];function r(d){u.camera=d,e.length=0,n.length=0,s.length=0}function a(d){e.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function z_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Bf(i),t.set(s,[o])):r>=a.length?(o=new Bf(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var H_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G_=`uniform sampler2D shadow_pass;
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
}`,V_=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],W_=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],kf=new ce,Ia=new N,eu=new N;function X_(i,t,e){let n=new rr,s=new ot,r=new ot,a=new De,o=new cr,l=new qo,c={},h=e.maxTextureSize,u={[Ji]:fn,[fn]:Ji,[pn]:pn},d=new Se({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:H_,fragmentShader:G_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Me;p.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new _e(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ms;let g=this.type;this.render=function(x,E,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;this.type===Dd&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ms);let b=i.getRenderTarget(),A=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),D=i.state;D.setBlending(He),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let O=g!==this.type;O&&E.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(F=>F.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,F=x.length;L<F;L++){let z=x[L],V=z.shadow;if(V===void 0){Jt("WebGLShadowMap:",z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let Q=V.getFrameExtents();s.multiply(Q),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,V.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=q,V.map===null||O===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===fr){if(z.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Ne(s.x,s.y,{format:ts,type:Oe,minFilter:tn,magFilter:tn,generateMipmaps:!1}),V.map.texture.name=z.name+".shadowMap",V.map.depthTexture=new oi(s.x,s.y,Zn),V.map.depthTexture.name=z.name+".shadowMapDepth",V.map.depthTexture.format=ii,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Le,V.map.depthTexture.magFilter=Le}else z.isPointLight?(V.map=new Jl(s.x),V.map.depthTexture=new ko(s.x,Yn)):(V.map=new Ne(s.x,s.y),V.map.depthTexture=new oi(s.x,s.y,Yn)),V.map.depthTexture.name=z.name+".shadowMap",V.map.depthTexture.format=ii,this.type===ms?(V.map.depthTexture.compareFunction=q?Yl:ql,V.map.depthTexture.minFilter=tn,V.map.depthTexture.magFilter=tn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Le,V.map.depthTexture.magFilter=Le);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let nt=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();z.isPointLight!==!0&&V.updateMatrices(z,_);for(let et=0;et<nt;et++){let Et=V.getCamera(et);if(z.isPointLight){let At=V.camera,se=V.matrix,Yt=z.distance||At.far;Yt!==At.far&&(At.far=Yt,At.updateProjectionMatrix()),Ia.setFromMatrixPosition(z.matrixWorld),At.position.copy(Ia),eu.copy(At.position),eu.add(V_[et]),At.up.copy(W_[et]),At.lookAt(eu),At.updateMatrixWorld(),se.makeTranslation(-Ia.x,-Ia.y,-Ia.z),kf.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),V._frustum.setFromProjectionMatrix(kf,At.coordinateSystem,At.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,et),i.clear();else{et===0&&(i.setRenderTarget(V.map),i.clear());let At=V.getViewport(et);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),D.viewport(a)}n=V.getFrustum(et),v(E,_,Et,z,this.type)}V.isPointLightShadow!==!0&&this.type===fr&&T(V,_),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(b,A,C)};function T(x,E){let _=t.update(y);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),x.mapPass===null?x.mapPass=new Ne(s.x,s.y,{format:ts,type:Oe}):(x.mapPass.width!==x.map.width||x.mapPass.height!==x.map.height)&&x.mapPass.setSize(x.map.width,x.map.height),d.uniforms.shadow_pass.value=x.map.depthTexture,d.uniforms.resolution.value.set(x.map.width,x.map.height),d.uniforms.radius.value=x.radius,i.setRenderTarget(x.mapPass),i.clear(),i.renderBufferDirect(E,null,_,d,y,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value.set(x.map.width,x.map.height),f.uniforms.radius.value=x.radius,i.setRenderTarget(x.map),i.clear(),i.renderBufferDirect(E,null,_,f,y,null)}function w(x,E,_,b){let A=null,C=_.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(C!==void 0)A=C;else if(A=_.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let D=A.uuid,O=E.uuid,L=c[D];L===void 0&&(L={},c[D]=L);let F=L[O];F===void 0&&(F=A.clone(),L[O]=F,E.addEventListener("dispose",M)),A=F}if(A.visible=E.visible,A.wireframe=E.wireframe,b===fr?A.side=E.shadowSide!==null?E.shadowSide:E.side:A.side=E.shadowSide!==null?E.shadowSide:u[E.side],A.alphaMap=E.alphaMap,A.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,A.map=E.map,A.clipShadows=E.clipShadows,A.clippingPlanes=E.clippingPlanes,A.clipIntersection=E.clipIntersection,A.displacementMap=E.displacementMap,A.displacementScale=E.displacementScale,A.displacementBias=E.displacementBias,A.wireframeLinewidth=E.wireframeLinewidth,A.linewidth=E.linewidth,_.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=i.properties.get(A);D.light=_}return A}function v(x,E,_,b,A){if(x.visible===!1)return;if(x.layers.test(E.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&A===fr)&&(!x.frustumCulled||x.intersectsFrustum(n))){x.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,x.matrixWorld);let O=t.update(x),L=x.material;if(Array.isArray(L)){let F=O.groups;for(let z=0,V=F.length;z<V;z++){let Q=F[z],q=L[Q.materialIndex];if(q&&q.visible){let nt=w(x,q,b,A);x.onBeforeShadow(i,x,E,_,O,nt,Q),i.renderBufferDirect(_,null,O,nt,x,Q),x.onAfterShadow(i,x,E,_,O,nt,Q)}}}else if(L.visible){let F=w(x,L,b,A);x.onBeforeShadow(i,x,E,_,O,F,null),i.renderBufferDirect(_,null,O,F,x,null),x.onAfterShadow(i,x,E,_,O,F,null)}}let D=x.children;for(let O=0,L=D.length;O<L;O++)v(D[O],E,_,b,A)}function M(x){x.target.removeEventListener("dispose",M);for(let _ in c){let b=c[_],A=x.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}function q_(i,t){function e(){let P=!1,$=new De,X=null,lt=new De(0,0,0,0);return{setMask:function(dt){X!==dt&&!P&&(i.colorMask(dt,dt,dt,dt),X=dt)},setLocked:function(dt){P=dt},setClear:function(dt,st,wt,ft,Ft){Ft===!0&&(dt*=ft,st*=ft,wt*=ft),$.set(dt,st,wt,ft),lt.equals($)===!1&&(i.clearColor(dt,st,wt,ft),lt.copy($))},reset:function(){P=!1,X=null,lt.set(-1,0,0,0)}}}function n(){let P=!1,$=!1,X=null,lt=null,dt=null;return{setReversed:function(st){if($!==st){let wt=t.get("EXT_clip_control");st?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),$=st;let ft=dt;dt=null,this.setClear(ft)}},getReversed:function(){return $},setTest:function(st){st?j(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(st){X!==st&&!P&&(i.depthMask(st),X=st)},setFunc:function(st){if($&&(st=uf[st]),lt!==st){switch(st){case Eo:i.depthFunc(i.NEVER);break;case wo:i.depthFunc(i.ALWAYS);break;case Ao:i.depthFunc(i.LESS);break;case Ks:i.depthFunc(i.LEQUAL);break;case Ro:i.depthFunc(i.EQUAL);break;case Co:i.depthFunc(i.GEQUAL);break;case Po:i.depthFunc(i.GREATER);break;case Io:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=st}},setLocked:function(st){P=st},setClear:function(st){dt!==st&&(dt=st,$&&(st=1-st),i.clearDepth(st))},reset:function(){P=!1,X=null,lt=null,dt=null,$=!1}}}function s(){let P=!1,$=null,X=null,lt=null,dt=null,st=null,wt=null,ft=null,Ft=null;return{setTest:function(qt){P||(qt?j(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(qt){$!==qt&&!P&&(i.stencilMask(qt),$=qt)},setFunc:function(qt,Ge,En){(X!==qt||lt!==Ge||dt!==En)&&(i.stencilFunc(qt,Ge,En),X=qt,lt=Ge,dt=En)},setOp:function(qt,Ge,En){(st!==qt||wt!==Ge||ft!==En)&&(i.stencilOp(qt,Ge,En),st=qt,wt=Ge,ft=En)},setLocked:function(qt){P=qt},setClear:function(qt){Ft!==qt&&(i.clearStencil(qt),Ft=qt)},reset:function(){P=!1,$=null,X=null,lt=null,dt=null,st=null,wt=null,ft=null,Ft=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],y=null,m=!1,g=null,T=null,w=null,v=null,M=null,x=null,E=null,_=new Ht(0,0,0),b=0,A=!1,C=null,D=null,O=null,L=null,F=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,Q=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=Q>=2);let nt=null,et={},Et=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),se=new De().fromArray(Et),Yt=new De().fromArray(At);function at(P,$,X,lt){let dt=new Uint8Array(4),st=i.createTexture();i.bindTexture(P,st),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<X;wt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D($+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return st}let G={};G[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(Ks),mt(!1),yt(xh),j(i.CULL_FACE),ct(He);function j(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function xt(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function It(P,$){return d[P]!==$?(i.bindFramebuffer(P,$),d[P]=$,P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=$),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=$),!0):!1}function Tt(P,$){let X=p,lt=!1;if(P){X=f.get($),X===void 0&&(X=[],f.set($,X));let dt=P.textures;if(X.length!==dt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let st=0,wt=dt.length;st<wt;st++)X[st]=i.COLOR_ATTACHMENT0+st;X.length=dt.length,lt=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,lt=!0);lt&&i.drawBuffers(X)}function Gt(P){return y!==P?(i.useProgram(P),y=P,!0):!1}let ne={[Bn]:i.FUNC_ADD,[Ud]:i.FUNC_SUBTRACT,[Nd]:i.FUNC_REVERSE_SUBTRACT};ne[Fd]=i.MIN,ne[Od]=i.MAX;let it={[xs]:i.ZERO,[Bd]:i.ONE,[kd]:i.SRC_COLOR,[yh]:i.SRC_ALPHA,[Vd]:i.SRC_ALPHA_SATURATE,[va]:i.DST_COLOR,[_a]:i.DST_ALPHA,[zd]:i.ONE_MINUS_SRC_COLOR,[Mh]:i.ONE_MINUS_SRC_ALPHA,[Gd]:i.ONE_MINUS_DST_COLOR,[Hd]:i.ONE_MINUS_DST_ALPHA,[Wd]:i.CONSTANT_COLOR,[Xd]:i.ONE_MINUS_CONSTANT_COLOR,[qd]:i.CONSTANT_ALPHA,[Yd]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(P,$,X,lt,dt,st,wt,ft,Ft,qt){if(P===He){m===!0&&(xt(i.BLEND),m=!1);return}if(m===!1&&(j(i.BLEND),m=!0),P!==al){if(P!==g||qt!==A){if((T!==Bn||M!==Bn)&&(i.blendEquation(i.FUNC_ADD),T=Bn,M=Bn),qt)switch(P){case pr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gs:i.blendFunc(i.ONE,i.ONE);break;case _h:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Kt("WebGLState: Invalid blending: ",P);break}else switch(P){case pr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case _h:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vh:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",P);break}w=null,v=null,x=null,E=null,_.set(0,0,0),b=0,g=P,A=qt}return}dt=dt||$,st=st||X,wt=wt||lt,($!==T||dt!==M)&&(i.blendEquationSeparate(ne[$],ne[dt]),T=$,M=dt),(X!==w||lt!==v||st!==x||wt!==E)&&(i.blendFuncSeparate(it[X],it[lt],it[st],it[wt]),w=X,v=lt,x=st,E=wt),(ft.equals(_)===!1||Ft!==b)&&(i.blendColor(ft.r,ft.g,ft.b,Ft),_.copy(ft),b=Ft),g=P,A=!1}function ut(P,$){P.side===pn?xt(i.CULL_FACE):j(i.CULL_FACE);let X=P.side===fn;$&&(X=!X),mt(X),P.blending===pr&&P.transparent===!1?ct(He):ct(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let lt=P.stencilWrite;o.setTest(lt),lt&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),kt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(P){C!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),C=P)}function yt(P){P!==Id?(j(i.CULL_FACE),P!==D&&(P===xh?i.cullFace(i.BACK):P===Ld?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),D=P}function Vt(P){P!==O&&(V&&i.lineWidth(P),O=P)}function kt(P,$,X){P?(j(i.POLYGON_OFFSET_FILL),(L!==$||F!==X)&&(L=$,F=X,a.getReversed()&&($=-$),i.polygonOffset($,X))):xt(i.POLYGON_OFFSET_FILL)}function Xt(P){P?j(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function $t(P){P===void 0&&(P=i.TEXTURE0+z-1),nt!==P&&(i.activeTexture(P),nt=P)}function B(P,$,X){X===void 0&&(nt===null?X=i.TEXTURE0+z-1:X=nt);let lt=et[X];lt===void 0&&(lt={type:void 0,texture:void 0},et[X]=lt),(lt.type!==P||lt.texture!==$)&&(nt!==X&&(i.activeTexture(X),nt=X),i.bindTexture(P,$||G[P]),lt.type=P,lt.texture=$)}function ue(){let P=et[nt];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Qt(){try{i.compressedTexImage2D(...arguments)}catch(P){Kt("WebGLState:",P)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(P){Kt("WebGLState:",P)}}function S(){try{i.texSubImage2D(...arguments)}catch(P){Kt("WebGLState:",P)}}function H(){try{i.texSubImage3D(...arguments)}catch(P){Kt("WebGLState:",P)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(P){Kt("WebGLState:",P)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(P){Kt("WebGLState:",P)}}function gt(){try{i.texStorage2D(...arguments)}catch(P){Kt("WebGLState:",P)}}function Mt(){try{i.texStorage3D(...arguments)}catch(P){Kt("WebGLState:",P)}}function tt(){try{i.texImage2D(...arguments)}catch(P){Kt("WebGLState:",P)}}function rt(){try{i.texImage3D(...arguments)}catch(P){Kt("WebGLState:",P)}}function bt(P){return u[P]!==void 0?u[P]:i.getParameter(P)}function Ut(P,$){u[P]!==$&&(i.pixelStorei(P,$),u[P]=$)}function St(P){se.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),se.copy(P))}function vt(P){Yt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Yt.copy(P))}function Lt(P,$){let X=c.get($);X===void 0&&(X=new WeakMap,c.set($,X));let lt=X.get(P);lt===void 0&&(lt=i.getUniformBlockIndex($,P.name),X.set(P,lt))}function zt(P,$){let lt=c.get($).get(P);l.get($)!==lt&&(i.uniformBlockBinding($,lt,P.__bindingPointIndex),l.set($,lt))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},nt=null,et={},d={},f=new WeakMap,p=[],y=null,m=!1,g=null,T=null,w=null,v=null,M=null,x=null,E=null,_=new Ht(0,0,0),b=0,A=!1,C=null,D=null,O=null,L=null,F=null,se.set(0,0,i.canvas.width,i.canvas.height),Yt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:xt,bindFramebuffer:It,drawBuffers:Tt,useProgram:Gt,setBlending:ct,setMaterial:ut,setFlipSided:mt,setCullFace:yt,setLineWidth:Vt,setPolygonOffset:kt,setScissorTest:Xt,activeTexture:$t,bindTexture:B,unbindTexture:ue,compressedTexImage2D:Qt,compressedTexImage3D:I,texImage2D:tt,texImage3D:rt,pixelStorei:Ut,getParameter:bt,updateUBOMapping:Lt,uniformBlockBinding:zt,texStorage2D:gt,texStorage3D:Mt,texSubImage2D:S,texSubImage3D:H,compressedTexSubImage2D:W,compressedTexSubImage3D:K,scissor:St,viewport:vt,reset:Zt}}function Y_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap,u=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(I,S){return p?new OffscreenCanvas(I,S):Wr("canvas")}function m(I,S,H){let W=1,K=Qt(I);if((K.width>H||K.height>H)&&(W=H/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let gt=Math.floor(W*K.width),Mt=Math.floor(W*K.height);d===void 0&&(d=y(gt,Mt));let tt=S?y(gt,Mt):d;return tt.width=gt,tt.height=Mt,tt.getContext("2d").drawImage(I,0,0,gt,Mt),Jt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+gt+"x"+Mt+")."),tt}else return"data"in I&&Jt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),I;return I}function g(I){return I.generateMipmaps}function T(I){i.generateMipmap(I)}function w(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(I,S,H,W,K,gt=!1){if(I!==null){if(i[I]!==void 0)return i[I];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Mt;W&&(Mt=t.get("EXT_texture_norm16"),Mt||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=S;if(S===i.RED&&(H===i.FLOAT&&(tt=i.R32F),H===i.HALF_FLOAT&&(tt=i.R16F),H===i.UNSIGNED_BYTE&&(tt=i.R8),H===i.UNSIGNED_SHORT&&Mt&&(tt=Mt.R16_EXT),H===i.SHORT&&Mt&&(tt=Mt.R16_SNORM_EXT)),S===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.R8UI),H===i.UNSIGNED_SHORT&&(tt=i.R16UI),H===i.UNSIGNED_INT&&(tt=i.R32UI),H===i.BYTE&&(tt=i.R8I),H===i.SHORT&&(tt=i.R16I),H===i.INT&&(tt=i.R32I)),S===i.RG&&(H===i.FLOAT&&(tt=i.RG32F),H===i.HALF_FLOAT&&(tt=i.RG16F),H===i.UNSIGNED_BYTE&&(tt=i.RG8),H===i.UNSIGNED_SHORT&&Mt&&(tt=Mt.RG16_EXT),H===i.SHORT&&Mt&&(tt=Mt.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RG8UI),H===i.UNSIGNED_SHORT&&(tt=i.RG16UI),H===i.UNSIGNED_INT&&(tt=i.RG32UI),H===i.BYTE&&(tt=i.RG8I),H===i.SHORT&&(tt=i.RG16I),H===i.INT&&(tt=i.RG32I)),S===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),H===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),H===i.UNSIGNED_INT&&(tt=i.RGB32UI),H===i.BYTE&&(tt=i.RGB8I),H===i.SHORT&&(tt=i.RGB16I),H===i.INT&&(tt=i.RGB32I)),S===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),H===i.UNSIGNED_INT&&(tt=i.RGBA32UI),H===i.BYTE&&(tt=i.RGBA8I),H===i.SHORT&&(tt=i.RGBA16I),H===i.INT&&(tt=i.RGBA32I)),S===i.RGB&&(H===i.UNSIGNED_SHORT&&Mt&&(tt=Mt.RGB16_EXT),H===i.SHORT&&Mt&&(tt=Mt.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),S===i.RGBA){let rt=gt?Vr:de.getTransfer(K);H===i.FLOAT&&(tt=i.RGBA32F),H===i.HALF_FLOAT&&(tt=i.RGBA16F),H===i.UNSIGNED_BYTE&&(tt=rt===ye?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&Mt&&(tt=Mt.RGBA16_EXT),H===i.SHORT&&Mt&&(tt=Mt.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function M(I,S){let H;return I?S===null||S===Yn||S===Qi?H=i.DEPTH24_STENCIL8:S===Zn?H=i.DEPTH32F_STENCIL8:S===mr&&(H=i.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Yn||S===Qi?H=i.DEPTH_COMPONENT24:S===Zn?H=i.DEPTH_COMPONENT32F:S===mr&&(H=i.DEPTH_COMPONENT16),H}function x(I,S){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Le&&I.minFilter!==tn?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function E(I){let S=I.target;S.removeEventListener("dispose",E),b(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&u.delete(S)}function _(I){let S=I.target;S.removeEventListener("dispose",_),C(S)}function b(I){let S=n.get(I);if(S.__webglInit===void 0)return;let H=I.source,W=f.get(H);if(W){let K=W[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&A(I),Object.keys(W).length===0&&f.delete(H)}n.remove(I)}function A(I){let S=n.get(I);i.deleteTexture(S.__webglTexture);let H=I.source,W=f.get(H);delete W[S.__cacheKey],a.memory.textures--}function C(I){let S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(S.__webglFramebuffer[W]))for(let K=0;K<S.__webglFramebuffer[W].length;K++)i.deleteFramebuffer(S.__webglFramebuffer[W][K]);else i.deleteFramebuffer(S.__webglFramebuffer[W]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[W])}else{if(Array.isArray(S.__webglFramebuffer))for(let W=0;W<S.__webglFramebuffer.length;W++)i.deleteFramebuffer(S.__webglFramebuffer[W]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let W=0;W<S.__webglColorRenderbuffer.length;W++)S.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[W]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let H=I.textures;for(let W=0,K=H.length;W<K;W++){let gt=n.get(H[W]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),a.memory.textures--),n.remove(H[W])}n.remove(I)}let D=0;function O(){D=0}function L(){return D}function F(I){D=I}function z(){let I=D;return I>=s.maxTextures&&Jt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,I}function V(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function Q(I,S){let H=n.get(I);if(I.isVideoTexture&&B(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&H.__version!==I.version){let W=I.image;if(W===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(H,I,S);return}}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+S)}function q(I,S){let H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){xt(H,I,S);return}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+S)}function nt(I,S){let H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){xt(H,I,S);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+S)}function et(I,S){let H=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&H.__version!==I.version){It(H,I,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+S)}let Et={[yn]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[Lo]:i.MIRRORED_REPEAT},At={[Le]:i.NEAREST,[Jd]:i.NEAREST_MIPMAP_NEAREST,[Sa]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[cl]:i.LINEAR_MIPMAP_NEAREST,[ji]:i.LINEAR_MIPMAP_LINEAR},se={[tf]:i.NEVER,[af]:i.ALWAYS,[ef]:i.LESS,[ql]:i.LEQUAL,[nf]:i.EQUAL,[Yl]:i.GEQUAL,[sf]:i.GREATER,[rf]:i.NOTEQUAL};function Yt(I,S){if(S.type===Zn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===tn||S.magFilter===cl||S.magFilter===Sa||S.magFilter===ji||S.minFilter===tn||S.minFilter===cl||S.minFilter===Sa||S.minFilter===ji)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Et[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Et[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Et[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,At[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,At[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,se[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Le||S.minFilter!==Sa&&S.minFilter!==ji||S.type===Zn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function at(I,S){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",E));let W=S.source,K=f.get(W);K===void 0&&(K={},f.set(W,K));let gt=V(S);if(gt!==I.__cacheKey){K[gt]===void 0&&(K[gt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),K[gt].usedTimes++;let Mt=K[I.__cacheKey];Mt!==void 0&&(K[I.__cacheKey].usedTimes--,Mt.usedTimes===0&&A(S)),I.__cacheKey=gt,I.__webglTexture=K[gt].texture}return H}function G(I,S,H){return Math.floor(Math.floor(I/H)/S)}function j(I,S,H,W){let gt=I.updateRanges;if(gt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,H,W,S.data);else{gt.sort((Ut,St)=>Ut.start-St.start);let Mt=0;for(let Ut=1;Ut<gt.length;Ut++){let St=gt[Mt],vt=gt[Ut],Lt=St.start+St.count,zt=G(vt.start,S.width,4),Zt=G(St.start,S.width,4);vt.start<=Lt+1&&zt===Zt&&G(vt.start+vt.count-1,S.width,4)===zt?St.count=Math.max(St.count,vt.start+vt.count-St.start):(++Mt,gt[Mt]=vt)}gt.length=Mt+1;let tt=e.getParameter(i.UNPACK_ROW_LENGTH),rt=e.getParameter(i.UNPACK_SKIP_PIXELS),bt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let Ut=0,St=gt.length;Ut<St;Ut++){let vt=gt[Ut],Lt=Math.floor(vt.start/4),zt=Math.ceil(vt.count/4),Zt=Lt%S.width,P=Math.floor(Lt/S.width),$=zt,X=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Zt),e.pixelStorei(i.UNPACK_SKIP_ROWS,P),e.texSubImage2D(i.TEXTURE_2D,0,Zt,P,$,X,H,W,S.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,tt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function xt(I,S,H){let W=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(W=i.TEXTURE_3D);let K=at(I,S),gt=S.source;e.bindTexture(W,I.__webglTexture,i.TEXTURE0+H);let Mt=n.get(gt);if(gt.version!==Mt.__version||K===!0){if(e.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let X=de.getPrimaries(de.workingColorSpace),lt=S.colorSpace===Ci?null:de.getPrimaries(S.colorSpace),dt=S.colorSpace===Ci||X===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt)}e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let rt=m(S.image,!1,s.maxTextureSize);rt=ue(S,rt);let bt=r.convert(S.format,S.colorSpace),Ut=r.convert(S.type),St=v(S.internalFormat,bt,Ut,S.normalized,S.colorSpace,S.isVideoTexture);Yt(W,S);let vt,Lt=S.mipmaps,zt=S.isVideoTexture!==!0,Zt=Mt.__version===void 0||K===!0,P=gt.dataReady,$=x(S,rt);if(S.isDepthTexture)St=M(S.format===hi,S.type),Zt&&(zt?e.texStorage2D(i.TEXTURE_2D,1,St,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,St,rt.width,rt.height,0,bt,Ut,null));else if(S.isDataTexture)if(Lt.length>0){zt&&Zt&&e.texStorage2D(i.TEXTURE_2D,$,St,Lt[0].width,Lt[0].height);for(let X=0,lt=Lt.length;X<lt;X++)vt=Lt[X],zt?P&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,vt.width,vt.height,bt,Ut,vt.data):e.texImage2D(i.TEXTURE_2D,X,St,vt.width,vt.height,0,bt,Ut,vt.data);S.generateMipmaps=!1}else zt?(Zt&&e.texStorage2D(i.TEXTURE_2D,$,St,rt.width,rt.height),P&&j(S,rt,bt,Ut)):e.texImage2D(i.TEXTURE_2D,0,St,rt.width,rt.height,0,bt,Ut,rt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){zt&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,$,St,Lt[0].width,Lt[0].height,rt.depth);for(let X=0,lt=Lt.length;X<lt;X++)if(vt=Lt[X],S.format!==Mn)if(bt!==null)if(zt){if(P)if(S.layerUpdates.size>0){let dt=Wh(vt.width,vt.height,S.format,S.type);for(let st of S.layerUpdates){let wt=vt.data.subarray(st*dt/vt.data.BYTES_PER_ELEMENT,(st+1)*dt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,st,vt.width,vt.height,1,bt,wt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,vt.width,vt.height,rt.depth,bt,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,St,vt.width,vt.height,rt.depth,0,vt.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,vt.width,vt.height,rt.depth,bt,Ut,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,St,vt.width,vt.height,rt.depth,0,bt,Ut,vt.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{zt&&Zt&&e.texStorage2D(i.TEXTURE_2D,$,St,Lt[0].width,Lt[0].height);for(let X=0,lt=Lt.length;X<lt;X++)vt=Lt[X],S.format!==Mn?bt!==null?zt?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,vt.width,vt.height,bt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,St,vt.width,vt.height,0,vt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?P&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,vt.width,vt.height,bt,Ut,vt.data):e.texImage2D(i.TEXTURE_2D,X,St,vt.width,vt.height,0,bt,Ut,vt.data)}else if(S.isDataArrayTexture)if(zt){if(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,$,St,rt.width,rt.height,rt.depth),P)if(S.layerUpdates.size>0){let X=Wh(rt.width,rt.height,S.format,S.type);for(let lt of S.layerUpdates){let dt=rt.data.subarray(lt*X/rt.data.BYTES_PER_ELEMENT,(lt+1)*X/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,rt.width,rt.height,1,bt,Ut,dt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,bt,Ut,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,rt.width,rt.height,rt.depth,0,bt,Ut,rt.data);else if(S.isData3DTexture)zt?(Zt&&e.texStorage3D(i.TEXTURE_3D,$,St,rt.width,rt.height,rt.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,bt,Ut,rt.data)):e.texImage3D(i.TEXTURE_3D,0,St,rt.width,rt.height,rt.depth,0,bt,Ut,rt.data);else if(S.isFramebufferTexture){if(Zt)if(zt)e.texStorage2D(i.TEXTURE_2D,$,St,rt.width,rt.height);else{let X=rt.width,lt=rt.height;for(let dt=0;dt<$;dt++)e.texImage2D(i.TEXTURE_2D,dt,St,X,lt,0,bt,Ut,null),X>>=1,lt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let X=i.canvas;if(X.hasAttribute("layoutsubtree")||X.setAttribute("layoutsubtree","true"),rt.parentNode!==X){X.appendChild(rt),u.add(S),X.onpaint=lt=>{let dt=lt.changedElements;for(let st of u)dt.includes(st.image)&&(st.needsUpdate=!0)},X.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,rt);else{let dt=i.RGBA,st=i.RGBA,wt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,dt,st,wt,rt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Lt.length>0){if(zt&&Zt){let X=Qt(Lt[0]);e.texStorage2D(i.TEXTURE_2D,$,St,X.width,X.height)}for(let X=0,lt=Lt.length;X<lt;X++)vt=Lt[X],zt?P&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,bt,Ut,vt):e.texImage2D(i.TEXTURE_2D,X,St,bt,Ut,vt);S.generateMipmaps=!1}else if(zt){if(Zt){let X=Qt(rt);e.texStorage2D(i.TEXTURE_2D,$,St,X.width,X.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Ut,rt)}else e.texImage2D(i.TEXTURE_2D,0,St,bt,Ut,rt);g(S)&&T(W),Mt.__version=gt.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function It(I,S,H){if(S.image.length!==6)return;let W=at(I,S),K=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+H);let gt=n.get(K);if(K.version!==gt.__version||W===!0){e.activeTexture(i.TEXTURE0+H);let Mt=de.getPrimaries(de.workingColorSpace),tt=S.colorSpace===Ci?null:de.getPrimaries(S.colorSpace),rt=S.colorSpace===Ci||Mt===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let bt=S.isCompressedTexture||S.image[0].isCompressedTexture,Ut=S.image[0]&&S.image[0].isDataTexture,St=[];for(let st=0;st<6;st++)!bt&&!Ut?St[st]=m(S.image[st],!0,s.maxCubemapSize):St[st]=Ut?S.image[st].image:S.image[st],St[st]=ue(S,St[st]);let vt=St[0],Lt=r.convert(S.format,S.colorSpace),zt=r.convert(S.type),Zt=v(S.internalFormat,Lt,zt,S.normalized,S.colorSpace),P=S.isVideoTexture!==!0,$=gt.__version===void 0||W===!0,X=K.dataReady,lt=x(S,vt);Yt(i.TEXTURE_CUBE_MAP,S);let dt;if(bt){P&&$&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Zt,vt.width,vt.height);for(let st=0;st<6;st++){dt=St[st].mipmaps;for(let wt=0;wt<dt.length;wt++){let ft=dt[wt];S.format!==Mn?Lt!==null?P?X&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt,0,0,ft.width,ft.height,Lt,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt,Zt,ft.width,ft.height,0,ft.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt,0,0,ft.width,ft.height,Lt,zt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt,Zt,ft.width,ft.height,0,Lt,zt,ft.data)}}}else{if(dt=S.mipmaps,P&&$){dt.length>0&&lt++;let st=Qt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Zt,st.width,st.height)}for(let st=0;st<6;st++)if(Ut){P?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,St[st].width,St[st].height,Lt,zt,St[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Zt,St[st].width,St[st].height,0,Lt,zt,St[st].data);for(let wt=0;wt<dt.length;wt++){let Ft=dt[wt].image[st].image;P?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt+1,0,0,Ft.width,Ft.height,Lt,zt,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt+1,Zt,Ft.width,Ft.height,0,Lt,zt,Ft.data)}}else{P?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Lt,zt,St[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Zt,Lt,zt,St[st]);for(let wt=0;wt<dt.length;wt++){let ft=dt[wt];P?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt+1,0,0,Lt,zt,ft.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt+1,Zt,Lt,zt,ft.image[st])}}}g(S)&&T(i.TEXTURE_CUBE_MAP),gt.__version=K.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Tt(I,S,H,W,K,gt){let Mt=r.convert(H.format,H.colorSpace),tt=r.convert(H.type),rt=v(H.internalFormat,Mt,tt,H.normalized,H.colorSpace),bt=n.get(S),Ut=n.get(H);if(Ut.__renderTarget=S,!bt.__hasExternalTextures){let St=Math.max(1,S.width>>gt),vt=Math.max(1,S.height>>gt);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,gt,rt,St,vt,S.depth,0,Mt,tt,null):e.texImage2D(K,gt,rt,St,vt,0,Mt,tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),$t(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,K,Ut.__webglTexture,0,Xt(S)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,K,Ut.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(I,S,H){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){let W=S.depthTexture,K=W&&W.isDepthTexture?W.type:null,gt=M(S.stencilBuffer,K),Mt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;$t(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt(S),gt,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt(S),gt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,gt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,I)}else{let W=S.textures;for(let K=0;K<W.length;K++){let gt=W[K],Mt=r.convert(gt.format,gt.colorSpace),tt=r.convert(gt.type),rt=v(gt.internalFormat,Mt,tt,gt.normalized,gt.colorSpace);$t(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt(S),rt,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt(S),rt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,rt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ne(I,S,H){let W=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(S.depthTexture);if(K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W){if(K.__webglInit===void 0&&(K.__webglInit=!0,S.depthTexture.addEventListener("dispose",E)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,S.depthTexture);let bt=r.convert(S.depthTexture.format),Ut=r.convert(S.depthTexture.type),St;S.depthTexture.format===ii?St=i.DEPTH_COMPONENT24:S.depthTexture.format===hi&&(St=i.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,St,S.width,S.height,0,bt,Ut,null)}}else Q(S.depthTexture,0);let gt=K.__webglTexture,Mt=Xt(S),tt=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,rt=S.depthTexture.format===hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===ii)$t(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,tt,gt,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,rt,tt,gt,0);else if(S.depthTexture.format===hi)$t(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,tt,gt,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,rt,tt,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(I){let S=n.get(I),H=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let W=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),W){let K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=W}if(I.depthTexture&&!S.__autoAllocateDepthBuffer)if(H)for(let W=0;W<6;W++)ne(S.__webglFramebuffer[W],I,W);else{let W=I.texture.mipmaps;W&&W.length>0?ne(S.__webglFramebuffer[0],I,0):ne(S.__webglFramebuffer,I,0)}else if(H){S.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[W]),S.__webglDepthbuffer[W]===void 0)S.__webglDepthbuffer[W]=i.createRenderbuffer(),Gt(S.__webglDepthbuffer[W],I,!1);else{let K=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=S.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,gt)}}else{let W=I.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Gt(S.__webglDepthbuffer,I,!1);else{let K=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,gt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(I,S,H){let W=n.get(I);S!==void 0&&Tt(W.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&it(I)}function ut(I){let S=I.texture,H=n.get(I),W=n.get(S);I.addEventListener("dispose",_);let K=I.textures,gt=I.isWebGLCubeRenderTarget===!0,Mt=K.length>1;if(Mt||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=S.version,a.memory.textures++),gt){H.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[tt]=[];for(let rt=0;rt<S.mipmaps.length;rt++)H.__webglFramebuffer[tt][rt]=i.createFramebuffer()}else H.__webglFramebuffer[tt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let tt=0;tt<S.mipmaps.length;tt++)H.__webglFramebuffer[tt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let tt=0,rt=K.length;tt<rt;tt++){let bt=n.get(K[tt]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&$t(I)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let tt=0;tt<K.length;tt++){let rt=K[tt];H.__webglColorRenderbuffer[tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[tt]);let bt=r.convert(rt.format,rt.colorSpace),Ut=r.convert(rt.type),St=v(rt.internalFormat,bt,Ut,rt.normalized,rt.colorSpace,I.isXRRenderTarget===!0),vt=Xt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,St,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,H.__webglColorRenderbuffer[tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Gt(H.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,S);for(let tt=0;tt<6;tt++)if(S.mipmaps&&S.mipmaps.length>0)for(let rt=0;rt<S.mipmaps.length;rt++)Tt(H.__webglFramebuffer[tt][rt],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,rt);else Tt(H.__webglFramebuffer[tt],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);g(S)&&T(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let tt=0,rt=K.length;tt<rt;tt++){let bt=K[tt],Ut=n.get(bt),St=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(St=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,Ut.__webglTexture),Yt(St,bt),Tt(H.__webglFramebuffer,I,bt,i.COLOR_ATTACHMENT0+tt,St,0),g(bt)&&T(St)}e.unbindTexture()}else{let tt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(tt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,W.__webglTexture),Yt(tt,S),S.mipmaps&&S.mipmaps.length>0)for(let rt=0;rt<S.mipmaps.length;rt++)Tt(H.__webglFramebuffer[rt],I,S,i.COLOR_ATTACHMENT0,tt,rt);else Tt(H.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,tt,0);g(S)&&T(tt),e.unbindTexture()}I.depthBuffer&&it(I)}function mt(I){let S=I.textures;for(let H=0,W=S.length;H<W;H++){let K=S[H];if(g(K)){let gt=w(I),Mt=n.get(K).__webglTexture;e.bindTexture(gt,Mt),T(gt),e.unbindTexture()}}}let yt=[],Vt=[];function kt(I){if(I.samples>0){if($t(I)===!1){let S=I.textures,H=I.width,W=I.height,K=i.COLOR_BUFFER_BIT,gt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(I),tt=S.length>1;if(tt)for(let bt=0;bt<S.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);let rt=I.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let bt=0;bt<S.length;bt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[bt]);let Ut=n.get(S[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ut,0)}i.blitFramebuffer(0,0,H,W,0,0,H,W,K,i.NEAREST),l===!0&&(yt.length=0,Vt.length=0,yt.push(i.COLOR_ATTACHMENT0+bt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(yt.push(gt),Vt.push(gt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,yt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),tt)for(let bt=0;bt<S.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[bt]);let Ut=n.get(S[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Xt(I){return Math.min(s.maxSamples,I.samples)}function $t(I){let S=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function B(I){let S=a.render.frame;h.get(I)!==S&&(h.set(I,S),I.update())}function ue(I,S){let H=I.colorSpace,W=I.format,K=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==Gr&&H!==Ci&&(de.getTransfer(H)===ye?(W!==Mn||K!==Qe)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",H)),S}function Qt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.getTextureUnits=L,this.setTextureUnits=F,this.setTexture2D=Q,this.setTexture2DArray=q,this.setTexture3D=nt,this.setTextureCube=et,this.rebindTextures=ct,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=$t,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Z_(i,t){function e(n,s=Ci){let r,a=de.getTransfer(s);if(n===Qe)return i.UNSIGNED_BYTE;if(n===ul)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ph)return i.BYTE;if(n===Ih)return i.SHORT;if(n===mr)return i.UNSIGNED_SHORT;if(n===hl)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===Zn)return i.FLOAT;if(n===Oe)return i.HALF_FLOAT;if(n===Uh)return i.ALPHA;if(n===Nh)return i.RGB;if(n===Mn)return i.RGBA;if(n===ii)return i.DEPTH_COMPONENT;if(n===hi)return i.DEPTH_STENCIL;if(n===Fh)return i.RED;if(n===fl)return i.RED_INTEGER;if(n===ts)return i.RG;if(n===pl)return i.RG_INTEGER;if(n===ml)return i.RGBA_INTEGER;if(n===ba||n===Ta||n===Ea||n===wa)if(a===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gl||n===xl||n===_l||n===vl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_l)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yl||n===Ml||n===Sl||n===bl||n===Tl||n===Aa||n===El)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yl||n===Ml)return a===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===bl)return r.COMPRESSED_R11_EAC;if(n===Tl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Aa)return r.COMPRESSED_RG11_EAC;if(n===El)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Dl||n===Ul||n===Nl||n===Fl||n===Ol||n===Bl||n===kl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Al)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Il)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ll)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ul)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ol)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zl||n===Hl||n===Gl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zl)return a===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vl||n===Wl||n===Ra||n===Xl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var $_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J_=`
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

}`,cu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Qr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Se({vertexShader:$_,fragmentShader:J_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _e(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hu=class extends si{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,y=typeof XRWebGLBinding<"u",m=new cu,g={},T=e.getContextAttributes(),w=null,v=null,M=[],x=[],E=new ot,_=null,b=null,A=new Ke;A.viewport=new De;let C=new Ke;C.viewport=new De;let D=[A,C],O=new sl,L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let j=M[G];return j===void 0&&(j=new nr,M[G]=j),j.getTargetRaySpace()},this.getControllerGrip=function(G){let j=M[G];return j===void 0&&(j=new nr,M[G]=j),j.getGripSpace()},this.getHand=function(G){let j=M[G];return j===void 0&&(j=new nr,M[G]=j),j.getHandSpace()};function z(G){let j=x.indexOf(G.inputSource);if(j===-1)return;let xt=M[j];xt!==void 0&&(xt.update(G.inputSource,G.frame,c||a),xt.dispatchEvent({type:G.type,data:G.inputSource}))}function V(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Q);for(let G=0;G<M.length;G++){let j=x[G];j!==null&&(x[G]=null,M[G].disconnect(j))}L=null,F=null,m.reset();for(let G in g)delete g[G];if(t.setRenderTarget(w),f=null,d=null,u=null,s=null,v=null,at.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(E.width,E.height,!1),b!==null){let G=b.camera;G.fov=b.fov,G.zoom=b.zoom,G.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Q),T.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(E),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,It=null,Tt=null;T.depth&&(Tt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=T.stencil?hi:ii,It=T.stencil?Qi:Yn);let Gt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Gt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Ne(d.textureWidth,d.textureHeight,{format:Mn,type:Qe,depthTexture:new oi(d.textureWidth,d.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let xt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ne(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:Qe,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),at.setContext(s),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(G){for(let j=0;j<G.removed.length;j++){let xt=G.removed[j],It=x.indexOf(xt);It>=0&&(x[It]=null,M[It].disconnect(xt))}for(let j=0;j<G.added.length;j++){let xt=G.added[j],It=x.indexOf(xt);if(It===-1){for(let Gt=0;Gt<M.length;Gt++)if(Gt>=x.length){x.push(xt),It=Gt;break}else if(x[Gt]===null){x[Gt]=xt,It=Gt;break}if(It===-1)break}let Tt=M[It];Tt&&Tt.connect(xt)}}let q=new N,nt=new N;function et(G,j,xt){q.setFromMatrixPosition(j.matrixWorld),nt.setFromMatrixPosition(xt.matrixWorld);let It=q.distanceTo(nt),Tt=j.projectionMatrix.elements,Gt=xt.projectionMatrix.elements,ne=Tt[14]/(Tt[10]-1),it=Tt[14]/(Tt[10]+1),ct=(Tt[9]+1)/Tt[5],ut=(Tt[9]-1)/Tt[5],mt=(Tt[8]-1)/Tt[0],yt=(Gt[8]+1)/Gt[0],Vt=ne*mt,kt=ne*yt,Xt=It/(-mt+yt),$t=Xt*-mt;if(j.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX($t),G.translateZ(Xt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Tt[10]===-1)G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let B=ne+Xt,ue=it+Xt,Qt=Vt-$t,I=kt+(It-$t),S=ct*it/ue*B,H=ut*it/ue*B;G.projectionMatrix.makePerspective(Qt,I,S,H,B,ue),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function Et(G,j){j===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(j.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let j=G.near,xt=G.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),O.near=C.near=A.near=j,O.far=C.far=A.far=xt,(L!==O.near||F!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),L=O.near,F=O.far),O.layers.mask=G.layers.mask|6,A.layers.mask=O.layers.mask&-5,C.layers.mask=O.layers.mask&-3;let It=G.parent,Tt=O.cameras;Et(O,It);for(let Gt=0;Gt<Tt.length;Gt++)Et(Tt[Gt],It);Tt.length===2?et(O,A,C):O.projectionMatrix.copy(A.projectionMatrix),b===null&&G.isPerspectiveCamera&&(b={camera:G,fov:G.fov,zoom:G.zoom}),At(G,O,It)};function At(G,j,xt){xt===null?G.matrix.copy(j.matrixWorld):(G.matrix.copy(xt.matrixWorld),G.matrix.invert(),G.matrix.multiply(j.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Xr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(G){return g[G]};let se=null;function Yt(G,j){if(h=j.getViewerPose(c||a),p=j,h!==null){let xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let It=!1;xt.length!==O.cameras.length&&(O.cameras.length=0,It=!0);for(let it=0;it<xt.length;it++){let ct=xt[it],ut=null;if(f!==null)ut=f.getViewport(ct);else{let yt=u.getViewSubImage(d,ct);ut=yt.viewport,it===0&&(t.setRenderTargetTextures(v,yt.colorTexture,yt.depthStencilTexture),t.setRenderTarget(v))}let mt=D[it];mt===void 0&&(mt=new Ke,mt.layers.enable(it),mt.viewport=new De,D[it]=mt),mt.matrix.fromArray(ct.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(ct.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(ut.x,ut.y,ut.width,ut.height),it===0&&(O.matrix.copy(mt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),It===!0&&O.cameras.push(mt)}let Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let it=u.getDepthInformation(xt[0]);it&&it.isValid&&it.texture&&m.init(it,s.renderState)}if(Tt&&Tt.includes("camera-access")&&y){t.state.unbindTexture(),u=n.getBinding();for(let it=0;it<xt.length;it++){let ct=xt[it].camera;if(ct){let ut=g[ct];ut||(ut=new Qr,g[ct]=ut);let mt=u.getCameraImage(ct);ut.sourceTexture=mt}}}}for(let xt=0;xt<M.length;xt++){let It=x[xt],Tt=M[xt];It!==null&&Tt!==void 0&&Tt.update(It,j,c||a)}se&&se(G,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),p=null}let at=new zf;at.setAnimationLoop(Yt),this.setAnimationLoop=function(G){se=G},this.dispose=function(){}}},K_=new ce,qf=new jt;qf.set(-1,0,0,0,1,0,0,0,1);function j_(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Hh(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,T,w,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),y(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,T,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===fn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===fn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let T=t.get(g),w=T.envMap,v=T.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(K_.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(qf),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,T,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*T,m.scale.value=w*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,T){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===fn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function y(m,g){let T=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Q_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let x=M.program;n.uniformBlockBinding(v,x)}function c(v,M){let x=s[v.id];x===void 0&&(m(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",T));let E=M.program;n.updateUBOMapping(v,E);let _=t.render.frame;r[v.id]!==_&&(d(v),r[v.id]=_)}function h(v){let M=u();v.__bindingPointIndex=M;let x=i.createBuffer(),E=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,E,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let M=s[v.id],x=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let _=0,b=x.length;_<b;_++){let A=x[_];if(Array.isArray(A))for(let C=0,D=A.length;C<D;C++)f(A[C],_,C,E);else f(A,_,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,M,x,E){if(y(v,M,x,E)===!0){let _=v.__offset,b=v.value;if(Array.isArray(b)){let A=0;for(let C=0;C<b.length;C++){let D=b[C],O=g(D);p(D,v.__data,A),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(A+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(b,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function p(v,M,x){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,x)}function y(v,M,x,E){let _=v.value,b=M+"_"+x;if(E[b]===void 0)return typeof _=="number"||typeof _=="boolean"?E[b]=_:ArrayBuffer.isView(_)?E[b]=_.slice():E[b]=_.clone(),!0;{let A=E[b];if(typeof _=="number"||typeof _=="boolean"){if(A!==_)return E[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(A.equals(_)===!1)return A.copy(_),!0}}return!1}function m(v){let M=v.uniforms,x=0,E=16;for(let b=0,A=M.length;b<A;b++){let C=Array.isArray(M[b])?M[b]:[M[b]];for(let D=0,O=C.length;D<O;D++){let L=C[D],F=Array.isArray(L.value)?L.value:[L.value];for(let z=0,V=F.length;z<V;z++){let Q=F[z],q=g(Q),nt=x%E,et=nt%q.boundary,Et=nt+et;x+=et,Et!==0&&E-Et<q.storage&&(x+=E-Et),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=q.storage}}}let _=x%E;return _>0&&(x+=E-_),v.__size=x,v.__cache={},this}function g(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",v),M}function T(v){let M=v.target;M.removeEventListener("dispose",T);let x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function w(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}var tv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ui=null;function ev(){return ui===null&&(ui=new Xi(tv,16,16,ts,Oe),ui.name="DFG_LUT",ui.minFilter=tn,ui.magFilter=tn,ui.wrapS=ei,ui.wrapT=ei,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}var Kl=class{constructor(t={}){let{canvas:e=lf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Qe}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let y=f,m=new Set([ml,pl,fl]),g=new Set([Qe,Yn,mr,Qi,ul,dl]),T=new Uint32Array(4),w=new Int32Array(4),v=new N,M=null,x=null,E=[],_=[],b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,C=!1,D=null,O=null,L=null,F=null;this._outputColorSpace=qe;let z=0,V=0,Q=null,q=-1,nt=null,et=new De,Et=new De,At=null,se=new Ht(0),Yt=0,at=e.width,G=e.height,j=1,xt=null,It=null,Tt=new De(0,0,at,G),Gt=new De(0,0,at,G),ne=!1,it=new rr,ct=!1,ut=!1,mt=new ce,yt=new N,Vt=new De,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xt=!1;function $t(){return Q===null?j:1}let B=n;function ue(R,k){return e.getContext(R,k)}let Qt,I,S,H,W,K,gt,Mt,tt,rt,bt,Ut,St,vt,Lt,zt,Zt,P,$,X,lt,dt,st;try{let R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ft,!1),e.addEventListener("webglcontextrestored",qt,!1),e.addEventListener("webglcontextcreationerror",Ge,!1),B===null){let k="webgl2";if(B=ue(k,R),B===null)throw ue(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}wt()}catch(R){throw e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",Ge,!1),Kt("WebGLRenderer: "+R.message),R}function wt(){Qt=new l1(B),Qt.init(),lt=new Z_(B,Qt),I=new jx(B,Qt,t,lt),S=new q_(B,Qt),I.reversedDepthBuffer&&d&&S.buffers.depth.setReversed(!0),O=B.createFramebuffer(),L=B.createFramebuffer(),F=B.createFramebuffer(),H=new u1(B),W=new L_,K=new Y_(B,Qt,S,W,I,lt,H),gt=new o1(A),Mt=new f0(B),dt=new Jx(B,Mt),tt=new c1(B,Mt,H,dt),rt=new f1(B,tt,Mt,dt,H),P=new d1(B,I,K),Lt=new Qx(W),bt=new I_(A,gt,Qt,I,dt,Lt),Ut=new j_(A,W),St=new U_,vt=new z_(Qt),Zt=new $x(A,gt,S,rt,p,l),zt=new X_(A,rt,I),st=new Q_(B,H,I,S),$=new Kx(B,Qt,H),X=new h1(B,Qt,H),H.programs=bt.programs,A.capabilities=I,A.extensions=Qt,A.properties=W,A.renderLists=St,A.shadowMap=zt,A.state=S,A.info=H}y!==Qe&&(b=new m1(y,e.width,e.height,o,s,r));let ft=new hu(A,B);this.xr=ft,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let R=Qt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Qt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(at,G,!1))},this.getSize=function(R){return R.set(at,G)},this.setSize=function(R,k,J=!0){if(ft.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}at=R,G=k,e.width=Math.floor(R*j),e.height=Math.floor(k*j),J===!0&&(e.style.width=R+"px",e.style.height=k+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(at*j,G*j).floor()},this.setDrawingBufferSize=function(R,k,J){at=R,G=k,j=J,e.width=Math.floor(R*J),e.height=Math.floor(k*J),this.setViewport(0,0,R,k)},this.setEffects=function(R){if(y===Qe){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let k=0;k<R.length;k++)if(R[k].isOutputPass===!0){Jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(et)},this.getViewport=function(R){return R.copy(Tt)},this.setViewport=function(R,k,J,Y){R.isVector4?Tt.set(R.x,R.y,R.z,R.w):Tt.set(R,k,J,Y),S.viewport(et.copy(Tt).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(Gt)},this.setScissor=function(R,k,J,Y){R.isVector4?Gt.set(R.x,R.y,R.z,R.w):Gt.set(R,k,J,Y),S.scissor(Et.copy(Gt).multiplyScalar(j).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(R){S.setScissorTest(ne=R)},this.setOpaqueSort=function(R){xt=R},this.setTransparentSort=function(R){It=R},this.getClearColor=function(R){return R.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(R=!0,k=!0,J=!0){let Y=0;if(R){let Z=!1;if(Q!==null){let Pt=Q.texture.format;Z=m.has(Pt)}if(Z){let Pt=Q.texture.type,Nt=g.has(Pt),Ct=Zt.getClearColor(),Ot=Zt.getClearAlpha(),Wt=Ct.r,re=Ct.g,le=Ct.b;Nt?(T[0]=Wt,T[1]=re,T[2]=le,T[3]=Ot,B.clearBufferuiv(B.COLOR,0,T)):(w[0]=Wt,w[1]=re,w[2]=le,w[3]=Ot,B.clearBufferiv(B.COLOR,0,w))}else Y|=B.COLOR_BUFFER_BIT}k&&(Y|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),D=R},this.dispose=function(){e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",Ge,!1),Zt.dispose(),St.dispose(),vt.dispose(),W.dispose(),gt.dispose(),rt.dispose(),dt.dispose(),st.dispose(),bt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",as),ft.removeEventListener("sessionend",Pr),vi.stop()};function Ft(R){R.preventDefault(),kh("WebGLRenderer: Context Lost."),C=!0}function qt(){kh("WebGLRenderer: Context Restored."),C=!1;let R=H.autoReset,k=zt.enabled,J=zt.autoUpdate,Y=zt.needsUpdate,Z=zt.type;wt(),H.autoReset=R,zt.enabled=k,zt.autoUpdate=J,zt.needsUpdate=Y,zt.type=Z}function Ge(R){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function En(R){let k=R.target;k.removeEventListener("dispose",En),Za(k)}function Za(R){$a(R),W.remove(R)}function $a(R){let k=W.get(R).programs;k!==void 0&&(k.forEach(function(J){bt.releaseProgram(J)}),R.isShaderMaterial&&bt.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,J,Y,Z,Pt){k===null&&(k=kt);let Nt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Ct=Yp(R,k,J,Y,Z);S.setMaterial(Y,Nt);let Ot=J.index,Wt=1;if(Y.wireframe===!0){if(Ot=tt.getWireframeAttribute(J),Ot===void 0)return;Wt=2}let re=J.drawRange,le=J.attributes.position,Bt=re.start*Wt,ve=(re.start+re.count)*Wt;Pt!==null&&(Bt=Math.max(Bt,Pt.start*Wt),ve=Math.min(ve,(Pt.start+Pt.count)*Wt)),Ot!==null?(Bt=Math.max(Bt,0),ve=Math.min(ve,Ot.count)):le!=null&&(Bt=Math.max(Bt,0),ve=Math.min(ve,le.count));let Ve=ve-Bt;if(Ve<0||Ve===1/0)return;dt.setup(Z,Y,Ct,J,Ot);let Re,Te=$;if(Ot!==null&&(Re=Mt.get(Ot),Te=X,Te.setIndex(Re)),Z.isMesh)Y.wireframe===!0?(S.setLineWidth(Y.wireframeLinewidth*$t()),Te.setMode(B.LINES)):Te.setMode(B.TRIANGLES);else if(Z.isLine){let sn=Y.linewidth;sn===void 0&&(sn=1),S.setLineWidth(sn*$t()),Z.isLineSegments?Te.setMode(B.LINES):Z.isLineLoop?Te.setMode(B.LINE_LOOP):Te.setMode(B.LINE_STRIP)}else Z.isPoints?Te.setMode(B.POINTS):Z.isSprite&&Te.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(Qt.get("WEBGL_multi_draw"))Te.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let sn=Z._multiDrawStarts,Dt=Z._multiDrawCounts,cn=Z._multiDrawCount,me=Ot?Mt.get(Ot).bytesPerElement:1,Un=W.get(Y).currentProgram.getUniforms();for(let Qn=0;Qn<cn;Qn++)Un.setValue(B,"_gl_DrawID",Qn),Te.render(sn[Qn]/me,Dt[Qn])}else if(Z.isInstancedMesh)Te.renderInstances(Bt,Ve,Z.count);else if(J.isInstancedBufferGeometry){let sn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Dt=Math.min(J.instanceCount,sn);Te.renderInstances(Bt,Ve,Dt)}else Te.render(Bt,Ve)};function ke(R,k,J,Y){D!==null&&R.isNodeMaterial&&D.setObject(Y,R),ct===!0&&Lt.setState(R,J,!1),R.transparent===!0&&R.side===pn&&R.forceSinglePass===!1?(R.side=fn,R.needsUpdate=!0,ja(R,k,Y),R.side=Ji,R.needsUpdate=!0,ja(R,k,Y),R.side=pn):ja(R,k,Y)}this.compile=function(R,k,J=null){J===null&&(J=R),D!==null&&D.renderStart(R,k,J),x=vt.get(J),x.init(k),_.push(x),J.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),R!==J&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),ut=this.localClippingEnabled,ct=Lt.init(this.clippingPlanes,ut),ct===!0&&Lt.setGlobalState(this.clippingPlanes,k),D!==null&&zt.render(x.state.shadowsArray,J,k);let Y=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Pt=Z.material;if(Pt)if(Array.isArray(Pt))for(let Nt=0;Nt<Pt.length;Nt++){let Ct=Pt[Nt];ke(Ct,J,k,Z),Y.add(Ct)}else ke(Pt,J,k,Z),Y.add(Pt)}),x=_.pop(),D!==null&&D.renderEnd(),Y},this.compileAsync=function(R,k,J=null){let Y=this.compile(R,k,J);return new Promise(Z=>{function Pt(){if(Y.forEach(function(Nt){let Ot=W.get(Nt).currentProgram;(Ot===void 0||Ot.isReady())&&Y.delete(Nt)}),Y.size===0){Z(R);return}setTimeout(Pt,10)}Qt.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let jn=null;function Ja(R){jn&&jn(R)}function as(){vi.stop()}function Pr(){vi.start()}let vi=new zf;vi.setAnimationLoop(Ja),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(R){jn=R,ft.setAnimationLoop(R),R===null?vi.stop():vi.start()},ft.addEventListener("sessionstart",as),ft.addEventListener("sessionend",Pr),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;D!==null&&D.renderStart(R,k);let J=ft.enabled===!0&&ft.isPresenting===!0,Y=b!==null&&(Q===null||J)&&b.begin(A,Q);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(k),k=ft.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,k,Q),x=vt.get(R,_.length),x.init(k),x.state.textureUnits=K.getTextureUnits(),_.push(x),mt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),it.setFromProjectionMatrix(mt,Xn,k.reversedDepth),ut=this.localClippingEnabled,ct=Lt.init(this.clippingPlanes,ut),M=St.get(R,E.length),M.init(),E.push(M),ft.enabled===!0&&ft.isPresenting===!0){let Nt=A.xr.getDepthSensingMesh();Nt!==null&&Ir(Nt,k,-1/0,A.sortObjects)}Ir(R,k,0,A.sortObjects),M.finish(),D!==null&&D.updateLights(x.state.lightsArray),A.sortObjects===!0&&M.sort(xt,It),Xt=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Xt&&Zt.addToRenderList(M,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&Lt.beginShadows();let Z=x.state.shadowsArray;if(zt.render(Z,R,k),ct===!0&&Lt.endShadows(),(Y&&b.hasRenderPass())===!1){let Nt=M.opaque,Ct=M.transmissive;if(x.setupLights(),k.isArrayCamera){let Ot=k.cameras;if(Ct.length>0)for(let Wt=0,re=Ot.length;Wt<re;Wt++){let le=Ot[Wt];Zu(Nt,Ct,R,le)}Xt&&Zt.render(R);for(let Wt=0,re=Ot.length;Wt<re;Wt++){let le=Ot[Wt];Yu(M,R,le,le.viewport)}}else Ct.length>0&&Zu(Nt,Ct,R,k),Xt&&Zt.render(R),Yu(M,R,k)}Q!==null&&V===0&&(K.updateMultisampleRenderTarget(Q),K.updateRenderTargetMipmap(Q)),Y&&b.end(A),R.isScene===!0&&R.onAfterRender(A,R,k),dt.resetDefaultState(),q=-1,nt=null,_.pop(),_.length>0?(x=_[_.length-1],K.setTextureUnits(x.state.textureUnits),ct===!0&&Lt.setGlobalState(A.clippingPlanes,x.state.camera)):x=null,E.pop(),E.length>0?M=E[E.length-1]:M=null,D!==null&&D.renderEnd()};function Ir(R,k,J,Y){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)J=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLightProbeGrid)x.pushLightProbeGrid(R);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(it)){Y&&Vt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(mt);let Nt=rt.update(R),Ct=R.material;Ct.visible&&M.push(R,Nt,Ct,J,Vt.z,null,k)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(it))){let Nt=rt.update(R),Ct=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Vt.copy(R.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),Vt.copy(Nt.boundingSphere.center)),Vt.applyMatrix4(R.matrixWorld).applyMatrix4(mt)),Array.isArray(Ct)){let Ot=Nt.groups;for(let Wt=0,re=Ot.length;Wt<re;Wt++){let le=Ot[Wt],Bt=Ct[le.materialIndex];Bt&&Bt.visible&&M.push(R,Nt,Bt,J,Vt.z,le,k)}}else Ct.visible&&M.push(R,Nt,Ct,J,Vt.z,null,k)}}let Pt=R.children;for(let Nt=0,Ct=Pt.length;Nt<Ct;Nt++)Ir(Pt[Nt],k,J,Y)}function Yu(R,k,J,Y){let{opaque:Z,transmissive:Pt,transparent:Nt}=R;x.setupLightsView(J),ct===!0&&Lt.setGlobalState(A.clippingPlanes,J),Y&&S.viewport(et.copy(Y)),Z.length>0&&Ka(Z,k,J),Pt.length>0&&Ka(Pt,k,J),Nt.length>0&&Ka(Nt,k,J),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Zu(R,k,J,Y){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[Y.id]===void 0){let Bt=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");x.state.transmissionRenderTarget[Y.id]=new Ne(1,1,{generateMipmaps:!0,type:Bt?Oe:Qe,minFilter:ji,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:de.workingColorSpace})}let Pt=x.state.transmissionRenderTarget[Y.id],Nt=Y.viewport||et;Pt.setSize(Nt.z*A.transmissionResolutionScale,Nt.w*A.transmissionResolutionScale);let Ct=A.getRenderTarget(),Ot=A.getActiveCubeFace(),Wt=A.getActiveMipmapLevel();A.setRenderTarget(Pt),A.getClearColor(se),Yt=A.getClearAlpha(),Yt<1&&A.setClearColor(16777215,.5),A.clear(),Xt&&Zt.render(J);let re=A.toneMapping;A.toneMapping=qn;let le=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),x.setupLightsView(Y),ct===!0&&Lt.setGlobalState(A.clippingPlanes,Y),Ka(R,J,Y),K.updateMultisampleRenderTarget(Pt),K.updateRenderTargetMipmap(Pt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let ve=0,Ve=k.length;ve<Ve;ve++){let Re=k[ve],{object:Te,geometry:sn,material:Dt,group:cn}=Re;if(Dt.side===pn&&Te.layers.test(Y.layers)){let me=Dt.side;Dt.side=fn,Dt.needsUpdate=!0,$u(Te,J,Y,sn,Dt,cn),Dt.side=me,Dt.needsUpdate=!0,Bt=!0}}Bt===!0&&(K.updateMultisampleRenderTarget(Pt),K.updateRenderTargetMipmap(Pt))}A.setRenderTarget(Ct,Ot,Wt),A.setClearColor(se,Yt),le!==void 0&&(Y.viewport=le),A.toneMapping=re}function Ka(R,k,J){let Y=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,Pt=R.length;Z<Pt;Z++){let Nt=R[Z],{object:Ct,geometry:Ot,group:Wt}=Nt,re=Nt.material;re.allowOverride===!0&&Y!==null&&(re=Y),Ct.layers.test(J.layers)&&$u(Ct,k,J,Ot,re,Wt)}}function $u(R,k,J,Y,Z,Pt){D!==null&&Z.isNodeMaterial&&D.setObject(R,Z),R.onBeforeRender(A,k,J,Y,Z,Pt),R.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(A,k,J,Y,R,Pt),Z.transparent===!0&&Z.side===pn&&Z.forceSinglePass===!1?(Z.side=fn,Z.needsUpdate=!0,A.renderBufferDirect(J,k,Y,Z,R,Pt),Z.side=Ji,Z.needsUpdate=!0,A.renderBufferDirect(J,k,Y,Z,R,Pt),Z.side=pn):A.renderBufferDirect(J,k,Y,Z,R,Pt),R.onAfterRender(A,k,J,Y,Z,Pt)}function ja(R,k,J){k.isScene!==!0&&(k=kt);let Y=W.get(R),Z=x.state.lights,Pt=x.state.shadowsArray,Nt=Z.state.version,Ct=bt.getParameters(R,Z.state,Pt,k,J,x.state.lightProbeGridArray),Ot=bt.getProgramCacheKey(Ct),Wt=Y.programs;Y.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?k.environment:null,Y.fog=k.fog;let re=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;Y.envMap=gt.get(R.envMap||Y.environment,re),Y.envMapRotation=Y.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,Wt===void 0&&(R.addEventListener("dispose",En),Wt=new Map,Y.programs=Wt);let le=Wt.get(Ot);if(le!==void 0){if(Y.currentProgram===le&&Y.lightsStateVersion===Nt)return Ku(R,Ct),le}else Ct.uniforms=bt.getUniforms(R),D!==null&&R.isNodeMaterial&&D.build(R,J,Ct),R.onBeforeCompile(Ct,A),le=bt.acquireProgram(Ct,Ot),Wt.set(Ot,le),Y.uniforms=Ct.uniforms;let Bt=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Bt.clippingPlanes=Lt.uniform),Ku(R,Ct),Y.needsLights=$p(R),Y.lightsStateVersion=Nt,Y.needsLights&&(Bt.ambientLightColor.value=Z.state.ambient,Bt.lightProbe.value=Z.state.probe,Bt.sunLights.value=Z.state.sun,Bt.sunLightShadows.value=Z.state.sunShadow,Bt.directionalLights.value=Z.state.directional,Bt.directionalLightShadows.value=Z.state.directionalShadow,Bt.spotLights.value=Z.state.spot,Bt.spotLightShadows.value=Z.state.spotShadow,Bt.rectAreaLights.value=Z.state.rectArea,Bt.ltc_1.value=Z.state.rectAreaLTC1,Bt.ltc_2.value=Z.state.rectAreaLTC2,Bt.pointLights.value=Z.state.point,Bt.pointLightShadows.value=Z.state.pointShadow,Bt.hemisphereLights.value=Z.state.hemi,Bt.sunShadowMatrix.value=Z.state.sunShadowMatrix,Bt.sunShadowCascade.value=Z.state.sunShadowCascade,Bt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Bt.spotLightMatrix.value=Z.state.spotLightMatrix,Bt.spotLightMap.value=Z.state.spotLightMap,Bt.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=x.state.lightProbeGridArray.length>0,Y.currentProgram=le,Y.uniformsList=null,le}function Ju(R){if(R.uniformsList===null){let k=R.currentProgram.getUniforms();R.uniformsList=vr.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function Ku(R,k){let J=W.get(R);J.outputColorSpace=k.outputColorSpace,J.batching=k.batching,J.batchingColor=k.batchingColor,J.instancing=k.instancing,J.instancingColor=k.instancingColor,J.instancingMorph=k.instancingMorph,J.skinning=k.skinning,J.morphTargets=k.morphTargets,J.morphNormals=k.morphNormals,J.morphColors=k.morphColors,J.morphTargetsCount=k.morphTargetsCount,J.numClippingPlanes=k.numClippingPlanes,J.numIntersection=k.numClipIntersection,J.vertexAlphas=k.vertexAlphas,J.vertexTangents=k.vertexTangents,J.toneMapping=k.toneMapping}function qp(R,k){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;v.setFromMatrixPosition(k.matrixWorld);for(let J=0,Y=R.length;J<Y;J++){let Z=R[J];if(Z.texture!==null&&Z.boundingBox.containsPoint(v))return Z}return null}function Yp(R,k,J,Y,Z){k.isScene!==!0&&(k=kt),K.resetTextureUnits();let Pt=k.fog,Nt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?k.environment:null,Ct=Q===null?A.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:de.workingColorSpace,Ot=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Wt=gt.get(Y.envMap||Nt,Ot),re=Y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,le=!!J.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Bt=!!J.morphAttributes.position,ve=!!J.morphAttributes.normal,Ve=!!J.morphAttributes.color,Re=qn;Y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Re=A.toneMapping);let Te=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,sn=Te!==void 0?Te.length:0,Dt=W.get(Y),cn=x.state.lights;if(ct===!0&&(ut===!0||R!==nt)){let Ae=R===nt&&Y.id===q;Lt.setState(Y,R,Ae)}let me=!1;Y.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==cn.state.version||Dt.outputColorSpace!==Ct||Z.isBatchedMesh&&Dt.batching===!1||!Z.isBatchedMesh&&Dt.batching===!0||Z.isBatchedMesh&&Dt.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Dt.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Dt.instancing===!1||!Z.isInstancedMesh&&Dt.instancing===!0||Z.isSkinnedMesh&&Dt.skinning===!1||!Z.isSkinnedMesh&&Dt.skinning===!0||Z.isInstancedMesh&&Dt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Dt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Dt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Dt.instancingMorph===!1&&Z.morphTexture!==null||Dt.envMap!==Wt||Y.fog===!0&&Dt.fog!==Pt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==Lt.numPlanes||Dt.numIntersection!==Lt.numIntersection)||Dt.vertexAlphas!==re||Dt.vertexTangents!==le||Dt.morphTargets!==Bt||Dt.morphNormals!==ve||Dt.morphColors!==Ve||Dt.toneMapping!==Re||Dt.morphTargetsCount!==sn||!!Dt.lightProbeGrid!=x.state.lightProbeGridArray.length>0)&&(me=!0):(me=!0,Dt.__version=Y.version);let Un=Dt.currentProgram;me===!0&&(Un=ja(Y,k,Z),D&&Y.isNodeMaterial&&D.onUpdateProgram(Y,Un,Dt));let Qn=!1,Fi=!1,Ns=!1,be=Un.getUniforms(),ze=Dt.uniforms;if(S.useProgram(Un.program)&&(Qn=!0,Fi=!0,Ns=!0),Y.id!==q&&(q=Y.id,Fi=!0),Dt.needsLights){let Ae=qp(x.state.lightProbeGridArray,Z);Dt.lightProbeGrid!==Ae&&(Dt.lightProbeGrid=Ae,Fi=!0)}if(Qn||nt!==R){S.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),be.setValue(B,"projectionMatrix",R.projectionMatrix),be.setValue(B,"viewMatrix",R.matrixWorldInverse);let Bi=be.map.cameraPosition;Bi!==void 0&&Bi.setValue(B,yt.setFromMatrixPosition(R.matrixWorld)),I.logarithmicDepthBuffer&&be.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&be.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),nt!==R&&(nt=R,Fi=!0,Ns=!0)}if(Dt.needsLights&&(cn.state.sunShadowMap.length>0&&be.setValue(B,"sunShadowMap",cn.state.sunShadowMap,K),cn.state.directionalShadowMap.length>0&&be.setValue(B,"directionalShadowMap",cn.state.directionalShadowMap,K),cn.state.spotShadowMap.length>0&&be.setValue(B,"spotShadowMap",cn.state.spotShadowMap,K),cn.state.pointShadowMap.length>0&&be.setValue(B,"pointShadowMap",cn.state.pointShadowMap,K)),Z.isSkinnedMesh){be.setOptional(B,Z,"bindMatrix"),be.setOptional(B,Z,"bindMatrixInverse");let Ae=Z.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),be.setValue(B,"boneTexture",Ae.boneTexture,K))}Z.isBatchedMesh&&(be.setOptional(B,Z,"batchingTexture"),be.setValue(B,"batchingTexture",Z._matricesTexture,K),be.setOptional(B,Z,"batchingIdTexture"),be.setValue(B,"batchingIdTexture",Z._indirectTexture,K),be.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&be.setValue(B,"batchingColorTexture",Z._colorsTexture,K));let Oi=J.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&P.update(Z,J,Un),(Fi||Dt.receiveShadow!==Z.receiveShadow)&&(Dt.receiveShadow=Z.receiveShadow,be.setValue(B,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&k.environment!==null&&(ze.envMapIntensity.value=k.environmentIntensity),ze.dfgLUT!==void 0&&(ze.dfgLUT.value=ev()),Fi){if(be.setValue(B,"toneMappingExposure",A.toneMappingExposure),Dt.needsLights&&Zp(ze,Ns),Pt&&Y.fog===!0&&Ut.refreshFogUniforms(ze,Pt),Ut.refreshMaterialUniforms(ze,Y,j,G,x.state.transmissionRenderTarget[R.id]),Dt.needsLights&&Dt.lightProbeGrid){let Ae=Dt.lightProbeGrid;ze.probesSH.value=Ae.texture,ze.probesMin.value.copy(Ae.boundingBox.min),ze.probesMax.value.copy(Ae.boundingBox.max),ze.probesResolution.value.copy(Ae.resolution)}vr.upload(B,Ju(Dt),ze,K)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(vr.upload(B,Ju(Dt),ze,K),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&be.setValue(B,"center",Z.center),be.setValue(B,"modelViewMatrix",Z.modelViewMatrix),be.setValue(B,"normalMatrix",Z.normalMatrix),be.setValue(B,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let Ae=Y.uniformsGroups;for(let Bi=0,Fs=Ae.length;Bi<Fs;Bi++){let Qu=Ae[Bi];st.update(Qu,Un),st.bind(Qu,Un)}}return Un}function Zp(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.sunLights.needsUpdate=k,R.sunLightShadows.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function $p(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(R,k,J){let Y=W.get(R);Y.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),W.get(R.texture).__webglTexture=k,W.get(R.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:J,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,k){let J=W.get(R);J.__webglFramebuffer=k,J.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,J=0){Q=R,z=k,V=J;let Y=null,Z=!1,Pt=!1;if(R){let Ct=W.get(R);if(Ct.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(B.FRAMEBUFFER,Ct.__webglFramebuffer),et.copy(R.viewport),Et.copy(R.scissor),At=R.scissorTest,S.viewport(et),S.scissor(Et),S.setScissorTest(At),q=-1;return}else if(Ct.__webglFramebuffer===void 0)K.setupRenderTarget(R);else if(Ct.__hasExternalTextures)K.rebindTextures(R,W.get(R.texture).__webglTexture,W.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let re=R.depthTexture;if(Ct.__boundDepthTexture!==re){if(re!==null&&W.has(re)&&(R.width!==re.image.width||R.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(R)}}let Ot=R.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Pt=!0);let Wt=W.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Wt[k])?Y=Wt[k][J]:Y=Wt[k],Z=!0):R.samples>0&&K.useMultisampledRTT(R)===!1?Y=W.get(R).__webglMultisampledFramebuffer:Array.isArray(Wt)?Y=Wt[J]:Y=Wt,et.copy(R.viewport),Et.copy(R.scissor),At=R.scissorTest}else et.copy(Tt).multiplyScalar(j).floor(),Et.copy(Gt).multiplyScalar(j).floor(),At=ne;if(J!==0&&(Y=O),S.bindFramebuffer(B.FRAMEBUFFER,Y)&&S.drawBuffers(R,Y),S.viewport(et),S.scissor(Et),S.setScissorTest(At),Z){let Ct=W.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ct.__webglTexture,J)}else if(Pt){let Ct=k;for(let Ot=0;Ot<R.textures.length;Ot++){let Wt=W.get(R.textures[Ot]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ot,Wt.__webglTexture,J,Ct)}}else if(R!==null&&J!==0){let Ct=W.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ct.__webglTexture,J)}q=-1};function ju(R){let k=W.get(R);return(k.__readFormat!==R.format||k.__readType!==R.type)&&(k.__readFormat=R.format,k.__readType=R.type,k.__formatReadable=I.textureFormatReadable(R.format),k.__typeReadable=I.textureTypeReadable(R.type)),k}this.readRenderTargetPixels=function(R,k,J,Y,Z,Pt,Nt,Ct=0){if(!(R&&R.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=W.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ot=Ot[Nt]),Ot){S.bindFramebuffer(B.FRAMEBUFFER,Ot);try{let Wt=R.textures[Ct],re=Wt.format,le=Wt.type;R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ct);let Bt=ju(Wt);if(Bt.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Bt.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-Y&&J>=0&&J<=R.height-Z&&B.readPixels(k,J,Y,Z,lt.convert(re),lt.convert(le),Pt)}finally{let Wt=Q!==null?W.get(Q).__webglFramebuffer:null;S.bindFramebuffer(B.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(R,k,J,Y,Z,Pt,Nt,Ct=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=W.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ot=Ot[Nt]),Ot)if(k>=0&&k<=R.width-Y&&J>=0&&J<=R.height-Z){S.bindFramebuffer(B.FRAMEBUFFER,Ot);let Wt=R.textures[Ct],re=Wt.format,le=Wt.type;R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ct);let Bt=ju(Wt);if(Bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ve),B.bufferData(B.PIXEL_PACK_BUFFER,Pt.byteLength,B.STREAM_READ),B.readPixels(k,J,Y,Z,lt.convert(re),lt.convert(le),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Ve=Q!==null?W.get(Q).__webglFramebuffer:null;S.bindFramebuffer(B.FRAMEBUFFER,Ve);let Re=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await hf(B,Re,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ve),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Pt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ve),B.deleteSync(Re),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,k=null,J=0){let Y=Math.pow(2,-J),Z=Math.floor(R.image.width*Y),Pt=Math.floor(R.image.height*Y),Nt=k!==null?k.x:0,Ct=k!==null?k.y:0;K.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,J,0,0,Nt,Ct,Z,Pt),S.unbindTexture()},this.copyTextureToTexture=function(R,k,J=null,Y=null,Z=0,Pt=0){let Nt,Ct,Ot,Wt,re,le,Bt,ve,Ve,Re=R.isCompressedTexture?R.mipmaps[Pt]:R.image;if(J!==null)Nt=J.max.x-J.min.x,Ct=J.max.y-J.min.y,Ot=J.isBox3?J.max.z-J.min.z:1,Wt=J.min.x,re=J.min.y,le=J.isBox3?J.min.z:0;else{let ze=Math.pow(2,-Z);Nt=Math.floor(Re.width*ze),Ct=Math.floor(Re.height*ze),R.isDataArrayTexture?Ot=Re.depth:R.isData3DTexture?Ot=Math.floor(Re.depth*ze):Ot=1,Wt=0,re=0,le=0}Y!==null?(Bt=Y.x,ve=Y.y,Ve=Y.z):(Bt=0,ve=0,Ve=0);let Te=lt.convert(k.format),sn=lt.convert(k.type),Dt;k.isData3DTexture?(K.setTexture3D(k,0),Dt=B.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(K.setTexture2DArray(k,0),Dt=B.TEXTURE_2D_ARRAY):(K.setTexture2D(k,0),Dt=B.TEXTURE_2D),S.activeTexture(B.TEXTURE0),S.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),S.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),S.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);let cn=S.getParameter(B.UNPACK_ROW_LENGTH),me=S.getParameter(B.UNPACK_IMAGE_HEIGHT),Un=S.getParameter(B.UNPACK_SKIP_PIXELS),Qn=S.getParameter(B.UNPACK_SKIP_ROWS),Fi=S.getParameter(B.UNPACK_SKIP_IMAGES);S.pixelStorei(B.UNPACK_ROW_LENGTH,Re.width),S.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Re.height),S.pixelStorei(B.UNPACK_SKIP_PIXELS,Wt),S.pixelStorei(B.UNPACK_SKIP_ROWS,re),S.pixelStorei(B.UNPACK_SKIP_IMAGES,le);let Ns=R.isDataArrayTexture||R.isData3DTexture,be=k.isDataArrayTexture||k.isData3DTexture;if(R.isDepthTexture){let ze=W.get(R),Oi=W.get(k),Ae=W.get(ze.__renderTarget),Bi=W.get(Oi.__renderTarget);S.bindFramebuffer(B.READ_FRAMEBUFFER,Ae.__webglFramebuffer),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Fs=0;Fs<Ot;Fs++)Ns&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,W.get(R).__webglTexture,Z,le+Fs),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,W.get(k).__webglTexture,Pt,Ve+Fs)),B.blitFramebuffer(Wt,re,Nt,Ct,Bt,ve,Nt,Ct,B.DEPTH_BUFFER_BIT,B.NEAREST);S.bindFramebuffer(B.READ_FRAMEBUFFER,null),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||W.has(R)){let ze=W.get(R),Oi=W.get(k);S.bindFramebuffer(B.READ_FRAMEBUFFER,L),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,F);for(let Ae=0;Ae<Ot;Ae++)Ns?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ze.__webglTexture,Z,le+Ae):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ze.__webglTexture,Z),be?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Oi.__webglTexture,Pt,Ve+Ae):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Oi.__webglTexture,Pt),Z!==0?B.blitFramebuffer(Wt,re,Nt,Ct,Bt,ve,Nt,Ct,B.COLOR_BUFFER_BIT,B.NEAREST):be?B.copyTexSubImage3D(Dt,Pt,Bt,ve,Ve+Ae,Wt,re,Nt,Ct):B.copyTexSubImage2D(Dt,Pt,Bt,ve,Wt,re,Nt,Ct);S.bindFramebuffer(B.READ_FRAMEBUFFER,null),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else be?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Dt,Pt,Bt,ve,Ve,Nt,Ct,Ot,Te,sn,Re.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(Dt,Pt,Bt,ve,Ve,Nt,Ct,Ot,Te,Re.data):B.texSubImage3D(Dt,Pt,Bt,ve,Ve,Nt,Ct,Ot,Te,sn,Re):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Pt,Bt,ve,Nt,Ct,Te,sn,Re.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Pt,Bt,ve,Re.width,Re.height,Te,Re.data):B.texSubImage2D(B.TEXTURE_2D,Pt,Bt,ve,Nt,Ct,Te,sn,Re);S.pixelStorei(B.UNPACK_ROW_LENGTH,cn),S.pixelStorei(B.UNPACK_IMAGE_HEIGHT,me),S.pixelStorei(B.UNPACK_SKIP_PIXELS,Un),S.pixelStorei(B.UNPACK_SKIP_ROWS,Qn),S.pixelStorei(B.UNPACK_SKIP_IMAGES,Fi),Pt===0&&k.generateMipmaps&&B.generateMipmap(Dt),S.unbindTexture()},this.initRenderTarget=function(R){W.get(R).__webglFramebuffer===void 0&&K.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?K.setTextureCube(R,0):R.isData3DTexture?K.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?K.setTexture2DArray(R,0):K.setTexture2D(R,0),S.unbindTexture()},this.resetState=function(){z=0,V=0,Q=null,S.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}};var fi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},nv=new $i(-1,1,1,-1,0,1),uu=class extends Me{constructor(){super(),this.setAttribute("position",new ee([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ee([0,2,0,0,2,0],2))}},iv=new uu,pi=class{constructor(t){this._mesh=new _e(iv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,nv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Da={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ot},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ce},cameraProjectionMatrixInverse:{value:new ce},cameraWorldMatrix:{value:new ce},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new N(-1,-1,-1)},sceneBoxMax:{value:new N(1,1,1)}},vertexShader:`

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
		}`},Ua={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},tc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Yf(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=sv(t),n=e.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=e[a],l=2*Math.PI*o/n,c=new N(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Xi(s,t,t);return r.wrapS=yn,r.wrapT=yn,r.needsUpdate=!0,r}function sv(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),s=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=a++;r++,s--}return n}var Na={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:du(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ot},cameraProjectionMatrixInverse:{value:new ce},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function du(i,t,e){let n=rv(i,t,e),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function rv(i,t,e){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*t*s/i,a=Math.pow(s/(i-1),e);n.push(new N(Math.cos(r),Math.sin(r),a))}return n}var es={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ec=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,p=t-d,y=e-f,m,g;p>y?(m=1,g=0):(m=0,g=1);let T=p-m+h,w=y-g+h,v=p-1+2*h,M=y-1+2*h,x=l&255,E=c&255,_=this.perm[x+this.perm[E]]%12,b=this.perm[x+m+this.perm[E+g]]%12,A=this.perm[x+1+this.perm[E+1]]%12,C=.5-p*p-y*y;C<0?n=0:(C*=C,n=C*C*this._dot(this.grad3[_],p,y));let D=.5-T*T-w*w;D<0?s=0:(D*=D,s=D*D*this._dot(this.grad3[b],T,w));let O=.5-v*v-M*M;return O<0?r=0:(O*=O,r=O*O*this._dot(this.grad3[A],v,M)),70*(n+s+r)}noise3d(t,e,n){let s,r,a,o,c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),d=Math.floor(n+c),f=1/6,p=(h+u+d)*f,y=h-p,m=u-p,g=d-p,T=t-y,w=e-m,v=n-g,M,x,E,_,b,A;T>=w?w>=v?(M=1,x=0,E=0,_=1,b=1,A=0):T>=v?(M=1,x=0,E=0,_=1,b=0,A=1):(M=0,x=0,E=1,_=1,b=0,A=1):w<v?(M=0,x=0,E=1,_=0,b=1,A=1):T<v?(M=0,x=1,E=0,_=0,b=1,A=1):(M=0,x=1,E=0,_=1,b=1,A=0);let C=T-M+f,D=w-x+f,O=v-E+f,L=T-_+2*f,F=w-b+2*f,z=v-A+2*f,V=T-1+3*f,Q=w-1+3*f,q=v-1+3*f,nt=h&255,et=u&255,Et=d&255,At=this.perm[nt+this.perm[et+this.perm[Et]]]%12,se=this.perm[nt+M+this.perm[et+x+this.perm[Et+E]]]%12,Yt=this.perm[nt+_+this.perm[et+b+this.perm[Et+A]]]%12,at=this.perm[nt+1+this.perm[et+1+this.perm[Et+1]]]%12,G=.6-T*T-w*w-v*v;G<0?s=0:(G*=G,s=G*G*this._dot3(this.grad3[At],T,w,v));let j=.6-C*C-D*D-O*O;j<0?r=0:(j*=j,r=j*j*this._dot3(this.grad3[se],C,D,O));let xt=.6-L*L-F*F-z*z;xt<0?a=0:(xt*=xt,a=xt*xt*this._dot3(this.grad3[Yt],L,F,z));let It=.6-V*V-Q*Q-q*q;return It<0?o=0:(It*=It,o=It*It*this._dot3(this.grad3[at],V,Q,q)),32*(s+r+a+o)}noise4d(t,e,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,d,f,p,y=(t+e+n+s)*l,m=Math.floor(t+y),g=Math.floor(e+y),T=Math.floor(n+y),w=Math.floor(s+y),v=(m+g+T+w)*c,M=m-v,x=g-v,E=T-v,_=w-v,b=t-M,A=e-x,C=n-E,D=s-_,O=b>A?32:0,L=b>C?16:0,F=A>C?8:0,z=b>D?4:0,V=A>D?2:0,Q=C>D?1:0,q=O+L+F+z+V+Q,nt=a[q][0]>=3?1:0,et=a[q][1]>=3?1:0,Et=a[q][2]>=3?1:0,At=a[q][3]>=3?1:0,se=a[q][0]>=2?1:0,Yt=a[q][1]>=2?1:0,at=a[q][2]>=2?1:0,G=a[q][3]>=2?1:0,j=a[q][0]>=1?1:0,xt=a[q][1]>=1?1:0,It=a[q][2]>=1?1:0,Tt=a[q][3]>=1?1:0,Gt=b-nt+c,ne=A-et+c,it=C-Et+c,ct=D-At+c,ut=b-se+2*c,mt=A-Yt+2*c,yt=C-at+2*c,Vt=D-G+2*c,kt=b-j+3*c,Xt=A-xt+3*c,$t=C-It+3*c,B=D-Tt+3*c,ue=b-1+4*c,Qt=A-1+4*c,I=C-1+4*c,S=D-1+4*c,H=m&255,W=g&255,K=T&255,gt=w&255,Mt=o[H+o[W+o[K+o[gt]]]]%32,tt=o[H+nt+o[W+et+o[K+Et+o[gt+At]]]]%32,rt=o[H+se+o[W+Yt+o[K+at+o[gt+G]]]]%32,bt=o[H+j+o[W+xt+o[K+It+o[gt+Tt]]]]%32,Ut=o[H+1+o[W+1+o[K+1+o[gt+1]]]]%32,St=.6-b*b-A*A-C*C-D*D;St<0?h=0:(St*=St,h=St*St*this._dot4(r[Mt],b,A,C,D));let vt=.6-Gt*Gt-ne*ne-it*it-ct*ct;vt<0?u=0:(vt*=vt,u=vt*vt*this._dot4(r[tt],Gt,ne,it,ct));let Lt=.6-ut*ut-mt*mt-yt*yt-Vt*Vt;Lt<0?d=0:(Lt*=Lt,d=Lt*Lt*this._dot4(r[rt],ut,mt,yt,Vt));let zt=.6-kt*kt-Xt*Xt-$t*$t-B*B;zt<0?f=0:(zt*=zt,f=zt*zt*this._dot4(r[bt],kt,Xt,$t,B));let Zt=.6-ue*ue-Qt*Qt-I*I-S*S;return Zt<0?p=0:(Zt*=Zt,p=Zt*Zt*this._dot4(r[Ut],ue,Qt,I,S)),27*(h+u+d+f+p)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}_dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}};var Fa=class i extends fi{constructor(t,e,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Yf(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Ne(this.width,this.height,{type:Oe,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Se({defines:Object.assign({},Da.defines),uniforms:mn.clone(Da.uniforms),vertexShader:Da.vertexShader,fragmentShader:Da.fragmentShader,blending:He,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ua,this.normalMaterial.blending=He,this.pdMaterial=new Se({defines:Object.assign({},Na.defines),uniforms:mn.clone(Na.uniforms),vertexShader:Na.vertexShader,fragmentShader:Na.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Se({defines:Object.assign({},Ua.defines),uniforms:mn.clone(Ua.uniforms),vertexShader:Ua.vertexShader,fragmentShader:Ua.fragmentShader,blending:He}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Se({uniforms:mn.clone(es.uniforms),vertexShader:es.vertexShader,fragmentShader:es.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:va,blendDst:xs,blendEquation:Bn,blendSrcAlpha:_a,blendDstAlpha:xs,blendEquationAlpha:Bn}),this.blendMaterial=new Se({uniforms:mn.clone(tc.uniforms),vertexShader:tc.vertexShader,fragmentShader:tc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:al,blendSrc:va,blendDst:xs,blendEquation:Bn,blendSrcAlpha:_a,blendDstAlpha:xs,blendEquationAlpha:Bn}),this._fsQuad=new pi(null),this._originalClearColor=new Ht,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new oi,this.depthTexture.format=hi,this.depthTexture.type=Qi,this.normalRenderTarget=new Ne(this.width,this.height,{minFilter:Le,magFilter:Le,type:Oe,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=du(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=He,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=He,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=He,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=He,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=He,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,s,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=o,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_renderOverride(t,e,n,s,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new ec,n=t*t*4,s=new Uint8Array(n);for(let a=0;a<t;a++)for(let o=0;o<t;o++){let l=a,c=o;s[(a*t+o)*4]=(e.noise(l,c)*.5+.5)*255,s[(a*t+o)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(a*t+o)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(a*t+o)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let r=new Xi(s,t,t,Mn,Qe);return r.wrapS=yn,r.wrapT=yn,r.needsUpdate=!0,r}};Fa.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Zf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ht(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Sr=class i extends fi{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ot(t.x,t.y):new ot(256,256),this.clearColor=new Ht(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ne(r,a,{type:Oe,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Ne(r,a,{type:Oe,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Ne(r,a,{type:Oe,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Zf;this.highPassUniforms=mn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Se({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ot(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=mn.clone(es.uniforms),this.blendMaterial=new Se({uniforms:this.copyUniforms,vertexShader:es.vertexShader,fragmentShader:es.fragmentShader,premultipliedAlpha:!0,blending:gs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ht,this._oldClearAlpha=1,this._basic=new un,this._fsQuad=new pi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ot(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Se({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ot(.5,.5)},direction:{value:new ot(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Se({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Sr.BlurDirectionX=new ot(1,0);Sr.BlurDirectionY=new ot(0,1);var nc=class extends fi{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Se?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=mn.clone(t.uniforms),this.material=new Se({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new pi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var $f={name:"VignetteShader",uniforms:{tDiffuse:{value:null},offset:{value:1},darkness:{value:1}},vertexShader:`

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

		}`};var Oa={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};var ic=class extends fi{constructor(t,e,n){super(),this.scene=t,this.camera=e;let s=n.focus!==void 0?n.focus:1,r=n.aperture!==void 0?n.aperture:.025,a=n.maxblur!==void 0?n.maxblur:1;this._renderTargetDepth=new Ne(1,1,{minFilter:Le,magFilter:Le,type:Oe}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new cr,this._materialDepth.depthPacking=Oh,this._materialDepth.blending=He;let o=mn.clone(Oa.uniforms);o.tDepth.value=this._renderTargetDepth.texture,o.focus.value=s,o.aspect.value=e.aspect,o.aperture.value=r,o.maxblur.value=a,o.nearClip.value=e.near,o.farClip.value=e.far,this.materialBokeh=new Se({defines:Object.assign({},Oa.defines),uniforms:o,vertexShader:Oa.vertexShader,fragmentShader:Oa.fragmentShader}),this.uniforms=o,this._fsQuad=new pi(this.materialBokeh),this._oldClearColor=new Ht}render(t,e,n){this.scene.overrideMaterial=this._materialDepth,t.getClearColor(this._oldClearColor);let s=t.getClearAlpha(),r=t.autoClear;t.autoClear=!1,t.setClearColor(16777215),t.setClearAlpha(1),t.setRenderTarget(this._renderTargetDepth),t.clear(),t.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),t.clear(),this._fsQuad.render(t)),this.scene.overrideMaterial=null,t.setClearColor(this._oldClearColor),t.setClearAlpha(s),t.autoClear=r}setSize(t,e){this.materialBokeh.uniforms.aspect.value=t/e,this._renderTargetDepth.setSize(t,e)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}};var vu={};Kp(vu,{APRON:()=>ie,ARCH:()=>Ii,BALL_R:()=>gn,DRAIN_GUIDES:()=>pu,FLIPPER:()=>ov,FLIPPERS:()=>Sn,GATE:()=>Ts,GI_SPOTS_UPPER:()=>uc,INLANE_GUIDES:()=>Tr,INSERTS:()=>_u,ORBIT:()=>lv,ORBIT_GUIDES:()=>oc,ORBIT_POST:()=>lc,ORBIT_POSTS:()=>gu,ORBIT_ROLLOVERS:()=>Ba,ORBIT_WEDGES:()=>mu,PF:()=>_t,POP:()=>Er,POPS:()=>Es,RAMP:()=>wr,RAMPS:()=>ns,RETURN_LANES:()=>mi,SAUCER:()=>gi,SHOOTER:()=>oe,SLINGS:()=>br,STAR_POSTS:()=>ac,TARGETS:()=>Jn,TARGET_GUIDES:()=>cc,TARGET_POSTS:()=>xu,TARGET_RUBBER:()=>xi,TOP_LANES:()=>Li,WIRE:()=>hc,batParts:()=>rc});var Pi={width:514.35,length:1066.8,thickness:12.7,slope:6.5,ball:27,centreX:237.175,orbitLane:40,throat:54},pt={left_flipper:{id:"left_flipper",type:"flipper",name:"Left flipper",x:177.141,y:164.34,rotation:-25,side:"left",pivot:[148.275,177.8],rest:-25,stroke:52,baseR:12.5,tipR:7.75,reach:68.45,width:88.7,length:25,height:24},right_flipper:{id:"right_flipper",type:"flipper",name:"Right flipper",x:297.209,y:164.34,rotation:205,side:"right",pivot:[326.075,177.8],rest:205,stroke:52,baseR:12.5,tipR:7.75,reach:68.45,width:88.7,length:25,height:24},left_sling:{id:"left_sling",type:"sling",name:"Left slingshot",x:116.838,y:305.327,side:"left",posts:[[98.5,355],[135.177,255.654],[98.5,278.1]],roles:["upper_inner","lower","upper_outer"],postRadius:4.75,contactRadius:11.1},left_inlane_guide:{id:"left_inlane_guide",type:"plastic",name:"Left inlane guide \xB7 contact plate",x:91.979,y:280.268,z:12,thickness:3,holes:[[62.669,238.124,4.5],[113.521,202.549,4.5]],collidable:!0,assembly:"blank_left_inlane_guide",notes:"Original authored adaptation inspired by pinball flipper ball guide, Tinkot, CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/); no source mesh copied.",outline:[[51.4,375.097],[51.379,375.436],[51.315,375.769],[51.21,376.091],[51.066,376.398],[50.884,376.684],[50.668,376.945],[50.421,377.178],[50.147,377.377],[49.85,377.54],[49.534,377.665],[49.206,377.749],[48.87,377.792],[48.531,377.792],[48.194,377.749],[47.866,377.665],[47.55,377.54],[47.253,377.377],[46.979,377.178],[46.732,376.945],[46.516,376.684],[46.334,376.398],[46.19,376.091],[46.085,375.769],[46.021,375.436],[46,375.097],[46,229.217],[118.937,184.579],[120.385,183.818],[121.919,183.253],[123.514,182.894],[125.142,182.745],[126.776,182.81],[128.387,183.088],[129.949,183.574],[131.433,184.259],[132.816,185.132],[134.072,186.179],[135.181,187.38],[136.124,188.716],[136.885,190.163],[137.45,191.698],[137.81,193.293],[137.958,194.921],[137.893,196.555],[137.615,198.166],[137.13,199.727],[136.444,201.212],[135.571,202.594],[134.525,203.85],[133.323,204.96],[131.987,205.903],[64.784,247.031],[61.862,249.087],[59.225,251.498],[56.916,254.226],[54.974,257.225],[53.43,260.447],[52.308,263.84],[51.628,267.347],[51.4,270.913]]},left_inlane_guide_cover:{id:"left_inlane_guide_cover",type:"plastic",name:"Left inlane guide \xB7 cover plate",x:87.264,y:291.085,z:30.8,thickness:3,holes:[[62.669,238.124,4.5],[113.521,202.549,4.5],[46,390,4.5]],collidable:!0,assembly:"blank_left_inlane_guide",notes:"Original authored adaptation inspired by pinball flipper ball guide, Tinkot, CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/); no source mesh copied.",outline:[[54,380.995],[55.102,382.11],[56.049,383.359],[56.827,384.72],[57.421,386.171],[57.821,387.686],[58.022,389.241],[58.018,390.808],[57.812,392.362],[57.405,393.876],[56.805,395.324],[56.022,396.682],[55.07,397.927],[53.963,399.038],[52.722,399.995],[51.368,400.784],[49.922,401.389],[48.41,401.802],[46.857,402.015],[45.289,402.025],[43.734,401.83],[42.217,401.436],[40.764,400.848],[39.399,400.076],[38.147,399.133],[37.027,398.036],[36.06,396.803],[35.26,395.455],[34.643,394.014],[34.218,392.505],[33.992,390.954],[33.97,389.386],[34.152,387.829],[34.534,386.309],[35.11,384.851],[35.871,383.481],[36.804,382.221],[37.892,381.092],[39.117,380.115],[40.459,379.305],[41.895,378.676],[43.4,378.238],[43.4,227.759],[117.58,182.361],[119.329,181.443],[121.182,180.76],[123.109,180.325],[125.076,180.146],[127.05,180.224],[128.996,180.56],[130.882,181.147],[132.675,181.975],[134.345,183.03],[135.863,184.294],[137.203,185.745],[138.342,187.359],[139.261,189.107],[139.943,190.961],[140.378,192.887],[140.557,194.854],[140.479,196.828],[140.143,198.774],[139.556,200.66],[138.728,202.454],[137.673,204.123],[136.409,205.641],[134.958,206.981],[133.345,208.12],[66.141,249.249],[63.49,251.114],[61.098,253.301],[59.004,255.775],[57.242,258.496],[55.841,261.419],[54.824,264.497],[54.207,267.679],[54,270.913]]},left_inlane_guide_stack_1:{id:"left_inlane_guide_stack_1",type:"post",name:"Left inlane guide \xB7 spacer stack 1",x:62.669,y:238.124,width:8,length:8,height:30,postType:"pin",profile:"stacked_return_spacer_v1"},left_inlane_guide_stack_2:{id:"left_inlane_guide_stack_2",type:"post",name:"Left inlane guide \xB7 spacer stack 2",x:113.521,y:202.549,width:8,length:8,height:30,postType:"pin",profile:"stacked_return_spacer_v1"},left_outlane_post:{id:"left_outlane_post",type:"post",name:"Left outlane post",x:46,y:390,width:18.891,length:18.891,height:26.987,postType:"rubber"},left_inlane:{id:"left_inlane",type:"rollover",name:"Left inlane rollover",x:69.4,y:315,rotation:90},left_outlane:{id:"left_outlane",type:"rollover",name:"Left outlane rollover",x:26,y:315,rotation:90},right_sling:{id:"right_sling",type:"sling",name:"Right slingshot",x:357.512,y:305.327,side:"right",posts:[[375.85,355],[339.173,255.654],[375.85,278.1]],roles:["upper_inner","lower","upper_outer"],postRadius:4.75,contactRadius:11.1},right_inlane_guide:{id:"right_inlane_guide",type:"plastic",name:"Right inlane guide \xB7 contact plate",x:382.371,y:280.268,z:12,thickness:3,holes:[[411.681,238.124,4.5],[360.829,202.549,4.5]],collidable:!0,assembly:"blank_right_inlane_guide",notes:"Original authored adaptation inspired by pinball flipper ball guide, Tinkot, CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/); no source mesh copied.",outline:[[422.95,270.913],[422.722,267.347],[422.042,263.84],[420.92,260.447],[419.376,257.225],[417.434,254.226],[415.125,251.498],[412.489,249.087],[409.566,247.031],[342.363,205.903],[341.027,204.96],[339.826,203.85],[338.779,202.594],[337.906,201.212],[337.221,199.727],[336.735,198.166],[336.457,196.555],[336.392,194.921],[336.54,193.293],[336.9,191.698],[337.465,190.163],[338.226,188.716],[339.169,187.38],[340.278,186.179],[341.534,185.132],[342.917,184.259],[344.401,183.574],[345.963,183.088],[347.574,182.81],[349.208,182.745],[350.836,182.894],[352.431,183.253],[353.965,183.818],[355.413,184.579],[428.35,229.217],[428.35,375.097],[428.329,375.436],[428.265,375.769],[428.16,376.091],[428.016,376.398],[427.834,376.684],[427.618,376.945],[427.371,377.178],[427.097,377.377],[426.8,377.54],[426.484,377.665],[426.156,377.749],[425.82,377.792],[425.481,377.792],[425.144,377.749],[424.816,377.665],[424.5,377.54],[424.203,377.377],[423.929,377.178],[423.682,376.945],[423.466,376.684],[423.284,376.398],[423.14,376.091],[423.035,375.769],[422.971,375.436],[422.95,375.097]]},right_inlane_guide_cover:{id:"right_inlane_guide_cover",type:"plastic",name:"Right inlane guide \xB7 cover plate",x:387.086,y:291.085,z:30.8,thickness:3,holes:[[411.681,238.124,4.5],[360.829,202.549,4.5],[428.35,390,4.5]],collidable:!0,assembly:"blank_right_inlane_guide",notes:"Original authored adaptation inspired by pinball flipper ball guide, Tinkot, CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/); no source mesh copied.",outline:[[420.35,270.913],[420.143,267.679],[419.526,264.497],[418.509,261.419],[417.108,258.496],[415.346,255.775],[413.252,253.301],[410.86,251.114],[408.209,249.249],[341.005,208.12],[339.392,206.981],[337.941,205.641],[336.677,204.123],[335.622,202.454],[334.794,200.66],[334.207,198.774],[333.871,196.828],[333.793,194.854],[333.972,192.887],[334.407,190.961],[335.09,189.107],[336.008,187.359],[337.147,185.745],[338.487,184.294],[340.005,183.03],[341.675,181.975],[343.468,181.147],[345.354,180.56],[347.301,180.224],[349.274,180.146],[351.241,180.325],[353.168,180.76],[355.021,181.443],[356.77,182.361],[430.95,227.759],[430.95,378.238],[432.455,378.676],[433.891,379.305],[435.233,380.115],[436.459,381.092],[437.547,382.221],[438.479,383.481],[439.24,384.851],[439.816,386.309],[440.198,387.829],[440.38,389.386],[440.358,390.954],[440.132,392.505],[439.707,394.014],[439.09,395.455],[438.291,396.803],[437.323,398.036],[436.203,399.133],[434.951,400.076],[433.587,400.848],[432.133,401.436],[430.616,401.83],[429.061,402.025],[427.494,402.015],[425.941,401.802],[424.428,401.389],[422.983,400.784],[421.628,399.995],[420.387,399.038],[419.28,397.927],[418.328,396.682],[417.545,395.324],[416.945,393.876],[416.538,392.362],[416.332,390.808],[416.329,389.241],[416.529,387.686],[416.93,386.171],[417.524,384.72],[418.301,383.359],[419.248,382.11],[420.35,380.995]]},right_inlane_guide_stack_1:{id:"right_inlane_guide_stack_1",type:"post",name:"Right inlane guide \xB7 spacer stack 1",x:411.681,y:238.124,width:8,length:8,height:30,postType:"pin",profile:"stacked_return_spacer_v1"},right_inlane_guide_stack_2:{id:"right_inlane_guide_stack_2",type:"post",name:"Right inlane guide \xB7 spacer stack 2",x:360.829,y:202.549,width:8,length:8,height:30,postType:"pin",profile:"stacked_return_spacer_v1"},right_outlane_post:{id:"right_outlane_post",type:"post",name:"Right outlane post",x:428.35,y:390,width:18.891,length:18.891,height:26.987,postType:"rubber"},right_inlane:{id:"right_inlane",type:"rollover",name:"Right inlane rollover",x:404.95,y:315,rotation:90},right_outlane:{id:"right_outlane",type:"rollover",name:"Right outlane rollover",x:448.35,y:315,rotation:90},apron:{id:"apron",type:"apron",name:"Apron",x:240.175,y:110.562,width:468.35,length:221.123,height:47.6,lip:{centre:[237.175,238.705],radius:149.8,from:[303.525,104.4],to:[170.825,104.4]},outline:[[6,0],[474.35,0],[474.35,221.123],[303.525,105.9],[303.525,104.4],[295.717,100.817],[287.716,97.688],[279.549,95.023],[271.243,92.83],[262.824,91.117],[254.322,89.889],[245.762,89.151],[237.175,88.905],[228.588,89.151],[220.029,89.889],[211.526,91.117],[203.107,92.83],[194.801,95.023],[186.634,97.688],[178.633,100.817],[170.825,104.4],[170.825,105.9],[6,217.076]]},left_drain_guide:{id:"left_drain_guide",type:"guide",name:"Left drain guide (under apron)",x:147.5,y:88,rotation:-236.31,thickness:1.6,height:28.575,from:[167,101],to:[128,75]},right_drain_guide:{id:"right_drain_guide",type:"guide",name:"Right drain guide (under apron)",x:269.5,y:87.5,rotation:-250.201,thickness:1.6,height:28.575,from:[307,101],to:[232,74]},shooter:{id:"shooter",type:"plunger",name:"Shooter lane",x:491.35,y:52.2,width:34,length:104.4,height:30},boundary_left:{id:"boundary_left",type:"guide",name:"Left side rail",x:3,y:468.4,thickness:6,height:28.575,from:[3,6],to:[3,930.8]},boundary_right:{id:"boundary_right",type:"guide",name:"Right side rail",x:511.35,y:458.4,thickness:6,height:28.575,from:[511.35,6],to:[511.35,910.8]},boundary_top:{id:"boundary_top",type:"guide",name:"Top rail",x:247.175,y:1063.8,rotation:-90,thickness:6,height:28.575,from:[136,1063.8],to:[358.35,1063.8]},top_arch_left:{id:"top_arch_left",type:"guide",name:"Top arch (left)",x:69.5,y:997.3,thickness:6,height:28.575,smooth:!1,points:[[3,930.8],[3.506,942.392],[5.021,953.895],[7.532,965.223],[11.021,976.289],[15.461,987.008],[20.819,997.3],[27.053,1007.086],[34.116,1016.291],[41.955,1024.845],[50.509,1032.684],[59.714,1039.747],[69.5,1045.981],[79.792,1051.339],[90.511,1055.779],[101.577,1059.268],[112.905,1061.779],[124.408,1063.294],[136,1063.8]],line:[[3,930.8],[3.506,942.392],[5.021,953.895],[7.532,965.223],[11.021,976.289],[15.461,987.008],[20.819,997.3],[27.053,1007.086],[34.116,1016.291],[41.955,1024.845],[50.509,1032.684],[59.714,1039.747],[69.5,1045.981],[79.792,1051.339],[90.511,1055.779],[101.577,1059.268],[112.905,1061.779],[124.408,1063.294],[136,1063.8]]},top_arch_right:{id:"top_arch_right",type:"guide",name:"Top arch (right)",x:434.85,y:987.3,thickness:6,height:28.575,smooth:!1,points:[[358.35,1063.8],[371.685,1063.218],[384.918,1061.476],[397.949,1058.587],[410.679,1054.573],[423.011,1049.465],[434.85,1043.302],[446.107,1036.13],[456.697,1028.005],[466.537,1018.987],[475.555,1009.147],[483.68,998.557],[490.852,987.3],[497.015,975.461],[502.123,963.129],[506.137,950.399],[509.026,937.368],[510.768,924.135],[511.35,910.8]],line:[[358.35,1063.8],[371.685,1063.218],[384.918,1061.476],[397.949,1058.587],[410.679,1054.573],[423.011,1049.465],[434.85,1043.302],[446.107,1036.13],[456.697,1028.005],[466.537,1018.987],[475.555,1009.147],[483.68,998.557],[490.852,987.3],[497.015,975.461],[502.123,963.129],[506.137,950.399],[509.026,937.368],[510.768,924.135],[511.35,910.8]]},shooter_divider:{id:"shooter_divider",type:"guide",name:"Shooter lane divider",x:471.35,y:530.562,thickness:6,height:28.575,from:[471.35,221.123],to:[471.35,840]},shooter_gate:{id:"shooter_gate",type:"gate",name:"Shooter lane gate",x:485.675,y:857.509,rotation:40,width:51.368,length:8,height:28.575,from:[466,841],to:[505.35,874.019],oneWay:!0},left_orbit_guide:{id:"left_orbit_guide",type:"guide",name:"Left orbit guide",x:87.721,y:801.144,thickness:1.6,height:28.575,smooth:!1,points:[[109.535,588.118],[56.071,680.721],[53.284,686.075],[50.973,691.653],[49.158,697.41],[47.851,703.304],[47.063,709.289],[46.8,715.321],[46.8,921.665],[47.138,929.597],[48.15,937.471],[49.829,945.231],[52.162,952.82],[55.132,960.183],[58.719,967.267],[69,980],[79,987],[90,993]],line:[[109.535,588.118],[56.071,680.721],[53.284,686.075],[50.973,691.653],[49.158,697.41],[47.851,703.304],[47.063,709.289],[46.8,715.321],[46.8,921.665],[47.138,929.597],[48.15,937.471],[49.829,945.231],[52.162,952.82],[55.132,960.183],[58.719,967.267],[69,980],[79,987],[90,993]],mounts:[{postId:"left_orbit_post"},{at:.24,side:-1},{at:.5659,side:-1},{at:.9493,side:-1}]},right_orbit_guide:{id:"right_orbit_guide",type:"guide",name:"Right orbit guide",x:396.182,y:747.813,thickness:1.6,height:28.575,smooth:!0,points:[[384,991],[426,937],[427.55,715.321],[427.287,709.289],[426.499,703.304],[425.192,697.41],[423.377,691.653],[421.066,686.075],[418.279,680.721],[364.815,588.118]],line:[[384,991],[387.07,987.26],[390.257,983.718],[393.53,980.32],[396.857,977.012],[400.205,973.739],[403.542,970.449],[406.837,967.087],[410.056,963.599],[413.169,959.931],[416.142,956.029],[418.944,951.839],[421.542,947.306],[423.905,942.378],[426,937],[427.048,933.698],[428.006,930.095],[428.88,926.21],[429.671,922.056],[430.382,917.651],[431.017,913.009],[431.578,908.146],[432.068,903.079],[432.491,897.822],[432.849,892.392],[433.145,886.804],[433.382,881.074],[433.563,875.219],[433.692,869.252],[433.77,863.191],[433.802,857.051],[433.789,850.847],[433.735,844.596],[433.643,838.313],[433.516,832.014],[433.357,825.715],[433.168,819.431],[432.953,813.178],[432.715,806.972],[432.456,800.828],[432.18,794.763],[431.889,788.792],[431.587,782.93],[431.276,777.194],[430.96,771.599],[430.641,766.161],[430.322,760.896],[430.007,755.819],[429.697,750.947],[429.397,746.294],[429.109,741.877],[428.836,737.711],[428.581,733.812],[428.347,730.196],[428.137,726.879],[427.954,723.876],[427.801,721.203],[427.681,718.875],[427.596,716.909],[427.55,715.321],[427.46,711.761],[427.287,709.289],[426.958,706.288],[426.499,703.304],[425.91,700.343],[425.192,697.41],[424.347,694.512],[423.377,691.653],[422.282,688.839],[421.066,686.075],[419.941,683.784],[418.279,680.721],[417.245,678.856],[415.952,676.556],[414.418,673.851],[412.662,670.774],[410.704,667.357],[408.562,663.632],[406.255,659.63],[403.803,655.384],[401.224,650.925],[398.537,646.285],[395.762,641.496],[392.917,636.59],[390.021,631.6],[387.094,626.556],[384.154,621.49],[381.22,616.436],[378.312,611.424],[375.448,606.486],[372.647,601.655],[369.929,596.962],[367.312,592.439],[364.815,588.118]]},left_orbit_wedge:{id:"left_orbit_wedge",type:"guide",name:"Left orbit throat wedge",x:33.292,y:577.195,thickness:1.6,height:28.575,smooth:!0,points:[[5.2,690],[5.66,679.472],[7.035,669.023],[9.316,658.735],[12.485,648.684],[16.518,638.948],[21.384,629.6],[67,553],[58,546],[52,534],[5.2,464.39]],line:[[5.2,690],[5.319,686.488],[5.439,682.975],[5.66,679.472],[6.017,675.977],[6.476,672.491],[7.035,669.023],[7.696,665.573],[8.457,662.141],[9.316,658.735],[10.275,655.355],[11.332,652.002],[12.485,648.684],[13.735,645.401],[15.08,642.153],[16.518,638.948],[17.873,636.125],[19.321,633.345],[21.384,629.6],[22.91,627.044],[24.969,623.856],[27.484,620.117],[30.376,615.907],[33.568,611.309],[36.983,606.403],[40.542,601.269],[44.168,595.99],[47.783,590.646],[51.309,585.318],[54.669,580.087],[57.785,575.034],[60.578,570.241],[62.973,565.788],[64.89,561.756],[66.252,558.227],[66.981,555.281],[67,553],[64.865,550.015],[61.248,548.224],[58,546],[55.979,542.675],[54.393,538.84],[52,534],[50.431,531.379],[48.575,528.402],[46.46,525.102],[44.114,521.514],[41.564,517.672],[38.839,513.612],[35.966,509.368],[32.972,504.974],[29.887,500.464],[26.736,495.874],[23.548,491.238],[20.352,486.591],[17.173,481.966],[14.041,477.399],[10.983,472.925],[8.027,468.577],[5.2,464.39]]},left_orbit_post:{id:"left_orbit_post",type:"post",name:"Left orbit post",x:110.91,y:585.736,width:11,length:11,height:30},right_orbit_post:{id:"right_orbit_post",type:"post",name:"Right orbit post",x:363.44,y:585.736,width:11,length:11,height:30},left_orbit:{id:"left_orbit",type:"rollover",name:"Left orbit rollover",x:26,y:800,rotation:90},right_orbit:{id:"right_orbit",type:"rollover",name:"Right orbit rollover",x:448.35,y:800,rotation:90},left_ramp:{id:"left_ramp",type:"ramp",name:"Left ramp",x:176,y:520,rampType:"plastic",rampWidth:42,widthStart:52,mouthLength:60,wallHeight:28,switches:[.82],entry:"flap",exit:"wireform",points:[[141,602,0],[105,670,14],[95,764,38],[121,833,58],[124,862,66],[123.212,869.999,66.688],[120.879,877.69,67.375],[117.09,884.778,68.063],[111.991,890.991,68.75],[105.778,896.09,69.438],[98.69,899.879,70.125],[90.999,902.212,70.813],[83,903,71.5],[75,903,72]],profile:[[141,602,0,52],[138.368,606.821,.983,51.764],[135.634,611.581,1.938,51.118],[132.825,616.296,2.872,50.153],[129.969,620.983,3.794,48.962],[127.095,625.659,4.71,47.637],[124.23,630.341,5.629,46.268],[121.403,635.045,6.558,44.949],[118.641,639.788,7.505,43.771],[115.971,644.587,8.478,42.825],[113.423,649.458,9.484,42.204],[111.024,654.418,10.532,42],[108.802,659.484,11.629,42],[106.785,664.672,12.782,42],[105,670,14,42],[103.513,675.061,15.184,42],[102.109,680.29,16.428,42],[100.793,685.666,17.726,42],[99.57,691.167,19.071,42],[98.448,696.77,20.457,42],[97.432,702.454,21.878,42],[96.529,708.197,23.328,42],[95.744,713.976,24.799,42],[95.083,719.77,26.287,42],[94.552,725.556,27.784,42],[94.158,731.313,29.284,42],[93.907,737.018,30.781,42],[93.804,742.65,32.268,42],[93.856,748.186,33.741,42],[94.069,753.604,35.191,42],[94.448,758.883,36.613,42],[95,764,38,42],[95.999,769.821,39.601,42],[97.459,775.631,41.231,42],[99.3,781.409,42.878,42],[101.441,787.135,44.533,42],[103.803,792.789,46.184,42],[106.305,798.35,47.822,42],[108.867,803.799,49.434,42],[111.409,809.116,51.012,42],[113.849,814.279,52.544,42],[116.109,819.269,54.019,42],[118.108,824.066,55.427,42],[119.765,828.65,56.758,42],[121,833,58,42],[122.166,838.683,59.64,42],[122.985,844.151,61.254,42],[123.518,849.309,62.771,42],[123.824,854.066,64.116,42],[123.965,858.327,65.217,42],[124,862,66,42],[123.802,866.316,66.49,42],[123.212,869.999,66.688,42],[122.233,873.901,67.031,42],[120.879,877.69,67.375,42],[119.158,881.327,67.719,42],[117.09,884.778,68.063,42],[114.692,888.009,68.406,42],[111.991,890.991,68.75,42],[109.009,893.692,69.094,42],[105.778,896.09,69.438,42],[102.327,898.158,69.781,42],[98.69,899.879,70.125,42],[94.901,901.233,70.469,42],[90.999,902.212,70.813,42],[87.02,902.752,71.168,42],[83,903,71.5,42],[79.002,903.049,71.762,42],[75,903,72,42]],supports:[{at:.3,side:1,x:69.197,y:690.563,z:20.374},{at:.24,side:-1,x:132.109,y:683.861,z:15.433},{at:.66,side:1,x:88.011,y:829.704,z:53.457},{at:.96,side:-1,x:92.91,y:932.127,z:71.001}]},left_wireform:{id:"left_wireform",type:"ramp",name:"Left wireform",x:75,y:903,rampType:"wire_2",rampWidth:36,sideRails:[{side:-1,from:0,to:.2032}],entry:"ramp",exit:"drop",points:[[75,903,67],[63,903,66.6],[56.757,902.385,66.4],[50.754,900.564,66.2],[45.222,897.607,66],[40.373,893.627,65.8],[36.393,888.778,65.6],[33.436,883.246,65.4],[31.615,877.243,65.2],[31,871,65],[31,760,59],[31,690,54.5],[37,620,50.5],[46,560,47],[56,500,44.5],[64,455,43],[69,334,42]],profile:[[75,903,67,36],[70.855,903.037,66.861,36],[66.711,903.073,66.723,36],[63,903,66.6,36],[59.736,902.8,66.495,36],[56.757,902.385,66.4,36],[53.711,901.621,66.3,36],[50.754,900.564,66.2,36],[47.916,899.22,66.1,36],[45.222,897.607,66,36],[42.7,895.735,65.9,36],[40.373,893.627,65.8,36],[38.265,891.3,65.7,36],[36.393,888.778,65.6,36],[34.78,886.084,65.5,36],[33.436,883.246,65.4,36],[32.379,880.289,65.3,36],[31.615,877.243,65.2,36],[31.217,874.62,65.129,36],[31,871,65,36],[30.901,868.358,64.881,36],[30.824,864.958,64.718,36],[30.766,860.871,64.515,36],[30.726,856.168,64.277,36],[30.701,850.92,64.007,36],[30.691,845.198,63.709,36],[30.693,839.073,63.386,36],[30.705,832.616,63.043,36],[30.726,825.898,62.683,36],[30.753,818.991,62.31,36],[30.785,811.964,61.928,36],[30.821,804.89,61.54,36],[30.857,797.839,61.152,36],[30.893,790.882,60.765,36],[30.927,784.091,60.384,36],[30.956,777.536,60.014,36],[30.979,771.288,59.657,36],[30.995,765.419,59.318,36],[31,760,59,36],[30.981,753.603,58.615,36],[30.931,747.401,58.231,36],[30.86,741.366,57.847,36],[30.778,735.471,57.464,36],[30.697,729.687,57.083,36],[30.626,723.987,56.704,36],[30.576,718.344,56.327,36],[30.557,712.729,55.954,36],[30.579,707.115,55.584,36],[30.654,701.474,55.218,36],[30.79,695.778,54.857,36],[31,690,54.5,36],[31.278,684.145,54.148,36],[31.608,678.262,53.801,36],[31.988,672.36,53.459,36],[32.414,666.45,53.12,36],[32.881,660.54,52.785,36],[33.386,654.641,52.453,36],[33.925,648.762,52.124,36],[34.495,642.912,51.797,36],[35.091,637.101,51.471,36],[35.709,631.339,51.147,36],[36.347,625.636,50.823,36],[37,620,50.5,36],[37.691,614.362,50.17,36],[38.422,608.794,49.837,36],[39.19,603.284,49.503,36],[39.988,597.821,49.17,36],[40.812,592.395,48.838,36],[41.656,586.995,48.511,36],[42.516,581.61,48.19,36],[43.385,576.228,47.877,36],[44.259,570.84,47.573,36],[45.132,565.434,47.28,36],[46,560,47,36],[46.875,554.511,46.732,36],[47.769,548.971,46.473,36],[48.678,543.398,46.224,36],[49.598,537.814,45.982,36],[50.525,532.236,45.749,36],[51.454,526.684,45.524,36],[52.383,521.179,45.306,36],[53.305,515.738,45.095,36],[54.219,510.382,44.891,36],[55.118,505.129,44.693,36],[56,500,44.5,36],[57.055,494.217,44.278,36],[58.131,488.817,44.066,36],[59.21,483.631,43.863,36],[60.273,478.49,43.669,36],[61.302,473.226,43.486,36],[62.278,467.669,43.313,36],[63.184,461.65,43.151,36],[64,455,43,36],[64.453,450.516,42.914,36],[64.863,445.783,42.835,36],[65.236,440.82,42.763,36],[65.572,435.646,42.698,36],[65.877,430.28,42.639,36],[66.153,424.742,42.584,36],[66.402,419.05,42.534,36],[66.63,413.224,42.489,36],[66.838,407.283,42.447,36],[67.03,401.247,42.407,36],[67.209,395.133,42.37,36],[67.378,388.963,42.335,36],[67.541,382.753,42.301,36],[67.701,376.525,42.267,36],[67.861,370.297,42.234,36],[68.024,364.087,42.2,36],[68.193,357.917,42.164,36],[68.373,351.803,42.127,36],[68.565,345.767,42.088,36],[68.773,339.826,42.046,36],[69,334,42,36]],supports:[{at:.05,side:1,x:58.016,y:877.69,z:66.024},{at:.39,side:1,x:54.378,y:699.08,z:55.03},{at:.6197,side:-1,x:22.444,y:557.469,z:47.062},{at:.9,side:-1,x:43.169,y:407.139,z:42.452}]},right_ramp:{id:"right_ramp",type:"ramp",name:"Right ramp",x:298.35,y:520,rampType:"plastic",rampWidth:42,widthStart:52,mouthLength:60,wallHeight:28,switches:[.82],entry:null,exit:"wireform",points:[[333,601,0],[374,678,14],[376,770,38],[352,823,58],[350.35,862,66],[351.138,869.999,66.688],[353.471,877.69,67.375],[357.26,884.778,68.063],[362.359,890.991,68.75],[368.572,896.09,69.438],[375.66,899.879,70.125],[383.351,902.212,70.813],[391.35,903,71.5],[399.35,903,72]],profile:[[333,601,0,52],[335.813,606.11,.915,51.735],[338.762,611.178,1.798,51.008],[341.814,616.217,2.657,49.926],[344.933,621.235,3.5,48.601],[348.087,626.242,4.335,47.146],[351.241,631.25,5.17,45.681],[354.361,636.268,6.013,44.321],[357.412,641.306,6.872,43.183],[360.361,646.375,7.755,42.377],[363.174,651.484,8.669,42.011],[365.817,656.645,9.624,42],[368.255,661.867,10.626,42],[370.454,667.159,11.684,42],[372.38,672.534,12.806,42],[374,678,14,42],[375.323,683.464,15.233,42],[376.467,689.107,16.532,42],[377.434,694.9,17.889,42],[378.23,700.811,19.299,42],[378.859,706.81,20.755,42],[379.325,712.868,22.251,42],[379.632,718.954,23.78,42],[379.786,725.038,25.337,42],[379.79,731.089,26.914,42],[379.649,737.077,28.506,42],[379.367,742.973,30.105,42],[378.949,748.745,31.706,42],[378.399,754.365,33.303,42],[377.721,759.8,34.888,42],[376.92,765.022,36.456,42],[376,770,38,42],[374.584,775.54,39.837,42],[372.697,780.844,41.749,42],[370.443,785.941,43.711,42],[367.93,790.863,45.696,42],[365.264,795.64,47.677,42],[362.551,800.304,49.628,42],[359.897,804.885,51.522,42],[357.409,809.415,53.333,42],[355.192,813.923,55.034,42],[353.354,818.441,56.598,42],[352,823,58,42],[350.897,828.998,59.6,42],[350.244,835.234,61.072,42],[349.944,841.479,62.402,42],[349.902,847.505,63.575,42],[350.02,853.086,64.575,42],[350.202,857.993,65.389,42],[350.35,862,66,42],[350.588,866.389,66.457,42],[351.138,869.999,66.688,42],[352.117,873.901,67.031,42],[353.471,877.69,67.375,42],[355.192,881.327,67.719,42],[357.26,884.778,68.063,42],[359.658,888.009,68.406,42],[362.359,890.991,68.75,42],[365.341,893.692,69.094,42],[368.572,896.09,69.438,42],[372.023,898.158,69.781,42],[375.66,899.879,70.125,42],[379.449,901.233,70.469,42],[383.351,902.212,70.813,42],[387.33,902.752,71.168,42],[391.35,903,71.5,42],[395.348,903.049,71.762,42],[399.35,903,72,42]],supports:[{at:.3,side:-1,x:407.103,y:691.181,z:17.954},{at:.24,side:1,x:344.342,y:683.155,z:13.27},{at:.66,side:-1,x:382.1,y:827.126,z:55.704},{at:.96,side:1,x:381.348,y:932.114,z:70.993}]},right_wireform:{id:"right_wireform",type:"ramp",name:"Right wireform",x:399.35,y:903,rampType:"wire_2",rampWidth:36,sideRails:[{side:1,from:0,to:.2032}],entry:"ramp",exit:"drop",points:[[399.35,903,67],[411.35,903,66.6],[417.593,902.385,66.4],[423.596,900.564,66.2],[429.128,897.607,66],[433.977,893.627,65.8],[437.957,888.778,65.6],[440.914,883.246,65.4],[442.735,877.243,65.2],[443.35,871,65],[443.35,760,59],[443.35,690,54.5],[437.35,620,50.5],[428.35,560,47],[418.35,500,44.5],[409,411,43],[403,336,42]],profile:[[399.35,903,67,36],[403.495,903.037,66.861,36],[407.639,903.073,66.723,36],[411.35,903,66.6,36],[414.614,902.8,66.495,36],[417.593,902.385,66.4,36],[420.639,901.621,66.3,36],[423.596,900.564,66.2,36],[426.434,899.22,66.1,36],[429.128,897.607,66,36],[431.65,895.735,65.9,36],[433.977,893.627,65.8,36],[436.085,891.3,65.7,36],[437.957,888.778,65.6,36],[439.57,886.084,65.5,36],[440.914,883.246,65.4,36],[441.971,880.289,65.3,36],[442.735,877.243,65.2,36],[443.133,874.62,65.129,36],[443.35,871,65,36],[443.449,868.358,64.881,36],[443.526,864.958,64.718,36],[443.584,860.871,64.515,36],[443.624,856.168,64.277,36],[443.649,850.92,64.007,36],[443.659,845.198,63.709,36],[443.657,839.073,63.386,36],[443.645,832.616,63.043,36],[443.624,825.898,62.683,36],[443.597,818.991,62.31,36],[443.565,811.964,61.928,36],[443.529,804.89,61.54,36],[443.493,797.839,61.152,36],[443.457,790.882,60.765,36],[443.423,784.091,60.384,36],[443.394,777.536,60.014,36],[443.371,771.288,59.657,36],[443.355,765.419,59.318,36],[443.35,760,59,36],[443.369,753.603,58.615,36],[443.419,747.401,58.231,36],[443.49,741.366,57.847,36],[443.572,735.471,57.464,36],[443.653,729.687,57.083,36],[443.724,723.987,56.704,36],[443.774,718.344,56.327,36],[443.793,712.729,55.954,36],[443.771,707.115,55.584,36],[443.696,701.474,55.218,36],[443.56,695.778,54.857,36],[443.35,690,54.5,36],[443.072,684.145,54.148,36],[442.742,678.262,53.801,36],[442.362,672.36,53.459,36],[441.936,666.45,53.12,36],[441.469,660.54,52.785,36],[440.964,654.641,52.453,36],[440.425,648.762,52.124,36],[439.855,642.912,51.797,36],[439.259,637.101,51.471,36],[438.641,631.339,51.147,36],[438.003,625.636,50.823,36],[437.35,620,50.5,36],[436.659,614.362,50.17,36],[435.928,608.794,49.837,36],[435.16,603.284,49.503,36],[434.362,597.821,49.17,36],[433.538,592.395,48.838,36],[432.694,586.995,48.511,36],[431.834,581.61,48.19,36],[430.965,576.228,47.877,36],[430.091,570.84,47.573,36],[429.218,565.434,47.28,36],[428.35,560,47,36],[427.47,554.589,46.731,36],[426.564,549.252,46.469,36],[425.638,543.96,46.215,36],[424.7,538.688,45.969,36],[423.755,533.406,45.731,36],[422.811,528.089,45.503,36],[421.876,522.708,45.283,36],[420.955,517.236,45.072,36],[420.056,511.646,44.872,36],[419.185,505.909,44.681,36],[418.35,500,44.5,36],[417.632,494.568,44.35,36],[416.928,488.967,44.213,36],[416.238,483.22,44.086,36],[415.562,477.348,43.969,36],[414.9,471.374,43.86,36],[414.25,465.322,43.759,36],[413.615,459.212,43.664,36],[412.992,453.069,43.574,36],[412.383,446.914,43.489,36],[411.787,440.77,43.406,36],[411.204,434.659,43.326,36],[410.634,428.604,43.246,36],[410.077,422.628,43.166,36],[409.532,416.752,43.084,36],[409,411,43,36],[408.458,405.024,42.911,36],[407.941,399.114,42.826,36],[407.447,393.261,42.745,36],[406.972,387.457,42.666,36],[406.513,381.694,42.589,36],[406.066,375.962,42.514,36],[405.628,370.253,42.441,36],[405.196,364.559,42.368,36],[404.765,358.87,42.296,36],[404.334,353.178,42.223,36],[403.898,347.475,42.15,36],[403.455,341.752,42.076,36],[403,336,42,36]],supports:[{at:.05,side:-1,x:416.244,y:877.745,z:66.027},{at:.2851,side:-1,x:419.692,y:762.272,z:59.132},{at:.6386,side:1,x:450.239,y:547.347,z:46.57},{at:.9,side:1,x:432.451,y:407.628,z:42.982}]},pop_1:{id:"pop_1",type:"bumper",name:"Left pop bumper",x:235,y:849.33,width:60,length:60,height:44},pop_2:{id:"pop_2",type:"bumper",name:"Right pop bumper",x:271,y:771.33,width:60,length:60,height:44},pop_3:{id:"pop_3",type:"bumper",name:"Lower pop bumper",x:199,y:773.33,width:60,length:60,height:44},target_a:{id:"target_a",type:"target",name:"Centre target A",x:199.075,y:690,width:25.4,length:10,height:35},target_a_insert:{id:"target_a_insert",type:"insert",name:"Centre target A insert",x:199.9,y:668,width:19,length:19,height:3,shape:"circle",color:"f4f3f8"},target_b:{id:"target_b",type:"target",name:"Centre target B",x:237.175,y:690,width:25.4,length:10,height:35},target_b_insert:{id:"target_b_insert",type:"insert",name:"Centre target B insert",x:238,y:668,width:19,length:19,height:3,shape:"circle",color:"f4f3f8"},target_c:{id:"target_c",type:"target",name:"Centre target C",x:275.275,y:690,width:25.4,length:10,height:35},target_c_insert:{id:"target_c_insert",type:"insert",name:"Centre target C insert",x:276.1,y:668,width:19,length:19,height:3,shape:"circle",color:"f4f3f8"},left_ramp_arrow:{id:"left_ramp_arrow",type:"insert",name:"Left ramp arrow",x:157.3,y:545.5,rotation:16.67,width:24,length:46,height:3,shape:"arrow",color:"a99cff"},left_orbit_arrow:{id:"left_orbit_arrow",type:"insert",name:"Left orbit arrow",x:71,y:590,rotation:30,width:21,length:40,height:3,shape:"arrow",color:"8f7dff"},extra_ball_insert:{id:"extra_ball_insert",type:"insert",name:"Extra ball insert",x:237.175,y:450,width:24,length:24,height:3,shape:"circle",color:"a99cff",icon:"ball"},lock_insert:{id:"lock_insert",type:"insert",name:"Lock insert",x:237.175,y:487,width:29,length:26,height:3,shape:"hexagon",color:"f4f3f8",icon:"lock"},shoot_again:{id:"shoot_again",type:"insert",name:"Shoot again insert",x:237.18,y:139,width:26,length:26,height:3,shape:"shield",color:"a99cff"},left_outlane_insert:{id:"left_outlane_insert",type:"insert",name:"Left outlane insert",x:26,y:386,width:16,length:16,height:3,shape:"circle",color:"f4f3f8"},left_inlane_insert:{id:"left_inlane_insert",type:"insert",name:"Left inlane insert",x:69.4,y:386,width:16,length:16,height:3,shape:"circle",color:"f4f3f8"},right_inlane_insert:{id:"right_inlane_insert",type:"insert",name:"Right inlane insert",x:404.95,y:386,width:16,length:16,height:3,shape:"circle",color:"f4f3f8"},right_outlane_insert:{id:"right_outlane_insert",type:"insert",name:"Right outlane insert",x:448.35,y:386,width:16,length:16,height:3,shape:"circle",color:"f4f3f8"},right_orbit_arrow:{id:"right_orbit_arrow",type:"insert",name:"Right orbit arrow",x:402,y:590,rotation:-30,width:21,length:40,height:3,shape:"arrow",color:"8f7dff"},right_ramp_arrow:{id:"right_ramp_arrow",type:"insert",name:"Right ramp arrow",x:317,y:545.5,rotation:-16.67,width:24,length:46,height:3,shape:"arrow",color:"a99cff"},wizard_insert:{id:"wizard_insert",type:"insert",name:"Wizard insert",x:237.175,y:528,width:36,length:36,height:3,shape:"star",color:"c9c0ff",icon:"crown"},target_guide_left:{id:"target_guide_left",type:"guide",name:"Target bank guide (left)",x:166,y:686,thickness:1.6,height:28.575,smooth:!0,points:[[166,616],[128,684],[118,756],[156,861],[127,911],[102,924],[92,952],[90,993]],mounts:[{at:.7111,side:1}],line:[[166,616],[163.573,620.238],[161.058,624.455],[158.473,628.655],[155.841,632.844],[153.181,637.027],[150.514,641.208],[147.861,645.392],[145.242,649.585],[142.678,653.79],[140.19,658.013],[137.798,662.259],[135.522,666.533],[133.384,670.839],[131.404,675.182],[129.602,679.567],[128,684],[126.496,688.596],[125.073,693.202],[123.739,697.821],[122.505,702.459],[121.378,707.12],[120.367,711.808],[119.483,716.529],[118.732,721.286],[118.126,726.085],[117.671,730.929],[117.379,735.824],[117.256,740.774],[117.313,745.783],[117.558,750.857],[118,756],[118.625,760.256],[119.597,764.641],[120.879,769.141],[122.436,773.741],[124.232,778.428],[126.229,783.187],[128.392,788.002],[130.685,792.86],[133.071,797.747],[135.514,802.647],[137.978,807.546],[140.427,812.43],[142.824,817.284],[145.134,822.094],[147.319,826.845],[149.345,831.523],[151.175,836.113],[152.771,840.601],[154.099,844.972],[155.123,849.212],[155.804,853.306],[156.109,857.24],[156,861],[155.26,866.033],[153.988,870.998],[152.253,875.869],[150.123,880.619],[147.665,885.22],[144.948,889.646],[142.039,893.869],[139.007,897.863],[135.919,901.6],[132.843,905.053],[129.847,908.195],[127,911],[122.885,914.046],[118.398,916.147],[113.803,917.747],[109.362,919.292],[105.34,921.228],[102,924],[99.325,927.734],[97.207,931.999],[95.53,936.676],[94.18,941.647],[93.041,946.795],[92,952],[91.315,956.171],[90.847,960.523],[90.553,965.018],[90.389,969.622],[90.311,974.298],[90.277,979.009],[90.242,983.721],[90.164,988.396],[90,993]]},target_guide_right:{id:"target_guide_right",type:"guide",name:"Target bank guide (right)",x:308.35,y:686,thickness:1.6,height:28.575,smooth:!0,points:[[308.35,616],[349,688],[353.35,759],[321,865],[383,949],[384,991]],mounts:[{at:.7111,side:-1}],line:[[308.35,616],[310.802,620.228],[313.36,624.442],[316.002,628.645],[318.705,632.841],[321.445,637.032],[324.201,641.222],[326.949,645.412],[329.667,649.606],[332.331,653.806],[334.92,658.017],[337.41,662.24],[339.778,666.478],[342.002,670.734],[344.059,675.012],[345.926,679.313],[347.581,683.642],[349,688],[350.278,692.59],[351.395,697.168],[352.355,701.742],[353.164,706.319],[353.825,710.907],[354.344,715.513],[354.724,720.145],[354.971,724.809],[355.089,729.513],[355.083,734.266],[354.958,739.073],[354.717,743.942],[354.366,748.882],[353.908,753.899],[353.35,759],[352.69,763.243],[351.72,767.586],[350.477,772.021],[348.993,776.536],[347.304,781.124],[345.444,785.774],[343.447,790.476],[341.348,795.221],[339.181,800],[336.981,804.802],[334.781,809.618],[332.617,814.438],[330.523,819.253],[328.534,824.054],[326.683,828.83],[325.005,833.571],[323.535,838.27],[322.306,842.914],[321.355,847.496],[320.714,852.005],[320.418,856.432],[320.502,860.767],[321,865],[322.045,869.425],[323.622,873.814],[325.676,878.167],[328.153,882.481],[331.001,886.756],[334.164,890.99],[337.59,895.184],[341.225,899.336],[345.014,903.444],[348.905,907.508],[352.843,911.527],[356.774,915.499],[360.645,919.425],[364.403,923.302],[367.993,927.129],[371.361,930.906],[374.454,934.632],[377.218,938.305],[379.6,941.925],[381.545,945.49],[383,949],[384.417,954.051],[385.222,958.922],[385.537,963.649],[385.485,968.268],[385.188,972.814],[384.769,977.324],[384.349,981.835],[384.052,986.381],[384,991]]},target_post_left:{id:"target_post_left",type:"post",name:"Target bank post (left)",x:184,y:704,width:18,length:18,height:30,ring:!1},target_post_right:{id:"target_post_right",type:"post",name:"Target bank post (right)",x:289,y:704,width:18,length:18,height:30,ring:!1},target_post_centre:{id:"target_post_centre",type:"post",name:"Target bank post (centre)",x:236,y:724,width:18,length:18,height:30,ring:!1},target_rubber:{id:"target_rubber",type:"rubber",name:"Target bank rubber",x:236.333,y:708.667,posts:[[184,702],[289,702],[236,722]],postDiameter:18,cord:4.302,rubberHeight:14.058,postDiameters:[9.72,9.72,9.72],postIds:["target_post_left","target_post_right","target_post_centre"]},upper_left_flipper:{id:"upper_left_flipper",type:"flipper",name:"Upper left flipper",x:79,y:520,rotation:-55,side:"left",pivot:[68.762,534.622],rest:-55,stroke:52,baseR:13,tipR:8.06,reach:40.64,width:61.7,length:26,height:24,sharedSwitch:"s_left_flipper",mechanismAngle:-66},upper_right_flipper:{id:"upper_right_flipper",type:"flipper",name:"Upper right flipper",x:398,y:517,rotation:245,side:"right",pivot:[405.544,533.178],rest:245,stroke:52,baseR:13,tipR:8.06,reach:40.64,width:61.7,length:26,height:24,sharedSwitch:"s_right_flipper",mechanismAngle:-114},right_orbit_wedge:{id:"right_orbit_wedge",type:"guide",name:"Right orbit throat wedge",x:441.058,y:577.195,thickness:1.6,height:28.575,smooth:!0,points:[[469.15,690],[468.69,679.472],[467.315,669.023],[465.034,658.735],[461.865,648.684],[457.832,638.948],[452.966,629.6],[407.35,553],[416.35,546],[422.35,534],[469.15,464.39]],line:[[469.15,690],[469.031,686.488],[468.911,682.975],[468.69,679.472],[468.333,675.977],[467.874,672.491],[467.315,669.023],[466.655,665.573],[465.894,662.141],[465.034,658.735],[464.075,655.355],[463.018,652.002],[461.865,648.684],[460.616,645.401],[459.27,642.153],[457.832,638.948],[456.477,636.125],[455.029,633.346],[452.966,629.6],[451.44,627.044],[449.381,623.856],[446.866,620.117],[443.974,615.907],[440.782,611.309],[437.367,606.403],[433.808,601.269],[430.182,595.99],[426.567,590.646],[423.041,585.318],[419.681,580.087],[416.566,575.034],[413.772,570.241],[411.377,565.788],[409.46,561.756],[408.098,558.227],[407.369,555.281],[407.35,553],[409.485,550.015],[413.103,548.224],[416.35,546],[418.371,542.675],[419.957,538.84],[422.35,534],[423.919,531.379],[425.775,528.402],[427.89,525.102],[430.237,521.514],[432.786,517.672],[435.511,513.612],[438.384,509.368],[441.378,504.974],[444.464,500.464],[447.614,495.874],[450.802,491.238],[453.998,486.591],[457.177,481.966],[460.309,477.4],[463.367,472.925],[466.323,468.577],[469.15,464.39]]},top_lane_rubber_1:{id:"top_lane_rubber_1",type:"rubber",name:"Top lane rubber 1",x:105,y:954,posts:[[104,957],[104,984]],postDiameter:9.5,cord:4.76,rubberHeight:13.5},top_lane_rubber_2:{id:"top_lane_rubber_2",type:"rubber",name:"Top lane rubber 2",x:152,y:963,posts:[[153,966],[153,993]],postDiameter:9.5,cord:4.76,rubberHeight:13.5},top_lane_1:{id:"top_lane_1",type:"rollover",name:"Top lane 1",x:128,y:970,rotation:90},top_lane_rubber_6:{id:"top_lane_rubber_6",type:"rubber",name:"Top lane rubber 6",x:369.35,y:954,posts:[[370.35,957],[370.35,984]],postDiameter:9.5,cord:4.76,rubberHeight:13.5},top_lane_rubber_5:{id:"top_lane_rubber_5",type:"rubber",name:"Top lane rubber 5",x:322.35,y:963,posts:[[321.35,966],[321.35,993]],postDiameter:9.5,cord:4.76,rubberHeight:13.5},top_lane_5:{id:"top_lane_5",type:"rollover",name:"Top lane 5",x:346.35,y:970,rotation:-90},top_lane_1_insert:{id:"top_lane_1_insert",type:"insert",name:"Top lane 1 insert",x:127,y:1011,width:19.05,length:19.05,height:3,shape:"circle",color:"f4f3f8"},top_lane_5_insert:{id:"top_lane_5_insert",type:"insert",name:"Top lane 5 insert",x:347,y:1009,width:19.05,length:19.05,height:3,shape:"circle",color:"f4f3f8"},top_lane_2_insert:{id:"top_lane_2_insert",type:"insert",name:"Top lane 2 insert",x:177,y:1024,width:19.05,length:19.05,height:3,shape:"circle",color:"f4f3f8"},top_lane_3_insert:{id:"top_lane_3_insert",type:"insert",name:"Top lane 3 insert",x:234,y:1033,width:19.05,length:19.05,height:3,shape:"circle",color:"f4f3f8"},top_lane_4_insert:{id:"top_lane_4_insert",type:"insert",name:"Top lane 4 insert",x:294,y:1024,width:19.05,length:19.05,height:3,shape:"circle",color:"f4f3f8"},saucer_arrow:{id:"saucer_arrow",type:"insert",name:"Saucer arrow",x:235,y:912,width:20,length:36,height:3,shape:"arrow",color:"c9c0ff"},top_lane_rubber_3:{id:"top_lane_rubber_3",type:"rubber",name:"Top lane rubber 3",x:205,y:973,posts:[[206,976],[206,1003]],postDiameter:9.5,cord:4.76,rubberHeight:13.5},top_lane_rubber_4:{id:"top_lane_rubber_4",type:"rubber",name:"Top lane rubber 4",x:266,y:972,posts:[[265,975],[265,1002]],postDiameter:9.5,cord:4.76,rubberHeight:13.5},top_lane_2:{id:"top_lane_2",type:"rollover",name:"Top lane 2",x:177,y:983,rotation:90},top_lane_4:{id:"top_lane_4",type:"rollover",name:"Top lane 4",x:294,y:983,rotation:-90},saucer:{id:"saucer",type:"kicker",name:"Saucer",x:235,y:949,width:30,length:30,height:15,kickerType:"saucer",kickAngle:-120,kickSpeed:30,kick:1619.25,pulseMs:30},top_lane_3:{id:"top_lane_3",type:"rollover",name:"Top lane 3",x:234,y:992,rotation:90}};var _t={w:Pi.width,l:Pi.length,thick:Pi.thickness,cx:Pi.centreX,pitch:Pi.slope,rail:pt.boundary_left.x+pt.boundary_left.thickness/2},gn=Pi.ball/2,$n=i=>Math.round(i*100)/100,av=(i,t)=>i.map((e,n)=>{let s=i[Math.max(0,n-1)],r=i[Math.min(i.length-1,n+1)],a=r[0]-s[0],o=r[1]-s[1],l=Math.hypot(a,o)||1;return[$n(e[0]-o/l*t),$n(e[1]+a/l*t)]}),sc=(i,t)=>({id:t,side:i.side,upper:!!i.sharedSwitch,x:i.pivot[0],y:i.pivot[1],rest:i.rest,up:i.rest+(i.side==="left"?1:-1)*i.stroke,baseR:i.baseR,tipR:i.tipR,length:i.reach,height:i.height}),Sn=[sc(pt.left_flipper,"left"),sc(pt.right_flipper,"right"),sc(pt.upper_left_flipper,"upper-left"),sc(pt.upper_right_flipper,"upper-right")],Ss={base:11.28,tip:6.64,flange:[9.21,4.45],groove:[8.05,3.68],cap:[8.2,3.4],rubberFrom:8.6,rubberTo:20};function rc(i){let t=([e,n])=>[$n(e/Ss.base*i.baseR),$n(n/Ss.tip*i.tipR)];return{flange:t(Ss.flange),groove:t(Ss.groove),cap:t(Ss.cap),rubberFrom:Ss.rubberFrom,rubberTo:Ss.rubberTo}}var ov={baseR:Sn[0].baseR,tipR:Sn[0].tipR,length:Sn[0].length,height:Sn[0].height,...rc(Sn[0])},br=[pt.left_sling,pt.right_sling].map(i=>({side:i.side,posts:i.posts,postR:i.postRadius,reach:i.contactRadius})),Jf=pt.apron.outline,ie={deck:pt.apron.height,lipR:pt.apron.lip.radius,lipCy:pt.apron.lip.centre[1],lipEndY:pt.apron.lip.from[1],leftShoulder:Jf.at(-1),rightShoulder:Jf[2]};ie.lipHalf=Math.sqrt(ie.lipR**2-(ie.lipCy-ie.lipEndY)**2);ie.lipLeft=[_t.cx-ie.lipHalf,ie.lipEndY];ie.lipRight=[_t.cx+ie.lipHalf,ie.lipEndY];var pu=[pt.left_drain_guide,pt.right_drain_guide].map(i=>[i.from,i.to]),oe={laneLeft:pt.shooter_divider.x+pt.shooter_divider.thickness/2,laneRight:pt.boundary_right.x-pt.boundary_right.thickness/2,dividerFace:pt.shooter_divider.x-pt.shooter_divider.thickness/2,dividerTop:pt.shooter_divider.to[1],apronTop:$n(pt.shooter_divider.from[1]),ballRest:[pt.shooter.x,pt.shooter.y+pt.shooter.length/2+gn]},Kf=(i,t)=>{let e=i.points[0],n=i.points.at(-1),s=i.thickness/2;return t?{cx:n[0],cy:e[1],r:$n(n[0]-e[0]-s)}:{cx:e[0],cy:n[1],r:$n(n[0]-e[0]-s)}},Ii={top:_t.l-_t.rail,left:Kf(pt.top_arch_left,!0),right:Kf(pt.top_arch_right,!1)},Tr=["left","right"].map(i=>{let t=pt[`${i}_inlane_guide`],e=pt[`${i}_inlane_guide_cover`];return{side:i,thickness:t.thickness,plate:{id:t.id,z:t.z,outline:t.outline},cover:{id:e.id,z:e.z,outline:e.outline},stacks:[pt[`${i}_inlane_guide_stack_1`],pt[`${i}_inlane_guide_stack_2`]].map(n=>[n.x,n.y]),post:[pt[`${i}_outlane_post`].x,pt[`${i}_outlane_post`].y]}}),ac=Tr.map(i=>i.post),mi=["left_outlane","left_inlane","right_inlane","right_outlane"].map(i=>({id:i,kind:i.endsWith("outlane")?"outlane":"inlane",x:pt[i].x,y:pt[i].y,insert:pt[`${i}_insert`].id,insertY:pt[`${i}_insert`].y})),lv={lane:Pi.orbitLane,throat:Pi.throat,steel:pt.left_orbit_guide.thickness,height:pt.left_orbit_guide.height},oc=[pt.left_orbit_guide,pt.right_orbit_guide].map((i,t)=>({side:t?"right":"left",line:i.line,face:av(i.line,i.thickness/2),mounts:i.mounts||[]})),mu=[pt.left_orbit_wedge,pt.right_orbit_wedge].map((i,t)=>({side:t?"right":"left",line:i.line})),gu=[pt.left_orbit_post,pt.right_orbit_post].map(i=>[i.x,i.y]),lc={d:pt.left_orbit_post.width,height:pt.left_orbit_post.height},Ba=[pt.left_orbit,pt.right_orbit].map((i,t)=>({side:t?"right":"left",x:i.x,y:i.y})),Ts={from:pt.shooter_gate.from,to:pt.shooter_gate.to,height:28.6},Li={lanes:[1,2,3,4,5].map(i=>{let t=pt[`top_lane_${i}`],e=pt[`top_lane_${i}_insert`];return{x:t.x,y:t.y,insert:e.id,insertX:e.x,insertY:e.y}}),rubbers:[1,2,3,4,5,6].map(i=>{let t=pt[`top_lane_rubber_${i}`];return{posts:t.posts,postR:t.postDiameter/2,cord:t.cord,h:t.rubberHeight}})},gi={x:pt.saucer.x,y:pt.saucer.y,r:pt.saucer.width/2,depth:pt.saucer.height,kickAngle:pt.saucer.kickAngle,kick:Math.round(pt.saucer.kick),reach:pt.saucer.width/2*.7,maxSpeed:900,hold:1},Es=["pop_1","pop_2","pop_3"].map(i=>({id:i,x:pt[i].x,y:pt[i].y})),Er={cap:pt.pop_1.width,height:pt.pop_1.height,ringRest:29.5,ringTravel:9,reach:34},Jn={list:["target_a","target_b","target_c"].map(i=>({id:i,x:pt[i].x,y:pt[i].y,insert:pt[`${i}_insert`].id})),width:pt.target_a.width,depth:pt.target_a.length,height:pt.target_a.height},cc=[pt.target_guide_left,pt.target_guide_right].map((i,t)=>({side:t?"right":"left",line:i.line,mounts:i.mounts||[],thickness:i.thickness,height:i.height})),xu=["target_post_left","target_post_right","target_post_centre"].map(i=>({x:pt[i].x,y:pt[i].y,d:pt[i].width,height:pt[i].height})),xi={posts:pt.target_rubber.postIds.map(i=>[pt[i].x,pt[i].y]),grooves:pt.target_rubber.postDiameters.map(i=>i/2),cord:pt.target_rubber.cord,h:pt.target_rubber.rubberHeight},wr={width:pt.left_ramp.rampWidth,mouth:pt.left_ramp.widthStart,flare:pt.left_ramp.mouthLength,wall:pt.left_ramp.wallHeight,floor:3,side:2.4},fu=pt.left_wireform.rampWidth*.31,bs=2.5,jf=Math.sqrt((gn+bs)**2-fu**2),hc={rod:bs,rail:$n(fu),ride:$n(bs+jf),sideRail:{u:$n(Math.max(fu,(gn+bs+1.5)*Math.cos(25*Math.PI/180))),v:$n(bs+jf+(gn+bs+1.5)*Math.sin(25*Math.PI/180))},dropRadius:gn+bs+3,spread:40},Qf=(i,t,e,n,s)=>({side:i,id:t,profile:e.profile,supports:e.supports.map(r=>[r.x,r.y,r.z]),switchAt:e.switches?.[0],wire:n.profile,wireSupports:n.supports.map(r=>[r.x,r.y,r.z]),sideRails:n.sideRails||[],arrow:{x:pt[s].x,y:pt[s].y,angle:pt[s].rotation},post:ac[i==="left"?0:1]}),ns=[Qf("left","deadbounce",pt.left_ramp,pt.left_wireform,"left_ramp_arrow"),Qf("right","tiptop",pt.right_ramp,pt.right_wireform,"right_ramp_arrow")],cv={a99cff:"royal","8f7dff":"deep",c9c0ff:"light",f4f3f8:"white"},_u=Object.values(pt).filter(i=>i.type==="insert").map(i=>({id:i.id,x:i.x,y:i.y,angle:i.rotation||0,width:i.width,length:i.length,shape:i.shape,color:cv[i.color]||"white",icon:i.icon})),uc=[[18,520],[2*_t.cx-18,520]];function nn(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Me,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=tp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let y=0;y<a[h].length;++y)f.push(a[h][y][d]);let p=tp(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function tp(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new vn(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){let y=h.getComponent(d,p);o.setComponent(d+u,p,y)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var U=.001;function Ee(i,t,e=0){return new N((i-_t.w/2)*U,e*U,(_t.l/2-t)*U)}function Di(i,t,e,{bevel:n=0,curveSegments:s=12,holes:r=[]}={}){let a=new dn(i.map(([l,c])=>new ot((l-_t.w/2)*U,(c-_t.l/2)*U)));for(let l of r)a.holes.push(new li(l.map(([c,h])=>new ot((c-_t.w/2)*U,(h-_t.l/2)*U))));let o=new ci(a,{depth:Math.max(e-n*2,1e-4)*U,bevelEnabled:n>0,bevelThickness:n*U,bevelSize:n*U,bevelSegments:3,curveSegments:s});return o.rotateX(-Math.PI/2),o.translate(0,(t+n)*U,0),o}function is(i,t,{bevel:e=0,curveSegments:n=12}={}){let s=new dn(i.map(([a,o])=>new ot(a*U,o*U))),r=new ci(s,{depth:Math.max(t-e*2,1e-4)*U,bevelEnabled:e>0,bevelThickness:e*U,bevelSize:e*U,bevelSegments:3,curveSegments:n});return r.rotateX(-Math.PI/2),r.translate(0,e*U,0),r}function Ie(i,t,e,n=0,s=0){return i.position.copy(Ee(t,e,n)),i.rotation.y=s*Math.PI/180,i}function Fe(i,t=48){return new ca(i.map(([e,n])=>new ot(e*U,n*U)),t)}function ka(i,t,{tension:e=.5,segments:n,radial:s=10,closed:r=!1}={}){let a=new On(i.map(([l,c,h])=>Ee(l,c,h)),r,"catmullrom",e),o=a.getLength();return new Ri(a,n||Math.max(12,Math.round(o/.006)),t*U,s,r)}function dc(i,t,{tension:e=.5,segments:n,radial:s=10,closed:r=!1}={}){let a=new On(i.map(([o,l,c])=>new N(o*U,c*U,-l*U)),r,"catmullrom",e);return new Ri(a,n||Math.max(12,Math.round(a.getLength()/.002)),t*U,s,r)}function fc(i,t){let e=[];for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],a=Math.max(1,Math.ceil(Math.hypot(r[0]-s[0],r[1]-s[1])/t));for(let o=0;o<a;o++)e.push([s[0]+(r[0]-s[0])*(o/a),s[1]+(r[1]-s[1])*(o/a)])}return e}function ss(i,t,e=10){let n=[],s=i.length;for(let r=0;r<s;r++){let a=i[r],o=i[(r-1+s)%s],l=i[(r+1)%s],c=Math.atan2(a[1]-o[1],a[0]-o[0])-Math.PI/2,h=Math.atan2(l[1]-a[1],l[0]-a[0])-Math.PI/2;for(;h<c;)h+=Math.PI*2;for(let u=0;u<=e;u++){let d=c+(h-c)*(u/e);n.push([a[0]+Math.cos(d)*t,a[1]+Math.sin(d)*t])}}return n}function hv(i){let t=0;for(let e=0;e<i.length;e++){let[n,s]=i[e],[r,a]=i[(e+1)%i.length];t+=n*a-r*s}return t/2}var Pn=i=>hv(i)<0?[...i].reverse():i;function bn(i,t,e,n=0){let s=[],r=[];for(let a=0;a<i.length;a++){let o=i[a],l=i[Math.max(0,a-1)],c=i[Math.min(i.length-1,a+1)],h=c[0]-l[0],u=c[1]-l[1],d=Math.hypot(h,u)||1;h/=d,u/=d,s.push([o[0]-u*t/2,o[1]+h*t/2]),r.push([o[0]+u*t/2,o[1]-h*t/2])}return Di(Pn([...s,...r.reverse()]),n,e)}function za(i,t,e,n,s,r=24){return Array.from({length:r+1},(a,o)=>{let l=(n+(s-n)*(o/r))*Math.PI/180;return[i+Math.cos(l)*e,t+Math.sin(l)*e]})}var he={royal:"#2B59FF",light:"#6E8CFF",deep:"#1F46E0",ice:"#A9BFFF",black:"#06070A",black1:"#0B0C0F",black2:"#14161A",black3:"#262A31",white:"#FFFFFF",paper:"#F5F6F8",paper2:"#F4F5F7",grey:"#9AA1AB"},kn=i=>parseInt(he[i].slice(1),16),Ar=i=>{let t=kn(i),e=t>>16,n=t>>8&255,s=t&255;return r=>`rgba(${e}, ${n}, ${s}, ${r})`};var uv=i=>{let t=new Ht(i);return .2126*t.r+.7152*t.g+.0722*t.b},Ha=(i,t)=>t/uv(i),pc=i=>Ha(i,1.15),In=kn("royal"),mc=kn("light"),gc=kn("deep"),ws=15659775,ep=(i,t,e)=>new ge({color:0,metalness:0,roughness:e,envMap:i,envMapIntensity:t,transparent:!0,depthWrite:!1,blending:gs,side:pn});function ip(i){let t={};return t.cabinet=new je({color:kn("black1"),roughness:.45,metalness:0,clearcoat:1,clearcoatRoughness:.07}),t.cabinetInner=new ge({color:kn("black"),roughness:.95,envMap:i,envMapIntensity:.2}),t.aluminium=new ge({color:13028045,roughness:.42,metalness:1,roughnessMap:yu()}),t.armour=new ge({color:3159100,roughness:.5,metalness:.85,roughnessMap:yu()}),t.trim=new ge({color:kn("black3"),roughness:.38,metalness:.9}),t.chrome=new ge({color:14475234,roughness:.06,metalness:1}),t.ball=new ge({color:14080733,roughness:.05,metalness:1,envMap:i,envMapIntensity:1.15}),t.steel=new ge({color:11844031,roughness:.48,metalness:1,roughnessMap:yu()}),t.zinc=new ge({color:12764873,roughness:.5,metalness:1}),t.darkSteel=new ge({color:3422269,roughness:.4,metalness:1}),t.rubber=new ge({color:723983,roughness:.6}),t.rubberRoyal=new ge({color:In,roughness:.5}),t.whitePlastic=new ge({color:kn("paper"),roughness:.3}),t.graphitePlastic=new ge({color:kn("black2"),roughness:.35}),t.postPlastic=new je({color:gc,roughness:.16,clearcoat:1,clearcoatRoughness:.04,emissive:In,emissiveIntensity:Ha(In,.035),sheen:.6,sheenColor:mc,sheenRoughness:.4}),t.clearPlastic=new je({color:14542578,roughness:.05,metalness:0,envMap:i,envMapIntensity:.8,clearcoat:1,clearcoatRoughness:.03,transparent:!0,opacity:.1,side:pn,depthWrite:!1}),t.glass=ep(i,.45,.02),t.screenGlass=ep(i,.2,.03),t.wood=new ge({color:12886388,roughness:.78}),t.cardPaper=new ge({color:16777215,roughness:.75}),t.popCap=new je({color:In,roughness:.16,clearcoat:1,clearcoatRoughness:.04,emissive:In,emissiveIntensity:.25}),t.popCap.userData.gain=pc(In)*.5,t.popBody=new ge({color:kn("paper"),roughness:.3,emissive:ws,emissiveIntensity:.06}),t.popBody.userData.gain=pc(ws)*.5,t.bulb=new ge({color:16251391,roughness:.1,emissive:ws,emissiveIntensity:0}),t.bulb.userData.gain=pc(ws),t.speaker=new ge({color:kn("black1"),roughness:.65,metalness:.4}),t}function sp(i){return new je({map:i,roughness:.6,metalness:0,clearcoat:1,clearcoatRoughness:.06})}var np={royal:In,deep:gc,light:mc,white:ws};function Mu(i){let t=new Ht(np[i]??np.white),e=new je({color:t.clone().multiplyScalar(.12),roughness:.3,clearcoat:1,clearcoatRoughness:.03,emissive:t,emissiveIntensity:.06,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2});return e.userData.gain=pc(t),e}function yu(i=256){let t=document.createElement("canvas");t.width=t.height=i;let e=t.getContext("2d");e.fillStyle="#fff",e.fillRect(0,0,i,i);for(let s=0;s<1400;s++){let r=Math.round(200+Math.random()*55);e.fillStyle=`rgb(${r},${r},${r})`,e.fillRect(0,Math.random()*i,i,.6+Math.random())}let n=new Ai(t);return n.wrapS=n.wrapT=yn,n.repeat.set(4,4),n}var zn={field:he.black2,white:he.paper,grey:he.grey,royal:he.royal,light:he.light,deep:he.deep,ink:he.black2,cab:he.black1},xe=Ar("paper"),we=Ar("royal"),ap=Ar("deep"),$e=Ar("light"),bu=Ar("grey"),rp={royal:we,deep:ap,light:$e,white:xe},Su={display:(i,t=650)=>`${t} ${i}px Archivo`,mono:(i,t=500)=>`${t} ${i}px "Martian Mono"`,body:(i,t=500)=>`${t} ${i}px "Instrument Sans"`};function Kn(i,t,e,n){t==="display"?(i.font=Su.display(e,n),i.fontStretch="semi-expanded",i.letterSpacing=`${-e*.03}px`):t==="mono"?(i.font=Su.mono(e,n),i.fontStretch="semi-condensed",i.letterSpacing=`${e*.08}px`):(i.font=Su.body(e,n),i.fontStretch="normal",i.letterSpacing="0px")}async function op(){await Promise.all([document.fonts.load("700 40px Archivo"),document.fonts.load('500 20px "Martian Mono"'),document.fonts.load('500 20px "Instrument Sans"')]).catch(()=>{})}function Ln(i,t){let e=document.createElement("canvas");return e.width=Math.round(i),e.height=Math.round(t),e}function dv(i,t=40){return Array.from({length:t},(e,n)=>{let s=n/t*Math.PI*2;return[Math.cos(s)*i/2,Math.sin(s)*i/2]})}function fv(i,t){let e=i*.4,n=t*.44,s=e*.42;return[[-e/2,-t/2],[0,-t/2+s],[e/2,-t/2],[e/2,t/2-n],[i/2,t/2-n],[0,t/2],[-i/2,t/2-n],[-e/2,t/2-n]]}function pv(i,t){return Array.from({length:6},(e,n)=>[Math.cos(n*Math.PI/3)*i/2,Math.sin(n*Math.PI/3)*t/2])}function mv(i,t){return Array.from({length:10},(e,n)=>{let s=n%2?.45:1,r=Math.PI/2+n*Math.PI/5;return[Math.cos(r)*(i/2)*s,Math.sin(r)*(t/2)*s]})}function gv(i,t){let e=-t/2+t*.45,n=[[0,-t/2]];for(let s=1;s<=8;s++){let r=s/8;n.push([i/2*Math.sin(r*Math.PI/2),-t/2+(e+t/2)*(1-Math.cos(r*Math.PI/2))])}n.push([i/2,t/2-t*.08],[i*.3,t/2],[-i*.3,t/2],[-i/2,t/2-t*.08]);for(let s=8;s>=1;s--){let r=s/8;n.push([-i/2*Math.sin(r*Math.PI/2),-t/2+(e+t/2)*(1-Math.cos(r*Math.PI/2))])}return n}var xv={circle:(i,t)=>dv(Math.min(i,t)),arrow:fv,hexagon:pv,star:mv,shield:gv},_v=["Web","Game","Media","Fab"],vv=[["2025","Freelance"],["2023","Glaser Group"],["2021","Origin Beer Lab"],["2018","T&B Equipment"],["2018","Atlee High"]];function Tu(){let i=new Map;return Li.lanes.forEach((t,e)=>i.set(t.insert,{group:"years",index:e,legend:vv[e][0]})),mi.forEach((t,e)=>i.set(t.insert,{group:"skills",index:e,legend:_v[e]})),ns.forEach((t,e)=>i.set(`${t.side}_ramp_arrow`,{group:"ramp"+e,index:e})),["left_orbit_arrow","right_orbit_arrow"].forEach((t,e)=>i.set(t,{group:"orbit",index:e})),Jn.list.forEach((t,e)=>i.set(t.insert,{group:"targets",index:e})),["extra_ball_insert","lock_insert","wizard_insert"].forEach((t,e)=>i.set(t,{group:"ladder",index:e})),i.set("saucer_arrow",{group:"saucer",index:0}),i.set("shoot_again",{group:"again",index:0}),_u.map(t=>({...t,...i.get(t.id)||{group:"other",index:0},w:t.width,l:t.length,shape:xv[t.shape](t.width,t.length)}))}function As(i){let t=Number(i.replace(/\D+/g,""));return i.startsWith("lane")?Li.lanes[t]?.insert:i.startsWith("return")?mi[t]?.insert:i.startsWith("orbit")?["left_orbit_arrow","right_orbit_arrow"][t]:null}function lp(i,t=128){let e=Ln(t,Math.round(t*i.l/i.w)),n=e.getContext("2d"),s=t/i.w,r=e.width/2,a=e.height/2;n.fillStyle="#fff",n.fillRect(0,0,e.width,e.height);let o="rgba(11, 12, 15, 0.92)";if(n.fillStyle=o,n.strokeStyle=o,n.lineCap="round",n.lineJoin="round",i.legend){let c=/^\d+$/.test(i.legend),h=c?Math.min(i.w*.25,4.8):Math.min(i.w*.84/(i.legend.length*.74+.3),3.7);Be(n,r,a+s*.15,i.legend,h*s,o,c?"display":"mono")}let l=Math.min(i.w,i.l)*s;if(i.icon==="ball")n.lineWidth=l*.07,n.beginPath(),n.arc(r,a,l*.23,0,Math.PI*2),n.stroke(),n.beginPath(),n.arc(r-l*.07,a-l*.07,l*.06,0,Math.PI*2),n.fill();else if(i.icon==="lock")n.lineWidth=l*.07,n.beginPath(),n.moveTo(r-l*.13,a+l*.02),n.arc(r,a-l*.06,l*.13,Math.PI,0),n.lineTo(r+l*.13,a+l*.02),n.stroke(),n.beginPath(),n.roundRect(r-l*.21,a,l*.42,l*.3,l*.04),n.fill();else if(i.icon==="crown"){let c=l*.4,h=l*.26,u=a+l*.12;n.beginPath(),n.moveTo(r-c/2,u),n.lineTo(r-c/2,u-h),n.lineTo(r-c/4,u-h*.45),n.lineTo(r,u-h*1.15),n.lineTo(r+c/4,u-h*.45),n.lineTo(r+c/2,u-h),n.lineTo(r+c/2,u),n.closePath(),n.fill()}return e}function cp(i){let t=Ln(_t.w*i,_t.l*i),e=t.getContext("2d"),n=x=>x*i,s=x=>(_t.l-x)*i,r=x=>x*i,a=(x,E,_,b)=>{let A=e.createRadialGradient(n(x),s(E),0,n(x),s(E),r(_));b.forEach(([C,D])=>A.addColorStop(C,D)),e.fillStyle=A,e.fillRect(0,0,t.width,t.height)};e.fillStyle=zn.field,e.fillRect(0,0,t.width,t.height),a(_t.cx,520,640,[[0,he.black3],[.55,"#1a1d22"],[1,"rgba(20, 22, 26, 0)"]]),a(_t.cx,820,230,[[0,we(.2)],[1,we(0)]]);let o=(x,E)=>Math.max(0,1-Math.hypot((x-_t.cx)/1.1,(E-560)/1.6)/480);e.fillStyle=xe(1);for(let x=6.35;x<_t.l;x+=6.35)for(let E=6.35;E<_t.w;E+=6.35){let _=.085*o(E,x);_<.01||(e.globalAlpha=_,e.fillRect(n(E)-r(.28),s(x)-r(.28),r(.56),r(.56)))}e.strokeStyle=xe(1),e.lineWidth=r(.32);for(let x=50.8;x<_t.l;x+=50.8)for(let E=_t.cx%50.8;E<_t.w;E+=50.8){let _=.3*o(E,x);_<.02||(e.globalAlpha=_,e.beginPath(),e.moveTo(n(E-2.2),s(x)),e.lineTo(n(E+2.2),s(x)),e.moveTo(n(E),s(x-2.2)),e.lineTo(n(E),s(x+2.2)),e.stroke())}e.globalAlpha=1;let[l,c]=Es.reduce((x,E)=>[x[0]+E.x/Es.length,x[1]+E.y/Es.length],[0,0]);for(let x=c-176;x<c+176;x+=5.08)for(let E=l-176;E<l+176;E+=5.08){let _=1-Math.hypot(E-l,x-c)/176;_<=.04||(e.fillStyle=we(.1+.36*_),e.beginPath(),e.arc(n(E),s(x),r(.22+1.1*_*_),0,Math.PI*2),e.fill())}let h=(x,E,_=.4,b=null)=>{e.save(),e.strokeStyle=$e(E),e.lineWidth=r(_),b&&e.setLineDash(b.map(r)),e.beginPath(),e.arc(n(l),s(c),r(x),0,Math.PI*2),e.stroke(),e.restore()};h(70,.5,.5),h(98,.28,.35,[3,2]),h(128,.42,.45),h(162,.18,.35),e.strokeStyle=$e(.5),e.lineCap="butt";for(let x=0;x<360;x+=5){let E=x*Math.PI/180,_=x%30===0,b=128,A=128+(_?5:2.2);e.lineWidth=r(_?.5:.3),e.beginPath(),e.moveTo(n(l+Math.sin(E)*b),s(c+Math.cos(E)*b)),e.lineTo(n(l+Math.sin(E)*A),s(c+Math.cos(E)*A)),e.stroke(),_&&Be(e,n(l+Math.sin(E)*138),s(c+Math.cos(E)*138),String(x).padStart(3,"0"),r(2.4),$e(.62),"mono")}let u=(x,E,_,b,A,C=xe)=>{let D=e.createLinearGradient(0,s(E),0,s(_));D.addColorStop(0,C(0)),D.addColorStop(.35,C(A)),D.addColorStop(1,C(0)),e.fillStyle=D,e.beginPath(),e.roundRect(n(x-b/2),s(_),r(b),r(_-E),r(b/2)),e.fill()};for(let x of mi)u(x.x,220,420,20,.14);for(let x of Ba){u(x.x,640,900,22,.12),e.lineWidth=r(1.4),e.lineJoin="round",e.lineCap="round";for(let E=660,_=0;E<880;E+=34,_++)e.strokeStyle=$e(.12+_*.025),e.beginPath(),e.moveTo(n(x.x-6),s(E)),e.lineTo(n(x.x),s(E+6)),e.lineTo(n(x.x+6),s(E)),e.stroke()}for(let x of Li.lanes)u(x.x,x.y-40,x.y+70,20,.18);{let x=oe.laneLeft,E=oe.laneRight,_=e.createLinearGradient(0,s(0),0,s(oe.dividerTop));_.addColorStop(0,we(.06)),_.addColorStop(1,we(.26)),e.fillStyle=_,e.fillRect(n(x),s(oe.dividerTop),r(E-x),r(oe.dividerTop));let b=(x+E)/2;e.lineWidth=r(2.2),e.lineJoin="round",e.lineCap="round";for(let A=130,C=0;A<780;A+=46,C++)e.strokeStyle=$e(.34+C*.03),e.beginPath(),e.moveTo(n(b-9),s(A)),e.lineTo(n(b),s(A+9)),e.lineTo(n(b+9),s(A)),e.stroke();e.lineCap="butt";for(let A=0;A<=oe.dividerTop-160;A+=10){let C=120+A,D=A%50===0;e.strokeStyle=xe(D?.42:.22),e.lineWidth=r(D?.45:.3),e.beginPath(),e.moveTo(n(x+1.2),s(C)),e.lineTo(n(x+1.2+(D?4.5:2.2)),s(C)),e.stroke(),A%100===0&&A&&Be(e,n(x+9.5),s(C),String(A/10),r(2.3),xe(.45),"mono")}e.save(),e.translate(n(b),s(860)),e.rotate(-Math.PI/2),Be(e,0,0,"Launch",r(3),$e(.7),"mono"),e.restore()}let d=(x,E,_,b,A,C=we)=>{let D=E[0]-x[0],O=E[1]-x[1],L=Math.hypot(D,O),F=-O/L,z=D/L,V=e.createLinearGradient(n(x[0]),s(x[1]),n(E[0]),s(E[1]));V.addColorStop(0,C(0)),V.addColorStop(.6,C(A*.55)),V.addColorStop(1,C(A)),e.fillStyle=V,e.beginPath(),e.moveTo(n(x[0]+F*_/2),s(x[1]+z*_/2)),e.lineTo(n(E[0]+F*b/2),s(E[1]+z*b/2)),e.lineTo(n(E[0]-F*b/2),s(E[1]-z*b/2)),e.lineTo(n(x[0]-F*_/2),s(x[1]-z*_/2)),e.closePath(),e.fill();let Q=e.createLinearGradient(n(x[0]),s(x[1]),n(E[0]),s(E[1]));Q.addColorStop(0,C(0)),Q.addColorStop(1,C(Math.min(1,A*2.2))),e.strokeStyle=Q,e.lineWidth=r(.9);for(let q of[1,-1])e.beginPath(),e.moveTo(n(x[0]+q*F*_/2),s(x[1]+q*z*_/2)),e.lineTo(n(E[0]+q*F*b/2),s(E[1]+q*z*b/2)),e.stroke()};ns.forEach(x=>d([x.side==="left"?262:2*_t.cx-262,196],[x.profile[0][0],x.profile[0][1]-2],8,50,.36));let f=Tu(),p=Object.fromEntries(f.map(x=>[x.id,x]));for(let x of["left_orbit_arrow","right_orbit_arrow"]){let E=p[x],_=E.angle*Math.PI/180,b=[-Math.sin(_),Math.cos(_)];d([E.x-b[0]*400,E.y-b[1]*400],[E.x+b[0]*34,E.y+b[1]*34],4,28,.18,ap)}let y=p.saucer_arrow;d([_t.cx,610],[y.x,y.y+10],6,30,.2);for(let x of f){let E=rp[x.color]||xe,_=Math.max(x.w,x.l)*1.15,b=x.color==="white"?.55:1,A=e.createRadialGradient(n(x.x),s(x.y),0,n(x.x),s(x.y),r(_));A.addColorStop(0,E(.4*b)),A.addColorStop(.55,E(.13*b)),A.addColorStop(1,E(0)),e.fillStyle=A,e.beginPath(),e.arc(n(x.x),s(x.y),r(_),0,Math.PI*2),e.fill()}let m=(x,E)=>{let _=x.angle*Math.PI/180,b=(x.w/2+E)/(x.w/2),A=(x.l/2+E)/(x.l/2);e.beginPath(),x.shape.forEach(([C,D],O)=>{let L=C*b,F=D*A,z=L*Math.cos(_)-F*Math.sin(_),V=L*Math.sin(_)+F*Math.cos(_);O?e.lineTo(n(x.x+z),s(x.y+V)):e.moveTo(n(x.x+z),s(x.y+V))}),e.closePath()};e.lineJoin="round";for(let x of f){let E=rp[x.color]||xe;m(x,2.4),e.strokeStyle="rgba(0, 0, 0, 0.55)",e.lineWidth=r(3.2),e.stroke(),m(x,1.3),e.strokeStyle=xe(.42),e.lineWidth=r(.3),e.stroke(),m(x,3.4),e.strokeStyle=E(x.color==="white"?.45:.75),e.lineWidth=r(.55),e.stroke()}{let x=["extra_ball_insert","lock_insert","wizard_insert"].map(A=>p[A]),E=x[2].y+x[2].l/2+7,_=x[0].y-x[0].l/2-7,b=27;e.fillStyle=we(.06),e.strokeStyle=$e(.42),e.lineWidth=r(.4),e.beginPath(),e.roundRect(n(_t.cx-b),s(E),r(b*2),r(E-_),r(b)),e.fill(),e.stroke(),["Extra ball","Lock","Wizard"].forEach((A,C)=>{let D=x[C],O=D.y;e.strokeStyle=xe(.3),e.lineWidth=r(.3),e.beginPath(),e.moveTo(n(_t.cx+b+1.5),s(O)),e.lineTo(n(_t.cx+b+6),s(O)),e.stroke(),Be(e,n(_t.cx+b+8),s(O),A,r(2.6),xe(.6),"mono","left")})}let g=(x,E,_,b,A,C=0,D=.92)=>{e.save(),e.translate(x,E),e.rotate(C),Kn(e,"mono",A);let O=_?e.measureText(_).width:0,L=_?A*.9:0,F=e.measureText(b.toUpperCase()).width,z=-(O+L+F)/2;_&&Be(e,z,0,_,A,$e(1),"mono","left"),Be(e,z+O+L,0,b,A,xe(D),"mono","left"),e.restore()},T=(x,E,_,b,A=.92,C=8.5)=>{let D=x.angle*Math.PI/180,O=x.l/2+C,L=Math.sin(D),F=-Math.cos(D);e.strokeStyle=xe(.32),e.lineWidth=r(.3),e.beginPath(),e.moveTo(n(x.x+L*(x.l/2+1)),s(x.y+F*(x.l/2+1))),e.lineTo(n(x.x+L*(O-3)),s(x.y+F*(O-3))),e.stroke(),g(n(x.x+L*O),s(x.y+F*O),E,_,b,-D,A)};T(p.left_ramp_arrow,"01","Deadbounce",r(4.2)),T(p.right_ramp_arrow,"02","Tip Top",r(4.2)),T(p.left_orbit_arrow,"","Orbit",r(3.2),.6,7),T(p.right_orbit_arrow,"","Orbit",r(3.2),.6,7),T(y,"","Mystery",r(3.1),.68,6.5),g(n(l),s(c+1),"03","About",r(3.8));let w=mi[0].insertY;g(n(_t.cx),s(w),"04","Skills",r(4.2));for(let x of[-1,1])e.strokeStyle=xe(.25),e.lineWidth=r(.4),e.beginPath(),e.moveTo(n(_t.cx+x*26),s(w)),e.lineTo(n(_t.cx+x*120),s(w)),e.stroke(),e.fillStyle=we(1),e.fillRect(n(_t.cx+x*120)-(x>0?r(4):0),s(w)-r(.6),r(4),r(1.2));let v=Li.lanes[2];g(n(v.insertX),s(v.insertY+18.5),"05","Experience",r(3.8));let M=p.shoot_again;g(n(M.x),s(M.y-M.l/2-6.5),"06","Contact",r(3.8));{let x=_t.cx-46,E=_t.cx+46,_=234,b=292,A=243;e.fillStyle="rgba(6, 7, 10, 0.55)",e.fillRect(n(x),s(b),r(E-x),r(b-_)),e.strokeStyle=xe(.34),e.lineWidth=r(.35),e.strokeRect(n(x),s(b),r(E-x),r(b-_)),e.beginPath(),e.moveTo(n(x),s(A+4.5)),e.lineTo(n(E),s(A+4.5)),e.stroke();for(let C of[_t.cx-15,_t.cx+17])e.beginPath(),e.moveTo(n(C),s(A+4.5)),e.lineTo(n(C),s(_)),e.stroke();e.fillStyle=we(1),e.fillRect(n(x),s(b)-r(.6),r(9),r(1.2)),Ga(e,n(_t.cx),s(277),r(2.1),we(1),xe(.06)),Be(e,n(_t.cx),s(259),"Dylan Hughes",r(7.6),xe(.95),"display"),Be(e,n((x+_t.cx-15)/2),s(A-.2),"DH-26",r(2.4),$e(1),"mono"),Be(e,n((_t.cx-15+_t.cx+17)/2),s(A-.2),"Richmond, VA",r(2.4),xe(.6),"mono"),Be(e,n((_t.cx+17+E)/2),s(A-.2),"Sheet 1/1",r(2.4),xe(.6),"mono")}return t}var hp=[["1110","1001","1001","1001","1110"],["1001","1001","1111","1001","1001"]];function Ga(i,t,e,n,s,r){let a=t-9*n/2,o=e-5*n/2;hp.forEach((l,c)=>l.forEach((h,u)=>[...h].forEach((d,f)=>{i.fillStyle=d==="1"?s:r,i.beginPath(),i.arc(a+(c*5+f+.5)*n,o+(u+.5)*n,n*.36,0,Math.PI*2),i.fill()})))}function Be(i,t,e,n,s,r,a,o="center"){i.save(),i.fillStyle=r,i.textAlign=o,i.textBaseline="middle",Kn(i,a==="display"?"display":"mono",s),a!=="display"&&(n=n.toUpperCase()),i.fillText(n,t,e),i.restore()}function up(i){let t=Math.round(i/1.32),e=Ln(i,t),n=e.getContext("2d"),s=i/1320,r=i/2,a=t*.4,o=n.createRadialGradient(r,a,0,r,t*.45,Math.max(i,t)*.75);o.addColorStop(0,"#16245a"),o.addColorStop(.42,"#0e1222"),o.addColorStop(1,he.black),n.fillStyle=o,n.fillRect(0,0,i,t),n.save(),n.translate(r,a);for(let u=0;u<36;u++)n.rotate(Math.PI/18),n.fillStyle=we(u%3===0?.13:.055),n.beginPath(),n.moveTo(0,0),n.lineTo(i,-i*.03),n.lineTo(i,i*.03),n.fill();n.restore();for(let u=18*s;u<t;u+=22*s)for(let d=18*s;d<i;d+=22*s){let f=.1*Math.max(0,1-Math.hypot(d-r,(u-a)*1.3)/(i*.55));f<.01||(n.fillStyle=xe(f),n.beginPath(),n.arc(d,u,1.4*s,0,Math.PI*2),n.fill())}let l=46*s;n.save(),n.shadowColor=we(.9),n.shadowBlur=14*s,n.strokeStyle=we(1),n.lineWidth=5*s,n.beginPath(),n.roundRect(l,l,i-l*2,t-l*2,36*s),n.stroke(),n.restore(),n.strokeStyle=xe(.32),n.lineWidth=1.6*s,n.beginPath(),n.roundRect(l+14*s,l+14*s,i-l*2-28*s,t-l*2-28*s,26*s),n.stroke();let c=40*s;n.save(),n.shadowColor=we(1),n.shadowBlur=40*s,Ga(n,r,a,c,we(1),"rgba(0,0,0,0)"),n.restore(),Ga(n,r,a,c,he.ice,xe(.07));let h=a+c*4.6;return n.save(),n.shadowColor=$e(.55),n.shadowBlur=18*s,Be(n,r,h,"Dylan Hughes",100*s,he.white,"display"),n.restore(),Be(n,r,h+76*s,"The portfolio",24*s,$e(1),"mono"),Be(n,r,h+112*s,"Model DH-26 \xB7 Richmond, Virginia",16*s,bu(.9),"mono"),e}function dp(i,t,e=[.5,.5]){let n=Ln(t,t/1.32),s=n.getContext("2d");s.fillStyle=he.black,s.fillRect(0,0,n.width,n.height);let r=Math.max(n.width/i.naturalWidth,n.height/i.naturalHeight),a=i.naturalWidth*r,o=i.naturalHeight*r;return s.imageSmoothingQuality="high",s.drawImage(i,(n.width-a)*e[0],(n.height-o)*e[1],a,o),n}function fp(i,t){let e=Math.round(t/1.32),n=Ln(t,e),s=n.getContext("2d"),r=t/1320,a=s.createRadialGradient(t*.3,e*.5,0,t*.3,e*.5,t*.7);a.addColorStop(0,"#121c44"),a.addColorStop(.55,"#0b0e1a"),a.addColorStop(1,he.black),s.fillStyle=a,s.fillRect(0,0,t,e);let o=e,l=Math.round(i.naturalWidth/i.naturalHeight*o),c=t-l,h=Ln(l,o),u=h.getContext("2d");u.imageSmoothingQuality="high",u.drawImage(i,0,0,l,o),u.globalCompositeOperation="destination-in";let d=u.createLinearGradient(0,0,l*.45,0);d.addColorStop(0,"rgba(0, 0, 0, 0)"),d.addColorStop(.5,"rgba(0, 0, 0, 0.6)"),d.addColorStop(1,"rgba(0, 0, 0, 1)"),u.fillStyle=d,u.fillRect(0,0,l,o),s.drawImage(h,c,0);let f=96*r;return s.fillStyle=xe(.18),s.fillRect(f,e*.3,420*r,1.5*r),s.fillStyle=we(1),s.fillRect(f,e*.3-1.5*r,44*r,4.5*r),Be(s,f,e*.3+40*r,"Player 1",22*r,$e(1),"mono","left"),Be(s,f,e*.48,"Dylan",118*r,he.white,"display","left"),Be(s,f,e*.48+118*r,"Hughes",118*r,he.white,"display","left"),Be(s,f,e*.48+214*r,"Richmond, Virginia",22*r,bu(.95),"mono","left"),n}function pp(i,t,{frontBottom:e=.77}={}){let n=Ln(i,t),s=n.getContext("2d"),r=b=>t-(t-e*t)*(b/i),a=(b,A)=>{let C=i*(1-b);return[C,r(C)-A]};s.fillStyle=he.black1,s.fillRect(0,0,i,t);let o=t/768;s.strokeStyle=xe(.07),s.lineWidth=1.4*o;for(let b=40*o;b<t;b+=64*o)for(let A=40*o;A<i;A+=64*o)s.beginPath(),s.moveTo(A-5*o,b),s.lineTo(A+5*o,b),s.moveTo(A,b-5*o),s.lineTo(A,b+5*o),s.stroke();let l=t*.08,c=t*.56,h=[[0,l],[.45,l*.8],[.72,c*.55],[1,c]],u=(b=0)=>{s.moveTo(...a(0,l+b)),s.bezierCurveTo(...h.slice(1).flatMap(([A,C])=>a(A,C+b)))},d=a(0,l),[f,p,y]=h.slice(1).map(([b,A])=>a(b,A)),m=[];for(let b=0;b<=200;b++){let A=b/200,C=1-A;m.push([C*C*C*d[0]+3*C*C*A*f[0]+3*C*A*A*p[0]+A*A*A*y[0],C*C*C*d[1]+3*C*C*A*f[1]+3*C*A*A*p[1]+A*A*A*y[1]])}let g=b=>{let A=m[0];for(let C of m)Math.abs(C[0]-b)<Math.abs(A[0]-b)&&(A=C);return A[1]};{let b=t*.07,[A]=a(.78,0),C=t*.25,D=A-9*b/2,O=C-5*b/2;s.lineWidth=2*o,hp.forEach((L,F)=>L.forEach((z,V)=>[...z].forEach((Q,q)=>{s.strokeStyle=Q==="1"?we(.32):xe(.05),s.beginPath(),s.arc(D+(F*5+q+.5)*b,O+(V+.5)*b,b*.34,0,Math.PI*2),s.stroke()})))}let T=s.createLinearGradient(i,0,0,0);T.addColorStop(0,he.deep),T.addColorStop(.55,he.royal),T.addColorStop(1,"#4a72ff"),s.beginPath(),s.moveTo(i,t),s.lineTo(...a(0,l)),u(),s.lineTo(0,t),s.closePath(),s.fillStyle=T,s.fill();{let b=15*o,A=t*.16;for(let C=b/2;C<i;C+=b){let D=g(C);for(let O=D-b*.6;O>D-A;O-=b){let L=1-(D-O)/A,F=Math.sin(C*12.9898+O*78.233)*43758.5453;F-Math.floor(F)>L*1.15||(s.fillStyle=we(.35+.6*L),s.beginPath(),s.arc(C,Math.round(O/b)*b,b*.36*(.35+.65*L),0,Math.PI*2),s.fill())}}}s.lineCap="round",s.strokeStyle=he.paper,s.lineWidth=t*.0065,s.beginPath(),u(t*.03),s.stroke(),s.strokeStyle=$e(.5),s.lineWidth=t*.0025,s.beginPath(),u(t*.052),s.stroke(),s.strokeStyle=we(.95),s.lineWidth=t*.008,s.beginPath(),s.moveTo(0,t*.045),s.lineTo(i,t*.045),s.stroke();let w=.86,[v]=a(w,0),M=c*.92;Ga(s,v,r(v)-M*.55,M*.085,he.black1,"rgba(11, 12, 15, 0.18)");let[x]=a(.42,0),E=r(x)-(l*.9+t*.03),_=(t*.045+E)/2;Be(s,x,_-t*.035,"Dylan Hughes",t*.12,he.paper,"display"),Be(s,x,_+t*.06,"Creative technologist",t*.032,$e(1),"mono");{let b=i-56*o,A=b-330*o,C=t*.14;s.strokeStyle=xe(.3),s.lineWidth=1.5*o,s.beginPath(),s.moveTo(A,C),s.lineTo(b,C),s.stroke(),s.fillStyle=we(1),s.fillRect(A,C-2.5*o,30*o,5*o),Be(s,A,C+22*o,"Model DH-26",15*o,$e(1),"mono","left"),Be(s,b,C+22*o,"Richmond, Virginia",15*o,xe(.6),"mono","right")}return n}function Eu(i,t){let e=Math.round(t*.56),n=Ln(t,e),s=n.getContext("2d"),r=t/625;return s.fillStyle=he.black1,s.fillRect(0,0,t,e),s.strokeStyle=we(.95),s.lineWidth=3*r,s.beginPath(),s.roundRect(14*r,14*r,t-28*r,e-28*r,14*r),s.stroke(),s.fillStyle=he.paper2,s.textAlign="center",s.textBaseline="alphabetic",i==="instructions"?(Kn(s,"display",30*r),s.fillText("How to play",t/2,66*r),Kn(s,"body",20*r),s.textAlign="left",["1  Send the problem to dyl.harrell@gmail.com","2  Get a straight answer on whether","    I\u2019m the right person for it","3  Build something useful together"].forEach((o,l)=>s.fillText(o,52*r,(120+l*42)*r)),Kn(s,"mono",13*r),s.textAlign="center",s.fillStyle=$e(1),s.fillText("DYLANHUGHES.DEV",t/2,316*r)):(Kn(s,"display",40*r),s.fillText("Free play",t/2,118*r),Kn(s,"mono",15*r),s.fillStyle=$e(1),s.fillText("RICHMOND, VIRGINIA \xB7 EASTERN TIME",t/2,172*r),s.fillStyle=he.paper2,Kn(s,"body",20*r),s.fillText("Websites \xB7 Game software \xB7 Printed parts",t/2,232*r),s.fillStyle=zn.royal,s.fillRect(t/2-40*r,270*r,80*r,6*r)),n}function mp(i){let t=_t.rail,e=oe.laneLeft,n=-4,s=ie.rightShoulder[1],r=i/(e-t),a=Ln(i,(s-n)*r),o=a.getContext("2d"),l=v=>(v-t)*r,c=v=>(s-v)*r,h=o.createLinearGradient(0,0,0,a.height);h.addColorStop(0,he.black2),h.addColorStop(1,he.black1),o.fillStyle=h,o.fillRect(0,0,a.width,a.height);for(let v=0;v<a.height;v+=Math.max(2,r*.6))o.fillStyle=`rgba(255,255,255,${.012+.012*Math.sin(v*.37)})`,o.fillRect(0,v,a.width,1);o.strokeStyle=we(.95),o.lineWidth=1.4*r,o.beginPath(),o.moveTo(l(ie.leftShoulder[0]+6),c(ie.leftShoulder[1]-10)),o.lineTo(l(ie.lipLeft[0]-4),c(ie.lipLeft[1]-7)),o.stroke(),o.beginPath(),o.moveTo(l(ie.lipRight[0]+4),c(ie.lipRight[1]-7)),o.lineTo(l(ie.rightShoulder[0]-6),c(ie.rightShoulder[1]-10)),o.stroke();let u=l(_t.cx),d=c(30),f=["1110","1001","1001","1001","1110"],p=["1001","1001","1111","1001","1001"],y=3.1*r,m=u-9*y/2,g=c(78);[f,p].forEach((v,M)=>v.forEach((x,E)=>[...x].forEach((_,b)=>{o.fillStyle=_==="1"?zn.royal:xe(.07),o.beginPath(),o.arc(m+(M*5+b+.5)*y,g+(E+.5)*y,y*.36,0,Math.PI*2),o.fill()}))),o.fillStyle=zn.white,o.textAlign="center",o.textBaseline="middle",Kn(o,"display",9*r),o.fillText("Dylan Hughes",u,d+6*r),Kn(o,"mono",3.3*r),o.fillStyle=bu(.9),o.fillText("MODEL DH-26 \xB7 RICHMOND, VIRGINIA",u,d+17*r);let T=o.createLinearGradient(l(t),0,l(e),0);T.addColorStop(0,he.royal),T.addColorStop(.5,he.deep),T.addColorStop(1,he.royal);let w=v=>{o.moveTo(l(t),c(10+v)),o.bezierCurveTo(l(t+130),c(1.5+v),l(e-130),c(1.5+v),l(e),c(10+v))};return o.fillStyle=T,o.beginPath(),o.moveTo(l(t),c(n)),w(0),o.lineTo(l(e),c(n)),o.closePath(),o.fill(),o.strokeStyle=xe(.8),o.lineWidth=.7*r,o.beginPath(),w(4.5),o.stroke(),a}function gp(i){let t=Math.round(i*(Jn.height/Jn.width)),e=Ln(i,t),n=e.getContext("2d");n.fillStyle=zn.white,n.fillRect(0,0,i,t);let s=i/2,r=t*(1-13.5/Jn.height),a=i/Jn.width;return n.fillStyle=zn.royal,n.beginPath(),n.arc(s,r,6.2*a,0,Math.PI*2),n.fill(),n.fillStyle=zn.white,n.beginPath(),n.arc(s,r,4*a,0,Math.PI*2),n.fill(),n.fillStyle=zn.royal,n.beginPath(),n.arc(s,r,2*a,0,Math.PI*2),n.fill(),n.fillStyle="rgba(20, 22, 26, 0.18)",n.fillRect(0,t-1.5*a,i,1.5*a),e}function xp(i){let t=Ln(i,i),e=t.getContext("2d"),n=i/2;e.fillStyle=zn.white,e.beginPath(),e.arc(n,n,n,0,Math.PI*2),e.fill(),e.strokeStyle=zn.royal,e.lineWidth=i*.07,e.beginPath(),e.arc(n,n,n*.88,0,Math.PI*2),e.stroke(),e.strokeStyle="rgba(20, 22, 26, 0.5)",e.lineWidth=i*.008,e.beginPath(),e.arc(n,n,n*.74,0,Math.PI*2),e.stroke();let s=["1110","1001","1001","1001","1110"],r=["1001","1001","1111","1001","1001"],a=i*.06,o=n-9*a/2,l=n-5*a/2-i*.04;return[s,r].forEach((c,h)=>c.forEach((u,d)=>[...u].forEach((f,p)=>{e.fillStyle=f==="1"?zn.ink:"rgba(20, 22, 26, 0.1)",e.beginPath(),e.arc(o+(h*5+p+.5)*a,l+(d+.5)*a,a*.36,0,Math.PI*2),e.fill()}))),e.fillStyle=zn.ink,e.textAlign="center",e.textBaseline="middle",Kn(e,"mono",i*.075),e.fillText("1,000",n,n+i*.22),t}function _p(i,t=8,e=12){let n=Pn(i.posts),s=ss(n,e,10),r=s.map(m=>m[0]),a=s.map(m=>m[1]),o=[Math.min(...r),Math.min(...a),Math.max(...r),Math.max(...a)],l=Ln((o[2]-o[0])*t,(o[3]-o[1])*t),c=l.getContext("2d"),h=m=>(m-o[0])*t,u=m=>(o[3]-m)*t,d=m=>{c.beginPath(),m.forEach(([g,T],w)=>w?c.lineTo(h(g),u(T)):c.moveTo(h(g),u(T))),c.closePath()},f=(o[0]+o[2])/2,p=(o[1]+o[3])/2,y=c.createRadialGradient(h(f),u(p+10),0,h(f),u(p),(o[2]-o[0])*t);y.addColorStop(0,he.black3),y.addColorStop(1,he.black1),c.fillStyle=y,c.fillRect(0,0,l.width,l.height),c.save(),d(s),c.clip(),c.fillStyle=xe(.09);for(let m=o[1];m<o[3];m+=4.2)for(let g=o[0];g<o[2];g+=4.2)c.beginPath(),c.arc(h(g),u(m),.42*t,0,Math.PI*2),c.fill();return c.restore(),c.lineJoin="round",c.strokeStyle=we(1),c.lineWidth=1.5*t,d(ss(n,e-1.6,10)),c.stroke(),c.strokeStyle=$e(.4),c.lineWidth=.5*t,d(ss(n,e-4.4,10)),c.stroke(),{canvas:l,box:o}}function wu(i,{ppm:t=8,pad:e=1.5,mark:n=!1}={}){let s=i.map(m=>m[0]),r=i.map(m=>m[1]),a=[Math.min(...s)-e,Math.min(...r)-e,Math.max(...s)+e,Math.max(...r)+e],o=Ln((a[2]-a[0])*t,(a[3]-a[1])*t),l=o.getContext("2d"),c=m=>(m-a[0])*t,h=m=>(a[3]-m)*t,u=new Path2D;i.forEach(([m,g],T)=>T?u.lineTo(c(m),h(g)):u.moveTo(c(m),h(g))),u.closePath();let d=0,f=0,p=0;i.forEach(([m,g],T)=>{let[w,v]=i[(T+1)%i.length],M=m*v-w*g;d+=M,f+=(m+w)*M,p+=(g+v)*M}),f/=3*d,p/=3*d,l.fillStyle=he.black1,l.fillRect(0,0,o.width,o.height),l.save(),l.clip(u);let y=l.createRadialGradient(c(f),h(p),0,c(f),h(p),Math.max(o.width,o.height)*.8);y.addColorStop(0,he.black3),y.addColorStop(1,he.black1),l.fillStyle=y,l.fillRect(0,0,o.width,o.height),l.fillStyle=xe(.09);for(let m=a[1]+3.175;m<a[3];m+=6.35)for(let g=a[0]+3.175;g<a[2];g+=6.35)l.beginPath(),l.arc(c(g),h(m),.42*t,0,Math.PI*2),l.fill();return l.lineJoin="round",l.strokeStyle=we(.26),l.lineWidth=9*t,l.stroke(u),l.strokeStyle=we(1),l.lineWidth=3.2*t,l.stroke(u),l.restore(),n&&l.isPointInPath(u,c(f),h(p))&&Ga(l,c(f),h(p),1.9*t,we(1),xe(.05)),{canvas:o,box:a}}var Ps=Math.PI/180,yc=_t.pitch*Ps,ln={inner:(_t.w+22)*U,wallT:.019,front:.585,back:-.565,top:.116,bottom:-.32,floor:-.93},Au=i=>ln.bottom+(i-ln.front)*Math.tan(yc),rs={w:.64,h:.76,d:.25,glassW:.58,glassH:.58/1.32,glassY:.255,dmdW:.384,dmdH:.096,dmdY:.118};function ht(i,t,{cast:e=!0,receive:n=!0}={}){let s=new _e(i,t);return s.castShadow=e,s.receiveShadow=n,s}function Ui(i,t=8){let e=new Ai(i);return e.colorSpace=qe,e.anisotropy=t,e}function Cu({canvas:i,box:t}){let e=Ui(i),[n,s,r,a]=[(t[0]-_t.w/2)*U,(t[1]-_t.l/2)*U,(t[2]-_t.w/2)*U,(t[3]-_t.l/2)*U];return e.repeat.set(1/(r-n),1/(a-s)),e.offset.set(-n/(r-n),-s/(a-s)),new je({map:e,roughness:.3,clearcoat:1,clearcoatRoughness:.05})}var vp,Pu=()=>vp||(vp=new ge({color:660016,roughness:.3,emissive:In,emissiveIntensity:Ha(In,.16)})),Iu=new je({color:15264494,roughness:.45,clearcoat:.2});function bp({M:i,art:t,dmdCanvas:e,anisotropy:n,maxAnisotropy:s=n}){let r=new fe,a=new fe;a.rotation.x=yc,r.add(a);let o=new fe;a.add(o);let l={root:r,body:a,playfield:o,inserts:new Map,pops:[],targets:[],flippers:[],slings:[],interactive:[],gi:[],bulbs:[],rollovers:[]};return l.toWorld=(c,h,u=0)=>(a.updateMatrixWorld(!0),Ee(c,h,u).applyMatrix4(o.matrixWorld)),Mv(o,i,t,n),Sv(o,i),Tv(o,i,t,l),Av(o,i,t,l),Rv(o,i,l),Cv(o,i,t,n),Pv(o,i,l),Iv(o,i,l),Lv(o,i,t,n,l),Dv(o,i,t,n,l),Nv(o,i,l),Vv(o,i,l),Wv(o,l),Xv(o,i,l),qv(o,i,l),Yv(o,i,l),Zv(a,r,i,t,n,l),$v(r,i,t,e,n,l,s),yv(r,l),l}function yv(i,t){let e=new Set,n=c=>{c&&e.add(c)};t.pops.forEach(c=>n(c.group)),t.slings.forEach(c=>{n(c.rubber),n(c.arm)}),t.flippers.forEach(c=>n(c.pivot)),t.targets.forEach(c=>n(c.holder)),t.rollovers.forEach(c=>n(c.wire)),t.saucer&&n(t.saucer.group),t.gate&&n(t.gate.flap),t.plunger&&(n(t.plunger.group),n(t.plunger.spring)),n(t.ball),n(t.shooterBall),n(t.startButton);let s=new Set(t.interactive);i.updateMatrixWorld(!0);let r=new ce().copy(i.matrixWorld).invert(),a=new Map,o=[],l=c=>{if(!e.has(c)){if(c.isMesh&&!s.has(c)&&!Array.isArray(c.material)&&!c.material.transparent&&!c.morphTargetInfluences&&c.visible){let h=new ce().multiplyMatrices(r,c.matrixWorld);if(h.determinant()>0){let u=c.geometry,d=Object.keys(u.attributes).sort().join(","),f=[c.material.uuid,c.castShadow,c.receiveShadow,c.renderOrder,!!c.userData.noAO,d,!!u.index].join("|");a.has(f)||a.set(f,{material:c.material,cast:c.castShadow,receive:c.receiveShadow,order:c.renderOrder,noAO:!!c.userData.noAO,geos:[]}),a.get(f).geos.push(u.clone().applyMatrix4(h)),o.push(c)}}for(let h of c.children)l(h)}};l(i);for(let c of o)c.removeFromParent(),c.geometry.dispose();for(let c of a.values()){let h=c.geos.length===1?c.geos[0]:nn(c.geos);if(!h)continue;c.geos.length>1&&c.geos.forEach(d=>d.dispose());let u=new _e(h,c.material);u.castShadow=c.cast,u.receiveShadow=c.receive,u.renderOrder=c.order,c.noAO&&(u.userData.noAO=!0),u.matrixAutoUpdate=!1,i.add(u)}}var yp=[[0,0],[oe.laneLeft,0],[oe.laneLeft,105.8],[_t.w,105.8],[_t.w,_t.l],[0,_t.l]],Mp=Array.from({length:40},(i,t)=>{let e=-(t/40)*Math.PI*2;return[gi.x+Math.cos(e)*(gi.r+.6),gi.y+Math.sin(e)*(gi.r+.6)]});function Mv(i,t,e,n){let s=sp(Ui(e.playfield,n)),r=([c,h])=>new ot(c/_t.w,h/_t.l),a=new dn(yp.map(r));a.holes.push(new li(Mp.map(r)));let o=new ps(a,24).scale(_t.w*U,_t.l*U,1).translate(-_t.w/2*U,-_t.l/2*U,0).rotateX(-Math.PI/2),l=ht(o,s,{cast:!1});return i.add(l),i.add(ht(Di(yp,-_t.thick-.05,_t.thick,{holes:[Mp]}),t.wood,{cast:!1})),l}var Cs={t:1.6,h:28.6};function Sv(i,t){let e=Cs.t/2,n=[[_t.rail-e,-2],[_t.rail-e,Ii.left.cy],...za(Ii.left.cx,Ii.left.cy,Ii.left.r+e,180,90,24).slice(1),...za(Ii.right.cx,Ii.right.cy,Ii.right.r+e,90,0,28),[oe.laneRight+e,105.8]];i.add(ht(bn(n,Cs.t,Cs.h),t.steel)),bv(i,t,n,1);let s=oe.laneLeft-oe.dividerFace,r=[[oe.dividerFace+s/2,oe.apronTop],[oe.dividerFace+s/2,oe.dividerTop]];i.add(ht(bn(r,s,Cs.h),t.steel))}function bv(i,t,e,n,s=120){let r=[],a=s/2;for(let o=1;o<e.length;o++){let[l,c]=e[o-1],[h,u]=e[o],d=Math.hypot(h-l,u-c);if(!d)continue;let f=a;for(;f<=d;f+=s)r.push({x:l+(h-l)*f/d,y:c+(u-c)*f/d,dx:(h-l)/d,dy:(u-c)/d,side:n});a=f-d}Ep(i,t,r)}function Tp(i,t,e,n){let s=[0];for(let a=1;a<e.length;a++)s.push(s[a-1]+Math.hypot(e[a][0]-e[a-1][0],e[a][1]-e[a-1][1]));let r=n.filter(a=>Number.isFinite(a.at)).map(a=>{let o=a.at*s.at(-1),l=1;for(;l<e.length-1&&s[l]<o;)l++;let c=e[l-1],h=e[l],u=s[l]-s[l-1]||1,d=(o-s[l-1])/u;return{x:c[0]+(h[0]-c[0])*d,y:c[1]+(h[1]-c[1])*d,dx:(h[0]-c[0])/u,dy:(h[1]-c[1])/u,side:a.side}});Ep(i,t,r)}function Ep(i,t,e){let n=[],s=[];for(let{x:r,y:a,dx:o,dy:l,side:c}of e){let h=-l*c,u=o*c,d=r+h*4.6,f=a+u*4.6,p=Math.atan2(l,o);n.push(new pe(9*U,1.2*U,6*U).rotateY(p).translate(...Ee(d,f,.6).toArray())),s.push(new Pe(2.3*U,2.3*U,1.1*U,12).translate(...Ee(d+h*.6,f+u*.6,1.75).toArray()))}n.length&&i.add(ht(nn(n),t.steel,{cast:!1}),ht(nn(s),t.darkSteel,{cast:!1}))}function Tv(i,t,e,n){Tr.forEach((s,r)=>{let a=e.inlane[r];i.add(ht(Di(Pn(s.plate.outline),s.plate.z,s.thickness,{bevel:.3}),[Cu(a.plate),Pu()])),i.add(ht(Di(Pn(s.cover.outline),s.cover.z,s.thickness,{bevel:.4}),[Cu(a.cover),Pu()]));let o=s.cover.z+s.thickness;for(let[l,c]of s.stacks)i.add(Ie(ht(new Pe(4*U,4*U,(s.plate.z-.8)*U,16).translate(0,(s.plate.z-.8)/2*U,0),Iu),l,c)),i.add(Ie(ht(new Pe(4*U,4*U,15*U,16).translate(0,7.5*U,0),Iu),l,c,s.plate.z+s.thickness));for(let[l,c]of[...s.stacks,s.post])i.add(Ie(ht(new Pe(4.5*U,4.5*U,.8*U,16).translate(0,.4*U,0),t.steel,{cast:!1}),l,c,o)),i.add(Ie(ht(Fe([[0,0],[3.6,0],[3.6,1.2],[2.6,2.6],[0,2.8]],16),t.darkSteel,{cast:!1}),l,c,o+.8));i.add(Ie(ht(new Pe(3.6*U,3.6*U,(s.cover.z-29.8)*U,6).translate(0,(s.cover.z-29.8)/2*U,0),t.steel,{cast:!1}),...s.post,29.8))});for(let[s,r]of ac)i.add(Ev(t,s,r));i.add(ht(nn([...oc,...mu].map(s=>bn(s.line,Cs.t,Cs.h))),t.steel));for(let s of oc)Tp(i,t,s.line,s.mounts);for(let[s,r]of gu)i.add(wv(t,s,r,lc.d,lc.height));for(let[s,r]of Ba.entries())n.rollovers.push(Lu(i,t,r.x,r.y,As("orbit"+s)));for(let[s,r]of mi.entries())n.rollovers.push(Lu(i,t,r.x,r.y,As("return"+s)))}var Sp=(()=>{let i=[];for(let t=0;t<16;t++){let e=t/16*Math.PI*2,n=t%2?7.6:9.5;i.push([Math.cos(e)*n,Math.sin(e)*n])}return i})(),Va;function Ev(i,t,e,{ring:n=!0}={}){if(!Va){let r=is(Sp,9,{bevel:.5,curveSegments:1}),a=is(Sp,9,{bevel:.5,curveSegments:1}).translate(0,18*U,0),o=new Pe(4.75*U,4.75*U,9*U,16).translate(0,13.5*U,0);Va={body:nn([r,a,o.toNonIndexed()]),ring:new lr(7.13*U,2.38*U,10,28).rotateX(Math.PI/2).translate(0,13.5*U,0),nut:new Pe(3.67*U,3.67*U,2.8*U,6).translate(0,28.4*U,0)}}let s=new fe;return s.add(ht(Va.body,i.postPlastic)),n&&s.add(ht(Va.ring,i.rubber)),s.add(ht(Va.nut,i.steel,{cast:!1})),Ie(s,t,e)}function wv(i,t,e,n,s){let r=new fe,a=n/2;return r.add(ht(Fe([[0,0],[a-.6,0],[a-.6,6],[0,6]],20),i.postPlastic)),r.add(ht(Fe([[a-2.4,6],[a,6.6],[a,20.4],[a-2.4,21]],24),i.rubber)),r.add(ht(Fe([[0,6],[a-2.4,6],[a-2.4,21],[a-.6,21],[a-.6,s-1],[a-1.6,s],[0,s]],20),i.postPlastic)),Ie(r,t,e)}function wp(i,t,e,{height:n=30}={}){return Ie(ht(Fe([[0,0],[5.6,0],[5.6,1.4],[4.76,2.2],[4.76,9],[3.9,10.5],[3.9,16.5],[4.76,18],[4.76,n],[0,n]],20),i.postPlastic),t,e)}var Uu=new un({color:328966});function Lu(i,t,e,n,s){let r=new fe,a=new dn,o=44.45/2-2.38,l=2.38;a.absarc(0,o,l,0,Math.PI,!1),a.absarc(0,-o,l,Math.PI,Math.PI*2,!1);let c=new ps(a,6).scale(U,U,U).rotateX(-Math.PI/2),h=new _e(c,Uu);h.position.y=.06*U,r.add(h);let u=[[0,-21.2,-3],[0,-19.05,0]];for(let f=1;f<12;f++){let p=-1+2*f/12;u.push([0,p*19.05,6.35*Math.sqrt(1-p*p)])}u.push([0,19.05,0],[0,21.2,-3]);let d=ht(dc(u,.8,{tension:.2,radial:8}),t.chrome,{receive:!1});return r.add(d),Ie(r,e,n),i.add(r),{wire:d,x:e,y:n,insert:s,press:0}}var Rs={postR:4.76,cord:6.35,travel:9};function Av(i,t,e,n){for(let s of br){let r=new fe,a=s.posts;for(let[L,F]of a)r.add(wp(t,L,F,{height:30.5}));let[o,l,c]=a,h=Math.hypot(l[0]-o[0],l[1]-o[1]),u=(l[0]-o[0])/h,d=(l[1]-o[1])/h,f=-d,p=u;(c[0]-o[0])*f+(c[1]-o[1])*p>0&&(f=-f,p=-p);let y=Rs.postR+Rs.cord/2,m=fc(ss(Pn(a),y,8),3),g=m.map(([L,F])=>{let z=((L-o[0])*u+(F-o[1])*d)/h;return(L-o[0])*f+(F-o[1])*p>y*.5&&z>0&&z<1?Math.sin(Math.PI*z):0}),T=L=>ka(m.map(([F,z],V)=>[F+f*L*g[V],z+p*L*g[V],13.5]),Rs.cord/2,{closed:!0,tension:.1,radial:8,segments:m.length*2}),w=ht(T(0),t.rubber);w.userData.action="sling-"+s.side,n.interactive.push(w),r.add(w);let v=ss(Pn(a),12,8);r.add(ht(Di(v,30.5,2.2,{bevel:.4}),[Cu(e.plastics[br.indexOf(s)]),Pu()]));for(let[L,F]of a)r.add(Ie(ht(new Pe(3.5*U,3.5*U,.55*U,16).translate(0,.275*U,0),t.steel),L,F,32.7)),r.add(Ie(ht(new Pe(3.67*U,3.67*U,2.8*U,6).translate(0,1.4*U,0),t.steel),L,F,33.25));let M=Math.atan2(d,u)/Ps,x=Math.sign(-d*f+u*p),E=-x*(y-Rs.cord/2-.15-2),_=[(o[0]+l[0])/2,(o[1]+l[1])/2],b=new fe,A=ht(new pe(18*U,10*U,4*U),Iu);A.position.set(0,13.5*U,E*U),b.add(A),b.add(ht(new pe(7.5*U,9*U,1.5*U).translate(0,4*U,(E+x*1.2)*U),t.steel)),Ie(b,_[0],_[1],0,M),r.add(b);let C=new _e(new en(10*U,3*U).rotateX(-Math.PI/2),Uu);C.position.set(0,.06*U,(E+x*1.2)*U);let D=Ie(new fe,_[0],_[1],0,M);D.add(C);for(let L of[-1,1]){let F=ht(new pe(7*U,12*U,.35*U).translate(L*26*U,10*U,-x*(y-Rs.cord/2-1.2)*U),t.steel),z=ht(new pe(9*U,5*U,6*U).translate(L*26*U,2.5*U,-x*(y-Rs.cord/2-5.5)*U),t.graphitePlastic);D.add(F,z)}r.add(D),i.add(r);let O=new N(f*U,0,-p*U).multiplyScalar(Rs.travel+.15);n.slings.push({side:s.side,rubber:w,rubberGeo:T,arm:b,rest:b.position.clone(),push:O,kicked:-1,shown:0})}}function xc(i,t,e){let n=Math.asin((i-t)/e),s=[],r=18,a=Math.PI/2-n,o=Math.PI*1.5+n;for(let h=0;h<=r;h++){let u=a+(o-a)*(h/r);s.push([Math.cos(u)*i,Math.sin(u)*i])}let l=-Math.PI/2+n,c=Math.PI/2-n;for(let h=0;h<=r;h++){let u=l+(c-l)*(h/r);s.push([e+Math.cos(u)*t,Math.sin(u)*t])}return s}function Rv(i,t,e){for(let n of Sn){let s=rc(n),r=s.rubberTo-s.rubberFrom,a=n.length,o=is(xc(...s.flange,a),s.rubberFrom-.6,{bevel:.5}),l=is(xc(...s.groove,a),r),c=is(xc(n.baseR-2.6,n.tipR-2.6,a),r,{bevel:2.6}),h=is(xc(...s.cap,a),n.height-s.rubberTo,{bevel:.9}),u=new fe,d=[[o,t.whitePlastic,.6],[l,t.whitePlastic,s.rubberFrom],[c,t.rubberRoyal,s.rubberFrom],[h,t.whitePlastic,s.rubberTo]];for(let[f,p,y]of d){let m=ht(f,p);m.position.y=y*U,m.userData.action="flip-"+n.side,u.add(m),e.interactive.push(m)}u.add(ht(new Pe(3.2*U,3.2*U,1*U,6).translate(0,(n.height+.5)*U,0),t.steel,{cast:!1})),Ie(u,n.x,n.y,0,n.rest),i.add(u),e.flippers.push({...n,pivot:u})}}function Cv(i,t,e,n){let s=Math.atan2(ie.lipEndY-ie.lipCy,ie.lipLeft[0]-_t.cx)/Ps,r=Math.atan2(ie.lipEndY-ie.lipCy,ie.lipRight[0]-_t.cx)/Ps,a=za(_t.cx,ie.lipCy,ie.lipR,s,r,36),o=[[_t.rail,-4],[oe.laneLeft,-4],ie.rightShoulder,...[...a].reverse(),ie.leftShoulder],l=1.3,c=ie.deck,h=new je({color:1316378,roughness:.4,metalness:.3,clearcoat:.8,clearcoatRoughness:.1}),u=Ui(e.apron,n),d=(_t.rail-_t.w/2)*U,f=(oe.laneLeft-_t.w/2)*U,p=(-4-_t.l/2)*U,y=(ie.rightShoulder[1]-_t.l/2)*U;u.repeat.set(1/(f-d),1/(y-p)),u.offset.set(-d/(f-d),-p/(y-p));let m=new je({map:u,roughness:.55,metalness:0,clearcoat:.8,clearcoatRoughness:.1});i.add(ht(Di(Pn(o),c-l,l,{bevel:.4}),[m,h]));let g=c-l,T=155.5/2,w=[bn([ie.leftShoulder,ie.lipLeft],l,g),bn([ie.lipRight,ie.rightShoulder],l,g),bn([[oe.laneLeft-.65,-4],[oe.laneLeft-.65,ie.rightShoulder[1]]],l,g),bn([[_t.rail+.65,-4],[_t.rail+.65,ie.leftShoulder[1]]],l,14,g-14),bn([[_t.rail,-3.35],[_t.cx-T,-3.35]],l,g),bn([[_t.cx+T,-3.35],[oe.laneLeft,-3.35]],l,g),bn([[_t.cx-T,-3.35],[_t.cx+T,-3.35]],l,g-38.1,38.1)];i.add(ht(nn(w),h)),i.add(ht(Di(Pn(o),.08,.1),t.cabinetInner,{cast:!1})),i.add(ht(nn(pu.map(M=>bn(M,1.6,20))),t.steel));let v=za(_t.cx,ie.lipCy,ie.lipR+.6,s,r,36).map(([M,x])=>[M,x,c-.6]);i.add(ht(ka(v,.8,{tension:0}),t.aluminium,{cast:!1}));for(let[M,x]of[["instructions",_t.cx-147.65],["free",_t.cx+147.65]]){let E=Ui(e.cards[M],n),_=ht(new en(158.8*U,88.9*U).rotateX(-Math.PI/2),new ge({map:E,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),{cast:!1});_.position.copy(Ee(x,61.55,c+.3)),i.add(_);let b=79.4+1.2,A=61.55-44.45-1.2,C=61.55+44.45+1.2;i.add(ht(bn([[x-b,A],[x+b,A],[x+b,C],[x-b,C],[x-b,A]],2.4,1.2,c),t.aluminium,{cast:!1}))}}function Pv(i,t,e){let n=[];for(let s of Li.rubbers){for(let[a,o]of s.posts)i.add(wp(t,a,o,{height:26}));let r=fc(ss(Pn(s.posts),s.postR+s.cord/2,10),3);n.push(ka(r.map(([a,o])=>[a,o,s.h]),s.cord/2,{closed:!0,tension:.1,radial:8,segments:r.length*2}))}i.add(ht(nn(n),t.rubber));for(let[s,r]of Li.lanes.entries())e.rollovers.push(Lu(i,t,r.x,r.y,As("lane"+s)))}function Iv(i,t,e){let{r:n}=gi,s=new fe,r=(d,f,p=0)=>new N(d*U,p*U,-f*U),a=[];for(let d=0;d<=8;d++){let f=d/8*10.5;a.push([f,8.5-Math.sqrt(14.1**2-f*f)])}let o=a.map(([d,f])=>[d,f-.9]),l=Fe([...o,[n-.4,-.9],[n,-.1],[n+4.4,.05],[n+4.4,.85],[n+3.8,.95],[n-.3,.95],[n-1,.2],...[...a].reverse()],48);s.add(ht(l,t.steel,{cast:!1}));let c=(gi.kickAngle+180)*Ps,h=new _e(new pe(3.6*U,.2*U,9*U),Uu);h.position.copy(r(Math.cos(c)*(n-1),Math.sin(c)*(n-1),1.05)),h.rotation.y=c+Math.PI/2,s.add(h);let u=new fe;u.add(ht(new pe(2*U,8*U,6*U).translate(0,-3*U,0),t.darkSteel,{cast:!1})),u.position.copy(r(Math.cos(c)*(n-2),Math.sin(c)*(n-2),0)),u.rotation.y=c+Math.PI/2,s.add(u);for(let d of[-1,1]){let f=c+d*(Math.PI/2),p=ht(Fe([[0,0],[2.7,0],[2.7,.6],[1.8,1.4],[0,1.6]],16),t.chrome,{cast:!1});p.position.copy(r(Math.cos(f)*(n+2.2),Math.sin(f)*(n+2.2),.95)),s.add(p)}Ie(s,gi.x,gi.y),i.add(s),e.saucer={group:s,finger:u,rest:u.position.clone(),out:r(-Math.cos(c),-Math.sin(c)).normalize(),kicked:-1}}function Lv(i,t,e,n,s){let r=Fe([[0,0],[17,0],[17,2.7],[0,2.7]],40),a=Fe([[11,2.7],[23.15,2.7],[23.4,3.4],[23.15,4.7],[22.2,5.4],[11,5.4]],56),o=Fe([[0,5.4],[15.5,5.4],[15.5,31.6],[0,31.6]],40),l=Fe([[15.8,-9],[16.8,-9],[16.8,0],[22.6,0],[23.2,.5],[23.2,1.5],[22.6,2],[15.8,2],[15.8,-9]],56),c=new Pe(1.6*U,1.6*U,42*U,10).translate(0,-21*U,0),h=Fe([[0,31.6],[25,31.6],[29.4,32],[30,33],[30,36.5],[29.3,37.8],[25.5,41.6],[21,43.1],[10,43.45],[0,43.5]],72),u=new ge({map:Ui(e.popDecal,n),roughness:.3,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),d=new ta(20.5*U,48).rotateX(-Math.PI/2).translate(0,43.56*U,0),f=new pe(9*U,6*U,6*U).translate(0,3*U,0),p=Fe([[0,6],[2.6,6],[3.4,7],[5,10],[5,18.5],[3.8,21.5],[0,22.4]],20);for(let[y,m]of Es.entries()){let g=new fe,T=[],w=(D,O,...L)=>{let F=new fe;return F.add(...L),F.userData={label:D,lift:O},g.add(F),T.push(F),F};w("Base",0,ht(r,t.graphitePlastic));let v=ht(a,t.whitePlastic);w("Skirt",26,v);let M=t.bulb.clone();s.bulbs.push(M),w("Lamp \xB7 #555",56,ht(f,t.darkSteel,{cast:!1}),ht(p,M,{cast:!1}));let x=t.popBody.clone(),E=ht(o,x);w("Body",86,E);let _=new fe;_.add(ht(l,t.chrome));for(let D of[-1,1])_.add(ht(c,t.chrome).translateX(D*19.5*U));_.position.y=Er.ringRest*U,w("Ring & rods",128,_);let b=t.popCap.clone(),A=ht(h,b,{receive:!1});w("Cap \xB7 \xD860",172,A),w("Decal",206,ht(d,u,{cast:!1}));let C=[-1,1].map(D=>ht(new Pe(2.6*U,2.6*U,.9*U,16).translate(D*17.46*U,43.75*U,0),t.chrome,{cast:!1}));w("Cap screws \xD72",232,...C),Ie(g,m.x,m.y),i.add(g),g.traverse(D=>{D.userData.action="pop-"+y}),s.interactive.push(A,E,v),s.pops.push({group:g,parts:T,ring:_,skirt:v,cap:A,capMat:b,bodyMat:x,fired:-1,axis:new N(1,0,0),x:m.x,y:m.y,id:m.id})}}function Dv(i,t,e,n,s){let r=Jn,a=2.4,o=-r.depth/2,l=new ge({map:Ui(e.target,n),roughness:.42}),c=t.whitePlastic;for(let[u,d]of r.list.entries()){let f=new fe,p=ht(new pe(r.width*U,r.height*U,a*U),[c,c,c,c,l,c]);p.position.set(0,(r.height/2+1.5)*U,-(o+a/2)*U),f.add(p),f.add(ht(new pe(18*U,22*U,(r.depth-a)*U).translate(0,12.5*U,-(o+a+(r.depth-a)/2)*U),t.graphitePlastic)),f.add(ht(new pe(.4*U,24*U,5*U).translate(-4*U,14*U,-(r.depth/2+1)*U),t.steel,{cast:!1})),Ie(f,d.x,d.y),i.add(f),i.add(Ie(ht(new pe(22*U,1.5*U,(r.depth+4)*U).translate(0,.75*U,0),t.darkSteel,{cast:!1}),d.x,d.y+1)),p.userData.action="target-"+u,s.interactive.push(p),s.targets.push({holder:f,face:p,rest:f.position.clone(),back:new N(0,0,-U),hit:-1,index:u})}for(let[u,d]of xu.entries()){let f=d.d/2,p=xi.grooves[u],y=xi.h,m=xi.cord;i.add(Ie(ht(Fe([[0,0],[f,0],[f,y-m/2-1.5],[p,y-m/2-.5],[p,y+m/2+.5],[f,y+m/2+1.5],[f,d.height-1.2],[f-1.2,d.height],[0,d.height]],28),t.postPlastic),d.x,d.y)),i.add(Ie(ht(new Pe(3.67*U,3.67*U,2.8*U,6).translate(0,1.4*U,0),t.steel,{cast:!1}),d.x,d.y,d.height))}let h=Uv(xi.posts.map(([u,d],f)=>({x:u,y:d,r:xi.grooves[f]+xi.cord/2})));i.add(ht(ka(fc(h,3).map(([u,d])=>[u,d,xi.h]),xi.cord/2,{closed:!0,tension:.1,radial:8}),t.rubber)),i.add(ht(nn(cc.map(u=>bn(u.line,u.thickness,Cs.h))),t.steel));for(let u of cc)Tp(i,t,u.line,u.mounts)}function Uv(i){let t=Pn(i.map(r=>[r.x,r.y])).map(([r,a])=>i.find(o=>o.x===r&&o.y===a)),e=t.length,n=[],s=(r,a)=>{let o=a.x-r.x,l=a.y-r.y,c=Math.hypot(o,l);return Math.atan2(l,o)-Math.acos((r.r-a.r)/c)};for(let r=0;r<e;r++){let a=t[r],o=s(t[(r-1+e)%e],a),c=s(a,t[(r+1)%e])-o;for(;c<0;)c+=Math.PI*2;let h=Math.max(2,Math.ceil(c/(8*Ps)));for(let u=0;u<=h;u++){let d=o+c*u/h;n.push([a.x+Math.cos(d)*a.r,a.y+Math.sin(d)*a.r])}}return n}function Nv(i,t,e){e.ramps=[];let n=t.clearPlastic,s=new Du;for(let r of ns){let a=new On(r.profile.map(([u,d,f])=>Ee(u,d,f)),!1,"centripetal"),o=Fv(r.profile),l=new fe,c=ht(Ov(a,o),n,{cast:!1,receive:!1});c.renderOrder=2,l.add(c),l.add(Bv(a,o,t)),l.add(kv(r,t,n,s));for(let u of l.children)u.traverse(d=>{d.userData.action="ramp-"+r.id});i.add(l),e.interactive.push(c);let h=new On(r.wire.map(([u,d,f])=>Ee(u,d,f)),!1,"centripetal");i.add(ht(zv(h,r),t.chrome)),i.add(Hv(r,t,s)),e.ramps.push({id:r.id,side:r.side,curve:a,wireCurve:h,group:l})}i.add(...s.meshes(t))}function Fv(i){let t=[0];for(let e=1;e<i.length;e++)t.push(t[e-1]+Math.hypot(...[0,1,2].map(n=>i[e][n]-i[e-1][n])));return e=>{let n=e*t.at(-1),s=1;for(;s<t.length-1&&t[s]<n;)s++;let r=Math.max(0,Math.min(1,(n-t[s-1])/(t[s]-t[s-1]||1)));return i[s-1][3]+(i[s][3]-i[s-1][3])*r}}var _c=.9,vc=.35;function Ov(i,t){let e=wr,n=240,s=new N(0,1,0),r=[];for(let c=0;c<=n;c++){let h=c/n,u=i.getPointAt(h),d=i.getTangentAt(h);r.push({p:u,side:new N().crossVectors(d,s).normalize(),w:t(h),floor:u.y/U})}let a=({w:c,floor:h})=>{let u=c/2,d=u+e.side,f=e.wall,p=e.wall,y=Math.max(0,_c-h),m=Math.max(-e.floor,vc-h),g=h<30?Math.min(m,vc-h):m;return[[[-d,m],[d,m],[d,f],[u,f],[u,y],[-u,y],[-u,p],[-d,p]],[[u,g],[d,g],[d,m],[u,m]],[[-d,g],[-u,g],[-u,m],[-d,m]]]},o=r.map(a),l=[];return o[0].forEach((c,h)=>{for(let u=0;u<c.length;u++){let d=[],f=[],p=[];for(let m=0;m<=n;m++){let g=r[m],T=o[m][h];for(let[w,v]of[T[u],T[(u+1)%T.length]]){let M=g.p.clone().addScaledVector(g.side,w*U).addScaledVector(s,v*U);d.push(M.x,M.y,M.z),p.push(M.y/U)}}for(let m=0;m<n*2;m+=2)Math.max(p[m],p[m+1],p[m+2],p[m+3])<vc+.05||f.push(m,m+2,m+1,m+1,m+2,m+3);let y=new Me;y.setAttribute("position",new ee(d,3)),y.setIndex(f),y.computeVertexNormals(),l.push(y)}}),nn(l.map(c=>c.toNonIndexed()))}function Bv(i,t,e){let n=wr,s=t(0)/2+n.side,r=24,a=18,o=new N(0,1,0),l=i.getPointAt(0),c=i.getTangentAt(0).setY(0).normalize().negate(),h=new N().crossVectors(c,o).normalize(),u=new dn([[0,0],[r,0],[r,vc-.1],[a,_c],[0,_c]].map(([g,T])=>new ot(g*U,T*U))),d=new ci(u,{depth:2*s*U,bevelEnabled:!1});d.translate(0,0,-s*U);let f=new ce().makeBasis(c,o,h).setPosition(l.x,0,l.z);d.applyMatrix4(f);let p=new fe;p.add(ht(d,e.steel,{cast:!1}));let y=[],m=[];for(let g of[-1,1]){let T=new N(a-5,_c,g*(s-4.5)).multiplyScalar(U).applyMatrix4(f);y.push(new Pe(2.6*U,2.6*U,.16*U,20).translate(T.x,T.y+.08*U,T.z)),m.push(...Rp(T.x,T.y+.17*U,T.z,1.7))}return p.add(ht(nn(y),e.darkSteel,{cast:!1}),ht(nn(m),e.rubber,{cast:!1})),p}function Ap(i,t,e){let n=null;for(let s=1;s<i.length;s++){let r=i[s-1],a=i[s],o=a[0]-r[0],l=a[1]-r[1],c=o*o+l*l||1,h=Math.max(0,Math.min(1,((t-r[0])*o+(e-r[1])*l)/c)),u=r.map((f,p)=>f+(a[p]-f)*h),d=Math.hypot(u[0]-t,u[1]-e);(!n||d<n.d)&&(n={q:u,d})}return{...n,dx:(n.q[0]-t)/(n.d||1),dy:(n.q[1]-e)/(n.d||1)}}var Ru={af:9.5,chamfer:.6},Du=class{constructor(){this.zinc=[],this.steel=[],this.black=[],this.recess=[]}standoff(t,e,n){let s=Ru.af/Math.sqrt(3),r=Ru.af/2-.05,a=Ru.chamfer,o=Fe([[0,0],[r,0],[s,a],[s,n-a],[r,n],[0,n]],6).rotateY(Math.PI/6).toNonIndexed();o.computeVertexNormals(),this.zinc.push(o.translate(...Ee(t,e,.8).toArray())),this.washer(t,e,0,6.6,.8)}washer(t,e,n,s=5.2,r=.8,a=2.2){this.steel.push(Fe([[a,0],[s,0],[s,r],[a,r],[a,0]],28).toNonIndexed().translate(...Ee(t,e,n).toArray()))}screw(t,e,n){this.washer(t,e,n);let s=Fe([[0,0],[3.5,0],[3.5,.9],[3.15,1.85],[2.3,2.35],[0,2.5]],24).toNonIndexed();this.black.push(s.translate(...Ee(t,e,n+.8).toArray()));let r=Ee(t,e,n+.8+2.42);this.recess.push(...Rp(r.x,r.y,r.z,2.4))}meshes(t){let e=[],n=(s,r,a)=>{s.length&&e.push(ht(nn(s.map(Wa)),r,{cast:a}))};return n(this.zinc,t.zinc,!0),n(this.steel,t.steel,!1),n(this.black,t.darkSteel,!1),n(this.recess,t.rubber,!1),e}},Wa=i=>{let t=i.index?i.toNonIndexed():i;return t.deleteAttribute("uv"),t};function Rp(i,t,e,n){return[0,Math.PI/2].map(s=>Wa(new pe(n*U,.12*U,.45*U).rotateY(s+Math.PI/4).translate(i,t,e)))}function kv(i,t,e,n){let s=[];for(let[l,c]of i.supports){let h=Ap(i.profile,l,c),u=h.q[2],d=u-wr.floor,f=d-3,p=h.d-h.q[3]/2-wr.side+1,y=h.dx,m=h.dy,g=-m,T=y,w=[];for(let v=0;v<=14;v++){let M=Math.PI/2+v/14*Math.PI;w.push([l+(Math.cos(M)*y+Math.sin(M)*g)*7,c+(Math.cos(M)*m+Math.sin(M)*T)*7])}w.push([l+y*p-g*7,c+m*p-T*7],[l+y*p+g*7,c+m*p+T*7]),s.push(Di(Pn(w),f,3,{bevel:.35,curveSegments:4})),n.standoff(l,c,f-.8),n.screw(l,c,d)}let o=new fe;if(s.length){let l=ht(nn(s.map(Wa)),e,{cast:!1,receive:!1});l.renderOrder=2,o.add(l)}return o}function zv(i,t){let e=i.getLength()/U,n=Math.ceil(e/3),s=new N(0,1,0),r=M=>{let x=i.getPointAt(Math.min(1,Math.max(0,M))),E=i.getTangentAt(Math.min(1,Math.max(0,M)));return{p:x,t:E,s:new N().crossVectors(E,s).normalize()}},a=(M,x,E,_=0)=>M.p.clone().addScaledVector(M.s,x*U).addScaledVector(s,E*U).addScaledVector(M.t,_*U),o=hc,l=o.rail,c=o.rod,h=o.dropRadius,u=e-h-o.spread,d=M=>{let x=Math.max(0,Math.min(1,M));return x*x*(3-2*x)},f=[],p=(M,x=c,E)=>f.push(new Ri(new On(M),E||M.length*2,x*U,8));for(let M of[-1,1]){let x=[];for(let E=0;E<=n;E++){let _=E/n*(e-h);x.push(a(r(_/e),M*(l+(h-l)*d((_-u)/o.spread)),c))}p(x,c,n)}let y=r((e-h)/e),m=[];for(let M=0;M<=16;M++){let x=M/16*Math.PI;m.push(a(y,-h*Math.cos(x),c,h*Math.sin(x)))}p(m);let{u:g,v:T}=o.sideRail;for(let M of t.sideRails){let x=[],E=Math.max(4,Math.ceil((M.to-M.from)*e/3));for(let _=0;_<=E;_++)x.push(a(r(M.from+(M.to-M.from)*_/E),-M.side*g,T));p(x,c,E)}let w=[];for(let M=0;M<=16;M++){let x=M/16*Math.PI;w.push(a(y,-(h+1)*Math.cos(x),T,(h+1)*Math.sin(x)))}p(w);for(let M of[-1,1])p([a(y,M*(h+1),c),a(y,M*(h+1),T)],c,4);let v=[[-l-4,c+3],[-l-2.5,-.5],[-l+1,-2.8],[0,-4.2],[l-1,-2.8],[l+2.5,-.5],[l+4,c+3]];for(let M=20;M<u;M+=55){let x=r(M/e);p(v.map(([E,_])=>a(x,E,_)),1.75,24)}return nn(f)}function Hv(i,t,e){let n=[];for(let[o,l]of i.wireSupports){let c=Ap(i.wire,o,l),h=c.q[2],u=c.d-hc.rail,d=h-5,f=Math.min(6.5,u-5),p=[[0,d-1.6/2],[f,d-1.6/2],[u-1.2,h+.4]];n.push(Gv(p,o,l,c.dx,c.dy,11,1.6)),n.push(Wa(new Pe(11/2*U,11/2*U,1.6*U,28).translate(...Ee(o,l,d-1.6/2).toArray())));let y=new Pe(1.5*U,1.5*U,10*U,10).rotateX(Math.PI/2).rotateY(Math.atan2(c.dy,c.dx));n.push(Wa(y.translate(...Ee(o+c.dx*(u-1.6),l+c.dy*(u-1.6),h-.2).toArray()))),e.standoff(o,l,d-1.6-.8),e.screw(o,l,d)}let a=new fe;return n.length&&a.add(ht(nn(n),t.steel)),a}function Gv(i,t,e,n,s,r,a){let o=i.map(([y,m])=>[y,m]),l=o.length,c=[],h=y=>{let m=o[Math.max(0,y-1)],g=o[Math.min(l-1,y+1)],T=g[0]-m[0],w=g[1]-m[1],v=Math.hypot(T,w),M=-w/v,x=T/v;if(y>0&&y<l-1){let E=o[y-1],_=o[y],b=o[y+1],A=[-(_[1]-E[1]),_[0]-E[0]],C=[-(b[1]-_[1]),b[0]-_[0]],D=Math.hypot(...A),O=Math.hypot(...C),L=[A[0]/D+C[0]/O,A[1]/D+C[1]/O],F=Math.hypot(...L),z=1/Math.max(.3,L[0]/F*(A[0]/D)+L[1]/F*(A[1]/D));M=L[0]/F*z,x=L[1]/F*z}return[M,x]},u=(y,m,g)=>{let[T,w]=h(y),v=o[y][0]+T*g*a/2,M=o[y][1]+w*g*a/2;return Ee(t+n*v-s*m*r/2,e+s*v+n*m*r/2,M)},d=(y,m,g,T)=>{for(let w of[y,g,m,y,T,g])c.push(w.x,w.y,w.z)};for(let y=0;y<l-1;y++){let m=[[-1,1],[1,1],[1,-1],[-1,-1]];for(let g=0;g<4;g++){let[T,w]=m[g],[v,M]=m[(g+1)%4];d(u(y,T,w),u(y,v,M),u(y+1,v,M),u(y+1,T,w))}}(y=>{let m=[[-1,1],[1,1],[1,-1],[-1,-1]].map(([g,T])=>u(y,g,T));d(m[0],m[1],m[2],m[3])})(l-1);let p=new Me;return p.setAttribute("position",new ee(c,3)),p.computeVertexNormals(),p}function Vv(i,t,e){let[n,s]=Ts.from,[r,a]=Ts.to,o=Math.hypot(r-n,a-s),l=Math.atan2(a-s,r-n)/Ps,c=Ie(new fe,(n+r)/2,(s+a)/2,0,l),h=Ts.height-3;for(let p of[-1,1])c.add(ht(new pe(1.6*U,Ts.height*U,10*U).translate(p*(o/2)*U,Ts.height/2*U,0),t.steel));c.add(ht(new Pe(1.2*U,1.2*U,o*U,10).rotateZ(Math.PI/2).translate(0,h*U,0),t.steel,{cast:!1}));let u=o/2-5,d=h-5,f=new fe;f.add(ht(dc([[-u,0,0],[-u,0,-d],[u,0,-d],[u,0,0]],.9,{tension:.02,radial:6}),t.chrome,{cast:!1})),f.add(ht(dc([[-u,0,-d/2],[u,0,-d/2]],.7,{tension:0,radial:6}),t.chrome,{cast:!1})),f.position.y=h*U,c.add(f),i.add(c),e.gate={flap:f,open:0,velocity:0,at:Ee((n+r)/2,(s+a)/2,gn)}}function Wv(i,t){for(let e of Tu()){let n=Mu(e.color);if(e.legend||e.icon){let r=Ui(lp(e,192));r.repeat.set(1/(e.w*U),1/(e.l*U)),r.offset.set(.5,.5),n.map=r,n.emissiveMap=r}let s=new _e(is(e.shape,.4,{curveSegments:6}),[n,Mu(e.color)]);Ie(s,e.x,e.y,-.34,e.angle),s.renderOrder=1,i.add(s),t.inserts.set(e.id,{mesh:s,mat:n,side:s.material[1],group:e.group,index:e.index,level:.06,goal:.06,flash:0})}}function Xv(i,t,e){let[n,s]=oe.ballRest,r=s-gn,a=_t.l/2-(ln.front-ln.wallT)/U,o=new fe;o.add(ht(Fe([[0,0],[5.5,.4],[8.4,1.8],[9.5,4.5],[9.5,25.4],[0,25.4]],24).rotateX(Math.PI/2),t.rubber)),o.add(ht(new Pe(4.76*U,4.76*U,194*U,16).rotateX(Math.PI/2).translate(0,0,(6.4+97)*U),t.chrome));let l=ht(Fe([[0,0],[6,0],[10.5,5],[14.3,16],[13.6,30],[8,33],[0,33.5]],28).rotateX(Math.PI/2).translate(0,0,196*U),t.rubberRoyal);o.add(l),o.position.copy(Ee(n,r,10)),i.add(o);for(let f of o.children)f.userData.action="plunger";e.interactive.push(l);let c=r-25.4-a,h=24,u=[];for(let f=0;f<=h*16;f++){let p=f/16*Math.PI*2;u.push(new N(Math.cos(p)*5.55*U,Math.sin(p)*5.55*U,-(f/(h*16))*c*U))}let d=ht(new Ri(new On(u),h*16,.4*U,5),t.steel);d.position.copy(Ee(n,a,10)),i.add(d),i.add(Ie(ht(new pe(28*U,34*U,5*U).translate(0,10*U,-2.5*U),t.darkSteel),n,a+5,0)),e.plunger={group:o,spring:d,springLen:c,rest:o.position.clone(),pull:0,offset:0}}function qv(i,t,e){let n=new ha(gn*U,40,28);e.ball=ht(n,t.ball),e.ball.position.copy(Ee(oe.ballRest[0],oe.ballRest[1],gn)),i.add(e.ball),e.shooterBall=ht(n,t.ball),e.shooterBall.position.copy(Ee(oe.ballRest[0],oe.ballRest[1],gn)),i.add(e.shooterBall)}function Yv(i,t,e){let n=[[106,300],[368.35,300],[112,332],[362.35,332],...uc],s=Fe([[0,0],[3.2,0],[4.6,3],[5.1,7],[5.1,12],[4.2,15.5],[2.4,17],[0,17.3]],16),r=new Pe(4.2*U,4.6*U,6*U,12).translate(0,3*U,0);for(let[o,l]of n){let c=t.bulb.clone(),h=new fe;h.add(ht(r,t.darkSteel));let u=new _e(s,c);u.position.y=5*U,h.add(u),i.add(Ie(h,o,l)),e.bulbs.push(c)}let a=[[109,316,24,.9],[365.35,316,24,.9],...uc.map(([o,l])=>[o+(o<_t.cx?6:-6),l,20,.55])];for(let[o,l,c,h]of a){let u=new ma(ws,0,.4,2);u.position.copy(Ee(o,l,c)),u.userData.base=h*.02,i.add(u),e.gi.push(u)}}function Zv(i,t,e,n,s,r){let a=ln,o=a.front-a.back,l=Au(a.back),c=a.top-l,h=a.inner+a.wallT*2,u=Ui(n.cabinetSide,s),d=new je({map:u,roughness:.4,clearcoat:.7,clearcoatRoughness:.2}),f=d.clone();f.map=u.clone(),f.map.wrapS=yn,f.map.repeat.x=-1,f.map.needsUpdate=!0;let p=new dn([[1,(a.top-l)/c],[0,(a.top-l)/c],[0,0],[1,(a.bottom-l)/c]].map(([L,F])=>new ot(L,F))),y=(L,F)=>{let z=new ps(p).applyMatrix4(new ce().set(0,0,1,L,0,c,0,l,o,0,0,a.back,0,0,0,1));return F>0&&(z.scale(-1,1,1),z.translate(2*L,0,0)),z.computeVertexNormals(),z};for(let L of[-1,1]){let F=L*(a.inner/2+a.wallT+25e-5),z=L*(a.inner/2);i.add(ht(y(F,L),L>0?f:d)),i.add(ht(y(z,-L),e.cabinetInner));let V=ht(new pe(a.wallT+.012,.012,o+.004),e.armour);V.position.set(L*(a.inner/2+a.wallT/2-.002),a.top+.006,(a.front+a.back)/2),i.add(V)}let m=a.top-a.bottom-.04,g=ht(new pe(h,m,a.wallT),e.cabinet);g.position.set(0,a.bottom+m/2,a.front-a.wallT/2),i.add(g);let T=(a.top-Au(a.back))*.08,w=ht(new en(h,T),new je({color:gc,roughness:.42,clearcoat:.7,clearcoatRoughness:.2}),{cast:!1});w.position.set(0,a.bottom+T/2,a.front+4e-4),i.add(w);let v=ht(new en(h,.0045),new ge({color:16119544,roughness:.4}),{cast:!1});v.position.set(0,a.bottom+T+.017,a.front+4e-4),i.add(v);let M=a.top-l,x=ht(new pe(h,M,a.wallT),e.cabinet);x.position.set(0,l+M/2,a.back+a.wallT/2),i.add(x);let E=ht(new pe(h,a.wallT,o/Math.cos(yc)),e.cabinet);E.rotation.x=-yc,E.position.set(0,(a.bottom+l)/2+a.wallT/2,(a.front+a.back)/2),i.add(E);let _=ht(new Mc(h+.006,.026,.072,.006),e.trim);_.position.set(0,a.top+.004,a.front-.03),i.add(_);let b=a.bottom+m*.5,A=ht(new Mc(.25,.012,.28,.012),e.trim);A.rotation.x=Math.PI/2,A.position.set(0,b-.02,a.front+.004),i.add(A);let C=ht(new pe(.21,.24,.004),e.darkSteel);C.position.set(0,b-.02,a.front+.011),i.add(C);for(let L of[-.048,.048]){let F=ht(new pe(.06,.085,.006),e.aluminium);F.position.set(L,b+.045,a.front+.014),i.add(F);let z=new _e(new pe(.004,.026,.002),new un({color:mc}));z.position.set(L,b+.055,a.front+.0175),i.add(z);let V=ht(new Pe(.008,.008,.004,16).rotateX(Math.PI/2),e.trim);V.position.set(L,b+.02,a.front+.018),i.add(V)}let D=new je({color:In,emissive:In,emissiveIntensity:.5,roughness:.25,clearcoat:1,clearcoatRoughness:.05});D.userData.gain=Ha(In,1)*.32;let O=ht(Fe([[0,0],[15,0],[15,4],[13,9],[0,10]],28).rotateX(Math.PI/2),D);O.position.set(-.205,a.top-.07,a.front),i.add(O),r.startButton=O,i.updateMatrixWorld(!0);for(let[L,F]of[[-1,a.front-.06],[1,a.front-.06],[-1,a.back+.06],[1,a.back+.06]]){let z=new N(L*(h/2-.035),Au(F),F).applyMatrix4(i.matrixWorld),V=z.y-a.floor,Q=new fe;Q.add(ht(new pe(.06,V,.06),e.armour)),Q.add(ht(new Pe(.022,.026,.02,16).translate(0,-V/2-.01,0),e.rubber)),Q.position.set(z.x,a.floor+V/2+.02,z.z),t.add(Q)}}var Mc=class extends Me{constructor(t,e,n,s){super();let r=new pe(t-2*s,e,n-2*s),a=new dn,o=t/2,l=n/2;a.moveTo(-o+s,-l),a.lineTo(o-s,-l),a.quadraticCurveTo(o,-l,o,-l+s),a.lineTo(o,l-s),a.quadraticCurveTo(o,l,o-s,l),a.lineTo(-o+s,l),a.quadraticCurveTo(-o,l,-o,l-s),a.lineTo(-o,-l+s),a.quadraticCurveTo(-o,-l,-o+s,-l);let c=new ci(a,{depth:e,bevelEnabled:!1,curveSegments:6});c.rotateX(Math.PI/2),c.translate(0,e/2,0),r.dispose(),this.copy(c)}};function $v(i,t,e,n,s,r,a=s){let o=rs,l=new fe;r.body.updateMatrixWorld(!0);let c=new N(0,ln.top,ln.back+.02).applyMatrix4(r.body.matrixWorld);l.position.set(0,c.y+.004,c.z+.02),i.add(l),r.backbox=l;let h=ht(new pe(o.w,o.h,o.d),t.cabinet);h.position.set(0,o.h/2,-o.d/2),l.add(h);let u=new dn;u.moveTo(-o.w/2,0),u.lineTo(o.w/2,0),u.lineTo(o.w/2,o.h),u.lineTo(-o.w/2,o.h),u.lineTo(-o.w/2,0);let d=new li,f=o.w/2-.022;d.moveTo(-f,.018),d.lineTo(-f,o.h-.02),d.lineTo(f,o.h-.02),d.lineTo(f,.018),d.lineTo(-f,.018),u.holes.push(d);let p=ht(new ci(u,{depth:.012,bevelEnabled:!0,bevelSize:.002,bevelThickness:.002,bevelSegments:2}),t.trim);p.position.z=-.004,l.add(p);let y=o.glassY-.03,m=ht(new pe(o.w-.044,y,.006),t.speaker);m.position.set(0,.018+y/2,.001),l.add(m);for(let A of[-1,1]){let C=new fe,D=ht(Fe([[0,0],[48,0],[52,1.5],[55,4],[0,4]],40).rotateX(Math.PI/2),t.darkSteel);C.add(D);for(let O=10;O<=44;O+=8.5){let L=new _e(new lr(O*U,1.1*U,6,40),t.speaker);L.position.z=4.2*U,C.add(L)}C.position.set(A*(o.dmdW/2+.072),o.dmdY,.004),l.add(C)}let g=new Ai(n);g.colorSpace=qe,g.anisotropy=s;let T=new _e(new en(o.dmdW,o.dmdH),new un({map:g,toneMapped:!1}));T.position.set(0,o.dmdY,.0052),T.userData.action="dmd",l.add(T);let w=ht(new pe(o.dmdW+.024,o.dmdH+.024,.004),t.cabinetInner);w.position.set(0,o.dmdY,.0025),l.add(w),r.dmd={mesh:T,texture:g},r.interactive.push(T);let v=Ui(e.backglass,s),M=o.glassY+o.glassH/2,x=Jv(v,a),E=new _e(new en(o.glassW,o.glassH),x.material);E.position.set(0,M,.002),l.add(E),x.mesh=E,r.interactive.push(E);let _=new _e(new en(o.glassW,o.glassH),t.screenGlass);_.position.set(0,M,.006),l.add(_),r.backglass={mesh:E,material:x.material,lcd:x,level:0};let b=new Xe;b.position.set(0,M,.0065),l.add(b),r.heroAnchor=b,r.backglassSize=[o.glassW,o.glassH]}function Jv(i,t){let e={tA:{value:i},tB:{value:i},uSeq:{value:1}},n=new un({map:i,toneMapped:!1,color:new Ht(0,0,0)});n.onBeforeCompile=r=>{Object.assign(r.uniforms,e),r.fragmentShader=`uniform sampler2D tA;
uniform sampler2D tB;
uniform float uSeq;
`+r.fragmentShader.replace("#include <map_fragment>",`
      {
        float down = 1.0 - vMapUv.y;
        float scan = uSeq * 1.08;
        float shown = smoothstep( down - 0.008, down + 0.008, scan );
        // A negative LOD bias picks the sharper mip: the screen is seen at an angle and somewhat smaller than its
        // pictures, where plain trilinear filtering goes soft.
        vec3 col = mix( texture2D( tA, vMapUv, -0.65 ).rgb, texture2D( tB, vMapUv, -0.65 ).rgb, shown );
        float live = step( 0.0005, uSeq ) * ( 1.0 - smoothstep( 0.92, 1.08, scan ) );
        col *= 1.0 - 0.18 * live * ( 1.0 - smoothstep( 0.0, 0.25, uSeq ) );
        col += vec3( 0.36, 0.48, 1.0 ) * exp( -pow( ( down - scan ) * 90.0, 2.0 ) ) * 0.7 * live;
        diffuseColor.rgb *= col;
      }`)};let s={material:n,mesh:null,showing:"art",seq:1,pictures:{art:{texture:i,action:null}}};return s.add=(r,a,o)=>{let l=new Ai(a);l.colorSpace=qe,l.anisotropy=t,s.pictures[r]={texture:l,action:o}},s.show=(r,a=!1)=>{let o=s.pictures[r];!o||r===s.showing||(s.seq<1&&s.seq>.5&&(e.tA.value=e.tB.value),e.tB.value=o.texture,s.seq=a?1:0,s.showing=r)},s.update=r=>{s.seq<1&&(s.seq=Math.min(1,s.seq+r/.85)),s.seq>=1&&(e.tA.value=e.tB.value),e.uSeq.value=s.seq,s.mesh&&(s.mesh.userData.action=s.seq>.6?s.pictures[s.showing].action:null)},s}te.tonemapping_pars_fragment=te.tonemapping_pars_fragment.replace("vec3 CustomToneMapping( vec3 color ) { return color; }",`vec3 CustomToneMapping( vec3 color ) {
    color = NeutralToneMapping( color );
    vec3 s = mix( color * 12.92, 1.055 * pow( color, vec3( 0.41667 ) ) - 0.055, step( 0.0031308, color ) );
    s = max( s + ( fract( 52.9829189 * fract( dot( gl_FragCoord.xy, vec2( 0.06711056, 0.00583715 ) ) ) ) - 0.5 ) / 255.0, 0.0 );
    return mix( s / 12.92, pow( ( s + 0.055 ) / 1.055, vec3( 2.4 ) ), step( 0.04045, s ) );
  }`);var Cp="1.35";te.lights_fragment_end+=`
#if defined( STANDARD )
	{
		vec3 s = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
		float k = min( 1.0, ${Cp} / max( max( max( s.r, s.g ), s.b ), 1e-4 ) );
		reflectedLight.directSpecular *= k;
		reflectedLight.indirectSpecular *= k;
		#ifdef USE_CLEARCOAT
			vec3 c = clearcoatSpecularDirect + clearcoatSpecularIndirect;
			float kc = min( 1.0, ${Cp} / max( max( max( c.r, c.g ), c.b ), 1e-4 ) );
			clearcoatSpecularDirect *= kc;
			clearcoatSpecularIndirect *= kc;
		#endif
	}
#endif
`;var Nu=class extends Fa{setSize(t,e){super.setSize(Math.ceil(t/2),Math.ceil(e/2))}_overrideVisibility(){super._overrideVisibility(),this.scene.traverseVisible(t=>{t.isMesh&&(t.userData.noAO||[].concat(t.material).some(e=>e.transparent))&&(t.visible=!1,this._visibilityCache.push(t))})}},Fu=class extends ic{constructor(t,e,n,s){super(t,e,n),this.ao=s,this._renderTargetDepth.dispose(),this.materialBokeh.defines.DEPTH_PACKING=0,this.uniforms.tDepth.value=s.depthTexture}setSize(t,e){this.uniforms.aspect.value=t/e}render(t,e,n){this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,t.setRenderTarget(e),t.clear(),this._fsQuad.render(t)}},Ou=class extends Sr{setSize(t,e){super.setSize(Math.ceil(t/2),Math.ceil(e/2))}};function Kv(i,t){let e=new ir;e.background=new Ht(.0036,.0042,.0058);let n=new _e(new en(40,40).rotateX(-Math.PI/2),new un({color:new Ht(.016,.017,.021)}));n.position.y=-2,e.add(n);let s=(o,l,c,h,u,d,f)=>{let p=new _e(new en(o,l),new un({color:new Ht(h).multiplyScalar(c),side:pn}));p.position.set(u,d,f),p.lookAt(0,0,0),e.add(p)};s(12,12,.22,15856631,0,7,0),s(6,3,3,16185338,0,5,-3.5),s(.7,5,2.4,16777215,-5,2,-1),s(.7,5,2.5,15002367,5,2,-1.5),s(1.6,1.6,5,16775409,2,6,3.5),s(6,2,1.2,15987959,0,1.2,6),s(9,.4,.32,2841087,0,.35,-5);let r=new yr(i),a=r.fromScene(e,.015,.1,50,{size:t});return r.dispose(),e.traverse(o=>{o.geometry?.dispose(),o.material?.dispose()}),a.texture}function Pp(i,t){let e=new Kl({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance",outputBufferType:t.effects?Oe:Qe}),n=t.pixelRatio;e.setPixelRatio(n),e.outputColorSpace=qe,e.toneMapping=ya,e.toneMappingExposure=1.1,e.shadowMap.enabled=t.shadows,e.shadowMap.type=ms,e.shadowMap.autoUpdate=!1;let s=new ir;s.background=new Ht(395018),s.fog=new Yr(395018,3.2,7.5);let r=Kv(e,t.low?256:512);s.environment=r,s.environmentIntensity=.6;let a=new Ke(32,1,.02,20),o={};o.key=new dr(16775151,14,0,.45,.7,2),o.key.position.set(.55,2.3,1.1),o.key.target.position.set(0,-.1,0),o.key.castShadow=t.shadows,o.key.shadow.mapSize.set(t.shadowSize,t.shadowSize),Object.assign(o.key.shadow,{bias:-4e-4,normalBias:.003,radius:t.low?2:3,focus:.7}),o.key.shadow.camera.near=1.2,o.key.shadow.camera.far=4.2,s.add(o.key,o.key.target),o.rim=new ga(14542079,1.15),o.rim.position.set(-1.2,1.6,-2.4),s.add(o.rim),o.focus=new dr(16775410,0,0,.42,1,2),s.add(o.focus,o.focus.target);let l=new _e(new en(12,12).rotateX(-Math.PI/2),new ge({color:3553858,roughness:.85}));l.position.y=ln.floor,l.receiveShadow=t.shadows,s.add(l);let c=null,h=null,u=null;if(t.effects){c=new Nu(s,a,1,1,void 0,{radius:.035,distanceExponent:1.5,thickness:.04,distanceFallOff:1,scale:1.1,samples:12},{lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),c.blendIntensity=.7,h=new Ou(new ot(1,1),.22,.2,1.6),h.highPassUniforms.smoothWidth.value=.5;let x=new nc($f);x.uniforms.offset.value=.85,x.uniforms.darkness.value=1,u=new Fu(s,a,{focus:1,aperture:0,maxblur:.005},c),u.uniforms.range={value:0},u.materialBokeh.fragmentShader=u.materialBokeh.fragmentShader.replace("uniform float focus;",`uniform float focus;
		uniform float range;`).replace("float factor = ( focus + viewZ );",`float factor = ( focus + viewZ );
			factor = sign( factor ) * max( 0.0, abs( factor ) - range );`),e.setEffects([c,u,h,x])}let d=1,f=1;function p(x,E){d=x,f=E,e.setSize(x,E,!1),a.aspect=x/E,a.updateProjectionMatrix()}function y(){e.shadowMap.needsUpdate=!0,e.render(s,a)}let m=16.7,g=0,T=performance.now()+4e3;function w(x){g&&(m+=(Math.min(100,x-g)-m)*.05),g=x,!(x<T||m<21)&&(u&&u.enabled?u.enabled=!1:c&&c.enabled?c.enabled=!1:n>1&&(n=Math.max(1,n-.25),e.setPixelRatio(n),p(d,f)),T=x+2500,m=16.7)}let v=new N;function M(x,E,_,b=0){v.copy(a.position).sub(x).setY(0).normalize(),o.focus.position.copy(x).addScaledVector(v,.28).add(new N(0,.62,0)),o.focus.target.position.copy(x),o.focus.intensity=.55*_,u&&(u.uniforms.focus.value=E,u.uniforms.aperture.value=.012*_,u.uniforms.range.value=.012+.3*b)}return{renderer:e,scene:s,camera:a,lights:o,ao:c,bloom:h,dof:u,envMap:r,resize:p,render:y,govern:w,focusOn:M,floor:l}}function Ip(){let i=Math.min(innerWidth,innerHeight)<700,t=matchMedia("(pointer: coarse)").matches,e=i||t;return{low:e,effects:!e,pixelRatio:Math.min(devicePixelRatio||1,1.5),shadows:!0,shadowSize:e?1024:2048,playfieldScale:e?2.4:3.6,anisotropy:e?4:8}}var Rr=Math.PI/180,Lp=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),jv=i=>i*i*i*(i*(i*6-15)+10),Sc=class{constructor(t){this.camera=t,this.poses=[],this.anchors=[],this.holds=[],this.current=null,this.parallax={x:0,y:0,tx:0,ty:0},this.view={width:1,height:1,header:64,layout:"wide",panelTop:0,panelLeft:0}}setPoses(t){this.poses=t}measure(t,e){let n=scrollY,s=a=>a.getBoundingClientRect().top+n,r=a=>+a.dataset.hold||1;this.anchors=t.map(a=>s(a)+a.offsetHeight/2-e/2),this.anchors[0]=0,this.holds=t.map((a,o)=>{let l=o>0?this.anchors[o]-this.anchors[o-1]:1/0,c=o<t.length-1?this.anchors[o+1]-this.anchors[o]:1/0;return Math.min(Math.min(l,c,a.offsetHeight)*.42*r(a),Math.min(l,c)*.75)})}setStops(t,e){let n=scrollY;this.holds=e.slice(),this.anchors=t.map((s,r)=>s.getBoundingClientRect().top+n+e[r]/2)}floatAt(t){let e=this.anchors,n=this.holds,s=e.length;if(!s||t<=e[0]+n[0]/2)return 0;for(let r=0;r<s-1;r++){let a=e[r]+n[r]/2,o=e[r+1]-n[r+1]/2;if(t<a)return r;if(t<=o)return r+jv(Lp((t-a)/Math.max(1,o-a)))}return s-1}holdProgress(t,e){let n=this.anchors[t]-this.holds[t]/2;return Lp((e-n)/Math.max(1,this.holds[t]))}setView(t,e,n){this.view.width=t,this.view.height=e,this.view.header=n;let s=t/e>1.05;this.view.layout=s?t>=900&&e>=540?"wide":"side":"tall",this.view.panelTop=Math.round(Math.max(e*.47,e-460)),this.view.panelLeft=Math.round(t*.54)}frame(t){let{width:e,height:n,header:s,layout:r}=this.view,a=s/n;if(t.side==="center")return{cx:.5,cy:.5,fx:.9,fy:.9};if(r==="wide"){if(t.side==="hero")return{cx:.5,cy:a/2+.5,fx:.96,fy:(1-a)*.97};let l=Math.min(.42,(Math.min(560,e*.4)+80)/e);return{cx:t.side==="left"?l+(1-l)/2:(1-l)/2,cy:a/2+.5,fx:(1-l)*.98,fy:(1-a)*.98}}if(r==="side"){let l=this.view.panelLeft/e;return{cx:l/2,cy:(a+1)/2,fx:l*.94,fy:(1-a)*.92}}let o=this.view.panelTop/n;return{cx:.5,cy:(a+o)/2,fx:.96,fy:(o-a)*.92}}resolve(t){this.view.layout==="tall"&&t.tall&&(t={...t,...t.tall});let e=this.frame(t),n=(t.fov||32)*Rr,s=this.view.width/this.view.height,r=Math.tan(n/2),a=Math.max(t.fit[1]/(2*r*e.fy),t.fit[0]/(2*r*s*e.fx))*(t.zoom||1);return{target:t.target.clone(),az:t.az*Rr,el:t.el*Rr,d:a,fov:t.fov||32,cx:e.cx,cy:e.cy,sharp:t.sharp||0}}blend(t,e,n,s=0){return{target:t.target.clone().lerp(e.target,n),az:t.az+(e.az-t.az)*n,el:t.el+(e.el-t.el)*n+Math.sin(Math.PI*n)*s*Rr,d:Math.exp(Math.log(t.d)+(Math.log(e.d)-Math.log(t.d))*n),fov:t.fov+(e.fov-t.fov)*n,cx:t.cx+(e.cx-t.cx)*n,cy:t.cy+(e.cy-t.cy)*n,sharp:t.sharp+(e.sharp-t.sharp)*n}}at(t){let e=this.poses.length,n=Math.min(e-1,Math.floor(t)),s=t-n,r=this.resolve(this.poses[n]);if(s<=0||n>=e-1)return r;let a=this.resolve(this.poses[n+1]);return this.blend(r,a,s,this.poses[n+1].lift||0)}pointer(t,e){this.parallax.tx=t,this.parallax.ty=e}apply(t,e,{damping:n=9,instant:s=!1}={}){let r=s?1:1-Math.exp(-e*n);(!this.current||s)&&(this.current={...t,target:t.target.clone()});let a=this.current;a.target.lerp(t.target,r),a.az+=(t.az-a.az)*r,a.el+=(t.el-a.el)*r,a.d+=(t.d-a.d)*r,a.fov+=(t.fov-a.fov)*r,a.cx+=(t.cx-a.cx)*r,a.cy+=(t.cy-a.cy)*r,a.sharp+=(t.sharp-a.sharp)*r;let o=this.parallax,l=s?1:1-Math.exp(-e*3);o.x+=(o.tx-o.x)*l,o.y+=(o.ty-o.y)*l;let c=a.az+o.x*1.6*Rr,h=a.el-o.y*1*Rr,u=this.camera;u.position.set(a.target.x+Math.sin(c)*Math.cos(h)*a.d,a.target.y+Math.sin(h)*a.d,a.target.z+Math.cos(c)*Math.cos(h)*a.d),u.lookAt(a.target),u.fov=a.fov;let{width:d,height:f}=this.view;u.setViewOffset(d,f,d*(.5-a.cx),f*(.5-a.cy),d,f),u.updateProjectionMatrix()}};var _i=Math.PI/180,Qv=24,Dp=40,ty=1e3,Up=60*_i,Np=Object.freeze({rubber:{e:.9,falloff:.1,f:.9,scatter:1},band:{e:.85,falloff:.13,f:.9,scatter:0},sling:{e:.85,falloff:0,f:.8,scatter:1},metal:{e:.4,falloff:0,f:.2,scatter:0},pop:{e:.4,falloff:0,f:.2,scatter:2},plastic:{e:.42,falloff:0,f:.3,scatter:0},drop:{e:.625,falloff:.05,f:.3,scatter:1},ramp:{e:.5,falloff:.2,f:.15,scatter:0},wire:{e:.4,falloff:0,f:.15,scatter:0},flipper:{e:.88,falloff:.15,f:.9,scatter:0}}),Cr=(i,t,e)=>i<t?t:i>e?e:i;function Bu(i,t){let e=(typeof i.mat=="string"?Np[i.mat]:i.mat)||Np[t];return{e:i.e??e.e,falloff:i.falloff??e.falloff,f:i.f??e.f,scatter:i.scatter??e.scatter??0}}function ey(i){let t=i.seed=i.seed+1831565813>>>0;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}var ny=(i,t)=>i.layer==="*"||i.layer===t;function iy(i,t,e){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){let[a,o]=i[s],[l,c]=i[r];o>e!=c>e&&t<(l-a)*(e-o)/(c-o)+a&&(n=!n)}return n}function sy(i,t,e,n){let s=i.len2>0?Cr(((t-i.ax)*i.ex+(e-i.ay)*i.ey)/i.len2,0,1):0,r=i.ax+i.ex*s,a=i.ay+i.ey*s,o=t-r,l=e-a,c=Math.hypot(o,l),h=n+i.r;if(c>=h)return null;let u,d;if(c>1e-9)u=o/c,d=l/c;else{let f=Math.sqrt(i.len2)||1;u=-i.ey/f,d=i.ex/f}return{nx:u,ny:d,depth:h-c,px:r+u*i.r,py:a+d*i.r,t:s}}function ry(i,t,e,n){let s=t-i.x,r=e-i.y,a=Math.hypot(s,r),o=n+i.r;if(a>=o)return null;let l=a>1e-9?s/a:0,c=a>1e-9?r/a:1;return{nx:l,ny:c,depth:o-a,px:i.x+l*i.r,py:i.y+c*i.r}}var ku=class{constructor(t){this.p=t,Object.assign(this,{x:0,y:0,z:t.R,vx:0,vy:0,vz:0,wx:0,wy:0,wz:0,layer:0,active:!1,serial:0}),this.q=[0,0,0,1],this.view={x:0,y:0,z:t.R},this.ox=0,this.oy=0,this.oz=t.R}get spin(){return{x:this.wx,y:this.wy,z:this.wz}}get speed(){return Math.hypot(this.vx,this.vy)}place(t,e,n=0,s=0,{layer:r=0}={}){let a=this.p,o=a.R;Object.assign(this,{x:t,y:e,vx:n,vy:s,vz:0,wx:-s/o,wy:n/o,wz:0,layer:r,active:!0}),this.serial++;let l=r!==0?a.trackOf(r):null;l?(l.cursor=-1,this.z=a.locate(l,t,e).z):this.z=o,this.ox=t,this.oy=e,this.oz=this.z,Object.assign(this.view,{x:t,y:e,z:this.z});for(let c of a.triggers)c.inside=!1;for(let c of a.saucers)c.holding=!1;return this}remove(){this.active=!1,this.serial++;for(let t of this.p.triggers)t.inside=!1;for(let t of this.p.saucers)t.holding=!1}},bc=class{constructor(t){Object.assign(this,{baseR:11.28,tipR:6.64,length:62.8,strokeTime:.028,hold:.375,holdAngle:6,ret:.055,eosBounce:.2,restBounce:.1,inertia:2200},t),this.id=t.id||"flipper-"+t.side,this.kind="flipper",this.dir=Math.sign(t.up-t.rest)||1,this.restRad=t.rest*_i,this.stroke=Math.abs(t.up-t.rest)*_i,this.holdAngle*=_i,this.alpha=2*this.stroke/this.strokeTime**2,this.mat=Bu(t,"flipper");let e=(this.baseR-this.tipR)/this.length;this.cotPhi=e/Math.sqrt(1-e*e),this.a=0,this.w=0,this.oa=0,this.on=!1,this.queue=[]}get theta(){return this.restRad+this.dir*this.a}get omega(){return this.w*this.dir}surfaceSpeed(){return Math.abs(this.w)*(this.length+this.tipR)}update(t){let e=this.on?this.alpha*(this.a>this.stroke-this.holdAngle?this.hold:1):-this.alpha*this.ret;this.w+=e*t,this.a+=this.w*t,this.a>=this.stroke?(this.a=this.stroke,this.w>0&&(this.w=this.w>Up?-this.eosBounce*this.w:0)):this.a<=0&&(this.a=0,this.w<0&&(this.w=this.w<-Up?-this.restBounce*this.w:0))}test(t,e,n){let s=this.theta,r=Math.cos(s),a=Math.sin(s),o=t-this.x,l=e-this.y,c=o*r+l*a,h=-o*a+l*r,u=Math.abs(h);if(c<-this.baseR-n||c>this.length+this.tipR+n||u>this.baseR+n)return null;let d=Cr(c-u*this.cotPhi,0,this.length),f=this.baseR+(this.tipR-this.baseR)*d/this.length,p=c-d,y=Math.hypot(p,u);if(y>=f+n)return null;let m=h<0?-1:1,g=y>1e-9?p/y:0,T=y>1e-9?u/y*m:m,w=g*r-T*a,v=g*a+T*r,M=this.x+d*r+w*f,x=this.y+d*a+v*f,E=this.omega;return{nx:w,ny:v,depth:f+n-y,px:M,py:x,u:d,svx:-E*(x-this.y),svy:E*(M-this.x),body:this}}locked(t){let e=-Math.sign(t)*this.dir;return e<0&&this.a<=1e-9||e>0&&this.a>=this.stroke-1e-9}push(t){this.w+=t*this.dir}},Tc=class{constructor(t={}){let e={pitch:6.5,g:9810,radius:13.5,mass:.0806,step:.001,floorFriction:.2,rolling:.0035,spinDecay:1.5,hitMin:50,cell:32,seed:1,...t};this.o=e,this.seed=e.seed>>>0||1,this.R=e.radius,this.mass=e.mass,this.dt=e.step,this.gy=-e.g*Math.sin(e.pitch*_i),this.gN=e.g*Math.cos(e.pitch*_i),this.maxTravel=.2*this.R,this.bounds=e.bounds||null,this.colliders=[],this.flippers=[],this.saucers=[],this.triggers=[],this.tracks=[],this.handlers={},this.muted=!1,this.grid=null,this.steps=0,this.time=0,this.acc=0,this.ball=new ku(this)}collider(t,e,n){return Object.assign(t,{id:e.id??null,kind:e.kind||t.kind,layer:e.layer??0,enabled:!0,mat:Bu(e,n),lastKick:-1e9,solid:!0}),this.colliders.push(t),this.grid=null,t.id}addWall(t,e,n,s,r={}){let a=r.r||0,o=n-t,l=s-e,c={type:"seg",kind:"wall",ax:t,ay:e,bx:n,by:s,r:a,ex:o,ey:l,len2:o*o+l*l,box:[Math.min(t,n)-a,Math.min(e,s)-a,Math.max(t,n)+a,Math.max(e,s)+a]};if(r.oneWay){let h=Math.hypot(...r.oneWay);c.oneWay=[r.oneWay[0]/h,r.oneWay[1]/h]}return r.kick&&Object.assign(c,{kick:r.kick,minSpeed:r.minSpeed??120,recycle:r.recycle??.06,normal:r.normal}),this.collider(c,r,"metal")}addCircle(t,e,n,s={}){let r={type:"circle",kind:s.kick?"pop":"post",x:t,y:e,r:n,box:[t-n,e-n,t+n,e+n]};return s.kick&&Object.assign(r,{kick:s.kick,minSpeed:s.minSpeed??50,recycle:s.recycle??.03}),this.collider(r,s,s.kick?"pop":"rubber")}addKicker(t,e,n,s,r={}){let a=Math.hypot(n-t,s-e),o=r.normal||[-(s-e)/a,(n-t)/a];return r.away&&(r.away[0]-t)*o[0]+(r.away[1]-e)*o[1]>0&&(o=[-o[0],-o[1]]),this.addWall(t,e,n,s,{kind:"sling",mat:"sling",kick:2200,minSpeed:120,recycle:.06,...r,normal:o})}addFlipper(t){let e=new bc(t);return this.flippers.push(e),e.id}addSaucer(t,e,n={}){let s={id:n.id||"saucer"+this.saucers.length,kind:"saucer",x:t,y:e,reach:n.reach??10.5,maxSpeed:n.maxSpeed??900,hold:n.hold??1,kick:n.kick??1600,angle:(n.angle??-90)*_i,sink:n.sink??5,rearm:n.rearm??.3,holding:!1,releaseAt:0,armedAt:0,enabled:!0};return this.saucers.push(s),s.id}addTrigger(t,e,n={}){let s={id:e,kind:n.kind||(n.drain?"drain":"trigger"),layer:n.layer??0,drain:!!n.drain,enabled:!0,inside:!1};if(Array.isArray(t)){s.poly=t.map(o=>[o[0],o[1]]);let r=s.poly.map(o=>o[0]),a=s.poly.map(o=>o[1]);s.box=[Math.min(...r),Math.min(...a),Math.max(...r),Math.max(...a)]}else Object.assign(s,{x:t.x,y:t.y,r:t.r}),s.box=[t.x-t.r,t.y-t.r,t.x+t.r,t.y+t.r];return this.triggers.push(s),e}addTrack(t,e={}){let n=e.id||"track"+this.tracks.length,s={id:n,layer:e.layer??n,kind:e.kind||"ramp",mat:Bu(e,"ramp"),entry:e.entry||[0,0],exit:e.exit??1/0,exitDamp:e.exitDamp??1,cursor:-1};s.pts=t.map(c=>({x:c[0],y:c[1],z:c[2],hw:c[3]??21})),s.seg=[];let r=0;for(let c=0;c+1<s.pts.length;c++){let h=s.pts[c],u=s.pts[c+1],d=u.x-h.x,f=u.y-h.y,p=Math.hypot(d,f)||1e-6;s.seg.push({a:h,b:u,ex:d,ey:f,len:p,len2:p*p,s:r,tx:d/p,ty:f/p,slope:(u.z-h.z)/p}),r+=p}s.length=r;let a=s.seg.findIndex(c=>c.s+c.len>=s.entry[1]);s.entrySegs=a<0?s.seg.length:a+1;let o=s.pts.slice(0,s.entrySegs+1),l=Math.max(...o.map(c=>c.hw))+40;return s.entryBox=[Math.min(...o.map(c=>c.x))-l,Math.min(...o.map(c=>c.y))-l,Math.max(...o.map(c=>c.x))+l,Math.max(...o.map(c=>c.y))+l],s.wall={test:(c,h,u)=>this.trackWall(s,c,h,u),mat:s.mat,id:n,kind:s.kind},this.tracks.push(s),n}setEnabled(t,e){for(let n of this.colliders)n.id===t&&(n.enabled=!!e);for(let n of this.triggers)n.id===t&&(n.enabled=!!e)}isEnabled(t){let e=this.colliders.find(n=>n.id===t)||this.triggers.find(n=>n.id===t);return e?e.enabled:!1}flipper(t){return this.flippers.find(e=>e.id===t)||this.flippers.find(e=>e.side===t)}flippersFor(t){let e=this.flippers.filter(n=>n.side===t);return e.length?e:this.flippers.filter(n=>n.id===t)}setFlipper(t,e,n=0){for(let s of this.flippersFor(t))n>0?(s.queue.push({at:this.time+n,on:!!e}),s.queue.sort((r,a)=>r.at-a.at)):(s.queue.length=0,s.on=!!e)}flipperAngle(t){let e=this.flipper(t);if(!e)return 0;let n=this.acc/this.dt,s=e.oa+(e.a-e.oa)*n;return e.rest+e.dir*s/_i}on(t,e){var n;return((n=this.handlers)[t]||(n[t]=[])).push(e),()=>{this.handlers[t]=this.handlers[t].filter(s=>s!==e)}}emit(t,e){if(this.muted)return;let n=this.handlers[t];if(n)for(let s of n)s(e)}step(t){for(this.acc+=Cr(t||0,0,.1);this.acc>=this.dt;)this.acc-=this.dt,this.fixedStep();let e=this.ball,n=this.acc/this.dt;e.view.x=e.ox+(e.x-e.ox)*n,e.view.y=e.oy+(e.y-e.oy)*n,e.view.z=e.oz+(e.z-e.oz)*n}run(t){for(let e=Math.round(t/this.dt);e>0;e--)this.fixedStep()}fixedStep(){this.grid||this.buildGrid();let t=this.ball;for(let r of this.flippers){for(;r.queue.length&&r.queue[0].at<=this.time+1e-9;)r.on=r.queue.shift().on;r.oa=r.a}t.ox=t.x,t.oy=t.y,t.oz=t.z;let e=t.active?Math.hypot(t.vx,t.vy):0;for(let r of this.flippers)e=Math.max(e,r.surfaceSpeed());let n=Math.min(Qv,Math.max(1,Math.ceil(e*this.dt/this.maxTravel))),s=this.dt/n;for(let r=0;r<n;r++)this.substep(s,this.time+r*s);this.steps++,this.time=this.steps*this.dt}substep(t,e){for(let f of this.flippers)f.update(t);let n=this.ball;if(!n.active||this.saucers.length&&this.saucer(n,e))return;let s=n.serial,r=this.R,a=n.layer!==0?this.trackOf(n.layer):null,o=this.gy,l=0;if(a){let f=this.locate(a,n.x,n.y),p=-this.gN*f.slope/(1+f.slope*f.slope);l+=p*f.tx,o+=p*f.ty}if(n.vx+=l*t,n.vy+=o*t,(a||n.z<=r+.5)&&this.roll(n,t),n.x+=n.vx*t,n.y+=n.vy*t,this.turn(n,t),this.collide(n,e,a),n.serial!==s||(this.layers(n,t,a),this.sense(n),n.serial!==s||!this.bounds))return;let[c,h,u,d]=this.bounds;(n.x<c||n.x>u||n.y<h||n.y>d)&&(n.remove(),this.emit("drain",{id:"out"}))}roll(t,e){this.floorImpulse(t,this.o.floorFriction*this.gN*e);let n=Math.hypot(t.vx,t.vy);if(n>1e-9){let s=(n-Math.min(n,this.o.rolling*this.gN*e))/n;t.vx*=s,t.vy*=s,t.wx*=s,t.wy*=s}t.wz*=Math.exp(-this.o.spinDecay*e)}floorImpulse(t,e){let n=this.R,s=t.vx-t.wy*n,r=t.vy+t.wx*n,a=Math.hypot(s,r);if(a<=1e-9)return;let o=Math.min(a*2/7,e),l=-o*s/a,c=-o*r/a;t.vx+=l,t.vy+=c,t.wx+=c*2.5/n,t.wy-=l*2.5/n}turn(t,e){let[n,s,r,a]=t.q,o=t.wx*e/2,l=t.wy*e/2,c=t.wz*e/2,h=n+o*a+l*r-c*s,u=s+l*a+c*n-o*r,d=r+c*a+o*s-l*n,f=a-o*n-l*s-c*r,p=Math.hypot(h,u,d,f)||1;t.q[0]=h/p,t.q[1]=u/p,t.q[2]=d/p,t.q[3]=f/p}testCollider(t,e,n,s){let r=t.type==="seg"?sy(t,e,n,s):ry(t,e,n,s);if(t.oneWay){if(!r)return t.solid=(e-t.ax)*t.oneWay[0]+(n-t.ay)*t.oneWay[1]>0,null;if(!t.solid)return null}return r}collide(t,e,n){let s=this.R,r=[];for(let a of this.cellAt(t.x,t.y)){if(!a.enabled||!ny(a,t.layer))continue;let o=this.testCollider(a,t.x,t.y,s);o&&(o.src=a,r.push(o))}if(t.layer===0)for(let a of this.flippers){let o=a.test(t.x,t.y,s);o&&(o.src=a,r.push(o))}if(n){let a=n.wall.test(t.x,t.y,s);a&&(a.src=n.wall,r.push(a))}if(r.length){r.length>1&&r.sort((a,o)=>o.depth-a.depth);for(let a=0;a<r.length;a++){let o=r[a].src,l=a===0?r[0]:o instanceof bc?o.test(t.x,t.y,s):o.type?this.testCollider(o,t.x,t.y,s):o.test(t.x,t.y,s);if(!l)continue;let c=this.resolve(t,l,o.mat);c<=0||(o.kick&&this.kick(t,o,l,c,e),c>=this.o.hitMin&&this.emit("hit",{id:o.id,kind:o.kind,speed:c,x:l.px,y:l.py,nx:l.nx,ny:l.ny}))}}}resolve(t,e,n){let s=this.R,r=e.nx,a=e.ny;t.x+=r*e.depth,t.y+=a*e.depth;let o=t.vx+t.wz*s*a-(e.svx||0),l=t.vy-t.wz*s*r-(e.svy||0),c=o*r+l*a;if(c>=0)return 0;let h=-c,u=h<Dp?0:n.e/(1+n.falloff*h/ty),d=e.body,f=1,p=0;d&&(p=(e.px-d.x)*a-(e.py-d.y)*r,d.locked(p)?p=0:f+=this.mass*p*p/d.inertia);let y=(1+u)*h/f;t.vx+=y*r,t.vy+=y*a,p&&d.push(-y*this.mass*p/d.inertia),o-=c*r,l-=c*a;let m=s*(t.wy*r-t.wx*a),g=Math.hypot(o,l,m);if(g>1e-9&&n.f>0){let T=Math.min(g/3.5,n.f*y),w=-T*o/g,v=-T*l/g,M=-T*m/g;t.vx+=w,t.vy+=v,t.wz+=(a*w-r*v)/(.4*s),t.wx-=a*M/(.4*s),t.wy+=r*M/(.4*s),M&&t.z<=s+.5&&this.floorImpulse(t,this.o.floorFriction*1.25*Math.abs(M))}return n.scatter&&h>4*Dp&&this.scatter(t,n.scatter,e.svx||0,e.svy||0),h}scatter(t,e,n=0,s=0){let r=(ey(this)*2-1)*e*_i,a=Math.cos(r),o=Math.sin(r),l=t.vx-n,c=t.vy-s;t.vx=n+l*a-c*o,t.vy=s+l*o+c*a}kick(t,e,n,s,r){if(s<e.minSpeed||r-e.lastKick<e.recycle)return;let a=n.nx,o=n.ny;if(e.normal){if(n.t<.08||n.t>.92||a*e.normal[0]+o*e.normal[1]<.5)return;[a,o]=e.normal}let l=t.vx*a+t.vy*o;l<e.kick&&(t.vx+=(e.kick-l)*a,t.vy+=(e.kick-l)*o),e.mat.scatter&&this.scatter(t,e.mat.scatter),e.lastKick=r,this.emit("kick",{id:e.id,kind:e.kind,speed:Math.hypot(t.vx,t.vy),x:n.px,y:n.py,nx:a,ny:o})}trackOf(t){return this.tracks.find(e=>e.layer===t)||null}locate(t,e,n,s){let r=t.seg,a=s??r.length,o=t.cursor<0||s!==void 0,l=o?0:Math.max(0,t.cursor-6),c=o?a-1:Math.min(a-1,t.cursor+6),h=1/0,u=0;for(let T=l;T<=c;T++){let w=r[T],v=Cr(((e-w.a.x)*w.ex+(n-w.a.y)*w.ey)/w.len2,0,1),M=(e-w.a.x-w.ex*v)**2+(n-w.a.y-w.ey*v)**2;M<h&&(h=M,u=T)}s===void 0&&(t.cursor=u);let d=r[u],f=((e-d.a.x)*d.ex+(n-d.a.y)*d.ey)/d.len2,p=u===0&&f<0||u===r.length-1&&f>1?f:Cr(f,0,1),y=Cr(p,0,1),m=d.a.x+d.ex*y,g=d.a.y+d.ey*y;return{s:d.s+p*d.len,z:d.a.z+(d.b.z-d.a.z)*y,hw:d.a.hw+(d.b.hw-d.a.hw)*y,tx:d.tx,ty:d.ty,slope:d.slope,qx:m,qy:g,d:Math.hypot(e-m,n-g)}}trackWall(t,e,n,s){let r=this.locate(t,e,n),a=r.hw-s;if(r.d<=a||r.d<1e-9)return null;let o=(r.qx-e)/r.d,l=(r.qy-n)/r.d;return{nx:o,ny:l,depth:r.d-a,px:e-o*s,py:n-l*s}}layers(t,e,n){let s=this.R;if(n){let r=this.locate(n,t.x,t.y);if(r.s<n.entry[0]||r.s>n.exit)t.layer=0,r.s>n.exit&&(t.vx*=n.exitDamp,t.vy*=n.exitDamp,t.wx*=n.exitDamp,t.wy*=n.exitDamp),this.emit("exit",{id:n.id,kind:"track",end:r.s>n.exit?"end":"mouth",x:t.x,y:t.y,vx:t.vx,vy:t.vy,speed:t.speed});else{t.vz=(r.z-t.z)/e,t.z=r.z;return}}else if(t.layer===0&&t.z<=s+.5)for(let r of this.tracks){let a=r.entryBox;if(r.entry[1]<=r.entry[0]||t.x<a[0]||t.x>a[2]||t.y<a[1]||t.y>a[3])continue;let o=this.locate(r,t.x,t.y,r.entrySegs);if(o.s>r.entry[0]&&o.s<r.entry[1]&&o.d<o.hw){t.layer=r.layer,r.cursor=-1,t.z=this.locate(r,t.x,t.y).z,this.emit("enter",{id:r.id,kind:"track",x:t.x,y:t.y,vx:t.vx,vy:t.vy,speed:t.speed});return}}(t.z>s||t.vz)&&(t.vz-=this.gN*e,t.z+=t.vz*e,t.z<=s&&(t.z=s,t.vz=t.vz<-300?-.3*t.vz:0))}saucer(t,e){for(let n of this.saucers){if(n.holding)return e<n.releaseAt?(t.vx=t.vy=t.wx=t.wy=t.wz=0,!0):(n.holding=!1,n.armedAt=e+n.rearm,t.z=this.R,t.vx=Math.cos(n.angle)*n.kick,t.vy=Math.sin(n.angle)*n.kick,t.wx=-t.vy/this.R,t.wy=t.vx/this.R,this.emit("kick",{id:n.id,kind:"saucer",speed:n.kick,x:n.x,y:n.y,nx:Math.cos(n.angle),ny:Math.sin(n.angle)}),!1);if(!(!n.enabled||e<n.armedAt||t.layer!==0||t.z>this.R+.5)&&!(Math.hypot(t.x-n.x,t.y-n.y)>n.reach||Math.hypot(t.vx,t.vy)>n.maxSpeed))return n.holding=!0,n.releaseAt=e+n.hold,Object.assign(t,{x:n.x,y:n.y,z:this.R-n.sink,vx:0,vy:0,vz:0,wx:0,wy:0,wz:0}),this.emit("enter",{id:n.id,kind:"saucer",x:n.x,y:n.y,vx:0,vy:0,speed:0}),!0}return!1}get held(){return this.saucers.find(t=>t.holding)||null}sense(t){let e=t.serial;for(let n of this.triggers){let[s,r,a,o]=n.box,l=t.active&&n.enabled&&(n.layer==="*"||n.layer===t.layer)&&t.x>=s&&t.x<=a&&t.y>=r&&t.y<=o&&(n.poly?iy(n.poly,t.x,t.y):(t.x-n.x)**2+(t.y-n.y)**2<n.r*n.r);if(l!==n.inside){if(n.inside=l,this.emit(l?"enter":"exit",{id:n.id,kind:n.kind,x:t.x,y:t.y,vx:t.vx,vy:t.vy,speed:t.speed}),t.serial!==e)return;if(l&&n.drain){t.remove(),this.emit("drain",{id:n.id});return}}}}buildGrid(){let t=this.o.cell,e=this.R+4,n=1/0,s=1/0,r=-1/0,a=-1/0;for(let o of this.colliders)n=Math.min(n,o.box[0]),s=Math.min(s,o.box[1]),r=Math.max(r,o.box[2]),a=Math.max(a,o.box[3]);this.colliders.length||(n=s=0,r=a=t),this.gx0=Math.floor((n-e)/t),this.gy0=Math.floor((s-e)/t),this.gnx=Math.floor((r+e)/t)-this.gx0+1,this.gny=Math.floor((a+e)/t)-this.gy0+1,this.grid=Array.from({length:this.gnx*this.gny},()=>[]);for(let o of this.colliders){let l=Math.floor((o.box[0]-e)/t)-this.gx0,c=Math.floor((o.box[2]+e)/t)-this.gx0,h=Math.floor((o.box[1]-e)/t)-this.gy0,u=Math.floor((o.box[3]+e)/t)-this.gy0;for(let d=l;d<=c;d++)for(let f=h;f<=u;f++)this.grid[f*this.gnx+d].push(o)}}cellAt(t,e){let n=Math.floor(t/this.o.cell)-this.gx0,s=Math.floor(e/this.o.cell)-this.gy0;return n<0||s<0||n>=this.gnx||s>=this.gny?[]:this.grid[s*this.gnx+n]}saveState(){let t=this.ball;return{steps:this.steps,acc:this.acc,seed:this.seed,ball:[t.x,t.y,t.z,t.vx,t.vy,t.vz,t.wx,t.wy,t.wz,t.layer,t.active,t.serial,t.ox,t.oy,t.oz,...t.q],flippers:this.flippers.map(e=>[e.a,e.w,e.oa,e.on,e.queue.map(n=>({...n}))]),colliders:this.colliders.map(e=>[e.enabled,e.lastKick,e.solid]),triggers:this.triggers.map(e=>[e.enabled,e.inside]),tracks:this.tracks.map(e=>e.cursor),saucers:this.saucers.map(e=>[e.holding,e.releaseAt,e.armedAt])}}loadState(t){let e=this.ball;this.steps=t.steps,this.time=t.steps*this.dt,this.acc=t.acc,this.seed=t.seed,[e.x,e.y,e.z,e.vx,e.vy,e.vz,e.wx,e.wy,e.wz,e.layer,e.active,e.serial,e.ox,e.oy,e.oz]=t.ball,e.q=t.ball.slice(15,19),t.flippers.forEach(([n,s,r,a,o],l)=>Object.assign(this.flippers[l],{a:n,w:s,oa:r,on:a,queue:o.map(c=>({...c}))})),t.colliders.forEach(([n,s,r],a)=>Object.assign(this.colliders[a],{enabled:n,lastKick:s,solid:r})),t.triggers.forEach(([n,s],r)=>Object.assign(this.triggers[r],{enabled:n,inside:s})),t.tracks.forEach((n,s)=>{this.tracks[s].cursor=n}),(t.saucers||[]).forEach(([n,s,r],a)=>Object.assign(this.saucers[a],{holding:n,releaseAt:s,armedAt:r}))}aimFlip(t,e,n,{horizon:s=1.2,coarse:r=.008,follow:a=.6,hold:o=.3,reach:l=12,minArrive:c=0}={}){let h=this.flipper(t),u=this.ball;if(!h||!u.active||u.layer!==0||this.held)return null;let d=this.saveState(),f=this.muted;this.muted=!0;let p=this.flippers.indexOf(h),y=Math.max(1,Math.round(r/this.dt)),m=this.flippersFor(t).map(M=>this.flippers.indexOf(M)),g=()=>u.active&&u.layer===0&&!!this.flippers[p].test(u.x,u.y,this.R+l);for(let M of m)this.flippers[M].queue=[],this.flippers[M].on=!1;let T=[];for(let M=0;M*y*this.dt<=s+1e-9&&u.active;M++)g()&&T.push({st:this.saveState(),delay:M*y*this.dt,k:M}),this.run(y*this.dt);let w=(M,x)=>{this.loadState(M);let E=this.flippers[p],_=Math.cos(E.theta),b=Math.sin(E.theta),A={delay:x,miss:Math.hypot(u.x-e,u.y-n),arrive:u.speed,speed:0,angle:0,x:u.x,y:u.y,u:(u.x-E.x)*_+(u.y-E.y)*b};for(let D of m)this.flippers[D].queue=[{at:this.time+o,on:!1}],this.flippers[D].on=!0;let C=!1;for(let D=Math.round(a/this.dt);D>0&&u.active;D--){this.fixedStep();let O=Math.hypot(u.x-e,u.y-n);if(O<A.miss)A.miss=O,A.arrive=u.speed;else if(C&&O>A.miss+40)break;!C&&Math.hypot(u.x-E.x,u.y-E.y)>E.length+E.tipR+this.R+12&&(C=!0,A.speed=u.speed,A.angle=Math.atan2(u.vy,u.vx)/_i)}return A.score=A.miss+Math.max(0,c-A.arrive)*.1,A},v=null;for(let M of T){let x=w(M.st,M.delay);(!v||x.score<v.score)&&(v=x,v.k=M.k)}if(v&&y>1)for(let M of T.filter(x=>x.k===v.k-1||x.k===v.k)){let x=M.st;for(let E=1;E<y&&(this.loadState(x),this.fixedStep(),!!g());E++){x=this.saveState();let _=w(x,M.delay+E*this.dt);_.score<v.score&&(v={..._,k:v.k})}}return this.loadState(d),this.muted=f,v&&(delete v.k,delete v.score),v}};var Xa=Math.PI/180,wc=1.6,ay=7.13+2.38,zu=4.76+6.35,oy=6.5,ly=30,Gu=[9,21],Ac={pop:1400,sling:2200};function Hu(i,t,e,n,s,r=3){let a=Math.max(1,Math.ceil(Math.abs(s-n)/r));return Array.from({length:a+1},(o,l)=>{let c=(n+(s-n)*l/a)*Xa;return[i+Math.cos(c)*e,t+Math.sin(c)*e]})}function cy(i,t){return i.map((e,n)=>{let s=i[Math.max(0,n-1)],r=i[Math.min(i.length-1,n+1)],a=r[0]-s[0],o=r[1]-s[1],l=Math.hypot(a,o)||1;return[e[0]-o/l*t,e[1]+a/l*t]})}function Is(i,t,e=0,n={}){let{closed:s,...r}=n,a=s?[...t,t[0]]:t;for(let o=0;o+1<a.length;o++){let[l,c]=a[o],[h,u]=a[o+1];Math.hypot(h-l,u-c)<1e-6||i.addWall(l,c,h,u,{r:e/2,...r})}return r.id??null}function hy(i,t,e,n=4,s={}){return Is(i,cy(t,-e*n),2*n,s)}var Ec=(i,t,e,n)=>[[i-e,t-n],[i+e,t-n],[i+e,t+n],[i-e,t+n]];function uy(i,t){let{ORBIT_GUIDES:e=[],ORBIT_WEDGES:n=[],ORBIT_POSTS:s=[],ORBIT_POST:r={d:11},ORBIT_ROLLOVERS:a=[]}=t;for(let l of e)Is(i,l.line,wc,{id:"orbit-"+l.side,kind:"guide",mat:"metal"});for(let l of n)Is(i,l.line,wc,{id:"wedge-"+l.side,kind:"guide",mat:"metal"});return s.forEach(([l,c],h)=>i.addCircle(l,c,r.d/2,{id:"orbit-post"+h,kind:"post",mat:"rubber"})),{rollovers:a.map((l,c)=>i.addTrigger(Ec(l.x,l.y,...Gu),"orbit"+c,{kind:"orbit"}))}}function Fp(i){let t=0;return i.map((e,n)=>(n&&(t+=Math.hypot(e[0]-i[n-1][0],e[1]-i[n-1][1])),{p:[e[0],e[1],e[2]],w:e[3],s2:t}))}function Vu(i,t){let e=1;for(;e<i.length-1&&i[e].s2<t;)e++;let n=i[e-1],s=i[e],r=s.s2-n.s2||1,a=(t-n.s2)/r;return{x:n.p[0]+(s.p[0]-n.p[0])*a,y:n.p[1]+(s.p[1]-n.p[1])*a,tx:(s.p[0]-n.p[0])/r,ty:(s.p[1]-n.p[1])/r}}function Op(i,t,e,n){let s=Vu(i,t-e),r=Vu(i,t+e);return[[s.x-s.ty*n,s.y+s.tx*n],[r.x-r.ty*n,r.y+r.tx*n],[r.x+r.ty*n,r.y-r.tx*n],[s.x+s.ty*n,s.y-s.tx*n]]}function dy(i,t){let e=i.dropRadius,n=i.rail,s=r=>r*r*(3-2*r);for(let r=0;r<=i.spread;r+=.25)if(n+(e-n)*s(r/i.spread)>=t+i.rod-.5)return e+i.spread-r;return e}function fy(i,t,e){let{RAMP:n,WIRE:s,BALL_R:r}=t,a=Fp(e.profile),o=Fp(e.wire),l=a.at(-1).s2,c=r+2.6,h=40,u=[];for(let x of a){let E=Math.max(0,Math.min(1,(l-x.s2)/h));u.push([x.p[0],x.p[1],x.p[2]+r,c+(x.w/2-c)*E])}for(let x of o.slice(1))u.push([x.p[0],x.p[1],x.p[2]+s.ride,c]);let d=a.filter(x=>x.p[2]<ly),f=d.at(-1).s2,p=x=>d.map((E,_)=>{let b=d[Math.max(0,_-1)].p,A=d[Math.min(d.length-1,_+1)].p,C=Math.hypot(A[0]-b[0],A[1]-b[1])||1,D=x*(E.w/2+n.side/2);return[E.p[0]-(A[1]-b[1])/C*D,E.p[1]+(A[0]-b[0])/C*D]}),[y,m]=[p(1),p(-1)],g=`ramp-${e.id}-wall`;for(let x of[y,m])Is(i,x,n.side,{id:g,kind:"ramp",mat:"ramp",layer:"*"});i.addWall(...y.at(-1),...m.at(-1),{r:n.floor/2,id:g,kind:"ramp",mat:"ramp"});let T=0;for(let x=1;x<u.length;x++)T+=Math.hypot(u[x][0]-u[x-1][0],u[x][1]-u[x-1][1]);i.addTrack(u,{id:e.id,layer:e.id,mat:"ramp",entry:[0,f-4],exit:T-dy(s,r),exitDamp:.4});for(let[x,E]of[...e.supports,...e.wireSupports])i.addCircle(x,E,oy,{kind:"post",mat:"plastic"});let w=`ramp-${e.id}-mouth`,v=`ramp-${e.id}-made`;i.addTrigger(Op(a,2,10,n.mouth/2),w,{kind:"mouth",layer:"*"}),i.addTrigger(Op(a,l*(e.switchAt??.82),10,n.width/2+4),v,{kind:"ramp",layer:e.id});let M=Vu(a,0);return{id:e.id,side:e.side,layer:e.id,mouth:w,made:v,at:[M.x,M.y],heading:Math.atan2(M.ty,M.tx)/Xa}}function Bp(i,t){let{PF:e,BALL_R:n,FLIPPERS:s,SLINGS:r,APRON:a,SHOOTER:o,ARCH:l,INLANE_GUIDES:c,STAR_POSTS:h,GATE:u,TOP_LANES:d,POPS:f,POP:p,RAMPS:y,RETURN_LANES:m,TARGETS:g,TARGET_GUIDES:T,TARGET_RUBBER:w,SAUCER:v}=t,M={};i.bounds=[-20,-80,e.w+20,e.l+20];let x=[[e.rail,-10],[e.rail,l.left.cy],...Hu(l.left.cx,l.left.cy,l.left.r,180,90).slice(1),...Hu(l.right.cx,l.right.cy,l.right.r,90,0),[o.laneRight,90]];hy(i,x,-1,4,{id:"rail",kind:"rail",mat:"metal"});let E=o.dividerFace??o.laneLeft-wc,_=o.laneLeft-E;i.addWall(o.laneLeft-.65,90,o.laneLeft-.65,o.apronTop,{r:.65,id:"divider",kind:"rail",mat:"metal"}),i.addWall(E+_/2,o.apronTop,E+_/2,o.dividerTop,{r:_/2,id:"divider",kind:"rail",mat:"metal"});let b=o.ballRest[1]-n;i.addWall(o.laneLeft,b-3,o.laneRight,b-3,{r:3,id:"plunger",kind:"plunger",e:.3,f:.3});let[A,C]=u.from,[D,O]=u.to,L=Math.hypot(D-A,O-C),F=[(D-A)/L,(O-C)/L],z=[-F[1],F[0]];i.addWall(A,C,D,O,{r:1,oneWay:z,id:"gate",kind:"gate",mat:"metal"});let V=(at,G,j)=>[at[0]+z[0]*G*6+F[0]*j*4,at[1]+z[1]*G*6+F[1]*j*4];i.addTrigger([V(u.from,-1,-1),V(u.to,-1,1),V(u.to,1,1),V(u.from,1,-1)],"gate",{kind:"gate"}),i.addTrigger(Ec((o.laneLeft+o.laneRight)/2,o.ballRest[1]+10,(o.laneRight-o.laneLeft)/2,30),"shooter",{kind:"shooter"}),Object.assign(M,{gate:"gate",shooter:"shooter",plunger:{id:"plunger",rest:[...o.ballRest]}});for(let at of[[a.leftShoulder,a.lipLeft],[a.lipRight,a.rightShoulder]])Is(i,at,1.3,{id:"apron",kind:"apron",mat:"metal"});let Q=Math.atan2(a.lipEndY-a.lipCy,a.lipRight[0]-e.cx)/Xa,q=Math.atan2(a.lipEndY-a.lipCy,a.lipLeft[0]-e.cx)/Xa,nt=Hu(e.cx,a.lipCy,a.lipR,Q,q,4).map(([at,G])=>[at,G-n]);M.drain=i.addTrigger([[e.rail,-60],[o.laneLeft,-60],[o.laneLeft,a.lipEndY-n],...nt,[e.rail,a.lipEndY-n]],"drain",{drain:!0});for(let at of c)Is(i,at.plate.outline,0,{id:"inlane-"+at.side,kind:"guide",mat:"plastic",closed:!0});for(let[at,G]of h)i.addCircle(at,G,ay,{kind:"post",mat:"rubber"});M.orbits=uy(i,t).rollovers,M.slings={};for(let at of r){let[G,j,xt]=at.posts,It="sling-"+at.side;i.addKicker(...G,...j,{r:zu,away:xt,id:It,kind:"sling",mat:"sling",kick:Ac.sling,minSpeed:120}),i.addWall(...j,...xt,{r:zu,id:It+"-rubber",kind:"rubber",mat:"sling"}),i.addWall(...xt,...G,{r:zu,id:It+"-rubber",kind:"rubber",mat:"sling"}),M.slings[at.side]=It}M.flippers={};for(let at of s)M.flippers[at.id]=i.addFlipper({id:at.id,side:at.side,x:at.x,y:at.y,rest:at.rest,up:at.up,baseR:at.baseR,tipR:at.tipR,length:at.length});for(let at of d.rubbers)i.addWall(...at.posts[0],...at.posts[1],{r:at.postR+at.cord,kind:"rubber",mat:"band"});M.lanes=d.lanes.map((at,G)=>i.addTrigger(Ec(at.x,at.y,...Gu),"lane"+G,{kind:"rollover"})),M.returns=m.map((at,G)=>i.addTrigger(Ec(at.x,at.y,...Gu),"return"+G,{kind:at.kind})),M.saucer=i.addSaucer(v.x,v.y,{id:"saucer",reach:v.reach,maxSpeed:v.maxSpeed,hold:v.hold,kick:v.kick,angle:v.kickAngle}),M.pops=f.map((at,G)=>i.addCircle(at.x,at.y,p.reach-n,{id:"pop"+G,kind:"pop",mat:"pop",kick:Ac.pop,minSpeed:50,recycle:.03}));let et=g,Et=et.depth/2;M.targets=et.list.map((at,G)=>i.addWall(at.x-et.width/2+Et,at.y,at.x+et.width/2-Et,at.y,{r:Et,id:"target"+G,kind:"target",mat:"drop"}));let At=w.posts;At.forEach((at,G)=>{let j=At[(G+1)%At.length],xt=Math.max(9,w.grooves[G]+w.cord);i.addWall(...at,...j,{r:xt,id:"target-rubber",kind:"rubber",mat:"band"})});for(let at of T)Is(i,at.line,wc,{id:"target-guide-"+at.side,kind:"guide",mat:"metal"});M.ramps=y.map(at=>fy(i,t,at));let se=et.list[1],Yt=at=>{let G=t.ORBIT_POSTS[at],j=t.ORBIT_WEDGES[at].line,xt=t.INSERTS.find(ne=>ne.id===["left_orbit_arrow","right_orbit_arrow"][at]),It=j.reduce((ne,it)=>Math.hypot(it[0]-G[0],it[1]-G[1])<Math.hypot(ne[0]-G[0],ne[1]-G[1])?it:ne),Tt=xt.angle*Xa,Gt=[(G[0]+It[0])/2,(G[1]+It[1])/2];return[Gt[0]-Math.sin(Tt)*90,Gt[1]+Math.cos(Tt)*90]};return M.aim={...Object.fromEntries(M.ramps.map(at=>[at.id,at.at])),targets:[se.x,se.y-Et-n-2],saucer:[v.x,v.y],"orbit-left":Yt(0),"orbit-right":Yt(1)},M}var kp=Math.PI/180,py=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),zp=44.45,Hp=99,Ls={soft:1300,full:2600},my={hero:"play",deadbounce:"ramp-deadbounce",tiptop:"ramp-tiptop",about:"pops",skills:"hold",experience:"hold",contact:"hold"},Gp=["ramp-deadbounce","orbit-left","ramp-tiptop","orbit-right"],Rc=class{constructor(t,{reduced:e}){this.h=t,this.reduced=e,this.time=0,this.power=0,this.skillsLit=[0,0,0,0],this.skillFocus=-1,this.rung=-1,this.explodedPop=0,this.station=null,this.play="play",this.exploded=0;for(let n of t.rollovers)n.pos=Ee(n.x,n.y,gn);t.shooterBall.visible=!1,t.ball.material=t.ball.material.clone(),this.physics=new Tc({seed:7}),this.ids=Bp(this.physics,vu),this.popColliders=this.physics.colliders.filter(n=>n.kind==="pop"),this.events(),this.auto={state:"serve",at:0,side:null,still:0,shotUntil:0,next:0,user:-1e9,cache:new Map},t.plunger.releasedAt=-1,this.serveAt=.2,this.plungeSpeed=Ls.full,this.aim=new N,e&&this.settleForStill()}settleForStill(){let t=this.physics,e=Sn.find(n=>n.id==="left");t.setFlipper("left",!0),t.ball.place(e.x+20,e.y+70,0,-200),t.run(2.5),this.auto.state="still"}events(){let t=this.physics;t.on("kick",e=>{e.kind==="pop"?this.firePop(+String(e.id).slice(3),Ee(e.x,e.y)):e.kind==="sling"?this.kickSling(String(e.id).replace("sling-","")):e.kind==="saucer"&&this.kickSaucer()}),t.on("hit",e=>{e.kind==="target"&&this.hitTarget(+String(e.id).slice(6),e.speed)}),t.on("enter",e=>{let n=String(e.id);if(/^(lane|return)\d$/.test(n))this.flash(As(n),.8);else if(/^orbit\d$/.test(n))this.flash(As(n),1.4);else if(n==="saucer")this.flash("saucer_arrow",1.6),this.saucerAt=this.time;else if(n==="gate")this.swingGate();else if(n.endsWith("-made")){let s=ns.find(r=>n===`ramp-${r.id}-made`);s&&this.flash(`${s.side}_ramp_arrow`,1.4)}}),t.on("drain",()=>{this.auto.state="serve",this.serveAt=this.time+.9;for(let e of Sn)t.setFlipper(e.side,!1)})}setStation(t){t!==this.station&&(this.station=t,this.play=my[t]||this.play,this.play==="pops"&&this.auto.state==="cradled"&&this.letGo())}flip(t,e=.16){let n=this.physics;this.auto.user=this.time,n.setFlipper(t,!0),n.setFlipper(t,!1,e)}hold(t,e){this.auto.user=this.time,this.physics.setFlipper(t,e)}shoot(){return this.auto.state!=="cradled"?!1:(this.auto.forceShot=!0,!0)}firePop(t,e){let n=this.h.pops[t];if(!n)return;n.fired=this.time;let s=n.group.position,r=this.time*7.3,a=e?e.x-s.x:Math.cos(r),o=e?e.z-s.z:Math.sin(r);n.axis.set(o,0,-a).normalize()}kickSling(t){let e=this.h.slings.find(n=>n.side===t);e&&(e.kicked=this.time)}flash(t,e=1){let n=this.h.inserts.get(t);n&&(n.flash=Math.max(n.flash,e))}swingGate(){let t=this.h.gate;t.open=Math.max(t.open,1.25),t.velocity=0}hitTarget(t,e=1500){let n=this.h.targets[t];if(!n)return;n.hit=this.time,n.kick=Math.min(1,.35+e/2500);let s=this.h.inserts.get(Jn.list[t].insert);s&&(s.flash=Math.max(s.flash,1.3))}kickSaucer(){this.h.saucer&&(this.h.saucer.kicked=this.time),this.flash("saucer_arrow",1)}pressStart(){this.startAt=this.time;let t=this.h.plunger;this.auto.state==="shooter"&&!t.pulling&&t.releasedAt<0&&(t.pull=.7,t.pulling=!0,this.release(Ls.full))}pull(){let t=this.h.plunger;t.pulling=!0,t.releasedAt=-1,this.auto.user=this.time}release(t){let e=this.h.plunger;e.pulling&&(e.pulling=!1,e.releasedAt=this.time,e.from=e.pull,e.limit=1,this.plungeSpeed=t??Ls.soft+(Ls.full-Ls.soft)*e.from)}near(t){let e=this.physics.ball,n=Sn.find(r=>r.id===t);return!e.active||e.layer!==0?!1:(t==="left"?e.x<_t.cx+8:e.x>_t.cx-8)&&e.y<n.y+95&&Math.hypot(e.x-n.x,e.y-n.y)<n.length+70}letGo(){for(let t of Sn)this.physics.setFlipper(t.side,!1);this.auto.state="play",this.auto.side=null}shotFor(t,e){let n=t+":"+e;if(this.auto.cache.has(n))return this.auto.cache.get(n);let s=this.ids.aim[e.replace(/^ramp-/,"")];if(e==="pass"){let a=Sn.find(o=>o.id===(t==="left"?"right":"left"));s=[a.x+(t==="left"?14:-14),a.y+150]}let r=s?this.physics.aimFlip(t,s[0],s[1],{minArrive:e.startsWith("ramp")?2e3:0}):null;return this.auto.cache.set(n,r),r}autopilot(t){let e=this.physics,n=e.ball,s=this.auto,r=this.time;if(s.state==="still"||r-s.user<4)return;if(s.state==="serve"){if(r<this.serveAt)return;s.state="serving",s.at=r;return}if(s.state==="serving"){if(r-s.at<.38)return;e.ball.place(oe.ballRest[0],oe.ballRest[1],0,0),s.state="shooter",s.at=r;return}if(s.state==="shooter"){let o=this.h.plunger;!o.pulling&&o.releasedAt<0&&r-s.at>.8&&(this.pull(),s.user=-1e9,o.limit=this.play==="pops"?.25:1),o.pulling&&o.pull>=o.limit-.001&&r-s.at>1.4&&(this.release(this.play==="pops"?Ls.soft:Ls.full),s.user=-1e9);return}if(!n.active||e.held)return;let a=n.speed<30;for(let o of["left","right"]){let l=this.near(o);s.state==="play"&&l&&this.play!=="pops"&&r>s.shotUntil&&n.vy<40&&(e.setFlipper(o,!0),s.state="catching",s.side=o,s.at=r)}if(s.state==="catching"){if(!this.near(s.side)){r-s.at>.4&&this.letGo();return}s.still=a?s.still+t:0,s.still>.25?(s.state="cradled",s.at=r):r-s.at>2.5&&this.letGo();return}if(s.state==="cradled"){if(!this.near(s.side)){this.letGo();return}if(this.play==="pops"){this.letGo();return}let o=s.forceShot?0:this.play==="hold"?1/0:.7;if(r-s.at<o)return;s.forceShot=!1;let l=this.play;(l==="play"||l==="hold")&&(l=Gp[s.next%Gp.length],s.next++);let c=this.shotFor(s.side,l);if((!c||c.miss>14)&&(l="pass",c=this.shotFor(s.side,"pass")),!c){this.letGo();return}e.setFlipper(s.side,!1),e.setFlipper(s.side,!0,c.delay),e.setFlipper(s.side,!1,c.delay+.25),s.shotUntil=r+c.delay+.5,s.state="play",s.side=null}}update(t,e){this.time+=t;let n=this.time,s=this.h,r=this.power,a=this.physics,o=this.popColliders[this.explodedPop];o&&(o.kick=this.exploded>.05?0:Ac.pop),this.reduced||(this.autopilot(t),a.step(t));for(let h of s.flippers)h.pivot.rotation.y=a.flipperAngle(h.id)*kp;for(let h of s.pops){let u=h.fired<0?9:n-h.fired,d=u<.004?0:u<.014?((u-.004)/.01)**2:u<.03?1:u<.075?.5+.5*Math.cos(Math.PI*(u-.03)/.045):0;h.ring.position.y=(Er.ringRest-Er.ringTravel*(this.reduced?0:d))*U;let f=u<.006?u/.006:Math.max(0,1-(u-.006)/.035);h.skirt.quaternion.setFromAxisAngle(h.axis,this.reduced?0:f*2.5*kp);let p=u<.5?Math.exp(-u/.07):0;h.capMat.emissiveIntensity=(.22+2.6*p)*r*h.capMat.userData.gain,h.bodyMat.emissiveIntensity=(.06+1.4*p)*r*h.bodyMat.userData.gain}for(let h of s.slings){let u=h.kicked<0?9:n-h.kicked,d=0;u<.008?d=Math.sin(u/.008*(Math.PI/2)):u<.025?d=1:u<.065&&(d=.5+.5*Math.cos(Math.PI*(u-.025)/.04));let f=u>=.065&&u<.35?-.16*Math.sin((u-.065)*Math.PI*2*22)*Math.exp(-(u-.065)*14):0;this.reduced&&(d=0),h.arm.position.copy(h.rest).addScaledVector(h.push,d);let p=this.reduced?0:d+f;(Math.abs(p-h.shown)>.015||p===0&&h.shown!==0)&&(h.rubber.geometry.dispose(),h.rubber.geometry=h.rubberGeo(p*9),h.shown=p)}for(let h of s.targets){let u=h.hit<0?9:n-h.hit,d=0;u<.004?d=u/.004:u<.09&&(d=Math.cos((u-.004)/.086*Math.PI*1.5)*Math.exp(-(u-.004)*30)),h.holder.position.copy(h.rest).addScaledVector(h.back,this.reduced?0:2*(h.kick||1)*d)}if(s.saucer){let h=s.saucer,u=h.kicked<0?9:n-h.kicked,d=u<.008?u/.008:u<.06?1-(u-.008)/.052:0;h.finger.position.copy(h.rest).addScaledVector(h.out,this.reduced?0:6*U*d)}this.updateShooter(t),this.updateBall(),this.updateRollovers(t),this.updateInserts(t,e),s.backglass.material.color.setScalar(r*(s.backglass.lcd.showing==="art"?.92+.08*Math.sin(n*1.3):.94));for(let h of s.gi)h.intensity=h.userData.base*r;for(let h of s.bulbs)h.emissiveIntensity=2.2*r*h.userData.gain;let l=this.startAt===void 0?9:n-this.startAt,c=this.auto.state==="shooter"&&Math.sin(n*5)>0;s.startButton.material.emissiveIntensity=(.3+(c?.5:0)+3*Math.exp(-l*5))*r*(s.startButton.material.userData.gain||1)}updateBall(){let t=this.physics.ball,e=this.h.ball,n=this.auto;if(n.state==="serving"){let r=py((this.time-n.at)/.38),a=1-(1-r)**2;e.visible=!0,e.position.copy(Ee(oe.laneLeft-24+(oe.ballRest[0]-oe.laneLeft+24)*a,oe.ballRest[1]+4*(1-a),gn));return}if(e.visible=t.active,!t.active)return;let s=n.state==="shooter"&&this.h.plunger.shown||0;e.position.copy(Ee(t.view.x,t.view.y-s,t.view.z)),e.quaternion.set(t.q[0],t.q[2],-t.q[1],t.q[3])}updateShooter(t){let e=this.h,n=e.plunger,s=this.time,r=this.auto,a=0;if(n.pulling)n.pull=Math.min(n.limit??1,n.pull+t/.5),a=n.pull*zp;else if(n.releasedAt>=0){let l=s-n.releasedAt,c=Math.PI/2/Hp;if(l<c)a=n.from*zp*Math.cos(Hp*l);else{r.state==="shooter"&&(this.physics.ball.place(oe.ballRest[0],oe.ballRest[1]+1,0,this.plungeSpeed),r.state="play");let h=(l-c)/.12;a=h<1?-5*n.from*Math.sin(Math.PI*h):0,h>=1&&(n.releasedAt=-1,n.pull=0)}}this.reduced&&(a=0),n.shown=Math.max(0,a),n.group.position.copy(n.rest),n.group.position.z+=a*U,n.spring.scale.z=(n.springLen-a)/n.springLen;let o=e.gate;o.velocity+=(-Math.sin(o.open)*820-o.velocity*6)*t,o.open+=o.velocity*t,o.open<0&&(o.open=0,o.velocity=Math.abs(o.velocity)>.5?-o.velocity*.3:0),o.flap.rotation.x=this.reduced?0:o.open}updateRollovers(t){let e=[this.h.ball];for(let n of this.h.rollovers){let s=!1;for(let r of e)r.visible&&Math.abs(r.position.x-n.pos.x)<9*U&&Math.abs(r.position.z-n.pos.z)<21*U&&r.position.y<20*U&&(s=!0);s&&!n.on&&this.flash(n.insert,.8),n.on=s,n.press=s?Math.min(1,n.press+t/.01):Math.max(0,n.press-t/.03),n.wire.scale.y=1-.75*n.press}}updateInserts(t,e){let n=this.time,s=this.power,r=this.station,a=.05;for(let[o,l]of this.h.inserts){let c=a;switch(l.group){case"years":{if(r==="experience")c=l.index<this.rung?.85:l.index===this.rung?Math.floor(n*5)%2?1.15:.7:.08;else{let h=Math.floor(n*3)%7;c=h===l.index||h===5?.85:.12}break}case"skills":{r==="skills"?c=this.skillsLit[l.index]>.5?l.index===this.skillFocus?.78+.1*Math.sin(n*5):.6:.06:c=(Math.floor(n*1.5)+l.index)%4===0?.75:.14;break}case"ramp0":c=r==="deadbounce"?Math.floor(n*4)%2?1.2:.3:.2;break;case"ramp1":c=r==="tiptop"?Math.floor(n*4)%2?1.2:.3:.2;break;case"ladder":c=Math.floor(n*2.5)%4===l.index?.9:.12;break;case"targets":c=.14;break;case"saucer":c=this.physics.held?Math.floor(n*8)%2?1.2:.4:r==="about"?.6:.25;break;case"again":c=r==="contact"?Math.floor(n*2.5)%2?1.2:.35:.1;break;case"orbit":c=.1;break}l.flash=Math.max(0,l.flash-t*3),l.level+=(c-l.level)*(1-Math.exp(-t*18)),l.mat.emissiveIntensity=(l.level+l.flash*1.1)*s*l.mat.userData.gain,l.side.emissiveIntensity=l.mat.emissiveIntensity}}setSkills(t){this.skillsLit.forEach((e,n)=>{let s=t>.12+n*.2?1:0;s&&!e&&this.flash(mi[n].insert,.6),this.skillsLit[n]=s})}setTimeline(t){this.rung=Math.min(4,Math.floor(t*5.2))}};var qa="http://www.w3.org/2000/svg",Cc=class{constructor(t,e,n){this.svg=t,this.links=[],e.forEach((s,r)=>{for(let a of s.querySelectorAll("[data-anchor]")){let[o,l,c]=a.dataset.anchor.split(",").map(Number),h=document.createElementNS(qa,"g");h.setAttribute("class","hud-link");let u=document.createElementNS(qa,"path");u.setAttribute("pathLength","1"),u.setAttribute("class","hud-line");let d=document.createElementNS(qa,"circle");d.setAttribute("r","9"),d.setAttribute("class","hud-ring");let f=document.createElementNS(qa,"circle");f.setAttribute("r","3"),f.setAttribute("class","hud-dot");let p=document.createElementNS(qa,"circle");p.setAttribute("r","2"),p.setAttribute("class","hud-tick"),h.append(u,d,f,p),t.append(h),this.links.push({index:r,el:a,world:n(o,l,c),g:h,path:u,ring:d,dot:f,tick:p,primary:!a.closest("li"),shown:-1,d:""})}}),this.p=null}update(t,e,n,s,r){let a=r.layout,o=a==="tall",l=a==="side";for(let c of this.links){let h=s[c.index]||0;if(!c.primary&&(a!=="wide"||!c.el.classList.contains("current"))&&(h=0),h<.01){c.shown!==0&&(c.g.style.display="none",c.shown=0);continue}let u=c.world.clone().project(t),d=c.el.getBoundingClientRect();if(u.z>1||d.height===0){c.g.style.display="none",c.shown=0;continue}c.shown===0&&(c.g.style.display="");let f=(u.x+1)/2*e,p=(1-u.y)/2*n;if(!(!(o||l)||f>24&&p>r.header+24&&(o?f<e-24&&p<r.panelTop-40:f<r.panelLeft-40&&p<n-24))){c.shown!==0&&(c.g.style.display="none",c.shown=0);continue}let m=l||d.left>f,g=l?r.panelLeft-14:m?d.left-14:d.right+14,T=l?Math.min(n-24,Math.max(r.header+24,d.top+Math.min(d.height/2,16))):d.top+Math.min(d.height/2,16),w=m?g-36:g+36,v=r.panelTop-14,M=o?`M${f.toFixed(1)},${p.toFixed(1)}L${f.toFixed(1)},${v.toFixed(1)}`:`M${f.toFixed(1)},${p.toFixed(1)}L${w.toFixed(1)},${T.toFixed(1)}L${g.toFixed(1)},${T.toFixed(1)}`;M!==c.d&&(c.path.setAttribute("d",M),c.d=M);let x=o?[f,v]:[g,T];if(c.ring.setAttribute("cx",f.toFixed(1)),c.ring.setAttribute("cy",p.toFixed(1)),c.dot.setAttribute("cx",f.toFixed(1)),c.dot.setAttribute("cy",p.toFixed(1)),c.tick.setAttribute("cx",x[0].toFixed(1)),c.tick.setAttribute("cy",x[1].toFixed(1)),Math.abs(h-c.shown)>.003){let E=h*h*(3-2*h);c.path.style.strokeDashoffset=(1-E).toFixed(3),c.ring.style.transform=`scale(${E.toFixed(3)})`,c.ring.style.transformOrigin=`${f.toFixed(1)}px ${p.toFixed(1)}px`,c.g.style.opacity=Math.min(1,h*1.6).toFixed(3),c.shown=h}else c.ring.style.transformOrigin=`${f.toFixed(1)}px ${p.toFixed(1)}px`;c.g.classList.toggle("lit",c.el.classList.contains("lit")||c.primary)}}};var Wu=i=>i*i*(3-2*i),Xu=i=>Math.min(1,Math.max(0,i)),Pc=class{constructor(t,e){this.pop=t;let n=t.group;n.updateMatrixWorld(!0);let s=new Fn;this.parts=t.parts.map((l,c)=>{s.setFromObject(l);let h=n.worldToLocal(s.getCenter(new N)),u=s.getSize(new N);return{holder:l,k:c,lift:l.userData.lift,label:l.userData.label,mid:h,reach:Math.max(u.x,u.z)/2}});let r=this.parts.length,a=this.parts[r-1],o=new Me().setFromPoints([new N(0,-8*U,0),new N(0,a.mid.y+(a.lift+18)*U,0)]);this.axis=new Kr(o,new da({color:7245055,dashSize:7*U,gapSize:2*U,transparent:!0,opacity:0,depthWrite:!1})),this.axis.computeLineDistances(),this.axis.visible=!1,n.add(this.axis),this.el=document.createElement("div"),this.el.className="cad",this.el.setAttribute("aria-hidden","true");for(let l of this.parts){l.tag=document.createElement("span"),l.tag.className="cad-tag";let c=document.createElement("i");c.textContent=String(l.k+1).padStart(2,"0"),l.tag.append(c,document.createTextNode(l.label)),this.el.append(l.tag)}e.append(this.el),this.shown=-1,this.v=new N}amountFor(t,e){let n=this.parts.length,s=.06;return Wu(Xu(e*(1+s*(n-1))-(n-1-t.k)*s))}update(t,e,n,s,r){if(t<.001&&this.shown===0)return;for(let l of this.parts)l.holder.position.y=l.lift*this.amountFor(l,t)*U;let a=r==="tall"?0:Wu(Xu((t-.2)/.35));if(this.axis.visible=t>.01,this.axis.material.opacity=.85*Wu(Xu(t/.3)),this.el.style.opacity=a.toFixed(3),this.el.classList.toggle("left",r!=="left"),this.shown=t<.001?0:t,a<.01)return;let o=r!=="left"?-1:1;for(let l of this.parts){let c=l.lift*this.amountFor(l,t);this.v.set(o*(l.reach+14*U),l.mid.y+c*U,0).applyMatrix4(this.pop.group.matrixWorld).project(e);let h=(this.v.x+1)/2*n,u=(1-this.v.y)/2*s;l.tag.style.transform=`translate(${h.toFixed(1)}px, ${u.toFixed(1)}px)`}}};var Dn=document.documentElement,xn=matchMedia("(prefers-reduced-motion: reduce)").matches,Vp=matchMedia("(hover: hover) and (pointer: fine)").matches,Tn=(i,t=document)=>t.querySelector(i),Ds=(i,t=document)=>[...t.querySelectorAll(i)],Ni=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Ya=i=>i*i*(3-2*i),gy=Math.PI/180,qu={"ramp-deadbounce":{label:"Read the Deadbounce case study",href:"/work/deadbounce.html"},"ramp-tiptop":{label:"Read the Tip Top case study",href:"/work/tip-top-pinball.html"},"pop-0":{label:"Fire the pop bumper"},"pop-1":{label:"Fire the pop bumper"},"pop-2":{label:"Fire the pop bumper"},"target-0":{label:"Hit the target"},"target-1":{label:"Hit the target"},"target-2":{label:"Hit the target"},"sling-left":{label:"Kick the slingshot"},"sling-right":{label:"Kick the slingshot"},"flip-left":{label:"Flip"},"flip-right":{label:"Flip"},plunger:{label:"Launch a ball back to the top"},dmd:{label:"Next display scene"},portrait:{label:"Fire the pops"}},Wp={hero:{az:-18,el:5,fit:[.84,1.02],side:"left",fov:30},deadbounce:{glass:[-.05,-.25],az:-18,el:18,fit:[.7,.96],side:"right",lift:6,sharp:1,tall:{glass:[0,-.03],az:-12,el:8,fit:[.64,.5]}},tiptop:{glass:[.05,-.25],az:18,el:18,fit:[.7,.96],side:"left",lift:6,sharp:1,tall:{glass:[0,-.03],az:12,el:8,fit:[.64,.5]}},about:{at:[236,935,350],az:14,el:13,fit:[.62,.92],fov:22,side:"right",lift:10,sharp:1,tall:{at:[236,960,400],fit:[.56,.74]}},skills:{at:[237,384,0],az:0,el:50,fit:[.47,.13],side:"left",lift:6},experience:{at:[235,988,8],az:-4,el:52,fit:[.38,.17],side:"right",lift:12},contact:{at:[237,165,22],az:-8,el:47,fit:[.27,.17],side:"left",lift:8}},Us={stops:[.1,.3,.5,.7].map(i=>[i,i+.1]),inserts:[[26,386],[69.4,386],[404.95,386],[448.35,386]],close:{el:58,fit:[.13,.07],side:"left",fov:30},swing:7};function xy(i){let t=Us.stops,e=t.length-1,n=Ya(Ni(i/t[0][0]))*(1-Ya(Ni((i-t[e][1])/(1-t[e][1])))),s=0,r=0;for(let a=0;a<e;a++){let o=Ni((i-t[a][1])/(t[a+1][0]-t[a][1]));o>0&&(s=a+Ya(o),r=Math.sin(Math.PI*o))}return{k:s,zoom:n,cross:r}}var Xp={deadbounce:{url:"/assets/img/deadbounce-origin.jpg",focus:[.5,.5],action:"ramp-deadbounce"},tiptop:{url:"/assets/img/tiptop.jpg",focus:[.5,0],action:"ramp-tiptop"},about:{url:"/assets/img/dylan.jpg",card:!0,action:"portrait"}};async function _y(){if(!Dn.classList.contains("machine"))return;document.readyState==="loading"&&await new Promise(P=>addEventListener("DOMContentLoaded",P,{once:!0}));let i=Tn("[data-stage]"),t=Ds("[data-station]");if(!i||!t.length)throw new Error("No stage on this page");let e=Ip(),n=Tn("[data-boot-label]"),s=async P=>{n&&(n.textContent=P),await new Promise($=>requestAnimationFrame(()=>setTimeout($,0)))};await s("Printing the playfield"),await op(),performance.mark("machine:fonts");let r={playfield:cp(e.playfieldScale),backglass:up(e.low?1320:2048),cabinetSide:pp(2048,768,{frontBottom:(ln.top-ln.bottom)/(ln.top-ln.bottom+(ln.front-ln.back)*Math.tan(6.5*gy))}),plastics:br.map(P=>_p(P)),inlane:Tr.map(P=>({plate:wu(P.plate.outline),cover:wu(P.cover.outline,{mark:!0})})),apron:mp(e.low?1024:2048),popDecal:xp(256),cards:{instructions:Eu("instructions",625),free:Eu("free",625)},target:gp(160)},a=document.createElement("canvas"),o=Tn("[data-dmd-label]"),l=Tn("[data-dmd-count]"),c=new window.DMD(a,{reduced:xn,width:e.low?640:896,onScene:(P,$,X)=>{o&&(o.textContent=P),l&&X>1&&(l.textContent=`${$} / ${X}`)}});performance.mark("machine:art"),await s("Assembling the machine");let h=Pp(i,e),u=ip(h.envMap),d=Math.min(e.anisotropy,h.renderer.capabilities.getMaxAnisotropy()),f=bp({M:u,art:r,dmdCanvas:a,anisotropy:d,maxAnisotropy:h.renderer.capabilities.getMaxAnisotropy()});performance.mark("machine:built"),h.scene.add(f.root),h.ao&&h.ao.setSceneClipBox(new Fn().setFromObject(f.root).expandByScalar(.03)),c.onPaint=()=>{f.dmd.texture.needsUpdate=!0};let p=new Rc(f,{reduced:xn}),y=(P,$,X=0)=>f.toWorld(P,$,X);f.backbox.updateMatrixWorld(!0);let m=f.backbox.localToWorld(new N(0,(rs.dmdY-rs.dmdH/2+rs.glassY+rs.glassH)/2,0)),g=([P,$])=>f.backbox.localToWorld(new N(P,rs.glassY+rs.glassH/2+$,0)),T=P=>{let $=Wp[P],X=lt=>lt.at?y(...lt.at):lt.glass?g(lt.glass):m;return{...$,target:X($),...$.tall&&{tall:{...$.tall,target:X({...$,...$.tall})}}}},w=t.map(P=>P.dataset.station),v=new Sc(h.camera);v.setPoses(w.map(T));let M={target:y(237,470,60),az:-34,el:15,fit:[1.5,1.6],side:"center",fov:30},x=Us.inserts.map(([P,$])=>({...Us.close,target:y(P,$+6,0),az:P<237?Us.swing:-Us.swing})),E=-1,_=f.backglass.lcd;for(let[P,$]of Object.entries(Xp)){let X=new Image;X.decoding="async",X.src=$.url,X.decode().then(()=>_.add(P,$.card?fp(X,1600):dp(X,e.low?1280:1600,$.focus),$.action)).catch(()=>{})}let b=new Cc(Tn("[data-hud]"),t,y),A=w.indexOf("about"),C=A>=0?new Pc(f.pops[p.explodedPop],document.body):null,D=P=>{let $=v.holds[A]*1.6,X=Ni((P-(v.anchors[A]-$/2))/$);return X<.5?Ya(Ni(X/.36)):Ya(Ni((1-X)/.36))},O=null;!xn&&window.Lenis&&(O=new window.Lenis({lerp:.085,wheelMultiplier:.9}));let L=()=>O?O.animatedScroll:window.scrollY,F=(P,$={})=>{O?O.scrollTo(P,{duration:$.duration||1.6,easing:X=>1-Math.pow(1-X,4)}):window.scrollTo({top:P,behavior:"auto"})},z=P=>{let $=Tn("#"+P);if(!$)return-1;let X=$.closest("[data-station]")||$.querySelector("[data-station]");return t.indexOf(X)};for(let P of Ds('a[href^="#"]'))P.hasAttribute("data-launch")||P.addEventListener("click",$=>{let X=P.getAttribute("href").slice(1),lt=X==="main"||X==="top"?0:z(X);if(lt<0)return;$.preventDefault(),F(v.anchors[lt],{duration:1.8}),history.replaceState(null,"","#"+X);let dt=t[lt].querySelector("h1, h2, h3");dt&&(dt.setAttribute("tabindex","-1"),dt.focus({preventScroll:!0}))});t.forEach((P,$)=>P.addEventListener("focusin",()=>{Math.abs(v.floatAt(L())-$)>.2&&F(v.anchors[$],{duration:1.1})}));let V=Tn("[data-header]"),Q=t.map(P=>P.querySelector(".placard")),q=t.map(P=>P.dataset.side||"hero"),nt=Q.map(()=>0),et=Q.map(()=>0),Et=Tn(".dmd-strip"),At=Et&&Et.parentElement,se=Et&&Et.nextElementSibling,Yt=0,at=0,G=!1;function j(P=!1){let $=innerWidth,X=innerHeight,lt=!P&&G&&$===Yt&&Math.abs(X-at)<150;if(Yt=$,at=X,h.resize(Yt,at),lt)return;v.setView(Yt,at,V?V.offsetHeight:64);let dt=v.view.layout;if(G=dt!=="wide",Dn.classList.toggle("tall",dt==="tall"),Dn.classList.toggle("side",dt==="side"),Dn.classList.toggle("panel",G),Dn.style.setProperty("--panel-top",v.view.panelTop+"px"),Dn.style.setProperty("--panel-left",v.view.panelLeft+"px"),Et&&Q[0]&&(G?Q[0].append(Et):At.insertBefore(Et,se)),!G){t.forEach((ft,Ft)=>{ft.style.height="",Q[Ft]&&ft.style.setProperty("--ph",Q[Ft].offsetHeight+"px")}),v.measure(t,at);return}let st=t.map((ft,Ft)=>{let qt=Q[Ft];if(!qt)return at*.45;qt.style.setProperty("--scroll","0px"),et[Ft]=0;let Ge=qt.scrollHeight-qt.clientHeight;return nt[Ft]=Ge>2?Math.ceil(Ge+16):0,nt[Ft]+at*.45*(+ft.dataset.hold||1)}),wt=at*.8;t.forEach((ft,Ft)=>{ft.style.height=`${Math.round(st[Ft]+(Ft<t.length-1?wt:at*.25))}px`}),v.setStops(t,st)}j();let xt=0;addEventListener("resize",()=>{clearTimeout(xt),xt=setTimeout(j,120)}),document.fonts.ready.then(()=>j(!0));let It=new xa,Tt=new ot(9,9),Gt=null,ne=!1,it=Tn("[data-cursor-label]"),ct=P=>P.closest("a, button, input, label, .placard, [data-glass], .site-header, .dmd-strip, .site-footer"),ut=!1,mt=0;addEventListener("pointermove",P=>{ut=!0,Tt.set(P.clientX/Yt*2-1,-(P.clientY/at)*2+1),Vp&&v.pointer(Tt.x,Tt.y),it&&(it.style.transform=`translate(${P.clientX}px, ${P.clientY}px) translate(-50%, -50%) scale(${Gt?1:0})`),ne=!!ct(P.target)},{passive:!0});function yt(){if(ne||Math.abs(Tt.x)>1)return null;It.setFromCamera(Tt,h.camera);let P=It.intersectObjects(f.interactive,!1).find($=>$.object.visible&&(!$.object.parent||$.object.parent.visible!==!1));return P&&P.object.userData.action||null}addEventListener("click",P=>{if(ct(P.target))return;let $=yt();if(!$)return;let X=qu[$];if(X&&X.href){window.pixelsTo?window.pixelsTo(X.href,{x:P.clientX,y:P.clientY}):location.href=X.href;return}$.startsWith("pop-")?p.firePop(+$.slice(4)):$==="portrait"?[0,1,2].forEach((lt,dt)=>setTimeout(()=>p.firePop(lt),dt*140)):$.startsWith("target-")?p.hitTarget(+$.slice(7)):$.startsWith("sling-")?p.kickSling($.slice(6)):$==="flip-left"||$==="flip-right"?Vt($.slice(5)):$==="plunger"?kt():$==="dmd"&&c.next()}),addEventListener("keydown",P=>{P.repeat||P.target.closest&&P.target.closest("input, textarea")||(P.code==="ShiftLeft"&&Vt("left",!0),P.code==="ShiftRight"&&Vt("right",!0))}),addEventListener("keyup",P=>{P.code==="ShiftLeft"&&p.hold("left",!1),P.code==="ShiftRight"&&p.hold("right",!1)});function Vt(P,$=!1){$?p.hold(P,!0):p.flip(P)}function kt(){p.pull(),setTimeout(()=>{p.release(),F(0,{duration:2.8})},xn?0:520)}for(let P of Ds("[data-launch]"))P.addEventListener("click",$=>{$.preventDefault(),kt()});for(let P of Ds('.station-hero a[href="#work"]'))P.addEventListener("click",()=>p.pressStart());for(let P of Ds("[data-flip]"))P.addEventListener("pointerenter",()=>p.flip(P.dataset.flip)),P.addEventListener("focus",()=>p.flip(P.dataset.flip));let Xt=Tn("[data-dmd-pause]"),$t=Tn("[data-dmd-next]"),B=xn;Xt&&(xn&&(Xt.hidden=!0),Xt.addEventListener("click",()=>{B=!B,Xt.setAttribute("aria-pressed",String(B)),Xt.textContent=B?"Play":"Pause",B?c.stop():c.start()})),$t&&$t.addEventListener("click",()=>{c.next(),(B||xn)&&c.still()});let ue=Tn("[data-shade]"),Qt={l:-1,r:-1,b:-1},I=Q.map(()=>-1),S=Q.map(()=>0),H=Tn("[data-lens]"),W=0,K=Tn(".site-footer");function gt(P,$){let X=1;G&&K&&P>Q.length-1.6&&(X=Ni((K.getBoundingClientRect().top-at*.55)/(at*.35))),Q.forEach((ft,Ft)=>{let qt=Ni(1-Math.abs(P-Ft)*2.4);if(xn&&(qt=Math.abs(P-Ft)<.5?1:0),Ft===Q.length-1&&(qt*=X),S[Ft]=qt,!!ft){if(G){let Ge=nt[Ft]?Math.round(-nt[Ft]*v.holdProgress(Ft,$)*2)/2:0;Ge!==et[Ft]&&(et[Ft]=Ge,ft.style.setProperty("--scroll",Ge+"px"))}Math.abs(qt-I[Ft])<.003||(I[Ft]=qt,ft.style.opacity=qt.toFixed(3),ft.style.transform=`translate3d(0, ${((1-qt)*22).toFixed(1)}px, 0)`,ft.classList.toggle("is-here",qt>.55))}});let lt=0;S.forEach((ft,Ft)=>{Ft>0&&ft>S[lt]&&(lt=Ft)});let dt=lt>0?S[lt]:0;if(H&&!G&&(dt>.01||W>.01)){if(dt>.01){let ft=Q[lt].getBoundingClientRect(),Ft=90,qt=80;H.style.transform=`translate(${(ft.left-Ft).toFixed(0)}px, ${(ft.top-qt).toFixed(0)}px)`,H.style.width=`${(ft.width+Ft*2).toFixed(0)}px`,H.style.height=`${(ft.height+qt*2).toFixed(0)}px`}H.style.opacity=dt.toFixed(3),W=dt}let st=ft=>Math.max(0,...S.map((Ft,qt)=>q[qt]===ft?Ft:0)),wt=G?{l:0,r:0,b:0}:{l:st("left"),r:st("right"),b:0};for(let ft of["l","r","b"])Math.abs(wt[ft]-Qt[ft])<.004||(Qt[ft]=wt[ft],ue.style.setProperty("--"+ft,wt[ft].toFixed(3)))}let Mt=Ds("[data-skill]"),tt=Ds("[data-rung]"),rt="";function bt(P){let $=p.skillsLit.join("")+"|"+(P==="experience"?p.rung:-1)+"|"+E;if($===rt)return;rt=$,Mt.forEach((st,wt)=>st.classList.toggle("lit",p.skillsLit[wt]>.5)),tt.forEach((st,wt)=>st.classList.toggle("lit",P==="experience"&&wt<=p.rung));let X=p.skillsLit.filter(st=>st>.5).length,lt=P!=="skills"?-1:xn?X>0&&X<Mt.length?p.skillsLit.lastIndexOf(1):-1:E,dt=P==="experience"?p.rung:-1;for(let[st,wt]of[[Mt,lt],[tt,dt]])st.forEach((ft,Ft)=>ft.classList.toggle("current",Ft===wt)),st[0]&&st[0].parentElement.classList.toggle("has-current",wt>=0)}let Ut={blend:xn?1:0};function St(){if(Dn.classList.remove("booting"),Dn.classList.add("machine-ready"),xn||!window.gsap){p.power=1,Ut.blend=1,c.boot();return}window.gsap.timeline().to(p,{power:.75,duration:.08,ease:"none"},.35).to(p,{power:.08,duration:.07,ease:"none"},.45).to(p,{power:.9,duration:.06,ease:"none"},.6).to(p,{power:.3,duration:.05,ease:"none"},.68).to(p,{power:1,duration:.5,ease:"power2.out"},.78).call(()=>c.boot(),null,.85).to(Ut,{blend:1,duration:2.6,ease:"power3.inOut"},.2)}let vt=!0,Lt=performance.now();document.addEventListener("visibilitychange",()=>{vt=!document.hidden,vt&&(Lt=performance.now(),requestAnimationFrame(Zt)),document.hidden?c.stop():B||c.start()}),addEventListener("pixels:leave",()=>setTimeout(()=>{vt=!1,c.stop()},320)),addEventListener("pixels:reset",()=>{vt||document.hidden||(vt=!0,Lt=performance.now(),requestAnimationFrame(Zt),B||c.start())});let zt=null;function Zt(P){if(!vt)return;let $=Math.min(.5,Math.max(0,(P-Lt)/1e3)),X=Math.min(.05,$);Lt=P,O&&O.raf(P);let lt=L(),dt=v.floatAt(lt),st=Math.round(dt),wt=Math.abs(dt-st)<.36?w[st]:null;wt!==zt&&(zt=wt,p.setStation(wt||p.station),Dn.dataset.station=wt||"");let ft=w.indexOf("skills"),Ft=w.indexOf("experience");ft>=0&&p.setSkills(wt==="skills"?v.holdProgress(ft,lt):dt>ft?1:0),Ft>=0&&p.setTimeline(v.holdProgress(Ft,lt));let qt=v.at(xn?st:dt);if(E=-1,ft>=0&&!xn&&Math.abs(dt-ft)<.001){let{k:ke,zoom:jn,cross:Ja}=xy(v.holdProgress(ft,lt));if(jn>.001){let as=Math.floor(ke),Pr=Math.min(x.length-1,as+1),vi=v.blend(v.resolve(x[as]),v.resolve(x[Pr]),ke-as,0),Ir=Math.abs(Us.inserts[Pr][0]-Us.inserts[as][0])/340;qt=v.blend(qt,vi,jn*(1-.6*Ja*Ir),0),jn>.6&&Ja<.5&&(E=Math.round(ke))}}Ut.blend<1&&(qt=v.blend(v.resolve(M),qt,Ut.blend,0)),v.apply(qt,X,{instant:xn,damping:6.5});let Ge=st>0?Ni(1-Math.abs(dt-st)*2.4):0;h.focusOn(v.current.target,v.current.d,Ge*Ut.blend,v.current.sharp),p.skillFocus=E,p.update(X,{f:dt}),b.update(h.camera,Yt,at,S,v.view),gt(dt,lt),bt(wt);let En="art",Za=_.showing==="art"?.46:.54;for(let ke of Object.keys(Xp)){let jn=Math.abs(dt-w.indexOf(ke))-(ke===_.showing?.06:0);w.includes(ke)&&jn<Za&&(Za=jn,En=ke)}if(_.show(En,xn),_.update($),C){let ke=D(lt);C.update(ke,h.camera,Yt,at,v.view.layout==="tall"?"tall":Wp.about.side),p.exploded=ke}let $a=lt>40;if($a!==Dn.classList.contains("scrolled")&&Dn.classList.toggle("scrolled",$a),Vp&&(ut||++mt%6===0)){ut=!1;let ke=yt();ke!==Gt&&(Gt=ke,document.body.style.cursor=ke?"pointer":"",it&&(it.textContent=ke&&qu[ke]?qu[ke].label:""))}h.render(),h.govern(P),requestAnimationFrame(Zt)}v.apply(v.at(0),0,{instant:!0}),await s("Warming up the lamps");try{await h.renderer.compileAsync(h.scene,h.camera)}catch{}h.render(),performance.mark("machine:first-frame"),n&&(n.textContent="Powering on"),requestAnimationFrame(P=>{Lt=P,Zt(P),St()}),window.__machine={stage:h,h:f,show:p,director:v,dmd:c,lenis:O,scrollTo:F,intro:Ut,lcd:_,exploded:C}}_y().catch(i=>{console.error(i),Dn.classList.remove("machine","booting","tall","side","panel"),Dn.classList.add("machine-failed"),window.dispatchEvent(new Event("machine:failed"))});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
