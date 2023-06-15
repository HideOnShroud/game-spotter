import { Spinner, Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

import useGameQueryStore from "../store";
import { BsChevronDown } from "react-icons/bs";

const GenreSelector = () => {
    const { data, isLoading, error } = useGenres()
    const setGenreId = useGameQueryStore(s => s.setGenreId)

    if (error) return null
    if (isLoading) return <Spinner />
    return (
        <>

            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDown />}>{'Genres'}</MenuButton>
                <MenuList>
                    {data?.results.map((genre) => <MenuItem onClick={() => setGenreId(genre.id)} key={genre.id}>{genre.name}</MenuItem>)}
                </MenuList>
            </Menu>
        </>
    );
}

export default GenreSelector;