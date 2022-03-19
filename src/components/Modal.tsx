import { Box, Modal as ModalS } from "@mui/material";
import { Activity } from "../services/api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1 / 2,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type ModalProps = {
  handleClose: () => void;
  openModal: boolean;
  activity: Activity;
};

export const Modal = ({ openModal, handleClose, activity }: ModalProps) => {
  return (
    <>
      <ModalS open={openModal} onClose={handleClose}>
        <Box sx={style}>
          <h3>{activity.activity}</h3>
          <h4>{activity.type}</h4>
        </Box>
      </ModalS>
    </>
  );
};
