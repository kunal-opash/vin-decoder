import { Alert, Box, Stack } from "@mui/material";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const manufacturer = [
  "Manufacturer",
  "Adress line 1",
  "Adress line 2",
  "Region",
  "Country",
  "Note",
];

const vinNumberAnalize = [
  "Entered VIN",
  "Corrected VIN",
  "Squish VIN",
  "WMI",
  "VIS identifier",
  "VDS",
  "Year identifier",
  "Serial number",
  "VIN type",
  "Check digit",
];

const generalInformation = [
  "Make",
  "Model",
  "Model year",
  "Body style",
  "Engine type",
  "Fuel type",
  "Transmission",
  "Manufactured in",
];

const vehicleInformation = [
  "Body type",
  "Number of doors",
  "Number of seats",
  "Displacement SI",
  "Displacement CID",
  "Displacement Nominal",
  "Engine type",
  "Engine head",
  "Engine valves",
  "Engine cylinders",
  "Engine aspiration",
  "Compression ratio",
  "Engine HorsePower",
  "Engine KiloWatts",
  "Automatic gearbox",
  "Fuel type",
];

const extraData = [
  "Driveline",
  "Anti-Brake System",
  "Front brake type",
  "Rear brake type",
  "Front suspension",
  "Rear suspension",
  "Front spring type",
  "Rear spring type",
  "Tire front",
  "Tire rear",
  "GVWR range",
];

