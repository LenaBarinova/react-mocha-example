// var gulp = require('gulp');
// var plug = require('gulp-load-plugins')();

// gulp.task('react', function () {
//   return gulp.src(['./**/*.jsx', '*.jsx'])
//         .pipe(plug.react({harmony: false, es6module: true}))
//         .pipe(gulp.dest('output'));
// });

// gulp.task('browserify', ['react'], function(){
//   return gulp.src('output/*.js')
//         .pipe(plug.browserify({insertGlobals : true }))
//         .pipe(gulp.dest('output'));
// });

// gulp.task('es2015', ['browserify'], function () {
//   return gulp.src('output/*.js')
//         .pipe(plug.babel())
//         .pipe(gulp.dest('output'));
// });

// gulp.task('test', ['es2015'], function () {
//   return gulp.src('test', {read: false})
//         .pipe(plug.shell(['mocha test/*test.js']));
// });

// gulp.task('build',['test'], function(){
//   return gulp.src('./index.html')
//         .pipe(plug.open(), {app: 'google-chrome'});
// });

var gulp = require('gulp');
var plug = require('gulp-load-plugins')({ lazy: true });

var browserify = require('browserify');
var babelify = require('babelify');
var babel = require('babel-core/register');
var source = require('vinyl-source-stream');

gulp.task('babelify', function () {
  return browserify({
    extensions: ['.jsx', '.js'],
    entries: './app.jsx',
  })
    .transform(babelify.configure({ ignore: /(node_modules)/ }))
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('app.js'))
    .pipe(gulp.dest('./output/'));
});

gulp.task('test', function () {
  return gulp.src('./test/**/*.js', { read: false })
    .pipe(plug.mocha({
      compilers: {
        js: babel
      }
    }));
});

gulp.task('build',['babelify', 'test'], function(){
  return gulp.src('./index.html')
        .pipe(plug.open(), {app: 'google-chrome'});
});