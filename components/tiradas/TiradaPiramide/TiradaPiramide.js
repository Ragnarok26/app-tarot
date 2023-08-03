import { CardSelect } from '../../cards'
import s from './TiradaPiramide.module.css'
import cx from 'classnames';
import { useEffect, useState } from 'react';

const TiradaPiramide = ({ cards }) => {
  const [card1, setCard1] = useState();
  const [card2, setCard2] = useState();
  const [card3, setCard3] = useState();
  const [card4, setCard4] = useState();
  const [card5, setCard5] = useState();
  const [card6, setCard6] = useState();
  const [card7, setCard7] = useState();
  const [card8, setCard8] = useState();
  const [card9, setCard9] = useState();
  const [card10, setCard10] = useState();

  useEffect(() => {
    if (cards?.length) {
      setCard1(cards[0]);
      setCard2(cards[1]);
      setCard3(cards[2]);
      setCard4(cards[3]);
      setCard5(cards[4]);
      setCard6(cards[5]);
      setCard7(cards[6]);
      setCard8(cards[7]);
      setCard9(cards[8]);
      setCard10(cards[9]);

    }
  }, [cards]);

  return (
    <>
      {cards?.length && (
        <div>
          <div>
            <div className={cx(s.TiradaPiramide, s.TiradaPiramide_level1)}>
              <CardSelect props={card9} hiddenName={true} isQuestion={true}></CardSelect>
            </div>

            <div className={cx(s.TiradaPiramide)}>
              <CardSelect props={card10} hiddenName={true} isQuestion={true}></CardSelect>
            </div>

            <div className={cx(s.TiradaPiramide, s.TiradaPiramide_level1)}>
              <CardSelect props={card8} hiddenName={true} isQuestion={true}></CardSelect>
            </div>
          </div>

          <div className={s.TiradaPiramideRowTwo}>
            <div className={cx(s.TiradaPiramide, s.TiradaPiramide_level1)}>
              <CardSelect props={card4} hiddenName={true} isQuestion={true}></CardSelect>
            </div>

            <div className={cx(s.TiradaPiramide)}>
              <CardSelect props={card7} hiddenName={true} isQuestion={true}></CardSelect>
            </div>

            <div className={cx(s.TiradaPiramide, s.TiradaPiramide_level1)}>
              <CardSelect props={card3} hiddenName={true} isQuestion={true}></CardSelect>
            </div>

            <div className={cx(s.TiradaPiramide)}>
              <CardSelect props={card6} hiddenName={true} isQuestion={true}></CardSelect>
            </div>

            <div className={cx(s.TiradaPiramide, s.TiradaPiramide_level1)}>
              <CardSelect props={card2} hiddenName={true} isQuestion={true}></CardSelect>
            </div>

            <div className={cx(s.TiradaPiramide)}>
              <CardSelect props={card5} hiddenName={true} isQuestion={true}></CardSelect>
            </div>

            <div className={cx(s.TiradaPiramide, s.TiradaPiramide_level1)}>
              <CardSelect props={card1} hiddenName={true} isQuestion={true}></CardSelect>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TiradaPiramide