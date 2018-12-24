process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
var input = process.stdin.read();

var instruction = input.toString().trim();
if (input !== null) {
switch (instruction) {
  case "/exit":
  process.stdout.write('Quitting app!\n');
  console.log(process.versions.node);
  console.log(process.env.LANG);
  process.exit();

  case "":
  process.stderr.write('Wrong instruction!\n');
  console.log(process.versions.node);
  console.log(process.env.LANG);


}




    }
});