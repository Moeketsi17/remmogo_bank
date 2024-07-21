import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

function page() {
    const loggedIn = {firstName: "Raymond", lastName: "Lekoana", email: "kxngraymond328@gmail.com"};

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

            Recent Transactions
        </div>

        <RightSidebar
          user={loggedIn}
          transactions={[]}
          banks={[]}
        />
    </div>
  )
}

export default page