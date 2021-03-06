var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../src/app/childModule2/child.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/view_container';
import * as import9 from '../../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import10 from '@angular/router/src/router_outlet_map';
import * as import11 from '@angular/core/src/linker/component_factory_resolver';
import * as import12 from '@angular/router/src/directives/router_outlet';
var Wrapper_ChildComponent2 = (function () {
    function Wrapper_ChildComponent2() {
        this._changed = false;
        this.context = new import0.ChildComponent2();
    }
    Wrapper_ChildComponent2.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ChildComponent2.prototype.ngOnDestroy = function () {
    };
    Wrapper_ChildComponent2.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_ChildComponent2.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ChildComponent2.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ChildComponent2.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_ChildComponent2;
}());
export { Wrapper_ChildComponent2 };
var renderType_ChildComponent2_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_ChildComponent2_Host0 = (function (_super) {
    __extends(View_ChildComponent2_Host0, _super);
    function View_ChildComponent2_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_ChildComponent2_Host0, renderType_ChildComponent2_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_ChildComponent2_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'child2', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_ChildComponent20(this.viewUtils, this, 0, this._el_0);
        this._ChildComponent2_0_3 = new Wrapper_ChildComponent2();
        this.compView_0.create(this._ChildComponent2_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._ChildComponent2_0_3.context);
    };
    View_ChildComponent2_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ChildComponent2) && (0 === requestNodeIndex))) {
            return this._ChildComponent2_0_3.context;
        }
        return notFoundResult;
    };
    View_ChildComponent2_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ChildComponent2_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_ChildComponent2_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_ChildComponent2_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ChildComponent2_Host0;
}(import1.AppView));
export var ChildComponent2NgFactory = new import7.ComponentFactory('child2', View_ChildComponent2_Host0, import0.ChildComponent2);
var styles_ChildComponent2 = [];
var renderType_ChildComponent2 = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_ChildComponent2, {});
var View_ChildComponent20 = (function (_super) {
    __extends(View_ChildComponent20, _super);
    function View_ChildComponent20(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_ChildComponent20, renderType_ChildComponent2, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_ChildComponent20.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'h2', import3.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, 'childComponent2', null);
        this._text_3 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._el_4 = import3.createRenderElement(this.renderer, parentRenderNode, 'router-outlet', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_4 = new import8.ViewContainer(4, null, this, this._el_4);
        this._RouterOutlet_4_5 = new import9.Wrapper_RouterOutlet(this.parentView.injectorGet(import10.RouterOutletMap, this.parentIndex), this._vc_4.vcRef, this.parentView.injectorGet(import11.ComponentFactoryResolver, this.parentIndex), null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._text_3,
            this._el_4,
            this._text_5
        ]), null);
        return null;
    };
    View_ChildComponent20.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.RouterOutlet) && (4 === requestNodeIndex))) {
            return this._RouterOutlet_4_5.context;
        }
        return notFoundResult;
    };
    View_ChildComponent20.prototype.detectChangesInternal = function (throwOnChange) {
        this._RouterOutlet_4_5.ngDoCheck(this, this._el_4, throwOnChange);
        this._vc_4.detectChangesInNestedViews(throwOnChange);
    };
    View_ChildComponent20.prototype.destroyInternal = function () {
        this._vc_4.destroyNestedViews();
        this._RouterOutlet_4_5.ngOnDestroy();
    };
    return View_ChildComponent20;
}(import1.AppView));
export { View_ChildComponent20 };
