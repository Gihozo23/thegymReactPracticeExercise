import React from "react";
import Contact from "./Contact";
import data from "./contactData";

function ContactParent() {
  const title = "Contact Info";
  const contact = data.map((el) => <Contact key={el.id} el={el} />);

  return (
    <div className=" pt-32 ml-20">
      <h1 className="text-xl text-white mb-6">{title}</h1>
      {contact}
    </div>
  );
}

export default ContactParent;
