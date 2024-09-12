import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={
              `${
                loggedIn?.firstName.charAt(0).toUpperCase() +
                loggedIn.firstName.slice(1).toLowerCase()
              } 
              ${
                loggedIn?.lastName.charAt(0).toUpperCase() +
                loggedIn.lastName.slice(1).toLowerCase()
              } ` || "Guest"
            }
            subtext="Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250}
          />
        </header>
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 1250 }, { currentBalance: 2500 }]}
      />
    </section>
  );
};

export default Home;
