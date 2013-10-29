#!/usr/bin/env node
var path = require( "path" ),
    fs = require( "fs" ),
    shell = require( "shelljs" ),
    rootdir = process.argv[ 2 ],
    config = require(rootdir + "/.cordova/config.json"),
    iconroot = rootdir + "/assets/icon/ios",
    screenroot = rootdir + "/assets/screen/ios",
    iosroot = rootdir + "/platforms/ios";

try {
    fs.lstatSync( iosroot ).isDirectory();
}
catch( e ) {
    console.log( "ios platform does not exist. nothing to do here." );
    process.exit(0);
}

// incase there are any spaces in the projectname
var projectname = config.name.replace(" ", "\\ ");

// for some reason, using shell.cp() would throw this error:
// "cp: copy File Sync: could not write to dest file (code=ENOENT)"
shell.exec( "cp -Rf " + iconroot + "/*" + " " + iosroot + "/" + projectname + "/Resources/icons/" );
shell.exec( "cp -Rf " + screenroot + "/*" + " " + iosroot + "/" + projectname + "/Resources/splash/" );

console.log( "Copied all ios assets." );

process.exit(0);
