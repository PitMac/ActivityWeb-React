import { Button, Container } from "@mui/material";
import { DropDown } from "../components/DropDown";
import { Modal } from "../components/Modal";
import { useActivity } from "../hooks/useActivity";

export default function HomePage() {
  const {
    type,
    participants,
    activity,
    handleChangeType,
    handleChangePart,
    handleClose,
    handleOpen,
    openModal,
  } = useActivity();

  const types = [
    "education",
    "music",
    "social",
    "cooking",
    "busywork",
    "relaxation",
    "charity",
    "recreational",
  ];

  const style = {
    color: "white",
    backgroundColor: "black",
  };

  return (
    <Container style={{ paddingTop: 20 }}>
      <h1>Search a activity!</h1>
      <DropDown
        handleChange={handleChangeType}
        participants={participants}
        handleChangePart={handleChangePart}
        type={type}
        data={types}
        title={"Title"}
      />
      <Button sx={style} onClick={handleOpen}>
        Search
      </Button>
      {activity && (
        <Modal
          handleClose={handleClose}
          openModal={openModal}
          activity={activity}
        />
      )}
    </Container>
  );
}
