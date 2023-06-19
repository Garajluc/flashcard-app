import { InputAdornment, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type SearchFieldProps = {
  onChange: (value: string) => void;
};

const SearchField = ({ onChange }: SearchFieldProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <OutlinedInput
      size="small"
      onChange={handleChange}
      startAdornment={
        <InputAdornment position="start" sx={{ mr: 1 }}>
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
};

export default SearchField;
