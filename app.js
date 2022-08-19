class Dashboard extends React.Component{
    render() {
        return(
            <div className="dashboard">
              <h3>Dashboard</h3>
              <h3>Widget</h3>
              <h3>Reviews</h3>
              <h3>Customers</h3>
              <h3>Online Analysis</h3>
              <h3>Setting</h3>
            </div>
        )        
    }
}

class Reviews extends React.Component {
    render () {
      return (
        <div className="reviews">
          <h3>Reviews</h3>
          <p>1,281</p>
        </div>
      )
    }
  }

  class Rating extends React.Component {
    render () {
      return (
        <div className="rate">
          <h3>Average Rating</h3>
          <p>4.6</p>
        </div>
      )
    }
  }

  class Analysis extends React.Component {
    render () {
      return (
        <div className="analysis">
          <h3>Sentiment Analysis</h3>
          <ul>
          <li>960</li>
          <li>122</li>
          <li>321</li>
          </ul>
        </div>
      )
    }
  }

class Visitors extends React.Component{
    render() {
        return (
            <div className="visitors">
                <h3>Website Visitors</h3>
                <p>821</p>
                <div>
                  <InfoDisplay />
                </div>
            </div>
        )
    }
}

class InfoDisplay extends React.Component{
  render() {
      return (
        <div className="info"></div>
      )
  }
}

class Stats extends React.Component{
  render() {
      return (
          <div className="stats">
              <Reviews />
              <Rating />
              <Analysis />
          </div>
         
      )
  }
}

class Content extends React.Component{
  render() {
      return (
          <div className="content">
              <Stats />
              <Visitors />
          </div>
      )
  }
}

class App extends React.Component{
  render() {
      return (
          <div className="container">
              <Dashboard />
              <Content />
          </div>
      )
  }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)