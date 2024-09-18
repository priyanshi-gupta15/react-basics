import { useEffect } from "react";
import { useSelector ,useDispatch } from "react-redux";

import { itemsAction } from "../store/itemsSlice";
//import {fetchStatusActions} from "../store/fetchStatusSlice";

const FetchItems = () =>{
    const fetchStatus = useSelector((store) => store.fetchStatus);
    const dispatch = useDispatch();
    // console.log(fetchStatus);

    useEffect(() => {
        if(fetchStatus.fetchDone) return;

        
       //dispatch(fetchStatusActions.markFetchingStarted());
        fetch("http://localhost:8080/items")
          .then((res) => res.json())
          .then(({items}) => {
          // dispatch(fetchStatusActions.markFetchDone());
           // dispatch(fetchStatusActions.markFetchingfinished());
            dispatch(itemsAction.addInitialItems(items[0]));
           
          });

      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [fetchStatus]);

    return(
        <>
        <div>

        </div>
        </>
    )
}

export default FetchItems;