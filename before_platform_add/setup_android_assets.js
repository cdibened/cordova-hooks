#!/usr/bin/env node
var path = require( "path" ),
    fs = require( "fs" ),
    shell = require( "shelljs" ),
    rootdir = process.argv[ 2 ],
    androidroot = rootdir + "/platforms/android",
    iconroot = rootdir + "/assets/icon/android",
    screenroot = rootdir + "/assets/screen/android";


try {
    fs.lstatSync( androidroot ).isDirectory();
    console.log( "android platform already exists. skipping." );
}
catch( e ) {
    //icon renaming to phonegap Android directories and filenames
    [ "", "-hdpi", "-ldpi", "-mdpi", "-xhdpi" ].forEach( function( item ) {
        shell.mkdir( "-p", iconroot + "/drawable" + item );
        shell.exec( "cp " + iconroot + "/*" + item + ".png " + iconroot + "/drawable" + item + "/icon.png", {silent:true} );
    });
    shell.rm( iconroot + "/*.png" );

    //splashscreen renaming to phonegap Android directories and filenames
    [ "", "-hdpi", "-ldpi", "-mdpi", "-xhdpi" ].forEach( function( item ) {
        shell.mkdir( "-p", screenroot + "/drawable" + item );
        shell.exec( "cp " + screenroot + "/*" + item + "-p*.png " + screenroot + "/drawable" + item + "/splash.png", {silent:true} );
        shell.exec( "cp " + screenroot + "/*" + item + "-l*.png " + screenroot + "/drawable" + item + "/splash_landscape.png", {silent:true} );
    });
    shell.rm( screenroot + "/*.png" );

}

process.exit(0);
