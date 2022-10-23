interface SizeMatrix {
    rows: number,
    columns: number,
}

interface IndexMatrix {
    indexRow: number,
    indexCol: number,
    value: number,
}


export class Matrix {
    private _rows: number;
    private _columns: number;
    private _elements: number[][];
    
    constructor ({rows, columns}: SizeMatrix,  elements?: number[][]) {
        this._rows = rows;
        this._columns = columns;
        this._elements = elements ?? Array.from({length: this._rows as number}, () => new Array(this._columns).fill(0));    
    }

    public get rows() : number {
        return this._rows;
    }

    public get cols() : number {
        return this._columns;
    }

    public get elements() : number[][] {
        return this._elements;
    }

    
    public element( {indexRow, indexCol, value} : IndexMatrix) {
        if (indexRow <0 || indexCol  < 0) {
            throw new Error("Index can't be negatives");
        }
        this._elements[indexRow as number][indexCol as number] = value;
    }
    public static log(a: Matrix | null) {
            console.table(a?.elements);
    }
    public static add( a: Matrix, b: Matrix): Matrix | null{
        if (a.rows != b.rows  && a.cols !=  b.cols) {
            console.log(new Error("Can not be able to do sum, Constrains on shape matrix"))
            return null;
        };
        const aElement: number[][] = a.elements;
        const bElement: number[][] = b.elements;
        const result: Matrix = new Matrix({rows: a.rows, columns: a.cols});
        for (let currentRow:number = 0; currentRow < a.rows; currentRow++) {
            for (let currentCol: number = 0; currentCol < a.cols; currentCol++) {
                const dataA =  aElement[currentRow][currentCol];
                const dataB = bElement[currentRow][currentCol];
                result.element({indexRow: currentRow, indexCol: currentCol, value: dataA + dataB})
            }
        }
        return result;
    }
    public getRow(index: number): number[] {
        return this.elements[index];
    }
    public getCol(index: number): number[] {
        const result = [];
        for (let currentRow:number = 0; currentRow < this.rows; currentRow++) {
            result.push(this._elements[currentRow][index]);
        }
        return result;
    }
    // 2x3 : 2x2
    public static dotProduct(a: Matrix, b: Matrix): Matrix | null {
        if (a.cols != b.rows) {
            console.log(new Error("Can not be able to do dot Produc, Constrains on shape matrix"))
            return null;
        };
        const aElement: number[][] = a.elements;
        const bElement: number[][] = b.elements;
        const result: Matrix = new Matrix({rows: a.rows, columns: b.cols});
        for (let currentRow:number = 0; currentRow < a.rows; currentRow++) {
            for (let currentCol: number = 0; currentCol < a.cols; currentCol++) {
                const dataA = a.getRow(currentRow);
                const dataB = b.getCol(currentCol);
                const escalarSum = dataA.reduce((value: number = 0, currentValue: number, index: number) => {
                    value += currentValue * dataB[index];
                    return value;
                }, 0)
                result.element({indexRow: currentRow, indexCol: currentCol, value: escalarSum});
            }
        }
        return result;
    }
}
