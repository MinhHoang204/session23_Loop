let n = prompt ("Nhập số nguyên dương n:");
let a = 0, b = 1, c = 0, sum = 0;

console.log("Dãy Fibonacci nhỏ hơn n và có tổng giá trị nhỏ hơn n là:");
while (c < n) {
    if (c % 2 == 0) sum += c;
    cout << c << " ";
    a = b;
    b = c;
    c = a + b;
}
cout << endl << "Tổng giá trị của dãy Fibonacci là: " << sum << endl;
