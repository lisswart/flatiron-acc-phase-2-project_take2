

function Header() {
    return (
        <div id="header">
            <h1>
                <span className="header-child">verb    </span>
                <span style={{fontSize: "2em"}}>Word: </span>
            </h1>
            <br></br>
            <h2>
                <span className="header-child">definition: </span>
                <span className="header-child">to convey in appropriate or telling terms; </span>
            </h2>
            <br></br>
            <h2>
                <span className="header-child">verbal illustration: </span>
                <span className="header-child">tried to word the declarations exactly right</span>
            </h2>
        </div>
    );
}

export default Header;
