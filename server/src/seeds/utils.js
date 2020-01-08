const regions = ["Minskaya","Brestskaya","Gomelskaya","Mogilevskaya","Grodnenskaya","Vitebskaya"]

const cities = [
  "Minsk","Zaslavl","Borisov","Zhodino","Molodechno",
  "Brest","Kobrin","Pinsk","Bereza","Slonim",
  "Gomel","Dobrush","Buda-Koshelevo","Retchitsa","Zhlobin",
  "Mogilev","Krichev","Gorki","Bobrujsk","Osipovicvhi",
  "Grodno","Lida","Zelva","Mosty","Skidel",
  "Vitebsk","Orsha","Glubokoe","Polotsk","Novopolotsk"]

const initialCoordinates = [
  {lattitude:53.893009,longitude:27.567444},
  {lattitude:52.097622,longitude:23.734051},
  {lattitude:52.4345,longitude:30.9754},
  {lattitude:53.9168,longitude:30.3449},
  {lattitude:53.669353,longitude:27.813131},
  {lattitude:55.1904,longitude:30.2049},
]

module.exports = function createIterableData(iteration)  {
  let regionNumber = 0
  let isCapitalOffset = 0
  let oneToFourRandom = Math.ceil(Math.random()*3)+1

  if (iteration < 25) {
    regionNumber = 0
    isCapitalOffset = 0
  } else if (iteration < 40) {
    regionNumber = 0
    isCapitalOffset = 1
  } else if (iteration < 45) {
    regionNumber = 1
    isCapitalOffset = 0
  } else if (iteration < 50) {
    regionNumber = 1
    isCapitalOffset = 1
  } else if (iteration < 45) {
    regionNumber = 2
    isCapitalOffset = 0
  } else if (iteration < 55) {
    regionNumber = 2
    isCapitalOffset = 1
  } else if (iteration < 60) {
    regionNumber = 3
    isCapitalOffset = 0
  } else if (iteration < 65) {
    regionNumber = 3
    isCapitalOffset = 1
  } else if (iteration < 70) {
    regionNumber = 4
    isCapitalOffset = 0
  } else if (iteration < 75) {
    regionNumber = 4
    isCapitalOffset = 1
  } else if (iteration < 80) {
    regionNumber = 5
    isCapitalOffset = 0
  } else if (iteration < 85) {
    regionNumber = 5
    isCapitalOffset = 1
  }

  let region = regions[regionNumber]
  let	city = cities[(regionNumber*5)+(isCapitalOffset*oneToFourRandom)]
  let lattitude = initialCoordinates[regionNumber].lattitude + ((Math.random() - 0.5) * 2) + isCapitalOffset
  let longitude = initialCoordinates[regionNumber].longitude + ((Math.random() - 0.5) * 2) + isCapitalOffset

  return {region, city, lattitude, longitude}
}

