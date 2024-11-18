/*
Frank from Franks Funky Furniture Shop asked us to help clear up an on-going problem in their store! Frank offers so many options for couches, chairs, and tables that their customers complain that its hard to find the piece they are looking for. Frank needs our help creating a system that their customers can use to make shopping the inventory easier. 

Frank is supplying us with an electronic sign to display a list of things that customers will see before they enter the store. While they already started, Frank had to stop bc they didn't go to NSS and had no idea what they were doing. Fix the mistakes using your mad debugging skills and display the information Frank is looking to show their customers. 

Tasks:
-  * Display the heaviest couch in stock along with the color of the couch 
- Display the shortest table in stock along with the material and brand
- * Display all the couches that are Blue along with the fabric and depth of the couch
- Display the most expensive chair and its firmness 

- Tell the customers how many chairs and couches we currently have in stock


*/

const couches = [{
    id: 1,
    price: "$$",
    firmness: 8,
    weight: 105.19602,
    color: "Blue",
    fabric: "leather",
    depth: 10.46
}, {
    id: 2,
    price: "$$$",
    firmness: -5,
    weight: -76.5452105,
    color: "Kane County Twinpod",
    fabric: "Suede",
    depth: 6.88
}, {
    id: 3,
    price: "$$",
    firmness: 10,
    weight: -75.9373449,
    color: "Pinewoods Horkelia",
    fabric: "leather",
    depth: 49.2
}, {
    id: 4,
    price: "$$$$",
    firmness: -.80,
    weight: -65.2939441,
    color: "Blue",
    fabric: "velvet",
    depth: 20.51
}, {
    id: 5,
    price: "$$$",
    firmness: 7,
    weight: 118.400294,
    color: "Spiny Hopsage",
    fabric: "leather",
    depth: 6.6
}, {
    id: 6,
    price: "$$$$$",
    firmness: 8,
    weight: -8.6457376,
    color: "Blue",
    fabric: "Courderoy",
    depth: 37.68
}, {
    id: 7,
    price: "$",
    firmness: 3,
    weight: 119.724733,
    color: "Largeflower Skeletonplant",
    fabric: "leather",
    depth: 36.64
}, {
    id: 8,
    price: "$$",
    firmness: 3,
    weight: 141.2777515,
    color: "Blue",
    fabric: "Cotton",
    depth: 30.37
}, {
    id: 9,
    price: "$$",
    firmness: 7,
    weight: 21.83333,
    color: "Glory Of Texas",
    fabric: "leather",
    depth: 11.26
}, {
    id: 10,
    price: "$$$$",
    firmness: 5,
    weight: 121.435112,
    color: "Spreading Wallflower",
    fabric: "leather",
    depth: 37.49
}, {
    id: 11,
    price: "$$$",
    firmness: 6,
    weight: 35.018481,
    color: "Western Sandcherry",
    fabric: "leather",
    depth: 46.4
}, {
    id: 12,
    price: "$$",
    firmness: 9,
    weight: 108.957345,
    color: "Tecate Tarweed",
    fabric: "leather",
    depth: 43.84
}, {
    id: 13,
    price: "$",
    firmness: 4,
    weihgt: 2.7011678,
    color: "Texas Geranium",
    fabric: "leather",
    depth: 31.28
}, {
    id: 14,
    price: "$",
    firmnes: 10,
    weight: 17.5704656,
    color: "Point Reyes Ceanothus",
    fabric: "leather",
    depth: 23.57
}, {
    id: 15,
    price: "$$",
    firmness: 10,
    weight: 44.32414,
    color: "Awl-leaf Wattle",
    fabric: "leather",
    depth: 13.47
}, {
    id: 16,
    price: "$$$$$",
    firmness: 5,
    weight: 122.8950755,
    color: "Honeysuckle",
    fabric: "leather",
    depth: 28.39
}, {
    id: 17,
    price: "$$$",
    firmness: -8,
    weight: -39.6105142,
    color: "Coolwort",
    fabric: "leather",
    depth: 15.54
}, {
    id: 18,
    price: "$",
    firmness: -3,
    weight: -44.9561012,
    color: "Common Leopardbane",
    fabric: "leather",
    depth: 24.62
}, {
    id: 19,
    price: "$$",
    firmness: 4,
    weight: 13.9920633,
    color: "Climbing Fern",
    fabric: "leather",
    depth: 41.07
}, {
    id: 20,
    price: "$$$$",
    firmness: 3,
    weight: 111.033425,
    color: "Distinct Map Lichen",
    fabric: "leather",
    depth: 32.2
}, {
    id: 21,
    price: "$$",
    firmness: 9,
    weight: 25.9053209,
    color: "Hooker's Milkwort",
    fabric: "leather",
    depth: 22.0
}, {
    id: 22,
    price: "$$$",
    firmness: 7,
    weight: 125.16258,
    color: "Mariposa Lily",
    fabric: "leather",
    depth: 44.14
}, {
    id: 23,
    price: "$$$$",
    firmness: 1,
    weight: 17.9557436,
    color: "Russethair Saxifrage",
    fabric: "leather",
    depth: 18.36
}, {
    id: 24,
    price: "$$$$",
    firmness: 0,
    weight: 20.7001411,
    plantHighlights: "Jepson's Linanthus",
    depth: 39.46
}, {
    id: 25,
    price: "$$$",
    firmness: 0,
    weight: 50.5446161,
    color: "Tushar Range Beardtongue",
    fabric: "leather",
    depth: 45.54
}]


