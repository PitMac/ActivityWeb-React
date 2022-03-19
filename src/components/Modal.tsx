import { Box, Button, Modal as ModalS } from "@mui/material";
import { Activity } from "../services/api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1 / 2,
  bgcolor: "#181818",
  border: "2px solid #000",
  borderRadius: 9,
  boxShadow: 24,
  p: 4,
  paddingTop: 6,
  paddingBottom: 6,
  textAlign: "center",
};

const buttonStyle = {
  color: "black",
  backgroundColor: "white",
};

type ModalProps = {
  handleClose: () => void;
  openModal: boolean;
  activity: Activity;
};

export const Modal = ({ openModal, handleClose, activity }: ModalProps) => {
  console.log(activity.link);

  return (
    <>
      <ModalS open={openModal} onClose={handleClose}>
        <Box sx={style}>
          <h1 className="activityName">Your activity is:</h1>
          <h2 style={{ color: "white" }}>{activity.activity}</h2>
          {activity.link !== "" && (
            <p>
              <a target="_blank" href={activity.link}>
                Link
              </a>
            </p>
          )}
          <Button sx={buttonStyle} onClick={handleClose}>
            Back
          </Button>
        </Box>
      </ModalS>
    </>
  );
};
