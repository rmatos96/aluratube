import React from 'react'

export default function Header() {
  return (
    <div>
      <img className='w-full h-[230px] object-cover' src="https://s3-alpha-sig.figma.com/img/9523/92e8/04a35cb66dd024364b232aa920f5686f?Expires=1668988800&Signature=ae93BK9~JyidbHw6AN~T26wiT-oLtt83SMWPjRnnk4cz-uIji8IxfLgmWLNS09Oe0UglnJb9DETCP51hIMl9kXbU3jNrVUPzEHD758i3i2LmHGP8PLrF4UYBE9QqqSTUWhpgIoTLfXOjtZfGEAsWw03D-Td2zkig7VQ70wc4W3Bi8dm6SCQRJFzRqT2UQp88oESwMM1zmwmndVfW4Bz9nny2xnnaS1uUpKw-4BaUL5KUO0cNrHlCtnITMEgkrfnbDqtyN5RLqnmHzBHkO1cmGLm85TY2tnk7yCVETjepKwJNBtW8My~CCQO0AZIoOL8lbBFPY0gbdWzFruGgoFyQ7Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
      <section className='flex items-center w-full py-4 px-8 gap-4'>
        <img className='w-20 h-20 rounded-full' src="https://avatars.githubusercontent.com/u/98776713?v=4" alt="" />
        <div className='flex flex-col gap-[2px]'>
          <h2 className='font-sans font-bold text-2xl leading-7'>Rodrigo Matos</h2>
          <p className='font-sans text-base leading-[18px]'>Front-end Developer</p>
        </div>
      </section>
    </div>
  )
}
