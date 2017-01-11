/**
 * Created on 2016-12-06.
 * @author: Gman Park
 */

import {RouterModule} from "@angular/router";

// User Module
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from "./error/pagenotfound.component";

import {ChildModule} from "./childModule/child.module";

export const routingModule = RouterModule.forRoot([
    {path: '', redirectTo: 'child', pathMatch: 'full'},
    {
        path: 'child', component: ChildModule, data: {title: 'Heroes List'}
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
]);