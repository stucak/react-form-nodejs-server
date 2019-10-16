import axios from 'axios';

const helpers = {
    requestedValidation: function(param){
        return param !== "" ? true : false;
    },
    phoneValidation: function(param){
        let content = JSON.stringify(param);
        content = content.substring(1, content.length - 1);

        let validChars = '0123456789';
        let typeCheck = true;
        for(let i = 1; i < content.length; i++){
        if(validChars.indexOf(content[i]) < 0){ typeCheck = false; }
        }
        return content.substring(0, 1) === '+' &&  typeCheck ? true : false;
    },
    emailValidation: function(param){
        let content = JSON.stringify(param);
        content = content.substring(1, content.length - 1);
        let symbol = content.indexOf('@');
        let validation = true;
        if(symbol > -1){ 
        let parts = content.split("@");
        let local = parts[0];
        let domain = parts[1]
        let domainParts = domain.split(".");
        let validChars = 'abcdefghijklmnopqrstuvwxyz.0123456789_-@';

        if(local.length < 1 || domain.length < 3){ validation = false; } //There must be at least one char before @ and 3 chars after
        if(domain.indexOf(".") <= 0){ validation = false; } //Domain must include but not start with .
        for(let i = 0; i < local.length; i++){
            if(validChars.indexOf(local[i]) < 0){ validation = false; }
        }
        for(let j = 0; j < domain.length; j++){
            if(validChars.indexOf(domain[j]) < 0){ validation = false; }
        }//Email local and domain must only include valid chars
        if(domainParts[domainParts.length - 1].length < 2){ validation = false; } //Last 2 chars cannot be .
        }else { validation = false; }

        return validation ? true : false;
    },
    sendData: function(firstName, lastName, address, phone, email, isChecked){
        axios.post('http://localhost:4000/upload', {
            fName: firstName,
            lName: lastName,
            adr: address,
            phn: phone,
            em: email,
            isCh: isChecked
        },
        { headers: { 'Content-Type': 'application/json' } })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}

export default helpers;