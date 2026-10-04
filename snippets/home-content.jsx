export const homeSections = [
    { href: '/academy', icon: '/assets/icons/graduation-cap.svg', label: 'Academy' },
    { href: '/guides/introduction/overview', icon: '/assets/icons/book-open-01.svg', label: 'Guides' },
    { href: '/troubleshooting', icon: '/assets/icons/message-question.svg', label: 'Troubleshooting' },
];

export const homeGuides = [
    {
        id: 'delivery',
        title: 'Gallery delivery',
        description:
            'Organize your shoot, upload photos, and deliver a gallery your client can view, favorite, and download.',
        href: '/guides/projects/overview',
        image: '/assets/images/home/gallery-delivery.webp',
        imageDark: '/assets/images/home/gallery-delivery-dark.webp',
        alt: 'Projects page showing project cards with covers and status icons',
        topics: [
            { label: 'Projects', href: '/guides/projects/overview' },
            { label: 'Media folders', href: '/guides/media-folders/overview' },
            { label: 'Galleries', href: '/guides/galleries/overview' },
            { label: 'Gallery shares', href: '/guides/gallery-shares/overview' },
        ],
    },
    {
        id: 'contacts',
        title: 'Contact management',
        description: 'Keep your contacts in one place and follow up by email with reusable templates.',
        href: '/guides/contacts/overview',
        image: '/assets/images/home/contact-management.webp',
        imageDark: '/assets/images/home/contact-management-dark.webp',
        alt: 'Contacts page showing the contact table',
        topics: [
            { label: 'Contacts', href: '/guides/contacts/overview' },
            { label: 'Emails', href: '/guides/emails/overview' },
            { label: 'Email templates', href: '/guides/emails/create-templates' },
        ],
    },
    {
        id: 'productivity',
        title: 'Productivity',
        description: 'Plan your next steps with tasks and keep shoot details close at hand with notes.',
        href: '/guides/tasks/overview',
        image: '/assets/images/home/productivity.webp',
        imageDark: '/assets/images/home/productivity-dark.webp',
        alt: 'Tasks page showing the task list',
        topics: [
            { label: 'Tasks', href: '/guides/tasks/overview' },
            { label: 'Notes', href: '/guides/notes/overview' },
            { label: 'Note templates', href: '/guides/notes/templates' },
        ],
    },
    {
        id: 'settings',
        title: 'Settings',
        description: 'Set up your workspace, add your branding, and choose the preferences that suit how you work.',
        href: '/guides/workspace-settings/overview',
        image: '/assets/images/home/settings.webp',
        imageDark: '/assets/images/home/settings-dark.webp',
        alt: 'Workspace settings page with General selected and workspace details visible',
        topics: [
            { label: 'Personal', href: '/guides/personal-settings/overview' },
            { label: 'Workspace', href: '/guides/workspace-settings/overview' },
            { label: 'Branding', href: '/guides/branding-settings/overview' },
        ],
    },
];
