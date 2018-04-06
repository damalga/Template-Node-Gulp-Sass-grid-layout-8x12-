const gulp = require ('gulp');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
  gulp.src('./sass/base.sass')
    .pipe(sass({
      outputStyle: 'expanded',
    }))
    .pipe(autoprefixer({
      versions: ['last 2 browsers']
    }))
    .pipe(gulp.dest('./css'))
});

gulp.task('default', function(){
  gulp.watch('./sass/*.sass', ['sass']);
  gulp.watch('./sass/*.scss', ['sass']);
});
