const mix = require('laravel-mix');
const glob = require('glob');

mix.setPublicPath('./')

glob.sync('src/js/*.js').map(function(file) {
    mix.js(file, 'js');
});