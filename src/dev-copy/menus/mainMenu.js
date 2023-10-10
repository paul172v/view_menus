////// Arrays
//// Starters
exports.startersArr = [
  {
    name: "Chef's Soup of the Day",
    dietary: ["gfo", "vgo"],
    details: "Served with fresh bloomer bread",
    price: 5.3,
  },
  {
    name: "Prawn Cocktail",
    dietary: ["gfo"],
    details:
      "Sweet, juicy prawns served with crisp lettuce, cherry tomato and cucumber with our Marie Rose sauce",
    price: 7.5,
  },
  {
    name: "Crispy Chicken Strips",
    details:
      "Southern fried crispy chicken strips served with a dressed salad and BBQ dip",
    price: 6.3,
  },
  {
    name: "Tattie Scone Nachos",
    dietary: ["v", "vgo"],
    details:
      "A classic with a twist, potato scone wedges deep fried and topped with parmesan cheese, served with sour cream and salsa dips",
    price: 5.95,
  },
  {
    name: "Crispy Halloumi Fries",
    dietary: ["v"],
    details: "Topped with spring onions and chillies served with a chilli jam",
    price: 6.5,
  },
];

//// Sharer
exports.sharerArr = [
  {
    name: "Argyll Sharer",
    dietary: ["vgo"],
    details:
      "All of our favourites on one plate: Southern fried crispy chicken strips, beer battered onion rings, mac & cheese bites, garlic ciabatta, potato wedges and tortilla chips served with BBQ and sour cream dips",
    price: 16.95,
  },
];

//// Main Meals
exports.mainsArr = [
  {
    name: "Homemade Mac & Cheese",
    dietary: ["v"],
    details:
      "Macaroni in a creamy three cheese sauce topped with a parmesan crumb served with a fresh dressed side salad and garlic ciabatta or chips",
    add: [
      ["Streaky bacon", 2.5],
      ["Chicken", 3.0],
    ],
    price: 13.5,
  },
  {
    name: "Steak & Ale Pie",
    details:
      "Prime Scottish chunks of beef, slowly cooked in a real ale gravy topped with a puff pastry lid served with chips or new potatoes and seasonal vegetables",
    price: 14.95,
  },
  {
    name: "IPA Beer Battered Fish & Chips",
    details:
      "Traditional crispy hand battered haddock fillet served with chips, garden peas, lemon wedge, pickled onion and tartare sauce (may contain small bones)",
    price: 15.5,
  },
  {
    name: "Herb Crumb Langoustine Scampi",
    details:
      "Served with chips, chunky tartare sauce, lemon wedge and watercress salad",
    price: 15.95,
  },
  {
    name: "Penang Curry",
    dietary: ["v", "vgo"],
    details:
      "Vegetarian red Thai curry with both a sweet and salty taste. Served with vegan friendly garlic & coriander naan bread, basmati rice, mini onion bhaji and mango chutney",
    add: [
      ["Chicken", 3.0],
      ["King Prawns", 5.0],
    ],
    price: 12.95,
  },
  {
    name: "Duck Bao Buns",
    details:
      "Shredded hoisin duck served with cucumber, spring onion, steamed bao buns and Togarashi fries",
    price: 15.95,
  },
];

//// Salads
exports.saladsArr = [
  {
    name: "Cajun Chicken & Chorizo",
    price: 13.95,
  },
  {
    name: "Beetroot & Feta Cheese",
    price: 12.95,
    dietary: ["v"],
  },
];

//// Steaks
exports.steaksArr = [
  {
    name: "Sirloin 10oz",
    details:
      "Dry-aged and matured by our trusted butcher, seasoned with rock salt and chargrilled the way you like it. Served with roasted vine cherry tomatoes, portobello mushroom, beer battered onion rings and fries",
    dietary: ["gfo"],
    add: ["Peppercorn sauce", 2.45],
    price: 25.95,
  },
];

//// Burgers
exports.burgersArr = [
  {
    name: "Gourmet Beef Burger",
    details:
      "6oz beef pattie, streaky bacon, Monterey Jack cheese. Served in a brioche bun with Batavia leaves, sliced tomato dill pickle, crunchy slaw, beer battered onion rings, Arran tomato relish and fries",
    price: 14.95,
  },
  {
    name: "Buttermilk Chicken Burger",
    details:
      "Served in a brioche bun with Batavia leaves, sliced tomato, dill pickle, crunchy slaw, beer battered onion rings, sriracha mayo and fries",
    add: [
      ["Monterey Jack", 1],
      ["Spicy Mexican Cheese", 1],
    ],
    price: 12.95,
  },
  {
    name: "Vegan Louisiana",
    details:
      "Shredded Chick'n coated in a crunchy Louisiana seasoned cornbread crumb, served in a gourmet bun with Batavia leaves, sliced tomato, dill pickle, vegan cheddar cheese, topped with panko coated onion rings. Served with fries and sriracha vegan mayo on the side",
    dietary: ["v", "vgo"],
    add: [
      ["Monterey Jack", 1],
      ["Spicy Mexican Cheese", 1],
    ],
    price: 14.95,
  },
];

//// Sides
exports.sidesArr = [
  { name: "Chunky Chips", dietary: ["v"], price: 3.75 },
  { name: "Fries", dietary: ["v"], price: 3.75 },
  { name: "Truffle & Parmesan Fries", dietary: ["v"], price: 4.85 },
  { name: "Garlic Ciabatta", dietary: ["v"], price: 3.8 },
  { name: "Garlic Ciabatta With Cheddar Cheese", dietary: ["v"], price: 4.95 },
  { name: "Beer Battered Onion Rings", dietary: ["v"], price: 4.25 },
  { name: "Crunchy Slaw", dietary: ["v"], price: 2.7 },
  { name: "Crisp Leaf Salad, Ranch Dressing", dietary: ["v"], price: 4.25 },
  { name: "Seasonal Vegetables", dietary: ["v"], price: 4.25 },
];

//// Loaded Fries
exports.loadedFriesArr = [
  { name: "Beef Chilli Cheese", dietary: ["vgo"], price: 7.5 },
  { name: "Cheese, Chives & Bacon Bits", price: 7.5 },
  { name: "Mac & Cheese", dietary: ["v"], price: 7.5 },
];

//// Desserts
exports.dessertsArr = [
  {
    name: "White Chocolate & Raspberry Cheesecake",
    details:
      "A twist on a classic flavour combination, tangy raspberry filling set on a biscuit crumb base topped with Isle of Arran vanilla ice cream and toffee sauce",
    price: 6.7,
  },
  {
    name: "Sticky Biscoffee Pudding",
    dietary: ["v"],
    details:
      "Sweet and sticky toffee pudding served warm with Isle of Arran vanilla ice cream and Biscoff crumb",
    price: 6.7,
  },
  {
    name: "Toffee Waffle",
    dietary: ["v"],
    details:
      "Sweet Belgian waffle topped with two scoops of Isle of Arran vanilla ice cream and toffee sauce",
    price: 6.7,
  },
  {
    name: "Ultimate Chocolate Fudge Cake",
    dietary: ["v"],
    details:
      "Double layered chocolate cake served warm with Isle of Arran vanilla ice cream",
    price: 6.7,
  },
  {
    name: "Isle of Arran Ice Cream",
    dietary: ["gfo", "v"],
    details: "Award winning Scottish Ice Cream",
    scoops: [
      ["2 Scoops", 4.5],
      ["3 Scoops", 6.95],
    ],
  },
];
