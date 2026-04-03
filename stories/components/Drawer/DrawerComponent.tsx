import React from "react";
import { useState } from "react";
import { Button } from "../../Button";
import { Drawer } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import img1 from "./img1.png";
import img2 from "./img1.png";
import img3 from "./img1.png";

export const DrawerComponent = () => {
  const [open, setOpen] = useState(false);
  const [currentImageSrc, setCurrentImageSrc] = useState(img1);

  const [showIcon, setShowIcon] = useState(true);

  const [drawerProducts, setDrawerProducts] = useState<
    { id: number; img: any }[]
  >([]);
  const prodList = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
  ];

  const [drawerVariant, setDrawerVariant] = useState<
    "temporary" | "permanent" | "persistent"
  >("temporary");

  const toggleDrawer = (id: any) => {
  setOpen(true);
  setDrawerVariant("persistent");
  // Only add if not already present and limit to 3
  setDrawerProducts(prev => {
    const exists = prev.find(p => p.id === prodList[id - 1].id);
    if (exists) return prev;
    const updated = [...prev, prodList[id - 1]];
    return updated.slice(0, 3); // limit to 3 products
  });
};

  const handleClick = (imageSrc: any) => {
    setCurrentImageSrc(imageSrc);
    setOpen(true);
    setDrawerVariant("persistent");
  };

  const closeDrawer = () => {
    setDrawerProducts([]);
    setOpen(false);
    setShowIcon(true);
  };

  const showAddIcon = () => {
    if (drawerProducts.length === 0)
      return (
        <div>
          {drawerProducts.map((product: any) => (
            <AddCircleOutlineRoundedIcon
              key={product.id}
              style={{
                fontSize: "64px",
                border: "1px solid #ccc",
                marginLeft: "200px",
                marginRight: "200px",
              }}
              onClick={() => handleClick(product.img)}
            />
          ))}
        </div>
      );
    if (drawerProducts.length > 0) {
      return (
        <div>
          {drawerProducts.map((product: any) => (
            <img
              key={product.id}
              src={product.img}
              alt={`Product ${product.id}`}
              style={{
                width: "64px",
                height: "64px",
                border: "1px solid #ccc",
                marginRight: "50px",
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      );
    }
  };

  const drawerContent = (
    <Box role="presentation">
      <Box sx={{ display: "flex", justifyContent: "flex-end", padding: 1 }}>
        {/* The Close Button */}
        <IconButton onClick={closeDrawer} aria-label="close drawer">
          <CloseIcon />
        </IconButton>
      </Box>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "flex-start",
          justifyContent: "space-evenly",
          alignItems: "stretch",
          paddingBottom: "20px",
        }}
      >
        {showAddIcon()}
        <Button
          size="medium"
          label="Close Drawer"
          primary={true}
          backgroundColor={"#1ea7fd"}
          onClick={closeDrawer}
        />
      </div>
    </Box>
  );

  return (
    <>
      <Button
        size="medium"
        label="Img 1"
        primary={true}
        backgroundColor={"#1ea7fd"}
        onClick={() => toggleDrawer(1)}
      />
      <Button
        size="medium"
        label="Img 2"
        primary={true}
        backgroundColor={"#1ea7fd"}
        onClick={() => toggleDrawer(2)}
      />
      <Drawer
        anchor="bottom"
        variant={drawerVariant}
        open={open}
        onClose={toggleDrawer}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};
