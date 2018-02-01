const gulp = require ('gulp');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
  gulp.src('./sass/base.sass')
    .pipe(sass({
      outputStyle: 'compressed',
    }))
    .pipe(autoprefixer({
      versions: ['last 2 browsers']
    }))
    .pipe(gulp.dest('./css'))
});

gulp.task('default', function(){
  gulp.watch('./sass/_colors.sass', './sass/_fonts.sass', './sass/_main.sass', './sass/_reset.sass', './sass/_scaffolding.sass' ['sass']);
});
