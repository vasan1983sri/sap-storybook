export const StrikeThrough = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ textDecoration: "line-through", fontSize: "24px" }}>
        This text is larger and has a line through it.
      </div>
      <span>
        Earn Bonus Points{" "}
        <span style={{ position: "relative", display: "inline-block" }}>
          <span
            id="strikethrough-text"
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "red",
              position: "relative",
              zIndex: 1,
              padding: "0 8px",
              display: "inline-block",
            }}
          >
            100,000
          </span>
          <span
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              width: "100%",
              height: "2px",
              background: "red",
              transform: "rotate(-20deg)",
              transformOrigin: "center",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
        </span>{" "}
        <u style={{ fontSize: "28px", fontWeight: "bold", color: "blue" }}>
          200,000
        </u>
      </span>
    </div>
  );
};
