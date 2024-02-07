object 1 returns:
console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846


object 2 returns:
console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}


object 3 returns:
getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // `Your name is Alejandro and you like purple
getUserData({firstName: "Melissa"}) // `Your name is Melissa and you like green.
getUserData({}) // `Your name is undefined and you like green


array 1 returns:
console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi


array 2 returns:
console.log(raindrops); // "Raindrops on roses"
console.log(whiskers); //  "whiskers on kittens"
console.log(aFewOfMyFavoriteThings); // ["Bright copper kettles","warm woolen mittens","Brown paper packages tied up with strings"]


array 3 returns:
console.log(numbers) // [10,30,20]


const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  const {a,b} = obj.numbers


  [arr[0], arr[1] = arr[1], arr[0]]


const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})