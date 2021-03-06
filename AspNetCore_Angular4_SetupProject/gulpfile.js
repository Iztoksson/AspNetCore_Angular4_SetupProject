﻿/// <binding AfterBuild='default' Clean='cleanup' />
// POI: !! Must be absolute first line in this document!! 
//      This line tells VS to run task 'default' after each build so app files are copied over to wwwroot folder.

var gulp = require('gulp');
var del = require('del'); // POI: This is needed for 'cleanup' task. Make sure you have this in package.json.

var libs = './wwwroot/libs/';

// POI: List of folders and files to copy from ./app folder into wwwroot folder.
var paths = {
    scripts: ['app/**/*.js'],
};
// POI: This is the default task which copies .js files (our application) to wwwroot.
gulp.task('default', function () {
    gulp.src(paths.scripts).pipe(gulp.dest('wwwroot/app'))
});

// POI: This task cleans (deletes) every file in wwwroot/app folder and copies fresh compiled files.
gulp.task('cleanup', function () {
    return del(['wwwroot/app/**/*']);
});

// POI: Restore or init required packages and dependency modules. Run this on-demand, don't put it in each "AfterBuild" (see first POI).
gulp.task('restore:core-js', function () {
    gulp.src([
        'node_modules/core-js/client/*.js'
    ]).pipe(gulp.dest(libs + 'core-js'));
});
gulp.task('restore:zone.js', function () {
    gulp.src([
        'node_modules/zone.js/dist/*.js'
    ]).pipe(gulp.dest(libs + 'zone.js'));
});
gulp.task('restore:reflect-metadata', function () {
    gulp.src([
        'node_modules/reflect-metadata/reflect.js'
    ]).pipe(gulp.dest(libs + 'reflect-metadata'));
});
gulp.task('restore:systemjs', function () {
    gulp.src([
        'node_modules/systemjs/dist/*.js'
    ]).pipe(gulp.dest(libs + 'systemjs'));
});
gulp.task('restore:rxjs', function () {
    gulp.src([
        'node_modules/rxjs/**/*.js'
    ]).pipe(gulp.dest(libs + 'rxjs'));
});
gulp.task('restore:angular-in-memory-web-api', function () {
    gulp.src([
        'node_modules/angular-in-memory-web-api/**/*.js'
    ]).pipe(gulp.dest(libs + 'angular-in-memory-web-api'));
});

gulp.task('restore:angular', function () {
    gulp.src([
        'node_modules/@angular/**/*.js'
    ]).pipe(gulp.dest(libs + '@angular'));
});

gulp.task('restore:bootstrap', function () {
    gulp.src([
        'node_modules/bootstrap/dist/**/*.*'
    ]).pipe(gulp.dest(libs + 'bootstrap'));
});

gulp.task('restore', [
    'restore:core-js',
    'restore:zone.js',
    'restore:reflect-metadata',
    'restore:systemjs',
    'restore:rxjs',
    'restore:angular-in-memory-web-api',
    'restore:angular',
    'restore:bootstrap',
]);
