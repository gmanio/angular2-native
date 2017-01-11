/**
 * Created on 2016-12-06.
 * @author: Gman Park
 */

import {RouterModule} from "@angular/router";

// User Module
import {PageNotFoundComponent} from "./error/pagenotfound.component";

import {ChildModule} from "./childModule/child.module";
import {ChildModule2} from "./childModule2/child.module";

export const routingModule = RouterModule.forRoot([
    {path: '', redirectTo: 'child', pathMatch: 'full'},
    {
        path: 'child', component: ChildModule, data: {title: 'Heroes List'}
    },
    {
        path: 'child2', component: ChildModule2, data: {title: 'Heroes List'}
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
]);