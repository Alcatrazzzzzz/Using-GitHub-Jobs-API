import { Checkbox, Flex, Icon, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { TiLocation } from "react-icons/ti";
import { MyButton } from "./MyButton";

interface SearchBarProps {
  isFullTimeFilter: boolean;
  setFilters: (filters: {
    textFilter: string;
    locationFilter: string;
    isFullTimeFilter: boolean;
  }) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ setFilters }) => {
  const [textFilter, setTextFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [isFullTimeFilter, setisFullTimeFilter] = useState(false);

  return (
    <Flex
      padding="0 10px"
      borderRadius="4px"
      bgColor="white"
      w="100%"
      h="47px"
      alignItems="center"
      fontSize="16px"
      mb="40px"
    >
      <Flex w="33.3%" alignItems="center">
        <Icon as={HiOutlineSearch} color="black" w="24px" h="24px" />
        <Input
          onChange={(e) => setTextFilter(e.target.value)}
          ml="12px"
          variant="unstyled"
          _placeholder={{ color: "#C7C7C7" }}
          placeholder="Filter by text"
        />
      </Flex>
      <Flex w="33.3%" alignItems="center">
        <Icon as={TiLocation} color="black" w="24px" h="24px" />
        <Input
          onChange={(e) => setLocationFilter(e.target.value)}
          ml="12px"
          variant="unstyled"
          _placeholder={{ color: "#C7C7C7" }}
          placeholder="Filter by location"
        />
      </Flex>
      <Flex w="33.3%" alignItems="center">
        <Checkbox
          onChange={(e) => setisFullTimeFilter(e.target.checked)} // rewrite !!
          iconColor="green"
          colorScheme="black"
          borderRadius="4px"
          borderColor="green"
          size="lg"
          backgroundColor="black"
        />
        <Text ml="12px">Full time only</Text>
        <MyButton
          onClick={() => {
            setFilters({ isFullTimeFilter, locationFilter, textFilter });
          }}
          text="Search"
          margin="0px 0px 0px auto"
        />
      </Flex>
    </Flex>
  );
};
