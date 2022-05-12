import { Button, Box, Modal, Fade, Backdrop } from "@mui/material";
import { useState } from "react";
const Popup = ({ children, btnText, btnPosition, title }) => {
  const [open, setOpen] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      {title}
      <Box display="flex" justifyContent={btnPosition}>
        <Button variant="contained" onClick={() => setOpen(!open)}>
          {btnText}
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Box sx={style}>{children}</Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Popup;
