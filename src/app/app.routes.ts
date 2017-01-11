/**
 * Created on 2016-12-06.
 * @author: Gman Park
 */

import {RouterModule} from "@angular/router";

// User Module
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from "./error/pagenotfound.component";

export const routingModule = RouterModule.forRoot([
    // {path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: '', component: AppComponent
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
]);