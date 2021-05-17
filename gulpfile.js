const gulp = require("gulp");
const cssMinify = require("gulp-css-minify");
const htmlmin = require("gulp-htmlmin");
const autoprefixer = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");
const flatten = require("gulp-flatten");
const concatCss = require("gulp-concat-css");
const minifyjs = require("gulp-js-minify");
const concat = require("gulp-concat");
const sourcemaps = require("gulp-sourcemaps");
const jsFilesSources = "./Test/**/*.js";
const jsFileDestination = "./public/js";
const browserSync = require("browser-sync").create();
const watch = require('gulp-watch');


//Arus

gulp.task("minify", () => {
    return gulp
        .src("Test/block1/**/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("./build"));
});



//Rita

gulp.task("minifyCss", function() {
    return gulp
        .src("./app/concatcss/*")
        .pipe(cssMinify())
        .pipe(gulp.dest("./build/css"));
});


// Laura
// npm install --save-dev gulp-concat-css
gulp.task("cssconcat", function() {
    return gulp.src('app/autopreficss/**/*.css')
        .pipe(concat("style.css"))
        .pipe(gulp.dest("./app/concatcss"));
});

//Mariam
gulp.task("autoprefixer", function() {
    return gulp
        .src("Test/**/*.css")
        .pipe(
            autoprefixer(["last 15 versions", "> 1%", "ie 8"], { cascade: true })
        )
        .pipe(gulp.dest("app/autopreficss"));
});
//end Mariam's code
//-------------------------------| Artashes |-----------------------
gulp.task("minify-js", async() => {
    gulp
        .src("app/jsconcated/all.js")
        .pipe(minifyjs())
        .pipe(gulp.dest("./build/js"));
});

//Arman concat
gulp.task("jsconcat", function() {
    return gulp
        .src("Test/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(concat("all.js"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./app/jsconcated"));
});

//Arshak

gulp.task("imagemin", function() {
    return gulp
        .src(["Test/**/*{png,gif,jpg,jpeg,svg,ico}"])
        .pipe(imagemin())
        .pipe(flatten({ includeParents: 0 }))
        .pipe(gulp.dest("./build/img"));
});



gulp.task('watch', function() {
    watch('./test/**/*.html', './test/**/*.css', './test/**/*.js',
        gulp.parallel(browserSync.reload))
});

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./build/"
        },
    })
});
gulp.task('default', gulp.parallel('server', 'watch'));

gulp.task(
    "develop",
    gulp.series(
        "minify",
        "autoprefixer",
        "cssconcat",
        "minifyCss",
        "jsconcat",
        "minify-js",
        "imagemin"
    )
);