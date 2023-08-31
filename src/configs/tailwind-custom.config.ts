import {
    transparent as _transparent,
    white as _white,
} from "tailwindcss/colors";

export const utilities = {
    ".shadow-around": {
        boxShadow: "0px 0px 10px rgba(0,0,0,0.09)",
    },
    ".shadow-inset": {
        boxShadow: "inset 0px 0px 15px rgba(0,0,0,0.5)",
    },
};

const colors = {
    transparent: _transparent,
    white: _white,
    black: "#484855",
    "black-inactive": "#7B7E94",
    primary: "#3043ED",
    secondary: "#77F040",
    "bg-color": "#EEEFFA",
    "main-bg": "#D5D6E1",
    "error-color": "#F05568",
    warning: "#F1D399",
};

export const extend = {
    colors,
    fontSize: {
        xs: "0.82rem",
        sm: "0.98rem",
        base: "1.15rem",
        lg: "1.22rem",
        xl: "1.36rem",
        "1.5xl": "1.5rem",
        "2xl": "1.725rem",
        "3xl": "2.155rem",
        "4xl": "2.58rem",
        "5xl": "3.45rem",
        "6xl": "4.3rem",
        "7xl": "5.17rem",
        "8xl": "6.9rem",
        "9xl": "9.2rem",
    },
    keyframes: {
        animationOpacity: {
            from: { opacity: "0" },
            to: { opacity: "1" },
        },
        scaleIn: {
            "0%": {
                opacity: "0",
                transform: "scale(0.9)",
            },
            "50%": {
                opacity: "0.2",
            },
            "100%": {
                opacity: "1",
                transform: "scale(1)",
            },
        },
        activeFolder: {
            "0%": {
                transform: "rotate(0deg)",
                left: "calc(0% + 0.5rem)",
            },
            "25%": {
                color: "red",
            },
            "75%": {
                color: "#77f040",
            },

            "100%": {
                transform: "rotate(360deg)",
                left: "calc(100% - 4.5rem)",
            },
        },
        notActiveFolder: {
            "0%": {
                transform: "rotate(360deg)",
                left: "calc(100% - 4.5rem)",
            },
            "25%": {
                color: "red",
            },
            "75%": {
                color: "#77f040",
            },
            "100%": {
                transform: "rotate(0deg)",
                right: "calc(100% - 4.5rem)",
            },
        },
    },
    animation: {
        opacity: "animationOpacity 0.8s ease-in-out",
        scaleIn: "scaleIn .75s ease-in-out",
        "rotate-left": "notActiveFolder 1s ease-in-out",
        "rotate-right": "activeFolder 1s ease-in-out",
    },
    gridTemplateColumns: {
        // Простая сетка из 16 столбцов
        16: "repeat(16, minmax(0, 1fr))",
    },
    backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
};
