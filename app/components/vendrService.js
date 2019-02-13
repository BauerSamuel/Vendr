//private
import VendingMachine from '../models/vendingMachine.js';

let _vm = new VendingMachine();

//public
export default class VendrService {
  constructor() {
    //meh
  }

  get Balance() {
    return _vm.balance;
  }


  Vend(snack) {
    if (_vm.balance >= _vm.snacks[snack].price) {
      _vm.balance -= _vm.snacks[snack].price;
      return true;
    } else {
      return false;
    }
  }
  getImage(snack) {
    return _vm.snacks[snack].image;
  }
  addQuarter() {
    _vm.balance += .25;
  }
}