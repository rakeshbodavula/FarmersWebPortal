import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './CropPage.css'
import Aos from 'aos'
import "aos/dist/aos.css"

export default function CropPage({ data }) {
    const { id } = useParams()

    const [prod,setProd] = useState(null)

    useEffect(() => {
        Aos.init({ duration: 1000 });

        try {
            fetch('https://fwp.onrender.com/croppage/'+id)
            .then(res=>res.json())
            .then(results => setProd(results))
            .catch(err => console.log(err)) 
        } catch (err) {
            console.log(err)
        }
    }, [])



    return (
        <>
            {prod &&
                <div className='croppage'>
                    <img id='croppagegradient' src="/croppagebackground.webp" alt=''></img>
                    <div prod-aos="zoom-in-right"><img className='cropimage' src={prod.img} alt=''></img></div>

                    <div prod-aos="zoom-in-left" className='croppagedoc'>

                        <div className='croppageheading'>
                            <center><u><h1>{prod.name}</h1></u></center>
                        </div>
                        <div>
                            <table className='croppagetable'>
                                <tbody>

                                    <tr>
                                        <td width='300px' height='50px'>Crop Name</td>
                                        <td width='300px'>{prod.name}</td>

                                    </tr>
                                    <tr>
                                        <td height='50px'>Soil</td>
                                        <td>{prod.soil}</td>

                                    </tr>
                                    <tr>
                                        <td height='50px'>Season</td>
                                        <td>{prod.season[0]}</td>


                                    </tr>
                                    <tr>
                                        <td width='300px' height='50px'>Investment</td>
                                        <td width='300px'>{prod.investment}Rs/Hectare</td>

                                    </tr>
                                    <tr>
                                        <td height='50px'>Water Availability</td>
                                        <td>{prod.waterReq} Litres/Hectare</td>

                                    </tr>
                                    <tr>
                                        <td height='50px'>Profit</td>
                                        <td>{prod.profit}Rs/Hectare</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='croppagedescription'>
                            <h2 style={{ fontFamily: "Arial" }}><b><u>Description</u></b></h2>
                            <p>{prod.info}</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
