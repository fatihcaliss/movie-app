import { useState } from "react";
import "./App.css";
import MovieDataGrid from "./components/MovieDataGrid";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TextField from "@mui/material/TextField";
import { makeStyles } from "tss-react/mui";
import { Typography } from "@mui/material";
import { debounce } from "./utils/debounce";

function App() {
  const { classes } = useStyles();
  const [debouncedSearchingValue, setDebouncedSearchingValue] =
    useState("Pokemon");

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  const onChange = (e) => updateDebounceText(e.target.value);

  const updateDebounceText = debounce((text) => {
    setDebouncedSearchingValue(text);
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className={classes.mainContainer}>
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
      </div>
    </QueryClientProvider>
  );
}

const useStyles = makeStyles()(() => ({
  mainContainer: {
    margin: 0,
    padding: 20,
  },
}));

export default App;
