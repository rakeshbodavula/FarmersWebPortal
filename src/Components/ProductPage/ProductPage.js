import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import './ProductPage.css'

const ProductPage = () => {
    // const [prod, setProd] = useState(null)
    const { data, isPending, error } = useFetch('http://localhost:2020/products')
    const { id } = useParams()
    let prod = null
    if (data) {
        prod = data.filter(x => x._id == id)
        prod = prod[0]
    }

    return (
        <div className="product_page_body">
            {prod &&
                <div>
                    <div className="product_page_heading">
                        <h1 align="center"><u>{prod.name}</u></h1>
                    </div>

                    <div className="top-div">
                        <div className="top-left">
                            <img src={prod.img1} width="450" height="430" />
                        </div>
                        <div className="top-right">
                            <h2><b><u>Description</u></b></h2><br />
                            <p>{prod.description}</p>
                        </div>
                    </div>

                    <div className="down-div">
                        <div className="down-left">
                            <div className="keys">
                                <h2>
                                    <b>
                                        MRP<br /><br />
                                        Quantity<br /><br />
                                        Crop<br /><br />
                                        Manufacturer<br /><br />
                                        Expiry<br /><br />
                                    </b>
                                </h2>
                            </div>
                            <div className="colon">
                                <h2><br />
                                    :<br /><br />
                                    :<br /><br />
                                    :<br /><br />
                                    :<br /><br />
                                    :<br /><br />
                                </h2>
                            </div>
                            <div className="values">
                                <h2>
                                    {prod.mrp}<br /><br />
                                    {prod.weight}<br /><br />
                                    {prod.name}<br /><br />
                                    {prod.manufacturer}<br /><br />
                                    {prod.expiry}<br /><br />
                                </h2>
                            </div>
                        </div>
                        <div className="down-right">
                            <img src={prod.img2} width="450" height="430" />
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default ProductPage;