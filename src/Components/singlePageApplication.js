import React from 'react';

class SinglePageApplication extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (<div>
            <nav className="navbar" id="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand" id="navbar-brand">
                    <a className="navbar-item" href="http://twin-fish.com/">
                    <figure className="image">
                        <img src="./twinFish_Logo.png"/>
                    </figure>
                    </a>
                </div>
                <div id="blogSection">
                    <div id="blogButton">
                    <a href="https://academy.twin-fish.com">
                        <button class="button is-outlined blogButton">Blog</button>
                    </a>
                    </div>
                </div>
            </nav>
            <div>
                <div id="accompagnement">
                    <div id="contactUs">
                        <div className="container" id="contactezNousCont">
                            <a href="#footer">
                                <button className="button is-small is-primary is-rounded is-focused" id="contactezNous">CONTACT US</button>
                            </a>
                        </div>
                    </div>
                    <section className="hero is-medium is-light is-bold">
                        <div className="hero-body" id="heroBody">
                            <div className="container" id="defi">
                                <div id="defiDescription">
                                    <div className="tileCenter">
                                        <h1 className="title">
                                            What is Decentralized Finance (Defi) ?
                                        </h1>
                                        <p id="definition">Decentralized Finance is a mouvement which promote decentralized financial services and products by creating application on top of permissionless blockchain.</p>
                                    </div>
                                </div>
                                <div id="defiAdvantage">
                                    <div className="tile is-ancestor tileCenter">
                                        <div className="tile is-parent">
                                            <article className="tile is-child box" id="useCaseTile">
                                                <p className="title">Advantages</p>
                                                <p id="tileP">Easy implementation</p>
                                                <p id="tileP">More sercure</p>
                                                <p id="tileP">Reduce cost</p>
                                                <p id="tileP">Lower entry barrier</p>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                                <div id="defiUsesCases">
                                    <div className="tile is-ancestor tileCenter">
                                        <div className="tile is-parent">
                                            <article className="tile is-child box" id="useCaseTile">
                                                <p className="title">Uses Cases</p>
                                                <p id="tileP">Volatility free Stable Coin</p>
                                                <p id="tileP">Lend and Borrow Crypto</p>
                                                <p id="tileP">Decentralized exchange</p>
                                                <p id="tileP">Derivatives, Futures</p>
                                                <p id="tileP">Prediction market</p>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section">
                        <div className="tile is-ancestor" id="tiles">
                            <div className="tile is-parent">
                                <article className="tile is-child notification" id="firstTile">
                                    <p className="title">Alt Exchange</p>
                                    <p className="subtitle">Using Uniswap protocol</p>
                                    <figure className="image" id="uniswapImage">
                                        <a href="https://erc20exchange.herokuapp.com" id="roundedImageLink">
                                            <img className="is-rounded" id="roundedImage" src="https://image.flaticon.com/icons/png/128/1475/1475932.png"/>
                                        </a>
                                    </figure>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child notification" id="secondTile">
                                    <p className="title">Freecoin</p>
                                    <p className="subtitle">Implementation of ERC20 Token</p>
                                    <figure className="image" id="uniswapImage">
                                        <a href="https://freecointoken.herokuapp.com/" id="roundedImageLink">
                                            <img className="is-rounded" id="roundedImage" src="https://image.flaticon.com/icons/png/128/2284/2284958.png"/>
                                        </a>
                                    </figure>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child notification" id="thirdTile">
                                    <p className="title">V-Borrow</p>
                                    <p className="subtitle">Using MakerDao Vault for Borrow</p>
                                    <figure className="image" id="uniswapImage">
                                        <a href="#" id="roundedImageLink">
                                            <img className="is-rounded" id="roundedImage" src="./Comingsoon.png"/>
                                        </a>
                                    </figure>                            
                                </article>
                            </div>
                        </div>
                    </section>
                    <section className="section" id="services">
                        <div>
                        <div className="pricing-table">
                            <div className="pricing-plan">
                                <div className="plan-header">Create a Token</div>
                                <div className="plan-price"><br/></div> {/*  <span class="plan-price-amount"><span class="plan-price-currency">$</span>20</span> */}
                                <div className="plan-items">
                                <div className="plan-item">Fungible Token</div>
                                <div className="plan-item">Non Fungible Token</div>
                                <div className="plan-item">Security Token</div>
                                <div className="plan-item">Subscription Token</div>
                                </div>
                                <div className="plan-footer">
                                {/* <button class="button is-fullwidth">Contact us</button> */}
                                </div>
                            </div>

                            <div className="pricing-plan">
                                <div className="plan-header">Use Defi</div>
                                <div className="plan-price"><br/></div>
                                <div className="plan-items">
                                <div className="plan-item">MakerDao's Vault</div>
                                <div className="plan-item">Uniswap</div>
                                <div className="plan-item">Compoung</div>
                                <div className="plan-item">Gnosis</div>
                                </div>
                                <div className="plan-footer">
                                </div>
                            </div>

                            <div className="pricing-plan">
                                <div className="plan-header">Consultancy</div>
                                <div className="plan-price"><br/></div><div className="plan-items">
                                <div className="plan-item">Smart Contract</div>
                                <div className="plan-item">Integration</div>
                                <div className="plan-item">Front end App</div>
                                <div className="plan-item">Optimize Gas Cost</div>
                                </div>
                                <div className="plan-footer">
                                </div>
                            </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <a href="#footer">
                            <button className="button are-medium is-rounded is-focused is-primary">CONTACT US</button>
                        </a>
                    </section>
                    <footer className="footer" id="footer">
                        <div className="content" id="footerContent">
                            <figure className="image is-128x128">
                                <img src="./whiteIcon.png"/>
                            </figure>                     
                        </div>
                        <div>Contact us at <a href="#" id="emailLink" title="Email">matthieu.mariejoseph@twin-fish.com</a></div>
                        <br/>
                        <br/>
                        <div id="flaticon">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    </footer>
                </div>
            </div>
        </div>);
    }
}

export default SinglePageApplication;