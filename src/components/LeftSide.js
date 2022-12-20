import React from "react";
import styled from "styled-components";

const LeftSide = ({ category, brands, businessType, strength, manuf, setStrengthItem, setCategoriesItem }) => {

  const handleStrength = (e) => {
    setStrengthItem(e.target.value);
  };

  const handleCategory = (e) => {
    setCategoriesItem(e.target.value)
  }
  return (
    <>
      <FilterSection>
        <h4>Related Category</h4>
        {category.map((data, index) => {
          return (
            <button value={data} onClick={handleCategory} key={index}>
              {data}
            </button>
          );
        })}
      </FilterSection>

      <FilterSection>
        <h4>Related Brands</h4>
        {brands.map((data, index) => {
          return <button key={index}>{data}</button>;
        })}
      </FilterSection>

      <FilterSection>
        <h4>Business Type</h4>
        {businessType.map((data, index) => {
          return <button key={index}>{data}</button>;
        })}
      </FilterSection>

      <FilterSection>
        <h4>Strength</h4>
        {strength.map((data, index) => {
          return (
            <button value={data} onClick={handleStrength} key={index}>
              {data}
            </button>
          );
        })}
      </FilterSection>

      <FilterSection>
        <h4>Manufacturer</h4>
        {manuf.map((data, index) => {
          return <button key={index}>{data}</button>;
        })}
      </FilterSection>
    </>
  );
};

export default LeftSide;

const FilterSection = styled.article`
  width: 200px;
  margin-right: 5rem;
  padding-bottom: 2rem;
  text-align: center;

  button {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0rem;
    margin-block: 0.2rem;
  }
`;
