import React from 'react'

export default function Timeline(props: any) {
  const playlistNames = Object.keys(props.playlists)
  const favourites = Object.keys(props.favourites)

  return (
    <div className='flex flex-col w-full p-4'>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName]
        return (
          // eslint-disable-next-line react/jsx-key
          <section className='w-full p-4 overflow-hidden' >
            <h2 className='text-base mb-4 capitalize font-bold'>{playlistName}</h2>
            <div className='w-[calc(100vw-16px*4)] flex gap-4 overflow-hidden'>
              {videos.map((video: any) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div>
                    <a href={video.url}>
                      <img className='aspect-video object-cover  h-auto' src={video.thumb} alt="" />
                      <span className='w-[200px] text-center flex items-center justify-center'>
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
