import cn from 'classnames';

export default function Shrink({ hidden }) {
	const className = cn('icon-shrink', { hidden });
	return (
		<svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path
				fill="#302E28"
				d="M17,8c0-0.6-0.4-1-1-1H8C7.4,7,7,7.4,7,8v8c0,0.6,0.4,1,1,1h8c0.6,0,1-0.4,1-1V8z M16,16H8V8h8V16z"
			/>
			<polygon fill="#302E28" points="0.8,7 7,7 7,0.7 4.6,2.8 1.6,0 0,1.5 2.9,4.6 	" />
			<polygon fill="#302E28" points="21.2,4.6 24,1.6 22.5,0 19.4,2.9 17,0.8 17,7 23.3,7 	" />
			<polygon fill="#302E28" points="23.2,17 17,17 17,23.3 19.4,21.2 22.4,24 24,22.5 21.1,19.4 	" />
			<polygon fill="#302E28" points="2.8,19.4 0,22.4 1.5,24 4.6,21.1 7,23.3 7,17 0.7,17 	" />{' '}
		</svg>
	);
}
