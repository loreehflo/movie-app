import React from "react";
import { Typography, withWidth, Hidden } from "@material-ui/core";

const Hide = (props) => {
  return (
    <div>
      <Typography variant="h6" color="initial">
        Ancho: {props.width}
      </Typography>
      <Hidden></Hidden>
    </div>
  );
};

export default withWidth()(Hide);
