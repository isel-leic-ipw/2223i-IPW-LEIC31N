

function outerFunction() {
    let f = function (a) {
        console.log(this)
        console.log(a)
    }

    let f1 = a => { console.log(this); console.log(a) }

    return { 
        f: f,
        f1: f1
    }
}

let o = outerFunction()
o.f("SLB")
o.f1("Benfica")


