import MySelect from "@UI/MySelect"


export default function PizzaTypes ({types}) {

    const listNamesTypes = ['тонкое', 'традицинное']
    
    const variatsTypes = types.map(
        (typeNumber, index ) => { 
            return { name:listNamesTypes[typeNumber], id:index } 
        }
    )

    return <MySelect variants={variatsTypes}/>
}
