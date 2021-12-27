const cerrar = document.getElementById("cerrar");
const conNiveles = document.getElementById("id_con_niveles");
const svgAbrir = document.getElementById("svg_abrir");
const forms = document.getElementsByClassName("form");
const scollBackList = document.getElementsByClassName("scoll_back")


svgAbrir.addEventListener("click", () => {
	conNiveles.style.transform = `translateY(0%)`
})
cerrar.addEventListener("click", () => {
	conNiveles.style.transform = `translateY(100%)`
})


document.addEventListener("scroll", ()=>{
	let color = (window.scrollY > 200)?"var(--violeta)":"white";
	for (element of scollBackList) element.style.background = color;
})

let formsLength = forms.length;

const claves = [
	{"clave":"LucasTeQuiere", "url":"escrituras/feliz-2022.html"},
	{"clave":"EllaNoTeQuiere", "url":"escrituras/feliz-año-nuevo.html"},
]
var ruta = (window.location.host == "www.scapeweb.online")?"https://" + window.location.host:"file:///C:/Users/Lucas/Desktop/divertido/docs/"

for (let i = 0; i < formsLength; i++){
	forms[i].addEventListener("click", (e)=>{
		let target = e.target || e.srcElement;
		if(target.tagName == "BUTTON"){
			if(forms[i].firstElementChild.value == claves[i]["clave"]){
				window.location.href = ruta + claves[i]["url"];
			}
		}
	})
}