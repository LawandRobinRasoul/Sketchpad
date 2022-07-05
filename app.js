const container = document.querySelector(".container");
const setBtn = document.querySelector(".set-btn");
let bool = false;
addGrids();

setBtn.addEventListener("click", function () {
	addGrids(true);
});

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
	} else {
		container.replaceChildren();
		fillContainer(grids);
	}
}

function fillContainer(grids) {
	for (let i = 0; i < grids; i++) {
		const newGrid = document.createElement("div");
		container.appendChild(newGrid);
		newGrid.classList.add("grid");
		newGrid.addEventListener("mouseover", function (e) {
			mouseOver(e);
		});
	}
}

function mouseOver(e) {
	e.target.classList.add("colored");
}
