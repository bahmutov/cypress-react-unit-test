import * as React from 'react'

// pass name via props
export class HelloX extends React.Component {
  private props: {name: string};
  render () {
    return <p>Hello {this.props.name}!</p>
  }
}

export class HelloState extends React.Component {
  state: { name: string; };
  constructor (props) {
    super(props)
    this.state = {
      name: 'Spider-man'
    }
  }

  render () {
    return <p>Hello {this.state.name}!</p>
  }
}
