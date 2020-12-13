import * as Sqrl from 'squirrelly';
import { centerContent } from '../../../views/content/centerContent';

class CenterFeature {
    constructor() {

    }

    get centerFeatureString() {
        return Sqrl.render(centerContent, {
            img: `https://cdn.shopify.com/s/files/1/0335/3526/2856/t/1/assets/1591867966066_1024x1024.png?v=16404095333790432278`,
            name: `WHY OUR FEATURES?`,
            desc: `We provide solutions to help clients to fully achieve their goals in the shortest time with the most affordable charge.`
        })
    }
}

export default CenterFeature;