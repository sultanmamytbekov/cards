import React, { useEffect, useState } from "react";
import img from "../../img/Logo.png";
import Mbank from "../../img/mbank-line.jpg";
import Demir from "../../img/Demir.png";
import Finka from "../../img/finka.png";
import AddMbank from "../../img/add1.png";
import AddDemir from "../../img/add2.png";
import AddFinca from "../../img/add3.png";
import bacrount from "../../img/cool-background.png"
import bacrount1 from "../../img/cool-background1.png"
import bacrount2 from "../../img/gold-background.webp"
import bacrount3 from "../../img/cool-background3.png"
import { MdOutlineDelete } from "react-icons/md";
import { BiChevronUp } from "react-icons/bi";
import { LuPenSquare } from "react-icons/lu";
import "./index.scss";


function Header({ dark, setDark }) {
  const [color, setColor] = useState("rgb(40, 37, 38)");
  const [hover, setHover] = useState(true);
  const [hoverColor, setHoverColor] = useState(false);
  const [block, setBlock] = useState(false);
  const [mbank, setMBank] = useState(0);
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  function Name(value) {
    let str = value.target.value;
    str = str
      .split(" ")
      .map((el) => {
        return el
          .split("")
          .filter((el1) => {
            return el1.toUpperCase() !== el1.toLowerCase();
          })
          .join("");
      })
      .join(" ")
      .toUpperCase()
      .slice(0, 13);
    setName(str);
  }
  function CardNumbers(e) {
    let str = e.target.value;
    str = str.replace(/-/g, "");
    let res = "";
    for (let i = 0; i < str.length; i++) {
      if (i !== 0 && i % 4 === 0) {
        res += "-";
      }
      res += str[i];
    }
    res = res
      .split("")
      .filter((el) => +el || el === "-")
      .join("")
      .slice(0, 19);
    setCardNumber(res);
  }
  function ExpiryDate(e) {
    let str = e.target.value;
    str = str.replace(/[/]/g, "");
    let res = "";
    for (let i = 0; i < str.length; i++) {
      if (i === 2) {
        res += "/";
      }
      res += str[i];
    }
    res = res
      .split("")
      .filter((el) => +el || el === "/")
      .join("")
      .slice(0, 5);
    setExpiryDate(res);
  }
  function Cvv(e) {
    let str = e.target.value;
    str = str
      .split("")
      .filter((el) => +el)
      .join("")
      .slice(0, 3);
    setCvv(str);
  }
  function Delete() {
    setColor("rgb(40, 37, 38)");
    setMBank(0);
    setName("");
    setCardNumber("");
    setExpiryDate("");
    setCvv("");
    setBlock(false)
  }
  function Remove() {
    let arr = [];
    localStorage.setItem("data", JSON.stringify(arr));
    setData(arr);
  }
  let left = 10;
  let Img = Mbank;
  let Add = AddMbank;
  let background = bacrount
  If()
  function If(){
    if(color === 'rgb(40, 37, 37)'){
      background = bacrount
    }else if(color === 'rgb(6, 139, 192)'){
      background = bacrount1
    }else if(color === '#ffd700'){
      background = bacrount2
    }else if(color === 'rgb(167, 7, 7)'){
      background = bacrount3
    }else if(color === 'rgb(40, 37, 38)'){
      background = bacrount
    }
  }

  if (mbank === 1) {
    left = 10;
    Img = Mbank;
    Add = AddMbank;
  } else if (mbank === 2) {
    left = 43;
    Img = Demir;
    Add = AddDemir;
  } else if (mbank === 3) {
    left = 76;
    Img = Finka;
    Add = AddFinca;
  } else if (mbank === 0) {
    left = 10;
    Img = Mbank;
    Add = AddMbank;
  }
  function AddData() {
    if (
      name.length !== 0 &&
      cardNumber.length !== 0 &&
      expiryDate.length !== 0 &&
      cvv.length !== 0
    ) {
      if (name.length < 2) {
        alert("заполните полностью Name");
      } else if (cardNumber.length !== 19) {
        alert("заполните полностью Card number");
      } else if (expiryDate.length !== 5) {
        alert("заполните полностью Expiry date");
      } else if (cvv.length !== 3) {
        alert("заполните полностью Cvv");
      } else {
        let obj = {
          id: Date.now(),
          name: name,
          card: cardNumber,
          expiry: expiryDate,
          cvv1: cvv,
          colors: background,
          bank: Add,
        };
        let data = JSON.parse(localStorage.getItem("data")) || [];
        data.push(obj);
        localStorage.setItem("data", JSON.stringify(data));
        setData(data);
        Delete();
      }
    } else {
      alert("Эй гангирбаш толтур барын !!");
    }
  }
  function Edit(){
    let newData = data
    newData.slice(data.length - 1, data.length).map(el => {
    let color = 'rgb(40,37,37)'
    let bank = Mbank
    if(el.colors === '/static/media/cool-background.dd46645e28aff4f07d6e.png'){
      color = 'rgb(40,37,37)'
    }else if (el.colors === '/static/media/cool-background3.38a77f05156947626f62.png'){
      color = 'rgb(167, 7, 7)'
    }else if (el.colors === '/static/media/gold-background.5110e8390d832bea5b87.webp'){
      color = '#ffd700'
    }else if (el.colors === '/static/media/cool-background1.8f04ef186d9de9edebe5.png'){
      color = 'rgb(6, 139, 192)'
    }
    if(el.bank === '/static/media/add1.78cebf0031c79708a140.png'){
      bank = 1
    }else if (el.bank === '/static/media/add2.d5206f5e6563b9ef9cf1.png'){
      bank = 2
    }else if (el.bank === '/static/media/add3.cbddbbd58f10ebe0b3da.png'){
      bank = 3
    }
    setColor(color);
    setName(el.name);
    setCardNumber(el.card);
    setExpiryDate(el.expiry);
    setCvv(el.cvv1);
    setMBank(bank)
    })
  }
  

  useEffect(() => {
    if (hover === true) {
      setHoverColor(false);
    } else {
      setTimeout(() => {
        setHoverColor(true);
      }, 300);
    }
  }, [hover]);

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header--block">
            <h1>Checkout</h1>
            <h3>€ 300,00</h3>
            <div className="text">
              <p>Saved Cards</p>
              <h4>+ Add New</h4>
            </div>
            <div className="header--block__list">
              <div className="block">
                <div className="div1">
                  <img src={img} alt="" />
                  <div>
                    <h3>
                      <MdOutlineDelete />
                    </h3>
                    <h3>
                      <LuPenSquare />
                    </h3>
                  </div>
                </div>
                <h1>5142 - 8164 - 6526 - 2563</h1>
                <div className="div2">
                  <h2>NAME</h2>
                  <h2>VALID TILL</h2>
                </div>
                <div className="div3">
                  <h1>{"jenner anne".toUpperCase()}</h1>
                  <h1>10/28</h1>
                </div>
              </div>
              {data.slice(data.length - 1 , data.length).map((el) => (
                <div style={{ background: `url(${el.colors}) no-repeat center/cover` }} className="block">
                  <div className="div1">
                    <img src={el.bank} alt="" />
                    <div>
                      <h3 onClick={Remove}>
                        <MdOutlineDelete />
                      </h3>
                      <h3 onClick={Edit}>
                        <LuPenSquare />
                      </h3>
                    </div>
                  </div>
                  <h1>{el.card.split("-").join(" - ")}</h1>
                  <div className="div2">
                    <h2>NAME</h2>
                    <h2>VALID TILL</h2>
                  </div>
                  <div className="div3">
                    <h1>{el.name}</h1>
                    <h1>{el.expiry}</h1>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={Remove}>DELETE</button>
          </div>
          <div className="header--block1">
            <h1>ADD new card</h1>
            <div className="taxt">
              <h3>Enter details</h3>
              <div className="text1">
                <div>
                  <p>Name</p>
                  <input
                    value={name}
                    onChange={Name}
                    type="text"
                    placeholder="JENNER ANNE"
                  />
                </div>
                <div>
                  <p>Card number</p>
                  <input
                    value={cardNumber}
                    onChange={CardNumbers}
                    type="text"
                    placeholder="4111 - 1111 - 1111 - 1111"
                  />
                </div>
                <div>
                  <p>Expiry date</p>
                  <input
                    value={expiryDate}
                    onChange={ExpiryDate}
                    type="text"
                    placeholder="10/28"
                  />
                </div>
                <div>
                  <p>Cvv</p>
                  <input
                    value={cvv}
                    onChange={Cvv}
                    type="text"
                    placeholder="045"
                  />
                </div>
              </div>

              <div className="homeText">
                <div
                  
                  onMouseLeave={() => {
                    setHover(true);
                  }}
                  className="color"
                  style={{
                    width: hover ? "40px" : "",
                    height: hover ? "40px" : "",
                  }}
                >
                  <div
                  onClick={() => {
                    setHover(false);
                  }}
                    style={{ background: color, border: hover ? "none" : "" }}
                    className="block"
                  ></div>
                  <div
                    style={{
                      display: hoverColor ? "" : "none",
                      background: hover ? color : "",
                    }}
                    onClick={() => {
                      setColor("rgb(40, 37, 37)");
                    }}
                    className="red"
                  ></div>
                  <div
                    style={{
                      display: hoverColor ? "" : "none",
                      background: hover ? color : "",
                    }}
                    onClick={() => {
                      setColor("rgb(167, 7, 7)");
                    }}
                    className="green"
                  ></div>
                  <div
                    style={{
                      display: hoverColor ? "" : "none",
                      background: hover ? color : "",
                    }}
                    onClick={() => {
                      setColor("rgb(6, 139, 192)");
                    }}
                    className="blue"
                  ></div>
                  <div
                    style={{
                      display: hoverColor ? "" : "none",
                      background: hover ? color : "",
                    }}
                    onClick={() => {
                      setColor("#ffd700");
                    }}
                    className="yellow"
                  ></div>
                </div>
                <div className="Mbank">
                  <div className="text">
                    <img src={Img} alt="" />
                    <h1
                      style={{ rotate: block ? "" : "180deg" }}
                      onClick={() => setBlock(!block)}
                    >
                      <BiChevronUp />
                    </h1>
                  </div>
                  <div
                  onMouseLeave={() => {
                    setBlock(!block)
                  }}
                    style={{
                      height: block ? "" : "0",
                      top: block ? "" : "90%",
                      borderBottom: block ? "" : "none",
                    }}
                    className="block"
                  >
                    <img
                      onClick={() => {
                        setMBank(1);
                      }}
                      style={{ display: block ? "block" : "none" }}
                      src={Mbank}
                      alt=""
                    />
                    <img
                      onClick={() => {
                        setMBank(2);
                      }}
                      style={{ display: block ? "block" : "none" }}
                      src={Demir}
                      alt=""
                    />
                    <img
                      onClick={() => {
                        setMBank(3);
                      }}
                      style={{ display: block ? "block" : "none" }}
                      src={Finka}
                      alt=""
                    />
                    <div
                      style={{
                        left: `${left}%`,
                        display: block ? "block" : "none",
                      }}
                      className="Htext"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="list">
                <h3>Enter details</h3>
                <div
                  style={{
                    justifyContent: dark ? "end" : "start",
                    background: dark ? "" : "rgb(177, 168, 156)",
                  }}
                  onClick={() => setDark(!dark)}
                  className="dark"
                >
                  <div></div>
                </div>
              </div>
            </div>
            <button onClick={AddData}>SAVE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
