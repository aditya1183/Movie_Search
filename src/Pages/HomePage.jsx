
import axios from 'axios';
import Searchform from "../Components/Searchform";
import MovieList from "../Components/MovieList"

import {apiKey} from '../constants';
import { useLoaderData } from 'react-router-dom';

export   async function loader({request}){
 const url= new URL(request.url);
 const Searchterm=url.searchParams.get("search") || "one piece" ;


 try {
  const MovieSearchendPoint=`https://www.omdbapi.com/?apikey=${apiKey}&s=${Searchterm}`
  const responce =await  axios.get(MovieSearchendPoint);
  return {movieapiResponce:responce.data ,Searchterm:Searchterm  , isError:false , error:""};

  
 } catch (error) {
  const errormessage=error?.response?.data?.Error || error.message || "Something went wrong ..."
  return {movieapiResponce:null ,Searchterm:Searchterm  , isError:true , error:errormessage};
  
 }
 
}

function HomePage() {
  const data=useLoaderData();
  

  return (
    <div>
      
      <Searchform Searchterm={data.Searchterm}/>
      <MovieList data={data}/>
    </div>
  )
}

export default HomePage