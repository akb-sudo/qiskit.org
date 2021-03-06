type SegmentData = {
  action: string
}

/**
 * Represent a navigation link for the menus of the site
 */
interface NavLink {
  /** The visible name of the link */
  label: string
  /** Where we want to go */
  url: string
  /** Indicates if we need to use a <nuxt-link> or an <a> */
  linkType: 'nuxtLink' | 'aLink'
  /** Includes an object with the information of the action. Example:
   * ```ts
   * {
      action: 'Qiskit Community: GitHub'
     }
    ```
   */
  segment?: SegmentData
  /** Only for <a> links. Use `_blank` to open the link in a new tab */
  target?: string
  /** Only for <a> links. Specifies the relationship between the current document
   *  and the linked document. Possible values: `nofollow`, `noreferrer`, `noopener`,
   *  `me` or a combination of them
   */
  rel?: string
}

type LabeledLinks = {
  [key: string]: NavLink
}

type QiskitElements = {
  terra: NavLink,
  aer: NavLink,
  aqua: NavLink,
  ignis: NavLink,
  ibmQAccount: NavLink
}

const QISKIT_ELEMENTS: QiskitElements = {
  terra: {
    label: 'Terra',
    url: '/terra',
    linkType: 'nuxtLink'
  },
  aer: {
    label: 'Aer',
    url: '/aer',
    linkType: 'nuxtLink'
  },
  aqua: {
    label: 'Aqua',
    url: '/aqua',
    linkType: 'nuxtLink'
  },
  ignis: {
    label: 'Ignis',
    url: '/ignis',
    linkType: 'nuxtLink'
  },
  ibmQAccount: {
    label: 'IBM Q Account',
    url: '/ibmqaccount',
    linkType: 'nuxtLink'
  }
}

const ORDERED_QISKIT_ELEMENTS: Array<NavLink> = [
  QISKIT_ELEMENTS.terra,
  QISKIT_ELEMENTS.aer,
  QISKIT_ELEMENTS.aqua,
  QISKIT_ELEMENTS.ignis,
  QISKIT_ELEMENTS.ibmQAccount
]

const SOCIAL_MEDIA: LabeledLinks = {
  github: {
    label: 'GitHub',
    url: 'https://github.com/Qiskit',
    target: '_blank',
    rel: 'noopener',
    linkType: 'aLink'
  },
  slack: {
    label: 'Slack',
    url: 'https://qiskit.slack.com/',
    target: '_blank',
    rel: 'noopener',
    linkType: 'aLink'
  },
  twitter: {
    label: 'Twitter',
    url: 'https://twitter.com/Qiskit',
    target: '_blank',
    rel: 'noopener',
    linkType: 'aLink'
  },
  medium: {
    label: 'Medium',
    url: 'https://medium.com/Qiskit',
    target: '_blank',
    rel: 'noopener',
    linkType: 'aLink'
  },
  youtube: {
    label: 'YouTube',
    url: 'https://www.youtube.com/Qiskit',
    target: '_blank',
    rel: 'noopener',
    linkType: 'aLink'
  },
  stack: {
    label: 'Stack Exchange',
    url: 'https://quantumcomputing.stackexchange.com/questions/tagged/qiskit',
    target: '_blank',
    rel: 'noopener',
    linkType: 'aLink'
  }
}

const ORDERED_SOCIAL_MEDIA: Array<NavLink> = [
  SOCIAL_MEDIA.github,
  SOCIAL_MEDIA.slack,
  SOCIAL_MEDIA.twitter,
  SOCIAL_MEDIA.medium,
  SOCIAL_MEDIA.youtube,
  SOCIAL_MEDIA.stack
]

const COMMUNITY_SUB_LINKS: LabeledLinks = {
  education: {
    label: 'Education',
    url: '/education',
    linkType: 'nuxtLink'
  },
  advocates: {
    label: 'Advocates',
    url: '/advocates',
    linkType: 'nuxtLink'
  },
  experiments: {
    label: 'Experiments',
    url: '/experiments',
    linkType: 'nuxtLink'
  }
}

const ORDERED_COMMUNITY_SUB_LINKS: Array<NavLink> = [
  COMMUNITY_SUB_LINKS.education,
  COMMUNITY_SUB_LINKS.advocates,
  COMMUNITY_SUB_LINKS.experiments
]

const QISKIT_EDUCATION: LabeledLinks = {
  textbook: {
    label: 'Textbook',
    url: '/textbook',
    linkType: 'aLink'
  },
  youtube: {
    label: 'Coding With Qiskit',
    url: 'https://www.youtube.com/playlist?list=PLOFEBzvs-Vvp2xg9-POLJhQwtVktlYGbY',
    target: '_blank',
    rel: 'noopener',
    linkType: 'aLink'
  },
  hostEvent: {
    label: 'Host an Event',
    url: 'mailto:hello@qiskit.camp',
    target: '_blank',
    rel: 'noopener',
    linkType: 'aLink'
  }
}

const ORDERED_QISKIT_EDUCATION: Array<NavLink> = [
  QISKIT_EDUCATION.textbook,
  QISKIT_EDUCATION.youtube,
  QISKIT_EDUCATION.hostEvent
]

const QISKIT_ADVOCATES: LabeledLinks = {
  advocates: {
    label: 'Become an Advocate',
    url: '/advocates#become-an-advocate',
    linkType: 'nuxtLink'
  }
}

const ORDERED_QISKIT_ADVOCATES: Array<NavLink> = [
  QISKIT_ADVOCATES.advocates
]

const QISKIT_EXPERIMENTS: LabeledLinks = {
  experiments: {
    label: 'Browse the experiments',
    url: '/experiments#browse-the-experiments',
    linkType: 'nuxtLink'
  }
}

const ORDERED_QISKIT_EXPERIMENTS: Array<NavLink> = [
  QISKIT_EXPERIMENTS.experiments
]

type FooterSubsection = {
  title: string,
  elements: Array<NavLink>
}

type FooterStructure = Array<Array<FooterSubsection>>

const FOOTER_ELEMENTS: FooterStructure = [
  // Elements in the first footer column
  [
    {
      title: 'Qiskit Elements',
      elements: ORDERED_QISKIT_ELEMENTS
    }
  ],
  // Elements in the second footer column
  [
    {
      title: 'Qiskit for Educators',
      elements: ORDERED_QISKIT_EDUCATION
    },
    {
      title: 'Qiskit Advocates',
      elements: ORDERED_QISKIT_ADVOCATES
    },
    {
      title: 'Qiskit Experiments',
      elements: ORDERED_QISKIT_EXPERIMENTS
    }
  ],
  // Elements in the third footer column
  [
    {
      title: 'Social Media',
      elements: ORDERED_SOCIAL_MEDIA
    }
  ]
]

export {
  ORDERED_QISKIT_ELEMENTS,
  ORDERED_COMMUNITY_SUB_LINKS,
  FOOTER_ELEMENTS,
  NavLink
}
