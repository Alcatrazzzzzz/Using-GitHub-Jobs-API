import { SimpleGrid } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { PostitionCard } from "./PostitionCard";

interface JobsProps {
  isFetching: boolean;
  error: any;
  data: any;
}

export const Jobs: React.FC<JobsProps> = ({
  isFetching: isLoading,
  error,
  data,
}) => {
  if (isLoading) {
    let poses: any = [];
    for (let i = 0; i < 10; i++) {
      poses.push(<PostitionCard key={i} loading={true} />);
    }
    return (
      <SimpleGrid columns={3} spacingX="24px" spacingY="40px">
        {poses}
      </SimpleGrid>
    );
  }
  if (error) {
    return <Flex>Error</Flex>;
  }

  let poses: any = [];
  data.forEach((pos: any) => {
    poses.push(
      <PostitionCard
        key={pos.id}
        loading={false}
        data={{
          companyName: pos.company,
          companyLogoSrc: pos.company_logo,
          positionLocation: pos.location,
          positionPosted: pos.created_at,
          positionTime: pos.type,
          positonTitle: pos.title,
        }}
      />
    );
  });
  return (
    <SimpleGrid columns={3} spacingX="24px" spacingY="40px">
      {poses}
    </SimpleGrid>
  );
};
