import React from 'react';

class Filter extends React.Component {
  render () {
    if(this.props.state.clicked) {
      return (
        <div className="center">
          <div className="translucent outerFormDiv">
          <input onClick={this.props.click} type="submit" value="Filter Bands"/>
          </div>
        </div>
      )
    } else {
      return (
        <div className="center">
          <div className="translucent outerFormDiv">
            <input onClick={this.props.click} type="submit" value="Hide Filter"/><br/><br/>
            <label htmlFor="state">State</label>
            <input type="text" name="state" onChange={this.props.filter} value={this.props.state.state}/>
            <br/><br/>
            <label htmlFor="city">City</label>
            <input type="text" name="city" onChange={this.props.filter} value={this.props.state.city}/>
            <br/><br/>
            <label htmlFor="genre">Genre</label>
            <input type="text" name="genre" onChange={this.props.filter} value={this.props.state.genre}/>
            <br/><br/>
            <label htmlFor="name">Band Name</label>
            <input type="text" name="name" onChange={this.props.filter} value={this.props.state.name}/>
          </div>
        </div>
      )
    }
  }
}

export default Filter;
