function distanceFromHqInBlocks(pickUpLocation){
    if (pickUpLocation > 42){
        return pickUpLocation - 42
    }
    else {
        return 42 - pickUpLocation
    }
}

function distanceFromHqInFeet(pickUpLocation){
    return distanceFromHqInBlocks(pickUpLocation) * 264
}

function distanceTravelledInFeet(startBlock, endBlock){
    if(startBlock > endBlock){
        return 264 * (startBlock - endBlock)
    }
    else {
        return 264 * (endBlock - startBlock)
    }
}

function calculatesFarePrice(start, destination){
    if(distanceTravelledInFeet(start, destination) < 400){
        return 0
    }
    else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000){
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02
    }
    else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500){
        return 25
    }
    else{
        return 'cannot travel that far'
    }
}