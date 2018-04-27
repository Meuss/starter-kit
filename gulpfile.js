// ===================================
// Required node modules
// ===================================

const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const uglify = require('gulp-uglify');
const minify = require('gulp-clean-css');
const concat = require('gulp-concat');
const notify = require('gulp-notify');

// ===================================
// Javascript global task:
// ===================================

gulp.task('javascript', () => {
  gulp.src('assets/js/global/*.js')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(concat('script.js'))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(sourcemaps.write('.'))
    // .pipe(uglify())
    .pipe(gulp.dest('assets/min'))
    .pipe(reload({ stream: true }))
    .pipe(notify({ message: 'global js' }));
});

// ===================================
// Javascript single tast:
// ===================================

gulp.task('javascript-single', () => {
  gulp.src('assets/js/single/*.js')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(sourcemaps.write('.'))
    // .pipe(uglify())
    .pipe(gulp.dest('assets/min/single'))
    .pipe(reload({ stream: true }))
    .pipe(notify({ message: 'single js' }));
});

// ===================================
// Sass task
// ===================================

gulp.task('sass', () => {
  gulp.src('assets/sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer('>1%', 'ios_saf 8', 'ie 11'))
    // .pipe(minify())
    .pipe(gulp.dest('assets/min'))
    .pipe(reload({ stream: true }))
    .pipe(notify({ message: 'scss' }));
});

// ===================================
// PHP task
// ===================================

gulp.task('php', () => {
  gulp.src(['site/templates/*.php', 'site/snippets/*.php'])
    .pipe(reload({ stream: true }));
});

// ===================================
// Browser-sync task
// ===================================

gulp.task('browser-sync', () => {
  browserSync({
    proxy: "localhost:8888",
    browser: "google chrome"
  });
});

// ===================================
// Watch tasks
// ===================================

gulp.task('watch', () => {
  gulp.watch('assets/js/global/*.js', ['javascript']);
  gulp.watch('assets/js/single/*.js', ['javascript-single']);
  gulp.watch('assets/sass/**/*.scss', ['sass']);
  gulp.watch(['site/templates/*.php', 'site/snippets/*.php'], ['php']);
});

// ===================================
// Default task
// ===================================

gulp.task('default', ['javascript', 'javascript-single', 'sass', 'php', 'browser-sync', 'watch']);