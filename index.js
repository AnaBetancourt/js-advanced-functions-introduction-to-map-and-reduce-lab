function mapToNegativize(sourceArray){
    return sourceArray.map(source => {
        if (Math.sign(source) === 1 || Math.sign(source) === 0){
            return parseInt(`-${source}`)
        } else if (Math.sign(source) === -1 || Math.sign(source) === -0){
            return source *= -1
        }
    })
}

function mapToNoChange(sourceArray){
    return sourceArray.map(source =>{
        return source
    })
}

function mapToDouble(sourceArray){
    return sourceArray.map(source =>{
        return source * 2
    })
}

function mapToSquare(sourceArray){
    return sourceArray.map(source =>{
        return source**2
    })
}


function reduceToTotal(sourceArray, startingPoint){
    if (startingPoint){
        let currentTotal = startingPoint
        for (let i = 0; i < sourceArray.length; i++){
            currentTotal = sourceArray[i] + currentTotal
        }
        return currentTotal
    } else {
        let currentTotal = 0
        for (let i = 0; i < sourceArray.length; i++){
            currentTotal = sourceArray[i] + currentTotal
        }
        return currentTotal
    }
}

function reduceToAllTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++){
        if(!!sourceArray[i] === false){
            return false
        }
    }
    return true
}

function reduceToAnyTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++){
        if(!!sourceArray[i] === true){
            return true
        }
    }
    return false
}