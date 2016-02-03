
import {argv} from 'yargs';

export const ENVIRONMENTS = {
    DEVELOPMENT: 'dev',
    PRODUCTION: 'prod'
};

/*
    retreive enviroment variable that is passed into the system
*/
export function getEnvironment(): string {
    if (argv.env != null) {
        if (argv.env.prod === ENVIRONMENTS.PRODUCTION) {
            return ENVIRONMENTS.PRODUCTION;
        } else {
            //ability to extend more enviroments from here
            return ENVIRONMENTS.DEVELOPMENT;
        }
    } else {
        return ENVIRONMENTS.DEVELOPMENT;
    }
}
