var gulp = require('gulp');
var plug = require('gulp-load-plugins')();
 
gulp.task('react', function () {
  return gulp.src(['./*/*.jsx', '*.jsx'])
        .pipe(plug.react({harmony: false, es6module: true}))
        .pipe(gulp.dest('output'));
});
 
gulp.task('browserify', ['react'], function(){
  return gulp.src('output/*.js')
        .pipe(plug.browserify({insertGlobals : true }))
        .pipe(gulp.dest('output'));     
});
 
gulp.task('es2015', ['browserify'], function () {  
  return gulp.src('output/*.js')
        .pipe(plug.babel())
        .pipe(gulp.dest('output'));
});
 
gulp.task('test', ['es2015'], function () {
  return gulp.src('test', {read: false})
        .pipe(plug.shell(['mocha test/*test.js']));
});
    
gulp.task('build',['test'], function(){
  return gulp.src('./index.html')
        .pipe(plug.open(), {app: 'google-chrome'});
});