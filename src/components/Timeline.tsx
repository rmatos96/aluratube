import React from 'react'

export default function Timeline({ searchValue, ...props }: any) {
  const playlistNames = Object.keys(props.playlists)
  const favourites = Object.keys(props.favourites)

  return (
    <div className='flex flex-1 flex-col w-full p-4 overflow-hidden'>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName]
        return (
          // w-[calc(100vw-16px*4)] flex gap-4 overflow-hidden
          // eslint-disable-next-line react/jsx-key
          <section key={playlistName} className='w-full p-4 overflow-hidden' >
            <h2 className='text-base mb-4 capitalize font-bold'>{playlistName}</h2>
            <div className='w-[calc(100vw-16px*4)] grid gap-4 grid-cols-16 grid-flow-col auto-cols-[minmax(200px,_1fr)] '>
              {videos
                .filter((video: any) => {
                  const titleNormalized = video.title.toLowerCase()
                  const searchValueNormalized = searchValue.toLowerCase()
                  return titleNormalized.includes(searchValueNormalized)
                })
                .map((video: any) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <div>
                      <a key={video.url} href={video.url} className="snap-start h-auto">
                        <img className='aspect-video object-cover h-auto' src={video.thumb} alt="" />
                        <span className='pt-2 block pr-6'>
                          {video.title}
                        </span>
                      </a>
                    </div>
                  )
                })}
            </div>
          </section>
        )
      })}
      <div className='w-full p-4 overflow-hidden'>
        <h2 className='text-base mb-4 capitalize font-bold'>Aluratube Favoritos</h2>
        {
          favourites.map((item) => {
            const user = props.favourites[item]
            return (
              // eslint-disable-next-line react/jsx-key
              <div>
                {user.map((userName: any) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <div className='inline-block ml-2'>
                      <div className='flex flex-col gap-2 items-center justify-center'>
                        <img className='w-[100px] h-[100px] rounded-full' src={userName.avatar} alt="" />
                        <p className='text-sm leading-4 text-#000000 font-sans'>{userName.username}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          })
        }
      </div>
    </div >
  )
}
