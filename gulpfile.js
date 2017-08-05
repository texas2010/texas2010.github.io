// my Config
var config = {
  "working_path": "./docs",
  "default": {
    "server": "static"
  },
  "html": {
    "src": ["**/*.html"]
  }
};

var gulp         = require('gulp');
var browserSync  = require('browser-sync');

// Static Task
gulp.task('static', function() {
  return browserSync({
    server: {
      baseDir: config.working_path
      //directory: true
    },
    open: false
  });
});

// Watch Task
gulp.task('watch', function() {
  gulp.watch(config.working_path + '/' + config.html.src).on("change", browserSync.reload)
});

// Default Task
gulp.task('default', [config.default.server, 'watch']);