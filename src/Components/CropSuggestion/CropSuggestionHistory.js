import "./CropSuggestionHistory.css";
import { Link, useNavigate, createSearchParams } from 'react-router-dom'

const CropSuggestionHistory = (props) => {
  const { history } = props;
  const navigate = useNavigate()

  const CropSuggestionHistoryHandler = (item) => {
    alert(item)
    const { soilType, season, investment, waterReq } = item
    const params = { soilType, season, investment, waterReq }
    navigate({
      pathname: '/cropResults',
      search: `?${createSearchParams(params)}`
    })
  }

  return (
    <>
      <img className="background_image" src="/cropsuggestion1.jpg"></img>
      <div
        className="CropSuggestionHistory_body"
        style={{ width: "100%", position: "absolute", top: "8vh" }}
      >
        <h1 id="crop_suggestion_history">
          Crop Suggestion History
        </h1>
        <br />
        {!history && <h1>Loading.....</h1>}
        {history && history.length === 0 && <h1>Sorry No History Found:(</h1>}
        {history &&
          history.length > 0 &&
          history.map((item) => (
            <div className="hist" key={Math.random()}>
              {/* <h2>Soil Type: {item.soilType},</h2><br/><br/>
                    <h2>Season: {item.season},</h2><br/><br/>
                    <h2>Investment Range: Less than {item.investment},</h2><br /><br/>
                    <h2>Water Availability: {item.waterReq}.</h2><br/><br/> */}
              <Link to={`/cropResults?soilType=${item.soilType}&season=${item.season}&investment=${item.investment}&waterReq=${item.waterReq}`} className="CropSuggestionHistory_Link">
                <table className="table" align='center' cellPadding='3'>
                  <tbody>
                    <tr>
                      <td width="60%"> Soil Type: </td>
                      <td width="60%"> {item.soilType} </td>
                    </tr>
                    {/* <br /> */}

                    <tr>
                      <td width="60%"> Season: </td>
                      <td width="60%"> {item.season} </td>
                    </tr>
                    {/* <br /> */}

                    <tr>
                      <td width="60%"> InvestmentRange: </td>
                      <td width="60%"> Less than {item.investment}   </td>
                    </tr>
                    {/* <br /> */}

                    <tr>
                      <td width="60%"> Water Availability: </td>
                      <td width="60%"> {item.waterReq} </td>
                    </tr>

                  </tbody>
                </table>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default CropSuggestionHistory;
