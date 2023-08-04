import MailSVG from '../assets/icons/MAILicon.svg'

function StickyIcons() {
  return (
    <div>
      <a href="#contact">
        <img src={MailSVG} alt="contact-icon" className="mailicon" />
      </a>
    </div>
  );
}

export default StickyIcons;
