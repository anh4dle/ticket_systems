import { useContext, useState } from "react";
import Button from "./Button";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TicketDataContext } from "../contexts/TicketDataContext";

function Form() {
  const { ticketsState } = useContext(TicketDataContext);
  const [ticket, setTicketVal] = useState({
    id: 24,
    name: "",
    subject: "",
    created: "",
    status: "",
    priority: "",
    description: "",
    agent: "Anh",
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

  const handleChange = (e: any) => {
    setTicketVal({
      ...ticket,
      [e.target.name]: e.target.value,
    });
  };
  const createTicket = () => {
    const newDate = new Date();
    const date = newDate.getDate();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();

    const timestampStr = `${month}/${date}/${year}`;
    console.log(timestampStr);

    ticket.created = timestampStr;
    ticketsState.push(ticket);
  };
  console.log(ticket);
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
        name="name"
        value={ticket.name}
        onChange={handleChange}
      />

      <label htmlFor="subject">Subject</label>
      <input
        type="text "
        id="subject"
        name="subject"
        value={ticket.subject}
        onChange={handleChange}
      />

      <label htmlFor="status">Status:</label>

      <select name="status" id="status" value={ticket.status}>
        <option value="open">Open</option>
        <option value="pending">Pending</option>
        <option value="resolved">Resolved</option>
      </select>
      <label htmlFor="priority">Priority:</label>

      <select
        name="priority"
        id="priority"
        value={ticket.priority}
        onChange={handleChange}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <label htmlFor="description">Description</label>
      <textarea
        className="border p-2 grow h-26 "
        id="description"
        name="description"
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
