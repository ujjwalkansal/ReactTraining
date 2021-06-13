import React, { useState, useEffect, memo } from "react";
import { makeStyles } from "@material-ui/core";

function MovieScreen() {
  const [rating, setRating] = useState(1);
  useEffect(() => {
    setInterval(() => {
      setRating(Math.ceil(Math.random() * 10));
    }, 10000);
  }, [rating]);

  const useStyles = makeStyles((theme) => ({
    moviesBox: {
      display: "flex",
      flexDirection: "row",
      width: "1020px",
      height: "400px",
      margin: "150px",
      padding: "30px",
      backgroundColor: "black",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },

    movieContainer: {
      width: "300px",
      height: "400px",
      backgroundColor: "grey",
      margin: "15px",
      boxShadow: "0 0 5px black",
      display: "flex",
      flexDirection: "column",
    },
    movieImg: {
      width: "300px",
      height: "200px",
    },
    movieName: {
      margin: "20px",
      fontSize: "22px",
      fontWeight: "bold",
    },
    releasedate: {
      margin: "10px 20px",
      fontSize: "20px",
    },
    ratingStyle: {
      margin: "10px 20px",
      fontSize: "25px",
      fontWeight: "bold",
    },
  }));

  const classes = useStyles();

  function MovieContainer(props) {
    return (
      <div className={classes.movieContainer}>
        <img src={props.poster} className={classes.movieImg}></img>
        <div className={"movieDesc"}>
          <h2 className={classes.movieName}>{props.name}</h2>
          <p className={classes.releaseDate}>{props.releaseDate}</p>
          <p className={classes.ratingStyle}>{props.rating}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.moviesBox}>
      <MovieContainer
        poster={
          "https://images-na.ssl-images-amazon.com/images/I/51KjbtEkoeL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        }
        name={"The Shawshank Redemption"}
        releaseDate={"14th October 1994"}
        rating={"9.3"}
      />
      <MovieContainer
        poster={
          "https://www.meinstyn.com/wp-content/uploads/2017/01/3-Idiots-Movie-Poster-Aamir-Khan-Kareena-Kapoor-R-Madhavan-Sharman-Joshi-Full-HD-Desktop-Wallpaper.jpg"
        }
        name={"3 Idiots"}
        releaseDate={"25th December 2009"}
        rating={rating}
      />
      <MovieContainer
        poster={
          "https://image.songsuno.com/movie-images/original/movie/ludo/ludo-poster.jpg"
        }
        name={"Ludo"}
        releaseDate={"12th November 2020"}
        rating={"7.6"}
      />
    </div>
  );
}

export default memo(MovieScreen);
