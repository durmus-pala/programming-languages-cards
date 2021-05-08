import React from 'react';
import '../App.scss';
import ContainerCard from '../components/ContainerCard';
import reactImg from "../components/images/react.svg";
import {categories} from '../helpers/Data';

function Main() {
const arr = categories.map((item) => (
  <ContainerCard name = {item.name} logo = {item.img} options = {item.options} />
));

  return (
    <div className="main">
    <div className="header">
      <img className="top_img" src={reactImg} alt="" />
    </div>
    <div className="card">
      <div className="ribbon"></div>
      <div className="box">
        <h1 className="title">Languages</h1>
        {arr}
      </div>
    </div>
  </div>
  );
}

export default Main;