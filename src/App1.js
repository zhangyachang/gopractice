import React, {Component} from 'react';
import {connect} from 'react-redux'
import {add, reduce, addCannonAsync} from './redux2/redux'


class App1 extends Component {
  render() {

    return (
      <div>
        <h1>主页面</h1>
        {
          this.props.state
        }

        <p>一共有{this.props.state}个坦克</p>
        <input type="button" onClick={this.props.add} defaultValue='增加坦克' />
        <input type="button" onClick={this.props.reduce} defaultValue='减少坦克'/>
        <input

          type="button"
          defaultValue={'异步增加坦克炮'}
          onClick={this.props.addCannonAsync}/>

        {/*<p>一共有{this.props.store.getState()}个坦克</p>*/}
        {/*<input type="button" onClick={() => {store.dispatch(this.props.add())}} defaultValue='增加坦克' />*/}
        {/*<input type="button" onClick={() => {store.dispatch(this.props.reduce())}} defaultValue='减少坦克'/>*/}
        {/*<input*/}

          {/*type="button"*/}
          {/*defaultValue={'异步增加坦克炮'}*/}
          {/*onClick={()=>{*/}
            {/*return store.dispatch(async())*/}
          {/*}}*/}
        {/*/>*/}
      </div>
    );
  }
}




const mapStateToProps = (state) => {
  return {
    state: state
  }
};

const mapDispatchToProps = { add, reduce, addCannonAsync };

App1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(App1);




export default App1;