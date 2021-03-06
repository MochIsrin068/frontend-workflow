//konfigurasi
var gulp = require("gulp"),
    sass =  require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    browserSync  = require("browser-sync"),//Local webserver dan sinkronisasi dengan browser. 
    webpack = require("webpack-stream");
    
//http://gulpjs.com/plugins/
//npmjs.com
//browsersync.io

// compile SCSS
gulp.task("sass", function(){
    return gulp.src("./resource/assets/sass/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("./public/assets/css"))
})

gulp.task("script", function(){
    return gulp.src("./resource/assets/js/app.js")
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest("./public/assets/js"));
})

//Default Serve Task. Local WebServer dan Sinkronisasi dengan Browser
gulp.task("serve", function(){
    browserSync.init({
        server:{
            baseDir: "./public/"
        }
    })    

    //Watch untuk memantau perubahan file
    gulp.watch("./resource/assets/sass/**/*.scss",['sass']);
    gulp.watch("./public/assets/css/**/*.css").on("change", browserSync.reload);

    gulp.watch("./resource/assets/js/**/*.js",['script']);        
    gulp.watch("./public/assets/js/app.js").on("change", browserSync.reload);

    gulp.watch("./public/*.html").on("change", browserSync.reload);
})