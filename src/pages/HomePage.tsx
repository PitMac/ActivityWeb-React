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
    color: "black",
    backgroundColor: "white",
  };

  return (
    <Container
      style={{
        paddingTop: 20,
        display: "flex",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <h1>Search a activity!</h1>
      <p>
        Are you bored? <span>NO PROBLEM</span> with this page you can find any
        activity 🥵
      </p>
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
      <p>
        This page is built with{" "}
        <a target="_blank" href="https://www.boredapi.com/">
          BoredAPI
        </a>
      </p>
      <p>
        <a target="_blank" href="https://jhonpitmac.vercel.app/">
          Jhon PitMac
        </a>
      </p>
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
