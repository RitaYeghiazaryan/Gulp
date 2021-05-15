const gulp = require("gulp");
//Arus
const htmlmin = require("gulp-htmlmin");

gulp.task("minify", () => {
  return gulp
    .src("Test/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"));
});

//Rita
const cssMinify = require('gulp-css-minify');
gulp.task('minifyCss', function () {
  return gulp.src('Test/**/*.css')
    .pipe(cssMinify())
    .pipe(gulp.dest('./public/css'));
});
