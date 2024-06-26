import Image from "next/image";

export const metadata = {
  title: "Career Consultant PK",
  description: "Your gateway to professional success.",
  other: {
    "google-site-verification": "xvIMB_dzO5SPCFZLabuJ9VkiTFZxkEoKqBErxNrrvqM",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Coming Soon: careerconsultant.pk – Your gateway to professional success.
        Our experts are gearing up to guide you to your perfect career. Stay
        tuned!
      </div>
    </main>
  );
}
