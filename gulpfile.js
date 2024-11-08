const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
//const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const cssnano = require('gulp-cssnano'); // Для мінімізації CSS



gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});


gulp.task('scss', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});


gulp.task('js', function() {
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

gulp.task('images', function() {
    return gulp.src('src/images/**/*.{jpg,jpeg,png,gif,svg}', {encoding: false})
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});


gulp.task('serve', function() {
    browserSync.init({
        server: './dist'
    });

    gulp.watch('src/*.html', gulp.series('html'));
    gulp.watch('src/scss/*.scss', gulp.series('scss'));
    gulp.watch('src/js/*.js', gulp.series('js'));
    gulp.watch('src/images/*', gulp.series('images'));
});


gulp.task('default', gulp.series('html', 'scss', 'js', 'images', 'serve'));