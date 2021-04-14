import React from "react";

function ProfilePic({ url }) {
  return (
    <div className="h-10 rounded-full">
      <img loading="lazy" src={url} alt="profile pic" />
    </div>
  );
}

export default ProfilePic;
