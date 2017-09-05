// my Config
var config = {
  "baseDir": "./",
  "default": {
    "server": "static"
  },
  "html": {
    "src": ["**/*.html"]
  },
  "css": {
    "src": ["**/*.css"]
  },
  "jade": {
    "src": ["./index.jade"],
    "dest": "./"
  }
};

var gulp = require('gulp');
var browserSync = require('browser-sync');
var data =  require('gulp-data');
var jade = require('gulp-jade');

// CSS Task
gulp.task('css', function () {
  return gulp.src(config.baseDir + '/' + config.css.src);
});

// Jade Task
gulp.task('jade', function () {
  return gulp.src(config.jade.src)
    .pipe(data(function(file) {
      return require('./myconfig.json');
    }))
    .pipe(jade({
      pretty: true,
    }))
    .pipe(gulp.dest(config.jade.dest));
});

// Static Task
gulp.task('static', function () {
  return browserSync({
    server: {
      baseDir: config.baseDir
    },
    open: false
  });
});

// Watch Task
gulp.task('watch', function () {
  // gulp.watch(config.baseDir + '/' + config.html.src).on("change", browserSync.reload);
  gulp.watch(config.baseDir + '/' + config.css.src, ['css', browserSync.reload]);
  gulp.watch("./**/*.jade", ['jade', browserSync.reload]);
});

// Default Task
gulp.task('default', ['jade', config.default.server, 'watch']);