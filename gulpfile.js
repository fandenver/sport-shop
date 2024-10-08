import gulp from "gulp";

import {path} from "./gulp/config/path.js";

import {plugins} from "./gulp/config/plugins.js";

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

import {copy} from "./gulp/tasks/copy.js";
import {reset} from "./gulp/tasks/reset.js";
import {html} from "./gulp/tasks/html.js";
import {scss} from "./gulp/tasks/scss.js";
import {js} from "./gulp/tasks/js.js";
import {images} from "./gulp/tasks/images.js";
import {svgSprive} from "./gulp/tasks/svgSpive.js";
import {zip} from "./gulp/tasks/zip.js";
import {ftp} from "./gulp/tasks/ftp.js";
import {server} from "./gulp/tasks/server.js";
import {otfToTtf, ttfToWoff, fontsStyle} from "./gulp/tasks/fonts.js";

function watcher() {
    gulp.watch(path.watch.files, {usePolling: true}, copy);
    gulp.watch(path.watch.html, {usePolling: true}, html); // gulp.series(html, ftp)
    gulp.watch(path.watch.scss, {usePolling: true}, scss);
    gulp.watch(path.watch.js, {usePolling: true}, js);
    gulp.watch(path.watch.images, {usePolling: true}, images);
}

export {svgSprive};

// Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(/*copy,*/ html, scss, js, images));

// Построение сценария выполнения задач
const dev = gulp.series(reset, mainTasks, watcher /*gulp.parallel(watcher /* , server )*/);
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

export {dev};
export {build};
export {deployZIP};
export {deployFTP};

gulp.task('default', dev);