document.addEventListener("DOMContentLoaded", function() {
    const steps = document.querySelectorAll(".step");
    let currentStep = 0;

    steps[currentStep].style.display = "block";
    function validateSelection(stepIndex) {
        const select = steps[stepIndex].querySelector('select');
        if (select && select.value === "") {
            alert("Por favor, seleccione una cuenta.");
            return false;
        }
        return true;
    }

    document.querySelectorAll(".next-step").forEach(button => {
        button.addEventListener("click", () => {
            if (validateSelection(currentStep)) {
                steps[currentStep].style.display = "none";
                currentStep = (currentStep + 1) % steps.length;
                steps[currentStep].style.display = "block";
            }
        });
    });

    document.querySelectorAll(".prev-step").forEach(button => {
        button.addEventListener("click", () => {
            steps[currentStep].style.display = "none";
            currentStep = (currentStep - 1 + steps.length) % steps.length;
            steps[currentStep].style.display = "block";
        });
    });
});
