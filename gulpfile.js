const gulp = require("gulp");
const cssMinify = require("gulp-css-minify");
const htmlmin = require("gulp-htmlmin");
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const flatten = require('gulp-flatten');
const minifyjs = require('gulp-js-minify');

const jsFilesSources = './Test/**/*.js'
const jsFileDestination = './public/js'

//Arus

gulp.task("minify", () => {
    return gulp
        .src("Test/**/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist"));
});


//Rita

gulp.task("minifyCss", function() {
    return gulp
        .src("public/css/**/*.css")
        .pipe(cssMinify())
        .pipe(gulp.dest("./public/css"))

})

//Mariam
gulp.task("autoprefixer", function() {
    return gulp
        .src('Test/**/*.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('public/css'))
});
//end Mariam's code

//Arshak

gulp.task("imagemin", function() {
    return gulp.src([
            'Test/**/*{png,gif,jpg,jpeg,svg,ico}',
        ])
        .pipe(imagemin())
        .pipe(flatten({ includeParents: 0 }))
        .pipe(gulp.dest('./public/img'))
})

//-------------------------------| Artashes |-----------------------
gulp.task('minify-js', async () => {
  gulp.src(jsFilesSources)
    .pipe(minifyjs())
    .pipe(gulp.dest(jsFileDestination));
});


gulp.task('develop', gulp.series('minify', 'autoprefixer', 'minifyCss', 'minify-js'))

