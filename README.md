# ts-node-template

This repo is a boilerplate repo for creating typescript projects in a node environment.
After following along the instructions you have the basic functionality for running a typescript project with ts-node included to your project-folder.

# Description

This template repo contains basic debug launch configuration for VS Code using ```index.ts``` as entry point. If you don't use VS Code as IDE, remove the folder ```.vscode```. The file ```tsconfig.json``` includes basic configuration for the typescript compiler used by ```ts-node```.

# Installation

1. Clone this repo
2. Initialize npm:
```npm init -y```
2. Use the following command to install ```typescript``` and ```ts-node``` globally:
```npm i -g typescript ts-node```
3. Install ```typescript``` and ```ts-node``` as local dev-dependencies:
```npm i -D typescript ts-node```
4. Launch the scipt via ```ts-node index.ts```

Feel free to remove this ```README.md``` file after installation!
