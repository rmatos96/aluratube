import React from 'react'

export default function Timeline(props: any) {
  const playlistNames = Object.keys(props.playlists)
  const favouriteNames = Object.keys(props.favourites)

  return (
    <div className='flex flex-col w-full p-4'>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName]
        return (
          // eslint-disable-next-line react/jsx-key
          <section className='w-full p-4 overflow-hidden'>
            <h2 className='text-base mb-4 capitalize font-bold'>{playlistName}</h2>
            <div className='w-[calc(100vw-16px*4)] flex gap-4 grid-cols-1 overflow-hidden'>
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
    </div>
  )
}
