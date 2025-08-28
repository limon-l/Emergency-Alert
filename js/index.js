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


// copy to clipboard

const copyButtons = document.querySelectorAll(".copy");

    copyButtons.forEach(button => {
        button.addEventListener("click", function () {
            const card = button.closest(".copy-box");

            const copyNumber = card.querySelector(".copy-text").innerText;

            navigator.clipboard.writeText(copyNumber).then(() => {
                alert("Text Copied! Phone No: " + copyNumber);
            })
        });
    });


// Call Event

const starCount = document.getElementById('starCount');
let starCounter = starCount.innerText;

const callBtn = document.getElementsByClassName('call-btn');

for (const el of callBtn) {
    el.addEventListener('click', function () {
        const callerID = el.parentNode.previousElementSibling.previousElementSibling.querySelector('.callerId').innerText;
        const callerTitle = el.parentNode.previousElementSibling.previousElementSibling.querySelector('.caller-title').innerText;
        const callingNumber = el.parentNode.previousElementSibling.querySelector('.copy-text').innerText;
        if (starCounter < 20) {
            alert(`!!! Insufficient Coin For Call !!!`);

        }
        else {
            starCounter = starCounter - 20;
            starCount.innerText = starCounter;
            alert("Calling " + callerID + " "+ callingNumber + "...");
        }
    })
}