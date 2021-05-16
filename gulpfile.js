const gulp = require("gulp");
const cssMinify = require("gulp-css-minify");
const htmlmin = require("gulp-htmlmin");
const autoprefixer = require('gulp-autoprefixer');
//Arus
gulp.task("minify", () => {
  return gulp
    .src("Test/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"));
});


//Rita

gulp.task("minifyCss", function () {
  return gulp
    .src("public/css/**/*.css")
    .pipe(cssMinify())
    .pipe(gulp.dest("./public/css"))

})
   
//Mariam
gulp.task("autoprefixer", function () {
  return gulp
    .src('Test/**/*.css')
    .pipe(autoprefixer({
            cascade: false
    }))
    .pipe(gulp.dest('public/css'))
});
//end Mariam's code

gulp.task('develop', gulp.series('minify','autoprefixer', 'minifyCss'))