import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 13,
          background: '#800e13',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F9F6F0',
          borderRadius: '8px',
          fontWeight: 900,
          fontFamily: 'sans-serif',
        }}
      >
        AFY
      </div>
    ),
    {
      ...size,
    }
  )
}
