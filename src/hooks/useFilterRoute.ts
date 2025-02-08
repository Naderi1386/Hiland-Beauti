import { useSearchParams } from "react-router-dom";

export const useFilterRoute=()=>{
     const [searchParams, setSearchParams] = useSearchParams();
     const filterRoute = (name: string,value:string) => {
       searchParams.set(name, value);
       setSearchParams(searchParams);
       
     };
     return {filterRoute,searchParams,setSearchParams}
}