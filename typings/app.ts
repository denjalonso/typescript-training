import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { SocialNetwork } from './social-network'
import { Two } from './two';

Observable.interval(1000)
    .subscribe(x => console.log(x));

new Two();

class App implements SocialNetwork {
    constructor() {
        console.log('Im a app in the dist folder');
    }

    title = 'DenjAlonsoSocialNetwork';

    getUsers() {
        return [{ name: 'pepe' }];
    }
}

const app = new App();

console.log(_.isArray(app.getUsers()));