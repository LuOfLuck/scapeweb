const popou = document.getElementById("id_popou");
const button_exit = document.getElementById("exit__popou")
const abrir_popou = document.getElementById("abrir_popou")
const verificar = document.getElementById("verificar")
const clave = document.getElementById("id_clave")
const move =document.getElementById('id_move')
const capa = document.getElementById("id_capa")
var valor = 0

button_exit.onclick = () =>{
	popou.classList.remove("flex")
}
function abrirPopou(){
	popou.classList.add("flex")
}


verificar.onclick = () => {
	if(clave.value == "callefalsa123"){
		abrir_popou.onclick = null
		alert("clave correcta :)")
		button_exit.onclick()
		move.style.width = "50px"
	}
}

move.addEventListener("mousemove", ()=>{
	valor += 15
	capa.style.transform = `translateX(${valor}px)`
})