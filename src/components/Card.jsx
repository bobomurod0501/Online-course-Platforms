import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import { Link } from "react-router-dom";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
// import { Link } from "react-router-dom";

function Card1({ data }) {
  // console.log(data?.data);
  return (
    <div className="wraper">
      {data?.data.map((item) => {
        return (
          <Card
            key={item.id}
            sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}
          >
            <CardOverflow>
              <AspectRatio sx={{ minWidth: 50 }}>
                <img
                  className="img"
                  src={item.image}
                  srcSet={item.image}
                  loading="lazy"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography level="body-xs">Bluetooth Headset</Typography>
              <h2>{item.SName}</h2>

              <Typography
                level="title-lg"
                sx={{ mt: 1, fontWeight: "xl" }}
                endDecorator={
                  <Chip
                    component="span"
                    size="sm"
                    variant="soft"
                    color="success"
                  >
                    Lowest price
                  </Chip>
                }
              >
                {item.price}
              </Typography>
              <Typography level="body-sm">
                (Only <b>7</b> left in stock!)
              </Typography>
            </CardContent>
            <CardOverflow>
              <Button variant="solid" color="danger" size="lg">
                <Link to={`/home/${item.id}`}>
                  <h3 style={{ color: "white" }}>
                    Description course <ArrowOutwardIcon />
                  </h3>
                </Link>
              </Button>
            </CardOverflow>
          </Card>
        );
      })}
    </div>
  );
}

export default Card1;
