var gulp = require('gulp');
//压缩
var uglify = require('gulp-uglify');
//重命名
var rename = require('gulp-rename');
//合并
var concat = require('gulp-concat');
//合并csss
var minifycss = require('gulp-minify-css')
//合并html
var minifyhtml = require('gulp-minify-html');
gulp.task('minify',function(){
    gulp.src(['js/base.js','js/controller/controller.js','js/directive/directive.js','js/service/service.js'])
    .pipe(concat('main.js'))
    .pipe(rename({
        suffix:'.niubi',
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});
//定义压缩css任务
gulp.task('minifycss',function(){
    gulp.src(['css/*.css'])
    .pipe(concat('main.css'))
    .pipe(rename({
        suffix:'.niubi',
    }))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css'));
})

//压缩html
gulp.task('minifyhtml',function(){
    gulp.src(['directive/*.html','template/*.html'])

});
//监听压缩的文件是否修改,实时压缩
// gulp.watch(['js/base.js','js/controller/controller.js','js/directive/directive.js','js/service/service.js'],['minify']);

gulp.task('default',['minify','minifycss']);

