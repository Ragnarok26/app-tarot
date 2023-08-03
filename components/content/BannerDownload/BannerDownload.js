import s from './BannerDownload.module.css'
import cn from 'classnames'
const BannerDownload = ({ props }) => {
  return (
    <div className={cn(s.banner)}>
      {props}
    </div>
  )
}
export default BannerDownload
