import React, { useEffect, useState } from "react";
import DetailPage from "../../component/body/users/DetailComponent";
import Navbar from "../../component/theme/users/NavbarPage/index.js";
import axios from "axios";
import Footer from "../../component/body/users/FooterComponent";
function DetailBooks(props) {
  let [idBooks, setIdBooks] = useState([]);
  let [idBorower, setIdBorower] = useState([]);
  useEffect(() => {
    getIdBooks();
  }, []);

  let getIdBooks = () => {
    axios({
      method: "GET",
      url:
        "http://54.158.98.207:3006/books/?search=" +
        props.match.params.id +
        "&field=id",
    })
      .then((response) => {
        console.log(response);
        setIdBooks(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />

      {idBooks.map((idBooks) => {
        return <DetailPage paramId={props.match.params.id} idBooks={idBooks} />;
      })}

      <Footer />
    </>
  );
}

export default DetailBooks;
