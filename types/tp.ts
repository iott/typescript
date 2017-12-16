let x: [string, number, string];
x = ["hello", 10]; // OK
x = ["hello", 10, 'string'];
x = ["hello", 10, 'string', 100];
// x = [10, "hello"]; // Error
