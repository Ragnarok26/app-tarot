import { CardSelect } from '../../cards'

const TiradaFive = ({ cards, isQuestion }) => {
  const card1 = cards[2];
  const card2 = cards[0];
  const card3 = cards[4];
  const card4 = cards[1];
  const card5 = cards[3];

  return (
    <div>
      <div>
        <div className={`imageContainer tree`}>
          <CardSelect props={card1} isQuestion={isQuestion}></CardSelect>
        </div>
      </div>
      <div>
        <div className={`imageContainer tree`}>
          <CardSelect props={card2} isQuestion={isQuestion}></CardSelect>
        </div>
        <div className={`imageContainer tree`}>
          <CardSelect props={card3} isQuestion={isQuestion}></CardSelect>
        </div>
        <div className={`imageContainer tree`}>
          <CardSelect props={card4} isQuestion={isQuestion}></CardSelect>
        </div>
      </div>
      <div>
        <div className={`imageContainer tree`}>
          <CardSelect props={card5} isQuestion={isQuestion}></CardSelect>
        </div>
      </div>
    </div>
  )
}
export default TiradaFive