import { IImageWithDialogProps } from '../../interfaces';

import bigTrout from './big-trout-brewing.jpeg';
import casaMexico from './casa-mexico.jpg';
import ciaoMonte from './ciao-monte.png';
import durbar from './durbar.jpeg';
import lionHeadCoffee from './lion-head-coffee.jpeg';
import newHongKong from './new-hong-kong.jpg';
import paellas from './paellas.png';
import sushiNama from './sushi-nama.jpg';

const restaurants: IImageWithDialogProps[] = [
  { directions: '', slide: 'up', src: bigTrout },
  { directions: '', slide: 'down', src: durbar },
  { directions: '', slide: 'left', src: sushiNama },
  { directions: '', slide: 'right', src: lionHeadCoffee },
  { directions: '', slide: 'up', src: casaMexico },
  { directions: '', slide: 'down', src: newHongKong },
  { directions: '', slide: 'left', src: paellas },
  { directions: '', slide: 'right', src: ciaoMonte }
];

export default restaurants;
