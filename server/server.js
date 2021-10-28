let path = require('path');
let fs = require('fs');

let chirpPath =  path.join(__dirname, '../chirps.json');

fs.readFile(chirpPath, {
    encoding: "UTF-8"
}, (err, data) => {
    let chirp = JSON.parse(data);

    for (let i = 0; i < chirp.length; i++) {
    console.log(chirp[i].username);
    console.log(chirp[i].message);
    }
});

