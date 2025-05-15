const readline = require('readline');
const axios = require('axios');
const getAccessoryItem = require('./accessory');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const categories = ['TOYS', 'DRESS', 'SHOES', 'ACCESSORIES', 'FURNITURE', 'BABY', 'SPORT'];
const URL = 'http://localhost:8080';
var jwt = null;

const authenticate = async () => {
    const email = process.env.EMAIL_ENV;
    const password = process.env.AUTH_PASSWORD_ENV;

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
    console.log('Fill specific category: -i');
    console.log('Fill all categories: -a');

    rl.question('Enter your command: ', (answer) => {
        let count;

        if (answer === '-i') {
            rl.question('Choose category and count of items : [category] -[count]: ', (input) => {
                let category = retrieveCategory(input);
                let count = retrieveCount(input);
                validateCategory(category);
                count = validateCount(count, answer);
                console.log('count is ' + count);
                if (count > 0) {
                    fillSpecificItemsCategory(count);
                    rl.close();
                } else {
                    rl.close();
                }
            });

        } else if (answer === '-a') {
            rl.question('Perfect! How many times? (type "[count]"): ', (countInput) => {
                count = validateCount(countInput);
                if (count > 0) {
                    fillAllItems(count);
                    rl.close();
                } else {
                    rl.close();
                }
            });

        } else {
            console.log('Unknown command.');
            rl.close();
        }
    });
}

const retrieveCategory = (input) => {
    if (input.includes("-")) {
        const rawCategory = input.substring(0, input.indexOf("-"));
        return rawCategory.trim();
    } else {
        throw new Error('Wrong input, use format [category] -[count]');
    }
};

const retrieveCount = (input) => {
    const index = input.indexOf("-") + 1;
    return input.substring(index);
};

const validateCount = (input) => {
    const count = parseInt(input, 10);
    if (!isNaN(count)) {
        return count;
    } else {
        throw new Error('Invalid count format.');
    }
}

const validateCategory = (category) => {
    const categoryUpperCase = category.toUpperCase();
    const containsValue = categories.includes(categoryUpperCase);
    if (!containsValue) {
        throw new Error('Unknown category name was provided: ' + category);
    }
}

const fillAllItems = (count) => {
    let i = 0;
    while (i < count) {
        const randomObject = getRandomObject();
        // TODO: execute POST for all subcategories (set up BE to execute them async!!! (callable?))
    }
}

const fillSpecificItemsCategory = (count) => {
    console.log('in specific items');
    const accessoryTest = getAccessoryItem();
    const headers = {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type': 'application/json'
    };
    axios.post(`${URL}/api/subcategory/register/accessory`, accessoryTest, { headers })
        .then(res => console.log('Success'))
        .catch(err => console.error('Error:', err));
};


actionManager();

