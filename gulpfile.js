const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

const paths = {
    styles : {
        src : 'src/scss/**/*.scss',
        output : 'css/'
    }
};

function styles() {
    return gulp.src(paths.styles.src, { sourcemaps: false })
      .pipe(sass())
      .pipe(autoprefixer({cascade: false}))
      .pipe(minifyCSS())
      .pipe(rename({extname: '.min.css'}))
      .pipe(gulp.dest(paths.styles.output, { sourcemaps: false }))
}

function watch() {
    gulp.watch(paths.styles.src, styles);
}
  
const build = gulp.parallel(styles);
  
exports.styles = styles;
exports.watch = watch;
exports.build = build;
exports.default = watch;