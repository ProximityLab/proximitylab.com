var gulp = require('gulp'),
    connect = require('gulp-connect-php'),
    browserSync = require('browser-sync'),
    postcss    = require('gulp-postcss'),
    sass = require('gulp-sass'),
    //sourcemaps = require('gulp-sourcemaps'),
    rename = require("gulp-rename"),
    cssnano = require('cssnano'),
    autoprefixer = require('autoprefixer'),
    cssMqpacker = require('css-mqpacker'),
    newer = require('gulp-newer'),
    dest = require('gulp-dest'),
    modRewrite = require('connect-modrewrite');

      // folders
      folder = {
        src: 'dev/',
        build: 'src/'
      };

let server = new connect();

gulp.task('serve', function() {
    connect.server({
      base: 'src',

    }, function(){
        browserSync({
            proxy: '127.0.0.1:8000',
            port: 8000,
            injectChanges: true,
            notify: false
        });
    });

// CSS processing
gulp.task('css', function() {
  // gulp.task('css', ['images'], function() {

  var postCssOpts = [
  autoprefixer({ browsers: ['last 2 versions', '> 2%'] }),
  // cssMqpacker,
  cssnano
  ];

  return gulp.src(folder.src + 'scss/main.scss')
    .pipe(sass({
      outputStyle: 'nested',
      imagePath: 'images/',
      precision: 3,
      errLogToConsole: true
    }))
    .on('error', onError)
    .pipe(postcss(postCssOpts))
    .pipe(rename( { suffix: '.min' } ))
    .pipe(gulp.dest(folder.build + 'css/'))
    .pipe(browserSync.reload({stream: true}));

});

gulp.watch(folder.src + 'scss/**/*', ['css']);
// gulp.watch(['**/*.php', '**/*.css', '**/*.js']).on('change', function() {
gulp.watch(['**/*.php', '**/*.js', '**/*.css']).on('change', function() {
        browserSync.reload();
    });
});

gulp.task('disconnect', function() {
      server.closeServer();
    });

gulp.task('default', ['serve', 'disconnect']);

//add an error listener to where your errors might be thrown.
// .on('error', onError)
function onError(err) {
  console.log(err);
  this.emit('end');
}
