const words = [
    "A lion was sleeping in his lair, when a mouse, not looking where he was going, ran over the mighty beast's nose and awakened him.The lion clapped his paw on the frightened little creature, and was about to make an end",
    "Along with typing score in terms of speed and accuracy a complete analysis of your typing skill will be displayed on screen like - How many words and character you have typed, details of various typed of errors you have made during test",
    "How many words and character you have typed, details of various typed of errors you have made during test. So you can analyze what are the characters and words you have typed wrong during test, you can do targeted practice for erroneous characters.",
    "The two factors will define the proficiency of the person in typing. Some typing test used character based calculation in which 5 characters count as a word, regardless how many characters in the particular word.",
    "Regardless how many characters in the particular word. These Character based calculation has its own benefit like it independent from the text passage, there may be more lengthy word in one passage then other, but its calculate same speed all time.",
    "Some typing test used another calculation speed formula; it counts each bunch of characters separated by space one word. This is known as word count method for typing test. To understand it let take an example",
    "What is a Typing Test A typing test is the measurement of typing skills in terms of speed (Word Per Minute) and accuracy on computer keyboard. Typing test score also measure in Keystroke or Key depression per minutes (KPM)."
];

const msg = document.getElementById('msg');
const typeWord = document.getElementById('mywords');
const btn = document.getElementById('btn');

let startTime, endTime;

const playGame = () => {
    let randomNumber = Math.floor(Math.random()*words.length);
    console.log(randomNumber);
    msg.innerText = words[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = 'Done';
}

const endGame = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-startTime)/1000);
    console.log(totalTime);

    let totalStr = typeWord.value;
    
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount/totalTime)*60);

    let finalMsg = "Your typing speed is " + speed + " words per minutes.";

    finalMsg += compareWords(msg.innerText, totalStr);

    msg.innerText = finalMsg;
}

const compareWords = (str1, str2) => {
    let words1 = str1.split(' ');
    let words2 = str2.split(' ');

    let cnt = 0;

    words1.forEach(function(item, index){
        if(item == words2[index]){
            cnt++;
        }
    });

    let errorWords = (words1.length-cnt);

    return (cnt + " correct out of " + words1.length +
    " words and the total number of error are "+
    errorWords +".");
}

const wordCounter = (words) => {
    let cnt = words.split(' ').length;
    return cnt;
}

btn.addEventListener('click',function() {
    if(this.innerText == 'Start'||this.innerText == 'Start Again'){
        typeWord.disabled = false;
        playGame();
    }
    else if(this.innerText == 'Done'){
        typeWord.disabled = false;
        btn.innerText = 'Start Again';
        endGame();
    } 
})