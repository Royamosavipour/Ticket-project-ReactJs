import React from "react";
import "./Ticket.css";

export default class Ticket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countriesData: {
        Iran: ["Tabriz", "Tehran", "Shiraz", "Esfahan", "Mashhad"],
        Turkey: ["Istanbul", "Ezmir", "Ankara", "Antaliya"],
        US: ["Los Angles", "San Diego", "Chicago"],
      },
      mainCountryCities: [],
    };
    this.selectHandeler = this.selectHandeler.bind(this);
  }

  selectHandeler(e) {
    let country = e.target.value;
    if (country === "-1") {
      this.setState({
        mainCountryCities: [],
      });
    } else {
      let mainCountry = this.state.countriesData[country];
      this.setState({
        mainCountryCities: mainCountry,
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-6 box">
          <input className="fnameInput" placeholder="First Name" />
        </div>

        <div className="col-md-6 box">
          <input className="lnameInput" placeholder="Last Name" />
        </div>
        <div className="col-md-6 box">
          <input className="phoneInput" placeholder="Phone Number" />
        </div>
        <div className="col-md-6 box">
          <input className="emailInput" placeholder="Email" />
        </div>
        <div className="col-md-6 box">
          <select className="countrySelect" onChange={this.selectHandeler}>
            <option value="-1">Please Select ...</option>
            <option className="option" value="Iran">
              Iran
            </option>
            <option className="option" value="Turkey">
              Turkey
            </option>
            <option className="option" value="US">
              United State
            </option>
          </select>
        </div>
        <div className="col-md-6 box">
          <select className="citySelect">
            {this.state.mainCountryCities.length ? (
              this.state.mainCountryCities.map((city) => (
                <option value={city}>{city}</option>
              ))
            ) : (
              <option value="-1">Please select city</option>
            )}
          </select>
        </div>
        <div className="col-md-12 box">
          <button className="btn">Book a ticket</button>
        </div>
      </div>
    );
  }
}
