import Head from 'next/head'
import { useRouter } from 'next/router'
import { GooglePlayDownload, BannerDownload, ErrorLoadCard, LinkWrapper, ZodiacName } from '../../components/content'
import { CardItem, CardTiradas, ContentYesOrNot } from '../../components/cards'
import { cardsAvailable } from '../../params/params'
import { getValidCards, getZodiac } from '../../utils/util'
import { getContentFromFirestore, getPathsFromFirestore } from '../../services/contentFirebase'
import cn from 'classnames'
import ReactPlayer from 'react-player'
import { useEffect, useState } from 'react'
import { useOrientation } from 'react-use'

function Index({ content }) {
  // From URL
  const router = useRouter()
  const { tematic, card, zodiac, question, tirada, date } = router.query

  // From content file
  const { labels, cards, tematics, zodiac: contentZodiac, tagCards, tiradaHerraduraLabel, combinations } = content

  //Local Date
  var dateFormated = new Date();
  var month = 0;
  if(date!=null){
    var dateSplit = date.split(" ");
    for(var i=0; i < content.labels.months.length; i++){
      if(content.labels.months[i] == dateSplit[2].toLowerCase()){
        month = i;
      }
    }
    const newDate = new Date(parseInt(dateSplit[4]), month, parseInt(dateSplit[0]));
    dateFormated = newDate.toLocaleDateString(content.labels.language, { day: 'numeric', month: 'long', year: 'numeric'});
  }else{
    dateFormated = new Date().toLocaleDateString(content.labels.language, { day: 'numeric', month: 'long', year: 'numeric'});
  }

  // Get cards and validations
  const optionsCard = cardsAvailable[+tematic];
  const { displayCards, totalYes, totalNo, hasErrorCard } = getValidCards(card, cards, optionsCard, tirada)
  const { displayZodiac, hasErrorZodiac } = getZodiac(zodiac, contentZodiac)
  const titleTematic = tematics?.[tematic]?.titleTematic
  const tematicFlags = tematics?.[tematic]
  const videoFlag = tematics?.[tematic]?.videoFlag
  const urlVideoCombination = combinations[tematic]?.[card]?.urlVideoCombination
  const expandedTextFlag = tematics?.[tematic]?.expandedTextFlag
  const textTranscription = "Ver transcripción"

  if (optionsCard?.isShowContentCombination) {
    if (combinations && combinations[tematic] && !combinations[tematic][card]?.active) {
      return <ErrorLoadCard labels={labels} />
    }
  }

  if (hasErrorCard || hasErrorZodiac) {
    return <ErrorLoadCard labels={labels} />
  }

  return (
    <div>
      <Head>
        <title>{content.appName}</title>
        <meta name="description" content={content.description} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:site_name" content={content.appName} />
        <meta property="og:title" content={content.appName} />
        <meta property="og:description" content={content.description} />
        <meta property="og:image" content="https://tarot-static-web.vercel.app/thumbl.png" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#8E24AC" />
      </Head>

      <div className="layout">

        {/* 1. HEADER */}
        {/* ================================================ */}
        <div className={cn({ 'isPurple': !!optionsCard?.isPurpleTirada })}>
          <LinkWrapper link={labels.downloadLink}>
            <GooglePlayDownload url={labels.imgGooglePlay} />
            <BannerDownload props={labels.downloadLabel} />
          </LinkWrapper>
          {
            videoFlag == true && combinations[tematic][card].hasOwnProperty('urlVideoCombination') && urlVideoCombination != ""
            ? <VideoItem urlVideoCombination={urlVideoCombination}/>
            : null
          }
        </div>

        {/* 2. TIRADAS */}
        {/* ================================================ */}
        { optionsCard?.isPurpleTirada ? (
          <div className={cn('tematicBackground', { 'isPurple': !!optionsCard?.isPurpleTirada })}>
            <LinkWrapper link={labels.downloadLink}>
              <h4 className='center'>{titleTematic}</h4>
              <CardTiradas
                tematic={tematic}
                displayCards={displayCards}
                link={labels.downloadLink}
                tirada={tirada}
              />
              <BannerDownload props={labels.downloadLabel} />
            </LinkWrapper>
          </div>
        ) : null }

        {/* 3. CONTENT */}
        {/* ================================================ */}
        {optionsCard?.showTitleInContent && (
          <div style={{ textAlign: 'center', fontSize: '1.35rem', margin: '.6rem 0' }}>
            {titleTematic}
          </div>
        )}

        {optionsCard?.isShowDate && (
          <div style={{ textAlign: 'center', fontSize: '1rem', margin: '.6rem 0', color: '#666' }}>
            {dateFormated}
          </div>
        )}

        {optionsCard?.isShowContentQuestion &&
          <div>
            <LinkWrapper link={labels.downloadLink}>
              <div className="questionWrapper">
                {question &&
                  <h4 className="question">{question}</h4>
                }
                <div className="answer">{
                  (totalYes?.length > totalNo?.length) ? labels.yesLabel : labels.noLabel
                }</div>
              </div>
            </LinkWrapper>

            <CardTiradas
              props={displayCards}
              isQuestion={true}
              link={labels.downloadLink}
            />

            <div className="container">
              <h4>{labels.resultYesOrNotLabel}</h4>
              <p>{labels.resultDescription}</p>
            </div>

            <ContentYesOrNot
              labels={content.labels}
              cards={displayCards}
              link={labels.downloadLink}
            />
          </div>
        }

        {optionsCard?.isShowContentDefault && (
          <div className="container">
            {/* Content */}
            <main>
              {displayCards.map((card, i) => (
                <div key={i}>
                  {
                    tagCards[tirada || displayCards?.length] &&
                    <div style={{ color: '#888', marginTop: '1rem' }}>
                      {tagCards[tirada || displayCards?.length][i]}
                    </div>
                  }
                  <CardItem
                    props={card}
                    labels={labels}
                    tematic={tematic}
                    qtyCards={displayCards.length}
                    link={labels.downloadLink}
                    tematicFlags={tematicFlags}
                  ></CardItem>
                </div>
              ))
              }
            </main>

            {/* Zodiac Name */}
            <LinkWrapper link={labels.downloadLink}>
              {
                displayZodiac && <ZodiacName label={labels.zodiacLabel} props={displayZodiac}></ZodiacName>
              }
            </LinkWrapper>

          </div>
        )}

        <ShowTranscription
          extendedFlag={expandedTextFlag}
          textTranscription={textTranscription}
          isShowContentCombination={optionsCard?.isShowContentCombination}
          cardInterpretationsLabel={content.labels.cardInterpretationsLabel}
          combinations={combinations}
          content={combinations[tematic]?.[card]?.content}/>

        {/* 4. FOOTER */}
        {/* ================================================ */}
        <LinkWrapper link={labels.downloadLink}>
          <BannerDownload props={labels.downloadLabel} />
          <GooglePlayDownload url={labels.imgGooglePlay} />
        </LinkWrapper>

      </div>
    </div>
  )
}

