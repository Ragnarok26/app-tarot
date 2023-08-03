import s from './TiradaHerradura.module.css'
import { CardSelect } from '../../cards'
import cx from 'classnames';

const TiradaHerradura = ({ cards }) => {
  let card1 = cards[0];
  let card2 = cards[1];
  let card3 = cards[2];
  let card4 = cards[3];
  let card5 = cards[4];
  let card6 = cards[5];
  let card7 = cards[6];
  return (
    <div>
      <div>
        <div className={cx(s.TiradaHerradura)}>
          <CardSelect props={card1} hiddenName={true} isQuestion={true}></CardSelect>
        </div>

        <div className={cx(s.TiradaHerradura, s.TiradaHerradura_level1)}>
          <CardSelect props={card2} hiddenName={true} isQuestion={true}></CardSelect>
        </div>

        <div className={cx(s.TiradaHerradura, s.TiradaHerradura_level2)}>
          <CardSelect props={card3} hiddenName={true} isQuestion={true}></CardSelect>
        </div>

        <div className={cx(s.TiradaHerradura, s.TiradaHerradura_level3)}>
          <CardSelect props={card4} hiddenName={true} isQuestion={true}></CardSelect>
        </div>

        <div className={cx(s.TiradaHerradura, s.TiradaHerradura_level2)}>
          <CardSelect props={card5} hiddenName={true} isQuestion={true}></CardSelect>
        </div>

        <div className={cx(s.TiradaHerradura, s.TiradaHerradura_level1)}>
          <CardSelect props={card6} hiddenName={true} isQuestion={true}></CardSelect>
        </div>

        <div className={cx(s.TiradaHerradura)}>
          <CardSelect props={card7} hiddenName={true} isQuestion={true}></CardSelect>
        </div>
      </div>
    </div>
  )
}
export default TiradaHerradura