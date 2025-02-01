import React from "react";
import "./App.css";
import detectiveJohn from './imgs/detective-John.png';

<img src="/imgs/detective-John.png" alt="Detective John" />

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="content">
          <h1>Welcome to the Basic React Page</h1>

          <h3>  Title: The Shattered Clue</h3>
          <br></br> 
          <span>
          <img src={detectiveJohn} alt="Detective John" />
          </span>
          <span>
          <p>    

In the heart of Manhattan, where the city's heartbeat never ceases,<br></br> 
Detective John found himself at the scene of a peculiar break-in. The store,<br></br>
known as “The Breaking Point,” was a quaint little shop nestled between towering skyscrapers.<br></br>
It specialized in rare artifacts and unique curiosities, drawing in collectors and enthusiasts<br></br>
from all corners of the city.<br></br>

As John stepped into the store, the faint smell of antiques and mystery filled the air.<br></br> 
Shelves were upturned, glass cases shattered, and items strewn across the floor. Yet, amidst the chaos,<br></br>
something caught his keen eye—a piece of paper, partially hidden under a display case.<br></br>
He carefully unfolded it, revealing a cryptic message:<br></br>

"Meet me at the place where dreams shatter. Midnight. Bring the key."<br></br>

John’s mind raced as he deciphered the note. “The place where dreams shatter”<br></br>
—it had to be the old abandoned theater on Elm Street. It was once a grand venue,<br></br> 
now a shadow of its former glory, with its broken dreams lingering in the dusty seats and faded curtains.<br></br>

Determined to get to the bottom of this mystery, John tucked the note into his coat pocket.<br></br> 
He scanned the store for more clues. A glint from the shattered glass caught his attention. Bending down,<br></br> 
he picked up a small, ornate key, intricately designed with a lion’s head on the handle. This had to be the<br></br>
key mentioned in the note.        
           
          </p>

          </span>
      
        </div>

        <div className="content">
                <span>
        
          </span>
          <span>
          <p>    

In the heart of Manhattan, where the city's heartbeat never ceases,<br></br> <img src={detectiveJohn} alt="Detective John" id="photo2" />
Detective John found himself at the scene of a peculiar break-in. The store,<br></br>
known as “The Breaking Point,” was a quaint little shop nestled between towering skyscrapers.<br></br>
It specialized in rare artifacts and unique curiosities, drawing in collectors and enthusiasts<br></br>
from all corners of the city.<br></br>

As John stepped into the store, the faint smell of antiques and mystery filled the air.<br></br> 
Shelves were upturned, glass cases shattered, and items strewn across the floor. Yet, amidst the chaos,<br></br>
something caught his keen eye—a piece of paper, partially hidden under a display case.<br></br>
He carefully unfolded it, revealing a cryptic message:<br></br>

"Meet me at the place where dreams shatter. Midnight. Bring the key."<br></br>

John’s mind raced as he deciphered the note. “The place where dreams shatter”<br></br>
—it had to be the old abandoned theater on Elm Street. It was once a grand venue,<br></br> 
now a shadow of its former glory, with its broken dreams lingering in the dusty seats and faded curtains.<br></br>

Determined to get to the bottom of this mystery, John tucked the note into his coat pocket.<br></br> 
He scanned the store for more clues. A glint from the shattered glass caught his attention. Bending down,<br></br> 
he picked up a small, ornate key, intricately designed with a lion’s head on the handle. This had to be the<br></br>
key mentioned in the note.        

          </p>

          </span>
      
        </div>
      </header>
    </div>
  );
}

export default App;
