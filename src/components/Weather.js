import React from 'react';

class Weather extends React.Component {
  render () {
    return (
      <div>
        {this.props.city && this.props.country && <p>location: {this.props.city}, {this.props.country}</p>}
        {this.props.temperature && <p>temperature: {this.props.temperature}</p>}
        {this.props.humidity && <p>humidity: {this.props.humidity}</p>}
        {this.props.description && <p>conditions: {this.props.description}</p>}
      </div>
    );
  }
}

export default Weather;
