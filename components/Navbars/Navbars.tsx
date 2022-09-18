import { AcmeLogo } from '@c/AcmeLogo';
import { Button, Navbar, Text } from '@nextui-org/react';
import Link from 'next/link';
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

const Navbars: React.FC<NavbarsInterface> = ({
		title, user, btn, navbarItems, children
	}) => {

	const logo = <AcmeLogo/> || 'Sin logo'

	return (
		<Navbar isBordered variant="sticky">
			<Navbar.Brand>
				<Navbar.Toggle aria-label="toggle navigation" showIn={'xs'} />
				{logo}
				<Text b color="inherit" hideIn="xs">
					{title}
				</Text>
			</Navbar.Brand>
			<Navbar.Content enableCursorHighlight hideIn="xs" variant="highlight-rounded">
				{
					navbarItems.map((item, index) => (
						<Navbar.Link key={index} href={item.url}>{item.name}</Navbar.Link>
					))
				}
				{children}
			</Navbar.Content>
			<Navbar.Content>
				<Navbar.Link color="error" href='#'>
					{user}
				</Navbar.Link>
				<Navbar.Item>
					<Button auto flat color={'primary'}>
						{btn}
					</Button>
				</Navbar.Item>
			</Navbar.Content>
			<Navbar.Collapse transitionDelay={100}>
				{
					navbarItems.map((item, index) => (
						<Navbar.CollapseItem key={index}>
							<Link href={item.url}>{item.name}</Link>
						</Navbar.CollapseItem>
					))
				}
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navbars;
