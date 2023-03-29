import { Checkbox, FormControlLabel } from "@mui/material";

interface IProps {
  id: number;
  value: number;
  title: string;
  sort: string;
  code: string;
  checked: boolean;
  onChange: any;
}

const FormCheckBox: React.FC<IProps> = (props) => {
  const { title, checked, value, onChange } = props;

  return (
    <div>
      <FormControlLabel
        label={title}
        control={
          <Checkbox
            value={value}
            checked={checked}
            onChange={onChange}
            color="success"
          />
        }
      />
    </div>
  );
};

export default FormCheckBox;
