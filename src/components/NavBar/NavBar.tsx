import { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import NavLink from "./NavLink";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import styles from "@/styles/NavBar/navbar.module.scss";
export default function NavBar() {
  const router = useRouter();
  const { status } = useSession();
  return (
    <div className={styles.navbarContainer}>
      <NavLink
        href="/"
        title="The notes share app"
        svg={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M352 176L217.6 336 160 272"
            />
            <rect
              x="64"
              y="64"
              width="384"
              height="384"
              rx="48"
              ry="48"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
        }
      />
      <NavLink
        href="/about"
        title="About"
        svg={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <title>Information</title>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="40"
              d="M196 220h64v172"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="40"
              d="M187 396h138"
            />
            <path d="M256 160a32 32 0 1132-32 32 32 0 01-32 32z" />
          </svg>
        }
      />
      <NavLink
        href="/newNote"
        title="New Note"
        svg={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M256 112v288M400 256H112"
            />
          </svg>
        }
      />
      <NavLink
        href="/myNotes"
        title="My Notes"
        svg={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <title>Clipboard</title>
            <path
              d="M336 64h32a48 48 0 0148 48v320a48 48 0 01-48 48H144a48 48 0 01-48-48V112a48 48 0 0148-48h32"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <rect
              x="176"
              y="32"
              width="160"
              height="64"
              rx="26.13"
              ry="26.13"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
        }
      />
      <NavLink
        href="/allNotes"
        title="All Notes"
        svg={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M368 415.86V72a24.07 24.07 0 00-24-24H72a24.07 24.07 0 00-24 24v352a40.12 40.12 0 0040 40h328"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <path
              d="M416 464h0a48 48 0 01-48-48V128h72a24 24 0 0124 24v264a48 48 0 01-48 48z"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M240 128h64M240 192h64M112 256h192M112 320h192M112 384h192"
            />
            <path d="M176 208h-64a16 16 0 01-16-16v-64a16 16 0 0116-16h64a16 16 0 0116 16v64a16 16 0 01-16 16z" />
          </svg>
        }
      />
      {status === "loading" && <NavLink href="" title="" />}
      {status === "unauthenticated" && <SignIn />}
      {status === "authenticated" && <SignOut />}
    </div>
  );
}
