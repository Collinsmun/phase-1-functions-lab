// Code your solution in this file!
function distanceFromHqInBlocks(blockValue) {
  if (blockValue > 42) {
    return blockValue - 42;
  } else if(blockValue === 42){
    return blockValue;

  }
  else {
    return 42 - blockValue;
  }
    
  }
  // console.log(distanceFromHqInBlocks(42));

  function distanceFromHqInFeet (blockValue) {
    return (distanceFromHqInBlocks(blockValue))*264;
  }
  // console.log(distanceFromHqInFeet(50))

  function distanceTravelledInFeet (start, destination) {
    if (start < destination) {
      return (destination - start) * 264;
    } else{
      return (start- destination) * 264;
    }
    
  }

  function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  } 