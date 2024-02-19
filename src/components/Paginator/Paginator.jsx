import ReactPaginate from 'react-paginate';
import classes from './paginator.module.scss'

export default function Paginator(props){
    return(
        <div className={props.className}>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={(e) => {props.setPage(e.selected + 1)}}
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