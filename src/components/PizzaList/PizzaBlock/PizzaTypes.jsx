import MySelect from "@UI/MySelect"


export default function PizzaTypes ({types}) {

    const variatsTypes = types.map(
        (type, index ) => { 
            return { name:type, id:index } 
        }
    )

    return <MySelect variants={variatsTypes}/>
}
