import React from "react";
import "./FilterSection.css";
import arrowUp from "../../assets/arrow-up.png";
import arrow from "../../assets/arrow.png";

const FilterSection = (props) => {
  const {
    checkboxes,
    handleCheckboxChange,
    handleUnSelectAll,
    handleShowCheckBoxes,
    showCheckBoxes,
  } = props;
  return (
    <>
      <div className="fs-cont">
        <div className="fs-div1">
          <input type="checkbox" className="fs-check1" />
          <div className="fs-text">Customizable</div>
        </div>
        <div className="fs-bottm">
          <div onClick={handleShowCheckBoxes} className="fs-div2">
            <div className="fs-text">Ideal For</div>
            <img
              alt="up"
              className="fs-arrIcon"
              src={showCheckBoxes ? arrowUp : arrow}
            />
          </div>
          <div className="fs-text1">All</div>

          {showCheckBoxes && (
            <div className="fs-checkBoxs">
              <div className="fs-unSlec">
                <u onClick={handleUnSelectAll}>Unselect All</u>
              </div>
              <div className="fs-check2">
                <input
                  type="checkbox"
                  name="checkbox1"
                  checked={checkboxes.checkbox1}
                  onChange={handleCheckboxChange}
                />
                <label> Men</label>
              </div>
              <div className="fs-check2">
                <input
                  type="checkbox"
                  name="checkbox2"
                  checked={checkboxes.checkbox2}
                  onChange={handleCheckboxChange}
                />
                <label> Women</label>
              </div>
              <div className="fs-check2">
                <input
                  type="checkbox"
                  name="checkbox3"
                  checked={checkboxes.checkbox3}
                  onChange={handleCheckboxChange}
                />
                <label> Baby Kids</label>
              </div>
            </div>
          )}
        </div>
        <div className="fs-bottm">
          <div onClick={handleShowCheckBoxes} className="fs-div2">
            <div className="fs-text">Occasion</div>
            <img
              alt="up"
              className="fs-arrIcon"
              src={showCheckBoxes ? arrowUp : arrow}
            />
          </div>
          <div className="fs-text1">All</div>
        </div>
        <div className="fs-bottm">
          <div onClick={handleShowCheckBoxes} className="fs-div2">
            <div className="fs-text">Work</div>
            <img
              alt="up"
              className="fs-arrIcon"
              src={showCheckBoxes ? arrowUp : arrow}
            />
          </div>
          <div className="fs-text1">All</div>
        </div>
        <div className="fs-bottm">
          <div onClick={handleShowCheckBoxes} className="fs-div2">
            <div className="fs-text">fabric</div>
            <img
              alt="up"
              className="fs-arrIcon"
              src={showCheckBoxes ? arrowUp : arrow}
            />
          </div>
          <div className="fs-text1">All</div>
        </div>
        <div className="fs-bottm">
          <div onClick={handleShowCheckBoxes} className="fs-div2">
            <div className="fs-text">Segment</div>
            <img
              alt="up"
              className="fs-arrIcon"
              src={showCheckBoxes ? arrowUp : arrow}
            />
          </div>
          <div className="fs-text1">All</div>
        </div>
        <div className="fs-bottm">
          <div onClick={handleShowCheckBoxes} className="fs-div2">
            <div className="fs-text">Suitable For</div>
            <img
              alt="up"
              className="fs-arrIcon"
              src={showCheckBoxes ? arrowUp : arrow}
            />
          </div>
          <div className="fs-text1">All</div>
        </div>
        <div className="fs-bottm">
          <div onClick={handleShowCheckBoxes} className="fs-div2">
            <div className="fs-text">raw materials</div>
            <img
              alt="up"
              className="fs-arrIcon"
              src={showCheckBoxes ? arrowUp : arrow}
            />
          </div>
          <div className="fs-text1">All</div>
        </div>
        <div className="fs-bottm">
          <div onClick={handleShowCheckBoxes} className="fs-div2">
            <div className="fs-text">Pattern</div>
            <img
              alt="up"
              className="fs-arrIcon"
              src={showCheckBoxes ? arrowUp : arrow}
            />
          </div>
          <div className="fs-text1">All</div>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
