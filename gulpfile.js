const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cssMinify = require("gulp-css-minify");
const htmlmin = require("gulp-htmlmin");
const concatCss = require('gulp-concat-css');

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

// Laura
// npm install --save-dev gulp-concat-css
gulp.task('cssconcat', function () {
  return gulp.src([
  'Test/10/*.css',
  'Test/block1/css/*.css',
  'Test/Block3/*.css',
  'Test/block4/css/*.css',
  'Test/Block6/*.scss',
  'Test/block13/*.css',
  'Test/block14/*.css',
  'Test/block15/Css/*.css',
  'Test/block2/*.css',
  'Test/block12/css/*.css',
  'Test/part5/*.css',
  'Test/part7/*.css',
  'Test/part8/*.css',
  'Test/part9/*.css',
  'Test/part11/*.css',
  'Test/part16/*.scss'
])
  //gulp.src(['Test/**/*.css','Test/**/**/css/*.css'])
    .pipe(concatCss("all.css"))
    .pipe(gulp.dest('cssconcat/'));
});

// gulp.task("css_style",function(){
//   return gulp 
//   .src("public/css/**/*.css")
//   .pipe(autoprefixer({
//     browsers: ['last 2 versions'],
//     cascade:false

// }))
// .pipe(gulp.dest('prefix'))
//  })

