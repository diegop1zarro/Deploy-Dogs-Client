// function peso(coso){
//     let array = coso.split('-')
//     let number = array.map(e=>Number(e))
//     let promedio = 0
//     if(number.length === 2){
//         for(let i = 0 ; i<number.length -1 ; i++){
//             let resultado1 = number[i] /2.2046
//             let resultado2 =  number[i+1] /2.2046
//             promedio = `${resultado1.toFixed(2)} kg a  ${resultado2.toFixed(2)} kg` } return promedio
//            }else{
//                let aKilo = number.map(e=>e/2.2046)
//                // toFixed para colocar solo dos decimales
//             promedio = `${aKilo[0].toFixed(2)} kg`
//             return promedio
//            }  // tofixed toma 2 decimales
//      }

function promediamos(coso){
    let array = coso.split('-')
    let number = array.map(e=>Number(e))
    let promedio = 0
    if(number.length === 2){
        for(let i = 0 ; i<number.length -1 ; i++){
            let resultado = number[i] + number[i+1]
            promedio = resultado / 2} return promedio
        
        }
        else{
    promedio = number
    return promedio
}
}

module.exports ={
    // peso,
    promediamos
}