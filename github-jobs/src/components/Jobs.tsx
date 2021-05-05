import { SimpleGrid } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { PostitionCard } from "./PostitionCard";
import Link from "next/link";

interface JobsProps {
  isLoading: boolean;
  isFetchingNextPage: boolean;
  isFetching: boolean;
  error: any;
  data: any;
  mb: string;
}

export const Jobs: React.FC<JobsProps> = ({
  isLoading,
  isFetchingNextPage,
  isFetching,
  error,
  data,
  mb,
}) => {
  let loadingPosesPre: any = [];
  for (let i = 0; i < 25; i++) {
    loadingPosesPre.push(<PostitionCard key={"pre" + i} loading={true} />);
  }
  let loadingPosesPost: any = [];
  for (let i = 0; i < 25; i++) {
    loadingPosesPost.push(<PostitionCard key={"post" + i} loading={true} />);
  }
  if (error) {
    return <Flex>Error</Flex>;
  }

  let poses: any = [];
  if (data) {
    poses = data.pages.map((page: any, iter: any) => (
      <React.Fragment key={iter}>
        {page.map((pos: any) => (
          <Link
            key={pos.id}
            href={{
              pathname: `/positions/${pos.id}`,
              query: { id: pos.id },
            }}
          >
            <a>
              <PostitionCard
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
            </a>
          </Link>
        ))}
      </React.Fragment>
    ));
  }

  return (
    <SimpleGrid columns={[1, 2, 2, 3]} spacingX="24px" spacingY="40px" mb={mb}>
      {isLoading || (isFetching && !isFetchingNextPage)
        ? loadingPosesPre
        : null}
      {data ? poses : null}
      {isFetchingNextPage ? loadingPosesPost : null}
    </SimpleGrid>
  );
};
