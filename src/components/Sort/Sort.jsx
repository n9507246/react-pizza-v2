
import { useSelector } from "react-redux";
import SortSelector from "./SortSelector";
import SortOptions from "./SortOptions";
import useCustomFilter from "@hooks/useCustomFilter";

export default function Sort(props) {

    const {sort} = useSelector(store => store.filter)
    const filter = useCustomFilter()
    const {sortBy, order} = filter.getAllParams()

    const setSort = (variant) => {
        filter.add({
            sortBy: variant.sort,
            order: variant.direction
        })
    }
    
    return(
        <SortSelector {...props} 
            selectedSort={
                sort.variants.filter(
                    (param)=> param.sort === sortBy && param.direction === order
                )[0] || sort.variants[0]
            }
        >
            <SortOptions 
                sortBy={sort.variants}
                selectedSort={
                    sort.variants.filter(
                        (param)=> param.sort === sortBy && param.direction === order
                    )[0] || sort.variants[0]
                }
                setSort={setSort}
            />
        </SortSelector>

    )
}