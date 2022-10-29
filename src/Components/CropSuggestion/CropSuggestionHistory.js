import './CropSuggestionHistory.css'

const CropSuggestionHistory = (props) => {
    const { history } = props

    return (
        <div className="CropSuggestionHistory_body" style={{ position: "absolute", top: "8vh" }}>
            <h1>Crop Suggestion History</h1>
            {!history && <h1>Loading.....</h1>}
            {history && history.length === 0 && <h1>No History...</h1>}
            {history && history.length > 0 && history.map(item => (
                <div className="hist" key={Math.random()}>
                    <h2>Soil Type: {item.soilType}</h2>
                    <h2>Season: {item.season}</h2>
                    <h2>Investment Range: Less than {item.investment}</h2>
                    <h2>Water Availability: {item.waterReq}</h2>
                </div>
))}
        </div>
    );
}

export default CropSuggestionHistory;