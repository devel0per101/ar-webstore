import { getCollections } from '@/lib/actions'   // Gets the function to load the collections.
import Image from 'next/image'    // Uses the special Image component to show images.
import Link from 'next/link'      // Uses Link to make items clickable.

const Collections = async () => {     // Makes the Collections component that loads data.
    const collections = await getCollections()    // Waits for the list of collections from the server.
    return (
        <div className="flex flex-col items-center gap-10 py-8 px-5">  {/* Makes a container with spacing and centers the content */}
            <p className='text-heading1-bold'>Collections</p>   {/* Displays the title "Collections" */}
            <div className="flex items-center justify-center gap-8">    {/* Organizes the collection items with space between them */}
                {collections.map((collection: CollectionType) => (      // Loops through each collection to show it.
                    <Link href={`/collections/${collection._id}`} key={collection._id}>  {/* Creates a clickable link for each collection */}
                        <Image
                            key={collection._id}                  // Uses the collection's ID for the image.
                            src={collection.image}               // Shows the image for this collection.
                            alt={collection.title}               // Adds text for the image (if it doesn't load).
                            width={350}                          // Sets the image width.
                            height={200}                         // Sets the image height.
                            className='rounded-lg cursor-pointer'  // Makes the image round and clickable.
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Collections  // Makes the Collections component ready to be used in other parts of the app.
