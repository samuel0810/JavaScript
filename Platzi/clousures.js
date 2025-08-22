function outerFunction () {
    let outerVariable = "I am from outer function"

    function interFunction () {
        console.log(outerVariable)
    }


return interFunction
}