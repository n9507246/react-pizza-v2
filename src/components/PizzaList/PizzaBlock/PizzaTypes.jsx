import CustomSelect from "@UI/CustomSelect"



export default function PizzaTypes ({types,currentType,setType}) {

    return(  
        <CustomSelect 
            listOfVariants={types} 
            currentVariant={currentType}
            setVariant={setType}
        />
    )
}
