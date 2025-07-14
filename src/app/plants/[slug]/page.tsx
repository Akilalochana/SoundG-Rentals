import React from 'react'
import PlantCard from './PlantCard'
import { getPlantById } from '@/actions/plant.action';
import { stackServerApp } from '@/stack';
import { SignIn } from '@stackframe/stack';



export async function generateMetadata({params}: {params: {slug: string}}) {
  const [id] = params.slug.split('--'); // Extracting the ID from the slug
  const plant = await getPlantById(id);

  return {
    title: plant ? plant.name : 'Plant Not Found',
    description: plant ? `Details about ${plant.name}` : 'No details available for this plant.',
  };
}



async function page( {params}: {params: {slug: string}}) {

  const user = await stackServerApp.getUser();
  const [id] = params.slug.split('--'); // Extracting the ID from the slug
  const plant = await getPlantById(id);




  if(!plant) {
    return <div className="text-center">Plant not found</div>;
  }

  return (

  
    <div className='mt-7 max-w-7xl mx-auto px-1 grid grid-cols-1  lg:grid-cols-10 gap-5'>
                <div className='lg:col-span-full'>
                    <PlantCard plant={plant} />
                </div>
            </div>
  )
}

export default page