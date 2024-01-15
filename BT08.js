if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
let n = prompt ("Nhập số nguyên dương n:");
console.log("Các số nguyên tố nhỏ hơn n là:");
for (let i = 2; i < n; i++) {
    if (isPrime(i)) cout << i << " ";
}