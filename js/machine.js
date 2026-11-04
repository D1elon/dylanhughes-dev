var Yp=Object.defineProperty;var Zp=(i,t)=>{for(var e in t)Yp(i,e,{get:t[e],enumerable:!0})};var Ad=0,uh=1,Rd=2;var ds=1,Cd=2,hr=3,qi=0,hn=1,un=2,Be=0,ur=1,fs=2,dh=3,fh=4,jo=5;var In=100,Pd=101,Id=102,Ld=103,Dd=104,ps=200,Ud=201,Nd=202,Fd=203,ph=204,mh=205,fa=206,Od=207,pa=208,Bd=209,kd=210,zd=211,Hd=212,Gd=213,Vd=214,xo=0,_o=1,vo=2,Zs=3,yo=4,Mo=5,So=6,bo=7,gh=0,Wd=1,Xd=2,Hn=0,xh=1,_h=2,vh=3,yh=4,ma=5,Mh=6,Sh=7;var bh=300,Yi=301,ms=302,Qo=303,tl=304,ga=306,xn=1e3,Jn=1001,Eo=1002,Ie=1003,qd=1004;var xa=1005;var Je=1006,el=1007;var Zi=1008;var $e=1009,Eh=1010,Th=1011,dr=1012,nl=1013,Gn=1014,Vn=1015,Fe=1016,il=1017,sl=1018,$i=1020,wh=35902,Ah=35899,Rh=1021,Ch=1022,_n=1023,jn=1026,ri=1027,Ph=1028,rl=1029,Ji=1030,al=1031;var ol=1033,_a=33776,va=33777,ya=33778,Ma=33779,ll=35840,cl=35841,hl=35842,ul=35843,dl=36196,fl=37492,pl=37496,ml=37488,gl=37489,Sa=37490,xl=37491,_l=37808,vl=37809,yl=37810,Ml=37811,Sl=37812,bl=37813,El=37814,Tl=37815,wl=37816,Al=37817,Rl=37818,Cl=37819,Pl=37820,Il=37821,Ll=36492,Dl=36494,Ul=36495,Nl=36283,Fl=36284,ba=36285,Ol=36286;var Fr=2300,To=2301,mo=2302,jc=2303,Qc=2400,th=2401,eh=2402;var Yd=3200,Ih=3201;var Ea=0,Zd=1,Ti="",Ve="srgb",Or="srgb-linear",Br="linear",xe="srgb";var go=7680;var $d=519,Jd=512,Kd=513,jd=514,Bl=515,Qd=516,tf=517,kl=518,ef=519,nf=35044;var Lh="300 es",zn=2e3,$s=2001;function $p(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Jp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sf(){let i=kr("canvas");return i.style.display="block",i}var Ju={},Js=null;function Dh(...i){let t="THREE."+i.shift();Js?Js("log",t,...i):console.log(t,...i)}function rf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function qt(...i){i=rf(i);let t="THREE."+i.shift();if(Js)Js("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Zt(...i){i=rf(i);let t="THREE."+i.shift();if(Js)Js("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ls(...i){let t=i.join(" ");t in Ju||(Ju[t]=!0,qt(...i))}function af(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var of={[xo]:_o,[vo]:So,[yo]:bo,[Zs]:Mo,[_o]:xo,[So]:vo,[bo]:yo,[Mo]:Zs},Qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Tc=Math.PI/180,zr=180/Math.PI;function fr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function se(i,t,e){return Math.max(t,Math.min(e,i))}function Kp(i,t){return(i%t+t)%t}function wc(i,t,e){return(1-e)*i+e*t}function Ar(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var kh=class kh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kh.prototype.isVector2=!0;var ot=kh,ti=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(u!==v||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*v;m<0&&(d=-d,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let _=Math.acos(m),E=Math.sin(_);p=Math.sin(p*_)/E,o=Math.sin(o*_)/E,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+v*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+v*o;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},zh=class zh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ku.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ku.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ac.copy(this).projectOnVector(t),this.sub(Ac)}reflect(t){return this.sub(Ac.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zh.prototype.isVector3=!0;var D=zh,Ac=new D,Ku=new ti,Hh=class Hh{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],_=s[1],E=s[4],x=s[7],M=s[2],S=s[5],A=s[8];return r[0]=a*v+o*_+l*M,r[3]=a*m+o*E+l*S,r[6]=a*p+o*x+l*A,r[1]=c*v+h*_+u*M,r[4]=c*m+h*E+u*S,r[7]=c*p+h*x+u*A,r[2]=d*v+f*_+g*M,r[5]=d*m+f*E+g*S,r[8]=d*p+f*x+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Rc.makeScale(t,e)),this}rotate(t){return ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Rc.makeRotation(-t)),this}translate(t,e){return ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Rc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Hh.prototype.isMatrix3=!0;var Kt=Hh,Rc=new Kt,ju=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qu=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jp(){let i={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xe&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xe&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ti?Br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Or]:{primaries:t,whitePoint:n,transfer:Br,toXYZ:ju,fromXYZ:Qu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:ju,fromXYZ:Qu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),i}var ce=jp();function Mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Us,wo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Us===void 0&&(Us=kr("canvas")),Us.width=t.width,Us.height=t.height;let s=Us.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Us}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=kr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Mi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mi(e[n]/255)*255):e[n]=Mi(e[n]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Qp=0,Ks=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=fr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Cc(s[a].image)):r.push(Cc(s[a]))}else r=Cc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Cc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}var tm=0,Pc=new D,on=class i extends Qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Jn,s=Jn,r=Je,a=Zi,o=_n,l=$e,c=i.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=fr(),this.name="",this.source=new Ks(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Pc).x}get height(){return this.source.getSize(Pc).y}get depth(){return this.source.getSize(Pc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xn:t.x=t.x-Math.floor(t.x);break;case Jn:t.x=t.x<0?0:1;break;case Eo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xn:t.y=t.y-Math.floor(t.y);break;case Jn:t.y=t.y<0?0:1;break;case Eo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=bh;on.DEFAULT_ANISOTROPY=1;var Gh=class Gh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,x=(f+1)/2,M=(p+1)/2,S=(h+d)/4,A=(u+v)/4,y=(g+m)/4;return E>x&&E>M?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=S/n,r=A/n):x>M?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=S/s,r=y/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=A/r,s=y/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gh.prototype.isVector4=!0;var Le=Gh,Ao=class extends Qn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new on(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ks(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ue=class extends Ao{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Hr=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ro=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ko=class Ko{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,v,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ko().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ns.setFromMatrixColumn(t,0).length(),r=1/Ns.setFromMatrixColumn(t,1).length(),a=1/Ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d+v*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d-v*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(em,t,nm)}lookAt(t,e,n){let s=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ni.crossVectors(n,Mn),Ni.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ni.crossVectors(n,Mn)),Ni.normalize(),Xa.crossVectors(Mn,Ni),s[0]=Ni.x,s[4]=Xa.x,s[8]=Mn.x,s[1]=Ni.y,s[5]=Xa.y,s[9]=Mn.y,s[2]=Ni.z,s[6]=Xa.z,s[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],E=n[7],x=n[11],M=n[15],S=s[0],A=s[4],y=s[8],w=s[12],R=s[1],P=s[5],U=s[9],B=s[13],I=s[2],F=s[6],G=s[10],X=s[14],rt=s[3],$=s[7],nt=s[11],et=s[15];return r[0]=a*S+o*R+l*I+c*rt,r[4]=a*A+o*P+l*F+c*$,r[8]=a*y+o*U+l*G+c*nt,r[12]=a*w+o*B+l*X+c*et,r[1]=h*S+u*R+d*I+f*rt,r[5]=h*A+u*P+d*F+f*$,r[9]=h*y+u*U+d*G+f*nt,r[13]=h*w+u*B+d*X+f*et,r[2]=g*S+v*R+m*I+p*rt,r[6]=g*A+v*P+m*F+p*$,r[10]=g*y+v*U+m*G+p*nt,r[14]=g*w+v*B+m*X+p*et,r[3]=_*S+E*R+x*I+M*rt,r[7]=_*A+E*P+x*F+M*$,r[11]=_*y+E*U+x*G+M*nt,r[15]=_*w+E*B+x*X+M*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15],_=l*f-c*d,E=o*f-c*u,x=o*d-l*u,M=a*f-c*h,S=a*d-l*h,A=a*u-o*h;return e*(v*_-m*E+p*x)-n*(g*_-m*M+p*S)+s*(g*E-v*M+p*A)-r*(g*x-v*S+m*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],_=e*o-n*a,E=e*l-s*a,x=e*c-r*a,M=n*l-s*o,S=n*c-r*o,A=s*c-r*l,y=h*v-u*g,w=h*m-d*g,R=h*p-f*g,P=u*m-d*v,U=u*p-f*v,B=d*p-f*m,I=_*B-E*U+x*P+M*R-S*w+A*y;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/I;return t[0]=(o*B-l*U+c*P)*F,t[1]=(s*U-n*B-r*P)*F,t[2]=(v*A-m*S+p*M)*F,t[3]=(d*S-u*A-f*M)*F,t[4]=(l*R-a*B-c*w)*F,t[5]=(e*B-s*R+r*w)*F,t[6]=(m*x-g*A-p*E)*F,t[7]=(h*A-d*x+f*E)*F,t[8]=(a*U-o*R+c*y)*F,t[9]=(n*R-e*U-r*y)*F,t[10]=(g*S-v*x+p*_)*F,t[11]=(u*x-h*S-f*_)*F,t[12]=(o*w-a*P-l*y)*F,t[13]=(e*P-n*w+s*y)*F,t[14]=(v*E-g*M-m*_)*F,t[15]=(h*M-u*E+d*_)*F,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,v=a*h,m=a*u,p=o*u,_=l*c,E=l*h,x=l*u,M=n.x,S=n.y,A=n.z;return s[0]=(1-(v+p))*M,s[1]=(f+x)*M,s[2]=(g-E)*M,s[3]=0,s[4]=(f-x)*S,s[5]=(1-(d+p))*S,s[6]=(m+_)*S,s[7]=0,s[8]=(g+E)*A,s[9]=(m-_)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ns.set(s[0],s[1],s[2]).length(),o=Ns.set(s[4],s[5],s[6]).length(),l=Ns.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Fn.copy(this);let c=1/a,h=1/o,u=1/l;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=u,Fn.elements[9]*=u,Fn.elements[10]*=u,e.setFromRotationMatrix(Fn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=zn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===zn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===$s)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=zn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===zn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===$s)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ko.prototype.isMatrix4=!0;var ue=Ko,Ns=new D,Fn=new ue,em=new D(0,0,0),nm=new D(1,1,1),Ni=new D,Xa=new D,Mn=new D,td=new ue,ed=new ti,Si=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return td.makeRotationFromQuaternion(t),this.setFromRotationMatrix(td,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ed.setFromEuler(this),this.setFromQuaternion(ed,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Si.DEFAULT_ORDER="XYZ";var js=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},im=0,nd=new D,Fs=new ti,gi=new ue,qa=new D,Rr=new D,sm=new D,rm=new ti,id=new D(1,0,0),sd=new D(0,1,0),rd=new D(0,0,1),ad={type:"added"},am={type:"removed"},Os={type:"childadded",child:null},Ic={type:"childremoved",child:null},He=class i extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new Si,n=new ti,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Kt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.premultiply(Fs),this}rotateX(t){return this.rotateOnAxis(id,t)}rotateY(t){return this.rotateOnAxis(sd,t)}rotateZ(t){return this.rotateOnAxis(rd,t)}translateOnAxis(t,e){return nd.copy(t).applyQuaternion(this.quaternion),this.position.add(nd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(id,t)}translateY(t){return this.translateOnAxis(sd,t)}translateZ(t){return this.translateOnAxis(rd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qa.copy(t):qa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Rr,qa,this.up):gi.lookAt(qa,Rr,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(gi),this.quaternion.premultiply(Fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ad),Os.child=t,this.dispatchEvent(Os),Os.child=null):Zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(am),Ic.child=t,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ad),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,t,sm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,rm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};He.DEFAULT_UP=new D(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var he=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},om={type:"move"},Qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new he,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new he,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new he,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(om)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new he;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Ya={h:0,s:0,l:0};function Lc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=Kp(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Lc(a,r,t+1/3),this.g=Lc(a,r,t),this.b=Lc(a,r,t-1/3)}return ce.colorSpaceToWorking(this,s),this}setStyle(t,e=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){let n=lf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}copyLinearToSRGB(t){return this.r=Ys(t.r),this.g=Ys(t.g),this.b=Ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return ce.workingToColorSpace(en.copy(this),t),Math.round(se(en.r*255,0,255))*65536+Math.round(se(en.g*255,0,255))*256+Math.round(se(en.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(en.copy(this),e);let n=en.r,s=en.g,r=en.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=Ve){ce.workingToColorSpace(en.copy(this),t);let e=en.r,n=en.g,s=en.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Fi),this.setHSL(Fi.h+t,Fi.s+e,Fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fi),t.getHSL(Ya);let n=wc(Fi.h,Ya.h,e),s=wc(Fi.s,Ya.s,e),r=wc(Fi.l,Ya.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Ht;Ht.NAMES=lf;var Gr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},tr=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},On=new D,xi=new D,Dc=new D,_i=new D,Bs=new D,ks=new D,od=new D,Uc=new D,Nc=new D,Fc=new D,Oc=new Le,Bc=new Le,kc=new Le,zi=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),On.subVectors(t,e),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){On.subVectors(s,e),xi.subVectors(n,e),Dc.subVectors(t,e);let a=On.dot(On),o=On.dot(xi),l=On.dot(Dc),c=xi.dot(xi),h=xi.dot(Dc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(a,_i.y),l.addScaledVector(o,_i.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Oc.setScalar(0),Bc.setScalar(0),kc.setScalar(0),Oc.fromBufferAttribute(t,e),Bc.fromBufferAttribute(t,n),kc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Oc,r.x),a.addScaledVector(Bc,r.y),a.addScaledVector(kc,r.z),a}static isFrontFacing(t,e,n,s){return On.subVectors(n,e),xi.subVectors(t,e),On.cross(xi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),On.cross(xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Bs.subVectors(s,n),ks.subVectors(r,n),Uc.subVectors(t,n);let l=Bs.dot(Uc),c=ks.dot(Uc);if(l<=0&&c<=0)return e.copy(n);Nc.subVectors(t,s);let h=Bs.dot(Nc),u=ks.dot(Nc);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Bs,a);Fc.subVectors(t,r);let f=Bs.dot(Fc),g=ks.dot(Fc);if(g>=0&&f<=g)return e.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ks,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return od.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(od,o);let p=1/(m+v+d);return a=v*p,o=d*p,e.copy(n).addScaledVector(Bs,a).addScaledVector(ks,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Cn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Bn):Bn.fromBufferAttribute(r,a),Bn.applyMatrix4(t.matrixWorld),this.expandByPoint(Bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Za.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Za.copy(n.boundingBox)),Za.applyMatrix4(t.matrixWorld),this.union(Za)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bn),Bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cr),$a.subVectors(this.max,Cr),zs.subVectors(t.a,Cr),Hs.subVectors(t.b,Cr),Gs.subVectors(t.c,Cr),Oi.subVectors(Hs,zs),Bi.subVectors(Gs,Hs),ss.subVectors(zs,Gs);let e=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-ss.z,ss.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,ss.z,0,-ss.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-ss.y,ss.x,0];return!zc(e,zs,Hs,Gs,$a)||(e=[1,0,0,0,1,0,0,0,1],!zc(e,zs,Hs,Gs,$a))?!1:(Ja.crossVectors(Oi,Bi),e=[Ja.x,Ja.y,Ja.z],zc(e,zs,Hs,Gs,$a))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},vi=[new D,new D,new D,new D,new D,new D,new D,new D],Bn=new D,Za=new Cn,zs=new D,Hs=new D,Gs=new D,Oi=new D,Bi=new D,ss=new D,Cr=new D,$a=new D,Ja=new D,rs=new D;function zc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){rs.fromArray(i,r);let o=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),l=t.dot(rs),c=e.dot(rs),h=n.dot(rs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var ze=new D,Ka=new ot,lm=0,gn=class extends Qn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nf,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ka.fromBufferAttribute(this,e),Ka.applyMatrix3(t),this.setXY(e,Ka.x,Ka.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ar(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=mn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ar(e,this.array)),e}setX(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ar(e,this.array)),e}setY(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ar(e,this.array)),e}setZ(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ar(e,this.array)),e}setW(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array),s=mn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array),s=mn(s,this.array),r=mn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Vr=class extends gn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Wr=class extends gn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var te=class extends gn{constructor(t,e,n){super(new Float32Array(t),e,n)}},cm=new Cn,Pr=new D,Hc=new D,cs=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):cm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pr.subVectors(t,this.center);let e=Pr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Pr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pr.copy(t.center).add(Hc)),this.expandByPoint(Pr.copy(t.center).sub(Hc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},hm=0,Rn=new ue,Gc=new He,Vs=new D,Sn=new Cn,Ir=new Cn,qe=new D,ve=class i extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($p(t)?Wr:Vr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return Gc.lookAt(t),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new te(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ir.setFromBufferAttribute(o),this.morphTargetsRelative?(qe.addVectors(Sn.min,Ir.min),Sn.expandByPoint(qe),qe.addVectors(Sn.max,Ir.max),Sn.expandByPoint(qe)):(Sn.expandByPoint(Ir.min),Sn.expandByPoint(Ir.max))}Sn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(qe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)qe.fromBufferAttribute(o,c),l&&(Vs.fromBufferAttribute(t,c),qe.add(Vs)),s=Math.max(s,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new gn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new D,l[y]=new D;let c=new D,h=new D,u=new D,d=new ot,f=new ot,g=new ot,v=new D,m=new D;function p(y,w,R){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,R),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,R),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[y].add(v),o[w].add(v),o[R].add(v),l[y].add(m),l[w].add(m),l[R].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let y=0,w=_.length;y<w;++y){let R=_[y],P=R.start,U=R.count;for(let B=P,I=P+U;B<I;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let E=new D,x=new D,M=new D,S=new D;function A(y){M.fromBufferAttribute(s,y),S.copy(M);let w=o[y];E.copy(w),E.sub(M.multiplyScalar(M.dot(w))).normalize(),x.crossVectors(S,w);let P=x.dot(l[y])<0?-1:1;a.setXYZW(y,E.x,E.y,E.z,P)}for(let y=0,w=_.length;y<w;++y){let R=_[y],P=R.start,U=R.count;for(let B=P,I=P+U;B<I;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new gn(d,h,u)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Vc=new D,um=new D,dm=new Kt,kn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Vc.subVectors(n,e).cross(um.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Vc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||dm.getNormalMatrix(t),s=this.coplanarPoint(Vc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},fm=0,ei=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=ur,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new kn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ot().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var yi=new D,Wc=new D,ja=new D,Qa=new D,er=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yi.copy(this.origin).addScaledVector(this.direction,e),yi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Wc.copy(t).add(e).multiplyScalar(.5),ja.copy(e).sub(t).normalize(),Qa.copy(this.origin).sub(Wc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ja),o=Qa.dot(this.direction),l=-Qa.dot(ja),c=Qa.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Wc).addScaledVector(ja,d),f}intersectSphere(t,e){if(t.radius<0)return null;yi.subVectors(t.center,this.origin);let n=yi.dot(this.direction),s=yi.dot(yi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,g=e.x-a.x,v=e.y-a.y,m=e.z-a.z,p=n.x-a.x,_=n.y-a.y,E=n.z-a.z,x=Math.abs(l),M=Math.abs(c),S=Math.abs(h),A,y,w,R,P,U,B,I,F,G,X,rt;if(x>=M&&x>=S?(w=l,U=u,F=g,rt=p,l>=0?(A=c,y=h,R=d,P=f,B=v,I=m,G=_,X=E):(A=h,y=c,R=f,P=d,B=m,I=v,G=E,X=_)):M>=S?(w=c,U=d,F=v,rt=_,c>=0?(A=h,y=l,R=f,P=u,B=m,I=g,G=E,X=p):(A=l,y=h,R=u,P=f,B=g,I=m,G=p,X=E)):(w=h,U=f,F=m,rt=E,h>=0?(A=l,y=c,R=u,P=d,B=g,I=v,G=p,X=_):(A=c,y=l,R=d,P=u,B=v,I=g,G=_,X=p)),w===0)return null;let $=A/w,nt=y/w,et=1/w,At=R-$*U,wt=P-nt*U,jt=B-$*F,$t=I-nt*F,ut=G-$*rt,W=X-nt*rt,tt=ut*$t-W*jt,xt=At*W-wt*ut,It=jt*wt-$t*At;if(s){if(tt<0||xt<0||It<0)return null}else if((tt<0||xt<0||It<0)&&(tt>0||xt>0||It>0))return null;let yt=tt+xt+It;if(yt===0)return null;let kt=et*(tt*U+xt*F+It*rt);return(yt>0?kt<0:kt>0)?null:this.at(kt/yt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ln=class extends ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ld=new ue,as=new er,to=new cs,cd=new D,eo=new D,no=new D,io=new D,Xc=new D,so=new D,hd=new D,ro=new D,_e=class extends He{constructor(t=new ve,e=new ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){so.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Xc.fromBufferAttribute(u,t),a?so.addScaledVector(Xc,h):so.addScaledVector(Xc.sub(e),h))}e.add(so)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(r),as.copy(t.ray).recast(t.near),!(to.containsPoint(as.origin)===!1&&(as.intersectSphere(to,cd)===null||as.origin.distanceToSquared(cd)>(t.far-t.near)**2))&&(ld.copy(r).invert(),as.copy(t.ray).applyMatrix4(ld),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,as)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,M=E;x<M;x+=3){let S=o.getX(x),A=o.getX(x+1),y=o.getX(x+2);s=ao(this,p,t,n,c,h,u,S,A,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let _=o.getX(m),E=o.getX(m+1),x=o.getX(m+2);s=ao(this,a,t,n,c,h,u,_,E,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,M=E;x<M;x+=3){let S=x,A=x+1,y=x+2;s=ao(this,p,t,n,c,h,u,S,A,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let _=m,E=m+1,x=m+2;s=ao(this,a,t,n,c,h,u,_,E,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function pm(i,t,e,n,s,r,a,o){let l;if(t.side===hn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===qi,o),l===null)return null;ro.copy(o),ro.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ro);return c<e.near||c>e.far?null:{distance:c,point:ro.clone(),object:i}}function ao(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,eo),i.getVertexPosition(l,no),i.getVertexPosition(c,io);let h=pm(i,t,e,n,eo,no,io,hd);if(h){let u=new D;zi.getBarycoord(hd,eo,no,io,u),s&&(h.uv=zi.getInterpolatedAttribute(s,o,l,c,u,new ot)),r&&(h.uv1=zi.getInterpolatedAttribute(r,o,l,c,u,new ot)),a&&(h.normal=zi.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};zi.getNormal(eo,no,io,d.normal),h.face=d,h.barycoord=u}return h}var Hi=class extends on{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ie,h=Ie,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var os=new cs,mm=new ot(.5,.5),oo=new D,nr=class{constructor(t=new kn,e=new kn,n=new kn,s=new kn,r=new kn,a=new kn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],_=r[12],E=r[13],x=r[14],M=r[15];if(s[0].setComponents(c-a,f-h,p-g,M-_).normalize(),s[1].setComponents(c+a,f+h,p+g,M+_).normalize(),s[2].setComponents(c+o,f+u,p+v,M+E).normalize(),s[3].setComponents(c-o,f-u,p-v,M-E).normalize(),n)s[4].setComponents(l,d,m,x).normalize(),s[5].setComponents(c-l,f-d,p-m,M-x).normalize();else if(s[4].setComponents(c-l,f-d,p-m,M-x).normalize(),e===zn)s[5].setComponents(c+l,f+d,p+m,M+x).normalize();else if(e===$s)s[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(t){os.center.set(0,0,0);let e=mm.distanceTo(t.center);return os.radius=.7071067811865476+e,os.applyMatrix4(t.matrixWorld),this.intersectsSphere(os)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(oo.x=s.normal.x>0?t.max.x:t.min.x,oo.y=s.normal.y>0?t.max.y:t.min.y,oo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(oo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Xr=class extends ei{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Co=new D,Po=new D,ud=new ue,Lr=new er,lo=new cs,qc=new D,dd=new D,qr=class extends He{constructor(t=new ve,e=new Xr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Co.fromBufferAttribute(e,s-1),Po.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Co.distanceTo(Po);t.setAttribute("lineDistance",new te(n,1))}else qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(s),lo.radius+=r,t.ray.intersectsSphere(lo)===!1)return;ud.copy(s).invert(),Lr.copy(t.ray).applyMatrix4(ud);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){let p=h.getX(v),_=h.getX(v+1),E=co(this,t,Lr,l,p,_,v);E&&e.push(E)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(f),p=co(this,t,Lr,l,v,m,g-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){let p=co(this,t,Lr,l,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){let v=co(this,t,Lr,l,g-1,f,g-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function co(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Co.fromBufferAttribute(o,s),Po.fromBufferAttribute(o,r),e.distanceSqToSegment(Co,Po,qc,dd)>n)return;qc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(qc);if(!(c<t.near||c>t.far))return{distance:c,point:dd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Yr=class extends on{constructor(t=[],e=Yi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},bi=class extends on{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ni=class extends on{constructor(t,e,n=Gn,s,r,a,o=Ie,l=Ie,c,h=jn,u=1){if(h!==jn&&h!==ri)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ks(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Io=class extends ni{constructor(t,e=Gn,n=Yi,s,r,a=Ie,o=Ie,l,c=jn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Zr=class extends on{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},de=class i extends ve{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function g(v,m,p,_,E,x,M,S,A,y,w){let R=x/A,P=M/y,U=x/2,B=M/2,I=S/2,F=A+1,G=y+1,X=0,rt=0,$=new D;for(let nt=0;nt<G;nt++){let et=nt*P-B;for(let At=0;At<F;At++){let wt=At*R-U;$[v]=wt*_,$[m]=et*E,$[p]=I,c.push($.x,$.y,$.z),$[v]=0,$[m]=0,$[p]=S>0?1:-1,h.push($.x,$.y,$.z),u.push(At/A),u.push(1-nt/y),X+=1}}for(let nt=0;nt<y;nt++)for(let et=0;et<A;et++){let At=d+et+F*nt,wt=d+et+F*(nt+1),jt=d+(et+1)+F*(nt+1),$t=d+(et+1)+F*nt;l.push(At,wt,$t),l.push(wt,jt,$t),rt+=6}o.addGroup(f,rt,w),f+=rt,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var $r=class i extends ve{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new D,h=new ot;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(o,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ce=class i extends ve{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,v=[],m=n/2,p=0;_(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(f,2));function _(){let x=new D,M=new D,S=0,A=(e-t)/n;for(let y=0;y<=r;y++){let w=[],R=y/r,P=R*(e-t)+t;for(let U=0;U<=s;U++){let B=U/s,I=B*l+o,F=Math.sin(I),G=Math.cos(I);M.x=P*F,M.y=-R*n+m,M.z=P*G,u.push(M.x,M.y,M.z),x.set(F,A,G).normalize(),d.push(x.x,x.y,x.z),f.push(B,1-R),w.push(g++)}v.push(w)}for(let y=0;y<s;y++)for(let w=0;w<r;w++){let R=v[w][y],P=v[w+1][y],U=v[w+1][y+1],B=v[w][y+1];(t>0||w!==0)&&(h.push(R,P,B),S+=3),(e>0||w!==r-1)&&(h.push(P,U,B),S+=3)}c.addGroup(p,S,0),p+=S}function E(x){let M=g,S=new ot,A=new D,y=0,w=x===!0?t:e,R=x===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*R,0),d.push(0,R,0),f.push(.5,.5),g++;let P=g;for(let U=0;U<=s;U++){let I=U/s*l+o,F=Math.cos(I),G=Math.sin(I);A.x=w*G,A.y=m*R,A.z=w*F,u.push(A.x,A.y,A.z),d.push(0,R,0),S.x=F*.5+.5,S.y=G*.5*R+.5,f.push(S.x,S.y),g++}for(let U=0;U<s;U++){let B=M+U,I=P+U;x===!0?h.push(I,I+1,B):h.push(I+1,I,B),y+=3}c.addGroup(p,y,x===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ot:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new D,s=[],r=[],a=[],o=new D,l=new ue;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(se(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(se(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ir=class extends bn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ot){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Lo=class extends ir{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Uh(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var fd=new D,pd=new D,Yc=new Uh,Zc=new Uh,$c=new Uh,Pn=class extends bn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(pd.subVectors(s[0],s[1]).add(s[0]),c=pd);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(fd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=fd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Yc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),Zc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),$c.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Yc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Zc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),$c.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Yc.calc(l),Zc.calc(l),$c.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function md(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function gm(i,t){let e=1-i;return e*e*t}function xm(i,t){return 2*(1-i)*i*t}function _m(i,t){return i*i*t}function Ur(i,t,e,n){return gm(i,t)+xm(i,e)+_m(i,n)}function vm(i,t){let e=1-i;return e*e*e*t}function ym(i,t){let e=1-i;return 3*e*e*i*t}function Mm(i,t){return 3*(1-i)*i*i*t}function Sm(i,t){return i*i*i*t}function Nr(i,t,e,n,s){return vm(i,t)+ym(i,e)+Mm(i,n)+Sm(i,s)}var Jr=class extends bn{constructor(t=new ot,e=new ot,n=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Nr(t,s.x,r.x,a.x,o.x),Nr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Do=class extends bn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Nr(t,s.x,r.x,a.x,o.x),Nr(t,s.y,r.y,a.y,o.y),Nr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Kr=class extends bn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uo=class extends bn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jr=class extends bn{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ur(t,s.x,r.x,a.x),Ur(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qr=class extends bn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ur(t,s.x,r.x,a.x),Ur(t,s.y,r.y,a.y),Ur(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ta=class extends bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(md(o,l.x,c.x,h.x,u.x),md(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ot().fromArray(s))}return this}},No=Object.freeze({__proto__:null,ArcCurve:Lo,CatmullRomCurve3:Pn,CubicBezierCurve:Jr,CubicBezierCurve3:Do,EllipseCurve:ir,LineCurve:Kr,LineCurve3:Uo,QuadraticBezierCurve:jr,QuadraticBezierCurve3:Qr,SplineCurve:ta}),Fo=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new No[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new No[s.type]().fromJSON(s))}return this}},ii=class extends Fo{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Kr(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new jr(this.currentPoint.clone(),new ot(t,e),new ot(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Jr(this.currentPoint.clone(),new ot(t,e),new ot(n,s),new ot(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ta(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new ir(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},cn=class extends ii{constructor(t){super(t),this.uuid=fr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ii().fromJSON(s))}return this}};function bm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=cf(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Rm(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,u=l;for(let d=e;d<s;d+=e){let f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return ea(r,a,e,o,l,c,0),a}function cf(i,t,e,n,s){let r;if(s===km(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=gd(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=gd(a/n|0,i[a],i[a+1],r);return r&&sr(r,r.next)&&(ia(r),r=r.next),r}function hs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(sr(e,e.next)||De(e.prev,e,e.next)===0)){if(ia(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ea(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Dm(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Tm(i,n,s,r):Em(i)){t.push(l.i,i.i,c.i),ia(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=wm(hs(i),t),ea(i,t,e,n,s,r,2)):a===2&&Am(i,t,e,n,s,r):ea(hs(i),t,e,n,s,r,1);break}}}function Em(i){let t=i.prev,e=i,n=i.next;if(De(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Dr(s,o,r,l,a,c,g.x,g.y)&&De(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Tm(i,t,e,n){let s=i.prev,r=i,a=i.next;if(De(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),v=Math.max(o,l,c),m=Math.max(h,u,d),p=nh(f,g,t,e,n),_=nh(v,m,t,e,n),E=i.prevZ,x=i.nextZ;for(;E&&E.z>=p&&x&&x.z<=_;){if(E.x>=f&&E.x<=v&&E.y>=g&&E.y<=m&&E!==s&&E!==a&&Dr(o,h,l,u,c,d,E.x,E.y)&&De(E.prev,E,E.next)>=0||(E=E.prevZ,x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Dr(o,h,l,u,c,d,x.x,x.y)&&De(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;E&&E.z>=p;){if(E.x>=f&&E.x<=v&&E.y>=g&&E.y<=m&&E!==s&&E!==a&&Dr(o,h,l,u,c,d,E.x,E.y)&&De(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;x&&x.z<=_;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Dr(o,h,l,u,c,d,x.x,x.y)&&De(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function wm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!sr(n,s)&&uf(n,e,e.next,s)&&na(n,s)&&na(s,n)&&(t.push(n.i,e.i,s.i),ia(e),ia(e.next),e=i=s),e=e.next}while(e!==i);return hs(e)}function Am(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Fm(a,o)){let l=df(a,o);a=hs(a,a.next),l=hs(l,l.next),ea(a,t,e,n,s,r,0),ea(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Rm(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=cf(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Nm(c))}s.sort(Cm);for(let r=0;r<s.length;r++)e=Pm(s[r],e);return e}function Cm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Pm(i,t){let e=Im(i,t);if(!e)return t;let n=df(e,i);return hs(n,n.next),hs(e,e.next)}function Im(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(sr(i,e))return e;do{if(sr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&hf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);na(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Lm(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Lm(i,t){return De(i.prev,i,t.prev)<0&&De(t.next,i,i.next)<0}function Dm(i,t,e,n){let s=i;do s.z===0&&(s.z=nh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Um(s)}function Um(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function nh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Nm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function hf(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Dr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&hf(i,t,e,n,s,r,a,o)}function Fm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Om(i,t)&&(na(i,t)&&na(t,i)&&Bm(i,t)&&(De(i.prev,i,t.prev)||De(i,t.prev,t))||sr(i,t)&&De(i.prev,i,i.next)>0&&De(t.prev,t,t.next)>0)}function De(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function sr(i,t){return i.x===t.x&&i.y===t.y}function uf(i,t,e,n){let s=uo(De(i,t,e)),r=uo(De(i,t,n)),a=uo(De(e,n,i)),o=uo(De(e,n,t));return!!(s!==r&&a!==o||s===0&&ho(i,e,t)||r===0&&ho(i,n,t)||a===0&&ho(e,i,n)||o===0&&ho(e,t,n))}function ho(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function uo(i){return i>0?1:i<0?-1:0}function Om(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&uf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function na(i,t){return De(i.prev,i,i.next)<0?De(i,t,i.next)>=0&&De(i,i.prev,t)>=0:De(i,t,i.prev)<0||De(i,i.next,t)<0}function Bm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function df(i,t){let e=ih(i.i,i.x,i.y),n=ih(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function gd(i,t,e,n){let s=ih(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ia(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ih(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function km(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var sh=class{static triangulate(t,e,n=2){return bm(t,e,n)}},Kn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];xd(t),_d(n,t);let a=t.length;e.forEach(xd);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,_d(n,e[l]);let o=sh.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function xd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function _d(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var si=class i extends ve{constructor(t=new cn([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new te(s,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:zm,E,x=!1,M,S,A,y;if(p){E=p.getSpacedPoints(h),x=!0,d=!1;let it=p.isCatmullRomCurve3?p.closed:!1;M=p.computeFrenetFrames(h,it),S=new D,A=new D,y=new D}d||(m=0,f=0,g=0,v=0);let w=o.extractPoints(c),R=w.shape,P=w.holes;if(!Kn.isClockWise(R)){R=R.reverse();for(let it=0,ht=P.length;it<ht;it++){let mt=P[it];Kn.isClockWise(mt)&&(P[it]=mt.reverse())}}function B(it){let mt=10000000000000001e-36,dt=it[0];for(let vt=1;vt<=it.length;vt++){let Vt=vt%it.length,zt=it[Vt],Wt=zt.x-dt.x,Xt=zt.y-dt.y,N=Wt*Wt+Xt*Xt,le=Math.max(Math.abs(zt.x),Math.abs(zt.y),Math.abs(dt.x),Math.abs(dt.y)),Jt=mt*le*le;if(N<=Jt){it.splice(Vt,1),vt--;continue}dt=zt}}B(R),P.forEach(B);let I=P.length,F=R;for(let it=0;it<I;it++){let ht=P[it];R=R.concat(ht)}function G(it,ht,mt){return ht||Zt("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(ht,mt)}let X=R.length;function rt(it,ht,mt){let dt,vt,Vt,zt=it.x-ht.x,Wt=it.y-ht.y,Xt=mt.x-it.x,N=mt.y-it.y,le=zt*zt+Wt*Wt,Jt=zt*N-Wt*Xt;if(Math.abs(Jt)>Number.EPSILON){let C=Math.sqrt(le),b=Math.sqrt(Xt*Xt+N*N),z=ht.x-Wt/C,q=ht.y+zt/C,Q=mt.x-N/b,H=mt.y+Xt/b,J=((Q-z)*N-(H-q)*Xt)/(zt*N-Wt*Xt);dt=z+zt*J-it.x,vt=q+Wt*J-it.y;let V=dt*dt+vt*vt;if(V<=2)return new ot(dt,vt);Vt=Math.sqrt(V/2)}else{let C=!1;zt>Number.EPSILON?Xt>Number.EPSILON&&(C=!0):zt<-Number.EPSILON?Xt<-Number.EPSILON&&(C=!0):Math.sign(Wt)===Math.sign(N)&&(C=!0),C?(dt=-Wt,vt=zt,Vt=Math.sqrt(le)):(dt=zt,vt=Wt,Vt=Math.sqrt(le/2))}return new ot(dt/Vt,vt/Vt)}let $=[];for(let it=0,ht=F.length,mt=ht-1,dt=it+1;it<ht;it++,mt++,dt++)mt===ht&&(mt=0),dt===ht&&(dt=0),$[it]=rt(F[it],F[mt],F[dt]);let nt=[],et,At=$.concat();for(let it=0,ht=I;it<ht;it++){let mt=P[it];et=[];for(let dt=0,vt=mt.length,Vt=vt-1,zt=dt+1;dt<vt;dt++,Vt++,zt++)Vt===vt&&(Vt=0),zt===vt&&(zt=0),et[dt]=rt(mt[dt],mt[Vt],mt[zt]);nt.push(et),At=At.concat(et)}let wt;if(m===0)wt=Kn.triangulateShape(F,P);else{let it=[],ht=[];for(let mt=0;mt<m;mt++){let dt=mt/m,vt=f*Math.cos(dt*Math.PI/2),Vt=g*Math.sin(dt*Math.PI/2)+v;for(let zt=0,Wt=F.length;zt<Wt;zt++){let Xt=G(F[zt],$[zt],Vt);xt(Xt.x,Xt.y,-vt),dt===0&&it.push(Xt)}for(let zt=0,Wt=I;zt<Wt;zt++){let Xt=P[zt];et=nt[zt];let N=[];for(let le=0,Jt=Xt.length;le<Jt;le++){let C=G(Xt[le],et[le],Vt);xt(C.x,C.y,-vt),dt===0&&N.push(C)}dt===0&&ht.push(N)}}wt=Kn.triangulateShape(it,ht)}let jt=wt.length,$t=g+v;for(let it=0;it<X;it++){let ht=d?G(R[it],At[it],$t):R[it];x?(A.copy(M.normals[0]).multiplyScalar(ht.x),S.copy(M.binormals[0]).multiplyScalar(ht.y),y.copy(E[0]).add(A).add(S),xt(y.x,y.y,y.z)):xt(ht.x,ht.y,0)}for(let it=1;it<=h;it++)for(let ht=0;ht<X;ht++){let mt=d?G(R[ht],At[ht],$t):R[ht];x?(A.copy(M.normals[it]).multiplyScalar(mt.x),S.copy(M.binormals[it]).multiplyScalar(mt.y),y.copy(E[it]).add(A).add(S),xt(y.x,y.y,y.z)):xt(mt.x,mt.y,u/h*it)}for(let it=m-1;it>=0;it--){let ht=it/m,mt=f*Math.cos(ht*Math.PI/2),dt=g*Math.sin(ht*Math.PI/2)+v;for(let vt=0,Vt=F.length;vt<Vt;vt++){let zt=G(F[vt],$[vt],dt);xt(zt.x,zt.y,u+mt)}for(let vt=0,Vt=P.length;vt<Vt;vt++){let zt=P[vt];et=nt[vt];for(let Wt=0,Xt=zt.length;Wt<Xt;Wt++){let N=G(zt[Wt],et[Wt],dt);x?xt(N.x,N.y+E[h-1].y,E[h-1].x+mt):xt(N.x,N.y,u+mt)}}}ut(),W();function ut(){let it=s.length/3;if(d){let ht=0,mt=X*ht;for(let dt=0;dt<jt;dt++){let vt=wt[dt];It(vt[2]+mt,vt[1]+mt,vt[0]+mt)}ht=h+m*2,mt=X*ht;for(let dt=0;dt<jt;dt++){let vt=wt[dt];It(vt[0]+mt,vt[1]+mt,vt[2]+mt)}}else{for(let ht=0;ht<jt;ht++){let mt=wt[ht];It(mt[2],mt[1],mt[0])}for(let ht=0;ht<jt;ht++){let mt=wt[ht];It(mt[0]+X*h,mt[1]+X*h,mt[2]+X*h)}}n.addGroup(it,s.length/3-it,0)}function W(){let it=s.length/3,ht=0;tt(F,ht),ht+=F.length;for(let mt=0,dt=P.length;mt<dt;mt++){let vt=P[mt];tt(vt,ht),ht+=vt.length}n.addGroup(it,s.length/3-it,1)}function tt(it,ht){let mt=it.length;for(;--mt>=0;){let dt=mt,vt=mt-1;vt<0&&(vt=it.length-1);for(let Vt=0,zt=h+m*2;Vt<zt;Vt++){let Wt=X*Vt,Xt=X*(Vt+1),N=ht+dt+Wt,le=ht+vt+Wt,Jt=ht+vt+Xt,C=ht+dt+Xt;yt(N,le,Jt,C)}}}function xt(it,ht,mt){l.push(it),l.push(ht),l.push(mt)}function It(it,ht,mt){kt(it),kt(ht),kt(mt);let dt=s.length/3,vt=_.generateTopUV(n,s,dt-3,dt-2,dt-1);ne(vt[0]),ne(vt[1]),ne(vt[2])}function yt(it,ht,mt,dt){kt(it),kt(ht),kt(dt),kt(ht),kt(mt),kt(dt);let vt=s.length/3,Vt=_.generateSideWallUV(n,s,vt-6,vt-3,vt-2,vt-1);ne(Vt[0]),ne(Vt[1]),ne(Vt[3]),ne(Vt[1]),ne(Vt[2]),ne(Vt[3])}function kt(it){s.push(l[it*3+0]),s.push(l[it*3+1]),s.push(l[it*3+2])}function ne(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Hm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new No[s.type]().fromJSON(s)),new i(n,t.options)}},zm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ot(r,a),new ot(o,l),new ot(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ot(a,1-l),new ot(c,1-u),new ot(d,1-g),new ot(v,1-p)]:[new ot(o,1-l),new ot(h,1-u),new ot(f,1-g),new ot(m,1-p)]}};function Hm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var sa=class i extends ve{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=se(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new D,d=new ot,f=new D,g=new D,v=new D,m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let _=0;_<=e;_++){let E=n+_*h*s,x=Math.sin(E),M=Math.cos(E);for(let S=0;S<=t.length-1;S++){u.x=t[S].x*x,u.y=t[S].y,u.z=t[S].x*M,a.push(u.x,u.y,u.z),d.x=_/e,d.y=S/(t.length-1),o.push(d.x,d.y);let A=l[3*S+0]*x,y=l[3*S+1],w=l[3*S+0]*M;c.push(A,y,w)}}for(let _=0;_<e;_++)for(let E=0;E<t.length-1;E++){let x=E+_*t.length,M=x,S=x+t.length,A=x+t.length+1,y=x+1;r.push(M,S,y),r.push(A,y,S)}this.setIndex(r),this.setAttribute("position",new te(a,3)),this.setAttribute("uv",new te(o,2)),this.setAttribute("normal",new te(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Ke=class i extends ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let _=p*d-a;for(let E=0;E<c;E++){let x=E*u-r;g.push(x,-_,0),v.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){let E=_+c*p,x=_+c*(p+1),M=_+1+c*(p+1),S=_+1+c*p;f.push(E,x,S),f.push(x,M,S)}this.setIndex(f),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(v,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var us=class i extends ve{constructor(t=new cn([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(r,3)),this.setAttribute("uv",new te(a,2));function c(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,g=d.holes;Kn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let _=g[m];Kn.isClockWise(_)===!0&&(g[m]=_.reverse())}let v=Kn.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let _=g[m];f=f.concat(_)}for(let m=0,p=f.length;m<p;m++){let _=f[m];s.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let m=0,p=v.length;m<p;m++){let _=v[m],E=_[0]+u,x=_[1]+u,M=_[2]+u;n.push(E,x,M),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Gm(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function Gm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var ra=class i extends ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new D,d=new D,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let _=[],E=p/n,x=a+E*o,M=t*Math.cos(x),S=Math.sqrt(t*t-M*M),A=0;p===0&&a===0?A=.5/e:p===n&&l===Math.PI&&(A=-.5/e);for(let y=0;y<=e;y++){let w=y/e,R=s+w*r;u.x=-S*Math.cos(R),u.y=M,u.z=S*Math.sin(R),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(w+A,1-E),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){let E=h[p][_+1],x=h[p][_],M=h[p+1][_],S=h[p+1][_+1];(p!==0||a>0)&&f.push(E,x,S),(p!==n-1||l<Math.PI)&&f.push(x,M,S)}this.setIndex(f),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(v,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var rr=class i extends ve{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new D,f=new D,g=new D;for(let v=0;v<=n;v++){let m=a+v/n*o;for(let p=0;p<=s;p++){let _=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),d.x=t*Math.cos(_),d.y=t*Math.sin(_),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let p=(s+1)*v+m-1,_=(s+1)*(v-1)+m-1,E=(s+1)*(v-1)+m,x=(s+1)*v+m;l.push(p,_,x),l.push(_,E,x)}this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Ei=class i extends ve{constructor(t=new Qr(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,l=new D,c=new ot,h=new D,u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(f,2));function v(){for(let E=0;E<e;E++)m(E);m(r===!1?e:0),_(),p()}function m(E){h=t.getPointAt(E/e,h);let x=a.normals[E],M=a.binormals[E];for(let S=0;S<=s;S++){let A=S/s*Math.PI*2,y=Math.sin(A),w=-Math.cos(A);l.x=w*x.x+y*M.x,l.y=w*x.y+y*M.y,l.z=w*x.z+y*M.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let E=1;E<=e;E++)for(let x=1;x<=s;x++){let M=(s+1)*(E-1)+(x-1),S=(s+1)*E+(x-1),A=(s+1)*E+x,y=(s+1)*(E-1)+x;g.push(M,S,y),g.push(S,A,y)}}function _(){for(let E=0;E<=e;E++)for(let x=0;x<=s;x++)c.x=E/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new No[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function gs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(vd(s))s.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(vd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function nn(i){let t={};for(let e=0;e<i.length;e++){let n=gs(i[e]);for(let s in n)t[s]=n[s]}return t}function vd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Vm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var dn={clone:gs,merge:nn},Wm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ye=class extends ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wm,this.fragmentShader=Xm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=Vm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ht().setHex(s.value);break;case"v2":this.uniforms[n].value=new ot().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Le().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Kt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ue().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Oo=class extends ye{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},me=class extends ei{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ea,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ze=class extends me{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return se(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var aa=class extends ei{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ea,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};var ar=class extends ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Bo=class extends ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var oa=class extends Xr{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function Ws(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Jc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Gi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ko=class extends Gi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qc,endingEnd:Qc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case th:r=t,o=2*e-n;break;case eh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case th:a=t,l=2*n-e;break;case eh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,E=(-1-f)*m+(1.5+f)*v+.5*g,x=f*m-f*v;for(let M=0;M!==o;++M)r[M]=p*a[h+M]+_*a[c+M]+E*a[l+M]+x*a[u+M];return r}},zo=class extends Gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Ho=class extends Gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Go=class extends Gi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-e)/(s-e),v=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*g;return r}let d=o*2,f=t-1;for(let g=0;g!==o;++g){let v=a[c+g],m=a[l+g],p=f*d+g*2,_=u[p],E=u[p+1],x=t*d+g*2,M=h[x],S=h[x+1],A=Ym(n,e,_,M,s);r[g]=ff(A,v,E,S,m)}return r}};function ff(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function qm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Ym(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=ff(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=qm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var En=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ws(e,this.TimeBufferType),this.values=Ws(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ws(t.times,Array),values:Ws(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Jc(t.settings)&&(n.settings={inTangents:Ws(t.settings.inTangents,Array),outTangents:Ws(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ho(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ko(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Go(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Fr:e=this.InterpolantFactoryMethodDiscrete;break;case To:e=this.InterpolantFactoryMethodLinear;break;case mo:e=this.InterpolantFactoryMethodSmooth;break;case jc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fr;case this.InterpolantFactoryMethodLinear:return To;case this.InterpolantFactoryMethodSmooth:return mo;case this.InterpolantFactoryMethodBezier:return jc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Jc(this.settings)&&(yd(this.settings.inTangents,t),yd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Zt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Zt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Zt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Jp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Zt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===mo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let v=e[u+g];if(v!==e[d+g]||v!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Jc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function yd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}En.prototype.ValueTypeName="";En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=To;var Vi=class extends En{constructor(t,e,n){super(t,e,n)}};Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=Fr;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Vo=class extends En{constructor(t,e,n,s){super(t,e,n,s)}};Vo.prototype.ValueTypeName="color";var Wo=class extends En{constructor(t,e,n,s){super(t,e,n,s)}};Wo.prototype.ValueTypeName="number";var Xo=class extends Gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)ti.slerpFlat(r,0,a,c-o,a,c,l);return r}},la=class extends En{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Xo(this.times,this.values,this.getValueSize(),t)}};la.prototype.ValueTypeName="quaternion";la.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends En{constructor(t,e,n){super(t,e,n)}};Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Fr;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var qo=class extends En{constructor(t,e,n,s){super(t,e,n,s)}};qo.prototype.ValueTypeName="vector";var Yo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pf=new Yo,Zo=class{constructor(t){this.manager=t!==void 0?t:pf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Zo.DEFAULT_MATERIAL_NAME="__DEFAULT";var or=class extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Kc=new ue,Md=new D,Sd=new D,lr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=$e,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Md.setFromMatrixPosition(t.matrixWorld),e.position.copy(Md),Sd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Kc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Kc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===$s||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Kc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},fo=new D,po=new ti,$n=new D,ca=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(fo,po,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fo,po,$n.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(fo,po,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fo,po,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ki=new D,bd=new ot,Ed=new ot,Ye=class extends ca{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=zr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Tc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(Tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ki.x,ki.y).multiplyScalar(-t/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-t/ki.z)}getViewSize(t,e){return this.getViewBounds(t,bd,Ed),e.subVectors(Ed,bd)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Tc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},rh=class extends lr{constructor(){super(new Ye(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=zr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},cr=class extends or{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new rh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},ah=class extends lr{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0}},ha=class extends or{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ah}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Xi=class extends ca{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},oh=class extends lr{constructor(){super(new Xi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ua=class extends or{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new oh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Xs=-90,qs=1,$o=class extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ye(Xs,qs,t,e);s.layers=this.layers,this.add(s);let r=new Ye(Xs,qs,t,e);r.layers=this.layers,this.add(r);let a=new Ye(Xs,qs,t,e);a.layers=this.layers,this.add(a);let o=new Ye(Xs,qs,t,e);o.layers=this.layers,this.add(o);let l=new Ye(Xs,qs,t,e);l.layers=this.layers,this.add(l);let c=new Ye(Xs,qs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Jo=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Fh="\\[\\]\\.:\\/",Zm=new RegExp("["+Fh+"]","g"),Oh="[^"+Fh+"]",$m="[^"+Fh.replace("\\.","")+"]",Jm=/((?:WC+[\/:])*)/.source.replace("WC",Oh),Km=/(WCOD+)?/.source.replace("WCOD",$m),jm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oh),Qm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oh),t0=new RegExp("^"+Jm+Km+jm+Qm+"$"),e0=["material","materials","bones","map"],lh=class{constructor(t,e,n){let s=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Zm,"")}static parseTrackName(t){let e=t0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);e0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Zt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=lh;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _y=new Float32Array(1);var Td=new ue,da=class{constructor(t,e,n=0,s=1/0){this.ray=new er(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Zt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Td.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Td),this}intersectObject(t,e=!0,n=[]){return ch(t,this,n,e),n.sort(wd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ch(t[s],this,n,e);return n.sort(wd),n}};function wd(i,t){return i.distance-t.distance}function ch(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)ch(r[a],t,e,!0)}}var Vh=class Vh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Vh.prototype.isMatrix2=!0;var hh=Vh;function Bh(i,t,e,n){let s=n0(n);switch(e){case Rh:return i*t;case Ph:return i*t/s.components*s.byteLength;case rl:return i*t/s.components*s.byteLength;case Ji:return i*t*2/s.components*s.byteLength;case al:return i*t*2/s.components*s.byteLength;case Ch:return i*t*3/s.components*s.byteLength;case _n:return i*t*4/s.components*s.byteLength;case ol:return i*t*4/s.components*s.byteLength;case _a:case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ya:case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cl:case ul:return Math.max(i,16)*Math.max(t,8)/4;case ll:case hl:return Math.max(i,8)*Math.max(t,8)/2;case dl:case fl:case ml:case gl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pl:case Sa:case xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _l:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case yl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case bl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case El:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case wl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Al:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Pl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Il:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ll:case Dl:case Ul:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Nl:case Fl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ba:case Ol:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function n0(i){switch(i){case $e:case Eh:return{byteLength:1,components:1};case dr:case Th:case Fe:return{byteLength:2,components:1};case il:case sl:return{byteLength:2,components:4};case Gn:case nl:case Vn:return{byteLength:4,components:1};case wh:case Ah:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ff(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function h0(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var u0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d0=`#ifdef USE_ALPHAHASH
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
#endif`,f0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x0=`#ifdef USE_AOMAP
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
#endif`,_0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v0=`#ifdef USE_BATCHING
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
#endif`,y0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,E0=`#ifdef USE_IRIDESCENCE
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
#endif`,T0=`#ifdef USE_BUMPMAP
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
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,I0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,U0=`#define PI 3.141592653589793
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
} // validated`,N0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,F0=`vec3 transformedNormal = objectNormal;
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
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H0="gl_FragColor = linearToOutputTexel( gl_FragColor );",G0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,V0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j0=`#ifdef USE_GRADIENTMAP
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
}`,Q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ng=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lg=`PhysicalMaterial material;
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
#endif`,cg=`uniform sampler2D dfgLUT;
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
}`,hg=`
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
#endif`,ug=`#if defined( RE_IndirectDiffuse )
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
#endif`,dg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,pg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_g=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mg=`#if defined( USE_POINTS_UV )
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
#endif`,Sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ag=`#ifdef USE_MORPHTARGETS
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
#endif`,Rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ug=`#ifdef USE_NORMALMAP
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
#endif`,Ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Og=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$g=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jg=`float getShadowMask() {
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
}`,Kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jg=`#ifdef USE_SKINNING
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
#endif`,Qg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tx=`#ifdef USE_SKINNING
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
#endif`,ex=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rx=`#ifdef USE_TRANSMISSION
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
#endif`,ax=`#ifdef USE_TRANSMISSION
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
#endif`,ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ux=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dx=`uniform sampler2D t2D;
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
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,px=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`#include <common>
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
}`,_x=`#if DEPTH_PACKING == 3200
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
}`,vx=`#define DISTANCE
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
}`,yx=`#define DISTANCE
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
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`uniform float scale;
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
}`,Ex=`uniform vec3 diffuse;
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
}`,Tx=`#include <common>
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
}`,wx=`uniform vec3 diffuse;
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
}`,Ax=`#define LAMBERT
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
}`,Rx=`#define LAMBERT
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
}`,Cx=`#define MATCAP
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
}`,Px=`#define MATCAP
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
}`,Ix=`#define NORMAL
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
}`,Lx=`#define NORMAL
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
}`,Dx=`#define PHONG
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
}`,Ux=`#define PHONG
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
}`,Nx=`#define STANDARD
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
}`,Fx=`#define STANDARD
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
}`,Ox=`#define TOON
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
}`,Bx=`#define TOON
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
}`,kx=`uniform float size;
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
}`,zx=`uniform vec3 diffuse;
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
}`,Hx=`#include <common>
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
}`,Gx=`uniform vec3 color;
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
}`,Vx=`uniform float rotation;
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
}`,Wx=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:u0,alphahash_pars_fragment:d0,alphamap_fragment:f0,alphamap_pars_fragment:p0,alphatest_fragment:m0,alphatest_pars_fragment:g0,aomap_fragment:x0,aomap_pars_fragment:_0,batching_pars_vertex:v0,batching_vertex:y0,begin_vertex:M0,beginnormal_vertex:S0,bsdfs:b0,iridescence_fragment:E0,bumpmap_pars_fragment:T0,clipping_planes_fragment:w0,clipping_planes_pars_fragment:A0,clipping_planes_pars_vertex:R0,clipping_planes_vertex:C0,color_fragment:P0,color_pars_fragment:I0,color_pars_vertex:L0,color_vertex:D0,common:U0,cube_uv_reflection_fragment:N0,defaultnormal_vertex:F0,displacementmap_pars_vertex:O0,displacementmap_vertex:B0,emissivemap_fragment:k0,emissivemap_pars_fragment:z0,colorspace_fragment:H0,colorspace_pars_fragment:G0,envmap_fragment:V0,envmap_common_pars_fragment:W0,envmap_pars_fragment:X0,envmap_pars_vertex:q0,envmap_physical_pars_fragment:ig,envmap_vertex:Y0,fog_vertex:Z0,fog_pars_vertex:$0,fog_fragment:J0,fog_pars_fragment:K0,gradientmap_pars_fragment:j0,lightmap_pars_fragment:Q0,lights_lambert_fragment:tg,lights_lambert_pars_fragment:eg,lights_pars_begin:ng,lights_toon_fragment:sg,lights_toon_pars_fragment:rg,lights_phong_fragment:ag,lights_phong_pars_fragment:og,lights_physical_fragment:lg,lights_physical_pars_fragment:cg,lights_fragment_begin:hg,lights_fragment_maps:ug,lights_fragment_end:dg,lightprobes_pars_fragment:fg,logdepthbuf_fragment:pg,logdepthbuf_pars_fragment:mg,logdepthbuf_pars_vertex:gg,logdepthbuf_vertex:xg,map_fragment:_g,map_pars_fragment:vg,map_particle_fragment:yg,map_particle_pars_fragment:Mg,metalnessmap_fragment:Sg,metalnessmap_pars_fragment:bg,morphinstance_vertex:Eg,morphcolor_vertex:Tg,morphnormal_vertex:wg,morphtarget_pars_vertex:Ag,morphtarget_vertex:Rg,normal_fragment_begin:Cg,normal_fragment_maps:Pg,normal_pars_fragment:Ig,normal_pars_vertex:Lg,normal_vertex:Dg,normalmap_pars_fragment:Ug,clearcoat_normal_fragment_begin:Ng,clearcoat_normal_fragment_maps:Fg,clearcoat_pars_fragment:Og,iridescence_pars_fragment:Bg,opaque_fragment:kg,packing:zg,premultiplied_alpha_fragment:Hg,project_vertex:Gg,dithering_fragment:Vg,dithering_pars_fragment:Wg,roughnessmap_fragment:Xg,roughnessmap_pars_fragment:qg,shadowmap_pars_fragment:Yg,shadowmap_pars_vertex:Zg,shadowmap_vertex:$g,shadowmask_pars_fragment:Jg,skinbase_vertex:Kg,skinning_pars_vertex:jg,skinning_vertex:Qg,skinnormal_vertex:tx,specularmap_fragment:ex,specularmap_pars_fragment:nx,tonemapping_fragment:ix,tonemapping_pars_fragment:sx,transmission_fragment:rx,transmission_pars_fragment:ax,uv_pars_fragment:ox,uv_pars_vertex:lx,uv_vertex:cx,worldpos_vertex:hx,background_vert:ux,background_frag:dx,backgroundCube_vert:fx,backgroundCube_frag:px,cube_vert:mx,cube_frag:gx,depth_vert:xx,depth_frag:_x,distance_vert:vx,distance_frag:yx,equirect_vert:Mx,equirect_frag:Sx,linedashed_vert:bx,linedashed_frag:Ex,meshbasic_vert:Tx,meshbasic_frag:wx,meshlambert_vert:Ax,meshlambert_frag:Rx,meshmatcap_vert:Cx,meshmatcap_frag:Px,meshnormal_vert:Ix,meshnormal_frag:Lx,meshphong_vert:Dx,meshphong_frag:Ux,meshphysical_vert:Nx,meshphysical_frag:Fx,meshtoon_vert:Ox,meshtoon_frag:Bx,points_vert:kx,points_frag:zx,shadow_vert:Hx,shadow_frag:Gx,sprite_vert:Vx,sprite_frag:Wx},Rt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},oi={basic:{uniforms:nn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:nn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:nn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:nn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:nn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:nn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:nn([Rt.points,Rt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:nn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:nn([Rt.common,Rt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:nn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:nn([Rt.sprite,Rt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:nn([Rt.common,Rt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:nn([Rt.lights,Rt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};oi.physical={uniforms:nn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var zl={r:0,b:0,g:0},Xx=new ue,Of=new Kt;Of.set(-1,0,0,0,1,0,0,0,1);function qx(i,t,e,n,s,r){let a=new Ht(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(_){let E=_.isScene===!0?_.background:null;if(E&&E.isTexture){let x=_.backgroundBlurriness>0;E=t.get(E,x)}return E}function g(_){let E=!1,x=f(_);x===null?m(a,o):x&&x.isColor&&(m(x,1),E=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(_,E){let x=f(E);x&&(x.isCubeTexture||x.mapping===ga)?(c===void 0&&(c=new _e(new de(1,1,1),new ye({name:"BackgroundCubeMaterial",uniforms:gs(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Xx.makeRotationFromEuler(E.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Of),c.material.toneMapped=ce.getTransfer(x.colorSpace)!==xe,(h!==x||u!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new _e(new Ke(2,2),new ye({name:"BackgroundMaterial",uniforms:gs(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ce.getTransfer(x.colorSpace)!==xe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,d=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,E){_.getRGB(zl,Nh(i)),e.buffers.color.setClear(zl.r,zl.g,zl.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,E=1){a.set(_),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:g,addToRenderList:v,dispose:p}}function Yx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(P,U,B,I,F){let G=!1,X=u(P,I,B,U);r!==X&&(r=X,c(r.object)),G=f(P,I,B,F),G&&g(P,I,B,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,x(P,U,B,I),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function u(P,U,B,I){let F=I.wireframe===!0,G=n[U.id];G===void 0&&(G={},n[U.id]=G);let X=P.isInstancedMesh===!0?P.id:0,rt=G[X];rt===void 0&&(rt={},G[X]=rt);let $=rt[B.id];$===void 0&&($={},rt[B.id]=$);let nt=$[F];return nt===void 0&&(nt=d(l()),$[F]=nt),nt}function d(P){let U=[],B=[],I=[];for(let F=0;F<e;F++)U[F]=0,B[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:I,object:P,attributes:{},index:null}}function f(P,U,B,I){let F=r.attributes,G=U.attributes,X=0,rt=B.getAttributes();for(let $ in rt)if(rt[$].location>=0){let et=F[$],At=G[$];if(At===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(At=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(At=P.instanceColor)),et===void 0||et.attribute!==At||At&&et.data!==At.data)return!0;X++}return r.attributesNum!==X||r.index!==I}function g(P,U,B,I){let F={},G=U.attributes,X=0,rt=B.getAttributes();for(let $ in rt)if(rt[$].location>=0){let et=G[$];et===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(et=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(et=P.instanceColor));let At={};At.attribute=et,et&&et.data&&(At.data=et.data),F[$]=At,X++}r.attributes=F,r.attributesNum=X,r.index=I}function v(){let P=r.newAttributes;for(let U=0,B=P.length;U<B;U++)P[U]=0}function m(P){p(P,0)}function p(P,U){let B=r.newAttributes,I=r.enabledAttributes,F=r.attributeDivisors;B[P]=1,I[P]===0&&(i.enableVertexAttribArray(P),I[P]=1),F[P]!==U&&(i.vertexAttribDivisor(P,U),F[P]=U)}function _(){let P=r.newAttributes,U=r.enabledAttributes;for(let B=0,I=U.length;B<I;B++)U[B]!==P[B]&&(i.disableVertexAttribArray(B),U[B]=0)}function E(P,U,B,I,F,G,X){X===!0?i.vertexAttribIPointer(P,U,B,F,G):i.vertexAttribPointer(P,U,B,I,F,G)}function x(P,U,B,I){v();let F=I.attributes,G=B.getAttributes(),X=U.defaultAttributeValues;for(let rt in G){let $=G[rt];if($.location>=0){let nt=F[rt];if(nt===void 0&&(rt==="instanceMatrix"&&P.instanceMatrix&&(nt=P.instanceMatrix),rt==="instanceColor"&&P.instanceColor&&(nt=P.instanceColor)),nt!==void 0){let et=nt.normalized,At=nt.itemSize,wt=t.get(nt);if(wt===void 0)continue;let jt=wt.buffer,$t=wt.type,ut=wt.bytesPerElement,W=$t===i.INT||$t===i.UNSIGNED_INT||nt.gpuType===nl;if(nt.isInterleavedBufferAttribute){let tt=nt.data,xt=tt.stride,It=nt.offset;if(tt.isInstancedInterleavedBuffer){for(let yt=0;yt<$.locationSize;yt++)p($.location+yt,tt.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let yt=0;yt<$.locationSize;yt++)m($.location+yt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let yt=0;yt<$.locationSize;yt++)E($.location+yt,At/$.locationSize,$t,et,xt*ut,(It+At/$.locationSize*yt)*ut,W)}else{if(nt.isInstancedBufferAttribute){for(let tt=0;tt<$.locationSize;tt++)p($.location+tt,nt.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let tt=0;tt<$.locationSize;tt++)m($.location+tt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let tt=0;tt<$.locationSize;tt++)E($.location+tt,At/$.locationSize,$t,et,At*ut,At/$.locationSize*tt*ut,W)}}else if(X!==void 0){let et=X[rt];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv($.location,et);break;case 3:i.vertexAttrib3fv($.location,et);break;case 4:i.vertexAttrib4fv($.location,et);break;default:i.vertexAttrib1fv($.location,et)}}}}_()}function M(){w();for(let P in n){let U=n[P];for(let B in U){let I=U[B];for(let F in I){let G=I[F];for(let X in G)h(G[X].object),delete G[X];delete I[F]}}delete n[P]}}function S(P){if(n[P.id]===void 0)return;let U=n[P.id];for(let B in U){let I=U[B];for(let F in I){let G=I[F];for(let X in G)h(G[X].object),delete G[X];delete I[F]}}delete n[P.id]}function A(P){for(let U in n){let B=n[U];for(let I in B){let F=B[I];if(F[P.id]===void 0)continue;let G=F[P.id];for(let X in G)h(G[X].object),delete G[X];delete F[P.id]}}}function y(P){for(let U in n){let B=n[U],I=P.isInstancedMesh===!0?P.id:0,F=B[I];if(F!==void 0){for(let G in F){let X=F[G];for(let rt in X)h(X[rt].object),delete X[rt];delete F[G]}delete B[I],Object.keys(B).length===0&&delete n[U]}}}function w(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function Zx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function $x(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==_n&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let y=A===Fe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==$e&&A!==Vn&&!y&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:x,maxSamples:M,samples:S}}function Jx(i){let t=this,e=null,n=0,s=!1,r=!1,a=new kn,o=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,E=_*4,x=p.clippingState||null;l.value=x,x=h(g,d,E,f);for(let M=0;M!==E;++M)x[M]=e[M];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,x=f;E!==v;++E,x+=4)a.copy(u[E]).applyMatrix4(_,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var mr=4,Kx=6,jx=20,Qx=256,Ta=new Xi,mf=new Ht,Wh=null,Xh=0,qh=0,Yh=!1,t1=new D,xs=new D,xr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=t1}=r;Wh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Wh,Xh,qh),this._renderer.xr.enabled=Yh,t.scissorTest=!1,pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yi||t.mapping===ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:Fe,format:_n,colorSpace:Or,depthBuffer:!1},s=gf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=e1(r)),this._blurMaterial=i1(r,t,e),this._ggxMaterial=n1(r,t,e)}return s}_compileMaterial(t){let e=new _e(new ve,t);this._renderer.compile(e,Ta)}_sceneToCubeUV(t,e,n,s,r){let l=new Ye(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(mf),u.toneMapping=Hn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _e(new de,new ln({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,_=t.background;_?_.isColor&&(m.color.copy(_),t.background=null,p=!0):(m.color.copy(mf),p=!0);for(let E=0;E<6;E++){let x=E%3;x===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):x===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let M=this._cubeSize;pr(s,x*M,E>2?M:0,M,M),u.setRenderTarget(s),p&&u.render(v,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Yi||t.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_f()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;pr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ta)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-mr?n-g+mr:0),p=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,pr(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,Ta),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,pr(t,m,p,3*v,2*v),s.setRenderTarget(t),s.render(o,Ta)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-mr?s-this._lodMax+mr:0),d=4*(this._cubeSize-h);pr(e,u,d,3*h,2*h),a.setRenderTarget(e),a.render(l,Ta)}};function e1(i){let t=[],e=[],n=i,s=i-mr+1+Kx;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,g=new Float32Array(f*d*u),v=new Float32Array(f*d*u);for(let p=0;p<u;p++){let _=p%3*2/3-1,E=p>2?0:-1,x=[_,E,0,_+2/3,E,0,_+2/3,E+1,0,_,E,0,_+2/3,E+1,0,_,E+1,0];g.set(x,f*d*p);for(let M=0;M<d;M++){let S=h[M*2]*2-1,A=h[M*2+1]*2-1;p===0?xs.set(1,A,S):p===1?xs.set(-S,1,-A):p===2?xs.set(-S,A,1):p===3?xs.set(-1,A,-S):p===4?xs.set(-S,-1,A):xs.set(S,A,-1),xs.toArray(v,(p*d+M)*f)}}let m=new ve;m.setAttribute("position",new gn(g,f)),m.setAttribute("outputDirection",new gn(v,f)),e.push(new _e(m,null)),n>mr&&n--}return{lodMeshes:e,sizeLods:t}}function gf(i,t,e){let n=new Ue(i,t,e);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function n1(i,t,e){return new ye({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Qx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:Be,depthTest:!1,depthWrite:!1})}function i1(i,t,e){return new ye({name:"SphericalGaussianBlur",defines:{SAMPLES:jx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:Be,depthTest:!1,depthWrite:!1})}function xf(){return new ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:Be,depthTest:!1,depthWrite:!1})}function _f(){return new ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Be,depthTest:!1,depthWrite:!1})}function Wl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Gl=class extends Ue{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Yr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new de(5,5,5),r=new ye({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:Be});r.uniforms.tEquirect.value=e;let a=new _e(s,r),o=e.minFilter;return e.minFilter===Zi&&(e.minFilter=Je),new $o(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function s1(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Qo||f===tl)if(t.has(d)){let g=t.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let v=new Gl(g.height);return v.fromEquirectangularTexture(i,d),t.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,g=f===Qo||f===tl,v=f===Yi||f===ms;if(g||v){let m=e.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new xr(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let _=d.image;return g&&_&&_.height>0||v&&_&&l(_)?(n===null&&(n=new xr(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Qo?d.mapping=Yi:f===tl&&(d.mapping=ms),d}function l(d){let f=0,g=6;for(let v=0;v<g;v++)d[v]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function r1(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ls("WebGLRenderer: "+n+" extension not supported."),s}}}function a1(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,v=0;if(g===void 0)return;if(f!==null){let _=f.array;v=f.version;for(let E=0,x=_.length;E<x;E+=3){let M=_[E+0],S=_[E+1],A=_[E+2];d.push(M,S,S,A,A,M)}}else{let _=g.array;v=g.version;for(let E=0,x=_.length/3-1;E<x;E+=3){let M=E+0,S=E+1,A=E+2;d.push(M,S,S,A,A,M)}}let m=new(g.count>=65535?Wr:Vr)(d,1);m.version=v;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function o1(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),e.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let m=0;m<f;m++)v+=d[m];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function l1(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Zt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function c1(i,t,e){let n=new WeakMap,s=new Le;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let w=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let x=o.attributes.position.count*E,M=1;x>t.maxTextureSize&&(M=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let S=new Float32Array(x*M*4*u),A=new Hr(S,x,M,u);A.type=Vn,A.needsUpdate=!0;let y=E*4;for(let R=0;R<u;R++){let P=m[R],U=p[R],B=_[R],I=x*M*4*R;for(let F=0;F<P.count;F++){let G=F*y;f===!0&&(s.fromBufferAttribute(P,F),S[I+G+0]=s.x,S[I+G+1]=s.y,S[I+G+2]=s.z,S[I+G+3]=0),g===!0&&(s.fromBufferAttribute(U,F),S[I+G+4]=s.x,S[I+G+5]=s.y,S[I+G+6]=s.z,S[I+G+7]=0),v===!0&&(s.fromBufferAttribute(B,F),S[I+G+8]=s.x,S[I+G+9]=s.y,S[I+G+10]=s.z,S[I+G+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new ot(x,M)},n.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function h1(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var u1={[xh]:"LINEAR_TONE_MAPPING",[_h]:"REINHARD_TONE_MAPPING",[vh]:"CINEON_TONE_MAPPING",[yh]:"ACES_FILMIC_TONE_MAPPING",[Mh]:"AGX_TONE_MAPPING",[Sh]:"NEUTRAL_TONE_MAPPING",[ma]:"CUSTOM_TONE_MAPPING"};function d1(i,t,e,n,s,r){let a=new Ue(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ve;c.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new te([0,2,0,0,2,0],2));let h=new Oo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new _e(c,h),d=new Xi(-1,1,1,-1,0,1),f=null,g=null,v=!1,m,p=null,_=[],E=!1;this.setSize=function(x,M){a.setSize(x,M),o!==null&&o.setSize(x,M),l!==null&&l.setSize(x,M);for(let S=0;S<_.length;S++){let A=_[S];A.setSize&&A.setSize(x,M)}},this.setEffects=function(x){_=x,E=_.length>0&&_[0].isRenderPass===!0;let M=a.width,S=a.height;_.length>0&&o===null&&(o=new Ue(M,S,{type:Fe,depthBuffer:!1,stencilBuffer:!1}),l=new Ue(M,S,{type:Fe,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<_.length;A++){let y=_[A];y.setSize&&y.setSize(M,S)}},this.begin=function(x,M){if(v||x.toneMapping===Hn&&_.length===0)return!1;if(p=M,M!==null){let S=M.width,A=M.height;(a.width!==S||a.height!==A)&&this.setSize(S,A)}return E===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=Hn,!0},this.hasRenderPass=function(){return E},this.end=function(x,M){x.toneMapping=m,v=!0;let S=a,A=o;for(let y=0;y<_.length;y++){let w=_[y];w.enabled!==!1&&(w.render(x,A,S,M),w.needsSwap!==!1&&(S=A,A=A===o?l:o))}if(f!==x.outputColorSpace||g!==x.toneMapping){f=x.outputColorSpace,g=x.toneMapping,h.defines={},ce.getTransfer(f)===xe&&(h.defines.SRGB_TRANSFER="");let y=u1[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(p),x.render(u,d),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Bf=new on,Jh=new ni(1,1),kf=new Hr,zf=new Ro,Hf=new Yr,vf=[],yf=[],Mf=new Float32Array(16),Sf=new Float32Array(9),bf=new Float32Array(4);function _r(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=vf[s];if(r===void 0&&(r=new Float32Array(s),vf[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function We(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Xl(i,t){let e=yf[t];e===void 0&&(e=new Int32Array(t),yf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function f1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function p1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2fv(this.addr,t),Xe(e,t)}}function m1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;i.uniform3fv(this.addr,t),Xe(e,t)}}function g1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4fv(this.addr,t),Xe(e,t)}}function x1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;bf.set(n),i.uniformMatrix2fv(this.addr,!1,bf),Xe(e,n)}}function _1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Sf.set(n),i.uniformMatrix3fv(this.addr,!1,Sf),Xe(e,n)}}function v1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Mf.set(n),i.uniformMatrix4fv(this.addr,!1,Mf),Xe(e,n)}}function y1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function M1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2iv(this.addr,t),Xe(e,t)}}function S1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3iv(this.addr,t),Xe(e,t)}}function b1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4iv(this.addr,t),Xe(e,t)}}function E1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function T1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2uiv(this.addr,t),Xe(e,t)}}function w1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3uiv(this.addr,t),Xe(e,t)}}function A1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4uiv(this.addr,t),Xe(e,t)}}function R1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Jh.compareFunction=e.isReversedDepthBuffer()?kl:Bl,r=Jh):r=Bf,e.setTexture2D(t||r,s)}function C1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||zf,s)}function P1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Hf,s)}function I1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||kf,s)}function L1(i){switch(i){case 5126:return f1;case 35664:return p1;case 35665:return m1;case 35666:return g1;case 35674:return x1;case 35675:return _1;case 35676:return v1;case 5124:case 35670:return y1;case 35667:case 35671:return M1;case 35668:case 35672:return S1;case 35669:case 35673:return b1;case 5125:return E1;case 36294:return T1;case 36295:return w1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return R1;case 35679:case 36299:case 36307:return C1;case 35680:case 36300:case 36308:case 36293:return P1;case 36289:case 36303:case 36311:case 36292:return I1}}function D1(i,t){i.uniform1fv(this.addr,t)}function U1(i,t){let e=_r(t,this.size,2);i.uniform2fv(this.addr,e)}function N1(i,t){let e=_r(t,this.size,3);i.uniform3fv(this.addr,e)}function F1(i,t){let e=_r(t,this.size,4);i.uniform4fv(this.addr,e)}function O1(i,t){let e=_r(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function B1(i,t){let e=_r(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function k1(i,t){let e=_r(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function z1(i,t){i.uniform1iv(this.addr,t)}function H1(i,t){i.uniform2iv(this.addr,t)}function G1(i,t){i.uniform3iv(this.addr,t)}function V1(i,t){i.uniform4iv(this.addr,t)}function W1(i,t){i.uniform1uiv(this.addr,t)}function X1(i,t){i.uniform2uiv(this.addr,t)}function q1(i,t){i.uniform3uiv(this.addr,t)}function Y1(i,t){i.uniform4uiv(this.addr,t)}function Z1(i,t,e){let n=this.cache,s=t.length,r=Xl(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Jh:a=Bf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function $1(i,t,e){let n=this.cache,s=t.length,r=Xl(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||zf,r[a])}function J1(i,t,e){let n=this.cache,s=t.length,r=Xl(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Hf,r[a])}function K1(i,t,e){let n=this.cache,s=t.length,r=Xl(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||kf,r[a])}function j1(i){switch(i){case 5126:return D1;case 35664:return U1;case 35665:return N1;case 35666:return F1;case 35674:return O1;case 35675:return B1;case 35676:return k1;case 5124:case 35670:return z1;case 35667:case 35671:return H1;case 35668:case 35672:return G1;case 35669:case 35673:return V1;case 5125:return W1;case 36294:return X1;case 36295:return q1;case 36296:return Y1;case 35678:case 36198:case 36298:case 36306:case 35682:return Z1;case 35679:case 36299:case 36307:return $1;case 35680:case 36300:case 36308:case 36293:return J1;case 36289:case 36303:case 36311:case 36292:return K1}}var Kh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=L1(e.type)}},jh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=j1(e.type)}},Qh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Zh=/(\w+)(\])?(\[|\.)?/g;function Ef(i,t){i.seq.push(t),i.map[t.id]=t}function Q1(i,t,e){let n=i.name,s=n.length;for(Zh.lastIndex=0;;){let r=Zh.exec(n),a=Zh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ef(e,c===void 0?new Kh(o,i,t):new jh(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Qh(o),Ef(e,u)),e=u}}}var gr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Q1(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Tf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var t_=37297,e_=0;function n_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var wf=new Kt;function i_(i){ce._getMatrix(wf,ce.workingColorSpace,i);let t=`mat3( ${wf.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case Br:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Af(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+n_(i.getShaderSource(t),o)}else return r}function s_(i,t){let e=i_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var r_={[xh]:"Linear",[_h]:"Reinhard",[vh]:"Cineon",[yh]:"ACESFilmic",[Mh]:"AgX",[Sh]:"Neutral",[ma]:"Custom"};function a_(i,t){let e=r_[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Hl=new D;function o_(){ce.getLuminanceCoefficients(Hl);let i=Hl.x.toFixed(4),t=Hl.y.toFixed(4),e=Hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Aa).join(`
`)}function c_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function h_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Aa(i){return i!==""}function Rf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var u_=/^[ \t]*#include +<([\w\d./]+)>/gm;function tu(i){return i.replace(u_,f_)}var d_=new Map;function f_(i,t){let e=Qt[t];if(e===void 0){let n=d_.get(t);if(n!==void 0)e=Qt[n],qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return tu(e)}var p_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pf(i){return i.replace(p_,m_)}function m_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function If(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var g_={[ds]:"SHADOWMAP_TYPE_PCF",[hr]:"SHADOWMAP_TYPE_VSM"};function x_(i){return g_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var __={[Yi]:"ENVMAP_TYPE_CUBE",[ms]:"ENVMAP_TYPE_CUBE",[ga]:"ENVMAP_TYPE_CUBE_UV"};function v_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":__[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var y_={[ms]:"ENVMAP_MODE_REFRACTION"};function M_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":y_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var S_={[gh]:"ENVMAP_BLENDING_MULTIPLY",[Wd]:"ENVMAP_BLENDING_MIX",[Xd]:"ENVMAP_BLENDING_ADD"};function b_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":S_[i.combine]||"ENVMAP_BLENDING_NONE"}function E_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function T_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=x_(e),c=v_(e),h=M_(e),u=b_(e),d=E_(e),f=l_(e),g=c_(r),v=s.createProgram(),m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Aa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Aa).join(`
`),p.length>0&&(p+=`
`)):(m=[If(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Aa).join(`
`),p=[If(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Hn?a_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,s_("linearToOutputTexel",e.outputColorSpace),o_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Aa).join(`
`)),a=tu(a),a=Rf(a,e),a=Cf(a,e),o=tu(o),o=Rf(o,e),o=Cf(o,e),a=Pf(a),o=Pf(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=_+m+a,x=_+p+o,M=Tf(s,s.VERTEX_SHADER,E),S=Tf(s,s.FRAGMENT_SHADER,x);s.attachShader(v,M),s.attachShader(v,S),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(P){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(v)||"",B=s.getShaderInfoLog(M)||"",I=s.getShaderInfoLog(S)||"",F=U.trim(),G=B.trim(),X=I.trim(),rt=!0,$=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(rt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,M,S);else{let nt=Af(s,M,"vertex"),et=Af(s,S,"fragment");Zt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+nt+`
`+et)}else F!==""?qt("WebGLProgram: Program Info Log:",F):(G===""||X==="")&&($=!1);$&&(P.diagnostics={runnable:rt,programLog:F,vertexShader:{log:G,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(M),s.deleteShader(S),y=new gr(s,v),w=h_(s,v)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(v,t_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=e_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=S,this}var w_=0,eu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new nu(t),e.set(t,n)),n}},nu=class{constructor(t){this.id=w_++,this.code=t,this.usedTimes=0}};function A_(i){return i===Ji||i===Sa||i===ba}function R_(i,t,e,n,s,r){let a=new js,o=new eu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,w,R,P,U,B){let I=P.fog,F=U.geometry,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,rt=t.get(y.envMap||G,X),$=rt&&rt.mapping===ga?rt.image.height:null,nt=f[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&qt("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let et=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,At=et!==void 0?et.length:0,wt=0;F.morphAttributes.position!==void 0&&(wt=1),F.morphAttributes.normal!==void 0&&(wt=2),F.morphAttributes.color!==void 0&&(wt=3);let jt,$t,ut,W;if(nt){let Me=oi[nt];jt=Me.vertexShader,$t=Me.fragmentShader}else{jt=y.vertexShader,$t=y.fragmentShader;let Me=o.getVertexShaderStage(y),pe=o.getFragmentShaderStage(y);o.update(y,Me,pe),ut=Me.id,W=pe.id}let tt=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),It=U.isInstancedMesh===!0,yt=U.isBatchedMesh===!0,kt=!!y.map,ne=!!y.matcap,it=!!rt,ht=!!y.aoMap,mt=!!y.lightMap,dt=!!y.bumpMap&&y.wireframe===!1,vt=!!y.normalMap,Vt=!!y.displacementMap,zt=!!y.emissiveMap,Wt=!!y.metalnessMap,Xt=!!y.roughnessMap,N=y.anisotropy>0,le=y.clearcoat>0,Jt=y.dispersion>0,C=y.retroreflectivity>0,b=y.iridescence>0,z=y.sheen>0,q=y.transmission>0,Q=N&&!!y.anisotropyMap,H=le&&!!y.clearcoatMap,J=le&&!!y.clearcoatNormalMap,V=le&&!!y.clearcoatRoughnessMap,j=b&&!!y.iridescenceMap,pt=b&&!!y.iridescenceThicknessMap,bt=z&&!!y.sheenColorMap,at=z&&!!y.sheenRoughnessMap,ct=!!y.specularMap,Mt=!!y.specularColorMap,Ut=!!y.specularIntensityMap,Yt=q&&!!y.transmissionMap,k=q&&!!y.thicknessMap,St=!!y.gradientMap,st=!!y.alphaMap,_t=y.alphaTest>0,Et=!!y.alphaHash,lt=!!y.extensions,Bt=Hn;y.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Bt=i.toneMapping);let Nt={shaderID:nt,shaderType:y.type,shaderName:y.name,vertexShader:jt,fragmentShader:$t,defines:y.defines,customVertexShaderID:ut,customFragmentShaderID:W,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:yt,batchingColor:yt&&U._colorsTexture!==null,instancing:It,instancingColor:It&&U.instanceColor!==null,instancingMorph:It&&U.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:kt,matcap:ne,envMap:it,envMapMode:it&&rt.mapping,envMapCubeUVHeight:$,aoMap:ht,lightMap:mt,bumpMap:dt,normalMap:vt,displacementMap:Vt,emissiveMap:zt,normalMapObjectSpace:vt&&y.normalMapType===Zd,normalMapTangentSpace:vt&&y.normalMapType===Ea,packedNormalMap:vt&&y.normalMapType===Ea&&A_(y.normalMap.format),metalnessMap:Wt,roughnessMap:Xt,anisotropy:N,anisotropyMap:Q,clearcoat:le,clearcoatMap:H,clearcoatNormalMap:J,clearcoatRoughnessMap:V,dispersion:Jt,retroreflection:C,iridescence:b,iridescenceMap:j,iridescenceThicknessMap:pt,sheen:z,sheenColorMap:bt,sheenRoughnessMap:at,specularMap:ct,specularColorMap:Mt,specularIntensityMap:Ut,transmission:q,transmissionMap:Yt,thicknessMap:k,gradientMap:St,opaque:y.transparent===!1&&y.blending===ur&&y.alphaToCoverage===!1,alphaMap:st,alphaTest:_t,alphaHash:Et,combine:y.combine,mapUv:kt&&g(y.map.channel),aoMapUv:ht&&g(y.aoMap.channel),lightMapUv:mt&&g(y.lightMap.channel),bumpMapUv:dt&&g(y.bumpMap.channel),normalMapUv:vt&&g(y.normalMap.channel),displacementMapUv:Vt&&g(y.displacementMap.channel),emissiveMapUv:zt&&g(y.emissiveMap.channel),metalnessMapUv:Wt&&g(y.metalnessMap.channel),roughnessMapUv:Xt&&g(y.roughnessMap.channel),anisotropyMapUv:Q&&g(y.anisotropyMap.channel),clearcoatMapUv:H&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:J&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:at&&g(y.sheenRoughnessMap.channel),specularMapUv:ct&&g(y.specularMap.channel),specularColorMapUv:Mt&&g(y.specularColorMap.channel),specularIntensityMapUv:Ut&&g(y.specularIntensityMap.channel),transmissionMapUv:Yt&&g(y.transmissionMap.channel),thicknessMapUv:k&&g(y.thicknessMap.channel),alphaMapUv:st&&g(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(vt||N),vertexNormals:!!F.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(kt||st),fog:!!I,useFog:y.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||F.attributes.normal===void 0&&vt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:wt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:kt&&y.map.isVideoTexture===!0&&ce.getTransfer(y.map.colorSpace)===xe,decodeVideoTextureEmissive:zt&&y.emissiveMap.isVideoTexture===!0&&ce.getTransfer(y.emissiveMap.colorSpace)===xe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===un,flipSided:y.side===hn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:lt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&y.extensions.multiDraw===!0||yt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function m(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)w.push(R),w.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(p(w,y),_(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function p(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function _(y,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function E(y){let w=f[y.type],R;if(w){let P=oi[w];R=dn.clone(P.uniforms)}else R=y.uniforms;return R}function x(y,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new T_(i,w,y,s),c.push(R),h.set(w,R)),R}function M(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function S(y){o.remove(y)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:E,acquireProgram:x,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:A}}function C_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function P_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Lf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Df(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,v,m,p){let _=i[t];return _===void 0?(_={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:p},i[t]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=g,_.materialVariant=a(d),_.groupOrder=v,_.renderOrder=d.renderOrder,_.z=m,_.group=p),t++,_}function l(d,f,g,v,m,p,_){_.reversedDepth===!0&&(m=-m);let E=o(d,f,g,v,m,p);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):e.push(E)}function c(d,f,g,v,m,p){let _=o(d,f,g,v,m,p);g.transmission>0?n.unshift(_):g.transparent===!0?s.unshift(_):e.unshift(_)}function h(d,f){e.length>1&&e.sort(d||P_),n.length>1&&n.sort(f||Lf),s.length>1&&s.sort(f||Lf)}function u(){for(let d=t,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function I_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Df,i.set(n,[a])):s>=r.length?(a=new Df,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function L_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new Ht};break;case"SpotLight":e={position:new D,direction:new D,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function D_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var U_=0;function N_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function F_(i){let t=new L_,e=D_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new ue,a=new ue;function o(c){let h=0,u=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,_=0,E=0,x=0,M=0,S=0,A=0,y=0,w=0,R=0;c.sort(N_);for(let U=0,B=c.length;U<B;U++){let I=c[U],F=I.color,G=I.intensity,X=I.distance,rt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ji?rt=I.shadow.map.texture:rt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=F.r*G,u+=F.g*G,d+=F.b*G;else if(I.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(I.sh.coefficients[$],G);R++}else if(I.isSunLight){let $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let nt=I.shadow,et=e.get(I);et.shadowIntensity=nt.intensity,et.shadowBias=nt.bias,et.shadowNormalBias=nt.normalBias,et.shadowRadius=nt.radius,et.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),n.sunShadow[g]=et,n.sunShadowMap[g]=rt;let At=nt.getViewportCount();for(let wt=0;wt<At;wt++)n.sunShadowMatrix[v+wt]=nt.getMatrix(wt),n.sunShadowCascade[v+wt]=nt._cascadeData[wt];v+=At,g++}n.sun[f]=$,f++}else if(I.isDirectionalLight){let $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let nt=I.shadow,et=e.get(I);et.shadowIntensity=nt.intensity,et.shadowBias=nt.bias,et.shadowNormalBias=nt.normalBias,et.shadowRadius=nt.radius,et.shadowMapSize=nt.mapSize,n.directionalShadow[m]=et,n.directionalShadowMap[m]=rt,n.directionalShadowMatrix[m]=I.shadow.matrix,M++}n.directional[m]=$,m++}else if(I.isSpotLight){let $=t.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(F).multiplyScalar(G),$.distance=X,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,n.spot[_]=$;let nt=I.shadow;if(I.map&&(n.spotLightMap[y]=I.map,y++,nt.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[_]=nt.matrix,I.castShadow){let et=e.get(I);et.shadowIntensity=nt.intensity,et.shadowBias=nt.bias,et.shadowNormalBias=nt.normalBias,et.shadowRadius=nt.radius,et.shadowMapSize=nt.mapSize,n.spotShadow[_]=et,n.spotShadowMap[_]=rt,A++}_++}else if(I.isRectAreaLight){let $=t.get(I);$.color.copy(F).multiplyScalar(G),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=$,E++}else if(I.isPointLight){let $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){let nt=I.shadow,et=e.get(I);et.shadowIntensity=nt.intensity,et.shadowBias=nt.bias,et.shadowNormalBias=nt.normalBias,et.shadowRadius=nt.radius,et.shadowMapSize=nt.mapSize,et.shadowCameraNear=nt.camera.near,et.shadowCameraFar=nt.camera.far,n.pointShadow[p]=et,n.pointShadowMap[p]=rt,n.pointShadowMatrix[p]=I.shadow.matrix,S++}n.point[p]=$,p++}else if(I.isHemisphereLight){let $=t.get(I);$.skyColor.copy(I.color).multiplyScalar(G),$.groundColor.copy(I.groundColor).multiplyScalar(G),n.hemi[x]=$,x++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==p||P.spotLength!==_||P.rectAreaLength!==E||P.hemiLength!==x||P.numSunShadows!==g||P.numDirectionalShadows!==M||P.numPointShadows!==S||P.numSpotShadows!==A||P.numSpotMaps!==y||P.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=_,n.rectArea.length=E,n.point.length=p,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+y-w,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,P.sunLength=f,P.directionalLength=m,P.pointLength=p,P.spotLength=_,P.rectAreaLength=E,P.hemiLength=x,P.numSunShadows=g,P.numDirectionalShadows=M,P.numPointShadows=S,P.numSpotShadows=A,P.numSpotMaps=y,P.numLightProbes=R,n.version=U_++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0,m=0,p=h.matrixWorldInverse;for(let _=0,E=c.length;_<E;_++){let x=c[_];if(x.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),u++}else if(x.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(x.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(x.isRectAreaLight){let M=n.rectArea[v];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Uf(i){let t=new F_(i),e=[],n=[],s=[];function r(d){u.camera=d,e.length=0,n.length=0,s.length=0}function a(d){e.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function O_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Uf(i),t.set(s,[o])):r>=a.length?(o=new Uf(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var B_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k_=`uniform sampler2D shadow_pass;
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
}`,z_=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],H_=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Nf=new ue,wa=new D,$h=new D;function G_(i,t,e){let n=new nr,s=new ot,r=new ot,a=new Le,o=new ar,l=new Bo,c={},h=e.maxTextureSize,u={[qi]:hn,[hn]:qi,[un]:un},d=new ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:B_,fragmentShader:k_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ve;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new _e(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ds;let p=this.type;this.render=function(S,A,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Cd&&(qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ds);let w=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Be),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let B=p!==this.type;B&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(F=>F.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,F=S.length;I<F;I++){let G=S[I],X=G.shadow;if(X===void 0){qt("WebGLShadowMap:",G,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let rt=X.getFrameExtents();s.multiply(rt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,X.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=$,X.map===null||B===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===hr){if(G.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Ue(s.x,s.y,{format:Ji,type:Fe,minFilter:Je,magFilter:Je,generateMipmaps:!1}),X.map.texture.name=G.name+".shadowMap",X.map.depthTexture=new ni(s.x,s.y,Vn),X.map.depthTexture.name=G.name+".shadowMapDepth",X.map.depthTexture.format=jn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ie,X.map.depthTexture.magFilter=Ie}else G.isPointLight?(X.map=new Gl(s.x),X.map.depthTexture=new Io(s.x,Gn)):(X.map=new Ue(s.x,s.y),X.map.depthTexture=new ni(s.x,s.y,Gn)),X.map.depthTexture.name=G.name+".shadowMap",X.map.depthTexture.format=jn,this.type===ds?(X.map.depthTexture.compareFunction=$?kl:Bl,X.map.depthTexture.minFilter=Je,X.map.depthTexture.magFilter=Je):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ie,X.map.depthTexture.magFilter=Ie);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let nt=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();G.isPointLight!==!0&&X.updateMatrices(G,y);for(let et=0;et<nt;et++){let At=X.getCamera(et);if(G.isPointLight){let wt=X.camera,jt=X.matrix,$t=G.distance||wt.far;$t!==wt.far&&(wt.far=$t,wt.updateProjectionMatrix()),wa.setFromMatrixPosition(G.matrixWorld),wt.position.copy(wa),$h.copy(wt.position),$h.add(z_[et]),wt.up.copy(H_[et]),wt.lookAt($h),wt.updateMatrixWorld(),jt.makeTranslation(-wa.x,-wa.y,-wa.z),Nf.multiplyMatrices(wt.projectionMatrix,wt.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Nf,wt.coordinateSystem,wt.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,et),i.clear();else{et===0&&(i.setRenderTarget(X.map),i.clear());let wt=X.getViewport(et);a.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),U.viewport(a)}n=X.getFrustum(et),x(A,y,At,G,this.type)}X.isPointLightShadow!==!0&&this.type===hr&&_(X,y),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,R,P)};function _(S,A){let y=t.update(v);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Ue(s.x,s.y,{format:Ji,type:Fe}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,y,d,v,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,y,f,v,null)}function E(S,A,y,w){let R=null,P=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)R=P;else if(R=y.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let U=R.uuid,B=A.uuid,I=c[U];I===void 0&&(I={},c[U]=I);let F=I[B];F===void 0&&(F=R.clone(),I[B]=F,A.addEventListener("dispose",M)),R=F}if(R.visible=A.visible,R.wireframe=A.wireframe,w===hr?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:u[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=i.properties.get(R);U.light=y}return R}function x(S,A,y,w,R){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===hr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);let B=t.update(S),I=S.material;if(Array.isArray(I)){let F=B.groups;for(let G=0,X=F.length;G<X;G++){let rt=F[G],$=I[rt.materialIndex];if($&&$.visible){let nt=E(S,$,w,R);S.onBeforeShadow(i,S,A,y,B,nt,rt),i.renderBufferDirect(y,null,B,nt,S,rt),S.onAfterShadow(i,S,A,y,B,nt,rt)}}}else if(I.visible){let F=E(S,I,w,R);S.onBeforeShadow(i,S,A,y,B,F,null),i.renderBufferDirect(y,null,B,F,S,null),S.onAfterShadow(i,S,A,y,B,F,null)}}let U=S.children;for(let B=0,I=U.length;B<I;B++)x(U[B],A,y,w,R)}function M(S){S.target.removeEventListener("dispose",M);for(let y in c){let w=c[y],R=S.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function V_(i,t){function e(){let k=!1,St=new Le,st=null,_t=new Le(0,0,0,0);return{setMask:function(Et){st!==Et&&!k&&(i.colorMask(Et,Et,Et,Et),st=Et)},setLocked:function(Et){k=Et},setClear:function(Et,lt,Bt,Nt,Me){Me===!0&&(Et*=Nt,lt*=Nt,Bt*=Nt),St.set(Et,lt,Bt,Nt),_t.equals(St)===!1&&(i.clearColor(Et,lt,Bt,Nt),_t.copy(St))},reset:function(){k=!1,st=null,_t.set(-1,0,0,0)}}}function n(){let k=!1,St=!1,st=null,_t=null,Et=null;return{setReversed:function(lt){if(St!==lt){let Bt=t.get("EXT_clip_control");lt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),St=lt;let Nt=Et;Et=null,this.setClear(Nt)}},getReversed:function(){return St},setTest:function(lt){lt?tt(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(lt){st!==lt&&!k&&(i.depthMask(lt),st=lt)},setFunc:function(lt){if(St&&(lt=of[lt]),_t!==lt){switch(lt){case xo:i.depthFunc(i.NEVER);break;case _o:i.depthFunc(i.ALWAYS);break;case vo:i.depthFunc(i.LESS);break;case Zs:i.depthFunc(i.LEQUAL);break;case yo:i.depthFunc(i.EQUAL);break;case Mo:i.depthFunc(i.GEQUAL);break;case So:i.depthFunc(i.GREATER);break;case bo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=lt}},setLocked:function(lt){k=lt},setClear:function(lt){Et!==lt&&(Et=lt,St&&(lt=1-lt),i.clearDepth(lt))},reset:function(){k=!1,st=null,_t=null,Et=null,St=!1}}}function s(){let k=!1,St=null,st=null,_t=null,Et=null,lt=null,Bt=null,Nt=null,Me=null;return{setTest:function(pe){k||(pe?tt(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(pe){St!==pe&&!k&&(i.stencilMask(pe),St=pe)},setFunc:function(pe,Nn,Yn){(st!==pe||_t!==Nn||Et!==Yn)&&(i.stencilFunc(pe,Nn,Yn),st=pe,_t=Nn,Et=Yn)},setOp:function(pe,Nn,Yn){(lt!==pe||Bt!==Nn||Nt!==Yn)&&(i.stencilOp(pe,Nn,Yn),lt=pe,Bt=Nn,Nt=Yn)},setLocked:function(pe){k=pe},setClear:function(pe){Me!==pe&&(i.clearStencil(pe),Me=pe)},reset:function(){k=!1,St=null,st=null,_t=null,Et=null,lt=null,Bt=null,Nt=null,Me=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],v=null,m=!1,p=null,_=null,E=null,x=null,M=null,S=null,A=null,y=new Ht(0,0,0),w=0,R=!1,P=null,U=null,B=null,I=null,F=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,rt=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec($)[1]),X=rt>=1):$.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=rt>=2);let nt=null,et={},At=i.getParameter(i.SCISSOR_BOX),wt=i.getParameter(i.VIEWPORT),jt=new Le().fromArray(At),$t=new Le().fromArray(wt);function ut(k,St,st,_t){let Et=new Uint8Array(4),lt=i.createTexture();i.bindTexture(k,lt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<st;Bt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(St+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return lt}let W={};W[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),W[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),W[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(i.DEPTH_TEST),a.setFunc(Zs),dt(!1),vt(uh),tt(i.CULL_FACE),ht(Be);function tt(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function xt(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function It(k,St){return d[k]!==St?(i.bindFramebuffer(k,St),d[k]=St,k===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=St),k===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=St),!0):!1}function yt(k,St){let st=g,_t=!1;if(k){st=f.get(St),st===void 0&&(st=[],f.set(St,st));let Et=k.textures;if(st.length!==Et.length||st[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Bt=Et.length;lt<Bt;lt++)st[lt]=i.COLOR_ATTACHMENT0+lt;st.length=Et.length,_t=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,_t=!0);_t&&i.drawBuffers(st)}function kt(k){return v!==k?(i.useProgram(k),v=k,!0):!1}let ne={[In]:i.FUNC_ADD,[Pd]:i.FUNC_SUBTRACT,[Id]:i.FUNC_REVERSE_SUBTRACT};ne[Ld]=i.MIN,ne[Dd]=i.MAX;let it={[ps]:i.ZERO,[Ud]:i.ONE,[Nd]:i.SRC_COLOR,[ph]:i.SRC_ALPHA,[kd]:i.SRC_ALPHA_SATURATE,[pa]:i.DST_COLOR,[fa]:i.DST_ALPHA,[Fd]:i.ONE_MINUS_SRC_COLOR,[mh]:i.ONE_MINUS_SRC_ALPHA,[Bd]:i.ONE_MINUS_DST_COLOR,[Od]:i.ONE_MINUS_DST_ALPHA,[zd]:i.CONSTANT_COLOR,[Hd]:i.ONE_MINUS_CONSTANT_COLOR,[Gd]:i.CONSTANT_ALPHA,[Vd]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(k,St,st,_t,Et,lt,Bt,Nt,Me,pe){if(k===Be){m===!0&&(xt(i.BLEND),m=!1);return}if(m===!1&&(tt(i.BLEND),m=!0),k!==jo){if(k!==p||pe!==R){if((_!==In||M!==In)&&(i.blendEquation(i.FUNC_ADD),_=In,M=In),pe)switch(k){case ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fs:i.blendFunc(i.ONE,i.ONE);break;case dh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Zt("WebGLState: Invalid blending: ",k);break}else switch(k){case ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dh:Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fh:Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Zt("WebGLState: Invalid blending: ",k);break}E=null,x=null,S=null,A=null,y.set(0,0,0),w=0,p=k,R=pe}return}Et=Et||St,lt=lt||st,Bt=Bt||_t,(St!==_||Et!==M)&&(i.blendEquationSeparate(ne[St],ne[Et]),_=St,M=Et),(st!==E||_t!==x||lt!==S||Bt!==A)&&(i.blendFuncSeparate(it[st],it[_t],it[lt],it[Bt]),E=st,x=_t,S=lt,A=Bt),(Nt.equals(y)===!1||Me!==w)&&(i.blendColor(Nt.r,Nt.g,Nt.b,Me),y.copy(Nt),w=Me),p=k,R=!1}function mt(k,St){k.side===un?xt(i.CULL_FACE):tt(i.CULL_FACE);let st=k.side===hn;St&&(st=!st),dt(st),k.blending===ur&&k.transparent===!1?ht(Be):ht(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let _t=k.stencilWrite;o.setTest(_t),_t&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),zt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(k){P!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),P=k)}function vt(k){k!==Ad?(tt(i.CULL_FACE),k!==U&&(k===uh?i.cullFace(i.BACK):k===Rd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),U=k}function Vt(k){k!==B&&(X&&i.lineWidth(k),B=k)}function zt(k,St,st){k?(tt(i.POLYGON_OFFSET_FILL),(I!==St||F!==st)&&(I=St,F=st,a.getReversed()&&(St=-St),i.polygonOffset(St,st))):xt(i.POLYGON_OFFSET_FILL)}function Wt(k){k?tt(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function Xt(k){k===void 0&&(k=i.TEXTURE0+G-1),nt!==k&&(i.activeTexture(k),nt=k)}function N(k,St,st){st===void 0&&(nt===null?st=i.TEXTURE0+G-1:st=nt);let _t=et[st];_t===void 0&&(_t={type:void 0,texture:void 0},et[st]=_t),(_t.type!==k||_t.texture!==St)&&(nt!==st&&(i.activeTexture(st),nt=st),i.bindTexture(k,St||W[k]),_t.type=k,_t.texture=St)}function le(){let k=et[nt];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Jt(){try{i.compressedTexImage2D(...arguments)}catch(k){Zt("WebGLState:",k)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(k){Zt("WebGLState:",k)}}function b(){try{i.texSubImage2D(...arguments)}catch(k){Zt("WebGLState:",k)}}function z(){try{i.texSubImage3D(...arguments)}catch(k){Zt("WebGLState:",k)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(k){Zt("WebGLState:",k)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(k){Zt("WebGLState:",k)}}function H(){try{i.texStorage2D(...arguments)}catch(k){Zt("WebGLState:",k)}}function J(){try{i.texStorage3D(...arguments)}catch(k){Zt("WebGLState:",k)}}function V(){try{i.texImage2D(...arguments)}catch(k){Zt("WebGLState:",k)}}function j(){try{i.texImage3D(...arguments)}catch(k){Zt("WebGLState:",k)}}function pt(k){return u[k]!==void 0?u[k]:i.getParameter(k)}function bt(k,St){u[k]!==St&&(i.pixelStorei(k,St),u[k]=St)}function at(k){jt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),jt.copy(k))}function ct(k){$t.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),$t.copy(k))}function Mt(k,St){let st=c.get(St);st===void 0&&(st=new WeakMap,c.set(St,st));let _t=st.get(k);_t===void 0&&(_t=i.getUniformBlockIndex(St,k.name),st.set(k,_t))}function Ut(k,St){let _t=c.get(St).get(k);l.get(St)!==_t&&(i.uniformBlockBinding(St,_t,k.__bindingPointIndex),l.set(St,_t))}function Yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},nt=null,et={},d={},f=new WeakMap,g=[],v=null,m=!1,p=null,_=null,E=null,x=null,M=null,S=null,A=null,y=new Ht(0,0,0),w=0,R=!1,P=null,U=null,B=null,I=null,F=null,jt.set(0,0,i.canvas.width,i.canvas.height),$t.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:xt,bindFramebuffer:It,drawBuffers:yt,useProgram:kt,setBlending:ht,setMaterial:mt,setFlipSided:dt,setCullFace:vt,setLineWidth:Vt,setPolygonOffset:zt,setScissorTest:Wt,activeTexture:Xt,bindTexture:N,unbindTexture:le,compressedTexImage2D:Jt,compressedTexImage3D:C,texImage2D:V,texImage3D:j,pixelStorei:bt,getParameter:pt,updateUBOMapping:Mt,uniformBlockBinding:Ut,texStorage2D:H,texStorage3D:J,texSubImage2D:b,texSubImage3D:z,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:at,viewport:ct,reset:Yt}}function W_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,b){return g?new OffscreenCanvas(C,b):kr("canvas")}function m(C,b,z){let q=1,Q=Jt(C);if((Q.width>z||Q.height>z)&&(q=z/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let H=Math.floor(q*Q.width),J=Math.floor(q*Q.height);d===void 0&&(d=v(H,J));let V=b?v(H,J):d;return V.width=H,V.height=J,V.getContext("2d").drawImage(C,0,0,H,J),qt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+H+"x"+J+")."),V}else return"data"in C&&qt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function p(C){return C.generateMipmaps}function _(C){i.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(C,b,z,q,Q,H=!1){if(C!==null){if(i[C]!==void 0)return i[C];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J;q&&(J=t.get("EXT_texture_norm16"),J||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let V=b;if(b===i.RED&&(z===i.FLOAT&&(V=i.R32F),z===i.HALF_FLOAT&&(V=i.R16F),z===i.UNSIGNED_BYTE&&(V=i.R8),z===i.UNSIGNED_SHORT&&J&&(V=J.R16_EXT),z===i.SHORT&&J&&(V=J.R16_SNORM_EXT)),b===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(V=i.R8UI),z===i.UNSIGNED_SHORT&&(V=i.R16UI),z===i.UNSIGNED_INT&&(V=i.R32UI),z===i.BYTE&&(V=i.R8I),z===i.SHORT&&(V=i.R16I),z===i.INT&&(V=i.R32I)),b===i.RG&&(z===i.FLOAT&&(V=i.RG32F),z===i.HALF_FLOAT&&(V=i.RG16F),z===i.UNSIGNED_BYTE&&(V=i.RG8),z===i.UNSIGNED_SHORT&&J&&(V=J.RG16_EXT),z===i.SHORT&&J&&(V=J.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(V=i.RG8UI),z===i.UNSIGNED_SHORT&&(V=i.RG16UI),z===i.UNSIGNED_INT&&(V=i.RG32UI),z===i.BYTE&&(V=i.RG8I),z===i.SHORT&&(V=i.RG16I),z===i.INT&&(V=i.RG32I)),b===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(V=i.RGB8UI),z===i.UNSIGNED_SHORT&&(V=i.RGB16UI),z===i.UNSIGNED_INT&&(V=i.RGB32UI),z===i.BYTE&&(V=i.RGB8I),z===i.SHORT&&(V=i.RGB16I),z===i.INT&&(V=i.RGB32I)),b===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),z===i.UNSIGNED_INT&&(V=i.RGBA32UI),z===i.BYTE&&(V=i.RGBA8I),z===i.SHORT&&(V=i.RGBA16I),z===i.INT&&(V=i.RGBA32I)),b===i.RGB&&(z===i.UNSIGNED_SHORT&&J&&(V=J.RGB16_EXT),z===i.SHORT&&J&&(V=J.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),b===i.RGBA){let j=H?Br:ce.getTransfer(Q);z===i.FLOAT&&(V=i.RGBA32F),z===i.HALF_FLOAT&&(V=i.RGBA16F),z===i.UNSIGNED_BYTE&&(V=j===xe?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&J&&(V=J.RGBA16_EXT),z===i.SHORT&&J&&(V=J.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function M(C,b){let z;return C?b===null||b===Gn||b===$i?z=i.DEPTH24_STENCIL8:b===Vn?z=i.DEPTH32F_STENCIL8:b===dr&&(z=i.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Gn||b===$i?z=i.DEPTH_COMPONENT24:b===Vn?z=i.DEPTH_COMPONENT32F:b===dr&&(z=i.DEPTH_COMPONENT16),z}function S(C,b){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ie&&C.minFilter!==Je?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function A(C){let b=C.target;b.removeEventListener("dispose",A),w(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&u.delete(b)}function y(C){let b=C.target;b.removeEventListener("dispose",y),P(b)}function w(C){let b=n.get(C);if(b.__webglInit===void 0)return;let z=C.source,q=f.get(z);if(q){let Q=q[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(C),Object.keys(q).length===0&&f.delete(z)}n.remove(C)}function R(C){let b=n.get(C);i.deleteTexture(b.__webglTexture);let z=C.source,q=f.get(z);delete q[b.__cacheKey],a.memory.textures--}function P(C){let b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(b.__webglFramebuffer[q]))for(let Q=0;Q<b.__webglFramebuffer[q].length;Q++)i.deleteFramebuffer(b.__webglFramebuffer[q][Q]);else i.deleteFramebuffer(b.__webglFramebuffer[q]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[q])}else{if(Array.isArray(b.__webglFramebuffer))for(let q=0;q<b.__webglFramebuffer.length;q++)i.deleteFramebuffer(b.__webglFramebuffer[q]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let q=0;q<b.__webglColorRenderbuffer.length;q++)b.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[q]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let z=C.textures;for(let q=0,Q=z.length;q<Q;q++){let H=n.get(z[q]);H.__webglTexture&&(i.deleteTexture(H.__webglTexture),a.memory.textures--),n.remove(z[q])}n.remove(C)}let U=0;function B(){U=0}function I(){return U}function F(C){U=C}function G(){let C=U;return C>=s.maxTextures&&qt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,C}function X(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function rt(C,b){let z=n.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){let q=C.image;if(q===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(z,C,b);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+b)}function $(C,b){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){xt(z,C,b);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+b)}function nt(C,b){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){xt(z,C,b);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+b)}function et(C,b){let z=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){It(z,C,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+b)}let At={[xn]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[Eo]:i.MIRRORED_REPEAT},wt={[Ie]:i.NEAREST,[qd]:i.NEAREST_MIPMAP_NEAREST,[xa]:i.NEAREST_MIPMAP_LINEAR,[Je]:i.LINEAR,[el]:i.LINEAR_MIPMAP_NEAREST,[Zi]:i.LINEAR_MIPMAP_LINEAR},jt={[Jd]:i.NEVER,[ef]:i.ALWAYS,[Kd]:i.LESS,[Bl]:i.LEQUAL,[jd]:i.EQUAL,[kl]:i.GEQUAL,[Qd]:i.GREATER,[tf]:i.NOTEQUAL};function $t(C,b){if(b.type===Vn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Je||b.magFilter===el||b.magFilter===xa||b.magFilter===Zi||b.minFilter===Je||b.minFilter===el||b.minFilter===xa||b.minFilter===Zi)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,At[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,At[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,At[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,wt[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,wt[b.minFilter]),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,jt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ie||b.minFilter!==xa&&b.minFilter!==Zi||b.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ut(C,b){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",A));let q=b.source,Q=f.get(q);Q===void 0&&(Q={},f.set(q,Q));let H=X(b);if(H!==C.__cacheKey){Q[H]===void 0&&(Q[H]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Q[H].usedTimes++;let J=Q[C.__cacheKey];J!==void 0&&(Q[C.__cacheKey].usedTimes--,J.usedTimes===0&&R(b)),C.__cacheKey=H,C.__webglTexture=Q[H].texture}return z}function W(C,b,z){return Math.floor(Math.floor(C/z)/b)}function tt(C,b,z,q){let H=C.updateRanges;if(H.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,z,q,b.data);else{H.sort((bt,at)=>bt.start-at.start);let J=0;for(let bt=1;bt<H.length;bt++){let at=H[J],ct=H[bt],Mt=at.start+at.count,Ut=W(ct.start,b.width,4),Yt=W(at.start,b.width,4);ct.start<=Mt+1&&Ut===Yt&&W(ct.start+ct.count-1,b.width,4)===Ut?at.count=Math.max(at.count,ct.start+ct.count-at.start):(++J,H[J]=ct)}H.length=J+1;let V=e.getParameter(i.UNPACK_ROW_LENGTH),j=e.getParameter(i.UNPACK_SKIP_PIXELS),pt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let bt=0,at=H.length;bt<at;bt++){let ct=H[bt],Mt=Math.floor(ct.start/4),Ut=Math.ceil(ct.count/4),Yt=Mt%b.width,k=Math.floor(Mt/b.width),St=Ut,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Yt),e.pixelStorei(i.UNPACK_SKIP_ROWS,k),e.texSubImage2D(i.TEXTURE_2D,0,Yt,k,St,st,z,q,b.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,V),e.pixelStorei(i.UNPACK_SKIP_PIXELS,j),e.pixelStorei(i.UNPACK_SKIP_ROWS,pt)}}function xt(C,b,z){let q=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(q=i.TEXTURE_3D);let Q=ut(C,b),H=b.source;e.bindTexture(q,C.__webglTexture,i.TEXTURE0+z);let J=n.get(H);if(H.version!==J.__version||Q===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let st=ce.getPrimaries(ce.workingColorSpace),_t=b.colorSpace===Ti?null:ce.getPrimaries(b.colorSpace),Et=b.colorSpace===Ti||st===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let j=m(b.image,!1,s.maxTextureSize);j=le(b,j);let pt=r.convert(b.format,b.colorSpace),bt=r.convert(b.type),at=x(b.internalFormat,pt,bt,b.normalized,b.colorSpace,b.isVideoTexture);$t(q,b);let ct,Mt=b.mipmaps,Ut=b.isVideoTexture!==!0,Yt=J.__version===void 0||Q===!0,k=H.dataReady,St=S(b,j);if(b.isDepthTexture)at=M(b.format===ri,b.type),Yt&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,at,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,at,j.width,j.height,0,pt,bt,null));else if(b.isDataTexture)if(Mt.length>0){Ut&&Yt&&e.texStorage2D(i.TEXTURE_2D,St,at,Mt[0].width,Mt[0].height);for(let st=0,_t=Mt.length;st<_t;st++)ct=Mt[st],Ut?k&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ct.width,ct.height,pt,bt,ct.data):e.texImage2D(i.TEXTURE_2D,st,at,ct.width,ct.height,0,pt,bt,ct.data);b.generateMipmaps=!1}else Ut?(Yt&&e.texStorage2D(i.TEXTURE_2D,St,at,j.width,j.height),k&&tt(b,j,pt,bt)):e.texImage2D(i.TEXTURE_2D,0,at,j.width,j.height,0,pt,bt,j.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ut&&Yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,at,Mt[0].width,Mt[0].height,j.depth);for(let st=0,_t=Mt.length;st<_t;st++)if(ct=Mt[st],b.format!==_n)if(pt!==null)if(Ut){if(k)if(b.layerUpdates.size>0){let Et=Bh(ct.width,ct.height,b.format,b.type);for(let lt of b.layerUpdates){let Bt=ct.data.subarray(lt*Et/ct.data.BYTES_PER_ELEMENT,(lt+1)*Et/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,lt,ct.width,ct.height,1,pt,Bt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,ct.width,ct.height,j.depth,pt,ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,at,ct.width,ct.height,j.depth,0,ct.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,ct.width,ct.height,j.depth,pt,bt,ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,at,ct.width,ct.height,j.depth,0,pt,bt,ct.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Ut&&Yt&&e.texStorage2D(i.TEXTURE_2D,St,at,Mt[0].width,Mt[0].height);for(let st=0,_t=Mt.length;st<_t;st++)ct=Mt[st],b.format!==_n?pt!==null?Ut?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,ct.width,ct.height,pt,ct.data):e.compressedTexImage2D(i.TEXTURE_2D,st,at,ct.width,ct.height,0,ct.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?k&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ct.width,ct.height,pt,bt,ct.data):e.texImage2D(i.TEXTURE_2D,st,at,ct.width,ct.height,0,pt,bt,ct.data)}else if(b.isDataArrayTexture)if(Ut){if(Yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,at,j.width,j.height,j.depth),k)if(b.layerUpdates.size>0){let st=Bh(j.width,j.height,b.format,b.type);for(let _t of b.layerUpdates){let Et=j.data.subarray(_t*st/j.data.BYTES_PER_ELEMENT,(_t+1)*st/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_t,j.width,j.height,1,pt,bt,Et)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,pt,bt,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,at,j.width,j.height,j.depth,0,pt,bt,j.data);else if(b.isData3DTexture)Ut?(Yt&&e.texStorage3D(i.TEXTURE_3D,St,at,j.width,j.height,j.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,pt,bt,j.data)):e.texImage3D(i.TEXTURE_3D,0,at,j.width,j.height,j.depth,0,pt,bt,j.data);else if(b.isFramebufferTexture){if(Yt)if(Ut)e.texStorage2D(i.TEXTURE_2D,St,at,j.width,j.height);else{let st=j.width,_t=j.height;for(let Et=0;Et<St;Et++)e.texImage2D(i.TEXTURE_2D,Et,at,st,_t,0,pt,bt,null),st>>=1,_t>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),j.parentNode!==st){st.appendChild(j),u.add(b),st.onpaint=_t=>{let Et=_t.changedElements;for(let lt of u)Et.includes(lt.image)&&(lt.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let Et=i.RGBA,lt=i.RGBA,Bt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Et,lt,Bt,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Mt.length>0){if(Ut&&Yt){let st=Jt(Mt[0]);e.texStorage2D(i.TEXTURE_2D,St,at,st.width,st.height)}for(let st=0,_t=Mt.length;st<_t;st++)ct=Mt[st],Ut?k&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,pt,bt,ct):e.texImage2D(i.TEXTURE_2D,st,at,pt,bt,ct);b.generateMipmaps=!1}else if(Ut){if(Yt){let st=Jt(j);e.texStorage2D(i.TEXTURE_2D,St,at,st.width,st.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,bt,j)}else e.texImage2D(i.TEXTURE_2D,0,at,pt,bt,j);p(b)&&_(q),J.__version=H.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function It(C,b,z){if(b.image.length!==6)return;let q=ut(C,b),Q=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);let H=n.get(Q);if(Q.version!==H.__version||q===!0){e.activeTexture(i.TEXTURE0+z);let J=ce.getPrimaries(ce.workingColorSpace),V=b.colorSpace===Ti?null:ce.getPrimaries(b.colorSpace),j=b.colorSpace===Ti||J===V?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let pt=b.isCompressedTexture||b.image[0].isCompressedTexture,bt=b.image[0]&&b.image[0].isDataTexture,at=[];for(let lt=0;lt<6;lt++)!pt&&!bt?at[lt]=m(b.image[lt],!0,s.maxCubemapSize):at[lt]=bt?b.image[lt].image:b.image[lt],at[lt]=le(b,at[lt]);let ct=at[0],Mt=r.convert(b.format,b.colorSpace),Ut=r.convert(b.type),Yt=x(b.internalFormat,Mt,Ut,b.normalized,b.colorSpace),k=b.isVideoTexture!==!0,St=H.__version===void 0||q===!0,st=Q.dataReady,_t=S(b,ct);$t(i.TEXTURE_CUBE_MAP,b);let Et;if(pt){k&&St&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Yt,ct.width,ct.height);for(let lt=0;lt<6;lt++){Et=at[lt].mipmaps;for(let Bt=0;Bt<Et.length;Bt++){let Nt=Et[Bt];b.format!==_n?Mt!==null?k?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt,0,0,Nt.width,Nt.height,Mt,Nt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt,Yt,Nt.width,Nt.height,0,Nt.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt,0,0,Nt.width,Nt.height,Mt,Ut,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt,Yt,Nt.width,Nt.height,0,Mt,Ut,Nt.data)}}}else{if(Et=b.mipmaps,k&&St){Et.length>0&&_t++;let lt=Jt(at[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Yt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(bt){k?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,at[lt].width,at[lt].height,Mt,Ut,at[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Yt,at[lt].width,at[lt].height,0,Mt,Ut,at[lt].data);for(let Bt=0;Bt<Et.length;Bt++){let Me=Et[Bt].image[lt].image;k?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt+1,0,0,Me.width,Me.height,Mt,Ut,Me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt+1,Yt,Me.width,Me.height,0,Mt,Ut,Me.data)}}else{k?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Mt,Ut,at[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Yt,Mt,Ut,at[lt]);for(let Bt=0;Bt<Et.length;Bt++){let Nt=Et[Bt];k?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt+1,0,0,Mt,Ut,Nt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt+1,Yt,Mt,Ut,Nt.image[lt])}}}p(b)&&_(i.TEXTURE_CUBE_MAP),H.__version=Q.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function yt(C,b,z,q,Q,H){let J=r.convert(z.format,z.colorSpace),V=r.convert(z.type),j=x(z.internalFormat,J,V,z.normalized,z.colorSpace),pt=n.get(b),bt=n.get(z);if(bt.__renderTarget=b,!pt.__hasExternalTextures){let at=Math.max(1,b.width>>H),ct=Math.max(1,b.height>>H);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,H,j,at,ct,b.depth,0,J,V,null):e.texImage2D(Q,H,j,at,ct,0,J,V,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Xt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Q,bt.__webglTexture,0,Wt(b)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Q,bt.__webglTexture,H),e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(C,b,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer){let q=b.depthTexture,Q=q&&q.isDepthTexture?q.type:null,H=M(b.stencilBuffer,Q),J=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Xt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt(b),H,b.width,b.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt(b),H,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,H,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,C)}else{let q=b.textures;for(let Q=0;Q<q.length;Q++){let H=q[Q],J=r.convert(H.format,H.colorSpace),V=r.convert(H.type),j=x(H.internalFormat,J,V,H.normalized,H.colorSpace);Xt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt(b),j,b.width,b.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt(b),j,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,j,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ne(C,b,z){let q=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(b.depthTexture);if(Q.__renderTarget=b,(!Q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,b.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),$t(i.TEXTURE_CUBE_MAP,b.depthTexture);let pt=r.convert(b.depthTexture.format),bt=r.convert(b.depthTexture.type),at;b.depthTexture.format===jn?at=i.DEPTH_COMPONENT24:b.depthTexture.format===ri&&(at=i.DEPTH24_STENCIL8);for(let ct=0;ct<6;ct++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,at,b.width,b.height,0,pt,bt,null)}}else rt(b.depthTexture,0);let H=Q.__webglTexture,J=Wt(b),V=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,j=b.depthTexture.format===ri?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===jn)Xt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,V,H,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,j,V,H,0);else if(b.depthTexture.format===ri)Xt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,V,H,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,j,V,H,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(C){let b=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let q=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),q){let Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=q}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(z)for(let q=0;q<6;q++)ne(b.__webglFramebuffer[q],C,q);else{let q=C.texture.mipmaps;q&&q.length>0?ne(b.__webglFramebuffer[0],C,0):ne(b.__webglFramebuffer,C,0)}else if(z){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]===void 0)b.__webglDepthbuffer[q]=i.createRenderbuffer(),kt(b.__webglDepthbuffer[q],C,!1);else{let Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=b.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,H)}}else{let q=C.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),kt(b.__webglDepthbuffer,C,!1);else{let Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,H)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(C,b,z){let q=n.get(C);b!==void 0&&yt(q.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&it(C)}function mt(C){let b=C.texture,z=n.get(C),q=n.get(b);C.addEventListener("dispose",y);let Q=C.textures,H=C.isWebGLCubeRenderTarget===!0,J=Q.length>1;if(J||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=b.version,a.memory.textures++),H){z.__webglFramebuffer=[];for(let V=0;V<6;V++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[V]=[];for(let j=0;j<b.mipmaps.length;j++)z.__webglFramebuffer[V][j]=i.createFramebuffer()}else z.__webglFramebuffer[V]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let V=0;V<b.mipmaps.length;V++)z.__webglFramebuffer[V]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(J)for(let V=0,j=Q.length;V<j;V++){let pt=n.get(Q[V]);pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Xt(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let V=0;V<Q.length;V++){let j=Q[V];z.__webglColorRenderbuffer[V]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[V]);let pt=r.convert(j.format,j.colorSpace),bt=r.convert(j.type),at=x(j.internalFormat,pt,bt,j.normalized,j.colorSpace,C.isXRRenderTarget===!0),ct=Wt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,at,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.RENDERBUFFER,z.__webglColorRenderbuffer[V])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),kt(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),$t(i.TEXTURE_CUBE_MAP,b);for(let V=0;V<6;V++)if(b.mipmaps&&b.mipmaps.length>0)for(let j=0;j<b.mipmaps.length;j++)yt(z.__webglFramebuffer[V][j],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+V,j);else yt(z.__webglFramebuffer[V],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);p(b)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(J){for(let V=0,j=Q.length;V<j;V++){let pt=Q[V],bt=n.get(pt),at=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(at=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,bt.__webglTexture),$t(at,pt),yt(z.__webglFramebuffer,C,pt,i.COLOR_ATTACHMENT0+V,at,0),p(pt)&&_(at)}e.unbindTexture()}else{let V=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(V=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(V,q.__webglTexture),$t(V,b),b.mipmaps&&b.mipmaps.length>0)for(let j=0;j<b.mipmaps.length;j++)yt(z.__webglFramebuffer[j],C,b,i.COLOR_ATTACHMENT0,V,j);else yt(z.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,V,0);p(b)&&_(V),e.unbindTexture()}C.depthBuffer&&it(C)}function dt(C){let b=C.textures;for(let z=0,q=b.length;z<q;z++){let Q=b[z];if(p(Q)){let H=E(C),J=n.get(Q).__webglTexture;e.bindTexture(H,J),_(H),e.unbindTexture()}}}let vt=[],Vt=[];function zt(C){if(C.samples>0){if(Xt(C)===!1){let b=C.textures,z=C.width,q=C.height,Q=i.COLOR_BUFFER_BIT,H=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=n.get(C),V=b.length>1;if(V)for(let pt=0;pt<b.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,J.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,J.__webglMultisampledFramebuffer);let j=C.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,J.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,J.__webglFramebuffer);for(let pt=0;pt<b.length;pt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),V){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,J.__webglColorRenderbuffer[pt]);let bt=n.get(b[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,bt,0)}i.blitFramebuffer(0,0,z,q,0,0,z,q,Q,i.NEAREST),l===!0&&(vt.length=0,Vt.length=0,vt.push(i.COLOR_ATTACHMENT0+pt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(vt.push(H),Vt.push(H),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,vt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),V)for(let pt=0;pt<b.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,J.__webglColorRenderbuffer[pt]);let bt=n.get(b[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,J.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,bt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,J.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let b=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Wt(C){return Math.min(s.maxSamples,C.samples)}function Xt(C){let b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function N(C){let b=a.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function le(C,b){let z=C.colorSpace,q=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Or&&z!==Ti&&(ce.getTransfer(z)===xe?(q!==_n||Q!==$e)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Zt("WebGLTextures: Unsupported texture color space:",z)),b}function Jt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=B,this.getTextureUnits=I,this.setTextureUnits=F,this.setTexture2D=rt,this.setTexture2DArray=$,this.setTexture3D=nt,this.setTextureCube=et,this.rebindTextures=ht,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function X_(i,t){function e(n,s=Ti){let r,a=ce.getTransfer(s);if(n===$e)return i.UNSIGNED_BYTE;if(n===il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ah)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Eh)return i.BYTE;if(n===Th)return i.SHORT;if(n===dr)return i.UNSIGNED_SHORT;if(n===nl)return i.INT;if(n===Gn)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===Fe)return i.HALF_FLOAT;if(n===Rh)return i.ALPHA;if(n===Ch)return i.RGB;if(n===_n)return i.RGBA;if(n===jn)return i.DEPTH_COMPONENT;if(n===ri)return i.DEPTH_STENCIL;if(n===Ph)return i.RED;if(n===rl)return i.RED_INTEGER;if(n===Ji)return i.RG;if(n===al)return i.RG_INTEGER;if(n===ol)return i.RGBA_INTEGER;if(n===_a||n===va||n===ya||n===Ma)if(a===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ll||n===cl||n===hl||n===ul)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dl||n===fl||n===pl||n===ml||n===gl||n===Sa||n===xl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dl||n===fl)return a===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ml)return r.COMPRESSED_R11_EAC;if(n===gl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Sa)return r.COMPRESSED_RG11_EAC;if(n===xl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===_l||n===vl||n===yl||n===Ml||n===Sl||n===bl||n===El||n===Tl||n===wl||n===Al||n===Rl||n===Cl||n===Pl||n===Il)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_l)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ml)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===El)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Al)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Il)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ll||n===Dl||n===Ul)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ll)return a===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nl||n===Fl||n===ba||n===Ol)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Nl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$i?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var q_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y_=`
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

}`,iu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Zr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ye({vertexShader:q_,fragmentShader:Y_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _e(new Ke(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},su=class extends Qn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,v=typeof XRWebGLBinding<"u",m=new iu,p={},_=e.getContextAttributes(),E=null,x=null,M=[],S=[],A=new ot,y=null,w=null,R=new Ye;R.viewport=new Le;let P=new Ye;P.viewport=new Le;let U=[R,P],B=new Jo,I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let tt=M[W];return tt===void 0&&(tt=new Qs,M[W]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(W){let tt=M[W];return tt===void 0&&(tt=new Qs,M[W]=tt),tt.getGripSpace()},this.getHand=function(W){let tt=M[W];return tt===void 0&&(tt=new Qs,M[W]=tt),tt.getHandSpace()};function G(W){let tt=S.indexOf(W.inputSource);if(tt===-1)return;let xt=M[tt];xt!==void 0&&(xt.update(W.inputSource,W.frame,c||a),xt.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",rt);for(let W=0;W<M.length;W++){let tt=S[W];tt!==null&&(S[W]=null,M[W].disconnect(tt))}I=null,F=null,m.reset();for(let W in p)delete p[W];if(t.setRenderTarget(E),f=null,d=null,u=null,s=null,x=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(A.width,A.height,!1),w!==null){let W=w.camera;W.fov=w.fov,W.zoom=w.zoom,W.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",X),s.addEventListener("inputsourceschange",rt),_.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,It=null,yt=null;_.depth&&(yt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=_.stencil?ri:jn,It=_.stencil?$i:Gn);let kt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(kt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Ue(d.textureWidth,d.textureHeight,{format:_n,type:$e,depthTexture:new ni(d.textureWidth,d.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let xt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Ue(f.framebufferWidth,f.framebufferHeight,{format:_n,type:$e,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function rt(W){for(let tt=0;tt<W.removed.length;tt++){let xt=W.removed[tt],It=S.indexOf(xt);It>=0&&(S[It]=null,M[It].disconnect(xt))}for(let tt=0;tt<W.added.length;tt++){let xt=W.added[tt],It=S.indexOf(xt);if(It===-1){for(let kt=0;kt<M.length;kt++)if(kt>=S.length){S.push(xt),It=kt;break}else if(S[kt]===null){S[kt]=xt,It=kt;break}if(It===-1)break}let yt=M[It];yt&&yt.connect(xt)}}let $=new D,nt=new D;function et(W,tt,xt){$.setFromMatrixPosition(tt.matrixWorld),nt.setFromMatrixPosition(xt.matrixWorld);let It=$.distanceTo(nt),yt=tt.projectionMatrix.elements,kt=xt.projectionMatrix.elements,ne=yt[14]/(yt[10]-1),it=yt[14]/(yt[10]+1),ht=(yt[9]+1)/yt[5],mt=(yt[9]-1)/yt[5],dt=(yt[8]-1)/yt[0],vt=(kt[8]+1)/kt[0],Vt=ne*dt,zt=ne*vt,Wt=It/(-dt+vt),Xt=Wt*-dt;if(tt.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Xt),W.translateZ(Wt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),yt[10]===-1)W.projectionMatrix.copy(tt.projectionMatrix),W.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let N=ne+Wt,le=it+Wt,Jt=Vt-Xt,C=zt+(It-Xt),b=ht*it/le*N,z=mt*it/le*N;W.projectionMatrix.makePerspective(Jt,C,b,z,N,le),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function At(W,tt){tt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(tt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let tt=W.near,xt=W.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),B.near=P.near=R.near=tt,B.far=P.far=R.far=xt,(I!==B.near||F!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,F=B.far),B.layers.mask=W.layers.mask|6,R.layers.mask=B.layers.mask&-5,P.layers.mask=B.layers.mask&-3;let It=W.parent,yt=B.cameras;At(B,It);for(let kt=0;kt<yt.length;kt++)At(yt[kt],It);yt.length===2?et(B,R,P):B.projectionMatrix.copy(R.projectionMatrix),w===null&&W.isPerspectiveCamera&&(w={camera:W,fov:W.fov,zoom:W.zoom}),wt(W,B,It)};function wt(W,tt,xt){xt===null?W.matrix.copy(tt.matrixWorld):(W.matrix.copy(xt.matrixWorld),W.matrix.invert(),W.matrix.multiply(tt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(tt.projectionMatrix),W.projectionMatrixInverse.copy(tt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=zr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(W){return p[W]};let jt=null;function $t(W,tt){if(h=tt.getViewerPose(c||a),g=tt,h!==null){let xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let It=!1;xt.length!==B.cameras.length&&(B.cameras.length=0,It=!0);for(let it=0;it<xt.length;it++){let ht=xt[it],mt=null;if(f!==null)mt=f.getViewport(ht);else{let vt=u.getViewSubImage(d,ht);mt=vt.viewport,it===0&&(t.setRenderTargetTextures(x,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(x))}let dt=U[it];dt===void 0&&(dt=new Ye,dt.layers.enable(it),dt.viewport=new Le,U[it]=dt),dt.matrix.fromArray(ht.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(ht.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(mt.x,mt.y,mt.width,mt.height),it===0&&(B.matrix.copy(dt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),It===!0&&B.cameras.push(dt)}let yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let it=u.getDepthInformation(xt[0]);it&&it.isValid&&it.texture&&m.init(it,s.renderState)}if(yt&&yt.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let it=0;it<xt.length;it++){let ht=xt[it].camera;if(ht){let mt=p[ht];mt||(mt=new Zr,p[ht]=mt);let dt=u.getCameraImage(ht);mt.sourceTexture=dt}}}}for(let xt=0;xt<M.length;xt++){let It=S[xt],yt=M[xt];It!==null&&yt!==void 0&&yt.update(It,tt,c||a)}jt&&jt(W,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}let ut=new Ff;ut.setAnimationLoop($t),this.setAnimationLoop=function(W){jt=W},this.dispose=function(){}}},Z_=new ue,Gf=new Kt;Gf.set(-1,0,0,0,1,0,0,0,1);function $_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Nh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,E,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,_,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===hn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===hn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=t.get(p),E=_.envMap,x=_.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(Z_.makeRotationFromEuler(x)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Gf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function J_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){let S=M.program;n.uniformBlockBinding(x,S)}function c(x,M){let S=s[x.id];S===void 0&&(m(x),S=h(x),s[x.id]=S,x.addEventListener("dispose",_));let A=M.program;n.updateUBOMapping(x,A);let y=t.render.frame;r[x.id]!==y&&(d(x),r[x.id]=y)}function h(x){let M=u();x.__bindingPointIndex=M;let S=i.createBuffer(),A=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let M=s[x.id],S=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,w=S.length;y<w;y++){let R=S[y];if(Array.isArray(R))for(let P=0,U=R.length;P<U;P++)f(R[P],y,P,A);else f(R,y,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,M,S,A){if(v(x,M,S,A)===!0){let y=x.__offset,w=x.value;if(Array.isArray(w)){let R=0;for(let P=0;P<w.length;P++){let U=w[P],B=p(U);g(U,x.__data,R),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,x.__data)}}function g(x,M,S){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,S)}function v(x,M,S,A){let y=x.value,w=M+"_"+S;if(A[w]===void 0)return typeof y=="number"||typeof y=="boolean"?A[w]=y:ArrayBuffer.isView(y)?A[w]=y.slice():A[w]=y.clone(),!0;{let R=A[w];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return A[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function m(x){let M=x.uniforms,S=0,A=16;for(let w=0,R=M.length;w<R;w++){let P=Array.isArray(M[w])?M[w]:[M[w]];for(let U=0,B=P.length;U<B;U++){let I=P[U],F=Array.isArray(I.value)?I.value:[I.value];for(let G=0,X=F.length;G<X;G++){let rt=F[G],$=p(rt),nt=S%A,et=nt%$.boundary,At=nt+et;S+=et,At!==0&&A-At<$.storage&&(S+=A-At),I.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=$.storage}}}let y=S%A;return y>0&&(S+=A-y),x.__size=S,x.__cache={},this}function p(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",x),M}function _(x){let M=x.target;M.removeEventListener("dispose",_);let S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function E(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:E}}var K_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ai=null;function j_(){return ai===null&&(ai=new Hi(K_,16,16,Ji,Fe),ai.name="DFG_LUT",ai.minFilter=Je,ai.magFilter=Je,ai.wrapS=Jn,ai.wrapT=Jn,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}var Vl=class{constructor(t={}){let{canvas:e=sf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=$e}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=f,m=new Set([ol,al,rl]),p=new Set([$e,Gn,dr,$i,il,sl]),_=new Uint32Array(4),E=new Int32Array(4),x=new D,M=null,S=null,A=[],y=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,U=null,B=null,I=null,F=null;this._outputColorSpace=Ve;let G=0,X=0,rt=null,$=-1,nt=null,et=new Le,At=new Le,wt=null,jt=new Ht(0),$t=0,ut=e.width,W=e.height,tt=1,xt=null,It=null,yt=new Le(0,0,ut,W),kt=new Le(0,0,ut,W),ne=!1,it=new nr,ht=!1,mt=!1,dt=new ue,vt=new D,Vt=new Le,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function Xt(){return rt===null?tt:1}let N=n;function le(T,O){return e.getContext(T,O)}let Jt,C,b,z,q,Q,H,J,V,j,pt,bt,at,ct,Mt,Ut,Yt,k,St,st,_t,Et,lt;try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Me,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",Nn,!1),N===null){let O="webgl2";if(N=le(O,T),N===null)throw le(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(T){throw e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",Nn,!1),Zt("WebGLRenderer: "+T.message),T}function Bt(){Jt=new r1(N),Jt.init(),_t=new X_(N,Jt),C=new $x(N,Jt,t,_t),b=new V_(N,Jt),C.reversedDepthBuffer&&d&&b.buffers.depth.setReversed(!0),B=N.createFramebuffer(),I=N.createFramebuffer(),F=N.createFramebuffer(),z=new l1(N),q=new C_,Q=new W_(N,Jt,b,q,C,_t,z),H=new s1(R),J=new h0(N),Et=new Yx(N,J),V=new a1(N,J,z,Et),j=new h1(N,V,J,Et,z),k=new c1(N,C,Q),Mt=new Jx(q),pt=new R_(R,H,Jt,C,Et,Mt),bt=new $_(R,q),at=new I_,ct=new O_(Jt),Yt=new qx(R,H,b,j,g,l),Ut=new G_(R,j,C),lt=new J_(N,z,C,b),St=new Zx(N,Jt,z),st=new o1(N,Jt,z),z.programs=pt.programs,R.capabilities=C,R.extensions=Jt,R.properties=q,R.renderLists=at,R.shadowMap=Ut,R.state=b,R.info=z}v!==$e&&(w=new d1(v,e.width,e.height,o,s,r));let Nt=new su(R,N);this.xr=Nt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let T=Jt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Jt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(T){T!==void 0&&(tt=T,this.setSize(ut,W,!1))},this.getSize=function(T){return T.set(ut,W)},this.setSize=function(T,O,K=!0){if(Nt.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}ut=T,W=O,e.width=Math.floor(T*tt),e.height=Math.floor(O*tt),K===!0&&(e.style.width=T+"px",e.style.height=O+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(ut*tt,W*tt).floor()},this.setDrawingBufferSize=function(T,O,K){ut=T,W=O,tt=K,e.width=Math.floor(T*K),e.height=Math.floor(O*K),this.setViewport(0,0,T,O)},this.setEffects=function(T){if(v===$e){Zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let O=0;O<T.length;O++)if(T[O].isOutputPass===!0){qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(et)},this.getViewport=function(T){return T.copy(yt)},this.setViewport=function(T,O,K,Y){T.isVector4?yt.set(T.x,T.y,T.z,T.w):yt.set(T,O,K,Y),b.viewport(et.copy(yt).multiplyScalar(tt).round())},this.getScissor=function(T){return T.copy(kt)},this.setScissor=function(T,O,K,Y){T.isVector4?kt.set(T.x,T.y,T.z,T.w):kt.set(T,O,K,Y),b.scissor(At.copy(kt).multiplyScalar(tt).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(T){b.setScissorTest(ne=T)},this.setOpaqueSort=function(T){xt=T},this.setTransparentSort=function(T){It=T},this.getClearColor=function(T){return T.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,K=!0){let Y=0;if(T){let Z=!1;if(rt!==null){let Pt=rt.texture.format;Z=m.has(Pt)}if(Z){let Pt=rt.texture.type,Dt=p.has(Pt),Ct=Yt.getClearColor(),Ft=Yt.getClearAlpha(),Gt=Ct.r,ie=Ct.g,re=Ct.b;Dt?(_[0]=Gt,_[1]=ie,_[2]=re,_[3]=Ft,N.clearBufferuiv(N.COLOR,0,_)):(E[0]=Gt,E[1]=ie,E[2]=re,E[3]=Ft,N.clearBufferiv(N.COLOR,0,E))}else Y|=N.COLOR_BUFFER_BIT}O&&(Y|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(Y|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&N.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),U=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",Nn,!1),Yt.dispose(),at.dispose(),ct.dispose(),q.dispose(),H.dispose(),j.dispose(),Et.dispose(),lt.dispose(),pt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",Hu),Nt.removeEventListener("sessionend",Gu),is.stop()};function Me(T){T.preventDefault(),Dh("WebGLRenderer: Context Lost."),P=!0}function pe(){Dh("WebGLRenderer: Context Restored."),P=!1;let T=z.autoReset,O=Ut.enabled,K=Ut.autoUpdate,Y=Ut.needsUpdate,Z=Ut.type;Bt(),z.autoReset=T,Ut.enabled=O,Ut.autoUpdate=K,Ut.needsUpdate=Y,Ut.type=Z}function Nn(T){Zt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Yn(T){let O=T.target;O.removeEventListener("dispose",Yn),zp(O)}function zp(T){Hp(T),q.remove(T)}function Hp(T){let O=q.get(T).programs;O!==void 0&&(O.forEach(function(K){pt.releaseProgram(K)}),T.isShaderMaterial&&pt.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,K,Y,Z,Pt){O===null&&(O=zt);let Dt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Ct=Wp(T,O,K,Y,Z);b.setMaterial(Y,Dt);let Ft=K.index,Gt=1;if(Y.wireframe===!0){if(Ft=V.getWireframeAttribute(K),Ft===void 0)return;Gt=2}let ie=K.drawRange,re=K.attributes.position,Ot=ie.start*Gt,ge=(ie.start+ie.count)*Gt;Pt!==null&&(Ot=Math.max(Ot,Pt.start*Gt),ge=Math.min(ge,(Pt.start+Pt.count)*Gt)),Ft!==null?(Ot=Math.max(Ot,0),ge=Math.min(ge,Ft.count)):re!=null&&(Ot=Math.max(Ot,0),ge=Math.min(ge,re.count));let ke=ge-Ot;if(ke<0||ke===1/0)return;Et.setup(Z,Y,Ct,K,Ft);let Ae,be=St;if(Ft!==null&&(Ae=J.get(Ft),be=st,be.setIndex(Ae)),Z.isMesh)Y.wireframe===!0?(b.setLineWidth(Y.wireframeLinewidth*Xt()),be.setMode(N.LINES)):be.setMode(N.TRIANGLES);else if(Z.isLine){let Qe=Y.linewidth;Qe===void 0&&(Qe=1),b.setLineWidth(Qe*Xt()),Z.isLineSegments?be.setMode(N.LINES):Z.isLineLoop?be.setMode(N.LINE_LOOP):be.setMode(N.LINE_STRIP)}else Z.isPoints?be.setMode(N.POINTS):Z.isSprite&&be.setMode(N.TRIANGLES);if(Z.isBatchedMesh)if(Jt.get("WEBGL_multi_draw"))be.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Qe=Z._multiDrawStarts,Lt=Z._multiDrawCounts,an=Z._multiDrawCount,fe=Ft?J.get(Ft).bytesPerElement:1,An=q.get(Y).currentProgram.getUniforms();for(let Zn=0;Zn<an;Zn++)An.setValue(N,"_gl_DrawID",Zn),be.render(Qe[Zn]/fe,Lt[Zn])}else if(Z.isInstancedMesh)be.renderInstances(Ot,ke,Z.count);else if(K.isInstancedBufferGeometry){let Qe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Lt=Math.min(K.instanceCount,Qe);be.renderInstances(Ot,ke,Lt)}else be.render(Ot,ke)};function zu(T,O,K,Y){U!==null&&T.isNodeMaterial&&U.setObject(Y,T),ht===!0&&Mt.setState(T,K,!1),T.transparent===!0&&T.side===un&&T.forceSinglePass===!1?(T.side=hn,T.needsUpdate=!0,Wa(T,O,Y),T.side=qi,T.needsUpdate=!0,Wa(T,O,Y),T.side=un):Wa(T,O,Y)}this.compile=function(T,O,K=null){K===null&&(K=T),U!==null&&U.renderStart(T,O,K),S=ct.get(K),S.init(O),y.push(S),K.traverseVisible(function(Z){Z.isLight&&Z.layers.test(O.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),T!==K&&T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(O.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),S.setupLights(),U!==null&&U.updateLights(S.state.lightsArray),mt=this.localClippingEnabled,ht=Mt.init(this.clippingPlanes,mt),ht===!0&&Mt.setGlobalState(this.clippingPlanes,O),U!==null&&Ut.render(S.state.shadowsArray,K,O);let Y=new Set;return T.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Pt=Z.material;if(Pt)if(Array.isArray(Pt))for(let Dt=0;Dt<Pt.length;Dt++){let Ct=Pt[Dt];zu(Ct,K,O,Z),Y.add(Ct)}else zu(Pt,K,O,Z),Y.add(Pt)}),S=y.pop(),U!==null&&U.renderEnd(),Y},this.compileAsync=function(T,O,K=null){let Y=this.compile(T,O,K);return new Promise(Z=>{function Pt(){if(Y.forEach(function(Dt){let Ft=q.get(Dt).currentProgram;(Ft===void 0||Ft.isReady())&&Y.delete(Dt)}),Y.size===0){Z(T);return}setTimeout(Pt,10)}Jt.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let bc=null;function Gp(T){bc&&bc(T)}function Hu(){is.stop()}function Gu(){is.start()}let is=new Ff;is.setAnimationLoop(Gp),typeof self<"u"&&is.setContext(self),this.setAnimationLoop=function(T){bc=T,Nt.setAnimationLoop(T),T===null?is.stop():is.start()},Nt.addEventListener("sessionstart",Hu),Nt.addEventListener("sessionend",Gu),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;U!==null&&U.renderStart(T,O);let K=Nt.enabled===!0&&Nt.isPresenting===!0,Y=w!==null&&(rt===null||K)&&w.begin(R,rt);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(O),O=Nt.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,O,rt),S=ct.get(T,y.length),S.init(O),S.state.textureUnits=Q.getTextureUnits(),y.push(S),dt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),it.setFromProjectionMatrix(dt,zn,O.reversedDepth),mt=this.localClippingEnabled,ht=Mt.init(this.clippingPlanes,mt),M=at.get(T,A.length),M.init(),A.push(M),Nt.enabled===!0&&Nt.isPresenting===!0){let Dt=R.xr.getDepthSensingMesh();Dt!==null&&Ec(Dt,O,-1/0,R.sortObjects)}Ec(T,O,0,R.sortObjects),M.finish(),U!==null&&U.updateLights(S.state.lightsArray),R.sortObjects===!0&&M.sort(xt,It),Wt=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,Wt&&Yt.addToRenderList(M,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ht===!0&&Mt.beginShadows();let Z=S.state.shadowsArray;if(Ut.render(Z,T,O),ht===!0&&Mt.endShadows(),(Y&&w.hasRenderPass())===!1){let Dt=M.opaque,Ct=M.transmissive;if(S.setupLights(),O.isArrayCamera){let Ft=O.cameras;if(Ct.length>0)for(let Gt=0,ie=Ft.length;Gt<ie;Gt++){let re=Ft[Gt];Wu(Dt,Ct,T,re)}Wt&&Yt.render(T);for(let Gt=0,ie=Ft.length;Gt<ie;Gt++){let re=Ft[Gt];Vu(M,T,re,re.viewport)}}else Ct.length>0&&Wu(Dt,Ct,T,O),Wt&&Yt.render(T),Vu(M,T,O)}rt!==null&&X===0&&(Q.updateMultisampleRenderTarget(rt),Q.updateRenderTargetMipmap(rt)),Y&&w.end(R),T.isScene===!0&&T.onAfterRender(R,T,O),Et.resetDefaultState(),$=-1,nt=null,y.pop(),y.length>0?(S=y[y.length-1],Q.setTextureUnits(S.state.textureUnits),ht===!0&&Mt.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,U!==null&&U.renderEnd()};function Ec(T,O,K,Y){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLightProbeGrid)S.pushLightProbeGrid(T);else if(T.isLight)S.pushLight(T),T.castShadow&&S.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(it)){Y&&Vt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(dt);let Dt=j.update(T),Ct=T.material;Ct.visible&&M.push(T,Dt,Ct,K,Vt.z,null,O)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(it))){let Dt=j.update(T),Ct=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Vt.copy(T.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Vt.copy(Dt.boundingSphere.center)),Vt.applyMatrix4(T.matrixWorld).applyMatrix4(dt)),Array.isArray(Ct)){let Ft=Dt.groups;for(let Gt=0,ie=Ft.length;Gt<ie;Gt++){let re=Ft[Gt],Ot=Ct[re.materialIndex];Ot&&Ot.visible&&M.push(T,Dt,Ot,K,Vt.z,re,O)}}else Ct.visible&&M.push(T,Dt,Ct,K,Vt.z,null,O)}}let Pt=T.children;for(let Dt=0,Ct=Pt.length;Dt<Ct;Dt++)Ec(Pt[Dt],O,K,Y)}function Vu(T,O,K,Y){let{opaque:Z,transmissive:Pt,transparent:Dt}=T;S.setupLightsView(K),ht===!0&&Mt.setGlobalState(R.clippingPlanes,K),Y&&b.viewport(et.copy(Y)),Z.length>0&&Va(Z,O,K),Pt.length>0&&Va(Pt,O,K),Dt.length>0&&Va(Dt,O,K),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Wu(T,O,K,Y){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Y.id]===void 0){let Ot=Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Y.id]=new Ue(1,1,{generateMipmaps:!0,type:Ot?Fe:$e,minFilter:Zi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ce.workingColorSpace})}let Pt=S.state.transmissionRenderTarget[Y.id],Dt=Y.viewport||et;Pt.setSize(Dt.z*R.transmissionResolutionScale,Dt.w*R.transmissionResolutionScale);let Ct=R.getRenderTarget(),Ft=R.getActiveCubeFace(),Gt=R.getActiveMipmapLevel();R.setRenderTarget(Pt),R.getClearColor(jt),$t=R.getClearAlpha(),$t<1&&R.setClearColor(16777215,.5),R.clear(),Wt&&Yt.render(K);let ie=R.toneMapping;R.toneMapping=Hn;let re=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),S.setupLightsView(Y),ht===!0&&Mt.setGlobalState(R.clippingPlanes,Y),Va(T,K,Y),Q.updateMultisampleRenderTarget(Pt),Q.updateRenderTargetMipmap(Pt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let ge=0,ke=O.length;ge<ke;ge++){let Ae=O[ge],{object:be,geometry:Qe,material:Lt,group:an}=Ae;if(Lt.side===un&&be.layers.test(Y.layers)){let fe=Lt.side;Lt.side=hn,Lt.needsUpdate=!0,Xu(be,K,Y,Qe,Lt,an),Lt.side=fe,Lt.needsUpdate=!0,Ot=!0}}Ot===!0&&(Q.updateMultisampleRenderTarget(Pt),Q.updateRenderTargetMipmap(Pt))}R.setRenderTarget(Ct,Ft,Gt),R.setClearColor(jt,$t),re!==void 0&&(Y.viewport=re),R.toneMapping=ie}function Va(T,O,K){let Y=O.isScene===!0?O.overrideMaterial:null;for(let Z=0,Pt=T.length;Z<Pt;Z++){let Dt=T[Z],{object:Ct,geometry:Ft,group:Gt}=Dt,ie=Dt.material;ie.allowOverride===!0&&Y!==null&&(ie=Y),Ct.layers.test(K.layers)&&Xu(Ct,O,K,Ft,ie,Gt)}}function Xu(T,O,K,Y,Z,Pt){U!==null&&Z.isNodeMaterial&&U.setObject(T,Z),T.onBeforeRender(R,O,K,Y,Z,Pt),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(R,O,K,Y,T,Pt),Z.transparent===!0&&Z.side===un&&Z.forceSinglePass===!1?(Z.side=hn,Z.needsUpdate=!0,R.renderBufferDirect(K,O,Y,Z,T,Pt),Z.side=qi,Z.needsUpdate=!0,R.renderBufferDirect(K,O,Y,Z,T,Pt),Z.side=un):R.renderBufferDirect(K,O,Y,Z,T,Pt),T.onAfterRender(R,O,K,Y,Z,Pt)}function Wa(T,O,K){O.isScene!==!0&&(O=zt);let Y=q.get(T),Z=S.state.lights,Pt=S.state.shadowsArray,Dt=Z.state.version,Ct=pt.getParameters(T,Z.state,Pt,O,K,S.state.lightProbeGridArray),Ft=pt.getProgramCacheKey(Ct),Gt=Y.programs;Y.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?O.environment:null,Y.fog=O.fog;let ie=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Y.envMap=H.get(T.envMap||Y.environment,ie),Y.envMapRotation=Y.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Gt===void 0&&(T.addEventListener("dispose",Yn),Gt=new Map,Y.programs=Gt);let re=Gt.get(Ft);if(re!==void 0){if(Y.currentProgram===re&&Y.lightsStateVersion===Dt)return Yu(T,Ct),re}else Ct.uniforms=pt.getUniforms(T),U!==null&&T.isNodeMaterial&&U.build(T,K,Ct),T.onBeforeCompile(Ct,R),re=pt.acquireProgram(Ct,Ft),Gt.set(Ft,re),Y.uniforms=Ct.uniforms;let Ot=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ot.clippingPlanes=Mt.uniform),Yu(T,Ct),Y.needsLights=qp(T),Y.lightsStateVersion=Dt,Y.needsLights&&(Ot.ambientLightColor.value=Z.state.ambient,Ot.lightProbe.value=Z.state.probe,Ot.sunLights.value=Z.state.sun,Ot.sunLightShadows.value=Z.state.sunShadow,Ot.directionalLights.value=Z.state.directional,Ot.directionalLightShadows.value=Z.state.directionalShadow,Ot.spotLights.value=Z.state.spot,Ot.spotLightShadows.value=Z.state.spotShadow,Ot.rectAreaLights.value=Z.state.rectArea,Ot.ltc_1.value=Z.state.rectAreaLTC1,Ot.ltc_2.value=Z.state.rectAreaLTC2,Ot.pointLights.value=Z.state.point,Ot.pointLightShadows.value=Z.state.pointShadow,Ot.hemisphereLights.value=Z.state.hemi,Ot.sunShadowMatrix.value=Z.state.sunShadowMatrix,Ot.sunShadowCascade.value=Z.state.sunShadowCascade,Ot.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ot.spotLightMatrix.value=Z.state.spotLightMatrix,Ot.spotLightMap.value=Z.state.spotLightMap,Ot.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=S.state.lightProbeGridArray.length>0,Y.currentProgram=re,Y.uniformsList=null,re}function qu(T){if(T.uniformsList===null){let O=T.currentProgram.getUniforms();T.uniformsList=gr.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Yu(T,O){let K=q.get(T);K.outputColorSpace=O.outputColorSpace,K.batching=O.batching,K.batchingColor=O.batchingColor,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.instancingMorph=O.instancingMorph,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function Vp(T,O){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;x.setFromMatrixPosition(O.matrixWorld);for(let K=0,Y=T.length;K<Y;K++){let Z=T[K];if(Z.texture!==null&&Z.boundingBox.containsPoint(x))return Z}return null}function Wp(T,O,K,Y,Z){O.isScene!==!0&&(O=zt),Q.resetTextureUnits();let Pt=O.fog,Dt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?O.environment:null,Ct=rt===null?R.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ce.workingColorSpace,Ft=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Gt=H.get(Y.envMap||Dt,Ft),ie=Y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,re=!!K.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ot=!!K.morphAttributes.position,ge=!!K.morphAttributes.normal,ke=!!K.morphAttributes.color,Ae=Hn;Y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ae=R.toneMapping);let be=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Qe=be!==void 0?be.length:0,Lt=q.get(Y),an=S.state.lights;if(ht===!0&&(mt===!0||T!==nt)){let Te=T===nt&&Y.id===$;Mt.setState(Y,T,Te)}let fe=!1;Y.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==an.state.version||Lt.outputColorSpace!==Ct||Z.isBatchedMesh&&Lt.batching===!1||!Z.isBatchedMesh&&Lt.batching===!0||Z.isBatchedMesh&&Lt.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Lt.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Lt.instancing===!1||!Z.isInstancedMesh&&Lt.instancing===!0||Z.isSkinnedMesh&&Lt.skinning===!1||!Z.isSkinnedMesh&&Lt.skinning===!0||Z.isInstancedMesh&&Lt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Lt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Lt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Lt.instancingMorph===!1&&Z.morphTexture!==null||Lt.envMap!==Gt||Y.fog===!0&&Lt.fog!==Pt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==Mt.numPlanes||Lt.numIntersection!==Mt.numIntersection)||Lt.vertexAlphas!==ie||Lt.vertexTangents!==re||Lt.morphTargets!==Ot||Lt.morphNormals!==ge||Lt.morphColors!==ke||Lt.toneMapping!==Ae||Lt.morphTargetsCount!==Qe||!!Lt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(fe=!0):(fe=!0,Lt.__version=Y.version);let An=Lt.currentProgram;fe===!0&&(An=Wa(Y,O,Z),U&&Y.isNodeMaterial&&U.onUpdateProgram(Y,An,Lt));let Zn=!1,Li=!1,Ls=!1,Se=An.getUniforms(),Oe=Lt.uniforms;if(b.useProgram(An.program)&&(Zn=!0,Li=!0,Ls=!0),Y.id!==$&&($=Y.id,Li=!0),Lt.needsLights){let Te=Vp(S.state.lightProbeGridArray,Z);Lt.lightProbeGrid!==Te&&(Lt.lightProbeGrid=Te,Li=!0)}if(Zn||nt!==T){b.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Se.setValue(N,"projectionMatrix",T.projectionMatrix),Se.setValue(N,"viewMatrix",T.matrixWorldInverse);let Ui=Se.map.cameraPosition;Ui!==void 0&&Ui.setValue(N,vt.setFromMatrixPosition(T.matrixWorld)),C.logarithmicDepthBuffer&&Se.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Se.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),nt!==T&&(nt=T,Li=!0,Ls=!0)}if(Lt.needsLights&&(an.state.sunShadowMap.length>0&&Se.setValue(N,"sunShadowMap",an.state.sunShadowMap,Q),an.state.directionalShadowMap.length>0&&Se.setValue(N,"directionalShadowMap",an.state.directionalShadowMap,Q),an.state.spotShadowMap.length>0&&Se.setValue(N,"spotShadowMap",an.state.spotShadowMap,Q),an.state.pointShadowMap.length>0&&Se.setValue(N,"pointShadowMap",an.state.pointShadowMap,Q)),Z.isSkinnedMesh){Se.setOptional(N,Z,"bindMatrix"),Se.setOptional(N,Z,"bindMatrixInverse");let Te=Z.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),Se.setValue(N,"boneTexture",Te.boneTexture,Q))}Z.isBatchedMesh&&(Se.setOptional(N,Z,"batchingTexture"),Se.setValue(N,"batchingTexture",Z._matricesTexture,Q),Se.setOptional(N,Z,"batchingIdTexture"),Se.setValue(N,"batchingIdTexture",Z._indirectTexture,Q),Se.setOptional(N,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Se.setValue(N,"batchingColorTexture",Z._colorsTexture,Q));let Di=K.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&k.update(Z,K,An),(Li||Lt.receiveShadow!==Z.receiveShadow)&&(Lt.receiveShadow=Z.receiveShadow,Se.setValue(N,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&O.environment!==null&&(Oe.envMapIntensity.value=O.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=j_()),Li){if(Se.setValue(N,"toneMappingExposure",R.toneMappingExposure),Lt.needsLights&&Xp(Oe,Ls),Pt&&Y.fog===!0&&bt.refreshFogUniforms(Oe,Pt),bt.refreshMaterialUniforms(Oe,Y,tt,W,S.state.transmissionRenderTarget[T.id]),Lt.needsLights&&Lt.lightProbeGrid){let Te=Lt.lightProbeGrid;Oe.probesSH.value=Te.texture,Oe.probesMin.value.copy(Te.boundingBox.min),Oe.probesMax.value.copy(Te.boundingBox.max),Oe.probesResolution.value.copy(Te.resolution)}gr.upload(N,qu(Lt),Oe,Q)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(gr.upload(N,qu(Lt),Oe,Q),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Se.setValue(N,"center",Z.center),Se.setValue(N,"modelViewMatrix",Z.modelViewMatrix),Se.setValue(N,"normalMatrix",Z.normalMatrix),Se.setValue(N,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let Te=Y.uniformsGroups;for(let Ui=0,Ds=Te.length;Ui<Ds;Ui++){let $u=Te[Ui];lt.update($u,An),lt.bind($u,An)}}return An}function Xp(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.sunLights.needsUpdate=O,T.sunLightShadows.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function qp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(T,O,K){let Y=q.get(T);Y.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),q.get(T.texture).__webglTexture=O,q.get(T.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:K,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){let K=q.get(T);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,K=0){rt=T,G=O,X=K;let Y=null,Z=!1,Pt=!1;if(T){let Ct=q.get(T);if(Ct.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(N.FRAMEBUFFER,Ct.__webglFramebuffer),et.copy(T.viewport),At.copy(T.scissor),wt=T.scissorTest,b.viewport(et),b.scissor(At),b.setScissorTest(wt),$=-1;return}else if(Ct.__webglFramebuffer===void 0)Q.setupRenderTarget(T);else if(Ct.__hasExternalTextures)Q.rebindTextures(T,q.get(T.texture).__webglTexture,q.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let ie=T.depthTexture;if(Ct.__boundDepthTexture!==ie){if(ie!==null&&q.has(ie)&&(T.width!==ie.image.width||T.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(T)}}let Ft=T.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(Pt=!0);let Gt=q.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Gt[O])?Y=Gt[O][K]:Y=Gt[O],Z=!0):T.samples>0&&Q.useMultisampledRTT(T)===!1?Y=q.get(T).__webglMultisampledFramebuffer:Array.isArray(Gt)?Y=Gt[K]:Y=Gt,et.copy(T.viewport),At.copy(T.scissor),wt=T.scissorTest}else et.copy(yt).multiplyScalar(tt).floor(),At.copy(kt).multiplyScalar(tt).floor(),wt=ne;if(K!==0&&(Y=B),b.bindFramebuffer(N.FRAMEBUFFER,Y)&&b.drawBuffers(T,Y),b.viewport(et),b.scissor(At),b.setScissorTest(wt),Z){let Ct=q.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ct.__webglTexture,K)}else if(Pt){let Ct=O;for(let Ft=0;Ft<T.textures.length;Ft++){let Gt=q.get(T.textures[Ft]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ft,Gt.__webglTexture,K,Ct)}}else if(T!==null&&K!==0){let Ct=q.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ct.__webglTexture,K)}$=-1};function Zu(T){let O=q.get(T);return(O.__readFormat!==T.format||O.__readType!==T.type)&&(O.__readFormat=T.format,O.__readType=T.type,O.__formatReadable=C.textureFormatReadable(T.format),O.__typeReadable=C.textureTypeReadable(T.type)),O}this.readRenderTargetPixels=function(T,O,K,Y,Z,Pt,Dt,Ct=0){if(!(T&&T.isWebGLRenderTarget)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ft=Ft[Dt]),Ft){b.bindFramebuffer(N.FRAMEBUFFER,Ft);try{let Gt=T.textures[Ct],ie=Gt.format,re=Gt.type;T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ct);let Ot=Zu(Gt);if(Ot.__formatReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-Y&&K>=0&&K<=T.height-Z&&N.readPixels(O,K,Y,Z,_t.convert(ie),_t.convert(re),Pt)}finally{let Gt=rt!==null?q.get(rt).__webglFramebuffer:null;b.bindFramebuffer(N.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(T,O,K,Y,Z,Pt,Dt,Ct=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ft=Ft[Dt]),Ft)if(O>=0&&O<=T.width-Y&&K>=0&&K<=T.height-Z){b.bindFramebuffer(N.FRAMEBUFFER,Ft);let Gt=T.textures[Ct],ie=Gt.format,re=Gt.type;T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ct);let Ot=Zu(Gt);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ge=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ge),N.bufferData(N.PIXEL_PACK_BUFFER,Pt.byteLength,N.STREAM_READ),N.readPixels(O,K,Y,Z,_t.convert(ie),_t.convert(re),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let ke=rt!==null?q.get(rt).__webglFramebuffer:null;b.bindFramebuffer(N.FRAMEBUFFER,ke);let Ae=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await af(N,Ae,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ge),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Pt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ge),N.deleteSync(Ae),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,K=0){let Y=Math.pow(2,-K),Z=Math.floor(T.image.width*Y),Pt=Math.floor(T.image.height*Y),Dt=O!==null?O.x:0,Ct=O!==null?O.y:0;Q.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,Dt,Ct,Z,Pt),b.unbindTexture()},this.copyTextureToTexture=function(T,O,K=null,Y=null,Z=0,Pt=0){let Dt,Ct,Ft,Gt,ie,re,Ot,ge,ke,Ae=T.isCompressedTexture?T.mipmaps[Pt]:T.image;if(K!==null)Dt=K.max.x-K.min.x,Ct=K.max.y-K.min.y,Ft=K.isBox3?K.max.z-K.min.z:1,Gt=K.min.x,ie=K.min.y,re=K.isBox3?K.min.z:0;else{let Oe=Math.pow(2,-Z);Dt=Math.floor(Ae.width*Oe),Ct=Math.floor(Ae.height*Oe),T.isDataArrayTexture?Ft=Ae.depth:T.isData3DTexture?Ft=Math.floor(Ae.depth*Oe):Ft=1,Gt=0,ie=0,re=0}Y!==null?(Ot=Y.x,ge=Y.y,ke=Y.z):(Ot=0,ge=0,ke=0);let be=_t.convert(O.format),Qe=_t.convert(O.type),Lt;O.isData3DTexture?(Q.setTexture3D(O,0),Lt=N.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Q.setTexture2DArray(O,0),Lt=N.TEXTURE_2D_ARRAY):(Q.setTexture2D(O,0),Lt=N.TEXTURE_2D),b.activeTexture(N.TEXTURE0),b.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),b.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),b.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);let an=b.getParameter(N.UNPACK_ROW_LENGTH),fe=b.getParameter(N.UNPACK_IMAGE_HEIGHT),An=b.getParameter(N.UNPACK_SKIP_PIXELS),Zn=b.getParameter(N.UNPACK_SKIP_ROWS),Li=b.getParameter(N.UNPACK_SKIP_IMAGES);b.pixelStorei(N.UNPACK_ROW_LENGTH,Ae.width),b.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ae.height),b.pixelStorei(N.UNPACK_SKIP_PIXELS,Gt),b.pixelStorei(N.UNPACK_SKIP_ROWS,ie),b.pixelStorei(N.UNPACK_SKIP_IMAGES,re);let Ls=T.isDataArrayTexture||T.isData3DTexture,Se=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){let Oe=q.get(T),Di=q.get(O),Te=q.get(Oe.__renderTarget),Ui=q.get(Di.__renderTarget);b.bindFramebuffer(N.READ_FRAMEBUFFER,Te.__webglFramebuffer),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Ds=0;Ds<Ft;Ds++)Ls&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,q.get(T).__webglTexture,Z,re+Ds),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,q.get(O).__webglTexture,Pt,ke+Ds)),N.blitFramebuffer(Gt,ie,Dt,Ct,Ot,ge,Dt,Ct,N.DEPTH_BUFFER_BIT,N.NEAREST);b.bindFramebuffer(N.READ_FRAMEBUFFER,null),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(Z!==0||T.isRenderTargetTexture||q.has(T)){let Oe=q.get(T),Di=q.get(O);b.bindFramebuffer(N.READ_FRAMEBUFFER,I),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,F);for(let Te=0;Te<Ft;Te++)Ls?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Oe.__webglTexture,Z,re+Te):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Oe.__webglTexture,Z),Se?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Di.__webglTexture,Pt,ke+Te):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Di.__webglTexture,Pt),Z!==0?N.blitFramebuffer(Gt,ie,Dt,Ct,Ot,ge,Dt,Ct,N.COLOR_BUFFER_BIT,N.NEAREST):Se?N.copyTexSubImage3D(Lt,Pt,Ot,ge,ke+Te,Gt,ie,Dt,Ct):N.copyTexSubImage2D(Lt,Pt,Ot,ge,Gt,ie,Dt,Ct);b.bindFramebuffer(N.READ_FRAMEBUFFER,null),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Se?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(Lt,Pt,Ot,ge,ke,Dt,Ct,Ft,be,Qe,Ae.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(Lt,Pt,Ot,ge,ke,Dt,Ct,Ft,be,Ae.data):N.texSubImage3D(Lt,Pt,Ot,ge,ke,Dt,Ct,Ft,be,Qe,Ae):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Pt,Ot,ge,Dt,Ct,be,Qe,Ae.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Pt,Ot,ge,Ae.width,Ae.height,be,Ae.data):N.texSubImage2D(N.TEXTURE_2D,Pt,Ot,ge,Dt,Ct,be,Qe,Ae);b.pixelStorei(N.UNPACK_ROW_LENGTH,an),b.pixelStorei(N.UNPACK_IMAGE_HEIGHT,fe),b.pixelStorei(N.UNPACK_SKIP_PIXELS,An),b.pixelStorei(N.UNPACK_SKIP_ROWS,Zn),b.pixelStorei(N.UNPACK_SKIP_IMAGES,Li),Pt===0&&O.generateMipmaps&&N.generateMipmap(Lt),b.unbindTexture()},this.initRenderTarget=function(T){q.get(T).__webglFramebuffer===void 0&&Q.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Q.setTextureCube(T,0):T.isData3DTexture?Q.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Q.setTexture2DArray(T,0):Q.setTexture2D(T,0),b.unbindTexture()},this.resetState=function(){G=0,X=0,rt=null,b.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}};var li=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Q_=new Xi(-1,1,1,-1,0,1),ru=class extends ve{constructor(){super(),this.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new te([0,2,0,0,2,0],2))}},tv=new ru,ci=class{constructor(t){this._mesh=new _e(tv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Q_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ra={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ot},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ue},cameraProjectionMatrixInverse:{value:new ue},cameraWorldMatrix:{value:new ue},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new D(-1,-1,-1)},sceneBoxMax:{value:new D(1,1,1)}},vertexShader:`

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
		}`},Ca={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},ql={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Vf(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=ev(t),n=e.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=e[a],l=2*Math.PI*o/n,c=new D(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Hi(s,t,t);return r.wrapS=xn,r.wrapT=xn,r.needsUpdate=!0,r}function ev(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),s=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=a++;r++,s--}return n}var Pa={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:au(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ot},cameraProjectionMatrixInverse:{value:new ue},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function au(i,t,e){let n=nv(i,t,e),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function nv(i,t,e){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*t*s/i,a=Math.pow(s/(i-1),e);n.push(new D(Math.cos(r),Math.sin(r),a))}return n}var Ki={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Yl=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,g=t-d,v=e-f,m,p;g>v?(m=1,p=0):(m=0,p=1);let _=g-m+h,E=v-p+h,x=g-1+2*h,M=v-1+2*h,S=l&255,A=c&255,y=this.perm[S+this.perm[A]]%12,w=this.perm[S+m+this.perm[A+p]]%12,R=this.perm[S+1+this.perm[A+1]]%12,P=.5-g*g-v*v;P<0?n=0:(P*=P,n=P*P*this._dot(this.grad3[y],g,v));let U=.5-_*_-E*E;U<0?s=0:(U*=U,s=U*U*this._dot(this.grad3[w],_,E));let B=.5-x*x-M*M;return B<0?r=0:(B*=B,r=B*B*this._dot(this.grad3[R],x,M)),70*(n+s+r)}noise3d(t,e,n){let s,r,a,o,c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),d=Math.floor(n+c),f=1/6,g=(h+u+d)*f,v=h-g,m=u-g,p=d-g,_=t-v,E=e-m,x=n-p,M,S,A,y,w,R;_>=E?E>=x?(M=1,S=0,A=0,y=1,w=1,R=0):_>=x?(M=1,S=0,A=0,y=1,w=0,R=1):(M=0,S=0,A=1,y=1,w=0,R=1):E<x?(M=0,S=0,A=1,y=0,w=1,R=1):_<x?(M=0,S=1,A=0,y=0,w=1,R=1):(M=0,S=1,A=0,y=1,w=1,R=0);let P=_-M+f,U=E-S+f,B=x-A+f,I=_-y+2*f,F=E-w+2*f,G=x-R+2*f,X=_-1+3*f,rt=E-1+3*f,$=x-1+3*f,nt=h&255,et=u&255,At=d&255,wt=this.perm[nt+this.perm[et+this.perm[At]]]%12,jt=this.perm[nt+M+this.perm[et+S+this.perm[At+A]]]%12,$t=this.perm[nt+y+this.perm[et+w+this.perm[At+R]]]%12,ut=this.perm[nt+1+this.perm[et+1+this.perm[At+1]]]%12,W=.6-_*_-E*E-x*x;W<0?s=0:(W*=W,s=W*W*this._dot3(this.grad3[wt],_,E,x));let tt=.6-P*P-U*U-B*B;tt<0?r=0:(tt*=tt,r=tt*tt*this._dot3(this.grad3[jt],P,U,B));let xt=.6-I*I-F*F-G*G;xt<0?a=0:(xt*=xt,a=xt*xt*this._dot3(this.grad3[$t],I,F,G));let It=.6-X*X-rt*rt-$*$;return It<0?o=0:(It*=It,o=It*It*this._dot3(this.grad3[ut],X,rt,$)),32*(s+r+a+o)}noise4d(t,e,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,d,f,g,v=(t+e+n+s)*l,m=Math.floor(t+v),p=Math.floor(e+v),_=Math.floor(n+v),E=Math.floor(s+v),x=(m+p+_+E)*c,M=m-x,S=p-x,A=_-x,y=E-x,w=t-M,R=e-S,P=n-A,U=s-y,B=w>R?32:0,I=w>P?16:0,F=R>P?8:0,G=w>U?4:0,X=R>U?2:0,rt=P>U?1:0,$=B+I+F+G+X+rt,nt=a[$][0]>=3?1:0,et=a[$][1]>=3?1:0,At=a[$][2]>=3?1:0,wt=a[$][3]>=3?1:0,jt=a[$][0]>=2?1:0,$t=a[$][1]>=2?1:0,ut=a[$][2]>=2?1:0,W=a[$][3]>=2?1:0,tt=a[$][0]>=1?1:0,xt=a[$][1]>=1?1:0,It=a[$][2]>=1?1:0,yt=a[$][3]>=1?1:0,kt=w-nt+c,ne=R-et+c,it=P-At+c,ht=U-wt+c,mt=w-jt+2*c,dt=R-$t+2*c,vt=P-ut+2*c,Vt=U-W+2*c,zt=w-tt+3*c,Wt=R-xt+3*c,Xt=P-It+3*c,N=U-yt+3*c,le=w-1+4*c,Jt=R-1+4*c,C=P-1+4*c,b=U-1+4*c,z=m&255,q=p&255,Q=_&255,H=E&255,J=o[z+o[q+o[Q+o[H]]]]%32,V=o[z+nt+o[q+et+o[Q+At+o[H+wt]]]]%32,j=o[z+jt+o[q+$t+o[Q+ut+o[H+W]]]]%32,pt=o[z+tt+o[q+xt+o[Q+It+o[H+yt]]]]%32,bt=o[z+1+o[q+1+o[Q+1+o[H+1]]]]%32,at=.6-w*w-R*R-P*P-U*U;at<0?h=0:(at*=at,h=at*at*this._dot4(r[J],w,R,P,U));let ct=.6-kt*kt-ne*ne-it*it-ht*ht;ct<0?u=0:(ct*=ct,u=ct*ct*this._dot4(r[V],kt,ne,it,ht));let Mt=.6-mt*mt-dt*dt-vt*vt-Vt*Vt;Mt<0?d=0:(Mt*=Mt,d=Mt*Mt*this._dot4(r[j],mt,dt,vt,Vt));let Ut=.6-zt*zt-Wt*Wt-Xt*Xt-N*N;Ut<0?f=0:(Ut*=Ut,f=Ut*Ut*this._dot4(r[pt],zt,Wt,Xt,N));let Yt=.6-le*le-Jt*Jt-C*C-b*b;return Yt<0?g=0:(Yt*=Yt,g=Yt*Yt*this._dot4(r[bt],le,Jt,C,b)),27*(h+u+d+f+g)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}_dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}};var Ia=class i extends li{constructor(t,e,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Vf(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Ue(this.width,this.height,{type:Fe,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ye({defines:Object.assign({},Ra.defines),uniforms:dn.clone(Ra.uniforms),vertexShader:Ra.vertexShader,fragmentShader:Ra.fragmentShader,blending:Be,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new aa,this.normalMaterial.blending=Be,this.pdMaterial=new ye({defines:Object.assign({},Pa.defines),uniforms:dn.clone(Pa.uniforms),vertexShader:Pa.vertexShader,fragmentShader:Pa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ye({defines:Object.assign({},Ca.defines),uniforms:dn.clone(Ca.uniforms),vertexShader:Ca.vertexShader,fragmentShader:Ca.fragmentShader,blending:Be}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ye({uniforms:dn.clone(Ki.uniforms),vertexShader:Ki.vertexShader,fragmentShader:Ki.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:pa,blendDst:ps,blendEquation:In,blendSrcAlpha:fa,blendDstAlpha:ps,blendEquationAlpha:In}),this.blendMaterial=new ye({uniforms:dn.clone(ql.uniforms),vertexShader:ql.vertexShader,fragmentShader:ql.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:jo,blendSrc:pa,blendDst:ps,blendEquation:In,blendSrcAlpha:fa,blendDstAlpha:ps,blendEquationAlpha:In}),this._fsQuad=new ci(null),this._originalClearColor=new Ht,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new ni,this.depthTexture.format=ri,this.depthTexture.type=$i,this.normalRenderTarget=new Ue(this.width,this.height,{minFilter:Ie,magFilter:Ie,type:Fe,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=au(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Be,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Be,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Be,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Be,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Be,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,s,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=o,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_renderOverride(t,e,n,s,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new Yl,n=t*t*4,s=new Uint8Array(n);for(let a=0;a<t;a++)for(let o=0;o<t;o++){let l=a,c=o;s[(a*t+o)*4]=(e.noise(l,c)*.5+.5)*255,s[(a*t+o)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(a*t+o)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(a*t+o)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let r=new Hi(s,t,t,_n,$e);return r.wrapS=xn,r.wrapT=xn,r.needsUpdate=!0,r}};Ia.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Wf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ht(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var vr=class i extends li{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ot(t.x,t.y):new ot(256,256),this.clearColor=new Ht(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ue(r,a,{type:Fe,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Ue(r,a,{type:Fe,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Ue(r,a,{type:Fe,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Wf;this.highPassUniforms=dn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ye({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ot(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=dn.clone(Ki.uniforms),this.blendMaterial=new ye({uniforms:this.copyUniforms,vertexShader:Ki.vertexShader,fragmentShader:Ki.fragmentShader,premultipliedAlpha:!0,blending:fs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ht,this._oldClearAlpha=1,this._basic=new ln,this._fsQuad=new ci(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ot(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new ye({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ot(.5,.5)},direction:{value:new ot(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new ye({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};vr.BlurDirectionX=new ot(1,0);vr.BlurDirectionY=new ot(0,1);var Zl=class extends li{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ye?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=dn.clone(t.uniforms),this.material=new ye({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new ci(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Xf={name:"VignetteShader",uniforms:{tDiffuse:{value:null},offset:{value:1},darkness:{value:1}},vertexShader:`

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

		}`};var La={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};var $l=class extends li{constructor(t,e,n){super(),this.scene=t,this.camera=e;let s=n.focus!==void 0?n.focus:1,r=n.aperture!==void 0?n.aperture:.025,a=n.maxblur!==void 0?n.maxblur:1;this._renderTargetDepth=new Ue(1,1,{minFilter:Ie,magFilter:Ie,type:Fe}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new ar,this._materialDepth.depthPacking=Ih,this._materialDepth.blending=Be;let o=dn.clone(La.uniforms);o.tDepth.value=this._renderTargetDepth.texture,o.focus.value=s,o.aspect.value=e.aspect,o.aperture.value=r,o.maxblur.value=a,o.nearClip.value=e.near,o.farClip.value=e.far,this.materialBokeh=new ye({defines:Object.assign({},La.defines),uniforms:o,vertexShader:La.vertexShader,fragmentShader:La.fragmentShader}),this.uniforms=o,this._fsQuad=new ci(this.materialBokeh),this._oldClearColor=new Ht}render(t,e,n){this.scene.overrideMaterial=this._materialDepth,t.getClearColor(this._oldClearColor);let s=t.getClearAlpha(),r=t.autoClear;t.autoClear=!1,t.setClearColor(16777215),t.setClearAlpha(1),t.setRenderTarget(this._renderTargetDepth),t.clear(),t.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),t.clear(),this._fsQuad.render(t)),this.scene.overrideMaterial=null,t.setClearColor(this._oldClearColor),t.setClearAlpha(s),t.autoClear=r}setSize(t,e){this.materialBokeh.uniforms.aspect.value=t/e,this._renderTargetDepth.setSize(t,e)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}};var fu={};Zp(fu,{APRON:()=>ee,ARCH:()=>Ai,BALL_R:()=>fn,DRAIN_GUIDES:()=>lu,FLIPPER:()=>sv,FLIPPERS:()=>vn,GATE:()=>Ms,GI_SPOTS_UPPER:()=>ic,INLANE_GUIDES:()=>Mr,INSERTS:()=>du,ORBIT:()=>rv,ORBIT_GUIDES:()=>Ql,ORBIT_POST:()=>tc,ORBIT_POSTS:()=>hu,ORBIT_ROLLOVERS:()=>Da,ORBIT_WEDGES:()=>cu,PF:()=>Tt,POP:()=>Sr,POPS:()=>Ss,RAMP:()=>br,RAMPS:()=>ji,RETURN_LANES:()=>hi,SAUCER:()=>ui,SHOOTER:()=>ae,SLINGS:()=>yr,STAR_POSTS:()=>jl,TARGETS:()=>Xn,TARGET_GUIDES:()=>ec,TARGET_POSTS:()=>uu,TARGET_RUBBER:()=>di,TOP_LANES:()=>Ri,WIRE:()=>nc,batParts:()=>Kl});var wi={width:514.35,length:1066.8,thickness:12.7,slope:6.5,ball:27,centreX:237.175,orbitLane:40,throat:54},gt={left_flipper:{id:"left_flipper",type:"flipper",name:"Left flipper",x:177.141,y:164.34,rotation:-25,side:"left",pivot:[148.275,177.8],rest:-25,stroke:52,baseR:12.5,tipR:7.75,reach:68.45,width:88.7,length:25,height:24},right_flipper:{id:"right_flipper",type:"flipper",name:"Right flipper",x:297.209,y:164.34,rotation:205,side:"right",pivot:[326.075,177.8],rest:205,stroke:52,baseR:12.5,tipR:7.75,reach:68.45,width:88.7,length:25,height:24},left_sling:{id:"left_sling",type:"sling",name:"Left slingshot",x:116.838,y:305.327,side:"left",posts:[[98.5,355],[135.177,255.654],[98.5,278.1]],roles:["upper_inner","lower","upper_outer"],postRadius:4.75,contactRadius:11.1},left_inlane_guide:{id:"left_inlane_guide",type:"plastic",name:"Left inlane guide \xB7 contact plate",x:91.979,y:280.268,z:12,thickness:3,holes:[[62.669,238.124,4.5],[113.521,202.549,4.5]],collidable:!0,assembly:"blank_left_inlane_guide",notes:"Original authored adaptation inspired by pinball flipper ball guide, Tinkot, CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/); no source mesh copied.",outline:[[51.4,375.097],[51.379,375.436],[51.315,375.769],[51.21,376.091],[51.066,376.398],[50.884,376.684],[50.668,376.945],[50.421,377.178],[50.147,377.377],[49.85,377.54],[49.534,377.665],[49.206,377.749],[48.87,377.792],[48.531,377.792],[48.194,377.749],[47.866,377.665],[47.55,377.54],[47.253,377.377],[46.979,377.178],[46.732,376.945],[46.516,376.684],[46.334,376.398],[46.19,376.091],[46.085,375.769],[46.021,375.436],[46,375.097],[46,229.217],[118.937,184.579],[120.385,183.818],[121.919,183.253],[123.514,182.894],[125.142,182.745],[126.776,182.81],[128.387,183.088],[129.949,183.574],[131.433,184.259],[132.816,185.132],[134.072,186.179],[135.181,187.38],[136.124,188.716],[136.885,190.163],[137.45,191.698],[137.81,193.293],[137.958,194.921],[137.893,196.555],[137.615,198.166],[137.13,199.727],[136.444,201.212],[135.571,202.594],[134.525,203.85],[133.323,204.96],[131.987,205.903],[64.784,247.031],[61.862,249.087],[59.225,251.498],[56.916,254.226],[54.974,257.225],[53.43,260.447],[52.308,263.84],[51.628,267.347],[51.4,270.913]]},left_inlane_guide_cover:{id:"left_inlane_guide_cover",type:"plastic",name:"Left inlane guide \xB7 cover plate",x:87.264,y:291.085,z:30.8,thickness:3,holes:[[62.669,238.124,4.5],[113.521,202.549,4.5],[46,390,4.5]],collidable:!0,assembly:"blank_left_inlane_guide",notes:"Original authored adaptation inspired by pinball flipper ball guide, Tinkot, CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/); no source mesh copied.",outline:[[54,380.995],[55.102,382.11],[56.049,383.359],[56.827,384.72],[57.421,386.171],[57.821,387.686],[58.022,389.241],[58.018,390.808],[57.812,392.362],[57.405,393.876],[56.805,395.324],[56.022,396.682],[55.07,397.927],[53.963,399.038],[52.722,399.995],[51.368,400.784],[49.922,401.389],[48.41,401.802],[46.857,402.015],[45.289,402.025],[43.734,401.83],[42.217,401.436],[40.764,400.848],[39.399,400.076],[38.147,399.133],[37.027,398.036],[36.06,396.803],[35.26,395.455],[34.643,394.014],[34.218,392.505],[33.992,390.954],[33.97,389.386],[34.152,387.829],[34.534,386.309],[35.11,384.851],[35.871,383.481],[36.804,382.221],[37.892,381.092],[39.117,380.115],[40.459,379.305],[41.895,378.676],[43.4,378.238],[43.4,227.759],[117.58,182.361],[119.329,181.443],[121.182,180.76],[123.109,180.325],[125.076,180.146],[127.05,180.224],[128.996,180.56],[130.882,181.147],[132.675,181.975],[134.345,183.03],[135.863,184.294],[137.203,185.745],[138.342,187.359],[139.261,189.107],[139.943,190.961],[140.378,192.887],[140.557,194.854],[140.479,196.828],[140.143,198.774],[139.556,200.66],[138.728,202.454],[137.673,204.123],[136.409,205.641],[134.958,206.981],[133.345,208.12],[66.141,249.249],[63.49,251.114],[61.098,253.301],[59.004,255.775],[57.242,258.496],[55.841,261.419],[54.824,264.497],[54.207,267.679],[54,270.913]]},left_inlane_guide_stack_1:{id:"left_inlane_guide_stack_1",type:"post",name:"Left inlane guide \xB7 spacer stack 1",x:62.669,y:238.124,width:8,length:8,height:30,postType:"pin",profile:"stacked_return_spacer_v1"},left_inlane_guide_stack_2:{id:"left_inlane_guide_stack_2",type:"post",name:"Left inlane guide \xB7 spacer stack 2",x:113.521,y:202.549,width:8,length:8,height:30,postType:"pin",profile:"stacked_return_spacer_v1"},left_outlane_post:{id:"left_outlane_post",type:"post",name:"Left outlane post",x:46,y:390,width:18.891,length:18.891,height:26.987,postType:"rubber"},left_inlane:{id:"left_inlane",type:"rollover",name:"Left inlane rollover",x:69.4,y:315,rotation:90},left_outlane:{id:"left_outlane",type:"rollover",name:"Left outlane rollover",x:26,y:315,rotation:90},right_sling:{id:"right_sling",type:"sling",name:"Right slingshot",x:357.512,y:305.327,side:"right",posts:[[375.85,355],[339.173,255.654],[375.85,278.1]],roles:["upper_inner","lower","upper_outer"],postRadius:4.75,contactRadius:11.1},right_inlane_guide:{id:"right_inlane_guide",type:"plastic",name:"Right inlane guide \xB7 contact plate",x:382.371,y:280.268,z:12,thickness:3,holes:[[411.681,238.124,4.5],[360.829,202.549,4.5]],collidable:!0,assembly:"blank_right_inlane_guide",notes:"Original authored adaptation inspired by pinball flipper ball guide, Tinkot, CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/); no source mesh copied.",outline:[[422.95,270.913],[422.722,267.347],[422.042,263.84],[420.92,260.447],[419.376,257.225],[417.434,254.226],[415.125,251.498],[412.489,249.087],[409.566,247.031],[342.363,205.903],[341.027,204.96],[339.826,203.85],[338.779,202.594],[337.906,201.212],[337.221,199.727],[336.735,198.166],[336.457,196.555],[336.392,194.921],[336.54,193.293],[336.9,191.698],[337.465,190.163],[338.226,188.716],[339.169,187.38],[340.278,186.179],[341.534,185.132],[342.917,184.259],[344.401,183.574],[345.963,183.088],[347.574,182.81],[349.208,182.745],[350.836,182.894],[352.431,183.253],[353.965,183.818],[355.413,184.579],[428.35,229.217],[428.35,375.097],[428.329,375.436],[428.265,375.769],[428.16,376.091],[428.016,376.398],[427.834,376.684],[427.618,376.945],[427.371,377.178],[427.097,377.377],[426.8,377.54],[426.484,377.665],[426.156,377.749],[425.82,377.792],[425.481,377.792],[425.144,377.749],[424.816,377.665],[424.5,377.54],[424.203,377.377],[423.929,377.178],[423.682,376.945],[423.466,376.684],[423.284,376.398],[423.14,376.091],[423.035,375.769],[422.971,375.436],[422.95,375.097]]},right_inlane_guide_cover:{id:"right_inlane_guide_cover",type:"plastic",name:"Right inlane guide \xB7 cover plate",x:387.086,y:291.085,z:30.8,thickness:3,holes:[[411.681,238.124,4.5],[360.829,202.549,4.5],[428.35,390,4.5]],collidable:!0,assembly:"blank_right_inlane_guide",notes:"Original authored adaptation inspired by pinball flipper ball guide, Tinkot, CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/); no source mesh copied.",outline:[[420.35,270.913],[420.143,267.679],[419.526,264.497],[418.509,261.419],[417.108,258.496],[415.346,255.775],[413.252,253.301],[410.86,251.114],[408.209,249.249],[341.005,208.12],[339.392,206.981],[337.941,205.641],[336.677,204.123],[335.622,202.454],[334.794,200.66],[334.207,198.774],[333.871,196.828],[333.793,194.854],[333.972,192.887],[334.407,190.961],[335.09,189.107],[336.008,187.359],[337.147,185.745],[338.487,184.294],[340.005,183.03],[341.675,181.975],[343.468,181.147],[345.354,180.56],[347.301,180.224],[349.274,180.146],[351.241,180.325],[353.168,180.76],[355.021,181.443],[356.77,182.361],[430.95,227.759],[430.95,378.238],[432.455,378.676],[433.891,379.305],[435.233,380.115],[436.459,381.092],[437.547,382.221],[438.479,383.481],[439.24,384.851],[439.816,386.309],[440.198,387.829],[440.38,389.386],[440.358,390.954],[440.132,392.505],[439.707,394.014],[439.09,395.455],[438.291,396.803],[437.323,398.036],[436.203,399.133],[434.951,400.076],[433.587,400.848],[432.133,401.436],[430.616,401.83],[429.061,402.025],[427.494,402.015],[425.941,401.802],[424.428,401.389],[422.983,400.784],[421.628,399.995],[420.387,399.038],[419.28,397.927],[418.328,396.682],[417.545,395.324],[416.945,393.876],[416.538,392.362],[416.332,390.808],[416.329,389.241],[416.529,387.686],[416.93,386.171],[417.524,384.72],[418.301,383.359],[419.248,382.11],[420.35,380.995]]},right_inlane_guide_stack_1:{id:"right_inlane_guide_stack_1",type:"post",name:"Right inlane guide \xB7 spacer stack 1",x:411.681,y:238.124,width:8,length:8,height:30,postType:"pin",profile:"stacked_return_spacer_v1"},right_inlane_guide_stack_2:{id:"right_inlane_guide_stack_2",type:"post",name:"Right inlane guide \xB7 spacer stack 2",x:360.829,y:202.549,width:8,length:8,height:30,postType:"pin",profile:"stacked_return_spacer_v1"},right_outlane_post:{id:"right_outlane_post",type:"post",name:"Right outlane post",x:428.35,y:390,width:18.891,length:18.891,height:26.987,postType:"rubber"},right_inlane:{id:"right_inlane",type:"rollover",name:"Right inlane rollover",x:404.95,y:315,rotation:90},right_outlane:{id:"right_outlane",type:"rollover",name:"Right outlane rollover",x:448.35,y:315,rotation:90},apron:{id:"apron",type:"apron",name:"Apron",x:240.175,y:110.562,width:468.35,length:221.123,height:47.6,lip:{centre:[237.175,238.705],radius:149.8,from:[303.525,104.4],to:[170.825,104.4]},outline:[[6,0],[474.35,0],[474.35,221.123],[303.525,105.9],[303.525,104.4],[295.717,100.817],[287.716,97.688],[279.549,95.023],[271.243,92.83],[262.824,91.117],[254.322,89.889],[245.762,89.151],[237.175,88.905],[228.588,89.151],[220.029,89.889],[211.526,91.117],[203.107,92.83],[194.801,95.023],[186.634,97.688],[178.633,100.817],[170.825,104.4],[170.825,105.9],[6,217.076]]},left_drain_guide:{id:"left_drain_guide",type:"guide",name:"Left drain guide (under apron)",x:147.5,y:88,rotation:-236.31,thickness:1.6,height:28.575,from:[167,101],to:[128,75]},right_drain_guide:{id:"right_drain_guide",type:"guide",name:"Right drain guide (under apron)",x:269.5,y:87.5,rotation:-250.201,thickness:1.6,height:28.575,from:[307,101],to:[232,74]},shooter:{id:"shooter",type:"plunger",name:"Shooter lane",x:491.35,y:52.2,width:34,length:104.4,height:30},boundary_left:{id:"boundary_left",type:"guide",name:"Left side rail",x:3,y:468.4,thickness:6,height:28.575,from:[3,6],to:[3,930.8]},boundary_right:{id:"boundary_right",type:"guide",name:"Right side rail",x:511.35,y:458.4,thickness:6,height:28.575,from:[511.35,6],to:[511.35,910.8]},boundary_top:{id:"boundary_top",type:"guide",name:"Top rail",x:247.175,y:1063.8,rotation:-90,thickness:6,height:28.575,from:[136,1063.8],to:[358.35,1063.8]},top_arch_left:{id:"top_arch_left",type:"guide",name:"Top arch (left)",x:69.5,y:997.3,thickness:6,height:28.575,smooth:!1,points:[[3,930.8],[3.506,942.392],[5.021,953.895],[7.532,965.223],[11.021,976.289],[15.461,987.008],[20.819,997.3],[27.053,1007.086],[34.116,1016.291],[41.955,1024.845],[50.509,1032.684],[59.714,1039.747],[69.5,1045.981],[79.792,1051.339],[90.511,1055.779],[101.577,1059.268],[112.905,1061.779],[124.408,1063.294],[136,1063.8]],line:[[3,930.8],[3.506,942.392],[5.021,953.895],[7.532,965.223],[11.021,976.289],[15.461,987.008],[20.819,997.3],[27.053,1007.086],[34.116,1016.291],[41.955,1024.845],[50.509,1032.684],[59.714,1039.747],[69.5,1045.981],[79.792,1051.339],[90.511,1055.779],[101.577,1059.268],[112.905,1061.779],[124.408,1063.294],[136,1063.8]]},top_arch_right:{id:"top_arch_right",type:"guide",name:"Top arch (right)",x:434.85,y:987.3,thickness:6,height:28.575,smooth:!1,points:[[358.35,1063.8],[371.685,1063.218],[384.918,1061.476],[397.949,1058.587],[410.679,1054.573],[423.011,1049.465],[434.85,1043.302],[446.107,1036.13],[456.697,1028.005],[466.537,1018.987],[475.555,1009.147],[483.68,998.557],[490.852,987.3],[497.015,975.461],[502.123,963.129],[506.137,950.399],[509.026,937.368],[510.768,924.135],[511.35,910.8]],line:[[358.35,1063.8],[371.685,1063.218],[384.918,1061.476],[397.949,1058.587],[410.679,1054.573],[423.011,1049.465],[434.85,1043.302],[446.107,1036.13],[456.697,1028.005],[466.537,1018.987],[475.555,1009.147],[483.68,998.557],[490.852,987.3],[497.015,975.461],[502.123,963.129],[506.137,950.399],[509.026,937.368],[510.768,924.135],[511.35,910.8]]},shooter_divider:{id:"shooter_divider",type:"guide",name:"Shooter lane divider",x:471.35,y:530.562,thickness:6,height:28.575,from:[471.35,221.123],to:[471.35,840]},shooter_gate:{id:"shooter_gate",type:"gate",name:"Shooter lane gate",x:485.675,y:857.509,rotation:40,width:51.368,length:8,height:28.575,from:[466,841],to:[505.35,874.019],oneWay:!0},left_orbit_guide:{id:"left_orbit_guide",type:"guide",name:"Left orbit guide",x:87.721,y:801.144,thickness:1.6,height:28.575,smooth:!1,points:[[109.535,588.118],[56.071,680.721],[53.284,686.075],[50.973,691.653],[49.158,697.41],[47.851,703.304],[47.063,709.289],[46.8,715.321],[46.8,921.665],[47.138,929.597],[48.15,937.471],[49.829,945.231],[52.162,952.82],[55.132,960.183],[58.719,967.267],[69,980],[79,987],[90,993]],line:[[109.535,588.118],[56.071,680.721],[53.284,686.075],[50.973,691.653],[49.158,697.41],[47.851,703.304],[47.063,709.289],[46.8,715.321],[46.8,921.665],[47.138,929.597],[48.15,937.471],[49.829,945.231],[52.162,952.82],[55.132,960.183],[58.719,967.267],[69,980],[79,987],[90,993]],mounts:[{postId:"left_orbit_post"},{at:.24,side:-1},{at:.5659,side:-1},{at:.9493,side:-1}]},right_orbit_guide:{id:"right_orbit_guide",type:"guide",name:"Right orbit guide",x:396.182,y:747.813,thickness:1.6,height:28.575,smooth:!0,points:[[384,991],[426,937],[427.55,715.321],[427.287,709.289],[426.499,703.304],[425.192,697.41],[423.377,691.653],[421.066,686.075],[418.279,680.721],[364.815,588.118]],line:[[384,991],[387.07,987.26],[390.257,983.718],[393.53,980.32],[396.857,977.012],[400.205,973.739],[403.542,970.449],[406.837,967.087],[410.056,963.599],[413.169,959.931],[416.142,956.029],[418.944,951.839],[421.542,947.306],[423.905,942.378],[426,937],[427.048,933.698],[428.006,930.095],[428.88,926.21],[429.671,922.056],[430.382,917.651],[431.017,913.009],[431.578,908.146],[432.068,903.079],[432.491,897.822],[432.849,892.392],[433.145,886.804],[433.382,881.074],[433.563,875.219],[433.692,869.252],[433.77,863.191],[433.802,857.051],[433.789,850.847],[433.735,844.596],[433.643,838.313],[433.516,832.014],[433.357,825.715],[433.168,819.431],[432.953,813.178],[432.715,806.972],[432.456,800.828],[432.18,794.763],[431.889,788.792],[431.587,782.93],[431.276,777.194],[430.96,771.599],[430.641,766.161],[430.322,760.896],[430.007,755.819],[429.697,750.947],[429.397,746.294],[429.109,741.877],[428.836,737.711],[428.581,733.812],[428.347,730.196],[428.137,726.879],[427.954,723.876],[427.801,721.203],[427.681,718.875],[427.596,716.909],[427.55,715.321],[427.46,711.761],[427.287,709.289],[426.958,706.288],[426.499,703.304],[425.91,700.343],[425.192,697.41],[424.347,694.512],[423.377,691.653],[422.282,688.839],[421.066,686.075],[419.941,683.784],[418.279,680.721],[417.245,678.856],[415.952,676.556],[414.418,673.851],[412.662,670.774],[410.704,667.357],[408.562,663.632],[406.255,659.63],[403.803,655.384],[401.224,650.925],[398.537,646.285],[395.762,641.496],[392.917,636.59],[390.021,631.6],[387.094,626.556],[384.154,621.49],[381.22,616.436],[378.312,611.424],[375.448,606.486],[372.647,601.655],[369.929,596.962],[367.312,592.439],[364.815,588.118]]},left_orbit_wedge:{id:"left_orbit_wedge",type:"guide",name:"Left orbit throat wedge",x:33.292,y:577.195,thickness:1.6,height:28.575,smooth:!0,points:[[5.2,690],[5.66,679.472],[7.035,669.023],[9.316,658.735],[12.485,648.684],[16.518,638.948],[21.384,629.6],[67,553],[58,546],[52,534],[5.2,464.39]],line:[[5.2,690],[5.319,686.488],[5.439,682.975],[5.66,679.472],[6.017,675.977],[6.476,672.491],[7.035,669.023],[7.696,665.573],[8.457,662.141],[9.316,658.735],[10.275,655.355],[11.332,652.002],[12.485,648.684],[13.735,645.401],[15.08,642.153],[16.518,638.948],[17.873,636.125],[19.321,633.345],[21.384,629.6],[22.91,627.044],[24.969,623.856],[27.484,620.117],[30.376,615.907],[33.568,611.309],[36.983,606.403],[40.542,601.269],[44.168,595.99],[47.783,590.646],[51.309,585.318],[54.669,580.087],[57.785,575.034],[60.578,570.241],[62.973,565.788],[64.89,561.756],[66.252,558.227],[66.981,555.281],[67,553],[64.865,550.015],[61.248,548.224],[58,546],[55.979,542.675],[54.393,538.84],[52,534],[50.431,531.379],[48.575,528.402],[46.46,525.102],[44.114,521.514],[41.564,517.672],[38.839,513.612],[35.966,509.368],[32.972,504.974],[29.887,500.464],[26.736,495.874],[23.548,491.238],[20.352,486.591],[17.173,481.966],[14.041,477.399],[10.983,472.925],[8.027,468.577],[5.2,464.39]]},left_orbit_post:{id:"left_orbit_post",type:"post",name:"Left orbit post",x:110.91,y:585.736,width:11,length:11,height:30},right_orbit_post:{id:"right_orbit_post",type:"post",name:"Right orbit post",x:363.44,y:585.736,width:11,length:11,height:30},left_orbit:{id:"left_orbit",type:"rollover",name:"Left orbit rollover",x:26,y:800,rotation:90},right_orbit:{id:"right_orbit",type:"rollover",name:"Right orbit rollover",x:448.35,y:800,rotation:90},left_ramp:{id:"left_ramp",type:"ramp",name:"Left ramp",x:176,y:520,rampType:"plastic",rampWidth:42,widthStart:52,mouthLength:60,wallHeight:28,switches:[.82],entry:"flap",exit:"wireform",points:[[141,602,0],[105,670,14],[95,764,38],[121,833,58],[124,862,66],[123.212,869.999,66.688],[120.879,877.69,67.375],[117.09,884.778,68.063],[111.991,890.991,68.75],[105.778,896.09,69.438],[98.69,899.879,70.125],[90.999,902.212,70.813],[83,903,71.5],[75,903,72]],profile:[[141,602,0,52],[138.368,606.821,.983,51.764],[135.634,611.581,1.938,51.118],[132.825,616.296,2.872,50.153],[129.969,620.983,3.794,48.962],[127.095,625.659,4.71,47.637],[124.23,630.341,5.629,46.268],[121.403,635.045,6.558,44.949],[118.641,639.788,7.505,43.771],[115.971,644.587,8.478,42.825],[113.423,649.458,9.484,42.204],[111.024,654.418,10.532,42],[108.802,659.484,11.629,42],[106.785,664.672,12.782,42],[105,670,14,42],[103.513,675.061,15.184,42],[102.109,680.29,16.428,42],[100.793,685.666,17.726,42],[99.57,691.167,19.071,42],[98.448,696.77,20.457,42],[97.432,702.454,21.878,42],[96.529,708.197,23.328,42],[95.744,713.976,24.799,42],[95.083,719.77,26.287,42],[94.552,725.556,27.784,42],[94.158,731.313,29.284,42],[93.907,737.018,30.781,42],[93.804,742.65,32.268,42],[93.856,748.186,33.741,42],[94.069,753.604,35.191,42],[94.448,758.883,36.613,42],[95,764,38,42],[95.999,769.821,39.601,42],[97.459,775.631,41.231,42],[99.3,781.409,42.878,42],[101.441,787.135,44.533,42],[103.803,792.789,46.184,42],[106.305,798.35,47.822,42],[108.867,803.799,49.434,42],[111.409,809.116,51.012,42],[113.849,814.279,52.544,42],[116.109,819.269,54.019,42],[118.108,824.066,55.427,42],[119.765,828.65,56.758,42],[121,833,58,42],[122.166,838.683,59.64,42],[122.985,844.151,61.254,42],[123.518,849.309,62.771,42],[123.824,854.066,64.116,42],[123.965,858.327,65.217,42],[124,862,66,42],[123.802,866.316,66.49,42],[123.212,869.999,66.688,42],[122.233,873.901,67.031,42],[120.879,877.69,67.375,42],[119.158,881.327,67.719,42],[117.09,884.778,68.063,42],[114.692,888.009,68.406,42],[111.991,890.991,68.75,42],[109.009,893.692,69.094,42],[105.778,896.09,69.438,42],[102.327,898.158,69.781,42],[98.69,899.879,70.125,42],[94.901,901.233,70.469,42],[90.999,902.212,70.813,42],[87.02,902.752,71.168,42],[83,903,71.5,42],[79.002,903.049,71.762,42],[75,903,72,42]],supports:[{at:.3,side:1,x:69.197,y:690.563,z:20.374},{at:.24,side:-1,x:132.109,y:683.861,z:15.433},{at:.66,side:1,x:88.011,y:829.704,z:53.457},{at:.96,side:-1,x:92.91,y:932.127,z:71.001}]},left_wireform:{id:"left_wireform",type:"ramp",name:"Left wireform",x:75,y:903,rampType:"wire_2",rampWidth:36,sideRails:[{side:-1,from:0,to:.2032}],entry:"ramp",exit:"drop",points:[[75,903,67],[63,903,66.6],[56.757,902.385,66.4],[50.754,900.564,66.2],[45.222,897.607,66],[40.373,893.627,65.8],[36.393,888.778,65.6],[33.436,883.246,65.4],[31.615,877.243,65.2],[31,871,65],[31,760,59],[31,690,54.5],[37,620,50.5],[46,560,47],[56,500,44.5],[64,455,43],[69,334,42]],profile:[[75,903,67,36],[70.855,903.037,66.861,36],[66.711,903.073,66.723,36],[63,903,66.6,36],[59.736,902.8,66.495,36],[56.757,902.385,66.4,36],[53.711,901.621,66.3,36],[50.754,900.564,66.2,36],[47.916,899.22,66.1,36],[45.222,897.607,66,36],[42.7,895.735,65.9,36],[40.373,893.627,65.8,36],[38.265,891.3,65.7,36],[36.393,888.778,65.6,36],[34.78,886.084,65.5,36],[33.436,883.246,65.4,36],[32.379,880.289,65.3,36],[31.615,877.243,65.2,36],[31.217,874.62,65.129,36],[31,871,65,36],[30.901,868.358,64.881,36],[30.824,864.958,64.718,36],[30.766,860.871,64.515,36],[30.726,856.168,64.277,36],[30.701,850.92,64.007,36],[30.691,845.198,63.709,36],[30.693,839.073,63.386,36],[30.705,832.616,63.043,36],[30.726,825.898,62.683,36],[30.753,818.991,62.31,36],[30.785,811.964,61.928,36],[30.821,804.89,61.54,36],[30.857,797.839,61.152,36],[30.893,790.882,60.765,36],[30.927,784.091,60.384,36],[30.956,777.536,60.014,36],[30.979,771.288,59.657,36],[30.995,765.419,59.318,36],[31,760,59,36],[30.981,753.603,58.615,36],[30.931,747.401,58.231,36],[30.86,741.366,57.847,36],[30.778,735.471,57.464,36],[30.697,729.687,57.083,36],[30.626,723.987,56.704,36],[30.576,718.344,56.327,36],[30.557,712.729,55.954,36],[30.579,707.115,55.584,36],[30.654,701.474,55.218,36],[30.79,695.778,54.857,36],[31,690,54.5,36],[31.278,684.145,54.148,36],[31.608,678.262,53.801,36],[31.988,672.36,53.459,36],[32.414,666.45,53.12,36],[32.881,660.54,52.785,36],[33.386,654.641,52.453,36],[33.925,648.762,52.124,36],[34.495,642.912,51.797,36],[35.091,637.101,51.471,36],[35.709,631.339,51.147,36],[36.347,625.636,50.823,36],[37,620,50.5,36],[37.691,614.362,50.17,36],[38.422,608.794,49.837,36],[39.19,603.284,49.503,36],[39.988,597.821,49.17,36],[40.812,592.395,48.838,36],[41.656,586.995,48.511,36],[42.516,581.61,48.19,36],[43.385,576.228,47.877,36],[44.259,570.84,47.573,36],[45.132,565.434,47.28,36],[46,560,47,36],[46.875,554.511,46.732,36],[47.769,548.971,46.473,36],[48.678,543.398,46.224,36],[49.598,537.814,45.982,36],[50.525,532.236,45.749,36],[51.454,526.684,45.524,36],[52.383,521.179,45.306,36],[53.305,515.738,45.095,36],[54.219,510.382,44.891,36],[55.118,505.129,44.693,36],[56,500,44.5,36],[57.055,494.217,44.278,36],[58.131,488.817,44.066,36],[59.21,483.631,43.863,36],[60.273,478.49,43.669,36],[61.302,473.226,43.486,36],[62.278,467.669,43.313,36],[63.184,461.65,43.151,36],[64,455,43,36],[64.453,450.516,42.914,36],[64.863,445.783,42.835,36],[65.236,440.82,42.763,36],[65.572,435.646,42.698,36],[65.877,430.28,42.639,36],[66.153,424.742,42.584,36],[66.402,419.05,42.534,36],[66.63,413.224,42.489,36],[66.838,407.283,42.447,36],[67.03,401.247,42.407,36],[67.209,395.133,42.37,36],[67.378,388.963,42.335,36],[67.541,382.753,42.301,36],[67.701,376.525,42.267,36],[67.861,370.297,42.234,36],[68.024,364.087,42.2,36],[68.193,357.917,42.164,36],[68.373,351.803,42.127,36],[68.565,345.767,42.088,36],[68.773,339.826,42.046,36],[69,334,42,36]],supports:[{at:.05,side:1,x:58.016,y:877.69,z:66.024},{at:.39,side:1,x:54.378,y:699.08,z:55.03},{at:.6197,side:-1,x:22.444,y:557.469,z:47.062},{at:.9,side:-1,x:43.169,y:407.139,z:42.452}]},right_ramp:{id:"right_ramp",type:"ramp",name:"Right ramp",x:298.35,y:520,rampType:"plastic",rampWidth:42,widthStart:52,mouthLength:60,wallHeight:28,switches:[.82],entry:null,exit:"wireform",points:[[333,601,0],[374,678,14],[376,770,38],[352,823,58],[350.35,862,66],[351.138,869.999,66.688],[353.471,877.69,67.375],[357.26,884.778,68.063],[362.359,890.991,68.75],[368.572,896.09,69.438],[375.66,899.879,70.125],[383.351,902.212,70.813],[391.35,903,71.5],[399.35,903,72]],profile:[[333,601,0,52],[335.813,606.11,.915,51.735],[338.762,611.178,1.798,51.008],[341.814,616.217,2.657,49.926],[344.933,621.235,3.5,48.601],[348.087,626.242,4.335,47.146],[351.241,631.25,5.17,45.681],[354.361,636.268,6.013,44.321],[357.412,641.306,6.872,43.183],[360.361,646.375,7.755,42.377],[363.174,651.484,8.669,42.011],[365.817,656.645,9.624,42],[368.255,661.867,10.626,42],[370.454,667.159,11.684,42],[372.38,672.534,12.806,42],[374,678,14,42],[375.323,683.464,15.233,42],[376.467,689.107,16.532,42],[377.434,694.9,17.889,42],[378.23,700.811,19.299,42],[378.859,706.81,20.755,42],[379.325,712.868,22.251,42],[379.632,718.954,23.78,42],[379.786,725.038,25.337,42],[379.79,731.089,26.914,42],[379.649,737.077,28.506,42],[379.367,742.973,30.105,42],[378.949,748.745,31.706,42],[378.399,754.365,33.303,42],[377.721,759.8,34.888,42],[376.92,765.022,36.456,42],[376,770,38,42],[374.584,775.54,39.837,42],[372.697,780.844,41.749,42],[370.443,785.941,43.711,42],[367.93,790.863,45.696,42],[365.264,795.64,47.677,42],[362.551,800.304,49.628,42],[359.897,804.885,51.522,42],[357.409,809.415,53.333,42],[355.192,813.923,55.034,42],[353.354,818.441,56.598,42],[352,823,58,42],[350.897,828.998,59.6,42],[350.244,835.234,61.072,42],[349.944,841.479,62.402,42],[349.902,847.505,63.575,42],[350.02,853.086,64.575,42],[350.202,857.993,65.389,42],[350.35,862,66,42],[350.588,866.389,66.457,42],[351.138,869.999,66.688,42],[352.117,873.901,67.031,42],[353.471,877.69,67.375,42],[355.192,881.327,67.719,42],[357.26,884.778,68.063,42],[359.658,888.009,68.406,42],[362.359,890.991,68.75,42],[365.341,893.692,69.094,42],[368.572,896.09,69.438,42],[372.023,898.158,69.781,42],[375.66,899.879,70.125,42],[379.449,901.233,70.469,42],[383.351,902.212,70.813,42],[387.33,902.752,71.168,42],[391.35,903,71.5,42],[395.348,903.049,71.762,42],[399.35,903,72,42]],supports:[{at:.3,side:-1,x:407.103,y:691.181,z:17.954},{at:.24,side:1,x:344.342,y:683.155,z:13.27},{at:.66,side:-1,x:382.1,y:827.126,z:55.704},{at:.96,side:1,x:381.348,y:932.114,z:70.993}]},right_wireform:{id:"right_wireform",type:"ramp",name:"Right wireform",x:399.35,y:903,rampType:"wire_2",rampWidth:36,sideRails:[{side:1,from:0,to:.2032}],entry:"ramp",exit:"drop",points:[[399.35,903,67],[411.35,903,66.6],[417.593,902.385,66.4],[423.596,900.564,66.2],[429.128,897.607,66],[433.977,893.627,65.8],[437.957,888.778,65.6],[440.914,883.246,65.4],[442.735,877.243,65.2],[443.35,871,65],[443.35,760,59],[443.35,690,54.5],[437.35,620,50.5],[428.35,560,47],[418.35,500,44.5],[409,411,43],[403,336,42]],profile:[[399.35,903,67,36],[403.495,903.037,66.861,36],[407.639,903.073,66.723,36],[411.35,903,66.6,36],[414.614,902.8,66.495,36],[417.593,902.385,66.4,36],[420.639,901.621,66.3,36],[423.596,900.564,66.2,36],[426.434,899.22,66.1,36],[429.128,897.607,66,36],[431.65,895.735,65.9,36],[433.977,893.627,65.8,36],[436.085,891.3,65.7,36],[437.957,888.778,65.6,36],[439.57,886.084,65.5,36],[440.914,883.246,65.4,36],[441.971,880.289,65.3,36],[442.735,877.243,65.2,36],[443.133,874.62,65.129,36],[443.35,871,65,36],[443.449,868.358,64.881,36],[443.526,864.958,64.718,36],[443.584,860.871,64.515,36],[443.624,856.168,64.277,36],[443.649,850.92,64.007,36],[443.659,845.198,63.709,36],[443.657,839.073,63.386,36],[443.645,832.616,63.043,36],[443.624,825.898,62.683,36],[443.597,818.991,62.31,36],[443.565,811.964,61.928,36],[443.529,804.89,61.54,36],[443.493,797.839,61.152,36],[443.457,790.882,60.765,36],[443.423,784.091,60.384,36],[443.394,777.536,60.014,36],[443.371,771.288,59.657,36],[443.355,765.419,59.318,36],[443.35,760,59,36],[443.369,753.603,58.615,36],[443.419,747.401,58.231,36],[443.49,741.366,57.847,36],[443.572,735.471,57.464,36],[443.653,729.687,57.083,36],[443.724,723.987,56.704,36],[443.774,718.344,56.327,36],[443.793,712.729,55.954,36],[443.771,707.115,55.584,36],[443.696,701.474,55.218,36],[443.56,695.778,54.857,36],[443.35,690,54.5,36],[443.072,684.145,54.148,36],[442.742,678.262,53.801,36],[442.362,672.36,53.459,36],[441.936,666.45,53.12,36],[441.469,660.54,52.785,36],[440.964,654.641,52.453,36],[440.425,648.762,52.124,36],[439.855,642.912,51.797,36],[439.259,637.101,51.471,36],[438.641,631.339,51.147,36],[438.003,625.636,50.823,36],[437.35,620,50.5,36],[436.659,614.362,50.17,36],[435.928,608.794,49.837,36],[435.16,603.284,49.503,36],[434.362,597.821,49.17,36],[433.538,592.395,48.838,36],[432.694,586.995,48.511,36],[431.834,581.61,48.19,36],[430.965,576.228,47.877,36],[430.091,570.84,47.573,36],[429.218,565.434,47.28,36],[428.35,560,47,36],[427.47,554.589,46.731,36],[426.564,549.252,46.469,36],[425.638,543.96,46.215,36],[424.7,538.688,45.969,36],[423.755,533.406,45.731,36],[422.811,528.089,45.503,36],[421.876,522.708,45.283,36],[420.955,517.236,45.072,36],[420.056,511.646,44.872,36],[419.185,505.909,44.681,36],[418.35,500,44.5,36],[417.632,494.568,44.35,36],[416.928,488.967,44.213,36],[416.238,483.22,44.086,36],[415.562,477.348,43.969,36],[414.9,471.374,43.86,36],[414.25,465.322,43.759,36],[413.615,459.212,43.664,36],[412.992,453.069,43.574,36],[412.383,446.914,43.489,36],[411.787,440.77,43.406,36],[411.204,434.659,43.326,36],[410.634,428.604,43.246,36],[410.077,422.628,43.166,36],[409.532,416.752,43.084,36],[409,411,43,36],[408.458,405.024,42.911,36],[407.941,399.114,42.826,36],[407.447,393.261,42.745,36],[406.972,387.457,42.666,36],[406.513,381.694,42.589,36],[406.066,375.962,42.514,36],[405.628,370.253,42.441,36],[405.196,364.559,42.368,36],[404.765,358.87,42.296,36],[404.334,353.178,42.223,36],[403.898,347.475,42.15,36],[403.455,341.752,42.076,36],[403,336,42,36]],supports:[{at:.05,side:-1,x:416.244,y:877.745,z:66.027},{at:.2851,side:-1,x:419.692,y:762.272,z:59.132},{at:.6386,side:1,x:450.239,y:547.347,z:46.57},{at:.9,side:1,x:432.451,y:407.628,z:42.982}]},pop_1:{id:"pop_1",type:"bumper",name:"Left pop bumper",x:235,y:849.33,width:60,length:60,height:44},pop_2:{id:"pop_2",type:"bumper",name:"Right pop bumper",x:271,y:771.33,width:60,length:60,height:44},pop_3:{id:"pop_3",type:"bumper",name:"Lower pop bumper",x:199,y:773.33,width:60,length:60,height:44},target_a:{id:"target_a",type:"target",name:"Centre target A",x:199.075,y:690,width:25.4,length:10,height:35},target_a_insert:{id:"target_a_insert",type:"insert",name:"Centre target A insert",x:199.9,y:668,width:19,length:19,height:3,shape:"circle",color:"f4f3f8"},target_b:{id:"target_b",type:"target",name:"Centre target B",x:237.175,y:690,width:25.4,length:10,height:35},target_b_insert:{id:"target_b_insert",type:"insert",name:"Centre target B insert",x:238,y:668,width:19,length:19,height:3,shape:"circle",color:"f4f3f8"},target_c:{id:"target_c",type:"target",name:"Centre target C",x:275.275,y:690,width:25.4,length:10,height:35},target_c_insert:{id:"target_c_insert",type:"insert",name:"Centre target C insert",x:276.1,y:668,width:19,length:19,height:3,shape:"circle",color:"f4f3f8"},left_ramp_arrow:{id:"left_ramp_arrow",type:"insert",name:"Left ramp arrow",x:157.3,y:545.5,rotation:16.67,width:24,length:46,height:3,shape:"arrow",color:"a99cff"},left_orbit_arrow:{id:"left_orbit_arrow",type:"insert",name:"Left orbit arrow",x:71,y:590,rotation:30,width:21,length:40,height:3,shape:"arrow",color:"8f7dff"},extra_ball_insert:{id:"extra_ball_insert",type:"insert",name:"Extra ball insert",x:237.175,y:450,width:24,length:24,height:3,shape:"circle",color:"a99cff",icon:"ball"},lock_insert:{id:"lock_insert",type:"insert",name:"Lock insert",x:237.175,y:487,width:29,length:26,height:3,shape:"hexagon",color:"f4f3f8",icon:"lock"},shoot_again:{id:"shoot_again",type:"insert",name:"Shoot again insert",x:237.18,y:139,width:26,length:26,height:3,shape:"shield",color:"a99cff"},left_outlane_insert:{id:"left_outlane_insert",type:"insert",name:"Left outlane insert",x:26,y:386,width:16,length:16,height:3,shape:"circle",color:"f4f3f8"},left_inlane_insert:{id:"left_inlane_insert",type:"insert",name:"Left inlane insert",x:69.4,y:386,width:16,length:16,height:3,shape:"circle",color:"f4f3f8"},right_inlane_insert:{id:"right_inlane_insert",type:"insert",name:"Right inlane insert",x:404.95,y:386,width:16,length:16,height:3,shape:"circle",color:"f4f3f8"},right_outlane_insert:{id:"right_outlane_insert",type:"insert",name:"Right outlane insert",x:448.35,y:386,width:16,length:16,height:3,shape:"circle",color:"f4f3f8"},right_orbit_arrow:{id:"right_orbit_arrow",type:"insert",name:"Right orbit arrow",x:402,y:590,rotation:-30,width:21,length:40,height:3,shape:"arrow",color:"8f7dff"},right_ramp_arrow:{id:"right_ramp_arrow",type:"insert",name:"Right ramp arrow",x:317,y:545.5,rotation:-16.67,width:24,length:46,height:3,shape:"arrow",color:"a99cff"},wizard_insert:{id:"wizard_insert",type:"insert",name:"Wizard insert",x:237.175,y:528,width:36,length:36,height:3,shape:"star",color:"c9c0ff",icon:"crown"},target_guide_left:{id:"target_guide_left",type:"guide",name:"Target bank guide (left)",x:166,y:686,thickness:1.6,height:28.575,smooth:!0,points:[[166,616],[128,684],[118,756],[156,861],[127,911],[102,924],[92,952],[90,993]],mounts:[{at:.7111,side:1}],line:[[166,616],[163.573,620.238],[161.058,624.455],[158.473,628.655],[155.841,632.844],[153.181,637.027],[150.514,641.208],[147.861,645.392],[145.242,649.585],[142.678,653.79],[140.19,658.013],[137.798,662.259],[135.522,666.533],[133.384,670.839],[131.404,675.182],[129.602,679.567],[128,684],[126.496,688.596],[125.073,693.202],[123.739,697.821],[122.505,702.459],[121.378,707.12],[120.367,711.808],[119.483,716.529],[118.732,721.286],[118.126,726.085],[117.671,730.929],[117.379,735.824],[117.256,740.774],[117.313,745.783],[117.558,750.857],[118,756],[118.625,760.256],[119.597,764.641],[120.879,769.141],[122.436,773.741],[124.232,778.428],[126.229,783.187],[128.392,788.002],[130.685,792.86],[133.071,797.747],[135.514,802.647],[137.978,807.546],[140.427,812.43],[142.824,817.284],[145.134,822.094],[147.319,826.845],[149.345,831.523],[151.175,836.113],[152.771,840.601],[154.099,844.972],[155.123,849.212],[155.804,853.306],[156.109,857.24],[156,861],[155.26,866.033],[153.988,870.998],[152.253,875.869],[150.123,880.619],[147.665,885.22],[144.948,889.646],[142.039,893.869],[139.007,897.863],[135.919,901.6],[132.843,905.053],[129.847,908.195],[127,911],[122.885,914.046],[118.398,916.147],[113.803,917.747],[109.362,919.292],[105.34,921.228],[102,924],[99.325,927.734],[97.207,931.999],[95.53,936.676],[94.18,941.647],[93.041,946.795],[92,952],[91.315,956.171],[90.847,960.523],[90.553,965.018],[90.389,969.622],[90.311,974.298],[90.277,979.009],[90.242,983.721],[90.164,988.396],[90,993]]},target_guide_right:{id:"target_guide_right",type:"guide",name:"Target bank guide (right)",x:308.35,y:686,thickness:1.6,height:28.575,smooth:!0,points:[[308.35,616],[349,688],[353.35,759],[321,865],[383,949],[384,991]],mounts:[{at:.7111,side:-1}],line:[[308.35,616],[310.802,620.228],[313.36,624.442],[316.002,628.645],[318.705,632.841],[321.445,637.032],[324.201,641.222],[326.949,645.412],[329.667,649.606],[332.331,653.806],[334.92,658.017],[337.41,662.24],[339.778,666.478],[342.002,670.734],[344.059,675.012],[345.926,679.313],[347.581,683.642],[349,688],[350.278,692.59],[351.395,697.168],[352.355,701.742],[353.164,706.319],[353.825,710.907],[354.344,715.513],[354.724,720.145],[354.971,724.809],[355.089,729.513],[355.083,734.266],[354.958,739.073],[354.717,743.942],[354.366,748.882],[353.908,753.899],[353.35,759],[352.69,763.243],[351.72,767.586],[350.477,772.021],[348.993,776.536],[347.304,781.124],[345.444,785.774],[343.447,790.476],[341.348,795.221],[339.181,800],[336.981,804.802],[334.781,809.618],[332.617,814.438],[330.523,819.253],[328.534,824.054],[326.683,828.83],[325.005,833.571],[323.535,838.27],[322.306,842.914],[321.355,847.496],[320.714,852.005],[320.418,856.432],[320.502,860.767],[321,865],[322.045,869.425],[323.622,873.814],[325.676,878.167],[328.153,882.481],[331.001,886.756],[334.164,890.99],[337.59,895.184],[341.225,899.336],[345.014,903.444],[348.905,907.508],[352.843,911.527],[356.774,915.499],[360.645,919.425],[364.403,923.302],[367.993,927.129],[371.361,930.906],[374.454,934.632],[377.218,938.305],[379.6,941.925],[381.545,945.49],[383,949],[384.417,954.051],[385.222,958.922],[385.537,963.649],[385.485,968.268],[385.188,972.814],[384.769,977.324],[384.349,981.835],[384.052,986.381],[384,991]]},target_post_left:{id:"target_post_left",type:"post",name:"Target bank post (left)",x:184,y:704,width:18,length:18,height:30,ring:!1},target_post_right:{id:"target_post_right",type:"post",name:"Target bank post (right)",x:289,y:704,width:18,length:18,height:30,ring:!1},target_post_centre:{id:"target_post_centre",type:"post",name:"Target bank post (centre)",x:236,y:724,width:18,length:18,height:30,ring:!1},target_rubber:{id:"target_rubber",type:"rubber",name:"Target bank rubber",x:236.333,y:708.667,posts:[[184,702],[289,702],[236,722]],postDiameter:18,cord:4.302,rubberHeight:14.058,postDiameters:[9.72,9.72,9.72],postIds:["target_post_left","target_post_right","target_post_centre"]},upper_left_flipper:{id:"upper_left_flipper",type:"flipper",name:"Upper left flipper",x:79,y:520,rotation:-55,side:"left",pivot:[68.762,534.622],rest:-55,stroke:52,baseR:13,tipR:8.06,reach:40.64,width:61.7,length:26,height:24,sharedSwitch:"s_left_flipper",mechanismAngle:-66},upper_right_flipper:{id:"upper_right_flipper",type:"flipper",name:"Upper right flipper",x:398,y:517,rotation:245,side:"right",pivot:[405.544,533.178],rest:245,stroke:52,baseR:13,tipR:8.06,reach:40.64,width:61.7,length:26,height:24,sharedSwitch:"s_right_flipper",mechanismAngle:-114},right_orbit_wedge:{id:"right_orbit_wedge",type:"guide",name:"Right orbit throat wedge",x:441.058,y:577.195,thickness:1.6,height:28.575,smooth:!0,points:[[469.15,690],[468.69,679.472],[467.315,669.023],[465.034,658.735],[461.865,648.684],[457.832,638.948],[452.966,629.6],[407.35,553],[416.35,546],[422.35,534],[469.15,464.39]],line:[[469.15,690],[469.031,686.488],[468.911,682.975],[468.69,679.472],[468.333,675.977],[467.874,672.491],[467.315,669.023],[466.655,665.573],[465.894,662.141],[465.034,658.735],[464.075,655.355],[463.018,652.002],[461.865,648.684],[460.616,645.401],[459.27,642.153],[457.832,638.948],[456.477,636.125],[455.029,633.346],[452.966,629.6],[451.44,627.044],[449.381,623.856],[446.866,620.117],[443.974,615.907],[440.782,611.309],[437.367,606.403],[433.808,601.269],[430.182,595.99],[426.567,590.646],[423.041,585.318],[419.681,580.087],[416.566,575.034],[413.772,570.241],[411.377,565.788],[409.46,561.756],[408.098,558.227],[407.369,555.281],[407.35,553],[409.485,550.015],[413.103,548.224],[416.35,546],[418.371,542.675],[419.957,538.84],[422.35,534],[423.919,531.379],[425.775,528.402],[427.89,525.102],[430.237,521.514],[432.786,517.672],[435.511,513.612],[438.384,509.368],[441.378,504.974],[444.464,500.464],[447.614,495.874],[450.802,491.238],[453.998,486.591],[457.177,481.966],[460.309,477.4],[463.367,472.925],[466.323,468.577],[469.15,464.39]]},top_lane_rubber_1:{id:"top_lane_rubber_1",type:"rubber",name:"Top lane rubber 1",x:105,y:954,posts:[[104,957],[104,984]],postDiameter:9.5,cord:4.76,rubberHeight:13.5},top_lane_rubber_2:{id:"top_lane_rubber_2",type:"rubber",name:"Top lane rubber 2",x:152,y:963,posts:[[153,966],[153,993]],postDiameter:9.5,cord:4.76,rubberHeight:13.5},top_lane_1:{id:"top_lane_1",type:"rollover",name:"Top lane 1",x:128,y:970,rotation:90},top_lane_rubber_6:{id:"top_lane_rubber_6",type:"rubber",name:"Top lane rubber 6",x:369.35,y:954,posts:[[370.35,957],[370.35,984]],postDiameter:9.5,cord:4.76,rubberHeight:13.5},top_lane_rubber_5:{id:"top_lane_rubber_5",type:"rubber",name:"Top lane rubber 5",x:322.35,y:963,posts:[[321.35,966],[321.35,993]],postDiameter:9.5,cord:4.76,rubberHeight:13.5},top_lane_5:{id:"top_lane_5",type:"rollover",name:"Top lane 5",x:346.35,y:970,rotation:-90},top_lane_1_insert:{id:"top_lane_1_insert",type:"insert",name:"Top lane 1 insert",x:127,y:1011,width:19.05,length:19.05,height:3,shape:"circle",color:"f4f3f8"},top_lane_5_insert:{id:"top_lane_5_insert",type:"insert",name:"Top lane 5 insert",x:347,y:1009,width:19.05,length:19.05,height:3,shape:"circle",color:"f4f3f8"},top_lane_2_insert:{id:"top_lane_2_insert",type:"insert",name:"Top lane 2 insert",x:177,y:1024,width:19.05,length:19.05,height:3,shape:"circle",color:"f4f3f8"},top_lane_3_insert:{id:"top_lane_3_insert",type:"insert",name:"Top lane 3 insert",x:234,y:1033,width:19.05,length:19.05,height:3,shape:"circle",color:"f4f3f8"},top_lane_4_insert:{id:"top_lane_4_insert",type:"insert",name:"Top lane 4 insert",x:294,y:1024,width:19.05,length:19.05,height:3,shape:"circle",color:"f4f3f8"},saucer_arrow:{id:"saucer_arrow",type:"insert",name:"Saucer arrow",x:235,y:912,width:20,length:36,height:3,shape:"arrow",color:"c9c0ff"},top_lane_rubber_3:{id:"top_lane_rubber_3",type:"rubber",name:"Top lane rubber 3",x:205,y:973,posts:[[206,976],[206,1003]],postDiameter:9.5,cord:4.76,rubberHeight:13.5},top_lane_rubber_4:{id:"top_lane_rubber_4",type:"rubber",name:"Top lane rubber 4",x:266,y:972,posts:[[265,975],[265,1002]],postDiameter:9.5,cord:4.76,rubberHeight:13.5},top_lane_2:{id:"top_lane_2",type:"rollover",name:"Top lane 2",x:177,y:983,rotation:90},top_lane_4:{id:"top_lane_4",type:"rollover",name:"Top lane 4",x:294,y:983,rotation:-90},saucer:{id:"saucer",type:"kicker",name:"Saucer",x:235,y:949,width:30,length:30,height:15,kickerType:"saucer",kickAngle:-120,kickSpeed:30,kick:1619.25,pulseMs:30},top_lane_3:{id:"top_lane_3",type:"rollover",name:"Top lane 3",x:234,y:992,rotation:90}};var Tt={w:wi.width,l:wi.length,thick:wi.thickness,cx:wi.centreX,pitch:wi.slope,rail:gt.boundary_left.x+gt.boundary_left.thickness/2},fn=wi.ball/2,Wn=i=>Math.round(i*100)/100,iv=(i,t)=>i.map((e,n)=>{let s=i[Math.max(0,n-1)],r=i[Math.min(i.length-1,n+1)],a=r[0]-s[0],o=r[1]-s[1],l=Math.hypot(a,o)||1;return[Wn(e[0]-o/l*t),Wn(e[1]+a/l*t)]}),Jl=(i,t)=>({id:t,side:i.side,upper:!!i.sharedSwitch,x:i.pivot[0],y:i.pivot[1],rest:i.rest,up:i.rest+(i.side==="left"?1:-1)*i.stroke,baseR:i.baseR,tipR:i.tipR,length:i.reach,height:i.height}),vn=[Jl(gt.left_flipper,"left"),Jl(gt.right_flipper,"right"),Jl(gt.upper_left_flipper,"upper-left"),Jl(gt.upper_right_flipper,"upper-right")],vs={base:11.28,tip:6.64,flange:[9.21,4.45],groove:[8.05,3.68],cap:[8.2,3.4],rubberFrom:8.6,rubberTo:20};function Kl(i){let t=([e,n])=>[Wn(e/vs.base*i.baseR),Wn(n/vs.tip*i.tipR)];return{flange:t(vs.flange),groove:t(vs.groove),cap:t(vs.cap),rubberFrom:vs.rubberFrom,rubberTo:vs.rubberTo}}var sv={baseR:vn[0].baseR,tipR:vn[0].tipR,length:vn[0].length,height:vn[0].height,...Kl(vn[0])},yr=[gt.left_sling,gt.right_sling].map(i=>({side:i.side,posts:i.posts,postR:i.postRadius,reach:i.contactRadius})),qf=gt.apron.outline,ee={deck:gt.apron.height,lipR:gt.apron.lip.radius,lipCy:gt.apron.lip.centre[1],lipEndY:gt.apron.lip.from[1],leftShoulder:qf.at(-1),rightShoulder:qf[2]};ee.lipHalf=Math.sqrt(ee.lipR**2-(ee.lipCy-ee.lipEndY)**2);ee.lipLeft=[Tt.cx-ee.lipHalf,ee.lipEndY];ee.lipRight=[Tt.cx+ee.lipHalf,ee.lipEndY];var lu=[gt.left_drain_guide,gt.right_drain_guide].map(i=>[i.from,i.to]),ae={laneLeft:gt.shooter_divider.x+gt.shooter_divider.thickness/2,laneRight:gt.boundary_right.x-gt.boundary_right.thickness/2,dividerFace:gt.shooter_divider.x-gt.shooter_divider.thickness/2,dividerTop:gt.shooter_divider.to[1],apronTop:Wn(gt.shooter_divider.from[1]),ballRest:[gt.shooter.x,gt.shooter.y+gt.shooter.length/2+fn]},Yf=(i,t)=>{let e=i.points[0],n=i.points.at(-1),s=i.thickness/2;return t?{cx:n[0],cy:e[1],r:Wn(n[0]-e[0]-s)}:{cx:e[0],cy:n[1],r:Wn(n[0]-e[0]-s)}},Ai={top:Tt.l-Tt.rail,left:Yf(gt.top_arch_left,!0),right:Yf(gt.top_arch_right,!1)},Mr=["left","right"].map(i=>{let t=gt[`${i}_inlane_guide`],e=gt[`${i}_inlane_guide_cover`];return{side:i,thickness:t.thickness,plate:{id:t.id,z:t.z,outline:t.outline},cover:{id:e.id,z:e.z,outline:e.outline},stacks:[gt[`${i}_inlane_guide_stack_1`],gt[`${i}_inlane_guide_stack_2`]].map(n=>[n.x,n.y]),post:[gt[`${i}_outlane_post`].x,gt[`${i}_outlane_post`].y]}}),jl=Mr.map(i=>i.post),hi=["left_outlane","left_inlane","right_inlane","right_outlane"].map(i=>({id:i,kind:i.endsWith("outlane")?"outlane":"inlane",x:gt[i].x,y:gt[i].y,insert:gt[`${i}_insert`].id,insertY:gt[`${i}_insert`].y})),rv={lane:wi.orbitLane,throat:wi.throat,steel:gt.left_orbit_guide.thickness,height:gt.left_orbit_guide.height},Ql=[gt.left_orbit_guide,gt.right_orbit_guide].map((i,t)=>({side:t?"right":"left",line:i.line,face:iv(i.line,i.thickness/2),mounts:i.mounts||[]})),cu=[gt.left_orbit_wedge,gt.right_orbit_wedge].map((i,t)=>({side:t?"right":"left",line:i.line})),hu=[gt.left_orbit_post,gt.right_orbit_post].map(i=>[i.x,i.y]),tc={d:gt.left_orbit_post.width,height:gt.left_orbit_post.height},Da=[gt.left_orbit,gt.right_orbit].map((i,t)=>({side:t?"right":"left",x:i.x,y:i.y})),Ms={from:gt.shooter_gate.from,to:gt.shooter_gate.to,height:28.6},Ri={lanes:[1,2,3,4,5].map(i=>{let t=gt[`top_lane_${i}`],e=gt[`top_lane_${i}_insert`];return{x:t.x,y:t.y,insert:e.id,insertX:e.x,insertY:e.y}}),rubbers:[1,2,3,4,5,6].map(i=>{let t=gt[`top_lane_rubber_${i}`];return{posts:t.posts,postR:t.postDiameter/2,cord:t.cord,h:t.rubberHeight}})},ui={x:gt.saucer.x,y:gt.saucer.y,r:gt.saucer.width/2,depth:gt.saucer.height,kickAngle:gt.saucer.kickAngle,kick:Math.round(gt.saucer.kick),reach:gt.saucer.width/2*.7,maxSpeed:900,hold:1},Ss=["pop_1","pop_2","pop_3"].map(i=>({id:i,x:gt[i].x,y:gt[i].y})),Sr={cap:gt.pop_1.width,height:gt.pop_1.height,ringRest:29.5,ringTravel:9,reach:34},Xn={list:["target_a","target_b","target_c"].map(i=>({id:i,x:gt[i].x,y:gt[i].y,insert:gt[`${i}_insert`].id})),width:gt.target_a.width,depth:gt.target_a.length,height:gt.target_a.height},ec=[gt.target_guide_left,gt.target_guide_right].map((i,t)=>({side:t?"right":"left",line:i.line,mounts:i.mounts||[],thickness:i.thickness,height:i.height})),uu=["target_post_left","target_post_right","target_post_centre"].map(i=>({x:gt[i].x,y:gt[i].y,d:gt[i].width,height:gt[i].height})),di={posts:gt.target_rubber.postIds.map(i=>[gt[i].x,gt[i].y]),grooves:gt.target_rubber.postDiameters.map(i=>i/2),cord:gt.target_rubber.cord,h:gt.target_rubber.rubberHeight},br={width:gt.left_ramp.rampWidth,mouth:gt.left_ramp.widthStart,flare:gt.left_ramp.mouthLength,wall:gt.left_ramp.wallHeight,floor:3,side:2.4},ou=gt.left_wireform.rampWidth*.31,ys=2.5,Zf=Math.sqrt((fn+ys)**2-ou**2),nc={rod:ys,rail:Wn(ou),ride:Wn(ys+Zf),sideRail:{u:Wn(Math.max(ou,(fn+ys+1.5)*Math.cos(25*Math.PI/180))),v:Wn(ys+Zf+(fn+ys+1.5)*Math.sin(25*Math.PI/180))},dropRadius:fn+ys+3,spread:40},$f=(i,t,e,n,s)=>({side:i,id:t,profile:e.profile,supports:e.supports.map(r=>[r.x,r.y,r.z]),switchAt:e.switches?.[0],wire:n.profile,wireSupports:n.supports.map(r=>[r.x,r.y,r.z]),sideRails:n.sideRails||[],arrow:{x:gt[s].x,y:gt[s].y,angle:gt[s].rotation},post:jl[i==="left"?0:1]}),ji=[$f("left","deadbounce",gt.left_ramp,gt.left_wireform,"left_ramp_arrow"),$f("right","tiptop",gt.right_ramp,gt.right_wireform,"right_ramp_arrow")],av={a99cff:"royal","8f7dff":"deep",c9c0ff:"light",f4f3f8:"white"},du=Object.values(gt).filter(i=>i.type==="insert").map(i=>({id:i.id,x:i.x,y:i.y,angle:i.rotation||0,width:i.width,length:i.length,shape:i.shape,color:av[i.color]||"white",icon:i.icon})),ic=[[18,520],[2*Tt.cx-18,520]];function sn(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new ve,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Jf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][d]);let g=Jf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Jf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new gn(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){let v=h.getComponent(d,g);o.setComponent(d+u,g,v)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var L=.001;function Ee(i,t,e=0){return new D((i-Tt.w/2)*L,e*L,(Tt.l/2-t)*L)}function Ci(i,t,e,{bevel:n=0,curveSegments:s=12,holes:r=[]}={}){let a=new cn(i.map(([l,c])=>new ot((l-Tt.w/2)*L,(c-Tt.l/2)*L)));for(let l of r)a.holes.push(new ii(l.map(([c,h])=>new ot((c-Tt.w/2)*L,(h-Tt.l/2)*L))));let o=new si(a,{depth:Math.max(e-n*2,1e-4)*L,bevelEnabled:n>0,bevelThickness:n*L,bevelSize:n*L,bevelSegments:3,curveSegments:s});return o.rotateX(-Math.PI/2),o.translate(0,(t+n)*L,0),o}function Qi(i,t,{bevel:e=0,curveSegments:n=12}={}){let s=new cn(i.map(([a,o])=>new ot(a*L,o*L))),r=new si(s,{depth:Math.max(t-e*2,1e-4)*L,bevelEnabled:e>0,bevelThickness:e*L,bevelSize:e*L,bevelSegments:3,curveSegments:n});return r.rotateX(-Math.PI/2),r.translate(0,e*L,0),r}function Pe(i,t,e,n=0,s=0){return i.position.copy(Ee(t,e,n)),i.rotation.y=s*Math.PI/180,i}function Ne(i,t=48){return new sa(i.map(([e,n])=>new ot(e*L,n*L)),t)}function Ua(i,t,{tension:e=.5,segments:n,radial:s=10,closed:r=!1}={}){let a=new Pn(i.map(([l,c,h])=>Ee(l,c,h)),r,"catmullrom",e),o=a.getLength();return new Ei(a,n||Math.max(12,Math.round(o/.006)),t*L,s,r)}function sc(i,t,{tension:e=.5,segments:n,radial:s=10,closed:r=!1}={}){let a=new Pn(i.map(([o,l,c])=>new D(o*L,c*L,-l*L)),r,"catmullrom",e);return new Ei(a,n||Math.max(12,Math.round(a.getLength()/.002)),t*L,s,r)}function rc(i,t){let e=[];for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],a=Math.max(1,Math.ceil(Math.hypot(r[0]-s[0],r[1]-s[1])/t));for(let o=0;o<a;o++)e.push([s[0]+(r[0]-s[0])*(o/a),s[1]+(r[1]-s[1])*(o/a)])}return e}function ts(i,t,e=10){let n=[],s=i.length;for(let r=0;r<s;r++){let a=i[r],o=i[(r-1+s)%s],l=i[(r+1)%s],c=Math.atan2(a[1]-o[1],a[0]-o[0])-Math.PI/2,h=Math.atan2(l[1]-a[1],l[0]-a[0])-Math.PI/2;for(;h<c;)h+=Math.PI*2;for(let u=0;u<=e;u++){let d=c+(h-c)*(u/e);n.push([a[0]+Math.cos(d)*t,a[1]+Math.sin(d)*t])}}return n}function ov(i){let t=0;for(let e=0;e<i.length;e++){let[n,s]=i[e],[r,a]=i[(e+1)%i.length];t+=n*a-r*s}return t/2}var Tn=i=>ov(i)<0?[...i].reverse():i;function yn(i,t,e,n=0){let s=[],r=[];for(let a=0;a<i.length;a++){let o=i[a],l=i[Math.max(0,a-1)],c=i[Math.min(i.length-1,a+1)],h=c[0]-l[0],u=c[1]-l[1],d=Math.hypot(h,u)||1;h/=d,u/=d,s.push([o[0]-u*t/2,o[1]+h*t/2]),r.push([o[0]+u*t/2,o[1]-h*t/2])}return Ci(Tn([...s,...r.reverse()]),n,e)}function Na(i,t,e,n,s,r=24){return Array.from({length:r+1},(a,o)=>{let l=(n+(s-n)*(o/r))*Math.PI/180;return[i+Math.cos(l)*e,t+Math.sin(l)*e]})}var oe={royal:"#2B59FF",light:"#6E8CFF",deep:"#1F46E0",ice:"#A9BFFF",black:"#06070A",black1:"#0B0C0F",black2:"#14161A",black3:"#262A31",white:"#FFFFFF",paper:"#F5F6F8",paper2:"#F4F5F7",grey:"#9AA1AB"},Ln=i=>parseInt(oe[i].slice(1),16),Er=i=>{let t=Ln(i),e=t>>16,n=t>>8&255,s=t&255;return r=>`rgba(${e}, ${n}, ${s}, ${r})`};var lv=i=>{let t=new Ht(i);return .2126*t.r+.7152*t.g+.0722*t.b},Fa=(i,t)=>t/lv(i),ac=i=>Fa(i,1.15),wn=Ln("royal"),oc=Ln("light"),lc=Ln("deep"),bs=15659775,cv=(i,t,e)=>new me({color:0,metalness:0,roughness:e,envMap:i,envMapIntensity:t,transparent:!0,depthWrite:!1,blending:fs,side:un});function jf(i){let t={};return t.cabinet=new Ze({color:Ln("black1"),roughness:.45,metalness:0,clearcoat:1,clearcoatRoughness:.07}),t.cabinetInner=new me({color:Ln("black"),roughness:.95,envMap:i,envMapIntensity:.2}),t.aluminium=new me({color:13028045,roughness:.42,metalness:1,roughnessMap:pu()}),t.armour=new me({color:3159100,roughness:.5,metalness:.85,roughnessMap:pu()}),t.trim=new me({color:Ln("black3"),roughness:.38,metalness:.9}),t.chrome=new me({color:14475234,roughness:.06,metalness:1}),t.ball=new me({color:14080733,roughness:.05,metalness:1,envMap:i,envMapIntensity:1.15}),t.steel=new me({color:11844031,roughness:.48,metalness:1,roughnessMap:pu()}),t.zinc=new me({color:12764873,roughness:.5,metalness:1}),t.darkSteel=new me({color:3422269,roughness:.4,metalness:1}),t.rubber=new me({color:723983,roughness:.6}),t.rubberRoyal=new me({color:wn,roughness:.5}),t.whitePlastic=new me({color:Ln("paper"),roughness:.3}),t.graphitePlastic=new me({color:Ln("black2"),roughness:.35}),t.postPlastic=new Ze({color:lc,roughness:.16,clearcoat:1,clearcoatRoughness:.04,emissive:wn,emissiveIntensity:Fa(wn,.035),sheen:.6,sheenColor:oc,sheenRoughness:.4}),t.clearPlastic=new Ze({color:14542578,roughness:.05,metalness:0,envMap:i,envMapIntensity:.8,clearcoat:1,clearcoatRoughness:.03,transparent:!0,opacity:.1,side:un,depthWrite:!1}),t.glass=cv(i,.45,.02),t.wood=new me({color:12886388,roughness:.78}),t.cardPaper=new me({color:16777215,roughness:.75}),t.popCap=new Ze({color:wn,roughness:.16,clearcoat:1,clearcoatRoughness:.04,emissive:wn,emissiveIntensity:.25}),t.popCap.userData.gain=ac(wn)*.5,t.popBody=new me({color:Ln("paper"),roughness:.3,emissive:bs,emissiveIntensity:.06}),t.popBody.userData.gain=ac(bs)*.5,t.bulb=new me({color:16251391,roughness:.1,emissive:bs,emissiveIntensity:0}),t.bulb.userData.gain=ac(bs),t.speaker=new me({color:Ln("black1"),roughness:.65,metalness:.4}),t}function Qf(i){return new Ze({map:i,roughness:.6,metalness:0,clearcoat:1,clearcoatRoughness:.06})}var Kf={royal:wn,deep:lc,light:oc,white:bs};function mu(i){let t=new Ht(Kf[i]??Kf.white),e=new Ze({color:t.clone().multiplyScalar(.12),roughness:.3,clearcoat:1,clearcoatRoughness:.03,emissive:t,emissiveIntensity:.06,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2});return e.userData.gain=ac(t),e}function pu(i=256){let t=document.createElement("canvas");t.width=t.height=i;let e=t.getContext("2d");e.fillStyle="#fff",e.fillRect(0,0,i,i);for(let s=0;s<1400;s++){let r=Math.round(200+Math.random()*55);e.fillStyle=`rgb(${r},${r},${r})`,e.fillRect(0,Math.random()*i,i,.6+Math.random())}let n=new bi(t);return n.wrapS=n.wrapT=xn,n.repeat.set(4,4),n}var Dn={field:oe.black2,white:oe.paper,grey:oe.grey,royal:oe.royal,light:oe.light,deep:oe.deep,ink:oe.black2,cab:oe.black1},we=Er("paper"),Ge=Er("royal"),ep=Er("deep"),pi=Er("light"),xu=Er("grey"),tp={royal:Ge,deep:ep,light:pi,white:we},gu={display:(i,t=650)=>`${t} ${i}px Archivo`,mono:(i,t=500)=>`${t} ${i}px "Martian Mono"`,body:(i,t=500)=>`${t} ${i}px "Instrument Sans"`};function fi(i,t,e,n){t==="display"?(i.font=gu.display(e,n),i.fontStretch="semi-expanded",i.letterSpacing=`${-e*.03}px`):t==="mono"?(i.font=gu.mono(e,n),i.fontStretch="semi-condensed",i.letterSpacing=`${e*.08}px`):(i.font=gu.body(e,n),i.fontStretch="normal",i.letterSpacing="0px")}async function np(){await Promise.all([document.fonts.load("700 40px Archivo"),document.fonts.load('500 20px "Martian Mono"'),document.fonts.load('500 20px "Instrument Sans"')]).catch(()=>{})}function Un(i,t){let e=document.createElement("canvas");return e.width=Math.round(i),e.height=Math.round(t),e}function hv(i,t=40){return Array.from({length:t},(e,n)=>{let s=n/t*Math.PI*2;return[Math.cos(s)*i/2,Math.sin(s)*i/2]})}function uv(i,t){let e=i*.44,n=t*.48;return[[-e/2,-t/2],[e/2,-t/2],[e/2,t/2-n],[i/2,t/2-n],[0,t/2],[-i/2,t/2-n],[-e/2,t/2-n]]}function dv(i,t){return Array.from({length:6},(e,n)=>[Math.cos(n*Math.PI/3)*i/2,Math.sin(n*Math.PI/3)*t/2])}function fv(i,t){return Array.from({length:10},(e,n)=>{let s=n%2?.45:1,r=Math.PI/2+n*Math.PI/5;return[Math.cos(r)*(i/2)*s,Math.sin(r)*(t/2)*s]})}function pv(i,t){let e=-t/2+t*.45,n=[[0,-t/2]];for(let s=1;s<=8;s++){let r=s/8;n.push([i/2*Math.sin(r*Math.PI/2),-t/2+(e+t/2)*(1-Math.cos(r*Math.PI/2))])}n.push([i/2,t/2-t*.08],[i*.3,t/2],[-i*.3,t/2],[-i/2,t/2-t*.08]);for(let s=8;s>=1;s--){let r=s/8;n.push([-i/2*Math.sin(r*Math.PI/2),-t/2+(e+t/2)*(1-Math.cos(r*Math.PI/2))])}return n}var mv={circle:(i,t)=>hv(Math.min(i,t)),arrow:uv,hexagon:dv,star:fv,shield:pv},gv=["Web","Game","Media","Fab"],xv=[["2025","Freelance"],["2023","Glaser Group"],["2021","Origin Beer Lab"],["2018","T&B Equipment"],["2018","Atlee High"]];function _u(){let i=new Map;return Ri.lanes.forEach((t,e)=>i.set(t.insert,{group:"years",index:e,legend:xv[e][0]})),hi.forEach((t,e)=>i.set(t.insert,{group:"skills",index:e,legend:gv[e]})),ji.forEach((t,e)=>i.set(`${t.side}_ramp_arrow`,{group:"ramp"+e,index:e})),["left_orbit_arrow","right_orbit_arrow"].forEach((t,e)=>i.set(t,{group:"orbit",index:e})),Xn.list.forEach((t,e)=>i.set(t.insert,{group:"targets",index:e})),["extra_ball_insert","lock_insert","wizard_insert"].forEach((t,e)=>i.set(t,{group:"ladder",index:e})),i.set("saucer_arrow",{group:"saucer",index:0}),i.set("shoot_again",{group:"again",index:0}),du.map(t=>({...t,...i.get(t.id)||{group:"other",index:0},w:t.width,l:t.length,shape:mv[t.shape](t.width,t.length)}))}function Es(i){let t=Number(i.replace(/\D+/g,""));return i.startsWith("lane")?Ri.lanes[t]?.insert:i.startsWith("return")?hi[t]?.insert:i.startsWith("orbit")?["left_orbit_arrow","right_orbit_arrow"][t]:null}function ip(i,t=128){let e=Un(t,Math.round(t*i.l/i.w)),n=e.getContext("2d"),s=t/i.w,r=e.width/2,a=e.height/2;n.fillStyle="#fff",n.fillRect(0,0,e.width,e.height);let o="rgba(11, 12, 15, 0.92)";if(n.fillStyle=o,n.strokeStyle=o,n.lineCap="round",n.lineJoin="round",i.legend){let c=/^\d+$/.test(i.legend),h=c?Math.min(i.w*.25,4.8):Math.min(i.w*.84/(i.legend.length*.74+.3),3.7);je(n,r,a+s*.15,i.legend,h*s,o,c?"display":"mono")}let l=Math.min(i.w,i.l)*s;if(i.icon==="ball")n.lineWidth=l*.07,n.beginPath(),n.arc(r,a,l*.23,0,Math.PI*2),n.stroke(),n.beginPath(),n.arc(r-l*.07,a-l*.07,l*.06,0,Math.PI*2),n.fill();else if(i.icon==="lock")n.lineWidth=l*.07,n.beginPath(),n.moveTo(r-l*.13,a+l*.02),n.arc(r,a-l*.06,l*.13,Math.PI,0),n.lineTo(r+l*.13,a+l*.02),n.stroke(),n.beginPath(),n.roundRect(r-l*.21,a,l*.42,l*.3,l*.04),n.fill();else if(i.icon==="crown"){let c=l*.4,h=l*.26,u=a+l*.12;n.beginPath(),n.moveTo(r-c/2,u),n.lineTo(r-c/2,u-h),n.lineTo(r-c/4,u-h*.45),n.lineTo(r,u-h*1.15),n.lineTo(r+c/4,u-h*.45),n.lineTo(r+c/2,u-h),n.lineTo(r+c/2,u),n.closePath(),n.fill()}return e}function sp(i){let t=Un(Tt.w*i,Tt.l*i),e=t.getContext("2d"),n=p=>p*i,s=p=>(Tt.l-p)*i,r=p=>p*i,a=(p,_,E,x)=>{let M=e.createRadialGradient(n(p),s(_),0,n(p),s(_),r(E));x.forEach(([S,A])=>M.addColorStop(S,A)),e.fillStyle=M,e.fillRect(0,0,t.width,t.height)};e.fillStyle=Dn.field,e.fillRect(0,0,t.width,t.height),a(Tt.cx,520,640,[[0,oe.black3],[.55,"#1a1d22"],[1,"rgba(20, 22, 26, 0)"]]),a(Tt.cx,820,230,[[0,Ge(.2)],[1,Ge(0)]]),e.fillStyle=we(1);for(let p=6.35;p<Tt.l;p+=12.7)for(let _=6.35;_<Tt.w;_+=12.7){let E=Math.hypot((_-Tt.cx)/1.1,(p-560)/1.6),x=.13*Math.max(0,1-E/470);x<.01||(e.globalAlpha=x,e.beginPath(),e.arc(n(_),s(p),r(.62),0,Math.PI*2),e.fill())}e.globalAlpha=1;let o=(p,_,E,x,M,S=we)=>{let A=e.createLinearGradient(0,s(_),0,s(E));A.addColorStop(0,S(0)),A.addColorStop(.35,S(M)),A.addColorStop(1,S(0)),e.fillStyle=A,e.beginPath(),e.roundRect(n(p-x/2),s(E),r(x),r(E-_),r(x/2)),e.fill()};for(let p of hi)o(p.x,220,420,20,.14);for(let p of Da)o(p.x,640,900,22,.12);for(let p of Ri.lanes)o(p.x,p.y-40,p.y+70,20,.18);{let p=ae.laneLeft,_=ae.laneRight,E=e.createLinearGradient(0,s(0),0,s(ae.dividerTop));E.addColorStop(0,Ge(.06)),E.addColorStop(1,Ge(.26)),e.fillStyle=E,e.fillRect(n(p),s(ae.dividerTop),r(_-p),r(ae.dividerTop));let x=(p+_)/2;e.lineWidth=r(2.2),e.lineJoin="round",e.lineCap="round";for(let M=130,S=0;M<780;M+=46,S++)e.strokeStyle=pi(.34+S*.03),e.beginPath(),e.moveTo(n(x-9),s(M)),e.lineTo(n(x),s(M+9)),e.lineTo(n(x+9),s(M)),e.stroke()}let l=(p,_,E,x,M,S=Ge)=>{let A=_[0]-p[0],y=_[1]-p[1],w=Math.hypot(A,y),R=-y/w,P=A/w,U=e.createLinearGradient(n(p[0]),s(p[1]),n(_[0]),s(_[1]));U.addColorStop(0,S(0)),U.addColorStop(.6,S(M*.55)),U.addColorStop(1,S(M)),e.fillStyle=U,e.beginPath(),e.moveTo(n(p[0]+R*E/2),s(p[1]+P*E/2)),e.lineTo(n(_[0]+R*x/2),s(_[1]+P*x/2)),e.lineTo(n(_[0]-R*x/2),s(_[1]-P*x/2)),e.lineTo(n(p[0]-R*E/2),s(p[1]-P*E/2)),e.closePath(),e.fill();let B=e.createLinearGradient(n(p[0]),s(p[1]),n(_[0]),s(_[1]));B.addColorStop(0,S(0)),B.addColorStop(1,S(Math.min(1,M*2.2))),e.strokeStyle=B,e.lineWidth=r(.9);for(let I of[1,-1])e.beginPath(),e.moveTo(n(p[0]+I*R*E/2),s(p[1]+I*P*E/2)),e.lineTo(n(_[0]+I*R*x/2),s(_[1]+I*P*x/2)),e.stroke()};ji.forEach(p=>l([p.side==="left"?262:2*Tt.cx-262,196],[p.profile[0][0],p.profile[0][1]-2],8,50,.36));let c=_u(),h=Object.fromEntries(c.map(p=>[p.id,p]));for(let p of["left_orbit_arrow","right_orbit_arrow"]){let _=h[p],E=_.angle*Math.PI/180,x=[-Math.sin(E),Math.cos(E)];l([_.x-x[0]*400,_.y-x[1]*400],[_.x+x[0]*34,_.y+x[1]*34],4,28,.18,ep)}let u=h.saucer_arrow;l([Tt.cx,610],[u.x,u.y+10],6,30,.2);for(let p of c){let _=tp[p.color]||we,E=Math.max(p.w,p.l)*1.15,x=e.createRadialGradient(n(p.x),s(p.y),0,n(p.x),s(p.y),r(E));x.addColorStop(0,_(.4)),x.addColorStop(.55,_(.13)),x.addColorStop(1,_(0)),e.fillStyle=x,e.beginPath(),e.arc(n(p.x),s(p.y),r(E),0,Math.PI*2),e.fill()}for(let p of c){let _=p.angle*Math.PI/180,E=(p.w/2+2.6)/(p.w/2),x=(p.l/2+2.6)/(p.l/2);e.save(),e.lineJoin="round",e.beginPath(),p.shape.forEach(([M,S],A)=>{let y=M*E,w=S*x,R=y*Math.cos(_)-w*Math.sin(_),P=y*Math.sin(_)+w*Math.cos(_);A?e.lineTo(n(p.x+R),s(p.y+P)):e.moveTo(n(p.x+R),s(p.y+P))}),e.closePath(),e.strokeStyle="rgba(0,0,0,0.5)",e.lineWidth=r(3.4),e.stroke(),e.strokeStyle=(tp[p.color]||we)(p.color==="white"?.5:.7),e.lineWidth=r(.8),e.stroke(),e.restore()}let d=(p,_,E,x,M=6.5)=>{let S=p.angle*Math.PI/180,A=p.l/2+M;e.save(),e.translate(n(p.x+Math.sin(S)*A),s(p.y-Math.cos(S)*A)),e.rotate(-S),je(e,0,0,_,E,x,"mono"),e.restore()};d(h.left_ramp_arrow,"Deadbounce",r(4.4),we(.9)),d(h.right_ramp_arrow,"Tip Top",r(4.4),we(.9)),d(h.left_orbit_arrow,"Orbit",r(3.6),we(.62)),d(h.right_orbit_arrow,"Orbit",r(3.6),we(.62)),d(u,"Mystery",r(3.4),we(.7),5.5);let f=hi[0].insertY;je(e,n(Tt.cx),s(f),"Skills",r(4.4),we(.85),"mono");for(let p of[-1,1])e.strokeStyle=we(.25),e.lineWidth=r(.5),e.beginPath(),e.moveTo(n(Tt.cx+p*22),s(f)),e.lineTo(n(Tt.cx+p*120),s(f)),e.stroke();let g=Ss.reduce((p,_)=>[p[0]+_.x/Ss.length,p[1]+_.y/Ss.length],[0,0]);je(e,n(g[0]),s(g[1]+1),"About",r(3.8),we(.85),"mono");let v=Ri.lanes[2];je(e,n(v.insertX),s(v.insertY+18.5),"Experience",r(3.8),we(.85),"mono");let m=h.shoot_again;return je(e,n(m.x),s(m.y-m.l/2-6),"Contact",r(4),we(.85),"mono"),Oa(e,n(Tt.cx),s(276),r(2.2),Ge(1),we(.06)),je(e,n(Tt.cx),s(258),"Dylan Hughes",r(8.4),we(.95),"display"),je(e,n(Tt.cx),s(248),"DH-26 \xB7 Richmond, Virginia",r(3),pi(.9),"mono"),t}var _v=[["1110","1001","1001","1001","1110"],["1001","1001","1111","1001","1001"]];function Oa(i,t,e,n,s,r){let a=t-9*n/2,o=e-5*n/2;_v.forEach((l,c)=>l.forEach((h,u)=>[...h].forEach((d,f)=>{i.fillStyle=d==="1"?s:r,i.beginPath(),i.arc(a+(c*5+f+.5)*n,o+(u+.5)*n,n*.36,0,Math.PI*2),i.fill()})))}function je(i,t,e,n,s,r,a,o="center"){i.save(),i.fillStyle=r,i.textAlign=o,i.textBaseline="middle",fi(i,a==="display"?"display":"mono",s),a!=="display"&&(n=n.toUpperCase()),i.fillText(n,t,e),i.restore()}function rp(i){let t=Math.round(i/1.32),e=Un(i,t),n=e.getContext("2d"),s=i/1320,r=i/2,a=t*.4,o=n.createRadialGradient(r,a,0,r,t*.45,Math.max(i,t)*.75);o.addColorStop(0,"#16245a"),o.addColorStop(.42,"#0e1222"),o.addColorStop(1,oe.black),n.fillStyle=o,n.fillRect(0,0,i,t),n.save(),n.translate(r,a);for(let u=0;u<36;u++)n.rotate(Math.PI/18),n.fillStyle=Ge(u%3===0?.13:.055),n.beginPath(),n.moveTo(0,0),n.lineTo(i,-i*.03),n.lineTo(i,i*.03),n.fill();n.restore();for(let u=18*s;u<t;u+=22*s)for(let d=18*s;d<i;d+=22*s){let f=.1*Math.max(0,1-Math.hypot(d-r,(u-a)*1.3)/(i*.55));f<.01||(n.fillStyle=we(f),n.beginPath(),n.arc(d,u,1.4*s,0,Math.PI*2),n.fill())}let l=46*s;n.save(),n.shadowColor=Ge(.9),n.shadowBlur=14*s,n.strokeStyle=Ge(1),n.lineWidth=5*s,n.beginPath(),n.roundRect(l,l,i-l*2,t-l*2,36*s),n.stroke(),n.restore(),n.strokeStyle=we(.32),n.lineWidth=1.6*s,n.beginPath(),n.roundRect(l+14*s,l+14*s,i-l*2-28*s,t-l*2-28*s,26*s),n.stroke();let c=40*s;n.save(),n.shadowColor=Ge(1),n.shadowBlur=40*s,Oa(n,r,a,c,Ge(1),"rgba(0,0,0,0)"),n.restore(),Oa(n,r,a,c,oe.ice,we(.07));let h=a+c*4.6;return n.save(),n.shadowColor=pi(.55),n.shadowBlur=18*s,je(n,r,h,"Dylan Hughes",100*s,oe.white,"display"),n.restore(),je(n,r,h+76*s,"The portfolio",24*s,pi(1),"mono"),je(n,r,h+112*s,"Model DH-26 \xB7 Richmond, Virginia",16*s,xu(.9),"mono"),e}function ap(i,t,e=[.5,.5]){let n=Un(t,t/1.32),s=n.getContext("2d");s.fillStyle=oe.black,s.fillRect(0,0,n.width,n.height);let r=Math.max(n.width/i.naturalWidth,n.height/i.naturalHeight),a=i.naturalWidth*r,o=i.naturalHeight*r;return s.imageSmoothingQuality="high",s.drawImage(i,(n.width-a)*e[0],(n.height-o)*e[1],a,o),n}function op(i,t){let e=Math.round(t/1.32),n=Un(t,e),s=n.getContext("2d"),r=t/1320,a=s.createRadialGradient(t*.3,e*.5,0,t*.3,e*.5,t*.7);a.addColorStop(0,"#121c44"),a.addColorStop(.55,"#0b0e1a"),a.addColorStop(1,oe.black),s.fillStyle=a,s.fillRect(0,0,t,e);let o=e,l=i.naturalWidth/i.naturalHeight*o,c=t-l;s.imageSmoothingQuality="high",s.drawImage(i,c,0,l,o);let h=s.createLinearGradient(c,0,c+l*.42,0);h.addColorStop(0,"rgba(6, 7, 10, 1)"),h.addColorStop(.55,"rgba(6, 7, 10, 0.55)"),h.addColorStop(1,"rgba(6, 7, 10, 0)"),s.fillStyle=h,s.fillRect(c-1,0,l*.42+1,e);let u=96*r;return s.fillStyle=we(.18),s.fillRect(u,e*.3,420*r,1.5*r),s.fillStyle=Ge(1),s.fillRect(u,e*.3-1.5*r,44*r,4.5*r),je(s,u,e*.3+40*r,"Player 1",22*r,pi(1),"mono","left"),je(s,u,e*.48,"Dylan",118*r,oe.white,"display","left"),je(s,u,e*.48+118*r,"Hughes",118*r,oe.white,"display","left"),je(s,u,e*.48+214*r,"Richmond, Virginia",22*r,xu(.95),"mono","left"),n}function lp(i,t,{frontBottom:e=.77}={}){let n=Un(i,t),s=n.getContext("2d"),r=_=>t-(t-e*t)*(_/i),a=(_,E)=>{let x=i*(1-_);return[x,r(x)-E]};s.fillStyle=oe.black1,s.fillRect(0,0,i,t);let o=t*.08,l=t*.56,c=[[0,o],[.45,o*.8],[.72,l*.55],[1,l]],h=(_=0)=>{s.moveTo(...a(0,o+_)),s.bezierCurveTo(...c.slice(1).flatMap(([E,x])=>a(E,x+_)))},u=s.createLinearGradient(i,0,0,0);u.addColorStop(0,oe.deep),u.addColorStop(.55,oe.royal),u.addColorStop(1,"#4a72ff"),s.beginPath(),s.moveTo(i,t),s.lineTo(...a(0,o)),h(),s.lineTo(0,t),s.closePath(),s.fillStyle=u,s.fill(),s.lineCap="round",s.strokeStyle=oe.paper,s.lineWidth=t*.0065,s.beginPath(),h(t*.03),s.stroke(),s.strokeStyle=Ge(.95),s.lineWidth=t*.008,s.beginPath(),s.moveTo(0,t*.045),s.lineTo(i,t*.045),s.stroke();let d=.86,[f]=a(d,0),g=l*.92;Oa(s,f,r(f)-g*.55,g*.085,oe.black1,"rgba(11, 12, 15, 0.18)");let[v]=a(.42,0),m=r(v)-(o*.9+t*.03),p=(t*.045+m)/2;return je(s,v,p-t*.035,"Dylan Hughes",t*.12,oe.paper,"display"),je(s,v,p+t*.06,"Creative technologist",t*.032,pi(1),"mono"),n}function vu(i,t){let e=Math.round(t*.56),n=Un(t,e),s=n.getContext("2d"),r=t/625;return s.fillStyle=oe.black1,s.fillRect(0,0,t,e),s.strokeStyle=Ge(.95),s.lineWidth=3*r,s.beginPath(),s.roundRect(14*r,14*r,t-28*r,e-28*r,14*r),s.stroke(),s.fillStyle=oe.paper2,s.textAlign="center",s.textBaseline="alphabetic",i==="instructions"?(fi(s,"display",30*r),s.fillText("How to play",t/2,66*r),fi(s,"body",20*r),s.textAlign="left",["1  Send the problem to dyl.harrell@gmail.com","2  Get a straight answer on whether","    I\u2019m the right person for it","3  Build something useful together"].forEach((o,l)=>s.fillText(o,52*r,(120+l*42)*r)),fi(s,"mono",13*r),s.textAlign="center",s.fillStyle=pi(1),s.fillText("DYLANHUGHES.DEV",t/2,316*r)):(fi(s,"display",40*r),s.fillText("Free play",t/2,118*r),fi(s,"mono",15*r),s.fillStyle=pi(1),s.fillText("RICHMOND, VIRGINIA \xB7 EASTERN TIME",t/2,172*r),s.fillStyle=oe.paper2,fi(s,"body",20*r),s.fillText("Websites \xB7 Game software \xB7 Printed parts",t/2,232*r),s.fillStyle=Dn.royal,s.fillRect(t/2-40*r,270*r,80*r,6*r)),n}function cp(i){let t=Tt.rail,e=ae.laneLeft,n=-4,s=ee.rightShoulder[1],r=i/(e-t),a=Un(i,(s-n)*r),o=a.getContext("2d"),l=x=>(x-t)*r,c=x=>(s-x)*r,h=o.createLinearGradient(0,0,0,a.height);h.addColorStop(0,oe.black2),h.addColorStop(1,oe.black1),o.fillStyle=h,o.fillRect(0,0,a.width,a.height);for(let x=0;x<a.height;x+=Math.max(2,r*.6))o.fillStyle=`rgba(255,255,255,${.012+.012*Math.sin(x*.37)})`,o.fillRect(0,x,a.width,1);o.strokeStyle=Ge(.95),o.lineWidth=1.4*r,o.beginPath(),o.moveTo(l(ee.leftShoulder[0]+6),c(ee.leftShoulder[1]-10)),o.lineTo(l(ee.lipLeft[0]-4),c(ee.lipLeft[1]-7)),o.stroke(),o.beginPath(),o.moveTo(l(ee.lipRight[0]+4),c(ee.lipRight[1]-7)),o.lineTo(l(ee.rightShoulder[0]-6),c(ee.rightShoulder[1]-10)),o.stroke();let u=l(Tt.cx),d=c(30),f=["1110","1001","1001","1001","1110"],g=["1001","1001","1111","1001","1001"],v=3.1*r,m=u-9*v/2,p=c(78);[f,g].forEach((x,M)=>x.forEach((S,A)=>[...S].forEach((y,w)=>{o.fillStyle=y==="1"?Dn.royal:we(.07),o.beginPath(),o.arc(m+(M*5+w+.5)*v,p+(A+.5)*v,v*.36,0,Math.PI*2),o.fill()}))),o.fillStyle=Dn.white,o.textAlign="center",o.textBaseline="middle",fi(o,"display",9*r),o.fillText("Dylan Hughes",u,d+6*r),fi(o,"mono",3.3*r),o.fillStyle=xu(.9),o.fillText("MODEL DH-26 \xB7 RICHMOND, VIRGINIA",u,d+17*r);let _=o.createLinearGradient(l(t),0,l(e),0);_.addColorStop(0,oe.royal),_.addColorStop(.5,oe.deep),_.addColorStop(1,oe.royal);let E=x=>{o.moveTo(l(t),c(10+x)),o.bezierCurveTo(l(t+130),c(1.5+x),l(e-130),c(1.5+x),l(e),c(10+x))};return o.fillStyle=_,o.beginPath(),o.moveTo(l(t),c(n)),E(0),o.lineTo(l(e),c(n)),o.closePath(),o.fill(),o.strokeStyle=we(.8),o.lineWidth=.7*r,o.beginPath(),E(4.5),o.stroke(),a}function hp(i){let t=Math.round(i*(Xn.height/Xn.width)),e=Un(i,t),n=e.getContext("2d");n.fillStyle=Dn.white,n.fillRect(0,0,i,t);let s=i/2,r=t*(1-13.5/Xn.height),a=i/Xn.width;return n.fillStyle=Dn.royal,n.beginPath(),n.arc(s,r,6.2*a,0,Math.PI*2),n.fill(),n.fillStyle=Dn.white,n.beginPath(),n.arc(s,r,4*a,0,Math.PI*2),n.fill(),n.fillStyle=Dn.royal,n.beginPath(),n.arc(s,r,2*a,0,Math.PI*2),n.fill(),n.fillStyle="rgba(20, 22, 26, 0.18)",n.fillRect(0,t-1.5*a,i,1.5*a),e}function up(i){let t=Un(i,i),e=t.getContext("2d"),n=i/2;e.fillStyle=Dn.white,e.beginPath(),e.arc(n,n,n,0,Math.PI*2),e.fill(),e.strokeStyle=Dn.royal,e.lineWidth=i*.07,e.beginPath(),e.arc(n,n,n*.88,0,Math.PI*2),e.stroke(),e.strokeStyle="rgba(20, 22, 26, 0.5)",e.lineWidth=i*.008,e.beginPath(),e.arc(n,n,n*.74,0,Math.PI*2),e.stroke();let s=["1110","1001","1001","1001","1110"],r=["1001","1001","1111","1001","1001"],a=i*.06,o=n-9*a/2,l=n-5*a/2-i*.04;return[s,r].forEach((c,h)=>c.forEach((u,d)=>[...u].forEach((f,g)=>{e.fillStyle=f==="1"?Dn.ink:"rgba(20, 22, 26, 0.1)",e.beginPath(),e.arc(o+(h*5+g+.5)*a,l+(d+.5)*a,a*.36,0,Math.PI*2),e.fill()}))),e.fillStyle=Dn.ink,e.textAlign="center",e.textBaseline="middle",fi(e,"mono",i*.075),e.fillText("1,000",n,n+i*.22),t}function dp(i,t=8,e=12){let n=Tn(i.posts),s=ts(n,e,10),r=s.map(m=>m[0]),a=s.map(m=>m[1]),o=[Math.min(...r),Math.min(...a),Math.max(...r),Math.max(...a)],l=Un((o[2]-o[0])*t,(o[3]-o[1])*t),c=l.getContext("2d"),h=m=>(m-o[0])*t,u=m=>(o[3]-m)*t,d=m=>{c.beginPath(),m.forEach(([p,_],E)=>E?c.lineTo(h(p),u(_)):c.moveTo(h(p),u(_))),c.closePath()},f=(o[0]+o[2])/2,g=(o[1]+o[3])/2,v=c.createRadialGradient(h(f),u(g+10),0,h(f),u(g),(o[2]-o[0])*t);v.addColorStop(0,oe.black3),v.addColorStop(1,oe.black1),c.fillStyle=v,c.fillRect(0,0,l.width,l.height),c.save(),d(s),c.clip(),c.fillStyle=we(.09);for(let m=o[1];m<o[3];m+=4.2)for(let p=o[0];p<o[2];p+=4.2)c.beginPath(),c.arc(h(p),u(m),.42*t,0,Math.PI*2),c.fill();return c.restore(),c.lineJoin="round",c.strokeStyle=Ge(1),c.lineWidth=1.5*t,d(ts(n,e-1.6,10)),c.stroke(),c.strokeStyle=pi(.4),c.lineWidth=.5*t,d(ts(n,e-4.4,10)),c.stroke(),{canvas:l,box:o}}function yu(i,{ppm:t=8,pad:e=1.5,mark:n=!1}={}){let s=i.map(m=>m[0]),r=i.map(m=>m[1]),a=[Math.min(...s)-e,Math.min(...r)-e,Math.max(...s)+e,Math.max(...r)+e],o=Un((a[2]-a[0])*t,(a[3]-a[1])*t),l=o.getContext("2d"),c=m=>(m-a[0])*t,h=m=>(a[3]-m)*t,u=new Path2D;i.forEach(([m,p],_)=>_?u.lineTo(c(m),h(p)):u.moveTo(c(m),h(p))),u.closePath();let d=0,f=0,g=0;i.forEach(([m,p],_)=>{let[E,x]=i[(_+1)%i.length],M=m*x-E*p;d+=M,f+=(m+E)*M,g+=(p+x)*M}),f/=3*d,g/=3*d,l.fillStyle=oe.black1,l.fillRect(0,0,o.width,o.height),l.save(),l.clip(u);let v=l.createRadialGradient(c(f),h(g),0,c(f),h(g),Math.max(o.width,o.height)*.8);v.addColorStop(0,oe.black3),v.addColorStop(1,oe.black1),l.fillStyle=v,l.fillRect(0,0,o.width,o.height),l.fillStyle=we(.09);for(let m=a[1]+3.175;m<a[3];m+=6.35)for(let p=a[0]+3.175;p<a[2];p+=6.35)l.beginPath(),l.arc(c(p),h(m),.42*t,0,Math.PI*2),l.fill();return l.lineJoin="round",l.strokeStyle=Ge(.26),l.lineWidth=9*t,l.stroke(u),l.strokeStyle=Ge(1),l.lineWidth=3.2*t,l.stroke(u),l.restore(),n&&l.isPointInPath(u,c(f),h(g))&&Oa(l,c(f),h(g),1.9*t,Ge(1),we(.05)),{canvas:o,box:a}}var As=Math.PI/180,dc=Tt.pitch*As,rn={inner:(Tt.w+22)*L,wallT:.019,front:.585,back:-.565,top:.116,bottom:-.32,floor:-.93},Mu=i=>rn.bottom+(i-rn.front)*Math.tan(dc),es={w:.64,h:.76,d:.25,glassW:.58,glassH:.58/1.32,glassY:.255,dmdW:.384,dmdH:.096,dmdY:.118};function ft(i,t,{cast:e=!0,receive:n=!0}={}){let s=new _e(i,t);return s.castShadow=e,s.receiveShadow=n,s}function Pi(i,t=8){let e=new bi(i);return e.colorSpace=Ve,e.anisotropy=t,e}function bu({canvas:i,box:t}){let e=Pi(i),[n,s,r,a]=[(t[0]-Tt.w/2)*L,(t[1]-Tt.l/2)*L,(t[2]-Tt.w/2)*L,(t[3]-Tt.l/2)*L];return e.repeat.set(1/(r-n),1/(a-s)),e.offset.set(-n/(r-n),-s/(a-s)),new Ze({map:e,roughness:.3,clearcoat:1,clearcoatRoughness:.05})}var fp,Eu=()=>fp||(fp=new me({color:660016,roughness:.3,emissive:wn,emissiveIntensity:Fa(wn,.16)})),Tu=new Ze({color:15264494,roughness:.45,clearcoat:.2});function xp({M:i,art:t,dmdCanvas:e,anisotropy:n}){let s=new he,r=new he;r.rotation.x=dc,s.add(r);let a=new he;r.add(a);let o={root:s,body:r,playfield:a,inserts:new Map,pops:[],targets:[],flippers:[],slings:[],interactive:[],gi:[],bulbs:[],rollovers:[]};return o.toWorld=(l,c,h=0)=>(r.updateMatrixWorld(!0),Ee(l,c,h).applyMatrix4(a.matrixWorld)),vv(a,i,t,n),yv(a,i),Sv(a,i,t,o),Tv(a,i,t,o),wv(a,i,o),Av(a,i,t,n),Rv(a,i,o),Cv(a,i,o),Pv(a,i,t,n,o),Iv(a,i,t,n,o),Dv(a,i,o),Hv(a,i,o),Gv(a,o),Vv(a,i,o),Wv(a,i,o),Xv(a,i,o),qv(r,s,i,t,n,o),Yv(s,i,t,e,n,o),o}var pp=[[0,0],[ae.laneLeft,0],[ae.laneLeft,105.8],[Tt.w,105.8],[Tt.w,Tt.l],[0,Tt.l]],mp=Array.from({length:40},(i,t)=>{let e=-(t/40)*Math.PI*2;return[ui.x+Math.cos(e)*(ui.r+.6),ui.y+Math.sin(e)*(ui.r+.6)]});function vv(i,t,e,n){let s=Qf(Pi(e.playfield,n)),r=([c,h])=>new ot(c/Tt.w,h/Tt.l),a=new cn(pp.map(r));a.holes.push(new ii(mp.map(r)));let o=new us(a,24).scale(Tt.w*L,Tt.l*L,1).translate(-Tt.w/2*L,-Tt.l/2*L,0).rotateX(-Math.PI/2),l=ft(o,s,{cast:!1});return i.add(l),i.add(ft(Ci(pp,-Tt.thick-.05,Tt.thick,{holes:[mp]}),t.wood,{cast:!1})),l}var ws={t:1.6,h:28.6};function yv(i,t){let e=ws.t/2,n=[[Tt.rail-e,-2],[Tt.rail-e,Ai.left.cy],...Na(Ai.left.cx,Ai.left.cy,Ai.left.r+e,180,90,24).slice(1),...Na(Ai.right.cx,Ai.right.cy,Ai.right.r+e,90,0,28),[ae.laneRight+e,105.8]];i.add(ft(yn(n,ws.t,ws.h),t.steel)),Mv(i,t,n,1);let s=ae.laneLeft-ae.dividerFace,r=[[ae.dividerFace+s/2,ae.apronTop],[ae.dividerFace+s/2,ae.dividerTop]];i.add(ft(yn(r,s,ws.h),t.steel))}function Mv(i,t,e,n,s=120){let r=[],a=s/2;for(let o=1;o<e.length;o++){let[l,c]=e[o-1],[h,u]=e[o],d=Math.hypot(h-l,u-c);if(!d)continue;let f=a;for(;f<=d;f+=s)r.push({x:l+(h-l)*f/d,y:c+(u-c)*f/d,dx:(h-l)/d,dy:(u-c)/d,side:n});a=f-d}vp(i,t,r)}function _p(i,t,e,n){let s=[0];for(let a=1;a<e.length;a++)s.push(s[a-1]+Math.hypot(e[a][0]-e[a-1][0],e[a][1]-e[a-1][1]));let r=n.filter(a=>Number.isFinite(a.at)).map(a=>{let o=a.at*s.at(-1),l=1;for(;l<e.length-1&&s[l]<o;)l++;let c=e[l-1],h=e[l],u=s[l]-s[l-1]||1,d=(o-s[l-1])/u;return{x:c[0]+(h[0]-c[0])*d,y:c[1]+(h[1]-c[1])*d,dx:(h[0]-c[0])/u,dy:(h[1]-c[1])/u,side:a.side}});vp(i,t,r)}function vp(i,t,e){let n=[],s=[];for(let{x:r,y:a,dx:o,dy:l,side:c}of e){let h=-l*c,u=o*c,d=r+h*4.6,f=a+u*4.6,g=Math.atan2(l,o);n.push(new de(9*L,1.2*L,6*L).rotateY(g).translate(...Ee(d,f,.6).toArray())),s.push(new Ce(2.3*L,2.3*L,1.1*L,12).translate(...Ee(d+h*.6,f+u*.6,1.75).toArray()))}n.length&&i.add(ft(sn(n),t.steel,{cast:!1}),ft(sn(s),t.darkSteel,{cast:!1}))}function Sv(i,t,e,n){Mr.forEach((s,r)=>{let a=e.inlane[r];i.add(ft(Ci(Tn(s.plate.outline),s.plate.z,s.thickness,{bevel:.3}),[bu(a.plate),Eu()])),i.add(ft(Ci(Tn(s.cover.outline),s.cover.z,s.thickness,{bevel:.4}),[bu(a.cover),Eu()]));let o=s.cover.z+s.thickness;for(let[l,c]of s.stacks)i.add(Pe(ft(new Ce(4*L,4*L,(s.plate.z-.8)*L,16).translate(0,(s.plate.z-.8)/2*L,0),Tu),l,c)),i.add(Pe(ft(new Ce(4*L,4*L,15*L,16).translate(0,7.5*L,0),Tu),l,c,s.plate.z+s.thickness));for(let[l,c]of[...s.stacks,s.post])i.add(Pe(ft(new Ce(4.5*L,4.5*L,.8*L,16).translate(0,.4*L,0),t.steel,{cast:!1}),l,c,o)),i.add(Pe(ft(Ne([[0,0],[3.6,0],[3.6,1.2],[2.6,2.6],[0,2.8]],16),t.darkSteel,{cast:!1}),l,c,o+.8));i.add(Pe(ft(new Ce(3.6*L,3.6*L,(s.cover.z-29.8)*L,6).translate(0,(s.cover.z-29.8)/2*L,0),t.steel,{cast:!1}),...s.post,29.8))});for(let[s,r]of jl)i.add(bv(t,s,r));i.add(ft(sn([...Ql,...cu].map(s=>yn(s.line,ws.t,ws.h))),t.steel));for(let s of Ql)_p(i,t,s.line,s.mounts);for(let[s,r]of hu)i.add(Ev(t,s,r,tc.d,tc.height));for(let[s,r]of Da.entries())n.rollovers.push(wu(i,t,r.x,r.y,Es("orbit"+s)));for(let[s,r]of hi.entries())n.rollovers.push(wu(i,t,r.x,r.y,Es("return"+s)))}var gp=(()=>{let i=[];for(let t=0;t<16;t++){let e=t/16*Math.PI*2,n=t%2?7.6:9.5;i.push([Math.cos(e)*n,Math.sin(e)*n])}return i})(),Ba;function bv(i,t,e,{ring:n=!0}={}){if(!Ba){let r=Qi(gp,9,{bevel:.5,curveSegments:1}),a=Qi(gp,9,{bevel:.5,curveSegments:1}).translate(0,18*L,0),o=new Ce(4.75*L,4.75*L,9*L,16).translate(0,13.5*L,0);Ba={body:sn([r,a,o.toNonIndexed()]),ring:new rr(7.13*L,2.38*L,10,28).rotateX(Math.PI/2).translate(0,13.5*L,0),nut:new Ce(3.67*L,3.67*L,2.8*L,6).translate(0,28.4*L,0)}}let s=new he;return s.add(ft(Ba.body,i.postPlastic)),n&&s.add(ft(Ba.ring,i.rubber)),s.add(ft(Ba.nut,i.steel,{cast:!1})),Pe(s,t,e)}function Ev(i,t,e,n,s){let r=new he,a=n/2;return r.add(ft(Ne([[0,0],[a-.6,0],[a-.6,6],[0,6]],20),i.postPlastic)),r.add(ft(Ne([[a-2.4,6],[a,6.6],[a,20.4],[a-2.4,21]],24),i.rubber)),r.add(ft(Ne([[0,6],[a-2.4,6],[a-2.4,21],[a-.6,21],[a-.6,s-1],[a-1.6,s],[0,s]],20),i.postPlastic)),Pe(r,t,e)}function yp(i,t,e,{height:n=30}={}){return Pe(ft(Ne([[0,0],[5.6,0],[5.6,1.4],[4.76,2.2],[4.76,9],[3.9,10.5],[3.9,16.5],[4.76,18],[4.76,n],[0,n]],20),i.postPlastic),t,e)}var Ru=new ln({color:328966});function wu(i,t,e,n,s){let r=new he,a=new cn,o=44.45/2-2.38,l=2.38;a.absarc(0,o,l,0,Math.PI,!1),a.absarc(0,-o,l,Math.PI,Math.PI*2,!1);let c=new us(a,6).scale(L,L,L).rotateX(-Math.PI/2),h=new _e(c,Ru);h.position.y=.06*L,r.add(h);let u=[[0,-21.2,-3],[0,-19.05,0]];for(let f=1;f<12;f++){let g=-1+2*f/12;u.push([0,g*19.05,6.35*Math.sqrt(1-g*g)])}u.push([0,19.05,0],[0,21.2,-3]);let d=ft(sc(u,.8,{tension:.2,radial:8}),t.chrome,{receive:!1});return r.add(d),Pe(r,e,n),i.add(r),{wire:d,x:e,y:n,insert:s,press:0}}var Ts={postR:4.76,cord:6.35,travel:9};function Tv(i,t,e,n){for(let s of yr){let r=new he,a=s.posts;for(let[I,F]of a)r.add(yp(t,I,F,{height:30.5}));let[o,l,c]=a,h=Math.hypot(l[0]-o[0],l[1]-o[1]),u=(l[0]-o[0])/h,d=(l[1]-o[1])/h,f=-d,g=u;(c[0]-o[0])*f+(c[1]-o[1])*g>0&&(f=-f,g=-g);let v=Ts.postR+Ts.cord/2,m=rc(ts(Tn(a),v,8),3),p=m.map(([I,F])=>{let G=((I-o[0])*u+(F-o[1])*d)/h;return(I-o[0])*f+(F-o[1])*g>v*.5&&G>0&&G<1?Math.sin(Math.PI*G):0}),_=I=>Ua(m.map(([F,G],X)=>[F+f*I*p[X],G+g*I*p[X],13.5]),Ts.cord/2,{closed:!0,tension:.1,radial:8,segments:m.length*2}),E=ft(_(0),t.rubber);E.userData.action="sling-"+s.side,n.interactive.push(E),r.add(E);let x=ts(Tn(a),12,8);r.add(ft(Ci(x,30.5,2.2,{bevel:.4}),[bu(e.plastics[yr.indexOf(s)]),Eu()]));for(let[I,F]of a)r.add(Pe(ft(new Ce(3.5*L,3.5*L,.55*L,16).translate(0,.275*L,0),t.steel),I,F,32.7)),r.add(Pe(ft(new Ce(3.67*L,3.67*L,2.8*L,6).translate(0,1.4*L,0),t.steel),I,F,33.25));let M=Math.atan2(d,u)/As,S=Math.sign(-d*f+u*g),A=-S*(v-Ts.cord/2-.15-2),y=[(o[0]+l[0])/2,(o[1]+l[1])/2],w=new he,R=ft(new de(18*L,10*L,4*L),Tu);R.position.set(0,13.5*L,A*L),w.add(R),w.add(ft(new de(7.5*L,9*L,1.5*L).translate(0,4*L,(A+S*1.2)*L),t.steel)),Pe(w,y[0],y[1],0,M),r.add(w);let P=new _e(new Ke(10*L,3*L).rotateX(-Math.PI/2),Ru);P.position.set(0,.06*L,(A+S*1.2)*L);let U=Pe(new he,y[0],y[1],0,M);U.add(P);for(let I of[-1,1]){let F=ft(new de(7*L,12*L,.35*L).translate(I*26*L,10*L,-S*(v-Ts.cord/2-1.2)*L),t.steel),G=ft(new de(9*L,5*L,6*L).translate(I*26*L,2.5*L,-S*(v-Ts.cord/2-5.5)*L),t.graphitePlastic);U.add(F,G)}r.add(U),i.add(r);let B=new D(f*L,0,-g*L).multiplyScalar(Ts.travel+.15);n.slings.push({side:s.side,rubber:E,rubberGeo:_,arm:w,rest:w.position.clone(),push:B,kicked:-1,shown:0})}}function cc(i,t,e){let n=Math.asin((i-t)/e),s=[],r=18,a=Math.PI/2-n,o=Math.PI*1.5+n;for(let h=0;h<=r;h++){let u=a+(o-a)*(h/r);s.push([Math.cos(u)*i,Math.sin(u)*i])}let l=-Math.PI/2+n,c=Math.PI/2-n;for(let h=0;h<=r;h++){let u=l+(c-l)*(h/r);s.push([e+Math.cos(u)*t,Math.sin(u)*t])}return s}function wv(i,t,e){for(let n of vn){let s=Kl(n),r=s.rubberTo-s.rubberFrom,a=n.length,o=Qi(cc(...s.flange,a),s.rubberFrom-.6,{bevel:.5}),l=Qi(cc(...s.groove,a),r),c=Qi(cc(n.baseR-2.6,n.tipR-2.6,a),r,{bevel:2.6}),h=Qi(cc(...s.cap,a),n.height-s.rubberTo,{bevel:.9}),u=new he,d=[[o,t.whitePlastic,.6],[l,t.whitePlastic,s.rubberFrom],[c,t.rubberRoyal,s.rubberFrom],[h,t.whitePlastic,s.rubberTo]];for(let[f,g,v]of d){let m=ft(f,g);m.position.y=v*L,m.userData.action="flip-"+n.side,u.add(m),e.interactive.push(m)}u.add(ft(new Ce(3.2*L,3.2*L,1*L,6).translate(0,(n.height+.5)*L,0),t.steel,{cast:!1})),Pe(u,n.x,n.y,0,n.rest),i.add(u),e.flippers.push({...n,pivot:u})}}function Av(i,t,e,n){let s=Math.atan2(ee.lipEndY-ee.lipCy,ee.lipLeft[0]-Tt.cx)/As,r=Math.atan2(ee.lipEndY-ee.lipCy,ee.lipRight[0]-Tt.cx)/As,a=Na(Tt.cx,ee.lipCy,ee.lipR,s,r,36),o=[[Tt.rail,-4],[ae.laneLeft,-4],ee.rightShoulder,...[...a].reverse(),ee.leftShoulder],l=1.3,c=ee.deck,h=new Ze({color:1316378,roughness:.4,metalness:.3,clearcoat:.8,clearcoatRoughness:.1}),u=Pi(e.apron,n),d=(Tt.rail-Tt.w/2)*L,f=(ae.laneLeft-Tt.w/2)*L,g=(-4-Tt.l/2)*L,v=(ee.rightShoulder[1]-Tt.l/2)*L;u.repeat.set(1/(f-d),1/(v-g)),u.offset.set(-d/(f-d),-g/(v-g));let m=new Ze({map:u,roughness:.55,metalness:0,clearcoat:.8,clearcoatRoughness:.1});i.add(ft(Ci(Tn(o),c-l,l,{bevel:.4}),[m,h]));let p=c-l,_=155.5/2,E=[yn([ee.leftShoulder,ee.lipLeft],l,p),yn([ee.lipRight,ee.rightShoulder],l,p),yn([[ae.laneLeft-.65,-4],[ae.laneLeft-.65,ee.rightShoulder[1]]],l,p),yn([[Tt.rail+.65,-4],[Tt.rail+.65,ee.leftShoulder[1]]],l,14,p-14),yn([[Tt.rail,-3.35],[Tt.cx-_,-3.35]],l,p),yn([[Tt.cx+_,-3.35],[ae.laneLeft,-3.35]],l,p),yn([[Tt.cx-_,-3.35],[Tt.cx+_,-3.35]],l,p-38.1,38.1)];i.add(ft(sn(E),h)),i.add(ft(Ci(Tn(o),.08,.1),t.cabinetInner,{cast:!1})),i.add(ft(sn(lu.map(M=>yn(M,1.6,20))),t.steel));let x=Na(Tt.cx,ee.lipCy,ee.lipR+.6,s,r,36).map(([M,S])=>[M,S,c-.6]);i.add(ft(Ua(x,.8,{tension:0}),t.aluminium,{cast:!1}));for(let[M,S]of[["instructions",Tt.cx-147.65],["free",Tt.cx+147.65]]){let A=Pi(e.cards[M],n),y=ft(new Ke(158.8*L,88.9*L).rotateX(-Math.PI/2),new me({map:A,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),{cast:!1});y.position.copy(Ee(S,61.55,c+.3)),i.add(y);let w=79.4+1.2,R=61.55-44.45-1.2,P=61.55+44.45+1.2;i.add(ft(yn([[S-w,R],[S+w,R],[S+w,P],[S-w,P],[S-w,R]],2.4,1.2,c),t.aluminium,{cast:!1}))}}function Rv(i,t,e){let n=[];for(let s of Ri.rubbers){for(let[a,o]of s.posts)i.add(yp(t,a,o,{height:26}));let r=rc(ts(Tn(s.posts),s.postR+s.cord/2,10),3);n.push(Ua(r.map(([a,o])=>[a,o,s.h]),s.cord/2,{closed:!0,tension:.1,radial:8,segments:r.length*2}))}i.add(ft(sn(n),t.rubber));for(let[s,r]of Ri.lanes.entries())e.rollovers.push(wu(i,t,r.x,r.y,Es("lane"+s)))}function Cv(i,t,e){let{r:n}=ui,s=new he,r=(d,f,g=0)=>new D(d*L,g*L,-f*L),a=[];for(let d=0;d<=8;d++){let f=d/8*10.5;a.push([f,8.5-Math.sqrt(14.1**2-f*f)])}let o=a.map(([d,f])=>[d,f-.9]),l=Ne([...o,[n-.4,-.9],[n,-.1],[n+4.4,.05],[n+4.4,.85],[n+3.8,.95],[n-.3,.95],[n-1,.2],...[...a].reverse()],48);s.add(ft(l,t.steel,{cast:!1}));let c=(ui.kickAngle+180)*As,h=new _e(new de(3.6*L,.2*L,9*L),Ru);h.position.copy(r(Math.cos(c)*(n-1),Math.sin(c)*(n-1),1.05)),h.rotation.y=c+Math.PI/2,s.add(h);let u=new he;u.add(ft(new de(2*L,8*L,6*L).translate(0,-3*L,0),t.darkSteel,{cast:!1})),u.position.copy(r(Math.cos(c)*(n-2),Math.sin(c)*(n-2),0)),u.rotation.y=c+Math.PI/2,s.add(u);for(let d of[-1,1]){let f=c+d*(Math.PI/2),g=ft(Ne([[0,0],[2.7,0],[2.7,.6],[1.8,1.4],[0,1.6]],16),t.chrome,{cast:!1});g.position.copy(r(Math.cos(f)*(n+2.2),Math.sin(f)*(n+2.2),.95)),s.add(g)}Pe(s,ui.x,ui.y),i.add(s),e.saucer={group:s,finger:u,rest:u.position.clone(),out:r(-Math.cos(c),-Math.sin(c)).normalize(),kicked:-1}}function Pv(i,t,e,n,s){let r=Ne([[0,0],[17,0],[17,2.7],[0,2.7]],40),a=Ne([[11,2.7],[23.15,2.7],[23.4,3.4],[23.15,4.7],[22.2,5.4],[11,5.4]],56),o=Ne([[0,5.4],[15.5,5.4],[15.5,31.6],[0,31.6]],40),l=Ne([[15.8,-9],[16.8,-9],[16.8,0],[22.6,0],[23.2,.5],[23.2,1.5],[22.6,2],[15.8,2],[15.8,-9]],56),c=new Ce(1.6*L,1.6*L,42*L,10).translate(0,-21*L,0),h=Ne([[0,31.6],[25,31.6],[29.4,32],[30,33],[30,36.5],[29.3,37.8],[25.5,41.6],[21,43.1],[10,43.45],[0,43.5]],72),u=new me({map:Pi(e.popDecal,n),roughness:.3,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),d=new $r(20.5*L,48).rotateX(-Math.PI/2).translate(0,43.56*L,0),f=new de(9*L,6*L,6*L).translate(0,3*L,0),g=Ne([[0,6],[2.6,6],[3.4,7],[5,10],[5,18.5],[3.8,21.5],[0,22.4]],20);for(let[v,m]of Ss.entries()){let p=new he,_=[],E=(U,B,...I)=>{let F=new he;return F.add(...I),F.userData={label:U,lift:B},p.add(F),_.push(F),F};E("Base",0,ft(r,t.graphitePlastic));let x=ft(a,t.whitePlastic);E("Skirt",26,x);let M=t.bulb.clone();s.bulbs.push(M),E("Lamp \xB7 #555",56,ft(f,t.darkSteel,{cast:!1}),ft(g,M,{cast:!1}));let S=t.popBody.clone(),A=ft(o,S);E("Body",86,A);let y=new he;y.add(ft(l,t.chrome));for(let U of[-1,1])y.add(ft(c,t.chrome).translateX(U*19.5*L));y.position.y=Sr.ringRest*L,E("Ring & rods",128,y);let w=t.popCap.clone(),R=ft(h,w,{receive:!1});E("Cap \xB7 \xD860",172,R),E("Decal",206,ft(d,u,{cast:!1}));let P=[-1,1].map(U=>ft(new Ce(2.6*L,2.6*L,.9*L,16).translate(U*17.46*L,43.75*L,0),t.chrome,{cast:!1}));E("Cap screws \xD72",232,...P),Pe(p,m.x,m.y),i.add(p),p.traverse(U=>{U.userData.action="pop-"+v}),s.interactive.push(R,A,x),s.pops.push({group:p,parts:_,ring:y,skirt:x,cap:R,capMat:w,bodyMat:S,fired:-1,axis:new D(1,0,0),x:m.x,y:m.y,id:m.id})}}function Iv(i,t,e,n,s){let r=Xn,a=2.4,o=-r.depth/2,l=new me({map:Pi(e.target,n),roughness:.42}),c=t.whitePlastic;for(let[u,d]of r.list.entries()){let f=new he,g=ft(new de(r.width*L,r.height*L,a*L),[c,c,c,c,l,c]);g.position.set(0,(r.height/2+1.5)*L,-(o+a/2)*L),f.add(g),f.add(ft(new de(18*L,22*L,(r.depth-a)*L).translate(0,12.5*L,-(o+a+(r.depth-a)/2)*L),t.graphitePlastic)),f.add(ft(new de(.4*L,24*L,5*L).translate(-4*L,14*L,-(r.depth/2+1)*L),t.steel,{cast:!1})),Pe(f,d.x,d.y),i.add(f),i.add(Pe(ft(new de(22*L,1.5*L,(r.depth+4)*L).translate(0,.75*L,0),t.darkSteel,{cast:!1}),d.x,d.y+1)),g.userData.action="target-"+u,s.interactive.push(g),s.targets.push({holder:f,face:g,rest:f.position.clone(),back:new D(0,0,-L),hit:-1,index:u})}for(let[u,d]of uu.entries()){let f=d.d/2,g=di.grooves[u],v=di.h,m=di.cord;i.add(Pe(ft(Ne([[0,0],[f,0],[f,v-m/2-1.5],[g,v-m/2-.5],[g,v+m/2+.5],[f,v+m/2+1.5],[f,d.height-1.2],[f-1.2,d.height],[0,d.height]],28),t.postPlastic),d.x,d.y)),i.add(Pe(ft(new Ce(3.67*L,3.67*L,2.8*L,6).translate(0,1.4*L,0),t.steel,{cast:!1}),d.x,d.y,d.height))}let h=Lv(di.posts.map(([u,d],f)=>({x:u,y:d,r:di.grooves[f]+di.cord/2})));i.add(ft(Ua(rc(h,3).map(([u,d])=>[u,d,di.h]),di.cord/2,{closed:!0,tension:.1,radial:8}),t.rubber)),i.add(ft(sn(ec.map(u=>yn(u.line,u.thickness,ws.h))),t.steel));for(let u of ec)_p(i,t,u.line,u.mounts)}function Lv(i){let t=Tn(i.map(r=>[r.x,r.y])).map(([r,a])=>i.find(o=>o.x===r&&o.y===a)),e=t.length,n=[],s=(r,a)=>{let o=a.x-r.x,l=a.y-r.y,c=Math.hypot(o,l);return Math.atan2(l,o)-Math.acos((r.r-a.r)/c)};for(let r=0;r<e;r++){let a=t[r],o=s(t[(r-1+e)%e],a),c=s(a,t[(r+1)%e])-o;for(;c<0;)c+=Math.PI*2;let h=Math.max(2,Math.ceil(c/(8*As)));for(let u=0;u<=h;u++){let d=o+c*u/h;n.push([a.x+Math.cos(d)*a.r,a.y+Math.sin(d)*a.r])}}return n}function Dv(i,t,e){e.ramps=[];let n=t.clearPlastic,s=new Au;for(let r of ji){let a=new Pn(r.profile.map(([u,d,f])=>Ee(u,d,f)),!1,"centripetal"),o=Uv(r.profile),l=new he,c=ft(Nv(a,o),n,{cast:!1,receive:!1});c.renderOrder=2,l.add(c),l.add(Fv(a,o,t)),l.add(Ov(r,t,n,s));for(let u of l.children)u.traverse(d=>{d.userData.action="ramp-"+r.id});i.add(l),e.interactive.push(c);let h=new Pn(r.wire.map(([u,d,f])=>Ee(u,d,f)),!1,"centripetal");i.add(ft(Bv(h,r),t.chrome)),i.add(kv(r,t,s)),e.ramps.push({id:r.id,side:r.side,curve:a,wireCurve:h,group:l})}i.add(...s.meshes(t))}function Uv(i){let t=[0];for(let e=1;e<i.length;e++)t.push(t[e-1]+Math.hypot(...[0,1,2].map(n=>i[e][n]-i[e-1][n])));return e=>{let n=e*t.at(-1),s=1;for(;s<t.length-1&&t[s]<n;)s++;let r=Math.max(0,Math.min(1,(n-t[s-1])/(t[s]-t[s-1]||1)));return i[s-1][3]+(i[s][3]-i[s-1][3])*r}}var hc=.9,uc=.35;function Nv(i,t){let e=br,n=240,s=new D(0,1,0),r=[];for(let c=0;c<=n;c++){let h=c/n,u=i.getPointAt(h),d=i.getTangentAt(h);r.push({p:u,side:new D().crossVectors(d,s).normalize(),w:t(h),floor:u.y/L})}let a=({w:c,floor:h})=>{let u=c/2,d=u+e.side,f=e.wall,g=e.wall,v=Math.max(0,hc-h),m=Math.max(-e.floor,uc-h),p=h<30?Math.min(m,uc-h):m;return[[[-d,m],[d,m],[d,f],[u,f],[u,v],[-u,v],[-u,g],[-d,g]],[[u,p],[d,p],[d,m],[u,m]],[[-d,p],[-u,p],[-u,m],[-d,m]]]},o=r.map(a),l=[];return o[0].forEach((c,h)=>{for(let u=0;u<c.length;u++){let d=[],f=[],g=[];for(let m=0;m<=n;m++){let p=r[m],_=o[m][h];for(let[E,x]of[_[u],_[(u+1)%_.length]]){let M=p.p.clone().addScaledVector(p.side,E*L).addScaledVector(s,x*L);d.push(M.x,M.y,M.z),g.push(M.y/L)}}for(let m=0;m<n*2;m+=2)Math.max(g[m],g[m+1],g[m+2],g[m+3])<uc+.05||f.push(m,m+2,m+1,m+1,m+2,m+3);let v=new ve;v.setAttribute("position",new te(d,3)),v.setIndex(f),v.computeVertexNormals(),l.push(v)}}),sn(l.map(c=>c.toNonIndexed()))}function Fv(i,t,e){let n=br,s=t(0)/2+n.side,r=24,a=18,o=new D(0,1,0),l=i.getPointAt(0),c=i.getTangentAt(0).setY(0).normalize().negate(),h=new D().crossVectors(c,o).normalize(),u=new cn([[0,0],[r,0],[r,uc-.1],[a,hc],[0,hc]].map(([p,_])=>new ot(p*L,_*L))),d=new si(u,{depth:2*s*L,bevelEnabled:!1});d.translate(0,0,-s*L);let f=new ue().makeBasis(c,o,h).setPosition(l.x,0,l.z);d.applyMatrix4(f);let g=new he;g.add(ft(d,e.steel,{cast:!1}));let v=[],m=[];for(let p of[-1,1]){let _=new D(a-5,hc,p*(s-4.5)).multiplyScalar(L).applyMatrix4(f);v.push(new Ce(2.6*L,2.6*L,.16*L,20).translate(_.x,_.y+.08*L,_.z)),m.push(...Sp(_.x,_.y+.17*L,_.z,1.7))}return g.add(ft(sn(v),e.darkSteel,{cast:!1}),ft(sn(m),e.rubber,{cast:!1})),g}function Mp(i,t,e){let n=null;for(let s=1;s<i.length;s++){let r=i[s-1],a=i[s],o=a[0]-r[0],l=a[1]-r[1],c=o*o+l*l||1,h=Math.max(0,Math.min(1,((t-r[0])*o+(e-r[1])*l)/c)),u=r.map((f,g)=>f+(a[g]-f)*h),d=Math.hypot(u[0]-t,u[1]-e);(!n||d<n.d)&&(n={q:u,d})}return{...n,dx:(n.q[0]-t)/(n.d||1),dy:(n.q[1]-e)/(n.d||1)}}var Su={af:9.5,chamfer:.6},Au=class{constructor(){this.zinc=[],this.steel=[],this.black=[],this.recess=[]}standoff(t,e,n){let s=Su.af/Math.sqrt(3),r=Su.af/2-.05,a=Su.chamfer,o=Ne([[0,0],[r,0],[s,a],[s,n-a],[r,n],[0,n]],6).rotateY(Math.PI/6).toNonIndexed();o.computeVertexNormals(),this.zinc.push(o.translate(...Ee(t,e,.8).toArray())),this.washer(t,e,0,6.6,.8)}washer(t,e,n,s=5.2,r=.8,a=2.2){this.steel.push(Ne([[a,0],[s,0],[s,r],[a,r],[a,0]],28).toNonIndexed().translate(...Ee(t,e,n).toArray()))}screw(t,e,n){this.washer(t,e,n);let s=Ne([[0,0],[3.5,0],[3.5,.9],[3.15,1.85],[2.3,2.35],[0,2.5]],24).toNonIndexed();this.black.push(s.translate(...Ee(t,e,n+.8).toArray()));let r=Ee(t,e,n+.8+2.42);this.recess.push(...Sp(r.x,r.y,r.z,2.4))}meshes(t){let e=[],n=(s,r,a)=>{s.length&&e.push(ft(sn(s.map(ka)),r,{cast:a}))};return n(this.zinc,t.zinc,!0),n(this.steel,t.steel,!1),n(this.black,t.darkSteel,!1),n(this.recess,t.rubber,!1),e}},ka=i=>{let t=i.index?i.toNonIndexed():i;return t.deleteAttribute("uv"),t};function Sp(i,t,e,n){return[0,Math.PI/2].map(s=>ka(new de(n*L,.12*L,.45*L).rotateY(s+Math.PI/4).translate(i,t,e)))}function Ov(i,t,e,n){let s=[];for(let[l,c]of i.supports){let h=Mp(i.profile,l,c),u=h.q[2],d=u-br.floor,f=d-3,g=h.d-h.q[3]/2-br.side+1,v=h.dx,m=h.dy,p=-m,_=v,E=[];for(let x=0;x<=14;x++){let M=Math.PI/2+x/14*Math.PI;E.push([l+(Math.cos(M)*v+Math.sin(M)*p)*7,c+(Math.cos(M)*m+Math.sin(M)*_)*7])}E.push([l+v*g-p*7,c+m*g-_*7],[l+v*g+p*7,c+m*g+_*7]),s.push(Ci(Tn(E),f,3,{bevel:.35,curveSegments:4})),n.standoff(l,c,f-.8),n.screw(l,c,d)}let o=new he;if(s.length){let l=ft(sn(s.map(ka)),e,{cast:!1,receive:!1});l.renderOrder=2,o.add(l)}return o}function Bv(i,t){let e=i.getLength()/L,n=Math.ceil(e/3),s=new D(0,1,0),r=M=>{let S=i.getPointAt(Math.min(1,Math.max(0,M))),A=i.getTangentAt(Math.min(1,Math.max(0,M)));return{p:S,t:A,s:new D().crossVectors(A,s).normalize()}},a=(M,S,A,y=0)=>M.p.clone().addScaledVector(M.s,S*L).addScaledVector(s,A*L).addScaledVector(M.t,y*L),o=nc,l=o.rail,c=o.rod,h=o.dropRadius,u=e-h-o.spread,d=M=>{let S=Math.max(0,Math.min(1,M));return S*S*(3-2*S)},f=[],g=(M,S=c,A)=>f.push(new Ei(new Pn(M),A||M.length*2,S*L,8));for(let M of[-1,1]){let S=[];for(let A=0;A<=n;A++){let y=A/n*(e-h);S.push(a(r(y/e),M*(l+(h-l)*d((y-u)/o.spread)),c))}g(S,c,n)}let v=r((e-h)/e),m=[];for(let M=0;M<=16;M++){let S=M/16*Math.PI;m.push(a(v,-h*Math.cos(S),c,h*Math.sin(S)))}g(m);let{u:p,v:_}=o.sideRail;for(let M of t.sideRails){let S=[],A=Math.max(4,Math.ceil((M.to-M.from)*e/3));for(let y=0;y<=A;y++)S.push(a(r(M.from+(M.to-M.from)*y/A),-M.side*p,_));g(S,c,A)}let E=[];for(let M=0;M<=16;M++){let S=M/16*Math.PI;E.push(a(v,-(h+1)*Math.cos(S),_,(h+1)*Math.sin(S)))}g(E);for(let M of[-1,1])g([a(v,M*(h+1),c),a(v,M*(h+1),_)],c,4);let x=[[-l-4,c+3],[-l-2.5,-.5],[-l+1,-2.8],[0,-4.2],[l-1,-2.8],[l+2.5,-.5],[l+4,c+3]];for(let M=20;M<u;M+=55){let S=r(M/e);g(x.map(([A,y])=>a(S,A,y)),1.75,24)}return sn(f)}function kv(i,t,e){let n=[];for(let[o,l]of i.wireSupports){let c=Mp(i.wire,o,l),h=c.q[2],u=c.d-nc.rail,d=h-5,f=Math.min(6.5,u-5),g=[[0,d-1.6/2],[f,d-1.6/2],[u-1.2,h+.4]];n.push(zv(g,o,l,c.dx,c.dy,11,1.6)),n.push(ka(new Ce(11/2*L,11/2*L,1.6*L,28).translate(...Ee(o,l,d-1.6/2).toArray())));let v=new Ce(1.5*L,1.5*L,10*L,10).rotateX(Math.PI/2).rotateY(Math.atan2(c.dy,c.dx));n.push(ka(v.translate(...Ee(o+c.dx*(u-1.6),l+c.dy*(u-1.6),h-.2).toArray()))),e.standoff(o,l,d-1.6-.8),e.screw(o,l,d)}let a=new he;return n.length&&a.add(ft(sn(n),t.steel)),a}function zv(i,t,e,n,s,r,a){let o=i.map(([v,m])=>[v,m]),l=o.length,c=[],h=v=>{let m=o[Math.max(0,v-1)],p=o[Math.min(l-1,v+1)],_=p[0]-m[0],E=p[1]-m[1],x=Math.hypot(_,E),M=-E/x,S=_/x;if(v>0&&v<l-1){let A=o[v-1],y=o[v],w=o[v+1],R=[-(y[1]-A[1]),y[0]-A[0]],P=[-(w[1]-y[1]),w[0]-y[0]],U=Math.hypot(...R),B=Math.hypot(...P),I=[R[0]/U+P[0]/B,R[1]/U+P[1]/B],F=Math.hypot(...I),G=1/Math.max(.3,I[0]/F*(R[0]/U)+I[1]/F*(R[1]/U));M=I[0]/F*G,S=I[1]/F*G}return[M,S]},u=(v,m,p)=>{let[_,E]=h(v),x=o[v][0]+_*p*a/2,M=o[v][1]+E*p*a/2;return Ee(t+n*x-s*m*r/2,e+s*x+n*m*r/2,M)},d=(v,m,p,_)=>{for(let E of[v,p,m,v,_,p])c.push(E.x,E.y,E.z)};for(let v=0;v<l-1;v++){let m=[[-1,1],[1,1],[1,-1],[-1,-1]];for(let p=0;p<4;p++){let[_,E]=m[p],[x,M]=m[(p+1)%4];d(u(v,_,E),u(v,x,M),u(v+1,x,M),u(v+1,_,E))}}(v=>{let m=[[-1,1],[1,1],[1,-1],[-1,-1]].map(([p,_])=>u(v,p,_));d(m[0],m[1],m[2],m[3])})(l-1);let g=new ve;return g.setAttribute("position",new te(c,3)),g.computeVertexNormals(),g}function Hv(i,t,e){let[n,s]=Ms.from,[r,a]=Ms.to,o=Math.hypot(r-n,a-s),l=Math.atan2(a-s,r-n)/As,c=Pe(new he,(n+r)/2,(s+a)/2,0,l),h=Ms.height-3;for(let g of[-1,1])c.add(ft(new de(1.6*L,Ms.height*L,10*L).translate(g*(o/2)*L,Ms.height/2*L,0),t.steel));c.add(ft(new Ce(1.2*L,1.2*L,o*L,10).rotateZ(Math.PI/2).translate(0,h*L,0),t.steel,{cast:!1}));let u=o/2-5,d=h-5,f=new he;f.add(ft(sc([[-u,0,0],[-u,0,-d],[u,0,-d],[u,0,0]],.9,{tension:.02,radial:6}),t.chrome,{cast:!1})),f.add(ft(sc([[-u,0,-d/2],[u,0,-d/2]],.7,{tension:0,radial:6}),t.chrome,{cast:!1})),f.position.y=h*L,c.add(f),i.add(c),e.gate={flap:f,open:0,velocity:0,at:Ee((n+r)/2,(s+a)/2,fn)}}function Gv(i,t){for(let e of _u()){let n=mu(e.color);if(e.legend||e.icon){let r=Pi(ip(e,192));r.repeat.set(1/(e.w*L),1/(e.l*L)),r.offset.set(.5,.5),n.map=r,n.emissiveMap=r}let s=new _e(Qi(e.shape,.4,{curveSegments:6}),[n,mu(e.color)]);Pe(s,e.x,e.y,-.34,e.angle),s.renderOrder=1,i.add(s),t.inserts.set(e.id,{mesh:s,mat:n,side:s.material[1],group:e.group,index:e.index,level:.06,goal:.06,flash:0})}}function Vv(i,t,e){let[n,s]=ae.ballRest,r=s-fn,a=Tt.l/2-(rn.front-rn.wallT)/L,o=new he;o.add(ft(Ne([[0,0],[5.5,.4],[8.4,1.8],[9.5,4.5],[9.5,25.4],[0,25.4]],24).rotateX(Math.PI/2),t.rubber)),o.add(ft(new Ce(4.76*L,4.76*L,194*L,16).rotateX(Math.PI/2).translate(0,0,(6.4+97)*L),t.chrome));let l=ft(Ne([[0,0],[6,0],[10.5,5],[14.3,16],[13.6,30],[8,33],[0,33.5]],28).rotateX(Math.PI/2).translate(0,0,196*L),t.rubberRoyal);o.add(l),o.position.copy(Ee(n,r,10)),i.add(o);for(let f of o.children)f.userData.action="plunger";e.interactive.push(l);let c=r-25.4-a,h=24,u=[];for(let f=0;f<=h*16;f++){let g=f/16*Math.PI*2;u.push(new D(Math.cos(g)*5.55*L,Math.sin(g)*5.55*L,-(f/(h*16))*c*L))}let d=ft(new Ei(new Pn(u),h*16,.4*L,5),t.steel);d.position.copy(Ee(n,a,10)),i.add(d),i.add(Pe(ft(new de(28*L,34*L,5*L).translate(0,10*L,-2.5*L),t.darkSteel),n,a+5,0)),e.plunger={group:o,spring:d,springLen:c,rest:o.position.clone(),pull:0,offset:0}}function Wv(i,t,e){let n=new ra(fn*L,40,28);e.ball=ft(n,t.ball),e.ball.position.copy(Ee(ae.ballRest[0],ae.ballRest[1],fn)),i.add(e.ball),e.shooterBall=ft(n,t.ball),e.shooterBall.position.copy(Ee(ae.ballRest[0],ae.ballRest[1],fn)),i.add(e.shooterBall)}function Xv(i,t,e){let n=[[106,300],[368.35,300],[112,332],[362.35,332],...ic],s=Ne([[0,0],[3.2,0],[4.6,3],[5.1,7],[5.1,12],[4.2,15.5],[2.4,17],[0,17.3]],16),r=new Ce(4.2*L,4.6*L,6*L,12).translate(0,3*L,0);for(let[o,l]of n){let c=t.bulb.clone(),h=new he;h.add(ft(r,t.darkSteel));let u=new _e(s,c);u.position.y=5*L,h.add(u),i.add(Pe(h,o,l)),e.bulbs.push(c)}let a=[[109,316,24,.9],[365.35,316,24,.9],...ic.map(([o,l])=>[o+(o<Tt.cx?6:-6),l,20,.55])];for(let[o,l,c,h]of a){let u=new ha(bs,0,.4,2);u.position.copy(Ee(o,l,c)),u.userData.base=h*.02,i.add(u),e.gi.push(u)}}function qv(i,t,e,n,s,r){let a=rn,o=a.front-a.back,l=Mu(a.back),c=a.top-l,h=a.inner+a.wallT*2,u=Pi(n.cabinetSide,s),d=new Ze({map:u,roughness:.4,clearcoat:.7,clearcoatRoughness:.2}),f=d.clone();f.map=u.clone(),f.map.wrapS=xn,f.map.repeat.x=-1,f.map.needsUpdate=!0;let g=new cn([[1,(a.top-l)/c],[0,(a.top-l)/c],[0,0],[1,(a.bottom-l)/c]].map(([I,F])=>new ot(I,F))),v=(I,F)=>{let G=new us(g).applyMatrix4(new ue().set(0,0,1,I,0,c,0,l,o,0,0,a.back,0,0,0,1));return F>0&&(G.scale(-1,1,1),G.translate(2*I,0,0)),G.computeVertexNormals(),G};for(let I of[-1,1]){let F=I*(a.inner/2+a.wallT+25e-5),G=I*(a.inner/2);i.add(ft(v(F,I),I>0?f:d)),i.add(ft(v(G,-I),e.cabinetInner));let X=ft(new de(a.wallT+.012,.012,o+.004),e.armour);X.position.set(I*(a.inner/2+a.wallT/2-.002),a.top+.006,(a.front+a.back)/2),i.add(X)}let m=a.top-a.bottom-.04,p=ft(new de(h,m,a.wallT),e.cabinet);p.position.set(0,a.bottom+m/2,a.front-a.wallT/2),i.add(p);let _=(a.top-Mu(a.back))*.08,E=ft(new Ke(h,_),new Ze({color:lc,roughness:.42,clearcoat:.7,clearcoatRoughness:.2}),{cast:!1});E.position.set(0,a.bottom+_/2,a.front+4e-4),i.add(E);let x=ft(new Ke(h,.0045),new me({color:16119544,roughness:.4}),{cast:!1});x.position.set(0,a.bottom+_+.017,a.front+4e-4),i.add(x);let M=a.top-l,S=ft(new de(h,M,a.wallT),e.cabinet);S.position.set(0,l+M/2,a.back+a.wallT/2),i.add(S);let A=ft(new de(h,a.wallT,o/Math.cos(dc)),e.cabinet);A.rotation.x=-dc,A.position.set(0,(a.bottom+l)/2+a.wallT/2,(a.front+a.back)/2),i.add(A);let y=ft(new fc(h+.006,.026,.072,.006),e.trim);y.position.set(0,a.top+.004,a.front-.03),i.add(y);let w=a.bottom+m*.5,R=ft(new fc(.25,.012,.28,.012),e.trim);R.rotation.x=Math.PI/2,R.position.set(0,w-.02,a.front+.004),i.add(R);let P=ft(new de(.21,.24,.004),e.darkSteel);P.position.set(0,w-.02,a.front+.011),i.add(P);for(let I of[-.048,.048]){let F=ft(new de(.06,.085,.006),e.aluminium);F.position.set(I,w+.045,a.front+.014),i.add(F);let G=new _e(new de(.004,.026,.002),new ln({color:oc}));G.position.set(I,w+.055,a.front+.0175),i.add(G);let X=ft(new Ce(.008,.008,.004,16).rotateX(Math.PI/2),e.trim);X.position.set(I,w+.02,a.front+.018),i.add(X)}let U=new Ze({color:wn,emissive:wn,emissiveIntensity:.5,roughness:.25,clearcoat:1,clearcoatRoughness:.05});U.userData.gain=Fa(wn,1)*.32;let B=ft(Ne([[0,0],[15,0],[15,4],[13,9],[0,10]],28).rotateX(Math.PI/2),U);B.position.set(-.205,a.top-.07,a.front),i.add(B),r.startButton=B,i.updateMatrixWorld(!0);for(let[I,F]of[[-1,a.front-.06],[1,a.front-.06],[-1,a.back+.06],[1,a.back+.06]]){let G=new D(I*(h/2-.035),Mu(F),F).applyMatrix4(i.matrixWorld),X=G.y-a.floor,rt=new he;rt.add(ft(new de(.06,X,.06),e.armour)),rt.add(ft(new Ce(.022,.026,.02,16).translate(0,-X/2-.01,0),e.rubber)),rt.position.set(G.x,a.floor+X/2+.02,G.z),t.add(rt)}}var fc=class extends ve{constructor(t,e,n,s){super();let r=new de(t-2*s,e,n-2*s),a=new cn,o=t/2,l=n/2;a.moveTo(-o+s,-l),a.lineTo(o-s,-l),a.quadraticCurveTo(o,-l,o,-l+s),a.lineTo(o,l-s),a.quadraticCurveTo(o,l,o-s,l),a.lineTo(-o+s,l),a.quadraticCurveTo(-o,l,-o,l-s),a.lineTo(-o,-l+s),a.quadraticCurveTo(-o,-l,-o+s,-l);let c=new si(a,{depth:e,bevelEnabled:!1,curveSegments:6});c.rotateX(Math.PI/2),c.translate(0,e/2,0),r.dispose(),this.copy(c)}};function Yv(i,t,e,n,s,r){let a=es,o=new he;r.body.updateMatrixWorld(!0);let l=new D(0,rn.top,rn.back+.02).applyMatrix4(r.body.matrixWorld);o.position.set(0,l.y+.004,l.z+.02),i.add(o),r.backbox=o;let c=ft(new de(a.w,a.h,a.d),t.cabinet);c.position.set(0,a.h/2,-a.d/2),o.add(c);let h=new cn;h.moveTo(-a.w/2,0),h.lineTo(a.w/2,0),h.lineTo(a.w/2,a.h),h.lineTo(-a.w/2,a.h),h.lineTo(-a.w/2,0);let u=new ii,d=a.w/2-.022;u.moveTo(-d,.018),u.lineTo(-d,a.h-.02),u.lineTo(d,a.h-.02),u.lineTo(d,.018),u.lineTo(-d,.018),h.holes.push(u);let f=ft(new si(h,{depth:.012,bevelEnabled:!0,bevelSize:.002,bevelThickness:.002,bevelSegments:2}),t.trim);f.position.z=-.004,o.add(f);let g=a.glassY-.03,v=ft(new de(a.w-.044,g,.006),t.speaker);v.position.set(0,.018+g/2,.001),o.add(v);for(let w of[-1,1]){let R=new he,P=ft(Ne([[0,0],[48,0],[52,1.5],[55,4],[0,4]],40).rotateX(Math.PI/2),t.darkSteel);R.add(P);for(let U=10;U<=44;U+=8.5){let B=new _e(new rr(U*L,1.1*L,6,40),t.speaker);B.position.z=4.2*L,R.add(B)}R.position.set(w*(a.dmdW/2+.072),a.dmdY,.004),o.add(R)}let m=new bi(n);m.colorSpace=Ve,m.anisotropy=s;let p=new _e(new Ke(a.dmdW,a.dmdH),new ln({map:m,toneMapped:!1}));p.position.set(0,a.dmdY,.0052),p.userData.action="dmd",o.add(p);let _=ft(new de(a.dmdW+.024,a.dmdH+.024,.004),t.cabinetInner);_.position.set(0,a.dmdY,.0025),o.add(_),r.dmd={mesh:p,texture:m},r.interactive.push(p);let E=Pi(e.backglass,s),x=a.glassY+a.glassH/2,M=Zv(E,s),S=new _e(new Ke(a.glassW,a.glassH),M.material);S.position.set(0,x,.002),o.add(S),M.mesh=S,r.interactive.push(S);let A=new _e(new Ke(a.glassW,a.glassH),t.glass);A.position.set(0,x,.006),o.add(A),r.backglass={mesh:S,material:M.material,lcd:M,level:0};let y=new He;y.position.set(0,x,.0065),o.add(y),r.heroAnchor=y,r.backglassSize=[a.glassW,a.glassH]}function Zv(i,t){let e={tA:{value:i},tB:{value:i},uSeq:{value:1}},n=new ln({map:i,toneMapped:!1,color:new Ht(0,0,0)});n.onBeforeCompile=r=>{Object.assign(r.uniforms,e),r.fragmentShader=`uniform sampler2D tA;
uniform sampler2D tB;
uniform float uSeq;
`+r.fragmentShader.replace("#include <map_fragment>",`
      {
        float down = 1.0 - vMapUv.y;
        float scan = uSeq * 1.08;
        float shown = smoothstep( down - 0.008, down + 0.008, scan );
        vec3 col = mix( texture2D( tA, vMapUv ).rgb, texture2D( tB, vMapUv ).rgb, shown );
        float live = step( 0.0005, uSeq ) * ( 1.0 - smoothstep( 0.92, 1.08, scan ) );
        col *= 1.0 - 0.18 * live * ( 1.0 - smoothstep( 0.0, 0.25, uSeq ) );
        col += vec3( 0.36, 0.48, 1.0 ) * exp( -pow( ( down - scan ) * 90.0, 2.0 ) ) * 0.7 * live;
        diffuseColor.rgb *= col;
      }`)};let s={material:n,mesh:null,showing:"art",seq:1,pictures:{art:{texture:i,action:null}}};return s.add=(r,a,o)=>{let l=new bi(a);l.colorSpace=Ve,l.anisotropy=t,s.pictures[r]={texture:l,action:o}},s.show=(r,a=!1)=>{let o=s.pictures[r];!o||r===s.showing||(s.seq<1&&s.seq>.5&&(e.tA.value=e.tB.value),e.tB.value=o.texture,s.seq=a?1:0,s.showing=r)},s.update=r=>{s.seq<1&&(s.seq=Math.min(1,s.seq+r/.85)),s.seq>=1&&(e.tA.value=e.tB.value),e.uSeq.value=s.seq,s.mesh&&(s.mesh.userData.action=s.seq>.6?s.pictures[s.showing].action:null)},s}Qt.tonemapping_pars_fragment=Qt.tonemapping_pars_fragment.replace("vec3 CustomToneMapping( vec3 color ) { return color; }",`vec3 CustomToneMapping( vec3 color ) {
    color = NeutralToneMapping( color );
    vec3 s = mix( color * 12.92, 1.055 * pow( color, vec3( 0.41667 ) ) - 0.055, step( 0.0031308, color ) );
    s = max( s + ( fract( 52.9829189 * fract( dot( gl_FragCoord.xy, vec2( 0.06711056, 0.00583715 ) ) ) ) - 0.5 ) / 255.0, 0.0 );
    return mix( s / 12.92, pow( ( s + 0.055 ) / 1.055, vec3( 2.4 ) ), step( 0.04045, s ) );
  }`);var bp="1.35";Qt.lights_fragment_end+=`
#if defined( STANDARD )
	{
		vec3 s = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
		float k = min( 1.0, ${bp} / max( max( max( s.r, s.g ), s.b ), 1e-4 ) );
		reflectedLight.directSpecular *= k;
		reflectedLight.indirectSpecular *= k;
		#ifdef USE_CLEARCOAT
			vec3 c = clearcoatSpecularDirect + clearcoatSpecularIndirect;
			float kc = min( 1.0, ${bp} / max( max( max( c.r, c.g ), c.b ), 1e-4 ) );
			clearcoatSpecularDirect *= kc;
			clearcoatSpecularIndirect *= kc;
		#endif
	}
#endif
`;var Cu=class extends Ia{setSize(t,e){super.setSize(Math.ceil(t/2),Math.ceil(e/2))}_overrideVisibility(){super._overrideVisibility(),this.scene.traverseVisible(t=>{t.isMesh&&(t.userData.noAO||[].concat(t.material).some(e=>e.transparent))&&(t.visible=!1,this._visibilityCache.push(t))})}},Pu=class extends vr{setSize(t,e){super.setSize(Math.ceil(t/2),Math.ceil(e/2))}};function $v(i,t){let e=new tr;e.background=new Ht(.0036,.0042,.0058);let n=new _e(new Ke(40,40).rotateX(-Math.PI/2),new ln({color:new Ht(.016,.017,.021)}));n.position.y=-2,e.add(n);let s=(o,l,c,h,u,d,f)=>{let g=new _e(new Ke(o,l),new ln({color:new Ht(h).multiplyScalar(c),side:un}));g.position.set(u,d,f),g.lookAt(0,0,0),e.add(g)};s(12,12,.22,15856631,0,7,0),s(6,3,3,16185338,0,5,-3.5),s(.7,5,2.4,16777215,-5,2,-1),s(.7,5,2.5,15002367,5,2,-1.5),s(1.6,1.6,5,16775409,2,6,3.5),s(6,2,1.2,15987959,0,1.2,6),s(9,.4,.32,2841087,0,.35,-5);let r=new xr(i),a=r.fromScene(e,.015,.1,50,{size:t});return r.dispose(),e.traverse(o=>{o.geometry?.dispose(),o.material?.dispose()}),a.texture}function Ep(i,t){let e=new Vl({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance",outputBufferType:t.effects?Fe:$e}),n=t.pixelRatio;e.setPixelRatio(n),e.outputColorSpace=Ve,e.toneMapping=ma,e.toneMappingExposure=1.1,e.shadowMap.enabled=t.shadows,e.shadowMap.type=ds,e.shadowMap.autoUpdate=!1;let s=new tr;s.background=new Ht(395018),s.fog=new Gr(395018,3.2,7.5);let r=$v(e,t.low?256:512);s.environment=r,s.environmentIntensity=.6;let a=new Ye(32,1,.02,20),o={};o.key=new cr(16775151,14,0,.45,.7,2),o.key.position.set(.55,2.3,1.1),o.key.target.position.set(0,-.1,0),o.key.castShadow=t.shadows,o.key.shadow.mapSize.set(t.shadowSize,t.shadowSize),Object.assign(o.key.shadow,{bias:-4e-4,normalBias:.003,radius:t.low?2:3,focus:.7}),o.key.shadow.camera.near=1.2,o.key.shadow.camera.far=4.2,s.add(o.key,o.key.target),o.rim=new ua(14542079,1.15),o.rim.position.set(-1.2,1.6,-2.4),s.add(o.rim),o.focus=new cr(16775410,0,0,.42,1,2),s.add(o.focus,o.focus.target);let l=new _e(new Ke(12,12).rotateX(-Math.PI/2),new me({color:3553858,roughness:.85}));l.position.y=rn.floor,l.receiveShadow=t.shadows,s.add(l);let c=null,h=null,u=null;if(t.effects){c=new Cu(s,a,1,1,void 0,{radius:.035,distanceExponent:1.5,thickness:.04,distanceFallOff:1,scale:1.1,samples:12},{lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),c.blendIntensity=.7,h=new Pu(new ot(1,1),.22,.2,1.6),h.highPassUniforms.smoothWidth.value=.5;let S=new Zl(Xf);S.uniforms.offset.value=.85,S.uniforms.darkness.value=1,u=new $l(s,a,{focus:1,aperture:0,maxblur:.005}),e.setEffects([c,u,h,S])}let d=1,f=1;function g(S,A){d=S,f=A,e.setSize(S,A,!1),a.aspect=S/A,a.updateProjectionMatrix()}function v(){e.shadowMap.needsUpdate=!0,e.render(s,a)}let m=16.7,p=0,_=performance.now()+4e3;function E(S){p&&(m+=(Math.min(100,S-p)-m)*.05),p=S,!(S<_||m<21)&&(c&&c.enabled?c.enabled=!1:u&&u.enabled?u.enabled=!1:n>1&&(n=Math.max(1,n-.25),e.setPixelRatio(n),g(d,f)),_=S+2500,m=16.7)}let x=new D;function M(S,A,y){x.copy(a.position).sub(S).setY(0).normalize(),o.focus.position.copy(S).addScaledVector(x,.28).add(new D(0,.62,0)),o.focus.target.position.copy(S),o.focus.intensity=.55*y,u&&(u.uniforms.focus.value=A,u.uniforms.aperture.value=.012*y)}return{renderer:e,scene:s,camera:a,lights:o,ao:c,bloom:h,dof:u,envMap:r,resize:g,render:v,govern:E,focusOn:M,floor:l}}function Tp(){let i=Math.min(innerWidth,innerHeight)<700,t=matchMedia("(pointer: coarse)").matches,e=i||t;return{low:e,effects:!e,pixelRatio:Math.min(devicePixelRatio||1,1.5),shadows:!0,shadowSize:e?1024:2048,playfieldScale:e?2.4:3.6,anisotropy:e?4:8}}var Tr=Math.PI/180,wp=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Jv=i=>i*i*i*(i*(i*6-15)+10),pc=class{constructor(t){this.camera=t,this.poses=[],this.anchors=[],this.holds=[],this.current=null,this.parallax={x:0,y:0,tx:0,ty:0},this.view={width:1,height:1,header:64,layout:"wide",panel:460}}setPoses(t){this.poses=t}measure(t,e,n){let s=scrollY,r=o=>o.getBoundingClientRect().top+s,a=o=>+o.dataset.hold||1;if(n){this.holds=t.map(o=>{let l=o.querySelector(".placard")||o;return Math.min(l.offsetHeight*.75,e*.6)*a(o)}),this.anchors=t.map((o,l)=>{let c=o.querySelector(".placard")||o;return Math.max(0,r(c)-e*.55)+this.holds[l]/2}),this.anchors[0]=0;return}this.anchors=t.map(o=>r(o)+o.offsetHeight/2-e/2),this.anchors[0]=0,this.holds=t.map((o,l)=>{let c=l>0?this.anchors[l]-this.anchors[l-1]:1/0,h=l<t.length-1?this.anchors[l+1]-this.anchors[l]:1/0;return Math.min(Math.min(c,h,o.offsetHeight)*.42*a(o),Math.min(c,h)*.75)})}floatAt(t){let e=this.anchors,n=this.holds,s=e.length;if(!s||t<=e[0]+n[0]/2)return 0;for(let r=0;r<s-1;r++){let a=e[r]+n[r]/2,o=e[r+1]-n[r+1]/2;if(t<a)return r;if(t<=o)return r+Jv(wp((t-a)/Math.max(1,o-a)))}return s-1}holdProgress(t,e){let n=this.anchors[t]-this.holds[t]/2;return wp((e-n)/Math.max(1,this.holds[t]))}setView(t,e,n){this.view.width=t,this.view.height=e,this.view.header=n,this.view.layout=t>=900&&t/e>1.05?"wide":"tall",this.view.panel=Math.min(470,t*.36)}frame(t){let{width:e,height:n,header:s,layout:r}=this.view,a=s/n;if(t.side==="center")return{cx:.5,cy:.5,fx:.9,fy:.9};if(r==="wide"){if(t.side==="hero")return{cx:.5,cy:a/2+.5,fx:.96,fy:(1-a)*.97};let o=Math.min(.42,(Math.min(560,e*.4)+80)/e);return{cx:t.side==="left"?o+(1-o)/2:(1-o)/2,cy:a/2+.5,fx:(1-o)*.98,fy:(1-a)*.98}}return t.side==="hero"?{cx:.5,cy:a+.24,fx:.98,fy:.46}:{cx:.5,cy:a+.21,fx:.98,fy:.42}}resolve(t){this.view.layout==="tall"&&t.tall&&(t={...t,...t.tall});let e=this.frame(t),n=(t.fov||32)*Tr,s=this.view.width/this.view.height,r=Math.tan(n/2),a=Math.max(t.fit[1]/(2*r*e.fy),t.fit[0]/(2*r*s*e.fx))*(t.zoom||1);return{target:t.target.clone(),az:t.az*Tr,el:t.el*Tr,d:a,fov:t.fov||32,cx:e.cx,cy:e.cy}}blend(t,e,n,s=0){return{target:t.target.clone().lerp(e.target,n),az:t.az+(e.az-t.az)*n,el:t.el+(e.el-t.el)*n+Math.sin(Math.PI*n)*s*Tr,d:Math.exp(Math.log(t.d)+(Math.log(e.d)-Math.log(t.d))*n),fov:t.fov+(e.fov-t.fov)*n,cx:t.cx+(e.cx-t.cx)*n,cy:t.cy+(e.cy-t.cy)*n}}at(t){let e=this.poses.length,n=Math.min(e-1,Math.floor(t)),s=t-n,r=this.resolve(this.poses[n]);if(s<=0||n>=e-1)return r;let a=this.resolve(this.poses[n+1]);return this.blend(r,a,s,this.poses[n+1].lift||0)}pointer(t,e){this.parallax.tx=t,this.parallax.ty=e}apply(t,e,{damping:n=9,instant:s=!1}={}){let r=s?1:1-Math.exp(-e*n);(!this.current||s)&&(this.current={...t,target:t.target.clone()});let a=this.current;a.target.lerp(t.target,r),a.az+=(t.az-a.az)*r,a.el+=(t.el-a.el)*r,a.d+=(t.d-a.d)*r,a.fov+=(t.fov-a.fov)*r,a.cx+=(t.cx-a.cx)*r,a.cy+=(t.cy-a.cy)*r;let o=this.parallax,l=s?1:1-Math.exp(-e*3);o.x+=(o.tx-o.x)*l,o.y+=(o.ty-o.y)*l;let c=a.az+o.x*1.6*Tr,h=a.el-o.y*1*Tr,u=this.camera;u.position.set(a.target.x+Math.sin(c)*Math.cos(h)*a.d,a.target.y+Math.sin(h)*a.d,a.target.z+Math.cos(c)*Math.cos(h)*a.d),u.lookAt(a.target),u.fov=a.fov;let{width:d,height:f}=this.view;u.setViewOffset(d,f,d*(.5-a.cx),f*(.5-a.cy),d,f),u.updateProjectionMatrix()}};var mi=Math.PI/180,Kv=24,Ap=40,jv=1e3,Rp=60*mi,Cp=Object.freeze({rubber:{e:.9,falloff:.1,f:.9,scatter:1},band:{e:.85,falloff:.13,f:.9,scatter:0},sling:{e:.85,falloff:0,f:.8,scatter:1},metal:{e:.4,falloff:0,f:.2,scatter:0},pop:{e:.4,falloff:0,f:.2,scatter:2},plastic:{e:.42,falloff:0,f:.3,scatter:0},drop:{e:.625,falloff:.05,f:.3,scatter:1},ramp:{e:.5,falloff:.2,f:.15,scatter:0},wire:{e:.4,falloff:0,f:.15,scatter:0},flipper:{e:.88,falloff:.15,f:.9,scatter:0}}),wr=(i,t,e)=>i<t?t:i>e?e:i;function Iu(i,t){let e=(typeof i.mat=="string"?Cp[i.mat]:i.mat)||Cp[t];return{e:i.e??e.e,falloff:i.falloff??e.falloff,f:i.f??e.f,scatter:i.scatter??e.scatter??0}}function Qv(i){let t=i.seed=i.seed+1831565813>>>0;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}var ty=(i,t)=>i.layer==="*"||i.layer===t;function ey(i,t,e){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){let[a,o]=i[s],[l,c]=i[r];o>e!=c>e&&t<(l-a)*(e-o)/(c-o)+a&&(n=!n)}return n}function ny(i,t,e,n){let s=i.len2>0?wr(((t-i.ax)*i.ex+(e-i.ay)*i.ey)/i.len2,0,1):0,r=i.ax+i.ex*s,a=i.ay+i.ey*s,o=t-r,l=e-a,c=Math.hypot(o,l),h=n+i.r;if(c>=h)return null;let u,d;if(c>1e-9)u=o/c,d=l/c;else{let f=Math.sqrt(i.len2)||1;u=-i.ey/f,d=i.ex/f}return{nx:u,ny:d,depth:h-c,px:r+u*i.r,py:a+d*i.r,t:s}}function iy(i,t,e,n){let s=t-i.x,r=e-i.y,a=Math.hypot(s,r),o=n+i.r;if(a>=o)return null;let l=a>1e-9?s/a:0,c=a>1e-9?r/a:1;return{nx:l,ny:c,depth:o-a,px:i.x+l*i.r,py:i.y+c*i.r}}var Lu=class{constructor(t){this.p=t,Object.assign(this,{x:0,y:0,z:t.R,vx:0,vy:0,vz:0,wx:0,wy:0,wz:0,layer:0,active:!1,serial:0}),this.q=[0,0,0,1],this.view={x:0,y:0,z:t.R},this.ox=0,this.oy=0,this.oz=t.R}get spin(){return{x:this.wx,y:this.wy,z:this.wz}}get speed(){return Math.hypot(this.vx,this.vy)}place(t,e,n=0,s=0,{layer:r=0}={}){let a=this.p,o=a.R;Object.assign(this,{x:t,y:e,vx:n,vy:s,vz:0,wx:-s/o,wy:n/o,wz:0,layer:r,active:!0}),this.serial++;let l=r!==0?a.trackOf(r):null;l?(l.cursor=-1,this.z=a.locate(l,t,e).z):this.z=o,this.ox=t,this.oy=e,this.oz=this.z,Object.assign(this.view,{x:t,y:e,z:this.z});for(let c of a.triggers)c.inside=!1;for(let c of a.saucers)c.holding=!1;return this}remove(){this.active=!1,this.serial++;for(let t of this.p.triggers)t.inside=!1;for(let t of this.p.saucers)t.holding=!1}},mc=class{constructor(t){Object.assign(this,{baseR:11.28,tipR:6.64,length:62.8,strokeTime:.028,hold:.375,holdAngle:6,ret:.055,eosBounce:.2,restBounce:.1,inertia:2200},t),this.id=t.id||"flipper-"+t.side,this.kind="flipper",this.dir=Math.sign(t.up-t.rest)||1,this.restRad=t.rest*mi,this.stroke=Math.abs(t.up-t.rest)*mi,this.holdAngle*=mi,this.alpha=2*this.stroke/this.strokeTime**2,this.mat=Iu(t,"flipper");let e=(this.baseR-this.tipR)/this.length;this.cotPhi=e/Math.sqrt(1-e*e),this.a=0,this.w=0,this.oa=0,this.on=!1,this.queue=[]}get theta(){return this.restRad+this.dir*this.a}get omega(){return this.w*this.dir}surfaceSpeed(){return Math.abs(this.w)*(this.length+this.tipR)}update(t){let e=this.on?this.alpha*(this.a>this.stroke-this.holdAngle?this.hold:1):-this.alpha*this.ret;this.w+=e*t,this.a+=this.w*t,this.a>=this.stroke?(this.a=this.stroke,this.w>0&&(this.w=this.w>Rp?-this.eosBounce*this.w:0)):this.a<=0&&(this.a=0,this.w<0&&(this.w=this.w<-Rp?-this.restBounce*this.w:0))}test(t,e,n){let s=this.theta,r=Math.cos(s),a=Math.sin(s),o=t-this.x,l=e-this.y,c=o*r+l*a,h=-o*a+l*r,u=Math.abs(h);if(c<-this.baseR-n||c>this.length+this.tipR+n||u>this.baseR+n)return null;let d=wr(c-u*this.cotPhi,0,this.length),f=this.baseR+(this.tipR-this.baseR)*d/this.length,g=c-d,v=Math.hypot(g,u);if(v>=f+n)return null;let m=h<0?-1:1,p=v>1e-9?g/v:0,_=v>1e-9?u/v*m:m,E=p*r-_*a,x=p*a+_*r,M=this.x+d*r+E*f,S=this.y+d*a+x*f,A=this.omega;return{nx:E,ny:x,depth:f+n-v,px:M,py:S,u:d,svx:-A*(S-this.y),svy:A*(M-this.x),body:this}}locked(t){let e=-Math.sign(t)*this.dir;return e<0&&this.a<=1e-9||e>0&&this.a>=this.stroke-1e-9}push(t){this.w+=t*this.dir}},gc=class{constructor(t={}){let e={pitch:6.5,g:9810,radius:13.5,mass:.0806,step:.001,floorFriction:.2,rolling:.0035,spinDecay:1.5,hitMin:50,cell:32,seed:1,...t};this.o=e,this.seed=e.seed>>>0||1,this.R=e.radius,this.mass=e.mass,this.dt=e.step,this.gy=-e.g*Math.sin(e.pitch*mi),this.gN=e.g*Math.cos(e.pitch*mi),this.maxTravel=.2*this.R,this.bounds=e.bounds||null,this.colliders=[],this.flippers=[],this.saucers=[],this.triggers=[],this.tracks=[],this.handlers={},this.muted=!1,this.grid=null,this.steps=0,this.time=0,this.acc=0,this.ball=new Lu(this)}collider(t,e,n){return Object.assign(t,{id:e.id??null,kind:e.kind||t.kind,layer:e.layer??0,enabled:!0,mat:Iu(e,n),lastKick:-1e9,solid:!0}),this.colliders.push(t),this.grid=null,t.id}addWall(t,e,n,s,r={}){let a=r.r||0,o=n-t,l=s-e,c={type:"seg",kind:"wall",ax:t,ay:e,bx:n,by:s,r:a,ex:o,ey:l,len2:o*o+l*l,box:[Math.min(t,n)-a,Math.min(e,s)-a,Math.max(t,n)+a,Math.max(e,s)+a]};if(r.oneWay){let h=Math.hypot(...r.oneWay);c.oneWay=[r.oneWay[0]/h,r.oneWay[1]/h]}return r.kick&&Object.assign(c,{kick:r.kick,minSpeed:r.minSpeed??120,recycle:r.recycle??.06,normal:r.normal}),this.collider(c,r,"metal")}addCircle(t,e,n,s={}){let r={type:"circle",kind:s.kick?"pop":"post",x:t,y:e,r:n,box:[t-n,e-n,t+n,e+n]};return s.kick&&Object.assign(r,{kick:s.kick,minSpeed:s.minSpeed??50,recycle:s.recycle??.03}),this.collider(r,s,s.kick?"pop":"rubber")}addKicker(t,e,n,s,r={}){let a=Math.hypot(n-t,s-e),o=r.normal||[-(s-e)/a,(n-t)/a];return r.away&&(r.away[0]-t)*o[0]+(r.away[1]-e)*o[1]>0&&(o=[-o[0],-o[1]]),this.addWall(t,e,n,s,{kind:"sling",mat:"sling",kick:2200,minSpeed:120,recycle:.06,...r,normal:o})}addFlipper(t){let e=new mc(t);return this.flippers.push(e),e.id}addSaucer(t,e,n={}){let s={id:n.id||"saucer"+this.saucers.length,kind:"saucer",x:t,y:e,reach:n.reach??10.5,maxSpeed:n.maxSpeed??900,hold:n.hold??1,kick:n.kick??1600,angle:(n.angle??-90)*mi,sink:n.sink??5,rearm:n.rearm??.3,holding:!1,releaseAt:0,armedAt:0,enabled:!0};return this.saucers.push(s),s.id}addTrigger(t,e,n={}){let s={id:e,kind:n.kind||(n.drain?"drain":"trigger"),layer:n.layer??0,drain:!!n.drain,enabled:!0,inside:!1};if(Array.isArray(t)){s.poly=t.map(o=>[o[0],o[1]]);let r=s.poly.map(o=>o[0]),a=s.poly.map(o=>o[1]);s.box=[Math.min(...r),Math.min(...a),Math.max(...r),Math.max(...a)]}else Object.assign(s,{x:t.x,y:t.y,r:t.r}),s.box=[t.x-t.r,t.y-t.r,t.x+t.r,t.y+t.r];return this.triggers.push(s),e}addTrack(t,e={}){let n=e.id||"track"+this.tracks.length,s={id:n,layer:e.layer??n,kind:e.kind||"ramp",mat:Iu(e,"ramp"),entry:e.entry||[0,0],exit:e.exit??1/0,exitDamp:e.exitDamp??1,cursor:-1};s.pts=t.map(c=>({x:c[0],y:c[1],z:c[2],hw:c[3]??21})),s.seg=[];let r=0;for(let c=0;c+1<s.pts.length;c++){let h=s.pts[c],u=s.pts[c+1],d=u.x-h.x,f=u.y-h.y,g=Math.hypot(d,f)||1e-6;s.seg.push({a:h,b:u,ex:d,ey:f,len:g,len2:g*g,s:r,tx:d/g,ty:f/g,slope:(u.z-h.z)/g}),r+=g}s.length=r;let a=s.seg.findIndex(c=>c.s+c.len>=s.entry[1]);s.entrySegs=a<0?s.seg.length:a+1;let o=s.pts.slice(0,s.entrySegs+1),l=Math.max(...o.map(c=>c.hw))+40;return s.entryBox=[Math.min(...o.map(c=>c.x))-l,Math.min(...o.map(c=>c.y))-l,Math.max(...o.map(c=>c.x))+l,Math.max(...o.map(c=>c.y))+l],s.wall={test:(c,h,u)=>this.trackWall(s,c,h,u),mat:s.mat,id:n,kind:s.kind},this.tracks.push(s),n}setEnabled(t,e){for(let n of this.colliders)n.id===t&&(n.enabled=!!e);for(let n of this.triggers)n.id===t&&(n.enabled=!!e)}isEnabled(t){let e=this.colliders.find(n=>n.id===t)||this.triggers.find(n=>n.id===t);return e?e.enabled:!1}flipper(t){return this.flippers.find(e=>e.id===t)||this.flippers.find(e=>e.side===t)}flippersFor(t){let e=this.flippers.filter(n=>n.side===t);return e.length?e:this.flippers.filter(n=>n.id===t)}setFlipper(t,e,n=0){for(let s of this.flippersFor(t))n>0?(s.queue.push({at:this.time+n,on:!!e}),s.queue.sort((r,a)=>r.at-a.at)):(s.queue.length=0,s.on=!!e)}flipperAngle(t){let e=this.flipper(t);if(!e)return 0;let n=this.acc/this.dt,s=e.oa+(e.a-e.oa)*n;return e.rest+e.dir*s/mi}on(t,e){var n;return((n=this.handlers)[t]||(n[t]=[])).push(e),()=>{this.handlers[t]=this.handlers[t].filter(s=>s!==e)}}emit(t,e){if(this.muted)return;let n=this.handlers[t];if(n)for(let s of n)s(e)}step(t){for(this.acc+=wr(t||0,0,.1);this.acc>=this.dt;)this.acc-=this.dt,this.fixedStep();let e=this.ball,n=this.acc/this.dt;e.view.x=e.ox+(e.x-e.ox)*n,e.view.y=e.oy+(e.y-e.oy)*n,e.view.z=e.oz+(e.z-e.oz)*n}run(t){for(let e=Math.round(t/this.dt);e>0;e--)this.fixedStep()}fixedStep(){this.grid||this.buildGrid();let t=this.ball;for(let r of this.flippers){for(;r.queue.length&&r.queue[0].at<=this.time+1e-9;)r.on=r.queue.shift().on;r.oa=r.a}t.ox=t.x,t.oy=t.y,t.oz=t.z;let e=t.active?Math.hypot(t.vx,t.vy):0;for(let r of this.flippers)e=Math.max(e,r.surfaceSpeed());let n=Math.min(Kv,Math.max(1,Math.ceil(e*this.dt/this.maxTravel))),s=this.dt/n;for(let r=0;r<n;r++)this.substep(s,this.time+r*s);this.steps++,this.time=this.steps*this.dt}substep(t,e){for(let f of this.flippers)f.update(t);let n=this.ball;if(!n.active||this.saucers.length&&this.saucer(n,e))return;let s=n.serial,r=this.R,a=n.layer!==0?this.trackOf(n.layer):null,o=this.gy,l=0;if(a){let f=this.locate(a,n.x,n.y),g=-this.gN*f.slope/(1+f.slope*f.slope);l+=g*f.tx,o+=g*f.ty}if(n.vx+=l*t,n.vy+=o*t,(a||n.z<=r+.5)&&this.roll(n,t),n.x+=n.vx*t,n.y+=n.vy*t,this.turn(n,t),this.collide(n,e,a),n.serial!==s||(this.layers(n,t,a),this.sense(n),n.serial!==s||!this.bounds))return;let[c,h,u,d]=this.bounds;(n.x<c||n.x>u||n.y<h||n.y>d)&&(n.remove(),this.emit("drain",{id:"out"}))}roll(t,e){this.floorImpulse(t,this.o.floorFriction*this.gN*e);let n=Math.hypot(t.vx,t.vy);if(n>1e-9){let s=(n-Math.min(n,this.o.rolling*this.gN*e))/n;t.vx*=s,t.vy*=s,t.wx*=s,t.wy*=s}t.wz*=Math.exp(-this.o.spinDecay*e)}floorImpulse(t,e){let n=this.R,s=t.vx-t.wy*n,r=t.vy+t.wx*n,a=Math.hypot(s,r);if(a<=1e-9)return;let o=Math.min(a*2/7,e),l=-o*s/a,c=-o*r/a;t.vx+=l,t.vy+=c,t.wx+=c*2.5/n,t.wy-=l*2.5/n}turn(t,e){let[n,s,r,a]=t.q,o=t.wx*e/2,l=t.wy*e/2,c=t.wz*e/2,h=n+o*a+l*r-c*s,u=s+l*a+c*n-o*r,d=r+c*a+o*s-l*n,f=a-o*n-l*s-c*r,g=Math.hypot(h,u,d,f)||1;t.q[0]=h/g,t.q[1]=u/g,t.q[2]=d/g,t.q[3]=f/g}testCollider(t,e,n,s){let r=t.type==="seg"?ny(t,e,n,s):iy(t,e,n,s);if(t.oneWay){if(!r)return t.solid=(e-t.ax)*t.oneWay[0]+(n-t.ay)*t.oneWay[1]>0,null;if(!t.solid)return null}return r}collide(t,e,n){let s=this.R,r=[];for(let a of this.cellAt(t.x,t.y)){if(!a.enabled||!ty(a,t.layer))continue;let o=this.testCollider(a,t.x,t.y,s);o&&(o.src=a,r.push(o))}if(t.layer===0)for(let a of this.flippers){let o=a.test(t.x,t.y,s);o&&(o.src=a,r.push(o))}if(n){let a=n.wall.test(t.x,t.y,s);a&&(a.src=n.wall,r.push(a))}if(r.length){r.length>1&&r.sort((a,o)=>o.depth-a.depth);for(let a=0;a<r.length;a++){let o=r[a].src,l=a===0?r[0]:o instanceof mc?o.test(t.x,t.y,s):o.type?this.testCollider(o,t.x,t.y,s):o.test(t.x,t.y,s);if(!l)continue;let c=this.resolve(t,l,o.mat);c<=0||(o.kick&&this.kick(t,o,l,c,e),c>=this.o.hitMin&&this.emit("hit",{id:o.id,kind:o.kind,speed:c,x:l.px,y:l.py,nx:l.nx,ny:l.ny}))}}}resolve(t,e,n){let s=this.R,r=e.nx,a=e.ny;t.x+=r*e.depth,t.y+=a*e.depth;let o=t.vx+t.wz*s*a-(e.svx||0),l=t.vy-t.wz*s*r-(e.svy||0),c=o*r+l*a;if(c>=0)return 0;let h=-c,u=h<Ap?0:n.e/(1+n.falloff*h/jv),d=e.body,f=1,g=0;d&&(g=(e.px-d.x)*a-(e.py-d.y)*r,d.locked(g)?g=0:f+=this.mass*g*g/d.inertia);let v=(1+u)*h/f;t.vx+=v*r,t.vy+=v*a,g&&d.push(-v*this.mass*g/d.inertia),o-=c*r,l-=c*a;let m=s*(t.wy*r-t.wx*a),p=Math.hypot(o,l,m);if(p>1e-9&&n.f>0){let _=Math.min(p/3.5,n.f*v),E=-_*o/p,x=-_*l/p,M=-_*m/p;t.vx+=E,t.vy+=x,t.wz+=(a*E-r*x)/(.4*s),t.wx-=a*M/(.4*s),t.wy+=r*M/(.4*s),M&&t.z<=s+.5&&this.floorImpulse(t,this.o.floorFriction*1.25*Math.abs(M))}return n.scatter&&h>4*Ap&&this.scatter(t,n.scatter,e.svx||0,e.svy||0),h}scatter(t,e,n=0,s=0){let r=(Qv(this)*2-1)*e*mi,a=Math.cos(r),o=Math.sin(r),l=t.vx-n,c=t.vy-s;t.vx=n+l*a-c*o,t.vy=s+l*o+c*a}kick(t,e,n,s,r){if(s<e.minSpeed||r-e.lastKick<e.recycle)return;let a=n.nx,o=n.ny;if(e.normal){if(n.t<.08||n.t>.92||a*e.normal[0]+o*e.normal[1]<.5)return;[a,o]=e.normal}let l=t.vx*a+t.vy*o;l<e.kick&&(t.vx+=(e.kick-l)*a,t.vy+=(e.kick-l)*o),e.mat.scatter&&this.scatter(t,e.mat.scatter),e.lastKick=r,this.emit("kick",{id:e.id,kind:e.kind,speed:Math.hypot(t.vx,t.vy),x:n.px,y:n.py,nx:a,ny:o})}trackOf(t){return this.tracks.find(e=>e.layer===t)||null}locate(t,e,n,s){let r=t.seg,a=s??r.length,o=t.cursor<0||s!==void 0,l=o?0:Math.max(0,t.cursor-6),c=o?a-1:Math.min(a-1,t.cursor+6),h=1/0,u=0;for(let _=l;_<=c;_++){let E=r[_],x=wr(((e-E.a.x)*E.ex+(n-E.a.y)*E.ey)/E.len2,0,1),M=(e-E.a.x-E.ex*x)**2+(n-E.a.y-E.ey*x)**2;M<h&&(h=M,u=_)}s===void 0&&(t.cursor=u);let d=r[u],f=((e-d.a.x)*d.ex+(n-d.a.y)*d.ey)/d.len2,g=u===0&&f<0||u===r.length-1&&f>1?f:wr(f,0,1),v=wr(g,0,1),m=d.a.x+d.ex*v,p=d.a.y+d.ey*v;return{s:d.s+g*d.len,z:d.a.z+(d.b.z-d.a.z)*v,hw:d.a.hw+(d.b.hw-d.a.hw)*v,tx:d.tx,ty:d.ty,slope:d.slope,qx:m,qy:p,d:Math.hypot(e-m,n-p)}}trackWall(t,e,n,s){let r=this.locate(t,e,n),a=r.hw-s;if(r.d<=a||r.d<1e-9)return null;let o=(r.qx-e)/r.d,l=(r.qy-n)/r.d;return{nx:o,ny:l,depth:r.d-a,px:e-o*s,py:n-l*s}}layers(t,e,n){let s=this.R;if(n){let r=this.locate(n,t.x,t.y);if(r.s<n.entry[0]||r.s>n.exit)t.layer=0,r.s>n.exit&&(t.vx*=n.exitDamp,t.vy*=n.exitDamp,t.wx*=n.exitDamp,t.wy*=n.exitDamp),this.emit("exit",{id:n.id,kind:"track",end:r.s>n.exit?"end":"mouth",x:t.x,y:t.y,vx:t.vx,vy:t.vy,speed:t.speed});else{t.vz=(r.z-t.z)/e,t.z=r.z;return}}else if(t.layer===0&&t.z<=s+.5)for(let r of this.tracks){let a=r.entryBox;if(r.entry[1]<=r.entry[0]||t.x<a[0]||t.x>a[2]||t.y<a[1]||t.y>a[3])continue;let o=this.locate(r,t.x,t.y,r.entrySegs);if(o.s>r.entry[0]&&o.s<r.entry[1]&&o.d<o.hw){t.layer=r.layer,r.cursor=-1,t.z=this.locate(r,t.x,t.y).z,this.emit("enter",{id:r.id,kind:"track",x:t.x,y:t.y,vx:t.vx,vy:t.vy,speed:t.speed});return}}(t.z>s||t.vz)&&(t.vz-=this.gN*e,t.z+=t.vz*e,t.z<=s&&(t.z=s,t.vz=t.vz<-300?-.3*t.vz:0))}saucer(t,e){for(let n of this.saucers){if(n.holding)return e<n.releaseAt?(t.vx=t.vy=t.wx=t.wy=t.wz=0,!0):(n.holding=!1,n.armedAt=e+n.rearm,t.z=this.R,t.vx=Math.cos(n.angle)*n.kick,t.vy=Math.sin(n.angle)*n.kick,t.wx=-t.vy/this.R,t.wy=t.vx/this.R,this.emit("kick",{id:n.id,kind:"saucer",speed:n.kick,x:n.x,y:n.y,nx:Math.cos(n.angle),ny:Math.sin(n.angle)}),!1);if(!(!n.enabled||e<n.armedAt||t.layer!==0||t.z>this.R+.5)&&!(Math.hypot(t.x-n.x,t.y-n.y)>n.reach||Math.hypot(t.vx,t.vy)>n.maxSpeed))return n.holding=!0,n.releaseAt=e+n.hold,Object.assign(t,{x:n.x,y:n.y,z:this.R-n.sink,vx:0,vy:0,vz:0,wx:0,wy:0,wz:0}),this.emit("enter",{id:n.id,kind:"saucer",x:n.x,y:n.y,vx:0,vy:0,speed:0}),!0}return!1}get held(){return this.saucers.find(t=>t.holding)||null}sense(t){let e=t.serial;for(let n of this.triggers){let[s,r,a,o]=n.box,l=t.active&&n.enabled&&(n.layer==="*"||n.layer===t.layer)&&t.x>=s&&t.x<=a&&t.y>=r&&t.y<=o&&(n.poly?ey(n.poly,t.x,t.y):(t.x-n.x)**2+(t.y-n.y)**2<n.r*n.r);if(l!==n.inside){if(n.inside=l,this.emit(l?"enter":"exit",{id:n.id,kind:n.kind,x:t.x,y:t.y,vx:t.vx,vy:t.vy,speed:t.speed}),t.serial!==e)return;if(l&&n.drain){t.remove(),this.emit("drain",{id:n.id});return}}}}buildGrid(){let t=this.o.cell,e=this.R+4,n=1/0,s=1/0,r=-1/0,a=-1/0;for(let o of this.colliders)n=Math.min(n,o.box[0]),s=Math.min(s,o.box[1]),r=Math.max(r,o.box[2]),a=Math.max(a,o.box[3]);this.colliders.length||(n=s=0,r=a=t),this.gx0=Math.floor((n-e)/t),this.gy0=Math.floor((s-e)/t),this.gnx=Math.floor((r+e)/t)-this.gx0+1,this.gny=Math.floor((a+e)/t)-this.gy0+1,this.grid=Array.from({length:this.gnx*this.gny},()=>[]);for(let o of this.colliders){let l=Math.floor((o.box[0]-e)/t)-this.gx0,c=Math.floor((o.box[2]+e)/t)-this.gx0,h=Math.floor((o.box[1]-e)/t)-this.gy0,u=Math.floor((o.box[3]+e)/t)-this.gy0;for(let d=l;d<=c;d++)for(let f=h;f<=u;f++)this.grid[f*this.gnx+d].push(o)}}cellAt(t,e){let n=Math.floor(t/this.o.cell)-this.gx0,s=Math.floor(e/this.o.cell)-this.gy0;return n<0||s<0||n>=this.gnx||s>=this.gny?[]:this.grid[s*this.gnx+n]}saveState(){let t=this.ball;return{steps:this.steps,acc:this.acc,seed:this.seed,ball:[t.x,t.y,t.z,t.vx,t.vy,t.vz,t.wx,t.wy,t.wz,t.layer,t.active,t.serial,t.ox,t.oy,t.oz,...t.q],flippers:this.flippers.map(e=>[e.a,e.w,e.oa,e.on,e.queue.map(n=>({...n}))]),colliders:this.colliders.map(e=>[e.enabled,e.lastKick,e.solid]),triggers:this.triggers.map(e=>[e.enabled,e.inside]),tracks:this.tracks.map(e=>e.cursor),saucers:this.saucers.map(e=>[e.holding,e.releaseAt,e.armedAt])}}loadState(t){let e=this.ball;this.steps=t.steps,this.time=t.steps*this.dt,this.acc=t.acc,this.seed=t.seed,[e.x,e.y,e.z,e.vx,e.vy,e.vz,e.wx,e.wy,e.wz,e.layer,e.active,e.serial,e.ox,e.oy,e.oz]=t.ball,e.q=t.ball.slice(15,19),t.flippers.forEach(([n,s,r,a,o],l)=>Object.assign(this.flippers[l],{a:n,w:s,oa:r,on:a,queue:o.map(c=>({...c}))})),t.colliders.forEach(([n,s,r],a)=>Object.assign(this.colliders[a],{enabled:n,lastKick:s,solid:r})),t.triggers.forEach(([n,s],r)=>Object.assign(this.triggers[r],{enabled:n,inside:s})),t.tracks.forEach((n,s)=>{this.tracks[s].cursor=n}),(t.saucers||[]).forEach(([n,s,r],a)=>Object.assign(this.saucers[a],{holding:n,releaseAt:s,armedAt:r}))}aimFlip(t,e,n,{horizon:s=1.2,coarse:r=.008,follow:a=.6,hold:o=.3,reach:l=12,minArrive:c=0}={}){let h=this.flipper(t),u=this.ball;if(!h||!u.active||u.layer!==0||this.held)return null;let d=this.saveState(),f=this.muted;this.muted=!0;let g=this.flippers.indexOf(h),v=Math.max(1,Math.round(r/this.dt)),m=this.flippersFor(t).map(M=>this.flippers.indexOf(M)),p=()=>u.active&&u.layer===0&&!!this.flippers[g].test(u.x,u.y,this.R+l);for(let M of m)this.flippers[M].queue=[],this.flippers[M].on=!1;let _=[];for(let M=0;M*v*this.dt<=s+1e-9&&u.active;M++)p()&&_.push({st:this.saveState(),delay:M*v*this.dt,k:M}),this.run(v*this.dt);let E=(M,S)=>{this.loadState(M);let A=this.flippers[g],y=Math.cos(A.theta),w=Math.sin(A.theta),R={delay:S,miss:Math.hypot(u.x-e,u.y-n),arrive:u.speed,speed:0,angle:0,x:u.x,y:u.y,u:(u.x-A.x)*y+(u.y-A.y)*w};for(let U of m)this.flippers[U].queue=[{at:this.time+o,on:!1}],this.flippers[U].on=!0;let P=!1;for(let U=Math.round(a/this.dt);U>0&&u.active;U--){this.fixedStep();let B=Math.hypot(u.x-e,u.y-n);if(B<R.miss)R.miss=B,R.arrive=u.speed;else if(P&&B>R.miss+40)break;!P&&Math.hypot(u.x-A.x,u.y-A.y)>A.length+A.tipR+this.R+12&&(P=!0,R.speed=u.speed,R.angle=Math.atan2(u.vy,u.vx)/mi)}return R.score=R.miss+Math.max(0,c-R.arrive)*.1,R},x=null;for(let M of _){let S=E(M.st,M.delay);(!x||S.score<x.score)&&(x=S,x.k=M.k)}if(x&&v>1)for(let M of _.filter(S=>S.k===x.k-1||S.k===x.k)){let S=M.st;for(let A=1;A<v&&(this.loadState(S),this.fixedStep(),!!p());A++){S=this.saveState();let y=E(S,M.delay+A*this.dt);y.score<x.score&&(x={...y,k:x.k})}}return this.loadState(d),this.muted=f,x&&(delete x.k,delete x.score),x}};var za=Math.PI/180,_c=1.6,sy=7.13+2.38,Du=4.76+6.35,ry=6.5,ay=30,Nu=[9,21],vc={pop:1400,sling:2200};function Uu(i,t,e,n,s,r=3){let a=Math.max(1,Math.ceil(Math.abs(s-n)/r));return Array.from({length:a+1},(o,l)=>{let c=(n+(s-n)*l/a)*za;return[i+Math.cos(c)*e,t+Math.sin(c)*e]})}function oy(i,t){return i.map((e,n)=>{let s=i[Math.max(0,n-1)],r=i[Math.min(i.length-1,n+1)],a=r[0]-s[0],o=r[1]-s[1],l=Math.hypot(a,o)||1;return[e[0]-o/l*t,e[1]+a/l*t]})}function Rs(i,t,e=0,n={}){let{closed:s,...r}=n,a=s?[...t,t[0]]:t;for(let o=0;o+1<a.length;o++){let[l,c]=a[o],[h,u]=a[o+1];Math.hypot(h-l,u-c)<1e-6||i.addWall(l,c,h,u,{r:e/2,...r})}return r.id??null}function ly(i,t,e,n=4,s={}){return Rs(i,oy(t,-e*n),2*n,s)}var xc=(i,t,e,n)=>[[i-e,t-n],[i+e,t-n],[i+e,t+n],[i-e,t+n]];function cy(i,t){let{ORBIT_GUIDES:e=[],ORBIT_WEDGES:n=[],ORBIT_POSTS:s=[],ORBIT_POST:r={d:11},ORBIT_ROLLOVERS:a=[]}=t;for(let l of e)Rs(i,l.line,_c,{id:"orbit-"+l.side,kind:"guide",mat:"metal"});for(let l of n)Rs(i,l.line,_c,{id:"wedge-"+l.side,kind:"guide",mat:"metal"});return s.forEach(([l,c],h)=>i.addCircle(l,c,r.d/2,{id:"orbit-post"+h,kind:"post",mat:"rubber"})),{rollovers:a.map((l,c)=>i.addTrigger(xc(l.x,l.y,...Nu),"orbit"+c,{kind:"orbit"}))}}function Pp(i){let t=0;return i.map((e,n)=>(n&&(t+=Math.hypot(e[0]-i[n-1][0],e[1]-i[n-1][1])),{p:[e[0],e[1],e[2]],w:e[3],s2:t}))}function Fu(i,t){let e=1;for(;e<i.length-1&&i[e].s2<t;)e++;let n=i[e-1],s=i[e],r=s.s2-n.s2||1,a=(t-n.s2)/r;return{x:n.p[0]+(s.p[0]-n.p[0])*a,y:n.p[1]+(s.p[1]-n.p[1])*a,tx:(s.p[0]-n.p[0])/r,ty:(s.p[1]-n.p[1])/r}}function Ip(i,t,e,n){let s=Fu(i,t-e),r=Fu(i,t+e);return[[s.x-s.ty*n,s.y+s.tx*n],[r.x-r.ty*n,r.y+r.tx*n],[r.x+r.ty*n,r.y-r.tx*n],[s.x+s.ty*n,s.y-s.tx*n]]}function hy(i,t){let e=i.dropRadius,n=i.rail,s=r=>r*r*(3-2*r);for(let r=0;r<=i.spread;r+=.25)if(n+(e-n)*s(r/i.spread)>=t+i.rod-.5)return e+i.spread-r;return e}function uy(i,t,e){let{RAMP:n,WIRE:s,BALL_R:r}=t,a=Pp(e.profile),o=Pp(e.wire),l=a.at(-1).s2,c=r+2.6,h=40,u=[];for(let S of a){let A=Math.max(0,Math.min(1,(l-S.s2)/h));u.push([S.p[0],S.p[1],S.p[2]+r,c+(S.w/2-c)*A])}for(let S of o.slice(1))u.push([S.p[0],S.p[1],S.p[2]+s.ride,c]);let d=a.filter(S=>S.p[2]<ay),f=d.at(-1).s2,g=S=>d.map((A,y)=>{let w=d[Math.max(0,y-1)].p,R=d[Math.min(d.length-1,y+1)].p,P=Math.hypot(R[0]-w[0],R[1]-w[1])||1,U=S*(A.w/2+n.side/2);return[A.p[0]-(R[1]-w[1])/P*U,A.p[1]+(R[0]-w[0])/P*U]}),[v,m]=[g(1),g(-1)],p=`ramp-${e.id}-wall`;for(let S of[v,m])Rs(i,S,n.side,{id:p,kind:"ramp",mat:"ramp",layer:"*"});i.addWall(...v.at(-1),...m.at(-1),{r:n.floor/2,id:p,kind:"ramp",mat:"ramp"});let _=0;for(let S=1;S<u.length;S++)_+=Math.hypot(u[S][0]-u[S-1][0],u[S][1]-u[S-1][1]);i.addTrack(u,{id:e.id,layer:e.id,mat:"ramp",entry:[0,f-4],exit:_-hy(s,r),exitDamp:.4});for(let[S,A]of[...e.supports,...e.wireSupports])i.addCircle(S,A,ry,{kind:"post",mat:"plastic"});let E=`ramp-${e.id}-mouth`,x=`ramp-${e.id}-made`;i.addTrigger(Ip(a,2,10,n.mouth/2),E,{kind:"mouth",layer:"*"}),i.addTrigger(Ip(a,l*(e.switchAt??.82),10,n.width/2+4),x,{kind:"ramp",layer:e.id});let M=Fu(a,0);return{id:e.id,side:e.side,layer:e.id,mouth:E,made:x,at:[M.x,M.y],heading:Math.atan2(M.ty,M.tx)/za}}function Lp(i,t){let{PF:e,BALL_R:n,FLIPPERS:s,SLINGS:r,APRON:a,SHOOTER:o,ARCH:l,INLANE_GUIDES:c,STAR_POSTS:h,GATE:u,TOP_LANES:d,POPS:f,POP:g,RAMPS:v,RETURN_LANES:m,TARGETS:p,TARGET_GUIDES:_,TARGET_RUBBER:E,SAUCER:x}=t,M={};i.bounds=[-20,-80,e.w+20,e.l+20];let S=[[e.rail,-10],[e.rail,l.left.cy],...Uu(l.left.cx,l.left.cy,l.left.r,180,90).slice(1),...Uu(l.right.cx,l.right.cy,l.right.r,90,0),[o.laneRight,90]];ly(i,S,-1,4,{id:"rail",kind:"rail",mat:"metal"});let A=o.dividerFace??o.laneLeft-_c,y=o.laneLeft-A;i.addWall(o.laneLeft-.65,90,o.laneLeft-.65,o.apronTop,{r:.65,id:"divider",kind:"rail",mat:"metal"}),i.addWall(A+y/2,o.apronTop,A+y/2,o.dividerTop,{r:y/2,id:"divider",kind:"rail",mat:"metal"});let w=o.ballRest[1]-n;i.addWall(o.laneLeft,w-3,o.laneRight,w-3,{r:3,id:"plunger",kind:"plunger",e:.3,f:.3});let[R,P]=u.from,[U,B]=u.to,I=Math.hypot(U-R,B-P),F=[(U-R)/I,(B-P)/I],G=[-F[1],F[0]];i.addWall(R,P,U,B,{r:1,oneWay:G,id:"gate",kind:"gate",mat:"metal"});let X=(ut,W,tt)=>[ut[0]+G[0]*W*6+F[0]*tt*4,ut[1]+G[1]*W*6+F[1]*tt*4];i.addTrigger([X(u.from,-1,-1),X(u.to,-1,1),X(u.to,1,1),X(u.from,1,-1)],"gate",{kind:"gate"}),i.addTrigger(xc((o.laneLeft+o.laneRight)/2,o.ballRest[1]+10,(o.laneRight-o.laneLeft)/2,30),"shooter",{kind:"shooter"}),Object.assign(M,{gate:"gate",shooter:"shooter",plunger:{id:"plunger",rest:[...o.ballRest]}});for(let ut of[[a.leftShoulder,a.lipLeft],[a.lipRight,a.rightShoulder]])Rs(i,ut,1.3,{id:"apron",kind:"apron",mat:"metal"});let rt=Math.atan2(a.lipEndY-a.lipCy,a.lipRight[0]-e.cx)/za,$=Math.atan2(a.lipEndY-a.lipCy,a.lipLeft[0]-e.cx)/za,nt=Uu(e.cx,a.lipCy,a.lipR,rt,$,4).map(([ut,W])=>[ut,W-n]);M.drain=i.addTrigger([[e.rail,-60],[o.laneLeft,-60],[o.laneLeft,a.lipEndY-n],...nt,[e.rail,a.lipEndY-n]],"drain",{drain:!0});for(let ut of c)Rs(i,ut.plate.outline,0,{id:"inlane-"+ut.side,kind:"guide",mat:"plastic",closed:!0});for(let[ut,W]of h)i.addCircle(ut,W,sy,{kind:"post",mat:"rubber"});M.orbits=cy(i,t).rollovers,M.slings={};for(let ut of r){let[W,tt,xt]=ut.posts,It="sling-"+ut.side;i.addKicker(...W,...tt,{r:Du,away:xt,id:It,kind:"sling",mat:"sling",kick:vc.sling,minSpeed:120}),i.addWall(...tt,...xt,{r:Du,id:It+"-rubber",kind:"rubber",mat:"sling"}),i.addWall(...xt,...W,{r:Du,id:It+"-rubber",kind:"rubber",mat:"sling"}),M.slings[ut.side]=It}M.flippers={};for(let ut of s)M.flippers[ut.id]=i.addFlipper({id:ut.id,side:ut.side,x:ut.x,y:ut.y,rest:ut.rest,up:ut.up,baseR:ut.baseR,tipR:ut.tipR,length:ut.length});for(let ut of d.rubbers)i.addWall(...ut.posts[0],...ut.posts[1],{r:ut.postR+ut.cord,kind:"rubber",mat:"band"});M.lanes=d.lanes.map((ut,W)=>i.addTrigger(xc(ut.x,ut.y,...Nu),"lane"+W,{kind:"rollover"})),M.returns=m.map((ut,W)=>i.addTrigger(xc(ut.x,ut.y,...Nu),"return"+W,{kind:ut.kind})),M.saucer=i.addSaucer(x.x,x.y,{id:"saucer",reach:x.reach,maxSpeed:x.maxSpeed,hold:x.hold,kick:x.kick,angle:x.kickAngle}),M.pops=f.map((ut,W)=>i.addCircle(ut.x,ut.y,g.reach-n,{id:"pop"+W,kind:"pop",mat:"pop",kick:vc.pop,minSpeed:50,recycle:.03}));let et=p,At=et.depth/2;M.targets=et.list.map((ut,W)=>i.addWall(ut.x-et.width/2+At,ut.y,ut.x+et.width/2-At,ut.y,{r:At,id:"target"+W,kind:"target",mat:"drop"}));let wt=E.posts;wt.forEach((ut,W)=>{let tt=wt[(W+1)%wt.length],xt=Math.max(9,E.grooves[W]+E.cord);i.addWall(...ut,...tt,{r:xt,id:"target-rubber",kind:"rubber",mat:"band"})});for(let ut of _)Rs(i,ut.line,_c,{id:"target-guide-"+ut.side,kind:"guide",mat:"metal"});M.ramps=v.map(ut=>uy(i,t,ut));let jt=et.list[1],$t=ut=>{let W=t.ORBIT_POSTS[ut],tt=t.ORBIT_WEDGES[ut].line,xt=t.INSERTS.find(ne=>ne.id===["left_orbit_arrow","right_orbit_arrow"][ut]),It=tt.reduce((ne,it)=>Math.hypot(it[0]-W[0],it[1]-W[1])<Math.hypot(ne[0]-W[0],ne[1]-W[1])?it:ne),yt=xt.angle*za,kt=[(W[0]+It[0])/2,(W[1]+It[1])/2];return[kt[0]-Math.sin(yt)*90,kt[1]+Math.cos(yt)*90]};return M.aim={...Object.fromEntries(M.ramps.map(ut=>[ut.id,ut.at])),targets:[jt.x,jt.y-At-n-2],saucer:[x.x,x.y],"orbit-left":$t(0),"orbit-right":$t(1)},M}var Dp=Math.PI/180,dy=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Up=44.45,Np=99,Cs={soft:1300,full:2600},fy={hero:"play",deadbounce:"ramp-deadbounce",tiptop:"ramp-tiptop",about:"pops",skills:"hold",experience:"hold",contact:"hold"},Fp=["ramp-deadbounce","orbit-left","ramp-tiptop","orbit-right"],yc=class{constructor(t,{reduced:e}){this.h=t,this.reduced=e,this.time=0,this.power=0,this.skillsLit=[0,0,0,0],this.skillFocus=-1,this.rung=-1,this.explodedPop=0,this.station=null,this.play="play",this.exploded=0;for(let n of t.rollovers)n.pos=Ee(n.x,n.y,fn);t.shooterBall.visible=!1,t.ball.material=t.ball.material.clone(),this.physics=new gc({seed:7}),this.ids=Lp(this.physics,fu),this.popColliders=this.physics.colliders.filter(n=>n.kind==="pop"),this.events(),this.auto={state:"serve",at:0,side:null,still:0,shotUntil:0,next:0,user:-1e9,cache:new Map},t.plunger.releasedAt=-1,this.serveAt=.2,this.plungeSpeed=Cs.full,this.aim=new D,e&&this.settleForStill()}settleForStill(){let t=this.physics,e=vn.find(n=>n.id==="left");t.setFlipper("left",!0),t.ball.place(e.x+20,e.y+70,0,-200),t.run(2.5),this.auto.state="still"}events(){let t=this.physics;t.on("kick",e=>{e.kind==="pop"?this.firePop(+String(e.id).slice(3),Ee(e.x,e.y)):e.kind==="sling"?this.kickSling(String(e.id).replace("sling-","")):e.kind==="saucer"&&this.kickSaucer()}),t.on("hit",e=>{e.kind==="target"&&this.hitTarget(+String(e.id).slice(6),e.speed)}),t.on("enter",e=>{let n=String(e.id);if(/^(lane|return)\d$/.test(n))this.flash(Es(n),1.2);else if(/^orbit\d$/.test(n))this.flash(Es(n),1.4);else if(n==="saucer")this.flash("saucer_arrow",1.6),this.saucerAt=this.time;else if(n==="gate")this.swingGate();else if(n.endsWith("-made")){let s=ji.find(r=>n===`ramp-${r.id}-made`);s&&this.flash(`${s.side}_ramp_arrow`,1.4)}}),t.on("drain",()=>{this.auto.state="serve",this.serveAt=this.time+.9;for(let e of vn)t.setFlipper(e.side,!1)})}setStation(t){t!==this.station&&(this.station=t,this.play=fy[t]||this.play,this.play==="pops"&&this.auto.state==="cradled"&&this.letGo())}flip(t,e=.16){let n=this.physics;this.auto.user=this.time,n.setFlipper(t,!0),n.setFlipper(t,!1,e)}hold(t,e){this.auto.user=this.time,this.physics.setFlipper(t,e)}shoot(){return this.auto.state!=="cradled"?!1:(this.auto.forceShot=!0,!0)}firePop(t,e){let n=this.h.pops[t];if(!n)return;n.fired=this.time;let s=n.group.position,r=this.time*7.3,a=e?e.x-s.x:Math.cos(r),o=e?e.z-s.z:Math.sin(r);n.axis.set(o,0,-a).normalize()}kickSling(t){let e=this.h.slings.find(n=>n.side===t);e&&(e.kicked=this.time)}flash(t,e=1){let n=this.h.inserts.get(t);n&&(n.flash=Math.max(n.flash,e))}swingGate(){let t=this.h.gate;t.open=Math.max(t.open,1.25),t.velocity=0}hitTarget(t,e=1500){let n=this.h.targets[t];if(!n)return;n.hit=this.time,n.kick=Math.min(1,.35+e/2500);let s=this.h.inserts.get(Xn.list[t].insert);s&&(s.flash=Math.max(s.flash,1.3))}kickSaucer(){this.h.saucer&&(this.h.saucer.kicked=this.time),this.flash("saucer_arrow",1)}pressStart(){this.startAt=this.time;let t=this.h.plunger;this.auto.state==="shooter"&&!t.pulling&&t.releasedAt<0&&(t.pull=.7,t.pulling=!0,this.release(Cs.full))}pull(){let t=this.h.plunger;t.pulling=!0,t.releasedAt=-1,this.auto.user=this.time}release(t){let e=this.h.plunger;e.pulling&&(e.pulling=!1,e.releasedAt=this.time,e.from=e.pull,e.limit=1,this.plungeSpeed=t??Cs.soft+(Cs.full-Cs.soft)*e.from)}near(t){let e=this.physics.ball,n=vn.find(r=>r.id===t);return!e.active||e.layer!==0?!1:(t==="left"?e.x<Tt.cx+8:e.x>Tt.cx-8)&&e.y<n.y+95&&Math.hypot(e.x-n.x,e.y-n.y)<n.length+70}letGo(){for(let t of vn)this.physics.setFlipper(t.side,!1);this.auto.state="play",this.auto.side=null}shotFor(t,e){let n=t+":"+e;if(this.auto.cache.has(n))return this.auto.cache.get(n);let s=this.ids.aim[e.replace(/^ramp-/,"")];if(e==="pass"){let a=vn.find(o=>o.id===(t==="left"?"right":"left"));s=[a.x+(t==="left"?14:-14),a.y+150]}let r=s?this.physics.aimFlip(t,s[0],s[1],{minArrive:e.startsWith("ramp")?2e3:0}):null;return this.auto.cache.set(n,r),r}autopilot(t){let e=this.physics,n=e.ball,s=this.auto,r=this.time;if(s.state==="still"||r-s.user<4)return;if(s.state==="serve"){if(r<this.serveAt)return;s.state="serving",s.at=r;return}if(s.state==="serving"){if(r-s.at<.38)return;e.ball.place(ae.ballRest[0],ae.ballRest[1],0,0),s.state="shooter",s.at=r;return}if(s.state==="shooter"){let o=this.h.plunger;!o.pulling&&o.releasedAt<0&&r-s.at>.8&&(this.pull(),s.user=-1e9,o.limit=this.play==="pops"?.25:1),o.pulling&&o.pull>=o.limit-.001&&r-s.at>1.4&&(this.release(this.play==="pops"?Cs.soft:Cs.full),s.user=-1e9);return}if(!n.active||e.held)return;let a=n.speed<30;for(let o of["left","right"]){let l=this.near(o);s.state==="play"&&l&&this.play!=="pops"&&r>s.shotUntil&&n.vy<40&&(e.setFlipper(o,!0),s.state="catching",s.side=o,s.at=r)}if(s.state==="catching"){if(!this.near(s.side)){r-s.at>.4&&this.letGo();return}s.still=a?s.still+t:0,s.still>.25?(s.state="cradled",s.at=r):r-s.at>2.5&&this.letGo();return}if(s.state==="cradled"){if(!this.near(s.side)){this.letGo();return}if(this.play==="pops"){this.letGo();return}let o=s.forceShot?0:this.play==="hold"?1/0:.7;if(r-s.at<o)return;s.forceShot=!1;let l=this.play;(l==="play"||l==="hold")&&(l=Fp[s.next%Fp.length],s.next++);let c=this.shotFor(s.side,l);if((!c||c.miss>14)&&(l="pass",c=this.shotFor(s.side,"pass")),!c){this.letGo();return}e.setFlipper(s.side,!1),e.setFlipper(s.side,!0,c.delay),e.setFlipper(s.side,!1,c.delay+.25),s.shotUntil=r+c.delay+.5,s.state="play",s.side=null}}update(t,e){this.time+=t;let n=this.time,s=this.h,r=this.power,a=this.physics,o=this.popColliders[this.explodedPop];o&&(o.kick=this.exploded>.05?0:vc.pop),this.reduced||(this.autopilot(t),a.step(t));for(let h of s.flippers)h.pivot.rotation.y=a.flipperAngle(h.id)*Dp;for(let h of s.pops){let u=h.fired<0?9:n-h.fired,d=u<.004?0:u<.014?((u-.004)/.01)**2:u<.03?1:u<.075?.5+.5*Math.cos(Math.PI*(u-.03)/.045):0;h.ring.position.y=(Sr.ringRest-Sr.ringTravel*(this.reduced?0:d))*L;let f=u<.006?u/.006:Math.max(0,1-(u-.006)/.035);h.skirt.quaternion.setFromAxisAngle(h.axis,this.reduced?0:f*2.5*Dp);let g=u<.5?Math.exp(-u/.07):0;h.capMat.emissiveIntensity=(.22+2.6*g)*r*h.capMat.userData.gain,h.bodyMat.emissiveIntensity=(.06+1.4*g)*r*h.bodyMat.userData.gain}for(let h of s.slings){let u=h.kicked<0?9:n-h.kicked,d=0;u<.008?d=Math.sin(u/.008*(Math.PI/2)):u<.025?d=1:u<.065&&(d=.5+.5*Math.cos(Math.PI*(u-.025)/.04));let f=u>=.065&&u<.35?-.16*Math.sin((u-.065)*Math.PI*2*22)*Math.exp(-(u-.065)*14):0;this.reduced&&(d=0),h.arm.position.copy(h.rest).addScaledVector(h.push,d);let g=this.reduced?0:d+f;(Math.abs(g-h.shown)>.015||g===0&&h.shown!==0)&&(h.rubber.geometry.dispose(),h.rubber.geometry=h.rubberGeo(g*9),h.shown=g)}for(let h of s.targets){let u=h.hit<0?9:n-h.hit,d=0;u<.004?d=u/.004:u<.09&&(d=Math.cos((u-.004)/.086*Math.PI*1.5)*Math.exp(-(u-.004)*30)),h.holder.position.copy(h.rest).addScaledVector(h.back,this.reduced?0:2*(h.kick||1)*d)}if(s.saucer){let h=s.saucer,u=h.kicked<0?9:n-h.kicked,d=u<.008?u/.008:u<.06?1-(u-.008)/.052:0;h.finger.position.copy(h.rest).addScaledVector(h.out,this.reduced?0:6*L*d)}this.updateShooter(t),this.updateBall(),this.updateRollovers(t),this.updateInserts(t,e),s.backglass.material.color.setScalar(r*(s.backglass.lcd.showing==="art"?.92+.08*Math.sin(n*1.3):.94));for(let h of s.gi)h.intensity=h.userData.base*r;for(let h of s.bulbs)h.emissiveIntensity=2.2*r*h.userData.gain;let l=this.startAt===void 0?9:n-this.startAt,c=this.auto.state==="shooter"&&Math.sin(n*5)>0;s.startButton.material.emissiveIntensity=(.3+(c?.5:0)+3*Math.exp(-l*5))*r*(s.startButton.material.userData.gain||1)}updateBall(){let t=this.physics.ball,e=this.h.ball,n=this.auto;if(n.state==="serving"){let r=dy((this.time-n.at)/.38),a=1-(1-r)**2;e.visible=!0,e.position.copy(Ee(ae.laneLeft-24+(ae.ballRest[0]-ae.laneLeft+24)*a,ae.ballRest[1]+4*(1-a),fn));return}if(e.visible=t.active,!t.active)return;let s=n.state==="shooter"&&this.h.plunger.shown||0;e.position.copy(Ee(t.view.x,t.view.y-s,t.view.z)),e.quaternion.set(t.q[0],t.q[2],-t.q[1],t.q[3])}updateShooter(t){let e=this.h,n=e.plunger,s=this.time,r=this.auto,a=0;if(n.pulling)n.pull=Math.min(n.limit??1,n.pull+t/.5),a=n.pull*Up;else if(n.releasedAt>=0){let l=s-n.releasedAt,c=Math.PI/2/Np;if(l<c)a=n.from*Up*Math.cos(Np*l);else{r.state==="shooter"&&(this.physics.ball.place(ae.ballRest[0],ae.ballRest[1]+1,0,this.plungeSpeed),r.state="play");let h=(l-c)/.12;a=h<1?-5*n.from*Math.sin(Math.PI*h):0,h>=1&&(n.releasedAt=-1,n.pull=0)}}this.reduced&&(a=0),n.shown=Math.max(0,a),n.group.position.copy(n.rest),n.group.position.z+=a*L,n.spring.scale.z=(n.springLen-a)/n.springLen;let o=e.gate;o.velocity+=(-Math.sin(o.open)*820-o.velocity*6)*t,o.open+=o.velocity*t,o.open<0&&(o.open=0,o.velocity=Math.abs(o.velocity)>.5?-o.velocity*.3:0),o.flap.rotation.x=this.reduced?0:o.open}updateRollovers(t){let e=[this.h.ball];for(let n of this.h.rollovers){let s=!1;for(let r of e)r.visible&&Math.abs(r.position.x-n.pos.x)<9*L&&Math.abs(r.position.z-n.pos.z)<21*L&&r.position.y<20*L&&(s=!0);s&&!n.on&&this.flash(n.insert,1.2),n.on=s,n.press=s?Math.min(1,n.press+t/.01):Math.max(0,n.press-t/.03),n.wire.scale.y=1-.75*n.press}}updateInserts(t,e){let n=this.time,s=this.power,r=this.station,a=.05;for(let[o,l]of this.h.inserts){let c=a;switch(l.group){case"years":{if(r==="experience")c=l.index<this.rung?1.1:l.index===this.rung?Math.floor(n*5)%2?1.7:.8:.08;else{let h=Math.floor(n*3)%7;c=h===l.index||h===5?1.1:.12}break}case"skills":{r==="skills"?c=this.skillsLit[l.index]>.5?l.index===this.skillFocus?1.2+.22*Math.sin(n*6):1.05:.08:c=(Math.floor(n*1.5)+l.index)%4===0?1.1:.18;break}case"ramp0":c=r==="deadbounce"?Math.floor(n*4)%2?1.6:.3:.2;break;case"ramp1":c=r==="tiptop"?Math.floor(n*4)%2?1.6:.3:.2;break;case"ladder":c=Math.floor(n*2.5)%4===l.index?.9:.12;break;case"targets":c=.14;break;case"saucer":c=this.physics.held?Math.floor(n*8)%2?1.6:.4:r==="about"?.7:.25;break;case"again":c=r==="contact"?Math.floor(n*2.5)%2?1.6:.35:.1;break;case"orbit":c=.1;break}l.flash=Math.max(0,l.flash-t*3),l.level+=(c-l.level)*(1-Math.exp(-t*18)),l.mat.emissiveIntensity=(l.level+l.flash*2)*s*l.mat.userData.gain,l.side.emissiveIntensity=l.mat.emissiveIntensity}}setSkills(t){this.skillsLit.forEach((e,n)=>{let s=t>.12+n*.2?1:0;s&&!e&&this.flash(hi[n].insert,1.2),this.skillsLit[n]=s})}setTimeline(t){this.rung=Math.min(4,Math.floor(t*5.2))}};var Ha="http://www.w3.org/2000/svg",Mc=class{constructor(t,e,n){this.svg=t,this.links=[],e.forEach((s,r)=>{for(let a of s.querySelectorAll("[data-anchor]")){let[o,l,c]=a.dataset.anchor.split(",").map(Number),h=document.createElementNS(Ha,"g");h.setAttribute("class","hud-link");let u=document.createElementNS(Ha,"path");u.setAttribute("pathLength","1"),u.setAttribute("class","hud-line");let d=document.createElementNS(Ha,"circle");d.setAttribute("r","9"),d.setAttribute("class","hud-ring");let f=document.createElementNS(Ha,"circle");f.setAttribute("r","3"),f.setAttribute("class","hud-dot");let g=document.createElementNS(Ha,"circle");g.setAttribute("r","2"),g.setAttribute("class","hud-tick"),h.append(u,d,f,g),t.append(h),this.links.push({index:r,el:a,world:n(o,l,c),g:h,path:u,ring:d,dot:f,tick:g,primary:!a.closest("li"),shown:-1,d:""})}}),this.p=null}update(t,e,n,s,r){for(let a of this.links){let o=s[a.index]||0;if(!a.primary&&(r||!a.el.classList.contains("current"))&&(o=0),o<.01){a.shown!==0&&(a.g.style.display="none",a.shown=0);continue}let l=a.world.clone().project(t),c=a.el.getBoundingClientRect();if(l.z>1||c.height===0){a.g.style.display="none",a.shown=0;continue}a.shown===0&&(a.g.style.display="");let h=(l.x+1)/2*e,u=(1-l.y)/2*n,d=c.left>h,f=d?c.left-14:c.right+14,g=c.top+Math.min(c.height/2,16),v=d?f-36:f+36,m=r?`M${h.toFixed(1)},${u.toFixed(1)}L${h.toFixed(1)},${(c.top-18).toFixed(1)}`:`M${h.toFixed(1)},${u.toFixed(1)}L${v.toFixed(1)},${g.toFixed(1)}L${f.toFixed(1)},${g.toFixed(1)}`;m!==a.d&&(a.path.setAttribute("d",m),a.d=m);let p=r?[h,c.top-18]:[f,g];if(a.ring.setAttribute("cx",h.toFixed(1)),a.ring.setAttribute("cy",u.toFixed(1)),a.dot.setAttribute("cx",h.toFixed(1)),a.dot.setAttribute("cy",u.toFixed(1)),a.tick.setAttribute("cx",p[0].toFixed(1)),a.tick.setAttribute("cy",p[1].toFixed(1)),Math.abs(o-a.shown)>.003){let _=o*o*(3-2*o);a.path.style.strokeDashoffset=(1-_).toFixed(3),a.ring.style.transform=`scale(${_.toFixed(3)})`,a.ring.style.transformOrigin=`${h.toFixed(1)}px ${u.toFixed(1)}px`,a.g.style.opacity=Math.min(1,o*1.6).toFixed(3),a.shown=o}else a.ring.style.transformOrigin=`${h.toFixed(1)}px ${u.toFixed(1)}px`;a.g.classList.toggle("lit",a.el.classList.contains("lit")||a.primary)}}};var Ou=i=>i*i*(3-2*i),Bu=i=>Math.min(1,Math.max(0,i)),Sc=class{constructor(t,e){this.pop=t;let n=t.group;n.updateMatrixWorld(!0);let s=new Cn;this.parts=t.parts.map((l,c)=>{s.setFromObject(l);let h=n.worldToLocal(s.getCenter(new D)),u=s.getSize(new D);return{holder:l,k:c,lift:l.userData.lift,label:l.userData.label,mid:h,reach:Math.max(u.x,u.z)/2}});let r=this.parts.length,a=this.parts[r-1],o=new ve().setFromPoints([new D(0,-8*L,0),new D(0,a.mid.y+(a.lift+18)*L,0)]);this.axis=new qr(o,new oa({color:7245055,dashSize:7*L,gapSize:2*L,transparent:!0,opacity:0,depthWrite:!1})),this.axis.computeLineDistances(),this.axis.visible=!1,n.add(this.axis),this.el=document.createElement("div"),this.el.className="cad",this.el.setAttribute("aria-hidden","true");for(let l of this.parts){l.tag=document.createElement("span"),l.tag.className="cad-tag";let c=document.createElement("i");c.textContent=String(l.k+1).padStart(2,"0"),l.tag.append(c,document.createTextNode(l.label)),this.el.append(l.tag)}e.append(this.el),this.shown=-1,this.v=new D}amountFor(t,e){let n=this.parts.length,s=.06;return Ou(Bu(e*(1+s*(n-1))-(n-1-t.k)*s))}update(t,e,n,s,r){if(t<.001&&this.shown===0)return;for(let l of this.parts)l.holder.position.y=l.lift*this.amountFor(l,t)*L;let a=r==="tall"?0:Ou(Bu((t-.2)/.35));if(this.axis.visible=t>.01,this.axis.material.opacity=.85*Ou(Bu(t/.3)),this.el.style.opacity=a.toFixed(3),this.el.classList.toggle("left",r!=="left"),this.shown=t<.001?0:t,a<.01)return;let o=r!=="left"?-1:1;for(let l of this.parts){let c=l.lift*this.amountFor(l,t);this.v.set(o*(l.reach+14*L),l.mid.y+c*L,0).applyMatrix4(this.pop.group.matrixWorld).project(e);let h=(this.v.x+1)/2*n,u=(1-this.v.y)/2*s;l.tag.style.transform=`translate(${h.toFixed(1)}px, ${u.toFixed(1)}px)`}}};var Ii=document.documentElement,pn=matchMedia("(prefers-reduced-motion: reduce)").matches,Op=matchMedia("(hover: hover) and (pointer: fine)").matches,qn=(i,t=document)=>t.querySelector(i),Ps=(i,t=document)=>[...t.querySelectorAll(i)],ns=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Ga=i=>i*i*(3-2*i),py=Math.PI/180,ku={"ramp-deadbounce":{label:"Read the Deadbounce case study",href:"/work/deadbounce.html"},"ramp-tiptop":{label:"Read the Tip Top case study",href:"/work/tip-top-pinball.html"},"pop-0":{label:"Fire the pop bumper"},"pop-1":{label:"Fire the pop bumper"},"pop-2":{label:"Fire the pop bumper"},"target-0":{label:"Hit the target"},"target-1":{label:"Hit the target"},"target-2":{label:"Hit the target"},"sling-left":{label:"Kick the slingshot"},"sling-right":{label:"Kick the slingshot"},"flip-left":{label:"Flip"},"flip-right":{label:"Flip"},plunger:{label:"Launch a ball back to the top"},dmd:{label:"Next display scene"},portrait:{label:"Fire the pops"}},Bp={hero:{az:-18,el:5,fit:[.84,1.02],side:"left",fov:30},deadbounce:{glass:[-.05,-.25],az:-18,el:18,fit:[.7,.96],side:"right",lift:6,tall:{glass:[0,-.03],az:-12,el:8,fit:[.64,.5]}},tiptop:{glass:[.05,-.25],az:18,el:18,fit:[.7,.96],side:"left",lift:6,tall:{glass:[0,-.03],az:12,el:8,fit:[.64,.5]}},about:{at:[236,935,350],az:14,el:13,fit:[.62,.92],fov:22,side:"right",lift:10},skills:{at:[237,384,0],az:0,el:50,fit:[.47,.13],side:"left",lift:6},experience:{at:[235,988,8],az:-4,el:52,fit:[.38,.17],side:"right",lift:12},contact:{at:[237,165,22],az:-8,el:47,fit:[.27,.17],side:"left",lift:8}},Is={stops:[.1,.3,.5,.7].map(i=>[i,i+.1]),inserts:[[26,386],[69.4,386],[404.95,386],[448.35,386]],close:{el:58,fit:[.13,.07],side:"left",fov:30},swing:7};function my(i){let t=Is.stops,e=t.length-1,n=Ga(ns(i/t[0][0]))*(1-Ga(ns((i-t[e][1])/(1-t[e][1])))),s=0,r=0;for(let a=0;a<e;a++){let o=ns((i-t[a][1])/(t[a+1][0]-t[a][1]));o>0&&(s=a+Ga(o),r=Math.sin(Math.PI*o))}return{k:s,zoom:n,cross:r}}var kp={deadbounce:{url:"/assets/img/deadbounce-origin.jpg",focus:[.5,.5],action:"ramp-deadbounce"},tiptop:{url:"/assets/img/tiptop.jpg",focus:[.5,0],action:"ramp-tiptop"},about:{url:"/assets/img/dylan.jpg",card:!0,action:"portrait"}};async function gy(){if(!Ii.classList.contains("machine"))return;let i=qn("[data-stage]"),t=Ps("[data-station]");if(!i||!t.length)throw new Error("No stage on this page");let e=Tp();await np();let n={playfield:sp(e.playfieldScale),backglass:rp(e.low?1320:2048),cabinetSide:lp(2048,768,{frontBottom:(rn.top-rn.bottom)/(rn.top-rn.bottom+(rn.front-rn.back)*Math.tan(6.5*py))}),plastics:yr.map(H=>dp(H)),inlane:Mr.map(H=>({plate:yu(H.plate.outline),cover:yu(H.cover.outline,{mark:!0})})),apron:cp(e.low?1024:2048),popDecal:up(256),cards:{instructions:vu("instructions",625),free:vu("free",625)},target:hp(160)},s=document.createElement("canvas"),r=qn("[data-dmd-label]"),a=qn("[data-dmd-count]"),o=new window.DMD(s,{reduced:pn,width:1024,onScene:(H,J,V)=>{r&&(r.textContent=H),a&&V>1&&(a.textContent=`${J} / ${V}`)}}),l=Ep(i,e),c=jf(l.envMap),h=Math.min(e.anisotropy,l.renderer.capabilities.getMaxAnisotropy()),u=xp({M:c,art:n,dmdCanvas:s,anisotropy:h});l.scene.add(u.root),l.ao&&l.ao.setSceneClipBox(new Cn().setFromObject(u.root).expandByScalar(.03)),o.onPaint=()=>{u.dmd.texture.needsUpdate=!0};let d=new yc(u,{reduced:pn}),f=(H,J,V=0)=>u.toWorld(H,J,V);u.backbox.updateMatrixWorld(!0);let g=u.backbox.localToWorld(new D(0,(es.dmdY-es.dmdH/2+es.glassY+es.glassH)/2,0)),v=([H,J])=>u.backbox.localToWorld(new D(H,es.glassY+es.glassH/2+J,0)),m=H=>{let J=Bp[H],V=j=>j.at?f(...j.at):j.glass?v(j.glass):g;return{...J,target:V(J),...J.tall&&{tall:{...J.tall,target:V({...J,...J.tall})}}}},p=t.map(H=>H.dataset.station),_=new pc(l.camera);_.setPoses(p.map(m));let E={target:f(237,470,60),az:-34,el:15,fit:[1.5,1.6],side:"center",fov:30},x=Is.inserts.map(([H,J])=>({...Is.close,target:f(H,J+6,0),az:H<237?Is.swing:-Is.swing})),M=-1,S=u.backglass.lcd;for(let[H,J]of Object.entries(kp)){let V=new Image;V.decoding="async",V.src=J.url,V.decode().then(()=>S.add(H,J.card?op(V,1320):ap(V,e.low?1024:1320,J.focus),J.action)).catch(()=>{})}let A=new Mc(qn("[data-hud]"),t,f),y=p.indexOf("about"),w=y>=0?new Sc(u.pops[d.explodedPop],document.body):null,R=H=>{let J=_.holds[y]*1.6,V=ns((H-(_.anchors[y]-J/2))/J);return V<.5?Ga(ns(V/.36)):Ga(ns((1-V)/.36))},P=null;!pn&&window.Lenis&&(P=new window.Lenis({lerp:.085,wheelMultiplier:.9}));let U=()=>P?P.animatedScroll:window.scrollY,B=(H,J={})=>{P?P.scrollTo(H,{duration:J.duration||1.6,easing:V=>1-Math.pow(1-V,4)}):window.scrollTo({top:H,behavior:"auto"})},I=H=>{let J=qn("#"+H);if(!J)return-1;let V=J.closest("[data-station]")||J.querySelector("[data-station]");return t.indexOf(V)};for(let H of Ps('a[href^="#"]'))H.hasAttribute("data-launch")||H.addEventListener("click",J=>{let V=H.getAttribute("href").slice(1),j=V==="main"||V==="top"?0:I(V);if(j<0)return;J.preventDefault(),B(_.anchors[j],{duration:1.8}),history.replaceState(null,"","#"+V);let pt=t[j].querySelector("h1, h2, h3");pt&&(pt.setAttribute("tabindex","-1"),pt.focus({preventScroll:!0}))});t.forEach((H,J)=>H.addEventListener("focusin",()=>{Math.abs(_.floatAt(U())-J)>.2&&B(_.anchors[J],{duration:1.1})}));let F=qn("[data-header]"),G=0,X=0;function rt(){G=innerWidth,X=innerHeight,l.resize(G,X),_.setView(G,X,F?F.offsetHeight:64),Ii.classList.toggle("tall",_.view.layout==="tall"),t.forEach(H=>{let J=H.querySelector(".placard");J&&H.style.setProperty("--ph",J.offsetHeight+"px")}),_.measure(t,X,_.view.layout==="tall")}rt();let $=0;addEventListener("resize",()=>{clearTimeout($),$=setTimeout(rt,120)}),document.fonts.ready.then(rt);let nt=new da,et=new ot(9,9),At=null,wt=!1,jt=qn("[data-cursor-label]"),$t=H=>H.closest("a, button, input, label, .placard, [data-glass], .site-header, .dmd-strip, .site-footer");addEventListener("pointermove",H=>{et.set(H.clientX/G*2-1,-(H.clientY/X)*2+1),Op&&_.pointer(et.x,et.y),jt&&(jt.style.transform=`translate(${H.clientX}px, ${H.clientY}px) translate(-50%, -50%) scale(${At?1:0})`),wt=!!$t(H.target)},{passive:!0});function ut(){if(wt||Math.abs(et.x)>1)return null;nt.setFromCamera(et,l.camera);let H=nt.intersectObjects(u.interactive,!1).find(J=>J.object.visible&&(!J.object.parent||J.object.parent.visible!==!1));return H&&H.object.userData.action||null}addEventListener("click",H=>{if($t(H.target))return;let J=ut();if(!J)return;let V=ku[J];if(V&&V.href){location.href=V.href;return}J.startsWith("pop-")?d.firePop(+J.slice(4)):J==="portrait"?[0,1,2].forEach((j,pt)=>setTimeout(()=>d.firePop(j),pt*140)):J.startsWith("target-")?d.hitTarget(+J.slice(7)):J.startsWith("sling-")?d.kickSling(J.slice(6)):J==="flip-left"||J==="flip-right"?W(J.slice(5)):J==="plunger"?tt():J==="dmd"&&o.next()}),addEventListener("keydown",H=>{H.repeat||H.target.closest&&H.target.closest("input, textarea")||(H.code==="ShiftLeft"&&W("left",!0),H.code==="ShiftRight"&&W("right",!0))}),addEventListener("keyup",H=>{H.code==="ShiftLeft"&&d.hold("left",!1),H.code==="ShiftRight"&&d.hold("right",!1)});function W(H,J=!1){J?d.hold(H,!0):d.flip(H)}function tt(){d.pull(),setTimeout(()=>{d.release(),B(0,{duration:2.8})},pn?0:520)}for(let H of Ps("[data-launch]"))H.addEventListener("click",J=>{J.preventDefault(),tt()});for(let H of Ps('.station-hero a[href="#work"]'))H.addEventListener("click",()=>d.pressStart());for(let H of Ps("[data-flip]"))H.addEventListener("pointerenter",()=>d.flip(H.dataset.flip)),H.addEventListener("focus",()=>d.flip(H.dataset.flip));let xt=qn("[data-dmd-pause]"),It=qn("[data-dmd-next]"),yt=pn;xt&&(pn&&(xt.hidden=!0),xt.addEventListener("click",()=>{yt=!yt,xt.setAttribute("aria-pressed",String(yt)),xt.textContent=yt?"Play":"Pause",yt?o.stop():o.start()})),It&&It.addEventListener("click",()=>{o.next(),(yt||pn)&&o.still()});let kt=t.map(H=>H.querySelector(".placard")),ne=t.map(H=>H.dataset.side||"hero"),it=qn("[data-shade]"),ht={l:-1,r:-1,b:-1},mt=kt.map(()=>-1),dt=kt.map(()=>0),vt=qn("[data-lens]"),Vt=0;function zt(H){kt.forEach((at,ct)=>{let Mt=ns(1-Math.abs(H-ct)*2.4);pn&&(Mt=Math.abs(H-ct)<.5?1:0),dt[ct]=Mt,at&&(Math.abs(Mt-mt[ct])<.003||(mt[ct]=Mt,at.style.opacity=Mt.toFixed(3),at.style.transform=`translate3d(0, ${((1-Mt)*22).toFixed(1)}px, 0)`,at.classList.toggle("is-here",Mt>.55)))});let J=0;dt.forEach((at,ct)=>{ct>0&&at>dt[J]&&(J=ct)});let V=J>0?dt[J]:0;if(vt&&(V>.01||Vt>.01)){if(V>.01){let at=kt[J].getBoundingClientRect(),ct=90,Mt=80;vt.style.transform=`translate(${(at.left-ct).toFixed(0)}px, ${(at.top-Mt).toFixed(0)}px)`,vt.style.width=`${(at.width+ct*2).toFixed(0)}px`,vt.style.height=`${(at.height+Mt*2).toFixed(0)}px`}vt.style.opacity=V.toFixed(3),Vt=V}let j=_.view.layout==="tall",pt=at=>Math.max(0,...dt.map((ct,Mt)=>ne[Mt]===at?ct:0)),bt={l:j?0:pt("left"),r:j?0:pt("right"),b:j?Math.max(...dt):0};for(let at of["l","r","b"])Math.abs(bt[at]-ht[at])<.004||(ht[at]=bt[at],it.style.setProperty("--"+at,bt[at].toFixed(3)))}let Wt=Ps("[data-skill]"),Xt=Ps("[data-rung]"),N="";function le(H){let J=d.skillsLit.join("")+"|"+(H==="experience"?d.rung:-1)+"|"+M;if(J===N)return;N=J,Wt.forEach((bt,at)=>bt.classList.toggle("lit",d.skillsLit[at]>.5)),Xt.forEach((bt,at)=>bt.classList.toggle("lit",H==="experience"&&at<=d.rung));let V=d.skillsLit.filter(bt=>bt>.5).length,j=H!=="skills"?-1:pn?V>0&&V<Wt.length?d.skillsLit.lastIndexOf(1):-1:M,pt=H==="experience"?d.rung:-1;for(let[bt,at]of[[Wt,j],[Xt,pt]])bt.forEach((ct,Mt)=>ct.classList.toggle("current",Mt===at)),bt[0]&&bt[0].parentElement.classList.toggle("has-current",at>=0)}let Jt={blend:pn?1:0};function C(){if(Ii.classList.remove("booting"),Ii.classList.add("machine-ready"),pn||!window.gsap){d.power=1,Jt.blend=1,o.boot();return}window.gsap.timeline().to(d,{power:.75,duration:.08,ease:"none"},.35).to(d,{power:.08,duration:.07,ease:"none"},.45).to(d,{power:.9,duration:.06,ease:"none"},.6).to(d,{power:.3,duration:.05,ease:"none"},.68).to(d,{power:1,duration:.5,ease:"power2.out"},.78).call(()=>o.boot(),null,.85).to(Jt,{blend:1,duration:2.6,ease:"power3.inOut"},.2)}let b=!0,z=performance.now();document.addEventListener("visibilitychange",()=>{b=!document.hidden,b&&(z=performance.now(),requestAnimationFrame(Q)),document.hidden?o.stop():yt||o.start()});let q=null;function Q(H){if(!b)return;let J=Math.min(.5,Math.max(0,(H-z)/1e3)),V=Math.min(.05,J);z=H,P&&P.raf(H);let j=U(),pt=_.floatAt(j),bt=Math.round(pt),at=Math.abs(pt-bt)<.36?p[bt]:null;at!==q&&(q=at,d.setStation(at||d.station),Ii.dataset.station=at||"");let ct=p.indexOf("skills"),Mt=p.indexOf("experience");ct>=0&&d.setSkills(at==="skills"?_.holdProgress(ct,j):pt>ct?1:0),Mt>=0&&d.setTimeline(_.holdProgress(Mt,j));let Ut=_.at(pn?bt:pt);if(M=-1,ct>=0&&!pn&&Math.abs(pt-ct)<.001){let{k:_t,zoom:Et,cross:lt}=my(_.holdProgress(ct,j));if(Et>.001){let Bt=Math.floor(_t),Nt=Math.min(x.length-1,Bt+1),Me=_.blend(_.resolve(x[Bt]),_.resolve(x[Nt]),_t-Bt,0),pe=Math.abs(Is.inserts[Nt][0]-Is.inserts[Bt][0])/340;Ut=_.blend(Ut,Me,Et*(1-.6*lt*pe),0),Et>.6&&lt<.5&&(M=Math.round(_t))}}Jt.blend<1&&(Ut=_.blend(_.resolve(E),Ut,Jt.blend,0)),_.apply(Ut,V,{instant:pn,damping:6.5});let Yt=bt>0?ns(1-Math.abs(pt-bt)*2.4):0;l.focusOn(_.current.target,_.current.d,Yt*Jt.blend),d.skillFocus=M,d.update(V,{f:pt}),zt(pt),le(at);let k="art",St=S.showing==="art"?.46:.54;for(let _t of Object.keys(kp)){let Et=Math.abs(pt-p.indexOf(_t))-(_t===S.showing?.06:0);p.includes(_t)&&Et<St&&(St=Et,k=_t)}if(S.show(k,pn),S.update(J),A.update(l.camera,G,X,dt,_.view.layout==="tall"),w){let _t=R(j);w.update(_t,l.camera,G,X,_.view.layout==="tall"?"tall":Bp.about.side),d.exploded=_t}let st=j>40;if(st!==Ii.classList.contains("scrolled")&&Ii.classList.toggle("scrolled",st),Op){let _t=ut();_t!==At&&(At=_t,document.body.style.cursor=_t?"pointer":"",jt&&(jt.textContent=_t&&ku[_t]?ku[_t].label:""))}l.render(),l.govern(H),requestAnimationFrame(Q)}_.apply(_.at(0),0,{instant:!0}),l.render(),requestAnimationFrame(H=>{z=H,Q(H),C()}),window.__machine={stage:l,h:u,show:d,director:_,dmd:o,lenis:P,scrollTo:B,intro:Jt,lcd:S,exploded:w}}gy().catch(i=>{console.error(i),Ii.classList.remove("machine","booting","tall"),Ii.classList.add("machine-failed"),window.dispatchEvent(new Event("machine:failed"))});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
