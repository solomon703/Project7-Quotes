const quote = document.getElementById("quot");
const author = document.getElementById("author");
const quotes =[
  'Think Big ! Do A Lot',
  'Live with commitment And With Achievement',
  'Never Quit or Loose Untill Enemy Down!',
  'Process is painfull but result is more powerfull!',
  'Real Beauty of a Man is , His MindSet',
];
author.innerHTML = "Boyella Solomon Raju";
function getquote(){
  var randomQuote = quotes[Math.floor(Math.random()* quotes.length)];
  quote.innerHTML = randomQuote;
}
function tweet(){
  window.open( href="https://twitter.com/intent/tweet?text=" + quote.innerHTML,
    + "----by "+ author.innerHTML +
    "Tweet Window", "width=600,height=300 left=100");
}