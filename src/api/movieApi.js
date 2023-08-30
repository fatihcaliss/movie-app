// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";

// const URL = process.env.REACT_APP_BASE_URL;

// async function fetchMovies() {
//   try {
//     const response = await axios.get(
//       "http://www.omdbapi.com/?apikey=4c00ba85&s=Pokemon"
//     );
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// }

// export const useFetchMoviesQuery = ({
//   options = {},
//   filterParams = {},
//   paginationModel,
// }) => {
//   let isValueEmpty = false;
//   if (filterParams.length > 0) {
//     filterParams.forEach((opt) => {
//       if (!Object.hasOwn(opt, "value")) isValueEmpty = true;
//     });
//   }
//   return useQuery({
//     queryKey: ["movieList", filterParams, paginationModel],
//     queryFn: () => getAdminListings(filterParams, paginationModel),
//     refetchOnWindowFocus: true,
//     enabled: !isValueEmpty,
//     ...options,
//   });
// };

// const getAdminListings = (filterParams, paginationModel) => {
//     const params = getListingsFilterParams({
//       filters: filterParams
//     })
  
//     params.page = paginationModel.page + 1
//     params.per_page = paginationModel.pageSize
  
//     return axios.get(`${URL}` + queryMaker(params))
//   } 

// import { useQuery } from '@tanstack/react-query'
// import { queryMaker } from '@common/cross-platform'
// import { fazlaMarketAPI } from './axiosInstance'

// export const useShippingPricingQuery = ({ selectedOptions, options = {} }) => {
//   return useQuery({
//     queryKey: ['shippingPricing', selectedOptions],
//     queryFn: () => {
//       let filters = {}
//       if (selectedOptions.from) filters = { ...filters, from: selectedOptions.from }
//       if (selectedOptions.to) filters = { ...filters, to: selectedOptions.to }
//       return fazlaMarketAPI.get(
//         `api/market/v3/admin/shipping_pricings` + queryMaker(filters)
//       )
//     },
//     ...options
//   })
// }

// export const useDropdownCitiesQuery = ({ options = {} }) => {
//   return useQuery({
//     queryKey: ['useDropdownCitiesQuery'],
//     queryFn: () => fazlaMarketAPI.get(`api/v1/addresses/cities`),
//     ...options
//   })
// }

// export const useDropdownProvincesQuery = ({ options = {} }) => {
//   return useQuery({
//     queryKey: ['useDropdownProvincesQuery'],
//     queryFn: () => fazlaMarketAPI.get(`api/v1/addresses/provinces`),
//     ...options
//   })
// }
