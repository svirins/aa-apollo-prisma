import React from "react";



const weekday = new Array(7);
weekday[0] = "Su";
weekday[1] = "Mo";
weekday[2] = "Tu";
weekday[3] = "We";
weekday[4] = "Th";
weekday[5] = "Fr";
weekday[6] = "Sa";

export const getToday = () => {
  const now = new Date();
  return weekday[now.getDay()];
};


export const calculateDistance = (lat1,lon1,lat2,lon2) => {
  var p = 0.017453292519943295;    // Math.PI / 180
  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p)/2 + 
          c(lat1 * p) * c(lat2 * p) * 
          (1 - c((lon2 - lon1) * p))/2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}


