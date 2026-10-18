(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ol="170",es={ROTATE:0,DOLLY:1,PAN:2},Ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xu=0,Yl=1,Yu=2,Rh=1,Ph=2,zn=3,ei=0,qe=1,vn=2,Gn=0,ns=1,ql=2,$l=3,jl=4,qu=5,di=100,$u=101,ju=102,Zu=103,Ku=104,Ju=200,Qu=201,td=202,ed=203,da=204,fa=205,nd=206,id=207,sd=208,rd=209,od=210,ad=211,ld=212,cd=213,hd=214,pa=0,ma=1,ga=2,as=3,_a=4,xa=5,va=6,ya=7,Lh=0,ud=1,dd=2,ti=0,Dh=1,Ih=2,Uh=3,al=4,fd=5,Nh=6,Fh=7,Oh=300,ls=301,cs=302,Ma=303,Sa=304,xo=306,ba=1e3,mi=1001,Ea=1002,en=1003,pd=1004,rr=1005,hn=1006,Po=1007,gi=1008,An=1009,zh=1010,Bh=1011,qs=1012,ll=1013,xi=1014,wn=1015,bi=1016,cl=1017,hl=1018,hs=1020,kh=35902,Gh=1021,Hh=1022,Mn=1023,Vh=1024,Wh=1025,is=1026,us=1027,vo=1028,ul=1029,Xh=1030,dl=1031,fl=1033,$r=33776,jr=33777,Zr=33778,Kr=33779,wa=35840,Ta=35841,Aa=35842,Ca=35843,Ra=36196,Pa=37492,La=37496,Da=37808,Ia=37809,Ua=37810,Na=37811,Fa=37812,Oa=37813,za=37814,Ba=37815,ka=37816,Ga=37817,Ha=37818,Va=37819,Wa=37820,Xa=37821,Jr=36492,Ya=36494,qa=36495,Yh=36283,$a=36284,ja=36285,Za=36286,md=3200,gd=3201,qh=0,_d=1,Jn="",Je="srgb",ms="srgb-linear",yo="linear",ae="srgb",Ri=7680,Zl=519,xd=512,vd=513,yd=514,$h=515,Md=516,Sd=517,bd=518,Ed=519,Ka=35044,Kl=35048,Jl="300 es",kn=2e3,so=2001;class Ei{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ql=1234567;const ss=Math.PI/180,$s=180/Math.PI;function Tn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function Ee(i,t,e){return Math.max(t,Math.min(e,i))}function pl(i,t){return(i%t+t)%t}function wd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Td(i,t,e){return i!==t?(e-i)/(t-i):0}function Bs(i,t,e){return(1-e)*i+e*t}function Ad(i,t,e,n){return Bs(i,t,1-Math.exp(-e*n))}function Cd(i,t=1){return t-Math.abs(pl(i,t*2)-t)}function Rd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Pd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ld(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Dd(i,t){return i+Math.random()*(t-i)}function Id(i){return i*(.5-Math.random())}function Ud(i){i!==void 0&&(Ql=i);let t=Ql+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nd(i){return i*ss}function Fd(i){return i*$s}function Od(i){return(i&i-1)===0&&i!==0}function zd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kd(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),h=r((t+n)/2),c=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*c,l*d,l*u,a*h);break;case"YZY":i.set(l*u,a*c,l*d,a*h);break;case"ZXZ":i.set(l*d,l*u,a*c,a*h);break;case"XZX":i.set(a*c,l*g,l*f,a*h);break;case"YXY":i.set(l*f,a*c,l*g,a*h);break;case"ZYZ":i.set(l*g,l*f,a*c,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ks={DEG2RAD:ss,RAD2DEG:$s,generateUUID:Tn,clamp:Ee,euclideanModulo:pl,mapLinear:wd,inverseLerp:Td,lerp:Bs,damp:Ad,pingpong:Cd,smoothstep:Rd,smootherstep:Pd,randInt:Ld,randFloat:Dd,randFloatSpread:Id,seededRandom:Ud,degToRad:Nd,radToDeg:Fd,isPowerOfTwo:Od,ceilPowerOfTwo:zd,floorPowerOfTwo:Bd,setQuaternionFromProperEuler:kd,normalize:le,denormalize:yn};class J{constructor(t=0,e=0){J.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,s,r,o,a,l,h){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h)}set(t,e,n,s,r,o,a,l,h){const c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=n,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],c=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],b=s[1],M=s[4],y=s[7],D=s[2],T=s[5],C=s[8];return r[0]=o*_+a*b+l*D,r[3]=o*m+a*M+l*T,r[6]=o*p+a*y+l*C,r[1]=h*_+c*b+d*D,r[4]=h*m+c*M+d*T,r[7]=h*p+c*y+d*C,r[2]=u*_+f*b+g*D,r[5]=u*m+f*M+g*T,r[8]=u*p+f*y+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8];return e*o*c-e*a*h-n*r*c+n*a*l+s*r*h-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],d=c*o-a*h,u=a*l-c*r,f=h*r-o*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*h-c*n)*_,t[2]=(a*n-s*o)*_,t[3]=u*_,t[4]=(c*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-h*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Lo.makeScale(t,e)),this}rotate(t){return this.premultiply(Lo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Lo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Lo=new Yt;function jh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ro(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gd(){const i=ro("canvas");return i.style.display="block",i}const tc={};function Ns(i){i in tc||(tc[i]=!0,console.warn(i))}function Hd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Vd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Wd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Jt={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(i.r=Hn(i.r),i.g=Hn(i.g),i.b=Hn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(i.r=rs(i.r),i.g=rs(i.g),i.b=rs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Jn?yo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ec=[.64,.33,.3,.6,.15,.06],nc=[.2126,.7152,.0722],ic=[.3127,.329],sc=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rc=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Jt.define({[ms]:{primaries:ec,whitePoint:ic,transfer:yo,toXYZ:sc,fromXYZ:rc,luminanceCoefficients:nc,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:ec,whitePoint:ic,transfer:ae,toXYZ:sc,fromXYZ:rc,luminanceCoefficients:nc,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}});let Pi;class Xd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Pi===void 0&&(Pi=ro("canvas")),Pi.width=t.width,Pi.height=t.height;const n=Pi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ro("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hn(e[n]/255)*255):e[n]=Hn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yd=0;class Zh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Tn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Do(s[o].image)):r.push(Do(s[o]))}else r=Do(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Do(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qd=0;class Oe extends Ei{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=mi,s=mi,r=hn,o=gi,a=Mn,l=An,h=Oe.DEFAULT_ANISOTROPY,c=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Tn(),this.name="",this.source=new Zh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ba:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case Ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ba:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case Ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Oh;Oe.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,n=0,s=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,h=l[0],c=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(c-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(h+1)/2,y=(f+1)/2,D=(p+1)/2,T=(c+u)/4,C=(d+_)/4,L=(g+m)/4;return M>y&&M>D?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=C/n):y>D?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=L/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=C/r,s=L/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-c)*(u-c));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-_)/b,this.z=(u-c)/b,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $d extends Ei{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Oe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Zh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends $d{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Kh extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jd extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],h=n[s+1],c=n[s+2],d=n[s+3];const u=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==u||h!==f||c!==g){let m=1-a;const p=l*u+h*f+c*g+d*_,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const D=Math.sqrt(M),T=Math.atan2(D,p*b);m=Math.sin(m*T)/D,a=Math.sin(a*T)/D}const y=a*b;if(l=l*m+u*y,h=h*m+f*y,c=c*m+g*y,d=d*m+_*y,m===1-a){const D=1/Math.sqrt(l*l+h*h+c*c+d*d);l*=D,h*=D,c*=D,d*=D}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],h=n[s+2],c=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+c*d+l*f-h*u,t[e+1]=l*g+c*u+h*d-a*f,t[e+2]=h*g+c*f+a*u-l*d,t[e+3]=c*g-a*d-l*u-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),c=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*c*d+h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d-u*f*g;break;case"YXZ":this._x=u*c*d+h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d+u*f*g;break;case"ZXY":this._x=u*c*d-h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d-u*f*g;break;case"ZYX":this._x=u*c*d-h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d+u*f*g;break;case"YZX":this._x=u*c*d+h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d-u*f*g;break;case"XZY":this._x=u*c*d-h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],c=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(c-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+h)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-h)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,c=e._w;return this._x=n*c+o*a+s*h-r*l,this._y=s*c+o*l+r*a-n*h,this._z=r*c+o*h+n*l-s*a,this._w=o*c-n*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const h=Math.sqrt(l),c=Math.atan2(h,a),d=Math.sin((1-e)*c)/h,u=Math.sin(e*c)/h;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*n),c=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*h+o*d-a*c,this.y=n+l*c+a*h-r*d,this.z=s+l*d+r*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Io.copy(this).projectOnVector(t),this.sub(Io)}reflect(t){return this.sub(Io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Io=new R,oc=new sn;class wi{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,mn):mn.fromBufferAttribute(r,o),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),or.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(t.matrixWorld),this.union(or)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ms),ar.subVectors(this.max,Ms),Li.subVectors(t.a,Ms),Di.subVectors(t.b,Ms),Ii.subVectors(t.c,Ms),Xn.subVectors(Di,Li),Yn.subVectors(Ii,Di),si.subVectors(Li,Ii);let e=[0,-Xn.z,Xn.y,0,-Yn.z,Yn.y,0,-si.z,si.y,Xn.z,0,-Xn.x,Yn.z,0,-Yn.x,si.z,0,-si.x,-Xn.y,Xn.x,0,-Yn.y,Yn.x,0,-si.y,si.x,0];return!Uo(e,Li,Di,Ii,ar)||(e=[1,0,0,0,1,0,0,0,1],!Uo(e,Li,Di,Ii,ar))?!1:(lr.crossVectors(Xn,Yn),e=[lr.x,lr.y,lr.z],Uo(e,Li,Di,Ii,ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const In=[new R,new R,new R,new R,new R,new R,new R,new R],mn=new R,or=new wi,Li=new R,Di=new R,Ii=new R,Xn=new R,Yn=new R,si=new R,Ms=new R,ar=new R,lr=new R,ri=new R;function Uo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ri.fromArray(i,r);const a=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),l=t.dot(ri),h=e.dot(ri),c=n.dot(ri);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}const Zd=new wi,Ss=new R,No=new R;class gs{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ss.subVectors(t,this.center);const e=Ss.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ss,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(No.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ss.copy(t.center).add(No)),this.expandByPoint(Ss.copy(t.center).sub(No))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new R,Fo=new R,cr=new R,qn=new R,Oo=new R,hr=new R,zo=new R;class Mo{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Fo.copy(t).add(e).multiplyScalar(.5),cr.copy(e).sub(t).normalize(),qn.copy(this.origin).sub(Fo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(cr),a=qn.dot(this.direction),l=-qn.dot(cr),h=qn.lengthSq(),c=Math.abs(1-o*o);let d,u,f,g;if(c>0)if(d=o*l-a,u=o*a-l,g=r*c,d>=0)if(u>=-g)if(u<=g){const _=1/c;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+h}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+h;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+h;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+h):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Fo).addScaledVector(cr,u),f}intersectSphere(t,e){Un.subVectors(t.center,this.origin);const n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const h=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(n=(t.min.x-u.x)*h,s=(t.max.x-u.x)*h):(n=(t.max.x-u.x)*h,s=(t.min.x-u.x)*h),c>=0?(r=(t.min.y-u.y)*c,o=(t.max.y-u.y)*c):(r=(t.max.y-u.y)*c,o=(t.min.y-u.y)*c),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,n,s,r){Oo.subVectors(e,t),hr.subVectors(n,t),zo.crossVectors(Oo,hr);let o=this.direction.dot(zo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qn.subVectors(this.origin,t);const l=a*this.direction.dot(hr.crossVectors(qn,hr));if(l<0)return null;const h=a*this.direction.dot(Oo.cross(qn));if(h<0||l+h>o)return null;const c=-a*qn.dot(zo);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(t,e,n,s,r,o,a,l,h,c,d,u,f,g,_,m){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h,c,d,u,f,g,_,m)}set(t,e,n,s,r,o,a,l,h,c,d,u,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=h,p[6]=c,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ui.setFromMatrixColumn(t,0).length(),r=1/Ui.setFromMatrixColumn(t,1).length(),o=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*c,f=o*d,g=a*c,_=a*d;e[0]=l*c,e[4]=-l*d,e[8]=h,e[1]=f+g*h,e[5]=u-_*h,e[9]=-a*l,e[2]=_-u*h,e[6]=g+f*h,e[10]=o*l}else if(t.order==="YXZ"){const u=l*c,f=l*d,g=h*c,_=h*d;e[0]=u+_*a,e[4]=g*a-f,e[8]=o*h,e[1]=o*d,e[5]=o*c,e[9]=-a,e[2]=f*a-g,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*c,f=l*d,g=h*c,_=h*d;e[0]=u-_*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*c,e[9]=_-u*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*c,f=o*d,g=a*c,_=a*d;e[0]=l*c,e[4]=g*h-f,e[8]=u*h+_,e[1]=l*d,e[5]=_*h+u,e[9]=f*h-g,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*h,g=a*l,_=a*h;e[0]=l*c,e[4]=_-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*c,e[9]=-a*c,e[2]=-h*c,e[6]=f*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=o*l,f=o*h,g=a*l,_=a*h;e[0]=l*c,e[4]=-d,e[8]=h*c,e[1]=u*d+_,e[5]=o*c,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*c,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kd,t,Jd)}lookAt(t,e,n){const s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),$n.crossVectors(n,je),$n.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),$n.crossVectors(n,je)),$n.normalize(),ur.crossVectors(je,$n),s[0]=$n.x,s[4]=ur.x,s[8]=je.x,s[1]=$n.y,s[5]=ur.y,s[9]=je.y,s[2]=$n.z,s[6]=ur.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],c=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],M=n[7],y=n[11],D=n[15],T=s[0],C=s[4],L=s[8],x=s[12],v=s[1],A=s[5],O=s[9],F=s[13],z=s[2],V=s[6],G=s[10],nt=s[14],W=s[3],ct=s[7],xt=s[11],wt=s[15];return r[0]=o*T+a*v+l*z+h*W,r[4]=o*C+a*A+l*V+h*ct,r[8]=o*L+a*O+l*G+h*xt,r[12]=o*x+a*F+l*nt+h*wt,r[1]=c*T+d*v+u*z+f*W,r[5]=c*C+d*A+u*V+f*ct,r[9]=c*L+d*O+u*G+f*xt,r[13]=c*x+d*F+u*nt+f*wt,r[2]=g*T+_*v+m*z+p*W,r[6]=g*C+_*A+m*V+p*ct,r[10]=g*L+_*O+m*G+p*xt,r[14]=g*x+_*F+m*nt+p*wt,r[3]=b*T+M*v+y*z+D*W,r[7]=b*C+M*A+y*V+D*ct,r[11]=b*L+M*O+y*G+D*xt,r[15]=b*x+M*F+y*nt+D*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],c=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*d-s*h*d-r*a*u+n*h*u+s*a*f-n*l*f)+_*(+e*l*f-e*h*u+r*o*u-s*o*f+s*h*c-r*l*c)+m*(+e*h*d-e*a*f-r*o*d+n*o*f+r*a*c-n*h*c)+p*(-s*a*c-e*l*d+e*a*u+s*o*d-n*o*u+n*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],b=d*m*h-_*u*h+_*l*f-a*m*f-d*l*p+a*u*p,M=g*u*h-c*m*h-g*l*f+o*m*f+c*l*p-o*u*p,y=c*_*h-g*d*h+g*a*f-o*_*f-c*a*p+o*d*p,D=g*d*l-c*_*l-g*a*u+o*_*u+c*a*m-o*d*m,T=e*b+n*M+s*y+r*D;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=b*C,t[1]=(_*u*r-d*m*r-_*s*f+n*m*f+d*s*p-n*u*p)*C,t[2]=(a*m*r-_*l*r+_*s*h-n*m*h-a*s*p+n*l*p)*C,t[3]=(d*l*r-a*u*r-d*s*h+n*u*h+a*s*f-n*l*f)*C,t[4]=M*C,t[5]=(c*m*r-g*u*r+g*s*f-e*m*f-c*s*p+e*u*p)*C,t[6]=(g*l*r-o*m*r-g*s*h+e*m*h+o*s*p-e*l*p)*C,t[7]=(o*u*r-c*l*r+c*s*h-e*u*h-o*s*f+e*l*f)*C,t[8]=y*C,t[9]=(g*d*r-c*_*r-g*n*f+e*_*f+c*n*p-e*d*p)*C,t[10]=(o*_*r-g*a*r+g*n*h-e*_*h-o*n*p+e*a*p)*C,t[11]=(c*a*r-o*d*r-c*n*h+e*d*h+o*n*f-e*a*f)*C,t[12]=D*C,t[13]=(c*_*s-g*d*s+g*n*u-e*_*u-c*n*m+e*d*m)*C,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*C,t[15]=(o*d*s-c*a*s+c*n*l-e*d*l-o*n*u+e*a*u)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,h=r*o,c=r*a;return this.set(h*o+n,h*a-s*l,h*l+s*a,0,h*a+s*l,c*a+n,c*l-s*o,0,h*l-s*a,c*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,c=o+o,d=a+a,u=r*h,f=r*c,g=r*d,_=o*c,m=o*d,p=a*d,b=l*h,M=l*c,y=l*d,D=n.x,T=n.y,C=n.z;return s[0]=(1-(_+p))*D,s[1]=(f+y)*D,s[2]=(g-M)*D,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(u+p))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(g+M)*C,s[9]=(m-b)*C,s[10]=(1-(u+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ui.set(s[0],s[1],s[2]).length();const o=Ui.set(s[4],s[5],s[6]).length(),a=Ui.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],gn.copy(this);const h=1/r,c=1/o,d=1/a;return gn.elements[0]*=h,gn.elements[1]*=h,gn.elements[2]*=h,gn.elements[4]*=c,gn.elements[5]*=c,gn.elements[6]*=c,gn.elements[8]*=d,gn.elements[9]*=d,gn.elements[10]*=d,e.setFromRotationMatrix(gn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=kn){const l=this.elements,h=2*r/(e-t),c=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let f,g;if(a===kn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===so)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=kn){const l=this.elements,h=1/(e-t),c=1/(n-s),d=1/(o-r),u=(e+t)*h,f=(n+s)*c;let g,_;if(a===kn)g=(o+r)*d,_=-2*d;else if(a===so)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ui=new R,gn=new Zt,Kd=new R(0,0,0),Jd=new R(1,1,1),$n=new R,ur=new R,je=new R,ac=new Zt,lc=new sn;class rn{constructor(t=0,e=0,n=0,s=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],c=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ac.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ac,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lc.setFromEuler(this),this.setFromQuaternion(lc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class ml{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qd=0;const cc=new R,Ni=new sn,Nn=new Zt,dr=new R,bs=new R,tf=new R,ef=new sn,hc=new R(1,0,0),uc=new R(0,1,0),dc=new R(0,0,1),fc={type:"added"},nf={type:"removed"},Fi={type:"childadded",child:null},Bo={type:"childremoved",child:null};class Ae extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new R,e=new rn,n=new sn,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Yt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.premultiply(Ni),this}rotateX(t){return this.rotateOnAxis(hc,t)}rotateY(t){return this.rotateOnAxis(uc,t)}rotateZ(t){return this.rotateOnAxis(dc,t)}translateOnAxis(t,e){return cc.copy(t).applyQuaternion(this.quaternion),this.position.add(cc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hc,t)}translateY(t){return this.translateOnAxis(uc,t)}translateZ(t){return this.translateOnAxis(dc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?dr.copy(t):dr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(bs,dr,this.up):Nn.lookAt(dr,bs,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Ni.setFromRotationMatrix(Nn),this.quaternion.premultiply(Ni.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fc),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nf),Bo.child=t,this.dispatchEvent(Bo),Bo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fc),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,t,tf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,ef,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const d=l[h];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const h in a){const c=a[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new R(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new R,Fn=new R,ko=new R,On=new R,Oi=new R,zi=new R,pc=new R,Go=new R,Ho=new R,Vo=new R,Wo=new ye,Xo=new ye,Yo=new ye;class tn{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_n.subVectors(t,e),s.cross(_n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){_n.subVectors(s,e),Fn.subVectors(n,e),ko.subVectors(t,e);const o=_n.dot(_n),a=_n.dot(Fn),l=_n.dot(ko),h=Fn.dot(Fn),c=Fn.dot(ko),d=o*h-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(h*l-a*c)*u,g=(o*c-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Wo.setScalar(0),Xo.setScalar(0),Yo.setScalar(0),Wo.fromBufferAttribute(t,e),Xo.fromBufferAttribute(t,n),Yo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Wo,r.x),o.addScaledVector(Xo,r.y),o.addScaledVector(Yo,r.z),o}static isFrontFacing(t,e,n,s){return _n.subVectors(n,e),Fn.subVectors(t,e),_n.cross(Fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),_n.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return tn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Oi.subVectors(s,n),zi.subVectors(r,n),Go.subVectors(t,n);const l=Oi.dot(Go),h=zi.dot(Go);if(l<=0&&h<=0)return e.copy(n);Ho.subVectors(t,s);const c=Oi.dot(Ho),d=zi.dot(Ho);if(c>=0&&d<=c)return e.copy(s);const u=l*d-c*h;if(u<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(n).addScaledVector(Oi,o);Vo.subVectors(t,r);const f=Oi.dot(Vo),g=zi.dot(Vo);if(g>=0&&f<=g)return e.copy(r);const _=f*h-l*g;if(_<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(zi,a);const m=c*g-f*d;if(m<=0&&d-c>=0&&f-g>=0)return pc.subVectors(r,s),a=(d-c)/(d-c+(f-g)),e.copy(s).addScaledVector(pc,a);const p=1/(m+_+u);return o=_*p,a=u*p,e.copy(n).addScaledVector(Oi,o).addScaledVector(zi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},fr={h:0,s:0,l:0};function qo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=pl(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=qo(o,r,t+1/3),this.g=qo(o,r,t),this.b=qo(o,r,t-1/3)}return Jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const n=Jh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return Jt.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Ee(Ne.r*255,0,255))*65536+Math.round(Ee(Ne.g*255,0,255))*256+Math.round(Ee(Ne.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Ne.copy(this),e);const n=Ne.r,s=Ne.g,r=Ne.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,h;const c=(a+o)/2;if(a===o)l=0,h=0;else{const d=o-a;switch(h=c<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Je){Jt.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,s=Ne.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(fr);const n=Bs(jn.h,fr.h,e),s=Bs(jn.s,fr.s,e),r=Bs(jn.l,fr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new zt;zt.NAMES=Jh;let sf=0;class Ti extends Ei{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Tn(),this.name="",this.blending=ns,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=da,this.blendDst=fa,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==da&&(n.blendSrc=this.blendSrc),this.blendDst!==fa&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vi extends Ti{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new R,pr=new J;class De{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ka,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pr.fromBufferAttribute(this,e),pr.applyMatrix3(t),this.setXY(e,pr.x,pr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ka&&(t.usage=this.usage),t}}class Qh extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class tu extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}}let rf=0;const an=new Zt,$o=new Ae,Bi=new R,Ze=new wi,Es=new wi,Le=new R;class Me extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Tn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jh(t)?tu:Qh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return $o.lookAt(t),$o.updateMatrix(),this.applyMatrix4($o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Es.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(Ze.min,Es.min),Ze.expandByPoint(Le),Le.addVectors(Ze.max,Es.max),Ze.expandByPoint(Le)):(Ze.expandByPoint(Es.min),Ze.expandByPoint(Es.max))}Ze.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)Le.fromBufferAttribute(a,h),l&&(Bi.fromBufferAttribute(t,h),Le.add(Bi)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new R,l[L]=new R;const h=new R,c=new R,d=new R,u=new J,f=new J,g=new J,_=new R,m=new R;function p(L,x,v){h.fromBufferAttribute(n,L),c.fromBufferAttribute(n,x),d.fromBufferAttribute(n,v),u.fromBufferAttribute(r,L),f.fromBufferAttribute(r,x),g.fromBufferAttribute(r,v),c.sub(h),d.sub(h),f.sub(u),g.sub(u);const A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(A),m.copy(d).multiplyScalar(f.x).addScaledVector(c,-g.x).multiplyScalar(A),a[L].add(_),a[x].add(_),a[v].add(_),l[L].add(m),l[x].add(m),l[v].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,x=b.length;L<x;++L){const v=b[L],A=v.start,O=v.count;for(let F=A,z=A+O;F<z;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const M=new R,y=new R,D=new R,T=new R;function C(L){D.fromBufferAttribute(s,L),T.copy(D);const x=a[L];M.copy(x),M.sub(D.multiplyScalar(D.dot(x))).normalize(),y.crossVectors(T,x);const A=y.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,A)}for(let L=0,x=b.length;L<x;++L){const v=b[L],A=v.start,O=v.count;for(let F=A,z=A+O;F<z;F+=3)C(t.getX(F+0)),C(t.getX(F+1)),C(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new R,r=new R,o=new R,a=new R,l=new R,h=new R,c=new R,d=new R;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),c.subVectors(o,r),d.subVectors(s,r),c.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,m),a.add(c),l.add(c),h.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),c.subVectors(o,r),d.subVectors(s,r),c.cross(d),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,l){const h=a.array,c=a.itemSize,d=a.normalized,u=new h.constructor(l.length*c);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*c;for(let p=0;p<c;p++)u[g++]=h[f++]}return new De(u,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],h=t(l,n);e.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const l=[],h=r[a];for(let c=0,d=h.length;c<d;c++){const u=h[c],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){const f=h[d];c.push(f.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const h in s){const c=s[h];this.setAttribute(h,c.clone(e))}const r=t.morphAttributes;for(const h in r){const c=[],d=r[h];for(let u=0,f=d.length;u<f;u++)c.push(d[u].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,c=o.length;h<c;h++){const d=o[h];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mc=new Zt,oi=new Mo,mr=new gs,gc=new R,gr=new R,_r=new R,xr=new R,jo=new R,vr=new R,_c=new R,yr=new R;class re extends Ae{constructor(t=new Me,e=new vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){vr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const c=a[l],d=r[l];c!==0&&(jo.fromBufferAttribute(d,t),o?vr.addScaledVector(jo,c):vr.addScaledVector(jo.sub(e),c))}e.add(vr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(r),oi.copy(t.ray).recast(t.near),!(mr.containsPoint(oi.origin)===!1&&(oi.intersectSphere(mr,gc)===null||oi.origin.distanceToSquared(gc)>(t.far-t.near)**2))&&(mc.copy(r).invert(),oi.copy(t.ray).applyMatrix4(mc),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,D=M;y<D;y+=3){const T=a.getX(y),C=a.getX(y+1),L=a.getX(y+2);s=Mr(this,p,t,n,h,c,d,T,C,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);s=Mr(this,o,t,n,h,c,d,b,M,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,D=M;y<D;y+=3){const T=y,C=y+1,L=y+2;s=Mr(this,p,t,n,h,c,d,T,C,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=m,M=m+1,y=m+2;s=Mr(this,o,t,n,h,c,d,b,M,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function of(i,t,e,n,s,r,o,a){let l;if(t.side===qe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ei,a),l===null)return null;yr.copy(a),yr.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(yr);return h<e.near||h>e.far?null:{distance:h,point:yr.clone(),object:i}}function Mr(i,t,e,n,s,r,o,a,l,h){i.getVertexPosition(a,gr),i.getVertexPosition(l,_r),i.getVertexPosition(h,xr);const c=of(i,t,e,n,gr,_r,xr,_c);if(c){const d=new R;tn.getBarycoord(_c,gr,_r,xr,d),s&&(c.uv=tn.getInterpolatedAttribute(s,a,l,h,d,new J)),r&&(c.uv1=tn.getInterpolatedAttribute(r,a,l,h,d,new J)),o&&(c.normal=tn.getInterpolatedAttribute(o,a,l,h,d,new R),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const u={a,b:l,c:h,normal:new R,materialIndex:0};tn.getNormal(gr,_r,xr,u.normal),c.face=u,c.barycoord=d}return c}class un extends Me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],h=[],c=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new te(h,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(d,2));function g(_,m,p,b,M,y,D,T,C,L,x){const v=y/C,A=D/L,O=y/2,F=D/2,z=T/2,V=C+1,G=L+1;let nt=0,W=0;const ct=new R;for(let xt=0;xt<G;xt++){const wt=xt*A-F;for(let Vt=0;Vt<V;Vt++){const ne=Vt*v-O;ct[_]=ne*b,ct[m]=wt*M,ct[p]=z,h.push(ct.x,ct.y,ct.z),ct[_]=0,ct[m]=0,ct[p]=T>0?1:-1,c.push(ct.x,ct.y,ct.z),d.push(Vt/C),d.push(1-xt/L),nt+=1}}for(let xt=0;xt<L;xt++)for(let wt=0;wt<C;wt++){const Vt=u+wt+V*xt,ne=u+wt+V*(xt+1),j=u+(wt+1)+V*(xt+1),st=u+(wt+1)+V*xt;l.push(Vt,ne,st),l.push(ne,j,st),W+=6}a.addGroup(f,W,x),f+=W,u+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new un(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ds(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ke(i){const t={};for(let e=0;e<i.length;e++){const n=ds(i[e]);for(const s in n)t[s]=n[s]}return t}function af(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function eu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const gl={clone:ds,merge:ke};var lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dn extends Ti{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lf,this.fragmentShader=cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=af(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class nu extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new R,xc=new J,vc=new J;class Qe extends nu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ss*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $s*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,xc,vc),e.subVectors(vc,xc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ss*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/h,s*=o.width/l,n*=o.height/h}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ki=-90,Gi=1;class hf extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(ki,Gi,t,e);s.layers=this.layers,this.add(s);const r=new Qe(ki,Gi,t,e);r.layers=this.layers,this.add(r);const o=new Qe(ki,Gi,t,e);o.layers=this.layers,this.add(o);const a=new Qe(ki,Gi,t,e);a.layers=this.layers,this.add(a);const l=new Qe(ki,Gi,t,e);l.layers=this.layers,this.add(l);const h=new Qe(ki,Gi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const h of e)this.remove(h);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===so)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,h,c]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,c),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class iu extends Oe{constructor(t,e,n,s,r,o,a,l,h,c){t=t!==void 0?t:[],e=e!==void 0?e:ls,super(t,e,n,s,r,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class uf extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new iu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new un(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:Gn});r.uniforms.tEquirect.value=e;const o=new re(s,r),a=e.minFilter;return e.minFilter===gi&&(e.minFilter=hn),new hf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Zo=new R,df=new R,ff=new Yt;class Bn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Zo.subVectors(n,e).cross(df.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Zo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ff.getNormalMatrix(t),s=this.coplanarPoint(Zo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new gs,Sr=new R;class _l{constructor(t=new Bn,e=new Bn,n=new Bn,s=new Bn,r=new Bn,o=new Bn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],c=s[5],d=s[6],u=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],b=s[13],M=s[14],y=s[15];if(n[0].setComponents(l-r,u-h,m-f,y-p).normalize(),n[1].setComponents(l+r,u+h,m+f,y+p).normalize(),n[2].setComponents(l+o,u+c,m+g,y+b).normalize(),n[3].setComponents(l-o,u-c,m-g,y-b).normalize(),n[4].setComponents(l-a,u-d,m-_,y-M).normalize(),e===kn)n[5].setComponents(l+a,u+d,m+_,y+M).normalize();else if(e===so)n[5].setComponents(a,d,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(t){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Sr.x=s.normal.x>0?t.max.x:t.min.x,Sr.y=s.normal.y>0?t.max.y:t.min.y,Sr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function su(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function pf(i){const t=new WeakMap;function e(a,l){const h=a.array,c=a.usage,d=h.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,h,c),a.onUploadCallback();let f;if(h instanceof Float32Array)f=i.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=i.SHORT;else if(h instanceof Uint32Array)f=i.UNSIGNED_INT;else if(h instanceof Int32Array)f=i.INT;else if(h instanceof Int8Array)f=i.BYTE;else if(h instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,h){const c=l.array,d=l.updateRanges;if(i.bindBuffer(h,a),d.length===0)i.bufferSubData(h,0,c);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];i.bufferSubData(h,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}class Ai extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),h=a+1,c=l+1,d=t/a,u=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<c;p++){const b=p*u-o;for(let M=0;M<h;M++){const y=M*d-r;g.push(y,-b,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const M=b+h*p,y=b+h*(p+1),D=b+1+h*(p+1),T=b+1+h*p;f.push(M,y,T),f.push(y,D,T)}this.setIndex(f),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.width,t.height,t.widthSegments,t.heightSegments)}}var mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gf=`#ifdef USE_ALPHAHASH
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
#endif`,_f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mf=`#ifdef USE_AOMAP
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
#endif`,Sf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bf=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Af=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cf=`#ifdef USE_IRIDESCENCE
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
#endif`,Rf=`#ifdef USE_BUMPMAP
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
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zf=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Bf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kf=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,np=`#ifdef USE_GRADIENTMAP
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
}`,ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,op=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,ap=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,lp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,fp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pp=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_p=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ep=`#if defined( USE_POINTS_UV )
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
#endif`,wp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ap=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pp=`#ifdef USE_MORPHTARGETS
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
#endif`,Lp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Op=`#ifdef USE_NORMALMAP
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
#endif`,zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Qp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,em=`#ifdef USE_SKINNING
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
#endif`,nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,im=`#ifdef USE_SKINNING
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
#endif`,sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,om=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,am=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lm=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cm=`#ifdef USE_TRANSMISSION
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mm=`uniform sampler2D t2D;
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`#include <common>
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
}`,Mm=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sm=`#define DISTANCE
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
}`,bm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`uniform float scale;
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
}`,Am=`uniform vec3 diffuse;
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
}`,Cm=`#include <common>
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Pm=`#define LAMBERT
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
}`,Lm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Dm=`#define MATCAP
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
}`,Im=`#define MATCAP
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
}`,Um=`#define NORMAL
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
}`,Nm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fm=`#define PHONG
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
}`,Om=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,zm=`#define STANDARD
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
}`,Bm=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,km=`#define TOON
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
}`,Gm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Hm=`uniform float size;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Wm=`#include <common>
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
}`,Xm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Ym=`uniform float rotation;
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
}`,qm=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:mf,alphahash_pars_fragment:gf,alphamap_fragment:_f,alphamap_pars_fragment:xf,alphatest_fragment:vf,alphatest_pars_fragment:yf,aomap_fragment:Mf,aomap_pars_fragment:Sf,batching_pars_vertex:bf,batching_vertex:Ef,begin_vertex:wf,beginnormal_vertex:Tf,bsdfs:Af,iridescence_fragment:Cf,bumpmap_pars_fragment:Rf,clipping_planes_fragment:Pf,clipping_planes_pars_fragment:Lf,clipping_planes_pars_vertex:Df,clipping_planes_vertex:If,color_fragment:Uf,color_pars_fragment:Nf,color_pars_vertex:Ff,color_vertex:Of,common:zf,cube_uv_reflection_fragment:Bf,defaultnormal_vertex:kf,displacementmap_pars_vertex:Gf,displacementmap_vertex:Hf,emissivemap_fragment:Vf,emissivemap_pars_fragment:Wf,colorspace_fragment:Xf,colorspace_pars_fragment:Yf,envmap_fragment:qf,envmap_common_pars_fragment:$f,envmap_pars_fragment:jf,envmap_pars_vertex:Zf,envmap_physical_pars_fragment:ap,envmap_vertex:Kf,fog_vertex:Jf,fog_pars_vertex:Qf,fog_fragment:tp,fog_pars_fragment:ep,gradientmap_pars_fragment:np,lightmap_pars_fragment:ip,lights_lambert_fragment:sp,lights_lambert_pars_fragment:rp,lights_pars_begin:op,lights_toon_fragment:lp,lights_toon_pars_fragment:cp,lights_phong_fragment:hp,lights_phong_pars_fragment:up,lights_physical_fragment:dp,lights_physical_pars_fragment:fp,lights_fragment_begin:pp,lights_fragment_maps:mp,lights_fragment_end:gp,logdepthbuf_fragment:_p,logdepthbuf_pars_fragment:xp,logdepthbuf_pars_vertex:vp,logdepthbuf_vertex:yp,map_fragment:Mp,map_pars_fragment:Sp,map_particle_fragment:bp,map_particle_pars_fragment:Ep,metalnessmap_fragment:wp,metalnessmap_pars_fragment:Tp,morphinstance_vertex:Ap,morphcolor_vertex:Cp,morphnormal_vertex:Rp,morphtarget_pars_vertex:Pp,morphtarget_vertex:Lp,normal_fragment_begin:Dp,normal_fragment_maps:Ip,normal_pars_fragment:Up,normal_pars_vertex:Np,normal_vertex:Fp,normalmap_pars_fragment:Op,clearcoat_normal_fragment_begin:zp,clearcoat_normal_fragment_maps:Bp,clearcoat_pars_fragment:kp,iridescence_pars_fragment:Gp,opaque_fragment:Hp,packing:Vp,premultiplied_alpha_fragment:Wp,project_vertex:Xp,dithering_fragment:Yp,dithering_pars_fragment:qp,roughnessmap_fragment:$p,roughnessmap_pars_fragment:jp,shadowmap_pars_fragment:Zp,shadowmap_pars_vertex:Kp,shadowmap_vertex:Jp,shadowmask_pars_fragment:Qp,skinbase_vertex:tm,skinning_pars_vertex:em,skinning_vertex:nm,skinnormal_vertex:im,specularmap_fragment:sm,specularmap_pars_fragment:rm,tonemapping_fragment:om,tonemapping_pars_fragment:am,transmission_fragment:lm,transmission_pars_fragment:cm,uv_pars_fragment:hm,uv_pars_vertex:um,uv_vertex:dm,worldpos_vertex:fm,background_vert:pm,background_frag:mm,backgroundCube_vert:gm,backgroundCube_frag:_m,cube_vert:xm,cube_frag:vm,depth_vert:ym,depth_frag:Mm,distanceRGBA_vert:Sm,distanceRGBA_frag:bm,equirect_vert:Em,equirect_frag:wm,linedashed_vert:Tm,linedashed_frag:Am,meshbasic_vert:Cm,meshbasic_frag:Rm,meshlambert_vert:Pm,meshlambert_frag:Lm,meshmatcap_vert:Dm,meshmatcap_frag:Im,meshnormal_vert:Um,meshnormal_frag:Nm,meshphong_vert:Fm,meshphong_frag:Om,meshphysical_vert:zm,meshphysical_frag:Bm,meshtoon_vert:km,meshtoon_frag:Gm,points_vert:Hm,points_frag:Vm,shadow_vert:Wm,shadow_frag:Xm,sprite_vert:Ym,sprite_frag:qm},ht={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},En={basic:{uniforms:ke([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:ke([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new zt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:ke([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:ke([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:ke([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new zt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:ke([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:ke([ht.points,ht.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:ke([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:ke([ht.common,ht.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:ke([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:ke([ht.sprite,ht.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:ke([ht.common,ht.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:ke([ht.lights,ht.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};En.physical={uniforms:ke([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const br={r:0,b:0,g:0},li=new rn,$m=new Zt;function jm(i,t,e,n,s,r,o){const a=new zt(0);let l=r===!0?0:1,h,c,d=null,u=0,f=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function _(b){let M=!1;const y=g(b);y===null?p(a,l):y&&y.isColor&&(p(y,1),M=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,M){const y=g(M);y&&(y.isCubeTexture||y.mapping===xo)?(c===void 0&&(c=new re(new un(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:ds(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(D,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),li.copy(M.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($m.makeRotationFromEuler(li)),c.material.toneMapped=Jt.getTransfer(y.colorSpace)!==ae,(d!==y||u!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new re(new Ai(2,2),new dn({name:"BackgroundMaterial",uniforms:ds(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.toneMapped=Jt.getTransfer(y.colorSpace)!==ae,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function p(b,M){b.getRGB(br,eu(i)),n.buffers.color.setClear(br.r,br.g,br.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:_,addToRenderList:m}}function Zm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(v,A,O,F,z){let V=!1;const G=d(F,O,A);r!==G&&(r=G,h(r.object)),V=f(v,F,O,z),V&&g(v,F,O,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,y(v,A,O,F),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function h(v){return i.bindVertexArray(v)}function c(v){return i.deleteVertexArray(v)}function d(v,A,O){const F=O.wireframe===!0;let z=n[v.id];z===void 0&&(z={},n[v.id]=z);let V=z[A.id];V===void 0&&(V={},z[A.id]=V);let G=V[F];return G===void 0&&(G=u(l()),V[F]=G),G}function u(v){const A=[],O=[],F=[];for(let z=0;z<e;z++)A[z]=0,O[z]=0,F[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:O,attributeDivisors:F,object:v,attributes:{},index:null}}function f(v,A,O,F){const z=r.attributes,V=A.attributes;let G=0;const nt=O.getAttributes();for(const W in nt)if(nt[W].location>=0){const xt=z[W];let wt=V[W];if(wt===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(wt=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(wt=v.instanceColor)),xt===void 0||xt.attribute!==wt||wt&&xt.data!==wt.data)return!0;G++}return r.attributesNum!==G||r.index!==F}function g(v,A,O,F){const z={},V=A.attributes;let G=0;const nt=O.getAttributes();for(const W in nt)if(nt[W].location>=0){let xt=V[W];xt===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(xt=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(xt=v.instanceColor));const wt={};wt.attribute=xt,xt&&xt.data&&(wt.data=xt.data),z[W]=wt,G++}r.attributes=z,r.attributesNum=G,r.index=F}function _(){const v=r.newAttributes;for(let A=0,O=v.length;A<O;A++)v[A]=0}function m(v){p(v,0)}function p(v,A){const O=r.newAttributes,F=r.enabledAttributes,z=r.attributeDivisors;O[v]=1,F[v]===0&&(i.enableVertexAttribArray(v),F[v]=1),z[v]!==A&&(i.vertexAttribDivisor(v,A),z[v]=A)}function b(){const v=r.newAttributes,A=r.enabledAttributes;for(let O=0,F=A.length;O<F;O++)A[O]!==v[O]&&(i.disableVertexAttribArray(O),A[O]=0)}function M(v,A,O,F,z,V,G){G===!0?i.vertexAttribIPointer(v,A,O,z,V):i.vertexAttribPointer(v,A,O,F,z,V)}function y(v,A,O,F){_();const z=F.attributes,V=O.getAttributes(),G=A.defaultAttributeValues;for(const nt in V){const W=V[nt];if(W.location>=0){let ct=z[nt];if(ct===void 0&&(nt==="instanceMatrix"&&v.instanceMatrix&&(ct=v.instanceMatrix),nt==="instanceColor"&&v.instanceColor&&(ct=v.instanceColor)),ct!==void 0){const xt=ct.normalized,wt=ct.itemSize,Vt=t.get(ct);if(Vt===void 0)continue;const ne=Vt.buffer,j=Vt.type,st=Vt.bytesPerElement,Tt=j===i.INT||j===i.UNSIGNED_INT||ct.gpuType===ll;if(ct.isInterleavedBufferAttribute){const at=ct.data,Ut=at.stride,kt=ct.offset;if(at.isInstancedInterleavedBuffer){for(let Ot=0;Ot<W.locationSize;Ot++)p(W.location+Ot,at.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ot=0;Ot<W.locationSize;Ot++)m(W.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let Ot=0;Ot<W.locationSize;Ot++)M(W.location+Ot,wt/W.locationSize,j,xt,Ut*st,(kt+wt/W.locationSize*Ot)*st,Tt)}else{if(ct.isInstancedBufferAttribute){for(let at=0;at<W.locationSize;at++)p(W.location+at,ct.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let at=0;at<W.locationSize;at++)m(W.location+at);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let at=0;at<W.locationSize;at++)M(W.location+at,wt/W.locationSize,j,xt,wt*st,wt/W.locationSize*at*st,Tt)}}else if(G!==void 0){const xt=G[nt];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(W.location,xt);break;case 3:i.vertexAttrib3fv(W.location,xt);break;case 4:i.vertexAttrib4fv(W.location,xt);break;default:i.vertexAttrib1fv(W.location,xt)}}}}b()}function D(){L();for(const v in n){const A=n[v];for(const O in A){const F=A[O];for(const z in F)c(F[z].object),delete F[z];delete A[O]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;const A=n[v.id];for(const O in A){const F=A[O];for(const z in F)c(F[z].object),delete F[z];delete A[O]}delete n[v.id]}function C(v){for(const A in n){const O=n[A];if(O[v.id]===void 0)continue;const F=O[v.id];for(const z in F)c(F[z].object),delete F[z];delete O[v.id]}}function L(){x(),o=!0,r!==s&&(r=s,h(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:x,dispose:D,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function Km(i,t,e){let n;function s(h){n=h}function r(h,c){i.drawArrays(n,h,c),e.update(c,n,1)}function o(h,c,d){d!==0&&(i.drawArraysInstanced(n,h,c,d),e.update(c,n,d))}function a(h,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,c,0,d);let f=0;for(let g=0;g<d;g++)f+=c[g];e.update(f,n,1)}function l(h,c,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h.length;g++)o(h[g],c[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,c,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=c[_]*u[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Jm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Mn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const L=C===bi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==An&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==wn&&!L)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:D,maxSamples:T}}function Qm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Bn,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=c(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?c(null):h();else{const b=r?0:n,M=b*4;let y=p.clippingState||null;l.value=y,y=c(g,u,M,f);for(let D=0;D!==M;++D)y[D]=e[D];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,y=f;M!==_;++M,y+=4)o.copy(d[M]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function t0(i){let t=new WeakMap;function e(o,a){return a===Ma?o.mapping=ls:a===Sa&&(o.mapping=cs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ma||a===Sa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new uf(l.height);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class So extends nu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ji=4,yc=[.125,.215,.35,.446,.526,.582],fi=20,Ko=new So,Mc=new zt;let Jo=null,Qo=0,ta=0,ea=!1;const ui=(1+Math.sqrt(5))/2,Hi=1/ui,Sc=[new R(-ui,Hi,0),new R(ui,Hi,0),new R(-Hi,0,ui),new R(Hi,0,ui),new R(0,ui,-Hi),new R(0,ui,Hi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class bc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Jo,Qo,ta),this._renderer.xr.enabled=ea,t.scissorTest=!1,Er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:bi,format:Mn,colorSpace:ms,depthBuffer:!1},s=Ec(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ec(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e0(r)),this._blurMaterial=n0(r,t,e)}return s}_compileMaterial(t){const e=new re(this._lodPlanes[0],t);this._renderer.compile(e,Ko)}_sceneToCubeUV(t,e,n,s){const a=new Qe(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,u=c.toneMapping;c.getClearColor(Mc),c.toneMapping=ti,c.autoClear=!1;const f=new vi({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),g=new re(new un,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Mc),_=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(h[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,h[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,h[p]));const M=this._cubeSize;Er(s,b*M,p>2?M:0,M,M),c.setRenderTarget(s),_&&c.render(g,a),c.render(t,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=u,c.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ls||t.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new re(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Er(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ko)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Sc[(s-r-1)%Sc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new re(this._lodPlanes[s],h),u=h.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*fi-1),_=r/g,m=isFinite(r)?1+Math.floor(c*_):fi;m>fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fi}`);const p=[];let b=0;for(let C=0;C<fi;++C){const L=C/_,x=Math.exp(-L*L/2);p.push(x),C===0?b+=x:C<m&&(b+=2*x)}for(let C=0;C<p.length;C++)p[C]=p[C]/b;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-n;const y=this._sizeLods[s],D=3*y*(s>M-Ji?s-M+Ji:0),T=4*(this._cubeSize-y);Er(e,D,T,3*y,2*y),l.setRenderTarget(e),l.render(d,Ko)}}function e0(i){const t=[],e=[],n=[];let s=i;const r=i-Ji+1+yc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ji?l=yc[o-i+Ji-1]:o===0&&(l=0),n.push(l);const h=1/(a-2),c=-h,d=1+h,u=[c,c,d,c,d,d,c,c,d,d,c,d],f=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*f),M=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,L=T>2?0:-1,x=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];b.set(x,_*g*T),M.set(u,m*g*T);const v=[T,T,T,T,T,T];y.set(v,p*g*T)}const D=new Me;D.setAttribute("position",new De(b,_)),D.setAttribute("uv",new De(M,m)),D.setAttribute("faceIndex",new De(y,p)),t.push(D),s>Ji&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ec(i,t,e){const n=new Cn(i,t,e);return n.texture.mapping=xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Er(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function n0(i,t,e){const n=new Float32Array(fi),s=new R(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function wc(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Tc(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function xl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function i0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,h=l===Ma||l===Sa,c=l===ls||l===cs;if(h||c){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new bc(i)),d=h?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return h&&f&&f.height>0||c&&f&&s(f)?(e===null&&(e=new bc(i)),d=h?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const h=6;for(let c=0;c<h;c++)a[c]!==void 0&&l++;return l===h}function r(a){const l=a.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function s0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ns("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function r0(i,t,e,n){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function h(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let M=0,y=b.length;M<y;M+=3){const D=b[M+0],T=b[M+1],C=b[M+2];u.push(D,T,T,C,C,D)}}else if(g!==void 0){const b=g.array;_=g.version;for(let M=0,y=b.length/3-1;M<y;M+=3){const D=M+0,T=M+1,C=M+2;u.push(D,T,T,C,C,D)}}else return;const m=new(jh(u)?tu:Qh)(u,1);m.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function c(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&h(d)}else h(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function o0(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function h(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,u*o,g),e.update(f,n,g))}function c(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)h(u[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*_[b];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function a0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function l0(i,t,e){const n=new WeakMap,s=new ye;function r(o,a,l){const h=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let x=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",x)};u!==void 0&&u.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let M=0;f===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let y=a.attributes.position.count*M,D=1;y>t.maxTextureSize&&(D=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const T=new Float32Array(y*D*4*d),C=new Kh(T,y,D,d);C.type=wn,C.needsUpdate=!0;const L=M*4;for(let v=0;v<d;v++){const A=m[v],O=p[v],F=b[v],z=y*D*4*v;for(let V=0;V<A.count;V++){const G=V*L;f===!0&&(s.fromBufferAttribute(A,V),T[z+G+0]=s.x,T[z+G+1]=s.y,T[z+G+2]=s.z,T[z+G+3]=0),g===!0&&(s.fromBufferAttribute(O,V),T[z+G+4]=s.x,T[z+G+5]=s.y,T[z+G+6]=s.z,T[z+G+7]=0),_===!0&&(s.fromBufferAttribute(F,V),T[z+G+8]=s.x,T[z+G+9]=s.y,T[z+G+10]=s.z,T[z+G+11]=F.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new J(y,D)},n.set(a,u),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<h.length;_++)f+=h[_];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function c0(i,t,e,n){let s=new WeakMap;function r(l){const h=n.render.frame,c=l.geometry,d=t.get(l,c);if(s.get(d)!==h&&(t.update(d),s.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==h&&(u.update(),s.set(u,h))}return d}function o(){s=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}class ru extends Oe{constructor(t,e,n,s,r,o,a,l,h,c=is){if(c!==is&&c!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===is&&(n=xi),n===void 0&&c===us&&(n=hs),super(null,s,r,o,a,l,c,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ou=new Oe,Ac=new ru(1,1),au=new Kh,lu=new jd,cu=new iu,Cc=[],Rc=[],Pc=new Float32Array(16),Lc=new Float32Array(9),Dc=new Float32Array(4);function _s(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Cc[s];if(r===void 0&&(r=new Float32Array(s),Cc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function bo(i,t){let e=Rc[t];e===void 0&&(e=new Int32Array(t),Rc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function h0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function u0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function d0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function f0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function p0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;Dc.set(n),i.uniformMatrix2fv(this.addr,!1,Dc),Re(e,n)}}function m0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;Lc.set(n),i.uniformMatrix3fv(this.addr,!1,Lc),Re(e,n)}}function g0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;Pc.set(n),i.uniformMatrix4fv(this.addr,!1,Pc),Re(e,n)}}function _0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function x0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function v0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function y0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function M0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function S0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function b0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function E0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function w0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ac.compareFunction=$h,r=Ac):r=ou,e.setTexture2D(t||r,s)}function T0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||lu,s)}function A0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||cu,s)}function C0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||au,s)}function R0(i){switch(i){case 5126:return h0;case 35664:return u0;case 35665:return d0;case 35666:return f0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return _0;case 35667:case 35671:return x0;case 35668:case 35672:return v0;case 35669:case 35673:return y0;case 5125:return M0;case 36294:return S0;case 36295:return b0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return C0}}function P0(i,t){i.uniform1fv(this.addr,t)}function L0(i,t){const e=_s(t,this.size,2);i.uniform2fv(this.addr,e)}function D0(i,t){const e=_s(t,this.size,3);i.uniform3fv(this.addr,e)}function I0(i,t){const e=_s(t,this.size,4);i.uniform4fv(this.addr,e)}function U0(i,t){const e=_s(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function N0(i,t){const e=_s(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function F0(i,t){const e=_s(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function O0(i,t){i.uniform1iv(this.addr,t)}function z0(i,t){i.uniform2iv(this.addr,t)}function B0(i,t){i.uniform3iv(this.addr,t)}function k0(i,t){i.uniform4iv(this.addr,t)}function G0(i,t){i.uniform1uiv(this.addr,t)}function H0(i,t){i.uniform2uiv(this.addr,t)}function V0(i,t){i.uniform3uiv(this.addr,t)}function W0(i,t){i.uniform4uiv(this.addr,t)}function X0(i,t,e){const n=this.cache,s=t.length,r=bo(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ou,r[o])}function Y0(i,t,e){const n=this.cache,s=t.length,r=bo(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||lu,r[o])}function q0(i,t,e){const n=this.cache,s=t.length,r=bo(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||cu,r[o])}function $0(i,t,e){const n=this.cache,s=t.length,r=bo(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||au,r[o])}function j0(i){switch(i){case 5126:return P0;case 35664:return L0;case 35665:return D0;case 35666:return I0;case 35674:return U0;case 35675:return N0;case 35676:return F0;case 5124:case 35670:return O0;case 35667:case 35671:return z0;case 35668:case 35672:return B0;case 35669:case 35673:return k0;case 5125:return G0;case 36294:return H0;case 36295:return V0;case 36296:return W0;case 35678:case 36198:case 36298:case 36306:case 35682:return X0;case 35679:case 36299:case 36307:return Y0;case 35680:case 36300:case 36308:case 36293:return q0;case 36289:case 36303:case 36311:case 36292:return $0}}class Z0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=R0(e.type)}}class K0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=j0(e.type)}}class J0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const na=/(\w+)(\])?(\[|\.)?/g;function Ic(i,t){i.seq.push(t),i.map[t.id]=t}function Q0(i,t,e){const n=i.name,s=n.length;for(na.lastIndex=0;;){const r=na.exec(n),o=na.lastIndex;let a=r[1];const l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){Ic(e,h===void 0?new Z0(a,i,t):new K0(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new J0(a),Ic(e,d)),e=d}}}class Qr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Q0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Uc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const tg=37297;let eg=0;function ng(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Nc=new Yt;function ig(i){Jt._getMatrix(Nc,Jt.workingColorSpace,i);const t=`mat3( ${Nc.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(i)){case yo:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Fc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ng(i.getShaderSource(t),o)}else return s}function sg(i,t){const e=ig(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function rg(i,t){let e;switch(t){case Dh:e="Linear";break;case Ih:e="Reinhard";break;case Uh:e="Cineon";break;case al:e="ACESFilmic";break;case Nh:e="AgX";break;case Fh:e="Neutral";break;case fd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const wr=new R;function og(){Jt.getLuminanceCoefficients(wr);const i=wr.x.toFixed(4),t=wr.y.toFixed(4),e=wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ag(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function lg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Fs(i){return i!==""}function Oc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(i){return i.replace(hg,dg)}const ug=new Map;function dg(i,t){let e=$t[t];if(e===void 0){const n=ug.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ja(e)}const fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bc(i){return i.replace(fg,pg)}function pg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function mg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ph?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function gg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ls:case cs:t="ENVMAP_TYPE_CUBE";break;case xo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _g(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case cs:t="ENVMAP_MODE_REFRACTION";break}return t}function xg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Lh:t="ENVMAP_BLENDING_MULTIPLY";break;case ud:t="ENVMAP_BLENDING_MIX";break;case dd:t="ENVMAP_BLENDING_ADD";break}return t}function vg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function yg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=mg(e),h=gg(e),c=_g(e),d=xg(e),u=vg(e),f=ag(e),g=lg(r),_=s.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fs).join(`
`),p.length>0&&(p+=`
`)):(m=[kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),p=[kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?$t.tonemapping_pars_fragment:"",e.toneMapping!==ti?rg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,sg("linearToOutputTexel",e.outputColorSpace),og(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fs).join(`
`)),o=Ja(o),o=Oc(o,e),o=zc(o,e),a=Ja(a),a=Oc(a,e),a=zc(a,e),o=Bc(o),a=Bc(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=b+m+o,y=b+p+a,D=Uc(s,s.VERTEX_SHADER,M),T=Uc(s,s.FRAGMENT_SHADER,y);s.attachShader(_,D),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(A){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(D).trim(),z=s.getShaderInfoLog(T).trim();let V=!0,G=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,T);else{const nt=Fc(s,D,"vertex"),W=Fc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+O+`
`+nt+`
`+W)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||z==="")&&(G=!1);G&&(A.diagnostics={runnable:V,programLog:O,vertexShader:{log:F,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(D),s.deleteShader(T),L=new Qr(s,_),x=cg(s,_)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let x;this.getAttributes=function(){return x===void 0&&C(this),x};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,tg)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=eg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=T,this}let Mg=0;class Sg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new bg(t),e.set(t,n)),n}}class bg{constructor(t){this.id=Mg++,this.code=t,this.usedTimes=0}}function Eg(i,t,e,n,s,r,o){const a=new ml,l=new Sg,h=new Set,c=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return h.add(x),x===0?"uv":`uv${x}`}function m(x,v,A,O,F){const z=O.fog,V=F.geometry,G=x.isMeshStandardMaterial?O.environment:null,nt=(x.isMeshStandardMaterial?e:t).get(x.envMap||G),W=nt&&nt.mapping===xo?nt.image.height:null,ct=g[x.type];x.precision!==null&&(f=s.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const xt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,wt=xt!==void 0?xt.length:0;let Vt=0;V.morphAttributes.position!==void 0&&(Vt=1),V.morphAttributes.normal!==void 0&&(Vt=2),V.morphAttributes.color!==void 0&&(Vt=3);let ne,j,st,Tt;if(ct){const oe=En[ct];ne=oe.vertexShader,j=oe.fragmentShader}else ne=x.vertexShader,j=x.fragmentShader,l.update(x),st=l.getVertexShaderID(x),Tt=l.getFragmentShaderID(x);const at=i.getRenderTarget(),Ut=i.state.buffers.depth.getReversed(),kt=F.isInstancedMesh===!0,Ot=F.isBatchedMesh===!0,Qt=!!x.map,K=!!x.matcap,it=!!nt,P=!!x.aoMap,Lt=!!x.lightMap,tt=!!x.bumpMap,St=!!x.normalMap,lt=!!x.displacementMap,Nt=!!x.emissiveMap,yt=!!x.metalnessMap,w=!!x.roughnessMap,S=x.anisotropy>0,B=x.clearcoat>0,Y=x.dispersion>0,Q=x.iridescence>0,$=x.sheen>0,At=x.transmission>0,ut=S&&!!x.anisotropyMap,Mt=B&&!!x.clearcoatMap,jt=B&&!!x.clearcoatNormalMap,et=B&&!!x.clearcoatRoughnessMap,bt=Q&&!!x.iridescenceMap,Ft=Q&&!!x.iridescenceThicknessMap,Bt=$&&!!x.sheenColorMap,Et=$&&!!x.sheenRoughnessMap,Kt=!!x.specularMap,qt=!!x.specularColorMap,pe=!!x.specularIntensityMap,I=At&&!!x.transmissionMap,dt=At&&!!x.thicknessMap,X=!!x.gradientMap,Z=!!x.alphaMap,_t=x.alphaTest>0,pt=!!x.alphaHash,Wt=!!x.extensions;let ve=ti;x.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ve=i.toneMapping);const Ie={shaderID:ct,shaderType:x.type,shaderName:x.name,vertexShader:ne,fragmentShader:j,defines:x.defines,customVertexShaderID:st,customFragmentShaderID:Tt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Ot,batchingColor:Ot&&F._colorsTexture!==null,instancing:kt,instancingColor:kt&&F.instanceColor!==null,instancingMorph:kt&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:ms,alphaToCoverage:!!x.alphaToCoverage,map:Qt,matcap:K,envMap:it,envMapMode:it&&nt.mapping,envMapCubeUVHeight:W,aoMap:P,lightMap:Lt,bumpMap:tt,normalMap:St,displacementMap:u&&lt,emissiveMap:Nt,normalMapObjectSpace:St&&x.normalMapType===_d,normalMapTangentSpace:St&&x.normalMapType===qh,metalnessMap:yt,roughnessMap:w,anisotropy:S,anisotropyMap:ut,clearcoat:B,clearcoatMap:Mt,clearcoatNormalMap:jt,clearcoatRoughnessMap:et,dispersion:Y,iridescence:Q,iridescenceMap:bt,iridescenceThicknessMap:Ft,sheen:$,sheenColorMap:Bt,sheenRoughnessMap:Et,specularMap:Kt,specularColorMap:qt,specularIntensityMap:pe,transmission:At,transmissionMap:I,thicknessMap:dt,gradientMap:X,opaque:x.transparent===!1&&x.blending===ns&&x.alphaToCoverage===!1,alphaMap:Z,alphaTest:_t,alphaHash:pt,combine:x.combine,mapUv:Qt&&_(x.map.channel),aoMapUv:P&&_(x.aoMap.channel),lightMapUv:Lt&&_(x.lightMap.channel),bumpMapUv:tt&&_(x.bumpMap.channel),normalMapUv:St&&_(x.normalMap.channel),displacementMapUv:lt&&_(x.displacementMap.channel),emissiveMapUv:Nt&&_(x.emissiveMap.channel),metalnessMapUv:yt&&_(x.metalnessMap.channel),roughnessMapUv:w&&_(x.roughnessMap.channel),anisotropyMapUv:ut&&_(x.anisotropyMap.channel),clearcoatMapUv:Mt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:jt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Et&&_(x.sheenRoughnessMap.channel),specularMapUv:Kt&&_(x.specularMap.channel),specularColorMapUv:qt&&_(x.specularColorMap.channel),specularIntensityMapUv:pe&&_(x.specularIntensityMap.channel),transmissionMapUv:I&&_(x.transmissionMap.channel),thicknessMapUv:dt&&_(x.thicknessMap.channel),alphaMapUv:Z&&_(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(St||S),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(Qt||Z),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ut,skinning:F.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Vt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:ve,decodeVideoTexture:Qt&&x.map.isVideoTexture===!0&&Jt.getTransfer(x.map.colorSpace)===ae,decodeVideoTextureEmissive:Nt&&x.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(x.emissiveMap.colorSpace)===ae,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===vn,flipSided:x.side===qe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Wt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&x.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ie.vertexUv1s=h.has(1),Ie.vertexUv2s=h.has(2),Ie.vertexUv3s=h.has(3),h.clear(),Ie}function p(x){const v=[];if(x.shaderID?v.push(x.shaderID):(v.push(x.customVertexShaderID),v.push(x.customFragmentShaderID)),x.defines!==void 0)for(const A in x.defines)v.push(A),v.push(x.defines[A]);return x.isRawShaderMaterial===!1&&(b(v,x),M(v,x),v.push(i.outputColorSpace)),v.push(x.customProgramCacheKey),v.join()}function b(x,v){x.push(v.precision),x.push(v.outputColorSpace),x.push(v.envMapMode),x.push(v.envMapCubeUVHeight),x.push(v.mapUv),x.push(v.alphaMapUv),x.push(v.lightMapUv),x.push(v.aoMapUv),x.push(v.bumpMapUv),x.push(v.normalMapUv),x.push(v.displacementMapUv),x.push(v.emissiveMapUv),x.push(v.metalnessMapUv),x.push(v.roughnessMapUv),x.push(v.anisotropyMapUv),x.push(v.clearcoatMapUv),x.push(v.clearcoatNormalMapUv),x.push(v.clearcoatRoughnessMapUv),x.push(v.iridescenceMapUv),x.push(v.iridescenceThicknessMapUv),x.push(v.sheenColorMapUv),x.push(v.sheenRoughnessMapUv),x.push(v.specularMapUv),x.push(v.specularColorMapUv),x.push(v.specularIntensityMapUv),x.push(v.transmissionMapUv),x.push(v.thicknessMapUv),x.push(v.combine),x.push(v.fogExp2),x.push(v.sizeAttenuation),x.push(v.morphTargetsCount),x.push(v.morphAttributeCount),x.push(v.numDirLights),x.push(v.numPointLights),x.push(v.numSpotLights),x.push(v.numSpotLightMaps),x.push(v.numHemiLights),x.push(v.numRectAreaLights),x.push(v.numDirLightShadows),x.push(v.numPointLightShadows),x.push(v.numSpotLightShadows),x.push(v.numSpotLightShadowsWithMaps),x.push(v.numLightProbes),x.push(v.shadowMapType),x.push(v.toneMapping),x.push(v.numClippingPlanes),x.push(v.numClipIntersection),x.push(v.depthPacking)}function M(x,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),x.push(a.mask)}function y(x){const v=g[x.type];let A;if(v){const O=En[v];A=gl.clone(O.uniforms)}else A=x.uniforms;return A}function D(x,v){let A;for(let O=0,F=c.length;O<F;O++){const z=c[O];if(z.cacheKey===v){A=z,++A.usedTimes;break}}return A===void 0&&(A=new yg(i,v,x,r),c.push(A)),A}function T(x){if(--x.usedTimes===0){const v=c.indexOf(x);c[v]=c[c.length-1],c.pop(),x.destroy()}}function C(x){l.remove(x)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:D,releaseProgram:T,releaseShaderCache:C,programs:c,dispose:L}}function wg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Tg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Gc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,f,g,_,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),t++,p}function a(d,u,f,g,_,m){const p=o(d,u,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(d,u,f,g,_,m){const p=o(d,u,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function h(d,u){e.length>1&&e.sort(d||Tg),n.length>1&&n.sort(u||Gc),s.length>1&&s.sort(u||Gc)}function c(){for(let d=t,u=i.length;d<u;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:c,sort:h}}function Ag(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Hc,i.set(n,[o])):s>=r.length?(o=new Hc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Cg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new zt};break;case"SpotLight":e={position:new R,direction:new R,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Rg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Pg=0;function Lg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Dg(i){const t=new Cg,e=Rg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new R);const s=new R,r=new Zt,o=new Zt;function a(h){let c=0,d=0,u=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,M=0,y=0,D=0,T=0,C=0;h.sort(Lg);for(let x=0,v=h.length;x<v;x++){const A=h[x],O=A.color,F=A.intensity,z=A.distance,V=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)c+=O.r*F,d+=O.g*F,u+=O.b*F;else if(A.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(A.sh.coefficients[G],F);C++}else if(A.isDirectionalLight){const G=t.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const nt=A.shadow,W=e.get(A);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=A.shadow.matrix,b++}n.directional[f]=G,f++}else if(A.isSpotLight){const G=t.get(A);G.position.setFromMatrixPosition(A.matrixWorld),G.color.copy(O).multiplyScalar(F),G.distance=z,G.coneCos=Math.cos(A.angle),G.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),G.decay=A.decay,n.spot[_]=G;const nt=A.shadow;if(A.map&&(n.spotLightMap[D]=A.map,D++,nt.updateMatrices(A),A.castShadow&&T++),n.spotLightMatrix[_]=nt.matrix,A.castShadow){const W=e.get(A);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=V,y++}_++}else if(A.isRectAreaLight){const G=t.get(A);G.color.copy(O).multiplyScalar(F),G.halfWidth.set(A.width*.5,0,0),G.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=G,m++}else if(A.isPointLight){const G=t.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),G.distance=A.distance,G.decay=A.decay,A.castShadow){const nt=A.shadow,W=e.get(A);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,W.shadowCameraNear=nt.camera.near,W.shadowCameraFar=nt.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=A.shadow.matrix,M++}n.point[g]=G,g++}else if(A.isHemisphereLight){const G=t.get(A);G.skyColor.copy(A.color).multiplyScalar(F),G.groundColor.copy(A.groundColor).multiplyScalar(F),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=d,n.ambient[2]=u;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==b||L.numPointShadows!==M||L.numSpotShadows!==y||L.numSpotMaps!==D||L.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+D-T,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=b,L.numPointShadows=M,L.numSpotShadows=y,L.numSpotMaps=D,L.numLightProbes=C,n.version=Pg++)}function l(h,c){let d=0,u=0,f=0,g=0,_=0;const m=c.matrixWorldInverse;for(let p=0,b=h.length;p<b;p++){const M=h[p];if(M.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(M.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Vc(i){const t=new Dg(i),e=[],n=[];function s(c){h.camera=c,e.length=0,n.length=0}function r(c){e.push(c)}function o(c){n.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ig(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Vc(i),t.set(s,[a])):r>=o.length?(a=new Vc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Ug extends Ti{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ng extends Ti{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Og=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zg(i,t,e){let n=new _l;const s=new J,r=new J,o=new ye,a=new Ug({depthPacking:gd}),l=new Ng,h={},c=e.maxTextureSize,d={[ei]:qe,[qe]:ei,[vn]:vn},u=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:Fg,fragmentShader:Og}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Me;g.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new re(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rh;let p=this.type;this.render=function(T,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const x=i.getRenderTarget(),v=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Gn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=p!==zn&&this.type===zn,z=p===zn&&this.type!==zn;for(let V=0,G=T.length;V<G;V++){const nt=T[V],W=nt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ct=W.getFrameExtents();if(s.multiply(ct),r.copy(W.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/ct.x),s.x=r.x*ct.x,W.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/ct.y),s.y=r.y*ct.y,W.mapSize.y=r.y)),W.map===null||F===!0||z===!0){const wt=this.type!==zn?{minFilter:en,magFilter:en}:{};W.map!==null&&W.map.dispose(),W.map=new Cn(s.x,s.y,wt),W.map.texture.name=nt.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const xt=W.getViewportCount();for(let wt=0;wt<xt;wt++){const Vt=W.getViewport(wt);o.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),O.viewport(o),W.updateMatrices(nt,wt),n=W.getFrustum(),y(C,L,W.camera,nt,this.type)}W.isPointLightShadow!==!0&&this.type===zn&&b(W,L),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(x,v,A)};function b(T,C){const L=t.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Cn(s.x,s.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,L,u,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,L,f,_,null)}function M(T,C,L,x){let v=null;const A=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)v=A;else if(v=L.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const O=v.uuid,F=C.uuid;let z=h[O];z===void 0&&(z={},h[O]=z);let V=z[F];V===void 0&&(V=v.clone(),z[F]=V,C.addEventListener("dispose",D)),v=V}if(v.visible=C.visible,v.wireframe=C.wireframe,x===zn?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:d[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const O=i.properties.get(v);O.light=L}return v}function y(T,C,L,x,v){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===zn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const F=t.update(T),z=T.material;if(Array.isArray(z)){const V=F.groups;for(let G=0,nt=V.length;G<nt;G++){const W=V[G],ct=z[W.materialIndex];if(ct&&ct.visible){const xt=M(T,ct,x,v);T.onBeforeShadow(i,T,C,L,F,xt,W),i.renderBufferDirect(L,null,F,xt,T,W),T.onAfterShadow(i,T,C,L,F,xt,W)}}}else if(z.visible){const V=M(T,z,x,v);T.onBeforeShadow(i,T,C,L,F,V,null),i.renderBufferDirect(L,null,F,V,T,null),T.onAfterShadow(i,T,C,L,F,V,null)}}const O=T.children;for(let F=0,z=O.length;F<z;F++)y(O[F],C,L,x,v)}function D(T){T.target.removeEventListener("dispose",D);for(const L in h){const x=h[L],v=T.target.uuid;v in x&&(x[v].dispose(),delete x[v])}}}const Bg={[pa]:ma,[ga]:va,[_a]:ya,[as]:xa,[ma]:pa,[va]:ga,[ya]:_a,[xa]:as};function kg(i,t){function e(){let I=!1;const dt=new ye;let X=null;const Z=new ye(0,0,0,0);return{setMask:function(_t){X!==_t&&!I&&(i.colorMask(_t,_t,_t,_t),X=_t)},setLocked:function(_t){I=_t},setClear:function(_t,pt,Wt,ve,Ie){Ie===!0&&(_t*=ve,pt*=ve,Wt*=ve),dt.set(_t,pt,Wt,ve),Z.equals(dt)===!1&&(i.clearColor(_t,pt,Wt,ve),Z.copy(dt))},reset:function(){I=!1,X=null,Z.set(-1,0,0,0)}}}function n(){let I=!1,dt=!1,X=null,Z=null,_t=null;return{setReversed:function(pt){if(dt!==pt){const Wt=t.get("EXT_clip_control");dt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);const ve=_t;_t=null,this.setClear(ve)}dt=pt},getReversed:function(){return dt},setTest:function(pt){pt?at(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(pt){X!==pt&&!I&&(i.depthMask(pt),X=pt)},setFunc:function(pt){if(dt&&(pt=Bg[pt]),Z!==pt){switch(pt){case pa:i.depthFunc(i.NEVER);break;case ma:i.depthFunc(i.ALWAYS);break;case ga:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case _a:i.depthFunc(i.EQUAL);break;case xa:i.depthFunc(i.GEQUAL);break;case va:i.depthFunc(i.GREATER);break;case ya:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=pt}},setLocked:function(pt){I=pt},setClear:function(pt){_t!==pt&&(dt&&(pt=1-pt),i.clearDepth(pt),_t=pt)},reset:function(){I=!1,X=null,Z=null,_t=null,dt=!1}}}function s(){let I=!1,dt=null,X=null,Z=null,_t=null,pt=null,Wt=null,ve=null,Ie=null;return{setTest:function(oe){I||(oe?at(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(oe){dt!==oe&&!I&&(i.stencilMask(oe),dt=oe)},setFunc:function(oe,fn,Ln){(X!==oe||Z!==fn||_t!==Ln)&&(i.stencilFunc(oe,fn,Ln),X=oe,Z=fn,_t=Ln)},setOp:function(oe,fn,Ln){(pt!==oe||Wt!==fn||ve!==Ln)&&(i.stencilOp(oe,fn,Ln),pt=oe,Wt=fn,ve=Ln)},setLocked:function(oe){I=oe},setClear:function(oe){Ie!==oe&&(i.clearStencil(oe),Ie=oe)},reset:function(){I=!1,dt=null,X=null,Z=null,_t=null,pt=null,Wt=null,ve=null,Ie=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,h=new WeakMap;let c={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,M=null,y=null,D=null,T=null,C=new zt(0,0,0),L=0,x=!1,v=null,A=null,O=null,F=null,z=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,nt=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=nt>=1):W.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=nt>=2);let ct=null,xt={};const wt=i.getParameter(i.SCISSOR_BOX),Vt=i.getParameter(i.VIEWPORT),ne=new ye().fromArray(wt),j=new ye().fromArray(Vt);function st(I,dt,X,Z){const _t=new Uint8Array(4),pt=i.createTexture();i.bindTexture(I,pt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<X;Wt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(dt+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return pt}const Tt={};Tt[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),Tt[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Tt[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(i.DEPTH_TEST),o.setFunc(as),tt(!1),St(Yl),at(i.CULL_FACE),P(Gn);function at(I){c[I]!==!0&&(i.enable(I),c[I]=!0)}function Ut(I){c[I]!==!1&&(i.disable(I),c[I]=!1)}function kt(I,dt){return d[I]!==dt?(i.bindFramebuffer(I,dt),d[I]=dt,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=dt),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function Ot(I,dt){let X=f,Z=!1;if(I){X=u.get(dt),X===void 0&&(X=[],u.set(dt,X));const _t=I.textures;if(X.length!==_t.length||X[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,Wt=_t.length;pt<Wt;pt++)X[pt]=i.COLOR_ATTACHMENT0+pt;X.length=_t.length,Z=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,Z=!0);Z&&i.drawBuffers(X)}function Qt(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const K={[di]:i.FUNC_ADD,[$u]:i.FUNC_SUBTRACT,[ju]:i.FUNC_REVERSE_SUBTRACT};K[Zu]=i.MIN,K[Ku]=i.MAX;const it={[Ju]:i.ZERO,[Qu]:i.ONE,[td]:i.SRC_COLOR,[da]:i.SRC_ALPHA,[od]:i.SRC_ALPHA_SATURATE,[sd]:i.DST_COLOR,[nd]:i.DST_ALPHA,[ed]:i.ONE_MINUS_SRC_COLOR,[fa]:i.ONE_MINUS_SRC_ALPHA,[rd]:i.ONE_MINUS_DST_COLOR,[id]:i.ONE_MINUS_DST_ALPHA,[ad]:i.CONSTANT_COLOR,[ld]:i.ONE_MINUS_CONSTANT_COLOR,[cd]:i.CONSTANT_ALPHA,[hd]:i.ONE_MINUS_CONSTANT_ALPHA};function P(I,dt,X,Z,_t,pt,Wt,ve,Ie,oe){if(I===Gn){_===!0&&(Ut(i.BLEND),_=!1);return}if(_===!1&&(at(i.BLEND),_=!0),I!==qu){if(I!==m||oe!==x){if((p!==di||y!==di)&&(i.blendEquation(i.FUNC_ADD),p=di,y=di),oe)switch(I){case ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ql:i.blendFunc(i.ONE,i.ONE);break;case $l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ql:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,M=null,D=null,T=null,C.set(0,0,0),L=0,m=I,x=oe}return}_t=_t||dt,pt=pt||X,Wt=Wt||Z,(dt!==p||_t!==y)&&(i.blendEquationSeparate(K[dt],K[_t]),p=dt,y=_t),(X!==b||Z!==M||pt!==D||Wt!==T)&&(i.blendFuncSeparate(it[X],it[Z],it[pt],it[Wt]),b=X,M=Z,D=pt,T=Wt),(ve.equals(C)===!1||Ie!==L)&&(i.blendColor(ve.r,ve.g,ve.b,Ie),C.copy(ve),L=Ie),m=I,x=!1}function Lt(I,dt){I.side===vn?Ut(i.CULL_FACE):at(i.CULL_FACE);let X=I.side===qe;dt&&(X=!X),tt(X),I.blending===ns&&I.transparent===!1?P(Gn):P(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const Z=I.stencilWrite;a.setTest(Z),Z&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Nt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(I){v!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),v=I)}function St(I){I!==Xu?(at(i.CULL_FACE),I!==A&&(I===Yl?i.cullFace(i.BACK):I===Yu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),A=I}function lt(I){I!==O&&(G&&i.lineWidth(I),O=I)}function Nt(I,dt,X){I?(at(i.POLYGON_OFFSET_FILL),(F!==dt||z!==X)&&(i.polygonOffset(dt,X),F=dt,z=X)):Ut(i.POLYGON_OFFSET_FILL)}function yt(I){I?at(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function w(I){I===void 0&&(I=i.TEXTURE0+V-1),ct!==I&&(i.activeTexture(I),ct=I)}function S(I,dt,X){X===void 0&&(ct===null?X=i.TEXTURE0+V-1:X=ct);let Z=xt[X];Z===void 0&&(Z={type:void 0,texture:void 0},xt[X]=Z),(Z.type!==I||Z.texture!==dt)&&(ct!==X&&(i.activeTexture(X),ct=X),i.bindTexture(I,dt||Tt[I]),Z.type=I,Z.texture=dt)}function B(){const I=xt[ct];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function jt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ft(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Bt(I){ne.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ne.copy(I))}function Et(I){j.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),j.copy(I))}function Kt(I,dt){let X=h.get(dt);X===void 0&&(X=new WeakMap,h.set(dt,X));let Z=X.get(I);Z===void 0&&(Z=i.getUniformBlockIndex(dt,I.name),X.set(I,Z))}function qt(I,dt){const Z=h.get(dt).get(I);l.get(dt)!==Z&&(i.uniformBlockBinding(dt,Z,I.__bindingPointIndex),l.set(dt,Z))}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},ct=null,xt={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,M=null,y=null,D=null,T=null,C=new zt(0,0,0),L=0,x=!1,v=null,A=null,O=null,F=null,z=null,ne.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:Ut,bindFramebuffer:kt,drawBuffers:Ot,useProgram:Qt,setBlending:P,setMaterial:Lt,setFlipSided:tt,setCullFace:St,setLineWidth:lt,setPolygonOffset:Nt,setScissorTest:yt,activeTexture:w,bindTexture:S,unbindTexture:B,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:bt,texImage3D:Ft,updateUBOMapping:Kt,uniformBlockBinding:qt,texStorage2D:jt,texStorage3D:et,texSubImage2D:$,texSubImage3D:At,compressedTexSubImage2D:ut,compressedTexSubImage3D:Mt,scissor:Bt,viewport:Et,reset:pe}}function Wc(i,t,e,n){const s=Gg(n);switch(e){case Gh:return i*t;case Vh:return i*t;case Wh:return i*t*2;case vo:return i*t/s.components*s.byteLength;case ul:return i*t/s.components*s.byteLength;case Xh:return i*t*2/s.components*s.byteLength;case dl:return i*t*2/s.components*s.byteLength;case Hh:return i*t*3/s.components*s.byteLength;case Mn:return i*t*4/s.components*s.byteLength;case fl:return i*t*4/s.components*s.byteLength;case $r:case jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zr:case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ta:case Ca:return Math.max(i,16)*Math.max(t,8)/4;case wa:case Aa:return Math.max(i,8)*Math.max(t,8)/2;case Ra:case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Jr:case Ya:case qa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Yh:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ja:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gg(i){switch(i){case An:case zh:return{byteLength:1,components:1};case qs:case Bh:case bi:return{byteLength:2,components:1};case cl:case hl:return{byteLength:2,components:4};case xi:case ll:case wn:return{byteLength:4,components:1};case kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Hg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new J,c=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,S){return f?new OffscreenCanvas(w,S):ro("canvas")}function _(w,S,B){let Y=1;const Q=yt(w);if((Q.width>B||Q.height>B)&&(Y=B/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const $=Math.floor(Y*Q.width),At=Math.floor(Y*Q.height);d===void 0&&(d=g($,At));const ut=S?g($,At):d;return ut.width=$,ut.height=At,ut.getContext("2d").drawImage(w,0,0,$,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+At+")."),ut}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(w,S,B,Y,Q=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=S;if(S===i.RED&&(B===i.FLOAT&&($=i.R32F),B===i.HALF_FLOAT&&($=i.R16F),B===i.UNSIGNED_BYTE&&($=i.R8)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.R8UI),B===i.UNSIGNED_SHORT&&($=i.R16UI),B===i.UNSIGNED_INT&&($=i.R32UI),B===i.BYTE&&($=i.R8I),B===i.SHORT&&($=i.R16I),B===i.INT&&($=i.R32I)),S===i.RG&&(B===i.FLOAT&&($=i.RG32F),B===i.HALF_FLOAT&&($=i.RG16F),B===i.UNSIGNED_BYTE&&($=i.RG8)),S===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RG8UI),B===i.UNSIGNED_SHORT&&($=i.RG16UI),B===i.UNSIGNED_INT&&($=i.RG32UI),B===i.BYTE&&($=i.RG8I),B===i.SHORT&&($=i.RG16I),B===i.INT&&($=i.RG32I)),S===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGB8UI),B===i.UNSIGNED_SHORT&&($=i.RGB16UI),B===i.UNSIGNED_INT&&($=i.RGB32UI),B===i.BYTE&&($=i.RGB8I),B===i.SHORT&&($=i.RGB16I),B===i.INT&&($=i.RGB32I)),S===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGBA8UI),B===i.UNSIGNED_SHORT&&($=i.RGBA16UI),B===i.UNSIGNED_INT&&($=i.RGBA32UI),B===i.BYTE&&($=i.RGBA8I),B===i.SHORT&&($=i.RGBA16I),B===i.INT&&($=i.RGBA32I)),S===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),S===i.RGBA){const At=Q?yo:Jt.getTransfer(Y);B===i.FLOAT&&($=i.RGBA32F),B===i.HALF_FLOAT&&($=i.RGBA16F),B===i.UNSIGNED_BYTE&&($=At===ae?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function y(w,S){let B;return w?S===null||S===xi||S===hs?B=i.DEPTH24_STENCIL8:S===wn?B=i.DEPTH32F_STENCIL8:S===qs&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===xi||S===hs?B=i.DEPTH_COMPONENT24:S===wn?B=i.DEPTH_COMPONENT32F:S===qs&&(B=i.DEPTH_COMPONENT16),B}function D(w,S){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==en&&w.minFilter!==hn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function T(w){const S=w.target;S.removeEventListener("dispose",T),L(S),S.isVideoTexture&&c.delete(S)}function C(w){const S=w.target;S.removeEventListener("dispose",C),v(S)}function L(w){const S=n.get(w);if(S.__webglInit===void 0)return;const B=w.source,Y=u.get(B);if(Y){const Q=Y[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&x(w),Object.keys(Y).length===0&&u.delete(B)}n.remove(w)}function x(w){const S=n.get(w);i.deleteTexture(S.__webglTexture);const B=w.source,Y=u.get(B);delete Y[S.__cacheKey],o.memory.textures--}function v(w){const S=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let Q=0;Q<S.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(S.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)i.deleteFramebuffer(S.__webglFramebuffer[Y]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=w.textures;for(let Y=0,Q=B.length;Y<Q;Y++){const $=n.get(B[Y]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(B[Y])}n.remove(w)}let A=0;function O(){A=0}function F(){const w=A;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),A+=1,w}function z(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function V(w,S){const B=n.get(w);if(w.isVideoTexture&&lt(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const Y=w.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(B,w,S);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function G(w,S){const B=n.get(w);if(w.version>0&&B.__version!==w.version){j(B,w,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function nt(w,S){const B=n.get(w);if(w.version>0&&B.__version!==w.version){j(B,w,S);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function W(w,S){const B=n.get(w);if(w.version>0&&B.__version!==w.version){st(B,w,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}const ct={[ba]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[Ea]:i.MIRRORED_REPEAT},xt={[en]:i.NEAREST,[pd]:i.NEAREST_MIPMAP_NEAREST,[rr]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[Po]:i.LINEAR_MIPMAP_NEAREST,[gi]:i.LINEAR_MIPMAP_LINEAR},wt={[xd]:i.NEVER,[Ed]:i.ALWAYS,[vd]:i.LESS,[$h]:i.LEQUAL,[yd]:i.EQUAL,[bd]:i.GEQUAL,[Md]:i.GREATER,[Sd]:i.NOTEQUAL};function Vt(w,S){if(S.type===wn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===hn||S.magFilter===Po||S.magFilter===rr||S.magFilter===gi||S.minFilter===hn||S.minFilter===Po||S.minFilter===rr||S.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ct[S.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ct[S.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ct[S.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,xt[S.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,xt[S.minFilter]),S.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,wt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===en||S.minFilter!==rr&&S.minFilter!==gi||S.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ne(w,S){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",T));const Y=S.source;let Q=u.get(Y);Q===void 0&&(Q={},u.set(Y,Q));const $=z(S);if($!==w.__cacheKey){Q[$]===void 0&&(Q[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[$].usedTimes++;const At=Q[w.__cacheKey];At!==void 0&&(Q[w.__cacheKey].usedTimes--,At.usedTimes===0&&x(S)),w.__cacheKey=$,w.__webglTexture=Q[$].texture}return B}function j(w,S,B){let Y=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=i.TEXTURE_3D);const Q=ne(w,S),$=S.source;e.bindTexture(Y,w.__webglTexture,i.TEXTURE0+B);const At=n.get($);if($.version!==At.__version||Q===!0){e.activeTexture(i.TEXTURE0+B);const ut=Jt.getPrimaries(Jt.workingColorSpace),Mt=S.colorSpace===Jn?null:Jt.getPrimaries(S.colorSpace),jt=S.colorSpace===Jn||ut===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let et=_(S.image,!1,s.maxTextureSize);et=Nt(S,et);const bt=r.convert(S.format,S.colorSpace),Ft=r.convert(S.type);let Bt=M(S.internalFormat,bt,Ft,S.colorSpace,S.isVideoTexture);Vt(Y,S);let Et;const Kt=S.mipmaps,qt=S.isVideoTexture!==!0,pe=At.__version===void 0||Q===!0,I=$.dataReady,dt=D(S,et);if(S.isDepthTexture)Bt=y(S.format===us,S.type),pe&&(qt?e.texStorage2D(i.TEXTURE_2D,1,Bt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Bt,et.width,et.height,0,bt,Ft,null));else if(S.isDataTexture)if(Kt.length>0){qt&&pe&&e.texStorage2D(i.TEXTURE_2D,dt,Bt,Kt[0].width,Kt[0].height);for(let X=0,Z=Kt.length;X<Z;X++)Et=Kt[X],qt?I&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Et.width,Et.height,bt,Ft,Et.data):e.texImage2D(i.TEXTURE_2D,X,Bt,Et.width,Et.height,0,bt,Ft,Et.data);S.generateMipmaps=!1}else qt?(pe&&e.texStorage2D(i.TEXTURE_2D,dt,Bt,et.width,et.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,bt,Ft,et.data)):e.texImage2D(i.TEXTURE_2D,0,Bt,et.width,et.height,0,bt,Ft,et.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qt&&pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Bt,Kt[0].width,Kt[0].height,et.depth);for(let X=0,Z=Kt.length;X<Z;X++)if(Et=Kt[X],S.format!==Mn)if(bt!==null)if(qt){if(I)if(S.layerUpdates.size>0){const _t=Wc(Et.width,Et.height,S.format,S.type);for(const pt of S.layerUpdates){const Wt=Et.data.subarray(pt*_t/Et.data.BYTES_PER_ELEMENT,(pt+1)*_t/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,pt,Et.width,Et.height,1,bt,Wt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Et.width,Et.height,et.depth,bt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Bt,Et.width,Et.height,et.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Et.width,Et.height,et.depth,bt,Ft,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Bt,Et.width,Et.height,et.depth,0,bt,Ft,Et.data)}else{qt&&pe&&e.texStorage2D(i.TEXTURE_2D,dt,Bt,Kt[0].width,Kt[0].height);for(let X=0,Z=Kt.length;X<Z;X++)Et=Kt[X],S.format!==Mn?bt!==null?qt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,Et.width,Et.height,bt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Bt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?I&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Et.width,Et.height,bt,Ft,Et.data):e.texImage2D(i.TEXTURE_2D,X,Bt,Et.width,Et.height,0,bt,Ft,Et.data)}else if(S.isDataArrayTexture)if(qt){if(pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Bt,et.width,et.height,et.depth),I)if(S.layerUpdates.size>0){const X=Wc(et.width,et.height,S.format,S.type);for(const Z of S.layerUpdates){const _t=et.data.subarray(Z*X/et.data.BYTES_PER_ELEMENT,(Z+1)*X/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,et.width,et.height,1,bt,Ft,_t)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,bt,Ft,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,et.width,et.height,et.depth,0,bt,Ft,et.data);else if(S.isData3DTexture)qt?(pe&&e.texStorage3D(i.TEXTURE_3D,dt,Bt,et.width,et.height,et.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,bt,Ft,et.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,et.width,et.height,et.depth,0,bt,Ft,et.data);else if(S.isFramebufferTexture){if(pe)if(qt)e.texStorage2D(i.TEXTURE_2D,dt,Bt,et.width,et.height);else{let X=et.width,Z=et.height;for(let _t=0;_t<dt;_t++)e.texImage2D(i.TEXTURE_2D,_t,Bt,X,Z,0,bt,Ft,null),X>>=1,Z>>=1}}else if(Kt.length>0){if(qt&&pe){const X=yt(Kt[0]);e.texStorage2D(i.TEXTURE_2D,dt,Bt,X.width,X.height)}for(let X=0,Z=Kt.length;X<Z;X++)Et=Kt[X],qt?I&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,bt,Ft,Et):e.texImage2D(i.TEXTURE_2D,X,Bt,bt,Ft,Et);S.generateMipmaps=!1}else if(qt){if(pe){const X=yt(et);e.texStorage2D(i.TEXTURE_2D,dt,Bt,X.width,X.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Ft,et)}else e.texImage2D(i.TEXTURE_2D,0,Bt,bt,Ft,et);m(S)&&p(Y),At.__version=$.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function st(w,S,B){if(S.image.length!==6)return;const Y=ne(w,S),Q=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);const $=n.get(Q);if(Q.version!==$.__version||Y===!0){e.activeTexture(i.TEXTURE0+B);const At=Jt.getPrimaries(Jt.workingColorSpace),ut=S.colorSpace===Jn?null:Jt.getPrimaries(S.colorSpace),Mt=S.colorSpace===Jn||At===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const jt=S.isCompressedTexture||S.image[0].isCompressedTexture,et=S.image[0]&&S.image[0].isDataTexture,bt=[];for(let Z=0;Z<6;Z++)!jt&&!et?bt[Z]=_(S.image[Z],!0,s.maxCubemapSize):bt[Z]=et?S.image[Z].image:S.image[Z],bt[Z]=Nt(S,bt[Z]);const Ft=bt[0],Bt=r.convert(S.format,S.colorSpace),Et=r.convert(S.type),Kt=M(S.internalFormat,Bt,Et,S.colorSpace),qt=S.isVideoTexture!==!0,pe=$.__version===void 0||Y===!0,I=Q.dataReady;let dt=D(S,Ft);Vt(i.TEXTURE_CUBE_MAP,S);let X;if(jt){qt&&pe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Kt,Ft.width,Ft.height);for(let Z=0;Z<6;Z++){X=bt[Z].mipmaps;for(let _t=0;_t<X.length;_t++){const pt=X[_t];S.format!==Mn?Bt!==null?qt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_t,0,0,pt.width,pt.height,Bt,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_t,Kt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_t,0,0,pt.width,pt.height,Bt,Et,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_t,Kt,pt.width,pt.height,0,Bt,Et,pt.data)}}}else{if(X=S.mipmaps,qt&&pe){X.length>0&&dt++;const Z=yt(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Kt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(et){qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,bt[Z].width,bt[Z].height,Bt,Et,bt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Kt,bt[Z].width,bt[Z].height,0,Bt,Et,bt[Z].data);for(let _t=0;_t<X.length;_t++){const Wt=X[_t].image[Z].image;qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_t+1,0,0,Wt.width,Wt.height,Bt,Et,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_t+1,Kt,Wt.width,Wt.height,0,Bt,Et,Wt.data)}}else{qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Bt,Et,bt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Kt,Bt,Et,bt[Z]);for(let _t=0;_t<X.length;_t++){const pt=X[_t];qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_t+1,0,0,Bt,Et,pt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_t+1,Kt,Bt,Et,pt.image[Z])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),$.__version=Q.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Tt(w,S,B,Y,Q,$){const At=r.convert(B.format,B.colorSpace),ut=r.convert(B.type),Mt=M(B.internalFormat,At,ut,B.colorSpace),jt=n.get(S),et=n.get(B);if(et.__renderTarget=S,!jt.__hasExternalTextures){const bt=Math.max(1,S.width>>$),Ft=Math.max(1,S.height>>$);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,$,Mt,bt,Ft,S.depth,0,At,ut,null):e.texImage2D(Q,$,Mt,bt,Ft,0,At,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),St(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,et.__webglTexture,0,tt(S)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,et.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(w,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),S.depthBuffer){const Y=S.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,$=y(S.stencilBuffer,Q),At=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=tt(S);St(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,$,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,$,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,$,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,w)}else{const Y=S.textures;for(let Q=0;Q<Y.length;Q++){const $=Y[Q],At=r.convert($.format,$.colorSpace),ut=r.convert($.type),Mt=M($.internalFormat,At,ut,$.colorSpace),jt=tt(S);B&&St(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,Mt,S.width,S.height):St(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt,Mt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(S.depthTexture);Y.__renderTarget=S,(!Y.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);const Q=Y.__webglTexture,$=tt(S);if(S.depthTexture.format===is)St(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(S.depthTexture.format===us)St(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function kt(w){const S=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const Y=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=Y}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ut(S.__webglFramebuffer,w)}else if(B){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=i.createRenderbuffer(),at(S.__webglDepthbuffer[Y],w,!1);else{const Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),at(S.__webglDepthbuffer,w,!1);else{const Y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(w,S,B){const Y=n.get(w);S!==void 0&&Tt(Y.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&kt(w)}function Qt(w){const S=w.texture,B=n.get(w),Y=n.get(S);w.addEventListener("dispose",C);const Q=w.textures,$=w.isWebGLCubeRenderTarget===!0,At=Q.length>1;if(At||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=S.version,o.memory.textures++),$){B.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ut]=[];for(let Mt=0;Mt<S.mipmaps.length;Mt++)B.__webglFramebuffer[ut][Mt]=i.createFramebuffer()}else B.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ut=0;ut<S.mipmaps.length;ut++)B.__webglFramebuffer[ut]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(At)for(let ut=0,Mt=Q.length;ut<Mt;ut++){const jt=n.get(Q[ut]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&St(w)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ut=0;ut<Q.length;ut++){const Mt=Q[ut];B.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ut]);const jt=r.convert(Mt.format,Mt.colorSpace),et=r.convert(Mt.type),bt=M(Mt.internalFormat,jt,et,Mt.colorSpace,w.isXRRenderTarget===!0),Ft=tt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,bt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,B.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),at(B.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Vt(i.TEXTURE_CUBE_MAP,S);for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)Tt(B.__webglFramebuffer[ut][Mt],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Mt);else Tt(B.__webglFramebuffer[ut],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ut=0,Mt=Q.length;ut<Mt;ut++){const jt=Q[ut],et=n.get(jt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),Vt(i.TEXTURE_2D,jt),Tt(B.__webglFramebuffer,w,jt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(jt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ut=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,Y.__webglTexture),Vt(ut,S),S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)Tt(B.__webglFramebuffer[Mt],w,S,i.COLOR_ATTACHMENT0,ut,Mt);else Tt(B.__webglFramebuffer,w,S,i.COLOR_ATTACHMENT0,ut,0);m(S)&&p(ut),e.unbindTexture()}w.depthBuffer&&kt(w)}function K(w){const S=w.textures;for(let B=0,Y=S.length;B<Y;B++){const Q=S[B];if(m(Q)){const $=b(w),At=n.get(Q).__webglTexture;e.bindTexture($,At),p($),e.unbindTexture()}}}const it=[],P=[];function Lt(w){if(w.samples>0){if(St(w)===!1){const S=w.textures,B=w.width,Y=w.height;let Q=i.COLOR_BUFFER_BIT;const $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(w),ut=S.length>1;if(ut)for(let Mt=0;Mt<S.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Mt=0;Mt<S.length;Mt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Mt]);const jt=n.get(S[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,B,Y,0,0,B,Y,Q,i.NEAREST),l===!0&&(it.length=0,P.length=0,it.push(i.COLOR_ATTACHMENT0+Mt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(it.push($),P.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let Mt=0;Mt<S.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,At.__webglColorRenderbuffer[Mt]);const jt=n.get(S[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function tt(w){return Math.min(s.maxSamples,w.samples)}function St(w){const S=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function lt(w){const S=o.render.frame;c.get(w)!==S&&(c.set(w,S),w.update())}function Nt(w,S){const B=w.colorSpace,Y=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==ms&&B!==Jn&&(Jt.getTransfer(B)===ae?(Y!==Mn||Q!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function yt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=V,this.setTexture2DArray=G,this.setTexture3D=nt,this.setTextureCube=W,this.rebindTextures=Ot,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=St}function Vg(i,t){function e(n,s=Jn){let r;const o=Jt.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===cl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zh)return i.BYTE;if(n===Bh)return i.SHORT;if(n===qs)return i.UNSIGNED_SHORT;if(n===ll)return i.INT;if(n===xi)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===bi)return i.HALF_FLOAT;if(n===Gh)return i.ALPHA;if(n===Hh)return i.RGB;if(n===Mn)return i.RGBA;if(n===Vh)return i.LUMINANCE;if(n===Wh)return i.LUMINANCE_ALPHA;if(n===is)return i.DEPTH_COMPONENT;if(n===us)return i.DEPTH_STENCIL;if(n===vo)return i.RED;if(n===ul)return i.RED_INTEGER;if(n===Xh)return i.RG;if(n===dl)return i.RG_INTEGER;if(n===fl)return i.RGBA_INTEGER;if(n===$r||n===jr||n===Zr||n===Kr)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wa||n===Ta||n===Aa||n===Ca)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ra||n===Pa||n===La)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ra||n===Pa)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===La)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Da||n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===za||n===Ba||n===ka||n===Ga||n===Ha||n===Va||n===Wa||n===Xa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Da)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ia)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ua)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Na)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===za)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ba)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ka)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ga)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ha)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Va)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jr||n===Ya||n===qa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Jr)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yh||n===$a||n===ja||n===Za)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Wg extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ve extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xg={type:"move"};class ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(h,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=c.position.distanceTo(d.position),f=.02,g=.005;h.inputState.pinching&&u>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&u<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Yg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qg=`
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

}`;class $g{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Oe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new dn({vertexShader:Yg,fragmentShader:qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jg extends Ei{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,h=null,c=null,d=null,u=null,f=null,g=null;const _=new $g,m=e.getContextAttributes();let p=null,b=null;const M=[],y=[],D=new J;let T=null;const C=new Qe;C.viewport=new ye;const L=new Qe;L.viewport=new ye;const x=[C,L],v=new Wg;let A=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let st=M[j];return st===void 0&&(st=new ia,M[j]=st),st.getTargetRaySpace()},this.getControllerGrip=function(j){let st=M[j];return st===void 0&&(st=new ia,M[j]=st),st.getGripSpace()},this.getHand=function(j){let st=M[j];return st===void 0&&(st=new ia,M[j]=st),st.getHandSpace()};function F(j){const st=y.indexOf(j.inputSource);if(st===-1)return;const Tt=M[st];Tt!==void 0&&(Tt.update(j.inputSource,j.frame,h||o),Tt.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",V);for(let j=0;j<M.length;j++){const st=y[j];st!==null&&(y[j]=null,M[j].disconnect(st))}A=null,O=null,_.reset(),t.setRenderTarget(p),f=null,u=null,d=null,s=null,b=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(j){h=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",z),s.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Cn(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:An,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,Tt=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?us:is,Tt=m.stencil?hs:xi);const Ut={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Ut),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new Cn(u.textureWidth,u.textureHeight,{format:Mn,type:An,depthTexture:new ru(u.textureWidth,u.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(j){for(let st=0;st<j.removed.length;st++){const Tt=j.removed[st],at=y.indexOf(Tt);at>=0&&(y[at]=null,M[at].disconnect(Tt))}for(let st=0;st<j.added.length;st++){const Tt=j.added[st];let at=y.indexOf(Tt);if(at===-1){for(let kt=0;kt<M.length;kt++)if(kt>=y.length){y.push(Tt),at=kt;break}else if(y[kt]===null){y[kt]=Tt,at=kt;break}if(at===-1)break}const Ut=M[at];Ut&&Ut.connect(Tt)}}const G=new R,nt=new R;function W(j,st,Tt){G.setFromMatrixPosition(st.matrixWorld),nt.setFromMatrixPosition(Tt.matrixWorld);const at=G.distanceTo(nt),Ut=st.projectionMatrix.elements,kt=Tt.projectionMatrix.elements,Ot=Ut[14]/(Ut[10]-1),Qt=Ut[14]/(Ut[10]+1),K=(Ut[9]+1)/Ut[5],it=(Ut[9]-1)/Ut[5],P=(Ut[8]-1)/Ut[0],Lt=(kt[8]+1)/kt[0],tt=Ot*P,St=Ot*Lt,lt=at/(-P+Lt),Nt=lt*-P;if(st.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Nt),j.translateZ(lt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ut[10]===-1)j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const yt=Ot+lt,w=Qt+lt,S=tt-Nt,B=St+(at-Nt),Y=K*Qt/w*yt,Q=it*Qt/w*yt;j.projectionMatrix.makePerspective(S,B,Y,Q,yt,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ct(j,st){st===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(st.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let st=j.near,Tt=j.far;_.texture!==null&&(_.depthNear>0&&(st=_.depthNear),_.depthFar>0&&(Tt=_.depthFar)),v.near=L.near=C.near=st,v.far=L.far=C.far=Tt,(A!==v.near||O!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),A=v.near,O=v.far),C.layers.mask=j.layers.mask|2,L.layers.mask=j.layers.mask|4,v.layers.mask=C.layers.mask|L.layers.mask;const at=j.parent,Ut=v.cameras;ct(v,at);for(let kt=0;kt<Ut.length;kt++)ct(Ut[kt],at);Ut.length===2?W(v,C,L):v.projectionMatrix.copy(C.projectionMatrix),xt(j,v,at)};function xt(j,st,Tt){Tt===null?j.matrix.copy(st.matrixWorld):(j.matrix.copy(Tt.matrixWorld),j.matrix.invert(),j.matrix.multiply(st.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=$s*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let wt=null;function Vt(j,st){if(c=st.getViewerPose(h||o),g=st,c!==null){const Tt=c.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let at=!1;Tt.length!==v.cameras.length&&(v.cameras.length=0,at=!0);for(let kt=0;kt<Tt.length;kt++){const Ot=Tt[kt];let Qt=null;if(f!==null)Qt=f.getViewport(Ot);else{const it=d.getViewSubImage(u,Ot);Qt=it.viewport,kt===0&&(t.setRenderTargetTextures(b,it.colorTexture,u.ignoreDepthValues?void 0:it.depthStencilTexture),t.setRenderTarget(b))}let K=x[kt];K===void 0&&(K=new Qe,K.layers.enable(kt),K.viewport=new ye,x[kt]=K),K.matrix.fromArray(Ot.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Ot.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),kt===0&&(v.matrix.copy(K.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),at===!0&&v.cameras.push(K)}const Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){const kt=d.getDepthInformation(Tt[0]);kt&&kt.isValid&&kt.texture&&_.init(t,kt,s.renderState)}}for(let Tt=0;Tt<M.length;Tt++){const at=y[Tt],Ut=M[Tt];at!==null&&Ut!==void 0&&Ut.update(at,st,h||o)}wt&&wt(j,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}const ne=new su;ne.setAnimationLoop(Vt),this.setAnimationLoop=function(j){wt=j},this.dispose=function(){}}}const ci=new rn,Zg=new Zt;function Kg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,eu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,M):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),M=b.envMap,y=b.envMapRotation;M&&(m.envMap.value=M,ci.copy(y),ci.x*=-1,ci.y*=-1,ci.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),m.envMapRotation.value.setFromMatrix4(Zg.makeRotationFromEuler(ci)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Jg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const y=M.program;n.uniformBlockBinding(b,y)}function h(b,M){let y=s[b.id];y===void 0&&(g(b),y=c(b),s[b.id]=y,b.addEventListener("dispose",m));const D=M.program;n.updateUBOMapping(b,D);const T=t.render.frame;r[b.id]!==T&&(u(b),r[b.id]=T)}function c(b){const M=d();b.__bindingPointIndex=M;const y=i.createBuffer(),D=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,D,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,y),y}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const M=s[b.id],y=b.uniforms,D=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,C=y.length;T<C;T++){const L=Array.isArray(y[T])?y[T]:[y[T]];for(let x=0,v=L.length;x<v;x++){const A=L[x];if(f(A,T,x,D)===!0){const O=A.__offset,F=Array.isArray(A.value)?A.value:[A.value];let z=0;for(let V=0;V<F.length;V++){const G=F[V],nt=_(G);typeof G=="number"||typeof G=="boolean"?(A.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,O+z,A.__data)):G.isMatrix3?(A.__data[0]=G.elements[0],A.__data[1]=G.elements[1],A.__data[2]=G.elements[2],A.__data[3]=0,A.__data[4]=G.elements[3],A.__data[5]=G.elements[4],A.__data[6]=G.elements[5],A.__data[7]=0,A.__data[8]=G.elements[6],A.__data[9]=G.elements[7],A.__data[10]=G.elements[8],A.__data[11]=0):(G.toArray(A.__data,z),z+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,M,y,D){const T=b.value,C=M+"_"+y;if(D[C]===void 0)return typeof T=="number"||typeof T=="boolean"?D[C]=T:D[C]=T.clone(),!0;{const L=D[C];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return D[C]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(b){const M=b.uniforms;let y=0;const D=16;for(let C=0,L=M.length;C<L;C++){const x=Array.isArray(M[C])?M[C]:[M[C]];for(let v=0,A=x.length;v<A;v++){const O=x[v],F=Array.isArray(O.value)?O.value:[O.value];for(let z=0,V=F.length;z<V;z++){const G=F[z],nt=_(G),W=y%D,ct=W%nt.boundary,xt=W+ct;y+=ct,xt!==0&&D-xt<nt.storage&&(y+=D-xt),O.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=nt.storage}}}const T=y%D;return T>0&&(y+=D-T),b.__size=y,b.__cache={},this}function _(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){const M=b.target;M.removeEventListener("dispose",m);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:h,dispose:p}}class Qg{constructor(t={}){const{canvas:e=Gd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this.toneMapping=ti,this.toneMappingExposure=1;const y=this;let D=!1,T=0,C=0,L=null,x=-1,v=null;const A=new ye,O=new ye;let F=null;const z=new zt(0);let V=0,G=e.width,nt=e.height,W=1,ct=null,xt=null;const wt=new ye(0,0,G,nt),Vt=new ye(0,0,G,nt);let ne=!1;const j=new _l;let st=!1,Tt=!1;const at=new Zt,Ut=new Zt,kt=new R,Ot=new ye,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let K=!1;function it(){return L===null?W:1}let P=n;function Lt(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ol}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",pt,!1),P===null){const U="webgl2";if(P=Lt(U,E),P===null)throw Lt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let tt,St,lt,Nt,yt,w,S,B,Y,Q,$,At,ut,Mt,jt,et,bt,Ft,Bt,Et,Kt,qt,pe,I;function dt(){tt=new s0(P),tt.init(),qt=new Vg(P,tt),St=new Jm(P,tt,t,qt),lt=new kg(P,tt),St.reverseDepthBuffer&&u&&lt.buffers.depth.setReversed(!0),Nt=new a0(P),yt=new wg,w=new Hg(P,tt,lt,yt,St,qt,Nt),S=new t0(y),B=new i0(y),Y=new pf(P),pe=new Zm(P,Y),Q=new r0(P,Y,Nt,pe),$=new c0(P,Q,Y,Nt),Bt=new l0(P,St,w),et=new Qm(yt),At=new Eg(y,S,B,tt,St,pe,et),ut=new Kg(y,yt),Mt=new Ag,jt=new Ig(tt),Ft=new jm(y,S,B,lt,$,f,l),bt=new zg(y,$,St),I=new Jg(P,Nt,St,lt),Et=new Km(P,tt,Nt),Kt=new o0(P,tt,Nt),Nt.programs=At.programs,y.capabilities=St,y.extensions=tt,y.properties=yt,y.renderLists=Mt,y.shadowMap=bt,y.state=lt,y.info=Nt}dt();const X=new jg(y,P);this.xr=X,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=tt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=tt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(G,nt,!1))},this.getSize=function(E){return E.set(G,nt)},this.setSize=function(E,U,k=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,nt=U,e.width=Math.floor(E*W),e.height=Math.floor(U*W),k===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(G*W,nt*W).floor()},this.setDrawingBufferSize=function(E,U,k){G=E,nt=U,W=k,e.width=Math.floor(E*k),e.height=Math.floor(U*k),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(wt)},this.setViewport=function(E,U,k,H){E.isVector4?wt.set(E.x,E.y,E.z,E.w):wt.set(E,U,k,H),lt.viewport(A.copy(wt).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(Vt)},this.setScissor=function(E,U,k,H){E.isVector4?Vt.set(E.x,E.y,E.z,E.w):Vt.set(E,U,k,H),lt.scissor(O.copy(Vt).multiplyScalar(W).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(E){lt.setScissorTest(ne=E)},this.setOpaqueSort=function(E){ct=E},this.setTransparentSort=function(E){xt=E},this.getClearColor=function(E){return E.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(E=!0,U=!0,k=!0){let H=0;if(E){let N=!1;if(L!==null){const rt=L.texture.format;N=rt===fl||rt===dl||rt===ul}if(N){const rt=L.texture.type,mt=rt===An||rt===xi||rt===qs||rt===hs||rt===cl||rt===hl,Ct=Ft.getClearColor(),Rt=Ft.getClearAlpha(),Gt=Ct.r,Xt=Ct.g,Pt=Ct.b;mt?(g[0]=Gt,g[1]=Xt,g[2]=Pt,g[3]=Rt,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Gt,_[1]=Xt,_[2]=Pt,_[3]=Rt,P.clearBufferiv(P.COLOR,0,_))}else H|=P.COLOR_BUFFER_BIT}U&&(H|=P.DEPTH_BUFFER_BIT),k&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Mt.dispose(),jt.dispose(),yt.dispose(),S.dispose(),B.dispose(),$.dispose(),pe.dispose(),I.dispose(),At.dispose(),X.dispose(),X.removeEventListener("sessionstart",zl),X.removeEventListener("sessionend",Bl),ii.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const E=Nt.autoReset,U=bt.enabled,k=bt.autoUpdate,H=bt.needsUpdate,N=bt.type;dt(),Nt.autoReset=E,bt.enabled=U,bt.autoUpdate=k,bt.needsUpdate=H,bt.type=N}function pt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Wt(E){const U=E.target;U.removeEventListener("dispose",Wt),ve(U)}function ve(E){Ie(E),yt.remove(E)}function Ie(E){const U=yt.get(E).programs;U!==void 0&&(U.forEach(function(k){At.releaseProgram(k)}),E.isShaderMaterial&&At.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,k,H,N,rt){U===null&&(U=Qt);const mt=N.isMesh&&N.matrixWorld.determinant()<0,Ct=Hu(E,U,k,H,N);lt.setMaterial(H,mt);let Rt=k.index,Gt=1;if(H.wireframe===!0){if(Rt=Q.getWireframeAttribute(k),Rt===void 0)return;Gt=2}const Xt=k.drawRange,Pt=k.attributes.position;let ee=Xt.start*Gt,me=(Xt.start+Xt.count)*Gt;rt!==null&&(ee=Math.max(ee,rt.start*Gt),me=Math.min(me,(rt.start+rt.count)*Gt)),Rt!==null?(ee=Math.max(ee,0),me=Math.min(me,Rt.count)):Pt!=null&&(ee=Math.max(ee,0),me=Math.min(me,Pt.count));const ge=me-ee;if(ge<0||ge===1/0)return;pe.setup(N,H,Ct,k,Rt);let We,ie=Et;if(Rt!==null&&(We=Y.get(Rt),ie=Kt,ie.setIndex(We)),N.isMesh)H.wireframe===!0?(lt.setLineWidth(H.wireframeLinewidth*it()),ie.setMode(P.LINES)):ie.setMode(P.TRIANGLES);else if(N.isLine){let Dt=H.linewidth;Dt===void 0&&(Dt=1),lt.setLineWidth(Dt*it()),N.isLineSegments?ie.setMode(P.LINES):N.isLineLoop?ie.setMode(P.LINE_LOOP):ie.setMode(P.LINE_STRIP)}else N.isPoints?ie.setMode(P.POINTS):N.isSprite&&ie.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ie.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))ie.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Dt=N._multiDrawStarts,Dn=N._multiDrawCounts,se=N._multiDrawCount,pn=Rt?Y.get(Rt).bytesPerElement:1,Ci=yt.get(H).currentProgram.getUniforms();for(let $e=0;$e<se;$e++)Ci.setValue(P,"_gl_DrawID",$e),ie.render(Dt[$e]/pn,Dn[$e])}else if(N.isInstancedMesh)ie.renderInstances(ee,ge,N.count);else if(k.isInstancedBufferGeometry){const Dt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Dn=Math.min(k.instanceCount,Dt);ie.renderInstances(ee,ge,Dn)}else ie.render(ee,ge)};function oe(E,U,k){E.transparent===!0&&E.side===vn&&E.forceSinglePass===!1?(E.side=qe,E.needsUpdate=!0,sr(E,U,k),E.side=ei,E.needsUpdate=!0,sr(E,U,k),E.side=vn):sr(E,U,k)}this.compile=function(E,U,k=null){k===null&&(k=E),p=jt.get(k),p.init(U),M.push(p),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),E!==k&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const H=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const rt=N.material;if(rt)if(Array.isArray(rt))for(let mt=0;mt<rt.length;mt++){const Ct=rt[mt];oe(Ct,k,N),H.add(Ct)}else oe(rt,k,N),H.add(rt)}),M.pop(),p=null,H},this.compileAsync=function(E,U,k=null){const H=this.compile(E,U,k);return new Promise(N=>{function rt(){if(H.forEach(function(mt){yt.get(mt).currentProgram.isReady()&&H.delete(mt)}),H.size===0){N(E);return}setTimeout(rt,10)}tt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let fn=null;function Ln(E){fn&&fn(E)}function zl(){ii.stop()}function Bl(){ii.start()}const ii=new su;ii.setAnimationLoop(Ln),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(E){fn=E,X.setAnimationLoop(E),E===null?ii.stop():ii.start()},X.addEventListener("sessionstart",zl),X.addEventListener("sessionend",Bl),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,U,L),p=jt.get(E,M.length),p.init(U),M.push(p),Ut.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(Ut),Tt=this.localClippingEnabled,st=et.init(this.clippingPlanes,Tt),m=Mt.get(E,b.length),m.init(),b.push(m),X.enabled===!0&&X.isPresenting===!0){const rt=y.xr.getDepthSensingMesh();rt!==null&&Ro(rt,U,-1/0,y.sortObjects)}Ro(E,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ct,xt),K=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,K&&Ft.addToRenderList(m,E),this.info.render.frame++,st===!0&&et.beginShadows();const k=p.state.shadowsArray;bt.render(k,E,U),st===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const rt=U.cameras;if(N.length>0)for(let mt=0,Ct=rt.length;mt<Ct;mt++){const Rt=rt[mt];Gl(H,N,E,Rt)}K&&Ft.render(E);for(let mt=0,Ct=rt.length;mt<Ct;mt++){const Rt=rt[mt];kl(m,E,Rt,Rt.viewport)}}else N.length>0&&Gl(H,N,E,U),K&&Ft.render(E),kl(m,E,U);L!==null&&(w.updateMultisampleRenderTarget(L),w.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(y,E,U),pe.resetDefaultState(),x=-1,v=null,M.pop(),M.length>0?(p=M[M.length-1],st===!0&&et.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Ro(E,U,k,H){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){H&&Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ut);const mt=$.update(E),Ct=E.material;Ct.visible&&m.push(E,mt,Ct,k,Ot.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||j.intersectsObject(E))){const mt=$.update(E),Ct=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ot.copy(E.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Ot.copy(mt.boundingSphere.center)),Ot.applyMatrix4(E.matrixWorld).applyMatrix4(Ut)),Array.isArray(Ct)){const Rt=mt.groups;for(let Gt=0,Xt=Rt.length;Gt<Xt;Gt++){const Pt=Rt[Gt],ee=Ct[Pt.materialIndex];ee&&ee.visible&&m.push(E,mt,ee,k,Ot.z,Pt)}}else Ct.visible&&m.push(E,mt,Ct,k,Ot.z,null)}}const rt=E.children;for(let mt=0,Ct=rt.length;mt<Ct;mt++)Ro(rt[mt],U,k,H)}function kl(E,U,k,H){const N=E.opaque,rt=E.transmissive,mt=E.transparent;p.setupLightsView(k),st===!0&&et.setGlobalState(y.clippingPlanes,k),H&&lt.viewport(A.copy(H)),N.length>0&&ir(N,U,k),rt.length>0&&ir(rt,U,k),mt.length>0&&ir(mt,U,k),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function Gl(E,U,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Cn(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?bi:An,minFilter:gi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const rt=p.state.transmissionRenderTarget[H.id],mt=H.viewport||A;rt.setSize(mt.z,mt.w);const Ct=y.getRenderTarget();y.setRenderTarget(rt),y.getClearColor(z),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),y.clear(),K&&Ft.render(k);const Rt=y.toneMapping;y.toneMapping=ti;const Gt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),st===!0&&et.setGlobalState(y.clippingPlanes,H),ir(E,k,H),w.updateMultisampleRenderTarget(rt),w.updateRenderTargetMipmap(rt),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Pt=0,ee=U.length;Pt<ee;Pt++){const me=U[Pt],ge=me.object,We=me.geometry,ie=me.material,Dt=me.group;if(ie.side===vn&&ge.layers.test(H.layers)){const Dn=ie.side;ie.side=qe,ie.needsUpdate=!0,Hl(ge,k,H,We,ie,Dt),ie.side=Dn,ie.needsUpdate=!0,Xt=!0}}Xt===!0&&(w.updateMultisampleRenderTarget(rt),w.updateRenderTargetMipmap(rt))}y.setRenderTarget(Ct),y.setClearColor(z,V),Gt!==void 0&&(H.viewport=Gt),y.toneMapping=Rt}function ir(E,U,k){const H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,rt=E.length;N<rt;N++){const mt=E[N],Ct=mt.object,Rt=mt.geometry,Gt=H===null?mt.material:H,Xt=mt.group;Ct.layers.test(k.layers)&&Hl(Ct,U,k,Rt,Gt,Xt)}}function Hl(E,U,k,H,N,rt){E.onBeforeRender(y,U,k,H,N,rt),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(y,U,k,H,E,rt),N.transparent===!0&&N.side===vn&&N.forceSinglePass===!1?(N.side=qe,N.needsUpdate=!0,y.renderBufferDirect(k,U,H,N,E,rt),N.side=ei,N.needsUpdate=!0,y.renderBufferDirect(k,U,H,N,E,rt),N.side=vn):y.renderBufferDirect(k,U,H,N,E,rt),E.onAfterRender(y,U,k,H,N,rt)}function sr(E,U,k){U.isScene!==!0&&(U=Qt);const H=yt.get(E),N=p.state.lights,rt=p.state.shadowsArray,mt=N.state.version,Ct=At.getParameters(E,N.state,rt,U,k),Rt=At.getProgramCacheKey(Ct);let Gt=H.programs;H.environment=E.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(E.isMeshStandardMaterial?B:S).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Gt===void 0&&(E.addEventListener("dispose",Wt),Gt=new Map,H.programs=Gt);let Xt=Gt.get(Rt);if(Xt!==void 0){if(H.currentProgram===Xt&&H.lightsStateVersion===mt)return Wl(E,Ct),Xt}else Ct.uniforms=At.getUniforms(E),E.onBeforeCompile(Ct,y),Xt=At.acquireProgram(Ct,Rt),Gt.set(Rt,Xt),H.uniforms=Ct.uniforms;const Pt=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pt.clippingPlanes=et.uniform),Wl(E,Ct),H.needsLights=Wu(E),H.lightsStateVersion=mt,H.needsLights&&(Pt.ambientLightColor.value=N.state.ambient,Pt.lightProbe.value=N.state.probe,Pt.directionalLights.value=N.state.directional,Pt.directionalLightShadows.value=N.state.directionalShadow,Pt.spotLights.value=N.state.spot,Pt.spotLightShadows.value=N.state.spotShadow,Pt.rectAreaLights.value=N.state.rectArea,Pt.ltc_1.value=N.state.rectAreaLTC1,Pt.ltc_2.value=N.state.rectAreaLTC2,Pt.pointLights.value=N.state.point,Pt.pointLightShadows.value=N.state.pointShadow,Pt.hemisphereLights.value=N.state.hemi,Pt.directionalShadowMap.value=N.state.directionalShadowMap,Pt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Pt.spotShadowMap.value=N.state.spotShadowMap,Pt.spotLightMatrix.value=N.state.spotLightMatrix,Pt.spotLightMap.value=N.state.spotLightMap,Pt.pointShadowMap.value=N.state.pointShadowMap,Pt.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Xt,H.uniformsList=null,Xt}function Vl(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Qr.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Wl(E,U){const k=yt.get(E);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Hu(E,U,k,H,N){U.isScene!==!0&&(U=Qt),w.resetTextureUnits();const rt=U.fog,mt=H.isMeshStandardMaterial?U.environment:null,Ct=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ms,Rt=(H.isMeshStandardMaterial?B:S).get(H.envMap||mt),Gt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Xt=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Pt=!!k.morphAttributes.position,ee=!!k.morphAttributes.normal,me=!!k.morphAttributes.color;let ge=ti;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ge=y.toneMapping);const We=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ie=We!==void 0?We.length:0,Dt=yt.get(H),Dn=p.state.lights;if(st===!0&&(Tt===!0||E!==v)){const on=E===v&&H.id===x;et.setState(H,E,on)}let se=!1;H.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Dn.state.version||Dt.outputColorSpace!==Ct||N.isBatchedMesh&&Dt.batching===!1||!N.isBatchedMesh&&Dt.batching===!0||N.isBatchedMesh&&Dt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Dt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Dt.instancing===!1||!N.isInstancedMesh&&Dt.instancing===!0||N.isSkinnedMesh&&Dt.skinning===!1||!N.isSkinnedMesh&&Dt.skinning===!0||N.isInstancedMesh&&Dt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Dt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Dt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Dt.instancingMorph===!1&&N.morphTexture!==null||Dt.envMap!==Rt||H.fog===!0&&Dt.fog!==rt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==et.numPlanes||Dt.numIntersection!==et.numIntersection)||Dt.vertexAlphas!==Gt||Dt.vertexTangents!==Xt||Dt.morphTargets!==Pt||Dt.morphNormals!==ee||Dt.morphColors!==me||Dt.toneMapping!==ge||Dt.morphTargetsCount!==ie)&&(se=!0):(se=!0,Dt.__version=H.version);let pn=Dt.currentProgram;se===!0&&(pn=sr(H,U,N));let Ci=!1,$e=!1,vs=!1;const _e=pn.getUniforms(),Sn=Dt.uniforms;if(lt.useProgram(pn.program)&&(Ci=!0,$e=!0,vs=!0),H.id!==x&&(x=H.id,$e=!0),Ci||v!==E){lt.buffers.depth.getReversed()?(at.copy(E.projectionMatrix),Vd(at),Wd(at),_e.setValue(P,"projectionMatrix",at)):_e.setValue(P,"projectionMatrix",E.projectionMatrix),_e.setValue(P,"viewMatrix",E.matrixWorldInverse);const Vn=_e.map.cameraPosition;Vn!==void 0&&Vn.setValue(P,kt.setFromMatrixPosition(E.matrixWorld)),St.logarithmicDepthBuffer&&_e.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&_e.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,$e=!0,vs=!0)}if(N.isSkinnedMesh){_e.setOptional(P,N,"bindMatrix"),_e.setOptional(P,N,"bindMatrixInverse");const on=N.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),_e.setValue(P,"boneTexture",on.boneTexture,w))}N.isBatchedMesh&&(_e.setOptional(P,N,"batchingTexture"),_e.setValue(P,"batchingTexture",N._matricesTexture,w),_e.setOptional(P,N,"batchingIdTexture"),_e.setValue(P,"batchingIdTexture",N._indirectTexture,w),_e.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&_e.setValue(P,"batchingColorTexture",N._colorsTexture,w));const ys=k.morphAttributes;if((ys.position!==void 0||ys.normal!==void 0||ys.color!==void 0)&&Bt.update(N,k,pn),($e||Dt.receiveShadow!==N.receiveShadow)&&(Dt.receiveShadow=N.receiveShadow,_e.setValue(P,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Sn.envMap.value=Rt,Sn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Sn.envMapIntensity.value=U.environmentIntensity),$e&&(_e.setValue(P,"toneMappingExposure",y.toneMappingExposure),Dt.needsLights&&Vu(Sn,vs),rt&&H.fog===!0&&ut.refreshFogUniforms(Sn,rt),ut.refreshMaterialUniforms(Sn,H,W,nt,p.state.transmissionRenderTarget[E.id]),Qr.upload(P,Vl(Dt),Sn,w)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Qr.upload(P,Vl(Dt),Sn,w),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&_e.setValue(P,"center",N.center),_e.setValue(P,"modelViewMatrix",N.modelViewMatrix),_e.setValue(P,"normalMatrix",N.normalMatrix),_e.setValue(P,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const on=H.uniformsGroups;for(let Vn=0,Wn=on.length;Vn<Wn;Vn++){const Xl=on[Vn];I.update(Xl,pn),I.bind(Xl,pn)}}return pn}function Vu(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Wu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,U,k){yt.get(E.texture).__webglTexture=U,yt.get(E.depthTexture).__webglTexture=k;const H=yt.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const k=yt.get(E);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,k=0){L=E,T=U,C=k;let H=!0,N=null,rt=!1,mt=!1;if(E){const Rt=yt.get(E);if(Rt.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(P.FRAMEBUFFER,null),H=!1;else if(Rt.__webglFramebuffer===void 0)w.setupRenderTarget(E);else if(Rt.__hasExternalTextures)w.rebindTextures(E,yt.get(E.texture).__webglTexture,yt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Pt=E.depthTexture;if(Rt.__boundDepthTexture!==Pt){if(Pt!==null&&yt.has(Pt)&&(E.width!==Pt.image.width||E.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(E)}}const Gt=E.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(mt=!0);const Xt=yt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Xt[U])?N=Xt[U][k]:N=Xt[U],rt=!0):E.samples>0&&w.useMultisampledRTT(E)===!1?N=yt.get(E).__webglMultisampledFramebuffer:Array.isArray(Xt)?N=Xt[k]:N=Xt,A.copy(E.viewport),O.copy(E.scissor),F=E.scissorTest}else A.copy(wt).multiplyScalar(W).floor(),O.copy(Vt).multiplyScalar(W).floor(),F=ne;if(lt.bindFramebuffer(P.FRAMEBUFFER,N)&&H&&lt.drawBuffers(E,N),lt.viewport(A),lt.scissor(O),lt.setScissorTest(F),rt){const Rt=yt.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,Rt.__webglTexture,k)}else if(mt){const Rt=yt.get(E.texture),Gt=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Rt.__webglTexture,k||0,Gt)}x=-1},this.readRenderTargetPixels=function(E,U,k,H,N,rt,mt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&mt!==void 0&&(Ct=Ct[mt]),Ct){lt.bindFramebuffer(P.FRAMEBUFFER,Ct);try{const Rt=E.texture,Gt=Rt.format,Xt=Rt.type;if(!St.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-H&&k>=0&&k<=E.height-N&&P.readPixels(U,k,H,N,qt.convert(Gt),qt.convert(Xt),rt)}finally{const Rt=L!==null?yt.get(L).__webglFramebuffer:null;lt.bindFramebuffer(P.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(E,U,k,H,N,rt,mt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&mt!==void 0&&(Ct=Ct[mt]),Ct){const Rt=E.texture,Gt=Rt.format,Xt=Rt.type;if(!St.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-H&&k>=0&&k<=E.height-N){lt.bindFramebuffer(P.FRAMEBUFFER,Ct);const Pt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Pt),P.bufferData(P.PIXEL_PACK_BUFFER,rt.byteLength,P.STREAM_READ),P.readPixels(U,k,H,N,qt.convert(Gt),qt.convert(Xt),0);const ee=L!==null?yt.get(L).__webglFramebuffer:null;lt.bindFramebuffer(P.FRAMEBUFFER,ee);const me=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Hd(P,me,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Pt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,rt),P.deleteBuffer(Pt),P.deleteSync(me),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,k=0){E.isTexture!==!0&&(Ns("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const H=Math.pow(2,-k),N=Math.floor(E.image.width*H),rt=Math.floor(E.image.height*H),mt=U!==null?U.x:0,Ct=U!==null?U.y:0;w.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,mt,Ct,N,rt),lt.unbindTexture()},this.copyTextureToTexture=function(E,U,k=null,H=null,N=0){E.isTexture!==!0&&(Ns("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1],U=arguments[2],N=arguments[3]||0,k=null);let rt,mt,Ct,Rt,Gt,Xt,Pt,ee,me;const ge=E.isCompressedTexture?E.mipmaps[N]:E.image;k!==null?(rt=k.max.x-k.min.x,mt=k.max.y-k.min.y,Ct=k.isBox3?k.max.z-k.min.z:1,Rt=k.min.x,Gt=k.min.y,Xt=k.isBox3?k.min.z:0):(rt=ge.width,mt=ge.height,Ct=ge.depth||1,Rt=0,Gt=0,Xt=0),H!==null?(Pt=H.x,ee=H.y,me=H.z):(Pt=0,ee=0,me=0);const We=qt.convert(U.format),ie=qt.convert(U.type);let Dt;U.isData3DTexture?(w.setTexture3D(U,0),Dt=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),Dt=P.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),Dt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Dn=P.getParameter(P.UNPACK_ROW_LENGTH),se=P.getParameter(P.UNPACK_IMAGE_HEIGHT),pn=P.getParameter(P.UNPACK_SKIP_PIXELS),Ci=P.getParameter(P.UNPACK_SKIP_ROWS),$e=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ge.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ge.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Rt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Gt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Xt);const vs=E.isDataArrayTexture||E.isData3DTexture,_e=U.isDataArrayTexture||U.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Sn=yt.get(E),ys=yt.get(U),on=yt.get(Sn.__renderTarget),Vn=yt.get(ys.__renderTarget);lt.bindFramebuffer(P.READ_FRAMEBUFFER,on.__webglFramebuffer),lt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let Wn=0;Wn<Ct;Wn++)vs&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,yt.get(E).__webglTexture,N,Xt+Wn),E.isDepthTexture?(_e&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,yt.get(U).__webglTexture,N,me+Wn),P.blitFramebuffer(Rt,Gt,rt,mt,Pt,ee,rt,mt,P.DEPTH_BUFFER_BIT,P.NEAREST)):_e?P.copyTexSubImage3D(Dt,N,Pt,ee,me+Wn,Rt,Gt,rt,mt):P.copyTexSubImage2D(Dt,N,Pt,ee,me+Wn,Rt,Gt,rt,mt);lt.bindFramebuffer(P.READ_FRAMEBUFFER,null),lt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else _e?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Dt,N,Pt,ee,me,rt,mt,Ct,We,ie,ge.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Dt,N,Pt,ee,me,rt,mt,Ct,We,ge.data):P.texSubImage3D(Dt,N,Pt,ee,me,rt,mt,Ct,We,ie,ge):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,N,Pt,ee,rt,mt,We,ie,ge.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,N,Pt,ee,ge.width,ge.height,We,ge.data):P.texSubImage2D(P.TEXTURE_2D,N,Pt,ee,rt,mt,We,ie,ge);P.pixelStorei(P.UNPACK_ROW_LENGTH,Dn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,se),P.pixelStorei(P.UNPACK_SKIP_PIXELS,pn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ci),P.pixelStorei(P.UNPACK_SKIP_IMAGES,$e),N===0&&U.generateMipmaps&&P.generateMipmap(Dt),lt.unbindTexture()},this.copyTextureToTexture3D=function(E,U,k=null,H=null,N=0){return E.isTexture!==!0&&(Ns("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,E=arguments[2],U=arguments[3],N=arguments[4]||0),Ns('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,k,H,N)},this.initRenderTarget=function(E){yt.get(E).__webglFramebuffer===void 0&&w.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),lt.unbindTexture()},this.resetState=function(){T=0,C=0,L=null,lt.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}class vl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new vl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class t_ extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class e_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ka,this.updateRanges=[],this.version=0,this.uuid=Tn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Be=new R;class oo{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new De(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new oo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class hu extends Ti{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Vi;const ws=new R,Wi=new R,Xi=new R,Yi=new J,Ts=new J,uu=new Zt,Tr=new R,As=new R,Ar=new R,Xc=new J,sa=new J,Yc=new J;class n_ extends Ae{constructor(t=new hu){if(super(),this.isSprite=!0,this.type="Sprite",Vi===void 0){Vi=new Me;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new e_(e,5);Vi.setIndex([0,1,2,0,2,3]),Vi.setAttribute("position",new oo(n,3,0,!1)),Vi.setAttribute("uv",new oo(n,2,3,!1))}this.geometry=Vi,this.material=t,this.center=new J(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wi.setFromMatrixScale(this.matrixWorld),uu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Xi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wi.multiplyScalar(-Xi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Cr(Tr.set(-.5,-.5,0),Xi,o,Wi,s,r),Cr(As.set(.5,-.5,0),Xi,o,Wi,s,r),Cr(Ar.set(.5,.5,0),Xi,o,Wi,s,r),Xc.set(0,0),sa.set(1,0),Yc.set(1,1);let a=t.ray.intersectTriangle(Tr,As,Ar,!1,ws);if(a===null&&(Cr(As.set(-.5,.5,0),Xi,o,Wi,s,r),sa.set(0,1),a=t.ray.intersectTriangle(Tr,Ar,As,!1,ws),a===null))return;const l=t.ray.origin.distanceTo(ws);l<t.near||l>t.far||e.push({distance:l,point:ws.clone(),uv:tn.getInterpolation(ws,Tr,As,Ar,Xc,sa,Yc,new J),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Cr(i,t,e,n,s,r){Yi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ts.x=r*Yi.x-s*Yi.y,Ts.y=s*Yi.x+r*Yi.y):Ts.copy(Yi),i.copy(t),i.x+=Ts.x,i.y+=Ts.y,i.applyMatrix4(uu)}class du extends Oe{constructor(t=null,e=1,n=1,s,r,o,a,l,h=en,c=en,d,u){super(null,o,a,l,h,c,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ao extends De{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const qi=new Zt,qc=new Zt,Rr=[],$c=new wi,i_=new Zt,Cs=new re,Rs=new gs;class lo extends re{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ao(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,i_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new wi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),$c.copy(t.boundingBox).applyMatrix4(qi),this.boundingBox.union($c)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),Rs.copy(t.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(Rs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Cs.geometry=this.geometry,Cs.material=this.material,Cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rs.copy(this.boundingSphere),Rs.applyMatrix4(n),t.ray.intersectsSphere(Rs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qi),qc.multiplyMatrices(n,qi),Cs.matrixWorld=qc,Cs.raycast(t,Rr);for(let o=0,a=Rr.length;o<a;o++){const l=Rr[o];l.instanceId=r,l.object=this,e.push(l)}Rr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ao(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new du(new Float32Array(s*this.count),s,this.count,vo,wn));const r=this.morphTexture.source.data.data;let o=0;for(let h=0;h<n.length;h++)o+=n[h];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class yl extends Ti{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const co=new R,ho=new R,jc=new Zt,Ps=new Mo,Pr=new gs,ra=new R,Zc=new R;class s_ extends Ae{constructor(t=new Me,e=new yl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)co.fromBufferAttribute(e,s-1),ho.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=co.distanceTo(ho);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(s),Pr.radius+=r,t.ray.intersectsSphere(Pr)===!1)return;jc.copy(s).invert(),Ps.copy(t.ray).applyMatrix4(jc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=h){const p=c.getX(_),b=c.getX(_+1),M=Lr(this,t,Ps,l,p,b);M&&e.push(M)}if(this.isLineLoop){const _=c.getX(g-1),m=c.getX(f),p=Lr(this,t,Ps,l,_,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=h){const p=Lr(this,t,Ps,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Lr(this,t,Ps,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Lr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(co.fromBufferAttribute(o,s),ho.fromBufferAttribute(o,r),e.distanceSqToSegment(co,ho,ra,Zc)>n)return;ra.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ra);if(!(l<t.near||l>t.far))return{distance:l,point:Zc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Kc=new R,Jc=new R;class fu extends s_{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Kc.fromBufferAttribute(e,s),Jc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Kc.distanceTo(Jc);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class r_ extends Oe{constructor(t,e,n,s,r,o,a,l,h){super(t,e,n,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=n[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const c=n[s],u=n[s+1]-c,f=(o-c)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new J:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,s=[],r=[],o=[],a=new R,l=new Zt;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let h=Number.MAX_VALUE;const c=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);c<=h&&(h=c,n.set(1,0,0)),d<=h&&(h=d,n.set(0,1,0)),u<=h&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ee(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ee(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ml extends Rn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new J){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=h-this.aY;l=u*c-f*d+this.aX,h=u*d+f*c+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class o_ extends Ml{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Sl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,c,d){let u=(o-r)/h-(a-r)/(h+c)+(a-o)/c,f=(a-o)/c-(l-o)/(c+d)+(l-a)/d;u*=c,f*=c,s(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Dr=new R,oa=new Sl,aa=new Sl,la=new Sl;class a_ extends Rn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,c;this.closed||a>0?h=s[(a-1)%r]:(Dr.subVectors(s[0],s[1]).add(s[0]),h=Dr);const d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?c=s[(a+2)%r]:(Dr.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=Dr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(h.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(c),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),oa.initNonuniformCatmullRom(h.x,d.x,u.x,c.x,g,_,m),aa.initNonuniformCatmullRom(h.y,d.y,u.y,c.y,g,_,m),la.initNonuniformCatmullRom(h.z,d.z,u.z,c.z,g,_,m)}else this.curveType==="catmullrom"&&(oa.initCatmullRom(h.x,d.x,u.x,c.x,this.tension),aa.initCatmullRom(h.y,d.y,u.y,c.y,this.tension),la.initCatmullRom(h.z,d.z,u.z,c.z,this.tension));return n.set(oa.calc(l),aa.calc(l),la.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Qc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function l_(i,t){const e=1-i;return e*e*t}function c_(i,t){return 2*(1-i)*i*t}function h_(i,t){return i*i*t}function Gs(i,t,e,n){return l_(i,t)+c_(i,e)+h_(i,n)}function u_(i,t){const e=1-i;return e*e*e*t}function d_(i,t){const e=1-i;return 3*e*e*i*t}function f_(i,t){return 3*(1-i)*i*i*t}function p_(i,t){return i*i*i*t}function Hs(i,t,e,n,s){return u_(i,t)+d_(i,e)+f_(i,n)+p_(i,s)}class pu extends Rn{constructor(t=new J,e=new J,n=new J,s=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new J){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hs(t,s.x,r.x,o.x,a.x),Hs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class m_ extends Rn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hs(t,s.x,r.x,o.x,a.x),Hs(t,s.y,r.y,o.y,a.y),Hs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mu extends Rn{constructor(t=new J,e=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new J){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new J){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class g_ extends Rn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gu extends Rn{constructor(t=new J,e=new J,n=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new J){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Gs(t,s.x,r.x,o.x),Gs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class __ extends Rn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Gs(t,s.x,r.x,o.x),Gs(t,s.y,r.y,o.y),Gs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _u extends Rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new J){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],c=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Qc(a,l.x,h.x,c.x,d.x),Qc(a,l.y,h.y,c.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new J().fromArray(s))}return this}}var Qa=Object.freeze({__proto__:null,ArcCurve:o_,CatmullRomCurve3:a_,CubicBezierCurve:pu,CubicBezierCurve3:m_,EllipseCurve:Ml,LineCurve:mu,LineCurve3:g_,QuadraticBezierCurve:gu,QuadraticBezierCurve3:__,SplineCurve:_u});class x_ extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){const c=l[h];n&&n.equals(c)||(e.push(c),n=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Qa[s.type]().fromJSON(s))}return this}}class th extends x_{constructor(t){super(),this.type="Path",this.currentPoint=new J,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new mu(this.currentPoint.clone(),new J(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new gu(this.currentPoint.clone(),new J(t,e),new J(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new pu(this.currentPoint.clone(),new J(t,e),new J(n,s),new J(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new _u(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+h,e+c,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const h=new Ml(t,e,n,s,r,o,a,l);if(this.curves.length>0){const d=h.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(h);const c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class uo extends Me{constructor(t=[new J(0,-.5),new J(.5,0),new J(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ee(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],h=[],c=1/e,d=new R,u=new J,f=new R,g=new R,_=new R;let m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let b=0;b<=e;b++){const M=n+b*c*s,y=Math.sin(M),D=Math.cos(M);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*y,d.y=t[T].y,d.z=t[T].x*D,o.push(d.x,d.y,d.z),u.x=b/e,u.y=T/(t.length-1),a.push(u.x,u.y);const C=l[3*T+0]*y,L=l[3*T+1],x=l[3*T+0]*D;h.push(C,L,x)}}for(let b=0;b<e;b++)for(let M=0;M<t.length-1;M++){const y=M+b*t.length,D=y,T=y+t.length,C=y+t.length+1,L=y+1;r.push(D,T,L),r.push(C,L,T)}this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("uv",new te(a,2)),this.setAttribute("normal",new te(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uo(t.points,t.segments,t.phiStart,t.phiLength)}}class Pe extends Me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const h=this;s=Math.floor(s),r=Math.floor(r);const c=[],d=[],u=[],f=[];let g=0;const _=[],m=n/2;let p=0;b(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(c),this.setAttribute("position",new te(d,3)),this.setAttribute("normal",new te(u,3)),this.setAttribute("uv",new te(f,2));function b(){const y=new R,D=new R;let T=0;const C=(e-t)/n;for(let L=0;L<=r;L++){const x=[],v=L/r,A=v*(e-t)+t;for(let O=0;O<=s;O++){const F=O/s,z=F*l+a,V=Math.sin(z),G=Math.cos(z);D.x=A*V,D.y=-v*n+m,D.z=A*G,d.push(D.x,D.y,D.z),y.set(V,C,G).normalize(),u.push(y.x,y.y,y.z),f.push(F,1-v),x.push(g++)}_.push(x)}for(let L=0;L<s;L++)for(let x=0;x<r;x++){const v=_[x][L],A=_[x+1][L],O=_[x+1][L+1],F=_[x][L+1];(t>0||x!==0)&&(c.push(v,A,F),T+=3),(e>0||x!==r-1)&&(c.push(A,O,F),T+=3)}h.addGroup(p,T,0),p+=T}function M(y){const D=g,T=new J,C=new R;let L=0;const x=y===!0?t:e,v=y===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*v,0),u.push(0,v,0),f.push(.5,.5),g++;const A=g;for(let O=0;O<=s;O++){const z=O/s*l+a,V=Math.cos(z),G=Math.sin(z);C.x=x*G,C.y=m*v,C.z=x*V,d.push(C.x,C.y,C.z),u.push(0,v,0),T.x=V*.5+.5,T.y=G*.5*v+.5,f.push(T.x,T.y),g++}for(let O=0;O<s;O++){const F=D+O,z=A+O;y===!0?c.push(z,z+1,F):c.push(z+1,z,F),L+=3}h.addGroup(p,L,y===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pn extends Pe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Pn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Eo extends Me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),h(n),c(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const M=new R,y=new R,D=new R;for(let T=0;T<e.length;T+=3)f(e[T+0],M),f(e[T+1],y),f(e[T+2],D),l(M,y,D,b)}function l(b,M,y,D){const T=D+1,C=[];for(let L=0;L<=T;L++){C[L]=[];const x=b.clone().lerp(y,L/T),v=M.clone().lerp(y,L/T),A=T-L;for(let O=0;O<=A;O++)O===0&&L===T?C[L][O]=x:C[L][O]=x.clone().lerp(v,O/A)}for(let L=0;L<T;L++)for(let x=0;x<2*(T-L)-1;x++){const v=Math.floor(x/2);x%2===0?(u(C[L][v+1]),u(C[L+1][v]),u(C[L][v])):(u(C[L][v+1]),u(C[L+1][v+1]),u(C[L+1][v]))}}function h(b){const M=new R;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(b),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function c(){const b=new R;for(let M=0;M<r.length;M+=3){b.x=r[M+0],b.y=r[M+1],b.z=r[M+2];const y=m(b)/2/Math.PI+.5,D=p(b)/Math.PI+.5;o.push(y,1-D)}g(),d()}function d(){for(let b=0;b<o.length;b+=6){const M=o[b+0],y=o[b+2],D=o[b+4],T=Math.max(M,y,D),C=Math.min(M,y,D);T>.9&&C<.1&&(M<.2&&(o[b+0]+=1),y<.2&&(o[b+2]+=1),D<.2&&(o[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function f(b,M){const y=b*3;M.x=t[y+0],M.y=t[y+1],M.z=t[y+2]}function g(){const b=new R,M=new R,y=new R,D=new R,T=new J,C=new J,L=new J;for(let x=0,v=0;x<r.length;x+=9,v+=6){b.set(r[x+0],r[x+1],r[x+2]),M.set(r[x+3],r[x+4],r[x+5]),y.set(r[x+6],r[x+7],r[x+8]),T.set(o[v+0],o[v+1]),C.set(o[v+2],o[v+3]),L.set(o[v+4],o[v+5]),D.copy(b).add(M).add(y).divideScalar(3);const A=m(D);_(T,v+0,b,A),_(C,v+2,M,A),_(L,v+4,y,A)}}function _(b,M,y,D){D<0&&b.x===1&&(o[M]=b.x-1),y.x===0&&y.z===0&&(o[M]=D/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eo(t.vertices,t.indices,t.radius,t.details)}}const Ir=new R,Ur=new R,ca=new R,Nr=new tn;class v_ extends Me{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(ss*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,h=[0,0,0],c=["a","b","c"],d=new Array(3),u={},f=[];for(let g=0;g<l;g+=3){o?(h[0]=o.getX(g),h[1]=o.getX(g+1),h[2]=o.getX(g+2)):(h[0]=g,h[1]=g+1,h[2]=g+2);const{a:_,b:m,c:p}=Nr;if(_.fromBufferAttribute(a,h[0]),m.fromBufferAttribute(a,h[1]),p.fromBufferAttribute(a,h[2]),Nr.getNormal(ca),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){const M=(b+1)%3,y=d[b],D=d[M],T=Nr[c[b]],C=Nr[c[M]],L=`${y}_${D}`,x=`${D}_${y}`;x in u&&u[x]?(ca.dot(u[x].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(C.x,C.y,C.z)),u[x]=null):L in u||(u[L]={index0:h[b],index1:h[M],normal:ca.clone()})}}for(const g in u)if(u[g]){const{index0:_,index1:m}=u[g];Ir.fromBufferAttribute(a,_),Ur.fromBufferAttribute(a,m),f.push(Ir.x,Ir.y,Ir.z),f.push(Ur.x,Ur.y,Ur.z)}this.setAttribute("position",new te(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class xu extends th{constructor(t){super(t),this.uuid=Tn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new th().fromJSON(s))}return this}}const y_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=vu(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,h,c,d,u,f;if(n&&(r=w_(i,t,r,e)),i.length>80*e){a=h=i[0],l=c=i[1];for(let g=e;g<s;g+=e)d=i[g],u=i[g+1],d<a&&(a=d),u<l&&(l=u),d>h&&(h=d),u>c&&(c=u);f=Math.max(h-a,c-l),f=f!==0?32767/f:0}return js(r,o,e,a,l,f,0),o}};function vu(i,t,e,n,s){let r,o;if(s===F_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=eh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=eh(r,i[r],i[r+1],o);return o&&wo(o,o.next)&&(Ks(o),o=o.next),o}function yi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(wo(e,e.next)||xe(e.prev,e,e.next)===0)){if(Ks(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function js(i,t,e,n,s,r,o){if(!i)return;!o&&r&&P_(i,n,s,r);let a=i,l,h;for(;i.prev!==i.next;){if(l=i.prev,h=i.next,r?S_(i,n,s,r):M_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(h.i/e|0),Ks(i),i=h.next,a=h.next;continue}if(i=h,i===a){o?o===1?(i=b_(yi(i),t,e),js(i,t,e,n,s,r,2)):o===2&&E_(i,t,e,n,s,r):js(yi(i),t,e,n,s,r,1);break}}}function M_(i){const t=i.prev,e=i,n=i.next;if(xe(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,h=n.y,c=s<r?s<o?s:o:r<o?r:o,d=a<l?a<h?a:h:l<h?l:h,u=s>r?s>o?s:o:r>o?r:o,f=a>l?a>h?a:h:l>h?l:h;let g=n.next;for(;g!==t;){if(g.x>=c&&g.x<=u&&g.y>=d&&g.y<=f&&Qi(s,a,r,l,o,h,g.x,g.y)&&xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function S_(i,t,e,n){const s=i.prev,r=i,o=i.next;if(xe(s,r,o)>=0)return!1;const a=s.x,l=r.x,h=o.x,c=s.y,d=r.y,u=o.y,f=a<l?a<h?a:h:l<h?l:h,g=c<d?c<u?c:u:d<u?d:u,_=a>l?a>h?a:h:l>h?l:h,m=c>d?c>u?c:u:d>u?d:u,p=tl(f,g,t,e,n),b=tl(_,m,t,e,n);let M=i.prevZ,y=i.nextZ;for(;M&&M.z>=p&&y&&y.z<=b;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Qi(a,c,l,d,h,u,M.x,M.y)&&xe(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Qi(a,c,l,d,h,u,y.x,y.y)&&xe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Qi(a,c,l,d,h,u,M.x,M.y)&&xe(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=b;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Qi(a,c,l,d,h,u,y.x,y.y)&&xe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function b_(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!wo(s,r)&&yu(s,n,n.next,r)&&Zs(s,r)&&Zs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ks(n),Ks(n.next),n=i=r),n=n.next}while(n!==i);return yi(n)}function E_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&I_(o,a)){let l=Mu(o,a);o=yi(o,o.next),l=yi(l,l.next),js(o,t,e,n,s,r,0),js(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function w_(i,t,e,n){const s=[];let r,o,a,l,h;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,h=vu(i,a,l,n,!1),h===h.next&&(h.steiner=!0),s.push(D_(h));for(s.sort(T_),r=0;r<s.length;r++)e=A_(s[r],e);return e}function T_(i,t){return i.x-t.x}function A_(i,t){const e=C_(i,t);if(!e)return t;const n=Mu(e,i);return yi(n,n.next),yi(e,e.next)}function C_(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,h=s.y;let c=1/0,d;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Qi(o<h?r:n,o,l,h,o<h?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),Zs(e,i)&&(d<c||d===c&&(e.x>s.x||e.x===s.x&&R_(s,e)))&&(s=e,c=d)),e=e.next;while(e!==a);return s}function R_(i,t){return xe(i.prev,i,t.prev)<0&&xe(t.next,i,i.next)<0}function P_(i,t,e,n){let s=i;do s.z===0&&(s.z=tl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,L_(s)}function L_(i){let t,e,n,s,r,o,a,l,h=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<h&&(a++,n=n.nextZ,!!n);t++);for(l=h;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,h*=2}while(o>1);return i}function tl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function D_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Qi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function I_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!U_(i,t)&&(Zs(i,t)&&Zs(t,i)&&N_(i,t)&&(xe(i.prev,i,t.prev)||xe(i,t.prev,t))||wo(i,t)&&xe(i.prev,i,i.next)>0&&xe(t.prev,t,t.next)>0)}function xe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function wo(i,t){return i.x===t.x&&i.y===t.y}function yu(i,t,e,n){const s=Or(xe(i,t,e)),r=Or(xe(i,t,n)),o=Or(xe(e,n,i)),a=Or(xe(e,n,t));return!!(s!==r&&o!==a||s===0&&Fr(i,e,t)||r===0&&Fr(i,n,t)||o===0&&Fr(e,i,n)||a===0&&Fr(e,t,n))}function Fr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Or(i){return i>0?1:i<0?-1:0}function U_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&yu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Zs(i,t){return xe(i.prev,i,i.next)<0?xe(i,t,i.next)>=0&&xe(i,i.prev,t)>=0:xe(i,t,i.prev)<0||xe(i,i.next,t)<0}function N_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Mu(i,t){const e=new el(i.i,i.x,i.y),n=new el(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function eh(i,t,e,n){const s=new el(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ks(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function el(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function F_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Vs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Vs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];nh(t),ih(n,t);let o=t.length;e.forEach(nh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,ih(n,e[l]);const a=y_.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function nh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ih(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class bl extends Me{constructor(t=new xu([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const h=t[a];o(h)}this.setAttribute("position",new te(s,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function o(a){const l=[],h=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:O_;let M,y=!1,D,T,C,L;p&&(M=p.getSpacedPoints(c),y=!0,u=!1,D=p.computeFrenetFrames(c,!1),T=new R,C=new R,L=new R),u||(m=0,f=0,g=0,_=0);const x=a.extractPoints(h);let v=x.shape;const A=x.holes;if(!Vs.isClockWise(v)){v=v.reverse();for(let K=0,it=A.length;K<it;K++){const P=A[K];Vs.isClockWise(P)&&(A[K]=P.reverse())}}const F=Vs.triangulateShape(v,A),z=v;for(let K=0,it=A.length;K<it;K++){const P=A[K];v=v.concat(P)}function V(K,it,P){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(it,P)}const G=v.length,nt=F.length;function W(K,it,P){let Lt,tt,St;const lt=K.x-it.x,Nt=K.y-it.y,yt=P.x-K.x,w=P.y-K.y,S=lt*lt+Nt*Nt,B=lt*w-Nt*yt;if(Math.abs(B)>Number.EPSILON){const Y=Math.sqrt(S),Q=Math.sqrt(yt*yt+w*w),$=it.x-Nt/Y,At=it.y+lt/Y,ut=P.x-w/Q,Mt=P.y+yt/Q,jt=((ut-$)*w-(Mt-At)*yt)/(lt*w-Nt*yt);Lt=$+lt*jt-K.x,tt=At+Nt*jt-K.y;const et=Lt*Lt+tt*tt;if(et<=2)return new J(Lt,tt);St=Math.sqrt(et/2)}else{let Y=!1;lt>Number.EPSILON?yt>Number.EPSILON&&(Y=!0):lt<-Number.EPSILON?yt<-Number.EPSILON&&(Y=!0):Math.sign(Nt)===Math.sign(w)&&(Y=!0),Y?(Lt=-Nt,tt=lt,St=Math.sqrt(S)):(Lt=lt,tt=Nt,St=Math.sqrt(S/2))}return new J(Lt/St,tt/St)}const ct=[];for(let K=0,it=z.length,P=it-1,Lt=K+1;K<it;K++,P++,Lt++)P===it&&(P=0),Lt===it&&(Lt=0),ct[K]=W(z[K],z[P],z[Lt]);const xt=[];let wt,Vt=ct.concat();for(let K=0,it=A.length;K<it;K++){const P=A[K];wt=[];for(let Lt=0,tt=P.length,St=tt-1,lt=Lt+1;Lt<tt;Lt++,St++,lt++)St===tt&&(St=0),lt===tt&&(lt=0),wt[Lt]=W(P[Lt],P[St],P[lt]);xt.push(wt),Vt=Vt.concat(wt)}for(let K=0;K<m;K++){const it=K/m,P=f*Math.cos(it*Math.PI/2),Lt=g*Math.sin(it*Math.PI/2)+_;for(let tt=0,St=z.length;tt<St;tt++){const lt=V(z[tt],ct[tt],Lt);at(lt.x,lt.y,-P)}for(let tt=0,St=A.length;tt<St;tt++){const lt=A[tt];wt=xt[tt];for(let Nt=0,yt=lt.length;Nt<yt;Nt++){const w=V(lt[Nt],wt[Nt],Lt);at(w.x,w.y,-P)}}}const ne=g+_;for(let K=0;K<G;K++){const it=u?V(v[K],Vt[K],ne):v[K];y?(C.copy(D.normals[0]).multiplyScalar(it.x),T.copy(D.binormals[0]).multiplyScalar(it.y),L.copy(M[0]).add(C).add(T),at(L.x,L.y,L.z)):at(it.x,it.y,0)}for(let K=1;K<=c;K++)for(let it=0;it<G;it++){const P=u?V(v[it],Vt[it],ne):v[it];y?(C.copy(D.normals[K]).multiplyScalar(P.x),T.copy(D.binormals[K]).multiplyScalar(P.y),L.copy(M[K]).add(C).add(T),at(L.x,L.y,L.z)):at(P.x,P.y,d/c*K)}for(let K=m-1;K>=0;K--){const it=K/m,P=f*Math.cos(it*Math.PI/2),Lt=g*Math.sin(it*Math.PI/2)+_;for(let tt=0,St=z.length;tt<St;tt++){const lt=V(z[tt],ct[tt],Lt);at(lt.x,lt.y,d+P)}for(let tt=0,St=A.length;tt<St;tt++){const lt=A[tt];wt=xt[tt];for(let Nt=0,yt=lt.length;Nt<yt;Nt++){const w=V(lt[Nt],wt[Nt],Lt);y?at(w.x,w.y+M[c-1].y,M[c-1].x+P):at(w.x,w.y,d+P)}}}j(),st();function j(){const K=s.length/3;if(u){let it=0,P=G*it;for(let Lt=0;Lt<nt;Lt++){const tt=F[Lt];Ut(tt[2]+P,tt[1]+P,tt[0]+P)}it=c+m*2,P=G*it;for(let Lt=0;Lt<nt;Lt++){const tt=F[Lt];Ut(tt[0]+P,tt[1]+P,tt[2]+P)}}else{for(let it=0;it<nt;it++){const P=F[it];Ut(P[2],P[1],P[0])}for(let it=0;it<nt;it++){const P=F[it];Ut(P[0]+G*c,P[1]+G*c,P[2]+G*c)}}n.addGroup(K,s.length/3-K,0)}function st(){const K=s.length/3;let it=0;Tt(z,it),it+=z.length;for(let P=0,Lt=A.length;P<Lt;P++){const tt=A[P];Tt(tt,it),it+=tt.length}n.addGroup(K,s.length/3-K,1)}function Tt(K,it){let P=K.length;for(;--P>=0;){const Lt=P;let tt=P-1;tt<0&&(tt=K.length-1);for(let St=0,lt=c+m*2;St<lt;St++){const Nt=G*St,yt=G*(St+1),w=it+Lt+Nt,S=it+tt+Nt,B=it+tt+yt,Y=it+Lt+yt;kt(w,S,B,Y)}}}function at(K,it,P){l.push(K),l.push(it),l.push(P)}function Ut(K,it,P){Ot(K),Ot(it),Ot(P);const Lt=s.length/3,tt=b.generateTopUV(n,s,Lt-3,Lt-2,Lt-1);Qt(tt[0]),Qt(tt[1]),Qt(tt[2])}function kt(K,it,P,Lt){Ot(K),Ot(it),Ot(Lt),Ot(it),Ot(P),Ot(Lt);const tt=s.length/3,St=b.generateSideWallUV(n,s,tt-6,tt-3,tt-2,tt-1);Qt(St[0]),Qt(St[1]),Qt(St[3]),Qt(St[1]),Qt(St[2]),Qt(St[3])}function Ot(K){s.push(l[K*3+0]),s.push(l[K*3+1]),s.push(l[K*3+2])}function Qt(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return z_(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Qa[s.type]().fromJSON(s)),new bl(n,t.options)}}const O_={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],h=t[s*3],c=t[s*3+1];return[new J(r,o),new J(a,l),new J(h,c)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[n*3],c=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-c)<Math.abs(o-h)?[new J(o,1-l),new J(h,1-d),new J(u,1-g),new J(_,1-p)]:[new J(a,1-l),new J(c,1-d),new J(f,1-g),new J(m,1-p)]}};function z_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ws extends Eo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ws(t.radius,t.detail)}}class Js extends Me{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],h=[],c=[];let d=t;const u=(e-t)/s,f=new R,g=new J;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),h.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,c.push(g.x,g.y)}d+=u}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const b=p+m,M=b,y=b+n+1,D=b+n+2,T=b+1;a.push(M,y,T),a.push(y,D,T)}}this.setIndex(a),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Js(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ze extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let h=0;const c=[],d=new R,u=new R,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const b=[],M=p/n;let y=0;p===0&&o===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let D=0;D<=e;D++){const T=D/e;d.x=-t*Math.cos(s+T*r)*Math.sin(o+M*a),d.y=t*Math.cos(o+M*a),d.z=t*Math.sin(s+T*r)*Math.sin(o+M*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(T+y,1-M),b.push(h++)}c.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){const M=c[p][b+1],y=c[p][b],D=c[p+1][b],T=c[p+1][b+1];(p!==0||o>0)&&f.push(M,y,T),(p!==n-1||l<Math.PI)&&f.push(y,D,T)}this.setIndex(f),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ze(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class El extends Eo{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new El(t.radius,t.detail)}}class fo extends Me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],h=[],c=new R,d=new R,u=new R;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),c.x=t*Math.cos(_),c.y=t*Math.sin(_),u.subVectors(d,c).normalize(),l.push(u.x,u.y,u.z),h.push(g/s),h.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,b=(s+1)*f+g;o.push(_,m,b),o.push(m,p,b)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class B_ extends dn{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class nn extends Ti{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Su extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class k_ extends Su{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ha=new Zt,sh=new R,rh=new R;class G_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _l,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(sh),rh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rh),e.updateMatrixWorld(),ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ha),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ha)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class H_ extends G_{constructor(){super(new So(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class V_ extends Su{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new H_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class bu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=oh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=oh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function oh(){return performance.now()}const ah=new Zt;class W_{constructor(t,e,n=0,s=1/0){this.ray=new Mo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ah.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ah),this}intersectObject(t,e=!0,n=[]){return nl(t,this,n,e),n.sort(lh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)nl(t[s],this,n,e);return n.sort(lh),n}}function lh(i,t){return i.distance-t.distance}function nl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)nl(r[o],t,e,!0)}}class ch{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ee(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class X_ extends Ei{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ol);const hh={type:"change"},wl={type:"start"},Eu={type:"end"},zr=new Mo,uh=new Bn,Y_=Math.cos(70*ks.DEG2RAD),be=new R,Xe=2*Math.PI,fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ua=1e-6;class q_ extends X_{constructor(t,e=null){super(t,e),this.state=fe.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:es.ROTATE,MIDDLE:es.DOLLY,RIGHT:es.PAN},this.touches={ONE:Ki.ROTATE,TWO:Ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new sn,this._lastTargetPosition=new R,this._quat=new sn().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ch,this._sphericalDelta=new ch,this._scale=1,this._panOffset=new R,this._rotateStart=new J,this._rotateEnd=new J,this._rotateDelta=new J,this._panStart=new J,this._panEnd=new J,this._panDelta=new J,this._dollyStart=new J,this._dollyEnd=new J,this._dollyDelta=new J,this._dollyDirection=new R,this._mouse=new J,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=j_.bind(this),this._onPointerDown=$_.bind(this),this._onPointerUp=Z_.bind(this),this._onContextMenu=ix.bind(this),this._onMouseWheel=Q_.bind(this),this._onKeyDown=tx.bind(this),this._onTouchStart=ex.bind(this),this._onTouchMove=nx.bind(this),this._onMouseDown=K_.bind(this),this._onMouseMove=J_.bind(this),this._interceptControlDown=sx.bind(this),this._interceptControlUp=rx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hh),this.update(),this.state=fe.NONE}update(t=null){const e=this.object.position;be.copy(e).sub(this.target),be.applyQuaternion(this._quat),this._spherical.setFromVector3(be),this.autoRotate&&this.state===fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Xe:n>Math.PI&&(n-=Xe),s<-Math.PI?s+=Xe:s>Math.PI&&(s-=Xe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(be.setFromSpherical(this._spherical),be.applyQuaternion(this._quatInverse),e.copy(this.target).add(be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=be.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const h=new R(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(a),this.object.updateMatrixWorld(),o=be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(zr.origin.copy(this.object.position),zr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zr.direction))<Y_?this.object.lookAt(this.target):(uh.setFromNormalAndCoplanarPoint(this.object.up,this.target),zr.intersectPlane(uh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ua||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ua||this._lastTargetPosition.distanceToSquared(this.target)>ua?(this.dispatchEvent(hh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Xe/60*this.autoRotateSpeed*t:Xe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){be.setFromMatrixColumn(e,0),be.multiplyScalar(-t),this._panOffset.add(be)}_panUp(t,e){this.screenSpacePanning===!0?be.setFromMatrixColumn(e,1):(be.setFromMatrixColumn(e,0),be.crossVectors(this.object.up,be)),be.multiplyScalar(t),this._panOffset.add(be)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;be.copy(s).sub(this.target);let r=be.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Xe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Xe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Xe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Xe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new J,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function $_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function j_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Z_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Eu),this.state=fe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function K_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case es.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=fe.DOLLY;break;case es.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=fe.ROTATE}break;case es.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=fe.PAN}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(wl)}function J_(i){switch(this.state){case fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Q_(i){this.enabled===!1||this.enableZoom===!1||this.state!==fe.NONE||(i.preventDefault(),this.dispatchEvent(wl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Eu))}function tx(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function ex(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ki.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=fe.TOUCH_ROTATE;break;case Ki.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=fe.TOUCH_PAN;break;default:this.state=fe.NONE}break;case 2:switch(this.touches.TWO){case Ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=fe.TOUCH_DOLLY_PAN;break;case Ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=fe.TOUCH_DOLLY_ROTATE;break;default:this.state=fe.NONE}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(wl)}function nx(i){switch(this._trackPointer(i),this.state){case fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=fe.NONE}}function ix(i){this.enabled!==!1&&i.preventDefault()}function sx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function rx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ox={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class nr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ax=new So(-1,1,1,-1,0,1);class lx extends Me{constructor(){super(),this.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new te([0,2,0,0,2,0],2))}}const cx=new lx;class wu{constructor(t){this._mesh=new re(cx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ax)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Tu extends nr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof dn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=gl.clone(t.uniforms),this.material=new dn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new wu(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class dh extends nr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class hx extends nr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class ux{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new J);this._width=n.width,this._height=n.height,e=new Cn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Tu(ox),this.copyPass.material.blending=Gn,this.clock=new bu}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}dh!==void 0&&(o instanceof dh?n=!0:o instanceof hx&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new J);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const dx={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class fx extends nr{constructor(){super();const t=dx;this.uniforms=gl.clone(t.uniforms),this.material=new B_({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new wu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Jt.getTransfer(this._outputColorSpace)===ae&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Dh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ih?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Uh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===al?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Nh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Fh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const q=280,Ht=210,ce=q*Ht,ft=(i,t,e,n)=>({x0:i,z0:t,x1:e,z1:n}),to=0,xn=1,Xs=2,Tl=3,It={platform:ft(18,14,122,20),concourse:ft(58,20,82,34),forecourt:ft(26,34,114,53),bypassPassage:ft(9,40,26,46),bypassNorth:ft(4,40,9,53),road:ft(0,53,280,63),busStand:ft(196,8,276,53),lane0:ft(4,63,9,124),lane1:ft(20,63,25,124),lane2:ft(88,63,94,124),lane3:ft(182,63,187,124),lane4:ft(236,63,242,124),alleyW:ft(4,92,94,96),alleyE:ft(182,92,242,96),templeEntry:ft(125,63,131,68),templeCourt:ft(112,68,168,116),templeExit:ft(150,116,156,124),hold:ft(250,63,278,120),promenade:ft(4,124,250,134),bridge:ft(146,134,152,176),bank:ft(60,176,275,184),camp:ft(100,184,275,208)},pi=ft(132,86,148,102),Au=ft(30,20,110,34),Os=ft(0,4,160,14),px=ft(0,150,280,176),Fe=[ft(12,134,42,150),ft(52,134,82,150),ft(98,134,140,150),ft(160,134,190,150),ft(205,134,240,150)],Qs=144,Al=[ft(26,52,114,53),ft(196,52,276,53),ft(250,64,278,65)],Cl=(()=>{const i=[];for(let t=104;t+5<=272;t+=9)for(const e of[187,194,201])i.push(ft(t,e,t+5,e+4));return i})(),Rl=[ft(202,30,214,33),ft(218,30,230,33),ft(234,30,246,33),ft(250,30,262,33),ft(202,40,214,43),ft(250,40,262,43)],ni=[{id:"A",name:"Gate A · Station",rect:ft(64,52,76,53),fixed:"open",zone:"forecourt",axis:"x"},{id:"W",name:"Gate W · West exit",rect:ft(20,40,21,46),fixed:"closed",zone:"bypass",axis:"z"},{id:"G",name:"Gate G · Bus stand",rect:ft(224,52,236,53),fixed:"open",zone:"bus",axis:"x"},{id:"F",name:"Gate F · West Lane",rect:ft(20,63,25,64),fixed:"open",zone:"lane1",axis:"x"},{id:"B",name:"Gate B · Bazaar Lane",rect:ft(88,63,94,64),fixed:"open",zone:"lane2",axis:"x"},{id:"E",name:"Gate E · Temple in",rect:ft(125,66,131,67),fixed:"in",locked:!0,zone:"temple",axis:"x"},{id:"T",name:"Gate T · Temple out",rect:ft(150,118,156,119),fixed:"out",locked:!0,zone:"temple",axis:"x"},{id:"J",name:"Gate J · Temple Lane",rect:ft(182,63,187,64),fixed:"open",zone:"lane3",axis:"x"},{id:"D",name:"Gate D · Diversion",rect:ft(236,63,242,64),fixed:"closed",zone:"lane4",axis:"x"},{id:"H",name:"Gate H · Holding",rect:ft(258,64,270,65),fixed:"closed",zone:"hold",axis:"x"},{id:"C",name:"Gate C · Bridge",rect:ft(146,135,152,136),fixed:"open",zone:"bridge",axis:"x"}];Object.fromEntries(ni.map((i,t)=>[i.id,t]));const we=[{id:"platform",name:"Station Platform",short:"Platform",rects:[It.platform,It.concourse],kind:"station",cap:2.5},{id:"forecourt",name:"Station Forecourt",short:"Forecourt",rects:[It.forecourt],kind:"plaza",cap:2.5},{id:"bypass",name:"West Exit Path",short:"West Exit",rects:[ft(4,34,26,53)],kind:"lane",cap:2},{id:"bus",name:"Bus Stand",short:"Bus Stand",rects:[It.busStand],kind:"bus",cap:2.5},{id:"roadW",name:"Main Road (west)",short:"Road W",rects:[ft(0,53,140,63)],kind:"road",cap:2},{id:"roadE",name:"Main Road (east)",short:"Road E",rects:[ft(140,53,280,63)],kind:"road",cap:2},{id:"lane0",name:"Riverside Path",short:"Riverside",rects:[It.lane0],kind:"lane",cap:2},{id:"lane1",name:"West Lane",short:"West Lane",rects:[It.lane1],kind:"lane",cap:2,gate:"F"},{id:"lane2",name:"Bazaar Lane",short:"Bazaar Lane",rects:[It.lane2],kind:"lane",cap:2,gate:"B"},{id:"lane3",name:"Temple Lane",short:"Temple Lane",rects:[It.lane3],kind:"lane",cap:2,gate:"J"},{id:"lane4",name:"Diversion Lane",short:"Diversion",rects:[It.lane4],kind:"lane",cap:2,gate:"D"},{id:"alleyW",name:"West Cross Alley",short:"W Alley",rects:[It.alleyW],kind:"alley",cap:2},{id:"alleyE",name:"East Cross Alley",short:"E Alley",rects:[It.alleyE],kind:"alley",cap:2},{id:"temple",name:"Temple Courtyard",short:"Temple",rects:[ft(110,63,170,124)],kind:"temple",cap:2.5},{id:"hold",name:"Holding Ground",short:"Holding",rects:[It.hold],kind:"hold",cap:3},{id:"promW",name:"Promenade (west)",short:"Prom W",rects:[ft(4,124,96,134)],kind:"promenade",cap:2},{id:"promC",name:"Promenade (central)",short:"Prom C",rects:[ft(96,124,158,134)],kind:"promenade",cap:2},{id:"promE",name:"Promenade (east)",short:"Prom E",rects:[ft(158,124,250,134)],kind:"promenade",cap:2},{id:"ghat1",name:"Ghat 1",short:"Ghat 1",rects:[Fe[0]],kind:"ghat",cap:2.5},{id:"ghat2",name:"Ghat 2",short:"Ghat 2",rects:[Fe[1]],kind:"ghat",cap:2.5},{id:"ghat3",name:"Ghat 3 · Ram Kund",short:"Ghat 3",rects:[Fe[2]],kind:"ghat",cap:2.5},{id:"ghat4",name:"Ghat 4",short:"Ghat 4",rects:[Fe[3]],kind:"ghat",cap:2.5},{id:"ghat5",name:"Ghat 5",short:"Ghat 5",rects:[Fe[4]],kind:"ghat",cap:2.5},{id:"bridge",name:"Footbridge",short:"Bridge",rects:[It.bridge],kind:"bridge",cap:2,gate:"C"},{id:"bank",name:"South Bank Road",short:"Bank",rects:[It.bank],kind:"road",cap:2},{id:"camp",name:"Sadhugram Camp",short:"Camp",rects:[It.camp],kind:"camp",cap:2.5}],Iv=Object.fromEntries(we.map((i,t)=>[i.id,t])),tr=255,Ls=i=>ft(i.x0+1,Qs,i.x1-1,150),il=[{id:"g1",name:"Ghat 1",cls:"in",rects:[Ls(Fe[0])],zone:"ghat1"},{id:"g2",name:"Ghat 2",cls:"in",rects:[Ls(Fe[1])],zone:"ghat2"},{id:"g3",name:"Ghat 3",cls:"in",rects:[Ls(Fe[2])],zone:"ghat3"},{id:"g4",name:"Ghat 4",cls:"in",rects:[Ls(Fe[3])],zone:"ghat4"},{id:"g5",name:"Ghat 5",cls:"in",rects:[Ls(Fe[4])],zone:"ghat5"},{id:"temple",name:"Temple darshan",cls:"in",rects:[ft(126,74,154,84)],zone:"temple"},{id:"station",name:"Station",cls:"out",rects:[It.platform]},{id:"busstop",name:"Bus stand",cls:"out",rects:[ft(198,10,274,24)]},{id:"campdest",name:"Camp",cls:"out",rects:[ft(100,186,275,208)]},{id:"holddest",name:"Holding ground",cls:"neutral",rects:[ft(252,72,277,118)],zone:"hold"},{id:"shelter",name:"Shelter",cls:"neutral",rects:[It.concourse,ft(114,108,168,116),ft(198,8,274,14),ft(252,96,277,118),ft(100,186,275,208)]},{id:"escape",name:"Open ground",cls:"neutral",rects:[It.forecourt,It.road,ft(252,66,277,118),It.camp,It.busStand]}],Uv=0,Nv=5,Fv=6,Ov=7,zv=8,Bv=9,mx=10,kv=11,Gv=il.length;function gx(i,t){if(t>=134&&t<150){for(const e of Fe)if(i>=e.x0&&i<e.x1)return t<Qs?-Math.floor((t-134)/2)*.22-.22:-1.55;if(i>=It.bridge.x0&&i<It.bridge.x1)return .35}return t>=150&&t<176&&i>=It.bridge.x0&&i<It.bridge.x1?.35:0}const eo=(i,t,e)=>t>=i.x0&&t<i.x1&&e>=i.z0&&e<i.z1;function ln(i,t,e){for(let n=Math.max(0,t.z0);n<Math.min(Ht,t.z1);n++)for(let s=Math.max(0,t.x0);s<Math.min(q,t.x1);s++)i[n*q+s]=e}function _x(){const i=new Uint8Array(ce).fill(xn);ln(i,px,Xs);for(const c of Object.values(It))ln(i,c,to);for(const c of Fe)ln(i,ft(c.x0,c.z0,c.x1,Qs),to),ln(i,ft(c.x0,Qs,c.x1,150),Tl);ln(i,pi,xn);for(const c of Al)ln(i,c,xn);for(const c of Cl)ln(i,c,xn);for(const c of Rl)ln(i,c,xn);const t=new Int8Array(ce).fill(-1);ni.forEach((c,d)=>{ln(i,c.rect,to),ln(t,c.rect,d)});const e=new Uint8Array(ce).fill(tr);for(let c=0;c<Ht;c++)for(let d=0;d<q;d++){const u=c*q+d;if(!(i[u]===xn||i[u]===Xs)){for(let f=0;f<we.length;f++)if(we[f].rects.some(g=>eo(g,d,c))){e[u]=f;break}}}const n=il.map(c=>{const d=new Uint8Array(ce);for(const u of c.rects)ln(d,u,1);for(let u=0;u<ce;u++)(i[u]===xn||i[u]===Xs)&&(d[u]=0);return d}),s=new Int8Array(ce).fill(-1);il[mx].rects.forEach((c,d)=>ln(s,c,d));const r=new Float32Array(we.length),o=new Float64Array(we.length),a=new Float64Array(we.length);for(let c=0;c<ce;c++){const d=e[c];d!==tr&&(r[d]++,o[d]+=c%q+.5,a[d]+=Math.floor(c/q)+.5)}const l=we.map((c,d)=>({x:o[d]/Math.max(1,r[d]),z:a[d]/Math.max(1,r[d])})),h=new Float32Array(ce);for(let c=0;c<Ht;c++)for(let d=0;d<q;d++)h[c*q+d]=gx(d+.5,c+.5);return{base:i,zone:e,gateCell:t,destMask:n,shelterPart:s,zoneArea:r,zoneCenter:l,height:h}}const Br=10,kr=14,fh=1073741823,hi=new Int32Array(ce),po=64,sl=Array.from({length:po},()=>new Int32Array(1024)),Ys=new Int32Array(po);function ph(i,t){let e=sl[i];if(Ys[i]>=e.length){const n=new Int32Array(e.length*2);n.set(e),sl[i]=e=n}e[Ys[i]++]=t}function Hv(i,t,e,n){const s=n??{dist:new Float32Array(ce),dirX:new Float32Array(ce),dirZ:new Float32Array(ce)};hi.fill(fh),Ys.fill(0);let r=0;for(let u=0;u<ce;u++)e[u]&&i[u]&&(hi[u]=0,ph(0,u),r++);let o=0,a=0;for(;r>0;){for(;Ys[o]===0;)o=(o+1)%po,a++;const u=sl[o][--Ys[o]];r--;const f=hi[u];if(f!==a)continue;const g=u%q,_=u/q|0,m=g>0,p=g<q-1,b=_>0,M=_<Ht-1,y=m&&i[u-1]===1,D=p&&i[u+1]===1,T=b&&i[u-q]===1,C=M&&i[u+q]===1;y&&(r+=l(u-1,f+Br)),D&&(r+=l(u+1,f+Br)),T&&(r+=l(u-q,f+Br)),C&&(r+=l(u+q,f+Br)),y&&T&&i[u-q-1]&&(r+=l(u-q-1,f+kr)),D&&T&&i[u-q+1]&&(r+=l(u-q+1,f+kr)),y&&C&&i[u+q-1]&&(r+=l(u+q-1,f+kr)),D&&C&&i[u+q+1]&&(r+=l(u+q+1,f+kr))}function l(u,f){return f+=t[u],f<hi[u]?(hi[u]=f,ph(f%po,u),1):0}const{dist:h,dirX:c,dirZ:d}=s;for(let u=0;u<ce;u++)h[u]=hi[u]>=fh?1/0:hi[u]/10;for(let u=0;u<ce;u++){const f=h[u];if(c[u]=0,d[u]=0,!isFinite(f)||f===0)continue;const g=u%q,_=u/q|0;let m=0,p=0;for(let M=-1;M<=1;M++){const y=_+M;if(!(y<0||y>=Ht))for(let D=-1;D<=1;D++){if(!D&&!M)continue;const T=g+D;if(T<0||T>=q)continue;const C=h[y*q+T];if(!isFinite(C))continue;const L=D&&M?1.41421356:1,x=(f-C)/L;x>0&&(m+=D/L*x,p+=M/L*x)}}const b=Math.hypot(m,p);b>1e-6&&(c[u]=m/b,d[u]=p/b)}return s}const no=1e12;function mh(i,t,e,n,s){let r=0;n[0]=0,s[0]=-no,s[1]=no;for(let o=1;o<t;o++){let a=(i[o]+o*o-(i[n[r]]+n[r]*n[r]))/(2*o-2*n[r]);for(;a<=s[r];)r--,a=(i[o]+o*o-(i[n[r]]+n[r]*n[r]))/(2*o-2*n[r]);r++,n[r]=o,s[r]=a,s[r+1]=no}r=0;for(let o=0;o<t;o++){for(;s[r+1]<o;)r++;e[o]=(o-n[r])*(o-n[r])+i[n[r]]}}function xx(i,t){const e=t??new Float32Array(ce),n=Math.max(q,Ht),s=new Float64Array(n),r=new Float64Array(n),o=new Float64Array(n+1),a=new Int32Array(n),l=new Float64Array(ce);for(let h=0;h<q;h++){for(let c=0;c<Ht;c++)s[c]=i[c*q+h]?0:no;mh(s,Ht,r,a,o);for(let c=0;c<Ht;c++)l[c*q+h]=r[c]}for(let h=0;h<Ht;h++){for(let c=0;c<q;c++)s[c]=l[h*q+c];mh(s,q,r,a,o);for(let c=0;c<q;c++)e[h*q+c]=Math.sqrt(r[c])}return e}function Vv(i,t){const e=t??new Int32Array(ce);e.fill(-1);const n=new Int32Array(ce);let s=0,r=0;for(let o=0;o<ce;o++)i[o]&&(e[o]=o,n[r++]=o);for(;s<r;){const o=n[s++],a=o%q,l=o/q|0,h=e[o];a>0&&e[o-1]<0&&(e[o-1]=h,n[r++]=o-1),a<q-1&&e[o+1]<0&&(e[o+1]=h,n[r++]=o+1),l>0&&e[o-q]<0&&(e[o-q]=h,n[r++]=o-q),l<Ht-1&&e[o+q]<0&&(e[o+q]=h,n[r++]=o+q)}return e}const $i=70,gh=53,ji=4;function vx(i,t,e){for(let n=0;n<Ht;n++){const s=n*q;for(let r=0;r<q;r++){const o=r>1?i[s+r-2]:0,a=r>0?i[s+r-1]:0,l=r<q-1?i[s+r+1]:0,h=r<q-2?i[s+r+2]:0;e[s+r]=(o+4*a+6*i[s+r]+4*l+h)*.0625}}for(let n=0;n<Ht;n++){const s=n*q;for(let r=0;r<q;r++){const o=n>1?e[s-2*q+r]:0,a=n>0?e[s-q+r]:0,l=n<Ht-1?e[s+q+r]:0,h=n<Ht-2?e[s+2*q+r]:0;t[s+r]=(o+4*a+6*e[s+r]+4*l+h)*.0625}}}function Gr(i){const t=[];for(let e=0;e<ce;e++)i(e)&&t.push(e);return Int32Array.from(t)}let Hr=null;function Cu(){if(Hr)return Hr;const i=_x(),{base:t}=i,e=new Uint8Array(ce);for(let c=0;c<ce;c++)e[c]=t[c]===xn||t[c]===Xs?1:0;const n=xx(e),s=new Uint8Array(ce);for(let c=0;c<ce;c++){let d=0;n[c]<=1.01?d=9:n[c]<=2.01&&(d=3),t[c]===Tl&&(d+=6),s[c]=d}const r=new Float32Array(ce);for(let c=0;c<ce;c++)r[c]=e[c]?0:1;const o=new Float32Array(ce);vx(r,o,new Float32Array(ce));const a=i.destMask.map(c=>Gr(d=>c[d]===1)),l=c=>t[c]!==xn&&t[c]!==Xs,h={train:Gr(c=>l(c)&&eo({x0:22,z0:15,x1:118,z1:19},c%q,c/q|0)),bus:Gr(c=>l(c)&&eo({x0:200,z0:26,x1:272,z1:46},c%q,c/q|0)),camp:Gr(c=>l(c)&&eo(It.camp,c%q,c/q|0)&&(c/q|0)>186)};return Hr={world:i,staticCost:s,walkBlur:o,destCells:a,spawnCells:h},Hr}function Ru(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Me;let h=0;for(let c=0;c<i.length;++c){const d=i[c];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,f,c),h+=f}}if(e){let c=0;const d=[];for(let u=0;u<i.length;++u){const f=i[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+c);c+=i[u].attributes.position.count}l.setIndex(d)}for(const c in r){const d=_h(r[c]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,d)}for(const c in o){const d=o[c][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let u=0;u<d;++u){const f=[];for(let _=0;_<o[c].length;++_)f.push(o[c][_][u]);const g=_h(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function _h(i){let t,e,n,s=-1,r=0;for(let h=0;h<i.length;++h){const c=i[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*e}const o=new t(r),a=new De(o,e,n);let l=0;for(let h=0;h<i.length;++h){const c=i[h];if(c.isInterleavedBufferAttribute){const d=l/e;for(let u=0,f=c.count;u<f;u++)for(let g=0;g<e;g++){const _=c.getComponent(u,g);a.setComponent(u+d,g,_)}}else o.set(c.array,l);l+=c.count*e}return s!==void 0&&(a.gpuType=s),a}const Ds=new R;function cn(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Ds.copy(t),Ds[n]=0,Ds.normalize();const h=.5*o/(o+a),c=1-Ds.angleTo(i)/l;return Math.sign(Ds[e])===1?c*h:a/(o+a)+h+h*(1-c)}class Pu extends un{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new R,l=new R,h=new R(t,e,n).divideScalar(2).subScalar(r),c=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,f=c.length/6,g=new R,_=.5/s;for(let m=0,p=0;m<c.length;m+=3,p+=2)switch(a.fromArray(c,m),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),c[m+0]=h.x*Math.sign(a.x)+l.x*r,c[m+1]=h.y*Math.sign(a.y)+l.y*r,c[m+2]=h.z*Math.sign(a.z)+l.z*r,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),u[p+0]=cn(g,l,"z","y",r,n),u[p+1]=1-cn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),u[p+0]=1-cn(g,l,"z","y",r,n),u[p+1]=1-cn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),u[p+0]=1-cn(g,l,"x","z",r,t),u[p+1]=cn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),u[p+0]=1-cn(g,l,"x","z",r,t),u[p+1]=1-cn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),u[p+0]=1-cn(g,l,"x","y",r,t),u[p+1]=1-cn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),u[p+0]=cn(g,l,"x","y",r,t),u[p+1]=1-cn(g,l,"y","x",r,e);break}}}const he=i=>i-q/2,ue=i=>i-Ht/2,Is=new zt;function Ye(i){const t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)}class xh{geos=[];ao=!0;push(t,e,n,s={}){let r=t.index?t.toNonIndexed():t.clone();r.deleteAttribute("uv"),r.getAttribute("uv1")&&r.deleteAttribute("uv1"),r.applyMatrix4(n);const o=r.getAttribute("position"),a=new Float32Array(o.count*3);Is.set(e),s.jitter&&Is.offsetHSL(0,0,(Math.random()-.5)*s.jitter);const l=s.ao??this.ao;for(let h=0;h<o.count;h++){const c=o.getY(h),d=l?.7+.3*ks.smoothstep(c,-.2,3.2):1;a[h*3]=Is.r*d,a[h*3+1]=Is.g*d,a[h*3+2]=Is.b*d}r.setAttribute("color",new De(a,3)),this.geos.push(r),t.dispose()}box(t,e,n,s,r,o,a,l=0,h){const c=Math.max(.01,n-t),d=Math.max(.01,s-e),u=Math.max(.01,o-r),f=Math.min(l,c/2-.001,d/2-.001,u/2-.001),g=f>.02?new Pu(c,u,d,1,f):new un(c,u,d),_=new Zt().makeTranslation(he((t+n)/2),(r+o)/2,ue((e+s)/2));this.push(g,a,_,h)}at(t,e,n,s,r,o=0,a=1,l=a,h=a,c){const d=new Zt().compose(new R(he(n),s,ue(r)),new sn().setFromAxisAngle(new R(0,1,0),o),new R(a,l,h));this.push(t,e,d,c)}build(t,e=!0){const n=Ru(this.geos,!1);n.computeBoundingSphere();for(const r of this.geos)r.dispose();this.geos=[];const s=new re(n,t);return s.castShadow=e,s.receiveShadow=!0,s.matrixAutoUpdate=!1,s}get size(){return this.geos.length}}function yx(i,t={}){const e=new nn({vertexColors:!0,roughness:.92,metalness:0,...t});return e.onBeforeCompile=n=>{n.uniforms.uLensDim=i,n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform float uLensDim;`).replace("#include <color_fragment>",`#include <color_fragment>
        float lum = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(lum) * 0.9 + 0.08, uLensDim * 0.78);`)},e}const gt={board:"#8a6a4c",land:"#e3cfab",riverbed:"#8f7c5e",road:"#b8a690",roadLine:"#f4eee2",lane:"#d9c29c",plaza:"#e2d3b8",platform:"#cdbfa9",yellow:"#f2c14e",court:"#ece1cc",grass:"#b7c58c",prom:"#ecd9b5",bank:"#e4cfa0",stone:"#d6c19b",step:"#e0cda9",temple:"#4f4746",templeLight:"#6a605c",wall:"#cdb48f",saffron:"#ff8c1a",gold:"#e0a526",bamboo:"#c9a35c",cream:"#f1dfc3",maroon:"#8c2f39",rail:"#7d7a78",ballast:"#a69d92",sleeper:"#7a5c45",busRed:"#c8352e",tree:["#7fae6a","#6a9c5a","#93bd73","#78a565"],trunk:"#8b6748",houses:["#f4b6a6","#f6d58e","#a8d0e6","#f7efe2","#c9b6e4","#f2b47a","#b5dcb0","#e8c5a0","#f3e3c3","#9fd3c7","#f0a3a3"],awnings:["#e4572e","#f3a712","#29a19c","#d7263d","#6a4c93","#2e86ab","#ff7f11"],field:"#b9cb85",field2:"#a9bf72",tent:["#fbf4e6","#ffb347","#f6e3c0","#ff9f43"]},Mx=i=>i===to||i===Tl;function Sx(i){const t={value:0},e=yx(t),n=new nn({color:"#fff3c4",emissive:"#ffcf70",emissiveIntensity:.6,roughness:.6}),s=new Ve,r=new xh,o=new xh;o.ao=!1;const a=[],l=[];r.box(-6,-6,q+6,Ht+6,-7,-2.6,gt.board,2.5,{ao:!1}),r.box(0,0,q,134,-2.6,0,gt.land,0,{ao:!1}),r.box(0,176,q,Ht,-2.6,0,gt.land,0,{ao:!1}),r.box(0,134,q,176,-2.8,-2.6,gt.riverbed,0,{ao:!1});const c=[0,...Fe.map(x=>[x.x0,x.x1]).flat(),It.bridge.x0,It.bridge.x1,q].sort((x,v)=>x-v);for(let x=0;x<c.length-1;x++){const v=c[x],A=c[x+1];if(A-v<.5)continue;const O=(v+A)/2,F=Fe.some(V=>O>V.x0&&O<V.x1),z=O>It.bridge.x0&&O<It.bridge.x1;if(F){for(let V=0;V<5;V++)r.box(v,134+2*V,A,136+2*V,-2.6,-.22*(V+1),gt.step,0,{ao:!1});r.box(v,Qs,A,150,-2.6,-1.55,gt.riverbed,0,{ao:!1})}else z||(r.box(v,134,A,151,-2.6,.3,gt.stone,.3),A-v>6?Ex(r,O,141,A-v>10?1.3:1):A-v>3&&vh(r,O,142,gt.awnings[x%gt.awnings.length]))}Fe.forEach((x,v)=>{for(let A=x.x0+2;A<x.x1-1;A+=5.5)Ye(A*3+v)<.55&&vh(r,A,135.2,gt.awnings[(v+Math.floor(A))%gt.awnings.length],.8,-.2)});const d=(x,v,A=.04)=>r.box(x.x0,x.z0,x.x1,x.z1,-.02,A,v,0,{ao:!1});d(It.road,gt.road);for(let x=2;x<q;x+=6)r.box(x,57.8,x+3,58.2,.04,.06,gt.roadLine,0,{ao:!1});for(const x of[It.lane0,It.lane1,It.lane2,It.lane3,It.lane4])for(let v=x.x0+.3;v<x.x1-.3;v+=1.1)r.box(v,59,v+.55,62.6,.04,.065,gt.roadLine,0,{ao:!1});for(const x of["lane0","lane1","lane2","lane3","lane4","alleyW","alleyE","bypassPassage","bypassNorth"])d(It[x],gt.lane);d(It.forecourt,gt.plaza),d(It.platform,gt.platform,.06),r.box(It.platform.x0,14,It.platform.x1,14.5,.06,.08,gt.yellow,0,{ao:!1}),d(It.concourse,"#eadfcd"),d(It.busStand,"#c9bea9"),d(It.templeEntry,gt.court),d(It.templeCourt,gt.court),d(It.templeExit,gt.court),d(It.hold,gt.grass),d(It.promenade,gt.prom),d(It.bank,gt.bank),d(It.camp,"#e9d7ad"),r.box(126,74,154,84,.04,.06,"#f5ead6",0,{ao:!1});const u=new Uint8Array(q*Ht),f=x=>{for(let v=Math.max(0,x.z0);v<Math.min(Ht,x.z1);v++)for(let A=Math.max(0,x.x0);A<Math.min(q,x.x1);A++)u[v*q+A]=1};f(Au),f(Os),f(pi),f({x0:110,z0:63,x1:170,z1:124}),f({x0:0,z0:0,x1:q,z1:4});for(const x of Al)f(x);for(const x of Cl)f(x);for(const x of Rl)f(x);f({x0:0,z0:134,x1:q,z1:Ht});const g=i.base,_=new Uint8Array(q*Ht),m=(x,v)=>x>=0&&v>=0&&x<q&&v<Ht&&g[v*q+x]===xn&&!u[v*q+x]&&!_[v*q+x];let p=1;for(let x=0;x<Ht;x++)for(let v=0;v<q;v++){if(!m(v,x))continue;const A=6+Math.floor(Ye(p++)*8),O=6+Math.floor(Ye(p++)*8);let F=0;for(;F<A&&m(v+F,x);)F++;let z=1;t:for(;z<O;){for(let V=0;V<F;V++)if(!m(v+V,x+z))break t;z++}for(let V=x;V<x+z;V++)for(let G=v;G<v+F;G++)_[V*q+G]=1;bx(r,o,g,{x0:v,z0:x,x1:v+F,z1:x+z},p++)}const b=new Uint8Array(q*Ht),M=(x,v)=>x>=110&&x<170&&v>=63&&v<124&&g[v*q+x]===xn&&!(x>=pi.x0&&x<pi.x1&&v>=pi.z0&&v<pi.z1)&&!b[v*q+x];for(let x=63;x<124;x++)for(let v=110;v<170;v++){if(!M(v,x))continue;let A=0;for(;M(v+A,x)&&A<30;)A++;let O=1;t:for(;O<30;){for(let F=0;F<A;F++)if(!M(v+F,x+O))break t;O++}for(let F=x;F<x+O;F++)for(let z=v;z<v+A;z++)b[F*q+z]=1;r.box(v+.1,x+.1,v+A-.1,x+O-.1,0,3.6,gt.wall,.25),r.box(v,x,v+A,x+O,3.6,4,"#bfa47c",.15)}wx(r,o);for(const[x,v,A]of[[125,131,66],[150,156,118]]){for(const O of[x-1.4,v+.2])r.box(O,A-1.2,O+1.2,A+1.2,0,6.5,gt.templeLight,.2);r.box(x-1.6,A-1.3,v+1.6,A+1.3,6.5,7.3,gt.temple,.25),r.at(new ze(1.2,10,6,0,Math.PI*2,0,Math.PI/2),gt.templeLight,(x+v)/2,7.3,A),r.at(new Pn(.25,.9,6),gt.gold,(x+v)/2,8.8,A)}Tx(r,o),Ax(r),Cx(r),Rx(r),Px(r,o),Lx(r),Dx(r),Ix(r);for(let x=10;x<248;x+=14)mo(r,o,x,124.6);for(let x=6;x<278;x+=18)mo(r,o,x,53.4);const y=[[60,125],[118,125],[196,125],[91,64.5],[184,64.5],[70,50.5],[264,66],[149,178],[22,64.5],[239,64.5]];for(const[x,v]of y)a.push(Ux(r,x,v));const D=[[96,125.5],[144,125.5],[186,125.5],[86,66],[150,176.6],[64,50]];for(const[x,v]of D)l.push(Nx(r,x,v));s.add(r.build(e)),s.add(o.build(n,!1));const T={value:0},C=new nn({color:"#4fa3ad",roughness:.25,metalness:.05,transparent:!0,opacity:.88});C.onBeforeCompile=x=>{x.uniforms.uTime=T,x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying float vWave;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        float w = sin(position.x * 0.35 + uTime * 1.3) * 0.5 + sin(position.y * 0.6 - uTime * 0.9) * 0.5;
        transformed.z += w * 0.06; vWave = w;`),x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
varying float vWave;`).replace("#include <color_fragment>",`#include <color_fragment>
 diffuseColor.rgb += vec3(0.05, 0.07, 0.07) * smoothstep(0.6, 1.0, vWave);`)};const L=new re(new Ai(q+10,41,140,30),C);return L.rotation.x=-Math.PI/2,L.position.set(he(q/2),-1,ue(156.5)),L.receiveShadow=!0,s.add(L),{group:s,clayMat:e,lampMat:n,waterMat:C,waterTime:T,lensDim:t,speakers:a,cameras:l}}function bx(i,t,e,n,s){const r=n.x1-n.x0,o=n.z1-n.z0,a=r<3||o<3,l=a?2.5+Ye(s)*2:3.5+Math.floor(Ye(s+1)*3.2)*2.6+Ye(s+2)*.8,h=gt.houses[Math.floor(Ye(s+3)*gt.houses.length)],c=.12;if(i.box(n.x0+c,n.z0+c,n.x1-c,n.z1-c,0,l,h,.45,{jitter:.04}),a)return;const d=new zt(h).offsetHSL(0,-.05,-.12).getStyle();i.box(n.x0+.05,n.z0+.05,n.x1-.05,n.z1-.05,l-.05,l+.35,d,.12),i.box(n.x0+.5,n.z0+.5,n.x1-.5,n.z1-.5,l+.05,l+.15,new zt(h).offsetHSL(0,-.1,.06).getStyle(),0);const u=Ye(s+4),f=(n.x0+n.x1)/2,g=(n.z0+n.z1)/2;u<.35?i.at(new Pe(.6,.6,1.1,10),"#3b3f45",n.x0+1.3,l+.7,n.z0+1.3):u<.55&&r>5&&o>5?i.box(n.x1-3,n.z0+.8,n.x1-.8,n.z0+3,l,l+2.2,h,.25):u<.65&&(i.at(new ze(1,10,6,0,Math.PI*2,0,Math.PI/2),"#fbf3e6",f,l+.1,g),i.at(new Pn(.15,.7,6),gt.gold,f,l+1.35,g)),Ye(s+5)<.22&&Pl(i,n.x1-.8,l+.1,n.z1-.8,2.6);const _=[],m=M=>M.filter(([y,D])=>y>=0&&D>=0&&y<q&&D<Ht&&Mx(e[D*q+y])).length>M.length*.5,p=(M,y)=>Array.from({length:Math.max(1,y-M)},(D,T)=>M+T);m(p(n.x0,n.x1).map(M=>[M,n.z1]))&&_.push(["s",0]),m(p(n.x0,n.x1).map(M=>[M,n.z0-1]))&&_.push(["n",0]),m(p(n.z0,n.z1).map(M=>[n.x0-1,M]))&&_.push(["w",0]),m(p(n.z0,n.z1).map(M=>[n.x1,M]))&&_.push(["e",0]);const b=gt.awnings[Math.floor(Ye(s+6)*gt.awnings.length)];for(const[M]of _){const y=Math.max(1,Math.floor((l-1)/2.6));if(M==="s"||M==="n"){const D=M==="s"?n.z1-.05:n.z0+.05,T=M==="s"?1:-1;i.box(n.x0+.4,Math.min(D,D+T*1.1),n.x1-.4,Math.max(D,D+T*1.1),2.5,2.75,b,.08);for(let C=1;C<y;C++)for(let L=n.x0+1.1;L<n.x1-1;L+=2.2)i.box(L,Math.min(D,D+T*.12),L+.9,Math.max(D,D+T*.12),.9+C*2.6,2.1+C*2.6,"#4a4552",.05,{ao:!1})}else{const D=M==="e"?n.x1-.05:n.x0+.05,T=M==="e"?1:-1;i.box(Math.min(D,D+T*1.1),n.z0+.4,Math.max(D,D+T*1.1),n.z1-.4,2.5,2.75,b,.08);for(let C=1;C<y;C++)for(let L=n.z0+1.1;L<n.z1-1;L+=2.2)i.box(Math.min(D,D+T*.12),L,Math.max(D,D+T*.12),L+.9,.9+C*2.6,2.1+C*2.6,"#4a4552",.05,{ao:!1})}}}function Pl(i,t,e,n,s){i.at(new Pe(.05,.05,s,5),"#6d5a48",t,e+s/2,n);const r=new Me;r.setAttribute("position",new te([0,0,0,1.3,-.35,0,0,-.7,0,0,0,0,0,-.7,0,1.3,-.35,0],3)),r.computeVertexNormals(),i.at(r,gt.saffron,t,e+s,n,Ye(t+n)*6.28)}function vh(i,t,e,n,s=1,r=.3){i.at(new Pe(.06,.06,3.2*s,5),"#6d5a48",t,r+1.6*s,e),i.at(new Pn(1.9*s,.9*s,10),n,t,r+3.25*s,e)}function Ex(i,t,e,n){i.box(t-2.2*n,e-2.2*n,t+2.2*n,e+2.2*n,.3,.7,"#e8d5b0",.15);for(const[s,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])i.box(t+s*1.6*n-.2,e+r*1.6*n-.2,t+s*1.6*n+.2,e+r*1.6*n+.2,.7,3.2*n,"#f1e3c8",.08);i.box(t-2*n,e-2*n,t+2*n,e+2*n,3.2*n,3.6*n,"#e8d5b0",.15),i.at(new ze(1.6*n,12,6,0,Math.PI*2,0,Math.PI/2),"#fbf3e6",t,3.6*n,e),i.at(new Pn(.18,.8,6),gt.gold,t,3.6*n+1.9*n,e)}function wx(i,t){const e=pi,n=(e.x0+e.x1)/2,s=(e.z0+e.z1)/2;i.box(e.x0,e.z0,e.x1,e.z1,0,1.4,gt.templeLight,.3),i.box(e.x0+1.2,e.z0+1.2,e.x1-1.2,e.z1-1.2,1.4,7.2,gt.temple,.35),i.box(e.x0+2.5,e.z0+.2,e.x1-2.5,e.z0+4.5,1.4,5.2,gt.temple,.3);for(const o of[-3.5,0,3.5])i.at(new ze(1.4,10,6,0,Math.PI*2,0,Math.PI/2),gt.templeLight,n+o,5.2,e.z0+2.3);const r=[[6.4,0],[6.2,2.2],[5.7,5],[4.8,8],[3.6,10.6],[2.3,12.4],[1.3,13.4],[.01,13.6]].map(([o,a])=>new J(o,a));i.at(new uo(r,4,Math.PI/4),gt.temple,n,7.2,s+1.2);for(const[o,a]of[[-4.4,-3.2],[4.4,-3.2],[-4.4,5.6],[4.4,5.6]])i.at(new uo(r,4,Math.PI/4),gt.templeLight,n+o,7.2,s+a,0,.32,.42,.32);i.at(new fo(1.25,.55,8,16),gt.templeLight,n,20.6,s+1.2,0,1,1,1),i.push(new fo(1.25,.55,8,16),gt.templeLight,new Zt().compose(new R(he(n),20.7,ue(s+1.2)),new sn().setFromEuler(new rn(Math.PI/2,0,0)),new R(1,1,1))),i.at(new ze(.6,10,8),gt.gold,n,21.8,s+1.2),i.at(new Pn(.3,1,8),gt.gold,n,22.8,s+1.2),Pl(i,n+.4,21.2,s+1.2,4.5);for(const[o,a]of[[114.5,70.5],[165.5,70.5]]){i.at(new Pe(.7,1,6,8),"#5d5552",o,3,a);for(let l=0;l<6;l++)t.at(new ze(.16,6,4),"#ffe9a8",o+Math.cos(l)*.9,1+l*.9,a+Math.sin(l)*.9)}}function Tx(i,t){const e=Au;for(const[n,s]of[[e.x0,58],[82,e.x1]]){i.box(n,e.z0,s,e.z1,0,7,gt.cream,.35),i.box(n-.2,e.z0-.2,s+.2,e.z1+.2,2.4,2.9,gt.maroon,.1),i.box(n-.3,e.z0-.3,s+.3,e.z1+.3,7,7.6,gt.maroon,.2);for(let r=n+1.5;r<s-1.5;r+=3)i.box(r,e.z1-.1,r+1.4,e.z1+.12,3.6,6,"#5a4a52",.05,{ao:!1}),i.box(r,e.z0-.12,r+1.4,e.z0+.1,3.6,6,"#5a4a52",.05,{ao:!1})}for(const n of[20.4,27,33.6])i.box(58,n-.4,82,n+.4,7.4,8.1,gt.maroon,.15),i.box(58.2,n-.4,59,n+.4,0,7.4,gt.cream,.1),i.box(81,n-.4,81.8,n+.4,0,7.4,gt.cream,.1);i.box(51,24,57,30,7,16,gt.cream,.3),i.box(50.6,23.6,57.4,30.4,15.6,16.4,gt.maroon,.2),i.at(new ze(3,12,8,0,Math.PI*2,0,Math.PI/2),"#a14a3b",54,16.4,27),i.at(new Pe(1.5,1.5,.2,18),"#fffaf0",54,12.5,30.3,0,1,1,1),i.push(new Pe(1.5,1.5,.2,18),"#fffaf0",new Zt().compose(new R(he(54),12.5,ue(30.35)),new sn().setFromEuler(new rn(Math.PI/2,0,0)),new R(1,1,1)),{ao:!1});for(let n=24;n<118;n+=8)i.box(n,17.6,n+.35,17.95,.06,4.3,"#6f7c86",0);i.box(22,16.8,118,19.8,4.3,4.6,"#7d9aa6",.1);for(const n of[6.5,10.5]){i.box(0,n-1.2,Os.x1,n+2.7,0,.25,gt.ballast,0,{ao:!1});for(let s=.5;s<Os.x1;s+=1.1)i.box(s,n-.6,s+.35,n+2.1,.25,.36,gt.sleeper,0,{ao:!1});i.box(0,n,Os.x1,n+.15,.36,.5,gt.rail,0,{ao:!1}),i.box(0,n+1.45,Os.x1,n+1.6,.36,.5,gt.rail,0,{ao:!1})}for(let n=32;n<112;n+=16)mo(i,t,n,36)}function Ax(i){for(const t of Rl){i.box(t.x0,t.z0,t.x1,t.z1,.5,3.4,gt.busRed,.45),i.box(t.x0-.02,t.z0-.02,t.x1+.02,t.z1+.02,2,2.9,"#3c4250",.2,{ao:!1}),i.box(t.x0-.03,t.z0-.03,t.x1+.03,t.z1+.03,1.2,1.5,"#f3e9dc",.1,{ao:!1});for(const e of[t.x0+2,t.x1-2])for(const n of[t.z0,t.z1])i.at(new Pe(.5,.5,.4,10),"#2b2b2b",e,.5,n,0,1,1,1)}for(let t=199;t<274;t+=6)i.box(t,13.4,t+.3,13.7,0,4.2,"#5b7f86",0);i.box(197,7.5,275,14.2,4.2,4.6,"#4f8a8b",.15)}function Cx(i){const t=["#e63946","#f1faee","#ffb703"];let e=0;for(let n=252;n<276;n+=8.5)for(let s=101;s<118;s+=8.5){for(const[r,o]of[[0,0],[7,0],[0,7],[7,7]])i.box(n+r,s+o,n+r+.25,s+o+.25,0,3.2,"#8b6748",0);i.at(new Pn(5.2,1.6,4),t[e++%3],n+3.6,4,s+3.6,Math.PI/4,1,1,1)}}function Rx(i){Cl.forEach((t,e)=>{const n=t.x1-t.x0,s=t.z1-t.z0,r=gt.tent[e%gt.tent.length];i.at(new Pn(Math.SQRT1_2,1,4),r,(t.x0+t.x1)/2,1.4,(t.z0+t.z1)/2,Math.PI/4,n,2.8,s),i.box(t.x0+.1,t.z0+.1,t.x1-.1,t.z1-.1,0,.3,"#d9c39a",0),e%7===3&&Pl(i,(t.x0+t.x1)/2,2.8,(t.z0+t.z1)/2,2)});for(const t of[143,155])i.box(t,183.5,t+1,184.5,0,6,"#f3a712",.2);i.box(142.5,183.4,156.5,184.6,6,7.2,"#e4572e",.3)}function Px(i,t){const e=It.bridge;i.box(e.x0-.4,e.z0,e.x1+.4,e.z1,-.3,.35,"#d9c6a2",.15);for(const n of[e.x0-.4,e.x1+.1])i.box(n,e.z0,n+.3,e.z1,.35,1.4,"#b88a5a",.08);for(let n=152;n<176;n+=6)i.box(e.x0+.5,n-.8,e.x1-.5,n+.8,-2.6,-.3,"#c9b48e",.3);for(let n=e.z0+3;n<e.z1;n+=9)for(const s of[e.x0-.3,e.x1+.3])mo(i,t,s,n,.35)}function Lx(i){const t=new Set;for(const e of ni)for(let n=e.rect.z0;n<e.rect.z1;n++)for(let s=e.rect.x0;s<e.rect.x1;s++)t.add(n*q+s);for(const e of Al){const n=(e.z0+e.z1)/2;let s=-1;for(let r=e.x0;r<=e.x1;r++){const o=t.has(e.z0*q+r)||r===e.x1;if(!o&&s<0&&(s=r),o&&s>=0){for(let a=s;a<=r;a+=2)i.box(a-.08,n-.08,a+.08,n+.08,0,1.3,gt.bamboo,0,{ao:!1});i.box(s,n-.06,r,n+.06,.55,.67,gt.bamboo,0,{ao:!1}),i.box(s,n-.06,r,n+.06,1.05,1.17,gt.bamboo,0,{ao:!1}),s=-1}}}for(const e of Fe)for(const n of[e.x0,e.x1-.2])i.box(n,133.8,n+.2,134.2,0,1.2,gt.bamboo,0,{ao:!1})}function yh(i,t,e,n,s){i.at(new Pe(.22*n,.32*n,2.4*n,6),gt.trunk,t,1.2*n,e);const r=gt.tree[Math.floor(Ye(s)*gt.tree.length)];i.at(new Ws(1.7*n,1),r,t,3.2*n,e,s,1,.9,1,{jitter:.05}),i.at(new Ws(1.2*n,1),r,t+.9*n,3.9*n,e+.5*n,s,1,.9,1,{jitter:.05}),i.at(new Ws(1.1*n,1),r,t-.8*n,3.7*n,e-.6*n,s,1,.9,1,{jitter:.05})}function Dx(i,t){[{x0:0,z0:176,x1:60,z1:Ht},{x0:60,z0:184,x1:100,z1:Ht},{x0:275,z0:176,x1:q,z1:Ht}].forEach((s,r)=>{i.box(s.x0+.5,s.z0+.5,s.x1-.5,s.z1-.5,0,.12,r%2?gt.field2:gt.field,.2,{ao:!1});for(let o=s.z0+2;o<s.z1-1;o+=2.2)i.box(s.x0+1.5,o,s.x1-1.5,o+.6,.12,.3,"#9db564",.1,{ao:!1})});let n=11;for(const[s,r]of[[8,180],[20,186],[44,180],[58,199],[72,190],[90,203],[30,205],[277,190],[278,202],[84,186]])yh(i,s,r,1.1+Ye(n)*.5,n++);for(let s=4;s<q;s+=9)yh(i,s+Ye(s)*3,1.5,.8,s)}function Ix(i){const t=["#ff8c1a","#e4572e","#f3a712","#29a19c","#d7263d","#fbf4e6"],e=[It.lane2,It.lane1,It.lane3];let n=0;for(const s of e)for(let r=s.z0+6;r<s.z1-2;r+=9)for(let o=s.x0-.2;o<s.x1+.2;o+=.7){const a=Math.sin((o-s.x0)/(s.x1-s.x0)*Math.PI)*.6;i.at(new El(.28),t[n++%t.length],o,6.2-a,r,.5,1,1.3,.3,{ao:!1})}}function mo(i,t,e,n,s=0){i.at(new Pe(.08,.12,4.4,6),"#3f4a52",e,s+2.2,n),i.box(e-.5,n-.1,e+.5,n+.1,s+4.3,s+4.45,"#3f4a52",0),t.at(new ze(.28,8,6),"#fff3c4",e-.45,s+4.2,n),t.at(new ze(.28,8,6),"#fff3c4",e+.45,s+4.2,n)}function Ux(i,t,e){i.at(new Pe(.1,.13,6.5,6),"#566069",t,3.25,e);for(const n of[0,Math.PI]){const s=new Zt().compose(new R(he(t)+Math.sin(n)*.35,6.1,ue(e)+Math.cos(n)*.35),new sn().setFromEuler(new rn(Math.PI/2+.3*Math.cos(n),0,-.3*Math.sin(n))),new R(1,1,1));i.push(new Pe(.42,.1,.9,10,1,!0),"#e9ecef",s)}return new R(he(t),6.2,ue(e))}function Nx(i,t,e){return i.at(new Pe(.09,.12,7.5,6),"#566069",t,3.75,e),i.box(t-.25,e-.6,t+.25,e+.1,7.2,7.6,"#f8f9fa",.1),i.box(t-.15,e-.75,t+.15,e-.55,7.25,7.55,"#212529",.05),new R(he(t),7.4,ue(e))}const Zi=14e3,Fx=40,Mh=1,Ox=2,Sh=4,Wv=8,zx=["#ff8a1f","#f5f1e8","#ffb01f","#f06fa0","#d9343a","#3aa76d","#3f7fd1","#8e2c48","#f2d22e","#a58bd8"];function Bx(){const i=new Pe(.14,.27,1.02,7,1);i.translate(0,.51,0);const t=new ze(.15,8,6);t.translate(0,1.2,0);const e=new un(.22,.28,.12);e.translate(0,.78,-.2);const n=[i,t,e].map(o=>{const a=o.toNonIndexed();return a.deleteAttribute("uv"),a}),s=[1,0,1],r=new zt("#b9825a");return n.forEach((o,a)=>{const l=o.getAttribute("position").count,h=new Float32Array(l).fill(s[a]);o.setAttribute("aTint",new De(h,1));const c=new Float32Array(l*3),d=a===1?r:a===2?new zt("#e6dccb"):new zt(1,1,1);for(let u=0;u<l;u++)c[u*3]=d.r,c[u*3+1]=d.g,c[u*3+2]=d.b;o.setAttribute("color",new De(c,3))}),Ru(n)}class bh{mesh;prev=new Float32Array(Zi*4);cur=new Float32Array(Zi*4);prevHi=0;hi=0;tPrev=0;tCur=0;gens=new Int16Array(Zi).fill(-1);height;colors=zx.map(t=>new zt(t));panicColor=new zt("#ff2d55");scale=1.25;constructor(t){this.height=t;const e=new nn({vertexColors:!0,roughness:.8});e.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float aTint;`).replace("#include <color_vertex>",`
          vColor = vec3(1.0);
          #ifdef USE_COLOR
            vColor *= color;
          #endif
          #ifdef USE_INSTANCING_COLOR
            vColor *= mix(vec3(1.0), instanceColor.rgb, aTint);
          #endif`)},this.mesh=new lo(Bx(),e,Zi),this.mesh.instanceMatrix.setUsage(Kl),this.mesh.instanceColor=new ao(new Float32Array(Zi*3).fill(1),3),this.mesh.instanceColor.setUsage(Kl),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,this.mesh.receiveShadow=!1}get latest(){return{hi:this.hi,buf:this.cur}}push(t,e,n){const s=this.prev;this.prev=this.cur,this.cur=s,this.prevHi=this.hi,this.tPrev=this.tCur,this.tCur=t,this.hi=Math.min(e,Zi),this.cur.set(n.subarray(0,this.hi*4)),this.tCur<this.tPrev&&(this.prevHi=0)}update(t,e){const n=this.mesh.instanceMatrix.array,s=this.mesh.instanceColor,r=s.array,o=this.tCur-this.tPrev,a=o>1e-6?Math.min(1,Math.max(0,(t-this.tPrev)/o)):1,l=this.hi,h=this.scale;let c=!1;const d=this.height;for(let u=0;u<l;u++){const f=u*4,g=this.cur[f+3],_=u*16;if(g<0){for(let z=0;z<16;z++)n[_+z]=0;continue}const m=g&15,p=g>>4&15,b=g>>8&255;let M=this.cur[f],y=this.cur[f+1],D=this.cur[f+2];const T=this.prev[f+3];if(u<this.prevHi&&T>=0&&(T>>8&255)===b&&a<1){const z=this.prev[f],V=this.prev[f+1];if(Math.abs(z-M)<4&&Math.abs(V-y)<4){M=z+(M-z)*a,y=V+(y-V)*a;let G=D-this.prev[f+2];G>Math.PI?G-=2*Math.PI:G<-Math.PI&&(G+=2*Math.PI),D=this.prev[f+2]+G*a}}const C=Math.min(q-1,Math.max(0,M|0)),L=Math.min(Ht-1,Math.max(0,y|0));let x=d[L*q+C]+.05;const v=u*1.7;m&Ox?m&Mh&&(x-=Math.max(0,Math.sin(e*.9+v)-.75)*3.2):m&Mh||(x+=Math.abs(Math.sin(e*9+v))*.07);const A=Math.cos(D)*h,O=Math.sin(D)*h;n[_]=A,n[_+1]=0,n[_+2]=-O,n[_+3]=0,n[_+4]=0,n[_+5]=h,n[_+6]=0,n[_+7]=0,n[_+8]=O,n[_+9]=0,n[_+10]=A,n[_+11]=0,n[_+12]=M-q/2,n[_+13]=x,n[_+14]=y-Ht/2,n[_+15]=1;const F=b*32+p*2+(m&Sh?1:0);if(this.gens[u]!==F){this.gens[u]=F;const z=m&Sh?this.panicColor:this.colors[p%this.colors.length];r[u*3]=z.r,r[u*3+1]=z.g,r[u*3+2]=z.b,c=!0}}this.mesh.count=l,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceMatrix.clearUpdateRanges(),this.mesh.instanceMatrix.addUpdateRange(0,l*16),c&&(s.needsUpdate=!0)}reset(){this.hi=0,this.prevHi=0,this.tCur=0,this.tPrev=0,this.gens.fill(-1),this.mesh.count=0}}const Vr=[.13,.2,.4,.16,.11],Wr=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},ts=[{id:"normal",name:"Ordinary day",tagline:"Steady pilgrim traffic, trains every 2½ minutes",description:"A busy but ordinary morning. Use it as the baseline: both plans should stay comfortably below 2 p/m² and the AI should mostly leave things alone.",clockStart:8*3600,duration:600,baseLoad:1,load:()=>1,ghatWeights:()=>Vr,events:[]},{id:"snan",name:"Amrit Snan bathing hour",tagline:"The auspicious muhurat — everyone wants Ram Kund at once",description:"At the auspicious hour the inflow roughly triples and two thirds of pilgrims head for Ram Kund (Ghat 3). This is the classic Kumbh surge.",clockStart:3*3600+50*60,duration:720,baseLoad:1.25,load:i=>1.25+2.35*Wr(40,130,i)-1.9*Wr(430,560,i),ghatWeights:i=>{const e=.4+.27*(Wr(30,100,i)*(1-Wr(440,600,i))),n=(1-e)/(1-.4);return Vr.map((s,r)=>r===2?e:s*n)},events:[{t:40,end:480,kind:"surge",label:"Muhurat begins · inflow ×3"}]},{id:"jam",name:"Gate jammed shut",tagline:"Gate B on Bazaar Lane jams closed under load",description:"Bazaar Lane is the main artery to and from Ram Kund. Its gate jams shut. Nobody upstream knows until they reach it.",clockStart:9*3600+58*60,duration:660,baseLoad:1.7,load:()=>1.7,ghatWeights:()=>[.12,.18,.46,.14,.1],events:[{t:90,kind:"jam",gate:"B",label:"Gate B jams shut"}]},{id:"rumour",name:"Rumour & sudden run",tagline:"“The bridge is collapsing!” — panic spreads from the footbridge",description:"During the evening aarti a rumour that the footbridge is giving way starts a run. Panic spreads person to person; people sprint for open ground through narrow lanes.",clockStart:18*3600+25*60,duration:660,baseLoad:1.8,load:()=>1.8,ghatWeights:()=>[.12,.2,.42,.16,.1],events:[{t:150,kind:"rumour",x:149,z:131,radius:26,label:"Rumour at the footbridge"}]},{id:"convoy",name:"VIP convoy",tagline:"A VIP motorcade cordons the Main Road for darshan",description:"A VIP convoy drives to the temple. Police cordon the Main Road for five minutes and public darshan pauses. Station and bus-stand crowds lose their route to the ghats.",clockStart:10*3600+55*60,duration:660,baseLoad:1.6,load:()=>1.6,ghatWeights:()=>Vr,events:[{t:60,end:360,kind:"convoy",label:"Main Road cordoned for VIP convoy"}]},{id:"rain",name:"Sudden downpour",tagline:"A cloudburst sends thousands running for cover",description:"Heavy rain arrives. Walking slows on wet stone and most of the crowd heads for the nearest roof — the station concourse, the temple cloister, the bus shed.",clockStart:15*3600+10*60,duration:660,baseLoad:1.85,load:()=>1.85,ghatWeights:()=>Vr,events:[{t:120,end:480,kind:"rain",label:"Cloudburst"}]}],go=Object.fromEntries(ts.map(i=>[i.id,i])),kx={xStart:284,xStop:136,z:58,speed:9},Kn={x0:40,x1:280,z0:53,z1:63},Te=(i,t={})=>new nn({color:i,roughness:.85,...t});function He(i,t,e,n,s){const r=new re(new Pu(i,t,e,2,Math.min(n,i/2,t/2,e/2)-.001),s);return r.castShadow=!0,r.receiveShadow=!0,r}const Gx={open:"#2fbf71",in:"#2fbf71",out:"#3fa7f5",closed:"#e63946",jammed:"#ff2d55"};function Hx(i,t,e){const n=document.createElement("canvas");n.width=256,n.height=128;const s=n.getContext("2d");s.fillStyle="#fffaf2",s.beginPath(),s.roundRect(4,4,248,120,26),s.fill(),s.lineWidth=8,s.strokeStyle=e,s.stroke(),s.fillStyle=e,s.beginPath(),s.roundRect(14,14,100,100,20),s.fill(),s.fillStyle="#fff",s.font="bold 76px system-ui, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(i,64,68),s.fillStyle="#2b2b33",s.font="bold 34px system-ui, sans-serif",s.fillText(t,184,66);const r=new r_(n);return r.colorSpace=Je,r.anisotropy=4,r}class Vx{group=new Ve;items=[];tex=new Map;constructor(){const t=Te("#f4ecdf"),e=Te("#7a4b3a"),n=new nn({color:"#e63946",roughness:.6}),s=new nn({color:"#2fbf71",emissive:"#2fbf71",emissiveIntensity:.35});for(const r of ni){const o=r.rect,a=(o.x0+o.x1)/2,l=(o.z0+o.z1)/2,h=r.axis==="x"?o.x1-o.x0:o.z1-o.z0,c=new Ve;c.position.set(he(a),0,ue(l)),r.axis==="z"&&(c.rotation.y=Math.PI/2);const d=[];for(const m of[-1,1]){const p=He(.7,3.4,.7,.15,t);p.position.set(m*(h/2+.35),1.7,0),c.add(p);const b=new re(new ze(.32,12,8),new nn({color:"#2fbf71",emissive:"#2fbf71",emissiveIntensity:1.2}));b.position.set(m*(h/2+.35),3.65,0),c.add(b),d.push(b)}const u=He(h+1.6,.45,.6,.12,e);u.position.y=3.3,c.add(u);const f=He(h,.32,.32,.1,n);f.position.y=1,c.add(f);for(let m=-h/2+.6;m<h/2;m+=1.2){const p=new re(new un(.5,.34,.34),Te("#ffffff"));p.position.set(m,1,0),f.add(p),p.position.y=0}const g=new re(new Pn(.55,1.3,3),s.clone());g.rotation.x=Math.PI/2,g.position.y=2.6,g.visible=!1,c.add(g);const _=new n_(new hu({depthTest:!0}));_.scale.set(4.4,2.2,1),_.position.set(he(a),5.4,ue(l)),this.group.add(c),this.group.add(_),this.items.push({sign:_,boom:f,lamps:d,key:"",arrow:g})}}texFor(t,e,n){const s=t+e;let r=this.tex.get(s);return r||(r=Hx(t,e,n),this.tex.set(s,r)),r}update(t){t.forEach((e,n)=>{const s=this.items[n],r=e.jammed?"jammed":e.closed?"closed":e.mode,o=r;if(s.key===o)return;s.key=o;const a=Gx[r]??"#2fbf71",l=r==="jammed"?"JAMMED":r==="closed"?"CLOSED":r==="in"?"IN ONLY":r==="out"?"OUT ONLY":"OPEN";s.sign.material.map=this.texFor(ni[n].id,l,a),s.sign.material.needsUpdate=!0,s.boom.visible=r==="closed"||r==="jammed";for(const h of s.lamps){const c=h.material;c.color.set(a),c.emissive.set(a)}s.arrow.visible=r==="in"||r==="out",s.arrow.rotation.x=r==="in"?Math.PI/2:-Math.PI/2,s.arrow.material.color.set(a),s.arrow.material.emissive.set(a)})}pulse(t){for(const e of this.items)if(e.key==="jammed"||e.key==="closed"){const n=e.key==="jammed"?.6+.6*Math.sin(t*8):.9;for(const s of e.lamps)s.material.emissiveIntensity=n+.4}}modeOf(t){return this.items[t].key}}class Wx{group=new Ve;constructor(){const t=Te("#2f5d9e"),e=Te("#f1e3c8"),n=Te("#8d99a6"),s=Te("#c0392b"),r=Te("#f6f1e8"),o=Te("#2e3440"),a=11.2;let l=14;const h=He(16,3.8,3.1,.5,s);h.position.set(he(l+8),2.4,ue(a)),this.group.add(h);const c=He(16.1,.5,3.15,.2,r);c.position.set(he(l+8),2,ue(a)),this.group.add(c);const d=He(.3,1,2.2,.1,o);d.position.set(he(l+.1),3.4,ue(a)),this.group.add(d),l+=16.6;for(let u=0;u<8;u++){const f=He(13.8,3.6,3,.5,t);f.position.set(he(l+6.9),2.3,ue(a));const g=He(13,.8,3.05,.2,e);g.position.set(he(l+6.9),2.9,ue(a));const _=He(13.4,.35,2.8,.15,n);_.position.set(he(l+6.9),4.2,ue(a)),this.group.add(f,g,_),l+=14.4}this.group.visible=!1}update(t){this.group.visible=t.offset!==null,t.offset!==null&&(this.group.position.x=t.offset)}}class Xx{group=new Ve;cordon=new Ve;cars=[];beacons=[];constructor(){const t=Te("#f7f7f2"),e=Te("#2b303b"),n=Te("#e9eef5"),s=Te("#2c5aa0");for(let a=0;a<6;a++){const l=new Ve,h=a===0||a===5,c=He(4.8,1.3,2,.4,h?n:t);c.position.y=.95;const d=He(2.8,.9,1.8,.35,e);if(d.position.set(-.2,1.9,0),l.add(c,d),h){const f=He(4.85,.25,2.05,.1,s);f.position.y=1,l.add(f)}const u=new re(new un(.9,.25,.5),new nn({color:"#ff3b30",emissive:"#ff3b30",emissiveIntensity:2}));u.position.y=2.45,l.add(u),this.beacons.push(u),this.cars.push(l),this.group.add(l)}const r=new nn({color:"#ffd23f",roughness:.6}),o=Te("#e63946");for(const a of[Kn.z0+.3,Kn.z1-.3]){for(let h=Kn.x0;h<Kn.x1;h+=4){const c=new re(new Pe(.1,.12,1.1,6),o);c.position.set(he(h),.55,ue(a)),this.cordon.add(c)}const l=new re(new un(Kn.x1-Kn.x0,.12,.04),r);l.position.set(he((Kn.x0+Kn.x1)/2),.95,ue(a)),this.cordon.add(l)}this.group.visible=!1,this.cordon.visible=!1}update(t,e,n){if(!e){this.group.visible=!1,this.cordon.visible=!1;return}const s=e.t,r=e.end??e.t+300;this.cordon.visible=t>=s&&t<r;const o=kx;let a;t<s?a=1e9:t<r-25?a=Math.max(o.xStop,o.xStart-(t-s)*o.speed):a=o.xStop+Math.pow(t-(r-25),2)*.35,this.group.visible=t>=s&&a<330,this.cars.forEach((l,h)=>{const c=a+h*8;l.position.set(he(c),.05,ue(o.z)),l.rotation.y=Math.PI}),this.beacons.forEach((l,h)=>l.material.emissive.set(Math.sin(n*10+h)>0?"#ff3b30":"#2f6bff"))}}class Yx{mesh;pos;n=6e3;intensity=0;constructor(){this.pos=new Float32Array(this.n*6);for(let e=0;e<this.n;e++)this.reset(e,Math.random()*60);const t=new Me;t.setAttribute("position",new De(this.pos,3)),this.mesh=new fu(t,new yl({color:"#cfe3f2",transparent:!0,opacity:.55})),this.mesh.frustumCulled=!1,this.mesh.visible=!1}reset(t,e){const n=(Math.random()-.5)*300,s=(Math.random()-.5)*230,r=t*6;this.pos[r]=n,this.pos[r+1]=e,this.pos[r+2]=s,this.pos[r+3]=n+.25,this.pos[r+4]=e-1.6,this.pos[r+5]=s+.15}update(t){if(this.mesh.visible=this.intensity>.02,!this.mesh.visible)return;const e=Math.floor(this.n*this.intensity);for(let n=0;n<this.n;n++){const s=n*6;if(n>=e){this.pos[s+1]=-100,this.pos[s+4]=-100;continue}const r=38*t;this.pos[s+1]-=r,this.pos[s+4]-=r,this.pos[s]+=2*t,this.pos[s+3]+=2*t,this.pos[s+4]<-1&&this.reset(n,40+Math.random()*20)}this.mesh.geometry.getAttribute("position").needsUpdate=!0}}class qx{group=new Ve;drone=new Ve;rotors=[];droneLight;boats=[];diyas;diyaPos;rings=[];alerts=[];speakers;constructor(t){this.speakers=t;const e=He(1.2,.4,1.2,.15,Te("#f4f4f4"));this.drone.add(e);for(const[a,l]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const h=new re(new un(1.2,.1,.1),Te("#3a3f47"));h.position.set(a*.6,0,l*.6),h.rotation.y=Math.atan2(l,a)*-1;const c=new re(new Pe(.55,.55,.04,14),new nn({color:"#cfd8e3",transparent:!0,opacity:.6}));c.position.set(a*1.1,.25,l*1.1),this.drone.add(h,c),this.rotors.push(c)}this.droneLight=new re(new ze(.15,8,6),new nn({color:"#ff3b30",emissive:"#ff3b30",emissiveIntensity:2})),this.droneLight.position.y=-.3,this.drone.add(this.droneLight);const n=new re(new ze(.25,10,8),Te("#1d1f24"));n.position.y=-.35,this.drone.add(n),this.drone.traverse(a=>{a.castShadow=!0}),this.group.add(this.drone);const s=Te("#7a4b2e"),r=["#e4572e","#29a19c","#f3a712","#fbf4e6"];for(let a=0;a<6;a++){const l=new Ve,h=He(5.2,.8,1.7,.35,s);h.position.y=.2;const c=He(2.2,.15,1.8,.07,Te(r[a%4]));c.position.y=1.7;for(const d of[-1,1])for(const u of[-.75,.75]){const f=new re(new Pe(.04,.04,1.2,4),s);f.position.set(d,1.1,u),l.add(f)}l.add(h,c),l.userData={x:10+a*47,z:158+a%3*5.5,v:1.2+a%3*.5},this.boats.push(l),this.group.add(l)}const o=420;this.diyas=new lo(new ze(.22,6,4),new nn({color:"#ffd27a",emissive:"#ffb347",emissiveIntensity:2.2}),o),this.diyaPos=new Float32Array(o*2);for(let a=0;a<o;a++)this.diyaPos[a*2]=Math.random()*280,this.diyaPos[a*2+1]=151+Math.random()*24;this.diyas.frustumCulled=!1,this.group.add(this.diyas);for(let a=0;a<t.length;a++){const l=new re(new Js(.85,1,40),new vi({color:"#ffd166",transparent:!0,opacity:0,side:vn,depthWrite:!1}));l.position.copy(t[a]),l.rotation.x=-Math.PI/2,this.group.add(l),this.rings.push({mesh:l,t:-10})}for(const a of we){const l=a.rects[0],h=Math.min(16,Math.max(5,Math.min(l.x1-l.x0,l.z1-l.z0)*.7)),c=new re(new Js(h*.82,h,48),new vi({color:"#ff2d55",transparent:!0,opacity:0,side:vn,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.visible=!1,this.alerts.push(c),this.group.add(c)}}setZoneCenters(t,e){t.forEach((n,s)=>this.alerts[s].position.set(he(n.x),e[s]+.4,ue(n.z)))}pulsePA(t,e){for(let n=0;n<this.rings.length;n++)(t==="all"||t===n)&&(this.rings[n].t=e)}setAlerts(t){t.forEach((e,n)=>{const s=this.alerts[n];s.visible=e>=2,s.material.color.set(e>=3?"#ff1f6b":"#ff4d2e"),s.userData.level=e})}update(t,e,n,s){const r=t*.25;this.drone.position.set(he(119+Math.sin(r)*18),26+Math.sin(t*1.3)*.5,ue(140+Math.sin(r*2)*6)),this.drone.rotation.y=r;for(const o of this.rotors)o.rotation.y+=e*40;this.droneLight.material.emissiveIntensity=Math.sin(t*6)>.6?3:.2;for(const o of this.boats){const a=o.userData;a.x+=a.v*e,a.x>290&&(a.x=-10),o.position.set(he(a.x),-1+Math.sin(t*1.5+a.z)*.08,ue(a.z)),o.rotation.z=Math.sin(t*1.2+a.x)*.04}if(this.diyas.visible=n>.25,this.diyas.visible){const o=new Zt;for(let a=0;a<this.diyas.count;a++)this.diyaPos[a*2]+=e*.6,this.diyaPos[a*2]>282&&(this.diyaPos[a*2]=-2),o.makeTranslation(he(this.diyaPos[a*2]),-.95+Math.sin(t*2+a)*.04,ue(this.diyaPos[a*2+1])),this.diyas.setMatrixAt(a,o);this.diyas.instanceMatrix.needsUpdate=!0}for(const o of this.rings){const a=t-o.t,l=o.mesh.material;if(a<0||a>2.4){l.opacity=0;continue}const h=a%.8/.8;o.mesh.scale.setScalar(1+h*9),l.opacity=(1-h)*.8*(1-a/2.4)}for(const o of this.alerts){if(!s){o.visible=!1;continue}if(!o.visible)continue;const a=t*(o.userData.level>=3?1.6:1)%1;o.scale.setScalar(.7+a*.6),o.material.opacity=(1-a)*.85}}setAlertsVisible(t){for(const e of this.alerts)t||(e.visible=!1)}}class $x{mesh;textures;mat;time={value:0};constructor(t){const e=new Ai(q,Ht,q,Ht);e.rotateX(-Math.PI/2);const n=e.getAttribute("position");for(let s=0;s<n.count;s++){const r=Math.min(q-1,Math.max(0,Math.floor(n.getX(s)+q/2))),o=Math.min(Ht-1,Math.max(0,Math.floor(n.getZ(s)+Ht/2)));n.setY(s,Math.max(t.height[o*q+r],t.height[o*q+Math.max(0,r-1)])+.14)}this.textures=[0,1].map(()=>{const s=new du(new Uint8Array(q*Ht),q,Ht,vo,An);return s.magFilter=hn,s.minFilter=hn,s.flipY=!1,s.needsUpdate=!0,s}),this.mat=new dn({transparent:!0,depthWrite:!1,uniforms:{tDensity:{value:this.textures[0]},uTime:this.time,uScale:{value:255/Fx}},vertexShader:`
        varying vec2 vUv;
        void main() { vUv = vec2(uv.x, 1.0 - uv.y); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
        uniform sampler2D tDensity; uniform float uTime; uniform float uScale;
        varying vec2 vUv;
        vec3 ramp(float d) {
          vec3 c0 = vec3(0.16, 0.62, 0.66);  // sparse — teal
          vec3 c1 = vec3(0.45, 0.80, 0.36);  // 1.5 comfortable — green
          vec3 c2 = vec3(0.98, 0.84, 0.25);  // 2.5 dense — yellow
          vec3 c3 = vec3(1.00, 0.55, 0.15);  // 3.5 very dense — orange
          vec3 c4 = vec3(0.93, 0.13, 0.20);  // 4.5 danger — red
          vec3 c5 = vec3(1.00, 0.20, 0.65);  // 6 critical — magenta
          if (d < 1.5) return mix(c0, c1, d / 1.5);
          if (d < 2.5) return mix(c1, c2, d - 1.5);
          if (d < 3.5) return mix(c2, c3, d - 2.5);
          if (d < 4.5) return mix(c3, c4, d - 3.5);
          return mix(c4, c5, clamp((d - 4.5) / 1.5, 0.0, 1.0));
        }
        void main() {
          float d = texture2D(tDensity, vUv).r * uScale;
          if (d < 0.15) discard;
          vec3 col = ramp(d);
          float a = smoothstep(0.15, 1.0, d) * 0.82;
          if (d >= 4.0) {
            float p = 0.5 + 0.5 * sin(uTime * 6.0);
            col = mix(col, vec3(1.0, 0.95, 0.95), p * 0.35 * smoothstep(4.0, 5.5, d));
            a = 0.92;
          }
          gl_FragColor = vec4(col, a);
          #include <colorspace_fragment>
        }`}),this.mesh=new re(e,this.mat),this.mesh.renderOrder=2,this.mesh.visible=!1}setData(t,e){const n=this.textures[t];n.image.data.set(e),n.needsUpdate=!0}use(t){this.mat.uniforms.tDensity.value=this.textures[t]}}class jx{meshes;clash;cellY;constructor(t){const e=new xu;e.moveTo(-.18,-.9),e.lineTo(.18,-.9),e.lineTo(.18,.15),e.lineTo(.55,.15),e.lineTo(0,1),e.lineTo(-.55,.15),e.lineTo(-.18,.15),e.lineTo(-.18,-.9);const n=new bl(e,{depth:.12,bevelEnabled:!1});n.rotateX(-Math.PI/2),n.rotateY(Math.PI);const s=$i*gh,r=()=>{const l=new lo(n,new vi({color:"#ffffff"}),s);return l.instanceColor=new ao(new Float32Array(s*3),3),l.count=0,l.frustumCulled=!1,l.visible=!1,l.renderOrder=3,l};this.meshes=[r(),r()];const o=new Js(1.4,2,24);o.rotateX(-Math.PI/2);const a=()=>{const l=new lo(o,new vi({color:"#ff2bd6",transparent:!0,opacity:.85,depthWrite:!1}),s);return l.count=0,l.frustumCulled=!1,l.visible=!1,l.renderOrder=3,l};this.clash=[a(),a()],this.cellY=new Float32Array(s);for(let l=0;l<s;l++){const h=Math.min(q-1,l%$i*ji+2),c=Math.min(Ht-1,Math.floor(l/$i)*ji+2);this.cellY[l]=t.height[c*q+h]}}setData(t,e,n){const s=this.meshes[t],r=this.clash[t],o=new Zt,a=new sn,l=new R,h=new R,c=new R(0,1,0),d=new zt;let u=0,f=0;for(let g=0;g<$i*gh;g++){const _=e[g*4+3];if(_<2)continue;const m=e[g*4],p=e[g*4+1],b=e[g*4+2],M=Math.hypot(m,p),y=g%$i*ji+ji/2,D=Math.floor(g/$i)*ji+ji/2;h.set(he(y),this.cellY[g]+.5,ue(D));const T=b>.35&&_>=5;if(M>.08){a.setFromAxisAngle(c,Math.atan2(m,p));const C=.8+Math.min(1.6,M)*1.2;l.set(.9+Math.min(_,30)*.02,1,C),o.compose(h,a,l),s.setMatrixAt(u,o),T?d.set("#ff2bd6"):M<.4?d.set("#ff9f1c"):M<.8?d.set("#ffd23f"):d.set("#3ddc97"),s.setColorAt(u,d),u++}if(T){const C=.8+.3*Math.sin(n*5+g);o.compose(h.setY(h.y-.3),new sn,l.set(C,1,C)),r.setMatrixAt(f++,o)}}s.count=u,r.count=f,s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),r.instanceMatrix.needsUpdate=!0}}class Zx{group=new Ve;plates=[];mats=[];caps;constructor(t){this.caps=we.map((e,n)=>Math.round(t.zoneArea[n]*e.cap)),we.forEach(e=>{const n=new vi({color:"#3ddc97",transparent:!0,opacity:.35,depthWrite:!1});this.mats.push(n);const s=[];for(const r of e.rects){const o=Math.max(t.height[Math.min(Ht-1,r.z0)*q+Math.min(q-1,r.x0)],0)+.2,a=new re(new Ai(r.x1-r.x0-.4,r.z1-r.z0-.4),n);a.rotation.x=-Math.PI/2,a.position.set(he((r.x0+r.x1)/2),e.kind==="ghat"?.45:e.kind==="bridge"?.6:o,ue((r.z0+r.z1)/2)),a.renderOrder=1;const l=new fu(new v_(a.geometry),new yl({color:"#ffffff",transparent:!0,opacity:.7}));a.add(l),s.push(a),this.group.add(a)}this.plates.push(s)}),this.group.visible=!1}setData(t){t.zones.forEach((e,n)=>{const s=e.count/Math.max(1,this.caps[n]),r=this.mats[n];r.color.set(s<.5?"#3ddc97":s<.8?"#ffd23f":s<1?"#ff9f1c":"#ff3355"),r.opacity=.18+Math.min(1,s)*.42})}}const Us={predawn:{bg:"#1f2a4a",fog:"#26325a",sky:"#7f93c9",ground:"#40364a",hemi:1.15,sun:"#a9bdff",sunI:1.1,sunPos:[-120,200,80],lamps:2.4,night:1,exposure:1.15},morning:{bg:"#f1e4cf",fog:"#efe2cd",sky:"#fff5e6",ground:"#c9a888",hemi:1.25,sun:"#ffd9a8",sunI:2.5,sunPos:[160,150,120],lamps:.3,night:0,exposure:1},day:{bg:"#ecebe4",fog:"#e9e7df",sky:"#fffaf0",ground:"#c7ab8a",hemi:1.2,sun:"#fff1db",sunI:2.7,sunPos:[90,230,140],lamps:.2,night:0,exposure:1},overcast:{bg:"#9ba5ae",fog:"#a2abb3",sky:"#d6dee6",ground:"#77706a",hemi:1.45,sun:"#e0e7ee",sunI:.9,sunPos:[40,230,100],lamps:1,night:.1,exposure:1.05},dusk:{bg:"#d99a7a",fog:"#c98f7e",sky:"#ffc49b",ground:"#6f4f5a",hemi:1.1,sun:"#ff9b5e",sunI:2,sunPos:[-200,90,60],lamps:2,night:.7,exposure:1.05}};function Kx(i){const t=i/3600;return t<5.5||t>=19.5?"predawn":t<9.5?"morning":t<17.5?"day":"dusk"}class Jx extends nr{view;constructor(t){super(),this.view=t,this.needsSwap=!1}render(t,e,n){t.setRenderTarget(n),t.setClearColor(this.view.scene.background,1),t.clear();const s=this.view,r=n.width,o=n.height,a=s.mode==="split"?[0,1]:[s.mode==="fixed"?0:1];a.forEach((l,h)=>{const c=a.length===2?h*r/2:0,d=a.length===2?r/2:r;n.viewport.set(c,0,d,o),n.scissor.set(c,0,d,o),n.scissorTest=!0,s.fitCamera(s.camera,d/o),s.prepareFor(l),t.setRenderTarget(n),t.render(s.scene,s.camera)}),n.viewport.set(0,0,r,o),n.scissor.set(0,0,r,o),n.scissorTest=!1}}const Qx={uniforms:{tDiffuse:{value:null},uRes:{value:new J(1,1)},uAmount:{value:2.6},uFocus:{value:.46},uSplit:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uAmount; uniform float uFocus; uniform float uSplit;
    varying vec2 vUv;
    void main() {
      float d = abs(vUv.y - uFocus);
      float k = smoothstep(0.16, 0.55, d) * uAmount;
      vec4 acc = texture2D(tDiffuse, vUv);
      float wsum = 1.0;
      if (k > 0.05) {
        for (int i = 0; i < 12; i++) {
          float a = float(i) * 2.39996;
          float r = sqrt(float(i) + 0.5) / 3.46;
          vec2 o = vec2(cos(a), sin(a)) * r * k / uRes;
          vec2 uv = vUv + o;
          if (uSplit > 0.5 && (uv.x - 0.5) * (vUv.x - 0.5) < 0.0) uv.x = vUv.x;
          acc += texture2D(tDiffuse, uv);
          wsum += 1.0;
        }
      }
      vec4 col = acc / wsum;
      vec2 c = vUv - 0.5;
      col.rgb *= 1.0 - dot(c, c) * 0.55;
      gl_FragColor = col;
    }`};class tv{renderer;scene=new t_;camera;controls;composer;tilt;mode="split";lens="clay";town;pilgrims;gates;train;convoy;rain;ambient;density;flow;count;hemi;sun;lightCur;lightTarget;stats=[null,null];clock=new bu;elapsed=0;simTime=0;frameT=0;frameWall=0;simRate=0;tiltOn=!0;fps=60;flyTo=null;onFrameRendered=()=>{};constructor(t){const e=new Qg({antialias:!1,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setSize(t.clientWidth,t.clientHeight),e.shadowMap.enabled=!0,e.shadowMap.type=Ph,e.toneMapping=al,e.toneMappingExposure=1,t.appendChild(e.domElement),this.renderer=e,this.camera=new Qe(30,t.clientWidth/t.clientHeight,2,2e3),this.camera.position.set(-10,250,300),this.controls=new q_(this.camera,e.domElement),this.controls.target.set(0,0,8),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=1.25,this.controls.minDistance=25,this.controls.maxDistance=620,this.controls.screenSpacePanning=!1,this.controls.update();const n=Cu();this.lightCur={...Us.morning},this.lightTarget=Us.morning,this.scene.background=new zt(this.lightCur.bg),this.scene.fog=new vl(this.lightCur.fog,420,1100),this.hemi=new k_(this.lightCur.sky,this.lightCur.ground,this.lightCur.hemi),this.scene.add(this.hemi),this.sun=new V_(this.lightCur.sun,this.lightCur.sunI),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(4096,4096);const s=this.sun.shadow.camera;s.left=-175,s.right=175,s.top=150,s.bottom=-150,s.near=10,s.far=700,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.35,this.sun.shadow.radius=3,this.scene.add(this.sun,this.sun.target),this.town=Sx(n.world),this.scene.add(this.town.group),this.pilgrims=[new bh(n.world.height),new bh(n.world.height)];for(const a of this.pilgrims)this.scene.add(a.mesh);this.gates=new Vx,this.train=new Wx,this.convoy=new Xx,this.rain=new Yx,this.ambient=new qx(this.town.speakers);const r=we.map((a,l)=>{const h=n.world.zoneCenter[l];return a.kind==="ghat"?-.4:n.world.height[Math.floor(h.z)*q+Math.floor(h.x)]});this.ambient.setZoneCenters(n.world.zoneCenter,r),this.scene.add(this.gates.group,this.train.group,this.convoy.group,this.convoy.cordon,this.rain.mesh,this.ambient.group),this.density=new $x(n.world),this.flow=new jx(n.world),this.count=new Zx(n.world),this.scene.add(this.density.mesh,...this.flow.meshes,...this.flow.clash,this.count.group);const o=new Cn(1,1,{type:bi,samples:4});this.composer=new ux(e,o),this.composer.addPass(new Jx(this)),this.tilt=new Tu(Qx),this.composer.addPass(this.tilt),this.composer.addPass(new fx),this.resize(t),new ResizeObserver(()=>this.resize(t)).observe(t)}fitCamera(t,e){t.aspect=e,t.zoom=e<1.1?Math.min(1,e/1.75*1.28):Math.min(1,e/1.75),t.updateProjectionMatrix()}droneRT=new Cn(320,200);droneCam=new So(-25,25,15.6,-15.6,1,200);dronePixels=new Uint8Array(320*200*4);renderDrone(t,e,n){const s=this.droneCam;s.position.set(he(e),60,ue(n)),s.up.set(0,0,-1),s.lookAt(he(e),0,ue(n)),s.updateProjectionMatrix();const r=this.pilgrims.map(h=>h.mesh.visible),o=[this.density.mesh.visible,this.count.group.visible];this.pilgrims[0].mesh.visible=t===0,this.pilgrims[1].mesh.visible=t===1,this.density.mesh.visible=!1,this.count.group.visible=!1;const a=[...this.flow.meshes,...this.flow.clash].map(h=>h.visible);[...this.flow.meshes,...this.flow.clash].forEach(h=>h.visible=!1);const l=this.renderer;return l.setRenderTarget(this.droneRT),l.render(this.scene,s),l.readRenderTargetPixels(this.droneRT,0,0,320,200,this.dronePixels),l.setRenderTarget(null),this.pilgrims.forEach((h,c)=>h.mesh.visible=r[c]),this.density.mesh.visible=o[0],this.count.group.visible=o[1],[...this.flow.meshes,...this.flow.clash].forEach((h,c)=>h.visible=a[c]),this.dronePixels}lite=!1;setLite(t){if(this.lite===t)return;this.lite=t,this.renderer.setPixelRatio(t?1:Math.min(window.devicePixelRatio,2)),this.sun.shadow.mapSize.set(t?2048:4096,t?2048:4096),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null;for(const n of this.pilgrims)n.mesh.castShadow=!t;this.tiltOn=!t;const e=this.renderer.domElement.parentElement;e&&this.resize(e)}resize(t){const e=t.clientWidth,n=t.clientHeight;if(!e||!n)return;this.renderer.setSize(e,n),this.composer.setSize(e,n);const s=this.renderer.getPixelRatio();this.tilt.uniforms.uRes.value.set(e*s,n*s),this.fitCamera(this.camera,e/n)}setLighting(t,e=!1){this.lightTarget=Us[t]??Us.day,e&&(this.lightCur={...this.lightTarget})}prepareFor(t){this.pilgrims[0].mesh.visible=t===0,this.pilgrims[1].mesh.visible=t===1;const e=this.stats[t];e&&this.gates.update(e.gates),this.density.use(t),this.flow.meshes.forEach((n,s)=>n.visible=this.lens==="flow"&&s===t),this.flow.clash.forEach((n,s)=>n.visible=this.lens==="flow"&&s===t),this.lens==="count"&&e&&this.count.setData(e),e&&this.ambient.setAlerts(e.zones.map(n=>n.count<30?0:n.density>=5?3:n.density>=4?2:n.density>=3?1:0))}pushFrame(t){const e=performance.now()/1e3;if(this.frameWall>0&&t.t>this.frameT){const n=(t.t-this.frameT)/Math.max(.001,e-this.frameWall);this.simRate=this.simRate*.7+n*.3}t.t<this.frameT&&(this.simRate=0,this.pilgrims.forEach(n=>n.reset())),this.frameT=t.t,this.frameWall=e,t.sims.forEach((n,s)=>this.pilgrims[s].push(t.t,n.hi,n.buf)),this.train.update(t.train)}pushStats(t){t.forEach((e,n)=>{this.stats[n]=e,this.density.setData(n,e.density),this.flow.setData(n,e.flow,this.elapsed)})}setLens(t){this.lens=t,this.density.mesh.visible=t==="density",this.count.group.visible=t==="count",this.town.lensDim.value=t==="clay"?0:1,this.pilgrims.forEach(e=>e.scale=t==="clay"?1.25:t==="density"?.9:1.05)}setMode(t){this.mode=t,this.tilt.uniforms.uSplit.value=t==="split"?1:0}fly(t,e){this.flyTo={pos:new R(...t),target:new R(...e),t:0}}focusZone(t,e){const n=new R(he(t),0,ue(e)),s=this.camera.position.clone().sub(this.controls.target).setLength(110);this.flyTo={pos:n.clone().add(s),target:n,t:0}}frame(t,e){const n=Math.min(.1,this.clock.getDelta());this.elapsed+=n,this.fps=this.fps*.95+1/Math.max(.001,n)*.05;const s=performance.now()/1e3,r=this.frameT-0+Math.min(.08,s-this.frameWall)*this.simRate-.05*Math.max(0,this.simRate);this.simTime=r;for(const u of this.pilgrims)u.update(r,this.elapsed);const o=1-Math.exp(-n*1.5),a=e?Us.overcast:this.lightTarget,l=this.lightCur,h=(u,f)=>"#"+new zt(u).lerp(new zt(f),o).getHexString();l.bg=h(l.bg,a.bg),l.fog=h(l.fog,a.fog),l.sky=h(l.sky,a.sky),l.ground=h(l.ground,a.ground),l.sun=h(l.sun,a.sun);for(const u of["hemi","sunI","lamps","night","exposure"])l[u]+=(a[u]-l[u])*o;for(let u=0;u<3;u++)l.sunPos[u]+=(a.sunPos[u]-l.sunPos[u])*o;if(this.scene.background.set(l.bg),this.scene.fog.color.set(l.fog),this.hemi.color.set(l.sky),this.hemi.groundColor.set(l.ground),this.hemi.intensity=l.hemi,this.sun.color.set(l.sun),this.sun.intensity=l.sunI,this.sun.position.set(...l.sunPos),this.sun.target.position.set(0,0,0),this.town.lampMat.emissiveIntensity=l.lamps,this.renderer.toneMappingExposure=l.exposure,this.town.waterTime.value=this.elapsed,this.density.time.value=this.elapsed,this.rain.intensity+=((e?1:0)-this.rain.intensity)*o,this.rain.update(n),this.convoy.update(r,t.convoy,this.elapsed),this.gates.pulse(this.elapsed),this.ambient.update(this.elapsed,n,l.night,this.lens==="clay"||this.lens==="count"),this.flyTo){this.flyTo.t=Math.min(1,this.flyTo.t+n*1.2);const u=1-Math.pow(1-this.flyTo.t,3);this.camera.position.lerp(this.flyTo.pos,u*.25+.02),this.controls.target.lerp(this.flyTo.target,u*.25+.02),this.flyTo.t>=1&&this.camera.position.distanceTo(this.flyTo.pos)<1&&(this.flyTo=null)}this.controls.update();const c=this.controls.target;c.x=ks.clamp(c.x,-q/2,q/2),c.z=ks.clamp(c.z,-Ht/2,Ht/2),c.y=0,this.tilt.enabled=this.tiltOn;const d=this.camera.position.distanceTo(c);this.tilt.uniforms.uAmount.value=ks.clamp(5.5-d/90,1.2,4.5),this.composer.render(n),this.onFrameRendered()}pick(t,e){const n=this.renderer.domElement.getBoundingClientRect();let s=t-n.left;const r=e-n.top;let o=n.width,a=this.mode==="ai"?1:0;this.mode==="split"&&(o=n.width/2,s>=o?(a=1,s-=o):a=0);const l=new J(s/o*2-1,-(r/n.height)*2+1),h=this.camera.clone();this.fitCamera(h,o/n.height);const c=new W_;c.setFromCamera(l,h);const d=new R;return c.ray.intersectPlane(new Bn(new R(0,1,0),.5),d)?{sim:a,x:d.x+q/2,z:d.z+Ht/2}:null}project(t,e,n,s){const r=this.renderer.domElement.getBoundingClientRect(),o=this.mode==="split",a=o?r.width/2:r.width,l=this.projCam;l.copy(this.camera),this.fitCamera(l,a/r.height);const h=new R(he(t),e,ue(n)).project(l),c=h.z<1&&Math.abs(h.x)<1.05&&Math.abs(h.y)<1.05;return{x:(h.x*.5+.5)*a+(o&&s===1?a:0),y:(-h.y*.5+.5)*r.height,visible:c}}projCam=new Qe;gateWorld(t){const e=ni[t].rect;return{x:(e.x0+e.x1)/2,z:(e.z0+e.z1)/2}}}const ev="modulepreload",nv=function(i,t){return new URL(i,t).href},Eh={},iv=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");s=Promise.allSettled(e.map(h=>{if(h=nv(h,n),h in Eh)return;Eh[h]=!0;const c=h.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(!!n)for(let g=o.length-1;g>=0;g--){const _=o[g];if(_.href===h&&(!c||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":ev,c||(f.as="script"),f.crossOrigin="",f.href=h,l&&f.setAttribute("nonce",l),document.head.appendChild(f),c)return new Promise((g,_)=>{f.addEventListener("load",g),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})},Lu='const A=(r,t,e,n)=>({x0:r,z0:t,x1:e,z1:n});const E={platform:A(18,14,122,20),concourse:A(58,20,82,34),forecourt:A(26,34,114,53),bypassPassage:A(9,40,26,46),bypassNorth:A(4,40,9,53),road:A(0,53,280,63),busStand:A(196,8,276,53),lane0:A(4,63,9,124),lane1:A(20,63,25,124),lane2:A(88,63,94,124),lane3:A(182,63,187,124),lane4:A(236,63,242,124),alleyW:A(4,92,94,96),alleyE:A(182,92,242,96),templeEntry:A(125,63,131,68),templeCourt:A(112,68,168,116),templeExit:A(150,116,156,124),hold:A(250,63,278,120),promenade:A(4,124,250,134),bridge:A(146,134,152,176),bank:A(60,176,275,184),camp:A(100,184,275,208)},He=A(132,86,148,102),Pe=A(0,150,280,176),st=[A(12,134,42,150),A(52,134,82,150),A(98,134,140,150),A(160,134,190,150),A(205,134,240,150)],_t=144,Oe=[A(26,52,114,53),A(196,52,276,53),A(250,64,278,65)],Be=(()=>{const r=[];for(let t=104;t+5<=272;t+=9)for(const e of[187,194,201])r.push(A(t,e,t+5,e+4));return r})(),_e=[A(202,30,214,33),A(218,30,230,33),A(234,30,246,33),A(250,30,262,33),A(202,40,214,43),A(250,40,262,43)],I=[{id:"A",name:"Gate A · Station",rect:A(64,52,76,53),fixed:"open",zone:"forecourt",axis:"x"},{id:"W",name:"Gate W · West exit",rect:A(20,40,21,46),fixed:"closed",zone:"bypass",axis:"z"},{id:"G",name:"Gate G · Bus stand",rect:A(224,52,236,53),fixed:"open",zone:"bus",axis:"x"},{id:"F",name:"Gate F · West Lane",rect:A(20,63,25,64),fixed:"open",zone:"lane1",axis:"x"},{id:"B",name:"Gate B · Bazaar Lane",rect:A(88,63,94,64),fixed:"open",zone:"lane2",axis:"x"},{id:"E",name:"Gate E · Temple in",rect:A(125,66,131,67),fixed:"in",locked:!0,zone:"temple",axis:"x"},{id:"T",name:"Gate T · Temple out",rect:A(150,118,156,119),fixed:"out",locked:!0,zone:"temple",axis:"x"},{id:"J",name:"Gate J · Temple Lane",rect:A(182,63,187,64),fixed:"open",zone:"lane3",axis:"x"},{id:"D",name:"Gate D · Diversion",rect:A(236,63,242,64),fixed:"closed",zone:"lane4",axis:"x"},{id:"H",name:"Gate H · Holding",rect:A(258,64,270,65),fixed:"closed",zone:"hold",axis:"x"},{id:"C",name:"Gate C · Bridge",rect:A(146,135,152,136),fixed:"open",zone:"bridge",axis:"x"}];Object.fromEntries(I.map((r,t)=>[r.id,t]));const D=[{id:"platform",name:"Station Platform",short:"Platform",rects:[E.platform,E.concourse],kind:"station",cap:2.5},{id:"forecourt",name:"Station Forecourt",short:"Forecourt",rects:[E.forecourt],kind:"plaza",cap:2.5},{id:"bypass",name:"West Exit Path",short:"West Exit",rects:[A(4,34,26,53)],kind:"lane",cap:2},{id:"bus",name:"Bus Stand",short:"Bus Stand",rects:[E.busStand],kind:"bus",cap:2.5},{id:"roadW",name:"Main Road (west)",short:"Road W",rects:[A(0,53,140,63)],kind:"road",cap:2},{id:"roadE",name:"Main Road (east)",short:"Road E",rects:[A(140,53,280,63)],kind:"road",cap:2},{id:"lane0",name:"Riverside Path",short:"Riverside",rects:[E.lane0],kind:"lane",cap:2},{id:"lane1",name:"West Lane",short:"West Lane",rects:[E.lane1],kind:"lane",cap:2,gate:"F"},{id:"lane2",name:"Bazaar Lane",short:"Bazaar Lane",rects:[E.lane2],kind:"lane",cap:2,gate:"B"},{id:"lane3",name:"Temple Lane",short:"Temple Lane",rects:[E.lane3],kind:"lane",cap:2,gate:"J"},{id:"lane4",name:"Diversion Lane",short:"Diversion",rects:[E.lane4],kind:"lane",cap:2,gate:"D"},{id:"alleyW",name:"West Cross Alley",short:"W Alley",rects:[E.alleyW],kind:"alley",cap:2},{id:"alleyE",name:"East Cross Alley",short:"E Alley",rects:[E.alleyE],kind:"alley",cap:2},{id:"temple",name:"Temple Courtyard",short:"Temple",rects:[A(110,63,170,124)],kind:"temple",cap:2.5},{id:"hold",name:"Holding Ground",short:"Holding",rects:[E.hold],kind:"hold",cap:3},{id:"promW",name:"Promenade (west)",short:"Prom W",rects:[A(4,124,96,134)],kind:"promenade",cap:2},{id:"promC",name:"Promenade (central)",short:"Prom C",rects:[A(96,124,158,134)],kind:"promenade",cap:2},{id:"promE",name:"Promenade (east)",short:"Prom E",rects:[A(158,124,250,134)],kind:"promenade",cap:2},{id:"ghat1",name:"Ghat 1",short:"Ghat 1",rects:[st[0]],kind:"ghat",cap:2.5},{id:"ghat2",name:"Ghat 2",short:"Ghat 2",rects:[st[1]],kind:"ghat",cap:2.5},{id:"ghat3",name:"Ghat 3 · Ram Kund",short:"Ghat 3",rects:[st[2]],kind:"ghat",cap:2.5},{id:"ghat4",name:"Ghat 4",short:"Ghat 4",rects:[st[3]],kind:"ghat",cap:2.5},{id:"ghat5",name:"Ghat 5",short:"Ghat 5",rects:[st[4]],kind:"ghat",cap:2.5},{id:"bridge",name:"Footbridge",short:"Bridge",rects:[E.bridge],kind:"bridge",cap:2,gate:"C"},{id:"bank",name:"South Bank Road",short:"Bank",rects:[E.bank],kind:"road",cap:2},{id:"camp",name:"Sadhugram Camp",short:"Camp",rects:[E.camp],kind:"camp",cap:2.5}],mt=Object.fromEntries(D.map((r,t)=>[r.id,t])),xt=255,bt=r=>A(r.x0+1,_t,r.x1-1,150),zt=[{id:"g1",name:"Ghat 1",cls:"in",rects:[bt(st[0])],zone:"ghat1"},{id:"g2",name:"Ghat 2",cls:"in",rects:[bt(st[1])],zone:"ghat2"},{id:"g3",name:"Ghat 3",cls:"in",rects:[bt(st[2])],zone:"ghat3"},{id:"g4",name:"Ghat 4",cls:"in",rects:[bt(st[3])],zone:"ghat4"},{id:"g5",name:"Ghat 5",cls:"in",rects:[bt(st[4])],zone:"ghat5"},{id:"temple",name:"Temple darshan",cls:"in",rects:[A(126,74,154,84)],zone:"temple"},{id:"station",name:"Station",cls:"out",rects:[E.platform]},{id:"busstop",name:"Bus stand",cls:"out",rects:[A(198,10,274,24)]},{id:"campdest",name:"Camp",cls:"out",rects:[A(100,186,275,208)]},{id:"holddest",name:"Holding ground",cls:"neutral",rects:[A(252,72,277,118)],zone:"hold"},{id:"shelter",name:"Shelter",cls:"neutral",rects:[E.concourse,A(114,108,168,116),A(198,8,274,14),A(252,96,277,118),A(100,186,275,208)]},{id:"escape",name:"Open ground",cls:"neutral",rects:[E.forecourt,E.road,A(252,66,277,118),E.camp,E.busStand]}],ke=0,Ht=5,be=6,ve=7,Se=8,Ft=9,ut=10,Ue=11,je=zt.length;function $e(r,t){if(t>=134&&t<150){for(const e of st)if(r>=e.x0&&r<e.x1)return t<_t?-Math.floor((t-134)/2)*.22-.22:-1.55;if(r>=E.bridge.x0&&r<E.bridge.x1)return .35}return t>=150&&t<176&&r>=E.bridge.x0&&r<E.bridge.x1?.35:0}const Pt=(r,t,e)=>t>=r.x0&&t<r.x1&&e>=r.z0&&e<r.z1;function tt(r,t,e){for(let n=Math.max(0,t.z0);n<Math.min(210,t.z1);n++)for(let i=Math.max(0,t.x0);i<Math.min(280,t.x1);i++)r[n*280+i]=e}function Ke(){const r=new Uint8Array(58800).fill(1);tt(r,Pe,2);for(const o of Object.values(E))tt(r,o,0);for(const o of st)tt(r,A(o.x0,o.z0,o.x1,_t),0),tt(r,A(o.x0,_t,o.x1,150),3);tt(r,He,1);for(const o of Oe)tt(r,o,1);for(const o of Be)tt(r,o,1);for(const o of _e)tt(r,o,1);const t=new Int8Array(58800).fill(-1);I.forEach((o,p)=>{tt(r,o.rect,0),tt(t,o.rect,p)});const e=new Uint8Array(58800).fill(xt);for(let o=0;o<210;o++)for(let p=0;p<280;p++){const u=o*280+p;if(!(r[u]===1||r[u]===2)){for(let k=0;k<D.length;k++)if(D[k].rects.some(m=>Pt(m,p,o))){e[u]=k;break}}}const n=zt.map(o=>{const p=new Uint8Array(58800);for(const u of o.rects)tt(p,u,1);for(let u=0;u<58800;u++)(r[u]===1||r[u]===2)&&(p[u]=0);return p}),i=new Int8Array(58800).fill(-1);zt[ut].rects.forEach((o,p)=>tt(i,o,p));const s=new Float32Array(D.length),a=new Float64Array(D.length),l=new Float64Array(D.length);for(let o=0;o<58800;o++){const p=e[o];p!==xt&&(s[p]++,a[p]+=o%280+.5,l[p]+=Math.floor(o/280)+.5)}const c=D.map((o,p)=>({x:a[p]/Math.max(1,s[p]),z:l[p]/Math.max(1,s[p])})),h=new Float32Array(58800);for(let o=0;o<210;o++)for(let p=0;p<280;p++)h[o*280+p]=$e(p+.5,o+.5);return{base:r,zone:e,gateCell:t,destMask:n,shelterPart:i,zoneArea:s,zoneCenter:c,height:h}}const Et=10,Nt=14,ce=1073741823,wt=new Int32Array(58800),Ut=64,te=Array.from({length:Ut},()=>new Int32Array(1024)),St=new Int32Array(Ut);function he(r,t){let e=te[r];if(St[r]>=e.length){const n=new Int32Array(e.length*2);n.set(e),te[r]=e=n}e[St[r]++]=t}function de(r,t,e,n){const i=n??{dist:new Float32Array(58800),dirX:new Float32Array(58800),dirZ:new Float32Array(58800)};wt.fill(ce),St.fill(0);let s=0;for(let u=0;u<58800;u++)e[u]&&r[u]&&(wt[u]=0,he(0,u),s++);let a=0,l=0;for(;s>0;){for(;St[a]===0;)a=(a+1)%Ut,l++;const u=te[a][--St[a]];s--;const k=wt[u];if(k!==l)continue;const m=u%280,x=u/280|0,f=m>0,b=m<279,w=x>0,z=x<209,T=f&&r[u-1]===1,L=b&&r[u+1]===1,g=w&&r[u-280]===1,Z=z&&r[u+280]===1;T&&(s+=c(u-1,k+Et)),L&&(s+=c(u+1,k+Et)),g&&(s+=c(u-280,k+Et)),Z&&(s+=c(u+280,k+Et)),T&&g&&r[u-280-1]&&(s+=c(u-280-1,k+Nt)),L&&g&&r[u-280+1]&&(s+=c(u-280+1,k+Nt)),T&&Z&&r[u+280-1]&&(s+=c(u+280-1,k+Nt)),L&&Z&&r[u+280+1]&&(s+=c(u+280+1,k+Nt))}function c(u,k){return k+=t[u],k<wt[u]?(wt[u]=k,he(k%Ut,u),1):0}const{dist:h,dirX:o,dirZ:p}=i;for(let u=0;u<58800;u++)h[u]=wt[u]>=ce?1/0:wt[u]/10;for(let u=0;u<58800;u++){const k=h[u];if(o[u]=0,p[u]=0,!isFinite(k)||k===0)continue;const m=u%280,x=u/280|0;let f=0,b=0;for(let z=-1;z<=1;z++){const T=x+z;if(!(T<0||T>=210))for(let L=-1;L<=1;L++){if(!L&&!z)continue;const g=m+L;if(g<0||g>=280)continue;const Z=h[T*280+g];if(!isFinite(Z))continue;const H=L&&z?1.41421356:1,W=(k-Z)/H;W>0&&(f+=L/H*W,b+=z/H*W)}}const w=Math.hypot(f,b);w>1e-6&&(o[u]=f/w,p[u]=b/w)}return i}const Ot=1e12;function fe(r,t,e,n,i){let s=0;n[0]=0,i[0]=-Ot,i[1]=Ot;for(let a=1;a<t;a++){let l=(r[a]+a*a-(r[n[s]]+n[s]*n[s]))/(2*a-2*n[s]);for(;l<=i[s];)s--,l=(r[a]+a*a-(r[n[s]]+n[s]*n[s]))/(2*a-2*n[s]);s++,n[s]=a,i[s]=l,i[s+1]=Ot}s=0;for(let a=0;a<t;a++){for(;i[s+1]<a;)s++;e[a]=(a-n[s])*(a-n[s])+r[n[s]]}}function ee(r,t){const e=t??new Float32Array(58800),n=Math.max(280,210),i=new Float64Array(n),s=new Float64Array(n),a=new Float64Array(n+1),l=new Int32Array(n),c=new Float64Array(58800);for(let h=0;h<280;h++){for(let o=0;o<210;o++)i[o]=r[o*280+h]?0:Ot;fe(i,210,s,l,a);for(let o=0;o<210;o++)c[o*280+h]=s[o]}for(let h=0;h<210;h++){for(let o=0;o<280;o++)i[o]=c[h*280+o];fe(i,280,s,l,a);for(let o=0;o<280;o++)e[h*280+o]=Math.sqrt(s[o])}return e}function Ze(r,t){const e=t??new Int32Array(58800);e.fill(-1);const n=new Int32Array(58800);let i=0,s=0;for(let a=0;a<58800;a++)r[a]&&(e[a]=a,n[s++]=a);for(;i<s;){const a=n[i++],l=a%280,c=a/280|0,h=e[a];l>0&&e[a-1]<0&&(e[a-1]=h,n[s++]=a-1),l<279&&e[a+1]<0&&(e[a+1]=h,n[s++]=a+1),c>0&&e[a-280]<0&&(e[a-280]=h,n[s++]=a-280),c<209&&e[a+280]<0&&(e[a+280]=h,n[s++]=a+280)}return e}const q=70,ct=53,ht=4;function se(r,t,e){for(let n=0;n<210;n++){const i=n*280;for(let s=0;s<280;s++){const a=s>1?r[i+s-2]:0,l=s>0?r[i+s-1]:0,c=s<279?r[i+s+1]:0,h=s<278?r[i+s+2]:0;e[i+s]=(a+4*l+6*r[i+s]+4*c+h)*.0625}}for(let n=0;n<210;n++){const i=n*280;for(let s=0;s<280;s++){const a=n>1?e[i-560+s]:0,l=n>0?e[i-280+s]:0,c=n<209?e[i+280+s]:0,h=n<208?e[i+2*280+s]:0;t[i+s]=(a+4*l+6*e[i+s]+4*c+h)*.0625}}}function Ct(r){const t=[];for(let e=0;e<58800;e++)r(e)&&t.push(e);return Int32Array.from(t)}let Dt=null;function ue(){if(Dt)return Dt;const r=Ke(),{base:t}=r,e=new Uint8Array(58800);for(let o=0;o<58800;o++)e[o]=t[o]===1||t[o]===2?1:0;const n=ee(e),i=new Uint8Array(58800);for(let o=0;o<58800;o++){let p=0;n[o]<=1.01?p=9:n[o]<=2.01&&(p=3),t[o]===3&&(p+=6),i[o]=p}const s=new Float32Array(58800);for(let o=0;o<58800;o++)s[o]=e[o]?0:1;const a=new Float32Array(58800);se(s,a,new Float32Array(58800));const l=r.destMask.map(o=>Ct(p=>o[p]===1)),c=o=>t[o]!==1&&t[o]!==2,h={train:Ct(o=>c(o)&&Pt({x0:22,z0:15,x1:118,z1:19},o%280,o/280|0)),bus:Ct(o=>c(o)&&Pt({x0:200,z0:26,x1:272,z1:46},o%280,o/280|0)),camp:Ct(o=>c(o)&&Pt(E.camp,o%280,o/280|0)&&(o/280|0)>186)};return Dt={world:r,staticCost:i,walkBlur:a,destCells:l,spawnCells:h},Dt}const Gt=[.13,.2,.4,.16,.11],Rt=(r,t,e)=>{const n=Math.min(1,Math.max(0,(e-r)/(t-r)));return n*n*(3-2*n)},Je=[{id:"normal",name:"Ordinary day",tagline:"Steady pilgrim traffic, trains every 2½ minutes",description:"A busy but ordinary morning. Use it as the baseline: both plans should stay comfortably below 2 p/m² and the AI should mostly leave things alone.",clockStart:8*3600,duration:600,baseLoad:1,load:()=>1,ghatWeights:()=>Gt,events:[]},{id:"snan",name:"Amrit Snan bathing hour",tagline:"The auspicious muhurat — everyone wants Ram Kund at once",description:"At the auspicious hour the inflow roughly triples and two thirds of pilgrims head for Ram Kund (Ghat 3). This is the classic Kumbh surge.",clockStart:3*3600+50*60,duration:720,baseLoad:1.25,load:r=>1.25+2.35*Rt(40,130,r)-1.9*Rt(430,560,r),ghatWeights:r=>{const e=.4+.27*(Rt(30,100,r)*(1-Rt(440,600,r))),n=(1-e)/(1-.4);return Gt.map((i,s)=>s===2?e:i*n)},events:[{t:40,end:480,kind:"surge",label:"Muhurat begins · inflow ×3"}]},{id:"jam",name:"Gate jammed shut",tagline:"Gate B on Bazaar Lane jams closed under load",description:"Bazaar Lane is the main artery to and from Ram Kund. Its gate jams shut. Nobody upstream knows until they reach it.",clockStart:9*3600+58*60,duration:660,baseLoad:1.7,load:()=>1.7,ghatWeights:()=>[.12,.18,.46,.14,.1],events:[{t:90,kind:"jam",gate:"B",label:"Gate B jams shut"}]},{id:"rumour",name:"Rumour & sudden run",tagline:"“The bridge is collapsing!” — panic spreads from the footbridge",description:"During the evening aarti a rumour that the footbridge is giving way starts a run. Panic spreads person to person; people sprint for open ground through narrow lanes.",clockStart:18*3600+25*60,duration:660,baseLoad:1.8,load:()=>1.8,ghatWeights:()=>[.12,.2,.42,.16,.1],events:[{t:150,kind:"rumour",x:149,z:131,radius:26,label:"Rumour at the footbridge"}]},{id:"convoy",name:"VIP convoy",tagline:"A VIP motorcade cordons the Main Road for darshan",description:"A VIP convoy drives to the temple. Police cordon the Main Road for five minutes and public darshan pauses. Station and bus-stand crowds lose their route to the ghats.",clockStart:10*3600+55*60,duration:660,baseLoad:1.6,load:()=>1.6,ghatWeights:()=>Gt,events:[{t:60,end:360,kind:"convoy",label:"Main Road cordoned for VIP convoy"}]},{id:"rain",name:"Sudden downpour",tagline:"A cloudburst sends thousands running for cover",description:"Heavy rain arrives. Walking slows on wet stone and most of the crowd heads for the nearest roof — the station concourse, the temple cloister, the bus shed.",clockStart:15*3600+10*60,duration:660,baseLoad:1.85,load:()=>1.85,ghatWeights:()=>Gt,events:[{t:120,end:480,kind:"rain",label:"Cloudburst"}]}],pe=Object.fromEntries(Je.map(r=>[r.id,r])),dt={x0:40,x1:280,z0:53,z1:63},S=14e3,ft=6,rt=0,vt=1,V=2,pt=3,qt=0,Bt=1,ne=2,It=4,Vt=5;function Xe(r){let t=r>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const qe=2.1,Ve=.3,Qe=28,me=.3,Ye=5,ts=.16,es=60,ss=.5,ge=.22,we=.9,Ae=.85,Qt=.085,Yt=8,ns=1,lt=1024,Mt=-1.2,Te=1,Me=new Float32Array(lt+1),Le=new Float32Array(lt+1);for(let r=0;r<=lt;r++){const t=Mt+(Te-Mt)*r/lt;Me[r]=Math.exp(t/Ve),Le[r]=Math.exp(t/ts)}const ye=lt/(Te-Mt);[0,1,2,3,4].map(r=>mt["ghat"+(r+1)]);const is=zt.map(r=>r.zone?mt[r.zone]:-1);class oe{shared;policy;simIndex;controller=null;rng;t=0;stepCount=0;alive=new Uint8Array(S);gen=new Uint8Array(S);px=new Float32Array(S);pz=new Float32Array(S);vx=new Float32Array(S);vz=new Float32Array(S);ax=new Float32Array(S);az=new Float32Array(S);cx=new Float32Array(S);cz=new Float32Array(S);hd=new Float32Array(S);rad=new Float32Array(S);v0=new Float32Array(S);comp=new Float32Array(S);dwellK=new Float32Array(S);rainU=new Float32Array(S);panic=new Float32Array(S);timer=new Float32Array(S);tx=new Float32Array(S);tz=new Float32Array(S);stuck=new Float32Array(S);spawnT=new Float32Array(S);plan=new Int8Array(S*ft);planLen=new Uint8Array(S);planIdx=new Uint8Array(S);state=new Uint8Array(S);origin=new Uint8Array(S);color=new Uint8Array(S);informed=new Uint8Array(S);flags=new Uint8Array(S);lastGate=new Int8Array(S);cellOf=new Int32Array(S);freeStack=new Int32Array(S);freeTop=0;hi=0;count=0;cellStart=new Int32Array(58801);cellItems=new Int32Array(S);hashFill=new Int32Array(58800);gateMode=I.map(t=>t.fixed);jammed=I.map(()=>!1);publicJam=I.map(()=>!1);scenarioClosed=I.map(()=>!1);cordon=!1;publicCordon=!1;blocked=new Uint8Array(58800);wallDist=new Float32Array(58800);evac=new Int32Array(58800);reveal=new Uint8Array(58800);shelterFull=[!1,!1,!1,!0,!0];fieldsAct=[];fieldsBel=[];fieldsDirty=!0;mapDirty=!0;discrepancy=!1;rain=!1;speedFactor=1;rumour=null;panicTau=75;panicSusc=1;templeClosed=!1;holdActive=!1;ghatAdvice=[1,1,1,1,1];deferCamp=!1;deferBus=!1;deferred=[];counts=new Float32Array(58800);density=new Float32Array(58800);panicGrid=new Float32Array(58800);tmpA=new Float32Array(58800);tmpB=new Float32Array(58800);flow=new Float32Array(q*ct*4);flowPressure=new Float32Array(q*ct);zone=D.map(()=>({count:0,density:0,peak:0,speed:0,cfi:0,pressure:0,slope:0,dangerTime:0}));zoneHist=D.map(()=>[]);zoneAlert=D.map(()=>0);gateCount=new Float32Array(I.length);gateRate=new Float32Array(I.length);series=[];log=[];logTotal=0;measureTimer=0;histTimer=0;flowToggle=0;peakZone=0;peakLocal=0;dangerTime=0;personDanger=0;criticalTime=0;bathed=0;departed=0;tripSum=0;spawned=0;nowPeak=0;nowLocal=0;nowInDanger=0;heldCount=0;constructor(t,e,n,i){this.shared=t,this.policy=e,this.simIndex=n,this.rng=Xe(i);for(let s=S-1;s>=0;s--)this.freeStack[this.freeTop++]=s;this.lastGate.fill(-1)}setGate(t,e,n){const i=I.findIndex(s=>s.id===t);return i<0||this.gateMode[i]===e?!1:(this.gateMode[i]=e,this.mapDirty=!0,n!==void 0&&this.addLog("gate",`${I[i].name} → ${os(e)}${n?" · "+n:""}`),!0)}effectiveClosed(t){return this.gateMode[t]==="closed"||this.jammed[t]||this.scenarioClosed[t]}jamGate(t){const e=I.findIndex(n=>n.id===t);this.jammed[e]=!0,this.mapDirty=!0}setCordon(t){this.cordon=t,t||(this.publicCordon=!1),this.mapDirty=!0}announceJams(){let t=!1;I.forEach((e,n)=>{this.jammed[n]&&!this.publicJam[n]&&(this.publicJam[n]=!0,t=!0)}),t&&(this.mapDirty=!0)}announceCordon(){this.publicCordon||(this.publicCordon=!0,this.mapDirty=!0)}setShelterFull(t,e){this.shelterFull[t]!==e&&(this.shelterFull[t]=e,this.fieldsDirty=!0)}rebuildMap(){const{base:t,gateCell:e}=this.shared.world,n=this.blocked,i=this.reveal,s=this.tmpA;s.fill(0);let a=!1;for(let c=0;c<58800;c++){const h=t[c];let o=h===1||h===2?1:0;const p=e[c];p>=0&&(this.gateMode[p]==="closed"||this.scenarioClosed[p]?o=1:this.jammed[p]&&(o=1,this.publicJam[p]||(s[c]=1,a=!0))),n[c]=o}if(this.cordon)for(let c=dt.z0;c<dt.z1;c++)for(let h=dt.x0;h<dt.x1;h++){const o=c*280+h;n[o]=1,this.publicCordon||(s[o]=1,a=!0)}this.discrepancy=a,ee(n,this.wallDist);const l=new Uint8Array(58800);for(let c=0;c<58800;c++)l[c]=n[c]?0:1;if(Ze(l,this.evac),i.fill(0),a){const c=new Uint8Array(58800);for(let o=0;o<58800;o++)c[o]=s[o]>0?1:0;const h=ee(c);for(let o=0;o<58800;o++)i[o]=h[o]<=9?1:0}this.mapDirty=!1,this.fieldsDirty=!0}passMask(t,e){const{base:n,gateCell:i}=this.shared.world,s=new Uint8Array(58800);for(let a=0;a<58800;a++){const l=n[a];if(l===1||l===2)continue;const c=i[a];if(c>=0){const h=this.gateMode[c];if(h==="closed"||this.scenarioClosed[c]||this.jammed[c]&&(!e||this.publicJam[c])||t==="in"&&h==="out"||t==="out"&&h==="in")continue}s[a]=1}if(this.cordon&&(!e||this.publicCordon))for(let a=dt.z0;a<dt.z1;a++)for(let l=dt.x0;l<dt.x1;l++)s[a*280+l]=0;return s}rebuildFields(){const{destMask:t,shelterPart:e}=this.shared.world,n=this.shared.staticCost,i={},s=(l,c)=>i[l+c]??=this.passMask(l,c),a=zt.map((l,c)=>{if(c!==ut)return t[c];const h=new Uint8Array(58800),o=this.shelterFull,p=o.every(Boolean);for(let u=0;u<58800;u++){const k=e[u];k>=0&&(p||!o[k])&&(h[u]=1)}return h});for(let l=0;l<je;l++){const c=zt[l].cls;if(this.fieldsAct[l]=de(s(c,!1),n,a[l],this.fieldsAct[l]),this.discrepancy){const h=this.fieldsBel[l];this.fieldsBel[l]=de(s(c,!0),n,a[l],h&&h!==this.fieldsAct[l]?h:void 0)}else this.fieldsBel[l]=this.fieldsAct[l]}this.fieldsDirty=!1}spawn(t,e=!1){if(!e&&this.policy==="ai"&&(this.deferCamp&&t.origin===ne||this.deferBus&&t.origin===Bt))return this.deferred.push(t),-1;if(this.freeTop===0)return-1;const n=this.freeStack[--this.freeTop];n>=this.hi&&(this.hi=n+1),this.alive[n]=1,this.gen[n]=this.gen[n]+1&255,this.px[n]=t.x,this.pz[n]=t.z,this.vx[n]=0,this.vz[n]=0,this.hd[n]=0,this.rad[n]=t.rad,this.v0[n]=t.v0,this.comp[n]=t.comp,this.dwellK[n]=t.dwellK,this.rainU[n]=t.rainU,this.color[n]=t.color,this.origin[n]=t.origin,this.panic[n]=0,this.timer[n]=0,this.stuck[n]=0,this.spawnT[n]=this.t,this.state[n]=rt,this.informed[n]=0,this.flags[n]=0,this.lastGate[n]=-1;let i=t.plan;this.policy==="ai"&&(i=i.slice(),t.comp<.8&&i[0]<5&&this.ghatAdvice.some(s=>s<.999)&&(i[0]=this.adviseGhat(i[0],t.u)),this.holdActive&&t.origin!==ne&&i.unshift(Ft),this.broadcastAll&&(this.informed[n]=1)),this.rain&&t.rainU<Ae&&(i=i.slice(),i.unshift(ut),this.flags[n]|=4);for(let s=0;s<i.length&&s<ft;s++)this.plan[n*ft+s]=i[s];return this.planLen[n]=Math.min(ft,i.length),this.planIdx[n]=0,this.count++,this.spawned++,n}broadcastAll=!1;adviseGhat(t,e){const n=[.13,.2,.4,.16,.11].map((a,l)=>(l===t?.55:a)*this.ghatAdvice[l]),i=n.reduce((a,l)=>a+l,0);let s=0;for(let a=0;a<5;a++)if(s+=n[a]/i,e<=s)return a;return 4}kill(t){for(this.alive[t]=0,this.freeStack[this.freeTop++]=t,this.count--;this.hi>0&&!this.alive[this.hi-1];)this.hi--}dest(t){return this.plan[t*ft+this.planIdx[t]]}insertStep(t,e){const n=this.planLen[t];if(n>=ft)return;const i=t*ft;for(let s=n;s>this.planIdx[t];s--)this.plan[i+s]=this.plan[i+s-1];this.plan[i+this.planIdx[t]]=e,this.planLen[t]=n+1,this.state[t]=rt}setDest(t,e){this.plan[t*ft+this.planIdx[t]]=e,this.state[t]===vt&&(this.state[t]=rt)}advance(t){this.dest(t)<5&&!(this.flags[t]&8)&&(this.flags[t]|=1,this.bathed++),this.flags[t]&=-9,this.planIdx[t]++,this.state[t]=rt,this.stuck[t]=0,this.planIdx[t]>=this.planLen[t]&&(this.departed++,this.kill(t))}releaseHeld(t){let e=0;for(let n=0;n<this.hi&&e<t;n++)this.alive[n]&&this.state[n]===pt&&(this.timer[n]=this.rng()*12,this.state[n]=V,e++);return e}startRumour(t,e,n){this.rumour={x:t,z:e,t:this.t};const i=n*n;for(let s=0;s<this.hi;s++){if(!this.alive[s])continue;const a=this.px[s]-t,l=this.pz[s]-e;a*a+l*l<i&&(this.panic[s]=1)}}setRain(t){if(this.rain=t,this.speedFactor=t?.85:1,t)for(let e=0;e<this.hi;e++){if(!this.alive[e]||this.flags[e]&4)continue;const n=this.state[e],i=this.dest(e);(n===rt||n===V&&i===Ht)&&this.rainU[e]<Ae&&i!==ut&&(this.insertStep(e,ut),this.flags[e]|=4)}else for(let e=0;e<this.hi;e++)this.alive[e]&&this.dest(e)===ut&&(this.state[e]===V?this.timer[e]=this.rng()*80:(this.flags[e]|=8,this.advance(e)))}addLog(t,e,n){this.log.push({t:this.t,sim:this.simIndex,kind:t,text:e,zone:n}),this.logTotal++,this.log.length>400&&this.log.splice(0,this.log.length-400)}step(t){this.mapDirty&&this.rebuildMap(),this.fieldsDirty&&this.rebuildFields(),this.t+=t,this.stepCount++,this.buildHash(),this.forces(t),this.integrate(t),this.measureTimer+=t,this.measureTimer>=.5-1e-6&&(this.measure(this.measureTimer),this.measureTimer=0),this.controller&&this.controller.tick(this,t)}buildHash(){const t=this.cellStart,e=this.cellItems,n=this.cellOf;t.fill(0);const i=this.hi,s=this.alive,a=this.px,l=this.pz;for(let h=0;h<i;h++){if(!s[h])continue;let o=a[h]|0,p=l[h]|0;o<0?o=0:o>=280&&(o=279),p<0?p=0:p>=210&&(p=209);const u=p*280+o;n[h]=u,t[u+1]++}for(let h=0;h<58800;h++)t[h+1]+=t[h];const c=this.hashFill;c.fill(0);for(let h=0;h<i;h++){if(!s[h])continue;const o=n[h],p=t[o]+c[o];e[p]=h,c[o]++}}sampleDir(t,e,n,i){const s=e-.5,a=n-.5;let l=Math.floor(s),c=Math.floor(a);l<0?l=0:l>278&&(l=278),c<0?c=0:c>208&&(c=208);let h=s-l,o=a-c;h=h<0?0:h>1?1:h,o=o<0?0:o>1?1:o;const p=c*280+l,u=(1-h)*(1-o),k=h*(1-o),m=(1-h)*o,x=h*o,f=t.dirX,b=t.dirZ;let w=f[p]*u+f[p+1]*k+f[p+280]*m+f[p+280+1]*x,z=b[p]*u+b[p+1]*k+b[p+280]*m+b[p+280+1]*x;const T=Math.hypot(w,z);T>1e-4?(w/=T,z/=T):(w=0,z=0),i[0]=w,i[1]=z}forces(t){const{alive:e,px:n,pz:i,vx:s,vz:a,ax:l,az:c,rad:h,v0:o,state:p,panic:u,informed:k,cellOf:m}=this,x=this.cellStart,f=this.cellItems,b=this.wallDist,w=this.rng,z=[0,0],T=this.speedFactor,L=this.rumour,g=this.shared.world.base,Z=this.hi,H=this.stepCount%20;for(let W=0;W<Z;W++){if(!e[W])continue;const $=n[W],O=i[W],C=m[W];let N=0,F=0,J=0;const X=p[W],_=u[W];if(_>.25){if(this.sampleDir(this.fieldsAct[Ue],$,O,z),N=z[0],F=z[1],L){const K=$-L.x,j=O-L.z,Q=Math.hypot(K,j);Q<70&&Q>.1&&(N+=K/Q*.45*_,F+=j/Q*.45*_)}const R=Math.hypot(N,F);if(R>1e-4&&(N/=R,F/=R),J=o[W]*(1+1.15*_),X===V||X===pt||X===vt){if(X===pt)p[W]=rt;else if(this.flags[W]|=8,this.advance(W),!e[W])continue}}else if(X===rt){const R=this.dest(W),K=this.fieldsAct[R];let j=k[W]?K:this.fieldsBel[R];isFinite(j.dist[C])||(j=K),!isFinite(K.dist[C])&&W%20===H&&this.replan(W,R),this.sampleDir(j,$,O,z),N=z[0]+z[1]*ge,F=z[1]-z[0]*ge;const Q=Math.hypot(N,F);Q>1e-4&&(N/=Q,F/=Q),J=o[W]}else if(X===vt){let R=this.tx[W]-$,K=this.tz[W]-O;const j=Math.hypot(R,K);j>.001&&(R/=j,K/=j),N=R,F=K,J=Math.min(o[W],.4+j*.5)}g[C]===3&&(J*=.55);const at=this.stuck[W]>8?Math.min(1,(this.stuck[W]-8)/40):0;J*=T*(1+.45*at);const M=N*J,d=F*J,y=_>.25?.35:ss;let v=(M-s[W])/y,G=(d-a[W])/y,U=N,P=F;if(J===0){const R=Math.hypot(s[W],a[W]);R>.05&&(U=s[W]/R,P=a[W]/R)}const nt=h[W],it=C%280,Wt=C/280|0,Ce=Wt>0?Wt-1:0,De=Wt<209?Wt+1:Wt,Ge=it>0?it-1:0,Re=it<279?it+1:it,Ie=qe*(1+.8*_)*(1-.5*at);let ae=0,re=0;for(let R=Ce;R<=De;R++)for(let K=Ge;K<=Re;K++){const j=R*280+K,Q=x[j+1];for(let gt=x[j];gt<Q;gt++){const Y=f[gt];if(Y===W)continue;let ot=$-n[Y],At=O-i[Y],Lt=ot*ot+At*At;if(Lt>ns)continue;Lt<1e-6&&(ot=w()-.5,At=w()-.5,Lt=ot*ot+At*At+1e-6);const Kt=Math.sqrt(Lt),Zt=ot/Kt,Jt=At/Kt,yt=nt+h[Y]-Kt;let kt=(yt-Mt)*ye|0;kt<0?kt=0:kt>lt&&(kt=lt);const le=-(Zt*U+Jt*P);let Xt=Ie*Me[kt]*(me+(1-me)*(1+le)*.5);yt>0&&(Xt+=Qe*yt,yt>Qt&&(ae+=.5*(yt-Qt)*Zt,re+=.5*(yt-Qt)*Jt)),v+=Xt*Zt,G+=Xt*Jt,le>.4&&J>0&&s[Y]*U+a[Y]*P<-.25&&(v+=we*P,G-=we*U)}}if(b[C]<2.6){const R=this.wdAt($+.35,O)-this.wdAt($-.35,O),K=this.wdAt($,O+.35)-this.wdAt($,O-.35),j=Math.hypot(R,K);if(j>1e-4){const Q=this.wdAt($,O)-.5,gt=nt-Q;let Y=(gt-Mt)*ye|0;Y<0?Y=0:Y>lt&&(Y=lt);let ot=Ye*Le[Y];gt>0&&(ot+=es*gt),v+=ot*R/j,G+=ot*K/j}}v+=(w()-.5)*.3,G+=(w()-.5)*.3;const jt=Math.hypot(v,G),$t=14;jt>$t&&(v*=$t/jt,G*=$t/jt),l[W]=v,c[W]=G,this.cx[W]=ae,this.cz[W]=re}}wdAt(t,e){const n=t-.5,i=e-.5;let s=Math.floor(n),a=Math.floor(i);s<0?s=0:s>278&&(s=278),a<0?a=0:a>208&&(a=208);let l=n-s,c=i-a;l=l<0?0:l>1?1:l,c=c<0?0:c>1?1:c;const h=a*280+s,o=this.wallDist;return(o[h]*(1-l)+o[h+1]*l)*(1-c)+(o[h+280]*(1-l)+o[h+280+1]*l)*c}replan(t,e){const n=this.cellOf[t],i=this.fieldsAct;if(e<5){let s=-1,a=1/0;for(let l=0;l<5;l++){const c=i[l].dist[n];c<a&&(a=c,s=l)}s>=0&&this.setDest(t,s)}else(e===Ht||e===ut||e===Ft)&&(this.flags[t]|=8,this.advance(t))}integrate(t){const{alive:e,px:n,pz:i,vx:s,vz:a,ax:l,az:c,state:h,panic:o,informed:p,blocked:u,evac:k,hd:m}=this,{zone:x,gateCell:f}=this.shared.world,b=this.reveal,w=this.discrepancy,z=this.hi,T=t/this.panicTau,L=this.hashFill;L.fill(0);for(let g=0;g<z;g++)e[g]&&L[this.cellOf[g]]++;for(let g=0;g<z;g++){if(!e[g])continue;const Z=o[g];let H=s[g]+l[g]*t,W=a[g]+c[g]*t;const $=Z>.25?3.2:2.2,O=Math.hypot(H,W);O>$&&(H*=$/O,W*=$/O);let C=n[g],N=i[g],F=(N|0)*280+(C|0);if(u[F]){const M=k[F];if(M>=0&&M!==F){const d=M%280+.5,y=(M/280|0)+.5,v=d-C,G=y-N,U=Math.hypot(v,G)||1;H=v/U*1.4,W=G/U*1.4,C+=H*t+this.cx[g],N+=W*t+this.cz[g]}}else{const M=C+H*t+this.cx[g],d=N+W*t+this.cz[g],y=M>=0&&M<280,v=d>=0&&d<210,G=(N|0)*280,U=C|0,P=y&&v?(d|0)*280+(M|0):-1,nt=y?G+(M|0):-1,it=v?(d|0)*280+U:-1;P>=0&&!u[P]&&(P===F||L[P]<Yt)?(C=M,N=d):nt>=0&&!u[nt]&&(nt===F||L[nt]<Yt)?(C=M,W*=.3):it>=0&&!u[it]&&(it===F||L[it]<Yt)?(N=d,H*=.3):(H*=.2,W*=.2)}const J=(N|0)*280+(C|0);J!==F&&(L[F]--,L[J]++),n[g]=C,i[g]=N,s[g]=H,a[g]=W;const X=H*H+W*W;if(X>.04){let d=Math.atan2(H,W)-m[g];d>Math.PI?d-=2*Math.PI:d<-Math.PI&&(d+=2*Math.PI),m[g]+=d*.25}Z>0&&(o[g]=Math.max(0,Z-T)),F=(N|0)*280+(C|0),w&&!p[g]&&b[F]&&(p[g]=1);const _=f[F];_>=0?this.lastGate[g]!==_&&(this.lastGate[g]=_,this.gateCount[_]++):this.lastGate[g]=-1;const at=h[g];if(at===rt){if(o[g]>.25)continue;const M=this.dest(g),d=x[F],y=is[M],v=this.shared.world.destMask[M][F]===1;if(M===be||M===ve||M===Se){v&&(this.departed++,this.tripSum+=this.t-this.spawnT[g],this.kill(g));continue}if(M===ut){v&&(h[g]=V,this.timer[g]=this.rain?1e9:this.rng()*30);continue}(v||M<5&&d===y)&&(this.pickTarget(g,M),h[g]=vt,this.timer[g]=0);const G=Math.sqrt(X);this.stuck[g]=G<.12?this.stuck[g]+t:Math.max(0,this.stuck[g]-t)}else if(at===vt){const M=this.tx[g]-C,d=this.tz[g]-N;this.timer[g]+=t;const y=Math.sqrt(X);if(this.stuck[g]=y<.12?this.stuck[g]+t:Math.max(0,this.stuck[g]-t),M*M+d*d<.6||this.stuck[g]>6||this.timer[g]>70){const v=this.dest(g);h[g]=v===Ft?pt:V,this.timer[g]=v<5?60+100*this.dwellK[g]:v===Ht?25+45*this.dwellK[g]:1e9,this.stuck[g]=0}}else at===V&&(this.timer[g]-=t,this.timer[g]<=0&&this.advance(g))}}pickTarget(t,e){const n=this.shared.destCells[e];let i=n[this.rng()*n.length|0],s=this.density[i];for(let a=0;a<3;a++){const l=n[this.rng()*n.length|0];this.density[l]<s&&(i=l,s=this.density[l])}this.tx[t]=i%280+.2+this.rng()*.6,this.tz[t]=(i/280|0)+.2+this.rng()*.6}measure(t){const{alive:e,px:n,pz:i,vx:s,vz:a,panic:l,state:c,counts:h,density:o,cellOf:p}=this,{zone:u,base:k}=this.shared.world,m=this.hi;h.fill(0);const x=this.panicGrid;x.fill(0);let f=!1;for(let d=0;d<m;d++){if(!e[d])continue;const y=(i[d]|0)*280+(n[d]|0);p[d]=y,h[y]++,l[d]>.5&&(x[y]++,f=!0)}se(h,this.tmpA,this.tmpB);const b=this.shared.walkBlur;let w=0;for(let d=0;d<58800;d++){const y=k[d];if(y===1||y===2){o[d]=0;continue}const v=this.tmpA[d]/Math.max(b[d],.35);o[d]=v,v>w&&(w=v)}if(f){se(x,this.tmpA,this.tmpB);const d=this.panicSusc;for(let y=0;y<m;y++){if(!e[y]||l[y]>.6)continue;this.tmpA[p[y]]/Math.max(b[p[y]],.35)>.35&&this.rng()<.4*d&&(l[y]=Math.max(l[y],.8))}}const z=D.length,T=new Float32Array(z),L=new Float32Array(z),g=new Float32Array(z),Z=new Float32Array(z),H=new Float32Array(z),W=new Float32Array(z),$=new Float32Array(z);let O=0,C=0;for(let d=0;d<m;d++){if(!e[d])continue;const y=p[d],v=u[y],G=o[y];if(G>=It&&O++,(c[d]===pt||c[d]!==V&&this.dest(d)===Ft)&&C++,v===xt)continue;T[v]++,L[v]+=G;const U=Math.hypot(s[d],a[d]);if(g[v]+=U,U>.25&&c[d]!==V){const P=s[d]/U,nt=a[d]/U;H[v]+=P*P,W[v]+=nt*nt,$[v]+=P*nt}}C+=this.deferred.length;for(let d=0;d<58800;d++){const y=u[d];y!==xt&&o[d]>Z[y]&&(Z[y]=o[d])}const N=new Float32Array(z),F=new Float32Array(z),J=new Float32Array(z),X=new Float32Array(z);for(let d=0;d<z;d++){const y=.5*Math.atan2(2*$[d],H[d]-W[d]);N[d]=Math.cos(y),F[d]=Math.sin(y)}for(let d=0;d<m;d++){if(!e[d]||c[d]===V)continue;const y=u[p[d]];if(y===xt)continue;const v=Math.hypot(s[d],a[d]);if(v<.25)continue;const G=(s[d]*N[y]+a[d]*F[y])/v;G>.5?J[y]++:G<-.5&&X[y]++}let _=0,at=!1,M=!1;for(let d=0;d<z;d++){const y=this.zone[d];y.count=T[d],y.density=T[d]>0?L[d]/T[d]:0,y.peak=Z[d],y.speed=T[d]>0?g[d]/T[d]:0;const v=J[d]+X[d],G=v>=10?2*Math.min(J[d],X[d])/v:0;y.cfi=y.cfi*.6+G*.4;const U=T[d]>=30;U&&y.density>_&&(_=y.density),U&&y.density>=It&&(at=!0,y.dangerTime+=t,y.density>=Vt&&(M=!0));const P=U?y.density>=Vt?2:y.density>=It?1:0:0;P>this.zoneAlert[d]?(this.addLog("alert",`${D[d].short} ${P===2?"CRITICAL":"danger"} · ${y.density.toFixed(1)} p/m²`,d),this.zoneAlert[d]=P):P<this.zoneAlert[d]&&y.density<(this.zoneAlert[d]===2?Vt-.6:It-.6)&&(this.zoneAlert[d]=P,P===0&&this.addLog("ok",`${D[d].short} back below danger`,d))}if(this.nowPeak=_,this.nowLocal=w,this.nowInDanger=O,this.heldCount=C,_>this.peakZone&&(this.peakZone=_),w>this.peakLocal&&(this.peakLocal=w),at&&(this.dangerTime+=t),M&&(this.criticalTime+=t),this.personDanger+=O*t,this.flowToggle^=1,this.flowToggle&&this.measureFlow(),this.histTimer+=t,this.histTimer>=5-1e-6){this.histTimer=0;for(let d=0;d<z;d++){const y=this.zoneHist[d];y.push(this.zone[d].density),y.length>48&&y.shift(),this.zone[d].slope=as(y,12)}for(let d=0;d<I.length;d++)this.gateRate[d]=this.gateRate[d]*.5+this.gateCount[d]*12*.5,this.gateCount[d]=0;this.series.push({t:this.t,peak:_,local:w,onsite:this.count,inDanger:O,held:C,bathed:this.bathed,danger:this.dangerTime})}}measureFlow(){const{alive:t,px:e,pz:n,vx:i,vz:s,state:a,density:l}=this,c=this.flow;c.fill(0);const h=this.hi,o=this.flowPressure;o.fill(0);for(let f=0;f<h;f++){if(!t[f]||a[f]===V||a[f]===pt)continue;const b=Math.hypot(i[f],s[f]);if(b<.15)continue;const w=(n[f]/ht|0)*q+(e[f]/ht|0);c[w*4]+=i[f],c[w*4+1]+=s[f],c[w*4+3]++,o[w]+=b*b}const p=new Float32Array(q*ct),u=new Float32Array(q*ct),k=new Float32Array(q*ct);for(let f=0;f<q*ct;f++){if(c[f*4+3]<1)continue;const w=Math.hypot(c[f*4],c[f*4+1]);w>1e-4&&(u[f]=c[f*4]/w,k[f]=c[f*4+1]/w)}for(let f=0;f<h;f++){if(!t[f]||a[f]===V||a[f]===pt)continue;const b=Math.hypot(i[f],s[f]);if(b<.15)continue;const w=(n[f]/ht|0)*q+(e[f]/ht|0);(i[f]*u[w]+s[f]*k[w])/b<-.4&&p[w]++}for(let f=0;f<q*ct;f++){const b=c[f*4+3];if(b<1){o[f]=0;continue}const w=c[f*4]/b,z=c[f*4+1]/b;c[f*4]=w,c[f*4+1]=z,c[f*4+2]=b>=4?Math.min(1,2*p[f]/b):0;const T=Math.max(0,o[f]/b-(w*w+z*z)),L=Math.min(279,f%q*ht+2),g=Math.min(209,(f/q|0)*ht+2);o[f]=l[g*280+L]*T}const m=new Float32Array(D.length),x=this.shared.world.zone;for(let f=0;f<q*ct;f++){if(c[f*4+3]<4)continue;const b=Math.min(279,f%q*ht+2),w=Math.min(209,(f/q|0)*ht+2),z=x[w*280+b];z!==xt&&o[f]>m[z]&&(m[z]=o[f])}for(let f=0;f<D.length;f++)this.zone[f].pressure=this.zone[f].pressure*.5+m[f]*.5}predict(t,e){const n=this.zone[t];return Math.max(0,n.density+Math.max(-1,n.slope)*e)}clone(t,e,n){const i=new oe(this.shared,t,e,n),s=["alive","gen","px","pz","vx","vz","hd","rad","v0","comp","dwellK","rainU","panic","timer","tx","tz","stuck","spawnT","plan","planLen","planIdx","state","origin","color","informed","flags","lastGate","cellOf","freeStack","density"];for(const a of s)i[a].set(this[a]);i.freeTop=this.freeTop,i.hi=this.hi,i.count=this.count,i.gateMode=this.gateMode.slice();for(let a=0;a<D.length;a++)i.zone[a]={...this.zone[a],dangerTime:0},i.zoneHist[a]=this.zoneHist[a].slice();return i.gateRate.set(this.gateRate),i}resetMetrics(){this.t=0,this.peakZone=0,this.peakLocal=0,this.dangerTime=0,this.personDanger=0,this.criticalTime=0,this.bathed=0,this.departed=0,this.tripSum=0,this.spawned=0,this.series=[],this.log=[],this.logTotal=0;for(const t of this.zone)t.dangerTime=0;for(let t=0;t<this.hi;t++)this.spawnT[t]=0;this.zoneAlert.fill(0)}}function os(r){return r==="open"?"OPEN":r==="closed"?"CLOSED":r==="in"?"IN-ONLY":"OUT-ONLY"}function as(r,t){const e=Math.min(t,r.length);if(e<3)return 0;const n=r.length-e;let i=0,s=0,a=0,l=0;for(let h=0;h<e;h++){const o=h*5,p=r[n+h];i+=o,s+=p,a+=o*o,l+=o*p}const c=e*a-i*i;return c===0?0:(e*l-i*s)/c*60}const B=mt,Tt=[B.ghat1,B.ghat2,B.ghat3,B.ghat4,B.ghat5],ie=["Ghat 1","Ghat 2","Ghat 3","Ghat 4","Ghat 5"],xe=["F","F","B","J","D"],rs=[B.lane1,B.lane2,B.lane3,B.bridge],ls={normal:{F:"open",B:"open",J:"open",D:"closed"},oneway:{F:"in",B:"out",J:"out",D:"in"}},cs=new Set([mt.hold,mt.camp]),hs=new Set([mt.platform,mt.temple,mt.bus]);function ds(r,t){const e=Tt[t];return Math.max(r.zone[e].density,r.predict(e,3))}function Fe(r,t,e){let n=-1,i=1/0;for(let s=0;s<5;s++){if(s===t)continue;const a=e!==void 0?r.fieldsAct[ke+s].dist[e]:0;if(!isFinite(a))continue;const l=ds(r,s)+a/140;l<i&&(i=l,n=s)}return n}function Ee(r,t){const e=D[t],n=r.zone[t],i=r.predict(t,3),s=Math.max(n.density,i);if(n.speed>1.45&&n.count>25)return"PA calm message now · open all exits (Gates D, H, W) · stop inflow";const a=I.findIndex((l,c)=>r.jammed[c]&&(l.zone===e.id||e.id==="roadW"&&l.id==="B"));if(a>=0)return`Gate ${I[a].id} jammed: broadcast closure · divert via Gate D & West Lane`;switch(e.kind){case"ghat":{const l=Tt.indexOf(t),c=Fe(r,l),h=c>=0?ie[c]:"other ghats";return s>=3.2?`Close Gate ${xe[l]} (inbound), open Gate D · PA: reroute to ${h} · hold new arrivals`:s>=2.4?`Signage: “${h} less crowded” · prepare to meter Gate ${xe[l]}`:"Normal — keep monitoring"}case"lane":case"bridge":return n.cfi>.25&&n.density>1?e.kind==="bridge"?"Counter-flow on bridge: pause camp departures, alternate direction in pulses":`Counter-flow: make ${e.short} one-way (Gate ${e.gate??"—"} in-only), outbound via Temple Lane`:s>=3?`Meter Gate ${e.gate??"upstream"} · hold inflow at Holding Ground`:"Normal — keep monitoring";case"promenade":return s>=3?"Hold inflow at Holding Ground (open Gate H) · release in pulses":n.cfi>.3&&n.density>1.2?"Separate flows: one-way lanes (B/F in, J/D out)":"Normal — keep monitoring";case"plaza":case"station":return r.cordon?"Road cordoned: open Gate W, send arrivals by Riverside Path":s>=2.6?"Open Gate W (west exit) · meter platform exit · PA at concourse":"Normal — keep monitoring";case"road":return r.cordon?"VIP cordon: divert via Gate W & Riverside Path · hold buses outside town":s>=2.8?"Hold arrivals at Holding Ground · stagger Gate A":"Normal — keep monitoring";case"hold":return r.heldCount>0?"Release in pulses of ~80 when ghats < 2.5 p/m²":"Standby — open Gate H when ghats forecast > 3 p/m²";case"temple":return r.templeClosed?"VIP darshan: public darshan paused — hold queue on Main Road side":s>=3?"Pause entry at Gate E · speed up exit at Gate T":"Normal — keep monitoring";case"bus":return s>=2.6||r.cordon?"Hold incoming buses at outer parking":"Normal — keep monitoring";default:return s>=3?"Reduce inflow upstream · PA advisory":"Normal — keep monitoring"}}class fs{tick(){}advice(t,e){return Ee(t,e)}}class us{scenario;acc=0;mode="normal";calmSince=-1e9;lastPA={};jamSeen=I.map(()=>-1);panicHandled=-1e9;holdSince=-1e9;lastRelease=-1e9;sensor=new Float32Array(D.length);noiseSeed=1;releaseAcc=0;sheltersOpened=!1;pressure=0;actions=0;constructor(t){this.scenario=t}advice(t,e){return Ee(t,e)}noise(){return this.noiseSeed=this.noiseSeed*16807%2147483647,(this.noiseSeed/2147483647-.5)*.08}pa(t,e,n,i=30,s){return(this.lastPA[e]??-1e9)+i>t.t?!1:(this.lastPA[e]=t.t,t.addLog("pa",n,s),this.actions++,!0)}gate(t,e,n,i){t.setGate(e,n,i)&&this.actions++}tick(t,e){if(this.acc+=e,(!t.deferCamp||!t.deferBus)&&t.deferred.length){this.releaseAcc=Math.min(3,this.releaseAcc+e*(this.pressure<2.2?1.5:.4));for(let n=0;n<t.deferred.length&&this.releaseAcc>=1;n++){const i=t.deferred[n];(i.origin===2&&!t.deferCamp||i.origin===1&&!t.deferBus)&&(t.deferred.splice(n,1),n--,t.spawn(i,!0),this.releaseAcc-=1)}}this.acc<2||(this.acc=0,this.decide(t))}decide(t){const e=t.t;for(let m=0;m<D.length;m++)this.sensor[m]=t.zone[m].density*(1+this.noise());const n=m=>this.sensor[B[m]],i=[0,1,2,3,4].map(m=>Math.max(this.sensor[Tt[m]],t.predict(Tt[m],3))),s=Math.max(...i),a=Math.max(n("lane1"),n("lane2"),n("lane3"),n("bridge"),n("lane0"));for(let m=0;m<5;m++)t.ghatAdvice[m]=Math.min(1,Math.max(.06,1-(i[m]-1.8)/1.3));for(let m=0;m<5;m++){if(i[m]<2.6)continue;let x=0;const f=t.fieldsAct[ke+m],b=[0,0,0,0,0];for(let w=0;w<t.hi;w++){if(!t.alive[w]||t.state[w]!==rt||t.dest(w)!==m||t.flags[w]&2)continue;const z=t.cellOf[w];if(f.dist[z]<30||t.comp[w]>.72)continue;const T=Fe(t,m,z);T<0||i[T]>i[m]-.6||(t.setDest(w,T),t.flags[w]|=2,b[T]++,x++)}if(x>15){const w=b.indexOf(Math.max(...b));this.pa(t,"reroute"+m,`PA: “${ie[m]} is full — please use ${ie[w]}” · ${x} pilgrims redirected`,25,Tt[m])}}const l=rs.some(m=>t.zone[m].cfi>.3&&this.sensor[m]>1.5),c=i[2]>2.8||n("promC")>2.5||s>3;let h=this.mode;if(l||c?(h="oneway",this.calmSince=-1):this.mode==="oneway"&&(a<1&&s<2?this.calmSince<0&&(this.calmSince=e):this.calmSince=-1,this.calmSince>0&&e-this.calmSince>150&&(h="normal")),h!==this.mode){this.mode=h;const m=h==="oneway"?c?"Ram Kund forecast critical — close Bazaar Lane inbound, open diversion":"counter-flow — separate inbound and outbound lanes":"flows normal again";for(const[x,f]of Object.entries(ls[h]))this.gate(t,x,f,m);h==="oneway"&&this.pa(t,"loop","PA: “To the ghats by West Lane or Diversion Lane (Gate D). Return by Bazaar Lane or Temple Lane.”",20)}c&&this.mode==="oneway"&&this.pa(t,"surge",this.scenario.id==="snan"?"PA: “Ram Kund is full. All ghats are equally sacred at this muhurat — please follow volunteers to Ghats 1, 4 and 5.”":"PA: “Ram Kund is crowded — Ghats 1, 4 and 5 have space. Please follow the volunteers.”",60,B.ghat3);let o=0;for(let m=0;m<D.length;m++){if(cs.has(m)||t.zone[m].count<30||t.rain&&hs.has(m))continue;const x=Math.max(this.sensor[m],Math.min(this.sensor[m]+.8,t.predict(m,2)));x>o&&(o=x)}if(this.pressure=o,!t.holdActive&&o>2.6?(t.holdActive=!0,t.deferCamp=!0,this.holdSince=e,this.gate(t,"H","open","holding ground in use"),this.pa(t,"hold","PA: “Pilgrims arriving by train and bus — please wait at the Holding Ground; you will be released in batches”",30,B.hold),t.addLog("hold","Holding mode ON · camp departures paused (bridge metering)")):t.holdActive&&o<2&&e-this.holdSince>60&&(t.holdActive=!1,t.deferCamp=!1,t.addLog("hold","Holding mode OFF · releasing in batches")),t.heldCount>0&&e-this.lastRelease>=10){const m=o<1.8?90:o<2.3?45:0;if(m>0){const x=t.releaseHeld(m);x>0&&(this.lastRelease=e,x>=25&&t.addLog("hold",`Released ${x} from Holding Ground`,B.hold))}}I.forEach((m,x)=>{if(t.jammed[x]&&(this.jamSeen[x]<0&&(this.jamSeen[x]=e),!t.publicJam[x]&&e-this.jamSeen[x]>=12)){t.announceJams(),t.broadcastAll=!0;for(let f=0;f<t.hi;f++)t.alive[f]&&(t.informed[f]=1);t.addLog("alert",`${m.name}: zero flow with crowd waiting — gate jammed`),this.gate(t,"D","in",`diversion for jammed Gate ${m.id}`),this.gate(t,"J","out","outbound relief"),this.gate(t,"H","open","overflow"),this.pa(t,"jam"+m.id,`PA: “Gate ${m.id} is closed. Please use West Lane or the Diversion Lane (Gate D)”`,30),this.mode==="normal"&&(this.mode="oneway")}});let p=-1;for(let m=0;m<D.length;m++)if(t.zone[m].speed>1.45&&t.zone[m].count>25){p=m;break}p>=0&&e-this.panicHandled>60&&(this.panicHandled=e,t.panicTau=8,t.panicSusc=.15,t.addLog("alert",`Sudden running detected in ${D[p].short}`,p),this.pa(t,"calm","PA (Hindi · Marathi · English): “The bridge is safe. Do not run. Stand still and follow the volunteers.”",15,p),this.gate(t,"D","open","emergency egress"),this.gate(t,"H","open","emergency egress"),this.gate(t,"W","open","emergency egress"),this.gate(t,"J","open","emergency egress"),t.holdActive||(t.holdActive=!0,t.deferCamp=!0,this.holdSince=e,t.addLog("hold","Inflow paused during incident")));const u=this.scenario.events.find(m=>m.kind==="rain");if(u&&e>=u.t-30&&e<(u.end??1e9)){e<u.t&&(this.gate(t,"H","open","IMD nowcast: heavy rain in 30 s — tents open as shelter"),this.pa(t,"rainwarn","PA: “Rain expected. Covered shelters are open at the Holding Ground, the camp and the bus shed — do not crowd the station.”",60)),e>=u.t-30&&t.shelterFull[3]&&!this.sheltersOpened&&(this.sheltersOpened=!0,t.setShelterFull(3,!1),t.setShelterFull(4,!1),t.addLog("info","Holding Ground tents and camp pandals opened as public shelter"));const m=[[0,B.platform],[1,B.temple],[2,B.bus],[3,B.hold],[4,B.camp]];for(const[x,f]of m){const b=this.sensor[f];b>2.2&&!t.shelterFull[x]?(t.setShelterFull(x,!0),this.pa(t,"full"+x,`Shelter at ${D[f].short} full — signage redirects to other shelters`,30,f)):b<1.4&&t.shelterFull[x]&&this.sheltersOpened&&t.setShelterFull(x,!1)}}const k=this.scenario.events.find(m=>m.kind==="convoy");k&&(e>=k.t-40&&e<(k.end??0)?(this.gate(t,"W","open","VIP movement — west exit for station crowd"),t.deferBus||(t.deferBus=!0,t.addLog("hold","Incoming buses held at outer parking during cordon")),this.pa(t,"convoy","PA at station: “Main Road closed for VIP movement. Exit by Gate W and take the Riverside Path to the ghats.”",60,B.forecourt),e>=k.t&&t.announceCordon()):e>=(k.end??0)&&t.deferBus&&(t.deferBus=!1,t.addLog("hold","Buses released"))),n("forecourt")>2.4&&this.gate(t,"W","open","forecourt crowding"),t.heldCount===0&&!t.holdActive&&t.gateMode[I.findIndex(m=>m.id==="H")]==="open"&&!u&&e-this.panicHandled>120&&this.gate(t,"H","closed","holding ground empty")}}const et=.1,ps=150,ms=230,gs=40,ws=1.15,As=1.15,ze=[.2,.18,.12,.1,.1,.06,.07,.07,.06,.04];function ys(r){let t=r>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}class xs{scenario;sims=[];t=0;rng;busAcc=0;campAcc=0;trainQueue=0;trainRate=0;nextTrain=0;lastTrainArrival=-1e9;fired=new Set;log=[];seed;constructor(t,e=7){this.scenario=pe[t]??pe.normal,this.seed=e,this.rng=ys(e*7919+13)}warmup(t=420,e){for(this.beginWarmup(t);!this.warmupChunk(200);)e?.(this.warmupProgress);e?.(1)}warmSteps=0;warmDone=0;get warmupProgress(){return this.warmSteps?this.warmDone/this.warmSteps:1}beginWarmup(t=420){const e=new oe(ue(),"fixed",0,this.seed);this.sims=[e],this.t=-t,this.nextTrain=-t+5,this.warmSteps=Math.round(t/et),this.warmDone=0}warmupChunk(t){const e=this.sims[0];for(let i=0;i<t&&this.warmDone<this.warmSteps;i++,this.warmDone++)this.arrivals(et,!0),e.step(et),this.t+=et;if(this.warmDone<this.warmSteps)return!1;this.t=0;const n=e.clone("ai",1,this.seed+1);return e.resetMetrics(),n.resetMetrics(),e.controller=new fs,n.controller=new us(this.scenario),this.sims=[e,n],!0}step(){this.events(),this.arrivals(et,!1);for(const t of this.sims)t.step(et);this.t+=et}get finished(){return this.t>=this.scenario.duration}load(t){return t<0?this.scenario.baseLoad:this.scenario.load(t)}trainState(t=this.t){const e=t-this.lastTrainArrival;if(e>=0&&e<60)return{offset:0,doorsOpen:e>2&&e<50};if(e>=60&&e<75){const i=(e-60)/15;return{offset:-i*i*260,doorsOpen:!1}}const n=this.nextTrain-t;if(n>=0&&n<12){const i=n/12;return{offset:i*i*260,doorsOpen:!1}}return{offset:null,doorsOpen:!1}}arrivals(t,e){const n=this.load(this.t);if(this.t>=this.nextTrain&&(this.lastTrainArrival=this.t,this.nextTrain+=ps,this.trainQueue+=Math.round(ms*n),this.trainRate=this.trainQueue/gs),this.trainQueue>0&&this.t-this.lastTrainArrival>3){const s=this.poissonish(this.trainRate*t);for(let a=0;a<s&&this.trainQueue>0;a++,this.trainQueue--)this.emit(qt,e)}for(this.busAcc+=ws*n*t;this.busAcc>=1;)this.busAcc--,this.emit(Bt,e);for(this.campAcc+=As*n*t;this.campAcc>=1;)this.campAcc--,this.emit(ne,e)}poissonish(t){let e=Math.floor(t);return this.rng()<t-e&&e++,e}emit(t,e){const n=ue(),i=this.rng,s=t===qt?n.spawnCells.train:t===Bt?n.spawnCells.bus:n.spawnCells.camp,a=s[i()*s.length|0],l=e||this.t<0?this.scenario.ghatWeights(-1):this.scenario.ghatWeights(this.t);let c=i(),h=4;for(let w=0,z=0;w<5;w++)if(z+=l[w],c<=z){h=w;break}const o=i()<.4,p=t===qt?be:t===Bt?ve:Se,u=o?[h,Ht,p]:[h,p];let k=0;for(let w=0;w<4;w++)k+=i();const m=Math.min(1.7,Math.max(.8,1.22+(k-2)*.3));let x=i(),f=0;for(let w=0,z=0;w<ze.length;w++)if(z+=ze[w],x<=z){f=w;break}const b={origin:t,x:a%280+.15+i()*.7,z:(a/280|0)+.15+i()*.7,plan:u,v0:m,rad:.2+i()*.05,comp:i(),color:f,u:i(),dwellK:i(),rainU:i()};for(const w of this.sims)w.spawn(b)}events(){const t=this.scenario;for(const e of t.events){const n=e.kind+e.t;if(this.t>=e.t&&!this.fired.has(n)){this.fired.add(n),this.globalLog("scenario",e.label);for(const i of this.sims)e.kind==="jam"&&e.gate&&i.jamGate(e.gate),e.kind==="rumour"&&i.startRumour(e.x??0,e.z??0,e.radius??25),e.kind==="convoy"&&(i.setCordon(!0),i.scenarioClosed[I.findIndex(s=>s.id==="E")]=!0,i.mapDirty=!0,i.templeClosed=!0),e.kind==="rain"&&i.setRain(!0)}if(e.end!==void 0&&this.t>=e.end&&!this.fired.has(n+"end")){this.fired.add(n+"end");const i=e.kind==="convoy"?"Cordon lifted":e.kind==="rain"?"Rain eases":e.kind==="surge"?"Muhurat ends":"Event ends";this.globalLog("scenario",i);for(const s of this.sims)e.kind==="convoy"&&(s.setCordon(!1),s.scenarioClosed[I.findIndex(a=>a.id==="E")]=!1,s.mapDirty=!0,s.templeClosed=!1),e.kind==="rain"&&s.setRain(!1)}}}globalLog(t,e){this.log.push({t:this.t,sim:-1,kind:t,text:e})}}const zs=40,We=1,Ws=2,ks=4,bs=8;class vs{engine=null;speed=4;paused=!1;post;budgetMs;last=0;acc=0;lastFrame=0;lastStats=0;sent=[{series:0,log:0},{series:0,log:0}];engineLogSent=0;warming=!1;token=0;stepsDone=0;effSpeed=0;doneSent=!1;constructor(t,e=28){this.post=t,this.budgetMs=e}handle(t){t.type==="ping"?this.post({type:"pong"}):t.type==="start"?this.start(t.scenario,t.seed):t.type==="speed"?this.speed=t.speed:t.type==="pause"&&(this.paused=t.paused,this.last=performance.now())}start(t,e){const n=++this.token,i=new xs(t,e);this.engine=i,this.sent=[{series:0,log:0},{series:0,log:0}],this.engineLogSent=0,this.doneSent=!1,this.warming=!0,i.beginWarmup(420);const s=()=>{if(n!==this.token)return;const a=performance.now();let l=!1;for(;!l&&performance.now()-a<this.budgetMs*3;)l=i.warmupChunk(40);if(this.post({type:"progress",p:i.warmupProgress}),!l){setTimeout(s,0);return}this.warming=!1,this.post({type:"ready",scenario:t}),this.last=performance.now(),this.acc=0,this.sendFrame(),this.sendStats(),setTimeout(()=>this.tick(n),0)};setTimeout(s,0)}tick(t){if(t!==this.token||!this.engine)return;const e=this.engine,n=performance.now(),i=Math.min(.1,(n-this.last)/1e3);if(this.last=n,!this.paused&&!this.warming&&!e.finished){this.acc+=i*this.speed;let s=0;const a=performance.now();for(;this.acc>=et&&performance.now()-a<this.budgetMs&&!e.finished;)e.step(),this.acc-=et,s++;this.acc>et*2&&(this.acc=et),this.stepsDone+=s}if(n-this.lastFrame>30&&this.sendFrame(),n-this.lastStats>250){const s=(n-this.lastStats)/1e3;this.effSpeed=this.lastStats?this.stepsDone*et/s:0,this.stepsDone=0,this.sendStats()}e.finished&&!this.doneSent&&(this.doneSent=!0,this.sendStats(),this.post({type:"done",t:e.t})),setTimeout(()=>this.tick(t),this.paused||e.finished?50:4)}sendFrame(){const t=this.engine;this.lastFrame=performance.now();const e=t.sims.map(n=>Ss(n));this.post({type:"frame",t:t.t,train:t.trainState(),sims:e},e.map(n=>n.buf.buffer))}sendStats(){const t=this.engine;this.lastStats=performance.now();const e=[],n=t.sims.map((s,a)=>{const l=new Uint8Array(58800),c=s.density;for(let x=0;x<58800;x++){const f=c[x]*zs;l[x]=f>255?255:f}const h=s.flow.slice();e.push(l.buffer,h.buffer);const o=this.sent[a],p=s.series.slice(o.series);o.series=s.series.length;const u=Math.min(s.log.length,s.logTotal-o.log),k=u>0?s.log.slice(s.log.length-u):[];o.log=s.logTotal;let m=0;for(let x=0;x<s.hi;x++)s.alive[x]&&s.panic[x]>.25&&m++;return{zones:s.zone.map(x=>({...x})),advice:s.zone.map((x,f)=>s.controller?s.controller.advice(s,f):""),gates:I.map((x,f)=>({mode:s.gateMode[f],jammed:s.jammed[f],closed:s.effectiveClosed(f),rate:s.gateRate[f]})),metrics:{peakZone:s.peakZone,peakLocal:s.peakLocal,dangerTime:s.dangerTime,personDanger:s.personDanger,criticalTime:s.criticalTime,bathed:s.bathed,departed:s.departed,onsite:s.count,held:s.heldCount,nowPeak:s.nowPeak,nowLocal:s.nowLocal,nowInDanger:s.nowInDanger,actions:s.policy==="ai"?s.controller?.actions??0:0,holdActive:s.holdActive,cordon:s.cordon,rain:s.rain,panicking:m},density:l,flow:h,series:p,log:k}}),i=t.log.slice(this.engineLogSent);this.engineLogSent=t.log.length,this.post({type:"stats",t:t.t,speed:this.effSpeed,sims:n,log:i},e)}}function Ss(r){const t=r.hi,e=new Float32Array(Math.max(1,t)*4),n=r.shared.world.base;for(let i=0;i<t;i++){const s=i*4;if(!r.alive[i]){e[s+3]=-1;continue}e[s]=r.px[i],e[s+1]=r.pz[i],e[s+2]=r.hd[i];const a=r.state[i];let l=0;a===V&&(l|=We),a===pt&&(l|=bs|We),n[(r.pz[i]|0)*280+(r.px[i]|0)]===3&&(l|=Ws),r.panic[i]>.25&&(l|=ks),e[s+3]=l+(r.color[i]<<4)+(r.gen[i]<<8)}return{hi:t,buf:e}}const Ne=self,Ts=new vs((r,t)=>Ne.postMessage(r,t??[]));Ne.onmessage=r=>Ts.handle(r.data);\n',wh=typeof self<"u"&&self.Blob&&new Blob(["URL.revokeObjectURL(import.meta.url);",Lu],{type:"text/javascript;charset=utf-8"});function sv(i){let t;try{if(t=wh&&(self.URL||self.webkitURL).createObjectURL(wh),!t)throw"";const e=new Worker(t,{type:"module",name:i?.name});return e.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),e}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(Lu),{type:"module",name:i?.name})}}class rv{onMessage=()=>{};mode="worker";worker=null;local=null;pending=[];async init(){try{const n=new sv;if(await new Promise(r=>{const o=setTimeout(()=>r(!1),4e3);n.onmessage=a=>{a.data.type==="pong"&&(clearTimeout(o),r(!0))},n.onerror=()=>{clearTimeout(o),r(!1)},n.postMessage({type:"ping"})})){this.worker=n,n.onmessage=r=>this.onMessage(r.data);for(const r of this.pending)n.postMessage(r);this.pending=[];return}n.terminate()}catch{}this.mode="local";const{Runner:t}=await iv(async()=>{const{Runner:n}=await import("./runner-BF3rokSN.js");return{Runner:n}},[],import.meta.url),e=new t(n=>setTimeout(()=>this.onMessage(n),0),10);this.local=e;for(const n of this.pending)e.handle(n)}send(t){this.worker?this.worker.postMessage(t):this.local?this.local.handle(t):this.pending.push(t)}}function Du(i){const t=Math.min(2,window.devicePixelRatio||1),e=i.clientWidth,n=i.clientHeight;(i.width!==Math.round(e*t)||i.height!==Math.round(n*t))&&(i.width=Math.round(e*t),i.height=Math.round(n*t));const s=i.getContext("2d");return s.setTransform(t,0,0,t,0,0),s.clearRect(0,0,e,n),{g:s,w:e,h:n}}function ov(i,t){const{g:e,w:n,h:s}=Du(i);if(!n||!s)return;const r=26,o=34,a=8,l=18,h=n-r-o,c=s-a-l;let d=6;for(const _ of t.series)for(const m of _)d=Math.max(d,Math.ceil(m[1]));d=Math.min(9,d);const u=_=>r+_/t.duration*h,f=_=>a+c-_/d*c;for(const _ of t.events){e.fillStyle=t.accent+"22";const m=u(_.t),p=_.end?u(_.end):m+1.5;e.fillRect(m,a,Math.max(1.5,p-m),c),e.fillStyle=t.accent,e.fillRect(m,a,1.5,c)}e.fillStyle=t.danger+"1f",e.fillRect(r,f(Math.min(5,d)),h,f(4)-f(Math.min(5,d))),e.fillStyle=t.critical+"2a",e.fillRect(r,a,h,f(5)-a),e.font='10.5px "IBM Plex Mono", monospace',e.textBaseline="middle";for(let _=0;_<=d;_++){const m=Math.round(f(_))+.5;e.strokeStyle=_===4?t.danger:t.grid,e.lineWidth=_===4?1.2:1,e.setLineDash(_===4?[4,3]:[]),e.beginPath(),e.moveTo(r,m),e.lineTo(r+h,m),e.stroke(),e.setLineDash([]),(_%2===0||_===5)&&(e.fillStyle=t.ink,e.textAlign="right",e.fillText(String(_),r-6,m))}e.fillStyle=t.danger,e.textAlign="left",e.fillText("danger",r+4,f(4)-7),e.fillStyle=t.ink,e.textBaseline="top",e.textAlign="center";const g=t.duration>600?180:120;for(let _=0;_<=t.duration;_+=g)e.fillText(`${Math.round(_/60)}m`,u(_),a+c+4);t.series.forEach((_,m)=>{if(_.length<2)return;e.strokeStyle=t.colors[m],e.lineWidth=2.2,e.lineJoin="round",e.beginPath(),_.forEach(([D,T],C)=>C?e.lineTo(u(D),f(Math.min(d,T))):e.moveTo(u(D),f(Math.min(d,T)))),e.stroke();const[p,b]=_[_.length-1];e.fillStyle=t.colors[m],e.beginPath(),e.arc(u(p),f(Math.min(d,b)),3.5,0,Math.PI*2),e.fill(),e.font='600 11px "IBM Plex Mono", monospace',e.textAlign="left",e.textBaseline="middle";const M=t.series[1-m];let y=f(Math.min(d,b));if(M&&M.length){const D=f(Math.min(d,M[M.length-1][1]));Math.abs(D-y)<11&&(y+=m===0?y<=D?-6:6:y<D?-6:6)}e.fillText(b.toFixed(1),Math.min(u(p)+6,r+h+4),y)})}function av(i,t,e,n){const{g:s,w:r,h:o}=Du(i);if(!r||!o)return;const a=180,l=Math.max(5.5,...t.slice(-a),...e.slice(-a)),h=u=>o-4-u/l*(o-10),c=(u,f)=>r-(f-1-u)/(a-1)*r;s.fillStyle=n.danger+"18",s.fillRect(0,h(l),r,h(4)-h(l)),s.strokeStyle=n.danger,s.setLineDash([3,3]),s.lineWidth=1,s.beginPath(),s.moveTo(0,h(4)),s.lineTo(r,h(4)),s.stroke(),s.setLineDash([]);const d=(u,f,g,_)=>{const m=u.slice(-a);m.length<2||(s.beginPath(),m.forEach((p,b)=>b?s.lineTo(c(b,m.length),h(p)):s.moveTo(c(b,m.length),h(p))),_&&(s.lineTo(c(m.length-1,m.length),o),s.lineTo(c(0,m.length),o),s.closePath(),s.fillStyle=f+"30",s.fill(),s.beginPath(),m.forEach((p,b)=>b?s.lineTo(c(b,m.length),h(p)):s.moveTo(c(b,m.length),h(p)))),s.strokeStyle=f,s.lineWidth=g,s.stroke(),_&&(s.fillStyle=f,s.beginPath(),s.arc(c(m.length-1,m.length),h(m[m.length-1]),3,0,7),s.fill()))};d(e,n.other+"99",1.2,!1),d(t,n.main,2,!0),s.fillStyle=n.ink,s.font='10px "IBM Plex Mono", monospace',s.textAlign="left",s.textBaseline="top",s.fillText("last 3 min · 4 p/m² line",2,1)}const lv={fixed:{peakZone:2.23,peakLocal:4.48,dangerMin:0,criticalMin:0,personDangerMin:22,bathed:2243,departed:1730,onsite:2135,held:0},ai:{peakZone:1.49,peakLocal:3.57,dangerMin:0,criticalMin:0,personDangerMin:0,bathed:2148,departed:1560,onsite:2305,held:0}},cv={fixed:{peakZone:5.9,peakLocal:8.14,dangerMin:6.03,criticalMin:5.02,personDangerMin:20053,bathed:3449,departed:1431,onsite:8053,held:0},ai:{peakZone:3.29,peakLocal:5,dangerMin:0,criticalMin:0,personDangerMin:398,bathed:3933,departed:2611,onsite:5572,held:4035}},hv={fixed:{peakZone:4.96,peakLocal:7.06,dangerMin:8.31,criticalMin:0,personDangerMin:8819,bathed:3897,departed:1602,onsite:5495,held:0},ai:{peakZone:2.92,peakLocal:4.76,dangerMin:0,criticalMin:0,personDangerMin:85,bathed:3401,departed:2411,onsite:4573,held:462}},uv={fixed:{peakZone:5.36,peakLocal:8,dangerMin:5.05,criticalMin:.86,personDangerMin:10822,bathed:2867,departed:1181,onsite:6313,held:0},ai:{peakZone:2.35,peakLocal:4.06,dangerMin:0,criticalMin:0,personDangerMin:0,bathed:3827,departed:2921,onsite:4525,held:240}},dv={fixed:{peakZone:6,peakLocal:8,dangerMin:2.48,criticalMin:1.27,personDangerMin:4652,bathed:3327,departed:2350,onsite:4305,held:0},ai:{peakZone:2.42,peakLocal:4.15,dangerMin:0,criticalMin:0,personDangerMin:0,bathed:2979,departed:2688,onsite:3139,held:1256}},fv={fixed:{peakZone:3.87,peakLocal:5.26,dangerMin:0,criticalMin:0,personDangerMin:6054,bathed:2075,departed:1049,onsite:6663,held:0},ai:{peakZone:3.43,peakLocal:4.99,dangerMin:0,criticalMin:0,personDangerMin:1011,bathed:1947,departed:1339,onsite:5301,held:3662}},pv={normal:lv,snan:cv,jam:hv,rumour:uv,convoy:dv,rain:fv},vt=i=>document.getElementById(i),mv=Cu(),xs=mv.world,rl=we.map((i,t)=>Math.round(xs.zoneArea[t]*i.cap)),ot={scenario:go.snan,lens:"clay",mode:"split",speed:4,paused:!1,ready:!1,t:0,stats:[null,null],series:[[],[]],log:[],logFilter:"ai",inspect:null,hist:[we.map(()=>[]),we.map(()=>[])],lastHistT:-1,statsVersion:0,done:!1},Mi=vt("stage"),de=new tv(Mi);new URLSearchParams(location.search).has("lite")&&de.setLite(!0);let Xr=0;setInterval(()=>{de.lite||document.hidden||ku||(de.fps<24?Xr?performance.now()-Xr>4e3&&de.setLite(!0):Xr=performance.now():Xr=0)},1e3);const fs=new rv,ps=(i,t=!0)=>{const e=(Math.floor(i)%86400+86400)%86400,n=Math.floor(e/3600),s=Math.floor(e%3600/60),r=e%60;return`${String(n).padStart(2,"0")}:${String(s).padStart(2,"0")}${t?":"+String(r).padStart(2,"0"):""}`},er=i=>i>=5?"critical":i>=4?"danger":i>=3?"warn":"ok",gv=i=>i>=5?"Critical":i>=4?"Danger":i>=3?"Very dense":i>=2?"Dense":"Comfortable",Ge=i=>getComputedStyle(document.documentElement).getPropertyValue(i).trim();fs.onMessage=i=>{switch(i.type){case"progress":vt("loadingBar").style.width=`${Math.round(i.p*100)}%`;break;case"ready":ot.ready=!0,vt("loading").hidden=!0;break;case"frame":if(!ot.ready)break;ot.t=i.t,de.pushFrame(i);break;case"stats":if(!ot.ready)break;_v(i.sims,i.log,i.t,i.speed);break;case"done":ot.done=!0,setTimeout(Bu,600);break}};function _v(i,t,e,n){ot.stats=i,ot.statsVersion++,de.pushStats(i),i.forEach((r,o)=>ot.series[o].push(...r.series)),(e-ot.lastHistT>=1||e<ot.lastHistT)&&(ot.lastHistT=e,i.forEach((r,o)=>r.zones.forEach((a,l)=>{const h=ot.hist[o][l];h.push(a.density),h.length>240&&h.shift()})));const s=[...t,...i.flatMap(r=>r.log)].sort((r,o)=>r.t-o.t);if(s.length){ot.log.push(...s);for(const r of s)r.sim===1&&r.kind==="pa"&&xv(r.zone),Sv(r)}yv(i.map(r=>r.metrics)),Uu(),Il(),vt("perf").textContent=`${Math.round(de.fps)} fps · ×${n.toFixed(1)}`}function xv(i){if(i===void 0){de.ambient.pulsePA("all",de.elapsed);return}const t=xs.zoneCenter[i];let e=0,n=1/0;de.town.speakers.forEach((s,r)=>{const o=Math.hypot(s.x+q/2-t.x,s.z+105-t.z);o<n&&(n=o,e=r)}),de.ambient.pulsePA(e,de.elapsed)}const Iu=[{k:"Densest zone now",sub:"person-weighted p/m²",get:i=>i.nowPeak,fmt:i=>i.toFixed(1),sev:i=>er(i),head:!0},{k:"Highest so far",sub:"p/m²",get:i=>i.peakZone,fmt:i=>i.toFixed(1),sev:i=>er(i)},{k:"Minutes in danger zone",sub:"any zone ≥ 4 p/m²",get:i=>i.dangerTime/60,fmt:i=>i.toFixed(1),sev:i=>i>=3?"critical":i>0?"danger":"ok",head:!0},{k:"People in crush-risk spots",sub:"local density ≥ 4",get:i=>i.nowInDanger,fmt:i=>Math.round(i).toLocaleString("en-IN"),sev:i=>i>=200?"critical":i>20?"danger":i>0?"warn":"ok"},{k:"Pilgrims on site",get:i=>i.onsite,fmt:i=>Math.round(i).toLocaleString("en-IN")},{k:"Bathers served",get:i=>i.bathed,fmt:i=>Math.round(i).toLocaleString("en-IN")},{k:"Held or waiting",sub:"holding ground, camp, buses",get:i=>i.held,fmt:i=>Math.round(i).toLocaleString("en-IN")},{k:"Control actions",sub:"gates · PA · holds",get:i=>i.actions,fmt:i=>String(Math.round(i)),aiOnly:!0}],vv=vt("kpiRows");vv.innerHTML=Iu.map((i,t)=>`<div class="kpi-row${i.head?" head":""}"><span class="k">${i.k}${i.sub?`<small>${i.sub}</small>`:""}</span><span class="v" id="kf${t}">–</span><span class="v" id="ka${t}">–</span></div>`).join("");function yv(i){Iu.forEach((t,e)=>{i.forEach((n,s)=>{const r=vt(`k${s?"a":"f"}${e}`);if(t.aiOnly&&s===0){r.textContent="—",r.className="v";return}const o=t.get(n);r.textContent=t.fmt(o),r.className="v"+(t.sev?" "+t.sev(o):"")})})}const Mv=vt("chart");function Uu(){ov(Mv,{duration:ot.scenario.duration,series:[ot.series[0].map(i=>[i.t,i.peak]),ot.series[1].map(i=>[i.t,i.peak])],colors:[Ge("--fixed"),Ge("--ai")],ink:Ge("--ink-2"),grid:Ge("--line"),danger:Ge("--danger"),critical:Ge("--critical"),events:ot.scenario.events.map(i=>({t:i.t,end:i.end,label:i.kind==="surge"?"muhurat":i.kind})),accent:Ge("--saffron")})}const _i=vt("log");function Nu(i){return ot.logFilter==="all"||i.sim===-1?!0:ot.logFilter==="ai"?i.sim===1&&i.kind!=="alert"&&i.kind!=="ok":i.kind==="alert"||i.kind==="ok"}function Fu(i){const t=document.createElement("li");t.className=i.kind;const e=i.sim===-1?'<span class="who s">Event</span>':i.sim===0?'<span class="who f">Fixed</span>':'<span class="who a">AI</span>';return t.innerHTML=`<time>${ps(ot.scenario.clockStart+i.t,!1)}</time><span>${e}<span class="txt"></span></span>`,t.querySelector(".txt").textContent=i.text,i.zone!==void 0&&(t.style.cursor="pointer",t.title="Inspect this zone",t.onclick=()=>Dl(i.sim<0?1:i.sim,i.zone,!0)),t}function Sv(i){if(Nu(i))for(_i.querySelector(".empty")?.remove(),_i.prepend(Fu(i));_i.children.length>250;)_i.lastElementChild?.remove()}function Ll(){_i.innerHTML="";const i=ot.log.filter(Nu).slice(-250).reverse();if(!i.length){_i.innerHTML='<li class="empty">Nothing yet. AI gate changes, PA announcements and holds appear here as they happen.</li>';return}for(const t of i)_i.append(Fu(t))}const bv=vt("labels"),io=[];let Ke=[],_o=-1;function Yr(i){const t=we[i];return t.kind==="ghat"?1.5:t.kind==="bridge"?2.5:3.2}function Ev(){Ke=[],(ot.mode==="split"?[0,1]:[ot.mode==="fixed"?0:1]).forEach((e,n)=>{const s=ot.stats[e];if(!s)return;const r=ot.mode==="split"?n:0;s.zones.forEach((o,a)=>{const l=xs.zoneCenter[a],h=we[a],c=o.density,d=o.count>=30;if(ot.lens==="clay")d&&c>=4?Ke.push({x:l.x,y:Yr(a)+2,z:l.z,vp:r,cls:er(c),html:`${h.short} · ${c.toFixed(1)} p/m²<small>${c>=5?"crush risk":"danger"} · ${Math.round(o.count)} people</small>`}):h.kind==="hold"&&o.count>=30&&Ke.push({x:l.x,y:5,z:l.z,vp:r,cls:"warn",html:`Holding Ground<small>${Math.round(o.count)} waiting</small>`});else if(ot.lens==="density")d&&c>=1.2&&Ke.push({x:l.x,y:Yr(a),z:l.z,vp:r,cls:er(c),html:`${h.short}<small>${c.toFixed(1)} p/m²</small>`});else if(ot.lens==="flow")o.count>=20&&o.cfi>.3&&c>.9&&Ke.push({x:l.x,y:Yr(a),z:l.z,vp:r,cls:c>=4?"danger":"cf",html:`${h.short}<small>counter-flow ${Math.round(o.cfi*100)}% · ${o.speed.toFixed(2)} m/s</small>`});else if(ot.lens==="count"&&o.count>=1){const u=o.count/Math.max(1,rl[a]),f=u>=1?"danger":u>=.8?"warn":"ok";Ke.push({x:l.x,y:Yr(a),z:l.z,vp:r,cls:f,html:`${h.short}<small>${Math.round(o.count).toLocaleString("en-IN")} / ${rl[a].toLocaleString("en-IN")}</small><span class="mini" style="color:var(--${f==="ok"?"ok":f})"><i style="width:${Math.min(100,u*100)}%"></i></span>`})}}),ot.lens==="count"&&s.gates.forEach((o,a)=>{const l=ni[a].rect,h=o.jammed?"jammed":o.closed?"closed":o.mode==="in"?"in only":o.mode==="out"?"out only":"open";Ke.push({x:(l.x0+l.x1)/2,y:7.5,z:(l.z0+l.z1)/2,vp:r,cls:"gate",html:`Gate ${ni[a].id} · ${Math.round(o.rate)}/min<small>${h}</small>`})})});const t=e=>e.includes("critical")?0:e.includes("danger")?1:e.includes("warn")?2:e==="gate"?4:3;for(Ke.sort((e,n)=>t(e.cls)-t(n.cls));io.length<Ke.length;){const e=document.createElement("div");bv.append(e),io.push(e)}io.forEach((e,n)=>{if(n>=Ke.length){e.hidden=!0;return}e.hidden=!1,e.className="lbl "+Ke[n].cls,e.innerHTML=Ke[n].html})}function wv(){_o!==ot.statsVersion&&(_o=ot.statsVersion,Ev());const i=ot.mode==="split"?Mi.clientWidth/2:Mi.clientWidth,t=[];Ke.forEach((e,n)=>{const s=de.project(e.x,e.y,e.z,e.vp),r=io[n];let o=s.visible&&s.x>e.vp*i+(e.vp===0?100:20)&&s.x<(e.vp+1)*i-20;if(o){const a=r.offsetWidth||90,l=r.offsetHeight||30,h=[s.x-a/2,s.y-l,s.x+a/2,s.y];o=!t.some(c=>h[0]<c[2]&&h[2]>c[0]&&h[1]<c[3]&&h[3]>c[1]),o&&t.push(h)}r.style.visibility=o?"visible":"hidden",r.style.left=`${s.x}px`,r.style.top=`${s.y}px`})}const Qn=vt("inspect");function Dl(i,t,e=!1){if(ot.mode!=="split"&&ot.mode==="fixed"!=(i===0)&&(i=ot.mode==="fixed"?0:1),ot.inspect={sim:i,zone:t},Qn.hidden=!1,e){const n=xs.zoneCenter[t];de.focusZone(n.x,n.z)}Il()}function To(){ot.inspect=null,Qn.hidden=!0}vt("inspectClose").onclick=To;function Il(){if(!ot.inspect)return;const{sim:i,zone:t}=ot.inspect,e=ot.stats[i];if(!e)return;const n=e.zones[t],s=we[t],r=n.density,o=er(r),a=Ge(`--${o}`);Qn.style.borderTopColor=a,vt("inspPlan").innerHTML=`<i class="dot ${i?"ai":"fixed"}"></i>${i?"AI-guided routing":"Fixed barricade plan"}`,vt("inspTitle").textContent=s.name,vt("inspDensity").textContent=r.toFixed(1),vt("inspDensity").style.color=a;const l=n.slope,h=l>.08?"rising":l<-.08?"falling":"steady";let c="";if(r>=5)c="critical now";else if(l>.08){const _=(5-r)/l;c=_<30?`${Math.max(1,Math.round(_))} min to critical`:"far from critical"}else c=r>=4?"holding in danger":"no critical trend";vt("inspState").innerHTML=`<b style="background:${a}">${gv(r)}</b><br>${h} ${l>=0?"+":""}${l.toFixed(2)}/min<br>${c}`;const d=e.advice[t]||"Normal — keep monitoring",u=d.split(" · ").slice(0,2).join(", ").replace(/^./,_=>_.toLowerCase());vt("inspLine").textContent=`${s.short} · ${r.toFixed(1)} p/m² · ${h} · ${c} · action: ${u}`,vt("inspCount").textContent=`${Math.round(n.count).toLocaleString("en-IN")} / ${rl[t].toLocaleString("en-IN")}`,vt("inspSpeed").textContent=`${n.speed.toFixed(2)} m/s`,vt("inspCf").textContent=`${Math.round(n.cfi*100)}%`,vt("inspPressure").textContent=`${n.pressure.toFixed(3)} /s²`;const f=d.startsWith("Normal")||d.startsWith("Standby"),g=Qn.querySelector(".insp-action");g.className="insp-action "+(i===1&&!f?"acting":i===0&&!f?"idle":""),vt("inspActionLabel").textContent=i===1?f?"AI controller · no action needed":"AI controller is acting":f?"Recommended action":"Fixed plan · not actioned. The AI would:",vt("inspAction").textContent=d,av(vt("inspSpark"),ot.hist[i][t],ot.hist[1-i][t],{main:Ge(i?"--ai":"--fixed"),other:Ge(i?"--fixed":"--ai"),grid:Ge("--line"),danger:Ge("--danger"),ink:Ge("--ink-3")})}function Tv(){if(!ot.inspect)return;const i=xs.zoneCenter[ot.inspect.zone],t=ot.mode==="split"?ot.inspect.sim:0,e=de.project(i.x,2,i.z,t),n=Qn.offsetWidth,s=Qn.offsetHeight,r=Mi.clientWidth,o=Mi.clientHeight;let a=e.x+24,l=e.y-s/2;a+n>r-12&&(a=e.x-n-24),a=Math.max(12,Math.min(r-n-12,a)),l=Math.max(60,Math.min(o-s-12,l)),Qn.style.left=`${a}px`,Qn.style.top=`${l}px`}let zs=null;de.renderer.domElement.addEventListener("pointerdown",i=>{zs={x:i.clientX,y:i.clientY}});de.renderer.domElement.addEventListener("pointerup",i=>{if(!zs||Math.hypot(i.clientX-zs.x,i.clientY-zs.y)>6)return;zs=null;const t=de.pick(i.clientX,i.clientY);if(!t)return;const e=Av(t.x,t.z);if(e===tr){To();return}Dl(t.sim,e)});function Av(i,t){const e=Math.floor(i),n=Math.floor(t);let s=tr,r=5;for(let o=-4;o<=4;o++)for(let a=-4;a<=4;a++){const l=e+a,h=n+o;if(l<0||h<0||l>=q||h>=210)continue;const c=xs.zone[h*q+l],d=Math.hypot(a,o);c!==tr&&d<r&&(r=d,s=c)}return s}function Ou(){const i=vt("legend");ot.lens==="density"?i.innerHTML='<b>People per m²</b><div class="ramp"></div><div class="ticks"><span>0</span><span>1.5</span><span>2.5</span><span>3.5</span><span>4.5</span><span>6+</span></div><div class="muted" style="margin-top:4px">Red above 4: crush possible. Magenta above 5: critical.</div>':ot.lens==="flow"?i.innerHTML='<div class="row"><b>Flow</b><span><i class="sw" style="background:#3ddc97"></i>free walking</span><span><i class="sw" style="background:#ffd23f"></i>slowing</span><span><i class="sw" style="background:#ff9f1c"></i>shuffling</span><span><i class="sw" style="background:#ff2bd6"></i>counter-flow (crowds pushing into each other)</span></div>':ot.lens==="count"?i.innerHTML='<div class="row"><b>Head count vs safe capacity</b><span><i class="sw" style="background:#3ddc97"></i>&lt; 50%</span><span><i class="sw" style="background:#ffd23f"></i>50–80%</span><span><i class="sw" style="background:#ff9f1c"></i>80–100%</span><span><i class="sw" style="background:#ff3355"></i>over capacity</span></div>':i.innerHTML='<div class="row"><b>Clay view</b><span>One figure = one pilgrim</span><span><i class="sw" style="background:#ff2d55"></i>red rings: zone above 4 p/m²</span><span><i class="sw" style="background:#ffd166"></i>PA announcement</span></div>'}function Ul(i,t,e){vt(i).querySelectorAll("button").forEach(n=>n.classList.toggle("on",n.getAttribute(t)===e))}function Ao(i){ot.lens=i,de.setLens(i),document.querySelectorAll(".lens-rail > button").forEach(t=>t.classList.toggle("on",t.dataset.lens===i)),Ou(),_o=-1}function os(i){ot.mode=i,de.setMode(i),Ul("viewSeg","data-view",i),Mi.classList.toggle("split-off",i!=="split"),Nl.hidden=i!=="split",vt("tagLeft").innerHTML=i==="ai"?'<i class="dot ai"></i>AI-guided routing':'<i class="dot fixed"></i>Fixed barricade plan',ot.inspect&&i!=="split"&&(ot.inspect.sim=i==="fixed"?0:1),_o=-1,Il()}const Nl=document.createElement("div");Nl.className="split-line";Mi.append(Nl);document.querySelectorAll(".lens-rail > button").forEach(i=>i.onclick=()=>Ao(i.dataset.lens));vt("viewSeg").querySelectorAll("button").forEach(i=>i.onclick=()=>os(i.dataset.view));vt("speedSeg").querySelectorAll("button").forEach(i=>i.onclick=()=>Cv(+i.dataset.speed));vt("logSeg").querySelectorAll("button").forEach(i=>i.onclick=()=>{ot.logFilter=i.dataset.log,Ul("logSeg","data-log",ot.logFilter),Ll()});function Cv(i){ot.speed=i,fs.send({type:"speed",speed:i}),Ul("speedSeg","data-speed",String(i))}function Fl(i){ot.paused=i,fs.send({type:"pause",paused:i}),vt("playIcon").setAttribute("d",i?"M4 2.5l9 5.5-9 5.5z":"M4 3h3v10H4zM9 3h3v10H9z"),vt("playBtn").setAttribute("aria-label",i?"Play":"Pause")}vt("playBtn").onclick=()=>Fl(!ot.paused);vt("restartBtn").onclick=()=>Si(ot.scenario.id);vt("scenarioBtn").onclick=()=>zu();vt("aboutBtn").onclick=()=>vt("about").showModal();document.querySelectorAll("[data-close]").forEach(i=>i.onclick=()=>i.closest("dialog").close());vt("panelToggle").onclick=()=>{const i=vt("panel");i.classList.toggle("open"),vt("panelToggle").setAttribute("aria-expanded",String(i.classList.contains("open")))};const Rv={overview:[[-10,250,300],[0,0,8]],ghat:[[-14,70,118],[-14,0,32]],lanes:[[-30,95,92],[-30,0,-10]],station:[[-62,75,18],[-66,0,-62]]};document.querySelectorAll("[data-cam]").forEach(i=>i.onclick=()=>{const t=Rv[i.dataset.cam];de.fly(t[0],t[1])});window.addEventListener("keydown",i=>{if(i.target.closest("input, select, textarea")||document.querySelector("dialog[open]"))return;const t={1:"clay",2:"density",3:"flow",4:"count"};t[i.key]?Ao(t[i.key]):i.key===" "?(i.preventDefault(),Fl(!ot.paused)):i.key==="f"?os("fixed"):i.key==="a"?os("ai"):i.key==="s"?os("split"):i.key==="Escape"&&To()});function zu(){const i=vt("scenarioCards");i.innerHTML="";for(const t of ts){const e=document.createElement("button");e.className="card"+(t.id===ot.scenario.id&&ot.ready?" cur":""),e.innerHTML=`<span class="when">${ps(t.clockStart,!1)}</span><strong></strong><span></span>`,e.querySelector("strong").textContent=t.name,e.querySelector("span:last-child").textContent=t.tagline,e.onclick=()=>{vt("intro").close(),Si(t.id)},i.append(e)}vt("intro").showModal()}function Si(i){const t=go[i]??go.snan;ot.scenario=t,ot.ready=!1,ot.done=!1,ot.t=0,ot.stats=[null,null],ot.series=[[],[]],ot.log=[],ot.hist=[we.map(()=>[]),we.map(()=>[])],ot.lastHistT=-1,To(),Ll(),vt("report").close(),vt("loading").hidden=!1,vt("loadingBar").style.width="0%",vt("scenarioName").textContent=t.name,vt("tStart").textContent=ps(t.clockStart,!1),vt("tEnd").textContent=ps(t.clockStart+t.duration,!1),vt("trackMarks").innerHTML=t.events.map(e=>{const n=e.t/t.duration*100,s=e.end?(e.end-e.t)/t.duration*100:.6;return`<div class="mark" style="left:${n}%;width:${s}%"><span>${e.label}</span></div>`}).join(""),de.setLighting(Kx(t.clockStart+60),!0);try{history.replaceState(null,"","#"+t.id)}catch{}ot.paused&&Fl(!1),fs.send({type:"start",scenario:t.id,seed:7}),fs.send({type:"speed",speed:ot.speed}),Uu()}function Bu(){const[i,t]=ot.stats.map(h=>h.metrics),e=ot.scenario;vt("repEyebrow").textContent=`Result · ${e.name}`;const n=i.dangerTime/60,s=t.dangerTime/60;vt("repTitle").textContent=n>.05?`AI-guided routing cut time in the danger zone from ${n.toFixed(1)} to ${s.toFixed(1)} minutes`:`Both plans stayed below the danger line (peak ${i.peakZone.toFixed(1)} fixed, ${t.peakZone.toFixed(1)} AI p/m²)`,vt("repLede").textContent=`Same town, same arrivals, same ${Math.round(e.duration/60)} minutes. The densest zone peaked at ${i.peakZone.toFixed(1)} p/m² under the fixed barricade plan and ${t.peakZone.toFixed(1)} p/m² under AI-guided routing, which took ${t.actions} control actions and served ${t.bathed.toLocaleString("en-IN")} bathers against ${i.bathed.toLocaleString("en-IN")}.`;const r=[["Peak zone density",i.peakZone,t.peakZone,h=>`${h.toFixed(1)} p/m²`,"lower is safer"],["Minutes in danger zone (≥ 4 p/m²)",n,s,h=>`${h.toFixed(1)} min`,"lower is safer"],["Crush-risk exposure",i.personDanger/60,t.personDanger/60,h=>`${Math.round(h).toLocaleString("en-IN")}`,"person-minutes at ≥ 4 p/m²"],["Bathers served",i.bathed,t.bathed,h=>Math.round(h).toLocaleString("en-IN"),"higher is better"]];vt("repBars").innerHTML=r.map(([h,c,d,u,f])=>{const g=Math.max(c,d,1e-6);return`<div class="rep-bar"><div class="lab"><b>${h}</b><span>${f}</span></div><div class="rows">
      <div class="r"><span>Fixed</span><span class="t"><i style="width:${c/g*100}%;background:var(--fixed)"></i></span><span class="n">${u(c)}</span></div>
      <div class="r"><span>AI</span><span class="t"><i style="width:${d/g*100}%;background:var(--ai)"></i></span><span class="n">${u(d)}</span></div></div></div>`}).join("");const o=pv;vt("benchTable").innerHTML=`<thead><tr><th>Scenario</th><th>Peak fixed</th><th>Peak AI</th><th>Danger min fixed</th><th>Danger min AI</th><th>Bathers fixed</th><th>Bathers AI</th></tr></thead><tbody>${ts.filter(h=>o[h.id]).map(h=>{const c=o[h.id];return`<tr><td>${h.name}</td><td class="f">${c.fixed.peakZone.toFixed(1)}</td><td class="a">${c.ai.peakZone.toFixed(1)}</td><td class="f">${c.fixed.dangerMin.toFixed(1)}</td><td class="a">${c.ai.dangerMin.toFixed(1)}</td><td class="f">${c.fixed.bathed.toLocaleString("en-IN")}</td><td class="a">${c.ai.bathed.toLocaleString("en-IN")}</td></tr>`}).join("")}</tbody>`;const a=ts.findIndex(h=>h.id===e.id),l=ts[(a+1)%ts.length];vt("repNext").textContent=`Next: ${l.name}`,vt("repNext").onclick=()=>Si(l.id),vt("repReplay").onclick=()=>Si(e.id),vt("report").showModal()}const ku=new URLSearchParams(location.search).has("still");let Th=0;function Gu(){if(requestAnimationFrame(Gu),ku){const s=performance.now();if(s-Th<2500)return;Th=s}const i=ot.scenario,t=Math.max(0,de.simTime),e=i.events.find(s=>s.kind==="rain"),n=!!(e&&ot.ready&&t>=e.t&&t<(e.end??1e9));if(de.frame({rain:e,convoy:i.events.find(s=>s.kind==="convoy")},n),wv(),Tv(),Dv(),ot.ready){vt("clock").textContent=ps(i.clockStart+t);const s=i.events.find(r=>t>=r.t&&t<(r.end??r.t+45));vt("eventNow").textContent=s?s.label:"",vt("trackFill").style.width=`${Math.min(100,t/i.duration*100)}%`}}const Pv=vt("drone"),Lv=vt("droneCanvas"),bn=Lv.getContext("2d"),Ah=bn.createImageData(320,200);let Co=window.innerWidth>700;function Ol(i){Co=i,Pv.hidden=!i,vt("droneToggle").setAttribute("aria-pressed",String(i))}vt("droneToggle").onclick=()=>Ol(!Co);vt("droneClose").onclick=()=>Ol(!1);let qr=0;function Dv(){if(!Co||!ot.ready||performance.now()-qr<350)return;qr=performance.now();const i=de.elapsed*.25,t=119+Math.sin(i)*18,e=140+Math.sin(i*2)*6,n=ot.mode==="fixed"?0:1,s=de.renderDrone(n,t,e),r=Ah.data;for(let c=0;c<200;c++){const d=(199-c)*320*4,u=c*320*4;for(let f=0;f<320;f++){const g=d+f*4,_=u+f*4,m=(.3*s[g]+.59*s[g+1]+.11*s[g+2])/255,p=Math.min(255,Math.pow(m,.45)*265+(f*7+c*13+qr)%9-4);r[_]=p*.92,r[_+1]=p,r[_+2]=p*.95,r[_+3]=255}}bn.putImageData(Ah,0,0);const{hi:o,buf:a}=de.pilgrims[n].latest;bn.strokeStyle="#4dff88",bn.lineWidth=1;let l=0;for(let c=0;c<o;c++){if(a[c*4+3]<0)continue;const d=(a[c*4]-(t-25))/50*320,u=(a[c*4+1]-(e-15.6))/31.2*200;d<2||u<2||d>318||u>198||(l++,bn.strokeRect(Math.round(d)-2.5,Math.round(u)-2.5,5,5))}bn.fillStyle="rgba(13,15,20,0.7)",bn.fillRect(4,4,112,16),bn.fillStyle="#4dff88",bn.font='500 11px "IBM Plex Mono", monospace',bn.fillText(`${n?"AI":"FIXED"} · ${ps(ot.scenario.clockStart+de.simTime)}`,8,15);const h=Math.round(l*(1+Math.sin(qr*.001)*.03));vt("droneCount").textContent=`${h} heads`}window.__bd={view:de,st:ot,openInspect:Dl,setLens:Ao,setMode:os,start:Si,showReport:Bu};Ol(Co);Ao("clay");os(window.innerWidth<700?"ai":"split");Ou();Ll();const Ch=location.hash.replace("#","");fs.init().then(()=>{go[Ch]?Si(Ch):(Si("snan"),zu())});Gu();export{Tl as B,Kn as C,il as D,$i as F,ni as G,Ht as H,ce as N,go as S,xn as W,we as Z,gh as a,Xs as b,q as c,xx as d,mx as e,Gv as f,Hv as g,Bv as h,Nv as i,kv as j,Fv as k,Ov as l,zv as m,Vv as n,vx as o,tr as p,ji as q,Iv as r,Uv as s,Cu as t,Fx as u,Mh as v,Wv as w,Ox as x,Sh as y};
