import React, { Component } from 'react'
import Tab from './Tab'
import TabNav from './TabNAv'

export default class Navigation extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             selected :"home" 
        }
    }

    setSelected = (tab) => {
        this.setState({ selected: tab });
    }



    render() {
        return (
            <div className="Navigation mt-4">
              <TabNav tabs={['home','info','profile']} selected={this.props.selected} setSelected={this.setSelected}>
                    <Tab isSelected={this.state.selected === 'home'}>
                        <p>This is home tab</p>
                    </Tab>

                    <Tab isSelected={this.state.selected === 'info'}>
                        <p>This is info tab</p>
                    </Tab>
                    
                    <Tab isSelected={this.state.selected === 'profile'}>
                        <p>This is profile tab</p>
                    </Tab>

              </TabNav>
            </div>
        )
    }
}
