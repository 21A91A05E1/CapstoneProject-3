import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil,
        oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial 
        setting, using a wood-fired oven heated to a very high temperature—and served hot.
        Italy has many variations of pizza. The Neapolitan pizza, or Naples-style pizza, is made specifically with buffalo 
        mozzarella (produced from the milk of Italian Mediterranean buffalo) or fior di latte (mozzarella produced from the milk of 
        prized Agerolese cows) and with San Marzano tomatoes or pomodorino vesuviano (a variety of grape tomato grown in Naples). 
        Roman pizza often omits tomatoes (an early 16th-century import) and uses onions and olives. The Ligurian pizza resembles the 
        pissaladière of Provence in France, adding anchovies to olives and onions. Pizza has also spread from Italy throughout much of 
        the rest of the world, and, in regions outside of Italy, the toppings used vary with the ingredients available and the flavour 
        profile preferred.
        </p>
      </div>
    </div>
  );
}

export default About;
