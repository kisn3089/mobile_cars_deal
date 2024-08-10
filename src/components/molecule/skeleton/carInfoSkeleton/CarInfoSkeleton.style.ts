import styled from "styled-components";

export const GapSkeleton = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
`;

export const CardCarLayoutSkeleton = styled.article`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: start;
  flex-direction: column;
  gap: 16px 0;
  padding: 20px 12px;
  border-radius: 10px;
  border: ${({ theme }) => `1px solid ${theme.palette.gray.gray200}`};
`;

export const ContainerCarSkeleton = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px 0;
`;

export const NameTagCarSkeleton = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TagCarSkeleton = styled.p`
  width: 60px;
  height: 20px;
`;

export const PriceCarSkeleton = styled.p`
  width: 180px;
  height: 22px;
`;

export const NameCarSkeleton = styled.h1`
  width: 90px;
  height: 22px;
`;

export const ContentCarSkeleton = styled.span`
  width: 160px;
  height: 20px;
`;

export const DeadSpaceSkeleton = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.gray.gray200};
`;
