const episodes = [
    {
        id: 1,
        season: 1,
        episode: 1,
        name: "Fire in the Hole",
        air_date: "2010-03-16",
        blurb: "Marshal Givens returns home and is assigned a case involving an old friend from his coal mining days who has become a white supremacist and blew up an African American church."
    },
    {
        id: 2,
        season: 1,
        episode: 2,
        name: "Riverbrook",
        air_date: "2010-03-23",
        blurb: "Raylan hunts an escaped prisoner who is determined to reunite with his ex-wife...and his stashed fortune."
    },
    {
        id: 3,
        season: 1,
        episode: 3,
        name: "Fixer",
        air_date: "2010-03-30",
        blurb: "Raylan comes to the aid of a bookie informant, who has been kidnapped by one of his collectors and one of his delinquent clients."
    },
    {
        id: 4,
        season: 1,
        episode: 4,
        name: "Long in the Tooth",
        air_date: "2010-04-06",
        blurb: "Raylan and the mob compete to capture a fugitive, Roland Pike, racing to the Mexican border."
    },
    {
        id: 5,
        season: 1,
        episode: 5,
        name: "The Lord of War and Thunder",
        air_date: "2010-04-13",
        blurb: "Raylan's surveillance job on a fugitive is interrupted when he is forced to deal with his troubled father, who is causing mischief for a drug dealer who is renting from him."
    },
    {
        id: 6,
        season: 1,
        episode: 6,
        name: "The Collection",
        air_date: "2010-04-20",
        blurb: "Raylan turns to an art collector to help bring a criminal to justice, but the case soon turns to a murder investigation. Meanwhile, Raylan's ex-wife turns to him for help, and he turns to Boyd Crowder to gather dirt on his father. "
    },
    {
        id: 7,
        season: 1,
        episode: 7,
        name: "Blind Spot",
        air_date: "2010-04-27",
        blurb: "Raylan and Ava survive a hitman's attack, and Raylan suspects that the Crowder family is trying to get revenge on Ava. But are his own biases clouding his judgment?"
    },
    {
        id: 8,
        season: 1,
        episode: 8,
        name: "Blowback",
        air_date: "2010-05-04",
        blurb: "Raylan tries to defuse a hostage situation in the Marshals' office without any casualties, and later discovers that his relationship with Ava could have repercussions on Boyd Crowder's prison sentence."
    },
    {
        id: 9,
        season: 1,
        episode: 9,
        name: "Hatless",
        air_date: "2010-05-11",
        blurb: "While away from the Marshall's office because of a forced 'vacation', Raylan comes to the aid of his ex-wife after she is threatened by dangerous loan collectors who are looking for her husband."
    },
    {
        id: 10,
        season: 1,
        episode: 10,
        name: "The Hammer",
        air_date: "2010-05-18",
        blurb: "Fresh out of prison, Boyd Crowder begins his mission to bring 'religion' to the backwoods. Meanwhile Raylan starts trying to make a new case against Boyd while working as a bodyguard for a judge whose life has been threatened."
    },
    {
        id: 11,
        season: 1,
        episode: 11,
        name: "Veterans",
        air_date: "2010-05-25",
        blurb: "Raylan learns that his dad's life is in danger because he ran Bo Crowder's business while Bo was in prison and ran it into the ground. Raylan turns to an unlikely source to pin a meth lab killing on Boyd Crowder."
    },
    {
        id: 12,
        season: 1,
        episode: 12,
        name: "Fathers and Sons",
        air_date: "2010-06-01",
        blurb: "The marshals are forced to turn to Arlo for help in making a case against Bo Crowder, but will he go along? Meanwhile, Bo is having problems of his own with Boyd, who continues to wage a religious war against his drug business."
    },
    {
        id: 13,
        season: 1,
        episode: 13,
        name: "Bulletville",
        air_date: "2010-06-08",
        blurb: "Bo gets revenge on Boyd for blowing up his ephedrine shipment, asks Arlo to help him kill Raylan at the request of the Miami cartel, and kidnaps Ava for bait and insurance against Raylan."
    }
]

const characters = [
    {
        id: 1,
        name: "Timothy Olyphant",
        character: "Raylan Givens",
        episodes: 78
    },
    {
        id: 2,
        name: "Nick Searcy",
        character: "Art Mullen",
        episodes: 78
    },
    {
        id: 3,
        name: "Joelle Carter",
        character: "Ava Crowder",
        episodes: 78
    },
    {
        id: 4,
        name: "Jacob Pitts",
        character: "Tim Gutterson",
        episodes: 78
    },
    {
        id: 5,
        name: "Erica Tazel",
        character: "Rachel Brooks",
        episodes: 78
    },
    {
        id: 6,
        name: "Walton Goggins",
        character: "Boyd Crowder",
        episodes: 74
    },
    {
        id: 7,
        name: "Natalie Zea",
        character: "Winona Hawkins",
        episodes: 49
    },
    {
        id: 8,
        name: "Jere Burns",
        character: "Wynn Duffy",
        episodes: 46
    },
    {
        id: 9,
        name: "David Meunier",
        character: "Johnny Crowder",
        episodes:  39
    },
    {
        id: 10,
        name: "Raymond J. Barry",
        character: "Arlo Givens",
        episodes: 23
    },
]

const foods = [
    'apple',
    'bagel',
    'batter',
    'beans',
    'beer',
    'biscuit',
    'bread',
    'broth',
    'burger',
    'butter',
    'cake',
    'candy',
    'caramel',
    'caviar',
    'cheese',
    'chili',
    'chocolate',
    'cider',
    'cobbler',
    'cocoa',
    'coffee',
    'cookie',
    'cream',
    'croissant',
    'crumble',
    'cuisine',
    'curd',
    'dessert',
    'dish',
    'drink',
    'eggs',
    'entree',
    'filet',
    'fish',
    'flour',
    'foie gras',
    'food',
    'glaze',
    'grill',
    'hamburger',
    'ice',
    'juice',
    'ketchup',
    'kitchen',
    'lard',
    'liquor',
    'margarine',
    'marinade',
    'mayo',
    'mayonnaise',
    'meat',
    'milk',
    'mousse',
    'muffin',
    'mushroom',
    'noodle',
    'nut',
    'oil',
    'olive',
    'omelette',
    'pan',
    'pasta',
    'paste',
    'pastry',
    'pie',
    'pizza',
    'plate',
    'pot',
    'poutine',
    'pudding',
    'raclette',
    'recipe',
    'rice',
    'salad',
    'salsa',
    'sandwich',
    'sauce',
    'seasoning',
    'skillet',
    'soda',
    'soup',
    'soy',
    'spice',
    'steak',
    'stew',
    'syrup',
    'tartar',
    'taste',
    'tea',
    'toast',
    'vinegar',
    'waffle',
    'water',
    'wheat',
    'wine',
    'wok',
    'yeast',
    'yogurt'
    ]

module.exports = {
    episodes: episodes,
    characters: characters,
    foods: foods
} 