import s from './ErrorLoadCard.module.css'
const ErrorLoadCard = ({ labels }) => {
  return (
    <div>
      <div className={s.wrapper}>
        { labels.errorMessage }
      </div>
    </div>
  )
}
export default ErrorLoadCard
