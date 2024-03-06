import CustomSelect from "@UI/CustomSelect"



export default function PizzaSizes ({sizes,currentSize,setSize}){

    const normalizeSizes = []
    for (let numberSize in sizes ) 
        normalizeSizes.push( { ...sizes[numberSize], name:sizes[numberSize].value } )

    const normalizeCurrentSize = {...currentSize, name:currentSize.value}

    return(  
        <CustomSelect 
            listOfVariants={normalizeSizes} 
            currentVariant={normalizeCurrentSize}
            setVariant={setSize}
        />
    )
}