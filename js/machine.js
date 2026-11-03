var Vp=Object.defineProperty;var Gp=(i,t)=>{for(var e in t)Vp(i,e,{get:t[e],enumerable:!0})};var Md=0,oh=1,Sd=2;var cs=1,bd=2,ar=3,Wi=0,hn=1,un=2,Ne=0,lr=1,hs=2,ah=3,lh=4,tl=5;var In=100,Ed=101,Td=102,wd=103,Ad=104,us=200,Rd=201,Cd=202,Pd=203,ch=204,hh=205,fo=206,Id=207,po=208,Dd=209,Ld=210,Ud=211,Nd=212,Fd=213,Od=214,va=0,ya=1,Ma=2,Gs=3,Sa=4,ba=5,Ea=6,Ta=7,uh=0,Bd=1,zd=2,kn=0,dh=1,fh=2,ph=3,mh=4,mo=5,gh=6,xh=7;var _h=300,Xi=301,ds=302,el=303,nl=304,go=306,mn=1e3,Kn=1001,wa=1002,Ae=1003,kd=1004;var xo=1005;var $e=1006,il=1007;var qi=1008;var Ye=1009,vh=1010,yh=1011,cr=1012,sl=1013,Hn=1014,Vn=1015,De=1016,rl=1017,ol=1018,Yi=1020,Mh=35902,Sh=35899,bh=1021,Eh=1022,xn=1023,Qn=1026,ii=1027,Th=1028,al=1029,Zi=1030,ll=1031;var cl=1033,_o=33776,vo=33777,yo=33778,Mo=33779,hl=35840,ul=35841,dl=35842,fl=35843,pl=36196,ml=37492,gl=37496,xl=37488,_l=37489,So=37490,vl=37491,yl=37808,Ml=37809,Sl=37810,bl=37811,El=37812,Tl=37813,wl=37814,Al=37815,Rl=37816,Cl=37817,Pl=37818,Il=37819,Dl=37820,Ll=37821,Ul=36492,Nl=36494,Fl=36495,Ol=36283,Bl=36284,bo=36285,zl=36286;var Or=2300,Aa=2301,ga=2302,Yc=2303,Zc=2400,$c=2401,Jc=2402;var Hd=3200,wh=3201;var Eo=0,Vd=1,Si="",He="srgb",Br="srgb-linear",zr="linear",xe="srgb";var xa=7680;var Gd=519,Wd=512,Xd=513,qd=514,kl=515,Yd=516,Zd=517,Hl=518,$d=519,Jd=35044;var Ah="300 es",zn=2e3,Ws=2001;function Wp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kd(){let i=Xs("canvas");return i.style.display="block",i}var Vu={},qs=null;function Rh(...i){let t="THREE."+i.shift();qs?qs("log",t,...i):console.log(t,...i)}function jd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xt(...i){i=jd(i);let t="THREE."+i.shift();if(qs)qs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Yt(...i){i=jd(i);let t="THREE."+i.shift();if(qs)qs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function is(...i){let t=i.join(" ");t in Vu||(Vu[t]=!0,Xt(...i))}function Qd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var tf={[va]:ya,[Ma]:Ea,[Sa]:Ta,[Gs]:ba,[ya]:va,[Ea]:Ma,[Ta]:Sa,[ba]:Gs},ti=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gu=1234567,Lr=Math.PI/180,ss=180/Math.PI;function fs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function ie(i,t,e){return Math.max(t,Math.min(e,i))}function Ch(i,t){return(i%t+t)%t}function qp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Yp(i,t,e){return i!==t?(e-i)/(t-i):0}function Ur(i,t,e){return(1-e)*i+e*t}function Zp(i,t,e,n){return Ur(i,t,1-Math.exp(-e*n))}function $p(i,t=1){return t-Math.abs(Ch(i,t*2)-t)}function Jp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Kp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function jp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Qp(i,t){return i+Math.random()*(t-i)}function tm(i){return i*(.5-Math.random())}function em(i){i!==void 0&&(Gu=i);let t=Gu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function nm(i){return i*Lr}function im(i){return i*ss}function sm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function rm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function om(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function am(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),f=o((t-n)/2),u=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*u,a*c);break;case"YXY":i.set(l*u,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*u,a*h,a*c);break;default:Xt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Vl={DEG2RAD:Lr,RAD2DEG:ss,generateUUID:fs,clamp:ie,euclideanModulo:Ch,mapLinear:qp,inverseLerp:Yp,lerp:Ur,damp:Zp,pingpong:$p,smoothstep:Jp,smootherstep:Kp,randInt:jp,randFloat:Qp,randFloatSpread:tm,seededRandom:em,degToRad:nm,radToDeg:im,isPowerOfTwo:sm,ceilPowerOfTwo:rm,floorPowerOfTwo:om,setQuaternionFromProperEuler:am,normalize:cn,denormalize:Hs},Nh=class Nh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nh.prototype.isVector2=!0;var rt=Nh,Rn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],u=r[o+1],m=r[o+2],x=r[o+3];if(d!==x||l!==f||c!==u||h!==m){let g=l*f+c*u+h*m+d*x;g<0&&(f=-f,u=-u,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){let y=Math.acos(g),E=Math.sin(y);p=Math.sin(p*y)/E,a=Math.sin(a*y)/E,l=l*p+f*a,c=c*p+u*a,h=h*p+m*a,d=d*p+x*a}else{l=l*p+f*a,c=c*p+u*a,h=h*p+m*a,d=d*p+x*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],u=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*u-c*f,t[e+1]=l*m+h*f+c*d-a*u,t[e+2]=c*m+h*u+a*f-l*d,t[e+3]=h*m-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),u=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"YXZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"ZXY":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"ZYX":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"YZX":this._x=f*h*d+c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d-f*u*m;break;case"XZY":this._x=f*h*d-c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d+f*u*m;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>d){let u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>d){let u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Fh=class Fh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Sc.copy(this).projectOnVector(t),this.sub(Sc)}reflect(t){return this.sub(Sc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fh.prototype.isVector3=!0;var L=Fh,Sc=new L,Wu=new Rn,Oh=class Oh{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],m=n[8],x=s[0],g=s[3],p=s[6],y=s[1],E=s[4],_=s[7],b=s[2],S=s[5],A=s[8];return r[0]=o*x+a*y+l*b,r[3]=o*g+a*E+l*S,r[6]=o*p+a*_+l*A,r[1]=c*x+h*y+d*b,r[4]=c*g+h*E+d*S,r[7]=c*p+h*_+d*A,r[2]=f*x+u*y+m*b,r[5]=f*g+u*E+m*S,r[8]=f*p+u*_+m*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,m=e*d+n*f+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=u*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bc.makeScale(t,e)),this}rotate(t){return is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bc.makeRotation(-t)),this}translate(t,e){return is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Oh.prototype.isMatrix3=!0;var Kt=Oh,bc=new Kt,Xu=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qu=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lm(){let i={enabled:!0,workingColorSpace:Br,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xe&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xe&&(s.r=Vs(s.r),s.g=Vs(s.g),s.b=Vs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Si?zr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Br]:{primaries:t,whitePoint:n,transfer:zr,toXYZ:Xu,fromXYZ:qu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:Xu,fromXYZ:qu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),i}var le=lm();function xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var As,Ra=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{As===void 0&&(As=Xs("canvas")),As.width=t.width,As.height=t.height;let s=As.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=As}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Xs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xi(e[n]/255)*255):e[n]=xi(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cm=0,Ys=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=fs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ec(s[o].image)):r.push(Ec(s[o]))}else r=Ec(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ec(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ra.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}var hm=0,Tc=new L,tn=class i extends ti{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Kn,s=Kn,r=$e,o=qi,a=xn,l=Ye,c=i.DEFAULT_ANISOTROPY,h=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=fs(),this.name="",this.source=new Ys(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Tc).x}get height(){return this.source.getSize(Tc).y}get depth(){return this.source.getSize(Tc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_h)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mn:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mn:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=_h;tn.DEFAULT_ANISOTROPY=1;var Bh=class Bh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,_=(u+1)/2,b=(p+1)/2,S=(h+f)/4,A=(d+x)/4,v=(m+g)/4;return E>_&&E>b?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=S/n,r=A/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=v/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=A/r,s=v/r),this.set(n,s,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(d-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bh.prototype.isVector4=!0;var Re=Bh,Ca=class extends ti{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new tn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:$e,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ys(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ie=class extends Ca{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},kr=class extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pa=class extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Qa=class Qa{constructor(t,e,n,s,r,o,a,l,c,h,d,f,u,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,f,u,m,x,g)}set(t,e,n,s,r,o,a,l,c,h,d,f,u,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Rs.setFromMatrixColumn(t,0).length(),r=1/Rs.setFromMatrixColumn(t,1).length(),o=1/Rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,u=o*d,m=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+m*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=m+u*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,u=l*d,m=c*h,x=c*d;e[0]=f+x*a,e[4]=m*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-m,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,u=l*d,m=c*h,x=c*d;e[0]=f-x*a,e[4]=-o*d,e[8]=m+u*a,e[1]=u+m*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,u=o*d,m=a*h,x=a*d;e[0]=l*h,e[4]=m*c-u,e[8]=f*c+x,e[1]=l*d,e[5]=x*c+f,e[9]=u*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,u=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-f*d,e[8]=m*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+m,e[10]=f-x*d}else if(t.order==="XZY"){let f=o*l,u=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+x,e[5]=o*h,e[9]=u*d-m,e[2]=m*d-u,e[6]=a*h,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(um,t,dm)}lookAt(t,e,n){let s=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Di.crossVectors(n,Mn),Di.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Di.crossVectors(n,Mn)),Di.normalize(),Yo.crossVectors(Mn,Di),s[0]=Di.x,s[4]=Yo.x,s[8]=Mn.x,s[1]=Di.y,s[5]=Yo.y,s[9]=Mn.y,s[2]=Di.z,s[6]=Yo.z,s[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],m=n[2],x=n[6],g=n[10],p=n[14],y=n[3],E=n[7],_=n[11],b=n[15],S=s[0],A=s[4],v=s[8],w=s[12],C=s[1],D=s[5],I=s[9],O=s[13],U=s[2],z=s[6],X=s[10],G=s[14],j=s[3],W=s[7],Q=s[11],et=s[15];return r[0]=o*S+a*C+l*U+c*j,r[4]=o*A+a*D+l*z+c*W,r[8]=o*v+a*I+l*X+c*Q,r[12]=o*w+a*O+l*G+c*et,r[1]=h*S+d*C+f*U+u*j,r[5]=h*A+d*D+f*z+u*W,r[9]=h*v+d*I+f*X+u*Q,r[13]=h*w+d*O+f*G+u*et,r[2]=m*S+x*C+g*U+p*j,r[6]=m*A+x*D+g*z+p*W,r[10]=m*v+x*I+g*X+p*Q,r[14]=m*w+x*O+g*G+p*et,r[3]=y*S+E*C+_*U+b*j,r[7]=y*A+E*D+_*z+b*W,r[11]=y*v+E*I+_*X+b*Q,r[15]=y*w+E*O+_*G+b*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],m=t[3],x=t[7],g=t[11],p=t[15],y=l*u-c*f,E=a*u-c*d,_=a*f-l*d,b=o*u-c*h,S=o*f-l*h,A=o*d-a*h;return e*(x*y-g*E+p*_)-n*(m*y-g*b+p*S)+s*(m*E-x*b+p*A)-r*(m*_-x*S+g*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],m=t[12],x=t[13],g=t[14],p=t[15],y=e*a-n*o,E=e*l-s*o,_=e*c-r*o,b=n*l-s*a,S=n*c-r*a,A=s*c-r*l,v=h*x-d*m,w=h*g-f*m,C=h*p-u*m,D=d*g-f*x,I=d*p-u*x,O=f*p-u*g,U=y*O-E*I+_*D+b*C-S*w+A*v;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/U;return t[0]=(a*O-l*I+c*D)*z,t[1]=(s*I-n*O-r*D)*z,t[2]=(x*A-g*S+p*b)*z,t[3]=(f*S-d*A-u*b)*z,t[4]=(l*C-o*O-c*w)*z,t[5]=(e*O-s*C+r*w)*z,t[6]=(g*_-m*A-p*E)*z,t[7]=(h*A-f*_+u*E)*z,t[8]=(o*I-a*C+c*v)*z,t[9]=(n*C-e*I-r*v)*z,t[10]=(m*S-x*_+p*y)*z,t[11]=(d*_-h*S-u*y)*z,t[12]=(a*w-o*D-l*v)*z,t[13]=(e*D-n*w+s*v)*z,t[14]=(x*E-m*b-g*y)*z,t[15]=(h*b-d*E+f*y)*z,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,m=r*d,x=o*h,g=o*d,p=a*d,y=l*c,E=l*h,_=l*d,b=n.x,S=n.y,A=n.z;return s[0]=(1-(x+p))*b,s[1]=(u+_)*b,s[2]=(m-E)*b,s[3]=0,s[4]=(u-_)*S,s[5]=(1-(f+p))*S,s[6]=(g+y)*S,s[7]=0,s[8]=(m+E)*A,s[9]=(g-y)*A,s[10]=(1-(f+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Rs.set(s[0],s[1],s[2]).length(),a=Rs.set(s[4],s[5],s[6]).length(),l=Rs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Nn.copy(this);let c=1/o,h=1/a,d=1/l;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=d,Nn.elements[9]*=d,Nn.elements[10]*=d,e.setFromRotationMatrix(Nn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=zn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===zn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ws)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=zn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),f=-(e+t)/(e-t),u=-(n+s)/(n-s),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===zn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===Ws)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Qa.prototype.isMatrix4=!0;var oe=Qa,Rs=new L,Nn=new oe,um=new L(0,0,0),dm=new L(1,1,1),Di=new L,Yo=new L,Mn=new L,Yu=new oe,Zu=new Rn,_i=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zu.setFromEuler(this),this.setFromQuaternion(Zu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_i.DEFAULT_ORDER="XYZ";var Zs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},fm=0,$u=new L,Cs=new Rn,di=new oe,Zo=new L,Ar=new L,pm=new L,mm=new Rn,Ju=new L(1,0,0),Ku=new L(0,1,0),ju=new L(0,0,1),Qu={type:"added"},gm={type:"removed"},Ps={type:"childadded",child:null},wc={type:"childremoved",child:null},Be=class i extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new _i,n=new Rn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Kt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.premultiply(Cs),this}rotateX(t){return this.rotateOnAxis(Ju,t)}rotateY(t){return this.rotateOnAxis(Ku,t)}rotateZ(t){return this.rotateOnAxis(ju,t)}translateOnAxis(t,e){return $u.copy(t).applyQuaternion(this.quaternion),this.position.add($u.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ju,t)}translateY(t){return this.translateOnAxis(Ku,t)}translateZ(t){return this.translateOnAxis(ju,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zo.copy(t):Zo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Ar,Zo,this.up):di.lookAt(Zo,Ar,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(di),this.quaternion.premultiply(Cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qu),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gm),wc.child=t,this.dispatchEvent(wc),wc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),di.multiply(t.parent.matrixWorld)),t.applyMatrix4(di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qu),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,t,pm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,mm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Be.DEFAULT_UP=new L(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var de=class extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}},xm={type:"move"},$s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new de,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new de,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new de,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,m=.005;c.inputState.pinching&&f>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new de;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},$o={h:0,s:0,l:0};function Ac(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ot=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=Ch(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ac(o,r,t+1/3),this.g=Ac(o,r,t),this.b=Ac(o,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=He){function n(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){let n=ef[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xi(t.r),this.g=xi(t.g),this.b=xi(t.b),this}copyLinearToSRGB(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return le.workingToColorSpace(Qe.copy(this),t),Math.round(ie(Qe.r*255,0,255))*65536+Math.round(ie(Qe.g*255,0,255))*256+Math.round(ie(Qe.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(Qe.copy(this),e);let n=Qe.r,s=Qe.g,r=Qe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=He){le.workingToColorSpace(Qe.copy(this),t);let e=Qe.r,n=Qe.g,s=Qe.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+e,Li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Li),t.getHSL($o);let n=Ur(Li.h,$o.h,e),s=Ur(Li.s,$o.s,e),r=Ur(Li.l,$o.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qe=new Ot;Ot.NAMES=ef;var Hr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Js=class extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fn=new L,fi=new L,Rc=new L,pi=new L,Is=new L,Ds=new L,td=new L,Cc=new L,Pc=new L,Ic=new L,Dc=new Re,Lc=new Re,Uc=new Re,Oi=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fn.subVectors(t,e),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Fn.subVectors(s,e),fi.subVectors(n,e),Rc.subVectors(t,e);let o=Fn.dot(Fn),a=Fn.dot(fi),l=Fn.dot(Rc),c=fi.dot(fi),h=fi.dot(Rc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-u-m,m,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Dc.setScalar(0),Lc.setScalar(0),Uc.setScalar(0),Dc.fromBufferAttribute(t,e),Lc.fromBufferAttribute(t,n),Uc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Dc,r.x),o.addScaledVector(Lc,r.y),o.addScaledVector(Uc,r.z),o}static isFrontFacing(t,e,n,s){return Fn.subVectors(n,e),fi.subVectors(t,e),Fn.cross(fi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Fn.cross(fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Is.subVectors(s,n),Ds.subVectors(r,n),Cc.subVectors(t,n);let l=Is.dot(Cc),c=Ds.dot(Cc);if(l<=0&&c<=0)return e.copy(n);Pc.subVectors(t,s);let h=Is.dot(Pc),d=Ds.dot(Pc);if(h>=0&&d<=h)return e.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Is,o);Ic.subVectors(t,r);let u=Is.dot(Ic),m=Ds.dot(Ic);if(m>=0&&u<=m)return e.copy(r);let x=u*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Ds,a);let g=h*m-u*d;if(g<=0&&d-h>=0&&u-m>=0)return td.subVectors(r,s),a=(d-h)/(d-h+(u-m)),e.copy(s).addScaledVector(td,a);let p=1/(g+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(Is,o).addScaledVector(Ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Cn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jo.copy(n.boundingBox)),Jo.applyMatrix4(t.matrixWorld),this.union(Jo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rr),Ko.subVectors(this.max,Rr),Ls.subVectors(t.a,Rr),Us.subVectors(t.b,Rr),Ns.subVectors(t.c,Rr),Ui.subVectors(Us,Ls),Ni.subVectors(Ns,Us),Qi.subVectors(Ls,Ns);let e=[0,-Ui.z,Ui.y,0,-Ni.z,Ni.y,0,-Qi.z,Qi.y,Ui.z,0,-Ui.x,Ni.z,0,-Ni.x,Qi.z,0,-Qi.x,-Ui.y,Ui.x,0,-Ni.y,Ni.x,0,-Qi.y,Qi.x,0];return!Nc(e,Ls,Us,Ns,Ko)||(e=[1,0,0,0,1,0,0,0,1],!Nc(e,Ls,Us,Ns,Ko))?!1:(jo.crossVectors(Ui,Ni),e=[jo.x,jo.y,jo.z],Nc(e,Ls,Us,Ns,Ko))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},mi=[new L,new L,new L,new L,new L,new L,new L,new L],On=new L,Jo=new Cn,Ls=new L,Us=new L,Ns=new L,Ui=new L,Ni=new L,Qi=new L,Rr=new L,Ko=new L,jo=new L,ts=new L;function Nc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ts.fromArray(i,r);let a=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),l=t.dot(ts),c=e.dot(ts),h=n.dot(ts);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Oe=new L,Qo=new rt,_m=0,pn=class extends ti{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_m++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jd,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qo.fromBufferAttribute(this,e),Qo.applyMatrix3(t),this.setXY(e,Qo.x,Qo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Hs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Vr=class extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Gr=class extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var te=class extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}},vm=new Cn,Cr=new L,Fc=new L,rs=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):vm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cr.subVectors(t,this.center);let e=Cr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Cr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cr.copy(t.center).add(Fc)),this.expandByPoint(Cr.copy(t.center).sub(Fc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ym=0,An=new oe,Oc=new Be,Fs=new L,Sn=new Cn,Pr=new Cn,Xe=new L,Me=class i extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wp(t)?Gr:Vr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return An.makeRotationFromQuaternion(t),this.applyMatrix4(An),this}rotateX(t){return An.makeRotationX(t),this.applyMatrix4(An),this}rotateY(t){return An.makeRotationY(t),this.applyMatrix4(An),this}rotateZ(t){return An.makeRotationZ(t),this.applyMatrix4(An),this}translate(t,e,n){return An.makeTranslation(t,e,n),this.applyMatrix4(An),this}scale(t,e,n){return An.makeScale(t,e,n),this.applyMatrix4(An),this}lookAt(t){return Oc.lookAt(t),Oc.updateMatrix(),this.applyMatrix4(Oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Pr.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(Sn.min,Pr.min),Sn.expandByPoint(Xe),Xe.addVectors(Sn.max,Pr.max),Sn.expandByPoint(Xe)):(Sn.expandByPoint(Pr.min),Sn.expandByPoint(Pr.max))}Sn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Xe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Xe.fromBufferAttribute(a,c),l&&(Fs.fromBufferAttribute(t,c),Xe.add(Fs)),s=Math.max(s,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new pn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new L,l[v]=new L;let c=new L,h=new L,d=new L,f=new rt,u=new rt,m=new rt,x=new L,g=new L;function p(v,w,C){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,C),f.fromBufferAttribute(r,v),u.fromBufferAttribute(r,w),m.fromBufferAttribute(r,C),h.sub(c),d.sub(c),u.sub(f),m.sub(f);let D=1/(u.x*m.y-m.x*u.y);isFinite(D)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(d,-u.y).multiplyScalar(D),g.copy(d).multiplyScalar(u.x).addScaledVector(h,-m.x).multiplyScalar(D),a[v].add(x),a[w].add(x),a[C].add(x),l[v].add(g),l[w].add(g),l[C].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let v=0,w=y.length;v<w;++v){let C=y[v],D=C.start,I=C.count;for(let O=D,U=D+I;O<U;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let E=new L,_=new L,b=new L,S=new L;function A(v){b.fromBufferAttribute(s,v),S.copy(b);let w=a[v];E.copy(w),E.sub(b.multiplyScalar(b.dot(w))).normalize(),_.crossVectors(S,w);let D=_.dot(l[v])<0?-1:1;o.setXYZW(v,E.x,E.y,E.z,D)}for(let v=0,w=y.length;v<w;++v){let C=y[v],D=C.start,I=C.count;for(let O=D,U=D+I;O<U;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,d=new L;if(t)for(let f=0,u=t.count;f<u;f+=3){let m=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),u=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?u=l[x]*a.data.stride+a.offset:u=l[x]*h;for(let p=0;p<h;p++)f[m++]=c[u++]}return new pn(f,h,d)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Bc=new L,Mm=new L,Sm=new Kt,Bn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Bc.subVectors(n,e).cross(Mm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Bc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Sm.getNormalMatrix(t),s=this.coplanarPoint(Bc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},bm=0,ei=class extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=lr,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ch,this.blendDst=hh,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xa,this.stencilZFail=xa,this.stencilZPass=xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ot().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Bn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new rt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var gi=new L,zc=new L,ta=new L,ea=new L,Ks=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gi.copy(this.origin).addScaledVector(this.direction,e),gi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){zc.copy(t).add(e).multiplyScalar(.5),ta.copy(e).sub(t).normalize(),ea.copy(this.origin).sub(zc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ta),a=ea.dot(this.direction),l=-ea.dot(ta),c=ea.lengthSq(),h=Math.abs(1-o*o),d,f,u,m;if(h>0)if(d=o*l-a,f=o*a-l,m=r*h,d>=0)if(f>=-m)if(f<=m){let x=1/h;d*=x,f*=x,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(zc).addScaledVector(ta,f),u}intersectSphere(t,e){if(t.radius<0)return null;gi.subVectors(t.center,this.origin);let n=gi.dot(this.direction),s=gi.dot(gi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,gi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,f=t.y-o.y,u=t.z-o.z,m=e.x-o.x,x=e.y-o.y,g=e.z-o.z,p=n.x-o.x,y=n.y-o.y,E=n.z-o.z,_=Math.abs(l),b=Math.abs(c),S=Math.abs(h),A,v,w,C,D,I,O,U,z,X,G,j;if(_>=b&&_>=S?(w=l,I=d,z=m,j=p,l>=0?(A=c,v=h,C=f,D=u,O=x,U=g,X=y,G=E):(A=h,v=c,C=u,D=f,O=g,U=x,X=E,G=y)):b>=S?(w=c,I=f,z=x,j=y,c>=0?(A=h,v=l,C=u,D=d,O=g,U=m,X=E,G=p):(A=l,v=h,C=d,D=u,O=m,U=g,X=p,G=E)):(w=h,I=u,z=g,j=E,h>=0?(A=l,v=c,C=d,D=f,O=m,U=x,X=p,G=y):(A=c,v=l,C=f,D=d,O=x,U=m,X=y,G=p)),w===0)return null;let W=A/w,Q=v/w,et=1/w,ot=C-W*I,pt=D-Q*I,Zt=O-W*z,Wt=U-Q*z,$t=X-W*j,K=G-Q*j,tt=$t*Wt-K*Zt,gt=ot*K-pt*$t,Ut=Zt*pt-Wt*ot;if(s){if(tt<0||gt<0||Ut<0)return null}else if((tt<0||gt<0||Ut<0)&&(tt>0||gt>0||Ut>0))return null;let wt=tt+gt+Ut;if(wt===0)return null;let Ht=et*(tt*I+gt*z+Ut*j);return(wt>0?Ht<0:Ht>0)?null:this.at(Ht/wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},en=class extends ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ed=new oe,es=new Ks,na=new rs,nd=new L,ia=new L,sa=new L,ra=new L,kc=new L,oa=new L,id=new L,aa=new L,pe=class extends Be{constructor(t=new Me,e=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){oa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(kc.fromBufferAttribute(d,t),o?oa.addScaledVector(kc,h):oa.addScaledVector(kc.sub(e),h))}e.add(oa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(r),es.copy(t.ray).recast(t.near),!(na.containsPoint(es.origin)===!1&&(es.intersectSphere(na,nd)===null||es.origin.distanceToSquared(nd)>(t.far-t.near)**2))&&(ed.copy(r).invert(),es.copy(t.ray).applyMatrix4(ed),!(n.boundingBox!==null&&es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,es)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],y=Math.max(g.start,u.start),E=Math.min(a.count,Math.min(g.start+g.count,u.start+u.count));for(let _=y,b=E;_<b;_+=3){let S=a.getX(_),A=a.getX(_+1),v=a.getX(_+2);s=la(this,p,t,n,c,h,d,S,A,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let g=m,p=x;g<p;g+=3){let y=a.getX(g),E=a.getX(g+1),_=a.getX(g+2);s=la(this,o,t,n,c,h,d,y,E,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],y=Math.max(g.start,u.start),E=Math.min(l.count,Math.min(g.start+g.count,u.start+u.count));for(let _=y,b=E;_<b;_+=3){let S=_,A=_+1,v=_+2;s=la(this,p,t,n,c,h,d,S,A,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let g=m,p=x;g<p;g+=3){let y=g,E=g+1,_=g+2;s=la(this,o,t,n,c,h,d,y,E,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Em(i,t,e,n,s,r,o,a){let l;if(t.side===hn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Wi,a),l===null)return null;aa.copy(a),aa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(aa);return c<e.near||c>e.far?null:{distance:c,point:aa.clone(),object:i}}function la(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ia),i.getVertexPosition(l,sa),i.getVertexPosition(c,ra);let h=Em(i,t,e,n,ia,sa,ra,id);if(h){let d=new L;Oi.getBarycoord(id,ia,sa,ra,d),s&&(h.uv=Oi.getInterpolatedAttribute(s,a,l,c,d,new rt)),r&&(h.uv1=Oi.getInterpolatedAttribute(r,a,l,c,d,new rt)),o&&(h.normal=Oi.getInterpolatedAttribute(o,a,l,c,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new L,materialIndex:0};Oi.getNormal(ia,sa,ra,f.normal),h.face=f,h.barycoord=d}return h}var Bi=class extends tn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ae,h=Ae,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ns=new rs,Tm=new rt(.5,.5),ca=new L,js=class{constructor(t=new Bn,e=new Bn,n=new Bn,s=new Bn,r=new Bn,o=new Bn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],m=r[8],x=r[9],g=r[10],p=r[11],y=r[12],E=r[13],_=r[14],b=r[15];if(s[0].setComponents(c-o,u-h,p-m,b-y).normalize(),s[1].setComponents(c+o,u+h,p+m,b+y).normalize(),s[2].setComponents(c+a,u+d,p+x,b+E).normalize(),s[3].setComponents(c-a,u-d,p-x,b-E).normalize(),n)s[4].setComponents(l,f,g,_).normalize(),s[5].setComponents(c-l,u-f,p-g,b-_).normalize();else if(s[4].setComponents(c-l,u-f,p-g,b-_).normalize(),e===zn)s[5].setComponents(c+l,u+f,p+g,b+_).normalize();else if(e===Ws)s[5].setComponents(l,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(t){ns.center.set(0,0,0);let e=Tm.distanceTo(t.center);return ns.radius=.7071067811865476+e,ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ca.x=s.normal.x>0?t.max.x:t.min.x,ca.y=s.normal.y>0?t.max.y:t.min.y,ca.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ca)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Wr=class extends ei{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ia=new L,Da=new L,sd=new oe,Ir=new Ks,ha=new rs,Hc=new L,rd=new L,Xr=class extends Be{constructor(t=new Me,e=new Wr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ia.fromBufferAttribute(e,s-1),Da.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ia.distanceTo(Da);t.setAttribute("lineDistance",new te(n,1))}else Xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(s),ha.radius+=r,t.ray.intersectsSphere(ha)===!1)return;sd.copy(s).invert(),Ir.copy(t.ray).applyMatrix4(sd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let u=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=u,g=m-1;x<g;x+=c){let p=h.getX(x),y=h.getX(x+1),E=ua(this,t,Ir,l,p,y,x);E&&e.push(E)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(u),p=ua(this,t,Ir,l,x,g,m-1);p&&e.push(p)}}else{let u=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=u,g=m-1;x<g;x+=c){let p=ua(this,t,Ir,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=ua(this,t,Ir,l,m-1,u,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ua(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Ia.fromBufferAttribute(a,s),Da.fromBufferAttribute(a,r),e.distanceSqToSegment(Ia,Da,Hc,rd)>n)return;Hc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Hc);if(!(c<t.near||c>t.far))return{distance:c,point:rd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var qr=class extends tn{constructor(t=[],e=Xi,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},zi=class extends tn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ni=class extends tn{constructor(t,e,n=Hn,s,r,o,a=Ae,l=Ae,c,h=Qn,d=1){if(h!==Qn&&h!==ii)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ys(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},La=class extends ni{constructor(t,e=Hn,n=Xi,s,r,o=Ae,a=Ae,l,c=Qn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Yr=class extends tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},he=class i extends Me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,u=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(d,2));function m(x,g,p,y,E,_,b,S,A,v,w){let C=_/A,D=b/v,I=_/2,O=b/2,U=S/2,z=A+1,X=v+1,G=0,j=0,W=new L;for(let Q=0;Q<X;Q++){let et=Q*D-O;for(let ot=0;ot<z;ot++){let pt=ot*C-I;W[x]=pt*y,W[g]=et*E,W[p]=U,c.push(W.x,W.y,W.z),W[x]=0,W[g]=0,W[p]=S>0?1:-1,h.push(W.x,W.y,W.z),d.push(ot/A),d.push(1-Q/v),G+=1}}for(let Q=0;Q<v;Q++)for(let et=0;et<A;et++){let ot=f+et+z*Q,pt=f+et+z*(Q+1),Zt=f+(et+1)+z*(Q+1),Wt=f+(et+1)+z*Q;l.push(ot,pt,Wt),l.push(pt,Zt,Wt),j+=6}a.addGroup(u,j,w),u+=j,f+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Zr=class i extends Me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new L,h=new rt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let u=n+d/e*s;c.x=t*Math.cos(u),c.y=t*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ze=class i extends Me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],u=[],m=0,x=[],g=n/2,p=0;y(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new te(d,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(u,2));function y(){let _=new L,b=new L,S=0,A=(e-t)/n;for(let v=0;v<=r;v++){let w=[],C=v/r,D=C*(e-t)+t;for(let I=0;I<=s;I++){let O=I/s,U=O*l+a,z=Math.sin(U),X=Math.cos(U);b.x=D*z,b.y=-C*n+g,b.z=D*X,d.push(b.x,b.y,b.z),_.set(z,A,X).normalize(),f.push(_.x,_.y,_.z),u.push(O,1-C),w.push(m++)}x.push(w)}for(let v=0;v<s;v++)for(let w=0;w<r;w++){let C=x[w][v],D=x[w+1][v],I=x[w+1][v+1],O=x[w][v+1];(t>0||w!==0)&&(h.push(C,D,O),S+=3),(e>0||w!==r-1)&&(h.push(D,I,O),S+=3)}c.addGroup(p,S,0),p+=S}function E(_){let b=m,S=new rt,A=new L,v=0,w=_===!0?t:e,C=_===!0?1:-1;for(let I=1;I<=s;I++)d.push(0,g*C,0),f.push(0,C,0),u.push(.5,.5),m++;let D=m;for(let I=0;I<=s;I++){let U=I/s*l+a,z=Math.cos(U),X=Math.sin(U);A.x=w*X,A.y=g*C,A.z=w*z,d.push(A.x,A.y,A.z),f.push(0,C,0),S.x=z*.5+.5,S.y=X*.5*C+.5,u.push(S.x,S.y),m++}for(let I=0;I<s;I++){let O=b+I,U=D+I;_===!0?h.push(U,U+1,O):h.push(U+1,U,O),v+=3}c.addGroup(p,v,_===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,u=(o-h)/f;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new rt:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,s=[],r=[],o=[],a=new L,l=new oe;for(let u=0;u<=t;u++){let m=u/t;s[u]=this.getTangentAt(m,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(ie(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,m))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(ie(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],u*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Qs=class extends bn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new rt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ua=class extends Qs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ph(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,s(o,a,f,u)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var od=new L,ad=new L,Vc=new Ph,Gc=new Ph,Wc=new Ph,Pn=class extends bn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ad.subVectors(s[0],s[1]).add(s[0]),c=ad);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(od.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=od),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),u),x=Math.pow(d.distanceToSquared(f),u),g=Math.pow(f.distanceToSquared(h),u);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Vc.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,m,x,g),Gc.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,m,x,g),Wc.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Vc.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Gc.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Wc.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(Vc.calc(l),Gc.calc(l),Wc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ld(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function wm(i,t){let e=1-i;return e*e*t}function Am(i,t){return 2*(1-i)*i*t}function Rm(i,t){return i*i*t}function Nr(i,t,e,n){return wm(i,t)+Am(i,e)+Rm(i,n)}function Cm(i,t){let e=1-i;return e*e*e*t}function Pm(i,t){let e=1-i;return 3*e*e*i*t}function Im(i,t){return 3*(1-i)*i*i*t}function Dm(i,t){return i*i*i*t}function Fr(i,t,e,n,s){return Cm(i,t)+Pm(i,e)+Im(i,n)+Dm(i,s)}var $r=class extends bn{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fr(t,s.x,r.x,o.x,a.x),Fr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Na=class extends bn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fr(t,s.x,r.x,o.x,a.x),Fr(t,s.y,r.y,o.y,a.y),Fr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Jr=class extends bn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fa=class extends bn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Kr=class extends bn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Nr(t,s.x,r.x,o.x),Nr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jr=class extends bn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Nr(t,s.x,r.x,o.x),Nr(t,s.y,r.y,o.y),Nr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qr=class extends bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(ld(a,l.x,c.x,h.x,d.x),ld(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new rt().fromArray(s))}return this}},Oa=Object.freeze({__proto__:null,ArcCurve:Ua,CatmullRomCurve3:Pn,CubicBezierCurve:$r,CubicBezierCurve3:Na,EllipseCurve:Qs,LineCurve:Jr,LineCurve3:Fa,QuadraticBezierCurve:Kr,QuadraticBezierCurve3:jr,SplineCurve:Qr}),Ba=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oa[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Oa[s.type]().fromJSON(s))}return this}},vi=class extends Ba{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Jr(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Kr(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new $r(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Qr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Qs(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},gn=class extends vi{constructor(t){super(t),this.uuid=fs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new vi().fromJSON(s))}return this}};function Lm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=nf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Bm(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,d=l;for(let f=e;f<s;f+=e){let u=i[f],m=i[f+1];u<a&&(a=u),m<l&&(l=m),u>h&&(h=u),m>d&&(d=m)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return to(r,o,e,a,l,c,0),o}function nf(i,t,e,n,s){let r;if(s===$m(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=cd(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=cd(o/n|0,i[o],i[o+1],r);return r&&tr(r,r.next)&&(no(r),r=r.next),r}function os(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(tr(e,e.next)||Pe(e.prev,e,e.next)===0)){if(no(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function to(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Gm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Nm(i,n,s,r):Um(i)){t.push(l.i,i.i,c.i),no(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Fm(os(i),t),to(i,t,e,n,s,r,2)):o===2&&Om(i,t,e,n,s,r):to(os(i),t,e,n,s,r,1);break}}}function Um(i){let t=i.prev,e=i,n=i.next;if(Pe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),f=Math.max(s,r,o),u=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=d&&m.y<=u&&Dr(s,a,r,l,o,c,m.x,m.y)&&Pe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Nm(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Pe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,f=o.y,u=Math.min(a,l,c),m=Math.min(h,d,f),x=Math.max(a,l,c),g=Math.max(h,d,f),p=Kc(u,m,t,e,n),y=Kc(x,g,t,e,n),E=i.prevZ,_=i.nextZ;for(;E&&E.z>=p&&_&&_.z<=y;){if(E.x>=u&&E.x<=x&&E.y>=m&&E.y<=g&&E!==s&&E!==o&&Dr(a,h,l,d,c,f,E.x,E.y)&&Pe(E.prev,E,E.next)>=0||(E=E.prevZ,_.x>=u&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Dr(a,h,l,d,c,f,_.x,_.y)&&Pe(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;E&&E.z>=p;){if(E.x>=u&&E.x<=x&&E.y>=m&&E.y<=g&&E!==s&&E!==o&&Dr(a,h,l,d,c,f,E.x,E.y)&&Pe(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;_&&_.z<=y;){if(_.x>=u&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Dr(a,h,l,d,c,f,_.x,_.y)&&Pe(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Fm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!tr(n,s)&&rf(n,e,e.next,s)&&eo(n,s)&&eo(s,n)&&(t.push(n.i,e.i,s.i),no(e),no(e.next),e=i=s),e=e.next}while(e!==i);return os(e)}function Om(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&qm(o,a)){let l=of(o,a);o=os(o,o.next),l=os(l,l.next),to(o,t,e,n,s,r,0),to(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Bm(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=nf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Xm(c))}s.sort(zm);for(let r=0;r<s.length;r++)e=km(s[r],e);return e}function zm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function km(i,t){let e=Hm(i,t);if(!e)return t;let n=of(e,i);return os(n,n.next),os(e,e.next)}function Hm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(tr(i,e))return e;do{if(tr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&sf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);eo(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Vm(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Vm(i,t){return Pe(i.prev,i,t.prev)<0&&Pe(t.next,i,i.next)<0}function Gm(i,t,e,n){let s=i;do s.z===0&&(s.z=Kc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Wm(s)}function Wm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Kc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Xm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function sf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Dr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&sf(i,t,e,n,s,r,o,a)}function qm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ym(i,t)&&(eo(i,t)&&eo(t,i)&&Zm(i,t)&&(Pe(i.prev,i,t.prev)||Pe(i,t.prev,t))||tr(i,t)&&Pe(i.prev,i,i.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function tr(i,t){return i.x===t.x&&i.y===t.y}function rf(i,t,e,n){let s=fa(Pe(i,t,e)),r=fa(Pe(i,t,n)),o=fa(Pe(e,n,i)),a=fa(Pe(e,n,t));return!!(s!==r&&o!==a||s===0&&da(i,e,t)||r===0&&da(i,n,t)||o===0&&da(e,i,n)||a===0&&da(e,t,n))}function da(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function fa(i){return i>0?1:i<0?-1:0}function Ym(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&rf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function eo(i,t){return Pe(i.prev,i,i.next)<0?Pe(i,t,i.next)>=0&&Pe(i,i.prev,t)>=0:Pe(i,t,i.prev)<0||Pe(i,i.next,t)<0}function Zm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function of(i,t){let e=jc(i.i,i.x,i.y),n=jc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function cd(i,t,e,n){let s=jc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function no(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function jc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function $m(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Qc=class{static triangulate(t,e,n=2){return Lm(t,e,n)}},jn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];hd(t),ud(n,t);let o=t.length;e.forEach(hd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,ud(n,e[l]);let a=Qc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function hd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ud(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var yi=class i extends Me{constructor(t=new gn([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new te(s,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:u-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Jm,E,_=!1,b,S,A,v;if(p){E=p.getSpacedPoints(h),_=!0,f=!1;let nt=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(h,nt),S=new L,A=new L,v=new L}f||(g=0,u=0,m=0,x=0);let w=a.extractPoints(c),C=w.shape,D=w.holes;if(!jn.isClockWise(C)){C=C.reverse();for(let nt=0,lt=D.length;nt<lt;nt++){let ut=D[nt];jn.isClockWise(ut)&&(D[nt]=ut.reverse())}}function O(nt){let ut=10000000000000001e-36,ft=nt[0];for(let xt=1;xt<=nt.length;xt++){let zt=xt%nt.length,Lt=nt[zt],Gt=Lt.x-ft.x,Vt=Lt.y-ft.y,B=Gt*Gt+Vt*Vt,se=Math.max(Math.abs(Lt.x),Math.abs(Lt.y),Math.abs(ft.x),Math.abs(ft.y)),Jt=ut*se*se;if(B<=Jt){nt.splice(zt,1),xt--;continue}ft=Lt}}O(C),D.forEach(O);let U=D.length,z=C;for(let nt=0;nt<U;nt++){let lt=D[nt];C=C.concat(lt)}function X(nt,lt,ut){return lt||Yt("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(lt,ut)}let G=C.length;function j(nt,lt,ut){let ft,xt,zt,Lt=nt.x-lt.x,Gt=nt.y-lt.y,Vt=ut.x-nt.x,B=ut.y-nt.y,se=Lt*Lt+Gt*Gt,Jt=Lt*B-Gt*Vt;if(Math.abs(Jt)>Number.EPSILON){let R=Math.sqrt(se),M=Math.sqrt(Vt*Vt+B*B),P=lt.x-Gt/R,F=lt.y+Lt/R,V=ut.x-B/M,st=ut.y+Vt/M,ht=((V-P)*B-(st-F)*Vt)/(Lt*B-Gt*Vt);ft=P+Lt*ht-nt.x,xt=F+Gt*ht-nt.y;let Z=ft*ft+xt*xt;if(Z<=2)return new rt(ft,xt);zt=Math.sqrt(Z/2)}else{let R=!1;Lt>Number.EPSILON?Vt>Number.EPSILON&&(R=!0):Lt<-Number.EPSILON?Vt<-Number.EPSILON&&(R=!0):Math.sign(Gt)===Math.sign(B)&&(R=!0),R?(ft=-Gt,xt=Lt,zt=Math.sqrt(se)):(ft=Lt,xt=Gt,zt=Math.sqrt(se/2))}return new rt(ft/zt,xt/zt)}let W=[];for(let nt=0,lt=z.length,ut=lt-1,ft=nt+1;nt<lt;nt++,ut++,ft++)ut===lt&&(ut=0),ft===lt&&(ft=0),W[nt]=j(z[nt],z[ut],z[ft]);let Q=[],et,ot=W.concat();for(let nt=0,lt=U;nt<lt;nt++){let ut=D[nt];et=[];for(let ft=0,xt=ut.length,zt=xt-1,Lt=ft+1;ft<xt;ft++,zt++,Lt++)zt===xt&&(zt=0),Lt===xt&&(Lt=0),et[ft]=j(ut[ft],ut[zt],ut[Lt]);Q.push(et),ot=ot.concat(et)}let pt;if(g===0)pt=jn.triangulateShape(z,D);else{let nt=[],lt=[];for(let ut=0;ut<g;ut++){let ft=ut/g,xt=u*Math.cos(ft*Math.PI/2),zt=m*Math.sin(ft*Math.PI/2)+x;for(let Lt=0,Gt=z.length;Lt<Gt;Lt++){let Vt=X(z[Lt],W[Lt],zt);gt(Vt.x,Vt.y,-xt),ft===0&&nt.push(Vt)}for(let Lt=0,Gt=U;Lt<Gt;Lt++){let Vt=D[Lt];et=Q[Lt];let B=[];for(let se=0,Jt=Vt.length;se<Jt;se++){let R=X(Vt[se],et[se],zt);gt(R.x,R.y,-xt),ft===0&&B.push(R)}ft===0&&lt.push(B)}}pt=jn.triangulateShape(nt,lt)}let Zt=pt.length,Wt=m+x;for(let nt=0;nt<G;nt++){let lt=f?X(C[nt],ot[nt],Wt):C[nt];_?(A.copy(b.normals[0]).multiplyScalar(lt.x),S.copy(b.binormals[0]).multiplyScalar(lt.y),v.copy(E[0]).add(A).add(S),gt(v.x,v.y,v.z)):gt(lt.x,lt.y,0)}for(let nt=1;nt<=h;nt++)for(let lt=0;lt<G;lt++){let ut=f?X(C[lt],ot[lt],Wt):C[lt];_?(A.copy(b.normals[nt]).multiplyScalar(ut.x),S.copy(b.binormals[nt]).multiplyScalar(ut.y),v.copy(E[nt]).add(A).add(S),gt(v.x,v.y,v.z)):gt(ut.x,ut.y,d/h*nt)}for(let nt=g-1;nt>=0;nt--){let lt=nt/g,ut=u*Math.cos(lt*Math.PI/2),ft=m*Math.sin(lt*Math.PI/2)+x;for(let xt=0,zt=z.length;xt<zt;xt++){let Lt=X(z[xt],W[xt],ft);gt(Lt.x,Lt.y,d+ut)}for(let xt=0,zt=D.length;xt<zt;xt++){let Lt=D[xt];et=Q[xt];for(let Gt=0,Vt=Lt.length;Gt<Vt;Gt++){let B=X(Lt[Gt],et[Gt],ft);_?gt(B.x,B.y+E[h-1].y,E[h-1].x+ut):gt(B.x,B.y,d+ut)}}}$t(),K();function $t(){let nt=s.length/3;if(f){let lt=0,ut=G*lt;for(let ft=0;ft<Zt;ft++){let xt=pt[ft];Ut(xt[2]+ut,xt[1]+ut,xt[0]+ut)}lt=h+g*2,ut=G*lt;for(let ft=0;ft<Zt;ft++){let xt=pt[ft];Ut(xt[0]+ut,xt[1]+ut,xt[2]+ut)}}else{for(let lt=0;lt<Zt;lt++){let ut=pt[lt];Ut(ut[2],ut[1],ut[0])}for(let lt=0;lt<Zt;lt++){let ut=pt[lt];Ut(ut[0]+G*h,ut[1]+G*h,ut[2]+G*h)}}n.addGroup(nt,s.length/3-nt,0)}function K(){let nt=s.length/3,lt=0;tt(z,lt),lt+=z.length;for(let ut=0,ft=D.length;ut<ft;ut++){let xt=D[ut];tt(xt,lt),lt+=xt.length}n.addGroup(nt,s.length/3-nt,1)}function tt(nt,lt){let ut=nt.length;for(;--ut>=0;){let ft=ut,xt=ut-1;xt<0&&(xt=nt.length-1);for(let zt=0,Lt=h+g*2;zt<Lt;zt++){let Gt=G*zt,Vt=G*(zt+1),B=lt+ft+Gt,se=lt+xt+Gt,Jt=lt+xt+Vt,R=lt+ft+Vt;wt(B,se,Jt,R)}}}function gt(nt,lt,ut){l.push(nt),l.push(lt),l.push(ut)}function Ut(nt,lt,ut){Ht(nt),Ht(lt),Ht(ut);let ft=s.length/3,xt=y.generateTopUV(n,s,ft-3,ft-2,ft-1);ae(xt[0]),ae(xt[1]),ae(xt[2])}function wt(nt,lt,ut,ft){Ht(nt),Ht(lt),Ht(ft),Ht(lt),Ht(ut),Ht(ft);let xt=s.length/3,zt=y.generateSideWallUV(n,s,xt-6,xt-3,xt-2,xt-1);ae(zt[0]),ae(zt[1]),ae(zt[3]),ae(zt[1]),ae(zt[2]),ae(zt[3])}function Ht(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function ae(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Km(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Oa[s.type]().fromJSON(s)),new i(n,t.options)}},Jm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new rt(r,o),new rt(a,l),new rt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[s*3],u=t[s*3+1],m=t[s*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new rt(o,1-l),new rt(c,1-d),new rt(f,1-m),new rt(x,1-p)]:[new rt(a,1-l),new rt(h,1-d),new rt(u,1-m),new rt(g,1-p)]}};function Km(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var io=class i extends Me{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ie(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new L,f=new rt,u=new L,m=new L,x=new L,g=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,u.x=p*1,u.y=-g,u.z=p*0,x.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,u.x=p*1,u.y=-g,u.z=p*0,m.copy(u),u.x+=x.x,u.y+=x.y,u.z+=x.z,u.normalize(),l.push(u.x,u.y,u.z),x.copy(m)}for(let y=0;y<=e;y++){let E=n+y*h*s,_=Math.sin(E),b=Math.cos(E);for(let S=0;S<=t.length-1;S++){d.x=t[S].x*_,d.y=t[S].y,d.z=t[S].x*b,o.push(d.x,d.y,d.z),f.x=y/e,f.y=S/(t.length-1),a.push(f.x,f.y);let A=l[3*S+0]*_,v=l[3*S+1],w=l[3*S+0]*b;c.push(A,v,w)}}for(let y=0;y<e;y++)for(let E=0;E<t.length-1;E++){let _=E+y*t.length,b=_,S=_+t.length,A=_+t.length+1,v=_+1;r.push(b,S,v),r.push(A,v,S)}this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("uv",new te(a,2)),this.setAttribute("normal",new te(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Ve=class i extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,u=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let y=p*f-o;for(let E=0;E<c;E++){let _=E*d-r;m.push(_,-y,0),x.push(0,0,1),g.push(E/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let E=y+c*p,_=y+c*(p+1),b=y+1+c*(p+1),S=y+1+c*p;u.push(E,_,S),u.push(_,b,S)}this.setIndex(u),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(x,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var as=class i extends Me{constructor(t=new gn([new rt(0,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(r,3)),this.setAttribute("uv",new te(o,2));function c(h){let d=s.length/3,f=h.extractPoints(e),u=f.shape,m=f.holes;jn.isClockWise(u)===!1&&(u=u.reverse());for(let g=0,p=m.length;g<p;g++){let y=m[g];jn.isClockWise(y)===!0&&(m[g]=y.reverse())}let x=jn.triangulateShape(u,m);for(let g=0,p=m.length;g<p;g++){let y=m[g];u=u.concat(y)}for(let g=0,p=u.length;g<p;g++){let y=u[g];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let g=0,p=x.length;g<p;g++){let y=x[g],E=y[0]+d,_=y[1]+d,b=y[2]+d;n.push(E,_,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return jm(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function jm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var so=class i extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new L,f=new L,u=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let y=[],E=p/n,_=o+E*a,b=t*Math.cos(_),S=Math.sqrt(t*t-b*b),A=0;p===0&&o===0?A=.5/e:p===n&&l===Math.PI&&(A=-.5/e);for(let v=0;v<=e;v++){let w=v/e,C=s+w*r;d.x=-S*Math.cos(C),d.y=b,d.z=S*Math.sin(C),m.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),g.push(w+A,1-E),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let E=h[p][y+1],_=h[p][y],b=h[p+1][y],S=h[p+1][y+1];(p!==0||o>0)&&u.push(E,_,S),(p!==n-1||l<Math.PI)&&u.push(_,b,S)}this.setIndex(u),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(x,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ls=class i extends Me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],f=new L,u=new L,m=new L;for(let x=0;x<=n;x++){let g=o+x/n*a;for(let p=0;p<=s;p++){let y=p/s*r;u.x=(t+e*Math.cos(g))*Math.cos(y),u.y=(t+e*Math.cos(g))*Math.sin(y),u.z=e*Math.sin(g),c.push(u.x,u.y,u.z),f.x=t*Math.cos(y),f.y=t*Math.sin(y),m.subVectors(u,f).normalize(),h.push(m.x,m.y,m.z),d.push(p/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let p=(s+1)*x+g-1,y=(s+1)*(x-1)+g-1,E=(s+1)*(x-1)+g,_=(s+1)*x+g;l.push(p,y,_),l.push(y,E,_)}this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Mi=class i extends Me{constructor(t=new jr(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new rt,h=new L,d=[],f=[],u=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new te(d,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(u,2));function x(){for(let E=0;E<e;E++)g(E);g(r===!1?e:0),y(),p()}function g(E){h=t.getPointAt(E/e,h);let _=o.normals[E],b=o.binormals[E];for(let S=0;S<=s;S++){let A=S/s*Math.PI*2,v=Math.sin(A),w=-Math.cos(A);l.x=w*_.x+v*b.x,l.y=w*_.y+v*b.y,l.z=w*_.z+v*b.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let E=1;E<=e;E++)for(let _=1;_<=s;_++){let b=(s+1)*(E-1)+(_-1),S=(s+1)*E+(_-1),A=(s+1)*E+_,v=(s+1)*(E-1)+_;m.push(b,S,v),m.push(S,A,v)}}function y(){for(let E=0;E<=e;E++)for(let _=0;_<=s;_++)c.x=E/e,c.y=_/s,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Oa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function ps(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(dd(s))s.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(dd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function nn(i){let t={};for(let e=0;e<i.length;e++){let n=ps(i[e]);for(let s in n)t[s]=n[s]}return t}function dd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Qm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ih(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var dn={clone:ps,merge:nn},t0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_e=class extends ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t0,this.fragmentShader=e0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=Qm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ot().setHex(s.value);break;case"v2":this.uniforms[n].value=new rt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Re().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Kt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new oe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},za=class extends _e{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ce=class extends ei{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Je=class extends ce{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ie(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var ro=class extends ei{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};var er=class extends ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ka=class extends ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var oo=class extends Wr{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function Os(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Xc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ki=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ha=class extends ki{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zc,endingEnd:Zc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case $c:r=t,a=2*e-n;break;case Jc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $c:o=t,l=2*n-e;break;case Jc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,y=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,E=(-1-u)*g+(1.5+u)*x+.5*m,_=u*g-u*x;for(let b=0;b!==a;++b)r[b]=p*o[h+b]+y*o[c+b]+E*o[l+b]+_*o[d+b];return r}},Va=class extends ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},Ga=class extends ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Wa=class extends ki{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(s-e),x=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*m;return r}let f=a*2,u=t-1;for(let m=0;m!==a;++m){let x=o[c+m],g=o[l+m],p=u*f+m*2,y=d[p],E=d[p+1],_=t*f+m*2,b=h[_],S=h[_+1],A=i0(n,e,y,b,s);r[m]=af(A,x,E,S,g)}return r}};function af(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function n0(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function i0(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=af(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=n0(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var En=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Os(e,this.TimeBufferType),this.values=Os(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Os(t.times,Array),values:Os(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Xc(t.settings)&&(n.settings={inTangents:Os(t.settings.inTangents,Array),outTangents:Os(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Wa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Or:e=this.InterpolantFactoryMethodDiscrete;break;case Aa:e=this.InterpolantFactoryMethodLinear;break;case ga:e=this.InterpolantFactoryMethodSmooth;break;case Yc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Or;case this.InterpolantFactoryMethodLinear:return Aa;case this.InterpolantFactoryMethodSmooth:return ga;case this.InterpolantFactoryMethodBezier:return Yc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Xc(this.settings)&&(fd(this.settings.inTangents,t),fd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Yt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Yt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Xp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Yt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ga,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,f=d-n,u=d+n;for(let m=0;m!==n;++m){let x=e[d+m];if(x!==e[f+m]||x!==e[u+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let u=0;u!==n;++u)e[f+u]=e[d+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Xc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function fd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}En.prototype.ValueTypeName="";En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=Aa;var Hi=class extends En{constructor(t,e,n){super(t,e,n)}};Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Or;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Xa=class extends En{constructor(t,e,n,s){super(t,e,n,s)}};Xa.prototype.ValueTypeName="color";var qa=class extends En{constructor(t,e,n,s){super(t,e,n,s)}};qa.prototype.ValueTypeName="number";var Ya=class extends ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Rn.slerpFlat(r,0,o,c-a,o,c,l);return r}},ao=class extends En{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ya(this.times,this.values,this.getValueSize(),t)}};ao.prototype.ValueTypeName="quaternion";ao.prototype.InterpolantFactoryMethodSmooth=void 0;var Vi=class extends En{constructor(t,e,n){super(t,e,n)}};Vi.prototype.ValueTypeName="string";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=Or;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Za=class extends En{constructor(t,e,n,s){super(t,e,n,s)}};Za.prototype.ValueTypeName="vector";var _a={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(pd(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!pd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function pd(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var $a=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],m=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},lf=new $a,nr=class{constructor(t){this.manager=t!==void 0?t:lf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};nr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bs=new WeakMap,Ja=class extends nr{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=_a.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=Bs.get(o);d===void 0&&(d=[],Bs.set(o,d)),d.push({onLoad:e,onError:s})}return o}let a=Xs("img");function l(){h(),e&&e(this);let d=Bs.get(this)||[];for(let f=0;f<d.length;f++){let u=d[f];u.onLoad&&u.onLoad(this)}Bs.delete(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),_a.remove(`image:${t}`);let f=Bs.get(this)||[];for(let u=0;u<f.length;u++){let m=f[u];m.onError&&m.onError(d)}Bs.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),_a.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}};var lo=class extends nr{constructor(t){super(t)}load(t,e,n,s){let r=new tn,o=new Ja(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},ir=class extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var qc=new oe,md=new L,gd=new L,sr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=Ye,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new js,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;md.setFromMatrixPosition(t.matrixWorld),e.position.copy(md),gd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){qc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(qc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ws||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(qc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},pa=new L,ma=new Rn,Jn=new L,co=class extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(pa,ma,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pa,ma,Jn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(pa,ma,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pa,ma,Jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fi=new L,xd=new rt,_d=new rt,qe=class extends co{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z)}getViewSize(t,e){return this.getViewBounds(t,xd,_d),e.subVectors(_d,xd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Lr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},th=class extends sr{constructor(){super(new qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=ss*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},rr=class extends ir{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new th}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},eh=class extends sr{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0}},or=class extends ir{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new eh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Gi=class extends co{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},nh=class extends sr{constructor(){super(new Gi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ho=class extends ir{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new nh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var zs=-90,ks=1,Ka=class extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qe(zs,ks,t,e);s.layers=this.layers,this.add(s);let r=new qe(zs,ks,t,e);r.layers=this.layers,this.add(r);let o=new qe(zs,ks,t,e);o.layers=this.layers,this.add(o);let a=new qe(zs,ks,t,e);a.layers=this.layers,this.add(a);let l=new qe(zs,ks,t,e);l.layers=this.layers,this.add(l);let c=new qe(zs,ks,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ja=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Dh="\\[\\]\\.:\\/",s0=new RegExp("["+Dh+"]","g"),Lh="[^"+Dh+"]",r0="[^"+Dh.replace("\\.","")+"]",o0=/((?:WC+[\/:])*)/.source.replace("WC",Lh),a0=/(WCOD+)?/.source.replace("WCOD",r0),l0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lh),c0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lh),h0=new RegExp("^"+o0+a0+l0+c0+"$"),u0=["material","materials","bones","map"],ih=class{constructor(t,e,n){let s=n||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},we=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(s0,"")}static parseTrackName(t){let e=h0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);u0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=ih;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pM=new Float32Array(1);var vd=new oe,uo=class{constructor(t,e,n=0,s=1/0){this.ray=new Ks(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Yt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vd),this}intersectObject(t,e=!0,n=[]){return sh(t,this,n,e),n.sort(yd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)sh(t[s],this,n,e);return n.sort(yd),n}};function yd(i,t){return i.distance-t.distance}function sh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)sh(r[o],t,e,!0)}}var zh=class zh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};zh.prototype.isMatrix2=!0;var rh=zh;function Uh(i,t,e,n){let s=d0(n);switch(e){case bh:return i*t;case Th:return i*t/s.components*s.byteLength;case al:return i*t/s.components*s.byteLength;case Zi:return i*t*2/s.components*s.byteLength;case ll:return i*t*2/s.components*s.byteLength;case Eh:return i*t*3/s.components*s.byteLength;case xn:return i*t*4/s.components*s.byteLength;case cl:return i*t*4/s.components*s.byteLength;case _o:case vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yo:case Mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ul:case fl:return Math.max(i,16)*Math.max(t,8)/4;case hl:case dl:return Math.max(i,8)*Math.max(t,8)/2;case pl:case ml:case xl:case _l:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case gl:case So:case vl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case bl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case El:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case wl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Al:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Il:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Dl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ll:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ul:case Nl:case Fl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ol:case Bl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case bo:case zl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function d0(i){switch(i){case Ye:case vh:return{byteLength:1,components:1};case cr:case yh:case De:return{byteLength:2,components:1};case rl:case ol:return{byteLength:2,components:4};case Hn:case sl:case Vn:return{byteLength:4,components:1};case Mh:case Sh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Pf(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function y0(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((u,m)=>u.start-m.start);let f=0;for(let u=1;u<d.length;u++){let m=d[f],x=d[u];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,d[f]=x)}d.length=f+1;for(let u=0,m=d.length;u<m;u++){let x=d[u];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var M0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S0=`#ifdef USE_ALPHAHASH
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
#endif`,b0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,w0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A0=`#ifdef USE_AOMAP
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
#endif`,R0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C0=`#ifdef USE_BATCHING
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
#endif`,P0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,L0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,U0=`#ifdef USE_IRIDESCENCE
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
#endif`,N0=`#ifdef USE_BUMPMAP
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
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,k0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,H0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,V0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,G0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,W0=`#define PI 3.141592653589793
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
} // validated`,X0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,q0=`vec3 transformedNormal = objectNormal;
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
#endif`,Y0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K0="gl_FragColor = linearToOutputTexel( gl_FragColor );",j0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q0=`#ifdef USE_ENVMAP
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
#endif`,tg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,eg=`#ifdef USE_ENVMAP
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
#endif`,ng=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,og=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ag=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lg=`#ifdef USE_GRADIENTMAP
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
}`,cg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,fg=`#ifdef USE_ENVMAP
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
#endif`,pg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_g=`PhysicalMaterial material;
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
#endif`,vg=`uniform sampler2D dfgLUT;
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
}`,yg=`
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
#endif`,Mg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Eg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ag=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ig=`#if defined( USE_POINTS_UV )
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
#endif`,Dg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ug=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ng=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Og=`#ifdef USE_MORPHTARGETS
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
#endif`,Bg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wg=`#ifdef USE_NORMALMAP
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
#endif`,Xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ex=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ix=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ox=`float getShadowMask() {
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
}`,ax=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lx=`#ifdef USE_SKINNING
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
#endif`,cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hx=`#ifdef USE_SKINNING
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
#endif`,ux=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,px=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mx=`#ifdef USE_TRANSMISSION
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
#endif`,gx=`#ifdef USE_TRANSMISSION
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
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sx=`uniform sampler2D t2D;
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
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ex=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ax=`#include <common>
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
}`,Rx=`#if DEPTH_PACKING == 3200
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
}`,Cx=`#define DISTANCE
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
}`,Px=`#define DISTANCE
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
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`uniform float scale;
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
}`,Ux=`uniform vec3 diffuse;
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
}`,Nx=`#include <common>
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
}`,Fx=`uniform vec3 diffuse;
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
}`,Ox=`#define LAMBERT
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
}`,Bx=`#define LAMBERT
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
}`,zx=`#define MATCAP
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
}`,kx=`#define MATCAP
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
}`,Hx=`#define NORMAL
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
}`,Vx=`#define NORMAL
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
}`,Gx=`#define PHONG
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
}`,Wx=`#define PHONG
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
}`,Xx=`#define STANDARD
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
}`,qx=`#define STANDARD
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
}`,Yx=`#define TOON
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
}`,Zx=`#define TOON
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
}`,$x=`uniform float size;
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
}`,Jx=`uniform vec3 diffuse;
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
}`,Kx=`#include <common>
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
}`,jx=`uniform vec3 color;
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
}`,Qx=`uniform float rotation;
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
}`,t_=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:M0,alphahash_pars_fragment:S0,alphamap_fragment:b0,alphamap_pars_fragment:E0,alphatest_fragment:T0,alphatest_pars_fragment:w0,aomap_fragment:A0,aomap_pars_fragment:R0,batching_pars_vertex:C0,batching_vertex:P0,begin_vertex:I0,beginnormal_vertex:D0,bsdfs:L0,iridescence_fragment:U0,bumpmap_pars_fragment:N0,clipping_planes_fragment:F0,clipping_planes_pars_fragment:O0,clipping_planes_pars_vertex:B0,clipping_planes_vertex:z0,color_fragment:k0,color_pars_fragment:H0,color_pars_vertex:V0,color_vertex:G0,common:W0,cube_uv_reflection_fragment:X0,defaultnormal_vertex:q0,displacementmap_pars_vertex:Y0,displacementmap_vertex:Z0,emissivemap_fragment:$0,emissivemap_pars_fragment:J0,colorspace_fragment:K0,colorspace_pars_fragment:j0,envmap_fragment:Q0,envmap_common_pars_fragment:tg,envmap_pars_fragment:eg,envmap_pars_vertex:ng,envmap_physical_pars_fragment:fg,envmap_vertex:ig,fog_vertex:sg,fog_pars_vertex:rg,fog_fragment:og,fog_pars_fragment:ag,gradientmap_pars_fragment:lg,lightmap_pars_fragment:cg,lights_lambert_fragment:hg,lights_lambert_pars_fragment:ug,lights_pars_begin:dg,lights_toon_fragment:pg,lights_toon_pars_fragment:mg,lights_phong_fragment:gg,lights_phong_pars_fragment:xg,lights_physical_fragment:_g,lights_physical_pars_fragment:vg,lights_fragment_begin:yg,lights_fragment_maps:Mg,lights_fragment_end:Sg,lightprobes_pars_fragment:bg,logdepthbuf_fragment:Eg,logdepthbuf_pars_fragment:Tg,logdepthbuf_pars_vertex:wg,logdepthbuf_vertex:Ag,map_fragment:Rg,map_pars_fragment:Cg,map_particle_fragment:Pg,map_particle_pars_fragment:Ig,metalnessmap_fragment:Dg,metalnessmap_pars_fragment:Lg,morphinstance_vertex:Ug,morphcolor_vertex:Ng,morphnormal_vertex:Fg,morphtarget_pars_vertex:Og,morphtarget_vertex:Bg,normal_fragment_begin:zg,normal_fragment_maps:kg,normal_pars_fragment:Hg,normal_pars_vertex:Vg,normal_vertex:Gg,normalmap_pars_fragment:Wg,clearcoat_normal_fragment_begin:Xg,clearcoat_normal_fragment_maps:qg,clearcoat_pars_fragment:Yg,iridescence_pars_fragment:Zg,opaque_fragment:$g,packing:Jg,premultiplied_alpha_fragment:Kg,project_vertex:jg,dithering_fragment:Qg,dithering_pars_fragment:tx,roughnessmap_fragment:ex,roughnessmap_pars_fragment:nx,shadowmap_pars_fragment:ix,shadowmap_pars_vertex:sx,shadowmap_vertex:rx,shadowmask_pars_fragment:ox,skinbase_vertex:ax,skinning_pars_vertex:lx,skinning_vertex:cx,skinnormal_vertex:hx,specularmap_fragment:ux,specularmap_pars_fragment:dx,tonemapping_fragment:fx,tonemapping_pars_fragment:px,transmission_fragment:mx,transmission_pars_fragment:gx,uv_pars_fragment:xx,uv_pars_vertex:_x,uv_vertex:vx,worldpos_vertex:yx,background_vert:Mx,background_frag:Sx,backgroundCube_vert:bx,backgroundCube_frag:Ex,cube_vert:Tx,cube_frag:wx,depth_vert:Ax,depth_frag:Rx,distance_vert:Cx,distance_frag:Px,equirect_vert:Ix,equirect_frag:Dx,linedashed_vert:Lx,linedashed_frag:Ux,meshbasic_vert:Nx,meshbasic_frag:Fx,meshlambert_vert:Ox,meshlambert_frag:Bx,meshmatcap_vert:zx,meshmatcap_frag:kx,meshnormal_vert:Hx,meshnormal_frag:Vx,meshphong_vert:Gx,meshphong_frag:Wx,meshphysical_vert:Xx,meshphysical_frag:qx,meshtoon_vert:Yx,meshtoon_frag:Zx,points_vert:$x,points_frag:Jx,shadow_vert:Kx,shadow_frag:jx,sprite_vert:Qx,sprite_frag:t_},Et={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},ri={basic:{uniforms:nn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:nn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:nn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:nn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:nn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Ot(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:nn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:nn([Et.points,Et.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:nn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:nn([Et.common,Et.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:nn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:nn([Et.sprite,Et.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:nn([Et.common,Et.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:nn([Et.lights,Et.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};ri.physical={uniforms:nn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var Gl={r:0,b:0,g:0},e_=new oe,If=new Kt;If.set(-1,0,0,0,1,0,0,0,1);function n_(i,t,e,n,s,r){let o=new Ot(0),a=s===!0?0:1,l,c,h=null,d=0,f=null;function u(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){let _=y.backgroundBlurriness>0;E=t.get(E,_)}return E}function m(y){let E=!1,_=u(y);_===null?g(o,a):_&&_.isColor&&(g(_,1),E=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,E){let _=u(E);_&&(_.isCubeTexture||_.mapping===go)?(c===void 0&&(c=new pe(new he(1,1,1),new _e({name:"BackgroundCubeMaterial",uniforms:ps(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(e_.makeRotationFromEuler(E.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(If),c.material.toneMapped=le.getTransfer(_.colorSpace)!==xe,(h!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new pe(new Ve(2,2),new _e({name:"BackgroundMaterial",uniforms:ps(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=le.getTransfer(_.colorSpace)!==xe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,E){y.getRGB(Gl,Ih(i)),e.buffers.color.setClear(Gl.r,Gl.g,Gl.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),a=E,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:m,addToRenderList:x,dispose:p}}function i_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(D,I,O,U,z){let X=!1,G=d(D,U,O,I);r!==G&&(r=G,c(r.object)),X=u(D,U,O,z),X&&m(D,U,O,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,_(D,I,O,U),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function d(D,I,O,U){let z=U.wireframe===!0,X=n[I.id];X===void 0&&(X={},n[I.id]=X);let G=D.isInstancedMesh===!0?D.id:0,j=X[G];j===void 0&&(j={},X[G]=j);let W=j[O.id];W===void 0&&(W={},j[O.id]=W);let Q=W[z];return Q===void 0&&(Q=f(l()),W[z]=Q),Q}function f(D){let I=[],O=[],U=[];for(let z=0;z<e;z++)I[z]=0,O[z]=0,U[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:U,object:D,attributes:{},index:null}}function u(D,I,O,U){let z=r.attributes,X=I.attributes,G=0,j=O.getAttributes();for(let W in j)if(j[W].location>=0){let et=z[W],ot=X[W];if(ot===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(ot=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(ot=D.instanceColor)),et===void 0||et.attribute!==ot||ot&&et.data!==ot.data)return!0;G++}return r.attributesNum!==G||r.index!==U}function m(D,I,O,U){let z={},X=I.attributes,G=0,j=O.getAttributes();for(let W in j)if(j[W].location>=0){let et=X[W];et===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(et=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(et=D.instanceColor));let ot={};ot.attribute=et,et&&et.data&&(ot.data=et.data),z[W]=ot,G++}r.attributes=z,r.attributesNum=G,r.index=U}function x(){let D=r.newAttributes;for(let I=0,O=D.length;I<O;I++)D[I]=0}function g(D){p(D,0)}function p(D,I){let O=r.newAttributes,U=r.enabledAttributes,z=r.attributeDivisors;O[D]=1,U[D]===0&&(i.enableVertexAttribArray(D),U[D]=1),z[D]!==I&&(i.vertexAttribDivisor(D,I),z[D]=I)}function y(){let D=r.newAttributes,I=r.enabledAttributes;for(let O=0,U=I.length;O<U;O++)I[O]!==D[O]&&(i.disableVertexAttribArray(O),I[O]=0)}function E(D,I,O,U,z,X,G){G===!0?i.vertexAttribIPointer(D,I,O,z,X):i.vertexAttribPointer(D,I,O,U,z,X)}function _(D,I,O,U){x();let z=U.attributes,X=O.getAttributes(),G=I.defaultAttributeValues;for(let j in X){let W=X[j];if(W.location>=0){let Q=z[j];if(Q===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){let et=Q.normalized,ot=Q.itemSize,pt=t.get(Q);if(pt===void 0)continue;let Zt=pt.buffer,Wt=pt.type,$t=pt.bytesPerElement,K=Wt===i.INT||Wt===i.UNSIGNED_INT||Q.gpuType===sl;if(Q.isInterleavedBufferAttribute){let tt=Q.data,gt=tt.stride,Ut=Q.offset;if(tt.isInstancedInterleavedBuffer){for(let wt=0;wt<W.locationSize;wt++)p(W.location+wt,tt.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let wt=0;wt<W.locationSize;wt++)g(W.location+wt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let wt=0;wt<W.locationSize;wt++)E(W.location+wt,ot/W.locationSize,Wt,et,gt*$t,(Ut+ot/W.locationSize*wt)*$t,K)}else{if(Q.isInstancedBufferAttribute){for(let tt=0;tt<W.locationSize;tt++)p(W.location+tt,Q.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let tt=0;tt<W.locationSize;tt++)g(W.location+tt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let tt=0;tt<W.locationSize;tt++)E(W.location+tt,ot/W.locationSize,Wt,et,ot*$t,ot/W.locationSize*tt*$t,K)}}else if(G!==void 0){let et=G[j];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(W.location,et);break;case 3:i.vertexAttrib3fv(W.location,et);break;case 4:i.vertexAttrib4fv(W.location,et);break;default:i.vertexAttrib1fv(W.location,et)}}}}y()}function b(){w();for(let D in n){let I=n[D];for(let O in I){let U=I[O];for(let z in U){let X=U[z];for(let G in X)h(X[G].object),delete X[G];delete U[z]}}delete n[D]}}function S(D){if(n[D.id]===void 0)return;let I=n[D.id];for(let O in I){let U=I[O];for(let z in U){let X=U[z];for(let G in X)h(X[G].object),delete X[G];delete U[z]}}delete n[D.id]}function A(D){for(let I in n){let O=n[I];for(let U in O){let z=O[U];if(z[D.id]===void 0)continue;let X=z[D.id];for(let G in X)h(X[G].object),delete X[G];delete z[D.id]}}}function v(D){for(let I in n){let O=n[I],U=D.isInstancedMesh===!0?D.id:0,z=O[U];if(z!==void 0){for(let X in z){let G=z[X];for(let j in G)h(G[j].object),delete G[j];delete z[X]}delete O[U],Object.keys(O).length===0&&delete n[I]}}}function w(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function s_(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function r_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==xn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let v=A===De&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Ye&&A!==Vn&&!v&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Xt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:_,maxSamples:b,samples:S}}function o_(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Bn,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||s;return s=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){let m=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let y=r?0:n,E=y*4,_=p.clippingState||null;l.value=_,_=h(m,f,E,u);for(let b=0;b!==E;++b)_[b]=e[b];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,m){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=u+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,_=u;E!==x;++E,_+=4)o.copy(d[E]).applyMatrix4(y,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var ur=4,a_=6,l_=20,c_=256,To=new Gi,cf=new Ot,kh=null,Hh=0,Vh=0,Gh=!1,h_=new L,ms=new L,fr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=h_}=r;kh=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(kh,Hh,Vh),this._renderer.xr.enabled=Gh,t.scissorTest=!1,hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xi||t.mapping===ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kh=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:De,format:xn,colorSpace:Br,depthBuffer:!1},s=hf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=u_(r)),this._blurMaterial=f_(r,t,e),this._ggxMaterial=d_(r,t,e)}return s}_compileMaterial(t){let e=new pe(new Me,t);this._renderer.compile(e,To)}_sceneToCubeUV(t,e,n,s,r){let l=new qe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor(cf),d.toneMapping=kn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pe(new he,new en({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,y=t.background;y?y.isColor&&(g.color.copy(y),t.background=null,p=!0):(g.color.copy(cf),p=!0);for(let E=0;E<6;E++){let _=E%3;_===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):_===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let b=this._cubeSize;hr(s,_*b,E>2?b:0,b,b),d.setRenderTarget(s),p&&d.render(x,l),d.render(t,l)}d.toneMapping=u,d.autoClear=f,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Xi||t.mapping===ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=df()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;hr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,To)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),f=c*1.25,u=d*f,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-ur?n-m+ur:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=u,l.mipInt.value=m-e,hr(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(a,To),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,hr(t,g,p,3*x,2*x),s.setRenderTarget(t),s.render(a,To)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-ur?s-this._lodMax+ur:0),f=4*(this._cubeSize-h);hr(e,d,f,3*h,2*h),o.setRenderTarget(e),o.render(l,To)}};function u_(i){let t=[],e=[],n=i,s=i-ur+1+a_;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,f=6,u=3,m=new Float32Array(u*f*d),x=new Float32Array(u*f*d);for(let p=0;p<d;p++){let y=p%3*2/3-1,E=p>2?0:-1,_=[y,E,0,y+2/3,E,0,y+2/3,E+1,0,y,E,0,y+2/3,E+1,0,y,E+1,0];m.set(_,u*f*p);for(let b=0;b<f;b++){let S=h[b*2]*2-1,A=h[b*2+1]*2-1;p===0?ms.set(1,A,S):p===1?ms.set(-S,1,-A):p===2?ms.set(-S,A,1):p===3?ms.set(-1,A,-S):p===4?ms.set(-S,-1,A):ms.set(S,A,-1),ms.toArray(x,(p*f+b)*u)}}let g=new Me;g.setAttribute("position",new pn(m,u)),g.setAttribute("outputDirection",new pn(x,u)),e.push(new pe(g,null)),n>ur&&n--}return{lodMeshes:e,sizeLods:t}}function hf(i,t,e){let n=new Ie(i,t,e);return n.texture.mapping=go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function d_(i,t,e){return new _e({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:c_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:Ne,depthTest:!1,depthWrite:!1})}function f_(i,t,e){return new _e({name:"SphericalGaussianBlur",defines:{SAMPLES:l_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:Ne,depthTest:!1,depthWrite:!1})}function uf(){return new _e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:Ne,depthTest:!1,depthWrite:!1})}function df(){return new _e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ne,depthTest:!1,depthWrite:!1})}function Yl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Xl=class extends Ie{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new qr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new he(5,5,5),r=new _e({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:Ne});r.uniforms.tEquirect.value=e;let o=new pe(s,r),a=e.minFilter;return e.minFilter===qi&&(e.minFilter=$e),new Ka(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function p_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===el||u===nl)if(t.has(f)){let m=t.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let x=new Xl(m.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let u=f.mapping,m=u===el||u===nl,x=u===Xi||u===ds;if(m||x){let g=e.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new fr(i)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let y=f.image;return m&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new fr(i)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,u){return u===el?f.mapping=Xi:u===nl&&(f.mapping=ds),f}function l(f){let u=0,m=6;for(let x=0;x<m;x++)f[x]!==void 0&&u++;return u===m}function c(f){let u=f.target;u.removeEventListener("dispose",c);let m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function m_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&is("WebGLRenderer: "+n+" extension not supported."),s}}}function g_(i,t,e,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];let u=r.get(f);u&&(t.remove(u),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let u in f)t.update(f[u],i.ARRAY_BUFFER)}function c(d){let f=[],u=d.index,m=d.attributes.position,x=0;if(m===void 0)return;if(u!==null){let y=u.array;x=u.version;for(let E=0,_=y.length;E<_;E+=3){let b=y[E+0],S=y[E+1],A=y[E+2];f.push(b,S,S,A,A,b)}}else{let y=m.array;x=m.version;for(let E=0,_=y.length/3-1;E<_;E+=3){let b=E+0,S=E+1,A=E+2;f.push(b,S,S,A,A,b)}}let g=new(m.count>=65535?Gr:Vr)(f,1);g.version=x;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){let f=r.get(d);if(f){let u=d.index;u!==null&&f.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function x_(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,u){u!==0&&(i.drawElementsInstanced(n,f,r,d*o,u),e.update(f,n,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let x=0;for(let g=0;g<u;g++)x+=f[g];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function __(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Yt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function v_(i,t,e){let n=new WeakMap,s=new Re;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],E=0;u===!0&&(E=1),m===!0&&(E=2),x===!0&&(E=3);let _=a.attributes.position.count*E,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let S=new Float32Array(_*b*4*d),A=new kr(S,_,b,d);A.type=Vn,A.needsUpdate=!0;let v=E*4;for(let C=0;C<d;C++){let D=g[C],I=p[C],O=y[C],U=_*b*4*C;for(let z=0;z<D.count;z++){let X=z*v;u===!0&&(s.fromBufferAttribute(D,z),S[U+X+0]=s.x,S[U+X+1]=s.y,S[U+X+2]=s.z,S[U+X+3]=0),m===!0&&(s.fromBufferAttribute(I,z),S[U+X+4]=s.x,S[U+X+5]=s.y,S[U+X+6]=s.z,S[U+X+7]=0),x===!0&&(s.fromBufferAttribute(O,z),S[U+X+8]=s.x,S[U+X+9]=s.y,S[U+X+10]=s.z,S[U+X+11]=O.itemSize===4?s.w:1)}}f={count:d,texture:A,size:new rt(_,b)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];let m=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function y_(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var M_={[dh]:"LINEAR_TONE_MAPPING",[fh]:"REINHARD_TONE_MAPPING",[ph]:"CINEON_TONE_MAPPING",[mh]:"ACES_FILMIC_TONE_MAPPING",[gh]:"AGX_TONE_MAPPING",[xh]:"NEUTRAL_TONE_MAPPING",[mo]:"CUSTOM_TONE_MAPPING"};function S_(i,t,e,n,s,r){let o=new Ie(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Me;c.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new te([0,2,0,0,2,0],2));let h=new za({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new pe(c,h),f=new Gi(-1,1,1,-1,0,1),u=null,m=null,x=!1,g,p=null,y=[],E=!1;this.setSize=function(_,b){o.setSize(_,b),a!==null&&a.setSize(_,b),l!==null&&l.setSize(_,b);for(let S=0;S<y.length;S++){let A=y[S];A.setSize&&A.setSize(_,b)}},this.setEffects=function(_){y=_,E=y.length>0&&y[0].isRenderPass===!0;let b=o.width,S=o.height;y.length>0&&a===null&&(a=new Ie(b,S,{type:De,depthBuffer:!1,stencilBuffer:!1}),l=new Ie(b,S,{type:De,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){let v=y[A];v.setSize&&v.setSize(b,S)}},this.begin=function(_,b){if(x||_.toneMapping===kn&&y.length===0)return!1;if(p=b,b!==null){let S=b.width,A=b.height;(o.width!==S||o.height!==A)&&this.setSize(S,A)}return E===!1&&_.setRenderTarget(o),g=_.toneMapping,_.toneMapping=kn,!0},this.hasRenderPass=function(){return E},this.end=function(_,b){_.toneMapping=g,x=!0;let S=o,A=a;for(let v=0;v<y.length;v++){let w=y[v];w.enabled!==!1&&(w.render(_,A,S,b),w.needsSwap!==!1&&(S=A,A=A===a?l:a))}if(u!==_.outputColorSpace||m!==_.toneMapping){u=_.outputColorSpace,m=_.toneMapping,h.defines={},le.getTransfer(u)===xe&&(h.defines.SRGB_TRANSFER="");let v=M_[m];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(p),_.render(d,f),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Df=new tn,qh=new ni(1,1),Lf=new kr,Uf=new Pa,Nf=new qr,ff=[],pf=[],mf=new Float32Array(16),gf=new Float32Array(9),xf=new Float32Array(4);function pr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ff[s];if(r===void 0&&(r=new Float32Array(s),ff[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function We(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zl(i,t){let e=pf[t];e===void 0&&(e=new Int32Array(t),pf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function b_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function E_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2fv(this.addr,t),We(e,t)}}function T_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;i.uniform3fv(this.addr,t),We(e,t)}}function w_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4fv(this.addr,t),We(e,t)}}function A_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;xf.set(n),i.uniformMatrix2fv(this.addr,!1,xf),We(e,n)}}function R_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;gf.set(n),i.uniformMatrix3fv(this.addr,!1,gf),We(e,n)}}function C_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;mf.set(n),i.uniformMatrix4fv(this.addr,!1,mf),We(e,n)}}function P_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function I_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2iv(this.addr,t),We(e,t)}}function D_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3iv(this.addr,t),We(e,t)}}function L_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4iv(this.addr,t),We(e,t)}}function U_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function N_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2uiv(this.addr,t),We(e,t)}}function F_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3uiv(this.addr,t),We(e,t)}}function O_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4uiv(this.addr,t),We(e,t)}}function B_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(qh.compareFunction=e.isReversedDepthBuffer()?Hl:kl,r=qh):r=Df,e.setTexture2D(t||r,s)}function z_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Uf,s)}function k_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Nf,s)}function H_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Lf,s)}function V_(i){switch(i){case 5126:return b_;case 35664:return E_;case 35665:return T_;case 35666:return w_;case 35674:return A_;case 35675:return R_;case 35676:return C_;case 5124:case 35670:return P_;case 35667:case 35671:return I_;case 35668:case 35672:return D_;case 35669:case 35673:return L_;case 5125:return U_;case 36294:return N_;case 36295:return F_;case 36296:return O_;case 35678:case 36198:case 36298:case 36306:case 35682:return B_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return k_;case 36289:case 36303:case 36311:case 36292:return H_}}function G_(i,t){i.uniform1fv(this.addr,t)}function W_(i,t){let e=pr(t,this.size,2);i.uniform2fv(this.addr,e)}function X_(i,t){let e=pr(t,this.size,3);i.uniform3fv(this.addr,e)}function q_(i,t){let e=pr(t,this.size,4);i.uniform4fv(this.addr,e)}function Y_(i,t){let e=pr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Z_(i,t){let e=pr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $_(i,t){let e=pr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function J_(i,t){i.uniform1iv(this.addr,t)}function K_(i,t){i.uniform2iv(this.addr,t)}function j_(i,t){i.uniform3iv(this.addr,t)}function Q_(i,t){i.uniform4iv(this.addr,t)}function tv(i,t){i.uniform1uiv(this.addr,t)}function ev(i,t){i.uniform2uiv(this.addr,t)}function nv(i,t){i.uniform3uiv(this.addr,t)}function iv(i,t){i.uniform4uiv(this.addr,t)}function sv(i,t,e){let n=this.cache,s=t.length,r=Zl(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=qh:o=Df;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function rv(i,t,e){let n=this.cache,s=t.length,r=Zl(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Uf,r[o])}function ov(i,t,e){let n=this.cache,s=t.length,r=Zl(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Nf,r[o])}function av(i,t,e){let n=this.cache,s=t.length,r=Zl(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Lf,r[o])}function lv(i){switch(i){case 5126:return G_;case 35664:return W_;case 35665:return X_;case 35666:return q_;case 35674:return Y_;case 35675:return Z_;case 35676:return $_;case 5124:case 35670:return J_;case 35667:case 35671:return K_;case 35668:case 35672:return j_;case 35669:case 35673:return Q_;case 5125:return tv;case 36294:return ev;case 36295:return nv;case 36296:return iv;case 35678:case 36198:case 36298:case 36306:case 35682:return sv;case 35679:case 36299:case 36307:return rv;case 35680:case 36300:case 36308:case 36293:return ov;case 36289:case 36303:case 36311:case 36292:return av}}var Yh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=V_(e.type)}},Zh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lv(e.type)}},$h=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Wh=/(\w+)(\])?(\[|\.)?/g;function _f(i,t){i.seq.push(t),i.map[t.id]=t}function cv(i,t,e){let n=i.name,s=n.length;for(Wh.lastIndex=0;;){let r=Wh.exec(n),o=Wh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){_f(e,c===void 0?new Yh(a,i,t):new Zh(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new $h(a),_f(e,d)),e=d}}}var dr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);cv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function vf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var hv=37297,uv=0;function dv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var yf=new Kt;function fv(i){le._getMatrix(yf,le.workingColorSpace,i);let t=`mat3( ${yf.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case zr:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Mf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+dv(i.getShaderSource(t),a)}else return r}function pv(i,t){let e=fv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var mv={[dh]:"Linear",[fh]:"Reinhard",[ph]:"Cineon",[mh]:"ACESFilmic",[gh]:"AgX",[xh]:"Neutral",[mo]:"Custom"};function gv(i,t){let e=mv[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Wl=new L;function xv(){le.getLuminanceCoefficients(Wl);let i=Wl.x.toFixed(4),t=Wl.y.toFixed(4),e=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _v(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)}function vv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function yv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ao(i){return i!==""}function Sf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jh(i){return i.replace(Mv,bv)}var Sv=new Map;function bv(i,t){let e=jt[t];if(e===void 0){let n=Sv.get(t);if(n!==void 0)e=jt[n],Xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Jh(e)}var Ev=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ef(i){return i.replace(Ev,Tv)}function Tv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var wv={[cs]:"SHADOWMAP_TYPE_PCF",[ar]:"SHADOWMAP_TYPE_VSM"};function Av(i){return wv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Rv={[Xi]:"ENVMAP_TYPE_CUBE",[ds]:"ENVMAP_TYPE_CUBE",[go]:"ENVMAP_TYPE_CUBE_UV"};function Cv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Rv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Pv={[ds]:"ENVMAP_MODE_REFRACTION"};function Iv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Pv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Dv={[uh]:"ENVMAP_BLENDING_MULTIPLY",[Bd]:"ENVMAP_BLENDING_MIX",[zd]:"ENVMAP_BLENDING_ADD"};function Lv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Dv[i.combine]||"ENVMAP_BLENDING_NONE"}function Uv(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Nv(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Av(e),c=Cv(e),h=Iv(e),d=Lv(e),f=Uv(e),u=_v(e),m=vv(r),x=s.createProgram(),g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ao).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ao).join(`
`),p.length>0&&(p+=`
`)):(g=[Tf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),p=[Tf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?jt.tonemapping_pars_fragment:"",e.toneMapping!==kn?gv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,pv("linearToOutputTexel",e.outputColorSpace),xv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ao).join(`
`)),o=Jh(o),o=Sf(o,e),o=bf(o,e),a=Jh(a),a=Sf(a,e),a=bf(a,e),o=Ef(o),a=Ef(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=y+g+o,_=y+p+a,b=vf(s,s.VERTEX_SHADER,E),S=vf(s,s.FRAGMENT_SHADER,_);s.attachShader(x,b),s.attachShader(x,S),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(D){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(x)||"",O=s.getShaderInfoLog(b)||"",U=s.getShaderInfoLog(S)||"",z=I.trim(),X=O.trim(),G=U.trim(),j=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,S);else{let Q=Mf(s,b,"vertex"),et=Mf(s,S,"fragment");Yt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+Q+`
`+et)}else z!==""?Xt("WebGLProgram: Program Info Log:",z):(X===""||G==="")&&(W=!1);W&&(D.diagnostics={runnable:j,programLog:z,vertexShader:{log:X,prefix:g},fragmentShader:{log:G,prefix:p}})}s.deleteShader(b),s.deleteShader(S),v=new dr(s,x),w=yv(s,x)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,hv)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=uv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=S,this}var Fv=0,Kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new jh(t),e.set(t,n)),n}},jh=class{constructor(t){this.id=Fv++,this.code=t,this.usedTimes=0}};function Ov(i){return i===Zi||i===So||i===bo}function Bv(i,t,e,n,s,r){let o=new Zs,a=new Kh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,w,C,D,I,O){let U=D.fog,z=I.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,j=t.get(v.envMap||X,G),W=j&&j.mapping===go?j.image.height:null,Q=u[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&Xt("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let et=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ot=et!==void 0?et.length:0,pt=0;z.morphAttributes.position!==void 0&&(pt=1),z.morphAttributes.normal!==void 0&&(pt=2),z.morphAttributes.color!==void 0&&(pt=3);let Zt,Wt,$t,K;if(Q){let be=ri[Q];Zt=be.vertexShader,Wt=be.fragmentShader}else{Zt=v.vertexShader,Wt=v.fragmentShader;let be=a.getVertexShaderStage(v),me=a.getFragmentShaderStage(v);a.update(v,be,me),$t=be.id,K=me.id}let tt=i.getRenderTarget(),gt=i.state.buffers.depth.getReversed(),Ut=I.isInstancedMesh===!0,wt=I.isBatchedMesh===!0,Ht=!!v.map,ae=!!v.matcap,nt=!!j,lt=!!v.aoMap,ut=!!v.lightMap,ft=!!v.bumpMap&&v.wireframe===!1,xt=!!v.normalMap,zt=!!v.displacementMap,Lt=!!v.emissiveMap,Gt=!!v.metalnessMap,Vt=!!v.roughnessMap,B=v.anisotropy>0,se=v.clearcoat>0,Jt=v.dispersion>0,R=v.retroreflectivity>0,M=v.iridescence>0,P=v.sheen>0,F=v.transmission>0,V=B&&!!v.anisotropyMap,st=se&&!!v.clearcoatMap,ht=se&&!!v.clearcoatNormalMap,Z=se&&!!v.clearcoatRoughnessMap,$=M&&!!v.iridescenceMap,dt=M&&!!v.iridescenceThicknessMap,yt=P&&!!v.sheenColorMap,vt=P&&!!v.sheenRoughnessMap,_t=!!v.specularMap,bt=!!v.specularColorMap,Nt=!!v.specularIntensityMap,qt=F&&!!v.transmissionMap,H=F&&!!v.thicknessMap,Mt=!!v.gradientMap,it=!!v.alphaMap,St=v.alphaTest>0,Rt=!!v.alphaHash,ct=!!v.extensions,kt=kn;v.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(kt=i.toneMapping);let Ft={shaderID:Q,shaderType:v.type,shaderName:v.name,vertexShader:Zt,fragmentShader:Wt,defines:v.defines,customVertexShaderID:$t,customFragmentShaderID:K,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:wt,batchingColor:wt&&I._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&I.instanceColor!==null,instancingMorph:Ut&&I.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ht,matcap:ae,envMap:nt,envMapMode:nt&&j.mapping,envMapCubeUVHeight:W,aoMap:lt,lightMap:ut,bumpMap:ft,normalMap:xt,displacementMap:zt,emissiveMap:Lt,normalMapObjectSpace:xt&&v.normalMapType===Vd,normalMapTangentSpace:xt&&v.normalMapType===Eo,packedNormalMap:xt&&v.normalMapType===Eo&&Ov(v.normalMap.format),metalnessMap:Gt,roughnessMap:Vt,anisotropy:B,anisotropyMap:V,clearcoat:se,clearcoatMap:st,clearcoatNormalMap:ht,clearcoatRoughnessMap:Z,dispersion:Jt,retroreflection:R,iridescence:M,iridescenceMap:$,iridescenceThicknessMap:dt,sheen:P,sheenColorMap:yt,sheenRoughnessMap:vt,specularMap:_t,specularColorMap:bt,specularIntensityMap:Nt,transmission:F,transmissionMap:qt,thicknessMap:H,gradientMap:Mt,opaque:v.transparent===!1&&v.blending===lr&&v.alphaToCoverage===!1,alphaMap:it,alphaTest:St,alphaHash:Rt,combine:v.combine,mapUv:Ht&&m(v.map.channel),aoMapUv:lt&&m(v.aoMap.channel),lightMapUv:ut&&m(v.lightMap.channel),bumpMapUv:ft&&m(v.bumpMap.channel),normalMapUv:xt&&m(v.normalMap.channel),displacementMapUv:zt&&m(v.displacementMap.channel),emissiveMapUv:Lt&&m(v.emissiveMap.channel),metalnessMapUv:Gt&&m(v.metalnessMap.channel),roughnessMapUv:Vt&&m(v.roughnessMap.channel),anisotropyMapUv:V&&m(v.anisotropyMap.channel),clearcoatMapUv:st&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ht&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:vt&&m(v.sheenRoughnessMap.channel),specularMapUv:_t&&m(v.specularMap.channel),specularColorMapUv:bt&&m(v.specularColorMap.channel),specularIntensityMapUv:Nt&&m(v.specularIntensityMap.channel),transmissionMapUv:qt&&m(v.transmissionMap.channel),thicknessMapUv:H&&m(v.thicknessMap.channel),alphaMapUv:it&&m(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(xt||B),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(Ht||it),fog:!!U,useFog:v.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&xt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:gt,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:pt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,decodeVideoTexture:Ht&&v.map.isVideoTexture===!0&&le.getTransfer(v.map.colorSpace)===xe,decodeVideoTextureEmissive:Lt&&v.emissiveMap.isVideoTexture===!0&&le.getTransfer(v.emissiveMap.colorSpace)===xe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===un,flipSided:v.side===hn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ct&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&v.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function g(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)w.push(C),w.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(p(w,v),y(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function p(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function y(v,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function E(v){let w=u[v.type],C;if(w){let D=ri[w];C=dn.clone(D.uniforms)}else C=v.uniforms;return C}function _(v,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new Nv(i,w,v,s),c.push(C),h.set(w,C)),C}function b(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function S(v){a.remove(v)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:E,acquireProgram:_,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:A}}function zv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function kv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function wf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Af(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,m,x,g,p){let y=i[t];return y===void 0?(y={id:f.id,object:f,geometry:u,material:m,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:p},i[t]=y):(y.id=f.id,y.object=f,y.geometry=u,y.material=m,y.materialVariant=o(f),y.groupOrder=x,y.renderOrder=f.renderOrder,y.z=g,y.group=p),t++,y}function l(f,u,m,x,g,p,y){y.reversedDepth===!0&&(g=-g);let E=a(f,u,m,x,g,p);m.transmission>0?n.push(E):m.transparent===!0?s.push(E):e.push(E)}function c(f,u,m,x,g,p){let y=a(f,u,m,x,g,p);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):e.unshift(y)}function h(f,u){e.length>1&&e.sort(f||kv),n.length>1&&n.sort(u||wf),s.length>1&&s.sort(u||wf)}function d(){for(let f=t,u=i.length;f<u;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Hv(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Af,i.set(n,[o])):s>=r.length?(o=new Af,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Vv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new Ot};break;case"SpotLight":e={position:new L,direction:new L,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Gv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Wv=0;function Xv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function qv(i){let t=new Vv,e=Gv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new oe,o=new oe;function a(c){let h=0,d=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let u=0,m=0,x=0,g=0,p=0,y=0,E=0,_=0,b=0,S=0,A=0,v=0,w=0,C=0;c.sort(Xv);for(let I=0,O=c.length;I<O;I++){let U=c[I],z=U.color,X=U.intensity,G=U.distance,j=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Zi?j=U.shadow.map.texture:j=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=z.r*X,d+=z.g*X,f+=z.b*X;else if(U.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(U.sh.coefficients[W],X);C++}else if(U.isSunLight){let W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let Q=U.shadow,et=e.get(U);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[m]=et,n.sunShadowMap[m]=j;let ot=Q.getViewportCount();for(let pt=0;pt<ot;pt++)n.sunShadowMatrix[x+pt]=Q.getMatrix(pt),n.sunShadowCascade[x+pt]=Q._cascadeData[pt];x+=ot,m++}n.sun[u]=W,u++}else if(U.isDirectionalLight){let W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let Q=U.shadow,et=e.get(U);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,n.directionalShadow[g]=et,n.directionalShadowMap[g]=j,n.directionalShadowMatrix[g]=U.shadow.matrix,b++}n.directional[g]=W,g++}else if(U.isSpotLight){let W=t.get(U);W.position.setFromMatrixPosition(U.matrixWorld),W.color.copy(z).multiplyScalar(X),W.distance=G,W.coneCos=Math.cos(U.angle),W.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),W.decay=U.decay,n.spot[y]=W;let Q=U.shadow;if(U.map&&(n.spotLightMap[v]=U.map,v++,Q.updateMatrices(U),U.castShadow&&w++),n.spotLightMatrix[y]=Q.matrix,U.castShadow){let et=e.get(U);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,n.spotShadow[y]=et,n.spotShadowMap[y]=j,A++}y++}else if(U.isRectAreaLight){let W=t.get(U);W.color.copy(z).multiplyScalar(X),W.halfWidth.set(U.width*.5,0,0),W.halfHeight.set(0,U.height*.5,0),n.rectArea[E]=W,E++}else if(U.isPointLight){let W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),W.distance=U.distance,W.decay=U.decay,U.castShadow){let Q=U.shadow,et=e.get(U);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,et.shadowCameraNear=Q.camera.near,et.shadowCameraFar=Q.camera.far,n.pointShadow[p]=et,n.pointShadowMap[p]=j,n.pointShadowMatrix[p]=U.shadow.matrix,S++}n.point[p]=W,p++}else if(U.isHemisphereLight){let W=t.get(U);W.skyColor.copy(U.color).multiplyScalar(X),W.groundColor.copy(U.groundColor).multiplyScalar(X),n.hemi[_]=W,_++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let D=n.hash;(D.sunLength!==u||D.directionalLength!==g||D.pointLength!==p||D.spotLength!==y||D.rectAreaLength!==E||D.hemiLength!==_||D.numSunShadows!==m||D.numDirectionalShadows!==b||D.numPointShadows!==S||D.numSpotShadows!==A||D.numSpotMaps!==v||D.numLightProbes!==C)&&(n.sun.length=u,n.directional.length=g,n.spot.length=y,n.rectArea.length=E,n.point.length=p,n.hemi.length=_,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,D.sunLength=u,D.directionalLength=g,D.pointLength=p,D.spotLength=y,D.rectAreaLength=E,D.hemiLength=_,D.numSunShadows=m,D.numDirectionalShadows=b,D.numPointShadows=S,D.numSpotShadows=A,D.numSpotMaps=v,D.numLightProbes=C,n.version=Wv++)}function l(c,h){let d=0,f=0,u=0,m=0,x=0,g=0,p=h.matrixWorldInverse;for(let y=0,E=c.length;y<E;y++){let _=c[y];if(_.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),d++}else if(_.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),f++}else if(_.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(_.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let b=n.point[u];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),u++}else if(_.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Rf(i){let t=new qv(i),e=[],n=[],s=[];function r(f){d.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Yv(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Rf(i),t.set(s,[a])):r>=o.length?(a=new Rf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Zv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$v=`uniform sampler2D shadow_pass;
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
}`,Jv=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Kv=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Cf=new oe,wo=new L,Xh=new L;function jv(i,t,e){let n=new js,s=new rt,r=new rt,o=new Re,a=new er,l=new ka,c={},h=e.maxTextureSize,d={[Wi]:hn,[hn]:Wi,[un]:un},f=new _e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Zv,fragmentShader:$v}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let m=new Me;m.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new pe(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cs;let p=this.type;this.render=function(S,A,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===bd&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=cs);let w=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Ne),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let O=p!==this.type;O&&A.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(z=>z.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,z=S.length;U<z;U++){let X=S[U],G=X.shadow;if(G===void 0){Xt("WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let j=G.getFrameExtents();s.multiply(j),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,G.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=W,G.map===null||O===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ar){if(X.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Ie(s.x,s.y,{format:Zi,type:De,minFilter:$e,magFilter:$e,generateMipmaps:!1}),G.map.texture.name=X.name+".shadowMap",G.map.depthTexture=new ni(s.x,s.y,Vn),G.map.depthTexture.name=X.name+".shadowMapDepth",G.map.depthTexture.format=Qn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ae,G.map.depthTexture.magFilter=Ae}else X.isPointLight?(G.map=new Xl(s.x),G.map.depthTexture=new La(s.x,Hn)):(G.map=new Ie(s.x,s.y),G.map.depthTexture=new ni(s.x,s.y,Hn)),G.map.depthTexture.name=X.name+".shadowMap",G.map.depthTexture.format=Qn,this.type===cs?(G.map.depthTexture.compareFunction=W?Hl:kl,G.map.depthTexture.minFilter=$e,G.map.depthTexture.magFilter=$e):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ae,G.map.depthTexture.magFilter=Ae);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let Q=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();X.isPointLight!==!0&&G.updateMatrices(X,v);for(let et=0;et<Q;et++){let ot=G.getCamera(et);if(X.isPointLight){let pt=G.camera,Zt=G.matrix,Wt=X.distance||pt.far;Wt!==pt.far&&(pt.far=Wt,pt.updateProjectionMatrix()),wo.setFromMatrixPosition(X.matrixWorld),pt.position.copy(wo),Xh.copy(pt.position),Xh.add(Jv[et]),pt.up.copy(Kv[et]),pt.lookAt(Xh),pt.updateMatrixWorld(),Zt.makeTranslation(-wo.x,-wo.y,-wo.z),Cf.multiplyMatrices(pt.projectionMatrix,pt.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Cf,pt.coordinateSystem,pt.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,et),i.clear();else{et===0&&(i.setRenderTarget(G.map),i.clear());let pt=G.getViewport(et);o.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),I.viewport(o)}n=G.getFrustum(et),_(A,v,ot,X,this.type)}G.isPointLightShadow!==!0&&this.type===ar&&y(G,v),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,C,D)};function y(S,A){let v=t.update(x);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,u.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),S.mapPass===null?S.mapPass=new Ie(s.x,s.y,{format:Zi,type:De}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,v,f,x,null),u.uniforms.shadow_pass.value=S.mapPass.texture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,v,u,x,null)}function E(S,A,v,w){let C=null,D=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)C=D;else if(C=v.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let I=C.uuid,O=A.uuid,U=c[I];U===void 0&&(U={},c[I]=U);let z=U[O];z===void 0&&(z=C.clone(),U[O]=z,A.addEventListener("dispose",b)),C=z}if(C.visible=A.visible,C.wireframe=A.wireframe,w===ar?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:d[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let I=i.properties.get(C);I.light=v}return C}function _(S,A,v,w,C){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===ar)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);let O=t.update(S),U=S.material;if(Array.isArray(U)){let z=O.groups;for(let X=0,G=z.length;X<G;X++){let j=z[X],W=U[j.materialIndex];if(W&&W.visible){let Q=E(S,W,w,C);S.onBeforeShadow(i,S,A,v,O,Q,j),i.renderBufferDirect(v,null,O,Q,S,j),S.onAfterShadow(i,S,A,v,O,Q,j)}}}else if(U.visible){let z=E(S,U,w,C);S.onBeforeShadow(i,S,A,v,O,z,null),i.renderBufferDirect(v,null,O,z,S,null),S.onAfterShadow(i,S,A,v,O,z,null)}}let I=S.children;for(let O=0,U=I.length;O<U;O++)_(I[O],A,v,w,C)}function b(S){S.target.removeEventListener("dispose",b);for(let v in c){let w=c[v],C=S.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function Qv(i,t){function e(){let H=!1,Mt=new Re,it=null,St=new Re(0,0,0,0);return{setMask:function(Rt){it!==Rt&&!H&&(i.colorMask(Rt,Rt,Rt,Rt),it=Rt)},setLocked:function(Rt){H=Rt},setClear:function(Rt,ct,kt,Ft,be){be===!0&&(Rt*=Ft,ct*=Ft,kt*=Ft),Mt.set(Rt,ct,kt,Ft),St.equals(Mt)===!1&&(i.clearColor(Rt,ct,kt,Ft),St.copy(Mt))},reset:function(){H=!1,it=null,St.set(-1,0,0,0)}}}function n(){let H=!1,Mt=!1,it=null,St=null,Rt=null;return{setReversed:function(ct){if(Mt!==ct){let kt=t.get("EXT_clip_control");ct?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),Mt=ct;let Ft=Rt;Rt=null,this.setClear(Ft)}},getReversed:function(){return Mt},setTest:function(ct){ct?tt(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(ct){it!==ct&&!H&&(i.depthMask(ct),it=ct)},setFunc:function(ct){if(Mt&&(ct=tf[ct]),St!==ct){switch(ct){case va:i.depthFunc(i.NEVER);break;case ya:i.depthFunc(i.ALWAYS);break;case Ma:i.depthFunc(i.LESS);break;case Gs:i.depthFunc(i.LEQUAL);break;case Sa:i.depthFunc(i.EQUAL);break;case ba:i.depthFunc(i.GEQUAL);break;case Ea:i.depthFunc(i.GREATER);break;case Ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=ct}},setLocked:function(ct){H=ct},setClear:function(ct){Rt!==ct&&(Rt=ct,Mt&&(ct=1-ct),i.clearDepth(ct))},reset:function(){H=!1,it=null,St=null,Rt=null,Mt=!1}}}function s(){let H=!1,Mt=null,it=null,St=null,Rt=null,ct=null,kt=null,Ft=null,be=null;return{setTest:function(me){H||(me?tt(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(me){Mt!==me&&!H&&(i.stencilMask(me),Mt=me)},setFunc:function(me,Un,Zn){(it!==me||St!==Un||Rt!==Zn)&&(i.stencilFunc(me,Un,Zn),it=me,St=Un,Rt=Zn)},setOp:function(me,Un,Zn){(ct!==me||kt!==Un||Ft!==Zn)&&(i.stencilOp(me,Un,Zn),ct=me,kt=Un,Ft=Zn)},setLocked:function(me){H=me},setClear:function(me){be!==me&&(i.clearStencil(me),be=me)},reset:function(){H=!1,Mt=null,it=null,St=null,Rt=null,ct=null,kt=null,Ft=null,be=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},f={},u=new WeakMap,m=[],x=null,g=!1,p=null,y=null,E=null,_=null,b=null,S=null,A=null,v=new Ot(0,0,0),w=0,C=!1,D=null,I=null,O=null,U=null,z=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,j=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=j>=2);let Q=null,et={},ot=i.getParameter(i.SCISSOR_BOX),pt=i.getParameter(i.VIEWPORT),Zt=new Re().fromArray(ot),Wt=new Re().fromArray(pt);function $t(H,Mt,it,St){let Rt=new Uint8Array(4),ct=i.createTexture();i.bindTexture(H,ct),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<it;kt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,Rt):i.texImage2D(Mt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Rt);return ct}let K={};K[i.TEXTURE_2D]=$t(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=$t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=$t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=$t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(i.DEPTH_TEST),o.setFunc(Gs),ft(!1),xt(oh),tt(i.CULL_FACE),lt(Ne);function tt(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function gt(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function Ut(H,Mt){return f[H]!==Mt?(i.bindFramebuffer(H,Mt),f[H]=Mt,H===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Mt),H===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function wt(H,Mt){let it=m,St=!1;if(H){it=u.get(Mt),it===void 0&&(it=[],u.set(Mt,it));let Rt=H.textures;if(it.length!==Rt.length||it[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,kt=Rt.length;ct<kt;ct++)it[ct]=i.COLOR_ATTACHMENT0+ct;it.length=Rt.length,St=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,St=!0);St&&i.drawBuffers(it)}function Ht(H){return x!==H?(i.useProgram(H),x=H,!0):!1}let ae={[In]:i.FUNC_ADD,[Ed]:i.FUNC_SUBTRACT,[Td]:i.FUNC_REVERSE_SUBTRACT};ae[wd]=i.MIN,ae[Ad]=i.MAX;let nt={[us]:i.ZERO,[Rd]:i.ONE,[Cd]:i.SRC_COLOR,[ch]:i.SRC_ALPHA,[Ld]:i.SRC_ALPHA_SATURATE,[po]:i.DST_COLOR,[fo]:i.DST_ALPHA,[Pd]:i.ONE_MINUS_SRC_COLOR,[hh]:i.ONE_MINUS_SRC_ALPHA,[Dd]:i.ONE_MINUS_DST_COLOR,[Id]:i.ONE_MINUS_DST_ALPHA,[Ud]:i.CONSTANT_COLOR,[Nd]:i.ONE_MINUS_CONSTANT_COLOR,[Fd]:i.CONSTANT_ALPHA,[Od]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(H,Mt,it,St,Rt,ct,kt,Ft,be,me){if(H===Ne){g===!0&&(gt(i.BLEND),g=!1);return}if(g===!1&&(tt(i.BLEND),g=!0),H!==tl){if(H!==p||me!==C){if((y!==In||b!==In)&&(i.blendEquation(i.FUNC_ADD),y=In,b=In),me)switch(H){case lr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hs:i.blendFunc(i.ONE,i.ONE);break;case ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Yt("WebGLState: Invalid blending: ",H);break}else switch(H){case lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ah:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lh:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",H);break}E=null,_=null,S=null,A=null,v.set(0,0,0),w=0,p=H,C=me}return}Rt=Rt||Mt,ct=ct||it,kt=kt||St,(Mt!==y||Rt!==b)&&(i.blendEquationSeparate(ae[Mt],ae[Rt]),y=Mt,b=Rt),(it!==E||St!==_||ct!==S||kt!==A)&&(i.blendFuncSeparate(nt[it],nt[St],nt[ct],nt[kt]),E=it,_=St,S=ct,A=kt),(Ft.equals(v)===!1||be!==w)&&(i.blendColor(Ft.r,Ft.g,Ft.b,be),v.copy(Ft),w=be),p=H,C=!1}function ut(H,Mt){H.side===un?gt(i.CULL_FACE):tt(i.CULL_FACE);let it=H.side===hn;Mt&&(it=!it),ft(it),H.blending===lr&&H.transparent===!1?lt(Ne):lt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let St=H.stencilWrite;a.setTest(St),St&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Lt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(H){D!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),D=H)}function xt(H){H!==Md?(tt(i.CULL_FACE),H!==I&&(H===oh?i.cullFace(i.BACK):H===Sd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),I=H}function zt(H){H!==O&&(G&&i.lineWidth(H),O=H)}function Lt(H,Mt,it){H?(tt(i.POLYGON_OFFSET_FILL),(U!==Mt||z!==it)&&(U=Mt,z=it,o.getReversed()&&(Mt=-Mt),i.polygonOffset(Mt,it))):gt(i.POLYGON_OFFSET_FILL)}function Gt(H){H?tt(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function Vt(H){H===void 0&&(H=i.TEXTURE0+X-1),Q!==H&&(i.activeTexture(H),Q=H)}function B(H,Mt,it){it===void 0&&(Q===null?it=i.TEXTURE0+X-1:it=Q);let St=et[it];St===void 0&&(St={type:void 0,texture:void 0},et[it]=St),(St.type!==H||St.texture!==Mt)&&(Q!==it&&(i.activeTexture(it),Q=it),i.bindTexture(H,Mt||K[H]),St.type=H,St.texture=Mt)}function se(){let H=et[Q];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Jt(){try{i.compressedTexImage2D(...arguments)}catch(H){Yt("WebGLState:",H)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(H){Yt("WebGLState:",H)}}function M(){try{i.texSubImage2D(...arguments)}catch(H){Yt("WebGLState:",H)}}function P(){try{i.texSubImage3D(...arguments)}catch(H){Yt("WebGLState:",H)}}function F(){try{i.compressedTexSubImage2D(...arguments)}catch(H){Yt("WebGLState:",H)}}function V(){try{i.compressedTexSubImage3D(...arguments)}catch(H){Yt("WebGLState:",H)}}function st(){try{i.texStorage2D(...arguments)}catch(H){Yt("WebGLState:",H)}}function ht(){try{i.texStorage3D(...arguments)}catch(H){Yt("WebGLState:",H)}}function Z(){try{i.texImage2D(...arguments)}catch(H){Yt("WebGLState:",H)}}function $(){try{i.texImage3D(...arguments)}catch(H){Yt("WebGLState:",H)}}function dt(H){return d[H]!==void 0?d[H]:i.getParameter(H)}function yt(H,Mt){d[H]!==Mt&&(i.pixelStorei(H,Mt),d[H]=Mt)}function vt(H){Zt.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Zt.copy(H))}function _t(H){Wt.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Wt.copy(H))}function bt(H,Mt){let it=c.get(Mt);it===void 0&&(it=new WeakMap,c.set(Mt,it));let St=it.get(H);St===void 0&&(St=i.getUniformBlockIndex(Mt,H.name),it.set(H,St))}function Nt(H,Mt){let St=c.get(Mt).get(H);l.get(Mt)!==St&&(i.uniformBlockBinding(Mt,St,H.__bindingPointIndex),l.set(Mt,St))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,et={},f={},u=new WeakMap,m=[],x=null,g=!1,p=null,y=null,E=null,_=null,b=null,S=null,A=null,v=new Ot(0,0,0),w=0,C=!1,D=null,I=null,O=null,U=null,z=null,Zt.set(0,0,i.canvas.width,i.canvas.height),Wt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:tt,disable:gt,bindFramebuffer:Ut,drawBuffers:wt,useProgram:Ht,setBlending:lt,setMaterial:ut,setFlipSided:ft,setCullFace:xt,setLineWidth:zt,setPolygonOffset:Lt,setScissorTest:Gt,activeTexture:Vt,bindTexture:B,unbindTexture:se,compressedTexImage2D:Jt,compressedTexImage3D:R,texImage2D:Z,texImage3D:$,pixelStorei:yt,getParameter:dt,updateUBOMapping:bt,uniformBlockBinding:Nt,texStorage2D:st,texStorage3D:ht,texSubImage2D:M,texSubImage3D:P,compressedTexSubImage2D:F,compressedTexSubImage3D:V,scissor:vt,viewport:_t,reset:qt}}function ty(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap,d=new Set,f,u=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,M){return m?new OffscreenCanvas(R,M):Xs("canvas")}function g(R,M,P){let F=1,V=Jt(R);if((V.width>P||V.height>P)&&(F=P/Math.max(V.width,V.height)),F<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let st=Math.floor(F*V.width),ht=Math.floor(F*V.height);f===void 0&&(f=x(st,ht));let Z=M?x(st,ht):f;return Z.width=st,Z.height=ht,Z.getContext("2d").drawImage(R,0,0,st,ht),Xt("WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+st+"x"+ht+")."),Z}else return"data"in R&&Xt("WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),R;return R}function p(R){return R.generateMipmaps}function y(R){i.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(R,M,P,F,V,st=!1){if(R!==null){if(i[R]!==void 0)return i[R];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ht;F&&(ht=t.get("EXT_texture_norm16"),ht||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=M;if(M===i.RED&&(P===i.FLOAT&&(Z=i.R32F),P===i.HALF_FLOAT&&(Z=i.R16F),P===i.UNSIGNED_BYTE&&(Z=i.R8),P===i.UNSIGNED_SHORT&&ht&&(Z=ht.R16_EXT),P===i.SHORT&&ht&&(Z=ht.R16_SNORM_EXT)),M===i.RED_INTEGER&&(P===i.UNSIGNED_BYTE&&(Z=i.R8UI),P===i.UNSIGNED_SHORT&&(Z=i.R16UI),P===i.UNSIGNED_INT&&(Z=i.R32UI),P===i.BYTE&&(Z=i.R8I),P===i.SHORT&&(Z=i.R16I),P===i.INT&&(Z=i.R32I)),M===i.RG&&(P===i.FLOAT&&(Z=i.RG32F),P===i.HALF_FLOAT&&(Z=i.RG16F),P===i.UNSIGNED_BYTE&&(Z=i.RG8),P===i.UNSIGNED_SHORT&&ht&&(Z=ht.RG16_EXT),P===i.SHORT&&ht&&(Z=ht.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(P===i.UNSIGNED_BYTE&&(Z=i.RG8UI),P===i.UNSIGNED_SHORT&&(Z=i.RG16UI),P===i.UNSIGNED_INT&&(Z=i.RG32UI),P===i.BYTE&&(Z=i.RG8I),P===i.SHORT&&(Z=i.RG16I),P===i.INT&&(Z=i.RG32I)),M===i.RGB_INTEGER&&(P===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),P===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),P===i.UNSIGNED_INT&&(Z=i.RGB32UI),P===i.BYTE&&(Z=i.RGB8I),P===i.SHORT&&(Z=i.RGB16I),P===i.INT&&(Z=i.RGB32I)),M===i.RGBA_INTEGER&&(P===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),P===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),P===i.UNSIGNED_INT&&(Z=i.RGBA32UI),P===i.BYTE&&(Z=i.RGBA8I),P===i.SHORT&&(Z=i.RGBA16I),P===i.INT&&(Z=i.RGBA32I)),M===i.RGB&&(P===i.UNSIGNED_SHORT&&ht&&(Z=ht.RGB16_EXT),P===i.SHORT&&ht&&(Z=ht.RGB16_SNORM_EXT),P===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),P===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),M===i.RGBA){let $=st?zr:le.getTransfer(V);P===i.FLOAT&&(Z=i.RGBA32F),P===i.HALF_FLOAT&&(Z=i.RGBA16F),P===i.UNSIGNED_BYTE&&(Z=$===xe?i.SRGB8_ALPHA8:i.RGBA8),P===i.UNSIGNED_SHORT&&ht&&(Z=ht.RGBA16_EXT),P===i.SHORT&&ht&&(Z=ht.RGBA16_SNORM_EXT),P===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),P===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function b(R,M){let P;return R?M===null||M===Hn||M===Yi?P=i.DEPTH24_STENCIL8:M===Vn?P=i.DEPTH32F_STENCIL8:M===cr&&(P=i.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Hn||M===Yi?P=i.DEPTH_COMPONENT24:M===Vn?P=i.DEPTH_COMPONENT32F:M===cr&&(P=i.DEPTH_COMPONENT16),P}function S(R,M){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ae&&R.minFilter!==$e?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){let M=R.target;M.removeEventListener("dispose",A),w(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&d.delete(M)}function v(R){let M=R.target;M.removeEventListener("dispose",v),D(M)}function w(R){let M=n.get(R);if(M.__webglInit===void 0)return;let P=R.source,F=u.get(P);if(F){let V=F[M.__cacheKey];V.usedTimes--,V.usedTimes===0&&C(R),Object.keys(F).length===0&&u.delete(P)}n.remove(R)}function C(R){let M=n.get(R);i.deleteTexture(M.__webglTexture);let P=R.source,F=u.get(P);delete F[M.__cacheKey],o.memory.textures--}function D(R){let M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(M.__webglFramebuffer[F]))for(let V=0;V<M.__webglFramebuffer[F].length;V++)i.deleteFramebuffer(M.__webglFramebuffer[F][V]);else i.deleteFramebuffer(M.__webglFramebuffer[F]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[F])}else{if(Array.isArray(M.__webglFramebuffer))for(let F=0;F<M.__webglFramebuffer.length;F++)i.deleteFramebuffer(M.__webglFramebuffer[F]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let F=0;F<M.__webglColorRenderbuffer.length;F++)M.__webglColorRenderbuffer[F]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[F]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let P=R.textures;for(let F=0,V=P.length;F<V;F++){let st=n.get(P[F]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),o.memory.textures--),n.remove(P[F])}n.remove(R)}let I=0;function O(){I=0}function U(){return I}function z(R){I=R}function X(){let R=I;return R>=s.maxTextures&&Xt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),I+=1,R}function G(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function j(R,M){let P=n.get(R);if(R.isVideoTexture&&B(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&P.__version!==R.version){let F=R.image;if(F===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(P,R,M);return}}else R.isExternalTexture&&(P.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,P.__webglTexture,i.TEXTURE0+M)}function W(R,M){let P=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&P.__version!==R.version){gt(P,R,M);return}else R.isExternalTexture&&(P.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,P.__webglTexture,i.TEXTURE0+M)}function Q(R,M){let P=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&P.__version!==R.version){gt(P,R,M);return}e.bindTexture(i.TEXTURE_3D,P.__webglTexture,i.TEXTURE0+M)}function et(R,M){let P=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&P.__version!==R.version){Ut(P,R,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+M)}let ot={[mn]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[wa]:i.MIRRORED_REPEAT},pt={[Ae]:i.NEAREST,[kd]:i.NEAREST_MIPMAP_NEAREST,[xo]:i.NEAREST_MIPMAP_LINEAR,[$e]:i.LINEAR,[il]:i.LINEAR_MIPMAP_NEAREST,[qi]:i.LINEAR_MIPMAP_LINEAR},Zt={[Wd]:i.NEVER,[$d]:i.ALWAYS,[Xd]:i.LESS,[kl]:i.LEQUAL,[qd]:i.EQUAL,[Hl]:i.GEQUAL,[Yd]:i.GREATER,[Zd]:i.NOTEQUAL};function Wt(R,M){if(M.type===Vn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===$e||M.magFilter===il||M.magFilter===xo||M.magFilter===qi||M.minFilter===$e||M.minFilter===il||M.minFilter===xo||M.minFilter===qi)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ot[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ot[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ot[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,pt[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,pt[M.minFilter]),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Zt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ae||M.minFilter!==xo&&M.minFilter!==qi||M.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function $t(R,M){let P=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));let F=M.source,V=u.get(F);V===void 0&&(V={},u.set(F,V));let st=G(M);if(st!==R.__cacheKey){V[st]===void 0&&(V[st]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,P=!0),V[st].usedTimes++;let ht=V[R.__cacheKey];ht!==void 0&&(V[R.__cacheKey].usedTimes--,ht.usedTimes===0&&C(M)),R.__cacheKey=st,R.__webglTexture=V[st].texture}return P}function K(R,M,P){return Math.floor(Math.floor(R/P)/M)}function tt(R,M,P,F){let st=R.updateRanges;if(st.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,P,F,M.data);else{st.sort((yt,vt)=>yt.start-vt.start);let ht=0;for(let yt=1;yt<st.length;yt++){let vt=st[ht],_t=st[yt],bt=vt.start+vt.count,Nt=K(_t.start,M.width,4),qt=K(vt.start,M.width,4);_t.start<=bt+1&&Nt===qt&&K(_t.start+_t.count-1,M.width,4)===Nt?vt.count=Math.max(vt.count,_t.start+_t.count-vt.start):(++ht,st[ht]=_t)}st.length=ht+1;let Z=e.getParameter(i.UNPACK_ROW_LENGTH),$=e.getParameter(i.UNPACK_SKIP_PIXELS),dt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let yt=0,vt=st.length;yt<vt;yt++){let _t=st[yt],bt=Math.floor(_t.start/4),Nt=Math.ceil(_t.count/4),qt=bt%M.width,H=Math.floor(bt/M.width),Mt=Nt,it=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,qt),e.pixelStorei(i.UNPACK_SKIP_ROWS,H),e.texSubImage2D(i.TEXTURE_2D,0,qt,H,Mt,it,P,F,M.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,$),e.pixelStorei(i.UNPACK_SKIP_ROWS,dt)}}function gt(R,M,P){let F=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(F=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(F=i.TEXTURE_3D);let V=$t(R,M),st=M.source;e.bindTexture(F,R.__webglTexture,i.TEXTURE0+P);let ht=n.get(st);if(st.version!==ht.__version||V===!0){if(e.activeTexture(i.TEXTURE0+P),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let it=le.getPrimaries(le.workingColorSpace),St=M.colorSpace===Si?null:le.getPrimaries(M.colorSpace),Rt=M.colorSpace===Si||it===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let $=g(M.image,!1,s.maxTextureSize);$=se(M,$);let dt=r.convert(M.format,M.colorSpace),yt=r.convert(M.type),vt=_(M.internalFormat,dt,yt,M.normalized,M.colorSpace,M.isVideoTexture);Wt(F,M);let _t,bt=M.mipmaps,Nt=M.isVideoTexture!==!0,qt=ht.__version===void 0||V===!0,H=st.dataReady,Mt=S(M,$);if(M.isDepthTexture)vt=b(M.format===ii,M.type),qt&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,vt,$.width,$.height):e.texImage2D(i.TEXTURE_2D,0,vt,$.width,$.height,0,dt,yt,null));else if(M.isDataTexture)if(bt.length>0){Nt&&qt&&e.texStorage2D(i.TEXTURE_2D,Mt,vt,bt[0].width,bt[0].height);for(let it=0,St=bt.length;it<St;it++)_t=bt[it],Nt?H&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,_t.width,_t.height,dt,yt,_t.data):e.texImage2D(i.TEXTURE_2D,it,vt,_t.width,_t.height,0,dt,yt,_t.data);M.generateMipmaps=!1}else Nt?(qt&&e.texStorage2D(i.TEXTURE_2D,Mt,vt,$.width,$.height),H&&tt(M,$,dt,yt)):e.texImage2D(i.TEXTURE_2D,0,vt,$.width,$.height,0,dt,yt,$.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Nt&&qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,vt,bt[0].width,bt[0].height,$.depth);for(let it=0,St=bt.length;it<St;it++)if(_t=bt[it],M.format!==xn)if(dt!==null)if(Nt){if(H)if(M.layerUpdates.size>0){let Rt=Uh(_t.width,_t.height,M.format,M.type);for(let ct of M.layerUpdates){let kt=_t.data.subarray(ct*Rt/_t.data.BYTES_PER_ELEMENT,(ct+1)*Rt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,ct,_t.width,_t.height,1,dt,kt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,_t.width,_t.height,$.depth,dt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,vt,_t.width,_t.height,$.depth,0,_t.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,_t.width,_t.height,$.depth,dt,yt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,vt,_t.width,_t.height,$.depth,0,dt,yt,_t.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Nt&&qt&&e.texStorage2D(i.TEXTURE_2D,Mt,vt,bt[0].width,bt[0].height);for(let it=0,St=bt.length;it<St;it++)_t=bt[it],M.format!==xn?dt!==null?Nt?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,_t.width,_t.height,dt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,it,vt,_t.width,_t.height,0,_t.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?H&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,_t.width,_t.height,dt,yt,_t.data):e.texImage2D(i.TEXTURE_2D,it,vt,_t.width,_t.height,0,dt,yt,_t.data)}else if(M.isDataArrayTexture)if(Nt){if(qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,vt,$.width,$.height,$.depth),H)if(M.layerUpdates.size>0){let it=Uh($.width,$.height,M.format,M.type);for(let St of M.layerUpdates){let Rt=$.data.subarray(St*it/$.data.BYTES_PER_ELEMENT,(St+1)*it/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,St,$.width,$.height,1,dt,yt,Rt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,dt,yt,$.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,vt,$.width,$.height,$.depth,0,dt,yt,$.data);else if(M.isData3DTexture)Nt?(qt&&e.texStorage3D(i.TEXTURE_3D,Mt,vt,$.width,$.height,$.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,dt,yt,$.data)):e.texImage3D(i.TEXTURE_3D,0,vt,$.width,$.height,$.depth,0,dt,yt,$.data);else if(M.isFramebufferTexture){if(qt)if(Nt)e.texStorage2D(i.TEXTURE_2D,Mt,vt,$.width,$.height);else{let it=$.width,St=$.height;for(let Rt=0;Rt<Mt;Rt++)e.texImage2D(i.TEXTURE_2D,Rt,vt,it,St,0,dt,yt,null),it>>=1,St>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),$.parentNode!==it){it.appendChild($),d.add(M),it.onpaint=St=>{let Rt=St.changedElements;for(let ct of d)Rt.includes(ct.image)&&(ct.needsUpdate=!0)},it.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{let Rt=i.RGBA,ct=i.RGBA,kt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Rt,ct,kt,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(bt.length>0){if(Nt&&qt){let it=Jt(bt[0]);e.texStorage2D(i.TEXTURE_2D,Mt,vt,it.width,it.height)}for(let it=0,St=bt.length;it<St;it++)_t=bt[it],Nt?H&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,dt,yt,_t):e.texImage2D(i.TEXTURE_2D,it,vt,dt,yt,_t);M.generateMipmaps=!1}else if(Nt){if(qt){let it=Jt($);e.texStorage2D(i.TEXTURE_2D,Mt,vt,it.width,it.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,yt,$)}else e.texImage2D(i.TEXTURE_2D,0,vt,dt,yt,$);p(M)&&y(F),ht.__version=st.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ut(R,M,P){if(M.image.length!==6)return;let F=$t(R,M),V=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+P);let st=n.get(V);if(V.version!==st.__version||F===!0){e.activeTexture(i.TEXTURE0+P);let ht=le.getPrimaries(le.workingColorSpace),Z=M.colorSpace===Si?null:le.getPrimaries(M.colorSpace),$=M.colorSpace===Si||ht===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let dt=M.isCompressedTexture||M.image[0].isCompressedTexture,yt=M.image[0]&&M.image[0].isDataTexture,vt=[];for(let ct=0;ct<6;ct++)!dt&&!yt?vt[ct]=g(M.image[ct],!0,s.maxCubemapSize):vt[ct]=yt?M.image[ct].image:M.image[ct],vt[ct]=se(M,vt[ct]);let _t=vt[0],bt=r.convert(M.format,M.colorSpace),Nt=r.convert(M.type),qt=_(M.internalFormat,bt,Nt,M.normalized,M.colorSpace),H=M.isVideoTexture!==!0,Mt=st.__version===void 0||F===!0,it=V.dataReady,St=S(M,_t);Wt(i.TEXTURE_CUBE_MAP,M);let Rt;if(dt){H&&Mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,qt,_t.width,_t.height);for(let ct=0;ct<6;ct++){Rt=vt[ct].mipmaps;for(let kt=0;kt<Rt.length;kt++){let Ft=Rt[kt];M.format!==xn?bt!==null?H?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt,0,0,Ft.width,Ft.height,bt,Ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt,qt,Ft.width,Ft.height,0,Ft.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt,0,0,Ft.width,Ft.height,bt,Nt,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt,qt,Ft.width,Ft.height,0,bt,Nt,Ft.data)}}}else{if(Rt=M.mipmaps,H&&Mt){Rt.length>0&&St++;let ct=Jt(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,qt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(yt){H?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,vt[ct].width,vt[ct].height,bt,Nt,vt[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,qt,vt[ct].width,vt[ct].height,0,bt,Nt,vt[ct].data);for(let kt=0;kt<Rt.length;kt++){let be=Rt[kt].image[ct].image;H?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt+1,0,0,be.width,be.height,bt,Nt,be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt+1,qt,be.width,be.height,0,bt,Nt,be.data)}}else{H?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,bt,Nt,vt[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,qt,bt,Nt,vt[ct]);for(let kt=0;kt<Rt.length;kt++){let Ft=Rt[kt];H?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt+1,0,0,bt,Nt,Ft.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt+1,qt,bt,Nt,Ft.image[ct])}}}p(M)&&y(i.TEXTURE_CUBE_MAP),st.__version=V.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function wt(R,M,P,F,V,st){let ht=r.convert(P.format,P.colorSpace),Z=r.convert(P.type),$=_(P.internalFormat,ht,Z,P.normalized,P.colorSpace),dt=n.get(M),yt=n.get(P);if(yt.__renderTarget=M,!dt.__hasExternalTextures){let vt=Math.max(1,M.width>>st),_t=Math.max(1,M.height>>st);V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?e.texImage3D(V,st,$,vt,_t,M.depth,0,ht,Z,null):e.texImage2D(V,st,$,vt,_t,0,ht,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Vt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,F,V,yt.__webglTexture,0,Gt(M)):(V===i.TEXTURE_2D||V>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,F,V,yt.__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(R,M,P){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer){let F=M.depthTexture,V=F&&F.isDepthTexture?F.type:null,st=b(M.stencilBuffer,V),ht=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Vt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt(M),st,M.width,M.height):P?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt(M),st,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,st,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,R)}else{let F=M.textures;for(let V=0;V<F.length;V++){let st=F[V],ht=r.convert(st.format,st.colorSpace),Z=r.convert(st.type),$=_(st.internalFormat,ht,Z,st.normalized,st.colorSpace);Vt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt(M),$,M.width,M.height):P?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt(M),$,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,$,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ae(R,M,P){let F=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let V=n.get(M.depthTexture);if(V.__renderTarget=M,(!V.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),F){if(V.__webglInit===void 0&&(V.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),V.__webglTexture===void 0){V.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,M.depthTexture);let dt=r.convert(M.depthTexture.format),yt=r.convert(M.depthTexture.type),vt;M.depthTexture.format===Qn?vt=i.DEPTH_COMPONENT24:M.depthTexture.format===ii&&(vt=i.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,vt,M.width,M.height,0,dt,yt,null)}}else j(M.depthTexture,0);let st=V.__webglTexture,ht=Gt(M),Z=F?i.TEXTURE_CUBE_MAP_POSITIVE_X+P:i.TEXTURE_2D,$=M.depthTexture.format===ii?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===Qn)Vt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Z,st,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,$,Z,st,0);else if(M.depthTexture.format===ii)Vt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Z,st,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,$,Z,st,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(R){let M=n.get(R),P=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let F=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),F){let V=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,F.removeEventListener("dispose",V)};F.addEventListener("dispose",V),M.__depthDisposeCallback=V}M.__boundDepthTexture=F}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(P)for(let F=0;F<6;F++)ae(M.__webglFramebuffer[F],R,F);else{let F=R.texture.mipmaps;F&&F.length>0?ae(M.__webglFramebuffer[0],R,0):ae(M.__webglFramebuffer,R,0)}else if(P){M.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[F]),M.__webglDepthbuffer[F]===void 0)M.__webglDepthbuffer[F]=i.createRenderbuffer(),Ht(M.__webglDepthbuffer[F],R,!1);else{let V=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=M.__webglDepthbuffer[F];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,st)}}else{let F=R.texture.mipmaps;if(F&&F.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Ht(M.__webglDepthbuffer,R,!1);else{let V=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,st)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(R,M,P){let F=n.get(R);M!==void 0&&wt(F.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),P!==void 0&&nt(R)}function ut(R){let M=R.texture,P=n.get(R),F=n.get(M);R.addEventListener("dispose",v);let V=R.textures,st=R.isWebGLCubeRenderTarget===!0,ht=V.length>1;if(ht||(F.__webglTexture===void 0&&(F.__webglTexture=i.createTexture()),F.__version=M.version,o.memory.textures++),st){P.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0){P.__webglFramebuffer[Z]=[];for(let $=0;$<M.mipmaps.length;$++)P.__webglFramebuffer[Z][$]=i.createFramebuffer()}else P.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){P.__webglFramebuffer=[];for(let Z=0;Z<M.mipmaps.length;Z++)P.__webglFramebuffer[Z]=i.createFramebuffer()}else P.__webglFramebuffer=i.createFramebuffer();if(ht)for(let Z=0,$=V.length;Z<$;Z++){let dt=n.get(V[Z]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Vt(R)===!1){P.__webglMultisampledFramebuffer=i.createFramebuffer(),P.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let Z=0;Z<V.length;Z++){let $=V[Z];P.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,P.__webglColorRenderbuffer[Z]);let dt=r.convert($.format,$.colorSpace),yt=r.convert($.type),vt=_($.internalFormat,dt,yt,$.normalized,$.colorSpace,R.isXRRenderTarget===!0),_t=Gt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,vt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,P.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(P.__webglDepthRenderbuffer=i.createRenderbuffer(),Ht(P.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,M);for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0)for(let $=0;$<M.mipmaps.length;$++)wt(P.__webglFramebuffer[Z][$],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,$);else wt(P.__webglFramebuffer[Z],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(M)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let Z=0,$=V.length;Z<$;Z++){let dt=V[Z],yt=n.get(dt),vt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(vt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,yt.__webglTexture),Wt(vt,dt),wt(P.__webglFramebuffer,R,dt,i.COLOR_ATTACHMENT0+Z,vt,0),p(dt)&&y(vt)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,F.__webglTexture),Wt(Z,M),M.mipmaps&&M.mipmaps.length>0)for(let $=0;$<M.mipmaps.length;$++)wt(P.__webglFramebuffer[$],R,M,i.COLOR_ATTACHMENT0,Z,$);else wt(P.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,Z,0);p(M)&&y(Z),e.unbindTexture()}R.depthBuffer&&nt(R)}function ft(R){let M=R.textures;for(let P=0,F=M.length;P<F;P++){let V=M[P];if(p(V)){let st=E(R),ht=n.get(V).__webglTexture;e.bindTexture(st,ht),y(st),e.unbindTexture()}}}let xt=[],zt=[];function Lt(R){if(R.samples>0){if(Vt(R)===!1){let M=R.textures,P=R.width,F=R.height,V=i.COLOR_BUFFER_BIT,st=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(R),Z=M.length>1;if(Z)for(let dt=0;dt<M.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let $=R.texture.mipmaps;$&&$.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let dt=0;dt<M.length;dt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(V|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(V|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[dt]);let yt=n.get(M[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,yt,0)}i.blitFramebuffer(0,0,P,F,0,0,P,F,V,i.NEAREST),l===!0&&(xt.length=0,zt.length=0,xt.push(i.COLOR_ATTACHMENT0+dt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(xt.push(st),zt.push(st),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,zt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let dt=0;dt<M.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,ht.__webglColorRenderbuffer[dt]);let yt=n.get(M[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let M=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Gt(R){return Math.min(s.maxSamples,R.samples)}function Vt(R){let M=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function B(R){let M=o.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function se(R,M){let P=R.colorSpace,F=R.format,V=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||P!==Br&&P!==Si&&(le.getTransfer(P)===xe?(F!==xn||V!==Ye)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",P)),M}function Jt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=O,this.getTextureUnits=U,this.setTextureUnits=z,this.setTexture2D=j,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=et,this.rebindTextures=lt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Vt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ey(i,t){function e(n,s=Si){let r,o=le.getTransfer(s);if(n===Ye)return i.UNSIGNED_BYTE;if(n===rl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ol)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vh)return i.BYTE;if(n===yh)return i.SHORT;if(n===cr)return i.UNSIGNED_SHORT;if(n===sl)return i.INT;if(n===Hn)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===De)return i.HALF_FLOAT;if(n===bh)return i.ALPHA;if(n===Eh)return i.RGB;if(n===xn)return i.RGBA;if(n===Qn)return i.DEPTH_COMPONENT;if(n===ii)return i.DEPTH_STENCIL;if(n===Th)return i.RED;if(n===al)return i.RED_INTEGER;if(n===Zi)return i.RG;if(n===ll)return i.RG_INTEGER;if(n===cl)return i.RGBA_INTEGER;if(n===_o||n===vo||n===yo||n===Mo)if(o===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hl||n===ul||n===dl||n===fl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pl||n===ml||n===gl||n===xl||n===_l||n===So||n===vl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pl||n===ml)return o===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===gl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===xl)return r.COMPRESSED_R11_EAC;if(n===_l)return r.COMPRESSED_SIGNED_R11_EAC;if(n===So)return r.COMPRESSED_RG11_EAC;if(n===vl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===yl||n===Ml||n===Sl||n===bl||n===El||n===Tl||n===wl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Dl||n===Ll)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ml)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===El)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Tl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Al)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Il)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ll)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ul||n===Nl||n===Fl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ul)return o===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ol||n===Bl||n===bo||n===zl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ol)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var ny=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iy=`
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

}`,Qh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Yr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new _e({vertexShader:ny,fragmentShader:iy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pe(new Ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tu=class extends ti{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,m=null,x=typeof XRWebGLBinding<"u",g=new Qh,p={},y=e.getContextAttributes(),E=null,_=null,b=[],S=[],A=new rt,v=null,w=null,C=new qe;C.viewport=new Re;let D=new qe;D.viewport=new Re;let I=[C,D],O=new ja,U=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let tt=b[K];return tt===void 0&&(tt=new $s,b[K]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(K){let tt=b[K];return tt===void 0&&(tt=new $s,b[K]=tt),tt.getGripSpace()},this.getHand=function(K){let tt=b[K];return tt===void 0&&(tt=new $s,b[K]=tt),tt.getHandSpace()};function X(K){let tt=S.indexOf(K.inputSource);if(tt===-1)return;let gt=b[tt];gt!==void 0&&(gt.update(K.inputSource,K.frame,c||o),gt.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",j);for(let K=0;K<b.length;K++){let tt=S[K];tt!==null&&(S[K]=null,b[K].disconnect(tt))}U=null,z=null,g.reset();for(let K in p)delete p[K];if(t.setRenderTarget(E),u=null,f=null,d=null,s=null,_=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(A.width,A.height,!1),w!==null){let K=w.camera;K.fov=w.fov,K.zoom=w.zoom,K.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",G),s.addEventListener("inputsourceschange",j),y.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Ut=null,wt=null;y.depth&&(wt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=y.stencil?ii:Qn,Ut=y.stencil?Yi:Hn);let Ht={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ht),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Ie(f.textureWidth,f.textureHeight,{format:xn,type:Ye,depthTexture:new ni(f.textureWidth,f.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let gt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),_=new Ie(u.framebufferWidth,u.framebufferHeight,{format:xn,type:Ye,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(K){for(let tt=0;tt<K.removed.length;tt++){let gt=K.removed[tt],Ut=S.indexOf(gt);Ut>=0&&(S[Ut]=null,b[Ut].disconnect(gt))}for(let tt=0;tt<K.added.length;tt++){let gt=K.added[tt],Ut=S.indexOf(gt);if(Ut===-1){for(let Ht=0;Ht<b.length;Ht++)if(Ht>=S.length){S.push(gt),Ut=Ht;break}else if(S[Ht]===null){S[Ht]=gt,Ut=Ht;break}if(Ut===-1)break}let wt=b[Ut];wt&&wt.connect(gt)}}let W=new L,Q=new L;function et(K,tt,gt){W.setFromMatrixPosition(tt.matrixWorld),Q.setFromMatrixPosition(gt.matrixWorld);let Ut=W.distanceTo(Q),wt=tt.projectionMatrix.elements,Ht=gt.projectionMatrix.elements,ae=wt[14]/(wt[10]-1),nt=wt[14]/(wt[10]+1),lt=(wt[9]+1)/wt[5],ut=(wt[9]-1)/wt[5],ft=(wt[8]-1)/wt[0],xt=(Ht[8]+1)/Ht[0],zt=ae*ft,Lt=ae*xt,Gt=Ut/(-ft+xt),Vt=Gt*-ft;if(tt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Vt),K.translateZ(Gt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),wt[10]===-1)K.projectionMatrix.copy(tt.projectionMatrix),K.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let B=ae+Gt,se=nt+Gt,Jt=zt-Vt,R=Lt+(Ut-Vt),M=lt*nt/se*B,P=ut*nt/se*B;K.projectionMatrix.makePerspective(Jt,R,M,P,B,se),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ot(K,tt){tt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(tt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let tt=K.near,gt=K.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(gt=g.depthFar)),O.near=D.near=C.near=tt,O.far=D.far=C.far=gt,(U!==O.near||z!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),U=O.near,z=O.far),O.layers.mask=K.layers.mask|6,C.layers.mask=O.layers.mask&-5,D.layers.mask=O.layers.mask&-3;let Ut=K.parent,wt=O.cameras;ot(O,Ut);for(let Ht=0;Ht<wt.length;Ht++)ot(wt[Ht],Ut);wt.length===2?et(O,C,D):O.projectionMatrix.copy(C.projectionMatrix),w===null&&K.isPerspectiveCamera&&(w={camera:K,fov:K.fov,zoom:K.zoom}),pt(K,O,Ut)};function pt(K,tt,gt){gt===null?K.matrix.copy(tt.matrixWorld):(K.matrix.copy(gt.matrixWorld),K.matrix.invert(),K.matrix.multiply(tt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(tt.projectionMatrix),K.projectionMatrixInverse.copy(tt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ss*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(K){return p[K]};let Zt=null;function Wt(K,tt){if(h=tt.getViewerPose(c||o),m=tt,h!==null){let gt=h.views;u!==null&&(t.setRenderTargetFramebuffer(_,u.framebuffer),t.setRenderTarget(_));let Ut=!1;gt.length!==O.cameras.length&&(O.cameras.length=0,Ut=!0);for(let nt=0;nt<gt.length;nt++){let lt=gt[nt],ut=null;if(u!==null)ut=u.getViewport(lt);else{let xt=d.getViewSubImage(f,lt);ut=xt.viewport,nt===0&&(t.setRenderTargetTextures(_,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(_))}let ft=I[nt];ft===void 0&&(ft=new qe,ft.layers.enable(nt),ft.viewport=new Re,I[nt]=ft),ft.matrix.fromArray(lt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(lt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(ut.x,ut.y,ut.width,ut.height),nt===0&&(O.matrix.copy(ft.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ut===!0&&O.cameras.push(ft)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let nt=d.getDepthInformation(gt[0]);nt&&nt.isValid&&nt.texture&&g.init(nt,s.renderState)}if(wt&&wt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let nt=0;nt<gt.length;nt++){let lt=gt[nt].camera;if(lt){let ut=p[lt];ut||(ut=new Yr,p[lt]=ut);let ft=d.getCameraImage(lt);ut.sourceTexture=ft}}}}for(let gt=0;gt<b.length;gt++){let Ut=S[gt],wt=b[gt];Ut!==null&&wt!==void 0&&wt.update(Ut,tt,c||o)}Zt&&Zt(K,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),m=null}let $t=new Pf;$t.setAnimationLoop(Wt),this.setAnimationLoop=function(K){Zt=K},this.dispose=function(){}}},sy=new oe,Ff=new Kt;Ff.set(-1,0,0,0,1,0,0,0,1);function ry(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ih(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,E,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&u(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,E):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===hn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===hn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=t.get(p),E=y.envMap,_=y.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(sy.makeRotationFromEuler(_)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Ff),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=E*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function oy(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){let S=b.program;n.uniformBlockBinding(_,S)}function c(_,b){let S=s[_.id];S===void 0&&(g(_),S=h(_),s[_.id]=S,_.addEventListener("dispose",y));let A=b.program;n.updateUBOMapping(_,A);let v=t.render.frame;r[_.id]!==v&&(f(_),r[_.id]=v)}function h(_){let b=d();_.__bindingPointIndex=b;let S=i.createBuffer(),A=_.__size,v=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let b=s[_.id],S=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let v=0,w=S.length;v<w;v++){let C=S[v];if(Array.isArray(C))for(let D=0,I=C.length;D<I;D++)u(C[D],v,D,A);else u(C,v,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(_,b,S,A){if(x(_,b,S,A)===!0){let v=_.__offset,w=_.value;if(Array.isArray(w)){let C=0;for(let D=0;D<w.length;D++){let I=w[D],O=p(I);m(I,_.__data,C),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(C+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,_.__data)}}function m(_,b,S){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,S)}function x(_,b,S,A){let v=_.value,w=b+"_"+S;if(A[w]===void 0)return typeof v=="number"||typeof v=="boolean"?A[w]=v:ArrayBuffer.isView(v)?A[w]=v.slice():A[w]=v.clone(),!0;{let C=A[w];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return A[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function g(_){let b=_.uniforms,S=0,A=16;for(let w=0,C=b.length;w<C;w++){let D=Array.isArray(b[w])?b[w]:[b[w]];for(let I=0,O=D.length;I<O;I++){let U=D[I],z=Array.isArray(U.value)?U.value:[U.value];for(let X=0,G=z.length;X<G;X++){let j=z[X],W=p(j),Q=S%A,et=Q%W.boundary,ot=Q+et;S+=et,ot!==0&&A-ot<W.storage&&(S+=A-ot),U.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=W.storage}}}let v=S%A;return v>0&&(S+=A-v),_.__size=S,_.__cache={},this}function p(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",_),b}function y(_){let b=_.target;b.removeEventListener("dispose",y);let S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function E(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:E}}var ay=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),si=null;function ly(){return si===null&&(si=new Bi(ay,16,16,Zi,De),si.name="DFG_LUT",si.minFilter=$e,si.magFilter=$e,si.wrapS=Kn,si.wrapT=Kn,si.generateMipmaps=!1,si.needsUpdate=!0),si}var ql=class{constructor(t={}){let{canvas:e=Kd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=Ye}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=u,g=new Set([cl,ll,al]),p=new Set([Ye,Hn,cr,Yi,rl,ol]),y=new Uint32Array(4),E=new Int32Array(4),_=new L,b=null,S=null,A=[],v=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,I=null,O=null,U=null,z=null;this._outputColorSpace=He;let X=0,G=0,j=null,W=-1,Q=null,et=new Re,ot=new Re,pt=null,Zt=new Ot(0),Wt=0,$t=e.width,K=e.height,tt=1,gt=null,Ut=null,wt=new Re(0,0,$t,K),Ht=new Re(0,0,$t,K),ae=!1,nt=new js,lt=!1,ut=!1,ft=new oe,xt=new L,zt=new Re,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function Vt(){return j===null?tt:1}let B=n;function se(T,k){return e.getContext(T,k)}let Jt,R,M,P,F,V,st,ht,Z,$,dt,yt,vt,_t,bt,Nt,qt,H,Mt,it,St,Rt,ct;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",Un,!1),B===null){let k="webgl2";if(B=se(k,T),B===null)throw se(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}kt()}catch(T){throw e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",Un,!1),Yt("WebGLRenderer: "+T.message),T}function kt(){Jt=new m_(B),Jt.init(),St=new ey(B,Jt),R=new r_(B,Jt,t,St),M=new Qv(B,Jt),R.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),O=B.createFramebuffer(),U=B.createFramebuffer(),z=B.createFramebuffer(),P=new __(B),F=new zv,V=new ty(B,Jt,M,F,R,St,P),st=new p_(C),ht=new y0(B),Rt=new i_(B,ht),Z=new g_(B,ht,P,Rt),$=new y_(B,Z,ht,Rt,P),H=new v_(B,R,V),bt=new o_(F),dt=new Bv(C,st,Jt,R,Rt,bt),yt=new ry(C,F),vt=new Hv,_t=new Yv(Jt),qt=new n_(C,st,M,$,m,l),Nt=new jv(C,$,R),ct=new oy(B,P,R,M),Mt=new s_(B,Jt,P),it=new x_(B,Jt,P),P.programs=dt.programs,C.capabilities=R,C.extensions=Jt,C.properties=F,C.renderLists=vt,C.shadowMap=Nt,C.state=M,C.info=P}x!==Ye&&(w=new S_(x,e.width,e.height,a,s,r));let Ft=new tu(C,B);this.xr=Ft,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let T=Jt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Jt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(T){T!==void 0&&(tt=T,this.setSize($t,K,!1))},this.getSize=function(T){return T.set($t,K)},this.setSize=function(T,k,J=!0){if(Ft.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}$t=T,K=k,e.width=Math.floor(T*tt),e.height=Math.floor(k*tt),J===!0&&(e.style.width=T+"px",e.style.height=k+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set($t*tt,K*tt).floor()},this.setDrawingBufferSize=function(T,k,J){$t=T,K=k,tt=J,e.width=Math.floor(T*J),e.height=Math.floor(k*J),this.setViewport(0,0,T,k)},this.setEffects=function(T){if(x===Ye){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let k=0;k<T.length;k++)if(T[k].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(et)},this.getViewport=function(T){return T.copy(wt)},this.setViewport=function(T,k,J,q){T.isVector4?wt.set(T.x,T.y,T.z,T.w):wt.set(T,k,J,q),M.viewport(et.copy(wt).multiplyScalar(tt).round())},this.getScissor=function(T){return T.copy(Ht)},this.setScissor=function(T,k,J,q){T.isVector4?Ht.set(T.x,T.y,T.z,T.w):Ht.set(T,k,J,q),M.scissor(ot.copy(Ht).multiplyScalar(tt).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(T){M.setScissorTest(ae=T)},this.setOpaqueSort=function(T){gt=T},this.setTransparentSort=function(T){Ut=T},this.getClearColor=function(T){return T.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,J=!0){let q=0;if(T){let Y=!1;if(j!==null){let At=j.texture.format;Y=g.has(At)}if(Y){let At=j.texture.type,Pt=p.has(At),Tt=qt.getClearColor(),It=qt.getClearAlpha(),Bt=Tt.r,ne=Tt.g,re=Tt.b;Pt?(y[0]=Bt,y[1]=ne,y[2]=re,y[3]=It,B.clearBufferuiv(B.COLOR,0,y)):(E[0]=Bt,E[1]=ne,E[2]=re,E[3]=It,B.clearBufferiv(B.COLOR,0,E))}else q|=B.COLOR_BUFFER_BIT}k&&(q|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&B.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),I=T},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",Un,!1),qt.dispose(),vt.dispose(),_t.dispose(),F.dispose(),st.dispose(),$.dispose(),Rt.dispose(),ct.dispose(),dt.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",Lu),Ft.removeEventListener("sessionend",Uu),ji.stop()};function be(T){T.preventDefault(),Rh("WebGLRenderer: Context Lost."),D=!0}function me(){Rh("WebGLRenderer: Context Restored."),D=!1;let T=P.autoReset,k=Nt.enabled,J=Nt.autoUpdate,q=Nt.needsUpdate,Y=Nt.type;kt(),P.autoReset=T,Nt.enabled=k,Nt.autoUpdate=J,Nt.needsUpdate=q,Nt.type=Y}function Un(T){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Zn(T){let k=T.target;k.removeEventListener("dispose",Zn),Np(k)}function Np(T){Fp(T),F.remove(T)}function Fp(T){let k=F.get(T).programs;k!==void 0&&(k.forEach(function(J){dt.releaseProgram(J)}),T.isShaderMaterial&&dt.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,J,q,Y,At){k===null&&(k=Lt);let Pt=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Tt=zp(T,k,J,q,Y);M.setMaterial(q,Pt);let It=J.index,Bt=1;if(q.wireframe===!0){if(It=Z.getWireframeAttribute(J),It===void 0)return;Bt=2}let ne=J.drawRange,re=J.attributes.position,Dt=ne.start*Bt,ge=(ne.start+ne.count)*Bt;At!==null&&(Dt=Math.max(Dt,At.start*Bt),ge=Math.min(ge,(At.start+At.count)*Bt)),It!==null?(Dt=Math.max(Dt,0),ge=Math.min(ge,It.count)):re!=null&&(Dt=Math.max(Dt,0),ge=Math.min(ge,re.count));let Fe=ge-Dt;if(Fe<0||Fe===1/0)return;Rt.setup(Y,q,Tt,J,It);let Te,Se=Mt;if(It!==null&&(Te=ht.get(It),Se=it,Se.setIndex(Te)),Y.isMesh)q.wireframe===!0?(M.setLineWidth(q.wireframeLinewidth*Vt()),Se.setMode(B.LINES)):Se.setMode(B.TRIANGLES);else if(Y.isLine){let Ke=q.linewidth;Ke===void 0&&(Ke=1),M.setLineWidth(Ke*Vt()),Y.isLineSegments?Se.setMode(B.LINES):Y.isLineLoop?Se.setMode(B.LINE_LOOP):Se.setMode(B.LINE_STRIP)}else Y.isPoints?Se.setMode(B.POINTS):Y.isSprite&&Se.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(Jt.get("WEBGL_multi_draw"))Se.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Ke=Y._multiDrawStarts,Ct=Y._multiDrawCounts,ln=Y._multiDrawCount,fe=It?ht.get(It).bytesPerElement:1,wn=F.get(q).currentProgram.getUniforms();for(let $n=0;$n<ln;$n++)wn.setValue(B,"_gl_DrawID",$n),Se.render(Ke[$n]/fe,Ct[$n])}else if(Y.isInstancedMesh)Se.renderInstances(Dt,Fe,Y.count);else if(J.isInstancedBufferGeometry){let Ke=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ct=Math.min(J.instanceCount,Ke);Se.renderInstances(Dt,Fe,Ct)}else Se.render(Dt,Fe)};function Du(T,k,J,q){I!==null&&T.isNodeMaterial&&I.setObject(q,T),lt===!0&&bt.setState(T,J,!1),T.transparent===!0&&T.side===un&&T.forceSinglePass===!1?(T.side=hn,T.needsUpdate=!0,qo(T,k,q),T.side=Wi,T.needsUpdate=!0,qo(T,k,q),T.side=un):qo(T,k,q)}this.compile=function(T,k,J=null){J===null&&(J=T),I!==null&&I.renderStart(T,k,J),S=_t.get(J),S.init(k),v.push(S),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(S.pushLight(Y),Y.castShadow&&S.pushShadow(Y))}),T!==J&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(S.pushLight(Y),Y.castShadow&&S.pushShadow(Y))}),S.setupLights(),I!==null&&I.updateLights(S.state.lightsArray),ut=this.localClippingEnabled,lt=bt.init(this.clippingPlanes,ut),lt===!0&&bt.setGlobalState(this.clippingPlanes,k),I!==null&&Nt.render(S.state.shadowsArray,J,k);let q=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let At=Y.material;if(At)if(Array.isArray(At))for(let Pt=0;Pt<At.length;Pt++){let Tt=At[Pt];Du(Tt,J,k,Y),q.add(Tt)}else Du(At,J,k,Y),q.add(At)}),S=v.pop(),I!==null&&I.renderEnd(),q},this.compileAsync=function(T,k,J=null){let q=this.compile(T,k,J);return new Promise(Y=>{function At(){if(q.forEach(function(Pt){let It=F.get(Pt).currentProgram;(It===void 0||It.isReady())&&q.delete(Pt)}),q.size===0){Y(T);return}setTimeout(At,10)}Jt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let yc=null;function Op(T){yc&&yc(T)}function Lu(){ji.stop()}function Uu(){ji.start()}let ji=new Pf;ji.setAnimationLoop(Op),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(T){yc=T,Ft.setAnimationLoop(T),T===null?ji.stop():ji.start()},Ft.addEventListener("sessionstart",Lu),Ft.addEventListener("sessionend",Uu),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(T,k);let J=Ft.enabled===!0&&Ft.isPresenting===!0,q=w!==null&&(j===null||J)&&w.begin(C,j);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(k),k=Ft.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,k,j),S=_t.get(T,v.length),S.init(k),S.state.textureUnits=V.getTextureUnits(),v.push(S),ft.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),nt.setFromProjectionMatrix(ft,zn,k.reversedDepth),ut=this.localClippingEnabled,lt=bt.init(this.clippingPlanes,ut),b=vt.get(T,A.length),b.init(),A.push(b),Ft.enabled===!0&&Ft.isPresenting===!0){let Pt=C.xr.getDepthSensingMesh();Pt!==null&&Mc(Pt,k,-1/0,C.sortObjects)}Mc(T,k,0,C.sortObjects),b.finish(),I!==null&&I.updateLights(S.state.lightsArray),C.sortObjects===!0&&b.sort(gt,Ut),Gt=Ft.enabled===!1||Ft.isPresenting===!1||Ft.hasDepthSensing()===!1,Gt&&qt.addToRenderList(b,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),lt===!0&&bt.beginShadows();let Y=S.state.shadowsArray;if(Nt.render(Y,T,k),lt===!0&&bt.endShadows(),(q&&w.hasRenderPass())===!1){let Pt=b.opaque,Tt=b.transmissive;if(S.setupLights(),k.isArrayCamera){let It=k.cameras;if(Tt.length>0)for(let Bt=0,ne=It.length;Bt<ne;Bt++){let re=It[Bt];Fu(Pt,Tt,T,re)}Gt&&qt.render(T);for(let Bt=0,ne=It.length;Bt<ne;Bt++){let re=It[Bt];Nu(b,T,re,re.viewport)}}else Tt.length>0&&Fu(Pt,Tt,T,k),Gt&&qt.render(T),Nu(b,T,k)}j!==null&&G===0&&(V.updateMultisampleRenderTarget(j),V.updateRenderTargetMipmap(j)),q&&w.end(C),T.isScene===!0&&T.onAfterRender(C,T,k),Rt.resetDefaultState(),W=-1,Q=null,v.pop(),v.length>0?(S=v[v.length-1],V.setTextureUnits(S.state.textureUnits),lt===!0&&bt.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,I!==null&&I.renderEnd()};function Mc(T,k,J,q){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLightProbeGrid)S.pushLightProbeGrid(T);else if(T.isLight)S.pushLight(T),T.castShadow&&S.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(nt)){q&&zt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ft);let Pt=$.update(T),Tt=T.material;Tt.visible&&b.push(T,Pt,Tt,J,zt.z,null,k)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(nt))){let Pt=$.update(T),Tt=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),zt.copy(T.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),zt.copy(Pt.boundingSphere.center)),zt.applyMatrix4(T.matrixWorld).applyMatrix4(ft)),Array.isArray(Tt)){let It=Pt.groups;for(let Bt=0,ne=It.length;Bt<ne;Bt++){let re=It[Bt],Dt=Tt[re.materialIndex];Dt&&Dt.visible&&b.push(T,Pt,Dt,J,zt.z,re,k)}}else Tt.visible&&b.push(T,Pt,Tt,J,zt.z,null,k)}}let At=T.children;for(let Pt=0,Tt=At.length;Pt<Tt;Pt++)Mc(At[Pt],k,J,q)}function Nu(T,k,J,q){let{opaque:Y,transmissive:At,transparent:Pt}=T;S.setupLightsView(J),lt===!0&&bt.setGlobalState(C.clippingPlanes,J),q&&M.viewport(et.copy(q)),Y.length>0&&Xo(Y,k,J),At.length>0&&Xo(At,k,J),Pt.length>0&&Xo(Pt,k,J),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Fu(T,k,J,q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[q.id]===void 0){let Dt=Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[q.id]=new Ie(1,1,{generateMipmaps:!0,type:Dt?De:Ye,minFilter:qi,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let At=S.state.transmissionRenderTarget[q.id],Pt=q.viewport||et;At.setSize(Pt.z*C.transmissionResolutionScale,Pt.w*C.transmissionResolutionScale);let Tt=C.getRenderTarget(),It=C.getActiveCubeFace(),Bt=C.getActiveMipmapLevel();C.setRenderTarget(At),C.getClearColor(Zt),Wt=C.getClearAlpha(),Wt<1&&C.setClearColor(16777215,.5),C.clear(),Gt&&qt.render(J);let ne=C.toneMapping;C.toneMapping=kn;let re=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),S.setupLightsView(q),lt===!0&&bt.setGlobalState(C.clippingPlanes,q),Xo(T,J,q),V.updateMultisampleRenderTarget(At),V.updateRenderTargetMipmap(At),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let ge=0,Fe=k.length;ge<Fe;ge++){let Te=k[ge],{object:Se,geometry:Ke,material:Ct,group:ln}=Te;if(Ct.side===un&&Se.layers.test(q.layers)){let fe=Ct.side;Ct.side=hn,Ct.needsUpdate=!0,Ou(Se,J,q,Ke,Ct,ln),Ct.side=fe,Ct.needsUpdate=!0,Dt=!0}}Dt===!0&&(V.updateMultisampleRenderTarget(At),V.updateRenderTargetMipmap(At))}C.setRenderTarget(Tt,It,Bt),C.setClearColor(Zt,Wt),re!==void 0&&(q.viewport=re),C.toneMapping=ne}function Xo(T,k,J){let q=k.isScene===!0?k.overrideMaterial:null;for(let Y=0,At=T.length;Y<At;Y++){let Pt=T[Y],{object:Tt,geometry:It,group:Bt}=Pt,ne=Pt.material;ne.allowOverride===!0&&q!==null&&(ne=q),Tt.layers.test(J.layers)&&Ou(Tt,k,J,It,ne,Bt)}}function Ou(T,k,J,q,Y,At){I!==null&&Y.isNodeMaterial&&I.setObject(T,Y),T.onBeforeRender(C,k,J,q,Y,At),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(C,k,J,q,T,At),Y.transparent===!0&&Y.side===un&&Y.forceSinglePass===!1?(Y.side=hn,Y.needsUpdate=!0,C.renderBufferDirect(J,k,q,Y,T,At),Y.side=Wi,Y.needsUpdate=!0,C.renderBufferDirect(J,k,q,Y,T,At),Y.side=un):C.renderBufferDirect(J,k,q,Y,T,At),T.onAfterRender(C,k,J,q,Y,At)}function qo(T,k,J){k.isScene!==!0&&(k=Lt);let q=F.get(T),Y=S.state.lights,At=S.state.shadowsArray,Pt=Y.state.version,Tt=dt.getParameters(T,Y.state,At,k,J,S.state.lightProbeGridArray),It=dt.getProgramCacheKey(Tt),Bt=q.programs;q.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,q.fog=k.fog;let ne=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;q.envMap=st.get(T.envMap||q.environment,ne),q.envMapRotation=q.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Bt===void 0&&(T.addEventListener("dispose",Zn),Bt=new Map,q.programs=Bt);let re=Bt.get(It);if(re!==void 0){if(q.currentProgram===re&&q.lightsStateVersion===Pt)return zu(T,Tt),re}else Tt.uniforms=dt.getUniforms(T),I!==null&&T.isNodeMaterial&&I.build(T,J,Tt),T.onBeforeCompile(Tt,C),re=dt.acquireProgram(Tt,It),Bt.set(It,re),q.uniforms=Tt.uniforms;let Dt=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Dt.clippingPlanes=bt.uniform),zu(T,Tt),q.needsLights=Hp(T),q.lightsStateVersion=Pt,q.needsLights&&(Dt.ambientLightColor.value=Y.state.ambient,Dt.lightProbe.value=Y.state.probe,Dt.sunLights.value=Y.state.sun,Dt.sunLightShadows.value=Y.state.sunShadow,Dt.directionalLights.value=Y.state.directional,Dt.directionalLightShadows.value=Y.state.directionalShadow,Dt.spotLights.value=Y.state.spot,Dt.spotLightShadows.value=Y.state.spotShadow,Dt.rectAreaLights.value=Y.state.rectArea,Dt.ltc_1.value=Y.state.rectAreaLTC1,Dt.ltc_2.value=Y.state.rectAreaLTC2,Dt.pointLights.value=Y.state.point,Dt.pointLightShadows.value=Y.state.pointShadow,Dt.hemisphereLights.value=Y.state.hemi,Dt.sunShadowMatrix.value=Y.state.sunShadowMatrix,Dt.sunShadowCascade.value=Y.state.sunShadowCascade,Dt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Dt.spotLightMatrix.value=Y.state.spotLightMatrix,Dt.spotLightMap.value=Y.state.spotLightMap,Dt.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=S.state.lightProbeGridArray.length>0,q.currentProgram=re,q.uniformsList=null,re}function Bu(T){if(T.uniformsList===null){let k=T.currentProgram.getUniforms();T.uniformsList=dr.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function zu(T,k){let J=F.get(T);J.outputColorSpace=k.outputColorSpace,J.batching=k.batching,J.batchingColor=k.batchingColor,J.instancing=k.instancing,J.instancingColor=k.instancingColor,J.instancingMorph=k.instancingMorph,J.skinning=k.skinning,J.morphTargets=k.morphTargets,J.morphNormals=k.morphNormals,J.morphColors=k.morphColors,J.morphTargetsCount=k.morphTargetsCount,J.numClippingPlanes=k.numClippingPlanes,J.numIntersection=k.numClipIntersection,J.vertexAlphas=k.vertexAlphas,J.vertexTangents=k.vertexTangents,J.toneMapping=k.toneMapping}function Bp(T,k){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;_.setFromMatrixPosition(k.matrixWorld);for(let J=0,q=T.length;J<q;J++){let Y=T[J];if(Y.texture!==null&&Y.boundingBox.containsPoint(_))return Y}return null}function zp(T,k,J,q,Y){k.isScene!==!0&&(k=Lt),V.resetTextureUnits();let At=k.fog,Pt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?k.environment:null,Tt=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:le.workingColorSpace,It=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Bt=st.get(q.envMap||Pt,It),ne=q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,re=!!J.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Dt=!!J.morphAttributes.position,ge=!!J.morphAttributes.normal,Fe=!!J.morphAttributes.color,Te=kn;q.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Te=C.toneMapping);let Se=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ke=Se!==void 0?Se.length:0,Ct=F.get(q),ln=S.state.lights;if(lt===!0&&(ut===!0||T!==Q)){let Ee=T===Q&&q.id===W;bt.setState(q,T,Ee)}let fe=!1;q.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==ln.state.version||Ct.outputColorSpace!==Tt||Y.isBatchedMesh&&Ct.batching===!1||!Y.isBatchedMesh&&Ct.batching===!0||Y.isBatchedMesh&&Ct.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Ct.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Ct.instancing===!1||!Y.isInstancedMesh&&Ct.instancing===!0||Y.isSkinnedMesh&&Ct.skinning===!1||!Y.isSkinnedMesh&&Ct.skinning===!0||Y.isInstancedMesh&&Ct.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ct.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ct.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ct.instancingMorph===!1&&Y.morphTexture!==null||Ct.envMap!==Bt||q.fog===!0&&Ct.fog!==At||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==bt.numPlanes||Ct.numIntersection!==bt.numIntersection)||Ct.vertexAlphas!==ne||Ct.vertexTangents!==re||Ct.morphTargets!==Dt||Ct.morphNormals!==ge||Ct.morphColors!==Fe||Ct.toneMapping!==Te||Ct.morphTargetsCount!==Ke||!!Ct.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(fe=!0):(fe=!0,Ct.__version=q.version);let wn=Ct.currentProgram;fe===!0&&(wn=qo(q,k,Y),I&&q.isNodeMaterial&&I.onUpdateProgram(q,wn,Ct));let $n=!1,Ci=!1,Ts=!1,ye=wn.getUniforms(),Ue=Ct.uniforms;if(M.useProgram(wn.program)&&($n=!0,Ci=!0,Ts=!0),q.id!==W&&(W=q.id,Ci=!0),Ct.needsLights){let Ee=Bp(S.state.lightProbeGridArray,Y);Ct.lightProbeGrid!==Ee&&(Ct.lightProbeGrid=Ee,Ci=!0)}if($n||Q!==T){M.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ye.setValue(B,"projectionMatrix",T.projectionMatrix),ye.setValue(B,"viewMatrix",T.matrixWorldInverse);let Ii=ye.map.cameraPosition;Ii!==void 0&&Ii.setValue(B,xt.setFromMatrixPosition(T.matrixWorld)),R.logarithmicDepthBuffer&&ye.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ye.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),Q!==T&&(Q=T,Ci=!0,Ts=!0)}if(Ct.needsLights&&(ln.state.sunShadowMap.length>0&&ye.setValue(B,"sunShadowMap",ln.state.sunShadowMap,V),ln.state.directionalShadowMap.length>0&&ye.setValue(B,"directionalShadowMap",ln.state.directionalShadowMap,V),ln.state.spotShadowMap.length>0&&ye.setValue(B,"spotShadowMap",ln.state.spotShadowMap,V),ln.state.pointShadowMap.length>0&&ye.setValue(B,"pointShadowMap",ln.state.pointShadowMap,V)),Y.isSkinnedMesh){ye.setOptional(B,Y,"bindMatrix"),ye.setOptional(B,Y,"bindMatrixInverse");let Ee=Y.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),ye.setValue(B,"boneTexture",Ee.boneTexture,V))}Y.isBatchedMesh&&(ye.setOptional(B,Y,"batchingTexture"),ye.setValue(B,"batchingTexture",Y._matricesTexture,V),ye.setOptional(B,Y,"batchingIdTexture"),ye.setValue(B,"batchingIdTexture",Y._indirectTexture,V),ye.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ye.setValue(B,"batchingColorTexture",Y._colorsTexture,V));let Pi=J.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&H.update(Y,J,wn),(Ci||Ct.receiveShadow!==Y.receiveShadow)&&(Ct.receiveShadow=Y.receiveShadow,ye.setValue(B,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&k.environment!==null&&(Ue.envMapIntensity.value=k.environmentIntensity),Ue.dfgLUT!==void 0&&(Ue.dfgLUT.value=ly()),Ci){if(ye.setValue(B,"toneMappingExposure",C.toneMappingExposure),Ct.needsLights&&kp(Ue,Ts),At&&q.fog===!0&&yt.refreshFogUniforms(Ue,At),yt.refreshMaterialUniforms(Ue,q,tt,K,S.state.transmissionRenderTarget[T.id]),Ct.needsLights&&Ct.lightProbeGrid){let Ee=Ct.lightProbeGrid;Ue.probesSH.value=Ee.texture,Ue.probesMin.value.copy(Ee.boundingBox.min),Ue.probesMax.value.copy(Ee.boundingBox.max),Ue.probesResolution.value.copy(Ee.resolution)}dr.upload(B,Bu(Ct),Ue,V)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(dr.upload(B,Bu(Ct),Ue,V),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ye.setValue(B,"center",Y.center),ye.setValue(B,"modelViewMatrix",Y.modelViewMatrix),ye.setValue(B,"normalMatrix",Y.normalMatrix),ye.setValue(B,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let Ee=q.uniformsGroups;for(let Ii=0,ws=Ee.length;Ii<ws;Ii++){let Hu=Ee[Ii];ct.update(Hu,wn),ct.bind(Hu,wn)}}return wn}function kp(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.sunLights.needsUpdate=k,T.sunLightShadows.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Hp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(T,k,J){let q=F.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),F.get(T.texture).__webglTexture=k,F.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:J,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){let J=F.get(T);J.__webglFramebuffer=k,J.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,J=0){j=T,X=k,G=J;let q=null,Y=!1,At=!1;if(T){let Tt=F.get(T);if(Tt.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(B.FRAMEBUFFER,Tt.__webglFramebuffer),et.copy(T.viewport),ot.copy(T.scissor),pt=T.scissorTest,M.viewport(et),M.scissor(ot),M.setScissorTest(pt),W=-1;return}else if(Tt.__webglFramebuffer===void 0)V.setupRenderTarget(T);else if(Tt.__hasExternalTextures)V.rebindTextures(T,F.get(T.texture).__webglTexture,F.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let ne=T.depthTexture;if(Tt.__boundDepthTexture!==ne){if(ne!==null&&F.has(ne)&&(T.width!==ne.image.width||T.height!==ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(T)}}let It=T.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(At=!0);let Bt=F.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Bt[k])?q=Bt[k][J]:q=Bt[k],Y=!0):T.samples>0&&V.useMultisampledRTT(T)===!1?q=F.get(T).__webglMultisampledFramebuffer:Array.isArray(Bt)?q=Bt[J]:q=Bt,et.copy(T.viewport),ot.copy(T.scissor),pt=T.scissorTest}else et.copy(wt).multiplyScalar(tt).floor(),ot.copy(Ht).multiplyScalar(tt).floor(),pt=ae;if(J!==0&&(q=O),M.bindFramebuffer(B.FRAMEBUFFER,q)&&M.drawBuffers(T,q),M.viewport(et),M.scissor(ot),M.setScissorTest(pt),Y){let Tt=F.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,Tt.__webglTexture,J)}else if(At){let Tt=k;for(let It=0;It<T.textures.length;It++){let Bt=F.get(T.textures[It]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+It,Bt.__webglTexture,J,Tt)}}else if(T!==null&&J!==0){let Tt=F.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Tt.__webglTexture,J)}W=-1};function ku(T){let k=F.get(T);return(k.__readFormat!==T.format||k.__readType!==T.type)&&(k.__readFormat=T.format,k.__readType=T.type,k.__formatReadable=R.textureFormatReadable(T.format),k.__typeReadable=R.textureTypeReadable(T.type)),k}this.readRenderTargetPixels=function(T,k,J,q,Y,At,Pt,Tt=0){if(!(T&&T.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=F.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pt!==void 0&&(It=It[Pt]),It){M.bindFramebuffer(B.FRAMEBUFFER,It);try{let Bt=T.textures[Tt],ne=Bt.format,re=Bt.type;T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Tt);let Dt=ku(Bt);if(Dt.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Dt.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-q&&J>=0&&J<=T.height-Y&&B.readPixels(k,J,q,Y,St.convert(ne),St.convert(re),At)}finally{let Bt=j!==null?F.get(j).__webglFramebuffer:null;M.bindFramebuffer(B.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(T,k,J,q,Y,At,Pt,Tt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=F.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pt!==void 0&&(It=It[Pt]),It)if(k>=0&&k<=T.width-q&&J>=0&&J<=T.height-Y){M.bindFramebuffer(B.FRAMEBUFFER,It);let Bt=T.textures[Tt],ne=Bt.format,re=Bt.type;T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Tt);let Dt=ku(Bt);if(Dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ge=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ge),B.bufferData(B.PIXEL_PACK_BUFFER,At.byteLength,B.STREAM_READ),B.readPixels(k,J,q,Y,St.convert(ne),St.convert(re),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Fe=j!==null?F.get(j).__webglFramebuffer:null;M.bindFramebuffer(B.FRAMEBUFFER,Fe);let Te=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Qd(B,Te,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ge),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,At),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ge),B.deleteSync(Te),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,J=0){let q=Math.pow(2,-J),Y=Math.floor(T.image.width*q),At=Math.floor(T.image.height*q),Pt=k!==null?k.x:0,Tt=k!==null?k.y:0;V.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,J,0,0,Pt,Tt,Y,At),M.unbindTexture()},this.copyTextureToTexture=function(T,k,J=null,q=null,Y=0,At=0){let Pt,Tt,It,Bt,ne,re,Dt,ge,Fe,Te=T.isCompressedTexture?T.mipmaps[At]:T.image;if(J!==null)Pt=J.max.x-J.min.x,Tt=J.max.y-J.min.y,It=J.isBox3?J.max.z-J.min.z:1,Bt=J.min.x,ne=J.min.y,re=J.isBox3?J.min.z:0;else{let Ue=Math.pow(2,-Y);Pt=Math.floor(Te.width*Ue),Tt=Math.floor(Te.height*Ue),T.isDataArrayTexture?It=Te.depth:T.isData3DTexture?It=Math.floor(Te.depth*Ue):It=1,Bt=0,ne=0,re=0}q!==null?(Dt=q.x,ge=q.y,Fe=q.z):(Dt=0,ge=0,Fe=0);let Se=St.convert(k.format),Ke=St.convert(k.type),Ct;k.isData3DTexture?(V.setTexture3D(k,0),Ct=B.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(V.setTexture2DArray(k,0),Ct=B.TEXTURE_2D_ARRAY):(V.setTexture2D(k,0),Ct=B.TEXTURE_2D),M.activeTexture(B.TEXTURE0),M.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),M.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),M.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);let ln=M.getParameter(B.UNPACK_ROW_LENGTH),fe=M.getParameter(B.UNPACK_IMAGE_HEIGHT),wn=M.getParameter(B.UNPACK_SKIP_PIXELS),$n=M.getParameter(B.UNPACK_SKIP_ROWS),Ci=M.getParameter(B.UNPACK_SKIP_IMAGES);M.pixelStorei(B.UNPACK_ROW_LENGTH,Te.width),M.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Te.height),M.pixelStorei(B.UNPACK_SKIP_PIXELS,Bt),M.pixelStorei(B.UNPACK_SKIP_ROWS,ne),M.pixelStorei(B.UNPACK_SKIP_IMAGES,re);let Ts=T.isDataArrayTexture||T.isData3DTexture,ye=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){let Ue=F.get(T),Pi=F.get(k),Ee=F.get(Ue.__renderTarget),Ii=F.get(Pi.__renderTarget);M.bindFramebuffer(B.READ_FRAMEBUFFER,Ee.__webglFramebuffer),M.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let ws=0;ws<It;ws++)Ts&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,F.get(T).__webglTexture,Y,re+ws),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,F.get(k).__webglTexture,At,Fe+ws)),B.blitFramebuffer(Bt,ne,Pt,Tt,Dt,ge,Pt,Tt,B.DEPTH_BUFFER_BIT,B.NEAREST);M.bindFramebuffer(B.READ_FRAMEBUFFER,null),M.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||F.has(T)){let Ue=F.get(T),Pi=F.get(k);M.bindFramebuffer(B.READ_FRAMEBUFFER,U),M.bindFramebuffer(B.DRAW_FRAMEBUFFER,z);for(let Ee=0;Ee<It;Ee++)Ts?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ue.__webglTexture,Y,re+Ee):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ue.__webglTexture,Y),ye?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pi.__webglTexture,At,Fe+Ee):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Pi.__webglTexture,At),Y!==0?B.blitFramebuffer(Bt,ne,Pt,Tt,Dt,ge,Pt,Tt,B.COLOR_BUFFER_BIT,B.NEAREST):ye?B.copyTexSubImage3D(Ct,At,Dt,ge,Fe+Ee,Bt,ne,Pt,Tt):B.copyTexSubImage2D(Ct,At,Dt,ge,Bt,ne,Pt,Tt);M.bindFramebuffer(B.READ_FRAMEBUFFER,null),M.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ye?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(Ct,At,Dt,ge,Fe,Pt,Tt,It,Se,Ke,Te.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(Ct,At,Dt,ge,Fe,Pt,Tt,It,Se,Te.data):B.texSubImage3D(Ct,At,Dt,ge,Fe,Pt,Tt,It,Se,Ke,Te):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,At,Dt,ge,Pt,Tt,Se,Ke,Te.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,At,Dt,ge,Te.width,Te.height,Se,Te.data):B.texSubImage2D(B.TEXTURE_2D,At,Dt,ge,Pt,Tt,Se,Ke,Te);M.pixelStorei(B.UNPACK_ROW_LENGTH,ln),M.pixelStorei(B.UNPACK_IMAGE_HEIGHT,fe),M.pixelStorei(B.UNPACK_SKIP_PIXELS,wn),M.pixelStorei(B.UNPACK_SKIP_ROWS,$n),M.pixelStorei(B.UNPACK_SKIP_IMAGES,Ci),At===0&&k.generateMipmaps&&B.generateMipmap(Ct),M.unbindTexture()},this.initRenderTarget=function(T){F.get(T).__webglFramebuffer===void 0&&V.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?V.setTextureCube(T,0):T.isData3DTexture?V.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?V.setTexture2DArray(T,0):V.setTexture2D(T,0),M.unbindTexture()},this.resetState=function(){X=0,G=0,j=null,M.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var oi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},cy=new Gi(-1,1,1,-1,0,1),eu=class extends Me{constructor(){super(),this.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new te([0,2,0,0,2,0],2))}},hy=new eu,ai=class{constructor(t){this._mesh=new pe(hy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,cy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ro={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new rt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new oe},cameraProjectionMatrixInverse:{value:new oe},cameraWorldMatrix:{value:new oe},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

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
		}`},Co={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},$l={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Of(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=uy(t),n=e.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=e[o],l=2*Math.PI*a/n,c=new L(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Bi(s,t,t);return r.wrapS=mn,r.wrapT=mn,r.needsUpdate=!0,r}function uy(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),s=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=o++;r++,s--}return n}var Po={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:nu(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new rt},cameraProjectionMatrixInverse:{value:new oe},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function nu(i,t,e){let n=dy(i,t,e),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function dy(i,t,e){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*t*s/i,o=Math.pow(s/(i-1),e);n.push(new L(Math.cos(r),Math.sin(r),o))}return n}var $i={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Jl=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,d=(l+c)*h,f=l-d,u=c-d,m=t-f,x=e-u,g,p;m>x?(g=1,p=0):(g=0,p=1);let y=m-g+h,E=x-p+h,_=m-1+2*h,b=x-1+2*h,S=l&255,A=c&255,v=this.perm[S+this.perm[A]]%12,w=this.perm[S+g+this.perm[A+p]]%12,C=this.perm[S+1+this.perm[A+1]]%12,D=.5-m*m-x*x;D<0?n=0:(D*=D,n=D*D*this._dot(this.grad3[v],m,x));let I=.5-y*y-E*E;I<0?s=0:(I*=I,s=I*I*this._dot(this.grad3[w],y,E));let O=.5-_*_-b*b;return O<0?r=0:(O*=O,r=O*O*this._dot(this.grad3[C],_,b)),70*(n+s+r)}noise3d(t,e,n){let s,r,o,a,c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),d=Math.floor(e+c),f=Math.floor(n+c),u=1/6,m=(h+d+f)*u,x=h-m,g=d-m,p=f-m,y=t-x,E=e-g,_=n-p,b,S,A,v,w,C;y>=E?E>=_?(b=1,S=0,A=0,v=1,w=1,C=0):y>=_?(b=1,S=0,A=0,v=1,w=0,C=1):(b=0,S=0,A=1,v=1,w=0,C=1):E<_?(b=0,S=0,A=1,v=0,w=1,C=1):y<_?(b=0,S=1,A=0,v=0,w=1,C=1):(b=0,S=1,A=0,v=1,w=1,C=0);let D=y-b+u,I=E-S+u,O=_-A+u,U=y-v+2*u,z=E-w+2*u,X=_-C+2*u,G=y-1+3*u,j=E-1+3*u,W=_-1+3*u,Q=h&255,et=d&255,ot=f&255,pt=this.perm[Q+this.perm[et+this.perm[ot]]]%12,Zt=this.perm[Q+b+this.perm[et+S+this.perm[ot+A]]]%12,Wt=this.perm[Q+v+this.perm[et+w+this.perm[ot+C]]]%12,$t=this.perm[Q+1+this.perm[et+1+this.perm[ot+1]]]%12,K=.6-y*y-E*E-_*_;K<0?s=0:(K*=K,s=K*K*this._dot3(this.grad3[pt],y,E,_));let tt=.6-D*D-I*I-O*O;tt<0?r=0:(tt*=tt,r=tt*tt*this._dot3(this.grad3[Zt],D,I,O));let gt=.6-U*U-z*z-X*X;gt<0?o=0:(gt*=gt,o=gt*gt*this._dot3(this.grad3[Wt],U,z,X));let Ut=.6-G*G-j*j-W*W;return Ut<0?a=0:(Ut*=Ut,a=Ut*Ut*this._dot3(this.grad3[$t],G,j,W)),32*(s+r+o+a)}noise4d(t,e,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,f,u,m,x=(t+e+n+s)*l,g=Math.floor(t+x),p=Math.floor(e+x),y=Math.floor(n+x),E=Math.floor(s+x),_=(g+p+y+E)*c,b=g-_,S=p-_,A=y-_,v=E-_,w=t-b,C=e-S,D=n-A,I=s-v,O=w>C?32:0,U=w>D?16:0,z=C>D?8:0,X=w>I?4:0,G=C>I?2:0,j=D>I?1:0,W=O+U+z+X+G+j,Q=o[W][0]>=3?1:0,et=o[W][1]>=3?1:0,ot=o[W][2]>=3?1:0,pt=o[W][3]>=3?1:0,Zt=o[W][0]>=2?1:0,Wt=o[W][1]>=2?1:0,$t=o[W][2]>=2?1:0,K=o[W][3]>=2?1:0,tt=o[W][0]>=1?1:0,gt=o[W][1]>=1?1:0,Ut=o[W][2]>=1?1:0,wt=o[W][3]>=1?1:0,Ht=w-Q+c,ae=C-et+c,nt=D-ot+c,lt=I-pt+c,ut=w-Zt+2*c,ft=C-Wt+2*c,xt=D-$t+2*c,zt=I-K+2*c,Lt=w-tt+3*c,Gt=C-gt+3*c,Vt=D-Ut+3*c,B=I-wt+3*c,se=w-1+4*c,Jt=C-1+4*c,R=D-1+4*c,M=I-1+4*c,P=g&255,F=p&255,V=y&255,st=E&255,ht=a[P+a[F+a[V+a[st]]]]%32,Z=a[P+Q+a[F+et+a[V+ot+a[st+pt]]]]%32,$=a[P+Zt+a[F+Wt+a[V+$t+a[st+K]]]]%32,dt=a[P+tt+a[F+gt+a[V+Ut+a[st+wt]]]]%32,yt=a[P+1+a[F+1+a[V+1+a[st+1]]]]%32,vt=.6-w*w-C*C-D*D-I*I;vt<0?h=0:(vt*=vt,h=vt*vt*this._dot4(r[ht],w,C,D,I));let _t=.6-Ht*Ht-ae*ae-nt*nt-lt*lt;_t<0?d=0:(_t*=_t,d=_t*_t*this._dot4(r[Z],Ht,ae,nt,lt));let bt=.6-ut*ut-ft*ft-xt*xt-zt*zt;bt<0?f=0:(bt*=bt,f=bt*bt*this._dot4(r[$],ut,ft,xt,zt));let Nt=.6-Lt*Lt-Gt*Gt-Vt*Vt-B*B;Nt<0?u=0:(Nt*=Nt,u=Nt*Nt*this._dot4(r[dt],Lt,Gt,Vt,B));let qt=.6-se*se-Jt*Jt-R*R-M*M;return qt<0?m=0:(qt*=qt,m=qt*qt*this._dot4(r[yt],se,Jt,R,M)),27*(h+d+f+u+m)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}_dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}};var Io=class i extends oi{constructor(t,e,n=512,s=512,r,o,a){super(),this.width=n,this.height=s,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Of(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Ie(this.width,this.height,{type:De,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new _e({defines:Object.assign({},Ro.defines),uniforms:dn.clone(Ro.uniforms),vertexShader:Ro.vertexShader,fragmentShader:Ro.fragmentShader,blending:Ne,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ro,this.normalMaterial.blending=Ne,this.pdMaterial=new _e({defines:Object.assign({},Po.defines),uniforms:dn.clone(Po.uniforms),vertexShader:Po.vertexShader,fragmentShader:Po.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new _e({defines:Object.assign({},Co.defines),uniforms:dn.clone(Co.uniforms),vertexShader:Co.vertexShader,fragmentShader:Co.fragmentShader,blending:Ne}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new _e({uniforms:dn.clone($i.uniforms),vertexShader:$i.vertexShader,fragmentShader:$i.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:po,blendDst:us,blendEquation:In,blendSrcAlpha:fo,blendDstAlpha:us,blendEquationAlpha:In}),this.blendMaterial=new _e({uniforms:dn.clone($l.uniforms),vertexShader:$l.vertexShader,fragmentShader:$l.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:tl,blendSrc:po,blendDst:us,blendEquation:In,blendSrcAlpha:fo,blendDstAlpha:us,blendEquationAlpha:In}),this._fsQuad=new ai(null),this._originalClearColor=new Ot,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new ni,this.depthTexture.format=ii,this.depthTexture.type=Yi,this.normalRenderTarget=new Ie(this.width,this.height,{minFilter:Ae,magFilter:Ae,type:De,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=nu(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ne,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ne,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ne,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ne,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ne,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,s,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_renderOverride(t,e,n,s,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new Jl,n=t*t*4,s=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let l=o,c=a;s[(o*t+a)*4]=(e.noise(l,c)*.5+.5)*255,s[(o*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(o*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(o*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let r=new Bi(s,t,t,xn,Ye);return r.wrapS=mn,r.wrapT=mn,r.needsUpdate=!0,r}};Io.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Bf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ot(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var mr=class i extends oi{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new rt(t.x,t.y):new rt(256,256),this.clearColor=new Ot(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ie(r,o,{type:De,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Ie(r,o,{type:De,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Ie(r,o,{type:De,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Bf;this.highPassUniforms=dn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _e({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new rt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=dn.clone($i.uniforms),this.blendMaterial=new _e({uniforms:this.copyUniforms,vertexShader:$i.vertexShader,fragmentShader:$i.fragmentShader,premultipliedAlpha:!0,blending:hs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ot,this._oldClearAlpha=1,this._basic=new en,this._fsQuad=new ai(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new rt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new _e({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new rt(.5,.5)},direction:{value:new rt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new _e({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};mr.BlurDirectionX=new rt(1,0);mr.BlurDirectionY=new rt(0,1);var Kl=class extends oi{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof _e?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=dn.clone(t.uniforms),this.material=new _e({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new ai(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var zf={name:"VignetteShader",uniforms:{tDiffuse:{value:null},offset:{value:1},darkness:{value:1}},vertexShader:`

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

		}`};var Do={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};var jl=class extends oi{constructor(t,e,n){super(),this.scene=t,this.camera=e;let s=n.focus!==void 0?n.focus:1,r=n.aperture!==void 0?n.aperture:.025,o=n.maxblur!==void 0?n.maxblur:1;this._renderTargetDepth=new Ie(1,1,{minFilter:Ae,magFilter:Ae,type:De}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new er,this._materialDepth.depthPacking=wh,this._materialDepth.blending=Ne;let a=dn.clone(Do.uniforms);a.tDepth.value=this._renderTargetDepth.texture,a.focus.value=s,a.aspect.value=e.aspect,a.aperture.value=r,a.maxblur.value=o,a.nearClip.value=e.near,a.farClip.value=e.far,this.materialBokeh=new _e({defines:Object.assign({},Do.defines),uniforms:a,vertexShader:Do.vertexShader,fragmentShader:Do.fragmentShader}),this.uniforms=a,this._fsQuad=new ai(this.materialBokeh),this._oldClearColor=new Ot}render(t,e,n){this.scene.overrideMaterial=this._materialDepth,t.getClearColor(this._oldClearColor);let s=t.getClearAlpha(),r=t.autoClear;t.autoClear=!1,t.setClearColor(16777215),t.setClearAlpha(1),t.setRenderTarget(this._renderTargetDepth),t.clear(),t.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),t.clear(),this._fsQuad.render(t)),this.scene.overrideMaterial=null,t.setClearColor(this._oldClearColor),t.setClearAlpha(s),t.autoClear=r}setSize(t,e){this.materialBokeh.uniforms.aspect.value=t/e,this._renderTargetDepth.setSize(t,e)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}};var du={};Gp(du,{APRON:()=>ee,ARCH:()=>Wn,BALL_R:()=>ci,DROPS:()=>ue,FLIPPER:()=>_r,FLIPPERS:()=>hi,GATE:()=>vs,GI_SPOTS_UPPER:()=>uu,GUIDES:()=>lu,LADDER:()=>Xn,LANE_LETTERS:()=>cu,ORBIT:()=>Ze,ORBIT_ARROWS:()=>Bo,ORBIT_GUIDES:()=>ru,ORBIT_POSTS:()=>au,ORBIT_ROLLOVERS:()=>Uo,ORBIT_TOP_CROWN:()=>fy,ORBIT_WEDGES:()=>ou,PF:()=>at,PLAY_AGAIN:()=>bi,POP:()=>yr,POPS:()=>Fo,RAMP:()=>Dn,RAMPS:()=>Oo,RAMP_ARROWS:()=>nc,REBOUND:()=>No,RETURN_LANES:()=>Ms,RUBBER_POSTS:()=>hu,SHOOTER:()=>Qt,SLINGS:()=>vr,STAR_POSTS:()=>Lo,TOP_LANES:()=>fn,TOP_LANE_INSERTS:()=>ic,WIRE:()=>ys});var at={w:514.35,l:1066.8,thick:12.7,cx:237.175,pitch:6.5,rail:6},ci=13.5,hi=[{side:"left",x:148.275,y:177.8,rest:-25,up:27},{side:"right",x:326.075,y:177.8,rest:205,up:153}],_r={baseR:11.28,tipR:6.64,length:62.8,height:24.1,flange:[9.21,4.45],groove:[8.05,3.68],cap:[8.2,3.4],rubberFrom:8.6,rubberTo:20},_s=([i,t])=>[2*at.cx-i,t],kf=[[98.5,355],[135.18,255.65],[98.5,278.1]],vr=[{side:"left",posts:kf},{side:"right",posts:kf.map(_s)}],ee={deck:47.6,lipR:149.8,lipCy:88.9+149.8,lipEndY:104.4,leftShoulder:[6,217.1],rightShoulder:[474.35,221.1]};ee.lipHalf=Math.sqrt(ee.lipR**2-(ee.lipCy-ee.lipEndY)**2);ee.lipLeft=[at.cx-ee.lipHalf,ee.lipEndY];ee.lipRight=[at.cx+ee.lipHalf,ee.lipEndY];var Qt={laneLeft:474.35,laneRight:508.35,dividerFace:468.35,dividerTop:840,apronTop:221.1,ballRest:[491.35,117.9]},Wn={top:at.l-at.rail,left:{cx:at.rail+130,cy:at.l-at.rail-130,r:130},right:{cx:Qt.laneRight-150,cy:at.l-at.rail-150,r:150}},Ze={lane:40,leftFace:at.rail,rightFace:Qt.dividerFace,steel:1.6,cornerLeft:94,cornerRight:110,slope:7,crownGap:34,crownR:200,open:72,bend:690,throatAngle:30,throatR:120,innerThroatR:70,throatWidth:54,throatLength:80,mouthPost:11,wedgeAngle:60,lanePostR:4.76,rolloverY:800},_n=i=>i*Math.PI/180,li=(i,t,e=1)=>[i[0]+t[0]*e,i[1]+t[1]*e],gr=([i,t],e,n,s,r=2)=>{let o=Math.max(1,Math.ceil(_n(Math.abs(s-n))*e/r));return Array.from({length:o+1},(a,l)=>{let c=_n(n+(s-n)*l/o);return[i+Math.cos(c)*e,t+Math.sin(c)*e]})},Gn=(i,t,e=4)=>{let n=Math.max(1,Math.ceil(Math.hypot(t[0]-i[0],t[1]-i[1])/e));return Array.from({length:n+1},(s,r)=>[i[0]+(t[0]-i[0])*r/n,i[1]+(t[1]-i[1])*r/n])},xs=(...i)=>i.flat().filter((t,e,n)=>e===0||Math.hypot(t[0]-n[e-1][0],t[1]-n[e-1][1])>1e-6).map(([t,e])=>[Math.round(t*100)/100,Math.round(e*100)/100]),su=(i,t)=>i.map((e,n)=>{let s=i[Math.max(0,n-1)],r=i[Math.min(i.length-1,n+1)],o=Math.hypot(r[0]-s[0],r[1]-s[1])||1,a=Ze.steel/2*t;return[Math.round((e[0]+(r[1]-s[1])/o*a)*100)/100,Math.round((e[1]-(r[0]-s[0])/o*a)*100)/100]}),tc=i=>i.map(_s),vn=(()=>{let i=Ze,t=i.steel/2,e=[Math.sin(_n(i.throatAngle)),-Math.cos(_n(i.throatAngle))],n=[Math.cos(_n(i.throatAngle)),Math.sin(_n(i.throatAngle))],s=[i.leftFace+i.throatR,i.bend],r=li(s,n,-i.throatR),o=li(r,e,i.throatLength),a=i.leftFace+i.lane,l=[a+i.innerThroatR,0];l[1]=r[1]+(i.throatWidth+i.innerThroatR-(l[0]-r[0])*n[0])/n[1];let c=li(o,n,i.throatWidth),h=xs(Gn(c,li(l,n,-i.innerThroatR)),gr(l,i.innerThroatR,180+i.throatAngle,180)),d=Math.sin(_n(i.slope)),f=Math.cos(_n(i.slope)),u=[at.cx,Wn.top-i.crownGap],m=u[1]+i.crownR*(1/f-1),x=[i.leftFace+i.lane+i.cornerLeft,0],g=[i.rightFace-i.lane-i.cornerRight,0];x[1]=m-(i.cornerLeft+(at.cx-x[0])*d)/f,g[1]=m-(i.cornerRight+(g[0]-at.cx)*d)/f;let p=[x[0]-i.cornerLeft*d,x[1]+i.cornerLeft*f],y=[g[0]+i.cornerRight*d,g[1]+i.cornerRight*f],E=(j,W)=>j[1]+Math.abs(W-j[0])*Math.tan(_n(i.slope)),_=[at.cx-i.open,E(p,at.cx-i.open)],b=[at.cx+i.open,E(y,at.cx+i.open)],S=xs(h,Gn([a,l[1]],[a,x[1]]),gr(x,i.cornerLeft,180,90+i.slope),Gn(p,_)),A=xs(tc(h),Gn([i.rightFace-i.lane,l[1]],[i.rightFace-i.lane,g[1]]),gr(g,i.cornerRight,0,90-i.slope),Gn(y,b)),v=[u[0],u[1]-i.crownR],w=xs(Gn(_,[v[0]-i.crownR*d,v[1]+i.crownR*f]),gr(v,i.crownR,90+i.slope,90-i.slope),Gn([v[0]+i.crownR*d,v[1]+i.crownR*f],b)),C=li(s,n,-(i.throatR+t)),D=li(C,e,i.throatLength),I=[i.leftFace-t,D[1]-(D[0]-i.leftFace)*Math.tan(_n(i.wedgeAngle))],O=xs(gr(s,i.throatR+t,180,180+i.throatAngle),Gn(C,D),Gn(D,I)),U=[(I[0]-D[0])/Math.hypot(I[0]-D[0],I[1]-D[1]),(I[1]-D[1])/Math.hypot(I[0]-D[0],I[1]-D[1])],z=[-U[1],U[0]],X={throat:xs(gr(s,i.throatR,180,180+i.throatAngle),Gn(r,o)),leg:xs(Gn(li(D,z,t),li(I,z,t)))},G=li(li(c,n,t),e,i.mouthPost/4);return{leftFace:S,rightFace:A,crownFace:w,wedgeLine:O,wedgeFace:X,post:G,corners:{left:x,right:g},ends:[_,b],innerThroat:l}})(),ru=[{side:"left",face:vn.leftFace,line:su(vn.leftFace,1)},{side:"right",face:vn.rightFace,line:su(vn.rightFace,-1)}],fy={face:vn.crownFace,line:su(vn.crownFace,1)},ou=[{side:"left",line:vn.wedgeLine,faces:vn.wedgeFace},{side:"right",line:tc(vn.wedgeLine),faces:{throat:tc(vn.wedgeFace.throat),leg:tc(vn.wedgeFace.leg)}}],au=[vn.post,_s(vn.post)].map(([i,t])=>[Math.round(i*100)/100,Math.round(t*100)/100]),Uo=[{side:"left",x:Ze.leftFace+Ze.lane/2,y:Ze.rolloverY},{side:"right",x:Ze.rightFace-Ze.lane/2,y:Ze.rolloverY}];Ze.junctionY=vn.ends[0][1];Ze.lanePostY=Math.round((Ze.junctionY-Ze.lanePostR)*100)/100;var Hf=(i,t,e,n,s,r)=>Array.from({length:r+1},(o,a)=>{let l=(n+(s-n)*(a/r))*Math.PI/180;return[i+Math.cos(l)*e,t+Math.sin(l)*e]}),Vf=[[48.7,375],...Hf(77.5,272.1,28.8,180,238.6,10),...Hf(125.45,195.24,11.7,58.4,-37,10)],lu=[Vf,Vf.map(_s)],Lo=[[46,390],_s([46,390])],No=[],ec=[Qt.dividerFace-2.35,Qt.dividerTop+1],Gf=(Qt.laneRight-3-ec[0])/Math.cos(_n(40)),vs={from:ec,to:[Math.round((ec[0]+Gf*Math.cos(_n(40)))*100)/100,Math.round((ec[1]+Gf*Math.sin(_n(40)))*100)/100],height:28.6},fn={y:986,centers:[-48,0,48].map(i=>at.cx+i),guides:[-Ze.open,-24,24,Ze.open].map(i=>at.cx+i),guideFrom:958,guideTo:Ze.lanePostY,insertY:936},Fo=[{x:188,y:862},{x:286,y:862},{x:at.cx,y:782}],yr={cap:60,height:44,ringRest:29.5,ringTravel:9,reach:34},xr=[[179,520,0],[172,600,14],[150,700,38],[126,790,58],[124,862,66]],Ql={cx:83,cy:862,r:41,from:0,to:90,h0:66,h1:71.5,exit:[75,903,72]},iu=([i,t,e])=>[2*at.cx-i,t,e],py=(i,t,e,n,s,r,o,a)=>Array.from({length:a+1},(l,c)=>{let h=_n(n+(s-n)*c/a);return[Math.round((i+Math.cos(h)*e)*100)/100,Math.round((t+Math.sin(h)*e)*100)/100,Math.round((r+(o-r)*c/a)*100)/100]}),Wf=[[75,903,70.4],...py(63,871,32,90,180,70,68.4,8),[31,760,62],[31,690,56.5],[37,620,52],[46,560,48.5],[56,500,45.5],[64,455,43],[69.4,420,41]],Xf=[[59.1,879.4],[53.4,731.6],[24,553.8],[79.5,497.1]],my=i=>[{s:230,side:1},{s:230,side:-1},{s:i.turnStart+30,side:1},{s:i.turnStart+i.turnLen*.55,side:1},{s:i.length-12,side:1}],Dn={width:42,mouth:52,flare:60,wall:28,outerWall:36,floor:3,side:2.4,stations:my},ys={rod:1.6,rail:11,upper:[15,19],ride:10.34},Oo=[{side:"left",id:"deadbounce",path:xr,turn:Ql,wire:Wf,supports:Xf,post:Lo[0]},{side:"right",id:"tiptop",path:xr.map(iu),turn:{...Ql,cx:2*at.cx-Ql.cx,exit:iu(Ql.exit),mirror:!0},wire:Wf.map(iu),supports:Xf.map(_s),post:Lo[1]}],ue={cx:at.cx,y:705,count:4,pitch:30,width:25.4,height:28.6,thick:6.35,labels:["Web","Game","Media","Fab"]},Xn={cx:at.cx,top:452,pitch:27,count:5,w:30,h:20},bi={x:at.cx,y:262,w:58,h:22},qf=Math.round(Math.atan2(xr[1][1]-xr[0][1],xr[1][0]-xr[0][0])*18e3/Math.PI)/100,nc=[{x:184,y:460,angle:qf,ramp:0},{x:2*at.cx-184,y:460,angle:180-qf,ramp:1}],Bo=[{x:111,y:529,angle:90+Ze.throatAngle,orbit:0},{x:2*at.cx-111,y:529,angle:90-Ze.throatAngle,orbit:1}],ic=fn.centers.map(i=>({x:i,y:fn.insertY})),cu=["R","V","A"],Yf=[{kind:"outlane",x:26,y:315,insertY:362},{kind:"inlane",x:69.4,y:315,insertY:362}],Ms=[...Yf,...Yf.map(i=>({...i,x:2*at.cx-i.x}))],Zf=[[162,780]],hu=[...Zf,...Zf.map(_s)],uu=[[18,520],[2*at.cx-18,520]];function yn(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Me,c=0;for(let h=0;h<i.length;++h){let d=i[h],f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in d.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(d.attributes[u]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in d.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(d.morphAttributes[u])}if(t){let u;if(e)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(e){let h=0,d=[];for(let f=0;f<i.length;++f){let u=i[f].index;for(let m=0;m<u.count;++m)d.push(u.getX(m)+h);h+=i[f].attributes.position.count}l.setIndex(d)}for(let h in r){let d=$f(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){let u=[];for(let x=0;x<o[h].length;++x)u.push(o[h][x][f]);let m=$f(u);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function $f(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new pn(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let f=0,u=h.count;f<u;f++)for(let m=0;m<e;m++){let x=h.getComponent(f,m);a.setComponent(f+d,m,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var N=.001;function ve(i,t,e=0){return new L((i-at.w/2)*N,e*N,(at.l/2-t)*N)}function Mr(i,t,e,{bevel:n=0,curveSegments:s=12,holes:r=[]}={}){let o=new gn(i.map(([l,c])=>new rt((l-at.w/2)*N,(c-at.l/2)*N)));for(let l of r)o.holes.push(new vi(l.map(([c,h])=>new rt((c-at.w/2)*N,(h-at.l/2)*N))));let a=new yi(o,{depth:Math.max(e-n*2,1e-4)*N,bevelEnabled:n>0,bevelThickness:n*N,bevelSize:n*N,bevelSegments:3,curveSegments:s});return a.rotateX(-Math.PI/2),a.translate(0,(t+n)*N,0),a}function Ji(i,t,{bevel:e=0,curveSegments:n=12}={}){let s=new gn(i.map(([o,a])=>new rt(o*N,a*N))),r=new yi(s,{depth:Math.max(t-e*2,1e-4)*N,bevelEnabled:e>0,bevelThickness:e*N,bevelSize:e*N,bevelSegments:3,curveSegments:n});return r.rotateX(-Math.PI/2),r.translate(0,e*N,0),r}function sn(i,t,e,n=0,s=0){return i.position.copy(ve(t,e,n)),i.rotation.y=s*Math.PI/180,i}function rn(i,t=48){return new io(i.map(([e,n])=>new rt(e*N,n*N)),t)}function sc(i,t,{tension:e=.5,segments:n,radial:s=10,closed:r=!1}={}){let o=new Pn(i.map(([l,c,h])=>ve(l,c,h)),r,"catmullrom",e),a=o.getLength();return new Mi(o,n||Math.max(12,Math.round(a/.006)),t*N,s,r)}function rc(i,t,{tension:e=.5,segments:n,radial:s=10,closed:r=!1}={}){let o=new Pn(i.map(([a,l,c])=>new L(a*N,c*N,-l*N)),r,"catmullrom",e);return new Mi(o,n||Math.max(12,Math.round(o.getLength()/.002)),t*N,s,r)}function fu(i,t){let e=[];for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],o=Math.max(1,Math.ceil(Math.hypot(r[0]-s[0],r[1]-s[1])/t));for(let a=0;a<o;a++)e.push([s[0]+(r[0]-s[0])*(a/o),s[1]+(r[1]-s[1])*(a/o)])}return e}function Ki(i,t,e=10){let n=[],s=i.length;for(let r=0;r<s;r++){let o=i[r],a=i[(r-1+s)%s],l=i[(r+1)%s],c=Math.atan2(o[1]-a[1],o[0]-a[0])-Math.PI/2,h=Math.atan2(l[1]-o[1],l[0]-o[0])-Math.PI/2;for(;h<c;)h+=Math.PI*2;for(let d=0;d<=e;d++){let f=c+(h-c)*(d/e);n.push([o[0]+Math.cos(f)*t,o[1]+Math.sin(f)*t])}}return n}function gy(i){let t=0;for(let e=0;e<i.length;e++){let[n,s]=i[e],[r,o]=i[(e+1)%i.length];t+=n*o-r*s}return t/2}var Ei=i=>gy(i)<0?[...i].reverse():i;function on(i,t,e,n=0){let s=[],r=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[Math.max(0,o-1)],c=i[Math.min(i.length-1,o+1)],h=c[0]-l[0],d=c[1]-l[1],f=Math.hypot(h,d)||1;h/=f,d/=f,s.push([a[0]-d*t/2,a[1]+h*t/2]),r.push([a[0]+d*t/2,a[1]-h*t/2])}return Mr(Ei([...s,...r.reverse()]),n,e)}function zo(i,t,e,n,s,r=24){return Array.from({length:r+1},(o,a)=>{let l=(n+(s-n)*(a/r))*Math.PI/180;return[i+Math.cos(l)*e,t+Math.sin(l)*e]})}var oc=i=>{let t=new Ot(i);return 1.15/(.2126*t.r+.7152*t.g+.0722*t.b)},xy=(i,t,e)=>new ce({color:0,metalness:0,roughness:e,envMap:i,envMapIntensity:t,transparent:!0,depthWrite:!1,blending:hs,side:un});function Kf(i){let t={};return t.cabinet=new Je({color:1382427,roughness:.45,metalness:0,clearcoat:1,clearcoatRoughness:.07}),t.cabinetInner=new ce({color:658188,roughness:.95,envMap:i,envMapIntensity:.2}),t.aluminium=new ce({color:13028045,roughness:.42,metalness:1,roughnessMap:Jf()}),t.trim=new ce({color:2830131,roughness:.38,metalness:.9}),t.chrome=new ce({color:14475234,roughness:.06,metalness:1}),t.ball=new ce({color:14080733,roughness:.05,metalness:1,envMap:i,envMapIntensity:1.15}),t.steel=new ce({color:12567752,roughness:.42,metalness:1,roughnessMap:Jf()}),t.zinc=new ce({color:12764873,roughness:.5,metalness:1}),t.darkSteel=new ce({color:3422267,roughness:.4,metalness:1}),t.rubber=new ce({color:921360,roughness:.6}),t.rubberOrange=new ce({color:16738835,roughness:.55}),t.whitePlastic=new ce({color:15856108,roughness:.3}),t.graphitePlastic=new ce({color:1974822,roughness:.35}),t.postPlastic=new Je({color:14834199,roughness:.28,clearcoat:.6,clearcoatRoughness:.08}),t.clearPlastic=new Je({color:14411502,roughness:.05,metalness:0,envMap:i,envMapIntensity:.8,clearcoat:1,clearcoatRoughness:.03,transparent:!0,opacity:.1,side:un,depthWrite:!1}),t.glass=xy(i,.45,.02),t.wood=new ce({color:12886388,roughness:.78}),t.cardPaper=new ce({color:16777215,roughness:.75}),t.popCap=new Je({color:16742954,roughness:.18,clearcoat:1,clearcoatRoughness:.05,emissive:16734736,emissiveIntensity:.25}),t.popCap.userData.gain=oc(16734736)*.5,t.popBody=new ce({color:15987436,roughness:.3,emissive:16767152,emissiveIntensity:.06}),t.popBody.userData.gain=oc(16767152)*.5,t.bulb=new ce({color:16774372,roughness:.1,emissive:16763278,emissiveIntensity:0}),t.bulb.userData.gain=oc(16763278),t.speaker=new ce({color:921618,roughness:.65,metalness:.4}),t}function jf(i){return new Je({map:i,roughness:.6,metalness:0,clearcoat:1,clearcoatRoughness:.06})}function Qf(i){let t=new Ot(i==="plasma"?16738835:15330537),e=new Je({color:t.clone().multiplyScalar(.12),roughness:.3,clearcoat:1,clearcoatRoughness:.03,emissive:t,emissiveIntensity:.06,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2});return e.userData.gain=oc(t),e}function Jf(i=256){let t=document.createElement("canvas");t.width=t.height=i;let e=t.getContext("2d");e.fillStyle="#fff",e.fillRect(0,0,i,i);for(let s=0;s<1400;s++){let r=Math.round(200+Math.random()*55);e.fillStyle=`rgb(${r},${r},${r})`,e.fillRect(0,Math.random()*i,i,.6+Math.random())}let n=new zi(t);return n.wrapS=n.wrapT=mn,n.repeat.set(4,4),n}var qn={field:"#15181b",field2:"#1c2024",alu:"#e3e5e2",slate:"#9ba1a5",plasma:"#ff6a13",ink:"#16181a",cab:"#0c0d0e"},Le=i=>`rgba(227, 229, 226, ${i})`,Ce=i=>`rgba(255, 106, 19, ${i})`,Tn={display:(i,t=700,e=112)=>`${t} ${i}px Archivo`,mono:(i,t=500)=>`${t} ${i}px "Martian Mono"`,body:(i,t=500)=>`${t} ${i}px "Instrument Sans"`};async function ip(){await Promise.all([document.fonts.load("700 40px Archivo"),document.fonts.load('500 20px "Martian Mono"'),document.fonts.load('500 20px "Instrument Sans"')]).catch(()=>{})}function Ti(i,t){let e=document.createElement("canvas");return e.width=Math.round(i),e.height=Math.round(t),e}function tp(i,t){let e=i/2,n=t/2,s=e*.42,r=n*.05;return[[0,n],[e,r-n*.25],[s,r-n*.25],[s,-n],[-s,-n],[-s,r-n*.25],[-e,r-n*.25]]}function _y(i,t){let e=i/2,n=t/2,s=t*.42;return[[0,n],[e,n-s*1.25],[e,-n],[0,-n+s],[-e,-n],[-e,n-s*1.25]]}function vy(i,t){return[[0,t/2],[i/2,-t/2],[-i/2,-t/2]]}function ep(i,t,e=40){let n=[],s=t/2,r=i/2-s;for(let o=0;o<=e/2;o++){let a=-Math.PI/2+o/(e/2)*Math.PI;n.push([r+Math.cos(a)*s,Math.sin(a)*s])}for(let o=0;o<=e/2;o++){let a=Math.PI/2+o/(e/2)*Math.PI;n.push([-r+Math.cos(a)*s,Math.sin(a)*s])}return n}function np(i,t=36){return Array.from({length:t},(e,n)=>{let s=n/t*Math.PI*2;return[Math.cos(s)*i/2,Math.sin(s)*i/2]})}function pu(){let i=[];ic.forEach((t,e)=>i.push({id:`lane${e}`,group:"lanes",x:t.x,y:t.y,angle:0,shape:np(20),color:"alu"})),nc.forEach((t,e)=>i.push({id:`ramp${e}`,group:"ramp"+e,x:t.x,y:t.y,angle:t.angle-90,shape:tp(28.6,63.5),color:"plasma"})),Bo.forEach((t,e)=>i.push({id:`orbit${e}`,group:"orbit",index:e,x:t.x,y:t.y,angle:t.angle-90,shape:tp(20.6,38.1),color:"alu"}));for(let t=0;t<ue.count;t++){let e=ue.cx+(t-(ue.count-1)/2)*ue.pitch;i.push({id:`drop${t}`,group:"drops",index:t,x:e,y:ue.y-36,angle:0,shape:vy(17,13),color:"plasma"})}for(let t=0;t<Xn.count;t++)i.push({id:`ladder${t}`,group:"ladder",index:t,x:Xn.cx,y:Xn.top-t*Xn.pitch,angle:0,shape:_y(Xn.w,Xn.h),color:t===0?"plasma":"alu"});return i.push({id:"again",group:"again",x:bi.x,y:bi.y,angle:0,shape:ep(bi.w,bi.h),color:"plasma"}),Ms.forEach((t,e)=>i.push({id:`return${e}`,group:"return",index:e,x:t.x,y:t.insertY,angle:90,shape:t.kind==="outlane"?ep(30,16):np(18),color:t.kind==="outlane"?"plasma":"alu"})),i}var yy=[["2025","Freelance"],["2023","Glaser Group"],["2021","Origin Beer Lab"],["2018","T&B Equipment"],["2018","Atlee High"]];function sp(i){let t=Ti(at.w*i,at.l*i),e=t.getContext("2d"),n=u=>u*i,s=u=>(at.l-u)*i,r=u=>u*i,o=(u,m,x,g)=>{let p=e.createRadialGradient(n(u),s(m),0,n(u),s(m),r(x));g.forEach(([y,E])=>p.addColorStop(y,E)),e.fillStyle=p,e.fillRect(0,0,t.width,t.height)};e.fillStyle=qn.field,e.fillRect(0,0,t.width,t.height),o(at.cx,520,640,[[0,"#2a2c2f"],[.55,"#1c1f22"],[1,"rgba(21,24,27,0)"]]),o(at.cx,830,240,[[0,Ce(.16)],[1,Ce(0)]]),e.fillStyle=Le(1);for(let u=6.35;u<at.l;u+=12.7)for(let m=6.35;m<at.w;m+=12.7){let x=Math.hypot((m-at.cx)/1.1,(u-560)/1.6),g=.13*Math.max(0,1-x/470);g<.01||(e.globalAlpha=g,e.beginPath(),e.arc(n(m),s(u),r(.62),0,Math.PI*2),e.fill())}e.globalAlpha=1;let a=(u,m,x,g,p,y=Le)=>{let E=e.createLinearGradient(0,s(m),0,s(x));E.addColorStop(0,y(0)),E.addColorStop(.35,y(p)),E.addColorStop(1,y(0)),e.fillStyle=E,e.beginPath(),e.roundRect(n(u-g/2),s(x),r(g),r(x-m),r(g/2)),e.fill()};for(let u of Ms)a(u.x,220,430,20,.14);for(let u of Uo)a(u.x,640,960,22,.12);for(let u of fn.centers)a(u,fn.guideFrom-30,fn.guideTo+30,20,.18);{let u=Qt.laneLeft,m=Qt.laneRight,x=e.createLinearGradient(0,s(0),0,s(Qt.dividerTop));x.addColorStop(0,Ce(.05)),x.addColorStop(1,Ce(.22)),e.fillStyle=x,e.fillRect(n(u),s(Qt.dividerTop),r(m-u),r(Qt.dividerTop));let g=(u+m)/2;e.lineWidth=r(2.2),e.lineJoin="round",e.lineCap="round";for(let p=150,y=0;p<800;p+=46,y++)e.strokeStyle=Ce(.3+y*.03),e.beginPath(),e.moveTo(n(g-9),s(p)),e.lineTo(n(g),s(p+9)),e.lineTo(n(g+9),s(p)),e.stroke()}let l=(u,m,x,g,p,y=Ce)=>{let E=m[0]-u[0],_=m[1]-u[1],b=Math.hypot(E,_),S=-_/b,A=E/b,v=e.createLinearGradient(n(u[0]),s(u[1]),n(m[0]),s(m[1]));v.addColorStop(0,y(0)),v.addColorStop(.6,y(p*.55)),v.addColorStop(1,y(p)),e.fillStyle=v,e.beginPath(),e.moveTo(n(u[0]+S*x/2),s(u[1]+A*x/2)),e.lineTo(n(m[0]+S*g/2),s(m[1]+A*g/2)),e.lineTo(n(m[0]-S*g/2),s(m[1]-A*g/2)),e.lineTo(n(u[0]-S*x/2),s(u[1]-A*x/2)),e.closePath(),e.fill();let w=e.createLinearGradient(n(u[0]),s(u[1]),n(m[0]),s(m[1]));w.addColorStop(0,y(0)),w.addColorStop(1,y(Math.min(1,p*2.2))),e.strokeStyle=w,e.lineWidth=r(.9);for(let C of[1,-1])e.beginPath(),e.moveTo(n(u[0]+C*S*x/2),s(u[1]+C*A*x/2)),e.lineTo(n(m[0]+C*S*g/2),s(m[1]+C*A*g/2)),e.stroke()};Oo.forEach((u,m)=>l([at.cx+(m?-25:25),196],u.path[0],8,50,.3));for(let u of Bo){let m=u.angle*Math.PI/180,x=[Math.cos(m),Math.sin(m)];l([u.x-x[0]*400,u.y-x[1]*400],[u.x+x[0]*34,u.y+x[1]*34],4,28,.15,Le)}l([at.cx,470],[at.cx,ue.y-44],6,34,.14);let c=pu(),h=u=>{let m=0;for(let[x,g]of u.shape)m=Math.max(m,Math.hypot(x,g));return m};for(let u of c){let m=u.color==="plasma"?Ce:Le,x=h(u)*2.1,g=e.createRadialGradient(n(u.x),s(u.y),0,n(u.x),s(u.y),r(x));g.addColorStop(0,m(.4)),g.addColorStop(.55,m(.13)),g.addColorStop(1,m(0)),e.fillStyle=g,e.beginPath(),e.arc(n(u.x),s(u.y),r(x),0,Math.PI*2),e.fill()}for(let u of c){let m=u.angle*Math.PI/180,x=(h(u)+2.6)/h(u);e.save(),e.lineJoin="round",e.beginPath(),u.shape.forEach(([g,p],y)=>{let E=(g*Math.cos(m)-p*Math.sin(m))*x,_=(g*Math.sin(m)+p*Math.cos(m))*x;y?e.lineTo(n(u.x+E),s(u.y+_)):e.moveTo(n(u.x+E),s(u.y+_))}),e.closePath(),e.strokeStyle="rgba(0,0,0,0.5)",e.lineWidth=r(3.4),e.stroke(),e.strokeStyle=u.color==="plasma"?Ce(.62):Le(.5),e.lineWidth=r(.8),e.stroke(),e.restore()}let d=(u,m,x,g)=>{let p=(u.angle-90)*Math.PI/180,y=(u.length||40)/2+9;e.save(),e.translate(n(u.x+Math.sin(p)*y),s(u.y-Math.cos(p)*y)),e.rotate(-p),ke(e,0,0,m,x,g,"mono"),e.restore()};nc.forEach((u,m)=>{let x=u.angle*Math.PI/180,g=m===0?1:-1,p=21;e.save(),e.translate(n(u.x-Math.sin(x)*p*g),s(u.y+Math.cos(x)*p*g)),e.rotate(-x),ke(e,0,0,m===0?"Deadbounce":"Tip Top",r(4.6),Le(.9),"mono"),e.restore()}),Bo.forEach(u=>d({...u,length:38.1},"Orbit",r(3.6),Le(.6))),ke(e,n(at.cx),s(ue.y-58),"Skills",r(4.4),Le(.85),"mono"),ke(e,n(at.cx),s(ue.y-66),"4-target bank",r(3.2),Le(.45),"mono"),ke(e,n(at.cx),s(Fo[2].y+52),"About",r(4.4),Le(.85),"mono"),ke(e,n(at.cx),s(Xn.top+22),"Experience",r(4.4),Le(.85),"mono"),yy.forEach(([u,m],x)=>{let g=Xn.top-x*Xn.pitch;ke(e,n(at.cx-26),s(g),u,r(3.8),x===0?Ce(.95):Le(.6),"mono","right"),ke(e,n(at.cx+26),s(g),m,r(3.4),Le(.6),"mono","left")}),ke(e,n(at.cx),s(bi.y-20),"Contact",r(4.4),Le(.85),"mono");let f="rgba(16,18,20,0.9)";ic.forEach((u,m)=>ke(e,n(u.x),s(u.y),cu[m],r(8),f,"display"));for(let u of Ms)u.kind==="outlane"?(e.save(),e.translate(n(u.x),s(u.insertY)),e.rotate(-Math.PI/2),ke(e,0,0,"Special",r(3.4),f,"mono"),e.restore()):ke(e,n(u.x),s(u.insertY),"2X",r(5.5),f,"display");return ke(e,n(bi.x),s(bi.y),"Play again",r(4.2),f,"mono"),ac(e,n(at.cx),s(318),r(2.2),Ce(1),Le(.06)),ke(e,n(at.cx),s(301),"Dylan Hughes",r(8.4),Le(.95),"display"),ke(e,n(at.cx),s(292),"DH-26 \xB7 Richmond, Virginia",r(3),Ce(.85),"mono"),t}var My=[["1110","1001","1001","1001","1110"],["1001","1001","1111","1001","1001"]];function ac(i,t,e,n,s,r){let o=t-9*n/2,a=e-5*n/2;My.forEach((l,c)=>l.forEach((h,d)=>[...h].forEach((f,u)=>{i.fillStyle=f==="1"?s:r,i.beginPath(),i.arc(o+(c*5+u+.5)*n,a+(d+.5)*n,n*.36,0,Math.PI*2),i.fill()})))}function ke(i,t,e,n,s,r,o,a="center"){i.save(),i.fillStyle=r,i.textAlign=a,i.textBaseline="middle",o==="display"?(i.font=Tn.display(s,700),i.fontStretch="expanded",i.letterSpacing=`${-s*.03}px`):(i.font=Tn.mono(s,500),i.letterSpacing=`${s*.08}px`,n=n.toUpperCase()),i.fillText(n,t,e),i.restore()}function rp(i){let t=Math.round(i/1.32),e=Ti(i,t),n=e.getContext("2d"),s=i/1320,r=i/2,o=t*.4,a=n.createRadialGradient(r,o,0,r,t*.45,Math.max(i,t)*.75);a.addColorStop(0,"#3a2416"),a.addColorStop(.42,"#1b1a1b"),a.addColorStop(1,"#0a0b0c"),n.fillStyle=a,n.fillRect(0,0,i,t),n.save(),n.translate(r,o);for(let d=0;d<36;d++)n.rotate(Math.PI/18),n.fillStyle=Ce(d%3===0?.075:.035),n.beginPath(),n.moveTo(0,0),n.lineTo(i,-i*.03),n.lineTo(i,i*.03),n.fill();n.restore();for(let d=18*s;d<t;d+=22*s)for(let f=18*s;f<i;f+=22*s){let u=.1*Math.max(0,1-Math.hypot(f-r,(d-o)*1.3)/(i*.55));u<.01||(n.fillStyle=Le(u),n.beginPath(),n.arc(f,d,1.4*s,0,Math.PI*2),n.fill())}let l=46*s;n.strokeStyle=Ce(.9),n.lineWidth=5*s,n.beginPath(),n.roundRect(l,l,i-l*2,t-l*2,36*s),n.stroke(),n.strokeStyle=Ce(.4),n.lineWidth=1.6*s,n.beginPath(),n.roundRect(l+14*s,l+14*s,i-l*2-28*s,t-l*2-28*s,26*s),n.stroke();let c=40*s;n.save(),n.shadowColor="rgba(255, 120, 40, 0.9)",n.shadowBlur=38*s,ac(n,r,o,c,Ce(1),"rgba(0,0,0,0)"),n.restore(),ac(n,r,o,c,"#ff8a3d",Le(.07));let h=o+c*4.6;return n.save(),n.shadowColor="rgba(255, 240, 225, 0.5)",n.shadowBlur=18*s,ke(n,r,h,"Dylan Hughes",100*s,"#f6f4f0","display"),n.restore(),ke(n,r,h+76*s,"The portfolio",24*s,Ce(.95),"mono"),ke(n,r,h+112*s,"Model DH-26 \xB7 Richmond, Virginia",16*s,Le(.55),"mono"),e}function op(i,t,{frontBottom:e=.77}={}){let n=Ti(i,t),s=n.getContext("2d"),r=y=>t-(t-e*t)*(y/i),o=(y,E)=>{let _=i*(1-y);return[_,r(_)-E]};s.fillStyle="#141619",s.fillRect(0,0,i,t);let a=t*.08,l=t*.56,c=[[0,a],[.45,a*.8],[.72,l*.55],[1,l]],h=(y=0)=>{s.moveTo(...o(0,a+y)),s.bezierCurveTo(...c.slice(1).flatMap(([E,_])=>o(E,_+y)))},d=s.createLinearGradient(i,0,0,0);d.addColorStop(0,"#c9470c"),d.addColorStop(.55,qn.plasma),d.addColorStop(1,"#ff9a55"),s.beginPath(),s.moveTo(i,t),s.lineTo(...o(0,a)),h(),s.lineTo(0,t),s.closePath(),s.fillStyle=d,s.fill(),s.lineCap="round",s.strokeStyle="#ffb27f",s.lineWidth=t*.0065,s.beginPath(),h(t*.03),s.stroke(),s.strokeStyle=Ce(.9),s.lineWidth=t*.008,s.beginPath(),s.moveTo(0,t*.045),s.lineTo(i,t*.045),s.stroke();let f=.86,[u]=o(f,0),m=l*.92;ac(s,u,r(u)-m*.55,m*.085,"#141619","rgba(20,22,25,0.18)");let[x]=o(.42,0),g=r(x)-(a*.9+t*.03),p=(t*.045+g)/2;return ke(s,x,p-t*.035,"Dylan Hughes",t*.12,"#f4f2ee","display"),ke(s,x,p+t*.06,"Creative technologist",t*.032,Ce(.95),"mono"),n}function mu(i,t){let e=Math.round(t*.56),n=Ti(t,e),s=n.getContext("2d"),r=t/625;return s.fillStyle="#17191c",s.fillRect(0,0,t,e),s.strokeStyle=Ce(.85),s.lineWidth=3*r,s.beginPath(),s.roundRect(14*r,14*r,t-28*r,e-28*r,14*r),s.stroke(),s.fillStyle="#eceae6",s.textAlign="center",s.textBaseline="alphabetic",i==="instructions"?(s.font=Tn.display(30*r,760),s.fontStretch="expanded",s.fillText("How to play",t/2,66*r),s.font=Tn.body(20*r,500),s.textAlign="left",["1  Send the problem to dyl.harrell@gmail.com","2  Get a straight answer on whether","    I\u2019m the right person for it","3  Build something useful together"].forEach((a,l)=>s.fillText(a,52*r,(120+l*42)*r)),s.font=Tn.mono(13*r),s.textAlign="center",s.fillStyle=Ce(.9),s.fillText("DYLANHUGHES.DEV",t/2,316*r)):(s.font=Tn.display(40*r,780),s.fontStretch="expanded",s.fillText("Free play",t/2,118*r),s.font=Tn.mono(15*r),s.fillStyle=Ce(.9),s.fillText("RICHMOND, VIRGINIA \xB7 EASTERN TIME",t/2,172*r),s.fillStyle="#eceae6",s.font=Tn.body(20*r,500),s.fillText("Websites \xB7 Game software \xB7 Printed parts",t/2,232*r),s.fillStyle=qn.plasma,s.fillRect(t/2-40*r,270*r,80*r,6*r)),n}function ap(i){let t=at.rail,e=Qt.laneLeft,n=-4,s=ee.rightShoulder[1],r=i/(e-t),o=Ti(i,(s-n)*r),a=o.getContext("2d"),l=_=>(_-t)*r,c=_=>(s-_)*r,h=a.createLinearGradient(0,0,0,o.height);h.addColorStop(0,"#1d2125"),h.addColorStop(1,"#141619"),a.fillStyle=h,a.fillRect(0,0,o.width,o.height);for(let _=0;_<o.height;_+=Math.max(2,r*.6))a.fillStyle=`rgba(255,255,255,${.012+.012*Math.sin(_*.37)})`,a.fillRect(0,_,o.width,1);a.strokeStyle="rgba(255,106,19,0.85)",a.lineWidth=1.4*r,a.beginPath(),a.moveTo(l(ee.leftShoulder[0]+6),c(ee.leftShoulder[1]-10)),a.lineTo(l(ee.lipLeft[0]-4),c(ee.lipLeft[1]-7)),a.stroke(),a.beginPath(),a.moveTo(l(ee.lipRight[0]+4),c(ee.lipRight[1]-7)),a.lineTo(l(ee.rightShoulder[0]-6),c(ee.rightShoulder[1]-10)),a.stroke();let d=l(at.cx),f=c(30),u=["1110","1001","1001","1001","1110"],m=["1001","1001","1111","1001","1001"],x=3.1*r,g=d-9*x/2,p=c(78);[u,m].forEach((_,b)=>_.forEach((S,A)=>[...S].forEach((v,w)=>{a.fillStyle=v==="1"?qn.plasma:"rgba(255,255,255,0.07)",a.beginPath(),a.arc(g+(b*5+w+.5)*x,p+(A+.5)*x,x*.36,0,Math.PI*2),a.fill()}))),a.fillStyle=qn.alu,a.textAlign="center",a.textBaseline="middle",a.font=Tn.display(9*r,760),a.fontStretch="expanded",a.fillText("Dylan Hughes",d,f+6*r),a.font=Tn.mono(3.3*r),a.letterSpacing=`${.5*r}px`,a.fillStyle=Le(.55),a.fillText("MODEL DH-26 \xB7 RICHMOND, VIRGINIA",d,f+17*r);let y=a.createLinearGradient(l(t),0,l(e),0);y.addColorStop(0,"#ff8a3d"),y.addColorStop(.5,"#b8400b"),y.addColorStop(1,"#ff8a3d");let E=_=>{a.moveTo(l(t),c(10+_)),a.bezierCurveTo(l(t+130),c(1.5+_),l(e-130),c(1.5+_),l(e),c(10+_))};return a.fillStyle=y,a.beginPath(),a.moveTo(l(t),c(n)),E(0),a.lineTo(l(e),c(n)),a.closePath(),a.fill(),a.strokeStyle=Ce(.7),a.lineWidth=.7*r,a.beginPath(),E(4.5),a.stroke(),o}var Sy={Web:"1111111/1000001/1111111/1000001/1000001/1000001/1111111",Game:"0000000/0000000/1100011/0110110/0011100/0000000/0000000",Media:"1111111/1001001/1001101/1001111/1001101/1001001/1111111",Fab:"0011100/0111110/0000000/0111110/0000000/0111110/1111111"};function lp(i,t){let e=Math.round(t*(ue.height/ue.width)),n=Ti(t,e),s=n.getContext("2d");s.fillStyle="#ecede9",s.fillRect(0,0,t,e);let r=Sy[i].split("/"),o=t*.074,a=t/2-r[0].length*o/2,l=e*.12;return r.forEach((c,h)=>[...c].forEach((d,f)=>{s.fillStyle=d==="1"?qn.plasma:"rgba(22,24,26,0.12)",s.beginPath(),s.arc(a+(f+.5)*o,l+(h+.5)*o,o*.36,0,Math.PI*2),s.fill()})),s.fillStyle=qn.ink,s.font=Tn.mono(t*.15,600),s.letterSpacing=`${t*.01}px`,s.textAlign="center",s.textBaseline="middle",s.fillText(i.toUpperCase(),t/2,e*.83),n}function cp(i){let t=Ti(i,i),e=t.getContext("2d"),n=i/2;e.fillStyle="#f1efe9",e.beginPath(),e.arc(n,n,n,0,Math.PI*2),e.fill(),e.strokeStyle=qn.plasma,e.lineWidth=i*.07,e.beginPath(),e.arc(n,n,n*.88,0,Math.PI*2),e.stroke(),e.strokeStyle="rgba(22,24,26,0.5)",e.lineWidth=i*.008,e.beginPath(),e.arc(n,n,n*.74,0,Math.PI*2),e.stroke();let s=["1110","1001","1001","1001","1110"],r=["1001","1001","1111","1001","1001"],o=i*.06,a=n-9*o/2,l=n-5*o/2-i*.04;return[s,r].forEach((c,h)=>c.forEach((d,f)=>[...d].forEach((u,m)=>{e.fillStyle=u==="1"?qn.ink:"rgba(22,24,26,0.1)",e.beginPath(),e.arc(a+(h*5+m+.5)*o,l+(f+.5)*o,o*.36,0,Math.PI*2),e.fill()}))),e.fillStyle=qn.ink,e.textAlign="center",e.textBaseline="middle",e.font=Tn.mono(i*.075,600),e.fillText("1,000",n,n+i*.22),t}function hp(i,t){let e=Ti(i,t),n=e.getContext("2d");n.fillStyle="#1b1e21",n.fillRect(0,0,i,t),n.fillStyle="rgba(255,255,255,0.05)";for(let s=0;s<t;s+=3)n.fillRect(0,s,i,1);return n.fillStyle=qn.plasma,n.fillRect(0,t*.86,i,t*.05),n.fillStyle=Le(.75),n.font=Tn.mono(t*.13,600),n.letterSpacing=`${t*.03}px`,n.textAlign="center",n.textBaseline="middle",n.fillText("SKILLS \xB7 4-BANK",i/2,t*.16),e}function up(i,t=8,e=12){let n=Ei(i.posts),s=Ki(n,e,10),r=s.map(g=>g[0]),o=s.map(g=>g[1]),a=[Math.min(...r),Math.min(...o),Math.max(...r),Math.max(...o)],l=Ti((a[2]-a[0])*t,(a[3]-a[1])*t),c=l.getContext("2d"),h=g=>(g-a[0])*t,d=g=>(a[3]-g)*t,f=g=>{c.beginPath(),g.forEach(([p,y],E)=>E?c.lineTo(h(p),d(y)):c.moveTo(h(p),d(y))),c.closePath()},u=(a[0]+a[2])/2,m=(a[1]+a[3])/2,x=c.createRadialGradient(h(u),d(m+10),0,h(u),d(m),(a[2]-a[0])*t);x.addColorStop(0,"#2b2d31"),x.addColorStop(1,"#131517"),c.fillStyle=x,c.fillRect(0,0,l.width,l.height),c.save(),f(s),c.clip(),c.fillStyle=Le(.09);for(let g=a[1];g<a[3];g+=4.2)for(let p=a[0];p<a[2];p+=4.2)c.beginPath(),c.arc(h(p),d(g),.42*t,0,Math.PI*2),c.fill();return c.restore(),c.lineJoin="round",c.strokeStyle=Ce(.95),c.lineWidth=1.5*t,f(Ki(n,e-1.6,10)),c.stroke(),c.strokeStyle=Ce(.32),c.lineWidth=.5*t,f(Ki(n,e-4.4,10)),c.stroke(),{canvas:l,box:a}}var Ho=Math.PI/180,cc=at.pitch*Ho,an={inner:(at.w+22)*N,wallT:.019,front:.585,back:-.565,top:.116,bottom:-.32,floor:-.93},gu=i=>an.bottom+(i-an.front)*Math.tan(cc),Sr={w:.64,h:.76,d:.25,glassW:.58,glassH:.58/1.32,glassY:.255,dmdW:.384,dmdH:.096,dmdY:.118};function mt(i,t,{cast:e=!0,receive:n=!0}={}){let s=new pe(i,t);return s.castShadow=e,s.receiveShadow=n,s}function wi(i,t=8){let e=new zi(i);return e.colorSpace=He,e.anisotropy=t,e}function mp({M:i,art:t,dmdCanvas:e,anisotropy:n}){let s=new de,r=new de;r.rotation.x=cc,s.add(r);let o=new de;r.add(o);let a={root:s,body:r,playfield:o,inserts:new Map,pops:[],drops:[],flippers:[],slings:[],interactive:[],gi:[],bulbs:[],rollovers:[],flashers:[]};return a.toWorld=(l,c,h=0)=>(r.updateMatrixWorld(!0),ve(l,c,h).applyMatrix4(o.matrixWorld)),by(o,i,t,n),Ey(o,i),wy(o,i,a),Ay(o,i,t,a),Ry(o,i,a),Cy(o,i,t,n),Py(o,i,a),Iy(o,i,t,n,a),Dy(o,i,t,n,a),Ly(o,i,a),zy(o,i,a),ky(o,a),Hy(o,i,a),Vy(o,i,a),Gy(o,i,a),Wy(r,s,i,t,n,a),Xy(s,i,t,e,n,a),a}var dp=[[0,0],[Qt.laneLeft,0],[Qt.laneLeft,105.8],[at.w,105.8],[at.w,at.l],[0,at.l]];function by(i,t,e,n){let s=jf(wi(e.playfield,n)),r=new gn(dp.map(([l,c])=>new rt(l/at.w,c/at.l))),o=new as(r).scale(at.w*N,at.l*N,1).translate(-at.w/2*N,-at.l/2*N,0).rotateX(-Math.PI/2),a=mt(o,s,{cast:!1});return i.add(a),i.add(mt(Mr(dp,-at.thick-.05,at.thick),t.wood,{cast:!1})),a}var ui={t:1.6,h:28.6};function Ey(i,t){let e=ui.t/2,n=[[at.rail-e,-2],[at.rail-e,Wn.left.cy],...zo(Wn.left.cx,Wn.left.cy,Wn.left.r+e,180,90,24).slice(1),...zo(Wn.right.cx,Wn.right.cy,Wn.right.r+e,90,0,28),[Qt.laneRight+e,105.8]];i.add(mt(on(n,ui.t,ui.h),t.steel)),Ty(i,t,n,1);let s=Qt.laneLeft-Qt.dividerFace,r=[[Qt.dividerFace+s/2,Qt.apronTop],[Qt.dividerFace+s/2,Qt.dividerTop]];i.add(mt(on(r,s,ui.h),t.steel))}function Ty(i,t,e,n,s=120){let r=[],o=[],a=s/2;for(let l=1;l<e.length;l++){let[c,h]=e[l-1],[d,f]=e[l],u=Math.hypot(d-c,f-h);if(!u)continue;let m=(d-c)/u,x=(f-h)/u,g=-x*n,p=m*n,y=a;for(;y<=u;y+=s){let E=c+m*y+g*4.6,_=h+x*y+p*4.6,b=Math.atan2(x,m);r.push(new he(9*N,1.2*N,6*N).rotateY(b).translate(...ve(E,_,.6).toArray())),o.push(new ze(2.3*N,2.3*N,1.1*N,12).translate(...ve(E+g*.6,_+p*.6,1.75).toArray()))}a=y-u}r.length&&i.add(mt(yn(r),t.steel,{cast:!1}),mt(yn(o),t.darkSteel,{cast:!1}))}function wy(i,t,e){for(let n of lu)i.add(mt(on(n,ui.t,ui.h),t.steel));for(let[n,s]of Lo)i.add(xu(t,n,s));for(let[n,s]of hu)i.add(xu(t,n,s));if(No.length){for(let[s,r]of No)i.add(xu(t,s,r,{ring:!1}));let n=fu(Ki(Ei(No),7.13,10),4);i.add(mt(sc(n.map(([s,r])=>[s,r,13.5]),2.38,{closed:!0,tension:.1,radial:8}),t.rubber))}i.add(mt(yn([...ru,...ou].map(n=>on(n.line,ui.t,ui.h))),t.steel));for(let[n,s]of au)i.add(gp(t,n,s,{height:27})),i.add(sn(mt(new ls(7.1*N,2.38*N,10,28).rotateX(Math.PI/2).translate(0,13.5*N,0),t.rubber),n,s));for(let[n,s]of Uo.entries())e.rollovers.push(_u(i,t,s.x,s.y,"orbit"+n));for(let[n,s]of Ms.entries())e.rollovers.push(_u(i,t,s.x,s.y,"return"+n))}var fp=(()=>{let i=[];for(let t=0;t<16;t++){let e=t/16*Math.PI*2,n=t%2?7.6:9.5;i.push([Math.cos(e)*n,Math.sin(e)*n])}return i})(),ko;function xu(i,t,e,{ring:n=!0}={}){if(!ko){let r=Ji(fp,9,{bevel:.5,curveSegments:1}),o=Ji(fp,9,{bevel:.5,curveSegments:1}).translate(0,18*N,0),a=new ze(4.75*N,4.75*N,9*N,16).translate(0,13.5*N,0);ko={body:yn([r,o,a.toNonIndexed()]),ring:new ls(7.13*N,2.38*N,10,28).rotateX(Math.PI/2).translate(0,13.5*N,0),nut:new ze(3.67*N,3.67*N,2.8*N,6).translate(0,28.4*N,0)}}let s=new de;return s.add(mt(ko.body,i.postPlastic)),n&&s.add(mt(ko.ring,i.rubber)),s.add(mt(ko.nut,i.steel,{cast:!1})),sn(s,t,e)}function pp(i,t,e){return sn(mt(rn([[0,0],[5.6,0],[5.6,1],[4.76,1.8],[4.76,28.6],[4.2,30.16],[0,30.16]],20),i.steel),t,e)}function gp(i,t,e,{height:n=30}={}){return sn(mt(rn([[0,0],[5.6,0],[5.6,1.4],[4.76,2.2],[4.76,9],[3.9,10.5],[3.9,16.5],[4.76,18],[4.76,n],[0,n]],20),i.postPlastic),t,e)}var xp=new en({color:328966});function _u(i,t,e,n,s){let r=new de,o=new gn,a=44.45/2-2.38,l=2.38;o.absarc(0,a,l,0,Math.PI,!1),o.absarc(0,-a,l,Math.PI,Math.PI*2,!1);let c=new as(o,6).scale(N,N,N).rotateX(-Math.PI/2),h=new pe(c,xp);h.position.y=.06*N,r.add(h);let d=[[0,-21.2,-3],[0,-19.05,0]];for(let u=1;u<12;u++){let m=-1+2*u/12;d.push([0,m*19.05,6.35*Math.sqrt(1-m*m)])}d.push([0,19.05,0],[0,21.2,-3]);let f=mt(rc(d,.8,{tension:.2,radial:8}),t.chrome,{receive:!1});return r.add(f),sn(r,e,n),i.add(r),{wire:f,x:e,y:n,insert:s,press:0}}var Ss={postR:4.76,cord:6.35,travel:9};function Ay(i,t,e,n){let s=a=>{let{canvas:l,box:c}=e.plastics[a],h=wi(l),[d,f,u,m]=[(c[0]-at.w/2)*N,(c[1]-at.l/2)*N,(c[2]-at.w/2)*N,(c[3]-at.l/2)*N];return h.repeat.set(1/(u-d),1/(m-f)),h.offset.set(-d/(u-d),-f/(m-f)),new Je({map:h,roughness:.3,clearcoat:1,clearcoatRoughness:.05})},r=new ce({color:2758156,roughness:.3,emissive:16738835,emissiveIntensity:.45}),o=new Je({color:15526108,roughness:.45,clearcoat:.2});for(let a of vr){let l=new de,c=a.posts;for(let[G,j]of c)l.add(gp(t,G,j,{height:30.5}));let[h,d,f]=c,u=Math.hypot(d[0]-h[0],d[1]-h[1]),m=(d[0]-h[0])/u,x=(d[1]-h[1])/u,g=-x,p=m;(f[0]-h[0])*g+(f[1]-h[1])*p>0&&(g=-g,p=-p);let y=Ss.postR+Ss.cord/2,E=fu(Ki(Ei(c),y,8),3),_=E.map(([G,j])=>{let W=((G-h[0])*m+(j-h[1])*x)/u;return(G-h[0])*g+(j-h[1])*p>y*.5&&W>0&&W<1?Math.sin(Math.PI*W):0}),b=G=>sc(E.map(([j,W],Q)=>[j+g*G*_[Q],W+p*G*_[Q],13.5]),Ss.cord/2,{closed:!0,tension:.1,radial:8,segments:E.length*2}),S=mt(b(0),t.rubber);S.userData.action="sling-"+a.side,n.interactive.push(S),l.add(S);let A=Ki(Ei(c),12,8);l.add(mt(Mr(A,30.5,2.2,{bevel:.4}),[s(vr.indexOf(a)),r]));for(let[G,j]of c)l.add(sn(mt(new ze(3.5*N,3.5*N,.55*N,16).translate(0,.275*N,0),t.steel),G,j,32.7)),l.add(sn(mt(new ze(3.67*N,3.67*N,2.8*N,6).translate(0,1.4*N,0),t.steel),G,j,33.25));let v=Math.atan2(x,m)/Ho,w=Math.sign(-x*g+m*p),C=-w*(y-Ss.cord/2-.15-2),D=[(h[0]+d[0])/2,(h[1]+d[1])/2],I=new de,O=mt(new he(18*N,10*N,4*N),o);O.position.set(0,13.5*N,C*N),I.add(O),I.add(mt(new he(7.5*N,9*N,1.5*N).translate(0,4*N,(C+w*1.2)*N),t.steel)),sn(I,D[0],D[1],0,v),l.add(I);let U=new pe(new Ve(10*N,3*N).rotateX(-Math.PI/2),xp);U.position.set(0,.06*N,(C+w*1.2)*N);let z=sn(new de,D[0],D[1],0,v);z.add(U);for(let G of[-1,1]){let j=mt(new he(7*N,12*N,.35*N).translate(G*26*N,10*N,-w*(y-Ss.cord/2-1.2)*N),t.steel),W=mt(new he(9*N,5*N,6*N).translate(G*26*N,2.5*N,-w*(y-Ss.cord/2-5.5)*N),t.graphitePlastic);z.add(j,W)}l.add(z),i.add(l);let X=new L(g*N,0,-p*N).multiplyScalar(Ss.travel+.15);n.slings.push({side:a.side,rubber:S,rubberGeo:b,arm:I,rest:I.position.clone(),push:X,kicked:-1,shown:0})}}function lc(i,t,e=_r.length){let n=Math.asin((i-t)/e),s=[],r=18,o=Math.PI/2-n,a=Math.PI*1.5+n;for(let h=0;h<=r;h++){let d=o+(a-o)*(h/r);s.push([Math.cos(d)*i,Math.sin(d)*i])}let l=-Math.PI/2+n,c=Math.PI/2-n;for(let h=0;h<=r;h++){let d=l+(c-l)*(h/r);s.push([e+Math.cos(d)*t,Math.sin(d)*t])}return s}function Ry(i,t,e){let n=_r,s=n.rubberTo-n.rubberFrom,r=Ji(lc(...n.flange),n.rubberFrom-.6,{bevel:.5}),o=Ji(lc(...n.groove),s),a=Ji(lc(n.baseR-2.6,n.tipR-2.6),s,{bevel:2.6}),l=Ji(lc(...n.cap),n.height-n.rubberTo,{bevel:.9});for(let c of hi){let h=new de,d=[[r,t.whitePlastic,.6],[o,t.whitePlastic,n.rubberFrom],[a,t.rubberOrange,n.rubberFrom],[l,t.whitePlastic,n.rubberTo]];for(let[f,u,m]of d){let x=mt(f,u);x.position.y=m*N,x.userData.action="flip-"+c.side,h.add(x),e.interactive.push(x)}sn(h,c.x,c.y,0,c.rest),i.add(h),e.flippers.push({...c,pivot:h,angle:c.rest,target:c.rest,velocity:0})}}function Cy(i,t,e,n){let s=Math.atan2(ee.lipEndY-ee.lipCy,ee.lipLeft[0]-at.cx)/Ho,r=Math.atan2(ee.lipEndY-ee.lipCy,ee.lipRight[0]-at.cx)/Ho,o=zo(at.cx,ee.lipCy,ee.lipR,s,r,36),a=[[at.rail,-4],[Qt.laneLeft,-4],ee.rightShoulder,...[...o].reverse(),ee.leftShoulder],l=1.3,c=ee.deck,h=new Je({color:1711392,roughness:.35,metalness:.3,clearcoat:.8,clearcoatRoughness:.2}),d=wi(e.apron,n),f=(at.rail-at.w/2)*N,u=(Qt.laneLeft-at.w/2)*N,m=(-4-at.l/2)*N,x=(ee.rightShoulder[1]-at.l/2)*N;d.repeat.set(1/(u-f),1/(x-m)),d.offset.set(-f/(u-f),-m/(x-m));let g=new Je({map:d,roughness:.4,metalness:.2,clearcoat:.8,clearcoatRoughness:.2});i.add(mt(Mr(Ei(a),c-l,l,{bevel:.4}),[g,h]));let p=c-l,y=155.5/2,E=[on([ee.leftShoulder,ee.lipLeft],l,p),on([ee.lipRight,ee.rightShoulder],l,p),on([[Qt.laneLeft-.65,-4],[Qt.laneLeft-.65,ee.rightShoulder[1]]],l,p),on([[at.rail+.65,-4],[at.rail+.65,ee.leftShoulder[1]]],l,14,p-14),on([[at.rail,-3.35],[at.cx-y,-3.35]],l,p),on([[at.cx+y,-3.35],[Qt.laneLeft,-3.35]],l,p),on([[at.cx-y,-3.35],[at.cx+y,-3.35]],l,p-38.1,38.1)];i.add(mt(yn(E),h)),i.add(mt(Mr(Ei(a),.08,.1),t.cabinetInner,{cast:!1})),i.add(mt(yn([on([[167,101],[128,75]],1.6,20),on([[307,101],[232,74]],1.6,20)]),t.steel));let _=zo(at.cx,ee.lipCy,ee.lipR+.6,s,r,36).map(([b,S])=>[b,S,c-.6]);i.add(mt(sc(_,.8,{tension:0}),t.aluminium,{cast:!1}));for(let[b,S]of[["instructions",at.cx-147.65],["free",at.cx+147.65]]){let A=wi(e.cards[b],n),v=mt(new Ve(158.8*N,88.9*N).rotateX(-Math.PI/2),new ce({map:A,roughness:.6}),{cast:!1});v.position.copy(ve(S,61.55,c+.3)),i.add(v);let w=79.4+1.2,C=61.55-44.45-1.2,D=61.55+44.45+1.2;i.add(mt(on([[S-w,C],[S+w,C],[S+w,D],[S-w,D],[S-w,C]],2.4,1.2,c),t.aluminium,{cast:!1}))}}function Py(i,t,e){for(let n of fn.guides)i.add(mt(on([[n,fn.guideFrom],[n,fn.guideTo]],ui.t,ui.h),t.steel)),i.add(pp(t,n,fn.guideFrom),pp(t,n,fn.guideTo));for(let[n,s]of fn.centers.entries())e.rollovers.push(_u(i,t,s,fn.y,"lane"+n))}function Iy(i,t,e,n,s){let r=rn([[0,0],[17,0],[17,2.7],[0,2.7]],40),o=rn([[11,2.7],[23.15,2.7],[23.4,3.4],[23.15,4.7],[22.2,5.4],[11,5.4]],56),a=rn([[0,5.4],[15.5,5.4],[15.5,31.6],[0,31.6]],40),l=rn([[15.8,-9],[16.8,-9],[16.8,0],[22.6,0],[23.2,.5],[23.2,1.5],[22.6,2],[15.8,2],[15.8,-9]],56),c=new ze(1.6*N,1.6*N,42*N,10).translate(0,-21*N,0),h=rn([[0,31.6],[25,31.6],[29.4,32],[30,33],[30,36.5],[29.3,37.8],[25.5,41.6],[21,43.1],[10,43.45],[0,43.5]],72),d=new ce({map:wi(e.popDecal,n),roughness:.3,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),f=new Zr(20.5*N,48).rotateX(-Math.PI/2).translate(0,43.56*N,0),u=new he(9*N,6*N,6*N).translate(0,3*N,0),m=rn([[0,6],[2.6,6],[3.4,7],[5,10],[5,18.5],[3.8,21.5],[0,22.4]],20);for(let[x,g]of Fo.entries()){let p=new de,y=[],E=(I,O,...U)=>{let z=new de;return z.add(...U),z.userData={label:I,lift:O},p.add(z),y.push(z),z};E("Base",0,mt(r,t.graphitePlastic));let _=mt(o,t.whitePlastic);E("Skirt",26,_);let b=t.bulb.clone();s.bulbs.push(b),E("Lamp \xB7 #555",56,mt(u,t.darkSteel,{cast:!1}),mt(m,b,{cast:!1}));let S=t.popBody.clone(),A=mt(a,S);E("Body",86,A);let v=new de;v.add(mt(l,t.chrome));for(let I of[-1,1])v.add(mt(c,t.chrome).translateX(I*19.5*N));v.position.y=yr.ringRest*N,E("Ring & rods",128,v);let w=t.popCap.clone(),C=mt(h,w,{receive:!1});E("Cap \xB7 \xD860",172,C),E("Decal",206,mt(f,d,{cast:!1}));let D=[-1,1].map(I=>mt(new ze(2.6*N,2.6*N,.9*N,16).translate(I*17.46*N,43.75*N,0),t.chrome,{cast:!1}));E("Cap screws \xD72",232,...D),sn(p,g.x,g.y),i.add(p),p.traverse(I=>{I.userData.action="pop-"+x}),s.interactive.push(C,A,_),s.pops.push({group:p,parts:y,ring:v,skirt:_,cap:C,capMat:w,bodyMat:S,fired:-1,axis:new L(1,0,0),x:g.x,y:g.y})}}function Dy(i,t,e,n,s){let r=ue.count*ue.pitch+8,o=wi(e.bankPlate,n),a=new ce({map:o,roughness:.42,metalness:.5}),l=mt(new he(r*N,40*N,3*N),[t.darkSteel,t.darkSteel,t.darkSteel,t.darkSteel,a,t.darkSteel]);l.position.copy(ve(ue.cx,ue.y+9,20)),i.add(l);let c=new en({color:328965});for(let h=0;h<ue.count;h++){let d=ue.cx+(h-(ue.count-1)/2)*ue.pitch,f=new pe(new Ve((ue.width+1.6)*N,(ue.thick+2)*N).rotateX(-Math.PI/2),c);f.position.copy(ve(d,ue.y,.15)),i.add(f);let u=wi(e.targets[h],n),m=new ce({map:u,roughness:.45}),x=t.whitePlastic,g=mt(new he(ue.width*N,ue.height*N,ue.thick*N),[x,x,x,x,m,x]),p=new de;p.position.copy(ve(d,ue.y,0)),g.position.y=ue.height/2*N,p.add(g),i.add(p),g.userData.action="drop-"+h,s.interactive.push(g),s.drops.push({holder:p,target:g,index:h,x:d,state:"up",since:-1})}}function Ly(i,t,e){e.ramps=[];let n=t.clearPlastic;for(let s of Oo){let r=s.turn,o=r.mirror?-1:1,a=[];for(let x=1;x<=18;x++){let g=(r.from+(r.to-r.from)*(x/18))*Math.PI/180;a.push([r.cx+o*Math.cos(g)*r.r,r.cy+Math.sin(g)*r.r,r.h0+(r.h1-r.h0)*(x/18)])}let l=[...s.path,...a,...r.exit?[r.exit]:[]],c=new Pn(l.map(([x,g,p])=>ve(x,g,p)),!1,"centripetal"),h=0;for(let x=1;x<s.path.length;x++)h+=Math.hypot(...s.path[x].map((g,p)=>g-s.path[x-1][p]));let d=o,f=new de,u=mt(Ny(c,h,d),n,{cast:!1,receive:!1});u.renderOrder=2,f.add(u),f.add(Fy(c,h,d,t,n));for(let x of f.children)x.traverse(g=>{g.userData.action="ramp-"+s.id});i.add(f),e.interactive.push(u),e.flashers.push(Uy(i,t,c,h,d,s.id));let m=new Pn(s.wire.map(([x,g,p])=>ve(x,g,p)),!1,"centripetal");i.add(mt(Oy(m),t.chrome)),i.add(By(m,s,t)),e.ramps.push({id:s.id,side:s.side,curve:c,wireCurve:m,group:f})}}function Uy(i,t,e,n,s,r){let o=e.getLength()/N,a=(n+(o-n)*.5)/o,l=e.getPointAt(a),c=e.getTangentAt(a).setY(0).normalize(),h=new L().crossVectors(c,new L(0,1,0)).normalize().multiplyScalar(s),d=new de;d.position.copy(l).addScaledVector(h,(Dn.width/2+Dn.side+9)*N),d.position.y=l.y+(Dn.outerWall-4)*N,d.add(mt(new he(14*N,2*N,22*N).translate(0,-1*N,6*N).applyMatrix4(new oe().lookAt(new L,h,new L(0,1,0))),t.darkSteel,{cast:!1})),d.add(mt(rn([[0,0],[15,0],[15,4],[13.5,5],[0,5]],32),t.graphitePlastic,{cast:!1}));let f=new Je({color:16742954,roughness:.12,clearcoat:1,clearcoatRoughness:.04,emissive:16734736,emissiveIntensity:0,transparent:!0,opacity:.88});f.userData.gain=t.popCap.userData.gain*2,d.add(mt(rn([[0,5],[12.5,5],[12.5,9],[12,14],[10,19.5],[6.5,23.5],[0,25]],32),f,{cast:!1}));let u=new or(16747066,0,.5,2);return u.position.y=16*N,d.add(u),i.add(d),{id:r,mat:f,light:u,level:0}}function Ny(i,t,e){let n=Dn,s=i.getLength()/N,r=200,o=new L(0,1,0),a=[];for(let m=0;m<=r;m++){let x=m/r,g=i.getPointAt(x),p=i.getTangentAt(x);a.push({p:g,side:new L().crossVectors(p,o).normalize(),s:x*s,floor:g.y/N})}let l=({s:m,floor:x})=>{let g=n.width+(n.mouth-n.width)*Math.max(0,1-m/n.flare),p=Vl.smoothstep(m,t-40,t+30)*(n.outerWall-n.wall),y=n.wall+(e>0?p:0),E=n.wall+(e<0?p:0),_=g/2,b=_+n.side,S=n.floor,A=x<30?Math.max(0,x-S):0;return[[[-b,-S],[b,-S],[b,y],[_,y],[_,0],[-_,0],[-_,E],[-b,E]],[[_,-S-A],[b,-S-A],[b,-S],[_,-S]],[[-b,-S-A],[-_,-S-A],[-_,-S],[-b,-S]]]},c=a.map(l),h=[];c[0].forEach((m,x)=>{for(let g=0;g<m.length;g++){let p=[],y=[];for(let _=0;_<=r;_++){let b=a[_],S=c[_][x];for(let[A,v]of[S[g],S[(g+1)%S.length]]){let w=b.p.clone().addScaledVector(b.side,A*N).addScaledVector(o,v*N);p.push(w.x,w.y,w.z)}if(_<r){let A=_*2;y.push(A,A+2,A+1,A+1,A+2,A+3)}}let E=new Me;E.setAttribute("position",new te(p,3)),E.setIndex(y),E.computeVertexNormals(),h.push(E)}});let d=a[0],f=i.getTangentAt(0),u=new he(n.mouth*N,.8*N,28*N);return u.applyMatrix4(new oe().makeBasis(d.side,o,f.clone().setY(0).normalize().negate())),u.translate(d.p.x-f.x*12*N,.4*N,d.p.z-f.z*12*N),u.deleteAttribute("uv"),h.push(u),yn(h.map(m=>m.index?m.toNonIndexed():m))}function Fy(i,t,e,n,s){let r=i.getLength()/N,o=new L(0,1,0),a=r-t,l=Dn.stations({turnStart:t,turnLen:a,length:r}).map(({s:u,side:m})=>[u,m*e]),c=[],h=[],d=[];for(let[u,m]of l){let x=Math.min(1,u/r),g=i.getPointAt(x),p=i.getTangentAt(x).setY(0).normalize(),y=new L().crossVectors(p,o).normalize().multiplyScalar(m),E=g.y/N;if(E<30)continue;let _=Dn.width/2+Dn.side+6.5,b=g.clone().addScaledVector(y,_*N),S=b.x/N+at.w/2,A=at.l/2-b.z/N;if(S<at.rail+4.62||S>Qt.laneRight-4.62||A>Wn.top-4.62)continue;let v=E-Dn.floor-1.5;c.push(new ze(4.62*N,4.62*N,v*N,6).translate(b.x,v/2*N,b.z));let w=new he(18*N,1.5*N,(_-Dn.width/2+5)*N);w.applyMatrix4(new oe().makeBasis(p,o,y));let C=g.clone().addScaledVector(y,((_+Dn.width/2)/2+1.5)*N);w.translate(C.x,(v+.75)*N,C.z),h.push(w),d.push(new ze(2.6*N,2.6*N,1.2*N,12).translate(b.x,(v+2.1)*N,b.z))}let f=new de;if(c.length){f.add(mt(yn(c),n.zinc));let u=mt(yn(h),s,{cast:!1,receive:!1});u.renderOrder=2,f.add(u,mt(yn(d),n.darkSteel,{cast:!1}))}return f}function Oy(i){let t=i.getLength()/N,e=Math.ceil(t/3),n=new L(0,1,0),s=m=>{let x=i.getPointAt(m),g=i.getTangentAt(m);return{p:x,t:g,s:new L().crossVectors(g,n).normalize()}},r=(m,x,g,p=0)=>m.p.clone().addScaledVector(m.s,x*N).addScaledVector(n,g*N).addScaledVector(m.t,p*N),o=m=>Vl.smoothstep(m,t-45,t-6),a=[],l=(m,x=ys.rod,g)=>a.push(new Mi(new Pn(m),g||m.length*2,x*N,8)),[c,h]=ys.upper;for(let[m,x,g]of[[-ys.rail,0,21],[ys.rail,0,21],[-c,h,22],[c,h,22]]){let p=[];for(let y=0;y<=e;y++){let E=y/e,_=o(E*t);p.push(r(s(E),Math.sign(m)*(Math.abs(m)+_*(g-Math.abs(m))),x))}l(p,ys.rod,e)}let d=s(1),f=[];for(let m=0;m<=14;m++){let x=m/14*Math.PI;f.push(r(d,-22*Math.cos(x),h-6*Math.sin(x),16*Math.sin(x)))}l(f);let u=[[-c,h],[-15.6,8],[-13,-3],[-6.5,-6.6],[0,-7.2],[6.5,-6.6],[13,-3],[15.6,8],[c,h]];for(let m=22;m<t-50;m+=48){let x=s(m/t);l(u.map(([g,p])=>r(x,g,p)),1.4,24)}return yn(a)}function By(i,t,e){let n=[],s=[],r=(c,h,d=6,f=1.5)=>{let u=h.clone().sub(c),m=u.length(),x=new he(d*N,f*N,m);x.applyQuaternion(new Rn().setFromUnitVectors(new L(0,0,1),u.normalize())),x.translate((c.x+h.x)/2,(c.y+h.y)/2,(c.z+h.z)/2),s.push(x)},o=(c,h)=>{let d=0,f=1/0;for(let u=0;u<=200;u++){let m=i.getPointAt(u/200),x=Math.hypot(m.x-ve(c,h).x,m.z-ve(c,h).z);x<f&&(f=x,d=u/200)}return i.getPointAt(d)};for(let[c,h]of t.supports){let d=o(c,h),f=d.y/N-9,u=ve(c,h,f);n.push(new ze(4.62*N,4.62*N,f*N,6).translate(u.x,f/2*N,u.z)),r(u,d.clone().add(new L(0,-7.6*N,0)))}let a=i.getPointAt(1);r(ve(t.post[0],t.post[1],30.2),a.clone().add(new L(0,-6*N,0)),7,2);let l=new de;return l.add(mt(yn(n),e.zinc),mt(yn(s),e.zinc)),l}function zy(i,t,e){let[n,s]=vs.from,[r,o]=vs.to,a=Math.hypot(r-n,o-s),l=Math.atan2(o-s,r-n)/Ho,c=sn(new de,(n+r)/2,(s+o)/2,0,l),h=vs.height-3;for(let m of[-1,1])c.add(mt(new he(1.6*N,vs.height*N,10*N).translate(m*(a/2)*N,vs.height/2*N,0),t.steel));c.add(mt(new ze(1.2*N,1.2*N,a*N,10).rotateZ(Math.PI/2).translate(0,h*N,0),t.steel,{cast:!1}));let d=a/2-5,f=h-5,u=new de;u.add(mt(rc([[-d,0,0],[-d,0,-f],[d,0,-f],[d,0,0]],.9,{tension:.02,radial:6}),t.chrome,{cast:!1})),u.add(mt(rc([[-d,0,-f/2],[d,0,-f/2]],.7,{tension:0,radial:6}),t.chrome,{cast:!1})),u.position.y=h*N,c.add(u),i.add(c),e.gate={flap:u,open:0,velocity:0,at:ve((n+r)/2,(s+o)/2,ci)}}function ky(i,t){for(let e of pu()){let n=Qf(e.color),s=new pe(Ji(e.shape,.4,{curveSegments:6}),n);sn(s,e.x,e.y,-.34,e.angle),s.renderOrder=1,i.add(s),t.inserts.set(e.id,{mesh:s,mat:n,group:e.group,index:e.index,level:.06,goal:.06,flash:0})}}function Hy(i,t,e){let[n,s]=Qt.ballRest,r=s-ci,o=at.l/2-(an.front-an.wallT)/N,a=new de;a.add(mt(rn([[0,0],[5.5,.4],[8.4,1.8],[9.5,4.5],[9.5,25.4],[0,25.4]],24).rotateX(Math.PI/2),t.rubber)),a.add(mt(new ze(4.76*N,4.76*N,194*N,16).rotateX(Math.PI/2).translate(0,0,(6.4+97)*N),t.chrome));let l=mt(rn([[0,0],[6,0],[10.5,5],[14.3,16],[13.6,30],[8,33],[0,33.5]],28).rotateX(Math.PI/2).translate(0,0,196*N),t.rubberOrange);a.add(l),a.position.copy(ve(n,r,10)),i.add(a);for(let u of a.children)u.userData.action="plunger";e.interactive.push(l);let c=r-25.4-o,h=24,d=[];for(let u=0;u<=h*16;u++){let m=u/16*Math.PI*2;d.push(new L(Math.cos(m)*5.55*N,Math.sin(m)*5.55*N,-(u/(h*16))*c*N))}let f=mt(new Mi(new Pn(d),h*16,.4*N,5),t.steel);f.position.copy(ve(n,o,10)),i.add(f),i.add(sn(mt(new he(28*N,34*N,5*N).translate(0,10*N,-2.5*N),t.darkSteel),n,o+5,0)),e.plunger={group:a,spring:f,springLen:c,rest:a.position.clone(),pull:0,offset:0}}function Vy(i,t,e){let n=new so(ci*N,40,28);e.ball=mt(n,t.ball),e.ball.position.copy(ve(Qt.ballRest[0],Qt.ballRest[1],ci)),i.add(e.ball),e.shooterBall=mt(n,t.ball),e.shooterBall.position.copy(ve(Qt.ballRest[0],Qt.ballRest[1],ci)),i.add(e.shooterBall)}function Gy(i,t,e){let n=[[106,300],[368.35,300],[112,332],[362.35,332],...uu],s=rn([[0,0],[3.2,0],[4.6,3],[5.1,7],[5.1,12],[4.2,15.5],[2.4,17],[0,17.3]],16),r=new ze(4.2*N,4.6*N,6*N,12).translate(0,3*N,0);for(let[a,l]of n){let c=t.bulb.clone(),h=new de;h.add(mt(r,t.darkSteel));let d=new pe(s,c);d.position.y=5*N,h.add(d),i.add(sn(h,a,l)),e.bulbs.push(c)}let o=[[120,330,70,.9],[355,330,70,.9],[237,620,120,.5],[237,900,110,.55]];for(let[a,l,c,h]of o){let d=new or(16766888,0,.45,2);d.position.copy(ve(a,l,c)),d.userData.base=h*.02,i.add(d),e.gi.push(d)}}function Wy(i,t,e,n,s,r){let o=an,a=o.front-o.back,l=gu(o.back),c=o.top-l,h=o.inner+o.wallT*2,d=wi(n.cabinetSide,s),f=new Je({map:d,roughness:.4,clearcoat:.7,clearcoatRoughness:.2}),u=f.clone();u.map=d.clone(),u.map.wrapS=mn,u.map.repeat.x=-1,u.map.needsUpdate=!0;let m=new gn([[1,(o.top-l)/c],[0,(o.top-l)/c],[0,0],[1,(o.bottom-l)/c]].map(([O,U])=>new rt(O,U))),x=(O,U)=>{let z=new as(m).applyMatrix4(new oe().set(0,0,1,O,0,c,0,l,a,0,0,o.back,0,0,0,1));return U>0&&(z.scale(-1,1,1),z.translate(2*O,0,0)),z.computeVertexNormals(),z};for(let O of[-1,1]){let U=O*(o.inner/2+o.wallT),z=O*(o.inner/2);i.add(mt(x(U,O),O>0?u:f)),i.add(mt(x(z,-O),e.cabinetInner));let X=mt(new he(o.wallT+.012,.012,a+.004),e.aluminium);X.position.set(O*(o.inner/2+o.wallT/2-.002),o.top+.006,(o.front+o.back)/2),i.add(X)}let g=o.top-o.bottom-.04,p=mt(new he(h,g,o.wallT),e.cabinet);p.position.set(0,o.bottom+g/2,o.front-o.wallT/2),i.add(p);let y=(o.top-gu(o.back))*.08,E=mt(new Ve(h,y),new ce({color:13190924,roughness:.42}),{cast:!1});E.position.set(0,o.bottom+y/2,o.front+4e-4),i.add(E);let _=mt(new Ve(h,.0045),new ce({color:16757375,roughness:.4}),{cast:!1});_.position.set(0,o.bottom+y+.017,o.front+4e-4),i.add(_);let b=o.top-l,S=mt(new he(h,b,o.wallT),e.cabinet);S.position.set(0,l+b/2,o.back+o.wallT/2),i.add(S);let A=mt(new he(h,o.wallT,a/Math.cos(cc)),e.cabinet);A.rotation.x=-cc,A.position.set(0,(o.bottom+l)/2+o.wallT/2,(o.front+o.back)/2),i.add(A);let v=mt(new hc(h+.006,.026,.072,.006),e.trim);v.position.set(0,o.top+.004,o.front-.03),i.add(v);let w=o.bottom+g*.5,C=mt(new hc(.25,.012,.28,.012),e.trim);C.rotation.x=Math.PI/2,C.position.set(0,w-.02,o.front+.004),i.add(C);let D=mt(new he(.21,.24,.004),e.darkSteel);D.position.set(0,w-.02,o.front+.011),i.add(D);for(let O of[-.048,.048]){let U=mt(new he(.06,.085,.006),e.aluminium);U.position.set(O,w+.045,o.front+.014),i.add(U);let z=new pe(new he(.004,.026,.002),new en({color:16738835}));z.position.set(O,w+.055,o.front+.0175),i.add(z);let X=mt(new ze(.008,.008,.004,16).rotateX(Math.PI/2),e.trim);X.position.set(O,w+.02,o.front+.018),i.add(X)}let I=mt(rn([[0,0],[15,0],[15,4],[13,9],[0,10]],28).rotateX(Math.PI/2),new ce({color:16738835,emissive:16738835,emissiveIntensity:.5,roughness:.3}));I.position.set(-.205,o.top-.07,o.front),i.add(I),r.startButton=I,i.updateMatrixWorld(!0);for(let[O,U]of[[-1,o.front-.06],[1,o.front-.06],[-1,o.back+.06],[1,o.back+.06]]){let z=new L(O*(h/2-.035),gu(U),U).applyMatrix4(i.matrixWorld),X=z.y-o.floor,G=new de;G.add(mt(new he(.06,X,.06),e.aluminium)),G.add(mt(new ze(.022,.026,.02,16).translate(0,-X/2-.01,0),e.rubber)),G.position.set(z.x,o.floor+X/2+.02,z.z),t.add(G)}}var hc=class extends Me{constructor(t,e,n,s){super();let r=new he(t-2*s,e,n-2*s),o=new gn,a=t/2,l=n/2;o.moveTo(-a+s,-l),o.lineTo(a-s,-l),o.quadraticCurveTo(a,-l,a,-l+s),o.lineTo(a,l-s),o.quadraticCurveTo(a,l,a-s,l),o.lineTo(-a+s,l),o.quadraticCurveTo(-a,l,-a,l-s),o.lineTo(-a,-l+s),o.quadraticCurveTo(-a,-l,-a+s,-l);let c=new yi(o,{depth:e,bevelEnabled:!1,curveSegments:6});c.rotateX(Math.PI/2),c.translate(0,e/2,0),r.dispose(),this.copy(c)}};function Xy(i,t,e,n,s,r){let o=Sr,a=new de;r.body.updateMatrixWorld(!0);let l=new L(0,an.top,an.back+.02).applyMatrix4(r.body.matrixWorld);a.position.set(0,l.y+.004,l.z+.02),i.add(a),r.backbox=a;let c=mt(new he(o.w,o.h,o.d),t.cabinet);c.position.set(0,o.h/2,-o.d/2),a.add(c);let h=new gn;h.moveTo(-o.w/2,0),h.lineTo(o.w/2,0),h.lineTo(o.w/2,o.h),h.lineTo(-o.w/2,o.h),h.lineTo(-o.w/2,0);let d=new vi,f=o.w/2-.022;d.moveTo(-f,.018),d.lineTo(-f,o.h-.02),d.lineTo(f,o.h-.02),d.lineTo(f,.018),d.lineTo(-f,.018),h.holes.push(d);let u=mt(new yi(h,{depth:.012,bevelEnabled:!0,bevelSize:.002,bevelThickness:.002,bevelSegments:2}),t.trim);u.position.z=-.004,a.add(u);let m=o.glassY-.03,x=mt(new he(o.w-.044,m,.006),t.speaker);x.position.set(0,.018+m/2,.001),a.add(x);for(let w of[-1,1]){let C=new de,D=mt(rn([[0,0],[48,0],[52,1.5],[55,4],[0,4]],40).rotateX(Math.PI/2),t.darkSteel);C.add(D);for(let I=10;I<=44;I+=8.5){let O=new pe(new ls(I*N,1.1*N,6,40),t.speaker);O.position.z=4.2*N,C.add(O)}C.position.set(w*(o.dmdW/2+.072),o.dmdY,.004),a.add(C)}let g=new zi(n);g.colorSpace=He,g.anisotropy=s;let p=new pe(new Ve(o.dmdW,o.dmdH),new en({map:g,toneMapped:!1}));p.position.set(0,o.dmdY,.0052),p.userData.action="dmd",a.add(p);let y=mt(new he(o.dmdW+.024,o.dmdH+.024,.004),t.cabinetInner);y.position.set(0,o.dmdY,.0025),a.add(y),r.dmd={mesh:p,texture:g},r.interactive.push(p);let E=wi(e.backglass,s),_=new en({map:E,toneMapped:!1,color:new Ot(0,0,0)}),b=o.glassY+o.glassH/2,S=new pe(new Ve(o.glassW,o.glassH),_);S.position.set(0,b,.002),a.add(S);let A=new pe(new Ve(o.glassW,o.glassH),t.glass);A.position.set(0,b,.006),a.add(A),r.backglass={mesh:S,material:_,level:0};let v=new Be;v.position.set(0,b,.0065),a.add(v),r.heroAnchor=v,r.backglassSize=[o.glassW,o.glassH]}function _p({M:i,url:t,width:e,aspect:n,action:s,anisotropy:r}){let o=e/n,l=new lo().load(t);l.colorSpace=He,l.anisotropy=r;let c=new de,h=new de;c.add(h);let d=.028;h.position.y=d;let f=new pe(new Ve(e,o),new ce({map:l,roughness:.35,metalness:0,emissive:16777215,emissiveMap:l,emissiveIntensity:.32}));f.position.set(0,o/2+.006,.0032),f.userData.action=s,h.add(f);let u=mt(new he(e+.012,o+.012,.005),i.trim);u.position.set(0,o/2+.006,0),u.userData.action=s,h.add(u);let m=.0035,x=new ce({color:2758156,roughness:.3,emissive:16738835,emissiveIntensity:.55});for(let[p,y,E,_]of[[0,o+.012-m/2,e+.012,m],[0,m/2,e+.012,m],[-(e+.012)/2+m/2,o/2+.006,m,o+.012],[(e+.012)/2-m/2,o/2+.006,m,o+.012]]){let b=mt(new he(E,_,.007),x);b.position.set(p,y,.001),h.add(b)}for(let p of[-e*.32,e*.32]){let y=mt(new ze(.0028,.0034,d,12),i.chrome);y.position.set(p,d/2,0),c.add(y)}let g={group:c,hinge:h,face:f,reveal:0,shown:-1,height:o};return g.setReveal=(p,y=0)=>{if(Math.abs(p-g.shown)<.002)return;g.shown=p;let E=1-Math.pow(1-p,3);h.rotation.x=-((1-E)*(Math.PI/2-.05)+E*y),c.visible=p>.003,c.scale.setScalar(.85+.15*E)},g.setReveal(0),g}jt.tonemapping_pars_fragment=jt.tonemapping_pars_fragment.replace("vec3 CustomToneMapping( vec3 color ) { return color; }",`vec3 CustomToneMapping( vec3 color ) {
    color = NeutralToneMapping( color );
    vec3 s = mix( color * 12.92, 1.055 * pow( color, vec3( 0.41667 ) ) - 0.055, step( 0.0031308, color ) );
    s = max( s + ( fract( 52.9829189 * fract( dot( gl_FragCoord.xy, vec2( 0.06711056, 0.00583715 ) ) ) ) - 0.5 ) / 255.0, 0.0 );
    return mix( s / 12.92, pow( ( s + 0.055 ) / 1.055, vec3( 2.4 ) ), step( 0.04045, s ) );
  }`);var vu=class extends Io{setSize(t,e){super.setSize(Math.ceil(t/2),Math.ceil(e/2))}_overrideVisibility(){super._overrideVisibility(),this.scene.traverseVisible(t=>{t.isMesh&&(t.userData.noAO||[].concat(t.material).some(e=>e.transparent))&&(t.visible=!1,this._visibilityCache.push(t))})}},yu=class extends mr{setSize(t,e){super.setSize(Math.ceil(t/2),Math.ceil(e/2))}};function qy(i,t){let e=new Js;e.background=new Ot(.004,.0045,.005);let n=new pe(new Ve(40,40).rotateX(-Math.PI/2),new en({color:new Ot(.018,.018,.02)}));n.position.y=-2,e.add(n);let s=(a,l,c,h,d,f,u)=>{let m=new pe(new Ve(a,l),new en({color:new Ot(h).multiplyScalar(c),side:un}));m.position.set(d,f,u),m.lookAt(0,0,0),e.add(m)};s(12,12,.22,15921390,0,7,0),s(6,3,3,16774892,0,5,-3.5),s(.7,5,2.4,16777215,-5,2,-1),s(.7,5,2.5,14673919,5,2,-1.5),s(1.6,1.6,5,16773602,2,6,3.5),s(6,2,1.2,16770764,0,1.2,6);let r=new fr(i),o=r.fromScene(e,.015,.1,50,{size:t});return r.dispose(),e.traverse(a=>{a.geometry?.dispose(),a.material?.dispose()}),o.texture}function vp(i,t){let e=new ql({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance",outputBufferType:t.effects?De:Ye}),n=t.pixelRatio;e.setPixelRatio(n),e.outputColorSpace=He,e.toneMapping=mo,e.toneMappingExposure=1.1,e.shadowMap.enabled=t.shadows,e.shadowMap.type=cs,e.shadowMap.autoUpdate=!1;let s=new Js;s.background=new Ot(460810),s.fog=new Hr(460810,3.2,7.5);let r=qy(e,t.low?256:512);s.environment=r,s.environmentIntensity=.6;let o=new qe(32,1,.02,20),a={};a.key=new rr(16774118,14,0,.45,.7,2),a.key.position.set(.55,2.3,1.1),a.key.target.position.set(0,-.1,0),a.key.castShadow=t.shadows,a.key.shadow.mapSize.set(t.shadowSize,t.shadowSize),Object.assign(a.key.shadow,{bias:-4e-4,normalBias:.003,radius:t.low?2:3,focus:.7}),a.key.shadow.camera.near=1.2,a.key.shadow.camera.far=4.2,s.add(a.key,a.key.target),a.rim=new ho(12570879,1.4),a.rim.position.set(-1.2,1.6,-2.4),s.add(a.rim),a.focus=new rr(16773344,0,0,.42,1,2),s.add(a.focus,a.focus.target);let l=new pe(new Ve(12,12).rotateX(-Math.PI/2),new ce({color:3816770,roughness:.85}));l.position.y=an.floor,l.receiveShadow=t.shadows,s.add(l);let c=null,h=null,d=null;if(t.effects){c=new vu(s,o,1,1,void 0,{radius:.035,distanceExponent:1.5,thickness:.04,distanceFallOff:1,scale:1.1,samples:12},{lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),c.blendIntensity=.7,h=new yu(new rt(1,1),.22,.2,1.6),h.highPassUniforms.smoothWidth.value=.5;let S=new Kl(zf);S.uniforms.offset.value=.85,S.uniforms.darkness.value=1,d=new jl(s,o,{focus:1,aperture:0,maxblur:.005}),e.setEffects([c,d,h,S])}let f=1,u=1;function m(S,A){f=S,u=A,e.setSize(S,A,!1),o.aspect=S/A,o.updateProjectionMatrix()}function x(){e.shadowMap.needsUpdate=!0,e.render(s,o)}let g=16.7,p=0,y=performance.now()+4e3;function E(S){p&&(g+=(Math.min(100,S-p)-g)*.05),p=S,!(S<y||g<21)&&(c&&c.enabled?c.enabled=!1:d&&d.enabled?d.enabled=!1:n>1&&(n=Math.max(1,n-.25),e.setPixelRatio(n),m(f,u)),y=S+2500,g=16.7)}let _=new L;function b(S,A,v){_.copy(o.position).sub(S).setY(0).normalize(),a.focus.position.copy(S).addScaledVector(_,.28).add(new L(0,.62,0)),a.focus.target.position.copy(S),a.focus.intensity=.55*v,d&&(d.uniforms.focus.value=A,d.uniforms.aperture.value=.012*v)}return{renderer:e,scene:s,camera:o,lights:a,ao:c,bloom:h,dof:d,envMap:r,resize:m,render:x,govern:E,focusOn:b,floor:l}}function yp(){let i=Math.min(innerWidth,innerHeight)<700,t=matchMedia("(pointer: coarse)").matches,e=i||t;return{low:e,effects:!e,pixelRatio:Math.min(devicePixelRatio||1,1.5),shadows:!0,shadowSize:e?1024:2048,playfieldScale:e?2.4:3.6,anisotropy:e?4:8}}var br=Math.PI/180,Mp=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Yy=i=>i*i*i*(i*(i*6-15)+10),uc=class{constructor(t){this.camera=t,this.poses=[],this.anchors=[],this.holds=[],this.current=null,this.parallax={x:0,y:0,tx:0,ty:0},this.view={width:1,height:1,header:64,layout:"wide",panel:460}}setPoses(t){this.poses=t}measure(t,e,n){let s=scrollY,r=o=>o.getBoundingClientRect().top+s;if(n){this.holds=t.map(o=>{let a=o.querySelector(".placard")||o;return Math.min(a.offsetHeight*.75,e*.6)}),this.anchors=t.map((o,a)=>{let l=o.querySelector(".placard")||o;return Math.max(0,r(l)-e*.55)+this.holds[a]/2}),this.anchors[0]=0;return}this.anchors=t.map(o=>r(o)+o.offsetHeight/2-e/2),this.anchors[0]=0,this.holds=t.map((o,a)=>{let l=a>0?this.anchors[a]-this.anchors[a-1]:1/0,c=a<t.length-1?this.anchors[a+1]-this.anchors[a]:1/0;return Math.min(l,c,o.offsetHeight)*.42})}floatAt(t){let e=this.anchors,n=this.holds,s=e.length;if(!s||t<=e[0]+n[0]/2)return 0;for(let r=0;r<s-1;r++){let o=e[r]+n[r]/2,a=e[r+1]-n[r+1]/2;if(t<o)return r;if(t<=a)return r+Yy(Mp((t-o)/Math.max(1,a-o)))}return s-1}holdProgress(t,e){let n=this.anchors[t]-this.holds[t]/2;return Mp((e-n)/Math.max(1,this.holds[t]))}setView(t,e,n){this.view.width=t,this.view.height=e,this.view.header=n,this.view.layout=t>=900&&t/e>1.05?"wide":"tall",this.view.panel=Math.min(470,t*.36)}frame(t){let{width:e,height:n,header:s,layout:r}=this.view,o=s/n;if(t.side==="center")return{cx:.5,cy:.5,fx:.9,fy:.9};if(r==="wide"){if(t.side==="hero")return{cx:.5,cy:o/2+.5,fx:.96,fy:(1-o)*.97};let a=Math.min(.42,(Math.min(560,e*.4)+80)/e);return{cx:t.side==="left"?a+(1-a)/2:(1-a)/2,cy:o/2+.5,fx:(1-a)*.98,fy:(1-o)*.98}}return t.side==="hero"?{cx:.5,cy:o+.24,fx:.98,fy:.46}:{cx:.5,cy:o+.21,fx:.98,fy:.42}}resolve(t){let e=this.frame(t),n=(t.fov||32)*br,s=this.view.width/this.view.height,r=Math.tan(n/2),o=Math.max(t.fit[1]/(2*r*e.fy),t.fit[0]/(2*r*s*e.fx))*(t.zoom||1);return{target:t.target.clone(),az:t.az*br,el:t.el*br,d:o,fov:t.fov||32,cx:e.cx,cy:e.cy}}blend(t,e,n,s=0){return{target:t.target.clone().lerp(e.target,n),az:t.az+(e.az-t.az)*n,el:t.el+(e.el-t.el)*n+Math.sin(Math.PI*n)*s*br,d:Math.exp(Math.log(t.d)+(Math.log(e.d)-Math.log(t.d))*n),fov:t.fov+(e.fov-t.fov)*n,cx:t.cx+(e.cx-t.cx)*n,cy:t.cy+(e.cy-t.cy)*n}}at(t){let e=this.poses.length,n=Math.min(e-1,Math.floor(t)),s=t-n,r=this.resolve(this.poses[n]);if(s<=0||n>=e-1)return r;let o=this.resolve(this.poses[n+1]);return this.blend(r,o,s,this.poses[n+1].lift||0)}pointer(t,e){this.parallax.tx=t,this.parallax.ty=e}apply(t,e,{damping:n=9,instant:s=!1}={}){let r=s?1:1-Math.exp(-e*n);(!this.current||s)&&(this.current={...t,target:t.target.clone()});let o=this.current;o.target.lerp(t.target,r),o.az+=(t.az-o.az)*r,o.el+=(t.el-o.el)*r,o.d+=(t.d-o.d)*r,o.fov+=(t.fov-o.fov)*r,o.cx+=(t.cx-o.cx)*r,o.cy+=(t.cy-o.cy)*r;let a=this.parallax,l=s?1:1-Math.exp(-e*3);a.x+=(a.tx-a.x)*l,a.y+=(a.ty-a.y)*l;let c=o.az+a.x*1.6*br,h=o.el-a.y*1*br,d=this.camera;d.position.set(o.target.x+Math.sin(c)*Math.cos(h)*o.d,o.target.y+Math.sin(h)*o.d,o.target.z+Math.cos(c)*Math.cos(h)*o.d),d.lookAt(o.target),d.fov=o.fov;let{width:f,height:u}=this.view;d.setViewOffset(f,u,f*(.5-o.cx),u*(.5-o.cy),f,u),d.updateProjectionMatrix()}};var Ai=Math.PI/180,Zy=24,Sp=40,$y=1e3,bp=60*Ai,Ep=Object.freeze({rubber:{e:.9,falloff:.1,f:.9,scatter:1},band:{e:.85,falloff:.13,f:.9,scatter:0},sling:{e:.85,falloff:0,f:.8,scatter:1},metal:{e:.4,falloff:0,f:.2,scatter:0},pop:{e:.4,falloff:0,f:.2,scatter:2},plastic:{e:.42,falloff:0,f:.3,scatter:0},drop:{e:.625,falloff:.05,f:.3,scatter:1},ramp:{e:.5,falloff:.2,f:.15,scatter:0},wire:{e:.4,falloff:0,f:.15,scatter:0},flipper:{e:.88,falloff:.15,f:.9,scatter:0}}),Er=(i,t,e)=>i<t?t:i>e?e:i;function Mu(i,t){let e=(typeof i.mat=="string"?Ep[i.mat]:i.mat)||Ep[t];return{e:i.e??e.e,falloff:i.falloff??e.falloff,f:i.f??e.f,scatter:i.scatter??e.scatter??0}}function Jy(i){let t=i.seed=i.seed+1831565813>>>0;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}var Ky=(i,t)=>i.layer==="*"||i.layer===t;function jy(i,t,e){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){let[o,a]=i[s],[l,c]=i[r];a>e!=c>e&&t<(l-o)*(e-a)/(c-a)+o&&(n=!n)}return n}function Qy(i,t,e,n){let s=i.len2>0?Er(((t-i.ax)*i.ex+(e-i.ay)*i.ey)/i.len2,0,1):0,r=i.ax+i.ex*s,o=i.ay+i.ey*s,a=t-r,l=e-o,c=Math.hypot(a,l),h=n+i.r;if(c>=h)return null;let d,f;if(c>1e-9)d=a/c,f=l/c;else{let u=Math.sqrt(i.len2)||1;d=-i.ey/u,f=i.ex/u}return{nx:d,ny:f,depth:h-c,px:r+d*i.r,py:o+f*i.r,t:s}}function tM(i,t,e,n){let s=t-i.x,r=e-i.y,o=Math.hypot(s,r),a=n+i.r;if(o>=a)return null;let l=o>1e-9?s/o:0,c=o>1e-9?r/o:1;return{nx:l,ny:c,depth:a-o,px:i.x+l*i.r,py:i.y+c*i.r}}var Su=class{constructor(t){this.p=t,Object.assign(this,{x:0,y:0,z:t.R,vx:0,vy:0,vz:0,wx:0,wy:0,wz:0,layer:0,active:!1,serial:0}),this.q=[0,0,0,1],this.view={x:0,y:0,z:t.R},this.ox=0,this.oy=0,this.oz=t.R}get spin(){return{x:this.wx,y:this.wy,z:this.wz}}get speed(){return Math.hypot(this.vx,this.vy)}place(t,e,n=0,s=0,{layer:r=0}={}){let o=this.p,a=o.R;Object.assign(this,{x:t,y:e,vx:n,vy:s,vz:0,wx:-s/a,wy:n/a,wz:0,layer:r,active:!0}),this.serial++;let l=r!==0?o.trackOf(r):null;l?(l.cursor=-1,this.z=o.locate(l,t,e).z):this.z=a,this.ox=t,this.oy=e,this.oz=this.z,Object.assign(this.view,{x:t,y:e,z:this.z});for(let c of o.triggers)c.inside=!1;return this}remove(){this.active=!1,this.serial++;for(let t of this.p.triggers)t.inside=!1}},dc=class{constructor(t){Object.assign(this,{baseR:11.28,tipR:6.64,length:62.8,strokeTime:.028,hold:.375,holdAngle:6,ret:.055,eosBounce:.2,restBounce:.1,inertia:2200},t),this.id=t.id||"flipper-"+t.side,this.kind="flipper",this.dir=Math.sign(t.up-t.rest)||1,this.restRad=t.rest*Ai,this.stroke=Math.abs(t.up-t.rest)*Ai,this.holdAngle*=Ai,this.alpha=2*this.stroke/this.strokeTime**2,this.mat=Mu(t,"flipper");let e=(this.baseR-this.tipR)/this.length;this.cotPhi=e/Math.sqrt(1-e*e),this.a=0,this.w=0,this.oa=0,this.on=!1,this.queue=[]}get theta(){return this.restRad+this.dir*this.a}get omega(){return this.w*this.dir}surfaceSpeed(){return Math.abs(this.w)*(this.length+this.tipR)}update(t){let e=this.on?this.alpha*(this.a>this.stroke-this.holdAngle?this.hold:1):-this.alpha*this.ret;this.w+=e*t,this.a+=this.w*t,this.a>=this.stroke?(this.a=this.stroke,this.w>0&&(this.w=this.w>bp?-this.eosBounce*this.w:0)):this.a<=0&&(this.a=0,this.w<0&&(this.w=this.w<-bp?-this.restBounce*this.w:0))}test(t,e,n){let s=this.theta,r=Math.cos(s),o=Math.sin(s),a=t-this.x,l=e-this.y,c=a*r+l*o,h=-a*o+l*r,d=Math.abs(h);if(c<-this.baseR-n||c>this.length+this.tipR+n||d>this.baseR+n)return null;let f=Er(c-d*this.cotPhi,0,this.length),u=this.baseR+(this.tipR-this.baseR)*f/this.length,m=c-f,x=Math.hypot(m,d);if(x>=u+n)return null;let g=h<0?-1:1,p=x>1e-9?m/x:0,y=x>1e-9?d/x*g:g,E=p*r-y*o,_=p*o+y*r,b=this.x+f*r+E*u,S=this.y+f*o+_*u,A=this.omega;return{nx:E,ny:_,depth:u+n-x,px:b,py:S,u:f,svx:-A*(S-this.y),svy:A*(b-this.x),body:this}}locked(t){let e=-Math.sign(t)*this.dir;return e<0&&this.a<=1e-9||e>0&&this.a>=this.stroke-1e-9}push(t){this.w+=t*this.dir}},fc=class{constructor(t={}){let e={pitch:6.5,g:9810,radius:13.5,mass:.0806,step:.001,floorFriction:.2,rolling:.0035,spinDecay:1.5,hitMin:50,cell:32,seed:1,...t};this.o=e,this.seed=e.seed>>>0||1,this.R=e.radius,this.mass=e.mass,this.dt=e.step,this.gy=-e.g*Math.sin(e.pitch*Ai),this.gN=e.g*Math.cos(e.pitch*Ai),this.maxTravel=.2*this.R,this.bounds=e.bounds||null,this.colliders=[],this.flippers=[],this.triggers=[],this.tracks=[],this.handlers={},this.muted=!1,this.grid=null,this.steps=0,this.time=0,this.acc=0,this.ball=new Su(this)}collider(t,e,n){return Object.assign(t,{id:e.id??null,kind:e.kind||t.kind,layer:e.layer??0,enabled:!0,mat:Mu(e,n),lastKick:-1e9,solid:!0}),this.colliders.push(t),this.grid=null,t.id}addWall(t,e,n,s,r={}){let o=r.r||0,a=n-t,l=s-e,c={type:"seg",kind:"wall",ax:t,ay:e,bx:n,by:s,r:o,ex:a,ey:l,len2:a*a+l*l,box:[Math.min(t,n)-o,Math.min(e,s)-o,Math.max(t,n)+o,Math.max(e,s)+o]};if(r.oneWay){let h=Math.hypot(...r.oneWay);c.oneWay=[r.oneWay[0]/h,r.oneWay[1]/h]}return r.kick&&Object.assign(c,{kick:r.kick,minSpeed:r.minSpeed??120,recycle:r.recycle??.06,normal:r.normal}),this.collider(c,r,"metal")}addCircle(t,e,n,s={}){let r={type:"circle",kind:s.kick?"pop":"post",x:t,y:e,r:n,box:[t-n,e-n,t+n,e+n]};return s.kick&&Object.assign(r,{kick:s.kick,minSpeed:s.minSpeed??50,recycle:s.recycle??.03}),this.collider(r,s,s.kick?"pop":"rubber")}addKicker(t,e,n,s,r={}){let o=Math.hypot(n-t,s-e),a=r.normal||[-(s-e)/o,(n-t)/o];return r.away&&(r.away[0]-t)*a[0]+(r.away[1]-e)*a[1]>0&&(a=[-a[0],-a[1]]),this.addWall(t,e,n,s,{kind:"sling",mat:"sling",kick:2200,minSpeed:120,recycle:.06,...r,normal:a})}addFlipper(t){let e=new dc(t);return this.flippers.push(e),e.id}addTrigger(t,e,n={}){let s={id:e,kind:n.kind||(n.drain?"drain":"trigger"),layer:n.layer??0,drain:!!n.drain,enabled:!0,inside:!1};if(Array.isArray(t)){s.poly=t.map(a=>[a[0],a[1]]);let r=s.poly.map(a=>a[0]),o=s.poly.map(a=>a[1]);s.box=[Math.min(...r),Math.min(...o),Math.max(...r),Math.max(...o)]}else Object.assign(s,{x:t.x,y:t.y,r:t.r}),s.box=[t.x-t.r,t.y-t.r,t.x+t.r,t.y+t.r];return this.triggers.push(s),e}addTrack(t,e={}){let n=e.id||"track"+this.tracks.length,s={id:n,layer:e.layer??n,kind:e.kind||"ramp",mat:Mu(e,"ramp"),entry:e.entry||[0,0],exit:e.exit??1/0,exitDamp:e.exitDamp??1,cursor:-1};s.pts=t.map(c=>({x:c[0],y:c[1],z:c[2],hw:c[3]??21})),s.seg=[];let r=0;for(let c=0;c+1<s.pts.length;c++){let h=s.pts[c],d=s.pts[c+1],f=d.x-h.x,u=d.y-h.y,m=Math.hypot(f,u)||1e-6;s.seg.push({a:h,b:d,ex:f,ey:u,len:m,len2:m*m,s:r,tx:f/m,ty:u/m,slope:(d.z-h.z)/m}),r+=m}s.length=r;let o=s.seg.findIndex(c=>c.s+c.len>=s.entry[1]);s.entrySegs=o<0?s.seg.length:o+1;let a=s.pts.slice(0,s.entrySegs+1),l=Math.max(...a.map(c=>c.hw))+40;return s.entryBox=[Math.min(...a.map(c=>c.x))-l,Math.min(...a.map(c=>c.y))-l,Math.max(...a.map(c=>c.x))+l,Math.max(...a.map(c=>c.y))+l],s.wall={test:(c,h,d)=>this.trackWall(s,c,h,d),mat:s.mat,id:n,kind:s.kind},this.tracks.push(s),n}setEnabled(t,e){for(let n of this.colliders)n.id===t&&(n.enabled=!!e);for(let n of this.triggers)n.id===t&&(n.enabled=!!e)}isEnabled(t){let e=this.colliders.find(n=>n.id===t)||this.triggers.find(n=>n.id===t);return e?e.enabled:!1}flipper(t){return this.flippers.find(e=>e.side===t||e.id===t)}setFlipper(t,e,n=0){let s=this.flipper(t);s&&(n>0?(s.queue.push({at:this.time+n,on:!!e}),s.queue.sort((r,o)=>r.at-o.at)):(s.queue.length=0,s.on=!!e))}flipperAngle(t){let e=this.flipper(t);if(!e)return 0;let n=this.acc/this.dt,s=e.oa+(e.a-e.oa)*n;return e.rest+e.dir*s/Ai}on(t,e){var n;return((n=this.handlers)[t]||(n[t]=[])).push(e),()=>{this.handlers[t]=this.handlers[t].filter(s=>s!==e)}}emit(t,e){if(this.muted)return;let n=this.handlers[t];if(n)for(let s of n)s(e)}step(t){for(this.acc+=Er(t||0,0,.1);this.acc>=this.dt;)this.acc-=this.dt,this.fixedStep();let e=this.ball,n=this.acc/this.dt;e.view.x=e.ox+(e.x-e.ox)*n,e.view.y=e.oy+(e.y-e.oy)*n,e.view.z=e.oz+(e.z-e.oz)*n}run(t){for(let e=Math.round(t/this.dt);e>0;e--)this.fixedStep()}fixedStep(){this.grid||this.buildGrid();let t=this.ball;for(let r of this.flippers){for(;r.queue.length&&r.queue[0].at<=this.time+1e-9;)r.on=r.queue.shift().on;r.oa=r.a}t.ox=t.x,t.oy=t.y,t.oz=t.z;let e=t.active?Math.hypot(t.vx,t.vy):0;for(let r of this.flippers)e=Math.max(e,r.surfaceSpeed());let n=Math.min(Zy,Math.max(1,Math.ceil(e*this.dt/this.maxTravel))),s=this.dt/n;for(let r=0;r<n;r++)this.substep(s,this.time+r*s);this.steps++,this.time=this.steps*this.dt}substep(t,e){for(let u of this.flippers)u.update(t);let n=this.ball;if(!n.active)return;let s=n.serial,r=this.R,o=n.layer!==0?this.trackOf(n.layer):null,a=this.gy,l=0;if(o){let u=this.locate(o,n.x,n.y),m=-this.gN*u.slope/(1+u.slope*u.slope);l+=m*u.tx,a+=m*u.ty}if(n.vx+=l*t,n.vy+=a*t,(o||n.z<=r+.5)&&this.roll(n,t),n.x+=n.vx*t,n.y+=n.vy*t,this.turn(n,t),this.collide(n,e,o),n.serial!==s||(this.layers(n,t,o),this.sense(n),n.serial!==s||!this.bounds))return;let[c,h,d,f]=this.bounds;(n.x<c||n.x>d||n.y<h||n.y>f)&&(n.remove(),this.emit("drain",{id:"out"}))}roll(t,e){this.floorImpulse(t,this.o.floorFriction*this.gN*e);let n=Math.hypot(t.vx,t.vy);if(n>1e-9){let s=(n-Math.min(n,this.o.rolling*this.gN*e))/n;t.vx*=s,t.vy*=s,t.wx*=s,t.wy*=s}t.wz*=Math.exp(-this.o.spinDecay*e)}floorImpulse(t,e){let n=this.R,s=t.vx-t.wy*n,r=t.vy+t.wx*n,o=Math.hypot(s,r);if(o<=1e-9)return;let a=Math.min(o*2/7,e),l=-a*s/o,c=-a*r/o;t.vx+=l,t.vy+=c,t.wx+=c*2.5/n,t.wy-=l*2.5/n}turn(t,e){let[n,s,r,o]=t.q,a=t.wx*e/2,l=t.wy*e/2,c=t.wz*e/2,h=n+a*o+l*r-c*s,d=s+l*o+c*n-a*r,f=r+c*o+a*s-l*n,u=o-a*n-l*s-c*r,m=Math.hypot(h,d,f,u)||1;t.q[0]=h/m,t.q[1]=d/m,t.q[2]=f/m,t.q[3]=u/m}testCollider(t,e,n,s){let r=t.type==="seg"?Qy(t,e,n,s):tM(t,e,n,s);if(t.oneWay){if(!r)return t.solid=(e-t.ax)*t.oneWay[0]+(n-t.ay)*t.oneWay[1]>0,null;if(!t.solid)return null}return r}collide(t,e,n){let s=this.R,r=[];for(let o of this.cellAt(t.x,t.y)){if(!o.enabled||!Ky(o,t.layer))continue;let a=this.testCollider(o,t.x,t.y,s);a&&(a.src=o,r.push(a))}if(t.layer===0)for(let o of this.flippers){let a=o.test(t.x,t.y,s);a&&(a.src=o,r.push(a))}if(n){let o=n.wall.test(t.x,t.y,s);o&&(o.src=n.wall,r.push(o))}if(r.length){r.length>1&&r.sort((o,a)=>a.depth-o.depth);for(let o=0;o<r.length;o++){let a=r[o].src,l=o===0?r[0]:a instanceof dc?a.test(t.x,t.y,s):a.type?this.testCollider(a,t.x,t.y,s):a.test(t.x,t.y,s);if(!l)continue;let c=this.resolve(t,l,a.mat);c<=0||(a.kick&&this.kick(t,a,l,c,e),c>=this.o.hitMin&&this.emit("hit",{id:a.id,kind:a.kind,speed:c,x:l.px,y:l.py,nx:l.nx,ny:l.ny}))}}}resolve(t,e,n){let s=this.R,r=e.nx,o=e.ny;t.x+=r*e.depth,t.y+=o*e.depth;let a=t.vx+t.wz*s*o-(e.svx||0),l=t.vy-t.wz*s*r-(e.svy||0),c=a*r+l*o;if(c>=0)return 0;let h=-c,d=h<Sp?0:n.e/(1+n.falloff*h/$y),f=e.body,u=1,m=0;f&&(m=(e.px-f.x)*o-(e.py-f.y)*r,f.locked(m)?m=0:u+=this.mass*m*m/f.inertia);let x=(1+d)*h/u;t.vx+=x*r,t.vy+=x*o,m&&f.push(-x*this.mass*m/f.inertia),a-=c*r,l-=c*o;let g=s*(t.wy*r-t.wx*o),p=Math.hypot(a,l,g);if(p>1e-9&&n.f>0){let y=Math.min(p/3.5,n.f*x),E=-y*a/p,_=-y*l/p,b=-y*g/p;t.vx+=E,t.vy+=_,t.wz+=(o*E-r*_)/(.4*s),t.wx-=o*b/(.4*s),t.wy+=r*b/(.4*s),b&&t.z<=s+.5&&this.floorImpulse(t,this.o.floorFriction*1.25*Math.abs(b))}return n.scatter&&h>4*Sp&&this.scatter(t,n.scatter,e.svx||0,e.svy||0),h}scatter(t,e,n=0,s=0){let r=(Jy(this)*2-1)*e*Ai,o=Math.cos(r),a=Math.sin(r),l=t.vx-n,c=t.vy-s;t.vx=n+l*o-c*a,t.vy=s+l*a+c*o}kick(t,e,n,s,r){if(s<e.minSpeed||r-e.lastKick<e.recycle)return;let o=n.nx,a=n.ny;if(e.normal){if(n.t<.08||n.t>.92||o*e.normal[0]+a*e.normal[1]<.5)return;[o,a]=e.normal}let l=t.vx*o+t.vy*a;l<e.kick&&(t.vx+=(e.kick-l)*o,t.vy+=(e.kick-l)*a),e.mat.scatter&&this.scatter(t,e.mat.scatter),e.lastKick=r,this.emit("kick",{id:e.id,kind:e.kind,speed:Math.hypot(t.vx,t.vy),x:n.px,y:n.py,nx:o,ny:a})}trackOf(t){return this.tracks.find(e=>e.layer===t)||null}locate(t,e,n,s){let r=t.seg,o=s??r.length,a=t.cursor<0||s!==void 0,l=a?0:Math.max(0,t.cursor-6),c=a?o-1:Math.min(o-1,t.cursor+6),h=1/0,d=0;for(let y=l;y<=c;y++){let E=r[y],_=Er(((e-E.a.x)*E.ex+(n-E.a.y)*E.ey)/E.len2,0,1),b=(e-E.a.x-E.ex*_)**2+(n-E.a.y-E.ey*_)**2;b<h&&(h=b,d=y)}s===void 0&&(t.cursor=d);let f=r[d],u=((e-f.a.x)*f.ex+(n-f.a.y)*f.ey)/f.len2,m=d===0&&u<0||d===r.length-1&&u>1?u:Er(u,0,1),x=Er(m,0,1),g=f.a.x+f.ex*x,p=f.a.y+f.ey*x;return{s:f.s+m*f.len,z:f.a.z+(f.b.z-f.a.z)*x,hw:f.a.hw+(f.b.hw-f.a.hw)*x,tx:f.tx,ty:f.ty,slope:f.slope,qx:g,qy:p,d:Math.hypot(e-g,n-p)}}trackWall(t,e,n,s){let r=this.locate(t,e,n),o=r.hw-s;if(r.d<=o||r.d<1e-9)return null;let a=(r.qx-e)/r.d,l=(r.qy-n)/r.d;return{nx:a,ny:l,depth:r.d-o,px:e-a*s,py:n-l*s}}layers(t,e,n){let s=this.R;if(n){let r=this.locate(n,t.x,t.y);if(r.s<n.entry[0]||r.s>n.exit)t.layer=0,r.s>n.exit&&(t.vx*=n.exitDamp,t.vy*=n.exitDamp,t.wx*=n.exitDamp,t.wy*=n.exitDamp),this.emit("exit",{id:n.id,kind:"track",end:r.s>n.exit?"end":"mouth",x:t.x,y:t.y,vx:t.vx,vy:t.vy,speed:t.speed});else{t.vz=(r.z-t.z)/e,t.z=r.z;return}}else if(t.layer===0&&t.z<=s+.5)for(let r of this.tracks){let o=r.entryBox;if(r.entry[1]<=r.entry[0]||t.x<o[0]||t.x>o[2]||t.y<o[1]||t.y>o[3])continue;let a=this.locate(r,t.x,t.y,r.entrySegs);if(a.s>r.entry[0]&&a.s<r.entry[1]&&a.d<a.hw){t.layer=r.layer,r.cursor=-1,t.z=this.locate(r,t.x,t.y).z,this.emit("enter",{id:r.id,kind:"track",x:t.x,y:t.y,vx:t.vx,vy:t.vy,speed:t.speed});return}}(t.z>s||t.vz)&&(t.vz-=this.gN*e,t.z+=t.vz*e,t.z<=s&&(t.z=s,t.vz=t.vz<-300?-.3*t.vz:0))}sense(t){let e=t.serial;for(let n of this.triggers){let[s,r,o,a]=n.box,l=t.active&&n.enabled&&(n.layer==="*"||n.layer===t.layer)&&t.x>=s&&t.x<=o&&t.y>=r&&t.y<=a&&(n.poly?jy(n.poly,t.x,t.y):(t.x-n.x)**2+(t.y-n.y)**2<n.r*n.r);if(l!==n.inside){if(n.inside=l,this.emit(l?"enter":"exit",{id:n.id,kind:n.kind,x:t.x,y:t.y,vx:t.vx,vy:t.vy,speed:t.speed}),t.serial!==e)return;if(l&&n.drain){t.remove(),this.emit("drain",{id:n.id});return}}}}buildGrid(){let t=this.o.cell,e=this.R+4,n=1/0,s=1/0,r=-1/0,o=-1/0;for(let a of this.colliders)n=Math.min(n,a.box[0]),s=Math.min(s,a.box[1]),r=Math.max(r,a.box[2]),o=Math.max(o,a.box[3]);this.colliders.length||(n=s=0,r=o=t),this.gx0=Math.floor((n-e)/t),this.gy0=Math.floor((s-e)/t),this.gnx=Math.floor((r+e)/t)-this.gx0+1,this.gny=Math.floor((o+e)/t)-this.gy0+1,this.grid=Array.from({length:this.gnx*this.gny},()=>[]);for(let a of this.colliders){let l=Math.floor((a.box[0]-e)/t)-this.gx0,c=Math.floor((a.box[2]+e)/t)-this.gx0,h=Math.floor((a.box[1]-e)/t)-this.gy0,d=Math.floor((a.box[3]+e)/t)-this.gy0;for(let f=l;f<=c;f++)for(let u=h;u<=d;u++)this.grid[u*this.gnx+f].push(a)}}cellAt(t,e){let n=Math.floor(t/this.o.cell)-this.gx0,s=Math.floor(e/this.o.cell)-this.gy0;return n<0||s<0||n>=this.gnx||s>=this.gny?[]:this.grid[s*this.gnx+n]}saveState(){let t=this.ball;return{steps:this.steps,acc:this.acc,seed:this.seed,ball:[t.x,t.y,t.z,t.vx,t.vy,t.vz,t.wx,t.wy,t.wz,t.layer,t.active,t.serial,t.ox,t.oy,t.oz,...t.q],flippers:this.flippers.map(e=>[e.a,e.w,e.oa,e.on,e.queue.map(n=>({...n}))]),colliders:this.colliders.map(e=>[e.enabled,e.lastKick,e.solid]),triggers:this.triggers.map(e=>[e.enabled,e.inside]),tracks:this.tracks.map(e=>e.cursor)}}loadState(t){let e=this.ball;this.steps=t.steps,this.time=t.steps*this.dt,this.acc=t.acc,this.seed=t.seed,[e.x,e.y,e.z,e.vx,e.vy,e.vz,e.wx,e.wy,e.wz,e.layer,e.active,e.serial,e.ox,e.oy,e.oz]=t.ball,e.q=t.ball.slice(15,19),t.flippers.forEach(([n,s,r,o,a],l)=>Object.assign(this.flippers[l],{a:n,w:s,oa:r,on:o,queue:a.map(c=>({...c}))})),t.colliders.forEach(([n,s,r],o)=>Object.assign(this.colliders[o],{enabled:n,lastKick:s,solid:r})),t.triggers.forEach(([n,s],r)=>Object.assign(this.triggers[r],{enabled:n,inside:s})),t.tracks.forEach((n,s)=>{this.tracks[s].cursor=n})}aimFlip(t,e,n,{horizon:s=1.2,coarse:r=.008,follow:o=.6,hold:a=.3,reach:l=12,minArrive:c=0}={}){let h=this.flipper(t),d=this.ball;if(!h||!d.active||d.layer!==0)return null;let f=this.saveState(),u=this.muted;this.muted=!0;let m=this.flippers.indexOf(h),x=Math.max(1,Math.round(r/this.dt)),g=()=>d.active&&d.layer===0&&!!this.flippers[m].test(d.x,d.y,this.R+l);h.queue=[],h.on=!1;let p=[];for(let _=0;_*x*this.dt<=s+1e-9&&d.active;_++)g()&&p.push({st:this.saveState(),delay:_*x*this.dt,k:_}),this.run(x*this.dt);let y=(_,b)=>{this.loadState(_);let S=this.flippers[m],A=Math.cos(S.theta),v=Math.sin(S.theta),w={delay:b,miss:Math.hypot(d.x-e,d.y-n),arrive:d.speed,speed:0,angle:0,x:d.x,y:d.y,u:(d.x-S.x)*A+(d.y-S.y)*v};S.queue=[{at:this.time+a,on:!1}],S.on=!0;let C=!1;for(let D=Math.round(o/this.dt);D>0&&d.active;D--){this.fixedStep();let I=Math.hypot(d.x-e,d.y-n);if(I<w.miss)w.miss=I,w.arrive=d.speed;else if(C&&I>w.miss+40)break;!C&&Math.hypot(d.x-S.x,d.y-S.y)>S.length+S.tipR+this.R+12&&(C=!0,w.speed=d.speed,w.angle=Math.atan2(d.vy,d.vx)/Ai)}return w.score=w.miss+Math.max(0,c-w.arrive)*.1,w},E=null;for(let _ of p){let b=y(_.st,_.delay);(!E||b.score<E.score)&&(E=b,E.k=_.k)}if(E&&x>1)for(let _ of p.filter(b=>b.k===E.k-1||b.k===E.k)){let b=_.st;for(let S=1;S<x&&(this.loadState(b),this.fixedStep(),!!g());S++){b=this.saveState();let A=y(b,_.delay+S*this.dt);A.score<E.score&&(E={...A,k:E.k})}}return this.loadState(f),this.muted=u,E&&(delete E.k,delete E.score),E}};var Go=Math.PI/180,Vo=1.6,Tp=7.13+2.38,eM=7.1+2.38,bu=4.76+6.35,nM=4.76,iM=4.62,sM=30,wu=[9,21],mc={pop:1400,sling:2200};function Eu(i,t,e,n,s,r=3){let o=Math.max(1,Math.ceil(Math.abs(s-n)/r));return Array.from({length:o+1},(a,l)=>{let c=(n+(s-n)*l/o)*Go;return[i+Math.cos(c)*e,t+Math.sin(c)*e]})}function rM(i,t){return i.map((e,n)=>{let s=i[Math.max(0,n-1)],r=i[Math.min(i.length-1,n+1)],o=r[0]-s[0],a=r[1]-s[1],l=Math.hypot(o,a)||1;return[e[0]-a/l*t,e[1]+o/l*t]})}function Tr(i,t,e=0,n={}){let{closed:s,...r}=n,o=s?[...t,t[0]]:t;for(let a=0;a+1<o.length;a++){let[l,c]=o[a],[h,d]=o[a+1];Math.hypot(h-l,d-c)<1e-6||i.addWall(l,c,h,d,{r:e/2,...r})}return r.id??null}function oM(i,t,e,n=4,s={}){return Tr(i,rM(t,-e*n),2*n,s)}var pc=(i,t,e,n)=>[[i-e,t-n],[i+e,t-n],[i+e,t+n],[i-e,t+n]];function aM(i,t){let{ORBIT_GUIDES:e=[],ORBIT_WEDGES:n=[],ORBIT_POSTS:s=[],ORBIT_ROLLOVERS:r=[]}=t;for(let a of e)Tr(i,a.line,Vo,{id:"orbit-"+a.side,kind:"guide",mat:"metal"});for(let a of n)Tr(i,a.line,Vo,{id:"wedge-"+a.side,kind:"guide",mat:"metal"});return s.forEach(([a,l],c)=>i.addCircle(a,l,eM,{id:"orbit-post"+c,kind:"post",mat:"rubber"})),{rollovers:r.map((a,l)=>{let[c,h]=Array.isArray(a)?a:[a.x,a.y];return i.addTrigger(pc(c,h,...wu),"orbit"+l,{kind:"orbit"})})}}function wp(i,t=24){let e=[],n=i.length,s=(l,c)=>l.map((h,d)=>2*h-c[d]),r=(l,c)=>Math.pow(l.reduce((h,d,f)=>h+(d-c[f])**2,0),.25);for(let l=0;l+1<n;l++){let c=l>0?i[l-1]:s(i[0],i[1]),h=i[l],d=i[l+1],f=l+2<n?i[l+2]:s(i[n-1],i[n-2]),u=r(h,d);u<1e-4&&(u=1);let m=r(c,h)<1e-4?u:r(c,h),x=r(d,f)<1e-4?u:r(d,f),g=[0,1,2].map(p=>{let y=((h[p]-c[p])/m-(d[p]-c[p])/(m+u)+(d[p]-h[p])/u)*u,E=((d[p]-h[p])/u-(f[p]-h[p])/(u+x)+(f[p]-d[p])/x)*u;return[h[p],y,-3*h[p]+3*d[p]-2*y-E,2*h[p]-2*d[p]+y+E]});for(let p=0;p<t;p++){let y=p/t;e.push({p:g.map(E=>E[0]+E[1]*y+E[2]*y*y+E[3]*y*y*y)})}}e.push({p:[...i[n-1]]});let o=0,a=0;return e.forEach((l,c)=>{if(c){let h=e[c-1].p;o+=Math.hypot(l.p[0]-h[0],l.p[1]-h[1],l.p[2]-h[2]),a+=Math.hypot(l.p[0]-h[0],l.p[1]-h[1])}l.s3=o,l.s2=a}),e}function Tu(i,t){let e=[i[0]];for(let n=1;n<i.length;n++)(i[n].s2-e.at(-1).s2>=t||n===i.length-1)&&e.push(i[n]);return e}function Au(i,t){let e=1;for(;e<i.length-1&&i[e].s2<t;)e++;let n=i[e-1],s=i[e],r=s.s2-n.s2||1,o=(t-n.s2)/r;return{x:n.p[0]+(s.p[0]-n.p[0])*o,y:n.p[1]+(s.p[1]-n.p[1])*o,tx:(s.p[0]-n.p[0])/r,ty:(s.p[1]-n.p[1])/r}}function Ap(i,t,e,n){let s=Au(i,t-e),r=Au(i,t+e);return[[s.x-s.ty*n,s.y+s.tx*n],[r.x-r.ty*n,r.y+r.tx*n],[r.x+r.ty*n,r.y-r.tx*n],[s.x+s.ty*n,s.y-s.tx*n]]}function lM(i,t,e){let{RAMP:n,WIRE:s,BALL_R:r}=t,o=e.turn,a=o.mirror?-1:1,l=o.from??0,c=o.to??180,h=Array.from({length:18},(I,O)=>{let U=(l+(c-l)*(O+1)/18)*Go;return[o.cx+a*Math.cos(U)*o.r,o.cy+Math.sin(U)*o.r,o.h0+(o.h1-o.h0)*(O+1)/18]}),d=wp([...e.path,...h,...o.exit?[o.exit]:[]]),f=wp(e.wire,16),u=d.at(-1).s2,m=I=>(n.width+(n.mouth-n.width)*Math.max(0,1-I/n.flare))/2,x=r+2.6,g=40,p=[];for(let I of Tu(d,6)){let O=Math.max(0,Math.min(1,(u-I.s2)/g));p.push([I.p[0],I.p[1],I.p[2]+r,x+(m(I.s3)-x)*O])}for(let I of Tu(f,6).slice(1))p.push([I.p[0],I.p[1],I.p[2]+s.ride,x]);let y=Tu(d.filter(I=>I.p[2]<sM),4),E=y.at(-1).s2,_=I=>y.map((O,U)=>{let z=y[Math.max(0,U-1)].p,X=y[Math.min(y.length-1,U+1)].p,G=Math.hypot(X[0]-z[0],X[1]-z[1])||1,j=I*(m(O.s3)+n.side/2);return[O.p[0]-(X[1]-z[1])/G*j,O.p[1]+(X[0]-z[0])/G*j]}),[b,S]=[_(1),_(-1)],A=`ramp-${e.id}-wall`;for(let I of[b,S])Tr(i,I,n.side,{id:A,kind:"ramp",mat:"ramp",layer:"*"});i.addWall(...b.at(-1),...S.at(-1),{r:n.floor/2,id:A,kind:"ramp",mat:"ramp"});let v=0;for(let I=1;I<p.length;I++)v+=Math.hypot(p[I][0]-p[I-1][0],p[I][1]-p[I-1][1]);i.addTrack(p,{id:e.id,layer:e.id,mat:"ramp",entry:[0,E-4],exit:v-28,exitDamp:.4});for(let[I,O]of e.supports||[])i.addCircle(I,O,iM,{kind:"post",mat:"metal"});let w=`ramp-${e.id}-mouth`,C=`ramp-${e.id}-made`;i.addTrigger(Ap(d,2,10,n.mouth/2),w,{kind:"mouth",layer:"*"}),i.addTrigger(Ap(d,u-8,10,n.width/2+4),C,{kind:"ramp",layer:e.id});let D=Au(d,0);return{id:e.id,side:e.side,layer:e.id,mouth:w,made:C,at:[D.x,D.y],heading:Math.atan2(D.ty,D.tx)/Go}}function Rp(i,t){let{PF:e,BALL_R:n,FLIPPERS:s,FLIPPER:r,SLINGS:o,APRON:a,SHOOTER:l,ARCH:c,GUIDES:h,STAR_POSTS:d,REBOUND:f=[],GATE:u,TOP_LANES:m,POPS:x,POP:g,RAMPS:p,DROPS:y,RETURN_LANES:E,RUBBER_POSTS:_=[]}=t,b={};i.bounds=[-20,-80,e.w+20,e.l+20];let S=[[e.rail,-10],[e.rail,c.left.cy],...Eu(c.left.cx,c.left.cy,c.left.r,180,90).slice(1),...Eu(c.right.cx,c.right.cy,c.right.r,90,0),[l.laneRight,90]];oM(i,S,-1,4,{id:"rail",kind:"rail",mat:"metal"});let A=l.dividerFace??l.laneLeft-Vo,v=l.laneLeft-A;i.addWall(l.laneLeft-.65,90,l.laneLeft-.65,l.apronTop,{r:.65,id:"divider",kind:"rail",mat:"metal"}),i.addWall(A+v/2,l.apronTop,A+v/2,l.dividerTop,{r:v/2,id:"divider",kind:"rail",mat:"metal"});let w=l.ballRest[1]-n;i.addWall(l.laneLeft,w-3,l.laneRight,w-3,{r:3,id:"plunger",kind:"plunger",e:.3,f:.3});let[C,D]=u.from,[I,O]=u.to,U=Math.hypot(I-C,O-D),z=[(I-C)/U,(O-D)/U],X=[-z[1],z[0]];i.addWall(C,D,I,O,{r:1,oneWay:X,id:"gate",kind:"gate",mat:"metal"});let G=(ot,pt,Zt)=>[ot[0]+X[0]*pt*6+z[0]*Zt*4,ot[1]+X[1]*pt*6+z[1]*Zt*4];i.addTrigger([G(u.from,-1,-1),G(u.to,-1,1),G(u.to,1,1),G(u.from,1,-1)],"gate",{kind:"gate"}),i.addTrigger(pc((l.laneLeft+l.laneRight)/2,l.ballRest[1]+10,(l.laneRight-l.laneLeft)/2,30),"shooter",{kind:"shooter"}),Object.assign(b,{gate:"gate",shooter:"shooter",plunger:{id:"plunger",rest:[...l.ballRest]}});for(let ot of[[a.leftShoulder,a.lipLeft],[a.lipRight,a.rightShoulder]])Tr(i,ot,1.3,{id:"apron",kind:"apron",mat:"metal"});let j=Math.atan2(a.lipEndY-a.lipCy,a.lipRight[0]-e.cx)/Go,W=Math.atan2(a.lipEndY-a.lipCy,a.lipLeft[0]-e.cx)/Go,Q=Eu(e.cx,a.lipCy,a.lipR,j,W,4).map(([ot,pt])=>[ot,pt-n]);b.drain=i.addTrigger([[e.rail,-60],[l.laneLeft,-60],[l.laneLeft,a.lipEndY-n],...Q,[e.rail,a.lipEndY-n]],"drain",{drain:!0}),h.forEach((ot,pt)=>Tr(i,ot,Vo,{id:"guide-"+(pt?"right":"left"),kind:"guide",mat:"metal"}));for(let[ot,pt]of[...d,..._])i.addCircle(ot,pt,Tp,{kind:"post",mat:"rubber"});f.length>=2&&i.addWall(...f[0],...f[1],{r:Tp,id:"rebound",kind:"rubber",mat:"band"}),b.orbits=aM(i,t).rollovers,b.slings={};for(let ot of o){let[pt,Zt,Wt]=ot.posts,$t="sling-"+ot.side;i.addKicker(...pt,...Zt,{r:bu,away:Wt,id:$t,kind:"sling",mat:"sling",kick:mc.sling,minSpeed:120}),i.addWall(...Zt,...Wt,{r:bu,id:$t+"-rubber",kind:"rubber",mat:"sling"}),i.addWall(...Wt,...pt,{r:bu,id:$t+"-rubber",kind:"rubber",mat:"sling"}),b.slings[ot.side]=$t}b.flippers={};for(let ot of s)b.flippers[ot.side]=i.addFlipper({...ot,baseR:r.baseR,tipR:r.tipR,length:r.length});for(let ot of m.guides){i.addWall(ot,m.guideFrom,ot,m.guideTo,{r:Vo/2,kind:"guide",mat:"metal"});for(let pt of[m.guideFrom,m.guideTo])i.addCircle(ot,pt,nM,{kind:"post",mat:"metal"})}b.lanes=m.centers.map((ot,pt)=>i.addTrigger(pc(ot,m.y,...wu),"lane"+pt,{kind:"rollover"})),b.returns=E.map((ot,pt)=>i.addTrigger(pc(ot.x,ot.y,...wu),"return"+pt,{kind:ot.kind})),b.pops=x.map((ot,pt)=>i.addCircle(ot.x,ot.y,g.reach-n,{id:"pop"+pt,kind:"pop",mat:"pop",kick:mc.pop,minSpeed:50,recycle:.03})),b.drops=Array.from({length:y.count},(ot,pt)=>{let Zt=y.cx+(pt-(y.count-1)/2)*y.pitch,Wt=y.thick/2;return i.addWall(Zt-y.width/2+Wt,y.y,Zt+y.width/2-Wt,y.y,{r:Wt,id:"drop"+pt,kind:"drop",mat:"drop"})});let et=y.count*y.pitch+8;return i.addWall(y.cx-et/2+1.5,y.y+9,y.cx+et/2-1.5,y.y+9,{r:1.5,id:"drop-plate",kind:"wall",mat:"metal"}),b.ramps=p.map(ot=>lM(i,t,ot)),b.aim={...Object.fromEntries(b.ramps.map(ot=>[ot.id,ot.at])),drops:[y.cx,y.y-y.thick/2-n-2],...t.ORBIT_ROLLOVERS?Object.fromEntries(t.ORBIT_ROLLOVERS.map(ot=>["orbit-"+ot.side,[ot.x,ot.y]])):{}},b}var Cp=Math.PI/180,cM=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Pp=44.45,Ip=99,bs={soft:1400,full:2600},hM={hero:"play",deadbounce:"ramp-deadbounce",tiptop:"ramp-tiptop",about:"pops",skills:"hold",experience:"hold",contact:"hold"},Dp=["ramp-deadbounce","orbit-left","ramp-tiptop","orbit-right"],gc=class{constructor(t,{reduced:e}){this.h=t,this.reduced=e,this.time=0,this.power=0,this.dropGoals=[0,0,0,0],this.ladder=-1,this.station=null,this.play="play",this.exploded=0;for(let n of t.drops)n.rest=n.holder.position.clone();for(let n of t.rollovers)n.pos=ve(n.x,n.y,ci);t.shooterBall.visible=!1,t.ball.material=t.ball.material.clone(),this.physics=new fc({seed:7}),this.ids=Rp(this.physics,du),this.popColliders=this.physics.colliders.filter(n=>n.kind==="pop"),this.events(),this.auto={state:"serve",at:0,side:null,still:0,shotUntil:0,next:0,user:-1e9,cache:new Map},t.plunger.releasedAt=-1,this.serveAt=.2,this.plungeSpeed=bs.full,this.aim=new L,e&&this.settleForStill()}settleForStill(){let t=this.physics,e=hi[0];t.setFlipper("left",!0),t.ball.place(e.x+20,e.y+70,0,-200),t.run(2.5),this.auto.state="still"}events(){let t=this.physics;t.on("kick",e=>{e.kind==="pop"?this.firePop(+String(e.id).slice(3),ve(e.x,e.y)):e.kind==="sling"&&this.kickSling(String(e.id).replace("sling-",""))}),t.on("hit",e=>{e.kind==="drop"&&this.hitDrop(+String(e.id).slice(4))}),t.on("enter",e=>{let n=String(e.id);if(/^(lane|return)\d$/.test(n))this.flash(n,1.2);else if(/^orbit\d$/.test(n))this.flash(n,1.4);else if(n==="gate")this.swingGate();else if(n.endsWith("-made")){let s=n.slice(5,-5);this.flash(s==="deadbounce"?"ramp0":"ramp1",1.4),this.fireFlasher(s)}}),t.on("drain",()=>{this.auto.state="serve",this.serveAt=this.time+.9;for(let e of hi)t.setFlipper(e.side,!1)})}setStation(t){t!==this.station&&(this.station=t,this.play=hM[t]||this.play,this.play==="pops"&&this.auto.state==="cradled"&&this.letGo())}flip(t,e=.16){let n=this.physics;this.auto.user=this.time,n.setFlipper(t,!0),n.setFlipper(t,!1,e)}hold(t,e){this.auto.user=this.time,this.physics.setFlipper(t,e)}shoot(){return this.auto.state!=="cradled"?!1:(this.auto.forceShot=!0,!0)}firePop(t,e){let n=this.h.pops[t];if(!n)return;n.fired=this.time;let s=n.group.position,r=this.time*7.3,o=e?e.x-s.x:Math.cos(r),a=e?e.z-s.z:Math.sin(r);n.axis.set(a,0,-o).normalize()}kickSling(t){let e=this.h.slings.find(n=>n.side===t);e&&(e.kicked=this.time)}fireFlasher(t){let e=this.h.flashers.find(n=>n.id===t);e&&(e.fired=this.time)}flash(t,e=1){let n=this.h.inserts.get(t);n&&(n.flash=Math.max(n.flash,e))}swingGate(){let t=this.h.gate;t.open=Math.max(t.open,1.25),t.velocity=0}hitDrop(t){let e=this.h.drops[t];e&&(e.state==="up"?(e.state="falling",e.since=this.time,this.flash("drop"+t,1.2),this.physics.setEnabled("drop"+t,!1)):e.state==="down"&&this.resetBank())}resetBank(){for(let t of this.h.drops)t.state!=="up"&&(t.state="rising",t.since=this.time,this.physics.setEnabled("drop"+t.index,!0))}pressStart(){this.startAt=this.time;let t=this.h.plunger;this.auto.state==="shooter"&&!t.pulling&&t.releasedAt<0&&(t.pull=.7,t.pulling=!0,this.release(bs.full))}pull(){let t=this.h.plunger;t.pulling=!0,t.releasedAt=-1,this.auto.user=this.time}release(t){let e=this.h.plunger;e.pulling&&(e.pulling=!1,e.releasedAt=this.time,e.from=e.pull,e.limit=1,this.plungeSpeed=t??bs.soft+(bs.full-bs.soft)*e.from)}near(t){let e=this.physics.ball,n=hi[t==="left"?0:1];return!e.active||e.layer!==0?!1:(t==="left"?e.x<at.cx+8:e.x>at.cx-8)&&e.y<n.y+95&&Math.hypot(e.x-n.x,e.y-n.y)<_r.length+70}letGo(){for(let t of hi)this.physics.setFlipper(t.side,!1);this.auto.state="play",this.auto.side=null}shotFor(t,e){let n=t+":"+e;if(this.auto.cache.has(n))return this.auto.cache.get(n);let s=this.ids.aim[e.replace(/^ramp-/,"")];if(e==="pass"){let o=hi[t==="left"?1:0];s=[o.x+(t==="left"?14:-14),o.y+150]}let r=s?this.physics.aimFlip(t,s[0],s[1],{minArrive:e.startsWith("ramp")?2e3:0}):null;return this.auto.cache.set(n,r),r}autopilot(t){let e=this.physics,n=e.ball,s=this.auto,r=this.time;if(s.state==="still"||r-s.user<4)return;if(s.state==="serve"){if(r<this.serveAt)return;s.state="serving",s.at=r;return}if(s.state==="serving"){if(r-s.at<.38)return;e.ball.place(Qt.ballRest[0],Qt.ballRest[1],0,0),s.state="shooter",s.at=r;return}if(s.state==="shooter"){let a=this.h.plunger;!a.pulling&&a.releasedAt<0&&r-s.at>.8&&(this.pull(),s.user=-1e9,a.limit=this.play==="pops"?.25:1),a.pulling&&a.pull>=a.limit-.001&&r-s.at>1.4&&(this.release(this.play==="pops"?bs.soft:bs.full),s.user=-1e9);return}if(!n.active)return;let o=n.speed<30;for(let a of hi){let l=a.side,c=this.near(l);s.state==="play"&&c&&this.play!=="pops"&&r>s.shotUntil&&n.vy<40&&(e.setFlipper(l,!0),s.state="catching",s.side=l,s.at=r)}if(s.state==="catching"){if(!this.near(s.side)){r-s.at>.4&&this.letGo();return}s.still=o?s.still+t:0,s.still>.25?(s.state="cradled",s.at=r):r-s.at>2.5&&this.letGo();return}if(s.state==="cradled"){if(!this.near(s.side)){this.letGo();return}if(this.play==="pops"){this.letGo();return}let a=s.forceShot?0:this.play==="hold"?1/0:.7;if(r-s.at<a)return;s.forceShot=!1;let l=this.play;(l==="play"||l==="hold")&&(l=Dp[s.next%Dp.length],s.next++);let c=this.shotFor(s.side,l);if((!c||c.miss>14)&&(l="pass",c=this.shotFor(s.side,"pass")),!c){this.letGo();return}e.setFlipper(s.side,!1),e.setFlipper(s.side,!0,c.delay),e.setFlipper(s.side,!1,c.delay+.25),s.shotUntil=r+c.delay+.5,s.state="play",s.side=null}}update(t,e){this.time+=t;let n=this.time,s=this.h,r=this.power,o=this.physics;this.popColliders[2]&&(this.popColliders[2].kick=this.exploded>.05?0:mc.pop),this.reduced||(this.autopilot(t),o.step(t));for(let c of s.flippers)c.pivot.rotation.y=o.flipperAngle(c.side)*Cp;for(let c of s.pops){let h=c.fired<0?9:n-c.fired,d=h<.004?0:h<.014?((h-.004)/.01)**2:h<.03?1:h<.075?.5+.5*Math.cos(Math.PI*(h-.03)/.045):0;c.ring.position.y=(yr.ringRest-yr.ringTravel*(this.reduced?0:d))*N;let f=h<.006?h/.006:Math.max(0,1-(h-.006)/.035);c.skirt.quaternion.setFromAxisAngle(c.axis,this.reduced?0:f*2.5*Cp);let u=h<.5?Math.exp(-h/.07):0;c.capMat.emissiveIntensity=(.22+2.6*u)*r*c.capMat.userData.gain,c.bodyMat.emissiveIntensity=(.06+1.4*u)*r*c.bodyMat.userData.gain}for(let c of s.slings){let h=c.kicked<0?9:n-c.kicked,d=0;h<.008?d=Math.sin(h/.008*(Math.PI/2)):h<.025?d=1:h<.065&&(d=.5+.5*Math.cos(Math.PI*(h-.025)/.04));let f=h>=.065&&h<.35?-.16*Math.sin((h-.065)*Math.PI*2*22)*Math.exp(-(h-.065)*14):0;this.reduced&&(d=0),c.arm.position.copy(c.rest).addScaledVector(c.push,d);let u=this.reduced?0:d+f;(Math.abs(u-c.shown)>.015||u===0&&c.shown!==0)&&(c.rubber.geometry.dispose(),c.rubber.geometry=c.rubberGeo(u*9),c.shown=u)}for(let c of s.drops){let h=n-c.since,d=0,f=0;if(c.state==="falling"){f=Math.min(1,h/.005)*1.5;let u=Math.max(0,(h-.005)/.03);d=-(ue.height+1)*Math.min(1,u*u),u>=1&&(c.state="down")}else if(c.state==="down")d=-(ue.height+1),f=1.5;else if(c.state==="rising"){let u=h/.03,m=(h-.03)/.045;u<1?d=-(ue.height+1)+(ue.height+3)*(1-(1-u)**2):m<1?d=2*(.5+.5*Math.cos(Math.PI*m)):c.state="up"}this.reduced&&(d=c.state==="up"||c.state==="rising"?0:-(ue.height+1),f=0),c.holder.position.copy(c.rest),c.holder.position.y+=d*N,c.holder.position.z-=f*N,this.dropGoals[c.index]=c.state==="falling"||c.state==="down"?1:0}this.updateShooter(t),this.updateBall(),this.updateRollovers(t),this.updateInserts(t,e),s.backglass.material.color.setScalar(r*(.92+.08*Math.sin(n*1.3)));for(let c of s.gi)c.intensity=c.userData.base*r;for(let c of s.bulbs)c.emissiveIntensity=2.2*r*c.userData.gain;let a=this.startAt===void 0?9:n-this.startAt,l=this.auto.state==="shooter"&&Math.sin(n*5)>0;s.startButton.material.emissiveIntensity=(.3+(l?.5:0)+3*Math.exp(-a*5))*r;for(let c of s.flashers){let h=c.fired===void 0?9:n-c.fired,d=h<.09?1:h<.16?.15:h<.25?1:Math.max(0,1-(h-.25)/.2),f=this.reduced?0:d*d;c.mat.emissiveIntensity=(.08+3*f)*r*c.mat.userData.gain,c.light.intensity=.05*f*r}}updateBall(){let t=this.physics.ball,e=this.h.ball,n=this.auto;if(n.state==="serving"){let r=cM((this.time-n.at)/.38),o=1-(1-r)**2;e.visible=!0,e.position.copy(ve(Qt.laneLeft-24+(Qt.ballRest[0]-Qt.laneLeft+24)*o,Qt.ballRest[1]+4*(1-o),ci));return}if(e.visible=t.active,!t.active)return;let s=n.state==="shooter"&&this.h.plunger.shown||0;e.position.copy(ve(t.view.x,t.view.y-s,t.view.z)),e.quaternion.set(t.q[0],t.q[2],-t.q[1],t.q[3])}updateShooter(t){let e=this.h,n=e.plunger,s=this.time,r=this.auto,o=0;if(n.pulling)n.pull=Math.min(n.limit??1,n.pull+t/.5),o=n.pull*Pp;else if(n.releasedAt>=0){let l=s-n.releasedAt,c=Math.PI/2/Ip;if(l<c)o=n.from*Pp*Math.cos(Ip*l);else{r.state==="shooter"&&(this.physics.ball.place(Qt.ballRest[0],Qt.ballRest[1]+1,0,this.plungeSpeed),r.state="play");let h=(l-c)/.12;o=h<1?-5*n.from*Math.sin(Math.PI*h):0,h>=1&&(n.releasedAt=-1,n.pull=0)}}this.reduced&&(o=0),n.shown=Math.max(0,o),n.group.position.copy(n.rest),n.group.position.z+=o*N,n.spring.scale.z=(n.springLen-o)/n.springLen;let a=e.gate;a.velocity+=(-Math.sin(a.open)*820-a.velocity*6)*t,a.open+=a.velocity*t,a.open<0&&(a.open=0,a.velocity=Math.abs(a.velocity)>.5?-a.velocity*.3:0),a.flap.rotation.x=this.reduced?0:a.open}updateRollovers(t){let e=[this.h.ball];for(let n of this.h.rollovers){let s=!1;for(let r of e)r.visible&&Math.abs(r.position.x-n.pos.x)<9*N&&Math.abs(r.position.z-n.pos.z)<21*N&&r.position.y<20*N&&(s=!0);s&&!n.on&&this.flash(n.insert,1.2),n.on=s,n.press=s?Math.min(1,n.press+t/.01):Math.max(0,n.press-t/.03),n.wire.scale.y=1-.75*n.press}}updateInserts(t,e){let n=this.time,s=this.power,r=this.station,o=.05;for(let[a,l]of this.h.inserts){let c=o;switch(l.group){case"lanes":{let h=Math.floor(n*3)%5,d=Number(a.slice(-1));c=h===d||h===4?1.1:.12;break}case"ramp0":c=r==="deadbounce"?Math.floor(n*4)%2?1.6:.3:.2;break;case"ramp1":c=r==="tiptop"?Math.floor(n*4)%2?1.6:.3:.2;break;case"drops":c=this.dropGoals[l.index]>.5?1.5:.08;break;case"ladder":{r==="experience"?c=l.index<this.ladder?1.1:l.index===this.ladder?Math.floor(n*5)%2?1.7:.8:.08:c=Math.floor(n*4)%6===l.index?.9:.12;break}case"again":c=r==="contact"?Math.floor(n*2.5)%2?1.6:.35:.1;break;case"orbit":c=.1;break;case"return":c=(Math.floor(n*1.5)+l.index)%4===0?1.1:.18;break}l.flash=Math.max(0,l.flash-t*3),l.level+=(c-l.level)*(1-Math.exp(-t*18)),l.mat.emissiveIntensity=(l.level+l.flash*2)*s*l.mat.userData.gain}}setDrops(t){let e=[0,1,2,3].map(n=>t>.12+n*.2);e.forEach((n,s)=>{n&&this.h.drops[s].state==="up"&&this.hitDrop(s)}),!e.some(Boolean)&&this.h.drops.some(n=>n.state==="down"||n.state==="falling")&&this.resetBank()}setLadder(t){this.ladder=Math.min(4,Math.floor(t*5.2))}};var Wo="http://www.w3.org/2000/svg",xc=class{constructor(t,e,n){this.svg=t,this.links=[],e.forEach((s,r)=>{for(let o of s.querySelectorAll("[data-anchor]")){let[a,l,c]=o.dataset.anchor.split(",").map(Number),h=document.createElementNS(Wo,"g");h.setAttribute("class","hud-link");let d=document.createElementNS(Wo,"path");d.setAttribute("pathLength","1"),d.setAttribute("class","hud-line");let f=document.createElementNS(Wo,"circle");f.setAttribute("r","9"),f.setAttribute("class","hud-ring");let u=document.createElementNS(Wo,"circle");u.setAttribute("r","3"),u.setAttribute("class","hud-dot");let m=document.createElementNS(Wo,"circle");m.setAttribute("r","2"),m.setAttribute("class","hud-tick"),h.append(d,f,u,m),t.append(h),this.links.push({index:r,el:o,world:n(a,l,c),g:h,path:d,ring:f,dot:u,tick:m,primary:!o.closest("li"),shown:-1,d:""})}}),this.p=null}update(t,e,n,s,r){for(let o of this.links){let a=s[o.index]||0;if(!o.primary&&(r||!o.el.classList.contains("current"))&&(a=0),a<.01){o.shown!==0&&(o.g.style.display="none",o.shown=0);continue}let l=o.world.clone().project(t),c=o.el.getBoundingClientRect();if(l.z>1||c.height===0){o.g.style.display="none",o.shown=0;continue}o.shown===0&&(o.g.style.display="");let h=(l.x+1)/2*e,d=(1-l.y)/2*n,f=c.left>h,u=f?c.left-14:c.right+14,m=c.top+Math.min(c.height/2,16),x=f?u-36:u+36,g=r?`M${h.toFixed(1)},${d.toFixed(1)}L${h.toFixed(1)},${(c.top-18).toFixed(1)}`:`M${h.toFixed(1)},${d.toFixed(1)}L${x.toFixed(1)},${m.toFixed(1)}L${u.toFixed(1)},${m.toFixed(1)}`;g!==o.d&&(o.path.setAttribute("d",g),o.d=g);let p=r?[h,c.top-18]:[u,m];if(o.ring.setAttribute("cx",h.toFixed(1)),o.ring.setAttribute("cy",d.toFixed(1)),o.dot.setAttribute("cx",h.toFixed(1)),o.dot.setAttribute("cy",d.toFixed(1)),o.tick.setAttribute("cx",p[0].toFixed(1)),o.tick.setAttribute("cy",p[1].toFixed(1)),Math.abs(a-o.shown)>.003){let y=a*a*(3-2*a);o.path.style.strokeDashoffset=(1-y).toFixed(3),o.ring.style.transform=`scale(${y.toFixed(3)})`,o.ring.style.transformOrigin=`${h.toFixed(1)}px ${d.toFixed(1)}px`,o.g.style.opacity=Math.min(1,a*1.6).toFixed(3),o.shown=a}else o.ring.style.transformOrigin=`${h.toFixed(1)}px ${d.toFixed(1)}px`;o.g.classList.toggle("lit",o.el.classList.contains("lit")||o.primary)}}};var Ru=i=>i*i*(3-2*i),Cu=i=>Math.min(1,Math.max(0,i)),_c=class{constructor(t,e){this.pop=t;let n=t.group;n.updateMatrixWorld(!0);let s=new Cn;this.parts=t.parts.map((l,c)=>{s.setFromObject(l);let h=n.worldToLocal(s.getCenter(new L)),d=s.getSize(new L);return{holder:l,k:c,lift:l.userData.lift,label:l.userData.label,mid:h,reach:Math.max(d.x,d.z)/2}});let r=this.parts.length,o=this.parts[r-1],a=new Me().setFromPoints([new L(0,-8*N,0),new L(0,o.mid.y+(o.lift+18)*N,0)]);this.axis=new Xr(a,new oo({color:16747082,dashSize:7*N,gapSize:2*N,transparent:!0,opacity:0,depthWrite:!1})),this.axis.computeLineDistances(),this.axis.visible=!1,n.add(this.axis),this.el=document.createElement("div"),this.el.className="cad",this.el.setAttribute("aria-hidden","true");for(let l of this.parts){l.tag=document.createElement("span"),l.tag.className="cad-tag";let c=document.createElement("i");c.textContent=String(l.k+1).padStart(2,"0"),l.tag.append(c,document.createTextNode(l.label)),this.el.append(l.tag)}e.append(this.el),this.shown=-1,this.v=new L}amountFor(t,e){let n=this.parts.length,s=.06;return Ru(Cu(e*(1+s*(n-1))-(n-1-t.k)*s))}update(t,e,n,s,r){if(t<.001&&this.shown===0)return;for(let l of this.parts)l.holder.position.y=l.lift*this.amountFor(l,t)*N;let o=r==="tall"?0:Ru(Cu((t-.2)/.35));if(this.axis.visible=t>.01,this.axis.material.opacity=.85*Ru(Cu(t/.3)),this.el.style.opacity=o.toFixed(3),this.el.classList.toggle("left",r!=="left"),this.shown=t<.001?0:t,o<.01)return;let a=r!=="left"?-1:1;for(let l of this.parts){let c=l.lift*this.amountFor(l,t);this.v.set(a*(l.reach+14*N),l.mid.y+c*N,0).applyMatrix4(this.pop.group.matrixWorld).project(e);let h=(this.v.x+1)/2*n,d=(1-this.v.y)/2*s;l.tag.style.transform=`translate(${h.toFixed(1)}px, ${d.toFixed(1)}px)`}}};var Ri=document.documentElement,Ln=matchMedia("(prefers-reduced-motion: reduce)").matches,Lp=matchMedia("(hover: hover) and (pointer: fine)").matches,Yn=(i,t=document)=>t.querySelector(i),Es=(i,t=document)=>[...t.querySelectorAll(i)],wr=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Up=i=>i*i*(3-2*i),Pu=Math.PI/180,Iu={"ramp-deadbounce":{label:"Read the Deadbounce case study",href:"/work/deadbounce.html"},"ramp-tiptop":{label:"Read the Tip Top case study",href:"/work/tip-top-pinball.html"},"pop-0":{label:"Fire the pop bumper"},"pop-1":{label:"Fire the pop bumper"},"pop-2":{label:"Fire the pop bumper"},"drop-0":{label:"Drop the target"},"drop-1":{label:"Drop the target"},"drop-2":{label:"Drop the target"},"drop-3":{label:"Drop the target"},"sling-left":{label:"Kick the slingshot"},"sling-right":{label:"Kick the slingshot"},"flip-left":{label:"Flip"},"flip-right":{label:"Flip"},plunger:{label:"Launch a ball back to the top"},dmd:{label:"Next display scene"},portrait:{label:"Fire the pops"}},vc={hero:{az:-18,el:5,fit:[.84,1.02],side:"left",fov:30},deadbounce:{at:[108,882,68],az:30,el:28,fit:[.21,.245],side:"right",lift:18},tiptop:{at:[366.35,882,68],az:-30,el:28,fit:[.21,.245],side:"left",lift:10},about:{at:[237,846,92],az:-8,el:30,fit:[.3,.36],side:"right",lift:10},skills:{at:[237,705,17],az:14,el:19,fit:[.13,.075],side:"left",lift:6},experience:{at:[237,400,0],az:-12,el:58,fit:[.11,.15],side:"right",lift:12},contact:{at:[248,140,26],az:-8,el:47,fit:[.27,.17],side:"left",lift:8}},uM={deadbounce:{url:"/assets/img/deadbounce-viewport.jpg",at:[100,972],width:.13,aspect:950/730,action:"ramp-deadbounce"},tiptop:{url:"/assets/img/tiptop.jpg",at:[374.35,972],width:.13,aspect:1600/1027,action:"ramp-tiptop"},about:{url:"/assets/img/dylan.jpg",at:[237.175,944],width:.07,aspect:512/640,action:"portrait"}};async function dM(){if(!Ri.classList.contains("machine"))return;let i=Yn("[data-stage]"),t=Es("[data-station]");if(!i||!t.length)throw new Error("No stage on this page");let e=yp();await ip();let n={playfield:sp(e.playfieldScale),backglass:rp(e.low?1320:2048),cabinetSide:op(2048,768,{frontBottom:(an.top-an.bottom)/(an.top-an.bottom+(an.front-an.back)*Math.tan(6.5*Pu))}),plastics:vr.map(P=>up(P)),apron:ap(e.low?1024:2048),bankPlate:hp(512,160),popDecal:cp(256),cards:{instructions:mu("instructions",625),free:mu("free",625)},targets:["Web","Game","Media","Fab"].map(P=>lp(P,160))},s=document.createElement("canvas"),r=Yn("[data-dmd-label]"),o=Yn("[data-dmd-count]"),a=new window.DMD(s,{reduced:Ln,width:1024,onScene:(P,F,V)=>{r&&(r.textContent=P),o&&V>1&&(o.textContent=`${F} / ${V}`)}}),l=vp(i,e),c=Kf(l.envMap),h=Math.min(e.anisotropy,l.renderer.capabilities.getMaxAnisotropy()),d=mp({M:c,art:n,dmdCanvas:s,anisotropy:h});l.scene.add(d.root),l.ao&&l.ao.setSceneClipBox(new Cn().setFromObject(d.root).expandByScalar(.03)),a.onPaint=()=>{d.dmd.texture.needsUpdate=!0};let f=new gc(d,{reduced:Ln}),u=(P,F,V=0)=>d.toWorld(P,F,V);d.backbox.updateMatrixWorld(!0);let m=d.backbox.localToWorld(new L(0,(Sr.dmdY-Sr.dmdH/2+Sr.glassY+Sr.glassH)/2,0)),x=P=>{let F=vc[P];return{...F,target:F.at?u(...F.at):m}},g=t.map(P=>P.dataset.station),p=new uc(l.camera);p.setPoses(g.map(x));let y={target:u(237,470,60),az:-34,el:15,fit:[1.5,1.6],side:"center",fov:30},E={};for(let[P,F]of Object.entries(uM)){if(!g.includes(P))continue;let V=_p({M:c,url:F.url,width:F.width,aspect:F.aspect,action:F.action,anisotropy:h});V.group.position.copy(ve(F.at[0],F.at[1],0)),V.group.rotation.y=vc[P].az*Pu,V.tilt=vc[P].el*.45*Pu,d.playfield.add(V.group),d.interactive.push(V.face),E[P]=V}let _=new xc(Yn("[data-hud]"),t,u),b=g.indexOf("about"),S=b>=0?new _c(d.pops[2],document.body):null,A=P=>{let F=p.holds[b]*1.6,V=wr((P-(p.anchors[b]-F/2))/F);return V<.5?Up(wr(V/.36)):Up(wr((1-V)/.36))},v=null;!Ln&&window.Lenis&&(v=new window.Lenis({lerp:.085,wheelMultiplier:.9}));let w=()=>v?v.animatedScroll:window.scrollY,C=(P,F={})=>{v?v.scrollTo(P,{duration:F.duration||1.6,easing:V=>1-Math.pow(1-V,4)}):window.scrollTo({top:P,behavior:"auto"})},D=P=>{let F=Yn("#"+P);if(!F)return-1;let V=F.closest("[data-station]")||F.querySelector("[data-station]");return t.indexOf(V)};for(let P of Es('a[href^="#"]'))P.hasAttribute("data-launch")||P.addEventListener("click",F=>{let V=P.getAttribute("href").slice(1),st=V==="main"||V==="top"?0:D(V);if(st<0)return;F.preventDefault(),C(p.anchors[st],{duration:1.8}),history.replaceState(null,"","#"+V);let ht=t[st].querySelector("h1, h2, h3");ht&&(ht.setAttribute("tabindex","-1"),ht.focus({preventScroll:!0}))});t.forEach((P,F)=>P.addEventListener("focusin",()=>{Math.abs(p.floatAt(w())-F)>.2&&C(p.anchors[F],{duration:1.1})}));let I=Yn("[data-header]"),O=0,U=0;function z(){O=innerWidth,U=innerHeight,l.resize(O,U),p.setView(O,U,I?I.offsetHeight:64),Ri.classList.toggle("tall",p.view.layout==="tall"),t.forEach(P=>{let F=P.querySelector(".placard");F&&P.style.setProperty("--ph",F.offsetHeight+"px")}),p.measure(t,U,p.view.layout==="tall")}z();let X=0;addEventListener("resize",()=>{clearTimeout(X),X=setTimeout(z,120)}),document.fonts.ready.then(z);let G=new uo,j=new rt(9,9),W=null,Q=!1,et=Yn("[data-cursor-label]"),ot=P=>P.closest("a, button, input, label, .placard, [data-glass], .site-header, .dmd-strip, .site-footer");addEventListener("pointermove",P=>{j.set(P.clientX/O*2-1,-(P.clientY/U)*2+1),Lp&&p.pointer(j.x,j.y),et&&(et.style.transform=`translate(${P.clientX}px, ${P.clientY}px) translate(-50%, -50%) scale(${W?1:0})`),Q=!!ot(P.target)},{passive:!0});function pt(){if(Q||Math.abs(j.x)>1)return null;G.setFromCamera(j,l.camera);let P=G.intersectObjects(d.interactive,!1).find(F=>F.object.visible&&(!F.object.parent||F.object.parent.visible!==!1));return P&&P.object.userData.action||null}addEventListener("click",P=>{if(ot(P.target))return;let F=pt();if(!F)return;let V=Iu[F];if(V&&V.href){location.href=V.href;return}F.startsWith("pop-")?f.firePop(+F.slice(4)):F==="portrait"?[0,1,2].forEach((st,ht)=>setTimeout(()=>f.firePop(st),ht*140)):F.startsWith("drop-")?(f.hitDrop(+F.slice(5)),f.manualDrops=!0):F.startsWith("sling-")?f.kickSling(F.slice(6)):F==="flip-left"||F==="flip-right"?Zt(F.slice(5)):F==="plunger"?Wt():F==="dmd"&&a.next()}),addEventListener("keydown",P=>{P.repeat||P.target.closest&&P.target.closest("input, textarea")||(P.code==="ShiftLeft"&&Zt("left",!0),P.code==="ShiftRight"&&Zt("right",!0))}),addEventListener("keyup",P=>{P.code==="ShiftLeft"&&f.hold("left",!1),P.code==="ShiftRight"&&f.hold("right",!1)});function Zt(P,F=!1){F?f.hold(P,!0):f.flip(P)}function Wt(){f.pull(),setTimeout(()=>{f.release(),C(0,{duration:2.8})},Ln?0:520)}for(let P of Es("[data-launch]"))P.addEventListener("click",F=>{F.preventDefault(),Wt()});for(let P of Es('.station-hero a[href="#work"]'))P.addEventListener("click",()=>f.pressStart());for(let P of Es("[data-flip]"))P.addEventListener("pointerenter",()=>f.flip(P.dataset.flip)),P.addEventListener("focus",()=>f.flip(P.dataset.flip));let $t=Yn("[data-dmd-pause]"),K=Yn("[data-dmd-next]"),tt=Ln;$t&&(Ln&&($t.hidden=!0),$t.addEventListener("click",()=>{tt=!tt,$t.setAttribute("aria-pressed",String(tt)),$t.textContent=tt?"Play":"Pause",tt?a.stop():a.start()})),K&&K.addEventListener("click",()=>{a.next(),(tt||Ln)&&a.still()});let gt=t.map(P=>P.querySelector(".placard")),Ut=t.map(P=>P.dataset.side||"hero"),wt=Yn("[data-shade]"),Ht={l:-1,r:-1,b:-1},ae=gt.map(()=>-1),nt=gt.map(()=>0),lt=Yn("[data-lens]"),ut=0;function ft(P){gt.forEach(($,dt)=>{let yt=wr(1-Math.abs(P-dt)*2.4);Ln&&(yt=Math.abs(P-dt)<.5?1:0),nt[dt]=yt,$&&(Math.abs(yt-ae[dt])<.003||(ae[dt]=yt,$.style.opacity=yt.toFixed(3),$.style.transform=`translate3d(0, ${((1-yt)*22).toFixed(1)}px, 0)`,$.classList.toggle("is-here",yt>.55)))});let F=0;nt.forEach(($,dt)=>{dt>0&&$>nt[F]&&(F=dt)});let V=F>0?nt[F]:0;if(lt&&(V>.01||ut>.01)){if(V>.01){let $=gt[F].getBoundingClientRect(),dt=90,yt=80;lt.style.transform=`translate(${($.left-dt).toFixed(0)}px, ${($.top-yt).toFixed(0)}px)`,lt.style.width=`${($.width+dt*2).toFixed(0)}px`,lt.style.height=`${($.height+yt*2).toFixed(0)}px`}lt.style.opacity=V.toFixed(3),ut=V}let st=p.view.layout==="tall",ht=$=>Math.max(0,...nt.map((dt,yt)=>Ut[yt]===$?dt:0)),Z={l:st?0:ht("left"),r:st?0:ht("right"),b:st?Math.max(...nt):0};for(let $ of["l","r","b"])Math.abs(Z[$]-Ht[$])<.004||(Ht[$]=Z[$],wt.style.setProperty("--"+$,Z[$].toFixed(3)))}let xt=Es("[data-skill]"),zt=Es("[data-rung]"),Lt="";function Gt(P){let F=f.dropGoals.join("")+"|"+(P==="experience"?f.ladder:-1);if(F===Lt)return;Lt=F,xt.forEach((Z,$)=>Z.classList.toggle("lit",f.dropGoals[$]>.5)),zt.forEach((Z,$)=>Z.classList.toggle("lit",P==="experience"&&$<=f.ladder));let V=f.dropGoals.filter(Z=>Z>.5).length,st=P==="skills"&&V>0&&V<xt.length?f.dropGoals.lastIndexOf(1):-1,ht=P==="experience"?f.ladder:-1;for(let[Z,$]of[[xt,st],[zt,ht]])Z.forEach((dt,yt)=>dt.classList.toggle("current",yt===$)),Z[0]&&Z[0].parentElement.classList.toggle("has-current",$>=0)}let Vt={blend:Ln?1:0};function B(){if(Ri.classList.remove("booting"),Ri.classList.add("machine-ready"),Ln||!window.gsap){f.power=1,Vt.blend=1,a.boot();return}window.gsap.timeline().to(f,{power:.75,duration:.08,ease:"none"},.35).to(f,{power:.08,duration:.07,ease:"none"},.45).to(f,{power:.9,duration:.06,ease:"none"},.6).to(f,{power:.3,duration:.05,ease:"none"},.68).to(f,{power:1,duration:.5,ease:"power2.out"},.78).call(()=>a.boot(),null,.85).to(Vt,{blend:1,duration:2.6,ease:"power3.inOut"},.2)}let se=!0,Jt=performance.now();document.addEventListener("visibilitychange",()=>{se=!document.hidden,se&&(Jt=performance.now(),requestAnimationFrame(M)),document.hidden?a.stop():tt||a.start()});let R=null;function M(P){if(!se)return;let F=Math.min(.05,(P-Jt)/1e3);Jt=P,v&&v.raf(P);let V=w(),st=p.floatAt(V),ht=Math.round(st),Z=Math.abs(st-ht)<.36?g[ht]:null;Z!==R&&(R=Z,f.setStation(Z||f.station),Ri.dataset.station=Z||"");let $=g.indexOf("skills"),dt=g.indexOf("experience");Z==="skills"?f.manualDrops||f.setDrops(p.holdProgress($,V)):(f.manualDrops=!1,f.setDrops($>=0&&st>$?1:0)),dt>=0&&f.setLadder(p.holdProgress(dt,V));let yt=p.at(Ln?ht:st);Vt.blend<1&&(yt=p.blend(p.resolve(y),yt,Vt.blend,0)),p.apply(yt,F,{instant:Ln,damping:6.5});let vt=ht>0?wr(1-Math.abs(st-ht)*2.4):0;l.focusOn(p.current.target,p.current.d,vt*Vt.blend),f.update(F,{f:st}),ft(st),Gt(Z);for(let[bt,Nt]of Object.entries(E)){let qt=g.indexOf(bt);Nt.setReveal(wr(1-Math.abs(st-qt)*2),Nt.tilt)}if(_.update(l.camera,O,U,nt,p.view.layout==="tall"),S){let bt=A(V);S.update(bt,l.camera,O,U,p.view.layout==="tall"?"tall":vc.about.side),f.exploded=bt}let _t=V>40;if(_t!==Ri.classList.contains("scrolled")&&Ri.classList.toggle("scrolled",_t),Lp){let bt=pt();bt!==W&&(W=bt,document.body.style.cursor=bt?"pointer":"",et&&(et.textContent=bt&&Iu[bt]?Iu[bt].label:""))}l.render(),l.govern(P),requestAnimationFrame(M)}p.apply(p.at(0),0,{instant:!0}),l.render(),requestAnimationFrame(P=>{Jt=P,M(P),B()}),window.__machine={stage:l,h:d,show:f,director:p,dmd:a,lenis:v,scrollTo:C,intro:Vt,plates:E}}dM().catch(i=>{console.error(i),Ri.classList.remove("machine","booting","tall"),Ri.classList.add("machine-failed"),window.dispatchEvent(new Event("machine:failed"))});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
