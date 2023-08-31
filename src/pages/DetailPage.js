import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";

const URL = process.env.REACT_APP_BASE_URL;

const DetailPage = () => {
  const { classes } = useStyles();
  const { id } = useParams();

  async function fetchMovieDetail(id) {
    try {
      const response = await axios.get(`${URL}&i=${id}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
  const { data, isInitialLoading, isFetching, error } = useQuery({
    queryKey: ["movieDetail", id],
    queryFn: () => fetchMovieDetail(id),
    enabled: !!id,
  });

  const movieData = data?.data || {};
  const showSpinner = isInitialLoading || isFetching || error;
  
  return (
    <div className={""}>
      {showSpinner ? (
        <>
          <Container
            contaimaxWidth="md"
            sx={{
              padding: "32px 16px",
              boxShadow: "0px -2px 4px 0px rgba(0, 0, 0, 0.25) inset",
              borderRadius: 4,
              marginTop: "16px",
              backgroundColor: "#F8F6F4",
              minHeight: "80vh",
              display: "flex",
              alignItems: "center",
            }}
          >
            <CircularProgress className={classes.spinner} size={60} />
          </Container>
        </>
      ) : (
        <>
          <Container
            contaimaxWidth="md"
            sx={{
              padding: "32px 16px",
              boxShadow: "0px -2px 4px 0px rgba(0, 0, 0, 0.25) inset",
              borderRadius: 4,
              marginTop: "16px",
              backgroundColor: "#F8F6F4",
            }}
          >
            <Typography variant="h4" sx={{ marginBottom: "32px" }}>
              {movieData?.Title}
            </Typography>
            <Grid container>
              <Grid item sm={6}>
                <div>
                  <img
                    className={classes.thumbImage}
                    src={movieData?.Poster}
                    alt={`${movieData?.Title} Poster`}
                  />
                </div>
              </Grid>
              <Grid item sm={6}>
                <ul className={classes.infoList}>
                  <li className={classes.listItem}>
                    <Typography component="h6">
                      <strong style={{ marginRight: "6px" }}>
                        {"BoxOffice"}:
                      </strong>
                      {movieData?.BoxOffice || "There is no information"}
                    </Typography>
                  </li>
                  <li className={classes.listItem}>
                    <Typography component="h6">
                      <strong style={{ marginRight: "6px" }}>{"Genre"}:</strong>
                      {movieData?.Genre || "There is no information"}
                    </Typography>
                  </li>
                  <li className={classes.listItem}>
                    <Typography component="h6">
                      <strong style={{ marginRight: "6px" }}>
                        {"Director"}:
                      </strong>
                      {movieData?.Director || "There is no information"}
                    </Typography>
                  </li>
                  <li className={classes.listItem}>
                    <Typography component="h6">
                      <strong style={{ marginRight: "6px" }}>
                        {"Released"}:
                      </strong>
                      {movieData?.Released || "There is no information"}
                    </Typography>
                  </li>
                  <li className={classes.listItem}>
                    <Typography component="h6">
                      <strong style={{ marginRight: "6px" }}>
                        {"IMDB Rating"}:
                      </strong>
                      {movieData?.imdbRating || "There is no information"}
                    </Typography>
                  </li>
                  <li className={classes.listItem}>
                    <Typography component="h6">
                      <strong style={{ marginRight: "6px" }}>
                        {"IMDB Votes"}:
                      </strong>
                      {movieData?.imdbVotes || "There is no information"}
                    </Typography>
                  </li>
                  <li className={classes.listItem}>
                    <Typography component="h6">
                      <strong style={{ marginRight: "6px" }}>{"Type"}:</strong>
                      {movieData?.Type || "There is no information"}
                    </Typography>
                  </li>
                  <li className={classes.listItem}>
                    <Typography component="h6">
                      <strong style={{ marginRight: "6px" }}>
                        {"Country"}:
                      </strong>
                      {movieData?.Country || "There is no information"}
                    </Typography>
                  </li>
                  <li className={classes.listItem}>
                    <Typography component="h6">
                      <strong style={{ marginRight: "6px" }}>
                        {"Overview"}:
                      </strong>
                      {movieData?.Plot || "There is no information"}
                    </Typography>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </div>
  );
};

const useStyles = makeStyles()(() => ({
  conteiner: {
    textAlign: "center",
    padding: "180px 180px",
  },
  thumbImage: {
    width: "100%",
    height: "auto",
    aspectRatio: "1 / 1",
    objectFit: "contain",
  },
  spinner: {
    margin: "auto",
    display: "block",
  },
  infoList: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  listItem: {
    listStyle: "none",
  },
}));

export default DetailPage;
