const trasnformWhidt = 760;
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slider = document.querySelector(".slider");
const dots = document.querySelector(".dots");

let newDot;
let move = 0;
let arrIndex = 0;

//=========Picture to show.Add as many as You like=====//
let picArr = [
	"/img/car.png",
	"https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_960_720.jpg",
	"/img/parrots.png",
	"https://cdn.pixabay.com/photo/2023/02/06/01/14/superb-fairywren-7770904_960_720.jpg",
	"/img/cat.png",
];

//======Create bottom dots ====//
const createDot = () => {
	newDot = document.createElement("i");
	newDot.classList.add("fa-solid", "fa-circle");
	return newDot;
};
//======Activ dot set ========//
const darkDot = () => {
	dotList = document.querySelectorAll(".fa-circle");
	for (let i of dotList) {
		i.classList.remove("activ");
	}
	dotList[arrIndex].classList.add("activ");
};

//==== create slider====//

const createSlider = () => {
	createPic(picArr[arrIndex]);
	slider.appendChild(newPic);
	arrowLeft.addEventListener("click", slideLeft);
	arrowRight.addEventListener("click", slideRight);
	for (let i = 0; i < picArr.length; i++) {
		createDot();
		dots.append(newDot);
	}
	darkDot();
};

//=====Div creating whit "el" as picture filename===///
function createPic(el) {
	newPic = document.createElement("div");
	newPic.classList.add("pic");
	newPic.style.backgroundImage = `url(${el})`;
	return newPic;
}

//======Div add form right====//

const slideRight = () => {
	if (arrIndex + 1 !== picArr.length) {
		arrIndex = arrIndex + 1;
		createPic(picArr[arrIndex]);
		slider.appendChild(newPic);
		slider.classList.add("smooth");
		slider.style.transform = `translateX(-760px)`;
		setTimeout(() => {
			removePic(0);
		}, "400");
	} else {
		arrIndex = -1;
		slideRight();
	}
	darkDot();
};

//======Div add form left====//
const slideLeft = () => {
	slider.classList.remove("smooth");
	if (arrIndex !== 0) {
		arrIndex = arrIndex - 1;
		createPic(picArr[arrIndex]);
		slider.firstElementChild.before(newPic);
		slider.style.transform = `translateX(-760px)`;

		setTimeout(() => {
			slider.classList.add("smooth");
			slider.style.transform = `translateX(0px)`;
		}, "1");

		setTimeout(() => {
			removePic(1);
		}, "400");
	} else {
		arrIndex = picArr.length;
		slideLeft();
	}
	darkDot();
};
//===== Function that removes the div after slide ======//
const removePic = (i) => {
	slider.classList.remove("smooth");
	slider.removeChild(slider.children[i]);
	slider.style.transform = `translateX(0px)`;
	setTimeout(() => slider.classList.add("smooth"), "100");
};

addEventListener("load", createSlider());