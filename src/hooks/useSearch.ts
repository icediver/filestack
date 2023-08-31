import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useEffect, useMemo, useState } from "react";

import { useDebounce } from "./useDebounce";
import { FileService } from "@/services/file/file.services";
import { ISearch } from "@/services/file/search.interface";

export const useSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeFolder, setActiveFolder] = useState<number>(-1);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const search: ISearch = useMemo(
        () => ({ searchTerm, activeFolder, page: currentPage }),
        [searchTerm, activeFolder, currentPage],
    );

    const debouncedSearch = useDebounce(search, 500);

    const { isSuccess, data } = useQuery(
        ["search files or directories", debouncedSearch],
        () => {
            return FileService.getBySearchTerm(debouncedSearch);
        },
    );

    useEffect(() => setCurrentPage(1), [activeFolder]);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm((prevState) => e.target.value);
        setCurrentPage(1);
    };

    return {
        isSuccess,
        handleSearch,
        activeFolder,
        setActiveFolder,
        setCurrentPage,
        currentPage,
        data,
    };
};
