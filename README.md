cordova-hooks
---
Warning:  These are the first iterations of the scripts.  They can definitely be optimized and enhanced.

Since you are using **cordova-cli**, this means you already have `node` and `npm` installed.

These scripts take advantage of shell commands, so in order to run these, you must install [`shelljs`](https://github.com/arturadib/shelljs):

`npm install -g shelljs`

Installation
---
Copy the files in their corresponding directories found under `.cordova/hooks` in your project root directory.

Usage
---
Whenever you execute a specific `cordova` command, the appropriate hook script will be executed at the proper time.

License
---
cordova-hooks is provided under the terms of the [Unlicense](http://unlicense.org) license.

