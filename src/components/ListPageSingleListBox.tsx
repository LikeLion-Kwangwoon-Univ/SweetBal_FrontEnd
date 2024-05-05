// import { IoEyeOutline } from "react-icons/io5";
// import styled from "styled-components";
// import axios from "axios";
// import {
//   useQuery,
// } from "@tanstack/react-query";

// function useFetchListData() {
//   const { isPending, error, data } = useQuery({
//     queryKey: ['repoData'],
//     queryFn: () =>
//       axios.get('endpoint').then((res) =>
//         res.json(),
//       )
//   })
//   if (isPending) return "Loading...";

//   if (error) return "An error has occurred: ";
// }

// const ListPageSingleListBox = () => {

//   return (
//     <>
//       <Container>
//         <Title>{data.title.substr(0, 15) + "..."}</Title>
//         <VS>VS</VS>
//         <Title>{data.title.substr(0, 15) + "..."}</Title>
//         <ViewContainer>
//           <IoEyeOutline />
//           <ViewCountSpan>{data.viewCount}</ViewCountSpan>
//         </ViewContainer>
//       </Container>
//     </>
//   );
// };

// export default ListPageSingleListBox;

// const Container = styled.div`
//   display: flex;
//   background-color: white;
//   width: 327px;
//   height: 75px;
//   margin-bottom: 24px;
//   border-radius: 10px;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   position: relative;
// `;

// const VS = styled.div`
//   font-size: 20px;
//   font-weight: bold;
// `;

// const ViewContainer = styled.div`
//   display: flex;
//   position: absolute;
//   background-color: white;
//   padding: 0px;
//   bottom: 8px;
//   right: 7px;
//   width: 43px;
//   height: 18px;
//   justify-content: center;
//   align-items: center;
//   background-color: white;
// `;

// const ViewCountSpan = styled.span`
//   display: flex;
//   padding: 0px;
//   margin-left: none;
//   justify-content: center;
//   align-items: center;
//   font-size: auto;
//   font-weight: bold;
// `;

// const Title = styled.div`
//   font-size: 13px;
// `;
