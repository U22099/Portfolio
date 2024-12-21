import { contacts } from "./contacts-array";
import { openLink } from "./utils";
import { motion } from "framer-motion";
import { MdAttachEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export function Contact() {
  return (
    <main className="flex flex-col gap-2">
      <h1 className="text-gradient text-md font-bold font-mono">Contact me on...</h1>
      <section className="flex flex-wrap p-2 gap-2">
        {contacts.map((contact, i) => <ContactCard data={contact} key={i} />)}
      </section>
    </main>
  )
}
function ContactCard({ data }) {
  return (
    <motion.p onClick={() => openLink(data.link)} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="font-bold text-md p-2 rounded-md border font-mono">{data.name === "Email" ? <MdAttachEmail /> : data.name === "WhatsApp" ? <IoLogoWhatsapp /> : data.name === "GitHub" ? <FaGithub /> : data.name === "LinkedIn" ? <FaLinkedin /> : data.name === "X" ? <FaXTwitter /> : null}{data.name}</motion.p>
  )
}