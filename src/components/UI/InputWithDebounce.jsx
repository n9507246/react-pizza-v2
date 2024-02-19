import { useEffect, useState } from 'react'

export default (props) => {


  const setValue = props.setValue ? props.setValue : () => {
    console.error('component <InputWithDebounce/> must have props.setValue for change params.')
  }

    const [query, setQuery] = useState("");
    useEffect(() => {
      const timeOutId = setTimeout(() => setValue(query), props.debouce);
      return () => clearTimeout(timeOutId);
    }, [query]);

    

    return (
      <input placeholder="Поиск пиццы..." onChange={event => setQuery(event.target.value)} />
    )
}