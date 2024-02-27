import { FormEvent, KeyboardEvent, useState } from 'react';
import { Header } from '../components/Hedaer';
import { Separator } from '../components/Separator';
import { Tweet } from '../components/Tweet';
import './Status.css';
import { PaperPlaneRight } from 'phosphor-react';

export function Status(){

  const [newAnswer, setNewAnswer] = useState('');
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido',
    'Parabéns pelo progresso'
  ])
  
  function createNewAnswers(event: FormEvent){
    event.preventDefault();

    setAnswers([newAnswer, ...answers]);
    setNewAnswer('');
  }

  function handleHotkeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setAnswers([newAnswer, ...answers]);
      setNewAnswer('');
    }
  }
  
  return(
    <main className="status">
          <Header title="Tweet" />

          <Tweet content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque ab a minima deleniti dolorum nostrum accusamus cupiditate ex sunt, ullam omnis sapiente maxime ratione aliquid quis! Iusto vero aut fuga?" />
          
          <Separator />
          
          <form onSubmit={createNewAnswers} className="answer-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/duhnunes.png" alt="Duh Nunes" />
              <textarea
                id="tweet"
                placeholder="Tweet your answer"
                value={newAnswer}
                onKeyDown={handleHotkeySubmit}
                onChange={(event) => {
                  setNewAnswer(event.target.value);
                }}
              />
            </label>

            <button type="submit">
              <PaperPlaneRight />
              <span>Answer</span>
            </button>
          </form>


          {answers.map(answer => {
            return <Tweet key={answer} content={answer} />
          })}
          
        </main>
  )
}