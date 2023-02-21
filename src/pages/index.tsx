import carsData from '../data/carsData'
import CarsPage from '../components/templates/CarsPage';
import Categories from '../components/module/Categories';
import SearchBar from '../components/module/SearchBar';
import AllButton from "../components/module/AllButton"

export default function Home() {
  const cars= carsData.slice(0,3);
  return (
    <>
      <SearchBar></SearchBar>
      <Categories></Categories>
      <AllButton></AllButton>
      <CarsPage data={cars}></CarsPage>
    </>
  )
}
