import axios from 'axios';

export default axios.create({baseURL:'https://api.rawg.io/api',params:{'key':'8ac1812967264d139ae70daa96f4428f',}
    
})

//from axio documentation
  // `params` are the URL parameters to be sent with the request
  // Must be a plain object or a URLSearchParams object
  // NOTE: params that are null or undefined are not rendered in the URL.