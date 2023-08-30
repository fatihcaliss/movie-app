import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useCallback, useState } from "react";
import { getMoviesFilterParams } from "../utils/getMoviesFilterParams";
import queryMaker from "../utils/queryMaker";
import { makeStyles } from "tss-react/mui";
import LinearProgress from "@mui/material/LinearProgress";
import { Link } from "react-router-dom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const URL = process.env.REACT_APP_BASE_URL;

// console.log(URL);

function MovieDataGrid({ debouncedSearchingValue }) {
  const { classes } = useStyles();
  const [queryOptions, setQueryOptions] = useState([]);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });

  async function fetchMovies(
    queryOptions,
    paginationModel,
    debouncedSearchingValue
  ) {
    const params = getMoviesFilterParams({
      filters: queryOptions,
    });

    params.page = paginationModel.page + 1;
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=4c00ba85&s=${debouncedSearchingValue}` +
          queryMaker(params)
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  }
  const {
    data: movies,
    isFetching,
    isInitialLoading,
  } = useQuery({
    queryKey: [
      "movieList",
      queryOptions,
      paginationModel,
      debouncedSearchingValue,
    ],
    queryFn: () =>
      fetchMovies(queryOptions, paginationModel, debouncedSearchingValue),
    enabled: !!debouncedSearchingValue,
  });

  const rows = movies?.data?.Search || [];
  const rowCount = movies?.data?.totalResults || 0;

  const columns = [
    {
      field: "show",
      headerName: "",
      sortable: false,
      groupable: false,
      filterable: false,
      disableExport: true,
      renderCell: ({ row }) => {
        return row.imdbID ? (
          <Link
            //   target='_blank'
            to={`/${row.imdbID}`}
            aria-label="navigate to detail page"
            style={{ textDecoration: "none", display: "flex" }}
          >
            <OpenInNewIcon />
          </Link>
        ) : null;
      },
    },
    { field: "Title", headerName: "Title", flex: 1, filterable: false },
    { field: "Year", headerName: "Year", flex: 1 },
    {
      field: "Type",
      headerName: "Type",
      flex: 1,
      type: "singleSelect",
      valueOptions: ["movie", "series", "episode"].map((item) => ({
        value: item,
        label: item,
      })),
    },
    { field: "imdbID", headerName: "imdbID", flex: 0.5, filterable: false },
  ];

  const onFilterChange = useCallback((filterModel) => {
    setQueryOptions(filterModel.items);
  }, []);

  return (
    <div className={classes.wrapper}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        getRowId={(row) => row.imdbID}
        loading={isFetching}
        paginationMode="server"
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[10]}
        slots={{ toolbar: GridToolbar, loadingOverlay: LinearProgress }}
        filterMode="server"
        onFilterModelChange={onFilterChange}
        rowCount={rowCount}
        classes={{
          overlayWrapper:
            isInitialLoading || rowCount === 0 ? classes.overlayWrapper : null,
        }}
      />
    </div>
  );
}
const useStyles = makeStyles()(() => ({
  wrapper: {
    minHeight: "20vh",
    padding: '16px 0px 16px 0px',
    ".MuiDataGrid-overlay": {
      minHeight: "20vh",
    },
  },
  overlayWrapper: {
    minHeight: "20vh",
  },
}));

export default MovieDataGrid;
