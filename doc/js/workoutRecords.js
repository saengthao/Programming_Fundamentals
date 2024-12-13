/*Final Project
Personalized Fitness Plan
Wrote by Rashen Thao
Date:12/11/2024

This program generates a personalized fitness plan based on the user's fitness goal and level.
It prompts the user for their fitness goal and their fitness level.
The program then recommends a workout and alternates between workout days and rest days.
After that, the generated plan is displayed in the browser.
*/

// The function to collect input from the user
// Input section
function collectInput() {
  const fitnessGoal = prompt("Enter your fitness goal (lose weight, gain muscle, or improve endurance):").toLowerCase();
  const fitnessLevel = prompt("Enter your fitness level (beginner, intermediate, advanced):").toLowerCase();
  
// Collected inputs
  return { fitnessGoal, fitnessLevel };
}

// Processing section base on the collected input
function recommendWorkout(goal, level) {
  if (goal === "lose weight") {
    if (level === "beginner") {
      return "30 minutes of brisk walking and light exercises.";
    } else if (level === "intermediate") {
      return "1 hour of jogging and moderate exercises.";
    } else if (level === "advanced") {
      return "2 hours of jogging and high-intensity interval training (HIIT).";
    }
  } else if (goal === "gain muscle") {
    if (level === "beginner") {
      return "Push-ups, squats, and planks for 30 minutes.";
    } else if (level === "intermediate") {
      return "Push-ups, squats, planks, and lunges for an hour.";
    } else if (level === "advanced") {
      return "Weightlifting like deadlifts, bench presses, and dumbbell curls for an hour.";
    }
  } else if (goal === "improve endurance") {
    if (level === "beginner") {
      return "1 hour of brisk walking, jogging, swimming, or biking.";
    } else if (level === "intermediate") {
      return "2 hours of brisk walking, jogging, swimming, or biking with short exercises like planks and wall-sits.";
    } else if (level === "advanced") {
      return "2 hours of brisk walking, jogging, swimming, or biking with high-intensity interval training (HIIT).";
    }
  }
// Output Error Message
  return "Write the correct input.";
}

// Function to generate the fitness plan
function generatePlan(days, workout) {
	
// Variable Declarations Section
  let plan = [];
  
// Processing Section
  for (let i = 1; i <= days; i++) {
    if (i % 2 === 0) {
      plan.push(`Day ${i}: Rest Day`);
    } else {
      plan.push(`Day ${i}: ${workout}`);
    }
  }
  
// Output Section
  return plan;
}

// Main function
function main() {
// Input Section
  document.write("<h3>Personalized Fitness Tracker</h3>");
  const { fitnessGoal, fitnessLevel } = collectInput();

// Processing Section
  const workout = recommendWorkout(fitnessGoal, fitnessLevel);
  if (workout.includes("Write the correct input.")) {
    document.write(`<p>${workout}</p>`);
    return;
  }

  const days = parseInt(prompt("How many days would you like to generate a fitness plan for?"), 10);
  const plan = generatePlan(days, workout);
  
// Output Section
  let output = ` Fitness Goal: ${fitnessGoal}<br>Fitness Level: ${fitnessLevel}<br> Workout Recommendation: ${workout}<br><br>Your Fitness Plan:<br>`;

  for (let i = 0; i < plan.length; i++) {
    output += `${plan[i]}<br>`;
  }

  document.write(output);
}

main();

/*
I wanted to add another prompt for the amount of time the person wants to put into their workout, 
but I just couldn't get it to work. So I removed it.
*/
