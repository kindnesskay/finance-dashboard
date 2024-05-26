import { ProfileData } from "./cards/ProfileCard";

export default function ProfileButton({ profileData }: ProfileData) {
  const { username, profile_image } = profileData;
  return (
    <div className="flex justify-center items-center gap-2">
      <button className="h-10 w-10 rounded-full  bg-blue-500 overflow-hidden">
        <img src={profile_image} className="h-full w-full" />
      </button>
      <p className="text-sm font-medium text-white max-md:hidden">{username}</p>
    </div>
  );
}
