class Clock extends React.Component{
  render(){
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}
