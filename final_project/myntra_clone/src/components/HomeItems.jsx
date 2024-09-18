/* eslint-disable react/prop-types */

import { useDispatch ,useSelector} from "react-redux";
import { bagActions } from "../store/bagSlice";
import { CirclePlus,Trash } from "lucide-react";

//error
const HomeItems = ({item}) => {
 const dispatch =useDispatch();

 const bagItems = useSelector(store => store.bag);
 const elementFound = bagItems.indexOf(item.id) >= 0;
 console.log(elementFound);
 

  const handleAddToBag = () =>{
    dispatch(bagActions.addToBag(item.id));
  }
  const handleRemove = () =>{
    dispatch(bagActions.removeFromBag(item.id));
  }
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>

        {elementFound ? 
         <button className="  btn-add-bag color-rem" onClick={handleRemove}>
         <Trash />
         Remove
         </button>:
        <button className="btn-add-bag color-add" onClick={handleAddToBag}>
        <CirclePlus/>
          Add to Bag
        </button>
        
       
}
      </div>
    </>
  );
};

export default HomeItems;