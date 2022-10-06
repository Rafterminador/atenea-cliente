import React from "react";
import ItemComboBox from "./ItemComboBox";
import { useState } from "react";
import uuid from "react-uuid";
import DropDown from "../assets/images/drop-down.svg";
import DropUp from "../assets/images/drop-up.svg";
import BoletinCard from "../components/BoletinCard";

const Notes = (props) => {
  const [active, setActive] = useState("");
  const [hidden, setHidden] = useState("hidden");
  const [dropImage, setDropImage] = useState(DropDown);
  const [inputValue, setInputValue] = useState(props.valueByDefault);
  const changeInputValue = (teacher) => {
    document.getElementById("teacher").placeholder = "";
    setInputValue(teacher);
    setActive("");
    setHidden("hidden");
    setDropImage(DropDown);
  };
  const changeState = () => {
    if (active !== "combo-box-active") {
      setActive("combo-box-active");
      setHidden("");
      setDropImage(DropUp);
    } else {
      setActive("");
      setHidden("hidden");
      setDropImage(DropDown);
    }
  };

  return (
    <>
      <div
        style={{ position: "relative", cursor: "pointer" }}
        onClick={changeState}
      >
        <input
          className={`font-normal w-full combo-box text-[#4D3483] my-2 bordercard ${active}`}
          placeholder={props.unidad}
          readOnly
          id="teacher"
          required
          value={inputValue}
        />
        <img
          src={dropImage}
          alt="More information"
          style={{
            position: "absolute",
            top: "0",
            bottom: "0",
            margin: "auto 0",
            right: "20px",
          }}
        />
      </div>
      <div className={`${hidden}`}>
        <div className="combo-box-container-notes">{<BoletinCard />}</div>
      </div>
    </>
  );
};

export default Notes;
