/*
Gulpfile Setup
*/


//Require our dependencies
// var gulp = require('gulp');
// var sass = require('gulp-sass');
//
// //Compile our sass into css
// gulp.task('styles', function() {
//     gulp.src('sass/main.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('css/'));
// });

//Setup watch task
// gulp.task('watch',function() {
//     gulp.watch(paths.sass + 'sass/**/*.scss',['styles']);
//     console.log(paths.sass + 'styles/**/*.scss');
// });

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});
