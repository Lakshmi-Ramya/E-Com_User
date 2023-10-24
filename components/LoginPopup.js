// import { signIn, useSession } from "next-auth/react";
// import React from "react";
// import styled from "styled-components";

// const PopupContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.5);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 999;
// `;

// const PopupContent = styled.div`
//   background-color: #fff;
//   padding: 20px;
//   text-align: center;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
// `;

// const Message = styled.p`
//   font-size: 1rem;
//   margin-bottom: 20px;
// `;

// const ActionButton = styled.button`
//   background-color: #007bff;
//   color: #fff;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   margin-right: 10px;
// `;

// const CloseButton = styled.button`
//   background-color: #ccc;
//   color: #fff;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// async function login() {
//   await signIn("google");
// }

// function LoginPopup({ message, onClose }) {
//   const { data: session } = useSession();
//   return (
//     <PopupContainer>
//       <PopupContent>
//         <Message>{message}</Message>
//         {!session && <ActionButton onClick={login}>Login</ActionButton>}
//         <CloseButton onClick={onClose}>Close</CloseButton>
//       </PopupContent>
//     </PopupContainer>
//   );
// }

// export default LoginPopup;

/////////////
// the new pop up
/////////////

import { signIn, useSession } from "next-auth/react";
import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const PopupContent = styled.div`
  background-color: #fff;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
const ButtonContainer = styled.div`
  display: grid;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Message = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
`;

async function login() {
  await signIn("google");
}

function LoginPopup({ message, onClose }) {
  const { data: session } = useSession();

  useEffect(() => {
    // Add event listener to handle clicks outside of the popup
    function handleClickOutside(event) {
      if (event.target === event.currentTarget) {
        onClose();
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      // Remove event listener when the component unmounts
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  return (
    <PopupContainer>
      <PopupContent>
        <ButtonContainer>
          {session ? (
            <Message>{message}</Message>
          ) : (
            <>
              <Message>{message}</Message>
              <Button variant="contained" onClick={login}>
                Login
              </Button>
            </>
          )}
          <Button
            variant="contained"
            color="success"
            onClick={onClose}
            style={{ marginTop: "10px" }}
          >
            Close
          </Button>
        </ButtonContainer>
      </PopupContent>
    </PopupContainer>
  );
}

export default LoginPopup;
