'use strict'

const {
  src,
  dest,
  watch,
  series
} = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')

function compile () {
  return src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('./lib'))
}

// function copyfont () {
//   return src('./src/fonts/**')
//     .pipe(cssmin())
//     .pipe(dest('./lib/fonts'))
// }

exports.watch = watch(['./src/*.scss'], compile)
// gulp.series 用于串行（ 顺序） 执行
exports.build = series(compile)
