import { argv } from "process";
import path from "path";
import fs from 'fs/promises';
import { exec } from "child_process";

const messages: String[] = [];
const packageJson = {
    "name": "node_test",
    "version": "1.0.0",
    "description": "",
    "main": "index.ts",
    "scripts": {
      "node": "ts-node",
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
      "@types/node": "^17.0.21",
      "ts-node": "^10.7.0",
      "typescript": "^4.6.2"
    }
  }
if(argv.length > 2){
    const directory = path.join(__dirname, argv[2]);
    fs.mkdir(directory);
    process.chdir(directory);
    fs.mkdir('src');
    fs.mkdir('node_modules');
    fs.writeFile(path.join('src', 'index.ts'), "");
    fs.writeFile('package.json', JSON.stringify(packageJson));
    installNpmPackages();
    
    
}else{
    messages.push("please provide a path")
}

if(messages.length > 0){
    console.log(messages.join("\n"));
}

function installNpmPackages() {
    try {
        exec("npm install")
    } catch (error) {
        messages.push('Have you installed npm?')
    }
}

