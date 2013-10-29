#!/usr/bin/env node
var path = require( "path" ),
    fs = require( "fs" ),
    shell = require( "shelljs" ),
    rootdir = process.argv[ 2 ],
    wwwroot = rootdir + "/www",
    iconroot = wwwroot + "/res/icon/ios",
    screenroot = wwwroot + "/res/screen/ios";


try {
    fs.lstatSync( iconroot ).isDirectory();
    //icon renaming to Apple's specs
    shell.exec( "mv -f " + iconroot + "/icon-57.png" + " " + iconroot + "/icon.png", {silent:true} );
    shell.exec( "mv -f " + iconroot + "/icon-57-2x.png" + " " + iconroot + "/icon@2x.png", {silent:true} );
    shell.exec( "mv -f " + iconroot + "/icon-72-2x.png" + " " + iconroot + "/icon-72@2x.png", {silent:true} );
}
catch( e ) {
    console.log( "ios icon directory does not exist. nothing to do here." );
    process.exit(0);
}

try {
    fs.lstatSync( iconroot ).isDirectory();
    //splashscreen renaming to Apple's specs
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
catch( e ) {
    console.log( "ios screen directory does not exist. nothing to do here." );
    process.exit(0);
}

process.exit(0);
