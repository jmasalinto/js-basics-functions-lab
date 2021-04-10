const hq = 42;

function distanceFromHqInBlocks(street) {
    let distance;
    if (street >= 42) {
        distance = (street - hq);
    } else if (street < 42) {
        distance = (hq - street);
    }
        return distance;
}

function distanceFromHqInFeet(street) { 
    let distanceInFeet = (distanceFromHqInBlocks(street) * 264);
    return distanceInFeet;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    let distance;
    if (startBlock >= endBlock) {
        distance = ((startBlock - endBlock) * 264);
    } else if (startBlock < endBlock) {
        distance = ((endBlock - startBlock) * 264);
    }
    return distance;
}

function calculatesFarePrice(startBlock, endBlock) {
    let farePrice;
    if (distanceTravelledInFeet(startBlock, endBlock) <= 400) {
        farePrice = 0;
    } else if (distanceTravelledInFeet(startBlock, endBlock) > 400 && distanceTravelledInFeet(startBlock, endBlock) <= 2000) {
        farePrice = ((distanceTravelledInFeet(startBlock, endBlock) - 400) * 0.02);
    } else if (distanceTravelledInFeet(startBlock, endBlock) > 2000 && distanceTravelledInFeet(startBlock, endBlock) <= 2500) {
        farePrice = 25;
    } else if (distanceTravelledInFeet(startBlock, endBlock) > 2500) {
        farePrice = 'cannot travel that far';
    }
    return farePrice;
}