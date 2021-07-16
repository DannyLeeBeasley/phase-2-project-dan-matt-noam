import React from 'react';

function Header() {

    return(
        <header >
            <h6 className="head">SMOOTH(e)</h6>
            <wrapper>
            <h5 className="welcome">Welcome to SMOOTH(e)!</h5>
            <br></br>
            <h5 className="toprow">The Smart and Easy</h5>
            <h5>Way to Build a Custom</h5>
            <h5>Smooth(e) Just for You!</h5>

            </wrapper>
            {/* <p>Click on ingredients in the ingredients list below to add them to your smoothie.</p>
            <p>If you want to remove an item from your smoothie, simply click on it to remove!</p>
            <p>Once you're all set, press the "Make My Smoothie" button, and you'll get all the info on your custom smoothie including ingredients, price, and nutrition facts!</p>
            <p>Enjoy!</p> */}
        </header>
    );
}

export default Header;