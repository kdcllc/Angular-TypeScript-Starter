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

### Clone by branch
```
git clone -b typescript-workflow-with-gulp https://github.com/kdcllc/Angular-TypeScript-Starter.git
```

### Clone by tag
```
git clone -b 01-init https://github.com/kdcllc/Angular-TypeScript-Starter.git
```

## 01-init Step 1 - Gulp Workflow with TypeScript
You can get the code for the following article using tag: 01-init
[CodeProject.com published](http://www.codeproject.com/Tips/1075064/Gulp-Workflow-with-TypeScript)
### Introduction
JavaScript's standards are constantly changing and different versions of the ECMA Scripts have been adopted by various vendors at various times. Google Angular development team embraced TypeScript open-source project by Microsoft for their latest re-write of Angular2 framework. That leaves all of the existing investment of Angular in a state of transition. 
The goal of this article is to provide a first step of migrating existing Angular applications that utilize TypeScript to write Gulp to build workflows for your projects.
On a personal note, I prefer well-structured code with the ability to divide it into sections instead of being overwhelmed by DevOps code. TypeScript provides us with the ability to write classes for reuse within the Gulp Tasks.
This article assumes the basic knowledge of Node.js, Gulp and Angular Js. 
###Setting Up the Project
Please make sure that you have the following installed:
1.	Git for your operating system of choice
2.	Node.js
3.	Visual Studio Code
To get the source code for this article, use Git to clone it like so:
git clone -b typescript-workflow-with-gulp https://github.com/kdcllc/Angular-TypeScript-Starter.git
Once the project is downloaded and created on your machine, navigate to the project and run code . command.  This will open the source code within Visual Studio Code.
Next run the following:
1.	Npm install  - this will download all of the project dependencies and install them in the project directory
2.	Tsd install  –this will install all of the definitely typed files for the project
3.	Gulp – this will run the default Gulp task written in TypeScript
So, if you followed the steps listed above and were successful in executing your first Gulp tasks written in TypeScript  - Congratulations!

Now, let’s highlight the project setup.
First, npm package ts-node allows the execution of Gulpfile.ts.
Second, tsconfig.json file contains the TypeScript compilation settings.
Third, tools/typings/tsd folder contains all of the definitely typed files that we are going to use for our tooling.
The project contains a minimal amount of code but allows you to begin converting existing Gulp JavaScript based workflows to Gulp TypeScript workflows.

## 02-env Step 2 - Gulp Workflow with TypeScript Adding Support for Environments
###Introduction
In my previous tip, “Gulp Workflow with TypeScript”, I established the seed project that runs TypeScript Gulpfile.ts file natively instead of Gulpfile.js for the Gulp build workflows. This seed project is a great start for ASP.NET MVC, Angular, Express, etc. type projects. The basic setup will also work for Visual Studio.NET 2013-2015 and Visual Studio Code. In this tip, I am going to add custom build environment variables for the Gulp build system. These variables will be used in later tips to process different build actions based on the targeted environment.

###Background
Microsoft ASP.NET has a powerful optimization engine for JavaScript, CSS and other assets that developers can utilize for their web projects in order to bundle, optimize and build modern web applications. This optimization engine is based on the environment settings of Visual Studio.NET solution and the build framework is build-in into the tooling of the Visual Studio.NET. In open-source community, each project has to develop its own build tooling and methodology to support various build outputs. For our purposes, we will be focusing on development and production environment paths.

By default, Gulp command line interface (CLI) supports the ability to extend the input of variables through a command line. I am going to use YARGS npm package. To achieve the following command line syntax:

```
> Gulp --env prod
```

Since, we are going to use TypeScript for our functionality, please remember that while TypeScript cannot be compared to typing systems of languages, like C# or Java, it gives us the ability to declare types within our projects. The typing system is very flexible and allows us to write our own typed definitions that suit our needs or to use tsd utility to install predefined type definitions from open-source community.

Using the Code
To get things started, we need to clone the base code for this tip as follows:

```
git clone -b 01-init https://github.com/kdcllc/Angular-TypeScript-Starter.git
```
If you don’t have Git installed on your machine and would like to follow the steps, you can download the source here.

The project doesn’t come with its dependencies and we need to run the following commands:

```
> npm i
> tsd install
```
As you can see, we have to execute two different commands in order to get the project dependencies downloaded. What if there was a way to do it by running a single command. I like your critical thinking! There is actually a way to accomplish this in one command. Package.json file contains information pertaining to Node.js execution environment for the project and under the “scripts” node, you can add the following:

```
"postinstall": "tsd install"
```

When you run npm install, the tsd utility will also run after the install of npm dependencies are completed, hence the post install action.

Now, let’s tackle the TypeScript for Yargs npm library. According to Microsoft TypeScript documentation, the best way to write your own type definition files is by using the documentation on how to use the npm library and not by the source code of the library. Here is the basic usage of the library:

```
var argv = require('yargs').argv;
 if (argv.ships > 3 && argv.distance < 53.5) {
    console.log('Plunder more riffiwobbles!');
}  else {
    console.log('Retreat from the xupptumblers!');
}
```
As you can see, the argv variable has two properties, ships and distance, that are used to parse a specific logic.

In our case, we want to have the property env which provides us with the ability to pass a string that is set to “dev” or “prod”. I would express this business requirement in the following way with TypeScript:

```
/*
    Custom file definition to support projects specific inputs
*/
declare namespace yargs {
   var argv: InputDef;
}

interface InputDef {
    env: string;
}

declare module 'yargs' {
    export = yargs
}
```

We are going to add a new type definition file for yargs package by creating a new file yargs.ts in tools/typings/yards.ts and placing the code as noted above. While there are other type definition files available for this npm library, I prefer to write my own that is specific to my usage of the library.

At the time of this writing on this tip, I discovered a problem with TypeScript compiler. It recognizes the custom typing within the Visual Studio Code IDE but when you attempt to compile the code, it fails to load a module. If you want to track the issue, here is the link.

To resolve the problem with the compiler, we must add the type definition file reference by creating custom.d.ts file in the tools/typings/ directory. Place the following file reference:

```
/// <reference path="yargs.ts" />
```

As I understand, TypeScript compiler is looking for the files with *.d.ts extensions in order to resolve types. It might not be a bug but rather a designed undocumented feature.

At this point, we have our own basic type definition for YARGS library that works for what we are going to accomplish.

I prefer to structure my Gulp tasks and supporting files under tools/ directory in the project. Since we are going to add functionality pertaining to our application, create application.ts file under tools/utils directory. Then add the following code:

```
import {argv} from 'yargs';

export const ENVIRONMENTS = {
    DEVELOPMENT: 'dev',
    PRODUCTION: 'prod'
};

/*
    retreive environment variable that is passed into the system
*/
export function getEnvironment(): string {
    if (argv.env != null) {
    
        if (argv.env === ENVIRONMENTS.PRODUCTION) {
            return ENVIRONMENTS.PRODUCTION;
        } else {
            //ability to extend more environments from here
            return ENVIRONMENTS.DEVELOPMENT;
        }
    } else {
        return ENVIRONMENTS.DEVELOPMENT;
    }
}
```
As you can see, I resorted to the export function syntax instead of class. It is my preference to do so although we are not limited in using either/or. This is where the JavaScript dynamic nature creates many various ways to accomplish the same thing. What is important to notice in this snippet is that we import “yargs” library and Visual Studio Code recognizes it as a valid library. But, if we attempt to run our gulp task, we will get an error. That is due to not having a “yargs” library reference in our package.json file. To fix that problem, run the following command:

```
> npm i --save-dev yargs
```

This command will add reference to package.json file under devDependencies and it will also download “yargs” library into node_modules.

We are getting closer to wrapping up a working version of the Gulp task that reads and outputs the environment setting to the console.

To have a central configuration file for all of our future Gulp tasks, let us create a file under tools/ directory and name it “config.ts” and then paste the following:

```
import {getEnvironment} from './utils/application';
export const ENV = getEnvironment() 
```

Since we have our common functionality for retrieving environment settings, we can now modify our default task to the following:

```
import * as gulp from 'gulp';
import {ENV} from './tools/config';
gulp.task('default', done => {
    console.log('Enviroment is set to:', ENV);
});
```
Try to run the following commands to see the results:

```
>  gulp 
>  gulp &ndash;-env prod
```

You should see the output of the environment change with the change in the command line switch.

###Other info
Node.js is a powerful server-side JavaScript execution engine that runs many different operating systems by taking advantage of the Google Chrome 8 JavaScript execution engine. Thus, this project can work on any operating system that Node.js supports.

I am using Windows 10 to develop and test the code. Please feel free to leave any missing steps, etc. for other operating systems.

###In Conclusion
In this tip, we stepped through creating a custom reusable application utility to read environment targets based on YARGS library. We also wrote our own custom type definition. In the future tips, I hope to use this code to create different build paths based on the environments.

## Licence ##

The MIT License

Copyright (c) 2014-2016 [King David Consulting LLC](https://kingdavidconsulting.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.