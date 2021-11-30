// items

const playerContainer = document.querySelector('.video__player');
const video = playerContainer.querySelector('.custom__player');

const bigPlayButton = playerContainer.querySelector('.video__big-play')
const smallPlayButton = playerContainer.querySelector('.video__play')
const muteButton = playerContainer.querySelector('.video__volume')
const volumeButton = playerContainer.querySelector('.video__volume')
const volumeProgress = playerContainer.querySelector('.volume__progress')
const videoProgress = playerContainer.querySelector('.video__progress')
const videoFullscreen = playerContainer.querySelector('.video__frame')

function videoAct() {
    if (video.paused) {
        video.play()
        bigPlayButton.classList.toggle('big-play-paused')
        smallPlayButton.classList.toggle('small-play-paused')
    } else {
        video.pause()
        bigPlayButton.classList.toggle('big-play-paused')
        smallPlayButton.classList.toggle('small-play-paused')
    }
}

function videoEnd() {
    bigPlayButton.classList.toggle('big-play-paused')
    smallPlayButton.classList.toggle('small-play-paused')
}

video.addEventListener('click', videoAct)
bigPlayButton.addEventListener('click', videoAct)
smallPlayButton.addEventListener('click', videoAct)

video.addEventListener('ended', videoEnd)

function mute() {
    if (volumeProgress.value == 0) {
        volumeProgress.value = 50
        volumeButton.classList.remove('muted')
    } else {
        volumeProgress.value = 0;
        volumeButton.classList.add('muted');
    }
    
    volumeProgress.setAttribute('style', `background: linear-gradient(to right, #710707 0%, #710707 ${volumeProgress.value}%, #C4C4C4 ${volumeProgress.value}%, #C4C4C4 100%);`)
    video.volume = volumeProgress.value / 100;
}

volumeButton.addEventListener('click', mute)

volumeProgress.addEventListener('input', function() {
    video.volume = volumeProgress.value / 100
    if (video.volume == 0) {
        volumeButton.classList.add('muted')
    } else {
        volumeButton.classList.remove('muted')
    }
})


video.addEventListener('timeupdate', function () {
    videoProgress.value = (video.currentTime / video.duration) * 100;
    videoProgress.setAttribute('style', `background: linear-gradient(to right, #710707 0%, #710707 ${videoProgress.value}%, #C4C4C4 ${videoProgress.value}%, #C4C4C4 100%);`)
})

videoProgress.addEventListener('input', function() {
    video.currentTime = (videoProgress.value * video.duration) / 100;
    videoProgress.setAttribute('style', `background: linear-gradient(to right, #710707 0%, #710707 ${videoProgress.value}%, #C4C4C4 ${videoProgress.value}%, #C4C4C4 100%);`)
})

videoFullscreen.addEventListener('click', function() {
    playerContainer.classList.toggle('fullscreen')
    document.body.classList.toggle('overflow')
    videoFullscreen.classList.toggle('full')
    video.classList.toggle('full')
    document.querySelector('.video__controls').classList.toggle('full')
    document.querySelector('.video__lenght-bar').classList.toggle('full')
    document.querySelector('.video__volume-bar').classList.toggle('full')
})



document.addEventListener('keydown', function(event) {
    if (event.code == 'Space' && !document.querySelector('.animate')) {
        event.preventDefault()
        videoAct()
    } else if (event.code == 'KeyM' && !document.querySelector('.animate')) {
        event.preventDefault()
        mute()
    } else if (event.code == 'KeyF' && !document.querySelector('.animate')) {
        event.preventDefault()
        playerContainer.classList.toggle('fullscreen')
        document.body.classList.toggle('overflow')
        videoFullscreen.classList.toggle('full')
        video.classList.toggle('full')
        document.querySelector('.video__controls').classList.toggle('full')
        document.querySelector('.video__lenght-bar').classList.toggle('full')
        document.querySelector('.video__volume-bar').classList.toggle('full')
    } else if (event.code == 'Period' && event.shiftKey && !document.querySelector('.animate')) {
        event.preventDefault()
        video.playbackRate += 0.25
    } else if (event.code == 'Comma' && event.shiftKey && !document.querySelector('.animate')) {
        event.preventDefault()
        video.playbackRate -= 0.25
    }
})