import React, {Component} from 'react';
import "./Footer.css";


class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <nav>
                    <ul>
                        <li>
                            ComRang Team
                        </li>
                        <li>
                            About Us
                        </li>
                        <li>
                            Blog
                        </li>
                    </ul>
                </nav>
                <div className="copyright">
                    ©
                    2018, Designed by
                    <a href="https://www.invisionapp.com" target="_blank"> PPBra</a>. Coded by
                    <a href="https://www.creative-tim.com" target="_blank">ComRang Team</a>.
                </div>
            </div>
        )
    }
}

export default Footer;