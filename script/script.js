"use strict";

//////////////////output an array
/*const solveQuadrticEquation = function (a, b, c) {
  let root1, root2;
  let y = [];
  let discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    return y;
  } else if (discriminant === 0) {
    let x = -b / (2 * a);
    y.push(x);
  } else {
    const denom = 2 * a;
    root1 = (-b + Math.sqrt(discriminant)) / denom;
    root2 = (-b - Math.sqrt(discriminant)) / denom;
    y.push(root1.toFixed(2), root2.toFixed(2));
  }

  return y;
};
console.log(solveQuadrticEquation(2, -6, -3));
// console.log(solveQuadrticEquation(2, 6, 3));
// module.exports = solveQuadrticEquation;
*/

///////////////////output object

/*const solveQuadrticEquation = function (a, b, c) {
  let root1, root2;
  let discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    const denom = 2 * a;
    root1 = ((-b + Math.sqrt(discriminant)) / denom).toFixed(2);
    root2 = ((-b - Math.sqrt(discriminant)) / denom).toFixed(2);

    console.log(`${root1}, ${root2}`);
  } else if (discriminant === 0) {
    root1 = root2 = -b / (2 * a);
    console.log(`${root1}, ${root2}`);
  }
};
solveQuadrticEquation(2, -6, -3);
// solveQuadrticEquation(2, 6, 3);

*/

////////////////////using ternary operator
function solveQuadraticEquation(a, b, c) {
  let root1, root2;
  let discriminant = b * b - 4 * a * c;

  const denom = 2 * a;

  root1 = ((-b + Math.sqrt(discriminant)) / denom).toFixed(2);
  root2 = ((-b - Math.sqrt(discriminant)) / denom).toFixed(2);

  discriminant >= 0 ? root1 || root2 : (root1 = root2 = -b / (2 * a));

  return [+root1, +root2];
}

module.exports = solveQuadraticEquation;
