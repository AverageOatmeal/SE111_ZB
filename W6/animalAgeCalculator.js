var submitButton = document.querySelector("#get-age");

submitButton.addEventListener("click", (event)=>{
    event.preventDefault();
    calculateAnimalAge();
});

function calculateAnimalAge(){
    var firstName = document.querySelector("#first");
    var lastName = document.querySelector("#last");
    var age = document.querySelector("#age");
    var displayInfo = document.querySelector("#display-info");

    if(firstName.value === "" || lastName.value === "" || age.value === ""){
        alert("Please enter the missing data");
        return;
    }

    var dogYears = (Number(age.value) * 7).toFixed()
    var catYears = (Number(age.value) * 4.5).toFixed()

    displayInfo.innerHTML = `Here is your info:
                            <br>
                            <br>
                            Your first name is ${firstName} ${lastName}.
                            <br>
                            Your age in dog years is ${dogYears}.
                            <br>
                            Your age in cat years is ${catYears}.`
}