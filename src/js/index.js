function feedbackNumberSelected() {
    const selectedNumber = document.querySelectorAll('.number');
    let isFeedbcakSelected = true;

    selectedNumber.forEach(number => {
        number.addEventListener('click', () => {
            if (!number.classList.contains("selected")) {
                selectedNumber.forEach(num => num.classList.remove("selected"));
                number.classList.add("selected");
                isFeedbcakSelected = true;
            } else {
                number.classList.remove("selected");
                isFeedbcakSelected = false;
            }
        });
    });

    return isFeedbcakSelected
}

const submitButton = document.querySelector(".btn");

const hideFirstCard = document.querySelector(".main-card");

const showSecondCard = document.querySelector('.hidden-card');

if (feedbackNumberSelected()) {
    submitButton.addEventListener('click', () => {
        hideFirstCard.classList.add("hide-card");
        showSecondCard.classList.add("show-hidden-card");
    })
}
