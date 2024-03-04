import { useSearchParams } from 'react-router-dom';



export default function(){
    
    const [searchParams, setSearchParams] = useSearchParams()
    
    const customSearchParams = {}
    
    customSearchParams.getAll = function() {
        
        const currentSearchParams = {}

        for (let entry of searchParams.entries())  
            currentSearchParams[entry[0]] = entry[1]

        return currentSearchParams
    }

    customSearchParams.add = function(newSeachParam={}){
        const currentSearchParams = this.getAll()
        setSearchParams({...currentSearchParams, ...newSeachParam})
    }   

    customSearchParams.delete = function({name}){
        const currentSearchParam = this.getAll()
        const newSearchParams = {}
        for (let nameSearchParam in currentSearchParam ){
            console.log(nameSearchParam, name, nameSearchParam === name  )
            if (nameSearchParam !== name ) newSearchParams[nameSearchParam]  = currentSearchParam[nameSearchParam]
        }
        setSearchParams({...newSearchParams})

    }

    customSearchParams.getAllParams = function (){
        return this.getAll()
    }

    return customSearchParams  
}