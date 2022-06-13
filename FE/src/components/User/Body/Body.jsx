import React from "react";
import "../Body/Body.css";
import "../css/base.css";
import "../css/grid.css";
import "../css/responsive.css";
import ava from "../img/user-avatar-filled-alt.jpg";
import big_logo from "../img/big_logo.png";

function Body() {
  const [visibleI, setVisibleI] = React.useState(true);
  const [visibleB, setVisibleB] = React.useState(false);
  const [visibleR, setVisibleR] = React.useState(false);
  const [visibleP, setVisibleP] = React.useState(false);
  const [isActiveI, setActiveI] = React.useState(true);
  const [isActiveB, setActiveB] = React.useState(false);
  const [isActiveR, setActiveR] = React.useState(false);
  const [isActiveP, setActiveP] = React.useState(false);
  const [chooseIndex, setIndex] = React.useState(0);
  const handleButton = (index) => {
    setVisibleI(false);
    setVisibleB(false);
    setVisibleR(true);
    setVisibleP(false);
    setActiveI(false);
    setActiveB(false);
    setActiveR(true);
    setActiveP(false)
    console.log(index);
    setIndex(index);
  }
  return (
    <div className="app__container">
      <div className="grid wide">
        <div className="row sm-gutter app__content">
          <div className="col l-3 m-12 c-12">
            <div className="avatar">
              <img src={ava} className="body-user-img" alt="" />
              <span className="body-user-name">Group 4</span>
            </div>
            <div className="category">
              <ul className="category-list">
                <li className="category-item">
                  <div
                    onClick={function () {
                      setVisibleI(true);
                      setVisibleB(false);
                      setVisibleR(false);
                      setVisibleP(false)
                      setActiveI(true);
                      setActiveB(false);
                      setActiveR(false);
                      setActiveP(false);
                    }}
                    className={
                      isActiveI
                        ? "category-item-link category-item-link-active"
                        : "category-item-link"
                    }
                  >
                    <i className="category-item-icon fa-solid fa-circle-user"></i>
                    <span className="category-item-name">My information</span>
                  </div>
                </li>
                <li className="category-item">
                  <div
                    onClick={function () {
                      setVisibleI(false);
                      setVisibleB(true);
                      setVisibleR(false);
                      setVisibleP(false);
                      setActiveI(false);
                      setActiveB(true);
                      setActiveR(false);
                      setActiveP(false);
                    }}
                    className={
                      isActiveB
                        ? "category-item-link category-item-link-active"
                        : "category-item-link"
                    }
                  >
                    <i className="category-item-icon fa-solid fa-map"></i>
                    <span className="category-item-name">Booth map</span>
                  </div>
                </li>
                <li className="category-item">
                  <div
                    onClick={function () {
                      setVisibleI(false);
                      setVisibleB(false);
                      setVisibleR(true);
                      setVisibleP(false);
                      setActiveI(false);
                      setActiveB(false);
                      setActiveR(true);
                      setActiveP(false);
                    }}
                    className={
                      isActiveR
                        ? "category-item-link category-item-link-active"
                        : "category-item-link"
                    }
                  >
                    <i className="category-item-icon fa-brands fa-wpforms" />
                    <span className="category-item-name">Register form</span>
                  </div>
                </li>
                <li className="category-item">
                  <div
                    onClick={function () {
                      setVisibleI(false);
                      setVisibleB(false);
                      setVisibleR(false);
                      setVisibleP(true);
                      setActiveI(false);
                      setActiveB(false);
                      setActiveR(false);
                      setActiveP(true);
                    }}
                    className={
                      isActiveP
                        ? "category-item-link category-item-link-active"
                        : "category-item-link"
                    }
                  >
                    <i className="category-item-icon fa-solid fa-lock" />
                    <span className="category-item-name">Change Password</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col l-9 m-12 c-12">
            {visibleI && (
              <div className="information">
                <span className="information-title">My information</span>
                <i className="edit-icon fa-solid fa-pen-to-square"></i>
                <ul className="information-list">
                  <li className="information-item">
                    <fieldset>
                      <legend>Name</legend>
                      <input className="input no-outline hide" type="text" />
                      <p className="input">Group 4</p>
                    </fieldset>
                  </li>
                  <li className="information-item">
                    <fieldset>
                      <legend>Representative</legend>
                      <input className="input no-outline hide" type="text" />
                      <p className="input">Group 4</p>
                    </fieldset>
                  </li>
                  <li className="information-item">
                    <fieldset>
                      <legend>Phone number</legend>
                      <input className="input no-outline hide" type="text" />
                      <p className="input">0912999jqk</p>
                    </fieldset>
                  </li>
                  <li className="information-item">
                    <fieldset>
                      <legend>Email</legend>
                      <input className="input no-outline hide" type="email" />
                      <p className="input">group4@hcmut.edu.vn</p>
                    </fieldset>
                  </li>
                  <li className="information-item">
                    <fieldset>
                      <legend>Address</legend>
                      <input className="input no-outline hide" type="text" />
                      <p className="input">Viet Nam</p>
                    </fieldset>
                  </li>
                </ul>
              </div>
            )}
            {visibleB && (
              <div id="BoothMap" className="booth-map">
                <div className="booth">
                  <div className="h6-building">
                    <img className="h6-logo" src={big_logo} alt="logo" />
                  </div>
                  <div className="booth-behind">
                    <div className="h6-block"></div>
                    <div className="booth-behind-map">
                      <table>
                        <tbody>
                          <tr>
                            <td className="btn btn-none" />
                          </tr>
                          <tr>
                            <td className="btn btn-none" />
                            <td className="btn" onClick={() => handleButton(5)}>5</td>
                            <td className="btn" onClick={() => handleButton(6)}>6</td>
                            <td className="btn" onClick={() => handleButton(7)}>7</td>
                            <td className="btn" onClick={() => handleButton(8)}>8</td>
                            <td className="btn btn-none" />
                            <td className="btn btn-reject" onClick={() => handleButton(21)}>21</td>
                            <td className="btn" onClick={() => handleButton(22)}>22</td>
                            <td className="btn" onClick={() => handleButton(23)}>23</td>
                            <td className="btn" onClick={() => handleButton(24)}>24</td>
                            <td className="btn btn-none" />
                            <td className="btn" onClick={() => handleButton(33)}>33</td>
                            <td className="btn" onClick={() => handleButton(34)}>34</td>
                            <td className="btn" onClick={() => handleButton(35)}>35</td>
                            <td className="btn" onClick={() => handleButton(36)}>36</td>
                            <td className="btn btn-none" />
                            <td className="btn" onClick={() => handleButton(61)}>61</td>
                            <td className="btn" onClick={() => handleButton(62)}>62</td>
                          </tr>
                          <tr>
                            <td className="btn btn-none" />
                            <td className="btn" onClick={() => handleButton(9)}>9</td>
                            <td className="btn" onClick={() => handleButton(10)}>10</td>
                            <td className="btn" onClick={() => handleButton(11)}>11</td>
                            <td className="btn" onClick={() => handleButton(12)}>12</td>
                            <td className="btn btn-none" />
                            <td className="btn" onClick={() => handleButton(57)}>57</td>
                            <td className="btn" onClick={() => handleButton(58)}>58</td>
                            <td className="btn" onClick={() => handleButton(59)}>59</td>
                            <td className="btn" onClick={() => handleButton(60)}>60</td>
                            <td className="btn btn-none" />
                            <td className="btn" onClick={() => handleButton(45)}>45</td>
                            <td className="btn" onClick={() => handleButton(46)}>46</td>
                            <td className="btn" onClick={() => handleButton(47)}>47</td>
                            <td className="btn" onClick={() => handleButton(48)}>48</td>
                            <td className="btn btn-none" />
                            <td className="btn" onClick={() => handleButton(63)}>63</td>
                            <td className="btn" onClick={() => handleButton(64)}>64</td>
                          </tr>
                          <tr>
                            <td className="btn btn-none" />
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="booth-front">
                    <table>
                      <tbody>
                        <tr>
                          <td className="btn btn-none" />
                        </tr>
                        <tr>
                          <td className="btn btn-active" onClick={() => handleButton(1)}>1</td>
                          <td className="btn" onClick={() => handleButton(2)}>2</td>
                          <td className="btn btn-none" />
                          <td className="btn" onClick={() => handleButton(13)}>13</td>
                          <td className="btn" onClick={() => handleButton(14)}>14</td>
                          <td className="btn" onClick={() => handleButton(15)}>15</td>
                          <td className="btn" onClick={() => handleButton(16)}>16</td>
                          <td className="btn btn-none" />
                          <td className="btn" onClick={() => handleButton(25)}>25</td>
                          <td className="btn" onClick={() => handleButton(26)}>26</td>
                          <td className="btn" onClick={() => handleButton(27)}>27</td>
                          <td className="btn" onClick={() => handleButton(28)}>28</td>
                          <td className="btn btn-none" />
                          <td className="btn" onClick={() => handleButton(37)}>37</td>
                          <td className="btn" onClick={() => handleButton(38)}>38</td>
                          <td className="btn" onClick={() => handleButton(39)}>39</td>
                          <td className="btn" onClick={() => handleButton(40)}>40</td>
                          <td className="btn btn-none" />
                          <td className="btn" onClick={() => handleButton(49)}>49</td>
                          <td className="btn" onClick={() => handleButton(50)}>50</td>
                          <td className="btn" onClick={() => handleButton(51)}>51</td>
                          <td className="btn" onClick={() => handleButton(52)}>52</td>
                        </tr>
                        <tr>
                          <td className="btn" onClick={() => handleButton(3)}>3</td>
                          <td className="btn" onClick={() => handleButton(4)}>4</td>
                          <td className="btn btn-none" />
                          <td className="btn" onClick={() => handleButton(17)}>17</td>
                          <td className="btn" onClick={() => handleButton(18)}>18</td>
                          <td className="btn" onClick={() => handleButton(19)}>19</td>
                          <td className="btn" onClick={() => handleButton(20)}>20</td>
                          <td className="btn btn-none" />
                          <td className="btn" onClick={() => handleButton(29)}>29</td>
                          <td className="btn" onClick={() => handleButton(30)}>30</td>
                          <td className="btn" onClick={() => handleButton(31)}>31</td>
                          <td className="btn" onClick={() => handleButton(32)}>32</td>
                          <td className="btn btn-none" />
                          <td className="btn" onClick={() => handleButton(41)}>41</td>
                          <td className="btn" onClick={() => handleButton(42)}>42</td>
                          <td className="btn" onClick={() => handleButton(43)}>43</td>
                          <td className="btn" onClick={() => handleButton(44)}>44</td>
                          <td className="btn btn-none" />
                          <td className="btn" onClick={() => handleButton(53)}>53</td>
                          <td className="btn" onClick={() => handleButton(54)}>54</td>
                          <td className="btn" onClick={() => handleButton(55)}>55</td>
                          <td className="btn" onClick={() => handleButton(56)}>56</td>
                        </tr>
                        <tr>
                          <td className="btn btn-none" />
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="note">
                    <ul className="note-list">
                      <li className="note-item">
                        <div className="btn-note" />
                        <span>Available</span>
                      </li>
                      <li className="note-item">
                        <div className="btn-active btn-note" />
                        <span>Booking</span>
                      </li>
                      <li className="note-item">
                        <div className="btn-reject btn-note" />
                        <span>Booked</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {visibleR && (
              <div id="RegisterForm" className="register">
                <span className="information-title">Register form</span>
                <ul className="register-list">
                  <li className="register-item">
                    <fieldset>
                      <legend>Name</legend>
                      <input className="input no-outline" type="text" />
                    </fieldset>
                  </li>
                  <li className="register-item">
                    <fieldset>
                      <legend>Representative</legend>
                      <input className="input no-outline" type="text" />
                    </fieldset>
                  </li>
                  <li className="register-item">
                    <fieldset>
                      <legend>Phone number</legend>
                      <input className="input no-outline" type="text" />
                    </fieldset>
                  </li>
                  <li className="register-item">
                    <fieldset>
                      <legend>Email</legend>
                      <input className="input no-outline" type="email" />
                    </fieldset>
                  </li>
                  <li className="register-item">
                    <fieldset>
                      <legend>Index of booth</legend>
                      <input className="input no-outline" type="number" placeholder={chooseIndex}/>
                    </fieldset>
                  </li>
                </ul>
                <div className="register-btn" onClick={() => handleButton()}>
                  <span>REGISTER</span>
                </div>
              </div>
            )}
            {visibleP && (
              <div className="register">
                <span className="information-title">Register form</span>
                <ul className="register-list">
                  <li className="register-item">
                    <fieldset>
                      <legend>Current Password</legend>
                      <input className="input no-outline" type="password" />
                    </fieldset>
                  </li>
                  <li className="register-item">
                    <fieldset>
                      <legend>New Password</legend>
                      <input className="input no-outline" type="password" />
                    </fieldset>
                  </li>
                  <li className="register-item">
                    <fieldset>
                      <legend>Confirm Password</legend>
                      <input className="input no-outline" type="password" />
                    </fieldset>
                  </li>
                
                </ul>
                <div className="register-btn" onClick={() => handleButton()}>
                  <span>Change</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;
