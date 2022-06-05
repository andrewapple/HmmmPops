const quotesDb = ["Take pain and make it something good. - Pete Holmes",
  "There's a reason the windshield is bigger than the rearview mirror. - anon",
  "Don't cheat on the future with the past. - anon",
  "With standup, I always went toward fear. - Bill Burr",
  "Don't overthink it, if something connects with you, record it. - Ryan Holiday",
  "Be undeniable. - Jim Gaffigan", 
  "Free time for an addict is horrible. - Harris Wittels",
  "If people knew how hard I worked to get my mastery, it wouldn't seem so wonderful after all. - Michelangelo",
  "'Someday' is a disease that will take your dreams to the grave with you. - Tim Ferris",
  "Amateurs sit and wait for inspiration, the rest of us just get up and go to work. - Stephen King",
  "There is only one way to avoid criticism: do nothing, say nothing, and be nothing. - Aristotle",
  "A comfort zone is a beautiful place, but nothing ever grows there. - anon",
  "A ship in harbor is safe, but that is not what ships are built for. - John Shedd",
  "A year from now, you'll wish you would have started today. - Karen Lamb",
  "Culture eats strategy for breakfast. - Peter Drucker",
  "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
  "A few people will change your life forever. Find them. - Nic Haralambous",
  "Find a group of people who challenge and inspire you; spend alot of time with them, and it will change your life. - Amy Poehler",
  "Who you chill with affects your level of chill. - John Gorman",
  "I have decided to stick with love, hate is too great a burden to bear. - Martin Luther King Jr.",
  "I'm not good at asking for help. - Andrew Apple",
  "Baseball isn't statistics, it's Joe DiMaggio rounding second base. - Jimmy Breslin",
  "Perfectionism is death. - Adam McKay (on writing)",
  "Follow your actual passion, and the work product will naturally be of a higher quality. -anon",
  "Today didn't have to be this way / Tomorrow is another day / Another chance to make things right / A chance to make sense of last night - MxPx",
  "The only thing that can save the world is the reclaiming of the awareness of the world. That's what poetry does. - Allen Ginsberg",
  "The first draft is always awful...all of the magic happens in the third and fourth drafts. - Amy E. Reichert"
]

let workingQuotes = Array.from(quotesDb); //fill array from quotesDb

let button = document.getElementById('quoteButton');
let quote = document.getElementById('quote');
let style = document.getElementById('styletest');

function quoteSelector(c) {
    let randomQuoteIndex = Math.floor(Math.random() * workingQuotes.length);
    let q = workingQuotes[randomQuoteIndex]; // get quote to display
    workingQuotes.splice(randomQuoteIndex, 1); // remove quote from array
    if (workingQuotes.length === 0) {
        workingQuotes = Array.from(quotesDb);
    }; // if workingQuotes is empty, refill array

    quote.style.color = c;

    return q; // return quote to display
}

let colorsDb = ["aquamarine", "chartreuse", "cornflowerblue", "deeppink", "fuchsia", "yellow"]

let workingColors = Array.from(colorsDb);

function colorSelector() {
  let rCI = Math.floor(Math.random() * workingColors.length);
  let c = workingColors[rCI];
  workingColors.splice(rCI, 1);
  if (workingColors.length === 0) {
    workingColors = Array.from(colorsDb);
  };
  
  return c;
}


function showQuote(){
  quote.innerHTML = quoteSelector(colorSelector());
  button.innerHTML = "MORE";
  button.style.cursor = "pointer";
}

button.addEventListener('click', showQuote);






/* CHANGES FONT COLOR OF THE QUOTE WHEN THE QUOTE CHANGES 
function newStyle() {
  let newColor = '';
  let x = Math.floor(Math.random()*10); 
  switch (x){
    case 0:
      newColor = "#F18D9E";
      break;
    case 1: 
      newColor = "#5BC8AC";
      break;
    case 2:
      newColor = "#459CFF";
      break; 
    case 3:
      newColor= "#C066FF";
      break
    case 4:
      newColor = "#01FFF4";
      break;
    case 5:
        newColor = "#FFF205";
      break;
    case 6: 
        newColor = "ff4595";
      break;
    case 7: 
      newColor = "#FFA238";
      break;
    case 8: 
      newColor = "#7a7ac4";
      break;
    case 9: 
      newColor = "#D2691E";
      break;
  }
  
  var elem = document.getElementById('quote');
  elem.style.color = newColor; 
} */