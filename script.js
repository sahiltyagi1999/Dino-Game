const dino = document.getElementById("dino");
        const cactus = document.getElementById("cactus");
        let score = 0;

        function jump() {
            if (dino.classList != "jump") {
                dino.classList.add("jump");
                setTimeout(function () {
                    dino.classList.remove("jump");
                }, 300);
            }
        }

        let checkAlive = setInterval(function () {
            let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
            let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

            if (cactusLeft > 0 && cactusLeft < 70 && dinoTop >= 143) {
                dino.style.animationPlayState = "paused";
                cactus.style.animationPlayState = "paused";
                alert("Game Over. Your Score: " + score);
                window.location.reload();
            } else if (cactusLeft < 0) {
                // Dino successfully jumped over the cactus
                score++;
            }
        }, 10);

        document.addEventListener("keydown", function (event) {
            jump();
})
