function calculateBMI() {
  let h = parseFloat(document.getElementById("height").value);
  let w = parseFloat(document.getElementById("weight").value);
  let result = document.getElementById("bmi-result");
  let cat = document.getElementById("bmi-category");
  let diet = document.getElementById("diet-suggestion");

  if (!h || !w || h <= 0 || w <= 0) {
    result.textContent = "Please enter valid height and weight!";
    cat.textContent = "";
    diet.innerHTML = "";
    return;
  }

  let bmi = w / ((h / 100) ** 2);
  let rounded = bmi.toFixed(1);
  result.textContent = "Your BMI is " + rounded;

  if (bmi < 18.5) {
    cat.textContent = "Underweight";
    cat.style.color = "blue";
    diet.innerHTML = `
      <h3>Diet Tips:</h3>
      <ul>
        <li>Eat calorie-rich foods: nuts, dairy, bananas, potatoes</li>
        <li>Have 5–6 small meals daily</li>
        <li>Include protein in every meal (eggs, paneer, legumes)</li>
        <li>Use healthy oils like olive oil or ghee</li>
      </ul>
    `;
  } else if (bmi < 25) {
    cat.textContent = "Normal weight";
    cat.style.color = "green";
    diet.innerHTML = `
      <h3>Diet Tips:</h3>
      <ul>
        <li>Continue a balanced diet: fruits, veggies, whole grains</li>
        <li>Stay active — walk or exercise regularly</li>
        <li>Drink enough water and sleep well</li>
      </ul>
    `;
  } else if (bmi < 30) {
    cat.textContent = "Overweight";
    cat.style.color = "orange";
    diet.innerHTML = `
      <h3>Diet Tips:</h3>
      <ul>
        <li>Eat high-fiber foods like fruits and vegetables</li>
        <li>Avoid fried food, sweets, and sugary drinks</li>
        <li>Watch your portion size</li>
        <li>Start light workouts or walks regularly</li>
      </ul>
    `;
  } else {
    cat.textContent = "Obese";
    cat.style.color = "red";
    diet.innerHTML = `
      <h3>Diet Tips:</h3>
      <ul>
        <li>Eliminate junk food and fast food</li>
        <li>Eat low-calorie meals like oats, dal, and steamed veggies</li>
        <li>Drink water before meals to reduce appetite</li>
        <li>Consult a doctor for a proper plan</li>
      </ul>
    `;
  }
}

function resetForm() {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("bmi-result").textContent = "";
  document.getElementById("bmi-category").textContent = "";
  document.getElementById("diet-suggestion").innerHTML = "";
}
