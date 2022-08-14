// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
   return moviesArray.map(allDirectors => allDirectors.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(stevenDrama => stevenDrama.director === "Steven Spielberg" && stevenDrama.genre.includes("Drama") === true).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    return parseFloat(moviesArray.reduce(function (sum, currentValue) {
        return sum + currentValue.score / moviesArray.length // ERRO. Deve ser dividido pela quantidades de chaves "score" existentes
    }, 0).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const scoreDrama = moviesArray.filter(scoreDrama => scoreDrama.genre.includes("Drama") === true)
    return parseFloat(scoreDrama.reduce(function (sum, drama) {
        return sum + drama.score / scoreDrama.length
    }, 0).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const test = [
    { title: 'abc', year: 2002 },
    { title: 'bac', year: 1982 },
    { title: 'aab', year: 1982 }
  ]
function orderByYear(moviesArray) {
    const sortYear = [...moviesArray].sort(function (a,b) {
        if (a.year === b.year) {
            return [...moviesArray].sort((a, b) => a.title - b.title) // ERRO. Não está ordenando pelo title em caso de igualdade no year
        } else {
            return a.year - b.year
        }
    })
    return sortYear
}
console.log(orderByYear(test))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const test2 = [
    { title: 'aab' },
    { title: 'bab' },
    { title: 'acb' },
    { title: 'aaa' },
    { title: 'bbb' },
    { title: 'anc' },
    { title: 'kns' },
    { title: 'zds' },
    { title: 'pow' },
    { title: 'gda' },
    { title: 'res' },
    { title: 'ter' },
    { title: 'bca' },
    { title: 'ccc' },
    { title: 'bbt' },
    { title: 'qas' },
    { title: 'kmn' },
    { title: 'frt' },
    { title: 'afb' },
    { title: 'agb' },
    { title: 'apo' },
    { title: 'poa' },
    { title: 'cdf' },
    { title: 'sea' },
    { title: 'lom' },
    { title: 'acs' },
    { title: 'qas' },
    { title: 'mns' },
    { title: 'bvc' },
    { title: 'gha' },
    { title: 'lkj' },
    { title: 'era' },
    { title: 'ert' },
    { title: 'tex' },
    { title: 'zas' },
    { title: 'pol' }
  ]
function orderAlphabetically(moviesArray) {
    const top20 = []
    const sortTitle = [...moviesArray].sort((a, b) => a.title - b.title)
    for (let i = 0; i < 20; i++) {
        top20.push(sortTitle.title)
    }
    return sortTitle
}
console.log(orderAlphabetically(test2))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
