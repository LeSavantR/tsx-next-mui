import Head from 'next/head';
import React from 'react';


export interface HeadersInterface {}

const Headers: React.FC<HeadersInterface> = () => {
	return (
		<Head>
			<title>Invoices TSX NextJS</title>
			<meta name="description" content="Generated by create next app" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
};

export default Headers;
