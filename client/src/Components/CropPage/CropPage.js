import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
import './CropPage.css'
import Aos from 'aos'
import "aos/dist/aos.css"
export default function CropPage({data}) {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    // const { data, isPending, error } = useFetch('http://localhost:2020/crops')
    const { id } = useParams()
    let prod = null
    if (data) {
        prod = data.filter(x => x._id == id)
        prod = prod[0]
    }


    return (
        <>
            {/* {isPending && <h1>Loading .....</h1>} */}
            {/* {error && <h2>{error}</h2>} */}
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
