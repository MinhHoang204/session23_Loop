let a,b;
cout << "Vui lòng nhập hai số nguyên dương a và b: ";
    cin >> a >> b;
    cout << "Các số chia hết cho " << b << " trong khoảng từ 1 đến " << a << " là: " << endl;
    for (let i = 1; i <= a; i++) {
        if (i % b == 0) {
            cout << i << endl;
        }
    }