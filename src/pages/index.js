import { Alert, Box, Stack } from "@mui/material";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [value, setValue] = useState("");
  const [vin, setVin] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
  };

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
                        Manufacturer
                      </div>
                      <div>{value.Manufacturer}</div>
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
                    </Box>
                    <Box className="note-content">
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
                    </Box>
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
                        Entered VIN
                      </div>
                      <div>{value["Entered VIN"]}</div>
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
                    </Box>
                  </div>
                </Box>

                <Box
                  sx={{
                    border: 1,
                    borderColor: "#ddd",
                    borderRadius: "4px",
                  }}
                >
                  {/* <div> */}
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
                  {/* </div> */}
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
                    </Box>
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
                        Number of doors
                      </div>
                      <div>{value["Number of doors"]}</div>
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
                    </Box>
                  </div>
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
                      Fuel type
                    </div>
                    <div>{value["Fuel type"]}</div>
                  </Box>
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
      <div className="footer">
        <div className="footer-content">
          <p>
            ©2023 &nbsp;
            <a href="#" className="footer-link">
              VINdecoder.pl
            </a>
            &nbsp; All rights reserved.
            <a href="#" className="footer-link">
              Privacy policy and cookies
            </a>
          </p>
        </div>
        <div className="footer-content1">
          <p>
            <strong>VIN Decoder</strong> (VINdecoder.pl) is not responsible for
            the accuracy of the information it publishes - technical data,
            characteristics, specifications, indicators, etc.
            <br /> All manufacturers logos, marques, and all other trademarks
            are the property of their respective owners.
          </p>
        </div>
        <div>
          <p className="footer-content2">
            Your personal data is administered by AutoISO Sp. z o.o. (ul.
            Gnieźnieńska 12, 40-142 Katowice, Polska, pomoc@autoiso.pl) We may
            process your data (IP address, browser and OS and approximate GPS
            location): - if required by our legal interest, for statistical
            purposes and to manage the web site, for the period until we
            complete our statistical analysis, but no longer than for 3 years
            since the year in which the data was acquired; - for legally
            justified reasons, in course of direct marketing of our services,
            including with your consent, using profiling to screen any future
            advertisements for our services in other web sites, throughout the
            lifetime of the site or by the time your consent is withdrawn. We
            cooperate with: marketing service providers, web browsers, social
            networks,providers of tools for statistics and social network
            management, host companies,who can receive this data from us (data
            receivers). No data can be transferred to any non-EU country or
            entity, other than those accepted by EU law. s You are not obliged
            to provide us your data, but when you refuse to do so, the site may
            function incorrectly.You have access to your data, for correction,
            deletion or to impose restrictions on processing. You can also
            protest against processing or any transfer of your data. You can
            withdraw your consent for processing your data at any time, but this
            will have no effect on legality of data processing completed before
            your consent was withdrawn. You have the right to lodge your protest
            to the Chairman of the Poland’s Personal Data Protection Office or
            his counterpart in any other EU country. The web site may use
            cookies and other similar technologies in aforementioned purposes.
            You accept cookies by choosing the respective settings in your
            browser. More about our data processing rules and browser settings
            can be found in our [Privacy Policy].
          </p>
        </div>
      </div>
    </>
  );
}
