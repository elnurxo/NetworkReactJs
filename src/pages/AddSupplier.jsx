import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { supplierNetwork } from "../network/requests/supplierNetwork";
import toast, { Toaster } from "react-hot-toast";
import * as ReactBootStrap from "react-bootstrap";

function AddSupplier() {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

const notify = () => {
    toast.success("Supplier added to API successfully!", {
      duration: 1800,
      position: "top-center",
      icon: "👏",
      theme: {
        primary: "green",
        secondary: "black",
      },
    });
  };
  const addSupplier = async (data) => {
    setLoading(true);
    await supplierNetwork.addSupplier(data);
    setLoading(false);
    reset();
  };
  return (
    <>
      {loading ? (
        <Box
          style={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh",
          }}
        >
          <ReactBootStrap.Spinner animation="border" />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "25%",
            margin: "0 auto",
            padding: "20px 30px",
            marginTop: "100px",
            borderRadius: "12px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          }}
        >
          <form
            style={{ marginBottom: "30px", width: "100%", textAlign: "center" }}
            onSubmit={handleSubmit(addSupplier)}
          >
            <div style={{ marginBottom: "20px" }}>
              <h2>
                Add New Supplier to{" "}
                <a
                  style={{ color: "red", textDecoration: "underline" }}
                  rel="noreferrer"
                  href="https://northwind.vercel.app/api/suppliers"
                  target="_blank"
                >
                  api
                </a>
              </h2>
              <TextField
                id="outlined-basic"
                required
                name="companyName"
                {...register("companyName")}
                type="text"
                label="Company Name"
                variant="outlined"
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <TextField
                type="text"
                required
                name="contactName"
                {...register("contactName")}
                id="outlined-basic"
                label="Contact name"
                variant="outlined"
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <TextField
                type="text"
                required
                name="contactTitle"
                {...register("contactTitle")}
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </div>
            <Button
              variant="contained"
              color="success"
              type="submit"
              disabled={loading}
              onClick={()=>{
                notify();
              }}
            >
              Add to Api
            </Button>
            <Toaster />
          </form>
        </Box>
      )}
    </>
  );
}

export default AddSupplier;
