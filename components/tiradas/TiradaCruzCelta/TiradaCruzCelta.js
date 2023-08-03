import { CardSelect } from '../../cards'
import s from './TiradaCruzCelta.module.css'
import cx from 'classnames';
import useBreakpoint from '../../../hooks/useBreakpoint';

const TiradaCruzCelta = ({ cards, tematic }) => {
  const breakpoint = useBreakpoint();

  let card1 = cards[0];
  let card2 = cards[1];
  let card3 = cards[2];
  let card4 = cards[3];
  let card5 = cards[4];
  let card6 = cards[5];
  let card7 = cards[6];
  let card8 = cards[7];
  let card9 = cards[8];
  let card10 = cards[9];

  return (
    <div className={s.TiradaCruzCelta_grid}>
      <div>
        <div>
          <div className={cx(s.TiradaCruzCelta)}>
            <CardSelect props={card3} hiddenName={true} isQuestion={true} />
          </div>
        </div>
        <div className={s.TiradaCruzCelta_relative}>
          <div className={cx(s.TiradaCruzCelta, s.TiradaCruzCelta_left)}>
            <CardSelect props={card5} hiddenName={true} isQuestion={true} />
          </div>

          <div className={cx(s.TiradaCruzCelta)}>
            <CardSelect props={card1} hiddenName={true} isQuestion={true} />
          </div>

          <div className={cx(s.TiradaCruzCelta, s.TiradaCruzCelta_right)}>
            <CardSelect props={card6} hiddenName={true} isQuestion={true} />
          </div>

          {tematic === "9000" ? (
            <div className={cx(s.TiradaCruzCelta_deforme)}>
              {breakpoint === "xs" ?
                <CardSelect
                  props={card2}
                  hiddenName={true}
                  isQuestion={true}
                  width={77}
                  height={40}
                /> :
                <CardSelect
                  props={card2}
                  hiddenName={true}
                  isQuestion={true}
                  width={115}
                  height={60}
                />
              }
            </div>
          ) : (
            <div className={cx(s.TiradaCruzCelta_horizontal)}>
              <CardSelect
                props={card2}
                hiddenName={true}
                isQuestion={true}
              />
            </div>
          )}
        </div>
        <div>
          <div className={cx(s.TiradaCruzCelta)}>
            <CardSelect props={card4} hiddenName={true} isQuestion={true} />
          </div>
        </div>
      </div>

      <div>
        <div className={cx(s.TiradaCruzCelta)}>
          <CardSelect props={card10} hiddenName={true} isQuestion={true} />
        </div>

        <div className={cx(s.TiradaCruzCelta)}>
          <CardSelect props={card9} hiddenName={true} isQuestion={true} />
        </div>
        <div className={cx(s.TiradaCruzCelta)}>
          <CardSelect props={card8} hiddenName={true} isQuestion={true} />
        </div>

        <div className={cx(s.TiradaCruzCelta)}>
          <CardSelect props={card7} hiddenName={true} isQuestion={true} />
        </div>
      </div>
    </div>
  )
}
export default TiradaCruzCelta