const table = document.querySelector(".table");
const trLibre = document.querySelector(".table__tr--libre");
const tdMedida = document.querySelector(".table__tr__td--medida");
const tdWidth = tdMedida.scrollWidth + 4;
trCount = GetChildCount(trLibre);
tableWidthFalse = trCount * tdWidth;
createdBorderTable(table)

function createdElement(obj){
	element = document.createElement(obj.element)
	element.classList.add(obj.className)
	element.style = obj.style;
	return element
}

function GetChildCount(element){
    var childCount = 0;
	if ('childElementCount' in element) {
		childCount = element.childElementCount;
	}
	else {
		if (element.children) {
			childCount = element.children.length;
	    }
		else {  // Firefox before version 3.5
			var child = element.firstChild;
			while (child) {
				if (child.nodeType == 1 /*Node.ELEMENT_NODE*/) {
					childCount++;
				}
				child = child.nextSibling;
			}
		}
	}
	return childCount;
}

function createdBorderTable(table){
	let border = 10;
	table.appendChild(createdElement({
	element:"div",
	className:"table--border",
	style: `
		top: -0px;
		width: ${tableWidthFalse + 2}px;
		height: ${border}px;
	`
	}));
	table.appendChild(createdElement({
		element:"div",
		className:"table--border",
		style: `
			bottom: -0px;
			width: ${tableWidthFalse + 2}px;
			height: ${border}px;
		`
	}));
	table.appendChild(createdElement({
		element:"div",
		className:"table--border",
		style: `
			top: 0;
			left: -5px;
			width: ${border}px;
			height: 100%;
		`
	}));
	table.appendChild(createdElement({
		element:"div",
		className:"table--border",
		style: `
			top: 0;
			left: ${tableWidthFalse - 8}px;
			width: ${border}px;
			height: 100%;
		`
	}));
}
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
		element.classList.add("oculto--visto")
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

