import React from 'react';

const Logo = () => {
    return (
        <div className='logo'>
            {/*Les images importées deuis la balise IMG sont accessible dans "public"*/}
            <img src="./logo192.png" alt="logo perso" />
            <h2>Api Countries</h2>
        </div>
    );
};

export default Logo;