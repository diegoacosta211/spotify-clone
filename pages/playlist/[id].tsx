import prisma from "@/lib/prisma";
import { validateToken } from "@/lib/auth";
import { getColorBG } from "@/lib/utils";
import GradientLayout from "@/components/GradientLayout";
import SongTable from "@/components/SongTable";
import { GetServerSideProps, NextPage } from "next";
import { PlaylistProps } from "@/types/index";

const Playlist: NextPage<PlaylistProps> = ({ data: playlist }) => {
  const color = getColorBG(playlist.id);
  return (
    <GradientLayout
      color={color}
      roundImage={false}
      title={playlist.name}
      subtitle="Playlist"
      description={`There are ${playlist.songs.length} songs in the data.`}
      image={`https://picsum.photos/400?random=${playlist.id}`}
    >
      <SongTable songs={playlist.songs} />
    </GradientLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let user;
  try {
    user = validateToken(ctx.req.cookies[process.env.MUSIFY_TOKEN_NAME]);
  } catch (error) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const playlist = await prisma.playlist.findFirst({
    where: {
      id: +ctx.query.id,
      userId: user.id,
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
      data: playlist,
    },
  };
};

export default Playlist;
