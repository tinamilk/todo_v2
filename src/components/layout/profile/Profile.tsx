import { useState } from "react";
import { EditIcon, UserPhoto } from "../../../assets/Icons";
import {
  ChangeEmailInput,
  ChangeNameInput,
  EditButton,
  ProfileWrapper,
  UserData,
  UserEmail,
  UserName,
  UserPhotoWrapper,
} from "./Profile.styled";

export const Profile = () => {
  const [isUserNameChanging, setIsUserNameChanging] = useState(false);
  const [isUserEmailChanging, setIsUserEmailChanging] = useState(false);

  return (
    <ProfileWrapper>
      <UserData>
        <UserPhotoWrapper>
          <UserPhoto />
          <EditButton>
            <EditIcon width={"10"} height={"10"} />
          </EditButton>
        </UserPhotoWrapper>
        {!isUserNameChanging ? (
          <UserName>
            User Name
            <EditButton onClick={() => setIsUserNameChanging(true)}>
              <EditIcon width={"10"} height={"10"} />
            </EditButton>
          </UserName>
        ) : (
          <ChangeNameInput defaultValue="User Name" />
        )}
        {!isUserEmailChanging ? (
          <UserEmail>
            User@user.com
            <EditButton onClick={() => setIsUserEmailChanging(true)}>
              <EditIcon width={"10"} height={"10"} />
            </EditButton>
          </UserEmail>
        ) : (
          <ChangeEmailInput defaultValue="User@user.com" />
        )}
      </UserData>
    </ProfileWrapper>
  );
};
