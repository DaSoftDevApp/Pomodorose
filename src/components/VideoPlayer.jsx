import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';

function VideoPlayer() {
    const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/watch?v=sWtEYPva4A0&list=RDsWtEYPva4A0&start_radio=1');
    const [player, setPlayer] = useState(null);
    const [isReady, setIsReady] = useState(false);
    const [volume, setVolume] = useState(50); // Default volume at 50%
    const isPlaying = useSelector(state => state.chrono.isPlaying);

    useEffect(() => {
        // Load YouTube API
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = () => {
            createPlayer('');
        };
    }, []);

    useEffect(() => {
        if (player && isReady) {
            try {
                if (isPlaying) {
                    player.playVideo();
                } else {
                    player.pauseVideo();
                }
            } catch (error) {
                console.error('Error controlling video:', error);
            }
        }
    }, [isPlaying, player, isReady]);

    const createPlayer = (videoId) => {
        const newPlayer = new window.YT.Player('youtube-player', {
            height: '315',
            width: '560',
            videoId: 'sWtEYPva4A0',
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
        setPlayer(newPlayer);
    };

    const onPlayerReady = (event) => {
        setIsReady(true);
        console.log('Player is ready');
    };

    const onPlayerStateChange = (event) => {
        console.log('Player state changed:', event.data);
    };

    const handleUrlSubmit = (e) => {
        e.preventDefault();
        const videoId = extractVideoId(videoUrl);
        if (videoId && player && isReady) {
            player.loadVideoById(videoId);
        }
    };

    const extractVideoId = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const handleVolumeChange = (direction) => {
        if (player && isReady) {
            try {
                let newVolume;
                if (direction === 'up') {
                    newVolume = Math.min(100, volume + 10);
                } else {
                    newVolume = Math.max(0, volume - 10);
                }
                player.setVolume(newVolume);
                setVolume(newVolume);
            } catch (error) {
                console.error('Error adjusting volume:', error);
            }
        }
    };

    return (
        <div className="mt-8">
            <form onSubmit={handleUrlSubmit} className="mb-6 flex justify-center gap-2">
                <input
                    type="text"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    placeholder="Enter YouTube URL"
                    className="px-4 py-2 rounded-lg border border-rose/20 text-rose w-full max-w-md focus:outline-none focus:border-rose focus:ring-2 focus:ring-rose/20"
                />
                <Button
                    type="submit"
                    variant='contained'
                    className="!bg-rose-400 hover:!bg-rose-500 text-white px-4 py-2 rounded-lg transition-colors"
                >
                    Load Video
                </Button>
                {/* <button
                    type="submit"
                    className="bg-rose text-white px-4 py-2 rounded-lg hover:bg-rose-dark transition-colors"
                >
                    Load Video
                </button> */}
            </form>

            <div className="flex justify-center">
                <div id="youtube-player" className="rounded-lg overflow-hidden shadow-lg"></div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-4">
                <button
                    onClick={() => handleVolumeChange('down')}
                    className="bg-rose/10 hover:bg-rose/20 text-rose-dark px-4 py-2 rounded-full transition-colors"
                    title="Decrease Volume"
                >
                    <span role="img" aria-label="decrease volume">🔉</span>
                </button>

                <div className="bg-rose-light/50 px-4 py-2 rounded-full min-w-[60px] text-center text-rose-dark">
                    {volume}%
                </div>

                <button
                    onClick={() => handleVolumeChange('up')}
                    className="bg-rose/10 hover:bg-rose/20 text-rose-dark px-4 py-2 rounded-full transition-colors"
                    title="Increase Volume"
                >
                    <span role="img" aria-label="increase volume">🔊</span>
                </button>
            </div>
        </div>
    )
}

export default VideoPlayer;