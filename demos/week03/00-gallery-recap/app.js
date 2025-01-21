const thumbNailContainer = document.getElementById('thumbNailContainer')
const displayImage = document.getElementById('displayImage')

const rightButton = document.getElementById('right')
const leftButton = document.getElementById('lefts')

// used for me to track what image is currently being displayed
let currentImageIndex = 0

let images = [
    {
        src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'California blooming like crazy after months of non-stop rains. Even deserts are covered with juicy bright flowers. The photo was made on Diamond Valley Lake a few days ago.'
    },
    {
        src: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'An image of a jungle'
    },
    {
        src: 'https://images.unsplash.com/photo-1502164980785-f8aa41d53611?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Found these walking out of work, what a surprise'
    }
]


function createThumbnails() {
    // we could use a loop? To create an element for each image object and append to page.

    images.forEach(function (image, index) {
        // for each of the objects, create an image tag
        let imageElem = document.createElement('img')

        // set src and alt properties of the imageEleme

        imageElem.src = image.src
        imageElem.alt = image.alt

        // we create a unique even listener 
        imageElem.addEventListener('click', function() {
            console.log(image)
            // when i click on a thumbnail, I'll call 'createBigImage' to set it as the main image
            // pass in the information of the image i clicked on as an argument.
            currentImageIndex = index
            console.log(`The current image is`, currentImageIndex)
            createBigImage(image)
            
        })


        // make my images keyboard focusable
        imageElem.setAttribute('tabindex', '0')

        thumbNailContainer.appendChild(imageElem)

    })
}

createThumbnails()

createBigImage(images[currentImageIndex])

// accept a param of an image object 
function createBigImage(img) {
    displayImage.innerHTML = ''
    const bigImage = document.createElement('img')

    bigImage.src = img.src
    bigImage.alt = img.alt
    displayImage.appendChild(bigImage)
}

// seperating out the logic into it's own function
function selectNextImage(number) {
    currentImageIndex += number
    if (currentImageIndex > images.length - 1) {
        currentImageIndex = 0 
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1
    }
    createBigImage(images[currentImageIndex])
}

rightButton.addEventListener('click', function() {selectNextImage(1)})
leftButton.addEventListener('click', function() {selectNextImage(-1)})

window.addEventListener('keydown', function(event) {
    console.log(event)
    if (event.key === 'ArrowLeft') {
        selectNextImage(-1)
    } else if (event.key === 'ArrowRight') {
        selectNextImage(1)
    }
})


// doing the logic inside the event listeners

rightButton.addEventListener('click', function() {
    // we want to change the big image to be +1 of the currentImageIndex
    currentImageIndex += 1
    if (currentImageIndex > images.length - 1) {
        currentImageIndex = 0
    }
    // call the function that actually changes my iamges
    createBigImage(images[currentImageIndex])
})

leftButton.addEventListener('click', function() {
    currentImageIndex += -1
    // call the function that actually changes my iamges
    if (currentImageIndex < 0) {
        // remember array.length - 1 always gives us the last element in the array.
        currentImageIndex = images.length - 1
    }
    createBigImage(images[currentImageIndex])
})