import Header from './components/Header'
import Hero from './components/Hero'
import NRealeses from './components/NRealeses'
import MovieSection from './components/MovieSection'
import About from './components/About'
import { useState } from 'react'
import LoginForm from './components/LoginForm'

function App() {
   const newMovies = [
    {
        name: 'Black Widow', 
        link: 'https://liliput35.github.io/personal-portfolio/', 
        picture: 'https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg',  
        id: 1
    }, 
    {
        name: 'What If', 
        link: 'https://drive.google.com/drive/folders/1s4oviIJiraG49BHKmMY864zF0ZgBoCYw?usp=sharing', 
        picture: 'https://media.comicbook.com/2021/07/marvel-what-if-tv-series-poster-official-disney-plus-1274908.jpeg?auto=webp&width=1280&height=1897&crop=1280:1897,smart', 
        id: 2
    }, 
    {
        name: 'Shang-Chi and The Legend of the Ten Rings', 
        link: 'https://drive.google.com/drive/folders/1TLOHtWoX1W329lCP7a2gDPmrOGqtcMhJ?usp=sharing', 
        picture: 'http://oyster.ignimgs.com/wordpress/stg.ign.com/2021/04/Shang-Chi-Poster-Marvel.jpg', 
        id: 3
    }, 
  ]

    const phaseOne = [
      {
          name: 'Ironman', 
          link: 'https://drive.google.com/file/d/1-7sDO5O7hQvWp84kTU5ie_S-QXYcWKmk/view?usp=sharing', 
          picture: 'https://www.joblo.com/wp-content/uploads/2010/05/2008-iron_man-4-1.jpg',  
          id: 1, 
          available: ''
      }, 
      {
          name: 'The Incredible Hulk', 
          link: 'https://drive.google.com/file/d/16u-9p7WrBjj34cYZbafhxO9OC3tuMmNy/view?usp=sharing', 
          picture: 'https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_.jpg', 
          id: 2, 
          available: ''
      }, 
      {
          name: 'Ironman 2', 
          link: 'https://fmovies.co/film/iron-man-2-1711?play=1', 
          picture: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Iron_Man_2_poster.jpg', 
          id: 3, 
          available: 'not in drive'
      }, 
      {
          name: 'Thor', 
          link: 'https://drive.google.com/file/d/1BU6JditZ2x1HotAdh1SJzyfJMTckw2ou/view?usp=sharing', 
          picture: 'https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg', 
          id: 4, 
          available: ''
      }, 
      {
        name: 'Captain America: The First Avenger', 
        link: 'https://drive.google.com/file/d/1Sh0qGdy9dSu7sWwgwoqEZHqaaxXN-sAe/view?usp=sharing', 
        picture: 'https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_UY1200_CR69,0,630,1200_AL_.jpg', 
        id: 5, 
        available: ''
    }, 
    {
      name: 'The Avengers', 
      link: 'https://fmovies.co/film/the-avengers-1717?play=1', 
      picture: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg', 
      id: 6, 
      available: 'not in drive'
    }, 
    ]
    const phaseTwo = [
      {
          name: 'Ironman 3', 
          link: 'https://drive.google.com/file/d/1f62wax_EFduVvMNcvrxYYKGHmH1tOYs7/view?usp=sharing', 
          picture: 'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg',  
          id: 1, 
          available: ''
      }, 
      {
          name: 'Thor: The Dark World', 
          link: 'https://fmovies.co/film/thor-the-dark-world-1843?play=1', 
          picture: 'https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_.jpg', 
          id: 2, 
          available: 'not in drive'
      }, 
      {
          name: 'Captain America: The Winter Soldier', 
          link: 'https://drive.google.com/file/d/107ECdE8yrgk2LY7Yr6NBcdbBezcnGo_m/view?usp=sharing', 
          picture: 'https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_.jpg', 
          id: 3, 
          available: ''
      }, 
      {
          name: 'Guardians of the Galaxy', 
          link: 'https://fmovies.co/film/guardians-of-the-galaxy-1608?play=1', 
          picture: 'https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_.jpg', 
          id: 4, 
          available: 'not in drive'
      }, 
      {
        name: 'Avengers: Age of Ultron', 
        link: 'https://fmovies.co/film/avengers-age-of-ultron-4632?play=1', 
        picture: 'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg', 
        id: 5, 
        available: 'not in drive'
    }, 
    {
      name: 'Ant-Man', 
      link: 'https://fmovies.co/film/ant-man-4408?play=1', 
      picture: 'https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_FMjpg_UX1000_.jpg', 
      id: 6, 
      available: 'not in drive'
    }, 
    ]

    const phaseThree = [
      {
          name: 'Captain America: Civil War', 
          link: 'https://drive.google.com/file/d/1pvTc5mEajMTes0GmUeZaxhOjRpAwfj7a/view?usp=sharing', 
          picture: 'https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_.jpg',  
          id: 1, 
          available: ''
      }, 
      {
          name: 'Doctor Strange', 
          link: 'https://drive.google.com/file/d/1RWRjgdwaIkLoy62XVE2KQqQ0DF9_bofz/view?usp=sharing', 
          picture: 'https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_.jpg', 
          id: 2, 
          available: ''
      }, 
      {
          name: 'Guardians of the Galaxy 2', 
          link: 'https://drive.google.com/file/d/1Hp92HAYNniDWYvTZ5rXkkhzo2t26UsU8/view?usp=sharing', 
          picture: 'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_.jpg', 
          id: 3, 
          available: 'not in '
      }, 
      {
          name: 'Spider-Man: Homecoming', 
          link: 'https://drive.google.com/file/d/1w1n-EprU4PE_woe1tQMM_fL4WJDR4Q4i/view?usp=sharing', 
          picture: 'https://m.media-amazon.com/images/M/MV5BOGQ5YTM3YzctOTVmMC00OGIyLWFkZTYtMWYwOWZhMjA2MWMwXkEyXkFqcGdeQXVyMjUyMTE5MA@@._V1_.jpg', 
          id: 4, 
          available: ''
      }, 
      {
        name: 'Thor: Ragnarok', 
        link: 'https://fmovies.co/film/thor-ragnarok-22466?play=1', 
        picture: 'https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg', 
        id: 5, 
        available: 'not in drive'
      }, 
      {
        name: 'Black Panther', 
        link: 'https://drive.google.com/file/d/1Nf__LCWcJnmFL53piSlDSYpjMh47YhS4/view?usp=sharing', 
        picture: 'https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg', 
        id: 6, 
        available: ''
      }, 
      {
        name: 'Avengers: Infinity War', 
        link: 'https://fmovies.co/film/avengers-infinity-war-24689?play=1', 
        picture: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg', 
        id: 7, 
        available: 'not in drive'
      }, 
      {
        name: 'Ant-Man and the Wasp', 
        link: 'https://series9.me/film/ant-man-and-the-wasp/watching.html?ep=0', 
        picture: 'https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg', 
        id: 8,
        available: 'not in drive'
      }, 
      {
        name: 'Captain Marvel', 
        link: 'https://drive.google.com/file/d/1cmYsQ8hfZlUnJKZ4Ib0EsG_aALJflicY/view?usp=sharing', 
        picture: 'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg', 
        id: 9, 
        available: ''
      }, 
      {
        name: 'Avengers: Endgame', 
        link: 'https://drive.google.com/file/d/1k5829HL8CDjXjG_NxZXqFIjspx-YLGvU/view?usp=sharing', 
        picture: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg', 
        id: 10, 
        available: ''
      }, 
      {
        name: 'Spider-Man: Far From Home', 
        link: 'https://drive.google.com/file/d/1gpQR6WgN8gy3Rnq-1FkeMr5mXPRzP7zL/view?usp=sharing', 
        picture: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg', 
        id: 11, 
        available: 'not in drive'
      }, 
    ]

    const phaseFour = [
      {
          name: 'Wandavision', 
          link: 'https://series9.me/film/marvels-wandavision-season-1/watching.html?ep=1', 
          picture: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/wv_online.jpg',  
          id: 1, 
          available: 'not in drive'
      }, 
      {
          name: 'The Falcon and the Winter Soldier', 
          link: 'https://drive.google.com/drive/folders/12pB6xp_rpmWwuR1Nd4-tzG0bsRLOt0kQ?usp=sharing', 
          picture: 'https://media.comicbook.com/2020/12/marvel-falcon-and-the-winter-soldier-poster-2021-1248503.jpeg?auto=webp&width=800&height=1185&crop=800:1185,smart', 
          id: 2, 
          available: '', }, 
      {
          name: 'Loki', 
          link: 'https://drive.google.com/drive/folders/1HDatH0b8Ge7-jRNH7N-h_xkpxPaKps0M?usp=sharing', 
          picture: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/arch_digital_keyart_teaser_v4_lg.jpg', 
          id: 3, available: ''
      }, 
      {
          name: 'Black Widow', 
          link: 'https://series9.me/film/black-widow-2021/watching.html?ep=0', 
          picture: 'https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg', 
          id: 4, 
          available: 'not in drive'

      }, 
      {
        name: 'What if', 
        link: 'https://drive.google.com/drive/folders/1s4oviIJiraG49BHKmMY864zF0ZgBoCYw?usp=sharing', 
        picture: 'https://media.comicbook.com/2021/07/marvel-what-if-tv-series-poster-official-disney-plus-1274908.jpeg?auto=webp&width=1280&height=1897&crop=1280:1897,smart', 
        id: 5, 
        available: ''
    }, 
    {
      name: 'Shang-Chi and the Legend of the Ten Rings', 
      link: 'https://drive.google.com/drive/folders/1TLOHtWoX1W329lCP7a2gDPmrOGqtcMhJ?usp=sharing', 
      picture: 'http://oyster.ignimgs.com/wordpress/stg.ign.com/2021/04/Shang-Chi-Poster-Marvel.jpg', 
      id: 6, 
      available: ''
    }, 
    ]

    const userData = {
      name: 'SHIELD', 
      password: 'hailhydra'
    }

    const [user, setUser] = useState({name: '', password:''})
    const [error, setError] = useState('')
    const [classs, setClasss] = useState('none')
    const [lclasss, setLclasss] = useState('block')

    const Login = details => {
      console.log(details)

      if(details.name === userData.name && details.password === userData.password){
        console.log('Logged In')
        setClasss('block')
        setLclasss('none')
      }else{
        console.log('Details do not match')
        setClasss('none')
        setLclasss('block')
      }
    }



  return (
    <div className="App">
      <div className={classs}>
        <Header />
        <Hero />
        <NRealeses newMovies={newMovies}/>
        <MovieSection phaseOne={phaseOne} phaseTwo={phaseTwo} phaseThree={phaseThree} phaseFour={phaseFour}/>
        <About/>
      </div>
      <LoginForm Login={Login} error={error} lclasss={lclasss}/>

      
    </div>
  );
}

export default App;
