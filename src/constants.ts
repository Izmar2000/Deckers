import { MenuData } from '@/types';

export const UI_STRINGS = {
  welcome: {
    nl: 'Welkom bij Deckers Grand-Café',
    de: 'Willkommen im Deckers Grand-Café',
    en: 'Welcome to Deckers Grand-Café'
  },
  selectLanguage: {
    nl: 'Kies uw taal',
    de: 'Wählen Sie Ihre Sprache',
    en: 'Choose your language'
  },
  viewMenu: {
    nl: 'Bekijk de menukaart',
    de: 'Speisekarte ansehen',
    en: 'View the menu'
  },
  back: {
    nl: 'Terug',
    de: 'Zurück',
    en: 'Back'
  },
  allergyWarning: {
    nl: 'Heeft u een allergie? Vraag naar onze allergenenkaart!',
    de: 'Haben Sie eine Allergie? Fragen Sie nach unserer Allergenkarte!',
    en: 'Do you have an allergy? Ask for our allergen menu!'
  },
  openingHours: {
    nl: 'Openingstijden',
    de: 'Öffnungszeiten',
    en: 'Opening Hours'
  }
};

export const MENU_DATA: MenuData = {
  sections: [
    {
      id: 'ontbijt',
      title: { nl: 'Ontbijt', de: 'Frühstück', en: 'Breakfast' },
      items: [
        {
          id: 'breakfast-deckers',
          name: { nl: 'Deckers', de: 'Deckers', en: 'Deckers Breakfast' },
          description: {
            nl: 'Twee baguettes, ham, kaas, worst, salami, jam en een gekookt ei, kannetje koffie, thee, cappuccino, latte macchiato, koffie verkeerd of warme chocomel',
            de: 'Zwei Baguettes, Schinken, Käse, Wurst, Salami, Marmelade und einem gekochten Ei, Kännchen Kaffee, Tee, Cappuccino, Latte Macchiato, Milchkaffee oder warmer Kakao',
            en: 'Two baguettes, ham, cheese, sausage, salami, jam and a boiled egg, pot of coffee, tea, cappuccino, latte macchiato, white coffee or hot chocolate'
          },
          price: 15.95
        },
        {
          id: 'breakfast-luxe',
          name: { nl: 'Luxe', de: 'Luxus', en: 'Luxury Breakfast' },
          description: {
            nl: 'Twee baguettes, rosbief, fricandeau, kaas, leverworst, jam, een gekookt ei, remouladesaus, kannetje koffie, thee, cappuccino, latte macchiato, koffie verkeerd of warme chocomel',
            de: 'Zwei Baguettes, Roast Beef, Schweinebraten, Käse, Leberwurst, Marmelade, einem gekochten Ei, Remouladensauce, Kännchen Kaffee, Tee, Cappuccino, Latte Macchiato, Milchkaffee oder warmer Kakao',
            en: 'Two baguettes, roast beef, fricandeau, cheese, liver sausage, jam, a boiled egg, remoulade sauce, pot of coffee, tea, cappuccino, latte macchiato, white coffee or hot chocolate'
          },
          price: 16.95
        },
        {
          id: 'breakfast-boeren',
          name: { nl: 'Boeren', de: 'Bauern', en: 'Farmer\'s Breakfast' },
          description: {
            nl: 'Twee baguettes, roerei met spek, kannetje koffie, thee, cappuccino, latte macchiato, koffie verkeerd of warme chocomel',
            de: 'Zwei Baguettes, Rührei mit Speck, Kännchen Kaffee, Tee, Cappuccino, Latte Macchiato, Milchkaffee oder warmer Kakao',
            en: 'Two baguettes, scrambled eggs with bacon, pot of coffee, tea, cappuccino, latte macchiato, white coffee or hot chocolate'
          },
          price: 16.95
        },
        {
          id: 'breakfast-nolens',
          name: { nl: 'Nolens', de: 'Nolens', en: 'Nolens Breakfast' },
          description: {
            nl: 'Twee baguettes, croissant, ham, kaas, jam, spiegelei 2x, kannetje koffie, thee, cappuccino, latte macchiato, koffie verkeerd of warme chocomel',
            de: 'Zwei Baguettes, Croissant, Schinken, Käse, Marmelade, 2x Spiegelei, Kännchen Kaffee, Tee, Cappuccino, Latte Macchiato, Milchkaffee oder warmer Kakao',
            en: 'Two baguettes, croissant, ham, cheese, jam, 2 fried eggs, pot of coffee, tea, cappuccino, latte macchiato, white coffee or hot chocolate'
          },
          price: 16.95
        },
        {
          id: 'breakfast-italiaans',
          name: { nl: 'Italiaans', de: 'Italienisch', en: 'Italian Breakfast' },
          description: {
            nl: 'Twee ciabatta broodjes, parmaham, spianata romana, kaas, jam, gekookt ei, kannetje koffie, thee, cappuccino, latte macchiato, koffie verkeerd of warme chocomel',
            de: 'Zwei Ciabatta Brötchen, Parmaschinken, Spianata Romana, Käse, Marmelade, gekochtes Ei, Kännchen Kaffee, Tee, Cappuccino, Latte Macchiato, Milchkaffee oder warmer Kakao',
            en: 'Two ciabatta rolls, Parma ham, spianata romana, cheese, jam, boiled egg, pot of coffee, tea, cappuccino, latte macchiato, white coffee or hot chocolate'
          },
          price: 16.95
        },
        {
          id: 'breakfast-frans',
          name: { nl: 'Frans', de: 'Französisch', en: 'French Breakfast' },
          description: {
            nl: 'Baguette, croissant, jam, roerei, camembert, kannetje koffie, thee, cappuccino, latte macchiato, koffie verkeerd of warme chocomel',
            de: 'Baguette, Croissant, Marmelade, Rührei, Camembert, Kännchen Kaffee, Tee, Cappuccino, Latte Macchiato, Milchkaffee oder warmer Kakao',
            en: 'Baguette, croissant, jam, scrambled eggs, camembert, pot of coffee, tea, cappuccino, latte macchiato, white coffee or hot chocolate'
          },
          price: 16.95
        },
        {
          id: 'breakfast-chicken',
          name: { nl: 'Chicken deluxe', de: 'Chicken deluxe', en: 'Chicken Deluxe Breakfast' },
          description: {
            nl: 'Baguette, 2 x molenaarsbrood, kaas, kipfilet, jam, remoulade, een gekookt ei, kannetje koffie, thee, cappuccino, latte macchiato, koffie verkeerd of warme chocomel',
            de: 'Baguette, 2 x Müller Brot, Käse, Hähnchenfilet, Marmelade, Remoulade, einem gekochten Ei, Kännchen Kaffee, Tee, Cappuccino, Latte Macchiato, Milchkaffee oder warmer Kakao',
            en: 'Baguette, 2 x miller\'s bread, cheese, chicken fillet, jam, remoulade, a boiled egg, pot of coffee, tea, cappuccino, latte macchiato, white coffee or hot chocolate'
          },
          price: 16.95
        },
        {
          id: 'breakfast-kaas',
          name: { nl: 'Kaas', de: 'Käse', en: 'Cheese Breakfast' },
          description: {
            nl: 'Baguette, 2 x molenaarsbrood, jonge kaas, speciale oude kaas, Tilsiter, camembert, jam, kannetje koffie, thee, cappuccino, latte macchiato, koffie verkeerd of warme chocomel',
            de: 'Baguette, 2 x Müller Brot, junger Käse, spezieller alter Käse, Tilsiter, Camembert, Marmelade, Kännchen Kaffee, Tee, Cappuccino, Latte Macchiato, Milchkaffee oder warmer Kakao',
            en: 'Baguette, 2 x miller\'s bread, young cheese, special old cheese, Tilsiter, camembert, jam, pot of coffee, tea, cappuccino, latte macchiato, white coffee or hot chocolate'
          },
          price: 16.95
        },
        {
          id: 'breakfast-kids',
          name: { nl: 'Kids', de: 'Kinder', en: 'Kids Breakfast' },
          description: {
            nl: 'Croissant, cornflakes, Nutella, hagelslag, gekookt ei, thee of warme of koude chocomel, kinderverrassing',
            de: 'Croissant, Cornflakes, Nutella, Schokoladenstreusel, einem gekochten Ei, Kalter oder warmer Kakao, Kinderüberraschung',
            en: 'Croissant, cornflakes, Nutella, chocolate sprinkles, boiled egg, tea or hot or cold chocolate, kids surprise'
          },
          price: 10.95
        },
        {
          id: 'breakfast-fitness',
          name: { nl: 'Fitness', de: 'Fitness', en: 'Fitness Breakfast' },
          description: {
            nl: 'Waldkorn met Kaas en gekookte ham, gekookt ei, vruchtenyoghurt met cruesli, jus d’orange, kannetje koffie, thee, cappuccino, latte macchiato, koffie verkeerd of warme chocomel',
            de: 'Waldkornbrot mit Käse und gekochtem Schinken, einem gekochten Ei, Fruchtjoghurt mit Cruesli, Orangensaft, Kännchen Kaffee, Tee, Cappuccino, Latte Macchiato, Milchkaffee oder warmer Kakao',
            en: 'Waldkorn bread with cheese and cooked ham, boiled egg, fruit yogurt with muesli, orange juice, pot of coffee, tea, cappuccino, latte macchiato, white coffee or hot chocolate'
          },
          price: 16.95
        },
        {
          id: 'breakfast-newyork',
          name: { nl: 'New York', de: 'New York', en: 'New York Breakfast' },
          description: {
            nl: 'Pancake met siroop, toast, baguette, spiegelei met spek, salami, jam en pindakaas, kannetje koffie, thee, cappuccino, latte macchiato, koffie verkeerd of warme chocomel',
            de: 'Pfannkuchen mit Sirup, Toast, Brötchen, Spiegelei mit Frühstücksspeck, Salami, Marmelade und Erdnussbutter, Kännchen Kaffee, Tee, Cappuccino, Latte Macchiato, Milchkaffee oder warmer Kakao',
            en: 'Pancake with syrup, toast, baguette, fried egg with bacon, salami, jam and peanut butter, pot of coffee, tea, cappuccino, latte macchiato, white coffee or hot chocolate'
          },
          price: 16.95
        },
        {
          id: 'breakfast-wellness',
          name: { nl: 'Wellness', de: 'Wellness', en: 'Wellness Breakfast' },
          description: {
            nl: 'Meergranenbol met kruidenkaas, rosbief en spiegelei, tomaat-komkommersalade met dressing, jus d’orange, kannetje koffie, thee, cappuccino, latte macchiato, koffie verkeerd of warme chocomel',
            de: 'Waldkornbrötchen mit Kräuterkäse, Roastbeef, Spiegelei, Tomaten-Gurkensalat mit Dressing, Orangensaft, Kännchen Kaffee, Tee, Cappuccino, Latte Macchiato, Milchkaffee oder warmer Kakao',
            en: 'Multi-grain roll with herb cheese, roast beef and fried egg, tomato-cucumber salad with dressing, orange juice, pot of coffee, tea, cappuccino, latte macchiato, white coffee or hot chocolate'
          },
          price: 16.95
        },
        {
          id: 'breakfast-venloosch',
          name: { nl: 'Venloosch', de: 'Venloosch', en: 'Venloosch Breakfast' },
          description: {
            nl: 'Baguette, molenaarsbrood, kerboet, appel, roerei, spek, stroop, jam en een kannetje koffie, thee, cappuccino, latte macchiato, koffie verkeerd of warme chocomel',
            de: 'Baguette, Scheibe Müllerbrot, Panhas, Apfel, Rührei, Speck, Sirup, Marmelade und Kännchen Kaffee, Tee, Cappuccino, Latte Macchiato, Milchkaffee oder warmer Kakao',
            en: 'Baguette, miller\'s bread, "kerboet", apple, scrambled eggs, bacon, syrup, jam and a pot of coffee, tea, cappuccino, latte macchiato, white coffee or hot chocolate'
          },
          price: 16.95
        },
        {
          id: 'breakfast-sweet',
          name: { nl: 'Sweet Morning', de: 'Süβer Morgen', en: 'Sweet Morning Breakfast' },
          description: {
            nl: 'Croissant, chocoladebroodje, 3 mini pannenkoeken met poedersuiker, jam, en een kannetje koffie, thee, cappuccino, latte macchiato, koffie verkeerd of warme chocomel',
            de: 'Croissant, Schokoladebrötchen, 3 mini Pfannkuchen mit Puderzucker, Marmelade, Kännchen Kaffee, Tee, Cappuccino, Latte Macchiato, Milchkaffee oder warmer Kakao',
            en: 'Croissant, chocolate roll, 3 mini pancakes with powdered sugar, jam, and a pot of coffee, tea, cappuccino, latte macchiato, white coffee or hot chocolate'
          },
          price: 15.95
        },
        {
          id: 'breakfast-vital',
          name: { nl: 'Vital', de: 'Vital', en: 'Vital Breakfast' },
          description: {
            nl: 'Vruchtenyoghurt met cruesli, jus d’orange, molenaarsbrood met roerei en gerookte zalm, kleine salade met noten, en een kannetje koffie, thee, cappuccino, latte macchiato, koffie verkeerd of warme chocomel',
            de: 'Fruchtjoghurt mit Cruesli, Orangensaft, Müllerbrot mit Rührei und Räucherlachs, kleiner Salat mit Nüssen, Kännchen Kaffee, Tee, Cappuccino, Latte Macchiato, Milchkaffee oder warmer Kakao',
            en: 'Fruit yogurt with muesli, orange juice, miller\'s bread with scrambled eggs and smoked salmon, small salad with nuts, and a pot of coffee, tea, cappuccino, latte macchiato, white coffee or hot chocolate'
          },
          price: 16.95
        }
      ]
    },
    {
      id: 'klein-ontbijt',
      title: { nl: 'Klein Ontbijt', de: 'Kleines Frühstück', en: 'Small Breakfast' },
      items: [
        {
          id: 'mini-chicken',
          name: { nl: 'Mini Chicken', de: 'Mini Chicken', en: 'Mini Chicken' },
          description: {
            nl: 'Baguette, kipfilet, kaas, jam, een gekookt ei, en een kannetje koffie, thee, cappuccino, latte macchiato, koffie verkeerd of warme chocomel',
            de: 'Baguette, Hähnchenfilet, Käse, Marmelade, einem gekochten Ei, Kännchen Kaffee, Tee, Cappuccino, Latte Macchiato, Milchkaffee oder warmer Kakao',
            en: 'Baguette, chicken fillet, cheese, jam, a boiled egg, and a pot of coffee, tea, cappuccino, latte macchiato, white coffee or hot chocolate'
          },
          price: 12.95
        },
        {
          id: 'mini',
          name: { nl: 'Mini', de: 'Mini', en: 'Mini' },
          description: {
            nl: 'Baguette, ham, kaas, jam, een gekookt ei, en een kannetje koffie, thee, cappuccino, latte macchiato, koffie verkeerd of warme chocomel',
            de: 'Baguette, Schinken, Käse, Marmelade, einem gekochten Ei, Kännchen Kaffee, Tee, Cappuccino, Latte Macchiato, Milchkaffee oder warmer Kakao',
            en: 'Baguette, ham, cheese, jam, a boiled egg, and a pot of coffee, tea, cappuccino, latte macchiato, white coffee or hot chocolate'
          },
          price: 12.95
        },
        {
          id: 'mini-boeren',
          name: { nl: 'Mini Boeren', de: 'Mini Bauern', en: 'Mini Farmer\'s' },
          description: {
            nl: 'Baguette, spek, roerei, jam, een kannetje koffie, thee, cappuccino, latte macchiato, koffie verkeerd of warme chocomel',
            de: 'Baguette, Speck, Rührei, Marmelade, ein Kännchen Kaffee, Tee, Cappuccino, Latte Macchiato, Milchkaffee oder warmer Kakao',
            en: 'Baguette, bacon, scrambled eggs, jam, a pot of coffee, tea, cappuccino, latte macchiato, white coffee or hot chocolate'
          },
          price: 12.95
        },
        {
          id: 'mini-venloosch',
          name: { nl: 'Mini Venloosch', de: 'Mini Venloosch', en: 'Mini Venloosch' },
          description: {
            nl: 'Molenaarsbrood, kerboet, appel, stroop, een kannetje koffie, thee, cappuccino, latte macchiato, koffie verkeerd of warme chocomel',
            de: 'Müller Brot, Panhas, Apfel, Sirup ein Kännchen Kaffee, Tee, Cappuccino, Latte Macchiato, Milchkaffee oder warmer Kakao',
            en: 'Miller\'s bread, "kerboet", apple, syrup, a pot of coffee, tea, cappuccino, latte macchiato, white coffee or hot chocolate'
          },
          price: 13.95
        }
      ]
    },
    {
      id: 'ontbijt-extras',
      title: { nl: 'Ontbijt Extra’s', de: 'Frühstück Extras', en: 'Breakfast Extras' },
      items: [
        { id: 'extra-spiegelei', name: { nl: 'Portie spiegelei 2x', de: 'Portion Spiegelei 2x', en: 'Portion of fried eggs 2x' }, price: 3.95 },
        { id: 'extra-roerei', name: { nl: 'Portie roerei', de: 'Portion Rührei', en: 'Portion of scrambled eggs' }, price: 4.50 },
        { id: 'extra-spek', name: { nl: 'Portie spek', de: 'Portion Speck', en: 'Portion of bacon' }, price: 4.95 },
        { id: 'extra-roerei-spek', name: { nl: 'Portie roerei en spek', de: 'Portion Rührei und Speck', en: 'Portion of scrambled eggs and bacon' }, price: 8.50 },
        { id: 'extra-kerboet', name: { nl: 'Portie kerboet met appel', de: 'Portion Panhas mit Apfel', en: 'Portion of "kerboet" with apple' }, price: 7.50 },
        { id: 'extra-remoulade', name: { nl: 'Remouladesaus uit eigen keuken', de: 'Hausgemachte Remouladensauce', en: 'Homemade remoulade sauce' }, price: 1.85 },
        { id: 'extra-jus-02', name: { nl: 'Verse jus d’orange (0,2 l)', de: 'Frisch gepresster Orangensaft (0,2 l)', en: 'Fresh orange juice (0.2 l)' }, price: 3.50 },
        { id: 'extra-jus-03', name: { nl: 'Verse jus d’orange (0,3 l)', de: 'Frisch gepresster Orangensaft (0,3 l)', en: 'Fresh orange juice (0.3 l)' }, price: 4.95 },
        { id: 'extra-jus-04', name: { nl: 'Verse jus d’orange (0,4 l)', de: 'Frisch gepresster Orangensaft (0,4 l)', en: 'Fresh orange juice (0.4 l)' }, price: 5.95 },
        { id: 'extra-sekt', name: { nl: 'Piccolo Sekt (flesje 0,2 l)', de: 'Piccolo Sekt (Flasche 0,2 L)', en: 'Piccolo Sekt (0.2 L bottle)' }, price: 7.95 }
      ]
    },
    {
      id: 'baguettes',
      title: { nl: 'Baguettes', de: 'Baguettes', en: 'Baguettes' },
      items: [
        {
          id: 'baguette-kaas-ham',
          name: { nl: 'Jonge Kaas of ham of salami', de: 'Junger Holländischer Käse oder Schinken oder Salami', en: 'Young cheese or ham or salami' },
          price: 5.95
        },
        {
          id: 'baguette-frikandel',
          name: { nl: 'Frikandel met mayonaise', de: 'Holländische Fleischrolle mit Mayonnaise', en: 'Frikandel with mayonnaise' },
          price: 5.95
        },
        {
          id: 'baguette-kroket',
          name: { nl: 'Molenaarsbrood met rundvleeskroket en grove mosterdmayonaise', de: 'Müller Brot mit Rindfleischkrokette und grober Senfmayonnaise', en: 'Miller\'s bread with beef croquette and coarse mustard mayonnaise' },
          price: 6.95
        },
        {
          id: 'wrap-kip',
          name: { nl: 'Wrap met krokante kip, sla, tomaat, komkommer en honing - mosterd dressing', de: 'Wrap mit krokantes Hänchenfleisch, Salat, Tomate, Gurke und Honig - Senf – Dressing', en: 'Wrap with crispy chicken, lettuce, tomato, cucumber and honey-mustard dressing' },
          price: 14.95
        }
      ]
    },
    {
      id: 'luxe-broodjes',
      title: { nl: 'Luxe broodjes Barra Gallega', de: 'Luxus Brötchen (Spanisches Baguette)', en: 'Luxury Barra Gallega Rolls' },
      items: [
        {
          id: 'luxe-oude-kaas',
          name: { nl: 'Speciale oude kaas', de: 'Spezieller alter holländischem Käse', en: 'Special old cheese' },
          price: 8.95
        },
        {
          id: 'luxe-waldkorn',
          name: { nl: 'Waldkornbroodje met ham, kaas, komkommer, ei, tomaat en frisse wittekoolsalade', de: 'Waldkornbrötchen mit Schinken, Käse, Gurke, Ei, Tomate, frischer Weisskohlsalat', en: 'Waldkorn roll with ham, cheese, cucumber, egg, tomato and fresh coleslaw' },
          price: 11.95
        },
        {
          id: 'luxe-rosbief',
          name: { nl: 'Rosbief en huisgemaakte remouladesaus', de: 'Roastbeef und hausgemachter Remouladensauce', en: 'Roast beef and homemade remoulade sauce' },
          price: 14.95
        },
        {
          id: 'luxe-tonijn',
          name: { nl: 'Tonijnsalade', de: 'Thunfischsalat', en: 'Tuna salad' },
          price: 14.95
        },
        {
          id: 'luxe-pikante-kip',
          name: { nl: 'Pikante kip en champignons', de: 'Pikantes Hänchenfleisch und Champignons', en: 'Spicy chicken and mushrooms' },
          price: 14.95
        },
        {
          id: 'luxe-krokante-kip',
          name: { nl: 'Krokante kip, huisgemaakte remouladesaus en spekjes', de: 'Knuspriges Hänchenfilet, Hausgemachter Remouladensauce und Speckwürfel', en: 'Crispy chicken, homemade remoulade sauce and bacon bits' },
          price: 14.95
        },
        {
          id: 'luxe-zalm',
          name: { nl: 'Meergranenbol gerookte zalm met kruidenkaas en yoghurtdressing', de: 'Mehrkornbrötchen Räucherlachs mit Kräuterkäse und Joghurt-Vinaigrette', en: 'Multi-grain roll smoked salmon with herb cheese and yogurt dressing' },
          price: 15.95
        },
        {
          id: 'luxe-sate',
          name: { nl: 'Saté (pindasaus) van mals kippendijenvlees, een baguette en atjar', de: 'Saté (Erdnusssauce) mit zartem Hänchenschenckelfleisch, Baguette und Atjar', en: 'Satay (peanut sauce) of tender chicken thigh meat, a baguette and atjar' },
          price: 15.95
        }
      ]
    },
    {
      id: 'soepen',
      title: { nl: 'Vooraf & Soepen', de: 'Vorspeisen & Suppen', en: 'Appetizers & Soups' },
      items: [
        { id: 'brood-plank-luxe', name: { nl: 'Broodplankje met kruidenboter, remouladesaus en aioli', de: 'Brotplatte mit Kräuterbutter, Remouladensauce und Aioli', en: 'Bread platter with herb butter, remoulade sauce and aioli' }, price: 7.95 },
        { id: 'brood-plank-simpel', name: { nl: 'Broodplankje met kruidenboter', de: 'Brotplatte mit Kräuterbutter', en: 'Bread platter with herb butter' }, price: 5.95 },
        { id: 'soep-tomaat', name: { nl: 'Tomatensoep, “vegan”', de: 'Tomatensuppe, “Vegan”', en: 'Tomato soup, "vegan"' }, price: '6,50 / 7,95' },
        { id: 'soep-ui', name: { nl: 'Franse uiensoep (gegratineerd met kaas)', de: 'Französische Zwiebelsuppe (überbacken mit Käse)', en: 'French onion soup (gratin with cheese)' }, price: '6,50 / 7,95' },
        { id: 'soep-goulash', name: { nl: 'Hongaarse goulashsoep', de: 'Ungarische Gulaschsupe', en: 'Hungarian goulash soup' }, price: '6,50 / 7,95' },
        { id: 'soep-dag', name: { nl: 'Soep van de dag', de: 'Tagessuppe', en: 'Soup of the day' }, price: '6,50 / 7,95' }
      ]
    },
    {
      id: 'lunch',
      title: { nl: 'Lunchgerechten', de: 'Brotspezialitäten', en: 'Lunch Dishes' },
      items: [
        {
          id: 'lunch-hausplatte',
          name: { nl: 'Hausplatte „Deckers“', de: 'Hausplatte „Deckers“', en: 'House Platter "Deckers"' },
          description: {
            nl: 'Molenaarsbrood met ham, rosbief en fricandeau, een gekookt ei en huisgemaakte remouladesaus',
            de: 'Müller-Brot mit Schinken, Roastbeef, Schweinebraten, einem gekochten Ei und Hausgemachter Remouladensauce',
            en: 'Miller\'s bread with ham, roast beef and fricandeau, a boiled egg and homemade remoulade sauce'
          },
          price: 13.95
        },
        {
          id: 'lunch-twaalfuurtje',
          name: { nl: 'Twaalfuurtje', de: 'Twaalfuurtje', en: 'Twelve O\'Clock Special' },
          description: {
            nl: 'Soep van de dag, molenaarsbrood met kroket, molenaarsbrood met ham/kaas en een gebakken ei',
            de: 'Tagessuppe, Müller-Brot mit krokette, Müllerbrot mit Schinken / Käse, gebackenes Ei.',
            en: 'Soup of the day, miller\'s bread with croquette, miller\'s bread with ham/cheese and a fried egg'
          },
          price: 13.95
        },
        { id: 'lunch-tosti', name: { nl: 'Tosti ham / kaas en Ketchup', de: 'Toast Schinken / Käse und Ketchup', en: 'Toasted ham / cheese sandwich and Ketchup' }, price: 5.95 },
        { id: 'lunch-hawaii', name: { nl: 'Toast Hawaii de luxe, met ham, ananas en tomaten, gegratineerd met kaas', de: 'Toast Hawaii Luxus mit Schinken, Ananas und Tomaten, überbacken mit Käse', en: 'Toast Hawaii de luxe, with ham, pineapple and tomatoes, gratin with cheese' }, price: 12.95 },
        { id: 'lunch-champignons', name: { nl: 'Toast champignons, spek en ui, gegratineerd met oude kaas', de: 'Toast Champignons, Speck und Zwiebel, überbacken mit altem Käse', en: 'Toast mushrooms, bacon and onion, gratin with old cheese' }, price: 14.95 },
        { id: 'lunch-uitsmijter-ham', name: { nl: 'Uitsmijter ham of spek', de: 'Strammer Max mit Schinken oder Speck', en: 'Fried eggs with ham or bacon' }, price: 14.95 },
        { id: 'lunch-uitsmijter-deckers', name: { nl: 'Uitsmijter Deckers met ham, rosbief en fricandeau', de: 'Strammer Max Deckers mit Schinken, Roastbeef und Schweinebraten', en: 'Fried eggs Deckers with ham, roast beef and fricandeau' }, price: 15.95 },
        { id: 'lunch-roerei', name: { nl: 'Roerei, spek en gebakken aardappels', de: 'Rührei, Speck und Bratkartoffeln', en: 'Scrambled eggs, bacon and fried potatoes' }, price: 14.95 },
        { id: 'lunch-omelet-ham', name: { nl: 'Omelet met ham en kaas', de: 'Omelett mit Schinken und Käse', en: 'Omelette with ham and cheese' }, price: 14.95 },
        { id: 'lunch-omelet-champ', name: { nl: 'Omelet champignons', de: 'Omelett Champignons', en: 'Mushroom omelette' }, price: 14.95 },
        { id: 'lunch-boerenomelet', name: { nl: 'Boerenomelet met groenten, ham en gebakken aardappels', de: 'Bauern Omelett mit Gemüse, Schinken und Bratkartoffeln', en: 'Farmer\'s omelette with vegetables, ham and fried potatoes' }, price: 15.95 }
      ]
    },
    {
      id: 'salades',
      title: { nl: 'Salades', de: 'Salate', en: 'Salads' },
      items: [
        {
          id: 'salade-nolens',
          name: { nl: 'Salade „Nolens”', de: 'Salat „Nolens”', en: 'Salad "Nolens"' },
          description: {
            nl: 'Salade met pikant gebakken kip, champignons en yoghurtdressing',
            de: 'Salat mit pikant gebakkenem Hähnchen, Champignons und Joghurtdressing',
            en: 'Salad with spicy fried chicken, mushrooms and yogurt dressing'
          },
          price: 15.95
        },
        {
          id: 'salade-maxima',
          name: { nl: 'Salade „Maxima”', de: 'Salat „Maxima”', en: 'Salad "Maxima"' },
          description: {
            nl: 'Salade met krokante kip, spek, champignons en cashewnoten, met een honing - mosterd dressing',
            de: 'Salat mit knuspriges Hähnchenfilet, Speck, Champignons und Cashewnüssen, mit eine Honig - Senf Dresssing',
            en: 'Salad with crispy chicken, bacon, mushrooms and cashew nuts, with a honey-mustard dressing'
          },
          price: 15.95
        },
        {
          id: 'salade-nicoise',
          name: { nl: 'Salade Niçoise', de: 'Salat Niçoise', en: 'Salad Niçoise' },
          description: {
            nl: 'Salade met tonijn en een yoghurtdressing',
            de: 'Salat mit Thunfish und einem Joghurtdressing',
            en: 'Salad with tuna and a yogurt dressing'
          },
          price: 16.95
        }
      ]
    },
    {
      id: 'vegetarisch',
      title: { nl: 'Vegetarisch', de: 'Vegetarisch', en: 'Vegetarian' },
      items: [
        { id: 'veg-lasagna', name: { nl: 'Vegetarische lasagna met kaas overbakken en salade', de: 'Vegetarischer Lasagne mit Käse überbacken und Salat', en: 'Vegetarian lasagna baked with cheese and salad' }, price: 18.95 },
        { id: 'veg-salade', name: { nl: 'Vegetarische salade van de chef', de: 'Vegetarischer Salat vom Chef', en: 'Vegetarian chef\'s salad' }, price: 15.95 }
      ]
    },
    {
      id: 'warme-gerechten',
      title: { nl: 'Warme gerechten', de: 'Warme Speisen', en: 'Hot Dishes' },
      items: [
        { id: 'warm-curryworst', name: { nl: 'Curryworst met frites en salade', de: 'Currywurst mit Pommes und Salat', en: 'Currywurst with fries and salad' }, price: 14.95 },
        { id: 'warm-kroketten', name: { nl: '2 Rundvleeskroketten met frites en salade', de: '2 Rindfleischkroketten mit Pommes und Salat', en: '2 Beef croquettes with fries and salad' }, price: 15.95 },
        { id: 'warm-frikandellen', name: { nl: '2 Frikandellen met frites en salade', de: '2 Fleischrollen mit Pommes und Salat', en: '2 Frikandels with fries and salad' }, price: 15.95 },
        { id: 'warm-frikandellen-speciaal', name: { nl: '2 Frikandellen speciaal met frites en salade', de: '2 Fleischrollen Spezial mit Pommes und Salat', en: '2 Frikandels special with fries and salad' }, price: 17.95 }
      ]
    },
    {
      id: 'bittergarnituur',
      title: { nl: 'Bittergarnituur', de: 'Kleine Snacks', en: 'Snacks' },
      items: [
        { id: 'snack-loempia', name: { nl: 'Mini loempia’s „Vegan” (15 stuks) met zoete chilisaus', de: 'Mini Frühlingsrollen „Vegan“ (15 Stück) mit süβe Chilisauce', en: 'Mini spring rolls "Vegan" (15 pieces) with sweet chili sauce' }, price: 8.95 },
        { id: 'snack-bitterballen', name: { nl: 'Rundvlees bitterballen (8 stuks)', de: 'Rindfleischbitterbälle (8 Stück)', en: 'Beef bitterballen (8 pieces)' }, price: 9.95 },
        { id: 'snack-strips', name: { nl: 'Crispy Chicken Strips (8 stuks)', de: 'Crispy Chicken Strips (8 Stück)', en: 'Crispy Chicken Strips (8 pieces)' }, price: 9.95 },
        { id: 'snack-plankje', name: { nl: 'Snackplankje Deckers (20 stuks)', de: 'Snackplatte Deckers (20 Stück)', en: 'Snack platter Deckers (20 pieces)' }, price: 15.95 }
      ]
    },
    {
      id: 'kindermenu',
      title: { nl: 'Kindermenu', de: 'Kinderteller', en: 'Kids Menu' },
      items: [
        { id: 'kids-frikandel', name: { nl: 'Frikandel met frietjes, mayonaise en appelmoes*', de: 'Fleischrolle mit Pommes, Mayonnaise und Apfelmus*', en: 'Frikandel with fries, mayonnaise and apple sauce*' }, price: 9.95 },
        { id: 'kids-nuggets', name: { nl: 'Kipnuggets met frietjes, mayonaise en appelmoes*', de: 'Chickennuggets mit Pommes, Mayonnaise und Apfelmus*', en: 'Chicken nuggets with fries, mayonnaise and apple sauce*' }, price: 9.95 },
        { id: 'kids-kibbeling', name: { nl: 'Kibbeling met frietjes, mayonaise en appelmoes*', de: 'Kibbeling mit Pommes, Mayonnaise und Apfelmus*', en: 'Kibbeling with fries, mayonnaise and apple sauce*' }, price: 9.95 },
        { id: 'kids-poffertjes', name: { nl: 'Poffertjes (12 stuks)', de: 'Poffertjes (12 Stück)', en: 'Poffertjes (12 pieces)' }, price: 5.95 },
        { id: 'kids-ijsje', name: { nl: 'Kinderijsje', de: 'Kinderbecher', en: 'Kids ice cream' }, price: 4.50 }
      ]
    },
    {
      id: 'visgerechten',
      title: { nl: 'Visgerechten', de: 'Fischgerichte', en: 'Fish Dishes' },
      items: [
        { id: 'vis-maatjes-brood', name: { nl: 'Maatjesharing met brood en salade', de: 'Matjes mit Brot und Salat', en: 'Herring with bread and salad' }, price: 15.95 },
        { id: 'vis-maatjes-aard', name: { nl: 'Maatjesharing met gebakken aardappelen en salade', de: 'Matjes mit Bratkartoffeln und Salat', en: 'Herring with fried potatoes and salad' }, price: 17.95 },
        { id: 'vis-gebakken', name: { nl: 'Gebakken vis met friet en salade, en huisgemaakte remouladesaus', de: 'Backfisch mit Pommes und Salat, und hausgemachte Remouladensauce', en: 'Fried fish with fries and salad, and homemade remoulade sauce' }, price: 17.95 },
        { id: 'vis-kibbeling', name: { nl: 'Kibbeling met huisgemaakte remouladesaus en frites en salade', de: 'Kibbeling mit hausgemachter Remouladensauce, Pommes und Salat', en: 'Kibbeling with homemade remoulade sauce and fries and salad' }, price: 17.95 },
        { id: 'vis-scholfilet', name: { nl: 'Scholfilet met huisgemaakte remouladesaus, frites of gebakken aardappelen en salade', de: 'Schollenfilet mit hausgemachter Remouladensauce mit Pommes oder Bratkartoffeln und Salat', en: 'Plaice fillet with homemade remoulade sauce, fries or fried potatoes and salad' }, price: 19.95 }
      ]
    },
    {
      id: 'vleesgerechten',
      title: { nl: 'Vleesgerechten', de: 'Fleischgerichte', en: 'Meat Dishes' },
      items: [
        { id: 'vlees-zuurvlees', name: { nl: 'Venloosch zuurvlees met frites, appelmoes en salade', de: 'Venloosch Sauerbraten mit Pommes, Apfelmus und Salat', en: 'Venlo-style sour meat with fries, apple sauce and salad' }, price: 19.95 },
        { id: 'vlees-sate', name: { nl: 'Saté van mals kippenvlees met pindasaus, atjar en kroepoek', de: 'Saté von zartem Hänchenfleisch in Erdnusssauce, Atjar und Kroepoek', en: 'Chicken satay with peanut sauce, atjar and prawn crackers' }, price: 19.95 },
        { id: 'vlees-kalkoen', name: { nl: 'Kalkoenfilet met champignonroomsaus, zigeunersaus of peperroomsaus', de: 'Putenfilet mit Champignonrahmsauce, Zigeunersauce oder Pfefferrahmsauce', en: 'Turkey fillet with mushroom cream sauce, gypsy sauce or pepper cream sauce' }, price: 21.95 },
        { id: 'vlees-varkenshaas', name: { nl: 'Varkenshaasmedaillons met champignonroomsaus, zigeunersaus of peperroomsaus', de: 'Schweinefiletmedaillons mit Champignonrahmsauce, Zigeunersauce oder Pfefferrahmsauce', en: 'Pork tenderloin medallions with mushroom cream sauce, gypsy sauce or pepper cream sauce' }, price: 21.95 },
        { id: 'vlees-hamburger', name: { nl: 'Ambachtelijke hamburger (cheese) 100% rundvlees met frites, salade en huisgemaakte saus', de: 'Handgefertigter Hamburger (Cheese) 100 % Rindfleisch mit Pommes, Salat und hausgemachter Sauce', en: 'Artisanal hamburger (cheese) 100% beef with fries, salad and homemade sauce' }, price: 18.95 },
        { id: 'vlees-wiener', name: { nl: 'Wiener Schnitzel', de: 'Wiener Schnitzel', en: 'Wiener Schnitzel' }, price: 19.95 },
        { id: 'vlees-wiener-champ', name: { nl: 'Wiener Schnitzel met champignonroomsaus', de: 'Wiener Schnitzel mit Champignonrahmsauce', en: 'Wiener Schnitzel with mushroom cream sauce' }, price: 22.95 },
        { id: 'vlees-wiener-zigeuner', name: { nl: 'Wiener Schnitzel met zigeunersaus', de: 'Wiener Schnitzel mit Zigeunersauce', en: 'Wiener Schnitzel with gypsy sauce' }, price: 22.95 },
        { id: 'vlees-wiener-peper', name: { nl: 'Wiener Schnitzel met peperroomsaus', de: 'Wiener Schnitzel mit Pfefferrahmsauce', en: 'Wiener Schnitzel with pepper cream sauce' }, price: 22.95 },
        { id: 'vlees-wiener-camembert', name: { nl: 'Wiener Schnitzel overbakken met camembert en preiselbeeren', de: 'Wiener Schnitzel überbacken mit Camembert und Preiselbeeren', en: 'Wiener Schnitzel baked with camembert and cranberries' }, price: 22.95 },
        { id: 'vlees-wiener-uien', name: { nl: 'Wiener Schnitzel met champignons en uien, overbakken met kaas', de: 'Wiener Schnitzel mit Champignons und Zwiebel, überbacken mit Käse', en: 'Wiener Schnitzel with mushrooms and onions, baked with cheese' }, price: 22.95 },
        { id: 'vlees-wiener-hawai', name: { nl: 'Wiener Schnitzel Hawaï met ham en ananas, overbakken met kaas', de: 'Wiener Schnitzel Hawaï mit Schincken und Ananas, überbacken mit Käse', en: 'Wiener Schnitzel Hawaii with ham and pineapple, baked with cheese' }, price: 22.95 },
        { id: 'vlees-kalfslever', name: { nl: 'Rosé gebraden kalfslever met spek, uien en appelmoes', de: 'Rosa Gebratene Kalbsleber mit Speck, Zwiebeln, und Apfelmus', en: 'Rosé roasted calf\'s liver with bacon, onions and apple sauce' }, price: 23.95 },
        { id: 'vlees-steak', name: { nl: 'Argentijnse steak (± 200 gram) met kruidenboter of pepersaus of vers gebakken champignons', de: 'Argentinisches Steak (± 200 Gramm) mit Kräuterbutter oder Pfeffersauce oder frisch gebackene Champignons', en: 'Argentinian steak (± 200 grams) with herb butter or pepper sauce or freshly fried mushrooms' }, price: 26.95 },
        { id: 'vlees-mixgrill', name: { nl: 'Mix-Grill met Argentijnse steak, varkenshaasje, kalkoenfilet, en steak hachee met pepersaus', de: 'Mix Grill Teller mit argentinisches Steak, Schweinefiletmedaillon, Putenfilet und Steak Haschee mit Pfeffersauce', en: 'Mix-Grill with Argentinian steak, pork tenderloin, turkey fillet, and steak hachee with pepper sauce' }, price: 26.95 }
      ]
    },
    {
      id: 'senioren',
      title: { nl: 'Seniorengerechten', de: 'Seniorengerichte', en: 'Senior Dishes' },
      items: [
        {
          id: 'senior-wiener',
          name: { nl: 'Wiener Schnitzel', de: 'Wiener Schnitzel', en: 'Wiener Schnitzel' },
          price: 17.95
        },
        {
          id: 'senior-champignon',
          name: { nl: 'Wiener Schnitzel met champignonroomsaus', de: 'Wiener Schnitzel mit Champignonrahmsauce', en: 'Wiener Schnitzel with mushroom cream sauce' },
          price: 18.95
        },
        {
          id: 'senior-zigeuner',
          name: { nl: 'Wiener Schnitzel met zigeunersaus', de: 'Wiener Schnitzel mit Zigeunersauce', en: 'Wiener Schnitzel with gypsy sauce' },
          price: 18.95
        },
        {
          id: 'senior-peper',
          name: { nl: 'Wiener Schnitzel met peperroomsaus', de: 'Wiener Schnitzel mit Pfefferrahmsauce', en: 'Wiener Schnitzel with pepper cream sauce' },
          price: 18.95
        },
        {
          id: 'senior-camembert',
          name: { nl: 'Wiener Schnitzel overbakken met camembert en preiselbeeren', de: 'Wiener Schnitzel überbacken mit Camembert und Preiselbeeren', en: 'Wiener Schnitzel baked with camembert and cranberries' },
          price: 18.95
        },
        {
          id: 'senior-champ-uien',
          name: { nl: 'Wiener Schnitzel met champignons en uien, overbakken met kaas', de: 'Wiener Schnitzel mit Champignons und Zwiebel, überbacken mit Käse', en: 'Wiener Schnitzel with mushrooms and onions, baked with cheese' },
          price: 18.95
        },
        {
          id: 'senior-hawai',
          name: { nl: 'Wiener Schnitzel Hawaï met ham en ananas, overbakken met kaas', de: 'Wiener Schnitzel Hawaï mit Schincken und Ananas, überbacken mit Käse', en: 'Wiener Schnitzel Hawaii with ham and pineapple, baked with cheese' },
          price: 18.95
        },
        {
          id: 'senior-kalkoen',
          name: { nl: 'Kalkoenfilet met champignonroomsaus, zigeunersaus of peperroomsaus', de: 'Putenfilet mit Champignonrahmsauce, Zigeunersauce oder Pfefferrahmsauce', en: 'Turkey fillet with mushroom cream sauce, gypsy sauce or pepper cream sauce' },
          price: 18.95
        },
        {
          id: 'senior-varkenshaas',
          name: { nl: 'Varkenshaasmedaillons met champignonroomsaus, zigeunersaus of peperroomsaus', de: 'Schweinefiletmedaillons mit Champignonrahmsauce, Zigeunersauce oder Pfefferrahmsauce', en: 'Pork tenderloin medallions with mushroom cream sauce, gypsy sauce or pepper cream sauce' },
          price: 18.95
        },
        {
          id: 'senior-kalfslever',
          name: { nl: 'Rosé gebraden kalfslever met spek, uien en appelmoes', de: 'Rosa gebratene Kalbsleber mit Zwiebeln, Speck und Apfelmus', en: 'Rosé roasted calf\'s liver with bacon, onions and apple sauce' },
          price: 18.95
        },
        {
          id: 'senior-scholfilet',
          name: { nl: 'Scholfilet met remouladesaus', de: 'Schollenfilet mit Remouladensauce', en: 'Plaice fillet with remoulade sauce' },
          price: 17.95
        }
      ]
    },
    {
      id: 'pannenkoeken',
      title: { nl: 'Pannenkoeken', de: 'Pfannkuchen', en: 'Pancakes' },
      items: [
        { id: 'pancake-1', name: { nl: '1 Naturel', de: '1 Natur', en: '1 Plain' }, price: 10.95 },
        { id: 'pancake-2', name: { nl: '2 Naturel - Nutella', de: '2 Natur - Nutella', en: '2 Plain - Nutella' }, price: 11.95 },
        { id: 'pancake-3', name: { nl: '3 Appel', de: '3 Apfel', en: '3 Apple' }, price: 13.95 },
        { id: 'pancake-5', name: { nl: '5 Spek', de: '5 Speck', en: '5 Bacon' }, price: 13.95 },
        { id: 'pancake-6', name: { nl: '6 Spek - Appel', de: '6 Speck - Apfel', en: '6 Bacon - Apple' }, price: 14.95 },
        { id: 'pancake-8', name: { nl: '8 Spek - Champignons', de: '8 Speck - Champignons', en: '8 Bacon - Mushrooms' }, price: 14.95 },
        { id: 'pancake-9', name: { nl: '9 Spek - Kaas', de: '9 Speck - Käse', en: '9 Bacon - Cheese' }, price: 14.95 },
        { id: 'pancake-10', name: { nl: '10 Spek - Champignons - Kaas', de: '10 Speck - Champignons - Käse', en: '10 Bacon - Mushrooms - Cheese' }, price: 15.95 },
        { id: 'pancake-11', name: { nl: '11 Spek - Paprika - Ui', de: '11 Speck - Paprika - Zwiebeln', en: '11 Bacon - Bell pepper - Onion' }, price: 15.95 },
        { id: 'pancake-13', name: { nl: '13 Ham - Kaas', de: '13 Schinken - Käse', en: '13 Ham - Cheese' }, price: 14.95 },
        { id: 'pancake-14', name: { nl: '14 Ham - Kaas - Champignons', de: '14 Schinken - Käse - Champignons', en: '14 Ham - Cheese - Mushrooms' }, price: 15.95 },
        { id: 'pancake-16', name: { nl: '16 Kaas - Ananas', de: '16 Käse - Ananas', en: '16 Cheese - Pineapple' }, price: 14.95 },
        { id: 'pancake-18', name: { nl: '18 Ham - Ananas - Kaas', de: '18 Schinken - Ananas - Käse', en: '18 Ham - Pineapple - Cheese' }, price: 15.95 },
        { id: 'pancake-20', name: { nl: '20 Camembert - Ananas', de: '20 Camembert - Ananas', en: '20 Camembert - Pineapple' }, price: 15.95 },
        { id: 'pancake-24', name: { nl: '24 Kersen - Vanille ijs - Slagroom', de: '24 Kirschen - Vanille Eis - Sahne', en: '24 Cherries - Vanilla ice cream - Whipped cream' }, price: 15.95 }
      ]
    },
    {
      id: 'dranken',
      title: { nl: 'Koffie & Thee', de: 'Kaffee & Tee', en: 'Coffee & Tea' },
      items: [
        { id: 'coffee-1', name: { nl: 'Kop koffie', de: 'Tasse Kaffee', en: 'Cup of Coffee' }, price: 3.30 },
        { id: 'coffee-slagroom', name: { nl: 'Kop koffie met slagroom', de: 'Tasse Kaffee mit Sahne', en: 'Cup of coffee with whipped cream' }, price: 4.30 },
        { id: 'coffee-kannetje', name: { nl: 'Kannetje koffie', de: 'Kännchen Kaffee', en: 'Pot of coffee' }, price: 6.20 },
        { id: 'coffee-espresso', name: { nl: 'Espresso', de: 'Espresso', en: 'Espresso' }, price: 3.30 },
        { id: 'coffee-dubbel-espresso', name: { nl: 'Dubbele espresso', de: 'Doppelter Espresso', en: 'Double espresso' }, price: 5.30 },
        { id: 'coffee-verkeerd', name: { nl: 'Koffie verkeerd', de: 'Milchkaffee', en: 'White coffee' }, price: 4.35 },
        { id: 'coffee-latte', name: { nl: 'Latte Macchiato', de: 'Latte Macchiato', en: 'Latte Macchiato' }, price: 4.70 },
        { id: 'coffee-latte-flavor', name: { nl: 'Latte Macchiato met caramel of hazelnoot', de: 'mit Karamell oder Haselnuss', en: 'Latte Macchiato with caramel or hazelnut' }, price: 5.30 },
        { id: 'coffee-cappuccino', name: { nl: 'Cappuccino', de: 'Cappuccino', en: 'Cappuccino' }, price: 4.10 },
        { id: 'tea-1', name: { nl: 'Verschillende smaken thee', de: 'Verschiedene Sorten Tee', en: 'Various tea flavors' }, price: 3.30 },
        { id: 'tea-muntthee', name: { nl: 'Verse muntthee', de: 'Frischer Minztee', en: 'Fresh mint tea' }, price: 4.30 },
        { id: 'choco-warm', name: { nl: 'Kop warme Chocomel', de: 'Tasse warmer Kakao', en: 'Cup of hot chocolate' }, price: 4.25 },
        { id: 'choco-warm-slagroom', name: { nl: 'Kop warme Chocomel met slagroom', de: 'Tasse warmer Kakao mit Sahne', en: 'Cup of hot chocolate with whipped cream' }, price: 5.25 },
        { id: 'coffee-irish', name: { nl: 'Ierse koffie (Irish Whisky)', de: 'Irisher Kaffee (Irisher Whisky)', en: 'Irish coffee (Irish Whisky)' }, price: 7.95 },
        { id: 'coffee-frans', name: { nl: 'Franse koffie (Grand Marnier)', de: 'Französischer Kaffee (Grand Marnier)', en: 'French coffee (Grand Marnier)' }, price: 7.95 },
        { id: 'coffee-spaans', name: { nl: 'Spaanse koffie (Tia Maria of Licor 43)', de: 'Spanischer Kaffee (Tia Maria oder Licor 43)', en: 'Spanish coffee (Tia Maria or Licor 43)' }, price: 7.95 },
        { id: 'coffee-italiaans', name: { nl: 'Italiaanse koffie (Amaretto)', de: 'Italienischer Kaffee (Amaretto)', en: 'Italian coffee (Amaretto)' }, price: 7.95 },
        { id: 'coffee-engels', name: { nl: 'Engelse koffie (Baileys)', de: 'Englisher Kaffee (Baileys)', en: 'English coffee (Baileys)' }, price: 7.95 },
        { id: 'coffee-duits', name: { nl: 'Duitse koffie (Asbach Uralt)', de: 'Deutscher Kaffee (Asbach Uralt)', en: 'German coffee (Asbach Uralt)' }, price: 7.95 },
        { id: 'coffee-jamaica', name: { nl: 'Jamaicaanse koffie (Jamaica rum)', de: 'Jamaikanischer Kaffee (Jamaika Rum)', en: 'Jamaican coffee (Jamaica rum)' }, price: 7.95 },
        { id: 'gebak-vanaf', name: { nl: 'Diverse soorten gebak vanaf:', de: 'Verschiedene Sorten Gebäck ab:', en: 'Various types of pastries from:' }, price: 3.95 }
      ]
    },
    {
      id: 'limonades',
      title: { nl: 'Limonades en sappen', de: 'Alkoholfreie Getränke und Säfte', en: 'Soft Drinks and Juices' },
      items: [
        { id: 'limo-cola', name: { nl: 'Coca Cola / Zero', de: 'Coca Cola / Zero', en: 'Coca Cola / Zero' }, price: 3.35 },
        { id: 'limo-fanta', name: { nl: 'Fanta Orange', de: 'Fanta Orange', en: 'Fanta Orange' }, price: 3.35 },
        { id: 'limo-cassis', name: { nl: 'Fanta Cassis', de: 'Fanta Cassis', en: 'Fanta Cassis' }, price: 3.60 },
        { id: 'limo-sprite', name: { nl: 'Sprite', de: 'Sprite', en: 'Sprite' }, price: 3.35 },
        { id: 'limo-water', name: { nl: 'Mineraalwater Chaudfontaine rood / blauw', de: 'Mineralwasser Chaudfontaine Sprudel / Naturell', en: 'Mineral water Chaudfontaine sparkling / still' }, price: 3.35 },
        { id: 'limo-apfel', name: { nl: 'Apfelschorle', de: 'Apfelschorle', en: 'Apple spritzer' }, price: 3.35 },
        { id: 'limo-spesi', name: { nl: 'Spesi', de: 'Spesi', en: 'Spesi' }, price: 3.35 },
        { id: 'limo-fuze', name: { nl: 'Fuze Tea Sparkling / Peach / Green', de: 'Fuze Tea Sparkling / Peach / Green', en: 'Fuze Tea Sparkling / Peach / Green' }, price: 3.70 },
        { id: 'limo-tonic', name: { nl: 'Tonic / Bitter Lemon (Finley)', de: 'Tonic / Bitter Lemon (Finley)', en: 'Tonic / Bitter Lemon (Finley)' }, price: 3.50 },
        { id: 'limo-appelsap', name: { nl: 'Appelsap', de: 'Apfelsaft', en: 'Apple juice' }, price: 3.50 },
        { id: 'limo-rivella', name: { nl: 'Rivella Blauw', de: 'Rivella Blauw', en: 'Rivella Blue' }, price: 3.50 },
        { id: 'limo-choco-koud', name: { nl: 'Chocomel (Kaltes Kakaogetränk)', de: 'Chocomel (Kaltes Kakaogetränk)', en: 'Chocolate milk (cold)' }, price: 3.60 },
        { id: 'limo-melk', name: { nl: 'Melk', de: 'Milch', en: 'Milk' }, price: 3.20 },
        { id: 'limo-fristi', name: { nl: 'Fristi', de: 'Erdbeeren Joghurt-drink', en: 'Fristi (strawberry yogurt drink)' }, price: 3.40 },
        { id: 'limo-jus-02', name: { nl: 'Verse jus d’orange (0,2 l)', de: 'Frisch gepresster Orangensaft (0,2 l)', en: 'Fresh orange juice (0.2 l)' }, price: 3.50 },
        { id: 'limo-jus-03', name: { nl: 'Verse jus d’orange (0,3 l)', de: 'Frisch gepresster Orangensaft (0,3 l)', en: 'Fresh orange juice (0.3 l)' }, price: 4.95 },
        { id: 'limo-jus-04', name: { nl: 'Verse jus d’orange (0,4 l)', de: 'Frisch gepresster Orangensaft (0,4 l)', en: 'Fresh orange juice (0.4 l)' }, price: 5.95 }
      ]
    },
    {
      id: 'bieren',
      title: { nl: 'Bieren', de: 'Biere', en: 'Beers' },
      items: [
        { id: 'bier-swinckels-025', name: { nl: 'Swinckels‘ (tap) 0,25 l', de: 'Swinckels‘ (vom Fass) 0,25 l', en: 'Swinckels‘ (draft) 0.25 l' }, price: 3.70 },
        { id: 'bier-swinckels-05', name: { nl: 'Swinckels’ (tap) 0,5 l', de: 'Swinckels’ (vom Fass) 0,5 l', en: 'Swinckels’ (draft) 0.5 l' }, price: 6.95 },
        { id: 'bier-trappe-witte-03', name: { nl: 'La Trappe Witte Trappist (tap) 0,3 l', de: 'La Trappe Witte Trappist (vom Fass) 0,3 l', en: 'La Trappe White Trappist (draft) 0.3 l' }, price: 4.25 },
        { id: 'bier-trappe-witte-05', name: { nl: 'La Trappe Witte Trappist (tap) 0,5 l', de: 'La Trappe Witte Trappist (vom Fass) 0,5 l', en: 'La Trappe White Trappist (draft) 0.5 l' }, price: 6.95 },
        { id: 'bier-bavaria-oud', name: { nl: 'Bavaria Oud Bruin', de: 'Bavaria Oud Bruin', en: 'Bavaria Old Brown' }, price: 4.50 },
        { id: 'bier-weizen', name: { nl: 'Weihen Stephaner Hefe Weizenbier', de: 'Weihen Stephaner Hefe Weizenbier', en: 'Weihen Stephaner Wheat Beer' }, price: 6.95 },
        { id: 'bier-radler', name: { nl: 'Bavaria Radler', de: 'Bavaria Radler', en: 'Bavaria Radler' }, price: 4.50 },
        { id: 'bier-swinckels-av', name: { nl: 'Swinckels’ alcoholvrij', de: 'Swinckels’ alcoholvrij', en: 'Swinckels’ alcohol-free' }, price: 4.50 },
        { id: 'bier-radler-av', name: { nl: 'Bavaria Radler alcoholvrij', de: 'Bavaria Radler alcoholvrij', en: 'Bavaria Radler alcohol-free' }, price: 4.50 },
        { id: 'bier-trappe-nilles', name: { nl: 'La Trappe Nilles alcoholvrij', de: 'La Trappe Nilles alcoholvrij', en: 'La Trappe Nilles alcohol-free' }, price: 4.75 },
        { id: 'bier-weizen-av', name: { nl: 'Weihenstephaner Hefe Weizenbier alc.vrij', de: 'Weihenstephaner Hefe Weizenbier alc.vrij', en: 'Weihenstephaner Wheat Beer alcohol-free' }, price: 6.95 },
        { id: 'bier-trappe-epos', name: { nl: 'La Trappe Epos', de: 'La Trappe Epos', en: 'La Trappe Epos' }, price: 4.75 },
        { id: 'bier-rodenbach', name: { nl: 'Rodenbach Fruitage', de: 'Rodenbach Fruitage', en: 'Rodenbach Fruitage' }, price: 4.50 },
        { id: 'bier-trappe-dubbel', name: { nl: 'La Trappe Dubbel', de: 'La Trappe Dubbel', en: 'La Trappe Dubbel' }, price: 5.75 },
        { id: 'bier-trappe-tripel', name: { nl: 'La Trappe Tripel', de: 'La Trappe Tripel', en: 'La Trappe Tripel' }, price: 5.75 },
        { id: 'bier-trappe-blond', name: { nl: 'La Trappe Blond', de: 'La Trappe Blond', en: 'La Trappe Blond' }, price: 5.75 },
        { id: 'bier-venloosch-alt', name: { nl: 'Venloosch Alt', de: 'Venloosch Alt', en: 'Venloosch Alt' }, price: 4.50 }
      ]
    },
    {
      id: 'sterke-drank',
      title: { nl: 'Gedistilleerd', de: 'Spirituosen', en: 'Spirits' },
      items: [
        { id: 'spirit-jenever-jong', name: { nl: 'Jonge Jenever', de: 'Junger Jenever', en: 'Young Jenever' }, price: 3.50 },
        { id: 'spirit-jenever-oud', name: { nl: 'Oude Jenever', de: 'Alter Jenever', en: 'Old Jenever' }, price: 3.50 },
        { id: 'spirit-jenever-rood', name: { nl: 'Rode Jenever', de: 'Roter Jenever', en: 'Red Jenever' }, price: 3.50 },
        { id: 'spirit-vieux', name: { nl: 'Vieux Dujardin', de: 'Vieux Dujardin', en: 'Vieux Dujardin' }, price: 3.50 },
        { id: 'spirit-kummerling', name: { nl: 'Kümmerling', de: 'Kümmerling', en: 'Kümmerling' }, price: 3.25 },
        { id: 'spirit-jager', name: { nl: 'Jägermeister', de: 'Jägermeister', en: 'Jägermeister' }, price: 3.25 },
        { id: 'spirit-apfelkorn', name: { nl: 'Apfelkorn', de: 'Apfelkorn', en: 'Apfelkorn' }, price: 3.25 },
        { id: 'spirit-killepitsch', name: { nl: 'Killepitsch', de: 'Killepitsch', en: 'Killepitsch' }, price: 3.25 },
        { id: 'spirit-asbach', name: { nl: 'Asbach Uralt', de: 'Asbach Uralt', en: 'Asbach Uralt' }, price: 3.25 },
        { id: 'spirit-fernet', name: { nl: 'Fernet Branca, Menta', de: 'Fernet Branca, Menta', en: 'Fernet Branca, Menta' }, price: 3.50 },
        { id: 'spirit-limon', name: { nl: 'Limoncello', de: 'Limoncello', en: 'Limoncello' }, price: 4.50 },
        { id: 'spirit-grappa', name: { nl: 'Grappa', de: 'Grappa', en: 'Grappa' }, price: 4.50 },
        { id: 'spirit-port', name: { nl: 'Rode port', de: 'Portwein rot', en: 'Red port' }, price: 4.50 },
        { id: 'spirit-campari', name: { nl: 'Campari', de: 'Campari', en: 'Campari' }, price: 4.50 },
        { id: 'spirit-amaretto', name: { nl: 'Amaretto', de: 'Amaretto', en: 'Amaretto' }, price: 4.50 },
        { id: 'spirit-tiamaria', name: { nl: 'Tia Maria', de: 'Tia Maria', en: 'Tia Maria' }, price: 4.50 },
        { id: 'spirit-rum', name: { nl: 'Jamaica Rum', de: 'Jamaica Rum', en: 'Jamaica Rum' }, price: 4.50 },
        { id: 'spirit-baileys', name: { nl: 'Bailey’s', de: 'Bailey’s', en: 'Bailey’s' }, price: 4.50 },
        { id: 'spirit-grandmarnier', name: { nl: 'Grand Marnier', de: 'Grand Marnier', en: 'Grand Marnier' }, price: 4.50 },
        { id: 'spirit-whisky', name: { nl: 'Irish Whisky', de: 'Irish Whisky', en: 'Irish Whisky' }, price: 4.50 },
        { id: 'spirit-licor43', name: { nl: 'Licor 43', de: 'Licor 43', en: 'Licor 43' }, price: 4.50 },
        { id: 'spirit-sherry', name: { nl: 'Sherry Medium / Dry', de: 'Sherry Medium / Dry', en: 'Sherry Medium / Dry' }, price: 4.50 },
        { id: 'spirit-martini', name: { nl: 'Martini Bianco / Rosso', de: 'Martini Bianco / Rosso', en: 'Martini Bianco / Rosso' }, price: 4.50 },
        { id: 'spirit-cognac', name: { nl: 'Franse Cognac', de: 'Französischer Cognac', en: 'French Cognac' }, price: 7.00 }
      ]
    },
    {
      id: 'wijnen',
      title: { nl: 'Wijn & Sekt', de: 'Wein & Sekt', en: 'Wine & Sekt' },
      items: [
        { id: 'wijn-zoet', name: { nl: 'Witte huiswijn zoet', de: 'Süβer weiβer Hauswein', en: 'Sweet white house wine' }, price: 'Glas: 4,25 / Karaf: 13,95 / Fles: 21,50' },
        { id: 'wijn-droog', name: { nl: 'Witte huiswijn droog', de: 'Trockenem weiβer Hauswein', en: 'Dry white house wine' }, price: 'Glas: 4,95 / Karaf: 15,95 / Fles: 24,50' },
        { id: 'wijn-rose', name: { nl: 'Rosé huiswijn halfdroog', de: 'Hauswein rosé halbtrocken', en: 'Rosé house wine semi-dry' }, price: 'Glas: 4,95 / Karaf: 15,95 / Fles: 24,50' },
        { id: 'wijn-rood', name: { nl: 'Rode huiswijn halfdroog', de: 'Halbtrockener roter Hauswein', en: 'Red house wine semi-dry' }, price: 'Glas: 4,95 / Karaf: 15,95 / Fles: 24,50' },
        { id: 'sekt-piccolo', name: { nl: 'Piccolo Sekt halfdroog, flesje 0,2 l', de: 'Piccolo Sekt halbtrocken, Flasche 0,2 l', en: 'Piccolo Sekt semi-dry, 0.2 l bottle' }, price: 7.95 }
      ]
    },
    {
      id: 'desserts',
      title: { nl: 'IJscoupes & Patisserie', de: 'Eisbecher & Gebäck', en: 'Ice Cream & Pastry' },
      items: [
        { id: 'ice-advocaat', name: { nl: 'Coupe advocaat', de: 'Eierlikörbecher', en: 'Advocaat coupe' }, price: 7.95 },
        { id: 'ice-straciatella', name: { nl: 'Coupe straciatella', de: 'Straciatellabecher', en: 'Straciatella coupe' }, price: 7.95 },
        { id: 'ice-kersen', name: { nl: 'Coupe warme kersen', de: 'Eisbecher warme Kirschen', en: 'Warm cherry coupe' }, price: 7.95 },
        { id: 'ice-tricolore', name: { nl: 'Coupe Tricolore', de: 'Tricolore Eisbecher', en: 'Tricolore coupe' }, price: 7.95 },
        { id: 'ice-aardbei', name: { nl: 'Coupe aardbei (seizoen)', de: 'Erdbeerbecher (Saison)', en: 'Strawberry coupe (seasonal)' }, price: 7.95 },
        { id: 'ice-dame-blanche', name: { nl: 'Coupe Dame Blanche', de: 'Eisbecher Dame Blanche', en: 'Dame Blanche coupe' }, price: 7.95 },
        { id: 'ice-amarena', name: { nl: 'Coupe amarena', de: 'Amarenabecher', en: 'Amarena coupe' }, price: 7.95 },
        { id: 'ice-koffie', name: { nl: 'IJskoffie', de: 'Eiskaffee', en: 'Iced coffee' }, price: 5.95 },
        { id: 'ice-choco', name: { nl: 'IJs-chocomel', de: 'Eis Kakao', en: 'Iced chocolate' }, price: 5.95 },
        { id: 'pat-wafel-kersen', name: { nl: 'Knapperige Brusselse wafel met warme kersen, ijs en slagroom', de: 'Knusprige Waffel Brüsseler Art mit warme Kirschen, Eis und Sahne', en: 'Crispy Brussels waffle with warm cherries, ice cream and whipped cream' }, price: 8.95 },
        { id: 'pat-wafel-aardbei', name: { nl: 'Knapperige Brusselse wafel met aardbeien, ijs en slagroom (seizoen)', de: 'Knusprige Waffel Brüsseler Art mit Erdbeeren, Eis und Sahne (Saison)', en: 'Crispy Brussels waffle with strawberries, ice cream and whipped cream (seasonal)' }, price: 8.95 },
        { id: 'pat-wafel-advokaat', name: { nl: 'Knapperige Brusselse wafel met advokaat, chocoladesaus, ijs en slagroom', de: 'Knusprige Waffel Brüsseler Art mit Eierlikör, Schokoladensauce, Eis und Sahne', en: 'Crispy Brussels waffle with advocaat, chocolate sauce, ice cream and whipped cream' }, price: 8.95 },
        { id: 'pat-strudel', name: { nl: 'Warme apfelstrudel met ijs en slagroom', de: 'Warmer Apfelstrudel mit Eis und Sahne', en: 'Warm apple strudel with ice cream and whipped cream' }, price: 8.95 },
        { id: 'pat-gebak', name: { nl: 'Diverse soorten gebak vanaf:', de: 'Verschiedene Sorten Gebäck ab:', en: 'Various types of pastries from:' }, price: 3.95 }
      ]
    },
  ]
};
