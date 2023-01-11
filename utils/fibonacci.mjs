/**
 *
 * Source: https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjdzKSev7_8AhWFR_EDHRjxB0sQFnoECBwQAQ&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFibonacci_number&usg=AOvVaw2dsgqNJhmIhwtavtJkxvAM
 */
export default function fibonacci(n) {
    console.log("fib", n);
    let fib = [0, 1];
    if (n < 2) return fib[n];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[n];
}

/*
console.log("f(0): ", fibonacci(0));
console.log("f(1): ", fibonacci(1));
console.log("f(1): ", fibonacci(1));
console.log("f(2): ", fibonacci(2));
console.log("f(3): ", fibonacci(3));
console.log("f(5): ", fibonacci(5));
*/