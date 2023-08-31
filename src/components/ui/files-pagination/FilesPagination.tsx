import { Dispatch, FC, SetStateAction } from "react";
import styles from "./FilesPagination.module.scss";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import clsx from "clsx";

const FilesPagination: FC<{
    pages: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
    currentPage: number;
}> = ({ pages, currentPage, setCurrentPage }) => {
    function handleLeftButton() {
        if (currentPage > 1) setCurrentPage((prevState) => prevState - 1);
    }
    function handleRightButton() {
        if (currentPage < pages) setCurrentPage((prevState) => prevState + 1);
    }
    const middleButton =
        currentPage >= 2 ? (currentPage < pages ? currentPage : pages - 1) : 2;
    return (
        <div className={styles.pagination}>
            <button
                className={styles.button}
                onClick={handleLeftButton}
                disabled={currentPage === 1}
            >
                <HiChevronDoubleLeft />
            </button>
            <button
                className={clsx(styles.page, { [styles.active]: currentPage === 1 })}
                onClick={() => setCurrentPage(1)}
            >
                1
            </button>
            <button
                className={clsx(styles.page, {
                    [styles.active]: currentPage > 1 && currentPage < pages,
                })}
                onClick={() => setCurrentPage(middleButton)}
            >
                {pages > 2 ? middleButton : "of"}
            </button>
            <button
                className={clsx(styles.page, {
                    [styles.active]: currentPage === pages && pages !== 1,
                })}
                onClick={() => setCurrentPage(pages)}
            >
                {pages}
            </button>

            <button className={styles.button} onClick={handleRightButton}>
                <HiChevronDoubleRight />
            </button>
        </div>
    );
};
export default FilesPagination;
