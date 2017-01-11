/**
 * Created on 2017-01-11.
 * @author: Gman Park
 */

import {RouterModule} from "@angular/router";

// User Module
import {ChildComponent} from './child.component';

export const routingModule = RouterModule.forChild([
    {
        path: 'child', component: ChildComponent, data: {title: 'ChildComponent'}
    }
]);