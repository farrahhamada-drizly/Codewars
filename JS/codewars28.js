// Happy Holidays fellow Code Warriors!
// It's almost Christmas! That means Santa's making his list, and checking it twice. Unfortunately, elves accidentally mixed the Naughty and Nice list together! Santa needs your help to save Christmas!
//
// Save Christmas!
// Santa needs you to write two functions. Both of the functions accept a sequence of objects. The first one returns a sequence containing only the names of the nice people, and the other returns a sequence containing only the names of the naughty people. Return an empty sequence [] if the result from either of the functions contains no names.
//
// The objects in the passed will represent people. Each object contains two properties: name and wasNice.
// name - The name of the person
// wasNice - True if the person was nice this year, false if they were naughty


function getNiceNames(people){
  var niceNamesList = [];
  for (let i in people)
    if (people[i].wasNice)
      niceNamesList.push(people[i].name)
  return niceNamesList;
}

function getNaughtyNames(people){
  let naughtyNamesList = [];
  for (let i in people)
    if (people[i].wasNice == false)
      naughtyNamesList.push(people[i].name)
  return naughtyNamesList;
}