#!/usr/bin/env node
var path = require( "path" ),
    fs = require( "fs" ),
    shell = require( "shelljs" ),
    rootdir = process.argv[ 2 ],
    iosroot = rootdir + "/platforms/ios",
    iconroot = rootdir + "/assets/icon/ios",
    screenroot = rootdir + "/assets/screen/ios";

try {
    fs.lstatSync( iosroot ).isDirectory();
    console.log( "ios platform already exists. skipping.");
}
catch( e ) {
    //icon renaming
    shell.exec( "mv -f " + iconroot + "/icon-57.png" + " " + iconroot + "/icon.png", {silent:true} );
    shell.exec( "mv -f " + iconroot + "/icon-57-2x.png" + " " + iconroot + "/icon@2x.png", {silent:true} );
    shell.exec( "mv -f " + iconroot + "/icon-72-2x.png" + " " + iconroot + "/icon-72@2x.png", {silent:true} );

    //splashscreen renaming
    shell.exec( "mv -f " + screenroot + "/screen-ipad-landscape.png" + " " + screenroot + "/Default-Landscape~ipad.png", {silent:true} );
    shell.exec( "mv -f " + screenroot + "/screen-ipad-portrait.png" + " " + screenroot + "/Default-Portrait~ipad.png", {silent:true} );
    shell.exec( "mv -f " + screenroot + "/screen-ipad-landscape-2x.png" + " " + screenroot + "/Default-Landscape@2x~ipad.png", {silent:true} );
    shell.exec( "mv -f " + screenroot + "/screen-ipad-portrait-2x.png" + " " + screenroot + "/Default-Portrait@2x~ipad.png", {silent:true} );
    shell.exec( "mv -f " + screenroot + "/screen-iphone-portrait.png" + " " + screenroot + "/Default~iphone.png", {silent:true} );
    shell.exec( "mv -f " + screenroot + "/screen-iphone-landscape.png" + " " + screenroot + "/Default-Landscape~iphone.png", {silent:true} );
    shell.exec( "mv -f " + screenroot + "/screen-iphone-landscape-2x.png" + " " + screenroot + "/Default-Landscape@2x~iphone.png", {silent:true} );
    shell.exec( "mv -f " + screenroot + "/screen-iphone-portrait-2x.png" + " " + screenroot + "/Default@2x~iphone.png", {silent:true} );
    shell.exec( "mv -f " + screenroot + "/screen-iphone-portrait-568h-2x.png" + " " + screenroot + "/Default-568h@2x~iphone.png", {silent:true} );
}

process.exit(0);
