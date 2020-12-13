import * as Sqrl from 'squirrelly';
import { headerContent } from '../../../views/content/headerContent';

class HeaderFeature {
    constructor() {

    }

    get headerFeatureString() {
        return Sqrl.render(headerContent, {
            title: `FEATURE 10`
        })
    }
}

export default HeaderFeature;