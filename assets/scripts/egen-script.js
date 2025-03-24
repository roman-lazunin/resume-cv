function phoneButtonFunction(){

    const phoneButton = document.getElementById("phoneButton")

    phoneButton.innerHTML = '072 021 42 34';
    phoneButton.onclick = deletePhoneButton;
}

function deletePhoneButton(){
    const phoneButton = document.getElementById("phoneButton")
    phoneButton.remove();
}