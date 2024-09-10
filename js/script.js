



// function CalCulotion (){
//     // console.log("akhaneAso");

//     let x = 500
//     let y = 300
//     let z = x+y
//     let result = z
//     console.log(result);


// }

// CalCulotion()

// let teams = ["Waterlily", "Bela", "Bakul", "Lotus", "Palash", "Rose", "Sunflower", "Marigold"]

// console.log(teams.length);

// for (let i = 0; i < teams.length; i++) {

//   console.log(teams[i]);   
// }

// teams.map((item)=>{
//     console.log(item);

// })

// let utterance = new SpeechSynthesisUtterance("Hello world!");
// speechSynthesis.speak(utterance);



// greatting part ___-----------_____


// let groupName = ["Waterlily", "Bela", "Bakul", "Lotus", "Palash", "Rose", "Sunflower", "Marigold"]


// function greattings(groups) {
//     let utterance = new SpeechSynthesisUtterance('Nice $ ');
//     speechSynthesis.speak(utterance);
// }

// for (let i = 0; i < groupName.length; i++) {
//     // greattings = groupName[i];

// }


//  ---------------Question Part ------------------
// -------------------------------------------------

let question = "How Are You?"







function questionAnswer() {
    if (question == "How Are You?") {
        let utterance = new SpeechSynthesisUtterance('Iam Fine');
        speechSynthesis.speak(utterance);
    }

    else if (question == "Where Are You Live?") {
        let utterance = new SpeechSynthesisUtterance('I Live In Dhaka');
        speechSynthesis.speak(utterance);
    }

}
questionAnswer()