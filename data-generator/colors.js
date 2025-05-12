
// Declare colors
const basicColors = [
    'red', 'blue', 'yellow', 'green', 'pink', 'gold', 'black', 'white',
    'orange', 'purple', 'brown', 'gray', 'silver', 'navy', 'aqua', 'lime'
];

// Get random index
const getIndex = (max) => {
    return Math.floor(Math.random() * max);
}

// Get color with random index from array
const getColor = () => {
    let index = getIndex(basicColors.length);
    return basicColors[index].toUpperCase();
}

// Add color to array
const addColor = (array, color) => {
    // if array contains value provided in parameter, still generating new color while it's not going to be unique
    while (array.includes(color)) {
        color = getColor();
    }
    // Push unique color to array
    array.push(color)
};

// Get string with concatenated colors
const getColors = () => {
    const colors = [];
    let i = 0;
    // Generate random size for colors array
    let size = getIndex(5) + 1;
    while (i < size) {
        let color = getColor();
        addColor(colors, color);
        i++;
    }
    return createString(colors);
}

// Concat values in array into string in specific way
const createString = (array) => {
    let string = '';
    for (let i = 0; i < array.length; i++) {
        string = string.concat(array[i]);
        if (i < array.length - 1) {
            string = string.concat(';');
        }
    }
    return string;
}

module.exports = getColors;
