import type { NextApiRequest, NextApiResponse } from 'next'
import { projects } from "../../../lib/utils";

export default async function getSingleProject(req: NextApiRequest, res: NextApiResponse) {
    const project = projects?.find(p => p?.slug === req.query.slug)
    
    if (!!!project) {
        return res.status(402).json({ message: "Not Found" })
    }

    return res.status(200).json({ data: project})
}