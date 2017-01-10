/**
 * Created on 2017-01-10.
 * @author: Gman Park
 */
import 'zone.js';
import 'reflect-metadata';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {AppModule} from './app/app.module';

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);