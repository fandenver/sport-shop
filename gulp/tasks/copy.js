export const copy = () => {
    return app.gulp.src('src/wnumb-1.2.0/**/*.*')
        .pipe(app.gulp.dest('dist/libs/wnumb-1.2.0/'))
}
