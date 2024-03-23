// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.png";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/light.jpg";
import HeroDark from "./images/dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "0PkCk0";

// Navbar Logo image
export const navLogo = Logo;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="logos:linkedin" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
" Hi! I'm Patrick Cerka and I'm currently a student at the University of Trento. I study Computer engineering and I'm passionate about software engineering, Computer Vision and AI. If you want to know more about me, feel free to contact me with the form at the bottom page!"
/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="devicon:rust" className="display-4" />,
    name: "Rust",
  },
  {
    id: 2,
    skill: <Icon icon="logos:c-plusplus" className="display-4" />,
    name: "C++",
  },
  {
    id: 3,
    skill: <Icon icon="logos:javascript" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="devicon:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 5,
    skill: <Icon icon="devicon:python" className="display-4" />,
    name: "Python",
  },
  {
    id: 6,
    skill: <Icon icon="logos:archlinux" className="display-4" />,
    name: "Linux",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3, example-4"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xnqebrze";
