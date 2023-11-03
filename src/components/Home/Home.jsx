/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
// import { CardWrapper, Para, Card } from "./Home.styles";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategorySortedData,
  setunsortedData,
  setPriceSortedData,
} from "../../store/slice/DataSlice";
import { HomeWrapper } from "./Home.styles";
import Header from "../Header/Header";
import { ItemCard } from "../ItemCard/ItemCard";
function Home() {
  const storeFilter = useSelector((store) => store.filter);
  const storeData = useSelector((store) => store.posts);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("none");

  useEffect(() => {
    async function getData() {
      if (filter === "none") {
        if (storeData.unsortedData.length !== 0) {
          setData(storeData.unsortedData);
        } else {
          let fetch = await axios.get(
            "https://api.escuelajs.co/api/v1/products"
          );
          setData(fetch.data);
          dispatch(setunsortedData(fetch.data));
        }
      }

      if (filter === "category") {
        setData([]);
        if (storeData.categorySortedData.length === 0) {
          let categories = await axios.get(
            "https://api.escuelajs.co/api/v1/categories"
          );
          let catNames = categories.data.map((item) => item.id);
          catNames.map(async (item) => {
            let catdata = await axios.get(
              `https://api.escuelajs.co/api/v1/products/?categoryId=${item}`
            );
            setData((prevData) => [...prevData, ...catdata.data]);
            dispatch(setCategorySortedData(catdata.data));
          });
        } else {
          setData(storeData.categorySortedData);
        }
      }

      if (filter === "price") {
        setData([]);
        if (storeData.priceSortedData.length === 0) {
          let fData = [...storeData.unsortedData];
          fData.sort((a, b) => a.price - b.price);
          setData(fData);
          setPriceSortedData(fData);
        } else {
          setData(storeData.priceSortedData);
        }
      }
    }
    getData();
  }, [filter]);

  useEffect(() => {
    setFilter(storeFilter.filter);
  }, [storeFilter, storeData]);

  return (
    <HomeWrapper>
      <Header />
      {data.map((item) => (
        <ItemCard
          key={item.id}
          title={item.title}
          price={item.price}
          images={item.images}
          description={item.description}
          category={item.category}
        />
      ))}
    </HomeWrapper>
  );
}

export default Home;
