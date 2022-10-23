enum SizeType {
    Small = "small",
    Medium = "medium",
    Large = "large",
    ExtraLarge = "extra-large",
}

class Pizza {
    private _size: SizeType;
    private _isExtraChesse: Boolean;
    private _numPepperoni: number;
    private _numHam: number;
    private _numPineapple: number;
    public constructor(size: SizeType, isExtraChesse: Boolean, numPepperoni: number, numHam: number, numPineapple: number) {
        this._size = size;
        this._isExtraChesse = isExtraChesse;
        this._numPepperoni = numPepperoni;
        this._numHam = numHam;
        this._numPineapple = numPineapple;
    }

    
    public get size() : SizeType {
        return this._size;
    }
    
    public set size(v : SizeType) {
        this._size= v;
    }

    public get isExtraChesse() : Boolean {
        return this._isExtraChesse;
    }
    
    public set isExtraChesse(v : Boolean) {
        this._isExtraChesse= v;
    }
    public get numPepperoni() : number {
        return this._numPepperoni;
    }
    
    public set numPepperoni(v : number) {
        this._numPepperoni= v;
    }
    public get numHam() : number {
        return this._numHam;
    }
    
    public set numHam(v : number) {
        this._numHam= v;
    }
    public get numPineapple() : number {
        return this._numPineapple;
    }
    
    public set numPineapple(v : number) {
        this._numPineapple= v;
    }

    public  genCost(): number {
        // Small: 10 + 2 per topping + 2 for extra cheese
        // Medium: 12 + 2 per topping + 4 for extra cheese
        // Large: 14 + 3 per topping + 6 for extra cheese
        // Extra-large: 18 + 4 per topping + 6 for extra cheese
        let cost: number  = 0;
        if (this._size === SizeType.Small) {
            cost  = 10;
            const valueForChesse: number =  this._isExtraChesse == true ? 2 : 0;
            cost =  cost + (2 * (this._numPepperoni + this._numHam + this.numPineapple) + valueForChesse);
            return cost
        } else if (this._size === SizeType.Medium) {
            cost  = 12;
            const valueForChesse: number =  this._isExtraChesse == true ? 4 : 0;
            cost =  cost + (2 * (this._numPepperoni + this._numHam + this.numPineapple) + valueForChesse);
            return cost
        } else if (this._size === SizeType.Large) {
            cost  = 14;
            const valueForChesse: number =  this._isExtraChesse == true ? 6 : 0;
            cost =  cost + (3 * (this._numPepperoni + this._numHam + this.numPineapple) + valueForChesse);
            return cost
        } else if (this._size === SizeType.ExtraLarge) {
            cost  = 18;
            const valueForChesse: number =  this._isExtraChesse == true ? 6 : 0;
            cost =  cost + (4 * (this._numPepperoni + this._numHam + this.numPineapple) + valueForChesse);
            return cost
        }
        return cost;
    }
}

const smallPizza = new Pizza(SizeType.Small, true, 2, 2, 2);
console.log(smallPizza.isExtraChesse);
console.log(smallPizza.numHam);
console.log(smallPizza.numPepperoni);
console.log(smallPizza.numPineapple);
console.log("price for small pizza: ",  smallPizza.genCost());
console.log("--------------");

const extraLargePizza = new Pizza(SizeType.ExtraLarge, true, 2, 2, 2);
console.log(extraLargePizza.isExtraChesse);
console.log(extraLargePizza.numHam);
console.log(extraLargePizza.numPepperoni);
console.log(extraLargePizza.numPineapple);
console.log("price for extraLarge pizza: ",  extraLargePizza.genCost());
console.log("--------------");

const mediumPizza = new Pizza(SizeType.Medium, true, 2, 2, 2);
console.log(mediumPizza.isExtraChesse);
console.log(mediumPizza.numHam);
console.log(mediumPizza.numPepperoni);
console.log(mediumPizza.numPineapple);
console.log("price for medium pizza: ",  mediumPizza.genCost());
console.log("--------------");

const largePizza = new Pizza(SizeType.Large, true, 2, 2, 2);
console.log(largePizza.isExtraChesse);
console.log(largePizza.numHam);
console.log(largePizza.numPepperoni);
console.log(largePizza.numPineapple);
console.log("price for large pizza: ",  largePizza.genCost());