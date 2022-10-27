import { useEffect } from 'react';

import './CropSuggestion.css'

const CropSuggestion = () => {
    // useEffect(() => {
    //     document.querySelector('.CropSuggestion').classNameList.add('active-page')
    // }, [])


    function displayresult(e) {
        e.preventDefault()
        let soilType = document.querySelector("#soiltype").value;
        let season = document.querySelector("#season").value;
        let investrange = document.querySelector("#investrange").value;

        if (soilType !== "none" && season !== "none" && investrange !== "none") {
            console.log('Crop Input taken successfully ')
            return true
        }
        else {
            alert("Enter all fields")
            return false
        }
    }

    return (
        <div className="CropSuggestion_body">
            <div className="CropSuggestion_box_form">
                <div className="CropSuggestion_left">
                    <div className="CropSuggestion_overlay">
                        <h1>Crop Suggestions</h1>
                        <p>Faced a Disaster?<br /> Don't worry find suitable crops according to your situation. <br />Enter the required inputs and get a list of personalised crops for your needs</p>

                    </div>
                </div>


                <div className="CropSuggestion_right">
                    <div className="container">
                        <h1>Get Crops Personalised for you!</h1>
                        {/* <p id="main_para">Enter the required inputs and get a list of personalised crops for your needs</p> */}

                        <form onSubmit={displayresult} action="/cropResults" method="post">
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
                                <select name="investment" id="investrange" required>
                                    <option value="none">Select the range</option>
                                    <option value="10000">Less than 10k</option>
                                    <option value="90000">Less than 90k</option>
                                    <option value="250000">Less than 2.5L</option>
                                </select>
                            </p>
                            <p>Water Availability: &nbsp;
                                <input type="radio" name="water" id="High" required />
                                <label htmlFor="water"> High </label>
                                <input type="radio" name="water" id="water" />
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