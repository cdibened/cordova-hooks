#!/usr/bin/env node
var path = require( "path" ),
    fs = require( "fs" ),
    shell = require( "shelljs" ),
    rootdir = process.argv[ 2 ],
    wwwroot = rootdir + "/www",
    iconroot = wwwroot + "/res/icon/android",
    screenroot = wwwroot + "/res/screen/android";


try {
    fs.lstatSync( iconroot ).isDirectory();
    //icon renaming to phonegap Android directories and filenames
    [ "", "-hdpi", "-ldpi", "-mdpi", "-xhdpi" ].forEach( function( item ) {
        shell.mkdir( "-p", iconroot + "/drawable" + item );
        shell.exec( "cp " + iconroot + "/*" + item + ".png " + iconroot + "/drawable" + item + "/icon.png", {silent:true} );
    });
    shell.rm( iconroot + "/*.png" );
}
catch( e ) {
    console.log( "android icon directory does not exist. nothing to do here." );
    process.exit(0);
}

try {
    fs.lstatSync( iconroot ).isDirectory();
    //splashscreen renaming to phonegap Android directories and filenames
    [ "", "-hdpi", "-ldpi", "-mdpi", "-xhdpi" ].forEach( function( item ) {
        shell.mkdir( "-p", screenroot + "/drawable" + item );
        shell.exec( "cp " + screenroot + "/*" + item + "-p*.png " + screenroot + "/drawable" + item + "/splash.png", {silent:true} );
        shell.exec( "cp " + screenroot + "/*" + item + "-l*.png " + screenroot + "/drawable" + item + "/splash-landscape.png", {silent:true} );
    });
    shell.rm( screenroot + "/*.png" );
}
catch( e ) {
    console.log( "android screen directory does not exist. nothing to do here." );
    process.exit(0);
}

process.exit(0);
