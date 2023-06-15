import useTrailers from "../hooks/useTrailers";

interface Props {
    gameId: number
}

const GameTrailer = ({ gameId }: Props) => {
    const { data, error, isLoading } = useTrailers(gameId)
    if (isLoading) return null
    if (error) throw error
    const vid480 = data?.results[0]
    return (
        <video src={vid480?.data[480]}
            poster={vid480?.preview}
            controls></video>
    );
}

export default GameTrailer;