export const HomeAcademyFeature = ({ renderVideo, icon, copy }) => {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const preview = {
        src: '/assets/videos/academy/from-shoot-to-gallery-preview.mp4',
        poster: '/assets/images/guides/galleries/design-open-1.webp',
        href: '/academy/from-shoot-to-gallery',
        label: copy?.label || 'Watch the Academy preview: From your shoot to a shared gallery',
    };

    useEffect(() => {
        const player = videoRef.current;
        const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
        const onPreference = () => {
            if (preference.matches) player.pause();
            else player.play().catch(() => undefined);
        };
        onPreference();
        preference.addEventListener('change', onPreference);
        return () => {
            preference.removeEventListener('change', onPreference);
            player.pause();
        };
    }, []);

    const togglePlayback = () => {
        const player = videoRef.current;
        if (player.paused) player.play().catch(() => undefined);
        else player.pause();
    };

    return (
        <div className='grid bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 rounded-lg overflow-hidden home-academy'>
            {renderVideo({ ...preview, videoRef, onPlay: () => setPlaying(true), onPause: () => setPlaying(false) })}
            <div className='flex flex-col justify-center items-start home-academy-copy'>
                <div className='flex items-center gap-4 text-gray-600 dark:text-gray-400 home-video-meta'>
                    <span className='home-video-duration'>0:12</span>
                    <button
                        type='button'
                        className='home-video-toggle'
                        aria-label={playing ? (copy?.pauseLabel || 'Pause Academy preview') : (copy?.playLabel || 'Play Academy preview')}
                        onClick={togglePlayback}>
                        {playing ? (copy?.pause || 'Pause preview') : (copy?.play || 'Play preview')}
                    </button>
                </div>
                <h3 className='font-medium home-feature-title'>
                    {copy?.titleStart || 'From your shoot'}
                    <br />
                    {copy?.titleEnd || 'to a shared gallery'}
                </h3>
                <p className='text-gray-600 dark:text-gray-400'>
                    {copy?.description || 'See how projects, photos, and galleries fit together before you send a gallery to a client.'}
                </p>
                <a
                    href={preview.href}
                    className='inline-flex items-center gap-2 font-medium text-gray-900 dark:text-gray-50 home-watch-link'>
                    {copy?.watch || 'Watch the preview'}
                    {icon}
                </a>
            </div>
        </div>
    );
};
