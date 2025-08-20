import IndividualBlogPage from "@/containers/IndividualBlogPage/IndividualBlogPage";
import { getData } from "@/functions/getData";
import { api_Urls } from "@/lib/apiUrls";
import { baseUrl } from "@/lib/constants";
import React from "react";

const INDIVIDUALBLOGROUTE = async ({ params }) => {
  const id = (await params)?.id;
  // console.log('-------id',id);
  const data= await getData(`${baseUrl}${api_Urls.GET_INDIVIDUAL_BLOG}${id}`)
  
  return <IndividualBlogPage data={data} />;
};

export default INDIVIDUALBLOGROUTE;
