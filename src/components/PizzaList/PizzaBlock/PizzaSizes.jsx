import MySelect from "@UI/MySelect"

export default function PizzaSizes ({sizes}){
    const variantsSizes = sizes.map((size, index)=>{ return {name:`${size} см.`, id:index}})
    return <MySelect variants={variantsSizes}/>
}