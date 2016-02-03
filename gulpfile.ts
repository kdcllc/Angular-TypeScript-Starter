import * as gulp from 'gulp';
import {ENV} from './tools/config';

gulp.task('default', done => {
    console.log(ENV);
});
