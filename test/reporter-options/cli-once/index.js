#!/usr/bin/env node

'use strict';

const os = require('os');
const path = require('path');
const exec = require('child_process').exec;

const fileName = `${Date.now()}.txt`;
const filePath = `${os.tmpdir()}/${fileName}`;
const libExecutable = path.resolve(__dirname, '../../../dist/bin/cli.js');

exec(`${libExecutable} -R mochawesome --reporter-options reportFilename=${filePath} test/reporter-options/spec.js`, {
    cwd: path.resolve(__dirname, '../../')
}, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    // assert file exists: fileName
});
