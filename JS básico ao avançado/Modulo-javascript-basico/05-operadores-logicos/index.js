/* 
    == --igual-- a == b -----verdade se a for igual a b
    === --idêntico-- a === b --verdadeiro se a for idêntico a b
    !== --não idêntico-- a !== b -- verdadeiro se o valor a não for idêntico ao b
    != --diferente-- a != b -- verdadeiro se o a for diferente de b
    < --menor que-- a < b -- verdadeiro se a for diferente de b
    <= --menor ou igual-- a <= b -- verdadeiro quando for menor ou igual a b
    > --maior que -- a > b -- verdadeiro quando a for maior que b
    >= -- maior ou igual -- a >= b -- verdadeiro quando a for maior ou igual a b
    && -- e -- (a === b && a >= b) -- compara duas condições para definir um resultado true ou false
    || -- ou -- (a === b || a > b) -- compara duas condições para definir um resultado true ou false
    ! -- não -- (!(a === b)) -- negação/ mesmo que seja true com ! negamos toda a condição
*/

const a = 2
const b = 2

console.log(!(a === b))
