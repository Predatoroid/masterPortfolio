import React from "react";
import "./TopButton.css";
import { rgb } from "polished";

export default function TopButton({ theme }) {
  const arrowColor = rgb(255, 255, 255);

  function GoUpEvent() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function scrollFunction() {
    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      document.getElementById("topButton").style.visibility = "visible";
    } else {
      document.getElementById("topButton").style.visibility = "hidden";
    }
  }

  window.onscroll = function () {
    scrollFunction();
  };

  const onMouseEnter = (color, bgColor) => {
    /* For the button */
    const topButton = document.getElementById("topButton");
    topButton.style.color = arrowColor;
    topButton.style.backgroundColor = bgColor;

    /* For arrow icon */
    const arrow = document.getElementById("arrow");
    arrow.style.color = arrowColor;
    arrow.style.backgroundColor = bgColor;
  };

  const onMouseLeave = (color, bgColor) => {
    /* For the button */
    const topButton = document.getElementById("topButton");
    topButton.style.color = arrowColor;
    topButton.style.backgroundColor = bgColor;

    /* For arrow icon */
    const arrow = document.getElementById("arrow");
    arrow.style.color = arrowColor;
    arrow.style.backgroundColor = bgColor;
  };

  return (
    <div
      onClick={GoUpEvent}
      id="topButton"
      style={{
        color: arrowColor,
        backgroundColor: theme.text,
        border: `solid 1px ${theme.text}`,
      }}
      title="Go up"
      onMouseEnter={() => onMouseEnter(theme.text, theme.body)}
      onMouseLeave={() => onMouseLeave(theme.body, theme.text)}
    >
      <i class="fas fa-arrow-up" id="arrow" aria-hidden="true" />
    </div>
  );
}
