var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../src/app/app.module';
import * as import2 from '@angular/forms/src/directives';
import * as import3 from '@angular/forms/src/form_providers';
import * as import4 from '@angular/common/src/common_module';
import * as import5 from '@angular/core/src/application_module';
import * as import6 from '@angular/platform-browser/src/browser';
import * as import7 from '@angular/http/src/http_module';
import * as import8 from '@angular/router/src/router_module';
import * as import9 from '../../../src/app/childModule/child.module';
import * as import10 from '../../../src/app/childModule2/child.module';
import * as import11 from '@angular/material/core/compatibility/default-mode';
import * as import12 from '@angular/material/core/ripple/ripple';
import * as import13 from '@angular/material/button/button';
import * as import14 from '@angular/material/card/card';
import * as import15 from '@angular/material/chips/chip-list';
import * as import16 from '@angular/material/checkbox/checkbox';
import * as import17 from '@angular/material/core/line/line';
import * as import18 from '@angular/material/grid-list/grid-list';
import * as import19 from '@angular/material/core/platform/index';
import * as import20 from '@angular/material/input/input';
import * as import21 from '@angular/material/list/list';
import * as import22 from '@angular/material/progress-bar/progress-bar';
import * as import23 from '@angular/material/progress-spinner/progress-spinner';
import * as import24 from '@angular/material/core/portal/portal-directives';
import * as import25 from '@angular/material/core/overlay/overlay-directives';
import * as import26 from '@angular/material/select/index';
import * as import27 from '@angular/material/core/a11y/index';
import * as import28 from '@angular/material/sidenav/sidenav';
import * as import29 from '@angular/material/core/observe-content/observe-content';
import * as import30 from '@angular/material/tabs/tab-group';
import * as import31 from '@angular/material/toolbar/toolbar';
import * as import32 from '@angular/material/core/projection/projection';
import * as import33 from '@angular/material/core/rtl/dir';
import * as import34 from '@angular/material/button-toggle/button-toggle';
import * as import35 from '@angular/material/dialog/index';
import * as import36 from '@angular/material/icon/icon';
import * as import37 from '@angular/material/menu/menu';
import * as import38 from '@angular/material/radio/radio';
import * as import39 from '@angular/material/slider/slider';
import * as import40 from '@angular/material/slide-toggle/slide-toggle';
import * as import41 from '@angular/material/snack-bar/snack-bar';
import * as import42 from '@angular/material/tooltip/tooltip';
import * as import43 from '@angular/material/module';
import * as import44 from '../../../src/app/MaterialModule/material.module';
import * as import45 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import46 from '@angular/common/src/localization';
import * as import47 from '@angular/core/src/application_init';
import * as import48 from '@angular/core/src/testability/testability';
import * as import49 from '@angular/core/src/application_ref';
import * as import50 from '@angular/core/src/linker/compiler';
import * as import51 from '@angular/material/core/gestures/gesture-config';
import * as import52 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import53 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import54 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import55 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import56 from '@angular/core/src/animation/animation_queue';
import * as import57 from '@angular/core/src/linker/view_utils';
import * as import58 from '@angular/platform-browser/src/browser/title';
import * as import59 from '@angular/http/src/backends/browser_xhr';
import * as import60 from '@angular/http/src/base_response_options';
import * as import61 from '@angular/http/src/backends/xhr_backend';
import * as import62 from '@angular/http/src/base_request_options';
import * as import63 from '@angular/material/core/overlay/position/viewport-ruler';
import * as import64 from '@angular/material/core/platform/platform';
import * as import65 from '@angular/material/core/overlay/position/overlay-position-builder';
import * as import66 from '@angular/material/core/overlay/overlay-container';
import * as import67 from '@angular/material/core/overlay/overlay';
import * as import68 from '@angular/material/core/overlay/scroll/scroll-dispatcher';
import * as import69 from '@angular/material/core/a11y/interactivity-checker';
import * as import70 from '@angular/material/core/a11y/live-announcer';
import * as import71 from '@angular/material/core/coordination/unique-selection-dispatcher';
import * as import72 from '@angular/material/dialog/dialog';
import * as import73 from '@angular/material/icon/icon-registry';
import * as import74 from '@angular/common/src/location/location';
import * as import75 from '@angular/router/src/url_tree';
import * as import76 from '@angular/router/src/router_outlet_map';
import * as import77 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import78 from '@angular/router/src/router_preloader';
import * as import80 from './childModule/child.component.ngfactory';
import * as import81 from './childModule2/child.component.ngfactory';
import * as import82 from '../../node_modules/@angular/material/dialog/dialog-container.ngfactory';
import * as import83 from '../../node_modules/@angular/material/snack-bar/snack-bar-container.ngfactory';
import * as import84 from '../../node_modules/@angular/material/snack-bar/simple-snack-bar.ngfactory';
import * as import85 from '../../node_modules/@angular/material/tooltip/tooltip.ngfactory';
import * as import86 from './MaterialModule/material.component.ngfactory';
import * as import87 from './error/pagenotfound.component.ngfactory';
import * as import88 from './app.component.ngfactory';
import * as import89 from '@angular/core/src/i18n/tokens';
import * as import90 from '@angular/core/src/application_tokens';
import * as import91 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import92 from '@angular/platform-browser/src/dom/events/key_events';
import * as import93 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import94 from '@angular/core/src/zone/ng_zone';
import * as import95 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import96 from '../../../src/app/childModule/child.component';
import * as import97 from '../../../src/app/childModule2/child.component';
import * as import98 from '../../../src/app/MaterialModule/material.component';
import * as import99 from '../../../src/app/error/pagenotfound.component';
import * as import100 from '@angular/common/src/location/platform_location';
import * as import101 from '@angular/common/src/location/location_strategy';
import * as import102 from '@angular/router/src/url_handling_strategy';
import * as import103 from '@angular/router/src/route_reuse_strategy';
import * as import104 from '@angular/router/src/router';
import * as import105 from '@angular/core/src/console';
import * as import106 from '@angular/core/src/error_handler';
import * as import107 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import108 from '@angular/platform-browser/src/dom/animation_driver';
import * as import109 from '@angular/core/src/render/api';
import * as import110 from '@angular/core/src/security';
import * as import111 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import112 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import113 from '@angular/http/src/interfaces';
import * as import114 from '@angular/http/src/http';
import * as import115 from '@angular/router/src/router_config_loader';
import * as import116 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import117 from '@angular/router/src/router_state';
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        return _super.call(this, parent, [
            import80.ChildComponentNgFactory,
            import81.ChildComponent2NgFactory,
            import82.MdDialogContainerNgFactory,
            import83.MdSnackBarContainerNgFactory,
            import84.SimpleSnackBarNgFactory,
            import85.TooltipComponentNgFactory,
            import86.MaterialComponentNgFactory,
            import87.PageNotFoundComponentNgFactory,
            import88.AppComponentNgFactory
        ], [import88.AppComponentNgFactory]) || this;
    }
    Object.defineProperty(AppModuleInjector.prototype, "_RadioControlRegistry_45", {
        get: function () {
            if ((this.__RadioControlRegistry_45 == null)) {
                (this.__RadioControlRegistry_45 = new import45.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_46", {
        get: function () {
            if ((this.__LOCALE_ID_46 == null)) {
                (this.__LOCALE_ID_46 = import5._localeFactory(this.parent.get(import89.LOCALE_ID, null)));
            }
            return this.__LOCALE_ID_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_47", {
        get: function () {
            if ((this.__NgLocalization_47 == null)) {
                (this.__NgLocalization_47 = new import46.NgLocaleLocalization(this._LOCALE_ID_46));
            }
            return this.__NgLocalization_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_52", {
        get: function () {
            if ((this.__ApplicationRef_52 == null)) {
                (this.__ApplicationRef_52 = this._ApplicationRef__51);
            }
            return this.__ApplicationRef_52;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_53", {
        get: function () {
            if ((this.__Compiler_53 == null)) {
                (this.__Compiler_53 = new import50.Compiler());
            }
            return this.__Compiler_53;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_54", {
        get: function () {
            if ((this.__APP_ID_54 == null)) {
                (this.__APP_ID_54 = import90._appIdRandomProviderFactory());
            }
            return this.__APP_ID_54;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_55", {
        get: function () {
            if ((this.__DOCUMENT_55 == null)) {
                (this.__DOCUMENT_55 = import6._document());
            }
            return this.__DOCUMENT_55;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_56", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_56 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_56 = new import51.GestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_56;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_57", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_57 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_57 = [
                    new import91.DomEventsPlugin(),
                    new import92.KeyEventsPlugin(),
                    new import93.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_56)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_57;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_58", {
        get: function () {
            if ((this.__EventManager_58 == null)) {
                (this.__EventManager_58 = new import52.EventManager(this._EVENT_MANAGER_PLUGINS_57, this.parent.get(import94.NgZone)));
            }
            return this.__EventManager_58;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_59", {
        get: function () {
            if ((this.__DomSharedStylesHost_59 == null)) {
                (this.__DomSharedStylesHost_59 = new import53.DomSharedStylesHost(this._DOCUMENT_55));
            }
            return this.__DomSharedStylesHost_59;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_60", {
        get: function () {
            if ((this.__AnimationDriver_60 == null)) {
                (this.__AnimationDriver_60 = import6._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_60;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_61", {
        get: function () {
            if ((this.__DomRootRenderer_61 == null)) {
                (this.__DomRootRenderer_61 = new import54.DomRootRenderer_(this._DOCUMENT_55, this._EventManager_58, this._DomSharedStylesHost_59, this._AnimationDriver_60, this._APP_ID_54));
            }
            return this.__DomRootRenderer_61;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgProbeToken_62", {
        get: function () {
            if ((this.__NgProbeToken_62 == null)) {
                (this.__NgProbeToken_62 = [import8.routerNgProbeToken()]);
            }
            return this.__NgProbeToken_62;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_63", {
        get: function () {
            if ((this.__RootRenderer_63 == null)) {
                (this.__RootRenderer_63 = import95._createConditionalRootRenderer(this._DomRootRenderer_61, this.parent.get(import95.NgProbeToken, null), this._NgProbeToken_62));
            }
            return this.__RootRenderer_63;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_64", {
        get: function () {
            if ((this.__DomSanitizer_64 == null)) {
                (this.__DomSanitizer_64 = new import55.DomSanitizerImpl());
            }
            return this.__DomSanitizer_64;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_65", {
        get: function () {
            if ((this.__Sanitizer_65 == null)) {
                (this.__Sanitizer_65 = this._DomSanitizer_64);
            }
            return this.__Sanitizer_65;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationQueue_66", {
        get: function () {
            if ((this.__AnimationQueue_66 == null)) {
                (this.__AnimationQueue_66 = new import56.AnimationQueue(this.parent.get(import94.NgZone)));
            }
            return this.__AnimationQueue_66;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_67", {
        get: function () {
            if ((this.__ViewUtils_67 == null)) {
                (this.__ViewUtils_67 = new import57.ViewUtils(this._RootRenderer_63, this._Sanitizer_65, this._AnimationQueue_66));
            }
            return this.__ViewUtils_67;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_68", {
        get: function () {
            if ((this.__IterableDiffers_68 == null)) {
                (this.__IterableDiffers_68 = import5._iterableDiffersFactory());
            }
            return this.__IterableDiffers_68;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_69", {
        get: function () {
            if ((this.__KeyValueDiffers_69 == null)) {
                (this.__KeyValueDiffers_69 = import5._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_69;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_70", {
        get: function () {
            if ((this.__SharedStylesHost_70 == null)) {
                (this.__SharedStylesHost_70 = this._DomSharedStylesHost_59);
            }
            return this.__SharedStylesHost_70;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_71", {
        get: function () {
            if ((this.__Title_71 == null)) {
                (this.__Title_71 = new import58.Title());
            }
            return this.__Title_71;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_72", {
        get: function () {
            if ((this.__BrowserXhr_72 == null)) {
                (this.__BrowserXhr_72 = new import59.BrowserXhr());
            }
            return this.__BrowserXhr_72;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_73", {
        get: function () {
            if ((this.__ResponseOptions_73 == null)) {
                (this.__ResponseOptions_73 = new import60.BaseResponseOptions());
            }
            return this.__ResponseOptions_73;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_74", {
        get: function () {
            if ((this.__XSRFStrategy_74 == null)) {
                (this.__XSRFStrategy_74 = import7._createDefaultCookieXSRFStrategy());
            }
            return this.__XSRFStrategy_74;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_75", {
        get: function () {
            if ((this.__XHRBackend_75 == null)) {
                (this.__XHRBackend_75 = new import61.XHRBackend(this._BrowserXhr_72, this._ResponseOptions_73, this._XSRFStrategy_74));
            }
            return this.__XHRBackend_75;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_76", {
        get: function () {
            if ((this.__RequestOptions_76 == null)) {
                (this.__RequestOptions_76 = new import62.BaseRequestOptions());
            }
            return this.__RequestOptions_76;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_77", {
        get: function () {
            if ((this.__Http_77 == null)) {
                (this.__Http_77 = import7.httpFactory(this._XHRBackend_75, this._RequestOptions_76));
            }
            return this.__Http_77;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTES_78", {
        get: function () {
            if ((this.__ROUTES_78 == null)) {
                (this.__ROUTES_78 = [
                    [{
                            path: 'child',
                            component: import96.ChildComponent,
                            data: { title: 'ChildComponent' }
                        }
                    ],
                    [{
                            path: 'child2',
                            component: import97.ChildComponent2,
                            data: { title: 'ChildComponent' }
                        }
                    ],
                    [{
                            path: 'material',
                            component: import98.MaterialComponent,
                            data: { title: 'ChildComponent' }
                        }
                    ],
                    [
                        {
                            path: '',
                            redirectTo: 'material',
                            pathMatch: 'full'
                        },
                        {
                            path: 'child',
                            component: import9.ChildModule,
                            data: { title: 'Heroes List' }
                        },
                        {
                            path: 'child2',
                            component: import10.ChildModule2,
                            data: { title: 'Heroes List' }
                        },
                        {
                            path: 'material',
                            component: import44.MaterialComponentModule,
                            data: { title: 'Heroes List' }
                        },
                        {
                            path: '**',
                            component: import99.PageNotFoundComponent
                        }
                    ]
                ]);
            }
            return this.__ROUTES_78;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_MATERIAL_COMPATIBILITY_MODE_79", {
        get: function () {
            if ((this.__MATERIAL_COMPATIBILITY_MODE_79 == null)) {
                (this.__MATERIAL_COMPATIBILITY_MODE_79 = false);
            }
            return this.__MATERIAL_COMPATIBILITY_MODE_79;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewportRuler_80", {
        get: function () {
            if ((this.__ViewportRuler_80 == null)) {
                (this.__ViewportRuler_80 = new import63.ViewportRuler());
            }
            return this.__ViewportRuler_80;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Platform_81", {
        get: function () {
            if ((this.__Platform_81 == null)) {
                (this.__Platform_81 = new import64.Platform());
            }
            return this.__Platform_81;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_OverlayPositionBuilder_82", {
        get: function () {
            if ((this.__OverlayPositionBuilder_82 == null)) {
                (this.__OverlayPositionBuilder_82 = new import65.OverlayPositionBuilder(this._ViewportRuler_80));
            }
            return this.__OverlayPositionBuilder_82;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_OverlayContainer_83", {
        get: function () {
            if ((this.__OverlayContainer_83 == null)) {
                (this.__OverlayContainer_83 = new import66.OverlayContainer());
            }
            return this.__OverlayContainer_83;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Overlay_84", {
        get: function () {
            if ((this.__Overlay_84 == null)) {
                (this.__Overlay_84 = new import67.Overlay(this._OverlayContainer_83, this, this._OverlayPositionBuilder_82, this._ApplicationRef_52, this, this.parent.get(import94.NgZone)));
            }
            return this.__Overlay_84;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ScrollDispatcher_85", {
        get: function () {
            if ((this.__ScrollDispatcher_85 == null)) {
                (this.__ScrollDispatcher_85 = new import68.ScrollDispatcher());
            }
            return this.__ScrollDispatcher_85;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_InteractivityChecker_86", {
        get: function () {
            if ((this.__InteractivityChecker_86 == null)) {
                (this.__InteractivityChecker_86 = new import69.InteractivityChecker(this._Platform_81));
            }
            return this.__InteractivityChecker_86;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomProjection_87", {
        get: function () {
            if ((this.__DomProjection_87 == null)) {
                (this.__DomProjection_87 = new import32.DomProjection());
            }
            return this.__DomProjection_87;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LiveAnnouncer_88", {
        get: function () {
            if ((this.__LiveAnnouncer_88 == null)) {
                (this.__LiveAnnouncer_88 = new import70.LiveAnnouncer(this.parent.get(import70.LIVE_ANNOUNCER_ELEMENT_TOKEN, null)));
            }
            return this.__LiveAnnouncer_88;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UniqueSelectionDispatcher_89", {
        get: function () {
            if ((this.__UniqueSelectionDispatcher_89 == null)) {
                (this.__UniqueSelectionDispatcher_89 = new import71.UniqueSelectionDispatcher());
            }
            return this.__UniqueSelectionDispatcher_89;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_MdDialog_90", {
        get: function () {
            if ((this.__MdDialog_90 == null)) {
                (this.__MdDialog_90 = new import72.MdDialog(this._Overlay_84, this));
            }
            return this.__MdDialog_90;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_MdIconRegistry_91", {
        get: function () {
            if ((this.__MdIconRegistry_91 == null)) {
                (this.__MdIconRegistry_91 = new import73.MdIconRegistry(this._Http_77, this._DomSanitizer_64));
            }
            return this.__MdIconRegistry_91;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_MdSnackBar_92", {
        get: function () {
            if ((this.__MdSnackBar_92 == null)) {
                (this.__MdSnackBar_92 = new import41.MdSnackBar(this._Overlay_84, this._LiveAnnouncer_88));
            }
            return this.__MdSnackBar_92;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_CONFIGURATION_93", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_93 == null)) {
                (this.__ROUTER_CONFIGURATION_93 = {});
            }
            return this.__ROUTER_CONFIGURATION_93;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LocationStrategy_94", {
        get: function () {
            if ((this.__LocationStrategy_94 == null)) {
                (this.__LocationStrategy_94 = import8.provideLocationStrategy(this.parent.get(import100.PlatformLocation), this.parent.get(import101.APP_BASE_HREF, null), this._ROUTER_CONFIGURATION_93));
            }
            return this.__LocationStrategy_94;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Location_95", {
        get: function () {
            if ((this.__Location_95 == null)) {
                (this.__Location_95 = new import74.Location(this._LocationStrategy_94));
            }
            return this.__Location_95;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UrlSerializer_96", {
        get: function () {
            if ((this.__UrlSerializer_96 == null)) {
                (this.__UrlSerializer_96 = new import75.DefaultUrlSerializer());
            }
            return this.__UrlSerializer_96;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterOutletMap_97", {
        get: function () {
            if ((this.__RouterOutletMap_97 == null)) {
                (this.__RouterOutletMap_97 = new import76.RouterOutletMap());
            }
            return this.__RouterOutletMap_97;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgModuleFactoryLoader_98", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_98 == null)) {
                (this.__NgModuleFactoryLoader_98 = new import77.SystemJsNgModuleLoader(this._Compiler_53, this.parent.get(import77.SystemJsNgModuleLoaderConfig, null)));
            }
            return this.__NgModuleFactoryLoader_98;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Router_99", {
        get: function () {
            if ((this.__Router_99 == null)) {
                (this.__Router_99 = import8.setupRouter(this._ApplicationRef_52, this._UrlSerializer_96, this._RouterOutletMap_97, this._Location_95, this, this._NgModuleFactoryLoader_98, this._Compiler_53, this._ROUTES_78, this._ROUTER_CONFIGURATION_93, this.parent.get(import102.UrlHandlingStrategy, null), this.parent.get(import103.RouteReuseStrategy, null)));
            }
            return this.__Router_99;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_100", {
        get: function () {
            if ((this.__ActivatedRoute_100 == null)) {
                (this.__ActivatedRoute_100 = import8.rootRoute(this._Router_99));
            }
            return this.__ActivatedRoute_100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadAllModules_104", {
        get: function () {
            if ((this.__PreloadAllModules_104 == null)) {
                (this.__PreloadAllModules_104 = new import78.PreloadAllModules());
            }
            return this.__PreloadAllModules_104;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_INITIALIZER_105", {
        get: function () {
            if ((this.__ROUTER_INITIALIZER_105 == null)) {
                (this.__ROUTER_INITIALIZER_105 = import8.initialRouterNavigation(this._Router_99, this._ApplicationRef_52, this._RouterPreloader_103, this._ROUTER_CONFIGURATION_93));
            }
            return this.__ROUTER_INITIALIZER_105;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_106", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_106 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_106 = [this._ROUTER_INITIALIZER_105]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_106;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._InternalFormsSharedModule_0 = new import2.InternalFormsSharedModule();
        this._FormsModule_1 = new import3.FormsModule();
        this._CommonModule_2 = new import4.CommonModule();
        this._ApplicationModule_3 = new import5.ApplicationModule();
        this._BrowserModule_4 = new import6.BrowserModule(this.parent.get(import6.BrowserModule, null));
        this._HttpModule_5 = new import7.HttpModule();
        this._ROUTER_FORROOT_GUARD_6 = import8.provideForRootGuard(this.parent.get(import104.Router, null));
        this._RouterModule_7 = new import8.RouterModule(this._ROUTER_FORROOT_GUARD_6);
        this._ChildModule_8 = new import9.ChildModule();
        this._ChildModule2_9 = new import10.ChildModule2();
        this._DefaultStyleCompatibilityModeModule_10 = new import11.DefaultStyleCompatibilityModeModule();
        this._MdRippleModule_11 = new import12.MdRippleModule();
        this._MdButtonModule_12 = new import13.MdButtonModule();
        this._MdCardModule_13 = new import14.MdCardModule();
        this._MdChipsModule_14 = new import15.MdChipsModule();
        this._MdCheckboxModule_15 = new import16.MdCheckboxModule();
        this._MdLineModule_16 = new import17.MdLineModule();
        this._MdGridListModule_17 = new import18.MdGridListModule();
        this._PlatformModule_18 = new import19.PlatformModule();
        this._MdInputModule_19 = new import20.MdInputModule();
        this._MdListModule_20 = new import21.MdListModule();
        this._MdProgressBarModule_21 = new import22.MdProgressBarModule();
        this._MdProgressSpinnerModule_22 = new import23.MdProgressSpinnerModule();
        this._PortalModule_23 = new import24.PortalModule();
        this._OverlayModule_24 = new import25.OverlayModule();
        this._MdSelectModule_25 = new import26.MdSelectModule();
        this._A11yModule_26 = new import27.A11yModule();
        this._MdSidenavModule_27 = new import28.MdSidenavModule();
        this._ObserveContentModule_28 = new import29.ObserveContentModule();
        this._MdTabsModule_29 = new import30.MdTabsModule();
        this._MdToolbarModule_30 = new import31.MdToolbarModule();
        this._ProjectionModule_31 = new import32.ProjectionModule();
        this._RtlModule_32 = new import33.RtlModule();
        this._MdButtonToggleModule_33 = new import34.MdButtonToggleModule();
        this._MdDialogModule_34 = new import35.MdDialogModule();
        this._MdIconModule_35 = new import36.MdIconModule();
        this._MdMenuModule_36 = new import37.MdMenuModule();
        this._MdRadioModule_37 = new import38.MdRadioModule();
        this._MdSliderModule_38 = new import39.MdSliderModule();
        this._MdSlideToggleModule_39 = new import40.MdSlideToggleModule();
        this._MdSnackBarModule_40 = new import41.MdSnackBarModule();
        this._MdTooltipModule_41 = new import42.MdTooltipModule();
        this._MaterialRootModule_42 = new import43.MaterialRootModule();
        this._MaterialComponentModule_43 = new import44.MaterialComponentModule();
        this._AppModule_44 = new import1.AppModule();
        this._ErrorHandler_48 = import6.errorHandler();
        this._ApplicationInitStatus_49 = new import47.ApplicationInitStatus(this.parent.get(import47.APP_INITIALIZER, null));
        this._Testability_50 = new import48.Testability(this.parent.get(import94.NgZone));
        this._ApplicationRef__51 = new import49.ApplicationRef_(this.parent.get(import94.NgZone), this.parent.get(import105.Console), this, this._ErrorHandler_48, this, this._ApplicationInitStatus_49, this.parent.get(import48.TestabilityRegistry, null), this._Testability_50);
        this._NoPreloading_101 = new import78.NoPreloading();
        this._PreloadingStrategy_102 = this._NoPreloading_101;
        this._RouterPreloader_103 = new import78.RouterPreloader(this._Router_99, this._NgModuleFactoryLoader_98, this._Compiler_53, this, this._PreloadingStrategy_102);
        return this._AppModule_44;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_0;
        }
        if ((token === import3.FormsModule)) {
            return this._FormsModule_1;
        }
        if ((token === import4.CommonModule)) {
            return this._CommonModule_2;
        }
        if ((token === import5.ApplicationModule)) {
            return this._ApplicationModule_3;
        }
        if ((token === import6.BrowserModule)) {
            return this._BrowserModule_4;
        }
        if ((token === import7.HttpModule)) {
            return this._HttpModule_5;
        }
        if ((token === import8.ROUTER_FORROOT_GUARD)) {
            return this._ROUTER_FORROOT_GUARD_6;
        }
        if ((token === import8.RouterModule)) {
            return this._RouterModule_7;
        }
        if ((token === import9.ChildModule)) {
            return this._ChildModule_8;
        }
        if ((token === import10.ChildModule2)) {
            return this._ChildModule2_9;
        }
        if ((token === import11.DefaultStyleCompatibilityModeModule)) {
            return this._DefaultStyleCompatibilityModeModule_10;
        }
        if ((token === import12.MdRippleModule)) {
            return this._MdRippleModule_11;
        }
        if ((token === import13.MdButtonModule)) {
            return this._MdButtonModule_12;
        }
        if ((token === import14.MdCardModule)) {
            return this._MdCardModule_13;
        }
        if ((token === import15.MdChipsModule)) {
            return this._MdChipsModule_14;
        }
        if ((token === import16.MdCheckboxModule)) {
            return this._MdCheckboxModule_15;
        }
        if ((token === import17.MdLineModule)) {
            return this._MdLineModule_16;
        }
        if ((token === import18.MdGridListModule)) {
            return this._MdGridListModule_17;
        }
        if ((token === import19.PlatformModule)) {
            return this._PlatformModule_18;
        }
        if ((token === import20.MdInputModule)) {
            return this._MdInputModule_19;
        }
        if ((token === import21.MdListModule)) {
            return this._MdListModule_20;
        }
        if ((token === import22.MdProgressBarModule)) {
            return this._MdProgressBarModule_21;
        }
        if ((token === import23.MdProgressSpinnerModule)) {
            return this._MdProgressSpinnerModule_22;
        }
        if ((token === import24.PortalModule)) {
            return this._PortalModule_23;
        }
        if ((token === import25.OverlayModule)) {
            return this._OverlayModule_24;
        }
        if ((token === import26.MdSelectModule)) {
            return this._MdSelectModule_25;
        }
        if ((token === import27.A11yModule)) {
            return this._A11yModule_26;
        }
        if ((token === import28.MdSidenavModule)) {
            return this._MdSidenavModule_27;
        }
        if ((token === import29.ObserveContentModule)) {
            return this._ObserveContentModule_28;
        }
        if ((token === import30.MdTabsModule)) {
            return this._MdTabsModule_29;
        }
        if ((token === import31.MdToolbarModule)) {
            return this._MdToolbarModule_30;
        }
        if ((token === import32.ProjectionModule)) {
            return this._ProjectionModule_31;
        }
        if ((token === import33.RtlModule)) {
            return this._RtlModule_32;
        }
        if ((token === import34.MdButtonToggleModule)) {
            return this._MdButtonToggleModule_33;
        }
        if ((token === import35.MdDialogModule)) {
            return this._MdDialogModule_34;
        }
        if ((token === import36.MdIconModule)) {
            return this._MdIconModule_35;
        }
        if ((token === import37.MdMenuModule)) {
            return this._MdMenuModule_36;
        }
        if ((token === import38.MdRadioModule)) {
            return this._MdRadioModule_37;
        }
        if ((token === import39.MdSliderModule)) {
            return this._MdSliderModule_38;
        }
        if ((token === import40.MdSlideToggleModule)) {
            return this._MdSlideToggleModule_39;
        }
        if ((token === import41.MdSnackBarModule)) {
            return this._MdSnackBarModule_40;
        }
        if ((token === import42.MdTooltipModule)) {
            return this._MdTooltipModule_41;
        }
        if ((token === import43.MaterialRootModule)) {
            return this._MaterialRootModule_42;
        }
        if ((token === import44.MaterialComponentModule)) {
            return this._MaterialComponentModule_43;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_44;
        }
        if ((token === import45.RadioControlRegistry)) {
            return this._RadioControlRegistry_45;
        }
        if ((token === import89.LOCALE_ID)) {
            return this._LOCALE_ID_46;
        }
        if ((token === import46.NgLocalization)) {
            return this._NgLocalization_47;
        }
        if ((token === import106.ErrorHandler)) {
            return this._ErrorHandler_48;
        }
        if ((token === import47.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_49;
        }
        if ((token === import48.Testability)) {
            return this._Testability_50;
        }
        if ((token === import49.ApplicationRef_)) {
            return this._ApplicationRef__51;
        }
        if ((token === import49.ApplicationRef)) {
            return this._ApplicationRef_52;
        }
        if ((token === import50.Compiler)) {
            return this._Compiler_53;
        }
        if ((token === import90.APP_ID)) {
            return this._APP_ID_54;
        }
        if ((token === import107.DOCUMENT)) {
            return this._DOCUMENT_55;
        }
        if ((token === import93.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_56;
        }
        if ((token === import52.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_57;
        }
        if ((token === import52.EventManager)) {
            return this._EventManager_58;
        }
        if ((token === import53.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_59;
        }
        if ((token === import108.AnimationDriver)) {
            return this._AnimationDriver_60;
        }
        if ((token === import54.DomRootRenderer)) {
            return this._DomRootRenderer_61;
        }
        if ((token === import49.NgProbeToken)) {
            return this._NgProbeToken_62;
        }
        if ((token === import109.RootRenderer)) {
            return this._RootRenderer_63;
        }
        if ((token === import55.DomSanitizer)) {
            return this._DomSanitizer_64;
        }
        if ((token === import110.Sanitizer)) {
            return this._Sanitizer_65;
        }
        if ((token === import56.AnimationQueue)) {
            return this._AnimationQueue_66;
        }
        if ((token === import57.ViewUtils)) {
            return this._ViewUtils_67;
        }
        if ((token === import111.IterableDiffers)) {
            return this._IterableDiffers_68;
        }
        if ((token === import112.KeyValueDiffers)) {
            return this._KeyValueDiffers_69;
        }
        if ((token === import53.SharedStylesHost)) {
            return this._SharedStylesHost_70;
        }
        if ((token === import58.Title)) {
            return this._Title_71;
        }
        if ((token === import59.BrowserXhr)) {
            return this._BrowserXhr_72;
        }
        if ((token === import60.ResponseOptions)) {
            return this._ResponseOptions_73;
        }
        if ((token === import113.XSRFStrategy)) {
            return this._XSRFStrategy_74;
        }
        if ((token === import61.XHRBackend)) {
            return this._XHRBackend_75;
        }
        if ((token === import62.RequestOptions)) {
            return this._RequestOptions_76;
        }
        if ((token === import114.Http)) {
            return this._Http_77;
        }
        if ((token === import115.ROUTES)) {
            return this._ROUTES_78;
        }
        if ((token === import11.MATERIAL_COMPATIBILITY_MODE)) {
            return this._MATERIAL_COMPATIBILITY_MODE_79;
        }
        if ((token === import63.ViewportRuler)) {
            return this._ViewportRuler_80;
        }
        if ((token === import64.Platform)) {
            return this._Platform_81;
        }
        if ((token === import65.OverlayPositionBuilder)) {
            return this._OverlayPositionBuilder_82;
        }
        if ((token === import66.OverlayContainer)) {
            return this._OverlayContainer_83;
        }
        if ((token === import67.Overlay)) {
            return this._Overlay_84;
        }
        if ((token === import68.ScrollDispatcher)) {
            return this._ScrollDispatcher_85;
        }
        if ((token === import69.InteractivityChecker)) {
            return this._InteractivityChecker_86;
        }
        if ((token === import32.DomProjection)) {
            return this._DomProjection_87;
        }
        if ((token === import70.LiveAnnouncer)) {
            return this._LiveAnnouncer_88;
        }
        if ((token === import71.UniqueSelectionDispatcher)) {
            return this._UniqueSelectionDispatcher_89;
        }
        if ((token === import72.MdDialog)) {
            return this._MdDialog_90;
        }
        if ((token === import73.MdIconRegistry)) {
            return this._MdIconRegistry_91;
        }
        if ((token === import41.MdSnackBar)) {
            return this._MdSnackBar_92;
        }
        if ((token === import8.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_93;
        }
        if ((token === import101.LocationStrategy)) {
            return this._LocationStrategy_94;
        }
        if ((token === import74.Location)) {
            return this._Location_95;
        }
        if ((token === import75.UrlSerializer)) {
            return this._UrlSerializer_96;
        }
        if ((token === import76.RouterOutletMap)) {
            return this._RouterOutletMap_97;
        }
        if ((token === import116.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_98;
        }
        if ((token === import104.Router)) {
            return this._Router_99;
        }
        if ((token === import117.ActivatedRoute)) {
            return this._ActivatedRoute_100;
        }
        if ((token === import78.NoPreloading)) {
            return this._NoPreloading_101;
        }
        if ((token === import78.PreloadingStrategy)) {
            return this._PreloadingStrategy_102;
        }
        if ((token === import78.RouterPreloader)) {
            return this._RouterPreloader_103;
        }
        if ((token === import78.PreloadAllModules)) {
            return this._PreloadAllModules_104;
        }
        if ((token === import8.ROUTER_INITIALIZER)) {
            return this._ROUTER_INITIALIZER_105;
        }
        if ((token === import90.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_106;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__51.ngOnDestroy();
        this._RouterPreloader_103.ngOnDestroy();
    };
    return AppModuleInjector;
}(import0.NgModuleInjector));
export var AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
