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
  { directions: '', slide: 'up', src: bigTrout, title: 'Big Trout Brewing' },
  { directions: '', slide: 'down', src: durbar, title: 'Durbar' },
  { directions: '', slide: 'left', src: sushiNama, title: 'Sushi Nama' },
  {
    directions: '',
    slide: 'right',
    src: lionHeadCoffee,
    title: "Lion Head's Coffee"
  },
  { directions: '', slide: 'up', src: casaMexico, title: 'Casa Mexico' },
  { directions: '', slide: 'down', src: newHongKong, title: 'New Hong Kong' },
  { directions: '', slide: 'left', src: paellas, title: 'Paellas' },
  { directions: '', slide: 'right', src: ciaoMonte, title: 'Ciao Monte' }
];

export default restaurants;
