import React from "react";
import "./Banner.css";
import { Card } from "antd";
import { CardDetails } from "../utils/constants/card";
import { NavLink } from "react-router-dom";
const { Meta } = Card;

const Banner = () => {
  return (
    // <div className="bgImg">
      <div className="flex justify-center items-center gap-16 h-[86vh] bg-slate-100">
        {CardDetails.map((item, index) => {
            const {text, bgImage, link} = item;
          return (
            <NavLink to={link}>
                <Card
              key={index}
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src={bgImage}
                />
              }
            >
              <Meta
                title={text}
                // description="www.instagram.com"
              />
            </Card>
            </NavLink>
          );
        })}
      </div>
    // </div>
  );
};

export default Banner;
