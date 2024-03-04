import classes from './style.module.scss'
import InputWithDebounce from '../UI/InputWithDebounce';
import useCustomFilter from '@hooks/useCustomFilter';

export default (props) => {

    const filter = useCustomFilter()
    const {search} = filter.getAllParams()

    return (
        <div className={props.className}>
            <div className={classes.root}  >
                
                <svg xmlns="http://www.w3.org/2000/svg" width='16px' height="16px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    < path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                
                <InputWithDebounce 
                    currentValue={search}
                    setValue={
                        (value) => value  ? 
                            filter.add({search: value} ) : filter.delete({name:'search'})
                    } 
                    debouce={500} 
                />

            </div>
        </div>
    )
}