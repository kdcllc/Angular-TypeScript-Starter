#AngularJS 1.x TypeScript Starter Template Project
The goal of this starter template is to offer a framework for Angular Applications that take full advantage of TypeScript from developing 
Angular Application code to developing Gulp Build workflow with Strongly typed definitions.

### Gulp workflow with TypeScript

This basic template uses TypeScript and Gulp workflow that lays the foundation moving forward to AngularJs 2.x

### Requirements
1. Favorite editor or development IDE - the code was developed using [Visual Studio Code](https://code.visualstudio.com/)
 
2. [Node.js](https://nodejs.org/)

### Project Configurations
* npm install
* tsd install
![alt tag](https://github.com/kdcllc/Angular-TypeScript-Starter/blob/typescript-workflow-with-gulp/content/tsd.install.1.PNG)
* gulp - uses default tasks to print out
![alt tag](https://github.com/kdcllc/Angular-TypeScript-Starter/blob/typescript-workflow-with-gulp/content/gulp.default.PNG)

### Project structure for definitely typed
In order for the Gulpfile.ts to function properly we must provide with TypeScript Definitions for the project. tsd.json contains basic references for the project.

```
|+.vscode
|    settings.json                         - specifies details for search exclusions and files from the view of the editor
|+-- tools
|       +-- typings                         
|               +-- tsd                    - tsd install command stores the definition files
|               +-- 
```
