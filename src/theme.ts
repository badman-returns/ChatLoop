
import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const theme = extendTheme({
    config,
    colors: {
        bg: {
            100: "#252329",
            200: "#120F13",
            300: "#0B090C",
        },
        text: {
            primary: "#E0E0E0",
            secondary: "#828282",
        },
        blue: {
            500: "#3182CE",
        },
        green: {
            400 : "#48BB78"
        },
        pink: {
            500: "#D53F8C"
        }
    },
    fonts: {
        heading: 'Noto Sans'
    }
})

export default theme