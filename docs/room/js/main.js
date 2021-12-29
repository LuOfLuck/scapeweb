const table = document.querySelector(".table");


const mover = (element)=>{
	var you = document.querySelector(".you");
	element.classList.add("you");
	you.classList.remove("you");
	if(/\ finally\b/g.test(element.className)){
		alert("fin del game")
	}
	if(/\ oculto\b/g.test(element.className)){
		let block = document.querySelector(`.chet-` + element.id);
		block.classList.remove("block")
		element.classList.remove("oculto")
	}
}

const condicion = (strYou, target)=>{
	let strTarget = target.innerHTML; 
	let primero = parseInt(strYou[0])
	let segundo = parseInt(strYou[2])
	array = [
		`${primero}.${segundo+1}`,
		`${primero}.${segundo-1}`,
		`${primero+1}.${segundo}`,
		`${primero-1}.${segundo}`,
	]
	return (array.includes(strTarget) && !(/\ block\b/g.test(target.className)))
}


table.addEventListener("click", (element)=>{
	let you = document.querySelector(".you");
	target = element.target || element.srcElement;
	var strYou = you.innerHTML;
	if(condicion(strYou, target)){
		mover(target)

	}
})

