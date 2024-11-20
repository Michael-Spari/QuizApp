function answer(selection) {
    let question = questions[currentQuestion]; // Variable question ist gleich dem aktuellen Index des Arrays questions
    console.log('Selected answer is: ', selection); // Ausgabe der ausgewählten Antwort
    let selectedQuestionNumber = selection.slice(-1); // Variable selectedQuestionNumber ist gleich dem letzten Zeichen der ausgewählten Antwort
    console.log('selectedQuestionNumber is: ', selectedQuestionNumber); // Ausgabe der ausgewählten Antwort
    console.log('Current question is: ', question['right_answer']); // Ausgabe der richtigen Antwort

    if(selectedQuestionNumber == question['right_answer']) { // Wenn die ausgewählte Antwort gleich der richtigen Antwort ist
        console.log('Richtige Antwort'); // Ausgabe 'Richtige Antwort'
    }else { // Wenn die ausgewählte Antwort nicht gleich der richtigen Antwort ist
        console.log('Falsche Antwort'); // Ausgabe 'Falsche Antwort'
    }
    
}