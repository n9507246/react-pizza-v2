import { useState } from "react"

/*

    ИСПОЛЬЗОВАТЬ ТАК:

    let listOfVariants = [
        {name:variant1, id: 1},
        {name:variant2, id: 666},
        {name:variant3, id: 777},
    ]

    const [vatiant, setVatiant] = useState(listOfVariants[1])
        
        <MySelect 
            variats={ listOfVariants } 
            currentVariant={ vatiant } 
            setVariant={ setVatiant } 
        />

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
    
    const selectVariant = (props) => {
        if(props.selectVariant) props.selectVariant({name:props.name, id:props.id})
        else console.error("Error component </CustomSelect>. Define props setVariant for change current variant.")
    }

    return(
        <li 
            onClick={()=>{selectVariant(props)}} 
            className={props.isSelect === true ? 'active' : ''}
        >
            {props.name}
        </li>
    )
}

export default function CustomSelect({listOfVariants, currentVariant=listOfVariants[0], setVariant}){
    return(
        <ul>
            {
                listOfVariants.map((variant, index) =>
                    <Vatiant name={variant.name}
                        isSelect={currentVariant.name === variant.name}
                        selectVariant={setVariant}
                        key={variant.id} />
                )
            }
        </ul>
    )
}