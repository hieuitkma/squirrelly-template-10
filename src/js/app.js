import '../styles/app.scss';
import ContainerFeature from './components/container';

console.log('Starting kmacoders dev !!!')

const container = new ContainerFeature();

document.getElementById('root').innerHTML += container.containerFeatureString;