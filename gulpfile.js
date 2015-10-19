var gulp         = require('gulp');
var uglify       = require('gulp-uglify');
var concat       = require('gulp-concat');
var babel        = require('gulp-babel');
var ngAnnotate   = require('gulp-ng-annotate');

gulp.task('default', function (done) {

    // Copy html
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'));

    // Vendors js
    gulp.src(['bower_components/angular/angular.js'])
        .pipe(concat('vendors.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'));

    // Main js
    gulp.src([
        'src/app/module.js',
        'src/**/*.js'
    ])
        .pipe(concat('main.js'))
        .pipe(ngAnnotate())
        // .pipe(uglify()) // No uglify, so you can read the source code
        .pipe(gulp.dest('dist/scripts'));

    done();
});
