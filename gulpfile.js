'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    del = require("del"),
    runSequence = require('run-sequence'),
    scsslint = require('gulp-scss-lint'),
    handlebars = require('gulp-compile-handlebars'),
    extend = require('gulp-extend');

gulp.task('clean', function(cb){
  del([
    'build/**'
  ], cb);
});

gulp.task('scss-lint', function() {
  return gulp.src('./src/scss/*.scss')
    .pipe(scsslint({
      'config': '.scss-lint.yml'
    }))
    .pipe(scsslint.failReporter());
});

gulp.task('compile-scss', function(){
  return gulp.src([
      './bower_components/wvu-patterns-footer-credits/src/scss/*.scss',
      './bower_components/wvu-patterns-footer-links/src/scss/*.scss',
      './src/scss/*.scss'
    ])
    .pipe(rename(function (path) {
      path.basename = path.basename.substring(1)
    }))
    .pipe(sass({
      includePaths: ['scss'],
      outputStyle: 'expanded'
    }))
    .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7", { cascade: true }))
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('build-json',function(){
  return gulp.src([
    './src/handlebars/data/*.json',
    './bower_components/wvu-patterns-footer-credits/src/handlebars/data/*.json',
    './bower_components/wvu-patterns-footer-links/src/handlebars/data/*.json'
    ])
  .pipe(extend('_wvu-footer.json',true,2))
  .pipe(gulp.dest("./build/data"));
})

gulp.task('compile', ['build-json','scss-lint','compile-scss'], function () {

  var templateData = require('./build/data/_wvu-footer.json');

  var options = {
    batch : [
      './bower_components/wvu-patterns-footer-credits/src/handlebars',
      './bower_components/wvu-patterns-footer-links/src/handlebars',
      './src/handlebars'
    ]
  }
  return gulp.src('./src/handlebars/test/index.hbs')
        .pipe(handlebars(templateData, options))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./build'));
});

gulp.task('build',function(){
  runSequence('clean','compile');
});

gulp.task('test',['build']);
gulp.task('ci',['scss-lint']);
