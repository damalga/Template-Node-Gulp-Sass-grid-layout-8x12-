const gulp = require ('gulp');

// var sass = require('gulp-sass');
var scss = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// gulp.task('sass', function(){
//   gulp.src('./sass/base.sass')
//     .pipe(sass({
//       outputStyle: 'compressed',
//     }))
//     .pipe(autoprefixer({
//       versions: ['last 2 browsers']
//     }))
//     .pipe(gulp.dest('./css'))
// });

gulp.task('scss', function(){
  gulp.src('./scss/base.scss')
    .pipe(scss({
      outputStyle: 'compressed',
    }))
    .pipe(autoprefixer({
      versions: ['last 2 browsers']
    }))
    .pipe(gulp.dest('./css'))
});

gulp.task('default', function(){
  gulp.watch('./scss/*.scss', ['scss']);
});
