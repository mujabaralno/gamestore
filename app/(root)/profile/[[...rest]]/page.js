import { UserProfile } from "@clerk/nextjs";

export default function Home() {
    return (
       <div className="wrapper">
         <UserProfile />
       </div>
    );
}