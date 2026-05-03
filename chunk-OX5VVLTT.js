import{a as Le,b as Pe,c as q,d as Ne,e as Be,f as J}from"./chunk-2N3VXZ64.js";import{A as Ct,B as St,C as Mt,a as Ue,b as g,c as Xe,d as $e,e as Je,f as Ze,g as et,h as w,j as tt,k as it,l as nt,m as K,n as at,p as rt,q as ot,r as lt,s as st,t as ct,u as dt,v as mt,w as pt,x as ht,y as vt,z as bt}from"./chunk-WL33ERNL.js";import{d as Ie,e as Ke}from"./chunk-T6QYDN7A.js";import{a as Ye}from"./chunk-RRTLAN62.js";import{a as Ge,b as Qe,d as je}from"./chunk-KLQ6YJ5E.js";import{a as Oe,c as we,d as ke}from"./chunk-PXBVBDXN.js";import{b as ut,c as ft,i as _t,n as gt,p as Z,q as ee,r as yt,t as xt,z as G}from"./chunk-PWRP4J3W.js";import{a as He,b as ze}from"./chunk-LOZWQ4X3.js";import{F as Ae,H as W,I as Fe,J as Re,K as Ve,L as $,X as We,Y as qe,r as De,t as Te}from"./chunk-QUNJO6RU.js";import{$b as A,Ab as _,Ac as Ee,Cc as b,Dc as X,E as re,Eb as D,Jb as v,Lb as u,Mb as _e,N as Q,Nb as Y,O as j,Ob as ge,P as E,Pb as ye,Qb as x,Ra as s,Rb as S,Vb as B,W as oe,Wb as ve,Xb as U,Y as V,Yb as be,Za as me,Zb as m,_ as d,_b as T,da as k,ea as I,eb as P,fa as le,fb as pe,ha as se,hc as Ce,i as M,jc as xe,kb as he,la as L,qa as O,r as H,rb as N,sb as p,tb as h,tc as Se,ua as ce,v as ae,vb as ue,vc as Me,wb as fe,x as R,xa as de,xb as y,yb as l,z,zb as o}from"./chunk-VXXZVJNP.js";var F=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new M;constructor(n=!1,e,t=!0,i){this._multiple=n,this._emitChanges=t,this.compareWith=i,e&&e.length&&(n?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n.map(r=>this._getConcreteValue(r)));n.forEach(r=>this._markSelected(r)),e.filter(r=>!t.has(this._getConcreteValue(r,t))).forEach(r=>this._unmarkSelected(r));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n}else return n}};var Pt=["trigger"],Nt=["panel"],Bt=[[["mat-select-trigger"]],"*"],Wt=["mat-select-trigger","*"];function qt(a,n){if(a&1&&(l(0,"span",4),m(1),o()),a&2){let e=u();s(),T(e.placeholder)}}function Kt(a,n){a&1&&Y(0)}function Gt(a,n){if(a&1&&(l(0,"span",11),m(1),o()),a&2){let e=u(2);s(),T(e.triggerValue)}}function Ht(a,n){if(a&1&&(l(0,"span",5),p(1,Kt,1,0)(2,Gt,2,1,"span",11),o()),a&2){let e=u();s(),h(e.customTrigger?1:2)}}function zt(a,n){if(a&1){let e=D();l(0,"div",12,1),v("keydown",function(i){k(e);let r=u();return I(r._handleKeydown(i))}),Y(2,1),o()}if(a&2){let e=u();be(e.panelClass),U("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),N("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var Qt=new V("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let a=d(se);return()=>_t(a)}}),jt=new V("MAT_SELECT_CONFIG"),Yt=new V("MatSelectTrigger"),te=class{source;value;constructor(n,e){this.source=n,this.value=e}},It=(()=>{class a{_viewportRuler=d(ut);_changeDetectorRef=d(Ee);_elementRef=d(de);_dir=d(We,{optional:!0});_idGenerator=d(Re);_renderer=d(me);_parentFormField=d(dt,{optional:!0});ngControl=d(Xe,{self:!0,optional:!0});_liveAnnouncer=d(Ae);_defaultOptions=d(jt,{optional:!0});_animationsDisabled=De();_popoverLocation;_initialized=new M;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,r=Ne(e,this.options,this.optionGroups),c=t._getHostElement();e===0&&r===1?i.scrollTop=0:i.scrollTop=Be(c.offsetTop,c.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new te(this,e)}_scrollStrategyFactory=d(Qt);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new M;_errorStateTracker;stateChanges=new M;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=O(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(g.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=ae(()=>{let e=this.options;return e?e.changes.pipe(Q(e),j(()=>R(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(j(()=>this.optionSelectionChanges))});openedChange=new L;_openedStream=this.openedChange.pipe(z(e=>e),H(()=>{}));_closedStream=this.openedChange.pipe(z(e=>!e),H(()=>{}));selectionChange=new L;valueChange=new L;constructor(){let e=d(Ie),t=d(et,{optional:!0}),i=d(K,{optional:!0}),r=d(new Me("tabindex"),{optional:!0}),c=d(gt,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Ke(e,this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=r==null?0:parseInt(r)||0,this._popoverLocation=c?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new F(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(E(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(E(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Q(null),E(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(re(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&$(this._trackedModal,"aria-owns",t),Ve(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;$(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",r=>{r.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,r=t===13||t===32,c=this._keyManager;if(!c.isTyping()&&r&&!W(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let C=this.selected;c.onKeydown(e);let f=this.selected;f&&C!==f&&this._liveAnnouncer.announce(f.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,r=i===40||i===38,c=t.isTyping();if(r&&e.altKey)e.preventDefault(),this.close();else if(!c&&(i===13||i===32)&&t.activeItem&&!W(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!c&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let C=this.options.some(f=>!f.disabled&&!f.selected);this.options.forEach(f=>{f.disabled||(C?f.select():f.deselect())})}else{let C=t.activeItemIndex;t.onKeydown(e),this._multiple&&r&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==C&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!W(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Z?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Fe(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=R(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(E(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),R(...this.options.map(t=>t._stateChanges)).pipe(E(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Te(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=P({type:a,selectors:[["mat-select"]],contentQueries:function(t,i,r){if(t&1&&ge(r,Yt,5)(r,q,5)(r,Pe,5),t&2){let c;x(c=S())&&(i.customTrigger=c.first),x(c=S())&&(i.options=c),x(c=S())&&(i.optionGroups=c)}},viewQuery:function(t,i){if(t&1&&ye(Pt,5)(Nt,5)(ee,5),t&2){let r;x(r=S())&&(i.trigger=r.first),x(r=S())&&(i.panel=r.first),x(r=S())&&(i._overlayDir=r.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,i){t&1&&v("keydown",function(c){return i._handleKeydown(c)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(N("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),U("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple)("mat-select-open",i.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",b],disableRipple:[2,"disableRipple","disableRipple",b],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:X(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",b],placeholder:"placeholder",required:[2,"required","required",b],multiple:[2,"multiple","multiple",b],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",b],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",X],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",b]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Ce([{provide:ct,useExisting:a},{provide:Le,useExisting:a}]),ce],ngContentSelectors:Wt,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,i){if(t&1&&(_e(Bt),l(0,"div",2,0),v("click",function(){return i.open()}),l(3,"div",3),p(4,qt,2,1,"span",4)(5,Ht,3,1,"span",5),o(),l(6,"div",6)(7,"div",7),le(),l(8,"svg",8),_(9,"path",9),o()()()(),he(10,zt,3,16,"ng-template",10),v("detach",function(){return i.close()})("backdropClick",function(){return i.close()})("overlayKeydown",function(c){return i._handleOverlayKeydown(c)})),t&2){let r=B(1);s(3),N("id",i._valueId),s(),h(i.empty?4:5),s(6),y("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||r)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",i._popoverLocation)}},dependencies:[Z,ee],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return a})();var Dt=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=pe({type:a});static \u0275inj=oe({imports:[yt,J,qe,ft,pt,J]})}return a})();var Xt=a=>["/envelopes",a],$t=(a,n)=>n.id;function Jt(a,n){if(a&1){let e=D();l(0,"button",6),v("click",function(){k(e);let i=u();return I(i.confirmDelete())}),l(1,"mat-icon"),m(2,"delete"),o()()}}function Zt(a,n){a&1&&(l(0,"mat-error"),m(1,"Le montant est obligatoire"),o())}function ei(a,n){a&1&&(l(0,"mat-error"),m(1,"Le montant doit \xEAtre positif"),o())}function ti(a,n){a&1&&(l(0,"mat-error"),m(1,"La date est obligatoire"),o())}function ii(a,n){a&1&&(l(0,"mat-error"),m(1,"L'heure est obligatoire"),o())}function ni(a,n){if(a&1&&(l(0,"mat-option",18),_(1,"span",19),m(2),o()),a&2){let e=n.$implicit,t=u(3);y("value",e.id),s(),ve("background",t.getCategoryColor(e)),s(),A(" ",e.name," ")}}function ai(a,n){a&1&&(l(0,"mat-error"),m(1,"La cat\xE9gorie est obligatoire"),o())}function ri(a,n){if(a&1&&(l(0,"mat-form-field",8)(1,"mat-label"),m(2,"Cat\xE9gorie"),o(),l(3,"mat-select",17),ue(4,ni,3,4,"mat-option",18,$t),o(),p(6,ai,2,0,"mat-error"),o()),a&2){let e=u(2);s(4),fe(e.categories()),s(2),h(e.form.controls.categoryId.hasError("required")&&e.form.controls.categoryId.touched?6:-1)}}function oi(a,n){a&1&&(l(0,"mat-error"),m(1,"Le nom est obligatoire"),o())}function li(a,n){if(a&1&&(l(0,"p",14),m(1),o()),a&2){let e=u(2);s(),T(e.dateError())}}function si(a,n){if(a&1){let e=D();l(0,"div",5)(1,"form",7),v("ngSubmit",function(){k(e);let i=u();return I(i.save())}),l(2,"mat-form-field",8)(3,"mat-label"),m(4,"Montant"),o(),_(5,"input",9),p(6,Zt,2,0,"mat-error"),p(7,ei,2,0,"mat-error"),o(),l(8,"mat-form-field",8)(9,"mat-label"),m(10,"Date"),o(),_(11,"input",10)(12,"mat-datepicker-toggle",11)(13,"mat-datepicker",null,0),p(15,ti,2,0,"mat-error"),o(),l(16,"mat-form-field",8)(17,"mat-label"),m(18,"Heure"),o(),_(19,"input",12),p(20,ii,2,0,"mat-error"),o(),p(21,ri,7,1,"mat-form-field",8),l(22,"mat-form-field",8)(23,"mat-label"),m(24),o(),_(25,"input",13),p(26,oi,2,0,"mat-error"),o(),p(27,li,2,1,"p",14),l(28,"div",15)(29,"button",16),m(30),o()()()()}if(a&2){let e=B(14),t=u();s(),y("formGroup",t.form),s(5),h(t.form.controls.amount.hasError("required")&&t.form.controls.amount.touched?6:-1),s(),h(t.form.controls.amount.hasError("min")&&t.form.controls.amount.touched?7:-1),s(4),y("matDatepicker",e),s(),y("for",e),s(3),h(t.form.controls.date.hasError("required")&&t.form.controls.date.touched?15:-1),s(5),h(t.form.controls.time.hasError("required")&&t.form.controls.time.touched?20:-1),s(),h(t.hasCategories()?21:-1),s(3),A("Nom",t.hasCategories()?" (optionnel)":""),s(2),h(t.form.controls.name.hasError("required")&&t.form.controls.name.touched?26:-1),s(),h(t.dateError()?27:-1),s(3),A(" ",t.isEditMode?"Enregistrer":"Ajouter"," ")}}var Tt=class a{route=d(Oe);router=d(we);envelopeService=d(je);expenseService=d(Ye);dialog=d(xt);snackBar=d(St);categoryColors=G;envelopeId;expenseId=null;isEditMode=!1;envelope=O(null);categories=O([]);hasCategories=Se(()=>this.categories().length>0);dateError=O(null);form=new Ze({amount:new w(null,[g.required,g.min(.01)]),date:new w(null,[g.required]),time:new w("",{nonNullable:!0,validators:[g.required]}),categoryId:new w(null),name:new w("",{nonNullable:!0})});async ngOnInit(){this.envelopeId=Number(this.route.snapshot.paramMap.get("id"));let n=this.route.snapshot.paramMap.get("expenseId");n&&(this.expenseId=Number(n),this.isEditMode=!0);let[e,t]=await Promise.all([this.envelopeService.getById(this.envelopeId),this.envelopeService.getCategories(this.envelopeId)]);if(!e){this.router.navigate(["/"]);return}if(this.envelope.set(e),this.categories.set(t),t.length>0?this.form.controls.categoryId.setValidators([g.required]):this.form.controls.name.setValidators([g.required]),this.form.controls.categoryId.updateValueAndValidity(),this.form.controls.name.updateValueAndValidity(),this.isEditMode&&this.expenseId){let i=await this.expenseService.getById(this.expenseId);if(i){let r=new Date(i.date);this.form.patchValue({amount:i.amount,date:r,time:`${String(r.getHours()).padStart(2,"0")}:${String(r.getMinutes()).padStart(2,"0")}`,categoryId:i.categoryId??null,name:i.name??""})}}else{let i=new Date;this.form.patchValue({date:i,time:`${String(i.getHours()).padStart(2,"0")}:${String(i.getMinutes()).padStart(2,"0")}`})}}getCategoryColor(n){return G[n.colorIndex%G.length]}combineDateTime(n,e){let[t,i]=e.split(":").map(Number),r=new Date(n);return r.setHours(t,i,0,0),r}async save(){if(this.form.markAllAsTouched(),this.form.invalid)return;let{amount:n,date:e,time:t,categoryId:i,name:r}=this.form.getRawValue(),c=this.combineDateTime(e,t),C=this.envelope();if(c>new Date){this.dateError.set("La date ne peut pas \xEAtre dans le futur.");return}let ie=new Date(C.endDate);if(ie.setHours(23,59,59,999),c>ie){this.dateError.set("La date ne peut pas d\xE9passer la date de fin de l'enveloppe.");return}this.dateError.set(null);let ne={envelopeId:this.envelopeId,amount:n,date:c,categoryId:i??void 0,name:r||void 0};this.isEditMode&&this.expenseId?await this.expenseService.update(this.expenseId,ne):await this.expenseService.create(ne),this.router.navigate(["/envelopes",this.envelopeId])}async confirmDelete(){await this.dialog.open(Mt,{data:{title:"Supprimer la d\xE9pense",message:"Supprimer cette d\xE9pense ?"}}).afterClosed().toPromise()&&this.expenseId&&(await this.expenseService.delete(this.expenseId),this.router.navigate(["/envelopes",this.envelopeId]))}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=P({type:a,selectors:[["app-expense-form"]],decls:9,vars:6,consts:[["picker",""],["color","primary"],["mat-icon-button","",3,"routerLink"],[1,"toolbar-spacer"],["mat-icon-button","","type","button","aria-label","Supprimer"],[1,"form-container"],["mat-icon-button","","type","button","aria-label","Supprimer",3,"click"],[3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","type","number","step","0.01","min","0.01","formControlName","amount"],["matInput","","formControlName","date",3,"matDatepicker"],["matIconSuffix","",3,"for"],["matInput","","type","time","formControlName","time"],["matInput","","formControlName","name"],[1,"date-error"],[1,"actions"],["mat-raised-button","","color","primary","type","submit"],["formControlName","categoryId"],[3,"value"],[1,"cat-dot"]],template:function(e,t){e&1&&(l(0,"mat-toolbar",1)(1,"button",2)(2,"mat-icon"),m(3,"arrow_back"),o()(),l(4,"span"),m(5),o(),_(6,"span",3),p(7,Jt,3,0,"button",4),o(),p(8,si,31,12,"div",5)),e&2&&(s(),y("routerLink",xe(4,Xt,t.envelopeId)),s(4),A("",t.isEditMode?"Modifier":"Nouvelle"," d\xE9pense"),s(2),h(t.isEditMode?7:-1),s(),h(t.envelope()?8:-1))},dependencies:[ke,rt,tt,Ue,it,$e,Je,at,K,nt,Ge,ze,He,Qe,mt,ot,lt,st,ht,vt,bt,Ct,Dt,It,q],styles:[".form-container[_ngcontent-%COMP%]{padding:16px;max-width:600px;margin:0 auto}form[_ngcontent-%COMP%]{display:flex;flex-direction:column}mat-form-field[_ngcontent-%COMP%]{width:100%}.cat-dot[_ngcontent-%COMP%]{display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:6px;vertical-align:middle}.date-error[_ngcontent-%COMP%]{color:var(--mat-sys-error);font-size:12px;margin:-8px 0 8px}.toolbar-spacer[_ngcontent-%COMP%]{flex:1}.actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:8px}"],changeDetection:0})};export{Tt as ExpenseForm};
