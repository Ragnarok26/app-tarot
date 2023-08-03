import s from './CardTiradas.module.css'
import { CardSelect } from '..'
import { TiradaHerradura, TiradaPiramide, TiradaFive, TiradaCruzCelta } from '../../tiradas';

const CardTiradas = ({ displayCards, isQuestion, tirada, tematic }) => {

  if (displayCards?.length === 5) {
    return <TiradaFive cards={displayCards} isQuestion={isQuestion} />
  }

  if (tirada === "herradura" && displayCards?.length === 7) {
    return <TiradaHerradura cards={displayCards} />
  }

  if (tirada === "piramide" && displayCards?.length === 10) {
    return <TiradaPiramide cards={displayCards} />
  }

  if (tirada === "cruzCelta" && displayCards?.length === 10) {
    return <TiradaCruzCelta
      cards={displayCards}
      tematic={tematic}
    />
  }

  return (
    <div>
      {displayCards?.map((card, i) =>
          <div key={i} className={`imageContainer`}>
            <CardSelect key={i} props={card} isQuestion={isQuestion} />
          </div>
        )
      }
    </div>
  )
}

export default CardTiradas