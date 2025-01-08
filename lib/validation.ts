import { z } from 'zod';

export const formSchema = z.object({
    title: z.string().min(3).max(100),
    description: z.string().min(10).max(100),
    category: z.string().min(4).max(50),
    link: z.string().url().refine( async (url) => {
        try {
            //const result = await fetch(url, {method: 'HEAD'});
            //const contentType = result.headers.get("content-type");
            //return contentType?.startsWith('image/');
            return true;
        } catch {
            return false;
        }
    }),
    pitch: z.string().min(10),
});