function myEach(collection, callback) {
    let newCollection = objectOrArray(collection)
    for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);
      }
    return collection
}


function objectOrArray (collection) {
    if (typeof collection === 'object' && collection != null) {
        return (Object.values(collection))
    } else {
        return collection
    }
} 
//console.log (objectOrArray({one: 1, two: 2, three: 3}))
//myEach({one: 1, two: 2, three: 3}, alert);

function myMap(collection, callback) {
    let newArr = []
    let newCollection = objectOrArray(collection)

    for (let i = 0; i < newCollection.length; i++) {
        newArr.push(callback(newCollection[i]))
      }

      return newArr
}

//myMap([1, 2, 3], function(num){ return num * 3; });

function myReduce (collection, callback, acc) {
    let newCollection = objectOrArray(collection)
    let i;

    if(acc){
        i = 0
    }else {
        i = 1
        acc = newCollection[0]
    }
    for(i; i < newCollection.length; i++){
        acc = callback(acc, newCollection[i], newCollection)
    }
    
    return acc
}

function myFind(collection, predicate) {
 let newCollection = objectOrArray(collection)

   let newFind = newCollection.find(predicate)    
   return newFind
     
  }

  function myFilter(collection, predicate) {
      let newColletion = objectOrArray(collection)
      let newFilter = newColletion.filter(predicate)
      return newFilter
  }

  function mySize(collection) {
      let newCollection = objectOrArray(collection)

      return newCollection.length

  }

  function myFirst(collection, n=1) {
      let newCollection = objectOrArray(collection)
     
    if (n <= 1) {
        return newCollection[0]
    } else (n > 1) 
        return newCollection.slice(0, n )
    }
   
    function myLast(collection, n=1) {
        let newCollection = objectOrArray(collection)
    
        if (n <=1) {
          n =  (n * newCollection.length - 1)
            return newCollection[n]
        } else (n > 1) 
          //n =  (n - newCollection.length - 1)
          //console.log(n)
            return newCollection.slice(n * -1)
        
    }

    function myKeys(object) {
        let newObject = Object.keys(object)
        return newObject
    }
  function myValues(values) {
      let newValues = Object.values(values)
      return newValues
  }