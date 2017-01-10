/**
 * Created on 2017-01-10.
 * @author: Gman Park
 */

import {NgModule} from '@angular/core';
import {BrowserModule, Title}  from '@angular/platform-browser';
import {HttpModule}    from '@angular/http';

// User Module
import {AppComponent} from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        Title
    ],
    bootstrap: [AppComponent],
})

export class AppModule {}