import s from './ContentYesOrNot.module.css'
import { LinkWrapper } from '../../content'

const ContentYesOrNot = ({ link, labels, cards }) => {

  const totalYes = cards.map(e => e.answer).filter(e => e === '1');
  const totalNo = cards.map(e => e.answer).filter(e => e === '0');

  let cardName = '';
  switch (cards?.length) {
    case 1:
      cardName = cards[0].name;
      break;
    case 3:
      cardName = cards[1].name;
      break;
    case 5:
      cardName = cards[2].name;
      break;
  }

  return (
    <LinkWrapper link={link}>
      <div className={s.container}>
        { cards?.length > 1 &&
          <div>
            <div className={s.resultWrapper}>
              <div>
                <div><b>{totalNo.length} {labels.noLabel}</b></div>
                <div className={s.text} dangerouslySetInnerHTML={{ __html: labels.resultNotLabel }}></div>
              </div>
              <div>-</div>
              <div>
                <div><b>{totalYes.length} {labels.yesLabel}</b></div>
                <div className={s.text} dangerouslySetInnerHTML={{ __html: labels.resultYesLabel }}></div>
              </div>
              <div>=</div>
              <div>
                <div><b>{ totalYes.length > totalNo.length ? labels.yesLabel : labels.noLabel}</b></div>
                <div className={s.text}>{labels.resultYesOrNotLabel}</div>
              </div>
            </div>

            {/* <h4>{ labels.lectureYesOrNotLabel }</h4>
            <p>{ cardName }</p> */}
          </div>
        }
      </div>
    </LinkWrapper>
  )
}

export default ContentYesOrNot