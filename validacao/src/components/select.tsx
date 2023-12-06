import Select, {
  components,
  ControlProps,
  DropdownIndicatorProps,
} from "react-select";
import NotFoundComponent from "./not-found-component";
import { Edital } from "./types";
import Button from "./button";

interface SelectProps {
  label: string;
  data: Edital[];
  [key: string]: any;
}

export default function FormSelect({ label, data, ...props }: SelectProps) {
  const Editais = data.map((item) => ({
    value: item.id,
    label: item.descricao,
  }));

  return (
    <div>
      <label className="d-flex flex-fill mb-1" htmlFor="select">
        {label}
      </label>
      <Select
        inputId="select"
        instanceId="select"
        name="editais"
        options={Editais}
        placeholder="Selecione o edital"
        noOptionsMessage={() => <NotFoundComponent />}
        components={{ Control, DropdownIndicator }}
        styles={Styles}
        {...props}
      />
    </div>
  );
}

const Control = ({ children, ...props }: ControlProps) => {
  return (
    <components.Control {...props}>
      <div className="input-icon pl-2">
        <i className="fas fa-search" aria-hidden="true"></i>
      </div>

      {children}
    </components.Control>
  );
};

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <Button icon="angle-down" circle density="small" />
    </components.DropdownIndicator>
  );
};

const Styles = {
  placeholder: (base: any) => ({
    ...base,
    color: "var(--color-light)",
    fontStyle: "italic",
  }),
  valueContainer: (base: any) => ({
    ...base,
    cursor: "text",
    maxWidth: "100%",
  }),
  control: (base: any) => ({
    ...base,
    borderColor: "var(--border-color-alternative)",
    borderRadius: "var(--surface-rounder-sm)",
    borderStyle: "var(--border-style)",
    borderWidth: "var(--border-width)",
    color: "var(--color-light)",
    maxWidth: "100%",
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
  }),
  container: (base: any) => ({
    ...base,
    maxWidth: "100%",
    minWidth: "350px",
  }),
  input: (base: any) => ({
    ...base,
    maxWidth: "400px",
  }),
  clearIndicator: (base: any) => ({
    ...base,
    cursor: "pointer",
    "&:hover": {
      color: "red",
    },
  }),
  multiValueRemove: (base: any) => ({
    ...base,
    cursor: "pointer",
  }),
};
