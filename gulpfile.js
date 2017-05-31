var gulp=require('gulp');
var sass=require('gulp-sass');
var autoprefixer=require('gulp-autoprefixer');


gulp.task('default',function(){
    console.log("Hola mundo");
})

gulp.task('sass',function(){
    return gulp.src('app/styles/main.scss')
    .pipe(sass({
        outputStyle:'expanded'
    }))
    .pipe(autoprefixer({
        versions:['last 2 browsers']
    }))
    .pipe(gulp.dest("app/css"));
});