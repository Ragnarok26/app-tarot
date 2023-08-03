import s from './GooglePlayDownload.module.css'
import cn from 'classnames'
import Image from 'next/image'

const GooglePlayDownload = ({url}) => {
  return (
    <div className={cn(s.googlePlayWrapper)}>
      <Image
        className={s.googlePlayImage}
        width={180}
        height={69.66}
        alt='Disponible en Google Play'
        src= {url}
      />
    </div>
  )
}
export default GooglePlayDownload
