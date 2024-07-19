import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

function page() {
    const loggedIn = {firstName: "Raymond"};

  return (
    <div className='home'>
        <div className="home-content">
            <header className="home-header">
               <HeaderBox 
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstName || "Guest"}
                subtext="Acess and manage your account and transactions effortlessley"
               />

               <TotalBalanceBox
                accounts = {[]}
                totalBanks={1}
                totalCurrentBalance={24360.62}
               />
            </header>
        </div>
    </div>
  )
}

export default page