#!/usr/bin/env node
var path = require( "path" ),
    fs = require( "fs" ),
    shell = require( "shelljs" ),
    rootdir = process.argv[ 2 ],
    config = require(rootdir + "/.cordova/config.json"),
    wwwroot = rootdir + "/www",
    iconroot = wwwroot + "/res/icon/android",
    screenroot = wwwroot + "/res/screen/android",
    androidroot = rootdir + "/platforms/android";

try {
    fs.lstatSync( androidroot ).isDirectory();
}
catch( e ) {
    console.log( "android platform does not exist. nothing to do here." );
    process.exit(0);
}

// incase there are any spaces in the projectname
var projectname = config.name.replace(" ", "\\ ");

// for some reason, using shell.cp() would throw this error:
// "cp: copy File Sync: could not write to dest file (code=ENOENT)"
shell.exec( "cp -Rf " + iconroot + "/* " + androidroot + "/res" );
shell.exec( "cp -Rf " + screenroot + "/* " + androidroot + "/res" );

// remove the res and spec directories. really not needed in the project workspaces.
shell.rm( "-rf", androidroot + "/assets/www/res" );
shell.rm( "-rf", [ androidroot + "/assets/www/spec", androidroot + "/assets/www/spec.html" ] );

console.log( "Copied all android assets." );

process.exit(0);
