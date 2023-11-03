/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategorySortedData,
  setunsortedData,
  setPriceSortedData,
} from "../../store/slice/DataSlice";
import {
  HomeWrapper,
  PaginationDiv,
  PaginationDivWrapper,
  PaginationNumSpan,
  SpinnerWrapper,
} from "./Home.styles";
import Header from "../Header/Header";
import { ItemCard } from "../ItemCard/ItemCard";
import Spinner from "../Spinner/Spinner";

function Home() {
  const storeFilter = useSelector((store) => store.filter);
  const storeData = useSelector((store) => store.posts);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("none");
  const [dataLength, setDataLength] = useState([]);
  const [activePage, setActivePage] = useState(0);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    if (storeData.unsortedData.length !== 0) {
      setDataLength(
        Array.from(
          { length: Math.floor(storeData.unsortedData.length / 16) + 1 },
          (_, index) => index
        )
      );
    }
  }, [storeData]);

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
    setActivePage(0);
  }, [filter]);

  useEffect(() => {
    setFilter(storeFilter.filter);
  }, [storeFilter]);

  useEffect(() => {
    if (activePage === Math.floor(data.length / 16)) {
      console.log("true");
      setDisplayData(
        data.slice(Math.floor(data.length / 16) * 16, data.length - 1)
      );
    } else {
      console.log("else");
      setDisplayData(data.slice(activePage * 16, (activePage + 1) * 16 - 1));
    }
  }, [activePage, data]);

  const handlePagination = (e) => {
    setActivePage(parseInt(e.target.getAttribute("name")), 10);
  };

  return (
    <>
      {storeData.unsortedData.length === 0 ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : (
        <HomeWrapper>
          <Header />

          <PaginationDivWrapper>
            <PaginationDiv>
              {dataLength.map((item) => {
                return (
                  <PaginationNumSpan
                    style={{
                      backgroundColor: item === activePage && "#ca85dd",
                    }}
                    onClick={handlePagination}
                    key={item}
                    name={item}
                  >
                    {item + 1}
                  </PaginationNumSpan>
                );
              })}
            </PaginationDiv>
          </PaginationDivWrapper>

          {displayData.map((item) => (
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
      )}
    </>
  );
}

export default Home;
