import React from "react";
import axios from "axios";
import QuoteDisplay from "../QuoteDisplay/QuoteDisplay";

class QuoteApi extends React.Component {
  // State Initialized
  state = { quote: [], display: "none" };

  // Api Called
  api = async () => {
    const response = await axios.get("https://api.api-ninjas.com/v1/quotes", {
      headers: {
        "X-Api-Key": "qTlpVdo8Utexv6s8kTfKTA==QTGve7B3H3cPeu8z",
      },
    });
    // State updated
    this.setState({ quote: response.data[0], display: "block" });
  };

  render() {
    return (
      <>
        <div className="col-4">
          <div>
            <button onClick={() => this.api()} className="GetQuote">
              Get Quote
            </button>
          </div>
        </div>

        <div className="row w-100 mt-5 d-flex justify-content-center">
          <div className="col-11 col-lg-5 col-md-5 mt-5">
            <QuoteDisplay
              quote={this.state.quote}
              displayQuote={this.state.display}
            />
          </div>
        </div>
      </>
    );
  }
}
export default QuoteApi;
