## :point_right: [Click here to see on browser](https://movie-app-ia-project.vercel.app/)

## Preview:
</br>

![animation](https://github.com/fatihcaliss/movie-app/blob/main/demo-preview.gif?raw=true)

## Movie-App-IA

### Installation

Clone the project to your local machine:</br>
```git clone https://github.com/fatihcaliss/movie-app.git``` </br>
```cd movie-app``` </br>
```npm install```</br>
```npm start```</br><br/>
In this project;<br/>

📌  Omdbapi’s API(https://www.omdbapi.com/) used for data. <br/>
📌 Axios used to get movies/series data info from omdbapi’s API.<br/>
📌 <b>Material UI</b> used for styling.<br/>
📌 For Stage management <b>TanStack Query</b> used. <br/>
📌 <b> React-router-dom</b> used for routing. There are two pages. One of them is Home page which lists 10 movies/series for your search. Default search value is `Pokemon` <br/>
📌 On Home page,  <b> mui x-data-grid</b> used for listing and pagination of movies/series data./<br/>
📌For filter<b> mui x-data-grid</b>  table, created a util function named `getMoviesFilterParams`. User filter options are, year and type.<br/>
📌 For Search input, created a util debounce function that limits per request with 1 sec.<br/>
📌 The other page is Movie Detail page. This page contains the poster on left column. In second section, there are informations about the movie or series.<br/>
📌 The toolbar can be used to edit visiualization of the table as can be seen in the preview. The toolbar can also be used for exporting data to CSV format/<br/>



