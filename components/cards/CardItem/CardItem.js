import s from './CardItem.module.css'
import { LinkWrapper } from '../../content/'
import Image from 'next/image'
import React from 'react';
import {useState} from 'react';

const CardItem = ({ link, labels, props, tematic, qtyCards }) => {
  tematic = +tematic
  const isShowInterpretations = props.interpretation && [1000].includes(tematic)
  const isShowExtras = [2000].includes(tematic)
  const isShowAssociations = props.associations && [8000].includes(tematic)
  const isShowInverse = [10000].includes(tematic)
  const isTematicYesOrNot = 9000;
  const isShowBirthCardExtraContent = [8000].includes(tematic)

  // Contenido
  const f = {
    4000: 'Trabajo',
    5000: 'Amor',
    6000: 'Salud',
    7000: 'Dinero',
  };
  const description = props.tematico.find(e => e.name === f[tematic])?.description || props.significado;
  const description_y_representation = props.description_y_representation;
  const carta_nacimiento_description = props.carta_nacimiento_description;

  return (
    // <LinkWrapper link={link}>
      <div>
        {
          props.name && <h3 className={s.name}>{props.name}</h3>
        }
        <div className={s.cardItemContainer}>

          {!isTematicYesOrNot && <h3 className={s.name}>{props.name}</h3>}

          <div className={s.imageContainer}>
            <Image
              width={146.5}
              height={280.5}
              className={s.image}
              alt={s.name}
              src={ `/card/ic_ar_m${props.id}.png?q=100` }
            />
          </div>

          {
            props.hasOwnProperty('tags')
            ? props.tags.length > 0
              ? <div style={{display: 'flex', justifyContent: 'center'}}>
                  <TagsDescription tags={props.tags}/>
                </div>
              : null
            :null
          }

          {
            props.hasOwnProperty('synthesis')
            ?<p className={s.labelBackground} dangerouslySetInnerHTML={{ __html: props.synthesis }}></p>
            :null
          }
          {/* <p className={s.label} dangerouslySetInnerHTML={{ __html: props.simbologia }}></p> */}

          {
            isShowInverse &&
            <div>
              <h3 className={s.inverseCard}>{labels.inverseSignificado}</h3>
            </div>
          }

            {/* <p className={s.description} dangerouslySetInnerHTML={{ __html: description }}></p> */}

          <ReadMore descr={description} limit={170} readLess={labels.readLess} readMore={labels.readMore}/>

          {
            isShowBirthCardExtraContent && (
              // <p className={s.description} dangerouslySetInnerHTML={{ __html: carta_nacimiento_description }}></p>
              <ReadMore descr={carta_nacimiento_description} limit={170} readLess={labels.readLess} readMore={labels.readMore}/>
            )
          }

          {
            isShowInverse &&
            <div>
              <h3 className={s.inverseCard}>{labels.inverseDescriptionTitle}</h3>
              {/* <p className={s.description} dangerouslySetInnerHTML={{ __html: description_y_representation }}></p> */}
              <ReadMore descr={description_y_representation} limit={170} readLess={labels.readLess} readMore={labels.readMore}/>
            </div>
          }

          {
            (isShowInterpretations && qtyCards === 1) &&
            <div>
              <h4>{labels.cardInterpretationsLabel}</h4>
              <div className={s.description}>{props.interpretation}</div>
            </div>
          }

          {
            isShowExtras && <CardExtras extras={props.tematico} />
          }

          {
            isShowAssociations &&
            <div>
              <h4>{labels.cardAsociationsLabel}:</h4>
              <CardAssociations associations={props.associations} />
            </div>
          }

          {
            isShowInverse &&
            <div>
                <h3 className={s.inverseCard}>{labels.inverseCard}</h3>
                <div className={s.imageContainer}>
                  <Image
                    width={146.5}
                    height={280.5}
                    className={s.imageReverse}
                    alt={s.name}
                    src={ `/card/ic_ar_m${props.id}.png?q=100` }
                  />
                </div>
                <p className={s.label}>{props.inversa_simbologia}</p>
                <h3 className={s.inverseCard}>{labels.inverseSignificado}</h3>
                {/* <p className={s.description}>{props.inversa_significado}</p> */}
                <ReadMore descr={props.inversa_significado} limit={170} readLess={labels.readLess} readMore={labels.readMore}/>
            </div>
          }
        </div>
      </div>
    // </LinkWrapper>
  )
}
const CardExtras = ({ extras }) => {
  return (
    <div className={s.cardExtraContainer}>
      {
        extras.map((e, i) =>
          <div key={i} className={s.cardExtra}>
            <div><h4>{e.name}</h4></div>
            <div>{e.description}</div>
          </div>
        )
      }
    </div>
  )
}
const CardAssociations = ({ associations }) => {
  return (
    <div className="CardAssociations">
      {
        associations.map((e, i) =>
          <div key={i} className={s.cardAssociation}>
            <b>{e.name}</b>: {e.description}
          </div>
        )
      }
    </div>
  )
}

const ReadMore = ({ descr, limit, readLess, readMore }) => {
  const [showAll, setShowAll] = useState(false);
  return (
    <span>
      {descr.length > limit ? (
        <>
          {showAll ? (
            <div className={s.description}>
              <p className={s.description} dangerouslySetInnerHTML={{ __html: descr }}></p>
              <a
                onClick={() => setShowAll(false)}
                className={s.textPrimary}
              >
                {readLess}
              </a>
            </div>
          ) : (
            <div className={s.description}>
              <p className={s.description} dangerouslySetInnerHTML={{ __html: descr.substring(0, limit).concat("...") }}></p>
              <a onClick={() => setShowAll(true)} className={s.textPrimary}>
              {readMore}
              </a>
            </div>
          )}
        </>
      ) : (
        descr
      )}
    </span>
  );
};

const TagsDescription = ({tags}) =>{
  return(
    <div style={{width: '60%', position: 'relative'}} className='container'>
      {
        tags.map((item) =>{
          return <div className={s.tagsDisplay} >
              <span style={{fontSize: '12px', padding: '0 3px 0 3px'}}>{item}</span>
          </div>
        })
      }
    </div>
  );
};


export default CardItem
