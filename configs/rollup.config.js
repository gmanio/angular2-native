/**
 * Created on 2017-01-10.
 * @author: Gman Park
 */

import commonjs    from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
// import css from 'rollup-plugin-css-only';

export default {
    entry: 'src/main-aot.ts',
    dest: 'dist/bundle.es2015.js',
    format: 'iife',
    sourceMap: false,
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs({
            include: 'node_modules/rxjs/**',
        }),
        // css({output: 'bundle.css'})
    ]
}