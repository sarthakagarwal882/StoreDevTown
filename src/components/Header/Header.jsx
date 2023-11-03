import { useState } from "react";
import "./Header.styles";
import {
  FilterDiv,
  FilterDropdownDiv,
  FilterDropdownLi,
  FilterDropdownUl,
  FilterSpan,
  HeaderDiv,
  HeaderH1,
  HeaderHr,
  HeaderWrapperDiv,
} from "./Header.styles";
import { useDispatch } from "react-redux";
import { setStoreFilter } from "../../store/slice/FilterSlice";
export default function Header() {
  const dispatch=useDispatch()
  const [filter,setFilter]=useState('none')
  function handleFilter(e){
    let name= (e.target.getAttribute("name"));
    setFilter(name)
    dispatch(setStoreFilter(name))
  }
  return (
    <HeaderWrapperDiv>
      <HeaderDiv>
        <HeaderH1>Products</HeaderH1>
        <FilterDiv>
          <FilterSpan>Sort by: {filter}</FilterSpan>
          <FilterDropdownDiv>
            <FilterDropdownUl>
              <FilterDropdownLi name="none" onClick={handleFilter}>None</FilterDropdownLi>
              <FilterDropdownLi name="category" onClick={handleFilter}>Category</FilterDropdownLi>
              <FilterDropdownLi name="price" onClick={handleFilter}>Price</FilterDropdownLi>
            </FilterDropdownUl>
          </FilterDropdownDiv>
        </FilterDiv>
      </HeaderDiv>
      <HeaderHr />
    </HeaderWrapperDiv>
  );
}
