const blockCarta = document.getElementById("id__block__carta")
const blockOculto = document.getElementById("block__oculto")
const inputClave = document.getElementById("id_clave")
const buttonActive = document.getElementById("active")
const libroTexto = document.getElementById("id_libro__texto")
const buttons = document.getElementsByClassName("button--footer")
const barras = document.getElementsByClassName("barras__cont")
const capa = document.getElementById("capa")
const orden = [8,5,4,2,9,3,6,7,1,9]
const claveBarra = [-2, -1, 3, 3]
var active = 0
var claveGlobal = "espinosa"
var activado = false
var completado = false

const createdElement = (element, id, className,) =>{
	element = document.createElement(element)
	element.classList.add(className)
	element.id = id
	return element
}
for (var i = 1; i <= 9; i++) {
	blockCarta.appendChild(createdElement("div", i, "block__carta"))
}


const cartas = document.getElementsByClassName("block__carta")
blockCarta.addEventListener("click", (element)=>{
	console.log(active)
	if (element.target.id == orden[active]) {
		active +=1;
		element.target.classList.add("block__carta--true")
		if (active == 9) {
			completado = true
			blockOculto.style.left = '0'
		}
	}else{
		if(active != 0 && !completado){
			active = 0;
			for(carta of cartas){
				carta.classList.remove("block__carta--true")
			}
		}
	}

})
const activarBotones = () =>{

	for(let i = 0; i<3; i++){
		buttons[i].addEventListener("click", ()=>{
			alert(buttons[i].id)
		})
	}
} 
buttonActive.addEventListener("click", ()=>{
	if (!activado){
		if(inputClave.value == claveGlobal){
			alert("¿activado?")
			activado = true
		}else{
			console.log(inputClave.value)
			alert("¿activar? emmmm...")
		}
	}else{
		buttonActive.disabled = true
		alert("emmmmm...")
		id_libro__texto.classList.add("text--active")
		activarBotones()
		activarBarras()
		activado = false

	}
})

const moverBarra = (barra, valor) =>{
	let position = parseInt(barra.position)

	if((position > -3 && position < 3) || ((position > -3 && valor < 0) || (position < 3 && valor > 0))){
		let direction = position + valor
		barra.position = direction
		barra.innerHTML = direction;
		barra.style.right = `${direction * 50}px`
		// alert(direction)
		return true
	}else {
	 	alert("no")	
	 	return false
	 } 
	
}

const verificar = ()=>{
	let contador = 0;
	for (let i = 0; i<4; i++){
		if(claveBarra[i] == barras[i].lastElementChild.position){
			contador+=1;
		}
	}
	return (contador==4)?true:false
}
const activarBarras = ()=>{

	for (let i = 0; i<4; i++){
		barras[i].lastElementChild.position = '0';
		barras[i].addEventListener("click", (e)=>{
			let target = e.target || e.srcElement;
			if(target.tagName == "I"){
				if (/\ fa-arrow-left\b/g.test(target.className)) {
					var con = moverBarra(barras[i].lastElementChild, 1)
				}else{
					var con = moverBarra(barras[i].lastElementChild, -1)
				}
				if (con){
					if(verificar()){
						alert("yea :)")
						activarFinGame()
					}
				}
			}

		})
	} 
}
var valor = 0;
const activarFinGame = ()=>{
	capa.addEventListener("mousemove", ()=>{
		valor += 15
		capa.style.transform = `translateX(${valor}px)`
	})
}