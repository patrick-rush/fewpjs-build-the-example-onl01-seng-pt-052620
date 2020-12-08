// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let hearts = document.querySelectorAll(".like-glyph")

hearts.forEach(heart => heart.addEventListener("click", e => {
  mimicServerCall()
  .then(() => {
    changeHeart(e.target)    
    })
    .catch((error) => {
      let modal = document.getElementById('modal')
      modal.classList.remove("hidden")
      document.getElementById('modal-message').innerText = error
      setTimeout(() => { addHiddenClass(modal) }, 5000)
    })
}))

function addHiddenClass(element) {
  element.className = "hidden"
}

function changeHeart(target) {
  if (target.classList.contains("activated-heart")) {
    target.classList.remove("activated-heart")
    target.innerText = EMPTY_HEART
  } else {
    target.className = "activated-heart"
    target.innerText = FULL_HEART
  }
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
