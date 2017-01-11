/**
 * Created on 2017-01-11.
 * @author: Gman Park
 */

import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule}   from '@angular/common';

// basic routing
import {MaterialModule} from '@angular/material';
import {routingModule} from './material.routes';

// User Module
import {MaterialComponent} from './material.component';
import {Title} from "@angular/platform-browser";

@NgModule({
    imports: [
        CommonModule,
        routingModule,
        MaterialModule.forRoot()
    ],
    declarations: [
        MaterialComponent
    ],
    providers: [
        Title
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class MaterialComponentModule {
}