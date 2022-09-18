import { AcmeLogo } from '@c/AcmeLogo';
import { Button, Navbar, Text } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';


export interface NavbarsInterface {
	fac?: string
	cot?: string
	req?: string
	usr?: string
	children?: React.ReactNode
}

const Navbars: React.FC<NavbarsInterface> = ({ fac, cot, req, usr }) => {

	const navbarItems = [
		{
			url: '/',
			name: 'Facturas'
		},
		{
			url: '/coti',
			name: 'Cotizaciones'
		},
		{
			url: '/req',
			name: 'F. Requerimientos'
		},
		{
			url: '/conf',
			name: 'Configuraciones'
		},
		{
			url: '/usr',
			name: 'Usuario'
		},
	]

	return (
		<Navbar isBordered variant="sticky">
			<Navbar.Brand>
				<Navbar.Toggle aria-label="toggle navigation" showIn={'xs'} />
				<AcmeLogo />
				<Text b color="inherit" hideIn="xs">LeSavant Invoices</Text>
			</Navbar.Brand>
			<Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
				<Navbar.Link href={fac}>Facturas</Navbar.Link>
				<Navbar.Link href={cot}>Cotizaciones</Navbar.Link>
				<Navbar.Link href={req}>Requerimientos</Navbar.Link>
				<Navbar.Link href={usr}>Usuarios</Navbar.Link>
			</Navbar.Content>
			<Navbar.Content>
				<Navbar.Link color="error">
					Login
				</Navbar.Link>
				<Navbar.Item>
					<Button auto flat color={'primary'}>
						Sign Up
					</Button>
				</Navbar.Item>
			</Navbar.Content>
			<Navbar.Collapse>
				<Navbar.CollapseItem>
					<Link color="inherit" href='#'>Link 2</Link>
				</Navbar.CollapseItem>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navbars;

