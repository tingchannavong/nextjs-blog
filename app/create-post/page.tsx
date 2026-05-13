import GoBack from "../components/GoBack";
import { createPost } from "./actions";

function CreatePostPage() {

  return (
    <div className="flex flex-col gap-2 m-2 p-2">
      <h1 className="text-3xl font-bold">Create Post</h1>
      <form action={createPost} className="flex flex-col gap-2 m-2 p-2 w-200">
        <GoBack />
        <input
          name="title"
          type="text"
          className="border p-2 rounded bg-slate-100"
          placeholder="Your Post Title"
        />
        <textarea
          name="content"
          id=""
          className="border p-2 rounded bg-slate-100"
          placeholder="I am feeling..."
        ></textarea>
        <button
          type="submit"
          className="border p-2 rounded bg-blue-400 hover:bg-blue-700 hover:text-white"
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default CreatePostPage;
