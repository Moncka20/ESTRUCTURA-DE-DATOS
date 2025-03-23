let usuarios = [
    { tipotrans: ["transferencia","transferencia","retiro"], nombre: 'João', deposito: 25 },
    { tipotrans: ["retiro","deposito","retiro"], nombre: 'Maria', deposito: 30 },
    { tipotrans: ["retiro","deposito","deposito"], nombre: 'Pedro', deposito: 35 },
]

let cantidadtrans = 0
let cantidaddep = 0
let cantidadret = 0

function transferencia(usuarios){
    for (let i = 0; i < usuarios.length; i++) {
        for (let j = 0; j < usuarios[i].tipotrans.length; j++) {
            if (usuarios[i].tipotrans[j] == "transferencia"){
                cantidadtrans++
            }
        }
    }
    return cantidadtrans
}
console.log(transferencia(usuarios));

function retiro(usuarios){
    for (let i = 0; i < usuarios.length; i++) {
        for (let j = 0; j < usuarios[i].tipotrans.length; j++) {
            if (usuarios[i].tipotrans[j] == "retiro"){
                cantidadret++
            }
        }
    }
    return cantidadret
}
console.log(retiro(usuarios));
function deposito(usuarios){
    for (let i = 0; i < usuarios.length; i++) {
        for (let j = 0; j < usuarios[i].tipotrans.length; j++) {
            if (usuarios[i].tipotrans[j] == "deposito"){
                cantidaddep++
            }
        }
    }
    return cantidaddep
}
console.log(deposito(usuarios));

function mayor(usuarios){
    let mayorvalor = 0
    let posicionmayor = 0
    for(i = 0;i < usuarios.length;i++){ 
        if (mayorvalor<usuarios[i].deposito) {
            usuarios[i].deposito = mayorvalor
            posicionmayor = i
        }
    }
    console.log("el usuario con el mayor deposito es",usuarios[posicionmayor].nombre)
}
mayor(usuarios);
