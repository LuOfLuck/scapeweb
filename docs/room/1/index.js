export tableGenerar = ()=> {
	const element = `
		<div>
			<table class="table">
				<tr class="table__tr table__tr--libre">
					<td value="1.1" class="table__tr__td you">1.1</td>
					<td class="table__tr__td table__tr__td--medida block">2.1</td>
					<td class="table__tr__td block">3.1</td>
					<td class="table__tr__td finally">4.1</td>
				</tr>	
				<tr class="table__tr">
					<td class="table__tr__td">1.2</td>
					<td class="table__tr__td block">2.2</td>
					<td class="table__tr__td ">3.2</td>
					<td class="table__tr__td block chet-1">4.2</td>
				</tr>
				<tr class="table__tr">
					<td class="table__tr__td">1.3</td>
					<td class="table__tr__td block">2.3</td>
					<td class="table__tr__td">3.3</td>
					<td class="table__tr__td block">4.3</td>
				</tr>
				<tr class="table__tr">
					<td class="table__tr__td">1.4</td>
					<td class="table__tr__td">2.4</td>
					<td class="table__tr__td">3.4</td>
					<td class="table__tr__td ">4.4</td>
					<td id="1" class="table__tr__td oculto">5.4</td>
				</tr>
			</table>			
		</div>
	`;
	return element;
}
