import Snack from "./snack.js";

export default class VendingMaching {
  //code here.
  constructor() {
    this.snacks = {
      a1: new Snack('chips', 1.50, '../../assets/images/Chips.png'),
      a2: new Snack('candy', 2.00, '../../assets/images/Candy.png'),
      a3: new Snack('choc', 1.75, '../../assets/images/Choc.png'),
    }
    this.balance = 0;
  }
}