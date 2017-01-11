/**
 * Created on 2017-01-10.
 * @author: Gman Park
 */

import {NgModule} from '@angular/core';
import {BrowserModule, Title}  from '@angular/platform-browser';
import {HttpModule}    from '@angular/http';

// basic routing
import {routingModule} from './app.routes';

// User Module
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from "./error/pagenotfound.component";
import {ChildModule} from "./childModule/child.module";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routingModule,
        ChildModule
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

export class AppModule {}