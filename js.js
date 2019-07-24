window.onload = function () { // window.onload- событие,возникающее при загрузке окна
	for (var i = 0; i < 225; i++) {
		document.getElementById('game').innerHTML += '<div class="block"></div>';
	}

	var hod = 0;

	document.getElementById('game').onclick = function (event) {
		console.log(event);
		if (event.target.className == 'block' && event.target.textContent == "") {
			if (hod % 2 == 0) {
				event.target.innerHTML = 'x';
			} else {
				event.target.innerHTML = 'o';
			}
			hod++;
			checkWinner();
		}
	}

	function checkWinner() {
		var allblock = document.getElementsByClassName('block');
		//по горизонтали
		for (var m = 0; m < 225; m++) {
			if (allblock[m].innerHTML == 'x' && allblock[m + 1].innerHTML == 'x' && allblock[m + 2].innerHTML == 'x' && allblock[m + 3].innerHTML == 'x' && allblock[m + 4].innerHTML == 'x')
			alert('Победили крестики');
		}

		for (var m = 0; m < 225; m++) {
			if (allblock[m].innerHTML == 'o' && allblock[m + 1].innerHTML == 'o' && allblock[m + 2].innerHTML == 'o' && allblock[m + 3].innerHTML == 'o' && allblock[m + 4].innerHTML == 'o')
				alert('Победили нолики');
		}

		//по вертикали
		for (var m = 0; m < 225; m++) {
			if (allblock[m].innerHTML == 'x' && allblock[m + 15].innerHTML == 'x' && allblock[m + 30].innerHTML == 'x' && allblock[m + 45].innerHTML == 'x' && allblock[m + 60].innerHTML == 'x')
				alert('Победили крестики');
		}

		for (var m = 0; m < 225; m++) {
			if (allblock[m].innerHTML == 'o' && allblock[m + 15].innerHTML == 'o' && allblock[m + 30].innerHTML == 'o' && allblock[m + 45].innerHTML == 'o' && allblock[m + 60].innerHTML == 'o')
				alert('Победили нолики');
		}

		//по диагонали
		for (var m = 0; m < 225; m++) {
			if (allblock[m].innerHTML == 'x' && allblock[m + 16].innerHTML == 'x' && allblock[m + 32].innerHTML == 'x' && allblock[m + 48].innerHTML == 'x' && allblock[m + 64].innerHTML == 'x')
				alert('Победили крестики');
		}

		for (var m = 0; m < 225; m++) {
			if (allblock[m].innerHTML == 'o' && allblock[m + 16].innerHTML == 'o' && allblock[m + 32].innerHTML == 'o' && allblock[m + 48].innerHTML == 'o' && allblock[m + 64].innerHTML == 'o')
				alert('Победили нолики');
		}


		//по побочной диагонали
		for (var n = 1; n < 225; n++) {
			if (allblock[n].innerHTML == 'x' && allblock[n + 14].innerHTML == 'x' && allblock[n + 28].innerHTML == 'x' && allblock[n + 42].innerHTML == 'x' && allblock[n + 56].innerHTML == 'x')
				alert('Победили крестики');
		}

		for (var n = 1; n < 225; n++) {
			if (allblock[n].innerHTML == 'o' && allblock[n + 14].innerHTML == 'o' && allblock[n + 28].innerHTML == 'o' && allblock[n + 42].innerHTML == 'o' && allblock[n + 56].innerHTML == 'o')
			alert('Победили нолики');
		} 

		/*for (var n = 9; n < 91; n+9) {
			if (allblock[n].innerHTML == 'x' && allblock[n + 9].innerHTML == 'x' && allblock[n + 18].innerHTML == 'x' && allblock[n + 27].innerHTML == 'x' && allblock[n + 36].innerHTML == 'x')
				alert('Победили крестики');
		}

		for (var n = 9; n < 91; n+9) {
			if (allblock[n].innerHTML == '0' && allblock[n + 9].innerHTML == '0' && allblock[n + 18].innerHTML == '0' && allblock[n + 27].innerHTML == '0' && allblock[n + 36].innerHTML == '0')
			alert('Победили нолики');
		} */

//
/*if (allblock[9].innerHTML=='x' && allblock[18].innerHTML=='x' && allblock[27].innerHTML=='x' && allblock[36].innerHTML=='x' && allblock[45].innerHTML=='x') alert('Победили крестики'); 
if (allblock[18].innerHTML=='x' && allblock[27].innerHTML=='x' && allblock[36].innerHTML=='x' && allblock[45].innerHTML=='x' && allblock[54].innerHTML=='x') alert('Победили крестики');
if (allblock[27].innerHTML=='x' && allblock[36].innerHTML=='x' && allblock[45].innerHTML=='x' && allblock[54].innerHTML=='x' && allblock[63].innerHTML=='x') alert('Победили крестики');
if (allblock[36].innerHTML=='x' && allblock[45].innerHTML=='x' && allblock[54].innerHTML=='x' && allblock[63].innerHTML=='x' && allblock[72].innerHTML=='x') alert('Победили крестики');
if (allblock[45].innerHTML=='x' && allblock[54].innerHTML=='x' && allblock[63].innerHTML=='x' && allblock[72].innerHTML=='x' && allblock[81].innerHTML=='x') alert('Победили крестики');
if (allblock[54].innerHTML=='x' && allblock[63].innerHTML=='x' && allblock[72].innerHTML=='x' && allblock[81].innerHTML=='x' && allblock[90].innerHTML=='x') alert('Победили крестики');

if (allblock[9].innerHTML=='o' && allblock[18].innerHTML=='o' && allblock[27].innerHTML=='o' && allblock[36].innerHTML=='o' && allblock[45].innerHTML=='o') alert('Победили нолики');
if (allblock[18].innerHTML=='o' && allblock[27].innerHTML=='o' && allblock[36].innerHTML=='o' && allblock[45].innerHTML=='o' && allblock[54].innerHTML=='o') alert('Победили нолики');
if (allblock[27].innerHTML=='o' && allblock[36].innerHTML=='o' && allblock[45].innerHTML=='o' && allblock[54].innerHTML=='o' && allblock[63].innerHTML=='o') alert('Победили нолики');
if (allblock[36].innerHTML=='o' && allblock[45].innerHTML=='o' && allblock[54].innerHTML=='o' && allblock[63].innerHTML=='o' && allblock[72].innerHTML=='o') alert('Победили нолики');
if (allblock[45].innerHTML=='o' && allblock[54].innerHTML=='o' && allblock[63].innerHTML=='o' && allblock[72].innerHTML=='o' && allblock[81].innerHTML=='o') alert('Победили нолики');
if (allblock[54].innerHTML=='o' && allblock[63].innerHTML=='o' && allblock[72].innerHTML=='o' && allblock[81].innerHTML=='o' && allblock[90].innerHTML=='o') alert('Победили нолики');*/





	}

}