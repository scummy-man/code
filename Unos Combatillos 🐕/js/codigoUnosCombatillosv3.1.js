const spanMensajes = document.getElementById("Mensajes")

const botonTreeko = document.getElementById("boton-Treecko")
const botonTorchic = document.getElementById("boton-Torchic")
const botonMudkip = document.getElementById("boton-Mudkip")

/*botones ataque*/
const botonLatigoCepa = document.getElementById("boton-latigo-cepa")
const botonHojaAfilada = document.getElementById("boton-hoja-afilada")
const botonCorte = document.getElementById("boton-corte")
const botondodge = document.getElementById("boton-dodge")
const botonBurbuja = document.getElementById("boton-burbuja")
const botonPistolaAgua = document.getElementById("boton-pistola-agua")
const botonPlacaje = document.getElementById("boton-placaje")
const botondodge3 = document.getElementById("boton-dodge3")
const botonLlamarada = document.getElementById("boton-llamarada")
const botonLanzaLlamas = document.getElementById("boton-lanzallamas")
const botonCounter = document.getElementById("boton-counter-attack")
const botondodge5 = document.getElementById("boton-dodge5")
const botonAbsorber = document.getElementById("boton-absorber")
const botonBombaGermen = document.getElementById("boton-bomba-germen")
const botonAtaqueRapido = document.getElementById("boton-ataque-rapido")
const botondodge2 = document.getElementById("boton-dodge2")
const botonCascada = document.getElementById("boton-cascada")
const botonHidroBomba = document.getElementById("boton-hidro-bomba")
const botonGolpeCabeza = document.getElementById("boton-golpe-cabeza")
const botondodge4 = document.getElementById("boton-dodge4")
const botonAscuaz = document.getElementById("boton-ascuaz")
const botonGiroFuego = document.getElementById("boton-giro-fuego")
const botonArañazo = document.getElementById("boton-arañazo")
const botondodge6 = document.getElementById("boton-dodge6")
const botonReiniciar = document.getElementById("boton-reiniciar")

const spanNombreJugador = document.getElementById("nombre-jugador")
const spanPSJugador = document.getElementById("ps-jugador")
const spanPAJugador = document.getElementById("pa-jugador")

const spanPSEnemigo = document.getElementById("ps-enemigo")
const spanPAEnemigo = document.getElementById("pa-enemigo")

const spanPokemonJugador = document.getElementById("Pokemon-Jugador")
const mostrarImgPkmnJugador = document.getElementById('imgPkmnJugador')

const spanPokemonEnemigo = document.getElementById("Pokemon-Enemigo")
const mostrarImgPkmnEnemigo = document.getElementById('imgPkmnEnemigo')

const spanTipoAtaque = document.getElementById("tipo-ataque")
const spanDañoAtaque = document.getElementById("daño-ataque")
const spanCostoAtaque = document.getElementById("costo-ataque")

const pReferencia=document.getElementById("referencia")

const sectionMarcador = document.getElementById("Marcador")

const sectionReiniciar = document.getElementById("Reiniciar")

const sectionSeleccionAtaque = document.getElementById("Seleccionar-Ataque")

const sectionSeleccionPokemon = document.getElementById("Seleccionar-Pokemon")

const sectionAtaquesSquirtle = document.getElementById("ataques-squirtle")
const sectionAtaquesCharmander = document.getElementById("ataques-charmander")
const sectionAtaquesTreecko = document.getElementById("ataques-treecko")
const sectionAtaquesMudkip = document.getElementById("ataques-mudkip")
const sectionAtaquesTorchic = document.getElementById("ataques-torchic")
const sectionAtaquesBulbasaur = document.getElementById("ataques-bulbasaur")

const contenedorTarjetas1 = document.getElementById("contenedorTarjetas1")

let pokemons = []
let opcionDePokemons

let botonBulbasaur 
let botonSquirtle  
let botonCharmander 

let nombreJugador
let ataqueJugador
let ataqueEnemigo
let pokemonJugador
let pokemonEnemigo
let winsJugador = 0
let winsEnemigo = 0
let PAJugador 
let PAEnemigo  
let PSJugador 
let PSEnemigo 
let DmgJugador 
let DmgEnemigo
let tipoAtaqueJugador
let tipoAtaqueEnemigo
let ataqueJugadorInvalido

class Pokemon {
    constructor(nombre, foto, pa, ps, tipo) {
        this.nombre = nombre
        this.foto = foto
        this.pa = pa
        this.ps = ps
        this.tipo = tipo
        this.ataques = []
    }
}

let charmander = new Pokemon('Charmander', './assets/charmander.png', 60, 100)
let bulbasaur = new Pokemon('Bulbasaur', './assets/bulbasaur.png', 60, 100)
let squirtle = new Pokemon('Squirtle', './assets/squirtle.png', 60, 100)

charmander.ataques.push(
    {nombre: 'Llamarada 🔥', id: 'boton-llamarada'},
    {nombre: 'Lanza-llamas 🔥', id: 'boton-lanzallamas'},
    {nombre: 'Counter-attack 💥', id: 'boton-counter-attack'},
    {nombre: 'Dodge 💨', id: 'boton-dodge5'},
)
squirtle.ataques.push(
    {nombre: 'Burbuja 💧', id: 'boton-burbuja'},
    {nombre: 'Pistola agua 💧', id: 'boton-pistola-agua'},
    {nombre: 'Placaje 💥', id: 'boton-placaje'},
    {nombre: 'Dodge 💨', id: 'boton-dodge3'},
)
bulbasaur.ataques.push(
    {nombre: 'Latigo cepa 🌿', id: 'boton-latigo-cepa'},
    {nombre: 'Hoja afilada  🌿', id: 'boton-hoja-afilada'},
    {nombre: 'Corte 💥', id: 'boton-corte'},
    {nombre: 'Dodge 💨', id: 'boton-dodge'},
)

