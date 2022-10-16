import React from 'react';


export interface NavbarsInterface {
	title: string
	user: string
	btn: string
	navbarItems: {
		url: string
		name: string
	}[]
	children?: React.ReactNode
}

const Navbars: React.FC<NavbarsInterface> = (props) => {

	return (
		<>
		</>
	);
};

export default Navbars;
