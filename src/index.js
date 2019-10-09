import WebpackC_2 from 'test-webpack-module-c';
import '@axa-ch/button';
import 'react-intl';

class WebpackB {

    constructor() {
        new WebpackC_2();
        console.log("In Class");
    }
}

export default WebpackB;