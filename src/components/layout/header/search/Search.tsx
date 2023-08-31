import { ChangeEvent, FC } from "react";
import styles from "./Search.module.scss";
import { LuSearch } from "react-icons/lu";
import { useSearch } from "@/hooks/useSearch";
const Search: FC<{
    handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}> = ({ handleSearch }) => {
    return (
        <div className={styles.search}>
            <input
                type="text"
                placeholder="Search files, directories or other"
                onChange={handleSearch}
            />
            <LuSearch size={28} />
        </div>
    );
};
export default Search;
