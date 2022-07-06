const container = document.querySelector(".container");
const setBtn = document.querySelector(".set-btn");
const clearBtn = document.querySelector(".clear-btn");
let bool = false;
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
addGrids();

setBtn.addEventListener("click", function () {
	addGrids(true);
});

clearBtn.addEventListener("click", clearGrids);

function clearGrids() {
	const grids = document.getElementsByClassName("grid");

	for (const grid of grids) {
		grid.classList.remove("colored");
	}
}

function addGrids(bool) {
	let grids = 256;
	let inputValue = document.querySelector(".grid-value").value;
	if (bool == true && inputValue < 101) {
		grids = inputValue * inputValue;
		container.replaceChildren();
		container.style.setProperty(
			"grid-template-columns",
			"repeat(" + inputValue + ", 1fr)"
		);

		fillContainer(grids);

		document.querySelector(".grid-value").value = "";
	} else {
		container.replaceChildren();
		fillContainer(grids);
	}
}

function fillContainer(grids) {
	for (let i = 0; i < grids; i++) {
		const newGrid = document.createElement("div");
		newGrid.classList.add("grid");
		newGrid.addEventListener("mouseover", mouseOver);
		newGrid.addEventListener("mousedown", mouseOver);
		container.appendChild(newGrid);
	}
}

function mouseOver(e) {
	if (e.type === "mouseover" && !mouseDown) return;
	else {
		e.target.classList.add("colored");
	}
}
