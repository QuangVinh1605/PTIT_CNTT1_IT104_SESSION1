function checkParity(num) {
    if (isNaN(num)) {
        console.log("vui long nhap so nguyen");
    } else {
        if (num % 2 == 0) {
            console.log(`so $(num) la so chan`);
        } else {
            console.log(`so $(num) la so le`);
            
        }
    }
}

console.log(checkParity(10));
console.log(checkParity(11));
