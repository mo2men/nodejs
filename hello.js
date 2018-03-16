#!/usr/bin/env nodejs

var fs =require("fs");
var outfile ="hello.txt";
var out="you can't miss with nodejs server :d";

fs.writeFileSync(outfile,out);

console.log("script: "+__filename+" write "+out+" in "+outfile);
