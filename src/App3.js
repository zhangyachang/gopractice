import React, {Component} from 'react';


class App extends Component {
  constructor (){
    super()
    this.state = {
      title: 'redux'
    }
  }

  render() {
    const store = this.props.store
    console.log(store)
    const num = store.getState()
    const addCannon = this.props.add
    const removeCannon = this.props.remove
    const addCannonAsync = this.props.async

    return (
      <div className="App">
        <div>
          {this.state.title}
          {`现在有${num}辆坦克炮`}
          <br/>
          <br/>
          <hr/>
          <input
            type="button"
            defaultValue={'增加坦克炮'}
            onClick={()=>{
              return store.dispatch(addCannon())
            }}
          />
          <br/>
          <br/>
          <hr/>
          <input
            type="button"
            defaultValue={'减少坦克炮'}
            onClick={()=>{
              return store.dispatch(removeCannon())
            }}
          />
          <br/>
          <br/>
          <hr/>
          <input
            type="button"
            defaultValue={'异步增加坦克炮'}
            onClick={()=>{
              return store.dispatch(addCannonAsync())
            }}
          />
          <hr/>
          <br/>
          <br/>
        </div>
      </div>
    );
  }
}

export default App;
