import WebpackC_2 from 'test-webpack-module-c';

class WebpackB {

    constructor() {
        new WebpackC_2();
        console.log("In Class");
    }
}

export default WebpackB;