import carsData from '../../data/carsData'
import CarsPage from '../../components/templates/CarsPage';
import Categories from '../../components/module/Categories';

function Details(){
    return(
    <div>
      <Categories></Categories>
      <CarsPage data={carsData}></CarsPage>
    </div>
        )  
}
export default Details;