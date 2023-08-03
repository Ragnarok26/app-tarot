import s from './LinkWrapper.module.css'
const LinkWrapper = props => {
  return (
    <div>
      <a
        rel='noreferrer'
        target="_blank"
        className={s.block}
        href={props.link}>
        { props.children }
      </a>
    </div>
  )
}
export default LinkWrapper
