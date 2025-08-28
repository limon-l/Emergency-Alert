// favorite increment
const favorite = document.getElementsByClassName("favorite");

const loveCount = document.getElementById("loveCount");
let count = 0;
for (const el of favorite) {
    el.addEventListener("click", function () {
        count++;
        loveCount.innerText = count;
    });
}

// Copy button and increment count

const copyText = document.getElementsByClassName("copy");

const copyCount = document.getElementById("copy-counter");
let copyCounter = 0;
for (const el of copyText) {
    el.addEventListener("click", function () {
        copyCounter++;
        copyCount.innerText = copyCounter;

    }
    );
}
const copyButtons = document.querySelectorAll(".copy");

    copyButtons.forEach(button => {
        button.addEventListener("click", function () {
            const card = button.closest(".copy-box");

            const copyNumber = card.querySelector(".copy-text").innerText;

            navigator.clipboard.writeText(copyNumber).then(() => {
                alert("Text Copied! Phone No: " + copyNumber);
            }).catch(err => {
                console.error("Failed to copy: ", err);
            });
        });
    });