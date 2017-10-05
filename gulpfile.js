const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');

gulp.task('js', function() {
  return browserify('./src/index.js', { debug: true })
    .transform(babelify, {
      presets: ['es2015']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public'));
});

gulp.task('default', ['js']);

gulp.task('watch', function() {
  return gulp.watch('./src/**/**.js', ['default']);
});
