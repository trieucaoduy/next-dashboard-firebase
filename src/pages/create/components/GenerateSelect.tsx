import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, SelectProps } from '@mui/material'

export interface IItem {
  value: string
  label: string
}

interface IProps extends SelectProps {
  listItem: IItem[]
  controlValue: string
  selectLabel: string
  onChangeSelect: (evt: SelectChangeEvent, type: string) => void
}

const GenerateSelect = ({ listItem, controlValue, selectLabel, onChangeSelect, ...others }: IProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={`select-${selectLabel}`}>{selectLabel}</InputLabel>
      <Select
        id={`select-${selectLabel}`}
        value={controlValue ?? ''}
        label={selectLabel}
        onChange={(e) => onChangeSelect(e as SelectChangeEvent, others.type as string)}
        {...others}
      >
        {listItem.map((item, index) => (
          <MenuItem value={item.value} key={index}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default GenerateSelect
