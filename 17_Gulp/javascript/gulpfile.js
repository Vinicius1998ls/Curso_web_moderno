const { series } = require('gulp')
const gulp = require('gulp')
const concat= require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb) {
    //seleciona os arquivos .js
    return gulp.src('src/**/*.js')
        //.pipe aplica transformações
        .pipe(babel({
            // impede que comentarios sejam transferidos
            comments: false,
            // presset "env" pega o javascript mais novo
            presets: ["env"]
        }))
        // uglify minimiza o codigo
        .pipe(uglify())
        // .on captura um determinado evento
        .on('error', err => console.log(err))
        // concatena os arquivos / 'codigo.min.js' arquivo que-
        // vai ser gerado
        .pipe(concat('codigo.min.js'))
        // define aonde o arquivo gerado vai ser salvo
        .pipe(gulp.dest('build'))

    // return cb()
}

function fim(cb) {
    console.log('Fim!!!')
    return cb()
}

exports.default = series(padrao, fim)