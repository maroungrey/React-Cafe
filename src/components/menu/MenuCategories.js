import React from 'react'
import Button from 'react-bootstrap/Button';
import Data from './MenuData';

export default function MenuCategories({menuCategories, filterItems, setItems}) {
  return (
    <div className='text-center p-3'>
            <div className='mx-auto'>
        {
            menuCategories.map(val => (
                <div className='p-2 d-inline-block'>
                    <Button className='mx-auto' onClick={() => filterItems(val)}>
                        {val}
                    </Button>
                </div>
            ))
        }
            <div className='p-2 d-inline-block'>
                <Button onClick={() => setItems(Data)}>
                    All
                </Button>
            </div>
        </div>
    </div>
  )
}
