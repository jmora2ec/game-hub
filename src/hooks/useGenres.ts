import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

//using api
//const useGenres = () => useData<Genre>("/genres");

//using static data, wrap in () for return object or use return{} inside {} wrap
const useGenres = () => ({ data: genres, isloading: false, error: null });

export default useGenres;
