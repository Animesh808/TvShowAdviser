import { useEffect, useState } from 'react';
import { TvShowApi } from './api/TvShow';
import s from './style.module.css'
import { BACKDROP_BASE_URL } from './config';
import TvShowDetail from './TvShowDetail/TvShowDetail';
import Logo from './Logo/Logo';
import logoImg from './assets/images/logo.png'
import TvShowList from './TvShowList/TvShowList';
import SearchBar from './SearchBar/SearchBar';

TvShowApi.fetchPopulars()
function App() {
  const [currentTvShow, setCurrentTvShow] = useState();
  const [recommendedList, setRecommendedList] = useState([])

  async function fetchPopulars() {
    const popularTvShowList = await TvShowApi.fetchPopulars();
    if (popularTvShowList.length > 0) {
      setCurrentTvShow(popularTvShowList[0])
    }
  }

  async function fetchRecommendations(tvShowId) {
    const recommendedTvShowList = await TvShowApi.fetchRecommendations(tvShowId);
    if (recommendedTvShowList.length > 0) {
      setRecommendedList(recommendedTvShowList.slice(0, 10))
    }
  }

  async function search(title) {
    const result = await TvShowApi.search(title);
    if (result.length > 0) {
      setCurrentTvShow(result[0])
    }
  }

  useEffect(() => {
    fetchPopulars()
  }, [])

  useEffect(() => {
    if (currentTvShow) {
      fetchRecommendations(currentTvShow.id)
    }
  }, [currentTvShow])

  function updateCurrentTvShow(tvShow) {
    setCurrentTvShow(tvShow)
  }

  return (
    <div className={s.main_container}
      style={{
        background: currentTvShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
             url("${BACKDROP_BASE_URL}${currentTvShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo img={logoImg} title="Watowatch" subtitle="Find a show you may like" />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar submit={search} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTvShow && <TvShowDetail tvShow={currentTvShow} />}
      </div>
      <div className={s.recommended_tv_shows}>
        {currentTvShow && <TvShowList
          tvShowList={recommendedList}
          onClickItem={updateCurrentTvShow}
        />}
      </div>
    </div>
  );
}

export default App;
