import { newService } from "../assets/Data";
import Gallery from './Gallery';
   
  const Services2 = () => {
    return (
        <div >
          {
            newService.map((data) => <Gallery categories={data.categories}/>)
          }   
      </div>
    );
  }

  export default Services2;