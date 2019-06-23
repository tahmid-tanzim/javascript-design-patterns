/* Singleton Pattern: I have used singleton pattern for video player. */

var VideoPlayer = (function () {
    var instance;

    function init(d) {
        var trailerVideo = document.getElementById("trailer-video");
        var playBtn = document.getElementById("play-btn");
        var forwardBtn = document.getElementById("forward-btn");
        var rewindBtn = document.getElementById("rewind-btn");
        var duration = d || 5;

        return {
            play: function () {
                playBtn.addEventListener("click", function () {
                    if (trailerVideo.paused) {
                        trailerVideo.play();
                    } else {
                        trailerVideo.pause();
                    }
                }, false);
            },
            forward: function () {
                forwardBtn.addEventListener("click", function () {
                    trailerVideo.currentTime += duration;
                }, false);
            },
            rewind: function () {
                rewindBtn.addEventListener("click", function () {
                    trailerVideo.currentTime -= duration;
                }, false);
            }
        };
    }

    return {
        create: function (d) {
            if (typeof instance === 'undefined') {
                instance = init(d);
            }

            return instance;
        }
    };
})();

var video = VideoPlayer.create(7);

video.play();
video.forward();
video.rewind();
