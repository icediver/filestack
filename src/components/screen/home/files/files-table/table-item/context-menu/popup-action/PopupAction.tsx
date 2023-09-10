import { FC, FormEvent, useEffect, useState } from "react";
import styles from "./PopupAction.module.scss";
import { PopupType } from "../../types/popup.type";
import { IFilesTableItem } from "../../types/table-item.interface";
import { useQuery } from "@tanstack/react-query";
import { useSearch } from "@/hooks/useSearch";

const PopupAction: FC<{
  id: number;
  popupType: PopupType | null;
  name: string;
  type: string;
  size: string;
  onClose: () => void;
}> = ({ popupType, name, type, size, onClose, id }) => {
  const { directories } = useSearch();
  const [fileName, setFileName] = useState<string>("");
  useEffect(() => setFileName(name), []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    event.preventDefault();
    const newFileName = formData.get("fileName");
    const directory = formData.get("directory");
    onClose();
    console.log(directory, newFileName, popupType, id);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="text-black text-center p-6 h-full flex  bg-bg-color flex-col justify-between items-center"
    >
      <div className="text-primary font-semibold">
        Do you want {popupType} this file?{" "}
      </div>
      <div>
        {popupType === "Rename" && (
          <input
            id="rename"
            name="fileName"
            className="my-2 text-lg border px-2 py-1 rounded text-primary block"
            type="text"
            spellCheck="false"
            value={fileName}
            onChange={(event) => setFileName(event.target.value)}
          />
        )}
        {(popupType === "Copy" || popupType === "Move") && (
          <>
            <span className="pr-3 ">{popupType} to </span>
            {directories && (
              <select name="directory" className="p-2 rounded-lg">
                {directories.map((dir) => (
                  <option key={dir.id} value={dir.name}>
                    {dir.name}
                  </option>
                ))}
              </select>
            )}
          </>
        )}{" "}
      </div>

      <button className="bg-secondary w-1/2 py-3 rounded-xl mx-auto">
        {popupType}
      </button>
    </form>
  );
};
export default PopupAction;
