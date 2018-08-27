import React from 'react';

class Form extends React.Component {
  render() {
    return(
      <div>
        <form onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="city"></input>
          <input type="text" name="country" placeholder="country"></input>
          <button>Get weather</button>
        </form>
      </div>
    )
  }
}

export default Form;
