const thumbNailContainer = document.getElementById('thumbNailContainer')
const displayImage = document.getElementById('displayImage')



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

    images.forEach(function (image) {
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
            createBigImage(image)
            
        })


        // make my images keyboard focusable
        imageElem.setAttribute('tabindex', '0')

        thumbNailContainer.appendChild(imageElem)

    })
}

createThumbnails()


// accept a param of an image object 
function createBigImage(img) {
    displayImage.innerHTML = ''
    const bigImage = document.createElement('img')

    bigImage.src = img.src
    bigImage.alt = img.alt
    displayImage.appendChild(bigImage)
}