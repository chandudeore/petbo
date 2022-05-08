let arr = [1, [2, 3], [3], [[[5]], 6]];

//let flatArray = [].concat(...arr(...arr));
let flatArray = [].concat.apply([], arr);

let newArray = [].concat.apply([], flatArray);

let carrArray = [].concat.apply([], newArray);

console.log(carrArray);
