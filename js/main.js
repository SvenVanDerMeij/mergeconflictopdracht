const oldgreeting = require("./oldgreeting.js");
console.log("merge oefening leuk!")

oldgreeting.greet()


function basicHaiku()
{
    return ["Ik rom dep ik sief","Wat ren het geen van ge les","Ik wil zo niet leen"]
}
//zet hier je haiku functie neer, zie https://github.com/progsen/haikugitopdracht voor ideeen

haikus = [
    basicHaiku()
]

function randomHaiku()
{

    let i = Math.floor(Math.random(haikus.length));
    return haikus[i];
}

function start()
{
    console.log("starting main")
    
    console.log(randomHaiku())

}

start()