pokemons.push(charmander,squirtle,bulbasaur)

function iniciarJuego() {
    spanMensajes.innerHTML= "Hey tu!!, que tanto me miras"

    /* alert("ScummyMan te desafia a un combate") */
    esconderAtaques ()
    /* inyectarNombreJugador() */
    esconderReinicio ()
    
    pokemons.forEach((pokemon) =>{
        opcionDePokemons = `
        <button id="${pokemon.nombre}" class="botonPokemon">
            <img src=${pokemon.foto} alt=>
            ${pokemon.nombre}
        </button>
        `
        contenedorTarjetas1.innerHTML+=opcionDePokemons

        botonBulbasaur = document.getElementById("Bulbasaur")
        botonSquirtle = document.getElementById("Squirtle")
        botonCharmander = document.getElementById("Charmander")
    })
        
    botonBulbasaur.addEventListener("click", BulbasaurJugador)
    botonSquirtle.addEventListener("click", SquirtleJugador)
    botonCharmander.addEventListener("click", CharmanderJugador)
    botonTreeko.addEventListener("click", TreekoJugador)
    botonTorchic.addEventListener("click", TorchicJugador)
    botonMudkip.addEventListener("click", MudkipJugador)

    botonLatigoCepa.addEventListener("click", ataqueLatigoCepa)
    botonLatigoCepa.addEventListener("mouseover", infoLatigoCepa)
    botonLatigoCepa.addEventListener("mouseout", clearInfo)
    
    botonHojaAfilada.addEventListener("click", ataqueHojaAfilada)
    botonHojaAfilada.addEventListener("mouseover", infoHojaAfilada)
    botonHojaAfilada.addEventListener("mouseout", clearInfo)
    
    botonCorte.addEventListener("click", ataqueCorte)
    botonCorte.addEventListener("mouseover", infoCorte)
    botonCorte.addEventListener("mouseout", clearInfo)
    
    botondodge.addEventListener("click", ataqueDodge)
    botondodge.addEventListener("mouseover", infoDodge)
    botondodge.addEventListener("mouseout", clearInfo)

    botonBurbuja.addEventListener("click", ataqueBurbuja)
    botonBurbuja.addEventListener("mouseover", infoBurbuja)
    botonBurbuja.addEventListener("mouseout", clearInfo)
    
    botonPistolaAgua.addEventListener("click", ataquePistolaAgua)
    botonPistolaAgua.addEventListener("mouseover", infoPistolaAgua)
    botonPistolaAgua.addEventListener("mouseout", clearInfo)
    
    botonPlacaje.addEventListener("click", ataquePlacaje)
    botonPlacaje.addEventListener("mouseover", infoPlacaje)
    botonPlacaje.addEventListener("mouseout", clearInfo)
    
    botondodge3.addEventListener("click", ataqueDodge)
    botondodge3.addEventListener("mouseover", infoDodge)
    botondodge3.addEventListener("mouseout", clearInfo)
    
    botonLlamarada.addEventListener("click", ataqueLlamarada)
    botonLlamarada.addEventListener("mouseover", infoLlamarada)
    botonLlamarada.addEventListener("mouseout", clearInfo)

    botonLanzaLlamas.addEventListener("click", ataqueLanzaLlamas)
    botonLanzaLlamas.addEventListener("mouseover", infoLanzaLlamas)
    botonLanzaLlamas.addEventListener("mouseout", clearInfo)
    
    botonCounter.addEventListener("click", ataqueCounter)
    botonCounter.addEventListener("mouseover", infoCounter)
    botonCounter.addEventListener("mouseout", clearInfo)
    
    botondodge5.addEventListener("click", ataqueDodge)
    botondodge5.addEventListener("mouseover", infoDodge)
    botondodge5.addEventListener("mouseout", clearInfo)
    
    botonAbsorber.addEventListener("click", ataqueAbsorber)
    botonAbsorber.addEventListener("mouseover", infoAbsorber)
    botonAbsorber.addEventListener("mouseout", clearInfo)
    
    botonBombaGermen.addEventListener("click", ataqueBombaGermen)
    botonBombaGermen.addEventListener("mouseover", infoBombaGermen)
    botonBombaGermen.addEventListener("mouseout", clearInfo)
    
    botonAtaqueRapido.addEventListener("click", ataqueAtaqueRapido)
    botonAtaqueRapido.addEventListener("mouseover", infoAtaqueRapido)
    botonAtaqueRapido.addEventListener("mouseout", clearInfo)
    
    botondodge2.addEventListener("click", ataqueDodge)
    botondodge2.addEventListener("mouseover", infoDodge)
    botondodge2.addEventListener("mouseout", clearInfo)
    
    botonCascada.addEventListener("click", ataqueCascada)
    botonCascada.addEventListener("mouseover", infoCascada)
    botonCascada.addEventListener("mouseout", clearInfo)
    
    botonHidroBomba.addEventListener("click", ataqueHidroBomba)
    botonHidroBomba.addEventListener("mouseover", infoHidroBomba)
    botonHidroBomba.addEventListener("mouseout", clearInfo)
    
    botonGolpeCabeza.addEventListener("click", ataqueGolpeCabeza)
    botonGolpeCabeza.addEventListener("mouseover", infoGolpeCabeza)
    botonGolpeCabeza.addEventListener("mouseout", clearInfo)
    
    botondodge4.addEventListener("click", ataqueDodge)
    botondodge4.addEventListener("mouseover", infoDodge)
    botondodge4.addEventListener("mouseout", clearInfo)
    
    botonAscuaz.addEventListener("click", ataqueAscuaz)
    botonAscuaz.addEventListener("mouseover", infoAscuaz)
    botonAscuaz.addEventListener("mouseout", clearInfo)
    
    botonGiroFuego.addEventListener("click", ataqueGiroFuego)
    botonGiroFuego.addEventListener("mouseover", infoGiroFuego)
    botonGiroFuego.addEventListener("mouseout", clearInfo)
    
    botonArañazo.addEventListener("click", ataqueArañazo)
    botonArañazo.addEventListener("mouseover", infoArañazo)
    botonArañazo.addEventListener("mouseout", clearInfo)
    
    botondodge6.addEventListener("click", ataqueDodge)
    botondodge6.addEventListener("mouseover", infoDodge)
    botondodge6.addEventListener("mouseout", clearInfo)
    
    botonReiniciar.addEventListener("click", reiniciarJuego)
}
 function inyectarNombreJugador() {
    nombreJugador = prompt (" Cual es tu nombre? ")
    spanNombreJugador.innerHTML = nombreJugador
}
function inyectarPSJugador () {
    spanPSJugador.innerHTML = PSJugador
    spanPAJugador.innerHTML = PAJugador
}
function inyectarPSEnemigo () {
    spanPSEnemigo.innerHTML = PSEnemigo
    spanPAEnemigo.innerHTML = PAEnemigo
}
function BulbasaurJugador() {
    spanPokemonJugador.innerHTML = bulbasaur.nombre
    pokemonJugador = bulbasaur.nombre
    mostrarImgPkmnJugador.src = bulbasaur.foto
    seleccionarPokemonEnemigo()
}
function SquirtleJugador() {
    spanPokemonJugador.innerHTML = botonSquirtle.id
    pokemonJugador = squirtle.nombre
    mostrarImgPkmnJugador.src = squirtle.foto
    seleccionarPokemonEnemigo()
}
function CharmanderJugador() {
    spanPokemonJugador.innerHTML = botonCharmander.id
    pokemonJugador = charmander.nombre
    mostrarImgPkmnJugador.src = charmander.foto
    seleccionarPokemonEnemigo()
}
function TreekoJugador() {   
    spanPokemonJugador.innerHTML = "Treeko🦎"
    pokemonJugador = "Treecko"
    mostrarImgPkmnJugador.src = "./assets/treecko.png"
    seleccionarPokemonEnemigo()
}
function TorchicJugador() {
    spanPokemonJugador.innerHTML = "Torchic🐥"
    pokemonJugador = "Torchic"
    mostrarImgPkmnJugador.src = "./assets/torchic.png"
    seleccionarPokemonEnemigo()
}
function MudkipJugador() {
    spanPokemonJugador.innerHTML = "Mudkip🐸"
    pokemonJugador = "Mudkip"
    mostrarImgPkmnJugador.src = "./assets/mudkip (1).png"
    seleccionarPokemonEnemigo()
}
/*function muertePokemonJugador () {
    if (pokemonJugador == "Bulbasaur" &&  )
}*/
function seleccionarPokemonEnemigo() {
    PSJugador = 100
    PAJugador = 60
    PSEnemigo = 100
    PAEnemigo = 60
    inyectarPSJugador ()
    inyectarPSEnemigo ()
    esconderPokemon ()
    mostrarAtaques ()
    esconderOtrosAtaques ()
    clearInfo ()
    if (winsJugador <3 && winsEnemigo <3) {
        let pokemonAleatorio = aleatorio(0,pokemons.length -1 )
            spanPokemonEnemigo.innerHTML = pokemons[pokemonAleatorio].nombre
            pokemonEnemigo = pokemons[pokemonAleatorio].nombre
            mostrarImgPkmnEnemigo.src = pokemons[pokemonAleatorio].foto
            alert(" ScummyMan escogio a : " + pokemons[pokemonAleatorio].nombre)
    } 
}
function clearInfo () {
    let tipoAtaque = "---"
    let dañoAtaque = "---"
    let costoAtaque = "---"
    spanTipoAtaque.innerHTML = tipoAtaque
    spanDañoAtaque.innerHTML = dañoAtaque
    spanCostoAtaque.innerHTML = costoAtaque
}
/*info ataques bulbasaur*/
function infoLatigoCepa(){
    spanTipoAtaque.innerHTML = "Planta"
    spanDañoAtaque.innerHTML = "30 PS"
    spanCostoAtaque.innerHTML = "15 PA"
}
function infoHojaAfilada(){
    spanTipoAtaque.innerHTML = "Planta"
    spanDañoAtaque.innerHTML = "45 PS"
    spanCostoAtaque.innerHTML = "25 PA"
}
function infoCorte(){
    spanTipoAtaque.innerHTML = "Normal"
    spanDañoAtaque.innerHTML = "25 PS"
    spanCostoAtaque.innerHTML = "10 PA"
}
/*info ataques treecko*/
function infoAbsorber() {
    spanTipoAtaque.innerHTML = "Planta"
    spanDañoAtaque.innerHTML = "30 PS"
    spanCostoAtaque.innerHTML = "15 PA"
}
function infoBombaGermen() {
    spanTipoAtaque.innerHTML = "Planta"
    spanDañoAtaque.innerHTML = "45 PS"
    spanCostoAtaque.innerHTML = "25 PA"
}
function infoAtaqueRapido() {
    spanTipoAtaque.innerHTML = "Normal"
    spanDañoAtaque.innerHTML = "25 PS"
    spanCostoAtaque.innerHTML = "10 PA"
}
/*info ataques squirtle*/
function infoBurbuja() {
    spanTipoAtaque.innerHTML = "Agua"
    spanDañoAtaque.innerHTML = "30 PS"
    spanCostoAtaque.innerHTML = "15 PA"
}
function infoPistolaAgua() {
    spanTipoAtaque.innerHTML = "Agua"
    spanDañoAtaque.innerHTML = "45 PS"
    spanCostoAtaque.innerHTML = "25 PA"
}
function infoPlacaje() {
}
/*info ataques mudkip*/
function infoCascada() {
    spanTipoAtaque.innerHTML = "Agua"
    spanDañoAtaque.innerHTML = "30 PS"
    spanCostoAtaque.innerHTML = "15 PA"
}
function infoHidroBomba() {
    spanTipoAtaque.innerHTML = "Agua"
    spanDañoAtaque.innerHTML = "45 PS"
    spanCostoAtaque.innerHTML = "25 PA"
}
function infoGolpeCabeza() {
    spanTipoAtaque.innerHTML = "Normal"
    spanDañoAtaque.innerHTML = "25 PS"
    spanCostoAtaque.innerHTML = "10 PA"
}
/*info ataques charmander*/
function infoLlamarada() {
    spanTipoAtaque.innerHTML = "Fuego"
    spanDañoAtaque.innerHTML = "30 PS"
    spanCostoAtaque.innerHTML = "15 PA"
}
function infoLanzaLlamas() {
    spanTipoAtaque.innerHTML = "Fuego"
    spanDañoAtaque.innerHTML = "45 PS"
    spanCostoAtaque.innerHTML = "25 PA"
}
function infoCounter() {
    spanTipoAtaque.innerHTML = "Normal"
    spanDañoAtaque.innerHTML = "25 PS"
    spanCostoAtaque.innerHTML = "10 PA"
}
/*info ataques torchic*/
function infoAscuaz() {
    spanTipoAtaque.innerHTML = "Fuego"
    spanDañoAtaque.innerHTML = "30 PS"
    spanCostoAtaque.innerHTML = "15 PA"
}
function infoGiroFuego() {
    spanTipoAtaque.innerHTML = "Fuego"
    spanDañoAtaque.innerHTML = "45 PS"
    spanCostoAtaque.innerHTML = "25 PA"
}
function infoArañazo() {
    spanTipoAtaque.innerHTML = "Normal"
    spanDañoAtaque.innerHTML = "25 PS"
    spanCostoAtaque.innerHTML = "10 PA"
}
/*info ataque dodge*/
function infoDodge(){
    spanTipoAtaque.innerHTML = "Normal"
    spanDañoAtaque.innerHTML = "0 PS"
    spanCostoAtaque.innerHTML = "5 PA"
}
function revisarPAJugador () {
    if (PAJugador > 0) {
        ataqueJugadorInvalido = ataqueJugador
        alert("Tu " +pokemonJugador+ " esta muy cansado para usar " +ataqueJugadorInvalido+ " , porfavor selecciona otro ataque")
    } else  {
        alert("Tu " +pokemonJugador+ " ya no tiene energia para atacar, queda fuera de combate")
        crearResultado(" 💀Perdiste💀")
        esconderAtaques ()
        mostrarPokemon ()
        mostrarOtrosAtaques ()
        winsEnemigo = winsEnemigo +1
    }
    
}
function revisarPAEnemigo () {
    if (PAEnemigo > 24) {
        ataqueAleatorio = aleatorio(1,7)
    } else if (PAEnemigo < 24 && PAEnemigo > 14) {
        ataqueAleatorio = aleatorio(1,5)
    } else if (PAEnemigo < 14 && PAEnemigo > 9) {
        ataqueAleatorio = aleatorio(1,3)
    } else if (PAEnemigo < 9 && PAEnemigo > 0) {
        ataqueAleatorio = 1
    } else if (PAEnemigo < 1) {
        alert("El " +pokemonEnemigo+ " enemigo ya no tiene energia para atacar, queda fuera de combate")
        crearResultado(" 🎉Ganaste🎉")
        esconderAtaques ()
        mostrarPokemon ()
        mostrarOtrosAtaques ()
        winsJugador = winsJugador +1
        revisarPS()
        revisarWins()
    } 
    
    
    
}
/* funciones de ataque*/
function ataqueDodge() {
    ataqueJugador ="Dodge"
    if (PAJugador > 4) {
        DmgJugador = 0
        PAJugador = PAJugador - 5 
        tipoAtaqueJugador = "dodge"
        ataqueAleatorioEnemigo()
    } else {
        revisarPAJugador()
    }
    
}
/* funciones de ataque bulbasaur*/
function ataqueLatigoCepa() {
    ataqueJugador ="Latigo cepa"
    if (PAJugador > 14) {
        DmgJugador = 30
        PAJugador = PAJugador - 15 
        tipoAtaqueJugador = "grass"
        ataqueAleatorioEnemigo()
    } else {
        revisarPAJugador()
    }
    
}
function ataqueHojaAfilada() {
    ataqueJugador ="Hoja afilada"
    if (PAJugador > 24) {
        DmgJugador = 45
        PAJugador = PAJugador - 25 
        tipoAtaqueJugador = "grass"
        ataqueAleatorioEnemigo()
    } else {
        revisarPAJugador()
    }
}
function ataqueCorte() {
    ataqueJugador ="Corte"
    if (PAJugador > 9) {
        DmgJugador = 25
        PAJugador = PAJugador - 10 
        tipoAtaqueJugador = "normal"
        ataqueAleatorioEnemigo()
    } else {
        revisarPAJugador()
    }
}
/* funciones de ataque squirtle*/
function ataqueBurbuja() {
    ataqueJugador ="Burbuja"
    if (PAJugador > 14) {
        DmgJugador = 30
        PAJugador = PAJugador - 15 
        tipoAtaqueJugador = "wtr"
        ataqueAleatorioEnemigo()
    } else {
        revisarPAJugador()
    }
}
function ataquePistolaAgua() {
    ataqueJugador ="Pistola agua"
    if (PAJugador > 24) {
        DmgJugador = 45
        PAJugador = PAJugador - 25 
        tipoAtaqueJugador = "wtr"
        ataqueAleatorioEnemigo()
    } else {
        revisarPAJugador()
    }
}
function ataquePlacaje() {
    ataqueJugador ="Placaje"
    if (PAJugador > 9) {
        DmgJugador = 25
        PAJugador = PAJugador - 10 
        tipoAtaqueJugador = "normal"
        ataqueAleatorioEnemigo()
    } else {
        revisarPAJugador()
    }
}
/* funciones de ataque charmander*/
function ataqueLlamarada() {
    ataqueJugador ="Llamarada"
    if (PAJugador > 14) {
        DmgJugador = 30
        PAJugador = PAJugador - 15 
        tipoAtaqueJugador = "fire"
        ataqueAleatorioEnemigo()
    } else {
        revisarPAJugador()    
    } 
}
function ataqueLanzaLlamas() {
    ataqueJugador ="Lanza-llamas"
    if (PAJugador > 24) {
        DmgJugador = 45
        PAJugador = PAJugador - 25 
        tipoAtaqueJugador = "fire"
        ataqueAleatorioEnemigo()
    } else {
        revisarPAJugador()   
     }
}
function ataqueCounter() {
    ataqueJugador ="Counter-attack"
    if (PAJugador > 9) {
        DmgJugador = 25
        PAJugador = PAJugador - 10 
        tipoAtaqueJugador = "normal"
        ataqueAleatorioEnemigo()
    } else {
        revisarPAJugador()  
      }
}
/* funciones de ataque treecko*/
function ataqueAbsorber() {
    ataqueJugador ="Absorber"
    if (PAJugador > 14) {
        DmgJugador = 30
        PAJugador = PAJugador - 15 
        tipoAtaqueJugador = "grass"
        ataqueAleatorioEnemigo()
    } else {
        revisarPAJugador() 
    } 
}
function ataqueBombaGermen() {
    ataqueJugador ="Bomba germen"
    if (PAJugador > 24) {
        DmgJugador = 45
        PAJugador = PAJugador - 25 
        tipoAtaqueJugador = "grass"
        ataqueAleatorioEnemigo()
    } else {
        revisarPAJugador()
    }
}
function ataqueAtaqueRapido() {
    ataqueJugador ="Ataque rapido"
    if (PAJugador > 9) {
        DmgJugador = 25
        PAJugador = PAJugador - 10 
        tipoAtaqueJugador = "normal"
        ataqueAleatorioEnemigo()
    } else {
        revisarPAJugador()
    }
}
/* funciones de ataque mudkip*/
function ataqueCascada() {
    ataqueJugador ="Cascada"
    if (PAJugador > 14) {
        DmgJugador = 30
        PAJugador = PAJugador - 15 
        tipoAtaqueJugador = "wtr"
        ataqueAleatorioEnemigo()
    } else {
        revisarPAJugador()
    }
}
function ataqueHidroBomba() {
    ataqueJugador ="Hidro-bomba"
    if (PAJugador > 24) {
        DmgJugador = 45
        PAJugador = PAJugador - 25 
        tipoAtaqueJugador = "wtr"
        ataqueAleatorioEnemigo()
    } else {
        revisarPAJugador()
    }
}
function ataqueGolpeCabeza() {
    ataqueJugador ="Golpe cabeza"
    if (PAJugador > 9) {
        DmgJugador = 25
        PAJugador = PAJugador - 10 
        tipoAtaqueJugador = "normal"
        ataqueAleatorioEnemigo()
    } else {
        revisarPAJugador()
    }
}
/* funciones de ataque torchic*/
function ataqueAscuaz() {
    ataqueJugador ="Ascuaz"
    if (PAJugador > 14) {
        DmgJugador = 30
        PAJugador = PAJugador - 15 
        tipoAtaqueJugador = "fire"
        ataqueAleatorioEnemigo()
    } else {
        revisarPAJugador()
    } 
}
function ataqueGiroFuego() {
    ataqueJugador ="Giro-fuego"
    if (PAJugador > 24) {
        DmgJugador = 45
        PAJugador = PAJugador - 25 
        tipoAtaqueJugador = "fire"
        ataqueAleatorioEnemigo()
    } else {
        revisarPAJugador()
    }
}
function ataqueArañazo() {
    ataqueJugador ="Arañazo"
    if (PAJugador > 9) {
        DmgJugador = 25
        PAJugador = PAJugador - 10 
        tipoAtaqueJugador = "normal"
        ataqueAleatorioEnemigo()
    } else {
        revisarPAJugador()
    }
}
function ataqueAleatorioEnemigo() { 
    if (pokemonEnemigo == "Bulbasaur" ) {
        revisarPAEnemigo ()
        if (ataqueAleatorio == 1) {
            ataqueEnemigo = "Dodge"
            DmgEnemigo = 0
            PAEnemigo = PAEnemigo - 5 
            tipoAtaqueEnemigo = "dodge"
        } else if (ataqueAleatorio == 2 || ataqueAleatorio == 3) {
            ataqueEnemigo = "Corte"
            DmgEnemigo = 25
            PAEnemigo = PAEnemigo - 10 
            tipoAtaqueEnemigo = "normal"
        } else if (ataqueAleatorio == 4 || ataqueAleatorio == 5) {
            ataqueEnemigo = "Latigo cepa"
            DmgEnemigo = 30
            PAEnemigo = PAEnemigo - 15 
            tipoAtaqueEnemigo = "grass"
        } else if (ataqueAleatorio == 6 || ataqueAleatorio == 7) {
            ataqueEnemigo = "Hoja afilada"
            DmgEnemigo = 45
            PAEnemigo = PAEnemigo - 25 
            tipoAtaqueEnemigo = "grass"
        }
    } else if (pokemonEnemigo == "Squirtle" ) {
        revisarPAEnemigo ()
        if (ataqueAleatorio == 1) {
            ataqueEnemigo = "Dodge"
            DmgEnemigo = 0
            PAEnemigo = PAEnemigo - 5 
            tipoAtaqueEnemigo = "dodge"
        } else if (ataqueAleatorio == 2 || ataqueAleatorio == 3) {
            ataqueEnemigo = "Placaje"
            DmgEnemigo = 25
            PAEnemigo = PAEnemigo - 10 
            tipoAtaqueEnemigo = "normal"
        } else if (ataqueAleatorio == 4 || ataqueAleatorio == 5) {
            ataqueEnemigo = "Burbuja"
            DmgEnemigo = 30
            PAEnemigo = PAEnemigo - 15 
            tipoAtaqueEnemigo = "wtr"
        } else if (ataqueAleatorio == 6 ||
            ataqueAleatorio == 7) {
            ataqueEnemigo = "Pistola agua"
            DmgEnemigo = 45
            PAEnemigo = PAEnemigo - 25 
            tipoAtaqueEnemigo = "wtr"
        } 
    } else if (pokemonEnemigo == "Charmander" ) {
        revisarPAEnemigo ()
        if (ataqueAleatorio == 1) {
            ataqueEnemigo = "Dodge"
            DmgEnemigo = 0
            PAEnemigo = PAEnemigo - 5 
            tipoAtaqueEnemigo = "dodge"
        } else if (ataqueAleatorio == 2 || ataqueAleatorio == 3) {
            ataqueEnemigo = "Counter-attack"
            DmgEnemigo = 25
            PAEnemigo = PAEnemigo - 10 
            tipoAtaqueEnemigo = "normal"
        } else if (ataqueAleatorio == 4 || ataqueAleatorio == 5) {
            ataqueEnemigo = "Llamarada"
            DmgEnemigo = 30
            PAEnemigo = PAEnemigo - 15 
            tipoAtaqueEnemigo = "fire"
        } else if (ataqueAleatorio == 6 || ataqueAleatorio == 7) {
            ataqueEnemigo = "Lanza-llamas"
            DmgEnemigo = 45
            PAEnemigo = PAEnemigo - 25 
            tipoAtaqueEnemigo = "fire"
        }
    } else if (pokemonEnemigo == "Treecko" ) {
        revisarPAEnemigo ()
        if (ataqueAleatorio == 1) {
            ataqueEnemigo = "Dodge"
            DmgEnemigo = 0
            PAEnemigo = PAEnemigo - 5 
            tipoAtaqueEnemigo = "dodge"
        } else if (ataqueAleatorio == 2 || ataqueAleatorio == 3) {
            ataqueEnemigo = "Ataque-rapido"
            DmgEnemigo = 25
            PAEnemigo = PAEnemigo - 10 
            tipoAtaqueEnemigo = "normal"
        } else if (ataqueAleatorio == 4 || ataqueAleatorio == 5) {
            ataqueEnemigo = "Absorber"
            DmgEnemigo = 30
            PAEnemigo = PAEnemigo - 15 
            tipoAtaqueEnemigo = "grass"
        } else if (ataqueAleatorio == 6 || ataqueAleatorio == 7) {
            ataqueEnemigo = "Bomba germen"
            DmgEnemigo = 45
            PAEnemigo = PAEnemigo - 25 
            tipoAtaqueEnemigo = "grass"
        }
    } else if (pokemonEnemigo == "Mudkip" ) {
        revisarPAEnemigo ()
        if (ataqueAleatorio == 1) {
            ataqueEnemigo = "Dodge"
            DmgEnemigo = 0
            PAEnemigo = PAEnemigo - 5 
            tipoAtaqueEnemigo = "dodge"
        } else if (ataqueAleatorio == 2 || ataqueAleatorio == 3) {
            ataqueEnemigo = "Golpe cabeza"
            DmgEnemigo = 25
            PAEnemigo = PAEnemigo - 10 
            tipoAtaqueEnemigo = "normal"
        } else if (ataqueAleatorio == 4 || ataqueAleatorio == 5) {
            ataqueEnemigo = "Cascada"
            DmgEnemigo = 30
            PAEnemigo = PAEnemigo - 15 
            tipoAtaqueEnemigo = "wtr"
        } else if (ataqueAleatorio == 6 || ataqueAleatorio == 7) {
            ataqueEnemigo = "Hidro-bomba"
            DmgEnemigo = 45
            PAEnemigo = PAEnemigo - 25 
            tipoAtaqueEnemigo = "wtr"
        }
    } else if (pokemonEnemigo == "Torchic" ) {
        revisarPAEnemigo ()
        if (ataqueAleatorio == 1) {
            ataqueEnemigo = "Dodge"
            DmgEnemigo = 0
            PAEnemigo = PAEnemigo - 5 
            tipoAtaqueEnemigo = "dodge"
        } else if (ataqueAleatorio == 2 || ataqueAleatorio == 3) {
            ataqueEnemigo = "Arañazo"
            DmgEnemigo = 25
            PAEnemigo = PAEnemigo - 10 
            tipoAtaqueEnemigo = "normal"
        } else if (ataqueAleatorio == 4 || ataqueAleatorio == 5) {
            ataqueEnemigo = "Ascuaz"
            DmgEnemigo = 30
            PAEnemigo = PAEnemigo - 15 
            tipoAtaqueEnemigo = "fire"
        } else if (ataqueAleatorio == 6 || ataqueAleatorio == 7) {
            ataqueEnemigo = "Giro-fuego"
            DmgEnemigo = 45
            PAEnemigo = PAEnemigo - 25 
            tipoAtaqueEnemigo = "wtr"
        }
    }    combate() 
    alert(ataqueJugador)
    alert( "enemigo " + ataqueEnemigo )
}
function combate() {
    if (tipoAtaqueJugador == "dodge" ) {
        DmgEnemigo = 0
        inyectarPSJugador ()
        inyectarPSEnemigo ()
        crearMensaje(" Daño ocasionado : " +DmgJugador+ " , Daño recibido : " +DmgEnemigo)
    } else if (tipoAtaqueEnemigo == "dodge") {
        DmgJugador = 0
        inyectarPSJugador ()
        inyectarPSEnemigo ()
        crearMensaje(" Daño ocasionado : " +DmgJugador+ " , Daño recibido : " +DmgEnemigo)
    } else if (tipoAtaqueJugador == "normal" || tipoAtaqueEnemigo == "normal" || tipoAtaqueJugador == tipoAtaqueEnemigo ) {
        PSJugador = PSJugador - DmgEnemigo
        PSEnemigo = PSEnemigo - DmgJugador
        inyectarPSJugador ()
        inyectarPSEnemigo ()
        crearMensaje(" Daño ocasionado : " +DmgJugador+ " , Daño recibido : " +DmgEnemigo)
    } else if (tipoAtaqueJugador == "fire" && tipoAtaqueEnemigo == "grass" || tipoAtaqueJugador == "wtr" && tipoAtaqueEnemigo == "fire" || tipoAtaqueJugador == "grass" && tipoAtaqueEnemigo == "wtr" ) {
        DmgJugador = DmgJugador +5
        PSJugador = PSJugador - DmgEnemigo
        PSEnemigo = PSEnemigo - DmgJugador
        inyectarPSJugador ()
        inyectarPSEnemigo ()
        crearMensaje(" Daño ocasionado : " +DmgJugador+ " , Daño recibido : " +DmgEnemigo)
    } else if (tipoAtaqueEnemigo == "fire" && tipoAtaqueJugador == "grass" || tipoAtaqueEnemigo == "wtr" && tipoAtaqueJugador == "fire" || tipoAtaqueEnemigo == "grass" && tipoAtaqueJugador == "wtr" ) {
        DmgEnemigo = DmgEnemigo +5
        PSJugador = PSJugador - DmgEnemigo
        PSEnemigo = PSEnemigo - DmgJugador
        inyectarPSJugador ()
        inyectarPSEnemigo ()
        crearMensaje(" Daño ocasionado : " +DmgJugador+ " , Daño recibido : " +DmgEnemigo)
    } else {
        alert("a ver a ver que paso?")
    }
    revisarPAEnemigo ()
    revisarPS()
    revisarWins()
}
function revisarPS() {
    if (PSJugador < 1 && PSEnemigo < 1) {
        PSJugador = 0
        PSEnemigo = 0
        inyectarPSEnemigo () 
        inyectarPSJugador ()
        crearResultado(" 🤡Empate🤡 ")
        esconderAtaques ()
        mostrarPokemon ()
        mostrarOtrosAtaques ()
        alert("Tu " + pokemonJugador + " se ha debilitado El " + pokemonEnemigo + " enemigo se ha debilitado")
    } else if (PSJugador < 1) {
        PSJugador = 0
        inyectarPSJugador ()
        crearResultado(" 💀Perdiste💀")
        esconderAtaques ()
        mostrarPokemon ()
        mostrarOtrosAtaques ()
        winsEnemigo = winsEnemigo +1
        alert("Tu " + pokemonJugador + " se ha debilitado")
    } else if (PSEnemigo < 1) {
        PSEnemigo = 0
        inyectarPSEnemigo () 
        crearResultado(" 🎉Ganaste🎉")
        esconderAtaques ()
        mostrarPokemon ()
        mostrarOtrosAtaques ()
        winsJugador = winsJugador +1
        alert("El " + pokemonEnemigo + " enemigo se ha debilitado")
    }
}   
function revisarWins(){
    if (winsJugador == 3) {
        crearMensajeFinal("Felicidades, venciste a ScummyMan")
    } else if (winsEnemigo == 3) {
        crearMensajeFinal("Lo siento, ScummyMan te ha derrotado")
    }
}
function crearMensaje(resultado) {
    let parrafo2 = document.createElement("p")
    parrafo2.innerHTML = resultado
    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu " + pokemonJugador + " usó " + ataqueJugador + " , el " + pokemonEnemigo + " enemigo usó " + ataqueEnemigo 
    pReferencia.after(parrafo2)
    pReferencia.after(parrafo)
}
function crearResultado (resultadoPartida) {
    let marcadorPartidas = document.createElement("p")
    marcadorPartidas.innerHTML =  pokemonJugador + " v.s " + pokemonEnemigo + " - " + resultadoPartida
    sectionMarcador.appendChild(marcadorPartidas)
}
function crearMensajeFinal(resultadoFinal) {
    let mensajeFinal = document.createElement("p")
    mensajeFinal.innerHTML = resultadoFinal
    sectionMarcador.appendChild(mensajeFinal)
    esconderPokemon()
    mostrarReinicio ()
}
function esconderReinicio () {
    sectionReiniciar.style.display = "none"
} 
function mostrarReinicio () {
    sectionReiniciar.style.display = "flex"
}   
function esconderAtaques () {
    sectionSeleccionAtaque.style.display = "none"
}
function mostrarAtaques () {
    sectionSeleccionAtaque.style.display = "flex"
}
function esconderPokemon () {
    sectionSeleccionPokemon.style.display = "none"
}
function mostrarPokemon () {
    sectionSeleccionPokemon.style.display = "flex"
}
function esconderOtrosAtaques () {
    if (pokemonJugador == "Bulbasaur") {
        sectionAtaquesSquirtle.style.display = "none"  
        sectionAtaquesCharmander.style.display = "none"
        sectionAtaquesTreecko.style.display = "none"
        sectionAtaquesMudkip.style.display = "none"
        sectionAtaquesTorchic.style.display = "none"
    } else if (pokemonJugador == "Squirtle") {
        sectionAtaquesBulbasaur.style.display = "none"  
        sectionAtaquesCharmander.style.display = "none"
        sectionAtaquesTreecko.style.display = "none"
        sectionAtaquesMudkip.style.display = "none"
        sectionAtaquesTorchic.style.display = "none"
    } else if (pokemonJugador == "Charmander") {
        sectionAtaquesBulbasaur.style.display = "none"  
        sectionAtaquesSquirtle.style.display = "none"  
        sectionAtaquesTreecko.style.display = "none"
        sectionAtaquesMudkip.style.display = "none"
        sectionAtaquesTorchic.style.display = "none"
    } else if (pokemonJugador == "Treecko") {
        sectionAtaquesBulbasaur.style.display = "none"  
        sectionAtaquesSquirtle.style.display = "none"  
        sectionAtaquesCharmander.style.display = "none"
        sectionAtaquesMudkip.style.display = "none"
        sectionAtaquesTorchic.style.display = "none"
    } else if (pokemonJugador == "Mudkip") {
        sectionAtaquesBulbasaur.style.display = "none"  
        sectionAtaquesSquirtle.style.display = "none"  
        sectionAtaquesCharmander.style.display = "none"
        sectionAtaquesTreecko.style.display = "none"
        sectionAtaquesTorchic.style.display = "none"
    } else if (pokemonJugador == "Torchic") {
        sectionAtaquesBulbasaur.style.display = "none"  
        sectionAtaquesSquirtle.style.display = "none"  
        sectionAtaquesCharmander.style.display = "none"
        sectionAtaquesTreecko.style.display = "none"
        sectionAtaquesMudkip.style.display = "none"
    }
}
function mostrarOtrosAtaques () {
    sectionAtaquesBulbasaur.style.display = "flex"
    sectionAtaquesSquirtle.style.display = "flex"  
    sectionAtaquesCharmander.style.display = "flex"
    sectionAtaquesTreecko.style.display = "flex"
    sectionAtaquesMudkip.style.display = "flex"
    sectionAtaquesTorchic.style.display = "flex"
}
function reiniciarJuego () {
    location.reload()
}
function aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener("load", iniciarJuego)