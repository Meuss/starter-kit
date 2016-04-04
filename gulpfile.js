// ===================================
// Required node modules
// ===================================
var gulp            = require('gulp'),                      // use gulp
    sass            = require('gulp-sass'),                 // compiles sass
    plumber         = require('gulp-plumber'),              // prevent pipe breaking in gulp
    autoprefixer    = require('gulp-autoprefixer'),         // autoprefixes css
    browserSync     = require('browser-sync'),              // browser-sync ftw
    reload          = browserSync.reload,                   // variable to reload the browser
    uglify          = require('gulp-uglify'),               // uglifies Javascript
    minify          = require('gulp-clean-css'),            // minifies CSS
    concat          = require('gulp-concat');               // concatenates files

// ===================================
// Javascript task:
// ===================================

gulp.task('javascript', function(){
    gulp.src('assets/js/**/*.js')                           // Source: all .js files
    .pipe(plumber())                                        // Prevent pipe breaking if errors
    .pipe(concat('script.js'))                              // Concatenate into one file
    //.pipe(uglify())                                       // Uglify the file (Comment this while in development)
    .pipe(gulp.dest('assets/min'))                          // Destination folder
    .pipe(reload({stream:true}))                            // Reload the browser
});


// ===================================
// Sass task
// ===================================

gulp.task('sass', function(){
    gulp.src('assets/sass/style.sass')                      // Source: sass file that imports all others
    .pipe(plumber())                                        // Prevent pipe breaking if errors
    .pipe(sass())                                           // Compiles sass
    .pipe(autoprefixer('last 2 versions'))                  // Adds vendor prefixes to css
    //.pipe(minify())                                         // Minify the css (Comment this while in development)
    .pipe(gulp.dest('assets/min'))                          // Destination folder
    .pipe(reload({stream:true}))                            // Reload the browser
});

// ===================================
// PHP task
// ===================================

gulp.task('php', function(){
    gulp.src(['site/templates/*.php', 'site/snippets/*.php'])
    .pipe(reload({stream:true}));                           // Reload the browser
});

// ===================================
// Browser-sync task
// ===================================

gulp.task('browser-sync', function(){
    browserSync({
        //server:{
        //    baseDir: "./"
        //}
        proxy: "localhost:8888"
    });
});

// ===================================
// Watch tasks
// ===================================

gulp.task('watch', function(){
    gulp.watch('assets/js/*.js', ['javascript']);
    gulp.watch('assets/sass/**/*.sass', ['sass']);
    gulp.watch(['site/templates/*.php', 'site/snippets/*.php'], ['php']);
});

// ===================================
// Default task
// ===================================

gulp.task('default', ['javascript', 'sass',  'php', 'browser-sync', 'watch']);
