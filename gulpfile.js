const gulp = require('gulp');
const fileinclude = require('gulp-file-include');

gulp.task('fileinclude', function() {
    return gulp.src('internet-shop/src/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./internet-shop/src'));
});

gulp.task('default', gulp.series('fileinclude'));