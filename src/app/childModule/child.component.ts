/**
 * Created on 2017-01-11.
 * @author: Gman Park
 */

import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'child',
    template: `
    <h2>childComponent</h2>
    <router-outlet></router-outlet>
    `
})

export class ChildComponent {
    constructor() {}
}