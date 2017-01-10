var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../src/app/app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/http/src/http_module';
import * as import6 from '@angular/common/src/localization';
import * as import7 from '@angular/core/src/application_init';
import * as import8 from '@angular/core/src/testability/testability';
import * as import9 from '@angular/core/src/application_ref';
import * as import10 from '@angular/core/src/linker/compiler';
import * as import11 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import12 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import13 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import14 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import15 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import16 from '@angular/core/src/animation/animation_queue';
import * as import17 from '@angular/core/src/linker/view_utils';
import * as import18 from '@angular/platform-browser/src/browser/title';
import * as import19 from '@angular/http/src/backends/browser_xhr';
import * as import20 from '@angular/http/src/base_response_options';
import * as import21 from '@angular/http/src/backends/xhr_backend';
import * as import22 from '@angular/http/src/base_request_options';
import * as import24 from './app.component.ngfactory';
import * as import25 from '@angular/core/src/i18n/tokens';
import * as import26 from '@angular/core/src/application_tokens';
import * as import27 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import28 from '@angular/platform-browser/src/dom/events/key_events';
import * as import29 from '@angular/core/src/zone/ng_zone';
import * as import30 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import31 from '@angular/core/src/console';
import * as import32 from '@angular/core/src/error_handler';
import * as import33 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import34 from '@angular/platform-browser/src/dom/animation_driver';
import * as import35 from '@angular/core/src/render/api';
import * as import36 from '@angular/core/src/security';
import * as import37 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import38 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import39 from '@angular/http/src/interfaces';
import * as import40 from '@angular/http/src/http';
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        return _super.call(this, parent, [import24.AppComponentNgFactory], [import24.AppComponentNgFactory]) || this;
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_5", {
        get: function () {
            if ((this.__LOCALE_ID_5 == null)) {
                (this.__LOCALE_ID_5 = import3._localeFactory(this.parent.get(import25.LOCALE_ID, null)));
            }
            return this.__LOCALE_ID_5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_6", {
        get: function () {
            if ((this.__NgLocalization_6 == null)) {
                (this.__NgLocalization_6 = new import6.NgLocaleLocalization(this._LOCALE_ID_5));
            }
            return this.__NgLocalization_6;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_11", {
        get: function () {
            if ((this.__ApplicationRef_11 == null)) {
                (this.__ApplicationRef_11 = this._ApplicationRef__10);
            }
            return this.__ApplicationRef_11;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_12", {
        get: function () {
            if ((this.__Compiler_12 == null)) {
                (this.__Compiler_12 = new import10.Compiler());
            }
            return this.__Compiler_12;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_13", {
        get: function () {
            if ((this.__APP_ID_13 == null)) {
                (this.__APP_ID_13 = import26._appIdRandomProviderFactory());
            }
            return this.__APP_ID_13;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_14", {
        get: function () {
            if ((this.__DOCUMENT_14 == null)) {
                (this.__DOCUMENT_14 = import4._document());
            }
            return this.__DOCUMENT_14;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_15", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_15 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_15 = new import11.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_15;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_16", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_16 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_16 = [
                    new import27.DomEventsPlugin(),
                    new import28.KeyEventsPlugin(),
                    new import11.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_15)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_17", {
        get: function () {
            if ((this.__EventManager_17 == null)) {
                (this.__EventManager_17 = new import12.EventManager(this._EVENT_MANAGER_PLUGINS_16, this.parent.get(import29.NgZone)));
            }
            return this.__EventManager_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_18", {
        get: function () {
            if ((this.__DomSharedStylesHost_18 == null)) {
                (this.__DomSharedStylesHost_18 = new import13.DomSharedStylesHost(this._DOCUMENT_14));
            }
            return this.__DomSharedStylesHost_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_19", {
        get: function () {
            if ((this.__AnimationDriver_19 == null)) {
                (this.__AnimationDriver_19 = import4._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_20", {
        get: function () {
            if ((this.__DomRootRenderer_20 == null)) {
                (this.__DomRootRenderer_20 = new import14.DomRootRenderer_(this._DOCUMENT_14, this._EventManager_17, this._DomSharedStylesHost_18, this._AnimationDriver_19, this._APP_ID_13));
            }
            return this.__DomRootRenderer_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_21", {
        get: function () {
            if ((this.__RootRenderer_21 == null)) {
                (this.__RootRenderer_21 = import30._createConditionalRootRenderer(this._DomRootRenderer_20, this.parent.get(import30.NgProbeToken, null), this.parent.get(import9.NgProbeToken, null)));
            }
            return this.__RootRenderer_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_22", {
        get: function () {
            if ((this.__DomSanitizer_22 == null)) {
                (this.__DomSanitizer_22 = new import15.DomSanitizerImpl());
            }
            return this.__DomSanitizer_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_23", {
        get: function () {
            if ((this.__Sanitizer_23 == null)) {
                (this.__Sanitizer_23 = this._DomSanitizer_22);
            }
            return this.__Sanitizer_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationQueue_24", {
        get: function () {
            if ((this.__AnimationQueue_24 == null)) {
                (this.__AnimationQueue_24 = new import16.AnimationQueue(this.parent.get(import29.NgZone)));
            }
            return this.__AnimationQueue_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_25", {
        get: function () {
            if ((this.__ViewUtils_25 == null)) {
                (this.__ViewUtils_25 = new import17.ViewUtils(this._RootRenderer_21, this._Sanitizer_23, this._AnimationQueue_24));
            }
            return this.__ViewUtils_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_26", {
        get: function () {
            if ((this.__IterableDiffers_26 == null)) {
                (this.__IterableDiffers_26 = import3._iterableDiffersFactory());
            }
            return this.__IterableDiffers_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_27", {
        get: function () {
            if ((this.__KeyValueDiffers_27 == null)) {
                (this.__KeyValueDiffers_27 = import3._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_28", {
        get: function () {
            if ((this.__SharedStylesHost_28 == null)) {
                (this.__SharedStylesHost_28 = this._DomSharedStylesHost_18);
            }
            return this.__SharedStylesHost_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_29", {
        get: function () {
            if ((this.__Title_29 == null)) {
                (this.__Title_29 = new import18.Title());
            }
            return this.__Title_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_30", {
        get: function () {
            if ((this.__BrowserXhr_30 == null)) {
                (this.__BrowserXhr_30 = new import19.BrowserXhr());
            }
            return this.__BrowserXhr_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_31", {
        get: function () {
            if ((this.__ResponseOptions_31 == null)) {
                (this.__ResponseOptions_31 = new import20.BaseResponseOptions());
            }
            return this.__ResponseOptions_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_32", {
        get: function () {
            if ((this.__XSRFStrategy_32 == null)) {
                (this.__XSRFStrategy_32 = import5._createDefaultCookieXSRFStrategy());
            }
            return this.__XSRFStrategy_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_33", {
        get: function () {
            if ((this.__XHRBackend_33 == null)) {
                (this.__XHRBackend_33 = new import21.XHRBackend(this._BrowserXhr_30, this._ResponseOptions_31, this._XSRFStrategy_32));
            }
            return this.__XHRBackend_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_34", {
        get: function () {
            if ((this.__RequestOptions_34 == null)) {
                (this.__RequestOptions_34 = new import22.BaseRequestOptions());
            }
            return this.__RequestOptions_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_35", {
        get: function () {
            if ((this.__Http_35 == null)) {
                (this.__Http_35 = import5.httpFactory(this._XHRBackend_33, this._RequestOptions_34));
            }
            return this.__Http_35;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._HttpModule_3 = new import5.HttpModule();
        this._AppModule_4 = new import1.AppModule();
        this._ErrorHandler_7 = import4.errorHandler();
        this._ApplicationInitStatus_8 = new import7.ApplicationInitStatus(this.parent.get(import7.APP_INITIALIZER, null));
        this._Testability_9 = new import8.Testability(this.parent.get(import29.NgZone));
        this._ApplicationRef__10 = new import9.ApplicationRef_(this.parent.get(import29.NgZone), this.parent.get(import31.Console), this, this._ErrorHandler_7, this, this._ApplicationInitStatus_8, this.parent.get(import8.TestabilityRegistry, null), this._Testability_9);
        return this._AppModule_4;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.HttpModule)) {
            return this._HttpModule_3;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_4;
        }
        if ((token === import25.LOCALE_ID)) {
            return this._LOCALE_ID_5;
        }
        if ((token === import6.NgLocalization)) {
            return this._NgLocalization_6;
        }
        if ((token === import32.ErrorHandler)) {
            return this._ErrorHandler_7;
        }
        if ((token === import7.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_8;
        }
        if ((token === import8.Testability)) {
            return this._Testability_9;
        }
        if ((token === import9.ApplicationRef_)) {
            return this._ApplicationRef__10;
        }
        if ((token === import9.ApplicationRef)) {
            return this._ApplicationRef_11;
        }
        if ((token === import10.Compiler)) {
            return this._Compiler_12;
        }
        if ((token === import26.APP_ID)) {
            return this._APP_ID_13;
        }
        if ((token === import33.DOCUMENT)) {
            return this._DOCUMENT_14;
        }
        if ((token === import11.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_15;
        }
        if ((token === import12.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_16;
        }
        if ((token === import12.EventManager)) {
            return this._EventManager_17;
        }
        if ((token === import13.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_18;
        }
        if ((token === import34.AnimationDriver)) {
            return this._AnimationDriver_19;
        }
        if ((token === import14.DomRootRenderer)) {
            return this._DomRootRenderer_20;
        }
        if ((token === import35.RootRenderer)) {
            return this._RootRenderer_21;
        }
        if ((token === import15.DomSanitizer)) {
            return this._DomSanitizer_22;
        }
        if ((token === import36.Sanitizer)) {
            return this._Sanitizer_23;
        }
        if ((token === import16.AnimationQueue)) {
            return this._AnimationQueue_24;
        }
        if ((token === import17.ViewUtils)) {
            return this._ViewUtils_25;
        }
        if ((token === import37.IterableDiffers)) {
            return this._IterableDiffers_26;
        }
        if ((token === import38.KeyValueDiffers)) {
            return this._KeyValueDiffers_27;
        }
        if ((token === import13.SharedStylesHost)) {
            return this._SharedStylesHost_28;
        }
        if ((token === import18.Title)) {
            return this._Title_29;
        }
        if ((token === import19.BrowserXhr)) {
            return this._BrowserXhr_30;
        }
        if ((token === import20.ResponseOptions)) {
            return this._ResponseOptions_31;
        }
        if ((token === import39.XSRFStrategy)) {
            return this._XSRFStrategy_32;
        }
        if ((token === import21.XHRBackend)) {
            return this._XHRBackend_33;
        }
        if ((token === import22.RequestOptions)) {
            return this._RequestOptions_34;
        }
        if ((token === import40.Http)) {
            return this._Http_35;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__10.ngOnDestroy();
    };
    return AppModuleInjector;
}(import0.NgModuleInjector));
export var AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
