import { useState, useEffect } from 'react';
import './App.css'

const getRandomColor = () => {
  const digits = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  const color = new Array(6).fill('').map(() => digits[Math.floor((Math.random() * digits.length))]).join('');
  return `#${color}`;
}

function App() {
  const [color, setColor] = useState('');
  const [answers, setAnswers] = useState([]);
  const [wrongAnswer, setWrongAnswer] = useState(false);

  const pickColor = () => {
    const actualColor = getRandomColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, getRandomColor(), getRandomColor()].sort(() => 0.5 - Math.random()
      )
    );
  }
  useEffect(() => {
    pickColor();
  }, []);

  function handleAnswerClicked(answer) {
    if (answer === color) {
      setWrongAnswer(false)
      pickColor();
    } else {
      setWrongAnswer(true);
    }
  }

  return (
    <div className="App">
      <div>
        <h1>
          Whose that color-mon
        </h1>
      </div>
      <div>
        <div className="color-game" style={{background: color}}></div>
        {answers.map(answer => (
          <button onClick={() => handleAnswerClicked(answer)}key={answer}>{answer}</button>
        ))}
        {wrongAnswer && <div className='wrong'>Wrong Answer </div>}
      </div>
    </div>

  )
}

export default App;
