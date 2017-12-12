var assert = require('assert');
assert(0b101 === 5)
assert(0o10 === 8)
assert(0x10 === 16);


assert("中".length === 1)
assert("𠮷".length === 2)
assert("𠮷".match(/./u)[0].length === 2)
assert("𠮷" === "\uD842\uDFB7")
assert("𠮷" === "\u{20BB7}")
assert("𠮷".codePointAt(0) == 0x20BB7)
for (let codepoint of "𠮷中国") console.log(codepoint)



