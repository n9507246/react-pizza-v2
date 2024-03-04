import { useState } from "react"
import SvgArrow from "./SvgArrov"

export default function SortSelector({ selectedSort, children ,className }){
    
    const [openOptions, setOpenOptions ] = useState(false)
    const props_className = className
    
    return(
        <div onClick={() => setOpenOptions(!openOptions)} className="sort">
            <div className={'sort__label' + ` ${props_className}` }>
                <SvgArrow isOpen={openOptions}/>
                <b>Показать:</b>
                <span>{selectedSort.name}</span>
            </div>
                { openOptions && children }
        </div>
    )
}