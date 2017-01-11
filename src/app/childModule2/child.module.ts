/**
 * Created on 2017-01-11.
 * @author: Gman Park
 */
/**
 * Created on 2017-01-10.
 * @author: Gman Park
 */

import {NgModule} from '@angular/core';
import { CommonModule }   from '@angular/common';

// basic routing
import {routingModule} from './child.routes';

// User Module
import {ChildComponent2} from './child.component';
import {Title} from "@angular/platform-browser";

@NgModule({
    imports: [
        CommonModule,
        routingModule
    ],
    declarations: [
        ChildComponent2
    ],
    providers: [
        Title
    ]
})

export class ChildModule2 {}