module.exports = {
    entry: { main: './src/script.js' }
    output: {
        path: './dist/',
        filename: 'main.js'
    }
}
// указали первое место куда заглянет webpack — файл index.js в папке src