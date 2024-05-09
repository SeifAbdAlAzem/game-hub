import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
    initialColorMode: 'dark'
};

const theme = extendTheme({
    config,
    colors: {
        gray: {
        50: '#f9f9f9',
        100: '#ededed',
        200: '#d3d3d3',
        300: '#b3b3b3',
        400: '#a0a0a0',
        500: '#898989',
        600: '#6c6c6c',
        700: '#202020',
        800: '#121212',
        900: '#111'
        }
    },
    components: {
        Button: {
            variants: {
                primary: () => ({
                    _hover: {
                        backgroundColor: mode('gray.600', 'gray.300'),
                    },
                    _active: {
                        backgroundColor: mode('gray.700', 'gray.400'),
                    }
                })
            }
        },
        Input: {
            variants: {
                filled: {
                    field: {
                        _focus: {
                            borderColor: 'gray.500'
                        }
                    }
                }
            },
        }
    }
});

export default theme;