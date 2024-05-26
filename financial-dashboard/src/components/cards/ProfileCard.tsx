export type profileDataType = {
  username: string;
  profile_image: string;
};

export interface ProfileData {
  profileData: profileDataType;
}
export default function ProfileCard({ profileData }: ProfileData) {
  const { username, profile_image } = profileData;
  return (
    <div className="w-full max-w-sm flex flex-col items-center">
      <div className="rounded-full h-20 w-20 overflow-hidden">
        <img src={profile_image} alt={username} className="h-full w-full" />
      </div>
      <p className="font-medium text-md">{username}</p>
    </div>
  );
}
