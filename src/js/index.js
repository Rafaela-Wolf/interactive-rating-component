const submitButton = document.querySelector("#submit-btn");
const mainCard = document.querySelector(".main-card");
const messageCard = document.querySelector(".message-card");
const textNumber = document.querySelector(".text-number");

function feedbackNumberSelected() {
    const selectedNumbers = document.querySelectorAll(".number");

    selectedNumbers.forEach(number => {
        number.addEventListener("click", () => {
            selectedNumbers.forEach(num => num.classList.remove("selected"));
            number.classList.add("selected");
        });
    });
}

submitButton.addEventListener("click", () => {
    const selectedNumber = document.querySelector(".number.selected");
    if (selectedNumber) {
        const userChoice = selectedNumber.textContent;
        textNumber.textContent = `You selected ${userChoice} out of 5.`;
        messageCard.classList.remove("hide-card");
        mainCard.classList.add("hide-card");
    } else {
        const errorCard = document.querySelector('.error-container');
        errorCard.classList.remove("hide");
        setTimeout(() => {
            errorCard.classList.add("hide");
        }, 3000);
    }
});

feedbackNumberSelected();