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
    directions: {
      web: `/Big+Trout+Brewing+Company,+Vasquez+Road,+Winter+Park,+CO/@39.9174342,-105.8201299,13z/data=!3m2!4b1!5s0x876a34d39db2f50d:0x39c5e28dca130294!4m9!4m8!1m0!1m5!1m1!1s0x876a3585e5d30427:0xfd1cb3fab7f34f78!2m2!1d-105.7851104!2d39.9173736!3e0`,
      mobile: `Big%20Trout%20Brewing%20Company%2050%20Vasquez%20Rd%20Winter%20Park%20CO%2080482`
    },
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
    directions: {
      mobile: `Durbar%20-%20Nepalese%20%26%20Indian%20Bistro%20Cooper%20Creek%20Way%20Winter%20Park%20CO`,
      web: `/Durbar+-+Nepalese+%26+Indian+Bistro,+Cooper+Creek+Way,+Winter+Park,+CO/@39.9176919,-105.8201244,13z/data=!3m2!4b1!5s0x876a34d39db2f50d:0x39c5e28dca130294!4m9!4m8!1m0!1m5!1m1!1s0x876a34d39e79d577:0x70b2ba6c566cdbf7!2m2!1d-105.7851049!2d39.9176313!3e0`
    },
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
    directions: {
      mobile: `Sushi%20Nama%2047%20Cooper%20Creek%20Way%20#221%20Winter%20Park%20CO%2080482`,
      web: `/Sushi+Nama,+Cooper+Creek+Way,+Winter+Park,+CO/@39.9177558,-105.8200447,13z/data=!3m1!5s0x876a34d39db2f50d:0x39c5e28dca130294!4m9!4m8!1m0!1m5!1m1!1s0x876a358d27167ba7:0xcce92afdeca0ef8a!2m2!1d-105.7850252!2d39.9176952!3e0`
    },
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
    directions: {
      mobile: `Lion%20Head%20Coffee%2050%20Vasquez%20Rd%20Winter%20Park%20CO%2080468`,
      web: `/Lion+Head+Coffee,+East+Agate+Avenue,+Granby,+CO/@40.0851164,-105.9441725,16z/data=!3m1!5s0x876a34d39db2f50d:0x39c5e28dca130294!4m9!4m8!1m0!1m5!1m1!1s0x876a2f3407591e35:0xc2c37a89c22a3dc4!2m2!1d-105.9406529!2d40.0854582!3e0`
    },
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
    directions: {
      mobile: `Casa%20Mexico%2047%20Cooper%20Creek%20Way%20Winter%20Park%20CO`,
      web: `/Casa+Mexico,+Cooper+Creek+Way,+Winter+Park,+CO/@39.9176726,-105.8207825,13z/data=!3m2!4b1!5s0x876a34d39db2f50d:0x39c5e28dca130294!4m9!4m8!1m0!1m5!1m1!1s0x876a34d3976f8d59:0xfaf53abcfb678d30!2m2!1d-105.785763!2d39.917612!3e0`
    },
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
    directions: {
      mobile: `New%20Hong%20Kong%20225%20Cooper%20Creek%20Way%20Winter%20Park%20CO`,
      web: `/New+Hong+Kong,+225,+Cooper+Creek+Way,+Winter+Park,+CO/@39.9177197,-105.8205645,13z/data=!3m1!5s0x876a34d39db2f50d:0x39c5e28dca130294!4m9!4m8!1m0!1m5!1m1!1s0x876a34d39a0c747d:0x12aae8641273e15b!2m2!1d-105.785545!2d39.9176591!3e0`
    },
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
    directions: {
      mobile: `Paellas%20Restaurant%20and%20bakery%2093%20Cooper%20Creek%20Way%20Winter%20Park%20CO%2080482`,
      web: `/Paellas+Restaurant+and+bakery,+Cooper+Creek+Way,+Winter+Park,+CO/@39.9177247,-105.8209981,13z/data=!3m2!4b1!5s0x876a34d39db2f50d:0x39c5e28dca130294!4m9!4m8!1m0!1m5!1m1!1s0x876a355815d11c95:0xe0d17bd2e93e45b1!2m2!1d-105.7859786!2d39.9176641!3e0`
    },
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
    directions: {
      mobile: `Ciao%20Monte%20Food%20%26%20Wine%2037%20Cooper%20Creek%20Way%20#315%20Winter%20Park%20CO%2080482`,
      web: `/Ciao+Monte+Food+%26+Wine,+37+Cooper+Creek+Way+%23315,+Winter+Park,+CO+80482/@39.8052977,-105.695515,9.96z/data=!4m9!4m8!1m0!1m5!1m1!1s0x876a35221a77d85b:0x1331ac888c5516d0!2m2!1d-105.784661!2d39.9176919!3e0`
    },
    slide: 'right',
    src: ciaoMonte,
    title: 'Ciao Monte'
  }
];

export default restaurants;
