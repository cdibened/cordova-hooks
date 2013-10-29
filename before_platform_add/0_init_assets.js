#!/usr/bin/env node
var path = require( "path" ),
    fs = require( "fs" ),
    shell = require( "shelljs" ),
    rootdir = process.argv[ 2 ],
    wwwroot = rootdir + "/www",
    resroot = wwwroot + "/res";

console.log( process.argv );

try {
    fs.lstatSync( rootdir + "/.done" );
    console.log( "Initial setup already done." );
}
catch( e ) {
    shell.exec( "mv " + resroot + " " + rootdir + "/assets", {silent:true} );
    shell.exec( "rm -rf  " + resroot + "/spec" + rootdir + "/assets", {silent:true} );
    // remove the spec directory and file. really not needed in the project workspaces.
    shell.rm( "-rf", [ wwwroot + "/spec", wwwroot + "/spec.html" ] );
    shell.exec( "touch " + rootdir + "/.done", {silent:true} );
}

process.exit(0);
