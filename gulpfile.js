var gulp = require('gulp'),
    connect = require('gulp-connect-php'),
    browserSync = require('browser-sync');

gulp.task('serve', function() {
    connect.server({base: 'src'}, function(){
        browserSync({
            proxy: '127.0.0.1:8000'
        });
    });

    gulp.watch(['**/*.php', '**/*.css', '**/*.js']).on('change', function() {
        browserSync.reload();
    });
});
