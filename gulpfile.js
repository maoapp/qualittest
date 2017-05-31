var gulp=require('gulp');
var sass=require('gulp-sass');
var autoprefixer=require('gulp-autoprefixer');
var browserSync=require('browser-sync').create();
var uglify=require('gulp-uglify');



gulp.task('server',['sass'],function(){
    browserSync.init({
    server:"./app"
    });

    gulp.watch("app/scss/*scss",['sass']);
    gulp.watch("app/*html").on('change',browserSync.reload);
});


//Compile sass to css and add prefixers.
gulp.task('sass',function(){
    return gulp.src('app/scss/*.scss')
    .pipe(sass({
        outputStyle:'compressed'
    }))
    .pipe(autoprefixer({
        versions:['last 2 browsers']
    }))
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream());
});


//watcher
gulp.task('watch',function(){
    gulp.watch('app/scss/*.scss',['sass']);
});
