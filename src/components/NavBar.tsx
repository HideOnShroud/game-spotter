import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBox from "./SearchBox";

interface Props {
    onSearch: (searchText: string) => void
}

const NavBar = ({ onSearch }: Props) => {
    return (
        <HStack padding='10px'>
            <Image borderRadius={10} src={logo} boxSize='60px' />
            <SearchBox onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    );
}

export default NavBar;