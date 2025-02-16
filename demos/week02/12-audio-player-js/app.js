// 1. get each of my buttons

const audio = document.getElementById('audio')
const displayTime = document.createElement('p')

const playButton = document.getElementById('playButton')
const pauseButton = document.getElementById('pauseButton')
const stopButton = document.getElementById('stopButton')
const skipFor = document.getElementById('skipForward')
const skipBack = document.getElementById('skipBack')

playButton.addEventListener('click', function() {
    // lists out all the properties avaible on an object
    console.dir(audio)
    audio.play()
    displayTimeFunc()
})

pauseButton.addEventListener('click', function() {
    audio.pause()
})

stopButton.addEventListener('click', function() {
    audio.pause()
    audio.currentTime = 0;
})

skipFor.addEventListener('click', function() {
    audio.currentTime += 10

    // audio.currentTime = audio.current + 10
})

skipBack.addEventListener('click', function() {
    audio.currentTime -= 10;
})

// 1. create an element

// we need to wait for the metadata to load in
// we're listening to see if that preloading 
audio.addEventListener('loadedmetadata', function() {
    // currentTime & duration 

    displayTime.innerText = `${audio.currentTime} / ${audio.duration}`
    document.body.appendChild(displayTime)

})



function displayTimeFunc() {
    const interval = setInterval(function() {
        const duration = audio.duration
        displayTime.innerText = `${Math.round(audio.currentTime)} / ${Math.round(duration)}`

        if (audio.currentTime === duration) {
            clearInterval(interval)
        }
    }, 1000)
}
