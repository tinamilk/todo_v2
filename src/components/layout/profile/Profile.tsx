import { useState } from "react";
import { EditIcon, UserPhoto } from "../../../assets/Icons";
import { Statistics } from "../statistics/Statistics";
import {
  ChangeEmailInput,
  ChangeNameInput,
  EditButton,
  ProfileWrapper,
  UserData,
  UserEmail,
  UserName,
  UserPhotoWrapper,
  UserStatistics,
} from "./Profile.styled";

interface HandleNameChangeInterface {
  target: HTMLInputElement;
}

export const Profile = () => {
  const [isUserNameChanging, setIsUserNameChanging] = useState(false);
  const [isUserEmailChanging, setIsUserEmailChanging] = useState(false);
  const [changedName, setChangedName] = useState("");
  const [changedEmail, setChangedEmail] = useState("");
  const [name, setName] = useState("User Name");
  const [email, setEmail] = useState("User@user.com");

  const handleChangeName = () => {
    setChangedName(name);
    setIsUserNameChanging(false);
  };
  const handleChangeEmail = () => {
    setChangedEmail(email);
    setIsUserEmailChanging(false);
  };

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
            {changedName || "User Name"}
            <EditButton onClick={() => setIsUserNameChanging(true)}>
              <EditIcon width={"10"} height={"10"} />
            </EditButton>
          </UserName>
        ) : (
          <ChangeNameInput
            autoFocus
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleChangeName()}
            value={name}
          />
        )}
        {!isUserEmailChanging ? (
          <UserEmail>
            {changedEmail || "User@user.com"}
            <EditButton onClick={() => setIsUserEmailChanging(true)}>
              <EditIcon width={"10"} height={"10"} />
            </EditButton>
          </UserEmail>
        ) : (
          <ChangeEmailInput
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleChangeEmail()}
            value={email}
          />
        )}
      </UserData>
      <UserStatistics>
        <Statistics title="This week" percent={50} />
        <Statistics title="All Time" percent={50} />
      </UserStatistics>
    </ProfileWrapper>
  );
};
