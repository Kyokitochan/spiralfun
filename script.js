document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('background-video');
    const playLink = document.getElementById('play-video');
    const message = document.getElementById('message');

    // Ensure the video is not muted programmatically
    video.muted = false;

    playLink.addEventListener('click', (e) => {
        // The link will automatically take the user to the X post because of the href
        // We just need to play the video when the link is clicked
        video.play().then(() => {
            message.textContent = 'Video is playing!';
            playLink.style.display = 'none'; // Hide the link after playing
        }).catch((error) => {
            console.error('Error playing video:', error);
            message.textContent = 'Error playing video. Please try again.';
        });
    });
});