// my Config
var config = {
  "working_path": "./",
  "default": {
    "server": "static"
  },
  "html": {
    "src": ["**/*.html"]
  },
  "css": {
    "src": ["**/*.css"]
  }
};

var gulp         = require('gulp');
var browserSync  = require('browser-sync');

// CSS Task
gulp.task('css', function() {
  return gulp.src(config.working_path + '/' + config.css.src);
});

// Static Task
gulp.task('static', function() {
  return browserSync({
    server: {
      baseDir: config.working_path
    },
    open: false
  });
});

// Watch Task
gulp.task('watch', function() {
  gulp.watch(config.working_path + '/' + config.html.src).on("change", browserSync.reload);
  gulp.watch(config.working_path + '/' + config.css.src, ['css', browserSync.reload]);
});

// Default Task
gulp.task('default', [config.default.server, 'watch']);