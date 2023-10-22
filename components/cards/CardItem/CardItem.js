import s from './CardItem.module.css'
import { LinkWrapper } from '../../content/'
import Image from 'next/image'
import React from 'react';
import {useState} from 'react';

const CardItem = ({ link, labels, props, tematic, qtyCards, tematicFlags }) => {
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
            props.hasOwnProperty('tags') && tematicFlags.flagTags == true
            ? props.tags.length > 0
              ? <div style={{display: 'flex', justifyContent: 'center'}}>
                  <TagsDescription tags={props.tags}/>
                </div>
              : null
            :null
          }

          {
            props.hasOwnProperty('synthesis') && tematicFlags.flagSynthesis == true
            ? <p style={{margin: "5px 0 5px 0"}} className={s.labelBackground} dangerouslySetInnerHTML={{ __html: props.synthesis }}></p>
            :null
          }
          {/* <p className={s.label} dangerouslySetInnerHTML={{ __html: props.simbologia }}></p> */}

          {
            isShowInverse &&
            <div>
              <h3 className={s.inverseCard}>{labels.inverseSignificado}</h3>
            </div>
          }

          {
            <ReadMore descr={description} styleClass={s.description} limit={170} readLess={labels.readLess} readMore={labels.readMore} flag={tematicFlags.flagReadMore}/>
            // <p className={s.description} dangerouslySetInnerHTML={{ __html: description }}></p>
          }

          {
            isShowBirthCardExtraContent && (
              <ReadMore descr={carta_nacimiento_description} styleClass={s.description} limit={170} readLess={labels.readLess} readMore={labels.readMore} flag={tematicFlags.flagReadMore}/>
              // <p className={s.description} dangerouslySetInnerHTML={{ __html: carta_nacimiento_description }}></p>
            )
          }

          {
            isShowInverse &&
            <div>
              <h3 className={s.inverseCard}>{labels.inverseDescriptionTitle}</h3>
              {/* <p className={s.description} dangerouslySetInnerHTML={{ __html: description_y_representation }}></p> */}
              <ReadMore descr={description_y_representation} styleClass={s.description} limit={170} readLess={labels.readLess} readMore={labels.readMore} flag={tematicFlags.flagReadMore}/>
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
                <ReadMore descr={props.inversa_simbologia} styleClass={s.label} limit={170} readLess={labels.readLess} readMore={labels.readMore} flag={tematicFlags.flagReadMore}/>
                {/* <p className={s.label}>{props.inversa_simbologia}</p> */}
                <h3 className={s.inverseCard}>{labels.inverseSignificado}</h3>
                <ReadMore descr={props.inversa_significado} styleClass={s.description} limit={170} readLess={labels.readLess} readMore={labels.readMore} flag={tematicFlags.flagReadMore}/>
                {/* <p className={s.description}>{props.inversa_significado}</p> */}
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

const ReadMore = ({ descr, styleClass, limit, readLess, readMore, flag }) => {
  const [showAll, setShowAll] = useState(false);
  if(flag==true){
    return (
      <span>
        {descr.length > limit ? (
          <>
            {showAll ? (
              <div className={s.description}>
                <p className={styleClass} dangerouslySetInnerHTML={{ __html: descr }}></p>
                <a
                  onClick={() => setShowAll(false)}
                  className={s.textPrimary}
                >
                  {readLess}
                </a>
              </div>
            ) : (
              <div className={s.description}>
                <p className={styleClass} dangerouslySetInnerHTML={{ __html: descr.substring(0, limit).concat("...") }}></p>
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
  }else{
    return(
      <p className={styleClass} dangerouslySetInnerHTML={{ __html: descr }}></p>
    );
  }
};

const TagsDescription = ({tags}) =>{
  // tags.sort(function (a, b) {
  //   return b.length - a.length;
  // });

  return(
    <div style={{width:'55%'}}>
      <p style={{textAlign: 'justify', margin: "10% 0 20px 0", lineHeight: "2.3"}}>
            {
              tags.map((item) =>{
                return <span><span className={s.tagsDisplay}>{item}</span> </span>
              })
            }
        <br/>
      </p>
    </div>
  );
};


export default CardItem
