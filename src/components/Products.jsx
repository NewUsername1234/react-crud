import { ListItem } from './ListItem';

const products = [
    {
        "articleNo": "pc-0001",
        "name": "Dell PC 2021",
        "description": "super-fast and not-so-reliable machine that takes care of your daily dosis of crashes",
        "price": 899.99
    },
    {
        "articleNo": "hw-0002",
        "name": "Lenovo ThinkPad",
        "description": "high-end-business notebook for the power-user who does not need a working computer at all",
        "price": 1295.95
    },
    {
        "articleNo": "hw-0003",
        "name": "MacBook Pro",
        "description": "beautifully designed, pricey aluminum block. comes with an apple sticker for your car!",
        "price": 3299.95
    },
    {
        "articleNo": "hw-0004",
        "name": "HP Spectre Convertible",
        "description": "extremely performant notebook that converts to a bulky tablet for users with strong arms and huge hands",
        "price": 1800
    }
]

export const Products = (props) =>
    <div id='products' className='w-75 mx-auto mt-3 mb-5'>
        <h2 className='text-center'>{props.headline}</h2>
        <table className='table table-dark table-striped'>
            <thead>
                <tr>
                    <th>Number</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => <ListItem item={product} />)}
            </tbody>
        </table>

        {/*  <ul className='list-group list-unstyled'>
              <li className='mb-3 border-bottom border-dark'>
                <div class="row w-100 m-0">
                    <div class="col-2"> Article Number </div>
                    <div class="col-2"> Name </div>
                    <div class="col-7"> Description </div>
                    <div class="col-1"> Price </div>
                </div>
            </li> 
            {products.map(product => <ListItem item={product} />)}
        </ul> */}
    </div>