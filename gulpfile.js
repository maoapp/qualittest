var gulp=require('gulp'),
    sass=require('gulp-sass'),
    autoprefixer=require('gulp-autoprefixer'),
    browserSync=require('browser-sync').create(),
    concat=require('gulp-concat'),
    uglify=require('gulp-uglify');
 
var scriptsPaths=[
        'app/vendor/jquery/dist/jquery.min.js',
        'app/vendor/bootstrap-css/js/bootstrap.js',
        'app/vendor/angular/angular.js',
        'app/vendor/angular-route/angular-route.min.js'        
    ];

var cssPaths=[
    "app/vendor/bootstrap-css/css/bootstrap.css",
    "app/vendor/components-font-awesome/css/font-awesome.css",
    "app/vendor/angular-bootstrap/ui-bootstrap-csp.css"
];
    

gulp.task('server',['sass'],function(){
    browserSync.init({
    server:"./app"
    });

    gulp.watch("app/scss/*scss",['sass']);
    gulp.watch('app/scripts/**/*js',['mixjs']);
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

gulp.task('mixjs',function(){
    gulp.src('app/scripts/**/*js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('app/dist'))    
});

gulp.task('mixcss',function(){
    gulp.src(cssPaths)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('app/dist'))
});

gulp.task('pluginsjs',function(){
    gulp.src(scriptsPaths)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('app/dist'))
})

//watcher
gulp.task('watch',function(){
    gulp.watch('app/scss/*.scss',['sass']);
    gulp.watch('app/scripts/**/*js',['mixjs']);
});
