/**
 * Created on 2017-01-10.
 * @author: Gman Park
 */

import {NgModule} from '@angular/core';
import {BrowserModule, Title}  from '@angular/platform-browser';
import {HttpModule}    from '@angular/http';
import {FormsModule}   from '@angular/forms';

// basic routing
import {routingModule} from './app.routes';

// User Module
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from "./error/pagenotfound.component";
import {ChildModule} from "./childModule/child.module";
import {ChildModule2} from "./childModule2/child.module";
import {MaterialComponentModule} from "./MaterialModule/material.module";

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        HttpModule,
        routingModule,
        ChildModule,
        ChildModule2,
        MaterialComponentModule
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent,
    ],
    providers: [
        Title
    ],
    bootstrap: [AppComponent],
})

export class AppModule {
}