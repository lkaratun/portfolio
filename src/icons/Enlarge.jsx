import classNames from 'classnames';

export default function Enlarge({ hidden }) {
	const className = classNames('icon-enlarge', { hidden });

	return (
		<svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path
				fill="#302E28"
				d="M16,7H8C7.4,7,7,7.4,7,8v8c0,0.6,0.4,1,1,1h8c0.6,0,1-0.4,1-1V8C17,7.4,16.6,7,16,7z M16,16H8V8h8V16z"
			/>
			<polygon fill="#302E28" points="5.2,6.7 6.8,5.2 3.9,2.3 6,0 0,0 0,6 2.3,3.9 	" />
			<polygon fill="#302E28" points="17.7,0 19.9,2.3 17,5.2 18.5,6.7 21.6,3.8 24,6 24,0 	" />
			<polygon fill="#302E28" points="18.799,17 17.2,18.5 20.1,21.6 18,24 24,24 24,17.7 21.7,19.9 	" />
			<polygon fill="#302E28" points="5.5,17 2.4,19.9 0,17.8 0,24 6.3,24 4.1,21.6 7,18.6 	" />{' '}
		</svg>
	);
}