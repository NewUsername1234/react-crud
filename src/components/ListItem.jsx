export const ListItem = props =>
    <tr>
        <td>{props.item.articleNo}</td>
        <td>{props.item.name}</td>
        <td>{props.item.description}</td>
        <td>{props.item.price}</td>
    </tr>

/* export const ListItem = props =>
    <li className='list-item'>
        <div class="row border-bottom m-0 w-100">
            <div class="col-2"> {props.item.articleNo} </div>
            <div class="col-2"> {props.item.name} </div>
            <div class="col-7"> {props.item.description} </div>
            <div class="col-1"> {props.item.price} </div>
        </div>
    </li> */
