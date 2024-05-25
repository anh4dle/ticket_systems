import { useContext, useState } from "react";
import Button from "./Button";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TicketDataContext, Ticket } from "../contexts/TicketDataContext";

function Form() {
  const { ticketsState, page } = useContext(TicketDataContext);
  const [ticket, setTicketVal] = useState({
    name: "",
    subject: "",
    status: "",
    priority: "",
    description: "",
    messages: [
      {
        message: "Lorem ipsum dolor sit",
        timestamp: "11/1/2023",
        reply:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
    checked: false,
  });
  const handleChange = (e) => {
    setTicketVal({
      ...ticketVal,
      [e.target.name]: e.target.value,
    });
  };
  const createTicket = () => {
    ticketsState.push(ticket);
  };
  return (
    <div className="text-sm flex flex-col p-4 gap-4 [&>input]:border [&>input]:p-2 [&>select]:border [&>select]:p-2">
      <div className="flex justify-between items-center text-xl">
        <p className="text-center w-full">Create ticket</p>

        <AiOutlineCloseCircle className="overlay cursor-pointer" />
      </div>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={ticket.name}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input type="text" id="email" />

      <label htmlFor="subject">Subject</label>
      <input
        type="text "
        id="subject"
        value={ticket.subject}
        onChange={handleChange}
      />

      <label htmlFor="status">Status:</label>

      <select name="status" id="status">
        <option value="open">Open</option>
        <option value="pending">Pending</option>
        <option value="resolved">Resolved</option>
      </select>
      <label htmlFor="priority">Priority:</label>

      <select name="priority" id="priority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <label htmlFor="description">Description</label>
      <textarea
        className="border p-2 grow h-26 "
        id="description"
        value={ticket.description}
        onChange={handleChange}
      />

      <div className="flex gap-4 justify-end m-4">
        <Button name="Submit" click={createTicket} />
        <Button name="Cancel" />
      </div>
    </div>
  );
}

export default Form;
