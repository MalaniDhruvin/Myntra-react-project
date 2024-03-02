import { useSelector, useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";
const DisplayItems = ({ item }) => {
    const bagId = useSelector(store => store.bag);
    const dispatch = useDispatch();
    const elementFound = bagId.indexOf(item.id) >= 0;
    const hundleaddbutton = () => {
        dispatch(bagActions.addItemsid(item.id));
    }
    const hundleremovebutton = () => {
        dispatch(bagActions.removeItemsid(item.id))
    }
    return (
        <div class="item-container">
            <img class="item-image" src={item.image} alt="item image" />
            <div class="rating">
                {item.rating.stars} ⭐ | {item.rating.count}
            </div>
            <div class="company-name">{item.company}</div>
            <div class="item-name">{item.item_name}</div>
            <div class="price">
                <span class="current-price">Rs {item.current_price}</span>
                <span class="original-price">Rs {item.original_price}</span>
                <span class="discount">({item.discount_percentage}% OFF)</span>
            </div>
            {elementFound ?
                <button type="button" class="btn btn-danger btn-add-bag" onClick={hundleremovebutton}>Remove</button>
                :
                <button type="button" class="btn btn-success btn-add-bag" onClick={hundleaddbutton}>Add to Bag</button>
            }



        </div>
    );
}

export default DisplayItems;