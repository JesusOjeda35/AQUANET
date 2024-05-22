function submitSurvey() {
    const form = document.getElementById("surveyForm");
    const formData = new FormData(form);
    const resultDiv = document.getElementById("result");

    let totalValue = 0;
    let q2Value = 0;
    let q3Value = 0;
    let q4Value = 0;
    let q5Value = 0;
    let q6Value = 0;
    let q7Value = 0;

    formData.forEach((value, key) => {
        const selectedValue = parseInt(value);
        switch (key) {
            case 'q1':
                totalValue += selectedValue;
                break;
            case 'q2':
                q2Value = selectedValue;
                break;
            case 'q3':
                q3Value = selectedValue;
                break;
            case 'q4':
                q4Value = selectedValue;
                break;
            case 'q5':
                q5Value = selectedValue;
                break;
            case 'q6':
                q6Value = selectedValue;
                break;
            case 'q7':
                q7Value = selectedValue;
                break;
        }
    });

    totalValue += q2Value * q4Value;

    totalValue += q3Value * q5Value;

    totalValue += q6Value * q7Value;



    resultDiv.style.display = "block";
    resultDiv.innerHTML = "El total de la encuesta es: " + totalValue + "L";
}




