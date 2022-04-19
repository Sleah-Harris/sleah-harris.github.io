let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
   constructor(title, rating, haveWatched) {
       this.title = title;
       this.rating = rating;
       this.haveWatched = haveWatched;
   } 
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);

    console.log("A new movie has been added");
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
let printMovies = () => {
    console.log("Printing all movies...");
    for (let i = 0; i < allMovies.length; i++) {
        console.log(allMovies[i].title + ", rating of " + allMovies[i].rating + ", havedWatched: " + allMovies[i].haveWatched);
    }

    console.log("\n You have " + allMovies.length + " in movies total.");
}


//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
let highRatings = (rating) => {
    let count = 0;
    console.log("Printing movies that have a higher rating than 3.5...");

    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].rating > rating) {
            count++;
            console.log(allMovies[i].title + " has a rating of " + allMovies[i].rating);
        }
    }

    console.log("\n In total, there are " + count + " matches");
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {

    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].title === title) {
            allMovies[i].haveWatched = !allMovies[i].haveWatched;
        }
    }
    console.log("Changing status of movie...");
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);