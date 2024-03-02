
import DisplayItems from "./components/DiplayItems";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {

    const item = useSelector((store) => store.items)

    return <div className="items-container">
        {item.map((item) => (<DisplayItems key={item.id} item={item}></DisplayItems>))}
    </div>
}

export default Home;