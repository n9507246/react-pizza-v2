
import { useDispatch, useSelector } from "react-redux";
import { changeSortVarian } from "@redux-slices/filterSlice";
import SortSelector from "./SortSelector";
import SortOptions from "./SortOptions";

export default function Sort(props) {

    const {sort} = useSelector(store => store.filter)
    const dispatch = useDispatch()
    const setSort = (variant) => {dispatch(changeSortVarian(variant))}
    
    return(
        <SortSelector {...props} selectedSort={sort.currentVariant}>
            <SortOptions 
                sortBy={sort.variants}
                selectedSort={sort.currentVariant}
                setSort={setSort}
            />
        </SortSelector>

    )
}