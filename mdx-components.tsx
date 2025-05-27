import type { MDXComponents } from 'mdx/types'
import PrivacyPolicy from '@/data/legal/privacy-policy.mdx'
import TermsOfUse from '@/data/legal/terms-of-use.mdx'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        PrivacyPolicy,
        TermsOfUse
    }
}
