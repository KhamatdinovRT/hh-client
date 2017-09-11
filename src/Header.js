import React from 'react';
import { NavLink } from 'react-router-dom'
import { Tabs, Tab } from 'material-ui/Tabs';
import './Header.css';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            scrolling: false,
            smallScreen: window.innerWidth <= 768,
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.setState({ smallScreen: window.innerWidth <= 768 })
    }

    handleScroll = () => {
        if (window.scrollY > 48) {
            this.setState({
                scrolling: true
            });
        }
        else if (window.scrollY < 48) {
            this.setState({
                scrolling: false
            });
        }
    }
    render() {
        return (
            <header className={this.state.scrolling ? 'header header-scrolling ' : 'header'}>
                <Tabs tabItemContainerStyle={{ backgroundColor: '#3F51B5' }}>
                    <Tab containerElement={<NavLink to='/'></NavLink>} label='Вакансии' />
                    <Tab containerElement={<NavLink to='/statistics'></NavLink>} label='Статистика' />
                </Tabs>
            </header>
        )
    }
}

export default Header;