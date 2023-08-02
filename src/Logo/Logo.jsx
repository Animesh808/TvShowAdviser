import s from "./style.module.css"

export default function Logo(props) {
  return (
    <>
      <div className={s.logo_container}>
        <img className={s.logo_image} src={props.img} alt="Logo Image" />
        <div className={s.title}>{props.title} </div>
      </div >
      <div className={s.subtitle}>{props.subtitle}</div>
    </>
  )
}