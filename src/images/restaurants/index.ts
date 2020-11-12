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
  {
    cuisine: ['American'],
    messages: {
      main: `Big Trout Brewing is a locally owned and operated brewpub,
             offering a wide selection of craft beers, tasty bites and 
             a comfortable environment, as well as root beer and mango 
             soda made in-house.`,
      more: [
        `Featuring a state-of-the-art brew house, called a High Efficiency Brewing System (HEBS), our brewery offers several environmental and operational efficiencies, including reducing water waste and increasing our extraction rate so we can get the most out of our grain.`,
        `We are excited to be able to do our part for the environment, the rivers we love to fish and this wonderful community.`
      ]
    },
    directions: '',
    slide: 'up',
    src: bigTrout,
    title: 'Big Trout Brewing'
  },
  {
    cuisine: ['Nepalese', 'Indian'],
    messages: {
      main: `Durbar Nepalese & Indian Bistro has brought Indian food back to the Winter Park area.
             Durbar incorporates quality ingredients in their menu, offering family-style foods which 
             are prepared with sensitivity and care.`,
      more: [
        `Durbar specializes in homemade, authentic 
      selections from Nepal and India including appetizers, soup and salad, momos, tandoori breads, 
      whole wheat breads, rice, tandoori sizzlers, entrees, and vegetarian entrees.`,
        `  
      Their chef special lunch Thali is perfect for a social lunch or a business meeting. 
      Durbar offers space for small gatherings and groups.`,
        `Call ahead to arrange.`
      ]
    },
    directions: '',
    slide: 'down',
    src: durbar,
    title: 'Durbar'
  },
  {
    cuisine: ['Japanese', 'Korean'],
    messages: {
      main: `Sushi Nama is an Asian flair restaurant with a menu consisting of a variety of sushi rolls, 
             including hand rolls, as well as noodles and Japanese and Korean grill entrees.`,
      more: [
        `Sushi Nama takes pride in delivering simple, innovative and freshly prepared sushi, 
        while using only the best ingredients with all hand cut and prepared dishes.`,
        `Enjoy signature cocktails and a sake bar, as well as featuring Japanese whiskey and beer.`,
        `The ambiance is welcoming, comfortable and memorable, featuring a large Japanese-inspired wall mural.`,
        `Join us for our Sushi classes.  More info to come!`
      ]
    },
    directions: '',
    slide: 'left',
    src: sushiNama,
    title: 'Sushi Nama'
  },
  {
    cuisine: ['Cafe'],
    messages: {
      main: `Lion Head Coffee is located in the new transportation center which is next to Big Trout Brewing.
             They are open daily (except Mondays) from 8am-2pm and offer a selection of coffee and tea, 
             an assortment of baked goods and amazing breakfast burritos.`
    },
    directions: '',
    slide: 'right',
    src: lionHeadCoffee,
    title: "Lion Head's Coffee"
  },
  {
    cuisine: ['Mexican'],
    messages: {
      main: `Everything is made from scratch from the homemade chips and salsa, to the fresh, warm tortillas.
             House specialties include the white jalapeño queso dip, traditional street tacos, pork carnitas,
             and seafood, as well as unique items such as beef tongue.`,
      more: [
        `Casa Mexico has quickly established itself as a place for locals and visitors alike to eat, drink, and relax in a warm and welcoming atmosphere.`,
        `Featuring recipes that use the freshest ingredients, Casa Mexico captures the authentic flavors of Mexico.`,
        `The complex flavors from the kitchen are complimented with creative drinks from the bar.`,
        `Unwind in the festive atmosphere with the BEST Margarita’s you’ll find anywhere.`,
        `Owner and Chef Esteban Rocha and his wife Imelda have been in the restaurant business for 28 years.`,
        `Gluten Free Menu available.`
      ]
    },
    directions: '',
    slide: 'up',
    src: casaMexico,
    title: 'Casa Mexico'
  },
  {
    cuisine: ['Chinese'],
    messages: {
      main: `Experience an Asian Bistro featuring Mandarin, Szechuan, Japanese and Vietnamese cuisine 
             and using only the freshest, high quality ingredients. If you’re looking for great food 
             at a good value, this is the place.`,
      more: [
        `The spacious dining room can accommodate large groups, 
      families, as well as small intimate parties.`,
        `Don’t miss the daily lunch specials.`,
        `New Hong Kong serves lunch and dinner daily, except Tuesdays and was voted 
      “Best Lunch & Service” Local Choice Awards two years in a row.`
      ]
    },
    directions: '',
    slide: 'down',
    src: newHongKong,
    title: 'New Hong Kong'
  },
  {
    cuisine: ['Spanish', 'South American'],
    messages: {
      main: `Featuring Spanish and South American fusion cuisine with flavors from Guatemala, Mexico, 
             Japan and more. Located in downtown Winter Park in a rustic cottage at the far west 
             end of Cooper Creek Square.`
    },
    directions: '',
    slide: 'left',
    src: paellas,
    title: 'Paellas'
  },
  {
    cuisine: ['American', 'Italian'],
    messages: {
      main: `An American/Italian restaurant in downtown Winter Park that uses local and imported ingredients.
             Enjoy views of the Continental Divide from the dining room & patio.
             Serving Antipasti, Soup, Salad, Pasta, Burger/Sandwich, gourmet pizza, signature steak & classic cocktail.
             Dine In, Patio Seating, Carry Out & Catering available.`
    },
    directions: '',
    slide: 'right',
    src: ciaoMonte,
    title: 'Ciao Monte'
  }
];

export default restaurants;
