import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Home() {
    const [count, setCount] = useState(0);

    const increaseCounter = () => {
        setCount(count+1);
    }

    useEffect(
        () => {
            if(count % 2 === 0)
                console.log("useEffect called!");
        },
        [count]
    )

    return (
        <Card style={
            {
                width: 200,
                backgroundColor: 'gray'
            }
        }>
            <Card.Body>
                <Card.Text>
                    Count: { count }
                </Card.Text>
                <Button variant="primary" onClick={increaseCounter}>
                    +
                </Button>
            </Card.Body>
        </Card>
    )
}