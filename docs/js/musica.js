if(window.location.host == "www.scapeweb.online"){
	var ruta = "https://" + window.location.host
}else{
	var ruta = "file:///C:/Users/Lucas/Desktop/divertido/docs/"
}
document.body.insertAdjacentHTML('beforeend', `
	<div class="audio">
		<audio id="audio_clic" src="${ruta}/musica/clic_normal.mp3"></audio>
		<audio id="audio_clic_bueno" src="${ruta}/musica/clic_bueno.mp3"></audio>
		<audio id="musica" src="${ruta}/musica/index.mp3"></audio>
		<div id="id_audio_estado" class="cont-audio">
			<div class="icon-music">
				<i id="icon_musica" class="ico fas fa-play"></i>
			</div>
			<div class="icon-music">
				<i id="icon_efectos" class="ico fas fa-volume-up"></i>
			</div
		</div>
		
	</div>
`);

console.log(window.location.href, ruta)
const musica = document.getElementById("musica");
const iconMusica = document.getElementById("icon_musica");
const iconEfectos = document.getElementById("icon_efectos");
const audioClic = document.getElementById("audio_clic")
const audioClicBueno = document.getElementById("audio_clic_bueno")



document.addEventListener("click", (e)=>{
	console.log(e.target == iconMusica)
	if(e.target == iconMusica){
		audioClicBueno.play()
	}else{
		audioClic.play()
	}	
})

const pausar_o_reproducir = () =>{
	if (/\ fa-pause\b/g.test(iconMusica.className)){
		iconMusica.classList.replace("fa-pause", "fa-play");
		musica.pause()
	}else{
		iconMusica.classList.replace("fa-play","fa-pause");
		musica.play()
	}
}
const efectosSonds = () => {
	if (/\ fa-volume-mute\b/g.test(iconEfectos.className)){
		iconEfectos.classList.replace("fa-volume-mute", "fa-volume-up");
		audioClic.volume = 1
		audioClicBueno.volume = 1
	}else{
		iconEfectos.classList.replace("fa-volume-up","fa-volume-mute");
		audioClic.volume = 0
		audioClicBueno.volume = 0
	}
}
iconMusica.addEventListener("click", pausar_o_reproducir);
iconEfectos.addEventListener("click", efectosSonds);

musica.addEventListener('ended',function(){
    musica.play()
});