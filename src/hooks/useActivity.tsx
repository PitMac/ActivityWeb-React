import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { Activity, getActivity } from "../services/api";

export const useActivity = () => {
  const [type, setType] = useState("");
  const [participants, setParticipants] = useState("");
  const [activity, setActivity] = useState<Activity>();
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = async () => {
    const resp = await getActivity(type, participants);
    setActivity(resp);
    setOpenModal(true);
  };
  const handleClose = () => setOpenModal(false);

  const handleChangeType = (event: SelectChangeEvent) => {
    setType(event.target.value);
  };
  const handleChangePart = (event: SelectChangeEvent) => {
    setParticipants(event.target.value);
  };
  return {
    activity,
    type,
    openModal,
    handleOpen,
    participants,
    handleClose,
    handleChangeType,
    handleChangePart,
  };
};
