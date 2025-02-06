//1.countdown using a while loop program
// while
// let count=10;

// while(count >=0)
// {
//   document.write(count +"<br>")
//   count--;
// }

// do while
// let count1=10;
// do{
//     document.write(count1 +"<br>")
//     count1--;
// }
// while(count1 >= 0)

//for
// let count2=10
// for(count2; count2>=0; count2--)
// {
//   document.write(count2 + "<br>")
// }

// 2.sum of numbers form 1 to 10 using a while loop
// 1.while
//  let a=1
//  let sum=0
//  while(a<=10)
//  {
//       sum+=a
//       a+=1
// }
//  document.write(sum +"<br>")

// 2.do while
// let b,sum1=0
// b=1
// do{
//      sum1=sum1+b;
//      b++;
// }while(b<=10)
// document.write(sum1)

// for
// let c
// var sum2=0
// c=1
// for(c; c<=10; c++)
// {
//      sum2=sum2+c
// }
// document.write(sum2+"<br>")

// 3. multiplication table for a given number using a while loop
// 1.while
// let n1=6
// let i1=1
// while(i1<=10)
// {
//      document.write(n1 + "*" + i1 + "=" +n1*i1 +"<br>")
//      i1++
// }

// 2.do while
// let n2=7
// let i2=1
// do
// {
//      document.write(n2 + "*" + i2 + "=" +n2*i2 +"<br>")
//      i2++
// }
// while(i2<=10)

// 3.for
// let n=5
// for(let i=1; i<=10; i++)
// {
//      document.write(n + "*" + i + "=" +n*i +"<br>")
// }

// 4.Guess the number game using a while loop





// 5.Generate the fibonacci sequence using a while loop
// 1.while
// let n1=0, n2=1 ,next_num, i=1
// let num =10
// document.write("fibonacci series:")
// while(i<=num)
// {
//      document.write("<br>"+n1)
//      next_num=n1+n2
//      n1=n2
//      n2=next_num
//      i++
// }

// 2.do while
// let n1=0, n2=1 ,next_num, i=1
// let num =10
// document.write("fibonacci series:")
// do
// {
//      document.write("<br>"+n1)
//      next_num=n1+n2
//      n1=n2
//      n2=next_num
//      i++
// }
// while(i<=num)

// 3.for loop
// let n1=0, n2=1 ,next_num, i
// let num = 10;
// document.write("fibonacci series:")
// for(i=1; i<=num; i++)
// {
//      document.write("<br>"+n1)
//      next_num=n1+n2
//      n1=n2
//      n2=next_num
// }

// 6.calculate factorial of a number using a while loop
// 1.while
// let n=7, i=1
// while(n>=1)
// {
//      i*=n
//      n--
// }
// document.write(i)

// 2.do while
// let n=7, i=1
// do{
//      i*=n
//      n--
// }
// while(n>=1)
// document.write(i)

// 3.for loop
// let n=5, i=1
// for(n; n>=1; n--)
// {
//      i*=n
// }
// document.write(i)

// 7.Cheack if a word is a palindrome using a while loop
// 1.while

// 8.calculate the power of a number using a while loop
// 1.while
// const a=1
// const power=10
// let num=2, i=0
// while(i<power)
// {
//      document.write(num + "<br>")
//      num*=a
//      i++
// }

// 2.do while
// const a=2
// const power=10
// let num=2, i=0
// do{
//      document.write(num + "<br>")
//      num*=a
//      i++
// }
// while(i<power)

// 3.for
// const a=2
// const power=10
// let num=2
// for(let i=0; i<power; i++)
// {
//      document.write(num + "<br>")
//      num*=a
// }

// 9.print  a pattern using a while loop
// 1.while
// let n=5 ,b
// let a=1
// while(a<=n)
// {
//      b=1
//      while(b<=a)
//      {
//           document.write(" * ")
//           b+=1
//      }
//      document.write("<br>")
//      a+=1
// }

// 2.do while
// let n = 5, b;
// let a = 1;
// do {
//   b = 1;
//   do {
//      document.write(" * ");
//      b += 1;
//   } while (b <= a);
//    document.write("<br>");
//    a += 1;
// } while (a <= n);

// 3.for
// let n=5
// for(let a=1; a<=n; a++)
// {
//      for(let b=1; b<=a; b++)
//      {
//           document.write(" * ")
//      }
//      document.write("<br>")
// }

/* break statement */
// 10.serch for a specific number using a for loop and break statement
// let a=[0,1,2,3,4,5,6,7,8,9]
// let user_number=9
// for(let i=0; i<=a.length; i++)
// {
//      if(a[i] == user_number)
//      {
//           document.write("number index:",i)
//           break;
//      }
// }

// 11.find the first odd number in a sequence using a while loop and break statement
//  {
//     let i = 0;
//     while (true) {
//       if (i % 2 !== 0) {
//         document.write("The first odd number is:"+ i);
//         break;
//       }
//       i++;
//     }
//   }

// 12.cheack if a number is prime using a for loop and break statment
// {
//      let number =29;
//      let i=2
//         for ( i = 2; i < number; i++) {
//              if (number % i == 0) {
//                  document.write(number+" This number is not prime number");
//                  break;
//              }
//          }
//          if (i == number) {
//              document.write(number+" This number is a prime number");
//          }
//      }
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

// 13.loop with a conditional break statment based on user input





/* continue statement */
// 14. skip printing odd number using a for loop and continue satatment
// for(let i=0; i<=15; i++)
// {
//      if(i %2 != 0)
//      {
//           continue
//      }
//      document.write(i + "<br>")
// }

// 15.skip multiples of 3 using a while loop and continue statement
// let i=0
// while(i<=21)
// {
//      if(i %3 !=0)
//      {
//           document.write(i + "<br>")
//      }
//      i++
//      continue
// }

//16.print even number in a specific range using a for loop and continue statement
{
  let m = 1;
  let n = 40;

  for (let i = m; i <= n; i++) {
    if (i % 2 !== 0) {
      continue;
    }
    document.write(i + "\n");
  }
}

/* 17.Skip numbers divisible by 5 using a do-while loop and continue statement */
// {
//     let i = 0,number=20
//     do {
//          i++;
//          if (i % 5 == 0) {
//           continue;
//       }
//       document.write(i + "<br>");
//     }
//     while(i<number);
// }
