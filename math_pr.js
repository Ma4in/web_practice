function del_perc(a,b){
    if (a%b!=0){
        return 'Делится с остатком'
    } else {
        return 'Делится'
    }
}

function set_pow_plus_3(a,i){
    return Math.pow(a,i+3)
}

function sqrt_ml_five(i){
    return Math.sqrt(5*i)
}

function mass_sqrt(i){
    let mass = [i+4, i+2, i+5, i+19]
    let sum = 0
    for (index = 0; index < mass.length; ++index) {
        sum += Math.pow(mass[index], 3)
    }
    return Math.sqrt(sum)
}

function rounds_to(i){
    i = Math.sqrt(i+56)
    console.log(i.toPrecision())
    console.log(i.toFixed(0))
    console.log(i.toPrecision(2))
    console.log(i.toFixed(2))
    console.log(i.toFixed(3))
    console.log(Math.floor(i))
    console.log(Math.round(i))
    console.log(Math.ceil(i))
}

function get_min_max(mass){
    return [Math.min.apply(null, mass), Math.max.apply(null, mass)]
}

function random_between(i){
    return Math.floor(Math.random()*(100+i))
}

function random_array(length, max, min){
    let mass = []
    for (index = 0; index < length; index++){
        mass.push(Math.floor(Math.random()*(max-min)+min))
    }
    return(mass)
}

function abs_of_substract(a,b){
    return Math.abs(a-b)
}


//console.log(del_perc(9,3))
//console.log(set_pow_plus_3(2,-1))
//console.log(sqrt_ml_five(125))
//console.log(mass_sqrt(3).toFixed(2))
//rounds_to(0)
//console.log(get_min_max([100,20,3,50]))
//console.log(random_between(100))
//console.log(random_array(10,10,3))
//console.log(abs_of_substract(6,35))