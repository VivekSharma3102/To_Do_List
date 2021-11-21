import React from 'react'

function Header() {

    var date = new Date();
    var months=[ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
    var days =[ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday" ]

    return (
        <div className="header">
            <h1 className="header-tittle">To Do List</h1>
            {/* here we add date  */}
            <h3 className="header-para">{days[date.getDay()]} , {months[date.getMonth()]} {date.getUTCDate()+" , "+date.getFullYear()}</h3>
            
        </div>
    )
}

export default Header
