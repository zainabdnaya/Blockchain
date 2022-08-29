
// See if the file exists
//var myLog = new File(file);
const fs = require("fs");

function hash(file)
{
    const path = file;
    if (fs.existsSync(path)) {
      console.log("exists:", path);
    } else {
      console.log("DOES NOT exist:", path);
    }
}

hash("res.txt")
