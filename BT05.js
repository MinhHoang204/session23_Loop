let randomNumber = random.Next(1, 11);
let userNumber = 0;
      
while (userNumber != randomNumber)      
{
Console.Write("Nhập một số từ 1 đến 10: ");
userNumber = int.Parse(Console.ReadLine());

if (userNumber > randomNumber)
{
Console.WriteLine("Số bạn nhập vào lớn hơn số ngẫu nhiên.");
}
else if (userNumber < randomNumber)
{
Console.WriteLine("Số bạn nhập vào nhỏ hơn số ngẫu nhiên.");
}
else
{
Console.WriteLine("Chúc mừng! Số bạn nhập vào trùng với số ngẫu nhiên.");
}
}    