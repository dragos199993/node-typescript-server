import React, { Component, ReactNode } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { routePaths } from '../../router/routePaths';
import styles from './Header.module.scss';

interface IHeaderState {
  isOpen: boolean;
}

class Header extends Component<{}, IHeaderState> {

  state: IHeaderState = {
    isOpen: false
  };

  toggleNavbar = () =>
    this.setState({
      isOpen: !this.state.isOpen
    });

  public render(): ReactNode {
    return (
      <div>
        <Navbar light expand="md">
          <NavLink
            className={ styles.navBrand }
            to={ routePaths.root }>
            Budgeter
          </NavLink>
          <NavbarToggler onClick={ this.toggleNavbar } />
          <Collapse isOpen={ this.state.isOpen } navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  exact
                  className={ styles.navLink }
                  to={ routePaths.root }>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={ styles.navLink }
                  to={ routePaths.contacts }>
                  Contacts
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
