import { Flex, useColorMode } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useInfiniteQuery } from "react-query";
import { Jobs } from "../components/Jobs";
import { Layout } from "../components/Layout";
import { MyButton } from "../components/MyButton";
import { SearchBar } from "../components/SearchBar";
import { useIntersectionObserver } from "../utils/hooks";

const Index = () => {
  const [textFilter, setTextFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [isFullTimeFilter, setIsFullTimeFilter] = useState(false);

  const { colorMode } = useColorMode();
  const isLight = colorMode === "light";

  const {
    refetch,
    error,
    data,
    isLoading,
    isFetchingNextPage,
    isFetching,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    "positions",
    ({ pageParam = 0 }) =>
      axios(
        `/api/positions?description=${textFilter}&location=${locationFilter}&full_time=false&page=${pageParam}`
      ).then((res) => {
        return res.data;
      }),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length < 50) {
          return false;
        } else {
          return allPages.length + 1 ?? false;
        }
      },
    }
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

  const loadMoreButtonRef = useRef();

  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  return (
    <Layout>
      <Flex flexDir="column" mt="-26.5px">
        <SearchBar
          isFullTimeFilter={isFullTimeFilter}
          setFilters={(filters) => setFilters(filters)}
        />
        <Jobs
          isFetchingNextPage={isFetchingNextPage}
          isLoading={isLoading}
          isFetching={isFetching}
          error={error}
          data={data}
          mb={!hasNextPage ? "42px" : "0px"}
        />
        {!hasNextPage ? null : (
          <MyButton
            // btnRef={loadMoreButtonRef} Turn On Auto Fetching when window view is on button
            onClick={() => fetchNextPage()}
            text="Load More"
            margin="42px auto "
            variant={isLight ? "darkMode" : "dark"}
          />
        )}
      </Flex>
    </Layout>
  );
};

export default Index;
