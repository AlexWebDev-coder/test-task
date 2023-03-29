import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { MdRemoveRedEye } from "react-icons/md";
import { IconButton, Typography } from "@mui/material";
import { IProps } from "./types";

const DetailViewProduct: React.FC<IProps> = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen} size="small">
        <MdRemoveRedEye size="30px" />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="detail__modal">
          <div className="image__block">
            <img className="image" src={props.image} alt={props.title} />
          </div>
          <div className="detail__modal_description">
            <Typography variant="body1">{props.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {props.regular_price.value}({props.regular_price.currency})
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Бренд: #{props.brand}
            </Typography>
          </div>
        </div>
        {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent> */}
        <DialogActions>
          <Button onClick={handleClose}>Закрыть</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DetailViewProduct;
