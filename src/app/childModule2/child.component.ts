/**
 * Created on 2017-01-11.
 * @author: Gman Park
 */

import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'child2',
    template: `
    <h2>childComponent2</h2>
    <router-outlet></router-outlet>
    `
})

export class ChildComponent2 {
    constructor() {}
}