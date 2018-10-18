// Returns whatever value is passed as the argument.
//
// EX: identity(6) --> 6
let identity = (val) => {
    return val;
};

// Return an array of the first n elements of an array. If n is undefined,
// return just the first element.
//
// EX: first([1, 2, 3, 4, 5, 6], 2) --> [1, 2]
// EX: first([10, 34, 68, 19]) --> 10
let first = (array, n) => {
    // I have to first create an array to store the results in, since we will be returning an array    
    const output = [];    
    // I need to iterate through the objects in the array. The 'element' variable will assign to itself the contents of the object that it passes over
    for (let element of array)    
    // I want to first know if 'n' is a valid entry. If it is then this bit of code will not run. It is kept in curly braces so it doesn't loop each iteration
        if (isNaN(n)) {
            output.push(element)
            return output;
        }        
    // My code actually started here. I want to iterate through the array and copy each object item into the 'output' array. The idea is that if the code reaches here then all previous requirements have been met
        else if (output.length < n)
            output.push(element)
            return output;
    };

// Like first, but for the last elements. If n is undefined, return just the
// last element.
//
// EX: last([1, 2, 3, 4, 5], 2) --> [4, 5]
// EX: last([10, 34, 68, 19]) --> 19
let first = (array, n) => {  
    const output = [];    
    // i found it simpler to just reverse the array to minimize rewriting code. 
    array.reverse();    
    for (let element of array)    
    // I wanted to get the object without using other methods like 'slice' or 'pop'
        if (isNaN(n)) {
            output.push(array[array.length - 1])
            return output;
        }        
        else if (output.length < n)
            output.push(element)
            // I reversed the array again to keep the original positioning
            return output.reverse();
    };

// Call iterator(value, key, collection) for each element of collection.
// Accepts both arrays and objects.
//
// each() does not have a return value, but rather simply runs the
// iterator function over each item in the input collection.
let each = (collection, iterator) => {
    // one way
    for (i=0; i < collection.length; i++)
    // another way
    for (let key in collection) 
};

// Returns the index at which value can be found in the array, or -1 if value
// is not present in the array.
// TIP: You can use a standard for loop, or you can reuse the each function from above as a helper function.
//
// EX: indexOf([1, 2, 3], 2) --> 1
// EX: indexOf([10, 20, 30], 5) --> 0
let indexOf = (array, target) => {   
    const output = [];  
    for (let element of array)    
        if (isNaN(target)) {
            output.push(element)
            return output;
        }
        else return array.indexOf(target);
};

// Return all elements of an array that pass a truth test.
//
// filter([1, 2, 3], (val) => {
//    val > 2
// }) --> 3
let filter = (collection, test) => {
	const output = [];
// I understood the problem as "Return all elements of the array greater than the input value"   
    for (let element of collection)
        if (element > test)
            output.push(element)
            return output;
};

// Return all elements of an array that don't pass a truth test.
//
// reject([1, 2, 3, 4, 5], () => {
//    val < 3
// }) --> 4, 5
let reject = (collection, test) => {
    const output = [];    
// I understood the problem as "Return all the elements of an array that is NOT less than the input value"   
    for (let element of collection)
        if (!(element <= test))
            output.push(element)
            return output;
}; 

// Produce a duplicate-free version of the array.
//
// EX: uniq([1, 1, 2, 2, 3, 4, 5]) --> [1, 2, 3, 4, 5]
let uniq = (array) => {
    const output = [];	
    // Iterate array's entire length
    for (let i = 0; i < array.length; i++){		
        // Check array for existing Index values. Since the indexOf() method returns the first occurence of a value, the result will be -1 if it doesn't exist
        if(output.indexOf(array[i]) == -1)			
            // If value does not already exist, push to output array
            output.push(array[i]);
    }
    return output;
};

// Return the results of applying an iterator to each element.
// map() works a lot like each(), but in addition to running the operation on all
// the members, it also maintains an array of results.
//
// map({firstName: 'Kayla', lastName: 'Handy', age: 29}, (item) => {
//    return item[key]
// }) --> ['Kayla', 'Handy', 29]

// Was having some trouble here so i just started solving this every way I could muster.
// In the end I got pretty lost and couldn't determine how to output like in the example.
let map = (collection, iterator) => {
};
/////////////  No input required by user
/// Version 1 [for . . . in]
const collection = {
	firstName: 'Sam',
	lastName: 'Soheylee',
	age: 36
};
function showName(collection){
	for (let key in collection)
		console.log(collection[key])
}
showName(collection);
/////////////////
// Version 2 [for loop]
const collection = [
	{firstName: 'Sam'},
	{lastName: 'Soheylee'},
	{age: 36}
]
const output = []
for	(let i = 0; i < collection.length; i++){
	output.push(collection[i])
}
console.log(output)
///////////////////////////
// Input required by user, output will be the items plus 'undefined' for the iterator.
let map = (collection, iterator) => {
	for (let key in collection)
		console.log(collection[key])		
};
/////////////////
/// forEach, it only works if i declare the input values in the code
const collection = [
	{firstName: 'Sam'},
	{lastName: 'Soheylee'},
	{age: 36}
];

collection.forEach(function(item) {
	console.log(item)
});

///////////////////////////
/// map() but i had some trouble finding out how to remove the values.
const collection = [{
	firstName: 'Sam',
	lastName: 'Soheylee',
	age: 36
}]

collection.map(function(item) {
	console.log(item)
});

// Reduces an array or object to a single value by repetitively calling
// iterator(accumulator, item) for each item. accumulator should be
// the return value of the previous iterator call.
//
// You can pass in a starting value for the accumulator as the third argument
// to reduce. If no starting value is passed, the first element is used as
// the accumulator, and is never passed to the iterator. In other words, in
// the case where a starting value is not passed, the iterator is not invoked
// until the second element, with the first element as it's second argument.
//
// EX:
//   var numbers = [1,2,3];
//   var sum = reduce(numbers, function(total, number){
//     return total + number;
//   }, 0); // should be 6

// this version is the shortest way to write this expression
// This is how I came to learn this, i'll work on breaking it down to it's base elements 
let reduce = (collection, iterator, accumulator) => {
    const output = collection.reduce((iterator, accumulator) => iterator + accumulator);
    return output;
};

// Determine if the array or object contains a given value (using `===`).
//
// contains([1, 2, 3, 4], 3) --> true
let contains = (collection, target) => {
    for (let element of collection)
        if (element === target)
            return true;
    return false;
};

// Determine whether all of the elements pass a truth test.
//
// EX: every([1, 2, 3], (item) => {
//    item < 5
// }) --> true

// I am assuming that the 'elements' being checked are those input by the user in an array, and not the secondary (item) input value.
let some = (collection, iterator) => {
    return collection.some(iterator => iterator < 2);
};


// Determine whether any of the elements pass a truth test.
//
// EX: some([1, 2, 3], (item) => {
//    item < 2
// }) --> true

// Same issues as above with the (item) object.
let some = (collection, iterator) => {
	return collection.every(iterator => iterator < 5);
};