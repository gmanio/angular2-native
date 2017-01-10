/**
 * Created on 2017-01-10.
 * @author: Gman Park
 */

(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/',
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'src',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',

            // other libraries
            'rxjs': 'npm:rxjs',
            'zone.js': 'npm:zone.js/dist/zone.js',
            'reflect-metadata': 'npm:reflect-metadata/Reflect.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);