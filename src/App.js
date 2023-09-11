import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function App() {
  const count = useSelector (state => state.count)

  const dispatch = useDispatch();
  const increase = () => {
    dispatch({type: 'plus'})
  }
  const decrease = () => {
    dispatch({type: 'minus'})
  }

  return (
    <div className='app'>
      <h1>Счетчик</h1>
      <p className='result'>{count}</p>
      <button className='btn' onClick={increase}>+</button>
      <button className='btn' onClick={decrease}>-</button>
    </div>
  );
}

export default App;
// "homepage": "https://angelinaivanova16.github.io/redux-counter/"
