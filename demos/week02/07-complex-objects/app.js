
// complex objects


const myBookInfo = {
    name: `Sam's book`,
    yearReleased: 2001,
    authorInfo : {
        name: 'Sam',
        age: 25,
        goodWriter: false
    },
    genres: ['Mystery', 'Horror', 'Technical', 'Callback functions']
}

// What is the name? myBookInfo.name 
// What is the name of the author? myBookInfo.authorInfo.name
// Is the author a good writer? myBookInfo.authorInfo.goodWrite 
// What is the 3rd genre applied to the book? myBookInfo.genres[2]

// BONUS exercise - how woould I loop through the genres array and print each of them to the console?

let myBookGenres = myBookInfo.genres

for(let i = 0; i < myBookInfo.genres.length; i++) {
	console.log(myBookInfo.genres[i]);
}


myBookInfo.genres.forEach(function(genre, index) {
    console.log(genre, index)
})

for (genre of myBookInfo.genres) {
    console.log(genre)
}