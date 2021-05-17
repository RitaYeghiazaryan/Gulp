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

//Arus

gulp.task("minify", () => {
    return gulp
        .src("Test/block1/**/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("./public"));
});



//Rita

gulp.task("minifyCss", function() {
    return gulp
        .src("./public/concatcss/*")
        .pipe(cssMinify())
        .pipe(gulp.dest("./public/css"));
});


// Laura
// npm install --save-dev gulp-concat-css
gulp.task("cssconcat", function() {
    return gulp.src('Test/**/*.css')
        .pipe(concat("style.css"))
        .pipe(gulp.dest("./public/concatcss"));
});

//Mariam
gulp.task("autoprefixer", function() {
    return gulp
        .src("public/css/style.css")
        .pipe(
            autoprefixer({
                cascade: false,
            })
        )
        .pipe(gulp.dest("public/css"));
});
//end Mariam's code
//-------------------------------| Artashes |-----------------------
gulp.task("minify-js", async() => {
    gulp
        .src("public/jsconcated/all.js")
        .pipe(minifyjs())
        .pipe(gulp.dest("./public/js"));
});

//Arman concat
gulp.task("jsconcat", function() {
    return gulp
        .src("Test/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(concat("all.js"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./public/jsconcated"));
});

//Arshak

gulp.task("imagemin", function() {
    return gulp
        .src(["Test/**/*{png,gif,jpg,jpeg,svg,ico}"])
        .pipe(imagemin())
        .pipe(flatten({ includeParents: 0 }))
        .pipe(gulp.dest("./public/img"));
});

gulp.task(
    "develop",
    gulp.series(
        "minify",
        "cssconcat",
        "minifyCss",
        "autoprefixer",
        "jsconcat",
        "minify-js",

        // "imagemin"
    )
);