export const getMoviesFilterParams = ({ filters }) => {
  const params = {};
  filters.map((filteredField) => {
    const { field, value } = filteredField;
    if (!value) return;

    if (field === "Title") return (params["s"] = value);
    if (field === "Year") return (params["y"] = value);

    return (params[field] = value);
  });
  return params;
};
