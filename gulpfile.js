let gulp = require('gulp')
let imagemin = require('gulp-imagemin')
let clean = require('gulp-clean')

gulp.task('copy', ['clean'],  ()=>{
    return gulp.src('src/**/*')
        .pipe(gulp.dest('dist'))
})

gulp.task('clean', () => {
    return gulp.src('dist')
        .pipe(clean())
})

gulp.task('build-img', ['copy'], ()=>{
    gulp.src('dist/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
})
