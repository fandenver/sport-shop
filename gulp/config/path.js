import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        js: `${buildFolder}/scripts/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/html/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts`,
        files: `${buildFolder}/files/`,
    },
    src: {
        js: `${srcFolder}/scripts/*.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/page.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        svgIcons: `${srcFolder}/svgIcons/*.svg`,
    },
    watch: {
        js: `${srcFolder}/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
        files: `${srcFolder}/files/**/*.*`
    },
    clean: `${buildFolder}`,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: 'test'
}