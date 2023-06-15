import { Grid, Show, GridItem, Flex, HStack, Box } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GenreSelector from "../components/GenreSelector";

const HomePage = () => {
    return (
        <Grid
            templateAreas={{ base: `"main"`, lg: `"aside main"` }}
            templateColumns={{
                base: '1fr',
                lg: '180px 1fr'
            }}>
            <Show above="lg">
                <GridItem paddingX={3} area='aside'><GenreList /></GridItem>
            </Show>
            <GridItem area='main'>
                <Box paddingLeft={2}>

                    <GameHeading />
                    <Flex marginBottom={5}>
                        <Box marginRight={5}>
                            <HStack paddingX={2}>
                                <PlatformSelector />
                                <SortSelector />
                                <Show below="lg">
                                    <GenreSelector />
                                </Show>
                            </HStack>
                        </Box>
                    </Flex>
                </Box>
                <GameGrid />
            </GridItem>
        </Grid>
    );
}

export default HomePage;