export default function Index() {
  const [value, setValue] = useState("");
  const [vin, setVin] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { slug } = router.query;

  const changeHandler = (event) => {
    // console.log("Clicked..");
    setVin(event.target.value);
  };

  const clickHandler = (data) => {
    if (!!data) {
      axios
        .get(`https://vindecoder.onrender.com/vin-decode/${data}`)
        .then((res) => {
          console.log(res.data);
          setValue(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          // console.log(err.message);
          alert(err.message);
          setVin("");
          setIsLoading(false);
        });
    } else {
      alert("OOPS.! Data not found...");
    }
  };

  useEffect(() => {
    setIsLoading(true);
    if (!!router.query.slug) {
      axios
        .get(`https://vindecoder.onrender.com/vin-decode/${slug}`)
        .then((res) => {
          console.log(res.data);
          setValue(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          //   alert(err.message);
          setVin("");
          setIsLoading(false);
        });
    } else {
      //   alert("OOPS.! Data not found...");
      console.log("....");
    }
  }, [slug]);
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
      {!isLoading ? (
        <div className="all-content">
          <Box className="content-detail">
            <Box>
              <Stack spacing={2} className="detail-1">
                <Box
                  sx={{
                    // color: "#333",
                    border: 1,
                    height: "221px",
                    // backgroundColor: "#f5f5f5",
                    borderColor: "#ddd",
                    borderRadius: "4px",
                  }}
                >
                  <div>
                    <Box
                      sx={{
                        color: "#333",
                        backgroundColor: "#f5f5f5",
                        borderColor: "#ddd",
                        padding: "10px 15px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      <strong>{value.Make} VIN Decoder</strong>
                    </Box>
                    <img
                      src={value.image}
                      alt="img"
                      style={{
                        display: "block",
                        marginTop: "25px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                  </div>
                </Box>
                <Box className="manufacture-detail">
                  <div>
                    <Box
                      sx={{
                        color: "#333",
                        backgroundColor: "#f5f5f5",
                        borderColor: "#ddd",
                        padding: "10px 15px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      <strong>Manufacturer</strong>
                    </Box>
                    {Object.entries(value).map(function (
                      [key, newValue],
                      index
                    ) {
                      // console.log('newValue', newValue);
                      // console.log(index);
                      //
                      // {key}
                      // {value}
                      const isvalid = manufacturer.includes(key);
                      return (
                        <>
                          {isvalid && (
                            <Box
                              sx={{
                                width: "100%",
                                // backgroundColor: "#f9f9f9",
                                display: "flex",
                                height: "40px",
                                padding: "5px",
                                alignItems: "center",
                                borderBottom: "1px solid #ddd",
                              }}
                            >
                              <div
                                style={{
                                  width: "30%",
                                  fontWeight: "bold",
                                  color: "#333",
                                  padding: "2px",
                                  lineBreak: "normal",
                                }}
                              >
                                {key && <div>{key}</div>}
                              </div>
                              {newValue && <div>{newValue}</div>}
                            </Box>
                          )}
                        </>
                      );
                    })}
                  </div>
                </Box>
              </Stack>
            </Box>
            <Box className="content-detail1">
              <Stack spacing={2}>
                <Box
                  sx={{
                    // color: "#333",
                    border: 1,
                    borderColor: "#ddd",
                    borderRadius: "4px",
                  }}
                >
                  <div>
                    <Box
                      sx={{
                        color: "#333",
                        backgroundColor: "#f5f5f5",
                        borderColor: "#ddd",
                        padding: "10px 15px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      <strong>Vin number analize</strong>
                    </Box>
                    {Object.entries(value).map(function (
                      [key, newValue],
                      index
                    ) {
                      // console.log('newValue', newValue);
                      // console.log(index);

                      // {key}
                      // {value}
                      const isvalid = vinNumberAnalize.includes(key);
                      return (
                        <>
                          {isvalid && (
                            <Box
                              sx={{
                                width: "100%",
                                // backgroundColor: "#f9f9f9",
                                display: "flex",
                                height: "40px",
                                padding: "5px",
                                alignItems: "center",
                                borderBottom: "1px solid #ddd",
                              }}
                            >
                              <div
                                style={{
                                  width: "30%",
                                  fontWeight: "bold",
                                  color: "#333",
                                  padding: "2px",
                                }}
                              >
                                {key && <div> {key} </div>}
                              </div>
                              <div>{newValue && <div>{newValue} </div>}</div>
                            </Box>
                          )}
                        </>
                      );
                    })}
                  </div>
                </Box>

                <Box
                  sx={{
                    // color: "#333",
                    border: 1,
                    // marginTop:'15px',
                    borderColor: "#ddd",
                    borderRadius: "4px",
                  }}
                >
                  <div>
                    <Box
                      sx={{
                        color: "#333",
                        backgroundColor: "#f5f5f5",
                        borderColor: "#ddd",
                        padding: "10px 15px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      <strong>General Information</strong>
                    </Box>
                    {Object.entries(value).map(function (
                      [key, newValue],
                      index
                    ) {
                      // console.log('newValue', newValue);
                      // console.log(index);

                      // {key}
                      // {value}
                      const isvalid = generalInformation.includes(key);
                      return (
                        <>
                          {isvalid && (
                            <Box
                              sx={{
                                width: "100%",
                                // backgroundColor: "#f9f9f9",
                                display: "flex",
                                height: "40px",
                                padding: "5px",
                                alignItems: "center",
                                borderBottom: "1px solid #ddd",
                              }}
                            >
                              <div
                                style={{
                                  width: "30%",
                                  fontWeight: "bold",
                                  color: "#333",
                                  padding: "2px",
                                }}
                              >
                                {key && <div> {key} </div>}
                              </div>
                              <div>{newValue && <div>{newValue} </div>}</div>
                            </Box>
                          )}
                        </>
                      );
                    })}
                  </div>
                </Box>

                <Box
                  sx={{
                    // color: "#333",
                    border: 1,
                    // marginTop:'15px',
                    borderColor: "#ddd",
                    borderRadius: "4px",
                  }}
                >
                  <div>
                    <Box
                      sx={{
                        color: "#333",
                        backgroundColor: "#f5f5f5",
                        borderColor: "#ddd",
                        padding: "10px 15px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      <strong>Vehicle specification</strong>
                    </Box>
                    {Object.entries(value).map(function (
                      [key, newValue],
                      index
                    ) {
                      // console.log('newValue', newValue);
                      // console.log(index);

                      // {key}
                      // {value}
                      const isvalid = vehicleInformation.includes(key);
                      return (
                        <>
                          {isvalid && (
                            <Box
                              sx={{
                                width: "100%",
                                // backgroundColor: "#f9f9f9",
                                display: "flex",
                                height: "40px",
                                padding: "5px",
                                alignItems: "center",
                                borderBottom: "1px solid #ddd",
                              }}
                            >
                              <div
                                style={{
                                  width: "30%",
                                  fontWeight: "bold",
                                  color: "#333",
                                  padding: "2px",
                                }}
                              >
                                {key && <div> {key} </div>}
                              </div>
                              <div>{newValue && <div>{newValue} </div>}</div>
                            </Box>
                          )}
                        </>
                      );
                    })}
                  </div>
                </Box>

                <Box
                  sx={{
                    // color: "#333",
                    border: 1,
                    // marginTop:'15px',
                    borderColor: "#ddd",
                    borderRadius: "4px",
                  }}
                >
                  <div>
                    <Box
                      sx={{
                        color: "#333",
                        backgroundColor: "#f5f5f5",
                        borderColor: "#ddd",
                        padding: "10px 15px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      <strong>Extra data</strong>
                    </Box>

                    {Object.entries(value).map(function (
                      [key, newValue],
                      index
                    ) {
                      // console.log('newValue', newValue);
                      // console.log(index);
                      //
                      // {key}
                      // {value}
                      const isvalid = extraData.includes(key);
                      return (
                        <>
                          {isvalid && (
                            <Box
                              sx={{
                                width: "100%",
                                // backgroundColor: "#f9f9f9",
                                display: "flex",
                                height: "40px",
                                padding: "5px",
                                alignItems: "center",
                                borderBottom: "1px solid #ddd",
                              }}
                            >
                              <div
                                style={{
                                  width: "30%",
                                  fontWeight: "bold",
                                  color: "#333",
                                  padding: "2px",
                                }}
                              >
                                {key && <div> {key} </div>}
                              </div>
                              <div>{newValue && <div>{newValue} </div>}</div>
                            </Box>
                          )}
                        </>
                      );
                    })}
                  </div>
                </Box>

                <Box style={{ display: "flex", flexDirection: "row" }}>
                  <Box
                    sx={{
                      // color: "#333",
                      border: 1,
                      width: "410px",
                      // marginTop:'15px',
                      borderColor: "#ddd",
                      borderRadius: "4px",
                    }}
                  >
                    <div>
                      <Box
                        sx={{
                          color: "#333",
                          backgroundColor: "#f5f5f5",
                          borderColor: "#ddd",
                          padding: "10px 15px",
                          borderBottom: "1px solid #ddd",
                        }}
                      >
                        <strong>Standard equipment</strong>
                      </Box>
                    </div>
                    <div
                      style={{
                        fontWeight: "bold",
                        color: "#ddd",
                        padding: "9px",
                      }}
                    >
                      {value[""]}
                    </div>
                  </Box>
                  <Box
                    sx={{
                      // color: "#333",
                      border: 1,
                      width: "410px",
                      marginLeft: "20px",
                      borderRadius: "4px",
                      borderColor: "#ddd",
                    }}
                  >
                    <div>
                      <Box
                        sx={{
                          color: "#333",
                          backgroundColor: "#f5f5f5",
                          borderColor: "#ddd",
                          padding: "10px 15px",
                          borderBottom: "1px solid #ddd",
                        }}
                      >
                        <strong>Optional equipment</strong>
                      </Box>
                    </div>
                    <div
                      style={{
                        fontWeight: "bold",
                        color: "#ddd",
                        padding: "9px",
                      }}
                    >
                      {value[""]}
                    </div>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Box>
        </div>
      ) : (
        <div>Loading....</div>
      )}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <hr className="footer-line" />
      </Box>
    </>
  );
}
