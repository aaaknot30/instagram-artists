const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        home: "Zundert, Netherlands",
        postPhoto: "images/avatar-vangogh.jpg",
        mainPhoto: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        home: "Ornans, France",
        postPhoto: "images/avatar-courbet.jpg",
        mainPhoto: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        home: "Paris, France",
        postPhoto: "images/avatar-ducreux.jpg",
        mainPhoto: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const container = document.getElementById("container")
let artistPostPhoto = document.getElementById("postPhoto")
const artistName = document.getElementById("artist-name")
const artistHome = document.getElementById("artist-home")
let artistMainPhoto = document.getElementById("mainPhoto")
const heartIcon = document.getElementById("heart")
const artistLikes = document.getElementById("artist-likes")
const artistComment = document.getElementById("artist-comment")
const artistUsername = document.getElementById("artist-username")

let artistNumber = 1

function chanageArtist() {

    artistPostPhoto.innerHTML = `<img id="artist-post-photo" class="post-photo" src="${posts[artistNumber].postPhoto}">`
    artistName.innerHTML = posts[artistNumber].name
    artistHome.innerHTML = posts[artistNumber].home
    artistMainPhoto.innerHTML = `<img id="artist-main-photo" class="main-photo" src="${posts[artistNumber].mainPhoto}">`
    artistLikes.innerHTML = posts[artistNumber].likes
    artistComment.innerHTML = posts[artistNumber].comment
    artistUsername.innerHTML = posts[artistNumber].username

    artistNumber === 2 ? artistNumber = 0 : artistNumber++

}

container.addEventListener("click", function() {
    chanageArtist()
})

