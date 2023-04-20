import { Alert, Box, Stack } from "@mui/material";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function HomePage() {
  
  const [vin, setVin] = useState("");
  const router= useRouter()

  const changeHandler = (event) => {
    // console.log("Clicked..");
    setVin(event.target.value);
  };

  const clickHandler = (data) => {
    router.push({
      pathname:  `/${data}`,
      query: {vin : data}
    },`/${data}` )
    // setValue("");
    // console.log(data);
    // setIsLoading(true);
    // if (!!data) {
    //   axios
    //     .get(`https://vindecoder.onrender.com/vin-decode/${data}`)
    //     .then((res) => {
    //       console.log(res.data);
    //       setValue(res.data);
    //       setIsLoading(false);
    //     })
    //     .catch((err) => {
    //       // console.log(err.message);
    //       alert(err.message);
    //       setVin("");
    //       setIsLoading(false);
    //     });
    // } else {
    //   alert("OOPS.! Data not found...");
    // }
    // setIsLoading(true);
    // let newKey = value.map((key, val) => {
    //   return `The ${key} and ${val}`;
    // });
    // console.log(newKey);

    // router
  };
  // console.log(value);

  return (
    <>
      <div className="new-container">
        <div className="container">
          <h1>
            <a href="#">VIN DECODER</a>
          </h1>
          <h2>DECODING VIN NUMBERS</h2>
          <div className="content">
            <p className="value">
              Enter <strong className="strong-value">VIN number</strong>
            </p>
            <input
              type="text"
              placeholder="17-character VIN number"
              className="input"
              onChange={changeHandler}
              value={vin}
            />
            <br />
          </div>
          <button
            type="button"
            className="btn btn-info"
            // disabled={isLoading}
            onClick={() => clickHandler(vin)}
          >
            Decode VIN!
          </button>
        </div>
      </div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <hr className="footer-line" />
      </Box>
      {/* <div className="footer">
        <div className="footer-content"></div>
        <div className="footer-content1"></div>
        <div></div>
      </div> */}
    </>
  );
}
