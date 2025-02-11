const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = parseInt((weight / ((height * height) / 10000)).toFixed(2));

    let bmiCategory = ''; 
    switch (true) {
      case (bmi < 18.6):
        bmiCategory = 'Underweight';
        break;
      case (bmi >= 18.6 &&    bmi <= 24.9):
        bmiCategory = 'Normal Range';
        break;
      case (bmi > 24.9):
        bmiCategory = 'Overweight';
        break;
      default:
        bmiCategory = 'Invalid BMI';
        break;
    }

    results.innerHTML = `<span>BMI: ${bmi} - Category: ${bmiCategory}</span>`;
  }
});