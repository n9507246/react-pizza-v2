import ReactPaginate from 'react-paginate';
import classes from './paginator.module.scss'
import useCustomFilter from '@hooks/useCustomFilter';

export default function Paginator(props){

    const filter = useCustomFilter()

    return(
        <div className={props.className}>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={(e) => {
                    filter.add({page:e.selected + 1, limit:8})
                }}
                pageRangeDisplayed={5}
                pageCount={3}
                previousLabel="<"
                renderOnZeroPageCount={null}

                className={classes.root}
                pageClassName={classes.pageClassName}
                nextClassName={classes.nextClassName}
                previousClassName={classes.previousClassName}
                activeClassName={classes.activeClassName}
                disabledClassName={classes.disabledClassName}
            />
      </div>
    )
}