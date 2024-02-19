import ReactPaginate from 'react-paginate';
import classes from './paginator.module.scss'

export default function Paginator(props){
    return(
        <div {...props}>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={()=>{}}
                pageRangeDisplayed={5}
                pageCount={5}
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