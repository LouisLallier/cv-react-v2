/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {fontFamily: {
            chivo: ["chivo"]
        },
        extend: {
            colors: {
                "blue": {
                    100: "rgba(34,176,218,1)",
                    200: "rgba(34,176,218,.9)",
                    300: "rgba(34,176,218,.8)",
                    400: "rgba(34,176,218,.7)",
                    500: "rgba(34,176,218,.6)",
                    600: "rgba(34,176,218,.5)",
                    700: "rgba(34,176,218,.4)",
                    800: "rgba(34,176,218,.3)",
                    900: "rgba(34,176,218,.2)",
                    1000: "rgba(34,176,218,.1)",
                },
                "white": {
                    100: "rgba(255,255,255,1)",
                    200: "rgba(255,255,255,.9)",
                    300: "rgba(255,255,255,.8)",
                    400: "rgba(255,255,255,.7)",
                    500: "rgba(255,255,255,.6)",
                    600: "rgba(255,255,255,.5)",
                    700: "rgba(255,255,255,.4)",
                    800: "rgba(255,255,255,.3)",
                    900: "rgba(255,255,255,.2)",
                    1000: "rgba(255,255,255,.1)",
                },
                "black": {
                    100: "rgba(0,0,0,1)",
                    200: "rgba(0,0,0,.9)",
                    300: "rgba(0,0,0,.8)",
                    400: "rgba(0,0,0,.7)",
                    500: "rgba(0,0,0,.6)",
                    600: "rgba(0,0,0,.5)",
                    700: "rgba(0,0,0,.4)",
                    800: "rgba(0,0,0,.3)",
                    900: "rgba(0,0,0,.2)",
                    1000: "rgba(0,0,0,.1)",
                },
                "green": {
                    100: "rgba(46,201,135,1)",
                    200: "rgba(46,201,135,.9)",
                    300: "rgba(46,201,135,.8)",
                    400: "rgba(46,201,135,.7)",
                    500: "rgba(46,201,135,.6)",
                    600: "rgba(46,201,135,.5)",
                    700: "rgba(46,201,135,.4)",
                    800: "rgba(46,201,135,.3)",
                    900: "rgba(46,201,135,.2)",
                    1000: "rgba(46,201,135,.1)",
                },
                "yellow": {
                    100: "rgb(249,215,1)",
                    200: "rgba(249,215,1,.9)",
                    300: "rgba(249,215,1,.8)",
                    400: "rgba(249,215,1,.7)",
                    500: "rgba(249,215,1,.6)",
                    600: "rgba(249,215,1,.5)",
                    700: "rgba(249,215,1,.4)",
                    800: "rgba(249,215,1,.3)",
                    900: "rgba(249,215,1,.2)",
                    1000: "rgba(249,215,1,.1)",
                },
                "red": {
                    100: "rgba(255,68,106,1)",
                    200: "rgba(255,68,106,.9)",
                    300: "rgba(255,68,106,.8)",
                    400: "rgba(255,68,106,.7)",
                    500: "rgba(255,68,106,.6)",
                    600: "rgba(255,68,106,.5)",
                    700: "rgba(255,68,106,.4)",
                    800: "rgba(255,68,106,.3)",
                    900: "rgba(255,68,106,.2)",
                    1000: "rgba(255,68,106,.1)",
                },
                "cyan": {
                    100: "#26C6DA",
                    200: "#00E6FF",
                    300: "#17A0B1",
                },
                "blue": {
                    100: "#4A90E2",
                    200: "#5C9BE4",
                    300: "#4281CA",
                },
                "pink": {
                    100: "#F15A9D",
                    200: "#F26AA6",
                    300: "#D8508C",
                },
                "purple": {
                    100: "#9F5AF1",
                    200: "#A86AF2",
                    300: "#8E50D8",
                },
                "gray": {
                    100: "#ADBDD8", // Lightest
                    200: "#7A889D", // Lighter
                    300: "#4A5565", // Light
                    400: "#343D49", // Normal
                    500: "#2C333D", // Dark
                    600: "#191E24", // Darker
                    700: "#13171C", // Darkest
                },
            },
        },
    },
    plugins: [],
}