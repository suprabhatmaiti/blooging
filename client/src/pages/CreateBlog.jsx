import { Container } from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";

export default function CreateBlog() {
  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Create New Blog
      </Typography>
    </Container>
  );
}
