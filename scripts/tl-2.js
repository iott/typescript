function tag(strings, world, ss) {
  console.log(strings + world + ss);
}

let world = "Hello";

tag`string text line 1 \n string text line 2`;
tag`string text line 1 \n string text line 2${world}`;

tag`string text line 1${world} \n string text line 2${world}`;
