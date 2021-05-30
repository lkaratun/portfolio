import './ContactsPage.scss';
import Email from '../../logos/Email';

export default function ContactsPage() {
	return (
		<section id="contacts" className="page">
			<h4>Let's get in touch!</h4>
			<div className="subHeader">
				<a href="mailto:lev.karatun@gmail.com" target="_blank" rel="noreferrer">
					{/* <object type="image/svg+xml" data="../../logos/email.svg" className="logo">
						Email logo
					</object> */}
					<Email />
					E-mail
				</a>
				{/* <a href="mailto:lev.karatun@gmail.com" target="_blank" rel="noreferrer">
					{' '}
					<object type="image/svg+xml" data="logos/email.svg" className="logo">
						Email logo
					</object>
					E-mail
				</a>
				<a href="https://www.linkedin.com/in/lkaratun" target="_blank" rel="noreferrer">
					{' '}
					<object type="image/svg+xml" data="logos/linkedin.svg" className="logo">
						LinkedIn logo
					</object>
					LinkedIn
				</a>
				<a href="https://github.com/lkaratun" target="_blank" rel="noreferrer">
					{' '}
					<object type="image/svg+xml" data="logos/github.svg" className="logo">
						GitHub logo
					</object>
					GitHub
				</a> */}
			</div>
		</section>
	);
}
