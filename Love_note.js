document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Correct answers
    const correctAnswers = {
        question1: 'Yes, I do Rey', // Replace with the actual answer
        question2: 'Of course not, my love', // Replace with the actual answer
        question3: 'Yes I do babe' // Replace with the actual answer
    };

    // Get user input
    const userAnswers = {
        question1: document.getElementById('question1').value.trim().toLowerCase(),
        question2: document.getElementById('question2').value.trim().toLowerCase(),
        question3: document.getElementById('question3').value.trim().toLowerCase()
    };

    // Check if answers are correct
    if (userAnswers.question1 === correctAnswers.question1.toLowerCase() &&
        userAnswers.question2 === correctAnswers.question2.toLowerCase() &&
        userAnswers.question3 === correctAnswers.question3.toLowerCase()) {

        // Display the love note
        const loveNote = `
        "l Love You So Much
        I love you so much that I want to be a part of every single
        moment of your life. I want to be there with you to share
        everything that you do every day. I want to be by your side
        when you wake up every morning. I want to kiss your
        forehead every morning when you open your eyes. I want
        to share my coffee with you. I want long and random
        conversations with you all through the day. I want to watch
        you feeling lazy in bed. I want to go on long drives with
        you. I want to dance in the rain with you. I want to sit with
        you under the night sky and watch the stars. I want to sit
        with you and watch sunsets on the beach. I want to cuddle
        with you, snuggle with you and sleep like a baby in your
        arms. I want to be your best friend, I want to be your lover,
        I want to grow old with you. I want to be proud to be called
        yours. I want Happiness and I love you Itsy❤️😘🥹.....!!
        `;

        document.getElementById('noteContent').innerText = loveNote;
        document.getElementById('loveNote').classList.remove('hidden');
    } else {
        alert('Oops, some answers are incorrect. Please try again!');
    }
});
