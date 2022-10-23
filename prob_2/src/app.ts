import { Matrix } from "./matrix";

const a = new Matrix({rows: 2,columns:2}, [[1,2],[1,4]]);
console.log("Matrix a");
Matrix.log(a);
const b = new Matrix({rows: 2,columns:2}, [[2,1],[1,3]]);
console.log("Matrix b");
Matrix.log(b);

const c = Matrix.add(a, b);
console.log("Sum of a and b");
Matrix.log(c);

const d = Matrix.dotProduct(a, b);
console.log("product dot of a and b");
Matrix.log(d);