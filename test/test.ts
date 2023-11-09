function merge(collection1: number[], collection2: number[]) {    
    let result: number[] = []

    for (let i = 0; i < collection1.length; i++) {
        result.push(collection1[i])   
                 
    }
    for(let j = 0; j < collection2.length; j++){
        result.push(collection2[j])
        
    }

    for(let i = 0; i < result.length; i++){

        for(let j = 0; j < result.length; j++){
            if(result[j] > result[j+1]){
                let valueToSwap = result[j]
                result[j] = result[j+1]
                result[j+1] = valueToSwap
            }
          
        }
        
    }
    
    return result
}
console.log(merge([9,6,5,7,8],[4,2,1,3]));
