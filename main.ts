import{readdirSync as A,readFileSync as B,mkdirSync as C,writeFileSync as D}from"node:fs";
import{join as E}from"node:path";
function F(p,q){let d=new Int32Array(256),c=new Int32Array(64),m=new Int32Array(256),o=new Uint8Array(65536),L=0,pc=0,sp=0,cp=0,ip=0,st=0,n=p.length,a,b,r,s,t,w;
let T=x=>({o:o.subarray(0,L),c:x});
for(;;){
if(st==1e6)return T(10);
if(pc<0||pc>=n)return T(9);
let v=p[pc++];st++;
switch(v){
case 0:return T(0);
case 1:if(pc>=n)return T(9);if(sp>255)return T(3);d[sp++]=(p[pc++]<<24)>>24;break;
case 2:if(pc+4>n)return T(9);if(sp>255)return T(3);d[sp++]=p[pc]|p[pc+1]<<8|p[pc+2]<<16|p[pc+3]<<24;pc+=4;break;
case 3:if(sp<1)return T(2);sp--;break;
case 4:if(sp<1)return T(2);if(sp>255)return T(3);d[sp]=d[sp-1];sp++;break;
case 5:if(sp<2)return T(2);t=d[sp-1];d[sp-1]=d[sp-2];d[sp-2]=t;break;
case 6:if(sp<2)return T(2);if(sp>255)return T(3);d[sp]=d[sp-2];sp++;break;
case 7:if(sp<3)return T(2);a=d[sp-3];d[sp-3]=d[sp-2];d[sp-2]=d[sp-1];d[sp-1]=a;break;
case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:case 26:case 28:case 29:case 30:case 32:case 33:case 34:
if(sp<2)return T(2);b=d[sp-1];a=d[sp-2];
if(v>18&&v<23&&b==0)return T(4);
if(v==16)r=a+b;else if(v==17)r=a-b;else if(v==18)r=Math.imul(a,b);else if(v==19)r=(a/b)|0;else if(v==20)r=a%b;else if(v==21)r=(a>>>0)/(b>>>0)|0;else if(v==22)r=(a>>>0)%(b>>>0);else if(v==24)r=a&b;else if(v==25)r=a|b;else if(v==26)r=a^b;else if(v==28)r=a<<b;else if(v==29)r=a>>b;else if(v==30)r=a>>>b;else if(v==32)r=a==b?1:0;else if(v==33)r=a<b?1:0;else r=(a>>>0)<(b>>>0)?1:0;
d[sp-2]=r;sp--;break;
case 23:if(sp<1)return T(2);d[sp-1]=-d[sp-1]|0;break;
case 27:if(sp<1)return T(2);d[sp-1]=~d[sp-1];break;
case 48:if(pc+2>n)return T(9);r=((p[pc]|p[pc+1]<<8)<<16)>>16;pc+=2+r;break;
case 49:case 50:if(pc+2>n)return T(9);if(sp<1)return T(2);r=((p[pc]|p[pc+1]<<8)<<16)>>16;w=d[--sp];pc+=2;if((v==49)==(w==0))pc+=r;break;
case 51:if(pc+2>n)return T(9);if(cp>63)return T(7);c[cp++]=pc+2;pc=p[pc]|p[pc+1]<<8;break;
case 52:if(cp==0)return T(8);pc=c[--cp];break;
case 64:if(sp<1)return T(2);a=d[sp-1];if(a<0||a>255)return T(6);d[sp-1]=m[a];break;
case 65:if(sp<2)return T(2);a=d[sp-1];if(a<0||a>255)return T(6);m[a]=d[sp-2];sp-=2;break;
case 80:if(sp<1)return T(2);s=String(d[sp-1]);if(L+s.length>65536)return T(11);sp--;for(let k=0;k<s.length;k++)o[L++]=s.charCodeAt(k);break;
case 81:if(sp<1)return T(2);if(L>65535)return T(11);o[L++]=d[--sp]&255;break;
case 82:if(sp>255)return T(3);d[sp++]=ip<q.length?q[ip++]:-1;break;
case 83:if(sp<1)return T(2);return T(d[--sp]&255);
default:return T(5);
}}}
let I=process.env.MAKEFUN_INPUT_DIR??"/input",O=process.env.MAKEFUN_OUTPUT_DIR??"/output";
for(let id of A(I).sort()){let r=F(B(E(I,id,"program.bin")),B(E(I,id,"input.bin")));C(E(O,id),{recursive:true});D(E(O,id,"stdout.bin"),r.o);D(E(O,id,"exit.txt"),r.c+"\n");}
