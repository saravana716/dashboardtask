import React from "react";
import "./Dashboard.css";
import { LuSearch } from "react-icons/lu";
import logo from "../../Assets/Images/Dash.png";
import key from "../../Assets/Images/key-square.png";
import square from "../../Assets/Images/square.png";
import right from "../../Assets/Images/right.png";
import user from "../../Assets/Images/user.png";
import wallet from "../../Assets/Images/wallet.png";
import discount from "../../Assets/Images/discount.png";
import message from "../../Assets/Images/message.png";
import Person from "../../Assets/Images/Person.png";
import down from "../../Assets/Images/down.png";
import count from "../../Assets/Images/count.png";
import up from "../../Assets/Images/up.png";
import red from "../../Assets/Images/red.png";
import mem1 from "../../Assets/Images/mem1.png";
import mem2 from "../../Assets/Images/mem2.png";
import mem3 from "../../Assets/Images/mem3.png";
import mem4 from "../../Assets/Images/mem4.png";
import mem5 from "../../Assets/Images/mem5.png";
import Mui from "../../Component/Details/Mui";
import { useState } from "react";

const Dashboard = () => {
  const [first, setfirst] = useState("");

  function displaydata(event) {
    setfirst(event);
  }
  function hidedata(event) {
    setfirst(event);
  }
  return (
    <>
      <div className="holediv">
        <div
          className={first == "opendiv" ? "sidenav1" : "sidenav"}
          onMouseOver={() => displaydata("opendiv")}
          onMouseLeave={() => hidedata("closediv")}
        >
          <div className="Title">
            <img src={logo} alt="" />
            {first == "opendiv" && (
              <div className="ch">
                <h1>Dashboard</h1>
                <span style={{color:"grey"}}>v.01</span>
              </div>
            )}
          </div>
          <div className="menu">
            <div className="Customer">
              <img src={key} alt="" />
              {first == "opendiv" && <h4>Dashboard</h4>}{" "}
            </div>
            <div className="Customer">
              <img src={square} alt="" />
              {first == "opendiv" && (
                <div className="Arrow">
                  <h4>Product</h4>
                  <span>
                    <img src={right} alt="" />
                  </span>
                </div>
              )}
            </div>
            <div className="Customers">
              <img src={user} alt="" />
              {first == "opendiv" && (
                <div className="Arrow">
                  <h4>Customers</h4>
                  <span>
                    <img src={right} alt="" />
                  </span>
                </div>
              )}
            </div>
            <div className="Customer">
              <img src={wallet} alt="" />
              {first == "opendiv" && (
                <div className="Arrow">
                  <h4>Income</h4>
                  <span>
                    <img src={right} alt="" />
                  </span>
                </div>
              )}
            </div>
            <div className="Customer">
              <img src={discount} alt="" />
              {first == "opendiv" && (
                <div className="Arrow">
                  <h4>Promote</h4>
                  <span>
                    <img src={right} alt="" />
                  </span>
                </div>
              )}
            </div>
            <div className="Customer">
              <img src={message} alt="" />
              {first == "opendiv" && (
                <div className="Arrow">
                  <h4>Help</h4>
                  <span>
                    <img src={right} alt="" />
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="menu-2">
            <div className="hide">
              {first == "opendiv" && (
                <div className="box">
                  <h5>Upgrade to PRO to get</h5>
                  <h5>access all Features!</h5>
                  <button>
                    <h4>Get Pro Now!</h4>
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="box-2">
            <div className="box--1">
              <img src={Person} alt="" />
            </div>
            {first == "opendiv" && (
              <div className="Arrow">
                <div className="box--2">
                  <h5>Evano</h5>
                  <h6 style={{ color: "grey" }}>Project Manager</h6>
                </div>
                <div className="box--3">
                  <img src={down} alt="" />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="profile">
          <div className="nav">
            <div>
              <h2>Hello Evona 👋🏻,</h2>
            </div>
            <div className="search">
              <span>
                <LuSearch />
              </span>
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className="users">
            <div className="count">
              <img src={count} alt="" />
              <div className="detail">
                <h6>Total Customers</h6>
                <h2>5,423</h2>
                <div className="details">
                  <img src={up} alt="" />
                  <h6>
                    <span style={{ color: "green" }}>16%</span>this month
                  </h6>
                </div>
              </div>
            </div>
            <div className="count">
              <img src={count} alt="" />
              <div className="detail">
                <h6>Members</h6>
                <h2>1,893</h2>
                <div className="details">
                  <img src={red} alt="" />
                  <h6>
                    <span style={{ color: "red" }}>1%</span>this month
                  </h6>
                </div>
              </div>
            </div>
            <div className="count">
              <img src={count} alt="" />
              <div className="detailsss" title="">
                <h6>Active Now</h6>
                <h2>189</h2>
                <div className="detailss">
                  <div className="mem1">
                    <img src={mem1} alt="" />
                  </div>
                  <div className="mem2">
                    <img src={mem2} alt="" />
                  </div>
                  <div className="mem3">
                    <img src={mem3} alt="" />
                  </div>
                  <div className="mem4">
                    <img src={mem4} alt="" />
                  </div>
                  <div className="mem5">
                    <img src={mem5} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="table">
            <div className="tab">
              <div className="tab1">
                <h2 style={{ fontWeight: "500" }}>All Customers</h2>
                <h5 style={{ color: "green", fontWeight: "400" }}>
                  Active Members
                </h5>
              </div>
              <div className="tab2">
                <div className="tabsearch">
                  <span>
                    <LuSearch />
                  </span>
                  <input type="text" placeholder="Search" />
                </div>
                <div className="tabsearchh">
                  <h5 style={{ color: "grey", fontWeight: "500" }}>
                    Short by:
                  </h5>
                  <select>
                    <option>Newest</option>
                    <option>Oldest</option>
                  </select>
                </div>
              </div>
            </div>
            <Mui />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
