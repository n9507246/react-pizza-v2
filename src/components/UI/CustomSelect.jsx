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
            <li className='active'>vatiant2</li>
            <li>vatiant3</li>
        </ul>
        
        По умолчанию className='active' первый <li>.
        На каждом <li> весит слушатель события нажатия который 
        переключает класс active на нажатый элемент.

*/


function Vatiant(props){
    // console.log('currentVariant',props)
    // console.log('setVariant',setVariant)
    const selectVariant = (props) => {
        // console.log('p', {name:props.variant.name, id:props.variant.id})
        
        if(props.selectVariant) props.selectVariant(props.variant)
        else console.error("Error component </CustomSelect>. Define props setVariant for change current variant.")
    }

    return(
        <li 
            onClick={()=>{selectVariant(props)}} 
            className={props.isSelect === true ? 'active' : ''}
        >
            {props.variant.name}
        </li>
    )
}

export default function CustomSelect({listOfVariants, currentVariant=listOfVariants[0], setVariant}){

    return(
        <ul>
            {
                listOfVariants.map((variant, index) =>
                    <Vatiant 
                        variant={variant}
                        isSelect={currentVariant.name === variant.name}
                        selectVariant={setVariant}
                        key={variant.id} />
                )
            }
        </ul>
    )
}