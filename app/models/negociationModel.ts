export class NegociationModel {
    private _date: Date;
    private _amount: number;
    private _value: number;

    constructor(date: Date, quantity: number, value: number) {
        this._date = date;
        this._amount = quantity;
        this._value = value;
    }

    get date(): Date {
        return this._date;
    }

    get amount(): number {
        return this._amount;
    }

    get value(): number {
        return this._value;
    }

    get volume(): number {
        return this._amount * this._value;
    }
}