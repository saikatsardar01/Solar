let currentIndex = 0;
let spaceFacts = [];

// Fetch the JSON file and store the data
fetch('facts.json')
  .then(response => response.json())
  .then(data => {
    spaceFacts = data;
    displayFact(currentIndex); // Display the first fact
  })
  .catch(error => console.error('Error fetching space facts:', error));

// Function to display a fact based on the current index
function displayFact(index) {
  const fact = document.getElementById('fact');
  const details = document.getElementById('details');
  fact.textContent = spaceFacts[index].fact;
  details.textContent = spaceFacts[index].details;
}

// Event listeners for the NEXT and PREVIOUS buttons
document.getElementById('next').addEventListener('click', () => {
  if (currentIndex < spaceFacts.length - 1) {
    currentIndex++;
    displayFact(currentIndex);
  }
});

document.getElementById('prev').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    displayFact(currentIndex);
  }
});
