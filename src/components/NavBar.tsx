import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBox from "./SearchBox";


const NavBar = () => {
    return (
        <HStack padding='10px'>
            <Image borderRadius={10} src={logo} boxSize='60px' />
            <SearchBox />
            <ColorModeSwitch />
        </HStack>
    );
}

export default NavBar;