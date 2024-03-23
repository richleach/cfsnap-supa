import Link from "next/link";

function getYear() {
  return new Date().getFullYear();
}

function Footer() {
  return (
    <footer className="inline-block w-full px-2 text-center text-blue-900 border-t border-blue-900">
      <br />
      <Link href={`/availability/`}>Availability</Link> | &nbsp;Copyright &copy;{" "}
      {getYear()} cfsnap.com. All Rights Reserved.
    </footer>
  );
}

export default Footer;
