import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface NavBarProps {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: NavBarProps) => {
  const SearchRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (SearchRef.current) onSearch(SearchRef.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} color="gray.300" />
        <Input
          ref={SearchRef}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
