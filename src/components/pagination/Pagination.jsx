import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Pagination } from "@material-ui/lab";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paginationCustomStyle: {
    fontSize: "5rem",
  },
}));

const Paginate = ({ totalPage, currentPage, detectNewSearch }) => {
  const [page, setPage] = useState(1);
  const classes = useStyles();

  const getCurrentPage = (event, value) => {
    setPage(value);
    currentPage(value);
  };

  useEffect(() => {
    setPage(1);
  }, [detectNewSearch]);

  return (
    <div>
      {console.log(page)}
      {console.log("detect new search from pagination: ", detectNewSearch)}
      <Grid container justify="center">
        <Pagination
          className={classes.paginationCustomStyle}
          count={totalPage}
          page={page}
          color="primary"
          size="large"
          onChange={getCurrentPage}
        />
      </Grid>
    </div>
  );
};

export default Paginate;
