import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductPage.css'
import Aos from 'aos'
import "aos/dist/aos.css"



export default function ProductPage({data}) {

    const { id } = useParams()
    const [prod,setProd] = useState(null)


    useEffect(() => {
        Aos.init({ duration: 1000 });

        try {
            fetch('https://fwpserver.azurewebsites.net/productpage/'+id)
            .then(res=>res.json())
            .then(results => setProd(results))
            .catch(err => console.log(err)) 
        } catch (err) {
            console.log(err)
        }

    },[])




    return (
        <>
            {prod &&
                <div className='productpage'>
                    <img id='productpagegradient' src="/productpagebackground.jpg" alt=''></img>
                    <div data-aos='zoom-in-right' ><img className='productimage' src={prod.img1} alt=''></img></div>

                    <div data-aos='zoom-in-left' className='productpagedoc'>

                        <div className='productpageheading'>
                            <center><u><h1>{prod.name}</h1></u></center>
                        </div>
                        <div>
                            <table className='productpagetable'>
                                <tr>
                                    <td width='300px' height='50px'>MRP</td>
                                    <td width='300px'>Rs. {prod.mrp}</td>

                                </tr>
                                <tr>
                                    <td height='50px'>Quantity</td>
                                    <td>{prod.weight} kg</td>

                                </tr>
                                <tr>
                                    <td height='50px'>Manufacturer</td>
                                    <td>{prod.manufacturer}</td>

                                </tr>
                            </table>
                        </div>
                        <div className='productpagedescription'>
                            <h2 style={{ fontFamily: "Arial" }}><b><u>Description</u></b></h2>
                            <p>{prod.description}</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
