import CustomSelect from "@UI/CustomSelect"



export default function PizzaSizes ({sizes,currentSize,setSize}){

    const normalizeSizes = []
    for (let numberSize in sizes ) 
        normalizeSizes.push( { ...sizes[numberSize], name:`${sizes[numberSize].value} см.` } )

    const normalizeCurrentSize = {...currentSize, name:`${currentSize.value} см.`}

    return(  
        <CustomSelect 
            listOfVariants={normalizeSizes} 
            currentVariant={normalizeCurrentSize}
            setVariant={setSize}
        />
    )
}