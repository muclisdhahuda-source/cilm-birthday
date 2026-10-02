const opening =
    document.getElementById("opening");

const main =
    document.getElementById("main");

const openButton =
    document.getElementById("openButton");

const music =
    document.getElementById("music");

const musicButton =
    document.getElementById("musicButton");

const typing =
    document.getElementById("typing");

const messageButton =
    document.getElementById("messageButton");

const extraMessage =
    document.getElementById("extraMessage");

const hearts =
    document.getElementById("hearts");



const message =
`Happy birthday to someone really special. ✨

I hope today brings you lots of happiness,
beautiful moments,
and many reasons to smile.

You deserve all the good things
that life has to offer. ❤️`;


let typingIndex = 0;



openButton.addEventListener(
    "click",
    function () {


        opening.classList.add("hide");


        setTimeout(
            function () {

                main.classList.add("show");

                startMusic();

                startTyping();

                heartBurst();

            },
            700
        );

    }
);


function startMusic() {

    music.volume = 0.7;

    music.play()
        .then(
            function () {

                musicButton.textContent =
                    "⏸️";

                musicButton.classList.add(
                    "playing"
                );

            }
        )
        .catch(
            function () {

                musicButton.textContent =
                    "🎵";

            }
        );

}



musicButton.addEventListener(
    "click",
    function () {

        if (music.paused) {

            music.play()
                .then(
                    function () {

                        musicButton.textContent =
                            "⏸️";

                        musicButton.classList.add(
                            "playing"
                        );

                    }
                );

        } else {

            music.pause();

            musicButton.textContent =
                "🎵";

            musicButton.classList.remove(
                "playing"
            );

        }

    }
);



function startTyping() {

    if (
        typingIndex <
        message.length
    ) {

        typing.textContent +=
            message.charAt(
                typingIndex
            );

        typingIndex++;

        setTimeout(
            startTyping,
            45
        );

    }

}


messageButton.addEventListener(
    "click",
    function () {

        extraMessage.classList.toggle(
            "show"
        );


        if (
            extraMessage.classList.contains(
                "show"
            )
        ) {

            messageButton.textContent =
                "Close message 💗";

        } else {

            messageButton.textContent =
                "There's more 💌";

        }

    }
);

function createHeart() {

    const heart =
        document.createElement(
            "div"
        );


    heart.className =
        "heart";


    const heartTypes = [
        "♡",
        "♥",
        "❤",
        "💕",
        "💗"
    ];


    const random =
        Math.floor(
            Math.random() *
            heartTypes.length
        );


    heart.textContent =
        heartTypes[random];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (
            12 +
            Math.random() * 25
        ) + "px";


    heart.style.animationDuration =
        (
            5 +
            Math.random() * 7
        ) + "s";


    hearts.appendChild(
        heart
    );


    setTimeout(
        function () {

            heart.remove();

        },
        13000
    );

}

setInterval(
    function () {

        createHeart();

    },
    500
);

function heartBurst() {

    for (
        let i = 0;
        i < 25;
        i++
    ) {

        setTimeout(
            function () {

                createHeart();

            },
            i * 60
        );

    }

}