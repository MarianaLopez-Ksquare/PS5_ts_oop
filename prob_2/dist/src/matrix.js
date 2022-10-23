"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matrix = void 0;
class Matrix {
    constructor({ rows, columns }, elements) {
        this._rows = rows;
        this._columns = columns;
        this._elements = elements !== null && elements !== void 0 ? elements : Array.from({ length: this._rows }, () => new Array(this._columns).fill(0));
    }
    get rows() {
        return this._rows;
    }
    get cols() {
        return this._columns;
    }
    get elements() {
        return this._elements;
    }
    element({ indexRow, indexCol, value }) {
        if (indexRow < 0 || indexCol < 0) {
            throw new Error("Index can't be negatives");
        }
        this._elements[indexRow][indexCol] = value;
    }
    static log(a) {
        console.table(a === null || a === void 0 ? void 0 : a.elements);
    }
    static add(a, b) {
        if (a.rows != b.rows && a.cols != b.cols) {
            console.log(new Error("Can not be able to do sum, Constrains on shape matrix"));
            return null;
        }
        ;
        const aElement = a.elements;
        const bElement = b.elements;
        const result = new Matrix({ rows: a.rows, columns: a.cols });
        for (let currentRow = 0; currentRow < a.rows; currentRow++) {
            for (let currentCol = 0; currentCol < a.cols; currentCol++) {
                const dataA = aElement[currentRow][currentCol];
                const dataB = bElement[currentRow][currentCol];
                result.element({ indexRow: currentRow, indexCol: currentCol, value: dataA + dataB });
            }
        }
        return result;
    }
    getRow(index) {
        return this.elements[index];
    }
    getCol(index) {
        const result = [];
        for (let currentRow = 0; currentRow < this.rows; currentRow++) {
            result.push(this._elements[currentRow][index]);
        }
        return result;
    }
    // 2x3 : 2x2
    static dotProduct(a, b) {
        if (a.cols != b.rows) {
            console.log(new Error("Can not be able to do dot Produc, Constrains on shape matrix"));
            return null;
        }
        ;
        const aElement = a.elements;
        const bElement = b.elements;
        const result = new Matrix({ rows: a.rows, columns: b.cols });
        for (let currentRow = 0; currentRow < a.rows; currentRow++) {
            for (let currentCol = 0; currentCol < a.cols; currentCol++) {
                const dataA = a.getRow(currentRow);
                const dataB = b.getCol(currentCol);
                const escalarSum = dataA.reduce((value = 0, currentValue, index) => {
                    value += currentValue * dataB[index];
                    return value;
                }, 0);
                result.element({ indexRow: currentRow, indexCol: currentCol, value: escalarSum });
            }
        }
        return result;
    }
}
exports.Matrix = Matrix;
