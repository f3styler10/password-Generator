const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const specialchar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
const input = document.querySelector("#password");

const all = uppercase + lowercase + specialchar;

let password = "";

function generate(){

    const length = 12;
    let password = "";

    password+=uppercase[Math.floor(Math.random()*(uppercase.length))];
    password+=lowercase[Math.floor(Math.random()*(uppercase.length))];
    password+=specialchar[Math.floor(Math.random()*(uppercase.length))];
    password+=uppercase[Math.floor(Math.random()*(uppercase.length))];

   

    while(length >password.length )
    {
        password+=all[Math.floor(Math.random()*(all.length))];
        
    }

    input.value =password;
}

