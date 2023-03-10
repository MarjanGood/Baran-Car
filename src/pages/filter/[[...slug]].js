import carsData from "../../data/carsData";
import { useRouter } from "next/router";
import CarsList from "../../components/templates/CarsList";

function FilteredCars() {
    const router = useRouter();
    const[min,max] =router.query.slug || [];
    const filteredData = carsData.filter(item=> item.price > min && item.price < max);
    if(!filteredData.length) return <h3>NouFound</h3>;

    return (<CarsList data={filteredData}></CarsList>
    );
}

export default FilteredCars;