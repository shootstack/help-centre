export const AcademyVideo = ({ src, poster, href, label, teaser = false, captions, videoRef, onPlay, onPause }) => {
    const video = (
        <video
            ref={videoRef}
            className={teaser ? 'academy-teaser-video' : 'academy-lesson-video'}
            src={src}
            poster={poster}
            controls={!teaser}
            muted={teaser}
            loop={teaser}
            playsInline
            preload='metadata'
            aria-label={label}
            aria-hidden={teaser ? 'true' : undefined}
            onPlay={onPlay}
            onPause={onPause}>
            {captions && <track kind='captions' src={captions} srcLang='en' label='English' default />}
            Your browser doesn't support video. Open the related guides below to follow the steps.
        </video>
    );

    return teaser ? (
        <div className='academy-teaser relative overflow-hidden'>
            <a href={href} className='academy-teaser-link block' aria-label={label}>
                {video}
            </a>
        </div>
    ) : (
        <div className='academy-lesson-player overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 not-prose'>
            {video}
        </div>
    );
};
