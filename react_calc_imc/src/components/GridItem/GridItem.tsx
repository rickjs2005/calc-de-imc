import { Level } from "../../helpers/imc";
import  Styles from './GridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
    item: Level;
};

export const GridItem =({item}: Props)=> {
    return (
        <div className={Styles.main} style={{backgroundColor: item.color}}>
            <div className={Styles.GridIcon}>
                {item.icon=== 'up' && <img src={upImage} alt="" width="30"/>}
                {item.icon=== 'down' && <img src={downImage} alt="" width="30"/>}
            </div>
            <div className={Styles.GridTitle}>{item.title}</div>
            {item.yourIMC &&
                <div className={Styles.yourIMC}>Seu IMC é {item.yourIMC}kg/m²</div>
            }
            <div className={Styles.GridInfo}>
                <>
                    imc está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
};
