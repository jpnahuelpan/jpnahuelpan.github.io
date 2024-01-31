import { useState } from "react";
import Modal from "./Modal";

interface Props {
  pdf: string
  name: string
}

export default function Button({ pdf, name }: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="inline">
      <button
        onClick={() => setIsModalOpen(true)}
        className="inline p-0 hover:text-red-700 font-bold underline underline-offset-4 decoration-dashed"
        >
        {name}
      </button>
      <Modal pdf={pdf} isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}/>
    </div>
  );
}