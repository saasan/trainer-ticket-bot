'use strict';
var del = require('del');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var paths = {
  files: [
    'img/*',
    'about.html',
    'index.html',
    'lv.html',
    'settings.html'
  ],
  out: 'release/',
  js: {
    src: [
      'js/common.js',
      'js/birthday.js',
      'js/util.js',
      'js/toast.js',
      'js/settings.js',
      'js/main.js'
    ],
    dest: 'release/js/',
    filename: 'mobamas-dojo.min.js'
  },
  clean: [
    'release/*'
  ]
};

gulp.task('clean', del.sync.bind(null, paths.clean, { dot: true }));

gulp.task('copy', function() {
  gulp.src(paths.files, { base: './' })
    .pipe(gulp.dest(paths.out));
});

gulp.task('js', function () {
  gulp.src(paths.js.src)
    .pipe(concat(paths.js.filename))
    .pipe(gulp.dest(paths.js.dest));
});

gulp.task('js-release', function () {
  gulp.src(paths.js.src)
    .pipe(concat(paths.js.filename))
    .pipe(uglify())
    .pipe(gulp.dest(paths.js.dest));
});

gulp.task('watch', function() {
  gulp.watch('*.html', ['copy']);
  gulp.watch('js/*.js', ['js']);
});

gulp.task('help', function() {
  var tasks = Object.keys(gulp.tasks).sort();

  console.log('');
  tasks.forEach(function(name) {
    console.log('  ' + name);
  });
  console.log('');
});

gulp.task('compile', ['clean', 'copy', 'js']);
gulp.task('release', ['clean', 'copy', 'js-release']);
gulp.task('default', ['compile']);
