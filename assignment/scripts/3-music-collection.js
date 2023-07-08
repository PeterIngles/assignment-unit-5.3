musicCollection = [];
// Empty array for musicCollection

function addToCollection(title, artist, yearPublished){
    console.log('in addToCollection')
    // Create a function and conole log so we know we are inside it
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };
    musicCollection.push(album);
    return album;
    //Function creates an object with title, artist, and yearPublished and adds to the array musicCollection, and returns the album name
}

console.log(addToCollection("Punisher", "Phoebe Bridgers", 2020));
console.log(addToCollection("RTJ4", "Run the Jewels", 2020));
console.log(addToCollection("Stranger in the Alps", "Phoebe Bridgers", 2017));
console.log(addToCollection("Steel Train", "Steel Train", 2010));
console.log(addToCollection("Taylor Swift", "Midnights", 2022));
console.log(addToCollection("Los Campesinos!", "Hello Sadnes", 2011));
//Test the addToCollection function with 6 different real world albums

function showCollection(musicCollection){
    console.log("Number of albums in collection", musicCollection.length);
    for (let album of musicCollection){
        console.log(`${album.title} by ${album.artist} published in ${album.yearPublished}`)
    }
}
//Created a function to loop over the collection then display the albums information

showCollection(musicCollection)