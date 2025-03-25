type colorful = {
    color: string;
}

type circle = {
    radius: number;
}

type border = {
    borderColor: string;
}

type newObj = colorful & circle & border;


var colorfulCircleWithBorder: newObj = {
    color: "pink",
    radius: 20,
    borderColor: "black"
};

console.log(colorfulCircleWithBorder);