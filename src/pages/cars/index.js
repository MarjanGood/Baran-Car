import carsData from '../../data/carsData'
import CarsPage from '../../components/templates/CarsPage';
import Categories from '../../components/module/Categories';
import SearchBar from '../../components/module/SearchBar';

function Details(){
    return(
    <div>
      <SearchBar></SearchBar>
      <Categories></Categories>
      <CarsPage data={carsData}></CarsPage>
    </div>
        )  
}
export default Details;