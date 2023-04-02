import { Grid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Context, server } from "../main";
import SchemeDetails from "./SchemeDetails";
import SchemeForm from "./SchemeForm";

const SetScheme = () => {
  const { id } = useParams();

  const {setSchemeData} = useContext(Context)

  

  useEffect(() => {
    if (id !== "0") {
      try {
        axios
          .get(`${server}/scheme/${id}`, {
            withCredentials: true,
          })
          .then((res) => {
            const scheme = res.data.scheme;
            setSchemeData(scheme);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error.message);
      }
    }
  },[]);
  return (
    <div className="bgColor">
      <Grid templateColumns={["1fr","repeat(2, 1fr)"]} h={"91.5vh"} overflowY={"hidden"}>
        <SchemeForm id={id} />
        <SchemeDetails />
      </Grid>
    </div>
  );
};

export default SetScheme;
