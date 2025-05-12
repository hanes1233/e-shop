const readline = require('readline');
const axios = require('axios');
const getColors = require('./colors');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const URL = 'http://localhost:8080';
var jwt = null;

const authenticate = async () => {
    const email = 'changeToEmail'; // TODO: use system variable
    const password = 'changeToPassword'; // TODO: use system variable

    const payload = {
        email: email,
        password: password
    }

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        const response = await axios.post(`${URL}/api/auth/login`, payload, config);
        console.log('Token fetched');
        jwt = response.data;
    } catch (error) {
        throw new Error('Authentication fails. Token was not fetched');
    }
}

(async () => {
    await authenticate();
})();

const actionManager = () => {
    console.log('Hi there! What action would you like to execute?');
    console.log('Fill specific item type (type "fill -i"');
    console.log('Fill all items (type "fill -a"');

    rl.question('Enter your command: ', (answer) => {
        let count;
        if (answer === 'fill -i') {
            // TODO: change message and specify category (subcategory?)
            rl.question('Perfect! How many times? (type "[count]"): ', (countInput) => {
                count = validateInput(countInput, answer);
                fillSpecificItemsCategory();
            })
        } else if (answer === 'fill -a') {
            rl.question('Perfect! How many times? (type "[count]"): ', (countInput) => {
                count = validateInput(countInput, answer);
                fillAllItems(count);
            })
        } else {
            console.log('Unknown command.');
        }

        rl.close();
    });
}

const validateInput = (input, answer) => {
    const count = parseInt(input, 10);
    if (!isNaN(count)) {
        console.log(`Executing "${answer}" ${count} times...`);
        return count;
    } else {
        throw new Error('Invalid count format.');
    }
}

const fillAllItems = (count) => {
    let i = 0;
    while (i < count) {
        const randomObject = getRandomObject();
        // TODO: execute POST for all subcategories (set up BE to execute them async!!! (callable?))
    }
}

const fillSpecificItemsCategory = () => {

}

const getRandomObject = () => {

    const template = {
        id: null,
        accessoriesId: crypto.randomUUID(),
        item: {
            itemName: "Modern pen",
            brand: "Schooler s.r.o",
            reserved: 0,
            colors: getColors(),
            type: "Pen",
            quantity: Math.floor(Math.random() * (150 - 0 + 1)) + 0,
            isAvailable: true,
            itemCreateDate: Date.now(),
            description: "Pen for kids",
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

actionManager();

