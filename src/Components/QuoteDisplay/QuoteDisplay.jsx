import React from "react";

class QuoteApi extends React.Component {
  render() {
    const { author, quote } = this.props.quote;

    return (
      <div
        className="QuoteDsiplay p-2 w-100"
        style={{ display: `${this.props.displayQuote}` }}>
        <p className="quote">{quote}</p>
        <p className="author pe-2 p-2">
          <b>-{author}</b>
        </p>
      </div>
    );
  }
}
export default QuoteApi;
