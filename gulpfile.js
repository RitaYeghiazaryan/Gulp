const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cssMinify = require("gulp-css-minify");
const htmlmin = require("gulp-htmlmin");
 const autoprefixer = require("gulp-autoprefixer");
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
    .src("Test/**/*.css")
    .pipe(cssMinify())
    .pipe(gulp.dest("./public/css"))

})

// gulp.task("css_style",function(){
//   return gulp 
//   .src("public/css/**/*.css")
//   .pipe(autoprefixer({
//     browsers: ['last 2 versions'],
//     cascade:false

// }))
// .pipe(gulp.dest('prefix'))
//  })

