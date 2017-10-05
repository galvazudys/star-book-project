const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');
const streamify = require('gulp-streamify');

gulp.task('js', function() {
  return browserify('./src/index.js')
    .transform(babelify, {
      presets: ['es2015']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(plumber())
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('./public'));
});

gulp.task('default', ['js']);

gulp.task('watch', function() {
  return gulp.watch('./src/**/**.js', ['default']);
});
