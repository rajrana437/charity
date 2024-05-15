import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-black p-4">
      <Image src="/logo.jpeg" alt="Company Logo" width={150} height={50} />
    </header>
  );
}
