// Jsvascript Operators

/*
 1.Arithmetic operators
 2.Assignment  operators
 3.Comparison (Relational) operators
 4.Logical operators
 5.sepcial operators
*/

// Arithmetic operators

/*

1.    + (Addition)
2.    - (Subtraction)
3.    * (Multiplication)
4.    / (Division)
5.    % (Modulus)
6.    ++ (Increment)
7.    -- (Decrement)
8.    **(Exponentiation)

*/

//1. Arithmetic operators
{
    // var a=5
    // var b=5
    // var c=a**b
    // // 5*5*5*5*5
    // console.log(c)
}

// 2. ASSIGMENT OPERATOR
/*

= (Simple Assignment )

Ex: C = A + B will assign the value of A + B into C

+= (Add and Assignment)

Ex: C += A is equivalent to C = C + A

−= (Subtract and Assignment)

Ex: C -= A is equivalent to C = C - A

*= (Multiply and Assignment)

Ex: C *= A is equivalent to C = C * A

/= (Divide and Assignment)

Ex: C /= A is equivalent to C = C / A

%= (Modules and Assignment)

Ex: C %= A is equivalent to C = C % A

**= (Exponentiation and assignment)

Ex: C**=A IS equivalent to C=C**A

*/

{
    // var a=3
    // var b=3
    // var c=b+=a
    // var c=b-=a
    // var c=b*=a
    // var c=a%=b
    // var c=a/=b
    // var c=a**=b
    // console.log(c)
}

// 3. Comparison operators

/*

== (Equal)
Checks if the value of two operands are equal or not, if yes, then the condition becomes true.
Ex: (A == B) is not true.

=== (identical equel and same type)
The strict equality (===) operator checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.

!= (Not Equal)
Checks if the value of two operands are equal or not, if the values are not equal, then the condition becomes true.
Ex: (A != B) is true.


!==	(not equal value or not equal type)
Checks if the value of two operands are equal or not, if the values are not equal, then the condition becomes true.

> (Greater than)
Checks if the value of the left operand is greater than the value of the right operand, if yes, then the condition becomes true.
Ex: (A > B) is not true.

< (Less than)
Checks if the value of the left operand is less than the value of the right operand, if yes, then the condition becomes true.
Ex: (A < B) is true.

>= (Greater than or Equal to)
Checks if the value of the left operand is greater than or equal to the value of the right operand, if yes, then the condition becomes true.
Ex: (A >= B) is not true.

<= (Less than or Equal to)
Checks if the value of the left operand is less than or equal to the value of the right operand, if yes, then the condition becomes true.
Ex: (A <= B) is true.

*/
{
    // var a = 10;
    // var b = 11;
    
    // var c = a == b;
    // var c = a === b;
    // var c = a != b ;
    // var c = a !== b;
    // var c = a > b;
    // var c = a < b;
    // var c = a >= b;
    // var c = a <= b ; 

    // console.log(c);
}

// 4.logical operator
/*

&& (Logical AND)

If both the operands are non-zero, then the condition becomes true.
Ex: (A && B) is true.


|| (Logical OR)
If any of the two operands are non-zero, then the condition becomes true.
Ex: (A || B) is true.


! (Logical NOT)
Reverses the logical state of its operand. If a condition is true, then the Logical NOT operator will make it true.
Ex: ! (A && B) is false.

*/

// {
//    let  a = false
//    let  b = false
//    let  c = false
//    let  d = false

//    let  e = !(a && b || c || d)
//    console.log(e);
// }


// 5.Miscellaneous opertaor
/*
? tarnary operator
: (Conditional )
If Condition is true? Then value X : Otherwise value Y */
/*
((a > b) ? 100 : 200) => 200
((a < b) ? 100 : 200) => 100

*/

let aggriment = 0;
let age = aggriment == 0 ? "Login" : "Logout";
document.write(age);                               //true
// login