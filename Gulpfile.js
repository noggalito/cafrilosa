var theme = 'cafrilosa';

var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concatCss    = require('gulp-concat-css'),
    CleanCSS     = require('clean-css'),
    map          = require('vinyl-map'),
    concatJs     = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    server       = require('gulp-express');

gulp.task('sass', function () {
  var minify = map(function (buff, filename) {
    return new CleanCSS({
    }).minify(buff.toString()).styles;
  });

  return gulp.src('content/themes/' + theme + '/lib/stylesheets/components.sass')
    .pipe(sass({optionStyle: "compressed"}).on('error', sass.logError))
    .pipe(concatCss('components.css'))
    .pipe(autoprefixer({
      cascade: true
    }))
    .pipe(minify)
    .pipe(gulp.dest('content/themes/' + theme + '/assets/css/'));
});

gulp.task('minify:js', function() {
  return gulp.src('content/themes/' + theme + '/lib/js/*.js')
    .pipe(uglify())
    .pipe(concatJs('app.js'))
    .pipe(gulp.dest('content/themes/' + theme + '/assets/js/min/'));
});

gulp.task('server', function () {
  server.run(['index.js'], {}, false);

  gulp.watch('content/themes/' + theme + '/lib/stylesheets/**/*.sass', ['sass']);
  gulp.watch('content/themes/' + theme + '/lib/js/**/*.js', ['minify:js']);
});

gulp.task('default', ['server']);
