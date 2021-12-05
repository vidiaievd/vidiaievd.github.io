import './style.scss';
export const Loader = ({ number = 7 }) => {
	return (
		<div className="wrapper-loader">
			<div className="lds-roller">
				{[...Array(number)].map((node, i) => <div key={i} />)}
			</div>
		</div>
	)
}