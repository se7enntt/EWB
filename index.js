console.log("Test")

document.getElementById("btn_submit").addEventListener('click',test);

function test() {
    questionNumber =1;
    const quizContainers = document.querySelectorAll('.quiz');
    const answerContainers = document.querySelectorAll('.rating');
    const inputNo = answerContainers[0].querySelectorAll('input');
    console.log("Rating: ", answerContainers[0],inputNo[1].checked);
}

function Test123(myradio) {
    console.log("abc",myradio.value);
}