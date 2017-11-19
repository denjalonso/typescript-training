import { SocialNetwork } from './social-network'
import { Two } from './two';

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

new App();