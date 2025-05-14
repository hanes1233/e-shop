const getRandomString = require('./utils');
const getColors = require('./colors');

const getRandomObject = () => {

    const template = {
        id: null,
        accessoriesId: crypto.randomUUID(),
        item: {
            itemName: getRandomString(5),
            brand: getRandomString(5) + 's.r.o.',
            reserved: 0,
            colors: getColors(),
            type: getRandomString(4),
            quantity: Math.floor(Math.random() * (150 - 0 + 1)) + 0,
            isAvailable: true,
            itemCreateDate: Date.now(),
            description: getRandomString(10),
            size: null,
            itemId: crypto.randomUUID(),
            subcategory: {
                "id": 13
            },
            "category": {
                "id": 4
            }
        }
    }
    return template;
}

const getAccessoryBatch = () => {};

const getAccessoryItem = () => {
    return getRandomObject();
}

module.exports = getAccessoryItem;