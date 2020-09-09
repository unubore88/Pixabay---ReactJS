import React from "react";
import { GridList, GridTile } from "material-ui/GridList";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const themeTypo = createMuiTheme({
  typography: {
    fontFamily: ["Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(","),
  },
});

const useStyles = makeStyles((theme) => ({
  imageShowAnimation: {
    animation: "$fadeIn 5s ease-in-out",
  },
  "@keyframes fadeIn": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
}));

const ImageResults = ({ images }) => {
  const classes = useStyles();

  if (images) {
    console.log(images);
    return (
      <MuiThemeProvider theme={themeTypo}>
        <GridList cols={3}>
          {images.map((image) => {
            return (
              <GridTile
                title={image.tags}
                key={image.id}
                subtitle={
                  <span>
                    by <strong>{image.user}</strong>
                  </span>
                }
              >
                <div className={classes.imageShowAnimation}>
                  <a href={image.pageURL} target="_blank">
                    <img src={image.largeImageURL} alt="" />
                  </a>
                </div>
              </GridTile>
            );
          })}
        </GridList>
      </MuiThemeProvider>
    );
  } else {
    return <div>Lancer une recherche</div>;
  }
};

ImageResults.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageResults;
