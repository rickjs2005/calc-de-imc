import { useState } from 'react';
import styles from './App.module.css';
import powerd from './assets/powered.png';
import leftarrowImage from './assets/leftarrow.png'
import {Level, Levels, calculateIMC} from './helpers/imc';
import {GridItem} from './components/GridItem/GridItem'

const App =() =>{
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const[toShow, setToShow] = useState <Level | null> (null);

  const handleCalculeButton =() =>{
    if (heightField && weightField) {
      setToShow(calculateIMC(heightField, weightField));
    } else  {
      alert("digite todos os campos.")
    }
  }

  const handleBackButton=() =>{
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={powerd} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule seu IMC</h1>
          <p>IMC é uma siglapara índice massa Corpórea,parâmetro adotado pela Organização Mundial da Saúde para calcular peso ideal de cada pessoa.</p>
          <input type="number"
          placeholder="digite sua altura. ex 1,5(metros)"
          value={heightField > 0 ? heightField : ''}
          onChange={e => setHeightField (parseFloat(e.target.value))}
            disabled = {toShow ? true : false}
          />
          <input type="number"
          placeholder="digite seu peso. ex 80,5(kg)"
          value={weightField > 0 ? weightField : ''}
          onChange={e => setWeightField (parseFloat(e.target.value))}
          disabled = {toShow ? true : false}
          />
          <button onClick={handleCalculeButton}  disabled = {toShow ? true : false}>calcular</button>
        </div>
        <div className={styles.rightSide}>
          { !toShow &&
            <div className={styles.grid}>
              {Levels.map((item, index) => (
              <GridItem key={index} item={item} />))}
            </div>
          }
          {toShow && 
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftarrowImage} alt="" width={25} />
              </div>
              <GridItem item={toShow}/>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default App;