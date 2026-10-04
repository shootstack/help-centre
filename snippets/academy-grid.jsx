export const AcademyGrid = ({ lessons }) => (
    <div className='gap-4 grid grid-cols-1 sm:grid-cols-2 mt-2 not-prose'>
        {lessons.map((lesson) => (
            <a
                key={lesson.slug}
                href={`/academy/${lesson.slug}`}
                className='group flex flex-col bg-white dark:bg-white/[0.03] border border-gray-200 hover:border-gray-300 dark:border-white/10 dark:hover:border-white/20 rounded-2xl overflow-hidden no-underline transition-colors academy-card'>
                <div className='relative bg-gradient-to-br from-gray-100 dark:from-[#16161a] to-gray-200 dark:to-[#0e0e12] aspect-video'>
                    {lesson.thumbnail && (
                        <>
                            <img
                                src={lesson.thumbnail}
                                alt='Gallery preview in Shootstack'
                                className={
                                    lesson.thumbnailDark
                                        ? 'absolute inset-0 w-full h-full object-cover block dark:hidden'
                                        : 'absolute inset-0 w-full h-full object-cover'
                                }
                                loading='lazy'
                                width='1920'
                                height='1080'
                            />
                            {lesson.thumbnailDark && (
                                <img
                                    src={lesson.thumbnailDark}
                                    alt='Gallery preview in Shootstack'
                                    className='absolute inset-0 w-full h-full object-cover hidden dark:block'
                                    loading='lazy'
                                    width='1920'
                                    height='1080'
                                />
                            )}
                        </>
                    )}
                    {lesson.preview && (
                        <span className='absolute top-3 left-3 bg-black/60 text-white text-xs rounded-full px-2.5 py-1'>
                            Preview lesson
                        </span>
                    )}
                    <span className='absolute inset-0 flex justify-center items-center'>
                        <span className='flex justify-center items-center bg-white/90 rounded-full size-9 text-gray-900 shadow-sm'>
                            <svg viewBox='0 0 24 24' className='fill-current ml-0.5 size-4' aria-hidden='true'>
                                <path d='M8 5.14v13.72a1 1 0 0 0 1.54.84l10.14-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z' />
                            </svg>
                        </span>
                    </span>
                </div>
                <span className='flex flex-col gap-1 px-4 pt-3 pb-4'>
                    <span className='text-sm leading-5 academy-duration'>{lesson.description}</span>
                    <span className='flex justify-between items-center gap-3'>
                        <span className='font-medium text-gray-900 dark:text-gray-50 text-sm'>{lesson.title}</span>
                        <span className='tabular-nums text-sm academy-duration shrink-0'>{lesson.duration}</span>
                    </span>
                </span>
            </a>
        ))}
    </div>
);
