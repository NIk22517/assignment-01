import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import styled from "styled-components";

const RigthSide = ({ item }) => {
  return (
    <ProductRigthStyle>
      <img src={item.cover} alt='' />
      <h6 className='title'>{item.name}</h6>
      <p>{item.price}</p>
      <h6 className='pharma'>{item.pharma}</h6>
      <p className='loc'>{item.location}</p>
      <hr />
      <button>
        <FaTelegramPlane /> Contact Supplier
      </button>
    </ProductRigthStyle>
  );
};

export default RigthSide;

const ProductRigthStyle = styled.article`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid grey;
  text-align: center;
  position: relative;
  height: 400px;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3%;
    background-color: #750b0b;
    bottom: 0;
    left: 0;
    border-radius: 0rem 0rem 0.4rem 0.5rem;
  }

  img {
    border-radius: 0.5rem;
  }

  .title {
    padding-top: 1rem;
    padding-bottom: 0.4rem;
    font-size: 0.9rem;
  }
  .pharma {
    padding-top: 0.5rem;
  }

  .loc {
    font-size: 0.7rem;
    padding-bottom: 1rem;
  }
  button {
    border: none;
    background-color: transparent;
    color: #0e7a76;
    font-weight: 900;
    cursor: pointer;
    width: 100%;
    padding: 1rem;

    :hover {
      background-color: #0e7a76;
      color: #ffffff;
    }

    svg {
      margin-right: 1rem;
      scale: 1.5;
    }
  }
`;
