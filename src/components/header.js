import React from 'react'

const getYear = () => {
    const newDate = new Date();
    return newDate.getFullYear();
}

const Header = () => {
    return <div>The Year is {
        getYear()
        }
        
    </div>
}

// var header = {

// }


export default Header