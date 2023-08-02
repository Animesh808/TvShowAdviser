import s from './style.module.css'
import { SMALL_IMAGE_COVER_BASE_URL } from '../config'
export default function ({ tvShow, onClick }) {
  const MAX_TITLE_CHAR = 20;
  const onClick_ = () => {
    onClick(tvShow);
  }
  return (
    <div className={s.container} onClick={onClick_}>
      <img className={s.image} src={SMALL_IMAGE_COVER_BASE_URL + tvShow.backdrop_path} alt="image" />
      <div className={s.title}>
        {tvShow.name.length > MAX_TITLE_CHAR
          ? tvShow.name.slice(0, MAX_TITLE_CHAR) + "..."
          : tvShow.name}
      </div>
    </div>
  )
}