
const correctAnswers = {
  q1: "One Piece",
  q2: "Naruto Uzumaki",
  q3: "15",
  q4: "Devenir le meilleur chasseur du monde",
  q5: "One For All",
  q6: "Devenir le roi des pirates",
  q7: "Ken Kaneki",
  q8: "Perfect Ultra Instinct",
  q9: "Fullmetal Alchemist",
  q10: "Death Note",
  // Ajoute les bonnes réponses ici jusqu'à q10
};

document.getElementById('check-answers').addEventListener('click', () => {
  let score = 0;
  let totalQuestions = Object.keys(correctAnswers).length;
  let resultDiv = document.getElementById('result');
  resultDiv.innerHTML = "";
  let errors = [];

  Object.keys(correctAnswers).forEach((question, index) => {
    let userAnswer = document.querySelector(`input[name="${question}"]:checked`);
    if (userAnswer) {
      if (userAnswer.value === correctAnswers[question]) {
        score++;
      } else {
        errors.push(`Question ${index + 1}: Mauvaise réponse (Votre réponse: ${userAnswer.value}, Correcte: ${correctAnswers[question]})`);
      }
    } else {
      errors.push(`Question ${index + 1}: Pas de réponse sélectionnée`);
    }
  });

  resultDiv.style.display = 'block';
  resultDiv.innerHTML = `<p>Vous avez obtenu ${score} / ${totalQuestions}.</p>`;
  if (errors.length > 0) {
    resultDiv.innerHTML += "<p class='error'>Voici vos erreurs :</p><ul>" + errors.map(err => `<li>${err}</li>`).join('') + "</ul>";
  }

  document.getElementById('view-correction').style.display = 'inline-block';
});

document.getElementById('view-correction').addEventListener('click', () => {
  window.location.href = 'correction.html'; // Crée une page "correction.html" avec la correction complète
});
