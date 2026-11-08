var $p=Object.defineProperty;var Jp=(i,t)=>{for(var e in t)$p(i,e,{get:t[e],enumerable:!0})};var Pd=0,xh=1,Id=2;var ms=1,Ld=2,fr=3,Ji=0,dn=1,fn=2,ze=0,pr=1,gs=2,_h=3,vh=4,rl=5;var Bn=100,Dd=101,Ud=102,Nd=103,Fd=104,xs=200,Od=201,Bd=202,kd=203,yh=204,Mh=205,xa=206,zd=207,_a=208,Hd=209,Gd=210,Vd=211,Wd=212,Xd=213,qd=214,To=0,Eo=1,wo=2,Ks=3,Ao=4,Ro=5,Co=6,Po=7,Sh=0,Yd=1,Zd=2,qn=0,bh=1,Th=2,Eh=3,wh=4,va=5,Ah=6,Rh=7;var Ch=300,Ki=301,_s=302,al=303,ol=304,ya=306,yn=1e3,ti=1001,Io=1002,Le=1003,$d=1004;var Ma=1005;var Qe=1006,ll=1007;var ji=1008;var je=1009,Ph=1010,Ih=1011,mr=1012,cl=1013,Yn=1014,Zn=1015,Oe=1016,hl=1017,ul=1018,Qi=1020,Lh=35902,Dh=35899,Uh=1021,Nh=1022,Mn=1023,ni=1026,ci=1027,Fh=1028,dl=1029,ts=1030,fl=1031;var pl=1033,Sa=33776,ba=33777,Ta=33778,Ea=33779,ml=35840,gl=35841,xl=35842,_l=35843,vl=36196,yl=37492,Ml=37496,Sl=37488,bl=37489,wa=37490,Tl=37491,El=37808,wl=37809,Al=37810,Rl=37811,Cl=37812,Pl=37813,Il=37814,Ll=37815,Dl=37816,Ul=37817,Nl=37818,Fl=37819,Ol=37820,Bl=37821,kl=36492,zl=36494,Hl=36495,Gl=36283,Vl=36284,Aa=36285,Wl=36286;var zr=2300,Lo=2301,So=2302,sh=2303,rh=2400,ah=2401,oh=2402;var Jd=3200,Oh=3201;var Ra=0,Kd=1,Ai="",Xe="srgb",Hr="srgb-linear",Gr="linear",ye="srgb";var bo=7680;var jd=519,Qd=512,tf=513,ef=514,Xl=515,nf=516,sf=517,ql=518,rf=519,af=35044;var Bh="300 es",Xn=2e3,js=2001;function Kp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function jp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function of(){let i=Vr("canvas");return i.style.display="block",i}var Qu={},Qs=null;function kh(...i){let t="THREE."+i.shift();Qs?Qs("log",t,...i):console.log(t,...i)}function lf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Zt(...i){i=lf(i);let t="THREE."+i.shift();if(Qs)Qs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Jt(...i){i=lf(i);let t="THREE."+i.shift();if(Qs)Qs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function us(...i){let t=i.join(" ");t in Qu||(Qu[t]=!0,Zt(...i))}function cf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var hf={[To]:Eo,[wo]:Co,[Ao]:Po,[Ks]:Ro,[Eo]:To,[Co]:wo,[Po]:Ao,[Ro]:Ks},ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ic=Math.PI/180,Wr=180/Math.PI;function gr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function se(i,t,e){return Math.max(t,Math.min(e,i))}function Qp(i,t){return(i%t+t)%t}function Lc(i,t,e){return(1-e)*i+e*t}function Ir(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Xh=class Xh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xh.prototype.isVector2=!0;var ot=Xh,si=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(u!==y||l!==d||c!==f||h!==g){let p=l*d+c*f+h*g+u*y;p<0&&(d=-d,f=-f,g=-g,y=-y,p=-p);let m=1-o;if(p<.9995){let S=Math.acos(p),w=Math.sin(S);m=Math.sin(m*S)/w,o=Math.sin(o*S)/w,l=l*m+d*o,c=c*m+f*o,h=h*m+g*o,u=u*m+y*o}else{l=l*m+d*o,c=c*m+f*o,h=h*m+g*o,u=u*m+y*o;let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},qh=class qh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(td.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(td.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dc.copy(this).projectOnVector(t),this.sub(Dc)}reflect(t){return this.sub(Dc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qh.prototype.isVector3=!0;var U=qh,Dc=new U,td=new si,Yh=class Yh{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],y=s[0],p=s[3],m=s[6],S=s[1],w=s[4],v=s[7],M=s[2],x=s[5],E=s[8];return r[0]=a*y+o*S+l*M,r[3]=a*p+o*w+l*x,r[6]=a*m+o*v+l*E,r[1]=c*y+h*S+u*M,r[4]=c*p+h*w+u*x,r[7]=c*m+h*v+u*E,r[2]=d*y+f*S+g*M,r[5]=d*p+f*w+g*x,r[8]=d*m+f*v+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=d*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Uc.makeScale(t,e)),this}rotate(t){return us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Uc.makeRotation(-t)),this}translate(t,e){return us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Uc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Yh.prototype.isMatrix3=!0;var jt=Yh,Uc=new jt,ed=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nd=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tm(){let i={enabled:!0,workingColorSpace:Hr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ye&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ye&&(s.r=Js(s.r),s.g=Js(s.g),s.b=Js(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ai?Gr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return us("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return us("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hr]:{primaries:t,whitePoint:n,transfer:Gr,toXYZ:ed,fromXYZ:nd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:ed,fromXYZ:nd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),i}var he=tm();function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Os,Do=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Os===void 0&&(Os=Vr("canvas")),Os.width=t.width,Os.height=t.height;let s=Os.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Os}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Vr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=bi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bi(e[n]/255)*255):e[n]=bi(e[n]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},em=0,tr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=gr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Nc(s[a].image)):r.push(Nc(s[a]))}else r=Nc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Do.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}var nm=0,Fc=new U,cn=class i extends ii{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ti,s=ti,r=Qe,a=ji,o=Mn,l=je,c=i.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=gr(),this.name="",this.source=new tr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fc).x}get height(){return this.source.getSize(Fc).y}get depth(){return this.source.getSize(Fc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yn:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case Io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yn:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case Io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Ch;cn.DEFAULT_ANISOTROPY=1;var Zh=class Zh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,v=(f+1)/2,M=(m+1)/2,x=(h+d)/4,E=(u+y)/4,_=(g+p)/4;return w>v&&w>M?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=x/n,r=E/n):v>M?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=x/s,r=_/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=E/r,s=_/r),this.set(n,s,r,e),this}let S=Math.sqrt((p-g)*(p-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(u-y)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zh.prototype.isVector4=!0;var De=Zh,Uo=class extends ii{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new cn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new tr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ne=class extends Uo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Xr=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var No=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var sl=class sl{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,y,p)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Bs.setFromMatrixColumn(t,0).length(),r=1/Bs.setFromMatrixColumn(t,1).length(),a=1/Bs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-y*c,e[9]=-o*l,e[2]=y-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,y=c*u;e[0]=d+y*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=y+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,y=c*u;e[0]=d-y*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=y-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-y*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(im,t,sm)}lookAt(t,e,n){let s=this.elements;return En.subVectors(t,e),En.lengthSq()===0&&(En.z=1),En.normalize(),ki.crossVectors(n,En),ki.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),ki.crossVectors(n,En)),ki.normalize(),ja.crossVectors(En,ki),s[0]=ki.x,s[4]=ja.x,s[8]=En.x,s[1]=ki.y,s[5]=ja.y,s[9]=En.y,s[2]=ki.z,s[6]=ja.z,s[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],y=n[6],p=n[10],m=n[14],S=n[3],w=n[7],v=n[11],M=n[15],x=s[0],E=s[4],_=s[8],T=s[12],A=s[1],C=s[5],L=s[9],O=s[13],I=s[2],F=s[6],k=s[10],G=s[14],st=s[3],W=s[7],et=s[11],nt=s[15];return r[0]=a*x+o*A+l*I+c*st,r[4]=a*E+o*C+l*F+c*W,r[8]=a*_+o*L+l*k+c*et,r[12]=a*T+o*O+l*G+c*nt,r[1]=h*x+u*A+d*I+f*st,r[5]=h*E+u*C+d*F+f*W,r[9]=h*_+u*L+d*k+f*et,r[13]=h*T+u*O+d*G+f*nt,r[2]=g*x+y*A+p*I+m*st,r[6]=g*E+y*C+p*F+m*W,r[10]=g*_+y*L+p*k+m*et,r[14]=g*T+y*O+p*G+m*nt,r[3]=S*x+w*A+v*I+M*st,r[7]=S*E+w*C+v*F+M*W,r[11]=S*_+w*L+v*k+M*et,r[15]=S*T+w*O+v*G+M*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],y=t[7],p=t[11],m=t[15],S=l*f-c*d,w=o*f-c*u,v=o*d-l*u,M=a*f-c*h,x=a*d-l*h,E=a*u-o*h;return e*(y*S-p*w+m*v)-n*(g*S-p*M+m*x)+s*(g*w-y*M+m*E)-r*(g*v-y*x+p*E)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],y=t[13],p=t[14],m=t[15],S=e*o-n*a,w=e*l-s*a,v=e*c-r*a,M=n*l-s*o,x=n*c-r*o,E=s*c-r*l,_=h*y-u*g,T=h*p-d*g,A=h*m-f*g,C=u*p-d*y,L=u*m-f*y,O=d*m-f*p,I=S*O-w*L+v*C+M*A-x*T+E*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/I;return t[0]=(o*O-l*L+c*C)*F,t[1]=(s*L-n*O-r*C)*F,t[2]=(y*E-p*x+m*M)*F,t[3]=(d*x-u*E-f*M)*F,t[4]=(l*A-a*O-c*T)*F,t[5]=(e*O-s*A+r*T)*F,t[6]=(p*v-g*E-m*w)*F,t[7]=(h*E-d*v+f*w)*F,t[8]=(a*L-o*A+c*_)*F,t[9]=(n*A-e*L-r*_)*F,t[10]=(g*x-y*v+m*S)*F,t[11]=(u*v-h*x-f*S)*F,t[12]=(o*T-a*C-l*_)*F,t[13]=(e*C-n*T+s*_)*F,t[14]=(y*w-g*M-p*S)*F,t[15]=(h*M-u*w+d*S)*F,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,y=a*h,p=a*u,m=o*u,S=l*c,w=l*h,v=l*u,M=n.x,x=n.y,E=n.z;return s[0]=(1-(y+m))*M,s[1]=(f+v)*M,s[2]=(g-w)*M,s[3]=0,s[4]=(f-v)*x,s[5]=(1-(d+m))*x,s[6]=(p+S)*x,s[7]=0,s[8]=(g+w)*E,s[9]=(p-S)*E,s[10]=(1-(d+y))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Bs.set(s[0],s[1],s[2]).length(),o=Bs.set(s[4],s[5],s[6]).length(),l=Bs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Hn.copy(this);let c=1/a,h=1/o,u=1/l;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=u,Hn.elements[9]*=u,Hn.elements[10]*=u,e.setFromRotationMatrix(Hn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Xn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Xn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===js)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Xn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Xn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===js)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};sl.prototype.isMatrix4=!0;var le=sl,Bs=new U,Hn=new le,im=new U(0,0,0),sm=new U(1,1,1),ki=new U,ja=new U,En=new U,id=new le,sd=new si,Ti=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return id.makeRotationFromQuaternion(t),this.setFromRotationMatrix(id,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sd.setFromEuler(this),this.setFromQuaternion(sd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ti.DEFAULT_ORDER="XYZ";var er=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},rm=0,rd=new U,ks=new si,_i=new le,Qa=new U,Lr=new U,am=new U,om=new si,ad=new U(1,0,0),od=new U(0,1,0),ld=new U(0,0,1),cd={type:"added"},lm={type:"removed"},zs={type:"childadded",child:null},Oc={type:"childremoved",child:null},We=class i extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new Ti,n=new si,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new jt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(ad,t)}rotateY(t){return this.rotateOnAxis(od,t)}rotateZ(t){return this.rotateOnAxis(ld,t)}translateOnAxis(t,e){return rd.copy(t).applyQuaternion(this.quaternion),this.position.add(rd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ad,t)}translateY(t){return this.translateOnAxis(od,t)}translateZ(t){return this.translateOnAxis(ld,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qa.copy(t):Qa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Lr,Qa,this.up):_i.lookAt(Qa,Lr,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(_i),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cd),zs.child=t,this.dispatchEvent(zs),zs.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lm),Oc.child=t,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_i.multiply(t.parent.matrixWorld)),t.applyMatrix4(_i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cd),zs.child=t,this.dispatchEvent(zs),zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,t,am),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,om,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};We.DEFAULT_UP=new U(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var de=class extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}},cm={type:"move"},nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new de,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new de,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new de,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,n),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new de;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},uf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},to={h:0,s:0,l:0};function Bc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=Qp(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Bc(a,r,t+1/3),this.g=Bc(a,r,t),this.b=Bc(a,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=Xe){function n(r){r!==void 0&&parseFloat(r)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){let n=uf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=Js(t.r),this.g=Js(t.g),this.b=Js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return he.workingToColorSpace(rn.copy(this),t),Math.round(se(rn.r*255,0,255))*65536+Math.round(se(rn.g*255,0,255))*256+Math.round(se(rn.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(rn.copy(this),e);let n=rn.r,s=rn.g,r=rn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=Xe){he.workingToColorSpace(rn.copy(this),t);let e=rn.r,n=rn.g,s=rn.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(zi),this.setHSL(zi.h+t,zi.s+e,zi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zi),t.getHSL(to);let n=Lc(zi.h,to.h,e),s=Lc(zi.s,to.s,e),r=Lc(zi.l,to.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Wt;Wt.NAMES=uf;var qr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Wt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ir=class extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Gn=new U,vi=new U,kc=new U,yi=new U,Hs=new U,Gs=new U,hd=new U,zc=new U,Hc=new U,Gc=new U,Vc=new De,Wc=new De,Xc=new De,Wi=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Gn.subVectors(t,e),s.cross(Gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Gn.subVectors(s,e),vi.subVectors(n,e),kc.subVectors(t,e);let a=Gn.dot(Gn),o=Gn.dot(vi),l=Gn.dot(kc),c=vi.dot(vi),h=vi.dot(kc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yi.x),l.addScaledVector(a,yi.y),l.addScaledVector(o,yi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Vc.setScalar(0),Wc.setScalar(0),Xc.setScalar(0),Vc.fromBufferAttribute(t,e),Wc.fromBufferAttribute(t,n),Xc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Vc,r.x),a.addScaledVector(Wc,r.y),a.addScaledVector(Xc,r.z),a}static isFrontFacing(t,e,n,s){return Gn.subVectors(n,e),vi.subVectors(t,e),Gn.cross(vi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Gn.cross(vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Hs.subVectors(s,n),Gs.subVectors(r,n),zc.subVectors(t,n);let l=Hs.dot(zc),c=Gs.dot(zc);if(l<=0&&c<=0)return e.copy(n);Hc.subVectors(t,s);let h=Hs.dot(Hc),u=Gs.dot(Hc);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Hs,a);Gc.subVectors(t,r);let f=Hs.dot(Gc),g=Gs.dot(Gc);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Gs,o);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return hd.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(hd,o);let m=1/(p+y+d);return a=y*m,o=d*m,e.copy(n).addScaledVector(Hs,a).addScaledVector(Gs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Fn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Vn):Vn.fromBufferAttribute(r,a),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),eo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),eo.copy(n.boundingBox)),eo.applyMatrix4(t.matrixWorld),this.union(eo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Dr),no.subVectors(this.max,Dr),Vs.subVectors(t.a,Dr),Ws.subVectors(t.b,Dr),Xs.subVectors(t.c,Dr),Hi.subVectors(Ws,Vs),Gi.subVectors(Xs,Ws),os.subVectors(Vs,Xs);let e=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-os.z,os.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,os.z,0,-os.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-os.y,os.x,0];return!qc(e,Vs,Ws,Xs,no)||(e=[1,0,0,0,1,0,0,0,1],!qc(e,Vs,Ws,Xs,no))?!1:(io.crossVectors(Hi,Gi),e=[io.x,io.y,io.z],qc(e,Vs,Ws,Xs,no))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Mi=[new U,new U,new U,new U,new U,new U,new U,new U],Vn=new U,eo=new Fn,Vs=new U,Ws=new U,Xs=new U,Hi=new U,Gi=new U,os=new U,Dr=new U,no=new U,io=new U,ls=new U;function qc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ls.fromArray(i,r);let o=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),l=t.dot(ls),c=e.dot(ls),h=n.dot(ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ve=new U,so=new ot,hm=0,vn=class extends ii{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=af,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)so.fromBufferAttribute(this,e),so.applyMatrix3(t),this.setXY(e,so.x,so.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ir(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_n(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ir(e,this.array)),e}setX(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ir(e,this.array)),e}setY(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ir(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ir(e,this.array)),e}setW(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array),s=_n(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array),s=_n(s,this.array),r=_n(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Yr=class extends vn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Zr=class extends vn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var te=class extends vn{constructor(t,e,n){super(new Float32Array(t),e,n)}},um=new Fn,Ur=new U,Yc=new U,ds=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):um.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ur.subVectors(t,this.center);let e=Ur.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ur,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ur.copy(t.center).add(Yc)),this.expandByPoint(Ur.copy(t.center).sub(Yc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},dm=0,Nn=new le,Zc=new We,qs=new U,wn=new Fn,Nr=new Fn,$e=new U,Me=class i extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kp(t)?Zr:Yr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,e,n){return Nn.makeTranslation(t,e,n),this.applyMatrix4(Nn),this}scale(t,e,n){return Nn.makeScale(t,e,n),this.applyMatrix4(Nn),this}lookAt(t){return Zc.lookAt(t),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new te(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ds);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Nr.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(wn.min,Nr.min),wn.expandByPoint($e),$e.addVectors(wn.max,Nr.max),wn.expandByPoint($e)):(wn.expandByPoint(Nr.min),wn.expandByPoint(Nr.max))}wn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)$e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared($e));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)$e.fromBufferAttribute(o,c),l&&(qs.fromBufferAttribute(t,c),$e.add(qs)),s=Math.max(s,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new vn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new U,l[_]=new U;let c=new U,h=new U,u=new U,d=new ot,f=new ot,g=new ot,y=new U,p=new U;function m(_,T,A){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,A),d.fromBufferAttribute(r,_),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,A),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),o[_].add(y),o[T].add(y),o[A].add(y),l[_].add(p),l[T].add(p),l[A].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let _=0,T=S.length;_<T;++_){let A=S[_],C=A.start,L=A.count;for(let O=C,I=C+L;O<I;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let w=new U,v=new U,M=new U,x=new U;function E(_){M.fromBufferAttribute(s,_),x.copy(M);let T=o[_];w.copy(T),w.sub(M.multiplyScalar(M.dot(T))).normalize(),v.crossVectors(x,T);let C=v.dot(l[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,C)}for(let _=0,T=S.length;_<T;++_){let A=S[_],C=A.start,L=A.count;for(let O=C,I=C+L;O<I;O+=3)E(t.getX(O+0)),E(t.getX(O+1)),E(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),y=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new vn(d,h,u)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var $c=new U,fm=new U,pm=new jt,Wn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=$c.subVectors(n,e).cross(fm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta($c),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||pm.getNormalMatrix(t),s=this.coplanarPoint($c).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},mm=0,ri=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=gr(),this.name="",this.type="Material",this.blending=pr,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yh,this.blendDst=Mh,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bo,this.stencilZFail=bo,this.stencilZPass=bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Wt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Wn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ot().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Si=new U,Jc=new U,ro=new U,ao=new U,sr=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Si.copy(this.origin).addScaledVector(this.direction,e),Si.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Jc.copy(t).add(e).multiplyScalar(.5),ro.copy(e).sub(t).normalize(),ao.copy(this.origin).sub(Jc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ro),o=ao.dot(this.direction),l=-ao.dot(ro),c=ao.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Jc).addScaledVector(ro,d),f}intersectSphere(t,e){if(t.radius<0)return null;Si.subVectors(t.center,this.origin);let n=Si.dot(this.direction),s=Si.dot(Si)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Si)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,g=e.x-a.x,y=e.y-a.y,p=e.z-a.z,m=n.x-a.x,S=n.y-a.y,w=n.z-a.z,v=Math.abs(l),M=Math.abs(c),x=Math.abs(h),E,_,T,A,C,L,O,I,F,k,G,st;if(v>=M&&v>=x?(T=l,L=u,F=g,st=m,l>=0?(E=c,_=h,A=d,C=f,O=y,I=p,k=S,G=w):(E=h,_=c,A=f,C=d,O=p,I=y,k=w,G=S)):M>=x?(T=c,L=d,F=y,st=S,c>=0?(E=h,_=l,A=f,C=u,O=p,I=g,k=w,G=m):(E=l,_=h,A=u,C=f,O=g,I=p,k=m,G=w)):(T=h,L=f,F=p,st=w,h>=0?(E=l,_=c,A=u,C=d,O=g,I=y,k=m,G=S):(E=c,_=l,A=d,C=u,O=y,I=g,k=S,G=m)),T===0)return null;let W=E/T,et=_/T,nt=1/T,It=A-W*L,wt=C-et*L,Yt=O-W*F,qt=I-et*F,ht=k-W*st,V=G-et*st,Q=ht*qt-V*Yt,gt=It*V-wt*ht,Dt=Yt*wt-qt*It;if(s){if(Q<0||gt<0||Dt<0)return null}else if((Q<0||gt<0||Dt<0)&&(Q>0||gt>0||Dt>0))return null;let Rt=Q+gt+Dt;if(Rt===0)return null;let Gt=nt*(Q*L+gt*F+Dt*st);return(Rt>0?Gt<0:Gt>0)?null:this.at(Gt/Rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},hn=class extends ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=Sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ud=new le,cs=new sr,oo=new ds,dd=new U,lo=new U,co=new U,ho=new U,Kc=new U,uo=new U,fd=new U,fo=new U,_e=class extends We{constructor(t=new Me,e=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){uo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Kc.fromBufferAttribute(u,t),a?uo.addScaledVector(Kc,h):uo.addScaledVector(Kc.sub(e),h))}e.add(uo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(r),cs.copy(t.ray).recast(t.near),!(oo.containsPoint(cs.origin)===!1&&(cs.intersectSphere(oo,dd)===null||cs.origin.distanceToSquared(dd)>(t.far-t.near)**2))&&(ud.copy(r).invert(),cs.copy(t.ray).applyMatrix4(ud),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,cs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let p=d[g],m=a[p.materialIndex],S=Math.max(p.start,f.start),w=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let v=S,M=w;v<M;v+=3){let x=o.getX(v),E=o.getX(v+1),_=o.getX(v+2);s=po(this,m,t,n,c,h,u,x,E,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let S=o.getX(p),w=o.getX(p+1),v=o.getX(p+2);s=po(this,a,t,n,c,h,u,S,w,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let p=d[g],m=a[p.materialIndex],S=Math.max(p.start,f.start),w=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=S,M=w;v<M;v+=3){let x=v,E=v+1,_=v+2;s=po(this,m,t,n,c,h,u,x,E,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let S=p,w=p+1,v=p+2;s=po(this,a,t,n,c,h,u,S,w,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function gm(i,t,e,n,s,r,a,o){let l;if(t.side===dn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ji,o),l===null)return null;fo.copy(o),fo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(fo);return c<e.near||c>e.far?null:{distance:c,point:fo.clone(),object:i}}function po(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,lo),i.getVertexPosition(l,co),i.getVertexPosition(c,ho);let h=gm(i,t,e,n,lo,co,ho,fd);if(h){let u=new U;Wi.getBarycoord(fd,lo,co,ho,u),s&&(h.uv=Wi.getInterpolatedAttribute(s,o,l,c,u,new ot)),r&&(h.uv1=Wi.getInterpolatedAttribute(r,o,l,c,u,new ot)),a&&(h.normal=Wi.getInterpolatedAttribute(a,o,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new U,materialIndex:0};Wi.getNormal(lo,co,ho,d.normal),h.face=d,h.barycoord=u}return h}var Xi=class extends cn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Le,h=Le,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hs=new ds,xm=new ot(.5,.5),mo=new U,rr=class{constructor(t=new Wn,e=new Wn,n=new Wn,s=new Wn,r=new Wn,a=new Wn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],y=r[9],p=r[10],m=r[11],S=r[12],w=r[13],v=r[14],M=r[15];if(s[0].setComponents(c-a,f-h,m-g,M-S).normalize(),s[1].setComponents(c+a,f+h,m+g,M+S).normalize(),s[2].setComponents(c+o,f+u,m+y,M+w).normalize(),s[3].setComponents(c-o,f-u,m-y,M-w).normalize(),n)s[4].setComponents(l,d,p,v).normalize(),s[5].setComponents(c-l,f-d,m-p,M-v).normalize();else if(s[4].setComponents(c-l,f-d,m-p,M-v).normalize(),e===Xn)s[5].setComponents(c+l,f+d,m+p,M+v).normalize();else if(e===js)s[5].setComponents(l,d,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(t){hs.center.set(0,0,0);let e=xm.distanceTo(t.center);return hs.radius=.7071067811865476+e,hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(mo.x=s.normal.x>0?t.max.x:t.min.x,mo.y=s.normal.y>0?t.max.y:t.min.y,mo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(mo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var $r=class extends ri{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Fo=new U,Oo=new U,pd=new le,Fr=new sr,go=new ds,jc=new U,md=new U,Jr=class extends We{constructor(t=new Me,e=new $r){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Fo.fromBufferAttribute(e,s-1),Oo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Fo.distanceTo(Oo);t.setAttribute("lineDistance",new te(n,1))}else Zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(s),go.radius+=r,t.ray.intersectsSphere(go)===!1)return;pd.copy(s).invert(),Fr.copy(t.ray).applyMatrix4(pd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=f,p=g-1;y<p;y+=c){let m=h.getX(y),S=h.getX(y+1),w=xo(this,t,Fr,l,m,S,y);w&&e.push(w)}if(this.isLineLoop){let y=h.getX(g-1),p=h.getX(f),m=xo(this,t,Fr,l,y,p,g-1);m&&e.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let y=f,p=g-1;y<p;y+=c){let m=xo(this,t,Fr,l,y,y+1,y);m&&e.push(m)}if(this.isLineLoop){let y=xo(this,t,Fr,l,g-1,f,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function xo(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Fo.fromBufferAttribute(o,s),Oo.fromBufferAttribute(o,r),e.distanceSqToSegment(Fo,Oo,jc,md)>n)return;jc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(jc);if(!(c<t.near||c>t.far))return{distance:c,point:md.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Kr=class extends cn{constructor(t=[],e=Ki,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ei=class extends cn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ai=class extends cn{constructor(t,e,n=Yn,s,r,a,o=Le,l=Le,c,h=ni,u=1){if(h!==ni&&h!==ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new tr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Bo=class extends ai{constructor(t,e=Yn,n=Ki,s,r,a=Le,o=Le,l,c=ni){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},jr=class extends cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},fe=class i extends Me{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function g(y,p,m,S,w,v,M,x,E,_,T){let A=v/E,C=M/_,L=v/2,O=M/2,I=x/2,F=E+1,k=_+1,G=0,st=0,W=new U;for(let et=0;et<k;et++){let nt=et*C-O;for(let It=0;It<F;It++){let wt=It*A-L;W[y]=wt*S,W[p]=nt*w,W[m]=I,c.push(W.x,W.y,W.z),W[y]=0,W[p]=0,W[m]=x>0?1:-1,h.push(W.x,W.y,W.z),u.push(It/E),u.push(1-et/_),G+=1}}for(let et=0;et<_;et++)for(let nt=0;nt<E;nt++){let It=d+nt+F*et,wt=d+nt+F*(et+1),Yt=d+(nt+1)+F*(et+1),qt=d+(nt+1)+F*et;l.push(It,wt,qt),l.push(wt,Yt,qt),st+=6}o.addGroup(f,st,T),f+=st,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Qr=class i extends Me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new U,h=new ot;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(o,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Pe=class i extends Me{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,y=[],p=n/2,m=0;S(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(f,2));function S(){let v=new U,M=new U,x=0,E=(e-t)/n;for(let _=0;_<=r;_++){let T=[],A=_/r,C=A*(e-t)+t;for(let L=0;L<=s;L++){let O=L/s,I=O*l+o,F=Math.sin(I),k=Math.cos(I);M.x=C*F,M.y=-A*n+p,M.z=C*k,u.push(M.x,M.y,M.z),v.set(F,E,k).normalize(),d.push(v.x,v.y,v.z),f.push(O,1-A),T.push(g++)}y.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){let A=y[T][_],C=y[T+1][_],L=y[T+1][_+1],O=y[T][_+1];(t>0||T!==0)&&(h.push(A,C,O),x+=3),(e>0||T!==r-1)&&(h.push(C,L,O),x+=3)}c.addGroup(m,x,0),m+=x}function w(v){let M=g,x=new ot,E=new U,_=0,T=v===!0?t:e,A=v===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,p*A,0),d.push(0,A,0),f.push(.5,.5),g++;let C=g;for(let L=0;L<=s;L++){let I=L/s*l+o,F=Math.cos(I),k=Math.sin(I);E.x=T*k,E.y=p*A,E.z=T*F,u.push(E.x,E.y,E.z),d.push(0,A,0),x.x=F*.5+.5,x.y=k*.5*A+.5,f.push(x.x,x.y),g++}for(let L=0;L<s;L++){let O=M+L,I=C+L;v===!0?h.push(I,I+1,O):h.push(I+1,I,O),_+=3}c.addGroup(m,_,v===!0?1:2),m+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var An=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ot:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,s=[],r=[],a=[],o=new U,l=new le;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(se(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(se(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ar=class extends An{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ot){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ko=class extends ar{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function zh(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var gd=new U,xd=new U,Qc=new zh,th=new zh,eh=new zh,On=class extends An{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(xd.subVectors(s[0],s[1]).add(s[0]),c=xd);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(gd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=gd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),Qc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,p),th.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,p),eh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(Qc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),th.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),eh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Qc.calc(l),th.calc(l),eh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function _d(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function _m(i,t){let e=1-i;return e*e*t}function vm(i,t){return 2*(1-i)*i*t}function ym(i,t){return i*i*t}function Br(i,t,e,n){return _m(i,t)+vm(i,e)+ym(i,n)}function Mm(i,t){let e=1-i;return e*e*e*t}function Sm(i,t){let e=1-i;return 3*e*e*i*t}function bm(i,t){return 3*(1-i)*i*i*t}function Tm(i,t){return i*i*i*t}function kr(i,t,e,n,s){return Mm(i,t)+Sm(i,e)+bm(i,n)+Tm(i,s)}var ta=class extends An{constructor(t=new ot,e=new ot,n=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(kr(t,s.x,r.x,a.x,o.x),kr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},zo=class extends An{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(kr(t,s.x,r.x,a.x,o.x),kr(t,s.y,r.y,a.y,o.y),kr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ea=class extends An{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ho=class extends An{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},na=class extends An{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Br(t,s.x,r.x,a.x),Br(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ia=class extends An{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Br(t,s.x,r.x,a.x),Br(t,s.y,r.y,a.y),Br(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sa=class extends An{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(_d(o,l.x,c.x,h.x,u.x),_d(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ot().fromArray(s))}return this}},Go=Object.freeze({__proto__:null,ArcCurve:ko,CatmullRomCurve3:On,CubicBezierCurve:ta,CubicBezierCurve3:zo,EllipseCurve:ar,LineCurve:ea,LineCurve3:Ho,QuadraticBezierCurve:na,QuadraticBezierCurve3:ia,SplineCurve:sa}),Vo=class extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Go[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Go[s.type]().fromJSON(s))}return this}},oi=class extends Vo{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ea(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new na(this.currentPoint.clone(),new ot(t,e),new ot(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new ta(this.currentPoint.clone(),new ot(t,e),new ot(n,s),new ot(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new sa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new ar(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},un=class extends oi{constructor(t){super(t),this.uuid=gr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new oi().fromJSON(s))}return this}};function Em(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=df(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Pm(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,u=l;for(let d=e;d<s;d+=e){let f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return ra(r,a,e,o,l,c,0),a}function df(i,t,e,n,s){let r;if(s===Hm(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=vd(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=vd(a/n|0,i[a],i[a+1],r);return r&&or(r,r.next)&&(oa(r),r=r.next),r}function fs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(or(e,e.next)||Ue(e.prev,e,e.next)===0)){if(oa(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ra(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Nm(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Am(i,n,s,r):wm(i)){t.push(l.i,i.i,c.i),oa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Rm(fs(i),t),ra(i,t,e,n,s,r,2)):a===2&&Cm(i,t,e,n,s,r):ra(fs(i),t,e,n,s,r,1);break}}}function wm(i){let t=i.prev,e=i,n=i.next;if(Ue(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Or(s,o,r,l,a,c,g.x,g.y)&&Ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Am(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ue(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),y=Math.max(o,l,c),p=Math.max(h,u,d),m=lh(f,g,t,e,n),S=lh(y,p,t,e,n),w=i.prevZ,v=i.nextZ;for(;w&&w.z>=m&&v&&v.z<=S;){if(w.x>=f&&w.x<=y&&w.y>=g&&w.y<=p&&w!==s&&w!==a&&Or(o,h,l,u,c,d,w.x,w.y)&&Ue(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=f&&v.x<=y&&v.y>=g&&v.y<=p&&v!==s&&v!==a&&Or(o,h,l,u,c,d,v.x,v.y)&&Ue(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=m;){if(w.x>=f&&w.x<=y&&w.y>=g&&w.y<=p&&w!==s&&w!==a&&Or(o,h,l,u,c,d,w.x,w.y)&&Ue(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=S;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=p&&v!==s&&v!==a&&Or(o,h,l,u,c,d,v.x,v.y)&&Ue(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Rm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!or(n,s)&&pf(n,e,e.next,s)&&aa(n,s)&&aa(s,n)&&(t.push(n.i,e.i,s.i),oa(e),oa(e.next),e=i=s),e=e.next}while(e!==i);return fs(e)}function Cm(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Bm(a,o)){let l=mf(a,o);a=fs(a,a.next),l=fs(l,l.next),ra(a,t,e,n,s,r,0),ra(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Pm(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=df(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Om(c))}s.sort(Im);for(let r=0;r<s.length;r++)e=Lm(s[r],e);return e}function Im(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Lm(i,t){let e=Dm(i,t);if(!e)return t;let n=mf(e,i);return fs(n,n.next),fs(e,e.next)}function Dm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(or(i,e))return e;do{if(or(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&ff(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);aa(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Um(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Um(i,t){return Ue(i.prev,i,t.prev)<0&&Ue(t.next,i,i.next)<0}function Nm(i,t,e,n){let s=i;do s.z===0&&(s.z=lh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Fm(s)}function Fm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function lh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Om(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ff(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Or(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&ff(i,t,e,n,s,r,a,o)}function Bm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!km(i,t)&&(aa(i,t)&&aa(t,i)&&zm(i,t)&&(Ue(i.prev,i,t.prev)||Ue(i,t.prev,t))||or(i,t)&&Ue(i.prev,i,i.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function or(i,t){return i.x===t.x&&i.y===t.y}function pf(i,t,e,n){let s=vo(Ue(i,t,e)),r=vo(Ue(i,t,n)),a=vo(Ue(e,n,i)),o=vo(Ue(e,n,t));return!!(s!==r&&a!==o||s===0&&_o(i,e,t)||r===0&&_o(i,n,t)||a===0&&_o(e,i,n)||o===0&&_o(e,t,n))}function _o(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function vo(i){return i>0?1:i<0?-1:0}function km(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&pf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function aa(i,t){return Ue(i.prev,i,i.next)<0?Ue(i,t,i.next)>=0&&Ue(i,i.prev,t)>=0:Ue(i,t,i.prev)<0||Ue(i,i.next,t)<0}function zm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function mf(i,t){let e=ch(i.i,i.x,i.y),n=ch(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function vd(i,t,e,n){let s=ch(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function oa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ch(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hm(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var hh=class{static triangulate(t,e,n=2){return Em(t,e,n)}},ei=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];yd(t),Md(n,t);let a=t.length;e.forEach(yd);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Md(n,e[l]);let o=hh.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function yd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Md(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var li=class i extends Me{constructor(t=new un([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new te(s,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Gm,w,v=!1,M,x,E,_;if(m){w=m.getSpacedPoints(h),v=!0,d=!1;let it=m.isCatmullRomCurve3?m.closed:!1;M=m.computeFrenetFrames(h,it),x=new U,E=new U,_=new U}d||(p=0,f=0,g=0,y=0);let T=o.extractPoints(c),A=T.shape,C=T.holes;if(!ei.isClockWise(A)){A=A.reverse();for(let it=0,ct=C.length;it<ct;it++){let ft=C[it];ei.isClockWise(ft)&&(C[it]=ft.reverse())}}function O(it){let ft=10000000000000001e-36,pt=it[0];for(let Mt=1;Mt<=it.length;Mt++){let zt=Mt%it.length,Ht=it[zt],Vt=Ht.x-pt.x,$t=Ht.y-pt.y,B=Vt*Vt+$t*$t,ae=Math.max(Math.abs(Ht.x),Math.abs(Ht.y),Math.abs(pt.x),Math.abs(pt.y)),Kt=ft*ae*ae;if(B<=Kt){it.splice(zt,1),Mt--;continue}pt=Ht}}O(A),C.forEach(O);let I=C.length,F=A;for(let it=0;it<I;it++){let ct=C[it];A=A.concat(ct)}function k(it,ct,ft){return ct||Jt("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(ct,ft)}let G=A.length;function st(it,ct,ft){let pt,Mt,zt,Ht=it.x-ct.x,Vt=it.y-ct.y,$t=ft.x-it.x,B=ft.y-it.y,ae=Ht*Ht+Vt*Vt,Kt=Ht*B-Vt*$t;if(Math.abs(Kt)>Number.EPSILON){let P=Math.sqrt(ae),b=Math.sqrt($t*$t+B*B),H=ct.x-Vt/P,X=ct.y+Ht/P,j=ft.x-B/b,xt=ft.y+$t/b,St=((j-H)*B-(xt-X)*$t)/(Ht*B-Vt*$t);pt=H+Ht*St-it.x,Mt=X+Vt*St-it.y;let tt=pt*pt+Mt*Mt;if(tt<=2)return new ot(pt,Mt);zt=Math.sqrt(tt/2)}else{let P=!1;Ht>Number.EPSILON?$t>Number.EPSILON&&(P=!0):Ht<-Number.EPSILON?$t<-Number.EPSILON&&(P=!0):Math.sign(Vt)===Math.sign(B)&&(P=!0),P?(pt=-Vt,Mt=Ht,zt=Math.sqrt(ae)):(pt=Ht,Mt=Vt,zt=Math.sqrt(ae/2))}return new ot(pt/zt,Mt/zt)}let W=[];for(let it=0,ct=F.length,ft=ct-1,pt=it+1;it<ct;it++,ft++,pt++)ft===ct&&(ft=0),pt===ct&&(pt=0),W[it]=st(F[it],F[ft],F[pt]);let et=[],nt,It=W.concat();for(let it=0,ct=I;it<ct;it++){let ft=C[it];nt=[];for(let pt=0,Mt=ft.length,zt=Mt-1,Ht=pt+1;pt<Mt;pt++,zt++,Ht++)zt===Mt&&(zt=0),Ht===Mt&&(Ht=0),nt[pt]=st(ft[pt],ft[zt],ft[Ht]);et.push(nt),It=It.concat(nt)}let wt;if(p===0)wt=ei.triangulateShape(F,C);else{let it=[],ct=[];for(let ft=0;ft<p;ft++){let pt=ft/p,Mt=f*Math.cos(pt*Math.PI/2),zt=g*Math.sin(pt*Math.PI/2)+y;for(let Ht=0,Vt=F.length;Ht<Vt;Ht++){let $t=k(F[Ht],W[Ht],zt);gt($t.x,$t.y,-Mt),pt===0&&it.push($t)}for(let Ht=0,Vt=I;Ht<Vt;Ht++){let $t=C[Ht];nt=et[Ht];let B=[];for(let ae=0,Kt=$t.length;ae<Kt;ae++){let P=k($t[ae],nt[ae],zt);gt(P.x,P.y,-Mt),pt===0&&B.push(P)}pt===0&&ct.push(B)}}wt=ei.triangulateShape(it,ct)}let Yt=wt.length,qt=g+y;for(let it=0;it<G;it++){let ct=d?k(A[it],It[it],qt):A[it];v?(E.copy(M.normals[0]).multiplyScalar(ct.x),x.copy(M.binormals[0]).multiplyScalar(ct.y),_.copy(w[0]).add(E).add(x),gt(_.x,_.y,_.z)):gt(ct.x,ct.y,0)}for(let it=1;it<=h;it++)for(let ct=0;ct<G;ct++){let ft=d?k(A[ct],It[ct],qt):A[ct];v?(E.copy(M.normals[it]).multiplyScalar(ft.x),x.copy(M.binormals[it]).multiplyScalar(ft.y),_.copy(w[it]).add(E).add(x),gt(_.x,_.y,_.z)):gt(ft.x,ft.y,u/h*it)}for(let it=p-1;it>=0;it--){let ct=it/p,ft=f*Math.cos(ct*Math.PI/2),pt=g*Math.sin(ct*Math.PI/2)+y;for(let Mt=0,zt=F.length;Mt<zt;Mt++){let Ht=k(F[Mt],W[Mt],pt);gt(Ht.x,Ht.y,u+ft)}for(let Mt=0,zt=C.length;Mt<zt;Mt++){let Ht=C[Mt];nt=et[Mt];for(let Vt=0,$t=Ht.length;Vt<$t;Vt++){let B=k(Ht[Vt],nt[Vt],pt);v?gt(B.x,B.y+w[h-1].y,w[h-1].x+ft):gt(B.x,B.y,u+ft)}}}ht(),V();function ht(){let it=s.length/3;if(d){let ct=0,ft=G*ct;for(let pt=0;pt<Yt;pt++){let Mt=wt[pt];Dt(Mt[2]+ft,Mt[1]+ft,Mt[0]+ft)}ct=h+p*2,ft=G*ct;for(let pt=0;pt<Yt;pt++){let Mt=wt[pt];Dt(Mt[0]+ft,Mt[1]+ft,Mt[2]+ft)}}else{for(let ct=0;ct<Yt;ct++){let ft=wt[ct];Dt(ft[2],ft[1],ft[0])}for(let ct=0;ct<Yt;ct++){let ft=wt[ct];Dt(ft[0]+G*h,ft[1]+G*h,ft[2]+G*h)}}n.addGroup(it,s.length/3-it,0)}function V(){let it=s.length/3,ct=0;Q(F,ct),ct+=F.length;for(let ft=0,pt=C.length;ft<pt;ft++){let Mt=C[ft];Q(Mt,ct),ct+=Mt.length}n.addGroup(it,s.length/3-it,1)}function Q(it,ct){let ft=it.length;for(;--ft>=0;){let pt=ft,Mt=ft-1;Mt<0&&(Mt=it.length-1);for(let zt=0,Ht=h+p*2;zt<Ht;zt++){let Vt=G*zt,$t=G*(zt+1),B=ct+pt+Vt,ae=ct+Mt+Vt,Kt=ct+Mt+$t,P=ct+pt+$t;Rt(B,ae,Kt,P)}}}function gt(it,ct,ft){l.push(it),l.push(ct),l.push(ft)}function Dt(it,ct,ft){Gt(it),Gt(ct),Gt(ft);let pt=s.length/3,Mt=S.generateTopUV(n,s,pt-3,pt-2,pt-1);ee(Mt[0]),ee(Mt[1]),ee(Mt[2])}function Rt(it,ct,ft,pt){Gt(it),Gt(ct),Gt(pt),Gt(ct),Gt(ft),Gt(pt);let Mt=s.length/3,zt=S.generateSideWallUV(n,s,Mt-6,Mt-3,Mt-2,Mt-1);ee(zt[0]),ee(zt[1]),ee(zt[3]),ee(zt[1]),ee(zt[2]),ee(zt[3])}function Gt(it){s.push(l[it*3+0]),s.push(l[it*3+1]),s.push(l[it*3+2])}function ee(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Vm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Go[s.type]().fromJSON(s)),new i(n,t.options)}},Gm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ot(r,a),new ot(o,l),new ot(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],y=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ot(a,1-l),new ot(c,1-u),new ot(d,1-g),new ot(y,1-m)]:[new ot(o,1-l),new ot(h,1-u),new ot(f,1-g),new ot(p,1-m)]}};function Vm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var la=class i extends Me{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=se(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new U,d=new ot,f=new U,g=new U,y=new U,p=0,m=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:p=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,f.x=m*1,f.y=-p,f.z=m*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:p=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let S=0;S<=e;S++){let w=n+S*h*s,v=Math.sin(w),M=Math.cos(w);for(let x=0;x<=t.length-1;x++){u.x=t[x].x*v,u.y=t[x].y,u.z=t[x].x*M,a.push(u.x,u.y,u.z),d.x=S/e,d.y=x/(t.length-1),o.push(d.x,d.y);let E=l[3*x+0]*v,_=l[3*x+1],T=l[3*x+0]*M;c.push(E,_,T)}}for(let S=0;S<e;S++)for(let w=0;w<t.length-1;w++){let v=w+S*t.length,M=v,x=v+t.length,E=v+t.length+1,_=v+1;r.push(M,x,_),r.push(E,_,x)}this.setIndex(r),this.setAttribute("position",new te(a,3)),this.setAttribute("uv",new te(o,2)),this.setAttribute("normal",new te(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var tn=class i extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],y=[],p=[];for(let m=0;m<h;m++){let S=m*d-a;for(let w=0;w<c;w++){let v=w*u-r;g.push(v,-S,0),y.push(0,0,1),p.push(w/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){let w=S+c*m,v=S+c*(m+1),M=S+1+c*(m+1),x=S+1+c*m;f.push(w,v,x),f.push(v,M,x)}this.setIndex(f),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(y,3)),this.setAttribute("uv",new te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ps=class i extends Me{constructor(t=new un([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(r,3)),this.setAttribute("uv",new te(a,2));function c(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,g=d.holes;ei.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){let S=g[p];ei.isClockWise(S)===!0&&(g[p]=S.reverse())}let y=ei.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){let S=g[p];f=f.concat(S)}for(let p=0,m=f.length;p<m;p++){let S=f[p];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let p=0,m=y.length;p<m;p++){let S=y[p],w=S[0]+u,v=S[1]+u,M=S[2]+u;n.push(w,v,M),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Wm(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function Wm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var ca=class i extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new U,d=new U,f=[],g=[],y=[],p=[];for(let m=0;m<=n;m++){let S=[],w=m/n,v=a+w*o,M=t*Math.cos(v),x=Math.sqrt(t*t-M*M),E=0;m===0&&a===0?E=.5/e:m===n&&l===Math.PI&&(E=-.5/e);for(let _=0;_<=e;_++){let T=_/e,A=s+T*r;u.x=-x*Math.cos(A),u.y=M,u.z=x*Math.sin(A),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),p.push(T+E,1-w),S.push(c++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){let w=h[m][S+1],v=h[m][S],M=h[m+1][S],x=h[m+1][S+1];(m!==0||a>0)&&f.push(w,v,x),(m!==n-1||l<Math.PI)&&f.push(v,M,x)}this.setIndex(f),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(y,3)),this.setAttribute("uv",new te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var lr=class i extends Me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new U,f=new U,g=new U;for(let y=0;y<=n;y++){let p=a+y/n*o;for(let m=0;m<=s;m++){let S=m/s*r;f.x=(t+e*Math.cos(p))*Math.cos(S),f.y=(t+e*Math.cos(p))*Math.sin(S),f.z=e*Math.sin(p),c.push(f.x,f.y,f.z),d.x=t*Math.cos(S),d.y=t*Math.sin(S),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(m/s),u.push(y/n)}}for(let y=1;y<=n;y++)for(let p=1;p<=s;p++){let m=(s+1)*y+p-1,S=(s+1)*(y-1)+p-1,w=(s+1)*(y-1)+p,v=(s+1)*y+p;l.push(m,S,v),l.push(S,w,v)}this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var wi=class i extends Me{constructor(t=new ia(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,l=new U,c=new ot,h=new U,u=[],d=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(f,2));function y(){for(let w=0;w<e;w++)p(w);p(r===!1?e:0),S(),m()}function p(w){h=t.getPointAt(w/e,h);let v=a.normals[w],M=a.binormals[w];for(let x=0;x<=s;x++){let E=x/s*Math.PI*2,_=Math.sin(E),T=-Math.cos(E);l.x=T*v.x+_*M.x,l.y=T*v.y+_*M.y,l.z=T*v.z+_*M.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let w=1;w<=e;w++)for(let v=1;v<=s;v++){let M=(s+1)*(w-1)+(v-1),x=(s+1)*w+(v-1),E=(s+1)*w+v,_=(s+1)*(w-1)+v;g.push(M,x,_),g.push(x,E,_)}}function S(){for(let w=0;w<=e;w++)for(let v=0;v<=s;v++)c.x=w/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Go[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function vs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Sd(s))s.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Sd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function an(i){let t={};for(let e=0;e<i.length;e++){let n=vs(i[e]);for(let s in n)t[s]=n[s]}return t}function Sd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Xm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var pn={clone:vs,merge:an},qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ym=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Se=class extends ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qm,this.fragmentShader=Ym,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vs(t.uniforms),this.uniformsGroups=Xm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Wt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ot().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new De().fromArray(s.value);break;case"m3":this.uniforms[n].value=new jt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new le().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Wo=class extends Se{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ge=class extends ri{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ra,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ke=class extends ge{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return se(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Wt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Wt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Wt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var ha=class extends ri{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ra,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};var cr=class extends ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xo=class extends ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var ua=class extends $r{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function Ys(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function nh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var qi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},qo=class extends qi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rh,endingEnd:rh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ah:r=t,o=2*e-n;break;case oh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ah:a=t,l=2*n-e;break;case oh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),y=g*g,p=y*g,m=-d*p+2*d*y-d*g,S=(1+d)*p+(-1.5-2*d)*y+(-.5+d)*g+1,w=(-1-f)*p+(1.5+f)*y+.5*g,v=f*p-f*y;for(let M=0;M!==o;++M)r[M]=m*a[h+M]+S*a[c+M]+w*a[l+M]+v*a[u+M];return r}},Yo=class extends qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Zo=class extends qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},$o=class extends qi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-e)/(s-e),y=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*y+a[l+p]*g;return r}let d=o*2,f=t-1;for(let g=0;g!==o;++g){let y=a[c+g],p=a[l+g],m=f*d+g*2,S=u[m],w=u[m+1],v=t*d+g*2,M=h[v],x=h[v+1],E=$m(n,e,S,M,s);r[g]=gf(E,y,w,x,p)}return r}};function gf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Zm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function $m(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=gf(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Zm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Rn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ys(e,this.TimeBufferType),this.values=Ys(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ys(t.times,Array),values:Ys(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),nh(t.settings)&&(n.settings={inTangents:Ys(t.settings.inTangents,Array),outTangents:Ys(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Zo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new $o(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case zr:e=this.InterpolantFactoryMethodDiscrete;break;case Lo:e=this.InterpolantFactoryMethodLinear;break;case So:e=this.InterpolantFactoryMethodSmooth;break;case sh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zr;case this.InterpolantFactoryMethodLinear:return Lo;case this.InterpolantFactoryMethodSmooth:return So;case this.InterpolantFactoryMethodBezier:return sh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;nh(this.settings)&&(bd(this.settings.inTangents,t),bd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Jt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Jt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Jt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&jp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Jt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===So,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[d+g]||y!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,nh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function bd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Rn.prototype.ValueTypeName="";Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=Lo;var Yi=class extends Rn{constructor(t,e,n){super(t,e,n)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=zr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Jo=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}};Jo.prototype.ValueTypeName="color";var Ko=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}};Ko.prototype.ValueTypeName="number";var jo=class extends qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)si.slerpFlat(r,0,a,c-o,a,c,l);return r}},da=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new jo(this.times,this.values,this.getValueSize(),t)}};da.prototype.ValueTypeName="quaternion";da.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends Rn{constructor(t,e,n){super(t,e,n)}};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=zr;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Qo=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}};Qo.prototype.ValueTypeName="vector";var tl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xf=new tl,el=class{constructor(t){this.manager=t!==void 0?t:xf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};el.DEFAULT_MATERIAL_NAME="__DEFAULT";var hr=class extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var ih=new le,Td=new U,Ed=new U,ur=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=je,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rr,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Td.setFromMatrixPosition(t.matrixWorld),e.position.copy(Td),Ed.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ed),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ih.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ih,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===js||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(ih)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},yo=new U,Mo=new si,Qn=new U,fa=class extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(yo,Mo,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,Mo,Qn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(yo,Mo,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,Mo,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vi=new U,wd=new ot,Ad=new ot,Je=class extends fa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Wr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ic*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wr*2*Math.atan(Math.tan(Ic*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z)}getViewSize(t,e){return this.getViewBounds(t,wd,Ad),e.subVectors(Ad,wd)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ic*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},uh=class extends ur{constructor(){super(new Je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Wr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},dr=class extends hr{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new uh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},dh=class extends ur{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0}},pa=class extends hr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new dh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},$i=class extends fa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},fh=class extends ur{constructor(){super(new $i(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ma=class extends hr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new fh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Zs=-90,$s=1,nl=class extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(Zs,$s,t,e);s.layers=this.layers,this.add(s);let r=new Je(Zs,$s,t,e);r.layers=this.layers,this.add(r);let a=new Je(Zs,$s,t,e);a.layers=this.layers,this.add(a);let o=new Je(Zs,$s,t,e);o.layers=this.layers,this.add(o);let l=new Je(Zs,$s,t,e);l.layers=this.layers,this.add(l);let c=new Je(Zs,$s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},il=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Gh="\\[\\]\\.:\\/",Jm=new RegExp("["+Gh+"]","g"),Vh="[^"+Gh+"]",Km="[^"+Gh.replace("\\.","")+"]",jm=/((?:WC+[\/:])*)/.source.replace("WC",Vh),Qm=/(WCOD+)?/.source.replace("WCOD",Km),t0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vh),e0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vh),n0=new RegExp("^"+jm+Qm+t0+e0+"$"),i0=["material","materials","bones","map"],ph=class{constructor(t,e,n){let s=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Jm,"")}static parseTrackName(t){let e=n0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);i0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Jt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=ph;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vy=new Float32Array(1);var Rd=new le,ga=class{constructor(t,e,n=0,s=1/0){this.ray=new sr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Rd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rd),this}intersectObject(t,e=!0,n=[]){return mh(t,this,n,e),n.sort(Cd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)mh(t[s],this,n,e);return n.sort(Cd),n}};function Cd(i,t){return i.distance-t.distance}function mh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)mh(r[a],t,e,!0)}}var $h=class $h{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};$h.prototype.isMatrix2=!0;var gh=$h;function Wh(i,t,e,n){let s=s0(n);switch(e){case Uh:return i*t;case Fh:return i*t/s.components*s.byteLength;case dl:return i*t/s.components*s.byteLength;case ts:return i*t*2/s.components*s.byteLength;case fl:return i*t*2/s.components*s.byteLength;case Nh:return i*t*3/s.components*s.byteLength;case Mn:return i*t*4/s.components*s.byteLength;case pl:return i*t*4/s.components*s.byteLength;case Sa:case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ta:case Ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gl:case _l:return Math.max(i,16)*Math.max(t,8)/4;case ml:case xl:return Math.max(i,8)*Math.max(t,8)/2;case vl:case yl:case Sl:case bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ml:case wa:case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case El:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Al:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Il:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ol:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Bl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case kl:case zl:case Hl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Gl:case Vl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Aa:case Wl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function s0(i){switch(i){case je:case Ph:return{byteLength:1,components:1};case mr:case Ih:case Oe:return{byteLength:2,components:1};case hl:case ul:return{byteLength:2,components:4};case Yn:case cl:case Zn:return{byteLength:4,components:1};case Lh:case Dh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function kf(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function d0(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var f0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p0=`#ifdef USE_ALPHAHASH
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
#endif`,m0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v0=`#ifdef USE_AOMAP
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
#endif`,y0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M0=`#ifdef USE_BATCHING
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
#endif`,S0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,b0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,T0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,w0=`#ifdef USE_IRIDESCENCE
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
#endif`,A0=`#ifdef USE_BUMPMAP
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
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,U0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,N0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,F0=`#define PI 3.141592653589793
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
} // validated`,O0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,B0=`vec3 transformedNormal = objectNormal;
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
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V0="gl_FragColor = linearToOutputTexel( gl_FragColor );",W0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
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
#endif`,J0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tg=`#ifdef USE_GRADIENTMAP
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
}`,eg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ng=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,rg=`#ifdef USE_ENVMAP
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
#endif`,ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hg=`PhysicalMaterial material;
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
#endif`,ug=`uniform sampler2D dfgLUT;
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
}`,dg=`
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
#endif`,fg=`#if defined( RE_IndirectDiffuse )
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
#endif`,pg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,gg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bg=`#if defined( USE_POINTS_UV )
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
#endif`,Tg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ag=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cg=`#ifdef USE_MORPHTARGETS
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
#endif`,Pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ig=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ng=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Fg=`#ifdef USE_NORMALMAP
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
#endif`,Og=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$g=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jg=`float getShadowMask() {
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
}`,Qg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tx=`#ifdef USE_SKINNING
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
#endif`,ex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nx=`#ifdef USE_SKINNING
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
#endif`,ix=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ax=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ox=`#ifdef USE_TRANSMISSION
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
#endif`,lx=`#ifdef USE_TRANSMISSION
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
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,px=`uniform sampler2D t2D;
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
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`#include <common>
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
}`,yx=`#if DEPTH_PACKING == 3200
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
}`,Mx=`#define DISTANCE
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
}`,Sx=`#define DISTANCE
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
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`uniform float scale;
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
}`,wx=`uniform vec3 diffuse;
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
}`,Ax=`#include <common>
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
}`,Rx=`uniform vec3 diffuse;
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
}`,Cx=`#define LAMBERT
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
}`,Px=`#define LAMBERT
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
}`,Ix=`#define MATCAP
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
}`,Lx=`#define MATCAP
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
}`,Dx=`#define NORMAL
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
}`,Ux=`#define NORMAL
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
}`,Nx=`#define PHONG
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
}`,Fx=`#define PHONG
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
}`,Ox=`#define STANDARD
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
}`,Bx=`#define STANDARD
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
}`,kx=`#define TOON
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
}`,zx=`#define TOON
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
}`,Hx=`uniform float size;
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
}`,Gx=`uniform vec3 diffuse;
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
}`,Vx=`#include <common>
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
}`,Wx=`uniform vec3 color;
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
}`,Xx=`uniform float rotation;
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
}`,qx=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:f0,alphahash_pars_fragment:p0,alphamap_fragment:m0,alphamap_pars_fragment:g0,alphatest_fragment:x0,alphatest_pars_fragment:_0,aomap_fragment:v0,aomap_pars_fragment:y0,batching_pars_vertex:M0,batching_vertex:S0,begin_vertex:b0,beginnormal_vertex:T0,bsdfs:E0,iridescence_fragment:w0,bumpmap_pars_fragment:A0,clipping_planes_fragment:R0,clipping_planes_pars_fragment:C0,clipping_planes_pars_vertex:P0,clipping_planes_vertex:I0,color_fragment:L0,color_pars_fragment:D0,color_pars_vertex:U0,color_vertex:N0,common:F0,cube_uv_reflection_fragment:O0,defaultnormal_vertex:B0,displacementmap_pars_vertex:k0,displacementmap_vertex:z0,emissivemap_fragment:H0,emissivemap_pars_fragment:G0,colorspace_fragment:V0,colorspace_pars_fragment:W0,envmap_fragment:X0,envmap_common_pars_fragment:q0,envmap_pars_fragment:Y0,envmap_pars_vertex:Z0,envmap_physical_pars_fragment:rg,envmap_vertex:$0,fog_vertex:J0,fog_pars_vertex:K0,fog_fragment:j0,fog_pars_fragment:Q0,gradientmap_pars_fragment:tg,lightmap_pars_fragment:eg,lights_lambert_fragment:ng,lights_lambert_pars_fragment:ig,lights_pars_begin:sg,lights_toon_fragment:ag,lights_toon_pars_fragment:og,lights_phong_fragment:lg,lights_phong_pars_fragment:cg,lights_physical_fragment:hg,lights_physical_pars_fragment:ug,lights_fragment_begin:dg,lights_fragment_maps:fg,lights_fragment_end:pg,lightprobes_pars_fragment:mg,logdepthbuf_fragment:gg,logdepthbuf_pars_fragment:xg,logdepthbuf_pars_vertex:_g,logdepthbuf_vertex:vg,map_fragment:yg,map_pars_fragment:Mg,map_particle_fragment:Sg,map_particle_pars_fragment:bg,metalnessmap_fragment:Tg,metalnessmap_pars_fragment:Eg,morphinstance_vertex:wg,morphcolor_vertex:Ag,morphnormal_vertex:Rg,morphtarget_pars_vertex:Cg,morphtarget_vertex:Pg,normal_fragment_begin:Ig,normal_fragment_maps:Lg,normal_pars_fragment:Dg,normal_pars_vertex:Ug,normal_vertex:Ng,normalmap_pars_fragment:Fg,clearcoat_normal_fragment_begin:Og,clearcoat_normal_fragment_maps:Bg,clearcoat_pars_fragment:kg,iridescence_pars_fragment:zg,opaque_fragment:Hg,packing:Gg,premultiplied_alpha_fragment:Vg,project_vertex:Wg,dithering_fragment:Xg,dithering_pars_fragment:qg,roughnessmap_fragment:Yg,roughnessmap_pars_fragment:Zg,shadowmap_pars_fragment:$g,shadowmap_pars_vertex:Jg,shadowmap_vertex:Kg,shadowmask_pars_fragment:jg,skinbase_vertex:Qg,skinning_pars_vertex:tx,skinning_vertex:ex,skinnormal_vertex:nx,specularmap_fragment:ix,specularmap_pars_fragment:sx,tonemapping_fragment:rx,tonemapping_pars_fragment:ax,transmission_fragment:ox,transmission_pars_fragment:lx,uv_pars_fragment:cx,uv_pars_vertex:hx,uv_vertex:ux,worldpos_vertex:dx,background_vert:fx,background_frag:px,backgroundCube_vert:mx,backgroundCube_frag:gx,cube_vert:xx,cube_frag:_x,depth_vert:vx,depth_frag:yx,distance_vert:Mx,distance_frag:Sx,equirect_vert:bx,equirect_frag:Tx,linedashed_vert:Ex,linedashed_frag:wx,meshbasic_vert:Ax,meshbasic_frag:Rx,meshlambert_vert:Cx,meshlambert_frag:Px,meshmatcap_vert:Ix,meshmatcap_frag:Lx,meshnormal_vert:Dx,meshnormal_frag:Ux,meshphong_vert:Nx,meshphong_frag:Fx,meshphysical_vert:Ox,meshphysical_frag:Bx,meshtoon_vert:kx,meshtoon_frag:zx,points_vert:Hx,points_frag:Gx,shadow_vert:Vx,shadow_frag:Wx,sprite_vert:Xx,sprite_frag:qx},Ct={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},ui={basic:{uniforms:an([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:an([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Wt(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:an([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:an([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:an([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:an([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:an([Ct.points,Ct.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:an([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:an([Ct.common,Ct.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:an([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:an([Ct.sprite,Ct.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:an([Ct.common,Ct.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:an([Ct.lights,Ct.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};ui.physical={uniforms:an([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var Yl={r:0,b:0,g:0},Yx=new le,zf=new jt;zf.set(-1,0,0,0,1,0,0,0,1);function Zx(i,t,e,n,s,r){let a=new Wt(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){let v=S.backgroundBlurriness>0;w=t.get(w,v)}return w}function g(S){let w=!1,v=f(S);v===null?p(a,o):v&&v.isColor&&(p(v,1),w=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(S,w){let v=f(w);v&&(v.isCubeTexture||v.mapping===ya)?(c===void 0&&(c=new _e(new fe(1,1,1),new Se({name:"BackgroundCubeMaterial",uniforms:vs(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,x,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Yx.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(zf),c.material.toneMapped=he.getTransfer(v.colorSpace)!==ye,(h!==v||u!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new _e(new tn(2,2),new Se({name:"BackgroundMaterial",uniforms:vs(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=he.getTransfer(v.colorSpace)!==ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,w){S.getRGB(Yl,Hh(i)),e.buffers.color.setClear(Yl.r,Yl.g,Yl.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:g,addToRenderList:y,dispose:m}}function $x(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(C,L,O,I,F){let k=!1,G=u(C,I,O,L);r!==G&&(r=G,c(r.object)),k=f(C,I,O,F),k&&g(C,I,O,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,v(C,L,O,I),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function u(C,L,O,I){let F=I.wireframe===!0,k=n[L.id];k===void 0&&(k={},n[L.id]=k);let G=C.isInstancedMesh===!0?C.id:0,st=k[G];st===void 0&&(st={},k[G]=st);let W=st[O.id];W===void 0&&(W={},st[O.id]=W);let et=W[F];return et===void 0&&(et=d(l()),W[F]=et),et}function d(C){let L=[],O=[],I=[];for(let F=0;F<e;F++)L[F]=0,O[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:I,object:C,attributes:{},index:null}}function f(C,L,O,I){let F=r.attributes,k=L.attributes,G=0,st=O.getAttributes();for(let W in st)if(st[W].location>=0){let nt=F[W],It=k[W];if(It===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(It=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(It=C.instanceColor)),nt===void 0||nt.attribute!==It||It&&nt.data!==It.data)return!0;G++}return r.attributesNum!==G||r.index!==I}function g(C,L,O,I){let F={},k=L.attributes,G=0,st=O.getAttributes();for(let W in st)if(st[W].location>=0){let nt=k[W];nt===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(nt=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(nt=C.instanceColor));let It={};It.attribute=nt,nt&&nt.data&&(It.data=nt.data),F[W]=It,G++}r.attributes=F,r.attributesNum=G,r.index=I}function y(){let C=r.newAttributes;for(let L=0,O=C.length;L<O;L++)C[L]=0}function p(C){m(C,0)}function m(C,L){let O=r.newAttributes,I=r.enabledAttributes,F=r.attributeDivisors;O[C]=1,I[C]===0&&(i.enableVertexAttribArray(C),I[C]=1),F[C]!==L&&(i.vertexAttribDivisor(C,L),F[C]=L)}function S(){let C=r.newAttributes,L=r.enabledAttributes;for(let O=0,I=L.length;O<I;O++)L[O]!==C[O]&&(i.disableVertexAttribArray(O),L[O]=0)}function w(C,L,O,I,F,k,G){G===!0?i.vertexAttribIPointer(C,L,O,F,k):i.vertexAttribPointer(C,L,O,I,F,k)}function v(C,L,O,I){y();let F=I.attributes,k=O.getAttributes(),G=L.defaultAttributeValues;for(let st in k){let W=k[st];if(W.location>=0){let et=F[st];if(et===void 0&&(st==="instanceMatrix"&&C.instanceMatrix&&(et=C.instanceMatrix),st==="instanceColor"&&C.instanceColor&&(et=C.instanceColor)),et!==void 0){let nt=et.normalized,It=et.itemSize,wt=t.get(et);if(wt===void 0)continue;let Yt=wt.buffer,qt=wt.type,ht=wt.bytesPerElement,V=qt===i.INT||qt===i.UNSIGNED_INT||et.gpuType===cl;if(et.isInterleavedBufferAttribute){let Q=et.data,gt=Q.stride,Dt=et.offset;if(Q.isInstancedInterleavedBuffer){for(let Rt=0;Rt<W.locationSize;Rt++)m(W.location+Rt,Q.meshPerAttribute);C.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Rt=0;Rt<W.locationSize;Rt++)p(W.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let Rt=0;Rt<W.locationSize;Rt++)w(W.location+Rt,It/W.locationSize,qt,nt,gt*ht,(Dt+It/W.locationSize*Rt)*ht,V)}else{if(et.isInstancedBufferAttribute){for(let Q=0;Q<W.locationSize;Q++)m(W.location+Q,et.meshPerAttribute);C.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Q=0;Q<W.locationSize;Q++)p(W.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let Q=0;Q<W.locationSize;Q++)w(W.location+Q,It/W.locationSize,qt,nt,It*ht,It/W.locationSize*Q*ht,V)}}else if(G!==void 0){let nt=G[st];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(W.location,nt);break;case 3:i.vertexAttrib3fv(W.location,nt);break;case 4:i.vertexAttrib4fv(W.location,nt);break;default:i.vertexAttrib1fv(W.location,nt)}}}}S()}function M(){T();for(let C in n){let L=n[C];for(let O in L){let I=L[O];for(let F in I){let k=I[F];for(let G in k)h(k[G].object),delete k[G];delete I[F]}}delete n[C]}}function x(C){if(n[C.id]===void 0)return;let L=n[C.id];for(let O in L){let I=L[O];for(let F in I){let k=I[F];for(let G in k)h(k[G].object),delete k[G];delete I[F]}}delete n[C.id]}function E(C){for(let L in n){let O=n[L];for(let I in O){let F=O[I];if(F[C.id]===void 0)continue;let k=F[C.id];for(let G in k)h(k[G].object),delete k[G];delete F[C.id]}}}function _(C){for(let L in n){let O=n[L],I=C.isInstancedMesh===!0?C.id:0,F=O[I];if(F!==void 0){for(let k in F){let G=F[k];for(let st in G)h(G[st].object),delete G[st];delete F[k]}delete O[I],Object.keys(O).length===0&&delete n[L]}}}function T(){A(),a=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:A,dispose:M,releaseStatesOfGeometry:x,releaseStatesOfObject:_,releaseStatesOfProgram:E,initAttributes:y,enableAttribute:p,disableUnusedAttributes:S}}function Jx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Kx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==Mn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let _=E===Oe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==je&&E!==Zn&&!_&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),x=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:v,maxSamples:M,samples:x}}function jx(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Wn,o=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let S=r?0:n,w=S*4,v=m.clippingState||null;l.value=v,v=h(g,d,w,f);for(let M=0;M!==w;++M)v[M]=e[M];m.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let m=f+y*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,v=f;w!==y;++w,v+=4)a.copy(u[w]).applyMatrix4(S,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var _r=4,Qx=6,t1=20,e1=256,Ca=new $i,_f=new Wt,Jh=null,Kh=0,jh=0,Qh=!1,n1=new U,ys=new U,yr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=n1}=r;Jh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Jh,Kh,jh),this._renderer.xr.enabled=Qh,t.scissorTest=!1,xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:Oe,format:Mn,colorSpace:Hr,depthBuffer:!1},s=vf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=i1(r)),this._blurMaterial=r1(r,t,e),this._ggxMaterial=s1(r,t,e)}return s}_compileMaterial(t){let e=new _e(new Me,t);this._renderer.compile(e,Ca)}_sceneToCubeUV(t,e,n,s,r){let l=new Je(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(_f),u.toneMapping=qn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _e(new fe,new hn({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,p=y.material,m=!1,S=t.background;S?S.isColor&&(p.color.copy(S),t.background=null,m=!0):(p.color.copy(_f),m=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let M=this._cubeSize;xr(s,v*M,w>2?M:0,M,M),u.setRenderTarget(s),m&&u.render(y,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ki||t.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;xr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ca)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:g}=this,y=this._sizeLods[n],p=3*y*(n>g-_r?n-g+_r:0),m=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,xr(r,p,m,3*y,2*y),s.setRenderTarget(r),s.render(o,Ca),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,xr(t,p,m,3*y,2*y),s.setRenderTarget(t),s.render(o,Ca)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-_r?s-this._lodMax+_r:0),d=4*(this._cubeSize-h);xr(e,u,d,3*h,2*h),a.setRenderTarget(e),a.render(l,Ca)}};function i1(i){let t=[],e=[],n=i,s=i-_r+1+Qx;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,g=new Float32Array(f*d*u),y=new Float32Array(f*d*u);for(let m=0;m<u;m++){let S=m%3*2/3-1,w=m>2?0:-1,v=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];g.set(v,f*d*m);for(let M=0;M<d;M++){let x=h[M*2]*2-1,E=h[M*2+1]*2-1;m===0?ys.set(1,E,x):m===1?ys.set(-x,1,-E):m===2?ys.set(-x,E,1):m===3?ys.set(-1,E,-x):m===4?ys.set(-x,-1,E):ys.set(x,E,-1),ys.toArray(y,(m*d+M)*f)}}let p=new Me;p.setAttribute("position",new vn(g,f)),p.setAttribute("outputDirection",new vn(y,f)),e.push(new _e(p,null)),n>_r&&n--}return{lodMeshes:e,sizeLods:t}}function vf(i,t,e){let n=new Ne(i,t,e);return n.texture.mapping=ya,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function s1(i,t,e){return new Se({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:e1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:ze,depthTest:!1,depthWrite:!1})}function r1(i,t,e){return new Se({name:"SphericalGaussianBlur",defines:{SAMPLES:t1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:ze,depthTest:!1,depthWrite:!1})}function yf(){return new Se({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:ze,depthTest:!1,depthWrite:!1})}function Mf(){return new Se({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ze,depthTest:!1,depthWrite:!1})}function Kl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var $l=class extends Ne{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Kr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fe(5,5,5),r=new Se({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:ze});r.uniforms.tEquirect.value=e;let a=new _e(s,r),o=e.minFilter;return e.minFilter===ji&&(e.minFilter=Qe),new nl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function a1(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===al||f===ol)if(t.has(d)){let g=t.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new $l(g.height);return y.fromEquirectangularTexture(i,d),t.set(d,y),d.addEventListener("dispose",c),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,g=f===al||f===ol,y=f===Ki||f===_s;if(g||y){let p=e.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new yr(i)),p=g?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{let S=d.image;return g&&S&&S.height>0||y&&S&&l(S)?(n===null&&(n=new yr(i)),p=g?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,f){return f===al?d.mapping=Ki:f===ol&&(d.mapping=_s),d}function l(d){let f=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function o1(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&us("WebGLRenderer: "+n+" extension not supported."),s}}}function l1(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,y=0;if(g===void 0)return;if(f!==null){let S=f.array;y=f.version;for(let w=0,v=S.length;w<v;w+=3){let M=S[w+0],x=S[w+1],E=S[w+2];d.push(M,x,x,E,E,M)}}else{let S=g.array;y=g.version;for(let w=0,v=S.length/3-1;w<v;w+=3){let M=w+0,x=w+1,E=w+2;d.push(M,x,x,E,E,M)}}let p=new(g.count>=65535?Zr:Yr)(d,1);p.version=y;let m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function c1(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),e.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let y=0;for(let p=0;p<f;p++)y+=d[p];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function h1(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Jt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function u1(i,t,e){let n=new WeakMap,s=new De;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let T=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),y===!0&&(w=3);let v=o.attributes.position.count*w,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let x=new Float32Array(v*M*4*u),E=new Xr(x,v,M,u);E.type=Zn,E.needsUpdate=!0;let _=w*4;for(let A=0;A<u;A++){let C=p[A],L=m[A],O=S[A],I=v*M*4*A;for(let F=0;F<C.count;F++){let k=F*_;f===!0&&(s.fromBufferAttribute(C,F),x[I+k+0]=s.x,x[I+k+1]=s.y,x[I+k+2]=s.z,x[I+k+3]=0),g===!0&&(s.fromBufferAttribute(L,F),x[I+k+4]=s.x,x[I+k+5]=s.y,x[I+k+6]=s.z,x[I+k+7]=0),y===!0&&(s.fromBufferAttribute(O,F),x[I+k+8]=s.x,x[I+k+9]=s.y,x[I+k+10]=s.z,x[I+k+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new ot(v,M)},n.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function d1(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var f1={[bh]:"LINEAR_TONE_MAPPING",[Th]:"REINHARD_TONE_MAPPING",[Eh]:"CINEON_TONE_MAPPING",[wh]:"ACES_FILMIC_TONE_MAPPING",[Ah]:"AGX_TONE_MAPPING",[Rh]:"NEUTRAL_TONE_MAPPING",[va]:"CUSTOM_TONE_MAPPING"};function p1(i,t,e,n,s,r){let a=new Ne(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Me;c.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new te([0,2,0,0,2,0],2));let h=new Wo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new _e(c,h),d=new $i(-1,1,1,-1,0,1),f=null,g=null,y=!1,p,m=null,S=[],w=!1;this.setSize=function(v,M){a.setSize(v,M),o!==null&&o.setSize(v,M),l!==null&&l.setSize(v,M);for(let x=0;x<S.length;x++){let E=S[x];E.setSize&&E.setSize(v,M)}},this.setEffects=function(v){S=v,w=S.length>0&&S[0].isRenderPass===!0;let M=a.width,x=a.height;S.length>0&&o===null&&(o=new Ne(M,x,{type:Oe,depthBuffer:!1,stencilBuffer:!1}),l=new Ne(M,x,{type:Oe,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<S.length;E++){let _=S[E];_.setSize&&_.setSize(M,x)}},this.begin=function(v,M){if(y||v.toneMapping===qn&&S.length===0)return!1;if(m=M,M!==null){let x=M.width,E=M.height;(a.width!==x||a.height!==E)&&this.setSize(x,E)}return w===!1&&v.setRenderTarget(a),p=v.toneMapping,v.toneMapping=qn,!0},this.hasRenderPass=function(){return w},this.end=function(v,M){v.toneMapping=p,y=!0;let x=a,E=o;for(let _=0;_<S.length;_++){let T=S[_];T.enabled!==!1&&(T.render(v,E,x,M),T.needsSwap!==!1&&(x=E,E=E===o?l:o))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,h.defines={},he.getTransfer(f)===ye&&(h.defines.SRGB_TRANSFER="");let _=f1[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,v.setRenderTarget(m),v.render(u,d),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Hf=new cn,nu=new ai(1,1),Gf=new Xr,Vf=new No,Wf=new Kr,Sf=[],bf=[],Tf=new Float32Array(16),Ef=new Float32Array(9),wf=new Float32Array(4);function Mr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Sf[s];if(r===void 0&&(r=new Float32Array(s),Sf[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function jl(i,t){let e=bf[t];e===void 0&&(e=new Int32Array(t),bf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function m1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function g1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2fv(this.addr,t),Ye(e,t)}}function x1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;i.uniform3fv(this.addr,t),Ye(e,t)}}function _1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4fv(this.addr,t),Ye(e,t)}}function v1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;wf.set(n),i.uniformMatrix2fv(this.addr,!1,wf),Ye(e,n)}}function y1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Ef.set(n),i.uniformMatrix3fv(this.addr,!1,Ef),Ye(e,n)}}function M1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Tf.set(n),i.uniformMatrix4fv(this.addr,!1,Tf),Ye(e,n)}}function S1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function b1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2iv(this.addr,t),Ye(e,t)}}function T1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3iv(this.addr,t),Ye(e,t)}}function E1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4iv(this.addr,t),Ye(e,t)}}function w1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function A1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2uiv(this.addr,t),Ye(e,t)}}function R1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3uiv(this.addr,t),Ye(e,t)}}function C1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4uiv(this.addr,t),Ye(e,t)}}function P1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nu.compareFunction=e.isReversedDepthBuffer()?ql:Xl,r=nu):r=Hf,e.setTexture2D(t||r,s)}function I1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vf,s)}function L1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Wf,s)}function D1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Gf,s)}function U1(i){switch(i){case 5126:return m1;case 35664:return g1;case 35665:return x1;case 35666:return _1;case 35674:return v1;case 35675:return y1;case 35676:return M1;case 5124:case 35670:return S1;case 35667:case 35671:return b1;case 35668:case 35672:return T1;case 35669:case 35673:return E1;case 5125:return w1;case 36294:return A1;case 36295:return R1;case 36296:return C1;case 35678:case 36198:case 36298:case 36306:case 35682:return P1;case 35679:case 36299:case 36307:return I1;case 35680:case 36300:case 36308:case 36293:return L1;case 36289:case 36303:case 36311:case 36292:return D1}}function N1(i,t){i.uniform1fv(this.addr,t)}function F1(i,t){let e=Mr(t,this.size,2);i.uniform2fv(this.addr,e)}function O1(i,t){let e=Mr(t,this.size,3);i.uniform3fv(this.addr,e)}function B1(i,t){let e=Mr(t,this.size,4);i.uniform4fv(this.addr,e)}function k1(i,t){let e=Mr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function z1(i,t){let e=Mr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function H1(i,t){let e=Mr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function G1(i,t){i.uniform1iv(this.addr,t)}function V1(i,t){i.uniform2iv(this.addr,t)}function W1(i,t){i.uniform3iv(this.addr,t)}function X1(i,t){i.uniform4iv(this.addr,t)}function q1(i,t){i.uniform1uiv(this.addr,t)}function Y1(i,t){i.uniform2uiv(this.addr,t)}function Z1(i,t){i.uniform3uiv(this.addr,t)}function $1(i,t){i.uniform4uiv(this.addr,t)}function J1(i,t,e){let n=this.cache,s=t.length,r=jl(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=nu:a=Hf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function K1(i,t,e){let n=this.cache,s=t.length,r=jl(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Vf,r[a])}function j1(i,t,e){let n=this.cache,s=t.length,r=jl(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Wf,r[a])}function Q1(i,t,e){let n=this.cache,s=t.length,r=jl(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Gf,r[a])}function t_(i){switch(i){case 5126:return N1;case 35664:return F1;case 35665:return O1;case 35666:return B1;case 35674:return k1;case 35675:return z1;case 35676:return H1;case 5124:case 35670:return G1;case 35667:case 35671:return V1;case 35668:case 35672:return W1;case 35669:case 35673:return X1;case 5125:return q1;case 36294:return Y1;case 36295:return Z1;case 36296:return $1;case 35678:case 36198:case 36298:case 36306:case 35682:return J1;case 35679:case 36299:case 36307:return K1;case 35680:case 36300:case 36308:case 36293:return j1;case 36289:case 36303:case 36311:case 36292:return Q1}}var iu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=U1(e.type)}},su=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=t_(e.type)}},ru=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},tu=/(\w+)(\])?(\[|\.)?/g;function Af(i,t){i.seq.push(t),i.map[t.id]=t}function e_(i,t,e){let n=i.name,s=n.length;for(tu.lastIndex=0;;){let r=tu.exec(n),a=tu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Af(e,c===void 0?new iu(o,i,t):new su(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new ru(o),Af(e,u)),e=u}}}var vr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);e_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Rf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var n_=37297,i_=0;function s_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Cf=new jt;function r_(i){he._getMatrix(Cf,he.workingColorSpace,i);let t=`mat3( ${Cf.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case Gr:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Pf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+s_(i.getShaderSource(t),o)}else return r}function a_(i,t){let e=r_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var o_={[bh]:"Linear",[Th]:"Reinhard",[Eh]:"Cineon",[wh]:"ACESFilmic",[Ah]:"AgX",[Rh]:"Neutral",[va]:"Custom"};function l_(i,t){let e=o_[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Zl=new U;function c_(){he.getLuminanceCoefficients(Zl);let i=Zl.x.toFixed(4),t=Zl.y.toFixed(4),e=Zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ia).join(`
`)}function u_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function d_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ia(i){return i!==""}function If(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var f_=/^[ \t]*#include +<([\w\d./]+)>/gm;function au(i){return i.replace(f_,m_)}var p_=new Map;function m_(i,t){let e=Qt[t];if(e===void 0){let n=p_.get(t);if(n!==void 0)e=Qt[n],Zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return au(e)}var g_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Df(i){return i.replace(g_,x_)}function x_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var __={[ms]:"SHADOWMAP_TYPE_PCF",[fr]:"SHADOWMAP_TYPE_VSM"};function v_(i){return __[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var y_={[Ki]:"ENVMAP_TYPE_CUBE",[_s]:"ENVMAP_TYPE_CUBE",[ya]:"ENVMAP_TYPE_CUBE_UV"};function M_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":y_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var S_={[_s]:"ENVMAP_MODE_REFRACTION"};function b_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":S_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var T_={[Sh]:"ENVMAP_BLENDING_MULTIPLY",[Yd]:"ENVMAP_BLENDING_MIX",[Zd]:"ENVMAP_BLENDING_ADD"};function E_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":T_[i.combine]||"ENVMAP_BLENDING_NONE"}function w_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function A_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=v_(e),c=M_(e),h=b_(e),u=E_(e),d=w_(e),f=h_(e),g=u_(r),y=s.createProgram(),p,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ia).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ia).join(`
`),m.length>0&&(m+=`
`)):(p=[Uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),m=[Uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?Qt.tonemapping_pars_fragment:"",e.toneMapping!==qn?l_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,a_("linearToOutputTexel",e.outputColorSpace),c_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ia).join(`
`)),a=au(a),a=If(a,e),a=Lf(a,e),o=au(o),o=If(o,e),o=Lf(o,e),a=Df(a),o=Df(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=S+p+a,v=S+m+o,M=Rf(s,s.VERTEX_SHADER,w),x=Rf(s,s.FRAGMENT_SHADER,v);s.attachShader(y,M),s.attachShader(y,x),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function E(C){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(y)||"",O=s.getShaderInfoLog(M)||"",I=s.getShaderInfoLog(x)||"",F=L.trim(),k=O.trim(),G=I.trim(),st=!0,W=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(st=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,M,x);else{let et=Pf(s,M,"vertex"),nt=Pf(s,x,"fragment");Jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+et+`
`+nt)}else F!==""?Zt("WebGLProgram: Program Info Log:",F):(k===""||G==="")&&(W=!1);W&&(C.diagnostics={runnable:st,programLog:F,vertexShader:{log:k,prefix:p},fragmentShader:{log:G,prefix:m}})}s.deleteShader(M),s.deleteShader(x),_=new vr(s,y),T=d_(s,y)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(y,n_)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=i_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=x,this}var R_=0,ou=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new lu(t),e.set(t,n)),n}},lu=class{constructor(t){this.id=R_++,this.code=t,this.usedTimes=0}};function C_(i){return i===ts||i===wa||i===Aa}function P_(i,t,e,n,s,r){let a=new er,o=new ou,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,T,A,C,L,O){let I=C.fog,F=L.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,st=t.get(_.envMap||k,G),W=st&&st.mapping===ya?st.image.height:null,et=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Zt("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let nt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,It=nt!==void 0?nt.length:0,wt=0;F.morphAttributes.position!==void 0&&(wt=1),F.morphAttributes.normal!==void 0&&(wt=2),F.morphAttributes.color!==void 0&&(wt=3);let Yt,qt,ht,V;if(et){let ue=ui[et];Yt=ue.vertexShader,qt=ue.fragmentShader}else{Yt=_.vertexShader,qt=_.fragmentShader;let ue=o.getVertexShaderStage(_),pe=o.getFragmentShaderStage(_);o.update(_,ue,pe),ht=ue.id,V=pe.id}let Q=i.getRenderTarget(),gt=i.state.buffers.depth.getReversed(),Dt=L.isInstancedMesh===!0,Rt=L.isBatchedMesh===!0,Gt=!!_.map,ee=!!_.matcap,it=!!st,ct=!!_.aoMap,ft=!!_.lightMap,pt=!!_.bumpMap&&_.wireframe===!1,Mt=!!_.normalMap,zt=!!_.displacementMap,Ht=!!_.emissiveMap,Vt=!!_.metalnessMap,$t=!!_.roughnessMap,B=_.anisotropy>0,ae=_.clearcoat>0,Kt=_.dispersion>0,P=_.retroreflectivity>0,b=_.iridescence>0,H=_.sheen>0,X=_.transmission>0,j=B&&!!_.anisotropyMap,xt=ae&&!!_.clearcoatMap,St=ae&&!!_.clearcoatNormalMap,tt=ae&&!!_.clearcoatRoughnessMap,rt=b&&!!_.iridescenceMap,At=b&&!!_.iridescenceThicknessMap,Ot=H&&!!_.sheenColorMap,bt=H&&!!_.sheenRoughnessMap,Tt=!!_.specularMap,Ut=!!_.specularColorMap,Z=!!_.specularIntensityMap,at=X&&!!_.transmissionMap,N=X&&!!_.thicknessMap,lt=!!_.gradientMap,$=!!_.alphaMap,dt=_.alphaTest>0,yt=!!_.alphaHash,K=!!_.extensions,_t=qn;_.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(_t=i.toneMapping);let Et={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:Yt,fragmentShader:qt,defines:_.defines,customVertexShaderID:ht,customFragmentShaderID:V,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Rt,batchingColor:Rt&&L._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&L.instanceColor!==null,instancingMorph:Dt&&L.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Gt,matcap:ee,envMap:it,envMapMode:it&&st.mapping,envMapCubeUVHeight:W,aoMap:ct,lightMap:ft,bumpMap:pt,normalMap:Mt,displacementMap:zt,emissiveMap:Ht,normalMapObjectSpace:Mt&&_.normalMapType===Kd,normalMapTangentSpace:Mt&&_.normalMapType===Ra,packedNormalMap:Mt&&_.normalMapType===Ra&&C_(_.normalMap.format),metalnessMap:Vt,roughnessMap:$t,anisotropy:B,anisotropyMap:j,clearcoat:ae,clearcoatMap:xt,clearcoatNormalMap:St,clearcoatRoughnessMap:tt,dispersion:Kt,retroreflection:P,iridescence:b,iridescenceMap:rt,iridescenceThicknessMap:At,sheen:H,sheenColorMap:Ot,sheenRoughnessMap:bt,specularMap:Tt,specularColorMap:Ut,specularIntensityMap:Z,transmission:X,transmissionMap:at,thicknessMap:N,gradientMap:lt,opaque:_.transparent===!1&&_.blending===pr&&_.alphaToCoverage===!1,alphaMap:$,alphaTest:dt,alphaHash:yt,combine:_.combine,mapUv:Gt&&g(_.map.channel),aoMapUv:ct&&g(_.aoMap.channel),lightMapUv:ft&&g(_.lightMap.channel),bumpMapUv:pt&&g(_.bumpMap.channel),normalMapUv:Mt&&g(_.normalMap.channel),displacementMapUv:zt&&g(_.displacementMap.channel),emissiveMapUv:Ht&&g(_.emissiveMap.channel),metalnessMapUv:Vt&&g(_.metalnessMap.channel),roughnessMapUv:$t&&g(_.roughnessMap.channel),anisotropyMapUv:j&&g(_.anisotropyMap.channel),clearcoatMapUv:xt&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:St&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:At&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:bt&&g(_.sheenRoughnessMap.channel),specularMapUv:Tt&&g(_.specularMap.channel),specularColorMapUv:Ut&&g(_.specularColorMap.channel),specularIntensityMapUv:Z&&g(_.specularIntensityMap.channel),transmissionMapUv:at&&g(_.transmissionMap.channel),thicknessMapUv:N&&g(_.thicknessMap.channel),alphaMapUv:$&&g(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Mt||B),vertexNormals:!!F.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(Gt||$),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||F.attributes.normal===void 0&&Mt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:gt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:wt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:_t,decodeVideoTexture:Gt&&_.map.isVideoTexture===!0&&he.getTransfer(_.map.colorSpace)===ye,decodeVideoTextureEmissive:Ht&&_.emissiveMap.isVideoTexture===!0&&he.getTransfer(_.emissiveMap.colorSpace)===ye,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===fn,flipSided:_.side===dn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:K&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(K&&_.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Et.vertexUv1s=l.has(1),Et.vertexUv2s=l.has(2),Et.vertexUv3s=l.has(3),l.clear(),Et}function p(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let A in _.defines)T.push(A),T.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(m(T,_),S(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function m(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function S(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){let T=f[_.type],A;if(T){let C=ui[T];A=pn.clone(C.uniforms)}else A=_.uniforms;return A}function v(_,T){let A=h.get(T);return A!==void 0?++A.usedTimes:(A=new A_(i,T,_,s),c.push(A),h.set(T,A)),A}function M(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function x(_){o.remove(_)}function E(){o.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:w,acquireProgram:v,releaseProgram:M,releaseShaderCache:x,programs:c,dispose:E}}function I_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function L_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Nf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ff(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,y,p,m){let S=i[t];return S===void 0?(S={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:p,group:m},i[t]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=g,S.materialVariant=a(d),S.groupOrder=y,S.renderOrder=d.renderOrder,S.z=p,S.group=m),t++,S}function l(d,f,g,y,p,m,S){S.reversedDepth===!0&&(p=-p);let w=o(d,f,g,y,p,m);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):e.push(w)}function c(d,f,g,y,p,m){let S=o(d,f,g,y,p,m);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function h(d,f){e.length>1&&e.sort(d||L_),n.length>1&&n.sort(f||Nf),s.length>1&&s.sort(f||Nf)}function u(){for(let d=t,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function D_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Ff,i.set(n,[a])):s>=r.length?(a=new Ff,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function U_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new Wt};break;case"SpotLight":e={position:new U,direction:new U,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function N_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var F_=0;function O_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function B_(i){let t=new U_,e=N_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new le,a=new le;function o(c){let h=0,u=0,d=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,g=0,y=0,p=0,m=0,S=0,w=0,v=0,M=0,x=0,E=0,_=0,T=0,A=0;c.sort(O_);for(let L=0,O=c.length;L<O;L++){let I=c[L],F=I.color,k=I.intensity,G=I.distance,st=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ts?st=I.shadow.map.texture:st=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=F.r*k,u+=F.g*k,d+=F.b*k;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],k);A++}else if(I.isSunLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let et=I.shadow,nt=e.get(I);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),n.sunShadow[g]=nt,n.sunShadowMap[g]=st;let It=et.getViewportCount();for(let wt=0;wt<It;wt++)n.sunShadowMatrix[y+wt]=et.getMatrix(wt),n.sunShadowCascade[y+wt]=et._cascadeData[wt];y+=It,g++}n.sun[f]=W,f++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let et=I.shadow,nt=e.get(I);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,n.directionalShadow[p]=nt,n.directionalShadowMap[p]=st,n.directionalShadowMatrix[p]=I.shadow.matrix,M++}n.directional[p]=W,p++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(F).multiplyScalar(k),W.distance=G,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[S]=W;let et=I.shadow;if(I.map&&(n.spotLightMap[_]=I.map,_++,et.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[S]=et.matrix,I.castShadow){let nt=e.get(I);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,n.spotShadow[S]=nt,n.spotShadowMap[S]=st,E++}S++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(F).multiplyScalar(k),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[w]=W,w++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let et=I.shadow,nt=e.get(I);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,nt.shadowCameraNear=et.camera.near,nt.shadowCameraFar=et.camera.far,n.pointShadow[m]=nt,n.pointShadowMap[m]=st,n.pointShadowMatrix[m]=I.shadow.matrix,x++}n.point[m]=W,m++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(k),W.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[v]=W,v++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.sunLength!==f||C.directionalLength!==p||C.pointLength!==m||C.spotLength!==S||C.rectAreaLength!==w||C.hemiLength!==v||C.numSunShadows!==g||C.numDirectionalShadows!==M||C.numPointShadows!==x||C.numSpotShadows!==E||C.numSpotMaps!==_||C.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=p,n.spot.length=S,n.rectArea.length=w,n.point.length=m,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.pointShadowMatrix.length=x,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,C.sunLength=f,C.directionalLength=p,C.pointLength=m,C.spotLength=S,C.rectAreaLength=w,C.hemiLength=v,C.numSunShadows=g,C.numDirectionalShadows=M,C.numPointShadows=x,C.numSpotShadows=E,C.numSpotMaps=_,C.numLightProbes=A,n.version=F_++)}function l(c,h){let u=0,d=0,f=0,g=0,y=0,p=0,m=h.matrixWorldInverse;for(let S=0,w=c.length;S<w;S++){let v=c[S];if(v.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),u++}else if(v.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(v.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),g++}else if(v.isRectAreaLight){let M=n.rectArea[y];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let M=n.hemi[p];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function Of(i){let t=new B_(i),e=[],n=[],s=[];function r(d){u.camera=d,e.length=0,n.length=0,s.length=0}function a(d){e.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function k_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Of(i),t.set(s,[o])):r>=a.length?(o=new Of(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var z_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H_=`uniform sampler2D shadow_pass;
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
}`,G_=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],V_=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Bf=new le,Pa=new U,eu=new U;function W_(i,t,e){let n=new rr,s=new ot,r=new ot,a=new De,o=new cr,l=new Xo,c={},h=e.maxTextureSize,u={[Ji]:dn,[dn]:Ji,[fn]:fn},d=new Se({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:z_,fragmentShader:H_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Me;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new _e(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ms;let m=this.type;this.render=function(x,E,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||x.length===0)return;this.type===Ld&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ms);let T=i.getRenderTarget(),A=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),L=i.state;L.setBlending(ze),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let O=m!==this.type;O&&E.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(F=>F.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,F=x.length;I<F;I++){let k=x[I],G=k.shadow;if(G===void 0){Zt("WebGLShadowMap:",k,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let st=G.getFrameExtents();s.multiply(st),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,G.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=W,G.map===null||O===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===fr){if(k.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Ne(s.x,s.y,{format:ts,type:Oe,minFilter:Qe,magFilter:Qe,generateMipmaps:!1}),G.map.texture.name=k.name+".shadowMap",G.map.depthTexture=new ai(s.x,s.y,Zn),G.map.depthTexture.name=k.name+".shadowMapDepth",G.map.depthTexture.format=ni,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Le,G.map.depthTexture.magFilter=Le}else k.isPointLight?(G.map=new $l(s.x),G.map.depthTexture=new Bo(s.x,Yn)):(G.map=new Ne(s.x,s.y),G.map.depthTexture=new ai(s.x,s.y,Yn)),G.map.depthTexture.name=k.name+".shadowMap",G.map.depthTexture.format=ni,this.type===ms?(G.map.depthTexture.compareFunction=W?ql:Xl,G.map.depthTexture.minFilter=Qe,G.map.depthTexture.magFilter=Qe):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Le,G.map.depthTexture.magFilter=Le);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let et=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();k.isPointLight!==!0&&G.updateMatrices(k,_);for(let nt=0;nt<et;nt++){let It=G.getCamera(nt);if(k.isPointLight){let wt=G.camera,Yt=G.matrix,qt=k.distance||wt.far;qt!==wt.far&&(wt.far=qt,wt.updateProjectionMatrix()),Pa.setFromMatrixPosition(k.matrixWorld),wt.position.copy(Pa),eu.copy(wt.position),eu.add(G_[nt]),wt.up.copy(V_[nt]),wt.lookAt(eu),wt.updateMatrixWorld(),Yt.makeTranslation(-Pa.x,-Pa.y,-Pa.z),Bf.multiplyMatrices(wt.projectionMatrix,wt.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Bf,wt.coordinateSystem,wt.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,nt),i.clear();else{nt===0&&(i.setRenderTarget(G.map),i.clear());let wt=G.getViewport(nt);a.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),L.viewport(a)}n=G.getFrustum(nt),v(E,_,It,k,this.type)}G.isPointLightShadow!==!0&&this.type===fr&&S(G,_),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(T,A,C)};function S(x,E){let _=t.update(y);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),x.mapPass===null?x.mapPass=new Ne(s.x,s.y,{format:ts,type:Oe}):(x.mapPass.width!==x.map.width||x.mapPass.height!==x.map.height)&&x.mapPass.setSize(x.map.width,x.map.height),d.uniforms.shadow_pass.value=x.map.depthTexture,d.uniforms.resolution.value.set(x.map.width,x.map.height),d.uniforms.radius.value=x.radius,i.setRenderTarget(x.mapPass),i.clear(),i.renderBufferDirect(E,null,_,d,y,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value.set(x.map.width,x.map.height),f.uniforms.radius.value=x.radius,i.setRenderTarget(x.map),i.clear(),i.renderBufferDirect(E,null,_,f,y,null)}function w(x,E,_,T){let A=null,C=_.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(C!==void 0)A=C;else if(A=_.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let L=A.uuid,O=E.uuid,I=c[L];I===void 0&&(I={},c[L]=I);let F=I[O];F===void 0&&(F=A.clone(),I[O]=F,E.addEventListener("dispose",M)),A=F}if(A.visible=E.visible,A.wireframe=E.wireframe,T===fr?A.side=E.shadowSide!==null?E.shadowSide:E.side:A.side=E.shadowSide!==null?E.shadowSide:u[E.side],A.alphaMap=E.alphaMap,A.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,A.map=E.map,A.clipShadows=E.clipShadows,A.clippingPlanes=E.clippingPlanes,A.clipIntersection=E.clipIntersection,A.displacementMap=E.displacementMap,A.displacementScale=E.displacementScale,A.displacementBias=E.displacementBias,A.wireframeLinewidth=E.wireframeLinewidth,A.linewidth=E.linewidth,_.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let L=i.properties.get(A);L.light=_}return A}function v(x,E,_,T,A){if(x.visible===!1)return;if(x.layers.test(E.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&A===fr)&&(!x.frustumCulled||x.intersectsFrustum(n))){x.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,x.matrixWorld);let O=t.update(x),I=x.material;if(Array.isArray(I)){let F=O.groups;for(let k=0,G=F.length;k<G;k++){let st=F[k],W=I[st.materialIndex];if(W&&W.visible){let et=w(x,W,T,A);x.onBeforeShadow(i,x,E,_,O,et,st),i.renderBufferDirect(_,null,O,et,x,st),x.onAfterShadow(i,x,E,_,O,et,st)}}}else if(I.visible){let F=w(x,I,T,A);x.onBeforeShadow(i,x,E,_,O,F,null),i.renderBufferDirect(_,null,O,F,x,null),x.onAfterShadow(i,x,E,_,O,F,null)}}let L=x.children;for(let O=0,I=L.length;O<I;O++)v(L[O],E,_,T,A)}function M(x){x.target.removeEventListener("dispose",M);for(let _ in c){let T=c[_],A=x.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}function X_(i,t){function e(){let N=!1,lt=new De,$=null,dt=new De(0,0,0,0);return{setMask:function(yt){$!==yt&&!N&&(i.colorMask(yt,yt,yt,yt),$=yt)},setLocked:function(yt){N=yt},setClear:function(yt,K,_t,Et,ue){ue===!0&&(yt*=Et,K*=Et,_t*=Et),lt.set(yt,K,_t,Et),dt.equals(lt)===!1&&(i.clearColor(yt,K,_t,Et),dt.copy(lt))},reset:function(){N=!1,$=null,dt.set(-1,0,0,0)}}}function n(){let N=!1,lt=!1,$=null,dt=null,yt=null;return{setReversed:function(K){if(lt!==K){let _t=t.get("EXT_clip_control");K?_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.ZERO_TO_ONE_EXT):_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.NEGATIVE_ONE_TO_ONE_EXT),lt=K;let Et=yt;yt=null,this.setClear(Et)}},getReversed:function(){return lt},setTest:function(K){K?Q(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(K){$!==K&&!N&&(i.depthMask(K),$=K)},setFunc:function(K){if(lt&&(K=hf[K]),dt!==K){switch(K){case To:i.depthFunc(i.NEVER);break;case Eo:i.depthFunc(i.ALWAYS);break;case wo:i.depthFunc(i.LESS);break;case Ks:i.depthFunc(i.LEQUAL);break;case Ao:i.depthFunc(i.EQUAL);break;case Ro:i.depthFunc(i.GEQUAL);break;case Co:i.depthFunc(i.GREATER);break;case Po:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=K}},setLocked:function(K){N=K},setClear:function(K){yt!==K&&(yt=K,lt&&(K=1-K),i.clearDepth(K))},reset:function(){N=!1,$=null,dt=null,yt=null,lt=!1}}}function s(){let N=!1,lt=null,$=null,dt=null,yt=null,K=null,_t=null,Et=null,ue=null;return{setTest:function(pe){N||(pe?Q(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(pe){lt!==pe&&!N&&(i.stencilMask(pe),lt=pe)},setFunc:function(pe,xn,Tn){($!==pe||dt!==xn||yt!==Tn)&&(i.stencilFunc(pe,xn,Tn),$=pe,dt=xn,yt=Tn)},setOp:function(pe,xn,Tn){(K!==pe||_t!==xn||Et!==Tn)&&(i.stencilOp(pe,xn,Tn),K=pe,_t=xn,Et=Tn)},setLocked:function(pe){N=pe},setClear:function(pe){ue!==pe&&(i.clearStencil(pe),ue=pe)},reset:function(){N=!1,lt=null,$=null,dt=null,yt=null,K=null,_t=null,Et=null,ue=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],y=null,p=!1,m=null,S=null,w=null,v=null,M=null,x=null,E=null,_=new Wt(0,0,0),T=0,A=!1,C=null,L=null,O=null,I=null,F=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,st=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=st>=1):W.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=st>=2);let et=null,nt={},It=i.getParameter(i.SCISSOR_BOX),wt=i.getParameter(i.VIEWPORT),Yt=new De().fromArray(It),qt=new De().fromArray(wt);function ht(N,lt,$,dt){let yt=new Uint8Array(4),K=i.createTexture();i.bindTexture(N,K),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _t=0;_t<$;_t++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(lt+_t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return K}let V={};V[i.TEXTURE_2D]=ht(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(Ks),pt(!1),Mt(xh),Q(i.CULL_FACE),ct(ze);function Q(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function gt(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Dt(N,lt){return d[N]!==lt?(i.bindFramebuffer(N,lt),d[N]=lt,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=lt),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function Rt(N,lt){let $=g,dt=!1;if(N){$=f.get(lt),$===void 0&&($=[],f.set(lt,$));let yt=N.textures;if($.length!==yt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let K=0,_t=yt.length;K<_t;K++)$[K]=i.COLOR_ATTACHMENT0+K;$.length=yt.length,dt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,dt=!0);dt&&i.drawBuffers($)}function Gt(N){return y!==N?(i.useProgram(N),y=N,!0):!1}let ee={[Bn]:i.FUNC_ADD,[Dd]:i.FUNC_SUBTRACT,[Ud]:i.FUNC_REVERSE_SUBTRACT};ee[Nd]=i.MIN,ee[Fd]=i.MAX;let it={[xs]:i.ZERO,[Od]:i.ONE,[Bd]:i.SRC_COLOR,[yh]:i.SRC_ALPHA,[Gd]:i.SRC_ALPHA_SATURATE,[_a]:i.DST_COLOR,[xa]:i.DST_ALPHA,[kd]:i.ONE_MINUS_SRC_COLOR,[Mh]:i.ONE_MINUS_SRC_ALPHA,[Hd]:i.ONE_MINUS_DST_COLOR,[zd]:i.ONE_MINUS_DST_ALPHA,[Vd]:i.CONSTANT_COLOR,[Wd]:i.ONE_MINUS_CONSTANT_COLOR,[Xd]:i.CONSTANT_ALPHA,[qd]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(N,lt,$,dt,yt,K,_t,Et,ue,pe){if(N===ze){p===!0&&(gt(i.BLEND),p=!1);return}if(p===!1&&(Q(i.BLEND),p=!0),N!==rl){if(N!==m||pe!==A){if((S!==Bn||M!==Bn)&&(i.blendEquation(i.FUNC_ADD),S=Bn,M=Bn),pe)switch(N){case pr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gs:i.blendFunc(i.ONE,i.ONE);break;case _h:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Jt("WebGLState: Invalid blending: ",N);break}else switch(N){case pr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case _h:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vh:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",N);break}w=null,v=null,x=null,E=null,_.set(0,0,0),T=0,m=N,A=pe}return}yt=yt||lt,K=K||$,_t=_t||dt,(lt!==S||yt!==M)&&(i.blendEquationSeparate(ee[lt],ee[yt]),S=lt,M=yt),($!==w||dt!==v||K!==x||_t!==E)&&(i.blendFuncSeparate(it[$],it[dt],it[K],it[_t]),w=$,v=dt,x=K,E=_t),(Et.equals(_)===!1||ue!==T)&&(i.blendColor(Et.r,Et.g,Et.b,ue),_.copy(Et),T=ue),m=N,A=!1}function ft(N,lt){N.side===fn?gt(i.CULL_FACE):Q(i.CULL_FACE);let $=N.side===dn;lt&&($=!$),pt($),N.blending===pr&&N.transparent===!1?ct(ze):ct(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let dt=N.stencilWrite;o.setTest(dt),dt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ht(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function pt(N){C!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),C=N)}function Mt(N){N!==Pd?(Q(i.CULL_FACE),N!==L&&(N===xh?i.cullFace(i.BACK):N===Id?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),L=N}function zt(N){N!==O&&(G&&i.lineWidth(N),O=N)}function Ht(N,lt,$){N?(Q(i.POLYGON_OFFSET_FILL),(I!==lt||F!==$)&&(I=lt,F=$,a.getReversed()&&(lt=-lt),i.polygonOffset(lt,$))):gt(i.POLYGON_OFFSET_FILL)}function Vt(N){N?Q(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function $t(N){N===void 0&&(N=i.TEXTURE0+k-1),et!==N&&(i.activeTexture(N),et=N)}function B(N,lt,$){$===void 0&&(et===null?$=i.TEXTURE0+k-1:$=et);let dt=nt[$];dt===void 0&&(dt={type:void 0,texture:void 0},nt[$]=dt),(dt.type!==N||dt.texture!==lt)&&(et!==$&&(i.activeTexture($),et=$),i.bindTexture(N,lt||V[N]),dt.type=N,dt.texture=lt)}function ae(){let N=nt[et];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Kt(){try{i.compressedTexImage2D(...arguments)}catch(N){Jt("WebGLState:",N)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(N){Jt("WebGLState:",N)}}function b(){try{i.texSubImage2D(...arguments)}catch(N){Jt("WebGLState:",N)}}function H(){try{i.texSubImage3D(...arguments)}catch(N){Jt("WebGLState:",N)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Jt("WebGLState:",N)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Jt("WebGLState:",N)}}function xt(){try{i.texStorage2D(...arguments)}catch(N){Jt("WebGLState:",N)}}function St(){try{i.texStorage3D(...arguments)}catch(N){Jt("WebGLState:",N)}}function tt(){try{i.texImage2D(...arguments)}catch(N){Jt("WebGLState:",N)}}function rt(){try{i.texImage3D(...arguments)}catch(N){Jt("WebGLState:",N)}}function At(N){return u[N]!==void 0?u[N]:i.getParameter(N)}function Ot(N,lt){u[N]!==lt&&(i.pixelStorei(N,lt),u[N]=lt)}function bt(N){Yt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Yt.copy(N))}function Tt(N){qt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),qt.copy(N))}function Ut(N,lt){let $=c.get(lt);$===void 0&&($=new WeakMap,c.set(lt,$));let dt=$.get(N);dt===void 0&&(dt=i.getUniformBlockIndex(lt,N.name),$.set(N,dt))}function Z(N,lt){let dt=c.get(lt).get(N);l.get(lt)!==dt&&(i.uniformBlockBinding(lt,dt,N.__bindingPointIndex),l.set(lt,dt))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},et=null,nt={},d={},f=new WeakMap,g=[],y=null,p=!1,m=null,S=null,w=null,v=null,M=null,x=null,E=null,_=new Wt(0,0,0),T=0,A=!1,C=null,L=null,O=null,I=null,F=null,Yt.set(0,0,i.canvas.width,i.canvas.height),qt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:gt,bindFramebuffer:Dt,drawBuffers:Rt,useProgram:Gt,setBlending:ct,setMaterial:ft,setFlipSided:pt,setCullFace:Mt,setLineWidth:zt,setPolygonOffset:Ht,setScissorTest:Vt,activeTexture:$t,bindTexture:B,unbindTexture:ae,compressedTexImage2D:Kt,compressedTexImage3D:P,texImage2D:tt,texImage3D:rt,pixelStorei:Ot,getParameter:At,updateUBOMapping:Ut,uniformBlockBinding:Z,texStorage2D:xt,texStorage3D:St,texSubImage2D:b,texSubImage3D:H,compressedTexSubImage2D:X,compressedTexSubImage3D:j,scissor:bt,viewport:Tt,reset:at}}function q_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,b){return g?new OffscreenCanvas(P,b):Vr("canvas")}function p(P,b,H){let X=1,j=Kt(P);if((j.width>H||j.height>H)&&(X=H/Math.max(j.width,j.height)),X<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let xt=Math.floor(X*j.width),St=Math.floor(X*j.height);d===void 0&&(d=y(xt,St));let tt=b?y(xt,St):d;return tt.width=xt,tt.height=St,tt.getContext("2d").drawImage(P,0,0,xt,St),Zt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+xt+"x"+St+")."),tt}else return"data"in P&&Zt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),P;return P}function m(P){return P.generateMipmaps}function S(P){i.generateMipmap(P)}function w(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(P,b,H,X,j,xt=!1){if(P!==null){if(i[P]!==void 0)return i[P];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let St;X&&(St=t.get("EXT_texture_norm16"),St||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=b;if(b===i.RED&&(H===i.FLOAT&&(tt=i.R32F),H===i.HALF_FLOAT&&(tt=i.R16F),H===i.UNSIGNED_BYTE&&(tt=i.R8),H===i.UNSIGNED_SHORT&&St&&(tt=St.R16_EXT),H===i.SHORT&&St&&(tt=St.R16_SNORM_EXT)),b===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.R8UI),H===i.UNSIGNED_SHORT&&(tt=i.R16UI),H===i.UNSIGNED_INT&&(tt=i.R32UI),H===i.BYTE&&(tt=i.R8I),H===i.SHORT&&(tt=i.R16I),H===i.INT&&(tt=i.R32I)),b===i.RG&&(H===i.FLOAT&&(tt=i.RG32F),H===i.HALF_FLOAT&&(tt=i.RG16F),H===i.UNSIGNED_BYTE&&(tt=i.RG8),H===i.UNSIGNED_SHORT&&St&&(tt=St.RG16_EXT),H===i.SHORT&&St&&(tt=St.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RG8UI),H===i.UNSIGNED_SHORT&&(tt=i.RG16UI),H===i.UNSIGNED_INT&&(tt=i.RG32UI),H===i.BYTE&&(tt=i.RG8I),H===i.SHORT&&(tt=i.RG16I),H===i.INT&&(tt=i.RG32I)),b===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),H===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),H===i.UNSIGNED_INT&&(tt=i.RGB32UI),H===i.BYTE&&(tt=i.RGB8I),H===i.SHORT&&(tt=i.RGB16I),H===i.INT&&(tt=i.RGB32I)),b===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),H===i.UNSIGNED_INT&&(tt=i.RGBA32UI),H===i.BYTE&&(tt=i.RGBA8I),H===i.SHORT&&(tt=i.RGBA16I),H===i.INT&&(tt=i.RGBA32I)),b===i.RGB&&(H===i.UNSIGNED_SHORT&&St&&(tt=St.RGB16_EXT),H===i.SHORT&&St&&(tt=St.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),b===i.RGBA){let rt=xt?Gr:he.getTransfer(j);H===i.FLOAT&&(tt=i.RGBA32F),H===i.HALF_FLOAT&&(tt=i.RGBA16F),H===i.UNSIGNED_BYTE&&(tt=rt===ye?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&St&&(tt=St.RGBA16_EXT),H===i.SHORT&&St&&(tt=St.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function M(P,b){let H;return P?b===null||b===Yn||b===Qi?H=i.DEPTH24_STENCIL8:b===Zn?H=i.DEPTH32F_STENCIL8:b===mr&&(H=i.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Yn||b===Qi?H=i.DEPTH_COMPONENT24:b===Zn?H=i.DEPTH_COMPONENT32F:b===mr&&(H=i.DEPTH_COMPONENT16),H}function x(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Le&&P.minFilter!==Qe?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function E(P){let b=P.target;b.removeEventListener("dispose",E),T(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&u.delete(b)}function _(P){let b=P.target;b.removeEventListener("dispose",_),C(b)}function T(P){let b=n.get(P);if(b.__webglInit===void 0)return;let H=P.source,X=f.get(H);if(X){let j=X[b.__cacheKey];j.usedTimes--,j.usedTimes===0&&A(P),Object.keys(X).length===0&&f.delete(H)}n.remove(P)}function A(P){let b=n.get(P);i.deleteTexture(b.__webglTexture);let H=P.source,X=f.get(H);delete X[b.__cacheKey],a.memory.textures--}function C(P){let b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(b.__webglFramebuffer[X]))for(let j=0;j<b.__webglFramebuffer[X].length;j++)i.deleteFramebuffer(b.__webglFramebuffer[X][j]);else i.deleteFramebuffer(b.__webglFramebuffer[X]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[X])}else{if(Array.isArray(b.__webglFramebuffer))for(let X=0;X<b.__webglFramebuffer.length;X++)i.deleteFramebuffer(b.__webglFramebuffer[X]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let X=0;X<b.__webglColorRenderbuffer.length;X++)b.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[X]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let H=P.textures;for(let X=0,j=H.length;X<j;X++){let xt=n.get(H[X]);xt.__webglTexture&&(i.deleteTexture(xt.__webglTexture),a.memory.textures--),n.remove(H[X])}n.remove(P)}let L=0;function O(){L=0}function I(){return L}function F(P){L=P}function k(){let P=L;return P>=s.maxTextures&&Zt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,P}function G(P){let b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function st(P,b){let H=n.get(P);if(P.isVideoTexture&&B(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){let X=P.image;if(X===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(H,P,b);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+b)}function W(P,b){let H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){gt(H,P,b);return}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+b)}function et(P,b){let H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){gt(H,P,b);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+b)}function nt(P,b){let H=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&H.__version!==P.version){Dt(H,P,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+b)}let It={[yn]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[Io]:i.MIRRORED_REPEAT},wt={[Le]:i.NEAREST,[$d]:i.NEAREST_MIPMAP_NEAREST,[Ma]:i.NEAREST_MIPMAP_LINEAR,[Qe]:i.LINEAR,[ll]:i.LINEAR_MIPMAP_NEAREST,[ji]:i.LINEAR_MIPMAP_LINEAR},Yt={[Qd]:i.NEVER,[rf]:i.ALWAYS,[tf]:i.LESS,[Xl]:i.LEQUAL,[ef]:i.EQUAL,[ql]:i.GEQUAL,[nf]:i.GREATER,[sf]:i.NOTEQUAL};function qt(P,b){if(b.type===Zn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Qe||b.magFilter===ll||b.magFilter===Ma||b.magFilter===ji||b.minFilter===Qe||b.minFilter===ll||b.minFilter===Ma||b.minFilter===ji)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,It[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,It[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,It[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,wt[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,wt[b.minFilter]),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Yt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Le||b.minFilter!==Ma&&b.minFilter!==ji||b.type===Zn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ht(P,b){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",E));let X=b.source,j=f.get(X);j===void 0&&(j={},f.set(X,j));let xt=G(b);if(xt!==P.__cacheKey){j[xt]===void 0&&(j[xt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),j[xt].usedTimes++;let St=j[P.__cacheKey];St!==void 0&&(j[P.__cacheKey].usedTimes--,St.usedTimes===0&&A(b)),P.__cacheKey=xt,P.__webglTexture=j[xt].texture}return H}function V(P,b,H){return Math.floor(Math.floor(P/H)/b)}function Q(P,b,H,X){let xt=P.updateRanges;if(xt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,H,X,b.data);else{xt.sort((Ot,bt)=>Ot.start-bt.start);let St=0;for(let Ot=1;Ot<xt.length;Ot++){let bt=xt[St],Tt=xt[Ot],Ut=bt.start+bt.count,Z=V(Tt.start,b.width,4),at=V(bt.start,b.width,4);Tt.start<=Ut+1&&Z===at&&V(Tt.start+Tt.count-1,b.width,4)===Z?bt.count=Math.max(bt.count,Tt.start+Tt.count-bt.start):(++St,xt[St]=Tt)}xt.length=St+1;let tt=e.getParameter(i.UNPACK_ROW_LENGTH),rt=e.getParameter(i.UNPACK_SKIP_PIXELS),At=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let Ot=0,bt=xt.length;Ot<bt;Ot++){let Tt=xt[Ot],Ut=Math.floor(Tt.start/4),Z=Math.ceil(Tt.count/4),at=Ut%b.width,N=Math.floor(Ut/b.width),lt=Z,$=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,at,N,lt,$,H,X,b.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,tt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,At)}}function gt(P,b,H){let X=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(X=i.TEXTURE_3D);let j=ht(P,b),xt=b.source;e.bindTexture(X,P.__webglTexture,i.TEXTURE0+H);let St=n.get(xt);if(xt.version!==St.__version||j===!0){if(e.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let $=he.getPrimaries(he.workingColorSpace),dt=b.colorSpace===Ai?null:he.getPrimaries(b.colorSpace),yt=b.colorSpace===Ai||$===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let rt=p(b.image,!1,s.maxTextureSize);rt=ae(b,rt);let At=r.convert(b.format,b.colorSpace),Ot=r.convert(b.type),bt=v(b.internalFormat,At,Ot,b.normalized,b.colorSpace,b.isVideoTexture);qt(X,b);let Tt,Ut=b.mipmaps,Z=b.isVideoTexture!==!0,at=St.__version===void 0||j===!0,N=xt.dataReady,lt=x(b,rt);if(b.isDepthTexture)bt=M(b.format===ci,b.type),at&&(Z?e.texStorage2D(i.TEXTURE_2D,1,bt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,bt,rt.width,rt.height,0,At,Ot,null));else if(b.isDataTexture)if(Ut.length>0){Z&&at&&e.texStorage2D(i.TEXTURE_2D,lt,bt,Ut[0].width,Ut[0].height);for(let $=0,dt=Ut.length;$<dt;$++)Tt=Ut[$],Z?N&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Tt.width,Tt.height,At,Ot,Tt.data):e.texImage2D(i.TEXTURE_2D,$,bt,Tt.width,Tt.height,0,At,Ot,Tt.data);b.generateMipmaps=!1}else Z?(at&&e.texStorage2D(i.TEXTURE_2D,lt,bt,rt.width,rt.height),N&&Q(b,rt,At,Ot)):e.texImage2D(i.TEXTURE_2D,0,bt,rt.width,rt.height,0,At,Ot,rt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Z&&at&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,bt,Ut[0].width,Ut[0].height,rt.depth);for(let $=0,dt=Ut.length;$<dt;$++)if(Tt=Ut[$],b.format!==Mn)if(At!==null)if(Z){if(N)if(b.layerUpdates.size>0){let yt=Wh(Tt.width,Tt.height,b.format,b.type);for(let K of b.layerUpdates){let _t=Tt.data.subarray(K*yt/Tt.data.BYTES_PER_ELEMENT,(K+1)*yt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,K,Tt.width,Tt.height,1,At,_t)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Tt.width,Tt.height,rt.depth,At,Tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,bt,Tt.width,Tt.height,rt.depth,0,Tt.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Z?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Tt.width,Tt.height,rt.depth,At,Ot,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,bt,Tt.width,Tt.height,rt.depth,0,At,Ot,Tt.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Z&&at&&e.texStorage2D(i.TEXTURE_2D,lt,bt,Ut[0].width,Ut[0].height);for(let $=0,dt=Ut.length;$<dt;$++)Tt=Ut[$],b.format!==Mn?At!==null?Z?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Tt.width,Tt.height,At,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,$,bt,Tt.width,Tt.height,0,Tt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?N&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Tt.width,Tt.height,At,Ot,Tt.data):e.texImage2D(i.TEXTURE_2D,$,bt,Tt.width,Tt.height,0,At,Ot,Tt.data)}else if(b.isDataArrayTexture)if(Z){if(at&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,bt,rt.width,rt.height,rt.depth),N)if(b.layerUpdates.size>0){let $=Wh(rt.width,rt.height,b.format,b.type);for(let dt of b.layerUpdates){let yt=rt.data.subarray(dt*$/rt.data.BYTES_PER_ELEMENT,(dt+1)*$/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,dt,rt.width,rt.height,1,At,Ot,yt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,At,Ot,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,rt.width,rt.height,rt.depth,0,At,Ot,rt.data);else if(b.isData3DTexture)Z?(at&&e.texStorage3D(i.TEXTURE_3D,lt,bt,rt.width,rt.height,rt.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,At,Ot,rt.data)):e.texImage3D(i.TEXTURE_3D,0,bt,rt.width,rt.height,rt.depth,0,At,Ot,rt.data);else if(b.isFramebufferTexture){if(at)if(Z)e.texStorage2D(i.TEXTURE_2D,lt,bt,rt.width,rt.height);else{let $=rt.width,dt=rt.height;for(let yt=0;yt<lt;yt++)e.texImage2D(i.TEXTURE_2D,yt,bt,$,dt,0,At,Ot,null),$>>=1,dt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),rt.parentNode!==$){$.appendChild(rt),u.add(b),$.onpaint=dt=>{let yt=dt.changedElements;for(let K of u)yt.includes(K.image)&&(K.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,rt);else{let yt=i.RGBA,K=i.RGBA,_t=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,yt,K,_t,rt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(Z&&at){let $=Kt(Ut[0]);e.texStorage2D(i.TEXTURE_2D,lt,bt,$.width,$.height)}for(let $=0,dt=Ut.length;$<dt;$++)Tt=Ut[$],Z?N&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,At,Ot,Tt):e.texImage2D(i.TEXTURE_2D,$,bt,At,Ot,Tt);b.generateMipmaps=!1}else if(Z){if(at){let $=Kt(rt);e.texStorage2D(i.TEXTURE_2D,lt,bt,$.width,$.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Ot,rt)}else e.texImage2D(i.TEXTURE_2D,0,bt,At,Ot,rt);m(b)&&S(X),St.__version=xt.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Dt(P,b,H){if(b.image.length!==6)return;let X=ht(P,b),j=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+H);let xt=n.get(j);if(j.version!==xt.__version||X===!0){e.activeTexture(i.TEXTURE0+H);let St=he.getPrimaries(he.workingColorSpace),tt=b.colorSpace===Ai?null:he.getPrimaries(b.colorSpace),rt=b.colorSpace===Ai||St===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let At=b.isCompressedTexture||b.image[0].isCompressedTexture,Ot=b.image[0]&&b.image[0].isDataTexture,bt=[];for(let K=0;K<6;K++)!At&&!Ot?bt[K]=p(b.image[K],!0,s.maxCubemapSize):bt[K]=Ot?b.image[K].image:b.image[K],bt[K]=ae(b,bt[K]);let Tt=bt[0],Ut=r.convert(b.format,b.colorSpace),Z=r.convert(b.type),at=v(b.internalFormat,Ut,Z,b.normalized,b.colorSpace),N=b.isVideoTexture!==!0,lt=xt.__version===void 0||X===!0,$=j.dataReady,dt=x(b,Tt);qt(i.TEXTURE_CUBE_MAP,b);let yt;if(At){N&&lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,at,Tt.width,Tt.height);for(let K=0;K<6;K++){yt=bt[K].mipmaps;for(let _t=0;_t<yt.length;_t++){let Et=yt[_t];b.format!==Mn?Ut!==null?N?$&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,0,0,Et.width,Et.height,Ut,Et.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,at,Et.width,Et.height,0,Et.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,0,0,Et.width,Et.height,Ut,Z,Et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,at,Et.width,Et.height,0,Ut,Z,Et.data)}}}else{if(yt=b.mipmaps,N&&lt){yt.length>0&&dt++;let K=Kt(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,at,K.width,K.height)}for(let K=0;K<6;K++)if(Ot){N?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,bt[K].width,bt[K].height,Ut,Z,bt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,at,bt[K].width,bt[K].height,0,Ut,Z,bt[K].data);for(let _t=0;_t<yt.length;_t++){let ue=yt[_t].image[K].image;N?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,0,0,ue.width,ue.height,Ut,Z,ue.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,at,ue.width,ue.height,0,Ut,Z,ue.data)}}else{N?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ut,Z,bt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,at,Ut,Z,bt[K]);for(let _t=0;_t<yt.length;_t++){let Et=yt[_t];N?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,0,0,Ut,Z,Et.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,at,Ut,Z,Et.image[K])}}}m(b)&&S(i.TEXTURE_CUBE_MAP),xt.__version=j.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Rt(P,b,H,X,j,xt){let St=r.convert(H.format,H.colorSpace),tt=r.convert(H.type),rt=v(H.internalFormat,St,tt,H.normalized,H.colorSpace),At=n.get(b),Ot=n.get(H);if(Ot.__renderTarget=b,!At.__hasExternalTextures){let bt=Math.max(1,b.width>>xt),Tt=Math.max(1,b.height>>xt);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,xt,rt,bt,Tt,b.depth,0,St,tt,null):e.texImage2D(j,xt,rt,bt,Tt,0,St,tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),$t(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,j,Ot.__webglTexture,0,Vt(b)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,j,Ot.__webglTexture,xt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(P,b,H){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer){let X=b.depthTexture,j=X&&X.isDepthTexture?X.type:null,xt=M(b.stencilBuffer,j),St=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;$t(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt(b),xt,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt(b),xt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,xt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,P)}else{let X=b.textures;for(let j=0;j<X.length;j++){let xt=X[j],St=r.convert(xt.format,xt.colorSpace),tt=r.convert(xt.type),rt=v(xt.internalFormat,St,tt,xt.normalized,xt.colorSpace);$t(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt(b),rt,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt(b),rt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,rt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ee(P,b,H){let X=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(b.depthTexture);if(j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),X){if(j.__webglInit===void 0&&(j.__webglInit=!0,b.depthTexture.addEventListener("dispose",E)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),qt(i.TEXTURE_CUBE_MAP,b.depthTexture);let At=r.convert(b.depthTexture.format),Ot=r.convert(b.depthTexture.type),bt;b.depthTexture.format===ni?bt=i.DEPTH_COMPONENT24:b.depthTexture.format===ci&&(bt=i.DEPTH24_STENCIL8);for(let Tt=0;Tt<6;Tt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,bt,b.width,b.height,0,At,Ot,null)}}else st(b.depthTexture,0);let xt=j.__webglTexture,St=Vt(b),tt=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,rt=b.depthTexture.format===ci?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===ni)$t(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,tt,xt,0,St):i.framebufferTexture2D(i.FRAMEBUFFER,rt,tt,xt,0);else if(b.depthTexture.format===ci)$t(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,tt,xt,0,St):i.framebufferTexture2D(i.FRAMEBUFFER,rt,tt,xt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(P){let b=n.get(P),H=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){let X=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),X){let j=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,X.removeEventListener("dispose",j)};X.addEventListener("dispose",j),b.__depthDisposeCallback=j}b.__boundDepthTexture=X}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(H)for(let X=0;X<6;X++)ee(b.__webglFramebuffer[X],P,X);else{let X=P.texture.mipmaps;X&&X.length>0?ee(b.__webglFramebuffer[0],P,0):ee(b.__webglFramebuffer,P,0)}else if(H){b.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[X]),b.__webglDepthbuffer[X]===void 0)b.__webglDepthbuffer[X]=i.createRenderbuffer(),Gt(b.__webglDepthbuffer[X],P,!1);else{let j=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=b.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,xt)}}else{let X=P.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Gt(b.__webglDepthbuffer,P,!1);else{let j=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,xt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(P,b,H){let X=n.get(P);b!==void 0&&Rt(X.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&it(P)}function ft(P){let b=P.texture,H=n.get(P),X=n.get(b);P.addEventListener("dispose",_);let j=P.textures,xt=P.isWebGLCubeRenderTarget===!0,St=j.length>1;if(St||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=b.version,a.memory.textures++),xt){H.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[tt]=[];for(let rt=0;rt<b.mipmaps.length;rt++)H.__webglFramebuffer[tt][rt]=i.createFramebuffer()}else H.__webglFramebuffer[tt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let tt=0;tt<b.mipmaps.length;tt++)H.__webglFramebuffer[tt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(St)for(let tt=0,rt=j.length;tt<rt;tt++){let At=n.get(j[tt]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&$t(P)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let tt=0;tt<j.length;tt++){let rt=j[tt];H.__webglColorRenderbuffer[tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[tt]);let At=r.convert(rt.format,rt.colorSpace),Ot=r.convert(rt.type),bt=v(rt.internalFormat,At,Ot,rt.normalized,rt.colorSpace,P.isXRRenderTarget===!0),Tt=Vt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,bt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,H.__webglColorRenderbuffer[tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Gt(H.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xt){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),qt(i.TEXTURE_CUBE_MAP,b);for(let tt=0;tt<6;tt++)if(b.mipmaps&&b.mipmaps.length>0)for(let rt=0;rt<b.mipmaps.length;rt++)Rt(H.__webglFramebuffer[tt][rt],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,rt);else Rt(H.__webglFramebuffer[tt],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);m(b)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let tt=0,rt=j.length;tt<rt;tt++){let At=j[tt],Ot=n.get(At),bt=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(bt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,Ot.__webglTexture),qt(bt,At),Rt(H.__webglFramebuffer,P,At,i.COLOR_ATTACHMENT0+tt,bt,0),m(At)&&S(bt)}e.unbindTexture()}else{let tt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(tt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,X.__webglTexture),qt(tt,b),b.mipmaps&&b.mipmaps.length>0)for(let rt=0;rt<b.mipmaps.length;rt++)Rt(H.__webglFramebuffer[rt],P,b,i.COLOR_ATTACHMENT0,tt,rt);else Rt(H.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,tt,0);m(b)&&S(tt),e.unbindTexture()}P.depthBuffer&&it(P)}function pt(P){let b=P.textures;for(let H=0,X=b.length;H<X;H++){let j=b[H];if(m(j)){let xt=w(P),St=n.get(j).__webglTexture;e.bindTexture(xt,St),S(xt),e.unbindTexture()}}}let Mt=[],zt=[];function Ht(P){if(P.samples>0){if($t(P)===!1){let b=P.textures,H=P.width,X=P.height,j=i.COLOR_BUFFER_BIT,xt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(P),tt=b.length>1;if(tt)for(let At=0;At<b.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);let rt=P.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let At=0;At<b.length;At++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[At]);let Ot=n.get(b[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ot,0)}i.blitFramebuffer(0,0,H,X,0,0,H,X,j,i.NEAREST),l===!0&&(Mt.length=0,zt.length=0,Mt.push(i.COLOR_ATTACHMENT0+At),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(Mt.push(xt),zt.push(xt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,zt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),tt)for(let At=0;At<b.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,St.__webglColorRenderbuffer[At]);let Ot=n.get(b[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,Ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let b=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Vt(P){return Math.min(s.maxSamples,P.samples)}function $t(P){let b=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function B(P){let b=a.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function ae(P,b){let H=P.colorSpace,X=P.format,j=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==Hr&&H!==Ai&&(he.getTransfer(H)===ye?(X!==Mn||j!==je)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",H)),b}function Kt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.getTextureUnits=I,this.setTextureUnits=F,this.setTexture2D=st,this.setTexture2DArray=W,this.setTexture3D=et,this.setTextureCube=nt,this.rebindTextures=ct,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=$t,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Y_(i,t){function e(n,s=Ai){let r,a=he.getTransfer(s);if(n===je)return i.UNSIGNED_BYTE;if(n===hl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ul)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ph)return i.BYTE;if(n===Ih)return i.SHORT;if(n===mr)return i.UNSIGNED_SHORT;if(n===cl)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===Zn)return i.FLOAT;if(n===Oe)return i.HALF_FLOAT;if(n===Uh)return i.ALPHA;if(n===Nh)return i.RGB;if(n===Mn)return i.RGBA;if(n===ni)return i.DEPTH_COMPONENT;if(n===ci)return i.DEPTH_STENCIL;if(n===Fh)return i.RED;if(n===dl)return i.RED_INTEGER;if(n===ts)return i.RG;if(n===fl)return i.RG_INTEGER;if(n===pl)return i.RGBA_INTEGER;if(n===Sa||n===ba||n===Ta||n===Ea)if(a===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ml||n===gl||n===xl||n===_l)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_l)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vl||n===yl||n===Ml||n===Sl||n===bl||n===wa||n===Tl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vl||n===yl)return a===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ml)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Sl)return r.COMPRESSED_R11_EAC;if(n===bl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===wa)return r.COMPRESSED_RG11_EAC;if(n===Tl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===El||n===wl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Dl||n===Ul||n===Nl||n===Fl||n===Ol||n===Bl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===El)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Al)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Il)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ll)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ul)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ol)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kl||n===zl||n===Hl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===kl)return a===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gl||n===Vl||n===Aa||n===Wl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Z_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$_=`
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

}`,cu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new jr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Se({vertexShader:Z_,fragmentShader:$_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _e(new tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hu=class extends ii{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,y=typeof XRWebGLBinding<"u",p=new cu,m={},S=e.getContextAttributes(),w=null,v=null,M=[],x=[],E=new ot,_=null,T=null,A=new Je;A.viewport=new De;let C=new Je;C.viewport=new De;let L=[A,C],O=new il,I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Q=M[V];return Q===void 0&&(Q=new nr,M[V]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(V){let Q=M[V];return Q===void 0&&(Q=new nr,M[V]=Q),Q.getGripSpace()},this.getHand=function(V){let Q=M[V];return Q===void 0&&(Q=new nr,M[V]=Q),Q.getHandSpace()};function k(V){let Q=x.indexOf(V.inputSource);if(Q===-1)return;let gt=M[Q];gt!==void 0&&(gt.update(V.inputSource,V.frame,c||a),gt.dispatchEvent({type:V.type,data:V.inputSource}))}function G(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",st);for(let V=0;V<M.length;V++){let Q=x[V];Q!==null&&(x[V]=null,M[V].disconnect(Q))}I=null,F=null,p.reset();for(let V in m)delete m[V];if(t.setRenderTarget(w),f=null,d=null,u=null,s=null,v=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(E.width,E.height,!1),T!==null){let V=T.camera;V.fov=T.fov,V.zoom=T.zoom,V.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",G),s.addEventListener("inputsourceschange",st),S.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(E),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Dt=null,Rt=null;S.depth&&(Rt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=S.stencil?ci:ni,Dt=S.stencil?Qi:Yn);let Gt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Gt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Ne(d.textureWidth,d.textureHeight,{format:Mn,type:je,depthTexture:new ai(d.textureWidth,d.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let gt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ne(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:je,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ht.setContext(s),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function st(V){for(let Q=0;Q<V.removed.length;Q++){let gt=V.removed[Q],Dt=x.indexOf(gt);Dt>=0&&(x[Dt]=null,M[Dt].disconnect(gt))}for(let Q=0;Q<V.added.length;Q++){let gt=V.added[Q],Dt=x.indexOf(gt);if(Dt===-1){for(let Gt=0;Gt<M.length;Gt++)if(Gt>=x.length){x.push(gt),Dt=Gt;break}else if(x[Gt]===null){x[Gt]=gt,Dt=Gt;break}if(Dt===-1)break}let Rt=M[Dt];Rt&&Rt.connect(gt)}}let W=new U,et=new U;function nt(V,Q,gt){W.setFromMatrixPosition(Q.matrixWorld),et.setFromMatrixPosition(gt.matrixWorld);let Dt=W.distanceTo(et),Rt=Q.projectionMatrix.elements,Gt=gt.projectionMatrix.elements,ee=Rt[14]/(Rt[10]-1),it=Rt[14]/(Rt[10]+1),ct=(Rt[9]+1)/Rt[5],ft=(Rt[9]-1)/Rt[5],pt=(Rt[8]-1)/Rt[0],Mt=(Gt[8]+1)/Gt[0],zt=ee*pt,Ht=ee*Mt,Vt=Dt/(-pt+Mt),$t=Vt*-pt;if(Q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX($t),V.translateZ(Vt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Rt[10]===-1)V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let B=ee+Vt,ae=it+Vt,Kt=zt-$t,P=Ht+(Dt-$t),b=ct*it/ae*B,H=ft*it/ae*B;V.projectionMatrix.makePerspective(Kt,P,b,H,B,ae),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function It(V,Q){Q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let Q=V.near,gt=V.far;p.texture!==null&&(p.depthNear>0&&(Q=p.depthNear),p.depthFar>0&&(gt=p.depthFar)),O.near=C.near=A.near=Q,O.far=C.far=A.far=gt,(I!==O.near||F!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),I=O.near,F=O.far),O.layers.mask=V.layers.mask|6,A.layers.mask=O.layers.mask&-5,C.layers.mask=O.layers.mask&-3;let Dt=V.parent,Rt=O.cameras;It(O,Dt);for(let Gt=0;Gt<Rt.length;Gt++)It(Rt[Gt],Dt);Rt.length===2?nt(O,A,C):O.projectionMatrix.copy(A.projectionMatrix),T===null&&V.isPerspectiveCamera&&(T={camera:V,fov:V.fov,zoom:V.zoom}),wt(V,O,Dt)};function wt(V,Q,gt){gt===null?V.matrix.copy(Q.matrixWorld):(V.matrix.copy(gt.matrixWorld),V.matrix.invert(),V.matrix.multiply(Q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Wr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(V){return m[V]};let Yt=null;function qt(V,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){let gt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Dt=!1;gt.length!==O.cameras.length&&(O.cameras.length=0,Dt=!0);for(let it=0;it<gt.length;it++){let ct=gt[it],ft=null;if(f!==null)ft=f.getViewport(ct);else{let Mt=u.getViewSubImage(d,ct);ft=Mt.viewport,it===0&&(t.setRenderTargetTextures(v,Mt.colorTexture,Mt.depthStencilTexture),t.setRenderTarget(v))}let pt=L[it];pt===void 0&&(pt=new Je,pt.layers.enable(it),pt.viewport=new De,L[it]=pt),pt.matrix.fromArray(ct.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(ct.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(ft.x,ft.y,ft.width,ft.height),it===0&&(O.matrix.copy(pt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Dt===!0&&O.cameras.push(pt)}let Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let it=u.getDepthInformation(gt[0]);it&&it.isValid&&it.texture&&p.init(it,s.renderState)}if(Rt&&Rt.includes("camera-access")&&y){t.state.unbindTexture(),u=n.getBinding();for(let it=0;it<gt.length;it++){let ct=gt[it].camera;if(ct){let ft=m[ct];ft||(ft=new jr,m[ct]=ft);let pt=u.getCameraImage(ct);ft.sourceTexture=pt}}}}for(let gt=0;gt<M.length;gt++){let Dt=x[gt],Rt=M[gt];Dt!==null&&Rt!==void 0&&Rt.update(Dt,Q,c||a)}Yt&&Yt(V,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let ht=new kf;ht.setAnimationLoop(qt),this.setAnimationLoop=function(V){Yt=V},this.dispose=function(){}}},J_=new le,Xf=new jt;Xf.set(-1,0,0,0,1,0,0,0,1);function K_(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Hh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,w,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,S,w):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===dn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===dn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let S=t.get(m),w=S.envMap,v=S.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(J_.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Xf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=w*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===dn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let S=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function j_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let x=M.program;n.uniformBlockBinding(v,x)}function c(v,M){let x=s[v.id];x===void 0&&(p(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",S));let E=M.program;n.updateUBOMapping(v,E);let _=t.render.frame;r[v.id]!==_&&(d(v),r[v.id]=_)}function h(v){let M=u();v.__bindingPointIndex=M;let x=i.createBuffer(),E=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,E,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let M=s[v.id],x=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let _=0,T=x.length;_<T;_++){let A=x[_];if(Array.isArray(A))for(let C=0,L=A.length;C<L;C++)f(A[C],_,C,E);else f(A,_,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,M,x,E){if(y(v,M,x,E)===!0){let _=v.__offset,T=v.value;if(Array.isArray(T)){let A=0;for(let C=0;C<T.length;C++){let L=T[C],O=m(L);g(L,v.__data,A),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(A+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function g(v,M,x){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,x)}function y(v,M,x,E){let _=v.value,T=M+"_"+x;if(E[T]===void 0)return typeof _=="number"||typeof _=="boolean"?E[T]=_:ArrayBuffer.isView(_)?E[T]=_.slice():E[T]=_.clone(),!0;{let A=E[T];if(typeof _=="number"||typeof _=="boolean"){if(A!==_)return E[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(A.equals(_)===!1)return A.copy(_),!0}}return!1}function p(v){let M=v.uniforms,x=0,E=16;for(let T=0,A=M.length;T<A;T++){let C=Array.isArray(M[T])?M[T]:[M[T]];for(let L=0,O=C.length;L<O;L++){let I=C[L],F=Array.isArray(I.value)?I.value:[I.value];for(let k=0,G=F.length;k<G;k++){let st=F[k],W=m(st),et=x%E,nt=et%W.boundary,It=et+nt;x+=nt,It!==0&&E-It<W.storage&&(x+=E-It),I.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=W.storage}}}let _=x%E;return _>0&&(x+=E-_),v.__size=x,v.__cache={},this}function m(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",v),M}function S(v){let M=v.target;M.removeEventListener("dispose",S);let x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function w(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}var Q_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hi=null;function tv(){return hi===null&&(hi=new Xi(Q_,16,16,ts,Oe),hi.name="DFG_LUT",hi.minFilter=Qe,hi.magFilter=Qe,hi.wrapS=ti,hi.wrapT=ti,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}var Jl=class{constructor(t={}){let{canvas:e=of(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=je}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=f,p=new Set([pl,fl,dl]),m=new Set([je,Yn,mr,Qi,hl,ul]),S=new Uint32Array(4),w=new Int32Array(4),v=new U,M=null,x=null,E=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,C=!1,L=null,O=null,I=null,F=null;this._outputColorSpace=Xe;let k=0,G=0,st=null,W=-1,et=null,nt=new De,It=new De,wt=null,Yt=new Wt(0),qt=0,ht=e.width,V=e.height,Q=1,gt=null,Dt=null,Rt=new De(0,0,ht,V),Gt=new De(0,0,ht,V),ee=!1,it=new rr,ct=!1,ft=!1,pt=new le,Mt=new U,zt=new De,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vt=!1;function $t(){return st===null?Q:1}let B=n;function ae(R,z){return e.getContext(R,z)}let Kt,P,b,H,X,j,xt,St,tt,rt,At,Ot,bt,Tt,Ut,Z,at,N,lt,$,dt,yt,K;try{let R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ue,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",xn,!1),B===null){let z="webgl2";if(B=ae(z,R),B===null)throw ae(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}_t()}catch(R){throw e.removeEventListener("webglcontextlost",ue,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",xn,!1),Jt("WebGLRenderer: "+R.message),R}function _t(){Kt=new o1(B),Kt.init(),dt=new Y_(B,Kt),P=new Kx(B,Kt,t,dt),b=new X_(B,Kt),P.reversedDepthBuffer&&d&&b.buffers.depth.setReversed(!0),O=B.createFramebuffer(),I=B.createFramebuffer(),F=B.createFramebuffer(),H=new h1(B),X=new I_,j=new q_(B,Kt,b,X,P,dt,H),xt=new a1(A),St=new d0(B),yt=new $x(B,St),tt=new l1(B,St,H,yt),rt=new d1(B,tt,St,yt,H),N=new u1(B,P,j),Ut=new jx(X),At=new P_(A,xt,Kt,P,yt,Ut),Ot=new K_(A,X),bt=new D_,Tt=new k_(Kt),at=new Zx(A,xt,b,rt,g,l),Z=new W_(A,rt,P),K=new j_(B,H,P,b),lt=new Jx(B,Kt,H),$=new c1(B,Kt,H),H.programs=At.programs,A.capabilities=P,A.extensions=Kt,A.properties=X,A.renderLists=bt,A.shadowMap=Z,A.state=b,A.info=H}y!==je&&(T=new p1(y,e.width,e.height,o,s,r));let Et=new hu(A,B);this.xr=Et,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let R=Kt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Kt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(R){R!==void 0&&(Q=R,this.setSize(ht,V,!1))},this.getSize=function(R){return R.set(ht,V)},this.setSize=function(R,z,J=!0){if(Et.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}ht=R,V=z,e.width=Math.floor(R*Q),e.height=Math.floor(z*Q),J===!0&&(e.style.width=R+"px",e.style.height=z+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,R,z)},this.getDrawingBufferSize=function(R){return R.set(ht*Q,V*Q).floor()},this.setDrawingBufferSize=function(R,z,J){ht=R,V=z,Q=J,e.width=Math.floor(R*J),e.height=Math.floor(z*J),this.setViewport(0,0,R,z)},this.setEffects=function(R){if(y===je){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let z=0;z<R.length;z++)if(R[z].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(nt)},this.getViewport=function(R){return R.copy(Rt)},this.setViewport=function(R,z,J,q){R.isVector4?Rt.set(R.x,R.y,R.z,R.w):Rt.set(R,z,J,q),b.viewport(nt.copy(Rt).multiplyScalar(Q).round())},this.getScissor=function(R){return R.copy(Gt)},this.setScissor=function(R,z,J,q){R.isVector4?Gt.set(R.x,R.y,R.z,R.w):Gt.set(R,z,J,q),b.scissor(It.copy(Gt).multiplyScalar(Q).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(R){b.setScissorTest(ee=R)},this.setOpaqueSort=function(R){gt=R},this.setTransparentSort=function(R){Dt=R},this.getClearColor=function(R){return R.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(R=!0,z=!0,J=!0){let q=0;if(R){let Y=!1;if(st!==null){let Lt=st.texture.format;Y=p.has(Lt)}if(Y){let Lt=st.texture.type,Ft=m.has(Lt),Pt=at.getClearColor(),Bt=at.getClearAlpha(),Xt=Pt.r,ie=Pt.g,oe=Pt.b;Ft?(S[0]=Xt,S[1]=ie,S[2]=oe,S[3]=Bt,B.clearBufferuiv(B.COLOR,0,S)):(w[0]=Xt,w[1]=ie,w[2]=oe,w[3]=Bt,B.clearBufferiv(B.COLOR,0,w))}else q|=B.COLOR_BUFFER_BIT}z&&(q|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&B.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),L=R},this.dispose=function(){e.removeEventListener("webglcontextlost",ue,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",xn,!1),at.dispose(),bt.dispose(),Tt.dispose(),X.dispose(),xt.dispose(),rt.dispose(),yt.dispose(),K.dispose(),At.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",Za),Et.removeEventListener("sessionend",$a),as.stop()};function ue(R){R.preventDefault(),kh("WebGLRenderer: Context Lost."),C=!0}function pe(){kh("WebGLRenderer: Context Restored."),C=!1;let R=H.autoReset,z=Z.enabled,J=Z.autoUpdate,q=Z.needsUpdate,Y=Z.type;_t(),H.autoReset=R,Z.enabled=z,Z.autoUpdate=J,Z.needsUpdate=q,Z.type=Y}function xn(R){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Tn(R){let z=R.target;z.removeEventListener("dispose",Tn),He(z)}function He(R){Ui(R),X.remove(R)}function Ui(R){let z=X.get(R).programs;z!==void 0&&(z.forEach(function(J){At.releaseProgram(J)}),R.isShaderMaterial&&At.releaseShaderCache(R))}this.renderBufferDirect=function(R,z,J,q,Y,Lt){z===null&&(z=Ht);let Ft=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Pt=qp(R,z,J,q,Y);b.setMaterial(q,Ft);let Bt=J.index,Xt=1;if(q.wireframe===!0){if(Bt=tt.getWireframeAttribute(J),Bt===void 0)return;Xt=2}let ie=J.drawRange,oe=J.attributes.position,kt=ie.start*Xt,ve=(ie.start+ie.count)*Xt;Lt!==null&&(kt=Math.max(kt,Lt.start*Xt),ve=Math.min(ve,(Lt.start+Lt.count)*Xt)),Bt!==null?(kt=Math.max(kt,0),ve=Math.min(ve,Bt.count)):oe!=null&&(kt=Math.max(kt,0),ve=Math.min(ve,oe.count));let Ge=ve-kt;if(Ge<0||Ge===1/0)return;yt.setup(Y,q,Pt,J,Bt);let Re,Te=lt;if(Bt!==null&&(Re=St.get(Bt),Te=$,Te.setIndex(Re)),Y.isMesh)q.wireframe===!0?(b.setLineWidth(q.wireframeLinewidth*$t()),Te.setMode(B.LINES)):Te.setMode(B.TRIANGLES);else if(Y.isLine){let nn=q.linewidth;nn===void 0&&(nn=1),b.setLineWidth(nn*$t()),Y.isLineSegments?Te.setMode(B.LINES):Y.isLineLoop?Te.setMode(B.LINE_LOOP):Te.setMode(B.LINE_STRIP)}else Y.isPoints?Te.setMode(B.POINTS):Y.isSprite&&Te.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))Te.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let nn=Y._multiDrawStarts,Nt=Y._multiDrawCounts,ln=Y._multiDrawCount,me=Bt?St.get(Bt).bytesPerElement:1,Un=X.get(q).currentProgram.getUniforms();for(let jn=0;jn<ln;jn++)Un.setValue(B,"_gl_DrawID",jn),Te.render(nn[jn]/me,Nt[jn])}else if(Y.isInstancedMesh)Te.renderInstances(kt,Ge,Y.count);else if(J.isInstancedBufferGeometry){let nn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Nt=Math.min(J.instanceCount,nn);Te.renderInstances(kt,Ge,Nt)}else Te.render(kt,Ge)};function Pr(R,z,J,q){L!==null&&R.isNodeMaterial&&L.setObject(q,R),ct===!0&&Ut.setState(R,J,!1),R.transparent===!0&&R.side===fn&&R.forceSinglePass===!1?(R.side=dn,R.needsUpdate=!0,Ka(R,z,q),R.side=Ji,R.needsUpdate=!0,Ka(R,z,q),R.side=fn):Ka(R,z,q)}this.compile=function(R,z,J=null){J===null&&(J=R),L!==null&&L.renderStart(R,z,J),x=Tt.get(J),x.init(z),_.push(x),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(x.pushLight(Y),Y.castShadow&&x.pushShadow(Y))}),R!==J&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(x.pushLight(Y),Y.castShadow&&x.pushShadow(Y))}),x.setupLights(),L!==null&&L.updateLights(x.state.lightsArray),ft=this.localClippingEnabled,ct=Ut.init(this.clippingPlanes,ft),ct===!0&&Ut.setGlobalState(this.clippingPlanes,z),L!==null&&Z.render(x.state.shadowsArray,J,z);let q=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Lt=Y.material;if(Lt)if(Array.isArray(Lt))for(let Ft=0;Ft<Lt.length;Ft++){let Pt=Lt[Ft];Pr(Pt,J,z,Y),q.add(Pt)}else Pr(Lt,J,z,Y),q.add(Lt)}),x=_.pop(),L!==null&&L.renderEnd(),q},this.compileAsync=function(R,z,J=null){let q=this.compile(R,z,J);return new Promise(Y=>{function Lt(){if(q.forEach(function(Ft){let Bt=X.get(Ft).currentProgram;(Bt===void 0||Bt.isReady())&&q.delete(Ft)}),q.size===0){Y(R);return}setTimeout(Lt,10)}Kt.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let Ni=null;function Ya(R){Ni&&Ni(R)}function Za(){as.stop()}function $a(){as.start()}let as=new kf;as.setAnimationLoop(Ya),typeof self<"u"&&as.setContext(self),this.setAnimationLoop=function(R){Ni=R,Et.setAnimationLoop(R),R===null?as.stop():as.start()},Et.addEventListener("sessionstart",Za),Et.addEventListener("sessionend",$a),this.render=function(R,z){if(z!==void 0&&z.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;L!==null&&L.renderStart(R,z);let J=Et.enabled===!0&&Et.isPresenting===!0,q=T!==null&&(st===null||J)&&T.begin(A,st);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(z),z=Et.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,z,st),x=Tt.get(R,_.length),x.init(z),x.state.textureUnits=j.getTextureUnits(),_.push(x),pt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),it.setFromProjectionMatrix(pt,Xn,z.reversedDepth),ft=this.localClippingEnabled,ct=Ut.init(this.clippingPlanes,ft),M=bt.get(R,E.length),M.init(),E.push(M),Et.enabled===!0&&Et.isPresenting===!0){let Ft=A.xr.getDepthSensingMesh();Ft!==null&&Pc(Ft,z,-1/0,A.sortObjects)}Pc(R,z,0,A.sortObjects),M.finish(),L!==null&&L.updateLights(x.state.lightsArray),A.sortObjects===!0&&M.sort(gt,Dt),Vt=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,Vt&&at.addToRenderList(M,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&Ut.beginShadows();let Y=x.state.shadowsArray;if(Z.render(Y,R,z),ct===!0&&Ut.endShadows(),(q&&T.hasRenderPass())===!1){let Ft=M.opaque,Pt=M.transmissive;if(x.setupLights(),z.isArrayCamera){let Bt=z.cameras;if(Pt.length>0)for(let Xt=0,ie=Bt.length;Xt<ie;Xt++){let oe=Bt[Xt];Yu(Ft,Pt,R,oe)}Vt&&at.render(R);for(let Xt=0,ie=Bt.length;Xt<ie;Xt++){let oe=Bt[Xt];qu(M,R,oe,oe.viewport)}}else Pt.length>0&&Yu(Ft,Pt,R,z),Vt&&at.render(R),qu(M,R,z)}st!==null&&G===0&&(j.updateMultisampleRenderTarget(st),j.updateRenderTargetMipmap(st)),q&&T.end(A),R.isScene===!0&&R.onAfterRender(A,R,z),yt.resetDefaultState(),W=-1,et=null,_.pop(),_.length>0?(x=_[_.length-1],j.setTextureUnits(x.state.textureUnits),ct===!0&&Ut.setGlobalState(A.clippingPlanes,x.state.camera)):x=null,E.pop(),E.length>0?M=E[E.length-1]:M=null,L!==null&&L.renderEnd()};function Pc(R,z,J,q){if(R.visible===!1)return;if(R.layers.test(z.layers)){if(R.isGroup)J=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(z);else if(R.isLightProbeGrid)x.pushLightProbeGrid(R);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(it)){q&&zt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(pt);let Ft=rt.update(R),Pt=R.material;Pt.visible&&M.push(R,Ft,Pt,J,zt.z,null,z)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(it))){let Ft=rt.update(R),Pt=R.material;if(q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),zt.copy(R.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),zt.copy(Ft.boundingSphere.center)),zt.applyMatrix4(R.matrixWorld).applyMatrix4(pt)),Array.isArray(Pt)){let Bt=Ft.groups;for(let Xt=0,ie=Bt.length;Xt<ie;Xt++){let oe=Bt[Xt],kt=Pt[oe.materialIndex];kt&&kt.visible&&M.push(R,Ft,kt,J,zt.z,oe,z)}}else Pt.visible&&M.push(R,Ft,Pt,J,zt.z,null,z)}}let Lt=R.children;for(let Ft=0,Pt=Lt.length;Ft<Pt;Ft++)Pc(Lt[Ft],z,J,q)}function qu(R,z,J,q){let{opaque:Y,transmissive:Lt,transparent:Ft}=R;x.setupLightsView(J),ct===!0&&Ut.setGlobalState(A.clippingPlanes,J),q&&b.viewport(nt.copy(q)),Y.length>0&&Ja(Y,z,J),Lt.length>0&&Ja(Lt,z,J),Ft.length>0&&Ja(Ft,z,J),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Yu(R,z,J,q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[q.id]===void 0){let kt=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");x.state.transmissionRenderTarget[q.id]=new Ne(1,1,{generateMipmaps:!0,type:kt?Oe:je,minFilter:ji,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let Lt=x.state.transmissionRenderTarget[q.id],Ft=q.viewport||nt;Lt.setSize(Ft.z*A.transmissionResolutionScale,Ft.w*A.transmissionResolutionScale);let Pt=A.getRenderTarget(),Bt=A.getActiveCubeFace(),Xt=A.getActiveMipmapLevel();A.setRenderTarget(Lt),A.getClearColor(Yt),qt=A.getClearAlpha(),qt<1&&A.setClearColor(16777215,.5),A.clear(),Vt&&at.render(J);let ie=A.toneMapping;A.toneMapping=qn;let oe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),x.setupLightsView(q),ct===!0&&Ut.setGlobalState(A.clippingPlanes,q),Ja(R,J,q),j.updateMultisampleRenderTarget(Lt),j.updateRenderTargetMipmap(Lt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let ve=0,Ge=z.length;ve<Ge;ve++){let Re=z[ve],{object:Te,geometry:nn,material:Nt,group:ln}=Re;if(Nt.side===fn&&Te.layers.test(q.layers)){let me=Nt.side;Nt.side=dn,Nt.needsUpdate=!0,Zu(Te,J,q,nn,Nt,ln),Nt.side=me,Nt.needsUpdate=!0,kt=!0}}kt===!0&&(j.updateMultisampleRenderTarget(Lt),j.updateRenderTargetMipmap(Lt))}A.setRenderTarget(Pt,Bt,Xt),A.setClearColor(Yt,qt),oe!==void 0&&(q.viewport=oe),A.toneMapping=ie}function Ja(R,z,J){let q=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,Lt=R.length;Y<Lt;Y++){let Ft=R[Y],{object:Pt,geometry:Bt,group:Xt}=Ft,ie=Ft.material;ie.allowOverride===!0&&q!==null&&(ie=q),Pt.layers.test(J.layers)&&Zu(Pt,z,J,Bt,ie,Xt)}}function Zu(R,z,J,q,Y,Lt){L!==null&&Y.isNodeMaterial&&L.setObject(R,Y),R.onBeforeRender(A,z,J,q,Y,Lt),R.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(A,z,J,q,R,Lt),Y.transparent===!0&&Y.side===fn&&Y.forceSinglePass===!1?(Y.side=dn,Y.needsUpdate=!0,A.renderBufferDirect(J,z,q,Y,R,Lt),Y.side=Ji,Y.needsUpdate=!0,A.renderBufferDirect(J,z,q,Y,R,Lt),Y.side=fn):A.renderBufferDirect(J,z,q,Y,R,Lt),R.onAfterRender(A,z,J,q,Y,Lt)}function Ka(R,z,J){z.isScene!==!0&&(z=Ht);let q=X.get(R),Y=x.state.lights,Lt=x.state.shadowsArray,Ft=Y.state.version,Pt=At.getParameters(R,Y.state,Lt,z,J,x.state.lightProbeGridArray),Bt=At.getProgramCacheKey(Pt),Xt=q.programs;q.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?z.environment:null,q.fog=z.fog;let ie=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;q.envMap=xt.get(R.envMap||q.environment,ie),q.envMapRotation=q.environment!==null&&R.envMap===null?z.environmentRotation:R.envMapRotation,Xt===void 0&&(R.addEventListener("dispose",Tn),Xt=new Map,q.programs=Xt);let oe=Xt.get(Bt);if(oe!==void 0){if(q.currentProgram===oe&&q.lightsStateVersion===Ft)return Ju(R,Pt),oe}else Pt.uniforms=At.getUniforms(R),L!==null&&R.isNodeMaterial&&L.build(R,J,Pt),R.onBeforeCompile(Pt,A),oe=At.acquireProgram(Pt,Bt),Xt.set(Bt,oe),q.uniforms=Pt.uniforms;let kt=q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(kt.clippingPlanes=Ut.uniform),Ju(R,Pt),q.needsLights=Zp(R),q.lightsStateVersion=Ft,q.needsLights&&(kt.ambientLightColor.value=Y.state.ambient,kt.lightProbe.value=Y.state.probe,kt.sunLights.value=Y.state.sun,kt.sunLightShadows.value=Y.state.sunShadow,kt.directionalLights.value=Y.state.directional,kt.directionalLightShadows.value=Y.state.directionalShadow,kt.spotLights.value=Y.state.spot,kt.spotLightShadows.value=Y.state.spotShadow,kt.rectAreaLights.value=Y.state.rectArea,kt.ltc_1.value=Y.state.rectAreaLTC1,kt.ltc_2.value=Y.state.rectAreaLTC2,kt.pointLights.value=Y.state.point,kt.pointLightShadows.value=Y.state.pointShadow,kt.hemisphereLights.value=Y.state.hemi,kt.sunShadowMatrix.value=Y.state.sunShadowMatrix,kt.sunShadowCascade.value=Y.state.sunShadowCascade,kt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,kt.spotLightMatrix.value=Y.state.spotLightMatrix,kt.spotLightMap.value=Y.state.spotLightMap,kt.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=x.state.lightProbeGridArray.length>0,q.currentProgram=oe,q.uniformsList=null,oe}function $u(R){if(R.uniformsList===null){let z=R.currentProgram.getUniforms();R.uniformsList=vr.seqWithValue(z.seq,R.uniforms)}return R.uniformsList}function Ju(R,z){let J=X.get(R);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function Xp(R,z){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;v.setFromMatrixPosition(z.matrixWorld);for(let J=0,q=R.length;J<q;J++){let Y=R[J];if(Y.texture!==null&&Y.boundingBox.containsPoint(v))return Y}return null}function qp(R,z,J,q,Y){z.isScene!==!0&&(z=Ht),j.resetTextureUnits();let Lt=z.fog,Ft=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?z.environment:null,Pt=st===null?A.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:he.workingColorSpace,Bt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Xt=xt.get(q.envMap||Ft,Bt),ie=q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,oe=!!J.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),kt=!!J.morphAttributes.position,ve=!!J.morphAttributes.normal,Ge=!!J.morphAttributes.color,Re=qn;q.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Re=A.toneMapping);let Te=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,nn=Te!==void 0?Te.length:0,Nt=X.get(q),ln=x.state.lights;if(ct===!0&&(ft===!0||R!==et)){let Ae=R===et&&q.id===W;Ut.setState(q,R,Ae)}let me=!1;q.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==ln.state.version||Nt.outputColorSpace!==Pt||Y.isBatchedMesh&&Nt.batching===!1||!Y.isBatchedMesh&&Nt.batching===!0||Y.isBatchedMesh&&Nt.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Nt.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Nt.instancing===!1||!Y.isInstancedMesh&&Nt.instancing===!0||Y.isSkinnedMesh&&Nt.skinning===!1||!Y.isSkinnedMesh&&Nt.skinning===!0||Y.isInstancedMesh&&Nt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Nt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Nt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Nt.instancingMorph===!1&&Y.morphTexture!==null||Nt.envMap!==Xt||q.fog===!0&&Nt.fog!==Lt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==Ut.numPlanes||Nt.numIntersection!==Ut.numIntersection)||Nt.vertexAlphas!==ie||Nt.vertexTangents!==oe||Nt.morphTargets!==kt||Nt.morphNormals!==ve||Nt.morphColors!==Ge||Nt.toneMapping!==Re||Nt.morphTargetsCount!==nn||!!Nt.lightProbeGrid!=x.state.lightProbeGridArray.length>0)&&(me=!0):(me=!0,Nt.__version=q.version);let Un=Nt.currentProgram;me===!0&&(Un=Ka(q,z,Y),L&&q.isNodeMaterial&&L.onUpdateProgram(q,Un,Nt));let jn=!1,Fi=!1,Ns=!1,be=Un.getUniforms(),ke=Nt.uniforms;if(b.useProgram(Un.program)&&(jn=!0,Fi=!0,Ns=!0),q.id!==W&&(W=q.id,Fi=!0),Nt.needsLights){let Ae=Xp(x.state.lightProbeGridArray,Y);Nt.lightProbeGrid!==Ae&&(Nt.lightProbeGrid=Ae,Fi=!0)}if(jn||et!==R){b.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),be.setValue(B,"projectionMatrix",R.projectionMatrix),be.setValue(B,"viewMatrix",R.matrixWorldInverse);let Bi=be.map.cameraPosition;Bi!==void 0&&Bi.setValue(B,Mt.setFromMatrixPosition(R.matrixWorld)),P.logarithmicDepthBuffer&&be.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&be.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),et!==R&&(et=R,Fi=!0,Ns=!0)}if(Nt.needsLights&&(ln.state.sunShadowMap.length>0&&be.setValue(B,"sunShadowMap",ln.state.sunShadowMap,j),ln.state.directionalShadowMap.length>0&&be.setValue(B,"directionalShadowMap",ln.state.directionalShadowMap,j),ln.state.spotShadowMap.length>0&&be.setValue(B,"spotShadowMap",ln.state.spotShadowMap,j),ln.state.pointShadowMap.length>0&&be.setValue(B,"pointShadowMap",ln.state.pointShadowMap,j)),Y.isSkinnedMesh){be.setOptional(B,Y,"bindMatrix"),be.setOptional(B,Y,"bindMatrixInverse");let Ae=Y.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),be.setValue(B,"boneTexture",Ae.boneTexture,j))}Y.isBatchedMesh&&(be.setOptional(B,Y,"batchingTexture"),be.setValue(B,"batchingTexture",Y._matricesTexture,j),be.setOptional(B,Y,"batchingIdTexture"),be.setValue(B,"batchingIdTexture",Y._indirectTexture,j),be.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&be.setValue(B,"batchingColorTexture",Y._colorsTexture,j));let Oi=J.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&N.update(Y,J,Un),(Fi||Nt.receiveShadow!==Y.receiveShadow)&&(Nt.receiveShadow=Y.receiveShadow,be.setValue(B,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&z.environment!==null&&(ke.envMapIntensity.value=z.environmentIntensity),ke.dfgLUT!==void 0&&(ke.dfgLUT.value=tv()),Fi){if(be.setValue(B,"toneMappingExposure",A.toneMappingExposure),Nt.needsLights&&Yp(ke,Ns),Lt&&q.fog===!0&&Ot.refreshFogUniforms(ke,Lt),Ot.refreshMaterialUniforms(ke,q,Q,V,x.state.transmissionRenderTarget[R.id]),Nt.needsLights&&Nt.lightProbeGrid){let Ae=Nt.lightProbeGrid;ke.probesSH.value=Ae.texture,ke.probesMin.value.copy(Ae.boundingBox.min),ke.probesMax.value.copy(Ae.boundingBox.max),ke.probesResolution.value.copy(Ae.resolution)}vr.upload(B,$u(Nt),ke,j)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(vr.upload(B,$u(Nt),ke,j),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&be.setValue(B,"center",Y.center),be.setValue(B,"modelViewMatrix",Y.modelViewMatrix),be.setValue(B,"normalMatrix",Y.normalMatrix),be.setValue(B,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let Ae=q.uniformsGroups;for(let Bi=0,Fs=Ae.length;Bi<Fs;Bi++){let ju=Ae[Bi];K.update(ju,Un),K.bind(ju,Un)}}return Un}function Yp(R,z){R.ambientLightColor.needsUpdate=z,R.lightProbe.needsUpdate=z,R.sunLights.needsUpdate=z,R.sunLightShadows.needsUpdate=z,R.directionalLights.needsUpdate=z,R.directionalLightShadows.needsUpdate=z,R.pointLights.needsUpdate=z,R.pointLightShadows.needsUpdate=z,R.spotLights.needsUpdate=z,R.spotLightShadows.needsUpdate=z,R.rectAreaLights.needsUpdate=z,R.hemisphereLights.needsUpdate=z}function Zp(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(R,z,J){let q=X.get(R);q.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),X.get(R.texture).__webglTexture=z,X.get(R.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:J,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,z){let J=X.get(R);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(R,z=0,J=0){st=R,k=z,G=J;let q=null,Y=!1,Lt=!1;if(R){let Pt=X.get(R);if(Pt.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(B.FRAMEBUFFER,Pt.__webglFramebuffer),nt.copy(R.viewport),It.copy(R.scissor),wt=R.scissorTest,b.viewport(nt),b.scissor(It),b.setScissorTest(wt),W=-1;return}else if(Pt.__webglFramebuffer===void 0)j.setupRenderTarget(R);else if(Pt.__hasExternalTextures)j.rebindTextures(R,X.get(R.texture).__webglTexture,X.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ie=R.depthTexture;if(Pt.__boundDepthTexture!==ie){if(ie!==null&&X.has(ie)&&(R.width!==ie.image.width||R.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(R)}}let Bt=R.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Lt=!0);let Xt=X.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xt[z])?q=Xt[z][J]:q=Xt[z],Y=!0):R.samples>0&&j.useMultisampledRTT(R)===!1?q=X.get(R).__webglMultisampledFramebuffer:Array.isArray(Xt)?q=Xt[J]:q=Xt,nt.copy(R.viewport),It.copy(R.scissor),wt=R.scissorTest}else nt.copy(Rt).multiplyScalar(Q).floor(),It.copy(Gt).multiplyScalar(Q).floor(),wt=ee;if(J!==0&&(q=O),b.bindFramebuffer(B.FRAMEBUFFER,q)&&b.drawBuffers(R,q),b.viewport(nt),b.scissor(It),b.setScissorTest(wt),Y){let Pt=X.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,Pt.__webglTexture,J)}else if(Lt){let Pt=z;for(let Bt=0;Bt<R.textures.length;Bt++){let Xt=X.get(R.textures[Bt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Bt,Xt.__webglTexture,J,Pt)}}else if(R!==null&&J!==0){let Pt=X.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Pt.__webglTexture,J)}W=-1};function Ku(R){let z=X.get(R);return(z.__readFormat!==R.format||z.__readType!==R.type)&&(z.__readFormat=R.format,z.__readType=R.type,z.__formatReadable=P.textureFormatReadable(R.format),z.__typeReadable=P.textureTypeReadable(R.type)),z}this.readRenderTargetPixels=function(R,z,J,q,Y,Lt,Ft,Pt=0){if(!(R&&R.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=X.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Bt=Bt[Ft]),Bt){b.bindFramebuffer(B.FRAMEBUFFER,Bt);try{let Xt=R.textures[Pt],ie=Xt.format,oe=Xt.type;R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Pt);let kt=Ku(Xt);if(kt.__formatReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=R.width-q&&J>=0&&J<=R.height-Y&&B.readPixels(z,J,q,Y,dt.convert(ie),dt.convert(oe),Lt)}finally{let Xt=st!==null?X.get(st).__webglFramebuffer:null;b.bindFramebuffer(B.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(R,z,J,q,Y,Lt,Ft,Pt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=X.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Bt=Bt[Ft]),Bt)if(z>=0&&z<=R.width-q&&J>=0&&J<=R.height-Y){b.bindFramebuffer(B.FRAMEBUFFER,Bt);let Xt=R.textures[Pt],ie=Xt.format,oe=Xt.type;R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Pt);let kt=Ku(Xt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ve),B.bufferData(B.PIXEL_PACK_BUFFER,Lt.byteLength,B.STREAM_READ),B.readPixels(z,J,q,Y,dt.convert(ie),dt.convert(oe),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Ge=st!==null?X.get(st).__webglFramebuffer:null;b.bindFramebuffer(B.FRAMEBUFFER,Ge);let Re=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await cf(B,Re,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ve),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Lt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ve),B.deleteSync(Re),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,z=null,J=0){let q=Math.pow(2,-J),Y=Math.floor(R.image.width*q),Lt=Math.floor(R.image.height*q),Ft=z!==null?z.x:0,Pt=z!==null?z.y:0;j.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,J,0,0,Ft,Pt,Y,Lt),b.unbindTexture()},this.copyTextureToTexture=function(R,z,J=null,q=null,Y=0,Lt=0){let Ft,Pt,Bt,Xt,ie,oe,kt,ve,Ge,Re=R.isCompressedTexture?R.mipmaps[Lt]:R.image;if(J!==null)Ft=J.max.x-J.min.x,Pt=J.max.y-J.min.y,Bt=J.isBox3?J.max.z-J.min.z:1,Xt=J.min.x,ie=J.min.y,oe=J.isBox3?J.min.z:0;else{let ke=Math.pow(2,-Y);Ft=Math.floor(Re.width*ke),Pt=Math.floor(Re.height*ke),R.isDataArrayTexture?Bt=Re.depth:R.isData3DTexture?Bt=Math.floor(Re.depth*ke):Bt=1,Xt=0,ie=0,oe=0}q!==null?(kt=q.x,ve=q.y,Ge=q.z):(kt=0,ve=0,Ge=0);let Te=dt.convert(z.format),nn=dt.convert(z.type),Nt;z.isData3DTexture?(j.setTexture3D(z,0),Nt=B.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(j.setTexture2DArray(z,0),Nt=B.TEXTURE_2D_ARRAY):(j.setTexture2D(z,0),Nt=B.TEXTURE_2D),b.activeTexture(B.TEXTURE0),b.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),b.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),b.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);let ln=b.getParameter(B.UNPACK_ROW_LENGTH),me=b.getParameter(B.UNPACK_IMAGE_HEIGHT),Un=b.getParameter(B.UNPACK_SKIP_PIXELS),jn=b.getParameter(B.UNPACK_SKIP_ROWS),Fi=b.getParameter(B.UNPACK_SKIP_IMAGES);b.pixelStorei(B.UNPACK_ROW_LENGTH,Re.width),b.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Re.height),b.pixelStorei(B.UNPACK_SKIP_PIXELS,Xt),b.pixelStorei(B.UNPACK_SKIP_ROWS,ie),b.pixelStorei(B.UNPACK_SKIP_IMAGES,oe);let Ns=R.isDataArrayTexture||R.isData3DTexture,be=z.isDataArrayTexture||z.isData3DTexture;if(R.isDepthTexture){let ke=X.get(R),Oi=X.get(z),Ae=X.get(ke.__renderTarget),Bi=X.get(Oi.__renderTarget);b.bindFramebuffer(B.READ_FRAMEBUFFER,Ae.__webglFramebuffer),b.bindFramebuffer(B.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Fs=0;Fs<Bt;Fs++)Ns&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,X.get(R).__webglTexture,Y,oe+Fs),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,X.get(z).__webglTexture,Lt,Ge+Fs)),B.blitFramebuffer(Xt,ie,Ft,Pt,kt,ve,Ft,Pt,B.DEPTH_BUFFER_BIT,B.NEAREST);b.bindFramebuffer(B.READ_FRAMEBUFFER,null),b.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||X.has(R)){let ke=X.get(R),Oi=X.get(z);b.bindFramebuffer(B.READ_FRAMEBUFFER,I),b.bindFramebuffer(B.DRAW_FRAMEBUFFER,F);for(let Ae=0;Ae<Bt;Ae++)Ns?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ke.__webglTexture,Y,oe+Ae):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ke.__webglTexture,Y),be?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Oi.__webglTexture,Lt,Ge+Ae):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Oi.__webglTexture,Lt),Y!==0?B.blitFramebuffer(Xt,ie,Ft,Pt,kt,ve,Ft,Pt,B.COLOR_BUFFER_BIT,B.NEAREST):be?B.copyTexSubImage3D(Nt,Lt,kt,ve,Ge+Ae,Xt,ie,Ft,Pt):B.copyTexSubImage2D(Nt,Lt,kt,ve,Xt,ie,Ft,Pt);b.bindFramebuffer(B.READ_FRAMEBUFFER,null),b.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else be?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Nt,Lt,kt,ve,Ge,Ft,Pt,Bt,Te,nn,Re.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(Nt,Lt,kt,ve,Ge,Ft,Pt,Bt,Te,Re.data):B.texSubImage3D(Nt,Lt,kt,ve,Ge,Ft,Pt,Bt,Te,nn,Re):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Lt,kt,ve,Ft,Pt,Te,nn,Re.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Lt,kt,ve,Re.width,Re.height,Te,Re.data):B.texSubImage2D(B.TEXTURE_2D,Lt,kt,ve,Ft,Pt,Te,nn,Re);b.pixelStorei(B.UNPACK_ROW_LENGTH,ln),b.pixelStorei(B.UNPACK_IMAGE_HEIGHT,me),b.pixelStorei(B.UNPACK_SKIP_PIXELS,Un),b.pixelStorei(B.UNPACK_SKIP_ROWS,jn),b.pixelStorei(B.UNPACK_SKIP_IMAGES,Fi),Lt===0&&z.generateMipmaps&&B.generateMipmap(Nt),b.unbindTexture()},this.initRenderTarget=function(R){X.get(R).__webglFramebuffer===void 0&&j.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?j.setTextureCube(R,0):R.isData3DTexture?j.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?j.setTexture2DArray(R,0):j.setTexture2D(R,0),b.unbindTexture()},this.resetState=function(){k=0,G=0,st=null,b.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var di=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ev=new $i(-1,1,1,-1,0,1),uu=class extends Me{constructor(){super(),this.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new te([0,2,0,0,2,0],2))}},nv=new uu,fi=class{constructor(t){this._mesh=new _e(nv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ev)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var La={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ot},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new le},cameraProjectionMatrixInverse:{value:new le},cameraWorldMatrix:{value:new le},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new U(-1,-1,-1)},sceneBoxMax:{value:new U(1,1,1)}},vertexShader:`

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
		}`},Da={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Ql={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function qf(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=iv(t),n=e.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=e[a],l=2*Math.PI*o/n,c=new U(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Xi(s,t,t);return r.wrapS=yn,r.wrapT=yn,r.needsUpdate=!0,r}function iv(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),s=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=a++;r++,s--}return n}var Ua={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:du(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ot},cameraProjectionMatrixInverse:{value:new le},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function du(i,t,e){let n=sv(i,t,e),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function sv(i,t,e){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*t*s/i,a=Math.pow(s/(i-1),e);n.push(new U(Math.cos(r),Math.sin(r),a))}return n}var es={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var tc=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,g=t-d,y=e-f,p,m;g>y?(p=1,m=0):(p=0,m=1);let S=g-p+h,w=y-m+h,v=g-1+2*h,M=y-1+2*h,x=l&255,E=c&255,_=this.perm[x+this.perm[E]]%12,T=this.perm[x+p+this.perm[E+m]]%12,A=this.perm[x+1+this.perm[E+1]]%12,C=.5-g*g-y*y;C<0?n=0:(C*=C,n=C*C*this._dot(this.grad3[_],g,y));let L=.5-S*S-w*w;L<0?s=0:(L*=L,s=L*L*this._dot(this.grad3[T],S,w));let O=.5-v*v-M*M;return O<0?r=0:(O*=O,r=O*O*this._dot(this.grad3[A],v,M)),70*(n+s+r)}noise3d(t,e,n){let s,r,a,o,c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),d=Math.floor(n+c),f=1/6,g=(h+u+d)*f,y=h-g,p=u-g,m=d-g,S=t-y,w=e-p,v=n-m,M,x,E,_,T,A;S>=w?w>=v?(M=1,x=0,E=0,_=1,T=1,A=0):S>=v?(M=1,x=0,E=0,_=1,T=0,A=1):(M=0,x=0,E=1,_=1,T=0,A=1):w<v?(M=0,x=0,E=1,_=0,T=1,A=1):S<v?(M=0,x=1,E=0,_=0,T=1,A=1):(M=0,x=1,E=0,_=1,T=1,A=0);let C=S-M+f,L=w-x+f,O=v-E+f,I=S-_+2*f,F=w-T+2*f,k=v-A+2*f,G=S-1+3*f,st=w-1+3*f,W=v-1+3*f,et=h&255,nt=u&255,It=d&255,wt=this.perm[et+this.perm[nt+this.perm[It]]]%12,Yt=this.perm[et+M+this.perm[nt+x+this.perm[It+E]]]%12,qt=this.perm[et+_+this.perm[nt+T+this.perm[It+A]]]%12,ht=this.perm[et+1+this.perm[nt+1+this.perm[It+1]]]%12,V=.6-S*S-w*w-v*v;V<0?s=0:(V*=V,s=V*V*this._dot3(this.grad3[wt],S,w,v));let Q=.6-C*C-L*L-O*O;Q<0?r=0:(Q*=Q,r=Q*Q*this._dot3(this.grad3[Yt],C,L,O));let gt=.6-I*I-F*F-k*k;gt<0?a=0:(gt*=gt,a=gt*gt*this._dot3(this.grad3[qt],I,F,k));let Dt=.6-G*G-st*st-W*W;return Dt<0?o=0:(Dt*=Dt,o=Dt*Dt*this._dot3(this.grad3[ht],G,st,W)),32*(s+r+a+o)}noise4d(t,e,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,d,f,g,y=(t+e+n+s)*l,p=Math.floor(t+y),m=Math.floor(e+y),S=Math.floor(n+y),w=Math.floor(s+y),v=(p+m+S+w)*c,M=p-v,x=m-v,E=S-v,_=w-v,T=t-M,A=e-x,C=n-E,L=s-_,O=T>A?32:0,I=T>C?16:0,F=A>C?8:0,k=T>L?4:0,G=A>L?2:0,st=C>L?1:0,W=O+I+F+k+G+st,et=a[W][0]>=3?1:0,nt=a[W][1]>=3?1:0,It=a[W][2]>=3?1:0,wt=a[W][3]>=3?1:0,Yt=a[W][0]>=2?1:0,qt=a[W][1]>=2?1:0,ht=a[W][2]>=2?1:0,V=a[W][3]>=2?1:0,Q=a[W][0]>=1?1:0,gt=a[W][1]>=1?1:0,Dt=a[W][2]>=1?1:0,Rt=a[W][3]>=1?1:0,Gt=T-et+c,ee=A-nt+c,it=C-It+c,ct=L-wt+c,ft=T-Yt+2*c,pt=A-qt+2*c,Mt=C-ht+2*c,zt=L-V+2*c,Ht=T-Q+3*c,Vt=A-gt+3*c,$t=C-Dt+3*c,B=L-Rt+3*c,ae=T-1+4*c,Kt=A-1+4*c,P=C-1+4*c,b=L-1+4*c,H=p&255,X=m&255,j=S&255,xt=w&255,St=o[H+o[X+o[j+o[xt]]]]%32,tt=o[H+et+o[X+nt+o[j+It+o[xt+wt]]]]%32,rt=o[H+Yt+o[X+qt+o[j+ht+o[xt+V]]]]%32,At=o[H+Q+o[X+gt+o[j+Dt+o[xt+Rt]]]]%32,Ot=o[H+1+o[X+1+o[j+1+o[xt+1]]]]%32,bt=.6-T*T-A*A-C*C-L*L;bt<0?h=0:(bt*=bt,h=bt*bt*this._dot4(r[St],T,A,C,L));let Tt=.6-Gt*Gt-ee*ee-it*it-ct*ct;Tt<0?u=0:(Tt*=Tt,u=Tt*Tt*this._dot4(r[tt],Gt,ee,it,ct));let Ut=.6-ft*ft-pt*pt-Mt*Mt-zt*zt;Ut<0?d=0:(Ut*=Ut,d=Ut*Ut*this._dot4(r[rt],ft,pt,Mt,zt));let Z=.6-Ht*Ht-Vt*Vt-$t*$t-B*B;Z<0?f=0:(Z*=Z,f=Z*Z*this._dot4(r[At],Ht,Vt,$t,B));let at=.6-ae*ae-Kt*Kt-P*P-b*b;return at<0?g=0:(at*=at,g=at*at*this._dot4(r[Ot],ae,Kt,P,b)),27*(h+u+d+f+g)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}_dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}};var Na=class i extends di{constructor(t,e,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=qf(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Ne(this.width,this.height,{type:Oe,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Se({defines:Object.assign({},La.defines),uniforms:pn.clone(La.uniforms),vertexShader:La.vertexShader,fragmentShader:La.fragmentShader,blending:ze,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ha,this.normalMaterial.blending=ze,this.pdMaterial=new Se({defines:Object.assign({},Ua.defines),uniforms:pn.clone(Ua.uniforms),vertexShader:Ua.vertexShader,fragmentShader:Ua.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Se({defines:Object.assign({},Da.defines),uniforms:pn.clone(Da.uniforms),vertexShader:Da.vertexShader,fragmentShader:Da.fragmentShader,blending:ze}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Se({uniforms:pn.clone(es.uniforms),vertexShader:es.vertexShader,fragmentShader:es.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:_a,blendDst:xs,blendEquation:Bn,blendSrcAlpha:xa,blendDstAlpha:xs,blendEquationAlpha:Bn}),this.blendMaterial=new Se({uniforms:pn.clone(Ql.uniforms),vertexShader:Ql.vertexShader,fragmentShader:Ql.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:rl,blendSrc:_a,blendDst:xs,blendEquation:Bn,blendSrcAlpha:xa,blendDstAlpha:xs,blendEquationAlpha:Bn}),this._fsQuad=new fi(null),this._originalClearColor=new Wt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new ai,this.depthTexture.format=ci,this.depthTexture.type=Qi,this.normalRenderTarget=new Ne(this.width,this.height,{minFilter:Le,magFilter:Le,type:Oe,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=du(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=ze,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=ze,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=ze,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=ze,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=ze,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,s,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=o,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_renderOverride(t,e,n,s,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new tc,n=t*t*4,s=new Uint8Array(n);for(let a=0;a<t;a++)for(let o=0;o<t;o++){let l=a,c=o;s[(a*t+o)*4]=(e.noise(l,c)*.5+.5)*255,s[(a*t+o)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(a*t+o)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(a*t+o)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let r=new Xi(s,t,t,Mn,je);return r.wrapS=yn,r.wrapT=yn,r.needsUpdate=!0,r}};Na.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Yf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Wt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Sr=class i extends di{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ot(t.x,t.y):new ot(256,256),this.clearColor=new Wt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ne(r,a,{type:Oe,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Ne(r,a,{type:Oe,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Ne(r,a,{type:Oe,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Yf;this.highPassUniforms=pn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Se({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ot(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=pn.clone(es.uniforms),this.blendMaterial=new Se({uniforms:this.copyUniforms,vertexShader:es.vertexShader,fragmentShader:es.fragmentShader,premultipliedAlpha:!0,blending:gs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Wt,this._oldClearAlpha=1,this._basic=new hn,this._fsQuad=new fi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ot(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Se({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ot(.5,.5)},direction:{value:new ot(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};Sr.BlurDirectionX=new ot(1,0);Sr.BlurDirectionY=new ot(0,1);var ec=class extends di{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Se?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=pn.clone(t.uniforms),this.material=new Se({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new fi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Zf={name:"VignetteShader",uniforms:{tDiffuse:{value:null},offset:{value:1},darkness:{value:1}},vertexShader:`

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

		}`};var Fa={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};var nc=class extends di{constructor(t,e,n){super(),this.scene=t,this.camera=e;let s=n.focus!==void 0?n.focus:1,r=n.aperture!==void 0?n.aperture:.025,a=n.maxblur!==void 0?n.maxblur:1;this._renderTargetDepth=new Ne(1,1,{minFilter:Le,magFilter:Le,type:Oe}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new cr,this._materialDepth.depthPacking=Oh,this._materialDepth.blending=ze;let o=pn.clone(Fa.uniforms);o.tDepth.value=this._renderTargetDepth.texture,o.focus.value=s,o.aspect.value=e.aspect,o.aperture.value=r,o.maxblur.value=a,o.nearClip.value=e.near,o.farClip.value=e.far,this.materialBokeh=new Se({defines:Object.assign({},Fa.defines),uniforms:o,vertexShader:Fa.vertexShader,fragmentShader:Fa.fragmentShader}),this.uniforms=o,this._fsQuad=new fi(this.materialBokeh),this._oldClearColor=new Wt}render(t,e,n){this.scene.overrideMaterial=this._materialDepth,t.getClearColor(this._oldClearColor);let s=t.getClearAlpha(),r=t.autoClear;t.autoClear=!1,t.setClearColor(16777215),t.setClearAlpha(1),t.setRenderTarget(this._renderTargetDepth),t.clear(),t.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),t.clear(),this._fsQuad.render(t)),this.scene.overrideMaterial=null,t.setClearColor(this._oldClearColor),t.setClearAlpha(s),t.autoClear=r}setSize(t,e){this.materialBokeh.uniforms.aspect.value=t/e,this._renderTargetDepth.setSize(t,e)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}};var vu={};Jp(vu,{APRON:()=>ne,ARCH:()=>Ci,BALL_R:()=>mn,DRAIN_GUIDES:()=>pu,FLIPPER:()=>av,FLIPPERS:()=>Sn,GATE:()=>Ts,GI_SPOTS_UPPER:()=>hc,INLANE_GUIDES:()=>Tr,INSERTS:()=>_u,ORBIT:()=>ov,ORBIT_GUIDES:()=>ac,ORBIT_POST:()=>oc,ORBIT_POSTS:()=>gu,ORBIT_ROLLOVERS:()=>Oa,ORBIT_WEDGES:()=>mu,PF:()=>vt,POP:()=>Er,POPS:()=>Es,RAMP:()=>wr,RAMPS:()=>ns,RETURN_LANES:()=>pi,SAUCER:()=>mi,SHOOTER:()=>re,SLINGS:()=>br,STAR_POSTS:()=>rc,TARGETS:()=>Jn,TARGET_GUIDES:()=>lc,TARGET_POSTS:()=>xu,TARGET_RUBBER:()=>gi,TOP_LANES:()=>Pi,WIRE:()=>cc,batParts:()=>sc});var Ri={width:514.35,length:1066.8,thickness:12.7,slope:6.5,ball:27,centreX:237.175,orbitLane:40,throat:54},mt={left_flipper:{id:"left_flipper",type:"flipper",name:"Left flipper",x:177.141,y:164.34,rotation:-25,side:"left",pivot:[148.275,177.8],rest:-25,stroke:52,baseR:12.5,tipR:7.75,reach:68.45,width:88.7,length:25,height:24},right_flipper:{id:"right_flipper",type:"flipper",name:"Right flipper",x:297.209,y:164.34,rotation:205,side:"right",pivot:[326.075,177.8],rest:205,stroke:52,baseR:12.5,tipR:7.75,reach:68.45,width:88.7,length:25,height:24},left_sling:{id:"left_sling",type:"sling",name:"Left slingshot",x:116.838,y:305.327,side:"left",posts:[[98.5,355],[135.177,255.654],[98.5,278.1]],roles:["upper_inner","lower","upper_outer"],postRadius:4.75,contactRadius:11.1},left_inlane_guide:{id:"left_inlane_guide",type:"plastic",name:"Left inlane guide \xB7 contact plate",x:91.979,y:280.268,z:12,thickness:3,holes:[[62.669,238.124,4.5],[113.521,202.549,4.5]],collidable:!0,assembly:"blank_left_inlane_guide",notes:"Original authored adaptation inspired by pinball flipper ball guide, Tinkot, CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/); no source mesh copied.",outline:[[51.4,375.097],[51.379,375.436],[51.315,375.769],[51.21,376.091],[51.066,376.398],[50.884,376.684],[50.668,376.945],[50.421,377.178],[50.147,377.377],[49.85,377.54],[49.534,377.665],[49.206,377.749],[48.87,377.792],[48.531,377.792],[48.194,377.749],[47.866,377.665],[47.55,377.54],[47.253,377.377],[46.979,377.178],[46.732,376.945],[46.516,376.684],[46.334,376.398],[46.19,376.091],[46.085,375.769],[46.021,375.436],[46,375.097],[46,229.217],[118.937,184.579],[120.385,183.818],[121.919,183.253],[123.514,182.894],[125.142,182.745],[126.776,182.81],[128.387,183.088],[129.949,183.574],[131.433,184.259],[132.816,185.132],[134.072,186.179],[135.181,187.38],[136.124,188.716],[136.885,190.163],[137.45,191.698],[137.81,193.293],[137.958,194.921],[137.893,196.555],[137.615,198.166],[137.13,199.727],[136.444,201.212],[135.571,202.594],[134.525,203.85],[133.323,204.96],[131.987,205.903],[64.784,247.031],[61.862,249.087],[59.225,251.498],[56.916,254.226],[54.974,257.225],[53.43,260.447],[52.308,263.84],[51.628,267.347],[51.4,270.913]]},left_inlane_guide_cover:{id:"left_inlane_guide_cover",type:"plastic",name:"Left inlane guide \xB7 cover plate",x:87.264,y:291.085,z:30.8,thickness:3,holes:[[62.669,238.124,4.5],[113.521,202.549,4.5],[46,390,4.5]],collidable:!0,assembly:"blank_left_inlane_guide",notes:"Original authored adaptation inspired by pinball flipper ball guide, Tinkot, CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/); no source mesh copied.",outline:[[54,380.995],[55.102,382.11],[56.049,383.359],[56.827,384.72],[57.421,386.171],[57.821,387.686],[58.022,389.241],[58.018,390.808],[57.812,392.362],[57.405,393.876],[56.805,395.324],[56.022,396.682],[55.07,397.927],[53.963,399.038],[52.722,399.995],[51.368,400.784],[49.922,401.389],[48.41,401.802],[46.857,402.015],[45.289,402.025],[43.734,401.83],[42.217,401.436],[40.764,400.848],[39.399,400.076],[38.147,399.133],[37.027,398.036],[36.06,396.803],[35.26,395.455],[34.643,394.014],[34.218,392.505],[33.992,390.954],[33.97,389.386],[34.152,387.829],[34.534,386.309],[35.11,384.851],[35.871,383.481],[36.804,382.221],[37.892,381.092],[39.117,380.115],[40.459,379.305],[41.895,378.676],[43.4,378.238],[43.4,227.759],[117.58,182.361],[119.329,181.443],[121.182,180.76],[123.109,180.325],[125.076,180.146],[127.05,180.224],[128.996,180.56],[130.882,181.147],[132.675,181.975],[134.345,183.03],[135.863,184.294],[137.203,185.745],[138.342,187.359],[139.261,189.107],[139.943,190.961],[140.378,192.887],[140.557,194.854],[140.479,196.828],[140.143,198.774],[139.556,200.66],[138.728,202.454],[137.673,204.123],[136.409,205.641],[134.958,206.981],[133.345,208.12],[66.141,249.249],[63.49,251.114],[61.098,253.301],[59.004,255.775],[57.242,258.496],[55.841,261.419],[54.824,264.497],[54.207,267.679],[54,270.913]]},left_inlane_guide_stack_1:{id:"left_inlane_guide_stack_1",type:"post",name:"Left inlane guide \xB7 spacer stack 1",x:62.669,y:238.124,width:8,length:8,height:30,postType:"pin",profile:"stacked_return_spacer_v1"},left_inlane_guide_stack_2:{id:"left_inlane_guide_stack_2",type:"post",name:"Left inlane guide \xB7 spacer stack 2",x:113.521,y:202.549,width:8,length:8,height:30,postType:"pin",profile:"stacked_return_spacer_v1"},left_outlane_post:{id:"left_outlane_post",type:"post",name:"Left outlane post",x:46,y:390,width:18.891,length:18.891,height:26.987,postType:"rubber"},left_inlane:{id:"left_inlane",type:"rollover",name:"Left inlane rollover",x:69.4,y:315,rotation:90},left_outlane:{id:"left_outlane",type:"rollover",name:"Left outlane rollover",x:26,y:315,rotation:90},right_sling:{id:"right_sling",type:"sling",name:"Right slingshot",x:357.512,y:305.327,side:"right",posts:[[375.85,355],[339.173,255.654],[375.85,278.1]],roles:["upper_inner","lower","upper_outer"],postRadius:4.75,contactRadius:11.1},right_inlane_guide:{id:"right_inlane_guide",type:"plastic",name:"Right inlane guide \xB7 contact plate",x:382.371,y:280.268,z:12,thickness:3,holes:[[411.681,238.124,4.5],[360.829,202.549,4.5]],collidable:!0,assembly:"blank_right_inlane_guide",notes:"Original authored adaptation inspired by pinball flipper ball guide, Tinkot, CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/); no source mesh copied.",outline:[[422.95,270.913],[422.722,267.347],[422.042,263.84],[420.92,260.447],[419.376,257.225],[417.434,254.226],[415.125,251.498],[412.489,249.087],[409.566,247.031],[342.363,205.903],[341.027,204.96],[339.826,203.85],[338.779,202.594],[337.906,201.212],[337.221,199.727],[336.735,198.166],[336.457,196.555],[336.392,194.921],[336.54,193.293],[336.9,191.698],[337.465,190.163],[338.226,188.716],[339.169,187.38],[340.278,186.179],[341.534,185.132],[342.917,184.259],[344.401,183.574],[345.963,183.088],[347.574,182.81],[349.208,182.745],[350.836,182.894],[352.431,183.253],[353.965,183.818],[355.413,184.579],[428.35,229.217],[428.35,375.097],[428.329,375.436],[428.265,375.769],[428.16,376.091],[428.016,376.398],[427.834,376.684],[427.618,376.945],[427.371,377.178],[427.097,377.377],[426.8,377.54],[426.484,377.665],[426.156,377.749],[425.82,377.792],[425.481,377.792],[425.144,377.749],[424.816,377.665],[424.5,377.54],[424.203,377.377],[423.929,377.178],[423.682,376.945],[423.466,376.684],[423.284,376.398],[423.14,376.091],[423.035,375.769],[422.971,375.436],[422.95,375.097]]},right_inlane_guide_cover:{id:"right_inlane_guide_cover",type:"plastic",name:"Right inlane guide \xB7 cover plate",x:387.086,y:291.085,z:30.8,thickness:3,holes:[[411.681,238.124,4.5],[360.829,202.549,4.5],[428.35,390,4.5]],collidable:!0,assembly:"blank_right_inlane_guide",notes:"Original authored adaptation inspired by pinball flipper ball guide, Tinkot, CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/); no source mesh copied.",outline:[[420.35,270.913],[420.143,267.679],[419.526,264.497],[418.509,261.419],[417.108,258.496],[415.346,255.775],[413.252,253.301],[410.86,251.114],[408.209,249.249],[341.005,208.12],[339.392,206.981],[337.941,205.641],[336.677,204.123],[335.622,202.454],[334.794,200.66],[334.207,198.774],[333.871,196.828],[333.793,194.854],[333.972,192.887],[334.407,190.961],[335.09,189.107],[336.008,187.359],[337.147,185.745],[338.487,184.294],[340.005,183.03],[341.675,181.975],[343.468,181.147],[345.354,180.56],[347.301,180.224],[349.274,180.146],[351.241,180.325],[353.168,180.76],[355.021,181.443],[356.77,182.361],[430.95,227.759],[430.95,378.238],[432.455,378.676],[433.891,379.305],[435.233,380.115],[436.459,381.092],[437.547,382.221],[438.479,383.481],[439.24,384.851],[439.816,386.309],[440.198,387.829],[440.38,389.386],[440.358,390.954],[440.132,392.505],[439.707,394.014],[439.09,395.455],[438.291,396.803],[437.323,398.036],[436.203,399.133],[434.951,400.076],[433.587,400.848],[432.133,401.436],[430.616,401.83],[429.061,402.025],[427.494,402.015],[425.941,401.802],[424.428,401.389],[422.983,400.784],[421.628,399.995],[420.387,399.038],[419.28,397.927],[418.328,396.682],[417.545,395.324],[416.945,393.876],[416.538,392.362],[416.332,390.808],[416.329,389.241],[416.529,387.686],[416.93,386.171],[417.524,384.72],[418.301,383.359],[419.248,382.11],[420.35,380.995]]},right_inlane_guide_stack_1:{id:"right_inlane_guide_stack_1",type:"post",name:"Right inlane guide \xB7 spacer stack 1",x:411.681,y:238.124,width:8,length:8,height:30,postType:"pin",profile:"stacked_return_spacer_v1"},right_inlane_guide_stack_2:{id:"right_inlane_guide_stack_2",type:"post",name:"Right inlane guide \xB7 spacer stack 2",x:360.829,y:202.549,width:8,length:8,height:30,postType:"pin",profile:"stacked_return_spacer_v1"},right_outlane_post:{id:"right_outlane_post",type:"post",name:"Right outlane post",x:428.35,y:390,width:18.891,length:18.891,height:26.987,postType:"rubber"},right_inlane:{id:"right_inlane",type:"rollover",name:"Right inlane rollover",x:404.95,y:315,rotation:90},right_outlane:{id:"right_outlane",type:"rollover",name:"Right outlane rollover",x:448.35,y:315,rotation:90},apron:{id:"apron",type:"apron",name:"Apron",x:240.175,y:110.562,width:468.35,length:221.123,height:47.6,lip:{centre:[237.175,238.705],radius:149.8,from:[303.525,104.4],to:[170.825,104.4]},outline:[[6,0],[474.35,0],[474.35,221.123],[303.525,105.9],[303.525,104.4],[295.717,100.817],[287.716,97.688],[279.549,95.023],[271.243,92.83],[262.824,91.117],[254.322,89.889],[245.762,89.151],[237.175,88.905],[228.588,89.151],[220.029,89.889],[211.526,91.117],[203.107,92.83],[194.801,95.023],[186.634,97.688],[178.633,100.817],[170.825,104.4],[170.825,105.9],[6,217.076]]},left_drain_guide:{id:"left_drain_guide",type:"guide",name:"Left drain guide (under apron)",x:147.5,y:88,rotation:-236.31,thickness:1.6,height:28.575,from:[167,101],to:[128,75]},right_drain_guide:{id:"right_drain_guide",type:"guide",name:"Right drain guide (under apron)",x:269.5,y:87.5,rotation:-250.201,thickness:1.6,height:28.575,from:[307,101],to:[232,74]},shooter:{id:"shooter",type:"plunger",name:"Shooter lane",x:491.35,y:52.2,width:34,length:104.4,height:30},boundary_left:{id:"boundary_left",type:"guide",name:"Left side rail",x:3,y:468.4,thickness:6,height:28.575,from:[3,6],to:[3,930.8]},boundary_right:{id:"boundary_right",type:"guide",name:"Right side rail",x:511.35,y:458.4,thickness:6,height:28.575,from:[511.35,6],to:[511.35,910.8]},boundary_top:{id:"boundary_top",type:"guide",name:"Top rail",x:247.175,y:1063.8,rotation:-90,thickness:6,height:28.575,from:[136,1063.8],to:[358.35,1063.8]},top_arch_left:{id:"top_arch_left",type:"guide",name:"Top arch (left)",x:69.5,y:997.3,thickness:6,height:28.575,smooth:!1,points:[[3,930.8],[3.506,942.392],[5.021,953.895],[7.532,965.223],[11.021,976.289],[15.461,987.008],[20.819,997.3],[27.053,1007.086],[34.116,1016.291],[41.955,1024.845],[50.509,1032.684],[59.714,1039.747],[69.5,1045.981],[79.792,1051.339],[90.511,1055.779],[101.577,1059.268],[112.905,1061.779],[124.408,1063.294],[136,1063.8]],line:[[3,930.8],[3.506,942.392],[5.021,953.895],[7.532,965.223],[11.021,976.289],[15.461,987.008],[20.819,997.3],[27.053,1007.086],[34.116,1016.291],[41.955,1024.845],[50.509,1032.684],[59.714,1039.747],[69.5,1045.981],[79.792,1051.339],[90.511,1055.779],[101.577,1059.268],[112.905,1061.779],[124.408,1063.294],[136,1063.8]]},top_arch_right:{id:"top_arch_right",type:"guide",name:"Top arch (right)",x:434.85,y:987.3,thickness:6,height:28.575,smooth:!1,points:[[358.35,1063.8],[371.685,1063.218],[384.918,1061.476],[397.949,1058.587],[410.679,1054.573],[423.011,1049.465],[434.85,1043.302],[446.107,1036.13],[456.697,1028.005],[466.537,1018.987],[475.555,1009.147],[483.68,998.557],[490.852,987.3],[497.015,975.461],[502.123,963.129],[506.137,950.399],[509.026,937.368],[510.768,924.135],[511.35,910.8]],line:[[358.35,1063.8],[371.685,1063.218],[384.918,1061.476],[397.949,1058.587],[410.679,1054.573],[423.011,1049.465],[434.85,1043.302],[446.107,1036.13],[456.697,1028.005],[466.537,1018.987],[475.555,1009.147],[483.68,998.557],[490.852,987.3],[497.015,975.461],[502.123,963.129],[506.137,950.399],[509.026,937.368],[510.768,924.135],[511.35,910.8]]},shooter_divider:{id:"shooter_divider",type:"guide",name:"Shooter lane divider",x:471.35,y:530.562,thickness:6,height:28.575,from:[471.35,221.123],to:[471.35,840]},shooter_gate:{id:"shooter_gate",type:"gate",name:"Shooter lane gate",x:485.675,y:857.509,rotation:40,width:51.368,length:8,height:28.575,from:[466,841],to:[505.35,874.019],oneWay:!0},left_orbit_guide:{id:"left_orbit_guide",type:"guide",name:"Left orbit guide",x:87.721,y:801.144,thickness:1.6,height:28.575,smooth:!1,points:[[109.535,588.118],[56.071,680.721],[53.284,686.075],[50.973,691.653],[49.158,697.41],[47.851,703.304],[47.063,709.289],[46.8,715.321],[46.8,921.665],[47.138,929.597],[48.15,937.471],[49.829,945.231],[52.162,952.82],[55.132,960.183],[58.719,967.267],[69,980],[79,987],[90,993]],line:[[109.535,588.118],[56.071,680.721],[53.284,686.075],[50.973,691.653],[49.158,697.41],[47.851,703.304],[47.063,709.289],[46.8,715.321],[46.8,921.665],[47.138,929.597],[48.15,937.471],[49.829,945.231],[52.162,952.82],[55.132,960.183],[58.719,967.267],[69,980],[79,987],[90,993]],mounts:[{postId:"left_orbit_post"},{at:.24,side:-1},{at:.5659,side:-1},{at:.9493,side:-1}]},right_orbit_guide:{id:"right_orbit_guide",type:"guide",name:"Right orbit guide",x:396.182,y:747.813,thickness:1.6,height:28.575,smooth:!0,points:[[384,991],[426,937],[427.55,715.321],[427.287,709.289],[426.499,703.304],[425.192,697.41],[423.377,691.653],[421.066,686.075],[418.279,680.721],[364.815,588.118]],line:[[384,991],[387.07,987.26],[390.257,983.718],[393.53,980.32],[396.857,977.012],[400.205,973.739],[403.542,970.449],[406.837,967.087],[410.056,963.599],[413.169,959.931],[416.142,956.029],[418.944,951.839],[421.542,947.306],[423.905,942.378],[426,937],[427.048,933.698],[428.006,930.095],[428.88,926.21],[429.671,922.056],[430.382,917.651],[431.017,913.009],[431.578,908.146],[432.068,903.079],[432.491,897.822],[432.849,892.392],[433.145,886.804],[433.382,881.074],[433.563,875.219],[433.692,869.252],[433.77,863.191],[433.802,857.051],[433.789,850.847],[433.735,844.596],[433.643,838.313],[433.516,832.014],[433.357,825.715],[433.168,819.431],[432.953,813.178],[432.715,806.972],[432.456,800.828],[432.18,794.763],[431.889,788.792],[431.587,782.93],[431.276,777.194],[430.96,771.599],[430.641,766.161],[430.322,760.896],[430.007,755.819],[429.697,750.947],[429.397,746.294],[429.109,741.877],[428.836,737.711],[428.581,733.812],[428.347,730.196],[428.137,726.879],[427.954,723.876],[427.801,721.203],[427.681,718.875],[427.596,716.909],[427.55,715.321],[427.46,711.761],[427.287,709.289],[426.958,706.288],[426.499,703.304],[425.91,700.343],[425.192,697.41],[424.347,694.512],[423.377,691.653],[422.282,688.839],[421.066,686.075],[419.941,683.784],[418.279,680.721],[417.245,678.856],[415.952,676.556],[414.418,673.851],[412.662,670.774],[410.704,667.357],[408.562,663.632],[406.255,659.63],[403.803,655.384],[401.224,650.925],[398.537,646.285],[395.762,641.496],[392.917,636.59],[390.021,631.6],[387.094,626.556],[384.154,621.49],[381.22,616.436],[378.312,611.424],[375.448,606.486],[372.647,601.655],[369.929,596.962],[367.312,592.439],[364.815,588.118]]},left_orbit_wedge:{id:"left_orbit_wedge",type:"guide",name:"Left orbit throat wedge",x:33.292,y:577.195,thickness:1.6,height:28.575,smooth:!0,points:[[5.2,690],[5.66,679.472],[7.035,669.023],[9.316,658.735],[12.485,648.684],[16.518,638.948],[21.384,629.6],[67,553],[58,546],[52,534],[5.2,464.39]],line:[[5.2,690],[5.319,686.488],[5.439,682.975],[5.66,679.472],[6.017,675.977],[6.476,672.491],[7.035,669.023],[7.696,665.573],[8.457,662.141],[9.316,658.735],[10.275,655.355],[11.332,652.002],[12.485,648.684],[13.735,645.401],[15.08,642.153],[16.518,638.948],[17.873,636.125],[19.321,633.345],[21.384,629.6],[22.91,627.044],[24.969,623.856],[27.484,620.117],[30.376,615.907],[33.568,611.309],[36.983,606.403],[40.542,601.269],[44.168,595.99],[47.783,590.646],[51.309,585.318],[54.669,580.087],[57.785,575.034],[60.578,570.241],[62.973,565.788],[64.89,561.756],[66.252,558.227],[66.981,555.281],[67,553],[64.865,550.015],[61.248,548.224],[58,546],[55.979,542.675],[54.393,538.84],[52,534],[50.431,531.379],[48.575,528.402],[46.46,525.102],[44.114,521.514],[41.564,517.672],[38.839,513.612],[35.966,509.368],[32.972,504.974],[29.887,500.464],[26.736,495.874],[23.548,491.238],[20.352,486.591],[17.173,481.966],[14.041,477.399],[10.983,472.925],[8.027,468.577],[5.2,464.39]]},left_orbit_post:{id:"left_orbit_post",type:"post",name:"Left orbit post",x:110.91,y:585.736,width:11,length:11,height:30},right_orbit_post:{id:"right_orbit_post",type:"post",name:"Right orbit post",x:363.44,y:585.736,width:11,length:11,height:30},left_orbit:{id:"left_orbit",type:"rollover",name:"Left orbit rollover",x:26,y:800,rotation:90},right_orbit:{id:"right_orbit",type:"rollover",name:"Right orbit rollover",x:448.35,y:800,rotation:90},left_ramp:{id:"left_ramp",type:"ramp",name:"Left ramp",x:176,y:520,rampType:"plastic",rampWidth:42,widthStart:52,mouthLength:60,wallHeight:28,switches:[.82],entry:"flap",exit:"wireform",points:[[141,602,0],[105,670,14],[95,764,38],[121,833,58],[124,862,66],[123.212,869.999,66.688],[120.879,877.69,67.375],[117.09,884.778,68.063],[111.991,890.991,68.75],[105.778,896.09,69.438],[98.69,899.879,70.125],[90.999,902.212,70.813],[83,903,71.5],[75,903,72]],profile:[[141,602,0,52],[138.368,606.821,.983,51.764],[135.634,611.581,1.938,51.118],[132.825,616.296,2.872,50.153],[129.969,620.983,3.794,48.962],[127.095,625.659,4.71,47.637],[124.23,630.341,5.629,46.268],[121.403,635.045,6.558,44.949],[118.641,639.788,7.505,43.771],[115.971,644.587,8.478,42.825],[113.423,649.458,9.484,42.204],[111.024,654.418,10.532,42],[108.802,659.484,11.629,42],[106.785,664.672,12.782,42],[105,670,14,42],[103.513,675.061,15.184,42],[102.109,680.29,16.428,42],[100.793,685.666,17.726,42],[99.57,691.167,19.071,42],[98.448,696.77,20.457,42],[97.432,702.454,21.878,42],[96.529,708.197,23.328,42],[95.744,713.976,24.799,42],[95.083,719.77,26.287,42],[94.552,725.556,27.784,42],[94.158,731.313,29.284,42],[93.907,737.018,30.781,42],[93.804,742.65,32.268,42],[93.856,748.186,33.741,42],[94.069,753.604,35.191,42],[94.448,758.883,36.613,42],[95,764,38,42],[95.999,769.821,39.601,42],[97.459,775.631,41.231,42],[99.3,781.409,42.878,42],[101.441,787.135,44.533,42],[103.803,792.789,46.184,42],[106.305,798.35,47.822,42],[108.867,803.799,49.434,42],[111.409,809.116,51.012,42],[113.849,814.279,52.544,42],[116.109,819.269,54.019,42],[118.108,824.066,55.427,42],[119.765,828.65,56.758,42],[121,833,58,42],[122.166,838.683,59.64,42],[122.985,844.151,61.254,42],[123.518,849.309,62.771,42],[123.824,854.066,64.116,42],[123.965,858.327,65.217,42],[124,862,66,42],[123.802,866.316,66.49,42],[123.212,869.999,66.688,42],[122.233,873.901,67.031,42],[120.879,877.69,67.375,42],[119.158,881.327,67.719,42],[117.09,884.778,68.063,42],[114.692,888.009,68.406,42],[111.991,890.991,68.75,42],[109.009,893.692,69.094,42],[105.778,896.09,69.438,42],[102.327,898.158,69.781,42],[98.69,899.879,70.125,42],[94.901,901.233,70.469,42],[90.999,902.212,70.813,42],[87.02,902.752,71.168,42],[83,903,71.5,42],[79.002,903.049,71.762,42],[75,903,72,42]],supports:[{at:.3,side:1,x:69.197,y:690.563,z:20.374},{at:.24,side:-1,x:132.109,y:683.861,z:15.433},{at:.66,side:1,x:88.011,y:829.704,z:53.457},{at:.96,side:-1,x:92.91,y:932.127,z:71.001}]},left_wireform:{id:"left_wireform",type:"ramp",name:"Left wireform",x:75,y:903,rampType:"wire_2",rampWidth:36,sideRails:[{side:-1,from:0,to:.2032}],entry:"ramp",exit:"drop",points:[[75,903,67],[63,903,66.6],[56.757,902.385,66.4],[50.754,900.564,66.2],[45.222,897.607,66],[40.373,893.627,65.8],[36.393,888.778,65.6],[33.436,883.246,65.4],[31.615,877.243,65.2],[31,871,65],[31,760,59],[31,690,54.5],[37,620,50.5],[46,560,47],[56,500,44.5],[64,455,43],[69,334,42]],profile:[[75,903,67,36],[70.855,903.037,66.861,36],[66.711,903.073,66.723,36],[63,903,66.6,36],[59.736,902.8,66.495,36],[56.757,902.385,66.4,36],[53.711,901.621,66.3,36],[50.754,900.564,66.2,36],[47.916,899.22,66.1,36],[45.222,897.607,66,36],[42.7,895.735,65.9,36],[40.373,893.627,65.8,36],[38.265,891.3,65.7,36],[36.393,888.778,65.6,36],[34.78,886.084,65.5,36],[33.436,883.246,65.4,36],[32.379,880.289,65.3,36],[31.615,877.243,65.2,36],[31.217,874.62,65.129,36],[31,871,65,36],[30.901,868.358,64.881,36],[30.824,864.958,64.718,36],[30.766,860.871,64.515,36],[30.726,856.168,64.277,36],[30.701,850.92,64.007,36],[30.691,845.198,63.709,36],[30.693,839.073,63.386,36],[30.705,832.616,63.043,36],[30.726,825.898,62.683,36],[30.753,818.991,62.31,36],[30.785,811.964,61.928,36],[30.821,804.89,61.54,36],[30.857,797.839,61.152,36],[30.893,790.882,60.765,36],[30.927,784.091,60.384,36],[30.956,777.536,60.014,36],[30.979,771.288,59.657,36],[30.995,765.419,59.318,36],[31,760,59,36],[30.981,753.603,58.615,36],[30.931,747.401,58.231,36],[30.86,741.366,57.847,36],[30.778,735.471,57.464,36],[30.697,729.687,57.083,36],[30.626,723.987,56.704,36],[30.576,718.344,56.327,36],[30.557,712.729,55.954,36],[30.579,707.115,55.584,36],[30.654,701.474,55.218,36],[30.79,695.778,54.857,36],[31,690,54.5,36],[31.278,684.145,54.148,36],[31.608,678.262,53.801,36],[31.988,672.36,53.459,36],[32.414,666.45,53.12,36],[32.881,660.54,52.785,36],[33.386,654.641,52.453,36],[33.925,648.762,52.124,36],[34.495,642.912,51.797,36],[35.091,637.101,51.471,36],[35.709,631.339,51.147,36],[36.347,625.636,50.823,36],[37,620,50.5,36],[37.691,614.362,50.17,36],[38.422,608.794,49.837,36],[39.19,603.284,49.503,36],[39.988,597.821,49.17,36],[40.812,592.395,48.838,36],[41.656,586.995,48.511,36],[42.516,581.61,48.19,36],[43.385,576.228,47.877,36],[44.259,570.84,47.573,36],[45.132,565.434,47.28,36],[46,560,47,36],[46.875,554.511,46.732,36],[47.769,548.971,46.473,36],[48.678,543.398,46.224,36],[49.598,537.814,45.982,36],[50.525,532.236,45.749,36],[51.454,526.684,45.524,36],[52.383,521.179,45.306,36],[53.305,515.738,45.095,36],[54.219,510.382,44.891,36],[55.118,505.129,44.693,36],[56,500,44.5,36],[57.055,494.217,44.278,36],[58.131,488.817,44.066,36],[59.21,483.631,43.863,36],[60.273,478.49,43.669,36],[61.302,473.226,43.486,36],[62.278,467.669,43.313,36],[63.184,461.65,43.151,36],[64,455,43,36],[64.453,450.516,42.914,36],[64.863,445.783,42.835,36],[65.236,440.82,42.763,36],[65.572,435.646,42.698,36],[65.877,430.28,42.639,36],[66.153,424.742,42.584,36],[66.402,419.05,42.534,36],[66.63,413.224,42.489,36],[66.838,407.283,42.447,36],[67.03,401.247,42.407,36],[67.209,395.133,42.37,36],[67.378,388.963,42.335,36],[67.541,382.753,42.301,36],[67.701,376.525,42.267,36],[67.861,370.297,42.234,36],[68.024,364.087,42.2,36],[68.193,357.917,42.164,36],[68.373,351.803,42.127,36],[68.565,345.767,42.088,36],[68.773,339.826,42.046,36],[69,334,42,36]],supports:[{at:.05,side:1,x:58.016,y:877.69,z:66.024},{at:.39,side:1,x:54.378,y:699.08,z:55.03},{at:.6197,side:-1,x:22.444,y:557.469,z:47.062},{at:.9,side:-1,x:43.169,y:407.139,z:42.452}]},right_ramp:{id:"right_ramp",type:"ramp",name:"Right ramp",x:298.35,y:520,rampType:"plastic",rampWidth:42,widthStart:52,mouthLength:60,wallHeight:28,switches:[.82],entry:null,exit:"wireform",points:[[333,601,0],[374,678,14],[376,770,38],[352,823,58],[350.35,862,66],[351.138,869.999,66.688],[353.471,877.69,67.375],[357.26,884.778,68.063],[362.359,890.991,68.75],[368.572,896.09,69.438],[375.66,899.879,70.125],[383.351,902.212,70.813],[391.35,903,71.5],[399.35,903,72]],profile:[[333,601,0,52],[335.813,606.11,.915,51.735],[338.762,611.178,1.798,51.008],[341.814,616.217,2.657,49.926],[344.933,621.235,3.5,48.601],[348.087,626.242,4.335,47.146],[351.241,631.25,5.17,45.681],[354.361,636.268,6.013,44.321],[357.412,641.306,6.872,43.183],[360.361,646.375,7.755,42.377],[363.174,651.484,8.669,42.011],[365.817,656.645,9.624,42],[368.255,661.867,10.626,42],[370.454,667.159,11.684,42],[372.38,672.534,12.806,42],[374,678,14,42],[375.323,683.464,15.233,42],[376.467,689.107,16.532,42],[377.434,694.9,17.889,42],[378.23,700.811,19.299,42],[378.859,706.81,20.755,42],[379.325,712.868,22.251,42],[379.632,718.954,23.78,42],[379.786,725.038,25.337,42],[379.79,731.089,26.914,42],[379.649,737.077,28.506,42],[379.367,742.973,30.105,42],[378.949,748.745,31.706,42],[378.399,754.365,33.303,42],[377.721,759.8,34.888,42],[376.92,765.022,36.456,42],[376,770,38,42],[374.584,775.54,39.837,42],[372.697,780.844,41.749,42],[370.443,785.941,43.711,42],[367.93,790.863,45.696,42],[365.264,795.64,47.677,42],[362.551,800.304,49.628,42],[359.897,804.885,51.522,42],[357.409,809.415,53.333,42],[355.192,813.923,55.034,42],[353.354,818.441,56.598,42],[352,823,58,42],[350.897,828.998,59.6,42],[350.244,835.234,61.072,42],[349.944,841.479,62.402,42],[349.902,847.505,63.575,42],[350.02,853.086,64.575,42],[350.202,857.993,65.389,42],[350.35,862,66,42],[350.588,866.389,66.457,42],[351.138,869.999,66.688,42],[352.117,873.901,67.031,42],[353.471,877.69,67.375,42],[355.192,881.327,67.719,42],[357.26,884.778,68.063,42],[359.658,888.009,68.406,42],[362.359,890.991,68.75,42],[365.341,893.692,69.094,42],[368.572,896.09,69.438,42],[372.023,898.158,69.781,42],[375.66,899.879,70.125,42],[379.449,901.233,70.469,42],[383.351,902.212,70.813,42],[387.33,902.752,71.168,42],[391.35,903,71.5,42],[395.348,903.049,71.762,42],[399.35,903,72,42]],supports:[{at:.3,side:-1,x:407.103,y:691.181,z:17.954},{at:.24,side:1,x:344.342,y:683.155,z:13.27},{at:.66,side:-1,x:382.1,y:827.126,z:55.704},{at:.96,side:1,x:381.348,y:932.114,z:70.993}]},right_wireform:{id:"right_wireform",type:"ramp",name:"Right wireform",x:399.35,y:903,rampType:"wire_2",rampWidth:36,sideRails:[{side:1,from:0,to:.2032}],entry:"ramp",exit:"drop",points:[[399.35,903,67],[411.35,903,66.6],[417.593,902.385,66.4],[423.596,900.564,66.2],[429.128,897.607,66],[433.977,893.627,65.8],[437.957,888.778,65.6],[440.914,883.246,65.4],[442.735,877.243,65.2],[443.35,871,65],[443.35,760,59],[443.35,690,54.5],[437.35,620,50.5],[428.35,560,47],[418.35,500,44.5],[409,411,43],[403,336,42]],profile:[[399.35,903,67,36],[403.495,903.037,66.861,36],[407.639,903.073,66.723,36],[411.35,903,66.6,36],[414.614,902.8,66.495,36],[417.593,902.385,66.4,36],[420.639,901.621,66.3,36],[423.596,900.564,66.2,36],[426.434,899.22,66.1,36],[429.128,897.607,66,36],[431.65,895.735,65.9,36],[433.977,893.627,65.8,36],[436.085,891.3,65.7,36],[437.957,888.778,65.6,36],[439.57,886.084,65.5,36],[440.914,883.246,65.4,36],[441.971,880.289,65.3,36],[442.735,877.243,65.2,36],[443.133,874.62,65.129,36],[443.35,871,65,36],[443.449,868.358,64.881,36],[443.526,864.958,64.718,36],[443.584,860.871,64.515,36],[443.624,856.168,64.277,36],[443.649,850.92,64.007,36],[443.659,845.198,63.709,36],[443.657,839.073,63.386,36],[443.645,832.616,63.043,36],[443.624,825.898,62.683,36],[443.597,818.991,62.31,36],[443.565,811.964,61.928,36],[443.529,804.89,61.54,36],[443.493,797.839,61.152,36],[443.457,790.882,60.765,36],[443.423,784.091,60.384,36],[443.394,777.536,60.014,36],[443.371,771.288,59.657,36],[443.355,765.419,59.318,36],[443.35,760,59,36],[443.369,753.603,58.615,36],[443.419,747.401,58.231,36],[443.49,741.366,57.847,36],[443.572,735.471,57.464,36],[443.653,729.687,57.083,36],[443.724,723.987,56.704,36],[443.774,718.344,56.327,36],[443.793,712.729,55.954,36],[443.771,707.115,55.584,36],[443.696,701.474,55.218,36],[443.56,695.778,54.857,36],[443.35,690,54.5,36],[443.072,684.145,54.148,36],[442.742,678.262,53.801,36],[442.362,672.36,53.459,36],[441.936,666.45,53.12,36],[441.469,660.54,52.785,36],[440.964,654.641,52.453,36],[440.425,648.762,52.124,36],[439.855,642.912,51.797,36],[439.259,637.101,51.471,36],[438.641,631.339,51.147,36],[438.003,625.636,50.823,36],[437.35,620,50.5,36],[436.659,614.362,50.17,36],[435.928,608.794,49.837,36],[435.16,603.284,49.503,36],[434.362,597.821,49.17,36],[433.538,592.395,48.838,36],[432.694,586.995,48.511,36],[431.834,581.61,48.19,36],[430.965,576.228,47.877,36],[430.091,570.84,47.573,36],[429.218,565.434,47.28,36],[428.35,560,47,36],[427.47,554.589,46.731,36],[426.564,549.252,46.469,36],[425.638,543.96,46.215,36],[424.7,538.688,45.969,36],[423.755,533.406,45.731,36],[422.811,528.089,45.503,36],[421.876,522.708,45.283,36],[420.955,517.236,45.072,36],[420.056,511.646,44.872,36],[419.185,505.909,44.681,36],[418.35,500,44.5,36],[417.632,494.568,44.35,36],[416.928,488.967,44.213,36],[416.238,483.22,44.086,36],[415.562,477.348,43.969,36],[414.9,471.374,43.86,36],[414.25,465.322,43.759,36],[413.615,459.212,43.664,36],[412.992,453.069,43.574,36],[412.383,446.914,43.489,36],[411.787,440.77,43.406,36],[411.204,434.659,43.326,36],[410.634,428.604,43.246,36],[410.077,422.628,43.166,36],[409.532,416.752,43.084,36],[409,411,43,36],[408.458,405.024,42.911,36],[407.941,399.114,42.826,36],[407.447,393.261,42.745,36],[406.972,387.457,42.666,36],[406.513,381.694,42.589,36],[406.066,375.962,42.514,36],[405.628,370.253,42.441,36],[405.196,364.559,42.368,36],[404.765,358.87,42.296,36],[404.334,353.178,42.223,36],[403.898,347.475,42.15,36],[403.455,341.752,42.076,36],[403,336,42,36]],supports:[{at:.05,side:-1,x:416.244,y:877.745,z:66.027},{at:.2851,side:-1,x:419.692,y:762.272,z:59.132},{at:.6386,side:1,x:450.239,y:547.347,z:46.57},{at:.9,side:1,x:432.451,y:407.628,z:42.982}]},pop_1:{id:"pop_1",type:"bumper",name:"Left pop bumper",x:235,y:849.33,width:60,length:60,height:44},pop_2:{id:"pop_2",type:"bumper",name:"Right pop bumper",x:271,y:771.33,width:60,length:60,height:44},pop_3:{id:"pop_3",type:"bumper",name:"Lower pop bumper",x:199,y:773.33,width:60,length:60,height:44},target_a:{id:"target_a",type:"target",name:"Centre target A",x:199.075,y:690,width:25.4,length:10,height:35},target_a_insert:{id:"target_a_insert",type:"insert",name:"Centre target A insert",x:199.9,y:668,width:19,length:19,height:3,shape:"circle",color:"f4f3f8"},target_b:{id:"target_b",type:"target",name:"Centre target B",x:237.175,y:690,width:25.4,length:10,height:35},target_b_insert:{id:"target_b_insert",type:"insert",name:"Centre target B insert",x:238,y:668,width:19,length:19,height:3,shape:"circle",color:"f4f3f8"},target_c:{id:"target_c",type:"target",name:"Centre target C",x:275.275,y:690,width:25.4,length:10,height:35},target_c_insert:{id:"target_c_insert",type:"insert",name:"Centre target C insert",x:276.1,y:668,width:19,length:19,height:3,shape:"circle",color:"f4f3f8"},left_ramp_arrow:{id:"left_ramp_arrow",type:"insert",name:"Left ramp arrow",x:157.3,y:545.5,rotation:16.67,width:24,length:46,height:3,shape:"arrow",color:"a99cff"},left_orbit_arrow:{id:"left_orbit_arrow",type:"insert",name:"Left orbit arrow",x:71,y:590,rotation:30,width:21,length:40,height:3,shape:"arrow",color:"8f7dff"},extra_ball_insert:{id:"extra_ball_insert",type:"insert",name:"Extra ball insert",x:237.175,y:450,width:24,length:24,height:3,shape:"circle",color:"a99cff",icon:"ball"},lock_insert:{id:"lock_insert",type:"insert",name:"Lock insert",x:237.175,y:487,width:29,length:26,height:3,shape:"hexagon",color:"f4f3f8",icon:"lock"},shoot_again:{id:"shoot_again",type:"insert",name:"Shoot again insert",x:237.18,y:139,width:26,length:26,height:3,shape:"shield",color:"a99cff"},left_outlane_insert:{id:"left_outlane_insert",type:"insert",name:"Left outlane insert",x:26,y:386,width:16,length:16,height:3,shape:"circle",color:"f4f3f8"},left_inlane_insert:{id:"left_inlane_insert",type:"insert",name:"Left inlane insert",x:69.4,y:386,width:16,length:16,height:3,shape:"circle",color:"f4f3f8"},right_inlane_insert:{id:"right_inlane_insert",type:"insert",name:"Right inlane insert",x:404.95,y:386,width:16,length:16,height:3,shape:"circle",color:"f4f3f8"},right_outlane_insert:{id:"right_outlane_insert",type:"insert",name:"Right outlane insert",x:448.35,y:386,width:16,length:16,height:3,shape:"circle",color:"f4f3f8"},right_orbit_arrow:{id:"right_orbit_arrow",type:"insert",name:"Right orbit arrow",x:402,y:590,rotation:-30,width:21,length:40,height:3,shape:"arrow",color:"8f7dff"},right_ramp_arrow:{id:"right_ramp_arrow",type:"insert",name:"Right ramp arrow",x:317,y:545.5,rotation:-16.67,width:24,length:46,height:3,shape:"arrow",color:"a99cff"},wizard_insert:{id:"wizard_insert",type:"insert",name:"Wizard insert",x:237.175,y:528,width:36,length:36,height:3,shape:"star",color:"c9c0ff",icon:"crown"},target_guide_left:{id:"target_guide_left",type:"guide",name:"Target bank guide (left)",x:166,y:686,thickness:1.6,height:28.575,smooth:!0,points:[[166,616],[128,684],[118,756],[156,861],[127,911],[102,924],[92,952],[90,993]],mounts:[{at:.7111,side:1}],line:[[166,616],[163.573,620.238],[161.058,624.455],[158.473,628.655],[155.841,632.844],[153.181,637.027],[150.514,641.208],[147.861,645.392],[145.242,649.585],[142.678,653.79],[140.19,658.013],[137.798,662.259],[135.522,666.533],[133.384,670.839],[131.404,675.182],[129.602,679.567],[128,684],[126.496,688.596],[125.073,693.202],[123.739,697.821],[122.505,702.459],[121.378,707.12],[120.367,711.808],[119.483,716.529],[118.732,721.286],[118.126,726.085],[117.671,730.929],[117.379,735.824],[117.256,740.774],[117.313,745.783],[117.558,750.857],[118,756],[118.625,760.256],[119.597,764.641],[120.879,769.141],[122.436,773.741],[124.232,778.428],[126.229,783.187],[128.392,788.002],[130.685,792.86],[133.071,797.747],[135.514,802.647],[137.978,807.546],[140.427,812.43],[142.824,817.284],[145.134,822.094],[147.319,826.845],[149.345,831.523],[151.175,836.113],[152.771,840.601],[154.099,844.972],[155.123,849.212],[155.804,853.306],[156.109,857.24],[156,861],[155.26,866.033],[153.988,870.998],[152.253,875.869],[150.123,880.619],[147.665,885.22],[144.948,889.646],[142.039,893.869],[139.007,897.863],[135.919,901.6],[132.843,905.053],[129.847,908.195],[127,911],[122.885,914.046],[118.398,916.147],[113.803,917.747],[109.362,919.292],[105.34,921.228],[102,924],[99.325,927.734],[97.207,931.999],[95.53,936.676],[94.18,941.647],[93.041,946.795],[92,952],[91.315,956.171],[90.847,960.523],[90.553,965.018],[90.389,969.622],[90.311,974.298],[90.277,979.009],[90.242,983.721],[90.164,988.396],[90,993]]},target_guide_right:{id:"target_guide_right",type:"guide",name:"Target bank guide (right)",x:308.35,y:686,thickness:1.6,height:28.575,smooth:!0,points:[[308.35,616],[349,688],[353.35,759],[321,865],[383,949],[384,991]],mounts:[{at:.7111,side:-1}],line:[[308.35,616],[310.802,620.228],[313.36,624.442],[316.002,628.645],[318.705,632.841],[321.445,637.032],[324.201,641.222],[326.949,645.412],[329.667,649.606],[332.331,653.806],[334.92,658.017],[337.41,662.24],[339.778,666.478],[342.002,670.734],[344.059,675.012],[345.926,679.313],[347.581,683.642],[349,688],[350.278,692.59],[351.395,697.168],[352.355,701.742],[353.164,706.319],[353.825,710.907],[354.344,715.513],[354.724,720.145],[354.971,724.809],[355.089,729.513],[355.083,734.266],[354.958,739.073],[354.717,743.942],[354.366,748.882],[353.908,753.899],[353.35,759],[352.69,763.243],[351.72,767.586],[350.477,772.021],[348.993,776.536],[347.304,781.124],[345.444,785.774],[343.447,790.476],[341.348,795.221],[339.181,800],[336.981,804.802],[334.781,809.618],[332.617,814.438],[330.523,819.253],[328.534,824.054],[326.683,828.83],[325.005,833.571],[323.535,838.27],[322.306,842.914],[321.355,847.496],[320.714,852.005],[320.418,856.432],[320.502,860.767],[321,865],[322.045,869.425],[323.622,873.814],[325.676,878.167],[328.153,882.481],[331.001,886.756],[334.164,890.99],[337.59,895.184],[341.225,899.336],[345.014,903.444],[348.905,907.508],[352.843,911.527],[356.774,915.499],[360.645,919.425],[364.403,923.302],[367.993,927.129],[371.361,930.906],[374.454,934.632],[377.218,938.305],[379.6,941.925],[381.545,945.49],[383,949],[384.417,954.051],[385.222,958.922],[385.537,963.649],[385.485,968.268],[385.188,972.814],[384.769,977.324],[384.349,981.835],[384.052,986.381],[384,991]]},target_post_left:{id:"target_post_left",type:"post",name:"Target bank post (left)",x:184,y:704,width:18,length:18,height:30,ring:!1},target_post_right:{id:"target_post_right",type:"post",name:"Target bank post (right)",x:289,y:704,width:18,length:18,height:30,ring:!1},target_post_centre:{id:"target_post_centre",type:"post",name:"Target bank post (centre)",x:236,y:724,width:18,length:18,height:30,ring:!1},target_rubber:{id:"target_rubber",type:"rubber",name:"Target bank rubber",x:236.333,y:708.667,posts:[[184,702],[289,702],[236,722]],postDiameter:18,cord:4.302,rubberHeight:14.058,postDiameters:[9.72,9.72,9.72],postIds:["target_post_left","target_post_right","target_post_centre"]},upper_left_flipper:{id:"upper_left_flipper",type:"flipper",name:"Upper left flipper",x:79,y:520,rotation:-55,side:"left",pivot:[68.762,534.622],rest:-55,stroke:52,baseR:13,tipR:8.06,reach:40.64,width:61.7,length:26,height:24,sharedSwitch:"s_left_flipper",mechanismAngle:-66},upper_right_flipper:{id:"upper_right_flipper",type:"flipper",name:"Upper right flipper",x:398,y:517,rotation:245,side:"right",pivot:[405.544,533.178],rest:245,stroke:52,baseR:13,tipR:8.06,reach:40.64,width:61.7,length:26,height:24,sharedSwitch:"s_right_flipper",mechanismAngle:-114},right_orbit_wedge:{id:"right_orbit_wedge",type:"guide",name:"Right orbit throat wedge",x:441.058,y:577.195,thickness:1.6,height:28.575,smooth:!0,points:[[469.15,690],[468.69,679.472],[467.315,669.023],[465.034,658.735],[461.865,648.684],[457.832,638.948],[452.966,629.6],[407.35,553],[416.35,546],[422.35,534],[469.15,464.39]],line:[[469.15,690],[469.031,686.488],[468.911,682.975],[468.69,679.472],[468.333,675.977],[467.874,672.491],[467.315,669.023],[466.655,665.573],[465.894,662.141],[465.034,658.735],[464.075,655.355],[463.018,652.002],[461.865,648.684],[460.616,645.401],[459.27,642.153],[457.832,638.948],[456.477,636.125],[455.029,633.346],[452.966,629.6],[451.44,627.044],[449.381,623.856],[446.866,620.117],[443.974,615.907],[440.782,611.309],[437.367,606.403],[433.808,601.269],[430.182,595.99],[426.567,590.646],[423.041,585.318],[419.681,580.087],[416.566,575.034],[413.772,570.241],[411.377,565.788],[409.46,561.756],[408.098,558.227],[407.369,555.281],[407.35,553],[409.485,550.015],[413.103,548.224],[416.35,546],[418.371,542.675],[419.957,538.84],[422.35,534],[423.919,531.379],[425.775,528.402],[427.89,525.102],[430.237,521.514],[432.786,517.672],[435.511,513.612],[438.384,509.368],[441.378,504.974],[444.464,500.464],[447.614,495.874],[450.802,491.238],[453.998,486.591],[457.177,481.966],[460.309,477.4],[463.367,472.925],[466.323,468.577],[469.15,464.39]]},top_lane_rubber_1:{id:"top_lane_rubber_1",type:"rubber",name:"Top lane rubber 1",x:105,y:954,posts:[[104,957],[104,984]],postDiameter:9.5,cord:4.76,rubberHeight:13.5},top_lane_rubber_2:{id:"top_lane_rubber_2",type:"rubber",name:"Top lane rubber 2",x:152,y:963,posts:[[153,966],[153,993]],postDiameter:9.5,cord:4.76,rubberHeight:13.5},top_lane_1:{id:"top_lane_1",type:"rollover",name:"Top lane 1",x:128,y:970,rotation:90},top_lane_rubber_6:{id:"top_lane_rubber_6",type:"rubber",name:"Top lane rubber 6",x:369.35,y:954,posts:[[370.35,957],[370.35,984]],postDiameter:9.5,cord:4.76,rubberHeight:13.5},top_lane_rubber_5:{id:"top_lane_rubber_5",type:"rubber",name:"Top lane rubber 5",x:322.35,y:963,posts:[[321.35,966],[321.35,993]],postDiameter:9.5,cord:4.76,rubberHeight:13.5},top_lane_5:{id:"top_lane_5",type:"rollover",name:"Top lane 5",x:346.35,y:970,rotation:-90},top_lane_1_insert:{id:"top_lane_1_insert",type:"insert",name:"Top lane 1 insert",x:127,y:1011,width:19.05,length:19.05,height:3,shape:"circle",color:"f4f3f8"},top_lane_5_insert:{id:"top_lane_5_insert",type:"insert",name:"Top lane 5 insert",x:347,y:1009,width:19.05,length:19.05,height:3,shape:"circle",color:"f4f3f8"},top_lane_2_insert:{id:"top_lane_2_insert",type:"insert",name:"Top lane 2 insert",x:177,y:1024,width:19.05,length:19.05,height:3,shape:"circle",color:"f4f3f8"},top_lane_3_insert:{id:"top_lane_3_insert",type:"insert",name:"Top lane 3 insert",x:234,y:1033,width:19.05,length:19.05,height:3,shape:"circle",color:"f4f3f8"},top_lane_4_insert:{id:"top_lane_4_insert",type:"insert",name:"Top lane 4 insert",x:294,y:1024,width:19.05,length:19.05,height:3,shape:"circle",color:"f4f3f8"},saucer_arrow:{id:"saucer_arrow",type:"insert",name:"Saucer arrow",x:235,y:912,width:20,length:36,height:3,shape:"arrow",color:"c9c0ff"},top_lane_rubber_3:{id:"top_lane_rubber_3",type:"rubber",name:"Top lane rubber 3",x:205,y:973,posts:[[206,976],[206,1003]],postDiameter:9.5,cord:4.76,rubberHeight:13.5},top_lane_rubber_4:{id:"top_lane_rubber_4",type:"rubber",name:"Top lane rubber 4",x:266,y:972,posts:[[265,975],[265,1002]],postDiameter:9.5,cord:4.76,rubberHeight:13.5},top_lane_2:{id:"top_lane_2",type:"rollover",name:"Top lane 2",x:177,y:983,rotation:90},top_lane_4:{id:"top_lane_4",type:"rollover",name:"Top lane 4",x:294,y:983,rotation:-90},saucer:{id:"saucer",type:"kicker",name:"Saucer",x:235,y:949,width:30,length:30,height:15,kickerType:"saucer",kickAngle:-120,kickSpeed:30,kick:1619.25,pulseMs:30},top_lane_3:{id:"top_lane_3",type:"rollover",name:"Top lane 3",x:234,y:992,rotation:90}};var vt={w:Ri.width,l:Ri.length,thick:Ri.thickness,cx:Ri.centreX,pitch:Ri.slope,rail:mt.boundary_left.x+mt.boundary_left.thickness/2},mn=Ri.ball/2,$n=i=>Math.round(i*100)/100,rv=(i,t)=>i.map((e,n)=>{let s=i[Math.max(0,n-1)],r=i[Math.min(i.length-1,n+1)],a=r[0]-s[0],o=r[1]-s[1],l=Math.hypot(a,o)||1;return[$n(e[0]-o/l*t),$n(e[1]+a/l*t)]}),ic=(i,t)=>({id:t,side:i.side,upper:!!i.sharedSwitch,x:i.pivot[0],y:i.pivot[1],rest:i.rest,up:i.rest+(i.side==="left"?1:-1)*i.stroke,baseR:i.baseR,tipR:i.tipR,length:i.reach,height:i.height}),Sn=[ic(mt.left_flipper,"left"),ic(mt.right_flipper,"right"),ic(mt.upper_left_flipper,"upper-left"),ic(mt.upper_right_flipper,"upper-right")],Ss={base:11.28,tip:6.64,flange:[9.21,4.45],groove:[8.05,3.68],cap:[8.2,3.4],rubberFrom:8.6,rubberTo:20};function sc(i){let t=([e,n])=>[$n(e/Ss.base*i.baseR),$n(n/Ss.tip*i.tipR)];return{flange:t(Ss.flange),groove:t(Ss.groove),cap:t(Ss.cap),rubberFrom:Ss.rubberFrom,rubberTo:Ss.rubberTo}}var av={baseR:Sn[0].baseR,tipR:Sn[0].tipR,length:Sn[0].length,height:Sn[0].height,...sc(Sn[0])},br=[mt.left_sling,mt.right_sling].map(i=>({side:i.side,posts:i.posts,postR:i.postRadius,reach:i.contactRadius})),$f=mt.apron.outline,ne={deck:mt.apron.height,lipR:mt.apron.lip.radius,lipCy:mt.apron.lip.centre[1],lipEndY:mt.apron.lip.from[1],leftShoulder:$f.at(-1),rightShoulder:$f[2]};ne.lipHalf=Math.sqrt(ne.lipR**2-(ne.lipCy-ne.lipEndY)**2);ne.lipLeft=[vt.cx-ne.lipHalf,ne.lipEndY];ne.lipRight=[vt.cx+ne.lipHalf,ne.lipEndY];var pu=[mt.left_drain_guide,mt.right_drain_guide].map(i=>[i.from,i.to]),re={laneLeft:mt.shooter_divider.x+mt.shooter_divider.thickness/2,laneRight:mt.boundary_right.x-mt.boundary_right.thickness/2,dividerFace:mt.shooter_divider.x-mt.shooter_divider.thickness/2,dividerTop:mt.shooter_divider.to[1],apronTop:$n(mt.shooter_divider.from[1]),ballRest:[mt.shooter.x,mt.shooter.y+mt.shooter.length/2+mn]},Jf=(i,t)=>{let e=i.points[0],n=i.points.at(-1),s=i.thickness/2;return t?{cx:n[0],cy:e[1],r:$n(n[0]-e[0]-s)}:{cx:e[0],cy:n[1],r:$n(n[0]-e[0]-s)}},Ci={top:vt.l-vt.rail,left:Jf(mt.top_arch_left,!0),right:Jf(mt.top_arch_right,!1)},Tr=["left","right"].map(i=>{let t=mt[`${i}_inlane_guide`],e=mt[`${i}_inlane_guide_cover`];return{side:i,thickness:t.thickness,plate:{id:t.id,z:t.z,outline:t.outline},cover:{id:e.id,z:e.z,outline:e.outline},stacks:[mt[`${i}_inlane_guide_stack_1`],mt[`${i}_inlane_guide_stack_2`]].map(n=>[n.x,n.y]),post:[mt[`${i}_outlane_post`].x,mt[`${i}_outlane_post`].y]}}),rc=Tr.map(i=>i.post),pi=["left_outlane","left_inlane","right_inlane","right_outlane"].map(i=>({id:i,kind:i.endsWith("outlane")?"outlane":"inlane",x:mt[i].x,y:mt[i].y,insert:mt[`${i}_insert`].id,insertY:mt[`${i}_insert`].y})),ov={lane:Ri.orbitLane,throat:Ri.throat,steel:mt.left_orbit_guide.thickness,height:mt.left_orbit_guide.height},ac=[mt.left_orbit_guide,mt.right_orbit_guide].map((i,t)=>({side:t?"right":"left",line:i.line,face:rv(i.line,i.thickness/2),mounts:i.mounts||[]})),mu=[mt.left_orbit_wedge,mt.right_orbit_wedge].map((i,t)=>({side:t?"right":"left",line:i.line})),gu=[mt.left_orbit_post,mt.right_orbit_post].map(i=>[i.x,i.y]),oc={d:mt.left_orbit_post.width,height:mt.left_orbit_post.height},Oa=[mt.left_orbit,mt.right_orbit].map((i,t)=>({side:t?"right":"left",x:i.x,y:i.y})),Ts={from:mt.shooter_gate.from,to:mt.shooter_gate.to,height:28.6},Pi={lanes:[1,2,3,4,5].map(i=>{let t=mt[`top_lane_${i}`],e=mt[`top_lane_${i}_insert`];return{x:t.x,y:t.y,insert:e.id,insertX:e.x,insertY:e.y}}),rubbers:[1,2,3,4,5,6].map(i=>{let t=mt[`top_lane_rubber_${i}`];return{posts:t.posts,postR:t.postDiameter/2,cord:t.cord,h:t.rubberHeight}})},mi={x:mt.saucer.x,y:mt.saucer.y,r:mt.saucer.width/2,depth:mt.saucer.height,kickAngle:mt.saucer.kickAngle,kick:Math.round(mt.saucer.kick),reach:mt.saucer.width/2*.7,maxSpeed:900,hold:1},Es=["pop_1","pop_2","pop_3"].map(i=>({id:i,x:mt[i].x,y:mt[i].y})),Er={cap:mt.pop_1.width,height:mt.pop_1.height,ringRest:29.5,ringTravel:9,reach:34},Jn={list:["target_a","target_b","target_c"].map(i=>({id:i,x:mt[i].x,y:mt[i].y,insert:mt[`${i}_insert`].id})),width:mt.target_a.width,depth:mt.target_a.length,height:mt.target_a.height},lc=[mt.target_guide_left,mt.target_guide_right].map((i,t)=>({side:t?"right":"left",line:i.line,mounts:i.mounts||[],thickness:i.thickness,height:i.height})),xu=["target_post_left","target_post_right","target_post_centre"].map(i=>({x:mt[i].x,y:mt[i].y,d:mt[i].width,height:mt[i].height})),gi={posts:mt.target_rubber.postIds.map(i=>[mt[i].x,mt[i].y]),grooves:mt.target_rubber.postDiameters.map(i=>i/2),cord:mt.target_rubber.cord,h:mt.target_rubber.rubberHeight},wr={width:mt.left_ramp.rampWidth,mouth:mt.left_ramp.widthStart,flare:mt.left_ramp.mouthLength,wall:mt.left_ramp.wallHeight,floor:3,side:2.4},fu=mt.left_wireform.rampWidth*.31,bs=2.5,Kf=Math.sqrt((mn+bs)**2-fu**2),cc={rod:bs,rail:$n(fu),ride:$n(bs+Kf),sideRail:{u:$n(Math.max(fu,(mn+bs+1.5)*Math.cos(25*Math.PI/180))),v:$n(bs+Kf+(mn+bs+1.5)*Math.sin(25*Math.PI/180))},dropRadius:mn+bs+3,spread:40},jf=(i,t,e,n,s)=>({side:i,id:t,profile:e.profile,supports:e.supports.map(r=>[r.x,r.y,r.z]),switchAt:e.switches?.[0],wire:n.profile,wireSupports:n.supports.map(r=>[r.x,r.y,r.z]),sideRails:n.sideRails||[],arrow:{x:mt[s].x,y:mt[s].y,angle:mt[s].rotation},post:rc[i==="left"?0:1]}),ns=[jf("left","deadbounce",mt.left_ramp,mt.left_wireform,"left_ramp_arrow"),jf("right","tiptop",mt.right_ramp,mt.right_wireform,"right_ramp_arrow")],lv={a99cff:"royal","8f7dff":"deep",c9c0ff:"light",f4f3f8:"white"},_u=Object.values(mt).filter(i=>i.type==="insert").map(i=>({id:i.id,x:i.x,y:i.y,angle:i.rotation||0,width:i.width,length:i.length,shape:i.shape,color:lv[i.color]||"white",icon:i.icon})),hc=[[18,520],[2*vt.cx-18,520]];function en(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Me,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Qf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let y=0;y<a[h].length;++y)f.push(a[h][y][d]);let g=Qf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Qf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new vn(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){let y=h.getComponent(d,g);o.setComponent(d+u,g,y)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var D=.001;function Ee(i,t,e=0){return new U((i-vt.w/2)*D,e*D,(vt.l/2-t)*D)}function Ii(i,t,e,{bevel:n=0,curveSegments:s=12,holes:r=[]}={}){let a=new un(i.map(([l,c])=>new ot((l-vt.w/2)*D,(c-vt.l/2)*D)));for(let l of r)a.holes.push(new oi(l.map(([c,h])=>new ot((c-vt.w/2)*D,(h-vt.l/2)*D))));let o=new li(a,{depth:Math.max(e-n*2,1e-4)*D,bevelEnabled:n>0,bevelThickness:n*D,bevelSize:n*D,bevelSegments:3,curveSegments:s});return o.rotateX(-Math.PI/2),o.translate(0,(t+n)*D,0),o}function is(i,t,{bevel:e=0,curveSegments:n=12}={}){let s=new un(i.map(([a,o])=>new ot(a*D,o*D))),r=new li(s,{depth:Math.max(t-e*2,1e-4)*D,bevelEnabled:e>0,bevelThickness:e*D,bevelSize:e*D,bevelSegments:3,curveSegments:n});return r.rotateX(-Math.PI/2),r.translate(0,e*D,0),r}function Ie(i,t,e,n=0,s=0){return i.position.copy(Ee(t,e,n)),i.rotation.y=s*Math.PI/180,i}function Fe(i,t=48){return new la(i.map(([e,n])=>new ot(e*D,n*D)),t)}function Ba(i,t,{tension:e=.5,segments:n,radial:s=10,closed:r=!1}={}){let a=new On(i.map(([l,c,h])=>Ee(l,c,h)),r,"catmullrom",e),o=a.getLength();return new wi(a,n||Math.max(12,Math.round(o/.006)),t*D,s,r)}function uc(i,t,{tension:e=.5,segments:n,radial:s=10,closed:r=!1}={}){let a=new On(i.map(([o,l,c])=>new U(o*D,c*D,-l*D)),r,"catmullrom",e);return new wi(a,n||Math.max(12,Math.round(a.getLength()/.002)),t*D,s,r)}function dc(i,t){let e=[];for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],a=Math.max(1,Math.ceil(Math.hypot(r[0]-s[0],r[1]-s[1])/t));for(let o=0;o<a;o++)e.push([s[0]+(r[0]-s[0])*(o/a),s[1]+(r[1]-s[1])*(o/a)])}return e}function ss(i,t,e=10){let n=[],s=i.length;for(let r=0;r<s;r++){let a=i[r],o=i[(r-1+s)%s],l=i[(r+1)%s],c=Math.atan2(a[1]-o[1],a[0]-o[0])-Math.PI/2,h=Math.atan2(l[1]-a[1],l[0]-a[0])-Math.PI/2;for(;h<c;)h+=Math.PI*2;for(let u=0;u<=e;u++){let d=c+(h-c)*(u/e);n.push([a[0]+Math.cos(d)*t,a[1]+Math.sin(d)*t])}}return n}function cv(i){let t=0;for(let e=0;e<i.length;e++){let[n,s]=i[e],[r,a]=i[(e+1)%i.length];t+=n*a-r*s}return t/2}var Cn=i=>cv(i)<0?[...i].reverse():i;function bn(i,t,e,n=0){let s=[],r=[];for(let a=0;a<i.length;a++){let o=i[a],l=i[Math.max(0,a-1)],c=i[Math.min(i.length-1,a+1)],h=c[0]-l[0],u=c[1]-l[1],d=Math.hypot(h,u)||1;h/=d,u/=d,s.push([o[0]-u*t/2,o[1]+h*t/2]),r.push([o[0]+u*t/2,o[1]-h*t/2])}return Ii(Cn([...s,...r.reverse()]),n,e)}function ka(i,t,e,n,s,r=24){return Array.from({length:r+1},(a,o)=>{let l=(n+(s-n)*(o/r))*Math.PI/180;return[i+Math.cos(l)*e,t+Math.sin(l)*e]})}var ce={royal:"#2B59FF",light:"#6E8CFF",deep:"#1F46E0",ice:"#A9BFFF",black:"#06070A",black1:"#0B0C0F",black2:"#14161A",black3:"#262A31",white:"#FFFFFF",paper:"#F5F6F8",paper2:"#F4F5F7",grey:"#9AA1AB"},kn=i=>parseInt(ce[i].slice(1),16),Ar=i=>{let t=kn(i),e=t>>16,n=t>>8&255,s=t&255;return r=>`rgba(${e}, ${n}, ${s}, ${r})`};var hv=i=>{let t=new Wt(i);return .2126*t.r+.7152*t.g+.0722*t.b},za=(i,t)=>t/hv(i),fc=i=>za(i,1.15),Pn=kn("royal"),pc=kn("light"),mc=kn("deep"),ws=15659775,tp=(i,t,e)=>new ge({color:0,metalness:0,roughness:e,envMap:i,envMapIntensity:t,transparent:!0,depthWrite:!1,blending:gs,side:fn});function np(i){let t={};return t.cabinet=new Ke({color:kn("black1"),roughness:.45,metalness:0,clearcoat:1,clearcoatRoughness:.07}),t.cabinetInner=new ge({color:kn("black"),roughness:.95,envMap:i,envMapIntensity:.2}),t.aluminium=new ge({color:13028045,roughness:.42,metalness:1,roughnessMap:yu()}),t.armour=new ge({color:3159100,roughness:.5,metalness:.85,roughnessMap:yu()}),t.trim=new ge({color:kn("black3"),roughness:.38,metalness:.9}),t.chrome=new ge({color:14475234,roughness:.06,metalness:1}),t.ball=new ge({color:14080733,roughness:.05,metalness:1,envMap:i,envMapIntensity:1.15}),t.steel=new ge({color:11844031,roughness:.48,metalness:1,roughnessMap:yu()}),t.zinc=new ge({color:12764873,roughness:.5,metalness:1}),t.darkSteel=new ge({color:3422269,roughness:.4,metalness:1}),t.rubber=new ge({color:723983,roughness:.6}),t.rubberRoyal=new ge({color:Pn,roughness:.5}),t.whitePlastic=new ge({color:kn("paper"),roughness:.3}),t.graphitePlastic=new ge({color:kn("black2"),roughness:.35}),t.postPlastic=new Ke({color:mc,roughness:.16,clearcoat:1,clearcoatRoughness:.04,emissive:Pn,emissiveIntensity:za(Pn,.035),sheen:.6,sheenColor:pc,sheenRoughness:.4}),t.clearPlastic=new Ke({color:14542578,roughness:.05,metalness:0,envMap:i,envMapIntensity:.8,clearcoat:1,clearcoatRoughness:.03,transparent:!0,opacity:.1,side:fn,depthWrite:!1}),t.glass=tp(i,.45,.02),t.screenGlass=tp(i,.2,.03),t.wood=new ge({color:12886388,roughness:.78}),t.cardPaper=new ge({color:16777215,roughness:.75}),t.popCap=new Ke({color:Pn,roughness:.16,clearcoat:1,clearcoatRoughness:.04,emissive:Pn,emissiveIntensity:.25}),t.popCap.userData.gain=fc(Pn)*.5,t.popBody=new ge({color:kn("paper"),roughness:.3,emissive:ws,emissiveIntensity:.06}),t.popBody.userData.gain=fc(ws)*.5,t.bulb=new ge({color:16251391,roughness:.1,emissive:ws,emissiveIntensity:0}),t.bulb.userData.gain=fc(ws),t.speaker=new ge({color:kn("black1"),roughness:.65,metalness:.4}),t}function ip(i){return new Ke({map:i,roughness:.6,metalness:0,clearcoat:1,clearcoatRoughness:.06})}var ep={royal:Pn,deep:mc,light:pc,white:ws};function Mu(i){let t=new Wt(ep[i]??ep.white),e=new Ke({color:t.clone().multiplyScalar(.12),roughness:.3,clearcoat:1,clearcoatRoughness:.03,emissive:t,emissiveIntensity:.06,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2});return e.userData.gain=fc(t),e}function yu(i=256){let t=document.createElement("canvas");t.width=t.height=i;let e=t.getContext("2d");e.fillStyle="#fff",e.fillRect(0,0,i,i);for(let s=0;s<1400;s++){let r=Math.round(200+Math.random()*55);e.fillStyle=`rgb(${r},${r},${r})`,e.fillRect(0,Math.random()*i,i,.6+Math.random())}let n=new Ei(t);return n.wrapS=n.wrapT=yn,n.repeat.set(4,4),n}var zn={field:ce.black2,white:ce.paper,grey:ce.grey,royal:ce.royal,light:ce.light,deep:ce.deep,ink:ce.black2,cab:ce.black1},xe=Ar("paper"),we=Ar("royal"),rp=Ar("deep"),Ze=Ar("light"),bu=Ar("grey"),sp={royal:we,deep:rp,light:Ze,white:xe},Su={display:(i,t=650)=>`${t} ${i}px Archivo`,mono:(i,t=500)=>`${t} ${i}px "Martian Mono"`,body:(i,t=500)=>`${t} ${i}px "Instrument Sans"`};function Kn(i,t,e,n){t==="display"?(i.font=Su.display(e,n),i.fontStretch="semi-expanded",i.letterSpacing=`${-e*.03}px`):t==="mono"?(i.font=Su.mono(e,n),i.fontStretch="semi-condensed",i.letterSpacing=`${e*.08}px`):(i.font=Su.body(e,n),i.fontStretch="normal",i.letterSpacing="0px")}async function ap(){await Promise.all([document.fonts.load("700 40px Archivo"),document.fonts.load('500 20px "Martian Mono"'),document.fonts.load('500 20px "Instrument Sans"')]).catch(()=>{})}function In(i,t){let e=document.createElement("canvas");return e.width=Math.round(i),e.height=Math.round(t),e}function uv(i,t=40){return Array.from({length:t},(e,n)=>{let s=n/t*Math.PI*2;return[Math.cos(s)*i/2,Math.sin(s)*i/2]})}function dv(i,t){let e=i*.4,n=t*.44,s=e*.42;return[[-e/2,-t/2],[0,-t/2+s],[e/2,-t/2],[e/2,t/2-n],[i/2,t/2-n],[0,t/2],[-i/2,t/2-n],[-e/2,t/2-n]]}function fv(i,t){return Array.from({length:6},(e,n)=>[Math.cos(n*Math.PI/3)*i/2,Math.sin(n*Math.PI/3)*t/2])}function pv(i,t){return Array.from({length:10},(e,n)=>{let s=n%2?.45:1,r=Math.PI/2+n*Math.PI/5;return[Math.cos(r)*(i/2)*s,Math.sin(r)*(t/2)*s]})}function mv(i,t){let e=-t/2+t*.45,n=[[0,-t/2]];for(let s=1;s<=8;s++){let r=s/8;n.push([i/2*Math.sin(r*Math.PI/2),-t/2+(e+t/2)*(1-Math.cos(r*Math.PI/2))])}n.push([i/2,t/2-t*.08],[i*.3,t/2],[-i*.3,t/2],[-i/2,t/2-t*.08]);for(let s=8;s>=1;s--){let r=s/8;n.push([-i/2*Math.sin(r*Math.PI/2),-t/2+(e+t/2)*(1-Math.cos(r*Math.PI/2))])}return n}var gv={circle:(i,t)=>uv(Math.min(i,t)),arrow:dv,hexagon:fv,star:pv,shield:mv},xv=["Web","Game","Media","Fab"],_v=[["2025","Freelance"],["2023","Glaser Group"],["2021","Origin Beer Lab"],["2018","T&B Equipment"],["2018","Atlee High"]];function Tu(){let i=new Map;return Pi.lanes.forEach((t,e)=>i.set(t.insert,{group:"years",index:e,legend:_v[e][0]})),pi.forEach((t,e)=>i.set(t.insert,{group:"skills",index:e,legend:xv[e]})),ns.forEach((t,e)=>i.set(`${t.side}_ramp_arrow`,{group:"ramp"+e,index:e})),["left_orbit_arrow","right_orbit_arrow"].forEach((t,e)=>i.set(t,{group:"orbit",index:e})),Jn.list.forEach((t,e)=>i.set(t.insert,{group:"targets",index:e})),["extra_ball_insert","lock_insert","wizard_insert"].forEach((t,e)=>i.set(t,{group:"ladder",index:e})),i.set("saucer_arrow",{group:"saucer",index:0}),i.set("shoot_again",{group:"again",index:0}),_u.map(t=>({...t,...i.get(t.id)||{group:"other",index:0},w:t.width,l:t.length,shape:gv[t.shape](t.width,t.length)}))}function As(i){let t=Number(i.replace(/\D+/g,""));return i.startsWith("lane")?Pi.lanes[t]?.insert:i.startsWith("return")?pi[t]?.insert:i.startsWith("orbit")?["left_orbit_arrow","right_orbit_arrow"][t]:null}function op(i,t=128){let e=In(t,Math.round(t*i.l/i.w)),n=e.getContext("2d"),s=t/i.w,r=e.width/2,a=e.height/2;n.fillStyle="#fff",n.fillRect(0,0,e.width,e.height);let o="rgba(11, 12, 15, 0.92)";if(n.fillStyle=o,n.strokeStyle=o,n.lineCap="round",n.lineJoin="round",i.legend){let c=/^\d+$/.test(i.legend),h=c?Math.min(i.w*.25,4.8):Math.min(i.w*.84/(i.legend.length*.74+.3),3.7);Be(n,r,a+s*.15,i.legend,h*s,o,c?"display":"mono")}let l=Math.min(i.w,i.l)*s;if(i.icon==="ball")n.lineWidth=l*.07,n.beginPath(),n.arc(r,a,l*.23,0,Math.PI*2),n.stroke(),n.beginPath(),n.arc(r-l*.07,a-l*.07,l*.06,0,Math.PI*2),n.fill();else if(i.icon==="lock")n.lineWidth=l*.07,n.beginPath(),n.moveTo(r-l*.13,a+l*.02),n.arc(r,a-l*.06,l*.13,Math.PI,0),n.lineTo(r+l*.13,a+l*.02),n.stroke(),n.beginPath(),n.roundRect(r-l*.21,a,l*.42,l*.3,l*.04),n.fill();else if(i.icon==="crown"){let c=l*.4,h=l*.26,u=a+l*.12;n.beginPath(),n.moveTo(r-c/2,u),n.lineTo(r-c/2,u-h),n.lineTo(r-c/4,u-h*.45),n.lineTo(r,u-h*1.15),n.lineTo(r+c/4,u-h*.45),n.lineTo(r+c/2,u-h),n.lineTo(r+c/2,u),n.closePath(),n.fill()}return e}function lp(i){let t=In(vt.w*i,vt.l*i),e=t.getContext("2d"),n=x=>x*i,s=x=>(vt.l-x)*i,r=x=>x*i,a=(x,E,_,T)=>{let A=e.createRadialGradient(n(x),s(E),0,n(x),s(E),r(_));T.forEach(([C,L])=>A.addColorStop(C,L)),e.fillStyle=A,e.fillRect(0,0,t.width,t.height)};e.fillStyle=zn.field,e.fillRect(0,0,t.width,t.height),a(vt.cx,520,640,[[0,ce.black3],[.55,"#1a1d22"],[1,"rgba(20, 22, 26, 0)"]]),a(vt.cx,820,230,[[0,we(.2)],[1,we(0)]]);let o=(x,E)=>Math.max(0,1-Math.hypot((x-vt.cx)/1.1,(E-560)/1.6)/480);e.fillStyle=xe(1);for(let x=6.35;x<vt.l;x+=6.35)for(let E=6.35;E<vt.w;E+=6.35){let _=.085*o(E,x);_<.01||(e.globalAlpha=_,e.fillRect(n(E)-r(.28),s(x)-r(.28),r(.56),r(.56)))}e.strokeStyle=xe(1),e.lineWidth=r(.32);for(let x=50.8;x<vt.l;x+=50.8)for(let E=vt.cx%50.8;E<vt.w;E+=50.8){let _=.3*o(E,x);_<.02||(e.globalAlpha=_,e.beginPath(),e.moveTo(n(E-2.2),s(x)),e.lineTo(n(E+2.2),s(x)),e.moveTo(n(E),s(x-2.2)),e.lineTo(n(E),s(x+2.2)),e.stroke())}e.globalAlpha=1;let[l,c]=Es.reduce((x,E)=>[x[0]+E.x/Es.length,x[1]+E.y/Es.length],[0,0]);for(let x=c-176;x<c+176;x+=5.08)for(let E=l-176;E<l+176;E+=5.08){let _=1-Math.hypot(E-l,x-c)/176;_<=.04||(e.fillStyle=we(.1+.36*_),e.beginPath(),e.arc(n(E),s(x),r(.22+1.1*_*_),0,Math.PI*2),e.fill())}let h=(x,E,_=.4,T=null)=>{e.save(),e.strokeStyle=Ze(E),e.lineWidth=r(_),T&&e.setLineDash(T.map(r)),e.beginPath(),e.arc(n(l),s(c),r(x),0,Math.PI*2),e.stroke(),e.restore()};h(70,.5,.5),h(98,.28,.35,[3,2]),h(128,.42,.45),h(162,.18,.35),e.strokeStyle=Ze(.5),e.lineCap="butt";for(let x=0;x<360;x+=5){let E=x*Math.PI/180,_=x%30===0,T=128,A=128+(_?5:2.2);e.lineWidth=r(_?.5:.3),e.beginPath(),e.moveTo(n(l+Math.sin(E)*T),s(c+Math.cos(E)*T)),e.lineTo(n(l+Math.sin(E)*A),s(c+Math.cos(E)*A)),e.stroke(),_&&Be(e,n(l+Math.sin(E)*138),s(c+Math.cos(E)*138),String(x).padStart(3,"0"),r(2.4),Ze(.62),"mono")}let u=(x,E,_,T,A,C=xe)=>{let L=e.createLinearGradient(0,s(E),0,s(_));L.addColorStop(0,C(0)),L.addColorStop(.35,C(A)),L.addColorStop(1,C(0)),e.fillStyle=L,e.beginPath(),e.roundRect(n(x-T/2),s(_),r(T),r(_-E),r(T/2)),e.fill()};for(let x of pi)u(x.x,220,420,20,.14);for(let x of Oa){u(x.x,640,900,22,.12),e.lineWidth=r(1.4),e.lineJoin="round",e.lineCap="round";for(let E=660,_=0;E<880;E+=34,_++)e.strokeStyle=Ze(.12+_*.025),e.beginPath(),e.moveTo(n(x.x-6),s(E)),e.lineTo(n(x.x),s(E+6)),e.lineTo(n(x.x+6),s(E)),e.stroke()}for(let x of Pi.lanes)u(x.x,x.y-40,x.y+70,20,.18);{let x=re.laneLeft,E=re.laneRight,_=e.createLinearGradient(0,s(0),0,s(re.dividerTop));_.addColorStop(0,we(.06)),_.addColorStop(1,we(.26)),e.fillStyle=_,e.fillRect(n(x),s(re.dividerTop),r(E-x),r(re.dividerTop));let T=(x+E)/2;e.lineWidth=r(2.2),e.lineJoin="round",e.lineCap="round";for(let A=130,C=0;A<780;A+=46,C++)e.strokeStyle=Ze(.34+C*.03),e.beginPath(),e.moveTo(n(T-9),s(A)),e.lineTo(n(T),s(A+9)),e.lineTo(n(T+9),s(A)),e.stroke();e.lineCap="butt";for(let A=0;A<=re.dividerTop-160;A+=10){let C=120+A,L=A%50===0;e.strokeStyle=xe(L?.42:.22),e.lineWidth=r(L?.45:.3),e.beginPath(),e.moveTo(n(x+1.2),s(C)),e.lineTo(n(x+1.2+(L?4.5:2.2)),s(C)),e.stroke(),A%100===0&&A&&Be(e,n(x+9.5),s(C),String(A/10),r(2.3),xe(.45),"mono")}e.save(),e.translate(n(T),s(860)),e.rotate(-Math.PI/2),Be(e,0,0,"Launch",r(3),Ze(.7),"mono"),e.restore()}let d=(x,E,_,T,A,C=we)=>{let L=E[0]-x[0],O=E[1]-x[1],I=Math.hypot(L,O),F=-O/I,k=L/I,G=e.createLinearGradient(n(x[0]),s(x[1]),n(E[0]),s(E[1]));G.addColorStop(0,C(0)),G.addColorStop(.6,C(A*.55)),G.addColorStop(1,C(A)),e.fillStyle=G,e.beginPath(),e.moveTo(n(x[0]+F*_/2),s(x[1]+k*_/2)),e.lineTo(n(E[0]+F*T/2),s(E[1]+k*T/2)),e.lineTo(n(E[0]-F*T/2),s(E[1]-k*T/2)),e.lineTo(n(x[0]-F*_/2),s(x[1]-k*_/2)),e.closePath(),e.fill();let st=e.createLinearGradient(n(x[0]),s(x[1]),n(E[0]),s(E[1]));st.addColorStop(0,C(0)),st.addColorStop(1,C(Math.min(1,A*2.2))),e.strokeStyle=st,e.lineWidth=r(.9);for(let W of[1,-1])e.beginPath(),e.moveTo(n(x[0]+W*F*_/2),s(x[1]+W*k*_/2)),e.lineTo(n(E[0]+W*F*T/2),s(E[1]+W*k*T/2)),e.stroke()};ns.forEach(x=>d([x.side==="left"?262:2*vt.cx-262,196],[x.profile[0][0],x.profile[0][1]-2],8,50,.36));let f=Tu(),g=Object.fromEntries(f.map(x=>[x.id,x]));for(let x of["left_orbit_arrow","right_orbit_arrow"]){let E=g[x],_=E.angle*Math.PI/180,T=[-Math.sin(_),Math.cos(_)];d([E.x-T[0]*400,E.y-T[1]*400],[E.x+T[0]*34,E.y+T[1]*34],4,28,.18,rp)}let y=g.saucer_arrow;d([vt.cx,610],[y.x,y.y+10],6,30,.2);for(let x of f){let E=sp[x.color]||xe,_=Math.max(x.w,x.l)*1.15,T=x.color==="white"?.55:1,A=e.createRadialGradient(n(x.x),s(x.y),0,n(x.x),s(x.y),r(_));A.addColorStop(0,E(.4*T)),A.addColorStop(.55,E(.13*T)),A.addColorStop(1,E(0)),e.fillStyle=A,e.beginPath(),e.arc(n(x.x),s(x.y),r(_),0,Math.PI*2),e.fill()}let p=(x,E)=>{let _=x.angle*Math.PI/180,T=(x.w/2+E)/(x.w/2),A=(x.l/2+E)/(x.l/2);e.beginPath(),x.shape.forEach(([C,L],O)=>{let I=C*T,F=L*A,k=I*Math.cos(_)-F*Math.sin(_),G=I*Math.sin(_)+F*Math.cos(_);O?e.lineTo(n(x.x+k),s(x.y+G)):e.moveTo(n(x.x+k),s(x.y+G))}),e.closePath()};e.lineJoin="round";for(let x of f){let E=sp[x.color]||xe;p(x,2.4),e.strokeStyle="rgba(0, 0, 0, 0.55)",e.lineWidth=r(3.2),e.stroke(),p(x,1.3),e.strokeStyle=xe(.42),e.lineWidth=r(.3),e.stroke(),p(x,3.4),e.strokeStyle=E(x.color==="white"?.45:.75),e.lineWidth=r(.55),e.stroke()}{let x=["extra_ball_insert","lock_insert","wizard_insert"].map(A=>g[A]),E=x[2].y+x[2].l/2+7,_=x[0].y-x[0].l/2-7,T=27;e.fillStyle=we(.06),e.strokeStyle=Ze(.42),e.lineWidth=r(.4),e.beginPath(),e.roundRect(n(vt.cx-T),s(E),r(T*2),r(E-_),r(T)),e.fill(),e.stroke(),["Extra ball","Lock","Wizard"].forEach((A,C)=>{let L=x[C],O=L.y;e.strokeStyle=xe(.3),e.lineWidth=r(.3),e.beginPath(),e.moveTo(n(vt.cx+T+1.5),s(O)),e.lineTo(n(vt.cx+T+6),s(O)),e.stroke(),Be(e,n(vt.cx+T+8),s(O),A,r(2.6),xe(.6),"mono","left")})}let m=(x,E,_,T,A,C=0,L=.92)=>{e.save(),e.translate(x,E),e.rotate(C),Kn(e,"mono",A);let O=_?e.measureText(_).width:0,I=_?A*.9:0,F=e.measureText(T.toUpperCase()).width,k=-(O+I+F)/2;_&&Be(e,k,0,_,A,Ze(1),"mono","left"),Be(e,k+O+I,0,T,A,xe(L),"mono","left"),e.restore()},S=(x,E,_,T,A=.92,C=8.5)=>{let L=x.angle*Math.PI/180,O=x.l/2+C,I=Math.sin(L),F=-Math.cos(L);e.strokeStyle=xe(.32),e.lineWidth=r(.3),e.beginPath(),e.moveTo(n(x.x+I*(x.l/2+1)),s(x.y+F*(x.l/2+1))),e.lineTo(n(x.x+I*(O-3)),s(x.y+F*(O-3))),e.stroke(),m(n(x.x+I*O),s(x.y+F*O),E,_,T,-L,A)};S(g.left_ramp_arrow,"01","Deadbounce",r(4.2)),S(g.right_ramp_arrow,"02","Tip Top",r(4.2)),S(g.left_orbit_arrow,"","Orbit",r(3.2),.6,7),S(g.right_orbit_arrow,"","Orbit",r(3.2),.6,7),S(y,"","Mystery",r(3.1),.68,6.5),m(n(l),s(c+1),"03","About",r(3.8));let w=pi[0].insertY;m(n(vt.cx),s(w),"04","Skills",r(4.2));for(let x of[-1,1])e.strokeStyle=xe(.25),e.lineWidth=r(.4),e.beginPath(),e.moveTo(n(vt.cx+x*26),s(w)),e.lineTo(n(vt.cx+x*120),s(w)),e.stroke(),e.fillStyle=we(1),e.fillRect(n(vt.cx+x*120)-(x>0?r(4):0),s(w)-r(.6),r(4),r(1.2));let v=Pi.lanes[2];m(n(v.insertX),s(v.insertY+18.5),"05","Experience",r(3.8));let M=g.shoot_again;m(n(M.x),s(M.y-M.l/2-6.5),"06","Contact",r(3.8));{let x=vt.cx-46,E=vt.cx+46,_=234,T=292,A=243;e.fillStyle="rgba(6, 7, 10, 0.55)",e.fillRect(n(x),s(T),r(E-x),r(T-_)),e.strokeStyle=xe(.34),e.lineWidth=r(.35),e.strokeRect(n(x),s(T),r(E-x),r(T-_)),e.beginPath(),e.moveTo(n(x),s(A+4.5)),e.lineTo(n(E),s(A+4.5)),e.stroke();for(let C of[vt.cx-15,vt.cx+17])e.beginPath(),e.moveTo(n(C),s(A+4.5)),e.lineTo(n(C),s(_)),e.stroke();e.fillStyle=we(1),e.fillRect(n(x),s(T)-r(.6),r(9),r(1.2)),Ha(e,n(vt.cx),s(277),r(2.1),we(1),xe(.06)),Be(e,n(vt.cx),s(259),"Dylan Hughes",r(7.6),xe(.95),"display"),Be(e,n((x+vt.cx-15)/2),s(A-.2),"DH-26",r(2.4),Ze(1),"mono"),Be(e,n((vt.cx-15+vt.cx+17)/2),s(A-.2),"Richmond, VA",r(2.4),xe(.6),"mono"),Be(e,n((vt.cx+17+E)/2),s(A-.2),"Sheet 1/1",r(2.4),xe(.6),"mono")}return t}var cp=[["1110","1001","1001","1001","1110"],["1001","1001","1111","1001","1001"]];function Ha(i,t,e,n,s,r){let a=t-9*n/2,o=e-5*n/2;cp.forEach((l,c)=>l.forEach((h,u)=>[...h].forEach((d,f)=>{i.fillStyle=d==="1"?s:r,i.beginPath(),i.arc(a+(c*5+f+.5)*n,o+(u+.5)*n,n*.36,0,Math.PI*2),i.fill()})))}function Be(i,t,e,n,s,r,a,o="center"){i.save(),i.fillStyle=r,i.textAlign=o,i.textBaseline="middle",Kn(i,a==="display"?"display":"mono",s),a!=="display"&&(n=n.toUpperCase()),i.fillText(n,t,e),i.restore()}function hp(i){let t=Math.round(i/1.32),e=In(i,t),n=e.getContext("2d"),s=i/1320,r=i/2,a=t*.4,o=n.createRadialGradient(r,a,0,r,t*.45,Math.max(i,t)*.75);o.addColorStop(0,"#16245a"),o.addColorStop(.42,"#0e1222"),o.addColorStop(1,ce.black),n.fillStyle=o,n.fillRect(0,0,i,t),n.save(),n.translate(r,a);for(let u=0;u<36;u++)n.rotate(Math.PI/18),n.fillStyle=we(u%3===0?.13:.055),n.beginPath(),n.moveTo(0,0),n.lineTo(i,-i*.03),n.lineTo(i,i*.03),n.fill();n.restore();for(let u=18*s;u<t;u+=22*s)for(let d=18*s;d<i;d+=22*s){let f=.1*Math.max(0,1-Math.hypot(d-r,(u-a)*1.3)/(i*.55));f<.01||(n.fillStyle=xe(f),n.beginPath(),n.arc(d,u,1.4*s,0,Math.PI*2),n.fill())}let l=46*s;n.save(),n.shadowColor=we(.9),n.shadowBlur=14*s,n.strokeStyle=we(1),n.lineWidth=5*s,n.beginPath(),n.roundRect(l,l,i-l*2,t-l*2,36*s),n.stroke(),n.restore(),n.strokeStyle=xe(.32),n.lineWidth=1.6*s,n.beginPath(),n.roundRect(l+14*s,l+14*s,i-l*2-28*s,t-l*2-28*s,26*s),n.stroke();let c=40*s;n.save(),n.shadowColor=we(1),n.shadowBlur=40*s,Ha(n,r,a,c,we(1),"rgba(0,0,0,0)"),n.restore(),Ha(n,r,a,c,ce.ice,xe(.07));let h=a+c*4.6;return n.save(),n.shadowColor=Ze(.55),n.shadowBlur=18*s,Be(n,r,h,"Dylan Hughes",100*s,ce.white,"display"),n.restore(),Be(n,r,h+76*s,"The portfolio",24*s,Ze(1),"mono"),Be(n,r,h+112*s,"Model DH-26 \xB7 Richmond, Virginia",16*s,bu(.9),"mono"),e}function up(i,t,e=[.5,.5]){let n=In(t,t/1.32),s=n.getContext("2d");s.fillStyle=ce.black,s.fillRect(0,0,n.width,n.height);let r=Math.max(n.width/i.naturalWidth,n.height/i.naturalHeight),a=i.naturalWidth*r,o=i.naturalHeight*r;return s.imageSmoothingQuality="high",s.drawImage(i,(n.width-a)*e[0],(n.height-o)*e[1],a,o),n}function dp(i,t){let e=Math.round(t/1.32),n=In(t,e),s=n.getContext("2d"),r=t/1320,a=s.createRadialGradient(t*.3,e*.5,0,t*.3,e*.5,t*.7);a.addColorStop(0,"#121c44"),a.addColorStop(.55,"#0b0e1a"),a.addColorStop(1,ce.black),s.fillStyle=a,s.fillRect(0,0,t,e);let o=e,l=Math.round(i.naturalWidth/i.naturalHeight*o),c=t-l,h=In(l,o),u=h.getContext("2d");u.imageSmoothingQuality="high",u.drawImage(i,0,0,l,o),u.globalCompositeOperation="destination-in";let d=u.createLinearGradient(0,0,l*.45,0);d.addColorStop(0,"rgba(0, 0, 0, 0)"),d.addColorStop(.5,"rgba(0, 0, 0, 0.6)"),d.addColorStop(1,"rgba(0, 0, 0, 1)"),u.fillStyle=d,u.fillRect(0,0,l,o),s.drawImage(h,c,0);let f=96*r;return s.fillStyle=xe(.18),s.fillRect(f,e*.3,420*r,1.5*r),s.fillStyle=we(1),s.fillRect(f,e*.3-1.5*r,44*r,4.5*r),Be(s,f,e*.3+40*r,"Player 1",22*r,Ze(1),"mono","left"),Be(s,f,e*.48,"Dylan",118*r,ce.white,"display","left"),Be(s,f,e*.48+118*r,"Hughes",118*r,ce.white,"display","left"),Be(s,f,e*.48+214*r,"Richmond, Virginia",22*r,bu(.95),"mono","left"),n}function fp(i,t,{frontBottom:e=.77}={}){let n=In(i,t),s=n.getContext("2d"),r=T=>t-(t-e*t)*(T/i),a=(T,A)=>{let C=i*(1-T);return[C,r(C)-A]};s.fillStyle=ce.black1,s.fillRect(0,0,i,t);let o=t/768;s.strokeStyle=xe(.07),s.lineWidth=1.4*o;for(let T=40*o;T<t;T+=64*o)for(let A=40*o;A<i;A+=64*o)s.beginPath(),s.moveTo(A-5*o,T),s.lineTo(A+5*o,T),s.moveTo(A,T-5*o),s.lineTo(A,T+5*o),s.stroke();let l=t*.08,c=t*.56,h=[[0,l],[.45,l*.8],[.72,c*.55],[1,c]],u=(T=0)=>{s.moveTo(...a(0,l+T)),s.bezierCurveTo(...h.slice(1).flatMap(([A,C])=>a(A,C+T)))},d=a(0,l),[f,g,y]=h.slice(1).map(([T,A])=>a(T,A)),p=[];for(let T=0;T<=200;T++){let A=T/200,C=1-A;p.push([C*C*C*d[0]+3*C*C*A*f[0]+3*C*A*A*g[0]+A*A*A*y[0],C*C*C*d[1]+3*C*C*A*f[1]+3*C*A*A*g[1]+A*A*A*y[1]])}let m=T=>{let A=p[0];for(let C of p)Math.abs(C[0]-T)<Math.abs(A[0]-T)&&(A=C);return A[1]};{let T=t*.07,[A]=a(.78,0),C=t*.25,L=A-9*T/2,O=C-5*T/2;s.lineWidth=2*o,cp.forEach((I,F)=>I.forEach((k,G)=>[...k].forEach((st,W)=>{s.strokeStyle=st==="1"?we(.32):xe(.05),s.beginPath(),s.arc(L+(F*5+W+.5)*T,O+(G+.5)*T,T*.34,0,Math.PI*2),s.stroke()})))}let S=s.createLinearGradient(i,0,0,0);S.addColorStop(0,ce.deep),S.addColorStop(.55,ce.royal),S.addColorStop(1,"#4a72ff"),s.beginPath(),s.moveTo(i,t),s.lineTo(...a(0,l)),u(),s.lineTo(0,t),s.closePath(),s.fillStyle=S,s.fill();{let T=15*o,A=t*.16;for(let C=T/2;C<i;C+=T){let L=m(C);for(let O=L-T*.6;O>L-A;O-=T){let I=1-(L-O)/A,F=Math.sin(C*12.9898+O*78.233)*43758.5453;F-Math.floor(F)>I*1.15||(s.fillStyle=we(.35+.6*I),s.beginPath(),s.arc(C,Math.round(O/T)*T,T*.36*(.35+.65*I),0,Math.PI*2),s.fill())}}}s.lineCap="round",s.strokeStyle=ce.paper,s.lineWidth=t*.0065,s.beginPath(),u(t*.03),s.stroke(),s.strokeStyle=Ze(.5),s.lineWidth=t*.0025,s.beginPath(),u(t*.052),s.stroke(),s.strokeStyle=we(.95),s.lineWidth=t*.008,s.beginPath(),s.moveTo(0,t*.045),s.lineTo(i,t*.045),s.stroke();let w=.86,[v]=a(w,0),M=c*.92;Ha(s,v,r(v)-M*.55,M*.085,ce.black1,"rgba(11, 12, 15, 0.18)");let[x]=a(.42,0),E=r(x)-(l*.9+t*.03),_=(t*.045+E)/2;Be(s,x,_-t*.035,"Dylan Hughes",t*.12,ce.paper,"display"),Be(s,x,_+t*.06,"Creative technologist",t*.032,Ze(1),"mono");{let T=i-56*o,A=T-330*o,C=t*.14;s.strokeStyle=xe(.3),s.lineWidth=1.5*o,s.beginPath(),s.moveTo(A,C),s.lineTo(T,C),s.stroke(),s.fillStyle=we(1),s.fillRect(A,C-2.5*o,30*o,5*o),Be(s,A,C+22*o,"Model DH-26",15*o,Ze(1),"mono","left"),Be(s,T,C+22*o,"Richmond, Virginia",15*o,xe(.6),"mono","right")}return n}function Eu(i,t){let e=Math.round(t*.56),n=In(t,e),s=n.getContext("2d"),r=t/625;return s.fillStyle=ce.black1,s.fillRect(0,0,t,e),s.strokeStyle=we(.95),s.lineWidth=3*r,s.beginPath(),s.roundRect(14*r,14*r,t-28*r,e-28*r,14*r),s.stroke(),s.fillStyle=ce.paper2,s.textAlign="center",s.textBaseline="alphabetic",i==="instructions"?(Kn(s,"display",30*r),s.fillText("How to play",t/2,66*r),Kn(s,"body",20*r),s.textAlign="left",["1  Send the problem to dyl.harrell@gmail.com","2  Get a straight answer on whether","    I\u2019m the right person for it","3  Build something useful together"].forEach((o,l)=>s.fillText(o,52*r,(120+l*42)*r)),Kn(s,"mono",13*r),s.textAlign="center",s.fillStyle=Ze(1),s.fillText("DYLANHUGHES.DEV",t/2,316*r)):(Kn(s,"display",40*r),s.fillText("Free play",t/2,118*r),Kn(s,"mono",15*r),s.fillStyle=Ze(1),s.fillText("RICHMOND, VIRGINIA \xB7 EASTERN TIME",t/2,172*r),s.fillStyle=ce.paper2,Kn(s,"body",20*r),s.fillText("Websites \xB7 Game software \xB7 Printed parts",t/2,232*r),s.fillStyle=zn.royal,s.fillRect(t/2-40*r,270*r,80*r,6*r)),n}function pp(i){let t=vt.rail,e=re.laneLeft,n=-4,s=ne.rightShoulder[1],r=i/(e-t),a=In(i,(s-n)*r),o=a.getContext("2d"),l=v=>(v-t)*r,c=v=>(s-v)*r,h=o.createLinearGradient(0,0,0,a.height);h.addColorStop(0,ce.black2),h.addColorStop(1,ce.black1),o.fillStyle=h,o.fillRect(0,0,a.width,a.height);for(let v=0;v<a.height;v+=Math.max(2,r*.6))o.fillStyle=`rgba(255,255,255,${.012+.012*Math.sin(v*.37)})`,o.fillRect(0,v,a.width,1);o.strokeStyle=we(.95),o.lineWidth=1.4*r,o.beginPath(),o.moveTo(l(ne.leftShoulder[0]+6),c(ne.leftShoulder[1]-10)),o.lineTo(l(ne.lipLeft[0]-4),c(ne.lipLeft[1]-7)),o.stroke(),o.beginPath(),o.moveTo(l(ne.lipRight[0]+4),c(ne.lipRight[1]-7)),o.lineTo(l(ne.rightShoulder[0]-6),c(ne.rightShoulder[1]-10)),o.stroke();let u=l(vt.cx),d=c(30),f=["1110","1001","1001","1001","1110"],g=["1001","1001","1111","1001","1001"],y=3.1*r,p=u-9*y/2,m=c(78);[f,g].forEach((v,M)=>v.forEach((x,E)=>[...x].forEach((_,T)=>{o.fillStyle=_==="1"?zn.royal:xe(.07),o.beginPath(),o.arc(p+(M*5+T+.5)*y,m+(E+.5)*y,y*.36,0,Math.PI*2),o.fill()}))),o.fillStyle=zn.white,o.textAlign="center",o.textBaseline="middle",Kn(o,"display",9*r),o.fillText("Dylan Hughes",u,d+6*r),Kn(o,"mono",3.3*r),o.fillStyle=bu(.9),o.fillText("MODEL DH-26 \xB7 RICHMOND, VIRGINIA",u,d+17*r);let S=o.createLinearGradient(l(t),0,l(e),0);S.addColorStop(0,ce.royal),S.addColorStop(.5,ce.deep),S.addColorStop(1,ce.royal);let w=v=>{o.moveTo(l(t),c(10+v)),o.bezierCurveTo(l(t+130),c(1.5+v),l(e-130),c(1.5+v),l(e),c(10+v))};return o.fillStyle=S,o.beginPath(),o.moveTo(l(t),c(n)),w(0),o.lineTo(l(e),c(n)),o.closePath(),o.fill(),o.strokeStyle=xe(.8),o.lineWidth=.7*r,o.beginPath(),w(4.5),o.stroke(),a}function mp(i){let t=Math.round(i*(Jn.height/Jn.width)),e=In(i,t),n=e.getContext("2d");n.fillStyle=zn.white,n.fillRect(0,0,i,t);let s=i/2,r=t*(1-13.5/Jn.height),a=i/Jn.width;return n.fillStyle=zn.royal,n.beginPath(),n.arc(s,r,6.2*a,0,Math.PI*2),n.fill(),n.fillStyle=zn.white,n.beginPath(),n.arc(s,r,4*a,0,Math.PI*2),n.fill(),n.fillStyle=zn.royal,n.beginPath(),n.arc(s,r,2*a,0,Math.PI*2),n.fill(),n.fillStyle="rgba(20, 22, 26, 0.18)",n.fillRect(0,t-1.5*a,i,1.5*a),e}function gp(i){let t=In(i,i),e=t.getContext("2d"),n=i/2;e.fillStyle=zn.white,e.beginPath(),e.arc(n,n,n,0,Math.PI*2),e.fill(),e.strokeStyle=zn.royal,e.lineWidth=i*.07,e.beginPath(),e.arc(n,n,n*.88,0,Math.PI*2),e.stroke(),e.strokeStyle="rgba(20, 22, 26, 0.5)",e.lineWidth=i*.008,e.beginPath(),e.arc(n,n,n*.74,0,Math.PI*2),e.stroke();let s=["1110","1001","1001","1001","1110"],r=["1001","1001","1111","1001","1001"],a=i*.06,o=n-9*a/2,l=n-5*a/2-i*.04;return[s,r].forEach((c,h)=>c.forEach((u,d)=>[...u].forEach((f,g)=>{e.fillStyle=f==="1"?zn.ink:"rgba(20, 22, 26, 0.1)",e.beginPath(),e.arc(o+(h*5+g+.5)*a,l+(d+.5)*a,a*.36,0,Math.PI*2),e.fill()}))),e.fillStyle=zn.ink,e.textAlign="center",e.textBaseline="middle",Kn(e,"mono",i*.075),e.fillText("1,000",n,n+i*.22),t}function xp(i,t=8,e=12){let n=Cn(i.posts),s=ss(n,e,10),r=s.map(p=>p[0]),a=s.map(p=>p[1]),o=[Math.min(...r),Math.min(...a),Math.max(...r),Math.max(...a)],l=In((o[2]-o[0])*t,(o[3]-o[1])*t),c=l.getContext("2d"),h=p=>(p-o[0])*t,u=p=>(o[3]-p)*t,d=p=>{c.beginPath(),p.forEach(([m,S],w)=>w?c.lineTo(h(m),u(S)):c.moveTo(h(m),u(S))),c.closePath()},f=(o[0]+o[2])/2,g=(o[1]+o[3])/2,y=c.createRadialGradient(h(f),u(g+10),0,h(f),u(g),(o[2]-o[0])*t);y.addColorStop(0,ce.black3),y.addColorStop(1,ce.black1),c.fillStyle=y,c.fillRect(0,0,l.width,l.height),c.save(),d(s),c.clip(),c.fillStyle=xe(.09);for(let p=o[1];p<o[3];p+=4.2)for(let m=o[0];m<o[2];m+=4.2)c.beginPath(),c.arc(h(m),u(p),.42*t,0,Math.PI*2),c.fill();return c.restore(),c.lineJoin="round",c.strokeStyle=we(1),c.lineWidth=1.5*t,d(ss(n,e-1.6,10)),c.stroke(),c.strokeStyle=Ze(.4),c.lineWidth=.5*t,d(ss(n,e-4.4,10)),c.stroke(),{canvas:l,box:o}}function wu(i,{ppm:t=8,pad:e=1.5,mark:n=!1}={}){let s=i.map(p=>p[0]),r=i.map(p=>p[1]),a=[Math.min(...s)-e,Math.min(...r)-e,Math.max(...s)+e,Math.max(...r)+e],o=In((a[2]-a[0])*t,(a[3]-a[1])*t),l=o.getContext("2d"),c=p=>(p-a[0])*t,h=p=>(a[3]-p)*t,u=new Path2D;i.forEach(([p,m],S)=>S?u.lineTo(c(p),h(m)):u.moveTo(c(p),h(m))),u.closePath();let d=0,f=0,g=0;i.forEach(([p,m],S)=>{let[w,v]=i[(S+1)%i.length],M=p*v-w*m;d+=M,f+=(p+w)*M,g+=(m+v)*M}),f/=3*d,g/=3*d,l.fillStyle=ce.black1,l.fillRect(0,0,o.width,o.height),l.save(),l.clip(u);let y=l.createRadialGradient(c(f),h(g),0,c(f),h(g),Math.max(o.width,o.height)*.8);y.addColorStop(0,ce.black3),y.addColorStop(1,ce.black1),l.fillStyle=y,l.fillRect(0,0,o.width,o.height),l.fillStyle=xe(.09);for(let p=a[1]+3.175;p<a[3];p+=6.35)for(let m=a[0]+3.175;m<a[2];m+=6.35)l.beginPath(),l.arc(c(m),h(p),.42*t,0,Math.PI*2),l.fill();return l.lineJoin="round",l.strokeStyle=we(.26),l.lineWidth=9*t,l.stroke(u),l.strokeStyle=we(1),l.lineWidth=3.2*t,l.stroke(u),l.restore(),n&&l.isPointInPath(u,c(f),h(g))&&Ha(l,c(f),h(g),1.9*t,we(1),xe(.05)),{canvas:o,box:a}}var Ps=Math.PI/180,vc=vt.pitch*Ps,on={inner:(vt.w+22)*D,wallT:.019,front:.585,back:-.565,top:.116,bottom:-.32,floor:-.93},Au=i=>on.bottom+(i-on.front)*Math.tan(vc),rs={w:.64,h:.76,d:.25,glassW:.58,glassH:.58/1.32,glassY:.255,dmdW:.384,dmdH:.096,dmdY:.118};function ut(i,t,{cast:e=!0,receive:n=!0}={}){let s=new _e(i,t);return s.castShadow=e,s.receiveShadow=n,s}function Li(i,t=8){let e=new Ei(i);return e.colorSpace=Xe,e.anisotropy=t,e}function Cu({canvas:i,box:t}){let e=Li(i),[n,s,r,a]=[(t[0]-vt.w/2)*D,(t[1]-vt.l/2)*D,(t[2]-vt.w/2)*D,(t[3]-vt.l/2)*D];return e.repeat.set(1/(r-n),1/(a-s)),e.offset.set(-n/(r-n),-s/(a-s)),new Ke({map:e,roughness:.3,clearcoat:1,clearcoatRoughness:.05})}var _p,Pu=()=>_p||(_p=new ge({color:660016,roughness:.3,emissive:Pn,emissiveIntensity:za(Pn,.16)})),Iu=new Ke({color:15264494,roughness:.45,clearcoat:.2});function Sp({M:i,art:t,dmdCanvas:e,anisotropy:n,maxAnisotropy:s=n}){let r=new de,a=new de;a.rotation.x=vc,r.add(a);let o=new de;a.add(o);let l={root:r,body:a,playfield:o,inserts:new Map,pops:[],targets:[],flippers:[],slings:[],interactive:[],gi:[],bulbs:[],rollovers:[]};return l.toWorld=(c,h,u=0)=>(a.updateMatrixWorld(!0),Ee(c,h,u).applyMatrix4(o.matrixWorld)),yv(o,i,t,n),Mv(o,i),bv(o,i,t,l),wv(o,i,t,l),Av(o,i,l),Rv(o,i,t,n),Cv(o,i,l),Pv(o,i,l),Iv(o,i,t,n,l),Lv(o,i,t,n,l),Uv(o,i,l),Gv(o,i,l),Vv(o,l),Wv(o,i,l),Xv(o,i,l),qv(o,i,l),Yv(a,r,i,t,n,l),Zv(r,i,t,e,n,l,s),vv(r,l),l}function vv(i,t){let e=new Set,n=c=>{c&&e.add(c)};t.pops.forEach(c=>n(c.group)),t.slings.forEach(c=>{n(c.rubber),n(c.arm)}),t.flippers.forEach(c=>n(c.pivot)),t.targets.forEach(c=>n(c.holder)),t.rollovers.forEach(c=>n(c.wire)),t.saucer&&n(t.saucer.group),t.gate&&n(t.gate.flap),t.plunger&&(n(t.plunger.group),n(t.plunger.spring)),n(t.ball),n(t.shooterBall),n(t.startButton);let s=new Set(t.interactive);i.updateMatrixWorld(!0);let r=new le().copy(i.matrixWorld).invert(),a=new Map,o=[],l=c=>{if(!e.has(c)){if(c.isMesh&&!s.has(c)&&!Array.isArray(c.material)&&!c.material.transparent&&!c.morphTargetInfluences&&c.visible){let h=new le().multiplyMatrices(r,c.matrixWorld);if(h.determinant()>0){let u=c.geometry,d=Object.keys(u.attributes).sort().join(","),f=[c.material.uuid,c.castShadow,c.receiveShadow,c.renderOrder,!!c.userData.noAO,d,!!u.index].join("|");a.has(f)||a.set(f,{material:c.material,cast:c.castShadow,receive:c.receiveShadow,order:c.renderOrder,noAO:!!c.userData.noAO,geos:[]}),a.get(f).geos.push(u.clone().applyMatrix4(h)),o.push(c)}}for(let h of c.children)l(h)}};l(i);for(let c of o)c.removeFromParent(),c.geometry.dispose();for(let c of a.values()){let h=c.geos.length===1?c.geos[0]:en(c.geos);if(!h)continue;c.geos.length>1&&c.geos.forEach(d=>d.dispose());let u=new _e(h,c.material);u.castShadow=c.cast,u.receiveShadow=c.receive,u.renderOrder=c.order,c.noAO&&(u.userData.noAO=!0),u.matrixAutoUpdate=!1,i.add(u)}}var vp=[[0,0],[re.laneLeft,0],[re.laneLeft,105.8],[vt.w,105.8],[vt.w,vt.l],[0,vt.l]],yp=Array.from({length:40},(i,t)=>{let e=-(t/40)*Math.PI*2;return[mi.x+Math.cos(e)*(mi.r+.6),mi.y+Math.sin(e)*(mi.r+.6)]});function yv(i,t,e,n){let s=ip(Li(e.playfield,n)),r=([c,h])=>new ot(c/vt.w,h/vt.l),a=new un(vp.map(r));a.holes.push(new oi(yp.map(r)));let o=new ps(a,24).scale(vt.w*D,vt.l*D,1).translate(-vt.w/2*D,-vt.l/2*D,0).rotateX(-Math.PI/2),l=ut(o,s,{cast:!1});return i.add(l),i.add(ut(Ii(vp,-vt.thick-.05,vt.thick,{holes:[yp]}),t.wood,{cast:!1})),l}var Cs={t:1.6,h:28.6};function Mv(i,t){let e=Cs.t/2,n=[[vt.rail-e,-2],[vt.rail-e,Ci.left.cy],...ka(Ci.left.cx,Ci.left.cy,Ci.left.r+e,180,90,24).slice(1),...ka(Ci.right.cx,Ci.right.cy,Ci.right.r+e,90,0,28),[re.laneRight+e,105.8]];i.add(ut(bn(n,Cs.t,Cs.h),t.steel)),Sv(i,t,n,1);let s=re.laneLeft-re.dividerFace,r=[[re.dividerFace+s/2,re.apronTop],[re.dividerFace+s/2,re.dividerTop]];i.add(ut(bn(r,s,Cs.h),t.steel))}function Sv(i,t,e,n,s=120){let r=[],a=s/2;for(let o=1;o<e.length;o++){let[l,c]=e[o-1],[h,u]=e[o],d=Math.hypot(h-l,u-c);if(!d)continue;let f=a;for(;f<=d;f+=s)r.push({x:l+(h-l)*f/d,y:c+(u-c)*f/d,dx:(h-l)/d,dy:(u-c)/d,side:n});a=f-d}Tp(i,t,r)}function bp(i,t,e,n){let s=[0];for(let a=1;a<e.length;a++)s.push(s[a-1]+Math.hypot(e[a][0]-e[a-1][0],e[a][1]-e[a-1][1]));let r=n.filter(a=>Number.isFinite(a.at)).map(a=>{let o=a.at*s.at(-1),l=1;for(;l<e.length-1&&s[l]<o;)l++;let c=e[l-1],h=e[l],u=s[l]-s[l-1]||1,d=(o-s[l-1])/u;return{x:c[0]+(h[0]-c[0])*d,y:c[1]+(h[1]-c[1])*d,dx:(h[0]-c[0])/u,dy:(h[1]-c[1])/u,side:a.side}});Tp(i,t,r)}function Tp(i,t,e){let n=[],s=[];for(let{x:r,y:a,dx:o,dy:l,side:c}of e){let h=-l*c,u=o*c,d=r+h*4.6,f=a+u*4.6,g=Math.atan2(l,o);n.push(new fe(9*D,1.2*D,6*D).rotateY(g).translate(...Ee(d,f,.6).toArray())),s.push(new Pe(2.3*D,2.3*D,1.1*D,12).translate(...Ee(d+h*.6,f+u*.6,1.75).toArray()))}n.length&&i.add(ut(en(n),t.steel,{cast:!1}),ut(en(s),t.darkSteel,{cast:!1}))}function bv(i,t,e,n){Tr.forEach((s,r)=>{let a=e.inlane[r];i.add(ut(Ii(Cn(s.plate.outline),s.plate.z,s.thickness,{bevel:.3}),[Cu(a.plate),Pu()])),i.add(ut(Ii(Cn(s.cover.outline),s.cover.z,s.thickness,{bevel:.4}),[Cu(a.cover),Pu()]));let o=s.cover.z+s.thickness;for(let[l,c]of s.stacks)i.add(Ie(ut(new Pe(4*D,4*D,(s.plate.z-.8)*D,16).translate(0,(s.plate.z-.8)/2*D,0),Iu),l,c)),i.add(Ie(ut(new Pe(4*D,4*D,15*D,16).translate(0,7.5*D,0),Iu),l,c,s.plate.z+s.thickness));for(let[l,c]of[...s.stacks,s.post])i.add(Ie(ut(new Pe(4.5*D,4.5*D,.8*D,16).translate(0,.4*D,0),t.steel,{cast:!1}),l,c,o)),i.add(Ie(ut(Fe([[0,0],[3.6,0],[3.6,1.2],[2.6,2.6],[0,2.8]],16),t.darkSteel,{cast:!1}),l,c,o+.8));i.add(Ie(ut(new Pe(3.6*D,3.6*D,(s.cover.z-29.8)*D,6).translate(0,(s.cover.z-29.8)/2*D,0),t.steel,{cast:!1}),...s.post,29.8))});for(let[s,r]of rc)i.add(Tv(t,s,r));i.add(ut(en([...ac,...mu].map(s=>bn(s.line,Cs.t,Cs.h))),t.steel));for(let s of ac)bp(i,t,s.line,s.mounts);for(let[s,r]of gu)i.add(Ev(t,s,r,oc.d,oc.height));for(let[s,r]of Oa.entries())n.rollovers.push(Lu(i,t,r.x,r.y,As("orbit"+s)));for(let[s,r]of pi.entries())n.rollovers.push(Lu(i,t,r.x,r.y,As("return"+s)))}var Mp=(()=>{let i=[];for(let t=0;t<16;t++){let e=t/16*Math.PI*2,n=t%2?7.6:9.5;i.push([Math.cos(e)*n,Math.sin(e)*n])}return i})(),Ga;function Tv(i,t,e,{ring:n=!0}={}){if(!Ga){let r=is(Mp,9,{bevel:.5,curveSegments:1}),a=is(Mp,9,{bevel:.5,curveSegments:1}).translate(0,18*D,0),o=new Pe(4.75*D,4.75*D,9*D,16).translate(0,13.5*D,0);Ga={body:en([r,a,o.toNonIndexed()]),ring:new lr(7.13*D,2.38*D,10,28).rotateX(Math.PI/2).translate(0,13.5*D,0),nut:new Pe(3.67*D,3.67*D,2.8*D,6).translate(0,28.4*D,0)}}let s=new de;return s.add(ut(Ga.body,i.postPlastic)),n&&s.add(ut(Ga.ring,i.rubber)),s.add(ut(Ga.nut,i.steel,{cast:!1})),Ie(s,t,e)}function Ev(i,t,e,n,s){let r=new de,a=n/2;return r.add(ut(Fe([[0,0],[a-.6,0],[a-.6,6],[0,6]],20),i.postPlastic)),r.add(ut(Fe([[a-2.4,6],[a,6.6],[a,20.4],[a-2.4,21]],24),i.rubber)),r.add(ut(Fe([[0,6],[a-2.4,6],[a-2.4,21],[a-.6,21],[a-.6,s-1],[a-1.6,s],[0,s]],20),i.postPlastic)),Ie(r,t,e)}function Ep(i,t,e,{height:n=30}={}){return Ie(ut(Fe([[0,0],[5.6,0],[5.6,1.4],[4.76,2.2],[4.76,9],[3.9,10.5],[3.9,16.5],[4.76,18],[4.76,n],[0,n]],20),i.postPlastic),t,e)}var Uu=new hn({color:328966});function Lu(i,t,e,n,s){let r=new de,a=new un,o=44.45/2-2.38,l=2.38;a.absarc(0,o,l,0,Math.PI,!1),a.absarc(0,-o,l,Math.PI,Math.PI*2,!1);let c=new ps(a,6).scale(D,D,D).rotateX(-Math.PI/2),h=new _e(c,Uu);h.position.y=.06*D,r.add(h);let u=[[0,-21.2,-3],[0,-19.05,0]];for(let f=1;f<12;f++){let g=-1+2*f/12;u.push([0,g*19.05,6.35*Math.sqrt(1-g*g)])}u.push([0,19.05,0],[0,21.2,-3]);let d=ut(uc(u,.8,{tension:.2,radial:8}),t.chrome,{receive:!1});return r.add(d),Ie(r,e,n),i.add(r),{wire:d,x:e,y:n,insert:s,press:0}}var Rs={postR:4.76,cord:6.35,travel:9};function wv(i,t,e,n){for(let s of br){let r=new de,a=s.posts;for(let[I,F]of a)r.add(Ep(t,I,F,{height:30.5}));let[o,l,c]=a,h=Math.hypot(l[0]-o[0],l[1]-o[1]),u=(l[0]-o[0])/h,d=(l[1]-o[1])/h,f=-d,g=u;(c[0]-o[0])*f+(c[1]-o[1])*g>0&&(f=-f,g=-g);let y=Rs.postR+Rs.cord/2,p=dc(ss(Cn(a),y,8),3),m=p.map(([I,F])=>{let k=((I-o[0])*u+(F-o[1])*d)/h;return(I-o[0])*f+(F-o[1])*g>y*.5&&k>0&&k<1?Math.sin(Math.PI*k):0}),S=I=>Ba(p.map(([F,k],G)=>[F+f*I*m[G],k+g*I*m[G],13.5]),Rs.cord/2,{closed:!0,tension:.1,radial:8,segments:p.length*2}),w=ut(S(0),t.rubber);w.userData.action="sling-"+s.side,n.interactive.push(w),r.add(w);let v=ss(Cn(a),12,8);r.add(ut(Ii(v,30.5,2.2,{bevel:.4}),[Cu(e.plastics[br.indexOf(s)]),Pu()]));for(let[I,F]of a)r.add(Ie(ut(new Pe(3.5*D,3.5*D,.55*D,16).translate(0,.275*D,0),t.steel),I,F,32.7)),r.add(Ie(ut(new Pe(3.67*D,3.67*D,2.8*D,6).translate(0,1.4*D,0),t.steel),I,F,33.25));let M=Math.atan2(d,u)/Ps,x=Math.sign(-d*f+u*g),E=-x*(y-Rs.cord/2-.15-2),_=[(o[0]+l[0])/2,(o[1]+l[1])/2],T=new de,A=ut(new fe(18*D,10*D,4*D),Iu);A.position.set(0,13.5*D,E*D),T.add(A),T.add(ut(new fe(7.5*D,9*D,1.5*D).translate(0,4*D,(E+x*1.2)*D),t.steel)),Ie(T,_[0],_[1],0,M),r.add(T);let C=new _e(new tn(10*D,3*D).rotateX(-Math.PI/2),Uu);C.position.set(0,.06*D,(E+x*1.2)*D);let L=Ie(new de,_[0],_[1],0,M);L.add(C);for(let I of[-1,1]){let F=ut(new fe(7*D,12*D,.35*D).translate(I*26*D,10*D,-x*(y-Rs.cord/2-1.2)*D),t.steel),k=ut(new fe(9*D,5*D,6*D).translate(I*26*D,2.5*D,-x*(y-Rs.cord/2-5.5)*D),t.graphitePlastic);L.add(F,k)}r.add(L),i.add(r);let O=new U(f*D,0,-g*D).multiplyScalar(Rs.travel+.15);n.slings.push({side:s.side,rubber:w,rubberGeo:S,arm:T,rest:T.position.clone(),push:O,kicked:-1,shown:0})}}function gc(i,t,e){let n=Math.asin((i-t)/e),s=[],r=18,a=Math.PI/2-n,o=Math.PI*1.5+n;for(let h=0;h<=r;h++){let u=a+(o-a)*(h/r);s.push([Math.cos(u)*i,Math.sin(u)*i])}let l=-Math.PI/2+n,c=Math.PI/2-n;for(let h=0;h<=r;h++){let u=l+(c-l)*(h/r);s.push([e+Math.cos(u)*t,Math.sin(u)*t])}return s}function Av(i,t,e){for(let n of Sn){let s=sc(n),r=s.rubberTo-s.rubberFrom,a=n.length,o=is(gc(...s.flange,a),s.rubberFrom-.6,{bevel:.5}),l=is(gc(...s.groove,a),r),c=is(gc(n.baseR-2.6,n.tipR-2.6,a),r,{bevel:2.6}),h=is(gc(...s.cap,a),n.height-s.rubberTo,{bevel:.9}),u=new de,d=[[o,t.whitePlastic,.6],[l,t.whitePlastic,s.rubberFrom],[c,t.rubberRoyal,s.rubberFrom],[h,t.whitePlastic,s.rubberTo]];for(let[f,g,y]of d){let p=ut(f,g);p.position.y=y*D,p.userData.action="flip-"+n.side,u.add(p),e.interactive.push(p)}u.add(ut(new Pe(3.2*D,3.2*D,1*D,6).translate(0,(n.height+.5)*D,0),t.steel,{cast:!1})),Ie(u,n.x,n.y,0,n.rest),i.add(u),e.flippers.push({...n,pivot:u})}}function Rv(i,t,e,n){let s=Math.atan2(ne.lipEndY-ne.lipCy,ne.lipLeft[0]-vt.cx)/Ps,r=Math.atan2(ne.lipEndY-ne.lipCy,ne.lipRight[0]-vt.cx)/Ps,a=ka(vt.cx,ne.lipCy,ne.lipR,s,r,36),o=[[vt.rail,-4],[re.laneLeft,-4],ne.rightShoulder,...[...a].reverse(),ne.leftShoulder],l=1.3,c=ne.deck,h=new Ke({color:1316378,roughness:.4,metalness:.3,clearcoat:.8,clearcoatRoughness:.1}),u=Li(e.apron,n),d=(vt.rail-vt.w/2)*D,f=(re.laneLeft-vt.w/2)*D,g=(-4-vt.l/2)*D,y=(ne.rightShoulder[1]-vt.l/2)*D;u.repeat.set(1/(f-d),1/(y-g)),u.offset.set(-d/(f-d),-g/(y-g));let p=new Ke({map:u,roughness:.55,metalness:0,clearcoat:.8,clearcoatRoughness:.1});i.add(ut(Ii(Cn(o),c-l,l,{bevel:.4}),[p,h]));let m=c-l,S=155.5/2,w=[bn([ne.leftShoulder,ne.lipLeft],l,m),bn([ne.lipRight,ne.rightShoulder],l,m),bn([[re.laneLeft-.65,-4],[re.laneLeft-.65,ne.rightShoulder[1]]],l,m),bn([[vt.rail+.65,-4],[vt.rail+.65,ne.leftShoulder[1]]],l,14,m-14),bn([[vt.rail,-3.35],[vt.cx-S,-3.35]],l,m),bn([[vt.cx+S,-3.35],[re.laneLeft,-3.35]],l,m),bn([[vt.cx-S,-3.35],[vt.cx+S,-3.35]],l,m-38.1,38.1)];i.add(ut(en(w),h)),i.add(ut(Ii(Cn(o),.08,.1),t.cabinetInner,{cast:!1})),i.add(ut(en(pu.map(M=>bn(M,1.6,20))),t.steel));let v=ka(vt.cx,ne.lipCy,ne.lipR+.6,s,r,36).map(([M,x])=>[M,x,c-.6]);i.add(ut(Ba(v,.8,{tension:0}),t.aluminium,{cast:!1}));for(let[M,x]of[["instructions",vt.cx-147.65],["free",vt.cx+147.65]]){let E=Li(e.cards[M],n),_=ut(new tn(158.8*D,88.9*D).rotateX(-Math.PI/2),new ge({map:E,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),{cast:!1});_.position.copy(Ee(x,61.55,c+.3)),i.add(_);let T=79.4+1.2,A=61.55-44.45-1.2,C=61.55+44.45+1.2;i.add(ut(bn([[x-T,A],[x+T,A],[x+T,C],[x-T,C],[x-T,A]],2.4,1.2,c),t.aluminium,{cast:!1}))}}function Cv(i,t,e){let n=[];for(let s of Pi.rubbers){for(let[a,o]of s.posts)i.add(Ep(t,a,o,{height:26}));let r=dc(ss(Cn(s.posts),s.postR+s.cord/2,10),3);n.push(Ba(r.map(([a,o])=>[a,o,s.h]),s.cord/2,{closed:!0,tension:.1,radial:8,segments:r.length*2}))}i.add(ut(en(n),t.rubber));for(let[s,r]of Pi.lanes.entries())e.rollovers.push(Lu(i,t,r.x,r.y,As("lane"+s)))}function Pv(i,t,e){let{r:n}=mi,s=new de,r=(d,f,g=0)=>new U(d*D,g*D,-f*D),a=[];for(let d=0;d<=8;d++){let f=d/8*10.5;a.push([f,8.5-Math.sqrt(14.1**2-f*f)])}let o=a.map(([d,f])=>[d,f-.9]),l=Fe([...o,[n-.4,-.9],[n,-.1],[n+4.4,.05],[n+4.4,.85],[n+3.8,.95],[n-.3,.95],[n-1,.2],...[...a].reverse()],48);s.add(ut(l,t.steel,{cast:!1}));let c=(mi.kickAngle+180)*Ps,h=new _e(new fe(3.6*D,.2*D,9*D),Uu);h.position.copy(r(Math.cos(c)*(n-1),Math.sin(c)*(n-1),1.05)),h.rotation.y=c+Math.PI/2,s.add(h);let u=new de;u.add(ut(new fe(2*D,8*D,6*D).translate(0,-3*D,0),t.darkSteel,{cast:!1})),u.position.copy(r(Math.cos(c)*(n-2),Math.sin(c)*(n-2),0)),u.rotation.y=c+Math.PI/2,s.add(u);for(let d of[-1,1]){let f=c+d*(Math.PI/2),g=ut(Fe([[0,0],[2.7,0],[2.7,.6],[1.8,1.4],[0,1.6]],16),t.chrome,{cast:!1});g.position.copy(r(Math.cos(f)*(n+2.2),Math.sin(f)*(n+2.2),.95)),s.add(g)}Ie(s,mi.x,mi.y),i.add(s),e.saucer={group:s,finger:u,rest:u.position.clone(),out:r(-Math.cos(c),-Math.sin(c)).normalize(),kicked:-1}}function Iv(i,t,e,n,s){let r=Fe([[0,0],[17,0],[17,2.7],[0,2.7]],40),a=Fe([[11,2.7],[23.15,2.7],[23.4,3.4],[23.15,4.7],[22.2,5.4],[11,5.4]],56),o=Fe([[0,5.4],[15.5,5.4],[15.5,31.6],[0,31.6]],40),l=Fe([[15.8,-9],[16.8,-9],[16.8,0],[22.6,0],[23.2,.5],[23.2,1.5],[22.6,2],[15.8,2],[15.8,-9]],56),c=new Pe(1.6*D,1.6*D,42*D,10).translate(0,-21*D,0),h=Fe([[0,31.6],[25,31.6],[29.4,32],[30,33],[30,36.5],[29.3,37.8],[25.5,41.6],[21,43.1],[10,43.45],[0,43.5]],72),u=new ge({map:Li(e.popDecal,n),roughness:.3,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),d=new Qr(20.5*D,48).rotateX(-Math.PI/2).translate(0,43.56*D,0),f=new fe(9*D,6*D,6*D).translate(0,3*D,0),g=Fe([[0,6],[2.6,6],[3.4,7],[5,10],[5,18.5],[3.8,21.5],[0,22.4]],20);for(let[y,p]of Es.entries()){let m=new de,S=[],w=(L,O,...I)=>{let F=new de;return F.add(...I),F.userData={label:L,lift:O},m.add(F),S.push(F),F};w("Base",0,ut(r,t.graphitePlastic));let v=ut(a,t.whitePlastic);w("Skirt",26,v);let M=t.bulb.clone();s.bulbs.push(M),w("Lamp \xB7 #555",56,ut(f,t.darkSteel,{cast:!1}),ut(g,M,{cast:!1}));let x=t.popBody.clone(),E=ut(o,x);w("Body",86,E);let _=new de;_.add(ut(l,t.chrome));for(let L of[-1,1])_.add(ut(c,t.chrome).translateX(L*19.5*D));_.position.y=Er.ringRest*D,w("Ring & rods",128,_);let T=t.popCap.clone(),A=ut(h,T,{receive:!1});w("Cap \xB7 \xD860",172,A),w("Decal",206,ut(d,u,{cast:!1}));let C=[-1,1].map(L=>ut(new Pe(2.6*D,2.6*D,.9*D,16).translate(L*17.46*D,43.75*D,0),t.chrome,{cast:!1}));w("Cap screws \xD72",232,...C),Ie(m,p.x,p.y),i.add(m),m.traverse(L=>{L.userData.action="pop-"+y}),s.interactive.push(A,E,v),s.pops.push({group:m,parts:S,ring:_,skirt:v,cap:A,capMat:T,bodyMat:x,fired:-1,axis:new U(1,0,0),x:p.x,y:p.y,id:p.id})}}function Lv(i,t,e,n,s){let r=Jn,a=2.4,o=-r.depth/2,l=new ge({map:Li(e.target,n),roughness:.42}),c=t.whitePlastic;for(let[u,d]of r.list.entries()){let f=new de,g=ut(new fe(r.width*D,r.height*D,a*D),[c,c,c,c,l,c]);g.position.set(0,(r.height/2+1.5)*D,-(o+a/2)*D),f.add(g),f.add(ut(new fe(18*D,22*D,(r.depth-a)*D).translate(0,12.5*D,-(o+a+(r.depth-a)/2)*D),t.graphitePlastic)),f.add(ut(new fe(.4*D,24*D,5*D).translate(-4*D,14*D,-(r.depth/2+1)*D),t.steel,{cast:!1})),Ie(f,d.x,d.y),i.add(f),i.add(Ie(ut(new fe(22*D,1.5*D,(r.depth+4)*D).translate(0,.75*D,0),t.darkSteel,{cast:!1}),d.x,d.y+1)),g.userData.action="target-"+u,s.interactive.push(g),s.targets.push({holder:f,face:g,rest:f.position.clone(),back:new U(0,0,-D),hit:-1,index:u})}for(let[u,d]of xu.entries()){let f=d.d/2,g=gi.grooves[u],y=gi.h,p=gi.cord;i.add(Ie(ut(Fe([[0,0],[f,0],[f,y-p/2-1.5],[g,y-p/2-.5],[g,y+p/2+.5],[f,y+p/2+1.5],[f,d.height-1.2],[f-1.2,d.height],[0,d.height]],28),t.postPlastic),d.x,d.y)),i.add(Ie(ut(new Pe(3.67*D,3.67*D,2.8*D,6).translate(0,1.4*D,0),t.steel,{cast:!1}),d.x,d.y,d.height))}let h=Dv(gi.posts.map(([u,d],f)=>({x:u,y:d,r:gi.grooves[f]+gi.cord/2})));i.add(ut(Ba(dc(h,3).map(([u,d])=>[u,d,gi.h]),gi.cord/2,{closed:!0,tension:.1,radial:8}),t.rubber)),i.add(ut(en(lc.map(u=>bn(u.line,u.thickness,Cs.h))),t.steel));for(let u of lc)bp(i,t,u.line,u.mounts)}function Dv(i){let t=Cn(i.map(r=>[r.x,r.y])).map(([r,a])=>i.find(o=>o.x===r&&o.y===a)),e=t.length,n=[],s=(r,a)=>{let o=a.x-r.x,l=a.y-r.y,c=Math.hypot(o,l);return Math.atan2(l,o)-Math.acos((r.r-a.r)/c)};for(let r=0;r<e;r++){let a=t[r],o=s(t[(r-1+e)%e],a),c=s(a,t[(r+1)%e])-o;for(;c<0;)c+=Math.PI*2;let h=Math.max(2,Math.ceil(c/(8*Ps)));for(let u=0;u<=h;u++){let d=o+c*u/h;n.push([a.x+Math.cos(d)*a.r,a.y+Math.sin(d)*a.r])}}return n}function Uv(i,t,e){e.ramps=[];let n=t.clearPlastic,s=new Du;for(let r of ns){let a=new On(r.profile.map(([u,d,f])=>Ee(u,d,f)),!1,"centripetal"),o=Nv(r.profile),l=new de,c=ut(Fv(a,o),n,{cast:!1,receive:!1});c.renderOrder=2,l.add(c),l.add(Ov(a,o,t)),l.add(Bv(r,t,n,s));for(let u of l.children)u.traverse(d=>{d.userData.action="ramp-"+r.id});i.add(l),e.interactive.push(c);let h=new On(r.wire.map(([u,d,f])=>Ee(u,d,f)),!1,"centripetal");i.add(ut(kv(h,r),t.chrome)),i.add(zv(r,t,s)),e.ramps.push({id:r.id,side:r.side,curve:a,wireCurve:h,group:l})}i.add(...s.meshes(t))}function Nv(i){let t=[0];for(let e=1;e<i.length;e++)t.push(t[e-1]+Math.hypot(...[0,1,2].map(n=>i[e][n]-i[e-1][n])));return e=>{let n=e*t.at(-1),s=1;for(;s<t.length-1&&t[s]<n;)s++;let r=Math.max(0,Math.min(1,(n-t[s-1])/(t[s]-t[s-1]||1)));return i[s-1][3]+(i[s][3]-i[s-1][3])*r}}var xc=.9,_c=.35;function Fv(i,t){let e=wr,n=240,s=new U(0,1,0),r=[];for(let c=0;c<=n;c++){let h=c/n,u=i.getPointAt(h),d=i.getTangentAt(h);r.push({p:u,side:new U().crossVectors(d,s).normalize(),w:t(h),floor:u.y/D})}let a=({w:c,floor:h})=>{let u=c/2,d=u+e.side,f=e.wall,g=e.wall,y=Math.max(0,xc-h),p=Math.max(-e.floor,_c-h),m=h<30?Math.min(p,_c-h):p;return[[[-d,p],[d,p],[d,f],[u,f],[u,y],[-u,y],[-u,g],[-d,g]],[[u,m],[d,m],[d,p],[u,p]],[[-d,m],[-u,m],[-u,p],[-d,p]]]},o=r.map(a),l=[];return o[0].forEach((c,h)=>{for(let u=0;u<c.length;u++){let d=[],f=[],g=[];for(let p=0;p<=n;p++){let m=r[p],S=o[p][h];for(let[w,v]of[S[u],S[(u+1)%S.length]]){let M=m.p.clone().addScaledVector(m.side,w*D).addScaledVector(s,v*D);d.push(M.x,M.y,M.z),g.push(M.y/D)}}for(let p=0;p<n*2;p+=2)Math.max(g[p],g[p+1],g[p+2],g[p+3])<_c+.05||f.push(p,p+2,p+1,p+1,p+2,p+3);let y=new Me;y.setAttribute("position",new te(d,3)),y.setIndex(f),y.computeVertexNormals(),l.push(y)}}),en(l.map(c=>c.toNonIndexed()))}function Ov(i,t,e){let n=wr,s=t(0)/2+n.side,r=24,a=18,o=new U(0,1,0),l=i.getPointAt(0),c=i.getTangentAt(0).setY(0).normalize().negate(),h=new U().crossVectors(c,o).normalize(),u=new un([[0,0],[r,0],[r,_c-.1],[a,xc],[0,xc]].map(([m,S])=>new ot(m*D,S*D))),d=new li(u,{depth:2*s*D,bevelEnabled:!1});d.translate(0,0,-s*D);let f=new le().makeBasis(c,o,h).setPosition(l.x,0,l.z);d.applyMatrix4(f);let g=new de;g.add(ut(d,e.steel,{cast:!1}));let y=[],p=[];for(let m of[-1,1]){let S=new U(a-5,xc,m*(s-4.5)).multiplyScalar(D).applyMatrix4(f);y.push(new Pe(2.6*D,2.6*D,.16*D,20).translate(S.x,S.y+.08*D,S.z)),p.push(...Ap(S.x,S.y+.17*D,S.z,1.7))}return g.add(ut(en(y),e.darkSteel,{cast:!1}),ut(en(p),e.rubber,{cast:!1})),g}function wp(i,t,e){let n=null;for(let s=1;s<i.length;s++){let r=i[s-1],a=i[s],o=a[0]-r[0],l=a[1]-r[1],c=o*o+l*l||1,h=Math.max(0,Math.min(1,((t-r[0])*o+(e-r[1])*l)/c)),u=r.map((f,g)=>f+(a[g]-f)*h),d=Math.hypot(u[0]-t,u[1]-e);(!n||d<n.d)&&(n={q:u,d})}return{...n,dx:(n.q[0]-t)/(n.d||1),dy:(n.q[1]-e)/(n.d||1)}}var Ru={af:9.5,chamfer:.6},Du=class{constructor(){this.zinc=[],this.steel=[],this.black=[],this.recess=[]}standoff(t,e,n){let s=Ru.af/Math.sqrt(3),r=Ru.af/2-.05,a=Ru.chamfer,o=Fe([[0,0],[r,0],[s,a],[s,n-a],[r,n],[0,n]],6).rotateY(Math.PI/6).toNonIndexed();o.computeVertexNormals(),this.zinc.push(o.translate(...Ee(t,e,.8).toArray())),this.washer(t,e,0,6.6,.8)}washer(t,e,n,s=5.2,r=.8,a=2.2){this.steel.push(Fe([[a,0],[s,0],[s,r],[a,r],[a,0]],28).toNonIndexed().translate(...Ee(t,e,n).toArray()))}screw(t,e,n){this.washer(t,e,n);let s=Fe([[0,0],[3.5,0],[3.5,.9],[3.15,1.85],[2.3,2.35],[0,2.5]],24).toNonIndexed();this.black.push(s.translate(...Ee(t,e,n+.8).toArray()));let r=Ee(t,e,n+.8+2.42);this.recess.push(...Ap(r.x,r.y,r.z,2.4))}meshes(t){let e=[],n=(s,r,a)=>{s.length&&e.push(ut(en(s.map(Va)),r,{cast:a}))};return n(this.zinc,t.zinc,!0),n(this.steel,t.steel,!1),n(this.black,t.darkSteel,!1),n(this.recess,t.rubber,!1),e}},Va=i=>{let t=i.index?i.toNonIndexed():i;return t.deleteAttribute("uv"),t};function Ap(i,t,e,n){return[0,Math.PI/2].map(s=>Va(new fe(n*D,.12*D,.45*D).rotateY(s+Math.PI/4).translate(i,t,e)))}function Bv(i,t,e,n){let s=[];for(let[l,c]of i.supports){let h=wp(i.profile,l,c),u=h.q[2],d=u-wr.floor,f=d-3,g=h.d-h.q[3]/2-wr.side+1,y=h.dx,p=h.dy,m=-p,S=y,w=[];for(let v=0;v<=14;v++){let M=Math.PI/2+v/14*Math.PI;w.push([l+(Math.cos(M)*y+Math.sin(M)*m)*7,c+(Math.cos(M)*p+Math.sin(M)*S)*7])}w.push([l+y*g-m*7,c+p*g-S*7],[l+y*g+m*7,c+p*g+S*7]),s.push(Ii(Cn(w),f,3,{bevel:.35,curveSegments:4})),n.standoff(l,c,f-.8),n.screw(l,c,d)}let o=new de;if(s.length){let l=ut(en(s.map(Va)),e,{cast:!1,receive:!1});l.renderOrder=2,o.add(l)}return o}function kv(i,t){let e=i.getLength()/D,n=Math.ceil(e/3),s=new U(0,1,0),r=M=>{let x=i.getPointAt(Math.min(1,Math.max(0,M))),E=i.getTangentAt(Math.min(1,Math.max(0,M)));return{p:x,t:E,s:new U().crossVectors(E,s).normalize()}},a=(M,x,E,_=0)=>M.p.clone().addScaledVector(M.s,x*D).addScaledVector(s,E*D).addScaledVector(M.t,_*D),o=cc,l=o.rail,c=o.rod,h=o.dropRadius,u=e-h-o.spread,d=M=>{let x=Math.max(0,Math.min(1,M));return x*x*(3-2*x)},f=[],g=(M,x=c,E)=>f.push(new wi(new On(M),E||M.length*2,x*D,8));for(let M of[-1,1]){let x=[];for(let E=0;E<=n;E++){let _=E/n*(e-h);x.push(a(r(_/e),M*(l+(h-l)*d((_-u)/o.spread)),c))}g(x,c,n)}let y=r((e-h)/e),p=[];for(let M=0;M<=16;M++){let x=M/16*Math.PI;p.push(a(y,-h*Math.cos(x),c,h*Math.sin(x)))}g(p);let{u:m,v:S}=o.sideRail;for(let M of t.sideRails){let x=[],E=Math.max(4,Math.ceil((M.to-M.from)*e/3));for(let _=0;_<=E;_++)x.push(a(r(M.from+(M.to-M.from)*_/E),-M.side*m,S));g(x,c,E)}let w=[];for(let M=0;M<=16;M++){let x=M/16*Math.PI;w.push(a(y,-(h+1)*Math.cos(x),S,(h+1)*Math.sin(x)))}g(w);for(let M of[-1,1])g([a(y,M*(h+1),c),a(y,M*(h+1),S)],c,4);let v=[[-l-4,c+3],[-l-2.5,-.5],[-l+1,-2.8],[0,-4.2],[l-1,-2.8],[l+2.5,-.5],[l+4,c+3]];for(let M=20;M<u;M+=55){let x=r(M/e);g(v.map(([E,_])=>a(x,E,_)),1.75,24)}return en(f)}function zv(i,t,e){let n=[];for(let[o,l]of i.wireSupports){let c=wp(i.wire,o,l),h=c.q[2],u=c.d-cc.rail,d=h-5,f=Math.min(6.5,u-5),g=[[0,d-1.6/2],[f,d-1.6/2],[u-1.2,h+.4]];n.push(Hv(g,o,l,c.dx,c.dy,11,1.6)),n.push(Va(new Pe(11/2*D,11/2*D,1.6*D,28).translate(...Ee(o,l,d-1.6/2).toArray())));let y=new Pe(1.5*D,1.5*D,10*D,10).rotateX(Math.PI/2).rotateY(Math.atan2(c.dy,c.dx));n.push(Va(y.translate(...Ee(o+c.dx*(u-1.6),l+c.dy*(u-1.6),h-.2).toArray()))),e.standoff(o,l,d-1.6-.8),e.screw(o,l,d)}let a=new de;return n.length&&a.add(ut(en(n),t.steel)),a}function Hv(i,t,e,n,s,r,a){let o=i.map(([y,p])=>[y,p]),l=o.length,c=[],h=y=>{let p=o[Math.max(0,y-1)],m=o[Math.min(l-1,y+1)],S=m[0]-p[0],w=m[1]-p[1],v=Math.hypot(S,w),M=-w/v,x=S/v;if(y>0&&y<l-1){let E=o[y-1],_=o[y],T=o[y+1],A=[-(_[1]-E[1]),_[0]-E[0]],C=[-(T[1]-_[1]),T[0]-_[0]],L=Math.hypot(...A),O=Math.hypot(...C),I=[A[0]/L+C[0]/O,A[1]/L+C[1]/O],F=Math.hypot(...I),k=1/Math.max(.3,I[0]/F*(A[0]/L)+I[1]/F*(A[1]/L));M=I[0]/F*k,x=I[1]/F*k}return[M,x]},u=(y,p,m)=>{let[S,w]=h(y),v=o[y][0]+S*m*a/2,M=o[y][1]+w*m*a/2;return Ee(t+n*v-s*p*r/2,e+s*v+n*p*r/2,M)},d=(y,p,m,S)=>{for(let w of[y,m,p,y,S,m])c.push(w.x,w.y,w.z)};for(let y=0;y<l-1;y++){let p=[[-1,1],[1,1],[1,-1],[-1,-1]];for(let m=0;m<4;m++){let[S,w]=p[m],[v,M]=p[(m+1)%4];d(u(y,S,w),u(y,v,M),u(y+1,v,M),u(y+1,S,w))}}(y=>{let p=[[-1,1],[1,1],[1,-1],[-1,-1]].map(([m,S])=>u(y,m,S));d(p[0],p[1],p[2],p[3])})(l-1);let g=new Me;return g.setAttribute("position",new te(c,3)),g.computeVertexNormals(),g}function Gv(i,t,e){let[n,s]=Ts.from,[r,a]=Ts.to,o=Math.hypot(r-n,a-s),l=Math.atan2(a-s,r-n)/Ps,c=Ie(new de,(n+r)/2,(s+a)/2,0,l),h=Ts.height-3;for(let g of[-1,1])c.add(ut(new fe(1.6*D,Ts.height*D,10*D).translate(g*(o/2)*D,Ts.height/2*D,0),t.steel));c.add(ut(new Pe(1.2*D,1.2*D,o*D,10).rotateZ(Math.PI/2).translate(0,h*D,0),t.steel,{cast:!1}));let u=o/2-5,d=h-5,f=new de;f.add(ut(uc([[-u,0,0],[-u,0,-d],[u,0,-d],[u,0,0]],.9,{tension:.02,radial:6}),t.chrome,{cast:!1})),f.add(ut(uc([[-u,0,-d/2],[u,0,-d/2]],.7,{tension:0,radial:6}),t.chrome,{cast:!1})),f.position.y=h*D,c.add(f),i.add(c),e.gate={flap:f,open:0,velocity:0,at:Ee((n+r)/2,(s+a)/2,mn)}}function Vv(i,t){for(let e of Tu()){let n=Mu(e.color);if(e.legend||e.icon){let r=Li(op(e,192));r.repeat.set(1/(e.w*D),1/(e.l*D)),r.offset.set(.5,.5),n.map=r,n.emissiveMap=r}let s=new _e(is(e.shape,.4,{curveSegments:6}),[n,Mu(e.color)]);Ie(s,e.x,e.y,-.34,e.angle),s.renderOrder=1,i.add(s),t.inserts.set(e.id,{mesh:s,mat:n,side:s.material[1],group:e.group,index:e.index,level:.06,goal:.06,flash:0})}}function Wv(i,t,e){let[n,s]=re.ballRest,r=s-mn,a=vt.l/2-(on.front-on.wallT)/D,o=new de;o.add(ut(Fe([[0,0],[5.5,.4],[8.4,1.8],[9.5,4.5],[9.5,25.4],[0,25.4]],24).rotateX(Math.PI/2),t.rubber)),o.add(ut(new Pe(4.76*D,4.76*D,194*D,16).rotateX(Math.PI/2).translate(0,0,(6.4+97)*D),t.chrome));let l=ut(Fe([[0,0],[6,0],[10.5,5],[14.3,16],[13.6,30],[8,33],[0,33.5]],28).rotateX(Math.PI/2).translate(0,0,196*D),t.rubberRoyal);o.add(l),o.position.copy(Ee(n,r,10)),i.add(o);for(let f of o.children)f.userData.action="plunger";e.interactive.push(l);let c=r-25.4-a,h=24,u=[];for(let f=0;f<=h*16;f++){let g=f/16*Math.PI*2;u.push(new U(Math.cos(g)*5.55*D,Math.sin(g)*5.55*D,-(f/(h*16))*c*D))}let d=ut(new wi(new On(u),h*16,.4*D,5),t.steel);d.position.copy(Ee(n,a,10)),i.add(d),i.add(Ie(ut(new fe(28*D,34*D,5*D).translate(0,10*D,-2.5*D),t.darkSteel),n,a+5,0)),e.plunger={group:o,spring:d,springLen:c,rest:o.position.clone(),pull:0,offset:0}}function Xv(i,t,e){let n=new ca(mn*D,40,28);e.ball=ut(n,t.ball),e.ball.position.copy(Ee(re.ballRest[0],re.ballRest[1],mn)),i.add(e.ball),e.shooterBall=ut(n,t.ball),e.shooterBall.position.copy(Ee(re.ballRest[0],re.ballRest[1],mn)),i.add(e.shooterBall)}function qv(i,t,e){let n=[[106,300],[368.35,300],[112,332],[362.35,332],...hc],s=Fe([[0,0],[3.2,0],[4.6,3],[5.1,7],[5.1,12],[4.2,15.5],[2.4,17],[0,17.3]],16),r=new Pe(4.2*D,4.6*D,6*D,12).translate(0,3*D,0);for(let[o,l]of n){let c=t.bulb.clone(),h=new de;h.add(ut(r,t.darkSteel));let u=new _e(s,c);u.position.y=5*D,h.add(u),i.add(Ie(h,o,l)),e.bulbs.push(c)}let a=[[109,316,24,.9],[365.35,316,24,.9],...hc.map(([o,l])=>[o+(o<vt.cx?6:-6),l,20,.55])];for(let[o,l,c,h]of a){let u=new pa(ws,0,.4,2);u.position.copy(Ee(o,l,c)),u.userData.base=h*.02,i.add(u),e.gi.push(u)}}function Yv(i,t,e,n,s,r){let a=on,o=a.front-a.back,l=Au(a.back),c=a.top-l,h=a.inner+a.wallT*2,u=Li(n.cabinetSide,s),d=new Ke({map:u,roughness:.4,clearcoat:.7,clearcoatRoughness:.2}),f=d.clone();f.map=u.clone(),f.map.wrapS=yn,f.map.repeat.x=-1,f.map.needsUpdate=!0;let g=new un([[1,(a.top-l)/c],[0,(a.top-l)/c],[0,0],[1,(a.bottom-l)/c]].map(([I,F])=>new ot(I,F))),y=(I,F)=>{let k=new ps(g).applyMatrix4(new le().set(0,0,1,I,0,c,0,l,o,0,0,a.back,0,0,0,1));return F>0&&(k.scale(-1,1,1),k.translate(2*I,0,0)),k.computeVertexNormals(),k};for(let I of[-1,1]){let F=I*(a.inner/2+a.wallT+25e-5),k=I*(a.inner/2);i.add(ut(y(F,I),I>0?f:d)),i.add(ut(y(k,-I),e.cabinetInner));let G=ut(new fe(a.wallT+.012,.012,o+.004),e.armour);G.position.set(I*(a.inner/2+a.wallT/2-.002),a.top+.006,(a.front+a.back)/2),i.add(G)}let p=a.top-a.bottom-.04,m=ut(new fe(h,p,a.wallT),e.cabinet);m.position.set(0,a.bottom+p/2,a.front-a.wallT/2),i.add(m);let S=(a.top-Au(a.back))*.08,w=ut(new tn(h,S),new Ke({color:mc,roughness:.42,clearcoat:.7,clearcoatRoughness:.2}),{cast:!1});w.position.set(0,a.bottom+S/2,a.front+4e-4),i.add(w);let v=ut(new tn(h,.0045),new ge({color:16119544,roughness:.4}),{cast:!1});v.position.set(0,a.bottom+S+.017,a.front+4e-4),i.add(v);let M=a.top-l,x=ut(new fe(h,M,a.wallT),e.cabinet);x.position.set(0,l+M/2,a.back+a.wallT/2),i.add(x);let E=ut(new fe(h,a.wallT,o/Math.cos(vc)),e.cabinet);E.rotation.x=-vc,E.position.set(0,(a.bottom+l)/2+a.wallT/2,(a.front+a.back)/2),i.add(E);let _=ut(new yc(h+.006,.026,.072,.006),e.trim);_.position.set(0,a.top+.004,a.front-.03),i.add(_);let T=a.bottom+p*.5,A=ut(new yc(.25,.012,.28,.012),e.trim);A.rotation.x=Math.PI/2,A.position.set(0,T-.02,a.front+.004),i.add(A);let C=ut(new fe(.21,.24,.004),e.darkSteel);C.position.set(0,T-.02,a.front+.011),i.add(C);for(let I of[-.048,.048]){let F=ut(new fe(.06,.085,.006),e.aluminium);F.position.set(I,T+.045,a.front+.014),i.add(F);let k=new _e(new fe(.004,.026,.002),new hn({color:pc}));k.position.set(I,T+.055,a.front+.0175),i.add(k);let G=ut(new Pe(.008,.008,.004,16).rotateX(Math.PI/2),e.trim);G.position.set(I,T+.02,a.front+.018),i.add(G)}let L=new Ke({color:Pn,emissive:Pn,emissiveIntensity:.5,roughness:.25,clearcoat:1,clearcoatRoughness:.05});L.userData.gain=za(Pn,1)*.32;let O=ut(Fe([[0,0],[15,0],[15,4],[13,9],[0,10]],28).rotateX(Math.PI/2),L);O.position.set(-.205,a.top-.07,a.front),i.add(O),r.startButton=O,i.updateMatrixWorld(!0);for(let[I,F]of[[-1,a.front-.06],[1,a.front-.06],[-1,a.back+.06],[1,a.back+.06]]){let k=new U(I*(h/2-.035),Au(F),F).applyMatrix4(i.matrixWorld),G=k.y-a.floor,st=new de;st.add(ut(new fe(.06,G,.06),e.armour)),st.add(ut(new Pe(.022,.026,.02,16).translate(0,-G/2-.01,0),e.rubber)),st.position.set(k.x,a.floor+G/2+.02,k.z),t.add(st)}}var yc=class extends Me{constructor(t,e,n,s){super();let r=new fe(t-2*s,e,n-2*s),a=new un,o=t/2,l=n/2;a.moveTo(-o+s,-l),a.lineTo(o-s,-l),a.quadraticCurveTo(o,-l,o,-l+s),a.lineTo(o,l-s),a.quadraticCurveTo(o,l,o-s,l),a.lineTo(-o+s,l),a.quadraticCurveTo(-o,l,-o,l-s),a.lineTo(-o,-l+s),a.quadraticCurveTo(-o,-l,-o+s,-l);let c=new li(a,{depth:e,bevelEnabled:!1,curveSegments:6});c.rotateX(Math.PI/2),c.translate(0,e/2,0),r.dispose(),this.copy(c)}};function Zv(i,t,e,n,s,r,a=s){let o=rs,l=new de;r.body.updateMatrixWorld(!0);let c=new U(0,on.top,on.back+.02).applyMatrix4(r.body.matrixWorld);l.position.set(0,c.y+.004,c.z+.02),i.add(l),r.backbox=l;let h=ut(new fe(o.w,o.h,o.d),t.cabinet);h.position.set(0,o.h/2,-o.d/2),l.add(h);let u=new un;u.moveTo(-o.w/2,0),u.lineTo(o.w/2,0),u.lineTo(o.w/2,o.h),u.lineTo(-o.w/2,o.h),u.lineTo(-o.w/2,0);let d=new oi,f=o.w/2-.022;d.moveTo(-f,.018),d.lineTo(-f,o.h-.02),d.lineTo(f,o.h-.02),d.lineTo(f,.018),d.lineTo(-f,.018),u.holes.push(d);let g=ut(new li(u,{depth:.012,bevelEnabled:!0,bevelSize:.002,bevelThickness:.002,bevelSegments:2}),t.trim);g.position.z=-.004,l.add(g);let y=o.glassY-.03,p=ut(new fe(o.w-.044,y,.006),t.speaker);p.position.set(0,.018+y/2,.001),l.add(p);for(let A of[-1,1]){let C=new de,L=ut(Fe([[0,0],[48,0],[52,1.5],[55,4],[0,4]],40).rotateX(Math.PI/2),t.darkSteel);C.add(L);for(let O=10;O<=44;O+=8.5){let I=new _e(new lr(O*D,1.1*D,6,40),t.speaker);I.position.z=4.2*D,C.add(I)}C.position.set(A*(o.dmdW/2+.072),o.dmdY,.004),l.add(C)}let m=new Ei(n);m.colorSpace=Xe,m.anisotropy=s;let S=new _e(new tn(o.dmdW,o.dmdH),new hn({map:m,toneMapped:!1}));S.position.set(0,o.dmdY,.0052),S.userData.action="dmd",l.add(S);let w=ut(new fe(o.dmdW+.024,o.dmdH+.024,.004),t.cabinetInner);w.position.set(0,o.dmdY,.0025),l.add(w),r.dmd={mesh:S,texture:m},r.interactive.push(S);let v=Li(e.backglass,s),M=o.glassY+o.glassH/2,x=$v(v,a),E=new _e(new tn(o.glassW,o.glassH),x.material);E.position.set(0,M,.002),l.add(E),x.mesh=E,r.interactive.push(E);let _=new _e(new tn(o.glassW,o.glassH),t.screenGlass);_.position.set(0,M,.006),l.add(_),r.backglass={mesh:E,material:x.material,lcd:x,level:0};let T=new We;T.position.set(0,M,.0065),l.add(T),r.heroAnchor=T,r.backglassSize=[o.glassW,o.glassH]}function $v(i,t){let e={tA:{value:i},tB:{value:i},uSeq:{value:1}},n=new hn({map:i,toneMapped:!1,color:new Wt(0,0,0)});n.onBeforeCompile=r=>{Object.assign(r.uniforms,e),r.fragmentShader=`uniform sampler2D tA;
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
      }`)};let s={material:n,mesh:null,showing:"art",seq:1,pictures:{art:{texture:i,action:null}}};return s.add=(r,a,o)=>{let l=new Ei(a);l.colorSpace=Xe,l.anisotropy=t,s.pictures[r]={texture:l,action:o}},s.show=(r,a=!1)=>{let o=s.pictures[r];!o||r===s.showing||(s.seq<1&&s.seq>.5&&(e.tA.value=e.tB.value),e.tB.value=o.texture,s.seq=a?1:0,s.showing=r)},s.update=r=>{s.seq<1&&(s.seq=Math.min(1,s.seq+r/.85)),s.seq>=1&&(e.tA.value=e.tB.value),e.uSeq.value=s.seq,s.mesh&&(s.mesh.userData.action=s.seq>.6?s.pictures[s.showing].action:null)},s}Qt.tonemapping_pars_fragment=Qt.tonemapping_pars_fragment.replace("vec3 CustomToneMapping( vec3 color ) { return color; }",`vec3 CustomToneMapping( vec3 color ) {
    color = NeutralToneMapping( color );
    vec3 s = mix( color * 12.92, 1.055 * pow( color, vec3( 0.41667 ) ) - 0.055, step( 0.0031308, color ) );
    s = max( s + ( fract( 52.9829189 * fract( dot( gl_FragCoord.xy, vec2( 0.06711056, 0.00583715 ) ) ) ) - 0.5 ) / 255.0, 0.0 );
    return mix( s / 12.92, pow( ( s + 0.055 ) / 1.055, vec3( 2.4 ) ), step( 0.04045, s ) );
  }`);var Rp="1.35";Qt.lights_fragment_end+=`
#if defined( STANDARD )
	{
		vec3 s = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
		float k = min( 1.0, ${Rp} / max( max( max( s.r, s.g ), s.b ), 1e-4 ) );
		reflectedLight.directSpecular *= k;
		reflectedLight.indirectSpecular *= k;
		#ifdef USE_CLEARCOAT
			vec3 c = clearcoatSpecularDirect + clearcoatSpecularIndirect;
			float kc = min( 1.0, ${Rp} / max( max( max( c.r, c.g ), c.b ), 1e-4 ) );
			clearcoatSpecularDirect *= kc;
			clearcoatSpecularIndirect *= kc;
		#endif
	}
#endif
`;var Nu=class extends Na{setSize(t,e){super.setSize(Math.ceil(t/2),Math.ceil(e/2))}_overrideVisibility(){super._overrideVisibility(),this.scene.traverseVisible(t=>{t.isMesh&&(t.userData.noAO||[].concat(t.material).some(e=>e.transparent))&&(t.visible=!1,this._visibilityCache.push(t))})}},Fu=class extends Sr{setSize(t,e){super.setSize(Math.ceil(t/2),Math.ceil(e/2))}};function Jv(i,t){let e=new ir;e.background=new Wt(.0036,.0042,.0058);let n=new _e(new tn(40,40).rotateX(-Math.PI/2),new hn({color:new Wt(.016,.017,.021)}));n.position.y=-2,e.add(n);let s=(o,l,c,h,u,d,f)=>{let g=new _e(new tn(o,l),new hn({color:new Wt(h).multiplyScalar(c),side:fn}));g.position.set(u,d,f),g.lookAt(0,0,0),e.add(g)};s(12,12,.22,15856631,0,7,0),s(6,3,3,16185338,0,5,-3.5),s(.7,5,2.4,16777215,-5,2,-1),s(.7,5,2.5,15002367,5,2,-1.5),s(1.6,1.6,5,16775409,2,6,3.5),s(6,2,1.2,15987959,0,1.2,6),s(9,.4,.32,2841087,0,.35,-5);let r=new yr(i),a=r.fromScene(e,.015,.1,50,{size:t});return r.dispose(),e.traverse(o=>{o.geometry?.dispose(),o.material?.dispose()}),a.texture}function Cp(i,t){let e=new Jl({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance",outputBufferType:t.effects?Oe:je}),n=t.pixelRatio;e.setPixelRatio(n),e.outputColorSpace=Xe,e.toneMapping=va,e.toneMappingExposure=1.1,e.shadowMap.enabled=t.shadows,e.shadowMap.type=ms,e.shadowMap.autoUpdate=!1;let s=new ir;s.background=new Wt(395018),s.fog=new qr(395018,3.2,7.5);let r=Jv(e,t.low?256:512);s.environment=r,s.environmentIntensity=.6;let a=new Je(32,1,.02,20),o={};o.key=new dr(16775151,14,0,.45,.7,2),o.key.position.set(.55,2.3,1.1),o.key.target.position.set(0,-.1,0),o.key.castShadow=t.shadows,o.key.shadow.mapSize.set(t.shadowSize,t.shadowSize),Object.assign(o.key.shadow,{bias:-4e-4,normalBias:.003,radius:t.low?2:3,focus:.7}),o.key.shadow.camera.near=1.2,o.key.shadow.camera.far=4.2,s.add(o.key,o.key.target),o.rim=new ma(14542079,1.15),o.rim.position.set(-1.2,1.6,-2.4),s.add(o.rim),o.focus=new dr(16775410,0,0,.42,1,2),s.add(o.focus,o.focus.target);let l=new _e(new tn(12,12).rotateX(-Math.PI/2),new ge({color:3553858,roughness:.85}));l.position.y=on.floor,l.receiveShadow=t.shadows,s.add(l);let c=null,h=null,u=null;if(t.effects){c=new Nu(s,a,1,1,void 0,{radius:.035,distanceExponent:1.5,thickness:.04,distanceFallOff:1,scale:1.1,samples:12},{lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),c.blendIntensity=.7,h=new Fu(new ot(1,1),.22,.2,1.6),h.highPassUniforms.smoothWidth.value=.5;let x=new ec(Zf);x.uniforms.offset.value=.85,x.uniforms.darkness.value=1,u=new nc(s,a,{focus:1,aperture:0,maxblur:.005}),u.uniforms.range={value:0},u.materialBokeh.fragmentShader=u.materialBokeh.fragmentShader.replace("uniform float focus;",`uniform float focus;
		uniform float range;`).replace("float factor = ( focus + viewZ );",`float factor = ( focus + viewZ );
			factor = sign( factor ) * max( 0.0, abs( factor ) - range );`),e.setEffects([c,u,h,x])}let d=1,f=1;function g(x,E){d=x,f=E,e.setSize(x,E,!1),a.aspect=x/E,a.updateProjectionMatrix()}function y(){e.shadowMap.needsUpdate=!0,e.render(s,a)}let p=16.7,m=0,S=performance.now()+4e3;function w(x){m&&(p+=(Math.min(100,x-m)-p)*.05),m=x,!(x<S||p<21)&&(c&&c.enabled?c.enabled=!1:u&&u.enabled?u.enabled=!1:n>1&&(n=Math.max(1,n-.25),e.setPixelRatio(n),g(d,f)),S=x+2500,p=16.7)}let v=new U;function M(x,E,_,T=0){v.copy(a.position).sub(x).setY(0).normalize(),o.focus.position.copy(x).addScaledVector(v,.28).add(new U(0,.62,0)),o.focus.target.position.copy(x),o.focus.intensity=.55*_,u&&(u.uniforms.focus.value=E,u.uniforms.aperture.value=.012*_,u.uniforms.range.value=.012+.3*T)}return{renderer:e,scene:s,camera:a,lights:o,ao:c,bloom:h,dof:u,envMap:r,resize:g,render:y,govern:w,focusOn:M,floor:l}}function Pp(){let i=Math.min(innerWidth,innerHeight)<700,t=matchMedia("(pointer: coarse)").matches,e=i||t;return{low:e,effects:!e,pixelRatio:Math.min(devicePixelRatio||1,1.5),shadows:!0,shadowSize:e?1024:2048,playfieldScale:e?2.4:3.6,anisotropy:e?4:8}}var Rr=Math.PI/180,Ip=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Kv=i=>i*i*i*(i*(i*6-15)+10),Mc=class{constructor(t){this.camera=t,this.poses=[],this.anchors=[],this.holds=[],this.current=null,this.parallax={x:0,y:0,tx:0,ty:0},this.view={width:1,height:1,header:64,layout:"wide",panelTop:0,panelLeft:0}}setPoses(t){this.poses=t}measure(t,e){let n=scrollY,s=a=>a.getBoundingClientRect().top+n,r=a=>+a.dataset.hold||1;this.anchors=t.map(a=>s(a)+a.offsetHeight/2-e/2),this.anchors[0]=0,this.holds=t.map((a,o)=>{let l=o>0?this.anchors[o]-this.anchors[o-1]:1/0,c=o<t.length-1?this.anchors[o+1]-this.anchors[o]:1/0;return Math.min(Math.min(l,c,a.offsetHeight)*.42*r(a),Math.min(l,c)*.75)})}setStops(t,e){let n=scrollY;this.holds=e.slice(),this.anchors=t.map((s,r)=>s.getBoundingClientRect().top+n+e[r]/2)}floatAt(t){let e=this.anchors,n=this.holds,s=e.length;if(!s||t<=e[0]+n[0]/2)return 0;for(let r=0;r<s-1;r++){let a=e[r]+n[r]/2,o=e[r+1]-n[r+1]/2;if(t<a)return r;if(t<=o)return r+Kv(Ip((t-a)/Math.max(1,o-a)))}return s-1}holdProgress(t,e){let n=this.anchors[t]-this.holds[t]/2;return Ip((e-n)/Math.max(1,this.holds[t]))}setView(t,e,n){this.view.width=t,this.view.height=e,this.view.header=n;let s=t/e>1.05;this.view.layout=s?t>=900&&e>=540?"wide":"side":"tall",this.view.panelTop=Math.round(Math.max(e*.47,e-460)),this.view.panelLeft=Math.round(t*.54)}frame(t){let{width:e,height:n,header:s,layout:r}=this.view,a=s/n;if(t.side==="center")return{cx:.5,cy:.5,fx:.9,fy:.9};if(r==="wide"){if(t.side==="hero")return{cx:.5,cy:a/2+.5,fx:.96,fy:(1-a)*.97};let l=Math.min(.42,(Math.min(560,e*.4)+80)/e);return{cx:t.side==="left"?l+(1-l)/2:(1-l)/2,cy:a/2+.5,fx:(1-l)*.98,fy:(1-a)*.98}}if(r==="side"){let l=this.view.panelLeft/e;return{cx:l/2,cy:(a+1)/2,fx:l*.94,fy:(1-a)*.92}}let o=this.view.panelTop/n;return{cx:.5,cy:(a+o)/2,fx:.96,fy:(o-a)*.92}}resolve(t){this.view.layout==="tall"&&t.tall&&(t={...t,...t.tall});let e=this.frame(t),n=(t.fov||32)*Rr,s=this.view.width/this.view.height,r=Math.tan(n/2),a=Math.max(t.fit[1]/(2*r*e.fy),t.fit[0]/(2*r*s*e.fx))*(t.zoom||1);return{target:t.target.clone(),az:t.az*Rr,el:t.el*Rr,d:a,fov:t.fov||32,cx:e.cx,cy:e.cy,sharp:t.sharp||0}}blend(t,e,n,s=0){return{target:t.target.clone().lerp(e.target,n),az:t.az+(e.az-t.az)*n,el:t.el+(e.el-t.el)*n+Math.sin(Math.PI*n)*s*Rr,d:Math.exp(Math.log(t.d)+(Math.log(e.d)-Math.log(t.d))*n),fov:t.fov+(e.fov-t.fov)*n,cx:t.cx+(e.cx-t.cx)*n,cy:t.cy+(e.cy-t.cy)*n,sharp:t.sharp+(e.sharp-t.sharp)*n}}at(t){let e=this.poses.length,n=Math.min(e-1,Math.floor(t)),s=t-n,r=this.resolve(this.poses[n]);if(s<=0||n>=e-1)return r;let a=this.resolve(this.poses[n+1]);return this.blend(r,a,s,this.poses[n+1].lift||0)}pointer(t,e){this.parallax.tx=t,this.parallax.ty=e}apply(t,e,{damping:n=9,instant:s=!1}={}){let r=s?1:1-Math.exp(-e*n);(!this.current||s)&&(this.current={...t,target:t.target.clone()});let a=this.current;a.target.lerp(t.target,r),a.az+=(t.az-a.az)*r,a.el+=(t.el-a.el)*r,a.d+=(t.d-a.d)*r,a.fov+=(t.fov-a.fov)*r,a.cx+=(t.cx-a.cx)*r,a.cy+=(t.cy-a.cy)*r,a.sharp+=(t.sharp-a.sharp)*r;let o=this.parallax,l=s?1:1-Math.exp(-e*3);o.x+=(o.tx-o.x)*l,o.y+=(o.ty-o.y)*l;let c=a.az+o.x*1.6*Rr,h=a.el-o.y*1*Rr,u=this.camera;u.position.set(a.target.x+Math.sin(c)*Math.cos(h)*a.d,a.target.y+Math.sin(h)*a.d,a.target.z+Math.cos(c)*Math.cos(h)*a.d),u.lookAt(a.target),u.fov=a.fov;let{width:d,height:f}=this.view;u.setViewOffset(d,f,d*(.5-a.cx),f*(.5-a.cy),d,f),u.updateProjectionMatrix()}};var xi=Math.PI/180,jv=24,Lp=40,Qv=1e3,Dp=60*xi,Up=Object.freeze({rubber:{e:.9,falloff:.1,f:.9,scatter:1},band:{e:.85,falloff:.13,f:.9,scatter:0},sling:{e:.85,falloff:0,f:.8,scatter:1},metal:{e:.4,falloff:0,f:.2,scatter:0},pop:{e:.4,falloff:0,f:.2,scatter:2},plastic:{e:.42,falloff:0,f:.3,scatter:0},drop:{e:.625,falloff:.05,f:.3,scatter:1},ramp:{e:.5,falloff:.2,f:.15,scatter:0},wire:{e:.4,falloff:0,f:.15,scatter:0},flipper:{e:.88,falloff:.15,f:.9,scatter:0}}),Cr=(i,t,e)=>i<t?t:i>e?e:i;function Ou(i,t){let e=(typeof i.mat=="string"?Up[i.mat]:i.mat)||Up[t];return{e:i.e??e.e,falloff:i.falloff??e.falloff,f:i.f??e.f,scatter:i.scatter??e.scatter??0}}function ty(i){let t=i.seed=i.seed+1831565813>>>0;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}var ey=(i,t)=>i.layer==="*"||i.layer===t;function ny(i,t,e){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){let[a,o]=i[s],[l,c]=i[r];o>e!=c>e&&t<(l-a)*(e-o)/(c-o)+a&&(n=!n)}return n}function iy(i,t,e,n){let s=i.len2>0?Cr(((t-i.ax)*i.ex+(e-i.ay)*i.ey)/i.len2,0,1):0,r=i.ax+i.ex*s,a=i.ay+i.ey*s,o=t-r,l=e-a,c=Math.hypot(o,l),h=n+i.r;if(c>=h)return null;let u,d;if(c>1e-9)u=o/c,d=l/c;else{let f=Math.sqrt(i.len2)||1;u=-i.ey/f,d=i.ex/f}return{nx:u,ny:d,depth:h-c,px:r+u*i.r,py:a+d*i.r,t:s}}function sy(i,t,e,n){let s=t-i.x,r=e-i.y,a=Math.hypot(s,r),o=n+i.r;if(a>=o)return null;let l=a>1e-9?s/a:0,c=a>1e-9?r/a:1;return{nx:l,ny:c,depth:o-a,px:i.x+l*i.r,py:i.y+c*i.r}}var Bu=class{constructor(t){this.p=t,Object.assign(this,{x:0,y:0,z:t.R,vx:0,vy:0,vz:0,wx:0,wy:0,wz:0,layer:0,active:!1,serial:0}),this.q=[0,0,0,1],this.view={x:0,y:0,z:t.R},this.ox=0,this.oy=0,this.oz=t.R}get spin(){return{x:this.wx,y:this.wy,z:this.wz}}get speed(){return Math.hypot(this.vx,this.vy)}place(t,e,n=0,s=0,{layer:r=0}={}){let a=this.p,o=a.R;Object.assign(this,{x:t,y:e,vx:n,vy:s,vz:0,wx:-s/o,wy:n/o,wz:0,layer:r,active:!0}),this.serial++;let l=r!==0?a.trackOf(r):null;l?(l.cursor=-1,this.z=a.locate(l,t,e).z):this.z=o,this.ox=t,this.oy=e,this.oz=this.z,Object.assign(this.view,{x:t,y:e,z:this.z});for(let c of a.triggers)c.inside=!1;for(let c of a.saucers)c.holding=!1;return this}remove(){this.active=!1,this.serial++;for(let t of this.p.triggers)t.inside=!1;for(let t of this.p.saucers)t.holding=!1}},Sc=class{constructor(t){Object.assign(this,{baseR:11.28,tipR:6.64,length:62.8,strokeTime:.028,hold:.375,holdAngle:6,ret:.055,eosBounce:.2,restBounce:.1,inertia:2200},t),this.id=t.id||"flipper-"+t.side,this.kind="flipper",this.dir=Math.sign(t.up-t.rest)||1,this.restRad=t.rest*xi,this.stroke=Math.abs(t.up-t.rest)*xi,this.holdAngle*=xi,this.alpha=2*this.stroke/this.strokeTime**2,this.mat=Ou(t,"flipper");let e=(this.baseR-this.tipR)/this.length;this.cotPhi=e/Math.sqrt(1-e*e),this.a=0,this.w=0,this.oa=0,this.on=!1,this.queue=[]}get theta(){return this.restRad+this.dir*this.a}get omega(){return this.w*this.dir}surfaceSpeed(){return Math.abs(this.w)*(this.length+this.tipR)}update(t){let e=this.on?this.alpha*(this.a>this.stroke-this.holdAngle?this.hold:1):-this.alpha*this.ret;this.w+=e*t,this.a+=this.w*t,this.a>=this.stroke?(this.a=this.stroke,this.w>0&&(this.w=this.w>Dp?-this.eosBounce*this.w:0)):this.a<=0&&(this.a=0,this.w<0&&(this.w=this.w<-Dp?-this.restBounce*this.w:0))}test(t,e,n){let s=this.theta,r=Math.cos(s),a=Math.sin(s),o=t-this.x,l=e-this.y,c=o*r+l*a,h=-o*a+l*r,u=Math.abs(h);if(c<-this.baseR-n||c>this.length+this.tipR+n||u>this.baseR+n)return null;let d=Cr(c-u*this.cotPhi,0,this.length),f=this.baseR+(this.tipR-this.baseR)*d/this.length,g=c-d,y=Math.hypot(g,u);if(y>=f+n)return null;let p=h<0?-1:1,m=y>1e-9?g/y:0,S=y>1e-9?u/y*p:p,w=m*r-S*a,v=m*a+S*r,M=this.x+d*r+w*f,x=this.y+d*a+v*f,E=this.omega;return{nx:w,ny:v,depth:f+n-y,px:M,py:x,u:d,svx:-E*(x-this.y),svy:E*(M-this.x),body:this}}locked(t){let e=-Math.sign(t)*this.dir;return e<0&&this.a<=1e-9||e>0&&this.a>=this.stroke-1e-9}push(t){this.w+=t*this.dir}},bc=class{constructor(t={}){let e={pitch:6.5,g:9810,radius:13.5,mass:.0806,step:.001,floorFriction:.2,rolling:.0035,spinDecay:1.5,hitMin:50,cell:32,seed:1,...t};this.o=e,this.seed=e.seed>>>0||1,this.R=e.radius,this.mass=e.mass,this.dt=e.step,this.gy=-e.g*Math.sin(e.pitch*xi),this.gN=e.g*Math.cos(e.pitch*xi),this.maxTravel=.2*this.R,this.bounds=e.bounds||null,this.colliders=[],this.flippers=[],this.saucers=[],this.triggers=[],this.tracks=[],this.handlers={},this.muted=!1,this.grid=null,this.steps=0,this.time=0,this.acc=0,this.ball=new Bu(this)}collider(t,e,n){return Object.assign(t,{id:e.id??null,kind:e.kind||t.kind,layer:e.layer??0,enabled:!0,mat:Ou(e,n),lastKick:-1e9,solid:!0}),this.colliders.push(t),this.grid=null,t.id}addWall(t,e,n,s,r={}){let a=r.r||0,o=n-t,l=s-e,c={type:"seg",kind:"wall",ax:t,ay:e,bx:n,by:s,r:a,ex:o,ey:l,len2:o*o+l*l,box:[Math.min(t,n)-a,Math.min(e,s)-a,Math.max(t,n)+a,Math.max(e,s)+a]};if(r.oneWay){let h=Math.hypot(...r.oneWay);c.oneWay=[r.oneWay[0]/h,r.oneWay[1]/h]}return r.kick&&Object.assign(c,{kick:r.kick,minSpeed:r.minSpeed??120,recycle:r.recycle??.06,normal:r.normal}),this.collider(c,r,"metal")}addCircle(t,e,n,s={}){let r={type:"circle",kind:s.kick?"pop":"post",x:t,y:e,r:n,box:[t-n,e-n,t+n,e+n]};return s.kick&&Object.assign(r,{kick:s.kick,minSpeed:s.minSpeed??50,recycle:s.recycle??.03}),this.collider(r,s,s.kick?"pop":"rubber")}addKicker(t,e,n,s,r={}){let a=Math.hypot(n-t,s-e),o=r.normal||[-(s-e)/a,(n-t)/a];return r.away&&(r.away[0]-t)*o[0]+(r.away[1]-e)*o[1]>0&&(o=[-o[0],-o[1]]),this.addWall(t,e,n,s,{kind:"sling",mat:"sling",kick:2200,minSpeed:120,recycle:.06,...r,normal:o})}addFlipper(t){let e=new Sc(t);return this.flippers.push(e),e.id}addSaucer(t,e,n={}){let s={id:n.id||"saucer"+this.saucers.length,kind:"saucer",x:t,y:e,reach:n.reach??10.5,maxSpeed:n.maxSpeed??900,hold:n.hold??1,kick:n.kick??1600,angle:(n.angle??-90)*xi,sink:n.sink??5,rearm:n.rearm??.3,holding:!1,releaseAt:0,armedAt:0,enabled:!0};return this.saucers.push(s),s.id}addTrigger(t,e,n={}){let s={id:e,kind:n.kind||(n.drain?"drain":"trigger"),layer:n.layer??0,drain:!!n.drain,enabled:!0,inside:!1};if(Array.isArray(t)){s.poly=t.map(o=>[o[0],o[1]]);let r=s.poly.map(o=>o[0]),a=s.poly.map(o=>o[1]);s.box=[Math.min(...r),Math.min(...a),Math.max(...r),Math.max(...a)]}else Object.assign(s,{x:t.x,y:t.y,r:t.r}),s.box=[t.x-t.r,t.y-t.r,t.x+t.r,t.y+t.r];return this.triggers.push(s),e}addTrack(t,e={}){let n=e.id||"track"+this.tracks.length,s={id:n,layer:e.layer??n,kind:e.kind||"ramp",mat:Ou(e,"ramp"),entry:e.entry||[0,0],exit:e.exit??1/0,exitDamp:e.exitDamp??1,cursor:-1};s.pts=t.map(c=>({x:c[0],y:c[1],z:c[2],hw:c[3]??21})),s.seg=[];let r=0;for(let c=0;c+1<s.pts.length;c++){let h=s.pts[c],u=s.pts[c+1],d=u.x-h.x,f=u.y-h.y,g=Math.hypot(d,f)||1e-6;s.seg.push({a:h,b:u,ex:d,ey:f,len:g,len2:g*g,s:r,tx:d/g,ty:f/g,slope:(u.z-h.z)/g}),r+=g}s.length=r;let a=s.seg.findIndex(c=>c.s+c.len>=s.entry[1]);s.entrySegs=a<0?s.seg.length:a+1;let o=s.pts.slice(0,s.entrySegs+1),l=Math.max(...o.map(c=>c.hw))+40;return s.entryBox=[Math.min(...o.map(c=>c.x))-l,Math.min(...o.map(c=>c.y))-l,Math.max(...o.map(c=>c.x))+l,Math.max(...o.map(c=>c.y))+l],s.wall={test:(c,h,u)=>this.trackWall(s,c,h,u),mat:s.mat,id:n,kind:s.kind},this.tracks.push(s),n}setEnabled(t,e){for(let n of this.colliders)n.id===t&&(n.enabled=!!e);for(let n of this.triggers)n.id===t&&(n.enabled=!!e)}isEnabled(t){let e=this.colliders.find(n=>n.id===t)||this.triggers.find(n=>n.id===t);return e?e.enabled:!1}flipper(t){return this.flippers.find(e=>e.id===t)||this.flippers.find(e=>e.side===t)}flippersFor(t){let e=this.flippers.filter(n=>n.side===t);return e.length?e:this.flippers.filter(n=>n.id===t)}setFlipper(t,e,n=0){for(let s of this.flippersFor(t))n>0?(s.queue.push({at:this.time+n,on:!!e}),s.queue.sort((r,a)=>r.at-a.at)):(s.queue.length=0,s.on=!!e)}flipperAngle(t){let e=this.flipper(t);if(!e)return 0;let n=this.acc/this.dt,s=e.oa+(e.a-e.oa)*n;return e.rest+e.dir*s/xi}on(t,e){var n;return((n=this.handlers)[t]||(n[t]=[])).push(e),()=>{this.handlers[t]=this.handlers[t].filter(s=>s!==e)}}emit(t,e){if(this.muted)return;let n=this.handlers[t];if(n)for(let s of n)s(e)}step(t){for(this.acc+=Cr(t||0,0,.1);this.acc>=this.dt;)this.acc-=this.dt,this.fixedStep();let e=this.ball,n=this.acc/this.dt;e.view.x=e.ox+(e.x-e.ox)*n,e.view.y=e.oy+(e.y-e.oy)*n,e.view.z=e.oz+(e.z-e.oz)*n}run(t){for(let e=Math.round(t/this.dt);e>0;e--)this.fixedStep()}fixedStep(){this.grid||this.buildGrid();let t=this.ball;for(let r of this.flippers){for(;r.queue.length&&r.queue[0].at<=this.time+1e-9;)r.on=r.queue.shift().on;r.oa=r.a}t.ox=t.x,t.oy=t.y,t.oz=t.z;let e=t.active?Math.hypot(t.vx,t.vy):0;for(let r of this.flippers)e=Math.max(e,r.surfaceSpeed());let n=Math.min(jv,Math.max(1,Math.ceil(e*this.dt/this.maxTravel))),s=this.dt/n;for(let r=0;r<n;r++)this.substep(s,this.time+r*s);this.steps++,this.time=this.steps*this.dt}substep(t,e){for(let f of this.flippers)f.update(t);let n=this.ball;if(!n.active||this.saucers.length&&this.saucer(n,e))return;let s=n.serial,r=this.R,a=n.layer!==0?this.trackOf(n.layer):null,o=this.gy,l=0;if(a){let f=this.locate(a,n.x,n.y),g=-this.gN*f.slope/(1+f.slope*f.slope);l+=g*f.tx,o+=g*f.ty}if(n.vx+=l*t,n.vy+=o*t,(a||n.z<=r+.5)&&this.roll(n,t),n.x+=n.vx*t,n.y+=n.vy*t,this.turn(n,t),this.collide(n,e,a),n.serial!==s||(this.layers(n,t,a),this.sense(n),n.serial!==s||!this.bounds))return;let[c,h,u,d]=this.bounds;(n.x<c||n.x>u||n.y<h||n.y>d)&&(n.remove(),this.emit("drain",{id:"out"}))}roll(t,e){this.floorImpulse(t,this.o.floorFriction*this.gN*e);let n=Math.hypot(t.vx,t.vy);if(n>1e-9){let s=(n-Math.min(n,this.o.rolling*this.gN*e))/n;t.vx*=s,t.vy*=s,t.wx*=s,t.wy*=s}t.wz*=Math.exp(-this.o.spinDecay*e)}floorImpulse(t,e){let n=this.R,s=t.vx-t.wy*n,r=t.vy+t.wx*n,a=Math.hypot(s,r);if(a<=1e-9)return;let o=Math.min(a*2/7,e),l=-o*s/a,c=-o*r/a;t.vx+=l,t.vy+=c,t.wx+=c*2.5/n,t.wy-=l*2.5/n}turn(t,e){let[n,s,r,a]=t.q,o=t.wx*e/2,l=t.wy*e/2,c=t.wz*e/2,h=n+o*a+l*r-c*s,u=s+l*a+c*n-o*r,d=r+c*a+o*s-l*n,f=a-o*n-l*s-c*r,g=Math.hypot(h,u,d,f)||1;t.q[0]=h/g,t.q[1]=u/g,t.q[2]=d/g,t.q[3]=f/g}testCollider(t,e,n,s){let r=t.type==="seg"?iy(t,e,n,s):sy(t,e,n,s);if(t.oneWay){if(!r)return t.solid=(e-t.ax)*t.oneWay[0]+(n-t.ay)*t.oneWay[1]>0,null;if(!t.solid)return null}return r}collide(t,e,n){let s=this.R,r=[];for(let a of this.cellAt(t.x,t.y)){if(!a.enabled||!ey(a,t.layer))continue;let o=this.testCollider(a,t.x,t.y,s);o&&(o.src=a,r.push(o))}if(t.layer===0)for(let a of this.flippers){let o=a.test(t.x,t.y,s);o&&(o.src=a,r.push(o))}if(n){let a=n.wall.test(t.x,t.y,s);a&&(a.src=n.wall,r.push(a))}if(r.length){r.length>1&&r.sort((a,o)=>o.depth-a.depth);for(let a=0;a<r.length;a++){let o=r[a].src,l=a===0?r[0]:o instanceof Sc?o.test(t.x,t.y,s):o.type?this.testCollider(o,t.x,t.y,s):o.test(t.x,t.y,s);if(!l)continue;let c=this.resolve(t,l,o.mat);c<=0||(o.kick&&this.kick(t,o,l,c,e),c>=this.o.hitMin&&this.emit("hit",{id:o.id,kind:o.kind,speed:c,x:l.px,y:l.py,nx:l.nx,ny:l.ny}))}}}resolve(t,e,n){let s=this.R,r=e.nx,a=e.ny;t.x+=r*e.depth,t.y+=a*e.depth;let o=t.vx+t.wz*s*a-(e.svx||0),l=t.vy-t.wz*s*r-(e.svy||0),c=o*r+l*a;if(c>=0)return 0;let h=-c,u=h<Lp?0:n.e/(1+n.falloff*h/Qv),d=e.body,f=1,g=0;d&&(g=(e.px-d.x)*a-(e.py-d.y)*r,d.locked(g)?g=0:f+=this.mass*g*g/d.inertia);let y=(1+u)*h/f;t.vx+=y*r,t.vy+=y*a,g&&d.push(-y*this.mass*g/d.inertia),o-=c*r,l-=c*a;let p=s*(t.wy*r-t.wx*a),m=Math.hypot(o,l,p);if(m>1e-9&&n.f>0){let S=Math.min(m/3.5,n.f*y),w=-S*o/m,v=-S*l/m,M=-S*p/m;t.vx+=w,t.vy+=v,t.wz+=(a*w-r*v)/(.4*s),t.wx-=a*M/(.4*s),t.wy+=r*M/(.4*s),M&&t.z<=s+.5&&this.floorImpulse(t,this.o.floorFriction*1.25*Math.abs(M))}return n.scatter&&h>4*Lp&&this.scatter(t,n.scatter,e.svx||0,e.svy||0),h}scatter(t,e,n=0,s=0){let r=(ty(this)*2-1)*e*xi,a=Math.cos(r),o=Math.sin(r),l=t.vx-n,c=t.vy-s;t.vx=n+l*a-c*o,t.vy=s+l*o+c*a}kick(t,e,n,s,r){if(s<e.minSpeed||r-e.lastKick<e.recycle)return;let a=n.nx,o=n.ny;if(e.normal){if(n.t<.08||n.t>.92||a*e.normal[0]+o*e.normal[1]<.5)return;[a,o]=e.normal}let l=t.vx*a+t.vy*o;l<e.kick&&(t.vx+=(e.kick-l)*a,t.vy+=(e.kick-l)*o),e.mat.scatter&&this.scatter(t,e.mat.scatter),e.lastKick=r,this.emit("kick",{id:e.id,kind:e.kind,speed:Math.hypot(t.vx,t.vy),x:n.px,y:n.py,nx:a,ny:o})}trackOf(t){return this.tracks.find(e=>e.layer===t)||null}locate(t,e,n,s){let r=t.seg,a=s??r.length,o=t.cursor<0||s!==void 0,l=o?0:Math.max(0,t.cursor-6),c=o?a-1:Math.min(a-1,t.cursor+6),h=1/0,u=0;for(let S=l;S<=c;S++){let w=r[S],v=Cr(((e-w.a.x)*w.ex+(n-w.a.y)*w.ey)/w.len2,0,1),M=(e-w.a.x-w.ex*v)**2+(n-w.a.y-w.ey*v)**2;M<h&&(h=M,u=S)}s===void 0&&(t.cursor=u);let d=r[u],f=((e-d.a.x)*d.ex+(n-d.a.y)*d.ey)/d.len2,g=u===0&&f<0||u===r.length-1&&f>1?f:Cr(f,0,1),y=Cr(g,0,1),p=d.a.x+d.ex*y,m=d.a.y+d.ey*y;return{s:d.s+g*d.len,z:d.a.z+(d.b.z-d.a.z)*y,hw:d.a.hw+(d.b.hw-d.a.hw)*y,tx:d.tx,ty:d.ty,slope:d.slope,qx:p,qy:m,d:Math.hypot(e-p,n-m)}}trackWall(t,e,n,s){let r=this.locate(t,e,n),a=r.hw-s;if(r.d<=a||r.d<1e-9)return null;let o=(r.qx-e)/r.d,l=(r.qy-n)/r.d;return{nx:o,ny:l,depth:r.d-a,px:e-o*s,py:n-l*s}}layers(t,e,n){let s=this.R;if(n){let r=this.locate(n,t.x,t.y);if(r.s<n.entry[0]||r.s>n.exit)t.layer=0,r.s>n.exit&&(t.vx*=n.exitDamp,t.vy*=n.exitDamp,t.wx*=n.exitDamp,t.wy*=n.exitDamp),this.emit("exit",{id:n.id,kind:"track",end:r.s>n.exit?"end":"mouth",x:t.x,y:t.y,vx:t.vx,vy:t.vy,speed:t.speed});else{t.vz=(r.z-t.z)/e,t.z=r.z;return}}else if(t.layer===0&&t.z<=s+.5)for(let r of this.tracks){let a=r.entryBox;if(r.entry[1]<=r.entry[0]||t.x<a[0]||t.x>a[2]||t.y<a[1]||t.y>a[3])continue;let o=this.locate(r,t.x,t.y,r.entrySegs);if(o.s>r.entry[0]&&o.s<r.entry[1]&&o.d<o.hw){t.layer=r.layer,r.cursor=-1,t.z=this.locate(r,t.x,t.y).z,this.emit("enter",{id:r.id,kind:"track",x:t.x,y:t.y,vx:t.vx,vy:t.vy,speed:t.speed});return}}(t.z>s||t.vz)&&(t.vz-=this.gN*e,t.z+=t.vz*e,t.z<=s&&(t.z=s,t.vz=t.vz<-300?-.3*t.vz:0))}saucer(t,e){for(let n of this.saucers){if(n.holding)return e<n.releaseAt?(t.vx=t.vy=t.wx=t.wy=t.wz=0,!0):(n.holding=!1,n.armedAt=e+n.rearm,t.z=this.R,t.vx=Math.cos(n.angle)*n.kick,t.vy=Math.sin(n.angle)*n.kick,t.wx=-t.vy/this.R,t.wy=t.vx/this.R,this.emit("kick",{id:n.id,kind:"saucer",speed:n.kick,x:n.x,y:n.y,nx:Math.cos(n.angle),ny:Math.sin(n.angle)}),!1);if(!(!n.enabled||e<n.armedAt||t.layer!==0||t.z>this.R+.5)&&!(Math.hypot(t.x-n.x,t.y-n.y)>n.reach||Math.hypot(t.vx,t.vy)>n.maxSpeed))return n.holding=!0,n.releaseAt=e+n.hold,Object.assign(t,{x:n.x,y:n.y,z:this.R-n.sink,vx:0,vy:0,vz:0,wx:0,wy:0,wz:0}),this.emit("enter",{id:n.id,kind:"saucer",x:n.x,y:n.y,vx:0,vy:0,speed:0}),!0}return!1}get held(){return this.saucers.find(t=>t.holding)||null}sense(t){let e=t.serial;for(let n of this.triggers){let[s,r,a,o]=n.box,l=t.active&&n.enabled&&(n.layer==="*"||n.layer===t.layer)&&t.x>=s&&t.x<=a&&t.y>=r&&t.y<=o&&(n.poly?ny(n.poly,t.x,t.y):(t.x-n.x)**2+(t.y-n.y)**2<n.r*n.r);if(l!==n.inside){if(n.inside=l,this.emit(l?"enter":"exit",{id:n.id,kind:n.kind,x:t.x,y:t.y,vx:t.vx,vy:t.vy,speed:t.speed}),t.serial!==e)return;if(l&&n.drain){t.remove(),this.emit("drain",{id:n.id});return}}}}buildGrid(){let t=this.o.cell,e=this.R+4,n=1/0,s=1/0,r=-1/0,a=-1/0;for(let o of this.colliders)n=Math.min(n,o.box[0]),s=Math.min(s,o.box[1]),r=Math.max(r,o.box[2]),a=Math.max(a,o.box[3]);this.colliders.length||(n=s=0,r=a=t),this.gx0=Math.floor((n-e)/t),this.gy0=Math.floor((s-e)/t),this.gnx=Math.floor((r+e)/t)-this.gx0+1,this.gny=Math.floor((a+e)/t)-this.gy0+1,this.grid=Array.from({length:this.gnx*this.gny},()=>[]);for(let o of this.colliders){let l=Math.floor((o.box[0]-e)/t)-this.gx0,c=Math.floor((o.box[2]+e)/t)-this.gx0,h=Math.floor((o.box[1]-e)/t)-this.gy0,u=Math.floor((o.box[3]+e)/t)-this.gy0;for(let d=l;d<=c;d++)for(let f=h;f<=u;f++)this.grid[f*this.gnx+d].push(o)}}cellAt(t,e){let n=Math.floor(t/this.o.cell)-this.gx0,s=Math.floor(e/this.o.cell)-this.gy0;return n<0||s<0||n>=this.gnx||s>=this.gny?[]:this.grid[s*this.gnx+n]}saveState(){let t=this.ball;return{steps:this.steps,acc:this.acc,seed:this.seed,ball:[t.x,t.y,t.z,t.vx,t.vy,t.vz,t.wx,t.wy,t.wz,t.layer,t.active,t.serial,t.ox,t.oy,t.oz,...t.q],flippers:this.flippers.map(e=>[e.a,e.w,e.oa,e.on,e.queue.map(n=>({...n}))]),colliders:this.colliders.map(e=>[e.enabled,e.lastKick,e.solid]),triggers:this.triggers.map(e=>[e.enabled,e.inside]),tracks:this.tracks.map(e=>e.cursor),saucers:this.saucers.map(e=>[e.holding,e.releaseAt,e.armedAt])}}loadState(t){let e=this.ball;this.steps=t.steps,this.time=t.steps*this.dt,this.acc=t.acc,this.seed=t.seed,[e.x,e.y,e.z,e.vx,e.vy,e.vz,e.wx,e.wy,e.wz,e.layer,e.active,e.serial,e.ox,e.oy,e.oz]=t.ball,e.q=t.ball.slice(15,19),t.flippers.forEach(([n,s,r,a,o],l)=>Object.assign(this.flippers[l],{a:n,w:s,oa:r,on:a,queue:o.map(c=>({...c}))})),t.colliders.forEach(([n,s,r],a)=>Object.assign(this.colliders[a],{enabled:n,lastKick:s,solid:r})),t.triggers.forEach(([n,s],r)=>Object.assign(this.triggers[r],{enabled:n,inside:s})),t.tracks.forEach((n,s)=>{this.tracks[s].cursor=n}),(t.saucers||[]).forEach(([n,s,r],a)=>Object.assign(this.saucers[a],{holding:n,releaseAt:s,armedAt:r}))}aimFlip(t,e,n,{horizon:s=1.2,coarse:r=.008,follow:a=.6,hold:o=.3,reach:l=12,minArrive:c=0}={}){let h=this.flipper(t),u=this.ball;if(!h||!u.active||u.layer!==0||this.held)return null;let d=this.saveState(),f=this.muted;this.muted=!0;let g=this.flippers.indexOf(h),y=Math.max(1,Math.round(r/this.dt)),p=this.flippersFor(t).map(M=>this.flippers.indexOf(M)),m=()=>u.active&&u.layer===0&&!!this.flippers[g].test(u.x,u.y,this.R+l);for(let M of p)this.flippers[M].queue=[],this.flippers[M].on=!1;let S=[];for(let M=0;M*y*this.dt<=s+1e-9&&u.active;M++)m()&&S.push({st:this.saveState(),delay:M*y*this.dt,k:M}),this.run(y*this.dt);let w=(M,x)=>{this.loadState(M);let E=this.flippers[g],_=Math.cos(E.theta),T=Math.sin(E.theta),A={delay:x,miss:Math.hypot(u.x-e,u.y-n),arrive:u.speed,speed:0,angle:0,x:u.x,y:u.y,u:(u.x-E.x)*_+(u.y-E.y)*T};for(let L of p)this.flippers[L].queue=[{at:this.time+o,on:!1}],this.flippers[L].on=!0;let C=!1;for(let L=Math.round(a/this.dt);L>0&&u.active;L--){this.fixedStep();let O=Math.hypot(u.x-e,u.y-n);if(O<A.miss)A.miss=O,A.arrive=u.speed;else if(C&&O>A.miss+40)break;!C&&Math.hypot(u.x-E.x,u.y-E.y)>E.length+E.tipR+this.R+12&&(C=!0,A.speed=u.speed,A.angle=Math.atan2(u.vy,u.vx)/xi)}return A.score=A.miss+Math.max(0,c-A.arrive)*.1,A},v=null;for(let M of S){let x=w(M.st,M.delay);(!v||x.score<v.score)&&(v=x,v.k=M.k)}if(v&&y>1)for(let M of S.filter(x=>x.k===v.k-1||x.k===v.k)){let x=M.st;for(let E=1;E<y&&(this.loadState(x),this.fixedStep(),!!m());E++){x=this.saveState();let _=w(x,M.delay+E*this.dt);_.score<v.score&&(v={..._,k:v.k})}}return this.loadState(d),this.muted=f,v&&(delete v.k,delete v.score),v}};var Wa=Math.PI/180,Ec=1.6,ry=7.13+2.38,ku=4.76+6.35,ay=6.5,oy=30,Hu=[9,21],wc={pop:1400,sling:2200};function zu(i,t,e,n,s,r=3){let a=Math.max(1,Math.ceil(Math.abs(s-n)/r));return Array.from({length:a+1},(o,l)=>{let c=(n+(s-n)*l/a)*Wa;return[i+Math.cos(c)*e,t+Math.sin(c)*e]})}function ly(i,t){return i.map((e,n)=>{let s=i[Math.max(0,n-1)],r=i[Math.min(i.length-1,n+1)],a=r[0]-s[0],o=r[1]-s[1],l=Math.hypot(a,o)||1;return[e[0]-o/l*t,e[1]+a/l*t]})}function Is(i,t,e=0,n={}){let{closed:s,...r}=n,a=s?[...t,t[0]]:t;for(let o=0;o+1<a.length;o++){let[l,c]=a[o],[h,u]=a[o+1];Math.hypot(h-l,u-c)<1e-6||i.addWall(l,c,h,u,{r:e/2,...r})}return r.id??null}function cy(i,t,e,n=4,s={}){return Is(i,ly(t,-e*n),2*n,s)}var Tc=(i,t,e,n)=>[[i-e,t-n],[i+e,t-n],[i+e,t+n],[i-e,t+n]];function hy(i,t){let{ORBIT_GUIDES:e=[],ORBIT_WEDGES:n=[],ORBIT_POSTS:s=[],ORBIT_POST:r={d:11},ORBIT_ROLLOVERS:a=[]}=t;for(let l of e)Is(i,l.line,Ec,{id:"orbit-"+l.side,kind:"guide",mat:"metal"});for(let l of n)Is(i,l.line,Ec,{id:"wedge-"+l.side,kind:"guide",mat:"metal"});return s.forEach(([l,c],h)=>i.addCircle(l,c,r.d/2,{id:"orbit-post"+h,kind:"post",mat:"rubber"})),{rollovers:a.map((l,c)=>i.addTrigger(Tc(l.x,l.y,...Hu),"orbit"+c,{kind:"orbit"}))}}function Np(i){let t=0;return i.map((e,n)=>(n&&(t+=Math.hypot(e[0]-i[n-1][0],e[1]-i[n-1][1])),{p:[e[0],e[1],e[2]],w:e[3],s2:t}))}function Gu(i,t){let e=1;for(;e<i.length-1&&i[e].s2<t;)e++;let n=i[e-1],s=i[e],r=s.s2-n.s2||1,a=(t-n.s2)/r;return{x:n.p[0]+(s.p[0]-n.p[0])*a,y:n.p[1]+(s.p[1]-n.p[1])*a,tx:(s.p[0]-n.p[0])/r,ty:(s.p[1]-n.p[1])/r}}function Fp(i,t,e,n){let s=Gu(i,t-e),r=Gu(i,t+e);return[[s.x-s.ty*n,s.y+s.tx*n],[r.x-r.ty*n,r.y+r.tx*n],[r.x+r.ty*n,r.y-r.tx*n],[s.x+s.ty*n,s.y-s.tx*n]]}function uy(i,t){let e=i.dropRadius,n=i.rail,s=r=>r*r*(3-2*r);for(let r=0;r<=i.spread;r+=.25)if(n+(e-n)*s(r/i.spread)>=t+i.rod-.5)return e+i.spread-r;return e}function dy(i,t,e){let{RAMP:n,WIRE:s,BALL_R:r}=t,a=Np(e.profile),o=Np(e.wire),l=a.at(-1).s2,c=r+2.6,h=40,u=[];for(let x of a){let E=Math.max(0,Math.min(1,(l-x.s2)/h));u.push([x.p[0],x.p[1],x.p[2]+r,c+(x.w/2-c)*E])}for(let x of o.slice(1))u.push([x.p[0],x.p[1],x.p[2]+s.ride,c]);let d=a.filter(x=>x.p[2]<oy),f=d.at(-1).s2,g=x=>d.map((E,_)=>{let T=d[Math.max(0,_-1)].p,A=d[Math.min(d.length-1,_+1)].p,C=Math.hypot(A[0]-T[0],A[1]-T[1])||1,L=x*(E.w/2+n.side/2);return[E.p[0]-(A[1]-T[1])/C*L,E.p[1]+(A[0]-T[0])/C*L]}),[y,p]=[g(1),g(-1)],m=`ramp-${e.id}-wall`;for(let x of[y,p])Is(i,x,n.side,{id:m,kind:"ramp",mat:"ramp",layer:"*"});i.addWall(...y.at(-1),...p.at(-1),{r:n.floor/2,id:m,kind:"ramp",mat:"ramp"});let S=0;for(let x=1;x<u.length;x++)S+=Math.hypot(u[x][0]-u[x-1][0],u[x][1]-u[x-1][1]);i.addTrack(u,{id:e.id,layer:e.id,mat:"ramp",entry:[0,f-4],exit:S-uy(s,r),exitDamp:.4});for(let[x,E]of[...e.supports,...e.wireSupports])i.addCircle(x,E,ay,{kind:"post",mat:"plastic"});let w=`ramp-${e.id}-mouth`,v=`ramp-${e.id}-made`;i.addTrigger(Fp(a,2,10,n.mouth/2),w,{kind:"mouth",layer:"*"}),i.addTrigger(Fp(a,l*(e.switchAt??.82),10,n.width/2+4),v,{kind:"ramp",layer:e.id});let M=Gu(a,0);return{id:e.id,side:e.side,layer:e.id,mouth:w,made:v,at:[M.x,M.y],heading:Math.atan2(M.ty,M.tx)/Wa}}function Op(i,t){let{PF:e,BALL_R:n,FLIPPERS:s,SLINGS:r,APRON:a,SHOOTER:o,ARCH:l,INLANE_GUIDES:c,STAR_POSTS:h,GATE:u,TOP_LANES:d,POPS:f,POP:g,RAMPS:y,RETURN_LANES:p,TARGETS:m,TARGET_GUIDES:S,TARGET_RUBBER:w,SAUCER:v}=t,M={};i.bounds=[-20,-80,e.w+20,e.l+20];let x=[[e.rail,-10],[e.rail,l.left.cy],...zu(l.left.cx,l.left.cy,l.left.r,180,90).slice(1),...zu(l.right.cx,l.right.cy,l.right.r,90,0),[o.laneRight,90]];cy(i,x,-1,4,{id:"rail",kind:"rail",mat:"metal"});let E=o.dividerFace??o.laneLeft-Ec,_=o.laneLeft-E;i.addWall(o.laneLeft-.65,90,o.laneLeft-.65,o.apronTop,{r:.65,id:"divider",kind:"rail",mat:"metal"}),i.addWall(E+_/2,o.apronTop,E+_/2,o.dividerTop,{r:_/2,id:"divider",kind:"rail",mat:"metal"});let T=o.ballRest[1]-n;i.addWall(o.laneLeft,T-3,o.laneRight,T-3,{r:3,id:"plunger",kind:"plunger",e:.3,f:.3});let[A,C]=u.from,[L,O]=u.to,I=Math.hypot(L-A,O-C),F=[(L-A)/I,(O-C)/I],k=[-F[1],F[0]];i.addWall(A,C,L,O,{r:1,oneWay:k,id:"gate",kind:"gate",mat:"metal"});let G=(ht,V,Q)=>[ht[0]+k[0]*V*6+F[0]*Q*4,ht[1]+k[1]*V*6+F[1]*Q*4];i.addTrigger([G(u.from,-1,-1),G(u.to,-1,1),G(u.to,1,1),G(u.from,1,-1)],"gate",{kind:"gate"}),i.addTrigger(Tc((o.laneLeft+o.laneRight)/2,o.ballRest[1]+10,(o.laneRight-o.laneLeft)/2,30),"shooter",{kind:"shooter"}),Object.assign(M,{gate:"gate",shooter:"shooter",plunger:{id:"plunger",rest:[...o.ballRest]}});for(let ht of[[a.leftShoulder,a.lipLeft],[a.lipRight,a.rightShoulder]])Is(i,ht,1.3,{id:"apron",kind:"apron",mat:"metal"});let st=Math.atan2(a.lipEndY-a.lipCy,a.lipRight[0]-e.cx)/Wa,W=Math.atan2(a.lipEndY-a.lipCy,a.lipLeft[0]-e.cx)/Wa,et=zu(e.cx,a.lipCy,a.lipR,st,W,4).map(([ht,V])=>[ht,V-n]);M.drain=i.addTrigger([[e.rail,-60],[o.laneLeft,-60],[o.laneLeft,a.lipEndY-n],...et,[e.rail,a.lipEndY-n]],"drain",{drain:!0});for(let ht of c)Is(i,ht.plate.outline,0,{id:"inlane-"+ht.side,kind:"guide",mat:"plastic",closed:!0});for(let[ht,V]of h)i.addCircle(ht,V,ry,{kind:"post",mat:"rubber"});M.orbits=hy(i,t).rollovers,M.slings={};for(let ht of r){let[V,Q,gt]=ht.posts,Dt="sling-"+ht.side;i.addKicker(...V,...Q,{r:ku,away:gt,id:Dt,kind:"sling",mat:"sling",kick:wc.sling,minSpeed:120}),i.addWall(...Q,...gt,{r:ku,id:Dt+"-rubber",kind:"rubber",mat:"sling"}),i.addWall(...gt,...V,{r:ku,id:Dt+"-rubber",kind:"rubber",mat:"sling"}),M.slings[ht.side]=Dt}M.flippers={};for(let ht of s)M.flippers[ht.id]=i.addFlipper({id:ht.id,side:ht.side,x:ht.x,y:ht.y,rest:ht.rest,up:ht.up,baseR:ht.baseR,tipR:ht.tipR,length:ht.length});for(let ht of d.rubbers)i.addWall(...ht.posts[0],...ht.posts[1],{r:ht.postR+ht.cord,kind:"rubber",mat:"band"});M.lanes=d.lanes.map((ht,V)=>i.addTrigger(Tc(ht.x,ht.y,...Hu),"lane"+V,{kind:"rollover"})),M.returns=p.map((ht,V)=>i.addTrigger(Tc(ht.x,ht.y,...Hu),"return"+V,{kind:ht.kind})),M.saucer=i.addSaucer(v.x,v.y,{id:"saucer",reach:v.reach,maxSpeed:v.maxSpeed,hold:v.hold,kick:v.kick,angle:v.kickAngle}),M.pops=f.map((ht,V)=>i.addCircle(ht.x,ht.y,g.reach-n,{id:"pop"+V,kind:"pop",mat:"pop",kick:wc.pop,minSpeed:50,recycle:.03}));let nt=m,It=nt.depth/2;M.targets=nt.list.map((ht,V)=>i.addWall(ht.x-nt.width/2+It,ht.y,ht.x+nt.width/2-It,ht.y,{r:It,id:"target"+V,kind:"target",mat:"drop"}));let wt=w.posts;wt.forEach((ht,V)=>{let Q=wt[(V+1)%wt.length],gt=Math.max(9,w.grooves[V]+w.cord);i.addWall(...ht,...Q,{r:gt,id:"target-rubber",kind:"rubber",mat:"band"})});for(let ht of S)Is(i,ht.line,Ec,{id:"target-guide-"+ht.side,kind:"guide",mat:"metal"});M.ramps=y.map(ht=>dy(i,t,ht));let Yt=nt.list[1],qt=ht=>{let V=t.ORBIT_POSTS[ht],Q=t.ORBIT_WEDGES[ht].line,gt=t.INSERTS.find(ee=>ee.id===["left_orbit_arrow","right_orbit_arrow"][ht]),Dt=Q.reduce((ee,it)=>Math.hypot(it[0]-V[0],it[1]-V[1])<Math.hypot(ee[0]-V[0],ee[1]-V[1])?it:ee),Rt=gt.angle*Wa,Gt=[(V[0]+Dt[0])/2,(V[1]+Dt[1])/2];return[Gt[0]-Math.sin(Rt)*90,Gt[1]+Math.cos(Rt)*90]};return M.aim={...Object.fromEntries(M.ramps.map(ht=>[ht.id,ht.at])),targets:[Yt.x,Yt.y-It-n-2],saucer:[v.x,v.y],"orbit-left":qt(0),"orbit-right":qt(1)},M}var Bp=Math.PI/180,fy=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),kp=44.45,zp=99,Ls={soft:1300,full:2600},py={hero:"play",deadbounce:"ramp-deadbounce",tiptop:"ramp-tiptop",about:"pops",skills:"hold",experience:"hold",contact:"hold"},Hp=["ramp-deadbounce","orbit-left","ramp-tiptop","orbit-right"],Ac=class{constructor(t,{reduced:e}){this.h=t,this.reduced=e,this.time=0,this.power=0,this.skillsLit=[0,0,0,0],this.skillFocus=-1,this.rung=-1,this.explodedPop=0,this.station=null,this.play="play",this.exploded=0;for(let n of t.rollovers)n.pos=Ee(n.x,n.y,mn);t.shooterBall.visible=!1,t.ball.material=t.ball.material.clone(),this.physics=new bc({seed:7}),this.ids=Op(this.physics,vu),this.popColliders=this.physics.colliders.filter(n=>n.kind==="pop"),this.events(),this.auto={state:"serve",at:0,side:null,still:0,shotUntil:0,next:0,user:-1e9,cache:new Map},t.plunger.releasedAt=-1,this.serveAt=.2,this.plungeSpeed=Ls.full,this.aim=new U,e&&this.settleForStill()}settleForStill(){let t=this.physics,e=Sn.find(n=>n.id==="left");t.setFlipper("left",!0),t.ball.place(e.x+20,e.y+70,0,-200),t.run(2.5),this.auto.state="still"}events(){let t=this.physics;t.on("kick",e=>{e.kind==="pop"?this.firePop(+String(e.id).slice(3),Ee(e.x,e.y)):e.kind==="sling"?this.kickSling(String(e.id).replace("sling-","")):e.kind==="saucer"&&this.kickSaucer()}),t.on("hit",e=>{e.kind==="target"&&this.hitTarget(+String(e.id).slice(6),e.speed)}),t.on("enter",e=>{let n=String(e.id);if(/^(lane|return)\d$/.test(n))this.flash(As(n),.8);else if(/^orbit\d$/.test(n))this.flash(As(n),1.4);else if(n==="saucer")this.flash("saucer_arrow",1.6),this.saucerAt=this.time;else if(n==="gate")this.swingGate();else if(n.endsWith("-made")){let s=ns.find(r=>n===`ramp-${r.id}-made`);s&&this.flash(`${s.side}_ramp_arrow`,1.4)}}),t.on("drain",()=>{this.auto.state="serve",this.serveAt=this.time+.9;for(let e of Sn)t.setFlipper(e.side,!1)})}setStation(t){t!==this.station&&(this.station=t,this.play=py[t]||this.play,this.play==="pops"&&this.auto.state==="cradled"&&this.letGo())}flip(t,e=.16){let n=this.physics;this.auto.user=this.time,n.setFlipper(t,!0),n.setFlipper(t,!1,e)}hold(t,e){this.auto.user=this.time,this.physics.setFlipper(t,e)}shoot(){return this.auto.state!=="cradled"?!1:(this.auto.forceShot=!0,!0)}firePop(t,e){let n=this.h.pops[t];if(!n)return;n.fired=this.time;let s=n.group.position,r=this.time*7.3,a=e?e.x-s.x:Math.cos(r),o=e?e.z-s.z:Math.sin(r);n.axis.set(o,0,-a).normalize()}kickSling(t){let e=this.h.slings.find(n=>n.side===t);e&&(e.kicked=this.time)}flash(t,e=1){let n=this.h.inserts.get(t);n&&(n.flash=Math.max(n.flash,e))}swingGate(){let t=this.h.gate;t.open=Math.max(t.open,1.25),t.velocity=0}hitTarget(t,e=1500){let n=this.h.targets[t];if(!n)return;n.hit=this.time,n.kick=Math.min(1,.35+e/2500);let s=this.h.inserts.get(Jn.list[t].insert);s&&(s.flash=Math.max(s.flash,1.3))}kickSaucer(){this.h.saucer&&(this.h.saucer.kicked=this.time),this.flash("saucer_arrow",1)}pressStart(){this.startAt=this.time;let t=this.h.plunger;this.auto.state==="shooter"&&!t.pulling&&t.releasedAt<0&&(t.pull=.7,t.pulling=!0,this.release(Ls.full))}pull(){let t=this.h.plunger;t.pulling=!0,t.releasedAt=-1,this.auto.user=this.time}release(t){let e=this.h.plunger;e.pulling&&(e.pulling=!1,e.releasedAt=this.time,e.from=e.pull,e.limit=1,this.plungeSpeed=t??Ls.soft+(Ls.full-Ls.soft)*e.from)}near(t){let e=this.physics.ball,n=Sn.find(r=>r.id===t);return!e.active||e.layer!==0?!1:(t==="left"?e.x<vt.cx+8:e.x>vt.cx-8)&&e.y<n.y+95&&Math.hypot(e.x-n.x,e.y-n.y)<n.length+70}letGo(){for(let t of Sn)this.physics.setFlipper(t.side,!1);this.auto.state="play",this.auto.side=null}shotFor(t,e){let n=t+":"+e;if(this.auto.cache.has(n))return this.auto.cache.get(n);let s=this.ids.aim[e.replace(/^ramp-/,"")];if(e==="pass"){let a=Sn.find(o=>o.id===(t==="left"?"right":"left"));s=[a.x+(t==="left"?14:-14),a.y+150]}let r=s?this.physics.aimFlip(t,s[0],s[1],{minArrive:e.startsWith("ramp")?2e3:0}):null;return this.auto.cache.set(n,r),r}autopilot(t){let e=this.physics,n=e.ball,s=this.auto,r=this.time;if(s.state==="still"||r-s.user<4)return;if(s.state==="serve"){if(r<this.serveAt)return;s.state="serving",s.at=r;return}if(s.state==="serving"){if(r-s.at<.38)return;e.ball.place(re.ballRest[0],re.ballRest[1],0,0),s.state="shooter",s.at=r;return}if(s.state==="shooter"){let o=this.h.plunger;!o.pulling&&o.releasedAt<0&&r-s.at>.8&&(this.pull(),s.user=-1e9,o.limit=this.play==="pops"?.25:1),o.pulling&&o.pull>=o.limit-.001&&r-s.at>1.4&&(this.release(this.play==="pops"?Ls.soft:Ls.full),s.user=-1e9);return}if(!n.active||e.held)return;let a=n.speed<30;for(let o of["left","right"]){let l=this.near(o);s.state==="play"&&l&&this.play!=="pops"&&r>s.shotUntil&&n.vy<40&&(e.setFlipper(o,!0),s.state="catching",s.side=o,s.at=r)}if(s.state==="catching"){if(!this.near(s.side)){r-s.at>.4&&this.letGo();return}s.still=a?s.still+t:0,s.still>.25?(s.state="cradled",s.at=r):r-s.at>2.5&&this.letGo();return}if(s.state==="cradled"){if(!this.near(s.side)){this.letGo();return}if(this.play==="pops"){this.letGo();return}let o=s.forceShot?0:this.play==="hold"?1/0:.7;if(r-s.at<o)return;s.forceShot=!1;let l=this.play;(l==="play"||l==="hold")&&(l=Hp[s.next%Hp.length],s.next++);let c=this.shotFor(s.side,l);if((!c||c.miss>14)&&(l="pass",c=this.shotFor(s.side,"pass")),!c){this.letGo();return}e.setFlipper(s.side,!1),e.setFlipper(s.side,!0,c.delay),e.setFlipper(s.side,!1,c.delay+.25),s.shotUntil=r+c.delay+.5,s.state="play",s.side=null}}update(t,e){this.time+=t;let n=this.time,s=this.h,r=this.power,a=this.physics,o=this.popColliders[this.explodedPop];o&&(o.kick=this.exploded>.05?0:wc.pop),this.reduced||(this.autopilot(t),a.step(t));for(let h of s.flippers)h.pivot.rotation.y=a.flipperAngle(h.id)*Bp;for(let h of s.pops){let u=h.fired<0?9:n-h.fired,d=u<.004?0:u<.014?((u-.004)/.01)**2:u<.03?1:u<.075?.5+.5*Math.cos(Math.PI*(u-.03)/.045):0;h.ring.position.y=(Er.ringRest-Er.ringTravel*(this.reduced?0:d))*D;let f=u<.006?u/.006:Math.max(0,1-(u-.006)/.035);h.skirt.quaternion.setFromAxisAngle(h.axis,this.reduced?0:f*2.5*Bp);let g=u<.5?Math.exp(-u/.07):0;h.capMat.emissiveIntensity=(.22+2.6*g)*r*h.capMat.userData.gain,h.bodyMat.emissiveIntensity=(.06+1.4*g)*r*h.bodyMat.userData.gain}for(let h of s.slings){let u=h.kicked<0?9:n-h.kicked,d=0;u<.008?d=Math.sin(u/.008*(Math.PI/2)):u<.025?d=1:u<.065&&(d=.5+.5*Math.cos(Math.PI*(u-.025)/.04));let f=u>=.065&&u<.35?-.16*Math.sin((u-.065)*Math.PI*2*22)*Math.exp(-(u-.065)*14):0;this.reduced&&(d=0),h.arm.position.copy(h.rest).addScaledVector(h.push,d);let g=this.reduced?0:d+f;(Math.abs(g-h.shown)>.015||g===0&&h.shown!==0)&&(h.rubber.geometry.dispose(),h.rubber.geometry=h.rubberGeo(g*9),h.shown=g)}for(let h of s.targets){let u=h.hit<0?9:n-h.hit,d=0;u<.004?d=u/.004:u<.09&&(d=Math.cos((u-.004)/.086*Math.PI*1.5)*Math.exp(-(u-.004)*30)),h.holder.position.copy(h.rest).addScaledVector(h.back,this.reduced?0:2*(h.kick||1)*d)}if(s.saucer){let h=s.saucer,u=h.kicked<0?9:n-h.kicked,d=u<.008?u/.008:u<.06?1-(u-.008)/.052:0;h.finger.position.copy(h.rest).addScaledVector(h.out,this.reduced?0:6*D*d)}this.updateShooter(t),this.updateBall(),this.updateRollovers(t),this.updateInserts(t,e),s.backglass.material.color.setScalar(r*(s.backglass.lcd.showing==="art"?.92+.08*Math.sin(n*1.3):.94));for(let h of s.gi)h.intensity=h.userData.base*r;for(let h of s.bulbs)h.emissiveIntensity=2.2*r*h.userData.gain;let l=this.startAt===void 0?9:n-this.startAt,c=this.auto.state==="shooter"&&Math.sin(n*5)>0;s.startButton.material.emissiveIntensity=(.3+(c?.5:0)+3*Math.exp(-l*5))*r*(s.startButton.material.userData.gain||1)}updateBall(){let t=this.physics.ball,e=this.h.ball,n=this.auto;if(n.state==="serving"){let r=fy((this.time-n.at)/.38),a=1-(1-r)**2;e.visible=!0,e.position.copy(Ee(re.laneLeft-24+(re.ballRest[0]-re.laneLeft+24)*a,re.ballRest[1]+4*(1-a),mn));return}if(e.visible=t.active,!t.active)return;let s=n.state==="shooter"&&this.h.plunger.shown||0;e.position.copy(Ee(t.view.x,t.view.y-s,t.view.z)),e.quaternion.set(t.q[0],t.q[2],-t.q[1],t.q[3])}updateShooter(t){let e=this.h,n=e.plunger,s=this.time,r=this.auto,a=0;if(n.pulling)n.pull=Math.min(n.limit??1,n.pull+t/.5),a=n.pull*kp;else if(n.releasedAt>=0){let l=s-n.releasedAt,c=Math.PI/2/zp;if(l<c)a=n.from*kp*Math.cos(zp*l);else{r.state==="shooter"&&(this.physics.ball.place(re.ballRest[0],re.ballRest[1]+1,0,this.plungeSpeed),r.state="play");let h=(l-c)/.12;a=h<1?-5*n.from*Math.sin(Math.PI*h):0,h>=1&&(n.releasedAt=-1,n.pull=0)}}this.reduced&&(a=0),n.shown=Math.max(0,a),n.group.position.copy(n.rest),n.group.position.z+=a*D,n.spring.scale.z=(n.springLen-a)/n.springLen;let o=e.gate;o.velocity+=(-Math.sin(o.open)*820-o.velocity*6)*t,o.open+=o.velocity*t,o.open<0&&(o.open=0,o.velocity=Math.abs(o.velocity)>.5?-o.velocity*.3:0),o.flap.rotation.x=this.reduced?0:o.open}updateRollovers(t){let e=[this.h.ball];for(let n of this.h.rollovers){let s=!1;for(let r of e)r.visible&&Math.abs(r.position.x-n.pos.x)<9*D&&Math.abs(r.position.z-n.pos.z)<21*D&&r.position.y<20*D&&(s=!0);s&&!n.on&&this.flash(n.insert,.8),n.on=s,n.press=s?Math.min(1,n.press+t/.01):Math.max(0,n.press-t/.03),n.wire.scale.y=1-.75*n.press}}updateInserts(t,e){let n=this.time,s=this.power,r=this.station,a=.05;for(let[o,l]of this.h.inserts){let c=a;switch(l.group){case"years":{if(r==="experience")c=l.index<this.rung?.85:l.index===this.rung?Math.floor(n*5)%2?1.15:.7:.08;else{let h=Math.floor(n*3)%7;c=h===l.index||h===5?.85:.12}break}case"skills":{r==="skills"?c=this.skillsLit[l.index]>.5?l.index===this.skillFocus?.78+.1*Math.sin(n*5):.6:.06:c=(Math.floor(n*1.5)+l.index)%4===0?.75:.14;break}case"ramp0":c=r==="deadbounce"?Math.floor(n*4)%2?1.2:.3:.2;break;case"ramp1":c=r==="tiptop"?Math.floor(n*4)%2?1.2:.3:.2;break;case"ladder":c=Math.floor(n*2.5)%4===l.index?.9:.12;break;case"targets":c=.14;break;case"saucer":c=this.physics.held?Math.floor(n*8)%2?1.2:.4:r==="about"?.6:.25;break;case"again":c=r==="contact"?Math.floor(n*2.5)%2?1.2:.35:.1;break;case"orbit":c=.1;break}l.flash=Math.max(0,l.flash-t*3),l.level+=(c-l.level)*(1-Math.exp(-t*18)),l.mat.emissiveIntensity=(l.level+l.flash*1.1)*s*l.mat.userData.gain,l.side.emissiveIntensity=l.mat.emissiveIntensity}}setSkills(t){this.skillsLit.forEach((e,n)=>{let s=t>.12+n*.2?1:0;s&&!e&&this.flash(pi[n].insert,.6),this.skillsLit[n]=s})}setTimeline(t){this.rung=Math.min(4,Math.floor(t*5.2))}};var Xa="http://www.w3.org/2000/svg",Rc=class{constructor(t,e,n){this.svg=t,this.links=[],e.forEach((s,r)=>{for(let a of s.querySelectorAll("[data-anchor]")){let[o,l,c]=a.dataset.anchor.split(",").map(Number),h=document.createElementNS(Xa,"g");h.setAttribute("class","hud-link");let u=document.createElementNS(Xa,"path");u.setAttribute("pathLength","1"),u.setAttribute("class","hud-line");let d=document.createElementNS(Xa,"circle");d.setAttribute("r","9"),d.setAttribute("class","hud-ring");let f=document.createElementNS(Xa,"circle");f.setAttribute("r","3"),f.setAttribute("class","hud-dot");let g=document.createElementNS(Xa,"circle");g.setAttribute("r","2"),g.setAttribute("class","hud-tick"),h.append(u,d,f,g),t.append(h),this.links.push({index:r,el:a,world:n(o,l,c),g:h,path:u,ring:d,dot:f,tick:g,primary:!a.closest("li"),shown:-1,d:""})}}),this.p=null}update(t,e,n,s,r){let a=r.layout,o=a==="tall",l=a==="side";for(let c of this.links){let h=s[c.index]||0;if(!c.primary&&(a!=="wide"||!c.el.classList.contains("current"))&&(h=0),h<.01){c.shown!==0&&(c.g.style.display="none",c.shown=0);continue}let u=c.world.clone().project(t),d=c.el.getBoundingClientRect();if(u.z>1||d.height===0){c.g.style.display="none",c.shown=0;continue}c.shown===0&&(c.g.style.display="");let f=(u.x+1)/2*e,g=(1-u.y)/2*n;if(!(!(o||l)||f>24&&g>r.header+24&&(o?f<e-24&&g<r.panelTop-40:f<r.panelLeft-40&&g<n-24))){c.shown!==0&&(c.g.style.display="none",c.shown=0);continue}let p=l||d.left>f,m=l?r.panelLeft-14:p?d.left-14:d.right+14,S=l?Math.min(n-24,Math.max(r.header+24,d.top+Math.min(d.height/2,16))):d.top+Math.min(d.height/2,16),w=p?m-36:m+36,v=r.panelTop-14,M=o?`M${f.toFixed(1)},${g.toFixed(1)}L${f.toFixed(1)},${v.toFixed(1)}`:`M${f.toFixed(1)},${g.toFixed(1)}L${w.toFixed(1)},${S.toFixed(1)}L${m.toFixed(1)},${S.toFixed(1)}`;M!==c.d&&(c.path.setAttribute("d",M),c.d=M);let x=o?[f,v]:[m,S];if(c.ring.setAttribute("cx",f.toFixed(1)),c.ring.setAttribute("cy",g.toFixed(1)),c.dot.setAttribute("cx",f.toFixed(1)),c.dot.setAttribute("cy",g.toFixed(1)),c.tick.setAttribute("cx",x[0].toFixed(1)),c.tick.setAttribute("cy",x[1].toFixed(1)),Math.abs(h-c.shown)>.003){let E=h*h*(3-2*h);c.path.style.strokeDashoffset=(1-E).toFixed(3),c.ring.style.transform=`scale(${E.toFixed(3)})`,c.ring.style.transformOrigin=`${f.toFixed(1)}px ${g.toFixed(1)}px`,c.g.style.opacity=Math.min(1,h*1.6).toFixed(3),c.shown=h}else c.ring.style.transformOrigin=`${f.toFixed(1)}px ${g.toFixed(1)}px`;c.g.classList.toggle("lit",c.el.classList.contains("lit")||c.primary)}}};var Vu=i=>i*i*(3-2*i),Wu=i=>Math.min(1,Math.max(0,i)),Cc=class{constructor(t,e){this.pop=t;let n=t.group;n.updateMatrixWorld(!0);let s=new Fn;this.parts=t.parts.map((l,c)=>{s.setFromObject(l);let h=n.worldToLocal(s.getCenter(new U)),u=s.getSize(new U);return{holder:l,k:c,lift:l.userData.lift,label:l.userData.label,mid:h,reach:Math.max(u.x,u.z)/2}});let r=this.parts.length,a=this.parts[r-1],o=new Me().setFromPoints([new U(0,-8*D,0),new U(0,a.mid.y+(a.lift+18)*D,0)]);this.axis=new Jr(o,new ua({color:7245055,dashSize:7*D,gapSize:2*D,transparent:!0,opacity:0,depthWrite:!1})),this.axis.computeLineDistances(),this.axis.visible=!1,n.add(this.axis),this.el=document.createElement("div"),this.el.className="cad",this.el.setAttribute("aria-hidden","true");for(let l of this.parts){l.tag=document.createElement("span"),l.tag.className="cad-tag";let c=document.createElement("i");c.textContent=String(l.k+1).padStart(2,"0"),l.tag.append(c,document.createTextNode(l.label)),this.el.append(l.tag)}e.append(this.el),this.shown=-1,this.v=new U}amountFor(t,e){let n=this.parts.length,s=.06;return Vu(Wu(e*(1+s*(n-1))-(n-1-t.k)*s))}update(t,e,n,s,r){if(t<.001&&this.shown===0)return;for(let l of this.parts)l.holder.position.y=l.lift*this.amountFor(l,t)*D;let a=r==="tall"?0:Vu(Wu((t-.2)/.35));if(this.axis.visible=t>.01,this.axis.material.opacity=.85*Vu(Wu(t/.3)),this.el.style.opacity=a.toFixed(3),this.el.classList.toggle("left",r!=="left"),this.shown=t<.001?0:t,a<.01)return;let o=r!=="left"?-1:1;for(let l of this.parts){let c=l.lift*this.amountFor(l,t);this.v.set(o*(l.reach+14*D),l.mid.y+c*D,0).applyMatrix4(this.pop.group.matrixWorld).project(e);let h=(this.v.x+1)/2*n,u=(1-this.v.y)/2*s;l.tag.style.transform=`translate(${h.toFixed(1)}px, ${u.toFixed(1)}px)`}}};var Dn=document.documentElement,gn=matchMedia("(prefers-reduced-motion: reduce)").matches,Gp=matchMedia("(hover: hover) and (pointer: fine)").matches,Ln=(i,t=document)=>t.querySelector(i),Ds=(i,t=document)=>[...t.querySelectorAll(i)],Di=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),qa=i=>i*i*(3-2*i),my=Math.PI/180,Xu={"ramp-deadbounce":{label:"Read the Deadbounce case study",href:"/work/deadbounce.html"},"ramp-tiptop":{label:"Read the Tip Top case study",href:"/work/tip-top-pinball.html"},"pop-0":{label:"Fire the pop bumper"},"pop-1":{label:"Fire the pop bumper"},"pop-2":{label:"Fire the pop bumper"},"target-0":{label:"Hit the target"},"target-1":{label:"Hit the target"},"target-2":{label:"Hit the target"},"sling-left":{label:"Kick the slingshot"},"sling-right":{label:"Kick the slingshot"},"flip-left":{label:"Flip"},"flip-right":{label:"Flip"},plunger:{label:"Launch a ball back to the top"},dmd:{label:"Next display scene"},portrait:{label:"Fire the pops"}},Vp={hero:{az:-18,el:5,fit:[.84,1.02],side:"left",fov:30},deadbounce:{glass:[-.05,-.25],az:-18,el:18,fit:[.7,.96],side:"right",lift:6,sharp:1,tall:{glass:[0,-.03],az:-12,el:8,fit:[.64,.5]}},tiptop:{glass:[.05,-.25],az:18,el:18,fit:[.7,.96],side:"left",lift:6,sharp:1,tall:{glass:[0,-.03],az:12,el:8,fit:[.64,.5]}},about:{at:[236,935,350],az:14,el:13,fit:[.62,.92],fov:22,side:"right",lift:10,sharp:1,tall:{at:[236,960,400],fit:[.56,.74]}},skills:{at:[237,384,0],az:0,el:50,fit:[.47,.13],side:"left",lift:6},experience:{at:[235,988,8],az:-4,el:52,fit:[.38,.17],side:"right",lift:12},contact:{at:[237,165,22],az:-8,el:47,fit:[.27,.17],side:"left",lift:8}},Us={stops:[.1,.3,.5,.7].map(i=>[i,i+.1]),inserts:[[26,386],[69.4,386],[404.95,386],[448.35,386]],close:{el:58,fit:[.13,.07],side:"left",fov:30},swing:7};function gy(i){let t=Us.stops,e=t.length-1,n=qa(Di(i/t[0][0]))*(1-qa(Di((i-t[e][1])/(1-t[e][1])))),s=0,r=0;for(let a=0;a<e;a++){let o=Di((i-t[a][1])/(t[a+1][0]-t[a][1]));o>0&&(s=a+qa(o),r=Math.sin(Math.PI*o))}return{k:s,zoom:n,cross:r}}var Wp={deadbounce:{url:"/assets/img/deadbounce-origin.jpg",focus:[.5,.5],action:"ramp-deadbounce"},tiptop:{url:"/assets/img/tiptop.jpg",focus:[.5,0],action:"ramp-tiptop"},about:{url:"/assets/img/dylan.jpg",card:!0,action:"portrait"}};async function xy(){if(!Dn.classList.contains("machine"))return;document.readyState==="loading"&&await new Promise(Z=>addEventListener("DOMContentLoaded",Z,{once:!0}));let i=Ln("[data-stage]"),t=Ds("[data-station]");if(!i||!t.length)throw new Error("No stage on this page");let e=Pp();await ap(),performance.mark("machine:fonts");let n={playfield:lp(e.playfieldScale),backglass:hp(e.low?1320:2048),cabinetSide:fp(2048,768,{frontBottom:(on.top-on.bottom)/(on.top-on.bottom+(on.front-on.back)*Math.tan(6.5*my))}),plastics:br.map(Z=>xp(Z)),inlane:Tr.map(Z=>({plate:wu(Z.plate.outline),cover:wu(Z.cover.outline,{mark:!0})})),apron:pp(e.low?1024:2048),popDecal:gp(256),cards:{instructions:Eu("instructions",625),free:Eu("free",625)},target:mp(160)},s=document.createElement("canvas"),r=Ln("[data-dmd-label]"),a=Ln("[data-dmd-count]"),o=new window.DMD(s,{reduced:gn,width:e.low?640:896,onScene:(Z,at,N)=>{r&&(r.textContent=Z),a&&N>1&&(a.textContent=`${at} / ${N}`)}});performance.mark("machine:art");let l=Cp(i,e),c=np(l.envMap),h=Math.min(e.anisotropy,l.renderer.capabilities.getMaxAnisotropy()),u=Sp({M:c,art:n,dmdCanvas:s,anisotropy:h,maxAnisotropy:l.renderer.capabilities.getMaxAnisotropy()});performance.mark("machine:built"),l.scene.add(u.root),l.ao&&l.ao.setSceneClipBox(new Fn().setFromObject(u.root).expandByScalar(.03)),o.onPaint=()=>{u.dmd.texture.needsUpdate=!0};let d=new Ac(u,{reduced:gn}),f=(Z,at,N=0)=>u.toWorld(Z,at,N);u.backbox.updateMatrixWorld(!0);let g=u.backbox.localToWorld(new U(0,(rs.dmdY-rs.dmdH/2+rs.glassY+rs.glassH)/2,0)),y=([Z,at])=>u.backbox.localToWorld(new U(Z,rs.glassY+rs.glassH/2+at,0)),p=Z=>{let at=Vp[Z],N=lt=>lt.at?f(...lt.at):lt.glass?y(lt.glass):g;return{...at,target:N(at),...at.tall&&{tall:{...at.tall,target:N({...at,...at.tall})}}}},m=t.map(Z=>Z.dataset.station),S=new Mc(l.camera);S.setPoses(m.map(p));let w={target:f(237,470,60),az:-34,el:15,fit:[1.5,1.6],side:"center",fov:30},v=Us.inserts.map(([Z,at])=>({...Us.close,target:f(Z,at+6,0),az:Z<237?Us.swing:-Us.swing})),M=-1,x=u.backglass.lcd;for(let[Z,at]of Object.entries(Wp)){let N=new Image;N.decoding="async",N.src=at.url,N.decode().then(()=>x.add(Z,at.card?dp(N,1600):up(N,e.low?1280:1600,at.focus),at.action)).catch(()=>{})}let E=new Rc(Ln("[data-hud]"),t,f),_=m.indexOf("about"),T=_>=0?new Cc(u.pops[d.explodedPop],document.body):null,A=Z=>{let at=S.holds[_]*1.6,N=Di((Z-(S.anchors[_]-at/2))/at);return N<.5?qa(Di(N/.36)):qa(Di((1-N)/.36))},C=null;!gn&&window.Lenis&&(C=new window.Lenis({lerp:.085,wheelMultiplier:.9}));let L=()=>C?C.animatedScroll:window.scrollY,O=(Z,at={})=>{C?C.scrollTo(Z,{duration:at.duration||1.6,easing:N=>1-Math.pow(1-N,4)}):window.scrollTo({top:Z,behavior:"auto"})},I=Z=>{let at=Ln("#"+Z);if(!at)return-1;let N=at.closest("[data-station]")||at.querySelector("[data-station]");return t.indexOf(N)};for(let Z of Ds('a[href^="#"]'))Z.hasAttribute("data-launch")||Z.addEventListener("click",at=>{let N=Z.getAttribute("href").slice(1),lt=N==="main"||N==="top"?0:I(N);if(lt<0)return;at.preventDefault(),O(S.anchors[lt],{duration:1.8}),history.replaceState(null,"","#"+N);let $=t[lt].querySelector("h1, h2, h3");$&&($.setAttribute("tabindex","-1"),$.focus({preventScroll:!0}))});t.forEach((Z,at)=>Z.addEventListener("focusin",()=>{Math.abs(S.floatAt(L())-at)>.2&&O(S.anchors[at],{duration:1.1})}));let F=Ln("[data-header]"),k=t.map(Z=>Z.querySelector(".placard")),G=t.map(Z=>Z.dataset.side||"hero"),st=k.map(()=>0),W=k.map(()=>0),et=Ln(".dmd-strip"),nt=et&&et.parentElement,It=et&&et.nextElementSibling,wt=0,Yt=0,qt=!1;function ht(Z=!1){let at=innerWidth,N=innerHeight,lt=!Z&&qt&&at===wt&&Math.abs(N-Yt)<150;if(wt=at,Yt=N,l.resize(wt,Yt),lt)return;S.setView(wt,Yt,F?F.offsetHeight:64);let $=S.view.layout;if(qt=$!=="wide",Dn.classList.toggle("tall",$==="tall"),Dn.classList.toggle("side",$==="side"),Dn.classList.toggle("panel",qt),Dn.style.setProperty("--panel-top",S.view.panelTop+"px"),Dn.style.setProperty("--panel-left",S.view.panelLeft+"px"),et&&k[0]&&(qt?k[0].append(et):nt.insertBefore(et,It)),!qt){t.forEach((K,_t)=>{K.style.height="",k[_t]&&K.style.setProperty("--ph",k[_t].offsetHeight+"px")}),S.measure(t,Yt);return}let dt=t.map((K,_t)=>{let Et=k[_t];if(!Et)return Yt*.45;Et.style.setProperty("--scroll","0px"),W[_t]=0;let ue=Et.scrollHeight-Et.clientHeight;return st[_t]=ue>2?Math.ceil(ue+16):0,st[_t]+Yt*.45*(+K.dataset.hold||1)}),yt=Yt*.8;t.forEach((K,_t)=>{K.style.height=`${Math.round(dt[_t]+(_t<t.length-1?yt:Yt*.25))}px`}),S.setStops(t,dt)}ht();let V=0;addEventListener("resize",()=>{clearTimeout(V),V=setTimeout(ht,120)}),document.fonts.ready.then(()=>ht(!0));let Q=new ga,gt=new ot(9,9),Dt=null,Rt=!1,Gt=Ln("[data-cursor-label]"),ee=Z=>Z.closest("a, button, input, label, .placard, [data-glass], .site-header, .dmd-strip, .site-footer"),it=!1,ct=0;addEventListener("pointermove",Z=>{it=!0,gt.set(Z.clientX/wt*2-1,-(Z.clientY/Yt)*2+1),Gp&&S.pointer(gt.x,gt.y),Gt&&(Gt.style.transform=`translate(${Z.clientX}px, ${Z.clientY}px) translate(-50%, -50%) scale(${Dt?1:0})`),Rt=!!ee(Z.target)},{passive:!0});function ft(){if(Rt||Math.abs(gt.x)>1)return null;Q.setFromCamera(gt,l.camera);let Z=Q.intersectObjects(u.interactive,!1).find(at=>at.object.visible&&(!at.object.parent||at.object.parent.visible!==!1));return Z&&Z.object.userData.action||null}addEventListener("click",Z=>{if(ee(Z.target))return;let at=ft();if(!at)return;let N=Xu[at];if(N&&N.href){window.pixelsTo?window.pixelsTo(N.href,{x:Z.clientX,y:Z.clientY}):location.href=N.href;return}at.startsWith("pop-")?d.firePop(+at.slice(4)):at==="portrait"?[0,1,2].forEach((lt,$)=>setTimeout(()=>d.firePop(lt),$*140)):at.startsWith("target-")?d.hitTarget(+at.slice(7)):at.startsWith("sling-")?d.kickSling(at.slice(6)):at==="flip-left"||at==="flip-right"?pt(at.slice(5)):at==="plunger"?Mt():at==="dmd"&&o.next()}),addEventListener("keydown",Z=>{Z.repeat||Z.target.closest&&Z.target.closest("input, textarea")||(Z.code==="ShiftLeft"&&pt("left",!0),Z.code==="ShiftRight"&&pt("right",!0))}),addEventListener("keyup",Z=>{Z.code==="ShiftLeft"&&d.hold("left",!1),Z.code==="ShiftRight"&&d.hold("right",!1)});function pt(Z,at=!1){at?d.hold(Z,!0):d.flip(Z)}function Mt(){d.pull(),setTimeout(()=>{d.release(),O(0,{duration:2.8})},gn?0:520)}for(let Z of Ds("[data-launch]"))Z.addEventListener("click",at=>{at.preventDefault(),Mt()});for(let Z of Ds('.station-hero a[href="#work"]'))Z.addEventListener("click",()=>d.pressStart());for(let Z of Ds("[data-flip]"))Z.addEventListener("pointerenter",()=>d.flip(Z.dataset.flip)),Z.addEventListener("focus",()=>d.flip(Z.dataset.flip));let zt=Ln("[data-dmd-pause]"),Ht=Ln("[data-dmd-next]"),Vt=gn;zt&&(gn&&(zt.hidden=!0),zt.addEventListener("click",()=>{Vt=!Vt,zt.setAttribute("aria-pressed",String(Vt)),zt.textContent=Vt?"Play":"Pause",Vt?o.stop():o.start()})),Ht&&Ht.addEventListener("click",()=>{o.next(),(Vt||gn)&&o.still()});let $t=Ln("[data-shade]"),B={l:-1,r:-1,b:-1},ae=k.map(()=>-1),Kt=k.map(()=>0),P=Ln("[data-lens]"),b=0,H=Ln(".site-footer");function X(Z,at){let N=1;qt&&H&&Z>k.length-1.6&&(N=Di((H.getBoundingClientRect().top-Yt*.55)/(Yt*.35))),k.forEach((K,_t)=>{let Et=Di(1-Math.abs(Z-_t)*2.4);if(gn&&(Et=Math.abs(Z-_t)<.5?1:0),_t===k.length-1&&(Et*=N),Kt[_t]=Et,!!K){if(qt){let ue=st[_t]?Math.round(-st[_t]*S.holdProgress(_t,at)*2)/2:0;ue!==W[_t]&&(W[_t]=ue,K.style.setProperty("--scroll",ue+"px"))}Math.abs(Et-ae[_t])<.003||(ae[_t]=Et,K.style.opacity=Et.toFixed(3),K.style.transform=`translate3d(0, ${((1-Et)*22).toFixed(1)}px, 0)`,K.classList.toggle("is-here",Et>.55))}});let lt=0;Kt.forEach((K,_t)=>{_t>0&&K>Kt[lt]&&(lt=_t)});let $=lt>0?Kt[lt]:0;if(P&&!qt&&($>.01||b>.01)){if($>.01){let K=k[lt].getBoundingClientRect(),_t=90,Et=80;P.style.transform=`translate(${(K.left-_t).toFixed(0)}px, ${(K.top-Et).toFixed(0)}px)`,P.style.width=`${(K.width+_t*2).toFixed(0)}px`,P.style.height=`${(K.height+Et*2).toFixed(0)}px`}P.style.opacity=$.toFixed(3),b=$}let dt=K=>Math.max(0,...Kt.map((_t,Et)=>G[Et]===K?_t:0)),yt=qt?{l:0,r:0,b:0}:{l:dt("left"),r:dt("right"),b:0};for(let K of["l","r","b"])Math.abs(yt[K]-B[K])<.004||(B[K]=yt[K],$t.style.setProperty("--"+K,yt[K].toFixed(3)))}let j=Ds("[data-skill]"),xt=Ds("[data-rung]"),St="";function tt(Z){let at=d.skillsLit.join("")+"|"+(Z==="experience"?d.rung:-1)+"|"+M;if(at===St)return;St=at,j.forEach((dt,yt)=>dt.classList.toggle("lit",d.skillsLit[yt]>.5)),xt.forEach((dt,yt)=>dt.classList.toggle("lit",Z==="experience"&&yt<=d.rung));let N=d.skillsLit.filter(dt=>dt>.5).length,lt=Z!=="skills"?-1:gn?N>0&&N<j.length?d.skillsLit.lastIndexOf(1):-1:M,$=Z==="experience"?d.rung:-1;for(let[dt,yt]of[[j,lt],[xt,$]])dt.forEach((K,_t)=>K.classList.toggle("current",_t===yt)),dt[0]&&dt[0].parentElement.classList.toggle("has-current",yt>=0)}let rt={blend:gn?1:0};function At(){if(Dn.classList.remove("booting"),Dn.classList.add("machine-ready"),gn||!window.gsap){d.power=1,rt.blend=1,o.boot();return}window.gsap.timeline().to(d,{power:.75,duration:.08,ease:"none"},.35).to(d,{power:.08,duration:.07,ease:"none"},.45).to(d,{power:.9,duration:.06,ease:"none"},.6).to(d,{power:.3,duration:.05,ease:"none"},.68).to(d,{power:1,duration:.5,ease:"power2.out"},.78).call(()=>o.boot(),null,.85).to(rt,{blend:1,duration:2.6,ease:"power3.inOut"},.2)}let Ot=!0,bt=performance.now();document.addEventListener("visibilitychange",()=>{Ot=!document.hidden,Ot&&(bt=performance.now(),requestAnimationFrame(Ut)),document.hidden?o.stop():Vt||o.start()});let Tt=null;function Ut(Z){if(!Ot)return;let at=Math.min(.5,Math.max(0,(Z-bt)/1e3)),N=Math.min(.05,at);bt=Z,C&&C.raf(Z);let lt=L(),$=S.floatAt(lt),dt=Math.round($),yt=Math.abs($-dt)<.36?m[dt]:null;yt!==Tt&&(Tt=yt,d.setStation(yt||d.station),Dn.dataset.station=yt||"");let K=m.indexOf("skills"),_t=m.indexOf("experience");K>=0&&d.setSkills(yt==="skills"?S.holdProgress(K,lt):$>K?1:0),_t>=0&&d.setTimeline(S.holdProgress(_t,lt));let Et=S.at(gn?dt:$);if(M=-1,K>=0&&!gn&&Math.abs($-K)<.001){let{k:He,zoom:Ui,cross:Pr}=gy(S.holdProgress(K,lt));if(Ui>.001){let Ni=Math.floor(He),Ya=Math.min(v.length-1,Ni+1),Za=S.blend(S.resolve(v[Ni]),S.resolve(v[Ya]),He-Ni,0),$a=Math.abs(Us.inserts[Ya][0]-Us.inserts[Ni][0])/340;Et=S.blend(Et,Za,Ui*(1-.6*Pr*$a),0),Ui>.6&&Pr<.5&&(M=Math.round(He))}}rt.blend<1&&(Et=S.blend(S.resolve(w),Et,rt.blend,0)),S.apply(Et,N,{instant:gn,damping:6.5});let ue=dt>0?Di(1-Math.abs($-dt)*2.4):0;l.focusOn(S.current.target,S.current.d,ue*rt.blend,S.current.sharp),d.skillFocus=M,d.update(N,{f:$}),E.update(l.camera,wt,Yt,Kt,S.view),X($,lt),tt(yt);let pe="art",xn=x.showing==="art"?.46:.54;for(let He of Object.keys(Wp)){let Ui=Math.abs($-m.indexOf(He))-(He===x.showing?.06:0);m.includes(He)&&Ui<xn&&(xn=Ui,pe=He)}if(x.show(pe,gn),x.update(at),T){let He=A(lt);T.update(He,l.camera,wt,Yt,S.view.layout==="tall"?"tall":Vp.about.side),d.exploded=He}let Tn=lt>40;if(Tn!==Dn.classList.contains("scrolled")&&Dn.classList.toggle("scrolled",Tn),Gp&&(it||++ct%6===0)){it=!1;let He=ft();He!==Dt&&(Dt=He,document.body.style.cursor=He?"pointer":"",Gt&&(Gt.textContent=He&&Xu[He]?Xu[He].label:""))}l.render(),l.govern(Z),requestAnimationFrame(Ut)}S.apply(S.at(0),0,{instant:!0});try{await l.renderer.compileAsync(l.scene,l.camera)}catch{}l.render(),performance.mark("machine:first-frame"),requestAnimationFrame(Z=>{bt=Z,Ut(Z),At()}),window.__machine={stage:l,h:u,show:d,director:S,dmd:o,lenis:C,scrollTo:O,intro:rt,lcd:x,exploded:T}}xy().catch(i=>{console.error(i),Dn.classList.remove("machine","booting","tall","side","panel"),Dn.classList.add("machine-failed"),window.dispatchEvent(new Event("machine:failed"))});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
