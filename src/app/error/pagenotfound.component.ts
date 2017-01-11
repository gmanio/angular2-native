/**
 * Created on 2016-12-14.
 * @author: Gman Park
 */

import {Component} from '@angular/core';

@Component({
    template:`
        <div>
            <h3>Angular2 Router</h3>
            <p> Sorry.. Something is wrong. </p>
            <span>{{title}}</span>
        </div>`,
})

export class PageNotFoundComponent{
    title = ' Page Not Found ';
}