export async function getStaticPaths() {
  let pathsData = await getPathsFromFirestore();
  return {
    paths: pathsData.paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const content = await getContentFromFirestore(`${params.lang}`);
  return {
    props: {
      content,
    }
  }
}

const ShowTranscription = ({extendedFlag, textTranscription, isShowContentCombination, cardInterpretationsLabel, combinations, content }) => {
  const [expandedText, setExpandedText] = useState(false)
  if(extendedFlag){
    return(
      <>
        <div className='container'>
          <span onClick={()=> {setExpandedText(!expandedText)}}>
            {expandedText == false ?<span style={{fontSize: '20px'}}>►</span> : <span>▼</span> } {textTranscription}
          </span>
        </div>
        {
          expandedText == true
          ? <>
              { isShowContentCombination && (
              <div className="container" >
                <div style={{ fontSize: '.96rem', margin: '1rem 0' }}>
                  <p dangerouslySetInnerHTML={{ __html: combinations && content }}></p>
                </div>
              </div>
              )}
            </>
          : null
        }
      </>)
  }
  else{
    return(
      <>
        { isShowContentCombination && (
        <div
          style={{ border: "1px solid #ccc", borderRadius: "8px", margin: "1rem" }}
          className="container"
        >
          <div style={{ textAlign: 'center', fontSize: '1.35rem', margin: '.6rem 0' }}>
            <b>{cardInterpretationsLabel}</b>
          </div>
          <div style={{ fontSize: '.96rem', margin: '1rem 0' }}>
            <p dangerouslySetInnerHTML={{ __html: combinations && content }}></p>
          </div>
        </div>
        )}
      </>)
  }
}

let landscapeMode = true;

const VideoItem = ({urlVideoCombination}) => {
  const [mobile, setMobile] = useState();
  const [element, setElement] = useState();
  const [doc, setDoc]= useState();
  const [play, setPlay] = useState(false);
  const state = useOrientation();

  useEffect(() => {
    let userAgent = window.navigator.userAgent;
    let isMobile = Boolean(userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|Macintosh|WPDesktop/i
    ))

    setMobile(isMobile);
    setElement(window.document.getElementById('videoPlayer'))
    setDoc(window.document);
    }, []);

    if(state.type == "landscape-primary"){
      console.log(state.type)
      if(mobile == true && play == true && landscapeMode == true){
        console.log(element);
        element.requestFullscreen()
            .then(() => { console.log('Element entered fullscreen mode successfully.');}
          )
            .catch(error => {console.log(`Entering fullscreen mode failed:${error.message}`);
          });
      }else{
        landscapeMode = false;
      }
    } else if(state.type == "portrait-primary"){
      console.log(state.type)
      if(doc.fullscreenElement != null){
        doc.exitFullscreen();
      }
      else{
        landscapeMode = true;
      }
    }

  return (
    <div>
      <ReactPlayer
        url={urlVideoCombination}
        width='100%'
        controls={true}
        id='videoPlayer'
        onPlay={() => setPlay(true)}
        onPause={() => setPlay(false)}
        onEnded={() => setPlay(false)}
      />
    </div>
  )
}

export default Index
