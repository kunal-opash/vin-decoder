import { Alert, Box, Stack } from "@mui/material";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [value, setValue] = useState("");
  const [vin, setVin] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  const changeHandler = (event) => {
    // console.log("Clicked..");
    setVin(event.target.value);
  };

  const clickHandler = (data) => {
    // setValue("");
    console.log(data);
    setIsLoading(true);
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
    // setIsLoading(true);
    // let newKey = value.map((key, val) => {
    //   return `The ${key} and ${val}`;
    // });
    // console.log(newKey);
  };
  console.log(value);

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
                {/* <Box
                sx={{
                  border: 1,
                  height: "150px",
                  borderColor: "#ddd",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "5px",
                  }}
                >
                  <div>
                    <img src="" alt="img2" />
                  </div>
                  <div style={{ marginTop: "25px" }}>
                    <h4 style={{ color: "#333" }}>Vehicle History Report</h4>
                    <input type="text" placeholder="VIN Num" />
                    <div>
                      <button type="button" className="check-btn">
                        Check VIN number
                      </button>
                    </div>
                  </div>
                </div>
              </Box> */}
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
                      console.log(key, "==>", newValue);
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
                  {/* <Box
                      sx={{
                        width: "100%",
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
                        Adress line 1
                      </div>
                      <div>{value["Adress line 1"]}</div>
                    </Box>
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
                        Adress line 2
                      </div>
                      <div>{value["Adress line 2"]}</div>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
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
                        Region
                      </div>
                      <div>{value.Region}</div>
                    </Box>
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
                        Country
                      </div>
                      <div>{value.Country}</div>
                    </Box> */}
                  {/* <Box className="note-content">
                      <div
                        className="note-content1"
                        // style={{
                        //   width: "37%",
                        //   fontWeight: "bold",
                        //   color: "#333",
                        //   padding: "2px",
                        // }}
                      >
                        Note
                      </div>
                      <div>{value.Note}</div>
                    </Box> */}
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
                      // console.log(key, "==>", newValue);
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
                    {/* <Box
                      sx={{
                        width: "100%",
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
                        Corrected VIN
                      </div>
                      <div>{value["Corrected VIN"]}</div>
                    </Box>
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
                        Squish VIN
                      </div>
                      <div>{value["Squish VIN"]}</div>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
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
                        WMI
                      </div>
                      <div>{value.WMI}</div>
                    </Box>
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
                        VIS identifier
                      </div>
                      <div>{value["VIS identifier"]}</div>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
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
                        VDS
                      </div>
                      <div>{value.VDS}</div>
                    </Box>
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
                        Year identifier
                      </div>
                      <div>{value["Year identifier"]}</div>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
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
                        Serial number
                      </div>
                      <div>{value["Serial number"]}</div>
                    </Box>
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
                        VIN type
                      </div>
                      <div>{value["VIN type"]}</div>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        height: "40px",
                        padding: "5px",
                        alignItems: "center",
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
                        Check digit
                      </div>
                      <div>{value["Check digit"]}</div>
                    </Box> */}
                  </div>
                </Box>

                {/* <Box
                  sx={{
                    border: 1,
                    borderColor: "#ddd",
                    borderRadius: "4px",
                  }}
                >
                  <Box
                    sx={{
                      color: "#333",
                      backgroundColor: "#f5f5f5",
                      borderColor: "#ddd",
                      padding: "10px 15px",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                      }}
                    >
                      <div>
                        <DirectionsCarFilledIcon
                          style={{
                            color: "orange",
                            height: "32px",
                            width: "42px",
                          }}
                        />
                      </div>
                      <div style={{ marginTop: "10px", fontSize: "16px" }}>
                        <a
                          href="#"
                          className="footer-link"
                          // style={{ color: " #428bca", textDecoration: "none" }}
                        >
                          <strong
                            style={{ fontWeight: "700", fontSize: "16px" }}
                          >
                            Check VIN number :
                          </strong>
                          <span style={{ fontWeight: "700", fontSize: "16px" }}>
                            {value["Entered VIN"]}
                          </span>
                        </a>
                        and learn more about the history of this vehicle.
                      </div>
                    </div>
                  </Box>
                </Box> */}

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
                      console.log(key, "==>", newValue);
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
                    {/* <Box
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
                        Make
                      </div>
                      <div>{value.Make}</div>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
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
                        Model
                      </div>
                      <div>{value.Model}</div>
                    </Box>
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
                        Model year
                      </div>
                      <div>{value["Model year"]}</div>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
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
                        Trim level
                      </div>
                      <div>{value["Trim level"]}</div>
                    </Box>
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
                        Engine type
                      </div>
                      <div>{value["Engine type"]}</div>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
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
                        Fuel type
                      </div>
                      <div>{value["Fuel type"]}</div>
                    </Box>
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
                        Vehicle class
                      </div>
                      <div>{value["Vehicle class"]}</div>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
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
                        Vehicle type
                      </div>
                      <div>{value["Vehicle type"]}</div>
                    </Box>
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
                        Manufactured in
                      </div>
                      <div>{value["Manufactured in"]}</div>
                    </Box> */}
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
                      console.log(key, "==>", newValue);
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
                    {/* <Box
                      sx={{
                        width: "100%",
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
                        Number of seats
                      </div>
                      <div>{value["Number of seats"]}</div>
                    </Box>
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
                        Displacement SI
                      </div>
                      <div>{value["Displacement SI"]}</div>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
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
                        Displacement CID
                      </div>
                      <div>{value["Displacement CID"]}</div>
                    </Box>
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
                        Displacement Nominal
                      </div>
                      <div>{value["Displacement Nominal"]}</div>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
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
                        Engine type
                      </div>
                      <div>{value["Engine type"]}</div>
                    </Box>
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
                        Engine head
                      </div>
                      <div>{value["Engine head"]}</div>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
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
                        Engine valves
                      </div>
                      <div>{value["Engine valves"]}</div>
                    </Box>
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
                        Engine cylinders
                      </div>
                      <div>{value["Engine cylinders"]}</div>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
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
                        Engine aspiration
                      </div>
                      <div>{value["Engine aspiration"]}</div>
                    </Box>
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
                        Engine HorsePower
                      </div>
                      <div>{value["Engine HorsePower"]}</div>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
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
                        Engine KiloWatts
                      </div>
                      <div>{value["Engine KiloWatts"]}</div>
                    </Box> */}
                  </div>
                  {/* <Box
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
                      Fuel type
                    </div>
                    <div>{value["Fuel type"]}</div>
                  </Box> */}
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
                      console.log(key, "==>", newValue);
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
                    {/* <Box
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
                        Number of doors
                      </div>
                      <div>{value["Number of doors"]}</div>
                    </Box> */}
                    {/* <Box
                      sx={{
                        width: "100%",
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
                        Number of seats
                      </div>
                      <div>{value["Number of seats"]}</div>
                    </Box> */}
                    {/* <Box
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
                        Displacement SI
                      </div>
                      <div>{value["Displacement SI"]}</div>
                    </Box> */}
                    {/* <Box
                      sx={{
                        width: "100%",
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
                        Displacement CID
                      </div>
                      <div>{value["Displacement CID"]}</div>
                    </Box> */}
                    {/* <Box
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
                        Displacement Nominal
                      </div>
                      <div>{value["Displacement Nominal"]}</div>
                    </Box> */}
                    {/* <Box
                      sx={{
                        width: "100%",
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
                        Engine type
                      </div>
                      <div>{value["Engine type"]}</div>
                    </Box> */}
                    {/* <Box
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
                        Engine head
                      </div>
                      <div>{value["Engine head"]}</div>
                    </Box> */}
                    {/* <Box
                      sx={{
                        width: "100%",
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
                        Engine valves
                      </div>
                      <div>{value["Engine valves"]}</div>
                    </Box> */}
                    {/* <Box
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
                        Engine cylinders
                      </div>
                      <div>{value["Engine cylinders"]}</div>
                    </Box> */}
                    {/* <Box
                      sx={{
                        width: "100%",
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
                        Engine aspiration
                      </div>
                      <div>{value["Engine aspiration"]}</div>
                    </Box> */}
                    {/* <Box
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
                        Engine HorsePower
                      </div>
                      <div>{value["Engine HorsePower"]}</div>
                    </Box> */}
                    {/* <Box
                      sx={{
                        width: "100%",
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
                        Engine KiloWatts
                      </div>
                      <div>{value["Engine KiloWatts"]}</div>
                    </Box> */}
                  </div>
                  {/* <Box
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
                      Fuel type
                    </div>
                    <div>{value["Fuel type"]}</div>
                  </Box> */}
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
      {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
        <hr className="footer-line" />
      </Box>
      <div className="footer">
        <div className="footer-content"></div>
        <div className="footer-content1"></div>
        <div></div>
      </div> */}
    </>
  );
}
