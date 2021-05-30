import './ContactsPage.scss';
import Email from '../../logos/Email';
import Linkedin from '../../logos/Linkedin';
import Github from '../../logos/Github';

export default function ContactsPage() {
	return (
		<section id="contacts" className="page">
			<h4>Let's get in touch!</h4>
			<div className="subHeader">
				<a href="mailto:lev.karatun@gmail.com" target="_blank" rel="noreferrer">
					<Email />
					E-mail
				</a>
				<a href="mailto:lev.karatun@gmail.com" target="_blank" rel="noreferrer">
					<Linkedin />
					LinkedIn
				</a>
				<a href="mailto:lev.karatun@gmail.com" target="_blank" rel="noreferrer">
					<Github />
					GitHub
				</a>
			</div>
		</section>
	);
}
