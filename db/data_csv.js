const fs = require('fs');
const path = require('path');
const faker = require('faker');

const startTime = Date.now();


const writeStream = fs.createWriteStream('/Users/jingjing/Desktop/data.csv');
var count=0;


writeStream.write('listing_id, img_url');


function writeOneMillionTimes(writer, encoding, callback) {
  var i = 10000000;
  var startIndex=1;
  // var idIndex=0;
  write();
  function write() {
    var ok = true;
    do {
      i -= 1;
      if(count===5){
        count =0;
        startIndex +=1;
      }
      count +=1;
      // idIndex += 1;
      if (i === 0) {
        // last time!
        writer.write(`\n${startIndex},${faker.image.imageUrl()}`, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(`\n${startIndex},${faker.image.imageUrl()}`, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
}


writeOneMillionTimes(writeStream,'utf-8', ()=>{
  writeStream.end();
  const endTime = Date.now();
  console.log(endTime - startTime);
});
