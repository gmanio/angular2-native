/**
 * Created on 2017-01-10.
 * @author: Gman Park
 */
import 'zone.js';
import 'reflect-metadata';

import {platformBrowser}    from '@angular/platform-browser';
import {enableProdMode} from '@angular/core';
import {AppModuleNgFactory} from '../aot/src/app/app.module.ngfactory';
enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);