// console.log('working')


// const obj = {

//     user1 : 'mike',
//     user2 : 'teller',
//     user3 : 'jhon'
// }


// Object.keys(obj).forEach((key, index) => {

//     console.log(key, obj[key]);
    
// })

// Object.values(obj).forEach(val => {
//     console.log(val);
// } )

// Object.entries(obj).forEach(val1 => {
//     console.log(val1);
// })


// Object.entries(obj).map(val => {

//     console.log(val[1] + val[0].replace('user', ''));
// })



// const startLine = '     ||<- Start line';
// let turtle = '🐢';
// let rabbit = '🐇';

// turtle = turtle.trim().padEnd(9, '=');

// console.log(startLine);

// console.log(turtle);
// console.log(rabbit.padStart(10));





// let obj1 = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   }




//  console.log( Object.entries(obj1).map(val => {

    

//     return nString = val.join(' ');

  
     
// }).join(' ') )




// const array = [[1],[2],[3],[[[4]]],[[[5]]]];


// array.flat(50)


// const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];


// const nGreet = greeting.flatMap(val => val.join(" ") );


// const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

// trapped.flat(50);


// const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '

// var nEmail = userEmail3.trimEnd();

// const users = { user1: 18273, user2: 92833, user3: 90315 }

// var nUser = Object.entries(users);

// var nUser1 = Object.entries(users).map( val => [val[0].padStart(2), + val[1]*2] );


// var nUser2 = Object.fromEntries(nUser1);

    



    


const array = [-1,0,3,100, 199, 2, 99]

const array2 = ['a', 3, 4, 2]

const array3 = [];

bigArray = (nArray) => {

    maxVal = 0;

    for(item in nArray){
        
        

        if (maxVal < nArray[item])
        
        {
            console.log('working');
            maxVal = nArray[item];

        }

        
    }

    return maxVal;
}


// bigArray(array);

bigArray(array2);



amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
  }
  
  function checkBasket(basket, lookingFor) {

    for(item in basket){

        if(item == lookingFor){
            console.log(`yes ${lookingFor} is Available`)
        }
    }
  
  }
