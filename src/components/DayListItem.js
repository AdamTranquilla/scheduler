import React from "react";
import classNames from 'classnames/bind'; //why does this work???
import "components/DayListItem.scss";

export default function DayListItem(props) {

  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected, //if props.confrim is true then it is added to the string after button
    "day-list__item--full": !props.spots // do this for the --styles!
  });

  const formatSpots = (spots) => {
    switch (spots) {
      case 0:
        return "no spots remaining";
      case 1:
        return "1 spot remaining";
      default:
        return `${spots} spots remaining`;
    }
  };

  return (
    <li className={dayClass} data-testid="day" onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}