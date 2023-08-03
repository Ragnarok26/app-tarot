import s from './ZodiacName.module.css'
const ZodiacName = ({ label, props }) => {
  return (
    <div className={s.zodiacName}>
      <b>{label}</b>: {props}
    </div>
  )
}
export default ZodiacName