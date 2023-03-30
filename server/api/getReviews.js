

import connectToDatabase from '~/server/DatabaseConnect'
import Reviews from '~/server/models/Reviews'

export default defineEventHandler(async (event)=>{
    const db = await connectToDatabase()

    const AllReviews = await Reviews.find();


    return AllReviews || []

})