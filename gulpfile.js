// 1. 导入第三方模块
const gulp = require('gulp')
const cssmin = require('gulp-cssmin')
const autoprefixer = require('gulp-autoprefixer')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const htmlmin = require('gulp-htmlmin')
const del = require('del')
const webserver = require('gulp-webserver')
// const sass = require('gulp-sass')

// 打包 css 的方法
const cssHandler = () => {
  return gulp.src('./src/css/*.css')
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
}

// 打包 sass 的方法
// const sassHandler = () => {
//   return gulp.src('./src/sass/*.scss')
//             .pipe(sass())
//             .pipe(autoprefixer())
//             .pipe(cssmin())
//             .pipe(gulp.dest('./dist/sass'))
// }

//打包 js 的方法
const jsHandler = () => {
  return gulp.src('./src/js/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

// 打包 html 的方法
const htmlHandler = () => {
  return gulp.src('./src/pages/*.html')
    .pipe(htmlmin({
      removeAttributeQuotes: true,
      removeComments: true,
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
    })) // 压缩
    .pipe(gulp.dest('./dist/pages'))
}

// 移动 image 文件的方法
const imgHandler = () => {
  return gulp.src('./src/images/**')
    .pipe(gulp.dest('./dist/images'))
}

// 移动 lib 文件的方法
const libHandler = () => {
  return gulp.src('./src/lib/**')
    .pipe(gulp.dest('./dist/lib'))
}

// 自动删除 dist 目录
const delHandler = () => {
  return del(['./dist'])
}

// 配置服务器
const serverHandler = () => {
  return gulp.src('./dist')
    .pipe(webserver({
      host: 'localhost',
      port: 8080,
      open: './pages/login.html',
      livereload: true,
      proxies: [
        {
          source: '/login', // 代理标识符
          target: 'http://localhost:80/wodexiangmu/login.php' // 你要代理的 apache 的地址
        },
        {
          source: '/dt',
          target: 'https://www.duitang.com/napi/blog/list/by_filter_id/'
        }

      ]
    }))
}


// 自动监控文件
const watchHandler = () => {
  gulp.watch('./src/css/*.css', cssHandler)
  gulp.watch('./src/js/*.js', jsHandler)
  gulp.watch('./src/pages/*.html', htmlHandler)
  gulp.watch('./src/lib/**', libHandler)
  gulp.watch('./src/images/**', imgHandler)
  // gulp.watch('./src/sass/*.scss', sassHandler)
}

// 默认任务
module.exports.default = gulp.series(
  delHandler,
  gulp.parallel(cssHandler, jsHandler, htmlHandler, imgHandler, libHandler),
  serverHandler,
  watchHandler
)
