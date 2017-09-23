// my Config
var paths = {
  baseDir: './',
  default: {
    server: 'static',
    array: ['jade', 'static', 'watch']
  },
  html: {
    src: ['**/*.html']
  },
  css: {
    src: ['**/*.css']
  },
  jade: {
    json: './myconfig.json',
    src: ['./index.jade'],
    dest: './',
    watch: ['templates/**/*.jade']
  },
  scss: {
    src: ['scss/*.scss'],
    dest: 'css',
    watch: ['scss/**/*.scss']
  }
};

// Load Node Modules/Plugins
var del = require('del');
var gulp = require('gulp');
var beeper = require('beeper');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var gulpData = require('gulp-data');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

// Error Handler
function onError(err) {
  beeper();
  console.log('Name:', err.name);
  console.log('Reason:', err.reason);
  console.log('File:', err.file);
  console.log('Line:', err.line);
  console.log('Column:', err.column);
}

// CSS Task

// SASS Task
gulp.task('sass', function () {
  return gulp.src(paths.scss.src)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scss.dest))
});

// LESS Task

// Jade Task
gulp.task('jade', function () {
  return gulp.src(paths.jade.src)
    .pipe(gulpData(function (file) {
      return require(paths.jade.json);
    }))
    .pipe(jade({
      pretty: true,
    }))
    .pipe(gulp.dest(paths.jade.dest));
});

// Scripts Task
gulp.task('scripts', function () {
  return gulp.src(paths.js.src)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(concat('scripts.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.js.dest))
});

// Static Task
gulp.task('static', function () {
  return browserSync({
    server: {
      baseDir: paths.baseDir,
      directory: false
    },
    open: false,
    // notify: false
  });
});

// Nodemon Task

// Clean Task
gulp.task('clean', function () {
  return del(paths.clean);
});

// Watch Task
gulp.task('watch', function () {
  gulp.watch(paths.css.src).on('change', browserSync.reload);
  gulp.watch(paths.jade.watch, ['jade', browserSync.reload]);
  gulp.watch(paths.scss.watch, ['sass', browserSync.reload]);
});

// Default Task
gulp.task('default', paths.default.array);