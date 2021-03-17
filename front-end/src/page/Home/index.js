import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { 
    Image,
    Sidebar,
    Icon,
    Menu,
    Segment,
    Grid,
    Button,
    Modal
 } from 'semantic-ui-react';
import PlayModal from '../../components/PlayModal';
const imgsrc = '/img/chesslogo.png';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            open: false,
            active: false
        }
    }
    toggleVisible() {
        this.setState({
            visible: !this.state.visible
        })
    }

    toggleOpen(newstate) {
        this.setState({
            open: newstate
        })
    }

    toggleActive() {
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        return (
            <div>
                <div className="rightAlign">
                    <div style={{flex: 1}}>
                        <Sidebar.Pushable as={Segment}>
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
                                <Grid columns={3} className="background">
                                    <Grid.Row className="columnheight">
                                        <Grid.Column>
                                            <Button.Group size='large' color='grey' style={{position: "relative", left: "10px"}}>
                                                <Button as={Link} to='/login'>Log in</Button>
                                                <Button.Or />
                                                <Button as={Link} to='/signup'>Sign Up</Button>
                                            </Button.Group>
                                        </Grid.Column>
                                        <Grid.Column></Grid.Column>
                                        <Grid.Column floated="right" textAlign='right' >
                                            <div>
                                                <Image src={imgsrc} size='medium' verticalAlign='top' onClick={() => {
                                                    this.toggleVisible();
                                                }}/>
                                            </div>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row centered>
                                        <PlayModal buttonText='Play Against the Computer' />
                                    </Grid.Row>
                                    <Grid.Row centered>
                                        <PlayModal buttonText='Play Locally' />
                                    </Grid.Row>
                                    <Grid.Row style={{height: "500px"}}>
                                        <Grid.Column> </Grid.Column>
                                        <Grid.Column> </Grid.Column>
                                        <Grid.Column> </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Sidebar.Pusher>
                            
                        </Sidebar.Pushable>
                        </div>
                </div>
            </div>
        );
    }
}

export default Home;