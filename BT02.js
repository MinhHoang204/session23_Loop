let n = prompt("Vui lòng nhập một số nguyên dương bất kỳ:");
let factorial = 1;
if (n < 0){
    console.log("Không thể tính giai thừa của số âm.");
} else {
    for (i = 1; i <= n; ++i) {
        factorial *= i;
    }
    console.log("Giai thừa của n là", factorial);
}