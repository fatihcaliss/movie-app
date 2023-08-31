import { useState } from "react";
import MovieDataGrid from "../components/MovieDataGrid";
import TextField from "@mui/material/TextField";
import { Container, Typography } from "@mui/material";
import { debounce } from "../utils/debounce";

function HomePage() {
  const [debouncedSearchingValue, setDebouncedSearchingValue] =
    useState("Pokemon");

  const onChange = (e) => updateDebounceText(e.target.value);

  const updateDebounceText = debounce((text) => {
    setDebouncedSearchingValue(text);
  });

  return (
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
      <Typography variant="h4">Welcome To Movie App</Typography>
      <TextField
        id="outlined-basic"
        autoFocus={true}
        label={"Enter A Value For Search"}
        variant="outlined"
        onChange={onChange}
        defaultValue={"Pokemon"}
        sx={{ marginTop: "32px" }}
      />
      <MovieDataGrid debouncedSearchingValue={debouncedSearchingValue} />
    </Container>
  );
}

export default HomePage;
