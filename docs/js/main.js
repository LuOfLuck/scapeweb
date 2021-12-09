const cerrar = document.getElementById("cerrar")
const conNiveles = document.getElementById("id_con_niveles")
const svgAbrir = document.getElementById("svg_abrir")
svgAbrir.addEventListener("click", () => {
	conNiveles.style.transform = `translateY(0%)`
})
cerrar.addEventListener("click", () => {
	conNiveles.style.transform = `translateY(100%)`
})