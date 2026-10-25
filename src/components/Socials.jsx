import { FacebookIcon, InstagramIcon, XIcon, TikTokIcon } from './Icons.jsx'

const socialLinks = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'X', Icon: XIcon },
  { label: 'TikTok', Icon: TikTokIcon },
]

export default function Socials({ small = false }) {
  return (
    <div className={small ? 'socials socials-small' : 'socials'}>
      {socialLinks.map(({ label, Icon }) => (
        <a key={label} href="#" aria-label={label}>
          <Icon />
        </a>
      ))}
    </div>
  )
}
