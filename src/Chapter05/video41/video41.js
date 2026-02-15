console.log("Video 41");

const ages = [10, 9, 20, 25, 18];

const ages2 = ages.map((item, index) => {
    return item * 2;
});

const agesGreatThan18 = ages.filter((item, index) => {
    return item > 18;
})
console.log(" Original: ", ages);

console.log(" ages2: ", ages2);

console.log(" Ages greater than 18: ", agesGreatThan18);



