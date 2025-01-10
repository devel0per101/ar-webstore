export  const getCollections = async () => {  // Makes a function to get collections from the server.
    const collections = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`)  // Requests the collections data from the server using the URL from settings.
    return await collections.json()  // Returns the data as a JSON (a readable format).
}