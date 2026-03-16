import './anchortag.css';
import { useRef } from 'react';

export const AnchorTag = ({ href, children, ...props }) => {


    //No Smooth Scrolling
    const handleClick = (targetSection: any) => {
      const element = document.getElementById(targetSection);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    //Smooth Scrolling working
    const linkClicks = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as HTMLAnchorElement;
        const id = target.getAttribute('href')?.replace('#', '');
        const element = document.getElementById(String(id));
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

const links = [
  { id: "1", label: "Link 1" },
  { id: "2", label: "Link 2" },
  { id: "3", label: "Link 3" },
  { id: "4", label: "Link 4" },
  { id: "5", label: "Link 5" },
  { id: "6", label: "Link 6" },
  { id: "7", label: "Link 7" },
  { id: "8", label: "Link 8" },
  { id: "9", label: "Link 9" },
  { id: "10", label: "Link 10" },
];

  return (
    <div>
      <div
        id="links"
        className='links-container'
      >
       {links.map(link => ( 
        <a id={`${link.id}-link`} href={`#${link.id}`} onClick={linkClicks}>{link.label}</a>
       ))}
      </div>
      <div style={{ marginTop: "400px"}}>
        {links.slice(0,10).map(link => (
          <div key={link.id} id={link.id} className="centered-divDetails">
            {`Section ${link.id}`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnchorTag;