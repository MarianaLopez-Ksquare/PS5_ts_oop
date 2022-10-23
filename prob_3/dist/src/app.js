var SizeType;
(function (SizeType) {
    SizeType["Small"] = "small";
    SizeType["Medium"] = "medium";
    SizeType["Large"] = "large";
    SizeType["ExtraLarge"] = "extra-large";
})(SizeType || (SizeType = {}));
class Pizza {
    constructor(size, isExtraChesse, numPepperoni, numHam, numPineapple) {
        this._size = size;
        this._isExtraChesse = isExtraChesse;
        this._numPepperoni = numPepperoni;
        this._numHam = numHam;
        this._numPineapple = numPineapple;
    }
    get size() {
        return this._size;
    }
    set size(v) {
        this._size = v;
    }
    get isExtraChesse() {
        return this._isExtraChesse;
    }
    set isExtraChesse(v) {
        this._isExtraChesse = v;
    }
    get numPepperoni() {
        return this._numPepperoni;
    }
    set numPepperoni(v) {
        this._numPepperoni = v;
    }
    get numHam() {
        return this._numHam;
    }
    set numHam(v) {
        this._numHam = v;
    }
    get numPineapple() {
        return this._numPineapple;
    }
    set numPineapple(v) {
        this._numPineapple = v;
    }
    genCost() {
        let cost = 0;
        if (this._size === SizeType.Small) {
            cost = 10;
            const valueForChesse = this._isExtraChesse == true ? 2 : 0;
            cost = cost + (2 * (this._numPepperoni + this._numHam + this.numPineapple) + valueForChesse);
            return cost;
        }
        else if (this._size === SizeType.Medium) {
            cost = 12;
            const valueForChesse = this._isExtraChesse == true ? 4 : 0;
            cost = cost + (2 * (this._numPepperoni + this._numHam + this.numPineapple) + valueForChesse);
            return cost;
        }
        else if (this._size === SizeType.Large) {
            cost = 14;
            const valueForChesse = this._isExtraChesse == true ? 6 : 0;
            cost = cost + (3 * (this._numPepperoni + this._numHam + this.numPineapple) + valueForChesse);
            return cost;
        }
        else if (this._size === SizeType.ExtraLarge) {
            cost = 18;
            const valueForChesse = this._isExtraChesse == true ? 6 : 0;
            cost = cost + (4 * (this._numPepperoni + this._numHam + this.numPineapple) + valueForChesse);
            return cost;
        }
        return cost;
    }
}
const smallPizza = new Pizza(SizeType.Small, true, 2, 2, 2);
console.log(smallPizza.isExtraChesse);
console.log(smallPizza.numHam);
console.log(smallPizza.numPepperoni);
console.log(smallPizza.numPineapple);
console.log("price for small pizza: ", smallPizza.genCost());
console.log("--------------");
const extraLargePizza = new Pizza(SizeType.ExtraLarge, true, 2, 2, 2);
console.log(extraLargePizza.isExtraChesse);
console.log(extraLargePizza.numHam);
console.log(extraLargePizza.numPepperoni);
console.log(extraLargePizza.numPineapple);
console.log("price for extraLarge pizza: ", extraLargePizza.genCost());
console.log("--------------");
const mediumPizza = new Pizza(SizeType.Medium, true, 2, 2, 2);
console.log(mediumPizza.isExtraChesse);
console.log(mediumPizza.numHam);
console.log(mediumPizza.numPepperoni);
console.log(mediumPizza.numPineapple);
console.log("price for medium pizza: ", mediumPizza.genCost());
console.log("--------------");
const largePizza = new Pizza(SizeType.Large, true, 2, 2, 2);
console.log(largePizza.isExtraChesse);
console.log(largePizza.numHam);
console.log(largePizza.numPepperoni);
console.log(largePizza.numPineapple);
console.log("price for large pizza: ", largePizza.genCost());
