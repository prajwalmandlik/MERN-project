import { Grid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { server } from "../main";
import SchemeDetails from "./SchemeDetails";
import SchemeForm from "./SchemeForm";

const SetScheme = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const setSchemeData = (scheme) => {
    dispatch({
      type: "updateScheme",
      payload: scheme,
    });
  };

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
  });
  return (
    <>
      <Grid templateColumns={["1fr","repeat(2, 1fr)"]}>
        <SchemeForm />
        <SchemeDetails />
      </Grid>
    </>
  );
};

export default SetScheme;
