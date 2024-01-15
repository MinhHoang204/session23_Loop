let sum = 0;
for (int i = 1; i < number; i++)
{
if (number % i == 0)
{
sum += i;
}
}
return sum == number;
Console.Write("Nhập một số bất kỳ: ");
let number = int.Parse(Console.ReadLine());

if (IsPerfectNumber(number))
{
Console.WriteLine("{0} là số hoàn hảo.", number);
}
else
{
Console.WriteLine("{0} không phải là số hoàn hảo.", number);
}