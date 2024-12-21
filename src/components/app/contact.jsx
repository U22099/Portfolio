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
    <motion.p onClick={() => openLink(data.link)} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="font-bold text-lg p-2 rounded-md border font-mono flex gap-2">{data.name === "Email" ? <MdAttachEmail className="w-7 h-7" /> : data.name === "WhatsApp" ? <IoLogoWhatsapp className="w-7 h-7" /> : data.name === "GitHub" ? <FaGithub className="w-7 h-7" /> : data.name === "LinkedIn" ? <FaLinkedin className="w-7 h-7" /> : data.name === "X" ? <FaXTwitter className="w-7 h-7"/> : null}{data.name}</motion.p>
  )
}