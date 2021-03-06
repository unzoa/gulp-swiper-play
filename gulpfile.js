var gulp = require('gulp');

var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('app/sass/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});

gulp.task('watch', function(){
  // gulp.watch('app/sass/*.scss', ['sass']);
  gulp.watch('app/sass/*.scss', gulp.series('sass'));
})