var gulp=require('gulp'),
    sass=require('gulp-sass'),
    autoprefixer=require('gulp-autoprefixer'),
    browserSync=require('browser-sync').create(),
    uglify=require('gulp-uglify'),
    inject=require('gulp-inject'),
    wiredep=require('wiredep');


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

//inject js and css
// gulp.task('inject',function(){
//     var sources=gulp.src(['./app/scripts/**/*.js','./app/css/**/*.css']);
//     return gulp.src('index.html',{
//         cwd:'./app'
//     })
//     .pipe(inject(sources,{
//         read:false,
//         ignorePath:'./app'
//     }))
//     .pipe(gulp.dest('./app'));
// })

// gulp.task('wiredep',function(){
//     gulp.src('./app/index.html')
//     .pipe(wiredep({
//         directory:'./app/vendor',
//         onError:function(err){
//             console.log(err.code);
//         }

//     }))
// })

//watcher
gulp.task('watch',function(){
    gulp.watch('app/scss/*.scss',['sass']);
    gulp.watch(['./app/scripts/**/*.js'],['inject']);
    gulp.watch(['./app/css/**/*.css'],['inject']);
    gulp.watch(['./bower.json'],['wiredep']);
});
