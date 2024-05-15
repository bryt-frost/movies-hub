'use client';

import { VideoProps, Videos } from '../../type';
import YouTube, { YouTubeProps } from 'react-youtube';

const VideoPlayer = ({ videos }: { videos: VideoProps[] }) => {
  const onPlayerReady: YouTubeProps['onReady'] = (event: any) => {
    event.target.pauseVideo();
  };
  const options = {
    height: '300px',
    width: '100%',
  };
  return (
    <div>
      <h2 className='text-bold font-bold mb-5'>Official YouTube videos</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10'>
        {videos?.map((video) => (
          <div
            key={video.id}
            className='border border-gray-600 rounded-md w-full relative overflow-hidden'>
            <p className='text-sm px-6 font-semibold  py-3'>
              Type: {video?.type} - {video?.official ? 'Official' : 'General'}
            </p>
            <YouTube
              onReady={onPlayerReady}
              opts={options}
              videoId={video.key}
              title={video.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default VideoPlayer;
