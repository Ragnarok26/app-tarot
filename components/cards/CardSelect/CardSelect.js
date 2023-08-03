import s from './CardSelect.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const CardSelect = ({ props, isQuestion, hiddenName, width = 293, height = 561 }) => {
  const [isNot, setIsNot] = useState(false);

  useEffect(() => {
    setIsNot(props?.answer === '0');
  }, [props]);

  return (
    <>
      <div className={s.imageContainer}>
          <img
            width={width}
            height="auto"
            className={isNot ? s.cardNo : ''}
            src={`/card/ic_ar_m${props?.id}.png`}
          />
      </div>

      { !hiddenName && (
          isQuestion ? 
          <div className={s.name}>{ isNot ? 'No' : 'Sí' }</div>
          : <p className={s.name}>{props.name}</p>
        )
      }

      {/* <div style={{ background: "#222", fontSize: "6px", lineHeight: 2 }}>
        {`/card/ic_ar_m${props?.id}.png`}
        <img src={`/card/ic_ar_m${props?.id}.png`} width={10} />
      </div> */}

    </>
  )
}
export default CardSelect