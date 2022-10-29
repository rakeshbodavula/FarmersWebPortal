import { Link, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import './CropResults.css'
import { useEffect } from 'react';

const CropResults = ({ crop_data }) => {
    const [searchData,setSearchData] = useState(null)
    const [params] = useSearchParams()
    let crop_details = {}
    for (const i of params.entries()) {
        crop_details[`${i[0]}`] = i[1]
    }
    useEffect(()=>{
        if (crop_data) {
            const tmp_Data = crop_data.filter(x => x.soilType === crop_details.soilType && x.season[0]===crop_details.season)
            setSearchData(tmp_Data)
            console.log(tmp_Data)
        }
    },[])


    return (
        <div className="output toggle-result">
            <h1 className="result-h1">List of crops: </h1>
            <div className="row">

                {searchData && searchData.length > 0 && searchData.map(crop => (
                    <div className="card" key={Math.random()}>
                        <Link to={"/croppage/" + crop._id} target="_blank">
                            <div className="col">
                                <div className="front">
                                    <img src={crop.img} alt="" />
                                    <h1>{crop.name}</h1>
                                </div>
                                <div className="back">
                                    <h1>{crop.name}</h1>
                                    <p>{crop.brief}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}

                {searchData && searchData.length === 0 &&
                    <h1 style={{fontSize: "30px", color: "#ffff", width: "max-content"}}>No crops Found for the given input :(</h1>
                }
                {!searchData && <h1>Error</h1>}
            </div>

        </div >
    );
}

export default CropResults;