import { Flex } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Jobs } from "../components/Jobs";
import { Layout } from "../components/Layout";
import { MyButton } from "../components/MyButton";
import { SearchBar } from "../components/SearchBar";

const Index = () => {
  const [textFilter, setTextFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [isFullTimeFilter, setIsFullTimeFilter] = useState(false);

  const { refetch, error, data, isFetching } = useQuery("positions", () =>
    axios(
      `https://jobs.github.com/positions.json?search=${textFilter}&location=${locationFilter}&full_time=true`
    ).then((res) => res.data)
  );

  useEffect(() => {
    refetch();
  }, [textFilter, locationFilter, isFullTimeFilter]);

  const setFilters = (filters: {
    textFilter: string;
    locationFilter: string;
    isFullTimeFilter: boolean;
  }) => {
    setTextFilter(filters.textFilter);
    setLocationFilter(filters.locationFilter);
    setIsFullTimeFilter(filters.isFullTimeFilter);
  };

  return (
    <Layout>
      <Flex flexDir="column" mt="-26.5px">
        <SearchBar
          isFullTimeFilter={isFullTimeFilter}
          setFilters={(filters) => setFilters(filters)}
        />
        <Jobs isFetching={isFetching} error={error} data={data} />
        <MyButton text="Load More" margin="42px auto " />
      </Flex>
    </Layout>
  );
};

export default Index;
