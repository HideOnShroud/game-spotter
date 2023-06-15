import { HStack, Text, useColorMode, Switch } from '@chakra-ui/react'


const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode()
    return (
        <HStack>
            <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
            <Text whiteSpace='nowrap'>DarkMode</Text>
        </HStack>
    );
}

export default ColorModeSwitch;