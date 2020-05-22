let userScore = 0
let compScore = 0
const compScoreText = document.getElementById('compScore')
const userScoreText = document.getElementById('userScore')
const rockButton = document.getElementById('r')
const paperButton = document.getElementById('p')
const sciButton = document.getElementById('s')
const resultDiv = document.getElementById('result')
const imageDiv = document.getElementById('objects')
const userResultDiv = document.getElementById('userResult')
const compResultDiv = document.getElementById('compResult')
const rockSrc = "./rock.png"
const paperSrc = "./paper.png"
const sciSrc = "./sci.png"
const resultText = document.getElementById('resultText')
const possibleValues = new Array('r','p','s')

function playAgain(){
  imageDiv.style.display = 'grid'
  userResultDiv.innerHTML = ''
  compResultDiv.innerHTML = ''
  resultDiv.style.display = 'none'
}

function resetScore(){
    compScore = 0
    userScore = 0
    userScoreText.innerHTML = 0
    compScoreText.innerHTML = 0
    imageDiv.style.display = 'grid'
    userResultDiv.innerHTML = ''
    compResultDiv.innerHTML = ''
    resultDiv.style.display = 'none'
}

function randomValue(){
  var num = Math.floor(Math.random()*3)
  return possibleValues[num]
}

function gamePlay(userChoice){
  const compValue = randomValue()
  imageDiv.style.display = 'none'
  var uImg = document.createElement("IMG")
  var cImg = document.createElement("IMG")

  //User Rock
  if(userChoice=='r'){
    uImg.src = "./rock.png"
    userResultDiv.appendChild(uImg)
    if(compValue=='r'){
      cImg.src = "./rock.png"
      compResultDiv.appendChild(cImg)
      resultText.innerHTML = 'TIE!!!'
    }
    else if (compValue=='s') {
      cImg.src = "./sci.png"
      compResultDiv.appendChild(cImg)
      resultText.innerHTML = 'YOU WIN!!!!'
      userScore +=1
      userScoreText.textContent = userScore
    }
    else{
      cImg.src = "./paper.png"
      compResultDiv.appendChild(cImg)
      resultText.innerHTML = 'COMP WINS!!'
      compScore +=1
      compScoreText.textContent = compScore
    }
  }

  // User Paper
  else if (userChoice=='p') {
    uImg.src = "./paper.png"
    userResultDiv.appendChild(uImg)
    if(compValue=='r'){
      cImg.src = "./rock.png"
      compResultDiv.appendChild(cImg)
      resultText.innerHTML = 'YOU WIN!!!!'
      userScore +=1
      userScoreText.textContent = userScore
    }
    else if (compValue=='s') {
      cImg.src = "./sci.png"
      compResultDiv.appendChild(cImg)
      resultText.innerHTML = 'COMP WINS!!'
      compScore +=1
      compScoreText.textContent = compScore
    }
    else{
      cImg.src = "./paper.png"
      compResultDiv.appendChild(cImg)
      resultText.innerHTML = 'TIE!!!'
    }

  }

  // User Scissors
  else{
    uImg.src = "./sci.png"
    userResultDiv.appendChild(uImg)
    if(compValue=='r'){
      cImg.src = "./rock.png"
      compResultDiv.appendChild(cImg)
      resultText.innerHTML = 'COMP WINS!!'
      compScore +=1
      compScoreText.textContent = compScore
    }
    else if (compValue=='s') {
      cImg.src = "./sci.png"
      compResultDiv.appendChild(cImg)
      resultText.innerHTML = 'TIE!!!'
    }
    else{
      cImg.src = "./paper.png"
      compResultDiv.appendChild(cImg)
      resultText.innerHTML = 'YOU WIN!!!!'
      userScore +=1
      userScoreText.textContent = userScore
    }

  }



  resultDiv.style.display = 'block'
}

function main(){
  rockButton.addEventListener('click',function(){
    gamePlay('r')
  })

  paperButton.addEventListener('click',function(){
    gamePlay('p')
  })

  sciButton.addEventListener('click',function(){
    gamePlay('s')
  })
}

main()
