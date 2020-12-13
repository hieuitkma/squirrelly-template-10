import * as Sqrl from 'squirrelly'
import { leftContent } from '../../../views/content/leftContent'

class LeftFeature {
    constructor() {

    }

    get leftFeatureString() {
        return Sqrl.render(leftContent, {
            user: {
                some: {
                    data: {
                        property: {
                            nested: ': Hoi lam gi'
                        }
                    }
                }
            },
            someArray: [
                'Nguyen', 'Hoang', 'Nhat', 'Minh'
            ],
            mystring: `xxxxxxx`,
            icon1: `https://cdn.shopify.com/s/files/1/0335/3526/2856/t/1/assets/1591868760910_128x.png?v=10918119023775771933`,
            name1: `Ngguyễn Minh Hiếu`,
            desc1: `Our analyses are based on the actual facts and the market situation concerning your business area.`,
            icon2: `//cdn.shopify.com/s/files/1/0335/3526/2856/t/1/assets/1591868760921_128x.png?v=7663463272616397315`,
            name2: `Latest Modern Technology`,
            desc2: `Innovation is the bread and butter of the technology industry. We are constantly evolving to bring new way to work.`,
            icon3: `https://cdn.shopify.com/s/files/1/0335/3526/2856/t/1/assets/1591868760910_128x.png?v=10918119023775771933`,
            name3: `Creative Solutions`,
            desc3: `We can promptly provide creative solutions to solving any kind of your financial & business issues.`,
            icon4: `//cdn.shopify.com/s/files/1/0335/3526/2856/t/1/assets/1591868760921_128x.png?v=7663463272616397315`,
            name4: `Excellent Customer Service`,
            desc4: `We’re committed to providing the best customer service. We only hire friendly, positive people for helping customers.`,
        })
    }
}

export default LeftFeature;