const chairs = [{
    id: 1,
    price: "$$$$",
    firmness: 0,
    weight: 12.2028691,
    fabric: "Leather",
    color: "Blue",
    depth: 22
}, {
    id: 2,
    price: "$$$$$",
    firmness: -5,
    weight: -51.8148609,
    fabric: "Velvet",
    color: "Pink",
    depth: 73
}, {
    id: 3,
    price: "$$$$",
    firmness: 9,
    weight: 49.6634858,
    fabric: "Upholstery",
    color: "Rainbow",
    depth: 19
}, {
    id: 4,
    price: "$$",
    firmness: 4,
    weight: -8.5624704,
    fabric: "Cotton",
    color: "Mauve",
    depth: 15
}, {
    id: 5,
    price: "$$$",
    firmness: 5,
    weight: 60.4807823,
    fabric: "Leather",
    depth: 32
}, {
    id: 6,
    price: "$$$",
    firmness: 1,
    weight: 122.4801854,
    fabric: "Leather",
    color: "Green",
    depth: 67
}, {
    id: 7,
    price: "$",
    firmness: 2,
    weight: -102.3342182,
    fabric: "Cotton",
    color: "Black",
    depth: 88
}, {
    id: 8,
    price: "$$",
    firmness: 8,
    weight: 104.2532768,
    fabric: "Velvet",
    color: "Blue",
    depth: 52
}, {
    id: 9,
    price: "$$$$",
    firmness: 1,
    weight: 122.3862362,
    fabric: "leather",
    color: "Brown",
    depth: 78
}, {
    id: 10,
    price: "$$$",
    firmness: 6,
    weight: 21.1886684,
    fabric: "Upholstery",
    color: "Pink Flowers",
    depth: 74
}, {
    id: 11,
    price: "$$$",
    firmness: 7,
    weight: 114.246016,
    fabric: "Cotton",
    color: "Green",
    depth: 100
}, {
    id: 12,
    price: "$$$$$$",
    firmness: 6,
    weight: 23.6314746,
    fabric: "Cotton",
    coloor: "Blue",
    depth: 13
}, {
    id: 13,
    price: "$",
    firmness: 0,
    weight: 13.8300629,
    fabric: "Cotton",
    color: "Red",
    depth: 61
}, {
    id: 14,
    price: "$",
    firmness: -6,
    weight: 107.7918964,
    fabric: "Velvet",
    color: "Purple",
    depth: 90
}, {
    id: 15,
    price: "$$",
    firmness: 2,
    weight: 102.591737,
    fabric: "Upholstery",
    color: "Neon Orange",
    depth: 55
}, {
    id: 16,
    price: "$$$",
    firmness: 3,
    weight: 117.323725,
    fabric: "Cotton",
    color: "Forest Green",
    depth: 50
}, {
    id: 17,
    price: "$$$",
    firmness: 5,
    weight: -114.001928,
    fabric: "Upholstery",
    color: "goldenrod",
    depth: 84
}, {
    id: 18,
    price: "$",
    firmness: 7,
    weight: 45.7420648,
    fabric: "Upholstery",
    color: "Red",
    depth: 70
}, {
    id: 19,
    price: "$",
    firmness: 10,
    weight: 8.8831506,
    fabric: "Leather",
    color: "Blue",
    depth: 71
}, {
    id: 20,
    price: "$$",
    firmness: 0,
    weight: 23.7946578,
    fabric: "Leather",
    color: "Orange",
    depth: 65
}, {
    id: 21,
    price: "$",
    firmness: 2,
    weight: 11.3885001,
    fabric: "Leather",
    color: "Pink",
    depth: 46
}, {
    id: 22,
    price: "$$",
    firmness: 4,
    weight: 34.6661709,
    fabric: "Velvet",
    color: "Yellow",
    depth: 77
}, {
    id: 23,
    price: "$$$",
    firmness: 4,
    weight: 23.6556259,
    fabric: "Cotton",
    color: "Blue",
    depth: 46
}, {
    id: 24,
    price: "$$$$",
    firmness: 9,
    weight: 44.9159938,
    fabric: "Velvet",
    color: "Ornage",
    depth: 77
}, {
    id: 25,
    price: "$$",
    firmness: 0,
    weight: 121.682569,
    fabric: "Leather",
    color: "Blue",
    depth: 87
}]

const tables = [{
    id: 1,
    price: "$$$",
    weight: 12.674,
    material: "glass",
    brand: "Ikea",
    length: 27
}, {
    id: 3,
    price: "$$$$",
    weight: 19,
    material: "Oak",
    brand: "Fanks",
    length: 33
}, {
    id: 4,
    price: "$$",
    weight: 10,
    material: "plywood",
    brand: "Okland",
    Length: 12
}

]


// Get the heaviest of all couches
const heaviestCouch = (couchArray) => {
    let heaviest = 0
    for (const couch of couchArray) {
        if (couch.weight > heaviest) {
            heaviest = couch.weight
        }
    }

    return heaviest
}


// Get the blue couches
// need depth & fabric 
// create variable to stores all blue couches & depths & fabric
// store the couches in the new array
// return array 
const blueCouches = (allCouches) => {
    let blueString = ""
    for (const couch of allCouches) {
        if (couch.color == "Blue") {
            blueString += `${couch.fabric} and a depth of ${couch.depth} \n`

        }
    }

    return blueString
}


console.log(`
       F R A N K S   F U N K Y  F U R N I T U R E   S H O P
    ***********************************************************
`)


console.log('***************************************************')
console.log('*****     C O U C H E S and S T U F F         *****')
console.log('***************************************************')

const heavyCouch = heaviestCouch(couches)
console.log(`The heaviest couch is ${heavyCouch} Pounds`)

const allBlueCouches = blueCouches(couches)
console.log(`We have these blue couches: \n ${allBlueCouches} `)

