require("dotenv").config();
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const readStream = fs.createReadStream(path.resolve(process.env.INPUT));
const gZip = zlib.createGzip();
const writeStream = fs.createWriteStream(path.resolve(process.env.OUTPUT));

readStream.pipe(gZip).pipe(writeStream);
