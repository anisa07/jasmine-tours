import{j as c,m as vn}from"./motion.Bb6Jo73B.js";import{r as g,R as Qn}from"./index.BG0d_8j_.js";/* empty css                            */import{d as Ua,C as ye}from"./Card.D0JX4LGp.js";import{t as Ha,T as Xa,a as Ga,E as Ka,b as Va,u as qa,c as Mt,o as He,s as Ct,d as B,e as Xe,f as Ja,l as gn,g as Zn,r as pn,h as Qa,i as Za,C as hn}from"./Carousel.BRXEZsIj.js";import{c as z,u as st,a as tr}from"./ThemeProvider.D8pLkTce.js";import{R as er}from"./index.CtXyDSsW.js";import{P as h}from"./index.BwNpgpsA.js";import{f as nr}from"./flower3.C8IdiT5y.js";import{C as ar}from"./Container.D8EtO41C.js";function rr(){return g.useState(null)}function ir(t){const e=g.useRef(null);return g.useEffect(()=>{e.current=t}),e.current}const or=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",sr=typeof document<"u",bn=sr||or?g.useLayoutEffect:g.useEffect,lr={[Va]:"show",[Ka]:"show"},Ge=g.forwardRef(({className:t,children:e,transitionClasses:n={},onEnter:a,...r},i)=>{const o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...r},s=g.useCallback((l,f)=>{Ha(l),a?.(l,f)},[a]);return c.jsx(Xa,{ref:i,addEndListener:Ga,...o,onEnter:s,childRef:e.ref,children:(l,f)=>g.cloneElement(e,{...f,className:z("fade",t,e.props.className,lr[l],n[l])})})});Ge.displayName="Fade";const cr={"aria-label":h.string,onClick:h.func,variant:h.oneOf(["white"])},Ke=g.forwardRef(({className:t,variant:e,"aria-label":n="Close",...a},r)=>c.jsx("button",{ref:r,type:"button",className:z("btn-close",e&&`btn-close-${e}`,t),"aria-label":n,...a}));Ke.displayName="CloseButton";Ke.propTypes=cr;const Te=g.forwardRef(({as:t,bsPrefix:e,variant:n="primary",size:a,active:r=!1,disabled:i=!1,className:o,...s},l)=>{const f=st(e,"btn"),[u,{tagName:d}]=qa({tagName:t,disabled:i,...s}),p=d;return c.jsx(p,{...u,...s,ref:l,disabled:i,className:z(o,f,r&&"active",n&&`${f}-${n}`,a&&`${f}-${a}`,s.href&&i&&"disabled")})});Te.displayName="Button";var fr=Function.prototype.bind.call(Function.prototype.call,[].slice);function dt(t,e){return fr(t.querySelectorAll(e))}function yn(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}const ur="data-rr-ui-";function dr(t){return`${ur}${t}`}const ta=g.createContext(Mt?window:void 0);ta.Provider;function Ve(){return g.useContext(ta)}var Kt;function xn(t){if((!Kt&&Kt!==0||t)&&Mt){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e),Kt=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return Kt}function xe(t){t===void 0&&(t=He());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function mr(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const wn=dr("modal-open");class qe{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:a=!1}={}){this.handleContainerOverflow=n,this.isRTL=a,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return mr(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},a=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[a]:r.style[a]},e.scrollBarWidth&&(n[a]=`${parseInt(Ct(r,a)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(wn,""),Ct(r,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(wn),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const we=(t,e)=>Mt?t==null?(e||He()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function vr(t,e){const n=Ve(),[a,r]=g.useState(()=>we(t,n?.document));if(!a){const i=we(t);i&&r(i)}return g.useEffect(()=>{},[e,a]),g.useEffect(()=>{const i=we(t);i!==a&&r(i)},[t,a]),a}function gr({children:t,in:e,onExited:n,mountOnEnter:a,unmountOnExit:r}){const i=g.useRef(null),o=g.useRef(e),s=B(n);g.useEffect(()=>{e?o.current=!0:s(i.current)},[e,s]);const l=Xe(i,t.ref),f=g.cloneElement(t,{ref:l});return e?f:r||!o.current&&a?null:f}function pr({in:t,onTransition:e}){const n=g.useRef(null),a=g.useRef(!0),r=B(e);return bn(()=>{if(!n.current)return;let i=!1;return r({in:t,element:n.current,initial:a.current,isStale:()=>i}),()=>{i=!0}},[t,r]),bn(()=>(a.current=!1,()=>{a.current=!0}),[]),n}function hr({children:t,in:e,onExited:n,onEntered:a,transition:r}){const[i,o]=g.useState(!e);e&&i&&o(!1);const s=pr({in:!!e,onTransition:f=>{const u=()=>{f.isStale()||(f.in?a?.(f.element,f.initial):(o(!0),n?.(f.element)))};Promise.resolve(r(f)).then(u,d=>{throw f.in||o(!0),d})}}),l=Xe(s,t.ref);return i&&!e?null:g.cloneElement(t,{ref:l})}function kn(t,e,n){return t?c.jsx(t,Object.assign({},n)):e?c.jsx(hr,Object.assign({},n,{transition:e})):c.jsx(gr,Object.assign({},n))}function br(t){return t.code==="Escape"||t.keyCode===27}const yr=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function xr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}let ke;function wr(t){return ke||(ke=new qe({ownerDocument:t?.document})),ke}function kr(t){const e=Ve(),n=t||wr(e),a=g.useRef({dialog:null,backdrop:null});return Object.assign(a.current,{add:()=>n.add(a.current),remove:()=>n.remove(a.current),isTopModal:()=>n.isTopModal(a.current),setDialogRef:g.useCallback(r=>{a.current.dialog=r},[]),setBackdropRef:g.useCallback(r=>{a.current.backdrop=r},[])})}const ea=g.forwardRef((t,e)=>{let{show:n=!1,role:a="dialog",className:r,style:i,children:o,backdrop:s=!0,keyboard:l=!0,onBackdropClick:f,onEscapeKeyDown:u,transition:d,runTransition:p,backdropTransition:b,runBackdropTransition:E,autoFocus:N=!0,enforceFocus:x=!0,restoreFocus:I=!0,restoreFocusOptions:w,renderDialog:O,renderBackdrop:_=j=>c.jsx("div",Object.assign({},j)),manager:C,container:D,onShow:P,onHide:G=()=>{},onExit:M,onExited:tt,onExiting:$t,onEnter:Bt,onEntering:Yt,onEntered:ge}=t,pe=xr(t,yr);const K=Ve(),lt=vr(D),R=kr(C),Wt=Ja(),wt=ir(n),[et,V]=g.useState(!n),$=g.useRef(null);g.useImperativeHandle(e,()=>R,[R]),Mt&&!wt&&n&&($.current=xe(K?.document)),n&&et&&V(!1);const Ut=B(()=>{if(R.add(),ft.current=gn(document,"keydown",be),ct.current=gn(document,"focus",()=>setTimeout(Ht),!0),P&&P(),N){var j,Gt;const Ot=xe((j=(Gt=R.dialog)==null?void 0:Gt.ownerDocument)!=null?j:K?.document);R.dialog&&Ot&&!yn(R.dialog,Ot)&&($.current=Ot,R.dialog.focus())}}),kt=B(()=>{if(R.remove(),ft.current==null||ft.current(),ct.current==null||ct.current(),I){var j;(j=$.current)==null||j.focus==null||j.focus(w),$.current=null}});g.useEffect(()=>{!n||!lt||Ut()},[n,lt,Ut]),g.useEffect(()=>{et&&kt()},[et,kt]),Zn(()=>{kt()});const Ht=B(()=>{if(!x||!Wt()||!R.isTopModal())return;const j=xe(K?.document);R.dialog&&j&&!yn(R.dialog,j)&&R.dialog.focus()}),he=B(j=>{j.target===j.currentTarget&&(f?.(j),s===!0&&G())}),be=B(j=>{l&&br(j)&&R.isTopModal()&&(u?.(j),j.defaultPrevented||G())}),ct=g.useRef(),ft=g.useRef(),At=(...j)=>{V(!0),tt?.(...j)};if(!lt)return null;const Xt=Object.assign({role:a,ref:R.setDialogRef,"aria-modal":a==="dialog"?!0:void 0},pe,{style:i,className:r,tabIndex:-1});let Et=O?O(Xt):c.jsx("div",Object.assign({},Xt,{children:g.cloneElement(o,{role:"document"})}));Et=kn(d,p,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:M,onExiting:$t,onExited:At,onEnter:Bt,onEntering:Yt,onEntered:ge,children:Et});let nt=null;return s&&(nt=_({ref:R.setBackdropRef,onClick:he}),nt=kn(b,E,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:nt})),c.jsx(c.Fragment,{children:er.createPortal(c.jsxs(c.Fragment,{children:[nt,Et]}),lt)})});ea.displayName="Modal";const Ar=Object.assign(ea,{Manager:qe});function Er(t,e){return t.classList?t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function Or(t,e){t.classList?t.classList.add(e):Er(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function An(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function jr(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=An(t.className,e):t.setAttribute("class",An(t.className&&t.className.baseVal||"",e))}const mt={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Cr extends qe{adjustAndStore(e,n,a){const r=n.style[e];n.dataset[e]=r,Ct(n,{[e]:`${parseFloat(Ct(n,e))+a}px`})}restore(e,n){const a=n.dataset[e];a!==void 0&&(delete n.dataset[e],Ct(n,{[e]:a}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(Or(n,"modal-open"),!e.scrollBarWidth)return;const a=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";dt(n,mt.FIXED_CONTENT).forEach(i=>this.adjustAndStore(a,i,e.scrollBarWidth)),dt(n,mt.STICKY_CONTENT).forEach(i=>this.adjustAndStore(r,i,-e.scrollBarWidth)),dt(n,mt.NAVBAR_TOGGLER).forEach(i=>this.adjustAndStore(r,i,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();jr(n,"modal-open");const a=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";dt(n,mt.FIXED_CONTENT).forEach(i=>this.restore(a,i)),dt(n,mt.STICKY_CONTENT).forEach(i=>this.restore(r,i)),dt(n,mt.NAVBAR_TOGGLER).forEach(i=>this.restore(r,i))}}let Ae;function Sr(t){return Ae||(Ae=new Cr(t)),Ae}const na=g.forwardRef(({className:t,bsPrefix:e,as:n="div",...a},r)=>(e=st(e,"modal-body"),c.jsx(n,{ref:r,className:z(t,e),...a})));na.displayName="ModalBody";const aa=g.createContext({onHide(){}}),Je=g.forwardRef(({bsPrefix:t,className:e,contentClassName:n,centered:a,size:r,fullscreen:i,children:o,scrollable:s,...l},f)=>{t=st(t,"modal");const u=`${t}-dialog`,d=typeof i=="string"?`${t}-fullscreen-${i}`:`${t}-fullscreen`;return c.jsx("div",{...l,ref:f,className:z(u,e,r&&`${t}-${r}`,a&&`${u}-centered`,s&&`${u}-scrollable`,i&&d),children:c.jsx("div",{className:z(`${t}-content`,n),children:o})})});Je.displayName="ModalDialog";const ra=g.forwardRef(({className:t,bsPrefix:e,as:n="div",...a},r)=>(e=st(e,"modal-footer"),c.jsx(n,{ref:r,className:z(t,e),...a})));ra.displayName="ModalFooter";const Nr=g.forwardRef(({closeLabel:t="Close",closeVariant:e,closeButton:n=!1,onHide:a,children:r,...i},o)=>{const s=g.useContext(aa),l=B(()=>{s?.onHide(),a?.()});return c.jsxs("div",{ref:o,...i,children:[r,n&&c.jsx(Ke,{"aria-label":t,variant:e,onClick:l})]})}),ia=g.forwardRef(({bsPrefix:t,className:e,closeLabel:n="Close",closeButton:a=!1,...r},i)=>(t=st(t,"modal-header"),c.jsx(Nr,{ref:i,...r,className:z(e,t),closeLabel:n,closeButton:a})));ia.displayName="ModalHeader";const Tr=Ua("h4"),oa=g.forwardRef(({className:t,bsPrefix:e,as:n=Tr,...a},r)=>(e=st(e,"modal-title"),c.jsx(n,{ref:r,className:z(t,e),...a})));oa.displayName="ModalTitle";function Ir(t){return c.jsx(Ge,{...t,timeout:null})}function _r(t){return c.jsx(Ge,{...t,timeout:null})}const sa=g.forwardRef(({bsPrefix:t,className:e,style:n,dialogClassName:a,contentClassName:r,children:i,dialogAs:o=Je,"aria-labelledby":s,"aria-describedby":l,"aria-label":f,show:u=!1,animation:d=!0,backdrop:p=!0,keyboard:b=!0,onEscapeKeyDown:E,onShow:N,onHide:x,container:I,autoFocus:w=!0,enforceFocus:O=!0,restoreFocus:_=!0,restoreFocusOptions:C,onEntered:D,onExit:P,onExiting:G,onEnter:M,onEntering:tt,onExited:$t,backdropClassName:Bt,manager:Yt,...ge},pe)=>{const[K,lt]=g.useState({}),[R,Wt]=g.useState(!1),wt=g.useRef(!1),et=g.useRef(!1),V=g.useRef(null),[$,Ut]=rr(),kt=Xe(pe,Ut),Ht=B(x),he=tr();t=st(t,"modal");const be=g.useMemo(()=>({onHide:Ht}),[Ht]);function ct(){return Yt||Sr({isRTL:he})}function ft(y){if(!Mt)return;const ut=ct().getScrollbarWidth()>0,mn=y.scrollHeight>He(y).documentElement.clientHeight;lt({paddingRight:ut&&!mn?xn():void 0,paddingLeft:!ut&&mn?xn():void 0})}const At=B(()=>{$&&ft($.dialog)});Zn(()=>{pn(window,"resize",At),V.current==null||V.current()});const Xt=()=>{wt.current=!0},Et=y=>{wt.current&&$&&y.target===$.dialog&&(et.current=!0),wt.current=!1},nt=()=>{Wt(!0),V.current=Za($.dialog,()=>{Wt(!1)})},j=y=>{y.target===y.currentTarget&&nt()},Gt=y=>{if(p==="static"){j(y);return}if(et.current||y.target!==y.currentTarget){et.current=!1;return}x?.()},Ot=y=>{b?E?.(y):(y.preventDefault(),p==="static"&&nt())},Fa=(y,ut)=>{y&&ft(y),M?.(y,ut)},za=y=>{V.current==null||V.current(),P?.(y)},$a=(y,ut)=>{tt?.(y,ut),Qa(window,"resize",At)},Ba=y=>{y&&(y.style.display=""),$t?.(y),pn(window,"resize",At)},Ya=g.useCallback(y=>c.jsx("div",{...y,className:z(`${t}-backdrop`,Bt,!d&&"show")}),[d,Bt,t]),dn={...n,...K};dn.display="block";const Wa=y=>c.jsx("div",{role:"dialog",...y,style:dn,className:z(e,t,R&&`${t}-static`,!d&&"show"),onClick:p?Gt:void 0,onMouseUp:Et,"aria-label":f,"aria-labelledby":s,"aria-describedby":l,children:c.jsx(o,{...ge,onMouseDown:Xt,className:a,contentClassName:r,children:i})});return c.jsx(aa.Provider,{value:be,children:c.jsx(Ar,{show:u,ref:kt,backdrop:p,container:I,keyboard:!0,autoFocus:w,enforceFocus:O,restoreFocus:_,restoreFocusOptions:C,onEscapeKeyDown:Ot,onShow:N,onHide:x,onEnter:Fa,onEntering:$a,onEntered:D,onExit:za,onExiting:G,onExited:Ba,manager:ct(),transition:d?Ir:void 0,backdropTransition:d?_r:void 0,renderBackdrop:Ya,renderDialog:Wa})})});sa.displayName="Modal";const Vt=Object.assign(sa,{Body:na,Header:ia,Title:oa,Footer:ra,Dialog:Je,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),Rr=({title:t,text:e,images:n,additionalInfo:a})=>{const[r,i]=g.useState(!1),o=()=>{i(!r)},s=()=>{i(!1)};return c.jsxs(c.Fragment,{children:[c.jsxs(ye,{className:`text-left ${r?"expanded":""}`,children:[c.jsx("div",{className:"card-image-container",children:c.jsx(hn,{indicators:!0,controls:!0,interval:null,children:n.map((l,f)=>c.jsx(hn.Item,{children:c.jsx("img",{className:"d-block w-100",src:l,alt:`Слайд ${f+1}`,loading:"lazy"})},f))})}),c.jsxs(ye.Body,{className:"d-flex flex-column",children:[c.jsx(ye.Title,{className:"text-center mb-3",children:t}),c.jsx("ul",{className:"flex-grow-1",children:e.map((l,f)=>c.jsx("li",{children:l},f))}),c.jsx(vn.div,{className:"d-flex justify-content-center mt-3",children:c.jsx(Te,{as:vn.button,variants:{hover:{scale:1.05,transition:{duration:.2}},initial:{scale:1}},initial:"initial",whileHover:"hover",className:"custom-button",onClick:o,children:"Подробнее"})})]})]}),c.jsxs(Vt,{show:r,onHide:s,centered:!0,size:"lg",children:[c.jsx(Vt.Header,{closeButton:!0}),c.jsx(Vt.Body,{children:c.jsx("div",{children:a})}),c.jsx(Vt.Footer,{children:c.jsx(Te,{className:"custom-button",onClick:s,children:"Закрыть"})})]})]})},Pr={src:"/_astro/combined1.Lcrr1dYL.jpg"},Mr={src:"/_astro/combined2.BSOOcb19.jpg"},Lr={src:"/_astro/combined3.CxWrTaIs.jpg"},Dr={src:"/_astro/amsterdamtour1.BrK1kMBE.jpg"},En={src:"/_astro/amsterdamtour2.BZGEY_WQ.jpg"},On={src:"/_astro/amsterdamtour3.DIOJELd1.jpg"},Fr={src:"/_astro/mill1.Bvf33Q2x.jpg"},zr={src:"/_astro/mill2.BHjqE7Nt.jpg"},$r={src:"/_astro/mill3.BWd3aX76.jpg"},Br={src:"/_astro/canalboat1.BWqMf5Qo.jpg"},Yr={src:"/_astro/canalboat2.CbEXfUJf.jpg"},Wr={src:"/_astro/canalboat3.Dmbdv0qH.jpg"},Ur={src:"/_astro/delft1.DXHcjsHR.jpeg"},Hr={src:"/_astro/delft2.B17fUBBc.jpeg"},Xr={src:"/_astro/delft3.CAp1liXI.jpeg"},Gr={src:"/_astro/denhaag1.BeTidU44.jpeg"},Kr={src:"/_astro/denhaag2.CPFQeBtL.png"},Vr={src:"/_astro/denhaag3.C5TCuuBH.jpg"},qr={src:"/_astro/rotterdam1.Jph7YOOB.jpg"},Jr={src:"/_astro/rotterdam2.DdBIJFII.jpg"},Qr={src:"/_astro/rotterdam3.Ega9t0VG.jpg"},Zr={src:"/_astro/vangogh1.C6yRCJvY.jpeg"},ti={src:"/_astro/vangogh2.hOtSURjb.jpeg"},ei={src:"/_astro/vangogh3.DheDs4HA.jpeg"},ni={src:"/_astro/bike1.D3Ax1_S-.jpg"},ai={src:"/_astro/bike2.BZaj23Do.jpg"},ri={src:"/_astro/flower1.DLKHAqO6.jpg"},ii={src:"/_astro/flower2.CsJMOdBX.jpg"},oi={src:"/_astro/tasting1.Busdi_ts.jpg"},si={src:"/_astro/tasting2.CVw1OnAV.jpg"},li={src:"/_astro/nightamsterdam1.WyQkBh34.jpg"},ci={src:"/_astro/nightamsterdam2.BMUKmkXq.jpg"},fi={src:"/_astro/nightamsterdam3.aXHxyNhF.jpeg"},Ee=[{title:"Хотите всё сразу? Комбинированный Тур",text:["Прогулка по старому городу или йорданскому району - 2 часа.","Фотосессия в национальной одежде."],images:[Pr.src,Mr.src,Lr.src],additionalInfo:c.jsxs("div",{children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Комбинированный тур по Амстердаму:"})," уникальные впечатления для вашей группы"]}),c.jsx("p",{children:"Этот тур — идеальный способ познакомиться с Амстердамом с самых разных сторон! Мы начнем с увлекательной прогулки по одной из самых атмосферных частей города — старому городу или живописному Йорданскому району. В течение 2 часов вы насладитесь историей, архитектурой и атмосферой этих уникальных кварталов."}),c.jsx("p",{children:"Но это только начало! Вас ждёт возможность переодеться в традиционную национальную одежду, чтобы почувствовать дух прошлого и сделать невероятно красивые фотографии на фоне живописной деревенской атмосферы. После прогулки нас будет ждать вкусный перекус — свежая селёдка, как в лучших традициях Нидерландов."}),c.jsx("p",{children:"Затем мы отправимся на приватную лодку, чтобы увидеть Амстердам с воды. Город, раскинувшийся на каналах, раскрывает свою настоящую красоту с лодки, и это впечатление трудно передать словами. Вы можете взять с собой любимые напитки и закуски, чтобы наслаждаться путешествием, а если хотите, мы украсим лодку по вашему желанию — идеальный способ сделать ваш тур ещё более незабываемым! Лодка полностью забронирована для вашей группы (до 8 человек), и самое главное — стоимость тура указана за всю группу, а не за каждого человека."}),c.jsx("p",{children:"И для самых любознательных у нас есть дополнительная опция: визит в дом на воде, расположенный прямо на канале. Вы сможете заглянуть в уникальный мир жизни на воде и увидеть, как выглядит быт людей, живущих в таких необычных домах. Дополнительная экскурсия по дому на воде стоит всего 5 евро с человека."}),c.jsx("p",{children:"Этот тур — это не просто экскурсия, а возможность получить уникальные впечатления, сделать оригинальные фотографии, насладиться непринуждённой атмосферой и увидеть Амстердам с самых разных ракурсов. И все это — в компании только вашей группы!"})]})},{title:"Это Амстердам детка",text:["Отличные места для дегустации, особенности площади Дам и знаменитых кварталов.","Продолжительность: 2 часа."],images:[Dr.src,En.src,On.src],additionalInfo:c.jsxs("div",{children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Откройте для себя Амстердам с новой стороны:"})," тур по скрытым уголкам города"]}),c.jsx("p",{children:"Амстердам — это не только каналы, музеи и ветряные мельницы. В этом городе скрыты уголки, о которых знают только местные. Я приглашаю вас на уникальный тур, в рамках которого мы откроем для себя самые удивительные, но скрытые места Амстердама: старинные церкви, монастыри и места с глубоким историческим значением."}),c.jsx("p",{children:"Что вас ждет? Амстердам — это не просто город. Это лабиринт улиц, пропитанных тайнами прошлого. Погрузитесь в атмосферу старинных зданий и узких улочек, где в тени привычных достопримечательностей скрываются настоящие сокровища."}),c.jsx("p",{children:c.jsx("strong",{children:"Детали тура:"})}),c.jsxs("ul",{children:[c.jsx("li",{children:"Продолжительность: два часа"}),c.jsx("li",{children:"Количество участников: до 6 человек"})]})]})},{title:"Уникальная деревня мельниц",text:["Уникальная деревня: Занзе Сханс, сырная ферма, музей обуви.","Прекрасные Мельницы: река Заан."],images:[Fr.src,zr.src,$r.src],additionalInfo:c.jsxs("div",{children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Занзесханс"})," — уникальная деревня, где традиции оживают в пряничных домиках, сырных фермах и мастерских по производству деревянной обуви. Но настоящей жемчужиной являются рабочие мельницы, которые излучают необыкновенную красоту, а виды на реку Заан невозможно передать словами."]}),c.jsxs("p",{children:["Экскурсия длится ",c.jsx("strong",{children:"3 часа"}),", вход в мельницу — ",c.jsx("strong",{children:"5 евро"}),". Стоимость дороги — ",c.jsx("strong",{children:"8.40 евро"})," с человека. Группы до 4 человек, идеально для семей с детьми."]})]})},{title:"Прогулка на лодке по каналам",text:["Приватная лодка для вашей компании (до 8 человек).","Продолжительность: 1.5-2 часа."],images:[Br.src,Yr.src,Wr.src],additionalInfo:c.jsxs("div",{children:[c.jsx("p",{children:c.jsx("strong",{children:"Романтическая прогулка по каналам Амстердама"})}),c.jsx("p",{children:"Откройте для себя Амстердам с воды! Мы предлагаем приватную лодку для вашей группы, где вы сможете насладиться красотой города, плывя по его знаменитым каналам."}),c.jsx("p",{children:"Возьмите с собой любимые напитки и закуски, и наслаждайтесь незабываемой атмосферой. Мы можем украсить лодку по вашему желанию для особых случаев."})]})},{title:"Делфт - город сине-белой керамики",text:["Посещение фабрики Royal Delft.","Прогулка по историческому центру."],images:[Ur.src,Hr.src,Xr.src],additionalInfo:c.jsx("div",{children:c.jsxs("p",{children:[c.jsx("strong",{children:"Делфт"})," — очаровательный город, известный своей знаменитой сине-белой керамикой. Мы посетим фабрику Royal Delft, где вы увидите процесс создания керамики, и прогуляемся по историческому центру с его живописными каналами и старинными зданиями."]})})},{title:"Гаага - резиденция правительства",text:["Дворец Мира, Бинненхоф, Мадуродам.","Продолжительность: 3-4 часа."],images:[Gr.src,Kr.src,Vr.src],additionalInfo:c.jsx("div",{children:c.jsxs("p",{children:[c.jsx("strong",{children:"Гаага"})," — резиденция правительства Нидерландов и королевская резиденция. Мы посетим Бинненхоф (парламент), Дворец Мира, прогуляемся по элегантному центру города и посетим Мадуродам - миниатюрный город Нидерландов."]})})},{title:"Роттердам - современная архитектура",text:["Кубические дома, мост Эразма, Маркхал.","Контраст современности и истории."],images:[qr.src,Jr.src,Qr.src],additionalInfo:c.jsx("div",{children:c.jsxs("p",{children:[c.jsx("strong",{children:"Роттердам"})," — полная противоположность Амстердаму. Это город современной архитектуры и инноваций. Мы увидим знаменитые кубические дома, мост Эразма, футуристический рынок Маркхал и многое другое."]})})},{title:"Музей Ван Гога",text:["Крупнейшая коллекция работ Ван Гога.","Экскурсия с гидом по музею."],images:[Zr.src,ti.src,ei.src],additionalInfo:c.jsx("div",{children:c.jsxs("p",{children:[c.jsx("strong",{children:"Музей Ван Гога"})," хранит самую большую коллекцию работ великого художника. Я проведу вас через залы музея, расскажу о жизни и творчестве Ван Гога, и вы увидите его самые известные картины."]})})},{title:"Велосипедный тур по Амстердаму",text:["Познайте Амстердам как местные жители.","Продолжительность: 2-3 часа."],images:[ni.src,ai.src,On.src],additionalInfo:c.jsx("div",{children:c.jsxs("p",{children:[c.jsx("strong",{children:"Велосипедный тур"})," — лучший способ почувствовать себя настоящим амстердамцем! Мы прокатимся по самым интересным местам города, паркам и вдоль каналов. Велосипеды предоставляются."]})})},{title:"Парк цветов Кёкенхоф",text:["Весенний сезон (март-май).","Миллионы тюльпанов и других цветов."],images:[ri.src,ii.src,nr.src],additionalInfo:c.jsxs("div",{children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Кёкенхоф"})," — самый известный парк цветов в мире! Весной миллионы тюльпанов, нарциссов и гиацинтов создают невероятное красочное зрелище. Это must-see для всех, кто посещает Нидерланды весной."]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Внимание:"})," парк открыт только с конца марта до середины мая."]})]})},{title:"Гастрономический тур",text:["Дегустация традиционных голландских блюд.","Посещение местных рынков и кафе."],images:[oi.src,si.src,En.src],additionalInfo:c.jsx("div",{children:c.jsxs("p",{children:[c.jsx("strong",{children:"Гастрономический тур"})," для настоящих ценителей! Мы попробуем традиционную селедку, сыр, строопвафли, крокеты и другие голландские деликатесы. Посетим местные рынки и уютные кафе."]})})},{title:"Ночной Амстердам",text:["Вечерняя прогулка по освещенному городу.","Красота каналов в огнях."],images:[li.src,ci.src,fi.src],additionalInfo:c.jsx("div",{children:c.jsxs("p",{children:[c.jsx("strong",{children:"Ночной Амстердам"})," — это совершенно другой город! Вечером город преображается: каналы освещаются тысячами огней, создавая романтическую и волшебную атмосферу. Идеальный тур для пар и фотографов."]})})}];function jn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?jn(Object(n),!0).forEach(function(a){T(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):jn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function se(t){"@babel/helpers - typeof";return se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},se(t)}function ui(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function di(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function mi(t,e,n){return e&&di(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function T(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Qe(t,e){return gi(t)||hi(t,e)||la(t,e)||yi()}function Lt(t){return vi(t)||pi(t)||la(t)||bi()}function vi(t){if(Array.isArray(t))return Ie(t)}function gi(t){if(Array.isArray(t))return t}function pi(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function hi(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function la(t,e){if(t){if(typeof t=="string")return Ie(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ie(t,e)}}function Ie(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function bi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yi(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Cn=function(){},Ze={},ca={},fa=null,ua={mark:Cn,measure:Cn};try{typeof window<"u"&&(Ze=window),typeof document<"u"&&(ca=document),typeof MutationObserver<"u"&&(fa=MutationObserver),typeof performance<"u"&&(ua=performance)}catch{}var xi=Ze.navigator||{},Sn=xi.userAgent,Nn=Sn===void 0?"":Sn,J=Ze,A=ca,Tn=fa,qt=ua;J.document;var X=!!A.documentElement&&!!A.head&&typeof A.addEventListener=="function"&&typeof A.createElement=="function",da=~Nn.indexOf("MSIE")||~Nn.indexOf("Trident/"),Jt,Qt,Zt,te,ee,W="___FONT_AWESOME___",_e=16,ma="fa",va="svg-inline--fa",it="data-fa-i2svg",Re="data-fa-pseudo-element",wi="data-fa-pseudo-element-pending",tn="data-prefix",en="data-icon",In="fontawesome-i2svg",ki="async",Ai=["HTML","HEAD","STYLE","SCRIPT"],ga=function(){try{return!0}catch{return!1}}(),k="classic",S="sharp",nn=[k,S];function Dt(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[k]}})}var Tt=Dt((Jt={},T(Jt,k,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),T(Jt,S,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Jt)),It=Dt((Qt={},T(Qt,k,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),T(Qt,S,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Qt)),_t=Dt((Zt={},T(Zt,k,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),T(Zt,S,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Zt)),Ei=Dt((te={},T(te,k,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),T(te,S,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),te)),Oi=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,pa="fa-layers-text",ji=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ci=Dt((ee={},T(ee,k,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),T(ee,S,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),ee)),ha=[1,2,3,4,5,6,7,8,9,10],Si=ha.concat([11,12,13,14,15,16,17,18,19,20]),Ni=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],at={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Rt=new Set;Object.keys(It[k]).map(Rt.add.bind(Rt));Object.keys(It[S]).map(Rt.add.bind(Rt));var Ti=[].concat(nn,Lt(Rt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",at.GROUP,at.SWAP_OPACITY,at.PRIMARY,at.SECONDARY]).concat(ha.map(function(t){return"".concat(t,"x")})).concat(Si.map(function(t){return"w-".concat(t)})),St=J.FontAwesomeConfig||{};function Ii(t){var e=A.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function _i(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(A&&typeof A.querySelector=="function"){var Ri=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ri.forEach(function(t){var e=Qe(t,2),n=e[0],a=e[1],r=_i(Ii(n));r!=null&&(St[a]=r)})}var ba={styleDefault:"solid",familyDefault:"classic",cssPrefix:ma,replacementClass:va,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};St.familyPrefix&&(St.cssPrefix=St.familyPrefix);var yt=m(m({},ba),St);yt.autoReplaceSvg||(yt.observeMutations=!1);var v={};Object.keys(ba).forEach(function(t){Object.defineProperty(v,t,{enumerable:!0,set:function(n){yt[t]=n,Nt.forEach(function(a){return a(v)})},get:function(){return yt[t]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(e){yt.cssPrefix=e,Nt.forEach(function(n){return n(v)})},get:function(){return yt.cssPrefix}});J.FontAwesomeConfig=v;var Nt=[];function Pi(t){return Nt.push(t),function(){Nt.splice(Nt.indexOf(t),1)}}var vt=_e,Y={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Mi(t){if(!(!t||!X)){var e=A.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=A.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return A.head.insertBefore(e,a),t}}var Li="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Pt(){for(var t=12,e="";t-- >0;)e+=Li[Math.random()*62|0];return e}function xt(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function an(t){return t.classList?xt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function ya(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Di(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(ya(t[n]),'" ')},"").trim()}function ue(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function rn(t){return t.size!==Y.size||t.x!==Y.x||t.y!==Y.y||t.rotate!==Y.rotate||t.flipX||t.flipY}function Fi(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:f}}function zi(t){var e=t.transform,n=t.width,a=n===void 0?_e:n,r=t.height,i=r===void 0?_e:r,o="";return da?o+="translate(".concat(e.x/vt-a/2,"em, ").concat(e.y/vt-i/2,"em) "):o+="translate(calc(-50% + ".concat(e.x/vt,"em), calc(-50% + ").concat(e.y/vt,"em)) "),o+="scale(".concat(e.size/vt*(e.flipX?-1:1),", ").concat(e.size/vt*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var $i=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function xa(){var t=ma,e=va,n=v.cssPrefix,a=v.replacementClass,r=$i;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var _n=!1;function Oe(){v.autoAddCss&&!_n&&(Mi(xa()),_n=!0)}var Bi={mixout:function(){return{dom:{css:xa,insertCss:Oe}}},hooks:function(){return{beforeDOMElementCreation:function(){Oe()},beforeI2svg:function(){Oe()}}}},U=J||{};U[W]||(U[W]={});U[W].styles||(U[W].styles={});U[W].hooks||(U[W].hooks={});U[W].shims||(U[W].shims=[]);var F=U[W],wa=[],Yi=function t(){A.removeEventListener("DOMContentLoaded",t),le=1,wa.map(function(e){return e()})},le=!1;X&&(le=(A.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(A.readyState),le||A.addEventListener("DOMContentLoaded",Yi));function Wi(t){X&&(le?setTimeout(t,0):wa.push(t))}function Ft(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?ya(t):"<".concat(e," ").concat(Di(a),">").concat(i.map(Ft).join(""),"</").concat(e,">")}function Rn(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var je=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=n,l,f,u;for(a===void 0?(l=1,u=e[i[0]]):(l=0,u=a);l<o;l++)f=i[l],u=s(u,e[f],f,e);return u};function Ui(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Pe(t){var e=Ui(t);return e.length===1?e[0].toString(16):null}function Hi(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Pn(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function Me(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Pn(e);typeof F.hooks.addPack=="function"&&!r?F.hooks.addPack(t,Pn(e)):F.styles[t]=m(m({},F.styles[t]||{}),i),t==="fas"&&Me("fa",e)}var ne,ae,re,gt=F.styles,Xi=F.shims,Gi=(ne={},T(ne,k,Object.values(_t[k])),T(ne,S,Object.values(_t[S])),ne),on=null,ka={},Aa={},Ea={},Oa={},ja={},Ki=(ae={},T(ae,k,Object.keys(Tt[k])),T(ae,S,Object.keys(Tt[S])),ae);function Vi(t){return~Ti.indexOf(t)}function qi(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Vi(r)?r:null}var Ca=function(){var e=function(i){return je(gt,function(o,s,l){return o[l]=je(s,i,{}),o},{})};ka=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),Aa=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),ja=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in gt||v.autoFetchSvg,a=je(Xi,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});Ea=a.names,Oa=a.unicodes,on=de(v.styleDefault,{family:v.familyDefault})};Pi(function(t){on=de(t.styleDefault,{family:v.familyDefault})});Ca();function sn(t,e){return(ka[t]||{})[e]}function Ji(t,e){return(Aa[t]||{})[e]}function rt(t,e){return(ja[t]||{})[e]}function Sa(t){return Ea[t]||{prefix:null,iconName:null}}function Qi(t){var e=Oa[t],n=sn("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Q(){return on}var ln=function(){return{prefix:null,iconName:null,rest:[]}};function de(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?k:n,r=Tt[a][t],i=It[a][t]||It[a][r],o=t in F.styles?t:null;return i||o||null}var Mn=(re={},T(re,k,Object.keys(_t[k])),T(re,S,Object.keys(_t[S])),re);function me(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},T(e,k,"".concat(v.cssPrefix,"-").concat(k)),T(e,S,"".concat(v.cssPrefix,"-").concat(S)),e),o=null,s=k;(t.includes(i[k])||t.some(function(f){return Mn[k].includes(f)}))&&(s=k),(t.includes(i[S])||t.some(function(f){return Mn[S].includes(f)}))&&(s=S);var l=t.reduce(function(f,u){var d=qi(v.cssPrefix,u);if(gt[u]?(u=Gi[s].includes(u)?Ei[s][u]:u,o=u,f.prefix=u):Ki[s].indexOf(u)>-1?(o=u,f.prefix=de(u,{family:s})):d?f.iconName=d:u!==v.replacementClass&&u!==i[k]&&u!==i[S]&&f.rest.push(u),!r&&f.prefix&&f.iconName){var p=o==="fa"?Sa(f.iconName):{},b=rt(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||b||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!gt.far&&gt.fas&&!v.autoFetchSvg&&(f.prefix="fas")}return f},ln());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===S&&(gt.fass||v.autoFetchSvg)&&(l.prefix="fass",l.iconName=rt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Q()||"fas"),l}var Zi=function(){function t(){ui(this,t),this.definitions={}}return mi(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=m(m({},n.definitions[s]||{}),o[s]),Me(s,o[s]);var l=_t[k][s];l&&Me(l,o[s]),Ca()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,f=o.icon,u=f[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(d){typeof d=="string"&&(n[s][d]=f)}),n[s][l]=f}),n}}]),t}(),Ln=[],pt={},bt={},to=Object.keys(bt);function eo(t,e){var n=e.mixoutsTo;return Ln=t,pt={},Object.keys(bt).forEach(function(a){to.indexOf(a)===-1&&delete bt[a]}),Ln.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),se(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){pt[o]||(pt[o]=[]),pt[o].push(i[o])})}a.provides&&a.provides(bt)}),n}function Le(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=pt[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function ot(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=pt[t]||[];r.forEach(function(i){i.apply(null,n)})}function H(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return bt[t]?bt[t].apply(null,e):void 0}function De(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Q();if(e)return e=rt(n,e)||e,Rn(Na.definitions,n,e)||Rn(F.styles,n,e)}var Na=new Zi,no=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,ot("noAuto")},ao={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return X?(ot("beforeI2svg",e),H("pseudoElements2svg",e),H("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,Wi(function(){io({autoReplaceSvgRoot:n}),ot("watch",e)})}},ro={icon:function(e){if(e===null)return null;if(se(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:rt(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=de(e[0]);return{prefix:a,iconName:rt(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(v.cssPrefix,"-"))>-1||e.match(Oi))){var r=me(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Q(),iconName:rt(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=Q();return{prefix:i,iconName:rt(i,e)||e}}}},L={noAuto:no,config:v,dom:ao,parse:ro,library:Na,findIconDefinition:De,toHtml:Ft},io=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?A:n;(Object.keys(F.styles).length>0||v.autoFetchSvg)&&X&&v.autoReplaceSvg&&L.dom.i2svg({node:a})};function ve(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return Ft(a)})}}),Object.defineProperty(t,"node",{get:function(){if(X){var a=A.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function oo(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(rn(o)&&n.found&&!a.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};r.style=ue(m(m({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function so(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(v.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:o}),children:a}]}]}function cn(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,f=t.maskId,u=t.titleId,d=t.extra,p=t.watchable,b=p===void 0?!1:p,E=a.found?a:n,N=E.width,x=E.height,I=r==="fak",w=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(M){return d.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(d.classes).join(" "),O={children:[],attributes:m(m({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(x)})},_=I&&!~d.classes.indexOf("fa-fw")?{width:"".concat(N/x*16*.0625,"em")}:{};b&&(O.attributes[it]=""),l&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(u||Pt())},children:[l]}),delete O.attributes.title);var C=m(m({},O),{},{prefix:r,iconName:i,main:n,mask:a,maskId:f,transform:o,symbol:s,styles:m(m({},_),d.styles)}),D=a.found&&n.found?H("generateAbstractMask",C)||{children:[],attributes:{}}:H("generateAbstractIcon",C)||{children:[],attributes:{}},P=D.children,G=D.attributes;return C.children=P,C.attributes=G,s?so(C):oo(C)}function Dn(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,f=m(m(m({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[it]="");var u=m({},o.styles);rn(r)&&(u.transform=zi({transform:r,width:n,height:a}),u["-webkit-transform"]=u.transform);var d=ue(u);d.length>0&&(f.style=d);var p=[];return p.push({tag:"span",attributes:f,children:[e]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function lo(t){var e=t.content,n=t.title,a=t.extra,r=m(m(m({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=ue(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ce=F.styles;function Fe(t){var e=t[0],n=t[1],a=t.slice(4),r=Qe(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(at.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(at.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(at.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var co={found:!1,width:512,height:512};function fo(t,e){!ga&&!v.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ze(t,e){var n=e;return e==="fa"&&v.styleDefault!==null&&(e=Q()),new Promise(function(a,r){if(H("missingIconAbstract"),n==="fa"){var i=Sa(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Ce[e]&&Ce[e][t]){var o=Ce[e][t];return a(Fe(o))}fo(t,e),a(m(m({},co),{},{icon:v.showMissingIcons&&t?H("missingIconAbstract")||{}:{}}))})}var Fn=function(){},$e=v.measurePerformance&&qt&&qt.mark&&qt.measure?qt:{mark:Fn,measure:Fn},jt='FA "6.5.1"',uo=function(e){return $e.mark("".concat(jt," ").concat(e," begins")),function(){return Ta(e)}},Ta=function(e){$e.mark("".concat(jt," ").concat(e," ends")),$e.measure("".concat(jt," ").concat(e),"".concat(jt," ").concat(e," begins"),"".concat(jt," ").concat(e," ends"))},fn={begin:uo,end:Ta},ie=function(){};function zn(t){var e=t.getAttribute?t.getAttribute(it):null;return typeof e=="string"}function mo(t){var e=t.getAttribute?t.getAttribute(tn):null,n=t.getAttribute?t.getAttribute(en):null;return e&&n}function vo(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(v.replacementClass)}function go(){if(v.autoReplaceSvg===!0)return oe.replace;var t=oe[v.autoReplaceSvg];return t||oe.replace}function po(t){return A.createElementNS("http://www.w3.org/2000/svg",t)}function ho(t){return A.createElement(t)}function Ia(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?po:ho:n;if(typeof t=="string")return A.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(Ia(o,{ceFn:a}))}),r}function bo(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var oe={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Ia(r),n)}),n.getAttribute(it)===null&&v.keepOriginalSource){var a=A.createComment(bo(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~an(n).indexOf(v.replacementClass))return oe.replace(e);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===v.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return Ft(s)}).join(`
`);n.setAttribute(it,""),n.innerHTML=o}};function $n(t){t()}function _a(t,e){var n=typeof e=="function"?e:ie;if(t.length===0)n();else{var a=$n;v.mutateApproach===ki&&(a=J.requestAnimationFrame||$n),a(function(){var r=go(),i=fn.begin("mutate");t.map(r),i(),n()})}}var un=!1;function Ra(){un=!0}function Be(){un=!1}var ce=null;function Bn(t){if(Tn&&v.observeMutations){var e=t.treeCallback,n=e===void 0?ie:e,a=t.nodeCallback,r=a===void 0?ie:a,i=t.pseudoElementsCallback,o=i===void 0?ie:i,s=t.observeMutationsRoot,l=s===void 0?A:s;ce=new Tn(function(f){if(!un){var u=Q();xt(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!zn(d.addedNodes[0])&&(v.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&v.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&zn(d.target)&&~Ni.indexOf(d.attributeName))if(d.attributeName==="class"&&mo(d.target)){var p=me(an(d.target)),b=p.prefix,E=p.iconName;d.target.setAttribute(tn,b||u),E&&d.target.setAttribute(en,E)}else vo(d.target)&&r(d.target)})}}),X&&ce.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function yo(){ce&&ce.disconnect()}function xo(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function wo(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=me(an(t));return r.prefix||(r.prefix=Q()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ji(r.prefix,t.innerText)||sn(r.prefix,Pe(t.innerText))),!r.iconName&&v.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function ko(t){var e=xt(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return v.autoA11y&&(n?e["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(a||Pt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ao(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Y,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Yn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=wo(t),a=n.iconName,r=n.prefix,i=n.rest,o=ko(t),s=Le("parseNodeAttributes",{},t),l=e.styleParser?xo(t):[];return m({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Y,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Eo=F.styles;function Pa(t){var e=v.autoReplaceSvg==="nest"?Yn(t,{styleParser:!1}):Yn(t);return~e.extra.classes.indexOf(pa)?H("generateLayersText",t,e):H("generateSvgReplacementMutation",t,e)}var Z=new Set;nn.map(function(t){Z.add("fa-".concat(t))});Object.keys(Tt[k]).map(Z.add.bind(Z));Object.keys(Tt[S]).map(Z.add.bind(Z));Z=Lt(Z);function Wn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!X)return Promise.resolve();var n=A.documentElement.classList,a=function(d){return n.add("".concat(In,"-").concat(d))},r=function(d){return n.remove("".concat(In,"-").concat(d))},i=v.autoFetchSvg?Z:nn.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Eo));i.includes("fa")||i.push("fa");var o=[".".concat(pa,":not([").concat(it,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(it,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=xt(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=fn.begin("onTree"),f=s.reduce(function(u,d){try{var p=Pa(d);p&&u.push(p)}catch(b){ga||b.name==="MissingIcon"&&console.error(b)}return u},[]);return new Promise(function(u,d){Promise.all(f).then(function(p){_a(p,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(p){l(),d(p)})})}function Oo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Pa(t).then(function(n){n&&_a([n],e)})}function jo(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:De(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:De(r||{})),t(a,m(m({},n),{},{mask:r}))}}var Co=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?Y:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,u=f===void 0?null:f,d=n.title,p=d===void 0?null:d,b=n.titleId,E=b===void 0?null:b,N=n.classes,x=N===void 0?[]:N,I=n.attributes,w=I===void 0?{}:I,O=n.styles,_=O===void 0?{}:O;if(e){var C=e.prefix,D=e.iconName,P=e.icon;return ve(m({type:"icon"},e),function(){return ot("beforeDOMElementCreation",{iconDefinition:e,params:n}),v.autoA11y&&(p?w["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(E||Pt()):(w["aria-hidden"]="true",w.focusable="false")),cn({icons:{main:Fe(P),mask:l?Fe(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:D,transform:m(m({},Y),r),symbol:o,title:p,maskId:u,titleId:E,extra:{attributes:w,styles:_,classes:x}})})}},So={mixout:function(){return{icon:jo(Co)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Wn,n.nodeCallback=Oo,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?A:a,i=n.callback,o=i===void 0?function(){}:i;return Wn(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,l=a.transform,f=a.symbol,u=a.mask,d=a.maskId,p=a.extra;return new Promise(function(b,E){Promise.all([ze(r,s),u.iconName?ze(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var x=Qe(N,2),I=x[0],w=x[1];b([n,cn({icons:{main:I,mask:w},prefix:s,iconName:r,transform:l,symbol:f,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(E)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,l=ue(s);l.length>0&&(r.style=l);var f;return rn(o)&&(f=H("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(f||i.icon),{children:a,attributes:r}}}},No={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return ve({type:"layer"},function(){ot("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(Lt(i)).join(" ")},children:o}]})}}}},To={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,f=l===void 0?{}:l,u=a.styles,d=u===void 0?{}:u;return ve({type:"counter",content:n},function(){return ot("beforeDOMElementCreation",{content:n,params:a}),lo({content:n.toString(),title:i,extra:{attributes:f,styles:d,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(Lt(s))}})})}}}},Io={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?Y:r,o=a.title,s=o===void 0?null:o,l=a.classes,f=l===void 0?[]:l,u=a.attributes,d=u===void 0?{}:u,p=a.styles,b=p===void 0?{}:p;return ve({type:"text",content:n},function(){return ot("beforeDOMElementCreation",{content:n,params:a}),Dn({content:n,transform:m(m({},Y),i),title:s,extra:{attributes:d,styles:b,classes:["".concat(v.cssPrefix,"-layers-text")].concat(Lt(f))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,l=null;if(da){var f=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/f,l=u.height/f}return v.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Dn({content:n.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},_o=new RegExp('"',"ug"),Un=[1105920,1112319];function Ro(t){var e=t.replace(_o,""),n=Hi(e,0),a=n>=Un[0]&&n<=Un[1],r=e.length===2?e[0]===e[1]:!1;return{value:Pe(r?e[0]:e),isSecondary:a||r}}function Hn(t,e){var n="".concat(wi).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=xt(t.children),o=i.filter(function(P){return P.getAttribute(Re)===e})[0],s=J.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(ji),f=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),a();if(l&&u!=="none"&&u!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?S:k,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?It[p][l[2].toLowerCase()]:Ci[p][f],E=Ro(d),N=E.value,x=E.isSecondary,I=l[0].startsWith("FontAwesome"),w=sn(b,N),O=w;if(I){var _=Qi(N);_.iconName&&_.prefix&&(w=_.iconName,b=_.prefix)}if(w&&!x&&(!o||o.getAttribute(tn)!==b||o.getAttribute(en)!==O)){t.setAttribute(n,O),o&&t.removeChild(o);var C=Ao(),D=C.extra;D.attributes[Re]=e,ze(w,b).then(function(P){var G=cn(m(m({},C),{},{icons:{main:P,mask:ln()},prefix:b,iconName:O,extra:D,watchable:!0})),M=A.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(M,t.firstChild):t.appendChild(M),M.outerHTML=G.map(function(tt){return Ft(tt)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Po(t){return Promise.all([Hn(t,"::before"),Hn(t,"::after")])}function Mo(t){return t.parentNode!==document.head&&!~Ai.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Re)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Xn(t){if(X)return new Promise(function(e,n){var a=xt(t.querySelectorAll("*")).filter(Mo).map(Po),r=fn.begin("searchPseudoElements");Ra(),Promise.all(a).then(function(){r(),Be(),e()}).catch(function(){r(),Be(),n()})})}var Lo={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Xn,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?A:a;v.searchPseudoElements&&Xn(r)}}},Gn=!1,Do={mixout:function(){return{dom:{unwatch:function(){Ra(),Gn=!0}}}},hooks:function(){return{bootstrap:function(){Bn(Le("mutationObserverCallbacks",{}))},noAuto:function(){yo()},watch:function(n){var a=n.observeMutationsRoot;Gn?Be():Bn(Le("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Kn=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},Fo={mixout:function(){return{parse:{transform:function(n){return Kn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Kn(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(u)},p={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:d,path:p};return{tag:"g",attributes:m({},b.outer),children:[{tag:"g",attributes:m({},b.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:m(m({},a.icon.attributes),b.path)}]}]}}}},Se={x:0,y:0,width:"100%",height:"100%"};function Vn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function zo(t){return t.tag==="g"?t.children:[t]}var $o={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?me(r.split(" ").map(function(o){return o.trim()})):ln();return i.prefix||(i.prefix=Q()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,u=i.icon,d=o.width,p=o.icon,b=Fi({transform:l,containerWidth:d,iconWidth:f}),E={tag:"rect",attributes:m(m({},Se),{},{fill:"white"})},N=u.children?{children:u.children.map(Vn)}:{},x={tag:"g",attributes:m({},b.inner),children:[Vn(m({tag:u.tag,attributes:m(m({},u.attributes),b.path)},N))]},I={tag:"g",attributes:m({},b.outer),children:[x]},w="mask-".concat(s||Pt()),O="clip-".concat(s||Pt()),_={tag:"mask",attributes:m(m({},Se),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,I]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:zo(p)},_]};return a.push(C,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(w,")")},Se)}),{children:a,attributes:r}}}},Bo={provides:function(e){var n=!1;J.matchMedia&&(n=J.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=m(m({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:m(m({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Yo={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Wo=[Bi,So,No,To,Io,Lo,Do,Fo,$o,Bo,Yo];eo(Wo,{mixoutsTo:L});L.noAuto;L.config;L.library;L.dom;var Ye=L.parse;L.findIconDefinition;L.toHtml;var Uo=L.icon;L.layer;L.text;L.counter;function qn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?qn(Object(n),!0).forEach(function(a){ht(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):qn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function fe(t){"@babel/helpers - typeof";return fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fe(t)}function ht(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ho(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Xo(t,e){if(t==null)return{};var n=Ho(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function We(t){return Go(t)||Ko(t)||Vo(t)||qo()}function Go(t){if(Array.isArray(t))return Ue(t)}function Ko(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Vo(t,e){if(t){if(typeof t=="string")return Ue(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ue(t,e)}}function Ue(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function qo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jo(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,l=t.spin,f=t.spinPulse,u=t.spinReverse,d=t.pulse,p=t.fixedWidth,b=t.inverse,E=t.border,N=t.listItem,x=t.flip,I=t.size,w=t.rotation,O=t.pull,_=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":f,"fa-pulse":d,"fa-fw":p,"fa-inverse":b,"fa-border":E,"fa-li":N,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},ht(e,"fa-".concat(I),typeof I<"u"&&I!==null),ht(e,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),ht(e,"fa-pull-".concat(O),typeof O<"u"&&O!==null),ht(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(_).map(function(C){return _[C]?C:null}).filter(function(C){return C})}function Qo(t){return t=t-0,t===t}function Ma(t){return Qo(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Zo=["style"];function ts(t){return t.charAt(0).toUpperCase()+t.slice(1)}function es(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Ma(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[ts(r)]=i:e[r]=i,e},{})}function La(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(l){return La(t,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,f){var u=e.attributes[f];switch(f){case"class":l.attrs.className=u,delete e.attributes.class;break;case"style":l.attrs.style=es(u);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?l.attrs[f.toLowerCase()]=u:l.attrs[Ma(f)]=u}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=Xo(n,Zo);return r.attrs.style=q(q({},r.attrs.style),o),t.apply(void 0,[e.tag,q(q({},r.attrs),s)].concat(We(a)))}var Da=!1;try{Da=!0}catch{}function ns(){if(!Da&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Jn(t){if(t&&fe(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ye.icon)return Ye.icon(t);if(t===null)return null;if(t&&fe(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Ne(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ht({},t,e):{}}var zt=Qn.forwardRef(function(t,e){var n=t.icon,a=t.mask,r=t.symbol,i=t.className,o=t.title,s=t.titleId,l=t.maskId,f=Jn(n),u=Ne("classes",[].concat(We(Jo(t)),We(i.split(" ")))),d=Ne("transform",typeof t.transform=="string"?Ye.transform(t.transform):t.transform),p=Ne("mask",Jn(a)),b=Uo(f,q(q(q(q({},u),d),p),{},{symbol:r,title:o,titleId:s,maskId:l}));if(!b)return ns("Could not find icon",f),null;var E=b.abstract,N={ref:e};return Object.keys(t).forEach(function(x){zt.defaultProps.hasOwnProperty(x)||(N[x]=t[x])}),as(E[0],N)});zt.displayName="FontAwesomeIcon";zt.propTypes={beat:h.bool,border:h.bool,beatFade:h.bool,bounce:h.bool,className:h.string,fade:h.bool,flash:h.bool,mask:h.oneOfType([h.object,h.array,h.string]),maskId:h.string,fixedWidth:h.bool,inverse:h.bool,flip:h.oneOf([!0,!1,"horizontal","vertical","both"]),icon:h.oneOfType([h.object,h.array,h.string]),listItem:h.bool,pull:h.oneOf(["right","left"]),pulse:h.bool,rotation:h.oneOf([0,90,180,270]),shake:h.bool,size:h.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:h.bool,spinPulse:h.bool,spinReverse:h.bool,symbol:h.oneOfType([h.bool,h.string]),title:h.string,titleId:h.string,transform:h.oneOfType([h.string,h.object]),swapOpacity:h.bool};zt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var as=La.bind(null,Qn.createElement),rs={prefix:"fas",iconName:"circle-arrow-down",icon:[512,512,["arrow-circle-down"],"f0ab","M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM127 281c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 182.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 393c-9.4 9.4-24.6 9.4-33.9 0L127 281z"]},is=rs;const ps=()=>{const[t,e]=g.useState(!1),n=t?Ee.length:3,a=()=>{e(!t)};return c.jsxs(ar,{className:"excursions-container",children:[c.jsxs("div",{className:"excursions-header",children:[c.jsx("h1",{className:"excursions-title",children:"Мои Экскурсии"}),c.jsx("p",{className:"excursions-description",children:"Путешествие по Нидерландам — это возможность увидеть многообразие этой страны: от захватывающих городов до живописных деревень, от богатой истории до современной культуры. Мы пройдемся по улочкам старинных городов, вдохновимся искусством в музеях и насладимся красотой природы в удивительных местах. Неважно, увлекаетесь ли историей, архитектурой, природой или гастрономией, в этом путешествии каждый найдет что-то особенное для себя."})]}),c.jsx("div",{className:"row justify-content-center g-4",children:Ee.slice(0,n).map((r,i)=>c.jsx("div",{className:"col-lg-4 col-md-6 col-sm-12",children:c.jsx(Rr,{title:r.title,text:r.text,images:r.images,additionalInfo:r.additionalInfo})},i))}),!t&&Ee.length>3&&c.jsx("div",{className:"text-center mt-5 mb-4",children:c.jsx("button",{className:"btn arrow-btn",onClick:a,children:c.jsx(zt,{icon:is,size:"3x",style:{color:"#4c3254"}})})})]})};export{ps as default};
