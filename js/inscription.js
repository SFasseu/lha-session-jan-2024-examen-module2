function verif(){
    var form = document.getElementById("signup");
    
    let last_name = form.last_name;
    let first_name = form.first_name;
    let password = form.password;
    let gender = form.gender;
    let country = form.country;

    let isEmpty = false;

    //field last_name
    if(last_name.value == ""){
        isEmpty = true;
    }
    //field first_name
    if(first_name.value == ""){
        isEmpty = true;
    }

    //field first_name
    if(password.value == ""){
        isEmpty = true;
    }

    if(password.length != 8){
        alert('Entrer exactement 8 caractères pour le mot de passe');
    }

    if(!gender.checked){
        alert('Entrer exactement 8 caractères pour le mot de passe');
    }

    if(country.value == ""){
        alert('Entrer exactement 8 caractères pour le mot de passe');
    }


    if(isEmpty){
        alert('Remplir tous les champs');
    }
}

function textareaFocus(t){
    t.style.borderColor = 'green';
}