console.log("stan svt")

const slides = document.getElementsByClassName("hiddenSlide");
let index = 0


function buttonClick() 
{
    console.log("The button has been clicked")
    document.getElementById("buttonId").innerHTML = "Changed button"
}

function changeSlide(number){
    console.log("changing slides by:" + String(number))

    slides[index].setAttribute("id", "")

    console.log(number)
    index += number
    if (index < 0){
        index = slides.length -1
    }
    if (index > slides.length -1){
        index = 0
    }
    console.log(index)

    slides[index].setAttribute("id", "activeSlide")
}

// change slides every 4 seconds (1000 = 1 sec)
function startSlide(){
    console.log("automatically changing slides")
    changeSlide(1)
    setTimeout(startSlide, 4000);
}

// wait for everything to load before starting the other stuff i think
window.onload = () => {
    console.log("start of on load!")
    setTimeout(startSlide, 4000);
}


function submitQuestion() {
    console.log("Question button has been pressed.")
    const question = document.getElementById("questionInput").value
    console.log(question)
    localStorage.setItem("sentQuestion", question)
}

function loadQuestion() {
    const question = localStorage.getItem("sentQuestion")
    console.log(question)
    document.getElementById(questionDisplay).innerHTML = "Question:" + question
}


function generateJoke(){
    const request = new Request('https://official-joke-api.appspot.com/random_joke',
    {
        method: 'GET'
    })
    fetch(request).then(response => {
        if (response.status == 200){
            return response.json();
        }
    }).then(response => {
        console.log(response)
        document.getElementById('jokeDisplay').innerHTML = response.setup
        document.getElementById('jokeAnswer').innerHTML = response.punchline
    })
}