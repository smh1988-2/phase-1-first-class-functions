function firstName () {
    console.log("Sean");
}

function Hurley() {
    console.log("Hurley");
}

function Feytser() {
    console.log("Feytser");
}

function receivesAFunction(lastName) {
    firstName();
    lastName();
}
// passes Hurley to the recievesAFunction function which passes in the pre-defined function Hurley above
console.log(receivesAFunction(Hurley));


// returns a named function on one line
function returnsANamedFunction () { return Hurley; }
console.log(returnsANamedFunction());

function returnsAnAnonymousFunction() { return () => "Hello"}