import { Card, Container, Row, Text } from '@nextui-org/react';
import React from 'react';


export interface MainInterface {}

const Main: React.FC<MainInterface> = () => {
	return (
		<>
			<Container>
				<Card>
					<Card.Body>
						<Row justify='center' align='center'>
							<Text h6  size={15} color='black'>
								NextUI gives you the best developer experience with all the features
								you need for building beautiful and modern websites and
								applications.
							</Text>
						</Row>
					</Card.Body>
				</Card>
			</Container>
		</>
	);
};

export default Main;
