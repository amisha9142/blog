import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function BookCard({
  title,
  description,
  author,
  price,
}) {
  return (
    <Card
      sx={{
        width: "60%", // Increased width for better row layout
        margin: "auto",
        mt: 2,
        padding: 2,
        boxShadow: "5px 5px 10px #ccc",
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      <CardContent>
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="bold">
            Title: {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Author: {author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Description: {description}
          </Typography>
          <Typography variant="subtitle2" color="text.primary">
            Price: ${price}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
