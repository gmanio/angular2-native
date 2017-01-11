/**
 * Created on 2017-01-11.
 * @author: Gman Park
 */

import {RouterModule} from "@angular/router";

// User Module
import {ChildComponent2} from './child.component';

export const routingModule = RouterModule.forChild([
    {
        path: 'child2', component: ChildComponent2, data: {title: 'ChildComponent'}
    }
]);