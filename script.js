// Questions that will be asked
const Questions = [
    {
	q: "Who among the following has invented worldwide web?",
	a: [{ text: "Per Brinch Hansen", isCorrect: false },
	{ text: "Jean Bartik", isCorrect: false },
	{ text: "George Boole", isCorrect: false },
	{ text: "Tim Berners-Lee", isCorrect: true }
	]

},
{
	q: "What is capital of India?",
	a: [{ text: "Gandhinagar", isCorrect: false },
	{ text: "Surat", isCorrect: false },
	{ text: "Delhi", isCorrect: true },
	{ text: "Mumbai", isCorrect: false }
	]

},
{
	q: "Which one of the following command language is used by UNIX operating system?",
	a: [{ text: "DCL", isCorrect: false },
	{ text: "SHELL", isCorrect: true },
	{ text: "MS DOS", isCorrect: false },
	{ text: "C Sharp", isCorrect: false }
	]

},
{
	q: "What is the capital of Thailand?",
	a: [{ text: "Lampang", isCorrect: false, isSelected: false },
	{ text: "Phuket", isCorrect: false },
	{ text: "Ayutthaya", isCorrect: false },
	{ text: "Bangkok", isCorrect: true }
	]

},
{
	q: "Nibble is the series of ……………… bits.",
	a: [{ text: "2 Bits", isCorrect: false },
	{ text: "16 Bits", isCorrect: false },
	{ text: "4 Bits", isCorrect: true },
	{ text: "8 Bits", isCorrect: false }
	]

},
{
	q: "Which one of the following states, first created telephone directory on internet?",
	a: [{ text: "Kerala", isCorrect: true },
	{ text: "Sikkim", isCorrect: false },
	{ text: "Karnataka", isCorrect: false },
	{ text: "Mumbai", isCorrect: false }
	]

},
{
	q: "What is the capital of Gujarat",
	a: [{ text: "Surat", isCorrect: false },
	{ text: "Vadodara", isCorrect: false },
	{ text: "Gandhinagar", isCorrect: true },
	{ text: "Rajkot", isCorrect: false }
	]

},
{
	q: " Which of the following operating systems is produced by IBM?",
	a: [{ text: "UNIX", isCorrect: false },
	{ text: "OS-2", isCorrect: true },
	{ text: "DOS", isCorrect: false },
	{ text: "Windows", isCorrect: false }
	]

}]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
