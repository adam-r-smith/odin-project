/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? (Odin Project requirement: 1000)
*/

var n = 600851475143;

var f = 2;

// we have tried all previous factors already so if f*f is greater than n we are done and n is prime
while(f*f <= n)
{
	if(n % f === 0)
	{
		// divide n by f as f is a factor
		// don't increment f, we will keep dividing f out until we can't anymore
		n = n / f;
	}
	else
	{
		// f is not a factor, so try the next one
		f = f + 1;
	}
	
	
}

console.log(n);