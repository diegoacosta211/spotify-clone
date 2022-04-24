import prisma from "@/lib/prisma";
import { validateToken } from "@/lib/auth";
import { getColorBG } from "@/lib/utils";
import GradientLayout from "@/components/GradientLayout";
import SongTable from "@/components/SongTable";

const Playlist = ({ playlist }) => {
  const color = getColorBG(playlist.id);
  return (
    <GradientLayout
      color={color}
      roundImage={false}
      title={playlist.name}
      subtitle="Playlist"
      description={`There are ${playlist.songs.length} songs in the playlist.`}
      image={`https://picsum.photos/400?random=${playlist.id}`}
    >
      <SongTable songs={playlist.songs} />
    </GradientLayout>
  );
};

export async function getServerSideProps({ query, req }) {
  const { id } = validateToken(req.cookies[process.env.MUSIFY_TOKEN_NAME]);
  const playlist = await prisma.playlist.findFirst({
    where: {
      id: +query.id,
      userId: id,
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  });
  return {
    props: {
      playlist,
    },
  };
}

export default Playlist;
