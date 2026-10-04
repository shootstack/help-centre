export const HomeGuideGrid = ({ guides }) => {
    const shot = (src, srcDark, alt) => (
        <div className='border border-gray-200 dark:border-white/10 rounded-lg overflow-hidden'>
            <img
                className='dark:hidden block home-guide-shot'
                src={src}
                alt={alt}
                noZoom
                loading='lazy'
                width='1600'
                height='1000'
            />
            <img
                className='hidden dark:block home-guide-shot'
                src={srcDark}
                alt={alt}
                noZoom
                loading='lazy'
                width='1600'
                height='1000'
            />
        </div>
    );

    return (
        <div className='grid home-guide-grid grid-cols-1 sm:grid-cols-2'>
            {guides.map((guide) => (
                <div key={guide.id}>
                    <a href={guide.href} className='block home-guide-link' aria-labelledby={`${guide.id}-title`}>
                        {shot(guide.image, guide.imageDark, guide.alt)}
                        <div className='home-guide-copy'>
                            <h3 id={`${guide.id}-title`} className='font-medium home-card-title'>
                                {guide.title}
                            </h3>
                            <p className='text-gray-600 dark:text-gray-400 home-card-description'>
                                {guide.description}
                            </p>
                        </div>
                    </a>
                    <div className='flex flex-wrap gap-x-4 gap-y-2 text-gray-500 dark:text-gray-400 home-guide-topics'>
                        {guide.topics.map((topic) => (
                            <a key={topic.href} href={topic.href}>
                                {topic.label}
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
