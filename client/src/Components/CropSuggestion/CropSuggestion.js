import { createSearchParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './CropSuggestion.css'

const CropSuggestion = (props) => {
    const navigate = useNavigate()
    // useEffect(() => {
    //     document.querySelector('.CropSuggestion').classNameList.add('active-page')
    // },[])


    function displayresult(e) {
        e.preventDefault()
        let soilType = document.querySelector("#soiltype").value;
        let season = document.querySelector("#season").value;
        let investment = document.querySelector("#investment").value;
        let waterReq = document.querySelector('input[type="radio"]:checked').id

        if (soilType !== "none" && season !== "none" && investment !== "none") {
            const data = {soilType,season,investment,waterReq}
            props.onSearch(data)
            // return true
            const params = {soilType,season,investment,waterReq}
            navigate({
                pathname:'/cropResults',
                search : `?${createSearchParams(params)}`
            })
        }
        else {
            alert("Enter all fields")
            // return false
        }

    }

    return (
        <div className="CropSuggestion_body">
            <div className="CropSuggestion_box_form">
                <div className="CropSuggestion_left">
                    <div className="CropSuggestion_overlay">
                        <h1>Crop Suggestions</h1>
                        <p>Faced a Disaster?<br /> Don't worry find suitable crops according to your situation. <br />Enter the required inputs and get a list of personalised crops for your needs</p>
                        <Link to='/cropSuggestionHistory' className='history'>Recents</Link>
                    </div>
                </div>


                <div className="CropSuggestion_right">
                    <div className="container">
                        <h1>Get Crops Personalised for you!</h1>
                        {/* <p id="main_para">Enter the required inputs and get a list of personalised crops for your needs</p> */}

                        <form onSubmit={displayresult}>
                            <p>Soil Type: &nbsp;
                                <select name="soilType" id="soiltype" required>
                                    <option value="none">Select the Soil</option>
                                    <option value="Red">Red Soil</option>
                                    <option value="Black">Black Soil</option>
                                    <option value="Sandy">Sandy Soil</option>
                                    <option value="Alluvial">Alluvial Soil</option>
                                </select>
                            </p>
                            <p>Season:&nbsp;
                                <select name="season" id="season" required>
                                    <option value="none">Select a Season</option>
                                    <option value="Rabi">Rabi</option>
                                    <option value="Kharif">Kharif</option>
                                    <option value="Zaid">Zaid</option>
                                </select>
                            </p>
                            <p>Investment:&nbsp;
                                <select name="investment" id="investment" required>
                                    <option value="none">Select the range</option>
                                    <option value="10000">Less than 10k</option>
                                    <option value="90000">Less than 90k</option>
                                    <option value="250000">Less than 2.5L</option>
                                </select>
                            </p>
                            <p>Water Availability: &nbsp;
                                <input type="radio" name="water" id="High" required />
                                <label htmlFor="water"> High </label>
                                <input type="radio" name="water" id="medium" />
                                <label htmlFor="water"> Medium </label>
                                <input type="radio" name="water" id="Low" />
                                <label htmlFor="water"> Low </label>
                            </p>
                            <button type="submit" className="getcrops-btn">Get Crops</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CropSuggestion;