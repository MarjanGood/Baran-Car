
import {useRouter} from "next/router";
import CarDetails from "../../components/templates/CarDetails";
import carsData from "../../data/carsData";

function CarDetail(){

    const router = useRouter();
    const { carId } = router.query; //destructuring

    console.log(carId);
    const carDetails = carsData[carId-1];

    console.log(carDetails);
    return <CarDetails {...carDetails}></CarDetails>

}
export default CarDetail;