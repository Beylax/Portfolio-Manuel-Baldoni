import type { NextApiRequest, NextApiResponse } from 'next'
import { projects } from "../../../lib/utils";

export default function getProjects(req: NextApiRequest, res: NextApiResponse) {
    return res.status(200).json({ data: projects})
}