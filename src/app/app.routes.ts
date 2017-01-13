/**
 * Created on 2016-12-06.
 * @author: Gman Park
 */

import {RouterModule} from "@angular/router";

// User Module
import {PageNotFoundComponent} from "./error/pagenotfound.component";

import {ChildModule} from "./childModule/child.module";
import {ChildModule2} from "./childModule2/child.module";
import {MaterialComponentModule} from "./MaterialModule/material.module";

export const routingModule = RouterModule.forRoot([
    // first url is for loading "material module".
    {path: '', redirectTo: 'material', pathMatch: 'full'},
    {
        path: "**",
        component: PageNotFoundComponent
    }
]);