import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { ITermOfUse } from "../../interfaces/termOfUse";

const mainContainerStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: '#212121',
  border: '3px solid #000',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

const termsOfUseContainerStyle = {
  padding: '1rem 1rem 1rem 0',
  overflow: 'auto',
  maxHeight: "80vh",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "flex-end",
  marginTop: 2,
};

export enum ETermOfUseAction {
  ACCEPT = "ACCEPT",
  DECLINE = "DECLINE"
}

type Props = {
  termsOfUse: ITermOfUse;
  onAction: (action: ETermOfUseAction) => void;
}

const TermOfUse = ({termsOfUse, onAction}: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = (action: ETermOfUseAction) => {
    onAction(action);
    setIsOpen(false);
  };

  return (
    <div>
      <Modal
        open={isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={mainContainerStyle}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color="white">
            Terms Of Use
          </Typography>

          <Box sx={termsOfUseContainerStyle}>
            {termsOfUse.paragraphs.map((paragraphs, index) => (
              <Box key={index}>
                <Typography variant="h6" color="white">
                  {paragraphs.title}
                </Typography>
                <Typography
                  variant="caption"
                  color="white">
                  {paragraphs.content || paragraphs.text}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box sx={buttonContainerStyle}>
            <Button onClick={() => closeModal(ETermOfUseAction.ACCEPT)} variant="contained" color="primary">
              Accept
            </Button>
            <Button onClick={() => closeModal(ETermOfUseAction.DECLINE)} variant="contained" color="secondary" sx={{ ml: 1 }}>
              Decline
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default TermOfUse;