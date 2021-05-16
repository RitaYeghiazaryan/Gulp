const gulp = require("gulp");
const cssMinify = require("gulp-css-minify");
const htmlmin = require("gulp-htmlmin");
const autoprefixer = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");
const flatten = require("gulp-flatten");
const concatCss = require("gulp-concat-css");
const minifyjs = require("gulp-js-minify");

const jsFilesSources = "./Test/**/*.js";
const jsFileDestination = "./public/js";

//Arus

gulp.task("minify", () => {
  return gulp
    .src("Test/block1/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("./public/html_compress"));
});

//Rita

gulp.task("minifyCss", function () {
  return gulp
    .src("public/css/**/*.css")
    .pipe(cssMinify())
    .pipe(gulp.dest("./public/css"));
});

//Mariam
gulp.task("autoprefixer", function () {
  return gulp
    .src("Test/**/*.css")
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest("public/css"));
});
//end Mariam's code

//Arshak

gulp.task("imagemin", function () {
  return gulp
    .src(["Test/**/*{png,gif,jpg,jpeg,svg,ico}"])
    .pipe(imagemin())
    .pipe(flatten({ includeParents: 0 }))
    .pipe(gulp.dest("./public/img"));
});

// Laura
// npm install --save-dev gulp-concat-css
gulp.task("cssconcat", function () {
  return gulp
    .src([
      // gulp.src('./Test/**/*.css')
      "Test/10/*.css",
      "Test/block1/css/*.css",
      "Test/Block3/*.css",
      "Test/block4/css/*.css",
      "Test/Block6/*.scss",
      "Test/block13/*.css",
      "Test/block14/*.css",
      "Test/block15/Css/*.css",
      "Test/block2/*.css",
      "Test/block12/css/*.css",
      "Test/part5/*.css",
      "Test/part7/*.css",
      "Test/part8/*.css",
      "Test/part9/*.css",
      "Test/part11/*.css",
      "Test/part16/*.scss",
    ])
    .pipe(concatCss("all.css"))
    .pipe(gulp.dest("./public/concatcss"));
});

//-------------------------------| Artashes |-----------------------
gulp.task("minify-js", async () => {
  gulp.src(jsFilesSources).pipe(minifyjs()).pipe(gulp.dest(jsFileDestination));
});

gulp.task(
  "develop",
  gulp.series("minify", "autoprefixer", "minifyCss", "minify-js")
);
