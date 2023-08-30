import isObjectEmpty from "../isObjectEmpty";

const queryMaker = (params) => {
  if (isObjectEmpty(params)) return "";

  let keys = Object.keys(params),
    query = "",
    first = keys.shift();

  query += '&' + first + "=" + params[first];

  keys.forEach((key) => {
    if (params[key] !== "") query += "&" + key + "=" + params[key];
  });
  return query;
};

export default queryMaker;
