import fileInclude from "gulp-file-include";
import webpHtmlnoSvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "HTML",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(fileInclude())
        .pipe(app.plugins.replace(/scss\//g, 'css/'))
        .pipe(app.plugins.replace(/"img\//g, '"../img/'))
        .pipe(app.plugins.replace(/scripts\//g, 'scripts/'))
        .pipe(app.plugins.replace(/node_modules\//g, 'node_modules/'))
        .pipe(app.plugins.replace(/"..\/wnumb-1.2.0\//g, '"../libs/wnumb-1.2.0/'))
        .pipe(app.plugins.if(
            app.isBuild,
            webpHtmlnoSvg()
            )
           )
        .pipe(app.plugins.if(
            app.isBuild,
            versionNumber({
                'value': '%DT%',
                'append': {
                    'key': '_v',
                    'to': [
                        'css',
                        'js',
                    ]
                },
                'output': {
                    'file': 'gulp/version.json'
                }
            })
            )
        )
        .pipe(app.gulp.dest(app.path.build.html))
        // .pipe(app.plugins.browsersync.stream());
}