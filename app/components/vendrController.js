//private
import VendrService from "./vendrService.js";
import Snack from "../models/snack.js";

let vendrService = new VendrService;

function draw() {
  let v = vendrService.Balance;
  document.getElementById('bal').innerText = v.toFixed(2);
}


// //public
export default class VendrController {
  constructor() {
    draw();
  }
  addQuarter() {
    vendrService.addQuarter();
    draw();
  }
  Vend(snack) {
    if (vendrService.Vend(snack)) {
      document.getElementById('message').innerText = 'Enjoy your snack!'
      document.getElementById('retrieve').innerHTML = `<img onclick="app.controllers.vendrController.Take()" src="${vendrService.getImage(snack)}" alt="The snack you chose" />`
    } else {
      document.getElementById('message').innerText = 'Not enough funds. Please insert more money.'
    }
    draw();
  }
  Take() {
    document.getElementById('retrieve').innerHTML = ``
  }
}

//   get balance() {
//     return service.thing;

//   }
//   someFunction() {

//     draw();
//   }
// }