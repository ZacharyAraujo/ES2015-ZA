const filterOutOdds = (...arguments) => arguments.filter(a => a %2 ===0)


const findMin = (...arguments) => Math.min(...arguments)


const mergeObjects = (object1, object2) => ({...object1, ...object2})


const doubleAndReturnArgs = (arguments, ...num) => [...arguments, ...num.map(n => n * 2)]


const removeRandom = (items) => {
    let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
}


const extend = (array1, array2) => {
    return [...array1, ...array2];
}


const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}


const removeKey = (obj, key) => {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
}


const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}


const update = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}