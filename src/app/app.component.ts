/**
 * Created on 2017-01-10.
 * @author: Gman Park
 */

import {Component, HostListener} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'app',
    template: '<router-outlet></router-outlet>'
})

export class AppComponent {
    constructor(private router: Router) {
        this.router = router;
    }

    @HostListener('document:click', ['$event'])
    onClick(ev: KeyboardEvent) {
        if(this.router.url === '/child'){
            this.router.navigate(['/child2']);
        }

        if(this.router.url === '/child2'){
            this.router.navigate(['/child']);
        }
    }
}