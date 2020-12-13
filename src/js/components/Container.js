import * as Sqrl from 'squirrelly';
import { container } from '../../views/container';
import CenterFeature from './centerFeature/CenterFeature';
import HeaderFeature from './headerFeature/HeaderFeture';
import LeftFeature from './leftFeature/LeftFeature';
import RightFeature from './rightFeature/rightFeature';

class ContainerFeature {
    constructor() {
        this.header = new HeaderFeature();
        this.left = new LeftFeature();
        this.center = new CenterFeature();
        this.right = new RightFeature();
    }

    get containerFeatureString() {
        return Sqrl.render(container, {
            header: this.header.headerFeatureString,
            obj: {
                listLeft: this.left.leftFeatureString,
                listCenter: this.center.centerFeatureString,
                listRight: this.right.rightFeatureString
            },
            num: 333
        })
    }
}

export default ContainerFeature;