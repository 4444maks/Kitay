import './Header.css'
import Search from '../../free-icon-search-4024513.png'
import Header1 from '../../Group2.png'
import Header2 from '../../Group3.png'
import Header3 from '../../Group4.png'
import Header4 from '../../Group5.png'

export default function Header() {
    return (
        <>
            <header>
                <nav>
                    <h2>ЧАЙОВНЯ</h2>
                    <div className="nav_buttons">
                        <p>HOME</p>
                        <p>TEA</p>
                        <p>BAKERY</p>
                        <p>SHOP</p>
                        <p>ABOUT</p>
                        <p>LOGIN</p>
                    </div>
                    <div className="nav_search">
                        <img src={Search} />
                    </div>
                </nav>
                <div className="header_txt">
                    <h3>Welcome</h3>
                    <h1>
                        We serve the <br />
                        richest tea in <br />
                        the city!
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br />
                        elit, sed do eiusmod tempor</p>
                    <button>Order Now</button>
                </div>
            </header>
            <div className="under_header">
                <img src={Header1} />
                <img src={Header2} />
                <img src={Header3} />
                <img src={Header4} />
            </div>
        </>
    )
}