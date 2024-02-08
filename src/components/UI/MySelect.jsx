import { useState } from "react"

/*

    ИСПОЛЬЗОВАТЬ ТАК:
        <MySelect variats={
            [
                {name:variant1, id: 1},
                {name:variant2, id: 666},
                {name:variant3, id: 777},
            ]
            initialVariant = 2
        } />

        <ul>
            <li>vatiant1</li>
            <li class='active'>vatiant2</li>
            <li>vatiant3</li>
        </ul>
        
        По умолчанию class='active' первый <li>.
        На каждом <li> весит слушатель события нажатия который 
        переключает класс active на нажатый элемент.

*/


function Vatiant(props){
    return(
        <li 
            onClick={()=>{props.selectVariant(props.name)}} 
            className={props.isSelect === true ? 'active' : ''}
        >
            {props.name}
        </li>
    )
}

export default function MySelect({variants, initialVariant=1}){
    const [selectedVariant, setSelectedVariant ] = useState(variants[initialVariant-1].name)
    return(
        <ul>
            {
                variants.map((variant, index) =>
                    <Vatiant name={variant.name}
                        isSelect={selectedVariant === variant.name}
                        selectVariant={setSelectedVariant}
                        key={variant.id ? index : variant.id} />
                )
            }
        </ul>
    )
}