const fs = require('fs');

const databuffer=fs.readFileSync('data.json');
const datastring=databuffer.toString();
const data=JSON.parse(datastring);
data.name="nikhil";
data.age=21;





fs.writeFileSync('data.json',JSON.stringify(data));
