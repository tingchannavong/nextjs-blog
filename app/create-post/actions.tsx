"use server"
// server action used with HTML form object
import { redirect } from "next/navigation";

// FormData is built-in interface
export async function createPost(formData: FormData) {
        // use together with <form> action={} built-in HTML
        const title = formData.get("title");
        console.log('title', title)
        const content = formData.get("content");
        console.log('content', content)
        // save data to db
        redirect('/posts');
    }