import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, SimpleGrid, GridItem, Box } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
    const { slug } = useParams()
    const { data: game, isLoading, error } = useGame(slug!)

    if (isLoading) return <Spinner />
    if (error || !game) throw error
    return (
        <Box bgImg={game.background_image} bgPos='center' bgRepeat="no-repeat" backgroundSize="cover" padding={2}>
            {/* <Image src={game.background_image}></Image> */}
            <SimpleGrid borderRadius={20} boxShadow="dark-lg" marginTop={150} columns={{ base: 1, md: 2 }} spacing={5}>
                <GridItem borderRadius={20} bgColor='gray.800' opacity="70%" padding={2}>
                    <Heading>{game.name}</Heading>

                    <ExpandableText>{game.description_raw}</ExpandableText>
                    <GameAttributes game={game} />
                </GridItem>
                <SimpleGrid opacity="100%" padding={2}>
                    <GameTrailer gameId={game.id} />
                    <GameScreenshots gameId={game.id} />
                </SimpleGrid>
            </SimpleGrid>
        </Box>
    );
}

export default GameDetailPage;