

const src = 'https://youtu.be/EzKkl64rRbM'
export default function Video() {
    return (
        <video controls width="100%" height='100%'>
        <source src={src} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
      );
}
