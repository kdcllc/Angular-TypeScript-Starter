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