/**
 * Created on 2017-01-11.
 * @author: Gman Park
 */

import {RouterModule} from "@angular/router";

// User Module
import {MaterialComponent} from './material.component';

export const routingModule = RouterModule.forChild([
    {
        path: 'material', component: MaterialComponent, data: {title: 'ChildComponent'}
    }
]);