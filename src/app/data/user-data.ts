import { User } from "../model/user";

export const USER_DATA : User[] = [{
    firstName : "Bill",
    lastName : "Gates",
    dob : new Date("Jan 12, 1964"),
    income  : 50000,
    isWorking : true,
    company : "Microsoft",
    image : 'assets/images/bill.jpg',
    votes : 120
  },{
    firstName : "Steve",
    lastName : "Jobs",
    dob : new Date("Feb 1, 1964"),
    income  : 0,
    isWorking : false,
    company : "Apple",
    image : 'assets/images/steve.png',
    votes : 180
  },{
    firstName : "Tim B.",
    lastName : "Lee",
    dob : new Date("Aug 2, 1964"),
    income  : 40000,
    isWorking : true,
    company : "World Wide Web",
    image : 'assets/images/tim.jpg',
    votes : 200
  }]