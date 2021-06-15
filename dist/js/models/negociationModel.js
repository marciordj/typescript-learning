export class NegociationModel {
    constructor(date, quantity, value) {
        this._date = date;
        this._amount = quantity;
        this._value = value;
    }
    get date() {
        return this._date;
    }
    get amount() {
        return this._amount;
    }
    get value() {
        return this._value;
    }
    get volume() {
        return this._amount * this._value;
    }
}
