import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { Data } from "./Data";
import LeftSide from "./components/LeftSide";
import RigthSide from "./components/RigthSide";

const Products = () => {
  const [searchItem, setSearchItem] = useState("");
  const [filterItem, setFilterItem] = useState("");
  const [strengthItem, setStrengthItem] = useState("");
  const [categoriesItem, setCategoriesItem] = useState("");
  //category data
  const category = [
    "Parcetaral Tablets",
    "Parcetaral Syrup",
    "Parcetaral Power",
    "Mogalotate Simethicone Oral Suspension",
    "Mefenamic Parcetaral Syrup",
  ];

  const brands = [
    "Cipmol Parcetaral",
    "Pandal Parcetaral Tablets",
    "Combiflam",
    "Crocin Tablets",
    "Calpol Parcetaral Tablets",
    "Sumo Tablets",
  ];

  const businessType = ["Wholesale", "Manufacture", "Retailer", "Exporter"];
  const strength = ["500 mg", "600 mg"];
  const manuf = ["Intas Pharmaceutical LTD", "Alkem Laboratories LTD"];

  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleClick = () => {
    setFilterItem(searchItem);
    clearFilterStrength();
    clearFilterCategory();
  };

  const clearFilterStrength = () => {
    setStrengthItem("");
  };

  const clearFilterCategory = () => {
    setCategoriesItem("");
  };
  return (
    <ProductStyle>
      <div className='product-search'>
        <button className='search-icon'>
          <AiOutlineSearch />
        </button>
        <input
          type='text'
          placeholder='Search Products'
          onChange={handleChange}
        />
        <button className='search' onClick={handleClick}>
          Search
        </button>
      </div>

      <div className='filter-items'>
        <button onClick={clearFilterStrength}>{strengthItem}</button>
        <button onClick={clearFilterCategory}>{categoriesItem}</button>
      </div>

      <div className='product-section'>
        <section className='left'>
          <LeftSide
            category={category}
            brands={brands}
            businessType={businessType}
            strength={strength}
            manuf={manuf}
            setStrengthItem={setStrengthItem}
            setCategoriesItem={setCategoriesItem}
          />
        </section>
        <section className='rigth'>
          {Data.filter((val) => {
            if (categoriesItem === "") {
              return val;
            } else if (val.category === categoriesItem) {
              return val;
            }
          })
            .filter((val) => {
              if (strengthItem === "") {
                return val;
              } else if (val.strength === strengthItem) {
                return val;
              }
            })
            .filter((val) => {
              if (filterItem === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(filterItem.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item, index) => {
              return <RigthSide key={index} item={item} />;
            })}
        </section>
      </div>
    </ProductStyle>
  );
};

export default Products;

const ProductStyle = styled.main`
  padding-top: 2rem;
  padding-bottom: 5rem;

  .filter-items {
    text-align: center;
    padding-top: 2rem;
  }

  .product-search {
    position: relative;
    text-align: center;

    .search-icon {
      position: absolute;
      padding: 1.5rem 1rem;
      border: none;
      background-color: transparent;
      scale: 2;
    }
    input {
      padding: 0.95rem 2rem;
      border: 0.5px solid grey;
      border-radius: 0.5rem 0rem 0rem 0.5rem;
      font-weight: 500;
      font-size: 1.5rem;
    }
    .search {
      position: absolute;
      border: none;
      padding: 1rem 2rem;
      background-color: #7dd8d6;
      color: white;
      font-weight: 500;
      font-size: 1.5rem;
    }
  }

  .product-section {
    padding-top: 2rem;
    display: flex;
    justify-content: center;

    .rigth {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }
  }

  @media (max-width: 1024px) and (min-width: 750px) {
    background-color: #7dd8d6;
    .product-section {
      .rigth {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  @media (max-width: 750px) {
    background-color: #c77905;
    .product-section {
      .rigth {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;
