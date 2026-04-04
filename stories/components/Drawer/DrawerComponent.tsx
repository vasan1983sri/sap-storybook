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
      name: "Product 1",
    },
    {
      id: 2,
      img: img2,
      name: "Product 2",
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

  const removeProduct = (id: number) => {
    setDrawerProducts(prev => {
      const updateDrawerProducts = prev.filter(p => p.id !== id);
      if (updateDrawerProducts.length === 0) {
        closeDrawer();
      }
      return updateDrawerProducts;
    });
  };

  const showAddIcon = () => {
    if (drawerProducts.length > 0) {
      return (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "32px",
            }}
          >
            {drawerProducts.map((product: any) => (
              <div
                key={product.id}
                style={{ display: "flex", alignItems: "flex-start" }}
              >
                <div>
                  <div>
                    <img
                      key={product.id}
                      src={product.img}
                      alt={`Product ${product.id}`}
                      style={{
                        width: "64px",
                        height: "64px",
                        border: "1px solid #ccc",
                        objectFit: "cover",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                  <div>
                    <p>{product.name}</p>
                  </div>
                </div>
                <IconButton
                  size="small"
                  onClick={() => removeProduct(product.id)}
                  style={{
                    top: "-10px",
                    right: "-10px",
                    background: "#fff",
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </div>
            ))}
          </div>
        </>
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
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "20px",
          gap: "32px",
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
    <div style={{display: "flex", flexDirection: "row", gap: "16px"}}>
      <Button
        size="medium"
        label="Product 1"
        primary={true}
        backgroundColor={"#1ea7fd"}
        onClick={() => toggleDrawer(1)}
      />
      <Button
        size="medium"
        label="Product 2"
        primary={true}
        backgroundColor={"#1ea7fd"}
        onClick={() => toggleDrawer(2)}
      />
    </div>
      
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
