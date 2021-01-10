//CONNECTION VERIFICATION
console.log("CONNECTED!");

let numSquares = 6;
let colors = getArray(numSquares);

let colorSquare = document.getElementsByClassName("square");
let selectedColor = randomColor();
let title = document.querySelector("#titleColor");

let p = document.querySelector("p");
let header = document.querySelector("#header");
let reset = document.querySelector("#reset");

let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function()
{
    numSquares = 3;
    hardBtn.classList.remove("selected");
    this.classList.add("selected")
    colors = getArray(3);
    selectedColor = randomColor();
    title.textContent = selectedColor;
    for(let i = 0 ; i < colorSquare.length ; i++)
    {
        if(colors[i])
        {
            colorSquare[i].style.backgroundColor = colors[i];
        }
        else
        {
            colorSquare[i].style.display = "none";
        }
        
    }
});

hardBtn.addEventListener("click",function()
{
    header.style.backgroundColor = "#232323";
    numSquares = 6;
    easyBtn.classList.remove("selected");
    this.classList.add("selected");
    colors = getArray(numSquares);
    selectedColor = randomColor();
    title.textContent = selectedColor;
    for(let i = 0 ; i < colorSquare.length ; i++)
    {
        colorSquare[i].style.backgroundColor = colors[i];
        colorSquare[i].style.display = "block";
    }
});


reset.addEventListener("click",function()
{
    colors = getArray(numSquares);
    selectedColor = randomColor();
    title.textContent = selectedColor;
    for (let i = 0 ; i < colorSquare.length; i++)
{   
    colorSquare[i].style.backgroundColor = colors[i];
}
    header.style.backgroundColor = "#232323";
    this.textContent = "NEW COLORS";
    p.textContent = "";

});



for (let i = 0 ; i < colorSquare.length; i++)
{
    colorSquare[i].style.backgroundColor = colors[i];
}

for (let i = 0 ; i < colorSquare.length; i++)
{
    title.textContent = selectedColor;
    colorSquare[i].addEventListener("click",function()
    {
        let clickedColor = this.style.backgroundColor;
        if( clickedColor === selectedColor)
        {
            p.classList.remove("colorChangeRed");
            p.classList.add("colorChangeGreen");
            p.textContent = "Right!";
            header.style.backgroundColor = clickedColor;
            reset.textContent = "Play again?";
            for(let i = 0 ; i < colorSquare.length ; i++)   
            {
                colorSquare[i].style.backgroundColor = clickedColor;
                
            }

        }
        else
        {
            p.classList.remove("colorChangeGreen");
            p.classList.add("colorChangeRed");
            p.textContent = "Try again!";
            this.style.backgroundColor = "#232323";
        }
    });
}

function randomColor()
{
    let number = Math.floor((Math.random() * colors.length));
    return colors[number];
}

function getArray(elements)
{
    let myArray = [];
    for (let i = 0 ; i < elements; i++)
    {
        
        myArray.push(getColors());
        
    }
    
    return myArray;

}

function getColors()
{
    let red = Math.floor((Math.random() * 255) + 1);
    let green = Math.floor((Math.random() * 255) + 1);
    let blue = Math.floor((Math.random() * 255) + 1);
    let color = `rgb(${red}, ${green}, ${blue})`; 
    return color;

}

