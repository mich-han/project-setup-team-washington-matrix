import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Menu, Icon, Sidebar, Image, Tab, Transition } from 'semantic-ui-react';
import './Info.css';
const imgsrc = '/img/chesslogo.png';
class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            activeItem: 'history'
        }
    }
    toggleVisible() {
        this.setState({
            visible: !this.state.visible
        })
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        const panes = [
            {menuItem: 
                <Menu.Item
                style={{color: 'lightgrey'}}
                name='history'
                active={activeItem === 'history'}
                onClick={this.handleItemClick}
                color='teal'
                />
            , pane:
            <Transition
                animation='fade left'
                duration={125}
                visible={activeItem === 'history'}
                unmountOnHide={true}
            >
            <Tab.Pane style={{backgroundColor: '#00141b', color: 'lightgrey'}}>
                Some Info Text Some Info Text Some Info Text Some Info Text Some Info Text Some Info Text Some Info Text Some Info Text 
                <br />Some Info Text Some Info Text Some Info Text Some Info Text Some Info Text Some Info Text Some Info Text Some Info Text Some Info Text Some Info Text  
                <br />Some Info Text Some Info Text Some Info Text Some Info Text Some Info Text Some Info Text Some Info Text Some Info Text Some Info Text 
                <br />Some Info Text Some Info Text Some Info Text Some Info Text Some Info Text Some Info Text Some Info Text Some Info Text 
                <br />Some Info Text Some Info Text Some Info Text Some Info Text Some Info Text Some Info Text Some Info Text 
                <br />Some Info Text Some Info Text Some Info Text Some Info Text Some Info Text Some Info Text 
                <br />Some Info Text Some Info Text Some Info Text Some Info Text Some Info Text 
                <br />Some Info Text Some Info Text Some Info Text Some Info Text 
                <br />Some Info Text Some Info Text Some Info Text 
                <br />Some Info Text Some Info Text 
                <br />Some Info Text
                <br />Some Info Text
                <br />Some Info Text
                <br />Some Info Text
                <br />Some Info Text
                <br />Some Info Text
                <br />Some Info Text
                <br />Some Info Text
                <br />Some Info Text
                <br />Some Info Text
                <br />Some Info Text
                <br />Some Info Text
            </Tab.Pane></Transition>},
            {menuItem: 
                <Menu.Item
                style={{color: 'lightgrey'}}
                name='notable players'
                active={activeItem === 'notable players'}
                onClick={this.handleItemClick}
                color='teal'
                />
            , pane:
            <Transition
                animation='fade left'
                duration={125}
                visible={activeItem === 'notable players'}
                unmountOnHide={true}
            >
            <Tab.Pane style={{backgroundColor: '#00141b', color: 'lightgrey'}}>
                Some Info Text Some Info Text 
            </Tab.Pane></Transition>},
            {menuItem:  
                <Menu.Item
                style={{color: 'lightgrey'}}
                name='Recent Events'
                active={activeItem === 'Recent Events'}
                onClick={this.handleItemClick}
                color='teal'
                />
            , pane: 
            <Transition
                animation='fade left'
                duration={125}
                visible={activeItem === 'Recent Events'}
                unmountOnHide={true}
            >
            <Tab.Pane style={{backgroundColor: '#00141b', color: 'lightgrey'}}>
                Some Info Text Some Info Text Some Info Text
            </Tab.Pane></Transition>},
            {menuItem: 
                <Menu.Item
                style={{color: 'lightgrey'}}
                name='Resources'
                active={activeItem === 'Resources'}
                onClick={this.handleItemClick}
                color='teal'
                />
            , pane:
            <Transition
                animation='fade left'
                duration={125}
                visible={activeItem === 'Resources'}
                unmountOnHide={true}
            >
            <Tab.Pane style={{backgroundColor: '#00141b', color: 'lightgrey'}}>
                Some Info Text Some Info Text Some Info Text Some Info Text
                <br />
                <a href="https://en.wikipedia.org/wiki/Chess">Hey it's a link</a>
            </Tab.Pane></Transition>}
        ]
        return (
            <div>
                <div className="stretch">
                    <div style={{flex: 1}}>
                        <Sidebar.Pushable style={{backgroundColor: '#00141b'}}>
                            <Sidebar
                                as={Menu}
                                animation='overlay'
                                icon='labeled'
                                inverted
                                onHide ={() => {this.toggleVisible()}}
                                vertical
                                visible={this.state.visible}
                                width='thin'
                                direction='right'
                            >
                                <Menu.Item as={Link} to='/'>
                                <Icon name='chess board' />
                                Play
                                </Menu.Item>
                                <Menu.Item as={Link} to='/learn'>
                                <Icon name='pencil square' />
                                Learn
                                </Menu.Item>
                                <Menu.Item as={Link} to='/practice'>
                                <Icon name='chess' />
                                Practice
                                </Menu.Item>
                                <Menu.Item as={Link} to='/info'>
                                <Icon name='question' />
                                Info
                                </Menu.Item>
                            </Sidebar>
                            
                            <Sidebar.Pusher dimmed={this.state.visible}>
                                <Grid style={{color: 'lightgrey'}}>
                                    <Grid.Row>
                                        <Grid.Column floated='right'>
                                            <Image src={imgsrc} size='medium' verticalAlign='top' floated='right' onClick={() => {
                                            this.toggleVisible();
                                        }}/>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row></Grid.Row>
                                </Grid>
                                
                                <Tab 
                                    style={{height: '500px'}} 
                                    grid={{paneWidth: 13, tabWidth: 2}} 
                                    menu={{inverted: true, fluid: true, vertical: true, tabular: true, pointing: true, menuPosition: 'left'}}
                                    renderActiveOnly={false}
                                    panes={panes} 
                                />                                    
                                

                            </Sidebar.Pusher>
                        </Sidebar.Pushable>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info;