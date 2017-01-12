var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../src/app/MaterialModule/material.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from './material.component.css.shim.ngstyle';
import * as import9 from '@angular/material/sidenav/sidenav';
import * as import10 from '../../../node_modules/@angular/material/sidenav/sidenav.ngfactory';
import * as import11 from '@angular/core/src/linker/query_list';
import * as import12 from '@angular/material/button/button';
import * as import13 from '../../../node_modules/@angular/material/button/button.ngfactory';
import * as import14 from '@angular/material/core/rtl/dir';
import * as import15 from '@angular/core/src/linker/element_ref';
var Wrapper_MaterialComponent = (function () {
    function Wrapper_MaterialComponent() {
        this._changed = false;
        this.context = new import0.MaterialComponent();
    }
    Wrapper_MaterialComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MaterialComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_MaterialComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_MaterialComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_MaterialComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_MaterialComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MaterialComponent;
}());
export { Wrapper_MaterialComponent };
var renderType_MaterialComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_MaterialComponent_Host0 = (function (_super) {
    __extends(View_MaterialComponent_Host0, _super);
    function View_MaterialComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_MaterialComponent_Host0, renderType_MaterialComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_MaterialComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'material', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_MaterialComponent0(this.viewUtils, this, 0, this._el_0);
        this._MaterialComponent_0_3 = new Wrapper_MaterialComponent();
        this.compView_0.create(this._MaterialComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._MaterialComponent_0_3.context);
    };
    View_MaterialComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.MaterialComponent) && (0 === requestNodeIndex))) {
            return this._MaterialComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_MaterialComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._MaterialComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_MaterialComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_MaterialComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_MaterialComponent_Host0;
}(import1.AppView));
export var MaterialComponentNgFactory = new import7.ComponentFactory('material', View_MaterialComponent_Host0, import0.MaterialComponent);
var styles_MaterialComponent = [import8.styles];
var renderType_MaterialComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_MaterialComponent, {});
var View_MaterialComponent0 = (function (_super) {
    __extends(View_MaterialComponent0, _super);
    function View_MaterialComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_MaterialComponent0, renderType_MaterialComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_MaterialComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'md-sidenav-container', new import3.InlineArray2(2, 'class', 'example-container md-sidenav-container'), null);
        this.compView_0 = new import10.View_MdSidenavContainer0(this.viewUtils, this, 0, this._el_0);
        this._MdSidenavContainer_0_3 = new import10.Wrapper_MdSidenavContainer(this.parentView.injectorGet(import14.Dir, this.parentIndex, null), new import15.ElementRef(this._el_0), this.renderer);
        this._query_MdSidenav_0_0 = new import11.QueryList();
        this._text_1 = this.renderer.createText(null, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, null, 'md-sidenav', new import3.InlineArray8(6, 'class', 'example-sidenav', 'mode', 'side', 'tabIndex', '-1'), null);
        this.compView_2 = new import10.View_MdSidenav0(this.viewUtils, this, 2, this._el_2);
        this._MdSidenav_2_3 = new import10.Wrapper_MdSidenav(new import15.ElementRef(this._el_2), this.renderer);
        this._text_3 = this.renderer.createText(null, '\n        Jolly good!\n    ', null);
        this.compView_2.create(this._MdSidenav_2_3.context);
        this._text_4 = this.renderer.createText(null, '\n    ', null);
        this._el_5 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'example-sidenav-content'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n        ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'button', new import3.InlineArray2(2, 'md-button', ''), null);
        this.compView_7 = new import13.View_MdButton0(this.viewUtils, this, 7, this._el_7);
        this._MdButton_7_3 = new import13.Wrapper_MdButton(new import15.ElementRef(this._el_7), this.renderer);
        this._text_8 = this.renderer.createText(null, '\n            Open sidenav\n        ', null);
        this.compView_7.create(this._MdButton_7_3.context);
        this._text_9 = this.renderer.createText(this._el_5, '\n    ', null);
        this._text_10 = this.renderer.createText(null, '\n\n', null);
        this.compView_0.create(this._MdSidenavContainer_0_3.context);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray4(4, 'transitionend', null, 'keydown', null), this.eventHandler(this.handleEvent_2));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_7, new import3.InlineArray8(8, 'click', null, 'mousedown', null, 'focus', null, 'blur', null), this.eventHandler(this.handleEvent_7));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._text_10
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_MaterialComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import9.MdSidenav) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._MdSidenav_2_3.context;
        }
        if (((token === import12.MdButton) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._MdButton_7_3.context;
        }
        if (((token === import9.MdSidenavContainer) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._MdSidenavContainer_0_3.context;
        }
        return notFoundResult;
    };
    View_MaterialComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._MdSidenavContainer_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_2_0_0 = 'side';
        this._MdSidenav_2_3.check_mode(currVal_2_0_0, throwOnChange, false);
        if (this._MdSidenav_2_3.ngDoCheck(this, this._el_2, throwOnChange)) {
            this.compView_2.markAsCheckOnce();
        }
        if (this._MdButton_7_3.ngDoCheck(this, this._el_7, throwOnChange)) {
            this.compView_7.markAsCheckOnce();
        }
        if (!throwOnChange) {
            if (this._query_MdSidenav_0_0.dirty) {
                this._query_MdSidenav_0_0.reset([this._MdSidenav_2_3.context]);
                this._MdSidenavContainer_0_3.context._sidenavs = this._query_MdSidenav_0_0;
                this._query_MdSidenav_0_0.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._MdSidenav_2_3.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._MdSidenavContainer_0_3.context.ngAfterContentInit();
            }
        }
        this._MdSidenav_2_3.checkHost(this, this.compView_2, this._el_2, throwOnChange);
        this._MdButton_7_3.checkHost(this, this.compView_7, this._el_7, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
        this.compView_2.internalDetectChanges(throwOnChange);
        this.compView_7.internalDetectChanges(throwOnChange);
    };
    View_MaterialComponent0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this.compView_2.destroy();
        this.compView_7.destroy();
        this._MdSidenav_2_3.ngOnDestroy();
        this._MdSidenavContainer_0_3.ngOnDestroy();
    };
    View_MaterialComponent0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 0) && (ngContentIndex == 0))) {
            cb(this._el_2, ctx);
        }
        if (((nodeIndex == 0) && (ngContentIndex == 1))) {
            cb(this._text_1, ctx);
            cb(this._text_4, ctx);
            cb(this._el_5, ctx);
            cb(this._text_10, ctx);
        }
        if (((nodeIndex == 2) && (ngContentIndex == 0))) {
            cb(this._text_3, ctx);
        }
        if (((nodeIndex == 7) && (ngContentIndex == 0))) {
            cb(this._text_8, ctx);
        }
    };
    View_MaterialComponent0.prototype.handleEvent_2 = function (eventName, $event) {
        this.compView_2.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._MdSidenav_2_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_MaterialComponent0.prototype.handleEvent_7 = function (eventName, $event) {
        this.compView_7.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._MdButton_7_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'click')) {
            var pd_sub_0 = (this._MdSidenav_2_3.context.open() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_MaterialComponent0;
}(import1.AppView));
export { View_MaterialComponent0 };
