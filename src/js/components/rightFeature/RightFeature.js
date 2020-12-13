import * as Sqrl from 'squirrelly';
import { rightContent } from '../../../views/content/rightContent';

class RightFeature {
    constructor() {

    }

    get rightFeatureString() {
        return Sqrl.render(rightContent, {
            icon1: `https://cdn.shopify.com/s/files/1/0335/3526/2856/t/1/assets/1591868244081_32x.png?v=6578478937481095965`,
            name1: `On-time Service`,
            desc1: `Schedules maintenance or emergency services, we'll get the job done correctly, efficiently, and on-time.`,
            icon2: `https://cdn.shopify.com/s/files/1/0335/3526/2856/t/1/assets/1591868244063_32x.png?v=8694317117268892889`,
            name2: `Practical Survey`,
            desc2: `We find, explore and defind potential design risks to give you a clear road map of the devlopment and use case challenges.`,
            icon3: `https://cdn.shopify.com/s/files/1/0335/3526/2856/t/1/assets/1591868244081_32x.png?v=6578478937481095965`,
            name3: `Strong Contacts`,
            desc3: `With the strong contacts with experts & professionals in the field, our services are the best.`,
            icon4: `https://cdn.shopify.com/s/files/1/0335/3526/2856/t/1/assets/1591868244063_32x.png?v=8694317117268892889`,
            name4: `Professional Design`,
            desc4: `We prepare functional brief about the concept before completing final scheme to make sure it obtains planning approvals`,
        })
    }
}

export default RightFeature;