"use client"

import { Navbar } from "@/components/moleculs/navbar";
import { ProfileHeader } from "@/components/organisms/profileheader";
import { OurJourney } from "@/components/organisms/ourjourney";
import { Footer } from "@/components/organisms/footer";

export default function ProfilePage() {
    return (
        <div className="bg-white">
            <Navbar />
            <ProfileHeader/>
            <OurJourney />
            <Footer />
        </div>
    )
}