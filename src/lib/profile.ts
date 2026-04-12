import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
} from "@/components/SocialIcons"

export const profile = {
  name: "Sourav Rajput",
  email: "souravrajput1034@gmail.com",
  phone: "+91 9467342853",
  location: "Mohali, Chandigarh, India",
  github: "https://github.com/SouravBhati01",
  linkedin: "https://www.linkedin.com/in/sourav-rajput-7457b0360/",
  twitter: "https://x.com/SouravRajput_26",
  instagram: "https://instagram.com/itzz_sourav26",
}

export const socials = [
  { Icon: GithubIcon, href: profile.github, label: "GitHub" },
  { Icon: LinkedinIcon, href: profile.linkedin, label: "LinkedIn" },
  { Icon: TwitterIcon, href: profile.twitter, label: "Twitter" },
  { Icon: InstagramIcon, href: profile.instagram, label: "Instagram" },
]
